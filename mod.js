// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,a,i,f;if(null==r)return e.call(r);t=r[o],f=o,n=null!=(i=r)&&u.call(i,f);try{r[o]=void 0}catch(n){return e.call(r)}return a=e.call(r),n?r[o]=t:delete r[o],a}:function(r){return e.call(r)},i="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var c,l="function"==typeof Uint32Array?Uint32Array:void 0;c=function(){var r,n,t;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(i&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?l:function(){throw new Error("not implemented")};var v=c,y="function"==typeof Float64Array;var s="function"==typeof Float64Array?Float64Array:null;var p,b="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),t=n,r=(y&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w=p,A="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var N,d="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,256,257]),t=n,r=(A&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=N,m="function"==typeof Uint16Array;var U="function"==typeof Uint16Array?Uint16Array:null;var g,j="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,65536,65537]),t=n,r=(m&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O={uint16:g,uint8:h};(I=new O.uint16(1))[0]=4660;var S=52===new O.uint8(I.buffer)[0],E=!0===S?1:0,F=new w(1),H=new v(F.buffer);function T(r){return F[0]=r,H[E]}var G=!0===S?0:1,P=new w(1),k=new v(P.buffer);function x(r,n){return P[0]=r,k[G]=n>>>0,P[0]}function L(r,n,t){var e,u,o,a,i,f,c,l,v;return(u=2147483647&(e=T(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(v=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(v=r*r)*v),c=v*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=n+v*((i=v*r)*(a+c)+n),l=r+(a+=.3333333333333341*i),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-a))):1===t?l:(x(v=l,0),c=a-(v-r),x(f=o=-1/l,0),f+o*((i=1+f*v)+f*c))}var M,V,W=!0===S?0:1,Y=new w(1),C=new v(Y.buffer);!0===S?(M=1,V=0):(M=0,V=1);var q={HIGH:M,LOW:V},z=new w(1),B=new v(z.buffer),D=q.HIGH,J=q.LOW;function K(r,n){return B[D]=r,B[J]=n,z[0]}var Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function X(r){return r===Q||r===R}var Z="function"==typeof Object.defineProperty?Object.defineProperty:null;var $=Object.defineProperty,rr=Object.prototype,nr=rr.toString,tr=rr.__defineGetter__,er=rr.__defineSetter__,ur=rr.__lookupGetter__,or=rr.__lookupSetter__;var ar,ir,fr=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?$:function(r,n,t){var e,u,o,a;if("object"!=typeof r||null===r||"[object Array]"===nr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===nr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(ur.call(r,n)||or.call(r,n)?(e=r.__proto__,r.__proto__=rr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,u&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&tr&&tr.call(r,n,t.get),a&&er&&er.call(r,n,t.set),r};function cr(r,n,t){fr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===S?(ar=1,ir=0):(ar=0,ir=1);var lr={HIGH:ar,LOW:ir},vr=new w(1),yr=new v(vr.buffer),sr=lr.HIGH,pr=lr.LOW;function br(r,n,t,e){return vr[0]=r,n[e]=yr[sr],n[e+t]=yr[pr],n}function wr(r){return br(r,[0,0],1,0)}cr(wr,"assign",br);var Ar=[0,0];function _r(r,n){var t,e;return wr.assign(r,Ar,1,0),t=Ar[0],t&=2147483647,e=T(n),K(t|=e&=2147483648,Ar[1])}function Nr(r){return Math.abs(r)}function dr(n,t,e,u){return r(n)||X(n)?(t[u]=n,t[u+e]=0,t):0!==n&&Nr(n)<22250738585072014e-324?(t[u]=4503599627370496*n,t[u+e]=-52,t):(t[u]=n,t[u+e]=0,t)}cr((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var hr=[0,0],mr=[0,0];function Ur(n,t){var e,u;return 0===t||0===n||r(n)||X(n)?n:(dr(n,hr,1,0),t+=hr[1],t+=function(r){var n=T(r);return(n=(2146435072&n)>>>20)-1023|0}(n=hr[0]),t<-1074?_r(0,n):t>1023?n<0?R:Q:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,wr.assign(n,mr,1,0),e=mr[0],e&=2148532223,u*K(e|=t+1023<<20,mr[1])))}function gr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var jr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ir=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Or=5.960464477539063e-8,Sr=gr(20),Er=gr(20),Fr=gr(20),Hr=gr(20);function Tr(r,t,e,u,o,a,i,f,c){var l,v,y,s,p,b,w,A,_;for(s=a,_=u[e],A=e,p=0;A>0;p++)v=Or*_|0,Hr[p]=_-16777216*v|0,_=u[A-1]+v,A-=1;if(_=Ur(_,o),_-=8*n(.125*_),_-=w=0|_,y=0,o>0?(w+=p=Hr[e-1]>>24-o,Hr[e-1]-=p<<24-o,y=Hr[e-1]>>23-o):0===o?y=Hr[e-1]>>23:_>=.5&&(y=2),y>0){for(w+=1,l=0,p=0;p<e;p++)A=Hr[p],0===l?0!==A&&(l=1,Hr[p]=16777216-A):Hr[p]=16777215-A;if(o>0)switch(o){case 1:Hr[e-1]&=8388607;break;case 2:Hr[e-1]&=4194303}2===y&&(_=1-_,0!==l&&(_-=Ur(1,o)))}if(0===_){for(A=0,p=e-1;p>=a;p--)A|=Hr[p];if(0===A){for(b=1;0===Hr[a-b];b++);for(p=e+1;p<=e+b;p++){for(c[f+p]=jr[i+p],v=0,A=0;A<=f;A++)v+=r[A]*c[f+(p-A)];u[p]=v}return Tr(r,t,e+=b,u,o,a,i,f,c)}}if(0===_)for(e-=1,o-=24;0===Hr[e];)e-=1,o-=24;else(_=Ur(_,-o))>=16777216?(v=Or*_|0,Hr[e]=_-16777216*v|0,o+=24,Hr[e+=1]=v):Hr[e]=0|_;for(v=Ur(1,o),p=e;p>=0;p--)u[p]=v*Hr[p],v*=Or;for(p=e;p>=0;p--){for(v=0,b=0;b<=s&&b<=e-p;b++)v+=Ir[b]*u[p+b];Fr[e-p]=v}for(v=0,p=e;p>=0;p--)v+=Fr[p];for(t[0]=0===y?v:-v,v=Fr[0]-v,p=1;p<=e;p++)v+=Fr[p];return t[1]=0===y?v:-v,7&w}function Gr(r,n,t,e){var u,o,a,i,f,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(a=e-1),l=a+4,f=0;f<=l;f++)Sr[f]=c<0?0:jr[c],c+=1;for(f=0;f<=4;f++){for(u=0,c=0;c<=a;c++)u+=r[c]*Sr[a+(f-c)];Er[f]=u}return 4,Tr(r,n,4,Er,i,4,o,a,Sr)}var Pr=Math.round;function kr(r,n,t){var e,u,o,a,i;return o=r-1.5707963267341256*(e=Pr(.6366197723675814*r)),a=6077100506506192e-26*e,i=n>>20|0,t[0]=o-a,i-(T(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((u=o)-(o=u-(a=6077100506303966e-26*e))-a),t[0]=o-a,i-(T(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((u=o)-(o=u-(a=20222662487111665e-37*e))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var xr=1.5707963267341256,Lr=6077100506506192e-26,Mr=2*Lr,Vr=4*Lr,Wr=[0,0,0],Yr=[0,0];function Cr(r,n){var t,e,u,o,a,i,f;if((u=2147483647&T(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?kr(r,u,n):u<=1073928572?r>0?(f=r-xr,n[0]=f-Lr,n[1]=f-n[0]-Lr,1):(f=r+xr,n[0]=f+Lr,n[1]=f-n[0]+Lr,-1):r>0?(f=r-2*xr,n[0]=f-Mr,n[1]=f-n[0]-Mr,2):(f=r+2*xr,n[0]=f+Mr,n[1]=f-n[0]+Mr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?kr(r,u,n):r>0?(f=r-3*xr,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*xr,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===u?kr(r,u,n):r>0?(f=r-4*xr,n[0]=f-Vr,n[1]=f-n[0]-Vr,4):(f=r+4*xr,n[0]=f+Vr,n[1]=f-n[0]+Vr,-4);if(u<1094263291)return kr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Y[0]=r,C[W]}(r),f=K(u-((e=(u>>20)-1046)<<20|0),t),a=0;a<2;a++)Wr[a]=0|f,f=16777216*(f-Wr[a]);for(Wr[2]=f,o=3;0===Wr[o-1];)o-=1;return i=Gr(Wr,Yr,e,o),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-i):(n[0]=Yr[0],n[1]=Yr[1],i)}var qr=[0,0];var zr=3.141592653589793,Br=!0===S?1:0,Dr=new w(1),Jr=new v(Dr.buffer);var Kr=.6931471803691238,Qr=1.9082149292705877e-10;function Rr(n){var t,e,u,o,a,i,f,c,l,v,y,s;return 0===n?R:r(n)||n<0?NaN:(a=0,(e=T(n))<1048576&&(a-=54,e=T(n*=0x40000000000000)),e>=2146435072?n+n:(a+=(e>>20)-1023|0,a+=(c=(e&=1048575)+614244&1048576|0)>>20|0,f=(n=function(r,n){return Dr[0]=r,Jr[Br]=n>>>0,Dr[0]}(n,e|1072693248^c))-1,(1048575&2+e)<3?0===f?0===a?0:a*Kr+a*Qr:(i=f*f*(.5-.3333333333333333*f),0===a?f-i:a*Kr-(i-a*Qr-f)):(c=e-398458|0,l=440401-e|0,o=(y=(s=(v=f/(2+f))*v)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),u=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=u+o,(c|=l)>0?(t=.5*f*f,0===a?f-(t-v*(t+i)):a*Kr-(t-(v*(t+i)+a*Qr)-f)):0===a?f-v*(f-i):a*Kr-(v*(f-i)-a*Qr-f))))}function Xr(t){var e,u;if(r(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-n(t))>.5&&(e-=1),0===e)return NaN;u=zr/function(r){var n,t;return n=T(r),(n&=2147483647)<=1072243195?n<1044381696?r:L(r,0,1):n>=2146435072?NaN:(t=Cr(r,qr),L(qr[0],qr[1],1-((1&t)<<1)))}(zr*e)}else u=0;if(t>=10)return u+=function(r){var n;return Rr(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),u;for(;t>2;)u+=1/(t-=1);for(;t<1;)u-=1/t,t+=1;return u+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),u}var Zr=Math.ceil;function $r(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var rn=-.16666666666666632;function nn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(rn+u*t):r-(u*(.5*n-e*t)-n-e*rn)}var tn=[0,0];function en(r){var n;if(n=T(r),(n&=2147483647)<=1072243195)return n<1044381696?1:$r(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,tn)){case 0:return $r(tn[0],tn[1]);case 1:return-nn(tn[0],tn[1]);case 2:return-$r(tn[0],tn[1]);default:return nn(tn[0],tn[1])}}var un=[0,0];function on(r){var n;if(n=T(r),(n&=2147483647)<=1072243195)return n<1045430272?r:nn(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,un)){case 0:return nn(un[0],un[1]);case 1:return $r(un[0],un[1]);case 2:return-nn(un[0],un[1]);default:return-$r(un[0],un[1])}}var an=1.4616321449683622,fn=1.4616321449683622;function cn(t){var e,u,o,a,i,f,c,l,v,y,s,p,b;if(r(t)||X(t))return t;if(0===t)return Q;if(t<0?(e=!0,t=-t):e=!1,t<8470329472543003e-37)return-Rr(t);if(e){if(t>=4503599627370496)return Q;if(v=function(n){var t,e;return r(n)||X(n)?NaN:0===(t=Nr(e=n%2))||1===t?_r(0,e):t<.25?on(zr*e):t<.75?_r(en(zr*(t=.5-t)),e):t<1.25?(e=_r(1,e)-e,on(zr*e)):t<1.75?-_r(en(zr*(t-=1.5)),e):(e-=_r(2,e),on(zr*e))}(t),0===v)return Q;u=Rr(zr/Nr(v*t))}if(1===t||2===t)return 0;if(t<2)switch(t<=.9?(b=-Rr(t),t>=an-1+.27?(s=1-t,o=0):t>=an-1-.27?(s=t-(fn-1),o=1):(s=t,o=2)):(b=0,t>=an+.27?(s=2-t,o=0):t>=an-.27?(s=t-fn,o=1):(s=t-1,o=2)),o){case 0:f=.07721566490153287+(p=s*s)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),i=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),b+=(c=s*f+i)-.5*s;break;case 1:f=.48383612272381005+(y=(p=s*s)*s)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),i=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,a=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),b+=-.12148629053584961+(c=p*f-(-3638676997039505e-33-y*(i+s*a)));break;case 2:f=s*(s*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(s)-.07721566490153287),i=1+s*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(s),b+=-.5*s+f/i}else if(t<8)switch(o=function(r){return r<0?Zr(r):n(r)}(t),c=(s=t-o)*(s*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(s)-.07721566490153287),l=1+s*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(s),b=.5*s+c/l,p=1,o){case 7:p*=s+6;case 6:p*=s+5;case 5:p*=s+4;case 4:p*=s+3;case 3:b+=Rr(p*=s+2)}else t<0x400000000000000?(v=Rr(t),y=.4189385332046727+(p=1/t)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(s=p*p),b=(t-.5)*(v-1)+y):b=t*(Rr(t)-1);return e&&(b=u-b),b}function ln(n){var t;return r(n)||n<=0?NaN:cn(t=n/2)+.5*(n-.6931471805599453-(n-1)*Xr(t))}export{ln as default};
//# sourceMappingURL=mod.js.map
