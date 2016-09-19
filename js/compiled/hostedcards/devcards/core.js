// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__6406__auto__ = (function (){var and__6394__auto__ = typeof Symbol !== 'undefined';
if(and__6394__auto__){
var and__6394__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__6394__auto____$1){
var and__6394__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__6394__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__6394__auto____$2;
}
} else {
return and__6394__auto____$1;
}
} else {
return and__6394__auto__;
}
})();
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__20549_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__20549_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args20550 = [];
var len__7481__auto___20553 = arguments.length;
var i__7482__auto___20554 = (0);
while(true){
if((i__7482__auto___20554 < len__7481__auto___20553)){
args20550.push((arguments[i__7482__auto___20554]));

var G__20555 = (i__7482__auto___20554 + (1));
i__7482__auto___20554 = G__20555;
continue;
} else {
}
break;
}

var G__20552 = args20550.length;
switch (G__20552) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20550.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__6394__auto__ = cljs.core.map_QMARK_(c);
if(and__6394__auto__){
var map__20563 = c;
var map__20563__$1 = ((((!((map__20563 == null)))?((((map__20563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20563):map__20563);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20563__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20563__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__6394__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__19570__auto___20583 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__20565 = "pre";
var G__20566 = ({"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__20568 = this$;
var G__20569 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20568,G__20569) : devcards.core.get_props.call(null,G__20568,G__20569));
})())});
var G__20567 = (function (){var G__20570 = "code";
var G__20571 = ({"className": (function (){var or__6406__auto__ = (function (){var G__20575 = this$;
var G__20576 = cljs.core.cst$kw$lang;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20575,G__20576) : devcards.core.get_props.call(null,G__20575,G__20576));
})();
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__20572 = sablono.interpreter.interpret((function (){var G__20577 = this$;
var G__20578 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20577,G__20578) : devcards.core.get_props.call(null,G__20577,G__20578));
})());
return React.createElement(G__20570,G__20571,G__20572);
})();
return React.createElement(G__20565,G__20566,G__20567);
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__19570__auto___20583);
}

var seq__20579_20584 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20580_20585 = null;
var count__20581_20586 = (0);
var i__20582_20587 = (0);
while(true){
if((i__20582_20587 < count__20581_20586)){
var property__19571__auto___20588 = chunk__20580_20585.cljs$core$IIndexed$_nth$arity$2(null,i__20582_20587);
if(cljs.core.truth_((base__19570__auto___20583[property__19571__auto___20588]))){
(devcards.core.CodeHighlight.prototype[property__19571__auto___20588] = (base__19570__auto___20583[property__19571__auto___20588]));
} else {
}

var G__20589 = seq__20579_20584;
var G__20590 = chunk__20580_20585;
var G__20591 = count__20581_20586;
var G__20592 = (i__20582_20587 + (1));
seq__20579_20584 = G__20589;
chunk__20580_20585 = G__20590;
count__20581_20586 = G__20591;
i__20582_20587 = G__20592;
continue;
} else {
var temp__4657__auto___20593 = cljs.core.seq(seq__20579_20584);
if(temp__4657__auto___20593){
var seq__20579_20594__$1 = temp__4657__auto___20593;
if(cljs.core.chunked_seq_QMARK_(seq__20579_20594__$1)){
var c__7217__auto___20595 = cljs.core.chunk_first(seq__20579_20594__$1);
var G__20596 = cljs.core.chunk_rest(seq__20579_20594__$1);
var G__20597 = c__7217__auto___20595;
var G__20598 = cljs.core.count(c__7217__auto___20595);
var G__20599 = (0);
seq__20579_20584 = G__20596;
chunk__20580_20585 = G__20597;
count__20581_20586 = G__20598;
i__20582_20587 = G__20599;
continue;
} else {
var property__19571__auto___20600 = cljs.core.first(seq__20579_20594__$1);
if(cljs.core.truth_((base__19570__auto___20583[property__19571__auto___20600]))){
(devcards.core.CodeHighlight.prototype[property__19571__auto___20600] = (base__19570__auto___20583[property__19571__auto___20600]));
} else {
}

var G__20601 = cljs.core.next(seq__20579_20594__$1);
var G__20602 = null;
var G__20603 = (0);
var G__20604 = (0);
seq__20579_20584 = G__20601;
chunk__20580_20585 = G__20602;
count__20581_20586 = G__20603;
i__20582_20587 = G__20604;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__20607 = devcards.core.CodeHighlight;
var G__20608 = ({"code": code_str, "lang": lang});
return React.createElement(G__20607,G__20608);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__7331__auto__ = (function (){var G__20609 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20609) : cljs.core.atom.call(null,G__20609));
})();
var prefer_table__7332__auto__ = (function (){var G__20610 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20610) : cljs.core.atom.call(null,G__20610));
})();
var method_cache__7333__auto__ = (function (){var G__20611 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20611) : cljs.core.atom.call(null,G__20611));
})();
var cached_hierarchy__7334__auto__ = (function (){var G__20612 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20612) : cljs.core.atom.call(null,G__20612));
})();
var hierarchy__7335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7335__auto__,method_table__7331__auto__,prefer_table__7332__auto__,method_cache__7333__auto__,cached_hierarchy__7334__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__20613){
var map__20614 = p__20613;
var map__20614__$1 = ((((!((map__20614 == null)))?((((map__20614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20614):map__20614);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20614__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__20616){
var map__20617 = p__20616;
var map__20617__$1 = ((((!((map__20617 == null)))?((((map__20617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20617):map__20617);
var block = map__20617__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,cljs.core.cst$kw$content);
var G__20619 = devcards.core.CodeHighlight;
var G__20620 = ({"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)});
return React.createElement(G__20619,G__20620);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__7488__auto__ = [];
var len__7481__auto___20631 = arguments.length;
var i__7482__auto___20632 = (0);
while(true){
if((i__7482__auto___20632 < len__7481__auto___20631)){
args__7488__auto__.push((arguments[i__7482__auto___20632]));

var G__20633 = (i__7482__auto___20632 + (1));
i__7482__auto___20632 = G__20633;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((0) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__7489__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code(x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var G__20622 = "div";
var G__20623 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__20624 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__20622,G__20623,blocks,strs__$1){
return (function (i,data){
var G__20625 = "div";
var G__20626 = ({"key": i});
var G__20627 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__20625,G__20626,G__20627);
});})(G__20622,G__20623,blocks,strs__$1))
,blocks));
return React.createElement(G__20622,G__20623,G__20624);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__20628 = "div";
var G__20629 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__20630 = sablono.interpreter.interpret(message);
return React.createElement(G__20628,G__20629,G__20630);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq20621){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20621));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__20638 = "div";
var G__20639 = ({"key": "devcards_naked-card", "className": (function (){var G__20641 = devcards.system.devcards_rendered_card_class;
var G__20641__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__20641),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__20641);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str(G__20641__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__20641__$1;
}
})()});
var G__20640 = sablono.interpreter.interpret(children);
return React.createElement(G__20638,G__20639,G__20640);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args20642 = [];
var len__7481__auto___20664 = arguments.length;
var i__7482__auto___20665 = (0);
while(true){
if((i__7482__auto___20665 < len__7481__auto___20664)){
args20642.push((arguments[i__7482__auto___20665]));

var G__20666 = (i__7482__auto___20665 + (1));
i__7482__auto___20665 = G__20666;
continue;
} else {
}
break;
}

var G__20644 = args20642.length;
switch (G__20644) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20642.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__20645 = card;
var map__20645__$1 = ((((!((map__20645 == null)))?((((map__20645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20645):map__20645);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__20647 = "div";
var G__20648 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))});
var G__20649 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__20647,G__20648,G__20649);
} else {
var G__20650 = "div";
var G__20651 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__20652 = (function (){var G__20654 = "div";
var G__20655 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__20656 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__20657 = "a";
var G__20658 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__20657,G__20654,G__20655,G__20650,G__20651,map__20645,map__20645__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__20657,G__20654,G__20655,G__20650,G__20651,map__20645,map__20645__$1,path,options))
)});
var G__20659 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__20660 = " ";
return React.createElement(G__20657,G__20658,G__20659,G__20660);
})()):sablono.interpreter.interpret((function (){var attrs20661 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs20661))?sablono.interpreter.attributes(attrs20661):null),((cljs.core.map_QMARK_(attrs20661))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20661)], null)));
})()));
return React.createElement(G__20654,G__20655,G__20656);
})();
var G__20653 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__20650,G__20651,G__20652,G__20653);
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__7069__auto__ = (((this$ == null))?null:this$);
var m__7070__auto__ = (devcards.core._devcard_options[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7070__auto__.call(null,this$,devcard_opts));
} else {
var m__7070__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7070__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__7069__auto__ = (((this$ == null))?null:this$);
var m__7070__auto__ = (devcards.core._devcard[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7070__auto__.call(null,this$,devcard_opts));
} else {
var m__7070__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7070__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
var base__19570__auto___20673 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs20668 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20668))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs20668], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs20668))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20668)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__19570__auto___20673);
}

var seq__20669_20674 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20670_20675 = null;
var count__20671_20676 = (0);
var i__20672_20677 = (0);
while(true){
if((i__20672_20677 < count__20671_20676)){
var property__19571__auto___20678 = chunk__20670_20675.cljs$core$IIndexed$_nth$arity$2(null,i__20672_20677);
if(cljs.core.truth_((base__19570__auto___20673[property__19571__auto___20678]))){
(devcards.core.DontUpdate.prototype[property__19571__auto___20678] = (base__19570__auto___20673[property__19571__auto___20678]));
} else {
}

var G__20679 = seq__20669_20674;
var G__20680 = chunk__20670_20675;
var G__20681 = count__20671_20676;
var G__20682 = (i__20672_20677 + (1));
seq__20669_20674 = G__20679;
chunk__20670_20675 = G__20680;
count__20671_20676 = G__20681;
i__20672_20677 = G__20682;
continue;
} else {
var temp__4657__auto___20683 = cljs.core.seq(seq__20669_20674);
if(temp__4657__auto___20683){
var seq__20669_20684__$1 = temp__4657__auto___20683;
if(cljs.core.chunked_seq_QMARK_(seq__20669_20684__$1)){
var c__7217__auto___20685 = cljs.core.chunk_first(seq__20669_20684__$1);
var G__20686 = cljs.core.chunk_rest(seq__20669_20684__$1);
var G__20687 = c__7217__auto___20685;
var G__20688 = cljs.core.count(c__7217__auto___20685);
var G__20689 = (0);
seq__20669_20674 = G__20686;
chunk__20670_20675 = G__20687;
count__20671_20676 = G__20688;
i__20672_20677 = G__20689;
continue;
} else {
var property__19571__auto___20690 = cljs.core.first(seq__20669_20684__$1);
if(cljs.core.truth_((base__19570__auto___20673[property__19571__auto___20690]))){
(devcards.core.DontUpdate.prototype[property__19571__auto___20690] = (base__19570__auto___20673[property__19571__auto___20690]));
} else {
}

var G__20691 = cljs.core.next(seq__20669_20684__$1);
var G__20692 = null;
var G__20693 = (0);
var G__20694 = (0);
seq__20669_20674 = G__20691;
chunk__20670_20675 = G__20692;
count__20671_20676 = G__20693;
i__20672_20677 = G__20694;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__20697 = devcards.core.DontUpdate;
var G__20698 = ({"change_count": change_count, "children_thunk": children_thunk});
return React.createElement(G__20697,G__20698);
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__6406__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(cljs.core.cst$kw$watch_DASH_atom.cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__4657__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom))):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var main__$1 = (function (){var G__20707 = "div";
var G__20708 = ({"key": "devcards-main-section"});
var G__20709 = sablono.interpreter.interpret(main);
return React.createElement(G__20707,G__20708,G__20709);
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var x__7240__auto__ = document;
return cljs.core._conj((function (){var x__7240__auto____$1 = main__$1;
return cljs.core._conj((function (){var x__7240__auto____$2 = hist_ctl;
return cljs.core._conj((function (){var x__7240__auto____$3 = edn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7240__auto____$3);
})(),x__7240__auto____$2);
})(),x__7240__auto____$1);
})(),x__7240__auto__);
})());
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__20710 = "div";
var G__20711 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__20712 = sablono.interpreter.interpret(children);
return React.createElement(G__20710,G__20711,G__20712);
}
});
var base__19570__auto___20717 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__6406__auto__ = (function (){var and__6394__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__6394__auto__)){
return this$.state;
} else {
return and__6394__auto__;
}
})();
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data(this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__6394__auto__ = data_atom;
if(cljs.core.truth_(and__6394__auto__)){
return id;
} else {
return and__6394__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var change_count = devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count);
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__19570__auto___20717);
}

var seq__20713_20718 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20714_20719 = null;
var count__20715_20720 = (0);
var i__20716_20721 = (0);
while(true){
if((i__20716_20721 < count__20715_20720)){
var property__19571__auto___20722 = chunk__20714_20719.cljs$core$IIndexed$_nth$arity$2(null,i__20716_20721);
if(cljs.core.truth_((base__19570__auto___20717[property__19571__auto___20722]))){
(devcards.core.DevcardBase.prototype[property__19571__auto___20722] = (base__19570__auto___20717[property__19571__auto___20722]));
} else {
}

var G__20723 = seq__20713_20718;
var G__20724 = chunk__20714_20719;
var G__20725 = count__20715_20720;
var G__20726 = (i__20716_20721 + (1));
seq__20713_20718 = G__20723;
chunk__20714_20719 = G__20724;
count__20715_20720 = G__20725;
i__20716_20721 = G__20726;
continue;
} else {
var temp__4657__auto___20727 = cljs.core.seq(seq__20713_20718);
if(temp__4657__auto___20727){
var seq__20713_20728__$1 = temp__4657__auto___20727;
if(cljs.core.chunked_seq_QMARK_(seq__20713_20728__$1)){
var c__7217__auto___20729 = cljs.core.chunk_first(seq__20713_20728__$1);
var G__20730 = cljs.core.chunk_rest(seq__20713_20728__$1);
var G__20731 = c__7217__auto___20729;
var G__20732 = cljs.core.count(c__7217__auto___20729);
var G__20733 = (0);
seq__20713_20718 = G__20730;
chunk__20714_20719 = G__20731;
count__20715_20720 = G__20732;
i__20716_20721 = G__20733;
continue;
} else {
var property__19571__auto___20734 = cljs.core.first(seq__20713_20728__$1);
if(cljs.core.truth_((base__19570__auto___20717[property__19571__auto___20734]))){
(devcards.core.DevcardBase.prototype[property__19571__auto___20734] = (base__19570__auto___20717[property__19571__auto___20734]));
} else {
}

var G__20735 = cljs.core.next(seq__20713_20728__$1);
var G__20736 = null;
var G__20737 = (0);
var G__20738 = (0);
seq__20713_20718 = G__20735;
chunk__20714_20719 = G__20736;
count__20715_20720 = G__20737;
i__20716_20721 = G__20738;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__4657__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
var G__20739 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20740 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__20739,G__20740) : node_fn.call(null,G__20739,G__20740));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__19570__auto___20747 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__6394__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__6394__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__6394__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__20741 = ({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)});
var G__20742 = "Card has not mounted DOM node.";
return React.DOM.div(G__20741,G__20742);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__19570__auto___20747);
}

var seq__20743_20748 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20744_20749 = null;
var count__20745_20750 = (0);
var i__20746_20751 = (0);
while(true){
if((i__20746_20751 < count__20745_20750)){
var property__19571__auto___20752 = chunk__20744_20749.cljs$core$IIndexed$_nth$arity$2(null,i__20746_20751);
if(cljs.core.truth_((base__19570__auto___20747[property__19571__auto___20752]))){
(devcards.core.DomComponent.prototype[property__19571__auto___20752] = (base__19570__auto___20747[property__19571__auto___20752]));
} else {
}

var G__20753 = seq__20743_20748;
var G__20754 = chunk__20744_20749;
var G__20755 = count__20745_20750;
var G__20756 = (i__20746_20751 + (1));
seq__20743_20748 = G__20753;
chunk__20744_20749 = G__20754;
count__20745_20750 = G__20755;
i__20746_20751 = G__20756;
continue;
} else {
var temp__4657__auto___20757 = cljs.core.seq(seq__20743_20748);
if(temp__4657__auto___20757){
var seq__20743_20758__$1 = temp__4657__auto___20757;
if(cljs.core.chunked_seq_QMARK_(seq__20743_20758__$1)){
var c__7217__auto___20759 = cljs.core.chunk_first(seq__20743_20758__$1);
var G__20760 = cljs.core.chunk_rest(seq__20743_20758__$1);
var G__20761 = c__7217__auto___20759;
var G__20762 = cljs.core.count(c__7217__auto___20759);
var G__20763 = (0);
seq__20743_20748 = G__20760;
chunk__20744_20749 = G__20761;
count__20745_20750 = G__20762;
i__20746_20751 = G__20763;
continue;
} else {
var property__19571__auto___20764 = cljs.core.first(seq__20743_20758__$1);
if(cljs.core.truth_((base__19570__auto___20747[property__19571__auto___20764]))){
(devcards.core.DomComponent.prototype[property__19571__auto___20764] = (base__19570__auto___20747[property__19571__auto___20764]));
} else {
}

var G__20765 = cljs.core.next(seq__20743_20758__$1);
var G__20766 = null;
var G__20767 = (0);
var G__20768 = (0);
seq__20743_20748 = G__20765;
chunk__20744_20749 = G__20766;
count__20745_20750 = G__20767;
i__20746_20751 = G__20768;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__6406__auto__ = x === true;
if(or__6406__auto__){
return or__6406__auto__;
} else {
var or__6406__auto____$1 = x === false;
if(or__6406__auto____$1){
return or__6406__auto____$1;
} else {
var or__6406__auto____$2 = (x == null);
if(or__6406__auto____$2){
return or__6406__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__6406__auto__ = typeof x === 'string';
if(or__6406__auto__){
return or__6406__auto__;
} else {
var or__6406__auto____$1 = (x == null);
if(or__6406__auto____$1){
return or__6406__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__6406__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__20769_SHARP_){
return !(p1__20769_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__20778 = opts;
var map__20778__$1 = ((((!((map__20778 == null)))?((((map__20778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20778):map__20778);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6406__auto__ = cljs.core.map_QMARK_(options);
if(or__6406__auto__){
return or__6406__auto__;
} else {
var or__6406__auto____$1 = (options == null);
if(or__6406__auto____$1){
return or__6406__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__6406__auto__ = (initial_data == null);
if(or__6406__auto__){
return or__6406__auto__;
} else {
var or__6406__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__6406__auto____$1){
return or__6406__auto____$1;
} else {
var or__6406__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__6406__auto____$2){
return or__6406__auto____$2;
} else {
var or__6406__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__6406__auto____$3){
return or__6406__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__20778,map__20778__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__20770_SHARP_){
return devcards.core.booler_QMARK_(p1__20770_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__20778,map__20778__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__20801 = "div";
var G__20802 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__20803 = sablono.interpreter.interpret((function (){var G__20806 = "code";
var G__20807 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__20808 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__20806,G__20807,G__20808);
})());
var G__20804 = (function (){var G__20809 = "span";
var G__20810 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__20811 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__20809,G__20810,G__20811);
})();
var G__20805 = (function (){var G__20813 = "span";
var G__20814 = ({"style": ({"flex": "1 100px"})});
var G__20815 = " Received: ";
var G__20816 = (function (){var attrs20812 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs20812))?sablono.interpreter.attributes(attrs20812):null),((cljs.core.map_QMARK_(attrs20812))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20812)], null)));
})();
return React.createElement(G__20813,G__20814,G__20815,G__20816);
})();
return React.createElement(G__20801,G__20802,G__20803,G__20804,G__20805);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__20829 = "div";
var G__20830 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__20831 = (function (){var attrs20828 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20828))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs20828], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs20828))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20828)], null)));
})();
var G__20832 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__20834 = "div";
var G__20835 = null;
var G__20836 = (function (){var attrs20833 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20833))?sablono.interpreter.attributes(attrs20833):null),((cljs.core.map_QMARK_(attrs20833))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20833)], null)));
})();
var G__20837 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs20838 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20838))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs20838], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs20838))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20838)], null)));
})():null));
return React.createElement(G__20834,G__20835,G__20836,G__20837);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__20829,G__20830,G__20831,G__20832);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__20839_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__20839_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__20842 = devcards.core.DevcardBase;
var G__20843 = ({"card": devcards.core.add_environment_defaults(card_options)});
return React.createElement(G__20842,G__20843);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7028__auto__,k__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7028__auto____$1,k__7029__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7030__auto__,k20845,else__7031__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
var G__20847 = (((k20845 instanceof cljs.core.Keyword))?k20845.fqn:null);
switch (G__20847) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20845,else__7031__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7042__auto__,writer__7043__auto__,opts__7044__auto__){
var self__ = this;
var this__7042__auto____$1 = this;
var pr_pair__7045__auto__ = ((function (this__7042__auto____$1){
return (function (keyval__7046__auto__){
return cljs.core.pr_sequential_writer(writer__7043__auto__,cljs.core.pr_writer,""," ","",opts__7044__auto__,keyval__7046__auto__);
});})(this__7042__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7043__auto__,pr_pair__7045__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__7044__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20844){
var self__ = this;
var G__20844__$1 = this;
return (new cljs.core.RecordIter((0),G__20844__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7022__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7032__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7023__auto__){
var self__ = this;
var this__7023__auto____$1 = this;
var h__6841__auto__ = self__.__hash;
if(!((h__6841__auto__ == null))){
return h__6841__auto__;
} else {
var h__6841__auto____$1 = cljs.core.hash_imap(this__7023__auto____$1);
self__.__hash = h__6841__auto____$1;

return h__6841__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7024__auto__,other__7025__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6394__auto__ = other__7025__auto__;
if(cljs.core.truth_(and__6394__auto__)){
var and__6394__auto____$1 = (this__7024__auto____$1.constructor === other__7025__auto__.constructor);
if(and__6394__auto____$1){
return cljs.core.equiv_map(this__7024__auto____$1,other__7025__auto__);
} else {
return and__6394__auto____$1;
}
} else {
return and__6394__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7037__auto__,k__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7038__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7037__auto____$1),self__.__meta),k__7038__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7038__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7035__auto__,k__7036__auto__,G__20844){
var self__ = this;
var this__7035__auto____$1 = this;
var pred__20848 = cljs.core.keyword_identical_QMARK_;
var expr__20849 = k__7036__auto__;
if(cljs.core.truth_((function (){var G__20851 = cljs.core.cst$kw$obj;
var G__20852 = expr__20849;
return (pred__20848.cljs$core$IFn$_invoke$arity$2 ? pred__20848.cljs$core$IFn$_invoke$arity$2(G__20851,G__20852) : pred__20848.call(null,G__20851,G__20852));
})())){
return (new devcards.core.IdentiyOptions(G__20844,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7036__auto__,G__20844),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7027__auto__,G__20844){
var self__ = this;
var this__7027__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__20844,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7033__auto__,entry__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7034__auto__)){
return cljs.core._assoc(this__7033__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7034__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7034__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7033__auto____$1,entry__7034__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__7062__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__7062__auto__,writer__7063__auto__){
return cljs.core._write(writer__7063__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__20846){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20846),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20846,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__20854){
var map__20857 = p__20854;
var map__20857__$1 = ((((!((map__20857 == null)))?((((map__20857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20857):map__20857);
var devcard_opts = map__20857__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__20857,map__20857__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__20857,map__20857__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7028__auto__,k__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7028__auto____$1,k__7029__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7030__auto__,k20860,else__7031__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
var G__20862 = (((k20860 instanceof cljs.core.Keyword))?k20860.fqn:null);
switch (G__20862) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20860,else__7031__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7042__auto__,writer__7043__auto__,opts__7044__auto__){
var self__ = this;
var this__7042__auto____$1 = this;
var pr_pair__7045__auto__ = ((function (this__7042__auto____$1){
return (function (keyval__7046__auto__){
return cljs.core.pr_sequential_writer(writer__7043__auto__,cljs.core.pr_writer,""," ","",opts__7044__auto__,keyval__7046__auto__);
});})(this__7042__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7043__auto__,pr_pair__7045__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__7044__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20859){
var self__ = this;
var G__20859__$1 = this;
return (new cljs.core.RecordIter((0),G__20859__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7022__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7032__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7023__auto__){
var self__ = this;
var this__7023__auto____$1 = this;
var h__6841__auto__ = self__.__hash;
if(!((h__6841__auto__ == null))){
return h__6841__auto__;
} else {
var h__6841__auto____$1 = cljs.core.hash_imap(this__7023__auto____$1);
self__.__hash = h__6841__auto____$1;

return h__6841__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7024__auto__,other__7025__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6394__auto__ = other__7025__auto__;
if(cljs.core.truth_(and__6394__auto__)){
var and__6394__auto____$1 = (this__7024__auto____$1.constructor === other__7025__auto__.constructor);
if(and__6394__auto____$1){
return cljs.core.equiv_map(this__7024__auto____$1,other__7025__auto__);
} else {
return and__6394__auto____$1;
}
} else {
return and__6394__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7037__auto__,k__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7038__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7037__auto____$1),self__.__meta),k__7038__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7038__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7035__auto__,k__7036__auto__,G__20859){
var self__ = this;
var this__7035__auto____$1 = this;
var pred__20863 = cljs.core.keyword_identical_QMARK_;
var expr__20864 = k__7036__auto__;
if(cljs.core.truth_((function (){var G__20866 = cljs.core.cst$kw$obj;
var G__20867 = expr__20864;
return (pred__20863.cljs$core$IFn$_invoke$arity$2 ? pred__20863.cljs$core$IFn$_invoke$arity$2(G__20866,G__20867) : pred__20863.call(null,G__20866,G__20867));
})())){
return (new devcards.core.AtomLikeOptions(G__20859,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7036__auto__,G__20859),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7027__auto__,G__20859){
var self__ = this;
var this__7027__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__20859,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7033__auto__,entry__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7034__auto__)){
return cljs.core._assoc(this__7033__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7034__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7034__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7033__auto____$1,entry__7034__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__7062__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__7062__auto__,writer__7063__auto__){
return cljs.core._write(writer__7063__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__20861){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20861),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20861,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7028__auto__,k__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7028__auto____$1,k__7029__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7030__auto__,k20872,else__7031__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
var G__20874 = (((k20872 instanceof cljs.core.Keyword))?k20872.fqn:null);
switch (G__20874) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20872,else__7031__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7042__auto__,writer__7043__auto__,opts__7044__auto__){
var self__ = this;
var this__7042__auto____$1 = this;
var pr_pair__7045__auto__ = ((function (this__7042__auto____$1){
return (function (keyval__7046__auto__){
return cljs.core.pr_sequential_writer(writer__7043__auto__,cljs.core.pr_writer,""," ","",opts__7044__auto__,keyval__7046__auto__);
});})(this__7042__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7043__auto__,pr_pair__7045__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__7044__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20871){
var self__ = this;
var G__20871__$1 = this;
return (new cljs.core.RecordIter((0),G__20871__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7022__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7032__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7023__auto__){
var self__ = this;
var this__7023__auto____$1 = this;
var h__6841__auto__ = self__.__hash;
if(!((h__6841__auto__ == null))){
return h__6841__auto__;
} else {
var h__6841__auto____$1 = cljs.core.hash_imap(this__7023__auto____$1);
self__.__hash = h__6841__auto____$1;

return h__6841__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7024__auto__,other__7025__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6394__auto__ = other__7025__auto__;
if(cljs.core.truth_(and__6394__auto__)){
var and__6394__auto____$1 = (this__7024__auto____$1.constructor === other__7025__auto__.constructor);
if(and__6394__auto____$1){
return cljs.core.equiv_map(this__7024__auto____$1,other__7025__auto__);
} else {
return and__6394__auto____$1;
}
} else {
return and__6394__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7037__auto__,k__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7038__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7037__auto____$1),self__.__meta),k__7038__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7038__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7035__auto__,k__7036__auto__,G__20871){
var self__ = this;
var this__7035__auto____$1 = this;
var pred__20875 = cljs.core.keyword_identical_QMARK_;
var expr__20876 = k__7036__auto__;
if(cljs.core.truth_((function (){var G__20878 = cljs.core.cst$kw$obj;
var G__20879 = expr__20876;
return (pred__20875.cljs$core$IFn$_invoke$arity$2 ? pred__20875.cljs$core$IFn$_invoke$arity$2(G__20878,G__20879) : pred__20875.call(null,G__20878,G__20879));
})())){
return (new devcards.core.EdnLikeOptions(G__20871,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7036__auto__,G__20871),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7027__auto__,G__20871){
var self__ = this;
var this__7027__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__20871,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7033__auto__,entry__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7034__auto__)){
return cljs.core._assoc(this__7033__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7034__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7034__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7033__auto____$1,entry__7034__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__7062__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__7062__auto__,writer__7063__auto__){
return cljs.core._write(writer__7063__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__20873){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20873),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20873,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__6394__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__6394__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__6394__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__20892 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__20892 == null))){
if((false) || (G__20892.devcards$core$IDevcard$)){
return true;
} else {
if((!G__20892.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__20892);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__20892);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__20895 = devcards.core.DomComponent;
var G__20896 = ({"node_fn": node_fn, "data_atom": data_atom});
return React.createElement(G__20895,G__20896);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__20900 = (function (){var G__20901 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20901) : cljs.core.deref.call(null,G__20901));
})();
var map__20900__$1 = ((((!((map__20900 == null)))?((((map__20900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20900):map__20900);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20900__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20900__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__20904 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20904) : cljs.core.deref.call(null,G__20904));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__20906 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20906) : cljs.core.deref.call(null,G__20906));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20911 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20911__$1 = ((((!((map__20911 == null)))?((((map__20911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20911):map__20911);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20913_20915 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20914_20916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20913_20915,G__20914_20916) : cljs.core.reset_BANG_.call(null,G__20913_20915,G__20914_20916));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20921 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20921__$1 = ((((!((map__20921 == null)))?((((map__20921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20921):map__20921);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20921__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20921__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20923_20925 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20924_20926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20923_20925,G__20924_20926) : cljs.core.reset_BANG_.call(null,G__20923_20925,G__20924_20926));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20931 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20931__$1 = ((((!((map__20931 == null)))?((((map__20931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20931):map__20931);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20933_20935 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20934_20936 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20933_20935,G__20934_20936) : cljs.core.reset_BANG_.call(null,G__20933_20935,G__20934_20936));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__20937 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__20938 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20938) : cljs.core.atom.call(null,G__20938));
})()});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__7240__auto__ = (function (){var G__20940 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20940) : cljs.core.deref.call(null,G__20940));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7240__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__6394__auto__ = data_atom;
if(cljs.core.truth_(and__6394__auto__)){
return id;
} else {
return and__6394__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__20941){
var map__20942 = p__20941;
var map__20942__$1 = ((((!((map__20942 == null)))?((((map__20942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20942):map__20942);
var ha = map__20942__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__6406__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__20944 = "div";
var G__20945 = ({"style": ({"display": (cljs.core.truth_((function (){var or__6406__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__20946 = (function (){var action = ((function (G__20944,G__20945,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__20944,G__20945,this$))
;
return sablono.interpreter.interpret((function (){var G__20952 = "button";
var G__20953 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__20954 = (function (){var G__20955 = "span";
var G__20956 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__20957 = "";
return React.createElement(G__20955,G__20956,G__20957);
})();
return React.createElement(G__20952,G__20953,G__20954);
})());
})();
var G__20947 = (function (){var action = ((function (G__20944,G__20945,G__20946,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20958 = data_atom;
var G__20959 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20958,G__20959) : cljs.core.reset_BANG_.call(null,G__20958,G__20959));
});})(G__20944,G__20945,G__20946,this$))
;
return sablono.interpreter.interpret((function (){var G__20962 = "button";
var G__20963 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__20964 = (function (){var G__20965 = "span";
var G__20966 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__20967 = "";
return React.createElement(G__20965,G__20966,G__20967);
})();
return React.createElement(G__20962,G__20963,G__20964);
})());
})();
var G__20948 = (function (){var action = ((function (G__20944,G__20945,G__20946,G__20947,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__20944,G__20945,G__20946,G__20947,this$))
;
return sablono.interpreter.interpret((function (){var G__20970 = "button";
var G__20971 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__20972 = (function (){var G__20973 = "span";
var G__20974 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__20975 = "";
return React.createElement(G__20973,G__20974,G__20975);
})();
return React.createElement(G__20970,G__20971,G__20972);
})());
})();
var G__20949 = (function (){var listener = ((function (G__20944,G__20945,G__20946,G__20947,G__20948,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__20944,G__20945,G__20946,G__20947,G__20948,this$))
;
return sablono.interpreter.interpret((function (){var G__20982 = "button";
var G__20983 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__20984 = (function (){var G__20987 = "span";
var G__20988 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__20987,G__20988);
})();
var G__20985 = (function (){var G__20989 = "span";
var G__20990 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__20989,G__20990);
})();
var G__20986 = (function (){var G__20991 = "span";
var G__20992 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return React.createElement(G__20991,G__20992);
})();
return React.createElement(G__20982,G__20983,G__20984,G__20985,G__20986);
})());
})();
return React.createElement(G__20944,G__20945,G__20946,G__20947,G__20948,G__20949);
} else {
return null;
}
})});
return React.createClass(G__20937);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__20995 = devcards.core.HistoryComponent;
var G__20996 = ({"data_atom": data_atom, "key": "devcards-history-control-bar"});
return React.createElement(G__20995,G__20996);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_20998 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_20998;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__7331__auto__ = (function (){var G__20999 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20999) : cljs.core.atom.call(null,G__20999));
})();
var prefer_table__7332__auto__ = (function (){var G__21000 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21000) : cljs.core.atom.call(null,G__21000));
})();
var method_cache__7333__auto__ = (function (){var G__21001 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21001) : cljs.core.atom.call(null,G__21001));
})();
var cached_hierarchy__7334__auto__ = (function (){var G__21002 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21002) : cljs.core.atom.call(null,G__21002));
})();
var hierarchy__7335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7335__auto__,method_table__7331__auto__,prefer_table__7332__auto__,method_cache__7333__auto__,cached_hierarchy__7334__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs21003 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21003))?sablono.interpreter.attributes(attrs21003):null),((cljs.core.map_QMARK_(attrs21003))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21003)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__21004,body){
var map__21012 = p__21004;
var map__21012__$1 = ((((!((map__21012 == null)))?((((map__21012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21012):map__21012);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__21015 = "div";
var G__21016 = null;
var G__21017 = (function (){var attrs21014 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs21014))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs21014], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs21014))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21014)], null)));
})();
var G__21018 = sablono.interpreter.interpret(body);
return React.createElement(G__21015,G__21016,G__21017,G__21018);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__21019){
var map__21053 = p__21019;
var map__21053__$1 = ((((!((map__21053 == null)))?((((map__21053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21053):map__21053);
var m = map__21053__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs21055 = (function (){var G__21056 = devcards.core.CodeHighlight;
var G__21057 = ({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"});
return React.createElement(G__21056,G__21057);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21055))?sablono.interpreter.attributes(attrs21055):null),((cljs.core.map_QMARK_(attrs21055))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__21060 = "div";
var G__21061 = ({"style": ({"marginTop": "5px"})});
var G__21062 = (function (){var G__21064 = "div";
var G__21065 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__21066 = "\u25B6";
return React.createElement(G__21064,G__21065,G__21066);
})();
var G__21063 = (function (){var G__21067 = "div";
var G__21068 = ({"style": ({"marginLeft": "20px"})});
var G__21069 = sablono.interpreter.interpret((function (){var G__21070 = devcards.core.CodeHighlight;
var G__21071 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__21070,G__21071);
})());
return React.createElement(G__21067,G__21068,G__21069);
})();
return React.createElement(G__21060,G__21061,G__21062,G__21063);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21055),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__21074 = "div";
var G__21075 = ({"style": ({"marginTop": "5px"})});
var G__21076 = (function (){var G__21078 = "div";
var G__21079 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__21080 = "\u25B6";
return React.createElement(G__21078,G__21079,G__21080);
})();
var G__21077 = (function (){var G__21081 = "div";
var G__21082 = ({"style": ({"marginLeft": "20px"})});
var G__21083 = sablono.interpreter.interpret((function (){var G__21084 = devcards.core.CodeHighlight;
var G__21085 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__21084,G__21085);
})());
return React.createElement(G__21081,G__21082,G__21083);
})();
return React.createElement(G__21074,G__21075,G__21076,G__21077);
})():null))], null)));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__21089 = "div";
var G__21090 = null;
var G__21091 = React.createElement("strong",null,"Error: ");
var G__21092 = (function (){var attrs21088 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs21088))?sablono.interpreter.attributes(attrs21088):null),((cljs.core.map_QMARK_(attrs21088))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21088)], null)));
})();
return React.createElement(G__21089,G__21090,G__21091,G__21092);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs21093 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21093))?sablono.interpreter.attributes(attrs21093):null),((cljs.core.map_QMARK_(attrs21093))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21093)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__21094){
var map__21095 = p__21094;
var map__21095__$1 = ((((!((map__21095 == null)))?((((map__21095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21095):map__21095);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21095__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs21097 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__21095,map__21095__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__21095,map__21095__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__7240__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7240__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21097))?sablono.interpreter.attributes(attrs21097):null),((cljs.core.map_QMARK_(attrs21097))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21097)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__21099 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__21099) : cljs.test.report.call(null,G__21099));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs21108 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21109,p__21110){
var map__21111 = p__21109;
var map__21111__$1 = ((((!((map__21111 == null)))?((((map__21111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21111):map__21111);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111__$1,cljs.core.cst$kw$html_DASH_list);
var vec__21112 = p__21110;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21112,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21112,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__7240__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__7240__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21108))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs21108], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs21108))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21108)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__21153){
var map__21154 = p__21153;
var map__21154__$1 = ((((!((map__21154 == null)))?((((map__21154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21154):map__21154);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__21152 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__21152__$1 = ((((!((map__21152 == null)))?((((map__21152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21152):map__21152);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__21157 = "div";
var G__21158 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__21159 = (function (){var G__21161 = "div";
var G__21162 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__21163 = (function (){var G__21167 = "a";
var G__21168 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__21167,G__21161,G__21162,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__21167,G__21161,G__21162,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1))
)});
var G__21169 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__21167,G__21168,G__21169);
})();
var G__21164 = (function (){var G__21170 = "button";
var G__21171 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21170,G__21161,G__21162,G__21163,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(G__21170,G__21161,G__21162,G__21163,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21172 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__21170,G__21171,G__21172);
})();
var G__21165 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__21173 = "button";
var G__21174 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21173,G__21161,G__21162,G__21163,G__21164,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__21173,G__21161,G__21162,G__21163,G__21164,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1){
return (function (p__21176){
var map__21177 = p__21176;
var map__21177__$1 = ((((!((map__21177 == null)))?((((map__21177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21177):map__21177);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__21173,G__21161,G__21162,G__21163,G__21164,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1))
}));
});})(G__21173,G__21161,G__21162,G__21163,G__21164,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21175 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__21173,G__21174,G__21175);
})()));
var G__21166 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__21179 = "button";
var G__21180 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21179,G__21161,G__21162,G__21163,G__21164,G__21165,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__21179,G__21161,G__21162,G__21163,G__21164,G__21165,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1){
return (function (p__21182){
var map__21183 = p__21182;
var map__21183__$1 = ((((!((map__21183 == null)))?((((map__21183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21183):map__21183);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21183__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__21179,G__21161,G__21162,G__21163,G__21164,G__21165,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1))
}));
});})(G__21179,G__21161,G__21162,G__21163,G__21164,G__21165,G__21157,G__21158,error_QMARK_,tests,some_tests,total_tests,map__21152,map__21152__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21181 = sablono.interpreter.interpret(pass);
return React.createElement(G__21179,G__21180,G__21181);
})()));
return React.createElement(G__21161,G__21162,G__21163,G__21164,G__21165,G__21166);
})();
var G__21160 = (function (){var G__21185 = "div";
var G__21186 = ({"className": devcards.system.devcards_rendered_card_class});
var G__21187 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__6406__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__21185,G__21186,G__21187);
})();
return React.createElement(G__21157,G__21158,G__21159,G__21160);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__15682__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto__){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto__){
return (function (state_21276){
var state_val_21277 = (state_21276[(1)]);
if((state_val_21277 === (7))){
var state_21276__$1 = state_21276;
var statearr_21278_21327 = state_21276__$1;
(statearr_21278_21327[(2)] = false);

(statearr_21278_21327[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (20))){
var inst_21215 = (state_21276[(7)]);
var inst_21234 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21215);
var state_21276__$1 = state_21276;
var statearr_21279_21328 = state_21276__$1;
(statearr_21279_21328[(2)] = inst_21234);

(statearr_21279_21328[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (27))){
var inst_21251 = (state_21276[(8)]);
var inst_21239 = (state_21276[(9)]);
var inst_21255 = (inst_21239.cljs$core$IFn$_invoke$arity$1 ? inst_21239.cljs$core$IFn$_invoke$arity$1(inst_21251) : inst_21239.call(null,inst_21251));
var state_21276__$1 = state_21276;
var statearr_21280_21329 = state_21276__$1;
(statearr_21280_21329[(2)] = inst_21255);

(statearr_21280_21329[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (1))){
var state_21276__$1 = state_21276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21276__$1,(2),devcards.core.test_channel);
} else {
if((state_val_21277 === (24))){
var state_21276__$1 = state_21276;
var statearr_21281_21330 = state_21276__$1;
(statearr_21281_21330[(2)] = null);

(statearr_21281_21330[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (4))){
var state_21276__$1 = state_21276;
var statearr_21282_21331 = state_21276__$1;
(statearr_21282_21331[(2)] = false);

(statearr_21282_21331[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (15))){
var state_21276__$1 = state_21276;
var statearr_21283_21332 = state_21276__$1;
(statearr_21283_21332[(2)] = false);

(statearr_21283_21332[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (21))){
var inst_21215 = (state_21276[(7)]);
var state_21276__$1 = state_21276;
var statearr_21284_21333 = state_21276__$1;
(statearr_21284_21333[(2)] = inst_21215);

(statearr_21284_21333[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (13))){
var inst_21274 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21276__$1,inst_21274);
} else {
if((state_val_21277 === (22))){
var inst_21238 = (state_21276[(10)]);
var inst_21237 = (state_21276[(2)]);
var inst_21238__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21237,cljs.core.cst$kw$tests);
var inst_21239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21237,cljs.core.cst$kw$callback);
var state_21276__$1 = (function (){var statearr_21285 = state_21276;
(statearr_21285[(10)] = inst_21238__$1);

(statearr_21285[(9)] = inst_21239);

return statearr_21285;
})();
if(cljs.core.truth_(inst_21238__$1)){
var statearr_21286_21334 = state_21276__$1;
(statearr_21286_21334[(1)] = (23));

} else {
var statearr_21287_21335 = state_21276__$1;
(statearr_21287_21335[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (29))){
var inst_21265 = (state_21276[(2)]);
var inst_21266 = cljs.test.clear_env_BANG_();
var state_21276__$1 = (function (){var statearr_21288 = state_21276;
(statearr_21288[(11)] = inst_21265);

(statearr_21288[(12)] = inst_21266);

return statearr_21288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21276__$1,(30),devcards.core.test_channel);
} else {
if((state_val_21277 === (6))){
var state_21276__$1 = state_21276;
var statearr_21289_21336 = state_21276__$1;
(statearr_21289_21336[(2)] = true);

(statearr_21289_21336[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (28))){
var inst_21239 = (state_21276[(9)]);
var inst_21257 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_21258 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_21259 = cljs.core.PersistentHashMap.fromArrays(inst_21257,inst_21258);
var inst_21260 = devcards.core.collect_test(inst_21259);
var inst_21261 = cljs.test.get_current_env();
var inst_21262 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_21261,cljs.core.cst$kw$error,"Execution timed out!");
var inst_21263 = (inst_21239.cljs$core$IFn$_invoke$arity$1 ? inst_21239.cljs$core$IFn$_invoke$arity$1(inst_21262) : inst_21239.call(null,inst_21262));
var state_21276__$1 = (function (){var statearr_21290 = state_21276;
(statearr_21290[(13)] = inst_21260);

return statearr_21290;
})();
var statearr_21291_21337 = state_21276__$1;
(statearr_21291_21337[(2)] = inst_21263);

(statearr_21291_21337[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (25))){
var inst_21272 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
var statearr_21292_21338 = state_21276__$1;
(statearr_21292_21338[(2)] = inst_21272);

(statearr_21292_21338[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (17))){
var state_21276__$1 = state_21276;
var statearr_21293_21339 = state_21276__$1;
(statearr_21293_21339[(2)] = true);

(statearr_21293_21339[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (3))){
var inst_21192 = (state_21276[(14)]);
var inst_21197 = inst_21192.cljs$lang$protocol_mask$partition0$;
var inst_21198 = (inst_21197 & (64));
var inst_21199 = inst_21192.cljs$core$ISeq$;
var inst_21200 = (inst_21198) || (inst_21199);
var state_21276__$1 = state_21276;
if(cljs.core.truth_(inst_21200)){
var statearr_21294_21340 = state_21276__$1;
(statearr_21294_21340[(1)] = (6));

} else {
var statearr_21295_21341 = state_21276__$1;
(statearr_21295_21341[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (12))){
var inst_21215 = (state_21276[(7)]);
var inst_21219 = (inst_21215 == null);
var inst_21220 = cljs.core.not(inst_21219);
var state_21276__$1 = state_21276;
if(inst_21220){
var statearr_21296_21342 = state_21276__$1;
(statearr_21296_21342[(1)] = (14));

} else {
var statearr_21297_21343 = state_21276__$1;
(statearr_21297_21343[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (2))){
var inst_21192 = (state_21276[(14)]);
var inst_21192__$1 = (state_21276[(2)]);
var inst_21194 = (inst_21192__$1 == null);
var inst_21195 = cljs.core.not(inst_21194);
var state_21276__$1 = (function (){var statearr_21298 = state_21276;
(statearr_21298[(14)] = inst_21192__$1);

return statearr_21298;
})();
if(inst_21195){
var statearr_21299_21344 = state_21276__$1;
(statearr_21299_21344[(1)] = (3));

} else {
var statearr_21300_21345 = state_21276__$1;
(statearr_21300_21345[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (23))){
var inst_21244 = (state_21276[(15)]);
var inst_21238 = (state_21276[(10)]);
var inst_21244__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_21245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21246 = devcards.core.run_card_tests(inst_21238);
var inst_21247 = [inst_21246,inst_21244__$1];
var inst_21248 = (new cljs.core.PersistentVector(null,2,(5),inst_21245,inst_21247,null));
var state_21276__$1 = (function (){var statearr_21301 = state_21276;
(statearr_21301[(15)] = inst_21244__$1);

return statearr_21301;
})();
return cljs.core.async.ioc_alts_BANG_(state_21276__$1,(26),inst_21248);
} else {
if((state_val_21277 === (19))){
var inst_21229 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
var statearr_21302_21346 = state_21276__$1;
(statearr_21302_21346[(2)] = inst_21229);

(statearr_21302_21346[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (11))){
var inst_21192 = (state_21276[(14)]);
var inst_21212 = (state_21276[(2)]);
var inst_21213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21212,cljs.core.cst$kw$tests);
var inst_21214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21212,cljs.core.cst$kw$callback);
var inst_21215 = inst_21192;
var state_21276__$1 = (function (){var statearr_21303 = state_21276;
(statearr_21303[(16)] = inst_21213);

(statearr_21303[(17)] = inst_21214);

(statearr_21303[(7)] = inst_21215);

return statearr_21303;
})();
var statearr_21304_21347 = state_21276__$1;
(statearr_21304_21347[(2)] = null);

(statearr_21304_21347[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (9))){
var inst_21192 = (state_21276[(14)]);
var inst_21209 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21192);
var state_21276__$1 = state_21276;
var statearr_21305_21348 = state_21276__$1;
(statearr_21305_21348[(2)] = inst_21209);

(statearr_21305_21348[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (5))){
var inst_21207 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
if(cljs.core.truth_(inst_21207)){
var statearr_21306_21349 = state_21276__$1;
(statearr_21306_21349[(1)] = (9));

} else {
var statearr_21307_21350 = state_21276__$1;
(statearr_21307_21350[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (14))){
var inst_21215 = (state_21276[(7)]);
var inst_21222 = inst_21215.cljs$lang$protocol_mask$partition0$;
var inst_21223 = (inst_21222 & (64));
var inst_21224 = inst_21215.cljs$core$ISeq$;
var inst_21225 = (inst_21223) || (inst_21224);
var state_21276__$1 = state_21276;
if(cljs.core.truth_(inst_21225)){
var statearr_21308_21351 = state_21276__$1;
(statearr_21308_21351[(1)] = (17));

} else {
var statearr_21309_21352 = state_21276__$1;
(statearr_21309_21352[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (26))){
var inst_21244 = (state_21276[(15)]);
var inst_21250 = (state_21276[(2)]);
var inst_21251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21250,(0),null);
var inst_21252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21250,(1),null);
var inst_21253 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_21252,inst_21244);
var state_21276__$1 = (function (){var statearr_21310 = state_21276;
(statearr_21310[(8)] = inst_21251);

return statearr_21310;
})();
if(inst_21253){
var statearr_21311_21353 = state_21276__$1;
(statearr_21311_21353[(1)] = (27));

} else {
var statearr_21312_21354 = state_21276__$1;
(statearr_21312_21354[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (16))){
var inst_21232 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
if(cljs.core.truth_(inst_21232)){
var statearr_21313_21355 = state_21276__$1;
(statearr_21313_21355[(1)] = (20));

} else {
var statearr_21314_21356 = state_21276__$1;
(statearr_21314_21356[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (30))){
var inst_21268 = (state_21276[(2)]);
var inst_21215 = inst_21268;
var state_21276__$1 = (function (){var statearr_21315 = state_21276;
(statearr_21315[(7)] = inst_21215);

return statearr_21315;
})();
var statearr_21316_21357 = state_21276__$1;
(statearr_21316_21357[(2)] = null);

(statearr_21316_21357[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (10))){
var inst_21192 = (state_21276[(14)]);
var state_21276__$1 = state_21276;
var statearr_21317_21358 = state_21276__$1;
(statearr_21317_21358[(2)] = inst_21192);

(statearr_21317_21358[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (18))){
var state_21276__$1 = state_21276;
var statearr_21318_21359 = state_21276__$1;
(statearr_21318_21359[(2)] = false);

(statearr_21318_21359[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21277 === (8))){
var inst_21204 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
var statearr_21319_21360 = state_21276__$1;
(statearr_21319_21360[(2)] = inst_21204);

(statearr_21319_21360[(1)] = (5));


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
});})(c__15682__auto__))
;
return ((function (switch__15558__auto__,c__15682__auto__){
return (function() {
var devcards$core$state_machine__15559__auto__ = null;
var devcards$core$state_machine__15559__auto____0 = (function (){
var statearr_21323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21323[(0)] = devcards$core$state_machine__15559__auto__);

(statearr_21323[(1)] = (1));

return statearr_21323;
});
var devcards$core$state_machine__15559__auto____1 = (function (state_21276){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_21276);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e21324){if((e21324 instanceof Object)){
var ex__15562__auto__ = e21324;
var statearr_21325_21361 = state_21276;
(statearr_21325_21361[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21276);

return cljs.core.cst$kw$recur;
} else {
throw e21324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__21362 = state_21276;
state_21276 = G__21362;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
devcards$core$state_machine__15559__auto__ = function(state_21276){
switch(arguments.length){
case 0:
return devcards$core$state_machine__15559__auto____0.call(this);
case 1:
return devcards$core$state_machine__15559__auto____1.call(this,state_21276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__15559__auto____0;
devcards$core$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__15559__auto____1;
return devcards$core$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto__))
})();
var state__15684__auto__ = (function (){var statearr_21326 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_21326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto__);

return statearr_21326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto__))
);

return c__15682__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__19570__auto___21367 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__19570__auto___21367);
}

var seq__21363_21368 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21364_21369 = null;
var count__21365_21370 = (0);
var i__21366_21371 = (0);
while(true){
if((i__21366_21371 < count__21365_21370)){
var property__19571__auto___21372 = chunk__21364_21369.cljs$core$IIndexed$_nth$arity$2(null,i__21366_21371);
if(cljs.core.truth_((base__19570__auto___21367[property__19571__auto___21372]))){
(devcards.core.TestDevcard.prototype[property__19571__auto___21372] = (base__19570__auto___21367[property__19571__auto___21372]));
} else {
}

var G__21373 = seq__21363_21368;
var G__21374 = chunk__21364_21369;
var G__21375 = count__21365_21370;
var G__21376 = (i__21366_21371 + (1));
seq__21363_21368 = G__21373;
chunk__21364_21369 = G__21374;
count__21365_21370 = G__21375;
i__21366_21371 = G__21376;
continue;
} else {
var temp__4657__auto___21377 = cljs.core.seq(seq__21363_21368);
if(temp__4657__auto___21377){
var seq__21363_21378__$1 = temp__4657__auto___21377;
if(cljs.core.chunked_seq_QMARK_(seq__21363_21378__$1)){
var c__7217__auto___21379 = cljs.core.chunk_first(seq__21363_21378__$1);
var G__21380 = cljs.core.chunk_rest(seq__21363_21378__$1);
var G__21381 = c__7217__auto___21379;
var G__21382 = cljs.core.count(c__7217__auto___21379);
var G__21383 = (0);
seq__21363_21368 = G__21380;
chunk__21364_21369 = G__21381;
count__21365_21370 = G__21382;
i__21366_21371 = G__21383;
continue;
} else {
var property__19571__auto___21384 = cljs.core.first(seq__21363_21378__$1);
if(cljs.core.truth_((base__19570__auto___21367[property__19571__auto___21384]))){
(devcards.core.TestDevcard.prototype[property__19571__auto___21384] = (base__19570__auto___21367[property__19571__auto___21384]));
} else {
}

var G__21385 = cljs.core.next(seq__21363_21378__$1);
var G__21386 = null;
var G__21387 = (0);
var G__21388 = (0);
seq__21363_21368 = G__21385;
chunk__21364_21369 = G__21386;
count__21365_21370 = G__21387;
i__21366_21371 = G__21388;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__7488__auto__ = [];
var len__7481__auto___21395 = arguments.length;
var i__7482__auto___21396 = (0);
while(true){
if((i__7482__auto___21396 < len__7481__auto___21395)){
args__7488__auto__.push((arguments[i__7482__auto___21396]));

var G__21397 = (i__7482__auto___21396 + (1));
i__7482__auto___21396 = G__21397;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((0) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__7489__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core21390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core21390 = (function (test_thunks,meta21391){
this.test_thunks = test_thunks;
this.meta21391 = meta21391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core21390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21392,meta21391__$1){
var self__ = this;
var _21392__$1 = this;
return (new devcards.core.t_devcards$core21390(self__.test_thunks,meta21391__$1));
});

devcards.core.t_devcards$core21390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21392){
var self__ = this;
var _21392__$1 = this;
return self__.meta21391;
});

devcards.core.t_devcards$core21390.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core21390.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__21393 = devcards.core.TestDevcard;
var G__21394 = ({"test_thunks": self__.test_thunks, "path": path});
return React.createElement(G__21393,G__21394);
});

devcards.core.t_devcards$core21390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta21391], null);
});

devcards.core.t_devcards$core21390.cljs$lang$type = true;

devcards.core.t_devcards$core21390.cljs$lang$ctorStr = "devcards.core/t_devcards$core21390";

devcards.core.t_devcards$core21390.cljs$lang$ctorPrWriter = (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"devcards.core/t_devcards$core21390");
});

devcards.core.__GT_t_devcards$core21390 = (function devcards$core$__GT_t_devcards$core21390(test_thunks__$1,meta21391){
return (new devcards.core.t_devcards$core21390(test_thunks__$1,meta21391));
});

}

return (new devcards.core.t_devcards$core21390(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq21389){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21389));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__21400 = (function (){var attrs21401 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21401))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs21401], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs21401))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21401)], null)));
})();
return React.renderToString(G__21400);
})()),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
var G__21405 = (function (){var attrs21407 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21407))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs21407], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs21407))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21407)], null)));
})();
var G__21406 = devcards.system.devcards_app_node();
return React.render(G__21405,G__21406);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__15682__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto__){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto__){
return (function (state_21437){
var state_val_21438 = (state_21437[(1)]);
if((state_val_21438 === (1))){
var inst_21428 = devcards.core.load_data_from_channel_BANG_();
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21437__$1,(2),inst_21428);
} else {
if((state_val_21438 === (2))){
var inst_21430 = (state_21437[(2)]);
var inst_21431 = cljs.core.async.timeout((100));
var state_21437__$1 = (function (){var statearr_21439 = state_21437;
(statearr_21439[(7)] = inst_21430);

return statearr_21439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21437__$1,(3),inst_21431);
} else {
if((state_val_21438 === (3))){
var inst_21433 = (state_21437[(2)]);
var inst_21434 = (function (){return ((function (inst_21433,state_val_21438,c__15682__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_21433,state_val_21438,c__15682__auto__))
})();
var inst_21435 = setTimeout(inst_21434,(0));
var state_21437__$1 = (function (){var statearr_21440 = state_21437;
(statearr_21440[(8)] = inst_21433);

return statearr_21440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21437__$1,inst_21435);
} else {
return null;
}
}
}
});})(c__15682__auto__))
;
return ((function (switch__15558__auto__,c__15682__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__15559__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__15559__auto____0 = (function (){
var statearr_21444 = [null,null,null,null,null,null,null,null,null];
(statearr_21444[(0)] = devcards$core$mount_namespace_$_state_machine__15559__auto__);

(statearr_21444[(1)] = (1));

return statearr_21444;
});
var devcards$core$mount_namespace_$_state_machine__15559__auto____1 = (function (state_21437){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_21437);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e21445){if((e21445 instanceof Object)){
var ex__15562__auto__ = e21445;
var statearr_21446_21448 = state_21437;
(statearr_21446_21448[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21437);

return cljs.core.cst$kw$recur;
} else {
throw e21445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__21449 = state_21437;
state_21437 = G__21449;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__15559__auto__ = function(state_21437){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__15559__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__15559__auto____1.call(this,state_21437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__15559__auto____0;
devcards$core$mount_namespace_$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__15559__auto____1;
return devcards$core$mount_namespace_$_state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto__))
})();
var state__15684__auto__ = (function (){var statearr_21447 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_21447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto__);

return statearr_21447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto__))
);

return c__15682__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
