// Compiled by ClojureScript 1.9.229 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__24760__auto__ = elem.textContent;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args35493 = [];
var len__25835__auto___35496 = arguments.length;
var i__25836__auto___35497 = (0);
while(true){
if((i__25836__auto___35497 < len__25835__auto___35496)){
args35493.push((arguments[i__25836__auto___35497]));

var G__35498 = (i__25836__auto___35497 + (1));
i__25836__auto___35497 = G__35498;
continue;
} else {
}
break;
}

var G__35495 = args35493.length;
switch (G__35495) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35493.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args35500 = [];
var len__25835__auto___35503 = arguments.length;
var i__25836__auto___35504 = (0);
while(true){
if((i__25836__auto___35504 < len__25835__auto___35503)){
args35500.push((arguments[i__25836__auto___35504]));

var G__35505 = (i__25836__auto___35504 + (1));
i__25836__auto___35504 = G__35505;
continue;
} else {
}
break;
}

var G__35502 = args35500.length;
switch (G__35502) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35500.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args35508 = [];
var len__25835__auto___35511 = arguments.length;
var i__25836__auto___35512 = (0);
while(true){
if((i__25836__auto___35512 < len__25835__auto___35511)){
args35508.push((arguments[i__25836__auto___35512]));

var G__35513 = (i__25836__auto___35512 + (1));
i__25836__auto___35512 = G__35513;
continue;
} else {
}
break;
}

var G__35510 = args35508.length;
switch (G__35510) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35508.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__35507_SHARP_){
return !((p1__35507_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___35527 = arguments.length;
var i__25836__auto___35528 = (0);
while(true){
if((i__25836__auto___35528 < len__25835__auto___35527)){
args__25842__auto__.push((arguments[i__25836__auto___35528]));

var G__35529 = (i__25836__auto___35528 + (1));
i__25836__auto___35528 = G__35529;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__35517_35530 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__35518_35531 = null;
var count__35519_35532 = (0);
var i__35520_35533 = (0);
while(true){
if((i__35520_35533 < count__35519_35532)){
var vec__35521_35534 = cljs.core._nth.call(null,chunk__35518_35531,i__35520_35533);
var k_35535 = cljs.core.nth.call(null,vec__35521_35534,(0),null);
var v_35536 = cljs.core.nth.call(null,vec__35521_35534,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_35535),v_35536);

var G__35537 = seq__35517_35530;
var G__35538 = chunk__35518_35531;
var G__35539 = count__35519_35532;
var G__35540 = (i__35520_35533 + (1));
seq__35517_35530 = G__35537;
chunk__35518_35531 = G__35538;
count__35519_35532 = G__35539;
i__35520_35533 = G__35540;
continue;
} else {
var temp__4657__auto___35541 = cljs.core.seq.call(null,seq__35517_35530);
if(temp__4657__auto___35541){
var seq__35517_35542__$1 = temp__4657__auto___35541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35517_35542__$1)){
var c__25571__auto___35543 = cljs.core.chunk_first.call(null,seq__35517_35542__$1);
var G__35544 = cljs.core.chunk_rest.call(null,seq__35517_35542__$1);
var G__35545 = c__25571__auto___35543;
var G__35546 = cljs.core.count.call(null,c__25571__auto___35543);
var G__35547 = (0);
seq__35517_35530 = G__35544;
chunk__35518_35531 = G__35545;
count__35519_35532 = G__35546;
i__35520_35533 = G__35547;
continue;
} else {
var vec__35524_35548 = cljs.core.first.call(null,seq__35517_35542__$1);
var k_35549 = cljs.core.nth.call(null,vec__35524_35548,(0),null);
var v_35550 = cljs.core.nth.call(null,vec__35524_35548,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_35549),v_35550);

var G__35551 = cljs.core.next.call(null,seq__35517_35542__$1);
var G__35552 = null;
var G__35553 = (0);
var G__35554 = (0);
seq__35517_35530 = G__35551;
chunk__35518_35531 = G__35552;
count__35519_35532 = G__35553;
i__35520_35533 = G__35554;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq35515){
var G__35516 = cljs.core.first.call(null,seq35515);
var seq35515__$1 = cljs.core.next.call(null,seq35515);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35516,seq35515__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___35561 = arguments.length;
var i__25836__auto___35562 = (0);
while(true){
if((i__25836__auto___35562 < len__25835__auto___35561)){
args__25842__auto__.push((arguments[i__25836__auto___35562]));

var G__35563 = (i__25836__auto___35562 + (1));
i__25836__auto___35562 = G__35563;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__35557_35564 = cljs.core.seq.call(null,keywords);
var chunk__35558_35565 = null;
var count__35559_35566 = (0);
var i__35560_35567 = (0);
while(true){
if((i__35560_35567 < count__35559_35566)){
var kw_35568 = cljs.core._nth.call(null,chunk__35558_35565,i__35560_35567);
style.removeProperty(dommy.utils.as_str.call(null,kw_35568));

var G__35569 = seq__35557_35564;
var G__35570 = chunk__35558_35565;
var G__35571 = count__35559_35566;
var G__35572 = (i__35560_35567 + (1));
seq__35557_35564 = G__35569;
chunk__35558_35565 = G__35570;
count__35559_35566 = G__35571;
i__35560_35567 = G__35572;
continue;
} else {
var temp__4657__auto___35573 = cljs.core.seq.call(null,seq__35557_35564);
if(temp__4657__auto___35573){
var seq__35557_35574__$1 = temp__4657__auto___35573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35557_35574__$1)){
var c__25571__auto___35575 = cljs.core.chunk_first.call(null,seq__35557_35574__$1);
var G__35576 = cljs.core.chunk_rest.call(null,seq__35557_35574__$1);
var G__35577 = c__25571__auto___35575;
var G__35578 = cljs.core.count.call(null,c__25571__auto___35575);
var G__35579 = (0);
seq__35557_35564 = G__35576;
chunk__35558_35565 = G__35577;
count__35559_35566 = G__35578;
i__35560_35567 = G__35579;
continue;
} else {
var kw_35580 = cljs.core.first.call(null,seq__35557_35574__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_35580));

var G__35581 = cljs.core.next.call(null,seq__35557_35574__$1);
var G__35582 = null;
var G__35583 = (0);
var G__35584 = (0);
seq__35557_35564 = G__35581;
chunk__35558_35565 = G__35582;
count__35559_35566 = G__35583;
i__35560_35567 = G__35584;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq35555){
var G__35556 = cljs.core.first.call(null,seq35555);
var seq35555__$1 = cljs.core.next.call(null,seq35555);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35556,seq35555__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___35597 = arguments.length;
var i__25836__auto___35598 = (0);
while(true){
if((i__25836__auto___35598 < len__25835__auto___35597)){
args__25842__auto__.push((arguments[i__25836__auto___35598]));

var G__35599 = (i__25836__auto___35598 + (1));
i__25836__auto___35598 = G__35599;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__35587_35600 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__35588_35601 = null;
var count__35589_35602 = (0);
var i__35590_35603 = (0);
while(true){
if((i__35590_35603 < count__35589_35602)){
var vec__35591_35604 = cljs.core._nth.call(null,chunk__35588_35601,i__35590_35603);
var k_35605 = cljs.core.nth.call(null,vec__35591_35604,(0),null);
var v_35606 = cljs.core.nth.call(null,vec__35591_35604,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_35605,[cljs.core.str(v_35606),cljs.core.str("px")].join(''));

var G__35607 = seq__35587_35600;
var G__35608 = chunk__35588_35601;
var G__35609 = count__35589_35602;
var G__35610 = (i__35590_35603 + (1));
seq__35587_35600 = G__35607;
chunk__35588_35601 = G__35608;
count__35589_35602 = G__35609;
i__35590_35603 = G__35610;
continue;
} else {
var temp__4657__auto___35611 = cljs.core.seq.call(null,seq__35587_35600);
if(temp__4657__auto___35611){
var seq__35587_35612__$1 = temp__4657__auto___35611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35587_35612__$1)){
var c__25571__auto___35613 = cljs.core.chunk_first.call(null,seq__35587_35612__$1);
var G__35614 = cljs.core.chunk_rest.call(null,seq__35587_35612__$1);
var G__35615 = c__25571__auto___35613;
var G__35616 = cljs.core.count.call(null,c__25571__auto___35613);
var G__35617 = (0);
seq__35587_35600 = G__35614;
chunk__35588_35601 = G__35615;
count__35589_35602 = G__35616;
i__35590_35603 = G__35617;
continue;
} else {
var vec__35594_35618 = cljs.core.first.call(null,seq__35587_35612__$1);
var k_35619 = cljs.core.nth.call(null,vec__35594_35618,(0),null);
var v_35620 = cljs.core.nth.call(null,vec__35594_35618,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_35619,[cljs.core.str(v_35620),cljs.core.str("px")].join(''));

var G__35621 = cljs.core.next.call(null,seq__35587_35612__$1);
var G__35622 = null;
var G__35623 = (0);
var G__35624 = (0);
seq__35587_35600 = G__35621;
chunk__35588_35601 = G__35622;
count__35589_35602 = G__35623;
i__35590_35603 = G__35624;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq35585){
var G__35586 = cljs.core.first.call(null,seq35585);
var seq35585__$1 = cljs.core.next.call(null,seq35585);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35586,seq35585__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args35625 = [];
var len__25835__auto___35644 = arguments.length;
var i__25836__auto___35645 = (0);
while(true){
if((i__25836__auto___35645 < len__25835__auto___35644)){
args35625.push((arguments[i__25836__auto___35645]));

var G__35646 = (i__25836__auto___35645 + (1));
i__25836__auto___35645 = G__35646;
continue;
} else {
}
break;
}

var G__35631 = args35625.length;
switch (G__35631) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args35625.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25854__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__35632 = elem;
(G__35632[k__$1] = v);

return G__35632;
} else {
var G__35633 = elem;
G__35633.setAttribute(k__$1,v);

return G__35633;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__35634_35648 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__35635_35649 = null;
var count__35636_35650 = (0);
var i__35637_35651 = (0);
while(true){
if((i__35637_35651 < count__35636_35650)){
var vec__35638_35652 = cljs.core._nth.call(null,chunk__35635_35649,i__35637_35651);
var k_35653__$1 = cljs.core.nth.call(null,vec__35638_35652,(0),null);
var v_35654__$1 = cljs.core.nth.call(null,vec__35638_35652,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_35653__$1,v_35654__$1);

var G__35655 = seq__35634_35648;
var G__35656 = chunk__35635_35649;
var G__35657 = count__35636_35650;
var G__35658 = (i__35637_35651 + (1));
seq__35634_35648 = G__35655;
chunk__35635_35649 = G__35656;
count__35636_35650 = G__35657;
i__35637_35651 = G__35658;
continue;
} else {
var temp__4657__auto___35659 = cljs.core.seq.call(null,seq__35634_35648);
if(temp__4657__auto___35659){
var seq__35634_35660__$1 = temp__4657__auto___35659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35634_35660__$1)){
var c__25571__auto___35661 = cljs.core.chunk_first.call(null,seq__35634_35660__$1);
var G__35662 = cljs.core.chunk_rest.call(null,seq__35634_35660__$1);
var G__35663 = c__25571__auto___35661;
var G__35664 = cljs.core.count.call(null,c__25571__auto___35661);
var G__35665 = (0);
seq__35634_35648 = G__35662;
chunk__35635_35649 = G__35663;
count__35636_35650 = G__35664;
i__35637_35651 = G__35665;
continue;
} else {
var vec__35641_35666 = cljs.core.first.call(null,seq__35634_35660__$1);
var k_35667__$1 = cljs.core.nth.call(null,vec__35641_35666,(0),null);
var v_35668__$1 = cljs.core.nth.call(null,vec__35641_35666,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_35667__$1,v_35668__$1);

var G__35669 = cljs.core.next.call(null,seq__35634_35660__$1);
var G__35670 = null;
var G__35671 = (0);
var G__35672 = (0);
seq__35634_35648 = G__35669;
chunk__35635_35649 = G__35670;
count__35636_35650 = G__35671;
i__35637_35651 = G__35672;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq35626){
var G__35627 = cljs.core.first.call(null,seq35626);
var seq35626__$1 = cljs.core.next.call(null,seq35626);
var G__35628 = cljs.core.first.call(null,seq35626__$1);
var seq35626__$2 = cljs.core.next.call(null,seq35626__$1);
var G__35629 = cljs.core.first.call(null,seq35626__$2);
var seq35626__$3 = cljs.core.next.call(null,seq35626__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35627,G__35628,G__35629,seq35626__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args35673 = [];
var len__25835__auto___35683 = arguments.length;
var i__25836__auto___35684 = (0);
while(true){
if((i__25836__auto___35684 < len__25835__auto___35683)){
args35673.push((arguments[i__25836__auto___35684]));

var G__35685 = (i__25836__auto___35684 + (1));
i__25836__auto___35684 = G__35685;
continue;
} else {
}
break;
}

var G__35678 = args35673.length;
switch (G__35678) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args35673.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_35687__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_35687__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_35687__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35679_35688 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__35680_35689 = null;
var count__35681_35690 = (0);
var i__35682_35691 = (0);
while(true){
if((i__35682_35691 < count__35681_35690)){
var k_35692__$1 = cljs.core._nth.call(null,chunk__35680_35689,i__35682_35691);
dommy.core.remove_attr_BANG_.call(null,elem,k_35692__$1);

var G__35693 = seq__35679_35688;
var G__35694 = chunk__35680_35689;
var G__35695 = count__35681_35690;
var G__35696 = (i__35682_35691 + (1));
seq__35679_35688 = G__35693;
chunk__35680_35689 = G__35694;
count__35681_35690 = G__35695;
i__35682_35691 = G__35696;
continue;
} else {
var temp__4657__auto___35697 = cljs.core.seq.call(null,seq__35679_35688);
if(temp__4657__auto___35697){
var seq__35679_35698__$1 = temp__4657__auto___35697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35679_35698__$1)){
var c__25571__auto___35699 = cljs.core.chunk_first.call(null,seq__35679_35698__$1);
var G__35700 = cljs.core.chunk_rest.call(null,seq__35679_35698__$1);
var G__35701 = c__25571__auto___35699;
var G__35702 = cljs.core.count.call(null,c__25571__auto___35699);
var G__35703 = (0);
seq__35679_35688 = G__35700;
chunk__35680_35689 = G__35701;
count__35681_35690 = G__35702;
i__35682_35691 = G__35703;
continue;
} else {
var k_35704__$1 = cljs.core.first.call(null,seq__35679_35698__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_35704__$1);

var G__35705 = cljs.core.next.call(null,seq__35679_35698__$1);
var G__35706 = null;
var G__35707 = (0);
var G__35708 = (0);
seq__35679_35688 = G__35705;
chunk__35680_35689 = G__35706;
count__35681_35690 = G__35707;
i__35682_35691 = G__35708;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq35674){
var G__35675 = cljs.core.first.call(null,seq35674);
var seq35674__$1 = cljs.core.next.call(null,seq35674);
var G__35676 = cljs.core.first.call(null,seq35674__$1);
var seq35674__$2 = cljs.core.next.call(null,seq35674__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35675,G__35676,seq35674__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args35709 = [];
var len__25835__auto___35712 = arguments.length;
var i__25836__auto___35713 = (0);
while(true){
if((i__25836__auto___35713 < len__25835__auto___35712)){
args35709.push((arguments[i__25836__auto___35713]));

var G__35714 = (i__25836__auto___35713 + (1));
i__25836__auto___35713 = G__35714;
continue;
} else {
}
break;
}

var G__35711 = args35709.length;
switch (G__35711) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35709.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args35716 = [];
var len__25835__auto___35734 = arguments.length;
var i__25836__auto___35735 = (0);
while(true){
if((i__25836__auto___35735 < len__25835__auto___35734)){
args35716.push((arguments[i__25836__auto___35735]));

var G__35736 = (i__25836__auto___35735 + (1));
i__25836__auto___35735 = G__35736;
continue;
} else {
}
break;
}

var G__35721 = args35716.length;
switch (G__35721) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args35716.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___35738 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___35738)){
var class_list_35739 = temp__4655__auto___35738;
var seq__35722_35740 = cljs.core.seq.call(null,classes__$1);
var chunk__35723_35741 = null;
var count__35724_35742 = (0);
var i__35725_35743 = (0);
while(true){
if((i__35725_35743 < count__35724_35742)){
var c_35744 = cljs.core._nth.call(null,chunk__35723_35741,i__35725_35743);
class_list_35739.add(c_35744);

var G__35745 = seq__35722_35740;
var G__35746 = chunk__35723_35741;
var G__35747 = count__35724_35742;
var G__35748 = (i__35725_35743 + (1));
seq__35722_35740 = G__35745;
chunk__35723_35741 = G__35746;
count__35724_35742 = G__35747;
i__35725_35743 = G__35748;
continue;
} else {
var temp__4657__auto___35749 = cljs.core.seq.call(null,seq__35722_35740);
if(temp__4657__auto___35749){
var seq__35722_35750__$1 = temp__4657__auto___35749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35722_35750__$1)){
var c__25571__auto___35751 = cljs.core.chunk_first.call(null,seq__35722_35750__$1);
var G__35752 = cljs.core.chunk_rest.call(null,seq__35722_35750__$1);
var G__35753 = c__25571__auto___35751;
var G__35754 = cljs.core.count.call(null,c__25571__auto___35751);
var G__35755 = (0);
seq__35722_35740 = G__35752;
chunk__35723_35741 = G__35753;
count__35724_35742 = G__35754;
i__35725_35743 = G__35755;
continue;
} else {
var c_35756 = cljs.core.first.call(null,seq__35722_35750__$1);
class_list_35739.add(c_35756);

var G__35757 = cljs.core.next.call(null,seq__35722_35750__$1);
var G__35758 = null;
var G__35759 = (0);
var G__35760 = (0);
seq__35722_35740 = G__35757;
chunk__35723_35741 = G__35758;
count__35724_35742 = G__35759;
i__35725_35743 = G__35760;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35726_35761 = cljs.core.seq.call(null,classes__$1);
var chunk__35727_35762 = null;
var count__35728_35763 = (0);
var i__35729_35764 = (0);
while(true){
if((i__35729_35764 < count__35728_35763)){
var c_35765 = cljs.core._nth.call(null,chunk__35727_35762,i__35729_35764);
var class_name_35766 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_35766,c_35765))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_35766 === ""))?c_35765:[cljs.core.str(class_name_35766),cljs.core.str(" "),cljs.core.str(c_35765)].join('')));
}

var G__35767 = seq__35726_35761;
var G__35768 = chunk__35727_35762;
var G__35769 = count__35728_35763;
var G__35770 = (i__35729_35764 + (1));
seq__35726_35761 = G__35767;
chunk__35727_35762 = G__35768;
count__35728_35763 = G__35769;
i__35729_35764 = G__35770;
continue;
} else {
var temp__4657__auto___35771 = cljs.core.seq.call(null,seq__35726_35761);
if(temp__4657__auto___35771){
var seq__35726_35772__$1 = temp__4657__auto___35771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35726_35772__$1)){
var c__25571__auto___35773 = cljs.core.chunk_first.call(null,seq__35726_35772__$1);
var G__35774 = cljs.core.chunk_rest.call(null,seq__35726_35772__$1);
var G__35775 = c__25571__auto___35773;
var G__35776 = cljs.core.count.call(null,c__25571__auto___35773);
var G__35777 = (0);
seq__35726_35761 = G__35774;
chunk__35727_35762 = G__35775;
count__35728_35763 = G__35776;
i__35729_35764 = G__35777;
continue;
} else {
var c_35778 = cljs.core.first.call(null,seq__35726_35772__$1);
var class_name_35779 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_35779,c_35778))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_35779 === ""))?c_35778:[cljs.core.str(class_name_35779),cljs.core.str(" "),cljs.core.str(c_35778)].join('')));
}

var G__35780 = cljs.core.next.call(null,seq__35726_35772__$1);
var G__35781 = null;
var G__35782 = (0);
var G__35783 = (0);
seq__35726_35761 = G__35780;
chunk__35727_35762 = G__35781;
count__35728_35763 = G__35782;
i__35729_35764 = G__35783;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__35730_35784 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__35731_35785 = null;
var count__35732_35786 = (0);
var i__35733_35787 = (0);
while(true){
if((i__35733_35787 < count__35732_35786)){
var c_35788 = cljs.core._nth.call(null,chunk__35731_35785,i__35733_35787);
dommy.core.add_class_BANG_.call(null,elem,c_35788);

var G__35789 = seq__35730_35784;
var G__35790 = chunk__35731_35785;
var G__35791 = count__35732_35786;
var G__35792 = (i__35733_35787 + (1));
seq__35730_35784 = G__35789;
chunk__35731_35785 = G__35790;
count__35732_35786 = G__35791;
i__35733_35787 = G__35792;
continue;
} else {
var temp__4657__auto___35793 = cljs.core.seq.call(null,seq__35730_35784);
if(temp__4657__auto___35793){
var seq__35730_35794__$1 = temp__4657__auto___35793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35730_35794__$1)){
var c__25571__auto___35795 = cljs.core.chunk_first.call(null,seq__35730_35794__$1);
var G__35796 = cljs.core.chunk_rest.call(null,seq__35730_35794__$1);
var G__35797 = c__25571__auto___35795;
var G__35798 = cljs.core.count.call(null,c__25571__auto___35795);
var G__35799 = (0);
seq__35730_35784 = G__35796;
chunk__35731_35785 = G__35797;
count__35732_35786 = G__35798;
i__35733_35787 = G__35799;
continue;
} else {
var c_35800 = cljs.core.first.call(null,seq__35730_35794__$1);
dommy.core.add_class_BANG_.call(null,elem,c_35800);

var G__35801 = cljs.core.next.call(null,seq__35730_35794__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35730_35784 = G__35801;
chunk__35731_35785 = G__35802;
count__35732_35786 = G__35803;
i__35733_35787 = G__35804;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq35717){
var G__35718 = cljs.core.first.call(null,seq35717);
var seq35717__$1 = cljs.core.next.call(null,seq35717);
var G__35719 = cljs.core.first.call(null,seq35717__$1);
var seq35717__$2 = cljs.core.next.call(null,seq35717__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35718,G__35719,seq35717__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args35805 = [];
var len__25835__auto___35815 = arguments.length;
var i__25836__auto___35816 = (0);
while(true){
if((i__25836__auto___35816 < len__25835__auto___35815)){
args35805.push((arguments[i__25836__auto___35816]));

var G__35817 = (i__25836__auto___35816 + (1));
i__25836__auto___35816 = G__35817;
continue;
} else {
}
break;
}

var G__35810 = args35805.length;
switch (G__35810) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args35805.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___35819 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___35819)){
var class_list_35820 = temp__4655__auto___35819;
class_list_35820.remove(c__$1);
} else {
var class_name_35821 = dommy.core.class$.call(null,elem);
var new_class_name_35822 = dommy.utils.remove_class_str.call(null,class_name_35821,c__$1);
if((class_name_35821 === new_class_name_35822)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_35822);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__35811 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__35812 = null;
var count__35813 = (0);
var i__35814 = (0);
while(true){
if((i__35814 < count__35813)){
var c = cljs.core._nth.call(null,chunk__35812,i__35814);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__35823 = seq__35811;
var G__35824 = chunk__35812;
var G__35825 = count__35813;
var G__35826 = (i__35814 + (1));
seq__35811 = G__35823;
chunk__35812 = G__35824;
count__35813 = G__35825;
i__35814 = G__35826;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35811);
if(temp__4657__auto__){
var seq__35811__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35811__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35811__$1);
var G__35827 = cljs.core.chunk_rest.call(null,seq__35811__$1);
var G__35828 = c__25571__auto__;
var G__35829 = cljs.core.count.call(null,c__25571__auto__);
var G__35830 = (0);
seq__35811 = G__35827;
chunk__35812 = G__35828;
count__35813 = G__35829;
i__35814 = G__35830;
continue;
} else {
var c = cljs.core.first.call(null,seq__35811__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__35831 = cljs.core.next.call(null,seq__35811__$1);
var G__35832 = null;
var G__35833 = (0);
var G__35834 = (0);
seq__35811 = G__35831;
chunk__35812 = G__35832;
count__35813 = G__35833;
i__35814 = G__35834;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq35806){
var G__35807 = cljs.core.first.call(null,seq35806);
var seq35806__$1 = cljs.core.next.call(null,seq35806);
var G__35808 = cljs.core.first.call(null,seq35806__$1);
var seq35806__$2 = cljs.core.next.call(null,seq35806__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35807,G__35808,seq35806__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args35835 = [];
var len__25835__auto___35838 = arguments.length;
var i__25836__auto___35839 = (0);
while(true){
if((i__25836__auto___35839 < len__25835__auto___35838)){
args35835.push((arguments[i__25836__auto___35839]));

var G__35840 = (i__25836__auto___35839 + (1));
i__25836__auto___35839 = G__35840;
continue;
} else {
}
break;
}

var G__35837 = args35835.length;
switch (G__35837) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35835.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___35842 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___35842)){
var class_list_35843 = temp__4655__auto___35842;
class_list_35843.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args35844 = [];
var len__25835__auto___35847 = arguments.length;
var i__25836__auto___35848 = (0);
while(true){
if((i__25836__auto___35848 < len__25835__auto___35847)){
args35844.push((arguments[i__25836__auto___35848]));

var G__35849 = (i__25836__auto___35848 + (1));
i__25836__auto___35848 = G__35849;
continue;
} else {
}
break;
}

var G__35846 = args35844.length;
switch (G__35846) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35844.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args35851 = [];
var len__25835__auto___35854 = arguments.length;
var i__25836__auto___35855 = (0);
while(true){
if((i__25836__auto___35855 < len__25835__auto___35854)){
args35851.push((arguments[i__25836__auto___35855]));

var G__35856 = (i__25836__auto___35855 + (1));
i__25836__auto___35855 = G__35856;
continue;
} else {
}
break;
}

var G__35853 = args35851.length;
switch (G__35853) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35851.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args35858 = [];
var len__25835__auto___35869 = arguments.length;
var i__25836__auto___35870 = (0);
while(true){
if((i__25836__auto___35870 < len__25835__auto___35869)){
args35858.push((arguments[i__25836__auto___35870]));

var G__35871 = (i__25836__auto___35870 + (1));
i__25836__auto___35870 = G__35871;
continue;
} else {
}
break;
}

var G__35863 = args35858.length;
switch (G__35863) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args35858.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__35864 = parent;
G__35864.appendChild(child);

return G__35864;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35865_35873 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__35866_35874 = null;
var count__35867_35875 = (0);
var i__35868_35876 = (0);
while(true){
if((i__35868_35876 < count__35867_35875)){
var c_35877 = cljs.core._nth.call(null,chunk__35866_35874,i__35868_35876);
dommy.core.append_BANG_.call(null,parent,c_35877);

var G__35878 = seq__35865_35873;
var G__35879 = chunk__35866_35874;
var G__35880 = count__35867_35875;
var G__35881 = (i__35868_35876 + (1));
seq__35865_35873 = G__35878;
chunk__35866_35874 = G__35879;
count__35867_35875 = G__35880;
i__35868_35876 = G__35881;
continue;
} else {
var temp__4657__auto___35882 = cljs.core.seq.call(null,seq__35865_35873);
if(temp__4657__auto___35882){
var seq__35865_35883__$1 = temp__4657__auto___35882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35865_35883__$1)){
var c__25571__auto___35884 = cljs.core.chunk_first.call(null,seq__35865_35883__$1);
var G__35885 = cljs.core.chunk_rest.call(null,seq__35865_35883__$1);
var G__35886 = c__25571__auto___35884;
var G__35887 = cljs.core.count.call(null,c__25571__auto___35884);
var G__35888 = (0);
seq__35865_35873 = G__35885;
chunk__35866_35874 = G__35886;
count__35867_35875 = G__35887;
i__35868_35876 = G__35888;
continue;
} else {
var c_35889 = cljs.core.first.call(null,seq__35865_35883__$1);
dommy.core.append_BANG_.call(null,parent,c_35889);

var G__35890 = cljs.core.next.call(null,seq__35865_35883__$1);
var G__35891 = null;
var G__35892 = (0);
var G__35893 = (0);
seq__35865_35873 = G__35890;
chunk__35866_35874 = G__35891;
count__35867_35875 = G__35892;
i__35868_35876 = G__35893;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35859){
var G__35860 = cljs.core.first.call(null,seq35859);
var seq35859__$1 = cljs.core.next.call(null,seq35859);
var G__35861 = cljs.core.first.call(null,seq35859__$1);
var seq35859__$2 = cljs.core.next.call(null,seq35859__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35860,G__35861,seq35859__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args35894 = [];
var len__25835__auto___35905 = arguments.length;
var i__25836__auto___35906 = (0);
while(true){
if((i__25836__auto___35906 < len__25835__auto___35905)){
args35894.push((arguments[i__25836__auto___35906]));

var G__35907 = (i__25836__auto___35906 + (1));
i__25836__auto___35906 = G__35907;
continue;
} else {
}
break;
}

var G__35899 = args35894.length;
switch (G__35899) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args35894.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__35900 = parent;
G__35900.insertBefore(child,parent.firstChild);

return G__35900;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35901_35909 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__35902_35910 = null;
var count__35903_35911 = (0);
var i__35904_35912 = (0);
while(true){
if((i__35904_35912 < count__35903_35911)){
var c_35913 = cljs.core._nth.call(null,chunk__35902_35910,i__35904_35912);
dommy.core.prepend_BANG_.call(null,parent,c_35913);

var G__35914 = seq__35901_35909;
var G__35915 = chunk__35902_35910;
var G__35916 = count__35903_35911;
var G__35917 = (i__35904_35912 + (1));
seq__35901_35909 = G__35914;
chunk__35902_35910 = G__35915;
count__35903_35911 = G__35916;
i__35904_35912 = G__35917;
continue;
} else {
var temp__4657__auto___35918 = cljs.core.seq.call(null,seq__35901_35909);
if(temp__4657__auto___35918){
var seq__35901_35919__$1 = temp__4657__auto___35918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35901_35919__$1)){
var c__25571__auto___35920 = cljs.core.chunk_first.call(null,seq__35901_35919__$1);
var G__35921 = cljs.core.chunk_rest.call(null,seq__35901_35919__$1);
var G__35922 = c__25571__auto___35920;
var G__35923 = cljs.core.count.call(null,c__25571__auto___35920);
var G__35924 = (0);
seq__35901_35909 = G__35921;
chunk__35902_35910 = G__35922;
count__35903_35911 = G__35923;
i__35904_35912 = G__35924;
continue;
} else {
var c_35925 = cljs.core.first.call(null,seq__35901_35919__$1);
dommy.core.prepend_BANG_.call(null,parent,c_35925);

var G__35926 = cljs.core.next.call(null,seq__35901_35919__$1);
var G__35927 = null;
var G__35928 = (0);
var G__35929 = (0);
seq__35901_35909 = G__35926;
chunk__35902_35910 = G__35927;
count__35903_35911 = G__35928;
i__35904_35912 = G__35929;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35895){
var G__35896 = cljs.core.first.call(null,seq35895);
var seq35895__$1 = cljs.core.next.call(null,seq35895);
var G__35897 = cljs.core.first.call(null,seq35895__$1);
var seq35895__$2 = cljs.core.next.call(null,seq35895__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35896,G__35897,seq35895__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___35930 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___35930)){
var next_35931 = temp__4655__auto___35930;
dommy.core.insert_before_BANG_.call(null,elem,next_35931);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args35932 = [];
var len__25835__auto___35936 = arguments.length;
var i__25836__auto___35937 = (0);
while(true){
if((i__25836__auto___35937 < len__25835__auto___35936)){
args35932.push((arguments[i__25836__auto___35937]));

var G__35938 = (i__25836__auto___35937 + (1));
i__25836__auto___35937 = G__35938;
continue;
} else {
}
break;
}

var G__35934 = args35932.length;
switch (G__35934) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35932.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__35935 = p;
G__35935.removeChild(elem);

return G__35935;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35940){
var vec__35941 = p__35940;
var special_mouse_event = cljs.core.nth.call(null,vec__35941,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__35941,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__35941,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__35941,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24760__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24748__auto__ = related_target;
if(cljs.core.truth_(and__24748__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24748__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__35941,special_mouse_event,real_mouse_event))
});})(vec__35941,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24748__auto__ = selected_target;
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24748__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__24760__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___35947 = arguments.length;
var i__25836__auto___35948 = (0);
while(true){
if((i__25836__auto___35948 < len__25835__auto___35947)){
args__25842__auto__.push((arguments[i__25836__auto___35948]));

var G__35949 = (i__25836__auto___35948 + (1));
i__25836__auto___35948 = G__35949;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq35944){
var G__35945 = cljs.core.first.call(null,seq35944);
var seq35944__$1 = cljs.core.next.call(null,seq35944);
var G__35946 = cljs.core.first.call(null,seq35944__$1);
var seq35944__$2 = cljs.core.next.call(null,seq35944__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35945,G__35946,seq35944__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___35989 = arguments.length;
var i__25836__auto___35990 = (0);
while(true){
if((i__25836__auto___35990 < len__25835__auto___35989)){
args__25842__auto__.push((arguments[i__25836__auto___35990]));

var G__35991 = (i__25836__auto___35990 + (1));
i__25836__auto___35990 = G__35991;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__35952_35992 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_35993 = cljs.core.nth.call(null,vec__35952_35992,(0),null);
var selector_35994 = cljs.core.nth.call(null,vec__35952_35992,(1),null);
var seq__35955_35995 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__35962_35996 = null;
var count__35963_35997 = (0);
var i__35964_35998 = (0);
while(true){
if((i__35964_35998 < count__35963_35997)){
var vec__35971_35999 = cljs.core._nth.call(null,chunk__35962_35996,i__35964_35998);
var orig_type_36000 = cljs.core.nth.call(null,vec__35971_35999,(0),null);
var f_36001 = cljs.core.nth.call(null,vec__35971_35999,(1),null);
var seq__35965_36002 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_36000,cljs.core.PersistentArrayMap.fromArray([orig_type_36000,cljs.core.identity], true, false)));
var chunk__35967_36003 = null;
var count__35968_36004 = (0);
var i__35969_36005 = (0);
while(true){
if((i__35969_36005 < count__35968_36004)){
var vec__35974_36006 = cljs.core._nth.call(null,chunk__35967_36003,i__35969_36005);
var actual_type_36007 = cljs.core.nth.call(null,vec__35974_36006,(0),null);
var factory_36008 = cljs.core.nth.call(null,vec__35974_36006,(1),null);
var canonical_f_36009 = (cljs.core.truth_(selector_35994)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35993,selector_35994):cljs.core.identity).call(null,factory_36008.call(null,f_36001));
dommy.core.update_event_listeners_BANG_.call(null,elem_35993,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35994,actual_type_36007,f_36001], null),canonical_f_36009);

if(cljs.core.truth_(elem_35993.addEventListener)){
elem_35993.addEventListener(cljs.core.name.call(null,actual_type_36007),canonical_f_36009);
} else {
elem_35993.attachEvent(cljs.core.name.call(null,actual_type_36007),canonical_f_36009);
}

var G__36010 = seq__35965_36002;
var G__36011 = chunk__35967_36003;
var G__36012 = count__35968_36004;
var G__36013 = (i__35969_36005 + (1));
seq__35965_36002 = G__36010;
chunk__35967_36003 = G__36011;
count__35968_36004 = G__36012;
i__35969_36005 = G__36013;
continue;
} else {
var temp__4657__auto___36014 = cljs.core.seq.call(null,seq__35965_36002);
if(temp__4657__auto___36014){
var seq__35965_36015__$1 = temp__4657__auto___36014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35965_36015__$1)){
var c__25571__auto___36016 = cljs.core.chunk_first.call(null,seq__35965_36015__$1);
var G__36017 = cljs.core.chunk_rest.call(null,seq__35965_36015__$1);
var G__36018 = c__25571__auto___36016;
var G__36019 = cljs.core.count.call(null,c__25571__auto___36016);
var G__36020 = (0);
seq__35965_36002 = G__36017;
chunk__35967_36003 = G__36018;
count__35968_36004 = G__36019;
i__35969_36005 = G__36020;
continue;
} else {
var vec__35977_36021 = cljs.core.first.call(null,seq__35965_36015__$1);
var actual_type_36022 = cljs.core.nth.call(null,vec__35977_36021,(0),null);
var factory_36023 = cljs.core.nth.call(null,vec__35977_36021,(1),null);
var canonical_f_36024 = (cljs.core.truth_(selector_35994)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35993,selector_35994):cljs.core.identity).call(null,factory_36023.call(null,f_36001));
dommy.core.update_event_listeners_BANG_.call(null,elem_35993,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35994,actual_type_36022,f_36001], null),canonical_f_36024);

if(cljs.core.truth_(elem_35993.addEventListener)){
elem_35993.addEventListener(cljs.core.name.call(null,actual_type_36022),canonical_f_36024);
} else {
elem_35993.attachEvent(cljs.core.name.call(null,actual_type_36022),canonical_f_36024);
}

var G__36025 = cljs.core.next.call(null,seq__35965_36015__$1);
var G__36026 = null;
var G__36027 = (0);
var G__36028 = (0);
seq__35965_36002 = G__36025;
chunk__35967_36003 = G__36026;
count__35968_36004 = G__36027;
i__35969_36005 = G__36028;
continue;
}
} else {
}
}
break;
}

var G__36029 = seq__35955_35995;
var G__36030 = chunk__35962_35996;
var G__36031 = count__35963_35997;
var G__36032 = (i__35964_35998 + (1));
seq__35955_35995 = G__36029;
chunk__35962_35996 = G__36030;
count__35963_35997 = G__36031;
i__35964_35998 = G__36032;
continue;
} else {
var temp__4657__auto___36033 = cljs.core.seq.call(null,seq__35955_35995);
if(temp__4657__auto___36033){
var seq__35955_36034__$1 = temp__4657__auto___36033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35955_36034__$1)){
var c__25571__auto___36035 = cljs.core.chunk_first.call(null,seq__35955_36034__$1);
var G__36036 = cljs.core.chunk_rest.call(null,seq__35955_36034__$1);
var G__36037 = c__25571__auto___36035;
var G__36038 = cljs.core.count.call(null,c__25571__auto___36035);
var G__36039 = (0);
seq__35955_35995 = G__36036;
chunk__35962_35996 = G__36037;
count__35963_35997 = G__36038;
i__35964_35998 = G__36039;
continue;
} else {
var vec__35980_36040 = cljs.core.first.call(null,seq__35955_36034__$1);
var orig_type_36041 = cljs.core.nth.call(null,vec__35980_36040,(0),null);
var f_36042 = cljs.core.nth.call(null,vec__35980_36040,(1),null);
var seq__35956_36043 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_36041,cljs.core.PersistentArrayMap.fromArray([orig_type_36041,cljs.core.identity], true, false)));
var chunk__35958_36044 = null;
var count__35959_36045 = (0);
var i__35960_36046 = (0);
while(true){
if((i__35960_36046 < count__35959_36045)){
var vec__35983_36047 = cljs.core._nth.call(null,chunk__35958_36044,i__35960_36046);
var actual_type_36048 = cljs.core.nth.call(null,vec__35983_36047,(0),null);
var factory_36049 = cljs.core.nth.call(null,vec__35983_36047,(1),null);
var canonical_f_36050 = (cljs.core.truth_(selector_35994)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35993,selector_35994):cljs.core.identity).call(null,factory_36049.call(null,f_36042));
dommy.core.update_event_listeners_BANG_.call(null,elem_35993,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35994,actual_type_36048,f_36042], null),canonical_f_36050);

if(cljs.core.truth_(elem_35993.addEventListener)){
elem_35993.addEventListener(cljs.core.name.call(null,actual_type_36048),canonical_f_36050);
} else {
elem_35993.attachEvent(cljs.core.name.call(null,actual_type_36048),canonical_f_36050);
}

var G__36051 = seq__35956_36043;
var G__36052 = chunk__35958_36044;
var G__36053 = count__35959_36045;
var G__36054 = (i__35960_36046 + (1));
seq__35956_36043 = G__36051;
chunk__35958_36044 = G__36052;
count__35959_36045 = G__36053;
i__35960_36046 = G__36054;
continue;
} else {
var temp__4657__auto___36055__$1 = cljs.core.seq.call(null,seq__35956_36043);
if(temp__4657__auto___36055__$1){
var seq__35956_36056__$1 = temp__4657__auto___36055__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35956_36056__$1)){
var c__25571__auto___36057 = cljs.core.chunk_first.call(null,seq__35956_36056__$1);
var G__36058 = cljs.core.chunk_rest.call(null,seq__35956_36056__$1);
var G__36059 = c__25571__auto___36057;
var G__36060 = cljs.core.count.call(null,c__25571__auto___36057);
var G__36061 = (0);
seq__35956_36043 = G__36058;
chunk__35958_36044 = G__36059;
count__35959_36045 = G__36060;
i__35960_36046 = G__36061;
continue;
} else {
var vec__35986_36062 = cljs.core.first.call(null,seq__35956_36056__$1);
var actual_type_36063 = cljs.core.nth.call(null,vec__35986_36062,(0),null);
var factory_36064 = cljs.core.nth.call(null,vec__35986_36062,(1),null);
var canonical_f_36065 = (cljs.core.truth_(selector_35994)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35993,selector_35994):cljs.core.identity).call(null,factory_36064.call(null,f_36042));
dommy.core.update_event_listeners_BANG_.call(null,elem_35993,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35994,actual_type_36063,f_36042], null),canonical_f_36065);

if(cljs.core.truth_(elem_35993.addEventListener)){
elem_35993.addEventListener(cljs.core.name.call(null,actual_type_36063),canonical_f_36065);
} else {
elem_35993.attachEvent(cljs.core.name.call(null,actual_type_36063),canonical_f_36065);
}

var G__36066 = cljs.core.next.call(null,seq__35956_36056__$1);
var G__36067 = null;
var G__36068 = (0);
var G__36069 = (0);
seq__35956_36043 = G__36066;
chunk__35958_36044 = G__36067;
count__35959_36045 = G__36068;
i__35960_36046 = G__36069;
continue;
}
} else {
}
}
break;
}

var G__36070 = cljs.core.next.call(null,seq__35955_36034__$1);
var G__36071 = null;
var G__36072 = (0);
var G__36073 = (0);
seq__35955_35995 = G__36070;
chunk__35962_35996 = G__36071;
count__35963_35997 = G__36072;
i__35964_35998 = G__36073;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq35950){
var G__35951 = cljs.core.first.call(null,seq35950);
var seq35950__$1 = cljs.core.next.call(null,seq35950);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35951,seq35950__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___36113 = arguments.length;
var i__25836__auto___36114 = (0);
while(true){
if((i__25836__auto___36114 < len__25835__auto___36113)){
args__25842__auto__.push((arguments[i__25836__auto___36114]));

var G__36115 = (i__25836__auto___36114 + (1));
i__25836__auto___36114 = G__36115;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36076_36116 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_36117 = cljs.core.nth.call(null,vec__36076_36116,(0),null);
var selector_36118 = cljs.core.nth.call(null,vec__36076_36116,(1),null);
var seq__36079_36119 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__36086_36120 = null;
var count__36087_36121 = (0);
var i__36088_36122 = (0);
while(true){
if((i__36088_36122 < count__36087_36121)){
var vec__36095_36123 = cljs.core._nth.call(null,chunk__36086_36120,i__36088_36122);
var orig_type_36124 = cljs.core.nth.call(null,vec__36095_36123,(0),null);
var f_36125 = cljs.core.nth.call(null,vec__36095_36123,(1),null);
var seq__36089_36126 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_36124,cljs.core.PersistentArrayMap.fromArray([orig_type_36124,cljs.core.identity], true, false)));
var chunk__36091_36127 = null;
var count__36092_36128 = (0);
var i__36093_36129 = (0);
while(true){
if((i__36093_36129 < count__36092_36128)){
var vec__36098_36130 = cljs.core._nth.call(null,chunk__36091_36127,i__36093_36129);
var actual_type_36131 = cljs.core.nth.call(null,vec__36098_36130,(0),null);
var __36132 = cljs.core.nth.call(null,vec__36098_36130,(1),null);
var keys_36133 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36118,actual_type_36131,f_36125], null);
var canonical_f_36134 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_36117),keys_36133);
dommy.core.update_event_listeners_BANG_.call(null,elem_36117,dommy.utils.dissoc_in,keys_36133);

if(cljs.core.truth_(elem_36117.removeEventListener)){
elem_36117.removeEventListener(cljs.core.name.call(null,actual_type_36131),canonical_f_36134);
} else {
elem_36117.detachEvent(cljs.core.name.call(null,actual_type_36131),canonical_f_36134);
}

var G__36135 = seq__36089_36126;
var G__36136 = chunk__36091_36127;
var G__36137 = count__36092_36128;
var G__36138 = (i__36093_36129 + (1));
seq__36089_36126 = G__36135;
chunk__36091_36127 = G__36136;
count__36092_36128 = G__36137;
i__36093_36129 = G__36138;
continue;
} else {
var temp__4657__auto___36139 = cljs.core.seq.call(null,seq__36089_36126);
if(temp__4657__auto___36139){
var seq__36089_36140__$1 = temp__4657__auto___36139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36089_36140__$1)){
var c__25571__auto___36141 = cljs.core.chunk_first.call(null,seq__36089_36140__$1);
var G__36142 = cljs.core.chunk_rest.call(null,seq__36089_36140__$1);
var G__36143 = c__25571__auto___36141;
var G__36144 = cljs.core.count.call(null,c__25571__auto___36141);
var G__36145 = (0);
seq__36089_36126 = G__36142;
chunk__36091_36127 = G__36143;
count__36092_36128 = G__36144;
i__36093_36129 = G__36145;
continue;
} else {
var vec__36101_36146 = cljs.core.first.call(null,seq__36089_36140__$1);
var actual_type_36147 = cljs.core.nth.call(null,vec__36101_36146,(0),null);
var __36148 = cljs.core.nth.call(null,vec__36101_36146,(1),null);
var keys_36149 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36118,actual_type_36147,f_36125], null);
var canonical_f_36150 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_36117),keys_36149);
dommy.core.update_event_listeners_BANG_.call(null,elem_36117,dommy.utils.dissoc_in,keys_36149);

if(cljs.core.truth_(elem_36117.removeEventListener)){
elem_36117.removeEventListener(cljs.core.name.call(null,actual_type_36147),canonical_f_36150);
} else {
elem_36117.detachEvent(cljs.core.name.call(null,actual_type_36147),canonical_f_36150);
}

var G__36151 = cljs.core.next.call(null,seq__36089_36140__$1);
var G__36152 = null;
var G__36153 = (0);
var G__36154 = (0);
seq__36089_36126 = G__36151;
chunk__36091_36127 = G__36152;
count__36092_36128 = G__36153;
i__36093_36129 = G__36154;
continue;
}
} else {
}
}
break;
}

var G__36155 = seq__36079_36119;
var G__36156 = chunk__36086_36120;
var G__36157 = count__36087_36121;
var G__36158 = (i__36088_36122 + (1));
seq__36079_36119 = G__36155;
chunk__36086_36120 = G__36156;
count__36087_36121 = G__36157;
i__36088_36122 = G__36158;
continue;
} else {
var temp__4657__auto___36159 = cljs.core.seq.call(null,seq__36079_36119);
if(temp__4657__auto___36159){
var seq__36079_36160__$1 = temp__4657__auto___36159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36079_36160__$1)){
var c__25571__auto___36161 = cljs.core.chunk_first.call(null,seq__36079_36160__$1);
var G__36162 = cljs.core.chunk_rest.call(null,seq__36079_36160__$1);
var G__36163 = c__25571__auto___36161;
var G__36164 = cljs.core.count.call(null,c__25571__auto___36161);
var G__36165 = (0);
seq__36079_36119 = G__36162;
chunk__36086_36120 = G__36163;
count__36087_36121 = G__36164;
i__36088_36122 = G__36165;
continue;
} else {
var vec__36104_36166 = cljs.core.first.call(null,seq__36079_36160__$1);
var orig_type_36167 = cljs.core.nth.call(null,vec__36104_36166,(0),null);
var f_36168 = cljs.core.nth.call(null,vec__36104_36166,(1),null);
var seq__36080_36169 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_36167,cljs.core.PersistentArrayMap.fromArray([orig_type_36167,cljs.core.identity], true, false)));
var chunk__36082_36170 = null;
var count__36083_36171 = (0);
var i__36084_36172 = (0);
while(true){
if((i__36084_36172 < count__36083_36171)){
var vec__36107_36173 = cljs.core._nth.call(null,chunk__36082_36170,i__36084_36172);
var actual_type_36174 = cljs.core.nth.call(null,vec__36107_36173,(0),null);
var __36175 = cljs.core.nth.call(null,vec__36107_36173,(1),null);
var keys_36176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36118,actual_type_36174,f_36168], null);
var canonical_f_36177 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_36117),keys_36176);
dommy.core.update_event_listeners_BANG_.call(null,elem_36117,dommy.utils.dissoc_in,keys_36176);

if(cljs.core.truth_(elem_36117.removeEventListener)){
elem_36117.removeEventListener(cljs.core.name.call(null,actual_type_36174),canonical_f_36177);
} else {
elem_36117.detachEvent(cljs.core.name.call(null,actual_type_36174),canonical_f_36177);
}

var G__36178 = seq__36080_36169;
var G__36179 = chunk__36082_36170;
var G__36180 = count__36083_36171;
var G__36181 = (i__36084_36172 + (1));
seq__36080_36169 = G__36178;
chunk__36082_36170 = G__36179;
count__36083_36171 = G__36180;
i__36084_36172 = G__36181;
continue;
} else {
var temp__4657__auto___36182__$1 = cljs.core.seq.call(null,seq__36080_36169);
if(temp__4657__auto___36182__$1){
var seq__36080_36183__$1 = temp__4657__auto___36182__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36080_36183__$1)){
var c__25571__auto___36184 = cljs.core.chunk_first.call(null,seq__36080_36183__$1);
var G__36185 = cljs.core.chunk_rest.call(null,seq__36080_36183__$1);
var G__36186 = c__25571__auto___36184;
var G__36187 = cljs.core.count.call(null,c__25571__auto___36184);
var G__36188 = (0);
seq__36080_36169 = G__36185;
chunk__36082_36170 = G__36186;
count__36083_36171 = G__36187;
i__36084_36172 = G__36188;
continue;
} else {
var vec__36110_36189 = cljs.core.first.call(null,seq__36080_36183__$1);
var actual_type_36190 = cljs.core.nth.call(null,vec__36110_36189,(0),null);
var __36191 = cljs.core.nth.call(null,vec__36110_36189,(1),null);
var keys_36192 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36118,actual_type_36190,f_36168], null);
var canonical_f_36193 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_36117),keys_36192);
dommy.core.update_event_listeners_BANG_.call(null,elem_36117,dommy.utils.dissoc_in,keys_36192);

if(cljs.core.truth_(elem_36117.removeEventListener)){
elem_36117.removeEventListener(cljs.core.name.call(null,actual_type_36190),canonical_f_36193);
} else {
elem_36117.detachEvent(cljs.core.name.call(null,actual_type_36190),canonical_f_36193);
}

var G__36194 = cljs.core.next.call(null,seq__36080_36183__$1);
var G__36195 = null;
var G__36196 = (0);
var G__36197 = (0);
seq__36080_36169 = G__36194;
chunk__36082_36170 = G__36195;
count__36083_36171 = G__36196;
i__36084_36172 = G__36197;
continue;
}
} else {
}
}
break;
}

var G__36198 = cljs.core.next.call(null,seq__36079_36160__$1);
var G__36199 = null;
var G__36200 = (0);
var G__36201 = (0);
seq__36079_36119 = G__36198;
chunk__36086_36120 = G__36199;
count__36087_36121 = G__36200;
i__36088_36122 = G__36201;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36074){
var G__36075 = cljs.core.first.call(null,seq36074);
var seq36074__$1 = cljs.core.next.call(null,seq36074);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36075,seq36074__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___36217 = arguments.length;
var i__25836__auto___36218 = (0);
while(true){
if((i__25836__auto___36218 < len__25835__auto___36217)){
args__25842__auto__.push((arguments[i__25836__auto___36218]));

var G__36219 = (i__25836__auto___36218 + (1));
i__25836__auto___36218 = G__36219;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36204_36220 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_36221 = cljs.core.nth.call(null,vec__36204_36220,(0),null);
var selector_36222 = cljs.core.nth.call(null,vec__36204_36220,(1),null);
var seq__36207_36223 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__36208_36224 = null;
var count__36209_36225 = (0);
var i__36210_36226 = (0);
while(true){
if((i__36210_36226 < count__36209_36225)){
var vec__36211_36227 = cljs.core._nth.call(null,chunk__36208_36224,i__36210_36226);
var type_36228 = cljs.core.nth.call(null,vec__36211_36227,(0),null);
var f_36229 = cljs.core.nth.call(null,vec__36211_36227,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_36228,((function (seq__36207_36223,chunk__36208_36224,count__36209_36225,i__36210_36226,vec__36211_36227,type_36228,f_36229,vec__36204_36220,elem_36221,selector_36222){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_36228,dommy$core$this_fn);

return f_36229.call(null,e);
});})(seq__36207_36223,chunk__36208_36224,count__36209_36225,i__36210_36226,vec__36211_36227,type_36228,f_36229,vec__36204_36220,elem_36221,selector_36222))
);

var G__36230 = seq__36207_36223;
var G__36231 = chunk__36208_36224;
var G__36232 = count__36209_36225;
var G__36233 = (i__36210_36226 + (1));
seq__36207_36223 = G__36230;
chunk__36208_36224 = G__36231;
count__36209_36225 = G__36232;
i__36210_36226 = G__36233;
continue;
} else {
var temp__4657__auto___36234 = cljs.core.seq.call(null,seq__36207_36223);
if(temp__4657__auto___36234){
var seq__36207_36235__$1 = temp__4657__auto___36234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36207_36235__$1)){
var c__25571__auto___36236 = cljs.core.chunk_first.call(null,seq__36207_36235__$1);
var G__36237 = cljs.core.chunk_rest.call(null,seq__36207_36235__$1);
var G__36238 = c__25571__auto___36236;
var G__36239 = cljs.core.count.call(null,c__25571__auto___36236);
var G__36240 = (0);
seq__36207_36223 = G__36237;
chunk__36208_36224 = G__36238;
count__36209_36225 = G__36239;
i__36210_36226 = G__36240;
continue;
} else {
var vec__36214_36241 = cljs.core.first.call(null,seq__36207_36235__$1);
var type_36242 = cljs.core.nth.call(null,vec__36214_36241,(0),null);
var f_36243 = cljs.core.nth.call(null,vec__36214_36241,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_36242,((function (seq__36207_36223,chunk__36208_36224,count__36209_36225,i__36210_36226,vec__36214_36241,type_36242,f_36243,seq__36207_36235__$1,temp__4657__auto___36234,vec__36204_36220,elem_36221,selector_36222){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_36242,dommy$core$this_fn);

return f_36243.call(null,e);
});})(seq__36207_36223,chunk__36208_36224,count__36209_36225,i__36210_36226,vec__36214_36241,type_36242,f_36243,seq__36207_36235__$1,temp__4657__auto___36234,vec__36204_36220,elem_36221,selector_36222))
);

var G__36244 = cljs.core.next.call(null,seq__36207_36235__$1);
var G__36245 = null;
var G__36246 = (0);
var G__36247 = (0);
seq__36207_36223 = G__36244;
chunk__36208_36224 = G__36245;
count__36209_36225 = G__36246;
i__36210_36226 = G__36247;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36202){
var G__36203 = cljs.core.first.call(null,seq36202);
var seq36202__$1 = cljs.core.next.call(null,seq36202);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36203,seq36202__$1);
});


//# sourceMappingURL=core.js.map?rel=1481153824486