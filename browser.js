// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n=Math.floor,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"",c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,c;if(null==r)return i.call(r);n=r[u],c=u,e=null!=(o=r)&&a.call(o,c);try{r[u]=void 0}catch(e){return i.call(r)}return t=i.call(r),e?r[u]=n:delete r[u],t}:function(r){return i.call(r)},f="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=e,g="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,n;if("function"!=typeof v)return!1;try{e=new v([1,3.14,-3.14,NaN]),n=e,r=(g&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,N=h,E="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,r=(E&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var k,x={uint16:_,uint8:N};(k=new x.uint16(1))[0]=4660;var I=52===new x.uint8(k.buffer)[0],F=!0===I?1:0,j=new w(1),T=new y(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===I?0:1,$=new w(1),G=new y($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}var W=.7853981633974483,C=3061616997868383e-32,L=.3333333333333341,P=2147483647;function R(r,e,n){var t,i,a,o,u,c,f,s,l;return(i=(t=O(r))&P|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=W-r)+(s=C-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),f=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((u=l*r)*(o+f)+e),s=r+(o+=L*u),i>=1072010280?(1-(t>>30&2))*((f=n)-2*(r-(s*s/(s+f)-o))):1===n?s:(f=o-((l=H(s,0))-r),(c=H(a=-1/s,0))+a*((u=1+c*l)+c*f))}var M,Z,X=2147483647,Y=2146435072,z=1048575,q=!0===I?0:1,B=new w(1),D=new y(B.buffer);!0===I?(M=1,Z=0):(M=0,Z=1);var J={HIGH:M,LOW:Z},K=new w(1),Q=new y(K.buffer),rr=J.HIGH,er=J.LOW;function nr(r,e){return Q[rr]=r,Q[er]=e,K[0]}var tr=Number.POSITIVE_INFINITY,ir=Number.NEGATIVE_INFINITY,ar=1023,or=1023,ur=-1023,cr=-1074;function fr(r){return r===tr||r===ir}var sr=2147483648,lr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty;function yr(r){return"number"==typeof r}function gr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function vr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+gr(i):gr(i)+r,t&&(r="-"+r)),r}var dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function wr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!yr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=vr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=vr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===hr.call(r.specifier)?hr.call(n):dr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var br=Math.abs,mr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase,_r=String.prototype.replace,Nr=/e\+(\d)$/,Er=/e-(\d)$/,Ur=/^(\d+)$/,Sr=/^(\d+)e/,kr=/\.0$/,xr=/\.0*e/,Ir=/(\..*[^0])0*e/;function Fr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!yr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":br(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=_r.call(n,Ir,"$1e"),n=_r.call(n,xr,"e"),n=_r.call(n,kr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_r.call(n,Nr,"e+0$1"),n=_r.call(n,Er,"e-0$1"),r.alternate&&(n=_r.call(n,Ur,"$1."),n=_r.call(n,Sr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Ar.call(r.specifier)?Ar.call(n):mr.call(n)}function jr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Tr=String.fromCharCode,Or=Array.isArray;function Vr(r){return r!=r}function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gr(r){var e,n,t,i,a,o,u,c,f,s,l,p,y;if(!Or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if("string"==typeof(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=$r(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Vr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Vr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=wr(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Vr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Vr(a)?String(t.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Fr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=vr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+jr(y):jr(y)+s)),o+=t.arg||"",u+=1}return o}var Hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,n,t,i;for(n=[],i=0,t=Hr.exec(r);t;)(e=r.slice(i,Hr.lastIndex-t[0].length)).length&&n.push(e),n.push(Wr(t)),i=Hr.lastIndex,t=Hr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Lr(r){var e,n;if("string"!=typeof r)throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Cr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Gr.apply(null,e)}var Pr,Rr,Mr=Object.prototype,Zr=Mr.toString,Xr=Mr.__defineGetter__,Yr=Mr.__defineSetter__,zr=Mr.__lookupGetter__,qr=Mr.__lookupSetter__,Br=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Zr.call(r))throw new TypeError(Lr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Zr.call(n))throw new TypeError(Lr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(zr.call(r,e)||qr.call(r,e)?(t=r.__proto__,r.__proto__=Mr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Xr&&Xr.call(r,e,n.get),o&&Yr&&Yr.call(r,e,n.set),r};function Dr(r,e,n){Br(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===I?(Pr=1,Rr=0):(Pr=0,Rr=1);var Jr={HIGH:Pr,LOW:Rr},Kr=new w(1),Qr=new y(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function ne(r,e,n,t){return Kr[0]=r,e[t]=Qr[re],e[t+n]=Qr[ee],e}function te(r){return ne(r,[0,0],1,0)}Dr(te,"assign",ne);var ie=[0,0];function ae(r,e){var n,t;return te.assign(r,ie,1,0),n=ie[0],n&=X,t=O(e),nr(n|=t&=sr,ie[1])}var oe=22250738585072014e-324;function ue(r){return Math.abs(r)}var ce=4503599627370496;function fe(e,n,t,i){return r(e)||fr(e)?(n[i]=e,n[i+t]=0,n):0!==e&&ue(e)<oe?(n[i]=e*ce,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Dr((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var se=2220446049250313e-31,le=2148532223,pe=[0,0],ye=[0,0];function ge(e,n){var t,i;return 0===n||0===e||r(e)||fr(e)?e:(fe(e,pe,1,0),e=pe[0],n+=pe[1],n+=function(r){var e=O(r);return(e=(e&Y)>>>20)-ar|0}(e),n<cr?ae(0,e):n>or?e<0?ir:tr:(n<=ur?(n+=52,i=se):i=1,te.assign(e,ye,1,0),t=ye[0],t&=le,i*nr(t|=n+ar<<20,ye[1])))}function ve(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],he=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],we=16777216,be=5.960464477539063e-8,me=ve(20),Ae=ve(20),_e=ve(20),Ne=ve(20);function Ee(r,e,t,i,a,o,u,c,f){var s,l,p,y,g,v,d,h,w;for(y=o,w=i[t],h=t,g=0;h>0;g++)l=be*w|0,Ne[g]=w-we*l|0,w=i[h-1]+l,h-=1;if(w=ge(w,a),w-=8*n(.125*w),w-=d=0|w,p=0,a>0?(d+=g=Ne[t-1]>>24-a,Ne[t-1]-=g<<24-a,p=Ne[t-1]>>23-a):0===a?p=Ne[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<t;g++)h=Ne[g],0===s?0!==h&&(s=1,Ne[g]=16777216-h):Ne[g]=16777215-h;if(a>0)switch(a){case 1:Ne[t-1]&=8388607;break;case 2:Ne[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ge(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=Ne[g];if(0===h){for(v=1;0===Ne[o-v];v++);for(g=t+1;g<=t+v;g++){for(f[c+g]=de[u+g],l=0,h=0;h<=c;h++)l+=r[h]*f[c+(g-h)];i[g]=l}return Ee(r,e,t+=v,i,a,o,u,c,f)}}if(0===w)for(t-=1,a-=24;0===Ne[t];)t-=1,a-=24;else(w=ge(w,-a))>=we?(l=be*w|0,Ne[t]=w-we*l|0,a+=24,Ne[t+=1]=l):Ne[t]=0|w;for(l=ge(1,a),g=t;g>=0;g--)i[g]=l*Ne[g],l*=be;for(g=t;g>=0;g--){for(l=0,v=0;v<=y&&v<=t-g;v++)l+=he[v]*i[g+v];_e[t-g]=l}for(l=0,g=t;g>=0;g--)l+=_e[g];for(e[0]=0===p?l:-l,l=_e[0]-l,g=1;g<=t;g++)l+=_e[g];return e[1]=0===p?l:-l,7&d}function Ue(r,e,n,t){var i,a,o,u,c,f,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)me[c]=f<0?0:de[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*me[o+(c-f)];Ae[c]=i}return Ee(r,e,4,Ae,u,4,a,o,me)}var Se=Math.round,ke=.6366197723675814,xe=1.5707963267341256,Ie=6077100506506192e-26,Fe=6077100506303966e-26,je=20222662487959506e-37,Te=20222662487111665e-37,Oe=84784276603689e-45,Ve=2047;function $e(r,e,n){var t,i,a,o,u;return a=r-(t=Se(r*ke))*xe,o=t*Ie,u=e>>20|0,n[0]=a-o,u-(O(n[0])>>20&Ve)>16&&(o=t*je-((i=a)-(a=i-(o=t*Fe))-o),n[0]=a-o,u-(O(n[0])>>20&Ve)>49&&(o=t*Oe-((i=a)-(a=i-(o=t*Te))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ge=0,He=16777216,We=1.5707963267341256,Ce=6077100506506192e-26,Le=2*Ce,Pe=3*Ce,Re=4*Ce,Me=598523,Ze=1072243195,Xe=1073928572,Ye=1074752122,ze=1074977148,qe=1075183036,Be=1075388923,De=1075594811,Je=1094263291,Ke=[0,0,0],Qe=[0,0];function rn(r,e){var n,t,i,a,o,u,c;if((i=O(r)&X|0)<=Ze)return e[0]=r,e[1]=0,0;if(i<=Ye)return(i&z)===Me?$e(r,i,e):i<=Xe?r>0?(c=r-We,e[0]=c-Ce,e[1]=c-e[0]-Ce,1):(c=r+We,e[0]=c+Ce,e[1]=c-e[0]+Ce,-1):r>0?(c=r-2*We,e[0]=c-Le,e[1]=c-e[0]-Le,2):(c=r+2*We,e[0]=c+Le,e[1]=c-e[0]+Le,-2);if(i<=De)return i<=qe?i===ze?$e(r,i,e):r>0?(c=r-3*We,e[0]=c-Pe,e[1]=c-e[0]-Pe,3):(c=r+3*We,e[0]=c+Pe,e[1]=c-e[0]+Pe,-3):i===Be?$e(r,i,e):r>0?(c=r-4*We,e[0]=c-Re,e[1]=c-e[0]-Re,4):(c=r+4*We,e[0]=c+Re,e[1]=c-e[0]+Re,-4);if(i<Je)return $e(r,i,e);if(i>=Y)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return B[0]=r,D[q]}(r),c=nr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ke[o]=0|c,c=(c-Ke[o])*He;for(Ke[2]=c,a=3;Ke[a-1]===Ge;)a-=1;return u=Ue(Ke,Qe,t,a),r<0?(e[0]=-Qe[0],e[1]=-Qe[1],-u):(e[0]=Qe[0],e[1]=Qe[1],u)}var en=[0,0],nn=2147483647,tn=1072243195,an=2146435072,on=1044381696,un=3.141592653589793,cn=!0===I?1:0,fn=new w(1),sn=new y(fn.buffer),ln=.6931471803691238,pn=1.9082149292705877e-10,yn=0x40000000000000,gn=.3333333333333333,vn=1048575,dn=2146435072,hn=1048576,wn=1072693248;function bn(e){var n,t,i,a,o,u,c,f,s,l,p,y;return 0===e?ir:r(e)||e<0?NaN:(o=0,(t=O(e))<hn&&(o-=54,t=O(e*=yn)),t>=dn?e+e:(o+=(t>>20)-ar|0,o+=(f=614244+(t&=vn)&1048576|0)>>20|0,c=(e=function(r,e){return fn[0]=r,sn[cn]=e>>>0,fn[0]}(e,t|f^wn))-1,(vn&2+t)<3?0===c?0===o?0:o*ln+o*pn:(u=c*c*(.5-gn*c),0===o?c-u:o*ln-(u-o*pn-c)):(f=t-398458|0,s=440401-t|0,a=(p=(y=(l=c/(2+c))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(f|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+u)):o*ln-(n-(l*(n+u)+o*pn)-c)):0===o?c-l*(c-u):o*ln-(l*(c-u)-o*pn-c))))}var mn=1.4616321446374059,An=3.309564688275257e-10,_n=9.016312093258695e-20,Nn=.9955816268920898,En=10;function Un(e){var t,i;if(r(e)||0===e)return NaN;if(e<=-1){if((t=(e=1-e)-n(e))>.5&&(t-=1),0===t)return NaN;i=un/function(r){var e,n;return e=O(r),(e&=nn)<=tn?e<on?r:R(r,0,1):e>=an?NaN:(n=rn(r,en),R(en[0],en[1],1-((1&n)<<1)))}(un*t)}else i=0;if(e>=En)return i+=function(r){var e;return bn(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(e),i;for(;e>2;)i+=1/(e-=1);for(;e<1;)i-=1/e,e+=1;return i+=function(r){var e,n;return e=r-mn,e-=An,e-=_n,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),e*Nn+e*n}(e),i}var Sn=Math.ceil;function kn(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var xn=-.16666666666666632,In=.00833333333332249,Fn=-.0001984126982985795,jn=27557313707070068e-22,Tn=-2.5050760253406863e-8,On=1.58969099521155e-10;function Vn(r,e){var n,t,i;return n=In+(i=r*r)*(Fn+i*jn)+i*(i*i)*(Tn+i*On),t=i*r,0===e?r+t*(xn+i*n):r-(i*(.5*e-t*n)-e-t*xn)}var $n=[0,0],Gn=2147483647,Hn=1072243195,Wn=1044381696,Cn=2146435072;function Ln(r){var e;if(e=O(r),(e&=Gn)<=Hn)return e<Wn?1:kn(r,0);if(e>=Cn)return NaN;switch(3&rn(r,$n)){case 0:return kn($n[0],$n[1]);case 1:return-Vn($n[0],$n[1]);case 2:return-kn($n[0],$n[1]);default:return Vn($n[0],$n[1])}}var Pn=1072243195,Rn=1045430272,Mn=[0,0];function Zn(r){var e;if(e=O(r),(e&=X)<=Pn)return e<Rn?r:Vn(r,0);if(e>=Y)return NaN;switch(3&rn(r,Mn)){case 0:return Vn(Mn[0],Mn[1]);case 1:return kn(Mn[0],Mn[1]);case 2:return-Vn(Mn[0],Mn[1]);default:return-kn(Mn[0],Mn[1])}}var Xn=.07721566490153287,Yn=.3224670334241136,zn=1,qn=-.07721566490153287,Bn=.48383612272381005,Dn=-.1475877229945939,Jn=.06462494023913339,Kn=-.07721566490153287,Qn=1,rt=.4189385332046727,et=1.4616321449683622,nt=4503599627370496,tt=0x400000000000000,it=8470329472543003e-37,at=1.4616321449683622,ot=-.12148629053584961,ut=-3638676997039505e-33;function ct(e){var t,i,a,o,u,c,f,s,l,p,y,g,v;if(r(e)||fr(e))return e;if(0===e)return tr;if(e<0?(t=!0,e=-e):t=!1,e<it)return-bn(e);if(t){if(e>=nt)return tr;if(l=function(e){var n,t;return r(e)||fr(e)?NaN:0===(n=ue(t=e%2))||1===n?ae(0,t):n<.25?Zn(un*t):n<.75?ae(Ln(un*(n=.5-n)),t):n<1.25?(t=ae(1,t)-t,Zn(un*t)):n<1.75?-ae(Ln(un*(n-=1.5)),t):(t-=ae(2,t),Zn(un*t))}(e),0===l)return tr;i=bn(un/ue(l*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(v=-bn(e),e>=et-1+.27?(y=1-e,a=0):e>=et-1-.27?(y=e-(at-1),a=1):(y=e,a=2)):(v=0,e>=et+.27?(y=2-e,a=0):e>=et-.27?(y=e-at,a=1):(y=e-1,a=2)),a){case 0:c=Xn+(g=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(g),u=g*(Yn+g*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(g)),v+=(f=y*c+u)-.5*y;break;case 1:c=Bn+(p=(g=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(p),u=Dn+p*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(p),o=Jn+p*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(p),v+=ot+(f=g*c-(ut-p*(u+y*o)));break;case 2:c=y*(Kn+y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)),u=Qn+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),v+=-.5*y+c/u}else if(e<8)switch(a=function(r){return r<0?Sn(r):n(r)}(e),f=(y=e-a)*(qn+y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)),s=zn+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),v=.5*y+f/s,g=1,a){case 7:g*=y+6;case 6:g*=y+5;case 5:g*=y+4;case 4:g*=y+3;case 3:v+=bn(g*=y+2)}else e<tt?(l=bn(e),p=rt+(g=1/e)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=g*g),v=(e-.5)*(l-1)+p):v=e*(bn(e)-1);return t&&(v=i-v),v}return function(e){var n;return r(e)||e<=0?NaN:ct(n=e/2)+.5*(e-.6931471805599453-(e-1)*Un(n))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=e();
//# sourceMappingURL=browser.js.map
