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
var opt_wrapper_34892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_34893 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_34894 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_34894,opt_wrapper_34892,table_section_wrapper_34893,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_34892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_34893,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_34893,cell_wrapper_34894,table_section_wrapper_34893,table_section_wrapper_34893]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__24748__auto__ = div.firstChild;
if(cljs.core.truth_(and__24748__auto__)){
return div.firstChild.childNodes;
} else {
return and__24748__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__34899 = cljs.core.seq.call(null,tbody);
var chunk__34900 = null;
var count__34901 = (0);
var i__34902 = (0);
while(true){
if((i__34902 < count__34901)){
var child = cljs.core._nth.call(null,chunk__34900,i__34902);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__34903 = seq__34899;
var G__34904 = chunk__34900;
var G__34905 = count__34901;
var G__34906 = (i__34902 + (1));
seq__34899 = G__34903;
chunk__34900 = G__34904;
count__34901 = G__34905;
i__34902 = G__34906;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34899);
if(temp__4657__auto__){
var seq__34899__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34899__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__34899__$1);
var G__34907 = cljs.core.chunk_rest.call(null,seq__34899__$1);
var G__34908 = c__25571__auto__;
var G__34909 = cljs.core.count.call(null,c__25571__auto__);
var G__34910 = (0);
seq__34899 = G__34907;
chunk__34900 = G__34908;
count__34901 = G__34909;
i__34902 = G__34910;
continue;
} else {
var child = cljs.core.first.call(null,seq__34899__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__34911 = cljs.core.next.call(null,seq__34899__$1);
var G__34912 = null;
var G__34913 = (0);
var G__34914 = (0);
seq__34899 = G__34911;
chunk__34900 = G__34912;
count__34901 = G__34913;
i__34902 = G__34914;
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
var vec__34918 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__34918,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__34918,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__34918,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__34921 = wrapper.lastChild;
var G__34922 = (level - (1));
wrapper = G__34921;
level = G__34922;
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

if(cljs.core.truth_((function (){var and__24748__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__24748__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__24748__auto__;
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
var x__25423__auto__ = (((content == null))?null:content);
var m__25424__auto__ = (domina.nodes[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,content);
} else {
var m__25424__auto____$1 = (domina.nodes["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,content);
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
var x__25423__auto__ = (((nodeseq == null))?null:nodeseq);
var m__25424__auto__ = (domina.single_node[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,nodeseq);
} else {
var m__25424__auto____$1 = (domina.single_node["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34924 = arguments.length;
var i__25836__auto___34925 = (0);
while(true){
if((i__25836__auto___34925 < len__25835__auto___34924)){
args__25842__auto__.push((arguments[i__25836__auto___34925]));

var G__34926 = (i__25836__auto___34925 + (1));
i__25836__auto___34925 = G__34926;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__24748__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__24748__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__24748__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq34923){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34923));
});

domina.log = (function domina$log(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34928 = arguments.length;
var i__25836__auto___34929 = (0);
while(true){
if((i__25836__auto___34929 < len__25835__auto___34928)){
args__25842__auto__.push((arguments[i__25836__auto___34929]));

var G__34930 = (i__25836__auto___34929 + (1));
i__25836__auto___34929 = G__34930;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq34927){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34927));
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
var args__25842__auto__ = [];
var len__25835__auto___34932 = arguments.length;
var i__25836__auto___34933 = (0);
while(true){
if((i__25836__auto___34933 < len__25835__auto___34932)){
args__25842__auto__.push((arguments[i__25836__auto___34933]));

var G__34934 = (i__25836__auto___34933 + (1));
i__25836__auto___34933 = G__34934;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq34931){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34931));
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
return cljs.core.map.call(null,(function (p1__34935_SHARP_){
return p1__34935_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__34936_SHARP_,p2__34937_SHARP_){
return goog.dom.insertChildAt(p1__34936_SHARP_,p2__34937_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__34939_SHARP_,p2__34938_SHARP_){
return goog.dom.insertSiblingBefore(p2__34938_SHARP_,p1__34939_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__34941_SHARP_,p2__34940_SHARP_){
return goog.dom.insertSiblingAfter(p2__34940_SHARP_,p1__34941_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__34943_SHARP_,p2__34942_SHARP_){
return goog.dom.replaceNode(p2__34942_SHARP_,p1__34943_SHARP_);
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
var args__25842__auto__ = [];
var len__25835__auto___34951 = arguments.length;
var i__25836__auto___34952 = (0);
while(true){
if((i__25836__auto___34952 < len__25835__auto___34951)){
args__25842__auto__.push((arguments[i__25836__auto___34952]));

var G__34953 = (i__25836__auto___34952 + (1));
i__25836__auto___34952 = G__34953;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__34947_34954 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34948_34955 = null;
var count__34949_34956 = (0);
var i__34950_34957 = (0);
while(true){
if((i__34950_34957 < count__34949_34956)){
var n_34958 = cljs.core._nth.call(null,chunk__34948_34955,i__34950_34957);
goog.style.setStyle(n_34958,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34959 = seq__34947_34954;
var G__34960 = chunk__34948_34955;
var G__34961 = count__34949_34956;
var G__34962 = (i__34950_34957 + (1));
seq__34947_34954 = G__34959;
chunk__34948_34955 = G__34960;
count__34949_34956 = G__34961;
i__34950_34957 = G__34962;
continue;
} else {
var temp__4657__auto___34963 = cljs.core.seq.call(null,seq__34947_34954);
if(temp__4657__auto___34963){
var seq__34947_34964__$1 = temp__4657__auto___34963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34947_34964__$1)){
var c__25571__auto___34965 = cljs.core.chunk_first.call(null,seq__34947_34964__$1);
var G__34966 = cljs.core.chunk_rest.call(null,seq__34947_34964__$1);
var G__34967 = c__25571__auto___34965;
var G__34968 = cljs.core.count.call(null,c__25571__auto___34965);
var G__34969 = (0);
seq__34947_34954 = G__34966;
chunk__34948_34955 = G__34967;
count__34949_34956 = G__34968;
i__34950_34957 = G__34969;
continue;
} else {
var n_34970 = cljs.core.first.call(null,seq__34947_34964__$1);
goog.style.setStyle(n_34970,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34971 = cljs.core.next.call(null,seq__34947_34964__$1);
var G__34972 = null;
var G__34973 = (0);
var G__34974 = (0);
seq__34947_34954 = G__34971;
chunk__34948_34955 = G__34972;
count__34949_34956 = G__34973;
i__34950_34957 = G__34974;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq34944){
var G__34945 = cljs.core.first.call(null,seq34944);
var seq34944__$1 = cljs.core.next.call(null,seq34944);
var G__34946 = cljs.core.first.call(null,seq34944__$1);
var seq34944__$2 = cljs.core.next.call(null,seq34944__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34945,G__34946,seq34944__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34982 = arguments.length;
var i__25836__auto___34983 = (0);
while(true){
if((i__25836__auto___34983 < len__25835__auto___34982)){
args__25842__auto__.push((arguments[i__25836__auto___34983]));

var G__34984 = (i__25836__auto___34983 + (1));
i__25836__auto___34983 = G__34984;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__34978_34985 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34979_34986 = null;
var count__34980_34987 = (0);
var i__34981_34988 = (0);
while(true){
if((i__34981_34988 < count__34980_34987)){
var n_34989 = cljs.core._nth.call(null,chunk__34979_34986,i__34981_34988);
n_34989.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34990 = seq__34978_34985;
var G__34991 = chunk__34979_34986;
var G__34992 = count__34980_34987;
var G__34993 = (i__34981_34988 + (1));
seq__34978_34985 = G__34990;
chunk__34979_34986 = G__34991;
count__34980_34987 = G__34992;
i__34981_34988 = G__34993;
continue;
} else {
var temp__4657__auto___34994 = cljs.core.seq.call(null,seq__34978_34985);
if(temp__4657__auto___34994){
var seq__34978_34995__$1 = temp__4657__auto___34994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34978_34995__$1)){
var c__25571__auto___34996 = cljs.core.chunk_first.call(null,seq__34978_34995__$1);
var G__34997 = cljs.core.chunk_rest.call(null,seq__34978_34995__$1);
var G__34998 = c__25571__auto___34996;
var G__34999 = cljs.core.count.call(null,c__25571__auto___34996);
var G__35000 = (0);
seq__34978_34985 = G__34997;
chunk__34979_34986 = G__34998;
count__34980_34987 = G__34999;
i__34981_34988 = G__35000;
continue;
} else {
var n_35001 = cljs.core.first.call(null,seq__34978_34995__$1);
n_35001.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__35002 = cljs.core.next.call(null,seq__34978_34995__$1);
var G__35003 = null;
var G__35004 = (0);
var G__35005 = (0);
seq__34978_34985 = G__35002;
chunk__34979_34986 = G__35003;
count__34980_34987 = G__35004;
i__34981_34988 = G__35005;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq34975){
var G__34976 = cljs.core.first.call(null,seq34975);
var seq34975__$1 = cljs.core.next.call(null,seq34975);
var G__34977 = cljs.core.first.call(null,seq34975__$1);
var seq34975__$2 = cljs.core.next.call(null,seq34975__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34976,G__34977,seq34975__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__35010_35014 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35011_35015 = null;
var count__35012_35016 = (0);
var i__35013_35017 = (0);
while(true){
if((i__35013_35017 < count__35012_35016)){
var n_35018 = cljs.core._nth.call(null,chunk__35011_35015,i__35013_35017);
n_35018.removeAttribute(cljs.core.name.call(null,name));

var G__35019 = seq__35010_35014;
var G__35020 = chunk__35011_35015;
var G__35021 = count__35012_35016;
var G__35022 = (i__35013_35017 + (1));
seq__35010_35014 = G__35019;
chunk__35011_35015 = G__35020;
count__35012_35016 = G__35021;
i__35013_35017 = G__35022;
continue;
} else {
var temp__4657__auto___35023 = cljs.core.seq.call(null,seq__35010_35014);
if(temp__4657__auto___35023){
var seq__35010_35024__$1 = temp__4657__auto___35023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35010_35024__$1)){
var c__25571__auto___35025 = cljs.core.chunk_first.call(null,seq__35010_35024__$1);
var G__35026 = cljs.core.chunk_rest.call(null,seq__35010_35024__$1);
var G__35027 = c__25571__auto___35025;
var G__35028 = cljs.core.count.call(null,c__25571__auto___35025);
var G__35029 = (0);
seq__35010_35014 = G__35026;
chunk__35011_35015 = G__35027;
count__35012_35016 = G__35028;
i__35013_35017 = G__35029;
continue;
} else {
var n_35030 = cljs.core.first.call(null,seq__35010_35024__$1);
n_35030.removeAttribute(cljs.core.name.call(null,name));

var G__35031 = cljs.core.next.call(null,seq__35010_35024__$1);
var G__35032 = null;
var G__35033 = (0);
var G__35034 = (0);
seq__35010_35014 = G__35031;
chunk__35011_35015 = G__35032;
count__35012_35016 = G__35033;
i__35013_35017 = G__35034;
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
var vec__35038 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__35038,(0),null);
var v = cljs.core.nth.call(null,vec__35038,(1),null);
if(cljs.core.truth_((function (){var and__24748__auto__ = k;
if(cljs.core.truth_(and__24748__auto__)){
return v;
} else {
return and__24748__auto__;
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
return (function (p1__35041_SHARP_){
var attr = attrs__$1.item(p1__35041_SHARP_);
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
var seq__35052_35062 = cljs.core.seq.call(null,styles);
var chunk__35053_35063 = null;
var count__35054_35064 = (0);
var i__35055_35065 = (0);
while(true){
if((i__35055_35065 < count__35054_35064)){
var vec__35056_35066 = cljs.core._nth.call(null,chunk__35053_35063,i__35055_35065);
var name_35067 = cljs.core.nth.call(null,vec__35056_35066,(0),null);
var value_35068 = cljs.core.nth.call(null,vec__35056_35066,(1),null);
domina.set_style_BANG_.call(null,content,name_35067,value_35068);

var G__35069 = seq__35052_35062;
var G__35070 = chunk__35053_35063;
var G__35071 = count__35054_35064;
var G__35072 = (i__35055_35065 + (1));
seq__35052_35062 = G__35069;
chunk__35053_35063 = G__35070;
count__35054_35064 = G__35071;
i__35055_35065 = G__35072;
continue;
} else {
var temp__4657__auto___35073 = cljs.core.seq.call(null,seq__35052_35062);
if(temp__4657__auto___35073){
var seq__35052_35074__$1 = temp__4657__auto___35073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35052_35074__$1)){
var c__25571__auto___35075 = cljs.core.chunk_first.call(null,seq__35052_35074__$1);
var G__35076 = cljs.core.chunk_rest.call(null,seq__35052_35074__$1);
var G__35077 = c__25571__auto___35075;
var G__35078 = cljs.core.count.call(null,c__25571__auto___35075);
var G__35079 = (0);
seq__35052_35062 = G__35076;
chunk__35053_35063 = G__35077;
count__35054_35064 = G__35078;
i__35055_35065 = G__35079;
continue;
} else {
var vec__35059_35080 = cljs.core.first.call(null,seq__35052_35074__$1);
var name_35081 = cljs.core.nth.call(null,vec__35059_35080,(0),null);
var value_35082 = cljs.core.nth.call(null,vec__35059_35080,(1),null);
domina.set_style_BANG_.call(null,content,name_35081,value_35082);

var G__35083 = cljs.core.next.call(null,seq__35052_35074__$1);
var G__35084 = null;
var G__35085 = (0);
var G__35086 = (0);
seq__35052_35062 = G__35083;
chunk__35053_35063 = G__35084;
count__35054_35064 = G__35085;
i__35055_35065 = G__35086;
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
var seq__35097_35107 = cljs.core.seq.call(null,attrs);
var chunk__35098_35108 = null;
var count__35099_35109 = (0);
var i__35100_35110 = (0);
while(true){
if((i__35100_35110 < count__35099_35109)){
var vec__35101_35111 = cljs.core._nth.call(null,chunk__35098_35108,i__35100_35110);
var name_35112 = cljs.core.nth.call(null,vec__35101_35111,(0),null);
var value_35113 = cljs.core.nth.call(null,vec__35101_35111,(1),null);
domina.set_attr_BANG_.call(null,content,name_35112,value_35113);

var G__35114 = seq__35097_35107;
var G__35115 = chunk__35098_35108;
var G__35116 = count__35099_35109;
var G__35117 = (i__35100_35110 + (1));
seq__35097_35107 = G__35114;
chunk__35098_35108 = G__35115;
count__35099_35109 = G__35116;
i__35100_35110 = G__35117;
continue;
} else {
var temp__4657__auto___35118 = cljs.core.seq.call(null,seq__35097_35107);
if(temp__4657__auto___35118){
var seq__35097_35119__$1 = temp__4657__auto___35118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35097_35119__$1)){
var c__25571__auto___35120 = cljs.core.chunk_first.call(null,seq__35097_35119__$1);
var G__35121 = cljs.core.chunk_rest.call(null,seq__35097_35119__$1);
var G__35122 = c__25571__auto___35120;
var G__35123 = cljs.core.count.call(null,c__25571__auto___35120);
var G__35124 = (0);
seq__35097_35107 = G__35121;
chunk__35098_35108 = G__35122;
count__35099_35109 = G__35123;
i__35100_35110 = G__35124;
continue;
} else {
var vec__35104_35125 = cljs.core.first.call(null,seq__35097_35119__$1);
var name_35126 = cljs.core.nth.call(null,vec__35104_35125,(0),null);
var value_35127 = cljs.core.nth.call(null,vec__35104_35125,(1),null);
domina.set_attr_BANG_.call(null,content,name_35126,value_35127);

var G__35128 = cljs.core.next.call(null,seq__35097_35119__$1);
var G__35129 = null;
var G__35130 = (0);
var G__35131 = (0);
seq__35097_35107 = G__35128;
chunk__35098_35108 = G__35129;
count__35099_35109 = G__35130;
i__35100_35110 = G__35131;
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
var seq__35136_35140 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35137_35141 = null;
var count__35138_35142 = (0);
var i__35139_35143 = (0);
while(true){
if((i__35139_35143 < count__35138_35142)){
var node_35144 = cljs.core._nth.call(null,chunk__35137_35141,i__35139_35143);
goog.dom.classes.add(node_35144,class$);

var G__35145 = seq__35136_35140;
var G__35146 = chunk__35137_35141;
var G__35147 = count__35138_35142;
var G__35148 = (i__35139_35143 + (1));
seq__35136_35140 = G__35145;
chunk__35137_35141 = G__35146;
count__35138_35142 = G__35147;
i__35139_35143 = G__35148;
continue;
} else {
var temp__4657__auto___35149 = cljs.core.seq.call(null,seq__35136_35140);
if(temp__4657__auto___35149){
var seq__35136_35150__$1 = temp__4657__auto___35149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35136_35150__$1)){
var c__25571__auto___35151 = cljs.core.chunk_first.call(null,seq__35136_35150__$1);
var G__35152 = cljs.core.chunk_rest.call(null,seq__35136_35150__$1);
var G__35153 = c__25571__auto___35151;
var G__35154 = cljs.core.count.call(null,c__25571__auto___35151);
var G__35155 = (0);
seq__35136_35140 = G__35152;
chunk__35137_35141 = G__35153;
count__35138_35142 = G__35154;
i__35139_35143 = G__35155;
continue;
} else {
var node_35156 = cljs.core.first.call(null,seq__35136_35150__$1);
goog.dom.classes.add(node_35156,class$);

var G__35157 = cljs.core.next.call(null,seq__35136_35150__$1);
var G__35158 = null;
var G__35159 = (0);
var G__35160 = (0);
seq__35136_35140 = G__35157;
chunk__35137_35141 = G__35158;
count__35138_35142 = G__35159;
i__35139_35143 = G__35160;
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
var seq__35165_35169 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35166_35170 = null;
var count__35167_35171 = (0);
var i__35168_35172 = (0);
while(true){
if((i__35168_35172 < count__35167_35171)){
var node_35173 = cljs.core._nth.call(null,chunk__35166_35170,i__35168_35172);
goog.dom.classes.remove(node_35173,class$);

var G__35174 = seq__35165_35169;
var G__35175 = chunk__35166_35170;
var G__35176 = count__35167_35171;
var G__35177 = (i__35168_35172 + (1));
seq__35165_35169 = G__35174;
chunk__35166_35170 = G__35175;
count__35167_35171 = G__35176;
i__35168_35172 = G__35177;
continue;
} else {
var temp__4657__auto___35178 = cljs.core.seq.call(null,seq__35165_35169);
if(temp__4657__auto___35178){
var seq__35165_35179__$1 = temp__4657__auto___35178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35165_35179__$1)){
var c__25571__auto___35180 = cljs.core.chunk_first.call(null,seq__35165_35179__$1);
var G__35181 = cljs.core.chunk_rest.call(null,seq__35165_35179__$1);
var G__35182 = c__25571__auto___35180;
var G__35183 = cljs.core.count.call(null,c__25571__auto___35180);
var G__35184 = (0);
seq__35165_35169 = G__35181;
chunk__35166_35170 = G__35182;
count__35167_35171 = G__35183;
i__35168_35172 = G__35184;
continue;
} else {
var node_35185 = cljs.core.first.call(null,seq__35165_35179__$1);
goog.dom.classes.remove(node_35185,class$);

var G__35186 = cljs.core.next.call(null,seq__35165_35179__$1);
var G__35187 = null;
var G__35188 = (0);
var G__35189 = (0);
seq__35165_35169 = G__35186;
chunk__35166_35170 = G__35187;
count__35167_35171 = G__35188;
i__35168_35172 = G__35189;
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
var seq__35194_35198 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35195_35199 = null;
var count__35196_35200 = (0);
var i__35197_35201 = (0);
while(true){
if((i__35197_35201 < count__35196_35200)){
var node_35202 = cljs.core._nth.call(null,chunk__35195_35199,i__35197_35201);
goog.dom.classes.toggle(node_35202,class$);

var G__35203 = seq__35194_35198;
var G__35204 = chunk__35195_35199;
var G__35205 = count__35196_35200;
var G__35206 = (i__35197_35201 + (1));
seq__35194_35198 = G__35203;
chunk__35195_35199 = G__35204;
count__35196_35200 = G__35205;
i__35197_35201 = G__35206;
continue;
} else {
var temp__4657__auto___35207 = cljs.core.seq.call(null,seq__35194_35198);
if(temp__4657__auto___35207){
var seq__35194_35208__$1 = temp__4657__auto___35207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35194_35208__$1)){
var c__25571__auto___35209 = cljs.core.chunk_first.call(null,seq__35194_35208__$1);
var G__35210 = cljs.core.chunk_rest.call(null,seq__35194_35208__$1);
var G__35211 = c__25571__auto___35209;
var G__35212 = cljs.core.count.call(null,c__25571__auto___35209);
var G__35213 = (0);
seq__35194_35198 = G__35210;
chunk__35195_35199 = G__35211;
count__35196_35200 = G__35212;
i__35197_35201 = G__35213;
continue;
} else {
var node_35214 = cljs.core.first.call(null,seq__35194_35208__$1);
goog.dom.classes.toggle(node_35214,class$);

var G__35215 = cljs.core.next.call(null,seq__35194_35208__$1);
var G__35216 = null;
var G__35217 = (0);
var G__35218 = (0);
seq__35194_35198 = G__35215;
chunk__35195_35199 = G__35216;
count__35196_35200 = G__35217;
i__35197_35201 = G__35218;
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
var classes_35227__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__35223_35228 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35224_35229 = null;
var count__35225_35230 = (0);
var i__35226_35231 = (0);
while(true){
if((i__35226_35231 < count__35225_35230)){
var node_35232 = cljs.core._nth.call(null,chunk__35224_35229,i__35226_35231);
goog.dom.classes.set(node_35232,classes_35227__$1);

var G__35233 = seq__35223_35228;
var G__35234 = chunk__35224_35229;
var G__35235 = count__35225_35230;
var G__35236 = (i__35226_35231 + (1));
seq__35223_35228 = G__35233;
chunk__35224_35229 = G__35234;
count__35225_35230 = G__35235;
i__35226_35231 = G__35236;
continue;
} else {
var temp__4657__auto___35237 = cljs.core.seq.call(null,seq__35223_35228);
if(temp__4657__auto___35237){
var seq__35223_35238__$1 = temp__4657__auto___35237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35223_35238__$1)){
var c__25571__auto___35239 = cljs.core.chunk_first.call(null,seq__35223_35238__$1);
var G__35240 = cljs.core.chunk_rest.call(null,seq__35223_35238__$1);
var G__35241 = c__25571__auto___35239;
var G__35242 = cljs.core.count.call(null,c__25571__auto___35239);
var G__35243 = (0);
seq__35223_35228 = G__35240;
chunk__35224_35229 = G__35241;
count__35225_35230 = G__35242;
i__35226_35231 = G__35243;
continue;
} else {
var node_35244 = cljs.core.first.call(null,seq__35223_35238__$1);
goog.dom.classes.set(node_35244,classes_35227__$1);

var G__35245 = cljs.core.next.call(null,seq__35223_35238__$1);
var G__35246 = null;
var G__35247 = (0);
var G__35248 = (0);
seq__35223_35228 = G__35245;
chunk__35224_35229 = G__35246;
count__35225_35230 = G__35247;
i__35226_35231 = G__35248;
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
var seq__35253_35257 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35254_35258 = null;
var count__35255_35259 = (0);
var i__35256_35260 = (0);
while(true){
if((i__35256_35260 < count__35255_35259)){
var node_35261 = cljs.core._nth.call(null,chunk__35254_35258,i__35256_35260);
goog.dom.setTextContent(node_35261,value);

var G__35262 = seq__35253_35257;
var G__35263 = chunk__35254_35258;
var G__35264 = count__35255_35259;
var G__35265 = (i__35256_35260 + (1));
seq__35253_35257 = G__35262;
chunk__35254_35258 = G__35263;
count__35255_35259 = G__35264;
i__35256_35260 = G__35265;
continue;
} else {
var temp__4657__auto___35266 = cljs.core.seq.call(null,seq__35253_35257);
if(temp__4657__auto___35266){
var seq__35253_35267__$1 = temp__4657__auto___35266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35253_35267__$1)){
var c__25571__auto___35268 = cljs.core.chunk_first.call(null,seq__35253_35267__$1);
var G__35269 = cljs.core.chunk_rest.call(null,seq__35253_35267__$1);
var G__35270 = c__25571__auto___35268;
var G__35271 = cljs.core.count.call(null,c__25571__auto___35268);
var G__35272 = (0);
seq__35253_35257 = G__35269;
chunk__35254_35258 = G__35270;
count__35255_35259 = G__35271;
i__35256_35260 = G__35272;
continue;
} else {
var node_35273 = cljs.core.first.call(null,seq__35253_35267__$1);
goog.dom.setTextContent(node_35273,value);

var G__35274 = cljs.core.next.call(null,seq__35253_35267__$1);
var G__35275 = null;
var G__35276 = (0);
var G__35277 = (0);
seq__35253_35257 = G__35274;
chunk__35254_35258 = G__35275;
count__35255_35259 = G__35276;
i__35256_35260 = G__35277;
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
var seq__35282_35286 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35283_35287 = null;
var count__35284_35288 = (0);
var i__35285_35289 = (0);
while(true){
if((i__35285_35289 < count__35284_35288)){
var node_35290 = cljs.core._nth.call(null,chunk__35283_35287,i__35285_35289);
goog.dom.forms.setValue(node_35290,value);

var G__35291 = seq__35282_35286;
var G__35292 = chunk__35283_35287;
var G__35293 = count__35284_35288;
var G__35294 = (i__35285_35289 + (1));
seq__35282_35286 = G__35291;
chunk__35283_35287 = G__35292;
count__35284_35288 = G__35293;
i__35285_35289 = G__35294;
continue;
} else {
var temp__4657__auto___35295 = cljs.core.seq.call(null,seq__35282_35286);
if(temp__4657__auto___35295){
var seq__35282_35296__$1 = temp__4657__auto___35295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35282_35296__$1)){
var c__25571__auto___35297 = cljs.core.chunk_first.call(null,seq__35282_35296__$1);
var G__35298 = cljs.core.chunk_rest.call(null,seq__35282_35296__$1);
var G__35299 = c__25571__auto___35297;
var G__35300 = cljs.core.count.call(null,c__25571__auto___35297);
var G__35301 = (0);
seq__35282_35286 = G__35298;
chunk__35283_35287 = G__35299;
count__35284_35288 = G__35300;
i__35285_35289 = G__35301;
continue;
} else {
var node_35302 = cljs.core.first.call(null,seq__35282_35296__$1);
goog.dom.forms.setValue(node_35302,value);

var G__35303 = cljs.core.next.call(null,seq__35282_35296__$1);
var G__35304 = null;
var G__35305 = (0);
var G__35306 = (0);
seq__35282_35286 = G__35303;
chunk__35283_35287 = G__35304;
count__35284_35288 = G__35305;
i__35285_35289 = G__35306;
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
if(cljs.core.truth_((function (){var and__24748__auto__ = allows_inner_html_QMARK_;
if(and__24748__auto__){
var and__24748__auto____$1 = (function (){var or__24760__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__24748__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
}
})())){
var value_35317 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__35313_35318 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35314_35319 = null;
var count__35315_35320 = (0);
var i__35316_35321 = (0);
while(true){
if((i__35316_35321 < count__35315_35320)){
var node_35322 = cljs.core._nth.call(null,chunk__35314_35319,i__35316_35321);
node_35322.innerHTML = value_35317;

var G__35323 = seq__35313_35318;
var G__35324 = chunk__35314_35319;
var G__35325 = count__35315_35320;
var G__35326 = (i__35316_35321 + (1));
seq__35313_35318 = G__35323;
chunk__35314_35319 = G__35324;
count__35315_35320 = G__35325;
i__35316_35321 = G__35326;
continue;
} else {
var temp__4657__auto___35327 = cljs.core.seq.call(null,seq__35313_35318);
if(temp__4657__auto___35327){
var seq__35313_35328__$1 = temp__4657__auto___35327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35313_35328__$1)){
var c__25571__auto___35329 = cljs.core.chunk_first.call(null,seq__35313_35328__$1);
var G__35330 = cljs.core.chunk_rest.call(null,seq__35313_35328__$1);
var G__35331 = c__25571__auto___35329;
var G__35332 = cljs.core.count.call(null,c__25571__auto___35329);
var G__35333 = (0);
seq__35313_35318 = G__35330;
chunk__35314_35319 = G__35331;
count__35315_35320 = G__35332;
i__35316_35321 = G__35333;
continue;
} else {
var node_35334 = cljs.core.first.call(null,seq__35313_35328__$1);
node_35334.innerHTML = value_35317;

var G__35335 = cljs.core.next.call(null,seq__35313_35328__$1);
var G__35336 = null;
var G__35337 = (0);
var G__35338 = (0);
seq__35313_35318 = G__35335;
chunk__35314_35319 = G__35336;
count__35315_35320 = G__35337;
i__35316_35321 = G__35338;
continue;
}
} else {
}
}
break;
}
}catch (e35312){if((e35312 instanceof Error)){
var e_35339 = e35312;
domina.replace_children_BANG_.call(null,content,value_35317);
} else {
throw e35312;

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
var args35340 = [];
var len__25835__auto___35343 = arguments.length;
var i__25836__auto___35344 = (0);
while(true){
if((i__25836__auto___35344 < len__25835__auto___35343)){
args35340.push((arguments[i__25836__auto___35344]));

var G__35345 = (i__25836__auto___35344 + (1));
i__25836__auto___35344 = G__35345;
continue;
} else {
}
break;
}

var G__35342 = args35340.length;
switch (G__35342) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35340.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__24748__auto__ = bubble;
if(cljs.core.truth_(and__24748__auto__)){
return (value == null);
} else {
return and__24748__auto__;
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
var m = (function (){var or__24760__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
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
var seq__35353_35357 = cljs.core.seq.call(null,children);
var chunk__35354_35358 = null;
var count__35355_35359 = (0);
var i__35356_35360 = (0);
while(true){
if((i__35356_35360 < count__35355_35359)){
var child_35361 = cljs.core._nth.call(null,chunk__35354_35358,i__35356_35360);
frag.appendChild(child_35361);

var G__35362 = seq__35353_35357;
var G__35363 = chunk__35354_35358;
var G__35364 = count__35355_35359;
var G__35365 = (i__35356_35360 + (1));
seq__35353_35357 = G__35362;
chunk__35354_35358 = G__35363;
count__35355_35359 = G__35364;
i__35356_35360 = G__35365;
continue;
} else {
var temp__4657__auto___35366 = cljs.core.seq.call(null,seq__35353_35357);
if(temp__4657__auto___35366){
var seq__35353_35367__$1 = temp__4657__auto___35366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35353_35367__$1)){
var c__25571__auto___35368 = cljs.core.chunk_first.call(null,seq__35353_35367__$1);
var G__35369 = cljs.core.chunk_rest.call(null,seq__35353_35367__$1);
var G__35370 = c__25571__auto___35368;
var G__35371 = cljs.core.count.call(null,c__25571__auto___35368);
var G__35372 = (0);
seq__35353_35357 = G__35369;
chunk__35354_35358 = G__35370;
count__35355_35359 = G__35371;
i__35356_35360 = G__35372;
continue;
} else {
var child_35373 = cljs.core.first.call(null,seq__35353_35367__$1);
frag.appendChild(child_35373);

var G__35374 = cljs.core.next.call(null,seq__35353_35367__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__35353_35357 = G__35374;
chunk__35354_35358 = G__35375;
count__35355_35359 = G__35376;
i__35356_35360 = G__35377;
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
return (function (p1__35347_SHARP_,p2__35348_SHARP_){
return f.call(null,p1__35347_SHARP_,p2__35348_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args35378 = [];
var len__25835__auto___35381 = arguments.length;
var i__25836__auto___35382 = (0);
while(true){
if((i__25836__auto___35382 < len__25835__auto___35381)){
args35378.push((arguments[i__25836__auto___35382]));

var G__35383 = (i__25836__auto___35382 + (1));
i__25836__auto___35382 = G__35383;
continue;
} else {
}
break;
}

var G__35380 = args35378.length;
switch (G__35380) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35378.length)].join('')));

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
var args35385 = [];
var len__25835__auto___35388 = arguments.length;
var i__25836__auto___35389 = (0);
while(true){
if((i__25836__auto___35389 < len__25835__auto___35388)){
args35385.push((arguments[i__25836__auto___35389]));

var G__35390 = (i__25836__auto___35389 + (1));
i__25836__auto___35389 = G__35390;
continue;
} else {
}
break;
}

var G__35387 = args35385.length;
switch (G__35387) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35385.length)].join('')));

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
var and__24748__auto__ = obj;
if(cljs.core.truth_(and__24748__auto__)){
var and__24748__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__24748__auto____$1){
return obj.length;
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
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

//# sourceMappingURL=domina.js.map?rel=1481153823892