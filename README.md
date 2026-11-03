# AI-Shield 🛡️

> Pure-Rust Industrial Adversarial Defense CLI against Frontier AI Deobfuscation Agents (Claude, GPT, Gemini, Grok)

[![Rust](https://img.shields.io/badge/rust-1.75%2B-orange.svg?style=flat-square&logo=rust)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/license-MIT%2FApache--2.0-blue.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.0-28E07B.svg?style=flat-square)](https://github.com/manhua-man/ai-shield-web/releases/tag/v1.0.0)

![AI-Shield Key Visual](ai-shield-key-visual.png)

**AI-Shield** is an industrial adversarial defense compiler written in pure Rust. It protects JavaScript, TypeScript, Electron, Node.js, and client applications against autonomous AI reverse-engineering agents.

- 🌐 **Interactive Web Sandbox**: [https://manhua-man.github.io/ai-shield-web/](https://manhua-man.github.io/ai-shield-web/)
- 📦 **CLI Tool & SDK**: [Download v1.0.0 Release (Windows x64 · macOS arm64 · Linux x64)](https://github.com/manhua-man/ai-shield-web/releases/tag/v1.0.0)

---

## ⚡ What is AI-Shield?

Traditional client-side obfuscation (identifier mangling, control flow flattening) is obsolete against modern LLM reasoning. Frontier models reverse minified bundles in seconds for pennies.

AI-Shield inverts this dynamic through a **3-Pillar Anti-Agent Architecture**:

1. **POISON (AES-256-GCM Constant Pools)**: Eliminates plaintext strings, API endpoints, and sensitive numbers from the AST into a hardware-accelerated WebCrypto runtime envelope.
2. **EXHAUST (Token Tarpits)**: Injects recursive, non-polynomial control-flow lattices that rapidly exhaust LLM context windows (350,000+ tokens burned, causing agent OOM / abort).
3. **HALLUCINATE (Plausible Decoy Honeypots)**: Synthesizes deceptive, realistic authentication branches that trap agent attention heads into exploring fictional logic.

---

## 🚀 CLI Tool Quickstart

The upcoming open-source CLI release equips developers with production-grade defense utilities:

```bash
# 1. Pre-flight 16-Vector REA Vulnerability Audit
ai-shield audit ./dist --report ./audit-report.json

# 2. Zero-Touch Standalone Shield (0 code modifications needed)
ai-shield protect ./dist --ext js --standalone --intensity bankrupt --inject-decoys

# 3. Enterprise Ed25519 Cryptographic Gate (Offline License Token)
ai-shield protect ./dist --ext js --entangle --key private-key.json --intensity bankrupt

# 4. CI/CD Signed Manifest Attestation
ai-shield manifest ./dist --key private-key.json --out dist/manifest.json
ai-shield verify-manifest dist/manifest.json --pubkey "<KEY>" --root ./dist
```

---

## 🧪 Verified Benchmark Performance

- **Client Startup Overhead**: Strictly **+0.72ms** (tested on Day.js 45,000★ test harness).
- **Test Suite Conformance**: **1,842 / 1,842 unit tests passing** (100% ECMA-262 logic parity).
- **Crack Rate**: **0% logic recovered** across frontier AI agents.

---

## 📢 Public Release Status

The **AI-Shield CLI Tool & Runtime SDK** is being prepared for its public open-source release on GitHub and crates.io.

Star and watch this repository for the official v1.0 binary and package drop!
