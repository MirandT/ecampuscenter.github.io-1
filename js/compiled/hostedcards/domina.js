// Compiled by ClojureScript 1.9.542 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_24377 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_24378 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_24379 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_24379,opt_wrapper_24377,table_section_wrapper_24378,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_24377,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_24378,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_24378,cell_wrapper_24379,table_section_wrapper_24378,table_section_wrapper_24378]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__9414__auto__ = div.firstChild;
if(cljs.core.truth_(and__9414__auto__)){
return div.firstChild.childNodes;
} else {
return and__9414__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__24384 = cljs.core.seq.call(null,tbody);
var chunk__24385 = null;
var count__24386 = (0);
var i__24387 = (0);
while(true){
if((i__24387 < count__24386)){
var child = cljs.core._nth.call(null,chunk__24385,i__24387);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__24388 = seq__24384;
var G__24389 = chunk__24385;
var G__24390 = count__24386;
var G__24391 = (i__24387 + (1));
seq__24384 = G__24388;
chunk__24385 = G__24389;
count__24386 = G__24390;
i__24387 = G__24391;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__24384);
if(temp__6738__auto__){
var seq__24384__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24384__$1)){
var c__10337__auto__ = cljs.core.chunk_first.call(null,seq__24384__$1);
var G__24392 = cljs.core.chunk_rest.call(null,seq__24384__$1);
var G__24393 = c__10337__auto__;
var G__24394 = cljs.core.count.call(null,c__10337__auto__);
var G__24395 = (0);
seq__24384 = G__24392;
chunk__24385 = G__24393;
count__24386 = G__24394;
i__24387 = G__24395;
continue;
} else {
var child = cljs.core.first.call(null,seq__24384__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__24396 = cljs.core.next.call(null,seq__24384__$1);
var G__24397 = null;
var G__24398 = (0);
var G__24399 = (0);
seq__24384 = G__24396;
chunk__24385 = G__24397;
count__24386 = G__24398;
i__24387 = G__24399;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__24403 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__24403,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__24403,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__24403,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__24406 = wrapper.lastChild;
var G__24407 = (level - (1));
wrapper = G__24406;
level = G__24407;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__9414__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__9414__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__9414__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__10144__auto__ = (((content == null))?null:content);
var m__10145__auto__ = (domina.nodes[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,content);
} else {
var m__10145__auto____$1 = (domina.nodes["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__10144__auto__ = (((nodeseq == null))?null:nodeseq);
var m__10145__auto__ = (domina.single_node[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,nodeseq);
} else {
var m__10145__auto____$1 = (domina.single_node["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__10654__auto__ = [];
var len__10647__auto___24409 = arguments.length;
var i__10648__auto___24410 = (0);
while(true){
if((i__10648__auto___24410 < len__10647__auto___24409)){
args__10654__auto__.push((arguments[i__10648__auto___24410]));

var G__24411 = (i__10648__auto___24410 + (1));
i__10648__auto___24410 = G__24411;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq24408){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24408));
});

domina.log = (function domina$log(var_args){
var args__10654__auto__ = [];
var len__10647__auto___24413 = arguments.length;
var i__10648__auto___24414 = (0);
while(true){
if((i__10648__auto___24414 < len__10647__auto___24413)){
args__10654__auto__.push((arguments[i__10648__auto___24414]));

var G__24415 = (i__10648__auto___24414 + (1));
i__10648__auto___24414 = G__24415;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq24412){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24412));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__10654__auto__ = [];
var len__10647__auto___24417 = arguments.length;
var i__10648__auto___24418 = (0);
while(true){
if((i__10648__auto___24418 < len__10647__auto___24417)){
args__10654__auto__.push((arguments[i__10648__auto___24418]));

var G__24419 = (i__10648__auto___24418 + (1));
i__10648__auto___24418 = G__24419;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq24416){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24416));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__24420_SHARP_){
return p1__24420_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__24421_SHARP_,p2__24422_SHARP_){
return goog.dom.insertChildAt(p1__24421_SHARP_,p2__24422_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__24424_SHARP_,p2__24423_SHARP_){
return goog.dom.insertSiblingBefore(p2__24423_SHARP_,p1__24424_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__24426_SHARP_,p2__24425_SHARP_){
return goog.dom.insertSiblingAfter(p2__24425_SHARP_,p1__24426_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__24428_SHARP_,p2__24427_SHARP_){
return goog.dom.replaceNode(p2__24427_SHARP_,p1__24428_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__10654__auto__ = [];
var len__10647__auto___24436 = arguments.length;
var i__10648__auto___24437 = (0);
while(true){
if((i__10648__auto___24437 < len__10647__auto___24436)){
args__10654__auto__.push((arguments[i__10648__auto___24437]));

var G__24438 = (i__10648__auto___24437 + (1));
i__10648__auto___24437 = G__24438;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((2) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10655__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__24432_24439 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24433_24440 = null;
var count__24434_24441 = (0);
var i__24435_24442 = (0);
while(true){
if((i__24435_24442 < count__24434_24441)){
var n_24443 = cljs.core._nth.call(null,chunk__24433_24440,i__24435_24442);
goog.style.setStyle(n_24443,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__24444 = seq__24432_24439;
var G__24445 = chunk__24433_24440;
var G__24446 = count__24434_24441;
var G__24447 = (i__24435_24442 + (1));
seq__24432_24439 = G__24444;
chunk__24433_24440 = G__24445;
count__24434_24441 = G__24446;
i__24435_24442 = G__24447;
continue;
} else {
var temp__6738__auto___24448 = cljs.core.seq.call(null,seq__24432_24439);
if(temp__6738__auto___24448){
var seq__24432_24449__$1 = temp__6738__auto___24448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24432_24449__$1)){
var c__10337__auto___24450 = cljs.core.chunk_first.call(null,seq__24432_24449__$1);
var G__24451 = cljs.core.chunk_rest.call(null,seq__24432_24449__$1);
var G__24452 = c__10337__auto___24450;
var G__24453 = cljs.core.count.call(null,c__10337__auto___24450);
var G__24454 = (0);
seq__24432_24439 = G__24451;
chunk__24433_24440 = G__24452;
count__24434_24441 = G__24453;
i__24435_24442 = G__24454;
continue;
} else {
var n_24455 = cljs.core.first.call(null,seq__24432_24449__$1);
goog.style.setStyle(n_24455,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__24456 = cljs.core.next.call(null,seq__24432_24449__$1);
var G__24457 = null;
var G__24458 = (0);
var G__24459 = (0);
seq__24432_24439 = G__24456;
chunk__24433_24440 = G__24457;
count__24434_24441 = G__24458;
i__24435_24442 = G__24459;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq24429){
var G__24430 = cljs.core.first.call(null,seq24429);
var seq24429__$1 = cljs.core.next.call(null,seq24429);
var G__24431 = cljs.core.first.call(null,seq24429__$1);
var seq24429__$2 = cljs.core.next.call(null,seq24429__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24430,G__24431,seq24429__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__10654__auto__ = [];
var len__10647__auto___24467 = arguments.length;
var i__10648__auto___24468 = (0);
while(true){
if((i__10648__auto___24468 < len__10647__auto___24467)){
args__10654__auto__.push((arguments[i__10648__auto___24468]));

var G__24469 = (i__10648__auto___24468 + (1));
i__10648__auto___24468 = G__24469;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((2) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10655__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__24463_24470 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24464_24471 = null;
var count__24465_24472 = (0);
var i__24466_24473 = (0);
while(true){
if((i__24466_24473 < count__24465_24472)){
var n_24474 = cljs.core._nth.call(null,chunk__24464_24471,i__24466_24473);
n_24474.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__24475 = seq__24463_24470;
var G__24476 = chunk__24464_24471;
var G__24477 = count__24465_24472;
var G__24478 = (i__24466_24473 + (1));
seq__24463_24470 = G__24475;
chunk__24464_24471 = G__24476;
count__24465_24472 = G__24477;
i__24466_24473 = G__24478;
continue;
} else {
var temp__6738__auto___24479 = cljs.core.seq.call(null,seq__24463_24470);
if(temp__6738__auto___24479){
var seq__24463_24480__$1 = temp__6738__auto___24479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24463_24480__$1)){
var c__10337__auto___24481 = cljs.core.chunk_first.call(null,seq__24463_24480__$1);
var G__24482 = cljs.core.chunk_rest.call(null,seq__24463_24480__$1);
var G__24483 = c__10337__auto___24481;
var G__24484 = cljs.core.count.call(null,c__10337__auto___24481);
var G__24485 = (0);
seq__24463_24470 = G__24482;
chunk__24464_24471 = G__24483;
count__24465_24472 = G__24484;
i__24466_24473 = G__24485;
continue;
} else {
var n_24486 = cljs.core.first.call(null,seq__24463_24480__$1);
n_24486.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__24487 = cljs.core.next.call(null,seq__24463_24480__$1);
var G__24488 = null;
var G__24489 = (0);
var G__24490 = (0);
seq__24463_24470 = G__24487;
chunk__24464_24471 = G__24488;
count__24465_24472 = G__24489;
i__24466_24473 = G__24490;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq24460){
var G__24461 = cljs.core.first.call(null,seq24460);
var seq24460__$1 = cljs.core.next.call(null,seq24460);
var G__24462 = cljs.core.first.call(null,seq24460__$1);
var seq24460__$2 = cljs.core.next.call(null,seq24460__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24461,G__24462,seq24460__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__24495_24499 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24496_24500 = null;
var count__24497_24501 = (0);
var i__24498_24502 = (0);
while(true){
if((i__24498_24502 < count__24497_24501)){
var n_24503 = cljs.core._nth.call(null,chunk__24496_24500,i__24498_24502);
n_24503.removeAttribute(cljs.core.name.call(null,name));

var G__24504 = seq__24495_24499;
var G__24505 = chunk__24496_24500;
var G__24506 = count__24497_24501;
var G__24507 = (i__24498_24502 + (1));
seq__24495_24499 = G__24504;
chunk__24496_24500 = G__24505;
count__24497_24501 = G__24506;
i__24498_24502 = G__24507;
continue;
} else {
var temp__6738__auto___24508 = cljs.core.seq.call(null,seq__24495_24499);
if(temp__6738__auto___24508){
var seq__24495_24509__$1 = temp__6738__auto___24508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24495_24509__$1)){
var c__10337__auto___24510 = cljs.core.chunk_first.call(null,seq__24495_24509__$1);
var G__24511 = cljs.core.chunk_rest.call(null,seq__24495_24509__$1);
var G__24512 = c__10337__auto___24510;
var G__24513 = cljs.core.count.call(null,c__10337__auto___24510);
var G__24514 = (0);
seq__24495_24499 = G__24511;
chunk__24496_24500 = G__24512;
count__24497_24501 = G__24513;
i__24498_24502 = G__24514;
continue;
} else {
var n_24515 = cljs.core.first.call(null,seq__24495_24509__$1);
n_24515.removeAttribute(cljs.core.name.call(null,name));

var G__24516 = cljs.core.next.call(null,seq__24495_24509__$1);
var G__24517 = null;
var G__24518 = (0);
var G__24519 = (0);
seq__24495_24499 = G__24516;
chunk__24496_24500 = G__24517;
count__24497_24501 = G__24518;
i__24498_24502 = G__24519;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__24523 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__24523,(0),null);
var v = cljs.core.nth.call(null,vec__24523,(1),null);
if(cljs.core.truth_((function (){var and__9414__auto__ = k;
if(cljs.core.truth_(and__9414__auto__)){
return v;
} else {
return and__9414__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__24526_SHARP_){
var attr = attrs.item(p1__24526_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__24537_24547 = cljs.core.seq.call(null,styles);
var chunk__24538_24548 = null;
var count__24539_24549 = (0);
var i__24540_24550 = (0);
while(true){
if((i__24540_24550 < count__24539_24549)){
var vec__24541_24551 = cljs.core._nth.call(null,chunk__24538_24548,i__24540_24550);
var name_24552 = cljs.core.nth.call(null,vec__24541_24551,(0),null);
var value_24553 = cljs.core.nth.call(null,vec__24541_24551,(1),null);
domina.set_style_BANG_.call(null,content,name_24552,value_24553);

var G__24554 = seq__24537_24547;
var G__24555 = chunk__24538_24548;
var G__24556 = count__24539_24549;
var G__24557 = (i__24540_24550 + (1));
seq__24537_24547 = G__24554;
chunk__24538_24548 = G__24555;
count__24539_24549 = G__24556;
i__24540_24550 = G__24557;
continue;
} else {
var temp__6738__auto___24558 = cljs.core.seq.call(null,seq__24537_24547);
if(temp__6738__auto___24558){
var seq__24537_24559__$1 = temp__6738__auto___24558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24537_24559__$1)){
var c__10337__auto___24560 = cljs.core.chunk_first.call(null,seq__24537_24559__$1);
var G__24561 = cljs.core.chunk_rest.call(null,seq__24537_24559__$1);
var G__24562 = c__10337__auto___24560;
var G__24563 = cljs.core.count.call(null,c__10337__auto___24560);
var G__24564 = (0);
seq__24537_24547 = G__24561;
chunk__24538_24548 = G__24562;
count__24539_24549 = G__24563;
i__24540_24550 = G__24564;
continue;
} else {
var vec__24544_24565 = cljs.core.first.call(null,seq__24537_24559__$1);
var name_24566 = cljs.core.nth.call(null,vec__24544_24565,(0),null);
var value_24567 = cljs.core.nth.call(null,vec__24544_24565,(1),null);
domina.set_style_BANG_.call(null,content,name_24566,value_24567);

var G__24568 = cljs.core.next.call(null,seq__24537_24559__$1);
var G__24569 = null;
var G__24570 = (0);
var G__24571 = (0);
seq__24537_24547 = G__24568;
chunk__24538_24548 = G__24569;
count__24539_24549 = G__24570;
i__24540_24550 = G__24571;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__24582_24592 = cljs.core.seq.call(null,attrs);
var chunk__24583_24593 = null;
var count__24584_24594 = (0);
var i__24585_24595 = (0);
while(true){
if((i__24585_24595 < count__24584_24594)){
var vec__24586_24596 = cljs.core._nth.call(null,chunk__24583_24593,i__24585_24595);
var name_24597 = cljs.core.nth.call(null,vec__24586_24596,(0),null);
var value_24598 = cljs.core.nth.call(null,vec__24586_24596,(1),null);
domina.set_attr_BANG_.call(null,content,name_24597,value_24598);

var G__24599 = seq__24582_24592;
var G__24600 = chunk__24583_24593;
var G__24601 = count__24584_24594;
var G__24602 = (i__24585_24595 + (1));
seq__24582_24592 = G__24599;
chunk__24583_24593 = G__24600;
count__24584_24594 = G__24601;
i__24585_24595 = G__24602;
continue;
} else {
var temp__6738__auto___24603 = cljs.core.seq.call(null,seq__24582_24592);
if(temp__6738__auto___24603){
var seq__24582_24604__$1 = temp__6738__auto___24603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24582_24604__$1)){
var c__10337__auto___24605 = cljs.core.chunk_first.call(null,seq__24582_24604__$1);
var G__24606 = cljs.core.chunk_rest.call(null,seq__24582_24604__$1);
var G__24607 = c__10337__auto___24605;
var G__24608 = cljs.core.count.call(null,c__10337__auto___24605);
var G__24609 = (0);
seq__24582_24592 = G__24606;
chunk__24583_24593 = G__24607;
count__24584_24594 = G__24608;
i__24585_24595 = G__24609;
continue;
} else {
var vec__24589_24610 = cljs.core.first.call(null,seq__24582_24604__$1);
var name_24611 = cljs.core.nth.call(null,vec__24589_24610,(0),null);
var value_24612 = cljs.core.nth.call(null,vec__24589_24610,(1),null);
domina.set_attr_BANG_.call(null,content,name_24611,value_24612);

var G__24613 = cljs.core.next.call(null,seq__24582_24604__$1);
var G__24614 = null;
var G__24615 = (0);
var G__24616 = (0);
seq__24582_24592 = G__24613;
chunk__24583_24593 = G__24614;
count__24584_24594 = G__24615;
i__24585_24595 = G__24616;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__24621_24625 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24622_24626 = null;
var count__24623_24627 = (0);
var i__24624_24628 = (0);
while(true){
if((i__24624_24628 < count__24623_24627)){
var node_24629 = cljs.core._nth.call(null,chunk__24622_24626,i__24624_24628);
goog.dom.classes.add(node_24629,class$);

var G__24630 = seq__24621_24625;
var G__24631 = chunk__24622_24626;
var G__24632 = count__24623_24627;
var G__24633 = (i__24624_24628 + (1));
seq__24621_24625 = G__24630;
chunk__24622_24626 = G__24631;
count__24623_24627 = G__24632;
i__24624_24628 = G__24633;
continue;
} else {
var temp__6738__auto___24634 = cljs.core.seq.call(null,seq__24621_24625);
if(temp__6738__auto___24634){
var seq__24621_24635__$1 = temp__6738__auto___24634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24621_24635__$1)){
var c__10337__auto___24636 = cljs.core.chunk_first.call(null,seq__24621_24635__$1);
var G__24637 = cljs.core.chunk_rest.call(null,seq__24621_24635__$1);
var G__24638 = c__10337__auto___24636;
var G__24639 = cljs.core.count.call(null,c__10337__auto___24636);
var G__24640 = (0);
seq__24621_24625 = G__24637;
chunk__24622_24626 = G__24638;
count__24623_24627 = G__24639;
i__24624_24628 = G__24640;
continue;
} else {
var node_24641 = cljs.core.first.call(null,seq__24621_24635__$1);
goog.dom.classes.add(node_24641,class$);

var G__24642 = cljs.core.next.call(null,seq__24621_24635__$1);
var G__24643 = null;
var G__24644 = (0);
var G__24645 = (0);
seq__24621_24625 = G__24642;
chunk__24622_24626 = G__24643;
count__24623_24627 = G__24644;
i__24624_24628 = G__24645;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__24650_24654 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24651_24655 = null;
var count__24652_24656 = (0);
var i__24653_24657 = (0);
while(true){
if((i__24653_24657 < count__24652_24656)){
var node_24658 = cljs.core._nth.call(null,chunk__24651_24655,i__24653_24657);
goog.dom.classes.remove(node_24658,class$);

var G__24659 = seq__24650_24654;
var G__24660 = chunk__24651_24655;
var G__24661 = count__24652_24656;
var G__24662 = (i__24653_24657 + (1));
seq__24650_24654 = G__24659;
chunk__24651_24655 = G__24660;
count__24652_24656 = G__24661;
i__24653_24657 = G__24662;
continue;
} else {
var temp__6738__auto___24663 = cljs.core.seq.call(null,seq__24650_24654);
if(temp__6738__auto___24663){
var seq__24650_24664__$1 = temp__6738__auto___24663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24650_24664__$1)){
var c__10337__auto___24665 = cljs.core.chunk_first.call(null,seq__24650_24664__$1);
var G__24666 = cljs.core.chunk_rest.call(null,seq__24650_24664__$1);
var G__24667 = c__10337__auto___24665;
var G__24668 = cljs.core.count.call(null,c__10337__auto___24665);
var G__24669 = (0);
seq__24650_24654 = G__24666;
chunk__24651_24655 = G__24667;
count__24652_24656 = G__24668;
i__24653_24657 = G__24669;
continue;
} else {
var node_24670 = cljs.core.first.call(null,seq__24650_24664__$1);
goog.dom.classes.remove(node_24670,class$);

var G__24671 = cljs.core.next.call(null,seq__24650_24664__$1);
var G__24672 = null;
var G__24673 = (0);
var G__24674 = (0);
seq__24650_24654 = G__24671;
chunk__24651_24655 = G__24672;
count__24652_24656 = G__24673;
i__24653_24657 = G__24674;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__24679_24683 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24680_24684 = null;
var count__24681_24685 = (0);
var i__24682_24686 = (0);
while(true){
if((i__24682_24686 < count__24681_24685)){
var node_24687 = cljs.core._nth.call(null,chunk__24680_24684,i__24682_24686);
goog.dom.classes.toggle(node_24687,class$);

var G__24688 = seq__24679_24683;
var G__24689 = chunk__24680_24684;
var G__24690 = count__24681_24685;
var G__24691 = (i__24682_24686 + (1));
seq__24679_24683 = G__24688;
chunk__24680_24684 = G__24689;
count__24681_24685 = G__24690;
i__24682_24686 = G__24691;
continue;
} else {
var temp__6738__auto___24692 = cljs.core.seq.call(null,seq__24679_24683);
if(temp__6738__auto___24692){
var seq__24679_24693__$1 = temp__6738__auto___24692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24679_24693__$1)){
var c__10337__auto___24694 = cljs.core.chunk_first.call(null,seq__24679_24693__$1);
var G__24695 = cljs.core.chunk_rest.call(null,seq__24679_24693__$1);
var G__24696 = c__10337__auto___24694;
var G__24697 = cljs.core.count.call(null,c__10337__auto___24694);
var G__24698 = (0);
seq__24679_24683 = G__24695;
chunk__24680_24684 = G__24696;
count__24681_24685 = G__24697;
i__24682_24686 = G__24698;
continue;
} else {
var node_24699 = cljs.core.first.call(null,seq__24679_24693__$1);
goog.dom.classes.toggle(node_24699,class$);

var G__24700 = cljs.core.next.call(null,seq__24679_24693__$1);
var G__24701 = null;
var G__24702 = (0);
var G__24703 = (0);
seq__24679_24683 = G__24700;
chunk__24680_24684 = G__24701;
count__24681_24685 = G__24702;
i__24682_24686 = G__24703;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_24712__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__24708_24713 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24709_24714 = null;
var count__24710_24715 = (0);
var i__24711_24716 = (0);
while(true){
if((i__24711_24716 < count__24710_24715)){
var node_24717 = cljs.core._nth.call(null,chunk__24709_24714,i__24711_24716);
goog.dom.classes.set(node_24717,classes_24712__$1);

var G__24718 = seq__24708_24713;
var G__24719 = chunk__24709_24714;
var G__24720 = count__24710_24715;
var G__24721 = (i__24711_24716 + (1));
seq__24708_24713 = G__24718;
chunk__24709_24714 = G__24719;
count__24710_24715 = G__24720;
i__24711_24716 = G__24721;
continue;
} else {
var temp__6738__auto___24722 = cljs.core.seq.call(null,seq__24708_24713);
if(temp__6738__auto___24722){
var seq__24708_24723__$1 = temp__6738__auto___24722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24708_24723__$1)){
var c__10337__auto___24724 = cljs.core.chunk_first.call(null,seq__24708_24723__$1);
var G__24725 = cljs.core.chunk_rest.call(null,seq__24708_24723__$1);
var G__24726 = c__10337__auto___24724;
var G__24727 = cljs.core.count.call(null,c__10337__auto___24724);
var G__24728 = (0);
seq__24708_24713 = G__24725;
chunk__24709_24714 = G__24726;
count__24710_24715 = G__24727;
i__24711_24716 = G__24728;
continue;
} else {
var node_24729 = cljs.core.first.call(null,seq__24708_24723__$1);
goog.dom.classes.set(node_24729,classes_24712__$1);

var G__24730 = cljs.core.next.call(null,seq__24708_24723__$1);
var G__24731 = null;
var G__24732 = (0);
var G__24733 = (0);
seq__24708_24713 = G__24730;
chunk__24709_24714 = G__24731;
count__24710_24715 = G__24732;
i__24711_24716 = G__24733;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__24738_24742 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24739_24743 = null;
var count__24740_24744 = (0);
var i__24741_24745 = (0);
while(true){
if((i__24741_24745 < count__24740_24744)){
var node_24746 = cljs.core._nth.call(null,chunk__24739_24743,i__24741_24745);
goog.dom.setTextContent(node_24746,value);

var G__24747 = seq__24738_24742;
var G__24748 = chunk__24739_24743;
var G__24749 = count__24740_24744;
var G__24750 = (i__24741_24745 + (1));
seq__24738_24742 = G__24747;
chunk__24739_24743 = G__24748;
count__24740_24744 = G__24749;
i__24741_24745 = G__24750;
continue;
} else {
var temp__6738__auto___24751 = cljs.core.seq.call(null,seq__24738_24742);
if(temp__6738__auto___24751){
var seq__24738_24752__$1 = temp__6738__auto___24751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24738_24752__$1)){
var c__10337__auto___24753 = cljs.core.chunk_first.call(null,seq__24738_24752__$1);
var G__24754 = cljs.core.chunk_rest.call(null,seq__24738_24752__$1);
var G__24755 = c__10337__auto___24753;
var G__24756 = cljs.core.count.call(null,c__10337__auto___24753);
var G__24757 = (0);
seq__24738_24742 = G__24754;
chunk__24739_24743 = G__24755;
count__24740_24744 = G__24756;
i__24741_24745 = G__24757;
continue;
} else {
var node_24758 = cljs.core.first.call(null,seq__24738_24752__$1);
goog.dom.setTextContent(node_24758,value);

var G__24759 = cljs.core.next.call(null,seq__24738_24752__$1);
var G__24760 = null;
var G__24761 = (0);
var G__24762 = (0);
seq__24738_24742 = G__24759;
chunk__24739_24743 = G__24760;
count__24740_24744 = G__24761;
i__24741_24745 = G__24762;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__24767_24771 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24768_24772 = null;
var count__24769_24773 = (0);
var i__24770_24774 = (0);
while(true){
if((i__24770_24774 < count__24769_24773)){
var node_24775 = cljs.core._nth.call(null,chunk__24768_24772,i__24770_24774);
goog.dom.forms.setValue(node_24775,value);

var G__24776 = seq__24767_24771;
var G__24777 = chunk__24768_24772;
var G__24778 = count__24769_24773;
var G__24779 = (i__24770_24774 + (1));
seq__24767_24771 = G__24776;
chunk__24768_24772 = G__24777;
count__24769_24773 = G__24778;
i__24770_24774 = G__24779;
continue;
} else {
var temp__6738__auto___24780 = cljs.core.seq.call(null,seq__24767_24771);
if(temp__6738__auto___24780){
var seq__24767_24781__$1 = temp__6738__auto___24780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24767_24781__$1)){
var c__10337__auto___24782 = cljs.core.chunk_first.call(null,seq__24767_24781__$1);
var G__24783 = cljs.core.chunk_rest.call(null,seq__24767_24781__$1);
var G__24784 = c__10337__auto___24782;
var G__24785 = cljs.core.count.call(null,c__10337__auto___24782);
var G__24786 = (0);
seq__24767_24771 = G__24783;
chunk__24768_24772 = G__24784;
count__24769_24773 = G__24785;
i__24770_24774 = G__24786;
continue;
} else {
var node_24787 = cljs.core.first.call(null,seq__24767_24781__$1);
goog.dom.forms.setValue(node_24787,value);

var G__24788 = cljs.core.next.call(null,seq__24767_24781__$1);
var G__24789 = null;
var G__24790 = (0);
var G__24791 = (0);
seq__24767_24771 = G__24788;
chunk__24768_24772 = G__24789;
count__24769_24773 = G__24790;
i__24770_24774 = G__24791;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if((allows_inner_html_QMARK_) && ((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_))) && (!(special_tag_QMARK_))){
var value_24802 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__24798_24803 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24799_24804 = null;
var count__24800_24805 = (0);
var i__24801_24806 = (0);
while(true){
if((i__24801_24806 < count__24800_24805)){
var node_24807 = cljs.core._nth.call(null,chunk__24799_24804,i__24801_24806);
node_24807.innerHTML = value_24802;

var G__24808 = seq__24798_24803;
var G__24809 = chunk__24799_24804;
var G__24810 = count__24800_24805;
var G__24811 = (i__24801_24806 + (1));
seq__24798_24803 = G__24808;
chunk__24799_24804 = G__24809;
count__24800_24805 = G__24810;
i__24801_24806 = G__24811;
continue;
} else {
var temp__6738__auto___24812 = cljs.core.seq.call(null,seq__24798_24803);
if(temp__6738__auto___24812){
var seq__24798_24813__$1 = temp__6738__auto___24812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24798_24813__$1)){
var c__10337__auto___24814 = cljs.core.chunk_first.call(null,seq__24798_24813__$1);
var G__24815 = cljs.core.chunk_rest.call(null,seq__24798_24813__$1);
var G__24816 = c__10337__auto___24814;
var G__24817 = cljs.core.count.call(null,c__10337__auto___24814);
var G__24818 = (0);
seq__24798_24803 = G__24815;
chunk__24799_24804 = G__24816;
count__24800_24805 = G__24817;
i__24801_24806 = G__24818;
continue;
} else {
var node_24819 = cljs.core.first.call(null,seq__24798_24813__$1);
node_24819.innerHTML = value_24802;

var G__24820 = cljs.core.next.call(null,seq__24798_24813__$1);
var G__24821 = null;
var G__24822 = (0);
var G__24823 = (0);
seq__24798_24803 = G__24820;
chunk__24799_24804 = G__24821;
count__24800_24805 = G__24822;
i__24801_24806 = G__24823;
continue;
}
} else {
}
}
break;
}
}catch (e24797){if((e24797 instanceof Error)){
var e_24824 = e24797;
domina.replace_children_BANG_.call(null,content,value_24802);
} else {
throw e24797;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var args24825 = [];
var len__10647__auto___24828 = arguments.length;
var i__10648__auto___24829 = (0);
while(true){
if((i__10648__auto___24829 < len__10647__auto___24828)){
args24825.push((arguments[i__10648__auto___24829]));

var G__24830 = (i__10648__auto___24829 + (1));
i__10648__auto___24829 = G__24830;
continue;
} else {
}
break;
}

var G__24827 = args24825.length;
switch (G__24827) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24825.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__9414__auto__ = bubble;
if(cljs.core.truth_(and__9414__auto__)){
return (value == null);
} else {
return and__9414__auto__;
}
})())){
var temp__6738__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__6738__auto__)){
var parent = temp__6738__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__9426__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__24838_24842 = cljs.core.seq.call(null,children);
var chunk__24839_24843 = null;
var count__24840_24844 = (0);
var i__24841_24845 = (0);
while(true){
if((i__24841_24845 < count__24840_24844)){
var child_24846 = cljs.core._nth.call(null,chunk__24839_24843,i__24841_24845);
frag.appendChild(child_24846);

var G__24847 = seq__24838_24842;
var G__24848 = chunk__24839_24843;
var G__24849 = count__24840_24844;
var G__24850 = (i__24841_24845 + (1));
seq__24838_24842 = G__24847;
chunk__24839_24843 = G__24848;
count__24840_24844 = G__24849;
i__24841_24845 = G__24850;
continue;
} else {
var temp__6738__auto___24851 = cljs.core.seq.call(null,seq__24838_24842);
if(temp__6738__auto___24851){
var seq__24838_24852__$1 = temp__6738__auto___24851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24838_24852__$1)){
var c__10337__auto___24853 = cljs.core.chunk_first.call(null,seq__24838_24852__$1);
var G__24854 = cljs.core.chunk_rest.call(null,seq__24838_24852__$1);
var G__24855 = c__10337__auto___24853;
var G__24856 = cljs.core.count.call(null,c__10337__auto___24853);
var G__24857 = (0);
seq__24838_24842 = G__24854;
chunk__24839_24843 = G__24855;
count__24840_24844 = G__24856;
i__24841_24845 = G__24857;
continue;
} else {
var child_24858 = cljs.core.first.call(null,seq__24838_24852__$1);
frag.appendChild(child_24858);

var G__24859 = cljs.core.next.call(null,seq__24838_24852__$1);
var G__24860 = null;
var G__24861 = (0);
var G__24862 = (0);
seq__24838_24842 = G__24859;
chunk__24839_24843 = G__24860;
count__24840_24844 = G__24861;
i__24841_24845 = G__24862;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__24832_SHARP_,p2__24833_SHARP_){
return f.call(null,p1__24832_SHARP_,p2__24833_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args24863 = [];
var len__10647__auto___24866 = arguments.length;
var i__10648__auto___24867 = (0);
while(true){
if((i__10648__auto___24867 < len__10647__auto___24866)){
args24863.push((arguments[i__10648__auto___24867]));

var G__24868 = (i__10648__auto___24867 + (1));
i__10648__auto___24867 = G__24868;
continue;
} else {
}
break;
}

var G__24865 = args24863.length;
switch (G__24865) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24863.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var args24870 = [];
var len__10647__auto___24873 = arguments.length;
var i__10648__auto___24874 = (0);
while(true){
if((i__10648__auto___24874 < len__10647__auto___24873)){
args24870.push((arguments[i__10648__auto___24874]));

var G__24875 = (i__10648__auto___24874 + (1));
i__10648__auto___24874 = G__24875;
continue;
} else {
}
break;
}

var G__24872 = args24870.length;
switch (G__24872) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24870.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__9414__auto__ = obj;
if(cljs.core.truth_(and__9414__auto__)){
var and__9414__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__9414__auto____$1){
return obj.length;
} else {
return and__9414__auto____$1;
}
} else {
return and__9414__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$)))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}
