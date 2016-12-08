// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.labs.userAgent.device');
goog.require('clojure.string');
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id(devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(cljs.core.cst$kw$cardpath,path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
el.id = id;

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__4655__auto__ = node.firstChild;
if(cljs.core.truth_(temp__4655__auto__)){
var first_child = temp__4655__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__4655__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__4655__auto__)){
var heads = temp__4655__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild((function (){var G__19733 = "com-rigsomelight-code-highlight-css";
var G__19734 = "/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__19733,G__19734) : devcards.system.create_style_element.call(null,G__19733,G__19734));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-css"))){
} else {
head.appendChild((function (){var G__19735 = "com-rigsomelight-devcards-css";
var G__19736 = "body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__19735,G__19736) : devcards.system.create_style_element.call(null,G__19735,G__19736));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild((function (){var G__19737 = "com-rigsomelight-devcards-addons-css";
var G__19738 = "/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__19737,G__19738) : devcards.system.create_style_element.call(null,G__19737,G__19738));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-edn-css"))){
} else {
head.appendChild((function (){var G__19739 = "com-rigsomelight-edn-css";
var G__19740 = ".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__19739,G__19740) : devcards.system.create_style_element.call(null,G__19739,G__19740));
})());
}

if(cljs.core.truth_((function (){var or__6409__auto__ = devcards.system.get_element_by_id("com-rigsomelight-code-highlighting");
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return goog.labs.userAgent.device.isMobile();
}
})())){
return null;
} else {
return head.appendChild((function (){var G__19741 = "com-rigsomelight-code-highlighting";
var G__19742 = "!function(e){\"undefined\"!=typeof exports?e(exports):(window.hljs=e({}),\"function\"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,\"&amp;\").replace(/</gm,\"&lt;\").replace(/>/gm,\"&gt;\")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+\" \"+(e.parentNode?e.parentNode.className:\"\")).split(/\\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,\"\")}),n.filter(function(e){return N(e)||/no(-?)highlight/.test(e)})[0]}function o(e,n){var t={};for(var r in e)t[r]=e[r];if(n)for(var r in n)t[r]=n[r];return t}function i(e){var n=[];return function r(e,a){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?a+=o.nodeValue.length:1==o.nodeType&&(n.push({event:\"start\",offset:a,node:o}),a=r(o,a),t(o).match(/br|hr|img|input/)||n.push({event:\"stop\",offset:a,node:o}));return a}(e,0),n}function c(e,r,a){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:\"start\"==r[0].event?e:r:e.length?e:r}function i(e){function r(e){return\" \"+e.nodeName+'=\"'+n(e.value)+'\"'}l+=\"<\"+t(e)+Array.prototype.map.call(e.attributes,r).join(\"\")+\">\"}function c(e){l+=\"</\"+t(e)+\">\"}function u(e){(\"start\"==e.event?i:c)(e.node)}for(var s=0,l=\"\",f=[];e.length||r.length;){var g=o();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=o();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(i)}else\"start\"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return RegExp(n(t),\"m\"+(e.cI?\"i\":\"\")+(r?\"g\":\"\"))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(\" \").forEach(function(e){var t=e.split(\"|\");c[t[0]]=[n,t[1]?Number(t[1]):1]})};\"string\"==typeof a.k?u(\"keyword\",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=c}a.lR=t(a.l||/\\b[A-Za-z0-9_]+\\b/,!0),i&&(a.bK&&(a.b=\"\\\\b(\"+a.bK.split(\" \").join(\"|\")+\")\\\\b\"),a.b||(a.b=/\\B|\\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\\B|\\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||\"\",a.eW&&i.tE&&(a.tE+=(a.e?\"|\":\"\")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push(\"self\"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?\"\\\\.?(\"+e.b+\")\\\\.?\":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join(\"|\"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,o){function i(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function c(e,n){return r(e.eR,n)?e:e.eW?c(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=x.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?\"\":E.classPrefix,o='<span class=\"'+a,i=t?\"\":\"</span>\";return o+=e+'\">',o+n+i}function d(){if(!w.k)return n(y);var e=\"\",t=0;w.lR.lastIndex=0;for(var r=w.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(w,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=w.lR.lastIndex,r=w.lR.exec(y)}return e+n(y.substr(t))}function h(){if(w.sL&&!R[w.sL])return n(y);var e=w.sL?s(w.sL,y,!0,L[w.sL]):l(y);return w.r>0&&(B+=e.r),\"continuous\"==w.subLanguageMode&&(L[w.sL]=e.top),p(e.language,e.value,!1,!0)}function v(){return void 0!==w.sL?h():d()}function b(e,t){var r=e.cN?p(e.cN,\"\",!0):\"\";e.rB?(M+=r,y=\"\"):e.eB?(M+=n(t)+r,y=\"\"):(M+=r,y=t),w=Object.create(e,{parent:{value:w}})}function m(e,t){if(y+=e,void 0===t)return M+=v(),0;var r=i(t,w);if(r)return M+=v(),b(r,t),r.rB?0:t.length;var a=c(w,t);if(a){var o=w;o.rE||o.eE||(y+=t),M+=v();do w.cN&&(M+=\"</span>\"),B+=w.r,w=w.parent;while(w!=a.parent);return o.eE&&(M+=n(t)),y=\"\",a.starts&&b(a.starts,\"\"),o.rE?0:t.length}if(f(t,w))throw new Error('Illegal lexeme \"'+t+'\" for mode \"'+(w.cN||\"<unnamed>\")+'\"');return y+=t,t.length||1}var x=N(e);if(!x)throw new Error('Unknown language: \"'+e+'\"');u(x);for(var w=o||x,L={},M=\"\",k=w;k!=x;k=k.parent)k.cN&&(M=p(k.cN,\"\",!0)+M);var y=\"\",B=0;try{for(var C,j,I=0;;){if(w.t.lastIndex=I,C=w.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}m(t.substr(I));for(var k=w;k.parent;k=k.parent)k.cN&&(M+=\"</span>\");return{r:B,value:M,language:e,top:w}}catch(A){if(-1!=A.message.indexOf(\"Illegal\"))return{r:0,value:n(t)};throw A}}function l(e,t){t=t||E.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\\t)+)/gm,function(e,n){return n.replace(/\\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\\n/g,\"<br>\")),e}function g(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/(\\s|^)hljs(\\s|$)/)||a.push(\"hljs\"),r&&a.push(r),a.join(\" \").trim()}function p(e){var n=a(e);if(!/no(-?)highlight/.test(n)){var t;E.useBR?(t=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\"),t.innerHTML=e.innerHTML.replace(/\\n/g,\"\").replace(/<br[ \\/]*>/g,\"\\n\")):t=e;var r=t.textContent,o=n?s(n,r,!0):l(r),u=i(t);if(u.length){var p=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\");p.innerHTML=o.value,o.value=c(u,i(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=g(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll(\"pre code\");Array.prototype.forEach.call(e,p)}}function v(){addEventListener(\"DOMContentLoaded\",h,!1),addEventListener(\"load\",h,!1)}function b(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function m(){return Object.keys(R)}function N(e){return R[e]||R[x[e]]}var E={classPrefix:\"hljs-\",tabReplace:null,useBR:!1,languages:void 0},R={},x={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=b,e.listLanguages=m,e.getLanguage=N,e.inherit=o,e.IR=\"[a-zA-Z][a-zA-Z0-9_]*\",e.UIR=\"[a-zA-Z_][a-zA-Z0-9_]*\",e.NR=\"\\\\b\\\\d+(\\\\.\\\\d+)?\",e.CNR=\"(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)\",e.BNR=\"\\\\b(0b[01]+)\",e.RSR=\"!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~\",e.BE={b:\"\\\\\\\\[\\\\s\\\\S]\",r:0},e.ASM={cN:\"string\",b:\"'\",e:\"'\",i:\"\\\\n\",c:[e.BE]},e.QSM={cN:\"string\",b:'\"',e:'\"',i:\"\\\\n\",c:[e.BE]},e.PWM={b:/\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\\b/},e.CLCM={cN:\"comment\",b:\"//\",e:\"$\",c:[e.PWM]},e.CBCM={cN:\"comment\",b:\"/\\\\*\",e:\"\\\\*/\",c:[e.PWM]},e.HCM={cN:\"comment\",b:\"#\",e:\"$\",c:[e.PWM]},e.NM={cN:\"number\",b:e.NR,r:0},e.CNM={cN:\"number\",b:e.CNR,r:0},e.BNM={cN:\"number\",b:e.BNR,r:0},e.CSSNM={cN:\"number\",b:e.NR+\"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?\",r:0},e.RM={cN:\"regexp\",b:/\\//,e:/\\/[gimuy]*/,i:/\\n/,c:[e.BE,{b:/\\[/,e:/\\]/,r:0,c:[e.BE]}]},e.TM={cN:\"title\",b:e.IR,r:0},e.UTM={cN:\"title\",b:e.UIR,r:0},e});hljs.registerLanguage(\"ruby\",function(e){var b=\"[a-zA-Z_]\\\\w*[!?=]?|[-+~]\\\\@|<<|>>|=~|===?|<=>|[<>]=?|\\\\*\\\\*|[-/+%^&*~`|]|\\\\[\\\\]=?\",r=\"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor\",c={cN:\"yardoctag\",b:\"@[A-Za-z]+\"},a={cN:\"value\",b:\"#<\",e:\">\"},s={cN:\"comment\",v:[{b:\"#\",e:\"$\",c:[c]},{b:\"^\\\\=begin\",e:\"^\\\\=end\",c:[c],r:10},{b:\"^__END__\",e:\"\\\\n$\"}]},n={cN:\"subst\",b:\"#\\\\{\",e:\"}\",k:r},t={cN:\"string\",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/\"/,e:/\"/},{b:/`/,e:/`/},{b:\"%[qQwWx]?\\\\(\",e:\"\\\\)\"},{b:\"%[qQwWx]?\\\\[\",e:\"\\\\]\"},{b:\"%[qQwWx]?{\",e:\"}\"},{b:\"%[qQwWx]?<\",e:\">\"},{b:\"%[qQwWx]?/\",e:\"/\"},{b:\"%[qQwWx]?%\",e:\"%\"},{b:\"%[qQwWx]?-\",e:\"-\"},{b:\"%[qQwWx]?\\\\|\",e:\"\\\\|\"},{b:/\\B\\?(\\\\\\d{1,3}|\\\\x[A-Fa-f0-9]{1,2}|\\\\u[A-Fa-f0-9]{4}|\\\\?\\S)\\b/}]},i={cN:\"params\",b:\"\\\\(\",e:\"\\\\)\",k:r},d=[t,a,s,{cN:\"class\",bK:\"class module\",e:\"$|;\",i:/=/,c:[e.inherit(e.TM,{b:\"[A-Za-z_]\\\\w*(::\\\\w+)*(\\\\?|\\\\!)?\"}),{cN:\"inheritance\",b:\"<\\\\s*\",c:[{cN:\"parent\",b:\"(\"+e.IR+\"::)?\"+e.IR}]},s]},{cN:\"function\",bK:\"def\",e:\" |$|;\",r:0,c:[e.inherit(e.TM,{b:b}),i,s]},{cN:\"constant\",b:\"(::)?(\\\\b[A-Z]\\\\w*(::)?)+\",r:0},{cN:\"symbol\",b:e.UIR+\"(\\\\!|\\\\?)?:\",r:0},{cN:\"symbol\",b:\":\",c:[t,{b:b}],r:0},{cN:\"number\",b:\"(\\\\b0[0-7_]+)|(\\\\b0x[0-9a-fA-F_]+)|(\\\\b[1-9][0-9_]*(\\\\.[0-9_]+)?)|[0_]\\\\b\",r:0},{cN:\"variable\",b:\"(\\\\$\\\\W)|((\\\\$|\\\\@\\\\@?)(\\\\w+))\"},{b:\"(\"+e.RSR+\")\\\\s*\",c:[a,s,{cN:\"regexp\",c:[e.BE,n],i:/\\n/,v:[{b:\"/\",e:\"/[a-z]*\"},{b:\"%r{\",e:\"}[a-z]*\"},{b:\"%r\\\\(\",e:\"\\\\)[a-z]*\"},{b:\"%r!\",e:\"![a-z]*\"},{b:\"%r\\\\[\",e:\"\\\\][a-z]*\"}]}],r:0}];n.c=d,i.c=d;var l=\"[>?]>\",u=\"[\\\\w#]+\\\\(\\\\w+\\\\):\\\\d+:\\\\d+>\",N=\"(\\\\w+-)?\\\\d+\\\\.\\\\d+\\\\.\\\\d(p\\\\d+)?[^>]+>\",o=[{b:/^\\s*=>/,cN:\"status\",starts:{e:\"$\",c:d}},{cN:\"prompt\",b:\"^(\"+l+\"|\"+u+\"|\"+N+\")\",starts:{e:\"$\",c:d}}];return{aliases:[\"rb\",\"gemspec\",\"podspec\",\"thor\",\"irb\"],k:r,c:[s].concat(o).concat(d)}});hljs.registerLanguage(\"javascript\",function(r){return{aliases:[\"js\"],k:{keyword:\"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class\",literal:\"true false null undefined NaN Infinity\",built_in:\"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document\"},c:[{cN:\"pi\",r:10,v:[{b:/^\\s*('|\")use strict('|\")/},{b:/^\\s*('|\")use asm('|\")/}]},r.ASM,r.QSM,r.CLCM,r.CBCM,r.CNM,{b:\"(\"+r.RSR+\"|\\\\b(case|return|throw)\\\\b)\\\\s*\",k:\"return throw case\",c:[r.CLCM,r.CBCM,r.RM,{b:/</,e:/>;/,r:0,sL:\"xml\"}],r:0},{cN:\"function\",bK:\"function\",e:/\\{/,eE:!0,c:[r.inherit(r.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:\"params\",b:/\\(/,e:/\\)/,c:[r.CLCM,r.CBCM],i:/[\"'\\(]/}],i:/\\[|%/},{b:/\\$[(.]/},{b:\"\\\\.\"+r.IR,r:0}]}});hljs.registerLanguage(\"clojure\",function(e){var t={built_in:\"def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize\"},r=\"a-zA-Z_\\\\-!.?+*=<>&#'\",n=\"[\"+r+\"][\"+r+\"0-9/;:]*\",a=\"[-+]?\\\\d+(\\\\.\\\\d+)?\",o={b:n,r:0},s={cN:\"number\",b:a,r:0},c=e.inherit(e.QSM,{i:null}),i={cN:\"comment\",b:\";\",e:\"$\",r:0},d={cN:\"literal\",b:/\\b(true|false|nil)\\b/},l={cN:\"collection\",b:\"[\\\\[\\\\{]\",e:\"[\\\\]\\\\}]\"},m={cN:\"comment\",b:\"\\\\^\"+n},p={cN:\"comment\",b:\"\\\\^\\\\{\",e:\"\\\\}\"},u={cN:\"attribute\",b:\"[:]\"+n},f={cN:\"list\",b:\"\\\\(\",e:\"\\\\)\"},h={eW:!0,r:0},y={k:t,l:n,cN:\"keyword\",b:n,starts:h},b=[f,c,m,p,i,u,l,s,d,o];return f.c=[{cN:\"comment\",b:\"comment\"},y,h],h.c=b,l.c=b,{aliases:[\"clj\"],i:/\\S/,c:[f,c,m,p,i,u,l,s,d]}});hljs.registerLanguage(\"bash\",function(e){var t={cN:\"variable\",v:[{b:/\\$[\\w\\d#@][\\w\\d_]*/},{b:/\\$\\{(.*?)\\}/}]},s={cN:\"string\",b:/\"/,e:/\"/,c:[e.BE,t,{cN:\"variable\",b:/\\$\\(/,e:/\\)/,c:[e.BE]}]},a={cN:\"string\",b:/'/,e:/'/};return{aliases:[\"sh\",\"zsh\"],l:/-?[a-z\\.]+/,k:{keyword:\"if then else elif fi for while in do done case esac function\",literal:\"true false\",built_in:\"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp\",operator:\"-ne -eq -lt -gt -f -d -e -s -l -a\"},c:[{cN:\"shebang\",b:/^#![^\\n]+sh\\s*$/,r:10},{cN:\"function\",b:/\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,rB:!0,c:[e.inherit(e.TM,{b:/\\w[\\w\\d_]*/})],r:0},e.HCM,e.NM,s,a,t]}});hljs.registerLanguage(\"css\",function(e){var c=\"[a-zA-Z-][a-zA-Z0-9_-]*\",a={cN:\"function\",b:c+\"\\\\(\",rB:!0,eE:!0,e:\"\\\\(\"};return{cI:!0,i:\"[=/|']\",c:[e.CBCM,{cN:\"id\",b:\"\\\\#[A-Za-z0-9_-]+\"},{cN:\"class\",b:\"\\\\.[A-Za-z0-9_-]+\",r:0},{cN:\"attr_selector\",b:\"\\\\[\",e:\"\\\\]\",i:\"$\"},{cN:\"pseudo\",b:\":(:)?[a-zA-Z0-9\\\\_\\\\-\\\\+\\\\(\\\\)\\\\\\\"\\\\']+\"},{cN:\"at_rule\",b:\"@(font-face|page)\",l:\"[a-z-]+\",k:\"font-face page\"},{cN:\"at_rule\",b:\"@\",e:\"[{;]\",c:[{cN:\"keyword\",b:/\\S+/},{b:/\\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:\"tag\",b:c,r:0},{cN:\"rules\",b:\"{\",e:\"}\",i:\"[^\\\\s]\",r:0,c:[e.CBCM,{cN:\"rule\",b:\"[^\\\\s]\",rB:!0,e:\";\",eW:!0,c:[{cN:\"attribute\",b:\"[A-Z\\\\_\\\\.\\\\-]+\",e:\":\",eE:!0,i:\"[^\\\\s]\",starts:{cN:\"value\",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:\"hexcolor\",b:\"#[0-9A-Fa-f]+\"},{cN:\"important\",b:\"!important\"}]}}]}]}]}});hljs.registerLanguage(\"clojure-repl\",function(){return{c:[{cN:\"prompt\",b:/^([\\w.-]+|\\s*#_)=>/,starts:{e:/$/,sL:\"clojure\",subLanguageMode:\"continuous\"}}]}});hljs.registerLanguage(\"markdown\",function(){return{aliases:[\"md\",\"mkdown\",\"mkd\"],c:[{cN:\"header\",v:[{b:\"^#{1,6}\",e:\"$\"},{b:\"^.+?\\\\n[=-]{2,}$\"}]},{b:\"<\",e:\">\",sL:\"xml\",r:0},{cN:\"bullet\",b:\"^([*+-]|(\\\\d+\\\\.))\\\\s+\"},{cN:\"strong\",b:\"[*_]{2}.+?[*_]{2}\"},{cN:\"emphasis\",v:[{b:\"\\\\*.+?\\\\*\"},{b:\"_.+?_\",r:0}]},{cN:\"blockquote\",b:\"^>\\\\s+\",e:\"$\"},{cN:\"code\",v:[{b:\"`.+?`\"},{b:\"^( {4}|\t)\",e:\"$\",r:0}]},{cN:\"horizontal_rule\",b:\"^[-\\\\*]{3,}\",e:\"$\"},{b:\"\\\\[.+?\\\\][\\\\(\\\\[].*?[\\\\)\\\\]]\",rB:!0,c:[{cN:\"link_label\",b:\"\\\\[\",e:\"\\\\]\",eB:!0,rE:!0,r:0},{cN:\"link_url\",b:\"\\\\]\\\\(\",e:\"\\\\)\",eB:!0,eE:!0},{cN:\"link_reference\",b:\"\\\\]\\\\[\",e:\"\\\\]\",eB:!0,eE:!0}],r:10},{b:\"^\\\\[.+\\\\]:\",rB:!0,c:[{cN:\"link_reference\",b:\"\\\\[\",e:\"\\\\]:\",eB:!0,eE:!0,starts:{cN:\"link_url\",e:\"$\"}}]}]}});hljs.registerLanguage(\"xml\",function(){var t=\"[A-Za-z0-9\\\\._:-]+\",e={b:/<\\?(php)?(?!\\w)/,e:/\\?>/,sL:\"php\",subLanguageMode:\"continuous\"},c={eW:!0,i:/</,r:0,c:[e,{cN:\"attribute\",b:t,r:0},{b:\"=\",r:0,c:[{cN:\"value\",c:[e],v:[{b:/\"/,e:/\"/},{b:/'/,e:/'/},{b:/[^\\s\\/>]+/}]}]}]};return{aliases:[\"html\",\"xhtml\",\"rss\",\"atom\",\"xsl\",\"plist\"],cI:!0,c:[{cN:\"doctype\",b:\"<!DOCTYPE\",e:\">\",r:10,c:[{b:\"\\\\[\",e:\"\\\\]\"}]},{cN:\"comment\",b:\"<!--\",e:\"-->\",r:10},{cN:\"cdata\",b:\"<\\\\!\\\\[CDATA\\\\[\",e:\"\\\\]\\\\]>\",r:10},{cN:\"tag\",b:\"<style(?=\\\\s|>|$)\",e:\">\",k:{title:\"style\"},c:[c],starts:{e:\"</style>\",rE:!0,sL:\"css\"}},{cN:\"tag\",b:\"<script(?=\\\\s|>|$)\",e:\">\",k:{title:\"script\"},c:[c],starts:{e:\"</script>\",rE:!0,sL:\"javascript\"}},e,{cN:\"pi\",b:/<\\?\\w+/,e:/\\?>/,r:10},{cN:\"tag\",b:\"</?\",e:\"/?>\",c:[{cN:\"title\",b:/[^ \\/><\\n\\t]+/,r:0},c]}]}});hljs.registerLanguage(\"java\",function(e){var a=e.UIR+\"(<\"+e.UIR+\">)?\",t=\"false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private\",c=\"(\\\\b(0b[01_]+)|\\\\b0[xX][a-fA-F0-9_]+|(\\\\b[\\\\d_]+(\\\\.[\\\\d_]*)?|\\\\.[\\\\d_]+)([eE][-+]?\\\\d+)?)[lLfF]?\",r={cN:\"number\",b:c,r:0};return{aliases:[\"jsp\"],k:t,i:/<\\//,c:[{cN:\"javadoc\",b:\"/\\\\*\\\\*\",e:\"\\\\*/\",r:0,c:[{cN:\"javadoctag\",b:\"(^|\\\\s)@[A-Za-z]+\"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:\"class\",bK:\"class interface\",e:/[{;=]/,eE:!0,k:\"class interface\",i:/[:\"\\[\\]]/,c:[{bK:\"extends implements\"},e.UTM]},{bK:\"new throw return\",r:0},{cN:\"function\",b:\"(\"+a+\"\\\\s+)+\"+e.UIR+\"\\\\s*\\\\(\",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.UIR+\"\\\\s*\\\\(\",rB:!0,r:0,c:[e.UTM]},{cN:\"params\",b:/\\(/,e:/\\)/,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},r,{cN:\"annotation\",b:\"@[A-Za-z]+\"}]}});hljs.registerLanguage(\"json\",function(e){var t={literal:\"true false null\"},i=[e.QSM,e.CNM],l={cN:\"value\",e:\",\",eW:!0,eE:!0,c:i,k:t},c={b:\"{\",e:\"}\",c:[{cN:\"attribute\",b:'\\\\s*\"',e:'\"\\\\s*:\\\\s*',eB:!0,eE:!0,c:[e.BE],i:\"\\\\n\",starts:l}],i:\"\\\\S\"},n={b:\"\\\\[\",e:\"\\\\]\",c:[e.inherit(l,{cN:null})],i:\"\\\\S\"};return i.splice(i.length,0,c,n),{c:i,k:t,i:\"\\\\S\"}});";
return (devcards.system.create_script_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_script_element.cljs$core$IFn$_invoke$arity$2(G__19741,G__19742) : devcards.system.create_script_element.call(null,G__19741,G__19742));
})());
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_();

if(cljs.core.truth_(devcards.system.devcards_app_node())){
return null;
} else {
var el = document.createElement("div");
el.id = devcards.system.devcards_app_element_id;

return devcards.system.prepend_child(document.body,el);
}
});

if(typeof devcards.system.history !== 'undefined'){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return [cljs.core.str("!/"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token(path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
var G__19747_19750 = devcards.system.history;
var G__19748_19751 = goog.history.EventType.NAVIGATE;
var G__19749_19752 = ((function (G__19747_19750,G__19748_19751){
return (function (p1__19743_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__19743_SHARP_.token));
});})(G__19747_19750,G__19748_19751))
;
goog.events.listen(G__19747_19750,G__19748_19751,G__19749_19752);

var temp__4657__auto__ = (location["hash"]);
if(cljs.core.truth_(temp__4657__auto__)){
var token = temp__4657__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__6397__auto__ = cljs.core.map_QMARK_(d);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__6397__auto____$1)){
var and__6397__auto____$2 = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__6397__auto____$2)){
var and__6397__auto____$3 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__6397__auto____$3)){
return d;
} else {
return and__6397__auto____$3;
}
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path_DASH_collision_DASH_count.cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.vec(path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(cljs.core.last(path))),cljs.core.str("-"),cljs.core.str(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_collision_DASH_count,path], null),cljs.core.inc);
});
if(typeof devcards.system.dev_trans !== 'undefined'){
} else {
devcards.system.dev_trans = (function (){var method_table__7334__auto__ = (function (){var G__19753 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19753) : cljs.core.atom.call(null,G__19753));
})();
var prefer_table__7335__auto__ = (function (){var G__19754 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19754) : cljs.core.atom.call(null,G__19754));
})();
var method_cache__7336__auto__ = (function (){var G__19755 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19755) : cljs.core.atom.call(null,G__19755));
})();
var cached_hierarchy__7337__auto__ = (function (){var G__19756 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19756) : cljs.core.atom.call(null,G__19756));
})();
var hierarchy__7338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$register_DASH_card,(function (p__19757,state){
var vec__19758 = p__19757;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19758,(0),null);
var map__19761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19758,(1),null);
var map__19761__$1 = ((((!((map__19761 == null)))?((((map__19761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19761):map__19761);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,cljs.core.cst$kw$options);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,cljs.core.cst$kw$func);
var position = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision(state,path);
return devcards.system.register_collision(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$position], null),cljs.core.inc),cljs.core.cons(cljs.core.cst$kw$cards,new_path),((function (position,new_path,vec__19758,_,map__19761,map__19761__$1,path,options,func){
return (function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,new_path,cljs.core.cst$kw$func,func,cljs.core.cst$kw$position,position], null);
});})(position,new_path,vec__19758,_,map__19761,map__19761__$1,path,options,func))
),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$current_DASH_path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$position,(0),cljs.core.cst$kw$cards,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$base_DASH_card_DASH_options,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$frame,true,cljs.core.cst$kw$heading,true,cljs.core.cst$kw$padding,true,cljs.core.cst$kw$hidden,false,cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$watch_DASH_atom,true,cljs.core.cst$kw$history,false], null)], null);
if(typeof devcards.system.app_state !== 'undefined'){
} else {
devcards.system.app_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(devcards.system.devcard_initial_data) : cljs.core.atom.call(null,devcards.system.devcard_initial_data));
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__6409__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,path);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec((cljs.core.truth_(devcards.system.valid_path_QMARK_(state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__19763,path){
var map__19766 = p__19763;
var map__19766__$1 = ((((!((map__19766 == null)))?((((map__19766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19766):map__19766);
var state = map__19766__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19766__$1,cljs.core.cst$kw$current_DASH_path);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$current_DASH_path,devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__19768,path){
var map__19771 = p__19768;
var map__19771__$1 = ((((!((map__19771 == null)))?((((map__19771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19771):map__19771);
var state = map__19771__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19771__$1,cljs.core.cst$kw$current_DASH_path);
var path__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,path__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$current_DASH_path,devcards.system.enforce_valid_path(state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate(path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__6397__auto__ = cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__6397__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_(devcards.system.current_page(state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page(state);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__19773_SHARP_){
var and__6397__auto__ = cljs.core.not(cljs.core.cst$kw$delete_DASH_card.cljs$core$IFn$_invoke$arity$1(p1__19773_SHARP_));
if(and__6397__auto__){
return devcards.system.devcard_QMARK_(p1__19773_SHARP_);
} else {
return and__6397__auto__;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__19774){
var map__19781 = p__19774;
var map__19781__$1 = ((((!((map__19781 == null)))?((((map__19781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19781):map__19781);
var card = map__19781__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19781__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19781__$1,cljs.core.cst$kw$options);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19781__$1,cljs.core.cst$kw$func);
var G__19783 = "div";
var G__19784 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__19785 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR_19786 = devcards.system._STAR_devcard_data_STAR_;
devcards.system._STAR_devcard_data_STAR_ = card;

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR_19786;
}})());
return React.createElement(G__19783,G__19784,G__19785);
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))){
return devcards.system.card_template(state_atom,devcards.system.current_page(data));
} else {
return devcards.system.render_cards(devcards.system.display_cards(devcards.system.current_page(data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__19787){
var map__19790 = p__19787;
var map__19790__$1 = ((((!((map__19790 == null)))?((((map__19790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19790):map__19790);
var state = map__19790__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19790__$1,cljs.core.cst$kw$current_DASH_path);
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(cljs.core.cst$kw$devcards,current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (cpath,map__19790,map__19790__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
});})(cpath,map__19790,map__19790__$1,state,current_path))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var sep_fn = ((function (counter){
return (function (_){
var G__19809 = "span";
var G__19810 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(counter) : cljs.core.deref.call(null,counter));
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__19811 = "/";
return React.createElement(G__19809,G__19810,G__19811);
});})(counter))
;
var G__19812 = "div";
var G__19813 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__19814 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__19812,G__19813,counter,sep_fn){
return (function (p__19816){
var vec__19817 = p__19816;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19817,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19817,(1),null);
var G__19820 = "span";
var G__19821 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__19822 = (function (){var G__19823 = "a";
var G__19824 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__19823,G__19820,G__19821,vec__19817,n,path,G__19812,G__19813,counter,sep_fn){
return (function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
});})(G__19823,G__19820,G__19821,vec__19817,n,path,G__19812,G__19813,counter,sep_fn))
), "className": "com-rigsomelight-devcards_set-current-path"});
var G__19825 = sablono.interpreter.interpret([cljs.core.str(n)].join(''));
return React.createElement(G__19823,G__19824,G__19825);
})();
return React.createElement(G__19820,G__19821,G__19822);
});})(G__19812,G__19813,counter,sep_fn))
,crumbs))));
var G__19815 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return React.createElement(G__19812,G__19813,G__19814,G__19815);
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (s){
var new_s = devcards.system.add_to_current_path(s,key);
devcards.system.hash_navigate(cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_(dirs)){
return null;
} else {
var attrs19846 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19847){
var vec__19848 = p__19847;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19848,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19848,(1),null);
var G__19851 = "a";
var G__19852 = ({"href": "#", "key": [cljs.core.str(key)].join(''), "onClick": devcards.system.prevent__GT_(((function (G__19851,vec__19848,key,child_tree){
return (function (e){
return devcards.system.navigate_to_path(key,state_atom);
});})(G__19851,vec__19848,key,child_tree))
), "className": "com-rigsomelight-devcards-list-group-item"});
var G__19853 = (function (){var G__19855 = "span";
var G__19856 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__19857 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return React.createElement(G__19855,G__19856,G__19857);
})();
var G__19854 = (function (){var G__19858 = "span";
var G__19859 = null;
var G__19860 = " ";
var G__19861 = sablono.interpreter.interpret(cljs.core.name(key));
return React.createElement(G__19858,G__19859,G__19860,G__19861);
})();
return React.createElement(G__19851,G__19852,G__19853,G__19854);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__19862){
var vec__19863 = p__19862;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19863,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19863,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19846))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs19846], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs19846))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19846)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
var G__19875 = "div";
var G__19876 = ({"className": [cljs.core.str("com-rigsomelight-devcards-base "),cljs.core.str((function (){var temp__4657__auto__ = cljs.core.first(cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})())].join('')});
var G__19877 = (function (){var attrs19872 = (function (){var temp__4657__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__4657__auto__)){
var crumbs = temp__4657__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19872))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs19872], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs19872))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return devcards.system.dir_links(dir_paths,state_atom);
})())),(function (){var attrs19873 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19873))?sablono.interpreter.attributes(attrs19873):null),((cljs.core.map_QMARK_(attrs19873))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19873)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19872),sablono.interpreter.interpret((cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return devcards.system.dir_links(dir_paths,state_atom);
})())),(function (){var attrs19874 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19874))?sablono.interpreter.attributes(attrs19874):null),((cljs.core.map_QMARK_(attrs19874))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19874)], null)));
})()], null)));
})();
return React.createElement(G__19875,G__19876,G__19877);
});
var base__19711__auto___19882 = ({"componentDidMount": (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,cljs.core.cst$kw$renderer_DASH_watch,((function (this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(this$))
);
}), "render": (function (){
return devcards.system.main_template(devcards.system.app_state);
})});
if(typeof devcards.system.DevcardsRoot !== 'undefined'){
} else {
devcards.system.DevcardsRoot = React.createClass(base__19711__auto___19882);
}

var seq__19878_19883 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__19879_19884 = null;
var count__19880_19885 = (0);
var i__19881_19886 = (0);
while(true){
if((i__19881_19886 < count__19880_19885)){
var property__19712__auto___19887 = chunk__19879_19884.cljs$core$IIndexed$_nth$arity$2(null,i__19881_19886);
if(cljs.core.truth_((base__19711__auto___19882[property__19712__auto___19887]))){
(devcards.system.DevcardsRoot.prototype[property__19712__auto___19887] = (base__19711__auto___19882[property__19712__auto___19887]));
} else {
}

var G__19888 = seq__19878_19883;
var G__19889 = chunk__19879_19884;
var G__19890 = count__19880_19885;
var G__19891 = (i__19881_19886 + (1));
seq__19878_19883 = G__19888;
chunk__19879_19884 = G__19889;
count__19880_19885 = G__19890;
i__19881_19886 = G__19891;
continue;
} else {
var temp__4657__auto___19892 = cljs.core.seq(seq__19878_19883);
if(temp__4657__auto___19892){
var seq__19878_19893__$1 = temp__4657__auto___19892;
if(cljs.core.chunked_seq_QMARK_(seq__19878_19893__$1)){
var c__7220__auto___19894 = cljs.core.chunk_first(seq__19878_19893__$1);
var G__19895 = cljs.core.chunk_rest(seq__19878_19893__$1);
var G__19896 = c__7220__auto___19894;
var G__19897 = cljs.core.count(c__7220__auto___19894);
var G__19898 = (0);
seq__19878_19883 = G__19895;
chunk__19879_19884 = G__19896;
count__19880_19885 = G__19897;
i__19881_19886 = G__19898;
continue;
} else {
var property__19712__auto___19899 = cljs.core.first(seq__19878_19893__$1);
if(cljs.core.truth_((base__19711__auto___19882[property__19712__auto___19899]))){
(devcards.system.DevcardsRoot.prototype[property__19712__auto___19899] = (base__19711__auto___19882[property__19712__auto___19899]));
} else {
}

var G__19900 = cljs.core.next(seq__19878_19893__$1);
var G__19901 = null;
var G__19902 = (0);
var G__19903 = (0);
seq__19878_19883 = G__19900;
chunk__19879_19884 = G__19901;
count__19880_19885 = G__19902;
i__19881_19886 = G__19903;
continue;
}
} else {
}
}
break;
}
devcards.system.renderer = (function devcards$system$renderer(state_atom){
var G__19906 = React.createElement(devcards.system.DevcardsRoot);
var G__19907 = devcards.system.devcards_app_node();
return ReactDOM.render(G__19906,G__19907);
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$position,cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(new_state),cljs.core.cst$kw$cards,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(new_state)], 0))], 0));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start_data,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$cards);
var c__15823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto__,initial_data){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto__,initial_data){
return (function (state_20034){
var state_val_20035 = (state_20034[(1)]);
if((state_val_20035 === (7))){
var inst_20030 = (state_20034[(2)]);
var state_20034__$1 = state_20034;
var statearr_20036_20066 = state_20034__$1;
(statearr_20036_20066[(2)] = inst_20030);

(statearr_20036_20066[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (1))){
var inst_19987 = (devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2 ? devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data) : devcards.system.dev_trans.call(null,first_message,initial_data));
var inst_19988 = inst_19987;
var state_20034__$1 = (function (){var statearr_20037 = state_20034;
(statearr_20037[(7)] = inst_19988);

return statearr_20037;
})();
var statearr_20038_20067 = state_20034__$1;
(statearr_20038_20067[(2)] = null);

(statearr_20038_20067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (4))){
var inst_19995 = (state_20034[(8)]);
var inst_19995__$1 = (state_20034[(2)]);
var state_20034__$1 = (function (){var statearr_20039 = state_20034;
(statearr_20039[(8)] = inst_19995__$1);

return statearr_20039;
})();
if(cljs.core.truth_(inst_19995__$1)){
var statearr_20040_20068 = state_20034__$1;
(statearr_20040_20068[(1)] = (5));

} else {
var statearr_20041_20069 = state_20034__$1;
(statearr_20041_20069[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (15))){
var state_20034__$1 = state_20034;
var statearr_20042_20070 = state_20034__$1;
(statearr_20042_20070[(2)] = null);

(statearr_20042_20070[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (13))){
var inst_20025 = (state_20034[(2)]);
var state_20034__$1 = state_20034;
var statearr_20043_20071 = state_20034__$1;
(statearr_20043_20071[(2)] = inst_20025);

(statearr_20043_20071[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (6))){
var state_20034__$1 = state_20034;
var statearr_20044_20072 = state_20034__$1;
(statearr_20044_20072[(2)] = null);

(statearr_20044_20072[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (3))){
var inst_20032 = (state_20034[(2)]);
var state_20034__$1 = state_20034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20034__$1,inst_20032);
} else {
if((state_val_20035 === (12))){
var state_20034__$1 = state_20034;
var statearr_20045_20073 = state_20034__$1;
(statearr_20045_20073[(1)] = (14));



return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (2))){
var inst_19990 = (state_20034[(9)]);
var inst_19990__$1 = cljs.core.async.timeout((500));
var inst_19991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19992 = [channel,inst_19990__$1];
var inst_19993 = (new cljs.core.PersistentVector(null,2,(5),inst_19991,inst_19992,null));
var state_20034__$1 = (function (){var statearr_20047 = state_20034;
(statearr_20047[(9)] = inst_19990__$1);

return statearr_20047;
})();
return cljs.core.async.ioc_alts_BANG_(state_20034__$1,(4),inst_19993);
} else {
if((state_val_20035 === (11))){
var inst_19988 = (state_20034[(7)]);
var inst_20013 = devcards.system.merge_in_new_data(start_data,inst_19988);
var state_20034__$1 = state_20034;
var statearr_20048_20074 = state_20034__$1;
(statearr_20048_20074[(2)] = inst_20013);

(statearr_20048_20074[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (9))){
var inst_20004 = (state_20034[(10)]);
var inst_20011 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20004,cljs.core.cst$kw$jsreload);
var state_20034__$1 = state_20034;
if(inst_20011){
var statearr_20049_20075 = state_20034__$1;
(statearr_20049_20075[(1)] = (11));

} else {
var statearr_20050_20076 = state_20034__$1;
(statearr_20050_20076[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (5))){
var inst_19990 = (state_20034[(9)]);
var inst_19995 = (state_20034[(8)]);
var inst_20003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19995,(0),null);
var inst_20004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20003,(0),null);
var inst_20005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20003,(1),null);
var inst_20006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19995,(1),null);
var inst_20007 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20006,inst_19990);
var state_20034__$1 = (function (){var statearr_20051 = state_20034;
(statearr_20051[(10)] = inst_20004);

(statearr_20051[(11)] = inst_20005);

return statearr_20051;
})();
if(inst_20007){
var statearr_20052_20077 = state_20034__$1;
(statearr_20052_20077[(1)] = (8));

} else {
var statearr_20053_20078 = state_20034__$1;
(statearr_20053_20078[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (14))){
var inst_19988 = (state_20034[(7)]);
var inst_20004 = (state_20034[(10)]);
var inst_20005 = (state_20034[(11)]);
var inst_20016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20017 = [inst_20004,inst_20005];
var inst_20018 = (new cljs.core.PersistentVector(null,2,(5),inst_20016,inst_20017,null));
var inst_20019 = (devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2 ? devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_20018,inst_19988) : devcards.system.dev_trans.call(null,inst_20018,inst_19988));
var inst_19988__$1 = inst_20019;
var state_20034__$1 = (function (){var statearr_20054 = state_20034;
(statearr_20054[(7)] = inst_19988__$1);

return statearr_20054;
})();
var statearr_20055_20079 = state_20034__$1;
(statearr_20055_20079[(2)] = null);

(statearr_20055_20079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (16))){
var inst_20023 = (state_20034[(2)]);
var state_20034__$1 = state_20034;
var statearr_20056_20080 = state_20034__$1;
(statearr_20056_20080[(2)] = inst_20023);

(statearr_20056_20080[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (10))){
var inst_20027 = (state_20034[(2)]);
var state_20034__$1 = state_20034;
var statearr_20057_20081 = state_20034__$1;
(statearr_20057_20081[(2)] = inst_20027);

(statearr_20057_20081[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20035 === (8))){
var inst_19988 = (state_20034[(7)]);
var inst_20009 = devcards.system.merge_in_new_data(start_data,inst_19988);
var state_20034__$1 = state_20034;
var statearr_20058_20082 = state_20034__$1;
(statearr_20058_20082[(2)] = inst_20009);

(statearr_20058_20082[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15823__auto__,initial_data))
;
return ((function (switch__15699__auto__,c__15823__auto__,initial_data){
return (function() {
var devcards$system$off_the_books_$_state_machine__15700__auto__ = null;
var devcards$system$off_the_books_$_state_machine__15700__auto____0 = (function (){
var statearr_20062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20062[(0)] = devcards$system$off_the_books_$_state_machine__15700__auto__);

(statearr_20062[(1)] = (1));

return statearr_20062;
});
var devcards$system$off_the_books_$_state_machine__15700__auto____1 = (function (state_20034){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_20034);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e20063){if((e20063 instanceof Object)){
var ex__15703__auto__ = e20063;
var statearr_20064_20083 = state_20034;
(statearr_20064_20083[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20034);

return cljs.core.cst$kw$recur;
} else {
throw e20063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__20084 = state_20034;
state_20034 = G__20084;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__15700__auto__ = function(state_20034){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__15700__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__15700__auto____1.call(this,state_20034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__15700__auto____0;
devcards$system$off_the_books_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__15700__auto____1;
return devcards$system$off_the_books_$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto__,initial_data))
})();
var state__15825__auto__ = (function (){var statearr_20065 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_20065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto__);

return statearr_20065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto__,initial_data))
);

return c__15823__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__15823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto__){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto__){
return (function (state_20108){
var state_val_20109 = (state_20108[(1)]);
if((state_val_20109 === (1))){
var inst_20101 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state));
var inst_20102 = cljs.core.PersistentVector.EMPTY;
var inst_20103 = devcards.system.off_the_books(channel,inst_20101,inst_20102);
var state_20108__$1 = state_20108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20108__$1,(2),inst_20103);
} else {
if((state_val_20109 === (2))){
var inst_20105 = (state_20108[(2)]);
var inst_20106 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.system.app_state,inst_20105) : cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_20105));
var state_20108__$1 = state_20108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20108__$1,inst_20106);
} else {
return null;
}
}
});})(c__15823__auto__))
;
return ((function (switch__15699__auto__,c__15823__auto__){
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto____0 = (function (){
var statearr_20113 = [null,null,null,null,null,null,null];
(statearr_20113[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto__);

(statearr_20113[(1)] = (1));

return statearr_20113;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto____1 = (function (state_20108){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_20108);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e20114){if((e20114 instanceof Object)){
var ex__15703__auto__ = e20114;
var statearr_20115_20117 = state_20108;
(statearr_20115_20117[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20108);

return cljs.core.cst$kw$recur;
} else {
throw e20114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__20118 = state_20108;
state_20108 = G__20118;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto__ = function(state_20108){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto____1.call(this,state_20108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto__))
})();
var state__15825__auto__ = (function (){var statearr_20116 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_20116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto__);

return statearr_20116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto__))
);

return c__15823__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
devcards.system.devcards_ui_setup = (function (){
if(typeof React.initializeTouchEvents !== 'undefined'){
React.initializeTouchEvents(true);
} else {
}

var c__15823__auto___20203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___20203){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___20203){
return (function (state_20185){
var state_val_20186 = (state_20185[(1)]);
if((state_val_20186 === (1))){
var inst_20161 = devcards.system.load_data_from_channel_BANG_(channel);
var state_20185__$1 = state_20185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20185__$1,(2),inst_20161);
} else {
if((state_val_20186 === (2))){
var inst_20163 = (state_20185[(2)]);
var inst_20164 = (function (){return ((function (inst_20163,state_val_20186,c__15823__auto___20203){
return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
;})(inst_20163,state_val_20186,c__15823__auto___20203))
})();
var inst_20165 = setTimeout(inst_20164,(0));
var inst_20166 = (function (){return ((function (inst_20163,inst_20164,inst_20165,state_val_20186,c__15823__auto___20203){
return (function (){
return cljs.core.add_watch(devcards.system.app_state,cljs.core.cst$kw$devcards_DASH_render,((function (inst_20163,inst_20164,inst_20165,state_val_20186,c__15823__auto___20203){
return (function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});})(inst_20163,inst_20164,inst_20165,state_val_20186,c__15823__auto___20203))
);
});
;})(inst_20163,inst_20164,inst_20165,state_val_20186,c__15823__auto___20203))
})();
var inst_20167 = setTimeout(inst_20166,(0));
var state_20185__$1 = (function (){var statearr_20187 = state_20185;
(statearr_20187[(7)] = inst_20163);

(statearr_20187[(8)] = inst_20165);

(statearr_20187[(9)] = inst_20167);

return statearr_20187;
})();
var statearr_20188_20204 = state_20185__$1;
(statearr_20188_20204[(2)] = null);

(statearr_20188_20204[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20186 === (3))){
var state_20185__$1 = state_20185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20185__$1,(5),channel);
} else {
if((state_val_20186 === (4))){
var inst_20183 = (state_20185[(2)]);
var state_20185__$1 = state_20185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20185__$1,inst_20183);
} else {
if((state_val_20186 === (5))){
var inst_20170 = (state_20185[(10)]);
var inst_20170__$1 = (state_20185[(2)]);
var state_20185__$1 = (function (){var statearr_20189 = state_20185;
(statearr_20189[(10)] = inst_20170__$1);

return statearr_20189;
})();
if(cljs.core.truth_(inst_20170__$1)){
var statearr_20190_20205 = state_20185__$1;
(statearr_20190_20205[(1)] = (6));

} else {
var statearr_20191_20206 = state_20185__$1;
(statearr_20191_20206[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20186 === (6))){
var inst_20170 = (state_20185[(10)]);
var inst_20172 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state));
var inst_20173 = devcards.system.off_the_books(channel,inst_20172,inst_20170);
var state_20185__$1 = state_20185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20185__$1,(9),inst_20173);
} else {
if((state_val_20186 === (7))){
var state_20185__$1 = state_20185;
var statearr_20192_20207 = state_20185__$1;
(statearr_20192_20207[(2)] = null);

(statearr_20192_20207[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20186 === (8))){
var inst_20181 = (state_20185[(2)]);
var state_20185__$1 = state_20185;
var statearr_20193_20208 = state_20185__$1;
(statearr_20193_20208[(2)] = inst_20181);

(statearr_20193_20208[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20186 === (9))){
var inst_20170 = (state_20185[(10)]);
var inst_20175 = (state_20185[(2)]);
var inst_20176 = (function (){var temp__4657__auto__ = inst_20170;
var v = inst_20170;
var new_state = inst_20175;
return ((function (temp__4657__auto__,v,new_state,inst_20170,inst_20175,state_val_20186,c__15823__auto___20203){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.system.app_state,new_state) : cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state));
});
;})(temp__4657__auto__,v,new_state,inst_20170,inst_20175,state_val_20186,c__15823__auto___20203))
})();
var inst_20177 = setTimeout(inst_20176,(0));
var state_20185__$1 = (function (){var statearr_20194 = state_20185;
(statearr_20194[(11)] = inst_20177);

return statearr_20194;
})();
var statearr_20195_20209 = state_20185__$1;
(statearr_20195_20209[(2)] = null);

(statearr_20195_20209[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15823__auto___20203))
;
return ((function (switch__15699__auto__,c__15823__auto___20203){
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__15700__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__15700__auto____0 = (function (){
var statearr_20199 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20199[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__15700__auto__);

(statearr_20199[(1)] = (1));

return statearr_20199;
});
var devcards$system$start_ui_with_renderer_$_state_machine__15700__auto____1 = (function (state_20185){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_20185);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e20200){if((e20200 instanceof Object)){
var ex__15703__auto__ = e20200;
var statearr_20201_20210 = state_20185;
(statearr_20201_20210[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20185);

return cljs.core.cst$kw$recur;
} else {
throw e20200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__20211 = state_20185;
state_20185 = G__20211;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__15700__auto__ = function(state_20185){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__15700__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__15700__auto____1.call(this,state_20185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__15700__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__15700__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___20203))
})();
var state__15825__auto__ = (function (){var statearr_20202 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_20202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___20203);

return statearr_20202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___20203))
);


return true;
})()
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
devcards.system.devcards_ui_setup = (function (){
if(typeof React.initializeTouchEvents !== 'undefined'){
React.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_();

var c__15823__auto___20296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___20296){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___20296){
return (function (state_20278){
var state_val_20279 = (state_20278[(1)]);
if((state_val_20279 === (1))){
var inst_20254 = devcards.system.load_data_from_channel_BANG_(channel);
var state_20278__$1 = state_20278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20278__$1,(2),inst_20254);
} else {
if((state_val_20279 === (2))){
var inst_20256 = (state_20278[(2)]);
var inst_20257 = (function (){return ((function (inst_20256,state_val_20279,c__15823__auto___20296){
return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
;})(inst_20256,state_val_20279,c__15823__auto___20296))
})();
var inst_20258 = setTimeout(inst_20257,(0));
var inst_20259 = (function (){return ((function (inst_20256,inst_20257,inst_20258,state_val_20279,c__15823__auto___20296){
return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
;})(inst_20256,inst_20257,inst_20258,state_val_20279,c__15823__auto___20296))
})();
var inst_20260 = setTimeout(inst_20259,(0));
var state_20278__$1 = (function (){var statearr_20280 = state_20278;
(statearr_20280[(7)] = inst_20256);

(statearr_20280[(8)] = inst_20258);

(statearr_20280[(9)] = inst_20260);

return statearr_20280;
})();
var statearr_20281_20297 = state_20278__$1;
(statearr_20281_20297[(2)] = null);

(statearr_20281_20297[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20279 === (3))){
var state_20278__$1 = state_20278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20278__$1,(5),channel);
} else {
if((state_val_20279 === (4))){
var inst_20276 = (state_20278[(2)]);
var state_20278__$1 = state_20278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20278__$1,inst_20276);
} else {
if((state_val_20279 === (5))){
var inst_20263 = (state_20278[(10)]);
var inst_20263__$1 = (state_20278[(2)]);
var state_20278__$1 = (function (){var statearr_20282 = state_20278;
(statearr_20282[(10)] = inst_20263__$1);

return statearr_20282;
})();
if(cljs.core.truth_(inst_20263__$1)){
var statearr_20283_20298 = state_20278__$1;
(statearr_20283_20298[(1)] = (6));

} else {
var statearr_20284_20299 = state_20278__$1;
(statearr_20284_20299[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20279 === (6))){
var inst_20263 = (state_20278[(10)]);
var inst_20265 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state));
var inst_20266 = devcards.system.off_the_books(channel,inst_20265,inst_20263);
var state_20278__$1 = state_20278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20278__$1,(9),inst_20266);
} else {
if((state_val_20279 === (7))){
var state_20278__$1 = state_20278;
var statearr_20285_20300 = state_20278__$1;
(statearr_20285_20300[(2)] = null);

(statearr_20285_20300[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20279 === (8))){
var inst_20274 = (state_20278[(2)]);
var state_20278__$1 = state_20278;
var statearr_20286_20301 = state_20278__$1;
(statearr_20286_20301[(2)] = inst_20274);

(statearr_20286_20301[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20279 === (9))){
var inst_20263 = (state_20278[(10)]);
var inst_20268 = (state_20278[(2)]);
var inst_20269 = (function (){var temp__4657__auto__ = inst_20263;
var v = inst_20263;
var new_state = inst_20268;
return ((function (temp__4657__auto__,v,new_state,inst_20263,inst_20268,state_val_20279,c__15823__auto___20296){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.system.app_state,new_state) : cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state));
});
;})(temp__4657__auto__,v,new_state,inst_20263,inst_20268,state_val_20279,c__15823__auto___20296))
})();
var inst_20270 = setTimeout(inst_20269,(0));
var state_20278__$1 = (function (){var statearr_20287 = state_20278;
(statearr_20287[(11)] = inst_20270);

return statearr_20287;
})();
var statearr_20288_20302 = state_20278__$1;
(statearr_20288_20302[(2)] = null);

(statearr_20288_20302[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15823__auto___20296))
;
return ((function (switch__15699__auto__,c__15823__auto___20296){
return (function() {
var devcards$system$start_ui_$_state_machine__15700__auto__ = null;
var devcards$system$start_ui_$_state_machine__15700__auto____0 = (function (){
var statearr_20292 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20292[(0)] = devcards$system$start_ui_$_state_machine__15700__auto__);

(statearr_20292[(1)] = (1));

return statearr_20292;
});
var devcards$system$start_ui_$_state_machine__15700__auto____1 = (function (state_20278){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_20278);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e20293){if((e20293 instanceof Object)){
var ex__15703__auto__ = e20293;
var statearr_20294_20303 = state_20278;
(statearr_20294_20303[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20278);

return cljs.core.cst$kw$recur;
} else {
throw e20293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__20304 = state_20278;
state_20278 = G__20304;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__15700__auto__ = function(state_20278){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__15700__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__15700__auto____1.call(this,state_20278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__15700__auto____0;
devcards$system$start_ui_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__15700__auto____1;
return devcards$system$start_ui_$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___20296))
})();
var state__15825__auto__ = (function (){var statearr_20295 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_20295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___20296);

return statearr_20295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___20296))
);


return true;
})()
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return React.DOM.span(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"cljs-logo",cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,devcards.system.cljs_logo_svg], null)], null)));
});
