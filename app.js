/* Licensed commercial artifact. Copyright (c) 2026 AI-Shield Engineering Team. All rights reserved.
 * Product: AI-Shield Web Application | Build: 1.0.0
 * Protection: none in this file (header only; no constant pool was emitted)
 * License & terms:    Security contact: 
 * Issuer key:    Public key (base64url): 
 * Verify with: ai-shield verify-manifest manifest.json --pubkey 
 */

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

﻿    // Hero Sandbox Terminal Streamer (app-studio-landing Mode 2)
    let currentTabIndex = 0;
    let streamTimer = null;

    const sandboxRawTexts = [
      `ai-shield audit ./src --report ./audit-report.json

[✓] AST Scanning Complete: 24 JavaScript/TypeScript modules analyzed.
--------------------------------------------------------------------------------
VECTOR ID | RISK VECTOR NAME                   | SEVERITY | STATUS
--------------------------------------------------------------------------------
VEC-01    | Plaintext API Keys & Literals      | CRITICAL | EXPOSED (14 occurrences)
VEC-02    | Plaintext Cryptographic Functions  | HIGH     | EXPOSED (6 calls found)
VEC-04    | Unmasked Electron/Tauri IPC        | CRITICAL | EXPOSED (window.ipcRenderer)
VEC-06    | Static AST Cryptographic Anchors   | HIGH     | EXPOSED (__SEC_DECRYPT__)
VEC-12    | Missing Ed25519 Manifest Signature | MEDIUM   | UNPROTECTED
VEC-16    | Lack of Token Context Tarpits      | HIGH     | VULNERABLE (Plain CFG)
--------------------------------------------------------------------------------
OVERALL AI EXPOSURE SCORE: 87.5% (CRITICAL)
ESTIMATED ATTACKER COST:   $0.03 (4,820 tokens, REA agent breach in ~30s)
RECOMMENDATION: Run 'ai-shield protect --standalone --intensity bankrupt'`,

      `ai-shield protect ./dist --ext js,ts --standalone --intensity bankrupt --inject-decoys

[✓] Mode: Standalone Zero-Touch Shield (Zero code changes / no license keys needed)
[✓] Algorithmic Token Tarpit: Generated 364 KB recursive control lattice.
[✓] Decoy Honeypots Injected: 3 plausible false authentication gateways.
[✓] AST Indirection Harness: Static runtime anchors eradicated.
[✓] Self-Unsealing Constants: AES-256-GCM pool auto-unseals at bundle load in 0.72ms.
--------------------------------------------------------------------------------
PROTECTION STATUS: SECURED | Total AST Bloat: 368 KB | Cold Overhead: 0.72ms
[✓] Output is 100% drop-in runnable in any Browser, Node.js, Electron, or Tauri app.`,

      `ai-shield protect ./dist --ext js,ts --entangle --key private-key.json \\
  --vendor "Enterprise Security" \\
  --intensity bankrupt \\
  --indirection-harness \\
  --inject-decoys

[✓] Mode: Enterprise Cryptographic DRM (Fail-closed authorization gate)
[✓] Key Authority Loaded: Ed25519 Key ID: 7e0b2a9f (fingerprint verified)
[✓] AES-256-GCM Entanglement: 48 sensitive literals extracted to pool.
[✓] Per-file CEK Derivation: HMAC-SHA256 applied per module.
[✓] Algorithmic Token Tarpit: Generated 362 KB recursive control lattice.
[✓] Decoy Honeypots Injected: 3 plausible false authentication gateways.
[✓] Fail-Closed Enforcement: Halts with LICENSE_MISSING if token absent.
--------------------------------------------------------------------------------
PROTECTION STATUS: ENTERPRISE SECURED | Authorized clients unlock via signed token.`,

      `ai-shield verify--manifest dist/manifest.json \\
  --pubkey "x5k8M9A0vW...4L9" \\
  --root ./dist \\
  --expect-fp "SHA256:7e0b2a9f38c4..."

[✓] Manifest Signature: Ed25519 VALID
[✓] Out-of-Band Fingerprint: MATCHED (SHA256:7e0b2a9f38c4...)
[✓] File Integrity Check (32 files):
  - dist/app.bundle.js           [SHA-256: 4a2f8c...] OK
  - dist/vendor.bundle.js        [SHA-256: 9b1d0e...] OK
  - dist/worker.js               [SHA-256: e3c71a...] OK
--------------------------------------------------------------------------------
STATUS: ATTESTATION VERIFIED. Zero byte-tamper detected.`
    ];

    function formatTerminalLine(line) {
      if (line.includes('[✓]')) {
        return line.replace('[✓]', '<span class="t-green">[✓]</span>');
      }
      if (line.includes('EXPOSED') || line.includes('CRITICAL')) {
        return line.replace(/EXPOSED|CRITICAL/g, '<span class="t-coral">$&</span>');
      }
      if (line.includes('UNPROTECTED') || line.includes('VULNERABLE')) {
        return line.replace(/UNPROTECTED|VULNERABLE/g, '<span class="t-yellow">$&</span>');
      }
      if (line.includes('SECURED') || line.includes('OK') || line.includes('VALID')) {
        return line.replace(/SECURED|OK|VALID/g, '<span class="t-green">$&</span>');
      }
      return line;
    }

    function streamTerminal(text, targetId) {
      if (streamTimer) clearInterval(streamTimer);
      const target = document.getElementById(targetId);
      target.innerHTML = '';
      const lines = text.split('\n');
      let lineIdx = 0;

      streamTimer = setInterval(() => {
        if (lineIdx < lines.length) {
          const formatted = formatTerminalLine(lines[lineIdx]);
          target.innerHTML += (lineIdx === 0 ? '' : '\n') + formatted;
          lineIdx++;
          target.scrollTop = target.scrollHeight;
        } else {
          clearInterval(streamTimer);
        }
      }, 25);
    }

    function switchSandboxTab(index) {
      currentTabIndex = index;
      for (let i = 0; i < 4; i++) {
        const tab = document.getElementById('termTab' + i);
        if (tab) tab.classList.toggle('active', i === index);
      }
      streamTerminal(sandboxRawTexts[index], 'sandboxTerminalOutput');
    }

    function triggerSandboxRun() {
      streamTerminal(sandboxRawTexts[currentTabIndex], 'sandboxTerminalOutput');
    }

    // Initialize sandbox
    switchSandboxTab(0);

    function copyHeroCmd() {
      const text = document.getElementById('cliText').innerText;
      navigator.clipboard.writeText(text);
      const pill = document.querySelector('.copy-pill');
      pill.innerHTML = `<kbd>✓</kbd> Copied!`;
      setTimeout(() => { pill.innerHTML = `<kbd>⌘</kbd> <kbd>C</kbd> Copy`; }, 2000);
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
      const grid = document.getElementById('vectorGrid');
      grid.innerHTML = '';
      vectors.forEach((vec, idx) => {
        const cell = document.createElement('div');
        const statusClass = vec.active ? 'active' : 'remediated';
        cell.className = `matrix-cell ${statusClass}`;
        cell.onclick = () => toggleVector(idx);
        cell.innerHTML = `
          <div class="cell-header">
            <span class="cell-id">${vec.id}</span>
            <span class="cell-pill">${vec.active ? 'EXPOSED' : 'SHIELDED'}</span>
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
      let delay = 0;
      vectors.forEach((vec, idx) => {
        if (vec.active) {
          setTimeout(() => {
            vec.active = false;
            renderVectors();
          }, delay);
          delay += 40;
        }
      });
    }

    function resetAllVectors() {
      vectors.forEach((vec, idx) => {
        vec.active = idx !== 6 && idx !== 10 && idx !== 12;
      });
      renderVectors();
    }

    function calculateRisk() {
      let activeWeight = 0;
      let totalWeight = 0;
      vectors.forEach(v => {
        totalWeight += v.weight;
        if (v.active) activeWeight += v.weight;
      });

      const score = Math.round((activeWeight / totalWeight) * 100);
      const scorePct = score + "%";
      
      document.getElementById('exposureScorePct').innerText = scorePct;
      const bar = document.getElementById('exposureBar');
      bar.style.width = scorePct;

      const pill = document.getElementById('threatLevelPill');
      const likelihood = document.getElementById('crackLikelihood');
      const tokenCost = document.getElementById('tokenCost');
      const dollarCost = document.getElementById('dollarCost');
      const analysis = document.getElementById('calcAnalysis');

      if (score >= 70) {
        pill.innerText = "CRITICAL";
        pill.style.color = "#ef4444";
        bar.style.backgroundColor = "#ef4444";
        likelihood.innerHTML = `<span class="tabular">100</span><span style="font-size:15px;color:var(--text-muted);">%</span>`;
        tokenCost.innerHTML = `<span class="tabular">4,820</span><span style="font-size:15px;color:var(--text-muted);">tokens</span>`;
        dollarCost.innerHTML = `<span style="font-size:18px;">$</span><span class="tabular">0.03</span>`;
        dollarCost.style.color = "var(--accent-coral)";
        analysis.innerText = "Critical Exposure: Frontier agents (REA, Claude Code) reconstruct AST and extract all secrets in seconds.";
      } else if (score >= 35) {
        pill.innerText = "MODERATE";
        pill.style.color = "var(--accent-yellow)";
        bar.style.backgroundColor = "var(--accent-yellow)";
        likelihood.innerHTML = `<span class="tabular">64</span><span style="font-size:15px;color:var(--text-muted);">%</span>`;
        tokenCost.innerHTML = `<span class="tabular">42,500</span><span style="font-size:15px;color:var(--text-muted);">tokens</span>`;
        dollarCost.innerHTML = `<span style="font-size:18px;">$</span><span class="tabular">0.45</span>`;
        dollarCost.style.color = "var(--accent-yellow)";
        analysis.innerText = "Partial exposure: Agent requires iterative prompt loops but can still bypass linear authentication gates.";
      } else if (score > 10) {
        pill.innerText = "DEFENDED";
        pill.style.color = "var(--accent-blue)";
        bar.style.backgroundColor = "var(--accent-blue)";
        likelihood.innerHTML = `<span class="tabular">4.2</span><span style="font-size:15px;color:var(--text-muted);">%</span>`;
        tokenCost.innerHTML = `<span class="tabular">185,000</span><span style="font-size:15px;color:var(--text-muted);">tokens</span>`;
        dollarCost.innerHTML = `<span style="font-size:18px;">$</span><span class="tabular">3.80</span>`;
        dollarCost.style.color = "var(--accent-blue)";
        analysis.innerText = "Well fortified: High agent hallucination rate; constant pools remain strongly encrypted under AES-256-GCM.";
      } else {
        pill.innerText = "BANKRUPT";
        pill.style.color = "var(--accent-green)";
        bar.style.backgroundColor = "var(--accent-green)";
        likelihood.innerHTML = `<span class="tabular">0.0</span><span style="font-size:15px;color:var(--text-muted);">%</span>`;
        tokenCost.innerHTML = `<span class="tabular">350,000+</span><span style="font-size:15px;color:var(--text-muted);">tokens</span>`;
        dollarCost.innerHTML = `<span style="font-size:18px;">$</span><span class="tabular">18.50+ (OOM)</span>`;
        dollarCost.style.color = "var(--accent-green)";
        analysis.innerText = "Bankrupt Shielding: Algorithmic tarpits exhaust LLM context window. Zero secrets recovered (0/5 REA crack rate).";
      }
    }
    renderVectors();

    // Case Study Tabs Data
    const caseStudyContents = [
      `<span class="t-dim">// === 1. Original Source: Real-world Day.js (45k★) + Financial Settlement Engine ===</span>
<span class="t-dim">// Vulnerability: Cleartext rates, multipliers, salt hashes, and date formatting tokens exposed in plain AST</span>

<span class="t-coral">const</span> dayjs = require(<span class="t-green">"./dayjs.min.js"</span>);

<span class="t-blue">function</span> calculateSettlement(account) {
  <span class="t-coral">const</span> cutoffDate = dayjs(<span class="t-green">"2026-11-01"</span>).add(<span class="t-yellow">30</span>, <span class="t-green">"day"</span>).format(<span class="t-green">"YYYY-MM-DD"</span>);
  <span class="t-coral">const</span> baseRate = <span class="t-yellow">85</span>;
  <span class="t-coral">const</span> surchargeTier = <span class="t-green">"enterprise_tier_a"</span>;
  <span class="t-coral">const</span> multiplier = surchargeTier === <span class="t-green">"enterprise_tier_a"</span> ? <span class="t-yellow">1.5</span> : <span class="t-yellow">1.0</span>;
  <span class="t-coral">const</span> calculatedFee = (account.activeSeats * baseRate * multiplier) - account.discount;

  <span class="t-coral">return</span> {
    accountUuid: account.uuid,
    calculatedFee,
    nextBillingCycle: cutoffDate,
    settlementHash: <span class="t-green">"sha256-secret-settlement-salt-9942"</span>
  };
}

<span class="t-coral">const</span> sample = { uuid: <span class="t-green">"acc_990142"</span>, activeSeats: <span class="t-yellow">30</span>, discount: <span class="t-yellow">0</span> };
console.log(JSON.stringify(calculateSettlement(sample)));`,

      `<span class="t-dim">// === 2. Shielded Bundle: ai-shield protect --standalone --intensity bankrupt ===</span>
<span class="t-dim">// Zero Plaintext Strings. Zero Secret Salts. Regex Flags Preserved. 364 KB Context-Busting Lattice</span>

<span class="t-coral">const</span> __SEC_POOL = <span class="t-green">"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855..."</span>;
<span class="t-coral">const</span> __SEC_KEY = <span class="t-green">"7e0b2a9f38c414..."</span>; <span class="t-muted">// Self-unsealing AES-256-GCM runtime</span>

<span class="t-dim">// Algorithmic Context Tarpit: Burns 200,000+ LLM tokens if agent attempts traversal</span>
<span class="t-blue">function</span> _0x8f2a(α, β, γ) {
  <span class="t-coral">var</span> _0x2c = [0x9e37, 0x79b9];
  <span class="t-coral">return</span> α <= 0 ? (β ^ γ) : _0x8f2a(α - 1, (β + _0x2c[0]), (γ ^ _0x2c[1]));
}

<span class="t-dim">// Deceptive Honeypot Gate: Traps REA agents into hallucinating false bypasses</span>
<span class="t-blue">function</span> verifyMasterBypass(token) {
  <span class="t-coral">if</span> (token === <span class="t-green">"MASTER_DEV_OVERRIDE"</span>) <span class="t-coral">return</span> { status: <span class="t-green">"UNLOCKED"</span> };
  <span class="t-coral">return</span> <span class="t-coral">null</span>;
}

<span class="t-dim">// All business logic constants dynamically pulled from pool:</span>
<span class="t-blue">function</span> calculateSettlement(account) {
  <span class="t-coral">const</span> cutoffDate = dayjs(__SEC_POOL__[<span class="t-yellow">0</span>]).add(__SEC_POOL__[<span class="t-yellow">1</span>], __SEC_POOL__[<span class="t-yellow">2</span>]).format(__SEC_POOL__[<span class="t-yellow">3</span>]);
  <span class="t-coral">const</span> baseRate = __SEC_POOL__[<span class="t-yellow">4</span>];
  ...
}`,

      `<span class="t-dim">// === 3. Node.js Verification Run: Cold Boot & Execution Parity ===</span>
$ node dist/settlement_bundle.js

<span class="t-green">[✓] AES-256-GCM NIST Pool Unsealed:</span> 0.72 ms
<span class="t-green">[✓] Regex Parsing Parity:</span> Preserved /M{1,4}/g, /D{1,2}/g, /Z$/i without syntax corruption
<span class="t-green">[✓] Execution Result:</span>
{
  "accountUuid": <span class="t-green">"acc_990142"</span>,
  "calculatedFee": <span class="t-yellow tabular">3825</span>,
  "nextBillingCycle": <span class="t-green">"2026-11-30"</span>,
  "settlementHash": <span class="t-green">"sha256-secret-settlement-salt-9942"</span>
}

--------------------------------------------------------------------------------
<span class="t-coral">SECURITY AUDIT METRIC:</span>
- Plaintext Strings Remaining in AST: <span class="t-green tabular">0 (ZERO)</span>
- LLM Token Exhaustion Footprint:     <span class="t-green tabular">364,280 bytes (~91,000 tokens)</span>
- REA Agent Reverse-Engineering Rate:  <span class="t-green">0% Compromise across Claude Code, Grok, GPT-4o</span>`
    ];

    function switchCaseStudy(idx) {
      document.getElementById('caseTab0').classList.toggle('active', idx === 0);
      document.getElementById('caseTab1').classList.toggle('active', idx === 1);
      document.getElementById('caseTab2').classList.toggle('active', idx === 2);
      document.getElementById('caseStudyOutput').innerHTML = caseStudyContents[idx];
    }
    switchCaseStudy(0);

    // Dual-track Code Lens
    const codeAttacker = `<span class="t-dim">// === Attacker Agent REA Perspective (Trapped in Bankrupt Tarpit) ===</span>
<span class="t-dim">// Notice: Zero plaintext literals, deep recursive cyclic trap, deceptive honeypot endpoints</span>

<span class="t-coral">const</span> _0x8f2a = (<span class="t-blue">function</span>() {
  <span class="t-coral">const</span> _0x1c = [<span class="t-green">"8f02a0b4c8..."</span>, <span class="t-green">"e14d89a2..."</span>]; <span class="t-muted">// AES-256-GCM NIST SP 800-38D Pool</span>
  <span class="t-coral">function</span> _0xdecoy_gate(tk) {
    <span class="t-dim">// Decoy Honeypot: Agent hallucinates this is the master bypass</span>
    <span class="t-coral">if</span> (tk === <span class="t-green">"MASTER_DEV_OVERRIDE"</span>) <span class="t-coral">return</span> { status: <span class="t-green">"UNLOCKED"</span>, tier: <span class="t-green">"ENTERPRISE"</span> };
    <span class="t-coral">return</span> <span class="t-coral">null</span>;
  }
  <span class="t-coral">function</span> _0xtarpit_recurse(n, acc) {
    <span class="t-coral">return</span> n <= 0 ? acc : _0xtarpit_recurse(n - 1, (acc ^ 0x9e3779b9) + (acc << 6));
  }
  <span class="t-coral">return</span> {
    dispatch: (0, globalThis[<span class="t-green">"\\x5f\\x5fSEC_IND\\x5f"</span>]),
    verify: _0xdecoy_gate
  };
})();
<span class="t-coral">export default</span> _0x8f2a;`;

    const codeStandalone = `<span class="t-dim">// === Standalone Zero-Touch Mode (Like BLA: 100% Drop-in) ===</span>
<span class="t-dim">// Zero code changes, zero license servers, zero token passing needed</span>

<span class="t-coral">import</span> { calculateCommercialQuote } <span class="t-coral">from</span> <span class="t-green">"./quote.bundle.js"</span>;

<span class="t-dim">// Notice: Pool auto-unseals transparently upon module evaluation in <0.72ms</span>
<span class="t-coral">const</span> quote = calculateCommercialQuote(<span class="t-yellow">10</span>, <span class="t-green">"starter"</span>, <span class="t-yellow">1</span>);
console.log(<span class="t-green">"✓ Authentic Result:"</span>, quote); <span class="t-muted">// Evaluates to 808 with 0 config</span>

<span class="t-dim">// What autonomous AI Reverse Engineers (REA) experience:</span>
<span class="t-dim">// 1. Context Window Exhaustion (364 KB recursive AST control lattice)</span>
<span class="t-dim">// 2. Deceptive Honeypot Traps (Synthesizing hallucinated vulnerabilities)</span>
<span class="t-dim">// 3. Zero Plaintext Literals (Erased from AST into AES-256-GCM pools)</span>`;

    const codeClient = `<span class="t-dim">// === Enterprise Cryptographic DRM Mode ===</span>
<span class="t-dim">// Authorized runtime verified via offline Ed25519 token; fail-closed gate</span>

<span class="t-coral">import</span> { initializeApp } <span class="t-coral">from</span> <span class="t-green">"./app.bundle.js"</span>;

<span class="t-dim">// 1. Authorized Ed25519 token provided via client environment or license file</span>
<span class="t-coral">const</span> licenseToken = process.env.AI_SHIELD_TOKEN;

<span class="t-dim">// 2. Fail-closed gate validates signature and derives per-file CEK:</span>
<span class="t-dim">//    CEK = HMAC-SHA256(root_key, "FILE:app.bundle.js")</span>
<span class="t-coral">const</span> app = initializeApp({
  license: licenseToken,
  onAuthorized: (session) => {
    console.log(<span class="t-green">"✓ AES-256-GCM pool decrypted cleanly in 0.74ms"</span>);
    console.log(<span class="t-green">"✓ License active until:"</span>, session.expiresAt);
  },
  onFailure: (err) => {
    <span class="t-dim">// Distinct fail-closed error codes: LICENSE_EXPIRED, LICENSE_SIGNATURE_INVALID</span>
    console.error(<span class="t-coral">"Fail-closed halt:"</span>, err.code);
  }
});`;

    function switchLens(view) {
      const btnAttacker = document.getElementById('lensBtnAttacker');
      const btnStandalone = document.getElementById('lensBtnStandalone');
      const btnClient = document.getElementById('lensBtnClient');
      const codeBlock = document.getElementById('lensCode');

      btnAttacker.classList.toggle('active', view === 'attacker');
      btnStandalone.classList.toggle('active', view === 'standalone');
      btnClient.classList.toggle('active', view === 'client');

      if (view === 'attacker') {
        codeBlock.innerHTML = codeAttacker;
      } else if (view === 'standalone') {
        codeBlock.innerHTML = codeStandalone;
      } else {
        codeBlock.innerHTML = codeClient;
      }
    }
    switchLens('attacker');

