// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_20261 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_20262 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_20263 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20263,opt_wrapper_20261,table_section_wrapper_20262,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20261,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20262,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20262,cell_wrapper_20263,table_section_wrapper_20262,table_section_wrapper_20262]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__16854__auto__ = div.firstChild;
if(cljs.core.truth_(and__16854__auto__)){
return div.firstChild.childNodes;
} else {
return and__16854__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__20268 = cljs.core.seq.call(null,tbody);
var chunk__20269 = null;
var count__20270 = (0);
var i__20271 = (0);
while(true){
if((i__20271 < count__20270)){
var child = cljs.core._nth.call(null,chunk__20269,i__20271);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__20272 = seq__20268;
var G__20273 = chunk__20269;
var G__20274 = count__20270;
var G__20275 = (i__20271 + (1));
seq__20268 = G__20272;
chunk__20269 = G__20273;
count__20270 = G__20274;
i__20271 = G__20275;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20268);
if(temp__4425__auto__){
var seq__20268__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20268__$1)){
var c__17669__auto__ = cljs.core.chunk_first.call(null,seq__20268__$1);
var G__20276 = cljs.core.chunk_rest.call(null,seq__20268__$1);
var G__20277 = c__17669__auto__;
var G__20278 = cljs.core.count.call(null,c__17669__auto__);
var G__20279 = (0);
seq__20268 = G__20276;
chunk__20269 = G__20277;
count__20270 = G__20278;
i__20271 = G__20279;
continue;
} else {
var child = cljs.core.first.call(null,seq__20268__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__20280 = cljs.core.next.call(null,seq__20268__$1);
var G__20281 = null;
var G__20282 = (0);
var G__20283 = (0);
seq__20268 = G__20280;
chunk__20269 = G__20281;
count__20270 = G__20282;
i__20271 = G__20283;
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
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__20285 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__20285,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__20285,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__20285,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__20286 = wrapper.lastChild;
var G__20287 = (level - (1));
wrapper = G__20286;
level = G__20287;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__16854__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__16854__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__16854__auto__;
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
domina.nodes;
domina.single_node;

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
var x__17521__auto__ = (((content == null))?null:content);
var m__17522__auto__ = (domina.nodes[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,content);
} else {
var m__17522__auto____$1 = (domina.nodes["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,content);
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
var x__17521__auto__ = (((nodeseq == null))?null:nodeseq);
var m__17522__auto__ = (domina.single_node[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,nodeseq);
} else {
var m__17522__auto____$1 = (domina.single_node["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__17931__auto__ = [];
var len__17924__auto___20289 = arguments.length;
var i__17925__auto___20290 = (0);
while(true){
if((i__17925__auto___20290 < len__17924__auto___20289)){
args__17931__auto__.push((arguments[i__17925__auto___20290]));

var G__20291 = (i__17925__auto___20290 + (1));
i__17925__auto___20290 = G__20291;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((0) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((0)),(0))):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__17932__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__16854__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__16854__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__16854__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq20288){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20288));
});
domina.log = (function domina$log(var_args){
var args__17931__auto__ = [];
var len__17924__auto___20293 = arguments.length;
var i__17925__auto___20294 = (0);
while(true){
if((i__17925__auto___20294 < len__17924__auto___20293)){
args__17931__auto__.push((arguments[i__17925__auto___20294]));

var G__20295 = (i__17925__auto___20294 + (1));
i__17925__auto___20294 = G__20295;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((0) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((0)),(0))):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17932__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq20292){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20292));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
domina.normalize_seq;
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
var args__17931__auto__ = [];
var len__17924__auto___20297 = arguments.length;
var i__17925__auto___20298 = (0);
while(true){
if((i__17925__auto___20298 < len__17924__auto___20297)){
args__17931__auto__.push((arguments[i__17925__auto___20298]));

var G__20299 = (i__17925__auto___20298 + (1));
i__17925__auto___20298 = G__20299;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((0) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((0)),(0))):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__17932__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq20296){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20296));
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
return cljs.core.map.call(null,(function (p1__20300_SHARP_){
return p1__20300_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
domina.apply_with_cloning;
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
domina.apply_with_cloning.call(null,(function (p1__20301_SHARP_,p2__20302_SHARP_){
return goog.dom.insertChildAt(p1__20301_SHARP_,p2__20302_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__20304_SHARP_,p2__20303_SHARP_){
return goog.dom.insertSiblingBefore(p2__20303_SHARP_,p1__20304_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20306_SHARP_,p2__20305_SHARP_){
return goog.dom.insertSiblingAfter(p2__20305_SHARP_,p1__20306_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20308_SHARP_,p2__20307_SHARP_){
return goog.dom.replaceNode(p2__20307_SHARP_,p1__20308_SHARP_);
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
var args__17931__auto__ = [];
var len__17924__auto___20316 = arguments.length;
var i__17925__auto___20317 = (0);
while(true){
if((i__17925__auto___20317 < len__17924__auto___20316)){
args__17931__auto__.push((arguments[i__17925__auto___20317]));

var G__20318 = (i__17925__auto___20317 + (1));
i__17925__auto___20317 = G__20318;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((2) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((2)),(0))):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17932__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__20312_20319 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20313_20320 = null;
var count__20314_20321 = (0);
var i__20315_20322 = (0);
while(true){
if((i__20315_20322 < count__20314_20321)){
var n_20323 = cljs.core._nth.call(null,chunk__20313_20320,i__20315_20322);
goog.style.setStyle(n_20323,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20324 = seq__20312_20319;
var G__20325 = chunk__20313_20320;
var G__20326 = count__20314_20321;
var G__20327 = (i__20315_20322 + (1));
seq__20312_20319 = G__20324;
chunk__20313_20320 = G__20325;
count__20314_20321 = G__20326;
i__20315_20322 = G__20327;
continue;
} else {
var temp__4425__auto___20328 = cljs.core.seq.call(null,seq__20312_20319);
if(temp__4425__auto___20328){
var seq__20312_20329__$1 = temp__4425__auto___20328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20312_20329__$1)){
var c__17669__auto___20330 = cljs.core.chunk_first.call(null,seq__20312_20329__$1);
var G__20331 = cljs.core.chunk_rest.call(null,seq__20312_20329__$1);
var G__20332 = c__17669__auto___20330;
var G__20333 = cljs.core.count.call(null,c__17669__auto___20330);
var G__20334 = (0);
seq__20312_20319 = G__20331;
chunk__20313_20320 = G__20332;
count__20314_20321 = G__20333;
i__20315_20322 = G__20334;
continue;
} else {
var n_20335 = cljs.core.first.call(null,seq__20312_20329__$1);
goog.style.setStyle(n_20335,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20336 = cljs.core.next.call(null,seq__20312_20329__$1);
var G__20337 = null;
var G__20338 = (0);
var G__20339 = (0);
seq__20312_20319 = G__20336;
chunk__20313_20320 = G__20337;
count__20314_20321 = G__20338;
i__20315_20322 = G__20339;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq20309){
var G__20310 = cljs.core.first.call(null,seq20309);
var seq20309__$1 = cljs.core.next.call(null,seq20309);
var G__20311 = cljs.core.first.call(null,seq20309__$1);
var seq20309__$2 = cljs.core.next.call(null,seq20309__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20310,G__20311,seq20309__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__17931__auto__ = [];
var len__17924__auto___20347 = arguments.length;
var i__17925__auto___20348 = (0);
while(true){
if((i__17925__auto___20348 < len__17924__auto___20347)){
args__17931__auto__.push((arguments[i__17925__auto___20348]));

var G__20349 = (i__17925__auto___20348 + (1));
i__17925__auto___20348 = G__20349;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((2) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((2)),(0))):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17932__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__20343_20350 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20344_20351 = null;
var count__20345_20352 = (0);
var i__20346_20353 = (0);
while(true){
if((i__20346_20353 < count__20345_20352)){
var n_20354 = cljs.core._nth.call(null,chunk__20344_20351,i__20346_20353);
n_20354.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20355 = seq__20343_20350;
var G__20356 = chunk__20344_20351;
var G__20357 = count__20345_20352;
var G__20358 = (i__20346_20353 + (1));
seq__20343_20350 = G__20355;
chunk__20344_20351 = G__20356;
count__20345_20352 = G__20357;
i__20346_20353 = G__20358;
continue;
} else {
var temp__4425__auto___20359 = cljs.core.seq.call(null,seq__20343_20350);
if(temp__4425__auto___20359){
var seq__20343_20360__$1 = temp__4425__auto___20359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20343_20360__$1)){
var c__17669__auto___20361 = cljs.core.chunk_first.call(null,seq__20343_20360__$1);
var G__20362 = cljs.core.chunk_rest.call(null,seq__20343_20360__$1);
var G__20363 = c__17669__auto___20361;
var G__20364 = cljs.core.count.call(null,c__17669__auto___20361);
var G__20365 = (0);
seq__20343_20350 = G__20362;
chunk__20344_20351 = G__20363;
count__20345_20352 = G__20364;
i__20346_20353 = G__20365;
continue;
} else {
var n_20366 = cljs.core.first.call(null,seq__20343_20360__$1);
n_20366.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20367 = cljs.core.next.call(null,seq__20343_20360__$1);
var G__20368 = null;
var G__20369 = (0);
var G__20370 = (0);
seq__20343_20350 = G__20367;
chunk__20344_20351 = G__20368;
count__20345_20352 = G__20369;
i__20346_20353 = G__20370;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq20340){
var G__20341 = cljs.core.first.call(null,seq20340);
var seq20340__$1 = cljs.core.next.call(null,seq20340);
var G__20342 = cljs.core.first.call(null,seq20340__$1);
var seq20340__$2 = cljs.core.next.call(null,seq20340__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20341,G__20342,seq20340__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__20375_20379 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20376_20380 = null;
var count__20377_20381 = (0);
var i__20378_20382 = (0);
while(true){
if((i__20378_20382 < count__20377_20381)){
var n_20383 = cljs.core._nth.call(null,chunk__20376_20380,i__20378_20382);
n_20383.removeAttribute(cljs.core.name.call(null,name));

var G__20384 = seq__20375_20379;
var G__20385 = chunk__20376_20380;
var G__20386 = count__20377_20381;
var G__20387 = (i__20378_20382 + (1));
seq__20375_20379 = G__20384;
chunk__20376_20380 = G__20385;
count__20377_20381 = G__20386;
i__20378_20382 = G__20387;
continue;
} else {
var temp__4425__auto___20388 = cljs.core.seq.call(null,seq__20375_20379);
if(temp__4425__auto___20388){
var seq__20375_20389__$1 = temp__4425__auto___20388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20375_20389__$1)){
var c__17669__auto___20390 = cljs.core.chunk_first.call(null,seq__20375_20389__$1);
var G__20391 = cljs.core.chunk_rest.call(null,seq__20375_20389__$1);
var G__20392 = c__17669__auto___20390;
var G__20393 = cljs.core.count.call(null,c__17669__auto___20390);
var G__20394 = (0);
seq__20375_20379 = G__20391;
chunk__20376_20380 = G__20392;
count__20377_20381 = G__20393;
i__20378_20382 = G__20394;
continue;
} else {
var n_20395 = cljs.core.first.call(null,seq__20375_20389__$1);
n_20395.removeAttribute(cljs.core.name.call(null,name));

var G__20396 = cljs.core.next.call(null,seq__20375_20389__$1);
var G__20397 = null;
var G__20398 = (0);
var G__20399 = (0);
seq__20375_20379 = G__20396;
chunk__20376_20380 = G__20397;
count__20377_20381 = G__20398;
i__20378_20382 = G__20399;
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
var vec__20401 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__20401,(0),null);
var v = cljs.core.nth.call(null,vec__20401,(1),null);
if(cljs.core.truth_((function (){var and__16854__auto__ = k;
if(cljs.core.truth_(and__16854__auto__)){
return v;
} else {
return and__16854__auto__;
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
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__20402_SHARP_){
var attr = attrs__$1.item(p1__20402_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__20409_20415 = cljs.core.seq.call(null,styles);
var chunk__20410_20416 = null;
var count__20411_20417 = (0);
var i__20412_20418 = (0);
while(true){
if((i__20412_20418 < count__20411_20417)){
var vec__20413_20419 = cljs.core._nth.call(null,chunk__20410_20416,i__20412_20418);
var name_20420 = cljs.core.nth.call(null,vec__20413_20419,(0),null);
var value_20421 = cljs.core.nth.call(null,vec__20413_20419,(1),null);
domina.set_style_BANG_.call(null,content,name_20420,value_20421);

var G__20422 = seq__20409_20415;
var G__20423 = chunk__20410_20416;
var G__20424 = count__20411_20417;
var G__20425 = (i__20412_20418 + (1));
seq__20409_20415 = G__20422;
chunk__20410_20416 = G__20423;
count__20411_20417 = G__20424;
i__20412_20418 = G__20425;
continue;
} else {
var temp__4425__auto___20426 = cljs.core.seq.call(null,seq__20409_20415);
if(temp__4425__auto___20426){
var seq__20409_20427__$1 = temp__4425__auto___20426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20409_20427__$1)){
var c__17669__auto___20428 = cljs.core.chunk_first.call(null,seq__20409_20427__$1);
var G__20429 = cljs.core.chunk_rest.call(null,seq__20409_20427__$1);
var G__20430 = c__17669__auto___20428;
var G__20431 = cljs.core.count.call(null,c__17669__auto___20428);
var G__20432 = (0);
seq__20409_20415 = G__20429;
chunk__20410_20416 = G__20430;
count__20411_20417 = G__20431;
i__20412_20418 = G__20432;
continue;
} else {
var vec__20414_20433 = cljs.core.first.call(null,seq__20409_20427__$1);
var name_20434 = cljs.core.nth.call(null,vec__20414_20433,(0),null);
var value_20435 = cljs.core.nth.call(null,vec__20414_20433,(1),null);
domina.set_style_BANG_.call(null,content,name_20434,value_20435);

var G__20436 = cljs.core.next.call(null,seq__20409_20427__$1);
var G__20437 = null;
var G__20438 = (0);
var G__20439 = (0);
seq__20409_20415 = G__20436;
chunk__20410_20416 = G__20437;
count__20411_20417 = G__20438;
i__20412_20418 = G__20439;
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
var seq__20446_20452 = cljs.core.seq.call(null,attrs);
var chunk__20447_20453 = null;
var count__20448_20454 = (0);
var i__20449_20455 = (0);
while(true){
if((i__20449_20455 < count__20448_20454)){
var vec__20450_20456 = cljs.core._nth.call(null,chunk__20447_20453,i__20449_20455);
var name_20457 = cljs.core.nth.call(null,vec__20450_20456,(0),null);
var value_20458 = cljs.core.nth.call(null,vec__20450_20456,(1),null);
domina.set_attr_BANG_.call(null,content,name_20457,value_20458);

var G__20459 = seq__20446_20452;
var G__20460 = chunk__20447_20453;
var G__20461 = count__20448_20454;
var G__20462 = (i__20449_20455 + (1));
seq__20446_20452 = G__20459;
chunk__20447_20453 = G__20460;
count__20448_20454 = G__20461;
i__20449_20455 = G__20462;
continue;
} else {
var temp__4425__auto___20463 = cljs.core.seq.call(null,seq__20446_20452);
if(temp__4425__auto___20463){
var seq__20446_20464__$1 = temp__4425__auto___20463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20446_20464__$1)){
var c__17669__auto___20465 = cljs.core.chunk_first.call(null,seq__20446_20464__$1);
var G__20466 = cljs.core.chunk_rest.call(null,seq__20446_20464__$1);
var G__20467 = c__17669__auto___20465;
var G__20468 = cljs.core.count.call(null,c__17669__auto___20465);
var G__20469 = (0);
seq__20446_20452 = G__20466;
chunk__20447_20453 = G__20467;
count__20448_20454 = G__20468;
i__20449_20455 = G__20469;
continue;
} else {
var vec__20451_20470 = cljs.core.first.call(null,seq__20446_20464__$1);
var name_20471 = cljs.core.nth.call(null,vec__20451_20470,(0),null);
var value_20472 = cljs.core.nth.call(null,vec__20451_20470,(1),null);
domina.set_attr_BANG_.call(null,content,name_20471,value_20472);

var G__20473 = cljs.core.next.call(null,seq__20446_20464__$1);
var G__20474 = null;
var G__20475 = (0);
var G__20476 = (0);
seq__20446_20452 = G__20473;
chunk__20447_20453 = G__20474;
count__20448_20454 = G__20475;
i__20449_20455 = G__20476;
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
var seq__20481_20485 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20482_20486 = null;
var count__20483_20487 = (0);
var i__20484_20488 = (0);
while(true){
if((i__20484_20488 < count__20483_20487)){
var node_20489 = cljs.core._nth.call(null,chunk__20482_20486,i__20484_20488);
goog.dom.classes.add(node_20489,class$);

var G__20490 = seq__20481_20485;
var G__20491 = chunk__20482_20486;
var G__20492 = count__20483_20487;
var G__20493 = (i__20484_20488 + (1));
seq__20481_20485 = G__20490;
chunk__20482_20486 = G__20491;
count__20483_20487 = G__20492;
i__20484_20488 = G__20493;
continue;
} else {
var temp__4425__auto___20494 = cljs.core.seq.call(null,seq__20481_20485);
if(temp__4425__auto___20494){
var seq__20481_20495__$1 = temp__4425__auto___20494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20481_20495__$1)){
var c__17669__auto___20496 = cljs.core.chunk_first.call(null,seq__20481_20495__$1);
var G__20497 = cljs.core.chunk_rest.call(null,seq__20481_20495__$1);
var G__20498 = c__17669__auto___20496;
var G__20499 = cljs.core.count.call(null,c__17669__auto___20496);
var G__20500 = (0);
seq__20481_20485 = G__20497;
chunk__20482_20486 = G__20498;
count__20483_20487 = G__20499;
i__20484_20488 = G__20500;
continue;
} else {
var node_20501 = cljs.core.first.call(null,seq__20481_20495__$1);
goog.dom.classes.add(node_20501,class$);

var G__20502 = cljs.core.next.call(null,seq__20481_20495__$1);
var G__20503 = null;
var G__20504 = (0);
var G__20505 = (0);
seq__20481_20485 = G__20502;
chunk__20482_20486 = G__20503;
count__20483_20487 = G__20504;
i__20484_20488 = G__20505;
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
var seq__20510_20514 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20511_20515 = null;
var count__20512_20516 = (0);
var i__20513_20517 = (0);
while(true){
if((i__20513_20517 < count__20512_20516)){
var node_20518 = cljs.core._nth.call(null,chunk__20511_20515,i__20513_20517);
goog.dom.classes.remove(node_20518,class$);

var G__20519 = seq__20510_20514;
var G__20520 = chunk__20511_20515;
var G__20521 = count__20512_20516;
var G__20522 = (i__20513_20517 + (1));
seq__20510_20514 = G__20519;
chunk__20511_20515 = G__20520;
count__20512_20516 = G__20521;
i__20513_20517 = G__20522;
continue;
} else {
var temp__4425__auto___20523 = cljs.core.seq.call(null,seq__20510_20514);
if(temp__4425__auto___20523){
var seq__20510_20524__$1 = temp__4425__auto___20523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20510_20524__$1)){
var c__17669__auto___20525 = cljs.core.chunk_first.call(null,seq__20510_20524__$1);
var G__20526 = cljs.core.chunk_rest.call(null,seq__20510_20524__$1);
var G__20527 = c__17669__auto___20525;
var G__20528 = cljs.core.count.call(null,c__17669__auto___20525);
var G__20529 = (0);
seq__20510_20514 = G__20526;
chunk__20511_20515 = G__20527;
count__20512_20516 = G__20528;
i__20513_20517 = G__20529;
continue;
} else {
var node_20530 = cljs.core.first.call(null,seq__20510_20524__$1);
goog.dom.classes.remove(node_20530,class$);

var G__20531 = cljs.core.next.call(null,seq__20510_20524__$1);
var G__20532 = null;
var G__20533 = (0);
var G__20534 = (0);
seq__20510_20514 = G__20531;
chunk__20511_20515 = G__20532;
count__20512_20516 = G__20533;
i__20513_20517 = G__20534;
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
var seq__20539_20543 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20540_20544 = null;
var count__20541_20545 = (0);
var i__20542_20546 = (0);
while(true){
if((i__20542_20546 < count__20541_20545)){
var node_20547 = cljs.core._nth.call(null,chunk__20540_20544,i__20542_20546);
goog.dom.classes.toggle(node_20547,class$);

var G__20548 = seq__20539_20543;
var G__20549 = chunk__20540_20544;
var G__20550 = count__20541_20545;
var G__20551 = (i__20542_20546 + (1));
seq__20539_20543 = G__20548;
chunk__20540_20544 = G__20549;
count__20541_20545 = G__20550;
i__20542_20546 = G__20551;
continue;
} else {
var temp__4425__auto___20552 = cljs.core.seq.call(null,seq__20539_20543);
if(temp__4425__auto___20552){
var seq__20539_20553__$1 = temp__4425__auto___20552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20539_20553__$1)){
var c__17669__auto___20554 = cljs.core.chunk_first.call(null,seq__20539_20553__$1);
var G__20555 = cljs.core.chunk_rest.call(null,seq__20539_20553__$1);
var G__20556 = c__17669__auto___20554;
var G__20557 = cljs.core.count.call(null,c__17669__auto___20554);
var G__20558 = (0);
seq__20539_20543 = G__20555;
chunk__20540_20544 = G__20556;
count__20541_20545 = G__20557;
i__20542_20546 = G__20558;
continue;
} else {
var node_20559 = cljs.core.first.call(null,seq__20539_20553__$1);
goog.dom.classes.toggle(node_20559,class$);

var G__20560 = cljs.core.next.call(null,seq__20539_20553__$1);
var G__20561 = null;
var G__20562 = (0);
var G__20563 = (0);
seq__20539_20543 = G__20560;
chunk__20540_20544 = G__20561;
count__20541_20545 = G__20562;
i__20542_20546 = G__20563;
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
var classes_20572__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__20568_20573 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20569_20574 = null;
var count__20570_20575 = (0);
var i__20571_20576 = (0);
while(true){
if((i__20571_20576 < count__20570_20575)){
var node_20577 = cljs.core._nth.call(null,chunk__20569_20574,i__20571_20576);
goog.dom.classes.set(node_20577,classes_20572__$1);

var G__20578 = seq__20568_20573;
var G__20579 = chunk__20569_20574;
var G__20580 = count__20570_20575;
var G__20581 = (i__20571_20576 + (1));
seq__20568_20573 = G__20578;
chunk__20569_20574 = G__20579;
count__20570_20575 = G__20580;
i__20571_20576 = G__20581;
continue;
} else {
var temp__4425__auto___20582 = cljs.core.seq.call(null,seq__20568_20573);
if(temp__4425__auto___20582){
var seq__20568_20583__$1 = temp__4425__auto___20582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20568_20583__$1)){
var c__17669__auto___20584 = cljs.core.chunk_first.call(null,seq__20568_20583__$1);
var G__20585 = cljs.core.chunk_rest.call(null,seq__20568_20583__$1);
var G__20586 = c__17669__auto___20584;
var G__20587 = cljs.core.count.call(null,c__17669__auto___20584);
var G__20588 = (0);
seq__20568_20573 = G__20585;
chunk__20569_20574 = G__20586;
count__20570_20575 = G__20587;
i__20571_20576 = G__20588;
continue;
} else {
var node_20589 = cljs.core.first.call(null,seq__20568_20583__$1);
goog.dom.classes.set(node_20589,classes_20572__$1);

var G__20590 = cljs.core.next.call(null,seq__20568_20583__$1);
var G__20591 = null;
var G__20592 = (0);
var G__20593 = (0);
seq__20568_20573 = G__20590;
chunk__20569_20574 = G__20591;
count__20570_20575 = G__20592;
i__20571_20576 = G__20593;
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
var seq__20598_20602 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20599_20603 = null;
var count__20600_20604 = (0);
var i__20601_20605 = (0);
while(true){
if((i__20601_20605 < count__20600_20604)){
var node_20606 = cljs.core._nth.call(null,chunk__20599_20603,i__20601_20605);
goog.dom.setTextContent(node_20606,value);

var G__20607 = seq__20598_20602;
var G__20608 = chunk__20599_20603;
var G__20609 = count__20600_20604;
var G__20610 = (i__20601_20605 + (1));
seq__20598_20602 = G__20607;
chunk__20599_20603 = G__20608;
count__20600_20604 = G__20609;
i__20601_20605 = G__20610;
continue;
} else {
var temp__4425__auto___20611 = cljs.core.seq.call(null,seq__20598_20602);
if(temp__4425__auto___20611){
var seq__20598_20612__$1 = temp__4425__auto___20611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20598_20612__$1)){
var c__17669__auto___20613 = cljs.core.chunk_first.call(null,seq__20598_20612__$1);
var G__20614 = cljs.core.chunk_rest.call(null,seq__20598_20612__$1);
var G__20615 = c__17669__auto___20613;
var G__20616 = cljs.core.count.call(null,c__17669__auto___20613);
var G__20617 = (0);
seq__20598_20602 = G__20614;
chunk__20599_20603 = G__20615;
count__20600_20604 = G__20616;
i__20601_20605 = G__20617;
continue;
} else {
var node_20618 = cljs.core.first.call(null,seq__20598_20612__$1);
goog.dom.setTextContent(node_20618,value);

var G__20619 = cljs.core.next.call(null,seq__20598_20612__$1);
var G__20620 = null;
var G__20621 = (0);
var G__20622 = (0);
seq__20598_20602 = G__20619;
chunk__20599_20603 = G__20620;
count__20600_20604 = G__20621;
i__20601_20605 = G__20622;
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
var seq__20627_20631 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20628_20632 = null;
var count__20629_20633 = (0);
var i__20630_20634 = (0);
while(true){
if((i__20630_20634 < count__20629_20633)){
var node_20635 = cljs.core._nth.call(null,chunk__20628_20632,i__20630_20634);
goog.dom.forms.setValue(node_20635,value);

var G__20636 = seq__20627_20631;
var G__20637 = chunk__20628_20632;
var G__20638 = count__20629_20633;
var G__20639 = (i__20630_20634 + (1));
seq__20627_20631 = G__20636;
chunk__20628_20632 = G__20637;
count__20629_20633 = G__20638;
i__20630_20634 = G__20639;
continue;
} else {
var temp__4425__auto___20640 = cljs.core.seq.call(null,seq__20627_20631);
if(temp__4425__auto___20640){
var seq__20627_20641__$1 = temp__4425__auto___20640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20627_20641__$1)){
var c__17669__auto___20642 = cljs.core.chunk_first.call(null,seq__20627_20641__$1);
var G__20643 = cljs.core.chunk_rest.call(null,seq__20627_20641__$1);
var G__20644 = c__17669__auto___20642;
var G__20645 = cljs.core.count.call(null,c__17669__auto___20642);
var G__20646 = (0);
seq__20627_20631 = G__20643;
chunk__20628_20632 = G__20644;
count__20629_20633 = G__20645;
i__20630_20634 = G__20646;
continue;
} else {
var node_20647 = cljs.core.first.call(null,seq__20627_20641__$1);
goog.dom.forms.setValue(node_20647,value);

var G__20648 = cljs.core.next.call(null,seq__20627_20641__$1);
var G__20649 = null;
var G__20650 = (0);
var G__20651 = (0);
seq__20627_20631 = G__20648;
chunk__20628_20632 = G__20649;
count__20629_20633 = G__20650;
i__20630_20634 = G__20651;
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
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__16854__auto__ = allows_inner_html_QMARK_;
if(and__16854__auto__){
var and__16854__auto____$1 = (function (){var or__16866__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__16854__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__16854__auto____$1;
}
} else {
return and__16854__auto__;
}
})())){
var value_20662 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__20658_20663 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20659_20664 = null;
var count__20660_20665 = (0);
var i__20661_20666 = (0);
while(true){
if((i__20661_20666 < count__20660_20665)){
var node_20667 = cljs.core._nth.call(null,chunk__20659_20664,i__20661_20666);
node_20667.innerHTML = value_20662;

var G__20668 = seq__20658_20663;
var G__20669 = chunk__20659_20664;
var G__20670 = count__20660_20665;
var G__20671 = (i__20661_20666 + (1));
seq__20658_20663 = G__20668;
chunk__20659_20664 = G__20669;
count__20660_20665 = G__20670;
i__20661_20666 = G__20671;
continue;
} else {
var temp__4425__auto___20672 = cljs.core.seq.call(null,seq__20658_20663);
if(temp__4425__auto___20672){
var seq__20658_20673__$1 = temp__4425__auto___20672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20658_20673__$1)){
var c__17669__auto___20674 = cljs.core.chunk_first.call(null,seq__20658_20673__$1);
var G__20675 = cljs.core.chunk_rest.call(null,seq__20658_20673__$1);
var G__20676 = c__17669__auto___20674;
var G__20677 = cljs.core.count.call(null,c__17669__auto___20674);
var G__20678 = (0);
seq__20658_20663 = G__20675;
chunk__20659_20664 = G__20676;
count__20660_20665 = G__20677;
i__20661_20666 = G__20678;
continue;
} else {
var node_20679 = cljs.core.first.call(null,seq__20658_20673__$1);
node_20679.innerHTML = value_20662;

var G__20680 = cljs.core.next.call(null,seq__20658_20673__$1);
var G__20681 = null;
var G__20682 = (0);
var G__20683 = (0);
seq__20658_20663 = G__20680;
chunk__20659_20664 = G__20681;
count__20660_20665 = G__20682;
i__20661_20666 = G__20683;
continue;
}
} else {
}
}
break;
}
}catch (e20657){if((e20657 instanceof Error)){
var e_20684 = e20657;
domina.replace_children_BANG_.call(null,content,value_20662);
} else {
throw e20657;

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
var args20685 = [];
var len__17924__auto___20688 = arguments.length;
var i__17925__auto___20689 = (0);
while(true){
if((i__17925__auto___20689 < len__17924__auto___20688)){
args20685.push((arguments[i__17925__auto___20689]));

var G__20690 = (i__17925__auto___20689 + (1));
i__17925__auto___20689 = G__20690;
continue;
} else {
}
break;
}

var G__20687 = args20685.length;
switch (G__20687) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20685.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__16854__auto__ = bubble;
if(cljs.core.truth_(and__16854__auto__)){
return (value == null);
} else {
return and__16854__auto__;
}
})())){
var temp__4425__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
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
var m = (function (){var or__16866__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
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
var seq__20698_20702 = cljs.core.seq.call(null,children);
var chunk__20699_20703 = null;
var count__20700_20704 = (0);
var i__20701_20705 = (0);
while(true){
if((i__20701_20705 < count__20700_20704)){
var child_20706 = cljs.core._nth.call(null,chunk__20699_20703,i__20701_20705);
frag.appendChild(child_20706);

var G__20707 = seq__20698_20702;
var G__20708 = chunk__20699_20703;
var G__20709 = count__20700_20704;
var G__20710 = (i__20701_20705 + (1));
seq__20698_20702 = G__20707;
chunk__20699_20703 = G__20708;
count__20700_20704 = G__20709;
i__20701_20705 = G__20710;
continue;
} else {
var temp__4425__auto___20711 = cljs.core.seq.call(null,seq__20698_20702);
if(temp__4425__auto___20711){
var seq__20698_20712__$1 = temp__4425__auto___20711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20698_20712__$1)){
var c__17669__auto___20713 = cljs.core.chunk_first.call(null,seq__20698_20712__$1);
var G__20714 = cljs.core.chunk_rest.call(null,seq__20698_20712__$1);
var G__20715 = c__17669__auto___20713;
var G__20716 = cljs.core.count.call(null,c__17669__auto___20713);
var G__20717 = (0);
seq__20698_20702 = G__20714;
chunk__20699_20703 = G__20715;
count__20700_20704 = G__20716;
i__20701_20705 = G__20717;
continue;
} else {
var child_20718 = cljs.core.first.call(null,seq__20698_20712__$1);
frag.appendChild(child_20718);

var G__20719 = cljs.core.next.call(null,seq__20698_20712__$1);
var G__20720 = null;
var G__20721 = (0);
var G__20722 = (0);
seq__20698_20702 = G__20719;
chunk__20699_20703 = G__20720;
count__20700_20704 = G__20721;
i__20701_20705 = G__20722;
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
return (function (p1__20692_SHARP_,p2__20693_SHARP_){
return f.call(null,p1__20692_SHARP_,p2__20693_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args20723 = [];
var len__17924__auto___20726 = arguments.length;
var i__17925__auto___20727 = (0);
while(true){
if((i__17925__auto___20727 < len__17924__auto___20726)){
args20723.push((arguments[i__17925__auto___20727]));

var G__20728 = (i__17925__auto___20727 + (1));
i__17925__auto___20727 = G__20728;
continue;
} else {
}
break;
}

var G__20725 = args20723.length;
switch (G__20725) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20723.length)].join('')));

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
var args20730 = [];
var len__17924__auto___20733 = arguments.length;
var i__17925__auto___20734 = (0);
while(true){
if((i__17925__auto___20734 < len__17924__auto___20733)){
args20730.push((arguments[i__17925__auto___20734]));

var G__20735 = (i__17925__auto___20734 + (1));
i__17925__auto___20734 = G__20735;
continue;
} else {
}
break;
}

var G__20732 = args20730.length;
switch (G__20732) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20730.length)].join('')));

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
var and__16854__auto__ = obj;
if(cljs.core.truth_(and__16854__auto__)){
var and__16854__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__16854__auto____$1){
return obj.length;
} else {
return and__16854__auto____$1;
}
} else {
return and__16854__auto__;
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
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
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
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
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
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
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
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

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

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

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

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

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

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map?rel=1457107151427