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
try{var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14470_14472 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14471_14473 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14470_14472,_STAR_print_fn_STAR_14471_14473,sb__7395__auto__){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_14470_14472,_STAR_print_fn_STAR_14471_14473,sb__7395__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14471_14473;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14470_14472;
}
return [cljs.core.str(sb__7395__auto__)].join('');
}catch (e14468){if((e14468 instanceof Error)){
var e1 = e14468;
try{return obj.toString();
}catch (e14469){if((e14469 instanceof Error)){
var e2 = e14469;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e14469;

}
}} else {
throw e14468;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_14475 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str(code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_14475;
}});
