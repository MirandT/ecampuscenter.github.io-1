// Compiled by ClojureScript 1.9.229 {}
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
var pred__32208 = cljs.core._EQ_;
var expr__32209 = (function (){var or__18716__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e32212){if((e32212 instanceof Error)){
var e = e32212;
return false;
} else {
throw e32212;

}
}})();
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32208.call(null,"true",expr__32209))){
return true;
} else {
if(cljs.core.truth_(pred__32208.call(null,"false",expr__32209))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32209)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32214){if((e32214 instanceof Error)){
var e = e32214;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32214;

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
var args__19798__auto__ = [];
var len__19791__auto___32216 = arguments.length;
var i__19792__auto___32217 = (0);
while(true){
if((i__19792__auto___32217 < len__19791__auto___32216)){
args__19798__auto__.push((arguments[i__19792__auto___32217]));

var G__32218 = (i__19792__auto___32217 + (1));
i__19792__auto___32217 = G__32218;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq32215){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32215));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32219){
var map__32222 = p__32219;
var map__32222__$1 = ((((!((map__32222 == null)))?((((map__32222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32222):map__32222);
var message = cljs.core.get.call(null,map__32222__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32222__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18716__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18704__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18704__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18704__auto__;
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
var c__22533__auto___32384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___32384,ch){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___32384,ch){
return (function (state_32353){
var state_val_32354 = (state_32353[(1)]);
if((state_val_32354 === (7))){
var inst_32349 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32355_32385 = state_32353__$1;
(statearr_32355_32385[(2)] = inst_32349);

(statearr_32355_32385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (1))){
var state_32353__$1 = state_32353;
var statearr_32356_32386 = state_32353__$1;
(statearr_32356_32386[(2)] = null);

(statearr_32356_32386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (4))){
var inst_32306 = (state_32353[(7)]);
var inst_32306__$1 = (state_32353[(2)]);
var state_32353__$1 = (function (){var statearr_32357 = state_32353;
(statearr_32357[(7)] = inst_32306__$1);

return statearr_32357;
})();
if(cljs.core.truth_(inst_32306__$1)){
var statearr_32358_32387 = state_32353__$1;
(statearr_32358_32387[(1)] = (5));

} else {
var statearr_32359_32388 = state_32353__$1;
(statearr_32359_32388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (15))){
var inst_32313 = (state_32353[(8)]);
var inst_32328 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32313);
var inst_32329 = cljs.core.first.call(null,inst_32328);
var inst_32330 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32329);
var inst_32331 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32330)].join('');
var inst_32332 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32331);
var state_32353__$1 = state_32353;
var statearr_32360_32389 = state_32353__$1;
(statearr_32360_32389[(2)] = inst_32332);

(statearr_32360_32389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (13))){
var inst_32337 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32361_32390 = state_32353__$1;
(statearr_32361_32390[(2)] = inst_32337);

(statearr_32361_32390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (6))){
var state_32353__$1 = state_32353;
var statearr_32362_32391 = state_32353__$1;
(statearr_32362_32391[(2)] = null);

(statearr_32362_32391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (17))){
var inst_32335 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32363_32392 = state_32353__$1;
(statearr_32363_32392[(2)] = inst_32335);

(statearr_32363_32392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (3))){
var inst_32351 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32353__$1,inst_32351);
} else {
if((state_val_32354 === (12))){
var inst_32312 = (state_32353[(9)]);
var inst_32326 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32312,opts);
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32326)){
var statearr_32364_32393 = state_32353__$1;
(statearr_32364_32393[(1)] = (15));

} else {
var statearr_32365_32394 = state_32353__$1;
(statearr_32365_32394[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (2))){
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32353__$1,(4),ch);
} else {
if((state_val_32354 === (11))){
var inst_32313 = (state_32353[(8)]);
var inst_32318 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32319 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32313);
var inst_32320 = cljs.core.async.timeout.call(null,(1000));
var inst_32321 = [inst_32319,inst_32320];
var inst_32322 = (new cljs.core.PersistentVector(null,2,(5),inst_32318,inst_32321,null));
var state_32353__$1 = state_32353;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32353__$1,(14),inst_32322);
} else {
if((state_val_32354 === (9))){
var inst_32313 = (state_32353[(8)]);
var inst_32339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32340 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32313);
var inst_32341 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32340);
var inst_32342 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32341)].join('');
var inst_32343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32342);
var state_32353__$1 = (function (){var statearr_32366 = state_32353;
(statearr_32366[(10)] = inst_32339);

return statearr_32366;
})();
var statearr_32367_32395 = state_32353__$1;
(statearr_32367_32395[(2)] = inst_32343);

(statearr_32367_32395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (5))){
var inst_32306 = (state_32353[(7)]);
var inst_32308 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32309 = (new cljs.core.PersistentArrayMap(null,2,inst_32308,null));
var inst_32310 = (new cljs.core.PersistentHashSet(null,inst_32309,null));
var inst_32311 = figwheel.client.focus_msgs.call(null,inst_32310,inst_32306);
var inst_32312 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32311);
var inst_32313 = cljs.core.first.call(null,inst_32311);
var inst_32314 = figwheel.client.autoload_QMARK_.call(null);
var state_32353__$1 = (function (){var statearr_32368 = state_32353;
(statearr_32368[(8)] = inst_32313);

(statearr_32368[(9)] = inst_32312);

return statearr_32368;
})();
if(cljs.core.truth_(inst_32314)){
var statearr_32369_32396 = state_32353__$1;
(statearr_32369_32396[(1)] = (8));

} else {
var statearr_32370_32397 = state_32353__$1;
(statearr_32370_32397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (14))){
var inst_32324 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32371_32398 = state_32353__$1;
(statearr_32371_32398[(2)] = inst_32324);

(statearr_32371_32398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (16))){
var state_32353__$1 = state_32353;
var statearr_32372_32399 = state_32353__$1;
(statearr_32372_32399[(2)] = null);

(statearr_32372_32399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (10))){
var inst_32345 = (state_32353[(2)]);
var state_32353__$1 = (function (){var statearr_32373 = state_32353;
(statearr_32373[(11)] = inst_32345);

return statearr_32373;
})();
var statearr_32374_32400 = state_32353__$1;
(statearr_32374_32400[(2)] = null);

(statearr_32374_32400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (8))){
var inst_32312 = (state_32353[(9)]);
var inst_32316 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32312,opts);
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32316)){
var statearr_32375_32401 = state_32353__$1;
(statearr_32375_32401[(1)] = (11));

} else {
var statearr_32376_32402 = state_32353__$1;
(statearr_32376_32402[(1)] = (12));

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
});})(c__22533__auto___32384,ch))
;
return ((function (switch__22421__auto__,c__22533__auto___32384,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22422__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22422__auto____0 = (function (){
var statearr_32380 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32380[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22422__auto__);

(statearr_32380[(1)] = (1));

return statearr_32380;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22422__auto____1 = (function (state_32353){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_32353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e32381){if((e32381 instanceof Object)){
var ex__22425__auto__ = e32381;
var statearr_32382_32403 = state_32353;
(statearr_32382_32403[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32404 = state_32353;
state_32353 = G__32404;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22422__auto__ = function(state_32353){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22422__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22422__auto____1.call(this,state_32353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22422__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22422__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___32384,ch))
})();
var state__22535__auto__ = (function (){var statearr_32383 = f__22534__auto__.call(null);
(statearr_32383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___32384);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___32384,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32405_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32405_SHARP_));
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
var base_path_32412 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32412){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_32410 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32411 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32411;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32410;
}}catch (e32409){if((e32409 instanceof Error)){
var e = e32409;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32412], null));
} else {
var e = e32409;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32412))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32413){
var map__32422 = p__32413;
var map__32422__$1 = ((((!((map__32422 == null)))?((((map__32422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32422):map__32422);
var opts = map__32422__$1;
var build_id = cljs.core.get.call(null,map__32422__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32422,map__32422__$1,opts,build_id){
return (function (p__32424){
var vec__32425 = p__32424;
var seq__32426 = cljs.core.seq.call(null,vec__32425);
var first__32427 = cljs.core.first.call(null,seq__32426);
var seq__32426__$1 = cljs.core.next.call(null,seq__32426);
var map__32428 = first__32427;
var map__32428__$1 = ((((!((map__32428 == null)))?((((map__32428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32428):map__32428);
var msg = map__32428__$1;
var msg_name = cljs.core.get.call(null,map__32428__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32426__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32425,seq__32426,first__32427,seq__32426__$1,map__32428,map__32428__$1,msg,msg_name,_,map__32422,map__32422__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32425,seq__32426,first__32427,seq__32426__$1,map__32428,map__32428__$1,msg,msg_name,_,map__32422,map__32422__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32422,map__32422__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32436){
var vec__32437 = p__32436;
var seq__32438 = cljs.core.seq.call(null,vec__32437);
var first__32439 = cljs.core.first.call(null,seq__32438);
var seq__32438__$1 = cljs.core.next.call(null,seq__32438);
var map__32440 = first__32439;
var map__32440__$1 = ((((!((map__32440 == null)))?((((map__32440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32440):map__32440);
var msg = map__32440__$1;
var msg_name = cljs.core.get.call(null,map__32440__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32438__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32442){
var map__32454 = p__32442;
var map__32454__$1 = ((((!((map__32454 == null)))?((((map__32454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32454):map__32454);
var on_compile_warning = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32454,map__32454__$1,on_compile_warning,on_compile_fail){
return (function (p__32456){
var vec__32457 = p__32456;
var seq__32458 = cljs.core.seq.call(null,vec__32457);
var first__32459 = cljs.core.first.call(null,seq__32458);
var seq__32458__$1 = cljs.core.next.call(null,seq__32458);
var map__32460 = first__32459;
var map__32460__$1 = ((((!((map__32460 == null)))?((((map__32460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32460):map__32460);
var msg = map__32460__$1;
var msg_name = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32458__$1;
var pred__32462 = cljs.core._EQ_;
var expr__32463 = msg_name;
if(cljs.core.truth_(pred__32462.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32463))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32462.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32463))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32454,map__32454__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__,msg_hist,msg_names,msg){
return (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (7))){
var inst_32603 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32603)){
var statearr_32681_32727 = state_32679__$1;
(statearr_32681_32727[(1)] = (8));

} else {
var statearr_32682_32728 = state_32679__$1;
(statearr_32682_32728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (20))){
var inst_32673 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32683_32729 = state_32679__$1;
(statearr_32683_32729[(2)] = inst_32673);

(statearr_32683_32729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (27))){
var inst_32669 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32684_32730 = state_32679__$1;
(statearr_32684_32730[(2)] = inst_32669);

(statearr_32684_32730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (1))){
var inst_32596 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32596)){
var statearr_32685_32731 = state_32679__$1;
(statearr_32685_32731[(1)] = (2));

} else {
var statearr_32686_32732 = state_32679__$1;
(statearr_32686_32732[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (24))){
var inst_32671 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32687_32733 = state_32679__$1;
(statearr_32687_32733[(2)] = inst_32671);

(statearr_32687_32733[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (4))){
var inst_32677 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32679__$1,inst_32677);
} else {
if((state_val_32680 === (15))){
var inst_32675 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32688_32734 = state_32679__$1;
(statearr_32688_32734[(2)] = inst_32675);

(statearr_32688_32734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (21))){
var inst_32634 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32689_32735 = state_32679__$1;
(statearr_32689_32735[(2)] = inst_32634);

(statearr_32689_32735[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (31))){
var inst_32658 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32658)){
var statearr_32690_32736 = state_32679__$1;
(statearr_32690_32736[(1)] = (34));

} else {
var statearr_32691_32737 = state_32679__$1;
(statearr_32691_32737[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (32))){
var inst_32667 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32692_32738 = state_32679__$1;
(statearr_32692_32738[(2)] = inst_32667);

(statearr_32692_32738[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (33))){
var inst_32656 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32693_32739 = state_32679__$1;
(statearr_32693_32739[(2)] = inst_32656);

(statearr_32693_32739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (13))){
var inst_32617 = figwheel.client.heads_up.clear.call(null);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(16),inst_32617);
} else {
if((state_val_32680 === (22))){
var inst_32638 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32639 = figwheel.client.heads_up.append_message.call(null,inst_32638);
var state_32679__$1 = state_32679;
var statearr_32694_32740 = state_32679__$1;
(statearr_32694_32740[(2)] = inst_32639);

(statearr_32694_32740[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (36))){
var inst_32665 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32695_32741 = state_32679__$1;
(statearr_32695_32741[(2)] = inst_32665);

(statearr_32695_32741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (29))){
var inst_32649 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32696_32742 = state_32679__$1;
(statearr_32696_32742[(2)] = inst_32649);

(statearr_32696_32742[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (6))){
var inst_32598 = (state_32679[(7)]);
var state_32679__$1 = state_32679;
var statearr_32697_32743 = state_32679__$1;
(statearr_32697_32743[(2)] = inst_32598);

(statearr_32697_32743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (28))){
var inst_32645 = (state_32679[(2)]);
var inst_32646 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32647 = figwheel.client.heads_up.display_warning.call(null,inst_32646);
var state_32679__$1 = (function (){var statearr_32698 = state_32679;
(statearr_32698[(8)] = inst_32645);

return statearr_32698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(29),inst_32647);
} else {
if((state_val_32680 === (25))){
var inst_32643 = figwheel.client.heads_up.clear.call(null);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(28),inst_32643);
} else {
if((state_val_32680 === (34))){
var inst_32660 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(37),inst_32660);
} else {
if((state_val_32680 === (17))){
var inst_32625 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32699_32744 = state_32679__$1;
(statearr_32699_32744[(2)] = inst_32625);

(statearr_32699_32744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (3))){
var inst_32615 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32615)){
var statearr_32700_32745 = state_32679__$1;
(statearr_32700_32745[(1)] = (13));

} else {
var statearr_32701_32746 = state_32679__$1;
(statearr_32701_32746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (12))){
var inst_32611 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32702_32747 = state_32679__$1;
(statearr_32702_32747[(2)] = inst_32611);

(statearr_32702_32747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (2))){
var inst_32598 = (state_32679[(7)]);
var inst_32598__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32679__$1 = (function (){var statearr_32703 = state_32679;
(statearr_32703[(7)] = inst_32598__$1);

return statearr_32703;
})();
if(cljs.core.truth_(inst_32598__$1)){
var statearr_32704_32748 = state_32679__$1;
(statearr_32704_32748[(1)] = (5));

} else {
var statearr_32705_32749 = state_32679__$1;
(statearr_32705_32749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (23))){
var inst_32641 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32641)){
var statearr_32706_32750 = state_32679__$1;
(statearr_32706_32750[(1)] = (25));

} else {
var statearr_32707_32751 = state_32679__$1;
(statearr_32707_32751[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (35))){
var state_32679__$1 = state_32679;
var statearr_32708_32752 = state_32679__$1;
(statearr_32708_32752[(2)] = null);

(statearr_32708_32752[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (19))){
var inst_32636 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32636)){
var statearr_32709_32753 = state_32679__$1;
(statearr_32709_32753[(1)] = (22));

} else {
var statearr_32710_32754 = state_32679__$1;
(statearr_32710_32754[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (11))){
var inst_32607 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32711_32755 = state_32679__$1;
(statearr_32711_32755[(2)] = inst_32607);

(statearr_32711_32755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (9))){
var inst_32609 = figwheel.client.heads_up.clear.call(null);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(12),inst_32609);
} else {
if((state_val_32680 === (5))){
var inst_32600 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32679__$1 = state_32679;
var statearr_32712_32756 = state_32679__$1;
(statearr_32712_32756[(2)] = inst_32600);

(statearr_32712_32756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (14))){
var inst_32627 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32627)){
var statearr_32713_32757 = state_32679__$1;
(statearr_32713_32757[(1)] = (18));

} else {
var statearr_32714_32758 = state_32679__$1;
(statearr_32714_32758[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (26))){
var inst_32651 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32651)){
var statearr_32715_32759 = state_32679__$1;
(statearr_32715_32759[(1)] = (30));

} else {
var statearr_32716_32760 = state_32679__$1;
(statearr_32716_32760[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (16))){
var inst_32619 = (state_32679[(2)]);
var inst_32620 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32621 = figwheel.client.format_messages.call(null,inst_32620);
var inst_32622 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32623 = figwheel.client.heads_up.display_error.call(null,inst_32621,inst_32622);
var state_32679__$1 = (function (){var statearr_32717 = state_32679;
(statearr_32717[(9)] = inst_32619);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(17),inst_32623);
} else {
if((state_val_32680 === (30))){
var inst_32653 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32654 = figwheel.client.heads_up.display_warning.call(null,inst_32653);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(33),inst_32654);
} else {
if((state_val_32680 === (10))){
var inst_32613 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32718_32761 = state_32679__$1;
(statearr_32718_32761[(2)] = inst_32613);

(statearr_32718_32761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (18))){
var inst_32629 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32630 = figwheel.client.format_messages.call(null,inst_32629);
var inst_32631 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32632 = figwheel.client.heads_up.display_error.call(null,inst_32630,inst_32631);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(21),inst_32632);
} else {
if((state_val_32680 === (37))){
var inst_32662 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32719_32762 = state_32679__$1;
(statearr_32719_32762[(2)] = inst_32662);

(statearr_32719_32762[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (8))){
var inst_32605 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(11),inst_32605);
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
});})(c__22533__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22421__auto__,c__22533__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto____0 = (function (){
var statearr_32723 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32723[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto__);

(statearr_32723[(1)] = (1));

return statearr_32723;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto____1 = (function (state_32679){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_32679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e32724){if((e32724 instanceof Object)){
var ex__22425__auto__ = e32724;
var statearr_32725_32763 = state_32679;
(statearr_32725_32763[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32764 = state_32679;
state_32679 = G__32764;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__,msg_hist,msg_names,msg))
})();
var state__22535__auto__ = (function (){var statearr_32726 = f__22534__auto__.call(null);
(statearr_32726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_32726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__,msg_hist,msg_names,msg))
);

return c__22533__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22533__auto___32827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___32827,ch){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___32827,ch){
return (function (state_32810){
var state_val_32811 = (state_32810[(1)]);
if((state_val_32811 === (1))){
var state_32810__$1 = state_32810;
var statearr_32812_32828 = state_32810__$1;
(statearr_32812_32828[(2)] = null);

(statearr_32812_32828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (2))){
var state_32810__$1 = state_32810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32810__$1,(4),ch);
} else {
if((state_val_32811 === (3))){
var inst_32808 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32810__$1,inst_32808);
} else {
if((state_val_32811 === (4))){
var inst_32798 = (state_32810[(7)]);
var inst_32798__$1 = (state_32810[(2)]);
var state_32810__$1 = (function (){var statearr_32813 = state_32810;
(statearr_32813[(7)] = inst_32798__$1);

return statearr_32813;
})();
if(cljs.core.truth_(inst_32798__$1)){
var statearr_32814_32829 = state_32810__$1;
(statearr_32814_32829[(1)] = (5));

} else {
var statearr_32815_32830 = state_32810__$1;
(statearr_32815_32830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (5))){
var inst_32798 = (state_32810[(7)]);
var inst_32800 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32798);
var state_32810__$1 = state_32810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32810__$1,(8),inst_32800);
} else {
if((state_val_32811 === (6))){
var state_32810__$1 = state_32810;
var statearr_32816_32831 = state_32810__$1;
(statearr_32816_32831[(2)] = null);

(statearr_32816_32831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (7))){
var inst_32806 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32817_32832 = state_32810__$1;
(statearr_32817_32832[(2)] = inst_32806);

(statearr_32817_32832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (8))){
var inst_32802 = (state_32810[(2)]);
var state_32810__$1 = (function (){var statearr_32818 = state_32810;
(statearr_32818[(8)] = inst_32802);

return statearr_32818;
})();
var statearr_32819_32833 = state_32810__$1;
(statearr_32819_32833[(2)] = null);

(statearr_32819_32833[(1)] = (2));


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
});})(c__22533__auto___32827,ch))
;
return ((function (switch__22421__auto__,c__22533__auto___32827,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22422__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22422__auto____0 = (function (){
var statearr_32823 = [null,null,null,null,null,null,null,null,null];
(statearr_32823[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22422__auto__);

(statearr_32823[(1)] = (1));

return statearr_32823;
});
var figwheel$client$heads_up_plugin_$_state_machine__22422__auto____1 = (function (state_32810){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_32810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e32824){if((e32824 instanceof Object)){
var ex__22425__auto__ = e32824;
var statearr_32825_32834 = state_32810;
(statearr_32825_32834[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32835 = state_32810;
state_32810 = G__32835;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22422__auto__ = function(state_32810){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22422__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22422__auto____1.call(this,state_32810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22422__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22422__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___32827,ch))
})();
var state__22535__auto__ = (function (){var statearr_32826 = f__22534__auto__.call(null);
(statearr_32826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___32827);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___32827,ch))
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
var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__){
return (function (state_32856){
var state_val_32857 = (state_32856[(1)]);
if((state_val_32857 === (1))){
var inst_32851 = cljs.core.async.timeout.call(null,(3000));
var state_32856__$1 = state_32856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32856__$1,(2),inst_32851);
} else {
if((state_val_32857 === (2))){
var inst_32853 = (state_32856[(2)]);
var inst_32854 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32856__$1 = (function (){var statearr_32858 = state_32856;
(statearr_32858[(7)] = inst_32853);

return statearr_32858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32856__$1,inst_32854);
} else {
return null;
}
}
});})(c__22533__auto__))
;
return ((function (switch__22421__auto__,c__22533__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22422__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22422__auto____0 = (function (){
var statearr_32862 = [null,null,null,null,null,null,null,null];
(statearr_32862[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22422__auto__);

(statearr_32862[(1)] = (1));

return statearr_32862;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22422__auto____1 = (function (state_32856){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_32856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e32863){if((e32863 instanceof Object)){
var ex__22425__auto__ = e32863;
var statearr_32864_32866 = state_32856;
(statearr_32864_32866[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32867 = state_32856;
state_32856 = G__32867;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22422__auto__ = function(state_32856){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22422__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22422__auto____1.call(this,state_32856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22422__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22422__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__))
})();
var state__22535__auto__ = (function (){var statearr_32865 = f__22534__auto__.call(null);
(statearr_32865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_32865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__))
);

return c__22533__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32868){
var map__32875 = p__32868;
var map__32875__$1 = ((((!((map__32875 == null)))?((((map__32875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32875):map__32875);
var ed = map__32875__$1;
var formatted_exception = cljs.core.get.call(null,map__32875__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32875__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32875__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32877_32881 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32878_32882 = null;
var count__32879_32883 = (0);
var i__32880_32884 = (0);
while(true){
if((i__32880_32884 < count__32879_32883)){
var msg_32885 = cljs.core._nth.call(null,chunk__32878_32882,i__32880_32884);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32885);

var G__32886 = seq__32877_32881;
var G__32887 = chunk__32878_32882;
var G__32888 = count__32879_32883;
var G__32889 = (i__32880_32884 + (1));
seq__32877_32881 = G__32886;
chunk__32878_32882 = G__32887;
count__32879_32883 = G__32888;
i__32880_32884 = G__32889;
continue;
} else {
var temp__4657__auto___32890 = cljs.core.seq.call(null,seq__32877_32881);
if(temp__4657__auto___32890){
var seq__32877_32891__$1 = temp__4657__auto___32890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32877_32891__$1)){
var c__19527__auto___32892 = cljs.core.chunk_first.call(null,seq__32877_32891__$1);
var G__32893 = cljs.core.chunk_rest.call(null,seq__32877_32891__$1);
var G__32894 = c__19527__auto___32892;
var G__32895 = cljs.core.count.call(null,c__19527__auto___32892);
var G__32896 = (0);
seq__32877_32881 = G__32893;
chunk__32878_32882 = G__32894;
count__32879_32883 = G__32895;
i__32880_32884 = G__32896;
continue;
} else {
var msg_32897 = cljs.core.first.call(null,seq__32877_32891__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32897);

var G__32898 = cljs.core.next.call(null,seq__32877_32891__$1);
var G__32899 = null;
var G__32900 = (0);
var G__32901 = (0);
seq__32877_32881 = G__32898;
chunk__32878_32882 = G__32899;
count__32879_32883 = G__32900;
i__32880_32884 = G__32901;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32902){
var map__32905 = p__32902;
var map__32905__$1 = ((((!((map__32905 == null)))?((((map__32905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32905):map__32905);
var w = map__32905__$1;
var message = cljs.core.get.call(null,map__32905__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18704__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18704__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18704__auto__;
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
var seq__32917 = cljs.core.seq.call(null,plugins);
var chunk__32918 = null;
var count__32919 = (0);
var i__32920 = (0);
while(true){
if((i__32920 < count__32919)){
var vec__32921 = cljs.core._nth.call(null,chunk__32918,i__32920);
var k = cljs.core.nth.call(null,vec__32921,(0),null);
var plugin = cljs.core.nth.call(null,vec__32921,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32927 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32917,chunk__32918,count__32919,i__32920,pl_32927,vec__32921,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32927.call(null,msg_hist);
});})(seq__32917,chunk__32918,count__32919,i__32920,pl_32927,vec__32921,k,plugin))
);
} else {
}

var G__32928 = seq__32917;
var G__32929 = chunk__32918;
var G__32930 = count__32919;
var G__32931 = (i__32920 + (1));
seq__32917 = G__32928;
chunk__32918 = G__32929;
count__32919 = G__32930;
i__32920 = G__32931;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32917);
if(temp__4657__auto__){
var seq__32917__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32917__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__32917__$1);
var G__32932 = cljs.core.chunk_rest.call(null,seq__32917__$1);
var G__32933 = c__19527__auto__;
var G__32934 = cljs.core.count.call(null,c__19527__auto__);
var G__32935 = (0);
seq__32917 = G__32932;
chunk__32918 = G__32933;
count__32919 = G__32934;
i__32920 = G__32935;
continue;
} else {
var vec__32924 = cljs.core.first.call(null,seq__32917__$1);
var k = cljs.core.nth.call(null,vec__32924,(0),null);
var plugin = cljs.core.nth.call(null,vec__32924,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32936 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32917,chunk__32918,count__32919,i__32920,pl_32936,vec__32924,k,plugin,seq__32917__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32936.call(null,msg_hist);
});})(seq__32917,chunk__32918,count__32919,i__32920,pl_32936,vec__32924,k,plugin,seq__32917__$1,temp__4657__auto__))
);
} else {
}

var G__32937 = cljs.core.next.call(null,seq__32917__$1);
var G__32938 = null;
var G__32939 = (0);
var G__32940 = (0);
seq__32917 = G__32937;
chunk__32918 = G__32938;
count__32919 = G__32939;
i__32920 = G__32940;
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
var args32941 = [];
var len__19791__auto___32944 = arguments.length;
var i__19792__auto___32945 = (0);
while(true){
if((i__19792__auto___32945 < len__19791__auto___32944)){
args32941.push((arguments[i__19792__auto___32945]));

var G__32946 = (i__19792__auto___32945 + (1));
i__19792__auto___32945 = G__32946;
continue;
} else {
}
break;
}

var G__32943 = args32941.length;
switch (G__32943) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32941.length)].join('')));

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
var args__19798__auto__ = [];
var len__19791__auto___32952 = arguments.length;
var i__19792__auto___32953 = (0);
while(true){
if((i__19792__auto___32953 < len__19791__auto___32952)){
args__19798__auto__.push((arguments[i__19792__auto___32953]));

var G__32954 = (i__19792__auto___32953 + (1));
i__19792__auto___32953 = G__32954;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32949){
var map__32950 = p__32949;
var map__32950__$1 = ((((!((map__32950 == null)))?((((map__32950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32950):map__32950);
var opts = map__32950__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32948){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32948));
});


//# sourceMappingURL=client.js.map?rel=1474300073475