// Compiled by ClojureScript 1.9.229 {}
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
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__18716__auto__ = (function (){var and__18704__auto__ = typeof Symbol !== 'undefined';
if(and__18704__auto__){
var and__18704__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18704__auto____$1){
var and__18704__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18704__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18704__auto____$2;
}
} else {
return and__18704__auto____$1;
}
} else {
return and__18704__auto__;
}
})();
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
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
document.body.addEventListener("figwheel.js-reload",(function (p1__27063_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__27063_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args27064 = [];
var len__19791__auto___27067 = arguments.length;
var i__19792__auto___27068 = (0);
while(true){
if((i__19792__auto___27068 < len__19791__auto___27067)){
args27064.push((arguments[i__19792__auto___27068]));

var G__27069 = (i__19792__auto___27068 + (1));
i__19792__auto___27068 = G__27069;
continue;
} else {
}
break;
}

var G__27066 = args27064.length;
switch (G__27066) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27064.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__18704__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18704__auto__){
var map__27077 = c;
var map__27077__$1 = ((((!((map__27077 == null)))?((((map__27077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27077):map__27077);
var path = cljs.core.get.call(null,map__27077__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__27077__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18704__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
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
var base__26271__auto___27083 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__18716__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__26271__auto___27083);
}

var seq__27079_27084 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27080_27085 = null;
var count__27081_27086 = (0);
var i__27082_27087 = (0);
while(true){
if((i__27082_27087 < count__27081_27086)){
var property__26272__auto___27088 = cljs.core._nth.call(null,chunk__27080_27085,i__27082_27087);
if(cljs.core.truth_((base__26271__auto___27083[property__26272__auto___27088]))){
(devcards.core.CodeHighlight.prototype[property__26272__auto___27088] = (base__26271__auto___27083[property__26272__auto___27088]));
} else {
}

var G__27089 = seq__27079_27084;
var G__27090 = chunk__27080_27085;
var G__27091 = count__27081_27086;
var G__27092 = (i__27082_27087 + (1));
seq__27079_27084 = G__27089;
chunk__27080_27085 = G__27090;
count__27081_27086 = G__27091;
i__27082_27087 = G__27092;
continue;
} else {
var temp__4657__auto___27093 = cljs.core.seq.call(null,seq__27079_27084);
if(temp__4657__auto___27093){
var seq__27079_27094__$1 = temp__4657__auto___27093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27079_27094__$1)){
var c__19527__auto___27095 = cljs.core.chunk_first.call(null,seq__27079_27094__$1);
var G__27096 = cljs.core.chunk_rest.call(null,seq__27079_27094__$1);
var G__27097 = c__19527__auto___27095;
var G__27098 = cljs.core.count.call(null,c__19527__auto___27095);
var G__27099 = (0);
seq__27079_27084 = G__27096;
chunk__27080_27085 = G__27097;
count__27081_27086 = G__27098;
i__27082_27087 = G__27099;
continue;
} else {
var property__26272__auto___27100 = cljs.core.first.call(null,seq__27079_27094__$1);
if(cljs.core.truth_((base__26271__auto___27083[property__26272__auto___27100]))){
(devcards.core.CodeHighlight.prototype[property__26272__auto___27100] = (base__26271__auto___27083[property__26272__auto___27100]));
} else {
}

var G__27101 = cljs.core.next.call(null,seq__27079_27094__$1);
var G__27102 = null;
var G__27103 = (0);
var G__27104 = (0);
seq__27079_27084 = G__27101;
chunk__27080_27085 = G__27102;
count__27081_27086 = G__27103;
i__27082_27087 = G__27104;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__19641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19645__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19645__auto__,method_table__19641__auto__,prefer_table__19642__auto__,method_cache__19643__auto__,cached_hierarchy__19644__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27105){
var map__27106 = p__27105;
var map__27106__$1 = ((((!((map__27106 == null)))?((((map__27106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27106):map__27106);
var content = cljs.core.get.call(null,map__27106__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__27108){
var map__27109 = p__27108;
var map__27109__$1 = ((((!((map__27109 == null)))?((((map__27109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27109):map__27109);
var block = map__27109__$1;
var content = cljs.core.get.call(null,map__27109__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19798__auto__ = [];
var len__19791__auto___27112 = arguments.length;
var i__19792__auto___27113 = (0);
while(true){
if((i__19792__auto___27113 < len__19791__auto___27112)){
args__19798__auto__.push((arguments[i__19792__auto___27113]));

var G__27114 = (i__19792__auto___27113 + (1));
i__19792__auto___27113 = G__27114;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq27111){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27111));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__27116 = devcards.system.devcards_rendered_card_class;
var G__27116__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__27116),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__27116);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__27116__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__27116__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args27117 = [];
var len__19791__auto___27125 = arguments.length;
var i__19792__auto___27126 = (0);
while(true){
if((i__19792__auto___27126 < len__19791__auto___27125)){
args27117.push((arguments[i__19792__auto___27126]));

var G__27127 = (i__19792__auto___27126 + (1));
i__19792__auto___27126 = G__27127;
continue;
} else {
}
break;
}

var G__27119 = args27117.length;
switch (G__27119) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27117.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__27120 = card;
var map__27120__$1 = ((((!((map__27120 == null)))?((((map__27120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27120):map__27120);
var path = cljs.core.get.call(null,map__27120__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__27120__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__27120,map__27120__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__27120,map__27120__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs27122 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27122))?sablono.interpreter.attributes.call(null,attrs27122):null),((cljs.core.map_QMARK_.call(null,attrs27122))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27122)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
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
var x__19379__auto__ = (((this$ == null))?null:this$);
var m__19380__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,this$,devcard_opts);
} else {
var m__19380__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
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
var x__19379__auto__ = (((this$ == null))?null:this$);
var m__19380__auto__ = (devcards.core._devcard[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,this$,devcard_opts);
} else {
var m__19380__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
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
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__26271__auto___27134 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs27129 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27129))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs27129)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs27129))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27129)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__26271__auto___27134);
}

var seq__27130_27135 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27131_27136 = null;
var count__27132_27137 = (0);
var i__27133_27138 = (0);
while(true){
if((i__27133_27138 < count__27132_27137)){
var property__26272__auto___27139 = cljs.core._nth.call(null,chunk__27131_27136,i__27133_27138);
if(cljs.core.truth_((base__26271__auto___27134[property__26272__auto___27139]))){
(devcards.core.DontUpdate.prototype[property__26272__auto___27139] = (base__26271__auto___27134[property__26272__auto___27139]));
} else {
}

var G__27140 = seq__27130_27135;
var G__27141 = chunk__27131_27136;
var G__27142 = count__27132_27137;
var G__27143 = (i__27133_27138 + (1));
seq__27130_27135 = G__27140;
chunk__27131_27136 = G__27141;
count__27132_27137 = G__27142;
i__27133_27138 = G__27143;
continue;
} else {
var temp__4657__auto___27144 = cljs.core.seq.call(null,seq__27130_27135);
if(temp__4657__auto___27144){
var seq__27130_27145__$1 = temp__4657__auto___27144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27130_27145__$1)){
var c__19527__auto___27146 = cljs.core.chunk_first.call(null,seq__27130_27145__$1);
var G__27147 = cljs.core.chunk_rest.call(null,seq__27130_27145__$1);
var G__27148 = c__19527__auto___27146;
var G__27149 = cljs.core.count.call(null,c__19527__auto___27146);
var G__27150 = (0);
seq__27130_27135 = G__27147;
chunk__27131_27136 = G__27148;
count__27132_27137 = G__27149;
i__27133_27138 = G__27150;
continue;
} else {
var property__26272__auto___27151 = cljs.core.first.call(null,seq__27130_27145__$1);
if(cljs.core.truth_((base__26271__auto___27134[property__26272__auto___27151]))){
(devcards.core.DontUpdate.prototype[property__26272__auto___27151] = (base__26271__auto___27134[property__26272__auto___27151]));
} else {
}

var G__27152 = cljs.core.next.call(null,seq__27130_27145__$1);
var G__27153 = null;
var G__27154 = (0);
var G__27155 = (0);
seq__27130_27135 = G__27152;
chunk__27131_27136 = G__27153;
count__27132_27137 = G__27154;
i__27133_27138 = G__27155;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__18716__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__19550__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__19550__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__19550__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__19550__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19550__auto____$3);
})(),x__19550__auto____$2);
})(),x__19550__auto____$1);
})(),x__19550__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__26271__auto___27162 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__18716__auto__ = (function (){var and__18704__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18704__auto__)){
return this$.state;
} else {
return and__18704__auto__;
}
})();
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__18704__auto__ = data_atom;
if(cljs.core.truth_(and__18704__auto__)){
return id;
} else {
return and__18704__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
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
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__26271__auto___27162);
}

var seq__27158_27163 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27159_27164 = null;
var count__27160_27165 = (0);
var i__27161_27166 = (0);
while(true){
if((i__27161_27166 < count__27160_27165)){
var property__26272__auto___27167 = cljs.core._nth.call(null,chunk__27159_27164,i__27161_27166);
if(cljs.core.truth_((base__26271__auto___27162[property__26272__auto___27167]))){
(devcards.core.DevcardBase.prototype[property__26272__auto___27167] = (base__26271__auto___27162[property__26272__auto___27167]));
} else {
}

var G__27168 = seq__27158_27163;
var G__27169 = chunk__27159_27164;
var G__27170 = count__27160_27165;
var G__27171 = (i__27161_27166 + (1));
seq__27158_27163 = G__27168;
chunk__27159_27164 = G__27169;
count__27160_27165 = G__27170;
i__27161_27166 = G__27171;
continue;
} else {
var temp__4657__auto___27172 = cljs.core.seq.call(null,seq__27158_27163);
if(temp__4657__auto___27172){
var seq__27158_27173__$1 = temp__4657__auto___27172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27158_27173__$1)){
var c__19527__auto___27174 = cljs.core.chunk_first.call(null,seq__27158_27173__$1);
var G__27175 = cljs.core.chunk_rest.call(null,seq__27158_27173__$1);
var G__27176 = c__19527__auto___27174;
var G__27177 = cljs.core.count.call(null,c__19527__auto___27174);
var G__27178 = (0);
seq__27158_27163 = G__27175;
chunk__27159_27164 = G__27176;
count__27160_27165 = G__27177;
i__27161_27166 = G__27178;
continue;
} else {
var property__26272__auto___27179 = cljs.core.first.call(null,seq__27158_27173__$1);
if(cljs.core.truth_((base__26271__auto___27162[property__26272__auto___27179]))){
(devcards.core.DevcardBase.prototype[property__26272__auto___27179] = (base__26271__auto___27162[property__26272__auto___27179]));
} else {
}

var G__27180 = cljs.core.next.call(null,seq__27158_27173__$1);
var G__27181 = null;
var G__27182 = (0);
var G__27183 = (0);
seq__27158_27163 = G__27180;
chunk__27159_27164 = G__27181;
count__27160_27165 = G__27182;
i__27161_27166 = G__27183;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__26271__auto___27188 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18704__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18704__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18704__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__26271__auto___27188);
}

var seq__27184_27189 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27185_27190 = null;
var count__27186_27191 = (0);
var i__27187_27192 = (0);
while(true){
if((i__27187_27192 < count__27186_27191)){
var property__26272__auto___27193 = cljs.core._nth.call(null,chunk__27185_27190,i__27187_27192);
if(cljs.core.truth_((base__26271__auto___27188[property__26272__auto___27193]))){
(devcards.core.DomComponent.prototype[property__26272__auto___27193] = (base__26271__auto___27188[property__26272__auto___27193]));
} else {
}

var G__27194 = seq__27184_27189;
var G__27195 = chunk__27185_27190;
var G__27196 = count__27186_27191;
var G__27197 = (i__27187_27192 + (1));
seq__27184_27189 = G__27194;
chunk__27185_27190 = G__27195;
count__27186_27191 = G__27196;
i__27187_27192 = G__27197;
continue;
} else {
var temp__4657__auto___27198 = cljs.core.seq.call(null,seq__27184_27189);
if(temp__4657__auto___27198){
var seq__27184_27199__$1 = temp__4657__auto___27198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27184_27199__$1)){
var c__19527__auto___27200 = cljs.core.chunk_first.call(null,seq__27184_27199__$1);
var G__27201 = cljs.core.chunk_rest.call(null,seq__27184_27199__$1);
var G__27202 = c__19527__auto___27200;
var G__27203 = cljs.core.count.call(null,c__19527__auto___27200);
var G__27204 = (0);
seq__27184_27189 = G__27201;
chunk__27185_27190 = G__27202;
count__27186_27191 = G__27203;
i__27187_27192 = G__27204;
continue;
} else {
var property__26272__auto___27205 = cljs.core.first.call(null,seq__27184_27199__$1);
if(cljs.core.truth_((base__26271__auto___27188[property__26272__auto___27205]))){
(devcards.core.DomComponent.prototype[property__26272__auto___27205] = (base__26271__auto___27188[property__26272__auto___27205]));
} else {
}

var G__27206 = cljs.core.next.call(null,seq__27184_27199__$1);
var G__27207 = null;
var G__27208 = (0);
var G__27209 = (0);
seq__27184_27189 = G__27206;
chunk__27185_27190 = G__27207;
count__27186_27191 = G__27208;
i__27187_27192 = G__27209;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18716__auto__ = x === true;
if(or__18716__auto__){
return or__18716__auto__;
} else {
var or__18716__auto____$1 = x === false;
if(or__18716__auto____$1){
return or__18716__auto____$1;
} else {
var or__18716__auto____$2 = (x == null);
if(or__18716__auto____$2){
return or__18716__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18716__auto__ = typeof x === 'string';
if(or__18716__auto__){
return or__18716__auto__;
} else {
var or__18716__auto____$1 = (x == null);
if(or__18716__auto____$1){
return or__18716__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18716__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__27210_SHARP_){
return !(p1__27210_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__27219 = opts;
var map__27219__$1 = ((((!((map__27219 == null)))?((((map__27219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27219):map__27219);
var name = cljs.core.get.call(null,map__27219__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__27219__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__27219__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__27219__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18716__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18716__auto__){
return or__18716__auto__;
} else {
var or__18716__auto____$1 = (options == null);
if(or__18716__auto____$1){
return or__18716__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18716__auto__ = (initial_data == null);
if(or__18716__auto__){
return or__18716__auto__;
} else {
var or__18716__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18716__auto____$1){
return or__18716__auto____$1;
} else {
var or__18716__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18716__auto____$2){
return or__18716__auto____$2;
} else {
var or__18716__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18716__auto____$3){
return or__18716__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__27219,map__27219__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__27211_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__27211_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__27219,map__27219__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs27227 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27227))?sablono.interpreter.attributes.call(null,attrs27227):null),((cljs.core.map_QMARK_.call(null,attrs27227))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27227)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs27231 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27231))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs27231)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs27231))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27231)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs27232 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27232))?sablono.interpreter.attributes.call(null,attrs27232):null),((cljs.core.map_QMARK_.call(null,attrs27232))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27232)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs27233 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27233))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs27233)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs27233))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27233)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__27234_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__27234_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19338__auto__,k__19339__auto__){
var self__ = this;
var this__19338__auto____$1 = this;
return cljs.core._lookup.call(null,this__19338__auto____$1,k__19339__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19340__auto__,k27236,else__19341__auto__){
var self__ = this;
var this__19340__auto____$1 = this;
var G__27238 = (((k27236 instanceof cljs.core.Keyword))?k27236.fqn:null);
switch (G__27238) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27236,else__19341__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19352__auto__,writer__19353__auto__,opts__19354__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
var pr_pair__19355__auto__ = ((function (this__19352__auto____$1){
return (function (keyval__19356__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19353__auto__,cljs.core.pr_writer,""," ","",opts__19354__auto__,keyval__19356__auto__);
});})(this__19352__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19353__auto__,pr_pair__19355__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19354__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27235){
var self__ = this;
var G__27235__$1 = this;
return (new cljs.core.RecordIter((0),G__27235__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19336__auto__){
var self__ = this;
var this__19336__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19332__auto__){
var self__ = this;
var this__19332__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19342__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19333__auto__){
var self__ = this;
var this__19333__auto____$1 = this;
var h__19151__auto__ = self__.__hash;
if(!((h__19151__auto__ == null))){
return h__19151__auto__;
} else {
var h__19151__auto____$1 = cljs.core.hash_imap.call(null,this__19333__auto____$1);
self__.__hash = h__19151__auto____$1;

return h__19151__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19334__auto__,other__19335__auto__){
var self__ = this;
var this__19334__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18704__auto__ = other__19335__auto__;
if(cljs.core.truth_(and__18704__auto__)){
var and__18704__auto____$1 = (this__19334__auto____$1.constructor === other__19335__auto__.constructor);
if(and__18704__auto____$1){
return cljs.core.equiv_map.call(null,this__19334__auto____$1,other__19335__auto__);
} else {
return and__18704__auto____$1;
}
} else {
return and__18704__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19347__auto__,k__19348__auto__){
var self__ = this;
var this__19347__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19348__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19347__auto____$1),self__.__meta),k__19348__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19348__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19345__auto__,k__19346__auto__,G__27235){
var self__ = this;
var this__19345__auto____$1 = this;
var pred__27239 = cljs.core.keyword_identical_QMARK_;
var expr__27240 = k__19346__auto__;
if(cljs.core.truth_(pred__27239.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27240))){
return (new devcards.core.IdentiyOptions(G__27235,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19346__auto__,G__27235),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19350__auto__){
var self__ = this;
var this__19350__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19337__auto__,G__27235){
var self__ = this;
var this__19337__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__27235,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19343__auto__,entry__19344__auto__){
var self__ = this;
var this__19343__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19344__auto__)){
return cljs.core._assoc.call(null,this__19343__auto____$1,cljs.core._nth.call(null,entry__19344__auto__,(0)),cljs.core._nth.call(null,entry__19344__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19343__auto____$1,entry__19344__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19372__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19372__auto__,writer__19373__auto__){
return cljs.core._write.call(null,writer__19373__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__27237){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27237),null,cljs.core.dissoc.call(null,G__27237,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__27243){
var map__27246 = p__27243;
var map__27246__$1 = ((((!((map__27246 == null)))?((((map__27246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27246):map__27246);
var devcard_opts = map__27246__$1;
var options = cljs.core.get.call(null,map__27246__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__27246,map__27246__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__27246,map__27246__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19338__auto__,k__19339__auto__){
var self__ = this;
var this__19338__auto____$1 = this;
return cljs.core._lookup.call(null,this__19338__auto____$1,k__19339__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19340__auto__,k27249,else__19341__auto__){
var self__ = this;
var this__19340__auto____$1 = this;
var G__27251 = (((k27249 instanceof cljs.core.Keyword))?k27249.fqn:null);
switch (G__27251) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27249,else__19341__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19352__auto__,writer__19353__auto__,opts__19354__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
var pr_pair__19355__auto__ = ((function (this__19352__auto____$1){
return (function (keyval__19356__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19353__auto__,cljs.core.pr_writer,""," ","",opts__19354__auto__,keyval__19356__auto__);
});})(this__19352__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19353__auto__,pr_pair__19355__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19354__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27248){
var self__ = this;
var G__27248__$1 = this;
return (new cljs.core.RecordIter((0),G__27248__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19336__auto__){
var self__ = this;
var this__19336__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19332__auto__){
var self__ = this;
var this__19332__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19342__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19333__auto__){
var self__ = this;
var this__19333__auto____$1 = this;
var h__19151__auto__ = self__.__hash;
if(!((h__19151__auto__ == null))){
return h__19151__auto__;
} else {
var h__19151__auto____$1 = cljs.core.hash_imap.call(null,this__19333__auto____$1);
self__.__hash = h__19151__auto____$1;

return h__19151__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19334__auto__,other__19335__auto__){
var self__ = this;
var this__19334__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18704__auto__ = other__19335__auto__;
if(cljs.core.truth_(and__18704__auto__)){
var and__18704__auto____$1 = (this__19334__auto____$1.constructor === other__19335__auto__.constructor);
if(and__18704__auto____$1){
return cljs.core.equiv_map.call(null,this__19334__auto____$1,other__19335__auto__);
} else {
return and__18704__auto____$1;
}
} else {
return and__18704__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19347__auto__,k__19348__auto__){
var self__ = this;
var this__19347__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19348__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19347__auto____$1),self__.__meta),k__19348__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19348__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19345__auto__,k__19346__auto__,G__27248){
var self__ = this;
var this__19345__auto____$1 = this;
var pred__27252 = cljs.core.keyword_identical_QMARK_;
var expr__27253 = k__19346__auto__;
if(cljs.core.truth_(pred__27252.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27253))){
return (new devcards.core.AtomLikeOptions(G__27248,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19346__auto__,G__27248),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19350__auto__){
var self__ = this;
var this__19350__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19337__auto__,G__27248){
var self__ = this;
var this__19337__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__27248,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19343__auto__,entry__19344__auto__){
var self__ = this;
var this__19343__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19344__auto__)){
return cljs.core._assoc.call(null,this__19343__auto____$1,cljs.core._nth.call(null,entry__19344__auto__,(0)),cljs.core._nth.call(null,entry__19344__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19343__auto____$1,entry__19344__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19372__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19372__auto__,writer__19373__auto__){
return cljs.core._write.call(null,writer__19373__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__27250){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27250),null,cljs.core.dissoc.call(null,G__27250,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19338__auto__,k__19339__auto__){
var self__ = this;
var this__19338__auto____$1 = this;
return cljs.core._lookup.call(null,this__19338__auto____$1,k__19339__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19340__auto__,k27259,else__19341__auto__){
var self__ = this;
var this__19340__auto____$1 = this;
var G__27261 = (((k27259 instanceof cljs.core.Keyword))?k27259.fqn:null);
switch (G__27261) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27259,else__19341__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19352__auto__,writer__19353__auto__,opts__19354__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
var pr_pair__19355__auto__ = ((function (this__19352__auto____$1){
return (function (keyval__19356__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19353__auto__,cljs.core.pr_writer,""," ","",opts__19354__auto__,keyval__19356__auto__);
});})(this__19352__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19353__auto__,pr_pair__19355__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19354__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27258){
var self__ = this;
var G__27258__$1 = this;
return (new cljs.core.RecordIter((0),G__27258__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19336__auto__){
var self__ = this;
var this__19336__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19332__auto__){
var self__ = this;
var this__19332__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19342__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19333__auto__){
var self__ = this;
var this__19333__auto____$1 = this;
var h__19151__auto__ = self__.__hash;
if(!((h__19151__auto__ == null))){
return h__19151__auto__;
} else {
var h__19151__auto____$1 = cljs.core.hash_imap.call(null,this__19333__auto____$1);
self__.__hash = h__19151__auto____$1;

return h__19151__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19334__auto__,other__19335__auto__){
var self__ = this;
var this__19334__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18704__auto__ = other__19335__auto__;
if(cljs.core.truth_(and__18704__auto__)){
var and__18704__auto____$1 = (this__19334__auto____$1.constructor === other__19335__auto__.constructor);
if(and__18704__auto____$1){
return cljs.core.equiv_map.call(null,this__19334__auto____$1,other__19335__auto__);
} else {
return and__18704__auto____$1;
}
} else {
return and__18704__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19347__auto__,k__19348__auto__){
var self__ = this;
var this__19347__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19348__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19347__auto____$1),self__.__meta),k__19348__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19348__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19345__auto__,k__19346__auto__,G__27258){
var self__ = this;
var this__19345__auto____$1 = this;
var pred__27262 = cljs.core.keyword_identical_QMARK_;
var expr__27263 = k__19346__auto__;
if(cljs.core.truth_(pred__27262.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27263))){
return (new devcards.core.EdnLikeOptions(G__27258,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19346__auto__,G__27258),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19350__auto__){
var self__ = this;
var this__19350__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19337__auto__,G__27258){
var self__ = this;
var this__19337__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__27258,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19343__auto__,entry__19344__auto__){
var self__ = this;
var this__19343__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19344__auto__)){
return cljs.core._assoc.call(null,this__19343__auto____$1,cljs.core._nth.call(null,entry__19344__auto__,(0)),cljs.core._nth.call(null,entry__19344__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19343__auto____$1,entry__19344__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19372__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19372__auto__,writer__19373__auto__){
return cljs.core._write.call(null,writer__19373__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__27260){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27260),null,cljs.core.dissoc.call(null,G__27260,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18704__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18704__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__18704__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__27277 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__27277 == null))){
if((false) || (G__27277.devcards$core$IDevcard$)){
return true;
} else {
if((!G__27277.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27277);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27277);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__27280 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__27280__$1 = ((((!((map__27280 == null)))?((((map__27280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27280):map__27280);
var history = cljs.core.get.call(null,map__27280__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27280__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27284 = cljs.core.deref.call(null,history_atom);
var map__27284__$1 = ((((!((map__27284 == null)))?((((map__27284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27284):map__27284);
var history = cljs.core.get.call(null,map__27284__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27284__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27288 = cljs.core.deref.call(null,history_atom);
var map__27288__$1 = ((((!((map__27288 == null)))?((((map__27288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27288):map__27288);
var history = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27292 = cljs.core.deref.call(null,history_atom);
var map__27292__$1 = ((((!((map__27292 == null)))?((((map__27292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27292):map__27292);
var history = cljs.core.get.call(null,map__27292__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__19550__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19550__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__18704__auto__ = data_atom;
if(cljs.core.truth_(and__18704__auto__)){
return id;
} else {
return and__18704__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__27294){
var map__27295 = p__27294;
var map__27295__$1 = ((((!((map__27295 == null)))?((((map__27295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27295):map__27295);
var ha = map__27295__$1;
var pointer = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__18716__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__18716__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_27310 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_27310;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19645__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19645__auto__,method_table__19641__auto__,prefer_table__19642__auto__,method_cache__19643__auto__,cached_hierarchy__19644__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs27311 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27311))?sablono.interpreter.attributes.call(null,attrs27311):null),((cljs.core.map_QMARK_.call(null,attrs27311))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27311)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__27312,body){
var map__27316 = p__27312;
var map__27316__$1 = ((((!((map__27316 == null)))?((((map__27316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);
var message = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs27318 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27318))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs27318)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs27318))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27318)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__27319){
var map__27327 = p__27319;
var map__27327__$1 = ((((!((map__27327 == null)))?((((map__27327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27327):map__27327);
var m = map__27327__$1;
var expected = cljs.core.get.call(null,map__27327__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__27327__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__27327__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs27329 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27329))?sablono.interpreter.attributes.call(null,attrs27329):null),((cljs.core.map_QMARK_.call(null,attrs27329))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27329),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs27336 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27336))?sablono.interpreter.attributes.call(null,attrs27336):null),((cljs.core.map_QMARK_.call(null,attrs27336))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27336)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs27337 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27337))?sablono.interpreter.attributes.call(null,attrs27337):null),((cljs.core.map_QMARK_.call(null,attrs27337))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27337)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__27338){
var map__27339 = p__27338;
var map__27339__$1 = ((((!((map__27339 == null)))?((((map__27339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27339):map__27339);
var testing_contexts = cljs.core.get.call(null,map__27339__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs27341 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__27339,map__27339__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__27339,map__27339__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__19550__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19550__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27341))?sablono.interpreter.attributes.call(null,attrs27341):null),((cljs.core.map_QMARK_.call(null,attrs27341))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27341)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs27350 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__27351,p__27352){
var map__27353 = p__27351;
var map__27353__$1 = ((((!((map__27353 == null)))?((((map__27353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27353):map__27353);
var last_context = cljs.core.get.call(null,map__27353__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__27353__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__27354 = p__27352;
var i = cljs.core.nth.call(null,vec__27354,(0),null);
var t = cljs.core.nth.call(null,vec__27354,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__19550__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19550__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27350))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs27350)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs27350))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27350)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__27370){
var map__27371 = p__27370;
var map__27371__$1 = ((((!((map__27371 == null)))?((((map__27371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27371):map__27371);
var type = cljs.core.get.call(null,map__27371__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__27369 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__27369__$1 = ((((!((map__27369 == null)))?((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var fail = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1){
return (function (p__27374){
var map__27375 = p__27374;
var map__27375__$1 = ((((!((map__27375 == null)))?((((map__27375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27375):map__27375);
var type = cljs.core.get.call(null,map__27375__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1){
return (function (p__27377){
var map__27378 = p__27377;
var map__27378__$1 = ((((!((map__27378 == null)))?((((map__27378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27378):map__27378);
var type = cljs.core.get.call(null,map__27378__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__27369,map__27369__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18716__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__){
return (function (state_27468){
var state_val_27469 = (state_27468[(1)]);
if((state_val_27469 === (7))){
var state_27468__$1 = state_27468;
var statearr_27470_27519 = state_27468__$1;
(statearr_27470_27519[(2)] = false);

(statearr_27470_27519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (20))){
var inst_27407 = (state_27468[(7)]);
var inst_27426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27407);
var state_27468__$1 = state_27468;
var statearr_27471_27520 = state_27468__$1;
(statearr_27471_27520[(2)] = inst_27426);

(statearr_27471_27520[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (27))){
var inst_27443 = (state_27468[(8)]);
var inst_27431 = (state_27468[(9)]);
var inst_27447 = inst_27431.call(null,inst_27443);
var state_27468__$1 = state_27468;
var statearr_27472_27521 = state_27468__$1;
(statearr_27472_27521[(2)] = inst_27447);

(statearr_27472_27521[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (1))){
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27468__$1,(2),devcards.core.test_channel);
} else {
if((state_val_27469 === (24))){
var state_27468__$1 = state_27468;
var statearr_27473_27522 = state_27468__$1;
(statearr_27473_27522[(2)] = null);

(statearr_27473_27522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (4))){
var state_27468__$1 = state_27468;
var statearr_27474_27523 = state_27468__$1;
(statearr_27474_27523[(2)] = false);

(statearr_27474_27523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (15))){
var state_27468__$1 = state_27468;
var statearr_27475_27524 = state_27468__$1;
(statearr_27475_27524[(2)] = false);

(statearr_27475_27524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (21))){
var inst_27407 = (state_27468[(7)]);
var state_27468__$1 = state_27468;
var statearr_27476_27525 = state_27468__$1;
(statearr_27476_27525[(2)] = inst_27407);

(statearr_27476_27525[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (13))){
var inst_27466 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27468__$1,inst_27466);
} else {
if((state_val_27469 === (22))){
var inst_27430 = (state_27468[(10)]);
var inst_27429 = (state_27468[(2)]);
var inst_27430__$1 = cljs.core.get.call(null,inst_27429,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_27431 = cljs.core.get.call(null,inst_27429,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_27468__$1 = (function (){var statearr_27477 = state_27468;
(statearr_27477[(10)] = inst_27430__$1);

(statearr_27477[(9)] = inst_27431);

return statearr_27477;
})();
if(cljs.core.truth_(inst_27430__$1)){
var statearr_27478_27526 = state_27468__$1;
(statearr_27478_27526[(1)] = (23));

} else {
var statearr_27479_27527 = state_27468__$1;
(statearr_27479_27527[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (29))){
var inst_27457 = (state_27468[(2)]);
var inst_27458 = cljs.test.clear_env_BANG_.call(null);
var state_27468__$1 = (function (){var statearr_27480 = state_27468;
(statearr_27480[(11)] = inst_27457);

(statearr_27480[(12)] = inst_27458);

return statearr_27480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27468__$1,(30),devcards.core.test_channel);
} else {
if((state_val_27469 === (6))){
var state_27468__$1 = state_27468;
var statearr_27481_27528 = state_27468__$1;
(statearr_27481_27528[(2)] = true);

(statearr_27481_27528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (28))){
var inst_27431 = (state_27468[(9)]);
var inst_27449 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_27450 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_27451 = cljs.core.PersistentHashMap.fromArrays(inst_27449,inst_27450);
var inst_27452 = devcards.core.collect_test.call(null,inst_27451);
var inst_27453 = cljs.test.get_current_env.call(null);
var inst_27454 = cljs.core.assoc.call(null,inst_27453,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_27455 = inst_27431.call(null,inst_27454);
var state_27468__$1 = (function (){var statearr_27482 = state_27468;
(statearr_27482[(13)] = inst_27452);

return statearr_27482;
})();
var statearr_27483_27529 = state_27468__$1;
(statearr_27483_27529[(2)] = inst_27455);

(statearr_27483_27529[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (25))){
var inst_27464 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27484_27530 = state_27468__$1;
(statearr_27484_27530[(2)] = inst_27464);

(statearr_27484_27530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (17))){
var state_27468__$1 = state_27468;
var statearr_27485_27531 = state_27468__$1;
(statearr_27485_27531[(2)] = true);

(statearr_27485_27531[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (3))){
var inst_27384 = (state_27468[(14)]);
var inst_27389 = inst_27384.cljs$lang$protocol_mask$partition0$;
var inst_27390 = (inst_27389 & (64));
var inst_27391 = inst_27384.cljs$core$ISeq$;
var inst_27392 = (inst_27390) || (inst_27391);
var state_27468__$1 = state_27468;
if(cljs.core.truth_(inst_27392)){
var statearr_27486_27532 = state_27468__$1;
(statearr_27486_27532[(1)] = (6));

} else {
var statearr_27487_27533 = state_27468__$1;
(statearr_27487_27533[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (12))){
var inst_27407 = (state_27468[(7)]);
var inst_27411 = (inst_27407 == null);
var inst_27412 = cljs.core.not.call(null,inst_27411);
var state_27468__$1 = state_27468;
if(inst_27412){
var statearr_27488_27534 = state_27468__$1;
(statearr_27488_27534[(1)] = (14));

} else {
var statearr_27489_27535 = state_27468__$1;
(statearr_27489_27535[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (2))){
var inst_27384 = (state_27468[(14)]);
var inst_27384__$1 = (state_27468[(2)]);
var inst_27386 = (inst_27384__$1 == null);
var inst_27387 = cljs.core.not.call(null,inst_27386);
var state_27468__$1 = (function (){var statearr_27490 = state_27468;
(statearr_27490[(14)] = inst_27384__$1);

return statearr_27490;
})();
if(inst_27387){
var statearr_27491_27536 = state_27468__$1;
(statearr_27491_27536[(1)] = (3));

} else {
var statearr_27492_27537 = state_27468__$1;
(statearr_27492_27537[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (23))){
var inst_27436 = (state_27468[(15)]);
var inst_27430 = (state_27468[(10)]);
var inst_27436__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_27437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27438 = devcards.core.run_card_tests.call(null,inst_27430);
var inst_27439 = [inst_27438,inst_27436__$1];
var inst_27440 = (new cljs.core.PersistentVector(null,2,(5),inst_27437,inst_27439,null));
var state_27468__$1 = (function (){var statearr_27493 = state_27468;
(statearr_27493[(15)] = inst_27436__$1);

return statearr_27493;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27468__$1,(26),inst_27440);
} else {
if((state_val_27469 === (19))){
var inst_27421 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27494_27538 = state_27468__$1;
(statearr_27494_27538[(2)] = inst_27421);

(statearr_27494_27538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (11))){
var inst_27384 = (state_27468[(14)]);
var inst_27404 = (state_27468[(2)]);
var inst_27405 = cljs.core.get.call(null,inst_27404,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_27406 = cljs.core.get.call(null,inst_27404,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_27407 = inst_27384;
var state_27468__$1 = (function (){var statearr_27495 = state_27468;
(statearr_27495[(7)] = inst_27407);

(statearr_27495[(16)] = inst_27405);

(statearr_27495[(17)] = inst_27406);

return statearr_27495;
})();
var statearr_27496_27539 = state_27468__$1;
(statearr_27496_27539[(2)] = null);

(statearr_27496_27539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (9))){
var inst_27384 = (state_27468[(14)]);
var inst_27401 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27384);
var state_27468__$1 = state_27468;
var statearr_27497_27540 = state_27468__$1;
(statearr_27497_27540[(2)] = inst_27401);

(statearr_27497_27540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (5))){
var inst_27399 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
if(cljs.core.truth_(inst_27399)){
var statearr_27498_27541 = state_27468__$1;
(statearr_27498_27541[(1)] = (9));

} else {
var statearr_27499_27542 = state_27468__$1;
(statearr_27499_27542[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (14))){
var inst_27407 = (state_27468[(7)]);
var inst_27414 = inst_27407.cljs$lang$protocol_mask$partition0$;
var inst_27415 = (inst_27414 & (64));
var inst_27416 = inst_27407.cljs$core$ISeq$;
var inst_27417 = (inst_27415) || (inst_27416);
var state_27468__$1 = state_27468;
if(cljs.core.truth_(inst_27417)){
var statearr_27500_27543 = state_27468__$1;
(statearr_27500_27543[(1)] = (17));

} else {
var statearr_27501_27544 = state_27468__$1;
(statearr_27501_27544[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (26))){
var inst_27436 = (state_27468[(15)]);
var inst_27442 = (state_27468[(2)]);
var inst_27443 = cljs.core.nth.call(null,inst_27442,(0),null);
var inst_27444 = cljs.core.nth.call(null,inst_27442,(1),null);
var inst_27445 = cljs.core.not_EQ_.call(null,inst_27444,inst_27436);
var state_27468__$1 = (function (){var statearr_27502 = state_27468;
(statearr_27502[(8)] = inst_27443);

return statearr_27502;
})();
if(inst_27445){
var statearr_27503_27545 = state_27468__$1;
(statearr_27503_27545[(1)] = (27));

} else {
var statearr_27504_27546 = state_27468__$1;
(statearr_27504_27546[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (16))){
var inst_27424 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
if(cljs.core.truth_(inst_27424)){
var statearr_27505_27547 = state_27468__$1;
(statearr_27505_27547[(1)] = (20));

} else {
var statearr_27506_27548 = state_27468__$1;
(statearr_27506_27548[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (30))){
var inst_27460 = (state_27468[(2)]);
var inst_27407 = inst_27460;
var state_27468__$1 = (function (){var statearr_27507 = state_27468;
(statearr_27507[(7)] = inst_27407);

return statearr_27507;
})();
var statearr_27508_27549 = state_27468__$1;
(statearr_27508_27549[(2)] = null);

(statearr_27508_27549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (10))){
var inst_27384 = (state_27468[(14)]);
var state_27468__$1 = state_27468;
var statearr_27509_27550 = state_27468__$1;
(statearr_27509_27550[(2)] = inst_27384);

(statearr_27509_27550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (18))){
var state_27468__$1 = state_27468;
var statearr_27510_27551 = state_27468__$1;
(statearr_27510_27551[(2)] = false);

(statearr_27510_27551[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (8))){
var inst_27396 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27511_27552 = state_27468__$1;
(statearr_27511_27552[(2)] = inst_27396);

(statearr_27511_27552[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22533__auto__))
;
return ((function (switch__22421__auto__,c__22533__auto__){
return (function() {
var devcards$core$state_machine__22422__auto__ = null;
var devcards$core$state_machine__22422__auto____0 = (function (){
var statearr_27515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27515[(0)] = devcards$core$state_machine__22422__auto__);

(statearr_27515[(1)] = (1));

return statearr_27515;
});
var devcards$core$state_machine__22422__auto____1 = (function (state_27468){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_27468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e27516){if((e27516 instanceof Object)){
var ex__22425__auto__ = e27516;
var statearr_27517_27553 = state_27468;
(statearr_27517_27553[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27554 = state_27468;
state_27468 = G__27554;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
devcards$core$state_machine__22422__auto__ = function(state_27468){
switch(arguments.length){
case 0:
return devcards$core$state_machine__22422__auto____0.call(this);
case 1:
return devcards$core$state_machine__22422__auto____1.call(this,state_27468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__22422__auto____0;
devcards$core$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__22422__auto____1;
return devcards$core$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__))
})();
var state__22535__auto__ = (function (){var statearr_27518 = f__22534__auto__.call(null);
(statearr_27518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_27518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__))
);

return c__22533__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__26271__auto___27559 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__26271__auto___27559);
}

var seq__27555_27560 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27556_27561 = null;
var count__27557_27562 = (0);
var i__27558_27563 = (0);
while(true){
if((i__27558_27563 < count__27557_27562)){
var property__26272__auto___27564 = cljs.core._nth.call(null,chunk__27556_27561,i__27558_27563);
if(cljs.core.truth_((base__26271__auto___27559[property__26272__auto___27564]))){
(devcards.core.TestDevcard.prototype[property__26272__auto___27564] = (base__26271__auto___27559[property__26272__auto___27564]));
} else {
}

var G__27565 = seq__27555_27560;
var G__27566 = chunk__27556_27561;
var G__27567 = count__27557_27562;
var G__27568 = (i__27558_27563 + (1));
seq__27555_27560 = G__27565;
chunk__27556_27561 = G__27566;
count__27557_27562 = G__27567;
i__27558_27563 = G__27568;
continue;
} else {
var temp__4657__auto___27569 = cljs.core.seq.call(null,seq__27555_27560);
if(temp__4657__auto___27569){
var seq__27555_27570__$1 = temp__4657__auto___27569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27555_27570__$1)){
var c__19527__auto___27571 = cljs.core.chunk_first.call(null,seq__27555_27570__$1);
var G__27572 = cljs.core.chunk_rest.call(null,seq__27555_27570__$1);
var G__27573 = c__19527__auto___27571;
var G__27574 = cljs.core.count.call(null,c__19527__auto___27571);
var G__27575 = (0);
seq__27555_27560 = G__27572;
chunk__27556_27561 = G__27573;
count__27557_27562 = G__27574;
i__27558_27563 = G__27575;
continue;
} else {
var property__26272__auto___27576 = cljs.core.first.call(null,seq__27555_27570__$1);
if(cljs.core.truth_((base__26271__auto___27559[property__26272__auto___27576]))){
(devcards.core.TestDevcard.prototype[property__26272__auto___27576] = (base__26271__auto___27559[property__26272__auto___27576]));
} else {
}

var G__27577 = cljs.core.next.call(null,seq__27555_27570__$1);
var G__27578 = null;
var G__27579 = (0);
var G__27580 = (0);
seq__27555_27560 = G__27577;
chunk__27556_27561 = G__27578;
count__27557_27562 = G__27579;
i__27558_27563 = G__27580;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19798__auto__ = [];
var len__19791__auto___27585 = arguments.length;
var i__19792__auto___27586 = (0);
while(true){
if((i__19792__auto___27586 < len__19791__auto___27585)){
args__19798__auto__.push((arguments[i__19792__auto___27586]));

var G__27587 = (i__19792__auto___27586 + (1));
i__19792__auto___27586 = G__27587;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core27582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core27582 = (function (test_thunks,meta27583){
this.test_thunks = test_thunks;
this.meta27583 = meta27583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core27582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27584,meta27583__$1){
var self__ = this;
var _27584__$1 = this;
return (new devcards.core.t_devcards$core27582(self__.test_thunks,meta27583__$1));
});

devcards.core.t_devcards$core27582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27584){
var self__ = this;
var _27584__$1 = this;
return self__.meta27583;
});

devcards.core.t_devcards$core27582.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core27582.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core27582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta27583","meta27583",-726692906,null)], null);
});

devcards.core.t_devcards$core27582.cljs$lang$type = true;

devcards.core.t_devcards$core27582.cljs$lang$ctorStr = "devcards.core/t_devcards$core27582";

devcards.core.t_devcards$core27582.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"devcards.core/t_devcards$core27582");
});

devcards.core.__GT_t_devcards$core27582 = (function devcards$core$__GT_t_devcards$core27582(test_thunks__$1,meta27583){
return (new devcards.core.t_devcards$core27582(test_thunks__$1,meta27583));
});

}

return (new devcards.core.t_devcards$core27582(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq27581){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27581));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
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
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs27589 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27589))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27589)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs27589))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27589)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs27591 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27591))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27591)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs27591))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27591)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__){
return (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (1))){
var inst_27612 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27621__$1,(2),inst_27612);
} else {
if((state_val_27622 === (2))){
var inst_27614 = (state_27621[(2)]);
var inst_27615 = cljs.core.async.timeout.call(null,(100));
var state_27621__$1 = (function (){var statearr_27623 = state_27621;
(statearr_27623[(7)] = inst_27614);

return statearr_27623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27621__$1,(3),inst_27615);
} else {
if((state_val_27622 === (3))){
var inst_27617 = (state_27621[(2)]);
var inst_27618 = (function (){return ((function (inst_27617,state_val_27622,c__22533__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_27617,state_val_27622,c__22533__auto__))
})();
var inst_27619 = setTimeout(inst_27618,(0));
var state_27621__$1 = (function (){var statearr_27624 = state_27621;
(statearr_27624[(8)] = inst_27617);

return statearr_27624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27621__$1,inst_27619);
} else {
return null;
}
}
}
});})(c__22533__auto__))
;
return ((function (switch__22421__auto__,c__22533__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__22422__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__22422__auto____0 = (function (){
var statearr_27628 = [null,null,null,null,null,null,null,null,null];
(statearr_27628[(0)] = devcards$core$mount_namespace_$_state_machine__22422__auto__);

(statearr_27628[(1)] = (1));

return statearr_27628;
});
var devcards$core$mount_namespace_$_state_machine__22422__auto____1 = (function (state_27621){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_27621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e27629){if((e27629 instanceof Object)){
var ex__22425__auto__ = e27629;
var statearr_27630_27632 = state_27621;
(statearr_27630_27632[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27633 = state_27621;
state_27621 = G__27633;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__22422__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__22422__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__22422__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__22422__auto____0;
devcards$core$mount_namespace_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__22422__auto____1;
return devcards$core$mount_namespace_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__))
})();
var state__22535__auto__ = (function (){var statearr_27631 = f__22534__auto__.call(null);
(statearr_27631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_27631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__))
);

return c__22533__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1474300063967