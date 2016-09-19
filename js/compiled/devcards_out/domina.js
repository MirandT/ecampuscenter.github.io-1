// Compiled by ClojureScript 1.9.229 {}
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
var opt_wrapper_28845 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_28846 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_28847 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_28847,opt_wrapper_28845,table_section_wrapper_28846,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_28845,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_28846,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_28846,cell_wrapper_28847,table_section_wrapper_28846,table_section_wrapper_28846]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__18704__auto__ = div.firstChild;
if(cljs.core.truth_(and__18704__auto__)){
return div.firstChild.childNodes;
} else {
return and__18704__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__28852 = cljs.core.seq.call(null,tbody);
var chunk__28853 = null;
var count__28854 = (0);
var i__28855 = (0);
while(true){
if((i__28855 < count__28854)){
var child = cljs.core._nth.call(null,chunk__28853,i__28855);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__28856 = seq__28852;
var G__28857 = chunk__28853;
var G__28858 = count__28854;
var G__28859 = (i__28855 + (1));
seq__28852 = G__28856;
chunk__28853 = G__28857;
count__28854 = G__28858;
i__28855 = G__28859;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28852);
if(temp__4657__auto__){
var seq__28852__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28852__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__28852__$1);
var G__28860 = cljs.core.chunk_rest.call(null,seq__28852__$1);
var G__28861 = c__19527__auto__;
var G__28862 = cljs.core.count.call(null,c__19527__auto__);
var G__28863 = (0);
seq__28852 = G__28860;
chunk__28853 = G__28861;
count__28854 = G__28862;
i__28855 = G__28863;
continue;
} else {
var child = cljs.core.first.call(null,seq__28852__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__28864 = cljs.core.next.call(null,seq__28852__$1);
var G__28865 = null;
var G__28866 = (0);
var G__28867 = (0);
seq__28852 = G__28864;
chunk__28853 = G__28865;
count__28854 = G__28866;
i__28855 = G__28867;
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
var vec__28871 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__28871,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__28871,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__28871,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__28874 = wrapper.lastChild;
var G__28875 = (level - (1));
wrapper = G__28874;
level = G__28875;
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

if(cljs.core.truth_((function (){var and__18704__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__18704__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__18704__auto__;
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
var x__19379__auto__ = (((content == null))?null:content);
var m__19380__auto__ = (domina.nodes[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,content);
} else {
var m__19380__auto____$1 = (domina.nodes["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,content);
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
var x__19379__auto__ = (((nodeseq == null))?null:nodeseq);
var m__19380__auto__ = (domina.single_node[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,nodeseq);
} else {
var m__19380__auto____$1 = (domina.single_node["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__19798__auto__ = [];
var len__19791__auto___28877 = arguments.length;
var i__19792__auto___28878 = (0);
while(true){
if((i__19792__auto___28878 < len__19791__auto___28877)){
args__19798__auto__.push((arguments[i__19792__auto___28878]));

var G__28879 = (i__19792__auto___28878 + (1));
i__19792__auto___28878 = G__28879;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__18704__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__18704__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__18704__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq28876){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28876));
});

domina.log = (function domina$log(var_args){
var args__19798__auto__ = [];
var len__19791__auto___28881 = arguments.length;
var i__19792__auto___28882 = (0);
while(true){
if((i__19792__auto___28882 < len__19791__auto___28881)){
args__19798__auto__.push((arguments[i__19792__auto___28882]));

var G__28883 = (i__19792__auto___28882 + (1));
i__19792__auto___28882 = G__28883;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq28880){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28880));
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
var args__19798__auto__ = [];
var len__19791__auto___28885 = arguments.length;
var i__19792__auto___28886 = (0);
while(true){
if((i__19792__auto___28886 < len__19791__auto___28885)){
args__19798__auto__.push((arguments[i__19792__auto___28886]));

var G__28887 = (i__19792__auto___28886 + (1));
i__19792__auto___28886 = G__28887;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq28884){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28884));
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
return cljs.core.map.call(null,(function (p1__28888_SHARP_){
return p1__28888_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__28889_SHARP_,p2__28890_SHARP_){
return goog.dom.insertChildAt(p1__28889_SHARP_,p2__28890_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__28892_SHARP_,p2__28891_SHARP_){
return goog.dom.insertSiblingBefore(p2__28891_SHARP_,p1__28892_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__28894_SHARP_,p2__28893_SHARP_){
return goog.dom.insertSiblingAfter(p2__28893_SHARP_,p1__28894_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__28896_SHARP_,p2__28895_SHARP_){
return goog.dom.replaceNode(p2__28895_SHARP_,p1__28896_SHARP_);
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
var args__19798__auto__ = [];
var len__19791__auto___28904 = arguments.length;
var i__19792__auto___28905 = (0);
while(true){
if((i__19792__auto___28905 < len__19791__auto___28904)){
args__19798__auto__.push((arguments[i__19792__auto___28905]));

var G__28906 = (i__19792__auto___28905 + (1));
i__19792__auto___28905 = G__28906;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((2) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19799__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__28900_28907 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28901_28908 = null;
var count__28902_28909 = (0);
var i__28903_28910 = (0);
while(true){
if((i__28903_28910 < count__28902_28909)){
var n_28911 = cljs.core._nth.call(null,chunk__28901_28908,i__28903_28910);
goog.style.setStyle(n_28911,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__28912 = seq__28900_28907;
var G__28913 = chunk__28901_28908;
var G__28914 = count__28902_28909;
var G__28915 = (i__28903_28910 + (1));
seq__28900_28907 = G__28912;
chunk__28901_28908 = G__28913;
count__28902_28909 = G__28914;
i__28903_28910 = G__28915;
continue;
} else {
var temp__4657__auto___28916 = cljs.core.seq.call(null,seq__28900_28907);
if(temp__4657__auto___28916){
var seq__28900_28917__$1 = temp__4657__auto___28916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28900_28917__$1)){
var c__19527__auto___28918 = cljs.core.chunk_first.call(null,seq__28900_28917__$1);
var G__28919 = cljs.core.chunk_rest.call(null,seq__28900_28917__$1);
var G__28920 = c__19527__auto___28918;
var G__28921 = cljs.core.count.call(null,c__19527__auto___28918);
var G__28922 = (0);
seq__28900_28907 = G__28919;
chunk__28901_28908 = G__28920;
count__28902_28909 = G__28921;
i__28903_28910 = G__28922;
continue;
} else {
var n_28923 = cljs.core.first.call(null,seq__28900_28917__$1);
goog.style.setStyle(n_28923,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__28924 = cljs.core.next.call(null,seq__28900_28917__$1);
var G__28925 = null;
var G__28926 = (0);
var G__28927 = (0);
seq__28900_28907 = G__28924;
chunk__28901_28908 = G__28925;
count__28902_28909 = G__28926;
i__28903_28910 = G__28927;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq28897){
var G__28898 = cljs.core.first.call(null,seq28897);
var seq28897__$1 = cljs.core.next.call(null,seq28897);
var G__28899 = cljs.core.first.call(null,seq28897__$1);
var seq28897__$2 = cljs.core.next.call(null,seq28897__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28898,G__28899,seq28897__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__19798__auto__ = [];
var len__19791__auto___28935 = arguments.length;
var i__19792__auto___28936 = (0);
while(true){
if((i__19792__auto___28936 < len__19791__auto___28935)){
args__19798__auto__.push((arguments[i__19792__auto___28936]));

var G__28937 = (i__19792__auto___28936 + (1));
i__19792__auto___28936 = G__28937;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((2) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19799__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__28931_28938 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28932_28939 = null;
var count__28933_28940 = (0);
var i__28934_28941 = (0);
while(true){
if((i__28934_28941 < count__28933_28940)){
var n_28942 = cljs.core._nth.call(null,chunk__28932_28939,i__28934_28941);
n_28942.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__28943 = seq__28931_28938;
var G__28944 = chunk__28932_28939;
var G__28945 = count__28933_28940;
var G__28946 = (i__28934_28941 + (1));
seq__28931_28938 = G__28943;
chunk__28932_28939 = G__28944;
count__28933_28940 = G__28945;
i__28934_28941 = G__28946;
continue;
} else {
var temp__4657__auto___28947 = cljs.core.seq.call(null,seq__28931_28938);
if(temp__4657__auto___28947){
var seq__28931_28948__$1 = temp__4657__auto___28947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28931_28948__$1)){
var c__19527__auto___28949 = cljs.core.chunk_first.call(null,seq__28931_28948__$1);
var G__28950 = cljs.core.chunk_rest.call(null,seq__28931_28948__$1);
var G__28951 = c__19527__auto___28949;
var G__28952 = cljs.core.count.call(null,c__19527__auto___28949);
var G__28953 = (0);
seq__28931_28938 = G__28950;
chunk__28932_28939 = G__28951;
count__28933_28940 = G__28952;
i__28934_28941 = G__28953;
continue;
} else {
var n_28954 = cljs.core.first.call(null,seq__28931_28948__$1);
n_28954.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__28955 = cljs.core.next.call(null,seq__28931_28948__$1);
var G__28956 = null;
var G__28957 = (0);
var G__28958 = (0);
seq__28931_28938 = G__28955;
chunk__28932_28939 = G__28956;
count__28933_28940 = G__28957;
i__28934_28941 = G__28958;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq28928){
var G__28929 = cljs.core.first.call(null,seq28928);
var seq28928__$1 = cljs.core.next.call(null,seq28928);
var G__28930 = cljs.core.first.call(null,seq28928__$1);
var seq28928__$2 = cljs.core.next.call(null,seq28928__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28929,G__28930,seq28928__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__28963_28967 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28964_28968 = null;
var count__28965_28969 = (0);
var i__28966_28970 = (0);
while(true){
if((i__28966_28970 < count__28965_28969)){
var n_28971 = cljs.core._nth.call(null,chunk__28964_28968,i__28966_28970);
n_28971.removeAttribute(cljs.core.name.call(null,name));

var G__28972 = seq__28963_28967;
var G__28973 = chunk__28964_28968;
var G__28974 = count__28965_28969;
var G__28975 = (i__28966_28970 + (1));
seq__28963_28967 = G__28972;
chunk__28964_28968 = G__28973;
count__28965_28969 = G__28974;
i__28966_28970 = G__28975;
continue;
} else {
var temp__4657__auto___28976 = cljs.core.seq.call(null,seq__28963_28967);
if(temp__4657__auto___28976){
var seq__28963_28977__$1 = temp__4657__auto___28976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28963_28977__$1)){
var c__19527__auto___28978 = cljs.core.chunk_first.call(null,seq__28963_28977__$1);
var G__28979 = cljs.core.chunk_rest.call(null,seq__28963_28977__$1);
var G__28980 = c__19527__auto___28978;
var G__28981 = cljs.core.count.call(null,c__19527__auto___28978);
var G__28982 = (0);
seq__28963_28967 = G__28979;
chunk__28964_28968 = G__28980;
count__28965_28969 = G__28981;
i__28966_28970 = G__28982;
continue;
} else {
var n_28983 = cljs.core.first.call(null,seq__28963_28977__$1);
n_28983.removeAttribute(cljs.core.name.call(null,name));

var G__28984 = cljs.core.next.call(null,seq__28963_28977__$1);
var G__28985 = null;
var G__28986 = (0);
var G__28987 = (0);
seq__28963_28967 = G__28984;
chunk__28964_28968 = G__28985;
count__28965_28969 = G__28986;
i__28966_28970 = G__28987;
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
var vec__28991 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__28991,(0),null);
var v = cljs.core.nth.call(null,vec__28991,(1),null);
if(cljs.core.truth_((function (){var and__18704__auto__ = k;
if(cljs.core.truth_(and__18704__auto__)){
return v;
} else {
return and__18704__auto__;
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
return (function (p1__28994_SHARP_){
var attr = attrs__$1.item(p1__28994_SHARP_);
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
var seq__29005_29015 = cljs.core.seq.call(null,styles);
var chunk__29006_29016 = null;
var count__29007_29017 = (0);
var i__29008_29018 = (0);
while(true){
if((i__29008_29018 < count__29007_29017)){
var vec__29009_29019 = cljs.core._nth.call(null,chunk__29006_29016,i__29008_29018);
var name_29020 = cljs.core.nth.call(null,vec__29009_29019,(0),null);
var value_29021 = cljs.core.nth.call(null,vec__29009_29019,(1),null);
domina.set_style_BANG_.call(null,content,name_29020,value_29021);

var G__29022 = seq__29005_29015;
var G__29023 = chunk__29006_29016;
var G__29024 = count__29007_29017;
var G__29025 = (i__29008_29018 + (1));
seq__29005_29015 = G__29022;
chunk__29006_29016 = G__29023;
count__29007_29017 = G__29024;
i__29008_29018 = G__29025;
continue;
} else {
var temp__4657__auto___29026 = cljs.core.seq.call(null,seq__29005_29015);
if(temp__4657__auto___29026){
var seq__29005_29027__$1 = temp__4657__auto___29026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29005_29027__$1)){
var c__19527__auto___29028 = cljs.core.chunk_first.call(null,seq__29005_29027__$1);
var G__29029 = cljs.core.chunk_rest.call(null,seq__29005_29027__$1);
var G__29030 = c__19527__auto___29028;
var G__29031 = cljs.core.count.call(null,c__19527__auto___29028);
var G__29032 = (0);
seq__29005_29015 = G__29029;
chunk__29006_29016 = G__29030;
count__29007_29017 = G__29031;
i__29008_29018 = G__29032;
continue;
} else {
var vec__29012_29033 = cljs.core.first.call(null,seq__29005_29027__$1);
var name_29034 = cljs.core.nth.call(null,vec__29012_29033,(0),null);
var value_29035 = cljs.core.nth.call(null,vec__29012_29033,(1),null);
domina.set_style_BANG_.call(null,content,name_29034,value_29035);

var G__29036 = cljs.core.next.call(null,seq__29005_29027__$1);
var G__29037 = null;
var G__29038 = (0);
var G__29039 = (0);
seq__29005_29015 = G__29036;
chunk__29006_29016 = G__29037;
count__29007_29017 = G__29038;
i__29008_29018 = G__29039;
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
var seq__29050_29060 = cljs.core.seq.call(null,attrs);
var chunk__29051_29061 = null;
var count__29052_29062 = (0);
var i__29053_29063 = (0);
while(true){
if((i__29053_29063 < count__29052_29062)){
var vec__29054_29064 = cljs.core._nth.call(null,chunk__29051_29061,i__29053_29063);
var name_29065 = cljs.core.nth.call(null,vec__29054_29064,(0),null);
var value_29066 = cljs.core.nth.call(null,vec__29054_29064,(1),null);
domina.set_attr_BANG_.call(null,content,name_29065,value_29066);

var G__29067 = seq__29050_29060;
var G__29068 = chunk__29051_29061;
var G__29069 = count__29052_29062;
var G__29070 = (i__29053_29063 + (1));
seq__29050_29060 = G__29067;
chunk__29051_29061 = G__29068;
count__29052_29062 = G__29069;
i__29053_29063 = G__29070;
continue;
} else {
var temp__4657__auto___29071 = cljs.core.seq.call(null,seq__29050_29060);
if(temp__4657__auto___29071){
var seq__29050_29072__$1 = temp__4657__auto___29071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29050_29072__$1)){
var c__19527__auto___29073 = cljs.core.chunk_first.call(null,seq__29050_29072__$1);
var G__29074 = cljs.core.chunk_rest.call(null,seq__29050_29072__$1);
var G__29075 = c__19527__auto___29073;
var G__29076 = cljs.core.count.call(null,c__19527__auto___29073);
var G__29077 = (0);
seq__29050_29060 = G__29074;
chunk__29051_29061 = G__29075;
count__29052_29062 = G__29076;
i__29053_29063 = G__29077;
continue;
} else {
var vec__29057_29078 = cljs.core.first.call(null,seq__29050_29072__$1);
var name_29079 = cljs.core.nth.call(null,vec__29057_29078,(0),null);
var value_29080 = cljs.core.nth.call(null,vec__29057_29078,(1),null);
domina.set_attr_BANG_.call(null,content,name_29079,value_29080);

var G__29081 = cljs.core.next.call(null,seq__29050_29072__$1);
var G__29082 = null;
var G__29083 = (0);
var G__29084 = (0);
seq__29050_29060 = G__29081;
chunk__29051_29061 = G__29082;
count__29052_29062 = G__29083;
i__29053_29063 = G__29084;
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
var seq__29089_29093 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29090_29094 = null;
var count__29091_29095 = (0);
var i__29092_29096 = (0);
while(true){
if((i__29092_29096 < count__29091_29095)){
var node_29097 = cljs.core._nth.call(null,chunk__29090_29094,i__29092_29096);
goog.dom.classes.add(node_29097,class$);

var G__29098 = seq__29089_29093;
var G__29099 = chunk__29090_29094;
var G__29100 = count__29091_29095;
var G__29101 = (i__29092_29096 + (1));
seq__29089_29093 = G__29098;
chunk__29090_29094 = G__29099;
count__29091_29095 = G__29100;
i__29092_29096 = G__29101;
continue;
} else {
var temp__4657__auto___29102 = cljs.core.seq.call(null,seq__29089_29093);
if(temp__4657__auto___29102){
var seq__29089_29103__$1 = temp__4657__auto___29102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29089_29103__$1)){
var c__19527__auto___29104 = cljs.core.chunk_first.call(null,seq__29089_29103__$1);
var G__29105 = cljs.core.chunk_rest.call(null,seq__29089_29103__$1);
var G__29106 = c__19527__auto___29104;
var G__29107 = cljs.core.count.call(null,c__19527__auto___29104);
var G__29108 = (0);
seq__29089_29093 = G__29105;
chunk__29090_29094 = G__29106;
count__29091_29095 = G__29107;
i__29092_29096 = G__29108;
continue;
} else {
var node_29109 = cljs.core.first.call(null,seq__29089_29103__$1);
goog.dom.classes.add(node_29109,class$);

var G__29110 = cljs.core.next.call(null,seq__29089_29103__$1);
var G__29111 = null;
var G__29112 = (0);
var G__29113 = (0);
seq__29089_29093 = G__29110;
chunk__29090_29094 = G__29111;
count__29091_29095 = G__29112;
i__29092_29096 = G__29113;
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
var seq__29118_29122 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29119_29123 = null;
var count__29120_29124 = (0);
var i__29121_29125 = (0);
while(true){
if((i__29121_29125 < count__29120_29124)){
var node_29126 = cljs.core._nth.call(null,chunk__29119_29123,i__29121_29125);
goog.dom.classes.remove(node_29126,class$);

var G__29127 = seq__29118_29122;
var G__29128 = chunk__29119_29123;
var G__29129 = count__29120_29124;
var G__29130 = (i__29121_29125 + (1));
seq__29118_29122 = G__29127;
chunk__29119_29123 = G__29128;
count__29120_29124 = G__29129;
i__29121_29125 = G__29130;
continue;
} else {
var temp__4657__auto___29131 = cljs.core.seq.call(null,seq__29118_29122);
if(temp__4657__auto___29131){
var seq__29118_29132__$1 = temp__4657__auto___29131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29118_29132__$1)){
var c__19527__auto___29133 = cljs.core.chunk_first.call(null,seq__29118_29132__$1);
var G__29134 = cljs.core.chunk_rest.call(null,seq__29118_29132__$1);
var G__29135 = c__19527__auto___29133;
var G__29136 = cljs.core.count.call(null,c__19527__auto___29133);
var G__29137 = (0);
seq__29118_29122 = G__29134;
chunk__29119_29123 = G__29135;
count__29120_29124 = G__29136;
i__29121_29125 = G__29137;
continue;
} else {
var node_29138 = cljs.core.first.call(null,seq__29118_29132__$1);
goog.dom.classes.remove(node_29138,class$);

var G__29139 = cljs.core.next.call(null,seq__29118_29132__$1);
var G__29140 = null;
var G__29141 = (0);
var G__29142 = (0);
seq__29118_29122 = G__29139;
chunk__29119_29123 = G__29140;
count__29120_29124 = G__29141;
i__29121_29125 = G__29142;
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
var seq__29147_29151 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29148_29152 = null;
var count__29149_29153 = (0);
var i__29150_29154 = (0);
while(true){
if((i__29150_29154 < count__29149_29153)){
var node_29155 = cljs.core._nth.call(null,chunk__29148_29152,i__29150_29154);
goog.dom.classes.toggle(node_29155,class$);

var G__29156 = seq__29147_29151;
var G__29157 = chunk__29148_29152;
var G__29158 = count__29149_29153;
var G__29159 = (i__29150_29154 + (1));
seq__29147_29151 = G__29156;
chunk__29148_29152 = G__29157;
count__29149_29153 = G__29158;
i__29150_29154 = G__29159;
continue;
} else {
var temp__4657__auto___29160 = cljs.core.seq.call(null,seq__29147_29151);
if(temp__4657__auto___29160){
var seq__29147_29161__$1 = temp__4657__auto___29160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29147_29161__$1)){
var c__19527__auto___29162 = cljs.core.chunk_first.call(null,seq__29147_29161__$1);
var G__29163 = cljs.core.chunk_rest.call(null,seq__29147_29161__$1);
var G__29164 = c__19527__auto___29162;
var G__29165 = cljs.core.count.call(null,c__19527__auto___29162);
var G__29166 = (0);
seq__29147_29151 = G__29163;
chunk__29148_29152 = G__29164;
count__29149_29153 = G__29165;
i__29150_29154 = G__29166;
continue;
} else {
var node_29167 = cljs.core.first.call(null,seq__29147_29161__$1);
goog.dom.classes.toggle(node_29167,class$);

var G__29168 = cljs.core.next.call(null,seq__29147_29161__$1);
var G__29169 = null;
var G__29170 = (0);
var G__29171 = (0);
seq__29147_29151 = G__29168;
chunk__29148_29152 = G__29169;
count__29149_29153 = G__29170;
i__29150_29154 = G__29171;
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
var classes_29180__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__29176_29181 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29177_29182 = null;
var count__29178_29183 = (0);
var i__29179_29184 = (0);
while(true){
if((i__29179_29184 < count__29178_29183)){
var node_29185 = cljs.core._nth.call(null,chunk__29177_29182,i__29179_29184);
goog.dom.classes.set(node_29185,classes_29180__$1);

var G__29186 = seq__29176_29181;
var G__29187 = chunk__29177_29182;
var G__29188 = count__29178_29183;
var G__29189 = (i__29179_29184 + (1));
seq__29176_29181 = G__29186;
chunk__29177_29182 = G__29187;
count__29178_29183 = G__29188;
i__29179_29184 = G__29189;
continue;
} else {
var temp__4657__auto___29190 = cljs.core.seq.call(null,seq__29176_29181);
if(temp__4657__auto___29190){
var seq__29176_29191__$1 = temp__4657__auto___29190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29176_29191__$1)){
var c__19527__auto___29192 = cljs.core.chunk_first.call(null,seq__29176_29191__$1);
var G__29193 = cljs.core.chunk_rest.call(null,seq__29176_29191__$1);
var G__29194 = c__19527__auto___29192;
var G__29195 = cljs.core.count.call(null,c__19527__auto___29192);
var G__29196 = (0);
seq__29176_29181 = G__29193;
chunk__29177_29182 = G__29194;
count__29178_29183 = G__29195;
i__29179_29184 = G__29196;
continue;
} else {
var node_29197 = cljs.core.first.call(null,seq__29176_29191__$1);
goog.dom.classes.set(node_29197,classes_29180__$1);

var G__29198 = cljs.core.next.call(null,seq__29176_29191__$1);
var G__29199 = null;
var G__29200 = (0);
var G__29201 = (0);
seq__29176_29181 = G__29198;
chunk__29177_29182 = G__29199;
count__29178_29183 = G__29200;
i__29179_29184 = G__29201;
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
var seq__29206_29210 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29207_29211 = null;
var count__29208_29212 = (0);
var i__29209_29213 = (0);
while(true){
if((i__29209_29213 < count__29208_29212)){
var node_29214 = cljs.core._nth.call(null,chunk__29207_29211,i__29209_29213);
goog.dom.setTextContent(node_29214,value);

var G__29215 = seq__29206_29210;
var G__29216 = chunk__29207_29211;
var G__29217 = count__29208_29212;
var G__29218 = (i__29209_29213 + (1));
seq__29206_29210 = G__29215;
chunk__29207_29211 = G__29216;
count__29208_29212 = G__29217;
i__29209_29213 = G__29218;
continue;
} else {
var temp__4657__auto___29219 = cljs.core.seq.call(null,seq__29206_29210);
if(temp__4657__auto___29219){
var seq__29206_29220__$1 = temp__4657__auto___29219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29206_29220__$1)){
var c__19527__auto___29221 = cljs.core.chunk_first.call(null,seq__29206_29220__$1);
var G__29222 = cljs.core.chunk_rest.call(null,seq__29206_29220__$1);
var G__29223 = c__19527__auto___29221;
var G__29224 = cljs.core.count.call(null,c__19527__auto___29221);
var G__29225 = (0);
seq__29206_29210 = G__29222;
chunk__29207_29211 = G__29223;
count__29208_29212 = G__29224;
i__29209_29213 = G__29225;
continue;
} else {
var node_29226 = cljs.core.first.call(null,seq__29206_29220__$1);
goog.dom.setTextContent(node_29226,value);

var G__29227 = cljs.core.next.call(null,seq__29206_29220__$1);
var G__29228 = null;
var G__29229 = (0);
var G__29230 = (0);
seq__29206_29210 = G__29227;
chunk__29207_29211 = G__29228;
count__29208_29212 = G__29229;
i__29209_29213 = G__29230;
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
var seq__29235_29239 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29236_29240 = null;
var count__29237_29241 = (0);
var i__29238_29242 = (0);
while(true){
if((i__29238_29242 < count__29237_29241)){
var node_29243 = cljs.core._nth.call(null,chunk__29236_29240,i__29238_29242);
goog.dom.forms.setValue(node_29243,value);

var G__29244 = seq__29235_29239;
var G__29245 = chunk__29236_29240;
var G__29246 = count__29237_29241;
var G__29247 = (i__29238_29242 + (1));
seq__29235_29239 = G__29244;
chunk__29236_29240 = G__29245;
count__29237_29241 = G__29246;
i__29238_29242 = G__29247;
continue;
} else {
var temp__4657__auto___29248 = cljs.core.seq.call(null,seq__29235_29239);
if(temp__4657__auto___29248){
var seq__29235_29249__$1 = temp__4657__auto___29248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29235_29249__$1)){
var c__19527__auto___29250 = cljs.core.chunk_first.call(null,seq__29235_29249__$1);
var G__29251 = cljs.core.chunk_rest.call(null,seq__29235_29249__$1);
var G__29252 = c__19527__auto___29250;
var G__29253 = cljs.core.count.call(null,c__19527__auto___29250);
var G__29254 = (0);
seq__29235_29239 = G__29251;
chunk__29236_29240 = G__29252;
count__29237_29241 = G__29253;
i__29238_29242 = G__29254;
continue;
} else {
var node_29255 = cljs.core.first.call(null,seq__29235_29249__$1);
goog.dom.forms.setValue(node_29255,value);

var G__29256 = cljs.core.next.call(null,seq__29235_29249__$1);
var G__29257 = null;
var G__29258 = (0);
var G__29259 = (0);
seq__29235_29239 = G__29256;
chunk__29236_29240 = G__29257;
count__29237_29241 = G__29258;
i__29238_29242 = G__29259;
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
if(cljs.core.truth_((function (){var and__18704__auto__ = allows_inner_html_QMARK_;
if(and__18704__auto__){
var and__18704__auto____$1 = (function (){var or__18716__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__18704__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__18704__auto____$1;
}
} else {
return and__18704__auto__;
}
})())){
var value_29270 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__29266_29271 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29267_29272 = null;
var count__29268_29273 = (0);
var i__29269_29274 = (0);
while(true){
if((i__29269_29274 < count__29268_29273)){
var node_29275 = cljs.core._nth.call(null,chunk__29267_29272,i__29269_29274);
node_29275.innerHTML = value_29270;

var G__29276 = seq__29266_29271;
var G__29277 = chunk__29267_29272;
var G__29278 = count__29268_29273;
var G__29279 = (i__29269_29274 + (1));
seq__29266_29271 = G__29276;
chunk__29267_29272 = G__29277;
count__29268_29273 = G__29278;
i__29269_29274 = G__29279;
continue;
} else {
var temp__4657__auto___29280 = cljs.core.seq.call(null,seq__29266_29271);
if(temp__4657__auto___29280){
var seq__29266_29281__$1 = temp__4657__auto___29280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29266_29281__$1)){
var c__19527__auto___29282 = cljs.core.chunk_first.call(null,seq__29266_29281__$1);
var G__29283 = cljs.core.chunk_rest.call(null,seq__29266_29281__$1);
var G__29284 = c__19527__auto___29282;
var G__29285 = cljs.core.count.call(null,c__19527__auto___29282);
var G__29286 = (0);
seq__29266_29271 = G__29283;
chunk__29267_29272 = G__29284;
count__29268_29273 = G__29285;
i__29269_29274 = G__29286;
continue;
} else {
var node_29287 = cljs.core.first.call(null,seq__29266_29281__$1);
node_29287.innerHTML = value_29270;

var G__29288 = cljs.core.next.call(null,seq__29266_29281__$1);
var G__29289 = null;
var G__29290 = (0);
var G__29291 = (0);
seq__29266_29271 = G__29288;
chunk__29267_29272 = G__29289;
count__29268_29273 = G__29290;
i__29269_29274 = G__29291;
continue;
}
} else {
}
}
break;
}
}catch (e29265){if((e29265 instanceof Error)){
var e_29292 = e29265;
domina.replace_children_BANG_.call(null,content,value_29270);
} else {
throw e29265;

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
var args29293 = [];
var len__19791__auto___29296 = arguments.length;
var i__19792__auto___29297 = (0);
while(true){
if((i__19792__auto___29297 < len__19791__auto___29296)){
args29293.push((arguments[i__19792__auto___29297]));

var G__29298 = (i__19792__auto___29297 + (1));
i__19792__auto___29297 = G__29298;
continue;
} else {
}
break;
}

var G__29295 = args29293.length;
switch (G__29295) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29293.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__18704__auto__ = bubble;
if(cljs.core.truth_(and__18704__auto__)){
return (value == null);
} else {
return and__18704__auto__;
}
})())){
var temp__4657__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
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
var m = (function (){var or__18716__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
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
var seq__29306_29310 = cljs.core.seq.call(null,children);
var chunk__29307_29311 = null;
var count__29308_29312 = (0);
var i__29309_29313 = (0);
while(true){
if((i__29309_29313 < count__29308_29312)){
var child_29314 = cljs.core._nth.call(null,chunk__29307_29311,i__29309_29313);
frag.appendChild(child_29314);

var G__29315 = seq__29306_29310;
var G__29316 = chunk__29307_29311;
var G__29317 = count__29308_29312;
var G__29318 = (i__29309_29313 + (1));
seq__29306_29310 = G__29315;
chunk__29307_29311 = G__29316;
count__29308_29312 = G__29317;
i__29309_29313 = G__29318;
continue;
} else {
var temp__4657__auto___29319 = cljs.core.seq.call(null,seq__29306_29310);
if(temp__4657__auto___29319){
var seq__29306_29320__$1 = temp__4657__auto___29319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29306_29320__$1)){
var c__19527__auto___29321 = cljs.core.chunk_first.call(null,seq__29306_29320__$1);
var G__29322 = cljs.core.chunk_rest.call(null,seq__29306_29320__$1);
var G__29323 = c__19527__auto___29321;
var G__29324 = cljs.core.count.call(null,c__19527__auto___29321);
var G__29325 = (0);
seq__29306_29310 = G__29322;
chunk__29307_29311 = G__29323;
count__29308_29312 = G__29324;
i__29309_29313 = G__29325;
continue;
} else {
var child_29326 = cljs.core.first.call(null,seq__29306_29320__$1);
frag.appendChild(child_29326);

var G__29327 = cljs.core.next.call(null,seq__29306_29320__$1);
var G__29328 = null;
var G__29329 = (0);
var G__29330 = (0);
seq__29306_29310 = G__29327;
chunk__29307_29311 = G__29328;
count__29308_29312 = G__29329;
i__29309_29313 = G__29330;
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
return (function (p1__29300_SHARP_,p2__29301_SHARP_){
return f.call(null,p1__29300_SHARP_,p2__29301_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args29331 = [];
var len__19791__auto___29334 = arguments.length;
var i__19792__auto___29335 = (0);
while(true){
if((i__19792__auto___29335 < len__19791__auto___29334)){
args29331.push((arguments[i__19792__auto___29335]));

var G__29336 = (i__19792__auto___29335 + (1));
i__19792__auto___29335 = G__29336;
continue;
} else {
}
break;
}

var G__29333 = args29331.length;
switch (G__29333) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29331.length)].join('')));

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
var args29338 = [];
var len__19791__auto___29341 = arguments.length;
var i__19792__auto___29342 = (0);
while(true){
if((i__19792__auto___29342 < len__19791__auto___29341)){
args29338.push((arguments[i__19792__auto___29342]));

var G__29343 = (i__19792__auto___29342 + (1));
i__19792__auto___29342 = G__29343;
continue;
} else {
}
break;
}

var G__29340 = args29338.length;
switch (G__29340) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29338.length)].join('')));

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
var and__18704__auto__ = obj;
if(cljs.core.truth_(and__18704__auto__)){
var and__18704__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__18704__auto____$1){
return obj.length;
} else {
return and__18704__auto____$1;
}
} else {
return and__18704__auto__;
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

//# sourceMappingURL=domina.js.map?rel=1474300068203