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
var pred__26638 = cljs.core._EQ_;
var expr__26639 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26638.call(null,"true",expr__26639))){
return true;
} else {
if(cljs.core.truth_(pred__26638.call(null,"false",expr__26639))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26639)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26641__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26642__i = 0, G__26642__a = new Array(arguments.length -  0);
while (G__26642__i < G__26642__a.length) {G__26642__a[G__26642__i] = arguments[G__26642__i + 0]; ++G__26642__i;}
  args = new cljs.core.IndexedSeq(G__26642__a,0);
} 
return G__26641__delegate.call(this,args);};
G__26641.cljs$lang$maxFixedArity = 0;
G__26641.cljs$lang$applyTo = (function (arglist__26643){
var args = cljs.core.seq(arglist__26643);
return G__26641__delegate(args);
});
G__26641.cljs$core$IFn$_invoke$arity$variadic = G__26641__delegate;
return G__26641;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26644){
var map__26647 = p__26644;
var map__26647__$1 = ((((!((map__26647 == null)))?((((map__26647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26647):map__26647);
var message = cljs.core.get.call(null,map__26647__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26647__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
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
var c__20253__auto___26809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___26809,ch){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___26809,ch){
return (function (state_26778){
var state_val_26779 = (state_26778[(1)]);
if((state_val_26779 === (7))){
var inst_26774 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26780_26810 = state_26778__$1;
(statearr_26780_26810[(2)] = inst_26774);

(statearr_26780_26810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (1))){
var state_26778__$1 = state_26778;
var statearr_26781_26811 = state_26778__$1;
(statearr_26781_26811[(2)] = null);

(statearr_26781_26811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (4))){
var inst_26731 = (state_26778[(7)]);
var inst_26731__$1 = (state_26778[(2)]);
var state_26778__$1 = (function (){var statearr_26782 = state_26778;
(statearr_26782[(7)] = inst_26731__$1);

return statearr_26782;
})();
if(cljs.core.truth_(inst_26731__$1)){
var statearr_26783_26812 = state_26778__$1;
(statearr_26783_26812[(1)] = (5));

} else {
var statearr_26784_26813 = state_26778__$1;
(statearr_26784_26813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (15))){
var inst_26738 = (state_26778[(8)]);
var inst_26753 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26738);
var inst_26754 = cljs.core.first.call(null,inst_26753);
var inst_26755 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26754);
var inst_26756 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26755)].join('');
var inst_26757 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26756);
var state_26778__$1 = state_26778;
var statearr_26785_26814 = state_26778__$1;
(statearr_26785_26814[(2)] = inst_26757);

(statearr_26785_26814[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (13))){
var inst_26762 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26786_26815 = state_26778__$1;
(statearr_26786_26815[(2)] = inst_26762);

(statearr_26786_26815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (6))){
var state_26778__$1 = state_26778;
var statearr_26787_26816 = state_26778__$1;
(statearr_26787_26816[(2)] = null);

(statearr_26787_26816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (17))){
var inst_26760 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26788_26817 = state_26778__$1;
(statearr_26788_26817[(2)] = inst_26760);

(statearr_26788_26817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (3))){
var inst_26776 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26778__$1,inst_26776);
} else {
if((state_val_26779 === (12))){
var inst_26737 = (state_26778[(9)]);
var inst_26751 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26737,opts);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26751)){
var statearr_26789_26818 = state_26778__$1;
(statearr_26789_26818[(1)] = (15));

} else {
var statearr_26790_26819 = state_26778__$1;
(statearr_26790_26819[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (2))){
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(4),ch);
} else {
if((state_val_26779 === (11))){
var inst_26738 = (state_26778[(8)]);
var inst_26743 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26744 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26738);
var inst_26745 = cljs.core.async.timeout.call(null,(1000));
var inst_26746 = [inst_26744,inst_26745];
var inst_26747 = (new cljs.core.PersistentVector(null,2,(5),inst_26743,inst_26746,null));
var state_26778__$1 = state_26778;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26778__$1,(14),inst_26747);
} else {
if((state_val_26779 === (9))){
var inst_26738 = (state_26778[(8)]);
var inst_26764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26765 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26738);
var inst_26766 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26765);
var inst_26767 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26766)].join('');
var inst_26768 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26767);
var state_26778__$1 = (function (){var statearr_26791 = state_26778;
(statearr_26791[(10)] = inst_26764);

return statearr_26791;
})();
var statearr_26792_26820 = state_26778__$1;
(statearr_26792_26820[(2)] = inst_26768);

(statearr_26792_26820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (5))){
var inst_26731 = (state_26778[(7)]);
var inst_26733 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26734 = (new cljs.core.PersistentArrayMap(null,2,inst_26733,null));
var inst_26735 = (new cljs.core.PersistentHashSet(null,inst_26734,null));
var inst_26736 = figwheel.client.focus_msgs.call(null,inst_26735,inst_26731);
var inst_26737 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26736);
var inst_26738 = cljs.core.first.call(null,inst_26736);
var inst_26739 = figwheel.client.autoload_QMARK_.call(null);
var state_26778__$1 = (function (){var statearr_26793 = state_26778;
(statearr_26793[(9)] = inst_26737);

(statearr_26793[(8)] = inst_26738);

return statearr_26793;
})();
if(cljs.core.truth_(inst_26739)){
var statearr_26794_26821 = state_26778__$1;
(statearr_26794_26821[(1)] = (8));

} else {
var statearr_26795_26822 = state_26778__$1;
(statearr_26795_26822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (14))){
var inst_26749 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26796_26823 = state_26778__$1;
(statearr_26796_26823[(2)] = inst_26749);

(statearr_26796_26823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (16))){
var state_26778__$1 = state_26778;
var statearr_26797_26824 = state_26778__$1;
(statearr_26797_26824[(2)] = null);

(statearr_26797_26824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (10))){
var inst_26770 = (state_26778[(2)]);
var state_26778__$1 = (function (){var statearr_26798 = state_26778;
(statearr_26798[(11)] = inst_26770);

return statearr_26798;
})();
var statearr_26799_26825 = state_26778__$1;
(statearr_26799_26825[(2)] = null);

(statearr_26799_26825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (8))){
var inst_26737 = (state_26778[(9)]);
var inst_26741 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26737,opts);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26741)){
var statearr_26800_26826 = state_26778__$1;
(statearr_26800_26826[(1)] = (11));

} else {
var statearr_26801_26827 = state_26778__$1;
(statearr_26801_26827[(1)] = (12));

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
});})(c__20253__auto___26809,ch))
;
return ((function (switch__20141__auto__,c__20253__auto___26809,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20142__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20142__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20142__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20142__auto____1 = (function (state_26778){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_26778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__20145__auto__ = e26806;
var statearr_26807_26828 = state_26778;
(statearr_26807_26828[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26829 = state_26778;
state_26778 = G__26829;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20142__auto__ = function(state_26778){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20142__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20142__auto____1.call(this,state_26778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20142__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20142__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___26809,ch))
})();
var state__20255__auto__ = (function (){var statearr_26808 = f__20254__auto__.call(null);
(statearr_26808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___26809);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___26809,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26830_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26830_SHARP_));
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
var base_path_26837 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26837){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26835 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26836 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26835,_STAR_print_newline_STAR_26836,base_path_26837){
return (function() { 
var G__26838__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26839__i = 0, G__26839__a = new Array(arguments.length -  0);
while (G__26839__i < G__26839__a.length) {G__26839__a[G__26839__i] = arguments[G__26839__i + 0]; ++G__26839__i;}
  args = new cljs.core.IndexedSeq(G__26839__a,0);
} 
return G__26838__delegate.call(this,args);};
G__26838.cljs$lang$maxFixedArity = 0;
G__26838.cljs$lang$applyTo = (function (arglist__26840){
var args = cljs.core.seq(arglist__26840);
return G__26838__delegate(args);
});
G__26838.cljs$core$IFn$_invoke$arity$variadic = G__26838__delegate;
return G__26838;
})()
;})(_STAR_print_fn_STAR_26835,_STAR_print_newline_STAR_26836,base_path_26837))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26836;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26835;
}}catch (e26834){if((e26834 instanceof Error)){
var e = e26834;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26837], null));
} else {
var e = e26834;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26837))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26841){
var map__26848 = p__26841;
var map__26848__$1 = ((((!((map__26848 == null)))?((((map__26848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26848):map__26848);
var opts = map__26848__$1;
var build_id = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26848,map__26848__$1,opts,build_id){
return (function (p__26850){
var vec__26851 = p__26850;
var map__26852 = cljs.core.nth.call(null,vec__26851,(0),null);
var map__26852__$1 = ((((!((map__26852 == null)))?((((map__26852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26852):map__26852);
var msg = map__26852__$1;
var msg_name = cljs.core.get.call(null,map__26852__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26851,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26851,map__26852,map__26852__$1,msg,msg_name,_,map__26848,map__26848__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26851,map__26852,map__26852__$1,msg,msg_name,_,map__26848,map__26848__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26848,map__26848__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26858){
var vec__26859 = p__26858;
var map__26860 = cljs.core.nth.call(null,vec__26859,(0),null);
var map__26860__$1 = ((((!((map__26860 == null)))?((((map__26860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26860):map__26860);
var msg = map__26860__$1;
var msg_name = cljs.core.get.call(null,map__26860__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26859,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26862){
var map__26872 = p__26862;
var map__26872__$1 = ((((!((map__26872 == null)))?((((map__26872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26872):map__26872);
var on_compile_warning = cljs.core.get.call(null,map__26872__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26872__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26872,map__26872__$1,on_compile_warning,on_compile_fail){
return (function (p__26874){
var vec__26875 = p__26874;
var map__26876 = cljs.core.nth.call(null,vec__26875,(0),null);
var map__26876__$1 = ((((!((map__26876 == null)))?((((map__26876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26876):map__26876);
var msg = map__26876__$1;
var msg_name = cljs.core.get.call(null,map__26876__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26875,(1));
var pred__26878 = cljs.core._EQ_;
var expr__26879 = msg_name;
if(cljs.core.truth_(pred__26878.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26879))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26878.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26879))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26872,map__26872__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20253__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto__,msg_hist,msg_names,msg){
return (function (state_27095){
var state_val_27096 = (state_27095[(1)]);
if((state_val_27096 === (7))){
var inst_27019 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27019)){
var statearr_27097_27143 = state_27095__$1;
(statearr_27097_27143[(1)] = (8));

} else {
var statearr_27098_27144 = state_27095__$1;
(statearr_27098_27144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (20))){
var inst_27089 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27099_27145 = state_27095__$1;
(statearr_27099_27145[(2)] = inst_27089);

(statearr_27099_27145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (27))){
var inst_27085 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27100_27146 = state_27095__$1;
(statearr_27100_27146[(2)] = inst_27085);

(statearr_27100_27146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (1))){
var inst_27012 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27012)){
var statearr_27101_27147 = state_27095__$1;
(statearr_27101_27147[(1)] = (2));

} else {
var statearr_27102_27148 = state_27095__$1;
(statearr_27102_27148[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (24))){
var inst_27087 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27103_27149 = state_27095__$1;
(statearr_27103_27149[(2)] = inst_27087);

(statearr_27103_27149[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (4))){
var inst_27093 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else {
if((state_val_27096 === (15))){
var inst_27091 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27104_27150 = state_27095__$1;
(statearr_27104_27150[(2)] = inst_27091);

(statearr_27104_27150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (21))){
var inst_27050 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27105_27151 = state_27095__$1;
(statearr_27105_27151[(2)] = inst_27050);

(statearr_27105_27151[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (31))){
var inst_27074 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27074)){
var statearr_27106_27152 = state_27095__$1;
(statearr_27106_27152[(1)] = (34));

} else {
var statearr_27107_27153 = state_27095__$1;
(statearr_27107_27153[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (32))){
var inst_27083 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27108_27154 = state_27095__$1;
(statearr_27108_27154[(2)] = inst_27083);

(statearr_27108_27154[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (33))){
var inst_27072 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27109_27155 = state_27095__$1;
(statearr_27109_27155[(2)] = inst_27072);

(statearr_27109_27155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (13))){
var inst_27033 = figwheel.client.heads_up.clear.call(null);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(16),inst_27033);
} else {
if((state_val_27096 === (22))){
var inst_27054 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27055 = figwheel.client.heads_up.append_message.call(null,inst_27054);
var state_27095__$1 = state_27095;
var statearr_27110_27156 = state_27095__$1;
(statearr_27110_27156[(2)] = inst_27055);

(statearr_27110_27156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (36))){
var inst_27081 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27111_27157 = state_27095__$1;
(statearr_27111_27157[(2)] = inst_27081);

(statearr_27111_27157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (29))){
var inst_27065 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27112_27158 = state_27095__$1;
(statearr_27112_27158[(2)] = inst_27065);

(statearr_27112_27158[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (6))){
var inst_27014 = (state_27095[(7)]);
var state_27095__$1 = state_27095;
var statearr_27113_27159 = state_27095__$1;
(statearr_27113_27159[(2)] = inst_27014);

(statearr_27113_27159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (28))){
var inst_27061 = (state_27095[(2)]);
var inst_27062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27063 = figwheel.client.heads_up.display_warning.call(null,inst_27062);
var state_27095__$1 = (function (){var statearr_27114 = state_27095;
(statearr_27114[(8)] = inst_27061);

return statearr_27114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(29),inst_27063);
} else {
if((state_val_27096 === (25))){
var inst_27059 = figwheel.client.heads_up.clear.call(null);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(28),inst_27059);
} else {
if((state_val_27096 === (34))){
var inst_27076 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(37),inst_27076);
} else {
if((state_val_27096 === (17))){
var inst_27041 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27115_27160 = state_27095__$1;
(statearr_27115_27160[(2)] = inst_27041);

(statearr_27115_27160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (3))){
var inst_27031 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27031)){
var statearr_27116_27161 = state_27095__$1;
(statearr_27116_27161[(1)] = (13));

} else {
var statearr_27117_27162 = state_27095__$1;
(statearr_27117_27162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (12))){
var inst_27027 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27118_27163 = state_27095__$1;
(statearr_27118_27163[(2)] = inst_27027);

(statearr_27118_27163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (2))){
var inst_27014 = (state_27095[(7)]);
var inst_27014__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27095__$1 = (function (){var statearr_27119 = state_27095;
(statearr_27119[(7)] = inst_27014__$1);

return statearr_27119;
})();
if(cljs.core.truth_(inst_27014__$1)){
var statearr_27120_27164 = state_27095__$1;
(statearr_27120_27164[(1)] = (5));

} else {
var statearr_27121_27165 = state_27095__$1;
(statearr_27121_27165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (23))){
var inst_27057 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27057)){
var statearr_27122_27166 = state_27095__$1;
(statearr_27122_27166[(1)] = (25));

} else {
var statearr_27123_27167 = state_27095__$1;
(statearr_27123_27167[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (35))){
var state_27095__$1 = state_27095;
var statearr_27124_27168 = state_27095__$1;
(statearr_27124_27168[(2)] = null);

(statearr_27124_27168[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (19))){
var inst_27052 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27052)){
var statearr_27125_27169 = state_27095__$1;
(statearr_27125_27169[(1)] = (22));

} else {
var statearr_27126_27170 = state_27095__$1;
(statearr_27126_27170[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (11))){
var inst_27023 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27127_27171 = state_27095__$1;
(statearr_27127_27171[(2)] = inst_27023);

(statearr_27127_27171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (9))){
var inst_27025 = figwheel.client.heads_up.clear.call(null);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(12),inst_27025);
} else {
if((state_val_27096 === (5))){
var inst_27016 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27095__$1 = state_27095;
var statearr_27128_27172 = state_27095__$1;
(statearr_27128_27172[(2)] = inst_27016);

(statearr_27128_27172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (14))){
var inst_27043 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27043)){
var statearr_27129_27173 = state_27095__$1;
(statearr_27129_27173[(1)] = (18));

} else {
var statearr_27130_27174 = state_27095__$1;
(statearr_27130_27174[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (26))){
var inst_27067 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27067)){
var statearr_27131_27175 = state_27095__$1;
(statearr_27131_27175[(1)] = (30));

} else {
var statearr_27132_27176 = state_27095__$1;
(statearr_27132_27176[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (16))){
var inst_27035 = (state_27095[(2)]);
var inst_27036 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27037 = figwheel.client.format_messages.call(null,inst_27036);
var inst_27038 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27039 = figwheel.client.heads_up.display_error.call(null,inst_27037,inst_27038);
var state_27095__$1 = (function (){var statearr_27133 = state_27095;
(statearr_27133[(9)] = inst_27035);

return statearr_27133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(17),inst_27039);
} else {
if((state_val_27096 === (30))){
var inst_27069 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27070 = figwheel.client.heads_up.display_warning.call(null,inst_27069);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(33),inst_27070);
} else {
if((state_val_27096 === (10))){
var inst_27029 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27134_27177 = state_27095__$1;
(statearr_27134_27177[(2)] = inst_27029);

(statearr_27134_27177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (18))){
var inst_27045 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27046 = figwheel.client.format_messages.call(null,inst_27045);
var inst_27047 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27048 = figwheel.client.heads_up.display_error.call(null,inst_27046,inst_27047);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(21),inst_27048);
} else {
if((state_val_27096 === (37))){
var inst_27078 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27135_27178 = state_27095__$1;
(statearr_27135_27178[(2)] = inst_27078);

(statearr_27135_27178[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (8))){
var inst_27021 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(11),inst_27021);
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
});})(c__20253__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20141__auto__,c__20253__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto____0 = (function (){
var statearr_27139 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27139[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto__);

(statearr_27139[(1)] = (1));

return statearr_27139;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto____1 = (function (state_27095){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_27095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e27140){if((e27140 instanceof Object)){
var ex__20145__auto__ = e27140;
var statearr_27141_27179 = state_27095;
(statearr_27141_27179[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27180 = state_27095;
state_27095 = G__27180;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto__,msg_hist,msg_names,msg))
})();
var state__20255__auto__ = (function (){var statearr_27142 = f__20254__auto__.call(null);
(statearr_27142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto__);

return statearr_27142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto__,msg_hist,msg_names,msg))
);

return c__20253__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20253__auto___27243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___27243,ch){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___27243,ch){
return (function (state_27226){
var state_val_27227 = (state_27226[(1)]);
if((state_val_27227 === (1))){
var state_27226__$1 = state_27226;
var statearr_27228_27244 = state_27226__$1;
(statearr_27228_27244[(2)] = null);

(statearr_27228_27244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (2))){
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27226__$1,(4),ch);
} else {
if((state_val_27227 === (3))){
var inst_27224 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27226__$1,inst_27224);
} else {
if((state_val_27227 === (4))){
var inst_27214 = (state_27226[(7)]);
var inst_27214__$1 = (state_27226[(2)]);
var state_27226__$1 = (function (){var statearr_27229 = state_27226;
(statearr_27229[(7)] = inst_27214__$1);

return statearr_27229;
})();
if(cljs.core.truth_(inst_27214__$1)){
var statearr_27230_27245 = state_27226__$1;
(statearr_27230_27245[(1)] = (5));

} else {
var statearr_27231_27246 = state_27226__$1;
(statearr_27231_27246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (5))){
var inst_27214 = (state_27226[(7)]);
var inst_27216 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27214);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27226__$1,(8),inst_27216);
} else {
if((state_val_27227 === (6))){
var state_27226__$1 = state_27226;
var statearr_27232_27247 = state_27226__$1;
(statearr_27232_27247[(2)] = null);

(statearr_27232_27247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (7))){
var inst_27222 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27233_27248 = state_27226__$1;
(statearr_27233_27248[(2)] = inst_27222);

(statearr_27233_27248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (8))){
var inst_27218 = (state_27226[(2)]);
var state_27226__$1 = (function (){var statearr_27234 = state_27226;
(statearr_27234[(8)] = inst_27218);

return statearr_27234;
})();
var statearr_27235_27249 = state_27226__$1;
(statearr_27235_27249[(2)] = null);

(statearr_27235_27249[(1)] = (2));


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
});})(c__20253__auto___27243,ch))
;
return ((function (switch__20141__auto__,c__20253__auto___27243,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20142__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20142__auto____0 = (function (){
var statearr_27239 = [null,null,null,null,null,null,null,null,null];
(statearr_27239[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20142__auto__);

(statearr_27239[(1)] = (1));

return statearr_27239;
});
var figwheel$client$heads_up_plugin_$_state_machine__20142__auto____1 = (function (state_27226){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_27226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e27240){if((e27240 instanceof Object)){
var ex__20145__auto__ = e27240;
var statearr_27241_27250 = state_27226;
(statearr_27241_27250[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27251 = state_27226;
state_27226 = G__27251;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20142__auto__ = function(state_27226){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20142__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20142__auto____1.call(this,state_27226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20142__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20142__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___27243,ch))
})();
var state__20255__auto__ = (function (){var statearr_27242 = f__20254__auto__.call(null);
(statearr_27242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___27243);

return statearr_27242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___27243,ch))
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
var c__20253__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto__){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto__){
return (function (state_27272){
var state_val_27273 = (state_27272[(1)]);
if((state_val_27273 === (1))){
var inst_27267 = cljs.core.async.timeout.call(null,(3000));
var state_27272__$1 = state_27272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27272__$1,(2),inst_27267);
} else {
if((state_val_27273 === (2))){
var inst_27269 = (state_27272[(2)]);
var inst_27270 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27272__$1 = (function (){var statearr_27274 = state_27272;
(statearr_27274[(7)] = inst_27269);

return statearr_27274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27272__$1,inst_27270);
} else {
return null;
}
}
});})(c__20253__auto__))
;
return ((function (switch__20141__auto__,c__20253__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20142__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20142__auto____0 = (function (){
var statearr_27278 = [null,null,null,null,null,null,null,null];
(statearr_27278[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20142__auto__);

(statearr_27278[(1)] = (1));

return statearr_27278;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20142__auto____1 = (function (state_27272){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_27272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e27279){if((e27279 instanceof Object)){
var ex__20145__auto__ = e27279;
var statearr_27280_27282 = state_27272;
(statearr_27280_27282[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27283 = state_27272;
state_27272 = G__27283;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20142__auto__ = function(state_27272){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20142__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20142__auto____1.call(this,state_27272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20142__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20142__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto__))
})();
var state__20255__auto__ = (function (){var statearr_27281 = f__20254__auto__.call(null);
(statearr_27281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto__);

return statearr_27281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto__))
);

return c__20253__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27284){
var map__27291 = p__27284;
var map__27291__$1 = ((((!((map__27291 == null)))?((((map__27291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27291):map__27291);
var ed = map__27291__$1;
var formatted_exception = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27293_27297 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27294_27298 = null;
var count__27295_27299 = (0);
var i__27296_27300 = (0);
while(true){
if((i__27296_27300 < count__27295_27299)){
var msg_27301 = cljs.core._nth.call(null,chunk__27294_27298,i__27296_27300);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27301);

var G__27302 = seq__27293_27297;
var G__27303 = chunk__27294_27298;
var G__27304 = count__27295_27299;
var G__27305 = (i__27296_27300 + (1));
seq__27293_27297 = G__27302;
chunk__27294_27298 = G__27303;
count__27295_27299 = G__27304;
i__27296_27300 = G__27305;
continue;
} else {
var temp__4425__auto___27306 = cljs.core.seq.call(null,seq__27293_27297);
if(temp__4425__auto___27306){
var seq__27293_27307__$1 = temp__4425__auto___27306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27293_27307__$1)){
var c__17629__auto___27308 = cljs.core.chunk_first.call(null,seq__27293_27307__$1);
var G__27309 = cljs.core.chunk_rest.call(null,seq__27293_27307__$1);
var G__27310 = c__17629__auto___27308;
var G__27311 = cljs.core.count.call(null,c__17629__auto___27308);
var G__27312 = (0);
seq__27293_27297 = G__27309;
chunk__27294_27298 = G__27310;
count__27295_27299 = G__27311;
i__27296_27300 = G__27312;
continue;
} else {
var msg_27313 = cljs.core.first.call(null,seq__27293_27307__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27313);

var G__27314 = cljs.core.next.call(null,seq__27293_27307__$1);
var G__27315 = null;
var G__27316 = (0);
var G__27317 = (0);
seq__27293_27297 = G__27314;
chunk__27294_27298 = G__27315;
count__27295_27299 = G__27316;
i__27296_27300 = G__27317;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27318){
var map__27321 = p__27318;
var map__27321__$1 = ((((!((map__27321 == null)))?((((map__27321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27321):map__27321);
var w = map__27321__$1;
var message = cljs.core.get.call(null,map__27321__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
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
var seq__27329 = cljs.core.seq.call(null,plugins);
var chunk__27330 = null;
var count__27331 = (0);
var i__27332 = (0);
while(true){
if((i__27332 < count__27331)){
var vec__27333 = cljs.core._nth.call(null,chunk__27330,i__27332);
var k = cljs.core.nth.call(null,vec__27333,(0),null);
var plugin = cljs.core.nth.call(null,vec__27333,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27335 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27329,chunk__27330,count__27331,i__27332,pl_27335,vec__27333,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27335.call(null,msg_hist);
});})(seq__27329,chunk__27330,count__27331,i__27332,pl_27335,vec__27333,k,plugin))
);
} else {
}

var G__27336 = seq__27329;
var G__27337 = chunk__27330;
var G__27338 = count__27331;
var G__27339 = (i__27332 + (1));
seq__27329 = G__27336;
chunk__27330 = G__27337;
count__27331 = G__27338;
i__27332 = G__27339;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27329);
if(temp__4425__auto__){
var seq__27329__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27329__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__27329__$1);
var G__27340 = cljs.core.chunk_rest.call(null,seq__27329__$1);
var G__27341 = c__17629__auto__;
var G__27342 = cljs.core.count.call(null,c__17629__auto__);
var G__27343 = (0);
seq__27329 = G__27340;
chunk__27330 = G__27341;
count__27331 = G__27342;
i__27332 = G__27343;
continue;
} else {
var vec__27334 = cljs.core.first.call(null,seq__27329__$1);
var k = cljs.core.nth.call(null,vec__27334,(0),null);
var plugin = cljs.core.nth.call(null,vec__27334,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27344 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27329,chunk__27330,count__27331,i__27332,pl_27344,vec__27334,k,plugin,seq__27329__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27344.call(null,msg_hist);
});})(seq__27329,chunk__27330,count__27331,i__27332,pl_27344,vec__27334,k,plugin,seq__27329__$1,temp__4425__auto__))
);
} else {
}

var G__27345 = cljs.core.next.call(null,seq__27329__$1);
var G__27346 = null;
var G__27347 = (0);
var G__27348 = (0);
seq__27329 = G__27345;
chunk__27330 = G__27346;
count__27331 = G__27347;
i__27332 = G__27348;
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
var args27349 = [];
var len__17884__auto___27352 = arguments.length;
var i__17885__auto___27353 = (0);
while(true){
if((i__17885__auto___27353 < len__17884__auto___27352)){
args27349.push((arguments[i__17885__auto___27353]));

var G__27354 = (i__17885__auto___27353 + (1));
i__17885__auto___27353 = G__27354;
continue;
} else {
}
break;
}

var G__27351 = args27349.length;
switch (G__27351) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27349.length)].join('')));

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
var args__17891__auto__ = [];
var len__17884__auto___27360 = arguments.length;
var i__17885__auto___27361 = (0);
while(true){
if((i__17885__auto___27361 < len__17884__auto___27360)){
args__17891__auto__.push((arguments[i__17885__auto___27361]));

var G__27362 = (i__17885__auto___27361 + (1));
i__17885__auto___27361 = G__27362;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27357){
var map__27358 = p__27357;
var map__27358__$1 = ((((!((map__27358 == null)))?((((map__27358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27358):map__27358);
var opts = map__27358__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27356){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27356));
});

//# sourceMappingURL=client.js.map?rel=1452098824591