// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('domina');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var opt_wrapper_26120 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_26121 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_26122 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.cst$kw$default,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_26122,opt_wrapper_26120,table_section_wrapper_26121,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_26120,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_26121,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_26121,cell_wrapper_26122,table_section_wrapper_26121,table_section_wrapper_26121]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__9414__auto__ = div.firstChild;
if(cljs.core.truth_(and__9414__auto__)){
return div.firstChild.childNodes;
} else {
return and__9414__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__26127 = cljs.core.seq(tbody);
var chunk__26128 = null;
var count__26129 = (0);
var i__26130 = (0);
while(true){
if((i__26130 < count__26129)){
var child = chunk__26128.cljs$core$IIndexed$_nth$arity$2(null,i__26130);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__26131 = seq__26127;
var G__26132 = chunk__26128;
var G__26133 = count__26129;
var G__26134 = (i__26130 + (1));
seq__26127 = G__26131;
chunk__26128 = G__26132;
count__26129 = G__26133;
i__26130 = G__26134;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__26127);
if(temp__6738__auto__){
var seq__26127__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26127__$1)){
var c__10337__auto__ = cljs.core.chunk_first(seq__26127__$1);
var G__26135 = cljs.core.chunk_rest(seq__26127__$1);
var G__26136 = c__10337__auto__;
var G__26137 = cljs.core.count(c__10337__auto__);
var G__26138 = (0);
seq__26127 = G__26135;
chunk__26128 = G__26136;
count__26129 = G__26137;
i__26130 = G__26138;
continue;
} else {
var child = cljs.core.first(seq__26127__$1);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__26139 = cljs.core.next(seq__26127__$1);
var G__26140 = null;
var G__26141 = (0);
var G__26142 = (0);
seq__26127 = G__26139;
chunk__26128 = G__26140;
count__26129 = G__26141;
i__26130 = G__26142;
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
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__26146 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26146,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26146,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26146,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__26149 = wrapper.lastChild;
var G__26150 = (level - (1));
wrapper = G__26149;
level = G__26150;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__9414__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__9414__auto__){
return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else {
return and__9414__auto__;
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
var x__10144__auto__ = (((content == null))?null:content);
var m__10145__auto__ = (domina.nodes[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$1(content) : m__10145__auto__.call(null,content));
} else {
var m__10145__auto____$1 = (domina.nodes["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1(content) : m__10145__auto____$1.call(null,content));
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
var x__10144__auto__ = (((nodeseq == null))?null:nodeseq);
var m__10145__auto__ = (domina.single_node[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__10145__auto__.call(null,nodeseq));
} else {
var m__10145__auto____$1 = (domina.single_node["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__10145__auto____$1.call(null,nodeseq));
} else {
throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__10654__auto__ = [];
var len__10647__auto___26152 = arguments.length;
var i__10648__auto___26153 = (0);
while(true){
if((i__10648__auto___26153 < len__10647__auto___26152)){
args__10654__auto__.push((arguments[i__10648__auto___26153]));

var G__26154 = (i__10648__auto___26153 + (1));
i__10648__auto___26153 = G__26154;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined)))){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq26151){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26151));
});

domina.log = (function domina$log(var_args){
var args__10654__auto__ = [];
var len__10647__auto___26156 = arguments.length;
var i__10648__auto___26157 = (0);
while(true){
if((i__10648__auto___26157 < len__10647__auto___26156)){
args__10654__auto__.push((arguments[i__10648__auto___26157]));

var G__26158 = (i__10648__auto___26157 + (1));
i__10648__auto___26157 = G__26158;
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
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq26155){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26155));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
var G__26160 = cljs.core.name(id);
return goog.dom.getElement(G__26160);
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
var G__26163 = (function (){var G__26164 = cljs.core.name(class_name);
return goog.dom.getElementsByClass(G__26164);
})();
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__26163) : domina.normalize_seq.call(null,G__26163));
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
var args__10654__auto__ = [];
var len__10647__auto___26166 = arguments.length;
var i__10648__auto___26167 = (0);
while(true){
if((i__10648__auto___26167 < len__10647__auto___26166)){
args__10654__auto__.push((arguments[i__10648__auto___26167]));

var G__26168 = (i__10648__auto___26167 + (1));
i__10648__auto___26167 = G__26168;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq26165){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26165));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26169_SHARP_){
return p1__26169_SHARP_.cloneNode(true);
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
var G__26175_26178 = (function (p1__26170_SHARP_,p2__26171_SHARP_){
return goog.dom.insertChildAt(p1__26170_SHARP_,p2__26171_SHARP_,idx);
});
var G__26176_26179 = parent_content;
var G__26177_26180 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26175_26178,G__26176_26179,G__26177_26180) : domina.apply_with_cloning.call(null,G__26175_26178,G__26176_26179,G__26177_26180));

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
var G__26186_26189 = (function (p1__26182_SHARP_,p2__26181_SHARP_){
return goog.dom.insertSiblingBefore(p2__26181_SHARP_,p1__26182_SHARP_);
});
var G__26187_26190 = content;
var G__26188_26191 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26186_26189,G__26187_26190,G__26188_26191) : domina.apply_with_cloning.call(null,G__26186_26189,G__26187_26190,G__26188_26191));

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
var G__26197_26200 = (function (p1__26193_SHARP_,p2__26192_SHARP_){
return goog.dom.insertSiblingAfter(p2__26192_SHARP_,p1__26193_SHARP_);
});
var G__26198_26201 = content;
var G__26199_26202 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26197_26200,G__26198_26201,G__26199_26202) : domina.apply_with_cloning.call(null,G__26197_26200,G__26198_26201,G__26199_26202));

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
var G__26208_26211 = (function (p1__26204_SHARP_,p2__26203_SHARP_){
return goog.dom.replaceNode(p2__26203_SHARP_,p1__26204_SHARP_);
});
var G__26209_26212 = old_content;
var G__26210_26213 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26208_26211,G__26209_26212,G__26210_26213) : domina.apply_with_cloning.call(null,G__26208_26211,G__26209_26212,G__26210_26213));

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
var s = (function (){var G__26216 = domina.single_node(content);
var G__26217 = cljs.core.name(name);
return goog.style.getStyle(G__26216,G__26217);
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
var args__10654__auto__ = [];
var len__10647__auto___26231 = arguments.length;
var i__10648__auto___26232 = (0);
while(true){
if((i__10648__auto___26232 < len__10647__auto___26231)){
args__10654__auto__.push((arguments[i__10648__auto___26232]));

var G__26233 = (i__10648__auto___26232 + (1));
i__10648__auto___26232 = G__26233;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((2) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10655__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__26221_26234 = cljs.core.seq(domina.nodes(content));
var chunk__26222_26235 = null;
var count__26223_26236 = (0);
var i__26224_26237 = (0);
while(true){
if((i__26224_26237 < count__26223_26236)){
var n_26238 = chunk__26222_26235.cljs$core$IIndexed$_nth$arity$2(null,i__26224_26237);
var G__26225_26239 = n_26238;
var G__26226_26240 = cljs.core.name(name);
var G__26227_26241 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__26225_26239,G__26226_26240,G__26227_26241);

var G__26242 = seq__26221_26234;
var G__26243 = chunk__26222_26235;
var G__26244 = count__26223_26236;
var G__26245 = (i__26224_26237 + (1));
seq__26221_26234 = G__26242;
chunk__26222_26235 = G__26243;
count__26223_26236 = G__26244;
i__26224_26237 = G__26245;
continue;
} else {
var temp__6738__auto___26246 = cljs.core.seq(seq__26221_26234);
if(temp__6738__auto___26246){
var seq__26221_26247__$1 = temp__6738__auto___26246;
if(cljs.core.chunked_seq_QMARK_(seq__26221_26247__$1)){
var c__10337__auto___26248 = cljs.core.chunk_first(seq__26221_26247__$1);
var G__26249 = cljs.core.chunk_rest(seq__26221_26247__$1);
var G__26250 = c__10337__auto___26248;
var G__26251 = cljs.core.count(c__10337__auto___26248);
var G__26252 = (0);
seq__26221_26234 = G__26249;
chunk__26222_26235 = G__26250;
count__26223_26236 = G__26251;
i__26224_26237 = G__26252;
continue;
} else {
var n_26253 = cljs.core.first(seq__26221_26247__$1);
var G__26228_26254 = n_26253;
var G__26229_26255 = cljs.core.name(name);
var G__26230_26256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__26228_26254,G__26229_26255,G__26230_26256);

var G__26257 = cljs.core.next(seq__26221_26247__$1);
var G__26258 = null;
var G__26259 = (0);
var G__26260 = (0);
seq__26221_26234 = G__26257;
chunk__26222_26235 = G__26258;
count__26223_26236 = G__26259;
i__26224_26237 = G__26260;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq26218){
var G__26219 = cljs.core.first(seq26218);
var seq26218__$1 = cljs.core.next(seq26218);
var G__26220 = cljs.core.first(seq26218__$1);
var seq26218__$2 = cljs.core.next(seq26218__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26219,G__26220,seq26218__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__10654__auto__ = [];
var len__10647__auto___26268 = arguments.length;
var i__10648__auto___26269 = (0);
while(true){
if((i__10648__auto___26269 < len__10647__auto___26268)){
args__10654__auto__.push((arguments[i__10648__auto___26269]));

var G__26270 = (i__10648__auto___26269 + (1));
i__10648__auto___26269 = G__26270;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((2) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10655__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__26264_26271 = cljs.core.seq(domina.nodes(content));
var chunk__26265_26272 = null;
var count__26266_26273 = (0);
var i__26267_26274 = (0);
while(true){
if((i__26267_26274 < count__26266_26273)){
var n_26275 = chunk__26265_26272.cljs$core$IIndexed$_nth$arity$2(null,i__26267_26274);
n_26275.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__26276 = seq__26264_26271;
var G__26277 = chunk__26265_26272;
var G__26278 = count__26266_26273;
var G__26279 = (i__26267_26274 + (1));
seq__26264_26271 = G__26276;
chunk__26265_26272 = G__26277;
count__26266_26273 = G__26278;
i__26267_26274 = G__26279;
continue;
} else {
var temp__6738__auto___26280 = cljs.core.seq(seq__26264_26271);
if(temp__6738__auto___26280){
var seq__26264_26281__$1 = temp__6738__auto___26280;
if(cljs.core.chunked_seq_QMARK_(seq__26264_26281__$1)){
var c__10337__auto___26282 = cljs.core.chunk_first(seq__26264_26281__$1);
var G__26283 = cljs.core.chunk_rest(seq__26264_26281__$1);
var G__26284 = c__10337__auto___26282;
var G__26285 = cljs.core.count(c__10337__auto___26282);
var G__26286 = (0);
seq__26264_26271 = G__26283;
chunk__26265_26272 = G__26284;
count__26266_26273 = G__26285;
i__26267_26274 = G__26286;
continue;
} else {
var n_26287 = cljs.core.first(seq__26264_26281__$1);
n_26287.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__26288 = cljs.core.next(seq__26264_26281__$1);
var G__26289 = null;
var G__26290 = (0);
var G__26291 = (0);
seq__26264_26271 = G__26288;
chunk__26265_26272 = G__26289;
count__26266_26273 = G__26290;
i__26267_26274 = G__26291;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq26261){
var G__26262 = cljs.core.first(seq26261);
var seq26261__$1 = cljs.core.next(seq26261);
var G__26263 = cljs.core.first(seq26261__$1);
var seq26261__$2 = cljs.core.next(seq26261__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26262,G__26263,seq26261__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__26296_26300 = cljs.core.seq(domina.nodes(content));
var chunk__26297_26301 = null;
var count__26298_26302 = (0);
var i__26299_26303 = (0);
while(true){
if((i__26299_26303 < count__26298_26302)){
var n_26304 = chunk__26297_26301.cljs$core$IIndexed$_nth$arity$2(null,i__26299_26303);
n_26304.removeAttribute(cljs.core.name(name));

var G__26305 = seq__26296_26300;
var G__26306 = chunk__26297_26301;
var G__26307 = count__26298_26302;
var G__26308 = (i__26299_26303 + (1));
seq__26296_26300 = G__26305;
chunk__26297_26301 = G__26306;
count__26298_26302 = G__26307;
i__26299_26303 = G__26308;
continue;
} else {
var temp__6738__auto___26309 = cljs.core.seq(seq__26296_26300);
if(temp__6738__auto___26309){
var seq__26296_26310__$1 = temp__6738__auto___26309;
if(cljs.core.chunked_seq_QMARK_(seq__26296_26310__$1)){
var c__10337__auto___26311 = cljs.core.chunk_first(seq__26296_26310__$1);
var G__26312 = cljs.core.chunk_rest(seq__26296_26310__$1);
var G__26313 = c__10337__auto___26311;
var G__26314 = cljs.core.count(c__10337__auto___26311);
var G__26315 = (0);
seq__26296_26300 = G__26312;
chunk__26297_26301 = G__26313;
count__26298_26302 = G__26314;
i__26299_26303 = G__26315;
continue;
} else {
var n_26316 = cljs.core.first(seq__26296_26310__$1);
n_26316.removeAttribute(cljs.core.name(name));

var G__26317 = cljs.core.next(seq__26296_26310__$1);
var G__26318 = null;
var G__26319 = (0);
var G__26320 = (0);
seq__26296_26300 = G__26317;
chunk__26297_26301 = G__26318;
count__26298_26302 = G__26319;
i__26299_26303 = G__26320;
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
var vec__26324 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26324,(1),null);
if(cljs.core.truth_((function (){var and__9414__auto__ = k;
if(cljs.core.truth_(and__9414__auto__)){
return v;
} else {
return and__9414__auto__;
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
var attrs = node.attributes;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs){
return (function (p1__26327_SHARP_){
var attr = attrs.item(p1__26327_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__26338_26348 = cljs.core.seq(styles);
var chunk__26339_26349 = null;
var count__26340_26350 = (0);
var i__26341_26351 = (0);
while(true){
if((i__26341_26351 < count__26340_26350)){
var vec__26342_26352 = chunk__26339_26349.cljs$core$IIndexed$_nth$arity$2(null,i__26341_26351);
var name_26353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26342_26352,(0),null);
var value_26354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26342_26352,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26353,cljs.core.array_seq([value_26354], 0));

var G__26355 = seq__26338_26348;
var G__26356 = chunk__26339_26349;
var G__26357 = count__26340_26350;
var G__26358 = (i__26341_26351 + (1));
seq__26338_26348 = G__26355;
chunk__26339_26349 = G__26356;
count__26340_26350 = G__26357;
i__26341_26351 = G__26358;
continue;
} else {
var temp__6738__auto___26359 = cljs.core.seq(seq__26338_26348);
if(temp__6738__auto___26359){
var seq__26338_26360__$1 = temp__6738__auto___26359;
if(cljs.core.chunked_seq_QMARK_(seq__26338_26360__$1)){
var c__10337__auto___26361 = cljs.core.chunk_first(seq__26338_26360__$1);
var G__26362 = cljs.core.chunk_rest(seq__26338_26360__$1);
var G__26363 = c__10337__auto___26361;
var G__26364 = cljs.core.count(c__10337__auto___26361);
var G__26365 = (0);
seq__26338_26348 = G__26362;
chunk__26339_26349 = G__26363;
count__26340_26350 = G__26364;
i__26341_26351 = G__26365;
continue;
} else {
var vec__26345_26366 = cljs.core.first(seq__26338_26360__$1);
var name_26367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26345_26366,(0),null);
var value_26368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26345_26366,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26367,cljs.core.array_seq([value_26368], 0));

var G__26369 = cljs.core.next(seq__26338_26360__$1);
var G__26370 = null;
var G__26371 = (0);
var G__26372 = (0);
seq__26338_26348 = G__26369;
chunk__26339_26349 = G__26370;
count__26340_26350 = G__26371;
i__26341_26351 = G__26372;
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
var seq__26383_26393 = cljs.core.seq(attrs);
var chunk__26384_26394 = null;
var count__26385_26395 = (0);
var i__26386_26396 = (0);
while(true){
if((i__26386_26396 < count__26385_26395)){
var vec__26387_26397 = chunk__26384_26394.cljs$core$IIndexed$_nth$arity$2(null,i__26386_26396);
var name_26398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387_26397,(0),null);
var value_26399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387_26397,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26398,cljs.core.array_seq([value_26399], 0));

var G__26400 = seq__26383_26393;
var G__26401 = chunk__26384_26394;
var G__26402 = count__26385_26395;
var G__26403 = (i__26386_26396 + (1));
seq__26383_26393 = G__26400;
chunk__26384_26394 = G__26401;
count__26385_26395 = G__26402;
i__26386_26396 = G__26403;
continue;
} else {
var temp__6738__auto___26404 = cljs.core.seq(seq__26383_26393);
if(temp__6738__auto___26404){
var seq__26383_26405__$1 = temp__6738__auto___26404;
if(cljs.core.chunked_seq_QMARK_(seq__26383_26405__$1)){
var c__10337__auto___26406 = cljs.core.chunk_first(seq__26383_26405__$1);
var G__26407 = cljs.core.chunk_rest(seq__26383_26405__$1);
var G__26408 = c__10337__auto___26406;
var G__26409 = cljs.core.count(c__10337__auto___26406);
var G__26410 = (0);
seq__26383_26393 = G__26407;
chunk__26384_26394 = G__26408;
count__26385_26395 = G__26409;
i__26386_26396 = G__26410;
continue;
} else {
var vec__26390_26411 = cljs.core.first(seq__26383_26405__$1);
var name_26412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390_26411,(0),null);
var value_26413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390_26411,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26412,cljs.core.array_seq([value_26413], 0));

var G__26414 = cljs.core.next(seq__26383_26405__$1);
var G__26415 = null;
var G__26416 = (0);
var G__26417 = (0);
seq__26383_26393 = G__26414;
chunk__26384_26394 = G__26415;
count__26385_26395 = G__26416;
i__26386_26396 = G__26417;
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
var G__26420 = domina.single_node(content);
var G__26421 = class$;
return goog.dom.classes.has(G__26420,G__26421);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__26426_26430 = cljs.core.seq(domina.nodes(content));
var chunk__26427_26431 = null;
var count__26428_26432 = (0);
var i__26429_26433 = (0);
while(true){
if((i__26429_26433 < count__26428_26432)){
var node_26434 = chunk__26427_26431.cljs$core$IIndexed$_nth$arity$2(null,i__26429_26433);
goog.dom.classes.add(node_26434,class$);

var G__26435 = seq__26426_26430;
var G__26436 = chunk__26427_26431;
var G__26437 = count__26428_26432;
var G__26438 = (i__26429_26433 + (1));
seq__26426_26430 = G__26435;
chunk__26427_26431 = G__26436;
count__26428_26432 = G__26437;
i__26429_26433 = G__26438;
continue;
} else {
var temp__6738__auto___26439 = cljs.core.seq(seq__26426_26430);
if(temp__6738__auto___26439){
var seq__26426_26440__$1 = temp__6738__auto___26439;
if(cljs.core.chunked_seq_QMARK_(seq__26426_26440__$1)){
var c__10337__auto___26441 = cljs.core.chunk_first(seq__26426_26440__$1);
var G__26442 = cljs.core.chunk_rest(seq__26426_26440__$1);
var G__26443 = c__10337__auto___26441;
var G__26444 = cljs.core.count(c__10337__auto___26441);
var G__26445 = (0);
seq__26426_26430 = G__26442;
chunk__26427_26431 = G__26443;
count__26428_26432 = G__26444;
i__26429_26433 = G__26445;
continue;
} else {
var node_26446 = cljs.core.first(seq__26426_26440__$1);
goog.dom.classes.add(node_26446,class$);

var G__26447 = cljs.core.next(seq__26426_26440__$1);
var G__26448 = null;
var G__26449 = (0);
var G__26450 = (0);
seq__26426_26430 = G__26447;
chunk__26427_26431 = G__26448;
count__26428_26432 = G__26449;
i__26429_26433 = G__26450;
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
var seq__26455_26459 = cljs.core.seq(domina.nodes(content));
var chunk__26456_26460 = null;
var count__26457_26461 = (0);
var i__26458_26462 = (0);
while(true){
if((i__26458_26462 < count__26457_26461)){
var node_26463 = chunk__26456_26460.cljs$core$IIndexed$_nth$arity$2(null,i__26458_26462);
goog.dom.classes.remove(node_26463,class$);

var G__26464 = seq__26455_26459;
var G__26465 = chunk__26456_26460;
var G__26466 = count__26457_26461;
var G__26467 = (i__26458_26462 + (1));
seq__26455_26459 = G__26464;
chunk__26456_26460 = G__26465;
count__26457_26461 = G__26466;
i__26458_26462 = G__26467;
continue;
} else {
var temp__6738__auto___26468 = cljs.core.seq(seq__26455_26459);
if(temp__6738__auto___26468){
var seq__26455_26469__$1 = temp__6738__auto___26468;
if(cljs.core.chunked_seq_QMARK_(seq__26455_26469__$1)){
var c__10337__auto___26470 = cljs.core.chunk_first(seq__26455_26469__$1);
var G__26471 = cljs.core.chunk_rest(seq__26455_26469__$1);
var G__26472 = c__10337__auto___26470;
var G__26473 = cljs.core.count(c__10337__auto___26470);
var G__26474 = (0);
seq__26455_26459 = G__26471;
chunk__26456_26460 = G__26472;
count__26457_26461 = G__26473;
i__26458_26462 = G__26474;
continue;
} else {
var node_26475 = cljs.core.first(seq__26455_26469__$1);
goog.dom.classes.remove(node_26475,class$);

var G__26476 = cljs.core.next(seq__26455_26469__$1);
var G__26477 = null;
var G__26478 = (0);
var G__26479 = (0);
seq__26455_26459 = G__26476;
chunk__26456_26460 = G__26477;
count__26457_26461 = G__26478;
i__26458_26462 = G__26479;
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
var seq__26484_26488 = cljs.core.seq(domina.nodes(content));
var chunk__26485_26489 = null;
var count__26486_26490 = (0);
var i__26487_26491 = (0);
while(true){
if((i__26487_26491 < count__26486_26490)){
var node_26492 = chunk__26485_26489.cljs$core$IIndexed$_nth$arity$2(null,i__26487_26491);
goog.dom.classes.toggle(node_26492,class$);

var G__26493 = seq__26484_26488;
var G__26494 = chunk__26485_26489;
var G__26495 = count__26486_26490;
var G__26496 = (i__26487_26491 + (1));
seq__26484_26488 = G__26493;
chunk__26485_26489 = G__26494;
count__26486_26490 = G__26495;
i__26487_26491 = G__26496;
continue;
} else {
var temp__6738__auto___26497 = cljs.core.seq(seq__26484_26488);
if(temp__6738__auto___26497){
var seq__26484_26498__$1 = temp__6738__auto___26497;
if(cljs.core.chunked_seq_QMARK_(seq__26484_26498__$1)){
var c__10337__auto___26499 = cljs.core.chunk_first(seq__26484_26498__$1);
var G__26500 = cljs.core.chunk_rest(seq__26484_26498__$1);
var G__26501 = c__10337__auto___26499;
var G__26502 = cljs.core.count(c__10337__auto___26499);
var G__26503 = (0);
seq__26484_26488 = G__26500;
chunk__26485_26489 = G__26501;
count__26486_26490 = G__26502;
i__26487_26491 = G__26503;
continue;
} else {
var node_26504 = cljs.core.first(seq__26484_26498__$1);
goog.dom.classes.toggle(node_26504,class$);

var G__26505 = cljs.core.next(seq__26484_26498__$1);
var G__26506 = null;
var G__26507 = (0);
var G__26508 = (0);
seq__26484_26488 = G__26505;
chunk__26485_26489 = G__26506;
count__26486_26490 = G__26507;
i__26487_26491 = G__26508;
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
return cljs.core.seq((function (){var G__26510 = domina.single_node(content);
return goog.dom.classes.get(G__26510);
})());
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_26519__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__26515_26520 = cljs.core.seq(domina.nodes(content));
var chunk__26516_26521 = null;
var count__26517_26522 = (0);
var i__26518_26523 = (0);
while(true){
if((i__26518_26523 < count__26517_26522)){
var node_26524 = chunk__26516_26521.cljs$core$IIndexed$_nth$arity$2(null,i__26518_26523);
goog.dom.classes.set(node_26524,classes_26519__$1);

var G__26525 = seq__26515_26520;
var G__26526 = chunk__26516_26521;
var G__26527 = count__26517_26522;
var G__26528 = (i__26518_26523 + (1));
seq__26515_26520 = G__26525;
chunk__26516_26521 = G__26526;
count__26517_26522 = G__26527;
i__26518_26523 = G__26528;
continue;
} else {
var temp__6738__auto___26529 = cljs.core.seq(seq__26515_26520);
if(temp__6738__auto___26529){
var seq__26515_26530__$1 = temp__6738__auto___26529;
if(cljs.core.chunked_seq_QMARK_(seq__26515_26530__$1)){
var c__10337__auto___26531 = cljs.core.chunk_first(seq__26515_26530__$1);
var G__26532 = cljs.core.chunk_rest(seq__26515_26530__$1);
var G__26533 = c__10337__auto___26531;
var G__26534 = cljs.core.count(c__10337__auto___26531);
var G__26535 = (0);
seq__26515_26520 = G__26532;
chunk__26516_26521 = G__26533;
count__26517_26522 = G__26534;
i__26518_26523 = G__26535;
continue;
} else {
var node_26536 = cljs.core.first(seq__26515_26530__$1);
goog.dom.classes.set(node_26536,classes_26519__$1);

var G__26537 = cljs.core.next(seq__26515_26530__$1);
var G__26538 = null;
var G__26539 = (0);
var G__26540 = (0);
seq__26515_26520 = G__26537;
chunk__26516_26521 = G__26538;
count__26517_26522 = G__26539;
i__26518_26523 = G__26540;
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
var G__26543 = (function (){var G__26544 = domina.single_node(content);
return goog.dom.getTextContent(G__26544);
})();
return goog.string.trim(G__26543);
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__26549_26553 = cljs.core.seq(domina.nodes(content));
var chunk__26550_26554 = null;
var count__26551_26555 = (0);
var i__26552_26556 = (0);
while(true){
if((i__26552_26556 < count__26551_26555)){
var node_26557 = chunk__26550_26554.cljs$core$IIndexed$_nth$arity$2(null,i__26552_26556);
goog.dom.setTextContent(node_26557,value);

var G__26558 = seq__26549_26553;
var G__26559 = chunk__26550_26554;
var G__26560 = count__26551_26555;
var G__26561 = (i__26552_26556 + (1));
seq__26549_26553 = G__26558;
chunk__26550_26554 = G__26559;
count__26551_26555 = G__26560;
i__26552_26556 = G__26561;
continue;
} else {
var temp__6738__auto___26562 = cljs.core.seq(seq__26549_26553);
if(temp__6738__auto___26562){
var seq__26549_26563__$1 = temp__6738__auto___26562;
if(cljs.core.chunked_seq_QMARK_(seq__26549_26563__$1)){
var c__10337__auto___26564 = cljs.core.chunk_first(seq__26549_26563__$1);
var G__26565 = cljs.core.chunk_rest(seq__26549_26563__$1);
var G__26566 = c__10337__auto___26564;
var G__26567 = cljs.core.count(c__10337__auto___26564);
var G__26568 = (0);
seq__26549_26553 = G__26565;
chunk__26550_26554 = G__26566;
count__26551_26555 = G__26567;
i__26552_26556 = G__26568;
continue;
} else {
var node_26569 = cljs.core.first(seq__26549_26563__$1);
goog.dom.setTextContent(node_26569,value);

var G__26570 = cljs.core.next(seq__26549_26563__$1);
var G__26571 = null;
var G__26572 = (0);
var G__26573 = (0);
seq__26549_26553 = G__26570;
chunk__26550_26554 = G__26571;
count__26551_26555 = G__26572;
i__26552_26556 = G__26573;
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
var G__26575 = domina.single_node(content);
return goog.dom.forms.getValue(G__26575);
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__26580_26584 = cljs.core.seq(domina.nodes(content));
var chunk__26581_26585 = null;
var count__26582_26586 = (0);
var i__26583_26587 = (0);
while(true){
if((i__26583_26587 < count__26582_26586)){
var node_26588 = chunk__26581_26585.cljs$core$IIndexed$_nth$arity$2(null,i__26583_26587);
goog.dom.forms.setValue(node_26588,value);

var G__26589 = seq__26580_26584;
var G__26590 = chunk__26581_26585;
var G__26591 = count__26582_26586;
var G__26592 = (i__26583_26587 + (1));
seq__26580_26584 = G__26589;
chunk__26581_26585 = G__26590;
count__26582_26586 = G__26591;
i__26583_26587 = G__26592;
continue;
} else {
var temp__6738__auto___26593 = cljs.core.seq(seq__26580_26584);
if(temp__6738__auto___26593){
var seq__26580_26594__$1 = temp__6738__auto___26593;
if(cljs.core.chunked_seq_QMARK_(seq__26580_26594__$1)){
var c__10337__auto___26595 = cljs.core.chunk_first(seq__26580_26594__$1);
var G__26596 = cljs.core.chunk_rest(seq__26580_26594__$1);
var G__26597 = c__10337__auto___26595;
var G__26598 = cljs.core.count(c__10337__auto___26595);
var G__26599 = (0);
seq__26580_26584 = G__26596;
chunk__26581_26585 = G__26597;
count__26582_26586 = G__26598;
i__26583_26587 = G__26599;
continue;
} else {
var node_26600 = cljs.core.first(seq__26580_26594__$1);
goog.dom.forms.setValue(node_26600,value);

var G__26601 = cljs.core.next(seq__26580_26594__$1);
var G__26602 = null;
var G__26603 = (0);
var G__26604 = (0);
seq__26580_26584 = G__26601;
chunk__26581_26585 = G__26602;
count__26582_26586 = G__26603;
i__26583_26587 = G__26604;
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
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);
if((allows_inner_html_QMARK_) && ((domina.support.leading_whitespace_QMARK_) || (cljs.core.not(leading_whitespace_QMARK_))) && (!(special_tag_QMARK_))){
var value_26615 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__26611_26616 = cljs.core.seq(domina.nodes(content));
var chunk__26612_26617 = null;
var count__26613_26618 = (0);
var i__26614_26619 = (0);
while(true){
if((i__26614_26619 < count__26613_26618)){
var node_26620 = chunk__26612_26617.cljs$core$IIndexed$_nth$arity$2(null,i__26614_26619);
node_26620.innerHTML = value_26615;

var G__26621 = seq__26611_26616;
var G__26622 = chunk__26612_26617;
var G__26623 = count__26613_26618;
var G__26624 = (i__26614_26619 + (1));
seq__26611_26616 = G__26621;
chunk__26612_26617 = G__26622;
count__26613_26618 = G__26623;
i__26614_26619 = G__26624;
continue;
} else {
var temp__6738__auto___26625 = cljs.core.seq(seq__26611_26616);
if(temp__6738__auto___26625){
var seq__26611_26626__$1 = temp__6738__auto___26625;
if(cljs.core.chunked_seq_QMARK_(seq__26611_26626__$1)){
var c__10337__auto___26627 = cljs.core.chunk_first(seq__26611_26626__$1);
var G__26628 = cljs.core.chunk_rest(seq__26611_26626__$1);
var G__26629 = c__10337__auto___26627;
var G__26630 = cljs.core.count(c__10337__auto___26627);
var G__26631 = (0);
seq__26611_26616 = G__26628;
chunk__26612_26617 = G__26629;
count__26613_26618 = G__26630;
i__26614_26619 = G__26631;
continue;
} else {
var node_26632 = cljs.core.first(seq__26611_26626__$1);
node_26632.innerHTML = value_26615;

var G__26633 = cljs.core.next(seq__26611_26626__$1);
var G__26634 = null;
var G__26635 = (0);
var G__26636 = (0);
seq__26611_26616 = G__26633;
chunk__26612_26617 = G__26634;
count__26613_26618 = G__26635;
i__26614_26619 = G__26636;
continue;
}
} else {
}
}
break;
}
}catch (e26610){if((e26610 instanceof Error)){
var e_26637 = e26610;
domina.replace_children_BANG_(content,value_26615);
} else {
throw e26610;

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
var args26638 = [];
var len__10647__auto___26641 = arguments.length;
var i__10648__auto___26642 = (0);
while(true){
if((i__10648__auto___26642 < len__10647__auto___26641)){
args26638.push((arguments[i__10648__auto___26642]));

var G__26643 = (i__10648__auto___26642 + (1));
i__10648__auto___26642 = G__26643;
continue;
} else {
}
break;
}

var G__26640 = args26638.length;
switch (G__26640) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26638.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);
if(cljs.core.truth_((function (){var and__9414__auto__ = bubble;
if(cljs.core.truth_(and__9414__auto__)){
return (value == null);
} else {
return and__9414__auto__;
}
})())){
var temp__6738__auto__ = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__6738__auto__)){
var parent = temp__6738__auto__;
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
var m = (function (){var or__9426__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
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
var seq__26653_26659 = cljs.core.seq(children);
var chunk__26654_26660 = null;
var count__26655_26661 = (0);
var i__26656_26662 = (0);
while(true){
if((i__26656_26662 < count__26655_26661)){
var child_26663 = chunk__26654_26660.cljs$core$IIndexed$_nth$arity$2(null,i__26656_26662);
frag.appendChild(child_26663);

var G__26664 = seq__26653_26659;
var G__26665 = chunk__26654_26660;
var G__26666 = count__26655_26661;
var G__26667 = (i__26656_26662 + (1));
seq__26653_26659 = G__26664;
chunk__26654_26660 = G__26665;
count__26655_26661 = G__26666;
i__26656_26662 = G__26667;
continue;
} else {
var temp__6738__auto___26668 = cljs.core.seq(seq__26653_26659);
if(temp__6738__auto___26668){
var seq__26653_26669__$1 = temp__6738__auto___26668;
if(cljs.core.chunked_seq_QMARK_(seq__26653_26669__$1)){
var c__10337__auto___26670 = cljs.core.chunk_first(seq__26653_26669__$1);
var G__26671 = cljs.core.chunk_rest(seq__26653_26669__$1);
var G__26672 = c__10337__auto___26670;
var G__26673 = cljs.core.count(c__10337__auto___26670);
var G__26674 = (0);
seq__26653_26659 = G__26671;
chunk__26654_26660 = G__26672;
count__26655_26661 = G__26673;
i__26656_26662 = G__26674;
continue;
} else {
var child_26675 = cljs.core.first(seq__26653_26669__$1);
frag.appendChild(child_26675);

var G__26676 = cljs.core.next(seq__26653_26669__$1);
var G__26677 = null;
var G__26678 = (0);
var G__26679 = (0);
seq__26653_26659 = G__26676;
chunk__26654_26660 = G__26677;
count__26655_26661 = G__26678;
i__26656_26662 = G__26679;
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
var G__26657_26680 = cljs.core.first(parents);
var G__26658_26681 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26657_26680,G__26658_26681) : f.call(null,G__26657_26680,G__26658_26681));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__26645_SHARP_,p2__26646_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26645_SHARP_,p2__26646_SHARP_) : f.call(null,p1__26645_SHARP_,p2__26646_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args26682 = [];
var len__10647__auto___26685 = arguments.length;
var i__10648__auto___26686 = (0);
while(true){
if((i__10648__auto___26686 < len__10647__auto___26685)){
args26682.push((arguments[i__10648__auto___26686]));

var G__26687 = (i__10648__auto___26686 + (1));
i__10648__auto___26686 = G__26687;
continue;
} else {
}
break;
}

var G__26684 = args26682.length;
switch (G__26684) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26682.length)].join('')));

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
var args26689 = [];
var len__10647__auto___26692 = arguments.length;
var i__10648__auto___26693 = (0);
while(true){
if((i__10648__auto___26693 < len__10647__auto___26692)){
args26689.push((arguments[i__10648__auto___26693]));

var G__26694 = (i__10648__auto___26693 + (1));
i__10648__auto___26693 = G__26694;
continue;
} else {
}
break;
}

var G__26691 = args26689.length;
switch (G__26691) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26689.length)].join('')));

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
var and__9414__auto__ = obj;
if(cljs.core.truth_(and__9414__auto__)){
var and__9414__auto____$1 = cljs.core.not(obj.nodeName);
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
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$)))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,list_thing))){
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
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content))){
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
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content))){
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist(coll__$1);
});
} else {
}
