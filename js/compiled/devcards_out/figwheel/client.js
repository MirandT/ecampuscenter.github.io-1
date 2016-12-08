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
var args39262 = [];
var len__25835__auto___39265 = arguments.length;
var i__25836__auto___39266 = (0);
while(true){
if((i__25836__auto___39266 < len__25835__auto___39265)){
args39262.push((arguments[i__25836__auto___39266]));

var G__39267 = (i__25836__auto___39266 + (1));
i__25836__auto___39266 = G__39267;
continue;
} else {
}
break;
}

var G__39264 = args39262.length;
switch (G__39264) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39262.length)].join('')));

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
var len__25835__auto___39270 = arguments.length;
var i__25836__auto___39271 = (0);
while(true){
if((i__25836__auto___39271 < len__25835__auto___39270)){
args__25842__auto__.push((arguments[i__25836__auto___39271]));

var G__39272 = (i__25836__auto___39271 + (1));
i__25836__auto___39271 = G__39272;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39269){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39269));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___39274 = arguments.length;
var i__25836__auto___39275 = (0);
while(true){
if((i__25836__auto___39275 < len__25835__auto___39274)){
args__25842__auto__.push((arguments[i__25836__auto___39275]));

var G__39276 = (i__25836__auto___39275 + (1));
i__25836__auto___39275 = G__39276;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39273){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39273));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39277 = cljs.core._EQ_;
var expr__39278 = (function (){var or__24760__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39281){if((e39281 instanceof Error)){
var e = e39281;
return false;
} else {
throw e39281;

}
}})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39277.call(null,"true",expr__39278))){
return true;
} else {
if(cljs.core.truth_(pred__39277.call(null,"false",expr__39278))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39278)].join('')));
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
}catch (e39283){if((e39283 instanceof Error)){
var e = e39283;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39283;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39284){
var map__39287 = p__39284;
var map__39287__$1 = ((((!((map__39287 == null)))?((((map__39287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39287):map__39287);
var message = cljs.core.get.call(null,map__39287__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39287__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28578__auto___39449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___39449,ch){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___39449,ch){
return (function (state_39418){
var state_val_39419 = (state_39418[(1)]);
if((state_val_39419 === (7))){
var inst_39414 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
var statearr_39420_39450 = state_39418__$1;
(statearr_39420_39450[(2)] = inst_39414);

(statearr_39420_39450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (1))){
var state_39418__$1 = state_39418;
var statearr_39421_39451 = state_39418__$1;
(statearr_39421_39451[(2)] = null);

(statearr_39421_39451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (4))){
var inst_39371 = (state_39418[(7)]);
var inst_39371__$1 = (state_39418[(2)]);
var state_39418__$1 = (function (){var statearr_39422 = state_39418;
(statearr_39422[(7)] = inst_39371__$1);

return statearr_39422;
})();
if(cljs.core.truth_(inst_39371__$1)){
var statearr_39423_39452 = state_39418__$1;
(statearr_39423_39452[(1)] = (5));

} else {
var statearr_39424_39453 = state_39418__$1;
(statearr_39424_39453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (15))){
var inst_39378 = (state_39418[(8)]);
var inst_39393 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39378);
var inst_39394 = cljs.core.first.call(null,inst_39393);
var inst_39395 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39394);
var inst_39396 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39395)].join('');
var inst_39397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39396);
var state_39418__$1 = state_39418;
var statearr_39425_39454 = state_39418__$1;
(statearr_39425_39454[(2)] = inst_39397);

(statearr_39425_39454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (13))){
var inst_39402 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
var statearr_39426_39455 = state_39418__$1;
(statearr_39426_39455[(2)] = inst_39402);

(statearr_39426_39455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (6))){
var state_39418__$1 = state_39418;
var statearr_39427_39456 = state_39418__$1;
(statearr_39427_39456[(2)] = null);

(statearr_39427_39456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (17))){
var inst_39400 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
var statearr_39428_39457 = state_39418__$1;
(statearr_39428_39457[(2)] = inst_39400);

(statearr_39428_39457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (3))){
var inst_39416 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39418__$1,inst_39416);
} else {
if((state_val_39419 === (12))){
var inst_39377 = (state_39418[(9)]);
var inst_39391 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39377,opts);
var state_39418__$1 = state_39418;
if(cljs.core.truth_(inst_39391)){
var statearr_39429_39458 = state_39418__$1;
(statearr_39429_39458[(1)] = (15));

} else {
var statearr_39430_39459 = state_39418__$1;
(statearr_39430_39459[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (2))){
var state_39418__$1 = state_39418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39418__$1,(4),ch);
} else {
if((state_val_39419 === (11))){
var inst_39378 = (state_39418[(8)]);
var inst_39383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39384 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39378);
var inst_39385 = cljs.core.async.timeout.call(null,(1000));
var inst_39386 = [inst_39384,inst_39385];
var inst_39387 = (new cljs.core.PersistentVector(null,2,(5),inst_39383,inst_39386,null));
var state_39418__$1 = state_39418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39418__$1,(14),inst_39387);
} else {
if((state_val_39419 === (9))){
var inst_39378 = (state_39418[(8)]);
var inst_39404 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39405 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39378);
var inst_39406 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39405);
var inst_39407 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39406)].join('');
var inst_39408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39407);
var state_39418__$1 = (function (){var statearr_39431 = state_39418;
(statearr_39431[(10)] = inst_39404);

return statearr_39431;
})();
var statearr_39432_39460 = state_39418__$1;
(statearr_39432_39460[(2)] = inst_39408);

(statearr_39432_39460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (5))){
var inst_39371 = (state_39418[(7)]);
var inst_39373 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39374 = (new cljs.core.PersistentArrayMap(null,2,inst_39373,null));
var inst_39375 = (new cljs.core.PersistentHashSet(null,inst_39374,null));
var inst_39376 = figwheel.client.focus_msgs.call(null,inst_39375,inst_39371);
var inst_39377 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39376);
var inst_39378 = cljs.core.first.call(null,inst_39376);
var inst_39379 = figwheel.client.autoload_QMARK_.call(null);
var state_39418__$1 = (function (){var statearr_39433 = state_39418;
(statearr_39433[(8)] = inst_39378);

(statearr_39433[(9)] = inst_39377);

return statearr_39433;
})();
if(cljs.core.truth_(inst_39379)){
var statearr_39434_39461 = state_39418__$1;
(statearr_39434_39461[(1)] = (8));

} else {
var statearr_39435_39462 = state_39418__$1;
(statearr_39435_39462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (14))){
var inst_39389 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
var statearr_39436_39463 = state_39418__$1;
(statearr_39436_39463[(2)] = inst_39389);

(statearr_39436_39463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (16))){
var state_39418__$1 = state_39418;
var statearr_39437_39464 = state_39418__$1;
(statearr_39437_39464[(2)] = null);

(statearr_39437_39464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (10))){
var inst_39410 = (state_39418[(2)]);
var state_39418__$1 = (function (){var statearr_39438 = state_39418;
(statearr_39438[(11)] = inst_39410);

return statearr_39438;
})();
var statearr_39439_39465 = state_39418__$1;
(statearr_39439_39465[(2)] = null);

(statearr_39439_39465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (8))){
var inst_39377 = (state_39418[(9)]);
var inst_39381 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39377,opts);
var state_39418__$1 = state_39418;
if(cljs.core.truth_(inst_39381)){
var statearr_39440_39466 = state_39418__$1;
(statearr_39440_39466[(1)] = (11));

} else {
var statearr_39441_39467 = state_39418__$1;
(statearr_39441_39467[(1)] = (12));

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
});})(c__28578__auto___39449,ch))
;
return ((function (switch__28466__auto__,c__28578__auto___39449,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28467__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28467__auto____0 = (function (){
var statearr_39445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39445[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28467__auto__);

(statearr_39445[(1)] = (1));

return statearr_39445;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28467__auto____1 = (function (state_39418){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_39418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e39446){if((e39446 instanceof Object)){
var ex__28470__auto__ = e39446;
var statearr_39447_39468 = state_39418;
(statearr_39447_39468[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39469 = state_39418;
state_39418 = G__39469;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28467__auto__ = function(state_39418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28467__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28467__auto____1.call(this,state_39418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28467__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28467__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___39449,ch))
})();
var state__28580__auto__ = (function (){var statearr_39448 = f__28579__auto__.call(null);
(statearr_39448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___39449);

return statearr_39448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___39449,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39470_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39470_SHARP_));
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
var base_path_39473 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39473){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39472){if((e39472 instanceof Error)){
var e = e39472;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39473], null));
} else {
var e = e39472;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39473))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39474){
var map__39483 = p__39474;
var map__39483__$1 = ((((!((map__39483 == null)))?((((map__39483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39483):map__39483);
var opts = map__39483__$1;
var build_id = cljs.core.get.call(null,map__39483__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39483,map__39483__$1,opts,build_id){
return (function (p__39485){
var vec__39486 = p__39485;
var seq__39487 = cljs.core.seq.call(null,vec__39486);
var first__39488 = cljs.core.first.call(null,seq__39487);
var seq__39487__$1 = cljs.core.next.call(null,seq__39487);
var map__39489 = first__39488;
var map__39489__$1 = ((((!((map__39489 == null)))?((((map__39489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39489):map__39489);
var msg = map__39489__$1;
var msg_name = cljs.core.get.call(null,map__39489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39487__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39486,seq__39487,first__39488,seq__39487__$1,map__39489,map__39489__$1,msg,msg_name,_,map__39483,map__39483__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39486,seq__39487,first__39488,seq__39487__$1,map__39489,map__39489__$1,msg,msg_name,_,map__39483,map__39483__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39483,map__39483__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39497){
var vec__39498 = p__39497;
var seq__39499 = cljs.core.seq.call(null,vec__39498);
var first__39500 = cljs.core.first.call(null,seq__39499);
var seq__39499__$1 = cljs.core.next.call(null,seq__39499);
var map__39501 = first__39500;
var map__39501__$1 = ((((!((map__39501 == null)))?((((map__39501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39501):map__39501);
var msg = map__39501__$1;
var msg_name = cljs.core.get.call(null,map__39501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39499__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39503){
var map__39515 = p__39503;
var map__39515__$1 = ((((!((map__39515 == null)))?((((map__39515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39515):map__39515);
var on_compile_warning = cljs.core.get.call(null,map__39515__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39515__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39515,map__39515__$1,on_compile_warning,on_compile_fail){
return (function (p__39517){
var vec__39518 = p__39517;
var seq__39519 = cljs.core.seq.call(null,vec__39518);
var first__39520 = cljs.core.first.call(null,seq__39519);
var seq__39519__$1 = cljs.core.next.call(null,seq__39519);
var map__39521 = first__39520;
var map__39521__$1 = ((((!((map__39521 == null)))?((((map__39521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39521):map__39521);
var msg = map__39521__$1;
var msg_name = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39519__$1;
var pred__39523 = cljs.core._EQ_;
var expr__39524 = msg_name;
if(cljs.core.truth_(pred__39523.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39524))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39523.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39524))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39515,map__39515__$1,on_compile_warning,on_compile_fail))
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
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__,msg_hist,msg_names,msg){
return (function (state_39752){
var state_val_39753 = (state_39752[(1)]);
if((state_val_39753 === (7))){
var inst_39672 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39672)){
var statearr_39754_39804 = state_39752__$1;
(statearr_39754_39804[(1)] = (8));

} else {
var statearr_39755_39805 = state_39752__$1;
(statearr_39755_39805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (20))){
var inst_39746 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39756_39806 = state_39752__$1;
(statearr_39756_39806[(2)] = inst_39746);

(statearr_39756_39806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (27))){
var inst_39742 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39757_39807 = state_39752__$1;
(statearr_39757_39807[(2)] = inst_39742);

(statearr_39757_39807[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (1))){
var inst_39665 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39665)){
var statearr_39758_39808 = state_39752__$1;
(statearr_39758_39808[(1)] = (2));

} else {
var statearr_39759_39809 = state_39752__$1;
(statearr_39759_39809[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (24))){
var inst_39744 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39760_39810 = state_39752__$1;
(statearr_39760_39810[(2)] = inst_39744);

(statearr_39760_39810[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (4))){
var inst_39750 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39752__$1,inst_39750);
} else {
if((state_val_39753 === (15))){
var inst_39748 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39761_39811 = state_39752__$1;
(statearr_39761_39811[(2)] = inst_39748);

(statearr_39761_39811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (21))){
var inst_39701 = (state_39752[(2)]);
var inst_39702 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39703 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39702);
var state_39752__$1 = (function (){var statearr_39762 = state_39752;
(statearr_39762[(7)] = inst_39701);

return statearr_39762;
})();
var statearr_39763_39812 = state_39752__$1;
(statearr_39763_39812[(2)] = inst_39703);

(statearr_39763_39812[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (31))){
var inst_39731 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39731)){
var statearr_39764_39813 = state_39752__$1;
(statearr_39764_39813[(1)] = (34));

} else {
var statearr_39765_39814 = state_39752__$1;
(statearr_39765_39814[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (32))){
var inst_39740 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39766_39815 = state_39752__$1;
(statearr_39766_39815[(2)] = inst_39740);

(statearr_39766_39815[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (33))){
var inst_39727 = (state_39752[(2)]);
var inst_39728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39729 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39728);
var state_39752__$1 = (function (){var statearr_39767 = state_39752;
(statearr_39767[(8)] = inst_39727);

return statearr_39767;
})();
var statearr_39768_39816 = state_39752__$1;
(statearr_39768_39816[(2)] = inst_39729);

(statearr_39768_39816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (13))){
var inst_39686 = figwheel.client.heads_up.clear.call(null);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(16),inst_39686);
} else {
if((state_val_39753 === (22))){
var inst_39707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39708 = figwheel.client.heads_up.append_warning_message.call(null,inst_39707);
var state_39752__$1 = state_39752;
var statearr_39769_39817 = state_39752__$1;
(statearr_39769_39817[(2)] = inst_39708);

(statearr_39769_39817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (36))){
var inst_39738 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39770_39818 = state_39752__$1;
(statearr_39770_39818[(2)] = inst_39738);

(statearr_39770_39818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (29))){
var inst_39718 = (state_39752[(2)]);
var inst_39719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39719);
var state_39752__$1 = (function (){var statearr_39771 = state_39752;
(statearr_39771[(9)] = inst_39718);

return statearr_39771;
})();
var statearr_39772_39819 = state_39752__$1;
(statearr_39772_39819[(2)] = inst_39720);

(statearr_39772_39819[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (6))){
var inst_39667 = (state_39752[(10)]);
var state_39752__$1 = state_39752;
var statearr_39773_39820 = state_39752__$1;
(statearr_39773_39820[(2)] = inst_39667);

(statearr_39773_39820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (28))){
var inst_39714 = (state_39752[(2)]);
var inst_39715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39716 = figwheel.client.heads_up.display_warning.call(null,inst_39715);
var state_39752__$1 = (function (){var statearr_39774 = state_39752;
(statearr_39774[(11)] = inst_39714);

return statearr_39774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(29),inst_39716);
} else {
if((state_val_39753 === (25))){
var inst_39712 = figwheel.client.heads_up.clear.call(null);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(28),inst_39712);
} else {
if((state_val_39753 === (34))){
var inst_39733 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(37),inst_39733);
} else {
if((state_val_39753 === (17))){
var inst_39692 = (state_39752[(2)]);
var inst_39693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39694 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39693);
var state_39752__$1 = (function (){var statearr_39775 = state_39752;
(statearr_39775[(12)] = inst_39692);

return statearr_39775;
})();
var statearr_39776_39821 = state_39752__$1;
(statearr_39776_39821[(2)] = inst_39694);

(statearr_39776_39821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (3))){
var inst_39684 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39684)){
var statearr_39777_39822 = state_39752__$1;
(statearr_39777_39822[(1)] = (13));

} else {
var statearr_39778_39823 = state_39752__$1;
(statearr_39778_39823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (12))){
var inst_39680 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39779_39824 = state_39752__$1;
(statearr_39779_39824[(2)] = inst_39680);

(statearr_39779_39824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (2))){
var inst_39667 = (state_39752[(10)]);
var inst_39667__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39752__$1 = (function (){var statearr_39780 = state_39752;
(statearr_39780[(10)] = inst_39667__$1);

return statearr_39780;
})();
if(cljs.core.truth_(inst_39667__$1)){
var statearr_39781_39825 = state_39752__$1;
(statearr_39781_39825[(1)] = (5));

} else {
var statearr_39782_39826 = state_39752__$1;
(statearr_39782_39826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (23))){
var inst_39710 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39710)){
var statearr_39783_39827 = state_39752__$1;
(statearr_39783_39827[(1)] = (25));

} else {
var statearr_39784_39828 = state_39752__$1;
(statearr_39784_39828[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (35))){
var state_39752__$1 = state_39752;
var statearr_39785_39829 = state_39752__$1;
(statearr_39785_39829[(2)] = null);

(statearr_39785_39829[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (19))){
var inst_39705 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39705)){
var statearr_39786_39830 = state_39752__$1;
(statearr_39786_39830[(1)] = (22));

} else {
var statearr_39787_39831 = state_39752__$1;
(statearr_39787_39831[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (11))){
var inst_39676 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39788_39832 = state_39752__$1;
(statearr_39788_39832[(2)] = inst_39676);

(statearr_39788_39832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (9))){
var inst_39678 = figwheel.client.heads_up.clear.call(null);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(12),inst_39678);
} else {
if((state_val_39753 === (5))){
var inst_39669 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39752__$1 = state_39752;
var statearr_39789_39833 = state_39752__$1;
(statearr_39789_39833[(2)] = inst_39669);

(statearr_39789_39833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (14))){
var inst_39696 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39696)){
var statearr_39790_39834 = state_39752__$1;
(statearr_39790_39834[(1)] = (18));

} else {
var statearr_39791_39835 = state_39752__$1;
(statearr_39791_39835[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (26))){
var inst_39722 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39752__$1 = state_39752;
if(cljs.core.truth_(inst_39722)){
var statearr_39792_39836 = state_39752__$1;
(statearr_39792_39836[(1)] = (30));

} else {
var statearr_39793_39837 = state_39752__$1;
(statearr_39793_39837[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (16))){
var inst_39688 = (state_39752[(2)]);
var inst_39689 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39690 = figwheel.client.heads_up.display_exception.call(null,inst_39689);
var state_39752__$1 = (function (){var statearr_39794 = state_39752;
(statearr_39794[(13)] = inst_39688);

return statearr_39794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(17),inst_39690);
} else {
if((state_val_39753 === (30))){
var inst_39724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39725 = figwheel.client.heads_up.display_warning.call(null,inst_39724);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(33),inst_39725);
} else {
if((state_val_39753 === (10))){
var inst_39682 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39795_39838 = state_39752__$1;
(statearr_39795_39838[(2)] = inst_39682);

(statearr_39795_39838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (18))){
var inst_39698 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39699 = figwheel.client.heads_up.display_exception.call(null,inst_39698);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(21),inst_39699);
} else {
if((state_val_39753 === (37))){
var inst_39735 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39796_39839 = state_39752__$1;
(statearr_39796_39839[(2)] = inst_39735);

(statearr_39796_39839[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (8))){
var inst_39674 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(11),inst_39674);
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
});})(c__28578__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28466__auto__,c__28578__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto____0 = (function (){
var statearr_39800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39800[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto__);

(statearr_39800[(1)] = (1));

return statearr_39800;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto____1 = (function (state_39752){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_39752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e39801){if((e39801 instanceof Object)){
var ex__28470__auto__ = e39801;
var statearr_39802_39840 = state_39752;
(statearr_39802_39840[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39841 = state_39752;
state_39752 = G__39841;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto__ = function(state_39752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto____1.call(this,state_39752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__,msg_hist,msg_names,msg))
})();
var state__28580__auto__ = (function (){var statearr_39803 = f__28579__auto__.call(null);
(statearr_39803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_39803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,msg_hist,msg_names,msg))
);

return c__28578__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28578__auto___39904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___39904,ch){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___39904,ch){
return (function (state_39887){
var state_val_39888 = (state_39887[(1)]);
if((state_val_39888 === (1))){
var state_39887__$1 = state_39887;
var statearr_39889_39905 = state_39887__$1;
(statearr_39889_39905[(2)] = null);

(statearr_39889_39905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (2))){
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(4),ch);
} else {
if((state_val_39888 === (3))){
var inst_39885 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39887__$1,inst_39885);
} else {
if((state_val_39888 === (4))){
var inst_39875 = (state_39887[(7)]);
var inst_39875__$1 = (state_39887[(2)]);
var state_39887__$1 = (function (){var statearr_39890 = state_39887;
(statearr_39890[(7)] = inst_39875__$1);

return statearr_39890;
})();
if(cljs.core.truth_(inst_39875__$1)){
var statearr_39891_39906 = state_39887__$1;
(statearr_39891_39906[(1)] = (5));

} else {
var statearr_39892_39907 = state_39887__$1;
(statearr_39892_39907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (5))){
var inst_39875 = (state_39887[(7)]);
var inst_39877 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39875);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(8),inst_39877);
} else {
if((state_val_39888 === (6))){
var state_39887__$1 = state_39887;
var statearr_39893_39908 = state_39887__$1;
(statearr_39893_39908[(2)] = null);

(statearr_39893_39908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (7))){
var inst_39883 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39894_39909 = state_39887__$1;
(statearr_39894_39909[(2)] = inst_39883);

(statearr_39894_39909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (8))){
var inst_39879 = (state_39887[(2)]);
var state_39887__$1 = (function (){var statearr_39895 = state_39887;
(statearr_39895[(8)] = inst_39879);

return statearr_39895;
})();
var statearr_39896_39910 = state_39887__$1;
(statearr_39896_39910[(2)] = null);

(statearr_39896_39910[(1)] = (2));


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
});})(c__28578__auto___39904,ch))
;
return ((function (switch__28466__auto__,c__28578__auto___39904,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28467__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28467__auto____0 = (function (){
var statearr_39900 = [null,null,null,null,null,null,null,null,null];
(statearr_39900[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28467__auto__);

(statearr_39900[(1)] = (1));

return statearr_39900;
});
var figwheel$client$heads_up_plugin_$_state_machine__28467__auto____1 = (function (state_39887){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_39887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e39901){if((e39901 instanceof Object)){
var ex__28470__auto__ = e39901;
var statearr_39902_39911 = state_39887;
(statearr_39902_39911[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39912 = state_39887;
state_39887 = G__39912;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28467__auto__ = function(state_39887){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28467__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28467__auto____1.call(this,state_39887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28467__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28467__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___39904,ch))
})();
var state__28580__auto__ = (function (){var statearr_39903 = f__28579__auto__.call(null);
(statearr_39903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___39904);

return statearr_39903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___39904,ch))
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
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__){
return (function (state_39933){
var state_val_39934 = (state_39933[(1)]);
if((state_val_39934 === (1))){
var inst_39928 = cljs.core.async.timeout.call(null,(3000));
var state_39933__$1 = state_39933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39933__$1,(2),inst_39928);
} else {
if((state_val_39934 === (2))){
var inst_39930 = (state_39933[(2)]);
var inst_39931 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39933__$1 = (function (){var statearr_39935 = state_39933;
(statearr_39935[(7)] = inst_39930);

return statearr_39935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39933__$1,inst_39931);
} else {
return null;
}
}
});})(c__28578__auto__))
;
return ((function (switch__28466__auto__,c__28578__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28467__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28467__auto____0 = (function (){
var statearr_39939 = [null,null,null,null,null,null,null,null];
(statearr_39939[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28467__auto__);

(statearr_39939[(1)] = (1));

return statearr_39939;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28467__auto____1 = (function (state_39933){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_39933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e39940){if((e39940 instanceof Object)){
var ex__28470__auto__ = e39940;
var statearr_39941_39943 = state_39933;
(statearr_39941_39943[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39944 = state_39933;
state_39933 = G__39944;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28467__auto__ = function(state_39933){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28467__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28467__auto____1.call(this,state_39933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28467__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28467__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_39942 = f__28579__auto__.call(null);
(statearr_39942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_39942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
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
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39967){
var state_val_39968 = (state_39967[(1)]);
if((state_val_39968 === (1))){
var inst_39961 = cljs.core.async.timeout.call(null,(2000));
var state_39967__$1 = state_39967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39967__$1,(2),inst_39961);
} else {
if((state_val_39968 === (2))){
var inst_39963 = (state_39967[(2)]);
var inst_39964 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39965 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39964);
var state_39967__$1 = (function (){var statearr_39969 = state_39967;
(statearr_39969[(7)] = inst_39963);

return statearr_39969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39967__$1,inst_39965);
} else {
return null;
}
}
});})(c__28578__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28466__auto__,c__28578__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto____0 = (function (){
var statearr_39973 = [null,null,null,null,null,null,null,null];
(statearr_39973[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto__);

(statearr_39973[(1)] = (1));

return statearr_39973;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto____1 = (function (state_39967){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_39967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e39974){if((e39974 instanceof Object)){
var ex__28470__auto__ = e39974;
var statearr_39975_39977 = state_39967;
(statearr_39975_39977[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39978 = state_39967;
state_39967 = G__39978;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto__ = function(state_39967){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto____1.call(this,state_39967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28580__auto__ = (function (){var statearr_39976 = f__28579__auto__.call(null);
(statearr_39976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_39976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,figwheel_version,temp__4657__auto__))
);

return c__28578__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39979){
var map__39983 = p__39979;
var map__39983__$1 = ((((!((map__39983 == null)))?((((map__39983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39983):map__39983);
var file = cljs.core.get.call(null,map__39983__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39983__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39983__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39985 = "";
var G__39985__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39985),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39985);
var G__39985__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39985__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39985__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = line;
if(cljs.core.truth_(and__24748__auto__)){
return column;
} else {
return and__24748__auto__;
}
})())){
return [cljs.core.str(G__39985__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39985__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39986){
var map__39993 = p__39986;
var map__39993__$1 = ((((!((map__39993 == null)))?((((map__39993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39993):map__39993);
var ed = map__39993__$1;
var formatted_exception = cljs.core.get.call(null,map__39993__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39993__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39993__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39995_39999 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39996_40000 = null;
var count__39997_40001 = (0);
var i__39998_40002 = (0);
while(true){
if((i__39998_40002 < count__39997_40001)){
var msg_40003 = cljs.core._nth.call(null,chunk__39996_40000,i__39998_40002);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40003);

var G__40004 = seq__39995_39999;
var G__40005 = chunk__39996_40000;
var G__40006 = count__39997_40001;
var G__40007 = (i__39998_40002 + (1));
seq__39995_39999 = G__40004;
chunk__39996_40000 = G__40005;
count__39997_40001 = G__40006;
i__39998_40002 = G__40007;
continue;
} else {
var temp__4657__auto___40008 = cljs.core.seq.call(null,seq__39995_39999);
if(temp__4657__auto___40008){
var seq__39995_40009__$1 = temp__4657__auto___40008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39995_40009__$1)){
var c__25571__auto___40010 = cljs.core.chunk_first.call(null,seq__39995_40009__$1);
var G__40011 = cljs.core.chunk_rest.call(null,seq__39995_40009__$1);
var G__40012 = c__25571__auto___40010;
var G__40013 = cljs.core.count.call(null,c__25571__auto___40010);
var G__40014 = (0);
seq__39995_39999 = G__40011;
chunk__39996_40000 = G__40012;
count__39997_40001 = G__40013;
i__39998_40002 = G__40014;
continue;
} else {
var msg_40015 = cljs.core.first.call(null,seq__39995_40009__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40015);

var G__40016 = cljs.core.next.call(null,seq__39995_40009__$1);
var G__40017 = null;
var G__40018 = (0);
var G__40019 = (0);
seq__39995_39999 = G__40016;
chunk__39996_40000 = G__40017;
count__39997_40001 = G__40018;
i__39998_40002 = G__40019;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40020){
var map__40023 = p__40020;
var map__40023__$1 = ((((!((map__40023 == null)))?((((map__40023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40023):map__40023);
var w = map__40023__$1;
var message = cljs.core.get.call(null,map__40023__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__40035 = cljs.core.seq.call(null,plugins);
var chunk__40036 = null;
var count__40037 = (0);
var i__40038 = (0);
while(true){
if((i__40038 < count__40037)){
var vec__40039 = cljs.core._nth.call(null,chunk__40036,i__40038);
var k = cljs.core.nth.call(null,vec__40039,(0),null);
var plugin = cljs.core.nth.call(null,vec__40039,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40045 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40035,chunk__40036,count__40037,i__40038,pl_40045,vec__40039,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40045.call(null,msg_hist);
});})(seq__40035,chunk__40036,count__40037,i__40038,pl_40045,vec__40039,k,plugin))
);
} else {
}

var G__40046 = seq__40035;
var G__40047 = chunk__40036;
var G__40048 = count__40037;
var G__40049 = (i__40038 + (1));
seq__40035 = G__40046;
chunk__40036 = G__40047;
count__40037 = G__40048;
i__40038 = G__40049;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40035);
if(temp__4657__auto__){
var seq__40035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40035__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__40035__$1);
var G__40050 = cljs.core.chunk_rest.call(null,seq__40035__$1);
var G__40051 = c__25571__auto__;
var G__40052 = cljs.core.count.call(null,c__25571__auto__);
var G__40053 = (0);
seq__40035 = G__40050;
chunk__40036 = G__40051;
count__40037 = G__40052;
i__40038 = G__40053;
continue;
} else {
var vec__40042 = cljs.core.first.call(null,seq__40035__$1);
var k = cljs.core.nth.call(null,vec__40042,(0),null);
var plugin = cljs.core.nth.call(null,vec__40042,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40054 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40035,chunk__40036,count__40037,i__40038,pl_40054,vec__40042,k,plugin,seq__40035__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40054.call(null,msg_hist);
});})(seq__40035,chunk__40036,count__40037,i__40038,pl_40054,vec__40042,k,plugin,seq__40035__$1,temp__4657__auto__))
);
} else {
}

var G__40055 = cljs.core.next.call(null,seq__40035__$1);
var G__40056 = null;
var G__40057 = (0);
var G__40058 = (0);
seq__40035 = G__40055;
chunk__40036 = G__40056;
count__40037 = G__40057;
i__40038 = G__40058;
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
var args40059 = [];
var len__25835__auto___40066 = arguments.length;
var i__25836__auto___40067 = (0);
while(true){
if((i__25836__auto___40067 < len__25835__auto___40066)){
args40059.push((arguments[i__25836__auto___40067]));

var G__40068 = (i__25836__auto___40067 + (1));
i__25836__auto___40067 = G__40068;
continue;
} else {
}
break;
}

var G__40061 = args40059.length;
switch (G__40061) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40059.length)].join('')));

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

var seq__40062_40070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40063_40071 = null;
var count__40064_40072 = (0);
var i__40065_40073 = (0);
while(true){
if((i__40065_40073 < count__40064_40072)){
var msg_40074 = cljs.core._nth.call(null,chunk__40063_40071,i__40065_40073);
figwheel.client.socket.handle_incoming_message.call(null,msg_40074);

var G__40075 = seq__40062_40070;
var G__40076 = chunk__40063_40071;
var G__40077 = count__40064_40072;
var G__40078 = (i__40065_40073 + (1));
seq__40062_40070 = G__40075;
chunk__40063_40071 = G__40076;
count__40064_40072 = G__40077;
i__40065_40073 = G__40078;
continue;
} else {
var temp__4657__auto___40079 = cljs.core.seq.call(null,seq__40062_40070);
if(temp__4657__auto___40079){
var seq__40062_40080__$1 = temp__4657__auto___40079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40062_40080__$1)){
var c__25571__auto___40081 = cljs.core.chunk_first.call(null,seq__40062_40080__$1);
var G__40082 = cljs.core.chunk_rest.call(null,seq__40062_40080__$1);
var G__40083 = c__25571__auto___40081;
var G__40084 = cljs.core.count.call(null,c__25571__auto___40081);
var G__40085 = (0);
seq__40062_40070 = G__40082;
chunk__40063_40071 = G__40083;
count__40064_40072 = G__40084;
i__40065_40073 = G__40085;
continue;
} else {
var msg_40086 = cljs.core.first.call(null,seq__40062_40080__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40086);

var G__40087 = cljs.core.next.call(null,seq__40062_40080__$1);
var G__40088 = null;
var G__40089 = (0);
var G__40090 = (0);
seq__40062_40070 = G__40087;
chunk__40063_40071 = G__40088;
count__40064_40072 = G__40089;
i__40065_40073 = G__40090;
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
var len__25835__auto___40095 = arguments.length;
var i__25836__auto___40096 = (0);
while(true){
if((i__25836__auto___40096 < len__25835__auto___40095)){
args__25842__auto__.push((arguments[i__25836__auto___40096]));

var G__40097 = (i__25836__auto___40096 + (1));
i__25836__auto___40096 = G__40097;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40092){
var map__40093 = p__40092;
var map__40093__$1 = ((((!((map__40093 == null)))?((((map__40093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40093):map__40093);
var opts = map__40093__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40091){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40091));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40099){if((e40099 instanceof Error)){
var e = e40099;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40099;

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
return (function (p__40103){
var map__40104 = p__40103;
var map__40104__$1 = ((((!((map__40104 == null)))?((((map__40104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40104):map__40104);
var msg_name = cljs.core.get.call(null,map__40104__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1481153829259