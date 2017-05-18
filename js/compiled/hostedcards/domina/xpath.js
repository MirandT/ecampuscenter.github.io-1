// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function domina$xpath$select_node_STAR_(path,node,technique_1,technique_2){
var doc = goog.dom.getOwnerDocument(node);
if(cljs.core.truth_((function (){var and__9414__auto__ = node.selectSingleNode;
if(cljs.core.truth_(and__9414__auto__)){
return doc.setProperty;
} else {
return and__9414__auto__;
}
})())){
doc.setProperty("SelectionLanguage","XPath");

return (technique_1.cljs$core$IFn$_invoke$arity$2 ? technique_1.cljs$core$IFn$_invoke$arity$2(node,path) : technique_1.call(null,node,path));
} else {
if(cljs.core.truth_(doc.evaluate)){
return (technique_2.cljs$core$IFn$_invoke$arity$4 ? technique_2.cljs$core$IFn$_invoke$arity$4(null,doc,node,path) : technique_2.call(null,null,doc,node,path));
} else {
throw (new Error("Could not find XPath support in this browser."));

}
}
});
/**
 * Selects a single node using an XPath expression and a root node
 */
domina.xpath.select_node = (function domina$xpath$select_node(expr,node){
return domina.xpath.select_node_STAR_(expr,node,(function (node__$1,expr__$1){
return node__$1.selectSingleNode(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
return result.singleNodeValue;
}));
});
/**
 * Selects multiple nodes using an XPath expression and a root node
 */
domina.xpath.select_nodes = (function domina$xpath$select_nodes(expr,node){
return domina.xpath.select_node_STAR_(expr,node,(function (node__$1,expr__$1){
return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results = result.snapshotLength;
var i = (0);
var acc = null;
while(true){
if((i < num_results)){
var G__26980 = (i + (1));
var G__26981 = cljs.core.cons(result.snapshotItem(i),acc);
i = G__26980;
acc = G__26981;
continue;
} else {
return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function domina$xpath$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.xpath.xpath = (function domina$xpath$xpath(var_args){
var args26982 = [];
var len__10647__auto___26988 = arguments.length;
var i__10648__auto___26989 = (0);
while(true){
if((i__10648__auto___26989 < len__10647__auto___26988)){
args26982.push((arguments[i__10648__auto___26989]));

var G__26990 = (i__10648__auto___26989 + (1));
i__10648__auto___26989 = G__26990;
continue;
} else {
}
break;
}

var G__26984 = args26982.length;
switch (G__26984) {
case 1:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26982.length)].join('')));

}
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(domina.xpath.root_element(),expr);
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.xpath.t_domina$xpath26985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.xpath.t_domina$xpath26985 = (function (base,expr,meta26986){
this.base = base;
this.expr = expr;
this.meta26986 = meta26986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.xpath.t_domina$xpath26985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26987,meta26986__$1){
var self__ = this;
var _26987__$1 = this;
return (new domina.xpath.t_domina$xpath26985(self__.base,self__.expr,meta26986__$1));
});

domina.xpath.t_domina$xpath26985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26987){
var self__ = this;
var _26987__$1 = this;
return self__.meta26986;
});

domina.xpath.t_domina$xpath26985.prototype.domina$DomContent$ = cljs.core.PROTOCOL_SENTINEL;

domina.xpath.t_domina$xpath26985.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_nodes,self__.expr),cljs.core.array_seq([domina.nodes(self__.base)], 0));
});

domina.xpath.t_domina$xpath26985.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_node,self__.expr),domina.nodes(self__.base))));
});

domina.xpath.t_domina$xpath26985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$base,cljs.core.cst$sym$expr,cljs.core.cst$sym$meta26986], null);
});

domina.xpath.t_domina$xpath26985.cljs$lang$type = true;

domina.xpath.t_domina$xpath26985.cljs$lang$ctorStr = "domina.xpath/t_domina$xpath26985";

domina.xpath.t_domina$xpath26985.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"domina.xpath/t_domina$xpath26985");
});

domina.xpath.__GT_t_domina$xpath26985 = (function domina$xpath$__GT_t_domina$xpath26985(base__$1,expr__$1,meta26986){
return (new domina.xpath.t_domina$xpath26985(base__$1,expr__$1,meta26986));
});

}

return (new domina.xpath.t_domina$xpath26985(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.xpath.xpath.cljs$lang$maxFixedArity = 2;

