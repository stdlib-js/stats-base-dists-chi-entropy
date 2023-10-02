"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(c,a){
var u=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-digamma/dist'),s=require('@stdlib/math-base-special-gammaln/dist'),v=require('@stdlib/constants-float64-ln-two/dist');function m(e){var r;return u(e)||e<=0?NaN:(r=e/2,s(r)+.5*(e-v-(e-1)*n(r)))}a.exports=m
});var q=i();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
