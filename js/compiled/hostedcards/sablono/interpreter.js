// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__10144__auto__ = (((this$ == null))?null:this$);
var m__10145__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10145__auto__.call(null,this$));
} else {
var m__10145__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10145__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var next_state = ({});
var G__22890_22893 = next_state;
var G__22891_22894 = next_props;
var G__22892_22895 = ({"onChange": goog.object.get(component,"onChange")});
goog.object.extend(G__22890_22893,G__22891_22894,G__22892_22895);

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var G__22904 = ({"displayName": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("wrapped-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''), "getInitialState": (function (){
var this$ = this;
var state = ({});
var G__22905_22912 = state;
var G__22906_22913 = this$.props;
var G__22907_22914 = ({"onChange": goog.object.get(this$,"onChange")});
goog.object.extend(G__22905_22912,G__22906_22913,G__22907_22914);

return state;
}), "onChange": (function (event){
var this$ = this;
var temp__6738__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__6738__auto__)){
var handler = temp__6738__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return sablono.interpreter.update_state(this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = (function (){var G__22908 = ReactDOM.findDOMNode(this$);
var G__22909 = property;
return goog.object.get(G__22908,G__22909);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return sablono.interpreter.update_state(this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state(this$,new_props,property,goog.object.get(new_props,property));
}
}), "render": (function (){
var this$ = this;
var G__22910 = element;
var G__22911 = this$.state;
return React.createElement(G__22910,G__22911);
})});
return React.createClass(G__22904);
});
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value");
sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked");
sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value");
sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value");
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__9414__auto__ = cljs.core.object_QMARK_(props);
if(and__9414__auto__){
var G__22918 = type;
switch (G__22918) {
case "input":
return (typeof props.checked !== 'undefined') || (typeof props.value !== 'undefined');

break;
case "select":
return typeof props.value !== 'undefined';

break;
case "textarea":
return typeof props.value !== 'undefined';

break;
default:
return false;

}
} else {
return and__9414__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_(type,props)){
var G__22922 = type;
switch (G__22922) {
case "input":
var G__22923 = (function (){var and__9414__auto__ = cljs.core.object_QMARK_(props);
if(and__9414__auto__){
return props.type;
} else {
return and__9414__auto__;
}
})();
switch (G__22923) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__10654__auto__ = [];
var len__10647__auto___22929 = arguments.length;
var i__10648__auto___22930 = (0);
while(true){
if((i__10648__auto___22930 < len__10647__auto___22929)){
args__10654__auto__.push((arguments[i__10648__auto___22930]));

var G__22931 = (i__10648__auto___22930 + (1));
i__10648__auto___22930 = G__22931;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((2) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10655__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var class$ = sablono.interpreter.element_class(type,props);
var children__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,children);
if(cljs.core.empty_QMARK_(children__$1)){
return React.createElement(class$,props);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq22926){
var G__22927 = cljs.core.first(seq22926);
var seq22926__$1 = cljs.core.next(seq22926);
var G__22928 = cljs.core.first(seq22926__$1);
var seq22926__$2 = cljs.core.next(seq22926__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__22927,G__22928,seq22926__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__6738__auto__ = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__6738__auto__)){
var js_attrs = temp__6738__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
js_attrs.className = class$__$1;
}

return js_attrs;
} else {
return null;
}
});
/**
 * Interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__22935 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of
 *   an element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_(x))){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));
