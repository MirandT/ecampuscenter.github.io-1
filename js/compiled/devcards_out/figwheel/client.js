// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27316 = cljs.core._EQ_;
var expr__27317 = (function (){var or__16852__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e27320){if((e27320 instanceof Error)){
var e = e27320;
return false;
} else {
throw e27320;

}
}})();
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27316.call(null,"true",expr__27317))){
return true;
} else {
if(cljs.core.truth_(pred__27316.call(null,"false",expr__27317))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27317)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e27322){if((e27322 instanceof Error)){
var e = e27322;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e27322;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17917__auto__ = [];
var len__17910__auto___27324 = arguments.length;
var i__17911__auto___27325 = (0);
while(true){
if((i__17911__auto___27325 < len__17910__auto___27324)){
args__17917__auto__.push((arguments[i__17911__auto___27325]));

var G__27326 = (i__17911__auto___27325 + (1));
i__17911__auto___27325 = G__27326;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27323){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27323));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27327){
var map__27330 = p__27327;
var map__27330__$1 = ((((!((map__27330 == null)))?((((map__27330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27330):map__27330);
var message = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16852__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16840__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16840__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16840__auto__;
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
var c__20416__auto___27492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___27492,ch){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___27492,ch){
return (function (state_27461){
var state_val_27462 = (state_27461[(1)]);
if((state_val_27462 === (7))){
var inst_27457 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27463_27493 = state_27461__$1;
(statearr_27463_27493[(2)] = inst_27457);

(statearr_27463_27493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (1))){
var state_27461__$1 = state_27461;
var statearr_27464_27494 = state_27461__$1;
(statearr_27464_27494[(2)] = null);

(statearr_27464_27494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (4))){
var inst_27414 = (state_27461[(7)]);
var inst_27414__$1 = (state_27461[(2)]);
var state_27461__$1 = (function (){var statearr_27465 = state_27461;
(statearr_27465[(7)] = inst_27414__$1);

return statearr_27465;
})();
if(cljs.core.truth_(inst_27414__$1)){
var statearr_27466_27495 = state_27461__$1;
(statearr_27466_27495[(1)] = (5));

} else {
var statearr_27467_27496 = state_27461__$1;
(statearr_27467_27496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (15))){
var inst_27421 = (state_27461[(8)]);
var inst_27436 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27421);
var inst_27437 = cljs.core.first.call(null,inst_27436);
var inst_27438 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27437);
var inst_27439 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27438)].join('');
var inst_27440 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27439);
var state_27461__$1 = state_27461;
var statearr_27468_27497 = state_27461__$1;
(statearr_27468_27497[(2)] = inst_27440);

(statearr_27468_27497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (13))){
var inst_27445 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27469_27498 = state_27461__$1;
(statearr_27469_27498[(2)] = inst_27445);

(statearr_27469_27498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (6))){
var state_27461__$1 = state_27461;
var statearr_27470_27499 = state_27461__$1;
(statearr_27470_27499[(2)] = null);

(statearr_27470_27499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (17))){
var inst_27443 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27471_27500 = state_27461__$1;
(statearr_27471_27500[(2)] = inst_27443);

(statearr_27471_27500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (3))){
var inst_27459 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27461__$1,inst_27459);
} else {
if((state_val_27462 === (12))){
var inst_27420 = (state_27461[(9)]);
var inst_27434 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27420,opts);
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27434)){
var statearr_27472_27501 = state_27461__$1;
(statearr_27472_27501[(1)] = (15));

} else {
var statearr_27473_27502 = state_27461__$1;
(statearr_27473_27502[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (2))){
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27461__$1,(4),ch);
} else {
if((state_val_27462 === (11))){
var inst_27421 = (state_27461[(8)]);
var inst_27426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27427 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27421);
var inst_27428 = cljs.core.async.timeout.call(null,(1000));
var inst_27429 = [inst_27427,inst_27428];
var inst_27430 = (new cljs.core.PersistentVector(null,2,(5),inst_27426,inst_27429,null));
var state_27461__$1 = state_27461;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27461__$1,(14),inst_27430);
} else {
if((state_val_27462 === (9))){
var inst_27421 = (state_27461[(8)]);
var inst_27447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27448 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27421);
var inst_27449 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27448);
var inst_27450 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27449)].join('');
var inst_27451 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27450);
var state_27461__$1 = (function (){var statearr_27474 = state_27461;
(statearr_27474[(10)] = inst_27447);

return statearr_27474;
})();
var statearr_27475_27503 = state_27461__$1;
(statearr_27475_27503[(2)] = inst_27451);

(statearr_27475_27503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (5))){
var inst_27414 = (state_27461[(7)]);
var inst_27416 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27417 = (new cljs.core.PersistentArrayMap(null,2,inst_27416,null));
var inst_27418 = (new cljs.core.PersistentHashSet(null,inst_27417,null));
var inst_27419 = figwheel.client.focus_msgs.call(null,inst_27418,inst_27414);
var inst_27420 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27419);
var inst_27421 = cljs.core.first.call(null,inst_27419);
var inst_27422 = figwheel.client.autoload_QMARK_.call(null);
var state_27461__$1 = (function (){var statearr_27476 = state_27461;
(statearr_27476[(9)] = inst_27420);

(statearr_27476[(8)] = inst_27421);

return statearr_27476;
})();
if(cljs.core.truth_(inst_27422)){
var statearr_27477_27504 = state_27461__$1;
(statearr_27477_27504[(1)] = (8));

} else {
var statearr_27478_27505 = state_27461__$1;
(statearr_27478_27505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (14))){
var inst_27432 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27479_27506 = state_27461__$1;
(statearr_27479_27506[(2)] = inst_27432);

(statearr_27479_27506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (16))){
var state_27461__$1 = state_27461;
var statearr_27480_27507 = state_27461__$1;
(statearr_27480_27507[(2)] = null);

(statearr_27480_27507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (10))){
var inst_27453 = (state_27461[(2)]);
var state_27461__$1 = (function (){var statearr_27481 = state_27461;
(statearr_27481[(11)] = inst_27453);

return statearr_27481;
})();
var statearr_27482_27508 = state_27461__$1;
(statearr_27482_27508[(2)] = null);

(statearr_27482_27508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (8))){
var inst_27420 = (state_27461[(9)]);
var inst_27424 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27420,opts);
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27424)){
var statearr_27483_27509 = state_27461__$1;
(statearr_27483_27509[(1)] = (11));

} else {
var statearr_27484_27510 = state_27461__$1;
(statearr_27484_27510[(1)] = (12));

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
});})(c__20416__auto___27492,ch))
;
return ((function (switch__20304__auto__,c__20416__auto___27492,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20305__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20305__auto____0 = (function (){
var statearr_27488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27488[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20305__auto__);

(statearr_27488[(1)] = (1));

return statearr_27488;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20305__auto____1 = (function (state_27461){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_27461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e27489){if((e27489 instanceof Object)){
var ex__20308__auto__ = e27489;
var statearr_27490_27511 = state_27461;
(statearr_27490_27511[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27512 = state_27461;
state_27461 = G__27512;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20305__auto__ = function(state_27461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20305__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20305__auto____1.call(this,state_27461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20305__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20305__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___27492,ch))
})();
var state__20418__auto__ = (function (){var statearr_27491 = f__20417__auto__.call(null);
(statearr_27491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___27492);

return statearr_27491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___27492,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27513_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27513_SHARP_));
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
var base_path_27520 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27520){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27518 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27519 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27519;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27518;
}}catch (e27517){if((e27517 instanceof Error)){
var e = e27517;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27520], null));
} else {
var e = e27517;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27520))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27521){
var map__27528 = p__27521;
var map__27528__$1 = ((((!((map__27528 == null)))?((((map__27528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27528):map__27528);
var opts = map__27528__$1;
var build_id = cljs.core.get.call(null,map__27528__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27528,map__27528__$1,opts,build_id){
return (function (p__27530){
var vec__27531 = p__27530;
var map__27532 = cljs.core.nth.call(null,vec__27531,(0),null);
var map__27532__$1 = ((((!((map__27532 == null)))?((((map__27532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27532):map__27532);
var msg = map__27532__$1;
var msg_name = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27531,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27531,map__27532,map__27532__$1,msg,msg_name,_,map__27528,map__27528__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27531,map__27532,map__27532__$1,msg,msg_name,_,map__27528,map__27528__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27528,map__27528__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27538){
var vec__27539 = p__27538;
var map__27540 = cljs.core.nth.call(null,vec__27539,(0),null);
var map__27540__$1 = ((((!((map__27540 == null)))?((((map__27540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27540):map__27540);
var msg = map__27540__$1;
var msg_name = cljs.core.get.call(null,map__27540__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27539,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27542){
var map__27552 = p__27542;
var map__27552__$1 = ((((!((map__27552 == null)))?((((map__27552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27552):map__27552);
var on_compile_warning = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27552,map__27552__$1,on_compile_warning,on_compile_fail){
return (function (p__27554){
var vec__27555 = p__27554;
var map__27556 = cljs.core.nth.call(null,vec__27555,(0),null);
var map__27556__$1 = ((((!((map__27556 == null)))?((((map__27556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27556):map__27556);
var msg = map__27556__$1;
var msg_name = cljs.core.get.call(null,map__27556__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27555,(1));
var pred__27558 = cljs.core._EQ_;
var expr__27559 = msg_name;
if(cljs.core.truth_(pred__27558.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27559))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27558.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27559))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27552,map__27552__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto__,msg_hist,msg_names,msg){
return (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (7))){
var inst_27699 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27699)){
var statearr_27777_27823 = state_27775__$1;
(statearr_27777_27823[(1)] = (8));

} else {
var statearr_27778_27824 = state_27775__$1;
(statearr_27778_27824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (20))){
var inst_27769 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27779_27825 = state_27775__$1;
(statearr_27779_27825[(2)] = inst_27769);

(statearr_27779_27825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (27))){
var inst_27765 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27780_27826 = state_27775__$1;
(statearr_27780_27826[(2)] = inst_27765);

(statearr_27780_27826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (1))){
var inst_27692 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27692)){
var statearr_27781_27827 = state_27775__$1;
(statearr_27781_27827[(1)] = (2));

} else {
var statearr_27782_27828 = state_27775__$1;
(statearr_27782_27828[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (24))){
var inst_27767 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27783_27829 = state_27775__$1;
(statearr_27783_27829[(2)] = inst_27767);

(statearr_27783_27829[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (4))){
var inst_27773 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27775__$1,inst_27773);
} else {
if((state_val_27776 === (15))){
var inst_27771 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27784_27830 = state_27775__$1;
(statearr_27784_27830[(2)] = inst_27771);

(statearr_27784_27830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (21))){
var inst_27730 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27785_27831 = state_27775__$1;
(statearr_27785_27831[(2)] = inst_27730);

(statearr_27785_27831[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (31))){
var inst_27754 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27754)){
var statearr_27786_27832 = state_27775__$1;
(statearr_27786_27832[(1)] = (34));

} else {
var statearr_27787_27833 = state_27775__$1;
(statearr_27787_27833[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (32))){
var inst_27763 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27788_27834 = state_27775__$1;
(statearr_27788_27834[(2)] = inst_27763);

(statearr_27788_27834[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (33))){
var inst_27752 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27789_27835 = state_27775__$1;
(statearr_27789_27835[(2)] = inst_27752);

(statearr_27789_27835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (13))){
var inst_27713 = figwheel.client.heads_up.clear.call(null);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(16),inst_27713);
} else {
if((state_val_27776 === (22))){
var inst_27734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27735 = figwheel.client.heads_up.append_message.call(null,inst_27734);
var state_27775__$1 = state_27775;
var statearr_27790_27836 = state_27775__$1;
(statearr_27790_27836[(2)] = inst_27735);

(statearr_27790_27836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (36))){
var inst_27761 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27791_27837 = state_27775__$1;
(statearr_27791_27837[(2)] = inst_27761);

(statearr_27791_27837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (29))){
var inst_27745 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27792_27838 = state_27775__$1;
(statearr_27792_27838[(2)] = inst_27745);

(statearr_27792_27838[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (6))){
var inst_27694 = (state_27775[(7)]);
var state_27775__$1 = state_27775;
var statearr_27793_27839 = state_27775__$1;
(statearr_27793_27839[(2)] = inst_27694);

(statearr_27793_27839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (28))){
var inst_27741 = (state_27775[(2)]);
var inst_27742 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27743 = figwheel.client.heads_up.display_warning.call(null,inst_27742);
var state_27775__$1 = (function (){var statearr_27794 = state_27775;
(statearr_27794[(8)] = inst_27741);

return statearr_27794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(29),inst_27743);
} else {
if((state_val_27776 === (25))){
var inst_27739 = figwheel.client.heads_up.clear.call(null);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(28),inst_27739);
} else {
if((state_val_27776 === (34))){
var inst_27756 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(37),inst_27756);
} else {
if((state_val_27776 === (17))){
var inst_27721 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27795_27840 = state_27775__$1;
(statearr_27795_27840[(2)] = inst_27721);

(statearr_27795_27840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (3))){
var inst_27711 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27711)){
var statearr_27796_27841 = state_27775__$1;
(statearr_27796_27841[(1)] = (13));

} else {
var statearr_27797_27842 = state_27775__$1;
(statearr_27797_27842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (12))){
var inst_27707 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27798_27843 = state_27775__$1;
(statearr_27798_27843[(2)] = inst_27707);

(statearr_27798_27843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (2))){
var inst_27694 = (state_27775[(7)]);
var inst_27694__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27775__$1 = (function (){var statearr_27799 = state_27775;
(statearr_27799[(7)] = inst_27694__$1);

return statearr_27799;
})();
if(cljs.core.truth_(inst_27694__$1)){
var statearr_27800_27844 = state_27775__$1;
(statearr_27800_27844[(1)] = (5));

} else {
var statearr_27801_27845 = state_27775__$1;
(statearr_27801_27845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (23))){
var inst_27737 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27737)){
var statearr_27802_27846 = state_27775__$1;
(statearr_27802_27846[(1)] = (25));

} else {
var statearr_27803_27847 = state_27775__$1;
(statearr_27803_27847[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (35))){
var state_27775__$1 = state_27775;
var statearr_27804_27848 = state_27775__$1;
(statearr_27804_27848[(2)] = null);

(statearr_27804_27848[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (19))){
var inst_27732 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27732)){
var statearr_27805_27849 = state_27775__$1;
(statearr_27805_27849[(1)] = (22));

} else {
var statearr_27806_27850 = state_27775__$1;
(statearr_27806_27850[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (11))){
var inst_27703 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27807_27851 = state_27775__$1;
(statearr_27807_27851[(2)] = inst_27703);

(statearr_27807_27851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (9))){
var inst_27705 = figwheel.client.heads_up.clear.call(null);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(12),inst_27705);
} else {
if((state_val_27776 === (5))){
var inst_27696 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27775__$1 = state_27775;
var statearr_27808_27852 = state_27775__$1;
(statearr_27808_27852[(2)] = inst_27696);

(statearr_27808_27852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (14))){
var inst_27723 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27723)){
var statearr_27809_27853 = state_27775__$1;
(statearr_27809_27853[(1)] = (18));

} else {
var statearr_27810_27854 = state_27775__$1;
(statearr_27810_27854[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (26))){
var inst_27747 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27747)){
var statearr_27811_27855 = state_27775__$1;
(statearr_27811_27855[(1)] = (30));

} else {
var statearr_27812_27856 = state_27775__$1;
(statearr_27812_27856[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (16))){
var inst_27715 = (state_27775[(2)]);
var inst_27716 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27717 = figwheel.client.format_messages.call(null,inst_27716);
var inst_27718 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27719 = figwheel.client.heads_up.display_error.call(null,inst_27717,inst_27718);
var state_27775__$1 = (function (){var statearr_27813 = state_27775;
(statearr_27813[(9)] = inst_27715);

return statearr_27813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(17),inst_27719);
} else {
if((state_val_27776 === (30))){
var inst_27749 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27750 = figwheel.client.heads_up.display_warning.call(null,inst_27749);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(33),inst_27750);
} else {
if((state_val_27776 === (10))){
var inst_27709 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27814_27857 = state_27775__$1;
(statearr_27814_27857[(2)] = inst_27709);

(statearr_27814_27857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (18))){
var inst_27725 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27726 = figwheel.client.format_messages.call(null,inst_27725);
var inst_27727 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27728 = figwheel.client.heads_up.display_error.call(null,inst_27726,inst_27727);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(21),inst_27728);
} else {
if((state_val_27776 === (37))){
var inst_27758 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27815_27858 = state_27775__$1;
(statearr_27815_27858[(2)] = inst_27758);

(statearr_27815_27858[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (8))){
var inst_27701 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(11),inst_27701);
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
});})(c__20416__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20304__auto__,c__20416__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto____0 = (function (){
var statearr_27819 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27819[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto__);

(statearr_27819[(1)] = (1));

return statearr_27819;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto____1 = (function (state_27775){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_27775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e27820){if((e27820 instanceof Object)){
var ex__20308__auto__ = e27820;
var statearr_27821_27859 = state_27775;
(statearr_27821_27859[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27860 = state_27775;
state_27775 = G__27860;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto__,msg_hist,msg_names,msg))
})();
var state__20418__auto__ = (function (){var statearr_27822 = f__20417__auto__.call(null);
(statearr_27822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto__);

return statearr_27822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto__,msg_hist,msg_names,msg))
);

return c__20416__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20416__auto___27923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___27923,ch){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___27923,ch){
return (function (state_27906){
var state_val_27907 = (state_27906[(1)]);
if((state_val_27907 === (1))){
var state_27906__$1 = state_27906;
var statearr_27908_27924 = state_27906__$1;
(statearr_27908_27924[(2)] = null);

(statearr_27908_27924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (2))){
var state_27906__$1 = state_27906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27906__$1,(4),ch);
} else {
if((state_val_27907 === (3))){
var inst_27904 = (state_27906[(2)]);
var state_27906__$1 = state_27906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27906__$1,inst_27904);
} else {
if((state_val_27907 === (4))){
var inst_27894 = (state_27906[(7)]);
var inst_27894__$1 = (state_27906[(2)]);
var state_27906__$1 = (function (){var statearr_27909 = state_27906;
(statearr_27909[(7)] = inst_27894__$1);

return statearr_27909;
})();
if(cljs.core.truth_(inst_27894__$1)){
var statearr_27910_27925 = state_27906__$1;
(statearr_27910_27925[(1)] = (5));

} else {
var statearr_27911_27926 = state_27906__$1;
(statearr_27911_27926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (5))){
var inst_27894 = (state_27906[(7)]);
var inst_27896 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27894);
var state_27906__$1 = state_27906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27906__$1,(8),inst_27896);
} else {
if((state_val_27907 === (6))){
var state_27906__$1 = state_27906;
var statearr_27912_27927 = state_27906__$1;
(statearr_27912_27927[(2)] = null);

(statearr_27912_27927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (7))){
var inst_27902 = (state_27906[(2)]);
var state_27906__$1 = state_27906;
var statearr_27913_27928 = state_27906__$1;
(statearr_27913_27928[(2)] = inst_27902);

(statearr_27913_27928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (8))){
var inst_27898 = (state_27906[(2)]);
var state_27906__$1 = (function (){var statearr_27914 = state_27906;
(statearr_27914[(8)] = inst_27898);

return statearr_27914;
})();
var statearr_27915_27929 = state_27906__$1;
(statearr_27915_27929[(2)] = null);

(statearr_27915_27929[(1)] = (2));


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
});})(c__20416__auto___27923,ch))
;
return ((function (switch__20304__auto__,c__20416__auto___27923,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20305__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20305__auto____0 = (function (){
var statearr_27919 = [null,null,null,null,null,null,null,null,null];
(statearr_27919[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20305__auto__);

(statearr_27919[(1)] = (1));

return statearr_27919;
});
var figwheel$client$heads_up_plugin_$_state_machine__20305__auto____1 = (function (state_27906){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_27906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e27920){if((e27920 instanceof Object)){
var ex__20308__auto__ = e27920;
var statearr_27921_27930 = state_27906;
(statearr_27921_27930[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27931 = state_27906;
state_27906 = G__27931;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20305__auto__ = function(state_27906){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20305__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20305__auto____1.call(this,state_27906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20305__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20305__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___27923,ch))
})();
var state__20418__auto__ = (function (){var statearr_27922 = f__20417__auto__.call(null);
(statearr_27922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___27923);

return statearr_27922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___27923,ch))
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
var c__20416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto__){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto__){
return (function (state_27952){
var state_val_27953 = (state_27952[(1)]);
if((state_val_27953 === (1))){
var inst_27947 = cljs.core.async.timeout.call(null,(3000));
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27952__$1,(2),inst_27947);
} else {
if((state_val_27953 === (2))){
var inst_27949 = (state_27952[(2)]);
var inst_27950 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27952__$1 = (function (){var statearr_27954 = state_27952;
(statearr_27954[(7)] = inst_27949);

return statearr_27954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27952__$1,inst_27950);
} else {
return null;
}
}
});})(c__20416__auto__))
;
return ((function (switch__20304__auto__,c__20416__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20305__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20305__auto____0 = (function (){
var statearr_27958 = [null,null,null,null,null,null,null,null];
(statearr_27958[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20305__auto__);

(statearr_27958[(1)] = (1));

return statearr_27958;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20305__auto____1 = (function (state_27952){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_27952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e27959){if((e27959 instanceof Object)){
var ex__20308__auto__ = e27959;
var statearr_27960_27962 = state_27952;
(statearr_27960_27962[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27963 = state_27952;
state_27952 = G__27963;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20305__auto__ = function(state_27952){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20305__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20305__auto____1.call(this,state_27952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20305__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20305__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto__))
})();
var state__20418__auto__ = (function (){var statearr_27961 = f__20417__auto__.call(null);
(statearr_27961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto__);

return statearr_27961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto__))
);

return c__20416__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27964){
var map__27971 = p__27964;
var map__27971__$1 = ((((!((map__27971 == null)))?((((map__27971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27971):map__27971);
var ed = map__27971__$1;
var formatted_exception = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27973_27977 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27974_27978 = null;
var count__27975_27979 = (0);
var i__27976_27980 = (0);
while(true){
if((i__27976_27980 < count__27975_27979)){
var msg_27981 = cljs.core._nth.call(null,chunk__27974_27978,i__27976_27980);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27981);

var G__27982 = seq__27973_27977;
var G__27983 = chunk__27974_27978;
var G__27984 = count__27975_27979;
var G__27985 = (i__27976_27980 + (1));
seq__27973_27977 = G__27982;
chunk__27974_27978 = G__27983;
count__27975_27979 = G__27984;
i__27976_27980 = G__27985;
continue;
} else {
var temp__4425__auto___27986 = cljs.core.seq.call(null,seq__27973_27977);
if(temp__4425__auto___27986){
var seq__27973_27987__$1 = temp__4425__auto___27986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27973_27987__$1)){
var c__17655__auto___27988 = cljs.core.chunk_first.call(null,seq__27973_27987__$1);
var G__27989 = cljs.core.chunk_rest.call(null,seq__27973_27987__$1);
var G__27990 = c__17655__auto___27988;
var G__27991 = cljs.core.count.call(null,c__17655__auto___27988);
var G__27992 = (0);
seq__27973_27977 = G__27989;
chunk__27974_27978 = G__27990;
count__27975_27979 = G__27991;
i__27976_27980 = G__27992;
continue;
} else {
var msg_27993 = cljs.core.first.call(null,seq__27973_27987__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27993);

var G__27994 = cljs.core.next.call(null,seq__27973_27987__$1);
var G__27995 = null;
var G__27996 = (0);
var G__27997 = (0);
seq__27973_27977 = G__27994;
chunk__27974_27978 = G__27995;
count__27975_27979 = G__27996;
i__27976_27980 = G__27997;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27998){
var map__28001 = p__27998;
var map__28001__$1 = ((((!((map__28001 == null)))?((((map__28001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28001):map__28001);
var w = map__28001__$1;
var message = cljs.core.get.call(null,map__28001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16840__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16840__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16840__auto__;
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
var seq__28009 = cljs.core.seq.call(null,plugins);
var chunk__28010 = null;
var count__28011 = (0);
var i__28012 = (0);
while(true){
if((i__28012 < count__28011)){
var vec__28013 = cljs.core._nth.call(null,chunk__28010,i__28012);
var k = cljs.core.nth.call(null,vec__28013,(0),null);
var plugin = cljs.core.nth.call(null,vec__28013,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28015 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28009,chunk__28010,count__28011,i__28012,pl_28015,vec__28013,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28015.call(null,msg_hist);
});})(seq__28009,chunk__28010,count__28011,i__28012,pl_28015,vec__28013,k,plugin))
);
} else {
}

var G__28016 = seq__28009;
var G__28017 = chunk__28010;
var G__28018 = count__28011;
var G__28019 = (i__28012 + (1));
seq__28009 = G__28016;
chunk__28010 = G__28017;
count__28011 = G__28018;
i__28012 = G__28019;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28009);
if(temp__4425__auto__){
var seq__28009__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28009__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__28009__$1);
var G__28020 = cljs.core.chunk_rest.call(null,seq__28009__$1);
var G__28021 = c__17655__auto__;
var G__28022 = cljs.core.count.call(null,c__17655__auto__);
var G__28023 = (0);
seq__28009 = G__28020;
chunk__28010 = G__28021;
count__28011 = G__28022;
i__28012 = G__28023;
continue;
} else {
var vec__28014 = cljs.core.first.call(null,seq__28009__$1);
var k = cljs.core.nth.call(null,vec__28014,(0),null);
var plugin = cljs.core.nth.call(null,vec__28014,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28024 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28009,chunk__28010,count__28011,i__28012,pl_28024,vec__28014,k,plugin,seq__28009__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28024.call(null,msg_hist);
});})(seq__28009,chunk__28010,count__28011,i__28012,pl_28024,vec__28014,k,plugin,seq__28009__$1,temp__4425__auto__))
);
} else {
}

var G__28025 = cljs.core.next.call(null,seq__28009__$1);
var G__28026 = null;
var G__28027 = (0);
var G__28028 = (0);
seq__28009 = G__28025;
chunk__28010 = G__28026;
count__28011 = G__28027;
i__28012 = G__28028;
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
var args28029 = [];
var len__17910__auto___28032 = arguments.length;
var i__17911__auto___28033 = (0);
while(true){
if((i__17911__auto___28033 < len__17910__auto___28032)){
args28029.push((arguments[i__17911__auto___28033]));

var G__28034 = (i__17911__auto___28033 + (1));
i__17911__auto___28033 = G__28034;
continue;
} else {
}
break;
}

var G__28031 = args28029.length;
switch (G__28031) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28029.length)].join('')));

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
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

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
var args__17917__auto__ = [];
var len__17910__auto___28040 = arguments.length;
var i__17911__auto___28041 = (0);
while(true){
if((i__17911__auto___28041 < len__17910__auto___28040)){
args__17917__auto__.push((arguments[i__17911__auto___28041]));

var G__28042 = (i__17911__auto___28041 + (1));
i__17911__auto___28041 = G__28042;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28037){
var map__28038 = p__28037;
var map__28038__$1 = ((((!((map__28038 == null)))?((((map__28038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28038):map__28038);
var opts = map__28038__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28036){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28036));
});

//# sourceMappingURL=client.js.map?rel=1453415058126