/* Licensed commercial artifact. Copyright (c) 2026 AI-Shield Engineering Team. All rights reserved.
 * Product: AI-Shield Web Application | Build: 1.0.1
 * Protection: AES-256-GCM constant pool; synchronous standalone unlock (key included; not access control)
 * License & terms:    Security contact: 
 * Issuer key:    Public key (base64url): 
 * Verify with: ai-shield verify-manifest manifest.json --pubkey 
 * Runtime: synchronously unlocks 88 encrypted literals before application startup.
 */

;
var __SEC_POOL_c1587bee4c938f52 = (function () {
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
  var envelope = decode("_w53PkLlP6WfMe6GRNiDZ2ka8M3qTZvYUy0TJs8vFUwPzItvHZOVrt72Uzhj54mc-AHOSvxpwSIEvK5O_f9PMaqFuoWXx7qJYJmpboMfjkVMZpb9wyvDbGUIED8x4TiX997Uee1TwiFPdcWbl5PwiD0vBVOmu7ODgRohysATVoUnMl1xPPYEDLyX0HB8r8RBAdhunW4YxNnfPTm5aHYCDYUwZ_HzE-wo7RYa1p8AePuy8jkYyMKGwwELzw1vGIDsxW_QtN-C8WEp-c6BbLLO9cEZ37mxp4LTvfWQbIATrKquNkF4Cc1C4pOADButqTO6KpYrOvInEGbg7tsVKALOr0B9QKhhP_mPyYDadtTkwbt2Tp85aT4RmCRlasE5Ue2yrlgPFzp7MvGK2r4MWnyiuSFWm3XPlem6jbhgj6Lt4O9BjVKZvSNxWi3HWwEUsJuIcr2ZIXnsT86wBzPpEW1t9gY7bFRByz4pLGzorgHu2Q4UJQZ_XcU9SaKvxhN8bWKVEjxZ2huSoaJhtMp7eIaB3Bvzk9PsXF7jioFdeYXWTREfRlv1rV10NnKOgqc1O6y0Ad6tr9njpOTOnbv1p3rI3unNOx4-QcDdkGPKpMdJlDlLpwi0KymMA3cn71uuJqNlgjH7i2Ph3u-7ZWN5Y3xGDOfJoUShIjMF4KQ3-vcMeBlFElAiy1IdKL7B5Y9gp0adyp8Y1QqTEsxznaY7D-wJ2EuJAjg0WHMUvkoUjOYcFEWye3H0n_GMex0ytvGgNi87yFzJjynA_fQxOtgZQ5z74zDmxMhvTue4ewv4K5g9kQm7oNVL6OiEC4Njkg0g1PR1VpZayEiu9MilXlq5V_OgL7Mj_enWuyaCg5wtOonuvXorDWxHAO5XwaaFhxkfE17MQNLtSs2rkltYEjzVnyykdjZgncsocrQTnbqkorPvJtEo49zznLSUPpX5SO6XV8BHIWjkpHplehwsNnEx149ibmD7QnPebMsE2NHllzngcYfuOcD2_Lw0k87XbqhXiLouiQre6-vVhq_fF3X29HmpOCIuwwV_79Fti0Qnqhw7Y4g6vvKcMOulbpiUXOIhOq2gANMuIwDc74-nyYsWvtlayFBDGezv7sUUYVqJ9CCOu25q2vGd1iUSHExquPERwS0Z-hSmJ6FEJNVyOk9Ps-uNAKun_DE403gJSs7rQC_iP1bZKbxZy1wIc_1pz3wnPvKx-x8Y2uY7DFcuV89SgRs3GzE_mP9IxRgICadUHhqGr022lD_6pnyo-cDPnwU6USCICOABnb_zmTdQwHrGUomlvORJp3yEsUh6c0a_Dln6KGNDzJR85zVqIWZgPlpGEcVnD5JSc0Y1ycpOSPW_F1jdVhnt8plXMMJIUC-xQYuxs56t4PVCMlZ54extOKtqmWMD-ESWUhi55oycyLH8tjTg155KKXuhl-ay4kHSHllUtk6SoltGhPkrqnnK2yAMSooY7ZJc_SPkN8RHYf8-a0aSASHoj50ehSlndetxQqw9ra0J3D3zwUKaW3Ii3153BHEBdspB5pMvTLB0CVx-hljmpuy4hQF2yFvSlz9_RuCTt6XxaN9HixwG58e4JnXNYcyCp9z_G_EjL9nucreY2MBwvLpYhmHdM54haxkTokgoDpKsVSjws1H39DdZxP88lfjlJrTEE2JPuHD8KerqTNAyoLuRqH5pkA");
  var data = new Uint8Array(envelope.length - 12);
  data.set(envelope.subarray(28));
  data.set(envelope.subarray(12, 28), envelope.length - 28);
  var key = decode("PP0ngk7G8s_-OYOuMxzW3z5X6Rqi69R9EdVA2EWkTsA");
  var plaintext = __secAes.gcm(key, envelope.subarray(0, 12), new TextEncoder().encode('ai-shield: AES-256-GCM constant pool v1')).decrypt(data);
  key.fill(0);
  return JSON.parse(new TextDecoder().decode(plaintext));
} catch (cause) {
  var error = new Error('POOL_DECRYPT_FAILED: standalone pool authentication failed');
  error.code = 'POOL_DECRYPT_FAILED';
  throw error;
}
})();
var __SEC_UNLOCKED_c1587bee4c938f52 = true;

;
// Hero Sandbox Terminal Streamer (app-studio-landing Mode 2)
    let currentTabIndex = 0;
    let streamTimer = null;

    const sandboxRawTexts = [
      `# ILLUSTRATIVE TRANSCRIPT — no scan runs in this browser
$ ai-shield audit ./dist --report ./audit-report.json

The CLI inspects code patterns and writes a report.
Review flagged literals, module boundaries, and build artifacts.
A heuristic finding is not proof of an exploitable weakness.
A low score is not proof of resistance to reverse engineering.

NEXT: protect a copy of your build and compare its actual behavior.`,

      `# ILLUSTRATIVE TRANSCRIPT — not a live protection job
$ ai-shield protect ./dist --ext js --standalone --intensity bankrupt --inject-decoys

[✓] Standalone enables constant-pool encryption.
[✓] The AES-GCM pool unlocks synchronously before business code.
[✓] The decryption key is included in the protected output.

BOUNDARY: obfuscation and ciphertext integrity; not access control.
Keep authoritative secrets on a trusted server.
Validate exports, startup, data paths, and application behavior.`,

      `# ILLUSTRATIVE TRANSCRIPT — not a live license operation
$ ai-shield protect ./dist --ext js --entangle --key private-key.json --intensity bankrupt

Enterprise mode retains an Ed25519 license gate.
Configure the signed license and trusted key for your deployment.
Check valid, absent, expired, and invalid licenses in your application.

The standalone mode does not provide this authorization boundary.
No AI attack success rate or startup latency is claimed here.`,

      `# ILLUSTRATIVE TRANSCRIPT — substitute your trusted public key
$ ${'ai-shield'} verify-manifest dist/manifest.json --pubkey YOUR_PUBLIC_KEY --root ./dist

Verification checks the signed manifest and listed artifact hashes.
Obtain the trusted public key through an independent channel.
A successful check covers the artifacts at verification time.

This replay does not verify downloaded files or monitor runtime changes.
Download v1.0.1 and consult its release notes for acceptance scope.`
    ];

    function formatTerminalLine(line) {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      if (line.includes(__SEC_POOL_c1587bee4c938f52[0])) {
        return line.replace(__SEC_POOL_c1587bee4c938f52[1], __SEC_POOL_c1587bee4c938f52[2]);
      }
      if (line.includes(__SEC_POOL_c1587bee4c938f52[3]) || line.includes(__SEC_POOL_c1587bee4c938f52[4])) {
        return line.replace(/EXPOSED|CRITICAL/g, __SEC_POOL_c1587bee4c938f52[5]);
      }
      if (line.includes(__SEC_POOL_c1587bee4c938f52[6]) || line.includes(__SEC_POOL_c1587bee4c938f52[7])) {
        return line.replace(/UNPROTECTED|VULNERABLE/g, __SEC_POOL_c1587bee4c938f52[8]);
      }
      if (line.includes(__SEC_POOL_c1587bee4c938f52[9]) || line.includes(__SEC_POOL_c1587bee4c938f52[10]) || line.includes(__SEC_POOL_c1587bee4c938f52[11])) {
        return line.replace(/SECURED|OK|VALID/g, __SEC_POOL_c1587bee4c938f52[12]);
      }
      return line;
    }

    function streamTerminal(text, targetId) {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      if (streamTimer) clearInterval(streamTimer);
      const target = document.getElementById(targetId);
      target.innerHTML = __SEC_POOL_c1587bee4c938f52[13];
      const lines = text.split(__SEC_POOL_c1587bee4c938f52[14]);
      let lineIdx = __SEC_POOL_c1587bee4c938f52[15];

      streamTimer = setInterval(() => {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

        if (lineIdx < lines.length) {
          const formatted = formatTerminalLine(lines[lineIdx]);
          target.innerHTML += (lineIdx === __SEC_POOL_c1587bee4c938f52[16] ? __SEC_POOL_c1587bee4c938f52[17] : __SEC_POOL_c1587bee4c938f52[18]) + formatted;
          lineIdx++;
          target.scrollTop = target.scrollHeight;
        } else {
          clearInterval(streamTimer);
        }
      }, __SEC_POOL_c1587bee4c938f52[19]);
    }

    function switchSandboxTab(index) {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      currentTabIndex = index;
      for (let i = __SEC_POOL_c1587bee4c938f52[20]; i < __SEC_POOL_c1587bee4c938f52[21]; i++) {
        const tab = document.getElementById(__SEC_POOL_c1587bee4c938f52[22] + i);
        if (tab) tab.classList.toggle(__SEC_POOL_c1587bee4c938f52[23], i === index);
      }
      streamTerminal(sandboxRawTexts[index], __SEC_POOL_c1587bee4c938f52[24]);
    }

    function triggerSandboxRun() {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      streamTerminal(sandboxRawTexts[currentTabIndex], __SEC_POOL_c1587bee4c938f52[25]);
    }

    // Initialize sandbox
    switchSandboxTab(0);

    function copyHeroCmd() {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      const text = document.getElementById(__SEC_POOL_c1587bee4c938f52[26]).innerText;
      navigator.clipboard.writeText(text);
      const pill = document.querySelector(__SEC_POOL_c1587bee4c938f52[27]);
      pill.innerHTML = `<kbd>✓</kbd> Copied!`;
      setTimeout(() => { pill.innerHTML = `<kbd>⌘</kbd> <kbd>C</kbd> Copy`; }, __SEC_POOL_c1587bee4c938f52[28]);
    }

    // 16 Vectors Data (with weight, id, name, description)
    const vectors = [
      { id: "VEC-01", name: "Plaintext API Keys & Literals", desc: "Hardcoded API keys, auth headers, and secrets in AST", active: true, weight: 15 },
      { id: "VEC-02", name: "Plaintext Auth Function Names", desc: "Functions like checkLicense, verifyToken in callstack", active: true, weight: 10 },
      { id: "VEC-03", name: "Recognizable License Enums", desc: "Standard status strings like 'TRIAL_EXPIRED', 'LICENSED'", active: true, weight: 8 },
      { id: "VEC-04", name: "Unmasked Electron/Tauri IPC", desc: "Cleartext IPC channel names (ipcRenderer.invoke('license'))", active: true, weight: 14 },
      { id: "VEC-05", name: "Predictable State Machines", desc: "Linear boolean flags like isProUser = true in memory", active: true, weight: 10 },
      { id: "VEC-06", name: "Static AST Crypto Anchors", desc: "Fixed runtime decrypt function names (__SEC_DECRYPT__)", active: true, weight: 12 },
      { id: "VEC-07", name: "Unprotected WASM Signatures", desc: "Exported WebAssembly symbols revealing auth methods", active: false, weight: 6 },
      { id: "VEC-08", name: "Cleartext HTTP API Endpoints", desc: "Target endpoints visible in raw fetch/axios calls", active: true, weight: 10 },
      { id: "VEC-09", name: "Identifiable License Gateways", desc: "Single choke-point function guarding application boot", active: true, weight: 8 },
      { id: "VEC-10", name: "Linear License Control Flow", desc: "If-else check without tamper verification loops", active: true, weight: 8 },
      { id: "VEC-11", name: "Unprotected Device Fingerprinting", desc: "Plaintext MAC/UUID retrieval in client script", active: false, weight: 6 },
      { id: "VEC-12", name: "Missing Ed25519 Manifest", desc: "Absence of cryptographic build signing in CI/CD", active: true, weight: 10 },
      { id: "VEC-13", name: "Exposed Environment Configs", desc: "Bundled dotenv or configuration objects in bundle", active: false, weight: 8 },
      { id: "VEC-14", name: "Unmangled Storage Keys", desc: "Keys like 'auth_token' in localStorage/IndexedDB", active: true, weight: 7 },
      { id: "VEC-15", name: "Predictable Error Strings", desc: "Descriptive error codes assisting agent deobfuscation", active: true, weight: 6 },
      { id: "VEC-16", name: "Lack of Token Context Tarpits", desc: "Clean compact AST easily ingested within small LLM context", active: true, weight: 12 },
    ];

    function renderVectors() {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      const grid = document.getElementById(__SEC_POOL_c1587bee4c938f52[29]);
      grid.innerHTML = __SEC_POOL_c1587bee4c938f52[30];
      vectors.forEach((vec, idx) => {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

        const cell = document.createElement(__SEC_POOL_c1587bee4c938f52[31]);
        const statusClass = vec.active ? __SEC_POOL_c1587bee4c938f52[32] : __SEC_POOL_c1587bee4c938f52[33];
        cell.className = `matrix-cell ${statusClass}`;
        cell.onclick = () => toggleVector(idx);
        cell.innerHTML = `
          <div class="cell-header">
            <span class="cell-id">${vec.id}</span>
            <span class="cell-pill">${vec.active ? __SEC_POOL_c1587bee4c938f52[34] : __SEC_POOL_c1587bee4c938f52[35]}</span>
          </div>
          <div class="cell-name">${vec.name}</div>
          <div class="cell-desc">${vec.desc}</div>
        `;
        grid.appendChild(cell);
      });
      calculateRisk();
    }

    function toggleVector(idx) {
      vectors[idx].active = !vectors[idx].active;
      renderVectors();
    }

    // Instant Remediation animation (CleanFlow Pro self-healing sandbox pattern)
    function triggerInstantRemediation() {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      let delay = __SEC_POOL_c1587bee4c938f52[36];
      vectors.forEach((vec, idx) => {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

        if (vec.active) {
          setTimeout(() => {
            vec.active = false;
            renderVectors();
          }, delay);
          delay += __SEC_POOL_c1587bee4c938f52[37];
        }
      });
    }

    function resetAllVectors() {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      vectors.forEach((vec, idx) => {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

        vec.active = idx !== __SEC_POOL_c1587bee4c938f52[38] && idx !== __SEC_POOL_c1587bee4c938f52[39] && idx !== __SEC_POOL_c1587bee4c938f52[40];
      });
      renderVectors();
    }

    function calculateRisk() {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      let activeWeight = __SEC_POOL_c1587bee4c938f52[41];
      let totalWeight = __SEC_POOL_c1587bee4c938f52[42];
      let activeCount = __SEC_POOL_c1587bee4c938f52[43];
      vectors.forEach(v => {
        totalWeight += v.weight;
        if (v.active) {
          activeWeight += v.weight;
          activeCount++;
        }
      });

      const score = Math.round((activeWeight / totalWeight) * __SEC_POOL_c1587bee4c938f52[44]);
      const scorePct = score + __SEC_POOL_c1587bee4c938f52[45];
      document.getElementById(__SEC_POOL_c1587bee4c938f52[46]).innerText = scorePct;
      const bar = document.getElementById(__SEC_POOL_c1587bee4c938f52[47]);
      bar.style.width = scorePct;
      const pill = document.getElementById(__SEC_POOL_c1587bee4c938f52[48]);
      const color = score >= __SEC_POOL_c1587bee4c938f52[49] ? __SEC_POOL_c1587bee4c938f52[50] : score >= __SEC_POOL_c1587bee4c938f52[51] ? __SEC_POOL_c1587bee4c938f52[52] : __SEC_POOL_c1587bee4c938f52[53];
      pill.innerText = activeCount === __SEC_POOL_c1587bee4c938f52[54] ? __SEC_POOL_c1587bee4c938f52[55] : score >= __SEC_POOL_c1587bee4c938f52[56] ? __SEC_POOL_c1587bee4c938f52[57] : __SEC_POOL_c1587bee4c938f52[58];
      pill.style.color = color;
      bar.style.backgroundColor = color;
      document.getElementById(__SEC_POOL_c1587bee4c938f52[59]).innerHTML = `<span class="tabular">${activeCount}</span><span style="font-size:15px;color:var(--text-muted);"> / ${vectors.length}</span>`;
      document.getElementById(__SEC_POOL_c1587bee4c938f52[60]).innerHTML = `<span class="tabular">${activeWeight}</span><span style="font-size:15px;color:var(--text-muted);"> / ${totalWeight} points</span>`;
      document.getElementById(__SEC_POOL_c1587bee4c938f52[61]).innerHTML = `<span style="font-size:24px;">Not measured</span>`;
      document.getElementById(__SEC_POOL_c1587bee4c938f52[62]).innerText = activeCount === __SEC_POOL_c1587bee4c938f52[63]
        ? __SEC_POOL_c1587bee4c938f52[64]
        : __SEC_POOL_c1587bee4c938f52[65];
    }
    renderVectors();

    // Case Study Tabs Data
    const caseStudyContents = [
      `<span class="t-dim">// v1.0.1 acceptance: original and protected JavaScript were executed</span>

<span class="t-green">[✓] CommonJS</span> — three require() export patterns kept their results
<span class="t-green">[✓] ESM</span> — synchronous startup; the tested module returned 42
<span class="t-green">[✓] Syntax</span> — shorthand properties, static keys, closures, default parameters
<span class="t-green">[✓] Strings</span> — Unicode, hex escapes, surrogate pairs and conservative lone-surrogate handling
<span class="t-green">[✓] Directives</span> — shebang, top-level and function strict mode
<span class="t-green">[✓] Tamper check</span> — damaged ciphertext failed before business code

<span class="t-dim">External Microsoft Edge 156 + Acorn 8.15.0 / quote fixture:</span>
  10 seats: <span class="t-yellow">808</span> before and after protection
  23 seats: <span class="t-yellow">1857</span> before and after protection
  Chinese value: <span class="t-green">中A</span>; field names retained
  Multiple classic-script pools and ESM startup matched
  Reload restored the saved quote; final console: 0 errors / 0 warnings`,

      `<span class="t-dim">// v1.0.1 acceptance: original and packaged processes were executed</span>

<span class="t-green">[✓] Runtimes</span> — Node.js, Python, and a native process on Windows
<span class="t-green">[✓] Arguments</span> — spaces and Chinese text preserved
<span class="t-green">[✓] Process result</span> — the fixture exit code remained 23
<span class="t-green">[✓] Assets</span> — packaged files were readable
<span class="t-green">[✓] Working directory</span> — the caller's cwd was retained
<span class="t-green">[✓] Persistent state</span> — two launches advanced cwd data from 1 to 2

<span class="t-yellow">DATA DIRECTORY BOUNDARY</span>
Use cwd or an explicit stable directory for persistent data.
__dirname / __file__ point to temporary extracted application files.
If those files change, the loader keeps the directory and reports its path.
The next launch does not automatically reuse that directory.
Background child processes and self-updates remain unverified.`,

      `<span class="t-dim">// Recorded local Windows acceptance — 2026-11-07</span>
$ cargo test --workspace --locked
<span class="t-green">60 / 60 passed</span> — 52 existing tests + 4 JS E2E + 4 pack E2E

$ cargo build --workspace --release --locked
<span class="t-green">Build completed</span>

$ cargo test --release --locked --test js_e2e --test pack_e2e
<span class="t-green">8 / 8 passed</span> — release CLI and loader executed

<span class="t-yellow">SCOPE</span>
These results cover the tested fixtures and browser paths.
Windows x64 / Linux x64 musl / macOS arm64: 60 / 60 tests passed in release CI.\nEnd-user installation and OS trust prompts have not been accepted.
Performance and AI reverse-engineering resistance were not benchmarked.
No claim of universal compatibility, secret confidentiality, or an attack success rate.
See RELEASE-NOTES.md for the repair list and deployment boundaries.`
    ];

    function switchCaseStudy(idx) {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      document.getElementById(__SEC_POOL_c1587bee4c938f52[66]).classList.toggle(__SEC_POOL_c1587bee4c938f52[67], idx === __SEC_POOL_c1587bee4c938f52[68]);
      document.getElementById(__SEC_POOL_c1587bee4c938f52[69]).classList.toggle(__SEC_POOL_c1587bee4c938f52[70], idx === __SEC_POOL_c1587bee4c938f52[71]);
      document.getElementById(__SEC_POOL_c1587bee4c938f52[72]).classList.toggle(__SEC_POOL_c1587bee4c938f52[73], idx === __SEC_POOL_c1587bee4c938f52[74]);
      document.getElementById(__SEC_POOL_c1587bee4c938f52[75]).innerHTML = caseStudyContents[idx];
    }
    switchCaseStudy(0);

    // Dual-track Code Lens
    const codeAttacker = `<span class="t-dim">// Illustrative output sketch — abbreviated, not executable output</span>

<span class="t-coral">const</span> encryptedPool = <span class="t-green">"...AES-GCM ciphertext..."</span>;
<span class="t-coral">const</span> bundledKey = <span class="t-green">"...standalone key included..."</span>;

<span class="t-dim">// Optional generated control flow and decoy branches add analysis noise.</span>
<span class="t-dim">// They are not real authorization decisions.</span>

<span class="t-dim">// A client that can execute the code can inspect its runtime values.</span>
<span class="t-dim">// Keep authoritative secrets and access decisions on a trusted server.</span>`;

    const codeStandalone = `<span class="t-dim">// Standalone: no external license token is required</span>

$ ai-shield protect ./dist --ext js --standalone --intensity bankrupt

<span class="t-green">1.</span> Eligible constants are encrypted in the output.
<span class="t-green">2.</span> The bundled key unlocks the pool synchronously before business code.
<span class="t-green">3.</span> The application continues with its original module exports.

<span class="t-dim">// v1.0.1 tested CommonJS, Node ESM, and Edge startup paths.</span>
<span class="t-dim">// This mode offers obfuscation and ciphertext integrity, not access control.</span>
<span class="t-dim">// Startup cost depends on your bundle and has not been benchmarked here.</span>`;

    const codeClient = `<span class="t-dim">// Enterprise: configure a signed license and trusted verification key</span>

$ ai-shield protect ./dist --ext js --entangle --key private-key.json

<span class="t-green">1.</span> Enterprise mode retains the Ed25519 license gate.
<span class="t-green">2.</span> Configure the license input required by your runtime integration.
<span class="t-green">3.</span> Validate valid, absent, expired, and invalid license paths before release.

<span class="t-dim">// A license gate has a different role from standalone obfuscation.</span>
<span class="t-dim">// It does not make client code immune to reverse engineering.</span>
<span class="t-dim">// These steps are explanatory; this page does not run a license check.</span>`;

    function switchLens(view) {
; if (!__SEC_UNLOCKED_c1587bee4c938f52) { return 0x1000; }

      const btnAttacker = document.getElementById(__SEC_POOL_c1587bee4c938f52[76]);
      const btnStandalone = document.getElementById(__SEC_POOL_c1587bee4c938f52[77]);
      const btnClient = document.getElementById(__SEC_POOL_c1587bee4c938f52[78]);
      const codeBlock = document.getElementById(__SEC_POOL_c1587bee4c938f52[79]);

      btnAttacker.classList.toggle(__SEC_POOL_c1587bee4c938f52[80], view === __SEC_POOL_c1587bee4c938f52[81]);
      btnStandalone.classList.toggle(__SEC_POOL_c1587bee4c938f52[82], view === __SEC_POOL_c1587bee4c938f52[83]);
      btnClient.classList.toggle(__SEC_POOL_c1587bee4c938f52[84], view === __SEC_POOL_c1587bee4c938f52[85]);

      if (view === __SEC_POOL_c1587bee4c938f52[86]) {
        codeBlock.innerHTML = codeAttacker;
      } else if (view === __SEC_POOL_c1587bee4c938f52[87]) {
        codeBlock.innerHTML = codeStandalone;
      } else {
        codeBlock.innerHTML = codeClient;
      }
    }
    switchLens('attacker');


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
