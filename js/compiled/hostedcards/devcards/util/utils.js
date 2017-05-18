// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__6736__auto__ = goog.global.document;
if(cljs.core.truth_(temp__6736__auto__)){
var doc = temp__6736__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__10518__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18235_18237 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18236_18238 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_18235_18237,_STAR_print_fn_STAR_18236_18238,sb__10518__auto__){
return (function (x__10519__auto__){
return sb__10518__auto__.append(x__10519__auto__);
});})(_STAR_print_newline_STAR_18235_18237,_STAR_print_fn_STAR_18236_18238,sb__10518__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18236_18238;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18235_18237;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10518__auto__)].join('');
}catch (e18233){if((e18233 instanceof Error)){
var e1 = e18233;
try{return obj.toString();
}catch (e18234){if((e18234 instanceof Error)){
var e2 = e18234;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e18234;

}
}} else {
throw e18233;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_18240 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str(code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_18240;
}});
