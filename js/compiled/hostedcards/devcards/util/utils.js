// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__7392__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14278_14280 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14279_14281 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14278_14280,_STAR_print_fn_STAR_14279_14281,sb__7392__auto__){
return (function (x__7393__auto__){
return sb__7392__auto__.append(x__7393__auto__);
});})(_STAR_print_newline_STAR_14278_14280,_STAR_print_fn_STAR_14279_14281,sb__7392__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14279_14281;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14278_14280;
}
return [cljs.core.str(sb__7392__auto__)].join('');
}catch (e14276){if((e14276 instanceof Error)){
var e1 = e14276;
try{return obj.toString();
}catch (e14277){if((e14277 instanceof Error)){
var e2 = e14277;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e14277;

}
}} else {
throw e14276;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_14283 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str(code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_14283;
}});
