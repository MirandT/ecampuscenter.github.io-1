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
devcards.core.react_element_type_symbol = (function (){var or__24760__auto__ = (function (){var and__24748__auto__ = typeof Symbol !== 'undefined';
if(and__24748__auto__){
var and__24748__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__24748__auto____$1){
var and__24748__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__24748__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__24748__auto____$2;
}
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
}
})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
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
document.body.addEventListener("figwheel.js-reload",(function (p1__33108_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__33108_SHARP_.detail], null));
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
var args33109 = [];
var len__25835__auto___33112 = arguments.length;
var i__25836__auto___33113 = (0);
while(true){
if((i__25836__auto___33113 < len__25835__auto___33112)){
args33109.push((arguments[i__25836__auto___33113]));

var G__33114 = (i__25836__auto___33113 + (1));
i__25836__auto___33113 = G__33114;
continue;
} else {
}
break;
}

var G__33111 = args33109.length;
switch (G__33111) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33109.length)].join('')));

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
var and__24748__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__24748__auto__){
var map__33122 = c;
var map__33122__$1 = ((((!((map__33122 == null)))?((((map__33122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33122):map__33122);
var path = cljs.core.get.call(null,map__33122__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__33122__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__24748__auto__;
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
var base__32316__auto___33128 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__24760__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__32316__auto___33128);
}

var seq__33124_33129 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33125_33130 = null;
var count__33126_33131 = (0);
var i__33127_33132 = (0);
while(true){
if((i__33127_33132 < count__33126_33131)){
var property__32317__auto___33133 = cljs.core._nth.call(null,chunk__33125_33130,i__33127_33132);
if(cljs.core.truth_((base__32316__auto___33128[property__32317__auto___33133]))){
(devcards.core.CodeHighlight.prototype[property__32317__auto___33133] = (base__32316__auto___33128[property__32317__auto___33133]));
} else {
}

var G__33134 = seq__33124_33129;
var G__33135 = chunk__33125_33130;
var G__33136 = count__33126_33131;
var G__33137 = (i__33127_33132 + (1));
seq__33124_33129 = G__33134;
chunk__33125_33130 = G__33135;
count__33126_33131 = G__33136;
i__33127_33132 = G__33137;
continue;
} else {
var temp__4657__auto___33138 = cljs.core.seq.call(null,seq__33124_33129);
if(temp__4657__auto___33138){
var seq__33124_33139__$1 = temp__4657__auto___33138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33124_33139__$1)){
var c__25571__auto___33140 = cljs.core.chunk_first.call(null,seq__33124_33139__$1);
var G__33141 = cljs.core.chunk_rest.call(null,seq__33124_33139__$1);
var G__33142 = c__25571__auto___33140;
var G__33143 = cljs.core.count.call(null,c__25571__auto___33140);
var G__33144 = (0);
seq__33124_33129 = G__33141;
chunk__33125_33130 = G__33142;
count__33126_33131 = G__33143;
i__33127_33132 = G__33144;
continue;
} else {
var property__32317__auto___33145 = cljs.core.first.call(null,seq__33124_33139__$1);
if(cljs.core.truth_((base__32316__auto___33128[property__32317__auto___33145]))){
(devcards.core.CodeHighlight.prototype[property__32317__auto___33145] = (base__32316__auto___33128[property__32317__auto___33145]));
} else {
}

var G__33146 = cljs.core.next.call(null,seq__33124_33139__$1);
var G__33147 = null;
var G__33148 = (0);
var G__33149 = (0);
seq__33124_33129 = G__33146;
chunk__33125_33130 = G__33147;
count__33126_33131 = G__33148;
i__33127_33132 = G__33149;
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
devcards.core.markdown_block__GT_react = (function (){var method_table__25685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25688__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25689__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25689__auto__,method_table__25685__auto__,prefer_table__25686__auto__,method_cache__25687__auto__,cached_hierarchy__25688__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33150){
var map__33151 = p__33150;
var map__33151__$1 = ((((!((map__33151 == null)))?((((map__33151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33151):map__33151);
var content = cljs.core.get.call(null,map__33151__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__33153){
var map__33154 = p__33153;
var map__33154__$1 = ((((!((map__33154 == null)))?((((map__33154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33154):map__33154);
var block = map__33154__$1;
var content = cljs.core.get.call(null,map__33154__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__25842__auto__ = [];
var len__25835__auto___33157 = arguments.length;
var i__25836__auto___33158 = (0);
while(true){
if((i__25836__auto___33158 < len__25835__auto___33157)){
args__25842__auto__.push((arguments[i__25836__auto___33158]));

var G__33159 = (i__25836__auto___33158 + (1));
i__25836__auto___33158 = G__33159;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
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

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq33156){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33156));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__33161 = devcards.system.devcards_rendered_card_class;
var G__33161__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__33161),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__33161);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__33161__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__33161__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args33162 = [];
var len__25835__auto___33170 = arguments.length;
var i__25836__auto___33171 = (0);
while(true){
if((i__25836__auto___33171 < len__25835__auto___33170)){
args33162.push((arguments[i__25836__auto___33171]));

var G__33172 = (i__25836__auto___33171 + (1));
i__25836__auto___33171 = G__33172;
continue;
} else {
}
break;
}

var G__33164 = args33162.length;
switch (G__33164) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33162.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__33165 = card;
var map__33165__$1 = ((((!((map__33165 == null)))?((((map__33165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33165):map__33165);
var path = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__33165,map__33165__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__33165,map__33165__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs33167 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33167))?sablono.interpreter.attributes.call(null,attrs33167):null),((cljs.core.map_QMARK_.call(null,attrs33167))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33167)], null)));
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
var x__25423__auto__ = (((this$ == null))?null:this$);
var m__25424__auto__ = (devcards.core._devcard_options[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,this$,devcard_opts);
} else {
var m__25424__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,this$,devcard_opts);
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
var x__25423__auto__ = (((this$ == null))?null:this$);
var m__25424__auto__ = (devcards.core._devcard[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,this$,devcard_opts);
} else {
var m__25424__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,this$,devcard_opts);
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
var base__32316__auto___33179 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs33174 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33174))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs33174)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs33174))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33174)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__32316__auto___33179);
}

var seq__33175_33180 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33176_33181 = null;
var count__33177_33182 = (0);
var i__33178_33183 = (0);
while(true){
if((i__33178_33183 < count__33177_33182)){
var property__32317__auto___33184 = cljs.core._nth.call(null,chunk__33176_33181,i__33178_33183);
if(cljs.core.truth_((base__32316__auto___33179[property__32317__auto___33184]))){
(devcards.core.DontUpdate.prototype[property__32317__auto___33184] = (base__32316__auto___33179[property__32317__auto___33184]));
} else {
}

var G__33185 = seq__33175_33180;
var G__33186 = chunk__33176_33181;
var G__33187 = count__33177_33182;
var G__33188 = (i__33178_33183 + (1));
seq__33175_33180 = G__33185;
chunk__33176_33181 = G__33186;
count__33177_33182 = G__33187;
i__33178_33183 = G__33188;
continue;
} else {
var temp__4657__auto___33189 = cljs.core.seq.call(null,seq__33175_33180);
if(temp__4657__auto___33189){
var seq__33175_33190__$1 = temp__4657__auto___33189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33175_33190__$1)){
var c__25571__auto___33191 = cljs.core.chunk_first.call(null,seq__33175_33190__$1);
var G__33192 = cljs.core.chunk_rest.call(null,seq__33175_33190__$1);
var G__33193 = c__25571__auto___33191;
var G__33194 = cljs.core.count.call(null,c__25571__auto___33191);
var G__33195 = (0);
seq__33175_33180 = G__33192;
chunk__33176_33181 = G__33193;
count__33177_33182 = G__33194;
i__33178_33183 = G__33195;
continue;
} else {
var property__32317__auto___33196 = cljs.core.first.call(null,seq__33175_33190__$1);
if(cljs.core.truth_((base__32316__auto___33179[property__32317__auto___33196]))){
(devcards.core.DontUpdate.prototype[property__32317__auto___33196] = (base__32316__auto___33179[property__32317__auto___33196]));
} else {
}

var G__33197 = cljs.core.next.call(null,seq__33175_33190__$1);
var G__33198 = null;
var G__33199 = (0);
var G__33200 = (0);
seq__33175_33180 = G__33197;
chunk__33176_33181 = G__33198;
count__33177_33182 = G__33199;
i__33178_33183 = G__33200;
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
var data = (function (){var or__24760__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
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
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__25594__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__25594__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__25594__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__25594__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto____$3);
})(),x__25594__auto____$2);
})(),x__25594__auto____$1);
})(),x__25594__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__32316__auto___33207 = ({"getInitialState": (function (){
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
return this$.setState((function (){var or__24760__auto__ = (function (){var and__24748__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__24748__auto__)){
return this$.state;
} else {
return and__24748__auto__;
}
})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
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
if(cljs.core.truth_((function (){var and__24748__auto__ = data_atom;
if(cljs.core.truth_(and__24748__auto__)){
return id;
} else {
return and__24748__auto__;
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
devcards.core.DevcardBase = React.createClass(base__32316__auto___33207);
}

var seq__33203_33208 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33204_33209 = null;
var count__33205_33210 = (0);
var i__33206_33211 = (0);
while(true){
if((i__33206_33211 < count__33205_33210)){
var property__32317__auto___33212 = cljs.core._nth.call(null,chunk__33204_33209,i__33206_33211);
if(cljs.core.truth_((base__32316__auto___33207[property__32317__auto___33212]))){
(devcards.core.DevcardBase.prototype[property__32317__auto___33212] = (base__32316__auto___33207[property__32317__auto___33212]));
} else {
}

var G__33213 = seq__33203_33208;
var G__33214 = chunk__33204_33209;
var G__33215 = count__33205_33210;
var G__33216 = (i__33206_33211 + (1));
seq__33203_33208 = G__33213;
chunk__33204_33209 = G__33214;
count__33205_33210 = G__33215;
i__33206_33211 = G__33216;
continue;
} else {
var temp__4657__auto___33217 = cljs.core.seq.call(null,seq__33203_33208);
if(temp__4657__auto___33217){
var seq__33203_33218__$1 = temp__4657__auto___33217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33203_33218__$1)){
var c__25571__auto___33219 = cljs.core.chunk_first.call(null,seq__33203_33218__$1);
var G__33220 = cljs.core.chunk_rest.call(null,seq__33203_33218__$1);
var G__33221 = c__25571__auto___33219;
var G__33222 = cljs.core.count.call(null,c__25571__auto___33219);
var G__33223 = (0);
seq__33203_33208 = G__33220;
chunk__33204_33209 = G__33221;
count__33205_33210 = G__33222;
i__33206_33211 = G__33223;
continue;
} else {
var property__32317__auto___33224 = cljs.core.first.call(null,seq__33203_33218__$1);
if(cljs.core.truth_((base__32316__auto___33207[property__32317__auto___33224]))){
(devcards.core.DevcardBase.prototype[property__32317__auto___33224] = (base__32316__auto___33207[property__32317__auto___33224]));
} else {
}

var G__33225 = cljs.core.next.call(null,seq__33203_33218__$1);
var G__33226 = null;
var G__33227 = (0);
var G__33228 = (0);
seq__33203_33208 = G__33225;
chunk__33204_33209 = G__33226;
count__33205_33210 = G__33227;
i__33206_33211 = G__33228;
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
var base__32316__auto___33233 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__24748__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__24748__auto__;
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
devcards.core.DomComponent = React.createClass(base__32316__auto___33233);
}

var seq__33229_33234 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33230_33235 = null;
var count__33231_33236 = (0);
var i__33232_33237 = (0);
while(true){
if((i__33232_33237 < count__33231_33236)){
var property__32317__auto___33238 = cljs.core._nth.call(null,chunk__33230_33235,i__33232_33237);
if(cljs.core.truth_((base__32316__auto___33233[property__32317__auto___33238]))){
(devcards.core.DomComponent.prototype[property__32317__auto___33238] = (base__32316__auto___33233[property__32317__auto___33238]));
} else {
}

var G__33239 = seq__33229_33234;
var G__33240 = chunk__33230_33235;
var G__33241 = count__33231_33236;
var G__33242 = (i__33232_33237 + (1));
seq__33229_33234 = G__33239;
chunk__33230_33235 = G__33240;
count__33231_33236 = G__33241;
i__33232_33237 = G__33242;
continue;
} else {
var temp__4657__auto___33243 = cljs.core.seq.call(null,seq__33229_33234);
if(temp__4657__auto___33243){
var seq__33229_33244__$1 = temp__4657__auto___33243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33229_33244__$1)){
var c__25571__auto___33245 = cljs.core.chunk_first.call(null,seq__33229_33244__$1);
var G__33246 = cljs.core.chunk_rest.call(null,seq__33229_33244__$1);
var G__33247 = c__25571__auto___33245;
var G__33248 = cljs.core.count.call(null,c__25571__auto___33245);
var G__33249 = (0);
seq__33229_33234 = G__33246;
chunk__33230_33235 = G__33247;
count__33231_33236 = G__33248;
i__33232_33237 = G__33249;
continue;
} else {
var property__32317__auto___33250 = cljs.core.first.call(null,seq__33229_33244__$1);
if(cljs.core.truth_((base__32316__auto___33233[property__32317__auto___33250]))){
(devcards.core.DomComponent.prototype[property__32317__auto___33250] = (base__32316__auto___33233[property__32317__auto___33250]));
} else {
}

var G__33251 = cljs.core.next.call(null,seq__33229_33244__$1);
var G__33252 = null;
var G__33253 = (0);
var G__33254 = (0);
seq__33229_33234 = G__33251;
chunk__33230_33235 = G__33252;
count__33231_33236 = G__33253;
i__33232_33237 = G__33254;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24760__auto__ = x === true;
if(or__24760__auto__){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = x === false;
if(or__24760__auto____$1){
return or__24760__auto____$1;
} else {
var or__24760__auto____$2 = (x == null);
if(or__24760__auto____$2){
return or__24760__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24760__auto__ = typeof x === 'string';
if(or__24760__auto__){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = (x == null);
if(or__24760__auto____$1){
return or__24760__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__24760__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__33255_SHARP_){
return !(p1__33255_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__33264 = opts;
var map__33264__$1 = ((((!((map__33264 == null)))?((((map__33264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33264):map__33264);
var name = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24760__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__24760__auto__){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = (options == null);
if(or__24760__auto____$1){
return or__24760__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__24760__auto__ = (initial_data == null);
if(or__24760__auto__){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__24760__auto____$1){
return or__24760__auto____$1;
} else {
var or__24760__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__24760__auto____$2){
return or__24760__auto____$2;
} else {
var or__24760__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__24760__auto____$3){
return or__24760__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__33264,map__33264__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__33256_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__33256_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__33264,map__33264__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs33272 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs33272))?sablono.interpreter.attributes.call(null,attrs33272):null),((cljs.core.map_QMARK_.call(null,attrs33272))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33272)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs33276 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33276))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs33276)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs33276))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33276)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs33277 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33277))?sablono.interpreter.attributes.call(null,attrs33277):null),((cljs.core.map_QMARK_.call(null,attrs33277))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33277)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs33278 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33278))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs33278)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs33278))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33278)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__33279_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__33279_SHARP_);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
return cljs.core._lookup.call(null,this__25382__auto____$1,k__25383__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25384__auto__,k33281,else__25385__auto__){
var self__ = this;
var this__25384__auto____$1 = this;
var G__33283 = (((k33281 instanceof cljs.core.Keyword))?k33281.fqn:null);
switch (G__33283) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33281,else__25385__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25396__auto__,writer__25397__auto__,opts__25398__auto__){
var self__ = this;
var this__25396__auto____$1 = this;
var pr_pair__25399__auto__ = ((function (this__25396__auto____$1){
return (function (keyval__25400__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,cljs.core.pr_writer,""," ","",opts__25398__auto__,keyval__25400__auto__);
});})(this__25396__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,pr_pair__25399__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__25398__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33280){
var self__ = this;
var G__33280__$1 = this;
return (new cljs.core.RecordIter((0),G__33280__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25380__auto__){
var self__ = this;
var this__25380__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25376__auto__){
var self__ = this;
var this__25376__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25386__auto__){
var self__ = this;
var this__25386__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
var h__25195__auto__ = self__.__hash;
if(!((h__25195__auto__ == null))){
return h__25195__auto__;
} else {
var h__25195__auto____$1 = cljs.core.hash_imap.call(null,this__25377__auto____$1);
self__.__hash = h__25195__auto____$1;

return h__25195__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25378__auto__,other__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24748__auto__ = other__25379__auto__;
if(cljs.core.truth_(and__24748__auto__)){
var and__24748__auto____$1 = (this__25378__auto____$1.constructor === other__25379__auto__.constructor);
if(and__24748__auto____$1){
return cljs.core.equiv_map.call(null,this__25378__auto____$1,other__25379__auto__);
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25391__auto__,k__25392__auto__){
var self__ = this;
var this__25391__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25392__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25391__auto____$1),self__.__meta),k__25392__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25392__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25389__auto__,k__25390__auto__,G__33280){
var self__ = this;
var this__25389__auto____$1 = this;
var pred__33284 = cljs.core.keyword_identical_QMARK_;
var expr__33285 = k__25390__auto__;
if(cljs.core.truth_(pred__33284.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33285))){
return (new devcards.core.IdentiyOptions(G__33280,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25390__auto__,G__33280),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25394__auto__){
var self__ = this;
var this__25394__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25381__auto__,G__33280){
var self__ = this;
var this__25381__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__33280,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25387__auto__,entry__25388__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25388__auto__)){
return cljs.core._assoc.call(null,this__25387__auto____$1,cljs.core._nth.call(null,entry__25388__auto__,(0)),cljs.core._nth.call(null,entry__25388__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25387__auto____$1,entry__25388__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__25416__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__25416__auto__,writer__25417__auto__){
return cljs.core._write.call(null,writer__25417__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__33282){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33282),null,cljs.core.dissoc.call(null,G__33282,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__33288){
var map__33291 = p__33288;
var map__33291__$1 = ((((!((map__33291 == null)))?((((map__33291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33291):map__33291);
var devcard_opts = map__33291__$1;
var options = cljs.core.get.call(null,map__33291__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__33291,map__33291__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__33291,map__33291__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
return cljs.core._lookup.call(null,this__25382__auto____$1,k__25383__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25384__auto__,k33294,else__25385__auto__){
var self__ = this;
var this__25384__auto____$1 = this;
var G__33296 = (((k33294 instanceof cljs.core.Keyword))?k33294.fqn:null);
switch (G__33296) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33294,else__25385__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25396__auto__,writer__25397__auto__,opts__25398__auto__){
var self__ = this;
var this__25396__auto____$1 = this;
var pr_pair__25399__auto__ = ((function (this__25396__auto____$1){
return (function (keyval__25400__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,cljs.core.pr_writer,""," ","",opts__25398__auto__,keyval__25400__auto__);
});})(this__25396__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,pr_pair__25399__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__25398__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33293){
var self__ = this;
var G__33293__$1 = this;
return (new cljs.core.RecordIter((0),G__33293__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25380__auto__){
var self__ = this;
var this__25380__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25376__auto__){
var self__ = this;
var this__25376__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25386__auto__){
var self__ = this;
var this__25386__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
var h__25195__auto__ = self__.__hash;
if(!((h__25195__auto__ == null))){
return h__25195__auto__;
} else {
var h__25195__auto____$1 = cljs.core.hash_imap.call(null,this__25377__auto____$1);
self__.__hash = h__25195__auto____$1;

return h__25195__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25378__auto__,other__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24748__auto__ = other__25379__auto__;
if(cljs.core.truth_(and__24748__auto__)){
var and__24748__auto____$1 = (this__25378__auto____$1.constructor === other__25379__auto__.constructor);
if(and__24748__auto____$1){
return cljs.core.equiv_map.call(null,this__25378__auto____$1,other__25379__auto__);
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25391__auto__,k__25392__auto__){
var self__ = this;
var this__25391__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25392__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25391__auto____$1),self__.__meta),k__25392__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25392__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25389__auto__,k__25390__auto__,G__33293){
var self__ = this;
var this__25389__auto____$1 = this;
var pred__33297 = cljs.core.keyword_identical_QMARK_;
var expr__33298 = k__25390__auto__;
if(cljs.core.truth_(pred__33297.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33298))){
return (new devcards.core.AtomLikeOptions(G__33293,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25390__auto__,G__33293),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25394__auto__){
var self__ = this;
var this__25394__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25381__auto__,G__33293){
var self__ = this;
var this__25381__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__33293,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25387__auto__,entry__25388__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25388__auto__)){
return cljs.core._assoc.call(null,this__25387__auto____$1,cljs.core._nth.call(null,entry__25388__auto__,(0)),cljs.core._nth.call(null,entry__25388__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25387__auto____$1,entry__25388__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__25416__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__25416__auto__,writer__25417__auto__){
return cljs.core._write.call(null,writer__25417__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__33295){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33295),null,cljs.core.dissoc.call(null,G__33295,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
return cljs.core._lookup.call(null,this__25382__auto____$1,k__25383__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25384__auto__,k33304,else__25385__auto__){
var self__ = this;
var this__25384__auto____$1 = this;
var G__33306 = (((k33304 instanceof cljs.core.Keyword))?k33304.fqn:null);
switch (G__33306) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33304,else__25385__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25396__auto__,writer__25397__auto__,opts__25398__auto__){
var self__ = this;
var this__25396__auto____$1 = this;
var pr_pair__25399__auto__ = ((function (this__25396__auto____$1){
return (function (keyval__25400__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,cljs.core.pr_writer,""," ","",opts__25398__auto__,keyval__25400__auto__);
});})(this__25396__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,pr_pair__25399__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__25398__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33303){
var self__ = this;
var G__33303__$1 = this;
return (new cljs.core.RecordIter((0),G__33303__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25380__auto__){
var self__ = this;
var this__25380__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25376__auto__){
var self__ = this;
var this__25376__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25386__auto__){
var self__ = this;
var this__25386__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
var h__25195__auto__ = self__.__hash;
if(!((h__25195__auto__ == null))){
return h__25195__auto__;
} else {
var h__25195__auto____$1 = cljs.core.hash_imap.call(null,this__25377__auto____$1);
self__.__hash = h__25195__auto____$1;

return h__25195__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25378__auto__,other__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24748__auto__ = other__25379__auto__;
if(cljs.core.truth_(and__24748__auto__)){
var and__24748__auto____$1 = (this__25378__auto____$1.constructor === other__25379__auto__.constructor);
if(and__24748__auto____$1){
return cljs.core.equiv_map.call(null,this__25378__auto____$1,other__25379__auto__);
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25391__auto__,k__25392__auto__){
var self__ = this;
var this__25391__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25392__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25391__auto____$1),self__.__meta),k__25392__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25392__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25389__auto__,k__25390__auto__,G__33303){
var self__ = this;
var this__25389__auto____$1 = this;
var pred__33307 = cljs.core.keyword_identical_QMARK_;
var expr__33308 = k__25390__auto__;
if(cljs.core.truth_(pred__33307.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33308))){
return (new devcards.core.EdnLikeOptions(G__33303,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25390__auto__,G__33303),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25394__auto__){
var self__ = this;
var this__25394__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25381__auto__,G__33303){
var self__ = this;
var this__25381__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__33303,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25387__auto__,entry__25388__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25388__auto__)){
return cljs.core._assoc.call(null,this__25387__auto____$1,cljs.core._nth.call(null,entry__25388__auto__,(0)),cljs.core._nth.call(null,entry__25388__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25387__auto____$1,entry__25388__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__25416__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__25416__auto__,writer__25417__auto__){
return cljs.core._write.call(null,writer__25417__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__33305){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33305),null,cljs.core.dissoc.call(null,G__33305,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__24748__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__24748__auto__){
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
return and__24748__auto__;
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
if((function (){var G__33322 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__33322 == null))){
if((false) || (G__33322.devcards$core$IDevcard$)){
return true;
} else {
if((!G__33322.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__33322);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__33322);
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
var map__33325 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__33325__$1 = ((((!((map__33325 == null)))?((((map__33325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33325):map__33325);
var history = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__33329 = cljs.core.deref.call(null,history_atom);
var map__33329__$1 = ((((!((map__33329 == null)))?((((map__33329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33329):map__33329);
var history = cljs.core.get.call(null,map__33329__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33329__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__33333 = cljs.core.deref.call(null,history_atom);
var map__33333__$1 = ((((!((map__33333 == null)))?((((map__33333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33333):map__33333);
var history = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__33337 = cljs.core.deref.call(null,history_atom);
var map__33337__$1 = ((((!((map__33337 == null)))?((((map__33337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33337):map__33337);
var history = cljs.core.get.call(null,map__33337__$1,new cljs.core.Keyword(null,"history","history",-247395220));
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
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__25594__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__24748__auto__ = data_atom;
if(cljs.core.truth_(and__24748__auto__)){
return id;
} else {
return and__24748__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__33339){
var map__33340 = p__33339;
var map__33340__$1 = ((((!((map__33340 == null)))?((((map__33340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33340):map__33340);
var ha = map__33340__$1;
var pointer = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
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
if(cljs.core.truth_((function (){var or__24760__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__24760__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
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
var _STAR_current_env_STAR_33355 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_33355;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__25685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25688__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25689__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25689__auto__,method_table__25685__auto__,prefer_table__25686__auto__,method_cache__25687__auto__,cached_hierarchy__25688__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs33356 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33356))?sablono.interpreter.attributes.call(null,attrs33356):null),((cljs.core.map_QMARK_.call(null,attrs33356))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33356)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__33357,body){
var map__33361 = p__33357;
var map__33361__$1 = ((((!((map__33361 == null)))?((((map__33361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33361):map__33361);
var message = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs33363 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33363))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs33363)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs33363))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33363)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__33364){
var map__33372 = p__33364;
var map__33372__$1 = ((((!((map__33372 == null)))?((((map__33372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33372):map__33372);
var m = map__33372__$1;
var expected = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs33374 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33374))?sablono.interpreter.attributes.call(null,attrs33374):null),((cljs.core.map_QMARK_.call(null,attrs33374))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33374),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs33381 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs33381))?sablono.interpreter.attributes.call(null,attrs33381):null),((cljs.core.map_QMARK_.call(null,attrs33381))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33381)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs33382 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33382))?sablono.interpreter.attributes.call(null,attrs33382):null),((cljs.core.map_QMARK_.call(null,attrs33382))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33382)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__33383){
var map__33384 = p__33383;
var map__33384__$1 = ((((!((map__33384 == null)))?((((map__33384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33384):map__33384);
var testing_contexts = cljs.core.get.call(null,map__33384__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs33386 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__33384,map__33384__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__33384,map__33384__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__25594__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33386))?sablono.interpreter.attributes.call(null,attrs33386):null),((cljs.core.map_QMARK_.call(null,attrs33386))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33386)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs33395 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__33396,p__33397){
var map__33398 = p__33396;
var map__33398__$1 = ((((!((map__33398 == null)))?((((map__33398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33398):map__33398);
var last_context = cljs.core.get.call(null,map__33398__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__33398__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__33399 = p__33397;
var i = cljs.core.nth.call(null,vec__33399,(0),null);
var t = cljs.core.nth.call(null,vec__33399,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__25594__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33395))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs33395)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs33395))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33395)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__33415){
var map__33416 = p__33415;
var map__33416__$1 = ((((!((map__33416 == null)))?((((map__33416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33416):map__33416);
var type = cljs.core.get.call(null,map__33416__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__33414 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__33414__$1 = ((((!((map__33414 == null)))?((((map__33414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33414):map__33414);
var fail = cljs.core.get.call(null,map__33414__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__33414__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__33414__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1){
return (function (p__33419){
var map__33420 = p__33419;
var map__33420__$1 = ((((!((map__33420 == null)))?((((map__33420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33420):map__33420);
var type = cljs.core.get.call(null,map__33420__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1){
return (function (p__33422){
var map__33423 = p__33422;
var map__33423__$1 = ((((!((map__33423 == null)))?((((map__33423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33423):map__33423);
var type = cljs.core.get.call(null,map__33423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33414,map__33414__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__24760__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
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
devcards.core.test_loop = (function (){var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__){
return (function (state_33513){
var state_val_33514 = (state_33513[(1)]);
if((state_val_33514 === (7))){
var state_33513__$1 = state_33513;
var statearr_33515_33564 = state_33513__$1;
(statearr_33515_33564[(2)] = false);

(statearr_33515_33564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (20))){
var inst_33452 = (state_33513[(7)]);
var inst_33471 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33452);
var state_33513__$1 = state_33513;
var statearr_33516_33565 = state_33513__$1;
(statearr_33516_33565[(2)] = inst_33471);

(statearr_33516_33565[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (27))){
var inst_33488 = (state_33513[(8)]);
var inst_33476 = (state_33513[(9)]);
var inst_33492 = inst_33476.call(null,inst_33488);
var state_33513__$1 = state_33513;
var statearr_33517_33566 = state_33513__$1;
(statearr_33517_33566[(2)] = inst_33492);

(statearr_33517_33566[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (1))){
var state_33513__$1 = state_33513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33513__$1,(2),devcards.core.test_channel);
} else {
if((state_val_33514 === (24))){
var state_33513__$1 = state_33513;
var statearr_33518_33567 = state_33513__$1;
(statearr_33518_33567[(2)] = null);

(statearr_33518_33567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (4))){
var state_33513__$1 = state_33513;
var statearr_33519_33568 = state_33513__$1;
(statearr_33519_33568[(2)] = false);

(statearr_33519_33568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (15))){
var state_33513__$1 = state_33513;
var statearr_33520_33569 = state_33513__$1;
(statearr_33520_33569[(2)] = false);

(statearr_33520_33569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (21))){
var inst_33452 = (state_33513[(7)]);
var state_33513__$1 = state_33513;
var statearr_33521_33570 = state_33513__$1;
(statearr_33521_33570[(2)] = inst_33452);

(statearr_33521_33570[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (13))){
var inst_33511 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33513__$1,inst_33511);
} else {
if((state_val_33514 === (22))){
var inst_33475 = (state_33513[(10)]);
var inst_33474 = (state_33513[(2)]);
var inst_33475__$1 = cljs.core.get.call(null,inst_33474,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_33476 = cljs.core.get.call(null,inst_33474,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_33513__$1 = (function (){var statearr_33522 = state_33513;
(statearr_33522[(10)] = inst_33475__$1);

(statearr_33522[(9)] = inst_33476);

return statearr_33522;
})();
if(cljs.core.truth_(inst_33475__$1)){
var statearr_33523_33571 = state_33513__$1;
(statearr_33523_33571[(1)] = (23));

} else {
var statearr_33524_33572 = state_33513__$1;
(statearr_33524_33572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (29))){
var inst_33502 = (state_33513[(2)]);
var inst_33503 = cljs.test.clear_env_BANG_.call(null);
var state_33513__$1 = (function (){var statearr_33525 = state_33513;
(statearr_33525[(11)] = inst_33502);

(statearr_33525[(12)] = inst_33503);

return statearr_33525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33513__$1,(30),devcards.core.test_channel);
} else {
if((state_val_33514 === (6))){
var state_33513__$1 = state_33513;
var statearr_33526_33573 = state_33513__$1;
(statearr_33526_33573[(2)] = true);

(statearr_33526_33573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (28))){
var inst_33476 = (state_33513[(9)]);
var inst_33494 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_33495 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_33496 = cljs.core.PersistentHashMap.fromArrays(inst_33494,inst_33495);
var inst_33497 = devcards.core.collect_test.call(null,inst_33496);
var inst_33498 = cljs.test.get_current_env.call(null);
var inst_33499 = cljs.core.assoc.call(null,inst_33498,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_33500 = inst_33476.call(null,inst_33499);
var state_33513__$1 = (function (){var statearr_33527 = state_33513;
(statearr_33527[(13)] = inst_33497);

return statearr_33527;
})();
var statearr_33528_33574 = state_33513__$1;
(statearr_33528_33574[(2)] = inst_33500);

(statearr_33528_33574[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (25))){
var inst_33509 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33529_33575 = state_33513__$1;
(statearr_33529_33575[(2)] = inst_33509);

(statearr_33529_33575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (17))){
var state_33513__$1 = state_33513;
var statearr_33530_33576 = state_33513__$1;
(statearr_33530_33576[(2)] = true);

(statearr_33530_33576[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (3))){
var inst_33429 = (state_33513[(14)]);
var inst_33434 = inst_33429.cljs$lang$protocol_mask$partition0$;
var inst_33435 = (inst_33434 & (64));
var inst_33436 = inst_33429.cljs$core$ISeq$;
var inst_33437 = (inst_33435) || (inst_33436);
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33437)){
var statearr_33531_33577 = state_33513__$1;
(statearr_33531_33577[(1)] = (6));

} else {
var statearr_33532_33578 = state_33513__$1;
(statearr_33532_33578[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (12))){
var inst_33452 = (state_33513[(7)]);
var inst_33456 = (inst_33452 == null);
var inst_33457 = cljs.core.not.call(null,inst_33456);
var state_33513__$1 = state_33513;
if(inst_33457){
var statearr_33533_33579 = state_33513__$1;
(statearr_33533_33579[(1)] = (14));

} else {
var statearr_33534_33580 = state_33513__$1;
(statearr_33534_33580[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (2))){
var inst_33429 = (state_33513[(14)]);
var inst_33429__$1 = (state_33513[(2)]);
var inst_33431 = (inst_33429__$1 == null);
var inst_33432 = cljs.core.not.call(null,inst_33431);
var state_33513__$1 = (function (){var statearr_33535 = state_33513;
(statearr_33535[(14)] = inst_33429__$1);

return statearr_33535;
})();
if(inst_33432){
var statearr_33536_33581 = state_33513__$1;
(statearr_33536_33581[(1)] = (3));

} else {
var statearr_33537_33582 = state_33513__$1;
(statearr_33537_33582[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (23))){
var inst_33475 = (state_33513[(10)]);
var inst_33481 = (state_33513[(15)]);
var inst_33481__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_33482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33483 = devcards.core.run_card_tests.call(null,inst_33475);
var inst_33484 = [inst_33483,inst_33481__$1];
var inst_33485 = (new cljs.core.PersistentVector(null,2,(5),inst_33482,inst_33484,null));
var state_33513__$1 = (function (){var statearr_33538 = state_33513;
(statearr_33538[(15)] = inst_33481__$1);

return statearr_33538;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33513__$1,(26),inst_33485);
} else {
if((state_val_33514 === (19))){
var inst_33466 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33539_33583 = state_33513__$1;
(statearr_33539_33583[(2)] = inst_33466);

(statearr_33539_33583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (11))){
var inst_33429 = (state_33513[(14)]);
var inst_33449 = (state_33513[(2)]);
var inst_33450 = cljs.core.get.call(null,inst_33449,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_33451 = cljs.core.get.call(null,inst_33449,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_33452 = inst_33429;
var state_33513__$1 = (function (){var statearr_33540 = state_33513;
(statearr_33540[(16)] = inst_33451);

(statearr_33540[(17)] = inst_33450);

(statearr_33540[(7)] = inst_33452);

return statearr_33540;
})();
var statearr_33541_33584 = state_33513__$1;
(statearr_33541_33584[(2)] = null);

(statearr_33541_33584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (9))){
var inst_33429 = (state_33513[(14)]);
var inst_33446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33429);
var state_33513__$1 = state_33513;
var statearr_33542_33585 = state_33513__$1;
(statearr_33542_33585[(2)] = inst_33446);

(statearr_33542_33585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (5))){
var inst_33444 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33444)){
var statearr_33543_33586 = state_33513__$1;
(statearr_33543_33586[(1)] = (9));

} else {
var statearr_33544_33587 = state_33513__$1;
(statearr_33544_33587[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (14))){
var inst_33452 = (state_33513[(7)]);
var inst_33459 = inst_33452.cljs$lang$protocol_mask$partition0$;
var inst_33460 = (inst_33459 & (64));
var inst_33461 = inst_33452.cljs$core$ISeq$;
var inst_33462 = (inst_33460) || (inst_33461);
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33462)){
var statearr_33545_33588 = state_33513__$1;
(statearr_33545_33588[(1)] = (17));

} else {
var statearr_33546_33589 = state_33513__$1;
(statearr_33546_33589[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (26))){
var inst_33481 = (state_33513[(15)]);
var inst_33487 = (state_33513[(2)]);
var inst_33488 = cljs.core.nth.call(null,inst_33487,(0),null);
var inst_33489 = cljs.core.nth.call(null,inst_33487,(1),null);
var inst_33490 = cljs.core.not_EQ_.call(null,inst_33489,inst_33481);
var state_33513__$1 = (function (){var statearr_33547 = state_33513;
(statearr_33547[(8)] = inst_33488);

return statearr_33547;
})();
if(inst_33490){
var statearr_33548_33590 = state_33513__$1;
(statearr_33548_33590[(1)] = (27));

} else {
var statearr_33549_33591 = state_33513__$1;
(statearr_33549_33591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (16))){
var inst_33469 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33469)){
var statearr_33550_33592 = state_33513__$1;
(statearr_33550_33592[(1)] = (20));

} else {
var statearr_33551_33593 = state_33513__$1;
(statearr_33551_33593[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (30))){
var inst_33505 = (state_33513[(2)]);
var inst_33452 = inst_33505;
var state_33513__$1 = (function (){var statearr_33552 = state_33513;
(statearr_33552[(7)] = inst_33452);

return statearr_33552;
})();
var statearr_33553_33594 = state_33513__$1;
(statearr_33553_33594[(2)] = null);

(statearr_33553_33594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (10))){
var inst_33429 = (state_33513[(14)]);
var state_33513__$1 = state_33513;
var statearr_33554_33595 = state_33513__$1;
(statearr_33554_33595[(2)] = inst_33429);

(statearr_33554_33595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (18))){
var state_33513__$1 = state_33513;
var statearr_33555_33596 = state_33513__$1;
(statearr_33555_33596[(2)] = false);

(statearr_33555_33596[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (8))){
var inst_33441 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33556_33597 = state_33513__$1;
(statearr_33556_33597[(2)] = inst_33441);

(statearr_33556_33597[(1)] = (5));


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
});})(c__28578__auto__))
;
return ((function (switch__28466__auto__,c__28578__auto__){
return (function() {
var devcards$core$state_machine__28467__auto__ = null;
var devcards$core$state_machine__28467__auto____0 = (function (){
var statearr_33560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33560[(0)] = devcards$core$state_machine__28467__auto__);

(statearr_33560[(1)] = (1));

return statearr_33560;
});
var devcards$core$state_machine__28467__auto____1 = (function (state_33513){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_33513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e33561){if((e33561 instanceof Object)){
var ex__28470__auto__ = e33561;
var statearr_33562_33598 = state_33513;
(statearr_33562_33598[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33599 = state_33513;
state_33513 = G__33599;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
devcards$core$state_machine__28467__auto__ = function(state_33513){
switch(arguments.length){
case 0:
return devcards$core$state_machine__28467__auto____0.call(this);
case 1:
return devcards$core$state_machine__28467__auto____1.call(this,state_33513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__28467__auto____0;
devcards$core$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__28467__auto____1;
return devcards$core$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_33563 = f__28579__auto__.call(null);
(statearr_33563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_33563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__32316__auto___33604 = ({"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__32316__auto___33604);
}

var seq__33600_33605 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33601_33606 = null;
var count__33602_33607 = (0);
var i__33603_33608 = (0);
while(true){
if((i__33603_33608 < count__33602_33607)){
var property__32317__auto___33609 = cljs.core._nth.call(null,chunk__33601_33606,i__33603_33608);
if(cljs.core.truth_((base__32316__auto___33604[property__32317__auto___33609]))){
(devcards.core.TestDevcard.prototype[property__32317__auto___33609] = (base__32316__auto___33604[property__32317__auto___33609]));
} else {
}

var G__33610 = seq__33600_33605;
var G__33611 = chunk__33601_33606;
var G__33612 = count__33602_33607;
var G__33613 = (i__33603_33608 + (1));
seq__33600_33605 = G__33610;
chunk__33601_33606 = G__33611;
count__33602_33607 = G__33612;
i__33603_33608 = G__33613;
continue;
} else {
var temp__4657__auto___33614 = cljs.core.seq.call(null,seq__33600_33605);
if(temp__4657__auto___33614){
var seq__33600_33615__$1 = temp__4657__auto___33614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33600_33615__$1)){
var c__25571__auto___33616 = cljs.core.chunk_first.call(null,seq__33600_33615__$1);
var G__33617 = cljs.core.chunk_rest.call(null,seq__33600_33615__$1);
var G__33618 = c__25571__auto___33616;
var G__33619 = cljs.core.count.call(null,c__25571__auto___33616);
var G__33620 = (0);
seq__33600_33605 = G__33617;
chunk__33601_33606 = G__33618;
count__33602_33607 = G__33619;
i__33603_33608 = G__33620;
continue;
} else {
var property__32317__auto___33621 = cljs.core.first.call(null,seq__33600_33615__$1);
if(cljs.core.truth_((base__32316__auto___33604[property__32317__auto___33621]))){
(devcards.core.TestDevcard.prototype[property__32317__auto___33621] = (base__32316__auto___33604[property__32317__auto___33621]));
} else {
}

var G__33622 = cljs.core.next.call(null,seq__33600_33615__$1);
var G__33623 = null;
var G__33624 = (0);
var G__33625 = (0);
seq__33600_33605 = G__33622;
chunk__33601_33606 = G__33623;
count__33602_33607 = G__33624;
i__33603_33608 = G__33625;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__25842__auto__ = [];
var len__25835__auto___33630 = arguments.length;
var i__25836__auto___33631 = (0);
while(true){
if((i__25836__auto___33631 < len__25835__auto___33630)){
args__25842__auto__.push((arguments[i__25836__auto___33631]));

var G__33632 = (i__25836__auto___33631 + (1));
i__25836__auto___33631 = G__33632;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core33627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core33627 = (function (test_thunks,meta33628){
this.test_thunks = test_thunks;
this.meta33628 = meta33628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core33627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33629,meta33628__$1){
var self__ = this;
var _33629__$1 = this;
return (new devcards.core.t_devcards$core33627(self__.test_thunks,meta33628__$1));
});

devcards.core.t_devcards$core33627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33629){
var self__ = this;
var _33629__$1 = this;
return self__.meta33628;
});

devcards.core.t_devcards$core33627.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core33627.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core33627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta33628","meta33628",-1004542663,null)], null);
});

devcards.core.t_devcards$core33627.cljs$lang$type = true;

devcards.core.t_devcards$core33627.cljs$lang$ctorStr = "devcards.core/t_devcards$core33627";

devcards.core.t_devcards$core33627.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"devcards.core/t_devcards$core33627");
});

devcards.core.__GT_t_devcards$core33627 = (function devcards$core$__GT_t_devcards$core33627(test_thunks__$1,meta33628){
return (new devcards.core.t_devcards$core33627(test_thunks__$1,meta33628));
});

}

return (new devcards.core.t_devcards$core33627(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq33626){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33626));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs33634 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33634))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs33634)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs33634))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33634)], null)));
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
return React.render((function (){var attrs33636 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33636))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs33636)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs33636))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33636)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__){
return (function (state_33666){
var state_val_33667 = (state_33666[(1)]);
if((state_val_33667 === (1))){
var inst_33657 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_33666__$1 = state_33666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33666__$1,(2),inst_33657);
} else {
if((state_val_33667 === (2))){
var inst_33659 = (state_33666[(2)]);
var inst_33660 = cljs.core.async.timeout.call(null,(100));
var state_33666__$1 = (function (){var statearr_33668 = state_33666;
(statearr_33668[(7)] = inst_33659);

return statearr_33668;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33666__$1,(3),inst_33660);
} else {
if((state_val_33667 === (3))){
var inst_33662 = (state_33666[(2)]);
var inst_33663 = (function (){return ((function (inst_33662,state_val_33667,c__28578__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_33662,state_val_33667,c__28578__auto__))
})();
var inst_33664 = setTimeout(inst_33663,(0));
var state_33666__$1 = (function (){var statearr_33669 = state_33666;
(statearr_33669[(8)] = inst_33662);

return statearr_33669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33666__$1,inst_33664);
} else {
return null;
}
}
}
});})(c__28578__auto__))
;
return ((function (switch__28466__auto__,c__28578__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__28467__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__28467__auto____0 = (function (){
var statearr_33673 = [null,null,null,null,null,null,null,null,null];
(statearr_33673[(0)] = devcards$core$mount_namespace_$_state_machine__28467__auto__);

(statearr_33673[(1)] = (1));

return statearr_33673;
});
var devcards$core$mount_namespace_$_state_machine__28467__auto____1 = (function (state_33666){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_33666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e33674){if((e33674 instanceof Object)){
var ex__28470__auto__ = e33674;
var statearr_33675_33677 = state_33666;
(statearr_33675_33677[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33678 = state_33666;
state_33666 = G__33678;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__28467__auto__ = function(state_33666){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__28467__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__28467__auto____1.call(this,state_33666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__28467__auto____0;
devcards$core$mount_namespace_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__28467__auto____1;
return devcards$core$mount_namespace_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_33676 = f__28579__auto__.call(null);
(statearr_33676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_33676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1481153820999