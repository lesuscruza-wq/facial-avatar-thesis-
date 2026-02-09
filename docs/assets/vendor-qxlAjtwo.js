import{c as $r}from"./peerjs-DG2MMewn.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="181",uc=0,La=1,fc=2,Po=1,hc=2,On=3,ni=0,sn=1,Bn=2,Gn=0,Ui=1,Da=2,Ua=3,Ia=4,dc=5,hi=100,pc=101,mc=102,xc=103,gc=104,_c=200,vc=201,Mc=202,Sc=203,Cs=204,Ps=205,bc=206,yc=207,Ec=208,Tc=209,Ac=210,wc=211,Rc=212,Cc=213,Pc=214,Ls=0,Ds=1,Us=2,Ni=3,Is=4,Ns=5,Fs=6,Os=7,Lo=0,Lc=1,Dc=2,ti=0,Uc=1,Ic=2,Nc=3,Fc=4,Oc=5,Bc=6,zc=7,Do=300,Fi=301,Oi=302,Bs=303,zs=304,Hr=306,Vs=1e3,zn=1001,Gs=1002,cn=1003,Vc=1004,pr=1005,dn=1006,Zr=1007,pi=1008,An=1009,Uo=1010,Io=1011,Qi=1012,va=1013,mi=1014,Vn=1015,Vi=1016,Ma=1017,Sa=1018,er=1020,No=35902,Fo=35899,Oo=1021,Bo=1022,vn=1023,tr=1026,nr=1027,zo=1028,ba=1029,ya=1030,Ea=1031,Ta=1033,Nr=33776,Fr=33777,Or=33778,Br=33779,ks=35840,Hs=35841,Ws=35842,Xs=35843,Ys=36196,qs=37492,js=37496,Ks=37808,$s=37809,Zs=37810,Js=37811,Qs=37812,ea=37813,ta=37814,na=37815,ia=37816,ra=37817,sa=37818,aa=37819,oa=37820,ca=37821,la=36492,ua=36494,fa=36495,ha=36283,da=36284,pa=36285,ma=36286,Gc=3200,kc=3201,Vo=0,Hc=1,Qn="",fn="srgb",Bi="srgb-linear",Vr="linear",At="srgb",vi=7680,Na=519,Wc=512,Xc=513,Yc=514,Go=515,qc=516,jc=517,Kc=518,$c=519,Fa=35044,bp=35048,Oa="300 es",En=2e3,Gr=2001;function ko(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zc(){const i=kr("canvas");return i.style.display="block",i}const Ba={};function za(...i){const e="THREE."+i.shift();console.log(e,...i)}function $e(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Nt(...i){const e="THREE."+i.shift();console.error(e,...i)}function ir(...i){const e=i.join(" ");e in Ba||(Ba[e]=!0,$e(...i))}function Jc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jr=Math.PI/180,xa=180/Math.PI;function rr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Qc(i,e){return(i%e+e)%e}function Qr(i,e,t){return(1-t)*i+t*e}function Xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,c){let u=n[r+0],l=n[r+1],p=n[r+2],m=n[r+3],x=s[o+0],_=s[o+1],S=s[o+2],y=s[o+3];if(c<=0){e[t+0]=u,e[t+1]=l,e[t+2]=p,e[t+3]=m;return}if(c>=1){e[t+0]=x,e[t+1]=_,e[t+2]=S,e[t+3]=y;return}if(m!==y||u!==x||l!==_||p!==S){let g=u*x+l*_+p*S+m*y;g<0&&(x=-x,_=-_,S=-S,y=-y,g=-g);let d=1-c;if(g<.9995){const P=Math.acos(g),A=Math.sin(P);d=Math.sin(d*P)/A,c=Math.sin(c*P)/A,u=u*d+x*c,l=l*d+_*c,p=p*d+S*c,m=m*d+y*c}else{u=u*d+x*c,l=l*d+_*c,p=p*d+S*c,m=m*d+y*c;const P=1/Math.sqrt(u*u+l*l+p*p+m*m);u*=P,l*=P,p*=P,m*=P}}e[t]=u,e[t+1]=l,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,o){const c=n[r],u=n[r+1],l=n[r+2],p=n[r+3],m=s[o],x=s[o+1],_=s[o+2],S=s[o+3];return e[t]=c*S+p*m+u*_-l*x,e[t+1]=u*S+p*x+l*m-c*_,e[t+2]=l*S+p*_+c*x-u*m,e[t+3]=p*S-c*m-u*x-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,c=Math.cos,u=Math.sin,l=c(n/2),p=c(r/2),m=c(s/2),x=u(n/2),_=u(r/2),S=u(s/2);switch(o){case"XYZ":this._x=x*p*m+l*_*S,this._y=l*_*m-x*p*S,this._z=l*p*S+x*_*m,this._w=l*p*m-x*_*S;break;case"YXZ":this._x=x*p*m+l*_*S,this._y=l*_*m-x*p*S,this._z=l*p*S-x*_*m,this._w=l*p*m+x*_*S;break;case"ZXY":this._x=x*p*m-l*_*S,this._y=l*_*m+x*p*S,this._z=l*p*S+x*_*m,this._w=l*p*m-x*_*S;break;case"ZYX":this._x=x*p*m-l*_*S,this._y=l*_*m+x*p*S,this._z=l*p*S-x*_*m,this._w=l*p*m+x*_*S;break;case"YZX":this._x=x*p*m+l*_*S,this._y=l*_*m+x*p*S,this._z=l*p*S-x*_*m,this._w=l*p*m-x*_*S;break;case"XZY":this._x=x*p*m-l*_*S,this._y=l*_*m-x*p*S,this._z=l*p*S+x*_*m,this._w=l*p*m+x*_*S;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],c=t[5],u=t[9],l=t[2],p=t[6],m=t[10],x=n+c+m;if(x>0){const _=.5/Math.sqrt(x+1);this._w=.25/_,this._x=(p-u)*_,this._y=(s-l)*_,this._z=(o-r)*_}else if(n>c&&n>m){const _=2*Math.sqrt(1+n-c-m);this._w=(p-u)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+l)/_}else if(c>m){const _=2*Math.sqrt(1+c-n-m);this._w=(s-l)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(u+p)/_}else{const _=2*Math.sqrt(1+m-n-c);this._w=(o-r)/_,this._x=(s+l)/_,this._y=(u+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,c=t._x,u=t._y,l=t._z,p=t._w;return this._x=n*p+o*c+r*l-s*u,this._y=r*p+o*u+s*c-n*l,this._z=s*p+o*l+n*u-r*c,this._w=o*p-n*c-r*u-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,s=-s,o=-o,c=-c);let u=1-t;if(c<.9995){const l=Math.acos(c),p=Math.sin(l);u=Math.sin(u*l)/p,t=Math.sin(t*l)/p,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,c=e.z,u=e.w,l=2*(o*r-c*n),p=2*(c*t-s*r),m=2*(s*n-o*t);return this.x=t+u*l+o*m-c*p,this.y=n+u*p+c*l-s*m,this.z=r+u*m+s*p-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,c=t.y,u=t.z;return this.x=r*u-s*c,this.y=s*o-n*u,this.z=n*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const es=new G,Va=new sr;class Je{constructor(e,t,n,r,s,o,c,u,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,u,l)}set(e,t,n,r,s,o,c,u,l){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=o,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[3],u=n[6],l=n[1],p=n[4],m=n[7],x=n[2],_=n[5],S=n[8],y=r[0],g=r[3],d=r[6],P=r[1],A=r[4],D=r[7],U=r[2],R=r[5],I=r[8];return s[0]=o*y+c*P+u*U,s[3]=o*g+c*A+u*R,s[6]=o*d+c*D+u*I,s[1]=l*y+p*P+m*U,s[4]=l*g+p*A+m*R,s[7]=l*d+p*D+m*I,s[2]=x*y+_*P+S*U,s[5]=x*g+_*A+S*R,s[8]=x*d+_*D+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],u=e[6],l=e[7],p=e[8];return t*o*p-t*c*l-n*s*p+n*c*u+r*s*l-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],u=e[6],l=e[7],p=e[8],m=p*o-c*l,x=c*u-p*s,_=l*s-o*u,S=t*m+n*x+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=m*y,e[1]=(r*l-p*n)*y,e[2]=(c*n-r*o)*y,e[3]=x*y,e[4]=(p*t-r*u)*y,e[5]=(r*s-c*t)*y,e[6]=_*y,e[7]=(n*u-l*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,c){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*o+l*c)+o+e,-r*l,r*u,-r*(-l*o+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ts.makeScale(e,t)),this}rotate(e){return this.premultiply(ts.makeRotation(-e)),this}translate(e,t){return this.premultiply(ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ts=new Je,Ga=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ka=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function el(){const i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===At&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Vr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:Ga,fromXYZ:ka,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Ga,fromXYZ:ka,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const pt=el();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class tl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=kr("canvas")),Mi.width=e.width,Mi.height=e.height;const r=Mi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nl=0;class Aa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nl++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?s.push(ns(r[o].image)):s.push(ns(r[o]))}else s=ns(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let il=0;const is=new G;class nn extends Gi{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=zn,r=zn,s=dn,o=pi,c=vn,u=An,l=nn.DEFAULT_ANISOTROPY,p=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:il++}),this.uuid=rr(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=u,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(is).x}get height(){return this.source.getSize(is).y}get depth(){return this.source.getSize(is).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Do)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Do;nn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,l=u[0],p=u[4],m=u[8],x=u[1],_=u[5],S=u[9],y=u[2],g=u[6],d=u[10];if(Math.abs(p-x)<.01&&Math.abs(m-y)<.01&&Math.abs(S-g)<.01){if(Math.abs(p+x)<.1&&Math.abs(m+y)<.1&&Math.abs(S+g)<.1&&Math.abs(l+_+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,D=(_+1)/2,U=(d+1)/2,R=(p+x)/4,I=(m+y)/4,j=(S+g)/4;return A>D&&A>U?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=R/n,s=I/n):D>U?D<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(D),n=R/r,s=j/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=I/s,r=j/s),this.set(n,r,s,t),this}let P=Math.sqrt((g-S)*(g-S)+(m-y)*(m-y)+(x-p)*(x-p));return Math.abs(P)<.001&&(P=1),this.x=(g-S)/P,this.y=(m-y)/P,this.z=(x-p)/P,this.w=Math.acos((l+_+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rl extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new nn(r);this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Aa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ho extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sl extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),xr.subVectors(this.max,Yi),Si.subVectors(e.a,Yi),bi.subVectors(e.b,Yi),yi.subVectors(e.c,Yi),qn.subVectors(bi,Si),jn.subVectors(yi,bi),si.subVectors(Si,yi);let t=[0,-qn.z,qn.y,0,-jn.z,jn.y,0,-si.z,si.y,qn.z,0,-qn.x,jn.z,0,-jn.x,si.z,0,-si.x,-qn.y,qn.x,0,-jn.y,jn.x,0,-si.y,si.x,0];return!rs(t,Si,bi,yi,xr)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,Si,bi,yi,xr))?!1:(gr.crossVectors(qn,jn),t=[gr.x,gr.y,gr.z],rs(t,Si,bi,yi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new G,new G,new G,new G,new G,new G,new G,new G],mn=new G,mr=new ar,Si=new G,bi=new G,yi=new G,qn=new G,jn=new G,si=new G,Yi=new G,xr=new G,gr=new G,ai=new G;function rs(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ai.fromArray(i,s);const c=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),u=e.dot(ai),l=t.dot(ai),p=n.dot(ai);if(Math.max(-Math.max(u,l,p),Math.min(u,l,p))>c)return!1}return!0}const al=new ar,qi=new G,ss=new G;class wa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):al.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(ss)),this.expandByPoint(qi.copy(e.center).sub(ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Dn=new G,as=new G,_r=new G,Kn=new G,os=new G,vr=new G,cs=new G;class ol{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){as.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(as);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_r),c=Kn.dot(this.direction),u=-Kn.dot(_r),l=Kn.lengthSq(),p=Math.abs(1-o*o);let m,x,_,S;if(p>0)if(m=o*u-c,x=o*c-u,S=s*p,m>=0)if(x>=-S)if(x<=S){const y=1/p;m*=y,x*=y,_=m*(m+o*x+2*c)+x*(o*m+x+2*u)+l}else x=s,m=Math.max(0,-(o*x+c)),_=-m*m+x*(x+2*u)+l;else x=-s,m=Math.max(0,-(o*x+c)),_=-m*m+x*(x+2*u)+l;else x<=-S?(m=Math.max(0,-(-o*s+c)),x=m>0?-s:Math.min(Math.max(-s,-u),s),_=-m*m+x*(x+2*u)+l):x<=S?(m=0,x=Math.min(Math.max(-s,-u),s),_=x*(x+2*u)+l):(m=Math.max(0,-(o*s+c)),x=m>0?s:Math.min(Math.max(-s,-u),s),_=-m*m+x*(x+2*u)+l);else x=o>0?-s:s,m=Math.max(0,-(o*x+c)),_=-m*m+x*(x+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(as).addScaledVector(_r,x),_}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,c,u;const l=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,x=this.origin;return l>=0?(n=(e.min.x-x.x)*l,r=(e.max.x-x.x)*l):(n=(e.max.x-x.x)*l,r=(e.min.x-x.x)*l),p>=0?(s=(e.min.y-x.y)*p,o=(e.max.y-x.y)*p):(s=(e.max.y-x.y)*p,o=(e.min.y-x.y)*p),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),m>=0?(c=(e.min.z-x.z)*m,u=(e.max.z-x.z)*m):(c=(e.max.z-x.z)*m,u=(e.min.z-x.z)*m),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,r,s){os.subVectors(t,e),vr.subVectors(n,e),cs.crossVectors(os,vr);let o=this.direction.dot(cs),c;if(o>0){if(r)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const u=c*this.direction.dot(vr.crossVectors(Kn,vr));if(u<0)return null;const l=c*this.direction.dot(os.cross(Kn));if(l<0||u+l>o)return null;const p=-c*Kn.dot(cs);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,r,s,o,c,u,l,p,m,x,_,S,y,g){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,u,l,p,m,x,_,S,y,g)}set(e,t,n,r,s,o,c,u,l,p,m,x,_,S,y,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=c,d[13]=u,d[2]=l,d[6]=p,d[10]=m,d[14]=x,d[3]=_,d[7]=S,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),o=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(r),l=Math.sin(r),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const x=o*p,_=o*m,S=c*p,y=c*m;t[0]=u*p,t[4]=-u*m,t[8]=l,t[1]=_+S*l,t[5]=x-y*l,t[9]=-c*u,t[2]=y-x*l,t[6]=S+_*l,t[10]=o*u}else if(e.order==="YXZ"){const x=u*p,_=u*m,S=l*p,y=l*m;t[0]=x+y*c,t[4]=S*c-_,t[8]=o*l,t[1]=o*m,t[5]=o*p,t[9]=-c,t[2]=_*c-S,t[6]=y+x*c,t[10]=o*u}else if(e.order==="ZXY"){const x=u*p,_=u*m,S=l*p,y=l*m;t[0]=x-y*c,t[4]=-o*m,t[8]=S+_*c,t[1]=_+S*c,t[5]=o*p,t[9]=y-x*c,t[2]=-o*l,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const x=o*p,_=o*m,S=c*p,y=c*m;t[0]=u*p,t[4]=S*l-_,t[8]=x*l+y,t[1]=u*m,t[5]=y*l+x,t[9]=_*l-S,t[2]=-l,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const x=o*u,_=o*l,S=c*u,y=c*l;t[0]=u*p,t[4]=y-x*m,t[8]=S*m+_,t[1]=m,t[5]=o*p,t[9]=-c*p,t[2]=-l*p,t[6]=_*m+S,t[10]=x-y*m}else if(e.order==="XZY"){const x=o*u,_=o*l,S=c*u,y=c*l;t[0]=u*p,t[4]=-m,t[8]=l*p,t[1]=x*m+y,t[5]=o*p,t[9]=_*m-S,t[2]=S*m-_,t[6]=c*p,t[10]=y*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cl,e,ll)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),$n.crossVectors(n,an),$n.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),$n.crossVectors(n,an)),$n.normalize(),Mr.crossVectors(an,$n),r[0]=$n.x,r[4]=Mr.x,r[8]=an.x,r[1]=$n.y,r[5]=Mr.y,r[9]=an.y,r[2]=$n.z,r[6]=Mr.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[4],u=n[8],l=n[12],p=n[1],m=n[5],x=n[9],_=n[13],S=n[2],y=n[6],g=n[10],d=n[14],P=n[3],A=n[7],D=n[11],U=n[15],R=r[0],I=r[4],j=r[8],E=r[12],b=r[1],N=r[5],q=r[9],W=r[13],Q=r[2],ne=r[6],te=r[10],he=r[14],K=r[3],fe=r[7],pe=r[11],De=r[15];return s[0]=o*R+c*b+u*Q+l*K,s[4]=o*I+c*N+u*ne+l*fe,s[8]=o*j+c*q+u*te+l*pe,s[12]=o*E+c*W+u*he+l*De,s[1]=p*R+m*b+x*Q+_*K,s[5]=p*I+m*N+x*ne+_*fe,s[9]=p*j+m*q+x*te+_*pe,s[13]=p*E+m*W+x*he+_*De,s[2]=S*R+y*b+g*Q+d*K,s[6]=S*I+y*N+g*ne+d*fe,s[10]=S*j+y*q+g*te+d*pe,s[14]=S*E+y*W+g*he+d*De,s[3]=P*R+A*b+D*Q+U*K,s[7]=P*I+A*N+D*ne+U*fe,s[11]=P*j+A*q+D*te+U*pe,s[15]=P*E+A*W+D*he+U*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],c=e[5],u=e[9],l=e[13],p=e[2],m=e[6],x=e[10],_=e[14],S=e[3],y=e[7],g=e[11],d=e[15];return S*(+s*u*m-r*l*m-s*c*x+n*l*x+r*c*_-n*u*_)+y*(+t*u*_-t*l*x+s*o*x-r*o*_+r*l*p-s*u*p)+g*(+t*l*m-t*c*_-s*o*m+n*o*_+s*c*p-n*l*p)+d*(-r*c*p-t*u*m+t*c*x+r*o*m-n*o*x+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],u=e[6],l=e[7],p=e[8],m=e[9],x=e[10],_=e[11],S=e[12],y=e[13],g=e[14],d=e[15],P=m*g*l-y*x*l+y*u*_-c*g*_-m*u*d+c*x*d,A=S*x*l-p*g*l-S*u*_+o*g*_+p*u*d-o*x*d,D=p*y*l-S*m*l+S*c*_-o*y*_-p*c*d+o*m*d,U=S*m*u-p*y*u-S*c*x+o*y*x+p*c*g-o*m*g,R=t*P+n*A+r*D+s*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=P*I,e[1]=(y*x*s-m*g*s-y*r*_+n*g*_+m*r*d-n*x*d)*I,e[2]=(c*g*s-y*u*s+y*r*l-n*g*l-c*r*d+n*u*d)*I,e[3]=(m*u*s-c*x*s-m*r*l+n*x*l+c*r*_-n*u*_)*I,e[4]=A*I,e[5]=(p*g*s-S*x*s+S*r*_-t*g*_-p*r*d+t*x*d)*I,e[6]=(S*u*s-o*g*s-S*r*l+t*g*l+o*r*d-t*u*d)*I,e[7]=(o*x*s-p*u*s+p*r*l-t*x*l-o*r*_+t*u*_)*I,e[8]=D*I,e[9]=(S*m*s-p*y*s-S*n*_+t*y*_+p*n*d-t*m*d)*I,e[10]=(o*y*s-S*c*s+S*n*l-t*y*l-o*n*d+t*c*d)*I,e[11]=(p*c*s-o*m*s-p*n*l+t*m*l+o*n*_-t*c*_)*I,e[12]=U*I,e[13]=(p*y*r-S*m*r+S*n*x-t*y*x-p*n*g+t*m*g)*I,e[14]=(S*c*r-o*y*r-S*n*u+t*y*u+o*n*g-t*c*g)*I,e[15]=(o*m*r-p*c*r+p*n*u-t*m*u-o*n*x+t*c*x)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,c=e.y,u=e.z,l=s*o,p=s*c;return this.set(l*o+n,l*c-r*u,l*u+r*c,0,l*c+r*u,p*c+n,p*u-r*o,0,l*u-r*c,p*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,c=t._z,u=t._w,l=s+s,p=o+o,m=c+c,x=s*l,_=s*p,S=s*m,y=o*p,g=o*m,d=c*m,P=u*l,A=u*p,D=u*m,U=n.x,R=n.y,I=n.z;return r[0]=(1-(y+d))*U,r[1]=(_+D)*U,r[2]=(S-A)*U,r[3]=0,r[4]=(_-D)*R,r[5]=(1-(x+d))*R,r[6]=(g+P)*R,r[7]=0,r[8]=(S+A)*I,r[9]=(g-P)*I,r[10]=(1-(x+y))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const o=Ei.set(r[4],r[5],r[6]).length(),c=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const l=1/s,p=1/o,m=1/c;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=p,xn.elements[5]*=p,xn.elements[6]*=p,xn.elements[8]*=m,xn.elements[9]*=m,xn.elements[10]*=m,t.setFromRotationMatrix(xn),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,o,c=En,u=!1){const l=this.elements,p=2*s/(t-e),m=2*s/(n-r),x=(t+e)/(t-e),_=(n+r)/(n-r);let S,y;if(u)S=s/(o-s),y=o*s/(o-s);else if(c===En)S=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(c===Gr)S=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=p,l[4]=0,l[8]=x,l[12]=0,l[1]=0,l[5]=m,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=S,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,c=En,u=!1){const l=this.elements,p=2/(t-e),m=2/(n-r),x=-(t+e)/(t-e),_=-(n+r)/(n-r);let S,y;if(u)S=1/(o-s),y=o/(o-s);else if(c===En)S=-2/(o-s),y=-(o+s)/(o-s);else if(c===Gr)S=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=p,l[4]=0,l[8]=0,l[12]=x,l[1]=0,l[5]=m,l[9]=0,l[13]=_,l[2]=0,l[6]=0,l[10]=S,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new G,xn=new Ut,cl=new G(0,0,0),ll=new G(1,1,1),$n=new G,Mr=new G,an=new G,Ha=new Ut,Wa=new sr;class wn{constructor(e=0,t=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],c=r[8],u=r[1],l=r[5],p=r[9],m=r[2],x=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(x,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,_),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(x,l),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-p,_),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ul=0;const Xa=new G,Ti=new sr,Un=new Ut,Sr=new G,ji=new G,fl=new G,hl=new sr,Ya=new G(1,0,0),qa=new G(0,1,0),ja=new G(0,0,1),Ka={type:"added"},dl={type:"removed"},Ai={type:"childadded",child:null},ls={type:"childremoved",child:null};class Kt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new G,t=new wn,n=new sr,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Je}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Ya,e)}rotateY(e){return this.rotateOnAxis(qa,e)}rotateZ(e){return this.rotateOnAxis(ja,e)}translateOnAxis(e,t){return Xa.copy(e).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ya,e)}translateY(e){return this.translateOnAxis(qa,e)}translateZ(e){return this.translateOnAxis(ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ji,Sr,this.up):Un.lookAt(Sr,ji,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(Un),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ka),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dl),ls.child=e,this.dispatchEvent(ls),ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ka),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,fl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,hl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let l=0,p=u.length;l<p;l++){const m=u[l];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,l=this.material.length;u<l;u++)c.push(s(e.materials,this.material[u]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(s(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),l=o(e.textures),p=o(e.images),m=o(e.shapes),x=o(e.skeletons),_=o(e.animations),S=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),x.length>0&&(n.skeletons=x),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(c){const u=[];for(const l in c){const p=c[l];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new G(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new G,In=new G,us=new G,Nn=new G,wi=new G,Ri=new G,$a=new G,fs=new G,hs=new G,ds=new G,ps=new wt,ms=new wt,xs=new wt;class _n{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){gn.subVectors(r,t),In.subVectors(n,t),us.subVectors(e,t);const o=gn.dot(gn),c=gn.dot(In),u=gn.dot(us),l=In.dot(In),p=In.dot(us),m=o*l-c*c;if(m===0)return s.set(0,0,0),null;const x=1/m,_=(l*u-c*p)*x,S=(o*p-c*u)*x;return s.set(1-_-S,S,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,s,o,c,u){return this.getBarycoord(e,t,n,r,Nn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Nn.x),u.addScaledVector(o,Nn.y),u.addScaledVector(c,Nn.z),u)}static getInterpolatedAttribute(e,t,n,r,s,o){return ps.setScalar(0),ms.setScalar(0),xs.setScalar(0),ps.fromBufferAttribute(e,t),ms.fromBufferAttribute(e,n),xs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ps,s.x),o.addScaledVector(ms,s.y),o.addScaledVector(xs,s.z),o}static isFrontFacing(e,t,n,r){return gn.subVectors(n,t),In.subVectors(e,t),gn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),gn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,c;wi.subVectors(r,n),Ri.subVectors(s,n),fs.subVectors(e,n);const u=wi.dot(fs),l=Ri.dot(fs);if(u<=0&&l<=0)return t.copy(n);hs.subVectors(e,r);const p=wi.dot(hs),m=Ri.dot(hs);if(p>=0&&m<=p)return t.copy(r);const x=u*m-p*l;if(x<=0&&u>=0&&p<=0)return o=u/(u-p),t.copy(n).addScaledVector(wi,o);ds.subVectors(e,s);const _=wi.dot(ds),S=Ri.dot(ds);if(S>=0&&_<=S)return t.copy(s);const y=_*l-u*S;if(y<=0&&l>=0&&S<=0)return c=l/(l-S),t.copy(n).addScaledVector(Ri,c);const g=p*S-_*m;if(g<=0&&m-p>=0&&_-S>=0)return $a.subVectors(s,r),c=(m-p)/(m-p+(_-S)),t.copy(r).addScaledVector($a,c);const d=1/(g+y+x);return o=y*d,c=x*d,t.copy(n).addScaledVector(wi,o).addScaledVector(Ri,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},br={h:0,s:0,l:0};function gs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=Qc(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gs(o,s,e+1/3),this.g=gs(o,s,e),this.b=gs(o,s,e-1/3)}return pt.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=Xo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return pt.workingToColorSpace(jt.copy(this),e),Math.round(ct(jt.r*255,0,255))*65536+Math.round(ct(jt.g*255,0,255))*256+Math.round(ct(jt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(jt.copy(this),t);const n=jt.r,r=jt.g,s=jt.b,o=Math.max(n,r,s),c=Math.min(n,r,s);let u,l;const p=(c+o)/2;if(c===o)u=0,l=0;else{const m=o-c;switch(l=p<=.5?m/(o+c):m/(2-o-c),o){case n:u=(r-s)/m+(r<s?6:0);break;case r:u=(s-n)/m+2;break;case s:u=(n-r)/m+4;break}u/=6}return e.h=u,e.s=l,e.l=p,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=fn){pt.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,r=jt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(br);const n=Qr(Zn.h,br.h,t),r=Qr(Zn.s,br.s,t),s=Qr(Zn.l,br.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new xt;xt.NAMES=Xo;let pl=0;class or extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Ui,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cs,this.blendDst=Ps,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ps&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yo extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new G,yr=new dt;let ml=0;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ml++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class qo extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jo extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xl=0;const un=new Ut,_s=new Kt,Ci=new G,on=new ar,Ki=new ar,Wt=new G;class Rn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ko(e)?jo:qo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return _s.lookAt(e),_s.updateMatrix(),this.applyMatrix4(_s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];Ki.setFromBufferAttribute(c),this.morphTargetsRelative?(Wt.addVectors(on.min,Ki.min),on.expandByPoint(Wt),Wt.addVectors(on.max,Ki.max),on.expandByPoint(Wt)):(on.expandByPoint(Ki.min),on.expandByPoint(Ki.max))}on.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],u=this.morphTargetsRelative;for(let l=0,p=c.count;l<p;l++)Wt.fromBufferAttribute(c,l),u&&(Ci.fromBufferAttribute(e,l),Wt.add(Ci)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],u=[];for(let j=0;j<n.count;j++)c[j]=new G,u[j]=new G;const l=new G,p=new G,m=new G,x=new dt,_=new dt,S=new dt,y=new G,g=new G;function d(j,E,b){l.fromBufferAttribute(n,j),p.fromBufferAttribute(n,E),m.fromBufferAttribute(n,b),x.fromBufferAttribute(s,j),_.fromBufferAttribute(s,E),S.fromBufferAttribute(s,b),p.sub(l),m.sub(l),_.sub(x),S.sub(x);const N=1/(_.x*S.y-S.x*_.y);isFinite(N)&&(y.copy(p).multiplyScalar(S.y).addScaledVector(m,-_.y).multiplyScalar(N),g.copy(m).multiplyScalar(_.x).addScaledVector(p,-S.x).multiplyScalar(N),c[j].add(y),c[E].add(y),c[b].add(y),u[j].add(g),u[E].add(g),u[b].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let j=0,E=P.length;j<E;++j){const b=P[j],N=b.start,q=b.count;for(let W=N,Q=N+q;W<Q;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const A=new G,D=new G,U=new G,R=new G;function I(j){U.fromBufferAttribute(r,j),R.copy(U);const E=c[j];A.copy(E),A.sub(U.multiplyScalar(U.dot(E))).normalize(),D.crossVectors(R,E);const N=D.dot(u[j])<0?-1:1;o.setXYZW(j,A.x,A.y,A.z,N)}for(let j=0,E=P.length;j<E;++j){const b=P[j],N=b.start,q=b.count;for(let W=N,Q=N+q;W<Q;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,_=n.count;x<_;x++)n.setXYZ(x,0,0,0);const r=new G,s=new G,o=new G,c=new G,u=new G,l=new G,p=new G,m=new G;if(e)for(let x=0,_=e.count;x<_;x+=3){const S=e.getX(x+0),y=e.getX(x+1),g=e.getX(x+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),p.subVectors(o,s),m.subVectors(r,s),p.cross(m),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),c.add(p),u.add(p),l.add(p),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(y,u.x,u.y,u.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let x=0,_=t.count;x<_;x+=3)r.fromBufferAttribute(t,x+0),s.fromBufferAttribute(t,x+1),o.fromBufferAttribute(t,x+2),p.subVectors(o,s),m.subVectors(r,s),p.cross(m),n.setXYZ(x+0,p.x,p.y,p.z),n.setXYZ(x+1,p.x,p.y,p.z),n.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(c,u){const l=c.array,p=c.itemSize,m=c.normalized,x=new l.constructor(u.length*p);let _=0,S=0;for(let y=0,g=u.length;y<g;y++){c.isInterleavedBufferAttribute?_=u[y]*c.data.stride+c.offset:_=u[y]*p;for(let d=0;d<p;d++)x[S++]=l[_++]}return new Tn(x,p,m)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],l=e(u,n);t.setAttribute(c,l)}const s=this.morphAttributes;for(const c in s){const u=[],l=s[c];for(let p=0,m=l.length;p<m;p++){const x=l[p],_=e(x,n);u.push(_)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const l=o[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],p=[];for(let m=0,x=l.length;m<x;m++){const _=l[m];p.push(_.toJSON(e.data))}p.length>0&&(r[u]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const p=r[l];this.setAttribute(l,p.clone(t))}const s=e.morphAttributes;for(const l in s){const p=[],m=s[l];for(let x=0,_=m.length;x<_;x++)p.push(m[x].clone(t));this.morphAttributes[l]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,p=o.length;l<p;l++){const m=o[l];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new Ut,oi=new ol,Er=new wa,Ja=new G,Tr=new G,Ar=new G,wr=new G,vs=new G,Rr=new G,Qa=new G,Cr=new G;class ii extends Kt{constructor(e=new Rn,t=new Yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Rr.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const p=c[u],m=s[u];p!==0&&(vs.fromBufferAttribute(m,e),o?Rr.addScaledVector(vs,p):Rr.addScaledVector(vs.sub(t),p))}t.add(Rr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),oi.copy(e.ray).recast(e.near),!(Er.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Er,Ja)===null||oi.origin.distanceToSquared(Ja)>(e.far-e.near)**2))&&(Za.copy(s).invert(),oi.copy(e.ray).applyMatrix4(Za),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,c=s.index,u=s.attributes.position,l=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,x=s.groups,_=s.drawRange;if(c!==null)if(Array.isArray(o))for(let S=0,y=x.length;S<y;S++){const g=x[S],d=o[g.materialIndex],P=Math.max(g.start,_.start),A=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let D=P,U=A;D<U;D+=3){const R=c.getX(D),I=c.getX(D+1),j=c.getX(D+2);r=Pr(this,d,e,n,l,p,m,R,I,j),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const S=Math.max(0,_.start),y=Math.min(c.count,_.start+_.count);for(let g=S,d=y;g<d;g+=3){const P=c.getX(g),A=c.getX(g+1),D=c.getX(g+2);r=Pr(this,o,e,n,l,p,m,P,A,D),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,y=x.length;S<y;S++){const g=x[S],d=o[g.materialIndex],P=Math.max(g.start,_.start),A=Math.min(u.count,Math.min(g.start+g.count,_.start+_.count));for(let D=P,U=A;D<U;D+=3){const R=D,I=D+1,j=D+2;r=Pr(this,d,e,n,l,p,m,R,I,j),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const S=Math.max(0,_.start),y=Math.min(u.count,_.start+_.count);for(let g=S,d=y;g<d;g+=3){const P=g,A=g+1,D=g+2;r=Pr(this,o,e,n,l,p,m,P,A,D),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function gl(i,e,t,n,r,s,o,c){let u;if(e.side===sn?u=n.intersectTriangle(o,s,r,!0,c):u=n.intersectTriangle(r,s,o,e.side===ni,c),u===null)return null;Cr.copy(c),Cr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Cr);return l<t.near||l>t.far?null:{distance:l,point:Cr.clone(),object:i}}function Pr(i,e,t,n,r,s,o,c,u,l){i.getVertexPosition(c,Tr),i.getVertexPosition(u,Ar),i.getVertexPosition(l,wr);const p=gl(i,e,t,n,Tr,Ar,wr,Qa);if(p){const m=new G;_n.getBarycoord(Qa,Tr,Ar,wr,m),r&&(p.uv=_n.getInterpolatedAttribute(r,c,u,l,m,new dt)),s&&(p.uv1=_n.getInterpolatedAttribute(s,c,u,l,m,new dt)),o&&(p.normal=_n.getInterpolatedAttribute(o,c,u,l,m,new G),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const x={a:c,b:u,c:l,normal:new G,materialIndex:0};_n.getNormal(Tr,Ar,wr,x.normal),p.face=x,p.barycoord=m}return p}class cr extends Rn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const c=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],l=[],p=[],m=[];let x=0,_=0;S("z","y","x",-1,-1,n,t,e,o,s,0),S("z","y","x",1,-1,n,t,-e,o,s,1),S("x","z","y",1,1,e,n,t,r,o,2),S("x","z","y",1,-1,e,n,-t,r,o,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(m,2));function S(y,g,d,P,A,D,U,R,I,j,E){const b=D/I,N=U/j,q=D/2,W=U/2,Q=R/2,ne=I+1,te=j+1;let he=0,K=0;const fe=new G;for(let pe=0;pe<te;pe++){const De=pe*N-W;for(let rt=0;rt<ne;rt++){const gt=rt*b-q;fe[y]=gt*P,fe[g]=De*A,fe[d]=Q,l.push(fe.x,fe.y,fe.z),fe[y]=0,fe[g]=0,fe[d]=R>0?1:-1,p.push(fe.x,fe.y,fe.z),m.push(rt/I),m.push(1-pe/j),he+=1}}for(let pe=0;pe<j;pe++)for(let De=0;De<I;De++){const rt=x+De+ne*pe,gt=x+De+ne*(pe+1),bt=x+(De+1)+ne*(pe+1),Mt=x+(De+1)+ne*pe;u.push(rt,gt,Mt),u.push(gt,bt,Mt),K+=6}c.addGroup(_,K,E),_+=K,x+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=zi(i[t]);for(const r in n)e[r]=n[r]}return e}function _l(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ko(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const vl={clone:zi,merge:tn};var Ml=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ml,this.fragmentShader=Sl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=_l(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $o extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new G,eo=new dt,to=new dt;class hn extends $o{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,eo,to),t.subVectors(to,eo)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/l,r*=o.width/u,n*=o.height/l}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class bl extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Pi,Li,e,t);r.layers=this.layers,this.add(r);const s=new hn(Pi,Li,e,t);s.layers=this.layers,this.add(s);const o=new hn(Pi,Li,e,t);o.layers=this.layers,this.add(o);const c=new hn(Pi,Li,e,t);c.layers=this.layers,this.add(c);const u=new hn(Pi,Li,e,t);u.layers=this.layers,this.add(u);const l=new hn(Pi,Li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,c,u]=t;for(const l of t)this.remove(l);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,u,l,p]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,x,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Zo extends nn{constructor(e=[],t=Fi,n,r,s,o,c,u,l,p){super(e,t,n,r,s,o,c,u,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yl extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cr(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Gn});s.uniforms.tEquirect.value=t;const o=new ii(r,s),c=t.minFilter;return t.minFilter===pi&&(t.minFilter=dn),new bl(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Lr extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const El={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const c=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),d=this._getHandJoint(l,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const p=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],x=p.position.distanceTo(m.position),_=.02,S=.005;l.inputState.pinching&&x>_+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&x<=_-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(El)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yp extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tl extends nn{constructor(e=null,t=1,n=1,r,s,o,c,u,l=cn,p=cn,m,x){super(null,o,c,u,l,p,r,s,m,x),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ss=new G,Al=new G,wl=new Je;class fi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ss.subVectors(n,t).cross(Al.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ss),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wl.getNormalMatrix(e),r=this.coplanarPoint(Ss).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new wa,Rl=new dt(.5,.5),Dr=new G;class Ra{constructor(e=new fi,t=new fi,n=new fi,r=new fi,s=new fi,o=new fi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const r=this.planes,s=e.elements,o=s[0],c=s[1],u=s[2],l=s[3],p=s[4],m=s[5],x=s[6],_=s[7],S=s[8],y=s[9],g=s[10],d=s[11],P=s[12],A=s[13],D=s[14],U=s[15];if(r[0].setComponents(l-o,_-p,d-S,U-P).normalize(),r[1].setComponents(l+o,_+p,d+S,U+P).normalize(),r[2].setComponents(l+c,_+m,d+y,U+A).normalize(),r[3].setComponents(l-c,_-m,d-y,U-A).normalize(),n)r[4].setComponents(u,x,g,D).normalize(),r[5].setComponents(l-u,_-x,d-g,U-D).normalize();else if(r[4].setComponents(l-u,_-x,d-g,U-D).normalize(),t===En)r[5].setComponents(l+u,_+x,d+g,U+D).normalize();else if(t===Gr)r[5].setComponents(u,x,g,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=Rl.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jo extends nn{constructor(e,t,n=mi,r,s,o,c=cn,u=cn,l,p=tr,m=1){if(p!==tr&&p!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:m};super(x,r,s,o,c,u,p,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qo extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ec extends Rn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],c=[],u=[],l=new G,p=new dt;o.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let m=0,x=3;m<=t;m++,x+=3){const _=n+m/t*r;l.x=e*Math.cos(_),l.y=e*Math.sin(_),o.push(l.x,l.y,l.z),c.push(0,0,1),p.x=(o[x]/e+1)/2,p.y=(o[x+1]/e+1)/2,u.push(p.x,p.y)}for(let m=1;m<=t;m++)s.push(m,m+1,0);this.setIndex(s),this.setAttribute("position",new ln(o,3)),this.setAttribute("normal",new ln(c,3)),this.setAttribute("uv",new ln(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wr extends Rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,c=Math.floor(n),u=Math.floor(r),l=c+1,p=u+1,m=e/c,x=t/u,_=[],S=[],y=[],g=[];for(let d=0;d<p;d++){const P=d*x-o;for(let A=0;A<l;A++){const D=A*m-s;S.push(D,-P,0),y.push(0,0,1),g.push(A/c),g.push(1-d/u)}}for(let d=0;d<u;d++)for(let P=0;P<c;P++){const A=P+l*d,D=P+l*(d+1),U=P+1+l*(d+1),R=P+1+l*d;_.push(A,D,R),_.push(D,U,R)}this.setIndex(_),this.setAttribute("position",new ln(S,3)),this.setAttribute("normal",new ln(y,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class tc extends Rn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+c,Math.PI);let l=0;const p=[],m=new G,x=new G,_=[],S=[],y=[],g=[];for(let d=0;d<=n;d++){const P=[],A=d/n;let D=0;d===0&&o===0?D=.5/t:d===n&&u===Math.PI&&(D=-.5/t);for(let U=0;U<=t;U++){const R=U/t;m.x=-e*Math.cos(r+R*s)*Math.sin(o+A*c),m.y=e*Math.cos(o+A*c),m.z=e*Math.sin(r+R*s)*Math.sin(o+A*c),S.push(m.x,m.y,m.z),x.copy(m).normalize(),y.push(x.x,x.y,x.z),g.push(R+D,1-A),P.push(l++)}p.push(P)}for(let d=0;d<n;d++)for(let P=0;P<t;P++){const A=p[d][P+1],D=p[d][P],U=p[d+1][P],R=p[d+1][P+1];(d!==0||o>0)&&_.push(A,D,R),(d!==n-1||u<Math.PI)&&_.push(D,U,R)}this.setIndex(_),this.setAttribute("position",new ln(S,3)),this.setAttribute("normal",new ln(y,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ep extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cl extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pl extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ca extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const bs=new Ut,no=new G,io=new G;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;no.setFromMatrixPosition(e.matrixWorld),t.position.copy(no),io.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(io),t.updateMatrixWorld(),bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ro=new Ut,$i=new G,ys=new G;class Ll extends nc{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),n.position.copy($i),ys.copy(n.position),ys.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ys),n.updateMatrixWorld(),r.makeTranslation(-$i.x,-$i.y,-$i.z),ro.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro,n.coordinateSystem,n.reversedDepth)}}class Tp extends Ca{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ll}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ic extends $o{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,c-=p*this.view.offsetY,u=c-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dl extends nc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ap extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Dl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wp extends Ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ul extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function so(i,e,t,n){const r=Il(n);switch(t){case Oo:return i*e;case zo:return i*e/r.components*r.byteLength;case ba:return i*e/r.components*r.byteLength;case ya:return i*e*2/r.components*r.byteLength;case Ea:return i*e*2/r.components*r.byteLength;case Bo:return i*e*3/r.components*r.byteLength;case vn:return i*e*4/r.components*r.byteLength;case Ta:return i*e*4/r.components*r.byteLength;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hs:case Xs:return Math.max(i,16)*Math.max(e,8)/4;case ks:case Ws:return Math.max(i,8)*Math.max(e,8)/2;case Ys:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Js:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case la:case ua:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ha:case da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pa:case ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Il(i){switch(i){case An:case Uo:return{byteLength:1,components:1};case Qi:case Io:case Vi:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case mi:case va:case Vn:return{byteLength:4,components:1};case No:case Fo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Nl(i){const e=new WeakMap;function t(c,u){const l=c.array,p=c.usage,m=l.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,l,p),c.onUploadCallback();let _;if(l instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)_=i.HALF_FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=i.SHORT;else if(l instanceof Uint32Array)_=i.UNSIGNED_INT;else if(l instanceof Int32Array)_=i.INT;else if(l instanceof Int8Array)_=i.BYTE;else if(l instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:x,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,u,l){const p=u.array,m=u.updateRanges;if(i.bindBuffer(l,c),m.length===0)i.bufferSubData(l,0,p);else{m.sort((_,S)=>_.start-S.start);let x=0;for(let _=1;_<m.length;_++){const S=m[x],y=m[_];y.start<=S.start+S.count+1?S.count=Math.max(S.count,y.start+y.count-S.start):(++x,m[x]=y)}m.length=x+1;for(let _=0,S=m.length;_<S;_++){const y=m[_];i.bufferSubData(l,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(i.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const l=e.get(c);if(l===void 0)e.set(c,t(c,u));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,c,u),l.version=c.version}}return{get:r,remove:s,update:o}}var Fl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ol=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ql=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$l=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ql=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ru=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Iu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,th=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ih=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ah=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ph=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Fl,alphahash_pars_fragment:Ol,alphamap_fragment:Bl,alphamap_pars_fragment:zl,alphatest_fragment:Vl,alphatest_pars_fragment:Gl,aomap_fragment:kl,aomap_pars_fragment:Hl,batching_pars_vertex:Wl,batching_vertex:Xl,begin_vertex:Yl,beginnormal_vertex:ql,bsdfs:jl,iridescence_fragment:Kl,bumpmap_pars_fragment:$l,clipping_planes_fragment:Zl,clipping_planes_pars_fragment:Jl,clipping_planes_pars_vertex:Ql,clipping_planes_vertex:eu,color_fragment:tu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:ru,common:su,cube_uv_reflection_fragment:au,defaultnormal_vertex:ou,displacementmap_pars_vertex:cu,displacementmap_vertex:lu,emissivemap_fragment:uu,emissivemap_pars_fragment:fu,colorspace_fragment:hu,colorspace_pars_fragment:du,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:xu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Ru,envmap_vertex:_u,fog_vertex:vu,fog_pars_vertex:Mu,fog_fragment:Su,fog_pars_fragment:bu,gradientmap_pars_fragment:yu,lightmap_pars_fragment:Eu,lights_lambert_fragment:Tu,lights_lambert_pars_fragment:Au,lights_pars_begin:wu,lights_toon_fragment:Cu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Du,lights_physical_fragment:Uu,lights_physical_pars_fragment:Iu,lights_fragment_begin:Nu,lights_fragment_maps:Fu,lights_fragment_end:Ou,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:zu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Gu,map_fragment:ku,map_pars_fragment:Hu,map_particle_fragment:Wu,map_particle_pars_fragment:Xu,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:qu,morphinstance_vertex:ju,morphcolor_vertex:Ku,morphnormal_vertex:$u,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ju,normal_fragment_begin:Qu,normal_fragment_maps:ef,normal_pars_fragment:tf,normal_pars_vertex:nf,normal_vertex:rf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:cf,iridescence_pars_fragment:lf,opaque_fragment:uf,packing:ff,premultiplied_alpha_fragment:hf,project_vertex:df,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:xf,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:vf,shadowmap_vertex:Mf,shadowmask_pars_fragment:Sf,skinbase_vertex:bf,skinning_pars_vertex:yf,skinning_vertex:Ef,skinnormal_vertex:Tf,specularmap_fragment:Af,specularmap_pars_fragment:wf,tonemapping_fragment:Rf,tonemapping_pars_fragment:Cf,transmission_fragment:Pf,transmission_pars_fragment:Lf,uv_pars_fragment:Df,uv_pars_vertex:Uf,uv_vertex:If,worldpos_vertex:Nf,background_vert:Ff,background_frag:Of,backgroundCube_vert:Bf,backgroundCube_frag:zf,cube_vert:Vf,cube_frag:Gf,depth_vert:kf,depth_frag:Hf,distanceRGBA_vert:Wf,distanceRGBA_frag:Xf,equirect_vert:Yf,equirect_frag:qf,linedashed_vert:jf,linedashed_frag:Kf,meshbasic_vert:$f,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:Qf,meshmatcap_vert:eh,meshmatcap_frag:th,meshnormal_vert:nh,meshnormal_frag:ih,meshphong_vert:rh,meshphong_frag:sh,meshphysical_vert:ah,meshphysical_frag:oh,meshtoon_vert:ch,meshtoon_frag:lh,points_vert:uh,points_frag:fh,shadow_vert:hh,shadow_frag:dh,sprite_vert:ph,sprite_frag:mh},ge={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},yn={basic:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new xt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:tn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:tn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new xt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:tn([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:tn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:tn([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:tn([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:tn([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:tn([ge.lights,ge.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};yn.physical={uniforms:tn([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ur={r:0,b:0,g:0},li=new wn,xh=new Ut;function gh(i,e,t,n,r,s,o){const c=new xt(0);let u=s===!0?0:1,l,p,m=null,x=0,_=null;function S(A){let D=A.isScene===!0?A.background:null;return D&&D.isTexture&&(D=(A.backgroundBlurriness>0?t:e).get(D)),D}function y(A){let D=!1;const U=S(A);U===null?d(c,u):U&&U.isColor&&(d(U,1),D=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,D){const U=S(D);U&&(U.isCubeTexture||U.mapping===Hr)?(p===void 0&&(p=new ii(new cr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:zi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(R,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),li.copy(D.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(xh.makeRotationFromEuler(li)),p.material.toneMapped=pt.getTransfer(U.colorSpace)!==At,(m!==U||x!==U.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,m=U,x=U.version,_=i.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new ii(new Wr(2,2),new Hn({name:"BackgroundMaterial",uniforms:zi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=pt.getTransfer(U.colorSpace)!==At,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(m!==U||x!==U.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,m=U,x=U.version,_=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function d(A,D){A.getRGB(Ur,Ko(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,D,o)}function P(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,D=1){c.set(A),u=D,d(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(A){u=A,d(c,u)},render:y,addToRenderList:g,dispose:P}}function _h(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=x(null);let s=r,o=!1;function c(b,N,q,W,Q){let ne=!1;const te=m(W,q,N);s!==te&&(s=te,l(s.object)),ne=_(b,W,q,Q),ne&&S(b,W,q,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,D(b,N,q,W),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function u(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function p(b){return i.deleteVertexArray(b)}function m(b,N,q){const W=q.wireframe===!0;let Q=n[b.id];Q===void 0&&(Q={},n[b.id]=Q);let ne=Q[N.id];ne===void 0&&(ne={},Q[N.id]=ne);let te=ne[W];return te===void 0&&(te=x(u()),ne[W]=te),te}function x(b){const N=[],q=[],W=[];for(let Q=0;Q<t;Q++)N[Q]=0,q[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:W,object:b,attributes:{},index:null}}function _(b,N,q,W){const Q=s.attributes,ne=N.attributes;let te=0;const he=q.getAttributes();for(const K in he)if(he[K].location>=0){const pe=Q[K];let De=ne[K];if(De===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(De=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(De=b.instanceColor)),pe===void 0||pe.attribute!==De||De&&pe.data!==De.data)return!0;te++}return s.attributesNum!==te||s.index!==W}function S(b,N,q,W){const Q={},ne=N.attributes;let te=0;const he=q.getAttributes();for(const K in he)if(he[K].location>=0){let pe=ne[K];pe===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));const De={};De.attribute=pe,pe&&pe.data&&(De.data=pe.data),Q[K]=De,te++}s.attributes=Q,s.attributesNum=te,s.index=W}function y(){const b=s.newAttributes;for(let N=0,q=b.length;N<q;N++)b[N]=0}function g(b){d(b,0)}function d(b,N){const q=s.newAttributes,W=s.enabledAttributes,Q=s.attributeDivisors;q[b]=1,W[b]===0&&(i.enableVertexAttribArray(b),W[b]=1),Q[b]!==N&&(i.vertexAttribDivisor(b,N),Q[b]=N)}function P(){const b=s.newAttributes,N=s.enabledAttributes;for(let q=0,W=N.length;q<W;q++)N[q]!==b[q]&&(i.disableVertexAttribArray(q),N[q]=0)}function A(b,N,q,W,Q,ne,te){te===!0?i.vertexAttribIPointer(b,N,q,Q,ne):i.vertexAttribPointer(b,N,q,W,Q,ne)}function D(b,N,q,W){y();const Q=W.attributes,ne=q.getAttributes(),te=N.defaultAttributeValues;for(const he in ne){const K=ne[he];if(K.location>=0){let fe=Q[he];if(fe===void 0&&(he==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),he==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){const pe=fe.normalized,De=fe.itemSize,rt=e.get(fe);if(rt===void 0)continue;const gt=rt.buffer,bt=rt.type,Mt=rt.bytesPerElement,ee=bt===i.INT||bt===i.UNSIGNED_INT||fe.gpuType===va;if(fe.isInterleavedBufferAttribute){const re=fe.data,Ee=re.stride,Fe=fe.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<K.locationSize;Re++)d(K.location+Re,re.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<K.locationSize;Re++)g(K.location+Re);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Re=0;Re<K.locationSize;Re++)A(K.location+Re,De/K.locationSize,bt,pe,Ee*Mt,(Fe+De/K.locationSize*Re)*Mt,ee)}else{if(fe.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)d(K.location+re,fe.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let re=0;re<K.locationSize;re++)g(K.location+re);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let re=0;re<K.locationSize;re++)A(K.location+re,De/K.locationSize,bt,pe,De*Mt,De/K.locationSize*re*Mt,ee)}}else if(te!==void 0){const pe=te[he];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(K.location,pe);break;case 3:i.vertexAttrib3fv(K.location,pe);break;case 4:i.vertexAttrib4fv(K.location,pe);break;default:i.vertexAttrib1fv(K.location,pe)}}}}P()}function U(){j();for(const b in n){const N=n[b];for(const q in N){const W=N[q];for(const Q in W)p(W[Q].object),delete W[Q];delete N[q]}delete n[b]}}function R(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const q in N){const W=N[q];for(const Q in W)p(W[Q].object),delete W[Q];delete N[q]}delete n[b.id]}function I(b){for(const N in n){const q=n[N];if(q[b.id]===void 0)continue;const W=q[b.id];for(const Q in W)p(W[Q].object),delete W[Q];delete q[b.id]}}function j(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:j,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:g,disableUnusedAttributes:P}}function vh(i,e,t){let n;function r(l){n=l}function s(l,p){i.drawArrays(n,l,p),t.update(p,n,1)}function o(l,p,m){m!==0&&(i.drawArraysInstanced(n,l,p,m),t.update(p,n,m))}function c(l,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,p,0,m);let _=0;for(let S=0;S<m;S++)_+=p[S];t.update(_,n,1)}function u(l,p,m,x){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<l.length;S++)o(l[S],p[S],x[S]);else{_.multiDrawArraysInstancedWEBGL(n,l,0,p,0,x,0,m);let S=0;for(let y=0;y<m;y++)S+=p[y]*x[y];t.update(S,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Mh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==vn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const j=I===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==An&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vn&&!j)}function u(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const p=u(l);p!==l&&($e("WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const m=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=S>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:_,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:P,maxVaryings:A,maxFragmentUniforms:D,vertexTextures:U,maxSamples:R}}function Sh(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new fi,c=new Je,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const _=m.length!==0||x||n!==0||r;return r=x,n=m.length,_},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,x){t=p(m,x,0)},this.setState=function(m,x,_){const S=m.clippingPlanes,y=m.clipIntersection,g=m.clipShadows,d=i.get(m);if(!r||S===null||S.length===0||s&&!g)s?p(null):l();else{const P=s?0:n,A=P*4;let D=d.clippingState||null;u.value=D,D=p(S,x,A,_);for(let U=0;U!==A;++U)D[U]=t[U];d.clippingState=D,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=P}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,x,_,S){const y=m!==null?m.length:0;let g=null;if(y!==0){if(g=u.value,S!==!0||g===null){const d=_+y*4,P=x.matrixWorldInverse;c.getNormalMatrix(P),(g===null||g.length<d)&&(g=new Float32Array(d));for(let A=0,D=_;A!==y;++A,D+=4)o.copy(m[A]).applyMatrix4(P,c),o.normal.toArray(g,D),g[D+3]=o.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function bh(i){let e=new WeakMap;function t(o,c){return c===Bs?o.mapping=Fi:c===zs&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===Bs||c===zs)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new yl(u.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ei=4,ao=[.125,.215,.35,.446,.526,.582],di=20,yh=256,Zi=new ic,oo=new xt;let Es=null,Ts=0,As=0,ws=!1;const Eh=new G;class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:c=Eh}=s;Es=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,c),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,Ts,As),this._renderer.xr.enabled=ws,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Vi,format:vn,colorSpace:Bi,depthBuffer:!1},r=lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Th(s)),this._blurMaterial=wh(s,e,t),this._ggxMaterial=Ah(s,e,t)}return r}_compileMaterial(e){const t=new ii(new Rn,e);this._renderer.compile(t,Zi)}_sceneToCubeUV(e,t,n,r,s){const u=new hn(90,1,t,n),l=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,_=m.toneMapping;m.getClearColor(oo),m.toneMapping=ti,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new cr,new Yo({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let d=!1;const P=e.background;P?P.isColor&&(g.color.copy(P),e.background=null,d=!0):(g.color.copy(oo),d=!0);for(let A=0;A<6;A++){const D=A%3;D===0?(u.up.set(0,l[A],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+p[A],s.y,s.z)):D===1?(u.up.set(0,0,l[A]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+p[A],s.z)):(u.up.set(0,l[A],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+p[A]));const U=this._cubeSize;Di(r,D*U,A>2?U:0,U,U),m.setRenderTarget(r),d&&m.render(y,u),m.render(e,u)}m.toneMapping=_,m.autoClear=x,e.background=P}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Fi||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Di(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;const u=o.uniforms,l=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(l*l-p*p),x=.05+l*.95,_=m*x,{_lodMax:S}=this,y=this._sizeLods[n],g=3*y*(n>S-ei?n-S+ei:0),d=4*(this._cubeSize-y);u.envMap.value=e.texture,u.roughness.value=_,u.mipInt.value=S-t,Di(s,g,d,3*y,2*y),r.setRenderTarget(s),r.render(c,Zi),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=S-n,Di(e,g,d,3*y,2*y),r.setRenderTarget(e),r.render(c,Zi)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,c){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[r];m.material=l;const x=l.uniforms,_=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*di-1),y=s/S,g=isFinite(s)?1+Math.floor(p*y):di;g>di&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${di}`);const d=[];let P=0;for(let I=0;I<di;++I){const j=I/y,E=Math.exp(-j*j/2);d.push(E),I===0?P+=E:I<g&&(P+=2*E)}for(let I=0;I<d.length;I++)d[I]=d[I]/P;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=d,x.latitudinal.value=o==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:A}=this;x.dTheta.value=S,x.mipInt.value=A-n;const D=this._sizeLods[r],U=3*D*(r>A-ei?r-A+ei:0),R=4*(this._cubeSize-D);Di(t,U,R,3*D,2*D),u.setRenderTarget(t),u.render(m,Zi)}}function Th(i){const e=[],t=[],n=[];let r=i;const s=i-ei+1+ao.length;for(let o=0;o<s;o++){const c=Math.pow(2,r);e.push(c);let u=1/c;o>i-ei?u=ao[o-i+ei-1]:o===0&&(u=0),t.push(u);const l=1/(c-2),p=-l,m=1+l,x=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,S=6,y=3,g=2,d=1,P=new Float32Array(y*S*_),A=new Float32Array(g*S*_),D=new Float32Array(d*S*_);for(let R=0;R<_;R++){const I=R%3*2/3-1,j=R>2?0:-1,E=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];P.set(E,y*S*R),A.set(x,g*S*R);const b=[R,R,R,R,R,R];D.set(b,d*S*R)}const U=new Rn;U.setAttribute("position",new Tn(P,y)),U.setAttribute("uv",new Tn(A,g)),U.setAttribute("faceIndex",new Tn(D,d)),n.push(new ii(U,null)),r>ei&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lo(i,e,t){const n=new xi(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ah(i,e,t){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function wh(i,e,t){const n=new Float32Array(di),r=new G(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function uo(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function fo(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Xr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rh(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,l=u===Bs||u===zs,p=u===Fi||u===Oi;if(l||p){let m=e.get(c);const x=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return t===null&&(t=new co(i)),m=l?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const _=c.image;return l&&_&&_.height>0||p&&_&&r(_)?(t===null&&(t=new co(i)),m=l?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",s),m.texture):null}}}return c}function r(c){let u=0;const l=6;for(let p=0;p<l;p++)c[p]!==void 0&&u++;return u===l}function s(c){const u=c.target;u.removeEventListener("dispose",s);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ch(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ir("WebGLRenderer: "+n+" extension not supported."),r}}}function Ph(i,e,t,n){const r={},s=new WeakMap;function o(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",o),delete r[x.id];const _=s.get(x);_&&(e.remove(_),s.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(m,x){return r[x.id]===!0||(x.addEventListener("dispose",o),r[x.id]=!0,t.memory.geometries++),x}function u(m){const x=m.attributes;for(const _ in x)e.update(x[_],i.ARRAY_BUFFER)}function l(m){const x=[],_=m.index,S=m.attributes.position;let y=0;if(_!==null){const P=_.array;y=_.version;for(let A=0,D=P.length;A<D;A+=3){const U=P[A+0],R=P[A+1],I=P[A+2];x.push(U,R,R,I,I,U)}}else if(S!==void 0){const P=S.array;y=S.version;for(let A=0,D=P.length/3-1;A<D;A+=3){const U=A+0,R=A+1,I=A+2;x.push(U,R,R,I,I,U)}}else return;const g=new(ko(x)?jo:qo)(x,1);g.version=y;const d=s.get(m);d&&e.remove(d),s.set(m,g)}function p(m){const x=s.get(m);if(x){const _=m.index;_!==null&&x.version<_.version&&l(m)}else l(m);return s.get(m)}return{get:c,update:u,getWireframeAttribute:p}}function Lh(i,e,t){let n;function r(x){n=x}let s,o;function c(x){s=x.type,o=x.bytesPerElement}function u(x,_){i.drawElements(n,_,s,x*o),t.update(_,n,1)}function l(x,_,S){S!==0&&(i.drawElementsInstanced(n,_,s,x*o,S),t.update(_,n,S))}function p(x,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,x,0,S);let g=0;for(let d=0;d<S;d++)g+=_[d];t.update(g,n,1)}function m(x,_,S,y){if(S===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<x.length;d++)l(x[d]/o,_[d],y[d]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,s,x,0,y,0,S);let d=0;for(let P=0;P<S;P++)d+=_[P]*y[P];t.update(d,n,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=l,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Dh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(s/3);break;case i.LINES:t.lines+=c*(s/2);break;case i.LINE_STRIP:t.lines+=c*(s-1);break;case i.LINE_LOOP:t.lines+=c*s;break;case i.POINTS:t.points+=c*s;break;default:Nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Uh(i,e,t){const n=new WeakMap,r=new wt;function s(o,c,u){const l=o.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let x=n.get(c);if(x===void 0||x.count!==m){let E=function(){I.dispose(),n.delete(c),c.removeEventListener("dispose",E)};x!==void 0&&x.texture.dispose();const _=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],d=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let A=0;_===!0&&(A=1),S===!0&&(A=2),y===!0&&(A=3);let D=c.attributes.position.count*A,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const R=new Float32Array(D*U*4*m),I=new Ho(R,D,U,m);I.type=Vn,I.needsUpdate=!0;const j=A*4;for(let b=0;b<m;b++){const N=g[b],q=d[b],W=P[b],Q=D*U*4*b;for(let ne=0;ne<N.count;ne++){const te=ne*j;_===!0&&(r.fromBufferAttribute(N,ne),R[Q+te+0]=r.x,R[Q+te+1]=r.y,R[Q+te+2]=r.z,R[Q+te+3]=0),S===!0&&(r.fromBufferAttribute(q,ne),R[Q+te+4]=r.x,R[Q+te+5]=r.y,R[Q+te+6]=r.z,R[Q+te+7]=0),y===!0&&(r.fromBufferAttribute(W,ne),R[Q+te+8]=r.x,R[Q+te+9]=r.y,R[Q+te+10]=r.z,R[Q+te+11]=W.itemSize===4?r.w:1)}}x={count:m,texture:I,size:new dt(D,U)},n.set(c,x),c.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let y=0;y<l.length;y++)_+=l[y];const S=c.morphTargetsRelative?1:1-_;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",l)}u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:s}}function Ih(i,e,t,n){let r=new WeakMap;function s(u){const l=n.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==l&&(e.update(m),r.set(m,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,l))),u.isSkinnedMesh){const x=u.skeleton;r.get(x)!==l&&(x.update(),r.set(x,l))}return m}function o(){r=new WeakMap}function c(u){const l=u.target;l.removeEventListener("dispose",c),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const sc=new nn,ho=new Jo(1,1),ac=new Ho,oc=new sl,cc=new Zo,po=[],mo=[],xo=new Float32Array(16),go=new Float32Array(9),_o=new Float32Array(4);function ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=po[r];if(s===void 0&&(s=new Float32Array(r),po[r]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(s,c)}return s}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yr(i,e){let t=mo[e];t===void 0&&(t=new Int32Array(e),mo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function Oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Bh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function zh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;_o.set(n),i.uniformMatrix2fv(this.addr,!1,_o),Vt(t,n)}}function Vh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;go.set(n),i.uniformMatrix3fv(this.addr,!1,go),Vt(t,n)}}function Gh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;xo.set(n),i.uniformMatrix4fv(this.addr,!1,xo),Vt(t,n)}}function kh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function Wh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function Xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Yh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function $h(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ho.compareFunction=Go,s=ho):s=sc,t.setTexture2D(e||s,r)}function Zh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||oc,r)}function Jh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cc,r)}function Qh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ac,r)}function ed(i){switch(i){case 5126:return Nh;case 35664:return Fh;case 35665:return Oh;case 35666:return Bh;case 35674:return zh;case 35675:return Vh;case 35676:return Gh;case 5124:case 35670:return kh;case 35667:case 35671:return Hh;case 35668:case 35672:return Wh;case 35669:case 35673:return Xh;case 5125:return Yh;case 36294:return qh;case 36295:return jh;case 36296:return Kh;case 35678:case 36198:case 36298:case 36306:case 35682:return $h;case 35679:case 36299:case 36307:return Zh;case 35680:case 36300:case 36308:case 36293:return Jh;case 36289:case 36303:case 36311:case 36292:return Qh}}function td(i,e){i.uniform1fv(this.addr,e)}function nd(i,e){const t=ki(e,this.size,2);i.uniform2fv(this.addr,t)}function id(i,e){const t=ki(e,this.size,3);i.uniform3fv(this.addr,t)}function rd(i,e){const t=ki(e,this.size,4);i.uniform4fv(this.addr,t)}function sd(i,e){const t=ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ad(i,e){const t=ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function od(i,e){const t=ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cd(i,e){i.uniform1iv(this.addr,e)}function ld(i,e){i.uniform2iv(this.addr,e)}function ud(i,e){i.uniform3iv(this.addr,e)}function fd(i,e){i.uniform4iv(this.addr,e)}function hd(i,e){i.uniform1uiv(this.addr,e)}function dd(i,e){i.uniform2uiv(this.addr,e)}function pd(i,e){i.uniform3uiv(this.addr,e)}function md(i,e){i.uniform4uiv(this.addr,e)}function xd(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||sc,s[o])}function gd(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||oc,s[o])}function _d(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cc,s[o])}function vd(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ac,s[o])}function Md(i){switch(i){case 5126:return td;case 35664:return nd;case 35665:return id;case 35666:return rd;case 35674:return sd;case 35675:return ad;case 35676:return od;case 5124:case 35670:return cd;case 35667:case 35671:return ld;case 35668:case 35672:return ud;case 35669:case 35673:return fd;case 5125:return hd;case 36294:return dd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return xd;case 35679:case 36299:case 36307:return gd;case 35680:case 36300:case 36308:case 36293:return _d;case 36289:case 36303:case 36311:case 36292:return vd}}class Sd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ed(t.type)}}class bd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Md(t.type)}}class yd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const c=r[s];c.setValue(e,t[c.id],n)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function vo(i,e){i.seq.push(e),i.map[e.id]=e}function Ed(i,e,t){const n=i.name,r=n.length;for(Rs.lastIndex=0;;){const s=Rs.exec(n),o=Rs.lastIndex;let c=s[1];const u=s[2]==="]",l=s[3];if(u&&(c=c|0),l===void 0||l==="["&&o+2===r){vo(t,l===void 0?new Sd(c,i,e):new bd(c,i,e));break}else{let m=t.map[c];m===void 0&&(m=new yd(c),vo(t,m)),t=m}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ed(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Mo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Td=37297;let Ad=0;function wd(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const So=new Je;function Rd(i){pt._getMatrix(So,pt.workingColorSpace,i);const e=`mat3( ${So.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+wd(i.getShaderSource(e),c)}else return s}function Cd(i,e){const t=Rd(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pd(i,e){let t;switch(e){case Uc:t="Linear";break;case Ic:t="Reinhard";break;case Nc:t="Cineon";break;case Fc:t="ACESFilmic";break;case Bc:t="AgX";break;case zc:t="Neutral";break;case Oc:t="Custom";break;default:$e("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ir=new G;function Ld(){pt.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function Ud(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Id(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let c=1;s.type===i.FLOAT_MAT2&&(c=2),s.type===i.FLOAT_MAT3&&(c=3),s.type===i.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function Ji(i){return i!==""}function yo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(i){return i.replace(Nd,Od)}const Fd=new Map;function Od(i,e){let t=Qe[e];if(t===void 0){const n=Fd.get(e);if(n!==void 0)t=Qe[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ga(t)}const Bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(i){return i.replace(Bd,zd)}function zd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ao(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function Gd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Hd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lo:e="ENVMAP_BLENDING_MULTIPLY";break;case Lc:e="ENVMAP_BLENDING_MIX";break;case Dc:e="ENVMAP_BLENDING_ADD";break}return e}function Wd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xd(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=Vd(t),l=Gd(t),p=kd(t),m=Hd(t),x=Wd(t),_=Dd(t),S=Ud(s),y=r.createProgram();let g,d,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ji).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ji).join(`
`),d.length>0&&(d+=`
`)):(g=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),d=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ti?Pd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Cd("linearToOutputTexel",t.outputColorSpace),Ld(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),o=ga(o),o=yo(o,t),o=Eo(o,t),c=ga(c),c=yo(c,t),c=Eo(c,t),o=To(o),c=To(c),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=P+g+o,D=P+d+c,U=Mo(r,r.VERTEX_SHADER,A),R=Mo(r,r.FRAGMENT_SHADER,D);r.attachShader(y,U),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(N){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(y)||"",W=r.getShaderInfoLog(U)||"",Q=r.getShaderInfoLog(R)||"",ne=q.trim(),te=W.trim(),he=Q.trim();let K=!0,fe=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,U,R);else{const pe=bo(r,U,"vertex"),De=bo(r,R,"fragment");Nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ne+`
`+pe+`
`+De)}else ne!==""?$e("WebGLProgram: Program Info Log:",ne):(te===""||he==="")&&(fe=!1);fe&&(N.diagnostics={runnable:K,programLog:ne,vertexShader:{log:te,prefix:g},fragmentShader:{log:he,prefix:d}})}r.deleteShader(U),r.deleteShader(R),j=new zr(r,y),E=Id(r,y)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,Td)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ad++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=R,this}let Yd=0;class qd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jd(e),t.set(e,n)),n}}class jd{constructor(e){this.id=Yd++,this.code=e,this.usedTimes=0}}function Kd(i,e,t,n,r,s,o){const c=new Wo,u=new qd,l=new Set,p=[],m=r.logarithmicDepthBuffer,x=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,b,N,q,W){const Q=q.fog,ne=W.geometry,te=E.isMeshStandardMaterial?q.environment:null,he=(E.isMeshStandardMaterial?t:e).get(E.envMap||te),K=he&&he.mapping===Hr?he.image.height:null,fe=S[E.type];E.precision!==null&&(_=r.getMaxPrecision(E.precision),_!==E.precision&&$e("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const pe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,De=pe!==void 0?pe.length:0;let rt=0;ne.morphAttributes.position!==void 0&&(rt=1),ne.morphAttributes.normal!==void 0&&(rt=2),ne.morphAttributes.color!==void 0&&(rt=3);let gt,bt,Mt,ee;if(fe){const mt=yn[fe];gt=mt.vertexShader,bt=mt.fragmentShader}else gt=E.vertexShader,bt=E.fragmentShader,u.update(E),Mt=u.getVertexShaderID(E),ee=u.getFragmentShaderID(E);const re=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Fe=W.isInstancedMesh===!0,Re=W.isBatchedMesh===!0,Ye=!!E.map,Ft=!!E.matcap,je=!!he,Rt=!!E.aoMap,L=!!E.lightMap,He=!!E.bumpMap,Ke=!!E.normalMap,st=!!E.displacementMap,Se=!!E.emissiveMap,yt=!!E.metalnessMap,Te=!!E.roughnessMap,ke=E.anisotropy>0,T=E.clearcoat>0,v=E.dispersion>0,z=E.iridescence>0,Z=E.sheen>0,ie=E.transmission>0,X=ke&&!!E.anisotropyMap,Le=T&&!!E.clearcoatMap,xe=T&&!!E.clearcoatNormalMap,Ie=T&&!!E.clearcoatRoughnessMap,Ce=z&&!!E.iridescenceMap,ae=z&&!!E.iridescenceThicknessMap,ce=Z&&!!E.sheenColorMap,Oe=Z&&!!E.sheenRoughnessMap,Me=!!E.specularMap,_e=!!E.specularColorMap,ze=!!E.specularIntensityMap,C=ie&&!!E.transmissionMap,me=ie&&!!E.thicknessMap,de=!!E.gradientMap,le=!!E.alphaMap,se=E.alphaTest>0,k=!!E.alphaHash,Ae=!!E.extensions;let Ve=ti;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const Et={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:gt,fragmentShader:bt,defines:E.defines,customVertexShaderID:Mt,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:Re,batchingColor:Re&&W._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&W.instanceColor!==null,instancingMorph:Fe&&W.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Bi,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Ft,envMap:je,envMapMode:je&&he.mapping,envMapCubeUVHeight:K,aoMap:Rt,lightMap:L,bumpMap:He,normalMap:Ke,displacementMap:x&&st,emissiveMap:Se,normalMapObjectSpace:Ke&&E.normalMapType===Hc,normalMapTangentSpace:Ke&&E.normalMapType===Vo,metalnessMap:yt,roughnessMap:Te,anisotropy:ke,anisotropyMap:X,clearcoat:T,clearcoatMap:Le,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ie,dispersion:v,iridescence:z,iridescenceMap:Ce,iridescenceThicknessMap:ae,sheen:Z,sheenColorMap:ce,sheenRoughnessMap:Oe,specularMap:Me,specularColorMap:_e,specularIntensityMap:ze,transmission:ie,transmissionMap:C,thicknessMap:me,gradientMap:de,opaque:E.transparent===!1&&E.blending===Ui&&E.alphaToCoverage===!1,alphaMap:le,alphaTest:se,alphaHash:k,combine:E.combine,mapUv:Ye&&y(E.map.channel),aoMapUv:Rt&&y(E.aoMap.channel),lightMapUv:L&&y(E.lightMap.channel),bumpMapUv:He&&y(E.bumpMap.channel),normalMapUv:Ke&&y(E.normalMap.channel),displacementMapUv:st&&y(E.displacementMap.channel),emissiveMapUv:Se&&y(E.emissiveMap.channel),metalnessMapUv:yt&&y(E.metalnessMap.channel),roughnessMapUv:Te&&y(E.roughnessMap.channel),anisotropyMapUv:X&&y(E.anisotropyMap.channel),clearcoatMapUv:Le&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&y(E.sheenRoughnessMap.channel),specularMapUv:Me&&y(E.specularMap.channel),specularColorMapUv:_e&&y(E.specularColorMap.channel),specularIntensityMapUv:ze&&y(E.specularIntensityMap.channel),transmissionMapUv:C&&y(E.transmissionMap.channel),thicknessMapUv:me&&y(E.thicknessMap.channel),alphaMapUv:le&&y(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ke||ke),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ne.attributes.uv&&(Ye||le),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ee,skinning:W.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&pt.getTransfer(E.map.colorSpace)===At,decodeVideoTextureEmissive:Se&&E.emissiveMap.isVideoTexture===!0&&pt.getTransfer(E.emissiveMap.colorSpace)===At,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Bn,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function d(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)b.push(N),b.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(P(b,E),A(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function P(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function A(E,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),b.gradientMap&&c.enable(22),E.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reversedDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),E.push(c.mask)}function D(E){const b=S[E.type];let N;if(b){const q=yn[b];N=vl.clone(q.uniforms)}else N=E.uniforms;return N}function U(E,b){let N;for(let q=0,W=p.length;q<W;q++){const Q=p[q];if(Q.cacheKey===b){N=Q,++N.usedTimes;break}}return N===void 0&&(N=new Xd(i,b,E,s),p.push(N)),N}function R(E){if(--E.usedTimes===0){const b=p.indexOf(E);p[b]=p[p.length-1],p.pop(),E.destroy()}}function I(E){u.remove(E)}function j(){u.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:D,acquireProgram:U,releaseProgram:R,releaseShaderCache:I,programs:p,dispose:j}}function $d(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function r(o,c,u){i.get(o)[c]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Zd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ro(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(m,x,_,S,y,g){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:x,material:_,groupOrder:S,renderOrder:m.renderOrder,z:y,group:g},i[e]=d):(d.id=m.id,d.object=m,d.geometry=x,d.material=_,d.groupOrder=S,d.renderOrder=m.renderOrder,d.z=y,d.group=g),e++,d}function c(m,x,_,S,y,g){const d=o(m,x,_,S,y,g);_.transmission>0?n.push(d):_.transparent===!0?r.push(d):t.push(d)}function u(m,x,_,S,y,g){const d=o(m,x,_,S,y,g);_.transmission>0?n.unshift(d):_.transparent===!0?r.unshift(d):t.unshift(d)}function l(m,x){t.length>1&&t.sort(m||Zd),n.length>1&&n.sort(x||wo),r.length>1&&r.sort(x||wo)}function p(){for(let m=e,x=i.length;m<x;m++){const _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:p,sort:l}}function Jd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ro,i.set(n,[o])):r>=s.length?(o=new Ro,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new xt};break;case"SpotLight":t={position:new G,direction:new G,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tp=0;function np(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ip(i){const e=new Qd,t=ep(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const r=new G,s=new Ut,o=new Ut;function c(l){let p=0,m=0,x=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let _=0,S=0,y=0,g=0,d=0,P=0,A=0,D=0,U=0,R=0,I=0;l.sort(np);for(let E=0,b=l.length;E<b;E++){const N=l[E],q=N.color,W=N.intensity,Q=N.distance,ne=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=q.r*W,m+=q.g*W,x+=q.b*W;else if(N.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(N.sh.coefficients[te],W);I++}else if(N.isDirectionalLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const he=N.shadow,K=t.get(N);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,n.directionalShadow[_]=K,n.directionalShadowMap[_]=ne,n.directionalShadowMatrix[_]=N.shadow.matrix,P++}n.directional[_]=te,_++}else if(N.isSpotLight){const te=e.get(N);te.position.setFromMatrixPosition(N.matrixWorld),te.color.copy(q).multiplyScalar(W),te.distance=Q,te.coneCos=Math.cos(N.angle),te.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),te.decay=N.decay,n.spot[y]=te;const he=N.shadow;if(N.map&&(n.spotLightMap[U]=N.map,U++,he.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[y]=he.matrix,N.castShadow){const K=t.get(N);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=ne,D++}y++}else if(N.isRectAreaLight){const te=e.get(N);te.color.copy(q).multiplyScalar(W),te.halfWidth.set(N.width*.5,0,0),te.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=te,g++}else if(N.isPointLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),te.distance=N.distance,te.decay=N.decay,N.castShadow){const he=N.shadow,K=t.get(N);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,K.shadowCameraNear=he.camera.near,K.shadowCameraFar=he.camera.far,n.pointShadow[S]=K,n.pointShadowMap[S]=ne,n.pointShadowMatrix[S]=N.shadow.matrix,A++}n.point[S]=te,S++}else if(N.isHemisphereLight){const te=e.get(N);te.skyColor.copy(N.color).multiplyScalar(W),te.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[d]=te,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=x;const j=n.hash;(j.directionalLength!==_||j.pointLength!==S||j.spotLength!==y||j.rectAreaLength!==g||j.hemiLength!==d||j.numDirectionalShadows!==P||j.numPointShadows!==A||j.numSpotShadows!==D||j.numSpotMaps!==U||j.numLightProbes!==I)&&(n.directional.length=_,n.spot.length=y,n.rectArea.length=g,n.point.length=S,n.hemi.length=d,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=D+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,j.directionalLength=_,j.pointLength=S,j.spotLength=y,j.rectAreaLength=g,j.hemiLength=d,j.numDirectionalShadows=P,j.numPointShadows=A,j.numSpotShadows=D,j.numSpotMaps=U,j.numLightProbes=I,n.version=tp++)}function u(l,p){let m=0,x=0,_=0,S=0,y=0;const g=p.matrixWorldInverse;for(let d=0,P=l.length;d<P;d++){const A=l[d];if(A.isDirectionalLight){const D=n.directional[m];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(g),m++}else if(A.isSpotLight){const D=n.spot[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(g),_++}else if(A.isRectAreaLight){const D=n.rectArea[S];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(g),o.identity(),s.copy(A.matrixWorld),s.premultiply(g),o.extractRotation(s),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),S++}else if(A.isPointLight){const D=n.point[x];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(g),x++}else if(A.isHemisphereLight){const D=n.hemi[y];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(g),y++}}}return{setup:c,setupView:u,state:n}}function Co(i){const e=new ip(i),t=[],n=[];function r(p){l.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function o(p){n.push(p)}function c(){e.setup(t)}function u(p){e.setupView(t,p)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o}}function rp(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new Co(i),e.set(r,[c])):s>=o.length?(c=new Co(i),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ap=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function op(i,e,t){let n=new Ra;const r=new dt,s=new dt,o=new wt,c=new Cl({depthPacking:kc}),u=new Pl,l={},p=t.maxTextureSize,m={[ni]:sn,[sn]:ni,[Bn]:Bn},x=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:sp,fragmentShader:ap}),_=x.clone();_.defines.HORIZONTAL_PASS=1;const S=new Rn;S.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ii(S,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let d=this.type;this.render=function(R,I,j){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Gn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=d!==On&&this.type===On,Q=d===On&&this.type!==On;for(let ne=0,te=R.length;ne<te;ne++){const he=R[ne],K=he.shadow;if(K===void 0){$e("WebGLShadowMap:",he,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const fe=K.getFrameExtents();if(r.multiply(fe),s.copy(K.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/fe.x),r.x=s.x*fe.x,K.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/fe.y),r.y=s.y*fe.y,K.mapSize.y=s.y)),K.map===null||W===!0||Q===!0){const De=this.type!==On?{minFilter:cn,magFilter:cn}:{};K.map!==null&&K.map.dispose(),K.map=new xi(r.x,r.y,De),K.map.texture.name=he.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const pe=K.getViewportCount();for(let De=0;De<pe;De++){const rt=K.getViewport(De);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),q.viewport(o),K.updateMatrices(he,De),n=K.getFrustum(),D(I,j,K.camera,he,this.type)}K.isPointLightShadow!==!0&&this.type===On&&P(K,j),K.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(E,b,N)};function P(R,I){const j=e.update(y);x.defines.VSM_SAMPLES!==R.blurSamples&&(x.defines.VSM_SAMPLES=R.blurSamples,_.defines.VSM_SAMPLES=R.blurSamples,x.needsUpdate=!0,_.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xi(r.x,r.y)),x.uniforms.shadow_pass.value=R.map.texture,x.uniforms.resolution.value=R.mapSize,x.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,j,x,y,null),_.uniforms.shadow_pass.value=R.mapPass.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,j,_,y,null)}function A(R,I,j,E){let b=null;const N=j.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)b=N;else if(b=j.isPointLight===!0?u:c,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const q=b.uuid,W=I.uuid;let Q=l[q];Q===void 0&&(Q={},l[q]=Q);let ne=Q[W];ne===void 0&&(ne=b.clone(),Q[W]=ne,I.addEventListener("dispose",U)),b=ne}if(b.visible=I.visible,b.wireframe=I.wireframe,E===On?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:m[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,j.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=i.properties.get(b);q.light=j}return b}function D(R,I,j,E,b){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===On)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld);const W=e.update(R),Q=R.material;if(Array.isArray(Q)){const ne=W.groups;for(let te=0,he=ne.length;te<he;te++){const K=ne[te],fe=Q[K.materialIndex];if(fe&&fe.visible){const pe=A(R,fe,E,b);R.onBeforeShadow(i,R,I,j,W,pe,K),i.renderBufferDirect(j,null,W,pe,R,K),R.onAfterShadow(i,R,I,j,W,pe,K)}}}else if(Q.visible){const ne=A(R,Q,E,b);R.onBeforeShadow(i,R,I,j,W,ne,null),i.renderBufferDirect(j,null,W,ne,R,null),R.onAfterShadow(i,R,I,j,W,ne,null)}}const q=R.children;for(let W=0,Q=q.length;W<Q;W++)D(q[W],I,j,E,b)}function U(R){R.target.removeEventListener("dispose",U);for(const j in l){const E=l[j],b=R.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const cp={[Ls]:Ds,[Us]:Fs,[Is]:Os,[Ni]:Ns,[Ds]:Ls,[Fs]:Us,[Os]:Is,[Ns]:Ni};function lp(i,e){function t(){let C=!1;const me=new wt;let de=null;const le=new wt(0,0,0,0);return{setMask:function(se){de!==se&&!C&&(i.colorMask(se,se,se,se),de=se)},setLocked:function(se){C=se},setClear:function(se,k,Ae,Ve,Et){Et===!0&&(se*=Ve,k*=Ve,Ae*=Ve),me.set(se,k,Ae,Ve),le.equals(me)===!1&&(i.clearColor(se,k,Ae,Ve),le.copy(me))},reset:function(){C=!1,de=null,le.set(-1,0,0,0)}}}function n(){let C=!1,me=!1,de=null,le=null,se=null;return{setReversed:function(k){if(me!==k){const Ae=e.get("EXT_clip_control");k?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),me=k;const Ve=se;se=null,this.setClear(Ve)}},getReversed:function(){return me},setTest:function(k){k?re(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(k){de!==k&&!C&&(i.depthMask(k),de=k)},setFunc:function(k){if(me&&(k=cp[k]),le!==k){switch(k){case Ls:i.depthFunc(i.NEVER);break;case Ds:i.depthFunc(i.ALWAYS);break;case Us:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case Is:i.depthFunc(i.EQUAL);break;case Ns:i.depthFunc(i.GEQUAL);break;case Fs:i.depthFunc(i.GREATER);break;case Os:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=k}},setLocked:function(k){C=k},setClear:function(k){se!==k&&(me&&(k=1-k),i.clearDepth(k),se=k)},reset:function(){C=!1,de=null,le=null,se=null,me=!1}}}function r(){let C=!1,me=null,de=null,le=null,se=null,k=null,Ae=null,Ve=null,Et=null;return{setTest:function(mt){C||(mt?re(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(mt){me!==mt&&!C&&(i.stencilMask(mt),me=mt)},setFunc:function(mt,Gt,$t){(de!==mt||le!==Gt||se!==$t)&&(i.stencilFunc(mt,Gt,$t),de=mt,le=Gt,se=$t)},setOp:function(mt,Gt,$t){(k!==mt||Ae!==Gt||Ve!==$t)&&(i.stencilOp(mt,Gt,$t),k=mt,Ae=Gt,Ve=$t)},setLocked:function(mt){C=mt},setClear:function(mt){Et!==mt&&(i.clearStencil(mt),Et=mt)},reset:function(){C=!1,me=null,de=null,le=null,se=null,k=null,Ae=null,Ve=null,Et=null}}}const s=new t,o=new n,c=new r,u=new WeakMap,l=new WeakMap;let p={},m={},x=new WeakMap,_=[],S=null,y=!1,g=null,d=null,P=null,A=null,D=null,U=null,R=null,I=new xt(0,0,0),j=0,E=!1,b=null,N=null,q=null,W=null,Q=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,he=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),te=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),te=he>=2);let fe=null,pe={};const De=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),gt=new wt().fromArray(De),bt=new wt().fromArray(rt);function Mt(C,me,de,le){const se=new Uint8Array(4),k=i.createTexture();i.bindTexture(C,k),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<de;Ae++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(me+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return k}const ee={};ee[i.TEXTURE_2D]=Mt(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=Mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),re(i.DEPTH_TEST),o.setFunc(Ni),He(!1),Ke(La),re(i.CULL_FACE),Rt(Gn);function re(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function Ee(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function Fe(C,me){return m[C]!==me?(i.bindFramebuffer(C,me),m[C]=me,C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=me),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Re(C,me){let de=_,le=!1;if(C){de=x.get(me),de===void 0&&(de=[],x.set(me,de));const se=C.textures;if(de.length!==se.length||de[0]!==i.COLOR_ATTACHMENT0){for(let k=0,Ae=se.length;k<Ae;k++)de[k]=i.COLOR_ATTACHMENT0+k;de.length=se.length,le=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,le=!0);le&&i.drawBuffers(de)}function Ye(C){return S!==C?(i.useProgram(C),S=C,!0):!1}const Ft={[hi]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};Ft[xc]=i.MIN,Ft[gc]=i.MAX;const je={[_c]:i.ZERO,[vc]:i.ONE,[Mc]:i.SRC_COLOR,[Cs]:i.SRC_ALPHA,[Ac]:i.SRC_ALPHA_SATURATE,[Ec]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Sc]:i.ONE_MINUS_SRC_COLOR,[Ps]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[wc]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(C,me,de,le,se,k,Ae,Ve,Et,mt){if(C===Gn){y===!0&&(Ee(i.BLEND),y=!1);return}if(y===!1&&(re(i.BLEND),y=!0),C!==dc){if(C!==g||mt!==E){if((d!==hi||D!==hi)&&(i.blendEquation(i.FUNC_ADD),d=hi,D=hi),mt)switch(C){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",C);break}else switch(C){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ua:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ia:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",C);break}P=null,A=null,U=null,R=null,I.set(0,0,0),j=0,g=C,E=mt}return}se=se||me,k=k||de,Ae=Ae||le,(me!==d||se!==D)&&(i.blendEquationSeparate(Ft[me],Ft[se]),d=me,D=se),(de!==P||le!==A||k!==U||Ae!==R)&&(i.blendFuncSeparate(je[de],je[le],je[k],je[Ae]),P=de,A=le,U=k,R=Ae),(Ve.equals(I)===!1||Et!==j)&&(i.blendColor(Ve.r,Ve.g,Ve.b,Et),I.copy(Ve),j=Et),g=C,E=!1}function L(C,me){C.side===Bn?Ee(i.CULL_FACE):re(i.CULL_FACE);let de=C.side===sn;me&&(de=!de),He(de),C.blending===Ui&&C.transparent===!1?Rt(Gn):Rt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);const le=C.stencilWrite;c.setTest(le),le&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Se(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(C){b!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),b=C)}function Ke(C){C!==uc?(re(i.CULL_FACE),C!==N&&(C===La?i.cullFace(i.BACK):C===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),N=C}function st(C){C!==q&&(te&&i.lineWidth(C),q=C)}function Se(C,me,de){C?(re(i.POLYGON_OFFSET_FILL),(W!==me||Q!==de)&&(i.polygonOffset(me,de),W=me,Q=de)):Ee(i.POLYGON_OFFSET_FILL)}function yt(C){C?re(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Te(C){C===void 0&&(C=i.TEXTURE0+ne-1),fe!==C&&(i.activeTexture(C),fe=C)}function ke(C,me,de){de===void 0&&(fe===null?de=i.TEXTURE0+ne-1:de=fe);let le=pe[de];le===void 0&&(le={type:void 0,texture:void 0},pe[de]=le),(le.type!==C||le.texture!==me)&&(fe!==de&&(i.activeTexture(de),fe=de),i.bindTexture(C,me||ee[C]),le.type=C,le.texture=me)}function T(){const C=pe[fe];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function Z(){try{i.texSubImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function ie(){try{i.texSubImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function xe(){try{i.texStorage2D(...arguments)}catch(C){C("WebGLState:",C)}}function Ie(){try{i.texStorage3D(...arguments)}catch(C){C("WebGLState:",C)}}function Ce(){try{i.texImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function ae(){try{i.texImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function ce(C){gt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),gt.copy(C))}function Oe(C){bt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),bt.copy(C))}function Me(C,me){let de=l.get(me);de===void 0&&(de=new WeakMap,l.set(me,de));let le=de.get(C);le===void 0&&(le=i.getUniformBlockIndex(me,C.name),de.set(C,le))}function _e(C,me){const le=l.get(me).get(C);u.get(me)!==le&&(i.uniformBlockBinding(me,le,C.__bindingPointIndex),u.set(me,le))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},fe=null,pe={},m={},x=new WeakMap,_=[],S=null,y=!1,g=null,d=null,P=null,A=null,D=null,U=null,R=null,I=new xt(0,0,0),j=0,E=!1,b=null,N=null,q=null,W=null,Q=null,gt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:re,disable:Ee,bindFramebuffer:Fe,drawBuffers:Re,useProgram:Ye,setBlending:Rt,setMaterial:L,setFlipSided:He,setCullFace:Ke,setLineWidth:st,setPolygonOffset:Se,setScissorTest:yt,activeTexture:Te,bindTexture:ke,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:Ce,texImage3D:ae,updateUBOMapping:Me,uniformBlockBinding:_e,texStorage2D:xe,texStorage3D:Ie,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:X,compressedTexSubImage3D:Le,scissor:ce,viewport:Oe,reset:ze}}function up(i,e,t,n,r,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,p=new WeakMap;let m;const x=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,v){return _?new OffscreenCanvas(T,v):kr("canvas")}function y(T,v,z){let Z=1;const ie=ke(T);if((ie.width>z||ie.height>z)&&(Z=z/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(Z*ie.width),Le=Math.floor(Z*ie.height);m===void 0&&(m=S(X,Le));const xe=v?S(X,Le):m;return xe.width=X,xe.height=Le,xe.getContext("2d").drawImage(T,0,0,X,Le),$e("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+X+"x"+Le+")."),xe}else return"data"in T&&$e("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function g(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,v,z,Z,ie=!1){if(T!==null){if(i[T]!==void 0)return i[T];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=v;if(v===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),v===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const Le=ie?Vr:pt.getTransfer(Z);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=Le===At?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function D(T,v){let z;return T?v===null||v===mi||v===er?z=i.DEPTH24_STENCIL8:v===Vn?z=i.DEPTH32F_STENCIL8:v===Qi&&(z=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mi||v===er?z=i.DEPTH_COMPONENT24:v===Vn?z=i.DEPTH_COMPONENT32F:v===Qi&&(z=i.DEPTH_COMPONENT16),z}function U(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==cn&&T.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){const v=T.target;v.removeEventListener("dispose",R),j(v),v.isVideoTexture&&p.delete(v)}function I(T){const v=T.target;v.removeEventListener("dispose",I),b(v)}function j(T){const v=n.get(T);if(v.__webglInit===void 0)return;const z=T.source,Z=x.get(z);if(Z){const ie=Z[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(T),Object.keys(Z).length===0&&x.delete(z)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const z=T.source,Z=x.get(z);delete Z[v.__cacheKey],o.memory.textures--}function b(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let ie=0;ie<v.__webglFramebuffer[Z].length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[Z][ie]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=T.textures;for(let Z=0,ie=z.length;Z<ie;Z++){const X=n.get(z[Z]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(T)}let N=0;function q(){N=0}function W(){const T=N;return T>=r.maxTextures&&$e("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),N+=1,T}function Q(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function ne(T,v){const z=n.get(T);if(T.isVideoTexture&&yt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const Z=T.image;if(Z===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,T,v);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function te(T,v){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ee(z,T,v);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function he(T,v){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ee(z,T,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function K(T,v){const z=n.get(T);if(T.version>0&&z.__version!==T.version){re(z,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const fe={[Vs]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Gs]:i.MIRRORED_REPEAT},pe={[cn]:i.NEAREST,[Vc]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},De={[Wc]:i.NEVER,[$c]:i.ALWAYS,[Xc]:i.LESS,[Go]:i.LEQUAL,[Yc]:i.EQUAL,[Kc]:i.GEQUAL,[qc]:i.GREATER,[jc]:i.NOTEQUAL};function rt(T,v){if(v.type===Vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===Zr||v.magFilter===pr||v.magFilter===pi||v.minFilter===dn||v.minFilter===Zr||v.minFilter===pr||v.minFilter===pi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,fe[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,fe[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,fe[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pe[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==pr&&v.minFilter!==pi||v.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function gt(T,v){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));const Z=v.source;let ie=x.get(Z);ie===void 0&&(ie={},x.set(Z,ie));const X=Q(v);if(X!==T.__cacheKey){ie[X]===void 0&&(ie[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ie[X].usedTimes++;const Le=ie[T.__cacheKey];Le!==void 0&&(ie[T.__cacheKey].usedTimes--,Le.usedTimes===0&&E(v)),T.__cacheKey=X,T.__webglTexture=ie[X].texture}return z}function bt(T,v,z){return Math.floor(Math.floor(T/z)/v)}function Mt(T,v,z,Z){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,Z,v.data);else{X.sort((ae,ce)=>ae.start-ce.start);let Le=0;for(let ae=1;ae<X.length;ae++){const ce=X[Le],Oe=X[ae],Me=ce.start+ce.count,_e=bt(Oe.start,v.width,4),ze=bt(ce.start,v.width,4);Oe.start<=Me+1&&_e===ze&&bt(Oe.start+Oe.count-1,v.width,4)===_e?ce.count=Math.max(ce.count,Oe.start+Oe.count-ce.start):(++Le,X[Le]=Oe)}X.length=Le+1;const xe=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ae=0,ce=X.length;ae<ce;ae++){const Oe=X[ae],Me=Math.floor(Oe.start/4),_e=Math.ceil(Oe.count/4),ze=Me%v.width,C=Math.floor(Me/v.width),me=_e,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,ze,C,me,de,z,Z,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function ee(T,v,z){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const ie=gt(T,v),X=v.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+z);const Le=n.get(X);if(X.version!==Le.__version||ie===!0){t.activeTexture(i.TEXTURE0+z);const xe=pt.getPrimaries(pt.workingColorSpace),Ie=v.colorSpace===Qn?null:pt.getPrimaries(v.colorSpace),Ce=v.colorSpace===Qn||xe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ae=y(v.image,!1,r.maxTextureSize);ae=Te(v,ae);const ce=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type);let Me=A(v.internalFormat,ce,Oe,v.colorSpace,v.isVideoTexture);rt(Z,v);let _e;const ze=v.mipmaps,C=v.isVideoTexture!==!0,me=Le.__version===void 0||ie===!0,de=X.dataReady,le=U(v,ae);if(v.isDepthTexture)Me=D(v.format===nr,v.type),me&&(C?t.texStorage2D(i.TEXTURE_2D,1,Me,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Me,ae.width,ae.height,0,ce,Oe,null));else if(v.isDataTexture)if(ze.length>0){C&&me&&t.texStorage2D(i.TEXTURE_2D,le,Me,ze[0].width,ze[0].height);for(let se=0,k=ze.length;se<k;se++)_e=ze[se],C?de&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ce,Oe,_e.data):t.texImage2D(i.TEXTURE_2D,se,Me,_e.width,_e.height,0,ce,Oe,_e.data);v.generateMipmaps=!1}else C?(me&&t.texStorage2D(i.TEXTURE_2D,le,Me,ae.width,ae.height),de&&Mt(v,ae,ce,Oe)):t.texImage2D(i.TEXTURE_2D,0,Me,ae.width,ae.height,0,ce,Oe,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){C&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Me,ze[0].width,ze[0].height,ae.depth);for(let se=0,k=ze.length;se<k;se++)if(_e=ze[se],v.format!==vn)if(ce!==null)if(C){if(de)if(v.layerUpdates.size>0){const Ae=so(_e.width,_e.height,v.format,v.type);for(const Ve of v.layerUpdates){const Et=_e.data.subarray(Ve*Ae/_e.data.BYTES_PER_ELEMENT,(Ve+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ve,_e.width,_e.height,1,ce,Et)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ae.depth,ce,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Me,_e.width,_e.height,ae.depth,0,_e.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ae.depth,ce,Oe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Me,_e.width,_e.height,ae.depth,0,ce,Oe,_e.data)}else{C&&me&&t.texStorage2D(i.TEXTURE_2D,le,Me,ze[0].width,ze[0].height);for(let se=0,k=ze.length;se<k;se++)_e=ze[se],v.format!==vn?ce!==null?C?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ce,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Me,_e.width,_e.height,0,_e.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?de&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ce,Oe,_e.data):t.texImage2D(i.TEXTURE_2D,se,Me,_e.width,_e.height,0,ce,Oe,_e.data)}else if(v.isDataArrayTexture)if(C){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Me,ae.width,ae.height,ae.depth),de)if(v.layerUpdates.size>0){const se=so(ae.width,ae.height,v.format,v.type);for(const k of v.layerUpdates){const Ae=ae.data.subarray(k*se/ae.data.BYTES_PER_ELEMENT,(k+1)*se/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,k,ae.width,ae.height,1,ce,Oe,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ce,Oe,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ae.width,ae.height,ae.depth,0,ce,Oe,ae.data);else if(v.isData3DTexture)C?(me&&t.texStorage3D(i.TEXTURE_3D,le,Me,ae.width,ae.height,ae.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ce,Oe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ae.width,ae.height,ae.depth,0,ce,Oe,ae.data);else if(v.isFramebufferTexture){if(me)if(C)t.texStorage2D(i.TEXTURE_2D,le,Me,ae.width,ae.height);else{let se=ae.width,k=ae.height;for(let Ae=0;Ae<le;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Me,se,k,0,ce,Oe,null),se>>=1,k>>=1}}else if(ze.length>0){if(C&&me){const se=ke(ze[0]);t.texStorage2D(i.TEXTURE_2D,le,Me,se.width,se.height)}for(let se=0,k=ze.length;se<k;se++)_e=ze[se],C?de&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ce,Oe,_e):t.texImage2D(i.TEXTURE_2D,se,Me,ce,Oe,_e);v.generateMipmaps=!1}else if(C){if(me){const se=ke(ae);t.texStorage2D(i.TEXTURE_2D,le,Me,se.width,se.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Oe,ae)}else t.texImage2D(i.TEXTURE_2D,0,Me,ce,Oe,ae);g(v)&&d(Z),Le.__version=X.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function re(T,v,z){if(v.image.length!==6)return;const Z=gt(T,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const X=n.get(ie);if(ie.version!==X.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const Le=pt.getPrimaries(pt.workingColorSpace),xe=v.colorSpace===Qn?null:pt.getPrimaries(v.colorSpace),Ie=v.colorSpace===Qn||Le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let k=0;k<6;k++)!Ce&&!ae?ce[k]=y(v.image[k],!0,r.maxCubemapSize):ce[k]=ae?v.image[k].image:v.image[k],ce[k]=Te(v,ce[k]);const Oe=ce[0],Me=s.convert(v.format,v.colorSpace),_e=s.convert(v.type),ze=A(v.internalFormat,Me,_e,v.colorSpace),C=v.isVideoTexture!==!0,me=X.__version===void 0||Z===!0,de=ie.dataReady;let le=U(v,Oe);rt(i.TEXTURE_CUBE_MAP,v);let se;if(Ce){C&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ze,Oe.width,Oe.height);for(let k=0;k<6;k++){se=ce[k].mipmaps;for(let Ae=0;Ae<se.length;Ae++){const Ve=se[Ae];v.format!==vn?Me!==null?C?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae,0,0,Ve.width,Ve.height,Me,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae,ze,Ve.width,Ve.height,0,Ve.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae,0,0,Ve.width,Ve.height,Me,_e,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae,ze,Ve.width,Ve.height,0,Me,_e,Ve.data)}}}else{if(se=v.mipmaps,C&&me){se.length>0&&le++;const k=ke(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ze,k.width,k.height)}for(let k=0;k<6;k++)if(ae){C?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ce[k].width,ce[k].height,Me,_e,ce[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ze,ce[k].width,ce[k].height,0,Me,_e,ce[k].data);for(let Ae=0;Ae<se.length;Ae++){const Et=se[Ae].image[k].image;C?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae+1,0,0,Et.width,Et.height,Me,_e,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae+1,ze,Et.width,Et.height,0,Me,_e,Et.data)}}else{C?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Me,_e,ce[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ze,Me,_e,ce[k]);for(let Ae=0;Ae<se.length;Ae++){const Ve=se[Ae];C?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae+1,0,0,Me,_e,Ve.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae+1,ze,Me,_e,Ve.image[k])}}}g(v)&&d(i.TEXTURE_CUBE_MAP),X.__version=ie.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ee(T,v,z,Z,ie,X){const Le=s.convert(z.format,z.colorSpace),xe=s.convert(z.type),Ie=A(z.internalFormat,Le,xe,z.colorSpace),Ce=n.get(v),ae=n.get(z);if(ae.__renderTarget=v,!Ce.__hasExternalTextures){const ce=Math.max(1,v.width>>X),Oe=Math.max(1,v.height>>X);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,X,Ie,ce,Oe,v.depth,0,Le,xe,null):t.texImage2D(ie,X,Ie,ce,Oe,0,Le,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Se(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,ae.__webglTexture,0,st(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,ae.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(T,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Z=v.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,X=D(v.stencilBuffer,ie),Le=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=st(v);Se(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,X,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,T)}else{const Z=v.textures;for(let ie=0;ie<Z.length;ie++){const X=Z[ie],Le=s.convert(X.format,X.colorSpace),xe=s.convert(X.type),Ie=A(X.internalFormat,Le,xe,X.colorSpace),Ce=st(v);z&&Se(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ie,v.width,v.height):Se(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne(v.depthTexture,0);const ie=Z.__webglTexture,X=st(v);if(v.depthTexture.format===tr)Se(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(v.depthTexture.format===nr)Se(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ye(T){const v=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=Z}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Z=T.texture.mipmaps;Z&&Z.length>0?Re(v.__webglFramebuffer[0],T):Re(v.__webglFramebuffer,T)}else if(z){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),Fe(v.__webglDepthbuffer[Z],T,!1);else{const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,X)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Fe(v.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,v,z){const Z=n.get(T);v!==void 0&&Ee(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ye(T)}function je(T){const v=T.texture,z=n.get(T),Z=n.get(v);T.addEventListener("dispose",I);const ie=T.textures,X=T.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[xe]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)z.__webglFramebuffer[xe][Ie]=i.createFramebuffer()}else z.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let xe=0;xe<v.mipmaps.length;xe++)z.__webglFramebuffer[xe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Le)for(let xe=0,Ie=ie.length;xe<Ie;xe++){const Ce=n.get(ie[xe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Se(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){const Ie=ie[xe];z.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const Ce=s.convert(Ie.format,Ie.colorSpace),ae=s.convert(Ie.type),ce=A(Ie.internalFormat,Ce,ae,Ie.colorSpace,T.isXRRenderTarget===!0),Oe=st(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),rt(i.TEXTURE_CUBE_MAP,v);for(let xe=0;xe<6;xe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)Ee(z.__webglFramebuffer[xe][Ie],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie);else Ee(z.__webglFramebuffer[xe],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(v)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let xe=0,Ie=ie.length;xe<Ie;xe++){const Ce=ie[xe],ae=n.get(Ce);let ce=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ae.__webglTexture),rt(ce,Ce),Ee(z.__webglFramebuffer,T,Ce,i.COLOR_ATTACHMENT0+xe,ce,0),g(Ce)&&d(ce)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Z.__webglTexture),rt(xe,v),v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)Ee(z.__webglFramebuffer[Ie],T,v,i.COLOR_ATTACHMENT0,xe,Ie);else Ee(z.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,xe,0);g(v)&&d(xe),t.unbindTexture()}T.depthBuffer&&Ye(T)}function Rt(T){const v=T.textures;for(let z=0,Z=v.length;z<Z;z++){const ie=v[z];if(g(ie)){const X=P(T),Le=n.get(ie).__webglTexture;t.bindTexture(X,Le),d(X),t.unbindTexture()}}}const L=[],He=[];function Ke(T){if(T.samples>0){if(Se(T)===!1){const v=T.textures,z=T.width,Z=T.height;let ie=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(T),xe=v.length>1;if(xe)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ie=T.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const ae=n.get(v[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,ie,i.NEAREST),u===!0&&(L.length=0,He.length=0,L.push(i.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(L.push(X),He.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const ae=n.get(v[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&u){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function st(T){return Math.min(r.maxSamples,T.samples)}function Se(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function yt(T){const v=o.render.frame;p.get(T)!==v&&(p.set(T,v),T.update())}function Te(T,v){const z=T.colorSpace,Z=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Bi&&z!==Qn&&(pt.getTransfer(z)===At?(Z!==vn||ie!==An)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",z)),v}function ke(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.setTexture2D=ne,this.setTexture2DArray=te,this.setTexture3D=he,this.setTextureCube=K,this.rebindTextures=Ft,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Se}function fp(i,e){function t(n,r=Qn){let s;const o=pt.getTransfer(r);if(n===An)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===No)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uo)return i.BYTE;if(n===Io)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===Oo)return i.ALPHA;if(n===Bo)return i.RGB;if(n===vn)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===ba)return i.RED_INTEGER;if(n===ya)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===Ta)return i.RGBA_INTEGER;if(n===Nr||n===Fr||n===Or||n===Br)if(o===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Nr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Nr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ks||n===Hs||n===Ws||n===Xs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ks)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ws)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ys||n===qs||n===js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ys||n===qs)return o===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===js)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ks||n===$s||n===Zs||n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===ca)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ks)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$s)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zs)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Js)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qs)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ea)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===aa)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ua||n===fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===la)return o===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ha||n===da||n===pa||n===ma)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ha)return s.COMPRESSED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:hp,fragmentShader:dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mp extends Gi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,c="local-floor",u=1,l=null,p=null,m=null,x=null,_=null,S=null;const y=typeof XRWebGLBinding<"u",g=new pp,d={},P=t.getContextAttributes();let A=null,D=null;const U=[],R=[],I=new dt;let j=null;const E=new hn;E.viewport=new wt;const b=new hn;b.viewport=new wt;const N=[E,b],q=new Ul;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=U[ee];return re===void 0&&(re=new Ms,U[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=U[ee];return re===void 0&&(re=new Ms,U[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=U[ee];return re===void 0&&(re=new Ms,U[ee]=re),re.getHandSpace()};function ne(ee){const re=R.indexOf(ee.inputSource);if(re===-1)return;const Ee=U[re];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,l||o),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",he);for(let ee=0;ee<U.length;ee++){const re=R[ee];re!==null&&(R[ee]=null,U[ee].disconnect(re))}W=null,Q=null,g.reset();for(const ee in d)delete d[ee];e.setRenderTarget(A),_=null,x=null,m=null,r=null,D=null,Mt.stop(),n.isPresenting=!1,e.setPixelRatio(j),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){c=ee,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return x!==null?x:_},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",te),r.addEventListener("inputsourceschange",he),P.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Fe=null,Re=null;P.depth&&(Re=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=P.stencil?nr:tr,Fe=P.stencil?er:mi);const Ye={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};m=this.getBinding(),x=m.createProjectionLayer(Ye),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new xi(x.textureWidth,x.textureHeight,{format:vn,type:An,depthTexture:new Jo(x.textureWidth,x.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),D=new xi(_.framebufferWidth,_.framebufferHeight,{format:vn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(u),l=null,o=await r.requestReferenceSpace(c),Mt.setContext(r),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(ee){for(let re=0;re<ee.removed.length;re++){const Ee=ee.removed[re],Fe=R.indexOf(Ee);Fe>=0&&(R[Fe]=null,U[Fe].disconnect(Ee))}for(let re=0;re<ee.added.length;re++){const Ee=ee.added[re];let Fe=R.indexOf(Ee);if(Fe===-1){for(let Ye=0;Ye<U.length;Ye++)if(Ye>=R.length){R.push(Ee),Fe=Ye;break}else if(R[Ye]===null){R[Ye]=Ee,Fe=Ye;break}if(Fe===-1)break}const Re=U[Fe];Re&&Re.connect(Ee)}}const K=new G,fe=new G;function pe(ee,re,Ee){K.setFromMatrixPosition(re.matrixWorld),fe.setFromMatrixPosition(Ee.matrixWorld);const Fe=K.distanceTo(fe),Re=re.projectionMatrix.elements,Ye=Ee.projectionMatrix.elements,Ft=Re[14]/(Re[10]-1),je=Re[14]/(Re[10]+1),Rt=(Re[9]+1)/Re[5],L=(Re[9]-1)/Re[5],He=(Re[8]-1)/Re[0],Ke=(Ye[8]+1)/Ye[0],st=Ft*He,Se=Ft*Ke,yt=Fe/(-He+Ke),Te=yt*-He;if(re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Te),ee.translateZ(yt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Re[10]===-1)ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ke=Ft+yt,T=je+yt,v=st-Te,z=Se+(Fe-Te),Z=Rt*je/T*ke,ie=L*je/T*ke;ee.projectionMatrix.makePerspective(v,z,Z,ie,ke,T),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function De(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let re=ee.near,Ee=ee.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),q.near=b.near=E.near=re,q.far=b.far=E.far=Ee,(W!==q.near||Q!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),W=q.near,Q=q.far),q.layers.mask=ee.layers.mask|6,E.layers.mask=q.layers.mask&3,b.layers.mask=q.layers.mask&5;const Fe=ee.parent,Re=q.cameras;De(q,Fe);for(let Ye=0;Ye<Re.length;Ye++)De(Re[Ye],Fe);Re.length===2?pe(q,E,b):q.projectionMatrix.copy(E.projectionMatrix),rt(ee,q,Fe)};function rt(ee,re,Ee){Ee===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=xa*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&_===null))return u},this.setFoveation=function(ee){u=ee,x!==null&&(x.fixedFoveation=ee),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(ee){return d[ee]};let gt=null;function bt(ee,re){if(p=re.getViewerPose(l||o),S=re,p!==null){const Ee=p.views;_!==null&&(e.setRenderTargetFramebuffer(D,_.framebuffer),e.setRenderTarget(D));let Fe=!1;Ee.length!==q.cameras.length&&(q.cameras.length=0,Fe=!0);for(let je=0;je<Ee.length;je++){const Rt=Ee[je];let L=null;if(_!==null)L=_.getViewport(Rt);else{const Ke=m.getViewSubImage(x,Rt);L=Ke.viewport,je===0&&(e.setRenderTargetTextures(D,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(D))}let He=N[je];He===void 0&&(He=new hn,He.layers.enable(je),He.viewport=new wt,N[je]=He),He.matrix.fromArray(Rt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Rt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(L.x,L.y,L.width,L.height),je===0&&(q.matrix.copy(He.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Fe===!0&&q.cameras.push(He)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){m=n.getBinding();const je=m.getDepthInformation(Ee[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(Re&&Re.includes("camera-access")&&y){e.state.unbindTexture(),m=n.getBinding();for(let je=0;je<Ee.length;je++){const Rt=Ee[je].camera;if(Rt){let L=d[Rt];L||(L=new Qo,d[Rt]=L);const He=m.getCameraImage(Rt);L.sourceTexture=He}}}}for(let Ee=0;Ee<U.length;Ee++){const Fe=R[Ee],Re=U[Ee];Fe!==null&&Re!==void 0&&Re.update(Fe,re,l||o)}gt&&gt(ee,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),S=null}const Mt=new rc;Mt.setAnimationLoop(bt),this.setAnimationLoop=function(ee){gt=ee},this.dispose=function(){}}}const ui=new wn,xp=new Ut;function gp(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Ko(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,P,A,D){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),m(g,d)):d.isMeshPhongMaterial?(s(g,d),p(g,d)):d.isMeshStandardMaterial?(s(g,d),x(g,d),d.isMeshPhysicalMaterial&&_(g,d,D)):d.isMeshMatcapMaterial?(s(g,d),S(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&c(g,d)):d.isPointsMaterial?u(g,d,P,A):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===sn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===sn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const P=e.get(d),A=P.envMap,D=P.envMapRotation;A&&(g.envMap.value=A,ui.copy(D),ui.x*=-1,ui.y*=-1,ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),g.envMapRotation.value.setFromMatrix4(xp.makeRotationFromEuler(ui)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function c(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function u(g,d,P,A){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*P,g.scale.value=A*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function p(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function m(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function x(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function _(g,d,P){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=P.texture,g.transmissionSamplerSize.value.set(P.width,P.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const P=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(P.matrixWorld),g.nearDistance.value=P.shadow.camera.near,g.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _p(i,e,t,n){let r={},s={},o=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(P,A){const D=A.program;n.uniformBlockBinding(P,D)}function l(P,A){let D=r[P.id];D===void 0&&(S(P),D=p(P),r[P.id]=D,P.addEventListener("dispose",g));const U=A.program;n.updateUBOMapping(P,U);const R=e.render.frame;s[P.id]!==R&&(x(P),s[P.id]=R)}function p(P){const A=m();P.__bindingPointIndex=A;const D=i.createBuffer(),U=P.__size,R=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,D),D}function m(){for(let P=0;P<c;P++)if(o.indexOf(P)===-1)return o.push(P),P;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const A=r[P.id],D=P.uniforms,U=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let R=0,I=D.length;R<I;R++){const j=Array.isArray(D[R])?D[R]:[D[R]];for(let E=0,b=j.length;E<b;E++){const N=j[E];if(_(N,R,E,U)===!0){const q=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let Q=0;for(let ne=0;ne<W.length;ne++){const te=W[ne],he=y(te);typeof te=="number"||typeof te=="boolean"?(N.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,q+Q,N.__data)):te.isMatrix3?(N.__data[0]=te.elements[0],N.__data[1]=te.elements[1],N.__data[2]=te.elements[2],N.__data[3]=0,N.__data[4]=te.elements[3],N.__data[5]=te.elements[4],N.__data[6]=te.elements[5],N.__data[7]=0,N.__data[8]=te.elements[6],N.__data[9]=te.elements[7],N.__data[10]=te.elements[8],N.__data[11]=0):(te.toArray(N.__data,Q),Q+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(P,A,D,U){const R=P.value,I=A+"_"+D;if(U[I]===void 0)return typeof R=="number"||typeof R=="boolean"?U[I]=R:U[I]=R.clone(),!0;{const j=U[I];if(typeof R=="number"||typeof R=="boolean"){if(j!==R)return U[I]=R,!0}else if(j.equals(R)===!1)return j.copy(R),!0}return!1}function S(P){const A=P.uniforms;let D=0;const U=16;for(let I=0,j=A.length;I<j;I++){const E=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,N=E.length;b<N;b++){const q=E[b],W=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,ne=W.length;Q<ne;Q++){const te=W[Q],he=y(te),K=D%U,fe=K%he.boundary,pe=K+fe;D+=fe,pe!==0&&U-pe<he.storage&&(D+=U-pe),q.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=he.storage}}}const R=D%U;return R>0&&(D+=U-R),P.__size=D,P.__cache={},this}function y(P){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",P),A}function g(P){const A=P.target;A.removeEventListener("dispose",g);const D=o.indexOf(A.__bindingPointIndex);o.splice(D,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const P in r)i.deleteBuffer(r[P]);o=[],r={},s={}}return{bind:u,update:l,dispose:d}}const vp=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Fn=null;function Mp(){return Fn===null&&(Fn=new Tl(vp,32,32,ya,Vi),Fn.minFilter=dn,Fn.magFilter=dn,Fn.wrapS=zn,Fn.wrapT=zn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class Rp{constructor(e={}){const{canvas:t=Zc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const S=new Set([Ta,Ea,ba]),y=new Set([An,mi,Qi,er,Ma,Sa]),g=new Uint32Array(4),d=new Int32Array(4);let P=null,A=null;const D=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1;this._outputColorSpace=fn;let j=0,E=0,b=null,N=-1,q=null;const W=new wt,Q=new wt;let ne=null;const te=new xt(0);let he=0,K=t.width,fe=t.height,pe=1,De=null,rt=null;const gt=new wt(0,0,K,fe),bt=new wt(0,0,K,fe);let Mt=!1;const ee=new Ra;let re=!1,Ee=!1;const Fe=new Ut,Re=new G,Ye=new wt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Rt(){return b===null?pe:1}let L=n;function He(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_a}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),L===null){const F="webgl2";if(L=He(F,M),L===null)throw He(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let Ke,st,Se,yt,Te,ke,T,v,z,Z,ie,X,Le,xe,Ie,Ce,ae,ce,Oe,Me,_e,ze,C,me;function de(){Ke=new Ch(L),Ke.init(),ze=new fp(L,Ke),st=new Mh(L,Ke,e,ze),Se=new lp(L,Ke),st.reversedDepthBuffer&&x&&Se.buffers.depth.setReversed(!0),yt=new Dh(L),Te=new $d,ke=new up(L,Ke,Se,Te,st,ze,yt),T=new bh(R),v=new Rh(R),z=new Nl(L),C=new _h(L,z),Z=new Ph(L,z,yt,C),ie=new Ih(L,Z,z,yt),Oe=new Uh(L,st,ke),Ce=new Sh(Te),X=new Kd(R,T,v,Ke,st,C,Ce),Le=new gp(R,Te),xe=new Jd,Ie=new rp(Ke),ce=new gh(R,T,v,Se,ie,_,u),ae=new op(R,ie,st),me=new _p(L,yt,st,Se),Me=new vh(L,Ke,yt),_e=new Lh(L,Ke,yt),yt.programs=X.programs,R.capabilities=st,R.extensions=Ke,R.properties=Te,R.renderLists=xe,R.shadowMap=ae,R.state=Se,R.info=yt}de();const le=new mp(R,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(M){M!==void 0&&(pe=M,this.setSize(K,fe,!1))},this.getSize=function(M){return M.set(K,fe)},this.setSize=function(M,F,H=!0){if(le.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,fe=F,t.width=Math.floor(M*pe),t.height=Math.floor(F*pe),H===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(K*pe,fe*pe).floor()},this.setDrawingBufferSize=function(M,F,H){K=M,fe=F,pe=H,t.width=Math.floor(M*H),t.height=Math.floor(F*H),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(W)},this.getViewport=function(M){return M.copy(gt)},this.setViewport=function(M,F,H,Y){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,F,H,Y),Se.viewport(W.copy(gt).multiplyScalar(pe).round())},this.getScissor=function(M){return M.copy(bt)},this.setScissor=function(M,F,H,Y){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,F,H,Y),Se.scissor(Q.copy(bt).multiplyScalar(pe).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(M){Se.setScissorTest(Mt=M)},this.setOpaqueSort=function(M){De=M},this.setTransparentSort=function(M){rt=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,H=!0){let Y=0;if(M){let O=!1;if(b!==null){const ue=b.texture.format;O=S.has(ue)}if(O){const ue=b.texture.type,ve=y.has(ue),we=ce.getClearColor(),be=ce.getClearAlpha(),Be=we.r,Ge=we.g,Ue=we.b;ve?(g[0]=Be,g[1]=Ge,g[2]=Ue,g[3]=be,L.clearBufferuiv(L.COLOR,0,g)):(d[0]=Be,d[1]=Ge,d[2]=Ue,d[3]=be,L.clearBufferiv(L.COLOR,0,d))}else Y|=L.COLOR_BUFFER_BIT}F&&(Y|=L.DEPTH_BUFFER_BIT),H&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ce.dispose(),xe.dispose(),Ie.dispose(),Te.dispose(),T.dispose(),v.dispose(),ie.dispose(),C.dispose(),me.dispose(),X.dispose(),le.dispose(),le.removeEventListener("sessionstart",Sn),le.removeEventListener("sessionend",lr),Cn.stop()};function se(M){M.preventDefault(),za("WebGLRenderer: Context Lost."),I=!0}function k(){za("WebGLRenderer: Context Restored."),I=!1;const M=yt.autoReset,F=ae.enabled,H=ae.autoUpdate,Y=ae.needsUpdate,O=ae.type;de(),yt.autoReset=M,ae.enabled=F,ae.autoUpdate=H,ae.needsUpdate=Y,ae.type=O}function Ae(M){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ve(M){const F=M.target;F.removeEventListener("dispose",Ve),Et(F)}function Et(M){mt(M),Te.remove(M)}function mt(M){const F=Te.get(M).programs;F!==void 0&&(F.forEach(function(H){X.releaseProgram(H)}),M.isShaderMaterial&&X.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,H,Y,O,ue){F===null&&(F=Ft);const ve=O.isMesh&&O.matrixWorld.determinant()<0,we=dr(M,F,H,Y,O);Se.setMaterial(Y,ve);let be=H.index,Be=1;if(Y.wireframe===!0){if(be=Z.getWireframeAttribute(H),be===void 0)return;Be=2}const Ge=H.drawRange,Ue=H.attributes.position;let tt=Ge.start*Be,_t=(Ge.start+Ge.count)*Be;ue!==null&&(tt=Math.max(tt,ue.start*Be),_t=Math.min(_t,(ue.start+ue.count)*Be)),be!==null?(tt=Math.max(tt,0),_t=Math.min(_t,be.count)):Ue!=null&&(tt=Math.max(tt,0),_t=Math.min(_t,Ue.count));const Ct=_t-tt;if(Ct<0||Ct===1/0)return;C.setup(O,Y,we,H,be);let Dt,St=Me;if(be!==null&&(Dt=z.get(be),St=_e,St.setIndex(Dt)),O.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*Rt()),St.setMode(L.LINES)):St.setMode(L.TRIANGLES);else if(O.isLine){let Ne=Y.linewidth;Ne===void 0&&(Ne=1),Se.setLineWidth(Ne*Rt()),O.isLineSegments?St.setMode(L.LINES):O.isLineLoop?St.setMode(L.LINE_LOOP):St.setMode(L.LINE_STRIP)}else O.isPoints?St.setMode(L.POINTS):O.isSprite&&St.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ir("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))St.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,Pt=O._multiDrawCounts,at=O._multiDrawCount,Zt=be?z.get(be).bytesPerElement:1,Yn=Te.get(Y).currentProgram.getUniforms();for(let Jt=0;Jt<at;Jt++)Yn.setValue(L,"_gl_DrawID",Jt),St.render(Ne[Jt]/Zt,Pt[Jt])}else if(O.isInstancedMesh)St.renderInstances(tt,Ct,O.count);else if(H.isInstancedBufferGeometry){const Ne=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Pt=Math.min(H.instanceCount,Ne);St.renderInstances(tt,Ct,Pt)}else St.render(tt,Ct)};function Gt(M,F,H){M.transparent===!0&&M.side===Bn&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,pn(M,F,H),M.side=ni,M.needsUpdate=!0,pn(M,F,H),M.side=Bn):pn(M,F,H)}this.compile=function(M,F,H=null){H===null&&(H=M),A=Ie.get(H),A.init(F),U.push(A),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),M!==H&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();const Y=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const we=ue[ve];Gt(we,H,O),Y.add(we)}else Gt(ue,H,O),Y.add(ue)}),A=U.pop(),Y},this.compileAsync=function(M,F,H=null){const Y=this.compile(M,F,H);return new Promise(O=>{function ue(){if(Y.forEach(function(ve){Te.get(ve).currentProgram.isReady()&&Y.delete(ve)}),Y.size===0){O(M);return}setTimeout(ue,10)}Ke.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let $t=null;function Mn(M){$t&&$t(M)}function Sn(){Cn.stop()}function lr(){Cn.start()}const Cn=new rc;Cn.setAnimationLoop(Mn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(M){$t=M,le.setAnimationLoop(M),M===null?Cn.stop():Cn.start()},le.addEventListener("sessionstart",Sn),le.addEventListener("sessionend",lr),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,F,b),A=Ie.get(M,U.length),A.init(F),U.push(A),Fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ee.setFromProjectionMatrix(Fe,En,F.reversedDepth),Ee=this.localClippingEnabled,re=Ce.init(this.clippingPlanes,Ee),P=xe.get(M,D.length),P.init(),D.push(P),le.enabled===!0&&le.isPresenting===!0){const ue=R.xr.getDepthSensingMesh();ue!==null&&Bt(ue,F,-1/0,R.sortObjects)}Bt(M,F,0,R.sortObjects),P.finish(),R.sortObjects===!0&&P.sort(De,rt),je=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,je&&ce.addToRenderList(P,M),this.info.render.frame++,re===!0&&Ce.beginShadows();const H=A.state.shadowsArray;ae.render(H,M,F),re===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=P.opaque,O=P.transmissive;if(A.setupLights(),F.isArrayCamera){const ue=F.cameras;if(O.length>0)for(let ve=0,we=ue.length;ve<we;ve++){const be=ue[ve];ur(Y,O,M,be)}je&&ce.render(M);for(let ve=0,we=ue.length;ve<we;ve++){const be=ue[ve];Wn(P,M,be,be.viewport)}}else O.length>0&&ur(Y,O,M,F),je&&ce.render(M),Wn(P,M,F);b!==null&&E===0&&(ke.updateMultisampleRenderTarget(b),ke.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(R,M,F),C.resetDefaultState(),N=-1,q=null,U.pop(),U.length>0?(A=U[U.length-1],re===!0&&Ce.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?P=D[D.length-1]:P=null};function Bt(M,F,H,Y){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){Y&&Ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Fe);const ve=ie.update(M),we=M.material;we.visible&&P.push(M,ve,we,H,Ye.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ee.intersectsObject(M))){const ve=ie.update(M),we=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ye.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ye.copy(ve.boundingSphere.center)),Ye.applyMatrix4(M.matrixWorld).applyMatrix4(Fe)),Array.isArray(we)){const be=ve.groups;for(let Be=0,Ge=be.length;Be<Ge;Be++){const Ue=be[Be],tt=we[Ue.materialIndex];tt&&tt.visible&&P.push(M,ve,tt,H,Ye.z,Ue)}}else we.visible&&P.push(M,ve,we,H,Ye.z,null)}}const ue=M.children;for(let ve=0,we=ue.length;ve<we;ve++)Bt(ue[ve],F,H,Y)}function Wn(M,F,H,Y){const{opaque:O,transmissive:ue,transparent:ve}=M;A.setupLightsView(H),re===!0&&Ce.setGlobalState(R.clippingPlanes,H),Y&&Se.viewport(W.copy(Y)),O.length>0&&Xn(O,F,H),ue.length>0&&Xn(ue,F,H),ve.length>0&&Xn(ve,F,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ur(M,F,H,Y){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[Y.id]===void 0&&(A.state.transmissionRenderTarget[Y.id]=new xi(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Vi:An,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ue=A.state.transmissionRenderTarget[Y.id],ve=Y.viewport||W;ue.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);const we=R.getRenderTarget(),be=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(te),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),je&&ce.render(H);const Ge=R.toneMapping;R.toneMapping=ti;const Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),re===!0&&Ce.setGlobalState(R.clippingPlanes,Y),Xn(M,H,Y),ke.updateMultisampleRenderTarget(ue),ke.updateRenderTargetMipmap(ue),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let _t=0,Ct=F.length;_t<Ct;_t++){const Dt=F[_t],{object:St,geometry:Ne,material:Pt,group:at}=Dt;if(Pt.side===Bn&&St.layers.test(Y.layers)){const Zt=Pt.side;Pt.side=sn,Pt.needsUpdate=!0,fr(St,H,Y,Ne,Pt,at),Pt.side=Zt,Pt.needsUpdate=!0,tt=!0}}tt===!0&&(ke.updateMultisampleRenderTarget(ue),ke.updateRenderTargetMipmap(ue))}R.setRenderTarget(we,be,Be),R.setClearColor(te,he),Ue!==void 0&&(Y.viewport=Ue),R.toneMapping=Ge}function Xn(M,F,H){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ue=M.length;O<ue;O++){const ve=M[O],{object:we,geometry:be,group:Be}=ve;let Ge=ve.material;Ge.allowOverride===!0&&Y!==null&&(Ge=Y),we.layers.test(H.layers)&&fr(we,F,H,be,Ge,Be)}}function fr(M,F,H,Y,O,ue){M.onBeforeRender(R,F,H,Y,O,ue),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(R,F,H,Y,M,ue),O.transparent===!0&&O.side===Bn&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,R.renderBufferDirect(H,F,Y,O,M,ue),O.side=ni,O.needsUpdate=!0,R.renderBufferDirect(H,F,Y,O,M,ue),O.side=Bn):R.renderBufferDirect(H,F,Y,O,M,ue),M.onAfterRender(R,F,H,Y,O,ue)}function pn(M,F,H){F.isScene!==!0&&(F=Ft);const Y=Te.get(M),O=A.state.lights,ue=A.state.shadowsArray,ve=O.state.version,we=X.getParameters(M,O.state,ue,F,H),be=X.getProgramCacheKey(we);let Be=Y.programs;Y.environment=M.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(M.isMeshStandardMaterial?v:T).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Ve),Be=new Map,Y.programs=Be);let Ge=Be.get(be);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===ve)return Hi(M,we),Ge}else we.uniforms=X.getUniforms(M),M.onBeforeCompile(we,R),Ge=X.acquireProgram(we,be),Be.set(be,Ge),Y.uniforms=we.uniforms;const Ue=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=Ce.uniform),Hi(M,we),Y.needsLights=Wi(M),Y.lightsStateVersion=ve,Y.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function hr(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=zr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Hi(M,F){const H=Te.get(M);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function dr(M,F,H,Y,O){F.isScene!==!0&&(F=Ft),ke.resetTextureUnits();const ue=F.fog,ve=Y.isMeshStandardMaterial?F.environment:null,we=b===null?R.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Bi,be=(Y.isMeshStandardMaterial?v:T).get(Y.envMap||ve),Be=Y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,_t=!!H.morphAttributes.color;let Ct=ti;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ct=R.toneMapping);const Dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,St=Dt!==void 0?Dt.length:0,Ne=Te.get(Y),Pt=A.state.lights;if(re===!0&&(Ee===!0||M!==q)){const kt=M===q&&Y.id===N;Ce.setState(Y,M,kt)}let at=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Pt.state.version||Ne.outputColorSpace!==we||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==be||Y.fog===!0&&Ne.fog!==ue||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ce.numPlanes||Ne.numIntersection!==Ce.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==Ge||Ne.morphTargets!==Ue||Ne.morphNormals!==tt||Ne.morphColors!==_t||Ne.toneMapping!==Ct||Ne.morphTargetsCount!==St)&&(at=!0):(at=!0,Ne.__version=Y.version);let Zt=Ne.currentProgram;at===!0&&(Zt=pn(Y,F,O));let Yn=!1,Jt=!1,ri=!1;const Lt=Zt.getUniforms(),Xt=Ne.uniforms;if(Se.useProgram(Zt.program)&&(Yn=!0,Jt=!0,ri=!0),Y.id!==N&&(N=Y.id,Jt=!0),Yn||q!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Lt.setValue(L,"projectionMatrix",M.projectionMatrix),Lt.setValue(L,"viewMatrix",M.matrixWorldInverse);const Yt=Lt.map.cameraPosition;Yt!==void 0&&Yt.setValue(L,Re.setFromMatrixPosition(M.matrixWorld)),st.logarithmicDepthBuffer&&Lt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,Jt=!0,ri=!0)}if(O.isSkinnedMesh){Lt.setOptional(L,O,"bindMatrix"),Lt.setOptional(L,O,"bindMatrixInverse");const kt=O.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Lt.setValue(L,"boneTexture",kt.boneTexture,ke))}O.isBatchedMesh&&(Lt.setOptional(L,O,"batchingTexture"),Lt.setValue(L,"batchingTexture",O._matricesTexture,ke),Lt.setOptional(L,O,"batchingIdTexture"),Lt.setValue(L,"batchingIdTexture",O._indirectTexture,ke),Lt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Lt.setValue(L,"batchingColorTexture",O._colorsTexture,ke));const Qt=H.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Oe.update(O,H,Zt),(Jt||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,Lt.setValue(L,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Xt.envMap.value=be,Xt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Xt.envMapIntensity.value=F.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Mp()),Jt&&(Lt.setValue(L,"toneMappingExposure",R.toneMappingExposure),Ne.needsLights&&qr(Xt,ri),ue&&Y.fog===!0&&Le.refreshFogUniforms(Xt,ue),Le.refreshMaterialUniforms(Xt,Y,pe,fe,A.state.transmissionRenderTarget[M.id]),zr.upload(L,hr(Ne),Xt,ke)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(zr.upload(L,hr(Ne),Xt,ke),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(L,"center",O.center),Lt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Lt.setValue(L,"normalMatrix",O.normalMatrix),Lt.setValue(L,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const kt=Y.uniformsGroups;for(let Yt=0,gi=kt.length;Yt<gi;Yt++){const bn=kt[Yt];me.update(bn,Zt),me.bind(bn,Zt)}}return Zt}function qr(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Wi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,F,H){const Y=Te.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Te.get(M.texture).__webglTexture=F,Te.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:H,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const H=Te.get(M);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const Pn=L.createFramebuffer();this.setRenderTarget=function(M,F=0,H=0){b=M,j=F,E=H;let Y=!0,O=null,ue=!1,ve=!1;if(M){const be=Te.get(M);if(be.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(be.__webglFramebuffer===void 0)ke.setupRenderTarget(M);else if(be.__hasExternalTextures)ke.rebindTextures(M,Te.get(M.texture).__webglTexture,Te.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(be.__boundDepthTexture!==Ue){if(Ue!==null&&Te.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ve=!0);const Ge=Te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?O=Ge[F][H]:O=Ge[F],ue=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?O=Te.get(M).__webglMultisampledFramebuffer:Array.isArray(Ge)?O=Ge[H]:O=Ge,W.copy(M.viewport),Q.copy(M.scissor),ne=M.scissorTest}else W.copy(gt).multiplyScalar(pe).floor(),Q.copy(bt).multiplyScalar(pe).floor(),ne=Mt;if(H!==0&&(O=Pn),Se.bindFramebuffer(L.FRAMEBUFFER,O)&&Y&&Se.drawBuffers(M,O),Se.viewport(W),Se.scissor(Q),Se.setScissorTest(ne),ue){const be=Te.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,H)}else if(ve){const be=F;for(let Be=0;Be<M.textures.length;Be++){const Ge=Te.get(M.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,H,be)}}else if(M!==null&&H!==0){const be=Te.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,H)}N=-1},this.readRenderTargetPixels=function(M,F,H,Y,O,ue,ve,we=0){if(!(M&&M.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){Se.bindFramebuffer(L.FRAMEBUFFER,be);try{const Be=M.textures[we],Ge=Be.format,Ue=Be.type;if(!st.textureFormatReadable(Ge)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ue)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-Y&&H>=0&&H<=M.height-O&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(F,H,Y,O,ze.convert(Ge),ze.convert(Ue),ue))}finally{const Be=b!==null?Te.get(b).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,F,H,Y,O,ue,ve,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(F>=0&&F<=M.width-Y&&H>=0&&H<=M.height-O){Se.bindFramebuffer(L.FRAMEBUFFER,be);const Be=M.textures[we],Ge=Be.format,Ue=Be.type;if(!st.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(F,H,Y,O,ze.convert(Ge),ze.convert(Ue),0);const _t=b!==null?Te.get(b).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,_t);const Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Jc(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(tt),L.deleteSync(Ct),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,H=0){const Y=Math.pow(2,-H),O=Math.floor(M.image.width*Y),ue=Math.floor(M.image.height*Y),ve=F!==null?F.x:0,we=F!==null?F.y:0;ke.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ve,we,O,ue),Se.unbindTexture()};const jr=L.createFramebuffer(),Kr=L.createFramebuffer();this.copyTextureToTexture=function(M,F,H=null,Y=null,O=0,ue=null){ue===null&&(O!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=O,O=0):ue=0);let ve,we,be,Be,Ge,Ue,tt,_t,Ct;const Dt=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(H!==null)ve=H.max.x-H.min.x,we=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,Be=H.min.x,Ge=H.min.y,Ue=H.isBox3?H.min.z:0;else{const Qt=Math.pow(2,-O);ve=Math.floor(Dt.width*Qt),we=Math.floor(Dt.height*Qt),M.isDataArrayTexture?be=Dt.depth:M.isData3DTexture?be=Math.floor(Dt.depth*Qt):be=1,Be=0,Ge=0,Ue=0}Y!==null?(tt=Y.x,_t=Y.y,Ct=Y.z):(tt=0,_t=0,Ct=0);const St=ze.convert(F.format),Ne=ze.convert(F.type);let Pt;F.isData3DTexture?(ke.setTexture3D(F,0),Pt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ke.setTexture2DArray(F,0),Pt=L.TEXTURE_2D_ARRAY):(ke.setTexture2D(F,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const at=L.getParameter(L.UNPACK_ROW_LENGTH),Zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yn=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),ri=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);const Lt=M.isDataArrayTexture||M.isData3DTexture,Xt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Qt=Te.get(M),kt=Te.get(F),Yt=Te.get(Qt.__renderTarget),gi=Te.get(kt.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let bn=0;bn<be;bn++)Lt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(M).__webglTexture,O,Ue+bn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(F).__webglTexture,ue,Ct+bn)),L.blitFramebuffer(Be,Ge,ve,we,tt,_t,ve,we,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||Te.has(M)){const Qt=Te.get(M),kt=Te.get(F);Se.bindFramebuffer(L.READ_FRAMEBUFFER,jr),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kr);for(let Yt=0;Yt<be;Yt++)Lt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qt.__webglTexture,O,Ue+Yt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qt.__webglTexture,O),Xt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,ue,Ct+Yt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,ue),O!==0?L.blitFramebuffer(Be,Ge,ve,we,tt,_t,ve,we,L.COLOR_BUFFER_BIT,L.NEAREST):Xt?L.copyTexSubImage3D(Pt,ue,tt,_t,Ct+Yt,Be,Ge,ve,we):L.copyTexSubImage2D(Pt,ue,tt,_t,Be,Ge,ve,we);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Xt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Pt,ue,tt,_t,Ct,ve,we,be,St,Ne,Dt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,ue,tt,_t,Ct,ve,we,be,St,Dt.data):L.texSubImage3D(Pt,ue,tt,_t,Ct,ve,we,be,St,Ne,Dt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,tt,_t,ve,we,St,Ne,Dt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,tt,_t,Dt.width,Dt.height,St,Dt.data):L.texSubImage2D(L.TEXTURE_2D,ue,tt,_t,ve,we,St,Ne,Dt);L.pixelStorei(L.UNPACK_ROW_LENGTH,at),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ri),ue===0&&F.generateMipmaps&&L.generateMipmap(Pt),Se.unbindTexture()},this.initRenderTarget=function(M){Te.get(M).__webglFramebuffer===void 0&&ke.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){j=0,E=0,b=null,Se.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}var Cp={};(function(){var i;function e(a){var f=0;return function(){return f<a.length?{done:!1,value:a[f++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,h){return a==Array.prototype||a==Object.prototype||(a[f]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $r=="object"&&$r];for(var f=0;f<a.length;++f){var h=a[f];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var h=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var B=a[w];if(!(B in h))break e;h=h[B]}a=a[a.length-1],w=h[a],f=f(w),f!=w&&f!=null&&t(h,a,{configurable:!0,writable:!0,value:f})}}s("Symbol",function(a){function f($){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new h(w+($||"")+"_"+B++,$)}function h($,V){this.g=$,t(this,"description",{configurable:!0,writable:!0,value:V})}if(a)return a;h.prototype.toString=function(){return this.g};var w="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",B=0;return f}),s("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var f="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),h=0;h<f.length;h++){var w=r[f[h]];typeof w=="function"&&typeof w.prototype[a]!="function"&&t(w.prototype,a,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return a});function o(a){return a={next:a},a[Symbol.iterator]=function(){return this},a}function c(a){var f=typeof Symbol<"u"&&Symbol.iterator&&a[Symbol.iterator];return f?f.call(a):{next:e(a)}}function u(a){if(!(a instanceof Array)){a=c(a);for(var f,h=[];!(f=a.next()).done;)h.push(f.value);a=h}return a}var l=typeof Object.create=="function"?Object.create:function(a){function f(){}return f.prototype=a,new f},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var m;e:{var x={a:!0},_={};try{_.__proto__=x,m=_.a;break e}catch{}m=!1}p=m?function(a,f){if(a.__proto__=f,a.__proto__!==f)throw new TypeError(a+" is not extensible");return a}:null}var S=p;function y(a,f){if(a.prototype=l(f.prototype),a.prototype.constructor=a,S)S(a,f);else for(var h in f)if(h!="prototype")if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(f,h);w&&Object.defineProperty(a,h,w)}else a[h]=f[h];a.ea=f.prototype}function g(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function d(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}g.prototype.o=function(a){this.h=a};function P(a,f){a.j={U:f,V:!0},a.g=a.m||a.s}g.prototype.return=function(a){this.j={return:a},this.g=this.s};function A(a,f,h){return a.g=h,{value:f}}function D(a){this.g=new g,this.h=a}function U(a,f){d(a.g);var h=a.g.i;return h?R(a,"return"in h?h.return:function(w){return{value:w,done:!0}},f,a.g.return):(a.g.return(f),I(a))}function R(a,f,h,w){try{var B=f.call(a.g.i,h);if(!(B instanceof Object))throw new TypeError("Iterator result "+B+" is not an object");if(!B.done)return a.g.l=!1,B;var $=B.value}catch(V){return a.g.i=null,P(a.g,V),I(a)}return a.g.i=null,w.call(a.g,$),I(a)}function I(a){for(;a.g.g;)try{var f=a.h(a.g);if(f)return a.g.l=!1,{value:f.value,done:!1}}catch(h){a.g.h=void 0,P(a.g,h)}if(a.g.l=!1,a.g.j){if(f=a.g.j,a.g.j=null,f.V)throw f.U;return{value:f.return,done:!0}}return{value:void 0,done:!0}}function j(a){this.next=function(f){return d(a.g),a.g.i?f=R(a,a.g.i.next,f,a.g.o):(a.g.o(f),f=I(a)),f},this.throw=function(f){return d(a.g),a.g.i?f=R(a,a.g.i.throw,f,a.g.o):(P(a.g,f),f=I(a)),f},this.return=function(f){return U(a,f)},this[Symbol.iterator]=function(){return this}}function E(a,f){return f=new j(new D(f)),S&&a.prototype&&S(f,a.prototype),f}function b(a,f){a instanceof String&&(a+="");var h=0,w=!1,B={next:function(){if(!w&&h<a.length){var $=h++;return{value:f($,a[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}var N=typeof Object.assign=="function"?Object.assign:function(a,f){for(var h=1;h<arguments.length;h++){var w=arguments[h];if(w)for(var B in w)Object.prototype.hasOwnProperty.call(w,B)&&(a[B]=w[B])}return a};s("Object.assign",function(a){return a||N}),s("Promise",function(a){function f(V){this.h=0,this.i=void 0,this.g=[],this.o=!1;var J=this.j();try{V(J.resolve,J.reject)}catch(oe){J.reject(oe)}}function h(){this.g=null}function w(V){return V instanceof f?V:new f(function(J){J(V)})}if(a)return a;h.prototype.h=function(V){if(this.g==null){this.g=[];var J=this;this.i(function(){J.l()})}this.g.push(V)};var B=r.setTimeout;h.prototype.i=function(V){B(V,0)},h.prototype.l=function(){for(;this.g&&this.g.length;){var V=this.g;this.g=[];for(var J=0;J<V.length;++J){var oe=V[J];V[J]=null;try{oe()}catch(ye){this.j(ye)}}}this.g=null},h.prototype.j=function(V){this.i(function(){throw V})},f.prototype.j=function(){function V(ye){return function(We){oe||(oe=!0,ye.call(J,We))}}var J=this,oe=!1;return{resolve:V(this.C),reject:V(this.l)}},f.prototype.C=function(V){if(V===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(V instanceof f)this.F(V);else{e:switch(typeof V){case"object":var J=V!=null;break e;case"function":J=!0;break e;default:J=!1}J?this.u(V):this.m(V)}},f.prototype.u=function(V){var J=void 0;try{J=V.then}catch(oe){this.l(oe);return}typeof J=="function"?this.G(J,V):this.m(V)},f.prototype.l=function(V){this.s(2,V)},f.prototype.m=function(V){this.s(1,V)},f.prototype.s=function(V,J){if(this.h!=0)throw Error("Cannot settle("+V+", "+J+"): Promise already settled in state"+this.h);this.h=V,this.i=J,this.h===2&&this.D(),this.A()},f.prototype.D=function(){var V=this;B(function(){if(V.B()){var J=r.console;typeof J<"u"&&J.error(V.i)}},1)},f.prototype.B=function(){if(this.o)return!1;var V=r.CustomEvent,J=r.Event,oe=r.dispatchEvent;return typeof oe>"u"?!0:(typeof V=="function"?V=new V("unhandledrejection",{cancelable:!0}):typeof J=="function"?V=new J("unhandledrejection",{cancelable:!0}):(V=r.document.createEvent("CustomEvent"),V.initCustomEvent("unhandledrejection",!1,!0,V)),V.promise=this,V.reason=this.i,oe(V))},f.prototype.A=function(){if(this.g!=null){for(var V=0;V<this.g.length;++V)$.h(this.g[V]);this.g=null}};var $=new h;return f.prototype.F=function(V){var J=this.j();V.J(J.resolve,J.reject)},f.prototype.G=function(V,J){var oe=this.j();try{V.call(J,oe.resolve,oe.reject)}catch(ye){oe.reject(ye)}},f.prototype.then=function(V,J){function oe(nt,qe){return typeof nt=="function"?function(Pe){try{ye(nt(Pe))}catch(Xe){We(Xe)}}:qe}var ye,We,vt=new f(function(nt,qe){ye=nt,We=qe});return this.J(oe(V,ye),oe(J,We)),vt},f.prototype.catch=function(V){return this.then(void 0,V)},f.prototype.J=function(V,J){function oe(){switch(ye.h){case 1:V(ye.i);break;case 2:J(ye.i);break;default:throw Error("Unexpected state: "+ye.h)}}var ye=this;this.g==null?$.h(oe):this.g.push(oe),this.o=!0},f.resolve=w,f.reject=function(V){return new f(function(J,oe){oe(V)})},f.race=function(V){return new f(function(J,oe){for(var ye=c(V),We=ye.next();!We.done;We=ye.next())w(We.value).J(J,oe)})},f.all=function(V){var J=c(V),oe=J.next();return oe.done?w([]):new f(function(ye,We){function vt(Pe){return function(Xe){nt[Pe]=Xe,qe--,qe==0&&ye(nt)}}var nt=[],qe=0;do nt.push(void 0),qe++,w(oe.value).J(vt(nt.length-1),We),oe=J.next();while(!oe.done)})},f}),s("Object.is",function(a){return a||function(f,h){return f===h?f!==0||1/f===1/h:f!==f&&h!==h}}),s("Array.prototype.includes",function(a){return a||function(f,h){var w=this;w instanceof String&&(w=String(w));var B=w.length;for(h=h||0,0>h&&(h=Math.max(h+B,0));h<B;h++){var $=w[h];if($===f||Object.is($,f))return!0}return!1}}),s("String.prototype.includes",function(a){return a||function(f,h){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(f instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(f,h||0)!==-1}}),s("Array.prototype.keys",function(a){return a||function(){return b(this,function(f){return f})}});var q=this||self;function W(a,f){a=a.split(".");var h=q;a[0]in h||typeof h.execScript>"u"||h.execScript("var "+a[0]);for(var w;a.length&&(w=a.shift());)a.length||f===void 0?h[w]&&h[w]!==Object.prototype[w]?h=h[w]:h=h[w]={}:h[w]=f}function Q(a,f){return f=String.fromCharCode.apply(null,f),a==null?f:a+f}var ne,te=typeof TextDecoder<"u",he,K=typeof TextEncoder<"u";function fe(a){if(K)a=(he||(he=new TextEncoder)).encode(a);else{var f=void 0;f=f===void 0?!1:f;for(var h=0,w=new Uint8Array(3*a.length),B=0;B<a.length;B++){var $=a.charCodeAt(B);if(128>$)w[h++]=$;else{if(2048>$)w[h++]=$>>6|192;else{if(55296<=$&&57343>=$){if(56319>=$&&B<a.length){var V=a.charCodeAt(++B);if(56320<=V&&57343>=V){$=1024*($-55296)+V-56320+65536,w[h++]=$>>18|240,w[h++]=$>>12&63|128,w[h++]=$>>6&63|128,w[h++]=$&63|128;continue}else B--}if(f)throw Error("Found an unpaired surrogate");$=65533}w[h++]=$>>12|224,w[h++]=$>>6&63|128}w[h++]=$&63|128}}a=w.subarray(0,h)}return a}var pe={},De=null;function rt(a,f){f===void 0&&(f=0),Mt(),f=pe[f];for(var h=Array(Math.floor(a.length/3)),w=f[64]||"",B=0,$=0;B<a.length-2;B+=3){var V=a[B],J=a[B+1],oe=a[B+2],ye=f[V>>2];V=f[(V&3)<<4|J>>4],J=f[(J&15)<<2|oe>>6],oe=f[oe&63],h[$++]=ye+V+J+oe}switch(ye=0,oe=w,a.length-B){case 2:ye=a[B+1],oe=f[(ye&15)<<2]||w;case 1:a=a[B],h[$]=f[a>>2]+f[(a&3)<<4|ye>>4]+oe+w}return h.join("")}function gt(a){var f=a.length,h=3*f/4;h%3?h=Math.floor(h):"=.".indexOf(a[f-1])!=-1&&(h="=.".indexOf(a[f-2])!=-1?h-2:h-1);var w=new Uint8Array(h),B=0;return bt(a,function($){w[B++]=$}),w.subarray(0,B)}function bt(a,f){function h(oe){for(;w<a.length;){var ye=a.charAt(w++),We=De[ye];if(We!=null)return We;if(!/^[\s\xa0]*$/.test(ye))throw Error("Unknown base64 encoding at char: "+ye)}return oe}Mt();for(var w=0;;){var B=h(-1),$=h(0),V=h(64),J=h(64);if(J===64&&B===-1)break;f(B<<2|$>>4),V!=64&&(f($<<4&240|V>>2),J!=64&&f(V<<6&192|J))}}function Mt(){if(!De){De={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),f=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var w=a.concat(f[h].split(""));pe[h]=w;for(var B=0;B<w.length;B++){var $=w[B];De[$]===void 0&&(De[$]=B)}}}}var ee=typeof Uint8Array.prototype.slice=="function",re;function Ee(a,f,h){return f===h?re||(re=new Uint8Array(0)):ee?a.slice(f,h):new Uint8Array(a.subarray(f,h))}var Fe=0,Re=0;function Ye(a,f){f=f===void 0?{}:f,f=f.v===void 0?!1:f.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=f,a&&Ft(this,a)}function Ft(a,f){f=f.constructor===Uint8Array?f:f.constructor===ArrayBuffer?new Uint8Array(f):f.constructor===Array?new Uint8Array(f):f.constructor===String?gt(f):f instanceof Uint8Array?new Uint8Array(f.buffer,f.byteOffset,f.byteLength):new Uint8Array(0),a.h=f,a.l=0,a.j=a.h.length,a.g=a.l}Ye.prototype.reset=function(){this.g=this.l};function je(a){for(var f=128,h=0,w=0,B=0;4>B&&128<=f;B++)f=a.h[a.g++],h|=(f&127)<<7*B;if(128<=f&&(f=a.h[a.g++],h|=(f&127)<<28,w|=(f&127)>>4),128<=f)for(B=0;5>B&&128<=f;B++)f=a.h[a.g++],w|=(f&127)<<7*B+3;if(128>f)return a=h>>>0,f=w>>>0,(w=f&2147483648)&&(a=~a+1>>>0,f=~f>>>0,a==0&&(f=f+1>>>0)),a=4294967296*f+(a>>>0),w?-a:a;a.m=!0}Ye.prototype.i=function(){var a=this.h,f=a[this.g],h=f&127;return 128>f?(this.g+=1,h):(f=a[this.g+1],h|=(f&127)<<7,128>f?(this.g+=2,h):(f=a[this.g+2],h|=(f&127)<<14,128>f?(this.g+=3,h):(f=a[this.g+3],h|=(f&127)<<21,128>f?(this.g+=4,h):(f=a[this.g+4],h|=(f&15)<<28,128>f?(this.g+=5,h>>>0):(this.g+=5,128<=a[this.g++]&&128<=a[this.g++]&&128<=a[this.g++]&&128<=a[this.g++]&&this.g++,h)))))},Ye.prototype.o=function(){var a=this.h[this.g],f=this.h[this.g+1],h=this.h[this.g+2],w=this.h[this.g+3];return this.g+=4,h=(a<<0|f<<8|h<<16|w<<24)>>>0,a=2*(h>>31)+1,f=h>>>23&255,h&=8388607,f==255?h?NaN:1/0*a:f==0?a*Math.pow(2,-149)*h:a*Math.pow(2,f-150)*(h+Math.pow(2,23))};var Rt=[];function L(){this.g=new Uint8Array(64),this.h=0}L.prototype.push=function(a){if(!(this.h+1<this.g.length)){var f=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(f)}this.g[this.h++]=a},L.prototype.length=function(){return this.h},L.prototype.end=function(){var a=this.g,f=this.h;return this.h=0,Ee(a,0,f)};function He(a,f){for(;127<f;)a.push(f&127|128),f>>>=7;a.push(f)}function Ke(a){var f={},h=f.N===void 0?!1:f.N;this.o={v:f.v===void 0?!1:f.v},this.N=h,f=this.o,Rt.length?(h=Rt.pop(),f&&(h.v=f.v),a&&Ft(h,a),a=h):a=new Ye(a,f),this.g=a,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}Ke.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function st(a){var f=a.g;if((f=f.g==f.j)||(f=a.j)||(f=a.g,f=f.m||0>f.g||f.g>f.j),f)return!1;a.m=a.g.g,f=a.g.i();var h=f&7;return h!=0&&h!=5&&h!=1&&h!=2&&h!=3&&h!=4?(a.j=!0,!1):(a.i=f,a.l=f>>>3,a.h=h,!0)}function Se(a){switch(a.h){case 0:if(a.h!=0)Se(a);else{for(a=a.g;a.h[a.g]&128;)a.g++;a.g++}break;case 1:a.h!=1?Se(a):(a=a.g,a.g+=8);break;case 2:if(a.h!=2)Se(a);else{var f=a.g.i();a=a.g,a.g+=f}break;case 5:a.h!=5?Se(a):(a=a.g,a.g+=4);break;case 3:f=a.l;do{if(!st(a)){a.j=!0;break}if(a.h==4){a.l!=f&&(a.j=!0);break}Se(a)}while(!0);break;default:a.j=!0}}function yt(a,f,h){var w=a.g.j,B=a.g.i(),$=a.g.g+B;if(a.g.j=$,h(f,a),h=$-a.g.g,h!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+B+" bytes, instead read "+(B-h)+" bytes, either the data ended unexpectedly or the message misreported its own length");return a.g.g=$,a.g.j=w,f}function Te(a){return a.g.o()}function ke(a){var f=a.g.i();a=a.g;var h=a.g;a.g+=f,a=a.h;var w;if(te)(w=ne)||(w=ne=new TextDecoder("utf-8",{fatal:!1})),w=w.decode(a.subarray(h,h+f));else{f=h+f;for(var B=[],$=null,V,J,oe;h<f;)V=a[h++],128>V?B.push(V):224>V?h>=f?B.push(65533):(J=a[h++],194>V||(J&192)!==128?(h--,B.push(65533)):B.push((V&31)<<6|J&63)):240>V?h>=f-1?B.push(65533):(J=a[h++],(J&192)!==128||V===224&&160>J||V===237&&160<=J||((w=a[h++])&192)!==128?(h--,B.push(65533)):B.push((V&15)<<12|(J&63)<<6|w&63)):244>=V?h>=f-2?B.push(65533):(J=a[h++],(J&192)!==128||(V<<28)+(J-144)>>30||((w=a[h++])&192)!==128||((oe=a[h++])&192)!==128?(h--,B.push(65533)):(V=(V&7)<<18|(J&63)<<12|(w&63)<<6|oe&63,V-=65536,B.push((V>>10&1023)+55296,(V&1023)+56320))):B.push(65533),8192<=B.length&&($=Q($,B),B.length=0);w=Q($,B)}return w}function T(a,f,h){var w=a.g.i();for(w=a.g.g+w;a.g.g<w;)h.push(f.call(a.g))}function v(a,f){a.h==2?T(a,Ye.prototype.o,f):f.push(Te(a))}function z(){this.h=[],this.i=0,this.g=new L}function Z(a,f){f.length!==0&&(a.h.push(f),a.i+=f.length)}function ie(a){var f=a.i+a.g.length();if(f===0)return new Uint8Array(0);f=new Uint8Array(f);for(var h=a.h,w=h.length,B=0,$=0;$<w;$++){var V=h[$];V.length!==0&&(f.set(V,B),B+=V.length)}return h=a.g,w=h.h,w!==0&&(f.set(h.g.subarray(0,w),B),h.h=0),a.h=[f],f}function X(a,f,h){if(h!=null){He(a.g,8*f+5),a=a.g;var w=h;w=(h=0>w?1:0)?-w:w,w===0?0<1/w?Fe=Re=0:(Re=0,Fe=2147483648):isNaN(w)?(Re=0,Fe=2147483647):34028234663852886e22<w?(Re=0,Fe=(h<<31|2139095040)>>>0):11754943508222875e-54>w?(w=Math.round(w/Math.pow(2,-149)),Re=0,Fe=(h<<31|w)>>>0):(f=Math.floor(Math.log(w)/Math.LN2),w*=Math.pow(2,-f),w=Math.round(8388608*w),16777216<=w&&++f,Re=0,Fe=(h<<31|f+127<<23|w&8388607)>>>0),h=Fe,a.push(h>>>0&255),a.push(h>>>8&255),a.push(h>>>16&255),a.push(h>>>24&255)}}var Le=typeof Uint8Array=="function";function xe(a,f,h){if(a!=null)return typeof a=="object"?Le&&a instanceof Uint8Array?h(a):Ie(a,f,h):f(a)}function Ie(a,f,h){if(Array.isArray(a)){for(var w=Array(a.length),B=0;B<a.length;B++)w[B]=xe(a[B],f,h);return Array.isArray(a)&&a.W&&ce(w),w}w={};for(B in a)w[B]=xe(a[B],f,h);return w}function Ce(a){return typeof a=="number"?isFinite(a)?a:String(a):a}var ae={W:{value:!0,configurable:!0}};function ce(a){return Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,ae),a}var Oe;function Me(a,f,h){var w=Oe;Oe=null,a||(a=w),w=this.constructor.ca,a||(a=w?[w]:[]),this.j=w?0:-1,this.m=this.g=null,this.h=a;e:{if(w=this.h.length,a=w-1,w&&(w=this.h[a],!(w===null||typeof w!="object"||Array.isArray(w)||Le&&w instanceof Uint8Array))){this.l=a-this.j,this.i=w;break e}f!==void 0&&-1<f?(this.l=Math.max(f,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(h)for(f=0;f<h.length;f++)a=h[f],a<this.l?(a+=this.j,(w=this.h[a])?ce(w):this.h[a]=_e):(ze(this),(w=this.i[a])?ce(w):this.i[a]=_e)}var _e=Object.freeze(ce([]));function ze(a){var f=a.l+a.j;a.h[f]||(a.i=a.h[f]={})}function C(a,f,h){return f===-1?null:h!==void 0&&h||f>=a.l?a.i?a.i[f]:void 0:a.h[f+a.j]}function me(a,f){var h=h===void 0?!1:h,w=C(a,f,h);return w==null&&(w=_e),w===_e&&(w=ce([]),k(a,f,w,h)),w}function de(a){var f=me(a,3);if(a.m||(a.m={}),!a.m[3]){for(var h=0;h<f.length;h++)f[h]=+f[h];a.m[3]=!0}return f}function le(a,f,h){return a=C(a,f),a??h}function se(a,f,h){return a=C(a,f),a=a==null?a:+a,a??(h===void 0?0:h)}function k(a,f,h,w){w!==void 0&&w||f>=a.l?(ze(a),a.i[f]=h):a.h[f+a.j]=h}function Ae(a,f,h){if(h===-1)return null;if(a.g||(a.g={}),!a.g[h]){var w=C(a,h,!1);w&&(a.g[h]=new f(w))}return a.g[h]}function Ve(a,f){a.g||(a.g={});var h=a.g[1];if(!h){var w=me(a,1);h=[];for(var B=0;B<w.length;B++)h[B]=new f(w[B]);a.g[1]=h}return h}function Et(a,f,h){var w=w===void 0?!1:w;a.g||(a.g={});var B=h&&Gt(h);a.g[f]=h,k(a,f,B,w)}function mt(a,f,h,w){var B=Ve(a,h);f=f||new h,a=me(a,1),w!=null?(B.splice(w,0,f),a.splice(w,0,Gt(f))):(B.push(f),a.push(Gt(f)))}Me.prototype.toJSON=function(){var a=Gt(this);return Ie(a,Ce,rt)};function Gt(a,f){if(a.g)for(var h in a.g){var w=a.g[h];if(Array.isArray(w))for(var B=0;B<w.length;B++)w[B]&&Gt(w[B]);else w&&Gt(w)}return a.h}Me.prototype.toString=function(){return Gt(this).toString()};function $t(a,f){if(a=a.o){Z(f,f.g.end());for(var h=0;h<a.length;h++)Z(f,a[h])}}function Mn(a,f){if(f.h==4)return!1;var h=f.m;return Se(f),f.N||(f=Ee(f.g.h,h,f.g.g),(h=a.o)?h.push(f):a.o=[f]),!0}function Sn(a){Me.call(this,a,-1,Cn)}y(Sn,Me),Sn.prototype.getRows=function(){return C(this,1)},Sn.prototype.getCols=function(){return C(this,2)},Sn.prototype.getPackedDataList=function(){return de(this)},Sn.prototype.getLayout=function(){return le(this,4,0)};function lr(a,f){for(;st(f);)switch(f.i){case 8:var h=f.g.i();k(a,1,h);break;case 16:h=f.g.i(),k(a,2,h);break;case 29:case 26:v(f,a.getPackedDataList());break;case 32:h=je(f.g),k(a,4,h);break;default:if(!Mn(a,f))return a}return a}var Cn=[3];function Bt(a,f){var h=void 0;return new(h||(h=Promise))(function(w,B){function $(oe){try{J(f.next(oe))}catch(ye){B(ye)}}function V(oe){try{J(f.throw(oe))}catch(ye){B(ye)}}function J(oe){oe.done?w(oe.value):new h(function(ye){ye(oe.value)}).then($,V)}J((f=f.apply(a,void 0)).next())})}function Wn(a){Me.call(this,a)}y(Wn,Me);function ur(a,f){for(;st(f);)switch(f.i){case 8:var h=f.g.i();k(a,1,h);break;case 21:h=Te(f),k(a,2,h);break;case 26:h=ke(f),k(a,3,h);break;case 34:h=ke(f),k(a,4,h);break;default:if(!Mn(a,f))return a}return a}function Xn(a){Me.call(this,a,-1,fr)}y(Xn,Me),Xn.prototype.addClassification=function(a,f){return mt(this,a,Wn,f),this};var fr=[1];function pn(a){Me.call(this,a)}y(pn,Me);function hr(a,f){for(;st(f);)switch(f.i){case 13:var h=Te(f);k(a,1,h);break;case 21:h=Te(f),k(a,2,h);break;case 29:h=Te(f),k(a,3,h);break;case 37:h=Te(f),k(a,4,h);break;case 45:h=Te(f),k(a,5,h);break;default:if(!Mn(a,f))return a}return a}function Hi(a){Me.call(this,a,-1,qr)}y(Hi,Me);function dr(a){e:{var f=new Hi;for(a=new Ke(a);st(a);)switch(a.i){case 10:var h=yt(a,new pn,hr);mt(f,h,pn,void 0);break;default:if(!Mn(f,a))break e}}return f}var qr=[1];function Wi(a){Me.call(this,a)}y(Wi,Me);function Pn(a){Me.call(this,a,-1,Kr)}y(Pn,Me),Pn.prototype.getVertexType=function(){return le(this,1,0)},Pn.prototype.getPrimitiveType=function(){return le(this,2,0)},Pn.prototype.getVertexBufferList=function(){return de(this)},Pn.prototype.getIndexBufferList=function(){return me(this,4)};function jr(a,f){for(;st(f);)switch(f.i){case 8:var h=je(f.g);k(a,1,h);break;case 16:h=je(f.g),k(a,2,h);break;case 29:case 26:v(f,a.getVertexBufferList());break;case 32:case 34:h=f;var w=a.getIndexBufferList();h.h==2?T(h,Ye.prototype.i,w):w.push(h.g.i());break;default:if(!Mn(a,f))return a}return a}var Kr=[3,4];function M(a){Me.call(this,a)}y(M,Me),M.prototype.getMesh=function(){return Ae(this,Pn,1)},M.prototype.getPoseTransformMatrix=function(){return Ae(this,Sn,2)};function F(a){e:{var f=new M;for(a=new Ke(a);st(a);)switch(a.i){case 10:var h=yt(a,new Pn,jr);Et(f,1,h);break;case 18:h=yt(a,new Sn,lr),Et(f,2,h);break;default:if(!Mn(f,a))break e}}return f}function H(a,f,h){if(h=a.createShader(h===0?a.VERTEX_SHADER:a.FRAGMENT_SHADER),a.shaderSource(h,f),a.compileShader(h),!a.getShaderParameter(h,a.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+a.getShaderInfoLog(h));return h}function Y(a){return Ve(a,Wn).map(function(f){return{index:le(f,1,0),Y:se(f,2),label:C(f,3)!=null?le(f,3,""):void 0,displayName:C(f,4)!=null?le(f,4,""):void 0}})}function O(a){return{x:se(a,1),y:se(a,2),z:se(a,3),visibility:C(a,4)!=null?se(a,4):void 0}}function ue(a,f){this.h=a,this.g=f,this.l=0}function ve(a,f,h){return we(a,f),typeof a.g.canvas.transferToImageBitmap=="function"?Promise.resolve(a.g.canvas.transferToImageBitmap()):h?Promise.resolve(a.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(a.g.canvas):(a.i===void 0&&(a.i=document.createElement("canvas")),new Promise(function(w){a.i.height=a.g.canvas.height,a.i.width=a.g.canvas.width,a.i.getContext("2d",{}).drawImage(a.g.canvas,0,0,a.g.canvas.width,a.g.canvas.height),w(a.i)}))}function we(a,f){var h=a.g;if(a.m===void 0){var w=H(h,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),B=H(h,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),$=h.createProgram();if(h.attachShader($,w),h.attachShader($,B),h.linkProgram($),!h.getProgramParameter($,h.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+h.getProgramInfoLog($));w=a.m=$,h.useProgram(w),B=h.getUniformLocation(w,"sampler0"),a.j={I:h.getAttribLocation(w,"aVertex"),H:h.getAttribLocation(w,"aTex"),da:B},a.s=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,a.s),h.enableVertexAttribArray(a.j.I),h.vertexAttribPointer(a.j.I,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),a.o=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,a.o),h.enableVertexAttribArray(a.j.H),h.vertexAttribPointer(a.j.H,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),h.uniform1i(B,0)}w=a.j,h.useProgram(a.m),h.canvas.width=f.width,h.canvas.height=f.height,h.viewport(0,0,f.width,f.height),h.activeTexture(h.TEXTURE0),a.h.bindTexture2d(f.glName),h.enableVertexAttribArray(w.I),h.bindBuffer(h.ARRAY_BUFFER,a.s),h.vertexAttribPointer(w.I,2,h.FLOAT,!1,0,0),h.enableVertexAttribArray(w.H),h.bindBuffer(h.ARRAY_BUFFER,a.o),h.vertexAttribPointer(w.H,2,h.FLOAT,!1,0,0),h.bindFramebuffer(h.DRAW_FRAMEBUFFER?h.DRAW_FRAMEBUFFER:h.FRAMEBUFFER,null),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.colorMask(!0,!0,!0,!0),h.drawArrays(h.TRIANGLE_FAN,0,4),h.disableVertexAttribArray(w.I),h.disableVertexAttribArray(w.H),h.bindBuffer(h.ARRAY_BUFFER,null),a.h.bindTexture2d(0)}function be(a){this.g=a}var Be=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Ge(a,f){return f+a}function Ue(a,f){window[a]=f}function tt(a){var f=document.createElement("script");return f.setAttribute("src",a),f.setAttribute("crossorigin","anonymous"),new Promise(function(h){f.addEventListener("load",function(){h()},!1),f.addEventListener("error",function(){h()},!1),document.body.appendChild(f)})}function _t(){return Bt(this,function a(){return E(a,function(f){switch(f.g){case 1:return f.m=2,A(f,WebAssembly.instantiate(Be),4);case 4:f.g=3,f.m=0;break;case 2:return f.m=0,f.j=null,f.return(!1);case 3:return f.return(!0)}})})}function Ct(a){if(this.g=a,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=a&&a.locateFile||Ge,typeof window=="object")var f=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")f=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=f,a.options){f=c(Object.keys(a.options));for(var h=f.next();!h.done;h=f.next()){h=h.value;var w=a.options[h].default;w!==void 0&&(this.j[h]=typeof w=="function"?w():w)}}}i=Ct.prototype,i.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function Dt(a,f){return a.g.files===void 0?[]:typeof a.g.files=="function"?a.g.files(f):a.g.files}function St(a){return Bt(a,function f(){var h=this,w,B,$,V,J,oe,ye,We,vt,nt,qe;return E(f,function(Pe){switch(Pe.g){case 1:return w=h,h.R?(B=Dt(h,h.j),A(Pe,_t(),2)):Pe.return();case 2:if($=Pe.h,typeof window=="object")return Ue("createMediapipeSolutionsWasm",{locateFile:h.locateFile}),Ue("createMediapipeSolutionsPackedAssets",{locateFile:h.locateFile}),oe=B.filter(function(Xe){return Xe.data!==void 0}),ye=B.filter(function(Xe){return Xe.data===void 0}),We=Promise.all(oe.map(function(Xe){var et=at(w,Xe.url);if(Xe.path!==void 0){var ot=Xe.path;et=et.then(function(Ht){return w.overrideFile(ot,Ht),Promise.resolve(Ht)})}return et})),vt=Promise.all(ye.map(function(Xe){return Xe.simd===void 0||Xe.simd&&$||!Xe.simd&&!$?tt(w.locateFile(Xe.url,w.S)):Promise.resolve()})).then(function(){return Bt(w,function Xe(){var et,ot,Ht=this;return E(Xe,function(Tt){if(Tt.g==1)return et=window.createMediapipeSolutionsWasm,ot=window.createMediapipeSolutionsPackedAssets,A(Tt,et(ot),2);Ht.h=Tt.h,Tt.g=0})})}),nt=function(){return Bt(w,function Xe(){var et=this;return E(Xe,function(ot){return et.g.graph&&et.g.graph.url?ot=A(ot,at(et,et.g.graph.url),0):(ot.g=0,ot=void 0),ot})})}(),A(Pe,Promise.all([vt,We,nt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return V=B.filter(function(Xe){return Xe.simd===void 0||Xe.simd&&$||!Xe.simd&&!$}).map(function(Xe){return w.locateFile(Xe.url,w.S)}),importScripts.apply(null,u(V)),A(Pe,createMediapipeSolutionsWasm(Module),6);case 6:h.h=Pe.h,h.l=new OffscreenCanvas(1,1),h.h.canvas=h.l,J=h.h.GL.createContext(h.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),h.h.GL.makeContextCurrent(J),Pe.g=4;break;case 7:if(h.l=document.createElement("canvas"),qe=h.l.getContext("webgl2",{}),!qe&&(qe=h.l.getContext("webgl",{}),!qe))return alert("Failed to create WebGL canvas context when passing video frame."),Pe.return();h.D=qe,h.h.canvas=h.l,h.h.createContext(h.l,!0,!0,{});case 4:h.i=new h.h.SolutionWasm,h.R=!1,Pe.g=0}})})}function Ne(a){return Bt(a,function f(){var h=this,w,B,$,V,J,oe,ye,We;return E(f,function(vt){if(vt.g==1){if(h.g.graph&&h.g.graph.url&&h.P===h.g.graph.url)return vt.return();if(h.o=!0,!h.g.graph||!h.g.graph.url){vt.g=2;return}return h.P=h.g.graph.url,A(vt,at(h,h.g.graph.url),3)}for(vt.g!=2&&(w=vt.h,h.i.loadGraph(w)),B=c(Object.keys(h.B)),$=B.next();!$.done;$=B.next())V=$.value,h.i.overrideFile(V,h.B[V]);if(h.B={},h.g.listeners)for(J=c(h.g.listeners),oe=J.next();!oe.done;oe=J.next())ye=oe.value,Jt(h,ye);We=h.j,h.j={},h.setOptions(We),vt.g=0})})}i.reset=function(){return Bt(this,function a(){var f=this;return E(a,function(h){f.i&&(f.i.reset(),f.m={},f.s={}),h.g=0})})},i.setOptions=function(a,f){var h=this;if(f=f||this.g.options){for(var w=[],B=[],$={},V=c(Object.keys(a)),J=V.next();!J.done;$={K:$.K,L:$.L},J=V.next()){var oe=J.value;oe in this.j&&this.j[oe]===a[oe]||(this.j[oe]=a[oe],J=f[oe],J!==void 0&&(J.onChange&&($.K=J.onChange,$.L=a[oe],w.push(function(ye){return function(){return Bt(h,function We(){var vt,nt=this;return E(We,function(qe){if(qe.g==1)return A(qe,ye.K(ye.L),2);vt=qe.h,vt===!0&&(nt.o=!0),qe.g=0})})}}($))),J.graphOptionXref&&(oe={valueNumber:J.type===1?a[oe]:0,valueBoolean:J.type===0?a[oe]:!1,valueString:J.type===2?a[oe]:""},J=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),J.graphOptionXref),oe),B.push(J))))}(w.length!==0||B.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(B),this.u=(this.u===void 0?[]:this.u).concat(w))}};function Pt(a){return Bt(a,function f(){var h=this,w,B,$,V,J,oe,ye;return E(f,function(We){switch(We.g){case 1:if(!h.o)return We.return();if(!h.u){We.g=2;break}w=c(h.u),B=w.next();case 3:if(B.done){We.g=5;break}return $=B.value,A(We,$(),4);case 4:B=w.next(),We.g=3;break;case 5:h.u=void 0;case 2:if(h.A){for(V=new h.h.GraphOptionChangeRequestList,J=c(h.A),oe=J.next();!oe.done;oe=J.next())ye=oe.value,V.push_back(ye);h.i.changeOptions(V),V.delete(),h.A=void 0}h.o=!1,We.g=0}})})}i.initialize=function(){return Bt(this,function a(){var f=this;return E(a,function(h){return h.g==1?A(h,St(f),2):h.g!=3?A(h,Ne(f),3):A(h,Pt(f),0)})})};function at(a,f){return Bt(a,function h(){var w=this,B,$;return E(h,function(V){return f in w.F?V.return(w.F[f]):(B=w.locateFile(f,""),$=fetch(B).then(function(J){return J.arrayBuffer()}),w.F[f]=$,V.return($))})})}i.overrideFile=function(a,f){this.i?this.i.overrideFile(a,f):this.B[a]=f},i.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},i.send=function(a,f){return Bt(this,function h(){var w=this,B,$,V,J,oe,ye,We,vt,nt;return E(h,function(qe){switch(qe.g){case 1:return w.g.inputs?(B=1e3*(f??performance.now()),A(qe,w.C,2)):qe.return();case 2:return A(qe,w.initialize(),3);case 3:for($=new w.h.PacketDataList,V=c(Object.keys(a)),J=V.next();!J.done;J=V.next())if(oe=J.value,ye=w.g.inputs[oe]){e:{var Pe=w,Xe=a[oe];switch(ye.type){case"video":var et=Pe.m[ye.stream];if(et||(et=new ue(Pe.h,Pe.D),Pe.m[ye.stream]=et),Pe=et,Pe.l===0&&(Pe.l=Pe.h.createTexture()),typeof HTMLVideoElement<"u"&&Xe instanceof HTMLVideoElement){var ot=Xe.videoWidth;et=Xe.videoHeight}else typeof HTMLImageElement<"u"&&Xe instanceof HTMLImageElement?(ot=Xe.naturalWidth,et=Xe.naturalHeight):(ot=Xe.width,et=Xe.height);et={glName:Pe.l,width:ot,height:et},ot=Pe.g,ot.canvas.width=et.width,ot.canvas.height=et.height,ot.activeTexture(ot.TEXTURE0),Pe.h.bindTexture2d(Pe.l),ot.texImage2D(ot.TEXTURE_2D,0,ot.RGBA,ot.RGBA,ot.UNSIGNED_BYTE,Xe),Pe.h.bindTexture2d(0),Pe=et;break e;case"detections":for(et=Pe.m[ye.stream],et||(et=new be(Pe.h),Pe.m[ye.stream]=et),Pe=et,Pe.data||(Pe.data=new Pe.g.DetectionListData),Pe.data.reset(Xe.length),et=0;et<Xe.length;++et){ot=Xe[et];var Ht=Pe.data,Tt=Ht.setBoundingBox,en=et,It=ot.T,Ze=new Wi;k(Ze,1,It.Z),k(Ze,2,It.$),k(Ze,3,It.height),k(Ze,4,It.width),k(Ze,5,It.rotation),k(Ze,6,It.X);var lt=It=new z;X(lt,1,C(Ze,1)),X(lt,2,C(Ze,2)),X(lt,3,C(Ze,3)),X(lt,4,C(Ze,4)),X(lt,5,C(Ze,5));var ft=C(Ze,6);if(ft!=null&&ft!=null){He(lt.g,48);var it=lt.g,ut=ft;ft=0>ut,ut=Math.abs(ut);var ht=ut>>>0;for(ut=Math.floor((ut-ht)/4294967296),ut>>>=0,ft&&(ut=~ut>>>0,ht=(~ht>>>0)+1,4294967295<ht&&(ht=0,ut++,4294967295<ut&&(ut=0))),Fe=ht,Re=ut,ft=Fe,ht=Re;0<ht||127<ft;)it.push(ft&127|128),ft=(ft>>>7|ht<<25)>>>0,ht>>>=7;it.push(ft)}if($t(Ze,lt),It=ie(It),Tt.call(Ht,en,It),ot.O)for(Ht=0;Ht<ot.O.length;++Ht)Ze=ot.O[Ht],lt=!!Ze.visibility,Tt=Pe.data,en=Tt.addNormalizedLandmark,It=et,Ze=Object.assign(Object.assign({},Ze),{visibility:lt?Ze.visibility:0}),lt=new pn,k(lt,1,Ze.x),k(lt,2,Ze.y),k(lt,3,Ze.z),Ze.visibility&&k(lt,4,Ze.visibility),it=Ze=new z,X(it,1,C(lt,1)),X(it,2,C(lt,2)),X(it,3,C(lt,3)),X(it,4,C(lt,4)),X(it,5,C(lt,5)),$t(lt,it),Ze=ie(Ze),en.call(Tt,It,Ze);if(ot.M)for(Ht=0;Ht<ot.M.length;++Ht){if(Tt=Pe.data,en=Tt.addClassification,It=et,Ze=ot.M[Ht],lt=new Wn,k(lt,2,Ze.Y),Ze.index&&k(lt,1,Ze.index),Ze.label&&k(lt,3,Ze.label),Ze.displayName&&k(lt,4,Ze.displayName),it=Ze=new z,ht=C(lt,1),ht!=null&&ht!=null)if(He(it.g,8),ft=it.g,0<=ht)He(ft,ht);else{for(ut=0;9>ut;ut++)ft.push(ht&127|128),ht>>=7;ft.push(1)}X(it,2,C(lt,2)),ft=C(lt,3),ft!=null&&(ft=fe(ft),He(it.g,26),He(it.g,ft.length),Z(it,it.g.end()),Z(it,ft)),ft=C(lt,4),ft!=null&&(ft=fe(ft),He(it.g,34),He(it.g,ft.length),Z(it,it.g.end()),Z(it,ft)),$t(lt,it),Ze=ie(Ze),en.call(Tt,It,Ze)}}Pe=Pe.data;break e;default:Pe={}}}switch(We=Pe,vt=ye.stream,ye.type){case"video":$.pushTexture2d(Object.assign(Object.assign({},We),{stream:vt,timestamp:B}));break;case"detections":nt=We,nt.stream=vt,nt.timestamp=B,$.pushDetectionList(nt);break;default:throw Error("Unknown input config type: '"+ye.type+"'")}}return w.i.send($),A(qe,w.C,4);case 4:$.delete(),qe.g=0}})})};function Zt(a,f,h){return Bt(a,function w(){var B,$,V,J,oe,ye,We=this,vt,nt,qe,Pe,Xe,et,ot,Ht;return E(w,function(Tt){switch(Tt.g){case 1:if(!h)return Tt.return(f);for(B={},$=0,V=c(Object.keys(h)),J=V.next();!J.done;J=V.next())oe=J.value,ye=h[oe],typeof ye!="string"&&ye.type==="texture"&&f[ye.stream]!==void 0&&++$;1<$&&(We.G=!1),vt=c(Object.keys(h)),J=vt.next();case 2:if(J.done){Tt.g=4;break}if(nt=J.value,qe=h[nt],typeof qe=="string")return ot=B,Ht=nt,A(Tt,Yn(We,nt,f[qe]),14);if(Pe=f[qe.stream],qe.type==="detection_list"){if(Pe){for(var en=Pe.getRectList(),It=Pe.getLandmarksList(),Ze=Pe.getClassificationsList(),lt=[],ft=0;ft<en.size();++ft){var it=en.get(ft);e:{var ut=new Wi;for(it=new Ke(it);st(it);)switch(it.i){case 13:var ht=Te(it);k(ut,1,ht);break;case 21:ht=Te(it),k(ut,2,ht);break;case 29:ht=Te(it),k(ut,3,ht);break;case 37:ht=Te(it),k(ut,4,ht);break;case 45:ht=Te(it),k(ut,5,ht);break;case 48:ht=je(it.g),k(ut,6,ht);break;default:if(!Mn(ut,it))break e}}ut={Z:se(ut,1),$:se(ut,2),height:se(ut,3),width:se(ut,4),rotation:se(ut,5,0),X:le(ut,6,0)},it=Ve(dr(It.get(ft)),pn).map(O);var _i=Ze.get(ft);e:for(ht=new Xn,_i=new Ke(_i);st(_i);)switch(_i.i){case 10:ht.addClassification(yt(_i,new Wn,ur));break;default:if(!Mn(ht,_i))break e}ut={T:ut,O:it,M:Y(ht)},lt.push(ut)}en=lt}else en=[];B[nt]=en,Tt.g=7;break}if(qe.type==="proto_list"){if(Pe){for(en=Array(Pe.size()),It=0;It<Pe.size();It++)en[It]=Pe.get(It);Pe.delete()}else en=[];B[nt]=en,Tt.g=7;break}if(Pe===void 0){Tt.g=3;break}if(qe.type==="float_list"){B[nt]=Pe,Tt.g=7;break}if(qe.type==="proto"){B[nt]=Pe,Tt.g=7;break}if(qe.type!=="texture")throw Error("Unknown output config type: '"+qe.type+"'");return Xe=We.s[nt],Xe||(Xe=new ue(We.h,We.D),We.s[nt]=Xe),A(Tt,ve(Xe,Pe,We.G),13);case 13:et=Tt.h,B[nt]=et;case 7:qe.transform&&B[nt]&&(B[nt]=qe.transform(B[nt])),Tt.g=3;break;case 14:ot[Ht]=Tt.h;case 3:J=vt.next(),Tt.g=2;break;case 4:return Tt.return(B)}})})}function Yn(a,f,h){return Bt(a,function w(){var B=this,$;return E(w,function(V){return typeof h=="number"||h instanceof Uint8Array||h instanceof B.h.Uint8BlobList?V.return(h):h instanceof B.h.Texture2dDataOut?($=B.s[f],$||($=new ue(B.h,B.D),B.s[f]=$),V.return(ve($,h,B.G))):V.return(void 0)})})}function Jt(a,f){for(var h=f.name||"$",w=[].concat(u(f.wants)),B=new a.h.StringList,$=c(f.wants),V=$.next();!V.done;V=$.next())B.push_back(V.value);$=a.h.PacketListener.implement({onResults:function(J){for(var oe={},ye=0;ye<f.wants.length;++ye)oe[w[ye]]=J.get(ye);var We=a.listeners[h];We&&(a.C=Zt(a,oe,f.outs).then(function(vt){vt=We(vt);for(var nt=0;nt<f.wants.length;++nt){var qe=oe[w[nt]];typeof qe=="object"&&qe.hasOwnProperty&&qe.hasOwnProperty("delete")&&qe.delete()}vt&&(a.C=vt)}))}}),a.i.attachMultiListener(B,$),B.delete()}i.onResults=function(a,f){this.listeners[f||"$"]=a},W("Solution",Ct),W("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function ri(a){a=F(a);var f=a.getMesh();if(!f)return a;var h=new Float32Array(f.getVertexBufferList());f.getVertexBufferList=function(){return h};var w=new Uint32Array(f.getIndexBufferList());return f.getIndexBufferList=function(){return w},a}var Lt={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(a){return a.map(ri)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(a){return a.map(function(f){return Ve(dr(f),pn).map(O)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},Xt=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Qt=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],kt=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Yt=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],gi=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],bn=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],lc=[].concat(u(Xt),u(Qt),u(kt),u(Yt),u(gi),u(bn));function Pa(a){a=a||{},a=Object.assign(Object.assign({},Lt),a),this.g=new Ct(a)}i=Pa.prototype,i.close=function(){return this.g.close(),Promise.resolve()},i.onResults=function(a){this.g.onResults(a)},i.initialize=function(){return Bt(this,function a(){var f=this;return E(a,function(h){return A(h,f.g.initialize(),0)})})},i.reset=function(){this.g.reset()},i.send=function(a){return Bt(this,function f(){var h=this;return E(f,function(w){return A(w,h.g.send(a),0)})})},i.setOptions=function(a){this.g.setOptions(a)},W("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),W("FaceMesh",Pa),W("FACEMESH_LIPS",Xt),W("FACEMESH_LEFT_EYE",Qt),W("FACEMESH_LEFT_EYEBROW",kt),W("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),W("FACEMESH_RIGHT_EYE",Yt),W("FACEMESH_RIGHT_EYEBROW",gi),W("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),W("FACEMESH_FACE_OVAL",bn),W("FACEMESH_CONTOURS",lc),W("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),W("matrixDataToMatrix",function(a){for(var f=a.getCols(),h=a.getRows(),w=a.getPackedDataList(),B=[],$=0;$<h;$++)B.push(Array(f));for($=0;$<h;$++)for(var V=0;V<f;V++){var J=a.getLayout()===1?$*f+V:V*h+$;B[$][V]=w[J]}return B}),W("VERSION","0.4.1633559619")}).call($r);export{Fc as A,Tn as B,ec as C,Ap as D,Ep as M,hn as P,fn as S,Rp as W,yp as a,wp as b,Tp as c,Bn as d,ii as e,Cp as f,tc as g,bp as h,Rn as i};
