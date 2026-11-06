# AI-Shield

JavaScript protection and native application packaging. This public repository contains the website, documentation and binary releases. The core source is maintained in a separate private repository and is not included here.

- [Website](https://manhua-man.github.io/ai-shield-web/)
- [Download v1.0.2](https://github.com/manhua-man/ai-shield-web/releases/tag/v1.0.2)
- [Release notes and verification scope](RELEASE-NOTES.md)

## Download

Download the archive for your operating system and keep the CLI and loader in the same directory. Each release includes [SHA256SUMS.txt](https://github.com/manhua-man/ai-shield-web/releases/download/v1.0.2/SHA256SUMS.txt), licenses, third-party notices and build revision information.

| Platform | Archive |
| --- | --- |
| Windows x64 | [ZIP](https://github.com/manhua-man/ai-shield-web/releases/download/v1.0.2/ai-shield-v1.0.2-windows-x64.zip) |
| Linux x64 (musl) | [tar.gz](https://github.com/manhua-man/ai-shield-web/releases/download/v1.0.2/ai-shield-v1.0.2-linux-x64.tar.gz) |
| macOS Apple Silicon | [tar.gz](https://github.com/manhua-man/ai-shield-web/releases/download/v1.0.2/ai-shield-v1.0.2-macos-arm64.tar.gz) |

Linux/macOS users must preserve executable permissions when extracting. The macOS binaries are not notarized. Node.js and Python runtimes are not bundled.

## Usage

Keep the CLI and loader in the extracted directory. Run protection on a copy of your built JavaScript and validate your application's behavior before deployment.

Windows PowerShell, from the extracted directory:

```powershell
.\ai-shield.exe --version
.\ai-shield.exe protect .\dist --ext js --standalone --intensity bankrupt --inject-decoys
.\ai-shield.exe pack .\application --entry main.js --out .\protected-application.exe
.\protected-application.exe
```

Linux / macOS, from the extracted directory:

```sh
./ai-shield --version
./ai-shield protect ./dist --ext js --standalone --intensity bankrupt --inject-decoys
./ai-shield pack ./application --entry main.js --out ./protected-application
./protected-application
```

Use `.\ai-shield.exe --help` in PowerShell or `./ai-shield --help` in a Unix shell, plus subcommand `--help`, for available options.

## What v1.0.2 fixes

When the actual loader is a Windows PE executable, `pack` appends `.exe` if the requested output name does not already end in `.exe` (case-insensitive). Existing `.exe` / `.EXE` names remain unchanged; names with dots or other extensions are preserved before appending, so `release.v1` becomes `release.v1.exe`. A Unix loader leaves the requested name unchanged.

## v1.0.2 verification

- Release CI passed **61 / 61 tests on each platform**: Windows x64, Linux x64 musl and macOS arm64. Each run comprised 52 unit tests, 4 JavaScript E2E tests and 5 packaging E2E tests, including the new real-launch regression.
- The three public archives and `SHA256SUMS.txt` were downloaded without authentication and matched the CI artifacts byte-for-byte. Archive inspection found only the CLI, loader, README, license, third-party notices and build information; core source was not published.
- Freshly downloaded Windows binaries produced four output-name variants: explicit `.exe`, a missing extension, a name with spaces and `.v1`, and existing uppercase `.EXE`. Each generated executable launched directly through PowerShell in an isolated deployment directory, without renaming.
- Original and protected Node.js / JavaScript / Edge results matched in the tested consumer paths. Windows packaging recorded **160 / 162 strict checks**: the two differences were raw Python stderr comparisons, because ordinary imports created caches and triggered the documented retained-directory notice. Python business behavior matched, and there were **no unresolved functional failures in the tested paths**. This is not a claim that all raw output streams were identical.
- The published website was checked in external Microsoft Edge: platform command examples rendered correctly, the 390px layout had no horizontal overflow, and no browser errors were recorded.

Release binaries were built from revision `54d53a4e2d10a4c297dfb39e1e4c9efd19e92dc6`. See the release notes for public-download checksums and scope. The v1.0.1 results below are historical.


## Historical v1.0.1 repairs

- Packed applications inherit the caller's working directory. Cleanup preserves new or changed data in the extraction directory and reports its location.
- Automatic entry selection is deterministic; ambiguous bundles require an explicit `--entry`.
- Standalone protection enables its constant pool and completes unlocking before application code runs.
- JavaScript transformation preserves tested CommonJS exports, ESM startup, object keys/shorthand, Unicode escapes, regular expressions, shebangs and strict-mode directives.

Historical v1.0.1 verification includes real Node.js, Python and native-process execution, argument/exit-code checks, asset reads and repeated-launch persistence. External Microsoft Edge testing covers protected classic scripts, multiple constant pools, ESM and UI interaction. See the release notes for platform-specific results; these checks do not certify arbitrary applications.

## Boundaries

Standalone output includes its decryption key. It raises inspection effort and is not an authorization boundary. Do not store server secrets in client applications. Protection does not guarantee resistance to any particular reverse-engineering tool or model.

Persist data in the inherited working directory or an explicit stable data directory. Use `__dirname` / `__file__` for reading bundled assets. A changed extraction directory is retained to avoid data loss, but it is not automatically reused on the next launch. Python-generated `__pycache__` / `.pyc` files can also trigger this retention notice; the notice alone does not indicate a launch failure. Background child processes and self-updating applications are outside the current acceptance scope.

The repository retains the project's existing [MIT license](LICENSE); third-party licenses are included with each archive. Public source archives generated by GitHub contain this website and documentation only.
