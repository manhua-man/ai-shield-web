# AI-Shield v1.0.2

Windows executable-name repair release, prepared on 2026-11-07.

[Download v1.0.2](https://github.com/manhua-man/ai-shield-web/releases/tag/v1.0.2) · [Website](https://manhua-man.github.io/ai-shield-web/)

AI-Shield's core implementation remains private. The public repository distributes the website, documentation, and release binaries. Consult the release page for available platform assets and applicable terms.

## v1.0.2 repair

`pack` now gives output produced with a Windows PE loader a runnable `.exe` filename. If the requested name does not already end in `.exe`, the suffix is appended; the check is case-insensitive. Existing `.exe` / `.EXE` suffixes are retained, and dots or other extensions are not replaced: `release.v1` becomes `release.v1.exe`. The decision follows the actual loader format, not the host operating system. A Unix loader leaves the requested output name unchanged.

The platform examples now use `./ai-shield` on Unix and `.\ai-shield.exe` in Windows PowerShell. Windows packaging explicitly names `.\protected-application.exe`, followed by `.\protected-application.exe` to launch it. Keep the CLI and loader in the same extracted directory.

## v1.0.2 validation status

Pending: the new real-launch regression, release build/test results, the regenerated protected website, and downloaded public release assets. No v1.0.2 test pass or download verification is claimed yet. Historical v1.0.1 evidence is retained below and labeled separately.

## v1.0.2 downloads

- [Windows x64 ZIP](https://github.com/manhua-man/ai-shield-web/releases/download/v1.0.2/ai-shield-v1.0.2-windows-x64.zip)
- [Linux x64 musl tar.gz](https://github.com/manhua-man/ai-shield-web/releases/download/v1.0.2/ai-shield-v1.0.2-linux-x64.tar.gz)
- [macOS arm64 tar.gz](https://github.com/manhua-man/ai-shield-web/releases/download/v1.0.2/ai-shield-v1.0.2-macos-arm64.tar.gz)
- [SHA256SUMS.txt](https://github.com/manhua-man/ai-shield-web/releases/download/v1.0.2/SHA256SUMS.txt)

## Historical v1.0.1: eight repairs

1. **Packaged data:** the loader preserves the caller's working directory. It retains and reports an extraction directory if the application changes its contents, instead of deleting those changes.
2. **Standalone encryption:** `--standalone` enables constant-pool encryption without also requiring `--entangle`.
3. **Startup ordering:** AES-GCM constant pools unlock synchronously before application code runs.
4. **CommonJS exports:** protection preserves existing `exports` / `module.exports` behavior.
5. **Property names:** syntax-aware transformation preserves shorthand and static property keys.
6. **String escapes:** transformation uses parsed string values and conservatively retains unsupported lone-surrogate cases.
7. **Directives and shebang:** hashbang position and top-level / function strict-mode directives are preserved.
8. **Entry selection:** automatic packaging selects only an unambiguous root entry; missing, ambiguous, or out-of-bounds entries require explicit handling.

## Historical v1.0.1: local acceptance

The following checks ran on Windows against the v1.0.1 source and release binaries:

- Workspace tests: **60 / 60 passed** — 52 existing tests, 4 JavaScript end-to-end tests, and 4 packaging end-to-end tests.
- Release build completed; **8 / 8** JavaScript and packaging end-to-end tests passed against release CLI and loader binaries.
- Node.js, Python, and native process fixtures preserved asset reads, the caller's cwd, arguments containing spaces and Chinese text, exit code 23, and persistent cwd state from 1 to 2 across two launches.
- JavaScript fixtures preserved CommonJS exports, ESM startup, property names, string values, regular expressions, closures, directives, and shebang behavior. Damaged ciphertext failed before application code.
- External **Microsoft Edge 156**, headless: Acorn 8.15.0 and a quote-page fixture produced the same results before and after protection. Ten seats returned **808**; 23 seats returned **1857**. Chinese values, field names, multiple classic-script pools, ESM result **42**, and state restored after reload matched. The final browser console had **0 errors / 0 warnings**.

These are acceptance results for specified fixtures and paths, not a guarantee that every application is compatible.

## Historical v1.0.1: release CI

The v1.0.1 release binaries were built from revision `881c7da240af268667007838d9d9858c0758b01e` in a private build workflow. Each platform passed all 60 tests (52 unit tests, 4 JavaScript E2E and 4 packaging E2E):

| Platform | Target | Result |
| --- | --- | --- |
| Windows x64 | x86_64-pc-windows-msvc | 60 / 60 passed |
| Linux x64 (musl) | x86_64-unknown-linux-musl | 60 / 60 passed |
| macOS Apple Silicon | aarch64-apple-darwin | 60 / 60 passed |

These jobs executed actual Node.js, Python and native fixtures on their respective hosted operating systems. End-user installation, OS trust prompts and notarization were not tested; macOS binaries are not notarized. Node.js/Python runtimes are not included.

Each archive contains exactly the CLI, loader, README, project license, third-party notices and build information. SHA256SUMS.txt covers all archives and standalone binaries. Private Rust source and private Git history are not included.

The public website script was rebuilt with v1.0.1 standalone protection (88 encrypted literals), then checked in external Microsoft Edge. Command example tabs, selection counts, acceptance/mode tabs and 390px layout passed, with no console errors or warnings.

## Deployment boundaries

- Put persistent data in the inherited working directory or an explicit stable data directory. `__dirname` / `__file__` refer to temporary extracted application files. If the application modifies that directory, the loader keeps it and reports its location, but the next launch **does not automatically reuse it**. Python-generated `__pycache__` / `.pyc` files can also trigger this retention notice; the notice alone is not a launch failure.
- Background child processes and self-updates have not been accepted in this release.
- Standalone output includes the AES-GCM decryption key. It provides obfuscation and ciphertext integrity, **not access control or confidentiality from the client executing the code**. Keep authoritative secrets on a trusted server. Enterprise mode retains an Ed25519 license gate.
- Performance overhead and AI reverse-engineering resistance have not been benchmarked for v1.0.2; the historical v1.0.1 checks did not establish these metrics either. No fixed startup latency, attack cost, exhaustion threshold, or crack rate is claimed.
- The website's CLI transcripts and code sketches are illustrative. Its pattern explorer uses fixed heuristic weights; it does not scan files, execute attacks, modify applications, or measure compromise probability.
