// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.system');
goog.require('devcards.util.markdown');
goog.require('devcards.util.utils');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__9426__auto__ = (function (){var and__9414__auto__ = typeof Symbol !== 'undefined';
if(and__9414__auto__){
var and__9414__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__9414__auto____$1){
var and__9414__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__9414__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__9414__auto____$2;
}
} else {
return and__9414__auto____$1;
}
} else {
return and__9414__auto__;
}
})();
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
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
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__24922_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__24922_SHARP_.detail], null));
}));

return true;
})()
)
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
var args24923 = [];
var len__10647__auto___24926 = arguments.length;
var i__10648__auto___24927 = (0);
while(true){
if((i__10648__auto___24927 < len__10647__auto___24926)){
args24923.push((arguments[i__10648__auto___24927]));

var G__24928 = (i__10648__auto___24927 + (1));
i__10648__auto___24927 = G__24928;
continue;
} else {
}
break;
}

var G__24925 = args24923.length;
switch (G__24925) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24923.length)].join('')));

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
var and__9414__auto__ = cljs.core.map_QMARK_(c);
if(and__9414__auto__){
var map__24936 = c;
var map__24936__$1 = ((((!((map__24936 == null)))?((((map__24936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24936):map__24936);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24936__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24936__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__9414__auto__;
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

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__6738__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__6738__auto__)){
var node = temp__6738__auto__;
var temp__6738__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__6738__auto____$1)){
var hljs = temp__6738__auto____$1;
var temp__6738__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__6738__auto____$2)){
var highlight_block = temp__6738__auto____$2;
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
var base__23924__auto___24956 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__24938 = "pre";
var G__24939 = ({"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__24941 = this$;
var G__24942 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__24941,G__24942) : devcards.core.get_props.call(null,G__24941,G__24942));
})())});
var G__24940 = (function (){var G__24943 = "code";
var G__24944 = ({"className": (function (){var or__9426__auto__ = (function (){var G__24948 = this$;
var G__24949 = cljs.core.cst$kw$lang;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__24948,G__24949) : devcards.core.get_props.call(null,G__24948,G__24949));
})();
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__24945 = sablono.interpreter.interpret((function (){var G__24950 = this$;
var G__24951 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__24950,G__24951) : devcards.core.get_props.call(null,G__24950,G__24951));
})());
return React.createElement(G__24943,G__24944,G__24945);
})();
return React.createElement(G__24938,G__24939,G__24940);
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__23924__auto___24956);
}

var seq__24952_24957 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__24953_24958 = null;
var count__24954_24959 = (0);
var i__24955_24960 = (0);
while(true){
if((i__24955_24960 < count__24954_24959)){
var property__23925__auto___24961 = chunk__24953_24958.cljs$core$IIndexed$_nth$arity$2(null,i__24955_24960);
if(cljs.core.truth_((base__23924__auto___24956[property__23925__auto___24961]))){
(devcards.core.CodeHighlight.prototype[property__23925__auto___24961] = (base__23924__auto___24956[property__23925__auto___24961]));
} else {
}

var G__24962 = seq__24952_24957;
var G__24963 = chunk__24953_24958;
var G__24964 = count__24954_24959;
var G__24965 = (i__24955_24960 + (1));
seq__24952_24957 = G__24962;
chunk__24953_24958 = G__24963;
count__24954_24959 = G__24964;
i__24955_24960 = G__24965;
continue;
} else {
var temp__6738__auto___24966 = cljs.core.seq(seq__24952_24957);
if(temp__6738__auto___24966){
var seq__24952_24967__$1 = temp__6738__auto___24966;
if(cljs.core.chunked_seq_QMARK_(seq__24952_24967__$1)){
var c__10337__auto___24968 = cljs.core.chunk_first(seq__24952_24967__$1);
var G__24969 = cljs.core.chunk_rest(seq__24952_24967__$1);
var G__24970 = c__10337__auto___24968;
var G__24971 = cljs.core.count(c__10337__auto___24968);
var G__24972 = (0);
seq__24952_24957 = G__24969;
chunk__24953_24958 = G__24970;
count__24954_24959 = G__24971;
i__24955_24960 = G__24972;
continue;
} else {
var property__23925__auto___24973 = cljs.core.first(seq__24952_24967__$1);
if(cljs.core.truth_((base__23924__auto___24956[property__23925__auto___24973]))){
(devcards.core.CodeHighlight.prototype[property__23925__auto___24973] = (base__23924__auto___24956[property__23925__auto___24973]));
} else {
}

var G__24974 = cljs.core.next(seq__24952_24967__$1);
var G__24975 = null;
var G__24976 = (0);
var G__24977 = (0);
seq__24952_24957 = G__24974;
chunk__24953_24958 = G__24975;
count__24954_24959 = G__24976;
i__24955_24960 = G__24977;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__24980 = devcards.core.CodeHighlight;
var G__24981 = ({"code": code_str, "lang": lang});
return React.createElement(G__24980,G__24981);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__10457__auto__ = (function (){var G__24982 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24982) : cljs.core.atom.call(null,G__24982));
})();
var prefer_table__10458__auto__ = (function (){var G__24983 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24983) : cljs.core.atom.call(null,G__24983));
})();
var method_cache__10459__auto__ = (function (){var G__24984 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24984) : cljs.core.atom.call(null,G__24984));
})();
var cached_hierarchy__10460__auto__ = (function (){var G__24985 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24985) : cljs.core.atom.call(null,G__24985));
})();
var hierarchy__10461__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__10461__auto__,method_table__10457__auto__,prefer_table__10458__auto__,method_cache__10459__auto__,cached_hierarchy__10460__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__24986){
var map__24987 = p__24986;
var map__24987__$1 = ((((!((map__24987 == null)))?((((map__24987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24987):map__24987);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__24989){
var map__24990 = p__24989;
var map__24990__$1 = ((((!((map__24990 == null)))?((((map__24990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24990):map__24990);
var block = map__24990__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24990__$1,cljs.core.cst$kw$content);
var G__24992 = devcards.core.CodeHighlight;
var G__24993 = ({"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)});
return React.createElement(G__24992,G__24993);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__10654__auto__ = [];
var len__10647__auto___25004 = arguments.length;
var i__10648__auto___25005 = (0);
while(true){
if((i__10648__auto___25005 < len__10647__auto___25004)){
args__10654__auto__.push((arguments[i__10648__auto___25005]));

var G__25006 = (i__10648__auto___25005 + (1));
i__10648__auto___25005 = G__25006;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code(x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var G__24995 = "div";
var G__24996 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__24997 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__24995,G__24996,blocks,strs__$1){
return (function (i,data){
var G__24998 = "div";
var G__24999 = ({"key": i});
var G__25000 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__24998,G__24999,G__25000);
});})(G__24995,G__24996,blocks,strs__$1))
,blocks));
return React.createElement(G__24995,G__24996,G__24997);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__25001 = "div";
var G__25002 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__25003 = sablono.interpreter.interpret(message);
return React.createElement(G__25001,G__25002,G__25003);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq24994){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24994));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__25011 = "div";
var G__25012 = ({"key": "devcards_naked-card", "className": (function (){var G__25014 = devcards.system.devcards_rendered_card_class;
var G__25014__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25014),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" com-rigsomelight-devcards-devcard-padding")].join(''):G__25014);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25014__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__25014__$1;
}
})()});
var G__25013 = sablono.interpreter.interpret(children);
return React.createElement(G__25011,G__25012,G__25013);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args25015 = [];
var len__10647__auto___25037 = arguments.length;
var i__10648__auto___25038 = (0);
while(true){
if((i__10648__auto___25038 < len__10647__auto___25037)){
args25015.push((arguments[i__10648__auto___25038]));

var G__25039 = (i__10648__auto___25038 + (1));
i__10648__auto___25038 = G__25039;
continue;
} else {
}
break;
}

var G__25017 = args25015.length;
switch (G__25017) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25015.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__25018 = card;
var map__25018__$1 = ((((!((map__25018 == null)))?((((map__25018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25018):map__25018);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25018__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25018__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__25020 = "div";
var G__25021 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))});
var G__25022 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__25020,G__25021,G__25022);
} else {
var G__25023 = "div";
var G__25024 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__25025 = (function (){var G__25027 = "div";
var G__25028 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__25029 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__25030 = "a";
var G__25031 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__25030,G__25027,G__25028,G__25023,G__25024,map__25018,map__25018__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__25030,G__25027,G__25028,G__25023,G__25024,map__25018,map__25018__$1,path,options))
)});
var G__25032 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__25033 = " ";
return React.createElement(G__25030,G__25031,G__25032,G__25033);
})()):sablono.interpreter.interpret((function (){var attrs25034 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs25034))?sablono.interpreter.attributes(attrs25034):null),((cljs.core.map_QMARK_(attrs25034))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25034)], null)));
})()));
return React.createElement(G__25027,G__25028,G__25029);
})();
var G__25026 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__25023,G__25024,G__25025,G__25026);
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
var x__10144__auto__ = (((this$ == null))?null:this$);
var m__10145__auto__ = (devcards.core._devcard_options[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__10145__auto__.call(null,this$,devcard_opts));
} else {
var m__10145__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__10145__auto____$1.call(null,this$,devcard_opts));
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
var x__10144__auto__ = (((this$ == null))?null:this$);
var m__10145__auto__ = (devcards.core._devcard[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__10145__auto__.call(null,this$,devcard_opts));
} else {
var m__10145__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__10145__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__6738__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__6738__auto__)){
var comp = temp__6738__auto__;
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
var base__23924__auto___25046 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs25041 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25041))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs25041], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs25041))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25041)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__23924__auto___25046);
}

var seq__25042_25047 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__25043_25048 = null;
var count__25044_25049 = (0);
var i__25045_25050 = (0);
while(true){
if((i__25045_25050 < count__25044_25049)){
var property__23925__auto___25051 = chunk__25043_25048.cljs$core$IIndexed$_nth$arity$2(null,i__25045_25050);
if(cljs.core.truth_((base__23924__auto___25046[property__23925__auto___25051]))){
(devcards.core.DontUpdate.prototype[property__23925__auto___25051] = (base__23924__auto___25046[property__23925__auto___25051]));
} else {
}

var G__25052 = seq__25042_25047;
var G__25053 = chunk__25043_25048;
var G__25054 = count__25044_25049;
var G__25055 = (i__25045_25050 + (1));
seq__25042_25047 = G__25052;
chunk__25043_25048 = G__25053;
count__25044_25049 = G__25054;
i__25045_25050 = G__25055;
continue;
} else {
var temp__6738__auto___25056 = cljs.core.seq(seq__25042_25047);
if(temp__6738__auto___25056){
var seq__25042_25057__$1 = temp__6738__auto___25056;
if(cljs.core.chunked_seq_QMARK_(seq__25042_25057__$1)){
var c__10337__auto___25058 = cljs.core.chunk_first(seq__25042_25057__$1);
var G__25059 = cljs.core.chunk_rest(seq__25042_25057__$1);
var G__25060 = c__10337__auto___25058;
var G__25061 = cljs.core.count(c__10337__auto___25058);
var G__25062 = (0);
seq__25042_25047 = G__25059;
chunk__25043_25048 = G__25060;
count__25044_25049 = G__25061;
i__25045_25050 = G__25062;
continue;
} else {
var property__23925__auto___25063 = cljs.core.first(seq__25042_25057__$1);
if(cljs.core.truth_((base__23924__auto___25046[property__23925__auto___25063]))){
(devcards.core.DontUpdate.prototype[property__23925__auto___25063] = (base__23924__auto___25046[property__23925__auto___25063]));
} else {
}

var G__25064 = cljs.core.next(seq__25042_25057__$1);
var G__25065 = null;
var G__25066 = (0);
var G__25067 = (0);
seq__25042_25047 = G__25064;
chunk__25043_25048 = G__25065;
count__25044_25049 = G__25066;
i__25045_25050 = G__25067;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__25070 = devcards.core.DontUpdate;
var G__25071 = ({"change_count": change_count, "children_thunk": children_thunk});
return React.createElement(G__25070,G__25071);
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__9426__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
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
var document = (function (){var temp__6738__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__6738__auto__)){
var docu = temp__6738__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom))):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var main__$1 = (function (){var G__25080 = "div";
var G__25081 = ({"key": "devcards-main-section"});
var G__25082 = sablono.interpreter.interpret(main);
return React.createElement(G__25080,G__25081,G__25082);
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var x__10360__auto__ = document;
return cljs.core._conj((function (){var x__10360__auto____$1 = main__$1;
return cljs.core._conj((function (){var x__10360__auto____$2 = hist_ctl;
return cljs.core._conj((function (){var x__10360__auto____$3 = edn;
return cljs.core._conj(cljs.core.List.EMPTY,x__10360__auto____$3);
})(),x__10360__auto____$2);
})(),x__10360__auto____$1);
})(),x__10360__auto__);
})());
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__25083 = "div";
var G__25084 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__25085 = sablono.interpreter.interpret(children);
return React.createElement(G__25083,G__25084,G__25085);
}
});
var base__23924__auto___25090 = ({"getInitialState": (function (){
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
return this$.setState((function (){var or__9426__auto__ = (function (){var and__9414__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__9414__auto__)){
return this$.state;
} else {
return and__9414__auto__;
}
})();
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
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
if(cljs.core.truth_((function (){var and__9414__auto__ = data_atom;
if(cljs.core.truth_(and__9414__auto__)){
return id;
} else {
return and__9414__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__6738__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__6738__auto__)){
var data_atom = temp__6738__auto__;
var temp__6738__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__6738__auto____$1)){
var id = temp__6738__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__6738__auto____$1,data_atom,temp__6738__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count) + (1))}));
});})(id,temp__6738__auto____$1,data_atom,temp__6738__auto__,this$))
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
devcards.core.DevcardBase = React.createClass(base__23924__auto___25090);
}

var seq__25086_25091 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__25087_25092 = null;
var count__25088_25093 = (0);
var i__25089_25094 = (0);
while(true){
if((i__25089_25094 < count__25088_25093)){
var property__23925__auto___25095 = chunk__25087_25092.cljs$core$IIndexed$_nth$arity$2(null,i__25089_25094);
if(cljs.core.truth_((base__23924__auto___25090[property__23925__auto___25095]))){
(devcards.core.DevcardBase.prototype[property__23925__auto___25095] = (base__23924__auto___25090[property__23925__auto___25095]));
} else {
}

var G__25096 = seq__25086_25091;
var G__25097 = chunk__25087_25092;
var G__25098 = count__25088_25093;
var G__25099 = (i__25089_25094 + (1));
seq__25086_25091 = G__25096;
chunk__25087_25092 = G__25097;
count__25088_25093 = G__25098;
i__25089_25094 = G__25099;
continue;
} else {
var temp__6738__auto___25100 = cljs.core.seq(seq__25086_25091);
if(temp__6738__auto___25100){
var seq__25086_25101__$1 = temp__6738__auto___25100;
if(cljs.core.chunked_seq_QMARK_(seq__25086_25101__$1)){
var c__10337__auto___25102 = cljs.core.chunk_first(seq__25086_25101__$1);
var G__25103 = cljs.core.chunk_rest(seq__25086_25101__$1);
var G__25104 = c__10337__auto___25102;
var G__25105 = cljs.core.count(c__10337__auto___25102);
var G__25106 = (0);
seq__25086_25091 = G__25103;
chunk__25087_25092 = G__25104;
count__25088_25093 = G__25105;
i__25089_25094 = G__25106;
continue;
} else {
var property__23925__auto___25107 = cljs.core.first(seq__25086_25101__$1);
if(cljs.core.truth_((base__23924__auto___25090[property__23925__auto___25107]))){
(devcards.core.DevcardBase.prototype[property__23925__auto___25107] = (base__23924__auto___25090[property__23925__auto___25107]));
} else {
}

var G__25108 = cljs.core.next(seq__25086_25101__$1);
var G__25109 = null;
var G__25110 = (0);
var G__25111 = (0);
seq__25086_25091 = G__25108;
chunk__25087_25092 = G__25109;
count__25088_25093 = G__25110;
i__25089_25094 = G__25111;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__6738__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__6738__auto__)){
var node_fn = temp__6738__auto__;
var temp__6738__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__6738__auto____$1)){
var node = temp__6738__auto____$1;
var G__25112 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__25113 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__25112,G__25113) : node_fn.call(null,G__25112,G__25113));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__23924__auto___25120 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__9414__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__9414__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__9414__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__6738__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__6738__auto__)){
var node = temp__6738__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__25114 = ({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)});
var G__25115 = "Card has not mounted DOM node.";
return React.DOM.div(G__25114,G__25115);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__23924__auto___25120);
}

var seq__25116_25121 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__25117_25122 = null;
var count__25118_25123 = (0);
var i__25119_25124 = (0);
while(true){
if((i__25119_25124 < count__25118_25123)){
var property__23925__auto___25125 = chunk__25117_25122.cljs$core$IIndexed$_nth$arity$2(null,i__25119_25124);
if(cljs.core.truth_((base__23924__auto___25120[property__23925__auto___25125]))){
(devcards.core.DomComponent.prototype[property__23925__auto___25125] = (base__23924__auto___25120[property__23925__auto___25125]));
} else {
}

var G__25126 = seq__25116_25121;
var G__25127 = chunk__25117_25122;
var G__25128 = count__25118_25123;
var G__25129 = (i__25119_25124 + (1));
seq__25116_25121 = G__25126;
chunk__25117_25122 = G__25127;
count__25118_25123 = G__25128;
i__25119_25124 = G__25129;
continue;
} else {
var temp__6738__auto___25130 = cljs.core.seq(seq__25116_25121);
if(temp__6738__auto___25130){
var seq__25116_25131__$1 = temp__6738__auto___25130;
if(cljs.core.chunked_seq_QMARK_(seq__25116_25131__$1)){
var c__10337__auto___25132 = cljs.core.chunk_first(seq__25116_25131__$1);
var G__25133 = cljs.core.chunk_rest(seq__25116_25131__$1);
var G__25134 = c__10337__auto___25132;
var G__25135 = cljs.core.count(c__10337__auto___25132);
var G__25136 = (0);
seq__25116_25121 = G__25133;
chunk__25117_25122 = G__25134;
count__25118_25123 = G__25135;
i__25119_25124 = G__25136;
continue;
} else {
var property__23925__auto___25137 = cljs.core.first(seq__25116_25131__$1);
if(cljs.core.truth_((base__23924__auto___25120[property__23925__auto___25137]))){
(devcards.core.DomComponent.prototype[property__23925__auto___25137] = (base__23924__auto___25120[property__23925__auto___25137]));
} else {
}

var G__25138 = cljs.core.next(seq__25116_25131__$1);
var G__25139 = null;
var G__25140 = (0);
var G__25141 = (0);
seq__25116_25121 = G__25138;
chunk__25117_25122 = G__25139;
count__25118_25123 = G__25140;
i__25119_25124 = G__25141;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__9426__auto__ = x === true;
if(or__9426__auto__){
return or__9426__auto__;
} else {
var or__9426__auto____$1 = x === false;
if(or__9426__auto____$1){
return or__9426__auto____$1;
} else {
var or__9426__auto____$2 = (x == null);
if(or__9426__auto____$2){
return or__9426__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__9426__auto__ = typeof x === 'string';
if(or__9426__auto__){
return or__9426__auto__;
} else {
var or__9426__auto____$1 = (x == null);
if(or__9426__auto____$1){
return or__9426__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__9426__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__25142_SHARP_){
return !(p1__25142_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__25151 = opts;
var map__25151__$1 = ((((!((map__25151 == null)))?((((map__25151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25151):map__25151);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__9426__auto__ = cljs.core.map_QMARK_(options);
if(or__9426__auto__){
return or__9426__auto__;
} else {
var or__9426__auto____$1 = (options == null);
if(or__9426__auto____$1){
return or__9426__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__9426__auto__ = (initial_data == null);
if(or__9426__auto__){
return or__9426__auto__;
} else {
var or__9426__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__9426__auto____$1){
return or__9426__auto____$1;
} else {
var or__9426__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__9426__auto____$2){
return or__9426__auto____$2;
} else {
var or__9426__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$)))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__9426__auto____$3){
return or__9426__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__25151,map__25151__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__25143_SHARP_){
return devcards.core.booler_QMARK_(p1__25143_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__25151,map__25151__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__25174 = "div";
var G__25175 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__25176 = sablono.interpreter.interpret((function (){var G__25179 = "code";
var G__25180 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__25181 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__25179,G__25180,G__25181);
})());
var G__25177 = (function (){var G__25182 = "span";
var G__25183 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__25184 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__25182,G__25183,G__25184);
})();
var G__25178 = (function (){var G__25186 = "span";
var G__25187 = ({"style": ({"flex": "1 100px"})});
var G__25188 = " Received: ";
var G__25189 = (function (){var attrs25185 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs25185))?sablono.interpreter.attributes(attrs25185):null),((cljs.core.map_QMARK_(attrs25185))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25185)], null)));
})();
return React.createElement(G__25186,G__25187,G__25188,G__25189);
})();
return React.createElement(G__25174,G__25175,G__25176,G__25177,G__25178);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__25202 = "div";
var G__25203 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__25204 = (function (){var attrs25201 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25201))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs25201], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs25201))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25201)], null)));
})();
var G__25205 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__25207 = "div";
var G__25208 = null;
var G__25209 = (function (){var attrs25206 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25206))?sablono.interpreter.attributes(attrs25206):null),((cljs.core.map_QMARK_(attrs25206))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25206)], null)));
})();
var G__25210 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs25211 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25211))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs25211], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs25211))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25211)], null)));
})():null));
return React.createElement(G__25207,G__25208,G__25209,G__25210);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__25202,G__25203,G__25204,G__25205);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__25212_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__25212_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__25215 = devcards.core.DevcardBase;
var G__25216 = ({"card": devcards.core.add_environment_defaults(card_options)});
return React.createElement(G__25215,G__25216);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10101__auto__,k__10102__auto__){
var self__ = this;
var this__10101__auto____$1 = this;
return this__10101__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10102__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10103__auto__,k25218,else__10104__auto__){
var self__ = this;
var this__10103__auto____$1 = this;
var G__25220 = k25218;
var G__25220__$1 = (((G__25220 instanceof cljs.core.Keyword))?G__25220.fqn:null);
switch (G__25220__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25218,else__10104__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10115__auto__,writer__10116__auto__,opts__10117__auto__){
var self__ = this;
var this__10115__auto____$1 = this;
var pr_pair__10118__auto__ = ((function (this__10115__auto____$1){
return (function (keyval__10119__auto__){
return cljs.core.pr_sequential_writer(writer__10116__auto__,cljs.core.pr_writer,""," ","",opts__10117__auto__,keyval__10119__auto__);
});})(this__10115__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10116__auto__,pr_pair__10118__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__10117__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25217){
var self__ = this;
var G__25217__$1 = this;
return (new cljs.core.RecordIter((0),G__25217__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10099__auto__){
var self__ = this;
var this__10099__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10095__auto__){
var self__ = this;
var this__10095__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10105__auto__){
var self__ = this;
var this__10105__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10096__auto__){
var self__ = this;
var this__10096__auto____$1 = this;
var h__9868__auto__ = self__.__hash;
if(!((h__9868__auto__ == null))){
return h__9868__auto__;
} else {
var h__9868__auto____$1 = cljs.core.hash_imap(this__10096__auto____$1);
self__.__hash = h__9868__auto____$1;

return h__9868__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10097__auto__,other__10098__auto__){
var self__ = this;
var this__10097__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9414__auto__ = other__10098__auto__;
if(cljs.core.truth_(and__9414__auto__)){
return ((this__10097__auto____$1.constructor === other__10098__auto__.constructor)) && (cljs.core.equiv_map(this__10097__auto____$1,other__10098__auto__));
} else {
return and__9414__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10110__auto__,k__10111__auto__){
var self__ = this;
var this__10110__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__10111__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10110__auto____$1),self__.__meta),k__10111__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10111__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10108__auto__,k__10109__auto__,G__25217){
var self__ = this;
var this__10108__auto____$1 = this;
var pred__25221 = cljs.core.keyword_identical_QMARK_;
var expr__25222 = k__10109__auto__;
if(cljs.core.truth_((function (){var G__25224 = cljs.core.cst$kw$obj;
var G__25225 = expr__25222;
return (pred__25221.cljs$core$IFn$_invoke$arity$2 ? pred__25221.cljs$core$IFn$_invoke$arity$2(G__25224,G__25225) : pred__25221.call(null,G__25224,G__25225));
})())){
return (new devcards.core.IdentiyOptions(G__25217,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10109__auto__,G__25217),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10113__auto__){
var self__ = this;
var this__10113__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10100__auto__,G__25217){
var self__ = this;
var this__10100__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__25217,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10106__auto__,entry__10107__auto__){
var self__ = this;
var this__10106__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10107__auto__)){
return this__10106__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10107__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10107__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10106__auto____$1,entry__10107__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__10137__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__10137__auto__,writer__10138__auto__){
return cljs.core._write(writer__10138__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__25219){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__25219),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25219,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__25227){
var map__25230 = p__25227;
var map__25230__$1 = ((((!((map__25230 == null)))?((((map__25230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25230):map__25230);
var devcard_opts = map__25230__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25230__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__25230,map__25230__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__25230,map__25230__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10101__auto__,k__10102__auto__){
var self__ = this;
var this__10101__auto____$1 = this;
return this__10101__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10102__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10103__auto__,k25233,else__10104__auto__){
var self__ = this;
var this__10103__auto____$1 = this;
var G__25235 = k25233;
var G__25235__$1 = (((G__25235 instanceof cljs.core.Keyword))?G__25235.fqn:null);
switch (G__25235__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25233,else__10104__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10115__auto__,writer__10116__auto__,opts__10117__auto__){
var self__ = this;
var this__10115__auto____$1 = this;
var pr_pair__10118__auto__ = ((function (this__10115__auto____$1){
return (function (keyval__10119__auto__){
return cljs.core.pr_sequential_writer(writer__10116__auto__,cljs.core.pr_writer,""," ","",opts__10117__auto__,keyval__10119__auto__);
});})(this__10115__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10116__auto__,pr_pair__10118__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__10117__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25232){
var self__ = this;
var G__25232__$1 = this;
return (new cljs.core.RecordIter((0),G__25232__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10099__auto__){
var self__ = this;
var this__10099__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10095__auto__){
var self__ = this;
var this__10095__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10105__auto__){
var self__ = this;
var this__10105__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10096__auto__){
var self__ = this;
var this__10096__auto____$1 = this;
var h__9868__auto__ = self__.__hash;
if(!((h__9868__auto__ == null))){
return h__9868__auto__;
} else {
var h__9868__auto____$1 = cljs.core.hash_imap(this__10096__auto____$1);
self__.__hash = h__9868__auto____$1;

return h__9868__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10097__auto__,other__10098__auto__){
var self__ = this;
var this__10097__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9414__auto__ = other__10098__auto__;
if(cljs.core.truth_(and__9414__auto__)){
return ((this__10097__auto____$1.constructor === other__10098__auto__.constructor)) && (cljs.core.equiv_map(this__10097__auto____$1,other__10098__auto__));
} else {
return and__9414__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10110__auto__,k__10111__auto__){
var self__ = this;
var this__10110__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__10111__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10110__auto____$1),self__.__meta),k__10111__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10111__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10108__auto__,k__10109__auto__,G__25232){
var self__ = this;
var this__10108__auto____$1 = this;
var pred__25236 = cljs.core.keyword_identical_QMARK_;
var expr__25237 = k__10109__auto__;
if(cljs.core.truth_((function (){var G__25239 = cljs.core.cst$kw$obj;
var G__25240 = expr__25237;
return (pred__25236.cljs$core$IFn$_invoke$arity$2 ? pred__25236.cljs$core$IFn$_invoke$arity$2(G__25239,G__25240) : pred__25236.call(null,G__25239,G__25240));
})())){
return (new devcards.core.AtomLikeOptions(G__25232,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10109__auto__,G__25232),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10113__auto__){
var self__ = this;
var this__10113__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10100__auto__,G__25232){
var self__ = this;
var this__10100__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__25232,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10106__auto__,entry__10107__auto__){
var self__ = this;
var this__10106__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10107__auto__)){
return this__10106__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10107__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10107__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10106__auto____$1,entry__10107__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__10137__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__10137__auto__,writer__10138__auto__){
return cljs.core._write(writer__10138__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__25234){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__25234),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25234,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10101__auto__,k__10102__auto__){
var self__ = this;
var this__10101__auto____$1 = this;
return this__10101__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10102__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10103__auto__,k25245,else__10104__auto__){
var self__ = this;
var this__10103__auto____$1 = this;
var G__25247 = k25245;
var G__25247__$1 = (((G__25247 instanceof cljs.core.Keyword))?G__25247.fqn:null);
switch (G__25247__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25245,else__10104__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10115__auto__,writer__10116__auto__,opts__10117__auto__){
var self__ = this;
var this__10115__auto____$1 = this;
var pr_pair__10118__auto__ = ((function (this__10115__auto____$1){
return (function (keyval__10119__auto__){
return cljs.core.pr_sequential_writer(writer__10116__auto__,cljs.core.pr_writer,""," ","",opts__10117__auto__,keyval__10119__auto__);
});})(this__10115__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10116__auto__,pr_pair__10118__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__10117__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25244){
var self__ = this;
var G__25244__$1 = this;
return (new cljs.core.RecordIter((0),G__25244__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10099__auto__){
var self__ = this;
var this__10099__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10095__auto__){
var self__ = this;
var this__10095__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10105__auto__){
var self__ = this;
var this__10105__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10096__auto__){
var self__ = this;
var this__10096__auto____$1 = this;
var h__9868__auto__ = self__.__hash;
if(!((h__9868__auto__ == null))){
return h__9868__auto__;
} else {
var h__9868__auto____$1 = cljs.core.hash_imap(this__10096__auto____$1);
self__.__hash = h__9868__auto____$1;

return h__9868__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10097__auto__,other__10098__auto__){
var self__ = this;
var this__10097__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9414__auto__ = other__10098__auto__;
if(cljs.core.truth_(and__9414__auto__)){
return ((this__10097__auto____$1.constructor === other__10098__auto__.constructor)) && (cljs.core.equiv_map(this__10097__auto____$1,other__10098__auto__));
} else {
return and__9414__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10110__auto__,k__10111__auto__){
var self__ = this;
var this__10110__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__10111__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10110__auto____$1),self__.__meta),k__10111__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10111__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10108__auto__,k__10109__auto__,G__25244){
var self__ = this;
var this__10108__auto____$1 = this;
var pred__25248 = cljs.core.keyword_identical_QMARK_;
var expr__25249 = k__10109__auto__;
if(cljs.core.truth_((function (){var G__25251 = cljs.core.cst$kw$obj;
var G__25252 = expr__25249;
return (pred__25248.cljs$core$IFn$_invoke$arity$2 ? pred__25248.cljs$core$IFn$_invoke$arity$2(G__25251,G__25252) : pred__25248.call(null,G__25251,G__25252));
})())){
return (new devcards.core.EdnLikeOptions(G__25244,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10109__auto__,G__25244),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10113__auto__){
var self__ = this;
var this__10113__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10100__auto__,G__25244){
var self__ = this;
var this__10100__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__25244,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10106__auto__,entry__10107__auto__){
var self__ = this;
var this__10106__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10107__auto__)){
return this__10106__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10107__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10107__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10106__auto____$1,entry__10107__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__10137__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__10137__auto__,writer__10138__auto__){
return cljs.core._write(writer__10138__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__25246){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__25246),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25246,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__9414__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__9414__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
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
return and__9414__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
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
if(((!((main_obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
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
if((function (){var G__25265 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__25265 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__25265.devcards$core$IDevcard$))){
return true;
} else {
if((!G__25265.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__25265);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__25265);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__25268 = devcards.core.DomComponent;
var G__25269 = ({"node_fn": node_fn, "data_atom": data_atom});
return React.createElement(G__25268,G__25269);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__25273 = (function (){var G__25274 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25274) : cljs.core.deref.call(null,G__25274));
})();
var map__25273__$1 = ((((!((map__25273 == null)))?((((map__25273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25273):map__25273);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25273__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25273__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__25277 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25277) : cljs.core.deref.call(null,G__25277));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__25279 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25279) : cljs.core.deref.call(null,G__25279));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__25284 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__25284__$1 = ((((!((map__25284 == null)))?((((map__25284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25284):map__25284);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25284__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25284__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__25286_25288 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__25287_25289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25286_25288,G__25287_25289) : cljs.core.reset_BANG_.call(null,G__25286_25288,G__25287_25289));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__25294 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__25294__$1 = ((((!((map__25294 == null)))?((((map__25294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25294):map__25294);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25294__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25294__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__25296_25298 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__25297_25299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25296_25298,G__25297_25299) : cljs.core.reset_BANG_.call(null,G__25296_25298,G__25297_25299));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__25304 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__25304__$1 = ((((!((map__25304 == null)))?((((map__25304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25304):map__25304);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25304__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__25306_25308 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__25307_25309 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25306_25308,G__25307_25309) : cljs.core.reset_BANG_.call(null,G__25306_25308,G__25307_25309));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__25310 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__25311 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25311) : cljs.core.atom.call(null,G__25311));
})()});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__10360__auto__ = (function (){var G__25313 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25313) : cljs.core.deref.call(null,G__25313));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10360__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__9414__auto__ = data_atom;
if(cljs.core.truth_(and__9414__auto__)){
return id;
} else {
return and__9414__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__25314){
var map__25315 = p__25314;
var map__25315__$1 = ((((!((map__25315 == null)))?((((map__25315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25315):map__25315);
var ha = map__25315__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25315__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25315__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25315__$1,cljs.core.cst$kw$ignore_DASH_click);
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
if(cljs.core.truth_((function (){var or__9426__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__25317 = "div";
var G__25318 = ({"style": ({"display": (cljs.core.truth_((function (){var or__9426__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__25319 = (function (){var action = ((function (G__25317,G__25318,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__25317,G__25318,this$))
;
return sablono.interpreter.interpret((function (){var G__25325 = "button";
var G__25326 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__25327 = (function (){var G__25328 = "span";
var G__25329 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__25330 = "";
return React.createElement(G__25328,G__25329,G__25330);
})();
return React.createElement(G__25325,G__25326,G__25327);
})());
})();
var G__25320 = (function (){var action = ((function (G__25317,G__25318,G__25319,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__25331 = data_atom;
var G__25332 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25331,G__25332) : cljs.core.reset_BANG_.call(null,G__25331,G__25332));
});})(G__25317,G__25318,G__25319,this$))
;
return sablono.interpreter.interpret((function (){var G__25335 = "button";
var G__25336 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__25337 = (function (){var G__25338 = "span";
var G__25339 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__25340 = "";
return React.createElement(G__25338,G__25339,G__25340);
})();
return React.createElement(G__25335,G__25336,G__25337);
})());
})();
var G__25321 = (function (){var action = ((function (G__25317,G__25318,G__25319,G__25320,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__25317,G__25318,G__25319,G__25320,this$))
;
return sablono.interpreter.interpret((function (){var G__25343 = "button";
var G__25344 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__25345 = (function (){var G__25346 = "span";
var G__25347 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__25348 = "";
return React.createElement(G__25346,G__25347,G__25348);
})();
return React.createElement(G__25343,G__25344,G__25345);
})());
})();
var G__25322 = (function (){var listener = ((function (G__25317,G__25318,G__25319,G__25320,G__25321,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__25317,G__25318,G__25319,G__25320,G__25321,this$))
;
return sablono.interpreter.interpret((function (){var G__25355 = "button";
var G__25356 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__25357 = (function (){var G__25360 = "span";
var G__25361 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__25360,G__25361);
})();
var G__25358 = (function (){var G__25362 = "span";
var G__25363 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__25362,G__25363);
})();
var G__25359 = (function (){var G__25364 = "span";
var G__25365 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return React.createElement(G__25364,G__25365);
})();
return React.createElement(G__25355,G__25356,G__25357,G__25358,G__25359);
})());
})();
return React.createElement(G__25317,G__25318,G__25319,G__25320,G__25321,G__25322);
} else {
return null;
}
})});
return React.createClass(G__25310);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__25368 = devcards.core.HistoryComponent;
var G__25369 = ({"data_atom": data_atom, "key": "devcards-history-control-bar"});
return React.createElement(G__25368,G__25369);
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
var _STAR_current_env_STAR_25371 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_25371;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__10457__auto__ = (function (){var G__25372 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25372) : cljs.core.atom.call(null,G__25372));
})();
var prefer_table__10458__auto__ = (function (){var G__25373 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25373) : cljs.core.atom.call(null,G__25373));
})();
var method_cache__10459__auto__ = (function (){var G__25374 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25374) : cljs.core.atom.call(null,G__25374));
})();
var cached_hierarchy__10460__auto__ = (function (){var G__25375 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25375) : cljs.core.atom.call(null,G__25375));
})();
var hierarchy__10461__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__10461__auto__,method_table__10457__auto__,prefer_table__10458__auto__,method_cache__10459__auto__,cached_hierarchy__10460__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs25376 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25376))?sablono.interpreter.attributes(attrs25376):null),((cljs.core.map_QMARK_(attrs25376))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25376)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__25377,body){
var map__25385 = p__25377;
var map__25385__$1 = ((((!((map__25385 == null)))?((((map__25385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25385):map__25385);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25385__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__25388 = "div";
var G__25389 = null;
var G__25390 = (function (){var attrs25387 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs25387))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs25387], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs25387))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25387)], null)));
})();
var G__25391 = sablono.interpreter.interpret(body);
return React.createElement(G__25388,G__25389,G__25390,G__25391);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__25392){
var map__25426 = p__25392;
var map__25426__$1 = ((((!((map__25426 == null)))?((((map__25426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25426):map__25426);
var m = map__25426__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25426__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25426__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25426__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs25428 = (function (){var G__25429 = devcards.core.CodeHighlight;
var G__25430 = ({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"});
return React.createElement(G__25429,G__25430);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25428))?sablono.interpreter.attributes(attrs25428):null),((cljs.core.map_QMARK_(attrs25428))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__25433 = "div";
var G__25434 = ({"style": ({"marginTop": "5px"})});
var G__25435 = (function (){var G__25437 = "div";
var G__25438 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__25439 = "\u25B6";
return React.createElement(G__25437,G__25438,G__25439);
})();
var G__25436 = (function (){var G__25440 = "div";
var G__25441 = ({"style": ({"marginLeft": "20px"})});
var G__25442 = sablono.interpreter.interpret((function (){var G__25443 = devcards.core.CodeHighlight;
var G__25444 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__25443,G__25444);
})());
return React.createElement(G__25440,G__25441,G__25442);
})();
return React.createElement(G__25433,G__25434,G__25435,G__25436);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25428),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__25447 = "div";
var G__25448 = ({"style": ({"marginTop": "5px"})});
var G__25449 = (function (){var G__25451 = "div";
var G__25452 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__25453 = "\u25B6";
return React.createElement(G__25451,G__25452,G__25453);
})();
var G__25450 = (function (){var G__25454 = "div";
var G__25455 = ({"style": ({"marginLeft": "20px"})});
var G__25456 = sablono.interpreter.interpret((function (){var G__25457 = devcards.core.CodeHighlight;
var G__25458 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__25457,G__25458);
})());
return React.createElement(G__25454,G__25455,G__25456);
})();
return React.createElement(G__25447,G__25448,G__25449,G__25450);
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
return devcards.core.display_message(m,(function (){var G__25462 = "div";
var G__25463 = null;
var G__25464 = React.createElement("strong",null,"Error: ");
var G__25465 = (function (){var attrs25461 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs25461))?sablono.interpreter.attributes(attrs25461):null),((cljs.core.map_QMARK_(attrs25461))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25461)], null)));
})();
return React.createElement(G__25462,G__25463,G__25464,G__25465);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs25466 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25466))?sablono.interpreter.attributes(attrs25466):null),((cljs.core.map_QMARK_(attrs25466))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25466)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__25467){
var map__25468 = p__25467;
var map__25468__$1 = ((((!((map__25468 == null)))?((((map__25468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25468):map__25468);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25468__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs25470 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__25468,map__25468__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__25468,map__25468__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__10360__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__10360__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25470))?sablono.interpreter.attributes(attrs25470):null),((cljs.core.map_QMARK_(attrs25470))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25470)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__25472 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__25472) : cljs.test.report.call(null,G__25472));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs25481 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25482,p__25483){
var map__25484 = p__25482;
var map__25484__$1 = ((((!((map__25484 == null)))?((((map__25484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25484):map__25484);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25484__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25484__$1,cljs.core.cst$kw$html_DASH_list);
var vec__25485 = p__25483;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25485,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25485,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__10360__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__10360__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25481))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs25481], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs25481))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25481)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__25526){
var map__25527 = p__25526;
var map__25527__$1 = ((((!((map__25527 == null)))?((((map__25527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25527):map__25527);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25527__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__25525 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__25525__$1 = ((((!((map__25525 == null)))?((((map__25525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25525):map__25525);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25525__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25525__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25525__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__25530 = "div";
var G__25531 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__25532 = (function (){var G__25534 = "div";
var G__25535 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__25536 = (function (){var G__25540 = "a";
var G__25541 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__25540,G__25534,G__25535,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__25540,G__25534,G__25535,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1))
)});
var G__25542 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__25540,G__25541,G__25542);
})();
var G__25537 = (function (){var G__25543 = "button";
var G__25544 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__25543,G__25534,G__25535,G__25536,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(G__25543,G__25534,G__25535,G__25536,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__25545 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__25543,G__25544,G__25545);
})();
var G__25538 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__25546 = "button";
var G__25547 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__25546,G__25534,G__25535,G__25536,G__25537,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__25546,G__25534,G__25535,G__25536,G__25537,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1){
return (function (p__25549){
var map__25550 = p__25549;
var map__25550__$1 = ((((!((map__25550 == null)))?((((map__25550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25550):map__25550);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25550__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__25546,G__25534,G__25535,G__25536,G__25537,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1))
}));
});})(G__25546,G__25534,G__25535,G__25536,G__25537,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__25548 = sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1))].join(''));
return React.createElement(G__25546,G__25547,G__25548);
})()));
var G__25539 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__25552 = "button";
var G__25553 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__25552,G__25534,G__25535,G__25536,G__25537,G__25538,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__25552,G__25534,G__25535,G__25536,G__25537,G__25538,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1){
return (function (p__25555){
var map__25556 = p__25555;
var map__25556__$1 = ((((!((map__25556 == null)))?((((map__25556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25556):map__25556);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25556__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__25552,G__25534,G__25535,G__25536,G__25537,G__25538,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1))
}));
});})(G__25552,G__25534,G__25535,G__25536,G__25537,G__25538,G__25530,G__25531,error_QMARK_,tests,some_tests,total_tests,map__25525,map__25525__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__25554 = sablono.interpreter.interpret(pass);
return React.createElement(G__25552,G__25553,G__25554);
})()));
return React.createElement(G__25534,G__25535,G__25536,G__25537,G__25538,G__25539);
})();
var G__25533 = (function (){var G__25558 = "div";
var G__25559 = ({"className": devcards.system.devcards_rendered_card_class});
var G__25560 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__9426__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__25558,G__25559,G__25560);
})();
return React.createElement(G__25530,G__25531,G__25532,G__25533);
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
devcards.core.test_loop = (function (){var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__){
return (function (state_25651){
var state_val_25652 = (state_25651[(1)]);
if((state_val_25652 === (7))){
var state_25651__$1 = state_25651;
var statearr_25653_25702 = state_25651__$1;
(statearr_25653_25702[(2)] = false);

(statearr_25653_25702[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (20))){
var inst_25589 = (state_25651[(7)]);
var inst_25609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25589);
var state_25651__$1 = state_25651;
var statearr_25654_25703 = state_25651__$1;
(statearr_25654_25703[(2)] = inst_25609);

(statearr_25654_25703[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (27))){
var inst_25626 = (state_25651[(8)]);
var inst_25614 = (state_25651[(9)]);
var inst_25630 = (inst_25614.cljs$core$IFn$_invoke$arity$1 ? inst_25614.cljs$core$IFn$_invoke$arity$1(inst_25626) : inst_25614.call(null,inst_25626));
var state_25651__$1 = state_25651;
var statearr_25655_25704 = state_25651__$1;
(statearr_25655_25704[(2)] = inst_25630);

(statearr_25655_25704[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (1))){
var state_25651__$1 = state_25651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25651__$1,(2),devcards.core.test_channel);
} else {
if((state_val_25652 === (24))){
var state_25651__$1 = state_25651;
var statearr_25656_25705 = state_25651__$1;
(statearr_25656_25705[(2)] = null);

(statearr_25656_25705[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (4))){
var state_25651__$1 = state_25651;
var statearr_25657_25706 = state_25651__$1;
(statearr_25657_25706[(2)] = false);

(statearr_25657_25706[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (15))){
var state_25651__$1 = state_25651;
var statearr_25658_25707 = state_25651__$1;
(statearr_25658_25707[(2)] = false);

(statearr_25658_25707[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (21))){
var inst_25589 = (state_25651[(7)]);
var state_25651__$1 = state_25651;
var statearr_25659_25708 = state_25651__$1;
(statearr_25659_25708[(2)] = inst_25589);

(statearr_25659_25708[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (13))){
var inst_25649 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25651__$1,inst_25649);
} else {
if((state_val_25652 === (22))){
var inst_25613 = (state_25651[(10)]);
var inst_25612 = (state_25651[(2)]);
var inst_25613__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25612,cljs.core.cst$kw$tests);
var inst_25614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25612,cljs.core.cst$kw$callback);
var state_25651__$1 = (function (){var statearr_25660 = state_25651;
(statearr_25660[(10)] = inst_25613__$1);

(statearr_25660[(9)] = inst_25614);

return statearr_25660;
})();
if(cljs.core.truth_(inst_25613__$1)){
var statearr_25661_25709 = state_25651__$1;
(statearr_25661_25709[(1)] = (23));

} else {
var statearr_25662_25710 = state_25651__$1;
(statearr_25662_25710[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (29))){
var inst_25640 = (state_25651[(2)]);
var inst_25641 = cljs.test.clear_env_BANG_();
var state_25651__$1 = (function (){var statearr_25663 = state_25651;
(statearr_25663[(11)] = inst_25640);

(statearr_25663[(12)] = inst_25641);

return statearr_25663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25651__$1,(30),devcards.core.test_channel);
} else {
if((state_val_25652 === (6))){
var state_25651__$1 = state_25651;
var statearr_25664_25711 = state_25651__$1;
(statearr_25664_25711[(2)] = true);

(statearr_25664_25711[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (28))){
var inst_25614 = (state_25651[(9)]);
var inst_25632 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_25633 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_25634 = cljs.core.PersistentHashMap.fromArrays(inst_25632,inst_25633);
var inst_25635 = devcards.core.collect_test(inst_25634);
var inst_25636 = cljs.test.get_current_env();
var inst_25637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_25636,cljs.core.cst$kw$error,"Execution timed out!");
var inst_25638 = (inst_25614.cljs$core$IFn$_invoke$arity$1 ? inst_25614.cljs$core$IFn$_invoke$arity$1(inst_25637) : inst_25614.call(null,inst_25637));
var state_25651__$1 = (function (){var statearr_25665 = state_25651;
(statearr_25665[(13)] = inst_25635);

return statearr_25665;
})();
var statearr_25666_25712 = state_25651__$1;
(statearr_25666_25712[(2)] = inst_25638);

(statearr_25666_25712[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (25))){
var inst_25647 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25667_25713 = state_25651__$1;
(statearr_25667_25713[(2)] = inst_25647);

(statearr_25667_25713[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (17))){
var state_25651__$1 = state_25651;
var statearr_25668_25714 = state_25651__$1;
(statearr_25668_25714[(2)] = true);

(statearr_25668_25714[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (3))){
var inst_25565 = (state_25651[(14)]);
var inst_25570 = inst_25565.cljs$lang$protocol_mask$partition0$;
var inst_25571 = (inst_25570 & (64));
var inst_25572 = inst_25565.cljs$core$ISeq$;
var inst_25573 = (cljs.core.PROTOCOL_SENTINEL === inst_25572);
var inst_25574 = (inst_25571) || (inst_25573);
var state_25651__$1 = state_25651;
if(cljs.core.truth_(inst_25574)){
var statearr_25669_25715 = state_25651__$1;
(statearr_25669_25715[(1)] = (6));

} else {
var statearr_25670_25716 = state_25651__$1;
(statearr_25670_25716[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (12))){
var inst_25589 = (state_25651[(7)]);
var inst_25593 = (inst_25589 == null);
var inst_25594 = cljs.core.not(inst_25593);
var state_25651__$1 = state_25651;
if(inst_25594){
var statearr_25671_25717 = state_25651__$1;
(statearr_25671_25717[(1)] = (14));

} else {
var statearr_25672_25718 = state_25651__$1;
(statearr_25672_25718[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (2))){
var inst_25565 = (state_25651[(14)]);
var inst_25565__$1 = (state_25651[(2)]);
var inst_25567 = (inst_25565__$1 == null);
var inst_25568 = cljs.core.not(inst_25567);
var state_25651__$1 = (function (){var statearr_25673 = state_25651;
(statearr_25673[(14)] = inst_25565__$1);

return statearr_25673;
})();
if(inst_25568){
var statearr_25674_25719 = state_25651__$1;
(statearr_25674_25719[(1)] = (3));

} else {
var statearr_25675_25720 = state_25651__$1;
(statearr_25675_25720[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (23))){
var inst_25613 = (state_25651[(10)]);
var inst_25619 = (state_25651[(15)]);
var inst_25619__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_25620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25621 = devcards.core.run_card_tests(inst_25613);
var inst_25622 = [inst_25621,inst_25619__$1];
var inst_25623 = (new cljs.core.PersistentVector(null,2,(5),inst_25620,inst_25622,null));
var state_25651__$1 = (function (){var statearr_25676 = state_25651;
(statearr_25676[(15)] = inst_25619__$1);

return statearr_25676;
})();
return cljs.core.async.ioc_alts_BANG_(state_25651__$1,(26),inst_25623);
} else {
if((state_val_25652 === (19))){
var inst_25604 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25677_25721 = state_25651__$1;
(statearr_25677_25721[(2)] = inst_25604);

(statearr_25677_25721[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (11))){
var inst_25565 = (state_25651[(14)]);
var inst_25586 = (state_25651[(2)]);
var inst_25587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25586,cljs.core.cst$kw$tests);
var inst_25588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25586,cljs.core.cst$kw$callback);
var inst_25589 = inst_25565;
var state_25651__$1 = (function (){var statearr_25678 = state_25651;
(statearr_25678[(16)] = inst_25587);

(statearr_25678[(17)] = inst_25588);

(statearr_25678[(7)] = inst_25589);

return statearr_25678;
})();
var statearr_25679_25722 = state_25651__$1;
(statearr_25679_25722[(2)] = null);

(statearr_25679_25722[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (9))){
var inst_25565 = (state_25651[(14)]);
var inst_25583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25565);
var state_25651__$1 = state_25651;
var statearr_25680_25723 = state_25651__$1;
(statearr_25680_25723[(2)] = inst_25583);

(statearr_25680_25723[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (5))){
var inst_25581 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
if(cljs.core.truth_(inst_25581)){
var statearr_25681_25724 = state_25651__$1;
(statearr_25681_25724[(1)] = (9));

} else {
var statearr_25682_25725 = state_25651__$1;
(statearr_25682_25725[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (14))){
var inst_25589 = (state_25651[(7)]);
var inst_25596 = inst_25589.cljs$lang$protocol_mask$partition0$;
var inst_25597 = (inst_25596 & (64));
var inst_25598 = inst_25589.cljs$core$ISeq$;
var inst_25599 = (cljs.core.PROTOCOL_SENTINEL === inst_25598);
var inst_25600 = (inst_25597) || (inst_25599);
var state_25651__$1 = state_25651;
if(cljs.core.truth_(inst_25600)){
var statearr_25683_25726 = state_25651__$1;
(statearr_25683_25726[(1)] = (17));

} else {
var statearr_25684_25727 = state_25651__$1;
(statearr_25684_25727[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (26))){
var inst_25619 = (state_25651[(15)]);
var inst_25625 = (state_25651[(2)]);
var inst_25626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25625,(0),null);
var inst_25627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25625,(1),null);
var inst_25628 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_25627,inst_25619);
var state_25651__$1 = (function (){var statearr_25685 = state_25651;
(statearr_25685[(8)] = inst_25626);

return statearr_25685;
})();
if(inst_25628){
var statearr_25686_25728 = state_25651__$1;
(statearr_25686_25728[(1)] = (27));

} else {
var statearr_25687_25729 = state_25651__$1;
(statearr_25687_25729[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (16))){
var inst_25607 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
if(cljs.core.truth_(inst_25607)){
var statearr_25688_25730 = state_25651__$1;
(statearr_25688_25730[(1)] = (20));

} else {
var statearr_25689_25731 = state_25651__$1;
(statearr_25689_25731[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (30))){
var inst_25643 = (state_25651[(2)]);
var inst_25589 = inst_25643;
var state_25651__$1 = (function (){var statearr_25690 = state_25651;
(statearr_25690[(7)] = inst_25589);

return statearr_25690;
})();
var statearr_25691_25732 = state_25651__$1;
(statearr_25691_25732[(2)] = null);

(statearr_25691_25732[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (10))){
var inst_25565 = (state_25651[(14)]);
var state_25651__$1 = state_25651;
var statearr_25692_25733 = state_25651__$1;
(statearr_25692_25733[(2)] = inst_25565);

(statearr_25692_25733[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (18))){
var state_25651__$1 = state_25651;
var statearr_25693_25734 = state_25651__$1;
(statearr_25693_25734[(2)] = false);

(statearr_25693_25734[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25652 === (8))){
var inst_25578 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25694_25735 = state_25651__$1;
(statearr_25694_25735[(2)] = inst_25578);

(statearr_25694_25735[(1)] = (5));


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
});})(c__19950__auto__))
;
return ((function (switch__19824__auto__,c__19950__auto__){
return (function() {
var devcards$core$state_machine__19825__auto__ = null;
var devcards$core$state_machine__19825__auto____0 = (function (){
var statearr_25698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25698[(0)] = devcards$core$state_machine__19825__auto__);

(statearr_25698[(1)] = (1));

return statearr_25698;
});
var devcards$core$state_machine__19825__auto____1 = (function (state_25651){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_25651);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e25699){if((e25699 instanceof Object)){
var ex__19828__auto__ = e25699;
var statearr_25700_25736 = state_25651;
(statearr_25700_25736[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25651);

return cljs.core.cst$kw$recur;
} else {
throw e25699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__25737 = state_25651;
state_25651 = G__25737;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
devcards$core$state_machine__19825__auto__ = function(state_25651){
switch(arguments.length){
case 0:
return devcards$core$state_machine__19825__auto____0.call(this);
case 1:
return devcards$core$state_machine__19825__auto____1.call(this,state_25651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$core$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__19825__auto____0;
devcards$core$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__19825__auto____1;
return devcards$core$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__))
})();
var state__19952__auto__ = (function (){var statearr_25701 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_25701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_25701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__))
);

return c__19950__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__23924__auto___25742 = ({"componentWillMount": (function (){
var this$ = this;
var temp__6738__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__6738__auto__)){
var test_thunks = temp__6738__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__6738__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__6738__auto__)){
var test_thunks = temp__6738__auto__;
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
devcards.core.TestDevcard = React.createClass(base__23924__auto___25742);
}

var seq__25738_25743 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__25739_25744 = null;
var count__25740_25745 = (0);
var i__25741_25746 = (0);
while(true){
if((i__25741_25746 < count__25740_25745)){
var property__23925__auto___25747 = chunk__25739_25744.cljs$core$IIndexed$_nth$arity$2(null,i__25741_25746);
if(cljs.core.truth_((base__23924__auto___25742[property__23925__auto___25747]))){
(devcards.core.TestDevcard.prototype[property__23925__auto___25747] = (base__23924__auto___25742[property__23925__auto___25747]));
} else {
}

var G__25748 = seq__25738_25743;
var G__25749 = chunk__25739_25744;
var G__25750 = count__25740_25745;
var G__25751 = (i__25741_25746 + (1));
seq__25738_25743 = G__25748;
chunk__25739_25744 = G__25749;
count__25740_25745 = G__25750;
i__25741_25746 = G__25751;
continue;
} else {
var temp__6738__auto___25752 = cljs.core.seq(seq__25738_25743);
if(temp__6738__auto___25752){
var seq__25738_25753__$1 = temp__6738__auto___25752;
if(cljs.core.chunked_seq_QMARK_(seq__25738_25753__$1)){
var c__10337__auto___25754 = cljs.core.chunk_first(seq__25738_25753__$1);
var G__25755 = cljs.core.chunk_rest(seq__25738_25753__$1);
var G__25756 = c__10337__auto___25754;
var G__25757 = cljs.core.count(c__10337__auto___25754);
var G__25758 = (0);
seq__25738_25743 = G__25755;
chunk__25739_25744 = G__25756;
count__25740_25745 = G__25757;
i__25741_25746 = G__25758;
continue;
} else {
var property__23925__auto___25759 = cljs.core.first(seq__25738_25753__$1);
if(cljs.core.truth_((base__23924__auto___25742[property__23925__auto___25759]))){
(devcards.core.TestDevcard.prototype[property__23925__auto___25759] = (base__23924__auto___25742[property__23925__auto___25759]));
} else {
}

var G__25760 = cljs.core.next(seq__25738_25753__$1);
var G__25761 = null;
var G__25762 = (0);
var G__25763 = (0);
seq__25738_25743 = G__25760;
chunk__25739_25744 = G__25761;
count__25740_25745 = G__25762;
i__25741_25746 = G__25763;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__10654__auto__ = [];
var len__10647__auto___25770 = arguments.length;
var i__10648__auto___25771 = (0);
while(true){
if((i__10648__auto___25771 < len__10647__auto___25770)){
args__10654__auto__.push((arguments[i__10648__auto___25771]));

var G__25772 = (i__10648__auto___25771 + (1));
i__10648__auto___25771 = G__25772;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core25765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core25765 = (function (test_thunks,meta25766){
this.test_thunks = test_thunks;
this.meta25766 = meta25766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core25765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25767,meta25766__$1){
var self__ = this;
var _25767__$1 = this;
return (new devcards.core.t_devcards$core25765(self__.test_thunks,meta25766__$1));
});

devcards.core.t_devcards$core25765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25767){
var self__ = this;
var _25767__$1 = this;
return self__.meta25766;
});

devcards.core.t_devcards$core25765.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.t_devcards$core25765.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__25768 = devcards.core.TestDevcard;
var G__25769 = ({"test_thunks": self__.test_thunks, "path": path});
return React.createElement(G__25768,G__25769);
});

devcards.core.t_devcards$core25765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta25766], null);
});

devcards.core.t_devcards$core25765.cljs$lang$type = true;

devcards.core.t_devcards$core25765.cljs$lang$ctorStr = "devcards.core/t_devcards$core25765";

devcards.core.t_devcards$core25765.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"devcards.core/t_devcards$core25765");
});

devcards.core.__GT_t_devcards$core25765 = (function devcards$core$__GT_t_devcards$core25765(test_thunks__$1,meta25766){
return (new devcards.core.t_devcards$core25765(test_thunks__$1,meta25766));
});

}

return (new devcards.core.t_devcards$core25765(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq25764){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25764));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__6738__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__6738__auto__)){
var cards = temp__6738__auto__;
var temp__6738__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__6738__auto____$1)){
var card = temp__6738__auto____$1;
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
var temp__6738__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__6738__auto__)){
var base_card_options = temp__6738__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__6738__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__6738__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__6738__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__6738__auto__)){
var card = temp__6738__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__25775 = (function (){var attrs25776 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25776))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs25776], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs25776))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25776)], null)));
})();
return React.renderToString(G__25775);
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__6738__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__6738__auto__)){
var card = temp__6738__auto__;
var G__25780 = (function (){var attrs25782 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25782))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs25782], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs25782))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25782)], null)));
})();
var G__25781 = devcards.system.devcards_app_node();
return React.render(G__25780,G__25781);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__){
return (function (state_25812){
var state_val_25813 = (state_25812[(1)]);
if((state_val_25813 === (1))){
var inst_25803 = devcards.core.load_data_from_channel_BANG_();
var state_25812__$1 = state_25812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25812__$1,(2),inst_25803);
} else {
if((state_val_25813 === (2))){
var inst_25805 = (state_25812[(2)]);
var inst_25806 = cljs.core.async.timeout((100));
var state_25812__$1 = (function (){var statearr_25814 = state_25812;
(statearr_25814[(7)] = inst_25805);

return statearr_25814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25812__$1,(3),inst_25806);
} else {
if((state_val_25813 === (3))){
var inst_25808 = (state_25812[(2)]);
var inst_25809 = (function (){return ((function (inst_25808,state_val_25813,c__19950__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_25808,state_val_25813,c__19950__auto__))
})();
var inst_25810 = setTimeout(inst_25809,(0));
var state_25812__$1 = (function (){var statearr_25815 = state_25812;
(statearr_25815[(8)] = inst_25808);

return statearr_25815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25812__$1,inst_25810);
} else {
return null;
}
}
}
});})(c__19950__auto__))
;
return ((function (switch__19824__auto__,c__19950__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__19825__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__19825__auto____0 = (function (){
var statearr_25819 = [null,null,null,null,null,null,null,null,null];
(statearr_25819[(0)] = devcards$core$mount_namespace_$_state_machine__19825__auto__);

(statearr_25819[(1)] = (1));

return statearr_25819;
});
var devcards$core$mount_namespace_$_state_machine__19825__auto____1 = (function (state_25812){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_25812);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e25820){if((e25820 instanceof Object)){
var ex__19828__auto__ = e25820;
var statearr_25821_25823 = state_25812;
(statearr_25821_25823[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25812);

return cljs.core.cst$kw$recur;
} else {
throw e25820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__25824 = state_25812;
state_25812 = G__25824;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__19825__auto__ = function(state_25812){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__19825__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__19825__auto____1.call(this,state_25812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$core$mount_namespace_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__19825__auto____0;
devcards$core$mount_namespace_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__19825__auto____1;
return devcards$core$mount_namespace_$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__))
})();
var state__19952__auto__ = (function (){var statearr_25822 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_25822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_25822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__))
);

return c__19950__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
