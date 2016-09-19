// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function domina$xpath$select_node_STAR_(path,node,technique_1,technique_2){
var doc = goog.dom.getOwnerDocument(node);
if(cljs.core.truth_((function (){var and__6397__auto__ = node.selectSingleNode;
if(cljs.core.truth_(and__6397__auto__)){
return doc.setProperty;
} else {
return and__6397__auto__;
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
var G__22955 = (i + (1));
var G__22956 = cljs.core.cons(result.snapshotItem(i),acc);
i = G__22955;
acc = G__22956;
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
var args22957 = [];
var len__7484__auto___22963 = arguments.length;
var i__7485__auto___22964 = (0);
while(true){
if((i__7485__auto___22964 < len__7484__auto___22963)){
args22957.push((arguments[i__7485__auto___22964]));

var G__22965 = (i__7485__auto___22964 + (1));
i__7485__auto___22964 = G__22965;
continue;
} else {
}
break;
}

var G__22959 = args22957.length;
switch (G__22959) {
case 1:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22957.length)].join('')));

}
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(domina.xpath.root_element(),expr);
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.xpath.t_domina$xpath22960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.xpath.t_domina$xpath22960 = (function (base,expr,meta22961){
this.base = base;
this.expr = expr;
this.meta22961 = meta22961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.xpath.t_domina$xpath22960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22962,meta22961__$1){
var self__ = this;
var _22962__$1 = this;
return (new domina.xpath.t_domina$xpath22960(self__.base,self__.expr,meta22961__$1));
});

domina.xpath.t_domina$xpath22960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22962){
var self__ = this;
var _22962__$1 = this;
return self__.meta22961;
});

domina.xpath.t_domina$xpath22960.prototype.domina$DomContent$ = true;

domina.xpath.t_domina$xpath22960.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_nodes,self__.expr),cljs.core.array_seq([domina.nodes(self__.base)], 0));
});

domina.xpath.t_domina$xpath22960.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_node,self__.expr),domina.nodes(self__.base))));
});

domina.xpath.t_domina$xpath22960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$base,cljs.core.cst$sym$expr,cljs.core.cst$sym$meta22961], null);
});

domina.xpath.t_domina$xpath22960.cljs$lang$type = true;

domina.xpath.t_domina$xpath22960.cljs$lang$ctorStr = "domina.xpath/t_domina$xpath22960";

domina.xpath.t_domina$xpath22960.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"domina.xpath/t_domina$xpath22960");
});

domina.xpath.__GT_t_domina$xpath22960 = (function domina$xpath$__GT_t_domina$xpath22960(base__$1,expr__$1,meta22961){
return (new domina.xpath.t_domina$xpath22960(base__$1,expr__$1,meta22961));
});

}

return (new domina.xpath.t_domina$xpath22960(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.xpath.xpath.cljs$lang$maxFixedArity = 2;

