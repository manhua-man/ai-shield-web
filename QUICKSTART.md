# Quick start

Run a small Node.js application, then choose one of two independent workflows:

- **Protect JavaScript:** copy the application, transform the copy in place, then run its JavaScript.
- **Package an application:** package the original application directory, then run the generated executable.

[Download v1.0.2](https://github.com/manhua-man/ai-shield-web/releases/tag/v1.0.2) · [Website](https://manhua-man.github.io/ai-shield-web/) · [Release notes](RELEASE-NOTES.md)

## Before you start

Extract the release for your OS and architecture into a fresh directory. Keep the CLI and loader together: `ai-shield.exe` / `ai-shield-stub.exe` on Windows, or `ai-shield` / `ai-shield-stub` on Linux and macOS. Open your terminal in that extracted directory.

This example requires **Node.js available as `node`**. It uses only Node's built-in modules and needs no package installation. AI-Shield does not bundle the Node.js or Python runtime. The commands below create sample files in the extracted directory; use a fresh directory for another protection trial.

## Windows PowerShell

### 1. Create and run the original application

Copy this block into PowerShell from the extracted directory:

```powershell
.\ai-shield.exe --version
node --version

New-Item -ItemType Directory -Path .\application\assets | Out-Null
'{"type":"commonjs"}' | Set-Content -LiteralPath .\application\package.json -Encoding ascii
'{"message":"Hello from the bundled asset"}' | Set-Content -LiteralPath .\application\assets\message.json -Encoding ascii

@'
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assetPath = path.join(__dirname, "assets", "message.json");
const asset = JSON.parse(fs.readFileSync(assetPath, "utf8"));
const statePath = path.join(process.cwd(), "demo-state.json");
const state = fs.existsSync(statePath)
  ? JSON.parse(fs.readFileSync(statePath, "utf8"))
  : { runs: 0 };

function calculateQuote(seats) {
  return Math.round(seats * 85 * 0.95);
}

state.runs += 1;
fs.writeFileSync(statePath, JSON.stringify(state));
console.log(JSON.stringify({
  message: asset.message,
  total: calculateQuote(Number(process.argv[2] || 10)),
  runs: state.runs
}));
'@ | Set-Content -LiteralPath .\application\main.js -Encoding ascii

node .\application\main.js 10
```

The first run prints:

```json
{"message":"Hello from the bundled asset","total":808,"runs":1}
```

It also creates `demo-state.json` in your current directory. Every subsequent execution from that directory increments `runs`; the message and total stay the same for the same input.

### 2A. Protect a copy of the JavaScript

```powershell
Copy-Item -LiteralPath .\application -Destination .\protected-js -Recurse
.\ai-shield.exe protect .\protected-js --ext js --standalone --intensity bankrupt --inject-decoys
node .\protected-js\main.js 10
```

`protect` rewrites JavaScript inside `protected-js`. The original `application` directory stays unchanged, and the copied JSON asset is still read normally. Run or deploy the transformed copy through your usual Node.js workflow. For a browser build, serve the transformed build using your normal server instead.

### 2B. Package the original application

This branch starts from the original `application` directory created in step 1. It does not use the protected copy from 2A.

```powershell
.\ai-shield.exe pack .\application --entry main.js --out .\protected-application.exe
.\protected-application.exe 10
.\protected-application.exe 10
```

The two launches keep the same message and total while advancing `runs`. Node.js must remain available on the destination machine. The generated executable contains the application files and asset, so those source files do not need to accompany it.

With a Windows PE loader, v1.0.2 appends `.exe` when the requested output name lacks that suffix. Existing `.exe` / `.EXE` names are kept, and a name such as `release.v1` becomes `release.v1.exe`. The example names the extension explicitly.

## Linux / macOS

The following commands use a POSIX shell. Start in a fresh extracted release directory for your platform. The macOS release is for Apple Silicon and is not notarized; OS trust prompts are separate from this CLI walkthrough.

### 1. Create and run the original application

```sh
chmod u+x ./ai-shield ./ai-shield-stub
./ai-shield --version
node --version

mkdir -p application/assets
printf '%s\n' '{"type":"commonjs"}' > application/package.json
printf '%s\n' '{"message":"Hello from the bundled asset"}' > application/assets/message.json

cat > application/main.js <<'JS'
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assetPath = path.join(__dirname, "assets", "message.json");
const asset = JSON.parse(fs.readFileSync(assetPath, "utf8"));
const statePath = path.join(process.cwd(), "demo-state.json");
const state = fs.existsSync(statePath)
  ? JSON.parse(fs.readFileSync(statePath, "utf8"))
  : { runs: 0 };

function calculateQuote(seats) {
  return Math.round(seats * 85 * 0.95);
}

state.runs += 1;
fs.writeFileSync(statePath, JSON.stringify(state));
console.log(JSON.stringify({
  message: asset.message,
  total: calculateQuote(Number(process.argv[2] || 10)),
  runs: state.runs
}));
JS

node ./application/main.js 10
```

The first run prints `{"message":"Hello from the bundled asset","total":808,"runs":1}` and creates `demo-state.json` in your current directory. Subsequent executions from that directory increment `runs`.

### 2A. Protect a copy of the JavaScript

```sh
cp -R ./application ./protected-js
./ai-shield protect ./protected-js --ext js --standalone --intensity bankrupt --inject-decoys
node ./protected-js/main.js 10
```

The command transforms `protected-js` in place. The original `application` directory and the copied JSON asset remain available. Run or deploy the transformed copy as you normally would.

### 2B. Package the original application

This branch packages `application` from step 1, independently of 2A:

```sh
./ai-shield pack ./application --entry main.js --out ./protected-application
./protected-application 10
./protected-application 10
```

The Unix loader keeps the requested output name without adding `.exe`. The two launches advance the saved counter. Node.js must be available on the destination machine; the application files and asset are inside the generated package.

## Adapt the example to your application

| Application | Prepare | Command choice |
| --- | --- | --- |
| Browser or Node.js build | Copy the completed build to a fresh output directory | Run `protect` on that copy, then use your existing run/deploy process |
| Node.js application | Include its scripts, dependency modules and assets | `pack` the directory with `--entry main.js`; install Node.js on the destination |
| Python application | Include its scripts and assets; provide its dependencies in the destination environment | `pack` the directory with `--entry main.py`; install Python on the destination |
| Native application | Use an executable for the matching OS/architecture; include required assets in a directory bundle | `pack` the executable, or pack the directory with `--entry` naming its executable |

These are separate operations. If you deliberately combine JavaScript protection with packaging, select the **protected copy** as the `pack` target and validate that combined output too. AI-Shield does not install your application's dependencies or bundle Node.js/Python runtimes.

## Keep assets and saved data in different places

The sample demonstrates both paths:

- `__dirname` locates the bundled, read-only `assets/message.json`. For Python, resolve bundled assets relative to `__file__`.
- `process.cwd()` locates `demo-state.json` in the directory from which the user launched the program. The loader preserves that working directory. For production software, an explicit stable user-data directory is often more appropriate.

If your application writes into its temporary extraction directory, the loader keeps that directory and reports its location to avoid deleting changes. It does **not** reuse that directory on the next launch. Python imports can create `__pycache__` / `.pyc` files and trigger this notice even when the application succeeds.

## What this walkthrough establishes

The Windows PowerShell blocks above were executed as written on 2026-11-09 using the public v1.0.2 CLI and loader. The original app, protected copy and two packaged launches returned the same asset message and total **808**, while the saved run counter advanced **1 → 2 → 3 → 4**. The Unix blocks were syntax-checked and were not executed as this exact walkthrough on that Windows host.

The published release's separate checks include **61 / 61 CI tests per platform** and **160 / 162 strict public Windows packaging checks**. The two differences were Python raw stderr notices caused by cache retention; tested business behavior matched.

Standalone output includes its decryption key and is not an access-control boundary. Read the [release notes](RELEASE-NOTES.md) for measured scope, documented differences and untested behaviors before distributing your own application.
