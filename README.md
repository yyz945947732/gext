# group-by-ext

<p>
  <a href="https://www.npmjs.com/package/group-by-ext">
    <img src="https://img.shields.io/npm/v/group-by-ext.svg" alt="Version" />
  </a>
  <a href="https://github.com/yyz945947732/group-by-ext/pulls">
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs Welcome"
    />
  </a>
  <a href="/LICENSE.md">
    <img
      src="https://img.shields.io/badge/license-MIT-blue.svg"
      alt="GitHub license"
    />
  </a>
</p>

> A simple CLI tool that groups files by extension in the current folder — great for quick cleanup and organization.

## Install

```bash
npm install --global group-by-ext
```

## Usage

```bash
npx gext [options]
```

### Options

```bash
-h --help              Print this help
-v --version           Print git-clean-branches version number
-i --include <ext>     Only include specific extensions
-e --exclude <ext>     Exclude specific extensions
```

### Examples

```bash
# Group all files in the current folder by their extension
npx gext

# Only group JavaScript and TypeScript files
npx gext --include js ts

# Exclude image files like JPG and PNG from grouping
npx gext --exclude jpg png

# Combine include and exclude: only handle 'js', but exclude 'test.js'
npx gext --include js --exclude test

# Use comma-separated values
npx gext --include=js,ts
```

## LICENSE

[MIT](https://github.com/yyz945947732/group-by-ext/blob/master/LICENSE)

---

This project is created using [generator-stupid-cli](https://github.com/yyz945947732/generator-stupid-cli).
