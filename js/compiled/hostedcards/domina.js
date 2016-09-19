// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
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
var opt_wrapper_22095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_22096 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_22097 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.cst$kw$default,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_22097,opt_wrapper_22095,table_section_wrapper_22096,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_22095,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_22096,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_22096,cell_wrapper_22097,table_section_wrapper_22096,table_section_wrapper_22096]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__6397__auto__ = div.firstChild;
if(cljs.core.truth_(and__6397__auto__)){
return div.firstChild.childNodes;
} else {
return and__6397__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__22102 = cljs.core.seq(tbody);
var chunk__22103 = null;
var count__22104 = (0);
var i__22105 = (0);
while(true){
if((i__22105 < count__22104)){
var child = chunk__22103.cljs$core$IIndexed$_nth$arity$2(null,i__22105);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__22106 = seq__22102;
var G__22107 = chunk__22103;
var G__22108 = count__22104;
var G__22109 = (i__22105 + (1));
seq__22102 = G__22106;
chunk__22103 = G__22107;
count__22104 = G__22108;
i__22105 = G__22109;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__22102);
if(temp__4657__auto__){
var seq__22102__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22102__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__22102__$1);
var G__22110 = cljs.core.chunk_rest(seq__22102__$1);
var G__22111 = c__7220__auto__;
var G__22112 = cljs.core.count(c__7220__auto__);
var G__22113 = (0);
seq__22102 = G__22110;
chunk__22103 = G__22111;
count__22104 = G__22112;
i__22105 = G__22113;
continue;
} else {
var child = cljs.core.first(seq__22102__$1);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__22114 = cljs.core.next(seq__22102__$1);
var G__22115 = null;
var G__22116 = (0);
var G__22117 = (0);
seq__22102 = G__22114;
chunk__22103 = G__22115;
count__22104 = G__22116;
i__22105 = G__22117;
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
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__22121 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__22124 = wrapper.lastChild;
var G__22125 = (level - (1));
wrapper = G__22124;
level = G__22125;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__6397__auto__){
return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else {
return and__6397__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_(div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s))){
return domina.html_to_dom(s);
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
var x__7072__auto__ = (((content == null))?null:content);
var m__7073__auto__ = (domina.nodes[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(content) : m__7073__auto__.call(null,content));
} else {
var m__7073__auto____$1 = (domina.nodes["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(content) : m__7073__auto____$1.call(null,content));
} else {
throw cljs.core.missing_protocol("DomContent.nodes",content);
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
var x__7072__auto__ = (((nodeseq == null))?null:nodeseq);
var m__7073__auto__ = (domina.single_node[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__7073__auto__.call(null,nodeseq));
} else {
var m__7073__auto____$1 = (domina.single_node["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__7073__auto____$1.call(null,nodeseq));
} else {
throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__7491__auto__ = [];
var len__7484__auto___22127 = arguments.length;
var i__7485__auto___22128 = (0);
while(true){
if((i__7485__auto___22128 < len__7484__auto___22127)){
args__7491__auto__.push((arguments[i__7485__auto___22128]));

var G__22129 = (i__7485__auto___22128 + (1));
i__7485__auto___22128 = G__22129;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__6397__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__6397__auto__)){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else {
return and__6397__auto__;
}
})())){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq22126){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22126));
});

domina.log = (function domina$log(var_args){
var args__7491__auto__ = [];
var len__7484__auto___22131 = arguments.length;
var i__7485__auto___22132 = (0);
while(true){
if((i__7485__auto___22132 < len__7484__auto___22131)){
args__7491__auto__.push((arguments[i__7485__auto___22132]));

var G__22133 = (i__7485__auto___22132 + (1));
i__7485__auto___22132 = G__22133;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq22130){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22130));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
var G__22135 = cljs.core.name(id);
return goog.dom.getElement(G__22135);
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
var G__22138 = (function (){var G__22139 = cljs.core.name(class_name);
return goog.dom.getElementsByClass(G__22139);
})();
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__22138) : domina.normalize_seq.call(null,G__22138));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(goog.dom.getChildren,cljs.core.array_seq([domina.nodes(content)], 0)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__7491__auto__ = [];
var len__7484__auto___22141 = arguments.length;
var i__7485__auto___22142 = (0);
while(true){
if((i__7485__auto___22142 < len__7484__auto___22141)){
args__7491__auto__.push((arguments[i__7485__auto___22142]));

var G__22143 = (i__7485__auto___22142 + (1));
i__7485__auto___22142 = G__22143;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq22140){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22140));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22144_SHARP_){
return p1__22144_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
var G__22150_22153 = (function (p1__22145_SHARP_,p2__22146_SHARP_){
return goog.dom.insertChildAt(p1__22145_SHARP_,p2__22146_SHARP_,idx);
});
var G__22151_22154 = parent_content;
var G__22152_22155 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__22150_22153,G__22151_22154,G__22152_22155) : domina.apply_with_cloning.call(null,G__22150_22153,G__22151_22154,G__22152_22155));

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
var G__22161_22164 = (function (p1__22157_SHARP_,p2__22156_SHARP_){
return goog.dom.insertSiblingBefore(p2__22156_SHARP_,p1__22157_SHARP_);
});
var G__22162_22165 = content;
var G__22163_22166 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__22161_22164,G__22162_22165,G__22163_22166) : domina.apply_with_cloning.call(null,G__22161_22164,G__22162_22165,G__22163_22166));

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
var G__22172_22175 = (function (p1__22168_SHARP_,p2__22167_SHARP_){
return goog.dom.insertSiblingAfter(p2__22167_SHARP_,p1__22168_SHARP_);
});
var G__22173_22176 = content;
var G__22174_22177 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__22172_22175,G__22173_22176,G__22174_22177) : domina.apply_with_cloning.call(null,G__22172_22175,G__22173_22176,G__22174_22177));

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
var G__22183_22186 = (function (p1__22179_SHARP_,p2__22178_SHARP_){
return goog.dom.replaceNode(p2__22178_SHARP_,p1__22179_SHARP_);
});
var G__22184_22187 = old_content;
var G__22185_22188 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__22183_22186,G__22184_22187,G__22185_22188) : domina.apply_with_cloning.call(null,G__22183_22186,G__22184_22187,G__22185_22188));

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = (function (){var G__22191 = domina.single_node(content);
var G__22192 = cljs.core.name(name);
return goog.style.getStyle(G__22191,G__22192);
})();
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___22206 = arguments.length;
var i__7485__auto___22207 = (0);
while(true){
if((i__7485__auto___22207 < len__7484__auto___22206)){
args__7491__auto__.push((arguments[i__7485__auto___22207]));

var G__22208 = (i__7485__auto___22207 + (1));
i__7485__auto___22207 = G__22208;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__22196_22209 = cljs.core.seq(domina.nodes(content));
var chunk__22197_22210 = null;
var count__22198_22211 = (0);
var i__22199_22212 = (0);
while(true){
if((i__22199_22212 < count__22198_22211)){
var n_22213 = chunk__22197_22210.cljs$core$IIndexed$_nth$arity$2(null,i__22199_22212);
var G__22200_22214 = n_22213;
var G__22201_22215 = cljs.core.name(name);
var G__22202_22216 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__22200_22214,G__22201_22215,G__22202_22216);

var G__22217 = seq__22196_22209;
var G__22218 = chunk__22197_22210;
var G__22219 = count__22198_22211;
var G__22220 = (i__22199_22212 + (1));
seq__22196_22209 = G__22217;
chunk__22197_22210 = G__22218;
count__22198_22211 = G__22219;
i__22199_22212 = G__22220;
continue;
} else {
var temp__4657__auto___22221 = cljs.core.seq(seq__22196_22209);
if(temp__4657__auto___22221){
var seq__22196_22222__$1 = temp__4657__auto___22221;
if(cljs.core.chunked_seq_QMARK_(seq__22196_22222__$1)){
var c__7220__auto___22223 = cljs.core.chunk_first(seq__22196_22222__$1);
var G__22224 = cljs.core.chunk_rest(seq__22196_22222__$1);
var G__22225 = c__7220__auto___22223;
var G__22226 = cljs.core.count(c__7220__auto___22223);
var G__22227 = (0);
seq__22196_22209 = G__22224;
chunk__22197_22210 = G__22225;
count__22198_22211 = G__22226;
i__22199_22212 = G__22227;
continue;
} else {
var n_22228 = cljs.core.first(seq__22196_22222__$1);
var G__22203_22229 = n_22228;
var G__22204_22230 = cljs.core.name(name);
var G__22205_22231 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__22203_22229,G__22204_22230,G__22205_22231);

var G__22232 = cljs.core.next(seq__22196_22222__$1);
var G__22233 = null;
var G__22234 = (0);
var G__22235 = (0);
seq__22196_22209 = G__22232;
chunk__22197_22210 = G__22233;
count__22198_22211 = G__22234;
i__22199_22212 = G__22235;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq22193){
var G__22194 = cljs.core.first(seq22193);
var seq22193__$1 = cljs.core.next(seq22193);
var G__22195 = cljs.core.first(seq22193__$1);
var seq22193__$2 = cljs.core.next(seq22193__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22194,G__22195,seq22193__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___22243 = arguments.length;
var i__7485__auto___22244 = (0);
while(true){
if((i__7485__auto___22244 < len__7484__auto___22243)){
args__7491__auto__.push((arguments[i__7485__auto___22244]));

var G__22245 = (i__7485__auto___22244 + (1));
i__7485__auto___22244 = G__22245;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__22239_22246 = cljs.core.seq(domina.nodes(content));
var chunk__22240_22247 = null;
var count__22241_22248 = (0);
var i__22242_22249 = (0);
while(true){
if((i__22242_22249 < count__22241_22248)){
var n_22250 = chunk__22240_22247.cljs$core$IIndexed$_nth$arity$2(null,i__22242_22249);
n_22250.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__22251 = seq__22239_22246;
var G__22252 = chunk__22240_22247;
var G__22253 = count__22241_22248;
var G__22254 = (i__22242_22249 + (1));
seq__22239_22246 = G__22251;
chunk__22240_22247 = G__22252;
count__22241_22248 = G__22253;
i__22242_22249 = G__22254;
continue;
} else {
var temp__4657__auto___22255 = cljs.core.seq(seq__22239_22246);
if(temp__4657__auto___22255){
var seq__22239_22256__$1 = temp__4657__auto___22255;
if(cljs.core.chunked_seq_QMARK_(seq__22239_22256__$1)){
var c__7220__auto___22257 = cljs.core.chunk_first(seq__22239_22256__$1);
var G__22258 = cljs.core.chunk_rest(seq__22239_22256__$1);
var G__22259 = c__7220__auto___22257;
var G__22260 = cljs.core.count(c__7220__auto___22257);
var G__22261 = (0);
seq__22239_22246 = G__22258;
chunk__22240_22247 = G__22259;
count__22241_22248 = G__22260;
i__22242_22249 = G__22261;
continue;
} else {
var n_22262 = cljs.core.first(seq__22239_22256__$1);
n_22262.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__22263 = cljs.core.next(seq__22239_22256__$1);
var G__22264 = null;
var G__22265 = (0);
var G__22266 = (0);
seq__22239_22246 = G__22263;
chunk__22240_22247 = G__22264;
count__22241_22248 = G__22265;
i__22242_22249 = G__22266;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq22236){
var G__22237 = cljs.core.first(seq22236);
var seq22236__$1 = cljs.core.next(seq22236);
var G__22238 = cljs.core.first(seq22236__$1);
var seq22236__$2 = cljs.core.next(seq22236__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22237,G__22238,seq22236__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__22271_22275 = cljs.core.seq(domina.nodes(content));
var chunk__22272_22276 = null;
var count__22273_22277 = (0);
var i__22274_22278 = (0);
while(true){
if((i__22274_22278 < count__22273_22277)){
var n_22279 = chunk__22272_22276.cljs$core$IIndexed$_nth$arity$2(null,i__22274_22278);
n_22279.removeAttribute(cljs.core.name(name));

var G__22280 = seq__22271_22275;
var G__22281 = chunk__22272_22276;
var G__22282 = count__22273_22277;
var G__22283 = (i__22274_22278 + (1));
seq__22271_22275 = G__22280;
chunk__22272_22276 = G__22281;
count__22273_22277 = G__22282;
i__22274_22278 = G__22283;
continue;
} else {
var temp__4657__auto___22284 = cljs.core.seq(seq__22271_22275);
if(temp__4657__auto___22284){
var seq__22271_22285__$1 = temp__4657__auto___22284;
if(cljs.core.chunked_seq_QMARK_(seq__22271_22285__$1)){
var c__7220__auto___22286 = cljs.core.chunk_first(seq__22271_22285__$1);
var G__22287 = cljs.core.chunk_rest(seq__22271_22285__$1);
var G__22288 = c__7220__auto___22286;
var G__22289 = cljs.core.count(c__7220__auto___22286);
var G__22290 = (0);
seq__22271_22275 = G__22287;
chunk__22272_22276 = G__22288;
count__22273_22277 = G__22289;
i__22274_22278 = G__22290;
continue;
} else {
var n_22291 = cljs.core.first(seq__22271_22285__$1);
n_22291.removeAttribute(cljs.core.name(name));

var G__22292 = cljs.core.next(seq__22271_22285__$1);
var G__22293 = null;
var G__22294 = (0);
var G__22295 = (0);
seq__22271_22275 = G__22292;
chunk__22272_22276 = G__22293;
count__22273_22277 = G__22294;
i__22274_22278 = G__22295;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__22299 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(1),null);
if(cljs.core.truth_((function (){var and__6397__auto__ = k;
if(cljs.core.truth_(and__6397__auto__)){
return v;
} else {
return and__6397__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr(content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes(style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes(style.cssText);
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
var node = domina.single_node(content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__22302_SHARP_){
var attr = attrs__$1.item(p1__22302_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__22313_22323 = cljs.core.seq(styles);
var chunk__22314_22324 = null;
var count__22315_22325 = (0);
var i__22316_22326 = (0);
while(true){
if((i__22316_22326 < count__22315_22325)){
var vec__22317_22327 = chunk__22314_22324.cljs$core$IIndexed$_nth$arity$2(null,i__22316_22326);
var name_22328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22317_22327,(0),null);
var value_22329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22317_22327,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_22328,cljs.core.array_seq([value_22329], 0));

var G__22330 = seq__22313_22323;
var G__22331 = chunk__22314_22324;
var G__22332 = count__22315_22325;
var G__22333 = (i__22316_22326 + (1));
seq__22313_22323 = G__22330;
chunk__22314_22324 = G__22331;
count__22315_22325 = G__22332;
i__22316_22326 = G__22333;
continue;
} else {
var temp__4657__auto___22334 = cljs.core.seq(seq__22313_22323);
if(temp__4657__auto___22334){
var seq__22313_22335__$1 = temp__4657__auto___22334;
if(cljs.core.chunked_seq_QMARK_(seq__22313_22335__$1)){
var c__7220__auto___22336 = cljs.core.chunk_first(seq__22313_22335__$1);
var G__22337 = cljs.core.chunk_rest(seq__22313_22335__$1);
var G__22338 = c__7220__auto___22336;
var G__22339 = cljs.core.count(c__7220__auto___22336);
var G__22340 = (0);
seq__22313_22323 = G__22337;
chunk__22314_22324 = G__22338;
count__22315_22325 = G__22339;
i__22316_22326 = G__22340;
continue;
} else {
var vec__22320_22341 = cljs.core.first(seq__22313_22335__$1);
var name_22342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22320_22341,(0),null);
var value_22343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22320_22341,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_22342,cljs.core.array_seq([value_22343], 0));

var G__22344 = cljs.core.next(seq__22313_22335__$1);
var G__22345 = null;
var G__22346 = (0);
var G__22347 = (0);
seq__22313_22323 = G__22344;
chunk__22314_22324 = G__22345;
count__22315_22325 = G__22346;
i__22316_22326 = G__22347;
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
var seq__22358_22368 = cljs.core.seq(attrs);
var chunk__22359_22369 = null;
var count__22360_22370 = (0);
var i__22361_22371 = (0);
while(true){
if((i__22361_22371 < count__22360_22370)){
var vec__22362_22372 = chunk__22359_22369.cljs$core$IIndexed$_nth$arity$2(null,i__22361_22371);
var name_22373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22362_22372,(0),null);
var value_22374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22362_22372,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_22373,cljs.core.array_seq([value_22374], 0));

var G__22375 = seq__22358_22368;
var G__22376 = chunk__22359_22369;
var G__22377 = count__22360_22370;
var G__22378 = (i__22361_22371 + (1));
seq__22358_22368 = G__22375;
chunk__22359_22369 = G__22376;
count__22360_22370 = G__22377;
i__22361_22371 = G__22378;
continue;
} else {
var temp__4657__auto___22379 = cljs.core.seq(seq__22358_22368);
if(temp__4657__auto___22379){
var seq__22358_22380__$1 = temp__4657__auto___22379;
if(cljs.core.chunked_seq_QMARK_(seq__22358_22380__$1)){
var c__7220__auto___22381 = cljs.core.chunk_first(seq__22358_22380__$1);
var G__22382 = cljs.core.chunk_rest(seq__22358_22380__$1);
var G__22383 = c__7220__auto___22381;
var G__22384 = cljs.core.count(c__7220__auto___22381);
var G__22385 = (0);
seq__22358_22368 = G__22382;
chunk__22359_22369 = G__22383;
count__22360_22370 = G__22384;
i__22361_22371 = G__22385;
continue;
} else {
var vec__22365_22386 = cljs.core.first(seq__22358_22380__$1);
var name_22387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22365_22386,(0),null);
var value_22388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22365_22386,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_22387,cljs.core.array_seq([value_22388], 0));

var G__22389 = cljs.core.next(seq__22358_22380__$1);
var G__22390 = null;
var G__22391 = (0);
var G__22392 = (0);
seq__22358_22368 = G__22389;
chunk__22359_22369 = G__22390;
count__22360_22370 = G__22391;
i__22361_22371 = G__22392;
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
var G__22395 = domina.single_node(content);
var G__22396 = class$;
return goog.dom.classes.has(G__22395,G__22396);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__22401_22405 = cljs.core.seq(domina.nodes(content));
var chunk__22402_22406 = null;
var count__22403_22407 = (0);
var i__22404_22408 = (0);
while(true){
if((i__22404_22408 < count__22403_22407)){
var node_22409 = chunk__22402_22406.cljs$core$IIndexed$_nth$arity$2(null,i__22404_22408);
goog.dom.classes.add(node_22409,class$);

var G__22410 = seq__22401_22405;
var G__22411 = chunk__22402_22406;
var G__22412 = count__22403_22407;
var G__22413 = (i__22404_22408 + (1));
seq__22401_22405 = G__22410;
chunk__22402_22406 = G__22411;
count__22403_22407 = G__22412;
i__22404_22408 = G__22413;
continue;
} else {
var temp__4657__auto___22414 = cljs.core.seq(seq__22401_22405);
if(temp__4657__auto___22414){
var seq__22401_22415__$1 = temp__4657__auto___22414;
if(cljs.core.chunked_seq_QMARK_(seq__22401_22415__$1)){
var c__7220__auto___22416 = cljs.core.chunk_first(seq__22401_22415__$1);
var G__22417 = cljs.core.chunk_rest(seq__22401_22415__$1);
var G__22418 = c__7220__auto___22416;
var G__22419 = cljs.core.count(c__7220__auto___22416);
var G__22420 = (0);
seq__22401_22405 = G__22417;
chunk__22402_22406 = G__22418;
count__22403_22407 = G__22419;
i__22404_22408 = G__22420;
continue;
} else {
var node_22421 = cljs.core.first(seq__22401_22415__$1);
goog.dom.classes.add(node_22421,class$);

var G__22422 = cljs.core.next(seq__22401_22415__$1);
var G__22423 = null;
var G__22424 = (0);
var G__22425 = (0);
seq__22401_22405 = G__22422;
chunk__22402_22406 = G__22423;
count__22403_22407 = G__22424;
i__22404_22408 = G__22425;
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
var seq__22430_22434 = cljs.core.seq(domina.nodes(content));
var chunk__22431_22435 = null;
var count__22432_22436 = (0);
var i__22433_22437 = (0);
while(true){
if((i__22433_22437 < count__22432_22436)){
var node_22438 = chunk__22431_22435.cljs$core$IIndexed$_nth$arity$2(null,i__22433_22437);
goog.dom.classes.remove(node_22438,class$);

var G__22439 = seq__22430_22434;
var G__22440 = chunk__22431_22435;
var G__22441 = count__22432_22436;
var G__22442 = (i__22433_22437 + (1));
seq__22430_22434 = G__22439;
chunk__22431_22435 = G__22440;
count__22432_22436 = G__22441;
i__22433_22437 = G__22442;
continue;
} else {
var temp__4657__auto___22443 = cljs.core.seq(seq__22430_22434);
if(temp__4657__auto___22443){
var seq__22430_22444__$1 = temp__4657__auto___22443;
if(cljs.core.chunked_seq_QMARK_(seq__22430_22444__$1)){
var c__7220__auto___22445 = cljs.core.chunk_first(seq__22430_22444__$1);
var G__22446 = cljs.core.chunk_rest(seq__22430_22444__$1);
var G__22447 = c__7220__auto___22445;
var G__22448 = cljs.core.count(c__7220__auto___22445);
var G__22449 = (0);
seq__22430_22434 = G__22446;
chunk__22431_22435 = G__22447;
count__22432_22436 = G__22448;
i__22433_22437 = G__22449;
continue;
} else {
var node_22450 = cljs.core.first(seq__22430_22444__$1);
goog.dom.classes.remove(node_22450,class$);

var G__22451 = cljs.core.next(seq__22430_22444__$1);
var G__22452 = null;
var G__22453 = (0);
var G__22454 = (0);
seq__22430_22434 = G__22451;
chunk__22431_22435 = G__22452;
count__22432_22436 = G__22453;
i__22433_22437 = G__22454;
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
var seq__22459_22463 = cljs.core.seq(domina.nodes(content));
var chunk__22460_22464 = null;
var count__22461_22465 = (0);
var i__22462_22466 = (0);
while(true){
if((i__22462_22466 < count__22461_22465)){
var node_22467 = chunk__22460_22464.cljs$core$IIndexed$_nth$arity$2(null,i__22462_22466);
goog.dom.classes.toggle(node_22467,class$);

var G__22468 = seq__22459_22463;
var G__22469 = chunk__22460_22464;
var G__22470 = count__22461_22465;
var G__22471 = (i__22462_22466 + (1));
seq__22459_22463 = G__22468;
chunk__22460_22464 = G__22469;
count__22461_22465 = G__22470;
i__22462_22466 = G__22471;
continue;
} else {
var temp__4657__auto___22472 = cljs.core.seq(seq__22459_22463);
if(temp__4657__auto___22472){
var seq__22459_22473__$1 = temp__4657__auto___22472;
if(cljs.core.chunked_seq_QMARK_(seq__22459_22473__$1)){
var c__7220__auto___22474 = cljs.core.chunk_first(seq__22459_22473__$1);
var G__22475 = cljs.core.chunk_rest(seq__22459_22473__$1);
var G__22476 = c__7220__auto___22474;
var G__22477 = cljs.core.count(c__7220__auto___22474);
var G__22478 = (0);
seq__22459_22463 = G__22475;
chunk__22460_22464 = G__22476;
count__22461_22465 = G__22477;
i__22462_22466 = G__22478;
continue;
} else {
var node_22479 = cljs.core.first(seq__22459_22473__$1);
goog.dom.classes.toggle(node_22479,class$);

var G__22480 = cljs.core.next(seq__22459_22473__$1);
var G__22481 = null;
var G__22482 = (0);
var G__22483 = (0);
seq__22459_22463 = G__22480;
chunk__22460_22464 = G__22481;
count__22461_22465 = G__22482;
i__22462_22466 = G__22483;
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
return cljs.core.seq((function (){var G__22485 = domina.single_node(content);
return goog.dom.classes.get(G__22485);
})());
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_22494__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__22490_22495 = cljs.core.seq(domina.nodes(content));
var chunk__22491_22496 = null;
var count__22492_22497 = (0);
var i__22493_22498 = (0);
while(true){
if((i__22493_22498 < count__22492_22497)){
var node_22499 = chunk__22491_22496.cljs$core$IIndexed$_nth$arity$2(null,i__22493_22498);
goog.dom.classes.set(node_22499,classes_22494__$1);

var G__22500 = seq__22490_22495;
var G__22501 = chunk__22491_22496;
var G__22502 = count__22492_22497;
var G__22503 = (i__22493_22498 + (1));
seq__22490_22495 = G__22500;
chunk__22491_22496 = G__22501;
count__22492_22497 = G__22502;
i__22493_22498 = G__22503;
continue;
} else {
var temp__4657__auto___22504 = cljs.core.seq(seq__22490_22495);
if(temp__4657__auto___22504){
var seq__22490_22505__$1 = temp__4657__auto___22504;
if(cljs.core.chunked_seq_QMARK_(seq__22490_22505__$1)){
var c__7220__auto___22506 = cljs.core.chunk_first(seq__22490_22505__$1);
var G__22507 = cljs.core.chunk_rest(seq__22490_22505__$1);
var G__22508 = c__7220__auto___22506;
var G__22509 = cljs.core.count(c__7220__auto___22506);
var G__22510 = (0);
seq__22490_22495 = G__22507;
chunk__22491_22496 = G__22508;
count__22492_22497 = G__22509;
i__22493_22498 = G__22510;
continue;
} else {
var node_22511 = cljs.core.first(seq__22490_22505__$1);
goog.dom.classes.set(node_22511,classes_22494__$1);

var G__22512 = cljs.core.next(seq__22490_22505__$1);
var G__22513 = null;
var G__22514 = (0);
var G__22515 = (0);
seq__22490_22495 = G__22512;
chunk__22491_22496 = G__22513;
count__22492_22497 = G__22514;
i__22493_22498 = G__22515;
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
var G__22518 = (function (){var G__22519 = domina.single_node(content);
return goog.dom.getTextContent(G__22519);
})();
return goog.string.trim(G__22518);
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__22524_22528 = cljs.core.seq(domina.nodes(content));
var chunk__22525_22529 = null;
var count__22526_22530 = (0);
var i__22527_22531 = (0);
while(true){
if((i__22527_22531 < count__22526_22530)){
var node_22532 = chunk__22525_22529.cljs$core$IIndexed$_nth$arity$2(null,i__22527_22531);
goog.dom.setTextContent(node_22532,value);

var G__22533 = seq__22524_22528;
var G__22534 = chunk__22525_22529;
var G__22535 = count__22526_22530;
var G__22536 = (i__22527_22531 + (1));
seq__22524_22528 = G__22533;
chunk__22525_22529 = G__22534;
count__22526_22530 = G__22535;
i__22527_22531 = G__22536;
continue;
} else {
var temp__4657__auto___22537 = cljs.core.seq(seq__22524_22528);
if(temp__4657__auto___22537){
var seq__22524_22538__$1 = temp__4657__auto___22537;
if(cljs.core.chunked_seq_QMARK_(seq__22524_22538__$1)){
var c__7220__auto___22539 = cljs.core.chunk_first(seq__22524_22538__$1);
var G__22540 = cljs.core.chunk_rest(seq__22524_22538__$1);
var G__22541 = c__7220__auto___22539;
var G__22542 = cljs.core.count(c__7220__auto___22539);
var G__22543 = (0);
seq__22524_22528 = G__22540;
chunk__22525_22529 = G__22541;
count__22526_22530 = G__22542;
i__22527_22531 = G__22543;
continue;
} else {
var node_22544 = cljs.core.first(seq__22524_22538__$1);
goog.dom.setTextContent(node_22544,value);

var G__22545 = cljs.core.next(seq__22524_22538__$1);
var G__22546 = null;
var G__22547 = (0);
var G__22548 = (0);
seq__22524_22528 = G__22545;
chunk__22525_22529 = G__22546;
count__22526_22530 = G__22547;
i__22527_22531 = G__22548;
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
var G__22550 = domina.single_node(content);
return goog.dom.forms.getValue(G__22550);
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__22555_22559 = cljs.core.seq(domina.nodes(content));
var chunk__22556_22560 = null;
var count__22557_22561 = (0);
var i__22558_22562 = (0);
while(true){
if((i__22558_22562 < count__22557_22561)){
var node_22563 = chunk__22556_22560.cljs$core$IIndexed$_nth$arity$2(null,i__22558_22562);
goog.dom.forms.setValue(node_22563,value);

var G__22564 = seq__22555_22559;
var G__22565 = chunk__22556_22560;
var G__22566 = count__22557_22561;
var G__22567 = (i__22558_22562 + (1));
seq__22555_22559 = G__22564;
chunk__22556_22560 = G__22565;
count__22557_22561 = G__22566;
i__22558_22562 = G__22567;
continue;
} else {
var temp__4657__auto___22568 = cljs.core.seq(seq__22555_22559);
if(temp__4657__auto___22568){
var seq__22555_22569__$1 = temp__4657__auto___22568;
if(cljs.core.chunked_seq_QMARK_(seq__22555_22569__$1)){
var c__7220__auto___22570 = cljs.core.chunk_first(seq__22555_22569__$1);
var G__22571 = cljs.core.chunk_rest(seq__22555_22569__$1);
var G__22572 = c__7220__auto___22570;
var G__22573 = cljs.core.count(c__7220__auto___22570);
var G__22574 = (0);
seq__22555_22559 = G__22571;
chunk__22556_22560 = G__22572;
count__22557_22561 = G__22573;
i__22558_22562 = G__22574;
continue;
} else {
var node_22575 = cljs.core.first(seq__22555_22569__$1);
goog.dom.forms.setValue(node_22575,value);

var G__22576 = cljs.core.next(seq__22555_22569__$1);
var G__22577 = null;
var G__22578 = (0);
var G__22579 = (0);
seq__22555_22559 = G__22576;
chunk__22556_22560 = G__22577;
count__22557_22561 = G__22578;
i__22558_22562 = G__22579;
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
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__6397__auto__ = allows_inner_html_QMARK_;
if(and__6397__auto__){
var and__6397__auto____$1 = (function (){var or__6409__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.not(leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__6397__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
var value_22590 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__22586_22591 = cljs.core.seq(domina.nodes(content));
var chunk__22587_22592 = null;
var count__22588_22593 = (0);
var i__22589_22594 = (0);
while(true){
if((i__22589_22594 < count__22588_22593)){
var node_22595 = chunk__22587_22592.cljs$core$IIndexed$_nth$arity$2(null,i__22589_22594);
node_22595.innerHTML = value_22590;

var G__22596 = seq__22586_22591;
var G__22597 = chunk__22587_22592;
var G__22598 = count__22588_22593;
var G__22599 = (i__22589_22594 + (1));
seq__22586_22591 = G__22596;
chunk__22587_22592 = G__22597;
count__22588_22593 = G__22598;
i__22589_22594 = G__22599;
continue;
} else {
var temp__4657__auto___22600 = cljs.core.seq(seq__22586_22591);
if(temp__4657__auto___22600){
var seq__22586_22601__$1 = temp__4657__auto___22600;
if(cljs.core.chunked_seq_QMARK_(seq__22586_22601__$1)){
var c__7220__auto___22602 = cljs.core.chunk_first(seq__22586_22601__$1);
var G__22603 = cljs.core.chunk_rest(seq__22586_22601__$1);
var G__22604 = c__7220__auto___22602;
var G__22605 = cljs.core.count(c__7220__auto___22602);
var G__22606 = (0);
seq__22586_22591 = G__22603;
chunk__22587_22592 = G__22604;
count__22588_22593 = G__22605;
i__22589_22594 = G__22606;
continue;
} else {
var node_22607 = cljs.core.first(seq__22586_22601__$1);
node_22607.innerHTML = value_22590;

var G__22608 = cljs.core.next(seq__22586_22601__$1);
var G__22609 = null;
var G__22610 = (0);
var G__22611 = (0);
seq__22586_22591 = G__22608;
chunk__22587_22592 = G__22609;
count__22588_22593 = G__22610;
i__22589_22594 = G__22611;
continue;
}
} else {
}
}
break;
}
}catch (e22585){if((e22585 instanceof Error)){
var e_22612 = e22585;
domina.replace_children_BANG_(content,value_22590);
} else {
throw e22585;

}
}} else {
domina.replace_children_BANG_(content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_(content,inner_content);
} else {
return domina.replace_children_BANG_(content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var args22613 = [];
var len__7484__auto___22616 = arguments.length;
var i__7485__auto___22617 = (0);
while(true){
if((i__7485__auto___22617 < len__7484__auto___22616)){
args22613.push((arguments[i__7485__auto___22617]));

var G__22618 = (i__7485__auto___22617 + (1));
i__7485__auto___22617 = G__22618;
continue;
} else {
}
break;
}

var G__22615 = args22613.length;
switch (G__22615) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22613.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);
if(cljs.core.truth_((function (){var and__6397__auto__ = bubble;
if(cljs.core.truth_(and__6397__auto__)){
return (value == null);
} else {
return and__6397__auto__;
}
})())){
var temp__4657__auto__ = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return domina.get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
var m = (function (){var or__6409__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes(parent_content);
var children = domina.nodes(child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__22628_22634 = cljs.core.seq(children);
var chunk__22629_22635 = null;
var count__22630_22636 = (0);
var i__22631_22637 = (0);
while(true){
if((i__22631_22637 < count__22630_22636)){
var child_22638 = chunk__22629_22635.cljs$core$IIndexed$_nth$arity$2(null,i__22631_22637);
frag.appendChild(child_22638);

var G__22639 = seq__22628_22634;
var G__22640 = chunk__22629_22635;
var G__22641 = count__22630_22636;
var G__22642 = (i__22631_22637 + (1));
seq__22628_22634 = G__22639;
chunk__22629_22635 = G__22640;
count__22630_22636 = G__22641;
i__22631_22637 = G__22642;
continue;
} else {
var temp__4657__auto___22643 = cljs.core.seq(seq__22628_22634);
if(temp__4657__auto___22643){
var seq__22628_22644__$1 = temp__4657__auto___22643;
if(cljs.core.chunked_seq_QMARK_(seq__22628_22644__$1)){
var c__7220__auto___22645 = cljs.core.chunk_first(seq__22628_22644__$1);
var G__22646 = cljs.core.chunk_rest(seq__22628_22644__$1);
var G__22647 = c__7220__auto___22645;
var G__22648 = cljs.core.count(c__7220__auto___22645);
var G__22649 = (0);
seq__22628_22634 = G__22646;
chunk__22629_22635 = G__22647;
count__22630_22636 = G__22648;
i__22631_22637 = G__22649;
continue;
} else {
var child_22650 = cljs.core.first(seq__22628_22644__$1);
frag.appendChild(child_22650);

var G__22651 = cljs.core.next(seq__22628_22644__$1);
var G__22652 = null;
var G__22653 = (0);
var G__22654 = (0);
seq__22628_22634 = G__22651;
chunk__22629_22635 = G__22652;
count__22630_22636 = G__22653;
i__22631_22637 = G__22654;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq(parents)){
var G__22632_22655 = cljs.core.first(parents);
var G__22633_22656 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22632_22655,G__22633_22656) : f.call(null,G__22632_22655,G__22633_22656));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__22620_SHARP_,p2__22621_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__22620_SHARP_,p2__22621_SHARP_) : f.call(null,p1__22620_SHARP_,p2__22621_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args22657 = [];
var len__7484__auto___22660 = arguments.length;
var i__7485__auto___22661 = (0);
while(true){
if((i__7485__auto___22661 < len__7484__auto___22660)){
args22657.push((arguments[i__7485__auto___22661]));

var G__22662 = (i__7485__auto___22661 + (1));
i__7485__auto___22661 = G__22662;
continue;
} else {
}
break;
}

var G__22659 = args22657.length;
switch (G__22659) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22657.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(nl.item(n),domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var args22664 = [];
var len__7484__auto___22667 = arguments.length;
var i__7485__auto___22668 = (0);
while(true){
if((i__7485__auto___22668 < len__7484__auto___22667)){
args22664.push((arguments[i__7485__auto___22668]));

var G__22669 = (i__7485__auto___22668 + (1));
i__7485__auto___22668 = G__22669;
continue;
} else {
}
break;
}

var G__22666 = args22664.length;
switch (G__22666) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22664.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((nl[n]),domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else {
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__6397__auto__ = obj;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = cljs.core.not(obj.nodeName);
if(and__6397__auto____$1){
return obj.length;
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
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
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,list_thing))){
return cljs.core.seq(list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(list_thing))){
return domina.lazy_nodelist(list_thing);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content))){
return cljs.core.seq(content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(content))){
return domina.lazy_nodelist(content);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content))){
return cljs.core.first(content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(content))){
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist(coll__$1);
});
} else {
}
