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
var opt_wrapper_22092 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_22093 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_22094 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.cst$kw$default,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_22094,opt_wrapper_22092,table_section_wrapper_22093,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_22092,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_22093,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_22093,cell_wrapper_22094,table_section_wrapper_22093,table_section_wrapper_22093]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__6394__auto__ = div.firstChild;
if(cljs.core.truth_(and__6394__auto__)){
return div.firstChild.childNodes;
} else {
return and__6394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__22099 = cljs.core.seq(tbody);
var chunk__22100 = null;
var count__22101 = (0);
var i__22102 = (0);
while(true){
if((i__22102 < count__22101)){
var child = chunk__22100.cljs$core$IIndexed$_nth$arity$2(null,i__22102);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__22103 = seq__22099;
var G__22104 = chunk__22100;
var G__22105 = count__22101;
var G__22106 = (i__22102 + (1));
seq__22099 = G__22103;
chunk__22100 = G__22104;
count__22101 = G__22105;
i__22102 = G__22106;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__22099);
if(temp__4657__auto__){
var seq__22099__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22099__$1)){
var c__7217__auto__ = cljs.core.chunk_first(seq__22099__$1);
var G__22107 = cljs.core.chunk_rest(seq__22099__$1);
var G__22108 = c__7217__auto__;
var G__22109 = cljs.core.count(c__7217__auto__);
var G__22110 = (0);
seq__22099 = G__22107;
chunk__22100 = G__22108;
count__22101 = G__22109;
i__22102 = G__22110;
continue;
} else {
var child = cljs.core.first(seq__22099__$1);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__22111 = cljs.core.next(seq__22099__$1);
var G__22112 = null;
var G__22113 = (0);
var G__22114 = (0);
seq__22099 = G__22111;
chunk__22100 = G__22112;
count__22101 = G__22113;
i__22102 = G__22114;
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
var vec__22118 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22118,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22118,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22118,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__22121 = wrapper.lastChild;
var G__22122 = (level - (1));
wrapper = G__22121;
level = G__22122;
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

if(cljs.core.truth_((function (){var and__6394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__6394__auto__){
return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else {
return and__6394__auto__;
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
var x__7069__auto__ = (((content == null))?null:content);
var m__7070__auto__ = (domina.nodes[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$1(content) : m__7070__auto__.call(null,content));
} else {
var m__7070__auto____$1 = (domina.nodes["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1(content) : m__7070__auto____$1.call(null,content));
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
var x__7069__auto__ = (((nodeseq == null))?null:nodeseq);
var m__7070__auto__ = (domina.single_node[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__7070__auto__.call(null,nodeseq));
} else {
var m__7070__auto____$1 = (domina.single_node["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__7070__auto____$1.call(null,nodeseq));
} else {
throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__7488__auto__ = [];
var len__7481__auto___22124 = arguments.length;
var i__7482__auto___22125 = (0);
while(true){
if((i__7482__auto___22125 < len__7481__auto___22124)){
args__7488__auto__.push((arguments[i__7482__auto___22125]));

var G__22126 = (i__7482__auto___22125 + (1));
i__7482__auto___22125 = G__22126;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((0) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__7489__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__6394__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__6394__auto__)){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else {
return and__6394__auto__;
}
})())){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq22123){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22123));
});

domina.log = (function domina$log(var_args){
var args__7488__auto__ = [];
var len__7481__auto___22128 = arguments.length;
var i__7482__auto___22129 = (0);
while(true){
if((i__7482__auto___22129 < len__7481__auto___22128)){
args__7488__auto__.push((arguments[i__7482__auto___22129]));

var G__22130 = (i__7482__auto___22129 + (1));
i__7482__auto___22129 = G__22130;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((0) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7489__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq22127){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22127));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
var G__22132 = cljs.core.name(id);
return goog.dom.getElement(G__22132);
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
var G__22135 = (function (){var G__22136 = cljs.core.name(class_name);
return goog.dom.getElementsByClass(G__22136);
})();
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__22135) : domina.normalize_seq.call(null,G__22135));
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
var args__7488__auto__ = [];
var len__7481__auto___22138 = arguments.length;
var i__7482__auto___22139 = (0);
while(true){
if((i__7482__auto___22139 < len__7481__auto___22138)){
args__7488__auto__.push((arguments[i__7482__auto___22139]));

var G__22140 = (i__7482__auto___22139 + (1));
i__7482__auto___22139 = G__22140;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((0) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__7489__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq22137){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22137));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22141_SHARP_){
return p1__22141_SHARP_.cloneNode(true);
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
var G__22147_22150 = (function (p1__22142_SHARP_,p2__22143_SHARP_){
return goog.dom.insertChildAt(p1__22142_SHARP_,p2__22143_SHARP_,idx);
});
var G__22148_22151 = parent_content;
var G__22149_22152 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__22147_22150,G__22148_22151,G__22149_22152) : domina.apply_with_cloning.call(null,G__22147_22150,G__22148_22151,G__22149_22152));

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
var G__22158_22161 = (function (p1__22154_SHARP_,p2__22153_SHARP_){
return goog.dom.insertSiblingBefore(p2__22153_SHARP_,p1__22154_SHARP_);
});
var G__22159_22162 = content;
var G__22160_22163 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__22158_22161,G__22159_22162,G__22160_22163) : domina.apply_with_cloning.call(null,G__22158_22161,G__22159_22162,G__22160_22163));

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
var G__22169_22172 = (function (p1__22165_SHARP_,p2__22164_SHARP_){
return goog.dom.insertSiblingAfter(p2__22164_SHARP_,p1__22165_SHARP_);
});
var G__22170_22173 = content;
var G__22171_22174 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__22169_22172,G__22170_22173,G__22171_22174) : domina.apply_with_cloning.call(null,G__22169_22172,G__22170_22173,G__22171_22174));

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
var G__22180_22183 = (function (p1__22176_SHARP_,p2__22175_SHARP_){
return goog.dom.replaceNode(p2__22175_SHARP_,p1__22176_SHARP_);
});
var G__22181_22184 = old_content;
var G__22182_22185 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__22180_22183,G__22181_22184,G__22182_22185) : domina.apply_with_cloning.call(null,G__22180_22183,G__22181_22184,G__22182_22185));

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
var s = (function (){var G__22188 = domina.single_node(content);
var G__22189 = cljs.core.name(name);
return goog.style.getStyle(G__22188,G__22189);
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
var args__7488__auto__ = [];
var len__7481__auto___22203 = arguments.length;
var i__7482__auto___22204 = (0);
while(true){
if((i__7482__auto___22204 < len__7481__auto___22203)){
args__7488__auto__.push((arguments[i__7482__auto___22204]));

var G__22205 = (i__7482__auto___22204 + (1));
i__7482__auto___22204 = G__22205;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((2) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7489__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__22193_22206 = cljs.core.seq(domina.nodes(content));
var chunk__22194_22207 = null;
var count__22195_22208 = (0);
var i__22196_22209 = (0);
while(true){
if((i__22196_22209 < count__22195_22208)){
var n_22210 = chunk__22194_22207.cljs$core$IIndexed$_nth$arity$2(null,i__22196_22209);
var G__22197_22211 = n_22210;
var G__22198_22212 = cljs.core.name(name);
var G__22199_22213 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__22197_22211,G__22198_22212,G__22199_22213);

var G__22214 = seq__22193_22206;
var G__22215 = chunk__22194_22207;
var G__22216 = count__22195_22208;
var G__22217 = (i__22196_22209 + (1));
seq__22193_22206 = G__22214;
chunk__22194_22207 = G__22215;
count__22195_22208 = G__22216;
i__22196_22209 = G__22217;
continue;
} else {
var temp__4657__auto___22218 = cljs.core.seq(seq__22193_22206);
if(temp__4657__auto___22218){
var seq__22193_22219__$1 = temp__4657__auto___22218;
if(cljs.core.chunked_seq_QMARK_(seq__22193_22219__$1)){
var c__7217__auto___22220 = cljs.core.chunk_first(seq__22193_22219__$1);
var G__22221 = cljs.core.chunk_rest(seq__22193_22219__$1);
var G__22222 = c__7217__auto___22220;
var G__22223 = cljs.core.count(c__7217__auto___22220);
var G__22224 = (0);
seq__22193_22206 = G__22221;
chunk__22194_22207 = G__22222;
count__22195_22208 = G__22223;
i__22196_22209 = G__22224;
continue;
} else {
var n_22225 = cljs.core.first(seq__22193_22219__$1);
var G__22200_22226 = n_22225;
var G__22201_22227 = cljs.core.name(name);
var G__22202_22228 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__22200_22226,G__22201_22227,G__22202_22228);

var G__22229 = cljs.core.next(seq__22193_22219__$1);
var G__22230 = null;
var G__22231 = (0);
var G__22232 = (0);
seq__22193_22206 = G__22229;
chunk__22194_22207 = G__22230;
count__22195_22208 = G__22231;
i__22196_22209 = G__22232;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq22190){
var G__22191 = cljs.core.first(seq22190);
var seq22190__$1 = cljs.core.next(seq22190);
var G__22192 = cljs.core.first(seq22190__$1);
var seq22190__$2 = cljs.core.next(seq22190__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22191,G__22192,seq22190__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__7488__auto__ = [];
var len__7481__auto___22240 = arguments.length;
var i__7482__auto___22241 = (0);
while(true){
if((i__7482__auto___22241 < len__7481__auto___22240)){
args__7488__auto__.push((arguments[i__7482__auto___22241]));

var G__22242 = (i__7482__auto___22241 + (1));
i__7482__auto___22241 = G__22242;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((2) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7489__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__22236_22243 = cljs.core.seq(domina.nodes(content));
var chunk__22237_22244 = null;
var count__22238_22245 = (0);
var i__22239_22246 = (0);
while(true){
if((i__22239_22246 < count__22238_22245)){
var n_22247 = chunk__22237_22244.cljs$core$IIndexed$_nth$arity$2(null,i__22239_22246);
n_22247.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__22248 = seq__22236_22243;
var G__22249 = chunk__22237_22244;
var G__22250 = count__22238_22245;
var G__22251 = (i__22239_22246 + (1));
seq__22236_22243 = G__22248;
chunk__22237_22244 = G__22249;
count__22238_22245 = G__22250;
i__22239_22246 = G__22251;
continue;
} else {
var temp__4657__auto___22252 = cljs.core.seq(seq__22236_22243);
if(temp__4657__auto___22252){
var seq__22236_22253__$1 = temp__4657__auto___22252;
if(cljs.core.chunked_seq_QMARK_(seq__22236_22253__$1)){
var c__7217__auto___22254 = cljs.core.chunk_first(seq__22236_22253__$1);
var G__22255 = cljs.core.chunk_rest(seq__22236_22253__$1);
var G__22256 = c__7217__auto___22254;
var G__22257 = cljs.core.count(c__7217__auto___22254);
var G__22258 = (0);
seq__22236_22243 = G__22255;
chunk__22237_22244 = G__22256;
count__22238_22245 = G__22257;
i__22239_22246 = G__22258;
continue;
} else {
var n_22259 = cljs.core.first(seq__22236_22253__$1);
n_22259.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__22260 = cljs.core.next(seq__22236_22253__$1);
var G__22261 = null;
var G__22262 = (0);
var G__22263 = (0);
seq__22236_22243 = G__22260;
chunk__22237_22244 = G__22261;
count__22238_22245 = G__22262;
i__22239_22246 = G__22263;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq22233){
var G__22234 = cljs.core.first(seq22233);
var seq22233__$1 = cljs.core.next(seq22233);
var G__22235 = cljs.core.first(seq22233__$1);
var seq22233__$2 = cljs.core.next(seq22233__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22234,G__22235,seq22233__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__22268_22272 = cljs.core.seq(domina.nodes(content));
var chunk__22269_22273 = null;
var count__22270_22274 = (0);
var i__22271_22275 = (0);
while(true){
if((i__22271_22275 < count__22270_22274)){
var n_22276 = chunk__22269_22273.cljs$core$IIndexed$_nth$arity$2(null,i__22271_22275);
n_22276.removeAttribute(cljs.core.name(name));

var G__22277 = seq__22268_22272;
var G__22278 = chunk__22269_22273;
var G__22279 = count__22270_22274;
var G__22280 = (i__22271_22275 + (1));
seq__22268_22272 = G__22277;
chunk__22269_22273 = G__22278;
count__22270_22274 = G__22279;
i__22271_22275 = G__22280;
continue;
} else {
var temp__4657__auto___22281 = cljs.core.seq(seq__22268_22272);
if(temp__4657__auto___22281){
var seq__22268_22282__$1 = temp__4657__auto___22281;
if(cljs.core.chunked_seq_QMARK_(seq__22268_22282__$1)){
var c__7217__auto___22283 = cljs.core.chunk_first(seq__22268_22282__$1);
var G__22284 = cljs.core.chunk_rest(seq__22268_22282__$1);
var G__22285 = c__7217__auto___22283;
var G__22286 = cljs.core.count(c__7217__auto___22283);
var G__22287 = (0);
seq__22268_22272 = G__22284;
chunk__22269_22273 = G__22285;
count__22270_22274 = G__22286;
i__22271_22275 = G__22287;
continue;
} else {
var n_22288 = cljs.core.first(seq__22268_22282__$1);
n_22288.removeAttribute(cljs.core.name(name));

var G__22289 = cljs.core.next(seq__22268_22282__$1);
var G__22290 = null;
var G__22291 = (0);
var G__22292 = (0);
seq__22268_22272 = G__22289;
chunk__22269_22273 = G__22290;
count__22270_22274 = G__22291;
i__22271_22275 = G__22292;
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
var vec__22296 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22296,(1),null);
if(cljs.core.truth_((function (){var and__6394__auto__ = k;
if(cljs.core.truth_(and__6394__auto__)){
return v;
} else {
return and__6394__auto__;
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
return (function (p1__22299_SHARP_){
var attr = attrs__$1.item(p1__22299_SHARP_);
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
var seq__22310_22320 = cljs.core.seq(styles);
var chunk__22311_22321 = null;
var count__22312_22322 = (0);
var i__22313_22323 = (0);
while(true){
if((i__22313_22323 < count__22312_22322)){
var vec__22314_22324 = chunk__22311_22321.cljs$core$IIndexed$_nth$arity$2(null,i__22313_22323);
var name_22325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22314_22324,(0),null);
var value_22326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22314_22324,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_22325,cljs.core.array_seq([value_22326], 0));

var G__22327 = seq__22310_22320;
var G__22328 = chunk__22311_22321;
var G__22329 = count__22312_22322;
var G__22330 = (i__22313_22323 + (1));
seq__22310_22320 = G__22327;
chunk__22311_22321 = G__22328;
count__22312_22322 = G__22329;
i__22313_22323 = G__22330;
continue;
} else {
var temp__4657__auto___22331 = cljs.core.seq(seq__22310_22320);
if(temp__4657__auto___22331){
var seq__22310_22332__$1 = temp__4657__auto___22331;
if(cljs.core.chunked_seq_QMARK_(seq__22310_22332__$1)){
var c__7217__auto___22333 = cljs.core.chunk_first(seq__22310_22332__$1);
var G__22334 = cljs.core.chunk_rest(seq__22310_22332__$1);
var G__22335 = c__7217__auto___22333;
var G__22336 = cljs.core.count(c__7217__auto___22333);
var G__22337 = (0);
seq__22310_22320 = G__22334;
chunk__22311_22321 = G__22335;
count__22312_22322 = G__22336;
i__22313_22323 = G__22337;
continue;
} else {
var vec__22317_22338 = cljs.core.first(seq__22310_22332__$1);
var name_22339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22317_22338,(0),null);
var value_22340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22317_22338,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_22339,cljs.core.array_seq([value_22340], 0));

var G__22341 = cljs.core.next(seq__22310_22332__$1);
var G__22342 = null;
var G__22343 = (0);
var G__22344 = (0);
seq__22310_22320 = G__22341;
chunk__22311_22321 = G__22342;
count__22312_22322 = G__22343;
i__22313_22323 = G__22344;
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
var seq__22355_22365 = cljs.core.seq(attrs);
var chunk__22356_22366 = null;
var count__22357_22367 = (0);
var i__22358_22368 = (0);
while(true){
if((i__22358_22368 < count__22357_22367)){
var vec__22359_22369 = chunk__22356_22366.cljs$core$IIndexed$_nth$arity$2(null,i__22358_22368);
var name_22370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22359_22369,(0),null);
var value_22371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22359_22369,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_22370,cljs.core.array_seq([value_22371], 0));

var G__22372 = seq__22355_22365;
var G__22373 = chunk__22356_22366;
var G__22374 = count__22357_22367;
var G__22375 = (i__22358_22368 + (1));
seq__22355_22365 = G__22372;
chunk__22356_22366 = G__22373;
count__22357_22367 = G__22374;
i__22358_22368 = G__22375;
continue;
} else {
var temp__4657__auto___22376 = cljs.core.seq(seq__22355_22365);
if(temp__4657__auto___22376){
var seq__22355_22377__$1 = temp__4657__auto___22376;
if(cljs.core.chunked_seq_QMARK_(seq__22355_22377__$1)){
var c__7217__auto___22378 = cljs.core.chunk_first(seq__22355_22377__$1);
var G__22379 = cljs.core.chunk_rest(seq__22355_22377__$1);
var G__22380 = c__7217__auto___22378;
var G__22381 = cljs.core.count(c__7217__auto___22378);
var G__22382 = (0);
seq__22355_22365 = G__22379;
chunk__22356_22366 = G__22380;
count__22357_22367 = G__22381;
i__22358_22368 = G__22382;
continue;
} else {
var vec__22362_22383 = cljs.core.first(seq__22355_22377__$1);
var name_22384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22362_22383,(0),null);
var value_22385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22362_22383,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_22384,cljs.core.array_seq([value_22385], 0));

var G__22386 = cljs.core.next(seq__22355_22377__$1);
var G__22387 = null;
var G__22388 = (0);
var G__22389 = (0);
seq__22355_22365 = G__22386;
chunk__22356_22366 = G__22387;
count__22357_22367 = G__22388;
i__22358_22368 = G__22389;
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
var G__22392 = domina.single_node(content);
var G__22393 = class$;
return goog.dom.classes.has(G__22392,G__22393);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__22398_22402 = cljs.core.seq(domina.nodes(content));
var chunk__22399_22403 = null;
var count__22400_22404 = (0);
var i__22401_22405 = (0);
while(true){
if((i__22401_22405 < count__22400_22404)){
var node_22406 = chunk__22399_22403.cljs$core$IIndexed$_nth$arity$2(null,i__22401_22405);
goog.dom.classes.add(node_22406,class$);

var G__22407 = seq__22398_22402;
var G__22408 = chunk__22399_22403;
var G__22409 = count__22400_22404;
var G__22410 = (i__22401_22405 + (1));
seq__22398_22402 = G__22407;
chunk__22399_22403 = G__22408;
count__22400_22404 = G__22409;
i__22401_22405 = G__22410;
continue;
} else {
var temp__4657__auto___22411 = cljs.core.seq(seq__22398_22402);
if(temp__4657__auto___22411){
var seq__22398_22412__$1 = temp__4657__auto___22411;
if(cljs.core.chunked_seq_QMARK_(seq__22398_22412__$1)){
var c__7217__auto___22413 = cljs.core.chunk_first(seq__22398_22412__$1);
var G__22414 = cljs.core.chunk_rest(seq__22398_22412__$1);
var G__22415 = c__7217__auto___22413;
var G__22416 = cljs.core.count(c__7217__auto___22413);
var G__22417 = (0);
seq__22398_22402 = G__22414;
chunk__22399_22403 = G__22415;
count__22400_22404 = G__22416;
i__22401_22405 = G__22417;
continue;
} else {
var node_22418 = cljs.core.first(seq__22398_22412__$1);
goog.dom.classes.add(node_22418,class$);

var G__22419 = cljs.core.next(seq__22398_22412__$1);
var G__22420 = null;
var G__22421 = (0);
var G__22422 = (0);
seq__22398_22402 = G__22419;
chunk__22399_22403 = G__22420;
count__22400_22404 = G__22421;
i__22401_22405 = G__22422;
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
var seq__22427_22431 = cljs.core.seq(domina.nodes(content));
var chunk__22428_22432 = null;
var count__22429_22433 = (0);
var i__22430_22434 = (0);
while(true){
if((i__22430_22434 < count__22429_22433)){
var node_22435 = chunk__22428_22432.cljs$core$IIndexed$_nth$arity$2(null,i__22430_22434);
goog.dom.classes.remove(node_22435,class$);

var G__22436 = seq__22427_22431;
var G__22437 = chunk__22428_22432;
var G__22438 = count__22429_22433;
var G__22439 = (i__22430_22434 + (1));
seq__22427_22431 = G__22436;
chunk__22428_22432 = G__22437;
count__22429_22433 = G__22438;
i__22430_22434 = G__22439;
continue;
} else {
var temp__4657__auto___22440 = cljs.core.seq(seq__22427_22431);
if(temp__4657__auto___22440){
var seq__22427_22441__$1 = temp__4657__auto___22440;
if(cljs.core.chunked_seq_QMARK_(seq__22427_22441__$1)){
var c__7217__auto___22442 = cljs.core.chunk_first(seq__22427_22441__$1);
var G__22443 = cljs.core.chunk_rest(seq__22427_22441__$1);
var G__22444 = c__7217__auto___22442;
var G__22445 = cljs.core.count(c__7217__auto___22442);
var G__22446 = (0);
seq__22427_22431 = G__22443;
chunk__22428_22432 = G__22444;
count__22429_22433 = G__22445;
i__22430_22434 = G__22446;
continue;
} else {
var node_22447 = cljs.core.first(seq__22427_22441__$1);
goog.dom.classes.remove(node_22447,class$);

var G__22448 = cljs.core.next(seq__22427_22441__$1);
var G__22449 = null;
var G__22450 = (0);
var G__22451 = (0);
seq__22427_22431 = G__22448;
chunk__22428_22432 = G__22449;
count__22429_22433 = G__22450;
i__22430_22434 = G__22451;
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
var seq__22456_22460 = cljs.core.seq(domina.nodes(content));
var chunk__22457_22461 = null;
var count__22458_22462 = (0);
var i__22459_22463 = (0);
while(true){
if((i__22459_22463 < count__22458_22462)){
var node_22464 = chunk__22457_22461.cljs$core$IIndexed$_nth$arity$2(null,i__22459_22463);
goog.dom.classes.toggle(node_22464,class$);

var G__22465 = seq__22456_22460;
var G__22466 = chunk__22457_22461;
var G__22467 = count__22458_22462;
var G__22468 = (i__22459_22463 + (1));
seq__22456_22460 = G__22465;
chunk__22457_22461 = G__22466;
count__22458_22462 = G__22467;
i__22459_22463 = G__22468;
continue;
} else {
var temp__4657__auto___22469 = cljs.core.seq(seq__22456_22460);
if(temp__4657__auto___22469){
var seq__22456_22470__$1 = temp__4657__auto___22469;
if(cljs.core.chunked_seq_QMARK_(seq__22456_22470__$1)){
var c__7217__auto___22471 = cljs.core.chunk_first(seq__22456_22470__$1);
var G__22472 = cljs.core.chunk_rest(seq__22456_22470__$1);
var G__22473 = c__7217__auto___22471;
var G__22474 = cljs.core.count(c__7217__auto___22471);
var G__22475 = (0);
seq__22456_22460 = G__22472;
chunk__22457_22461 = G__22473;
count__22458_22462 = G__22474;
i__22459_22463 = G__22475;
continue;
} else {
var node_22476 = cljs.core.first(seq__22456_22470__$1);
goog.dom.classes.toggle(node_22476,class$);

var G__22477 = cljs.core.next(seq__22456_22470__$1);
var G__22478 = null;
var G__22479 = (0);
var G__22480 = (0);
seq__22456_22460 = G__22477;
chunk__22457_22461 = G__22478;
count__22458_22462 = G__22479;
i__22459_22463 = G__22480;
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
return cljs.core.seq((function (){var G__22482 = domina.single_node(content);
return goog.dom.classes.get(G__22482);
})());
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_22491__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__22487_22492 = cljs.core.seq(domina.nodes(content));
var chunk__22488_22493 = null;
var count__22489_22494 = (0);
var i__22490_22495 = (0);
while(true){
if((i__22490_22495 < count__22489_22494)){
var node_22496 = chunk__22488_22493.cljs$core$IIndexed$_nth$arity$2(null,i__22490_22495);
goog.dom.classes.set(node_22496,classes_22491__$1);

var G__22497 = seq__22487_22492;
var G__22498 = chunk__22488_22493;
var G__22499 = count__22489_22494;
var G__22500 = (i__22490_22495 + (1));
seq__22487_22492 = G__22497;
chunk__22488_22493 = G__22498;
count__22489_22494 = G__22499;
i__22490_22495 = G__22500;
continue;
} else {
var temp__4657__auto___22501 = cljs.core.seq(seq__22487_22492);
if(temp__4657__auto___22501){
var seq__22487_22502__$1 = temp__4657__auto___22501;
if(cljs.core.chunked_seq_QMARK_(seq__22487_22502__$1)){
var c__7217__auto___22503 = cljs.core.chunk_first(seq__22487_22502__$1);
var G__22504 = cljs.core.chunk_rest(seq__22487_22502__$1);
var G__22505 = c__7217__auto___22503;
var G__22506 = cljs.core.count(c__7217__auto___22503);
var G__22507 = (0);
seq__22487_22492 = G__22504;
chunk__22488_22493 = G__22505;
count__22489_22494 = G__22506;
i__22490_22495 = G__22507;
continue;
} else {
var node_22508 = cljs.core.first(seq__22487_22502__$1);
goog.dom.classes.set(node_22508,classes_22491__$1);

var G__22509 = cljs.core.next(seq__22487_22502__$1);
var G__22510 = null;
var G__22511 = (0);
var G__22512 = (0);
seq__22487_22492 = G__22509;
chunk__22488_22493 = G__22510;
count__22489_22494 = G__22511;
i__22490_22495 = G__22512;
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
var G__22515 = (function (){var G__22516 = domina.single_node(content);
return goog.dom.getTextContent(G__22516);
})();
return goog.string.trim(G__22515);
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__22521_22525 = cljs.core.seq(domina.nodes(content));
var chunk__22522_22526 = null;
var count__22523_22527 = (0);
var i__22524_22528 = (0);
while(true){
if((i__22524_22528 < count__22523_22527)){
var node_22529 = chunk__22522_22526.cljs$core$IIndexed$_nth$arity$2(null,i__22524_22528);
goog.dom.setTextContent(node_22529,value);

var G__22530 = seq__22521_22525;
var G__22531 = chunk__22522_22526;
var G__22532 = count__22523_22527;
var G__22533 = (i__22524_22528 + (1));
seq__22521_22525 = G__22530;
chunk__22522_22526 = G__22531;
count__22523_22527 = G__22532;
i__22524_22528 = G__22533;
continue;
} else {
var temp__4657__auto___22534 = cljs.core.seq(seq__22521_22525);
if(temp__4657__auto___22534){
var seq__22521_22535__$1 = temp__4657__auto___22534;
if(cljs.core.chunked_seq_QMARK_(seq__22521_22535__$1)){
var c__7217__auto___22536 = cljs.core.chunk_first(seq__22521_22535__$1);
var G__22537 = cljs.core.chunk_rest(seq__22521_22535__$1);
var G__22538 = c__7217__auto___22536;
var G__22539 = cljs.core.count(c__7217__auto___22536);
var G__22540 = (0);
seq__22521_22525 = G__22537;
chunk__22522_22526 = G__22538;
count__22523_22527 = G__22539;
i__22524_22528 = G__22540;
continue;
} else {
var node_22541 = cljs.core.first(seq__22521_22535__$1);
goog.dom.setTextContent(node_22541,value);

var G__22542 = cljs.core.next(seq__22521_22535__$1);
var G__22543 = null;
var G__22544 = (0);
var G__22545 = (0);
seq__22521_22525 = G__22542;
chunk__22522_22526 = G__22543;
count__22523_22527 = G__22544;
i__22524_22528 = G__22545;
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
var G__22547 = domina.single_node(content);
return goog.dom.forms.getValue(G__22547);
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__22552_22556 = cljs.core.seq(domina.nodes(content));
var chunk__22553_22557 = null;
var count__22554_22558 = (0);
var i__22555_22559 = (0);
while(true){
if((i__22555_22559 < count__22554_22558)){
var node_22560 = chunk__22553_22557.cljs$core$IIndexed$_nth$arity$2(null,i__22555_22559);
goog.dom.forms.setValue(node_22560,value);

var G__22561 = seq__22552_22556;
var G__22562 = chunk__22553_22557;
var G__22563 = count__22554_22558;
var G__22564 = (i__22555_22559 + (1));
seq__22552_22556 = G__22561;
chunk__22553_22557 = G__22562;
count__22554_22558 = G__22563;
i__22555_22559 = G__22564;
continue;
} else {
var temp__4657__auto___22565 = cljs.core.seq(seq__22552_22556);
if(temp__4657__auto___22565){
var seq__22552_22566__$1 = temp__4657__auto___22565;
if(cljs.core.chunked_seq_QMARK_(seq__22552_22566__$1)){
var c__7217__auto___22567 = cljs.core.chunk_first(seq__22552_22566__$1);
var G__22568 = cljs.core.chunk_rest(seq__22552_22566__$1);
var G__22569 = c__7217__auto___22567;
var G__22570 = cljs.core.count(c__7217__auto___22567);
var G__22571 = (0);
seq__22552_22556 = G__22568;
chunk__22553_22557 = G__22569;
count__22554_22558 = G__22570;
i__22555_22559 = G__22571;
continue;
} else {
var node_22572 = cljs.core.first(seq__22552_22566__$1);
goog.dom.forms.setValue(node_22572,value);

var G__22573 = cljs.core.next(seq__22552_22566__$1);
var G__22574 = null;
var G__22575 = (0);
var G__22576 = (0);
seq__22552_22556 = G__22573;
chunk__22553_22557 = G__22574;
count__22554_22558 = G__22575;
i__22555_22559 = G__22576;
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
if(cljs.core.truth_((function (){var and__6394__auto__ = allows_inner_html_QMARK_;
if(and__6394__auto__){
var and__6394__auto____$1 = (function (){var or__6406__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return cljs.core.not(leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__6394__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__6394__auto____$1;
}
} else {
return and__6394__auto__;
}
})())){
var value_22587 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__22583_22588 = cljs.core.seq(domina.nodes(content));
var chunk__22584_22589 = null;
var count__22585_22590 = (0);
var i__22586_22591 = (0);
while(true){
if((i__22586_22591 < count__22585_22590)){
var node_22592 = chunk__22584_22589.cljs$core$IIndexed$_nth$arity$2(null,i__22586_22591);
node_22592.innerHTML = value_22587;

var G__22593 = seq__22583_22588;
var G__22594 = chunk__22584_22589;
var G__22595 = count__22585_22590;
var G__22596 = (i__22586_22591 + (1));
seq__22583_22588 = G__22593;
chunk__22584_22589 = G__22594;
count__22585_22590 = G__22595;
i__22586_22591 = G__22596;
continue;
} else {
var temp__4657__auto___22597 = cljs.core.seq(seq__22583_22588);
if(temp__4657__auto___22597){
var seq__22583_22598__$1 = temp__4657__auto___22597;
if(cljs.core.chunked_seq_QMARK_(seq__22583_22598__$1)){
var c__7217__auto___22599 = cljs.core.chunk_first(seq__22583_22598__$1);
var G__22600 = cljs.core.chunk_rest(seq__22583_22598__$1);
var G__22601 = c__7217__auto___22599;
var G__22602 = cljs.core.count(c__7217__auto___22599);
var G__22603 = (0);
seq__22583_22588 = G__22600;
chunk__22584_22589 = G__22601;
count__22585_22590 = G__22602;
i__22586_22591 = G__22603;
continue;
} else {
var node_22604 = cljs.core.first(seq__22583_22598__$1);
node_22604.innerHTML = value_22587;

var G__22605 = cljs.core.next(seq__22583_22598__$1);
var G__22606 = null;
var G__22607 = (0);
var G__22608 = (0);
seq__22583_22588 = G__22605;
chunk__22584_22589 = G__22606;
count__22585_22590 = G__22607;
i__22586_22591 = G__22608;
continue;
}
} else {
}
}
break;
}
}catch (e22582){if((e22582 instanceof Error)){
var e_22609 = e22582;
domina.replace_children_BANG_(content,value_22587);
} else {
throw e22582;

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
var args22610 = [];
var len__7481__auto___22613 = arguments.length;
var i__7482__auto___22614 = (0);
while(true){
if((i__7482__auto___22614 < len__7481__auto___22613)){
args22610.push((arguments[i__7482__auto___22614]));

var G__22615 = (i__7482__auto___22614 + (1));
i__7482__auto___22614 = G__22615;
continue;
} else {
}
break;
}

var G__22612 = args22610.length;
switch (G__22612) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22610.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);
if(cljs.core.truth_((function (){var and__6394__auto__ = bubble;
if(cljs.core.truth_(and__6394__auto__)){
return (value == null);
} else {
return and__6394__auto__;
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
var m = (function (){var or__6406__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
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
var seq__22625_22631 = cljs.core.seq(children);
var chunk__22626_22632 = null;
var count__22627_22633 = (0);
var i__22628_22634 = (0);
while(true){
if((i__22628_22634 < count__22627_22633)){
var child_22635 = chunk__22626_22632.cljs$core$IIndexed$_nth$arity$2(null,i__22628_22634);
frag.appendChild(child_22635);

var G__22636 = seq__22625_22631;
var G__22637 = chunk__22626_22632;
var G__22638 = count__22627_22633;
var G__22639 = (i__22628_22634 + (1));
seq__22625_22631 = G__22636;
chunk__22626_22632 = G__22637;
count__22627_22633 = G__22638;
i__22628_22634 = G__22639;
continue;
} else {
var temp__4657__auto___22640 = cljs.core.seq(seq__22625_22631);
if(temp__4657__auto___22640){
var seq__22625_22641__$1 = temp__4657__auto___22640;
if(cljs.core.chunked_seq_QMARK_(seq__22625_22641__$1)){
var c__7217__auto___22642 = cljs.core.chunk_first(seq__22625_22641__$1);
var G__22643 = cljs.core.chunk_rest(seq__22625_22641__$1);
var G__22644 = c__7217__auto___22642;
var G__22645 = cljs.core.count(c__7217__auto___22642);
var G__22646 = (0);
seq__22625_22631 = G__22643;
chunk__22626_22632 = G__22644;
count__22627_22633 = G__22645;
i__22628_22634 = G__22646;
continue;
} else {
var child_22647 = cljs.core.first(seq__22625_22641__$1);
frag.appendChild(child_22647);

var G__22648 = cljs.core.next(seq__22625_22641__$1);
var G__22649 = null;
var G__22650 = (0);
var G__22651 = (0);
seq__22625_22631 = G__22648;
chunk__22626_22632 = G__22649;
count__22627_22633 = G__22650;
i__22628_22634 = G__22651;
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
var G__22629_22652 = cljs.core.first(parents);
var G__22630_22653 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22629_22652,G__22630_22653) : f.call(null,G__22629_22652,G__22630_22653));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__22617_SHARP_,p2__22618_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__22617_SHARP_,p2__22618_SHARP_) : f.call(null,p1__22617_SHARP_,p2__22618_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args22654 = [];
var len__7481__auto___22657 = arguments.length;
var i__7482__auto___22658 = (0);
while(true){
if((i__7482__auto___22658 < len__7481__auto___22657)){
args22654.push((arguments[i__7482__auto___22658]));

var G__22659 = (i__7482__auto___22658 + (1));
i__7482__auto___22658 = G__22659;
continue;
} else {
}
break;
}

var G__22656 = args22654.length;
switch (G__22656) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22654.length)].join('')));

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
var args22661 = [];
var len__7481__auto___22664 = arguments.length;
var i__7482__auto___22665 = (0);
while(true){
if((i__7482__auto___22665 < len__7481__auto___22664)){
args22661.push((arguments[i__7482__auto___22665]));

var G__22666 = (i__7482__auto___22665 + (1));
i__7482__auto___22665 = G__22666;
continue;
} else {
}
break;
}

var G__22663 = args22661.length;
switch (G__22663) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22661.length)].join('')));

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
var and__6394__auto__ = obj;
if(cljs.core.truth_(and__6394__auto__)){
var and__6394__auto____$1 = cljs.core.not(obj.nodeName);
if(and__6394__auto____$1){
return obj.length;
} else {
return and__6394__auto____$1;
}
} else {
return and__6394__auto__;
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
