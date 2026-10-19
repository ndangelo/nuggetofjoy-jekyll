(function () {
  if (!window.CMS || typeof createClass !== "function" || typeof h !== "function") return;

  var MODES = [
    { id: "visual", label: "Visual" },
    { id: "markdown", label: "Markdown" },
    { id: "html", label: "HTML" }
  ];

  function renderMarkdown(source) {
    if (window.marked && typeof window.marked.parse === "function") return window.marked.parse(source || "");
    if (window.marked && typeof window.marked === "function") return window.marked(source || "");
    return "<pre>" + String(source || "").replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    }) + "</pre>";
  }

  function safeHtml(source) {
    var rendered = renderMarkdown(source);
    return window.DOMPurify ? window.DOMPurify.sanitize(rendered, { ADD_ATTR: ["target", "class", "style"] }) : rendered;
  }

  var BodyEditor = createClass({
    getInitialState: function () { return { mode: "visual" }; },
    componentDidMount: function () { this.setupCodeMirror(); this.syncVisual(); },
    componentDidUpdate: function (prevProps) {
      if (this.state.mode === "html") this.setupCodeMirror();
      if (prevProps.value !== this.props.value) {
        if (this.cm && this.cm.getValue() !== (this.props.value || "")) {
          var cursor = this.cm.getCursor();
          this.cm.setValue(this.props.value || "");
          this.cm.setCursor(cursor);
        }
        this.syncVisual();
      }
    },
    componentWillUnmount: function () {
      if (this.cm) { this.cm.toTextArea(); this.cm = null; }
    },
    changeMode: function (mode) {
      this.setState({ mode: mode }, function () {
        if (mode === "html") this.setupCodeMirror();
        if (mode === "visual") this.syncVisual();
      }.bind(this));
    },
    setupCodeMirror: function () {
      if (this.state.mode !== "html" || !this.htmlTextArea || !window.CodeMirror) return;
      if (this.cm && this.cm.getTextArea() !== this.htmlTextArea) {
        this.cm.toTextArea(); this.cm = null;
      }
      if (this.cm) { this.cm.refresh(); return; }
      this.cm = window.CodeMirror.fromTextArea(this.htmlTextArea, {
        mode: "htmlmixed", lineNumbers: true, lineWrapping: true,
        tabSize: 2, indentUnit: 2, viewportMargin: 30
      });
      this.cm.setValue(this.props.value || "");
      this.cm.on("change", function (editor) {
        var value = editor.getValue();
        if (value !== (this.props.value || "")) this.props.onChange(value);
      }.bind(this));
    },
    syncVisual: function () {
      if (!this.visualNode) return;
      var rendered = safeHtml(this.props.value || "");
      if (this.visualNode.innerHTML !== rendered) this.visualNode.innerHTML = rendered;
    },
    onVisualInput: function () {
      if (this.visualNode) this.props.onChange(this.visualNode.innerHTML);
    },
    render: function () {
      var mode = this.state.mode;
      var buttons = MODES.map(function (item) {
        return h("button", {
          key: item.id, type: "button",
          className: "noj-mode-tab" + (mode === item.id ? " is-active" : ""),
          "aria-pressed": mode === item.id ? "true" : "false",
          onClick: function () { this.changeMode(item.id); }.bind(this)
        }, item.label);
      }.bind(this));
      var hint = mode === "visual"
        ? "Visual editing · saves as HTML"
        : mode === "markdown"
          ? "Markdown / raw source · HTML is allowed"
          : "HTML source · syntax highlighting and line numbers";
      return h("section", { className: "noj-body-editor" },
        h("div", { className: "noj-editor-toolbar" },
          h("div", { className: "noj-mode-tabs", role: "tablist", "aria-label": "Body editing mode" }, buttons),
          h("span", { className: "noj-editor-hint" }, hint)
        ),
        mode === "visual" ? h("div", {
          className: "noj-visual-editor", contentEditable: true,
          suppressContentEditableWarning: true, role: "textbox",
          "aria-multiline": "true", "aria-label": "Visual body editor",
          ref: function (node) { this.visualNode = node; }.bind(this),
          onInput: this.onVisualInput
        }) : null,
        mode === "markdown" ? h("textarea", {
          className: "noj-markdown-editor", value: this.props.value || "",
          spellCheck: false, "aria-label": "Markdown source editor",
          onChange: function (event) { this.props.onChange(event.target.value); }.bind(this)
        }) : null,
        mode === "html" ? h("textarea", {
          className: "noj-html-editor", defaultValue: this.props.value || "",
          spellCheck: false, "aria-label": "HTML source editor",
          ref: function (node) { this.htmlTextArea = node; }.bind(this)
        }) : null
      );
    }
  });

  var BodyPreview = createClass({
    render: function () {
      return h("div", {
        className: "noj-body-widget-preview",
        dangerouslySetInnerHTML: { __html: safeHtml(this.props.value || "") }
      });
    }
  });

  CMS.registerWidget("noj_body", BodyEditor, BodyPreview);

  // Dedicated CSS widget: normalize legacy {code, lang} values and plain strings.
  function cssString(value) {
    if (value && typeof value === "object") value = value.code || "";
    return String(value || "");
  }
  var CssEditor = createClass({
    componentDidMount: function () { this.mountEditor(); },
    componentDidUpdate: function () {
      if (!this.cm && this.textarea) this.mountEditor();
      if (this.cm && this.cm.getValue() !== cssString(this.props.value)) {
        this.cm.setValue(cssString(this.props.value));
      }
      if (this.cm) this.cm.refresh();
    },
    componentWillUnmount: function () {
      if (this.cm) { this.cm.toTextArea(); this.cm = null; }
    },
    mountEditor: function () {
      if (!this.textarea || !window.CodeMirror || this.cm) return;
      this.cm = window.CodeMirror.fromTextArea(this.textarea, {
        mode: "css", lineNumbers: true, lineWrapping: true,
        tabSize: 2, indentUnit: 2, viewportMargin: 30,
        extraKeys: { "Tab": function (cm) { cm.replaceSelection("  ", "end"); } }
      });
      this.cm.setValue(cssString(this.props.value));
      this.cm.on("change", function (editor) {
        var value = editor.getValue();
        if (value !== cssString(this.props.value)) this.props.onChange(value);
      }.bind(this));
      this.cm.refresh();
    },
    render: function () {
      return h("div", { className: "noj-css-field" },
        h("div", { className: "noj-css-field-head" },
          h("span", {}, "CSS source"),
          h("span", { className: "noj-css-field-note" }, "Changes appear in the Preview pane")
        ),
        h("textarea", {
          ref: function (node) { this.textarea = node; }.bind(this),
          defaultValue: cssString(this.props.value),
          spellCheck: false,
          "aria-label": "Custom CSS source"
        })
      );
    }
  });
  var CssPreview = createClass({
    render: function () {
      var value = this.props.value;
      if (value && typeof value === "object") value = value.code || "";
      return h("pre", { className: "noj-css-preview-value" }, String(value || "No custom CSS yet."));
    }
  });
  CMS.registerWidget("noj_css", CssEditor, CssPreview);

})();