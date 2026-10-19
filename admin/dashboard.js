(function(){
  "use strict";
  var base=(window.NOJ_BASEURL||"").replace(/\/$/,"");
  var rows=[], els={};
  function el(id){return document.getElementById(id)}
  function esc(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function dateText(value){if(!value)return "—";var d=new Date(value);if(isNaN(d.getTime()))return "—";return d.toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"})}
  function cmsHref(item){var collection=item.type==="page"?"content_pages":"posts";var path=item.editorPath||"";return base+"/admin/cms.html#/collections/"+collection+(path?"/entries/"+encodeURIComponent(path):"")}
  function render(){
    var query=(els.search.value||"").trim().toLowerCase(),type=els.type.value,sort=els.sort.value;
    var filtered=rows.filter(function(item){return (type==="all"||item.type===type)&&(!query||[item.title,item.description,item.categories,item.url].join(" ").toLowerCase().indexOf(query)!==-1)});
    filtered.sort(function(a,b){if(sort==="title")return a.title.localeCompare(b.title);var da=new Date(a.date).getTime()||0,db=new Date(b.date).getTime()||0;return sort==="oldest"?da-db:db-da});
    var target=els.rows;
    if(!filtered.length){target.innerHTML='<tr><td colspan="5" class="empty">No matching content. Try another search or filter.</td></tr>'}
    else {target.innerHTML=filtered.slice(0,40).map(function(item){
      var cls=item.type==="page"?" page":"";
      var excerpt=item.description||item.categories||"";
      return '<tr><td class="title-cell"><a href="'+esc(cmsHref(item))+'">'+esc(item.title||"Untitled")+'</a><small>'+esc(excerpt)+'</small></td><td><span class="type-pill'+cls+'">'+(item.type==="page"?"Page":"Blog post")+'</span></td><td class="date-cell">'+esc(dateText(item.date))+'</td><td><a class="public-link" href="'+esc(item.url)+'" target="_blank" rel="noopener">View ↗</a></td><td><a class="edit-link" href="'+esc(cmsHref(item))+'">Edit item</a></td></tr>'
    }).join("")}
    els.result.textContent="Showing "+Math.min(filtered.length,40)+" of "+filtered.length+" items";
  }
  function init(data){
    var posts=Array.isArray(data.posts)?data.posts:[],pages=Array.isArray(data.pages)?data.pages:[];
    rows=posts.map(function(x){x.type="post";return x}).concat(pages.map(function(x){x.type="page";return x}));
    el("post-count").textContent=posts.length;el("page-count").textContent=pages.length;
    el("total-posts").textContent=posts.length.toLocaleString();el("total-pages").textContent=pages.length.toLocaleString();
    els={search:el("search-content"),type:el("content-type"),sort:el("content-sort"),rows:el("content-rows"),result:el("result-count")};
    els.search.addEventListener("input",render);els.type.addEventListener("change",render);els.sort.addEventListener("change",render);
    render();
  }
  fetch(base+"/admin/index-data.json",{cache:"no-store"}).then(function(response){if(!response.ok)throw new Error("Could not load content index");return response.json()}).then(init).catch(function(){
    el("content-rows").innerHTML='<tr><td colspan="5" class="empty">The content index could not load. Open the full content editor to continue.</td></tr>';
    el("result-count").textContent="Content index unavailable";
    el("total-posts").textContent="—";el("total-pages").textContent="—";
  });
})();