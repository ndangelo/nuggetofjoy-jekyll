(function () {
  "use strict";

  var resultsContainer = document.getElementById("noj-search-results");
  var status = document.getElementById("noj-search-status");
  var form = document.querySelector(".noj-search-page-form");
  var input = document.getElementById("noja-search-page");

  if (!resultsContainer || !status || !form || !input) return;

  var params = new URLSearchParams(window.location.search);
  var initialQuery = params.get("s") || "";
  input.value = initialQuery;

  function normalize(value) {
    return String(value || "")
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  }

  function addResult(post, query) {
    var link = document.createElement("a");
    link.className = "noj-content-row";
    link.href = post.url;

    var date = document.createElement("span");
    date.className = "noj-row-date";
    date.textContent = post.date || "";

    var body = document.createElement("span");
    var title = document.createElement("h2");
    title.className = "noj-row-title";
    title.textContent = post.title || "Untitled";
    body.appendChild(title);

    var excerpt = document.createElement("p");
    excerpt.className = "noj-row-excerpt";
    excerpt.textContent = post.excerpt || "";
    body.appendChild(excerpt);

    var matchedTerms = document.createElement("span");
    matchedTerms.className = "noj-row-type";
    matchedTerms.textContent = "Archive result";
    body.appendChild(matchedTerms);

    var arrow = document.createElement("span");
    arrow.className = "noj-row-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";

    link.append(date, body, arrow);
    resultsContainer.appendChild(link);
  }

  function runSearch(posts, rawQuery) {
    var query = normalize(rawQuery);
    resultsContainer.replaceChildren();

    if (!query) {
      status.textContent = "Enter a search term to search the archive.";
      return;
    }

    var terms = query.split(/\s+/).filter(Boolean);
    var matches = posts.map(function (post) {
      var title = normalize(post.title);
      var categories = normalize(post.categories);
      var tags = normalize(post.tags);
      var text = normalize(post.text);
      var excerpt = normalize(post.excerpt);
      var haystack = [title, categories, tags, excerpt, text].join(" ");
      var score = 0;

      terms.forEach(function (term) {
        if (title.includes(term)) score += 8;
        if (categories.includes(term) || tags.includes(term)) score += 5;
        if (excerpt.includes(term)) score += 3;
        if (text.includes(term)) score += 1;
      });

      var allTermsMatch = terms.every(function (term) {
        return haystack.includes(term);
      });
      return { post: post, score: score, allTermsMatch: allTermsMatch };
    }).filter(function (item) {
      return item.score > 0 && item.allTermsMatch;
    }).sort(function (a, b) {
      return b.score - a.score;
    });

    if (!matches.length) {
      status.textContent = "No results found for “" + rawQuery.trim() + "”. Try a different keyword.";
      return;
    }

    status.textContent = matches.length + (matches.length === 1 ? " result" : " results") + " for “" + rawQuery.trim() + "”.";
    matches.forEach(function (item) { addResult(item.post, query); });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var query = input.value.trim();
    var url = new URL(window.location.href);
    if (query) url.searchParams.set("s", query);
    else url.searchParams.delete("s");
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    if (window.nojSearchPosts) runSearch(window.nojSearchPosts, query);
  });

  fetch(resultsContainer.getAttribute("data-index-url"))
    .then(function (response) {
      if (!response.ok) throw new Error("Search index request failed: " + response.status);
      return response.json();
    })
    .then(function (posts) {
      window.nojSearchPosts = posts;
      runSearch(posts, initialQuery);
    })
    .catch(function (error) {
      console.error("Nugget of Joy search could not load.", error);
      status.textContent = "Search is temporarily unavailable. Please refresh the page and try again.";
    });
})();