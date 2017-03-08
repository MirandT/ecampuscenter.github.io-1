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
var opt_wrapper_34891 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_34892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_34893 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_34893,opt_wrapper_34891,table_section_wrapper_34892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_34891,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_34892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_34892,cell_wrapper_34893,table_section_wrapper_34892,table_section_wrapper_34892]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__24748__auto__ = div.firstChild;
if(cljs.core.truth_(and__24748__auto__)){
return div.firstChild.childNodes;
} else {
return and__24748__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__34898 = cljs.core.seq.call(null,tbody);
var chunk__34899 = null;
var count__34900 = (0);
var i__34901 = (0);
while(true){
if((i__34901 < count__34900)){
var child = cljs.core._nth.call(null,chunk__34899,i__34901);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__34902 = seq__34898;
var G__34903 = chunk__34899;
var G__34904 = count__34900;
var G__34905 = (i__34901 + (1));
seq__34898 = G__34902;
chunk__34899 = G__34903;
count__34900 = G__34904;
i__34901 = G__34905;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34898);
if(temp__4657__auto__){
var seq__34898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34898__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__34898__$1);
var G__34906 = cljs.core.chunk_rest.call(null,seq__34898__$1);
var G__34907 = c__25571__auto__;
var G__34908 = cljs.core.count.call(null,c__25571__auto__);
var G__34909 = (0);
seq__34898 = G__34906;
chunk__34899 = G__34907;
count__34900 = G__34908;
i__34901 = G__34909;
continue;
} else {
var child = cljs.core.first.call(null,seq__34898__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__34910 = cljs.core.next.call(null,seq__34898__$1);
var G__34911 = null;
var G__34912 = (0);
var G__34913 = (0);
seq__34898 = G__34910;
chunk__34899 = G__34911;
count__34900 = G__34912;
i__34901 = G__34913;
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
var vec__34917 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__34917,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__34917,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__34917,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__34920 = wrapper.lastChild;
var G__34921 = (level - (1));
wrapper = G__34920;
level = G__34921;
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
var len__25835__auto___34923 = arguments.length;
var i__25836__auto___34924 = (0);
while(true){
if((i__25836__auto___34924 < len__25835__auto___34923)){
args__25842__auto__.push((arguments[i__25836__auto___34924]));

var G__34925 = (i__25836__auto___34924 + (1));
i__25836__auto___34924 = G__34925;
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

domina.log_debug.cljs$lang$applyTo = (function (seq34922){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34922));
});

domina.log = (function domina$log(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34927 = arguments.length;
var i__25836__auto___34928 = (0);
while(true){
if((i__25836__auto___34928 < len__25835__auto___34927)){
args__25842__auto__.push((arguments[i__25836__auto___34928]));

var G__34929 = (i__25836__auto___34928 + (1));
i__25836__auto___34928 = G__34929;
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

domina.log.cljs$lang$applyTo = (function (seq34926){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34926));
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
var len__25835__auto___34931 = arguments.length;
var i__25836__auto___34932 = (0);
while(true){
if((i__25836__auto___34932 < len__25835__auto___34931)){
args__25842__auto__.push((arguments[i__25836__auto___34932]));

var G__34933 = (i__25836__auto___34932 + (1));
i__25836__auto___34932 = G__34933;
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

domina.common_ancestor.cljs$lang$applyTo = (function (seq34930){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34930));
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
return cljs.core.map.call(null,(function (p1__34934_SHARP_){
return p1__34934_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__34935_SHARP_,p2__34936_SHARP_){
return goog.dom.insertChildAt(p1__34935_SHARP_,p2__34936_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__34938_SHARP_,p2__34937_SHARP_){
return goog.dom.insertSiblingBefore(p2__34937_SHARP_,p1__34938_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__34940_SHARP_,p2__34939_SHARP_){
return goog.dom.insertSiblingAfter(p2__34939_SHARP_,p1__34940_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__34942_SHARP_,p2__34941_SHARP_){
return goog.dom.replaceNode(p2__34941_SHARP_,p1__34942_SHARP_);
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
var len__25835__auto___34950 = arguments.length;
var i__25836__auto___34951 = (0);
while(true){
if((i__25836__auto___34951 < len__25835__auto___34950)){
args__25842__auto__.push((arguments[i__25836__auto___34951]));

var G__34952 = (i__25836__auto___34951 + (1));
i__25836__auto___34951 = G__34952;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__34946_34953 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34947_34954 = null;
var count__34948_34955 = (0);
var i__34949_34956 = (0);
while(true){
if((i__34949_34956 < count__34948_34955)){
var n_34957 = cljs.core._nth.call(null,chunk__34947_34954,i__34949_34956);
goog.style.setStyle(n_34957,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34958 = seq__34946_34953;
var G__34959 = chunk__34947_34954;
var G__34960 = count__34948_34955;
var G__34961 = (i__34949_34956 + (1));
seq__34946_34953 = G__34958;
chunk__34947_34954 = G__34959;
count__34948_34955 = G__34960;
i__34949_34956 = G__34961;
continue;
} else {
var temp__4657__auto___34962 = cljs.core.seq.call(null,seq__34946_34953);
if(temp__4657__auto___34962){
var seq__34946_34963__$1 = temp__4657__auto___34962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34946_34963__$1)){
var c__25571__auto___34964 = cljs.core.chunk_first.call(null,seq__34946_34963__$1);
var G__34965 = cljs.core.chunk_rest.call(null,seq__34946_34963__$1);
var G__34966 = c__25571__auto___34964;
var G__34967 = cljs.core.count.call(null,c__25571__auto___34964);
var G__34968 = (0);
seq__34946_34953 = G__34965;
chunk__34947_34954 = G__34966;
count__34948_34955 = G__34967;
i__34949_34956 = G__34968;
continue;
} else {
var n_34969 = cljs.core.first.call(null,seq__34946_34963__$1);
goog.style.setStyle(n_34969,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34970 = cljs.core.next.call(null,seq__34946_34963__$1);
var G__34971 = null;
var G__34972 = (0);
var G__34973 = (0);
seq__34946_34953 = G__34970;
chunk__34947_34954 = G__34971;
count__34948_34955 = G__34972;
i__34949_34956 = G__34973;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq34943){
var G__34944 = cljs.core.first.call(null,seq34943);
var seq34943__$1 = cljs.core.next.call(null,seq34943);
var G__34945 = cljs.core.first.call(null,seq34943__$1);
var seq34943__$2 = cljs.core.next.call(null,seq34943__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34944,G__34945,seq34943__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34981 = arguments.length;
var i__25836__auto___34982 = (0);
while(true){
if((i__25836__auto___34982 < len__25835__auto___34981)){
args__25842__auto__.push((arguments[i__25836__auto___34982]));

var G__34983 = (i__25836__auto___34982 + (1));
i__25836__auto___34982 = G__34983;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__34977_34984 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34978_34985 = null;
var count__34979_34986 = (0);
var i__34980_34987 = (0);
while(true){
if((i__34980_34987 < count__34979_34986)){
var n_34988 = cljs.core._nth.call(null,chunk__34978_34985,i__34980_34987);
n_34988.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34989 = seq__34977_34984;
var G__34990 = chunk__34978_34985;
var G__34991 = count__34979_34986;
var G__34992 = (i__34980_34987 + (1));
seq__34977_34984 = G__34989;
chunk__34978_34985 = G__34990;
count__34979_34986 = G__34991;
i__34980_34987 = G__34992;
continue;
} else {
var temp__4657__auto___34993 = cljs.core.seq.call(null,seq__34977_34984);
if(temp__4657__auto___34993){
var seq__34977_34994__$1 = temp__4657__auto___34993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34977_34994__$1)){
var c__25571__auto___34995 = cljs.core.chunk_first.call(null,seq__34977_34994__$1);
var G__34996 = cljs.core.chunk_rest.call(null,seq__34977_34994__$1);
var G__34997 = c__25571__auto___34995;
var G__34998 = cljs.core.count.call(null,c__25571__auto___34995);
var G__34999 = (0);
seq__34977_34984 = G__34996;
chunk__34978_34985 = G__34997;
count__34979_34986 = G__34998;
i__34980_34987 = G__34999;
continue;
} else {
var n_35000 = cljs.core.first.call(null,seq__34977_34994__$1);
n_35000.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__35001 = cljs.core.next.call(null,seq__34977_34994__$1);
var G__35002 = null;
var G__35003 = (0);
var G__35004 = (0);
seq__34977_34984 = G__35001;
chunk__34978_34985 = G__35002;
count__34979_34986 = G__35003;
i__34980_34987 = G__35004;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq34974){
var G__34975 = cljs.core.first.call(null,seq34974);
var seq34974__$1 = cljs.core.next.call(null,seq34974);
var G__34976 = cljs.core.first.call(null,seq34974__$1);
var seq34974__$2 = cljs.core.next.call(null,seq34974__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34975,G__34976,seq34974__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__35009_35013 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35010_35014 = null;
var count__35011_35015 = (0);
var i__35012_35016 = (0);
while(true){
if((i__35012_35016 < count__35011_35015)){
var n_35017 = cljs.core._nth.call(null,chunk__35010_35014,i__35012_35016);
n_35017.removeAttribute(cljs.core.name.call(null,name));

var G__35018 = seq__35009_35013;
var G__35019 = chunk__35010_35014;
var G__35020 = count__35011_35015;
var G__35021 = (i__35012_35016 + (1));
seq__35009_35013 = G__35018;
chunk__35010_35014 = G__35019;
count__35011_35015 = G__35020;
i__35012_35016 = G__35021;
continue;
} else {
var temp__4657__auto___35022 = cljs.core.seq.call(null,seq__35009_35013);
if(temp__4657__auto___35022){
var seq__35009_35023__$1 = temp__4657__auto___35022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35009_35023__$1)){
var c__25571__auto___35024 = cljs.core.chunk_first.call(null,seq__35009_35023__$1);
var G__35025 = cljs.core.chunk_rest.call(null,seq__35009_35023__$1);
var G__35026 = c__25571__auto___35024;
var G__35027 = cljs.core.count.call(null,c__25571__auto___35024);
var G__35028 = (0);
seq__35009_35013 = G__35025;
chunk__35010_35014 = G__35026;
count__35011_35015 = G__35027;
i__35012_35016 = G__35028;
continue;
} else {
var n_35029 = cljs.core.first.call(null,seq__35009_35023__$1);
n_35029.removeAttribute(cljs.core.name.call(null,name));

var G__35030 = cljs.core.next.call(null,seq__35009_35023__$1);
var G__35031 = null;
var G__35032 = (0);
var G__35033 = (0);
seq__35009_35013 = G__35030;
chunk__35010_35014 = G__35031;
count__35011_35015 = G__35032;
i__35012_35016 = G__35033;
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
var vec__35037 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__35037,(0),null);
var v = cljs.core.nth.call(null,vec__35037,(1),null);
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
return (function (p1__35040_SHARP_){
var attr = attrs__$1.item(p1__35040_SHARP_);
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
var seq__35051_35061 = cljs.core.seq.call(null,styles);
var chunk__35052_35062 = null;
var count__35053_35063 = (0);
var i__35054_35064 = (0);
while(true){
if((i__35054_35064 < count__35053_35063)){
var vec__35055_35065 = cljs.core._nth.call(null,chunk__35052_35062,i__35054_35064);
var name_35066 = cljs.core.nth.call(null,vec__35055_35065,(0),null);
var value_35067 = cljs.core.nth.call(null,vec__35055_35065,(1),null);
domina.set_style_BANG_.call(null,content,name_35066,value_35067);

var G__35068 = seq__35051_35061;
var G__35069 = chunk__35052_35062;
var G__35070 = count__35053_35063;
var G__35071 = (i__35054_35064 + (1));
seq__35051_35061 = G__35068;
chunk__35052_35062 = G__35069;
count__35053_35063 = G__35070;
i__35054_35064 = G__35071;
continue;
} else {
var temp__4657__auto___35072 = cljs.core.seq.call(null,seq__35051_35061);
if(temp__4657__auto___35072){
var seq__35051_35073__$1 = temp__4657__auto___35072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35051_35073__$1)){
var c__25571__auto___35074 = cljs.core.chunk_first.call(null,seq__35051_35073__$1);
var G__35075 = cljs.core.chunk_rest.call(null,seq__35051_35073__$1);
var G__35076 = c__25571__auto___35074;
var G__35077 = cljs.core.count.call(null,c__25571__auto___35074);
var G__35078 = (0);
seq__35051_35061 = G__35075;
chunk__35052_35062 = G__35076;
count__35053_35063 = G__35077;
i__35054_35064 = G__35078;
continue;
} else {
var vec__35058_35079 = cljs.core.first.call(null,seq__35051_35073__$1);
var name_35080 = cljs.core.nth.call(null,vec__35058_35079,(0),null);
var value_35081 = cljs.core.nth.call(null,vec__35058_35079,(1),null);
domina.set_style_BANG_.call(null,content,name_35080,value_35081);

var G__35082 = cljs.core.next.call(null,seq__35051_35073__$1);
var G__35083 = null;
var G__35084 = (0);
var G__35085 = (0);
seq__35051_35061 = G__35082;
chunk__35052_35062 = G__35083;
count__35053_35063 = G__35084;
i__35054_35064 = G__35085;
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
var seq__35096_35106 = cljs.core.seq.call(null,attrs);
var chunk__35097_35107 = null;
var count__35098_35108 = (0);
var i__35099_35109 = (0);
while(true){
if((i__35099_35109 < count__35098_35108)){
var vec__35100_35110 = cljs.core._nth.call(null,chunk__35097_35107,i__35099_35109);
var name_35111 = cljs.core.nth.call(null,vec__35100_35110,(0),null);
var value_35112 = cljs.core.nth.call(null,vec__35100_35110,(1),null);
domina.set_attr_BANG_.call(null,content,name_35111,value_35112);

var G__35113 = seq__35096_35106;
var G__35114 = chunk__35097_35107;
var G__35115 = count__35098_35108;
var G__35116 = (i__35099_35109 + (1));
seq__35096_35106 = G__35113;
chunk__35097_35107 = G__35114;
count__35098_35108 = G__35115;
i__35099_35109 = G__35116;
continue;
} else {
var temp__4657__auto___35117 = cljs.core.seq.call(null,seq__35096_35106);
if(temp__4657__auto___35117){
var seq__35096_35118__$1 = temp__4657__auto___35117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35096_35118__$1)){
var c__25571__auto___35119 = cljs.core.chunk_first.call(null,seq__35096_35118__$1);
var G__35120 = cljs.core.chunk_rest.call(null,seq__35096_35118__$1);
var G__35121 = c__25571__auto___35119;
var G__35122 = cljs.core.count.call(null,c__25571__auto___35119);
var G__35123 = (0);
seq__35096_35106 = G__35120;
chunk__35097_35107 = G__35121;
count__35098_35108 = G__35122;
i__35099_35109 = G__35123;
continue;
} else {
var vec__35103_35124 = cljs.core.first.call(null,seq__35096_35118__$1);
var name_35125 = cljs.core.nth.call(null,vec__35103_35124,(0),null);
var value_35126 = cljs.core.nth.call(null,vec__35103_35124,(1),null);
domina.set_attr_BANG_.call(null,content,name_35125,value_35126);

var G__35127 = cljs.core.next.call(null,seq__35096_35118__$1);
var G__35128 = null;
var G__35129 = (0);
var G__35130 = (0);
seq__35096_35106 = G__35127;
chunk__35097_35107 = G__35128;
count__35098_35108 = G__35129;
i__35099_35109 = G__35130;
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
var seq__35135_35139 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35136_35140 = null;
var count__35137_35141 = (0);
var i__35138_35142 = (0);
while(true){
if((i__35138_35142 < count__35137_35141)){
var node_35143 = cljs.core._nth.call(null,chunk__35136_35140,i__35138_35142);
goog.dom.classes.add(node_35143,class$);

var G__35144 = seq__35135_35139;
var G__35145 = chunk__35136_35140;
var G__35146 = count__35137_35141;
var G__35147 = (i__35138_35142 + (1));
seq__35135_35139 = G__35144;
chunk__35136_35140 = G__35145;
count__35137_35141 = G__35146;
i__35138_35142 = G__35147;
continue;
} else {
var temp__4657__auto___35148 = cljs.core.seq.call(null,seq__35135_35139);
if(temp__4657__auto___35148){
var seq__35135_35149__$1 = temp__4657__auto___35148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35135_35149__$1)){
var c__25571__auto___35150 = cljs.core.chunk_first.call(null,seq__35135_35149__$1);
var G__35151 = cljs.core.chunk_rest.call(null,seq__35135_35149__$1);
var G__35152 = c__25571__auto___35150;
var G__35153 = cljs.core.count.call(null,c__25571__auto___35150);
var G__35154 = (0);
seq__35135_35139 = G__35151;
chunk__35136_35140 = G__35152;
count__35137_35141 = G__35153;
i__35138_35142 = G__35154;
continue;
} else {
var node_35155 = cljs.core.first.call(null,seq__35135_35149__$1);
goog.dom.classes.add(node_35155,class$);

var G__35156 = cljs.core.next.call(null,seq__35135_35149__$1);
var G__35157 = null;
var G__35158 = (0);
var G__35159 = (0);
seq__35135_35139 = G__35156;
chunk__35136_35140 = G__35157;
count__35137_35141 = G__35158;
i__35138_35142 = G__35159;
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
var seq__35164_35168 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35165_35169 = null;
var count__35166_35170 = (0);
var i__35167_35171 = (0);
while(true){
if((i__35167_35171 < count__35166_35170)){
var node_35172 = cljs.core._nth.call(null,chunk__35165_35169,i__35167_35171);
goog.dom.classes.remove(node_35172,class$);

var G__35173 = seq__35164_35168;
var G__35174 = chunk__35165_35169;
var G__35175 = count__35166_35170;
var G__35176 = (i__35167_35171 + (1));
seq__35164_35168 = G__35173;
chunk__35165_35169 = G__35174;
count__35166_35170 = G__35175;
i__35167_35171 = G__35176;
continue;
} else {
var temp__4657__auto___35177 = cljs.core.seq.call(null,seq__35164_35168);
if(temp__4657__auto___35177){
var seq__35164_35178__$1 = temp__4657__auto___35177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35164_35178__$1)){
var c__25571__auto___35179 = cljs.core.chunk_first.call(null,seq__35164_35178__$1);
var G__35180 = cljs.core.chunk_rest.call(null,seq__35164_35178__$1);
var G__35181 = c__25571__auto___35179;
var G__35182 = cljs.core.count.call(null,c__25571__auto___35179);
var G__35183 = (0);
seq__35164_35168 = G__35180;
chunk__35165_35169 = G__35181;
count__35166_35170 = G__35182;
i__35167_35171 = G__35183;
continue;
} else {
var node_35184 = cljs.core.first.call(null,seq__35164_35178__$1);
goog.dom.classes.remove(node_35184,class$);

var G__35185 = cljs.core.next.call(null,seq__35164_35178__$1);
var G__35186 = null;
var G__35187 = (0);
var G__35188 = (0);
seq__35164_35168 = G__35185;
chunk__35165_35169 = G__35186;
count__35166_35170 = G__35187;
i__35167_35171 = G__35188;
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
var seq__35193_35197 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35194_35198 = null;
var count__35195_35199 = (0);
var i__35196_35200 = (0);
while(true){
if((i__35196_35200 < count__35195_35199)){
var node_35201 = cljs.core._nth.call(null,chunk__35194_35198,i__35196_35200);
goog.dom.classes.toggle(node_35201,class$);

var G__35202 = seq__35193_35197;
var G__35203 = chunk__35194_35198;
var G__35204 = count__35195_35199;
var G__35205 = (i__35196_35200 + (1));
seq__35193_35197 = G__35202;
chunk__35194_35198 = G__35203;
count__35195_35199 = G__35204;
i__35196_35200 = G__35205;
continue;
} else {
var temp__4657__auto___35206 = cljs.core.seq.call(null,seq__35193_35197);
if(temp__4657__auto___35206){
var seq__35193_35207__$1 = temp__4657__auto___35206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35193_35207__$1)){
var c__25571__auto___35208 = cljs.core.chunk_first.call(null,seq__35193_35207__$1);
var G__35209 = cljs.core.chunk_rest.call(null,seq__35193_35207__$1);
var G__35210 = c__25571__auto___35208;
var G__35211 = cljs.core.count.call(null,c__25571__auto___35208);
var G__35212 = (0);
seq__35193_35197 = G__35209;
chunk__35194_35198 = G__35210;
count__35195_35199 = G__35211;
i__35196_35200 = G__35212;
continue;
} else {
var node_35213 = cljs.core.first.call(null,seq__35193_35207__$1);
goog.dom.classes.toggle(node_35213,class$);

var G__35214 = cljs.core.next.call(null,seq__35193_35207__$1);
var G__35215 = null;
var G__35216 = (0);
var G__35217 = (0);
seq__35193_35197 = G__35214;
chunk__35194_35198 = G__35215;
count__35195_35199 = G__35216;
i__35196_35200 = G__35217;
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
var classes_35226__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__35222_35227 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35223_35228 = null;
var count__35224_35229 = (0);
var i__35225_35230 = (0);
while(true){
if((i__35225_35230 < count__35224_35229)){
var node_35231 = cljs.core._nth.call(null,chunk__35223_35228,i__35225_35230);
goog.dom.classes.set(node_35231,classes_35226__$1);

var G__35232 = seq__35222_35227;
var G__35233 = chunk__35223_35228;
var G__35234 = count__35224_35229;
var G__35235 = (i__35225_35230 + (1));
seq__35222_35227 = G__35232;
chunk__35223_35228 = G__35233;
count__35224_35229 = G__35234;
i__35225_35230 = G__35235;
continue;
} else {
var temp__4657__auto___35236 = cljs.core.seq.call(null,seq__35222_35227);
if(temp__4657__auto___35236){
var seq__35222_35237__$1 = temp__4657__auto___35236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35222_35237__$1)){
var c__25571__auto___35238 = cljs.core.chunk_first.call(null,seq__35222_35237__$1);
var G__35239 = cljs.core.chunk_rest.call(null,seq__35222_35237__$1);
var G__35240 = c__25571__auto___35238;
var G__35241 = cljs.core.count.call(null,c__25571__auto___35238);
var G__35242 = (0);
seq__35222_35227 = G__35239;
chunk__35223_35228 = G__35240;
count__35224_35229 = G__35241;
i__35225_35230 = G__35242;
continue;
} else {
var node_35243 = cljs.core.first.call(null,seq__35222_35237__$1);
goog.dom.classes.set(node_35243,classes_35226__$1);

var G__35244 = cljs.core.next.call(null,seq__35222_35237__$1);
var G__35245 = null;
var G__35246 = (0);
var G__35247 = (0);
seq__35222_35227 = G__35244;
chunk__35223_35228 = G__35245;
count__35224_35229 = G__35246;
i__35225_35230 = G__35247;
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
var seq__35252_35256 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35253_35257 = null;
var count__35254_35258 = (0);
var i__35255_35259 = (0);
while(true){
if((i__35255_35259 < count__35254_35258)){
var node_35260 = cljs.core._nth.call(null,chunk__35253_35257,i__35255_35259);
goog.dom.setTextContent(node_35260,value);

var G__35261 = seq__35252_35256;
var G__35262 = chunk__35253_35257;
var G__35263 = count__35254_35258;
var G__35264 = (i__35255_35259 + (1));
seq__35252_35256 = G__35261;
chunk__35253_35257 = G__35262;
count__35254_35258 = G__35263;
i__35255_35259 = G__35264;
continue;
} else {
var temp__4657__auto___35265 = cljs.core.seq.call(null,seq__35252_35256);
if(temp__4657__auto___35265){
var seq__35252_35266__$1 = temp__4657__auto___35265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35252_35266__$1)){
var c__25571__auto___35267 = cljs.core.chunk_first.call(null,seq__35252_35266__$1);
var G__35268 = cljs.core.chunk_rest.call(null,seq__35252_35266__$1);
var G__35269 = c__25571__auto___35267;
var G__35270 = cljs.core.count.call(null,c__25571__auto___35267);
var G__35271 = (0);
seq__35252_35256 = G__35268;
chunk__35253_35257 = G__35269;
count__35254_35258 = G__35270;
i__35255_35259 = G__35271;
continue;
} else {
var node_35272 = cljs.core.first.call(null,seq__35252_35266__$1);
goog.dom.setTextContent(node_35272,value);

var G__35273 = cljs.core.next.call(null,seq__35252_35266__$1);
var G__35274 = null;
var G__35275 = (0);
var G__35276 = (0);
seq__35252_35256 = G__35273;
chunk__35253_35257 = G__35274;
count__35254_35258 = G__35275;
i__35255_35259 = G__35276;
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
var seq__35281_35285 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35282_35286 = null;
var count__35283_35287 = (0);
var i__35284_35288 = (0);
while(true){
if((i__35284_35288 < count__35283_35287)){
var node_35289 = cljs.core._nth.call(null,chunk__35282_35286,i__35284_35288);
goog.dom.forms.setValue(node_35289,value);

var G__35290 = seq__35281_35285;
var G__35291 = chunk__35282_35286;
var G__35292 = count__35283_35287;
var G__35293 = (i__35284_35288 + (1));
seq__35281_35285 = G__35290;
chunk__35282_35286 = G__35291;
count__35283_35287 = G__35292;
i__35284_35288 = G__35293;
continue;
} else {
var temp__4657__auto___35294 = cljs.core.seq.call(null,seq__35281_35285);
if(temp__4657__auto___35294){
var seq__35281_35295__$1 = temp__4657__auto___35294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35281_35295__$1)){
var c__25571__auto___35296 = cljs.core.chunk_first.call(null,seq__35281_35295__$1);
var G__35297 = cljs.core.chunk_rest.call(null,seq__35281_35295__$1);
var G__35298 = c__25571__auto___35296;
var G__35299 = cljs.core.count.call(null,c__25571__auto___35296);
var G__35300 = (0);
seq__35281_35285 = G__35297;
chunk__35282_35286 = G__35298;
count__35283_35287 = G__35299;
i__35284_35288 = G__35300;
continue;
} else {
var node_35301 = cljs.core.first.call(null,seq__35281_35295__$1);
goog.dom.forms.setValue(node_35301,value);

var G__35302 = cljs.core.next.call(null,seq__35281_35295__$1);
var G__35303 = null;
var G__35304 = (0);
var G__35305 = (0);
seq__35281_35285 = G__35302;
chunk__35282_35286 = G__35303;
count__35283_35287 = G__35304;
i__35284_35288 = G__35305;
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
var value_35316 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__35312_35317 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35313_35318 = null;
var count__35314_35319 = (0);
var i__35315_35320 = (0);
while(true){
if((i__35315_35320 < count__35314_35319)){
var node_35321 = cljs.core._nth.call(null,chunk__35313_35318,i__35315_35320);
node_35321.innerHTML = value_35316;

var G__35322 = seq__35312_35317;
var G__35323 = chunk__35313_35318;
var G__35324 = count__35314_35319;
var G__35325 = (i__35315_35320 + (1));
seq__35312_35317 = G__35322;
chunk__35313_35318 = G__35323;
count__35314_35319 = G__35324;
i__35315_35320 = G__35325;
continue;
} else {
var temp__4657__auto___35326 = cljs.core.seq.call(null,seq__35312_35317);
if(temp__4657__auto___35326){
var seq__35312_35327__$1 = temp__4657__auto___35326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35312_35327__$1)){
var c__25571__auto___35328 = cljs.core.chunk_first.call(null,seq__35312_35327__$1);
var G__35329 = cljs.core.chunk_rest.call(null,seq__35312_35327__$1);
var G__35330 = c__25571__auto___35328;
var G__35331 = cljs.core.count.call(null,c__25571__auto___35328);
var G__35332 = (0);
seq__35312_35317 = G__35329;
chunk__35313_35318 = G__35330;
count__35314_35319 = G__35331;
i__35315_35320 = G__35332;
continue;
} else {
var node_35333 = cljs.core.first.call(null,seq__35312_35327__$1);
node_35333.innerHTML = value_35316;

var G__35334 = cljs.core.next.call(null,seq__35312_35327__$1);
var G__35335 = null;
var G__35336 = (0);
var G__35337 = (0);
seq__35312_35317 = G__35334;
chunk__35313_35318 = G__35335;
count__35314_35319 = G__35336;
i__35315_35320 = G__35337;
continue;
}
} else {
}
}
break;
}
}catch (e35311){if((e35311 instanceof Error)){
var e_35338 = e35311;
domina.replace_children_BANG_.call(null,content,value_35316);
} else {
throw e35311;

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
var args35339 = [];
var len__25835__auto___35342 = arguments.length;
var i__25836__auto___35343 = (0);
while(true){
if((i__25836__auto___35343 < len__25835__auto___35342)){
args35339.push((arguments[i__25836__auto___35343]));

var G__35344 = (i__25836__auto___35343 + (1));
i__25836__auto___35343 = G__35344;
continue;
} else {
}
break;
}

var G__35341 = args35339.length;
switch (G__35341) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35339.length)].join('')));

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
var seq__35352_35356 = cljs.core.seq.call(null,children);
var chunk__35353_35357 = null;
var count__35354_35358 = (0);
var i__35355_35359 = (0);
while(true){
if((i__35355_35359 < count__35354_35358)){
var child_35360 = cljs.core._nth.call(null,chunk__35353_35357,i__35355_35359);
frag.appendChild(child_35360);

var G__35361 = seq__35352_35356;
var G__35362 = chunk__35353_35357;
var G__35363 = count__35354_35358;
var G__35364 = (i__35355_35359 + (1));
seq__35352_35356 = G__35361;
chunk__35353_35357 = G__35362;
count__35354_35358 = G__35363;
i__35355_35359 = G__35364;
continue;
} else {
var temp__4657__auto___35365 = cljs.core.seq.call(null,seq__35352_35356);
if(temp__4657__auto___35365){
var seq__35352_35366__$1 = temp__4657__auto___35365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35352_35366__$1)){
var c__25571__auto___35367 = cljs.core.chunk_first.call(null,seq__35352_35366__$1);
var G__35368 = cljs.core.chunk_rest.call(null,seq__35352_35366__$1);
var G__35369 = c__25571__auto___35367;
var G__35370 = cljs.core.count.call(null,c__25571__auto___35367);
var G__35371 = (0);
seq__35352_35356 = G__35368;
chunk__35353_35357 = G__35369;
count__35354_35358 = G__35370;
i__35355_35359 = G__35371;
continue;
} else {
var child_35372 = cljs.core.first.call(null,seq__35352_35366__$1);
frag.appendChild(child_35372);

var G__35373 = cljs.core.next.call(null,seq__35352_35366__$1);
var G__35374 = null;
var G__35375 = (0);
var G__35376 = (0);
seq__35352_35356 = G__35373;
chunk__35353_35357 = G__35374;
count__35354_35358 = G__35375;
i__35355_35359 = G__35376;
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
return (function (p1__35346_SHARP_,p2__35347_SHARP_){
return f.call(null,p1__35346_SHARP_,p2__35347_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args35377 = [];
var len__25835__auto___35380 = arguments.length;
var i__25836__auto___35381 = (0);
while(true){
if((i__25836__auto___35381 < len__25835__auto___35380)){
args35377.push((arguments[i__25836__auto___35381]));

var G__35382 = (i__25836__auto___35381 + (1));
i__25836__auto___35381 = G__35382;
continue;
} else {
}
break;
}

var G__35379 = args35377.length;
switch (G__35379) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35377.length)].join('')));

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
var args35384 = [];
var len__25835__auto___35387 = arguments.length;
var i__25836__auto___35388 = (0);
while(true){
if((i__25836__auto___35388 < len__25835__auto___35387)){
args35384.push((arguments[i__25836__auto___35388]));

var G__35389 = (i__25836__auto___35388 + (1));
i__25836__auto___35388 = G__35389;
continue;
} else {
}
break;
}

var G__35386 = args35384.length;
switch (G__35386) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35384.length)].join('')));

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

//# sourceMappingURL=domina.js.map?rel=1488930782159