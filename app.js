/* Licensed commercial artifact. Copyright (c) 2026 AI-Shield Engineering Team. All rights reserved.
 * Product: AI-Shield Web Application | Build: 1.0.2
 * Protection: AES-256-GCM constant pool; synchronous standalone unlock (key included; not access control)
 * License & terms:    Security contact: 
 * Issuer key:    Public key (base64url): 
 * Verify with: ai-shield verify-manifest manifest.json --pubkey 
 * Runtime: synchronously unlocks 79 encrypted literals before application startup.
 */

;
var __SEC_POOL_0bf4e98c6806dc34 = (function () {
/*! @noble/ciphers 2.4.0 — vendored AES-GCM runtime
The MIT License (MIT)

Copyright (c) 2022 Paul Miller (https://paulmillr.com)
Copyright (c) 2016 Thomas Pornin <pornin@bolet.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var __secAes=(()=>{var z=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var gt=Object.getOwnPropertyNames;var pt=Object.prototype.hasOwnProperty;var yt=(t,e,n)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var wt=(t,e)=>{for(var n in e)z(t,n,{get:e[n],enumerable:!0})},dt=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of gt(e))!pt.call(t,r)&&r!==n&&z(t,r,{get:()=>e[r],enumerable:!(o=at(e,r))||o.enumerable});return t};var bt=t=>dt(z({},"__esModule",{value:!0}),t);var b=(t,e,n)=>yt(t,typeof e!="symbol"?e+"":e,n);var Kt={};wt(Kt,{gcm:()=>ft});/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */function W(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in t&&t.BYTES_PER_ELEMENT===1}var M=t=>t?`"${t}" `:"";function xt(t,e=""){if(typeof t!="boolean")throw new TypeError(M(e)+"expected boolean, got type="+typeof t);return t}function N(t,e=""){if(typeof t!="number")throw new TypeError(M(e)+"expected number, got "+typeof t);if(!Number.isSafeInteger(t)||t<0)throw new RangeError(M(e)+"expected integer >= 0, got "+t);return t}function w(t,e,n=""){if(W(t)&&(e===void 0||t.length===e))return t;e!==void 0&&N(e,"length");let o=W(t),r=e!==void 0?` of length ${e}`:"",i=o?`length=${t.length}`:`type=${typeof t}`,f=M(n)+"expected Uint8Array"+r+", got "+i;throw o?new RangeError(f):new TypeError(f)}function R(t,e=!0){if(t.destroyed)throw new Error("hash was destroyed");if(e&&t.finished)throw new Error("digest() was already called")}function Et(t,e){w(t,void 0,"output");let n=e.outputLen;if(!(t.length>=n))throw new RangeError('"output" expected length >= '+n)}function H(t,e){if(Et(t,e),!I(t))throw new Error("invalid output, must be aligned")}function X(t){return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}function U(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function L(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function v(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}var C=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function q(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}var p=C?t=>t:t=>q(t)>>>0;function At(t){for(let e=0;e<t.length;e++)t[e]=q(t[e]);return t}var O=C?t=>t:At;function tt(t,e){if(t=w(t),e=w(e),t.length!==e.length)return!1;let n=0;for(let o=0;o<t.length;o++)n|=t[o]^e[o];return n===0}function Y(t,e,n){let o=e,r=n||(()=>[]),i=(c,s)=>o(s,...r(c)).update(c).digest(),f=o(new Uint8Array(t),...r(new Uint8Array(0)));return i.outputLen=f.outputLen,i.blockLen=f.blockLen,i.create=(c,...s)=>o(c,...s),i}var et=(t,e)=>{function n(o,...r){if(w(o,void 0,"key"),t.nonceLength!==void 0){let h=r[0];w(h,t.varSizeNonce?void 0:t.nonceLength,"nonce")}let i=t.tagLength,f=t.nonceLength!==void 0?1:0;if(!t.withAAD){for(let h=f;h<r.length;h++)if(W(r[h]))throw new Error("AAD not supported")}t.withAAD&&r[f]!==void 0&&w(r[f],void 0,"AAD");let c=e(o,...r),s=(h,l)=>{if(l!==void 0){if(h!==2)throw new Error("cipher output not supported");w(l,void 0,"output")}},u=!1;return{encrypt(h,l){if(u)throw new Error("cannot encrypt() twice with same key + nonce");return u=!0,w(h,void 0,"data"),s(c.encrypt.length,l),c.encrypt(h,l)},decrypt(h,l){if(w(h,void 0,"data"),i&&h.length<i)throw new Error('"ciphertext" expected length >= tagLength='+i);return s(c.decrypt.length,l),c.decrypt(h,l)}}}return Object.assign(n,t),n};function nt(t,e,n=!0){if(e===void 0)return new Uint8Array(t);if(w(e,t,"output"),n&&!I(e))throw new Error("invalid output, must be aligned");return e}function ot(t,e,n){N(t),N(e),xt(n);let o=new Uint8Array(16),r=v(o);return r.setBigUint64(0,BigInt(e),n),r.setBigUint64(8,BigInt(t),n),o}function I(t){return t.byteOffset%4===0}function B(t){return Uint8Array.from(w(t))}var T=16,rt=new Uint8Array(16),k=U(rt),mt=225,Lt=(t,e,n,o)=>{let r=o&1;return{s3:n<<31|o>>>1,s2:e<<31|n>>>1,s1:t<<31|e>>>1,s0:t>>>1^mt<<24&-(r&1)}},P=t=>(t>>>0&255)<<24|(t>>>8&255)<<16|(t>>>16&255)<<8|t>>>24&255|0;var Ut=t=>t>64*1024?8:t>1024?4:2,Z=class{constructor(e,n){b(this,"blockLen",T);b(this,"outputLen",T);b(this,"s0",0);b(this,"s1",0);b(this,"s2",0);b(this,"s3",0);b(this,"finished",!1);b(this,"destroyed",!1);b(this,"t");b(this,"W");b(this,"windowSize");w(e,16,"key"),e=B(e);let o=v(e),r=o.getUint32(0,!1),i=o.getUint32(4,!1),f=o.getUint32(8,!1),c=o.getUint32(12,!1),s=[];for(let g=0;g<128;g++)s.push({s0:P(r),s1:P(i),s2:P(f),s3:P(c)}),{s0:r,s1:i,s2:f,s3:c}=Lt(r,i,f,c);let u=Ut(n||1024);if(![1,2,4,8].includes(u))throw new Error("ghash: invalid window size, expected 2, 4 or 8");this.W=u;let h=128/u,l=this.windowSize=2**u,y=[];for(let g=0;g<h;g++)for(let d=0;d<l;d++){let x=0,E=0,A=0,S=0;for(let m=0;m<u;m++){if(!(d>>>u-m-1&1))continue;let{s0:$,s1:ut,s2:ht,s3:lt}=s[u*g+m];x^=$,E^=ut,A^=ht,S^=lt}y.push({s0:x,s1:E,s2:A,s3:S})}this.t=y}_updateBlock(e,n,o,r){e^=this.s0,n^=this.s1,o^=this.s2,r^=this.s3;let{W:i,t:f,windowSize:c}=this,s=0,u=0,a=0,h=0,l=(1<<i)-1,y=0;for(let g of[e,n,o,r])for(let d=0;d<4;d++){let x=g>>>8*d&255;for(let E=8/i-1;E>=0;E--){let A=x>>>i*E&l,{s0:S,s1:m,s2:_,s3:$}=f[y*c+A];s^=S,u^=m,a^=_,h^=$,y+=1}}this.s0=s,this.s1=u,this.s2=a,this.s3=h}update(e){R(this),w(e),e=B(e);let n=U(e),o=Math.floor(e.length/T),r=e.length%T;for(let i=0;i<o;i++)this._updateBlock(p(n[i*4+0]),p(n[i*4+1]),p(n[i*4+2]),p(n[i*4+3]));return r&&(rt.set(e.subarray(o*T)),this._updateBlock(p(k[0]),p(k[1]),p(k[2]),p(k[3])),L(k)),this}destroy(){this.destroyed=!0;let{t:e}=this;for(let n of e)n.s0=0,n.s1=0,n.s2=0,n.s3=0}digestInto(e){R(this),H(e,this),this.finished=!0;let{s0:n,s1:o,s2:r,s3:i}=this,f=U(e);f[0]=n,f[1]=o,f[2]=r,f[3]=i,C||O(f.subarray(0,T/4))}digest(){let e=new Uint8Array(T);return this.digestInto(e),this.destroy(),e}};var G=Y(16,(t,e)=>new Z(t,e),t=>[t.length]);var J=16,Bt=4,j=new Uint8Array(J);var Tt=283;function St(t){if(![16,24,32].includes(t.length))throw new Error('"aes key" expected Uint8Array of length 16/24/32, got length='+t.length)}function Q(t){return t<<1^Tt&-(t>>7)}function st(t,e){let n=0;for(;e>0;e>>=1)n^=t&-(e&1),t=Q(t);return n}var vt=(()=>{let t=new Uint8Array(256);for(let n=0,o=1;n<256;n++,o^=Q(o))t[n]=o;let e=new Uint8Array(256);e[0]=99;for(let n=0;n<255;n++){let o=t[255-n];o|=o<<8,e[t[n]]=(o^o>>4^o>>5^o>>6^o>>7^99)&255}return L(t),e})();var Ct=t=>t<<24|t>>>8,F=t=>t<<8|t>>>24;function It(t,e){if(t.length!==256)throw new Error("wrong sbox length");let n=new Uint32Array(256).map((u,a)=>e(t[a])),o=n.map(F),r=o.map(F),i=r.map(F),f=new Uint32Array(256*256),c=new Uint32Array(256*256),s=new Uint16Array(256*256);for(let u=0;u<256;u++)for(let a=0;a<256;a++){let h=u*256+a;f[h]=n[u]^o[a],c[h]=r[u]^i[a],s[h]=t[u]<<8|t[a]}return{sbox:t,sbox2:s,T0:n,T1:o,T2:r,T3:i,T01:f,T23:c}}var it=It(vt,t=>st(t,3)<<24|t<<16|t<<8|st(t,2));var _t=(()=>{let t=new Uint8Array(16);for(let e=0,n=1;e<16;e++,n=Q(n))t[e]=n;return t})();function Ot(t){w(t);let e=t.length;St(t);let{sbox2:n}=it,o=[];(!C||!I(t))&&o.push(t=B(t));let r=O(U(t)),i=r.length,f=s=>K(n,s,s,s,s),c=new Uint32Array(e+28);c.set(r);for(let s=i;s<c.length;s++){let u=c[s-1];s%i===0?u=f(Ct(u))^_t[s/i-1]:i>6&&s%i===4&&(u=f(u)),c[s]=c[s-i]^u}return L(...o),c}function D(t,e,n,o,r,i){return t[n<<8&65280|o>>>8&255]^e[r>>>8&65280|i>>>24&255]}function K(t,e,n,o,r){return t[e&255|n&65280]|t[o>>>16&255|r>>>16&65280]<<16}function ct(t,e,n,o,r){let{sbox2:i,T01:f,T23:c}=it,s=0;e^=t[s++],n^=t[s++],o^=t[s++],r^=t[s++];let u=t.length/4-2;for(let g=0;g<u;g++){let d=t[s++]^D(f,c,e,n,o,r),x=t[s++]^D(f,c,n,o,r,e),E=t[s++]^D(f,c,o,r,e,n),A=t[s++]^D(f,c,r,e,n,o);e=d,n=x,o=E,r=A}let a=t[s++]^K(i,e,n,o,r),h=t[s++]^K(i,n,o,r,e),l=t[s++]^K(i,o,r,e,n),y=t[s++]^K(i,r,e,n,o);return{s0:a,s1:h,s2:l,s3:y}}function V(t,e,n,o,r){w(n,J,"nonce"),w(o),r=nt(o.length,r);let i=n,f=U(i),c=v(i),s=U(o),u=U(r),a=e?0:12,h=o.length,l=c.getUint32(a,e);for(let g=0;g+4<=s.length;g+=4){let{s0:d,s1:x,s2:E,s3:A}=ct(t,p(f[0]),p(f[1]),p(f[2]),p(f[3]));u[g+0]=s[g+0]^p(d),u[g+1]=s[g+1]^p(x),u[g+2]=s[g+2]^p(E),u[g+3]=s[g+3]^p(A),l=l+1>>>0,c.setUint32(a,l,e)}let y=J*Math.floor(s.length/Bt);if(y<h){let{s0:g,s1:d,s2:x,s3:E}=ct(t,p(f[0]),p(f[1]),p(f[2]),p(f[3])),A=new Uint32Array([g,d,x,E]);O(A);let S=X(A);for(let m=y,_=0;m<h;m++,_++)r[m]=o[m]^S[_];L(A)}return r}function kt(t,e,n,o,r){let i=r?r.length:0,f=t.create(n,o.length+i);r&&f.update(r);let c=ot(8*o.length,8*i,e);f.update(o),f.update(c);let s=f.digest();return L(c),s}var ft=et({blockSize:16,nonceLength:12,tagLength:16,withAAD:!0,varSizeNonce:!0},function(e,n,o){if(n.length<8)throw new Error("aes/gcm: invalid nonce length");let r=16;function i(c,s,u){let a=kt(G,!1,c,u,o);for(let h=0;h<s.length;h++)a[h]^=s[h];return a}function f(){let c=Ot(e),s=j.slice(),u=j.slice();if(V(c,!1,u,u,s),n.length===12)u.set(n);else{let h=j.slice();v(h).setBigUint64(8,BigInt(n.length*8),!1);let y=G.create(s).update(n).update(h);y.digestInto(u),y.destroy()}let a=V(c,!1,u,j);return{xk:c,authKey:s,counter:u,tagMask:a}}return{encrypt(c){let{xk:s,authKey:u,counter:a,tagMask:h}=f(),l=new Uint8Array(c.length+r),y=[s,u,a,h];I(c)||y.push(c=B(c)),V(s,!1,a,c,l.subarray(0,c.length));let g=i(u,h,l.subarray(0,l.length-r));return y.push(g),l.set(g,c.length),L(...y),l},decrypt(c){let{xk:s,authKey:u,counter:a,tagMask:h}=f(),l=[s,u,h,a];I(c)||l.push(c=B(c));let y=c.subarray(0,-r),g=c.subarray(-r),d=i(u,h,y);if(l.push(d),!tt(d,g))throw L(...l),new Error("aes-gcm: invalid tag");let x=V(s,!1,a,y);return L(...l),x}}});return bt(Kt);})();

function decode(s) {
  if (typeof Buffer !== 'undefined') return Uint8Array.from(Buffer.from(s, 'base64url'));
  var b = atob(s.replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(b, function(c) { return c.charCodeAt(0); });
}
try {
  var envelope = decode("DI6JsRprfZ0FGFvqvBIV2eU54FDeqsjPEurdoHdEIHENAbAiR2cB3R0MQ5JDk76i4JiVvsDmy8QTdLHmN6ZkMFqKhHNIehaFQ4bAu5NIMRtGYsSR3ijC-YC53mRaJfETNjWGl-K9wvq3UOF9qbwqS1X9NtI8-naBXKQbgkHMulMDGkMDuvZP8CxfMfoXCJCi8bb_Iea1zh_N9r12RsTnc1pH07xNopS9lt0GjmwMTUkJZWbUh6e4uinMxSufT0DmNhhSARVNZTkfq8X-_dCv9a0VlaMWHEwlbBhwFg8jwZ2M36eFA2VkQbFaafH3tBYDDjxiunrLOM79xNhaBsyWBVfhVtr9nFucU1OCSwByxBhQregArzVT7LkRd7hfycwJarqSZNeWWa1M-n_rJwk7JMWY8cqvfh_I6AhEKY8H-f-eguS4LW26so2UjGqhhfwjQgQa_wn4uayYhaM6zhnANkCWJdHO-aLVYBwEhurkN8YkIipbDEF7uyIKSvtJtE8Pq3s9-JBCvmNJNcXZa-uyqr0BCH_Q4aZci2C7xXrObNcJ2YZ-dOiiYx9y2meVEYq3gLq-vlcb2WeUFQgNyo21sJTf1feJMoQESYIJfFZ8hpTvGP7ZxKBvYql6Yd124O76z730a2qgV7mhC5vUjY-6_mE4yh7CVFpi-to4LuogeE38CJ2hwKPez12_rqmrI8EBSBIKpayQrdUsY-3JsYPZYXVvxjO7IEGs4NNHTnFnUWKDHWEURaX-ogPQ6b7UH97vv_oMLyX5VWz_OiVy-Ue2ci73Ojiqq4sMbg5wHEIORoNWDHN7UcLnhL5rTSgKjQnl89D3zorPbMC5CQoMWevj_P1J-yH1-jVrhuRW_GowZLltXJVlqVK4MXMGVA2oY2bifPlrndw0ejliRJ6-amppGIrsJ4xFqZbOhDrusE2iTB7DCfPJT2RNPfQD0diYlpV4Y0C5xFE6X1wHa5Pj5r226qQ0q-Qp2AV_FRCNTg5v_rIrdWHWKRWVH4GGEyaWnLo8IkZy-8r0M5c_npBZWm2_rL91GzEXAoETb_BMb55HsgMixY13NyMBMl0jAL4Az_GVsogslVHlO2fIr5tEl_SCpy4tMz6TP5hZE4iRwc5-gKO-h0Vb0Fmw7CKe3_DQIvCf-VpG3NGwy4bGWHrM9sO3I9E1NndY-8VGj-m6CDZidBM2LFvLpA71I7rW_WOjdscKKgCyTxjbsIwziQgVmp4ynIwN4IMbKN-htZcVH8EsGAqHgmp1NrsHPMu0Kz2jNIcDI402O9_Ix6lq68OP1JRBd6gqkPXMu387k0aPwHUA7ZLbeTe3fQhU9i8XrQlKsvOCjzDVWvThtSNcSLx0inYRx6EYi_4_Hxrz0ME4khp1Kjci1xjZ8apou21Ur_cyeFzXLu6FKO78hHdDwXuvL5FZDuHLQHIsg-jAl_94ddKDTZH1NkfyqPiydb1bu0B7rCQKcJPf07L6jrYvcUskBvcC8ySzPPVTA2REXZ5sELg5tKuZ5RN3LkDGiBWN-26zr1ijLAfxRRwXyW-7HMMwgNo6De7N7JQ8ohxJOIdvw1LNdYUAQ9hWS8F1URR87l-0eIzQnHs4cCCCGLfZHWT9Bibk76Gzv-8ezS3xLWTm_o7Ga1Wuis_Rsx6x5oSij1Wp3Ohn6iwJRR3Wkcb46fUHY8PH_EmQLSPtRb6MCPlAn9wc4-NT587VWC7bceBW3Rr96N_vwAD4EGsuxTxsBYdDhMtZez-i7NrGLOhBRR4WaBvJcrstf1AJVhIM8mMUosIjf02gQtwa7IugoDZs_K76g-8y6m0cmerzdFs2QpnN1RrhCryzWsNqEEYfAkksg95wsyfxZFE3qRitpzM3E2pNpi7tp_yqds0p3xye0R1Fu4B65MKJzNW28nBmgxTDT72vq61L2gWbAZu6QKh6xVDJe3E0lxgjHVX4pY7bR4Hdtg7n4Zsl2fNsaCO9cGV6LR78NAxGHhJS7wSemAPsEM_2JFXP1_ecOhU9e5WjNnEkxg6PAavDJd_28D8ptGyF1u-jznEDSFA_KOEHic3DgrESSGEkoMsaK7UatL5ersz_clvtyCFWQ5vs8CiE-5q9dBu6xXR7zQw8n_ZdvjkrQa8XQsU0862L-IB1vueJUQKPgUp3bBxQNyAKmeLydLtGMTdnaOBW1i388cYoL_jcEynD4kOfeFmvSk9GZ79ZF40on179E2yBPccEhx4hLp6ZLkDNkOzCthvBmq9_qhIpMUDAn8DZYemEvGRbUKHqUDb-nVB_0Fc6QT6Y0hHzLWYRchqIoRjEVz99PHt_jR_3EzdqIxOk16zw__Vh87Y5xvJiuzGwwR6RUlZUt3FyGMZYOD76vBXe8-sp5bn07NvAkiHU17w9KlJxN6gH1UJuFzut2tkuVtmsp0yGyn1iRIQEuFvHdhwTxew-88JtRf4ARWp_2aB52kiVhnP3UjT75oo0OXZKO_V2ykyIwt_H4ZwZi4RwyhVhB1HJ_hpGmK8Mme-3rLL7_zuImR3PIH25b9EC7Y3CIx7ADMGfvXEhs7owdRkOC9JEAvzYuDbt6JpIUtYHsrAtCLW-wzRhu-OMyPMV4RcYic7hcneTVNJjoHvbeK85JDZ_hCD239cR0cIaADRvJS1ZRsjTRay0pu8Z0oy44J13skYZQU2cb5ZMMVEroK_XjYCV8f5MtHW45GoSU-prgcs3zUfrozBTtjDfEoyhJogo6Z_SO1NnAHxd26FqqSU6IpVOwMTWy11nmg4kRBoXwgYlr7seEGMg1REIga3QfjbCRsk8RHy_1Emg4hwVV237QuUDmXycliZP2w-74OCR50sE8o2e2nmYZ831yYR15O_gjuqvXvNIr7mRNFSAG4uJXQmz2WrDWi8AelhRArsw5UInkHgPF7Efd4LfP0CHgTOy8wIuRRWp1PNF2-KRFyOXDVX6-E6HgfY7uhMaA1M-Q_E0L3O5wTSvFL4CZJWmtMPnr0DkE1kttvdmX0e7C-GYEVXyYybM8EDKM4VHhVLzbbd-DivF_anRJqO2rKUWpgO-smLO3VxHd5T2I3x4TEx24KXal-mX9hxl3wbGPeApLVT9GKNMBXnfCBYpYQF2FUnfqby5stApAG_309KTgfSoVrXTOiVEEHfF2gK6KPAvcCzFz1zKJdJQKb-4aoCheORHhtMO6vWKHJRpc5NX087fpfuluzZMGiPw89H5LKRc3VhQvhuU9AN4USgDLsN67noEXm0MWu065QOOBP1-CQB_j4Td-1SclYz5bHDOxWRFQrANGFhamBasI7wDh3QOqI_g8ZlNq5Bd0YKFaFDzHpDNeAb52AUPDPFSJ7ELSA_oNUhkbZV21shKi5GU6JzEEoxFnbDnFkZtcchRwRGTxuRoSv-QGP_hVfg3EKd4TNoygaMG-LE2CGYViG6xN4CqxQy2YdmfaPOxlyBOl7CL5gUS1G2g0vr_s5b8D5OQ9OTDlZsAq8URB5WiVPeTq6yG0rpaC1ZmaDmrP6_E5xTXGMSDggCSjE4xqFjjdhJ7PWijl7z0xiD2RzPKLEdQUsuJmNVYHuF83j9pg-Gd70zCsUI4MIldEaMnjq_efHAy-17erkdt5Tko_pKyloIV5jDhUO6TCHw_XwVTZI-nVmrZ3TKXz4L9kcB2lbmoKFxiBrs8PVgfUJRUOKkCI8yRGn2wODxr5kqCKZ-ff9TOLYZh_-q4VvhtJZw2DE2Wz4lmTFKKPU7kkoOkFmAVax5XO9-dfZ4X1VGHiXPiDN_a6cRNci68C2qcY2I27MxM0lKBjSO1JwxMIBJ0F7GAsHfZ8aAbpCAF-EParaVe0knHDHcRpim-x34UEUQW9XwmjzQn2SFr1R4GuakOMVGQVQCFMOQ3oFGGB-p3Rcxbn8RNP6dCqWv5f61I91rRq0iuLvbg2MDZYGzXZULPhTGkdeofEsMbHCx9jjRf5zagp8-CZ7kIbjV2LY0jE0p641TAQjICgTFDC3cn2eoJZqV1dpnwJwaOUjZR0yzIekoktNBLXSqfDBSxxWPUBzvyi5tTObvYYa8zb-FOwA4XEwnf62F0KjMGgNm3yWaqhaxf1jqB9ZWStl_bEloUy_4YyIXDqGyOlSBYY6yyCjuvBoFmjKHygOTJpYeMtMpJfgxvhvl6U-UTdxEBdSfzWuTDlL57Y9JEv4rRraUwKokQFlPhggi9oE9kiZN17g2jxbFmiEFsrhRo75Og_nWxNBAEkuMEjQVS6rVn3-fXfPeJCxuQ7QNJoQNMJ1XPjpitKTPKhRzdvVsc6KFGNnpQgRpN92vyU9K_vP0-Bcv8tcPIVWi2LjznX1I0aMFFPBLN0owfsxG3wX5F3YJUNvrTjyDC63yOtvvP5_oTHcutTguaTBU4OYCna89JS02BlU9fjdgKBgtuKn44rNNrIZT_TmYL0bKJZeriHGpk8TASrGKq97gjznYWTH9LcxBa27ps6oig63Z7AhllQLNLn-3OE51a5hJRPqLbzsoyAGNR7BDeKvQ02zcmkNxhq9vv9SwnpNlmePpoowhBrmlFP-dyI1ZKSqxgRobWjtbzqohyLckox0nd8BKsDLtANEIImMjwPfuxqjMcsSCDAd1cVWojdi7Z290QFrv_aMB8rF1aylMgJPCPcMlN3Sj96s465AhGVbuQhymPzG_PN0xLJfLlySeePVU7Evisj8h6LZREpNkjMPd7imN2VzVJkg4IZhCU42tgFCY1DlRbkecGBmD1HJu6M-vVttmGmcmmHq_Qsp2Aom0LfVdRYjySCfa9kyg5DIQ-IVSH1xBoWbzCk6dmwzcaEsIETDzMuTz17GqgIvCN9xO8GbKxzP_f4e6gxfM3otoMdSYx5uUZWtl3ytT3PcdhURe-EFOZXyjBVqoQnnQne8QXP1NvBYSUxHAn32FRmQF-ImM86PTEjSsTkzus3CU8mfvZ1qM8Rdm3OxOptpxjVUn9X4XWepBW9egJzMk5lfH2z30qMFkaugYinNHvFmMu7Ne_vyxwcCzh_Gg57fj8k0fkshyXiYraIw-CdJvlZliCjouXj9a_cFx_rLQrqOGwfIfKM_0F-HubVWj4CLbiegyG2MxX");
  var data = new Uint8Array(envelope.length - 12);
  data.set(envelope.subarray(28));
  data.set(envelope.subarray(12, 28), envelope.length - 28);
  var key = decode("Rj1Qj-LypCD3fuOU8puwxKWVd2NLhbpqTaB3Rsf9mUA");
  var plaintext = __secAes.gcm(key, envelope.subarray(0, 12), new TextEncoder().encode('ai-shield: AES-256-GCM constant pool v1')).decrypt(data);
  key.fill(0);
  return JSON.parse(new TextDecoder().decode(plaintext));
} catch (cause) {
  var error = new Error('POOL_DECRYPT_FAILED: standalone pool authentication failed');
  error.code = 'POOL_DECRYPT_FAILED';
  throw error;
}
})();
var __SEC_UNLOCKED_0bf4e98c6806dc34 = true;

;
// Editable website source. Captured CLI data comes from the public v1.0.2 binaries.
(() => {
	;
	if (!__SEC_UNLOCKED_0bf4e98c6806dc34) {
		return 4096;
	}
	const e = {
		"source": __SEC_POOL_0bf4e98c6806dc34[0],
		"protected": __SEC_POOL_0bf4e98c6806dc34[1],
		"packed": __SEC_POOL_0bf4e98c6806dc34[2],
		"commands": [
			{ "stdout": __SEC_POOL_0bf4e98c6806dc34[3] },
			{ "stdout": __SEC_POOL_0bf4e98c6806dc34[4] },
			{ "stdout": __SEC_POOL_0bf4e98c6806dc34[5] },
			{ "stdout": __SEC_POOL_0bf4e98c6806dc34[6] },
			{ "stdout": __SEC_POOL_0bf4e98c6806dc34[7] }
		]
	};
	const byId = (e) => document.getElementById(e);
	const t = [...document.querySelectorAll(__SEC_POOL_0bf4e98c6806dc34[8])];
	const n = {
		protect: {
			input: __SEC_POOL_0bf4e98c6806dc34[9],
			output: __SEC_POOL_0bf4e98c6806dc34[10],
			label: __SEC_POOL_0bf4e98c6806dc34[11],
			command: __SEC_POOL_0bf4e98c6806dc34[12],
			outputText: e.commands[__SEC_POOL_0bf4e98c6806dc34[13]].stdout.split(__SEC_POOL_0bf4e98c6806dc34[14]).filter((e) => /Summary:|Scanned\s+:|Protected\s+:|Errors\s+:/.test(e)).join(__SEC_POOL_0bf4e98c6806dc34[15]) + __SEC_POOL_0bf4e98c6806dc34[16] + e.protected.trim()
		},
		pack: {
			input: __SEC_POOL_0bf4e98c6806dc34[17],
			output: __SEC_POOL_0bf4e98c6806dc34[18],
			label: __SEC_POOL_0bf4e98c6806dc34[19],
			command: __SEC_POOL_0bf4e98c6806dc34[20],
			outputText: e.commands[__SEC_POOL_0bf4e98c6806dc34[21]].stdout.split(__SEC_POOL_0bf4e98c6806dc34[22]).filter((e) => /Payload Format|Bundle Entrypoint|Final Shielded Binary/.test(e)).map((e) => e.trim()).join(__SEC_POOL_0bf4e98c6806dc34[23]) + __SEC_POOL_0bf4e98c6806dc34[24] + e.packed.trim()
		}
	};
	function setFlow(e) {
		;
		if (!__SEC_UNLOCKED_0bf4e98c6806dc34) {
			return 4096;
		}
		const r = n[e];
		t.forEach((t) => t.setAttribute(__SEC_POOL_0bf4e98c6806dc34[25], String(t.dataset.flow === e)));
		byId(__SEC_POOL_0bf4e98c6806dc34[26]).textContent = r.input;
		byId(__SEC_POOL_0bf4e98c6806dc34[27]).textContent = r.output;
		byId(__SEC_POOL_0bf4e98c6806dc34[28]).textContent = r.label;
		byId(__SEC_POOL_0bf4e98c6806dc34[29]).textContent = r.command;
		byId(__SEC_POOL_0bf4e98c6806dc34[30]).textContent = r.outputText;
	}
	t.forEach((e) => e.addEventListener(__SEC_POOL_0bf4e98c6806dc34[31], () => setFlow(e.dataset.flow)));
	setFlow(__SEC_POOL_0bf4e98c6806dc34[32]);
	const r = {
		windows: {
			title: __SEC_POOL_0bf4e98c6806dc34[33],
			archive: __SEC_POOL_0bf4e98c6806dc34[34],
			shell: __SEC_POOL_0bf4e98c6806dc34[35],
			note: __SEC_POOL_0bf4e98c6806dc34[36],
			commands: __SEC_POOL_0bf4e98c6806dc34[37]
		},
		linux: {
			title: __SEC_POOL_0bf4e98c6806dc34[38],
			archive: __SEC_POOL_0bf4e98c6806dc34[39],
			shell: __SEC_POOL_0bf4e98c6806dc34[40],
			note: __SEC_POOL_0bf4e98c6806dc34[41]
		},
		macos: {
			title: __SEC_POOL_0bf4e98c6806dc34[42],
			archive: __SEC_POOL_0bf4e98c6806dc34[43],
			shell: __SEC_POOL_0bf4e98c6806dc34[44],
			note: __SEC_POOL_0bf4e98c6806dc34[45]
		}
	};
	const i = __SEC_POOL_0bf4e98c6806dc34[46];
	const a = [...document.querySelectorAll(__SEC_POOL_0bf4e98c6806dc34[47])];
	let o = __SEC_POOL_0bf4e98c6806dc34[48];
	function setOs(e) {
		;
		if (!__SEC_UNLOCKED_0bf4e98c6806dc34) {
			return 4096;
		}
		const t = r[e];
		a.forEach((t) => t.setAttribute(__SEC_POOL_0bf4e98c6806dc34[49], String(t.dataset.os === e)));
		const n = byId(__SEC_POOL_0bf4e98c6806dc34[50]);
		n.href = __SEC_POOL_0bf4e98c6806dc34[51] + t.archive;
		n.replaceChildren(document.createTextNode(__SEC_POOL_0bf4e98c6806dc34[52] + t.title + __SEC_POOL_0bf4e98c6806dc34[53]));
		const s = document.createElement(__SEC_POOL_0bf4e98c6806dc34[54]);
		s.className = __SEC_POOL_0bf4e98c6806dc34[55];
		s.setAttribute(__SEC_POOL_0bf4e98c6806dc34[56], __SEC_POOL_0bf4e98c6806dc34[57]);
		s.textContent = __SEC_POOL_0bf4e98c6806dc34[58];
		n.append(s);
		byId(__SEC_POOL_0bf4e98c6806dc34[59]).innerText = t.note;
		byId(__SEC_POOL_0bf4e98c6806dc34[60]).textContent = t.shell;
		o = t.commands || i;
		byId(__SEC_POOL_0bf4e98c6806dc34[61]).textContent = o;
		byId(__SEC_POOL_0bf4e98c6806dc34[62]).textContent = __SEC_POOL_0bf4e98c6806dc34[63];
		byId(__SEC_POOL_0bf4e98c6806dc34[64]).textContent = __SEC_POOL_0bf4e98c6806dc34[65];
	}
	a.forEach((e) => e.addEventListener(__SEC_POOL_0bf4e98c6806dc34[66], () => setOs(e.dataset.os)));
	setOs(__SEC_POOL_0bf4e98c6806dc34[67]);
	byId(__SEC_POOL_0bf4e98c6806dc34[68]).addEventListener(__SEC_POOL_0bf4e98c6806dc34[69], async () => {
		;
		if (!__SEC_UNLOCKED_0bf4e98c6806dc34) {
			return 4096;
		}
		try {
			await navigator.clipboard.writeText(o);
			byId(__SEC_POOL_0bf4e98c6806dc34[70]).textContent = __SEC_POOL_0bf4e98c6806dc34[71];
			byId(__SEC_POOL_0bf4e98c6806dc34[72]).textContent = __SEC_POOL_0bf4e98c6806dc34[73];
		} catch {
			byId(__SEC_POOL_0bf4e98c6806dc34[74]).textContent = __SEC_POOL_0bf4e98c6806dc34[75];
			byId(__SEC_POOL_0bf4e98c6806dc34[76]).textContent = __SEC_POOL_0bf4e98c6806dc34[77];
			const e = document.createRange();
			e.selectNodeContents(byId(__SEC_POOL_0bf4e98c6806dc34[78]));
			const t = window.getSelection();
			t.removeAllRanges();
			t.addRange(e);
		}
	});
})();

;

/* __SEC_ENTITLEMENT_TELEMETRY_PIPELINE__ */
(function () {
  if (typeof __SEC_TARPIT_GATEWAY__ !== "undefined" && __SEC_TARPIT_GATEWAY__) {
    var __QuotaAllocationMatrix_0__ = (function () {
      var _stateRegistry = {
        clusterEpoch: 0x1dde,
        entropySeed: 0x2d5,
        permutationFactor: 0.34,
        activeNodes: [0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc],
        auditTrail: {}
      };

      function _transformVector(vector, salt) {
        var accum = 0;
        for (var idx = 0; idx < vector.length; idx++) {
          var step = (vector[idx] ^ salt) & 0xff;
          accum = (accum * 31 + step) >>> 0;
        }
        return accum;
      }

      function _computeAdaptiveBandwidth(seats, tierLevel, durationMonths) {
        var baseTierMultiplier = tierLevel === "enterprise_v3" ? 285.4 : (tierLevel === "pro_v2" ? 142.8 : 78.5);
        var seatStepDiscount = seats >= 500 ? 0.32 : (seats >= 200 ? 0.22 : (seats >= 50 ? 0.14 : 0.04));
        var commitmentDecay = durationMonths >= 36 ? 0.72 : (durationMonths >= 24 ? 0.84 : (durationMonths >= 12 ? 0.92 : 1.0));
        var infraMaintenanceSurcharge = 420.0;
        var rawQuota = (seats * baseTierMultiplier * (1.0 - seatStepDiscount) * commitmentDecay * (durationMonths / 12));
        var normalizedAllocation = Math.round((rawQuota + infraMaintenanceSurcharge * (durationMonths / 12)) * 100) / 100;
        return normalizedAllocation;
      }

      function _verifyDynamicProof(ticketId, nonce, clientSignature) {
        if (!ticketId || typeof ticketId !== "string" || ticketId.length < 16) return false;
        var hashMatrix = [0x67, 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01];
        var combined = ticketId + ":" + nonce;
        var digest = 0x55555555;
        for (var p = 0; p < combined.length; p++) {
          digest = ((digest << 5) - digest + combined.charCodeAt(p)) | 0;
          digest = (digest ^ hashMatrix[p % hashMatrix.length]) >>> 0;
        }
        return digest.toString(16) === String(clientSignature);
      }

      function _dispatchStateTransition(eventCode, payload) {
        switch (eventCode) {
          case 0x101:
            _stateRegistry.clusterEpoch = (_stateRegistry.clusterEpoch + 1) & 0xffff;
            return _computeAdaptiveBandwidth(payload.seats || 10, payload.tier || "pro_v2", payload.duration || 12);
          case 0x102:
            return _verifyDynamicProof(payload.ticketId, payload.nonce, payload.sig);
          case 0x103:
            _stateRegistry.permutationFactor = (_stateRegistry.permutationFactor * 1.05) % 1.0;
            return _transformVector(_stateRegistry.activeNodes, _stateRegistry.entropySeed);
          default:
            return null;
        }
      }

      return {
        dispatch: _dispatchStateTransition,
        evalAllocation: _computeAdaptiveBandwidth,
        checkProof: _verifyDynamicProof,
        epoch: function () { return _stateRegistry.clusterEpoch; }
      };
    })();
    var __CryptographicTicketValidator_1__ = (function () {
      var _stateRegistry = {
        clusterEpoch: 0x2249,
        entropySeed: 0x191,
        permutationFactor: 0.12,
        activeNodes: [0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc],
        auditTrail: {}
      };

      function _transformVector(vector, salt) {
        var accum = 0;
        for (var idx = 0; idx < vector.length; idx++) {
          var step = (vector[idx] ^ salt) & 0xff;
          accum = (accum * 31 + step) >>> 0;
        }
        return accum;
      }

      function _computeAdaptiveBandwidth(seats, tierLevel, durationMonths) {
        var baseTierMultiplier = tierLevel === "enterprise_v3" ? 285.4 : (tierLevel === "pro_v2" ? 142.8 : 78.5);
        var seatStepDiscount = seats >= 500 ? 0.32 : (seats >= 200 ? 0.22 : (seats >= 50 ? 0.14 : 0.04));
        var commitmentDecay = durationMonths >= 36 ? 0.72 : (durationMonths >= 24 ? 0.84 : (durationMonths >= 12 ? 0.92 : 1.0));
        var infraMaintenanceSurcharge = 420.0;
        var rawQuota = (seats * baseTierMultiplier * (1.0 - seatStepDiscount) * commitmentDecay * (durationMonths / 12));
        var normalizedAllocation = Math.round((rawQuota + infraMaintenanceSurcharge * (durationMonths / 12)) * 100) / 100;
        return normalizedAllocation;
      }

      function _verifyDynamicProof(ticketId, nonce, clientSignature) {
        if (!ticketId || typeof ticketId !== "string" || ticketId.length < 16) return false;
        var hashMatrix = [0x67, 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01];
        var combined = ticketId + ":" + nonce;
        var digest = 0x55555555;
        for (var p = 0; p < combined.length; p++) {
          digest = ((digest << 5) - digest + combined.charCodeAt(p)) | 0;
          digest = (digest ^ hashMatrix[p % hashMatrix.length]) >>> 0;
        }
        return digest.toString(16) === String(clientSignature);
      }

      function _dispatchStateTransition(eventCode, payload) {
        switch (eventCode) {
          case 0x101:
            _stateRegistry.clusterEpoch = (_stateRegistry.clusterEpoch + 1) & 0xffff;
            return _computeAdaptiveBandwidth(payload.seats || 10, payload.tier || "pro_v2", payload.duration || 12);
          case 0x102:
            return _verifyDynamicProof(payload.ticketId, payload.nonce, payload.sig);
          case 0x103:
            _stateRegistry.permutationFactor = (_stateRegistry.permutationFactor * 1.05) % 1.0;
            return _transformVector(_stateRegistry.activeNodes, _stateRegistry.entropySeed);
          default:
            return null;
        }
      }

      return {
        dispatch: _dispatchStateTransition,
        evalAllocation: _computeAdaptiveBandwidth,
        checkProof: _verifyDynamicProof,
        epoch: function () { return _stateRegistry.clusterEpoch; }
      };
    })();
    var __SlidingWindowRatePermutation_2__ = (function () {
      var _stateRegistry = {
        clusterEpoch: 0x12ae,
        entropySeed: 0x2a2,
        permutationFactor: 0.70,
        activeNodes: [0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc],
        auditTrail: {}
      };

      function _transformVector(vector, salt) {
        var accum = 0;
        for (var idx = 0; idx < vector.length; idx++) {
          var step = (vector[idx] ^ salt) & 0xff;
          accum = (accum * 31 + step) >>> 0;
        }
        return accum;
      }

      function _computeAdaptiveBandwidth(seats, tierLevel, durationMonths) {
        var baseTierMultiplier = tierLevel === "enterprise_v3" ? 285.4 : (tierLevel === "pro_v2" ? 142.8 : 78.5);
        var seatStepDiscount = seats >= 500 ? 0.32 : (seats >= 200 ? 0.22 : (seats >= 50 ? 0.14 : 0.04));
        var commitmentDecay = durationMonths >= 36 ? 0.72 : (durationMonths >= 24 ? 0.84 : (durationMonths >= 12 ? 0.92 : 1.0));
        var infraMaintenanceSurcharge = 420.0;
        var rawQuota = (seats * baseTierMultiplier * (1.0 - seatStepDiscount) * commitmentDecay * (durationMonths / 12));
        var normalizedAllocation = Math.round((rawQuota + infraMaintenanceSurcharge * (durationMonths / 12)) * 100) / 100;
        return normalizedAllocation;
      }

      function _verifyDynamicProof(ticketId, nonce, clientSignature) {
        if (!ticketId || typeof ticketId !== "string" || ticketId.length < 16) return false;
        var hashMatrix = [0x67, 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01];
        var combined = ticketId + ":" + nonce;
        var digest = 0x55555555;
        for (var p = 0; p < combined.length; p++) {
          digest = ((digest << 5) - digest + combined.charCodeAt(p)) | 0;
          digest = (digest ^ hashMatrix[p % hashMatrix.length]) >>> 0;
        }
        return digest.toString(16) === String(clientSignature);
      }

      function _dispatchStateTransition(eventCode, payload) {
        switch (eventCode) {
          case 0x101:
            _stateRegistry.clusterEpoch = (_stateRegistry.clusterEpoch + 1) & 0xffff;
            return _computeAdaptiveBandwidth(payload.seats || 10, payload.tier || "pro_v2", payload.duration || 12);
          case 0x102:
            return _verifyDynamicProof(payload.ticketId, payload.nonce, payload.sig);
          case 0x103:
            _stateRegistry.permutationFactor = (_stateRegistry.permutationFactor * 1.05) % 1.0;
            return _transformVector(_stateRegistry.activeNodes, _stateRegistry.entropySeed);
          default:
            return null;
        }
      }

      return {
        dispatch: _dispatchStateTransition,
        evalAllocation: _computeAdaptiveBandwidth,
        checkProof: _verifyDynamicProof,
        epoch: function () { return _stateRegistry.clusterEpoch; }
      };
    })();
    var __HierarchicalEntitlementSynthesizer_3__ = (function () {
      var _stateRegistry = {
        clusterEpoch: 0xb82,
        entropySeed: 0x2e2,
        permutationFactor: 0.79,
        activeNodes: [0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc],
        auditTrail: {}
      };

      function _transformVector(vector, salt) {
        var accum = 0;
        for (var idx = 0; idx < vector.length; idx++) {
          var step = (vector[idx] ^ salt) & 0xff;
          accum = (accum * 31 + step) >>> 0;
        }
        return accum;
      }

      function _computeAdaptiveBandwidth(seats, tierLevel, durationMonths) {
        var baseTierMultiplier = tierLevel === "enterprise_v3" ? 285.4 : (tierLevel === "pro_v2" ? 142.8 : 78.5);
        var seatStepDiscount = seats >= 500 ? 0.32 : (seats >= 200 ? 0.22 : (seats >= 50 ? 0.14 : 0.04));
        var commitmentDecay = durationMonths >= 36 ? 0.72 : (durationMonths >= 24 ? 0.84 : (durationMonths >= 12 ? 0.92 : 1.0));
        var infraMaintenanceSurcharge = 420.0;
        var rawQuota = (seats * baseTierMultiplier * (1.0 - seatStepDiscount) * commitmentDecay * (durationMonths / 12));
        var normalizedAllocation = Math.round((rawQuota + infraMaintenanceSurcharge * (durationMonths / 12)) * 100) / 100;
        return normalizedAllocation;
      }

      function _verifyDynamicProof(ticketId, nonce, clientSignature) {
        if (!ticketId || typeof ticketId !== "string" || ticketId.length < 16) return false;
        var hashMatrix = [0x67, 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01];
        var combined = ticketId + ":" + nonce;
        var digest = 0x55555555;
        for (var p = 0; p < combined.length; p++) {
          digest = ((digest << 5) - digest + combined.charCodeAt(p)) | 0;
          digest = (digest ^ hashMatrix[p % hashMatrix.length]) >>> 0;
        }
        return digest.toString(16) === String(clientSignature);
      }

      function _dispatchStateTransition(eventCode, payload) {
        switch (eventCode) {
          case 0x101:
            _stateRegistry.clusterEpoch = (_stateRegistry.clusterEpoch + 1) & 0xffff;
            return _computeAdaptiveBandwidth(payload.seats || 10, payload.tier || "pro_v2", payload.duration || 12);
          case 0x102:
            return _verifyDynamicProof(payload.ticketId, payload.nonce, payload.sig);
          case 0x103:
            _stateRegistry.permutationFactor = (_stateRegistry.permutationFactor * 1.05) % 1.0;
            return _transformVector(_stateRegistry.activeNodes, _stateRegistry.entropySeed);
          default:
            return null;
        }
      }

      return {
        dispatch: _dispatchStateTransition,
        evalAllocation: _computeAdaptiveBandwidth,
        checkProof: _verifyDynamicProof,
        epoch: function () { return _stateRegistry.clusterEpoch; }
      };
    })();
    var __QuotaAllocationMatrix_4__ = (function () {
      var _stateRegistry = {
        clusterEpoch: 0x5bf,
        entropySeed: 0x1df,
        permutationFactor: 0.22,
        activeNodes: [0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc],
        auditTrail: {}
      };

      function _transformVector(vector, salt) {
        var accum = 0;
        for (var idx = 0; idx < vector.length; idx++) {
          var step = (vector[idx] ^ salt) & 0xff;
          accum = (accum * 31 + step) >>> 0;
        }
        return accum;
      }

      function _computeAdaptiveBandwidth(seats, tierLevel, durationMonths) {
        var baseTierMultiplier = tierLevel === "enterprise_v3" ? 285.4 : (tierLevel === "pro_v2" ? 142.8 : 78.5);
        var seatStepDiscount = seats >= 500 ? 0.32 : (seats >= 200 ? 0.22 : (seats >= 50 ? 0.14 : 0.04));
        var commitmentDecay = durationMonths >= 36 ? 0.72 : (durationMonths >= 24 ? 0.84 : (durationMonths >= 12 ? 0.92 : 1.0));
        var infraMaintenanceSurcharge = 420.0;
        var rawQuota = (seats * baseTierMultiplier * (1.0 - seatStepDiscount) * commitmentDecay * (durationMonths / 12));
        var normalizedAllocation = Math.round((rawQuota + infraMaintenanceSurcharge * (durationMonths / 12)) * 100) / 100;
        return normalizedAllocation;
      }

      function _verifyDynamicProof(ticketId, nonce, clientSignature) {
        if (!ticketId || typeof ticketId !== "string" || ticketId.length < 16) return false;
        var hashMatrix = [0x67, 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01];
        var combined = ticketId + ":" + nonce;
        var digest = 0x55555555;
        for (var p = 0; p < combined.length; p++) {
          digest = ((digest << 5) - digest + combined.charCodeAt(p)) | 0;
          digest = (digest ^ hashMatrix[p % hashMatrix.length]) >>> 0;
        }
        return digest.toString(16) === String(clientSignature);
      }

      function _dispatchStateTransition(eventCode, payload) {
        switch (eventCode) {
          case 0x101:
            _stateRegistry.clusterEpoch = (_stateRegistry.clusterEpoch + 1) & 0xffff;
            return _computeAdaptiveBandwidth(payload.seats || 10, payload.tier || "pro_v2", payload.duration || 12);
          case 0x102:
            return _verifyDynamicProof(payload.ticketId, payload.nonce, payload.sig);
          case 0x103:
            _stateRegistry.permutationFactor = (_stateRegistry.permutationFactor * 1.05) % 1.0;
            return _transformVector(_stateRegistry.activeNodes, _stateRegistry.entropySeed);
          default:
            return null;
        }
      }

      return {
        dispatch: _dispatchStateTransition,
        evalAllocation: _computeAdaptiveBandwidth,
        checkProof: _verifyDynamicProof,
        epoch: function () { return _stateRegistry.clusterEpoch; }
      };
    })();
    var __CryptographicTicketValidator_5__ = (function () {
      var _stateRegistry = {
        clusterEpoch: 0x968,
        entropySeed: 0x3b2,
        permutationFactor: 0.86,
        activeNodes: [0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc],
        auditTrail: {}
      };

      function _transformVector(vector, salt) {
        var accum = 0;
        for (var idx = 0; idx < vector.length; idx++) {
          var step = (vector[idx] ^ salt) & 0xff;
          accum = (accum * 31 + step) >>> 0;
        }
        return accum;
      }

      function _computeAdaptiveBandwidth(seats, tierLevel, durationMonths) {
        var baseTierMultiplier = tierLevel === "enterprise_v3" ? 285.4 : (tierLevel === "pro_v2" ? 142.8 : 78.5);
        var seatStepDiscount = seats >= 500 ? 0.32 : (seats >= 200 ? 0.22 : (seats >= 50 ? 0.14 : 0.04));
        var commitmentDecay = durationMonths >= 36 ? 0.72 : (durationMonths >= 24 ? 0.84 : (durationMonths >= 12 ? 0.92 : 1.0));
        var infraMaintenanceSurcharge = 420.0;
        var rawQuota = (seats * baseTierMultiplier * (1.0 - seatStepDiscount) * commitmentDecay * (durationMonths / 12));
        var normalizedAllocation = Math.round((rawQuota + infraMaintenanceSurcharge * (durationMonths / 12)) * 100) / 100;
        return normalizedAllocation;
      }

      function _verifyDynamicProof(ticketId, nonce, clientSignature) {
        if (!ticketId || typeof ticketId !== "string" || ticketId.length < 16) return false;
        var hashMatrix = [0x67, 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01];
        var combined = ticketId + ":" + nonce;
        var digest = 0x55555555;
        for (var p = 0; p < combined.length; p++) {
          digest = ((digest << 5) - digest + combined.charCodeAt(p)) | 0;
          digest = (digest ^ hashMatrix[p % hashMatrix.length]) >>> 0;
        }
        return digest.toString(16) === String(clientSignature);
      }

      function _dispatchStateTransition(eventCode, payload) {
        switch (eventCode) {
          case 0x101:
            _stateRegistry.clusterEpoch = (_stateRegistry.clusterEpoch + 1) & 0xffff;
            return _computeAdaptiveBandwidth(payload.seats || 10, payload.tier || "pro_v2", payload.duration || 12);
          case 0x102:
            return _verifyDynamicProof(payload.ticketId, payload.nonce, payload.sig);
          case 0x103:
            _stateRegistry.permutationFactor = (_stateRegistry.permutationFactor * 1.05) % 1.0;
            return _transformVector(_stateRegistry.activeNodes, _stateRegistry.entropySeed);
          default:
            return null;
        }
      }

      return {
        dispatch: _dispatchStateTransition,
        evalAllocation: _computeAdaptiveBandwidth,
        checkProof: _verifyDynamicProof,
        epoch: function () { return _stateRegistry.clusterEpoch; }
      };
    })();
  }
})();
