// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args38409 = [];
var len__25835__auto___38412 = arguments.length;
var i__25836__auto___38413 = (0);
while(true){
if((i__25836__auto___38413 < len__25835__auto___38412)){
args38409.push((arguments[i__25836__auto___38413]));

var G__38414 = (i__25836__auto___38413 + (1));
i__25836__auto___38413 = G__38414;
continue;
} else {
}
break;
}

var G__38411 = args38409.length;
switch (G__38411) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38409.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___38417 = arguments.length;
var i__25836__auto___38418 = (0);
while(true){
if((i__25836__auto___38418 < len__25835__auto___38417)){
args__25842__auto__.push((arguments[i__25836__auto___38418]));

var G__38419 = (i__25836__auto___38418 + (1));
i__25836__auto___38418 = G__38419;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38416){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38416));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___38421 = arguments.length;
var i__25836__auto___38422 = (0);
while(true){
if((i__25836__auto___38422 < len__25835__auto___38421)){
args__25842__auto__.push((arguments[i__25836__auto___38422]));

var G__38423 = (i__25836__auto___38422 + (1));
i__25836__auto___38422 = G__38423;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38420){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38420));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38424 = cljs.core._EQ_;
var expr__38425 = (function (){var or__24760__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38428){if((e38428 instanceof Error)){
var e = e38428;
return false;
} else {
throw e38428;

}
}})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38424.call(null,"true",expr__38425))){
return true;
} else {
if(cljs.core.truth_(pred__38424.call(null,"false",expr__38425))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38425)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e38430){if((e38430 instanceof Error)){
var e = e38430;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38430;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38431){
var map__38434 = p__38431;
var map__38434__$1 = ((((!((map__38434 == null)))?((((map__38434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38434):map__38434);
var message = cljs.core.get.call(null,map__38434__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38434__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24760__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24748__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24748__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24748__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28577__auto___38596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___38596,ch){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___38596,ch){
return (function (state_38565){
var state_val_38566 = (state_38565[(1)]);
if((state_val_38566 === (7))){
var inst_38561 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38567_38597 = state_38565__$1;
(statearr_38567_38597[(2)] = inst_38561);

(statearr_38567_38597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (1))){
var state_38565__$1 = state_38565;
var statearr_38568_38598 = state_38565__$1;
(statearr_38568_38598[(2)] = null);

(statearr_38568_38598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (4))){
var inst_38518 = (state_38565[(7)]);
var inst_38518__$1 = (state_38565[(2)]);
var state_38565__$1 = (function (){var statearr_38569 = state_38565;
(statearr_38569[(7)] = inst_38518__$1);

return statearr_38569;
})();
if(cljs.core.truth_(inst_38518__$1)){
var statearr_38570_38599 = state_38565__$1;
(statearr_38570_38599[(1)] = (5));

} else {
var statearr_38571_38600 = state_38565__$1;
(statearr_38571_38600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (15))){
var inst_38525 = (state_38565[(8)]);
var inst_38540 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38525);
var inst_38541 = cljs.core.first.call(null,inst_38540);
var inst_38542 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38541);
var inst_38543 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38542)].join('');
var inst_38544 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38543);
var state_38565__$1 = state_38565;
var statearr_38572_38601 = state_38565__$1;
(statearr_38572_38601[(2)] = inst_38544);

(statearr_38572_38601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (13))){
var inst_38549 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38573_38602 = state_38565__$1;
(statearr_38573_38602[(2)] = inst_38549);

(statearr_38573_38602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (6))){
var state_38565__$1 = state_38565;
var statearr_38574_38603 = state_38565__$1;
(statearr_38574_38603[(2)] = null);

(statearr_38574_38603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (17))){
var inst_38547 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38575_38604 = state_38565__$1;
(statearr_38575_38604[(2)] = inst_38547);

(statearr_38575_38604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (3))){
var inst_38563 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38565__$1,inst_38563);
} else {
if((state_val_38566 === (12))){
var inst_38524 = (state_38565[(9)]);
var inst_38538 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38524,opts);
var state_38565__$1 = state_38565;
if(cljs.core.truth_(inst_38538)){
var statearr_38576_38605 = state_38565__$1;
(statearr_38576_38605[(1)] = (15));

} else {
var statearr_38577_38606 = state_38565__$1;
(statearr_38577_38606[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (2))){
var state_38565__$1 = state_38565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38565__$1,(4),ch);
} else {
if((state_val_38566 === (11))){
var inst_38525 = (state_38565[(8)]);
var inst_38530 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38531 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38525);
var inst_38532 = cljs.core.async.timeout.call(null,(1000));
var inst_38533 = [inst_38531,inst_38532];
var inst_38534 = (new cljs.core.PersistentVector(null,2,(5),inst_38530,inst_38533,null));
var state_38565__$1 = state_38565;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38565__$1,(14),inst_38534);
} else {
if((state_val_38566 === (9))){
var inst_38525 = (state_38565[(8)]);
var inst_38551 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38552 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38525);
var inst_38553 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38552);
var inst_38554 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38553)].join('');
var inst_38555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38554);
var state_38565__$1 = (function (){var statearr_38578 = state_38565;
(statearr_38578[(10)] = inst_38551);

return statearr_38578;
})();
var statearr_38579_38607 = state_38565__$1;
(statearr_38579_38607[(2)] = inst_38555);

(statearr_38579_38607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (5))){
var inst_38518 = (state_38565[(7)]);
var inst_38520 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38521 = (new cljs.core.PersistentArrayMap(null,2,inst_38520,null));
var inst_38522 = (new cljs.core.PersistentHashSet(null,inst_38521,null));
var inst_38523 = figwheel.client.focus_msgs.call(null,inst_38522,inst_38518);
var inst_38524 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38523);
var inst_38525 = cljs.core.first.call(null,inst_38523);
var inst_38526 = figwheel.client.autoload_QMARK_.call(null);
var state_38565__$1 = (function (){var statearr_38580 = state_38565;
(statearr_38580[(8)] = inst_38525);

(statearr_38580[(9)] = inst_38524);

return statearr_38580;
})();
if(cljs.core.truth_(inst_38526)){
var statearr_38581_38608 = state_38565__$1;
(statearr_38581_38608[(1)] = (8));

} else {
var statearr_38582_38609 = state_38565__$1;
(statearr_38582_38609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (14))){
var inst_38536 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38583_38610 = state_38565__$1;
(statearr_38583_38610[(2)] = inst_38536);

(statearr_38583_38610[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (16))){
var state_38565__$1 = state_38565;
var statearr_38584_38611 = state_38565__$1;
(statearr_38584_38611[(2)] = null);

(statearr_38584_38611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (10))){
var inst_38557 = (state_38565[(2)]);
var state_38565__$1 = (function (){var statearr_38585 = state_38565;
(statearr_38585[(11)] = inst_38557);

return statearr_38585;
})();
var statearr_38586_38612 = state_38565__$1;
(statearr_38586_38612[(2)] = null);

(statearr_38586_38612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (8))){
var inst_38524 = (state_38565[(9)]);
var inst_38528 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38524,opts);
var state_38565__$1 = state_38565;
if(cljs.core.truth_(inst_38528)){
var statearr_38587_38613 = state_38565__$1;
(statearr_38587_38613[(1)] = (11));

} else {
var statearr_38588_38614 = state_38565__$1;
(statearr_38588_38614[(1)] = (12));

}

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
});})(c__28577__auto___38596,ch))
;
return ((function (switch__28465__auto__,c__28577__auto___38596,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_38592 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38592[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__);

(statearr_38592[(1)] = (1));

return statearr_38592;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1 = (function (state_38565){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_38565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e38593){if((e38593 instanceof Object)){
var ex__28469__auto__ = e38593;
var statearr_38594_38615 = state_38565;
(statearr_38594_38615[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38616 = state_38565;
state_38565 = G__38616;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__ = function(state_38565){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1.call(this,state_38565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___38596,ch))
})();
var state__28579__auto__ = (function (){var statearr_38595 = f__28578__auto__.call(null);
(statearr_38595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___38596);

return statearr_38595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___38596,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38617_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38617_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38620 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38620){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38619){if((e38619 instanceof Error)){
var e = e38619;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38620], null));
} else {
var e = e38619;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38620))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38621){
var map__38630 = p__38621;
var map__38630__$1 = ((((!((map__38630 == null)))?((((map__38630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38630):map__38630);
var opts = map__38630__$1;
var build_id = cljs.core.get.call(null,map__38630__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38630,map__38630__$1,opts,build_id){
return (function (p__38632){
var vec__38633 = p__38632;
var seq__38634 = cljs.core.seq.call(null,vec__38633);
var first__38635 = cljs.core.first.call(null,seq__38634);
var seq__38634__$1 = cljs.core.next.call(null,seq__38634);
var map__38636 = first__38635;
var map__38636__$1 = ((((!((map__38636 == null)))?((((map__38636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38636):map__38636);
var msg = map__38636__$1;
var msg_name = cljs.core.get.call(null,map__38636__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38634__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38633,seq__38634,first__38635,seq__38634__$1,map__38636,map__38636__$1,msg,msg_name,_,map__38630,map__38630__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38633,seq__38634,first__38635,seq__38634__$1,map__38636,map__38636__$1,msg,msg_name,_,map__38630,map__38630__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38630,map__38630__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38644){
var vec__38645 = p__38644;
var seq__38646 = cljs.core.seq.call(null,vec__38645);
var first__38647 = cljs.core.first.call(null,seq__38646);
var seq__38646__$1 = cljs.core.next.call(null,seq__38646);
var map__38648 = first__38647;
var map__38648__$1 = ((((!((map__38648 == null)))?((((map__38648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38648):map__38648);
var msg = map__38648__$1;
var msg_name = cljs.core.get.call(null,map__38648__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38646__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38650){
var map__38662 = p__38650;
var map__38662__$1 = ((((!((map__38662 == null)))?((((map__38662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38662):map__38662);
var on_compile_warning = cljs.core.get.call(null,map__38662__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38662__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38662,map__38662__$1,on_compile_warning,on_compile_fail){
return (function (p__38664){
var vec__38665 = p__38664;
var seq__38666 = cljs.core.seq.call(null,vec__38665);
var first__38667 = cljs.core.first.call(null,seq__38666);
var seq__38666__$1 = cljs.core.next.call(null,seq__38666);
var map__38668 = first__38667;
var map__38668__$1 = ((((!((map__38668 == null)))?((((map__38668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38668):map__38668);
var msg = map__38668__$1;
var msg_name = cljs.core.get.call(null,map__38668__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38666__$1;
var pred__38670 = cljs.core._EQ_;
var expr__38671 = msg_name;
if(cljs.core.truth_(pred__38670.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38671))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38670.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38671))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38662,map__38662__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,msg_hist,msg_names,msg){
return (function (state_38899){
var state_val_38900 = (state_38899[(1)]);
if((state_val_38900 === (7))){
var inst_38819 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38819)){
var statearr_38901_38951 = state_38899__$1;
(statearr_38901_38951[(1)] = (8));

} else {
var statearr_38902_38952 = state_38899__$1;
(statearr_38902_38952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (20))){
var inst_38893 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38903_38953 = state_38899__$1;
(statearr_38903_38953[(2)] = inst_38893);

(statearr_38903_38953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (27))){
var inst_38889 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38904_38954 = state_38899__$1;
(statearr_38904_38954[(2)] = inst_38889);

(statearr_38904_38954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (1))){
var inst_38812 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38812)){
var statearr_38905_38955 = state_38899__$1;
(statearr_38905_38955[(1)] = (2));

} else {
var statearr_38906_38956 = state_38899__$1;
(statearr_38906_38956[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (24))){
var inst_38891 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38907_38957 = state_38899__$1;
(statearr_38907_38957[(2)] = inst_38891);

(statearr_38907_38957[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (4))){
var inst_38897 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38899__$1,inst_38897);
} else {
if((state_val_38900 === (15))){
var inst_38895 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38908_38958 = state_38899__$1;
(statearr_38908_38958[(2)] = inst_38895);

(statearr_38908_38958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (21))){
var inst_38848 = (state_38899[(2)]);
var inst_38849 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38850 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38849);
var state_38899__$1 = (function (){var statearr_38909 = state_38899;
(statearr_38909[(7)] = inst_38848);

return statearr_38909;
})();
var statearr_38910_38959 = state_38899__$1;
(statearr_38910_38959[(2)] = inst_38850);

(statearr_38910_38959[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (31))){
var inst_38878 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38878)){
var statearr_38911_38960 = state_38899__$1;
(statearr_38911_38960[(1)] = (34));

} else {
var statearr_38912_38961 = state_38899__$1;
(statearr_38912_38961[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (32))){
var inst_38887 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38913_38962 = state_38899__$1;
(statearr_38913_38962[(2)] = inst_38887);

(statearr_38913_38962[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (33))){
var inst_38874 = (state_38899[(2)]);
var inst_38875 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38876 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38875);
var state_38899__$1 = (function (){var statearr_38914 = state_38899;
(statearr_38914[(8)] = inst_38874);

return statearr_38914;
})();
var statearr_38915_38963 = state_38899__$1;
(statearr_38915_38963[(2)] = inst_38876);

(statearr_38915_38963[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (13))){
var inst_38833 = figwheel.client.heads_up.clear.call(null);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(16),inst_38833);
} else {
if((state_val_38900 === (22))){
var inst_38854 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38855 = figwheel.client.heads_up.append_warning_message.call(null,inst_38854);
var state_38899__$1 = state_38899;
var statearr_38916_38964 = state_38899__$1;
(statearr_38916_38964[(2)] = inst_38855);

(statearr_38916_38964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (36))){
var inst_38885 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38917_38965 = state_38899__$1;
(statearr_38917_38965[(2)] = inst_38885);

(statearr_38917_38965[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (29))){
var inst_38865 = (state_38899[(2)]);
var inst_38866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38867 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38866);
var state_38899__$1 = (function (){var statearr_38918 = state_38899;
(statearr_38918[(9)] = inst_38865);

return statearr_38918;
})();
var statearr_38919_38966 = state_38899__$1;
(statearr_38919_38966[(2)] = inst_38867);

(statearr_38919_38966[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (6))){
var inst_38814 = (state_38899[(10)]);
var state_38899__$1 = state_38899;
var statearr_38920_38967 = state_38899__$1;
(statearr_38920_38967[(2)] = inst_38814);

(statearr_38920_38967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (28))){
var inst_38861 = (state_38899[(2)]);
var inst_38862 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38863 = figwheel.client.heads_up.display_warning.call(null,inst_38862);
var state_38899__$1 = (function (){var statearr_38921 = state_38899;
(statearr_38921[(11)] = inst_38861);

return statearr_38921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(29),inst_38863);
} else {
if((state_val_38900 === (25))){
var inst_38859 = figwheel.client.heads_up.clear.call(null);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(28),inst_38859);
} else {
if((state_val_38900 === (34))){
var inst_38880 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(37),inst_38880);
} else {
if((state_val_38900 === (17))){
var inst_38839 = (state_38899[(2)]);
var inst_38840 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38841 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38840);
var state_38899__$1 = (function (){var statearr_38922 = state_38899;
(statearr_38922[(12)] = inst_38839);

return statearr_38922;
})();
var statearr_38923_38968 = state_38899__$1;
(statearr_38923_38968[(2)] = inst_38841);

(statearr_38923_38968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (3))){
var inst_38831 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38831)){
var statearr_38924_38969 = state_38899__$1;
(statearr_38924_38969[(1)] = (13));

} else {
var statearr_38925_38970 = state_38899__$1;
(statearr_38925_38970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (12))){
var inst_38827 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38926_38971 = state_38899__$1;
(statearr_38926_38971[(2)] = inst_38827);

(statearr_38926_38971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (2))){
var inst_38814 = (state_38899[(10)]);
var inst_38814__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38899__$1 = (function (){var statearr_38927 = state_38899;
(statearr_38927[(10)] = inst_38814__$1);

return statearr_38927;
})();
if(cljs.core.truth_(inst_38814__$1)){
var statearr_38928_38972 = state_38899__$1;
(statearr_38928_38972[(1)] = (5));

} else {
var statearr_38929_38973 = state_38899__$1;
(statearr_38929_38973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (23))){
var inst_38857 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38857)){
var statearr_38930_38974 = state_38899__$1;
(statearr_38930_38974[(1)] = (25));

} else {
var statearr_38931_38975 = state_38899__$1;
(statearr_38931_38975[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (35))){
var state_38899__$1 = state_38899;
var statearr_38932_38976 = state_38899__$1;
(statearr_38932_38976[(2)] = null);

(statearr_38932_38976[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (19))){
var inst_38852 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38852)){
var statearr_38933_38977 = state_38899__$1;
(statearr_38933_38977[(1)] = (22));

} else {
var statearr_38934_38978 = state_38899__$1;
(statearr_38934_38978[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (11))){
var inst_38823 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38935_38979 = state_38899__$1;
(statearr_38935_38979[(2)] = inst_38823);

(statearr_38935_38979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (9))){
var inst_38825 = figwheel.client.heads_up.clear.call(null);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(12),inst_38825);
} else {
if((state_val_38900 === (5))){
var inst_38816 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38899__$1 = state_38899;
var statearr_38936_38980 = state_38899__$1;
(statearr_38936_38980[(2)] = inst_38816);

(statearr_38936_38980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (14))){
var inst_38843 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38843)){
var statearr_38937_38981 = state_38899__$1;
(statearr_38937_38981[(1)] = (18));

} else {
var statearr_38938_38982 = state_38899__$1;
(statearr_38938_38982[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (26))){
var inst_38869 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38869)){
var statearr_38939_38983 = state_38899__$1;
(statearr_38939_38983[(1)] = (30));

} else {
var statearr_38940_38984 = state_38899__$1;
(statearr_38940_38984[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (16))){
var inst_38835 = (state_38899[(2)]);
var inst_38836 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38837 = figwheel.client.heads_up.display_exception.call(null,inst_38836);
var state_38899__$1 = (function (){var statearr_38941 = state_38899;
(statearr_38941[(13)] = inst_38835);

return statearr_38941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(17),inst_38837);
} else {
if((state_val_38900 === (30))){
var inst_38871 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38872 = figwheel.client.heads_up.display_warning.call(null,inst_38871);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(33),inst_38872);
} else {
if((state_val_38900 === (10))){
var inst_38829 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38942_38985 = state_38899__$1;
(statearr_38942_38985[(2)] = inst_38829);

(statearr_38942_38985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (18))){
var inst_38845 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38846 = figwheel.client.heads_up.display_exception.call(null,inst_38845);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(21),inst_38846);
} else {
if((state_val_38900 === (37))){
var inst_38882 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38943_38986 = state_38899__$1;
(statearr_38943_38986[(2)] = inst_38882);

(statearr_38943_38986[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (8))){
var inst_38821 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(11),inst_38821);
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
}
}
}
}
}
}
}
});})(c__28577__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28465__auto__,c__28577__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____0 = (function (){
var statearr_38947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38947[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__);

(statearr_38947[(1)] = (1));

return statearr_38947;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1 = (function (state_38899){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_38899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e38948){if((e38948 instanceof Object)){
var ex__28469__auto__ = e38948;
var statearr_38949_38987 = state_38899;
(statearr_38949_38987[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38988 = state_38899;
state_38899 = G__38988;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__ = function(state_38899){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1.call(this,state_38899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,msg_hist,msg_names,msg))
})();
var state__28579__auto__ = (function (){var statearr_38950 = f__28578__auto__.call(null);
(statearr_38950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_38950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,msg_hist,msg_names,msg))
);

return c__28577__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28577__auto___39051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___39051,ch){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___39051,ch){
return (function (state_39034){
var state_val_39035 = (state_39034[(1)]);
if((state_val_39035 === (1))){
var state_39034__$1 = state_39034;
var statearr_39036_39052 = state_39034__$1;
(statearr_39036_39052[(2)] = null);

(statearr_39036_39052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39035 === (2))){
var state_39034__$1 = state_39034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39034__$1,(4),ch);
} else {
if((state_val_39035 === (3))){
var inst_39032 = (state_39034[(2)]);
var state_39034__$1 = state_39034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39034__$1,inst_39032);
} else {
if((state_val_39035 === (4))){
var inst_39022 = (state_39034[(7)]);
var inst_39022__$1 = (state_39034[(2)]);
var state_39034__$1 = (function (){var statearr_39037 = state_39034;
(statearr_39037[(7)] = inst_39022__$1);

return statearr_39037;
})();
if(cljs.core.truth_(inst_39022__$1)){
var statearr_39038_39053 = state_39034__$1;
(statearr_39038_39053[(1)] = (5));

} else {
var statearr_39039_39054 = state_39034__$1;
(statearr_39039_39054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39035 === (5))){
var inst_39022 = (state_39034[(7)]);
var inst_39024 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39022);
var state_39034__$1 = state_39034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39034__$1,(8),inst_39024);
} else {
if((state_val_39035 === (6))){
var state_39034__$1 = state_39034;
var statearr_39040_39055 = state_39034__$1;
(statearr_39040_39055[(2)] = null);

(statearr_39040_39055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39035 === (7))){
var inst_39030 = (state_39034[(2)]);
var state_39034__$1 = state_39034;
var statearr_39041_39056 = state_39034__$1;
(statearr_39041_39056[(2)] = inst_39030);

(statearr_39041_39056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39035 === (8))){
var inst_39026 = (state_39034[(2)]);
var state_39034__$1 = (function (){var statearr_39042 = state_39034;
(statearr_39042[(8)] = inst_39026);

return statearr_39042;
})();
var statearr_39043_39057 = state_39034__$1;
(statearr_39043_39057[(2)] = null);

(statearr_39043_39057[(1)] = (2));


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
});})(c__28577__auto___39051,ch))
;
return ((function (switch__28465__auto__,c__28577__auto___39051,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_39047 = [null,null,null,null,null,null,null,null,null];
(statearr_39047[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28466__auto__);

(statearr_39047[(1)] = (1));

return statearr_39047;
});
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1 = (function (state_39034){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_39034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e39048){if((e39048 instanceof Object)){
var ex__28469__auto__ = e39048;
var statearr_39049_39058 = state_39034;
(statearr_39049_39058[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39059 = state_39034;
state_39034 = G__39059;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__ = function(state_39034){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1.call(this,state_39034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___39051,ch))
})();
var state__28579__auto__ = (function (){var statearr_39050 = f__28578__auto__.call(null);
(statearr_39050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___39051);

return statearr_39050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___39051,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_39080){
var state_val_39081 = (state_39080[(1)]);
if((state_val_39081 === (1))){
var inst_39075 = cljs.core.async.timeout.call(null,(3000));
var state_39080__$1 = state_39080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39080__$1,(2),inst_39075);
} else {
if((state_val_39081 === (2))){
var inst_39077 = (state_39080[(2)]);
var inst_39078 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39080__$1 = (function (){var statearr_39082 = state_39080;
(statearr_39082[(7)] = inst_39077);

return statearr_39082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39080__$1,inst_39078);
} else {
return null;
}
}
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_39086 = [null,null,null,null,null,null,null,null];
(statearr_39086[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__);

(statearr_39086[(1)] = (1));

return statearr_39086;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1 = (function (state_39080){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_39080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e39087){if((e39087 instanceof Object)){
var ex__28469__auto__ = e39087;
var statearr_39088_39090 = state_39080;
(statearr_39088_39090[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39091 = state_39080;
state_39080 = G__39091;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__ = function(state_39080){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1.call(this,state_39080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_39089 = f__28578__auto__.call(null);
(statearr_39089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_39089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39114){
var state_val_39115 = (state_39114[(1)]);
if((state_val_39115 === (1))){
var inst_39108 = cljs.core.async.timeout.call(null,(2000));
var state_39114__$1 = state_39114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39114__$1,(2),inst_39108);
} else {
if((state_val_39115 === (2))){
var inst_39110 = (state_39114[(2)]);
var inst_39111 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39112 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39111);
var state_39114__$1 = (function (){var statearr_39116 = state_39114;
(statearr_39116[(7)] = inst_39110);

return statearr_39116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39114__$1,inst_39112);
} else {
return null;
}
}
});})(c__28577__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_39120 = [null,null,null,null,null,null,null,null];
(statearr_39120[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__);

(statearr_39120[(1)] = (1));

return statearr_39120;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1 = (function (state_39114){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_39114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e39121){if((e39121 instanceof Object)){
var ex__28469__auto__ = e39121;
var statearr_39122_39124 = state_39114;
(statearr_39122_39124[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39125 = state_39114;
state_39114 = G__39125;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__ = function(state_39114){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1.call(this,state_39114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28579__auto__ = (function (){var statearr_39123 = f__28578__auto__.call(null);
(statearr_39123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_39123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,figwheel_version,temp__4657__auto__))
);

return c__28577__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39126){
var map__39130 = p__39126;
var map__39130__$1 = ((((!((map__39130 == null)))?((((map__39130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39130):map__39130);
var file = cljs.core.get.call(null,map__39130__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39130__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39130__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39132 = "";
var G__39132__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39132),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39132);
var G__39132__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39132__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39132__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = line;
if(cljs.core.truth_(and__24748__auto__)){
return column;
} else {
return and__24748__auto__;
}
})())){
return [cljs.core.str(G__39132__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39132__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39133){
var map__39140 = p__39133;
var map__39140__$1 = ((((!((map__39140 == null)))?((((map__39140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39140):map__39140);
var ed = map__39140__$1;
var formatted_exception = cljs.core.get.call(null,map__39140__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39140__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39140__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39142_39146 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39143_39147 = null;
var count__39144_39148 = (0);
var i__39145_39149 = (0);
while(true){
if((i__39145_39149 < count__39144_39148)){
var msg_39150 = cljs.core._nth.call(null,chunk__39143_39147,i__39145_39149);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39150);

var G__39151 = seq__39142_39146;
var G__39152 = chunk__39143_39147;
var G__39153 = count__39144_39148;
var G__39154 = (i__39145_39149 + (1));
seq__39142_39146 = G__39151;
chunk__39143_39147 = G__39152;
count__39144_39148 = G__39153;
i__39145_39149 = G__39154;
continue;
} else {
var temp__4657__auto___39155 = cljs.core.seq.call(null,seq__39142_39146);
if(temp__4657__auto___39155){
var seq__39142_39156__$1 = temp__4657__auto___39155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39142_39156__$1)){
var c__25571__auto___39157 = cljs.core.chunk_first.call(null,seq__39142_39156__$1);
var G__39158 = cljs.core.chunk_rest.call(null,seq__39142_39156__$1);
var G__39159 = c__25571__auto___39157;
var G__39160 = cljs.core.count.call(null,c__25571__auto___39157);
var G__39161 = (0);
seq__39142_39146 = G__39158;
chunk__39143_39147 = G__39159;
count__39144_39148 = G__39160;
i__39145_39149 = G__39161;
continue;
} else {
var msg_39162 = cljs.core.first.call(null,seq__39142_39156__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39162);

var G__39163 = cljs.core.next.call(null,seq__39142_39156__$1);
var G__39164 = null;
var G__39165 = (0);
var G__39166 = (0);
seq__39142_39146 = G__39163;
chunk__39143_39147 = G__39164;
count__39144_39148 = G__39165;
i__39145_39149 = G__39166;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39167){
var map__39170 = p__39167;
var map__39170__$1 = ((((!((map__39170 == null)))?((((map__39170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39170):map__39170);
var w = map__39170__$1;
var message = cljs.core.get.call(null,map__39170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24748__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24748__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39182 = cljs.core.seq.call(null,plugins);
var chunk__39183 = null;
var count__39184 = (0);
var i__39185 = (0);
while(true){
if((i__39185 < count__39184)){
var vec__39186 = cljs.core._nth.call(null,chunk__39183,i__39185);
var k = cljs.core.nth.call(null,vec__39186,(0),null);
var plugin = cljs.core.nth.call(null,vec__39186,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39192 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39182,chunk__39183,count__39184,i__39185,pl_39192,vec__39186,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39192.call(null,msg_hist);
});})(seq__39182,chunk__39183,count__39184,i__39185,pl_39192,vec__39186,k,plugin))
);
} else {
}

var G__39193 = seq__39182;
var G__39194 = chunk__39183;
var G__39195 = count__39184;
var G__39196 = (i__39185 + (1));
seq__39182 = G__39193;
chunk__39183 = G__39194;
count__39184 = G__39195;
i__39185 = G__39196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39182);
if(temp__4657__auto__){
var seq__39182__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39182__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__39182__$1);
var G__39197 = cljs.core.chunk_rest.call(null,seq__39182__$1);
var G__39198 = c__25571__auto__;
var G__39199 = cljs.core.count.call(null,c__25571__auto__);
var G__39200 = (0);
seq__39182 = G__39197;
chunk__39183 = G__39198;
count__39184 = G__39199;
i__39185 = G__39200;
continue;
} else {
var vec__39189 = cljs.core.first.call(null,seq__39182__$1);
var k = cljs.core.nth.call(null,vec__39189,(0),null);
var plugin = cljs.core.nth.call(null,vec__39189,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39201 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39182,chunk__39183,count__39184,i__39185,pl_39201,vec__39189,k,plugin,seq__39182__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39201.call(null,msg_hist);
});})(seq__39182,chunk__39183,count__39184,i__39185,pl_39201,vec__39189,k,plugin,seq__39182__$1,temp__4657__auto__))
);
} else {
}

var G__39202 = cljs.core.next.call(null,seq__39182__$1);
var G__39203 = null;
var G__39204 = (0);
var G__39205 = (0);
seq__39182 = G__39202;
chunk__39183 = G__39203;
count__39184 = G__39204;
i__39185 = G__39205;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args39206 = [];
var len__25835__auto___39213 = arguments.length;
var i__25836__auto___39214 = (0);
while(true){
if((i__25836__auto___39214 < len__25835__auto___39213)){
args39206.push((arguments[i__25836__auto___39214]));

var G__39215 = (i__25836__auto___39214 + (1));
i__25836__auto___39214 = G__39215;
continue;
} else {
}
break;
}

var G__39208 = args39206.length;
switch (G__39208) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39206.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39209_39217 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39210_39218 = null;
var count__39211_39219 = (0);
var i__39212_39220 = (0);
while(true){
if((i__39212_39220 < count__39211_39219)){
var msg_39221 = cljs.core._nth.call(null,chunk__39210_39218,i__39212_39220);
figwheel.client.socket.handle_incoming_message.call(null,msg_39221);

var G__39222 = seq__39209_39217;
var G__39223 = chunk__39210_39218;
var G__39224 = count__39211_39219;
var G__39225 = (i__39212_39220 + (1));
seq__39209_39217 = G__39222;
chunk__39210_39218 = G__39223;
count__39211_39219 = G__39224;
i__39212_39220 = G__39225;
continue;
} else {
var temp__4657__auto___39226 = cljs.core.seq.call(null,seq__39209_39217);
if(temp__4657__auto___39226){
var seq__39209_39227__$1 = temp__4657__auto___39226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39209_39227__$1)){
var c__25571__auto___39228 = cljs.core.chunk_first.call(null,seq__39209_39227__$1);
var G__39229 = cljs.core.chunk_rest.call(null,seq__39209_39227__$1);
var G__39230 = c__25571__auto___39228;
var G__39231 = cljs.core.count.call(null,c__25571__auto___39228);
var G__39232 = (0);
seq__39209_39217 = G__39229;
chunk__39210_39218 = G__39230;
count__39211_39219 = G__39231;
i__39212_39220 = G__39232;
continue;
} else {
var msg_39233 = cljs.core.first.call(null,seq__39209_39227__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39233);

var G__39234 = cljs.core.next.call(null,seq__39209_39227__$1);
var G__39235 = null;
var G__39236 = (0);
var G__39237 = (0);
seq__39209_39217 = G__39234;
chunk__39210_39218 = G__39235;
count__39211_39219 = G__39236;
i__39212_39220 = G__39237;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25842__auto__ = [];
var len__25835__auto___39242 = arguments.length;
var i__25836__auto___39243 = (0);
while(true){
if((i__25836__auto___39243 < len__25835__auto___39242)){
args__25842__auto__.push((arguments[i__25836__auto___39243]));

var G__39244 = (i__25836__auto___39243 + (1));
i__25836__auto___39243 = G__39244;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39239){
var map__39240 = p__39239;
var map__39240__$1 = ((((!((map__39240 == null)))?((((map__39240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39240):map__39240);
var opts = map__39240__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39238){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39238));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39246){if((e39246 instanceof Error)){
var e = e39246;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39246;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39250){
var map__39251 = p__39250;
var map__39251__$1 = ((((!((map__39251 == null)))?((((map__39251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39251):map__39251);
var msg_name = cljs.core.get.call(null,map__39251__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488930790853