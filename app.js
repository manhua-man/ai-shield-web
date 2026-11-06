/* Licensed commercial artifact. Copyright (c) 2026 AI-Shield Engineering Team. All rights reserved.
 * Product: AI-Shield Web Application | Build: 1.0.2
 * Protection: AES-256-GCM constant pool; synchronous standalone unlock (key included; not access control)
 * License & terms:    Security contact: 
 * Issuer key:    Public key (base64url): 
 * Verify with: ai-shield verify-manifest manifest.json --pubkey 
 * Runtime: synchronously unlocks 88 encrypted literals before application startup.
 */

;
var __SEC_POOL_50dc38fa78f9be67 = (function () {
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
  var envelope = decode("gjK271Me064i0xIXKL_O5JZM9GDA4rCgT_t8PWdhuWhS-OiLbfdb9uNZm94eMs5WiPzJOl0iTFp9cVI00wtNcQUMf9bvSdHqpM3xivqRjtHKzi6ULN42cYFgjsxCEg4ajA42k2oKEGTKXvYSgOA3hZbairjLhMVEzWZxDR16XortBvDbA1FPjMBbTodjXAxkNEoI3-E0A5BDAHZ7OPzb_iHr2q_gOHQghdPL-zD_DKpSBTd601yD-IZxspqKOcrCP4gscooyNBXGUtajZFWeJyO8sS270ZOCwqzl0IIEDblUtu0MmPAPa9PGNOxMkEXiPuVPshlVvPhkUY5907xbtlxhABULPX-D5rAHYfIHNOerxDFdEAAMyLd9IV9Yqj_C3l7YkJEYliZ5kJsl2NNVAq_uHCHKp2D4EcS3jeO2K-48TvkDKruNo5RwGWJuHC_yyaSTmPj3L3Wi-D74sYhG988SDSjijdrBTQY-DHcZR-HNBTe-tdbPVva5e0PHvFGdx9X-5uQd_xheXTgBhS6gGJ2fQ9dEjf__iM2uyAKvspWFgztMcTnJbISUEeWSWG-rLdw2DT1FfMI1G0m7-QhRYpzAEmZ-Nvm7qKhnZ4rt3om-INZyJGRZu9rqMAJS7W3IesQ4Y9iYqD7ldEnZY73Q3RTgPhA_JDlX-peDj8LKWNINHQmrCZqy-LHkVJ4E6LHhihPqVAcXZmc6WJs_bu9FYrO7RwNJLDpr9BkpRVdBMGuEzWKF-N3HT8F-x_jUpCUnlGL629N2vIBVOFPWA48DFZKAAOZki_5nxT1yzhhrV1ybY5VCMQsTyfULyBCA5QyAzIW0vidqQu77q8cfz8GyBVNa2A20demWgQwg5q1VWZ6blFThtMc4R-mTgSuxVlQSXov1wBlzyKlNEBi3nx3tjAiWUINnwUfsaxYj4iRUSWItjr4hGtg08XqTNp8Q7uOGaKLX2KxbnvIkCZNqojH0ST2LNWz813LEN4TrywNcB4gJ--rlsitz-TS7-9EbGvJ1tI7E4ic3-6EnICqrSCcwtUQz0hW17djMt8_5my4pPMM6nvCgIXsa6Gn4dFCYfuxu0rXGNlvmJFw7TGuyAM4XLncmgtDyJJihVnYcK_z1dDHZOXpON2XfaOEC_udpXVQ0VVXQUXRTWIN4eeIyg0hyugwEgW98UVcc-RmrZUERM0JzhKSBBZBcjXnNo4rXZa2pXWjPv70VxmLp6YD5Q09vzm6-ZEBw1uiJvvDI0TzGo5VNRlqEuGde2fI1UkU_8YQwInm5hdKpwgiwb4mEliYoasYLMcyi8Wd1gub--9aDbIUr_EdNU7Ob_Y-31U3ewL-NZZK34m6rYDSHvErNCuw41yBH6BZJqwex2mUi3XXmAxdm7UlX8Iom_4YPcm5qJmZVDCx8i-BFrfAAgYJe_JfwFZUaW69lvBu_rFb0XVubV1dMoRmZyTBrLCjxTbXo83FEAjq-OWlEjKpnSy3bpqKp9vEXDA33tnd2yk7boIekjWsX702W-oixO8MbSD59K3SZTZVA62PApryrTJ_kLD1w4zOnWUZ2rn_xOl72RAsC2S_0TmMN7xKbehw5s-zJ72IYzFa7_m4lNm_fKq5CcFyRm7odK3YOcYHk2N46hYylzjgcOlZDj1seDfRdRFXLDFk-H-Jy98OR8jySMhwTOC-1xekji9A5_w");
  var data = new Uint8Array(envelope.length - 12);
  data.set(envelope.subarray(28));
  data.set(envelope.subarray(12, 28), envelope.length - 28);
  var key = decode("lB9tUQWAI_hL98jcSs-i_3sLMsAWP1DIiz4Lp312_40");
  var plaintext = __secAes.gcm(key, envelope.subarray(0, 12), new TextEncoder().encode('ai-shield: AES-256-GCM constant pool v1')).decrypt(data);
  key.fill(0);
  return JSON.parse(new TextDecoder().decode(plaintext));
} catch (cause) {
  var error = new Error('POOL_DECRYPT_FAILED: standalone pool authentication failed');
  error.code = 'POOL_DECRYPT_FAILED';
  throw error;
}
})();
var __SEC_UNLOCKED_50dc38fa78f9be67 = true;

;
// Hero Sandbox Terminal Streamer (app-studio-landing Mode 2)
    let currentTabIndex = 0;
    let streamTimer = null;

    const sandboxRawTexts = [
      `# Windows PowerShell — run from the extracted directory
.\\ai-shield.exe protect .\\dist --ext js --standalone --intensity bankrupt --inject-decoys
.\\ai-shield.exe pack .\\application --entry main.js --out .\\protected-application.exe
.\\protected-application.exe

Keep ai-shield.exe and ai-shield-stub.exe in the same directory.
With a Windows PE loader, a missing .exe suffix is appended.
Existing .exe / .EXE stays unchanged; release.v1 becomes release.v1.exe.
Node.js and Python runtimes are not bundled.
This page shows commands; it does not execute them.`,

      `# Linux / macOS shell — run from the extracted directory
./ai-shield protect ./dist --ext js --standalone --intensity bankrupt --inject-decoys
./ai-shield pack ./application --entry main.js --out ./protected-application
./protected-application

Keep ai-shield and ai-shield-stub in the same directory.
The Unix loader keeps the requested name; it does not append .exe.
Preserve executable permissions when extracting.
Node.js and Python runtimes are not bundled; macOS binaries are not notarized.
This page shows commands; it does not execute them.`,

      `# Enterprise command example — Linux / macOS shell
./ai-shield protect ./dist --ext js --entangle --key private-key.json --intensity bankrupt

Enterprise mode retains an Ed25519 license gate.
Configure the signed license and trusted key for your deployment.
Check valid, absent, expired, and invalid licenses in your application.

The standalone mode does not provide this authorization boundary.
No AI attack success rate or startup latency is claimed here.`,

      `# Manifest command example — Linux / macOS shell
./${'ai-shield'} verify-manifest dist/manifest.json --pubkey YOUR_PUBLIC_KEY --root ./dist

Verification checks the signed manifest and listed artifact hashes.
Obtain the trusted public key through an independent channel.
A successful check covers the artifacts at verification time.

This replay does not verify downloaded files or monitor runtime changes.
Download v1.0.2 and consult its release notes for acceptance scope.`
    ];

    function formatTerminalLine(line) {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      if (line.includes(__SEC_POOL_50dc38fa78f9be67[0])) {
        return line.replace(__SEC_POOL_50dc38fa78f9be67[1], __SEC_POOL_50dc38fa78f9be67[2]);
      }
      if (line.includes(__SEC_POOL_50dc38fa78f9be67[3]) || line.includes(__SEC_POOL_50dc38fa78f9be67[4])) {
        return line.replace(/EXPOSED|CRITICAL/g, __SEC_POOL_50dc38fa78f9be67[5]);
      }
      if (line.includes(__SEC_POOL_50dc38fa78f9be67[6]) || line.includes(__SEC_POOL_50dc38fa78f9be67[7])) {
        return line.replace(/UNPROTECTED|VULNERABLE/g, __SEC_POOL_50dc38fa78f9be67[8]);
      }
      if (line.includes(__SEC_POOL_50dc38fa78f9be67[9]) || line.includes(__SEC_POOL_50dc38fa78f9be67[10]) || line.includes(__SEC_POOL_50dc38fa78f9be67[11])) {
        return line.replace(/SECURED|OK|VALID/g, __SEC_POOL_50dc38fa78f9be67[12]);
      }
      return line;
    }

    function streamTerminal(text, targetId) {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      if (streamTimer) clearInterval(streamTimer);
      const target = document.getElementById(targetId);
      target.innerHTML = __SEC_POOL_50dc38fa78f9be67[13];
      const lines = text.split(__SEC_POOL_50dc38fa78f9be67[14]);
      let lineIdx = __SEC_POOL_50dc38fa78f9be67[15];

      streamTimer = setInterval(() => {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

        if (lineIdx < lines.length) {
          const formatted = formatTerminalLine(lines[lineIdx]);
          target.innerHTML += (lineIdx === __SEC_POOL_50dc38fa78f9be67[16] ? __SEC_POOL_50dc38fa78f9be67[17] : __SEC_POOL_50dc38fa78f9be67[18]) + formatted;
          lineIdx++;
          target.scrollTop = target.scrollHeight;
        } else {
          clearInterval(streamTimer);
        }
      }, __SEC_POOL_50dc38fa78f9be67[19]);
    }

    function switchSandboxTab(index) {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      currentTabIndex = index;
      for (let i = __SEC_POOL_50dc38fa78f9be67[20]; i < __SEC_POOL_50dc38fa78f9be67[21]; i++) {
        const tab = document.getElementById(__SEC_POOL_50dc38fa78f9be67[22] + i);
        if (tab) tab.classList.toggle(__SEC_POOL_50dc38fa78f9be67[23], i === index);
      }
      streamTerminal(sandboxRawTexts[index], __SEC_POOL_50dc38fa78f9be67[24]);
    }

    function triggerSandboxRun() {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      streamTerminal(sandboxRawTexts[currentTabIndex], __SEC_POOL_50dc38fa78f9be67[25]);
    }

    // Initialize sandbox
    switchSandboxTab(0);

    function copyHeroCmd() {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      const text = document.getElementById(__SEC_POOL_50dc38fa78f9be67[26]).innerText;
      navigator.clipboard.writeText(text);
      const pill = document.querySelector(__SEC_POOL_50dc38fa78f9be67[27]);
      pill.innerHTML = `<kbd>✓</kbd> Copied!`;
      setTimeout(() => { pill.innerHTML = `<kbd>⌘</kbd> <kbd>C</kbd> Copy`; }, __SEC_POOL_50dc38fa78f9be67[28]);
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
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      const grid = document.getElementById(__SEC_POOL_50dc38fa78f9be67[29]);
      grid.innerHTML = __SEC_POOL_50dc38fa78f9be67[30];
      vectors.forEach((vec, idx) => {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

        const cell = document.createElement(__SEC_POOL_50dc38fa78f9be67[31]);
        const statusClass = vec.active ? __SEC_POOL_50dc38fa78f9be67[32] : __SEC_POOL_50dc38fa78f9be67[33];
        cell.className = `matrix-cell ${statusClass}`;
        cell.onclick = () => toggleVector(idx);
        cell.innerHTML = `
          <div class="cell-header">
            <span class="cell-id">${vec.id}</span>
            <span class="cell-pill">${vec.active ? __SEC_POOL_50dc38fa78f9be67[34] : __SEC_POOL_50dc38fa78f9be67[35]}</span>
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
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      let delay = __SEC_POOL_50dc38fa78f9be67[36];
      vectors.forEach((vec, idx) => {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

        if (vec.active) {
          setTimeout(() => {
            vec.active = false;
            renderVectors();
          }, delay);
          delay += __SEC_POOL_50dc38fa78f9be67[37];
        }
      });
    }

    function resetAllVectors() {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      vectors.forEach((vec, idx) => {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

        vec.active = idx !== __SEC_POOL_50dc38fa78f9be67[38] && idx !== __SEC_POOL_50dc38fa78f9be67[39] && idx !== __SEC_POOL_50dc38fa78f9be67[40];
      });
      renderVectors();
    }

    function calculateRisk() {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      let activeWeight = __SEC_POOL_50dc38fa78f9be67[41];
      let totalWeight = __SEC_POOL_50dc38fa78f9be67[42];
      let activeCount = __SEC_POOL_50dc38fa78f9be67[43];
      vectors.forEach(v => {
        totalWeight += v.weight;
        if (v.active) {
          activeWeight += v.weight;
          activeCount++;
        }
      });

      const score = Math.round((activeWeight / totalWeight) * __SEC_POOL_50dc38fa78f9be67[44]);
      const scorePct = score + __SEC_POOL_50dc38fa78f9be67[45];
      document.getElementById(__SEC_POOL_50dc38fa78f9be67[46]).innerText = scorePct;
      const bar = document.getElementById(__SEC_POOL_50dc38fa78f9be67[47]);
      bar.style.width = scorePct;
      const pill = document.getElementById(__SEC_POOL_50dc38fa78f9be67[48]);
      const color = score >= __SEC_POOL_50dc38fa78f9be67[49] ? __SEC_POOL_50dc38fa78f9be67[50] : score >= __SEC_POOL_50dc38fa78f9be67[51] ? __SEC_POOL_50dc38fa78f9be67[52] : __SEC_POOL_50dc38fa78f9be67[53];
      pill.innerText = activeCount === __SEC_POOL_50dc38fa78f9be67[54] ? __SEC_POOL_50dc38fa78f9be67[55] : score >= __SEC_POOL_50dc38fa78f9be67[56] ? __SEC_POOL_50dc38fa78f9be67[57] : __SEC_POOL_50dc38fa78f9be67[58];
      pill.style.color = color;
      bar.style.backgroundColor = color;
      document.getElementById(__SEC_POOL_50dc38fa78f9be67[59]).innerHTML = `<span class="tabular">${activeCount}</span><span style="font-size:15px;color:var(--text-muted);"> / ${vectors.length}</span>`;
      document.getElementById(__SEC_POOL_50dc38fa78f9be67[60]).innerHTML = `<span class="tabular">${activeWeight}</span><span style="font-size:15px;color:var(--text-muted);"> / ${totalWeight} points</span>`;
      document.getElementById(__SEC_POOL_50dc38fa78f9be67[61]).innerHTML = `<span style="font-size:24px;">Not measured</span>`;
      document.getElementById(__SEC_POOL_50dc38fa78f9be67[62]).innerText = activeCount === __SEC_POOL_50dc38fa78f9be67[63]
        ? __SEC_POOL_50dc38fa78f9be67[64]
        : __SEC_POOL_50dc38fa78f9be67[65];
    }
    renderVectors();

    // Case Study Tabs Data
    const caseStudyContents = [
      `<span class="t-dim">// v1.0.2: freshly downloaded public CLI; original vs. protected JavaScript</span>

<span class="t-green">[✓] CommonJS</span> — exports and consumer results matched
<span class="t-green">[✓] ESM</span> — result 42 and strict-mode behavior matched
<span class="t-green">[✓] Values</span> — property keys, regex behavior, Chinese and emoji strings retained
<span class="t-green">[✓] Edge 156</span> — multiple pools, invalid-input handling and saved state matched

<span class="t-dim">Current quote scenarios, before and after protection:</span>
  10 seats / starter / 1 year: <span class="t-yellow">808</span>
  23 seats / pro / 3 years: <span class="t-yellow">2208</span>
  100 seats / enterprise / 3 years: <span class="t-yellow">15600</span>
  Reload restored the saved quote; no browser errors recorded

<span class="t-dim">These are v1.0.2 consumer scenarios. The historical v1.0.1 fixture used</span>
<span class="t-dim">different inputs; its 808 / 1857 results are retained in the release notes.</span>`,

      `<span class="t-dim">// v1.0.2: public Windows CLI and loader; isolated packaged applications</span>

<span class="t-green">[✓] Direct PowerShell launch</span> — no filename workaround
  protected-application.exe → protected-application.exe
  protected-legacy          → protected-legacy.exe
  my application.v1         → my application.v1.exe
  My Application.v1.EXE      → My Application.v1.EXE

<span class="t-green">[✓] Node and protect-then-pack</span> — imports, UTF-8 assets, arguments, stdin,
stdout/stderr, exit code 23 and cwd state from 1 to 2 matched the baseline.
Each deployment folder contained only its executable; source files were unavailable.
Installed Node remained a prerequisite.

<span class="t-yellow">STRICT CHECKS: 160 / 162</span>
Two raw Python stderr checks differed because ordinary imports created __pycache__.
The loader retained the extraction directory and emitted its documented notice.
Caches were not suppressed and stderr was not filtered. Python business behavior
matched. No unresolved functional failures remained in the tested paths.
This is not identical raw output in every case.

<span class="t-yellow">DATA DIRECTORY BOUNDARY</span>
Use cwd or an explicit stable directory for persistent data.
Changed extraction directories are retained, but not reused on the next launch.
Node/Python runtimes are not bundled. Background children and self-updates remain unverified.`,

      `<span class="t-dim">// v1.0.2 release CI and public delivery verification — 2026-11-07</span>

<span class="t-green">61 / 61 tests per platform</span>
Windows x64, Linux x64 musl, macOS arm64
52 unit tests + 4 JavaScript E2E + 5 packaging E2E, including the real-launch regression
Source revision: 54d53a4e2d10a4c297dfb39e1e4c9efd19e92dc6

<span class="t-green">Public downloads verified</span>
Three platform archives + SHA256SUMS.txt matched CI artifacts byte-for-byte.
Archive audit: CLI, loader and four documentation/metadata files; no core source.
Windows ZIP SHA-256:
2157ed607999462196590f228933f5f1decfd73a0a1ea85048c89417503dcdcf

<span class="t-green">Published website checked in external Edge</span>
Platform commands rendered; 390px viewport / 390px document; no browser errors.

<span class="t-yellow">SCOPE</span>
Packaging: 160 / 162 strict checks; two documented Python stderr notices.
No unresolved functional failures in the tested paths. OS trust prompts,
macOS notarization, background children and self-updates are outside acceptance.
Performance and AI reverse-engineering resistance were not benchmarked.

<span class="t-dim">Historical v1.0.1: 60 / 60 CI tests per platform and 8 / 8 local release</span>
<span class="t-dim">E2E tests. Those earlier results are separate from this v1.0.2 acceptance.</span>
See RELEASE-NOTES.md for the full record and deployment boundaries.`
    ];

    function switchCaseStudy(idx) {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      document.getElementById(__SEC_POOL_50dc38fa78f9be67[66]).classList.toggle(__SEC_POOL_50dc38fa78f9be67[67], idx === __SEC_POOL_50dc38fa78f9be67[68]);
      document.getElementById(__SEC_POOL_50dc38fa78f9be67[69]).classList.toggle(__SEC_POOL_50dc38fa78f9be67[70], idx === __SEC_POOL_50dc38fa78f9be67[71]);
      document.getElementById(__SEC_POOL_50dc38fa78f9be67[72]).classList.toggle(__SEC_POOL_50dc38fa78f9be67[73], idx === __SEC_POOL_50dc38fa78f9be67[74]);
      document.getElementById(__SEC_POOL_50dc38fa78f9be67[75]).innerHTML = caseStudyContents[idx];
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

    const codeStandalone = `<span class="t-dim">// Standalone: Linux / macOS command example; no external license token required</span>

./ai-shield protect ./dist --ext js --standalone --intensity bankrupt

<span class="t-green">1.</span> Eligible constants are encrypted in the output.
<span class="t-green">2.</span> The bundled key unlocks the pool synchronously before business code.
<span class="t-green">3.</span> The application continues with its original module exports.

<span class="t-dim">// v1.0.2 public CLI output was checked in CommonJS, Node ESM, and Edge paths.</span>
<span class="t-dim">// This mode offers obfuscation and ciphertext integrity, not access control.</span>
<span class="t-dim">// Startup cost depends on your bundle and has not been benchmarked here.</span>`;

    const codeClient = `<span class="t-dim">// Enterprise: Linux / macOS command example; configure a signed license and trusted key</span>

./ai-shield protect ./dist --ext js --entangle --key private-key.json

<span class="t-green">1.</span> Enterprise mode retains the Ed25519 license gate.
<span class="t-green">2.</span> Configure the license input required by your runtime integration.
<span class="t-green">3.</span> Validate valid, absent, expired, and invalid license paths before release.

<span class="t-dim">// A license gate has a different role from standalone obfuscation.</span>
<span class="t-dim">// It does not make client code immune to reverse engineering.</span>
<span class="t-dim">// These steps are explanatory; this page does not run a license check.</span>`;

    function switchLens(view) {
; if (!__SEC_UNLOCKED_50dc38fa78f9be67) { return 0x1000; }

      const btnAttacker = document.getElementById(__SEC_POOL_50dc38fa78f9be67[76]);
      const btnStandalone = document.getElementById(__SEC_POOL_50dc38fa78f9be67[77]);
      const btnClient = document.getElementById(__SEC_POOL_50dc38fa78f9be67[78]);
      const codeBlock = document.getElementById(__SEC_POOL_50dc38fa78f9be67[79]);

      btnAttacker.classList.toggle(__SEC_POOL_50dc38fa78f9be67[80], view === __SEC_POOL_50dc38fa78f9be67[81]);
      btnStandalone.classList.toggle(__SEC_POOL_50dc38fa78f9be67[82], view === __SEC_POOL_50dc38fa78f9be67[83]);
      btnClient.classList.toggle(__SEC_POOL_50dc38fa78f9be67[84], view === __SEC_POOL_50dc38fa78f9be67[85]);

      if (view === __SEC_POOL_50dc38fa78f9be67[86]) {
        codeBlock.innerHTML = codeAttacker;
      } else if (view === __SEC_POOL_50dc38fa78f9be67[87]) {
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
