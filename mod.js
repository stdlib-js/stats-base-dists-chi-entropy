// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Math.floor;var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var e=function(){return t&&"symbol"==typeof Symbol.toStringTag},u=Object.prototype.toString,f=u;var o=function(r){return f.call(r)},a=Object.prototype.hasOwnProperty;var i=function(r,n){return null!=r&&a.call(r,n)},c="function"==typeof Symbol?Symbol.toStringTag:"",v=i,y=c,l=u;var s=o,w=function(r){var n,t,e;if(null==r)return l.call(r);t=r[y],n=v(r,y);try{r[y]=void 0}catch(n){return l.call(r)}return e=l.call(r),n?r[y]=t:delete r[y],e},p=e()?w:s,A=p,N="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,h=function(r){return N&&r instanceof Uint32Array||"[object Uint32Array]"===A(r)},U=b;var m=function(){var r,n;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),r=h(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var d="function"==typeof Uint32Array?Uint32Array:void 0,I=function(){throw new Error("not implemented")},F=m()?d:I,S=p,H="function"==typeof Float64Array;var O="function"==typeof Float64Array?Float64Array:null,g=function(r){return H&&r instanceof Float64Array||"[object Float64Array]"===S(r)},E=O;var j=function(){var r,n;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),r=g(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var T="function"==typeof Float64Array?Float64Array:void 0,G=function(){throw new Error("not implemented")},L=j()?T:G,M=p,W="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null,x=function(r){return W&&r instanceof Uint8Array||"[object Uint8Array]"===M(r)},P=k;var V=function(){var r,n;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=x(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},q=V()?Y:_,z=p,B="function"==typeof Uint16Array;var C="function"==typeof Uint16Array?Uint16Array:null,D=function(r){return B&&r instanceof Uint16Array||"[object Uint16Array]"===z(r)},J=C;var K=function(){var r,n;if("function"!=typeof J)return!1;try{n=new J(n=[1,3.14,-3.14,65536,65537]),r=D(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Q,R="function"==typeof Uint16Array?Uint16Array:void 0,X=function(){throw new Error("not implemented")},Z={uint16:K()?R:X,uint8:q};(Q=new Z.uint16(1))[0]=4660;var $=52===new Z.uint8(Q.buffer)[0],rr=F,nr=!0===$?1:0,tr=new L(1),er=new rr(tr.buffer);var ur=function(r){return tr[0]=r,er[nr]},fr=F,or=!0===$?0:1,ar=new L(1),ir=new fr(ar.buffer);var cr=function(r,n){return ar[0]=r,ir[or]=n>>>0,ar[0]};var vr=ur,yr=cr,lr=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))},sr=function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))};var wr=function(r,n,t){var e,u,f,o,a,i,c,v,y;return(u=2147483647&(e=vr(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(v=3061616997868383e-32-n),n=0),o=n+(y=r*r)*((a=y*r)*((o=lr(v=y*y))+(c=y*sr(v)))+n),v=r+(o+=.3333333333333341*a),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(v*v/(v+c)-o))):1===t?v:(yr(y=v,0),c=o-(y-r),yr(i=f=-1/v,0),i+f*((a=1+i*y)+i*c))},pr=F,Ar=!0===$?0:1,Nr=new L(1),br=new pr(Nr.buffer);var hr,Ur,mr=function(r){return Nr[0]=r,br[Ar]};!0===$?(hr=1,Ur=0):(hr=0,Ur=1);var dr=F,Ir={HIGH:hr,LOW:Ur},Fr=new L(1),Sr=new dr(Fr.buffer),Hr=Ir.HIGH,Or=Ir.LOW;var gr=function(r,n){return Sr[Hr]=r,Sr[Or]=n,Fr[0]},Er=gr,jr=Number.POSITIVE_INFINITY,Tr=Number.NEGATIVE_INFINITY,Gr=jr,Lr=Tr;var Mr,Wr,kr=function(r){return r===Gr||r===Lr};!0===$?(Mr=1,Wr=0):(Mr=0,Wr=1);var xr=F,Pr={HIGH:Mr,LOW:Wr},Vr=new L(1),Yr=new xr(Vr.buffer),_r=Pr.HIGH,qr=Pr.LOW;var zr=function(r,n){return Vr[0]=n,r[0]=Yr[_r],r[1]=Yr[qr],r};var Br=function(r,n){return 1===arguments.length?zr([0,0],r):zr(r,n)},Cr=Br,Dr=ur,Jr=Er,Kr=[0,0];var Qr=function(r,n){var t,e;return Cr(Kr,r),t=Kr[0],t&=2147483647,e=Dr(n),Jr(t|=e&=2147483648,Kr[1])};var Rr=function(r){return Math.abs(r)},Xr=kr,Zr=r,$r=Rr;var rn=function(r,n){return Zr(n)||Xr(n)?(r[0]=n,r[1]=0,r):0!==n&&$r(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var nn=ur;var tn=function(r){var n=nn(r);return(n=(2146435072&n)>>>20)-1023|0},en=jr,un=Tr,fn=r,on=kr,an=Qr,cn=function(r,n){return 1===arguments.length?rn([0,0],r):rn(r,n)},vn=tn,yn=Br,ln=Er,sn=[0,0],wn=[0,0];var pn=function(r,n){var t,e;return 0===n||0===r||fn(r)||on(r)?r:(cn(sn,r),n+=sn[1],(n+=vn(r=sn[0]))<-1074?an(0,r):n>1023?r<0?un:en:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,yn(wn,r),t=wn[0],t&=2148532223,e*ln(t|=n+1023<<20,wn[1])))};var An=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var Nn=n,bn=pn,hn=function(r){return An(0,r)},Un=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],dn=5.960464477539063e-8,In=hn(20),Fn=hn(20),Sn=hn(20),Hn=hn(20);function On(r,n,t,e,u,f,o,a,i){var c,v,y,l,s,w,p,A,N;for(l=f,N=e[t],A=t,s=0;A>0;s++)v=dn*N|0,Hn[s]=N-16777216*v|0,N=e[A-1]+v,A-=1;if(N=bn(N,u),N-=8*Nn(.125*N),N-=p=0|N,y=0,u>0?(p+=s=Hn[t-1]>>24-u,Hn[t-1]-=s<<24-u,y=Hn[t-1]>>23-u):0===u?y=Hn[t-1]>>23:N>=.5&&(y=2),y>0){for(p+=1,c=0,s=0;s<t;s++)A=Hn[s],0===c?0!==A&&(c=1,Hn[s]=16777216-A):Hn[s]=16777215-A;if(u>0)switch(u){case 1:Hn[t-1]&=8388607;break;case 2:Hn[t-1]&=4194303}2===y&&(N=1-N,0!==c&&(N-=bn(1,u)))}if(0===N){for(A=0,s=t-1;s>=f;s--)A|=Hn[s];if(0===A){for(w=1;0===Hn[f-w];w++);for(s=t+1;s<=t+w;s++){for(i[a+s]=Un[o+s],v=0,A=0;A<=a;A++)v+=r[A]*i[a+(s-A)];e[s]=v}return On(r,n,t+=w,e,u,f,o,a,i)}}if(0===N)for(t-=1,u-=24;0===Hn[t];)t-=1,u-=24;else(N=bn(N,-u))>=16777216?(v=dn*N|0,Hn[t]=N-16777216*v|0,u+=24,Hn[t+=1]=v):Hn[t]=0|N;for(v=bn(1,u),s=t;s>=0;s--)e[s]=v*Hn[s],v*=dn;for(s=t;s>=0;s--){for(v=0,w=0;w<=l&&w<=t-s;w++)v+=mn[w]*e[s+w];Sn[t-s]=v}for(v=0,s=t;s>=0;s--)v+=Sn[s];for(n[0]=0===y?v:-v,v=Sn[0]-v,s=1;s<=t;s++)v+=Sn[s];return n[1]=0===y?v:-v,7&p}var gn=function(r,n,t,e){var u,f,o,a,i,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),a=t-24*(f+1),c=f-(o=e-1),v=o+4,i=0;i<=v;i++)In[i]=c<0?0:Un[c],c+=1;for(i=0;i<=4;i++){for(u=0,c=0;c<=o;c++)u+=r[c]*In[o+(i-c)];Fn[i]=u}return 4,On(r,n,4,Fn,a,4,f,o,In)},En=Math.round,jn=ur;var Tn=ur,Gn=mr,Ln=Er,Mn=gn,Wn=function(r,n,t){var e,u,f,o,a;return f=r-1.5707963267341256*(e=En(.6366197723675814*r)),o=6077100506506192e-26*e,a=n>>20|0,t[0]=f-o,a-(jn(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((u=f)-(f=u-(o=6077100506303966e-26*e))-o),t[0]=f-o,a-(jn(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((u=f)-(f=u-(o=20222662487111665e-37*e))-o),t[0]=f-o)),t[1]=f-t[0]-o,e},kn=1.5707963267341256,xn=6077100506506192e-26,Pn=2*xn,Vn=4*xn,Yn=[0,0,0],_n=[0,0];var qn=function(r,n){var t,e,u,f,o,a,i;if((u=2147483647&Tn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Wn(r,u,n):u<=1073928572?r>0?(i=r-kn,n[0]=i-xn,n[1]=i-n[0]-xn,1):(i=r+kn,n[0]=i+xn,n[1]=i-n[0]+xn,-1):r>0?(i=r-2*kn,n[0]=i-Pn,n[1]=i-n[0]-Pn,2):(i=r+2*kn,n[0]=i+Pn,n[1]=i-n[0]+Pn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Wn(r,u,n):r>0?(i=r-3*kn,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*kn,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===u?Wn(r,u,n):r>0?(i=r-4*kn,n[0]=i-Vn,n[1]=i-n[0]-Vn,4):(i=r+4*kn,n[0]=i+Vn,n[1]=i-n[0]+Vn,-4);if(u<1094263291)return Wn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Gn(r),i=Ln(u-((e=(u>>20)-1046)<<20|0),t),o=0;o<2;o++)Yn[o]=0|i,i=16777216*(i-Yn[o]);for(Yn[2]=i,f=3;0===Yn[f-1];)f-=1;return a=Mn(Yn,_n,e,f),r<0?(n[0]=-_n[0],n[1]=-_n[1],-a):(n[0]=_n[0],n[1]=_n[1],a)},zn=qn,Bn=ur,Cn=wr,Dn=zn,Jn=[0,0];var Kn=function(r){var n,t;return n=Bn(r),(n&=2147483647)<=1072243195?n<1044381696?r:Cn(r,0,1):n>=2146435072?NaN:(t=Dn(r,Jn),Cn(Jn[0],Jn[1],1-((1&t)<<1)))},Qn=3.141592653589793,Rn=F,Xn=!0===$?1:0,Zn=new L(1),$n=new Rn(Zn.buffer);var rt=function(r,n){return Zn[0]=r,$n[Xn]=n>>>0,Zn[0]};var nt=ur,tt=rt,et=r,ut=Tr,ft=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ot=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},at=.6931471803691238,it=1.9082149292705877e-10;var ct=function(r){var n,t,e,u,f,o,a,i,c,v,y;return 0===r?ut:et(r)||r<0?NaN:(u=0,(t=nt(r))<1048576&&(u-=54,t=nt(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=tt(r,t|1072693248^a))-1,(1048575&2+t)<3?0===o?0===u?0:u*at+u*it:(f=o*o*(.5-.3333333333333333*o),0===u?o-f:u*at-(f-u*it-o)):(a=t-398458|0,i=440401-t|0,e=(v=(y=(c=o/(2+o))*c)*y)*ft(v),f=y*ot(v)+e,(a|=i)>0?(n=.5*o*o,0===u?o-(n-c*(n+f)):u*at-(n-(c*(n+f)+u*it)-o)):0===u?o-c*(o-f):u*at-(c*(o-f)-u*it-o))))};var vt=ct,yt=function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)};var lt=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)};var st=r,wt=n,pt=Kn,At=Qn,Nt=function(r){var n;return vt(r-=1)+1/(2*r)-(n=1/(r*r))*yt(n)},bt=function(r){var n;return n=r-1.4616321446374059,n-=3.309564688275257e-10,.9955816268920898*(n-=9.016312093258695e-20)+n*lt(r-1)};var ht=function(r){var n,t;if(st(r)||0===r)return NaN;if(r<=-1){if((n=(r=1-r)-wt(r))>.5&&(n-=1),0===n)return NaN;t=At/pt(At*n)}else t=0;if(r>=10)return t+=Nt(r);for(;r>2;)t+=1/(r-=1);for(;r<1;)t-=1/r,r+=1;return t+=bt(r)},Ut=Math.ceil,mt=n,dt=Ut;var It=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Ft=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var St=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*It(f),e+=u*u*Ft(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},Ht=-.16666666666666632;var Ot=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Ht+u*t):r-(u*(.5*n-e*t)-n-e*Ht)},gt=ur,Et=St,jt=Ot,Tt=zn,Gt=[0,0];var Lt=ur,Mt=St,Wt=Ot,kt=zn,xt=[0,0];var Pt=r,Vt=kr,Yt=function(r){var n;if(n=gt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Et(r,0);if(n>=2146435072)return NaN;switch(3&Tt(r,Gt)){case 0:return Et(Gt[0],Gt[1]);case 1:return-jt(Gt[0],Gt[1]);case 2:return-Et(Gt[0],Gt[1]);default:return jt(Gt[0],Gt[1])}},_t=function(r){var n;if(n=Lt(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Wt(r,0);if(n>=2146435072)return NaN;switch(3&kt(r,xt)){case 0:return Wt(xt[0],xt[1]);case 1:return Mt(xt[0],xt[1]);case 2:return-Wt(xt[0],xt[1]);default:return-Mt(xt[0],xt[1])}},qt=Rr,zt=Qr,Bt=Qn;var Ct=r,Dt=kr,Jt=Rr,Kt=ct,Qt=function(r){return r<0?dt(r):mt(r)},Rt=function(r){var n,t;return Pt(r)||Vt(r)?NaN:0===(n=qt(t=r%2))||1===n?zt(0,t):n<.25?_t(Bt*t):n<.75?zt(Yt(Bt*(n=.5-n)),t):n<1.25?(t=zt(1,t)-t,_t(Bt*t)):n<1.75?-zt(Yt(Bt*(n-=1.5)),t):(t-=zt(2,t),_t(Bt*t))},Xt=jr,Zt=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},$t=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},re=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},ne=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},te=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},ee=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},ue=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},fe=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},oe=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},ae=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},ie=1.4616321449683622,ce=1.4616321449683622;var ve=function(r){var n,t,e,u,f,o,a,i;if(Ct(r)||Dt(r))return r;if(0===r)return Xt;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Kt(r);if(n){if(r>=4503599627370496)return Xt;if(0===(u=Rt(r)))return Xt;t=Kt(3.141592653589793/Jt(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(i=-Kt(r),r>=ie-1+.27?(o=1-r,e=0):r>=ie-1-.27?(o=r-(ce-1),e=1):(o=r,e=2)):(i=0,r>=ie+.27?(o=2-r,e=0):r>=ie-.27?(o=r-ce,e=1):(o=r-1,e=2)),e){case 0:i+=o*(.07721566490153287+(a=o*o)*Zt(a))+a*(.3224670334241136+a*$t(a))-.5*o;break;case 1:i+=-.12148629053584961+((a=o*o)*(.48383612272381005+(f=a*o)*te(f))-(-3638676997039505e-33-f*(f*ee(f)-.1475877229945939+o*(.06462494023913339+f*ue(f)))));break;case 2:i+=-.5*o+o*(o*fe(o)-.07721566490153287)/(1+o*oe(o))}else if(r<8)switch(i=.5*(o=r-(e=Qt(r)))+o*(o*ne(o)-.07721566490153287)/(1+o*re(o)),a=1,e){case 7:a*=o+6;case 6:a*=o+5;case 5:a*=o+4;case 4:a*=o+3;case 3:i+=Kt(a*=o+2)}else i=r<0x400000000000000?(r-.5)*((u=Kt(r))-1)+(f=.4189385332046727+(a=1/r)*ae(o=a*a)):r*(Kt(r)-1);return n&&(i=t-i),i};function ye(n){var t;return r(n)||n<=0?NaN:ve(t=n/2)+.5*(n-.6931471805599453-(n-1)*ht(t))}export{ye as default};
//# sourceMappingURL=mod.js.map