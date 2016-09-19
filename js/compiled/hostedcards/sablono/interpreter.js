// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
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
var x__7069__auto__ = (((this$ == null))?null:this$);
var m__7070__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7070__auto__.call(null,this$));
} else {
var m__7070__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7070__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property,coerce){
var G__18635 = ({"displayName": [cljs.core.str("wrapped-"),cljs.core.str(element)].join(''), "getInitialState": (function (){
var this$ = this;
return ({"state_value": (function (){var G__18636 = (this$.props[property]);
return (coerce.cljs$core$IFn$_invoke$arity$1 ? coerce.cljs$core$IFn$_invoke$arity$1(G__18636) : coerce.call(null,G__18636));
})()});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(e) : handler.call(null,e));

return this$.setState(({"state_value": (e.target[property])}));
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
var state_value = (this$.state["state_value"]);
var element_value = (ReactDOM.findDOMNode(this$)[property]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return this$.setState(({"state_value": element_value}));
} else {
return this$.setState(({"state_value": (function (){var G__18637 = (new_props[property]);
return (coerce.cljs$core$IFn$_invoke$arity$1 ? coerce.cljs$core$IFn$_invoke$arity$1(G__18637) : coerce.call(null,G__18637));
})()}));
}
}), "render": (function (){
var this$ = this;
var element_props = ({});
var G__18638_18641 = element_props;
var G__18639_18642 = this$.props;
var G__18640_18643 = ({"onChange": (this$["onChange"]), "children": (this$.props["children"])});
goog.object.extend(G__18638_18641,G__18639_18642,G__18640_18643);

(element_props[property] = (this$.state["state_value"]));

return React.createElement(element,element_props);
})});
return React.createClass(G__18635);
});
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value",cljs.core.str);
sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked",cljs.core.boolean$);
sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value",cljs.core.str);
sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value",cljs.core.str);
sablono.interpreter.defined_QMARK_ = (function sablono$interpreter$defined_QMARK_(x){
return (!((x == null))) && (!((void 0 === x)));
});
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__7488__auto__ = [];
var len__7481__auto___18651 = arguments.length;
var i__7482__auto___18652 = (0);
while(true){
if((i__7482__auto___18652 < len__7481__auto___18651)){
args__7488__auto__.push((arguments[i__7482__auto___18652]));

var G__18653 = (i__7482__auto___18652 + (1));
i__7482__auto___18652 = G__18653;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((2) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7489__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var class$ = (function (){var or__6406__auto__ = ((cljs.core.some_QMARK_(props))?(function (){var G__18649 = cljs.core.name(type);
switch (G__18649) {
case "input":
var G__18650 = props.type;
switch (G__18650) {
case "radio":
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_(props.checked))){
return sablono.interpreter.wrapped_checked;
} else {
return null;
}

break;
case "checkbox":
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_(props.checked))){
return sablono.interpreter.wrapped_checked;
} else {
return null;
}

break;
default:
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_(props.value))){
return sablono.interpreter.wrapped_input;
} else {
return null;
}

}

break;
case "select":
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_(props.value))){
return sablono.interpreter.wrapped_select;
} else {
return null;
}

break;
case "textarea":
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_(props.value))){
return sablono.interpreter.wrapped_textarea;
} else {
return null;
}

break;
default:
return null;

}
})():null);
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return cljs.core.name(type);
}
})();
var children__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,children);
if(cljs.core.some_QMARK_(props)){
if((props.value == null)){
props.value = undefined;
} else {
}

if((props.checked == null)){
props.checked = undefined;
} else {
}
} else {
}

if(cljs.core.empty_QMARK_(children__$1)){
return React.createElement(class$,props);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq18644){
var G__18645 = cljs.core.first(seq18644);
var seq18644__$1 = cljs.core.next(seq18644);
var G__18646 = cljs.core.first(seq18644__$1);
var seq18644__$2 = cljs.core.next(seq18644__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__18645,G__18646,seq18644__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
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
sablono.interpreter.element = (function sablono$interpreter$element(element__$1){
var vec__18659 = sablono.normalize.element(element__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18659,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18659,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18659,(2),null);
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
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

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
