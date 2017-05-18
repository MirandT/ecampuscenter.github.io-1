// Compiled by ClojureScript 1.9.542 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
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
var _STAR_print_newline_STAR_17277_17279 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17278_17280 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17277_17279,_STAR_print_fn_STAR_17278_17280,sb__10518__auto__){
return (function (x__10519__auto__){
return sb__10518__auto__.append(x__10519__auto__);
});})(_STAR_print_newline_STAR_17277_17279,_STAR_print_fn_STAR_17278_17280,sb__10518__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17278_17280;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17277_17279;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10518__auto__)].join('');
}catch (e17275){if((e17275 instanceof Error)){
var e1 = e17275;
try{return obj.toString();
}catch (e17276){if((e17276 instanceof Error)){
var e2 = e17276;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e17276;

}
}} else {
throw e17275;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_17282 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_17282;
}});
