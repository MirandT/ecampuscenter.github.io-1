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
var opt_wrapper_34889 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_34890 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_34891 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_34891,opt_wrapper_34889,table_section_wrapper_34890,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_34889,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_34890,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_34890,cell_wrapper_34891,table_section_wrapper_34890,table_section_wrapper_34890]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__24748__auto__ = div.firstChild;
if(cljs.core.truth_(and__24748__auto__)){
return div.firstChild.childNodes;
} else {
return and__24748__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__34896 = cljs.core.seq.call(null,tbody);
var chunk__34897 = null;
var count__34898 = (0);
var i__34899 = (0);
while(true){
if((i__34899 < count__34898)){
var child = cljs.core._nth.call(null,chunk__34897,i__34899);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__34900 = seq__34896;
var G__34901 = chunk__34897;
var G__34902 = count__34898;
var G__34903 = (i__34899 + (1));
seq__34896 = G__34900;
chunk__34897 = G__34901;
count__34898 = G__34902;
i__34899 = G__34903;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34896);
if(temp__4657__auto__){
var seq__34896__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34896__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__34896__$1);
var G__34904 = cljs.core.chunk_rest.call(null,seq__34896__$1);
var G__34905 = c__25571__auto__;
var G__34906 = cljs.core.count.call(null,c__25571__auto__);
var G__34907 = (0);
seq__34896 = G__34904;
chunk__34897 = G__34905;
count__34898 = G__34906;
i__34899 = G__34907;
continue;
} else {
var child = cljs.core.first.call(null,seq__34896__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__34908 = cljs.core.next.call(null,seq__34896__$1);
var G__34909 = null;
var G__34910 = (0);
var G__34911 = (0);
seq__34896 = G__34908;
chunk__34897 = G__34909;
count__34898 = G__34910;
i__34899 = G__34911;
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
var vec__34915 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__34915,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__34915,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__34915,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__34918 = wrapper.lastChild;
var G__34919 = (level - (1));
wrapper = G__34918;
level = G__34919;
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
var len__25835__auto___34921 = arguments.length;
var i__25836__auto___34922 = (0);
while(true){
if((i__25836__auto___34922 < len__25835__auto___34921)){
args__25842__auto__.push((arguments[i__25836__auto___34922]));

var G__34923 = (i__25836__auto___34922 + (1));
i__25836__auto___34922 = G__34923;
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

domina.log_debug.cljs$lang$applyTo = (function (seq34920){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34920));
});

domina.log = (function domina$log(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34925 = arguments.length;
var i__25836__auto___34926 = (0);
while(true){
if((i__25836__auto___34926 < len__25835__auto___34925)){
args__25842__auto__.push((arguments[i__25836__auto___34926]));

var G__34927 = (i__25836__auto___34926 + (1));
i__25836__auto___34926 = G__34927;
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

domina.log.cljs$lang$applyTo = (function (seq34924){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34924));
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
var len__25835__auto___34929 = arguments.length;
var i__25836__auto___34930 = (0);
while(true){
if((i__25836__auto___34930 < len__25835__auto___34929)){
args__25842__auto__.push((arguments[i__25836__auto___34930]));

var G__34931 = (i__25836__auto___34930 + (1));
i__25836__auto___34930 = G__34931;
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

domina.common_ancestor.cljs$lang$applyTo = (function (seq34928){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34928));
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
return cljs.core.map.call(null,(function (p1__34932_SHARP_){
return p1__34932_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__34933_SHARP_,p2__34934_SHARP_){
return goog.dom.insertChildAt(p1__34933_SHARP_,p2__34934_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__34936_SHARP_,p2__34935_SHARP_){
return goog.dom.insertSiblingBefore(p2__34935_SHARP_,p1__34936_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__34938_SHARP_,p2__34937_SHARP_){
return goog.dom.insertSiblingAfter(p2__34937_SHARP_,p1__34938_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__34940_SHARP_,p2__34939_SHARP_){
return goog.dom.replaceNode(p2__34939_SHARP_,p1__34940_SHARP_);
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
var len__25835__auto___34948 = arguments.length;
var i__25836__auto___34949 = (0);
while(true){
if((i__25836__auto___34949 < len__25835__auto___34948)){
args__25842__auto__.push((arguments[i__25836__auto___34949]));

var G__34950 = (i__25836__auto___34949 + (1));
i__25836__auto___34949 = G__34950;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__34944_34951 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34945_34952 = null;
var count__34946_34953 = (0);
var i__34947_34954 = (0);
while(true){
if((i__34947_34954 < count__34946_34953)){
var n_34955 = cljs.core._nth.call(null,chunk__34945_34952,i__34947_34954);
goog.style.setStyle(n_34955,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34956 = seq__34944_34951;
var G__34957 = chunk__34945_34952;
var G__34958 = count__34946_34953;
var G__34959 = (i__34947_34954 + (1));
seq__34944_34951 = G__34956;
chunk__34945_34952 = G__34957;
count__34946_34953 = G__34958;
i__34947_34954 = G__34959;
continue;
} else {
var temp__4657__auto___34960 = cljs.core.seq.call(null,seq__34944_34951);
if(temp__4657__auto___34960){
var seq__34944_34961__$1 = temp__4657__auto___34960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34944_34961__$1)){
var c__25571__auto___34962 = cljs.core.chunk_first.call(null,seq__34944_34961__$1);
var G__34963 = cljs.core.chunk_rest.call(null,seq__34944_34961__$1);
var G__34964 = c__25571__auto___34962;
var G__34965 = cljs.core.count.call(null,c__25571__auto___34962);
var G__34966 = (0);
seq__34944_34951 = G__34963;
chunk__34945_34952 = G__34964;
count__34946_34953 = G__34965;
i__34947_34954 = G__34966;
continue;
} else {
var n_34967 = cljs.core.first.call(null,seq__34944_34961__$1);
goog.style.setStyle(n_34967,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34968 = cljs.core.next.call(null,seq__34944_34961__$1);
var G__34969 = null;
var G__34970 = (0);
var G__34971 = (0);
seq__34944_34951 = G__34968;
chunk__34945_34952 = G__34969;
count__34946_34953 = G__34970;
i__34947_34954 = G__34971;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq34941){
var G__34942 = cljs.core.first.call(null,seq34941);
var seq34941__$1 = cljs.core.next.call(null,seq34941);
var G__34943 = cljs.core.first.call(null,seq34941__$1);
var seq34941__$2 = cljs.core.next.call(null,seq34941__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34942,G__34943,seq34941__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34979 = arguments.length;
var i__25836__auto___34980 = (0);
while(true){
if((i__25836__auto___34980 < len__25835__auto___34979)){
args__25842__auto__.push((arguments[i__25836__auto___34980]));

var G__34981 = (i__25836__auto___34980 + (1));
i__25836__auto___34980 = G__34981;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__34975_34982 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34976_34983 = null;
var count__34977_34984 = (0);
var i__34978_34985 = (0);
while(true){
if((i__34978_34985 < count__34977_34984)){
var n_34986 = cljs.core._nth.call(null,chunk__34976_34983,i__34978_34985);
n_34986.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34987 = seq__34975_34982;
var G__34988 = chunk__34976_34983;
var G__34989 = count__34977_34984;
var G__34990 = (i__34978_34985 + (1));
seq__34975_34982 = G__34987;
chunk__34976_34983 = G__34988;
count__34977_34984 = G__34989;
i__34978_34985 = G__34990;
continue;
} else {
var temp__4657__auto___34991 = cljs.core.seq.call(null,seq__34975_34982);
if(temp__4657__auto___34991){
var seq__34975_34992__$1 = temp__4657__auto___34991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34975_34992__$1)){
var c__25571__auto___34993 = cljs.core.chunk_first.call(null,seq__34975_34992__$1);
var G__34994 = cljs.core.chunk_rest.call(null,seq__34975_34992__$1);
var G__34995 = c__25571__auto___34993;
var G__34996 = cljs.core.count.call(null,c__25571__auto___34993);
var G__34997 = (0);
seq__34975_34982 = G__34994;
chunk__34976_34983 = G__34995;
count__34977_34984 = G__34996;
i__34978_34985 = G__34997;
continue;
} else {
var n_34998 = cljs.core.first.call(null,seq__34975_34992__$1);
n_34998.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__34999 = cljs.core.next.call(null,seq__34975_34992__$1);
var G__35000 = null;
var G__35001 = (0);
var G__35002 = (0);
seq__34975_34982 = G__34999;
chunk__34976_34983 = G__35000;
count__34977_34984 = G__35001;
i__34978_34985 = G__35002;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq34972){
var G__34973 = cljs.core.first.call(null,seq34972);
var seq34972__$1 = cljs.core.next.call(null,seq34972);
var G__34974 = cljs.core.first.call(null,seq34972__$1);
var seq34972__$2 = cljs.core.next.call(null,seq34972__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34973,G__34974,seq34972__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__35007_35011 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35008_35012 = null;
var count__35009_35013 = (0);
var i__35010_35014 = (0);
while(true){
if((i__35010_35014 < count__35009_35013)){
var n_35015 = cljs.core._nth.call(null,chunk__35008_35012,i__35010_35014);
n_35015.removeAttribute(cljs.core.name.call(null,name));

var G__35016 = seq__35007_35011;
var G__35017 = chunk__35008_35012;
var G__35018 = count__35009_35013;
var G__35019 = (i__35010_35014 + (1));
seq__35007_35011 = G__35016;
chunk__35008_35012 = G__35017;
count__35009_35013 = G__35018;
i__35010_35014 = G__35019;
continue;
} else {
var temp__4657__auto___35020 = cljs.core.seq.call(null,seq__35007_35011);
if(temp__4657__auto___35020){
var seq__35007_35021__$1 = temp__4657__auto___35020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35007_35021__$1)){
var c__25571__auto___35022 = cljs.core.chunk_first.call(null,seq__35007_35021__$1);
var G__35023 = cljs.core.chunk_rest.call(null,seq__35007_35021__$1);
var G__35024 = c__25571__auto___35022;
var G__35025 = cljs.core.count.call(null,c__25571__auto___35022);
var G__35026 = (0);
seq__35007_35011 = G__35023;
chunk__35008_35012 = G__35024;
count__35009_35013 = G__35025;
i__35010_35014 = G__35026;
continue;
} else {
var n_35027 = cljs.core.first.call(null,seq__35007_35021__$1);
n_35027.removeAttribute(cljs.core.name.call(null,name));

var G__35028 = cljs.core.next.call(null,seq__35007_35021__$1);
var G__35029 = null;
var G__35030 = (0);
var G__35031 = (0);
seq__35007_35011 = G__35028;
chunk__35008_35012 = G__35029;
count__35009_35013 = G__35030;
i__35010_35014 = G__35031;
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
var vec__35035 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__35035,(0),null);
var v = cljs.core.nth.call(null,vec__35035,(1),null);
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
return (function (p1__35038_SHARP_){
var attr = attrs__$1.item(p1__35038_SHARP_);
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
var seq__35049_35059 = cljs.core.seq.call(null,styles);
var chunk__35050_35060 = null;
var count__35051_35061 = (0);
var i__35052_35062 = (0);
while(true){
if((i__35052_35062 < count__35051_35061)){
var vec__35053_35063 = cljs.core._nth.call(null,chunk__35050_35060,i__35052_35062);
var name_35064 = cljs.core.nth.call(null,vec__35053_35063,(0),null);
var value_35065 = cljs.core.nth.call(null,vec__35053_35063,(1),null);
domina.set_style_BANG_.call(null,content,name_35064,value_35065);

var G__35066 = seq__35049_35059;
var G__35067 = chunk__35050_35060;
var G__35068 = count__35051_35061;
var G__35069 = (i__35052_35062 + (1));
seq__35049_35059 = G__35066;
chunk__35050_35060 = G__35067;
count__35051_35061 = G__35068;
i__35052_35062 = G__35069;
continue;
} else {
var temp__4657__auto___35070 = cljs.core.seq.call(null,seq__35049_35059);
if(temp__4657__auto___35070){
var seq__35049_35071__$1 = temp__4657__auto___35070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35049_35071__$1)){
var c__25571__auto___35072 = cljs.core.chunk_first.call(null,seq__35049_35071__$1);
var G__35073 = cljs.core.chunk_rest.call(null,seq__35049_35071__$1);
var G__35074 = c__25571__auto___35072;
var G__35075 = cljs.core.count.call(null,c__25571__auto___35072);
var G__35076 = (0);
seq__35049_35059 = G__35073;
chunk__35050_35060 = G__35074;
count__35051_35061 = G__35075;
i__35052_35062 = G__35076;
continue;
} else {
var vec__35056_35077 = cljs.core.first.call(null,seq__35049_35071__$1);
var name_35078 = cljs.core.nth.call(null,vec__35056_35077,(0),null);
var value_35079 = cljs.core.nth.call(null,vec__35056_35077,(1),null);
domina.set_style_BANG_.call(null,content,name_35078,value_35079);

var G__35080 = cljs.core.next.call(null,seq__35049_35071__$1);
var G__35081 = null;
var G__35082 = (0);
var G__35083 = (0);
seq__35049_35059 = G__35080;
chunk__35050_35060 = G__35081;
count__35051_35061 = G__35082;
i__35052_35062 = G__35083;
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
var seq__35094_35104 = cljs.core.seq.call(null,attrs);
var chunk__35095_35105 = null;
var count__35096_35106 = (0);
var i__35097_35107 = (0);
while(true){
if((i__35097_35107 < count__35096_35106)){
var vec__35098_35108 = cljs.core._nth.call(null,chunk__35095_35105,i__35097_35107);
var name_35109 = cljs.core.nth.call(null,vec__35098_35108,(0),null);
var value_35110 = cljs.core.nth.call(null,vec__35098_35108,(1),null);
domina.set_attr_BANG_.call(null,content,name_35109,value_35110);

var G__35111 = seq__35094_35104;
var G__35112 = chunk__35095_35105;
var G__35113 = count__35096_35106;
var G__35114 = (i__35097_35107 + (1));
seq__35094_35104 = G__35111;
chunk__35095_35105 = G__35112;
count__35096_35106 = G__35113;
i__35097_35107 = G__35114;
continue;
} else {
var temp__4657__auto___35115 = cljs.core.seq.call(null,seq__35094_35104);
if(temp__4657__auto___35115){
var seq__35094_35116__$1 = temp__4657__auto___35115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35094_35116__$1)){
var c__25571__auto___35117 = cljs.core.chunk_first.call(null,seq__35094_35116__$1);
var G__35118 = cljs.core.chunk_rest.call(null,seq__35094_35116__$1);
var G__35119 = c__25571__auto___35117;
var G__35120 = cljs.core.count.call(null,c__25571__auto___35117);
var G__35121 = (0);
seq__35094_35104 = G__35118;
chunk__35095_35105 = G__35119;
count__35096_35106 = G__35120;
i__35097_35107 = G__35121;
continue;
} else {
var vec__35101_35122 = cljs.core.first.call(null,seq__35094_35116__$1);
var name_35123 = cljs.core.nth.call(null,vec__35101_35122,(0),null);
var value_35124 = cljs.core.nth.call(null,vec__35101_35122,(1),null);
domina.set_attr_BANG_.call(null,content,name_35123,value_35124);

var G__35125 = cljs.core.next.call(null,seq__35094_35116__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__35094_35104 = G__35125;
chunk__35095_35105 = G__35126;
count__35096_35106 = G__35127;
i__35097_35107 = G__35128;
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
var seq__35133_35137 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35134_35138 = null;
var count__35135_35139 = (0);
var i__35136_35140 = (0);
while(true){
if((i__35136_35140 < count__35135_35139)){
var node_35141 = cljs.core._nth.call(null,chunk__35134_35138,i__35136_35140);
goog.dom.classes.add(node_35141,class$);

var G__35142 = seq__35133_35137;
var G__35143 = chunk__35134_35138;
var G__35144 = count__35135_35139;
var G__35145 = (i__35136_35140 + (1));
seq__35133_35137 = G__35142;
chunk__35134_35138 = G__35143;
count__35135_35139 = G__35144;
i__35136_35140 = G__35145;
continue;
} else {
var temp__4657__auto___35146 = cljs.core.seq.call(null,seq__35133_35137);
if(temp__4657__auto___35146){
var seq__35133_35147__$1 = temp__4657__auto___35146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35133_35147__$1)){
var c__25571__auto___35148 = cljs.core.chunk_first.call(null,seq__35133_35147__$1);
var G__35149 = cljs.core.chunk_rest.call(null,seq__35133_35147__$1);
var G__35150 = c__25571__auto___35148;
var G__35151 = cljs.core.count.call(null,c__25571__auto___35148);
var G__35152 = (0);
seq__35133_35137 = G__35149;
chunk__35134_35138 = G__35150;
count__35135_35139 = G__35151;
i__35136_35140 = G__35152;
continue;
} else {
var node_35153 = cljs.core.first.call(null,seq__35133_35147__$1);
goog.dom.classes.add(node_35153,class$);

var G__35154 = cljs.core.next.call(null,seq__35133_35147__$1);
var G__35155 = null;
var G__35156 = (0);
var G__35157 = (0);
seq__35133_35137 = G__35154;
chunk__35134_35138 = G__35155;
count__35135_35139 = G__35156;
i__35136_35140 = G__35157;
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
var seq__35162_35166 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35163_35167 = null;
var count__35164_35168 = (0);
var i__35165_35169 = (0);
while(true){
if((i__35165_35169 < count__35164_35168)){
var node_35170 = cljs.core._nth.call(null,chunk__35163_35167,i__35165_35169);
goog.dom.classes.remove(node_35170,class$);

var G__35171 = seq__35162_35166;
var G__35172 = chunk__35163_35167;
var G__35173 = count__35164_35168;
var G__35174 = (i__35165_35169 + (1));
seq__35162_35166 = G__35171;
chunk__35163_35167 = G__35172;
count__35164_35168 = G__35173;
i__35165_35169 = G__35174;
continue;
} else {
var temp__4657__auto___35175 = cljs.core.seq.call(null,seq__35162_35166);
if(temp__4657__auto___35175){
var seq__35162_35176__$1 = temp__4657__auto___35175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35162_35176__$1)){
var c__25571__auto___35177 = cljs.core.chunk_first.call(null,seq__35162_35176__$1);
var G__35178 = cljs.core.chunk_rest.call(null,seq__35162_35176__$1);
var G__35179 = c__25571__auto___35177;
var G__35180 = cljs.core.count.call(null,c__25571__auto___35177);
var G__35181 = (0);
seq__35162_35166 = G__35178;
chunk__35163_35167 = G__35179;
count__35164_35168 = G__35180;
i__35165_35169 = G__35181;
continue;
} else {
var node_35182 = cljs.core.first.call(null,seq__35162_35176__$1);
goog.dom.classes.remove(node_35182,class$);

var G__35183 = cljs.core.next.call(null,seq__35162_35176__$1);
var G__35184 = null;
var G__35185 = (0);
var G__35186 = (0);
seq__35162_35166 = G__35183;
chunk__35163_35167 = G__35184;
count__35164_35168 = G__35185;
i__35165_35169 = G__35186;
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
var seq__35191_35195 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35192_35196 = null;
var count__35193_35197 = (0);
var i__35194_35198 = (0);
while(true){
if((i__35194_35198 < count__35193_35197)){
var node_35199 = cljs.core._nth.call(null,chunk__35192_35196,i__35194_35198);
goog.dom.classes.toggle(node_35199,class$);

var G__35200 = seq__35191_35195;
var G__35201 = chunk__35192_35196;
var G__35202 = count__35193_35197;
var G__35203 = (i__35194_35198 + (1));
seq__35191_35195 = G__35200;
chunk__35192_35196 = G__35201;
count__35193_35197 = G__35202;
i__35194_35198 = G__35203;
continue;
} else {
var temp__4657__auto___35204 = cljs.core.seq.call(null,seq__35191_35195);
if(temp__4657__auto___35204){
var seq__35191_35205__$1 = temp__4657__auto___35204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35191_35205__$1)){
var c__25571__auto___35206 = cljs.core.chunk_first.call(null,seq__35191_35205__$1);
var G__35207 = cljs.core.chunk_rest.call(null,seq__35191_35205__$1);
var G__35208 = c__25571__auto___35206;
var G__35209 = cljs.core.count.call(null,c__25571__auto___35206);
var G__35210 = (0);
seq__35191_35195 = G__35207;
chunk__35192_35196 = G__35208;
count__35193_35197 = G__35209;
i__35194_35198 = G__35210;
continue;
} else {
var node_35211 = cljs.core.first.call(null,seq__35191_35205__$1);
goog.dom.classes.toggle(node_35211,class$);

var G__35212 = cljs.core.next.call(null,seq__35191_35205__$1);
var G__35213 = null;
var G__35214 = (0);
var G__35215 = (0);
seq__35191_35195 = G__35212;
chunk__35192_35196 = G__35213;
count__35193_35197 = G__35214;
i__35194_35198 = G__35215;
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
var classes_35224__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__35220_35225 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35221_35226 = null;
var count__35222_35227 = (0);
var i__35223_35228 = (0);
while(true){
if((i__35223_35228 < count__35222_35227)){
var node_35229 = cljs.core._nth.call(null,chunk__35221_35226,i__35223_35228);
goog.dom.classes.set(node_35229,classes_35224__$1);

var G__35230 = seq__35220_35225;
var G__35231 = chunk__35221_35226;
var G__35232 = count__35222_35227;
var G__35233 = (i__35223_35228 + (1));
seq__35220_35225 = G__35230;
chunk__35221_35226 = G__35231;
count__35222_35227 = G__35232;
i__35223_35228 = G__35233;
continue;
} else {
var temp__4657__auto___35234 = cljs.core.seq.call(null,seq__35220_35225);
if(temp__4657__auto___35234){
var seq__35220_35235__$1 = temp__4657__auto___35234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35220_35235__$1)){
var c__25571__auto___35236 = cljs.core.chunk_first.call(null,seq__35220_35235__$1);
var G__35237 = cljs.core.chunk_rest.call(null,seq__35220_35235__$1);
var G__35238 = c__25571__auto___35236;
var G__35239 = cljs.core.count.call(null,c__25571__auto___35236);
var G__35240 = (0);
seq__35220_35225 = G__35237;
chunk__35221_35226 = G__35238;
count__35222_35227 = G__35239;
i__35223_35228 = G__35240;
continue;
} else {
var node_35241 = cljs.core.first.call(null,seq__35220_35235__$1);
goog.dom.classes.set(node_35241,classes_35224__$1);

var G__35242 = cljs.core.next.call(null,seq__35220_35235__$1);
var G__35243 = null;
var G__35244 = (0);
var G__35245 = (0);
seq__35220_35225 = G__35242;
chunk__35221_35226 = G__35243;
count__35222_35227 = G__35244;
i__35223_35228 = G__35245;
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
var seq__35250_35254 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35251_35255 = null;
var count__35252_35256 = (0);
var i__35253_35257 = (0);
while(true){
if((i__35253_35257 < count__35252_35256)){
var node_35258 = cljs.core._nth.call(null,chunk__35251_35255,i__35253_35257);
goog.dom.setTextContent(node_35258,value);

var G__35259 = seq__35250_35254;
var G__35260 = chunk__35251_35255;
var G__35261 = count__35252_35256;
var G__35262 = (i__35253_35257 + (1));
seq__35250_35254 = G__35259;
chunk__35251_35255 = G__35260;
count__35252_35256 = G__35261;
i__35253_35257 = G__35262;
continue;
} else {
var temp__4657__auto___35263 = cljs.core.seq.call(null,seq__35250_35254);
if(temp__4657__auto___35263){
var seq__35250_35264__$1 = temp__4657__auto___35263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35250_35264__$1)){
var c__25571__auto___35265 = cljs.core.chunk_first.call(null,seq__35250_35264__$1);
var G__35266 = cljs.core.chunk_rest.call(null,seq__35250_35264__$1);
var G__35267 = c__25571__auto___35265;
var G__35268 = cljs.core.count.call(null,c__25571__auto___35265);
var G__35269 = (0);
seq__35250_35254 = G__35266;
chunk__35251_35255 = G__35267;
count__35252_35256 = G__35268;
i__35253_35257 = G__35269;
continue;
} else {
var node_35270 = cljs.core.first.call(null,seq__35250_35264__$1);
goog.dom.setTextContent(node_35270,value);

var G__35271 = cljs.core.next.call(null,seq__35250_35264__$1);
var G__35272 = null;
var G__35273 = (0);
var G__35274 = (0);
seq__35250_35254 = G__35271;
chunk__35251_35255 = G__35272;
count__35252_35256 = G__35273;
i__35253_35257 = G__35274;
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
var seq__35279_35283 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35280_35284 = null;
var count__35281_35285 = (0);
var i__35282_35286 = (0);
while(true){
if((i__35282_35286 < count__35281_35285)){
var node_35287 = cljs.core._nth.call(null,chunk__35280_35284,i__35282_35286);
goog.dom.forms.setValue(node_35287,value);

var G__35288 = seq__35279_35283;
var G__35289 = chunk__35280_35284;
var G__35290 = count__35281_35285;
var G__35291 = (i__35282_35286 + (1));
seq__35279_35283 = G__35288;
chunk__35280_35284 = G__35289;
count__35281_35285 = G__35290;
i__35282_35286 = G__35291;
continue;
} else {
var temp__4657__auto___35292 = cljs.core.seq.call(null,seq__35279_35283);
if(temp__4657__auto___35292){
var seq__35279_35293__$1 = temp__4657__auto___35292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35279_35293__$1)){
var c__25571__auto___35294 = cljs.core.chunk_first.call(null,seq__35279_35293__$1);
var G__35295 = cljs.core.chunk_rest.call(null,seq__35279_35293__$1);
var G__35296 = c__25571__auto___35294;
var G__35297 = cljs.core.count.call(null,c__25571__auto___35294);
var G__35298 = (0);
seq__35279_35283 = G__35295;
chunk__35280_35284 = G__35296;
count__35281_35285 = G__35297;
i__35282_35286 = G__35298;
continue;
} else {
var node_35299 = cljs.core.first.call(null,seq__35279_35293__$1);
goog.dom.forms.setValue(node_35299,value);

var G__35300 = cljs.core.next.call(null,seq__35279_35293__$1);
var G__35301 = null;
var G__35302 = (0);
var G__35303 = (0);
seq__35279_35283 = G__35300;
chunk__35280_35284 = G__35301;
count__35281_35285 = G__35302;
i__35282_35286 = G__35303;
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
var value_35314 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__35310_35315 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__35311_35316 = null;
var count__35312_35317 = (0);
var i__35313_35318 = (0);
while(true){
if((i__35313_35318 < count__35312_35317)){
var node_35319 = cljs.core._nth.call(null,chunk__35311_35316,i__35313_35318);
node_35319.innerHTML = value_35314;

var G__35320 = seq__35310_35315;
var G__35321 = chunk__35311_35316;
var G__35322 = count__35312_35317;
var G__35323 = (i__35313_35318 + (1));
seq__35310_35315 = G__35320;
chunk__35311_35316 = G__35321;
count__35312_35317 = G__35322;
i__35313_35318 = G__35323;
continue;
} else {
var temp__4657__auto___35324 = cljs.core.seq.call(null,seq__35310_35315);
if(temp__4657__auto___35324){
var seq__35310_35325__$1 = temp__4657__auto___35324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35310_35325__$1)){
var c__25571__auto___35326 = cljs.core.chunk_first.call(null,seq__35310_35325__$1);
var G__35327 = cljs.core.chunk_rest.call(null,seq__35310_35325__$1);
var G__35328 = c__25571__auto___35326;
var G__35329 = cljs.core.count.call(null,c__25571__auto___35326);
var G__35330 = (0);
seq__35310_35315 = G__35327;
chunk__35311_35316 = G__35328;
count__35312_35317 = G__35329;
i__35313_35318 = G__35330;
continue;
} else {
var node_35331 = cljs.core.first.call(null,seq__35310_35325__$1);
node_35331.innerHTML = value_35314;

var G__35332 = cljs.core.next.call(null,seq__35310_35325__$1);
var G__35333 = null;
var G__35334 = (0);
var G__35335 = (0);
seq__35310_35315 = G__35332;
chunk__35311_35316 = G__35333;
count__35312_35317 = G__35334;
i__35313_35318 = G__35335;
continue;
}
} else {
}
}
break;
}
}catch (e35309){if((e35309 instanceof Error)){
var e_35336 = e35309;
domina.replace_children_BANG_.call(null,content,value_35314);
} else {
throw e35309;

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
var args35337 = [];
var len__25835__auto___35340 = arguments.length;
var i__25836__auto___35341 = (0);
while(true){
if((i__25836__auto___35341 < len__25835__auto___35340)){
args35337.push((arguments[i__25836__auto___35341]));

var G__35342 = (i__25836__auto___35341 + (1));
i__25836__auto___35341 = G__35342;
continue;
} else {
}
break;
}

var G__35339 = args35337.length;
switch (G__35339) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35337.length)].join('')));

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
var seq__35350_35354 = cljs.core.seq.call(null,children);
var chunk__35351_35355 = null;
var count__35352_35356 = (0);
var i__35353_35357 = (0);
while(true){
if((i__35353_35357 < count__35352_35356)){
var child_35358 = cljs.core._nth.call(null,chunk__35351_35355,i__35353_35357);
frag.appendChild(child_35358);

var G__35359 = seq__35350_35354;
var G__35360 = chunk__35351_35355;
var G__35361 = count__35352_35356;
var G__35362 = (i__35353_35357 + (1));
seq__35350_35354 = G__35359;
chunk__35351_35355 = G__35360;
count__35352_35356 = G__35361;
i__35353_35357 = G__35362;
continue;
} else {
var temp__4657__auto___35363 = cljs.core.seq.call(null,seq__35350_35354);
if(temp__4657__auto___35363){
var seq__35350_35364__$1 = temp__4657__auto___35363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35350_35364__$1)){
var c__25571__auto___35365 = cljs.core.chunk_first.call(null,seq__35350_35364__$1);
var G__35366 = cljs.core.chunk_rest.call(null,seq__35350_35364__$1);
var G__35367 = c__25571__auto___35365;
var G__35368 = cljs.core.count.call(null,c__25571__auto___35365);
var G__35369 = (0);
seq__35350_35354 = G__35366;
chunk__35351_35355 = G__35367;
count__35352_35356 = G__35368;
i__35353_35357 = G__35369;
continue;
} else {
var child_35370 = cljs.core.first.call(null,seq__35350_35364__$1);
frag.appendChild(child_35370);

var G__35371 = cljs.core.next.call(null,seq__35350_35364__$1);
var G__35372 = null;
var G__35373 = (0);
var G__35374 = (0);
seq__35350_35354 = G__35371;
chunk__35351_35355 = G__35372;
count__35352_35356 = G__35373;
i__35353_35357 = G__35374;
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
return (function (p1__35344_SHARP_,p2__35345_SHARP_){
return f.call(null,p1__35344_SHARP_,p2__35345_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args35375 = [];
var len__25835__auto___35378 = arguments.length;
var i__25836__auto___35379 = (0);
while(true){
if((i__25836__auto___35379 < len__25835__auto___35378)){
args35375.push((arguments[i__25836__auto___35379]));

var G__35380 = (i__25836__auto___35379 + (1));
i__25836__auto___35379 = G__35380;
continue;
} else {
}
break;
}

var G__35377 = args35375.length;
switch (G__35377) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35375.length)].join('')));

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
var args35382 = [];
var len__25835__auto___35385 = arguments.length;
var i__25836__auto___35386 = (0);
while(true){
if((i__25836__auto___35386 < len__25835__auto___35385)){
args35382.push((arguments[i__25836__auto___35386]));

var G__35387 = (i__25836__auto___35386 + (1));
i__25836__auto___35386 = G__35387;
continue;
} else {
}
break;
}

var G__35384 = args35382.length;
switch (G__35384) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35382.length)].join('')));

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

//# sourceMappingURL=domina.js.map?rel=1475267981249