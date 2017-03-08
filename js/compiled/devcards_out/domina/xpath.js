// Compiled by ClojureScript 1.9.229 {}
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function domina$xpath$select_node_STAR_(path,node,technique_1,technique_2){
var doc = goog.dom.getOwnerDocument(node);
if(cljs.core.truth_((function (){var and__24748__auto__ = node.selectSingleNode;
if(cljs.core.truth_(and__24748__auto__)){
return doc.setProperty;
} else {
return and__24748__auto__;
}
})())){
doc.setProperty("SelectionLanguage","XPath");

return technique_1.call(null,node,path);
} else {
if(cljs.core.truth_(doc.evaluate)){
return technique_2.call(null,null,doc,node,path);
} else {
throw (new Error("Could not find XPath support in this browser."));

}
}
});
/**
 * Selects a single node using an XPath expression and a root node
 */
domina.xpath.select_node = (function domina$xpath$select_node(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){
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
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){
return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results = result.snapshotLength;
var i = (0);
var acc = null;
while(true){
if((i < num_results)){
var G__35397 = (i + (1));
var G__35398 = cljs.core.cons.call(null,result.snapshotItem(i),acc);
i = G__35397;
acc = G__35398;
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
var args35399 = [];
var len__25835__auto___35405 = arguments.length;
var i__25836__auto___35406 = (0);
while(true){
if((i__25836__auto___35406 < len__25835__auto___35405)){
args35399.push((arguments[i__25836__auto___35406]));

var G__35407 = (i__25836__auto___35406 + (1));
i__25836__auto___35406 = G__35407;
continue;
} else {
}
break;
}

var G__35401 = args35399.length;
switch (G__35401) {
case 1:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35399.length)].join('')));

}
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.xpath.xpath.call(null,domina.xpath.root_element.call(null),expr);
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.xpath.t_domina$xpath35402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.xpath.t_domina$xpath35402 = (function (base,expr,meta35403){
this.base = base;
this.expr = expr;
this.meta35403 = meta35403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.xpath.t_domina$xpath35402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35404,meta35403__$1){
var self__ = this;
var _35404__$1 = this;
return (new domina.xpath.t_domina$xpath35402(self__.base,self__.expr,meta35403__$1));
});

domina.xpath.t_domina$xpath35402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35404){
var self__ = this;
var _35404__$1 = this;
return self__.meta35403;
});

domina.xpath.t_domina$xpath35402.prototype.domina$DomContent$ = true;

domina.xpath.t_domina$xpath35402.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,self__.expr),domina.nodes.call(null,self__.base));
});

domina.xpath.t_domina$xpath35402.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,self__.expr),domina.nodes.call(null,self__.base))));
});

domina.xpath.t_domina$xpath35402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta35403","meta35403",-328309298,null)], null);
});

domina.xpath.t_domina$xpath35402.cljs$lang$type = true;

domina.xpath.t_domina$xpath35402.cljs$lang$ctorStr = "domina.xpath/t_domina$xpath35402";

domina.xpath.t_domina$xpath35402.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"domina.xpath/t_domina$xpath35402");
});

domina.xpath.__GT_t_domina$xpath35402 = (function domina$xpath$__GT_t_domina$xpath35402(base__$1,expr__$1,meta35403){
return (new domina.xpath.t_domina$xpath35402(base__$1,expr__$1,meta35403));
});

}

return (new domina.xpath.t_domina$xpath35402(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.xpath.xpath.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=xpath.js.map?rel=1488930782316