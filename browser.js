// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n=Math.floor,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"",c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,c;if(null==r)return i.call(r);n=r[u],c=u,e=null!=(o=r)&&a.call(o,c);try{r[u]=void 0}catch(e){return i.call(r)}return t=i.call(r),e?r[u]=n:delete r[u],t}:function(r){return i.call(r)},f="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=e,d="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),n=e,r=(d&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?v:function(){throw new Error("not implemented")};var h,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var N,_=h,E="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,r=(E&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x,I={uint16:N,uint8:_};(x=new I.uint16(1))[0]=4660;var S=52===new I.uint8(x.buffer)[0],F=!0===S?1:0,j=new w(1),T=new y(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===S?0:1,$=new w(1),G=new y($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}function W(r,e,n){var t,i,a,o,u,c,f,s,l;return(i=2147483647&(t=O(r))|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=.7853981633974483-r)+(s=3061616997868383e-32-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),f=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((u=l*r)*(o+f)+e),s=r+(o+=.3333333333333341*u),i>=1072010280?(1-(t>>30&2))*((f=n)-2*(r-(s*s/(s+f)-o))):1===n?s:(f=o-((l=H(s,0))-r),(c=H(a=-1/s,0))+a*((u=1+c*l)+c*f))}var C,L,P=2147483647,R=2146435072,M=!0===S?0:1,Z=new w(1),X=new y(Z.buffer);!0===S?(C=1,L=0):(C=0,L=1);var Y={HIGH:C,LOW:L},z=new w(1),q=new y(z.buffer),B=Y.HIGH,D=Y.LOW;function J(r,e){return q[B]=r,q[D]=e,z[0]}var K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY,rr=1023;function er(r){return r===K||r===Q}var nr="function"==typeof Object.defineProperty?Object.defineProperty:null,tr=Object.defineProperty;function ir(r){return"number"==typeof r}function ar(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function or(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+ar(i):ar(i)+r,t&&(r="-"+r)),r}var ur=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function fr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!ir(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=or(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=or(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===cr.call(r.specifier)?cr.call(n):ur.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function sr(r){return"string"==typeof r}var lr=Math.abs,pr=String.prototype.toLowerCase,yr=String.prototype.toUpperCase,dr=String.prototype.replace,gr=/e\+(\d)$/,vr=/e-(\d)$/,hr=/^(\d+)$/,wr=/^(\d+)e/,br=/\.0$/,mr=/\.0*e/,Ar=/(\..*[^0])0*e/;function Nr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!ir(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":lr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=dr.call(n,Ar,"$1e"),n=dr.call(n,mr,"e"),n=dr.call(n,br,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=dr.call(n,gr,"e+0$1"),n=dr.call(n,vr,"e-0$1"),r.alternate&&(n=dr.call(n,hr,"$1."),n=dr.call(n,wr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===yr.call(r.specifier)?yr.call(n):pr.call(n)}function _r(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Er(r,e,n){var t=e-r.length;return t<0?r:r=n?r+_r(t):_r(t)+r}var Ur=String.fromCharCode,kr=isNaN,xr=Array.isArray;function Ir(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Sr(r){var e,n,t,i,a,o,u,c,f;if(!xr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(sr(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=Ir(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,kr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,kr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=fr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!kr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=kr(a)?String(t.arg):Ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Nr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=or(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Er(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Tr(r){var e,n,t,i;for(n=[],i=0,t=Fr.exec(r);t;)(e=r.slice(i,Fr.lastIndex-t[0].length)).length&&n.push(e),n.push(jr(t)),i=Fr.lastIndex,t=Fr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Or(r){return"string"==typeof r}function Vr(r){var e,n,t;if(!Or(r))throw new TypeError(Vr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Tr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Sr.apply(null,n)}var $r,Gr,Hr=Object.prototype,Wr=Hr.toString,Cr=Hr.__defineGetter__,Lr=Hr.__defineSetter__,Pr=Hr.__lookupGetter__,Rr=Hr.__lookupSetter__,Mr=function(){try{return nr({},"x",{}),!0}catch(r){return!1}}()?tr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Wr.call(r))throw new TypeError(Vr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Wr.call(n))throw new TypeError(Vr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Pr.call(r,e)||Rr.call(r,e)?(t=r.__proto__,r.__proto__=Hr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Cr&&Cr.call(r,e,n.get),o&&Lr&&Lr.call(r,e,n.set),r};function Zr(r,e,n){Mr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===S?($r=1,Gr=0):($r=0,Gr=1);var Xr={HIGH:$r,LOW:Gr},Yr=new w(1),zr=new y(Yr.buffer),qr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e,n,t){return Yr[0]=r,e[t]=zr[qr],e[t+n]=zr[Br],e}function Jr(r){return Dr(r,[0,0],1,0)}Zr(Jr,"assign",Dr);var Kr=[0,0];function Qr(r,e){var n,t;return Jr.assign(r,Kr,1,0),n=Kr[0],n&=P,t=O(e),J(n|=t&=2147483648,Kr[1])}function re(r){return Math.abs(r)}function ee(e,n,t,i){return r(e)||er(e)?(n[i]=e,n[i+t]=0,n):0!==e&&re(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Zr((function(r){return ee(r,[0,0],1,0)}),"assign",ee);var ne=[0,0],te=[0,0];function ie(e,n){var t,i;return 0===n||0===e||r(e)||er(e)?e:(ee(e,ne,1,0),n+=ne[1],n+=function(r){var e=O(r);return(e=(e&R)>>>20)-rr|0}(e=ne[0]),n<-1074?Qr(0,e):n>1023?e<0?Q:K:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,Jr.assign(e,te,1,0),t=te[0],t&=2148532223,i*J(t|=n+rr<<20,te[1])))}function ae(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var oe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ue=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ce=16777216,fe=5.960464477539063e-8,se=ae(20),le=ae(20),pe=ae(20),ye=ae(20);function de(r,e,t,i,a,o,u,c,f){var s,l,p,y,d,g,v,h,w;for(y=o,w=i[t],h=t,d=0;h>0;d++)l=fe*w|0,ye[d]=w-ce*l|0,w=i[h-1]+l,h-=1;if(w=ie(w,a),w-=8*n(.125*w),w-=v=0|w,p=0,a>0?(v+=d=ye[t-1]>>24-a,ye[t-1]-=d<<24-a,p=ye[t-1]>>23-a):0===a?p=ye[t-1]>>23:w>=.5&&(p=2),p>0){for(v+=1,s=0,d=0;d<t;d++)h=ye[d],0===s?0!==h&&(s=1,ye[d]=16777216-h):ye[d]=16777215-h;if(a>0)switch(a){case 1:ye[t-1]&=8388607;break;case 2:ye[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ie(1,a)))}if(0===w){for(h=0,d=t-1;d>=o;d--)h|=ye[d];if(0===h){for(g=1;0===ye[o-g];g++);for(d=t+1;d<=t+g;d++){for(f[c+d]=oe[u+d],l=0,h=0;h<=c;h++)l+=r[h]*f[c+(d-h)];i[d]=l}return de(r,e,t+=g,i,a,o,u,c,f)}}if(0===w)for(t-=1,a-=24;0===ye[t];)t-=1,a-=24;else(w=ie(w,-a))>=ce?(l=fe*w|0,ye[t]=w-ce*l|0,a+=24,ye[t+=1]=l):ye[t]=0|w;for(l=ie(1,a),d=t;d>=0;d--)i[d]=l*ye[d],l*=fe;for(d=t;d>=0;d--){for(l=0,g=0;g<=y&&g<=t-d;g++)l+=ue[g]*i[d+g];pe[t-d]=l}for(l=0,d=t;d>=0;d--)l+=pe[d];for(e[0]=0===p?l:-l,l=pe[0]-l,d=1;d<=t;d++)l+=pe[d];return e[1]=0===p?l:-l,7&v}function ge(r,e,n,t){var i,a,o,u,c,f,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)se[c]=f<0?0:oe[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*se[o+(c-f)];le[c]=i}return de(r,e,4,le,u,4,a,o,se)}var ve=Math.round;function he(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=ve(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(O(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(O(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var we=1.5707963267341256,be=6077100506506192e-26,me=2*be,Ae=3*be,Ne=4*be,_e=[0,0,0],Ee=[0,0];function Ue(r,e){var n,t,i,a,o,u,c;if((i=O(r)&P|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?he(r,i,e):i<=1073928572?r>0?(c=r-we,e[0]=c-be,e[1]=c-e[0]-be,1):(c=r+we,e[0]=c+be,e[1]=c-e[0]+be,-1):r>0?(c=r-2*we,e[0]=c-me,e[1]=c-e[0]-me,2):(c=r+2*we,e[0]=c+me,e[1]=c-e[0]+me,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?he(r,i,e):r>0?(c=r-3*we,e[0]=c-Ae,e[1]=c-e[0]-Ae,3):(c=r+3*we,e[0]=c+Ae,e[1]=c-e[0]+Ae,-3):1075388923===i?he(r,i,e):r>0?(c=r-4*we,e[0]=c-Ne,e[1]=c-e[0]-Ne,4):(c=r+4*we,e[0]=c+Ne,e[1]=c-e[0]+Ne,-4);if(i<1094263291)return he(r,i,e);if(i>=R)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Z[0]=r,X[M]}(r),c=J(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)_e[o]=0|c,c=16777216*(c-_e[o]);for(_e[2]=c,a=3;0===_e[a-1];)a-=1;return u=ge(_e,Ee,t,a),r<0?(e[0]=-Ee[0],e[1]=-Ee[1],-u):(e[0]=Ee[0],e[1]=Ee[1],u)}var ke=[0,0],xe=3.141592653589793,Ie=!0===S?1:0,Se=new w(1),Fe=new y(Se.buffer),je=.6931471803691238,Te=1.9082149292705877e-10,Oe=1048575;function Ve(e){var n,t,i,a,o,u,c,f,s,l,p,y;return 0===e?Q:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-rr|0,o+=(f=614244+(t&=Oe)&1048576|0)>>20|0,c=(e=function(r,e){return Se[0]=r,Fe[Ie]=e>>>0,Se[0]}(e,t|1072693248^f))-1,(Oe&2+t)<3?0===c?0===o?0:o*je+o*Te:(u=c*c*(.5-.3333333333333333*c),0===o?c-u:o*je-(u-o*Te-c)):(f=t-398458|0,s=440401-t|0,a=(p=(y=(l=c/(2+c))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(f|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+u)):o*je-(n-(l*(n+u)+o*Te)-c)):0===o?c-l*(c-u):o*je-(l*(c-u)-o*Te-c))))}function $e(e){var t,i;if(r(e)||0===e)return NaN;if(e<=-1){if((t=(e=1-e)-n(e))>.5&&(t-=1),0===t)return NaN;i=xe/function(r){var e,n;return e=O(r),(e&=2147483647)<=1072243195?e<1044381696?r:W(r,0,1):e>=2146435072?NaN:(n=Ue(r,ke),W(ke[0],ke[1],1-((1&n)<<1)))}(xe*t)}else i=0;if(e>=10)return i+=function(r){var e;return Ve(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(e),i;for(;e>2;)i+=1/(e-=1);for(;e<1;)i-=1/e,e+=1;return i+=function(r){var e,n;return e=r-1.4616321446374059,e-=3.309564688275257e-10,e-=9.016312093258695e-20,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),.9955816268920898*e+e*n}(e),i}var Ge=Math.ceil;function He(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var We=-.16666666666666632;function Ce(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(We+i*n):r-(i*(.5*e-t*n)-e-t*We)}var Le=[0,0];function Pe(r){var e;if(e=O(r),(e&=2147483647)<=1072243195)return e<1044381696?1:He(r,0);if(e>=2146435072)return NaN;switch(3&Ue(r,Le)){case 0:return He(Le[0],Le[1]);case 1:return-Ce(Le[0],Le[1]);case 2:return-He(Le[0],Le[1]);default:return Ce(Le[0],Le[1])}}var Re=[0,0];function Me(r){var e;if(e=O(r),(e&=P)<=1072243195)return e<1045430272?r:Ce(r,0);if(e>=R)return NaN;switch(3&Ue(r,Re)){case 0:return Ce(Re[0],Re[1]);case 1:return He(Re[0],Re[1]);case 2:return-Ce(Re[0],Re[1]);default:return-He(Re[0],Re[1])}}var Ze=1.4616321449683622,Xe=1.4616321449683622;function Ye(e){var t,i,a,o,u,c,f,s,l,p,y,d,g;if(r(e)||er(e))return e;if(0===e)return K;if(e<0?(t=!0,e=-e):t=!1,e<8470329472543003e-37)return-Ve(e);if(t){if(e>=4503599627370496)return K;if(l=function(e){var n,t;return r(e)||er(e)?NaN:0===(n=re(t=e%2))||1===n?Qr(0,t):n<.25?Me(xe*t):n<.75?Qr(Pe(xe*(n=.5-n)),t):n<1.25?(t=Qr(1,t)-t,Me(xe*t)):n<1.75?-Qr(Pe(xe*(n-=1.5)),t):(t-=Qr(2,t),Me(xe*t))}(e),0===l)return K;i=Ve(xe/re(l*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(g=-Ve(e),e>=Ze-1+.27?(y=1-e,a=0):e>=Ze-1-.27?(y=e-(Xe-1),a=1):(y=e,a=2)):(g=0,e>=Ze+.27?(y=2-e,a=0):e>=Ze-.27?(y=e-Xe,a=1):(y=e-1,a=2)),a){case 0:c=.07721566490153287+(d=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(d),u=d*(.3224670334241136+d*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(d)),g+=(f=y*c+u)-.5*y;break;case 1:c=.48383612272381005+(p=(d=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(p),u=p*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(p)-.1475877229945939,o=.06462494023913339+p*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(p),g+=(f=d*c-(-3638676997039505e-33-p*(u+y*o)))-.12148629053584961;break;case 2:c=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),u=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),g+=-.5*y+c/u}else if(e<8)switch(a=function(r){return r<0?Ge(r):n(r)}(e),f=(y=e-a)*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),s=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),g=.5*y+f/s,d=1,a){case 7:d*=y+6;case 6:d*=y+5;case 5:d*=y+4;case 4:d*=y+3;case 3:g+=Ve(d*=y+2)}else e<0x400000000000000?(l=Ve(e),p=.4189385332046727+(d=1/e)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=d*d),g=(e-.5)*(l-1)+p):g=e*(Ve(e)-1);return t&&(g=i-g),g}return function(e){var n;return r(e)||e<=0?NaN:Ye(n=e/2)+.5*(e-.6931471805599453-(e-1)*$e(n))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=e();
//# sourceMappingURL=browser.js.map
