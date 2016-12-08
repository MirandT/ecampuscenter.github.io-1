// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.edn_renderer');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('devcards.util.utils');
if(typeof devcards.util.edn_renderer._STAR_key_counter_STAR_ !== 'undefined'){
} else {
devcards.util.edn_renderer._STAR_key_counter_STAR_ = null;
}
devcards.util.edn_renderer.get_key = (function devcards$util$edn_renderer$get_key(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer._STAR_key_counter_STAR_,cljs.core.inc);

return [cljs.core.str("k-"),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.util.edn_renderer._STAR_key_counter_STAR_) : cljs.core.deref.call(null,devcards.util.edn_renderer._STAR_key_counter_STAR_)))].join('');
});
devcards.util.edn_renderer.literal_QMARK_ = (function devcards$util$edn_renderer$literal_QMARK_(x){
return (!(cljs.core.seq_QMARK_(x))) && (!(cljs.core.coll_QMARK_(x)));
});
devcards.util.edn_renderer.separator_STAR_ = (function devcards$util$edn_renderer$separator_STAR_(s){
var G__19598 = "span";
var G__19599 = ({"key": devcards.util.edn_renderer.get_key(), "className": "seperator"});
var G__19600 = sablono.interpreter.interpret(s);
return React.createElement(G__19598,G__19599,G__19600);
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function devcards$util$edn_renderer$clearfix_separator_STAR_(s){
var G__19611 = "span";
var G__19612 = ({"key": devcards.util.edn_renderer.get_key()});
var G__19613 = sablono.interpreter.interpret(devcards.util.edn_renderer.separator_STAR_(s));
var G__19614 = (function (){var G__19615 = "span";
var G__19616 = ({"className": "clearfix"});
return React.createElement(G__19615,G__19616);
})();
return React.createElement(G__19611,G__19612,G__19613,G__19614);
});
devcards.util.edn_renderer.separate_fn = (function devcards$util$edn_renderer$separate_fn(coll){
if(!(cljs.core.every_QMARK_(devcards.util.edn_renderer.literal_QMARK_,coll))){
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
return devcards.util.edn_renderer.separator_STAR_;
}
});
devcards.util.edn_renderer.interpose_separator = (function devcards$util$edn_renderer$interpose_separator(rct_coll,s,sep_fn){
return cljs.core.to_array(cljs.core.cons(cljs.core.first(rct_coll),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (sep_fn.cljs$core$IFn$_invoke$arity$1 ? sep_fn.cljs$core$IFn$_invoke$arity$1(s) : sep_fn.call(null,s));
})),cljs.core.rest(rct_coll))));
});
devcards.util.edn_renderer.literal = (function devcards$util$edn_renderer$literal(class$,x){
var G__19620 = "span";
var G__19621 = ({"className": class$, "key": devcards.util.edn_renderer.get_key()});
var G__19622 = sablono.interpreter.interpret(devcards.util.utils.pprint_str(x));
return React.createElement(G__19620,G__19621,G__19622);
});
devcards.util.edn_renderer.html_val = (function devcards$util$edn_renderer$html_val(index,v){
var G__19626 = "span";
var G__19627 = ({"key": index});
var G__19628 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__19626,G__19627,G__19628);
});
devcards.util.edn_renderer.join_html = (function devcards$util$edn_renderer$join_html(separator,coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_val,coll)),separator,devcards.util.edn_renderer.separate_fn(coll));
});
devcards.util.edn_renderer.html_keyval = (function devcards$util$edn_renderer$html_keyval(p__19629){
var vec__19637 = p__19629;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19637,(1),null);
var G__19640 = "span";
var G__19641 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0)), "className": "keyval"});
var G__19642 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(k) : devcards.util.edn_renderer.html.call(null,k)));
var G__19643 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__19640,G__19641,G__19642,G__19643);
});
devcards.util.edn_renderer.html_keyvals = (function devcards$util$edn_renderer$html_keyvals(coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn(cljs.core.vals(coll)));
});
devcards.util.edn_renderer.open_close = (function devcards$util$edn_renderer$open_close(class_str,opener,closer,rct_coll){
var G__19658 = "span";
var G__19659 = ({"className": class_str, "key": [cljs.core.str(cljs.core.hash(rct_coll))].join('')});
var G__19660 = (function (){var G__19663 = "span";
var G__19664 = ({"key": (1), "className": "opener"});
var G__19665 = sablono.interpreter.interpret(opener);
return React.createElement(G__19663,G__19664,G__19665);
})();
var G__19661 = (function (){var G__19666 = "span";
var G__19667 = ({"key": (2), "className": "contents"});
var G__19668 = sablono.interpreter.interpret(rct_coll);
return React.createElement(G__19666,G__19667,G__19668);
})();
var G__19662 = (function (){var G__19669 = "span";
var G__19670 = ({"key": (3), "className": "closer"});
var G__19671 = sablono.interpreter.interpret(closer);
return React.createElement(G__19669,G__19670,G__19671);
})();
return React.createElement(G__19658,G__19659,G__19660,G__19661,G__19662);
});
devcards.util.edn_renderer.html_collection = (function devcards$util$edn_renderer$html_collection(class$,opener,closer,coll){
return devcards.util.edn_renderer.open_close([cljs.core.str("collection "),cljs.core.str(class$)].join(''),opener,closer,devcards.util.edn_renderer.join_html(" ",coll));
});
devcards.util.edn_renderer.html_map = (function devcards$util$edn_renderer$html_map(coll){
return devcards.util.edn_renderer.open_close("collection map","{","}",devcards.util.edn_renderer.html_keyvals(coll));
});
devcards.util.edn_renderer.html_string = (function devcards$util$edn_renderer$html_string(s){
return devcards.util.edn_renderer.open_close("string","\"","\"",s);
});
devcards.util.edn_renderer.html = (function devcards$util$edn_renderer$html(x){
if(typeof x === 'number'){
return devcards.util.edn_renderer.literal("number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return devcards.util.edn_renderer.literal("keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return devcards.util.edn_renderer.literal("symbol",x);
} else {
if(typeof x === 'string'){
return devcards.util.edn_renderer.html_string(x);
} else {
if(cljs.core.map_QMARK_(x)){
return devcards.util.edn_renderer.html_map(x);
} else {
if(cljs.core.set_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("set","#{","}",x);
} else {
if(cljs.core.vector_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("vector","[","]",x);
} else {
if(cljs.core.seq_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("seq","(",")",x);
} else {
return devcards.util.edn_renderer.literal("literal",x);

}
}
}
}
}
}
}
}
});
devcards.util.edn_renderer.html_edn = (function devcards$util$edn_renderer$html_edn(e){
var _STAR_key_counter_STAR_19676 = devcards.util.edn_renderer._STAR_key_counter_STAR_;
devcards.util.edn_renderer._STAR_key_counter_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));

try{var G__19677 = "div";
var G__19678 = ({"key": "devcards-edn-block", "className": "com-rigsomelight-rendered-edn com-rigsomelight-devcards-typog"});
var G__19679 = sablono.interpreter.interpret(devcards.util.edn_renderer.html(e));
return React.createElement(G__19677,G__19678,G__19679);
}finally {devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR_19676;
}});
