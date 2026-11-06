import { createRequire as __pggateCreateRequire } from 'node:module';
const require = __pggateCreateRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x9) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x9, {
  get: (a3, b4) => (typeof require !== "undefined" ? require : a3)[b4]
}) : x9)(function(x9) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x9 + '" is not supported');
});
var __esm = (fn2, res, err2) => function __init() {
  if (err2) throw err2[0];
  try {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  } catch (e) {
    throw err2 = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-QY3QWFKW.js
var p, i, c, f, l, s, a, _, d, D, F, g, L, P, n, h, R, x, T, U, u;
var init_chunk_QY3QWFKW = __esm({
  "node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-QY3QWFKW.js"() {
    p = Object.create;
    i = Object.defineProperty;
    c = Object.getOwnPropertyDescriptor;
    f = Object.getOwnPropertyNames;
    l = Object.getPrototypeOf;
    s = Object.prototype.hasOwnProperty;
    a = (t7) => {
      throw TypeError(t7);
    };
    _ = (t7, e, o6) => e in t7 ? i(t7, e, { enumerable: true, configurable: true, writable: true, value: o6 }) : t7[e] = o6;
    d = (t7, e) => () => (t7 && (e = t7(t7 = 0)), e);
    D = (t7, e) => () => (e || t7((e = { exports: {} }).exports, e), e.exports);
    F = (t7, e) => {
      for (var o6 in e) i(t7, o6, { get: e[o6], enumerable: true });
    };
    g = (t7, e, o6, m7) => {
      if (e && typeof e == "object" || typeof e == "function") for (let r2 of f(e)) !s.call(t7, r2) && r2 !== o6 && i(t7, r2, { get: () => e[r2], enumerable: !(m7 = c(e, r2)) || m7.enumerable });
      return t7;
    };
    L = (t7, e, o6) => (o6 = t7 != null ? p(l(t7)) : {}, g(e || !t7 || !t7.__esModule ? i(o6, "default", { value: t7, enumerable: true }) : o6, t7));
    P = (t7, e, o6) => _(t7, typeof e != "symbol" ? e + "" : e, o6);
    n = (t7, e, o6) => e.has(t7) || a("Cannot " + o6);
    h = (t7, e, o6) => (n(t7, e, "read from private field"), o6 ? o6.call(t7) : e.get(t7));
    R = (t7, e, o6) => e.has(t7) ? a("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t7) : e.set(t7, o6);
    x = (t7, e, o6, m7) => (n(t7, e, "write to private field"), m7 ? m7.call(t7, o6) : e.set(t7, o6), o6);
    T = (t7, e, o6) => (n(t7, e, "access private method"), o6);
    U = (t7, e, o6, m7) => ({ set _(r2) {
      x(t7, e, r2, o6);
    }, get _() {
      return h(t7, e, m7);
    } });
    u = d(() => {
      "use strict";
    });
  }
});

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-ZKGLEABV.js
function h2() {
  let t7 = process.type;
  return t7 === "renderer" || t7 === "worker" || t7 === "service-worker";
}
async function u2(t7) {
  l2 || o3.has(t7.toString()) || o3.set(t7.toString(), fetch(t7));
}
async function w2(t7, e, r2) {
  if (r2) return { instance: await WebAssembly.instantiate(r2, t7), module: r2 };
  let i4 = e();
  if (s3.has(i4.toString())) {
    let a3 = s3.get(i4.toString());
    return { instance: await WebAssembly.instantiate(a3, t7), module: a3 };
  }
  if (l2) {
    let a3 = await (await import("fs/promises")).readFile(i4), { module: n3, instance: c3 } = await WebAssembly.instantiate(a3, t7);
    return s3.set(i4.toString(), n3), { instance: c3, module: n3 };
  } else {
    o3.has(i4.toString()) || u2(i4);
    let a3 = await o3.get(i4.toString()), { module: n3, instance: c3 } = await WebAssembly.instantiateStreaming(a3.clone(), t7);
    return s3.set(i4.toString(), n3), { instance: c3, module: n3 };
  }
}
async function S2(t7) {
  return l2 ? (await (await import("fs/promises")).readFile(t7)).buffer : (u2(t7), (await o3.get(t7.toString())).clone().arrayBuffer());
}
function j2(t7) {
  let e;
  return t7.startsWith('"') && t7.endsWith('"') ? e = t7.substring(1, t7.length - 1) : e = t7.toLowerCase(), e;
}
function d2(t7, e) {
  try {
    let r2 = t7.readdir(e).filter((i4) => i4 !== "." && i4 !== "..");
    for (let i4 of r2) {
      let a3 = e + "/" + i4;
      try {
        t7.readdir(a3), d2(t7, a3);
      } catch {
        t7.unlink(a3);
      }
    }
    t7.rmdir(e);
  } catch {
    try {
      t7.unlink(e);
    } catch {
    }
  }
}
var f3, p3, m2, l2, y3, b2, o3, s3, v2;
var init_chunk_ZKGLEABV = __esm({
  "node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-ZKGLEABV.js"() {
    init_chunk_QY3QWFKW();
    u();
    f3 = Object.defineProperty;
    p3 = (t7, e) => {
      for (var r2 in e) f3(t7, r2, { get: e[r2], enumerable: true });
    };
    m2 = {};
    p3(m2, { IN_NODE: () => l2, WASM_PREFIX: () => y3, getFsBundle: () => S2, instantiateWasm: () => w2, pgliteProc: () => b2, rmdirRecursive: () => d2, startArtifactDownload: () => u2, toPostgresName: () => j2, uuid: () => v2 });
    l2 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && !h2();
    y3 = "/pglite";
    b2 = globalThis && typeof globalThis.process < "u" ? globalThis.process : { exitCode: void 0 };
    o3 = /* @__PURE__ */ new Map();
    s3 = /* @__PURE__ */ new Map();
    v2 = () => {
      if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
      let t7 = new Uint8Array(16);
      if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(t7);
      else for (let r2 = 0; r2 < t7.length; r2++) t7[r2] = Math.floor(Math.random() * 256);
      t7[6] = t7[6] & 15 | 64, t7[8] = t7[8] & 63 | 128;
      let e = [];
      return t7.forEach((r2) => {
        e.push(r2.toString(16).padStart(2, "0"));
      }), e.slice(0, 4).join("") + "-" + e.slice(4, 6).join("") + "-" + e.slice(6, 8).join("") + "-" + e.slice(8, 10).join("") + "-" + e.slice(10).join("");
    };
  }
});

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-CE4NCHVO.js
async function le2(e, r2, t7 = "pgdata", n3 = "auto") {
  let i4 = wr(e, r2), [o6, a3] = await Ar(i4, n3), s5 = t7 + (a3 ? ".tar.gz" : ".tar"), l3 = a3 ? "application/x-gzip" : "application/x-tar";
  return typeof File < "u" ? new File([o6], s5, { type: l3 }) : new Blob([o6], { type: l3 });
}
async function nt2(e, r2, t7) {
  let n3 = new Uint8Array(await r2.arrayBuffer()), i4 = typeof File < "u" && r2 instanceof File ? r2.name : void 0;
  (yr.includes(r2.type) || i4?.endsWith(".tgz") || i4?.endsWith(".tar.gz")) && (n3 = await De2(n3));
  let a3;
  try {
    a3 = (0, O2.untar)(n3);
  } catch (s5) {
    if (s5 instanceof Error && s5.message.includes("File is corrupted")) n3 = await De2(n3), a3 = (0, O2.untar)(n3);
    else throw s5;
  }
  for (let s5 of a3) {
    let l3 = `${t7}/${s5.name}`, u3 = l3.split("/").slice(0, -1);
    for (let c3 = 1; c3 <= u3.length; c3++) {
      let f5 = u3.slice(0, c3).join("/");
      f5.length && !e.analyzePath(f5).exists && e.mkdirTree(f5);
    }
    if (s5.type === O2.REGTYPE) {
      e.writeFile(l3, s5.data);
      let c3 = kr(s5.modifyTime);
      e.utime(l3, c3, c3);
    } else s5.type === O2.DIRTYPE && (e.analyzePath(l3).exists || e.mkdir(l3));
  }
}
function hr(e, r2) {
  let t7 = [], n3 = (i4) => {
    e.readdir(i4).forEach((a3) => {
      if (a3 === "." || a3 === "..") return;
      let s5 = i4 + "/" + a3, l3 = e.stat(s5), u3 = e.isFile(l3.mode) ? e.readFile(s5, { encoding: "binary" }) : new Uint8Array(0);
      t7.push({ name: s5.substring(r2.length), mode: l3.mode, size: l3.size, type: e.isFile(l3.mode) ? O2.REGTYPE : O2.DIRTYPE, modifyTime: l3.mtime, data: u3 }), e.isDir(l3.mode) && n3(s5);
    });
  };
  return n3(r2), t7;
}
function wr(e, r2) {
  let t7 = hr(e, r2);
  return (0, O2.tar)(t7);
}
async function Ar(e, r2 = "auto") {
  if (r2 === "none") return [e, false];
  if (typeof CompressionStream < "u") return [await br(e), true];
  if (typeof process < "u" && process.versions && process.versions.node) return [await Tr(e), true];
  if (r2 === "auto") return [e, false];
  throw new Error("Compression not supported in this environment");
}
async function br(e) {
  let r2 = new CompressionStream("gzip"), t7 = r2.writable.getWriter(), n3 = r2.readable.getReader();
  t7.write(e), t7.close();
  let i4 = [];
  for (; ; ) {
    let { value: s5, done: l3 } = await n3.read();
    if (l3) break;
    s5 && i4.push(s5);
  }
  let o6 = new Uint8Array(i4.reduce((s5, l3) => s5 + l3.length, 0)), a3 = 0;
  return i4.forEach((s5) => {
    o6.set(s5, a3), a3 += s5.length;
  }), o6;
}
async function Tr(e) {
  let { promisify: r2 } = await import("util"), { gzip: t7 } = await import("zlib");
  return await r2(t7)(e);
}
async function De2(e) {
  if (typeof CompressionStream < "u") return await Pr(e);
  if (typeof process < "u" && process.versions && process.versions.node) return await Mr(e);
  throw new Error("Unsupported environment for decompression");
}
async function Pr(e) {
  let r2 = new DecompressionStream("gzip"), t7 = r2.writable.getWriter(), n3 = r2.readable.getReader();
  t7.write(e), t7.close();
  let i4 = [];
  for (; ; ) {
    let { value: s5, done: l3 } = await n3.read();
    if (l3) break;
    s5 && i4.push(s5);
  }
  let o6 = new Uint8Array(i4.reduce((s5, l3) => s5 + l3.length, 0)), a3 = 0;
  return i4.forEach((s5) => {
    o6.set(s5, a3), a3 += s5.length;
  }), o6;
}
async function Mr(e) {
  let { promisify: r2 } = await import("util"), { gunzip: t7 } = await import("zlib");
  return await r2(t7)(e);
}
function kr(e) {
  return e ? typeof e == "number" ? e * 1e3 : e.getTime() : Date.now();
}
async function Or(moduleArg = {}) {
  var Module = moduleArg, ENVIRONMENT_IS_WEB = !!globalThis.window, ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope, ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
  if (ENVIRONMENT_IS_NODE) {
    let { createRequire: e } = await import("node:module");
    var require = e(import.meta.url);
  }
  var programArgs = [], thisProgram = "./this.program", quit_ = (e, r2) => {
    throw r2;
  }, _scriptName = import.meta.url, scriptDirectory = "";
  function locateFile(e) {
    return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
  }
  var readAsync, readBinary;
  if (ENVIRONMENT_IS_NODE) {
    var fs = require("node:fs");
    _scriptName.startsWith("file:") && (scriptDirectory = require("node:path").dirname(require("node:url").fileURLToPath(_scriptName)) + "/"), readBinary = (e) => {
      e = isFileURI(e) ? new URL(e) : e;
      var r2 = fs.readFileSync(e);
      return r2;
    }, readAsync = async (e, r2 = true) => {
      e = isFileURI(e) ? new URL(e) : e;
      var t7 = fs.readFileSync(e, r2 ? void 0 : "utf8");
      return t7;
    }, process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")), programArgs = process.argv.slice(2), quit_ = (e, r2) => {
      throw process.exitCode = e, r2;
    };
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    try {
      scriptDirectory = new URL(".", _scriptName).href;
    } catch {
    }
    ENVIRONMENT_IS_WORKER && (readBinary = (e) => {
      var r2 = new XMLHttpRequest();
      return r2.open("GET", e, false), r2.responseType = "arraybuffer", r2.send(null), new Uint8Array(r2.response);
    }), readAsync = async (e) => {
      var r2 = await fetch(e, { credentials: "same-origin" });
      if (r2.ok) return r2.arrayBuffer();
      throw new Error(r2.status + " : " + r2.url);
    };
  }
  var out = console.log.bind(console), err = console.error.bind(console), dynamicLibraries = [], wasmBinary, ABORT = false, EXITSTATUS, isFileURI = (e) => e.startsWith("file://");
  class EmscriptenEH {
  }
  class EmscriptenSjLj extends EmscriptenEH {
  }
  var runtimeInitialized = false, runtimeExited = false;
  function getMemoryBuffer() {
    return wasmMemory.buffer;
  }
  function updateMemoryViews() {
    if (!HEAP8?.buffer?.resizable) {
      var e = getMemoryBuffer();
      HEAP8 = new Int8Array(e), HEAP16 = new Int16Array(e), Module.HEAPU8 = HEAPU8 = new Uint8Array(e), HEAPU16 = new Uint16Array(e), HEAP32 = new Int32Array(e), HEAPU32 = new Uint32Array(e), HEAPF32 = new Float32Array(e), HEAPF64 = new Float64Array(e), HEAP64 = new BigInt64Array(e), HEAPU64 = new BigUint64Array(e);
    }
  }
  var __RELOC_FUNCS__ = [];
  function preRun() {
    var e = Module.preRun;
    e && (typeof e == "function" && (e = [e]), onPreRuns.push(...e)), callRuntimeCallbacks(onPreRuns);
  }
  function initRuntime() {
    runtimeInitialized = true, callRuntimeCallbacks(__RELOC_FUNCS__), !Module.noFSInit && !FS.initialized && FS.init(), TTY.init(), wasmExports.__wasm_call_ctors(), callRuntimeCallbacks(onPostCtors), FS.ignorePermissions = false;
  }
  function exitRuntime() {
    ___funcs_on_exit(), FS.quit(), TTY.shutdown(), clearTimers(), runtimeExited = true;
  }
  function postRun() {
    var e = Module.postRun;
    e && (typeof e == "function" && (e = [e]), onPostRuns.push(...e)), callRuntimeCallbacks(onPostRuns);
  }
  function abort(e) {
    Module.onAbort?.(e), e = `Aborted(${e})`, err(e), ABORT = true, e += ". Build with -sASSERTIONS for more info.";
    var r2 = new WebAssembly.RuntimeError(e);
    throw r2;
  }
  var wasmBinaryFile;
  function findWasmBinary() {
    return Module.locateFile ? locateFile("initdb.wasm") : new URL("initdb.wasm", import.meta.url).href;
  }
  function getBinarySync(e) {
    if (readBinary) return readBinary(e);
    throw "both async and sync fetching of the wasm failed";
  }
  async function getWasmBinary(e) {
    if (!wasmBinary) try {
      var r2 = await readAsync(e);
      return new Uint8Array(r2);
    } catch {
    }
    return getBinarySync(e);
  }
  async function instantiateArrayBuffer(e, r2) {
    try {
      var t7 = await getWasmBinary(e), n3 = await WebAssembly.instantiate(t7, r2);
      return n3;
    } catch (i4) {
      err(`failed to asynchronously prepare wasm: ${i4}`), abort(i4);
    }
  }
  async function instantiateAsync(e, r2, t7) {
    if (!e && !ENVIRONMENT_IS_NODE) try {
      var n3 = fetch(r2, { credentials: "same-origin" }), i4 = await WebAssembly.instantiateStreaming(n3, t7);
      return i4;
    } catch (o6) {
      err(`wasm streaming compile failed: ${o6}`), err("falling back to ArrayBuffer instantiation");
    }
    return instantiateArrayBuffer(r2, t7);
  }
  function getWasmImports() {
    var e = new Proxy(/* @__PURE__ */ new Set([]), GOTHandler), r2 = { env: wasmImports, wasi_snapshot_preview1: wasmImports, "GOT.mem": e, "GOT.func": e };
    return r2;
  }
  async function createWasm() {
    async function e(a3, s5) {
      wasmExports = a3.exports;
      var l3 = wasmExports;
      mergeLibSymbols(wasmExports, "main");
      var u3 = getDylinkMetadata(s5);
      return u3.neededDynlibs && (dynamicLibraries = u3.neededDynlibs.concat(dynamicLibraries)), assignWasmExports(wasmExports), updateGOT(l3), updateMemoryViews(), LDSO.init(), await loadDylibs(), wasmExports;
    }
    function r2(a3) {
      return e(a3.instance, a3.module);
    }
    var t7 = getWasmImports(), n3 = Module.instantiateWasm;
    if (n3) return new Promise((a3) => {
      n3(t7, (s5, l3) => a3(e(s5, l3)));
    });
    wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
    var i4 = await instantiateAsync(wasmBinary, wasmBinaryFile, t7), o6 = await r2(i4);
    return o6;
  }
  class ExitStatus {
    constructor(r2) {
      P(this, "name", "ExitStatus");
      this.message = `Program terminated with exit(${r2})`, this.status = r2;
    }
  }
  var GOT = {}, GOTHandler = { get(e, r2) {
    var t7 = GOT[r2];
    return t7 || (t7 = GOT[r2] = new WebAssembly.Global({ value: "i32", mutable: true }, -1)), e.has(r2) || (t7.required = true), t7;
  } }, HEAP16, HEAP32, HEAP64, HEAP8, HEAPF32, HEAPF64, HEAPU16, HEAPU32, HEAPU64, HEAPU8, callRuntimeCallbacks = (e) => {
    for (; e.length > 0; ) e.shift()(Module);
  }, onPostRuns = [], onPreRuns = [], UTF8Decoder = globalThis.TextDecoder && new TextDecoder(), findStringEnd = (e, r2, t7, n3) => {
    var i4 = r2 + t7;
    if (n3) return i4;
    for (; e[r2] && !(r2 >= i4); ) ++r2;
    return r2;
  }, UTF8ArrayToString = (e, r2 = 0, t7, n3) => {
    var i4 = findStringEnd(e, r2, t7, n3);
    if (i4 - r2 > 16 && e.buffer && UTF8Decoder) return UTF8Decoder.decode(e.subarray(r2, i4));
    for (var o6 = ""; r2 < i4; ) {
      var a3 = e[r2++];
      if (!(a3 & 128)) {
        o6 += String.fromCharCode(a3);
        continue;
      }
      var s5 = e[r2++] & 63;
      if ((a3 & 224) == 192) {
        o6 += String.fromCharCode((a3 & 31) << 6 | s5);
        continue;
      }
      var l3 = e[r2++] & 63;
      if ((a3 & 240) == 224 ? a3 = (a3 & 15) << 12 | s5 << 6 | l3 : a3 = (a3 & 7) << 18 | s5 << 12 | l3 << 6 | e[r2++] & 63, a3 < 65536) o6 += String.fromCharCode(a3);
      else {
        var u3 = a3 - 65536;
        o6 += String.fromCharCode(55296 | u3 >> 10, 56320 | u3 & 1023);
      }
    }
    return o6;
  }, getDylinkMetadata = (e) => {
    var r2 = 0, t7 = 0;
    function n3() {
      return e[r2++];
    }
    function i4() {
      for (var D8 = 0, L5 = 1; ; ) {
        var de2 = e[r2++];
        if (D8 += (de2 & 127) * L5, L5 *= 128, !(de2 & 128)) break;
      }
      return D8;
    }
    function o6() {
      var D8 = i4();
      return r2 += D8, UTF8ArrayToString(e, r2 - D8, D8);
    }
    function a3() {
      for (var D8 = i4(), L5 = []; D8--; ) L5.push(o6());
      return L5;
    }
    function s5(D8, L5) {
      if (D8) throw new Error(L5);
    }
    if (e instanceof WebAssembly.Module) {
      var l3 = WebAssembly.Module.customSections(e, "dylink.0");
      s5(l3.length === 0, "need dylink section"), e = new Uint8Array(l3[0]), t7 = e.length;
    } else {
      var u3 = new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer), c3 = u3[0] == 1836278016;
      s5(!c3, "need to see wasm magic number"), s5(e[8] !== 0, "need the dylink section to be first"), r2 = 9;
      var f5 = i4();
      t7 = r2 + f5;
      var d5 = o6();
      s5(d5 !== "dylink.0");
    }
    for (var _4 = { neededDynlibs: [], tlsExports: /* @__PURE__ */ new Set(), weakImports: /* @__PURE__ */ new Set(), runtimePaths: [] }, p6 = 1, v5 = 2, S4 = 3, F5 = 4, h4 = 5, m7 = 256, g6 = 3, w7 = 1; r2 < t7; ) {
      var E6 = n3(), Y3 = i4();
      if (E6 === p6) _4.memorySize = i4(), _4.memoryAlign = i4(), _4.tableSize = i4(), _4.tableAlign = i4();
      else if (E6 === v5) _4.neededDynlibs = a3();
      else if (E6 === S4) for (var Q3 = i4(); Q3--; ) {
        var Z3 = o6(), ee3 = i4();
        ee3 & m7 && _4.tlsExports.add(Z3);
      }
      else if (E6 === F5) for (var Q3 = i4(); Q3--; ) {
        var Gr = o6(), Z3 = o6(), ee3 = i4();
        (ee3 & g6) == w7 && _4.weakImports.add(Z3);
      }
      else E6 === h4 ? _4.runtimePaths = a3() : r2 += Y3;
    }
    return _4;
  }, newDSO = (e, r2, t7) => {
    var n3 = { refcount: 1 / 0, name: e, exports: t7, global: true };
    return LDSO.loadedLibsByName[e] = n3, r2 != null && (LDSO.loadedLibsByHandle[r2] = n3), n3;
  }, LDSO = { loadedLibsByName: {}, loadedLibsByHandle: {}, init() {
    newDSO("__main__", 0, wasmImports);
  } }, alignMemory = (e, r2) => Math.ceil(e / r2) * r2, getMemory = (e) => {
    if (runtimeInitialized) return _calloc(e, 1);
    var r2 = ___heap_base, t7 = r2 + alignMemory(e, 16);
    ___heap_base = t7;
    var n3 = _emscripten_get_sbrk_ptr();
    return HEAPU32[n3 >> 2] = t7, r2;
  }, isInternalSym = (e) => ["memory", "__memory_base", "__table_base", "__stack_pointer", "__indirect_function_table", "__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm", "__start_em_js", "__stop_em_js"].includes(e) || e.startsWith("__em_js__"), wasmTableMirror = [], getWasmTableEntry = (e) => {
    var r2 = wasmTableMirror[e];
    return r2 || (wasmTableMirror[e] = r2 = wasmTable.get(e)), r2;
  }, updateTableMap = (e, r2) => {
    if (functionsInTableMap) for (var t7 = e; t7 < e + r2; t7++) {
      var n3 = getWasmTableEntry(t7);
      n3 && functionsInTableMap.set(n3, t7);
    }
  }, functionsInTableMap, getFunctionAddress = (e) => (functionsInTableMap || (functionsInTableMap = /* @__PURE__ */ new WeakMap(), updateTableMap(0, wasmTable.length)), functionsInTableMap.get(e) || 0), freeTableIndexes = [], getEmptyTableSlot = () => freeTableIndexes.length ? freeTableIndexes.pop() : wasmTable.grow(1), setWasmTableEntry = (e, r2) => {
    wasmTable.set(e, r2), wasmTableMirror[e] = wasmTable.get(e);
  }, uleb128EncodeWithLen = (e) => {
    let r2 = e.length;
    return [r2 % 128 | 128, r2 >> 7, ...e];
  }, wasmTypeCodes = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 }, generateTypePack = (e) => uleb128EncodeWithLen(Array.from(e, (r2) => {
    var t7 = wasmTypeCodes[r2];
    return t7;
  })), convertJsFunctionToWasm = (e, r2) => {
    var t7 = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, 1, ...uleb128EncodeWithLen([1, 96, ...generateTypePack(r2.slice(1)), ...generateTypePack(r2[0] === "v" ? "" : r2[0])]), 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0), n3 = new WebAssembly.Module(t7), i4 = new WebAssembly.Instance(n3, { e: { f: e } }), o6 = i4.exports.f;
    return o6;
  }, addFunction = (e, r2) => {
    var t7 = getFunctionAddress(e);
    if (t7) return t7;
    var n3 = getEmptyTableSlot();
    try {
      setWasmTableEntry(n3, e);
    } catch (o6) {
      if (!(o6 instanceof TypeError)) throw o6;
      var i4 = convertJsFunctionToWasm(e, r2);
      setWasmTableEntry(n3, i4);
    }
    return functionsInTableMap.set(e, n3), n3;
  }, updateGOT = (e, r2) => {
    for (var t7 in e) if (!isInternalSym(t7)) {
      var n3 = e[t7], i4 = GOT[t7] && GOT[t7].value != -1;
      if (r2 || !i4) {
        var o6;
        if (typeof n3 == "function") o6 = addFunction(n3);
        else if (typeof n3.value == "number") o6 = n3;
        else continue;
        GOT[t7] ?? (GOT[t7] = new WebAssembly.Global({ value: "i32", mutable: true })), GOT[t7].value = o6;
      }
    }
  }, isImmutableGlobal = (e) => {
    if (e instanceof WebAssembly.Global) try {
      e.value = e.value;
    } catch {
      return true;
    }
    return false;
  }, relocateExports = (e, r2 = 0) => {
    function t7(o6, a3) {
      return isImmutableGlobal(a3) ? new WebAssembly.Global({ value: "i32" }, a3.value + r2) : a3;
    }
    var n3 = {};
    for (var i4 in e) n3[i4] = t7(i4, e[i4]);
    return n3;
  }, isSymbolDefined = (e) => {
    var r2 = wasmImports[e];
    return !(!r2 || r2.stub);
  }, createNamedFunction = (e, r2) => Object.defineProperty(r2, "name", { value: e }), dynCall = (e, r2, t7 = [], n3 = false) => {
    var i4 = getWasmTableEntry(r2), o6 = i4(...t7);
    function a3(s5) {
      return s5;
    }
    return o6;
  }, stackSave = () => _emscripten_stack_get_current(), stackRestore = (e) => __emscripten_stack_restore(e), createInvokeFunction = (e) => (r2, ...t7) => {
    var n3 = stackSave();
    try {
      return dynCall(e, r2, t7);
    } catch (i4) {
      if (stackRestore(n3), !(i4 instanceof EmscriptenEH)) throw i4;
      if (_setThrew(1, 0), e[0] == "j") return 0n;
    }
  }, resolveGlobalSymbol = (e, r2 = false) => {
    var t7;
    return isSymbolDefined(e) ? t7 = wasmImports[e] : e.startsWith("invoke_") && (t7 = wasmImports[e] = createNamedFunction(e, createInvokeFunction(e.split("_")[1]))), { sym: t7, name: e };
  }, onPostCtors = [], addOnPostCtor = (e) => onPostCtors.push(e), UTF8ToString = (e, r2, t7) => e ? UTF8ArrayToString(HEAPU8, e, r2, t7) : "", loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
    var metadata = getDylinkMetadata(binary);
    function loadModule() {
      var memAlign = Math.pow(2, metadata.memoryAlign), memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0, tableBase = metadata.tableSize ? wasmTable.length : 0;
      handle && (HEAP8[handle + 8] = 1, HEAPU32[handle + 12 >> 2] = memoryBase, HEAP32[handle + 16 >> 2] = metadata.memorySize, HEAPU32[handle + 20 >> 2] = tableBase, HEAP32[handle + 24 >> 2] = metadata.tableSize), metadata.tableSize && wasmTable.grow(metadata.tableSize);
      var moduleExports;
      function resolveSymbol(e) {
        var r2 = resolveGlobalSymbol(e).sym;
        return !r2 && localScope && (r2 = localScope[e]), r2 || (r2 = moduleExports[e]), r2;
      }
      var proxyHandler = { get(e, r2) {
        switch (r2) {
          case "__memory_base":
            return memoryBase;
          case "__table_base":
            return tableBase;
        }
        if (r2 in wasmImports && !wasmImports[r2].stub) {
          var t7 = wasmImports[r2];
          return t7;
        }
        if (!(r2 in e)) {
          var n3;
          e[r2] = (...i4) => (n3 || (n3 = resolveSymbol(r2)), n3(...i4));
        }
        return e[r2];
      } }, proxy = new Proxy({}, proxyHandler), GOTProxy = new Proxy(metadata.weakImports, GOTHandler), info = { "GOT.mem": GOTProxy, "GOT.func": GOTProxy, env: proxy, wasi_snapshot_preview1: proxy };
      function postInstantiation(module, instance) {
        updateTableMap(tableBase, metadata.tableSize), moduleExports = relocateExports(instance.exports, memoryBase), updateGOT(moduleExports), flags.allowUndefined || reportUndefinedSymbols();
        function addEmAsm(addr, body) {
          for (var args = [], arity = 0; ; arity++) {
            var argName = "$" + arity;
            if (!body.includes(argName)) break;
            args.push(argName);
          }
          args = args.join();
          var func = `(${args}) => { ${body} };`;
          ASM_CONSTS[start] = eval(func);
        }
        if ("__start_em_asm" in moduleExports) for (var start = moduleExports.__start_em_asm.value, stop = moduleExports.__stop_em_asm.value; start < stop; ) {
          var jsString = UTF8ToString(start);
          addEmAsm(start, jsString), start = HEAPU8.indexOf(0, start) + 1;
        }
        function addEmJs(name, cSig, body) {
          var jsArgs = [];
          if (cSig = cSig.slice(1, -1), cSig != "void") {
            cSig = cSig.split(",");
            for (var arg of cSig) {
              var jsArg = arg.split(" ").pop();
              jsArgs.push(jsArg.replaceAll("*", ""));
            }
          }
          var func = `(${jsArgs}) => ${body};`;
          moduleExports[name] = eval(func);
        }
        for (var name in moduleExports) if (name.startsWith("__em_js__")) {
          var start = moduleExports[name].value, jsString = UTF8ToString(start), [sig, body] = jsString.split("<::>");
          addEmJs(name.replace("__em_js__", ""), sig, body), delete moduleExports[name];
        }
        var applyRelocs = moduleExports.__wasm_apply_data_relocs;
        applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
        var init = moduleExports.__wasm_call_ctors;
        return init && (runtimeInitialized ? init() : addOnPostCtor(init)), moduleExports;
      }
      if (flags.loadAsync) return (async () => {
        var e;
        return binary instanceof WebAssembly.Module ? e = new WebAssembly.Instance(binary, info) : { module: binary, instance: e } = await WebAssembly.instantiate(binary, info), postInstantiation(binary, e);
      })();
      var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary), instance = new WebAssembly.Instance(module, info);
      return postInstantiation(module, instance);
    }
    if (flags = { ...flags, rpath: { parentLibPath: libName, paths: metadata.runtimePaths } }, flags.loadAsync) return metadata.neededDynlibs.reduce((e, r2) => e.then(() => (r2 = findLibraryFS(r2, flags.rpath) ?? r2, loadDynamicLibrary(r2, flags, localScope))), Promise.resolve()).then(loadModule);
    for (var needed of metadata.neededDynlibs) needed = findLibraryFS(needed, flags.rpath) ?? needed, loadDynamicLibrary(needed, flags, localScope);
    return loadModule();
  }, mergeLibSymbols = (e, r2) => {
    for (var [t7, n3] of Object.entries(e)) {
      let i4 = (a3) => {
        isSymbolDefined(a3) || (wasmImports[a3] = n3);
      };
      i4(t7);
      let o6 = "__main_argc_argv";
      t7 == "main" && i4(o6), t7 == o6 && i4("main");
    }
  }, asyncLoad = async (e) => {
    var r2 = await readAsync(e);
    return new Uint8Array(r2);
  }, preloadPlugins = [], registerWasmPlugin = () => {
    var e = { promiseChainEnd: Promise.resolve(), canHandle: (r2) => !Module.noWasmDecoding && r2.endsWith(".so"), handle: async (r2, t7) => e.promiseChainEnd = e.promiseChainEnd.then(async () => {
      try {
        var n3 = await loadWebAssemblyModule(r2, { loadAsync: true, nodelete: true }, t7, {});
      } catch (i4) {
        throw new Error(`failed to instantiate wasm: ${t7}: ${i4}`);
      }
      return preloadedWasm[t7] = n3, r2;
    }) };
    preloadPlugins.push(e);
  }, preloadedWasm = {}, PATH = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
    var r2 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    return r2.exec(e).slice(1);
  }, normalizeArray: (e, r2) => {
    for (var t7 = 0, n3 = e.length - 1; n3 >= 0; n3--) {
      var i4 = e[n3];
      i4 === "." ? e.splice(n3, 1) : i4 === ".." ? (e.splice(n3, 1), t7++) : t7 && (e.splice(n3, 1), t7--);
    }
    if (r2) for (; t7; t7--) e.unshift("..");
    return e;
  }, normalize: (e) => {
    var r2 = PATH.isAbs(e), t7 = e.slice(-1) === "/";
    return e = PATH.normalizeArray(e.split("/").filter((n3) => !!n3), !r2).join("/"), !e && !r2 && (e = "."), e && t7 && (e += "/"), (r2 ? "/" : "") + e;
  }, dirname: (e) => {
    var r2 = PATH.splitPath(e), t7 = r2[0], n3 = r2[1];
    return !t7 && !n3 ? "." : (n3 && (n3 = n3.slice(0, -1)), t7 + n3);
  }, basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1], join: (...e) => PATH.normalize(e.join("/")), join2: (e, r2) => PATH.normalize(e + "/" + r2) }, replaceORIGIN = (e, r2) => {
    if (r2.startsWith("$ORIGIN")) {
      var t7 = PATH.dirname(e);
      return r2.replace("$ORIGIN", t7);
    }
    return r2;
  }, withStackSave = (e) => {
    var r2 = stackSave(), t7 = e();
    return stackRestore(r2), t7;
  }, stackAlloc = (e) => __emscripten_stack_alloc(e), lengthBytesUTF8 = (e) => {
    for (var r2 = 0, t7 = 0; t7 < e.length; ++t7) {
      var n3 = e.charCodeAt(t7);
      n3 <= 127 ? r2++ : n3 <= 2047 ? r2 += 2 : n3 >= 55296 && n3 <= 57343 ? (r2 += 4, ++t7) : r2 += 3;
    }
    return r2;
  }, stringToUTF8Array = (e, r2, t7, n3) => {
    if (!(n3 > 0)) return 0;
    for (var i4 = t7, o6 = t7 + n3 - 1, a3 = 0; a3 < e.length; ++a3) {
      var s5 = e.codePointAt(a3);
      if (s5 <= 127) {
        if (t7 >= o6) break;
        r2[t7++] = s5;
      } else if (s5 <= 2047) {
        if (t7 + 1 >= o6) break;
        r2[t7++] = 192 | s5 >> 6, r2[t7++] = 128 | s5 & 63;
      } else if (s5 <= 65535) {
        if (t7 + 2 >= o6) break;
        r2[t7++] = 224 | s5 >> 12, r2[t7++] = 128 | s5 >> 6 & 63, r2[t7++] = 128 | s5 & 63;
      } else {
        if (t7 + 3 >= o6) break;
        r2[t7++] = 240 | s5 >> 18, r2[t7++] = 128 | s5 >> 12 & 63, r2[t7++] = 128 | s5 >> 6 & 63, r2[t7++] = 128 | s5 & 63, a3++;
      }
    }
    return r2[t7] = 0, t7 - i4;
  }, stringToUTF8 = (e, r2, t7) => stringToUTF8Array(e, HEAPU8, r2, t7), stringToUTF8OnStack = (e) => {
    var r2 = lengthBytesUTF8(e) + 1, t7 = stackAlloc(r2);
    return stringToUTF8(e, t7, r2), t7;
  }, initRandomFill = () => {
    if (ENVIRONMENT_IS_NODE) {
      var e = require("node:crypto");
      return (r2) => (e.randomFillSync(r2), 0);
    }
    return (r2) => (crypto.getRandomValues(r2), 0);
  }, randomFill = (e) => (randomFill = initRandomFill())(e), PATH_FS = { resolve: (...e) => {
    for (var r2 = "", t7 = false, n3 = e.length - 1; n3 >= -1 && !t7; n3--) {
      var i4 = n3 >= 0 ? e[n3] : FS.cwd();
      if (typeof i4 != "string") throw new TypeError("Arguments to path.resolve must be strings");
      if (!i4) return "";
      r2 = i4 + "/" + r2, t7 = PATH.isAbs(i4);
    }
    return r2 = PATH.normalizeArray(r2.split("/").filter((o6) => !!o6), !t7).join("/"), (t7 ? "/" : "") + r2 || ".";
  }, relative: (e, r2) => {
    e = PATH_FS.resolve(e).slice(1), r2 = PATH_FS.resolve(r2).slice(1);
    function t7(u3) {
      for (var c3 = 0; c3 < u3.length && u3[c3] === ""; c3++) ;
      for (var f5 = u3.length - 1; f5 >= 0 && u3[f5] === ""; f5--) ;
      return c3 > f5 ? [] : u3.slice(c3, f5 - c3 + 1);
    }
    for (var n3 = t7(e.split("/")), i4 = t7(r2.split("/")), o6 = Math.min(n3.length, i4.length), a3 = o6, s5 = 0; s5 < o6; s5++) if (n3[s5] !== i4[s5]) {
      a3 = s5;
      break;
    }
    for (var l3 = [], s5 = a3; s5 < n3.length; s5++) l3.push("..");
    return l3 = l3.concat(i4.slice(a3)), l3.join("/");
  } }, FS_stdin_getChar_buffer = [], intArrayFromString = (e, r2, t7) => {
    var n3 = t7 > 0 ? t7 : lengthBytesUTF8(e) + 1, i4 = new Array(n3), o6 = stringToUTF8Array(e, i4, 0, i4.length);
    return r2 && (i4.length = o6), i4;
  }, FS_stdin_getChar = () => {
    if (!FS_stdin_getChar_buffer.length) {
      var e = null;
      if (ENVIRONMENT_IS_NODE) {
        var r2 = 256, t7 = Buffer.alloc(r2), n3 = 0, i4 = process.stdin.fd;
        try {
          n3 = fs.readSync(i4, t7, 0, r2);
        } catch (o6) {
          if (o6.toString().includes("EOF")) n3 = 0;
          else throw o6;
        }
        n3 > 0 && (e = t7.slice(0, n3).toString("utf-8"));
      } else globalThis.window?.prompt && (e = window.prompt("Input: "), e !== null && (e += `
`));
      if (!e) return null;
      FS_stdin_getChar_buffer = intArrayFromString(e, true);
    }
    return FS_stdin_getChar_buffer.shift();
  }, TTY = { ttys: [], init() {
  }, shutdown() {
  }, register(e, r2) {
    TTY.ttys[e] = { input: [], output: [], ops: r2 }, FS.registerDevice(e, TTY.stream_ops);
  }, stream_ops: { open(e) {
    var r2 = TTY.ttys[e.node.rdev];
    if (!r2) throw new FS.ErrnoError(43);
    e.tty = r2, e.seekable = false;
  }, close(e) {
    e.tty.ops.fsync(e.tty);
  }, fsync(e) {
    e.tty.ops.fsync(e.tty);
  }, read(e, r2, t7, n3, i4) {
    if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
    for (var o6 = 0, a3 = 0; a3 < n3; a3++) {
      var s5;
      try {
        s5 = e.tty.ops.get_char(e.tty);
      } catch {
        throw new FS.ErrnoError(29);
      }
      if (s5 === void 0 && o6 === 0) throw new FS.ErrnoError(6);
      if (s5 == null) break;
      o6++, r2[t7 + a3] = s5;
    }
    return o6 && (e.node.atime = Date.now()), o6;
  }, write(e, r2, t7, n3, i4) {
    if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
    try {
      for (var o6 = 0; o6 < n3; o6++) e.tty.ops.put_char(e.tty, r2[t7 + o6]);
    } catch {
      throw new FS.ErrnoError(29);
    }
    return n3 && (e.node.mtime = e.node.ctime = Date.now()), o6;
  } }, default_tty_ops: { get_char(e) {
    return FS_stdin_getChar();
  }, put_char(e, r2) {
    r2 === null || r2 === 10 ? (out(UTF8ArrayToString(e.output)), e.output = []) : r2 != 0 && e.output.push(r2);
  }, fsync(e) {
    e.output?.length > 0 && (out(UTF8ArrayToString(e.output)), e.output = []);
  }, ioctl_tcgets(e) {
    return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
  }, ioctl_tcsets(e, r2, t7) {
    return 0;
  }, ioctl_tiocgwinsz(e) {
    return [24, 80];
  } }, default_tty1_ops: { put_char(e, r2) {
    r2 === null || r2 === 10 ? (err(UTF8ArrayToString(e.output)), e.output = []) : r2 != 0 && e.output.push(r2);
  }, fsync(e) {
    e.output?.length > 0 && (err(UTF8ArrayToString(e.output)), e.output = []);
  } } }, zeroMemory = (e, r2) => HEAPU8.fill(0, e, e + r2), mmapAlloc = (e) => {
    e = alignMemory(e, 65536);
    var r2 = _emscripten_builtin_memalign(65536, e);
    return r2 && zeroMemory(r2, e), r2;
  }, MEMFS = { ops_table: null, mount(e) {
    return MEMFS.createNode(null, "/", 16895, 0);
  }, createNode(e, r2, t7, n3) {
    if (FS.isBlkdev(t7) || FS.isFIFO(t7)) throw new FS.ErrnoError(63);
    MEMFS.ops_table || (MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } });
    var i4 = FS.createNode(e, r2, t7, n3);
    return FS.isDir(i4.mode) ? (i4.node_ops = MEMFS.ops_table.dir.node, i4.stream_ops = MEMFS.ops_table.dir.stream, i4.contents = {}) : FS.isFile(i4.mode) ? (i4.node_ops = MEMFS.ops_table.file.node, i4.stream_ops = MEMFS.ops_table.file.stream, i4.usedBytes = 0, i4.contents = MEMFS.emptyFileContents ?? (MEMFS.emptyFileContents = new Uint8Array(0))) : FS.isLink(i4.mode) ? (i4.node_ops = MEMFS.ops_table.link.node, i4.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(i4.mode) && (i4.node_ops = MEMFS.ops_table.chrdev.node, i4.stream_ops = MEMFS.ops_table.chrdev.stream), i4.atime = i4.mtime = i4.ctime = Date.now(), e && (e.contents[r2] = i4, e.atime = e.mtime = e.ctime = i4.atime), i4;
  }, getFileDataAsTypedArray(e) {
    return e.contents.subarray(0, e.usedBytes);
  }, expandFileStorage(e, r2) {
    var t7 = e.contents.length;
    if (!(t7 >= r2)) {
      var n3 = 1024 * 1024;
      r2 = Math.max(r2, t7 * (t7 < n3 ? 2 : 1.125) >>> 0), t7 && (r2 = Math.max(r2, 256));
      var i4 = MEMFS.getFileDataAsTypedArray(e);
      e.contents = new Uint8Array(r2), e.contents.set(i4);
    }
  }, resizeFileStorage(e, r2) {
    if (e.usedBytes != r2) {
      var t7 = e.contents;
      e.contents = new Uint8Array(r2), e.contents.set(t7.subarray(0, Math.min(r2, e.usedBytes))), e.usedBytes = r2;
    }
  }, node_ops: { getattr(e) {
    var r2 = {};
    return r2.dev = FS.isChrdev(e.mode) ? e.id : 1, r2.ino = e.id, r2.mode = e.mode, r2.nlink = 1, r2.uid = 0, r2.gid = 0, r2.rdev = e.rdev, FS.isDir(e.mode) ? r2.size = 4096 : FS.isFile(e.mode) ? r2.size = e.usedBytes : FS.isLink(e.mode) ? r2.size = e.link.length : r2.size = 0, r2.atime = new Date(e.atime), r2.mtime = new Date(e.mtime), r2.ctime = new Date(e.ctime), r2.blksize = 4096, r2.blocks = Math.ceil(r2.size / r2.blksize), r2;
  }, setattr(e, r2) {
    for (let t7 of ["mode", "atime", "mtime", "ctime"]) r2[t7] != null && (e[t7] = r2[t7]);
    r2.size !== void 0 && MEMFS.resizeFileStorage(e, r2.size);
  }, lookup(e, r2) {
    throw MEMFS.doesNotExistError || (MEMFS.doesNotExistError = new FS.ErrnoError(44), MEMFS.doesNotExistError.stack = "<generic error, no stack>"), MEMFS.doesNotExistError;
  }, mknod(e, r2, t7, n3) {
    return MEMFS.createNode(e, r2, t7, n3);
  }, rename(e, r2, t7) {
    var n3;
    try {
      n3 = FS.lookupNode(r2, t7);
    } catch {
    }
    if (n3) {
      if (FS.isDir(e.mode)) for (var i4 in n3.contents) throw new FS.ErrnoError(55);
      FS.hashRemoveNode(n3);
    }
    delete e.parent.contents[e.name], r2.contents[t7] = e, e.name = t7, r2.ctime = r2.mtime = e.parent.ctime = e.parent.mtime = Date.now();
  }, unlink(e, r2) {
    delete e.contents[r2], e.ctime = e.mtime = Date.now();
  }, rmdir(e, r2) {
    var t7 = FS.lookupNode(e, r2);
    for (var n3 in t7.contents) throw new FS.ErrnoError(55);
    delete e.contents[r2], e.ctime = e.mtime = Date.now();
  }, readdir(e) {
    return [".", "..", ...Object.keys(e.contents)];
  }, symlink(e, r2, t7) {
    var n3 = MEMFS.createNode(e, r2, 41471, 0);
    return n3.link = t7, n3;
  }, readlink(e) {
    if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
    return e.link;
  } }, stream_ops: { read(e, r2, t7, n3, i4) {
    var o6 = e.node.contents;
    if (i4 >= e.node.usedBytes) return 0;
    var a3 = Math.min(e.node.usedBytes - i4, n3);
    return r2.set(o6.subarray(i4, i4 + a3), t7), a3;
  }, write(e, r2, t7, n3, i4, o6) {
    if (r2.buffer === HEAP8.buffer && (o6 = false), !n3) return 0;
    var a3 = e.node;
    return a3.mtime = a3.ctime = Date.now(), o6 ? (a3.contents = r2.subarray(t7, t7 + n3), a3.usedBytes = n3) : a3.usedBytes === 0 && i4 === 0 ? (a3.contents = r2.slice(t7, t7 + n3), a3.usedBytes = n3) : (MEMFS.expandFileStorage(a3, i4 + n3), a3.contents.set(r2.subarray(t7, t7 + n3), i4), a3.usedBytes = Math.max(a3.usedBytes, i4 + n3)), n3;
  }, llseek(e, r2, t7) {
    var n3 = r2;
    if (t7 === 1 ? n3 += e.position : t7 === 2 && FS.isFile(e.node.mode) && (n3 += e.node.usedBytes), n3 < 0) throw new FS.ErrnoError(28);
    return n3;
  }, mmap(e, r2, t7, n3, i4) {
    if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
    var o6, a3, s5 = e.node.contents;
    if (!(i4 & 2) && s5.buffer === HEAP8.buffer) a3 = false, o6 = s5.byteOffset;
    else {
      if (a3 = true, o6 = mmapAlloc(r2), !o6) throw new FS.ErrnoError(48);
      s5 && ((t7 > 0 || t7 + r2 < s5.length) && (s5.subarray ? s5 = s5.subarray(t7, t7 + r2) : s5 = Array.prototype.slice.call(s5, t7, t7 + r2)), HEAP8.set(s5, o6));
    }
    return { ptr: o6, allocated: a3 };
  }, msync(e, r2, t7, n3, i4) {
    return MEMFS.stream_ops.write(e, r2, 0, n3, t7, false), 0;
  } } }, FS_modeStringToFlags = (e) => {
    if (typeof e != "string") return e;
    var r2 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, t7 = r2[e];
    if (typeof t7 > "u") throw new Error(`Unknown file open mode: ${e}`);
    return t7;
  }, FS_fileDataToTypedArray = (e) => (typeof e == "string" && (e = intArrayFromString(e, true)), e.subarray || (e = new Uint8Array(e)), e), FS_getMode = (e, r2) => {
    var t7 = 0;
    return e && (t7 |= 365), r2 && (t7 |= 146), t7;
  }, ERRNO_CODES = { EPERM: 63, ENOENT: 44, ESRCH: 71, EINTR: 27, EIO: 29, ENXIO: 60, E2BIG: 1, ENOEXEC: 45, EBADF: 8, ECHILD: 12, EAGAIN: 6, EWOULDBLOCK: 6, ENOMEM: 48, EACCES: 2, EFAULT: 21, ENOTBLK: 105, EBUSY: 10, EEXIST: 20, EXDEV: 75, ENODEV: 43, ENOTDIR: 54, EISDIR: 31, EINVAL: 28, ENFILE: 41, EMFILE: 33, ENOTTY: 59, ETXTBSY: 74, EFBIG: 22, ENOSPC: 51, ESPIPE: 70, EROFS: 69, EMLINK: 34, EPIPE: 64, EDOM: 18, ERANGE: 68, ENOMSG: 49, EIDRM: 24, ECHRNG: 106, EL2NSYNC: 156, EL3HLT: 107, EL3RST: 108, ELNRNG: 109, EUNATCH: 110, ENOCSI: 111, EL2HLT: 112, EDEADLK: 16, ENOLCK: 46, EBADE: 113, EBADR: 114, EXFULL: 115, ENOANO: 104, EBADRQC: 103, EBADSLT: 102, EDEADLOCK: 16, EBFONT: 101, ENOSTR: 100, ENODATA: 116, ETIME: 117, ENOSR: 118, ENONET: 119, ENOPKG: 120, EREMOTE: 121, ENOLINK: 47, EADV: 122, ESRMNT: 123, ECOMM: 124, EPROTO: 65, EMULTIHOP: 36, EDOTDOT: 125, EBADMSG: 9, ENOTUNIQ: 126, EBADFD: 127, EREMCHG: 128, ELIBACC: 129, ELIBBAD: 130, ELIBSCN: 131, ELIBMAX: 132, ELIBEXEC: 133, ENOSYS: 52, ENOTEMPTY: 55, ENAMETOOLONG: 37, ELOOP: 32, EOPNOTSUPP: 138, EPFNOSUPPORT: 139, ECONNRESET: 15, ENOBUFS: 42, EAFNOSUPPORT: 5, EPROTOTYPE: 67, ENOTSOCK: 57, ENOPROTOOPT: 50, ESHUTDOWN: 140, ECONNREFUSED: 14, EADDRINUSE: 3, ECONNABORTED: 13, ENETUNREACH: 40, ENETDOWN: 38, ETIMEDOUT: 73, EHOSTDOWN: 142, EHOSTUNREACH: 23, EINPROGRESS: 26, EALREADY: 7, EDESTADDRREQ: 17, EMSGSIZE: 35, EPROTONOSUPPORT: 66, ESOCKTNOSUPPORT: 137, EADDRNOTAVAIL: 4, ENETRESET: 39, EISCONN: 30, ENOTCONN: 53, ETOOMANYREFS: 141, EUSERS: 136, EDQUOT: 19, ESTALE: 72, ENOTSUP: 138, ENOMEDIUM: 148, EILSEQ: 25, EOVERFLOW: 61, ECANCELED: 11, ENOTRECOVERABLE: 56, EOWNERDEAD: 62, ESTRPIPE: 135 }, PROXYFS = { mount(e) {
    return PROXYFS.createNode(null, "/", e.opts.fs.lstat(e.opts.root).mode, 0);
  }, createNode(e, r2, t7, n3) {
    if (!FS.isDir(t7) && !FS.isFile(t7) && !FS.isLink(t7)) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
    var i4 = FS.createNode(e, r2, t7);
    return i4.node_ops = PROXYFS.node_ops, i4.stream_ops = PROXYFS.stream_ops, i4;
  }, realPath(e) {
    for (var r2 = []; e.parent !== e; ) r2.push(e.name), e = e.parent;
    return r2.push(e.mount.opts.root), r2.reverse(), PATH.join(...r2);
  }, node_ops: { getattr(e) {
    var r2 = PROXYFS.realPath(e), t7;
    try {
      t7 = e.mount.opts.fs.lstat(r2);
    } catch (n3) {
      throw n3.code ? new FS.ErrnoError(ERRNO_CODES[n3.code]) : n3;
    }
    return { dev: t7.dev, ino: t7.ino, mode: t7.mode, nlink: t7.nlink, uid: t7.uid, gid: t7.gid, rdev: t7.rdev, size: t7.size, atime: t7.atime, mtime: t7.mtime, ctime: t7.ctime, blksize: t7.blksize, blocks: t7.blocks };
  }, setattr(e, r2) {
    var t7 = PROXYFS.realPath(e);
    try {
      if (r2.mode !== void 0 && (e.mount.opts.fs.chmod(t7, r2.mode), e.mode = r2.mode), r2.atime || r2.mtime) {
        var n3 = new Date(r2.atime || r2.mtime), i4 = new Date(r2.mtime || r2.atime);
        e.mount.opts.fs.utime(t7, n3, i4);
      }
      r2.size !== void 0 && e.mount.opts.fs.truncate(t7, r2.size);
    } catch (o6) {
      throw o6.code ? new FS.ErrnoError(ERRNO_CODES[o6.code]) : o6;
    }
  }, lookup(e, r2) {
    try {
      var t7 = PATH.join2(PROXYFS.realPath(e), r2), n3 = e.mount.opts.fs.lstat(t7).mode, i4 = PROXYFS.createNode(e, r2, n3);
      return i4;
    } catch (o6) {
      throw o6.code ? new FS.ErrnoError(ERRNO_CODES[o6.code]) : o6;
    }
  }, mknod(e, r2, t7, n3) {
    var i4 = PROXYFS.createNode(e, r2, t7, n3), o6 = PROXYFS.realPath(i4);
    try {
      FS.isDir(i4.mode) ? i4.mount.opts.fs.mkdir(o6, i4.mode) : i4.mount.opts.fs.writeFile(o6, "", { mode: i4.mode });
    } catch (a3) {
      throw a3.code ? new FS.ErrnoError(ERRNO_CODES[a3.code]) : a3;
    }
    return i4;
  }, rename(e, r2, t7) {
    var n3 = PROXYFS.realPath(e), i4 = PATH.join2(PROXYFS.realPath(r2), t7);
    try {
      e.mount.opts.fs.rename(n3, i4), e.name = t7;
    } catch (o6) {
      throw o6.code ? new FS.ErrnoError(ERRNO_CODES[o6.code]) : o6;
    }
  }, unlink(e, r2) {
    var t7 = PATH.join2(PROXYFS.realPath(e), r2);
    try {
      e.mount.opts.fs.unlink(t7);
    } catch (n3) {
      throw n3.code ? new FS.ErrnoError(ERRNO_CODES[n3.code]) : n3;
    }
  }, rmdir(e, r2) {
    var t7 = PATH.join2(PROXYFS.realPath(e), r2);
    try {
      e.mount.opts.fs.rmdir(t7);
    } catch (n3) {
      throw n3.code ? new FS.ErrnoError(ERRNO_CODES[n3.code]) : n3;
    }
  }, readdir(e) {
    var r2 = PROXYFS.realPath(e);
    try {
      return e.mount.opts.fs.readdir(r2);
    } catch (t7) {
      throw t7.code ? new FS.ErrnoError(ERRNO_CODES[t7.code]) : t7;
    }
  }, symlink(e, r2, t7) {
    var n3 = PATH.join2(PROXYFS.realPath(e), r2);
    try {
      e.mount.opts.fs.symlink(t7, n3);
    } catch (i4) {
      throw i4.code ? new FS.ErrnoError(ERRNO_CODES[i4.code]) : i4;
    }
  }, readlink(e) {
    var r2 = PROXYFS.realPath(e);
    try {
      return e.mount.opts.fs.readlink(r2);
    } catch (t7) {
      throw t7.code ? new FS.ErrnoError(ERRNO_CODES[t7.code]) : t7;
    }
  } }, stream_ops: { open(e) {
    var r2 = PROXYFS.realPath(e.node);
    try {
      e.nfd = e.node.mount.opts.fs.open(r2, e.flags);
    } catch (t7) {
      throw t7.code ? new FS.ErrnoError(ERRNO_CODES[t7.code]) : t7;
    }
  }, close(e) {
    try {
      e.node.mount.opts.fs.close(e.nfd);
    } catch (r2) {
      throw r2.code ? new FS.ErrnoError(ERRNO_CODES[r2.code]) : r2;
    }
  }, read(e, r2, t7, n3, i4) {
    try {
      return e.node.mount.opts.fs.read(e.nfd, r2, t7, n3, i4);
    } catch (o6) {
      throw o6.code ? new FS.ErrnoError(ERRNO_CODES[o6.code]) : o6;
    }
  }, write(e, r2, t7, n3, i4) {
    try {
      return e.node.mount.opts.fs.write(e.nfd, r2, t7, n3, i4);
    } catch (o6) {
      throw o6.code ? new FS.ErrnoError(ERRNO_CODES[o6.code]) : o6;
    }
  }, llseek(e, r2, t7) {
    var n3 = r2;
    if (t7 === 1) n3 += e.position;
    else if (t7 === 2 && FS.isFile(e.node.mode)) try {
      var i4 = e.node.node_ops.getattr(e.node);
      n3 += i4.size;
    } catch (o6) {
      throw new FS.ErrnoError(ERRNO_CODES[o6.code]);
    }
    if (n3 < 0) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
    return n3;
  } } }, FS_createDataFile = (...e) => FS.createDataFile(...e), getUniqueRunDependency = (e) => e, dependenciesPromise = null, resolveRunDependencies = async () => dependenciesPromise, runDependencies = 0, dependenciesPromiseResolve = null, removeRunDependency = (e) => {
    runDependencies--, Module.monitorRunDependencies?.(runDependencies), runDependencies || dependenciesPromiseResolve();
  }, addRunDependency = (e) => {
    runDependencies || (dependenciesPromise = new Promise((r2) => dependenciesPromiseResolve = r2)), runDependencies++, Module.monitorRunDependencies?.(runDependencies);
  }, FS_handledByPreloadPlugin = async (e, r2) => {
    typeof Browser < "u" && Browser.init();
    for (var t7 of preloadPlugins) if (t7.canHandle(r2)) return t7.handle(e, r2);
    return e;
  }, FS_preloadFile = async (e, r2, t7, n3, i4, o6, a3, s5) => {
    var l3 = r2 ? PATH_FS.resolve(PATH.join2(e, r2)) : e, u3 = getUniqueRunDependency(`cp ${l3}`);
    addRunDependency(u3);
    try {
      var c3 = t7;
      typeof t7 == "string" && (c3 = await asyncLoad(t7)), c3 = await FS_handledByPreloadPlugin(c3, l3), s5?.(), o6 || FS_createDataFile(e, r2, c3, n3, i4, a3);
    } finally {
      removeRunDependency(u3);
    }
  }, FS_createPreloadedFile = (e, r2, t7, n3, i4, o6, a3, s5, l3, u3) => {
    FS_preloadFile(e, r2, t7, n3, i4, s5, l3, u3).then(o6).catch(a3);
  }, FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, filesystems: null, syncFSRequests: 0, ErrnoError: class {
    constructor(e) {
      P(this, "name", "ErrnoError");
      this.errno = e;
    }
  }, FSStream: class {
    constructor() {
      P(this, "shared", {});
    }
    get object() {
      return this.node;
    }
    set object(e) {
      this.node = e;
    }
    get isRead() {
      return (this.flags & 2097155) !== 1;
    }
    get isWrite() {
      return (this.flags & 2097155) !== 0;
    }
    get isAppend() {
      return this.flags & 1024;
    }
    get flags() {
      return this.shared.flags;
    }
    set flags(e) {
      this.shared.flags = e;
    }
    get position() {
      return this.shared.position;
    }
    set position(e) {
      this.shared.position = e;
    }
  }, FSNode: class {
    constructor(e, r2, t7, n3) {
      P(this, "node_ops", {});
      P(this, "stream_ops", {});
      P(this, "readMode", 365);
      P(this, "writeMode", 146);
      P(this, "mounted", null);
      e || (e = this), this.parent = e, this.mount = e.mount, this.id = FS.nextInode++, this.name = r2, this.mode = t7, this.rdev = n3, this.atime = this.mtime = this.ctime = Date.now();
    }
    get read() {
      return (this.mode & this.readMode) === this.readMode;
    }
    set read(e) {
      e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
    }
    get write() {
      return (this.mode & this.writeMode) === this.writeMode;
    }
    set write(e) {
      e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
    }
    get isFolder() {
      return FS.isDir(this.mode);
    }
    get isDevice() {
      return FS.isChrdev(this.mode);
    }
    addListener(e, r2 = false) {
      var t7 = { cb: e, exclusive: r2 }, n3 = this.listeners ?? (this.listeners = /* @__PURE__ */ new Set());
      return n3.add(t7), { listeners: n3, entry: t7 };
    }
    notifyListeners(e) {
      if (this.listeners) {
        var r2;
        for (var t7 of this.listeners) t7.exclusive ? (r2 || (r2 = [])).push(t7) : t7.cb(e);
        if (r2) {
          var n3 = (this.exclTurn || 0) % r2.length;
          this.exclTurn = n3 + 1, r2[n3].cb(e);
        }
      }
    }
  }, lookupPath(e, r2 = {}) {
    if (!e) throw new FS.ErrnoError(44);
    r2.follow_mount ?? (r2.follow_mount = true), PATH.isAbs(e) || (e = FS.cwd() + "/" + e);
    e: for (var t7 = 0; t7 < 40; t7++) {
      for (var n3 = e.split("/").filter((u3) => !!u3), i4 = FS.root, o6 = "/", a3 = 0; a3 < n3.length; a3++) {
        var s5 = a3 === n3.length - 1;
        if (s5 && r2.parent) break;
        if (n3[a3] !== ".") {
          if (n3[a3] === "..") {
            if (o6 = PATH.dirname(o6), FS.isRoot(i4)) {
              e = o6 + "/" + n3.slice(a3 + 1).join("/"), t7--;
              continue e;
            } else i4 = i4.parent;
            continue;
          }
          o6 = PATH.join2(o6, n3[a3]);
          try {
            i4 = FS.lookupNode(i4, n3[a3]);
          } catch (u3) {
            if (u3?.errno === 44 && s5 && r2.noent_okay) return { path: o6 };
            throw u3;
          }
          if (FS.isMountpoint(i4) && (!s5 || r2.follow_mount) && (i4 = i4.mounted.root), FS.isLink(i4.mode) && (!s5 || r2.follow)) {
            if (!i4.node_ops.readlink) throw new FS.ErrnoError(52);
            var l3 = i4.node_ops.readlink(i4);
            PATH.isAbs(l3) || (l3 = PATH.dirname(o6) + "/" + l3), e = l3 + "/" + n3.slice(a3 + 1).join("/");
            continue e;
          }
        }
      }
      return { path: o6, node: i4 };
    }
    throw new FS.ErrnoError(32);
  }, getPath(e) {
    for (var r2; ; ) {
      if (FS.isRoot(e)) {
        var t7 = e.mount.mountpoint;
        return r2 ? t7[t7.length - 1] !== "/" ? `${t7}/${r2}` : t7 + r2 : t7;
      }
      r2 = r2 ? `${e.name}/${r2}` : e.name, e = e.parent;
    }
  }, hashName(e, r2) {
    for (var t7 = 0, n3 = 0; n3 < r2.length; n3++) t7 = (t7 << 5) - t7 + r2.charCodeAt(n3) | 0;
    return (e + t7 >>> 0) % FS.nameTable.length;
  }, hashAddNode(e) {
    var r2 = FS.hashName(e.parent.id, e.name);
    e.name_next = FS.nameTable[r2], FS.nameTable[r2] = e;
  }, hashRemoveNode(e) {
    var r2 = FS.hashName(e.parent.id, e.name);
    if (FS.nameTable[r2] === e) FS.nameTable[r2] = e.name_next;
    else for (var t7 = FS.nameTable[r2]; t7; ) {
      if (t7.name_next === e) {
        t7.name_next = e.name_next;
        break;
      }
      t7 = t7.name_next;
    }
  }, lookupNode(e, r2) {
    var t7 = FS.mayLookup(e);
    if (t7) throw new FS.ErrnoError(t7);
    for (var n3 = FS.hashName(e.id, r2), i4 = FS.nameTable[n3]; i4; i4 = i4.name_next) {
      var o6 = i4.name;
      if (i4.parent.id === e.id && o6 === r2) return i4;
    }
    return FS.lookup(e, r2);
  }, createNode(e, r2, t7, n3) {
    var i4 = new FS.FSNode(e, r2, t7, n3);
    return FS.hashAddNode(i4), i4;
  }, destroyNode(e) {
    FS.hashRemoveNode(e);
  }, isRoot(e) {
    return e === e.parent;
  }, isMountpoint(e) {
    return !!e.mounted;
  }, isFile(e) {
    return (e & 61440) === 32768;
  }, isDir(e) {
    return (e & 61440) === 16384;
  }, isLink(e) {
    return (e & 61440) === 40960;
  }, isChrdev(e) {
    return (e & 61440) === 8192;
  }, isBlkdev(e) {
    return (e & 61440) === 24576;
  }, isFIFO(e) {
    return (e & 61440) === 4096;
  }, isSocket(e) {
    return (e & 49152) === 49152;
  }, flagsToPermissionString(e) {
    var r2 = ["r", "w", "rw"][e & 3];
    return e & 512 && (r2 += "w"), r2;
  }, nodePermissions(e, r2) {
    return FS.ignorePermissions ? 0 : r2.includes("r") && !(e.mode & 292) || r2.includes("w") && !(e.mode & 146) || r2.includes("x") && !(e.mode & 73) ? 2 : 0;
  }, mayLookup(e) {
    if (!FS.isDir(e.mode)) return 54;
    var r2 = FS.nodePermissions(e, "x");
    return r2 || (e.node_ops.lookup ? 0 : 2);
  }, mayCreate(e, r2) {
    if (!FS.isDir(e.mode)) return 54;
    try {
      var t7 = FS.lookupNode(e, r2);
      return 20;
    } catch {
    }
    return FS.nodePermissions(e, "wx");
  }, mayDelete(e, r2, t7) {
    var n3;
    try {
      n3 = FS.lookupNode(e, r2);
    } catch (o6) {
      return o6.errno;
    }
    var i4 = FS.nodePermissions(e, "wx");
    if (i4) return i4;
    if (t7) {
      if (!FS.isDir(n3.mode)) return 54;
      if (FS.isRoot(n3) || FS.getPath(n3) === FS.cwd()) return 10;
    } else if (FS.isDir(n3.mode)) return 31;
    return 0;
  }, mayOpen(e, r2) {
    if (!e) return 44;
    if (FS.isLink(e.mode)) return 32;
    var t7 = FS.flagsToPermissionString(r2);
    return FS.isDir(e.mode) && (t7 !== "r" || r2 & 576) ? 31 : FS.nodePermissions(e, t7);
  }, checkOpExists(e, r2) {
    if (!e) throw new FS.ErrnoError(r2);
    return e;
  }, MAX_OPEN_FDS: 4096, nextfd() {
    for (var e = 0; e <= FS.MAX_OPEN_FDS; e++) if (!FS.streams[e]) return e;
    throw new FS.ErrnoError(33);
  }, getStreamChecked(e) {
    var r2 = FS.getStream(e);
    if (!r2) throw new FS.ErrnoError(8);
    return r2;
  }, getStream: (e) => FS.streams[e], createStream(e, r2 = -1) {
    return e = Object.assign(new FS.FSStream(), e), r2 == -1 && (r2 = FS.nextfd()), e.fd = r2, FS.streams[r2] = e, e;
  }, closeStream(e) {
    FS.streams[e] = null;
  }, dupStream(e, r2 = -1) {
    var t7 = FS.createStream(e, r2);
    return t7.stream_ops?.dup?.(t7), t7;
  }, doSetAttr(e, r2, t7) {
    var n3 = e?.stream_ops.setattr, i4 = n3 ? e : r2;
    n3 ?? (n3 = r2.node_ops.setattr), FS.checkOpExists(n3, 63);
    try {
      n3(i4, t7);
    } catch (o6) {
      throw o6 instanceof RangeError ? new FS.ErrnoError(22) : o6;
    }
  }, chrdev_stream_ops: { open(e) {
    var r2 = FS.getDevice(e.node.rdev);
    e.stream_ops = r2.stream_ops, e.stream_ops.open?.(e);
  }, llseek() {
    throw new FS.ErrnoError(70);
  } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, r2) => e << 8 | r2, registerDevice(e, r2) {
    FS.devices[e] = { stream_ops: r2 };
  }, getDevice: (e) => FS.devices[e], getMounts(e) {
    for (var r2 = [], t7 = [e]; t7.length; ) {
      var n3 = t7.pop();
      r2.push(n3), t7.push(...n3.mounts);
    }
    return r2;
  }, syncfs(e, r2) {
    typeof e == "function" && (r2 = e, e = false), FS.syncFSRequests++, FS.syncFSRequests > 1 && err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
    var t7 = FS.getMounts(FS.root.mount), n3 = 0;
    function i4(s5) {
      return FS.syncFSRequests--, r2(s5);
    }
    function o6(s5) {
      if (s5) return o6.errored ? void 0 : (o6.errored = true, i4(s5));
      ++n3 >= t7.length && i4(null);
    }
    for (var a3 of t7) a3.type.syncfs ? a3.type.syncfs(a3, e, o6) : o6(null);
  }, mount(e, r2, t7) {
    var n3 = t7 === "/", i4 = !t7, o6;
    if (n3 && FS.root) throw new FS.ErrnoError(10);
    if (!n3 && !i4) {
      var a3 = FS.lookupPath(t7, { follow_mount: false });
      if (t7 = a3.path, o6 = a3.node, FS.isMountpoint(o6)) throw new FS.ErrnoError(10);
      if (!FS.isDir(o6.mode)) throw new FS.ErrnoError(54);
    }
    var s5 = { type: e, opts: r2, mountpoint: t7, mounts: [] }, l3 = e.mount(s5);
    return l3.mount = s5, s5.root = l3, n3 ? FS.root = l3 : o6 && (o6.mounted = s5, o6.mount && o6.mount.mounts.push(s5)), l3;
  }, unmount(e) {
    var r2 = FS.lookupPath(e, { follow_mount: false });
    if (!FS.isMountpoint(r2.node)) throw new FS.ErrnoError(28);
    var t7 = r2.node, n3 = t7.mounted, i4 = FS.getMounts(n3);
    for (var [o6, a3] of Object.entries(FS.nameTable)) for (; a3; ) {
      var s5 = a3.name_next;
      i4.includes(a3.mount) && FS.destroyNode(a3), a3 = s5;
    }
    t7.mounted = null;
    var l3 = t7.mount.mounts.indexOf(n3);
    t7.mount.mounts.splice(l3, 1);
  }, lookup(e, r2) {
    return e.node_ops.lookup(e, r2);
  }, mknod(e, r2, t7) {
    var n3 = FS.lookupPath(e, { parent: true }), i4 = n3.node, o6 = PATH.basename(e);
    if (!o6) throw new FS.ErrnoError(28);
    if (o6 === "." || o6 === "..") throw new FS.ErrnoError(20);
    var a3 = FS.mayCreate(i4, o6);
    if (a3) throw new FS.ErrnoError(a3);
    if (!i4.node_ops.mknod) throw new FS.ErrnoError(63);
    return i4.node_ops.mknod(i4, o6, r2, t7);
  }, statfs(e) {
    return FS.statfsNode(FS.lookupPath(e, { follow: true }).node);
  }, statfsStream(e) {
    return FS.statfsNode(e.node);
  }, statfsNode(e) {
    var r2 = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: FS.nextInode, ffree: FS.nextInode - 1, fsid: 42, flags: 2, namelen: 255 };
    return e.node_ops.statfs && Object.assign(r2, e.node_ops.statfs(e.mount.opts.root)), r2;
  }, create(e, r2 = 438) {
    return r2 &= 4095, r2 |= 32768, FS.mknod(e, r2, 0);
  }, mkdir(e, r2 = 511) {
    return r2 &= 1023, r2 |= 16384, FS.mknod(e, r2, 0);
  }, mkdirTree(e, r2) {
    var t7 = e.split("/"), n3 = "";
    for (var i4 of t7) if (i4) {
      (n3 || PATH.isAbs(e)) && (n3 += "/"), n3 += i4;
      try {
        FS.mkdir(n3, r2);
      } catch (o6) {
        if (o6.errno != 20) throw o6;
      }
    }
  }, mkdev(e, r2, t7) {
    return typeof t7 > "u" && (t7 = r2, r2 = 438), r2 |= 8192, FS.mknod(e, r2, t7);
  }, symlink(e, r2) {
    if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
    var t7 = FS.lookupPath(r2, { parent: true }), n3 = t7.node;
    if (!n3) throw new FS.ErrnoError(44);
    var i4 = PATH.basename(r2), o6 = FS.mayCreate(n3, i4);
    if (o6) throw new FS.ErrnoError(o6);
    if (!n3.node_ops.symlink) throw new FS.ErrnoError(63);
    return n3.node_ops.symlink(n3, i4, e);
  }, link(e, r2, t7) {
    var n3 = FS.lookupPath(r2, { parent: true }), i4 = n3.node;
    if (!i4) throw new FS.ErrnoError(44);
    var o6 = PATH.basename(r2), a3 = FS.mayCreate(i4, o6);
    if (a3) throw new FS.ErrnoError(a3);
    if (!i4.node_ops.link) throw new FS.ErrnoError(34);
    return i4.node_ops.link(i4, o6, e, t7);
  }, rename(e, r2) {
    var t7 = PATH.dirname(e), n3 = PATH.dirname(r2), i4 = PATH.basename(e), o6 = PATH.basename(r2), a3, s5, l3;
    if (a3 = FS.lookupPath(e, { parent: true }), s5 = a3.node, a3 = FS.lookupPath(r2, { parent: true }), l3 = a3.node, !s5 || !l3) throw new FS.ErrnoError(44);
    if (s5.mount !== l3.mount) throw new FS.ErrnoError(75);
    var u3 = FS.lookupNode(s5, i4), c3 = PATH_FS.relative(e, n3);
    if (c3.charAt(0) !== ".") throw new FS.ErrnoError(28);
    if (c3 = PATH_FS.relative(r2, t7), c3.charAt(0) !== ".") throw new FS.ErrnoError(55);
    var f5;
    try {
      f5 = FS.lookupNode(l3, o6);
    } catch {
    }
    if (u3 !== f5) {
      var d5 = FS.isDir(u3.mode), _4 = FS.mayDelete(s5, i4, d5);
      if (_4) throw new FS.ErrnoError(_4);
      if (_4 = f5 ? FS.mayDelete(l3, o6, d5) : FS.mayCreate(l3, o6), _4) throw new FS.ErrnoError(_4);
      if (!s5.node_ops.rename) throw new FS.ErrnoError(63);
      if (FS.isMountpoint(u3) || f5 && FS.isMountpoint(f5)) throw new FS.ErrnoError(10);
      if (l3 !== s5 && (_4 = FS.nodePermissions(s5, "w"), _4)) throw new FS.ErrnoError(_4);
      FS.hashRemoveNode(u3);
      try {
        s5.node_ops.rename(u3, l3, o6), u3.parent = l3;
      } catch (p6) {
        throw p6;
      } finally {
        FS.hashAddNode(u3);
      }
    }
  }, rmdir(e) {
    var r2 = FS.lookupPath(e, { parent: true }), t7 = r2.node, n3 = PATH.basename(e), i4 = FS.lookupNode(t7, n3), o6 = FS.mayDelete(t7, n3, true);
    if (o6) throw new FS.ErrnoError(o6);
    if (!t7.node_ops.rmdir) throw new FS.ErrnoError(63);
    if (FS.isMountpoint(i4)) throw new FS.ErrnoError(10);
    t7.node_ops.rmdir(t7, n3), FS.destroyNode(i4);
  }, readdir(e) {
    var r2 = FS.lookupPath(e, { follow: true }), t7 = r2.node, n3 = FS.checkOpExists(t7.node_ops.readdir, 54);
    return n3(t7);
  }, unlink(e) {
    var r2 = FS.lookupPath(e, { parent: true }), t7 = r2.node;
    if (!t7) throw new FS.ErrnoError(44);
    var n3 = PATH.basename(e), i4 = FS.lookupNode(t7, n3), o6 = FS.mayDelete(t7, n3, false);
    if (o6) throw new FS.ErrnoError(o6);
    if (!t7.node_ops.unlink) throw new FS.ErrnoError(63);
    if (FS.isMountpoint(i4)) throw new FS.ErrnoError(10);
    t7.node_ops.unlink(t7, n3), FS.destroyNode(i4);
  }, readlink(e) {
    var r2 = FS.lookupPath(e), t7 = r2.node;
    if (!t7) throw new FS.ErrnoError(44);
    if (!t7.node_ops.readlink) throw new FS.ErrnoError(28);
    return t7.node_ops.readlink(t7);
  }, stat(e, r2) {
    var t7 = FS.lookupPath(e, { follow: !r2 }), n3 = t7.node, i4 = FS.checkOpExists(n3.node_ops.getattr, 63);
    return i4(n3);
  }, fstat(e) {
    var r2 = FS.getStreamChecked(e), t7 = r2.node, n3 = r2.stream_ops.getattr, i4 = n3 ? r2 : t7;
    return n3 ?? (n3 = t7.node_ops.getattr), FS.checkOpExists(n3, 63), n3(i4);
  }, lstat(e) {
    return FS.stat(e, true);
  }, doChmod(e, r2, t7, n3) {
    FS.doSetAttr(e, r2, { mode: t7 & 4095 | r2.mode & -4096, ctime: Date.now(), dontFollow: n3 });
  }, chmod(e, r2, t7) {
    var n3;
    if (typeof e == "string") {
      var i4 = FS.lookupPath(e, { follow: !t7 });
      n3 = i4.node;
    } else n3 = e;
    FS.doChmod(null, n3, r2, t7);
  }, lchmod(e, r2) {
    FS.chmod(e, r2, true);
  }, fchmod(e, r2) {
    var t7 = FS.getStreamChecked(e);
    FS.doChmod(t7, t7.node, r2, false);
  }, doChown(e, r2, t7) {
    FS.doSetAttr(e, r2, { timestamp: Date.now(), dontFollow: t7 });
  }, chown(e, r2, t7, n3) {
    var i4;
    if (typeof e == "string") {
      var o6 = FS.lookupPath(e, { follow: !n3 });
      i4 = o6.node;
    } else i4 = e;
    FS.doChown(null, i4, n3);
  }, lchown(e, r2, t7) {
    FS.chown(e, r2, t7, true);
  }, fchown(e, r2, t7) {
    var n3 = FS.getStreamChecked(e);
    FS.doChown(n3, n3.node, false);
  }, doTruncate(e, r2, t7) {
    if (FS.isDir(r2.mode)) throw new FS.ErrnoError(31);
    if (!FS.isFile(r2.mode)) throw new FS.ErrnoError(28);
    var n3 = FS.nodePermissions(r2, "w");
    if (n3) throw new FS.ErrnoError(n3);
    FS.doSetAttr(e, r2, { size: t7, timestamp: Date.now() });
  }, truncate(e, r2) {
    if (r2 < 0) throw new FS.ErrnoError(28);
    var t7;
    if (typeof e == "string") {
      var n3 = FS.lookupPath(e, { follow: true });
      t7 = n3.node;
    } else t7 = e;
    FS.doTruncate(null, t7, r2);
  }, ftruncate(e, r2) {
    var t7 = FS.getStreamChecked(e);
    if (r2 < 0 || !(t7.flags & 2097155)) throw new FS.ErrnoError(28);
    FS.doTruncate(t7, t7.node, r2);
  }, utime(e, r2, t7, n3) {
    var i4 = FS.lookupPath(e, { follow: !n3 });
    FS.doSetAttr(null, i4.node, { atime: r2, mtime: t7, dontFollow: n3 });
  }, open(e, r2, t7 = 438) {
    if (e === "") throw new FS.ErrnoError(44);
    r2 = FS_modeStringToFlags(r2), r2 & 64 ? t7 = t7 & 4095 | 32768 : t7 = 0;
    var n3, i4;
    if (typeof e == "object") n3 = e;
    else {
      i4 = e.endsWith("/");
      var o6 = FS.lookupPath(e, { follow: !(r2 & 131072), noent_okay: true });
      n3 = o6.node, e = o6.path;
    }
    var a3 = false;
    if (r2 & 64) if (n3) {
      if (r2 & 128) throw new FS.ErrnoError(20);
    } else {
      if (i4) throw new FS.ErrnoError(31);
      n3 = FS.mknod(e, t7 | 511, 0), a3 = true;
    }
    if (!n3) throw new FS.ErrnoError(44);
    if (FS.isChrdev(n3.mode) && (r2 &= -513), r2 & 65536 && !FS.isDir(n3.mode)) throw new FS.ErrnoError(54);
    if (!a3) {
      var s5 = FS.mayOpen(n3, r2);
      if (s5) throw new FS.ErrnoError(s5);
    }
    r2 & 512 && !a3 && FS.truncate(n3, 0), r2 &= -131713;
    var l3 = FS.createStream({ node: n3, path: FS.getPath(n3), flags: r2, seekable: true, position: 0, stream_ops: n3.stream_ops, ungotten: [], error: false });
    return l3.stream_ops.open && l3.stream_ops.open(l3), a3 && FS.chmod(n3, t7 & 511), l3;
  }, close(e) {
    if (FS.isClosed(e)) throw new FS.ErrnoError(8);
    e.getdents && (e.getdents = null), e.node?.notifyListeners(32);
    try {
      e.stream_ops.close && e.stream_ops.close(e);
    } catch (r2) {
      throw r2;
    } finally {
      FS.closeStream(e.fd);
    }
    e.fd = null;
  }, isClosed(e) {
    return e.fd === null;
  }, llseek(e, r2, t7) {
    if (FS.isClosed(e)) throw new FS.ErrnoError(8);
    if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
    if (t7 != 0 && t7 != 1 && t7 != 2) throw new FS.ErrnoError(28);
    return e.position = e.stream_ops.llseek(e, r2, t7), e.ungotten = [], e.position;
  }, read(e, r2, t7, n3, i4) {
    if (n3 < 0 || i4 < 0) throw new FS.ErrnoError(28);
    if (FS.isClosed(e)) throw new FS.ErrnoError(8);
    if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(8);
    if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
    if (!e.stream_ops.read) throw new FS.ErrnoError(28);
    var o6 = typeof i4 < "u";
    if (!o6) i4 = e.position;
    else if (!e.seekable) throw new FS.ErrnoError(70);
    var a3 = e.stream_ops.read(e, r2, t7, n3, i4);
    return o6 || (e.position += a3), a3;
  }, write(e, r2, t7, n3, i4, o6) {
    if (n3 < 0 || i4 < 0) throw new FS.ErrnoError(28);
    if (FS.isClosed(e)) throw new FS.ErrnoError(8);
    if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
    if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
    if (!e.stream_ops.write) throw new FS.ErrnoError(28);
    e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
    var a3 = typeof i4 < "u";
    if (!a3) i4 = e.position;
    else if (!e.seekable) throw new FS.ErrnoError(70);
    var s5 = e.stream_ops.write(e, r2, t7, n3, i4, o6);
    return a3 || (e.position += s5), s5;
  }, mmap(e, r2, t7, n3, i4) {
    if (n3 & 2 && !(i4 & 2) && (e.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
    if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(2);
    if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
    if (!r2) throw new FS.ErrnoError(28);
    return e.stream_ops.mmap(e, r2, t7, n3, i4);
  }, msync(e, r2, t7, n3, i4) {
    return e.stream_ops.msync ? e.stream_ops.msync(e, r2, t7, n3, i4) : 0;
  }, ioctl(e, r2, t7) {
    if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
    return e.stream_ops.ioctl(e, r2, t7);
  }, readFile(e, r2 = {}) {
    r2.flags = r2.flags ?? 0, r2.encoding = r2.encoding ?? "binary", r2.encoding !== "utf8" && r2.encoding !== "binary" && abort(`Invalid encoding type "${r2.encoding}"`);
    var t7 = FS.open(e, r2.flags), n3 = FS.stat(e), i4 = n3.size, o6 = new Uint8Array(i4);
    return FS.read(t7, o6, 0, i4, 0), r2.encoding === "utf8" && (o6 = UTF8ArrayToString(o6)), FS.close(t7), o6;
  }, writeFile(e, r2, t7 = {}) {
    t7.flags = t7.flags ?? 577;
    var n3 = FS.open(e, t7.flags, t7.mode);
    r2 = FS_fileDataToTypedArray(r2), FS.write(n3, r2, 0, r2.byteLength, void 0, t7.canOwn), FS.close(n3);
  }, cwd: () => FS.currentPath, chdir(e) {
    var r2 = FS.lookupPath(e, { follow: true });
    if (r2.node === null) throw new FS.ErrnoError(44);
    if (!FS.isDir(r2.node.mode)) throw new FS.ErrnoError(54);
    var t7 = FS.nodePermissions(r2.node, "x");
    if (t7) throw new FS.ErrnoError(t7);
    FS.currentPath = r2.path;
  }, createDefaultDirectories() {
    FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
  }, createDefaultDevices() {
    FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (n3, i4, o6, a3, s5) => a3, llseek: () => 0 }), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0));
    var e = new Uint8Array(1024), r2 = 0, t7 = () => (r2 === 0 && (randomFill(e), r2 = e.byteLength), e[--r2]);
    FS.createDevice("/dev", "random", t7), FS.createDevice("/dev", "urandom", t7), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories() {
    FS.mkdir("/proc");
    var e = FS.mkdir("/proc/self");
    FS.mkdir("/proc/self/fd"), FS.mount({ mount() {
      var r2 = FS.createNode(e, "fd", 16895, 73);
      return r2.stream_ops = { llseek: MEMFS.stream_ops.llseek }, r2.node_ops = { lookup(t7, n3) {
        var i4 = +n3, o6 = FS.getStreamChecked(i4), a3 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => o6.path }, id: i4 + 1 };
        return a3.parent = a3, a3;
      }, readdir() {
        return Array.from(FS.streams.entries()).filter(([t7, n3]) => n3).map(([t7, n3]) => t7.toString());
      } }, r2;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams(e, r2, t7) {
    e ? FS.createDevice("/dev", "stdin", e) : FS.symlink("/dev/tty", "/dev/stdin"), r2 ? FS.createDevice("/dev", "stdout", null, r2) : FS.symlink("/dev/tty", "/dev/stdout"), t7 ? FS.createDevice("/dev", "stderr", null, t7) : FS.symlink("/dev/tty1", "/dev/stderr");
    var n3 = FS.open("/dev/stdin", 0), i4 = FS.open("/dev/stdout", 1), o6 = FS.open("/dev/stderr", 1);
  }, staticInit() {
    FS.nameTable = new Array(4096), FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories(), FS.filesystems = { MEMFS, PROXYFS };
  }, init(e, r2, t7) {
    FS.initialized = true, e ?? (e = Module.stdin), r2 ?? (r2 = Module.stdout), t7 ?? (t7 = Module.stderr), FS.createStandardStreams(e, r2, t7);
  }, quit() {
    FS.initialized = false, _fflush(0);
    for (var e of FS.streams) e && FS.close(e);
  }, findObject(e, r2) {
    var t7 = FS.analyzePath(e, r2);
    return t7.exists ? t7.object : null;
  }, analyzePath(e, r2) {
    try {
      var t7 = FS.lookupPath(e, { follow: !r2 });
      e = t7.path;
    } catch {
    }
    var n3 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
    try {
      var t7 = FS.lookupPath(e, { parent: true });
      n3.parentExists = true, n3.parentPath = t7.path, n3.parentObject = t7.node, n3.name = PATH.basename(e), t7 = FS.lookupPath(e, { follow: !r2 }), n3.exists = true, n3.path = t7.path, n3.object = t7.node, n3.name = t7.node.name, n3.isRoot = t7.path === "/";
    } catch (i4) {
      n3.error = i4.errno;
    }
    return n3;
  }, createPath(e, r2, t7, n3) {
    e = typeof e == "string" ? e : FS.getPath(e);
    for (var i4 = r2.split("/").reverse(); i4.length; ) {
      var o6 = i4.pop();
      if (o6) {
        var a3 = PATH.join2(e, o6);
        try {
          FS.mkdir(a3);
        } catch (s5) {
          if (s5.errno != 20) throw s5;
        }
        e = a3;
      }
    }
    return a3;
  }, createFile(e, r2, t7, n3, i4) {
    var o6 = PATH.join2(typeof e == "string" ? e : FS.getPath(e), r2), a3 = FS_getMode(n3, i4);
    return FS.create(o6, a3);
  }, createDataFile(e, r2, t7, n3, i4, o6) {
    var a3 = r2;
    e && (e = typeof e == "string" ? e : FS.getPath(e), a3 = r2 ? PATH.join2(e, r2) : e);
    var s5 = FS_getMode(n3, i4), l3 = FS.create(a3, s5);
    if (t7) {
      t7 = FS_fileDataToTypedArray(t7), FS.chmod(l3, s5 | 146);
      var u3 = FS.open(l3, 577);
      FS.write(u3, t7, 0, t7.length, 0, o6), FS.close(u3), FS.chmod(l3, s5);
    }
  }, createDevice(e, r2, t7, n3) {
    var s5;
    var i4 = PATH.join2(typeof e == "string" ? e : FS.getPath(e), r2), o6 = FS_getMode(!!t7, !!n3);
    (s5 = FS.createDevice).major ?? (s5.major = 64);
    var a3 = FS.makedev(FS.createDevice.major++, 0);
    return FS.registerDevice(a3, { open(l3) {
      l3.seekable = false;
    }, close(l3) {
      n3?.buffer?.length && n3(10);
    }, read(l3, u3, c3, f5, d5) {
      for (var _4 = 0, p6 = 0; p6 < f5; p6++) {
        var v5;
        try {
          v5 = t7();
        } catch {
          throw new FS.ErrnoError(29);
        }
        if (v5 === void 0 && _4 === 0) throw new FS.ErrnoError(6);
        if (v5 == null) break;
        _4++, u3[c3 + p6] = v5;
      }
      return _4 && (l3.node.atime = Date.now()), _4;
    }, write(l3, u3, c3, f5, d5) {
      for (var _4 = 0; _4 < f5; _4++) try {
        n3(u3[c3 + _4]);
      } catch {
        throw new FS.ErrnoError(29);
      }
      return f5 && (l3.node.mtime = l3.node.ctime = Date.now()), _4;
    } }), FS.mkdev(i4, o6, a3);
  }, forceLoadFile(e) {
    if (e.isDevice || e.isFolder || e.link || e.contents) return true;
    if (globalThis.XMLHttpRequest) abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    else try {
      e.contents = readBinary(e.url);
    } catch {
      throw new FS.ErrnoError(29);
    }
  }, createLazyFile(e, r2, t7, n3, i4) {
    class o6 {
      constructor() {
        P(this, "lengthKnown", false);
        P(this, "chunks", []);
      }
      get(d5) {
        if (!(d5 > this.length - 1 || d5 < 0)) {
          var _4 = d5 % this.chunkSize, p6 = d5 / this.chunkSize | 0;
          return this.getter(p6)[_4];
        }
      }
      setDataGetter(d5) {
        this.getter = d5;
      }
      cacheLength() {
        var d5 = new XMLHttpRequest();
        d5.open("HEAD", t7, false), d5.send(null), d5.status >= 200 && d5.status < 300 || d5.status === 304 || abort(`Couldn't load ${t7}. Status: ${d5.status}`);
        var _4 = Number(d5.getResponseHeader("Content-length")), p6, v5 = (p6 = d5.getResponseHeader("Accept-Ranges")) && p6 === "bytes", S4 = (p6 = d5.getResponseHeader("Content-Encoding")) && p6 === "gzip", F5 = 1024 * 1024;
        v5 || (F5 = _4);
        var h4 = (g6, w7) => {
          g6 > w7 && abort(`invalid range (${g6}, ${w7}) or no bytes requested!`), w7 > _4 - 1 && abort(`only ${_4} bytes available! programmer error!`);
          var E6 = new XMLHttpRequest();
          return E6.open("GET", t7, false), _4 !== F5 && E6.setRequestHeader("Range", `bytes=${g6}-${w7}`), E6.responseType = "arraybuffer", E6.overrideMimeType && E6.overrideMimeType("text/plain; charset=x-user-defined"), E6.send(null), E6.status >= 200 && E6.status < 300 || E6.status === 304 || abort(`Couldn't load ${t7}. Status: ${E6.status}`), E6.response !== void 0 ? new Uint8Array(E6.response || []) : intArrayFromString(E6.responseText ?? "", true);
        }, m7 = this;
        m7.setDataGetter((g6) => {
          var w7 = g6 * F5, E6 = (g6 + 1) * F5 - 1;
          return E6 = Math.min(E6, _4 - 1), typeof m7.chunks[g6] > "u" && (m7.chunks[g6] = h4(w7, E6)), typeof m7.chunks[g6] > "u" && abort("doXHR failed!"), m7.chunks[g6];
        }), (S4 || !_4) && (F5 = _4 = 1, _4 = this.getter(0).length, F5 = _4, out("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = _4, this._chunkSize = F5, this.lengthKnown = true;
      }
      get length() {
        return this.lengthKnown || this.cacheLength(), this._length;
      }
      get chunkSize() {
        return this.lengthKnown || this.cacheLength(), this._chunkSize;
      }
    }
    if (globalThis.XMLHttpRequest) {
      ENVIRONMENT_IS_WORKER || abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
      var a3 = new o6(), s5 = { isDevice: false, contents: a3 };
    } else var s5 = { isDevice: false, url: t7 };
    var l3 = FS.createFile(e, r2, s5, n3, i4);
    s5.contents ? l3.contents = s5.contents : s5.url && (l3.contents = null, l3.url = s5.url), Object.defineProperties(l3, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var u3 = {};
    for (let [f5, d5] of Object.entries(l3.stream_ops)) u3[f5] = (..._4) => (FS.forceLoadFile(l3), d5(..._4));
    function c3(f5, d5, _4, p6, v5) {
      var S4 = f5.node.contents;
      if (v5 >= S4.length) return 0;
      var F5 = Math.min(S4.length - v5, p6);
      if (S4.slice) for (var h4 = 0; h4 < F5; h4++) d5[_4 + h4] = S4[v5 + h4];
      else for (var h4 = 0; h4 < F5; h4++) d5[_4 + h4] = S4.get(v5 + h4);
      return F5;
    }
    return u3.read = (f5, d5, _4, p6, v5) => (FS.forceLoadFile(l3), c3(f5, d5, _4, p6, v5)), u3.mmap = (f5, d5, _4, p6, v5) => {
      FS.forceLoadFile(l3);
      var S4 = mmapAlloc(d5);
      if (!S4) throw new FS.ErrnoError(48);
      return c3(f5, HEAP8, S4, d5, _4), { ptr: S4, allocated: true };
    }, l3.stream_ops = u3, l3;
  } }, findLibraryFS = (e, r2) => {
    if (runtimeInitialized) {
      if (PATH.isAbs(e)) try {
        return FS.lookupPath(e), e;
      } catch {
        return;
      }
      var t7 = (r2?.paths || []).map((n3) => replaceORIGIN(r2?.parentLibPath, n3));
      return withStackSave(() => {
        var n3 = 512, i4 = stackAlloc(n3), o6 = stringToUTF8OnStack(t7.join(":")), a3 = stringToUTF8OnStack(e), s5 = __emscripten_find_dylib(i4, o6, a3, n3);
        return s5 ? UTF8ToString(s5) : void 0;
      });
    }
  };
  function loadDynamicLibrary(e, r2 = { global: true, nodelete: true }, t7, n3) {
    var i4 = LDSO.loadedLibsByName[e];
    if (i4) return r2.global ? i4.global || (i4.global = true, mergeLibSymbols(i4.exports, e)) : t7 && Object.assign(t7, i4.exports), r2.nodelete && i4.refcount !== 1 / 0 && (i4.refcount = 1 / 0), i4.refcount++, n3 && (LDSO.loadedLibsByHandle[n3] = i4), r2.loadAsync ? Promise.resolve(true) : true;
    i4 = newDSO(e, n3, "loading"), i4.refcount = r2.nodelete ? 1 / 0 : 1, i4.global = r2.global;
    function o6() {
      if (n3) {
        var l3 = HEAPU32[n3 + 28 >> 2], u3 = HEAPU32[n3 + 32 >> 2];
        if (l3 && u3) {
          var c3 = HEAP8.slice(l3, l3 + u3);
          return r2.loadAsync ? Promise.resolve(c3) : c3;
        }
      }
      var f5 = findLibraryFS(e, r2.rpath);
      if (f5) {
        var c3 = FS.readFile(f5, { encoding: "binary" });
        return r2.loadAsync ? Promise.resolve(c3) : c3;
      }
      var d5 = locateFile(e);
      if (r2.loadAsync) return asyncLoad(d5);
      if (!readBinary) throw new Error(`${d5}: file not found, and synchronous loading of external files is not available`);
      return readBinary(d5);
    }
    function a3() {
      var l3 = preloadedWasm[e];
      return l3 ? r2.loadAsync ? Promise.resolve(l3) : l3 : r2.loadAsync ? o6().then((u3) => loadWebAssemblyModule(u3, r2, e, t7, n3)) : loadWebAssemblyModule(o6(), r2, e, t7, n3);
    }
    function s5(l3) {
      i4.global ? mergeLibSymbols(l3, e) : t7 && Object.assign(t7, l3), i4.exports = l3;
    }
    return r2.loadAsync ? a3().then((l3) => (s5(l3), true)) : (s5(a3()), true);
  }
  var reportUndefinedSymbols = () => {
    for (var [e, r2] of Object.entries(GOT)) if (r2.value == -1) {
      var t7 = resolveGlobalSymbol(e, true).sym;
      if (!t7 && !r2.required) {
        r2.value = 0;
        continue;
      }
      if (typeof t7 == "function") r2.value = addFunction(t7, t7.sig);
      else if (typeof t7 == "number") r2.value = t7;
      else if (typeof t7.value == "number") r2.value = t7;
      else throw new Error(`bad export type for '${e}': ${typeof t7} (${t7})`);
    }
  }, loadDylibs = async () => {
    if (!dynamicLibraries.length) {
      reportUndefinedSymbols();
      return;
    }
    for (var e of dynamicLibraries) await loadDynamicLibrary(e, { loadAsync: true, global: true, nodelete: true, allowUndefined: true });
    reportUndefinedSymbols();
  }, noExitRuntime = false, ___call_sighandler = (e, r2) => getWasmTableEntry(e)(r2);
  ___call_sighandler.sig = "vpi";
  var SYSCALLS = { currentUmask: 18, calculateAt(e, r2, t7) {
    if (PATH.isAbs(r2)) return r2;
    var n3;
    if (e === -100) n3 = FS.cwd();
    else {
      var i4 = SYSCALLS.getStreamFromFD(e);
      n3 = i4.path;
    }
    if (r2.length == 0) {
      if (!t7) throw new FS.ErrnoError(44);
      return n3;
    }
    return n3 + "/" + r2;
  }, writeStat(e, r2) {
    HEAPU32[e >> 2] = r2.dev, HEAPU32[e + 4 >> 2] = r2.mode, HEAPU32[e + 8 >> 2] = r2.nlink, HEAPU32[e + 12 >> 2] = r2.uid, HEAPU32[e + 16 >> 2] = r2.gid, HEAPU32[e + 20 >> 2] = r2.rdev, HEAP64[e + 24 >> 3] = BigInt(r2.size), HEAP32[e + 32 >> 2] = 4096, HEAP32[e + 36 >> 2] = r2.blocks;
    var t7 = r2.atime.getTime(), n3 = r2.mtime.getTime(), i4 = r2.ctime.getTime();
    return HEAP64[e + 40 >> 3] = BigInt(Math.floor(t7 / 1e3)), HEAPU32[e + 48 >> 2] = t7 % 1e3 * 1e3 * 1e3, HEAP64[e + 56 >> 3] = BigInt(Math.floor(n3 / 1e3)), HEAPU32[e + 64 >> 2] = n3 % 1e3 * 1e3 * 1e3, HEAP64[e + 72 >> 3] = BigInt(Math.floor(i4 / 1e3)), HEAPU32[e + 80 >> 2] = i4 % 1e3 * 1e3 * 1e3, HEAP64[e + 88 >> 3] = BigInt(r2.ino), 0;
  }, writeStatFs(e, r2) {
    HEAPU32[e + 4 >> 2] = r2.bsize, HEAPU32[e + 60 >> 2] = r2.bsize, HEAP64[e + 8 >> 3] = BigInt(r2.blocks), HEAP64[e + 16 >> 3] = BigInt(r2.bfree), HEAP64[e + 24 >> 3] = BigInt(r2.bavail), HEAP64[e + 32 >> 3] = BigInt(r2.files), HEAP64[e + 40 >> 3] = BigInt(r2.ffree), HEAPU32[e + 48 >> 2] = r2.fsid, HEAPU32[e + 64 >> 2] = r2.flags, HEAPU32[e + 56 >> 2] = r2.namelen;
  }, doMsync(e, r2, t7, n3, i4) {
    if (!FS.isFile(r2.node.mode)) throw new FS.ErrnoError(43);
    if (n3 & 2) return 0;
    var o6 = HEAPU8.subarray(e, e + t7);
    FS.msync(r2, o6, i4, t7, n3);
  }, getStreamFromFD(e) {
    var r2 = FS.getStreamChecked(e);
    return r2;
  }, varargs: void 0, getStr(e) {
    var r2 = UTF8ToString(e);
    return r2;
  } };
  function ___syscall_chmod(e, r2) {
    try {
      return e = SYSCALLS.getStr(e), FS.chmod(e, r2), 0;
    } catch (t7) {
      if (typeof FS > "u" || t7.name !== "ErrnoError") throw t7;
      return -t7.errno;
    }
  }
  ___syscall_chmod.sig = "ipi";
  function ___syscall_dup3(e, r2, t7) {
    try {
      if (e === r2 || t7 & -524289) return -28;
      var n3 = SYSCALLS.getStreamFromFD(e);
      if (r2 < 0 || r2 >= FS.MAX_OPEN_FDS) return -8;
      var i4 = FS.getStream(r2);
      i4 && FS.close(i4);
      var o6 = FS.dupStream(n3, r2);
      return t7 & 524288 && (o6.flags |= 524288), o6.fd;
    } catch (a3) {
      if (typeof FS > "u" || a3.name !== "ErrnoError") throw a3;
      return -a3.errno;
    }
  }
  ___syscall_dup3.sig = "iiii";
  function ___syscall_faccessat(e, r2, t7, n3) {
    try {
      if (r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2), t7 & -8) return -28;
      var i4 = FS.lookupPath(r2, { follow: true }), o6 = i4.node;
      if (!o6) return -44;
      var a3 = "";
      return t7 & 4 && (a3 += "r"), t7 & 2 && (a3 += "w"), t7 & 1 && (a3 += "x"), a3 && FS.nodePermissions(o6, a3) ? -2 : 0;
    } catch (s5) {
      if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
      return -s5.errno;
    }
  }
  ___syscall_faccessat.sig = "iipii";
  var INT53_MAX = 9007199254740992, INT53_MIN = -9007199254740992, bigintToI53Checked = (e) => e < INT53_MIN || e > INT53_MAX ? NaN : Number(e);
  function ___syscall_fadvise64(e, r2, t7, n3) {
    r2 = bigintToI53Checked(r2), t7 = bigintToI53Checked(t7);
    try {
      return SYSCALLS.getStreamFromFD(e).seekable ? 0 : -70;
    } catch (i4) {
      if (typeof FS > "u" || i4.name !== "ErrnoError") throw i4;
      return -i4.errno;
    }
  }
  ___syscall_fadvise64.sig = "iijji";
  var syscallGetVarargI = () => {
    var e = HEAP32[+SYSCALLS.varargs >> 2];
    return SYSCALLS.varargs += 4, e;
  }, syscallGetVarargP = syscallGetVarargI;
  function ___syscall_fcntl64(e, r2, t7) {
    SYSCALLS.varargs = t7;
    try {
      var n3 = SYSCALLS.getStreamFromFD(e);
      switch (r2) {
        case 0: {
          var i4 = syscallGetVarargI();
          if (i4 < 0) return -28;
          for (; FS.streams[i4]; ) i4++;
          var o6;
          return o6 = FS.dupStream(n3, i4), o6.fd;
        }
        case 1:
        case 2:
          return 0;
        case 3:
          return n3.flags;
        case 4: {
          var i4 = syscallGetVarargI(), a3 = 289792;
          return n3.flags = n3.flags & ~a3 | i4 & a3, 0;
        }
        case 12: {
          var i4 = syscallGetVarargP(), s5 = 0;
          return HEAP16[i4 + s5 >> 1] = 2, 0;
        }
        case 13:
        case 14:
          return 0;
      }
      return -28;
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return -l3.errno;
    }
  }
  ___syscall_fcntl64.sig = "iiip";
  function ___syscall_fstat64(e, r2) {
    try {
      return SYSCALLS.writeStat(r2, FS.fstat(e));
    } catch (t7) {
      if (typeof FS > "u" || t7.name !== "ErrnoError") throw t7;
      return -t7.errno;
    }
  }
  ___syscall_fstat64.sig = "iip";
  function ___syscall_getcwd(e, r2) {
    try {
      if (r2 === 0) return -28;
      var t7 = FS.cwd(), n3 = lengthBytesUTF8(t7) + 1;
      return r2 < n3 ? -68 : (stringToUTF8(t7, e, r2), n3);
    } catch (i4) {
      if (typeof FS > "u" || i4.name !== "ErrnoError") throw i4;
      return -i4.errno;
    }
  }
  ___syscall_getcwd.sig = "ipp";
  function ___syscall_getdents64(e, r2, t7) {
    try {
      var n3 = SYSCALLS.getStreamFromFD(e);
      n3.getdents || (n3.getdents = FS.readdir(n3.path));
      for (var i4 = 280, o6 = 0, a3 = FS.llseek(n3, 0, 1), s5 = Math.floor(a3 / i4), l3 = Math.min(n3.getdents.length, s5 + Math.floor(t7 / i4)), u3 = s5; u3 < l3; u3++) {
        var c3, f5, d5 = n3.getdents[u3];
        if (d5 === ".") c3 = n3.node.id, f5 = 4;
        else if (d5 === "..") {
          var _4 = FS.lookupPath(n3.path, { parent: true });
          c3 = _4.node.id, f5 = 4;
        } else {
          var p6;
          try {
            p6 = FS.lookupNode(n3.node, d5);
          } catch (v5) {
            if (v5?.errno === 28) continue;
            throw v5;
          }
          c3 = p6.id, f5 = FS.isChrdev(p6.mode) ? 2 : FS.isDir(p6.mode) ? 4 : FS.isLink(p6.mode) ? 10 : 8;
        }
        HEAP64[r2 + o6 >> 3] = BigInt(c3), HEAP64[r2 + o6 + 8 >> 3] = BigInt((u3 + 1) * i4), HEAP16[r2 + o6 + 16 >> 1] = 280, HEAP8[r2 + o6 + 18] = f5, stringToUTF8(d5, r2 + o6 + 19, 256), o6 += i4;
      }
      return FS.llseek(n3, u3 * i4, 0), o6;
    } catch (v5) {
      if (typeof FS > "u" || v5.name !== "ErrnoError") throw v5;
      return -v5.errno;
    }
  }
  ___syscall_getdents64.sig = "iipp";
  function ___syscall_ioctl(e, r2, t7) {
    SYSCALLS.varargs = t7;
    try {
      var n3 = SYSCALLS.getStreamFromFD(e);
      switch (r2) {
        case 21509:
          return n3.tty ? 0 : -59;
        case 21505: {
          if (!n3.tty) return -59;
          if (n3.tty.ops.ioctl_tcgets) {
            var i4 = n3.tty.ops.ioctl_tcgets(n3), o6 = syscallGetVarargP();
            HEAP32[o6 >> 2] = i4.c_iflag || 0, HEAP32[o6 + 4 >> 2] = i4.c_oflag || 0, HEAP32[o6 + 8 >> 2] = i4.c_cflag || 0, HEAP32[o6 + 12 >> 2] = i4.c_lflag || 0;
            for (var a3 = 0; a3 < 32; a3++) HEAP8[o6 + a3 + 17] = i4.c_cc[a3] || 0;
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
          return n3.tty ? 0 : -59;
        case 21506:
        case 21507:
        case 21508: {
          if (!n3.tty) return -59;
          if (n3.tty.ops.ioctl_tcsets) {
            for (var o6 = syscallGetVarargP(), s5 = HEAP32[o6 >> 2], l3 = HEAP32[o6 + 4 >> 2], u3 = HEAP32[o6 + 8 >> 2], c3 = HEAP32[o6 + 12 >> 2], f5 = [], a3 = 0; a3 < 32; a3++) f5.push(HEAP8[o6 + a3 + 17]);
            return n3.tty.ops.ioctl_tcsets(n3.tty, r2, { c_iflag: s5, c_oflag: l3, c_cflag: u3, c_lflag: c3, c_cc: f5 });
          }
          return 0;
        }
        case 21519: {
          if (!n3.tty) return -59;
          var o6 = syscallGetVarargP();
          return HEAP32[o6 >> 2] = 0, 0;
        }
        case 21520:
          return n3.tty ? -28 : -59;
        case 21537:
        case 21531: {
          var o6 = syscallGetVarargP();
          return FS.ioctl(n3, r2, o6);
        }
        case 21523: {
          if (!n3.tty) return -59;
          if (n3.tty.ops.ioctl_tiocgwinsz) {
            var d5 = n3.tty.ops.ioctl_tiocgwinsz(n3.tty), o6 = syscallGetVarargP();
            HEAP16[o6 >> 1] = d5[0], HEAP16[o6 + 2 >> 1] = d5[1];
          }
          return 0;
        }
        case 21524:
          return n3.tty ? 0 : -59;
        case 21515:
          return n3.tty ? 0 : -59;
        default:
          return -28;
      }
    } catch (_4) {
      if (typeof FS > "u" || _4.name !== "ErrnoError") throw _4;
      return -_4.errno;
    }
  }
  ___syscall_ioctl.sig = "iiip";
  function ___syscall_lstat64(e, r2) {
    try {
      return e = SYSCALLS.getStr(e), SYSCALLS.writeStat(r2, FS.lstat(e));
    } catch (t7) {
      if (typeof FS > "u" || t7.name !== "ErrnoError") throw t7;
      return -t7.errno;
    }
  }
  ___syscall_lstat64.sig = "ipp";
  function ___syscall_mkdirat(e, r2, t7) {
    try {
      return r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2), t7 &= ~SYSCALLS.currentUmask, FS.mkdir(r2, t7, 0), 0;
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return -n3.errno;
    }
  }
  ___syscall_mkdirat.sig = "iipi";
  function ___syscall_newfstatat(e, r2, t7, n3) {
    try {
      r2 = SYSCALLS.getStr(r2);
      var i4 = n3 & 256, o6 = n3 & 4096;
      return n3 = n3 & -6401, r2 = SYSCALLS.calculateAt(e, r2, o6), SYSCALLS.writeStat(t7, i4 ? FS.lstat(r2) : FS.stat(r2));
    } catch (a3) {
      if (typeof FS > "u" || a3.name !== "ErrnoError") throw a3;
      return -a3.errno;
    }
  }
  ___syscall_newfstatat.sig = "iippi";
  function ___syscall_openat(e, r2, t7, n3) {
    SYSCALLS.varargs = n3;
    try {
      r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2);
      var i4 = n3 ? syscallGetVarargI() : 0;
      return t7 & 64 && (i4 &= ~SYSCALLS.currentUmask), FS.open(r2, t7, i4).fd;
    } catch (o6) {
      if (typeof FS > "u" || o6.name !== "ErrnoError") throw o6;
      return -o6.errno;
    }
  }
  ___syscall_openat.sig = "iipip";
  function ___syscall_readlinkat(e, r2, t7, n3) {
    try {
      if (r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2), n3 <= 0) return -28;
      var i4 = FS.readlink(r2), o6 = Math.min(n3, lengthBytesUTF8(i4)), a3 = HEAP8[t7 + o6];
      return stringToUTF8(i4, t7, n3 + 1), HEAP8[t7 + o6] = a3, o6;
    } catch (s5) {
      if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
      return -s5.errno;
    }
  }
  ___syscall_readlinkat.sig = "iippp";
  function ___syscall_rmdir(e) {
    try {
      return e = SYSCALLS.getStr(e), FS.rmdir(e), 0;
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_rmdir.sig = "ip";
  function ___syscall_stat64(e, r2) {
    try {
      return e = SYSCALLS.getStr(e), SYSCALLS.writeStat(r2, FS.stat(e));
    } catch (t7) {
      if (typeof FS > "u" || t7.name !== "ErrnoError") throw t7;
      return -t7.errno;
    }
  }
  ___syscall_stat64.sig = "ipp";
  function ___syscall_symlinkat(e, r2, t7) {
    try {
      return e = SYSCALLS.getStr(e), t7 = SYSCALLS.getStr(t7), t7 = SYSCALLS.calculateAt(r2, t7), FS.symlink(e, t7), 0;
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return -n3.errno;
    }
  }
  ___syscall_symlinkat.sig = "ipip";
  function ___syscall_umask(e) {
    try {
      var r2 = SYSCALLS.currentUmask;
      return SYSCALLS.currentUmask = e, r2;
    } catch (t7) {
      if (typeof FS > "u" || t7.name !== "ErrnoError") throw t7;
      return -t7.errno;
    }
  }
  ___syscall_umask.sig = "ii";
  function ___syscall_unlinkat(e, r2, t7) {
    try {
      if (r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2), !t7) FS.unlink(r2);
      else if (t7 === 512) FS.rmdir(r2);
      else return -28;
      return 0;
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return -n3.errno;
    }
  }
  ___syscall_unlinkat.sig = "iipi";
  var __abort_js = () => abort("");
  __abort_js.sig = "v";
  var runtimeKeepaliveCounter = 0, __emscripten_runtime_keepalive_clear = () => {
    noExitRuntime = false, runtimeKeepaliveCounter = 0;
  };
  __emscripten_runtime_keepalive_clear.sig = "v";
  var __emscripten_throw_longjmp = () => {
    throw new EmscriptenSjLj();
  };
  __emscripten_throw_longjmp.sig = "v";
  var isLeapYear = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ydayFromDate = (e) => {
    var r2 = isLeapYear(e.getFullYear()), t7 = r2 ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE, n3 = t7[e.getMonth()] + e.getDate() - 1;
    return n3;
  };
  function __localtime_js(e, r2) {
    e = bigintToI53Checked(e);
    var t7 = new Date(e * 1e3);
    if (isNaN(t7.getTime())) return 1;
    HEAP32[r2 >> 2] = t7.getSeconds(), HEAP32[r2 + 4 >> 2] = t7.getMinutes(), HEAP32[r2 + 8 >> 2] = t7.getHours(), HEAP32[r2 + 12 >> 2] = t7.getDate(), HEAP32[r2 + 16 >> 2] = t7.getMonth(), HEAP32[r2 + 20 >> 2] = t7.getFullYear() - 1900, HEAP32[r2 + 24 >> 2] = t7.getDay();
    var n3 = ydayFromDate(t7) | 0;
    HEAP32[r2 + 28 >> 2] = n3, HEAP32[r2 + 36 >> 2] = -(t7.getTimezoneOffset() * 60);
    var i4 = new Date(t7.getFullYear(), 0, 1), o6 = new Date(t7.getFullYear(), 6, 1).getTimezoneOffset(), a3 = i4.getTimezoneOffset(), s5 = (o6 != a3 && t7.getTimezoneOffset() == Math.min(a3, o6)) | 0;
    return HEAP32[r2 + 32 >> 2] = s5, 0;
  }
  __localtime_js.sig = "ijp";
  var __mktime_js = function(e) {
    var r2 = (() => {
      var t7 = new Date(HEAP32[e + 20 >> 2] + 1900, HEAP32[e + 16 >> 2], HEAP32[e + 12 >> 2], HEAP32[e + 8 >> 2], HEAP32[e + 4 >> 2], HEAP32[e >> 2], 0);
      if (isNaN(t7.getTime())) return -1;
      var n3 = HEAP32[e + 32 >> 2], i4 = t7.getTimezoneOffset(), o6 = new Date(t7.getFullYear(), 0, 1), a3 = new Date(t7.getFullYear(), 6, 1).getTimezoneOffset(), s5 = o6.getTimezoneOffset(), l3 = Math.min(s5, a3);
      if (n3 < 0) n3 = +(a3 != s5 && l3 == i4);
      else if (n3 > 0 != (l3 == i4)) {
        var u3 = Math.max(s5, a3), c3 = n3 > 0 ? l3 : u3;
        if (t7.setTime(t7.getTime() + (c3 - i4) * 6e4), isNaN(t7.getTime())) return -1;
      }
      HEAP32[e + 32 >> 2] = n3, HEAP32[e + 24 >> 2] = t7.getDay();
      var f5 = ydayFromDate(t7) | 0;
      return HEAP32[e + 28 >> 2] = f5, HEAP32[e >> 2] = t7.getSeconds(), HEAP32[e + 4 >> 2] = t7.getMinutes(), HEAP32[e + 8 >> 2] = t7.getHours(), HEAP32[e + 12 >> 2] = t7.getDate(), HEAP32[e + 16 >> 2] = t7.getMonth(), HEAP32[e + 20 >> 2] = t7.getYear(), t7.getTime() / 1e3;
    })();
    return BigInt(r2);
  };
  __mktime_js.sig = "jp";
  function __mmap_js(e, r2, t7, n3, i4, o6, a3) {
    i4 = bigintToI53Checked(i4);
    try {
      var s5 = SYSCALLS.getStreamFromFD(n3), l3 = FS.mmap(s5, e, i4, r2, t7), u3 = l3.ptr;
      return HEAP32[o6 >> 2] = l3.allocated, HEAPU32[a3 >> 2] = u3, 0;
    } catch (c3) {
      if (typeof FS > "u" || c3.name !== "ErrnoError") throw c3;
      return -c3.errno;
    }
  }
  __mmap_js.sig = "ipiiijpp";
  function __munmap_js(e, r2, t7, n3, i4, o6) {
    o6 = bigintToI53Checked(o6);
    try {
      var a3 = SYSCALLS.getStreamFromFD(i4);
      t7 & 2 && SYSCALLS.doMsync(e, a3, r2, n3, o6);
    } catch (s5) {
      if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
      return -s5.errno;
    }
  }
  __munmap_js.sig = "ippiiij";
  var timers = {}, clearTimers = () => {
    for (var e of Object.values(timers)) clearTimeout(e.id);
  }, handleException = (e) => {
    if (e instanceof ExitStatus || e == "unwind") return EXITSTATUS;
    quit_(1, e);
  }, keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0, _proc_exit = (e) => {
    EXITSTATUS = e, keepRuntimeAlive() || (Module.onExit?.(e), ABORT = true), quit_(e, new ExitStatus(e));
  };
  _proc_exit.sig = "vi";
  var exitJS = (e, r2) => {
    EXITSTATUS = e, keepRuntimeAlive() || exitRuntime(), _proc_exit(e);
  }, _exit = exitJS;
  _exit.sig = "vi";
  var maybeExit = () => {
    if (!runtimeExited && !keepRuntimeAlive()) try {
      _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }, callUserCallback = (e) => {
    if (!(runtimeExited || ABORT)) try {
      return e();
    } catch (r2) {
      handleException(r2);
    } finally {
      maybeExit();
    }
  }, _emscripten_get_now = () => performance.now();
  _emscripten_get_now.sig = "d";
  var __setitimer_js = (e, r2) => {
    if (timers[e] && (clearTimeout(timers[e].id), delete timers[e]), !r2) return 0;
    var t7 = setTimeout(() => {
      delete timers[e], callUserCallback(() => __emscripten_timeout(e, _emscripten_get_now()));
    }, r2);
    return timers[e] = { id: t7, timeout_ms: r2 }, 0;
  };
  __setitimer_js.sig = "iid";
  var __tzset_js = (e, r2, t7, n3) => {
    var i4 = (/* @__PURE__ */ new Date()).getFullYear(), o6 = new Date(i4, 0, 1), a3 = new Date(i4, 6, 1), s5 = o6.getTimezoneOffset(), l3 = a3.getTimezoneOffset(), u3 = Math.max(s5, l3);
    HEAPU32[e >> 2] = u3 * 60, HEAP32[r2 >> 2] = +(s5 != l3);
    var c3 = (_4) => {
      var p6 = _4 >= 0 ? "-" : "+", v5 = Math.abs(_4), S4 = String(Math.floor(v5 / 60)).padStart(2, "0"), F5 = String(v5 % 60).padStart(2, "0");
      return `UTC${p6}${S4}${F5}`;
    }, f5 = c3(s5), d5 = c3(l3);
    l3 < s5 ? (stringToUTF8(f5, t7, 17), stringToUTF8(d5, n3, 17)) : (stringToUTF8(f5, n3, 17), stringToUTF8(d5, t7, 17));
  };
  __tzset_js.sig = "vpppp";
  var _emscripten_date_now = () => Date.now();
  _emscripten_date_now.sig = "d";
  var getHeapMax = () => 2147483648, growMemory = (e) => {
    var r2 = wasmMemory.buffer.byteLength, t7 = (e - r2 + 65535) / 65536 | 0;
    try {
      return wasmMemory.grow(t7), updateMemoryViews(), 1;
    } catch {
    }
  }, _emscripten_resize_heap = (e) => {
    var r2 = HEAPU8.length;
    e >>>= 0;
    var t7 = getHeapMax();
    if (e > t7) return false;
    for (var n3 = 1; n3 <= 4; n3 *= 2) {
      var i4 = r2 * (1 + 0.2 / n3);
      i4 = Math.min(i4, e + 100663296);
      var o6 = Math.min(t7, alignMemory(Math.max(e, i4), 65536)), a3 = growMemory(o6);
      if (a3) return true;
    }
    return false;
  };
  _emscripten_resize_heap.sig = "ip";
  var ENV = {}, getExecutableName = () => thisProgram, getEnvStrings = () => {
    if (!getEnvStrings.strings) {
      var e = (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8", r2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: getExecutableName() };
      for (var t7 in ENV) ENV[t7] === void 0 ? delete r2[t7] : r2[t7] = ENV[t7];
      var n3 = [];
      for (var t7 in r2) n3.push(`${t7}=${r2[t7]}`);
      getEnvStrings.strings = n3;
    }
    return getEnvStrings.strings;
  }, _environ_get = (e, r2) => {
    var t7 = 0, n3 = 0;
    for (var i4 of getEnvStrings()) {
      var o6 = r2 + t7;
      HEAPU32[e + n3 >> 2] = o6, t7 += stringToUTF8(i4, o6, 1 / 0) + 1, n3 += 4;
    }
    return 0;
  };
  _environ_get.sig = "ipp";
  var _environ_sizes_get = (e, r2) => {
    var t7 = getEnvStrings();
    HEAPU32[e >> 2] = t7.length;
    var n3 = 0;
    for (var i4 of t7) n3 += lengthBytesUTF8(i4) + 1;
    return HEAPU32[r2 >> 2] = n3, 0;
  };
  _environ_sizes_get.sig = "ipp";
  function _fd_close(e) {
    try {
      var r2 = SYSCALLS.getStreamFromFD(e);
      return FS.close(r2), 0;
    } catch (t7) {
      if (typeof FS > "u" || t7.name !== "ErrnoError") throw t7;
      return t7.errno;
    }
  }
  _fd_close.sig = "ii";
  function _fd_fdstat_get(e, r2) {
    try {
      var t7 = 0, n3 = 0, i4 = 0, o6 = SYSCALLS.getStreamFromFD(e), a3 = o6.tty ? 2 : FS.isDir(o6.mode) ? 3 : FS.isLink(o6.mode) ? 7 : 4;
      return HEAP8[r2] = a3, HEAP16[r2 + 2 >> 1] = i4, HEAP64[r2 + 8 >> 3] = BigInt(t7), HEAP64[r2 + 16 >> 3] = BigInt(n3), 0;
    } catch (s5) {
      if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
      return s5.errno;
    }
  }
  _fd_fdstat_get.sig = "iip";
  var doReadv = (e, r2, t7, n3) => {
    for (var i4 = 0, o6 = 0; o6 < t7; o6++) {
      var a3 = HEAPU32[r2 >> 2], s5 = HEAPU32[r2 + 4 >> 2];
      r2 += 8;
      try {
        var l3 = FS.read(e, HEAP8, a3, s5, n3);
      } catch (u3) {
        if (i4 > 0 && u3 instanceof FS.ErrnoError && (u3.errno == 6 || u3.errno == 6)) break;
        throw u3;
      }
      if (l3 < 0) return -1;
      if (i4 += l3, l3 < s5) break;
      typeof n3 < "u" && (n3 += l3);
    }
    return i4;
  };
  function _fd_read(e, r2, t7, n3) {
    try {
      var i4 = SYSCALLS.getStreamFromFD(e), o6 = doReadv(i4, r2, t7);
      return HEAPU32[n3 >> 2] = o6, 0;
    } catch (a3) {
      if (typeof FS > "u" || a3.name !== "ErrnoError") throw a3;
      return a3.errno;
    }
  }
  _fd_read.sig = "iippp";
  function _fd_seek(e, r2, t7, n3) {
    r2 = bigintToI53Checked(r2);
    try {
      if (isNaN(r2)) return 22;
      var i4 = SYSCALLS.getStreamFromFD(e);
      return FS.llseek(i4, r2, t7), HEAP64[n3 >> 3] = BigInt(i4.position), i4.getdents && r2 === 0 && t7 === 0 && (i4.getdents = null), 0;
    } catch (o6) {
      if (typeof FS > "u" || o6.name !== "ErrnoError") throw o6;
      return o6.errno;
    }
  }
  _fd_seek.sig = "iijip";
  function _fd_sync(e) {
    try {
      var r2 = SYSCALLS.getStreamFromFD(e), t7 = r2.stream_ops?.fsync?.(r2);
      return t7;
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return n3.errno;
    }
  }
  _fd_sync.sig = "ii";
  var doWritev = (e, r2, t7, n3) => {
    if (t7 == 1) return FS.write(e, HEAP8, HEAPU32[r2 >> 2], HEAPU32[r2 + 4 >> 2], n3);
    for (var i4 = 0, o6 = 0, a3 = r2; o6 < t7; o6++, a3 += 8) i4 += HEAPU32[a3 + 4 >> 2];
    for (var s5 = new Uint8Array(i4), l3 = 0, o6 = 0; o6 < t7; o6++, r2 += 8) {
      var u3 = HEAPU32[r2 >> 2], c3 = HEAPU32[r2 + 4 >> 2];
      s5.set(HEAPU8.subarray(u3, u3 + c3), l3), l3 += c3;
    }
    return FS.write(e, s5, 0, i4, n3);
  };
  function _fd_write(e, r2, t7, n3) {
    try {
      var i4 = SYSCALLS.getStreamFromFD(e), o6 = doWritev(i4, r2, t7);
      return HEAPU32[n3 >> 2] = o6, 0;
    } catch (a3) {
      if (typeof FS > "u" || a3.name !== "ErrnoError") throw a3;
      return a3.errno;
    }
  }
  _fd_write.sig = "iippp";
  var inetPton4 = (e) => {
    for (var r2 = e.split("."), t7 = 0; t7 < 4; t7++) {
      var n3 = Number(r2[t7]);
      if (isNaN(n3)) return null;
      r2[t7] = n3;
    }
    return (r2[0] | r2[1] << 8 | r2[2] << 16 | r2[3] << 24) >>> 0;
  }, inetPton6 = (e) => {
    var r2, t7, n3, i4, o6 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, a3 = [];
    if (!o6.test(e)) return null;
    if (e === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
    for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(new RegExp("[.]", "g"), ":"), r2 = e.split(":"), r2[r2.length - 4] = Number(r2[r2.length - 4]) + Number(r2[r2.length - 3]) * 256, r2[r2.length - 3] = Number(r2[r2.length - 2]) + Number(r2[r2.length - 1]) * 256, r2 = r2.slice(0, r2.length - 2)) : r2 = e.split(":"), n3 = 0, i4 = 0, t7 = 0; t7 < r2.length; t7++) if (typeof r2[t7] == "string") if (r2[t7] === "Z") {
      for (i4 = 0; i4 < 8 - r2.length + 1; i4++) a3[t7 + i4] = 0;
      n3 = i4 - 1;
    } else a3[t7 + n3] = _htons(parseInt(r2[t7], 16));
    else a3[t7 + n3] = r2[t7];
    return [a3[1] << 16 | a3[0], a3[3] << 16 | a3[2], a3[5] << 16 | a3[4], a3[7] << 16 | a3[6]];
  }, DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name(e) {
    var r2 = inetPton4(e);
    if (r2 !== null || (r2 = inetPton6(e), r2 !== null)) return e;
    var t7;
    if (DNS.address_map.addrs[e]) t7 = DNS.address_map.addrs[e];
    else {
      var n3 = DNS.address_map.id++;
      t7 = "172.29." + (n3 & 255) + "." + (n3 & 65280), DNS.address_map.names[t7] = e, DNS.address_map.addrs[e] = t7;
    }
    return t7;
  }, lookup_addr(e) {
    return DNS.address_map.names[e] ? DNS.address_map.names[e] : null;
  } }, inetNtop4 = (e) => (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255), inetNtop6 = (e) => {
    var r2 = "", t7 = 0, n3 = 0, i4 = 0, o6 = 0, a3 = 0, s5 = 0, l3 = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16], u3 = true, c3 = "";
    for (s5 = 0; s5 < 5; s5++) if (l3[s5] !== 0) {
      u3 = false;
      break;
    }
    if (u3) {
      if (c3 = inetNtop4(l3[6] | l3[7] << 16), l3[5] === -1) return r2 = "::ffff:", r2 += c3, r2;
      if (l3[5] === 0) return r2 = "::", c3 === "0.0.0.0" && (c3 = ""), c3 === "0.0.0.1" && (c3 = "1"), r2 += c3, r2;
    }
    for (t7 = 0; t7 < 8; t7++) l3[t7] === 0 && (t7 - i4 > 1 && (a3 = 0), i4 = t7, a3++), a3 > n3 && (n3 = a3, o6 = t7 - n3 + 1);
    for (t7 = 0; t7 < 8; t7++) {
      if (n3 > 1 && l3[t7] === 0 && t7 >= o6 && t7 < o6 + n3) {
        t7 === o6 && (r2 += ":", o6 === 0 && (r2 += ":"));
        continue;
      }
      r2 += Number(_ntohs(l3[t7] & 65535)).toString(16), r2 += t7 < 7 ? ":" : "";
    }
    return r2;
  }, writeSockaddr = (e, r2, t7, n3, i4) => {
    switch (r2) {
      case 2:
        t7 = inetPton4(t7), zeroMemory(e, 16), i4 && (HEAP32[i4 >> 2] = 16), HEAP16[e >> 1] = r2, HEAP32[e + 4 >> 2] = t7, HEAP16[e + 2 >> 1] = _htons(n3);
        break;
      case 10:
        t7 = inetPton6(t7), zeroMemory(e, 28), i4 && (HEAP32[i4 >> 2] = 28), HEAP32[e >> 2] = r2, HEAP32[e + 8 >> 2] = t7[0], HEAP32[e + 12 >> 2] = t7[1], HEAP32[e + 16 >> 2] = t7[2], HEAP32[e + 20 >> 2] = t7[3], HEAP16[e + 2 >> 1] = _htons(n3);
        break;
      default:
        return 5;
    }
    return 0;
  }, _getaddrinfo = (e, r2, t7, n3) => {
    var i4 = 0, o6 = 0, a3 = 0, s5 = 0, l3 = 0, u3 = 0, c3;
    function f5(d5, _4, p6, v5, S4, F5) {
      var h4, m7, g6, w7;
      return m7 = d5 === 10 ? 28 : 16, S4 = d5 === 10 ? inetNtop6(S4) : inetNtop4(S4), h4 = _malloc(m7), w7 = writeSockaddr(h4, d5, S4, F5), g6 = _malloc(32), HEAP32[g6 + 4 >> 2] = d5, HEAP32[g6 + 8 >> 2] = _4, HEAP32[g6 + 12 >> 2] = p6, HEAPU32[g6 + 24 >> 2] = v5, HEAPU32[g6 + 20 >> 2] = h4, d5 === 10 ? HEAP32[g6 + 16 >> 2] = 28 : HEAP32[g6 + 16 >> 2] = 16, HEAP32[g6 + 28 >> 2] = 0, g6;
    }
    if (t7 && (a3 = HEAP32[t7 >> 2], s5 = HEAP32[t7 + 4 >> 2], l3 = HEAP32[t7 + 8 >> 2], u3 = HEAP32[t7 + 12 >> 2]), l3 && !u3 && (u3 = l3 === 2 ? 17 : 6), !l3 && u3 && (l3 = u3 === 17 ? 2 : 1), u3 === 0 && (u3 = 6), l3 === 0 && (l3 = 1), !e && !r2) return -2;
    if (a3 & -1088 || t7 !== 0 && HEAP32[t7 >> 2] & 2 && !e) return -1;
    if (a3 & 32) return -2;
    if (l3 !== 0 && l3 !== 1 && l3 !== 2) return -7;
    if (s5 !== 0 && s5 !== 2 && s5 !== 10) return -6;
    if (r2 && (r2 = UTF8ToString(r2), o6 = parseInt(r2, 10), isNaN(o6))) return a3 & 1024 ? -2 : -8;
    if (!e) return s5 === 0 && (s5 = 2), a3 & 1 || (s5 === 2 ? i4 = _htonl(2130706433) : i4 = [0, 0, 0, _htonl(1)]), c3 = f5(s5, l3, u3, null, i4, o6), HEAPU32[n3 >> 2] = c3, 0;
    if (e = UTF8ToString(e), i4 = inetPton4(e), i4 !== null) if (s5 === 0 || s5 === 2) s5 = 2;
    else if (s5 === 10 && a3 & 8) i4 = [0, 0, _htonl(65535), i4], s5 = 10;
    else return -2;
    else if (i4 = inetPton6(e), i4 !== null) if (s5 === 0 || s5 === 10) s5 = 10;
    else return -2;
    return i4 != null ? (c3 = f5(s5, l3, u3, e, i4, o6), HEAPU32[n3 >> 2] = c3, 0) : a3 & 4 ? -2 : (e = DNS.lookup_name(e), i4 = inetPton4(e), s5 === 0 ? s5 = 2 : s5 === 10 && (i4 = [0, 0, _htonl(65535), i4]), c3 = f5(s5, l3, u3, null, i4, o6), HEAPU32[n3 >> 2] = c3, 0);
  };
  _getaddrinfo.sig = "ipppp";
  var removeFunction = (e) => {
    functionsInTableMap.delete(getWasmTableEntry(e)), setWasmTableEntry(e, null), freeTableIndexes.push(e);
  }, stringToNewUTF8 = (e) => {
    var r2 = lengthBytesUTF8(e) + 1, t7 = _malloc(r2);
    return t7 && stringToUTF8(e, t7, r2), t7;
  }, FS_createPath = (...e) => FS.createPath(...e), FS_unlink = (...e) => FS.unlink(...e), FS_createLazyFile = (...e) => FS.createLazyFile(...e), FS_createDevice = (...e) => FS.createDevice(...e);
  registerWasmPlugin(), FS.createPreloadedFile = FS_createPreloadedFile, FS.preloadFile = FS_preloadFile, FS.staticInit();
  {
    Module.noExitRuntime && (noExitRuntime = Module.noExitRuntime), Module.print && (out = Module.print), Module.printErr && (err = Module.printErr), Module.dynamicLibraries && (dynamicLibraries = Module.dynamicLibraries), Module.arguments && (programArgs = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram);
    var preInit = Module.preInit;
    if (preInit) for (typeof preInit == "function" && (Module.preInit = preInit = [preInit]); preInit.length > 0; ) preInit.shift()();
  }
  Module.callMain = callMain, Module.stackSave = stackSave, Module.stackRestore = stackRestore, Module.ENV = ENV, Module.addRunDependency = addRunDependency, Module.removeRunDependency = removeRunDependency, Module.addFunction = addFunction, Module.removeFunction = removeFunction, Module.UTF8ToString = UTF8ToString, Module.stringToNewUTF8 = stringToNewUTF8, Module.stringToUTF8OnStack = stringToUTF8OnStack, Module.FS_preloadFile = FS_preloadFile, Module.FS_unlink = FS_unlink, Module.FS_createPath = FS_createPath, Module.FS_createDevice = FS_createDevice, Module.FS = FS, Module.FS_createDataFile = FS_createDataFile, Module.FS_createLazyFile = FS_createLazyFile, Module.MEMFS = MEMFS, Module.PROXYFS = PROXYFS;
  var ASM_CONSTS = {}, _pgl_exit, ___errno_location, _fflush, _fopen, _fclose, _pgl_popen, _fputs, _main, _pgl_atexit, _pgl_geteuid, _pgl_system, _malloc, _calloc, _pgl_setsockopt, _pgl_connect, _pgl_send, _pgl_recv, _fgets, _pgl_getsockopt, _pgl_getsockname, _pgl_poll, _clear_setitimer, _pgl_longjmp, _pgl_siglongjmp, _pgl_set_system_fn, _pgl_set_popen_fn, _pgl_set_pclose_fn, _pgl_pclose, _pclose, _pgl_getuid, _pgl_getpwuid, _pgl_run_atexit_funcs, _pgl_freopen, _pgl_shmget, _pgl_shmat, _pgl_shmdt, _pgl_shmctl, _pgl_munmap, _pgl_set_rw_cbs, _pgl_fcntl, ___funcs_on_exit, ___dl_seterr, __emscripten_find_dylib, _htonl, _htons, _emscripten_builtin_memalign, _ntohs, __emscripten_timeout, _strerror, _emscripten_get_sbrk_ptr, _setThrew, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, memory, ___stack_pointer, __indirect_function_table, ___heap_base, wasmTable, wasmMemory;
  function assignWasmExports(e) {
    _pgl_exit = Module._pgl_exit = e.pgl_exit, ___errno_location = Module.___errno_location = e.__errno_location, _fflush = Module._fflush = e.fflush, _fopen = Module._fopen = e.fopen, _fclose = Module._fclose = e.fclose, _pgl_popen = Module._pgl_popen = e.pgl_popen, _fputs = Module._fputs = e.fputs, _main = Module._main = e.__main_argc_argv, _pgl_atexit = Module._pgl_atexit = e.pgl_atexit, _pgl_geteuid = Module._pgl_geteuid = e.pgl_geteuid, _pgl_system = Module._pgl_system = e.pgl_system, _malloc = e.malloc, _calloc = e.calloc, _pgl_setsockopt = Module._pgl_setsockopt = e.pgl_setsockopt, _pgl_connect = Module._pgl_connect = e.pgl_connect, _pgl_send = Module._pgl_send = e.pgl_send, _pgl_recv = Module._pgl_recv = e.pgl_recv, _fgets = Module._fgets = e.fgets, _pgl_getsockopt = Module._pgl_getsockopt = e.pgl_getsockopt, _pgl_getsockname = Module._pgl_getsockname = e.pgl_getsockname, _pgl_poll = Module._pgl_poll = e.pgl_poll, _clear_setitimer = Module._clear_setitimer = e.clear_setitimer, _pgl_longjmp = Module._pgl_longjmp = e.pgl_longjmp, _pgl_siglongjmp = Module._pgl_siglongjmp = e.pgl_siglongjmp, _pgl_set_system_fn = Module._pgl_set_system_fn = e.pgl_set_system_fn, _pgl_set_popen_fn = Module._pgl_set_popen_fn = e.pgl_set_popen_fn, _pgl_set_pclose_fn = Module._pgl_set_pclose_fn = e.pgl_set_pclose_fn, _pgl_pclose = Module._pgl_pclose = e.pgl_pclose, _pclose = Module._pclose = e.pclose, _pgl_getuid = Module._pgl_getuid = e.pgl_getuid, _pgl_getpwuid = Module._pgl_getpwuid = e.pgl_getpwuid, _pgl_run_atexit_funcs = Module._pgl_run_atexit_funcs = e.pgl_run_atexit_funcs, _pgl_freopen = Module._pgl_freopen = e.pgl_freopen, _pgl_shmget = Module._pgl_shmget = e.pgl_shmget, _pgl_shmat = Module._pgl_shmat = e.pgl_shmat, _pgl_shmdt = Module._pgl_shmdt = e.pgl_shmdt, _pgl_shmctl = Module._pgl_shmctl = e.pgl_shmctl, _pgl_munmap = Module._pgl_munmap = e.pgl_munmap, _pgl_set_rw_cbs = Module._pgl_set_rw_cbs = e.pgl_set_rw_cbs, _pgl_fcntl = Module._pgl_fcntl = e.pgl_fcntl, ___funcs_on_exit = e.__funcs_on_exit, ___dl_seterr = e.__dl_seterr, __emscripten_find_dylib = e._emscripten_find_dylib, _htonl = e.htonl, _htons = e.htons, _emscripten_builtin_memalign = e.emscripten_builtin_memalign, _ntohs = e.ntohs, __emscripten_timeout = e._emscripten_timeout, _strerror = Module._strerror = e.strerror, _emscripten_get_sbrk_ptr = e.emscripten_get_sbrk_ptr, _setThrew = e.setThrew, __emscripten_stack_restore = e._emscripten_stack_restore, __emscripten_stack_alloc = e._emscripten_stack_alloc, _emscripten_stack_get_current = e.emscripten_stack_get_current, memory = wasmMemory = e.memory, ___stack_pointer = e.__stack_pointer, __indirect_function_table = wasmTable = e.__indirect_function_table, ___heap_base = e.__heap_base.value;
  }
  var wasmImports = { __call_sighandler: ___call_sighandler, __syscall_chmod: ___syscall_chmod, __syscall_dup3: ___syscall_dup3, __syscall_faccessat: ___syscall_faccessat, __syscall_fadvise64: ___syscall_fadvise64, __syscall_fcntl64: ___syscall_fcntl64, __syscall_fstat64: ___syscall_fstat64, __syscall_getcwd: ___syscall_getcwd, __syscall_getdents64: ___syscall_getdents64, __syscall_ioctl: ___syscall_ioctl, __syscall_lstat64: ___syscall_lstat64, __syscall_mkdirat: ___syscall_mkdirat, __syscall_newfstatat: ___syscall_newfstatat, __syscall_openat: ___syscall_openat, __syscall_readlinkat: ___syscall_readlinkat, __syscall_rmdir: ___syscall_rmdir, __syscall_stat64: ___syscall_stat64, __syscall_symlinkat: ___syscall_symlinkat, __syscall_umask: ___syscall_umask, __syscall_unlinkat: ___syscall_unlinkat, _abort_js: __abort_js, _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear, _emscripten_throw_longjmp: __emscripten_throw_longjmp, _localtime_js: __localtime_js, _mktime_js: __mktime_js, _mmap_js: __mmap_js, _munmap_js: __munmap_js, _setitimer_js: __setitimer_js, _tzset_js: __tzset_js, emscripten_date_now: _emscripten_date_now, emscripten_get_now: _emscripten_get_now, emscripten_resize_heap: _emscripten_resize_heap, environ_get: _environ_get, environ_sizes_get: _environ_sizes_get, exit: _exit, fd_close: _fd_close, fd_fdstat_get: _fd_fdstat_get, fd_read: _fd_read, fd_seek: _fd_seek, fd_sync: _fd_sync, fd_write: _fd_write, getaddrinfo: _getaddrinfo, invoke_ii, invoke_iiii, invoke_vii, proc_exit: _proc_exit };
  function invoke_iiii(e, r2, t7, n3) {
    var i4 = stackSave();
    try {
      return getWasmTableEntry(e)(r2, t7, n3);
    } catch (o6) {
      if (stackRestore(i4), !(o6 instanceof EmscriptenEH)) throw o6;
      _setThrew(1, 0);
    }
  }
  function invoke_ii(e, r2) {
    var t7 = stackSave();
    try {
      return getWasmTableEntry(e)(r2);
    } catch (n3) {
      if (stackRestore(t7), !(n3 instanceof EmscriptenEH)) throw n3;
      _setThrew(1, 0);
    }
  }
  function invoke_vii(e, r2, t7) {
    var n3 = stackSave();
    try {
      getWasmTableEntry(e)(r2, t7);
    } catch (i4) {
      if (stackRestore(n3), !(i4 instanceof EmscriptenEH)) throw i4;
      _setThrew(1, 0);
    }
  }
  function callMain(e = []) {
    var r2 = resolveGlobalSymbol("main").sym;
    if (r2) {
      e.unshift(thisProgram);
      var t7 = e.length, n3 = stackAlloc((t7 + 1) * 4), i4 = n3;
      for (var o6 of e) HEAPU32[i4 >> 2] = stringToUTF8OnStack(o6), i4 += 4;
      HEAPU32[i4 >> 2] = 0;
      try {
        var a3 = r2(t7, n3);
        return exitJS(a3, true), a3;
      } catch (s5) {
        return handleException(s5);
      }
    }
  }
  async function run(e = programArgs) {
    preRun(), runDependencies && await resolveRunDependencies();
    var r2 = Module.setStatus;
    if (r2 && (r2("Running..."), await new Promise((n3) => setTimeout(n3, 1)), setTimeout(r2, 1, "")), !ABORT) {
      initRuntime(), Module.onRuntimeInitialized?.();
      var t7 = Module.noInitialRun || true;
      t7 || callMain(e), postRun();
    }
  }
  var wasmExports;
  return wasmExports = await createWasm(), await run(), quit_ = (e, r2) => {
    throw r2;
  }, Module;
}
function Lr(e, r2) {
  let t7 = r2.lastIndex, n3 = [], i4;
  for (; i4 = r2.exec(e); ) n3.push(i4), r2.lastIndex === i4.index && (r2.lastIndex += 1);
  return r2.lastIndex = t7, n3;
}
function Ir(e, r2, t7) {
  let n3 = typeof e == "function" ? e(t7) : e[t7];
  return typeof n3 > "u" && t7 !== "" ? n3 = "" : typeof n3 > "u" && (n3 = "$"), typeof n3 == "object" ? r2 + C + JSON.stringify(n3) + C : r2 + n3;
}
function Cr(e, r2, t7) {
  t7 || (t7 = {});
  let n3 = t7.escape || "\\", i4 = "(\\" + n3 + `['"` + He2 + `]|[^\\s'"` + He2 + "])+", o6 = new RegExp(["(" + Ce2 + ")", "(" + i4 + "|" + Dr + "|" + Nr + ")+"].join("|"), "g"), a3 = Lr(e, o6);
  if (a3.length === 0) return [];
  r2 || (r2 = {});
  let s5 = false;
  return a3.map(function(l3) {
    let u3 = l3[0];
    if (!u3 || s5) return;
    if (Ue2.test(u3)) return { op: u3 };
    let c3 = false, f5 = false, d5 = "", _4 = false, p6;
    function v5() {
      p6 += 1;
      let S4, F5, h4 = u3.charAt(p6);
      if (h4 === "{") {
        if (p6 += 1, u3.charAt(p6) === "}") throw new Error("Bad substitution: " + u3.slice(p6 - 2, p6 + 1));
        if (S4 = u3.indexOf("}", p6), S4 < 0) throw new Error("Bad substitution: " + u3.slice(p6));
        F5 = u3.slice(p6, S4), p6 = S4;
      } else if (/[*@#?$!_-]/.test(h4)) F5 = h4, p6 += 1;
      else {
        let m7 = u3.slice(p6), g6 = m7.match(/[^\w\d_]/);
        g6 ? (F5 = m7.slice(0, g6.index), p6 += g6.index - 1) : (F5 = m7, p6 = u3.length);
      }
      return Ir(r2, "", F5);
    }
    for (p6 = 0; p6 < u3.length; p6++) {
      let S4 = u3.charAt(p6);
      if (_4 = _4 || !c3 && (S4 === "*" || S4 === "?"), f5) d5 += S4, f5 = false;
      else if (c3) S4 === c3 ? c3 = false : c3 === Le2 ? d5 += S4 : S4 === n3 ? (p6 += 1, S4 = u3.charAt(p6), S4 === Ie2 || S4 === n3 || S4 === ue2 ? d5 += S4 : d5 += n3 + S4) : S4 === ue2 ? d5 += v5() : d5 += S4;
      else if (S4 === Ie2 || S4 === Le2) c3 = S4;
      else {
        if (Ue2.test(S4)) return { op: u3 };
        if (Rr.test(S4)) {
          s5 = true;
          let F5 = { comment: e.slice(l3.index + p6 + 1) };
          return d5.length ? [d5, F5] : [F5];
        } else S4 === n3 ? f5 = true : S4 === ue2 ? d5 += v5() : d5 += S4;
      }
    }
    return _4 ? { op: "glob", pattern: d5 } : d5;
  }).reduce(function(l3, u3) {
    return typeof u3 > "u" ? l3 : l3.concat(u3);
  }, []);
}
function ce2(e, r2, t7) {
  let n3 = Cr(e, r2, t7);
  return typeof r2 != "function" ? n3 : n3.reduce(function(i4, o6) {
    if (typeof o6 == "object") return i4.concat(o6);
    let a3 = o6.split(RegExp("(" + C + ".*?" + C + ")", "g"));
    return a3.length === 1 ? i4.concat(a3[0]) : i4.concat(a3.filter(Boolean).map(function(s5) {
      return Hr.test(s5) ? JSON.parse(s5.split(C)[1]) : s5;
    }));
  }, []);
}
function xr(e, r2) {
  if (!e) throw new Error(r2 ?? "Assertion failed");
}
function j3(e, ...r2) {
  e && e > 0 && console.log("initdb: ", ...r2);
}
async function jr({ pg: e, debug: r2, args: t7, wasmModule: n3 }) {
  let i4, o6, a3, s5 = false, l3 = [], u3 = 0, c3 = -1, f5 = -1, d5 = "", _4 = "", p6 = (m7) => {
    let g6 = m7.shift();
    j3(r2, "initdb: firstArg", g6), xr(g6 === "/pglite/bin/postgres", `trying to execute ${g6}`), e.Module.HEAPU8.set(v5), j3(r2, "executing pg main with", m7);
    let w7 = e.callMain(m7);
    return j3(r2, w7), l3 = [], w7;
  }, v5 = e.Module.HEAPU8.slice(), F5 = await Re2({ arguments: t7, noExitRuntime: false, thisProgram: Br, stdin: () => null, print: (m7) => {
    _4 += m7, j3(r2, "initdbout", m7);
  }, printErr: (m7) => {
    d5 += m7, j3(r2, "initdberr", m7);
  }, instantiateWasm: (m7, g6) => (m2.instantiateWasm(m7, () => new URL("./initdb.wasm", import.meta.url), n3).then(({ instance: w7, module: E6 }) => {
    g6(w7, E6);
  }), {}), locateFile: (m7, g6) => m7.endsWith(".so") ? "/pglite/lib/" + m7 : g6 + m7, preRun: [(m7) => {
    m7.ENV.PGDATA = x4, m7.ENV.HOME = "/home/postgres", m7.ENV.USER = "postgres", m7.ENV.LOGNAME = "postgres", m7.ENV.ICU_DATA = zr, m7.ENV.TZ = "UTC";
  }, (m7) => {
    m7.FS.mkdirTree(U3), m7.FS.mount(m7.PROXYFS, { root: U3, fs: e.Module.FS }, U3);
  }, (m7) => {
    m7.onRuntimeInitialized = () => {
      i4 = m7.addFunction((g6) => (l3 = Be2(m7.UTF8ToString(g6)), p6(l3)), "pi"), m7._pgl_set_system_fn(i4), o6 = m7.addFunction((g6, w7) => {
        let E6 = m7.UTF8ToString(w7);
        if (l3 = Be2(m7.UTF8ToString(g6)), E6 === "r") return u3 = p6(l3), c3;
        if (E6 === "w") return s5 = true, f5;
        throw `Unexpected popen mode value ${E6}`;
      }, "ppi"), m7._pgl_set_popen_fn(o6), a3 = m7.addFunction((g6) => g6 === c3 || g6 === f5 ? (s5 && (s5 = false, u3 = p6(l3)), u3) : m7._pclose(g6), "pi"), m7._pgl_set_pclose_fn(a3);
      {
        let g6 = e.Module.stringToUTF8OnStack(ze2), w7 = e.Module.stringToUTF8OnStack("r");
        e.Module._pgl_freopen(g6, w7, 0);
        let E6 = e.Module.stringToUTF8OnStack(xe2), Y3 = e.Module.stringToUTF8OnStack("w");
        e.Module._pgl_freopen(E6, Y3, 1);
      }
      {
        let g6 = m7.stringToUTF8OnStack(xe2), w7 = m7.stringToUTF8OnStack("r");
        c3 = m7._fopen(g6, w7);
        let E6 = m7.stringToUTF8OnStack(ze2), Y3 = m7.stringToUTF8OnStack("w");
        f5 = m7._fopen(E6, Y3);
      }
    };
  }] });
  return j3(r2, "calling initdb.main with", t7), { exitCode: F5.callMain(t7), stderr: d5, stdout: _4, dataFolder: x4 };
}
function Be2(e) {
  let r2 = [], t7 = ce2(e);
  for (let n3 = 0; n3 < t7.length; n3++) {
    let i4 = t7[n3];
    if (typeof i4 == "object" && "op" in i4) break;
    typeof i4 == "string" && r2.push(i4);
  }
  return r2;
}
async function ht2({ pg: e, debug: r2, args: t7, wasmModule: n3 }) {
  return await jr({ pg: e, debug: r2, args: ["--allow-group-access", "--encoding", "UTF8", "--locale=C.UTF-8", "--locale-provider=libc", "--auth=trust", ...t7 ?? []], wasmModule: n3 });
}
var G2, W2, oe2, Te2, Me2, Oe2, O2, yr, Ne2, Re2, Ce2, Ue2, He2, Dr, Nr, Rr, Le2, Ie2, ue2, C, Ur, Hr, U3, x4, zr, Br, yt2, xe2, ze2, je2, Ye2, Ge2, Yr;
var init_chunk_CE4NCHVO = __esm({
  "node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-CE4NCHVO.js"() {
    init_chunk_ZKGLEABV();
    init_chunk_QY3QWFKW();
    G2 = D((Wr, b4) => {
      "use strict";
      u();
      var _e2 = 9007199254740991, me3 = /* @__PURE__ */ (function(e) {
        return e;
      })();
      function Xe3(e) {
        return e === me3;
      }
      function pe3(e) {
        return typeof e == "string" || Object.prototype.toString.call(e) == "[object String]";
      }
      function Ve3(e) {
        return Object.prototype.toString.call(e) == "[object Date]";
      }
      function V2(e) {
        return e !== null && typeof e == "object";
      }
      function $4(e) {
        return typeof e == "function";
      }
      function $e3(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _e2;
      }
      function qe3(e) {
        return Object.prototype.toString.call(e) == "[object Array]";
      }
      function Se3(e) {
        return V2(e) && !$4(e) && $e3(e.length);
      }
      function re(e) {
        return Object.prototype.toString.call(e) == "[object ArrayBuffer]";
      }
      function Ke3(e, r2) {
        return Array.prototype.map.call(e, r2);
      }
      function Je3(e, r2) {
        var t7 = me3;
        return $4(r2) && Array.prototype.every.call(e, function(n3, i4, o6) {
          var a3 = r2(n3, i4, o6);
          return a3 && (t7 = n3), !a3;
        }), t7;
      }
      function Qe3(e) {
        return Object.assign.apply(null, arguments);
      }
      function ge3(e) {
        var r2, t7, n3;
        if (pe3(e)) {
          for (t7 = e.length, n3 = new Uint8Array(t7), r2 = 0; r2 < t7; r2++) n3[r2] = e.charCodeAt(r2) & 255;
          return n3;
        }
        return re(e) ? new Uint8Array(e) : V2(e) && re(e.buffer) ? new Uint8Array(e.buffer) : Se3(e) ? new Uint8Array(e) : V2(e) && $4(e.toString) ? ge3(e.toString()) : new Uint8Array();
      }
      b4.exports.MAX_SAFE_INTEGER = _e2;
      b4.exports.isUndefined = Xe3;
      b4.exports.isString = pe3;
      b4.exports.isObject = V2;
      b4.exports.isDateTime = Ve3;
      b4.exports.isFunction = $4;
      b4.exports.isArray = qe3;
      b4.exports.isArrayLike = Se3;
      b4.exports.isArrayBuffer = re;
      b4.exports.map = Ke3;
      b4.exports.find = Je3;
      b4.exports.extend = Qe3;
      b4.exports.toUint8Array = ge3;
    });
    W2 = D((Vr, ve2) => {
      "use strict";
      u();
      var te3 = "\0";
      ve2.exports = { NULL_CHAR: te3, TMAGIC: "ustar" + te3 + "00", OLDGNU_MAGIC: "ustar  " + te3, REGTYPE: 0, LNKTYPE: 1, SYMTYPE: 2, CHRTYPE: 3, BLKTYPE: 4, DIRTYPE: 5, FIFOTYPE: 6, CONTTYPE: 7, TSUID: parseInt("4000", 8), TSGID: parseInt("2000", 8), TSVTX: parseInt("1000", 8), TUREAD: parseInt("0400", 8), TUWRITE: parseInt("0200", 8), TUEXEC: parseInt("0100", 8), TGREAD: parseInt("0040", 8), TGWRITE: parseInt("0020", 8), TGEXEC: parseInt("0010", 8), TOREAD: parseInt("0004", 8), TOWRITE: parseInt("0002", 8), TOEXEC: parseInt("0001", 8), TPERMALL: parseInt("0777", 8), TPERMMASK: parseInt("0777", 8) };
    });
    oe2 = D((qr, T5) => {
      "use strict";
      u();
      var Ee3 = G2(), A4 = W2(), Ze3 = 512, ne = A4.TPERMALL, Fe2 = 0, ye3 = 0, ie3 = [["name", 100, 0, function(e, r2) {
        return X3(e[r2[0]], r2[1]);
      }, function(e, r2, t7) {
        return I3(e.slice(r2, r2 + t7[1]));
      }], ["mode", 8, 100, function(e, r2) {
        var t7 = e[r2[0]] || ne;
        return t7 = t7 & A4.TPERMMASK, B5(t7, r2[1], ne);
      }, function(e, r2, t7) {
        var n3 = R3(e.slice(r2, r2 + t7[1]));
        return n3 &= A4.TPERMMASK, n3;
      }], ["uid", 8, 108, function(e, r2) {
        return B5(e[r2[0]], r2[1], Fe2);
      }, function(e, r2, t7) {
        return R3(e.slice(r2, r2 + t7[1]));
      }], ["gid", 8, 116, function(e, r2) {
        return B5(e[r2[0]], r2[1], ye3);
      }, function(e, r2, t7) {
        return R3(e.slice(r2, r2 + t7[1]));
      }], ["size", 12, 124, function(e, r2) {
        return B5(e.data.length, r2[1]);
      }, function(e, r2, t7) {
        return R3(e.slice(r2, r2 + t7[1]));
      }], ["modifyTime", 12, 136, function(e, r2) {
        return q3(e[r2[0]], r2[1]);
      }, function(e, r2, t7) {
        return K4(e.slice(r2, r2 + t7[1]));
      }], ["checksum", 8, 148, function(e, r2) {
        return "        ";
      }, function(e, r2, t7) {
        return R3(e.slice(r2, r2 + t7[1]));
      }], ["type", 1, 156, function(e, r2) {
        return "" + (parseInt(e[r2[0]], 10) || 0) % 8;
      }, function(e, r2, t7) {
        return (parseInt(String.fromCharCode(e[r2]), 10) || 0) % 8;
      }], ["linkName", 100, 157, function(e, r2) {
        return "";
      }, function(e, r2, t7) {
        return I3(e.slice(r2, r2 + t7[1]));
      }], ["ustar", 8, 257, function(e, r2) {
        return A4.TMAGIC;
      }, function(e, r2, t7) {
        return er(I3(e.slice(r2, r2 + t7[1]), true));
      }, function(e, r2) {
        return e[r2[0]] == A4.TMAGIC || e[r2[0]] == A4.OLDGNU_MAGIC;
      }], ["owner", 32, 265, function(e, r2) {
        return X3(e[r2[0]], r2[1]);
      }, function(e, r2, t7) {
        return I3(e.slice(r2, r2 + t7[1]));
      }], ["group", 32, 297, function(e, r2) {
        return X3(e[r2[0]], r2[1]);
      }, function(e, r2, t7) {
        return I3(e.slice(r2, r2 + t7[1]));
      }], ["majorNumber", 8, 329, function(e, r2) {
        return "";
      }, function(e, r2, t7) {
        return R3(e.slice(r2, r2 + t7[1]));
      }], ["minorNumber", 8, 337, function(e, r2) {
        return "";
      }, function(e, r2, t7) {
        return R3(e.slice(r2, r2 + t7[1]));
      }], ["prefix", 131, 345, function(e, r2) {
        return X3(e[r2[0]], r2[1]);
      }, function(e, r2, t7) {
        return I3(e.slice(r2, r2 + t7[1]));
      }], ["accessTime", 12, 476, function(e, r2) {
        return q3(e[r2[0]], r2[1]);
      }, function(e, r2, t7) {
        return K4(e.slice(r2, r2 + t7[1]));
      }], ["createTime", 12, 488, function(e, r2) {
        return q3(e[r2[0]], r2[1]);
      }, function(e, r2, t7) {
        return K4(e.slice(r2, r2 + t7[1]));
      }]], he3 = (function(e) {
        var r2 = e[e.length - 1];
        return r2[2] + r2[1];
      })(ie3);
      function er(e) {
        if (e.length == 8) {
          var r2 = e.split("");
          if (r2[5] == A4.NULL_CHAR) return (r2[6] == " " || r2[6] == A4.NULL_CHAR) && (r2[6] = "0"), (r2[7] == " " || r2[7] == A4.NULL_CHAR) && (r2[7] = "0"), r2 = r2.join(""), r2 == A4.TMAGIC ? r2 : e;
          if (r2[7] == A4.NULL_CHAR) return r2[5] == A4.NULL_CHAR && (r2[5] = " "), r2[6] == A4.NULL_CHAR && (r2[6] = " "), r2 == A4.OLDGNU_MAGIC ? r2 : e;
        }
        return e;
      }
      function X3(e, r2) {
        return r2 -= 1, Ee3.isUndefined(e) && (e = ""), e = ("" + e).substr(0, r2), e + A4.NULL_CHAR;
      }
      function B5(e, r2, t7) {
        for (t7 = parseInt(t7) || 0, r2 -= 1, e = (parseInt(e) || t7).toString(8).substr(-r2, r2); e.length < r2; ) e = "0" + e;
        return e + A4.NULL_CHAR;
      }
      function q3(e, r2) {
        if (Ee3.isDateTime(e)) e = Math.floor(1 * e / 1e3);
        else if (e = parseInt(e, 10), isFinite(e)) {
          if (e <= 0) return "";
        } else e = Math.floor(1 * /* @__PURE__ */ new Date() / 1e3);
        return B5(e, r2, 0);
      }
      function I3(e, r2) {
        var t7 = String.fromCharCode.apply(null, e);
        if (r2) return t7;
        var n3 = t7.indexOf(A4.NULL_CHAR);
        return n3 >= 0 ? t7.substr(0, n3) : t7;
      }
      function R3(e) {
        var r2 = String.fromCharCode.apply(null, e);
        return parseInt(r2.replace(/^0+$/g, ""), 8) || 0;
      }
      function K4(e) {
        return e.length == 0 || e[0] == 0 ? null : new Date(1e3 * R3(e));
      }
      function rr(e, r2, t7) {
        var n3 = parseInt(r2, 10) || 0, i4 = Math.min(n3 + he3, e.length), o6 = 0, a3 = 0, s5 = 0;
        t7 && ie3.every(function(f5) {
          return f5[0] == "checksum" ? (a3 = n3 + f5[2], s5 = a3 + f5[1], false) : true;
        });
        for (var l3 = 32, u3 = n3; u3 < i4; u3++) {
          var c3 = u3 >= a3 && u3 < s5 ? l3 : e[u3];
          o6 = (o6 + c3) % 262144;
        }
        return o6;
      }
      T5.exports.recordSize = Ze3;
      T5.exports.defaultFileMode = ne;
      T5.exports.defaultUid = Fe2;
      T5.exports.defaultGid = ye3;
      T5.exports.posixHeader = ie3;
      T5.exports.effectiveHeaderSize = he3;
      T5.exports.calculateChecksum = rr;
      T5.exports.formatTarString = X3;
      T5.exports.formatTarNumber = B5;
      T5.exports.formatTarDateTime = q3;
      T5.exports.parseTarString = I3;
      T5.exports.parseTarNumber = R3;
      T5.exports.parseTarDateTime = K4;
    });
    Te2 = D((Jr, be2) => {
      "use strict";
      u();
      var tr = W2(), J4 = G2(), H4 = oe2();
      function we3(e) {
        return H4.recordSize;
      }
      function Ae3(e) {
        return Math.ceil(e.data.length / H4.recordSize) * H4.recordSize;
      }
      function nr(e) {
        var r2 = 0;
        return e.forEach(function(t7) {
          r2 += we3(t7) + Ae3(t7);
        }), r2 += H4.recordSize * 2, new Uint8Array(r2);
      }
      function ir(e, r2, t7) {
        t7 = parseInt(t7) || 0;
        var n3 = t7;
        H4.posixHeader.forEach(function(l3) {
          for (var u3 = l3[3](r2, l3), c3 = u3.length, f5 = 0; f5 < c3; f5 += 1) e[n3 + f5] = u3.charCodeAt(f5) & 255;
          n3 += l3[1];
        });
        var i4 = J4.find(H4.posixHeader, function(l3) {
          return l3[0] == "checksum";
        });
        if (i4) {
          var o6 = H4.calculateChecksum(e, t7, true), a3 = H4.formatTarNumber(o6, i4[1] - 2) + tr.NULL_CHAR + " ";
          n3 = t7 + i4[2];
          for (var s5 = 0; s5 < a3.length; s5 += 1) e[n3] = a3.charCodeAt(s5) & 255, n3++;
        }
        return t7 + we3(r2);
      }
      function or(e, r2, t7) {
        return t7 = parseInt(t7, 10) || 0, e.set(r2.data, t7), t7 + Ae3(r2);
      }
      function ar(e) {
        e = J4.map(e, function(n3) {
          return J4.extend({}, n3, { data: J4.toUint8Array(n3.data) });
        });
        var r2 = nr(e), t7 = 0;
        return e.forEach(function(n3) {
          t7 = ir(r2, n3, t7), t7 = or(r2, n3, t7);
        }), r2;
      }
      be2.exports.tar = ar;
    });
    Me2 = D((Zr, Pe3) => {
      "use strict";
      u();
      var sr = W2(), se3 = G2(), N5 = oe2(), lr = { extractData: true, checkHeader: true, checkChecksum: true, checkFileSize: true }, ur = { size: true, checksum: true, ustar: true }, ae2 = { unexpectedEndOfFile: "Unexpected end of file.", fileCorrupted: "File is corrupted.", checksumCheckFailed: "Checksum check failed." };
      function cr(e) {
        return N5.recordSize;
      }
      function dr(e) {
        return Math.ceil(e / N5.recordSize) * N5.recordSize;
      }
      function fr(e, r2) {
        for (var t7 = r2, n3 = Math.min(e.length, r2 + N5.recordSize * 2), i4 = t7; i4 < n3; i4++) if (e[i4] != 0) return false;
        return true;
      }
      function _r(e, r2, t7) {
        if (e.length - r2 < N5.recordSize) {
          if (t7.checkFileSize) throw new Error(ae2.unexpectedEndOfFile);
          return null;
        }
        r2 = parseInt(r2) || 0;
        var n3 = {}, i4 = r2;
        if (N5.posixHeader.forEach(function(s5) {
          n3[s5[0]] = s5[4](e, i4, s5), i4 += s5[1];
        }), n3.type != 0 && (n3.size = 0), t7.checkHeader && N5.posixHeader.forEach(function(s5) {
          if (se3.isFunction(s5[5]) && !s5[5](n3, s5)) {
            var l3 = new Error(ae2.fileCorrupted);
            throw l3.data = { offset: r2 + s5[2], field: s5[0] }, l3;
          }
        }), t7.checkChecksum) {
          var o6 = N5.calculateChecksum(e, r2, true);
          if (o6 != n3.checksum) {
            var a3 = new Error(ae2.checksumCheckFailed);
            throw a3.data = { offset: r2, header: n3, checksum: o6 }, a3;
          }
        }
        return n3;
      }
      function mr(e, r2, t7, n3) {
        return n3.extractData ? t7.size <= 0 ? new Uint8Array() : e.slice(r2, r2 + t7.size) : null;
      }
      function pr(e, r2) {
        var t7 = {};
        return N5.posixHeader.forEach(function(n3) {
          var i4 = n3[0];
          ur[i4] || (t7[i4] = e[i4]);
        }), t7.isOldGNUFormat = e.ustar == sr.OLDGNU_MAGIC, r2 && (t7.data = r2), t7;
      }
      function Sr(e, r2) {
        r2 = se3.extend({}, lr, r2);
        for (var t7 = [], n3 = 0, i4 = e.length; i4 - n3 >= N5.recordSize; ) {
          e = se3.toUint8Array(e);
          var o6 = _r(e, n3, r2);
          if (!o6) break;
          n3 += cr(o6);
          var a3 = mr(e, n3, o6, r2);
          if (t7.push(pr(o6, a3)), n3 += dr(o6.size), fr(e, n3)) break;
        }
        return t7;
      }
      Pe3.exports.untar = Sr;
    });
    Oe2 = D((rt3, ke2) => {
      "use strict";
      u();
      var gr = G2(), vr = W2(), Er = Te2(), Fr = Me2();
      gr.extend(ke2.exports, Er, Fr, vr);
    });
    u();
    u();
    O2 = L(Oe2(), 1);
    yr = ["application/x-gtar", "application/x-tar+gzip", "application/x-gzip", "application/gzip"];
    u();
    u();
    u();
    Ne2 = Or;
    Re2 = Ne2;
    u();
    Ce2 = "(?:" + ["\\|\\|", "\\&\\&", ";;", "\\|\\&", "\\<\\(", "\\<\\<\\<", ">>", ">\\&", "<\\&", "[&;()|<>]"].join("|") + ")";
    Ue2 = new RegExp("^" + Ce2 + "$");
    He2 = "|&;()<> \\t";
    Dr = '"((\\\\"|[^"])*?)"';
    Nr = "'((\\\\'|[^'])*?)'";
    Rr = /^#$/;
    Le2 = "'";
    Ie2 = '"';
    ue2 = "$";
    C = "";
    Ur = 4294967296;
    for (let e = 0; e < 4; e++) C += (Ur * Math.random()).toString(16);
    Hr = new RegExp("^" + C);
    U3 = "/pglite";
    x4 = U3 + "/data";
    zr = U3 + "/icu";
    Br = U3 + "/bin/initdb";
    yt2 = U3 + "/bin/postgres";
    xe2 = U3 + "/pgstdout";
    ze2 = U3 + "/pgstdin";
    je2 = class {
      constructor(r2) {
        this.dataDir = r2;
      }
      async init(r2, t7) {
        return this.pg = r2, { emscriptenOpts: t7 };
      }
      async syncToFs(r2) {
      }
      async initialSyncFs() {
      }
      async closeFs() {
      }
      async dumpTar(r2, t7) {
        return le2(this.pg.Module.FS, x4, r2, t7);
      }
    };
    Ye2 = class {
      constructor(r2, { debug: t7 = false } = {}) {
        this.dataDir = r2, this.debug = t7;
      }
      async syncToFs(r2) {
      }
      async initialSyncFs() {
      }
      async closeFs() {
      }
      async dumpTar(r2, t7) {
        return le2(this.pg.Module.FS, x4, r2, t7);
      }
      async init(r2, t7) {
        return this.pg = r2, { emscriptenOpts: { ...t7, preRun: [...t7.preRun || [], (i4) => {
          let o6 = Yr(i4, this);
          i4.FS.mkdirTree(x4), i4.FS.mount(o6, {}, x4);
        }] } };
      }
    };
    Ge2 = { EBADF: 8, EBADFD: 127, EEXIST: 20, EINVAL: 28, EISDIR: 31, ENODEV: 43, ENOENT: 44, ENOTDIR: 54, ENOTEMPTY: 55 };
    Yr = (e, r2) => {
      let t7 = e.FS, n3 = r2.debug ? console.log : null, i4 = { tryFSOperation(o6) {
        try {
          return o6();
        } catch (a3) {
          throw a3.code ? a3.code === "UNKNOWN" ? new t7.ErrnoError(Ge2.EINVAL) : new t7.ErrnoError(a3.code) : a3;
        }
      }, mount(o6) {
        return i4.createNode(null, "/", 16895, 0);
      }, syncfs(o6, a3, s5) {
      }, createNode(o6, a3, s5, l3) {
        if (!t7.isDir(s5) && !t7.isFile(s5)) throw new t7.ErrnoError(28);
        let u3 = t7.createNode(o6, a3, s5);
        return u3.node_ops = i4.node_ops, u3.stream_ops = i4.stream_ops, u3;
      }, getMode: function(o6) {
        return n3?.("getMode", o6), i4.tryFSOperation(() => r2.lstat(o6).mode);
      }, realPath: function(o6) {
        let a3 = [];
        for (; o6.parent !== o6; ) a3.push(o6.name), o6 = o6.parent;
        return a3.push(o6.mount.opts.root), a3.reverse(), a3.join("/");
      }, node_ops: { getattr(o6) {
        n3?.("getattr", i4.realPath(o6));
        let a3 = i4.realPath(o6);
        return i4.tryFSOperation(() => {
          let s5 = r2.lstat(a3);
          return { ...s5, dev: 0, ino: o6.id, nlink: 1, rdev: o6.rdev, atime: new Date(s5.atime), mtime: new Date(s5.mtime), ctime: new Date(s5.ctime) };
        });
      }, setattr(o6, a3) {
        n3?.("setattr", i4.realPath(o6), a3);
        let s5 = i4.realPath(o6);
        i4.tryFSOperation(() => {
          if (a3.mode !== void 0 && r2.chmod(s5, a3.mode), a3.size !== void 0 && r2.truncate(s5, a3.size), a3.timestamp !== void 0 && r2.utimes(s5, a3.timestamp, a3.timestamp), a3.atime || a3.mtime) {
            let l3 = new Date(a3.atime || a3.mtime).getTime(), u3 = new Date(a3.mtime || a3.atime).getTime();
            r2.utimes(s5, l3, u3);
          }
          a3.size !== void 0 && r2.truncate(s5, a3.size);
        });
      }, lookup(o6, a3) {
        n3?.("lookup", i4.realPath(o6), a3);
        let s5 = [i4.realPath(o6), a3].join("/"), l3 = i4.getMode(s5);
        return i4.createNode(o6, a3, l3);
      }, mknod(o6, a3, s5, l3) {
        n3?.("mknod", i4.realPath(o6), a3, s5, l3);
        let u3 = i4.createNode(o6, a3, s5, l3), c3 = i4.realPath(u3);
        return i4.tryFSOperation(() => (t7.isDir(u3.mode) ? r2.mkdir(c3, { mode: s5 }) : r2.writeFile(c3, "", { mode: s5 }), u3));
      }, rename(o6, a3, s5) {
        n3?.("rename", i4.realPath(o6), i4.realPath(a3), s5);
        let l3 = i4.realPath(o6), u3 = [i4.realPath(a3), s5].join("/");
        i4.tryFSOperation(() => {
          r2.rename(l3, u3);
        }), o6.name = s5;
      }, unlink(o6, a3) {
        n3?.("unlink", i4.realPath(o6), a3);
        let s5 = [i4.realPath(o6), a3].join("/");
        try {
          r2.unlink(s5);
        } catch {
        }
      }, rmdir(o6, a3) {
        n3?.("rmdir", i4.realPath(o6), a3);
        let s5 = [i4.realPath(o6), a3].join("/");
        return i4.tryFSOperation(() => {
          r2.rmdir(s5);
        });
      }, readdir(o6) {
        n3?.("readdir", i4.realPath(o6));
        let a3 = i4.realPath(o6);
        return i4.tryFSOperation(() => r2.readdir(a3));
      }, symlink(o6, a3, s5) {
        throw n3?.("symlink", i4.realPath(o6), a3, s5), new t7.ErrnoError(63);
      }, readlink(o6) {
        throw n3?.("readlink", i4.realPath(o6)), new t7.ErrnoError(63);
      } }, stream_ops: { open(o6) {
        n3?.("open stream", i4.realPath(o6.node));
        let a3 = i4.realPath(o6.node);
        return i4.tryFSOperation(() => {
          t7.isFile(o6.node.mode) && (o6.shared.refcount = 1, o6.nfd = r2.open(a3));
        });
      }, close(o6) {
        return n3?.("close stream", i4.realPath(o6.node)), i4.tryFSOperation(() => {
          t7.isFile(o6.node.mode) && o6.nfd && --o6.shared.refcount === 0 && r2.close(o6.nfd);
        });
      }, dup(o6) {
        n3?.("dup stream", i4.realPath(o6.node)), o6.shared.refcount++;
      }, read(o6, a3, s5, l3, u3) {
        return n3?.("read stream", i4.realPath(o6.node), s5, l3, u3), l3 === 0 ? 0 : i4.tryFSOperation(() => r2.read(o6.nfd, a3, s5, l3, u3));
      }, write(o6, a3, s5, l3, u3) {
        return n3?.("write stream", i4.realPath(o6.node), s5, l3, u3), i4.tryFSOperation(() => r2.write(o6.nfd, a3.buffer, s5, l3, u3));
      }, llseek(o6, a3, s5) {
        n3?.("llseek stream", i4.realPath(o6.node), a3, s5);
        let l3 = a3;
        if (s5 === 1 ? l3 += o6.position : s5 === 2 && t7.isFile(o6.node.mode) && i4.tryFSOperation(() => {
          let u3 = r2.fstat(o6.nfd);
          l3 += u3.size;
        }), l3 < 0) throw new t7.ErrnoError(28);
        return l3;
      }, mmap(o6, a3, s5, l3, u3) {
        if (n3?.("mmap stream", i4.realPath(o6.node), a3, s5, l3, u3), !t7.isFile(o6.node.mode)) throw new t7.ErrnoError(Ge2.ENODEV);
        let c3 = e.mmapAlloc(a3);
        return i4.stream_ops.read(o6, e.HEAPU8, c3, a3, s5), { ptr: c3, allocated: true };
      }, msync(o6, a3, s5, l3, u3) {
        return n3?.("msync stream", i4.realPath(o6.node), s5, l3, u3), i4.stream_ops.write(o6, a3, 0, l3, s5), 0;
      } } };
      return i4;
    };
  }
});

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/fs/nodefs.js
var nodefs_exports = {};
__export(nodefs_exports, {
  NodeFS: () => m3
});
import * as s4 from "fs";
import * as o4 from "path";
var m3;
var init_nodefs = __esm({
  "node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/fs/nodefs.js"() {
    init_chunk_CE4NCHVO();
    init_chunk_ZKGLEABV();
    init_chunk_QY3QWFKW();
    u();
    m3 = class extends je2 {
      constructor(t7) {
        super(t7), this.rootDir = o4.resolve(t7), s4.existsSync(o4.join(this.rootDir)) || s4.mkdirSync(this.rootDir);
      }
      async init(t7, e) {
        return this.pg = t7, { emscriptenOpts: { ...e, preRun: [...e.preRun || [], (r2) => {
          let c3 = r2.FS.filesystems.NODEFS;
          r2.FS.mkdirTree(x4), r2.FS.mount(c3, { root: this.rootDir }, x4);
        }] } };
      }
      async closeFs() {
        this.pg.Module.FS.quit();
      }
    };
  }
});

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/fs/opfs-ahp.js
var opfs_ahp_exports = {};
__export(opfs_ahp_exports, {
  OpfsAhpFS: () => z3
});
var U4, $2, M, I, k2, N2, H2, y4, f4, x5, F3, P4, S3, r, L3, D3, E2, w3, m4, A2, C2, T3, z3, d3;
var init_opfs_ahp = __esm({
  "node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/fs/opfs-ahp.js"() {
    init_chunk_CE4NCHVO();
    init_chunk_ZKGLEABV();
    init_chunk_QY3QWFKW();
    u();
    U4 = "state.txt";
    $2 = "data";
    M = { DIR: 16384, FILE: 32768 };
    z3 = class extends Ye2 {
      constructor(e, { initialPoolSize: t7 = 1e3, maintainedPoolSize: s5 = 100, debug: i4 = false } = {}) {
        super(e, { debug: i4 });
        R(this, r);
        R(this, I);
        R(this, k2);
        R(this, N2);
        R(this, H2);
        R(this, y4);
        R(this, f4, /* @__PURE__ */ new Map());
        R(this, x5, 0);
        R(this, F3, /* @__PURE__ */ new Map());
        R(this, P4, /* @__PURE__ */ new Map());
        this.lastCheckpoint = 0;
        this.checkpointInterval = 1e3 * 60;
        this.poolCounter = 0;
        R(this, S3, /* @__PURE__ */ new Set());
        this.initialPoolSize = t7, this.maintainedPoolSize = s5;
      }
      async init(e, t7) {
        return await T(this, r, L3).call(this), super.init(e, t7);
      }
      async syncToFs(e = false) {
        await this.maybeCheckpointState(), await this.maintainPool(), e || this.flush();
      }
      async closeFs() {
        for (let e of h(this, f4).values()) e.sh.close();
        h(this, y4).flush(), h(this, y4).close(), this.pg.Module.FS.quit();
      }
      async maintainPool(e) {
        e = e || this.maintainedPoolSize;
        let t7 = e - this.state.pool.length, s5 = [];
        for (let i4 = 0; i4 < t7; i4++) s5.push(new Promise(async (a3) => {
          ++this.poolCounter;
          let c3 = `${(Date.now() - 1704063600).toString(16).padStart(8, "0")}-${this.poolCounter.toString(16).padStart(8, "0")}`, h4 = await h(this, N2).getFileHandle(c3, { create: true }), p6 = await h4.createSyncAccessHandle();
          h(this, f4).set(c3, { fh: h4, sh: p6 }), T(this, r, E2).call(this, { opp: "createPoolFile", args: [c3] }), this.state.pool.push(c3), a3();
        }));
        for (let i4 = 0; i4 > t7; i4--) s5.push(new Promise(async (a3) => {
          let c3 = this.state.pool.pop();
          T(this, r, E2).call(this, { opp: "deletePoolFile", args: [c3] });
          let h4 = h(this, f4).get(c3);
          h4?.sh?.close(), await h(this, N2).removeEntry(h4.fh.name), h(this, f4).delete(c3), a3();
        }));
        await Promise.all(s5);
      }
      _createPoolFileState(e) {
        this.state.pool.push(e);
      }
      _deletePoolFileState(e) {
        let t7 = this.state.pool.indexOf(e);
        t7 > -1 && this.state.pool.splice(t7, 1);
      }
      async maybeCheckpointState() {
        Date.now() - this.lastCheckpoint > this.checkpointInterval && await this.checkpointState();
      }
      async checkpointState() {
        let e = new TextEncoder().encode(JSON.stringify(this.state));
        h(this, y4).truncate(0), h(this, y4).write(e, { at: 0 }), h(this, y4).flush(), this.lastCheckpoint = Date.now();
      }
      flush() {
        for (let e of h(this, S3)) try {
          e.flush();
        } catch {
        }
        h(this, S3).clear();
      }
      chmod(e, t7) {
        T(this, r, D3).call(this, { opp: "chmod", args: [e, t7] }, () => {
          this._chmodState(e, t7);
        });
      }
      _chmodState(e, t7) {
        let s5 = T(this, r, m4).call(this, e);
        s5.mode = t7;
      }
      close(e) {
        let t7 = T(this, r, A2).call(this, e);
        h(this, F3).delete(e), h(this, P4).delete(t7);
      }
      fstat(e) {
        let t7 = T(this, r, A2).call(this, e);
        return this.lstat(t7);
      }
      lstat(e) {
        let t7 = T(this, r, m4).call(this, e), s5 = t7.type === "file" ? h(this, f4).get(t7.backingFilename).sh.getSize() : 0, i4 = 4096;
        return { dev: 0, ino: 0, mode: t7.mode, nlink: 1, uid: 0, gid: 0, rdev: 0, size: s5, blksize: i4, blocks: Math.ceil(s5 / i4), atime: t7.lastModified, mtime: t7.lastModified, ctime: t7.lastModified };
      }
      mkdir(e, t7) {
        T(this, r, D3).call(this, { opp: "mkdir", args: [e, t7] }, () => {
          this._mkdirState(e, t7);
        });
      }
      _mkdirState(e, t7) {
        let s5 = T(this, r, w3).call(this, e), i4 = s5.pop(), a3 = [], c3 = this.state.root;
        for (let p6 of s5) {
          if (a3.push(e), !Object.prototype.hasOwnProperty.call(c3.children, p6)) if (t7?.recursive) this.mkdir(a3.join("/"));
          else throw new d3("ENOENT", "No such file or directory");
          if (c3.children[p6].type !== "directory") throw new d3("ENOTDIR", "Not a directory");
          c3 = c3.children[p6];
        }
        if (Object.prototype.hasOwnProperty.call(c3.children, i4)) throw new d3("EEXIST", "File exists");
        let h4 = { type: "directory", lastModified: Date.now(), mode: t7?.mode || M.DIR, children: {} };
        c3.children[i4] = h4;
      }
      open(e, t7, s5) {
        if (T(this, r, m4).call(this, e).type !== "file") throw new d3("EISDIR", "Is a directory");
        let a3 = T(this, r, C2).call(this);
        return h(this, F3).set(a3, e), h(this, P4).set(e, a3), a3;
      }
      readdir(e) {
        let t7 = T(this, r, m4).call(this, e);
        if (t7.type !== "directory") throw new d3("ENOTDIR", "Not a directory");
        return Object.keys(t7.children);
      }
      read(e, t7, s5, i4, a3) {
        let c3 = T(this, r, A2).call(this, e), h4 = T(this, r, m4).call(this, c3);
        if (h4.type !== "file") throw new d3("EISDIR", "Is a directory");
        return h(this, f4).get(h4.backingFilename).sh.read(new Uint8Array(t7.buffer, s5, i4), { at: a3 });
      }
      rename(e, t7) {
        T(this, r, D3).call(this, { opp: "rename", args: [e, t7] }, () => {
          this._renameState(e, t7, true);
        });
      }
      _renameState(e, t7, s5 = false) {
        let i4 = T(this, r, w3).call(this, e), a3 = i4.pop(), c3 = T(this, r, m4).call(this, i4.join("/"));
        if (!Object.prototype.hasOwnProperty.call(c3.children, a3)) throw new d3("ENOENT", "No such file or directory");
        let h4 = T(this, r, w3).call(this, t7), p6 = h4.pop(), l3 = T(this, r, m4).call(this, h4.join("/"));
        if (s5 && Object.prototype.hasOwnProperty.call(l3.children, p6)) {
          let u3 = l3.children[p6];
          h(this, f4).get(u3.backingFilename).sh.truncate(0), this.state.pool.push(u3.backingFilename);
        }
        l3.children[p6] = c3.children[a3], delete c3.children[a3];
      }
      rmdir(e) {
        T(this, r, D3).call(this, { opp: "rmdir", args: [e] }, () => {
          this._rmdirState(e);
        });
      }
      _rmdirState(e) {
        let t7 = T(this, r, w3).call(this, e), s5 = t7.pop(), i4 = T(this, r, m4).call(this, t7.join("/"));
        if (!Object.prototype.hasOwnProperty.call(i4.children, s5)) throw new d3("ENOENT", "No such file or directory");
        let a3 = i4.children[s5];
        if (a3.type !== "directory") throw new d3("ENOTDIR", "Not a directory");
        if (Object.keys(a3.children).length > 0) throw new d3("ENOTEMPTY", "Directory not empty");
        delete i4.children[s5];
      }
      truncate(e, t7 = 0) {
        let s5 = T(this, r, m4).call(this, e);
        if (s5.type !== "file") throw new d3("EISDIR", "Is a directory");
        let i4 = h(this, f4).get(s5.backingFilename)?.sh;
        if (!i4) throw new d3("ENOENT", "No such file or directory");
        i4.truncate(t7), h(this, S3).add(i4);
      }
      unlink(e) {
        T(this, r, D3).call(this, { opp: "unlink", args: [e] }, () => {
          this._unlinkState(e, true);
        });
      }
      _unlinkState(e, t7 = false) {
        let s5 = T(this, r, w3).call(this, e), i4 = s5.pop(), a3 = T(this, r, m4).call(this, s5.join("/"));
        if (!Object.prototype.hasOwnProperty.call(a3.children, i4)) throw new d3("ENOENT", "No such file or directory");
        let c3 = a3.children[i4];
        if (c3.type !== "file") throw new d3("EISDIR", "Is a directory");
        if (delete a3.children[i4], t7) {
          let h4 = h(this, f4).get(c3.backingFilename).sh;
          h4?.truncate(0), h(this, S3).add(h4), h(this, P4).has(e) && (h(this, F3).delete(h(this, P4).get(e)), h(this, P4).delete(e));
        }
        this.state.pool.push(c3.backingFilename);
      }
      utimes(e, t7, s5) {
        T(this, r, D3).call(this, { opp: "utimes", args: [e, t7, s5] }, () => {
          this._utimesState(e, t7, s5);
        });
      }
      _utimesState(e, t7, s5) {
        let i4 = T(this, r, m4).call(this, e);
        i4.lastModified = s5;
      }
      writeFile(e, t7, s5) {
        let i4 = T(this, r, w3).call(this, e), a3 = i4.pop(), c3 = T(this, r, m4).call(this, i4.join("/"));
        if (Object.prototype.hasOwnProperty.call(c3.children, a3)) {
          let l3 = c3.children[a3];
          l3.lastModified = Date.now(), T(this, r, E2).call(this, { opp: "setLastModified", args: [e, l3.lastModified] });
        } else {
          if (this.state.pool.length === 0) throw new Error("No more file handles available in the pool");
          let l3 = { type: "file", lastModified: Date.now(), mode: s5?.mode || M.FILE, backingFilename: this.state.pool.pop() };
          c3.children[a3] = l3, T(this, r, E2).call(this, { opp: "createFileNode", args: [e, l3] });
        }
        let h4 = c3.children[a3], p6 = h(this, f4).get(h4.backingFilename).sh;
        t7.length > 0 && (p6.write(typeof t7 == "string" ? new TextEncoder().encode(t7) : new Uint8Array(t7), { at: 0 }), e.startsWith("/pg_wal") && h(this, S3).add(p6));
      }
      _createFileNodeState(e, t7) {
        let s5 = T(this, r, w3).call(this, e), i4 = s5.pop(), a3 = T(this, r, m4).call(this, s5.join("/"));
        a3.children[i4] = t7;
        let c3 = this.state.pool.indexOf(t7.backingFilename);
        return c3 > -1 && this.state.pool.splice(c3, 1), t7;
      }
      _setLastModifiedState(e, t7) {
        let s5 = T(this, r, m4).call(this, e);
        s5.lastModified = t7;
      }
      write(e, t7, s5, i4, a3) {
        let c3 = T(this, r, A2).call(this, e), h4 = T(this, r, m4).call(this, c3);
        if (h4.type !== "file") throw new d3("EISDIR", "Is a directory");
        let p6 = h(this, f4).get(h4.backingFilename)?.sh;
        if (!p6) throw new d3("EBADF", "Bad file descriptor");
        let l3 = p6.write(new Uint8Array(t7, s5, i4), { at: a3 });
        return c3.startsWith("/pg_wal") && h(this, S3).add(p6), l3;
      }
    };
    I = /* @__PURE__ */ new WeakMap(), k2 = /* @__PURE__ */ new WeakMap(), N2 = /* @__PURE__ */ new WeakMap(), H2 = /* @__PURE__ */ new WeakMap(), y4 = /* @__PURE__ */ new WeakMap(), f4 = /* @__PURE__ */ new WeakMap(), x5 = /* @__PURE__ */ new WeakMap(), F3 = /* @__PURE__ */ new WeakMap(), P4 = /* @__PURE__ */ new WeakMap(), S3 = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakSet(), L3 = async function() {
      x(this, I, await navigator.storage.getDirectory()), x(this, k2, await T(this, r, T3).call(this, this.dataDir, { create: true })), x(this, N2, await T(this, r, T3).call(this, $2, { from: h(this, k2), create: true })), x(this, H2, await h(this, k2).getFileHandle(U4, { create: true })), x(this, y4, await h(this, H2).createSyncAccessHandle());
      let e = new ArrayBuffer(h(this, y4).getSize());
      h(this, y4).read(e, { at: 0 });
      let t7, s5 = new TextDecoder().decode(e).split(`
`), i4 = false;
      try {
        t7 = JSON.parse(s5[0]);
      } catch {
        t7 = { root: { type: "directory", lastModified: Date.now(), mode: M.DIR, children: {} }, pool: [] }, h(this, y4).truncate(0), h(this, y4).write(new TextEncoder().encode(JSON.stringify(t7)), { at: 0 }), i4 = true;
      }
      this.state = t7;
      let a3 = s5.slice(1).filter(Boolean).map((l3) => JSON.parse(l3));
      for (let l3 of a3) {
        let u3 = `_${l3.opp}State`;
        if (typeof this[u3] == "function") try {
          this[u3].bind(this)(...l3.args);
        } catch (b4) {
          console.warn("Error applying OPFS AHP WAL entry", l3, b4);
        }
      }
      let c3 = [], h4 = async (l3) => {
        if (l3.type === "file") try {
          let u3 = await h(this, N2).getFileHandle(l3.backingFilename), b4 = await u3.createSyncAccessHandle();
          h(this, f4).set(l3.backingFilename, { sh: b4, fh: u3 });
        } catch (u3) {
          console.error("Error opening file handle for node", l3, u3);
        }
        else for (let u3 of Object.values(l3.children)) c3.push(h4(u3));
      };
      await h4(this.state.root);
      let p6 = [];
      for (let l3 of this.state.pool) p6.push(new Promise(async (u3) => {
        h(this, f4).has(l3) && console.warn("File handle already exists for pool file", l3);
        let b4 = await h(this, N2).getFileHandle(l3), J4 = await b4.createSyncAccessHandle();
        h(this, f4).set(l3, { fh: b4, sh: J4 }), u3();
      }));
      await Promise.all([...c3, ...p6]), await this.maintainPool(i4 ? this.initialPoolSize : this.maintainedPoolSize);
    }, D3 = function(e, t7) {
      let s5 = T(this, r, E2).call(this, e);
      try {
        t7();
      } catch (i4) {
        throw h(this, y4).truncate(s5), i4;
      }
    }, E2 = function(e) {
      let t7 = JSON.stringify(e), s5 = new TextEncoder().encode(`
${t7}`), i4 = h(this, y4).getSize();
      return h(this, y4).write(s5, { at: i4 }), h(this, S3).add(h(this, y4)), i4;
    }, w3 = function(e) {
      return e.split("/").filter(Boolean);
    }, m4 = function(e, t7) {
      let s5 = T(this, r, w3).call(this, e), i4 = t7 || this.state.root;
      for (let a3 of s5) {
        if (i4.type !== "directory") throw new d3("ENOTDIR", "Not a directory");
        if (!Object.prototype.hasOwnProperty.call(i4.children, a3)) throw new d3("ENOENT", "No such file or directory");
        i4 = i4.children[a3];
      }
      return i4;
    }, A2 = function(e) {
      let t7 = h(this, F3).get(e);
      if (!t7) throw new d3("EBADF", "Bad file descriptor");
      return t7;
    }, C2 = function() {
      let e = ++U(this, x5)._;
      for (; h(this, F3).has(e); ) U(this, x5)._++;
      return e;
    }, T3 = async function(e, t7) {
      let s5 = T(this, r, w3).call(this, e), i4 = t7?.from || h(this, I);
      for (let a3 of s5) i4 = await i4.getDirectoryHandle(a3, { create: t7?.create });
      return i4;
    };
    d3 = class extends Error {
      constructor(v5, e) {
        super(e), typeof v5 == "number" ? this.code = v5 : typeof v5 == "string" && (this.code = Ge2[v5]);
      }
    };
  }
});

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-OZV2R5MQ.js
function R2(S4) {
  let N5 = [...S4].sort((t7, r2) => t7[0] - r2[0]), e = [];
  for (let [t7, r2] of N5) {
    let s5 = e[e.length - 1];
    s5 && t7 <= s5[1] ? s5[1] = Math.max(s5[1], r2) : e.push([t7, r2]);
  }
  return e;
}
function Q2(S4, N5, e) {
  return S4 ? new Uint8Array(S4.subarray ? S4.subarray(N5, e) : S4.slice(N5, e)) : new Uint8Array(e - N5);
}
var K2, A3, F4, g4, m5, y5, E3, v3, n2, J2, H3, j4, z4, B2, U5, x6, D4, q2, I2, L4, C3, w4, T4, $3;
var init_chunk_OZV2R5MQ = __esm({
  "node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-OZV2R5MQ.js"() {
    init_chunk_CE4NCHVO();
    init_chunk_QY3QWFKW();
    u();
    K2 = 1024;
    $3 = class extends je2 {
      constructor(e, { debug: t7 = false } = {}) {
        super();
        R(this, n2);
        R(this, A3);
        R(this, F4);
        R(this, g4, true);
        R(this, m5, []);
        R(this, y5, /* @__PURE__ */ new Map());
        R(this, E3, Promise.resolve());
        R(this, v3, false);
        this.backend = e, this.debug = t7;
      }
      async init(e, t7) {
        return this.pg = e, await this.backend.init(), { emscriptenOpts: { ...t7, preRun: [...t7.preRun || [], (s5) => {
          s5.FS.mkdirTree(x4), s5.FS.mount(T(this, n2, J2).call(this, s5), {}, x4);
        }] } };
      }
      async initialSyncFs() {
        let e = this.pg.Module.FS;
        x(this, g4, false);
        try {
          for await (let t7 of this.backend.load()) {
            let r2 = x4 + t7.path;
            t7.kind === "dir" ? e.mkdir(r2, 448) : (e.writeFile(r2, t7.data, { mode: 384, canOwn: true }), t7.mtime !== void 0 && e.utime(r2, t7.mtime, t7.mtime));
          }
        } finally {
          x(this, g4, true);
        }
      }
      async syncToFs(e = false) {
        let t7 = h(this, E3).then(() => T(this, n2, q2).call(this, e));
        x(this, E3, t7.catch(() => {
        })), await t7;
      }
      async closeFs() {
        await this.syncToFs(), await this.backend.close(), this.pg.Module.FS.quit();
      }
    };
    A3 = /* @__PURE__ */ new WeakMap(), F4 = /* @__PURE__ */ new WeakMap(), g4 = /* @__PURE__ */ new WeakMap(), m5 = /* @__PURE__ */ new WeakMap(), y5 = /* @__PURE__ */ new WeakMap(), E3 = /* @__PURE__ */ new WeakMap(), v3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakSet(), J2 = function(e) {
      let t7 = e.FS.filesystems.MEMFS;
      return { mount: (r2) => {
        let s5 = t7.mount(r2);
        return h(this, F4) ?? x(this, F4, T(this, n2, H3).call(this, e, t7.ops_table)), T(this, n2, j4).call(this, e, s5), x(this, A3, s5), s5;
      }, syncfs: (r2, s5, u3) => {
        u3(null);
      } };
    }, H3 = function(e, t7) {
      let r2 = e.FS, s5 = t7.dir.node, u3 = t7.file.node, l3 = t7.file.stream, M2 = (i4, h4) => {
        u3.setattr(i4, h4), h4.size !== void 0 && r2.isFile(i4.mode) && T(this, n2, U5).call(this, i4);
      };
      return { dir: { node: { ...s5, setattr: M2, mknod: (i4, h4, d5, c3) => {
        let f5 = s5.mknod(i4, h4, d5, c3);
        return T(this, n2, j4).call(this, e, f5), T(this, n2, D4).call(this, e, f5), f5;
      }, rename: (i4, h4, d5) => {
        let c3 = T(this, n2, w4).call(this, e, i4);
        s5.rename(i4, h4, d5), T(this, n2, x6).call(this, c3), T(this, n2, D4).call(this, e, i4);
      }, unlink: (i4, h4) => {
        s5.unlink(i4, h4), T(this, n2, x6).call(this, T(this, n2, T4).call(this, T(this, n2, w4).call(this, e, i4), h4));
      }, rmdir: (i4, h4) => {
        s5.rmdir(i4, h4), T(this, n2, x6).call(this, T(this, n2, T4).call(this, T(this, n2, w4).call(this, e, i4), h4));
      }, symlink: (i4, h4, d5) => (h(this, g4) && !h(this, v3) && (x(this, v3, true), console.warn("MEMFS frontend: symlinks are not persisted")), s5.symlink(i4, h4, d5)) }, stream: t7.dir.stream }, file: { node: { ...u3, setattr: M2 }, stream: { ...l3, write: (i4, h4, d5, c3, f5, k4) => {
        let _4 = l3.write(i4, h4, d5, c3, f5, k4);
        return T(this, n2, B2).call(this, i4.node, f5, f5 + _4), _4;
      }, msync: (i4, h4, d5, c3, f5) => {
        let k4 = l3.msync(i4, h4, d5, c3, f5);
        return T(this, n2, B2).call(this, i4.node, d5, d5 + c3), k4;
      }, allocate: (i4, h4, d5) => {
        l3.allocate(i4, h4, d5), T(this, n2, U5).call(this, i4.node);
      } } } };
    }, j4 = function(e, t7) {
      let r2 = e.FS;
      r2.isDir(t7.mode) ? (t7.node_ops = h(this, F4).dir.node, t7.stream_ops = h(this, F4).dir.stream) : r2.isFile(t7.mode) && (t7.node_ops = h(this, F4).file.node, t7.stream_ops = h(this, F4).file.stream);
    }, z4 = function(e) {
      let t7 = h(this, y5).get(e);
      return t7 || (t7 = { full: false, resized: false, ranges: [] }, h(this, y5).set(e, t7)), t7;
    }, B2 = function(e, t7, r2) {
      if (!h(this, g4) || r2 <= t7) return;
      let s5 = T(this, n2, z4).call(this, e);
      if (s5.full) return;
      let u3 = s5.ranges, l3 = u3[u3.length - 1];
      l3 && t7 <= l3[1] && r2 >= l3[0] ? (l3[0] = Math.min(l3[0], t7), l3[1] = Math.max(l3[1], r2)) : (u3.push([t7, r2]), u3.length > K2 && (s5.ranges = R2(u3)));
    }, U5 = function(e) {
      h(this, g4) && (T(this, n2, z4).call(this, e).resized = true);
    }, x6 = function(e) {
      h(this, g4) && h(this, m5).push({ op: "remove", path: e });
    }, D4 = function(e, t7) {
      if (!h(this, g4)) return;
      let r2 = e.FS;
      if (r2.isDir(t7.mode)) {
        h(this, m5).push({ op: "mkdir", node: t7 });
        for (let s5 of Object.values(t7.contents)) T(this, n2, D4).call(this, e, s5);
      } else if (r2.isFile(t7.mode)) {
        let s5 = T(this, n2, z4).call(this, t7);
        s5.full = true, s5.ranges = [];
      }
    }, q2 = async function(e) {
      if (h(this, m5).length === 0 && h(this, y5).size === 0) return;
      let t7 = T(this, n2, I2).call(this);
      try {
        await this.backend.apply(t7.changes, { relaxedDurability: e });
      } catch (r2) {
        throw T(this, n2, L4).call(this, t7), r2;
      }
      if (this.debug) {
        let { ops: r2, files: s5 } = t7.changes, u3 = s5.wal.length + s5.data.length + s5.control.length;
        console.log(`MEMFS frontend: flushed ${r2.length} ops, ${u3} files`);
      }
    }, I2 = function() {
      let e = this.pg.Module, t7 = e.FS, r2 = [];
      for (let l3 of h(this, m5)) l3.op === "remove" ? r2.push(l3) : t7.isDir(l3.node.mode) && T(this, n2, C3).call(this, l3.node) && r2.push({ op: "mkdir", path: T(this, n2, w4).call(this, e, l3.node) });
      let s5 = { wal: [], data: [], control: [] };
      for (let [l3, M2] of h(this, y5)) {
        if (!t7.isFile(l3.mode) || !T(this, n2, C3).call(this, l3)) continue;
        let i4 = l3.usedBytes, h4 = M2.full ? [[0, i4]] : R2(M2.ranges), d5 = [];
        for (let [k4, _4] of h4) {
          let W5 = Math.min(_4, i4);
          k4 >= W5 || d5.push({ at: k4, data: Q2(l3.contents, k4, W5) });
        }
        let c3 = T(this, n2, w4).call(this, e, l3);
        (c3.startsWith("/pg_wal/") ? s5.wal : c3 === "/global/pg_control" ? s5.control : s5.data).push({ path: c3, size: i4, full: M2.full, truncate: M2.full || M2.resized, chunks: d5 });
      }
      let u3 = { changes: { ops: r2, files: s5 }, journal: h(this, m5), dirty: h(this, y5) };
      return x(this, m5, []), x(this, y5, /* @__PURE__ */ new Map()), u3;
    }, L4 = function(e) {
      x(this, m5, [...e.journal, ...h(this, m5)]);
      for (let [t7, r2] of e.dirty) {
        let s5 = h(this, y5).get(t7);
        s5 ? (s5.full || (s5.full = r2.full), s5.resized || (s5.resized = r2.resized), s5.ranges = s5.full ? [] : R2([...r2.ranges, ...s5.ranges])) : h(this, y5).set(t7, r2);
      }
    }, C3 = function(e) {
      for (; e.parent !== e; ) {
        if (e.parent.contents?.[e.name] !== e) return false;
        e = e.parent;
      }
      return e === h(this, A3);
    }, w4 = function(e, t7) {
      return e.FS.getPath(t7).slice(x4.length);
    }, T4 = function(e, t7) {
      return `${e}/${t7}`;
    };
  }
});

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/fs/memfs2opfs.js
var memfs2opfs_exports = {};
__export(memfs2opfs_exports, {
  Memfs2OpfsFS: () => D5,
  OpfsBackend: () => p4
});
async function* E4(n3, t7) {
  for await (let [r2, e] of n3.entries()) {
    let s5 = `${t7}/${r2}`;
    if (e.kind === "directory") yield { kind: "dir", path: s5 }, yield* E4(e, s5);
    else {
      let u3 = await e.getFile();
      yield { kind: "file", path: s5, data: new Uint8Array(await u3.arrayBuffer()), mtime: u3.lastModified };
    }
  }
}
function g5(n3) {
  return n3.split("/").filter(Boolean);
}
async function b3(n3, t7, r2) {
  if ("createSyncAccessHandle" in n3) {
    let e = await n3.createSyncAccessHandle();
    try {
      C4(e, t7, r2);
    } finally {
      e.close();
    }
  } else {
    let e = await n3.createWritable({ keepExistingData: !t7.full });
    try {
      t7.truncate && !t7.full && await e.truncate(t7.size);
      for (let s5 of t7.chunks) await e.write({ type: "write", position: s5.at, data: s5.data });
      await e.close();
    } catch (s5) {
      throw await e.abort().catch(() => {
      }), s5;
    }
  }
}
function C4(n3, t7, r2) {
  t7.truncate && n3.truncate(t7.size);
  for (let e of t7.chunks) n3.write(e.data, { at: e.at });
  r2 || n3.flush();
}
function W3(n3) {
  try {
    n3.close();
  } catch {
  }
}
async function k3(n3, t7, r2) {
  let e = 0, s5 = async () => {
    for (; e < n3.length; ) await r2(n3[e++]);
  };
  await Promise.all(Array.from({ length: Math.min(t7, n3.length) }, s5));
}
var B3, N3, m6, y6, d4, P5, w5, x7, p4, D5;
var init_memfs2opfs = __esm({
  "node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/fs/memfs2opfs.js"() {
    init_chunk_OZV2R5MQ();
    init_chunk_CE4NCHVO();
    init_chunk_ZKGLEABV();
    init_chunk_QY3QWFKW();
    u();
    B3 = 2;
    N3 = /^\/pg_wal\/[0-9A-F]{24}$/;
    p4 = class {
      constructor(t7, { maxConcurrentWrites: r2 = 16 } = {}) {
        R(this, d4);
        R(this, m6);
        R(this, y6, /* @__PURE__ */ new Map());
        this.dataDir = t7, this.maxConcurrentWrites = r2;
      }
      async init() {
        x(this, m6, await T(this, d4, x7).call(this, this.dataDir, { from: await navigator.storage.getDirectory(), create: true }));
      }
      load() {
        return E4(h(this, m6), "");
      }
      async apply(t7, { relaxedDurability: r2 }) {
        let e = /* @__PURE__ */ new Map(), s5 = (a3) => {
          let i4 = a3.join("/"), c3 = e.get(i4);
          if (!c3) {
            let o6 = a3.length ? s5(a3.slice(0, -1)).then((z6) => z6.getDirectoryHandle(a3[a3.length - 1], { create: true })) : Promise.resolve(h(this, m6));
            e.set(i4, o6), o6.catch(() => e.delete(i4)), c3 = o6;
          }
          return c3;
        };
        for (let a3 of t7.ops) {
          let i4 = g5(a3.path);
          if (a3.op === "mkdir") {
            await s5(i4);
            continue;
          }
          T(this, d4, w5).call(this, a3.path);
          let c3 = i4.join("/");
          for (let o6 of [...e.keys()]) (o6 === c3 || o6.startsWith(c3 + "/")) && e.delete(o6);
          try {
            await (await s5(i4.slice(0, -1))).removeEntry(i4[i4.length - 1], { recursive: true });
          } catch (o6) {
            if (o6?.name !== "NotFoundError") throw o6;
          }
        }
        let u3 = async (a3) => {
          let i4 = g5(a3);
          return (await s5(i4.slice(0, -1))).getFileHandle(i4[i4.length - 1], { create: true });
        }, S4 = async (a3) => {
          await b3(await u3(a3.path), a3, r2);
        }, v5 = async (a3) => {
          if (!N3.test(a3.path)) return S4(a3);
          let i4 = h(this, y6).get(a3.path);
          if (!i4) {
            let c3 = await u3(a3.path);
            if (!("createSyncAccessHandle" in c3)) return b3(c3, a3, r2);
            i4 = await c3.createSyncAccessHandle();
          }
          h(this, y6).delete(a3.path), h(this, y6).set(a3.path, i4);
          try {
            C4(i4, a3, r2);
          } catch (c3) {
            throw T(this, d4, w5).call(this, a3.path), c3;
          }
        }, { wal: M2, data: O4, control: _4 } = t7.files;
        await k3(M2, this.maxConcurrentWrites, v5), T(this, d4, P5).call(this);
        for (let a3 of [O4, _4]) await k3(a3, this.maxConcurrentWrites, S4);
      }
      async close() {
        T(this, d4, w5).call(this);
      }
    };
    m6 = /* @__PURE__ */ new WeakMap(), y6 = /* @__PURE__ */ new WeakMap(), d4 = /* @__PURE__ */ new WeakSet(), P5 = function() {
      for (let [t7, r2] of h(this, y6)) {
        if (h(this, y6).size <= B3) break;
        h(this, y6).delete(t7), W3(r2);
      }
    }, w5 = function(t7) {
      for (let [r2, e] of h(this, y6)) t7 && r2 !== t7 && !r2.startsWith(t7 + "/") || (h(this, y6).delete(r2), W3(e));
    }, x7 = async function(t7, r2) {
      let e = r2.from;
      for (let s5 of g5(t7)) e = await e.getDirectoryHandle(s5, { create: r2.create });
      return e;
    };
    D5 = class extends $3 {
      constructor(t7, r2 = {}) {
        super(new p4(t7, r2), { debug: r2.debug }), this.dataDir = t7;
      }
    };
  }
});

// node_modules/.pnpm/@pgsql+types@18.0.0/node_modules/@pgsql/types/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/@pgsql+types@18.0.0/node_modules/@pgsql/types/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@pgsql+types@18.0.0/node_modules/@pgsql/types/enums.js
var require_enums = __commonJS({
  "node_modules/.pnpm/@pgsql+types@18.0.0/node_modules/@pgsql/types/enums.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@pgsql+types@18.0.0/node_modules/@pgsql/types/index.js
var require_types2 = __commonJS({
  "node_modules/.pnpm/@pgsql+types@18.0.0/node_modules/@pgsql/types/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o6, m7, k4, k22) {
      if (k22 === void 0) k22 = k4;
      var desc = Object.getOwnPropertyDescriptor(m7, k4);
      if (!desc || ("get" in desc ? !m7.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m7[k4];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    }) : (function(o6, m7, k4, k22) {
      if (k22 === void 0) k22 = k4;
      o6[k22] = m7[k4];
    }));
    var __exportStar = exports && exports.__exportStar || function(m7, exports2) {
      for (var p6 in m7) if (p6 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p6)) __createBinding(exports2, m7, p6);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_types(), exports);
    __exportStar(require_enums(), exports);
  }
});

// node_modules/.pnpm/libpg-query@18.2.2/node_modules/libpg-query/wasm/libpg-query.js
var require_libpg_query = __commonJS({
  "node_modules/.pnpm/libpg-query@18.2.2/node_modules/libpg-query/wasm/libpg-query.js"(exports, module2) {
    var PgQueryModule = (() => {
      var _scriptName2 = globalThis.document?.currentScript?.src;
      return async function(moduleArg2 = {}) {
        var Module2 = moduleArg2;
        var ENVIRONMENT_IS_WEB2 = !!globalThis.window;
        var ENVIRONMENT_IS_WORKER2 = !!globalThis.WorkerGlobalScope;
        var ENVIRONMENT_IS_NODE2 = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
        var programArgs2 = [];
        var thisProgram2 = "./this.program";
        var quit_2 = (status, toThrow) => {
          throw toThrow;
        };
        if (typeof import.meta.filename != "undefined") {
          _scriptName2 = import.meta.filename;
        } else if (ENVIRONMENT_IS_WORKER2) {
          _scriptName2 = self.location.href;
        }
        var scriptDirectory2 = "";
        function locateFile2(path) {
          if (Module2["locateFile"]) {
            return Module2["locateFile"](path, scriptDirectory2);
          }
          return scriptDirectory2 + path;
        }
        var readAsync2, readBinary2;
        if (ENVIRONMENT_IS_NODE2) {
          var fs2 = __require("node:fs");
          scriptDirectory2 = import.meta.dirname + "/";
          readBinary2 = (filename) => {
            filename = isFileURI2(filename) ? new URL(filename) : filename;
            var ret = fs2.readFileSync(filename);
            return ret;
          };
          readAsync2 = async (filename, binary2 = true) => {
            filename = isFileURI2(filename) ? new URL(filename) : filename;
            var ret = fs2.readFileSync(filename, binary2 ? void 0 : "utf8");
            return ret;
          };
          if (process.argv.length > 1) {
            thisProgram2 = process.argv[1].replace(/\\/g, "/");
          }
          programArgs2 = process.argv.slice(2);
          quit_2 = (status, toThrow) => {
            process.exitCode = status;
            throw toThrow;
          };
        } else if (ENVIRONMENT_IS_WEB2 || ENVIRONMENT_IS_WORKER2) {
          try {
            scriptDirectory2 = new URL(".", _scriptName2).href;
          } catch {
          }
          {
            if (ENVIRONMENT_IS_WORKER2) {
              readBinary2 = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync2 = async (url) => {
              var response = await fetch(url, { credentials: "same-origin" });
              if (response.ok) {
                return response.arrayBuffer();
              }
              throw new Error(response.status + " : " + response.url);
            };
          }
        } else {
        }
        var out2 = console.log.bind(console);
        var err2 = console.error.bind(console);
        var wasmBinary2;
        var ABORT2 = false;
        var EXITSTATUS2;
        var isFileURI2 = (filename) => filename.startsWith("file://");
        class EmscriptenEH2 {
        }
        class EmscriptenSjLj2 extends EmscriptenEH2 {
        }
        var runtimeInitialized2 = false;
        function getMemoryBuffer2() {
          return wasmMemory2.buffer;
        }
        function updateMemoryViews2() {
          if (HEAP82?.buffer?.resizable) return;
          var b4 = getMemoryBuffer2();
          HEAP82 = new Int8Array(b4);
          HEAP162 = new Int16Array(b4);
          Module2["HEAPU8"] = HEAPU82 = new Uint8Array(b4);
          HEAPU162 = new Uint16Array(b4);
          HEAP322 = new Int32Array(b4);
          Module2["HEAPU32"] = HEAPU322 = new Uint32Array(b4);
          HEAPF322 = new Float32Array(b4);
          HEAPF642 = new Float64Array(b4);
          HEAP642 = new BigInt64Array(b4);
          HEAPU642 = new BigUint64Array(b4);
        }
        function preRun2() {
          var preRun3 = Module2["preRun"];
          if (preRun3) {
            if (typeof preRun3 == "function") preRun3 = [preRun3];
            onPreRuns2.push(...preRun3);
          }
          callRuntimeCallbacks2(onPreRuns2);
        }
        function initRuntime2() {
          runtimeInitialized2 = true;
          if (!Module2["noFSInit"] && !FS2.initialized) FS2.init();
          TTY2.init();
          wasmExports2["A"]();
          FS2.ignorePermissions = false;
        }
        function postRun2() {
          var postRun3 = Module2["postRun"];
          if (postRun3) {
            if (typeof postRun3 == "function") postRun3 = [postRun3];
            onPostRuns2.push(...postRun3);
          }
          callRuntimeCallbacks2(onPostRuns2);
        }
        function abort2(what) {
          Module2["onAbort"]?.(what);
          what = `Aborted(${what})`;
          err2(what);
          ABORT2 = true;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          throw e;
        }
        var wasmBinaryFile2;
        function findWasmBinary2() {
          return locateFile2("libpg-query.wasm");
        }
        function getBinarySync2(file) {
          if (readBinary2) {
            return readBinary2(file);
          }
          throw "both async and sync fetching of the wasm failed";
        }
        async function getWasmBinary2(binaryFile) {
          if (!wasmBinary2) {
            try {
              var response = await readAsync2(binaryFile);
              return new Uint8Array(response);
            } catch {
            }
          }
          return getBinarySync2(binaryFile);
        }
        async function instantiateArrayBuffer2(binaryFile, imports) {
          try {
            var binary2 = await getWasmBinary2(binaryFile);
            var instance2 = await WebAssembly.instantiate(binary2, imports);
            return instance2;
          } catch (reason) {
            err2(`failed to asynchronously prepare wasm: ${reason}`);
            abort2(reason);
          }
        }
        async function instantiateAsync2(binary2, binaryFile, imports) {
          if (!binary2 && !ENVIRONMENT_IS_NODE2) {
            try {
              var response = fetch(binaryFile, { credentials: "same-origin" });
              var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
              return instantiationResult;
            } catch (reason) {
              err2(`wasm streaming compile failed: ${reason}`);
              err2("falling back to ArrayBuffer instantiation");
            }
          }
          return instantiateArrayBuffer2(binaryFile, imports);
        }
        function getWasmImports2() {
          var imports = { a: wasmImports2 };
          return imports;
        }
        async function createWasm2() {
          function receiveInstance(instance2) {
            wasmExports2 = instance2.exports;
            assignWasmExports2(wasmExports2);
            updateMemoryViews2();
            return wasmExports2;
          }
          function receiveInstantiationResult(result2) {
            return receiveInstance(result2["instance"]);
          }
          var info2 = getWasmImports2();
          var instantiateWasm = Module2["instantiateWasm"];
          if (instantiateWasm) {
            return new Promise((resolve2) => {
              instantiateWasm(info2, (inst) => resolve2(receiveInstance(inst)));
            });
          }
          wasmBinaryFile2 ??= findWasmBinary2();
          var result = await instantiateAsync2(wasmBinary2, wasmBinaryFile2, info2);
          var exports2 = receiveInstantiationResult(result);
          return exports2;
        }
        class ExitStatus2 {
          name = "ExitStatus";
          constructor(status) {
            this.message = `Program terminated with exit(${status})`;
            this.status = status;
          }
        }
        var HEAP162;
        var HEAP322;
        var HEAP642;
        var HEAP82;
        var HEAPF322;
        var HEAPF642;
        var HEAPU162;
        var HEAPU322;
        var HEAPU642;
        var HEAPU82;
        var callRuntimeCallbacks2 = (callbacks) => {
          while (callbacks.length > 0) {
            callbacks.shift()(Module2);
          }
        };
        var onPostRuns2 = [];
        var onPreRuns2 = [];
        function getValue2(ptr, type = "i8") {
          if (type.endsWith("*")) type = "*";
          switch (type) {
            case "i1":
              return HEAP82[ptr];
            case "i8":
              return HEAP82[ptr];
            case "i16":
              return HEAP162[ptr >> 1];
            case "i32":
              return HEAP322[ptr >> 2];
            case "i64":
              return HEAP642[ptr >> 3];
            case "float":
              return HEAPF322[ptr >> 2];
            case "double":
              return HEAPF642[ptr >> 3];
            case "*":
              return HEAPU322[ptr >> 2];
            default:
              abort2(`invalid type for getValue: ${type}`);
          }
        }
        var noExitRuntime2 = true;
        var stackRestore2 = (val) => __emscripten_stack_restore2(val);
        var stackSave2 = () => _emscripten_stack_get_current2();
        var UTF8Decoder2 = globalThis.TextDecoder && new TextDecoder();
        var findStringEnd2 = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
          var maxIdx = idx + maxBytesToRead;
          if (ignoreNul) return maxIdx;
          while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
          return idx;
        };
        var UTF8ArrayToString2 = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
          var endPtr = findStringEnd2(heapOrArray, idx, maxBytesToRead, ignoreNul);
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder2) {
            return UTF8Decoder2.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u22 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u22;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u22 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        };
        var UTF8ToString2 = (ptr, maxBytesToRead, ignoreNul) => ptr ? UTF8ArrayToString2(HEAPU82, ptr, maxBytesToRead, ignoreNul) : "";
        var ___assert_fail2 = (condition, filename, line, func2) => abort2(`Assertion failed: ${UTF8ToString2(condition)}, at: ` + [filename ? UTF8ToString2(filename) : "unknown filename", line, func2 ? UTF8ToString2(func2) : "unknown function"]);
        var __abort_js2 = () => abort2("");
        var runtimeKeepaliveCounter2 = 0;
        var __emscripten_runtime_keepalive_clear2 = () => {
          noExitRuntime2 = false;
          runtimeKeepaliveCounter2 = 0;
        };
        var __emscripten_throw_longjmp2 = () => {
          throw new EmscriptenSjLj2();
        };
        var timers2 = {};
        var handleException2 = (e) => {
          if (e instanceof ExitStatus2 || e == "unwind") {
            return EXITSTATUS2;
          }
          quit_2(1, e);
        };
        var keepRuntimeAlive2 = () => noExitRuntime2 || runtimeKeepaliveCounter2 > 0;
        var _proc_exit2 = (code) => {
          EXITSTATUS2 = code;
          if (!keepRuntimeAlive2()) {
            Module2["onExit"]?.(code);
            ABORT2 = true;
          }
          quit_2(code, new ExitStatus2(code));
        };
        var exitJS2 = (status, implicit) => {
          EXITSTATUS2 = status;
          _proc_exit2(status);
        };
        var _exit2 = exitJS2;
        var maybeExit2 = () => {
          if (!keepRuntimeAlive2()) {
            try {
              _exit2(EXITSTATUS2);
            } catch (e) {
              handleException2(e);
            }
          }
        };
        var callUserCallback2 = (func2) => {
          if (ABORT2) {
            return;
          }
          try {
            return func2();
          } catch (e) {
            handleException2(e);
          } finally {
            maybeExit2();
          }
        };
        var _emscripten_get_now2 = () => performance.now();
        var __setitimer_js2 = (which, timeout_ms) => {
          if (timers2[which]) {
            clearTimeout(timers2[which].id);
            delete timers2[which];
          }
          if (!timeout_ms) return 0;
          var id = setTimeout(() => {
            delete timers2[which];
            callUserCallback2(() => __emscripten_timeout2(which, _emscripten_get_now2()));
          }, timeout_ms);
          timers2[which] = { id, timeout_ms };
          return 0;
        };
        var getHeapMax2 = () => 1073741824;
        var alignMemory2 = (size, alignment) => Math.ceil(size / alignment) * alignment;
        var growMemory2 = (size) => {
          var oldHeapSize = wasmMemory2.buffer.byteLength;
          var pages = (size - oldHeapSize + 65535) / 65536 | 0;
          try {
            wasmMemory2.grow(pages);
            updateMemoryViews2();
            return 1;
          } catch (e) {
          }
        };
        var _emscripten_resize_heap2 = (requestedSize) => {
          var oldSize = HEAPU82.length;
          requestedSize >>>= 0;
          var maxHeapSize = getHeapMax2();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignMemory2(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = growMemory2(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        };
        var PATH2 = { isAbs: (path) => path.charAt(0) === "/", splitPath: (filename) => {
          var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return splitPathRe.exec(filename).slice(1);
        }, normalizeArray: (parts, allowAboveRoot) => {
          var up = 0;
          for (var i4 = parts.length - 1; i4 >= 0; i4--) {
            var last = parts[i4];
            if (last === ".") {
              parts.splice(i4, 1);
            } else if (last === "..") {
              parts.splice(i4, 1);
              up++;
            } else if (up) {
              parts.splice(i4, 1);
              up--;
            }
          }
          if (allowAboveRoot) {
            for (; up; up--) {
              parts.unshift("..");
            }
          }
          return parts;
        }, normalize: (path) => {
          var isAbsolute = PATH2.isAbs(path), trailingSlash = path.slice(-1) === "/";
          path = PATH2.normalizeArray(path.split("/").filter((p6) => !!p6), !isAbsolute).join("/");
          if (!path && !isAbsolute) {
            path = ".";
          }
          if (path && trailingSlash) {
            path += "/";
          }
          return (isAbsolute ? "/" : "") + path;
        }, dirname: (path) => {
          var result = PATH2.splitPath(path), root = result[0], dir = result[1];
          if (!root && !dir) {
            return ".";
          }
          if (dir) {
            dir = dir.slice(0, -1);
          }
          return root + dir;
        }, basename: (path) => path && path.match(/([^\/]+|\/)\/*$/)[1], join: (...paths) => PATH2.normalize(paths.join("/")), join2: (l3, r2) => PATH2.normalize(l3 + "/" + r2) };
        var initRandomFill2 = () => {
          if (ENVIRONMENT_IS_NODE2) {
            var nodeCrypto = __require("node:crypto");
            return (view) => (nodeCrypto.randomFillSync(view), 0);
          }
          return (view) => (crypto.getRandomValues(view), 0);
        };
        var randomFill2 = (view) => (randomFill2 = initRandomFill2())(view);
        var PATH_FS2 = { resolve: (...args2) => {
          var resolvedPath = "", resolvedAbsolute = false;
          for (var i4 = args2.length - 1; i4 >= -1 && !resolvedAbsolute; i4--) {
            var path = i4 >= 0 ? args2[i4] : FS2.cwd();
            if (typeof path != "string") {
              throw new TypeError("Arguments to path.resolve must be strings");
            } else if (!path) {
              return "";
            }
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = PATH2.isAbs(path);
          }
          resolvedPath = PATH2.normalizeArray(resolvedPath.split("/").filter((p6) => !!p6), !resolvedAbsolute).join("/");
          return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        }, relative: (from, to) => {
          from = PATH_FS2.resolve(from).slice(1);
          to = PATH_FS2.resolve(to).slice(1);
          function trim(arr) {
            var start2 = 0;
            for (; start2 < arr.length; start2++) {
              if (arr[start2] !== "") break;
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
              if (arr[end] !== "") break;
            }
            if (start2 > end) return [];
            return arr.slice(start2, end - start2 + 1);
          }
          var fromParts = trim(from.split("/"));
          var toParts = trim(to.split("/"));
          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;
          for (var i4 = 0; i4 < length; i4++) {
            if (fromParts[i4] !== toParts[i4]) {
              samePartsLength = i4;
              break;
            }
          }
          var outputParts = [];
          for (var i4 = samePartsLength; i4 < fromParts.length; i4++) {
            outputParts.push("..");
          }
          outputParts = outputParts.concat(toParts.slice(samePartsLength));
          return outputParts.join("/");
        } };
        var FS_stdin_getChar_buffer2 = [];
        var lengthBytesUTF82 = (str) => {
          var len = 0;
          for (var i4 = 0; i4 < str.length; ++i4) {
            var c3 = str.charCodeAt(i4);
            if (c3 <= 127) {
              len++;
            } else if (c3 <= 2047) {
              len += 2;
            } else if (c3 >= 55296 && c3 <= 57343) {
              len += 4;
              ++i4;
            } else {
              len += 3;
            }
          }
          return len;
        };
        var stringToUTF8Array2 = (str, heap, outIdx, maxBytesToWrite) => {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i4 = 0; i4 < str.length; ++i4) {
            var u3 = str.codePointAt(i4);
            if (u3 <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++] = u3;
            } else if (u3 <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++] = 192 | u3 >> 6;
              heap[outIdx++] = 128 | u3 & 63;
            } else if (u3 <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++] = 224 | u3 >> 12;
              heap[outIdx++] = 128 | u3 >> 6 & 63;
              heap[outIdx++] = 128 | u3 & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap[outIdx++] = 240 | u3 >> 18;
              heap[outIdx++] = 128 | u3 >> 12 & 63;
              heap[outIdx++] = 128 | u3 >> 6 & 63;
              heap[outIdx++] = 128 | u3 & 63;
              i4++;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        };
        var intArrayFromString2 = (stringy, dontAddNull, length) => {
          var len = length > 0 ? length : lengthBytesUTF82(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array2(stringy, u8array, 0, u8array.length);
          if (dontAddNull) u8array.length = numBytesWritten;
          return u8array;
        };
        var FS_stdin_getChar2 = () => {
          if (!FS_stdin_getChar_buffer2.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE2) {
              var BUFSIZE = 256;
              var buf = Buffer.alloc(BUFSIZE);
              var bytesRead = 0;
              var fd = process.stdin.fd;
              try {
                bytesRead = fs2.readSync(fd, buf, 0, BUFSIZE);
              } catch (e) {
                if (e.toString().includes("EOF")) bytesRead = 0;
                else throw e;
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8");
              }
            } else if (globalThis.window?.prompt) {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\n";
              }
            } else {
            }
            if (!result) {
              return null;
            }
            FS_stdin_getChar_buffer2 = intArrayFromString2(result, true);
          }
          return FS_stdin_getChar_buffer2.shift();
        };
        var TTY2 = { ttys: [], init() {
        }, shutdown() {
        }, register(dev, ops) {
          TTY2.ttys[dev] = { input: [], output: [], ops };
          FS2.registerDevice(dev, TTY2.stream_ops);
        }, stream_ops: { open(stream) {
          var tty = TTY2.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS2.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        }, close(stream) {
          stream.tty.ops.fsync(stream.tty);
        }, fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        }, read(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS2.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i4 = 0; i4 < length; i4++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS2.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS2.ErrnoError(6);
            }
            if (result === null || result === void 0) break;
            bytesRead++;
            buffer[offset + i4] = result;
          }
          if (bytesRead) {
            stream.node.atime = Date.now();
          }
          return bytesRead;
        }, write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS2.ErrnoError(60);
          }
          try {
            for (var i4 = 0; i4 < length; i4++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset + i4]);
            }
          } catch (e) {
            throw new FS2.ErrnoError(29);
          }
          if (length) {
            stream.node.mtime = stream.node.ctime = Date.now();
          }
          return i4;
        } }, default_tty_ops: { get_char(tty) {
          return FS_stdin_getChar2();
        }, put_char(tty, val) {
          if (val === null || val === 10) {
            out2(UTF8ArrayToString2(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        }, fsync(tty) {
          if (tty.output?.length > 0) {
            out2(UTF8ArrayToString2(tty.output));
            tty.output = [];
          }
        }, ioctl_tcgets(tty) {
          return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
        }, ioctl_tcsets(tty, optional_actions, data) {
          return 0;
        }, ioctl_tiocgwinsz(tty) {
          return [24, 80];
        } }, default_tty1_ops: { put_char(tty, val) {
          if (val === null || val === 10) {
            err2(UTF8ArrayToString2(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        }, fsync(tty) {
          if (tty.output?.length > 0) {
            err2(UTF8ArrayToString2(tty.output));
            tty.output = [];
          }
        } } };
        var mmapAlloc2 = (size) => {
          abort2();
        };
        var MEMFS2 = { ops_table: null, mount(mount) {
          return MEMFS2.createNode(null, "/", 16895, 0);
        }, createNode(parent, name2, mode, dev) {
          if (FS2.isBlkdev(mode) || FS2.isFIFO(mode)) {
            throw new FS2.ErrnoError(63);
          }
          MEMFS2.ops_table ||= { dir: { node: { getattr: MEMFS2.node_ops.getattr, setattr: MEMFS2.node_ops.setattr, lookup: MEMFS2.node_ops.lookup, mknod: MEMFS2.node_ops.mknod, rename: MEMFS2.node_ops.rename, unlink: MEMFS2.node_ops.unlink, rmdir: MEMFS2.node_ops.rmdir, readdir: MEMFS2.node_ops.readdir, symlink: MEMFS2.node_ops.symlink }, stream: { llseek: MEMFS2.stream_ops.llseek } }, file: { node: { getattr: MEMFS2.node_ops.getattr, setattr: MEMFS2.node_ops.setattr }, stream: { llseek: MEMFS2.stream_ops.llseek, read: MEMFS2.stream_ops.read, write: MEMFS2.stream_ops.write, mmap: MEMFS2.stream_ops.mmap, msync: MEMFS2.stream_ops.msync } }, link: { node: { getattr: MEMFS2.node_ops.getattr, setattr: MEMFS2.node_ops.setattr, readlink: MEMFS2.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS2.node_ops.getattr, setattr: MEMFS2.node_ops.setattr }, stream: FS2.chrdev_stream_ops } };
          var node = FS2.createNode(parent, name2, mode, dev);
          if (FS2.isDir(node.mode)) {
            node.node_ops = MEMFS2.ops_table.dir.node;
            node.stream_ops = MEMFS2.ops_table.dir.stream;
            node.contents = {};
          } else if (FS2.isFile(node.mode)) {
            node.node_ops = MEMFS2.ops_table.file.node;
            node.stream_ops = MEMFS2.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = MEMFS2.emptyFileContents ??= new Uint8Array(0);
          } else if (FS2.isLink(node.mode)) {
            node.node_ops = MEMFS2.ops_table.link.node;
            node.stream_ops = MEMFS2.ops_table.link.stream;
          } else if (FS2.isChrdev(node.mode)) {
            node.node_ops = MEMFS2.ops_table.chrdev.node;
            node.stream_ops = MEMFS2.ops_table.chrdev.stream;
          }
          node.atime = node.mtime = node.ctime = Date.now();
          if (parent) {
            parent.contents[name2] = node;
            parent.atime = parent.mtime = parent.ctime = node.atime;
          }
          return node;
        }, getFileDataAsTypedArray(node) {
          return node.contents.subarray(0, node.usedBytes);
        }, expandFileStorage(node, newCapacity) {
          var prevCapacity = node.contents.length;
          if (prevCapacity >= newCapacity) return;
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
          if (prevCapacity) newCapacity = Math.max(newCapacity, 256);
          var oldContents = MEMFS2.getFileDataAsTypedArray(node);
          node.contents = new Uint8Array(newCapacity);
          node.contents.set(oldContents);
        }, resizeFileStorage(node, newSize) {
          if (node.usedBytes == newSize) return;
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize);
          node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
          node.usedBytes = newSize;
        }, node_ops: { getattr(node) {
          var attr = {};
          attr.dev = FS2.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS2.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS2.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS2.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.atime);
          attr.mtime = new Date(node.mtime);
          attr.ctime = new Date(node.ctime);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        }, setattr(node, attr) {
          for (const key of ["mode", "atime", "mtime", "ctime"]) {
            if (attr[key] != null) {
              node[key] = attr[key];
            }
          }
          if (attr.size !== void 0) {
            MEMFS2.resizeFileStorage(node, attr.size);
          }
        }, lookup(parent, name2) {
          if (!MEMFS2.doesNotExistError) {
            MEMFS2.doesNotExistError = new FS2.ErrnoError(44);
            MEMFS2.doesNotExistError.stack = "<generic error, no stack>";
          }
          throw MEMFS2.doesNotExistError;
        }, mknod(parent, name2, mode, dev) {
          return MEMFS2.createNode(parent, name2, mode, dev);
        }, rename(old_node, new_dir, new_name) {
          var new_node;
          try {
            new_node = FS2.lookupNode(new_dir, new_name);
          } catch (e) {
          }
          if (new_node) {
            if (FS2.isDir(old_node.mode)) {
              for (var i4 in new_node.contents) {
                throw new FS2.ErrnoError(55);
              }
            }
            FS2.hashRemoveNode(new_node);
          }
          delete old_node.parent.contents[old_node.name];
          new_dir.contents[new_name] = old_node;
          old_node.name = new_name;
          new_dir.ctime = new_dir.mtime = old_node.parent.ctime = old_node.parent.mtime = Date.now();
        }, unlink(parent, name2) {
          delete parent.contents[name2];
          parent.ctime = parent.mtime = Date.now();
        }, rmdir(parent, name2) {
          var node = FS2.lookupNode(parent, name2);
          for (var i4 in node.contents) {
            throw new FS2.ErrnoError(55);
          }
          delete parent.contents[name2];
          parent.ctime = parent.mtime = Date.now();
        }, readdir(node) {
          return [".", "..", ...Object.keys(node.contents)];
        }, symlink(parent, newname, oldpath) {
          var node = MEMFS2.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        }, readlink(node) {
          if (!FS2.isLink(node.mode)) {
            throw new FS2.ErrnoError(28);
          }
          return node.link;
        } }, stream_ops: { read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          buffer.set(contents.subarray(position, position + size), offset);
          return size;
        }, write(stream, buffer, offset, length, position, canOwn) {
          if (buffer.buffer === HEAP82.buffer) {
            canOwn = false;
          }
          if (!length) return 0;
          var node = stream.node;
          node.mtime = node.ctime = Date.now();
          if (canOwn) {
            node.contents = buffer.subarray(offset, offset + length);
            node.usedBytes = length;
          } else if (node.usedBytes === 0 && position === 0) {
            node.contents = buffer.slice(offset, offset + length);
            node.usedBytes = length;
          } else {
            MEMFS2.expandFileStorage(node, position + length);
            node.contents.set(buffer.subarray(offset, offset + length), position);
            node.usedBytes = Math.max(node.usedBytes, position + length);
          }
          return length;
        }, llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS2.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS2.ErrnoError(28);
          }
          return position;
        }, mmap(stream, length, position, prot, flags2) {
          if (!FS2.isFile(stream.node.mode)) {
            throw new FS2.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags2 & 2) && contents.buffer === HEAP82.buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            allocated = true;
            ptr = mmapAlloc2(length);
            if (!ptr) {
              throw new FS2.ErrnoError(48);
            }
            if (contents) {
              if (position > 0 || position + length < contents.length) {
                if (contents.subarray) {
                  contents = contents.subarray(position, position + length);
                } else {
                  contents = Array.prototype.slice.call(contents, position, position + length);
                }
              }
              HEAP82.set(contents, ptr);
            }
          }
          return { ptr, allocated };
        }, msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS2.stream_ops.write(stream, buffer, 0, length, offset, false);
          return 0;
        } } };
        var FS_modeStringToFlags2 = (str) => {
          if (typeof str != "string") return str;
          var flagModes = { r: 0, "r+": 2, w: 512 | 64 | 1, "w+": 512 | 64 | 2, a: 1024 | 64 | 1, "a+": 1024 | 64 | 2 };
          var flags2 = flagModes[str];
          if (typeof flags2 == "undefined") {
            throw new Error(`Unknown file open mode: ${str}`);
          }
          return flags2;
        };
        var FS_fileDataToTypedArray2 = (data) => {
          if (typeof data == "string") {
            data = intArrayFromString2(data, true);
          }
          if (!data.subarray) {
            data = new Uint8Array(data);
          }
          return data;
        };
        var FS_getMode2 = (canRead, canWrite) => {
          var mode = 0;
          if (canRead) mode |= 292 | 73;
          if (canWrite) mode |= 146;
          return mode;
        };
        var asyncLoad2 = async (url) => {
          var arrayBuffer = await readAsync2(url);
          return new Uint8Array(arrayBuffer);
        };
        var FS_createDataFile2 = (...args2) => FS2.createDataFile(...args2);
        var getUniqueRunDependency2 = (id) => id;
        var dependenciesPromise2 = null;
        var resolveRunDependencies2 = async () => dependenciesPromise2;
        var runDependencies2 = 0;
        var dependenciesPromiseResolve2 = null;
        var removeRunDependency2 = (id) => {
          runDependencies2--;
          Module2["monitorRunDependencies"]?.(runDependencies2);
          if (!runDependencies2) {
            dependenciesPromiseResolve2();
          }
        };
        var addRunDependency2 = (id) => {
          if (!runDependencies2) {
            dependenciesPromise2 = new Promise((resolve2) => dependenciesPromiseResolve2 = resolve2);
          }
          runDependencies2++;
          Module2["monitorRunDependencies"]?.(runDependencies2);
        };
        var preloadPlugins2 = [];
        var FS_handledByPreloadPlugin2 = async (byteArray, fullname) => {
          if (typeof Browser != "undefined") Browser.init();
          for (var plugin of preloadPlugins2) {
            if (plugin["canHandle"](fullname)) {
              return plugin["handle"](byteArray, fullname);
            }
          }
          return byteArray;
        };
        var FS_preloadFile2 = async (parent, name2, url, canRead, canWrite, dontCreateFile, canOwn, preFinish) => {
          var fullname = name2 ? PATH_FS2.resolve(PATH2.join2(parent, name2)) : parent;
          var dep = getUniqueRunDependency2(`cp ${fullname}`);
          addRunDependency2(dep);
          try {
            var byteArray = url;
            if (typeof url == "string") {
              byteArray = await asyncLoad2(url);
            }
            byteArray = await FS_handledByPreloadPlugin2(byteArray, fullname);
            preFinish?.();
            if (!dontCreateFile) {
              FS_createDataFile2(parent, name2, byteArray, canRead, canWrite, canOwn);
            }
          } finally {
            removeRunDependency2(dep);
          }
        };
        var FS_createPreloadedFile2 = (parent, name2, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
          FS_preloadFile2(parent, name2, url, canRead, canWrite, dontCreateFile, canOwn, preFinish).then(onload).catch(onerror);
        };
        var FS2 = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, filesystems: null, syncFSRequests: 0, ErrnoError: class {
          name = "ErrnoError";
          constructor(errno) {
            this.errno = errno;
          }
        }, FSStream: class {
          shared = {};
          get object() {
            return this.node;
          }
          set object(val) {
            this.node = val;
          }
          get isRead() {
            return (this.flags & 2097155) !== 1;
          }
          get isWrite() {
            return (this.flags & 2097155) !== 0;
          }
          get isAppend() {
            return this.flags & 1024;
          }
          get flags() {
            return this.shared.flags;
          }
          set flags(val) {
            this.shared.flags = val;
          }
          get position() {
            return this.shared.position;
          }
          set position(val) {
            this.shared.position = val;
          }
        }, FSNode: class {
          node_ops = {};
          stream_ops = {};
          readMode = 292 | 73;
          writeMode = 146;
          mounted = null;
          constructor(parent, name2, mode, rdev) {
            if (!parent) {
              parent = this;
            }
            this.parent = parent;
            this.mount = parent.mount;
            this.id = FS2.nextInode++;
            this.name = name2;
            this.mode = mode;
            this.rdev = rdev;
            this.atime = this.mtime = this.ctime = Date.now();
          }
          get read() {
            return (this.mode & this.readMode) === this.readMode;
          }
          set read(val) {
            val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
          }
          get write() {
            return (this.mode & this.writeMode) === this.writeMode;
          }
          set write(val) {
            val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
          }
          get isFolder() {
            return FS2.isDir(this.mode);
          }
          get isDevice() {
            return FS2.isChrdev(this.mode);
          }
          addListener(cb, exclusive = false) {
            var entry = { cb, exclusive };
            var listeners = this.listeners ??= /* @__PURE__ */ new Set();
            listeners.add(entry);
            return { listeners, entry };
          }
          notifyListeners(flags2) {
            if (!this.listeners) return;
            var excl;
            for (var entry of this.listeners) {
              if (entry.exclusive) (excl ||= []).push(entry);
              else entry.cb(flags2);
            }
            if (excl) {
              var i4 = (this.exclTurn || 0) % excl.length;
              this.exclTurn = i4 + 1;
              excl[i4].cb(flags2);
            }
          }
        }, lookupPath(path, opts = {}) {
          if (!path) {
            throw new FS2.ErrnoError(44);
          }
          opts.follow_mount ??= true;
          if (!PATH2.isAbs(path)) {
            path = FS2.cwd() + "/" + path;
          }
          linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
            var parts = path.split("/").filter((p6) => !!p6);
            var current = FS2.root;
            var current_path = "/";
            for (var i4 = 0; i4 < parts.length; i4++) {
              var islast = i4 === parts.length - 1;
              if (islast && opts.parent) {
                break;
              }
              if (parts[i4] === ".") {
                continue;
              }
              if (parts[i4] === "..") {
                current_path = PATH2.dirname(current_path);
                if (FS2.isRoot(current)) {
                  path = current_path + "/" + parts.slice(i4 + 1).join("/");
                  nlinks--;
                  continue linkloop;
                } else {
                  current = current.parent;
                }
                continue;
              }
              current_path = PATH2.join2(current_path, parts[i4]);
              try {
                current = FS2.lookupNode(current, parts[i4]);
              } catch (e) {
                if (e?.errno === 44 && islast && opts.noent_okay) {
                  return { path: current_path };
                }
                throw e;
              }
              if (FS2.isMountpoint(current) && (!islast || opts.follow_mount)) {
                current = current.mounted.root;
              }
              if (FS2.isLink(current.mode) && (!islast || opts.follow)) {
                if (!current.node_ops.readlink) {
                  throw new FS2.ErrnoError(52);
                }
                var link = current.node_ops.readlink(current);
                if (!PATH2.isAbs(link)) {
                  link = PATH2.dirname(current_path) + "/" + link;
                }
                path = link + "/" + parts.slice(i4 + 1).join("/");
                continue linkloop;
              }
            }
            return { path: current_path, node: current };
          }
          throw new FS2.ErrnoError(32);
        }, getPath(node) {
          var path;
          while (true) {
            if (FS2.isRoot(node)) {
              var mount = node.mount.mountpoint;
              if (!path) return mount;
              return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
            }
            path = path ? `${node.name}/${path}` : node.name;
            node = node.parent;
          }
        }, hashName(parentid, name2) {
          var hash = 0;
          for (var i4 = 0; i4 < name2.length; i4++) {
            hash = (hash << 5) - hash + name2.charCodeAt(i4) | 0;
          }
          return (parentid + hash >>> 0) % FS2.nameTable.length;
        }, hashAddNode(node) {
          var hash = FS2.hashName(node.parent.id, node.name);
          node.name_next = FS2.nameTable[hash];
          FS2.nameTable[hash] = node;
        }, hashRemoveNode(node) {
          var hash = FS2.hashName(node.parent.id, node.name);
          if (FS2.nameTable[hash] === node) {
            FS2.nameTable[hash] = node.name_next;
          } else {
            var current = FS2.nameTable[hash];
            while (current) {
              if (current.name_next === node) {
                current.name_next = node.name_next;
                break;
              }
              current = current.name_next;
            }
          }
        }, lookupNode(parent, name2) {
          var errCode = FS2.mayLookup(parent);
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          var hash = FS2.hashName(parent.id, name2);
          for (var node = FS2.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name2) {
              return node;
            }
          }
          return FS2.lookup(parent, name2);
        }, createNode(parent, name2, mode, rdev) {
          var node = new FS2.FSNode(parent, name2, mode, rdev);
          FS2.hashAddNode(node);
          return node;
        }, destroyNode(node) {
          FS2.hashRemoveNode(node);
        }, isRoot(node) {
          return node === node.parent;
        }, isMountpoint(node) {
          return !!node.mounted;
        }, isFile(mode) {
          return (mode & 61440) === 32768;
        }, isDir(mode) {
          return (mode & 61440) === 16384;
        }, isLink(mode) {
          return (mode & 61440) === 40960;
        }, isChrdev(mode) {
          return (mode & 61440) === 8192;
        }, isBlkdev(mode) {
          return (mode & 61440) === 24576;
        }, isFIFO(mode) {
          return (mode & 61440) === 4096;
        }, isSocket(mode) {
          return (mode & 49152) === 49152;
        }, flagsToPermissionString(flag) {
          var perms = ["r", "w", "rw"][flag & 3];
          if (flag & 512) {
            perms += "w";
          }
          return perms;
        }, nodePermissions(node, perms) {
          if (FS2.ignorePermissions) {
            return 0;
          }
          if (perms.includes("r") && !(node.mode & 292)) {
            return 2;
          }
          if (perms.includes("w") && !(node.mode & 146)) {
            return 2;
          }
          if (perms.includes("x") && !(node.mode & 73)) {
            return 2;
          }
          return 0;
        }, mayLookup(dir) {
          if (!FS2.isDir(dir.mode)) return 54;
          var errCode = FS2.nodePermissions(dir, "x");
          if (errCode) return errCode;
          if (!dir.node_ops.lookup) return 2;
          return 0;
        }, mayCreate(dir, name2) {
          if (!FS2.isDir(dir.mode)) {
            return 54;
          }
          try {
            var node = FS2.lookupNode(dir, name2);
            return 20;
          } catch (e) {
          }
          return FS2.nodePermissions(dir, "wx");
        }, mayDelete(dir, name2, isdir) {
          var node;
          try {
            node = FS2.lookupNode(dir, name2);
          } catch (e) {
            return e.errno;
          }
          var errCode = FS2.nodePermissions(dir, "wx");
          if (errCode) {
            return errCode;
          }
          if (isdir) {
            if (!FS2.isDir(node.mode)) {
              return 54;
            }
            if (FS2.isRoot(node) || FS2.getPath(node) === FS2.cwd()) {
              return 10;
            }
          } else if (FS2.isDir(node.mode)) {
            return 31;
          }
          return 0;
        }, mayOpen(node, flags2) {
          if (!node) {
            return 44;
          }
          if (FS2.isLink(node.mode)) {
            return 32;
          }
          var mode = FS2.flagsToPermissionString(flags2);
          if (FS2.isDir(node.mode)) {
            if (mode !== "r" || flags2 & (512 | 64)) {
              return 31;
            }
          }
          return FS2.nodePermissions(node, mode);
        }, checkOpExists(op, err3) {
          if (!op) {
            throw new FS2.ErrnoError(err3);
          }
          return op;
        }, MAX_OPEN_FDS: 4096, nextfd() {
          for (var fd = 0; fd <= FS2.MAX_OPEN_FDS; fd++) {
            if (!FS2.streams[fd]) {
              return fd;
            }
          }
          throw new FS2.ErrnoError(33);
        }, getStreamChecked(fd) {
          var stream = FS2.getStream(fd);
          if (!stream) {
            throw new FS2.ErrnoError(8);
          }
          return stream;
        }, getStream: (fd) => FS2.streams[fd], createStream(stream, fd = -1) {
          stream = Object.assign(new FS2.FSStream(), stream);
          if (fd == -1) {
            fd = FS2.nextfd();
          }
          stream.fd = fd;
          FS2.streams[fd] = stream;
          return stream;
        }, closeStream(fd) {
          FS2.streams[fd] = null;
        }, dupStream(origStream, fd = -1) {
          var stream = FS2.createStream(origStream, fd);
          stream.stream_ops?.dup?.(stream);
          return stream;
        }, doSetAttr(stream, node, attr) {
          var setattr = stream?.stream_ops.setattr;
          var arg2 = setattr ? stream : node;
          setattr ??= node.node_ops.setattr;
          FS2.checkOpExists(setattr, 63);
          try {
            setattr(arg2, attr);
          } catch (e) {
            if (e instanceof RangeError) {
              throw new FS2.ErrnoError(22);
            }
            throw e;
          }
        }, chrdev_stream_ops: { open(stream) {
          var device = FS2.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          stream.stream_ops.open?.(stream);
        }, llseek() {
          throw new FS2.ErrnoError(70);
        } }, major: (dev) => dev >> 8, minor: (dev) => dev & 255, makedev: (ma, mi) => ma << 8 | mi, registerDevice(dev, ops) {
          FS2.devices[dev] = { stream_ops: ops };
        }, getDevice: (dev) => FS2.devices[dev], getMounts(mount) {
          var mounts = [];
          var check = [mount];
          while (check.length) {
            var m7 = check.pop();
            mounts.push(m7);
            check.push(...m7.mounts);
          }
          return mounts;
        }, syncfs(populate, callback) {
          if (typeof populate == "function") {
            callback = populate;
            populate = false;
          }
          FS2.syncFSRequests++;
          if (FS2.syncFSRequests > 1) {
            err2(`warning: ${FS2.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
          }
          var mounts = FS2.getMounts(FS2.root.mount);
          var completed = 0;
          function doCallback(errCode) {
            FS2.syncFSRequests--;
            return callback(errCode);
          }
          function done(errCode) {
            if (errCode) {
              if (!done.errored) {
                done.errored = true;
                return doCallback(errCode);
              }
              return;
            }
            if (++completed >= mounts.length) {
              doCallback(null);
            }
          }
          for (var mount of mounts) {
            if (mount.type.syncfs) {
              mount.type.syncfs(mount, populate, done);
            } else {
              done(null);
            }
          }
        }, mount(type, opts, mountpoint) {
          var root = mountpoint === "/";
          var pseudo = !mountpoint;
          var node;
          if (root && FS2.root) {
            throw new FS2.ErrnoError(10);
          } else if (!root && !pseudo) {
            var lookup = FS2.lookupPath(mountpoint, { follow_mount: false });
            mountpoint = lookup.path;
            node = lookup.node;
            if (FS2.isMountpoint(node)) {
              throw new FS2.ErrnoError(10);
            }
            if (!FS2.isDir(node.mode)) {
              throw new FS2.ErrnoError(54);
            }
          }
          var mount = { type, opts, mountpoint, mounts: [] };
          var mountRoot = type.mount(mount);
          mountRoot.mount = mount;
          mount.root = mountRoot;
          if (root) {
            FS2.root = mountRoot;
          } else if (node) {
            node.mounted = mount;
            if (node.mount) {
              node.mount.mounts.push(mount);
            }
          }
          return mountRoot;
        }, unmount(mountpoint) {
          var lookup = FS2.lookupPath(mountpoint, { follow_mount: false });
          if (!FS2.isMountpoint(lookup.node)) {
            throw new FS2.ErrnoError(28);
          }
          var node = lookup.node;
          var mount = node.mounted;
          var mounts = FS2.getMounts(mount);
          for (var [hash, current] of Object.entries(FS2.nameTable)) {
            while (current) {
              var next = current.name_next;
              if (mounts.includes(current.mount)) {
                FS2.destroyNode(current);
              }
              current = next;
            }
          }
          node.mounted = null;
          var idx = node.mount.mounts.indexOf(mount);
          node.mount.mounts.splice(idx, 1);
        }, lookup(parent, name2) {
          return parent.node_ops.lookup(parent, name2);
        }, mknod(path, mode, dev) {
          var lookup = FS2.lookupPath(path, { parent: true });
          var parent = lookup.node;
          var name2 = PATH2.basename(path);
          if (!name2) {
            throw new FS2.ErrnoError(28);
          }
          if (name2 === "." || name2 === "..") {
            throw new FS2.ErrnoError(20);
          }
          var errCode = FS2.mayCreate(parent, name2);
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          if (!parent.node_ops.mknod) {
            throw new FS2.ErrnoError(63);
          }
          return parent.node_ops.mknod(parent, name2, mode, dev);
        }, statfs(path) {
          return FS2.statfsNode(FS2.lookupPath(path, { follow: true }).node);
        }, statfsStream(stream) {
          return FS2.statfsNode(stream.node);
        }, statfsNode(node) {
          var rtn = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: FS2.nextInode, ffree: FS2.nextInode - 1, fsid: 42, flags: 2, namelen: 255 };
          if (node.node_ops.statfs) {
            Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
          }
          return rtn;
        }, create(path, mode = 438) {
          mode &= 4095;
          mode |= 32768;
          return FS2.mknod(path, mode, 0);
        }, mkdir(path, mode = 511) {
          mode &= 511 | 512;
          mode |= 16384;
          return FS2.mknod(path, mode, 0);
        }, mkdirTree(path, mode) {
          var dirs = path.split("/");
          var d5 = "";
          for (var dir of dirs) {
            if (!dir) continue;
            if (d5 || PATH2.isAbs(path)) d5 += "/";
            d5 += dir;
            try {
              FS2.mkdir(d5, mode);
            } catch (e) {
              if (e.errno != 20) throw e;
            }
          }
        }, mkdev(path, mode, dev) {
          if (typeof dev == "undefined") {
            dev = mode;
            mode = 438;
          }
          mode |= 8192;
          return FS2.mknod(path, mode, dev);
        }, symlink(oldpath, newpath) {
          if (!PATH_FS2.resolve(oldpath)) {
            throw new FS2.ErrnoError(44);
          }
          var lookup = FS2.lookupPath(newpath, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS2.ErrnoError(44);
          }
          var newname = PATH2.basename(newpath);
          var errCode = FS2.mayCreate(parent, newname);
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          if (!parent.node_ops.symlink) {
            throw new FS2.ErrnoError(63);
          }
          return parent.node_ops.symlink(parent, newname, oldpath);
        }, link(oldpath, newpath, flags2) {
          var lookup = FS2.lookupPath(newpath, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS2.ErrnoError(44);
          }
          var newname = PATH2.basename(newpath);
          var errCode = FS2.mayCreate(parent, newname);
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          if (!parent.node_ops.link) {
            throw new FS2.ErrnoError(34);
          }
          return parent.node_ops.link(parent, newname, oldpath, flags2);
        }, rename(old_path, new_path) {
          var old_dirname = PATH2.dirname(old_path);
          var new_dirname = PATH2.dirname(new_path);
          var old_name = PATH2.basename(old_path);
          var new_name = PATH2.basename(new_path);
          var lookup, old_dir, new_dir;
          lookup = FS2.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS2.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
          if (!old_dir || !new_dir) throw new FS2.ErrnoError(44);
          if (old_dir.mount !== new_dir.mount) {
            throw new FS2.ErrnoError(75);
          }
          var old_node = FS2.lookupNode(old_dir, old_name);
          var relative = PATH_FS2.relative(old_path, new_dirname);
          if (relative.charAt(0) !== ".") {
            throw new FS2.ErrnoError(28);
          }
          relative = PATH_FS2.relative(new_path, old_dirname);
          if (relative.charAt(0) !== ".") {
            throw new FS2.ErrnoError(55);
          }
          var new_node;
          try {
            new_node = FS2.lookupNode(new_dir, new_name);
          } catch (e) {
          }
          if (old_node === new_node) {
            return;
          }
          var isdir = FS2.isDir(old_node.mode);
          var errCode = FS2.mayDelete(old_dir, old_name, isdir);
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          errCode = new_node ? FS2.mayDelete(new_dir, new_name, isdir) : FS2.mayCreate(new_dir, new_name);
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          if (!old_dir.node_ops.rename) {
            throw new FS2.ErrnoError(63);
          }
          if (FS2.isMountpoint(old_node) || new_node && FS2.isMountpoint(new_node)) {
            throw new FS2.ErrnoError(10);
          }
          if (new_dir !== old_dir) {
            errCode = FS2.nodePermissions(old_dir, "w");
            if (errCode) {
              throw new FS2.ErrnoError(errCode);
            }
          }
          FS2.hashRemoveNode(old_node);
          try {
            old_dir.node_ops.rename(old_node, new_dir, new_name);
            old_node.parent = new_dir;
          } catch (e) {
            throw e;
          } finally {
            FS2.hashAddNode(old_node);
          }
        }, rmdir(path) {
          var lookup = FS2.lookupPath(path, { parent: true });
          var parent = lookup.node;
          var name2 = PATH2.basename(path);
          var node = FS2.lookupNode(parent, name2);
          var errCode = FS2.mayDelete(parent, name2, true);
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          if (!parent.node_ops.rmdir) {
            throw new FS2.ErrnoError(63);
          }
          if (FS2.isMountpoint(node)) {
            throw new FS2.ErrnoError(10);
          }
          parent.node_ops.rmdir(parent, name2);
          FS2.destroyNode(node);
        }, readdir(path) {
          var lookup = FS2.lookupPath(path, { follow: true });
          var node = lookup.node;
          var readdir = FS2.checkOpExists(node.node_ops.readdir, 54);
          return readdir(node);
        }, unlink(path) {
          var lookup = FS2.lookupPath(path, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS2.ErrnoError(44);
          }
          var name2 = PATH2.basename(path);
          var node = FS2.lookupNode(parent, name2);
          var errCode = FS2.mayDelete(parent, name2, false);
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          if (!parent.node_ops.unlink) {
            throw new FS2.ErrnoError(63);
          }
          if (FS2.isMountpoint(node)) {
            throw new FS2.ErrnoError(10);
          }
          parent.node_ops.unlink(parent, name2);
          FS2.destroyNode(node);
        }, readlink(path) {
          var lookup = FS2.lookupPath(path);
          var link = lookup.node;
          if (!link) {
            throw new FS2.ErrnoError(44);
          }
          if (!link.node_ops.readlink) {
            throw new FS2.ErrnoError(28);
          }
          return link.node_ops.readlink(link);
        }, stat(path, dontFollow) {
          var lookup = FS2.lookupPath(path, { follow: !dontFollow });
          var node = lookup.node;
          var getattr = FS2.checkOpExists(node.node_ops.getattr, 63);
          return getattr(node);
        }, fstat(fd) {
          var stream = FS2.getStreamChecked(fd);
          var node = stream.node;
          var getattr = stream.stream_ops.getattr;
          var arg2 = getattr ? stream : node;
          getattr ??= node.node_ops.getattr;
          FS2.checkOpExists(getattr, 63);
          return getattr(arg2);
        }, lstat(path) {
          return FS2.stat(path, true);
        }, doChmod(stream, node, mode, dontFollow) {
          FS2.doSetAttr(stream, node, { mode: mode & 4095 | node.mode & ~4095, ctime: Date.now(), dontFollow });
        }, chmod(path, mode, dontFollow) {
          var node;
          if (typeof path == "string") {
            var lookup = FS2.lookupPath(path, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path;
          }
          FS2.doChmod(null, node, mode, dontFollow);
        }, lchmod(path, mode) {
          FS2.chmod(path, mode, true);
        }, fchmod(fd, mode) {
          var stream = FS2.getStreamChecked(fd);
          FS2.doChmod(stream, stream.node, mode, false);
        }, doChown(stream, node, dontFollow) {
          FS2.doSetAttr(stream, node, { timestamp: Date.now(), dontFollow });
        }, chown(path, uid, gid, dontFollow) {
          var node;
          if (typeof path == "string") {
            var lookup = FS2.lookupPath(path, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path;
          }
          FS2.doChown(null, node, dontFollow);
        }, lchown(path, uid, gid) {
          FS2.chown(path, uid, gid, true);
        }, fchown(fd, uid, gid) {
          var stream = FS2.getStreamChecked(fd);
          FS2.doChown(stream, stream.node, false);
        }, doTruncate(stream, node, len) {
          if (FS2.isDir(node.mode)) {
            throw new FS2.ErrnoError(31);
          }
          if (!FS2.isFile(node.mode)) {
            throw new FS2.ErrnoError(28);
          }
          var errCode = FS2.nodePermissions(node, "w");
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          FS2.doSetAttr(stream, node, { size: len, timestamp: Date.now() });
        }, truncate(path, len) {
          if (len < 0) {
            throw new FS2.ErrnoError(28);
          }
          var node;
          if (typeof path == "string") {
            var lookup = FS2.lookupPath(path, { follow: true });
            node = lookup.node;
          } else {
            node = path;
          }
          FS2.doTruncate(null, node, len);
        }, ftruncate(fd, len) {
          var stream = FS2.getStreamChecked(fd);
          if (len < 0 || (stream.flags & 2097155) === 0) {
            throw new FS2.ErrnoError(28);
          }
          FS2.doTruncate(stream, stream.node, len);
        }, utime(path, atime, mtime, dontFollow) {
          var lookup = FS2.lookupPath(path, { follow: !dontFollow });
          FS2.doSetAttr(null, lookup.node, { atime, mtime, dontFollow });
        }, open(path, flags2, mode = 438) {
          if (path === "") {
            throw new FS2.ErrnoError(44);
          }
          flags2 = FS_modeStringToFlags2(flags2);
          if (flags2 & 64) {
            mode = mode & 4095 | 32768;
          } else {
            mode = 0;
          }
          var node;
          var isDirPath;
          if (typeof path == "object") {
            node = path;
          } else {
            isDirPath = path.endsWith("/");
            var lookup = FS2.lookupPath(path, { follow: !(flags2 & 131072), noent_okay: true });
            node = lookup.node;
            path = lookup.path;
          }
          var created = false;
          if (flags2 & 64) {
            if (node) {
              if (flags2 & 128) {
                throw new FS2.ErrnoError(20);
              }
            } else if (isDirPath) {
              throw new FS2.ErrnoError(31);
            } else {
              node = FS2.mknod(path, mode | 511, 0);
              created = true;
            }
          }
          if (!node) {
            throw new FS2.ErrnoError(44);
          }
          if (FS2.isChrdev(node.mode)) {
            flags2 &= ~512;
          }
          if (flags2 & 65536 && !FS2.isDir(node.mode)) {
            throw new FS2.ErrnoError(54);
          }
          if (!created) {
            var errCode = FS2.mayOpen(node, flags2);
            if (errCode) {
              throw new FS2.ErrnoError(errCode);
            }
          }
          if (flags2 & 512 && !created) {
            FS2.truncate(node, 0);
          }
          flags2 &= ~(128 | 512 | 131072);
          var stream = FS2.createStream({ node, path: FS2.getPath(node), flags: flags2, seekable: true, position: 0, stream_ops: node.stream_ops, ungotten: [], error: false });
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
          if (created) {
            FS2.chmod(node, mode & 511);
          }
          return stream;
        }, close(stream) {
          if (FS2.isClosed(stream)) {
            throw new FS2.ErrnoError(8);
          }
          if (stream.getdents) stream.getdents = null;
          stream.node?.notifyListeners(32);
          try {
            if (stream.stream_ops.close) {
              stream.stream_ops.close(stream);
            }
          } catch (e) {
            throw e;
          } finally {
            FS2.closeStream(stream.fd);
          }
          stream.fd = null;
        }, isClosed(stream) {
          return stream.fd === null;
        }, llseek(stream, offset, whence) {
          if (FS2.isClosed(stream)) {
            throw new FS2.ErrnoError(8);
          }
          if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS2.ErrnoError(70);
          }
          if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS2.ErrnoError(28);
          }
          stream.position = stream.stream_ops.llseek(stream, offset, whence);
          stream.ungotten = [];
          return stream.position;
        }, read(stream, buffer, offset, length, position) {
          if (length < 0 || position < 0) {
            throw new FS2.ErrnoError(28);
          }
          if (FS2.isClosed(stream)) {
            throw new FS2.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS2.ErrnoError(8);
          }
          if (FS2.isDir(stream.node.mode)) {
            throw new FS2.ErrnoError(31);
          }
          if (!stream.stream_ops.read) {
            throw new FS2.ErrnoError(28);
          }
          var seeking = typeof position != "undefined";
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS2.ErrnoError(70);
          }
          var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
          if (!seeking) stream.position += bytesRead;
          return bytesRead;
        }, write(stream, buffer, offset, length, position, canOwn) {
          if (length < 0 || position < 0) {
            throw new FS2.ErrnoError(28);
          }
          if (FS2.isClosed(stream)) {
            throw new FS2.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS2.ErrnoError(8);
          }
          if (FS2.isDir(stream.node.mode)) {
            throw new FS2.ErrnoError(31);
          }
          if (!stream.stream_ops.write) {
            throw new FS2.ErrnoError(28);
          }
          if (stream.seekable && stream.flags & 1024) {
            FS2.llseek(stream, 0, 2);
          }
          var seeking = typeof position != "undefined";
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS2.ErrnoError(70);
          }
          var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
          if (!seeking) stream.position += bytesWritten;
          return bytesWritten;
        }, mmap(stream, length, position, prot, flags2) {
          if ((prot & 2) !== 0 && (flags2 & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS2.ErrnoError(2);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS2.ErrnoError(2);
          }
          if (!stream.stream_ops.mmap) {
            throw new FS2.ErrnoError(43);
          }
          if (!length) {
            throw new FS2.ErrnoError(28);
          }
          return stream.stream_ops.mmap(stream, length, position, prot, flags2);
        }, msync(stream, buffer, offset, length, mmapFlags) {
          if (!stream.stream_ops.msync) {
            return 0;
          }
          return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
        }, ioctl(stream, cmd, arg2) {
          if (!stream.stream_ops.ioctl) {
            throw new FS2.ErrnoError(59);
          }
          return stream.stream_ops.ioctl(stream, cmd, arg2);
        }, readFile(path, opts = {}) {
          opts.flags = opts.flags ?? 0;
          opts.encoding = opts.encoding ?? "binary";
          if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            abort2(`Invalid encoding type "${opts.encoding}"`);
          }
          var stream = FS2.open(path, opts.flags);
          var stat = FS2.stat(path);
          var length = stat.size;
          var buf = new Uint8Array(length);
          FS2.read(stream, buf, 0, length, 0);
          if (opts.encoding === "utf8") {
            buf = UTF8ArrayToString2(buf);
          }
          FS2.close(stream);
          return buf;
        }, writeFile(path, data, opts = {}) {
          opts.flags = opts.flags ?? 577;
          var stream = FS2.open(path, opts.flags, opts.mode);
          data = FS_fileDataToTypedArray2(data);
          FS2.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
          FS2.close(stream);
        }, cwd: () => FS2.currentPath, chdir(path) {
          var lookup = FS2.lookupPath(path, { follow: true });
          if (lookup.node === null) {
            throw new FS2.ErrnoError(44);
          }
          if (!FS2.isDir(lookup.node.mode)) {
            throw new FS2.ErrnoError(54);
          }
          var errCode = FS2.nodePermissions(lookup.node, "x");
          if (errCode) {
            throw new FS2.ErrnoError(errCode);
          }
          FS2.currentPath = lookup.path;
        }, createDefaultDirectories() {
          FS2.mkdir("/tmp");
          FS2.mkdir("/home");
          FS2.mkdir("/home/web_user");
        }, createDefaultDevices() {
          FS2.mkdir("/dev");
          FS2.registerDevice(FS2.makedev(1, 3), { read: () => 0, write: (stream, buffer, offset, length, pos) => length, llseek: () => 0 });
          FS2.mkdev("/dev/null", FS2.makedev(1, 3));
          TTY2.register(FS2.makedev(5, 0), TTY2.default_tty_ops);
          TTY2.register(FS2.makedev(6, 0), TTY2.default_tty1_ops);
          FS2.mkdev("/dev/tty", FS2.makedev(5, 0));
          FS2.mkdev("/dev/tty1", FS2.makedev(6, 0));
          var randomBuffer = new Uint8Array(1024), randomLeft = 0;
          var randomByte = () => {
            if (randomLeft === 0) {
              randomFill2(randomBuffer);
              randomLeft = randomBuffer.byteLength;
            }
            return randomBuffer[--randomLeft];
          };
          FS2.createDevice("/dev", "random", randomByte);
          FS2.createDevice("/dev", "urandom", randomByte);
          FS2.mkdir("/dev/shm");
          FS2.mkdir("/dev/shm/tmp");
        }, createSpecialDirectories() {
          FS2.mkdir("/proc");
          var proc_self = FS2.mkdir("/proc/self");
          FS2.mkdir("/proc/self/fd");
          FS2.mount({ mount() {
            var node = FS2.createNode(proc_self, "fd", 16895, 73);
            node.stream_ops = { llseek: MEMFS2.stream_ops.llseek };
            node.node_ops = { lookup(parent, name2) {
              var fd = +name2;
              var stream = FS2.getStreamChecked(fd);
              var ret = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => stream.path }, id: fd + 1 };
              ret.parent = ret;
              return ret;
            }, readdir() {
              return Array.from(FS2.streams.entries()).filter(([k4, v5]) => v5).map(([k4, v5]) => k4.toString());
            } };
            return node;
          } }, {}, "/proc/self/fd");
        }, createStandardStreams(input, output, error) {
          if (input) {
            FS2.createDevice("/dev", "stdin", input);
          } else {
            FS2.symlink("/dev/tty", "/dev/stdin");
          }
          if (output) {
            FS2.createDevice("/dev", "stdout", null, output);
          } else {
            FS2.symlink("/dev/tty", "/dev/stdout");
          }
          if (error) {
            FS2.createDevice("/dev", "stderr", null, error);
          } else {
            FS2.symlink("/dev/tty1", "/dev/stderr");
          }
          var stdin = FS2.open("/dev/stdin", 0);
          var stdout = FS2.open("/dev/stdout", 1);
          var stderr = FS2.open("/dev/stderr", 1);
        }, staticInit() {
          FS2.nameTable = new Array(4096);
          FS2.mount(MEMFS2, {}, "/");
          FS2.createDefaultDirectories();
          FS2.createDefaultDevices();
          FS2.createSpecialDirectories();
          FS2.filesystems = { MEMFS: MEMFS2 };
        }, init(input, output, error) {
          FS2.initialized = true;
          input ??= Module2["stdin"];
          output ??= Module2["stdout"];
          error ??= Module2["stderr"];
          FS2.createStandardStreams(input, output, error);
        }, quit() {
          FS2.initialized = false;
          for (var stream of FS2.streams) {
            if (stream) {
              FS2.close(stream);
            }
          }
        }, findObject(path, dontResolveLastLink) {
          var ret = FS2.analyzePath(path, dontResolveLastLink);
          if (!ret.exists) {
            return null;
          }
          return ret.object;
        }, analyzePath(path, dontResolveLastLink) {
          try {
            var lookup = FS2.lookupPath(path, { follow: !dontResolveLastLink });
            path = lookup.path;
          } catch (e) {
          }
          var ret = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
          try {
            var lookup = FS2.lookupPath(path, { parent: true });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH2.basename(path);
            lookup = FS2.lookupPath(path, { follow: !dontResolveLastLink });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/";
          } catch (e) {
            ret.error = e.errno;
          }
          return ret;
        }, createPath(parent, path, canRead, canWrite) {
          parent = typeof parent == "string" ? parent : FS2.getPath(parent);
          var parts = path.split("/").reverse();
          while (parts.length) {
            var part = parts.pop();
            if (!part) continue;
            var current = PATH2.join2(parent, part);
            try {
              FS2.mkdir(current);
            } catch (e) {
              if (e.errno != 20) throw e;
            }
            parent = current;
          }
          return current;
        }, createFile(parent, name2, properties, canRead, canWrite) {
          var path = PATH2.join2(typeof parent == "string" ? parent : FS2.getPath(parent), name2);
          var mode = FS_getMode2(canRead, canWrite);
          return FS2.create(path, mode);
        }, createDataFile(parent, name2, data, canRead, canWrite, canOwn) {
          var path = name2;
          if (parent) {
            parent = typeof parent == "string" ? parent : FS2.getPath(parent);
            path = name2 ? PATH2.join2(parent, name2) : parent;
          }
          var mode = FS_getMode2(canRead, canWrite);
          var node = FS2.create(path, mode);
          if (data) {
            data = FS_fileDataToTypedArray2(data);
            FS2.chmod(node, mode | 146);
            var stream = FS2.open(node, 577);
            FS2.write(stream, data, 0, data.length, 0, canOwn);
            FS2.close(stream);
            FS2.chmod(node, mode);
          }
        }, createDevice(parent, name2, input, output) {
          var path = PATH2.join2(typeof parent == "string" ? parent : FS2.getPath(parent), name2);
          var mode = FS_getMode2(!!input, !!output);
          FS2.createDevice.major ??= 64;
          var dev = FS2.makedev(FS2.createDevice.major++, 0);
          FS2.registerDevice(dev, { open(stream) {
            stream.seekable = false;
          }, close(stream) {
            if (output?.buffer?.length) {
              output(10);
            }
          }, read(stream, buffer, offset, length, pos) {
            var bytesRead = 0;
            for (var i4 = 0; i4 < length; i4++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS2.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS2.ErrnoError(6);
              }
              if (result === null || result === void 0) break;
              bytesRead++;
              buffer[offset + i4] = result;
            }
            if (bytesRead) {
              stream.node.atime = Date.now();
            }
            return bytesRead;
          }, write(stream, buffer, offset, length, pos) {
            for (var i4 = 0; i4 < length; i4++) {
              try {
                output(buffer[offset + i4]);
              } catch (e) {
                throw new FS2.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.mtime = stream.node.ctime = Date.now();
            }
            return i4;
          } });
          return FS2.mkdev(path, mode, dev);
        }, forceLoadFile(obj) {
          if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
          if (globalThis.XMLHttpRequest) {
            abort2("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          } else {
            try {
              obj.contents = readBinary2(obj.url);
            } catch (e) {
              throw new FS2.ErrnoError(29);
            }
          }
        }, createLazyFile(parent, name2, url, canRead, canWrite) {
          class LazyUint8Array {
            lengthKnown = false;
            chunks = [];
            get(idx) {
              if (idx > this.length - 1 || idx < 0) {
                return void 0;
              }
              var chunkOffset = idx % this.chunkSize;
              var chunkNum = idx / this.chunkSize | 0;
              return this.getter(chunkNum)[chunkOffset];
            }
            setDataGetter(getter) {
              this.getter = getter;
            }
            cacheLength() {
              var xhr = new XMLHttpRequest();
              xhr.open("HEAD", url, false);
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) abort2("Couldn't load " + url + ". Status: " + xhr.status);
              var datalength = Number(xhr.getResponseHeader("Content-length"));
              var header;
              var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
              var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
              var chunkSize = 1024 * 1024;
              if (!hasByteServing) chunkSize = datalength;
              var doXHR = (from, to) => {
                if (from > to) abort2(`invalid range (${from}, ${to}) or no bytes requested!`);
                if (to > datalength - 1) abort2(`only ${datalength} bytes available! programmer error!`);
                var xhr2 = new XMLHttpRequest();
                xhr2.open("GET", url, false);
                if (datalength !== chunkSize) xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
                xhr2.responseType = "arraybuffer";
                if (xhr2.overrideMimeType) {
                  xhr2.overrideMimeType("text/plain; charset=x-user-defined");
                }
                xhr2.send(null);
                if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304)) abort2("Couldn't load " + url + ". Status: " + xhr2.status);
                if (xhr2.response !== void 0) {
                  return new Uint8Array(xhr2.response || []);
                }
                return intArrayFromString2(xhr2.responseText ?? "", true);
              };
              var lazyArray2 = this;
              lazyArray2.setDataGetter((chunkNum) => {
                var start2 = chunkNum * chunkSize;
                var end = (chunkNum + 1) * chunkSize - 1;
                end = Math.min(end, datalength - 1);
                if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
                  lazyArray2.chunks[chunkNum] = doXHR(start2, end);
                }
                if (typeof lazyArray2.chunks[chunkNum] == "undefined") abort2("doXHR failed!");
                return lazyArray2.chunks[chunkNum];
              });
              if (usesGzip || !datalength) {
                chunkSize = datalength = 1;
                datalength = this.getter(0).length;
                chunkSize = datalength;
                out2("LazyFiles on gzip forces download of the whole file when length is accessed");
              }
              this._length = datalength;
              this._chunkSize = chunkSize;
              this.lengthKnown = true;
            }
            get length() {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._length;
            }
            get chunkSize() {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._chunkSize;
            }
          }
          if (globalThis.XMLHttpRequest) {
            if (!ENVIRONMENT_IS_WORKER2) abort2("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
            var lazyArray = new LazyUint8Array();
            var properties = { isDevice: false, contents: lazyArray };
          } else {
            var properties = { isDevice: false, url };
          }
          var node = FS2.createFile(parent, name2, properties, canRead, canWrite);
          if (properties.contents) {
            node.contents = properties.contents;
          } else if (properties.url) {
            node.contents = null;
            node.url = properties.url;
          }
          Object.defineProperties(node, { usedBytes: { get: function() {
            return this.contents.length;
          } } });
          var stream_ops = {};
          for (const [key, fn2] of Object.entries(node.stream_ops)) {
            stream_ops[key] = (...args2) => {
              FS2.forceLoadFile(node);
              return fn2(...args2);
            };
          }
          function writeChunks(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= contents.length) return 0;
            var size = Math.min(contents.length - position, length);
            if (contents.slice) {
              for (var i4 = 0; i4 < size; i4++) {
                buffer[offset + i4] = contents[position + i4];
              }
            } else {
              for (var i4 = 0; i4 < size; i4++) {
                buffer[offset + i4] = contents.get(position + i4);
              }
            }
            return size;
          }
          stream_ops.read = (stream, buffer, offset, length, position) => {
            FS2.forceLoadFile(node);
            return writeChunks(stream, buffer, offset, length, position);
          };
          stream_ops.mmap = (stream, length, position, prot, flags2) => {
            FS2.forceLoadFile(node);
            var ptr = mmapAlloc2(length);
            if (!ptr) {
              throw new FS2.ErrnoError(48);
            }
            writeChunks(stream, HEAP82, ptr, length, position);
            return { ptr, allocated: true };
          };
          node.stream_ops = stream_ops;
          return node;
        } };
        var SYSCALLS2 = { currentUmask: 18, calculateAt(dirfd, path, allowEmpty) {
          if (PATH2.isAbs(path)) {
            return path;
          }
          var dir;
          if (dirfd === -100) {
            dir = FS2.cwd();
          } else {
            var dirstream = SYSCALLS2.getStreamFromFD(dirfd);
            dir = dirstream.path;
          }
          if (path.length == 0) {
            if (!allowEmpty) {
              throw new FS2.ErrnoError(44);
            }
            return dir;
          }
          return dir + "/" + path;
        }, writeStat(buf, stat) {
          HEAPU322[buf >> 2] = stat.dev;
          HEAPU322[buf + 4 >> 2] = stat.mode;
          HEAPU322[buf + 8 >> 2] = stat.nlink;
          HEAPU322[buf + 12 >> 2] = stat.uid;
          HEAPU322[buf + 16 >> 2] = stat.gid;
          HEAPU322[buf + 20 >> 2] = stat.rdev;
          HEAP642[buf + 24 >> 3] = BigInt(stat.size);
          HEAP322[buf + 32 >> 2] = 4096;
          HEAP322[buf + 36 >> 2] = stat.blocks;
          var atime = stat.atime.getTime();
          var mtime = stat.mtime.getTime();
          var ctime = stat.ctime.getTime();
          HEAP642[buf + 40 >> 3] = BigInt(Math.floor(atime / 1e3));
          HEAPU322[buf + 48 >> 2] = atime % 1e3 * 1e3 * 1e3;
          HEAP642[buf + 56 >> 3] = BigInt(Math.floor(mtime / 1e3));
          HEAPU322[buf + 64 >> 2] = mtime % 1e3 * 1e3 * 1e3;
          HEAP642[buf + 72 >> 3] = BigInt(Math.floor(ctime / 1e3));
          HEAPU322[buf + 80 >> 2] = ctime % 1e3 * 1e3 * 1e3;
          HEAP642[buf + 88 >> 3] = BigInt(stat.ino);
          return 0;
        }, writeStatFs(buf, stats) {
          HEAPU322[buf + 4 >> 2] = stats.bsize;
          HEAPU322[buf + 60 >> 2] = stats.bsize;
          HEAP642[buf + 8 >> 3] = BigInt(stats.blocks);
          HEAP642[buf + 16 >> 3] = BigInt(stats.bfree);
          HEAP642[buf + 24 >> 3] = BigInt(stats.bavail);
          HEAP642[buf + 32 >> 3] = BigInt(stats.files);
          HEAP642[buf + 40 >> 3] = BigInt(stats.ffree);
          HEAPU322[buf + 48 >> 2] = stats.fsid;
          HEAPU322[buf + 64 >> 2] = stats.flags;
          HEAPU322[buf + 56 >> 2] = stats.namelen;
        }, doMsync(addr2, stream, len, flags2, offset) {
          if (!FS2.isFile(stream.node.mode)) {
            throw new FS2.ErrnoError(43);
          }
          if (flags2 & 2) {
            return 0;
          }
          var buffer = HEAPU82.subarray(addr2, addr2 + len);
          FS2.msync(stream, buffer, offset, len, flags2);
        }, getStreamFromFD(fd) {
          var stream = FS2.getStreamChecked(fd);
          return stream;
        }, varargs: void 0, getStr(ptr) {
          var ret = UTF8ToString2(ptr);
          return ret;
        } };
        function _fd_close2(fd) {
          try {
            var stream = SYSCALLS2.getStreamFromFD(fd);
            FS2.close(stream);
            return 0;
          } catch (e) {
            if (typeof FS2 == "undefined" || !(e.name === "ErrnoError")) throw e;
            return e.errno;
          }
        }
        var doReadv2 = (stream, iov, iovcnt, offset) => {
          var ret = 0;
          for (var i4 = 0; i4 < iovcnt; i4++) {
            var ptr = HEAPU322[iov >> 2];
            var len = HEAPU322[iov + 4 >> 2];
            iov += 8;
            try {
              var curr = FS2.read(stream, HEAP82, ptr, len, offset);
            } catch (e) {
              if (ret > 0 && e instanceof FS2.ErrnoError && (e.errno == 6 || e.errno == 6)) {
                break;
              }
              throw e;
            }
            if (curr < 0) return -1;
            ret += curr;
            if (curr < len) break;
            if (typeof offset != "undefined") {
              offset += curr;
            }
          }
          return ret;
        };
        function _fd_read2(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS2.getStreamFromFD(fd);
            var num = doReadv2(stream, iov, iovcnt);
            HEAPU322[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS2 == "undefined" || !(e.name === "ErrnoError")) throw e;
            return e.errno;
          }
        }
        var INT53_MAX2 = 9007199254740992;
        var INT53_MIN2 = -9007199254740992;
        var bigintToI53Checked2 = (num) => num < INT53_MIN2 || num > INT53_MAX2 ? NaN : Number(num);
        function _fd_seek2(fd, offset, whence, newOffset) {
          offset = bigintToI53Checked2(offset);
          try {
            if (isNaN(offset)) return 22;
            var stream = SYSCALLS2.getStreamFromFD(fd);
            FS2.llseek(stream, offset, whence);
            HEAP642[newOffset >> 3] = BigInt(stream.position);
            if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
            return 0;
          } catch (e) {
            if (typeof FS2 == "undefined" || !(e.name === "ErrnoError")) throw e;
            return e.errno;
          }
        }
        var doWritev2 = (stream, iov, iovcnt, offset) => {
          if (iovcnt == 1) {
            return FS2.write(stream, HEAP82, HEAPU322[iov >> 2], HEAPU322[iov + 4 >> 2], offset);
          }
          var total = 0;
          for (var i4 = 0, p6 = iov; i4 < iovcnt; i4++, p6 += 8) {
            total += HEAPU322[p6 + 4 >> 2];
          }
          var view = new Uint8Array(total);
          var voff = 0;
          for (var i4 = 0; i4 < iovcnt; i4++, iov += 8) {
            var ptr = HEAPU322[iov >> 2];
            var len = HEAPU322[iov + 4 >> 2];
            view.set(HEAPU82.subarray(ptr, ptr + len), voff);
            voff += len;
          }
          return FS2.write(stream, view, 0, total, offset);
        };
        function _fd_write2(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS2.getStreamFromFD(fd);
            var num = doWritev2(stream, iov, iovcnt);
            HEAPU322[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS2 == "undefined" || !(e.name === "ErrnoError")) throw e;
            return e.errno;
          }
        }
        var wasmTableMirror2 = [];
        var getWasmTableEntry2 = (funcPtr) => {
          var func2 = wasmTableMirror2[funcPtr];
          if (!func2) {
            wasmTableMirror2[funcPtr] = func2 = wasmTable2.get(funcPtr);
          }
          return func2;
        };
        var stringToUTF82 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array2(str, HEAPU82, outPtr, maxBytesToWrite);
        FS2.createPreloadedFile = FS_createPreloadedFile2;
        FS2.preloadFile = FS_preloadFile2;
        FS2.staticInit();
        {
          if (Module2["noExitRuntime"]) noExitRuntime2 = Module2["noExitRuntime"];
          if (Module2["print"]) out2 = Module2["print"];
          if (Module2["printErr"]) err2 = Module2["printErr"];
          if (Module2["arguments"]) programArgs2 = Module2["arguments"];
          if (Module2["thisProgram"]) thisProgram2 = Module2["thisProgram"];
          var preInit2 = Module2["preInit"];
          if (preInit2) {
            if (typeof preInit2 == "function") Module2["preInit"] = preInit2 = [preInit2];
            while (preInit2.length > 0) {
              preInit2.shift()();
            }
          }
        }
        Module2["getValue"] = getValue2;
        Module2["UTF8ToString"] = UTF8ToString2;
        Module2["stringToUTF8"] = stringToUTF82;
        Module2["lengthBytesUTF8"] = lengthBytesUTF82;
        var _wasm_parse_query, _malloc2, _free2, _wasm_parse_query_raw, _wasm_free_parse_result, _wasm_parse_plpgsql, _wasm_fingerprint, _wasm_normalize_query, _wasm_parse_query_detailed, _wasm_free_detailed_result, _wasm_scan, _wasm_free_string, __emscripten_timeout2, _setThrew2, __emscripten_stack_restore2, _emscripten_stack_get_current2, memory2, __indirect_function_table2, wasmMemory2, wasmTable2;
        function assignWasmExports2(wasmExports3) {
          _wasm_parse_query = Module2["_wasm_parse_query"] = wasmExports3["B"];
          _malloc2 = Module2["_malloc"] = wasmExports3["C"];
          _free2 = Module2["_free"] = wasmExports3["E"];
          _wasm_parse_query_raw = Module2["_wasm_parse_query_raw"] = wasmExports3["F"];
          _wasm_free_parse_result = Module2["_wasm_free_parse_result"] = wasmExports3["G"];
          _wasm_parse_plpgsql = Module2["_wasm_parse_plpgsql"] = wasmExports3["H"];
          _wasm_fingerprint = Module2["_wasm_fingerprint"] = wasmExports3["I"];
          _wasm_normalize_query = Module2["_wasm_normalize_query"] = wasmExports3["J"];
          _wasm_parse_query_detailed = Module2["_wasm_parse_query_detailed"] = wasmExports3["K"];
          _wasm_free_detailed_result = Module2["_wasm_free_detailed_result"] = wasmExports3["L"];
          _wasm_scan = Module2["_wasm_scan"] = wasmExports3["M"];
          _wasm_free_string = Module2["_wasm_free_string"] = wasmExports3["N"];
          __emscripten_timeout2 = wasmExports3["O"];
          _setThrew2 = wasmExports3["P"];
          __emscripten_stack_restore2 = wasmExports3["Q"];
          _emscripten_stack_get_current2 = wasmExports3["R"];
          memory2 = wasmMemory2 = wasmExports3["z"];
          __indirect_function_table2 = wasmTable2 = wasmExports3["D"];
        }
        var wasmImports2 = { c: ___assert_fail2, x: __abort_js2, w: __emscripten_runtime_keepalive_clear2, p: __emscripten_throw_longjmp2, o: __setitimer_js2, q: _emscripten_resize_heap2, m: _exit2, u: _fd_close2, r: _fd_read2, s: _fd_seek2, t: _fd_write2, g: invoke_i2, b: invoke_ii2, a: invoke_iii2, d: invoke_iiii2, k: invoke_iiiii2, l: invoke_ji2, e: invoke_v2, f: invoke_vi2, h: invoke_vii2, j: invoke_viii2, i: invoke_viiii2, y: invoke_viiiii2, n: invoke_viiiiiiiiiiiii, v: _proc_exit2 };
        function invoke_iii2(index, a1, a22) {
          var sp = stackSave2();
          try {
            return getWasmTableEntry2(index)(a1, a22);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_ii2(index, a1) {
          var sp = stackSave2();
          try {
            return getWasmTableEntry2(index)(a1);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_i2(index) {
          var sp = stackSave2();
          try {
            return getWasmTableEntry2(index)();
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_v2(index) {
          var sp = stackSave2();
          try {
            getWasmTableEntry2(index)();
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_iiii2(index, a1, a22, a3) {
          var sp = stackSave2();
          try {
            return getWasmTableEntry2(index)(a1, a22, a3);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_viiii2(index, a1, a22, a3, a4) {
          var sp = stackSave2();
          try {
            getWasmTableEntry2(index)(a1, a22, a3, a4);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_viiiiiiiiiiiii(index, a1, a22, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
          var sp = stackSave2();
          try {
            getWasmTableEntry2(index)(a1, a22, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_iiiii2(index, a1, a22, a3, a4) {
          var sp = stackSave2();
          try {
            return getWasmTableEntry2(index)(a1, a22, a3, a4);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_viii2(index, a1, a22, a3) {
          var sp = stackSave2();
          try {
            getWasmTableEntry2(index)(a1, a22, a3);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_vi2(index, a1) {
          var sp = stackSave2();
          try {
            getWasmTableEntry2(index)(a1);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_vii2(index, a1, a22) {
          var sp = stackSave2();
          try {
            getWasmTableEntry2(index)(a1, a22);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_viiiii2(index, a1, a22, a3, a4, a5) {
          var sp = stackSave2();
          try {
            getWasmTableEntry2(index)(a1, a22, a3, a4, a5);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_ji2(index, a1) {
          var sp = stackSave2();
          try {
            return getWasmTableEntry2(index)(a1);
          } catch (e) {
            stackRestore2(sp);
            if (!(e instanceof EmscriptenEH2)) throw e;
            _setThrew2(1, 0);
            return 0n;
          }
        }
        async function run2() {
          preRun2();
          if (runDependencies2) {
            await resolveRunDependencies2();
          }
          var setStatus = Module2["setStatus"];
          if (setStatus) {
            setStatus("Running...");
            await new Promise((resolve2) => setTimeout(resolve2, 1));
            setTimeout(setStatus, 1, "");
          }
          if (ABORT2) return;
          initRuntime2();
          Module2["onRuntimeInitialized"]?.();
          postRun2();
        }
        var wasmExports2;
        wasmExports2 = await createWasm2();
        await run2();
        ;
        return Module2;
      };
    })();
    if (typeof exports === "object" && typeof module2 === "object") {
      module2.exports = PgQueryModule;
      module2.exports.default = PgQueryModule;
    } else if (typeof define === "function" && define["amd"]) define([], () => PgQueryModule);
  }
});

// node_modules/.pnpm/libpg-query@18.2.2/node_modules/libpg-query/wasm/index.cjs
var require_wasm = __commonJS({
  "node_modules/.pnpm/libpg-query@18.2.2/node_modules/libpg-query/wasm/index.cjs"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o6, m7, k4, k22) {
      if (k22 === void 0) k22 = k4;
      var desc = Object.getOwnPropertyDescriptor(m7, k4);
      if (!desc || ("get" in desc ? !m7.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m7[k4];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    }) : (function(o6, m7, k4, k22) {
      if (k22 === void 0) k22 = k4;
      o6[k22] = m7[k4];
    }));
    var __exportStar = exports && exports.__exportStar || function(m7, exports2) {
      for (var p6 in m7) if (p6 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p6)) __createBinding(exports2, m7, p6);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scan = exports.normalize = exports.fingerprint = exports.parsePlPgSQL = exports.parse = exports.SqlError = void 0;
    exports.hasSqlDetails = hasSqlDetails3;
    exports.formatSqlError = formatSqlError;
    exports.loadModule = loadModule3;
    exports.parseSync = parseSync3;
    exports.parsePlPgSQLSync = parsePlPgSQLSync;
    exports.fingerprintSync = fingerprintSync;
    exports.normalizeSync = normalizeSync;
    exports.scanSync = scanSync2;
    __exportStar(require_types2(), exports);
    var SqlError = class extends Error {
      sqlDetails;
      constructor(message, details) {
        super(message);
        this.name = "SqlError";
        this.sqlDetails = details;
      }
    };
    exports.SqlError = SqlError;
    function hasSqlDetails3(error) {
      return error instanceof SqlError && error.sqlDetails !== void 0;
    }
    function formatSqlError(error, query, options = {}) {
      const { showPosition = true, showQuery = true, color = false, maxQueryLength } = options;
      const lines = [];
      const red = color ? "\x1B[31m" : "";
      const yellow = color ? "\x1B[33m" : "";
      const reset = color ? "\x1B[0m" : "";
      lines.push(`${red}Error: ${error.message}${reset}`);
      if (error.sqlDetails) {
        const { cursorPosition, fileName, functionName, lineNumber } = error.sqlDetails;
        if (cursorPosition !== void 0 && cursorPosition >= 0) {
          lines.push(`Position: ${cursorPosition}`);
        }
        if (fileName || functionName || lineNumber) {
          const details = [];
          if (fileName)
            details.push(`file: ${fileName}`);
          if (functionName)
            details.push(`function: ${functionName}`);
          if (lineNumber)
            details.push(`line: ${lineNumber}`);
          lines.push(`Source: ${details.join(", ")}`);
        }
        if (showQuery && showPosition && cursorPosition !== void 0 && cursorPosition >= 0) {
          let displayQuery = query;
          let adjustedPosition = cursorPosition;
          if (maxQueryLength && query.length > maxQueryLength) {
            const start2 = Math.max(0, cursorPosition - Math.floor(maxQueryLength / 2));
            const end = Math.min(query.length, start2 + maxQueryLength);
            displayQuery = (start2 > 0 ? "..." : "") + query.substring(start2, end) + (end < query.length ? "..." : "");
            adjustedPosition = cursorPosition - start2 + (start2 > 0 ? 3 : 0);
          }
          lines.push(displayQuery);
          lines.push(" ".repeat(adjustedPosition) + `${yellow}^${reset}`);
        }
      } else if (showQuery) {
        let displayQuery = query;
        if (maxQueryLength && query.length > maxQueryLength) {
          displayQuery = query.substring(0, maxQueryLength) + "...";
        }
        lines.push(`Query: ${displayQuery}`);
      }
      return lines.join("\n");
    }
    var libpg_query_js_1 = __importDefault(require_libpg_query());
    var wasmModule;
    var stale = false;
    var loading;
    var failures = 0;
    var MAX_STALE_FAILURES = 10;
    var staleFailures = 0;
    var provided;
    function createModule() {
      const module3 = provided;
      if (!module3)
        return (0, libpg_query_js_1.default)();
      return new Promise((resolve2, reject) => {
        (0, libpg_query_js_1.default)({
          instantiateWasm(imports, receive) {
            WebAssembly.instantiate(module3, imports).then(receive, reject);
            return {};
          }
        }).then(resolve2, reject);
      });
    }
    function instantiate() {
      if (loading)
        return loading;
      const promise = createModule().then((module3) => {
        wasmModule = module3;
        stale = false;
        staleFailures = 0;
        loading = void 0;
      }, (error) => {
        loading = void 0;
        throw error;
      });
      loading = promise;
      promise.catch(() => {
      });
      return promise;
    }
    instantiate();
    function callWasm(fn2) {
      const proc = globalThis.process;
      const exitCode = proc?.exitCode;
      try {
        return fn2();
      } catch (error) {
        failures++;
        stale = true;
        if (++staleFailures >= MAX_STALE_FAILURES)
          wasmModule = void 0;
        instantiate();
        if (proc)
          proc.exitCode = exitCode;
        if (error instanceof Error)
          throw error;
        const reason = typeof error === "object" && error !== null ? error.message ?? error.constructor?.name : error;
        throw new Error(`libpg_query terminated (${reason}), most likely out of WASM memory; parse large inputs in smaller pieces`, { cause: error });
      }
    }
    function ensureLoaded() {
      if (!wasmModule)
        throw new Error("WASM module not initialized. Call `loadModule()` first.");
    }
    async function loadModule3(...args2) {
      const wasm = args2[0]?.wasm;
      if (wasm !== void 0) {
        provided = wasm instanceof WebAssembly.Module ? wasm : await WebAssembly.compile(wasm);
        await loading?.catch(() => {
        });
        stale = true;
      }
      while (!wasmModule || stale)
        await instantiate();
    }
    function awaitInit(fn2) {
      return (async (...args2) => {
        while (!wasmModule || stale)
          await instantiate();
        return fn2(...args2);
      });
    }
    var SURROGATE = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g;
    function stringToPtr(str) {
      ensureLoaded();
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string, got ${typeof str}`);
      }
      if (str.includes("\0")) {
        throw new Error("Query must not contain a NUL (U+0000) character");
      }
      const wellFormed = str.replace(SURROGATE, (s5) => s5.length === 2 ? s5 : "\uFFFD");
      const size = wasmModule.lengthBytesUTF8(wellFormed) + 1;
      const ptr = wasmModule._malloc(size);
      if (!ptr) {
        throw new Error("Failed to allocate memory for query");
      }
      wasmModule.stringToUTF8(wellFormed, ptr, size);
      return ptr;
    }
    function ptrToString(ptr) {
      ensureLoaded();
      if (typeof ptr !== "number") {
        throw new TypeError(`Expected a number, got ${typeof ptr}`);
      }
      return wasmModule.UTF8ToString(ptr);
    }
    exports.parse = awaitInit(async (query) => {
      if (query === null || query === void 0) {
        throw new Error("Query cannot be null or undefined");
      }
      if (query === "") {
        throw new Error("Query cannot be empty");
      }
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_parse_query_raw(queryPtr));
        if (!resultPtr) {
          throw new Error("Failed to parse query: memory allocation failed");
        }
        const parseTreePtr = wasmModule.getValue(resultPtr, "i32");
        const stderrBufferPtr = wasmModule.getValue(resultPtr + 4, "i32");
        const errorPtr = wasmModule.getValue(resultPtr + 8, "i32");
        if (errorPtr) {
          const messagePtr = wasmModule.getValue(errorPtr, "i32");
          const funcnamePtr = wasmModule.getValue(errorPtr + 4, "i32");
          const filenamePtr = wasmModule.getValue(errorPtr + 8, "i32");
          const lineno = wasmModule.getValue(errorPtr + 12, "i32");
          const cursorpos = wasmModule.getValue(errorPtr + 16, "i32");
          const message = messagePtr ? wasmModule.UTF8ToString(messagePtr) : "Unknown error";
          const funcname = funcnamePtr ? wasmModule.UTF8ToString(funcnamePtr) : void 0;
          const filename = filenamePtr ? wasmModule.UTF8ToString(filenamePtr) : void 0;
          throw new SqlError(message, {
            message,
            cursorPosition: cursorpos > 0 ? cursorpos - 1 : 0,
            // Convert to 0-based
            fileName: filename,
            functionName: funcname,
            lineNumber: lineno > 0 ? lineno : void 0
          });
        }
        if (!parseTreePtr) {
          throw new Error("libpg_query returned no parse tree: out of WASM memory (heap limit is WASM_MAXIMUM_MEMORY, 1 GiB); parse large inputs in smaller pieces");
        }
        const parseTreeStr = wasmModule.UTF8ToString(parseTreePtr);
        return JSON.parse(parseTreeStr);
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_parse_result(resultPtr);
          }
        }
      }
    });
    exports.parsePlPgSQL = awaitInit(async (query) => {
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_parse_plpgsql(queryPtr));
        const resultStr = ptrToString(resultPtr);
        if (!resultStr.startsWith("{")) {
          throw new Error(resultStr);
        }
        return JSON.parse(resultStr);
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_string(resultPtr);
          }
        }
      }
    });
    exports.fingerprint = awaitInit(async (query) => {
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_fingerprint(queryPtr));
        const resultStr = ptrToString(resultPtr);
        if (resultStr.startsWith("syntax error") || resultStr.startsWith("deparse error") || resultStr.startsWith("ERROR")) {
          throw new Error(resultStr);
        }
        return resultStr;
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_string(resultPtr);
          }
        }
      }
    });
    exports.normalize = awaitInit(async (query) => {
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_normalize_query(queryPtr));
        const resultStr = ptrToString(resultPtr);
        if (resultStr.startsWith("syntax error") || resultStr.startsWith("deparse error") || resultStr.startsWith("ERROR")) {
          throw new Error(resultStr);
        }
        return resultStr;
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_string(resultPtr);
          }
        }
      }
    });
    function parseSync3(query) {
      if (!wasmModule) {
        throw new Error("WASM module not initialized. Call loadModule() first.");
      }
      if (query === null || query === void 0) {
        throw new Error("Query cannot be null or undefined");
      }
      if (query === "") {
        throw new Error("Query cannot be empty");
      }
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_parse_query_raw(queryPtr));
        if (!resultPtr) {
          throw new Error("Failed to parse query: memory allocation failed");
        }
        const parseTreePtr = wasmModule.getValue(resultPtr, "i32");
        const stderrBufferPtr = wasmModule.getValue(resultPtr + 4, "i32");
        const errorPtr = wasmModule.getValue(resultPtr + 8, "i32");
        if (errorPtr) {
          const messagePtr = wasmModule.getValue(errorPtr, "i32");
          const funcnamePtr = wasmModule.getValue(errorPtr + 4, "i32");
          const filenamePtr = wasmModule.getValue(errorPtr + 8, "i32");
          const lineno = wasmModule.getValue(errorPtr + 12, "i32");
          const cursorpos = wasmModule.getValue(errorPtr + 16, "i32");
          const message = messagePtr ? wasmModule.UTF8ToString(messagePtr) : "Unknown error";
          const funcname = funcnamePtr ? wasmModule.UTF8ToString(funcnamePtr) : void 0;
          const filename = filenamePtr ? wasmModule.UTF8ToString(filenamePtr) : void 0;
          throw new SqlError(message, {
            message,
            cursorPosition: cursorpos > 0 ? cursorpos - 1 : 0,
            // Convert to 0-based
            fileName: filename,
            functionName: funcname,
            lineNumber: lineno > 0 ? lineno : void 0
          });
        }
        if (!parseTreePtr) {
          throw new Error("libpg_query returned no parse tree: out of WASM memory (heap limit is WASM_MAXIMUM_MEMORY, 1 GiB); parse large inputs in smaller pieces");
        }
        const parseTreeStr = wasmModule.UTF8ToString(parseTreePtr);
        return JSON.parse(parseTreeStr);
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_parse_result(resultPtr);
          }
        }
      }
    }
    function parsePlPgSQLSync(query) {
      if (!wasmModule) {
        throw new Error("WASM module not initialized. Call loadModule() first.");
      }
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_parse_plpgsql(queryPtr));
        const resultStr = ptrToString(resultPtr);
        if (!resultStr.startsWith("{")) {
          throw new Error(resultStr);
        }
        return JSON.parse(resultStr);
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_string(resultPtr);
          }
        }
      }
    }
    function fingerprintSync(query) {
      if (!wasmModule) {
        throw new Error("WASM module not initialized. Call loadModule() first.");
      }
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_fingerprint(queryPtr));
        const resultStr = ptrToString(resultPtr);
        if (resultStr.startsWith("syntax error") || resultStr.startsWith("deparse error") || resultStr.startsWith("ERROR")) {
          throw new Error(resultStr);
        }
        return resultStr;
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_string(resultPtr);
          }
        }
      }
    }
    function normalizeSync(query) {
      if (!wasmModule) {
        throw new Error("WASM module not initialized. Call loadModule() first.");
      }
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_normalize_query(queryPtr));
        const resultStr = ptrToString(resultPtr);
        if (resultStr.startsWith("syntax error") || resultStr.startsWith("deparse error") || resultStr.startsWith("ERROR")) {
          throw new Error(resultStr);
        }
        return resultStr;
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_string(resultPtr);
          }
        }
      }
    }
    exports.scan = awaitInit(async (query) => {
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_scan(queryPtr));
        const resultStr = ptrToString(resultPtr);
        if (resultStr.startsWith("syntax error") || resultStr.startsWith("deparse error") || resultStr.startsWith("ERROR")) {
          throw new Error(resultStr);
        }
        return JSON.parse(resultStr);
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_string(resultPtr);
          }
        }
      }
    });
    function scanSync2(query) {
      if (!wasmModule) {
        throw new Error("WASM module not initialized. Call loadModule() first.");
      }
      const queryPtr = stringToPtr(query);
      const failuresBefore = failures;
      let resultPtr = 0;
      try {
        resultPtr = callWasm(() => wasmModule._wasm_scan(queryPtr));
        const resultStr = ptrToString(resultPtr);
        if (resultStr.startsWith("syntax error") || resultStr.startsWith("deparse error") || resultStr.startsWith("ERROR")) {
          throw new Error(resultStr);
        }
        return JSON.parse(resultStr);
      } finally {
        if (failures === failuresBefore) {
          wasmModule._free(queryPtr);
          if (resultPtr) {
            wasmModule._wasm_free_string(resultPtr);
          }
        }
      }
    }
  }
});

// packages/adapters/pglite/dist/node-worker.js
import crypto2 from "node:crypto";
import { appendFileSync, rmSync } from "node:fs";
import { join as join2 } from "node:path";
import { parentPort, workerData } from "node:worker_threads";

// packages/adapters/pglite/dist/determinism.js
var SANDBOX_CLOCK_START = Date.UTC(2026, 0, 1);
var SANDBOX_CLOCK_STEP_MS = 1e-3;
var SEED = 2654435769;
function prng(seed) {
  let s5 = seed >>> 0;
  return () => {
    s5 = s5 + 2654435769 >>> 0;
    let z6 = s5;
    z6 = Math.imul(z6 ^ z6 >>> 16, 2246822507) >>> 0;
    z6 = Math.imul(z6 ^ z6 >>> 13, 3266489909) >>> 0;
    return (z6 ^ z6 >>> 16) >>> 0;
  };
}
function fillerOf(generation2) {
  const next = prng((SEED ^ Math.imul(generation2 + 1, 1663821227)) >>> 0);
  return (view) => {
    const bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    for (let i4 = 0; i4 < bytes.length; i4 += 4) {
      const x9 = next();
      for (let k4 = 0; k4 < 4 && i4 + k4 < bytes.length; k4++)
        bytes[i4 + k4] = x9 >>> 8 * k4 & 255;
    }
  };
}
function installDeterminism(start2, randomTargets) {
  let now = start2.clock;
  Date.now = () => {
    const t7 = now;
    now += SANDBOX_CLOCK_STEP_MS;
    return t7;
  };
  const fill = fillerOf(start2.generation);
  if (randomTargets.node) {
    randomTargets.node.randomFillSync = (buf) => {
      fill(buf);
      return buf;
    };
  }
  if (randomTargets.web) {
    randomTargets.web.getRandomValues = (buf) => {
      if (buf)
        fill(buf);
      return buf;
    };
  }
  return { clock: () => now };
}

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-EP7TJL7B.js
init_chunk_QY3QWFKW();
var yn = {};
F(yn, { ABSTIME: () => Et, ACLITEM: () => Ot, BIT: () => Qt, BOOL: () => ye, BPCHAR: () => ve, BYTEA: () => he, CHAR: () => bt, CID: () => St, CIDR: () => Rt, CIRCLE: () => Nt, DATE: () => ze, FLOAT4: () => Qe, FLOAT8: () => _e, GTSVECTOR: () => nn, INET: () => kt, INT2: () => Ve, INT4: () => Fe, INT8: () => be, INTERVAL: () => Ft, JSON: () => we, JSONB: () => Ye, MACADDR: () => Lt, MACADDR8: () => Pt, MONEY: () => Ut, NUMERIC: () => vt, OID: () => Ge, PATH: () => xt, PG_DEPENDENCIES: () => Zt, PG_LSN: () => $t, PG_NDISTINCT: () => Xt, PG_NODE_TREE: () => Dt, POLYGON: () => Mt, REFCURSOR: () => Ht, REGCLASS: () => jt, REGCONFIG: () => rn, REGDICTIONARY: () => sn, REGNAMESPACE: () => an, REGOPER: () => qt, REGOPERATOR: () => Yt, REGPROC: () => gt, REGPROCEDURE: () => zt, REGROLE: () => on, REGTYPE: () => Wt, RELTIME: () => Ct, SMGR: () => It, TEXT: () => ge, TID: () => wt, TIME: () => Vt, TIMESTAMP: () => qe, TIMESTAMPTZ: () => Ae, TIMETZ: () => Gt, TINTERVAL: () => Tt, TSQUERY: () => tn, TSVECTOR: () => en, TXID_SNAPSHOT: () => Jt, UUID: () => Kt, VARBIT: () => _t, VARCHAR: () => He, XID: () => At, XML: () => Bt, arrayParser: () => mn, arraySerializer: () => We, parseType: () => se, parsers: () => un, serializers: () => cn, types: () => je });
u();
var yt = globalThis.JSON.parse;
var ht = globalThis.JSON.stringify;
var ye = 16;
var he = 17;
var bt = 18;
var be = 20;
var Ve = 21;
var Fe = 23;
var gt = 24;
var ge = 25;
var Ge = 26;
var wt = 27;
var At = 28;
var St = 29;
var we = 114;
var Bt = 142;
var Dt = 194;
var It = 210;
var xt = 602;
var Mt = 604;
var Rt = 650;
var Qe = 700;
var _e = 701;
var Et = 702;
var Ct = 703;
var Tt = 704;
var Nt = 718;
var Pt = 774;
var Ut = 790;
var Lt = 829;
var kt = 869;
var Ot = 1033;
var ve = 1042;
var He = 1043;
var ze = 1082;
var Vt = 1083;
var qe = 1114;
var Ae = 1184;
var Ft = 1186;
var Gt = 1266;
var Qt = 1560;
var _t = 1562;
var vt = 1700;
var Ht = 1790;
var zt = 2202;
var qt = 2203;
var Yt = 2204;
var jt = 2205;
var Wt = 2206;
var Kt = 2950;
var Jt = 2970;
var $t = 3220;
var Xt = 3361;
var Zt = 3402;
var en = 3614;
var tn = 3615;
var nn = 3642;
var rn = 3734;
var sn = 3769;
var Ye = 3802;
var an = 4089;
var on = 4096;
var je = { string: { to: ge, from: [ge, He, ve], serialize: (t7) => t7 instanceof Date ? t7.toISOString() : t7.toString(), parse: (t7) => t7 }, number: { to: 0, from: [Ve, Fe, Ge, Qe, _e], serialize: (t7) => t7.toString(), parse: (t7) => +t7 }, bigint: { to: be, from: [be], serialize: (t7) => t7.toString(), parse: (t7) => {
  let e = BigInt(t7);
  return e < Number.MIN_SAFE_INTEGER || e > Number.MAX_SAFE_INTEGER ? e : Number(e);
} }, json: { to: we, from: [we, Ye], serialize: (t7) => typeof t7 == "string" ? t7 : ht(t7, (e, n3) => typeof n3 == "bigint" ? n3.toString() : n3), parse: (t7) => yt(t7) }, boolean: { to: ye, from: [ye], serialize: (t7) => {
  if (typeof t7 == "boolean") return t7 ? "t" : "f";
  if (typeof t7 == "number") {
    if (t7 === 1) return "t";
    if (t7 === 0) return "f";
  } else if (typeof t7 == "string") {
    let e = t7.trim().toLowerCase();
    if (["true", "t", "yes", "y", "on", "1"].includes(e)) return "t";
    if (["false", "f", "no", "n", "off", "0"].includes(e)) return "f";
  }
  throw new Error("Invalid input for boolean type");
}, parse: (t7) => t7 === "t" }, date: { to: Ae, from: [ze, qe, Ae], serialize: (t7) => {
  if (typeof t7 == "string") return t7;
  if (typeof t7 == "number") return new Date(t7).toISOString();
  if (t7 instanceof Date) return t7.toISOString();
  throw new Error("Invalid input for date type");
}, parse: (t7) => new Date(t7) }, bytea: { to: he, from: [he], serialize: (t7) => {
  if (!(t7 instanceof Uint8Array)) throw new Error("Invalid input for bytea type");
  return "\\x" + Array.from(t7).map((e) => e.toString(16).padStart(2, "0")).join("");
}, parse: (t7) => {
  let e = t7.slice(2);
  return Uint8Array.from({ length: e.length / 2 }, (n3, s5) => parseInt(e.substring(s5 * 2, (s5 + 1) * 2), 16));
} } };
var Se = ln(je);
var un = Se.parsers;
var cn = Se.serializers;
function se(t7, e, n3) {
  if (t7 === null) return null;
  let s5 = n3?.[e] ?? Se.parsers[e];
  return s5 ? s5(t7, e) : t7;
}
function ln(t7) {
  return Object.keys(t7).reduce(({ parsers: e, serializers: n3 }, s5) => {
    let { to: i4, from: a3, serialize: u3, parse: m7 } = t7[s5];
    return n3[i4] = u3, n3[s5] = u3, e[s5] = m7, Array.isArray(a3) ? a3.forEach((p6) => {
      e[p6] = m7, n3[p6] = u3;
    }) : (e[a3] = m7, n3[a3] = u3), { parsers: e, serializers: n3 };
  }, { parsers: {}, serializers: {} });
}
var pn = /\\/g;
var dn = /"/g;
function fn(t7) {
  return t7.replace(pn, "\\\\").replace(dn, '\\"');
}
function We(t7, e, n3) {
  if (Array.isArray(t7) === false) return t7;
  if (!t7.length) return "{}";
  let s5 = t7[0], i4 = n3 === 1020 ? ";" : ",";
  return Array.isArray(s5) ? `{${t7.map((a3) => We(a3, e, n3)).join(i4)}}` : `{${t7.map((a3) => (a3 === void 0 && (a3 = null), a3 === null ? "null" : '"' + fn(e ? e(a3) : a3.toString()) + '"')).join(i4)}}`;
}
var me = { i: 0, char: null, str: "", quoted: false, last: 0, p: null };
function mn(t7, e, n3) {
  return me.i = me.last = 0, Ke(me, t7, e, n3)[0];
}
function Ke(t7, e, n3, s5) {
  let i4 = [], a3 = s5 === 1020 ? ";" : ",";
  for (; t7.i < e.length; t7.i++) {
    if (t7.char = e[t7.i], t7.quoted) t7.char === "\\" ? t7.str += e[++t7.i] : t7.char === '"' ? (i4.push(n3 ? n3(t7.str) : t7.str), t7.str = "", t7.quoted = e[t7.i + 1] === '"', t7.last = t7.i + 2) : t7.str += t7.char;
    else if (t7.char === '"') t7.quoted = true;
    else if (t7.char === "{") t7.last = ++t7.i, i4.push(Ke(t7, e, n3, s5));
    else if (t7.char === "}") {
      if (t7.last < t7.i) {
        let u3 = e.slice(t7.last, t7.i);
        u3 === "NULL" && !t7.quoted ? i4.push(null) : i4.push(n3 ? n3(u3) : u3);
      }
      t7.quoted = false, t7.last = t7.i + 1;
      break;
    } else if (t7.char === a3 && t7.p !== "}" && t7.p !== '"') {
      let u3 = e.slice(t7.last, t7.i);
      u3 === "NULL" && !t7.quoted ? i4.push(null) : i4.push(n3 ? n3(u3) : u3), t7.last = t7.i + 1;
    }
    t7.p = t7.char;
  }
  return t7.last < t7.i && i4.push(n3 ? n3(e.slice(t7.last, t7.i + 1)) : e.slice(t7.last, t7.i + 1)), i4;
}
var gn = {};
F(gn, { parseDescribeStatementResults: () => bn, parseResults: () => hn });
u();
function hn(t7, e, n3, s5) {
  let i4 = [], a3 = { rows: [], fields: [] }, u3 = 0, m7 = n3?.parsers ? { ...e, ...n3.parsers } : e;
  return t7.forEach((p6) => {
    switch (p6.name) {
      case "rowDescription": {
        let E6 = p6;
        a3.fields = E6.fields.map((I3) => ({ name: I3.name, dataTypeID: I3.dataTypeID }));
        break;
      }
      case "dataRow": {
        if (!a3) break;
        let E6 = p6;
        n3?.rowMode === "array" ? a3.rows.push(E6.fields.map((I3, C6) => se(I3, a3.fields[C6].dataTypeID, m7))) : a3.rows.push(Object.fromEntries(E6.fields.map((I3, C6) => [a3.fields[C6].name, se(I3, a3.fields[C6].dataTypeID, m7)])));
        break;
      }
      case "commandComplete": {
        let I3 = p6.text.split(" "), C6 = I3[0], de2 = parseInt(I3[I3.length - 1], 10);
        switch (C6) {
          case "INSERT":
          case "UPDATE":
          case "DELETE":
          case "COPY":
          case "MERGE":
            u3 += de2;
            break;
        }
        let fe2 = { ...a3, command: C6, affectedRows: u3 };
        Number.isNaN(de2) || (fe2.rowCount = de2), s5 && (fe2.blob = s5), i4.push(fe2), a3 = { rows: [], fields: [] };
        break;
      }
    }
  }), i4.length === 0 && i4.push({ affectedRows: 0, rows: [], fields: [] }), i4;
}
function bn(t7) {
  let e = t7.find((n3) => n3.name === "parameterDescription");
  return e ? e.dataTypeIDs : [];
}
u();
u();
u();
function U2(t7) {
  let e = t7.length;
  for (let n3 = t7.length - 1; n3 >= 0; n3--) {
    let s5 = t7.charCodeAt(n3);
    s5 > 127 && s5 <= 2047 ? e++ : s5 > 2047 && s5 <= 65535 && (e += 2), s5 >= 56320 && s5 <= 57343 && n3--;
  }
  return e;
}
var g2;
var b;
var N;
var ae;
var L2;
var A;
var ie;
var T2;
var Je;
var P2 = class {
  constructor(e = 256) {
    this.size = e;
    R(this, A);
    R(this, g2);
    R(this, b, 5);
    R(this, N, false);
    R(this, ae, new TextEncoder());
    R(this, L2, 0);
    x(this, g2, T(this, A, ie).call(this, e));
  }
  addInt32(e) {
    return T(this, A, T2).call(this, 4), h(this, g2).setInt32(h(this, b), e, h(this, N)), x(this, b, h(this, b) + 4), this;
  }
  addInt16(e) {
    return T(this, A, T2).call(this, 2), h(this, g2).setInt16(h(this, b), e, h(this, N)), x(this, b, h(this, b) + 2), this;
  }
  addUint16(e) {
    return T(this, A, T2).call(this, 2), h(this, g2).setUint16(h(this, b), e, h(this, N)), x(this, b, h(this, b) + 2), this;
  }
  addCString(e) {
    return e && this.addString(e), T(this, A, T2).call(this, 1), h(this, g2).setUint8(h(this, b), 0), U(this, b)._++, this;
  }
  addString(e = "") {
    let n3 = U2(e);
    return T(this, A, T2).call(this, n3), h(this, ae).encodeInto(e, new Uint8Array(h(this, g2).buffer, h(this, b))), x(this, b, h(this, b) + n3), this;
  }
  add(e) {
    return T(this, A, T2).call(this, e.byteLength), new Uint8Array(h(this, g2).buffer).set(new Uint8Array(e), h(this, b)), x(this, b, h(this, b) + e.byteLength), this;
  }
  flush(e) {
    let n3 = T(this, A, Je).call(this, e);
    return x(this, b, 5), x(this, g2, T(this, A, ie).call(this, this.size)), new Uint8Array(n3);
  }
};
g2 = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), L2 = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakSet(), ie = function(e) {
  return new DataView(new ArrayBuffer(e));
}, T2 = function(e) {
  if (h(this, g2).byteLength - h(this, b) < e) {
    let s5 = h(this, g2).buffer, i4 = s5.byteLength + (s5.byteLength >> 1) + e;
    x(this, g2, T(this, A, ie).call(this, i4)), new Uint8Array(h(this, g2).buffer).set(new Uint8Array(s5));
  }
}, Je = function(e) {
  if (e) {
    h(this, g2).setUint8(h(this, L2), e);
    let n3 = h(this, b) - (h(this, L2) + 1);
    h(this, g2).setInt32(h(this, L2) + 1, n3, h(this, N));
  }
  return h(this, g2).buffer.slice(e ? 0 : 5, h(this, b));
};
var f2 = new P2();
var wn = (t7) => {
  f2.addInt16(3).addInt16(0);
  for (let s5 of Object.keys(t7)) f2.addCString(s5).addCString(t7[s5]);
  f2.addCString("client_encoding").addCString("UTF8");
  let e = f2.addCString("").flush(), n3 = e.byteLength + 4;
  return new P2().addInt32(n3).add(e).flush();
};
var An = () => {
  let t7 = new DataView(new ArrayBuffer(8));
  return t7.setInt32(0, 8, false), t7.setInt32(4, 80877103, false), new Uint8Array(t7.buffer);
};
var Sn = (t7) => f2.addCString(t7).flush(112);
var Bn = (t7, e) => (f2.addCString(t7).addInt32(U2(e)).addString(e), f2.flush(112));
var Dn = (t7) => f2.addString(t7).flush(112);
var In = (t7) => f2.addCString(t7).flush(81);
var xn = [];
var Mn = (t7) => {
  let e = t7.name ?? "";
  e.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", e, e.length), console.error("This can cause conflicts and silent errors executing queries"));
  let n3 = f2.addCString(e).addCString(t7.text).addInt16(t7.types?.length ?? 0);
  return t7.types?.forEach((s5) => n3.addInt32(s5)), f2.flush(80);
};
var k = new P2();
var Rn = (t7, e) => {
  for (let n3 = 0; n3 < t7.length; n3++) {
    let s5 = e ? e(t7[n3], n3) : t7[n3];
    if (s5 === null) f2.addInt16(0), k.addInt32(-1);
    else if (s5 instanceof ArrayBuffer || ArrayBuffer.isView(s5)) {
      let i4 = ArrayBuffer.isView(s5) ? s5.buffer.slice(s5.byteOffset, s5.byteOffset + s5.byteLength) : s5;
      f2.addInt16(1), k.addInt32(i4.byteLength), k.add(i4);
    } else f2.addInt16(0), k.addInt32(U2(s5)), k.addString(s5);
  }
};
var En = (t7 = {}) => {
  let e = t7.portal ?? "", n3 = t7.statement ?? "", s5 = t7.binary ?? false, i4 = t7.values ?? xn, a3 = i4.length;
  return f2.addCString(e).addCString(n3), f2.addUint16(a3), Rn(i4, t7.valueMapper), f2.addUint16(a3), f2.add(k.flush()), f2.addInt16(s5 ? 1 : 0), f2.flush(66);
};
var Cn = new Uint8Array([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]);
var Tn = (t7) => {
  if (!t7 || !t7.portal && !t7.rows) return Cn;
  let e = t7.portal ?? "", n3 = t7.rows ?? 0, s5 = U2(e), i4 = 4 + s5 + 1 + 4, a3 = new DataView(new ArrayBuffer(1 + i4));
  return a3.setUint8(0, 69), a3.setInt32(1, i4, false), new TextEncoder().encodeInto(e, new Uint8Array(a3.buffer, 5)), a3.setUint8(s5 + 5, 0), a3.setUint32(a3.byteLength - 4, n3, false), new Uint8Array(a3.buffer);
};
var Nn = (t7, e) => {
  let n3 = new DataView(new ArrayBuffer(16));
  return n3.setInt32(0, 16, false), n3.setInt16(4, 1234, false), n3.setInt16(6, 5678, false), n3.setInt32(8, t7, false), n3.setInt32(12, e, false), new Uint8Array(n3.buffer);
};
var Be = (t7, e) => {
  let n3 = new P2();
  return n3.addCString(e), n3.flush(t7);
};
var Pn = f2.addCString("P").flush(68);
var Un = f2.addCString("S").flush(68);
var Ln = (t7) => t7.name ? Be(68, `${t7.type}${t7.name ?? ""}`) : t7.type === "P" ? Pn : Un;
var kn = (t7) => {
  let e = `${t7.type}${t7.name ?? ""}`;
  return Be(67, e);
};
var On = (t7) => f2.add(t7).flush(100);
var Vn = (t7) => Be(102, t7);
var oe = (t7) => new Uint8Array([t7, 0, 0, 0, 4]);
var Fn = oe(72);
var Gn = oe(83);
var Qn = oe(88);
var _n = oe(99);
var $e = { startup: wn, password: Sn, requestSsl: An, sendSASLInitialResponseMessage: Bn, sendSCRAMClientFinalMessage: Dn, query: In, parse: Mn, bind: En, execute: Tn, describe: Ln, close: kn, flush: () => Fn, sync: () => Gn, end: () => Qn, copyData: On, copyDone: () => _n, copyFail: Vn, cancel: Nn };
var Ne = {};
F(Ne, { AuthenticationCleartextPassword: () => G, AuthenticationMD5Password: () => Q, AuthenticationOk: () => F2, AuthenticationSASL: () => _2, AuthenticationSASLContinue: () => v, AuthenticationSASLFinal: () => H, BackendKeyDataMessage: () => J, CommandCompleteMessage: () => Z, CopyDataMessage: () => z, CopyResponse: () => q, DataRowMessage: () => ee, DatabaseError: () => O, Field: () => Y, NoticeMessage: () => te, NotificationResponseMessage: () => $, ParameterDescriptionMessage: () => W, ParameterStatusMessage: () => K, ReadyForQueryMessage: () => X, RowDescriptionMessage: () => j, bindComplete: () => Ie, closeComplete: () => xe, copyDone: () => Te, emptyQuery: () => Ce, noData: () => Me, parseComplete: () => De, portalSuspended: () => Re, replicationStart: () => Ee });
u();
var De = { name: "parseComplete", length: 5 };
var Ie = { name: "bindComplete", length: 5 };
var xe = { name: "closeComplete", length: 5 };
var Me = { name: "noData", length: 5 };
var Re = { name: "portalSuspended", length: 5 };
var Ee = { name: "replicationStart", length: 4 };
var Ce = { name: "emptyQuery", length: 4 };
var Te = { name: "copyDone", length: 4 };
var F2 = class {
  constructor(e) {
    this.length = e;
    this.name = "authenticationOk";
  }
};
var G = class {
  constructor(e) {
    this.length = e;
    this.name = "authenticationCleartextPassword";
  }
};
var Q = class {
  constructor(e, n3) {
    this.length = e;
    this.salt = n3;
    this.name = "authenticationMD5Password";
  }
};
var _2 = class {
  constructor(e, n3) {
    this.length = e;
    this.mechanisms = n3;
    this.name = "authenticationSASL";
  }
};
var v = class {
  constructor(e, n3) {
    this.length = e;
    this.data = n3;
    this.name = "authenticationSASLContinue";
  }
};
var H = class {
  constructor(e, n3) {
    this.length = e;
    this.data = n3;
    this.name = "authenticationSASLFinal";
  }
};
var O = class extends Error {
  constructor(n3, s5, i4) {
    super(n3);
    this.length = s5;
    this.name = i4;
  }
};
var z = class {
  constructor(e, n3) {
    this.length = e;
    this.chunk = n3;
    this.name = "copyData";
  }
};
var q = class {
  constructor(e, n3, s5, i4) {
    this.length = e;
    this.name = n3;
    this.binary = s5;
    this.columnTypes = new Array(i4);
  }
};
var Y = class {
  constructor(e, n3, s5, i4, a3, u3, m7) {
    this.name = e;
    this.tableID = n3;
    this.columnID = s5;
    this.dataTypeID = i4;
    this.dataTypeSize = a3;
    this.dataTypeModifier = u3;
    this.format = m7;
  }
};
var j = class {
  constructor(e, n3) {
    this.length = e;
    this.fieldCount = n3;
    this.name = "rowDescription";
    this.fields = new Array(this.fieldCount);
  }
};
var W = class {
  constructor(e, n3) {
    this.length = e;
    this.parameterCount = n3;
    this.name = "parameterDescription";
    this.dataTypeIDs = new Array(this.parameterCount);
  }
};
var K = class {
  constructor(e, n3, s5) {
    this.length = e;
    this.parameterName = n3;
    this.parameterValue = s5;
    this.name = "parameterStatus";
  }
};
var J = class {
  constructor(e, n3, s5) {
    this.length = e;
    this.processID = n3;
    this.secretKey = s5;
    this.name = "backendKeyData";
  }
};
var $ = class {
  constructor(e, n3, s5, i4) {
    this.length = e;
    this.processId = n3;
    this.channel = s5;
    this.payload = i4;
    this.name = "notification";
  }
};
var X = class {
  constructor(e, n3) {
    this.length = e;
    this.status = n3;
    this.name = "readyForQuery";
  }
};
var Z = class {
  constructor(e, n3) {
    this.length = e;
    this.text = n3;
    this.name = "commandComplete";
  }
};
var ee = class {
  constructor(e, n3) {
    this.length = e;
    this.fields = n3;
    this.name = "dataRow";
    this.fieldCount = n3.length;
  }
};
var te = class {
  constructor(e, n3) {
    this.length = e;
    this.message = n3;
    this.name = "notice";
  }
};
var zn = {};
F(zn, { Parser: () => pe, messages: () => Ne, serialize: () => $e });
u();
u();
u();
var Pe = { text: 0, binary: 1 };
u();
var vn = new ArrayBuffer(0);
var x2;
var w;
var ce;
var le;
var V;
var ue = class {
  constructor(e = 0) {
    R(this, x2, new DataView(vn));
    R(this, w);
    R(this, ce, "utf-8");
    R(this, le, new TextDecoder(h(this, ce)));
    R(this, V, false);
    x(this, w, e);
  }
  setBuffer(e, n3) {
    x(this, w, e), x(this, x2, new DataView(n3));
  }
  int16() {
    let e = h(this, x2).getInt16(h(this, w), h(this, V));
    return x(this, w, h(this, w) + 2), e;
  }
  uint16() {
    let e = h(this, x2).getUint16(h(this, w), h(this, V));
    return x(this, w, h(this, w) + 2), e;
  }
  byte() {
    let e = h(this, x2).getUint8(h(this, w));
    return U(this, w)._++, e;
  }
  int32() {
    let e = h(this, x2).getInt32(h(this, w), h(this, V));
    return x(this, w, h(this, w) + 4), e;
  }
  string(e) {
    return h(this, le).decode(this.bytes(e));
  }
  cstring() {
    let e = h(this, w), n3 = e;
    for (; h(this, x2).getUint8(n3++) !== 0; ) ;
    let s5 = this.string(n3 - e - 1);
    return x(this, w, n3), s5;
  }
  bytes(e) {
    let n3 = h(this, x2).buffer.slice(h(this, w), h(this, w) + e);
    return x(this, w, h(this, w) + e), new Uint8Array(n3);
  }
};
x2 = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap();
var Ue = 1;
var Hn = 4;
var Xe = Ue + Hn;
var Ze = new ArrayBuffer(0);
var S;
var B;
var D2;
var o;
var c2;
var Le;
var et;
var tt;
var nt;
var rt;
var st;
var it;
var at;
var ke;
var ot;
var ut;
var ct;
var lt;
var pt;
var dt;
var ft;
var mt;
var Oe;
var pe = class {
  constructor() {
    R(this, c2);
    R(this, S, new DataView(Ze));
    R(this, B, 0);
    R(this, D2, 0);
    R(this, o, new ue());
  }
  parse(e, n3) {
    T(this, c2, et).call(this, ArrayBuffer.isView(e) ? e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength) : e);
    let s5 = h(this, D2) + h(this, B), i4 = h(this, D2);
    for (; i4 + Xe <= s5; ) {
      let a3 = h(this, S).getUint8(i4), u3 = h(this, S).getUint32(i4 + Ue, false), m7 = Ue + u3;
      if (m7 + i4 <= s5 && u3 > 0) {
        let p6;
        try {
          p6 = T(this, c2, tt).call(this, i4 + Xe, a3, u3, h(this, S).buffer);
        } catch (E6) {
          throw T(this, c2, Le).call(this), E6;
        }
        n3(p6), i4 += m7;
      } else break;
    }
    i4 === s5 ? T(this, c2, Le).call(this) : (x(this, B, s5 - i4), x(this, D2, i4));
  }
};
S = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), D2 = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), c2 = /* @__PURE__ */ new WeakSet(), Le = function() {
  x(this, S, new DataView(Ze)), x(this, B, 0), x(this, D2, 0);
}, et = function(e) {
  if (h(this, B) > 0) {
    let n3 = h(this, B) + e.byteLength;
    if (n3 + h(this, D2) > h(this, S).byteLength) {
      let i4;
      if (n3 <= h(this, S).byteLength && h(this, D2) >= h(this, B)) i4 = h(this, S).buffer;
      else {
        let a3 = h(this, S).byteLength * 2;
        for (; n3 >= a3; ) a3 *= 2;
        i4 = new ArrayBuffer(a3);
      }
      new Uint8Array(i4).set(new Uint8Array(h(this, S).buffer, h(this, D2), h(this, B))), x(this, S, new DataView(i4)), x(this, D2, 0);
    }
    new Uint8Array(h(this, S).buffer).set(new Uint8Array(e), h(this, D2) + h(this, B)), x(this, B, n3);
  } else x(this, S, new DataView(e)), x(this, D2, 0), x(this, B, e.byteLength);
}, tt = function(e, n3, s5, i4) {
  switch (n3) {
    case 50:
      return Ie;
    case 49:
      return De;
    case 51:
      return xe;
    case 110:
      return Me;
    case 115:
      return Re;
    case 99:
      return Te;
    case 87:
      return Ee;
    case 73:
      return Ce;
    case 68:
      return T(this, c2, pt).call(this, e, s5, i4);
    case 67:
      return T(this, c2, rt).call(this, e, s5, i4);
    case 90:
      return T(this, c2, nt).call(this, e, s5, i4);
    case 65:
      return T(this, c2, ot).call(this, e, s5, i4);
    case 82:
      return T(this, c2, mt).call(this, e, s5, i4);
    case 83:
      return T(this, c2, dt).call(this, e, s5, i4);
    case 75:
      return T(this, c2, ft).call(this, e, s5, i4);
    case 69:
      return T(this, c2, Oe).call(this, e, s5, i4, "error");
    case 78:
      return T(this, c2, Oe).call(this, e, s5, i4, "notice");
    case 84:
      return T(this, c2, ut).call(this, e, s5, i4);
    case 116:
      return T(this, c2, lt).call(this, e, s5, i4);
    case 71:
      return T(this, c2, it).call(this, e, s5, i4);
    case 72:
      return T(this, c2, at).call(this, e, s5, i4);
    case 100:
      return T(this, c2, st).call(this, e, s5, i4);
    default:
      return new O("received invalid response: " + n3.toString(16), s5, "error");
  }
}, nt = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).string(1);
  return new X(n3, i4);
}, rt = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).cstring();
  return new Z(n3, i4);
}, st = function(e, n3, s5) {
  let i4 = s5.slice(e, e + (n3 - 4));
  return new z(n3, new Uint8Array(i4));
}, it = function(e, n3, s5) {
  return T(this, c2, ke).call(this, e, n3, s5, "copyInResponse");
}, at = function(e, n3, s5) {
  return T(this, c2, ke).call(this, e, n3, s5, "copyOutResponse");
}, ke = function(e, n3, s5, i4) {
  h(this, o).setBuffer(e, s5);
  let a3 = h(this, o).byte() !== 0, u3 = h(this, o).int16(), m7 = new q(n3, i4, a3, u3);
  for (let p6 = 0; p6 < u3; p6++) m7.columnTypes[p6] = h(this, o).int16();
  return m7;
}, ot = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int32(), a3 = h(this, o).cstring(), u3 = h(this, o).cstring();
  return new $(n3, i4, a3, u3);
}, ut = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int16(), a3 = new j(n3, i4);
  for (let u3 = 0; u3 < i4; u3++) a3.fields[u3] = T(this, c2, ct).call(this);
  return a3;
}, ct = function() {
  let e = h(this, o).cstring(), n3 = h(this, o).int32(), s5 = h(this, o).int16(), i4 = h(this, o).int32(), a3 = h(this, o).int16(), u3 = h(this, o).int32(), m7 = h(this, o).int16() === 0 ? Pe.text : Pe.binary;
  return new Y(e, n3, s5, i4, a3, u3, m7);
}, lt = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).uint16(), a3 = new W(n3, i4);
  for (let u3 = 0; u3 < i4; u3++) a3.dataTypeIDs[u3] = h(this, o).int32();
  return a3;
}, pt = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int16(), a3 = new Array(i4);
  for (let u3 = 0; u3 < i4; u3++) {
    let m7 = h(this, o).int32();
    a3[u3] = m7 === -1 ? null : h(this, o).string(m7);
  }
  return new ee(n3, a3);
}, dt = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).cstring(), a3 = h(this, o).cstring();
  return new K(n3, i4, a3);
}, ft = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int32(), a3 = h(this, o).int32();
  return new J(n3, i4, a3);
}, mt = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int32();
  switch (i4) {
    case 0:
      return new F2(n3);
    case 3:
      return new G(n3);
    case 5:
      return new Q(n3, h(this, o).bytes(4));
    case 10: {
      let a3 = [];
      for (; ; ) {
        let u3 = h(this, o).cstring();
        if (u3.length === 0) return new _2(n3, a3);
        a3.push(u3);
      }
    }
    case 11:
      return new v(n3, h(this, o).string(n3 - 8));
    case 12:
      return new H(n3, h(this, o).string(n3 - 8));
    default:
      throw new Error("Unknown authenticationOk message type " + i4);
  }
}, Oe = function(e, n3, s5, i4) {
  h(this, o).setBuffer(e, s5);
  let a3 = {}, u3 = h(this, o).string(1);
  for (; u3 !== "\0"; ) a3[u3] = h(this, o).cstring(), u3 = h(this, o).string(1);
  let m7 = a3.M, p6 = i4 === "notice" ? new te(n3, m7) : new O(m7, n3, i4);
  return p6.severity = a3.S, p6.code = a3.C, p6.detail = a3.D, p6.hint = a3.H, p6.position = a3.P, p6.internalPosition = a3.p, p6.internalQuery = a3.q, p6.where = a3.W, p6.schema = a3.s, p6.table = a3.t, p6.column = a3.c, p6.dataType = a3.d, p6.constraint = a3.n, p6.file = a3.F, p6.line = a3.L, p6.routine = a3.R, p6;
};

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-ADHRU2LT.js
init_chunk_QY3QWFKW();
u();

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-F4GETNPB.js
init_chunk_QY3QWFKW();
u();
var o2 = { part: "part", container: "container" };
function s2(t7, r2, ...e) {
  let a3 = t7.length - 1, p6 = e.length - 1;
  if (p6 !== -1) {
    if (p6 === 0) {
      t7[a3] = t7[a3] + e[0] + r2;
      return;
    }
    t7[a3] = t7[a3] + e[0], t7.push(...e.slice(1, p6)), t7.push(e[p6] + r2);
  }
}
function y(t7, ...r2) {
  let e = [t7[0]];
  e.raw = [t7.raw[0]];
  let a3 = [];
  for (let p6 = 0; p6 < r2.length; p6++) {
    let n3 = r2[p6], i4 = p6 + 1;
    if (n3?._templateType === o2.part) {
      s2(e, t7[i4], n3.str), s2(e.raw, t7.raw[i4], n3.str);
      continue;
    }
    if (n3?._templateType === o2.container) {
      s2(e, t7[i4], ...n3.strings), s2(e.raw, t7.raw[i4], ...n3.strings.raw), a3.push(...n3.values);
      continue;
    }
    e.push(t7[i4]), e.raw.push(t7.raw[i4]), a3.push(n3);
  }
  return { _templateType: "container", strings: e, values: a3 };
}
function g3(t7, ...r2) {
  let { strings: e, values: a3 } = y(t7, ...r2);
  return { query: [e[0], ...a3.flatMap((p6, n3) => [`$${n3 + 1}`, e[n3 + 1]])].join(""), params: a3 };
}

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-INORSRB2.js
init_chunk_QY3QWFKW();
u();
u();
function E(h4) {
  let s5 = h4.e;
  return s5.query = h4.query, s5.params = h4.params, s5.queryOptions = h4.options, s5;
}
var P3;
var p2;
var t;
var y2;
var x3;
var m;
var _3;
var z2 = class {
  constructor() {
    R(this, t);
    this.serializers = { ...cn };
    this.parsers = { ...un };
    R(this, P3, false);
    R(this, p2, false);
  }
  async _initArrayTypes({ force: s5 = false } = {}) {
    if (h(this, P3) && !s5) return;
    x(this, P3, true);
    let e = await this.query(`
      SELECT b.oid, b.typarray
      FROM pg_catalog.pg_type a
      LEFT JOIN pg_catalog.pg_type b ON b.oid = a.typelem
      WHERE a.typcategory = 'A'
      GROUP BY b.oid, b.typarray
      ORDER BY b.oid
    `);
    for (let r2 of e.rows) this.serializers[r2.typarray] = (o6) => We(o6, this.serializers[r2.oid], r2.typarray), this.parsers[r2.typarray] = (o6) => mn(o6, this.parsers[r2.oid], r2.typarray);
  }
  async refreshArrayTypes() {
    await this._initArrayTypes({ force: true });
  }
  async query(s5, e, r2) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => await T(this, t, x3).call(this, s5, e, r2));
  }
  async sql(s5, ...e) {
    let { query: r2, params: o6 } = g3(s5, ...e);
    return await this.query(r2, o6);
  }
  async exec(s5, e) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => await T(this, t, m).call(this, s5, e));
  }
  async describeQuery(s5, e) {
    let r2 = [];
    try {
      await T(this, t, y2).call(this, $e.parse({ text: s5, types: e?.paramTypes }), e), r2 = await T(this, t, y2).call(this, $e.describe({ type: "S" }), e);
    } catch (n3) {
      throw n3 instanceof O ? E({ e: n3, options: e, params: void 0, query: s5 }) : n3;
    } finally {
      r2.push(...await T(this, t, y2).call(this, $e.sync(), e));
    }
    let o6 = r2.find((n3) => n3.name === "parameterDescription"), i4 = r2.find((n3) => n3.name === "rowDescription"), c3 = o6?.dataTypeIDs.map((n3) => ({ dataTypeID: n3, serializer: this.serializers[n3] })) ?? [], u3 = i4?.fields.map((n3) => ({ name: n3.name, dataTypeID: n3.dataTypeID, parser: this.parsers[n3.dataTypeID] })) ?? [];
    return { queryParams: c3, resultFields: u3 };
  }
  async transaction(s5) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => {
      await T(this, t, m).call(this, "BEGIN"), x(this, p2, true);
      let e = false, r2 = () => {
        if (e) throw new Error("Transaction is closed");
      }, o6 = { query: async (i4, c3, u3) => (r2(), await T(this, t, x3).call(this, i4, c3, u3)), sql: async (i4, ...c3) => {
        r2();
        let { query: u3, params: n3 } = g3(i4, ...c3);
        return await T(this, t, x3).call(this, u3, n3);
      }, exec: async (i4, c3) => (r2(), await T(this, t, m).call(this, i4, c3)), rollback: async () => {
        r2(), await T(this, t, m).call(this, "ROLLBACK"), e = true;
      }, listen: async (i4, c3) => (r2(), await this.listen(i4, c3, o6)), get closed() {
        return e;
      } };
      try {
        let i4 = await s5(o6);
        return e || (e = true, await T(this, t, m).call(this, "COMMIT")), x(this, p2, false), i4;
      } catch (i4) {
        throw e || (e = true, await T(this, t, m).call(this, "ROLLBACK")), x(this, p2, false), i4;
      }
    });
  }
  async runExclusive(s5) {
    return await this._runExclusiveQuery(s5);
  }
};
P3 = /* @__PURE__ */ new WeakMap(), p2 = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), y2 = async function(s5, e = {}) {
  return await this.execProtocolStream(s5, { ...e, syncToFs: false });
}, x3 = async function(s5, e = [], r2) {
  return await this._runExclusiveQuery(async () => {
    T(this, t, _3).call(this, "runQuery", s5, e, r2), await this._handleBlob(r2?.blob);
    let o6 = [];
    try {
      let c3 = await T(this, t, y2).call(this, $e.parse({ text: s5, types: r2?.paramTypes }), r2), u3 = bn(await T(this, t, y2).call(this, $e.describe({ type: "S" }), r2)), n3 = e.map((b4, k4) => {
        let D8 = u3[k4];
        if (b4 == null) return null;
        let v5 = r2?.serializers?.[D8] ?? this.serializers[D8];
        return v5 ? v5(b4) : b4.toString();
      });
      o6 = [...c3, ...await T(this, t, y2).call(this, $e.bind({ values: n3 }), r2), ...await T(this, t, y2).call(this, $e.describe({ type: "P" }), r2), ...await T(this, t, y2).call(this, $e.execute({}), r2)];
    } catch (c3) {
      throw c3 instanceof O ? E({ e: c3, options: r2, params: e, query: s5 }) : c3;
    } finally {
      o6.push(...await T(this, t, y2).call(this, $e.sync(), r2));
    }
    await this._cleanupBlob(), h(this, p2) || await this.syncToFs();
    let i4 = await this._getWrittenBlob();
    return hn(o6, this.parsers, r2, i4)[0];
  });
}, m = async function(s5, e) {
  return await this._runExclusiveQuery(async () => {
    T(this, t, _3).call(this, "runExec", s5, e), await this._handleBlob(e?.blob);
    let r2 = [];
    try {
      r2 = await T(this, t, y2).call(this, $e.query(s5), e);
    } catch (i4) {
      throw i4 instanceof O ? E({ e: i4, options: e, params: void 0, query: s5 }) : i4;
    } finally {
      r2.push(...await T(this, t, y2).call(this, $e.sync(), e));
    }
    this._cleanupBlob(), h(this, p2) || await this.syncToFs();
    let o6 = await this._getWrittenBlob();
    return hn(r2, this.parsers, e, o6);
  });
}, _3 = function(...s5) {
  this.debug > 0 && console.log(...s5);
};

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/chunk-66APQTYC.js
init_chunk_CE4NCHVO();
init_chunk_ZKGLEABV();
init_chunk_QY3QWFKW();
u();
var pt2 = new Error("timeout while waiting for mutex to become available");
var gt2 = new Error("mutex already locked");
var lt2 = new Error("request for lock canceled");
var ot2 = function(e, t7, r2, _4) {
  function n3(a3) {
    return a3 instanceof r2 ? a3 : new r2(function(i4) {
      i4(a3);
    });
  }
  return new (r2 || (r2 = Promise))(function(a3, i4) {
    function l3(c3) {
      try {
        s5(_4.next(c3));
      } catch (g6) {
        i4(g6);
      }
    }
    function o6(c3) {
      try {
        s5(_4.throw(c3));
      } catch (g6) {
        i4(g6);
      }
    }
    function s5(c3) {
      c3.done ? a3(c3.value) : n3(c3.value).then(l3, o6);
    }
    s5((_4 = _4.apply(e, t7 || [])).next());
  });
};
var Ie3 = class {
  constructor(t7, r2 = lt2) {
    this._value = t7, this._cancelError = r2, this._weightedQueues = [], this._weightedWaiters = [];
  }
  acquire(t7 = 1) {
    if (t7 <= 0) throw new Error(`invalid weight ${t7}: must be positive`);
    return new Promise((r2, _4) => {
      this._weightedQueues[t7 - 1] || (this._weightedQueues[t7 - 1] = []), this._weightedQueues[t7 - 1].push({ resolve: r2, reject: _4 }), this._dispatch();
    });
  }
  runExclusive(t7, r2 = 1) {
    return ot2(this, void 0, void 0, function* () {
      let [_4, n3] = yield this.acquire(r2);
      try {
        return yield t7(_4);
      } finally {
        n3();
      }
    });
  }
  waitForUnlock(t7 = 1) {
    if (t7 <= 0) throw new Error(`invalid weight ${t7}: must be positive`);
    return new Promise((r2) => {
      this._weightedWaiters[t7 - 1] || (this._weightedWaiters[t7 - 1] = []), this._weightedWaiters[t7 - 1].push(r2), this._dispatch();
    });
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(t7) {
    this._value = t7, this._dispatch();
  }
  release(t7 = 1) {
    if (t7 <= 0) throw new Error(`invalid weight ${t7}: must be positive`);
    this._value += t7, this._dispatch();
  }
  cancel() {
    this._weightedQueues.forEach((t7) => t7.forEach((r2) => r2.reject(this._cancelError))), this._weightedQueues = [];
  }
  _dispatch() {
    var t7;
    for (let r2 = this._value; r2 > 0; r2--) {
      let _4 = (t7 = this._weightedQueues[r2 - 1]) === null || t7 === void 0 ? void 0 : t7.shift();
      if (!_4) continue;
      let n3 = this._value, a3 = r2;
      this._value -= r2, r2 = this._value + 1, _4.resolve([n3, this._newReleaser(a3)]);
    }
    this._drainUnlockWaiters();
  }
  _newReleaser(t7) {
    let r2 = false;
    return () => {
      r2 || (r2 = true, this.release(t7));
    };
  }
  _drainUnlockWaiters() {
    for (let t7 = this._value; t7 > 0; t7--) this._weightedWaiters[t7 - 1] && (this._weightedWaiters[t7 - 1].forEach((r2) => r2()), this._weightedWaiters[t7 - 1] = []);
  }
};
var st2 = function(e, t7, r2, _4) {
  function n3(a3) {
    return a3 instanceof r2 ? a3 : new r2(function(i4) {
      i4(a3);
    });
  }
  return new (r2 || (r2 = Promise))(function(a3, i4) {
    function l3(c3) {
      try {
        s5(_4.next(c3));
      } catch (g6) {
        i4(g6);
      }
    }
    function o6(c3) {
      try {
        s5(_4.throw(c3));
      } catch (g6) {
        i4(g6);
      }
    }
    function s5(c3) {
      c3.done ? a3(c3.value) : n3(c3.value).then(l3, o6);
    }
    s5((_4 = _4.apply(e, t7 || [])).next());
  });
};
var Y2 = class {
  constructor(t7) {
    this._semaphore = new Ie3(1, t7);
  }
  acquire() {
    return st2(this, void 0, void 0, function* () {
      let [, t7] = yield this._semaphore.acquire();
      return t7;
    });
  }
  runExclusive(t7) {
    return this._semaphore.runExclusive(() => t7());
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock() {
    return this._semaphore.waitForUnlock();
  }
  release() {
    this._semaphore.isLocked() && this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
};
u();
var Pe2 = class extends je2 {
  async init(t7, r2) {
    return this.pg = t7, { emscriptenOpts: { ...r2, preRun: [...r2.preRun || [], (n3) => {
      let a3 = n3.FS.filesystems.IDBFS;
      n3.FS.mkdirTree(`${U3}/${this.dataDir}`), n3.FS.mount(a3, {}, `${U3}/${this.dataDir}`), n3.FS.symlink(`${U3}/${this.dataDir}`, x4);
    }] } };
  }
  initialSyncFs() {
    return new Promise((t7, r2) => {
      this.pg.Module.FS.syncfs(true, (_4) => {
        _4 ? r2(_4) : t7();
      });
    });
  }
  syncToFs(t7) {
    return new Promise((r2, _4) => {
      this.pg.Module.FS.syncfs(false, (n3) => {
        n3 ? _4(n3) : r2();
      });
    });
  }
  async closeFs() {
    let t7 = this.pg.Module.FS.filesystems.IDBFS.dbs[this.dataDir];
    t7 && t7.close(), this.pg.Module.FS.quit();
  }
};
u();
var ie2 = class extends je2 {
  async closeFs() {
    this.pg.Module.FS.quit();
  }
};
u();
u();
var je3 = L(Oe2(), 1);
async function Re3(e) {
  if (m2.IN_NODE) {
    let t7 = await import("fs"), r2 = await import("zlib"), { Writable: _4 } = await import("stream"), { pipeline: n3 } = await import("stream/promises");
    if (!t7.existsSync(e)) throw new Error(`Extension bundle not found: ${e}`);
    let a3 = r2.createGunzip(), i4 = [];
    return await n3(t7.createReadStream(e), a3, new _4({ write(l3, o6, s5) {
      i4.push(l3), s5();
    } })), new Blob(i4);
  } else {
    let t7 = await fetch(e.toString());
    if (!t7.ok || !t7.body) return null;
    if (t7.headers.get("Content-Encoding") === "gzip") return t7.blob();
    {
      let r2 = new DecompressionStream("gzip");
      return new Response(t7.body.pipeThrough(r2)).blob();
    }
  }
}
async function Ee2(e, t7) {
  let r2 = new Array();
  for (let _4 in e.pg_extensions) {
    let n3;
    try {
      n3 = await e.pg_extensions[_4];
    } catch (a3) {
      console.error("Failed to fetch extension:", _4, a3);
      continue;
    }
    if (n3) {
      let a3 = new Uint8Array(await n3.arrayBuffer());
      r2.push(...dt2(e, _4, a3, t7));
    } else console.error("Could not get binary data for extension:", _4);
  }
  return Promise.all(r2);
}
function dt2(e, t7, r2, _4) {
  let n3 = [];
  return je3.default.untar(r2).sort((i4, l3) => i4.name > l3.name ? 1 : i4.name < l3.name ? -1 : 0).forEach((i4) => {
    if (i4.name.endsWith("/")) {
      let l3 = `${e.WASM_PREFIX}/${i4.name}`;
      e.FS.analyzePath(l3).exists === false && e.FS.mkdirTree(l3);
    } else if (!i4.name.startsWith(".")) {
      let l3 = e.WASM_PREFIX + "/" + i4.name;
      if (i4.name.endsWith(".so")) {
        _4(`pgfs:ext preloading ${l3}`);
        let o6 = i4.name.split("/").pop(), s5 = ct2(l3), c3 = new Promise((g6, d5) => {
          let p6 = (...m7) => {
            _4("pgfs:ext OK", l3, m7), g6();
          }, u3 = (...m7) => {
            _4("pgfs:ext FAIL", l3, m7), fe(e.FS, l3, i4.data), g6();
          };
          e.FS.createPreloadedFile(s5, o6, i4.data, true, true, p6, u3, false);
        });
        n3.push(c3);
      } else fe(e.FS, l3, i4.data);
    }
  }), n3;
}
function fe(e, t7, r2, _4) {
  try {
    let n3 = t7.substring(0, t7.lastIndexOf("/"));
    e.analyzePath(n3).exists === false && e.mkdirTree(n3), e.writeFile(t7, r2), _4 && e.chmod(t7, _4);
  } catch (n3) {
    throw console.error(`Error writing file ${t7}`, n3), n3;
  }
}
function ct2(e) {
  let t7 = e.lastIndexOf("/");
  return t7 > 0 ? e.slice(0, t7) : e;
}
u();
function We2(e) {
  let t7;
  if (e?.startsWith("file://")) {
    if (e = e.slice(7), !e) throw new Error("Invalid dataDir, must be a valid path");
    t7 = "nodefs";
  } else e?.startsWith("idb://") ? (e = e.slice(6), t7 = "idbfs") : e?.startsWith("opfs-ahp://") ? (e = e.slice(11), t7 = "opfs-ahp") : e?.startsWith("memfs2opfs://") ? (e = e.slice(13), t7 = "memfs2opfs") : !e || e?.startsWith("memory://") ? t7 = "memoryfs" : t7 = "nodefs";
  return { dataDir: e, fsType: t7 };
}
async function Ve2(e, t7) {
  let r2;
  if (e && t7 === "nodefs") {
    let { NodeFS: _4 } = await Promise.resolve().then(() => (init_nodefs(), nodefs_exports));
    r2 = new _4(e);
  } else if (e && t7 === "idbfs") r2 = new Pe2(e);
  else if (e && t7 === "opfs-ahp") {
    let { OpfsAhpFS: _4 } = await Promise.resolve().then(() => (init_opfs_ahp(), opfs_ahp_exports));
    r2 = new _4(e);
  } else if (e && t7 === "memfs2opfs") {
    let { Memfs2OpfsFS: _4 } = await Promise.resolve().then(() => (init_memfs2opfs(), memfs2opfs_exports));
    r2 = new _4(e);
  } else r2 = new ie2();
  return r2;
}
u();
u();
async function ut2(moduleArg = {}) {
  var Module = moduleArg, ENVIRONMENT_IS_WEB = !!globalThis.window, ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope, ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
  if (ENVIRONMENT_IS_NODE) {
    let { createRequire: e } = await import("node:module");
    var require = e(import.meta.url);
  }
  Module.expectedDataFileDownloads || (Module.expectedDataFileDownloads = 0), Module.expectedDataFileDownloads++, (() => {
    var e = typeof ENVIRONMENT_IS_PTHREAD < "u" && ENVIRONMENT_IS_PTHREAD, t7 = typeof ENVIRONMENT_IS_WASM_WORKER < "u" && ENVIRONMENT_IS_WASM_WORKER;
    if (e || t7) return;
    var r2 = globalThis.process && globalThis.process.versions && globalThis.process.versions.node && globalThis.process.type != "renderer";
    async function _4(n3) {
      var a3 = "";
      typeof window == "object" ? a3 = window.encodeURIComponent(window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/") : typeof process > "u" && typeof location < "u" && (a3 = encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf("/")) + "/"));
      var i4 = "pglite.data", l3 = "pglite.data", o6 = Module.locateFile ? Module.locateFile(l3, "") : l3, s5 = n3.remote_package_size;
      async function c3(u3, m7) {
        if (r2) {
          var M2 = require("fs").readFileSync(u3);
          return new Uint8Array(M2).buffer;
        }
        Module.dataFileDownloads || (Module.dataFileDownloads = {});
        try {
          var S4 = await fetch(u3);
        } catch (L5) {
          throw new Error(`Network Error: ${u3}`, { e: L5 });
        }
        if (!S4.ok) throw new Error(`${S4.status}: ${S4.url}`);
        let v5 = [], F5 = S4.headers, b4 = Number(F5.get("Content-Length") || m7), A4 = 0;
        Module.setStatus && Module.setStatus("Downloading data...");
        let T5 = S4.body.getReader();
        for (; ; ) {
          var { done: V2, value: re } = await T5.read();
          if (V2) break;
          v5.push(re), A4 += re.length, Module.dataFileDownloads[u3] = { loaded: A4, total: b4 };
          let L5 = 0, R3 = 0;
          for (let H4 of Object.values(Module.dataFileDownloads)) L5 += H4.loaded, R3 += H4.total;
          Module.setStatus && Module.setStatus(`Downloading data... (${L5}/${R3})`);
        }
        let _e2 = new Uint8Array(v5.map((L5) => L5.length).reduce((L5, R3) => L5 + R3, 0)), ne = 0;
        for (let L5 of v5) _e2.set(L5, ne), ne += L5.length;
        return _e2.buffer;
      }
      var g6, d5 = Module.getPreloadedPackage && Module.getPreloadedPackage(o6, s5);
      d5 || (g6 = c3(o6, s5));
      async function p6(u3) {
        function m7(S4, v5) {
          if (!S4) throw new Error(v5);
        }
        u3.FS_createPath("/", "home", true, true), u3.FS_createPath("/home", "postgres", true, true), u3.FS_createPath("/", "pglite", true, true), u3.FS_createPath("/pglite", "bin", true, true), u3.FS_createPath("/pglite", "icu", true, true), u3.FS_createPath("/pglite/icu", "icudt76l", true, true), u3.FS_createPath("/pglite/icu/icudt76l", "coll", true, true), u3.FS_createPath("/pglite", "lib", true, true), u3.FS_createPath("/pglite/lib", "postgresql", true, true), u3.FS_createPath("/pglite/lib/postgresql", "pgxs", true, true), u3.FS_createPath("/pglite/lib/postgresql/pgxs", "config", true, true), u3.FS_createPath("/pglite/lib/postgresql/pgxs", "src", true, true), u3.FS_createPath("/pglite/lib/postgresql/pgxs/src", "makefiles", true, true), u3.FS_createPath("/pglite/lib/postgresql/pgxs/src", "test", true, true), u3.FS_createPath("/pglite/lib/postgresql/pgxs/src/test", "isolation", true, true), u3.FS_createPath("/pglite/lib/postgresql/pgxs/src/test", "regress", true, true), u3.FS_createPath("/pglite", "share", true, true), u3.FS_createPath("/pglite/share", "postgresql", true, true), u3.FS_createPath("/pglite/share/postgresql", "extension", true, true), u3.FS_createPath("/pglite/share/postgresql", "timezone", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Africa", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "America", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone/America", "Argentina", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone/America", "Indiana", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone/America", "Kentucky", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone/America", "North_Dakota", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Antarctica", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Arctic", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Asia", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Atlantic", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Australia", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Brazil", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Canada", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Chile", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Etc", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Europe", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Indian", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Mexico", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "Pacific", true, true), u3.FS_createPath("/pglite/share/postgresql/timezone", "US", true, true), u3.FS_createPath("/pglite/share/postgresql", "timezonesets", true, true), u3.FS_createPath("/pglite/share/postgresql", "tsearch_data", true, true);
        async function M2(S4) {
          m7(S4, "Loading data file failed."), m7(S4.constructor.name === ArrayBuffer.name, "bad input to processPackageData " + S4.constructor.name);
          var v5 = new Uint8Array(S4);
          for (var F5 of n3.files) {
            var b4 = F5.filename, A4 = v5.subarray(F5.start, F5.end);
            u3.FS_createDataFile(b4, null, A4, true, true, true);
          }
          u3.removeRunDependency("datafile_pglite.data");
        }
        u3.addRunDependency("datafile_pglite.data"), u3.preloadResults || (u3.preloadResults = {}), u3.preloadResults[i4] = { fromCache: false }, d5 || (d5 = await g6), await M2(d5);
      }
      Module.FS_createPath ? p6(Module) : (Module.preRun || (Module.preRun = []), Module.preRun.push(p6));
    }
    _4({ files: [{ filename: "/home/postgres/.pgpass", start: 0, end: 204 }, { filename: "/pglite/bin/initdb", start: 204, end: 223 }, { filename: "/pglite/bin/pg_dump", start: 223, end: 242 }, { filename: "/pglite/bin/postgres", start: 242, end: 261 }, { filename: "/pglite/icu/LICENSE", start: 261, end: 26748 }, { filename: "/pglite/icu/icudt76l/coll/root.res", start: 26748, end: 365756 }, { filename: "/pglite/icu/icudt76l/coll/ucadata.icu", start: 365756, end: 943260 }, { filename: "/pglite/lib/postgresql/cyrillic_and_mic.so", start: 943260, end: 947841 }, { filename: "/pglite/lib/postgresql/dict_snowball.so", start: 947841, end: 1530922 }, { filename: "/pglite/lib/postgresql/euc2004_sjis2004.so", start: 1530922, end: 1533041 }, { filename: "/pglite/lib/postgresql/euc_cn_and_mic.so", start: 1533041, end: 1534055 }, { filename: "/pglite/lib/postgresql/euc_jp_and_sjis.so", start: 1534055, end: 1541518 }, { filename: "/pglite/lib/postgresql/euc_kr_and_mic.so", start: 1541518, end: 1542552 }, { filename: "/pglite/lib/postgresql/euc_tw_and_big5.so", start: 1542552, end: 1547195 }, { filename: "/pglite/lib/postgresql/latin2_and_win1250.so", start: 1547195, end: 1548685 }, { filename: "/pglite/lib/postgresql/latin_and_mic.so", start: 1548685, end: 1549785 }, { filename: "/pglite/lib/postgresql/libpqwalreceiver.so", start: 1549785, end: 1688340 }, { filename: "/pglite/lib/postgresql/pgoutput.so", start: 1688340, end: 1702415 }, { filename: "/pglite/lib/postgresql/pgxs/config/install-sh", start: 1702415, end: 1716412 }, { filename: "/pglite/lib/postgresql/pgxs/config/missing", start: 1716412, end: 1717760 }, { filename: "/pglite/lib/postgresql/pgxs/src/Makefile.global", start: 1717760, end: 1755848 }, { filename: "/pglite/lib/postgresql/pgxs/src/Makefile.port", start: 1755848, end: 1757040 }, { filename: "/pglite/lib/postgresql/pgxs/src/Makefile.shlib", start: 1757040, end: 1771868 }, { filename: "/pglite/lib/postgresql/pgxs/src/makefiles/pgxs.mk", start: 1771868, end: 1788015 }, { filename: "/pglite/lib/postgresql/pgxs/src/nls-global.mk", start: 1788015, end: 1795079 }, { filename: "/pglite/lib/postgresql/pgxs/src/test/isolation/isolationtester.js", start: 1795079, end: 1895307 }, { filename: "/pglite/lib/postgresql/pgxs/src/test/isolation/pg_isolation_regress.js", start: 1895307, end: 1999365 }, { filename: "/pglite/lib/postgresql/pgxs/src/test/regress/pg_regress.js", start: 1999365, end: 2102846 }, { filename: "/pglite/lib/postgresql/plpgsql.so", start: 2102846, end: 2258735 }, { filename: "/pglite/lib/postgresql/utf8_and_big5.so", start: 2258735, end: 2373550 }, { filename: "/pglite/lib/postgresql/utf8_and_cyrillic.so", start: 2373550, end: 2379586 }, { filename: "/pglite/lib/postgresql/utf8_and_euc2004.so", start: 2379586, end: 2584585 }, { filename: "/pglite/lib/postgresql/utf8_and_euc_cn.so", start: 2584585, end: 2659832 }, { filename: "/pglite/lib/postgresql/utf8_and_euc_jp.so", start: 2659832, end: 2811127 }, { filename: "/pglite/lib/postgresql/utf8_and_euc_kr.so", start: 2811127, end: 2914050 }, { filename: "/pglite/lib/postgresql/utf8_and_euc_tw.so", start: 2914050, end: 3113673 }, { filename: "/pglite/lib/postgresql/utf8_and_gb18030.so", start: 3113673, end: 3376057 }, { filename: "/pglite/lib/postgresql/utf8_and_gbk.so", start: 3376057, end: 3522656 }, { filename: "/pglite/lib/postgresql/utf8_and_iso8859.so", start: 3522656, end: 3546123 }, { filename: "/pglite/lib/postgresql/utf8_and_iso8859_1.so", start: 3546123, end: 3547181 }, { filename: "/pglite/lib/postgresql/utf8_and_johab.so", start: 3547181, end: 3708952 }, { filename: "/pglite/lib/postgresql/utf8_and_sjis.so", start: 3708952, end: 3790679 }, { filename: "/pglite/lib/postgresql/utf8_and_sjis2004.so", start: 3790679, end: 3917378 }, { filename: "/pglite/lib/postgresql/utf8_and_uhc.so", start: 3917378, end: 4084717 }, { filename: "/pglite/lib/postgresql/utf8_and_win.so", start: 4084717, end: 4111145 }, { filename: "/pglite/locale-a", start: 4111145, end: 4111170 }, { filename: "/pglite/password", start: 4111170, end: 4111178 }, { filename: "/pglite/pgstdin", start: 4111178, end: 4111197 }, { filename: "/pglite/pgstdout", start: 4111197, end: 4111216 }, { filename: "/pglite/share/postgresql/errcodes.txt", start: 4111216, end: 4144955 }, { filename: "/pglite/share/postgresql/extension/plpgsql--1.0.sql", start: 4144955, end: 4145613 }, { filename: "/pglite/share/postgresql/extension/plpgsql.control", start: 4145613, end: 4145806 }, { filename: "/pglite/share/postgresql/information_schema.sql", start: 4145806, end: 4259803 }, { filename: "/pglite/share/postgresql/pg_hba.conf.sample", start: 4259803, end: 4265438 }, { filename: "/pglite/share/postgresql/pg_ident.conf.sample", start: 4265438, end: 4268119 }, { filename: "/pglite/share/postgresql/pg_service.conf.sample", start: 4268119, end: 4268723 }, { filename: "/pglite/share/postgresql/postgres.bki", start: 4268723, end: 5242492 }, { filename: "/pglite/share/postgresql/postgresql.conf.sample", start: 5242492, end: 5275144 }, { filename: "/pglite/share/postgresql/psqlrc.sample", start: 5275144, end: 5275422 }, { filename: "/pglite/share/postgresql/snowball_create.sql", start: 5275422, end: 5321132 }, { filename: "/pglite/share/postgresql/sql_features.txt", start: 5321132, end: 5356893 }, { filename: "/pglite/share/postgresql/system_constraints.sql", start: 5356893, end: 5365788 }, { filename: "/pglite/share/postgresql/system_functions.sql", start: 5365788, end: 5390667 }, { filename: "/pglite/share/postgresql/system_views.sql", start: 5390667, end: 5444031 }, { filename: "/pglite/share/postgresql/timezone/Africa/Abidjan", start: 5444031, end: 5444179 }, { filename: "/pglite/share/postgresql/timezone/Africa/Accra", start: 5444179, end: 5444327 }, { filename: "/pglite/share/postgresql/timezone/Africa/Addis_Ababa", start: 5444327, end: 5444592 }, { filename: "/pglite/share/postgresql/timezone/Africa/Algiers", start: 5444592, end: 5445327 }, { filename: "/pglite/share/postgresql/timezone/Africa/Asmara", start: 5445327, end: 5445592 }, { filename: "/pglite/share/postgresql/timezone/Africa/Asmera", start: 5445592, end: 5445857 }, { filename: "/pglite/share/postgresql/timezone/Africa/Bamako", start: 5445857, end: 5446005 }, { filename: "/pglite/share/postgresql/timezone/Africa/Bangui", start: 5446005, end: 5446240 }, { filename: "/pglite/share/postgresql/timezone/Africa/Banjul", start: 5446240, end: 5446388 }, { filename: "/pglite/share/postgresql/timezone/Africa/Bissau", start: 5446388, end: 5446582 }, { filename: "/pglite/share/postgresql/timezone/Africa/Blantyre", start: 5446582, end: 5446731 }, { filename: "/pglite/share/postgresql/timezone/Africa/Brazzaville", start: 5446731, end: 5446966 }, { filename: "/pglite/share/postgresql/timezone/Africa/Bujumbura", start: 5446966, end: 5447115 }, { filename: "/pglite/share/postgresql/timezone/Africa/Cairo", start: 5447115, end: 5449514 }, { filename: "/pglite/share/postgresql/timezone/Africa/Casablanca", start: 5449514, end: 5450728 }, { filename: "/pglite/share/postgresql/timezone/Africa/Ceuta", start: 5450728, end: 5452780 }, { filename: "/pglite/share/postgresql/timezone/Africa/Conakry", start: 5452780, end: 5452928 }, { filename: "/pglite/share/postgresql/timezone/Africa/Dakar", start: 5452928, end: 5453076 }, { filename: "/pglite/share/postgresql/timezone/Africa/Dar_es_Salaam", start: 5453076, end: 5453341 }, { filename: "/pglite/share/postgresql/timezone/Africa/Djibouti", start: 5453341, end: 5453606 }, { filename: "/pglite/share/postgresql/timezone/Africa/Douala", start: 5453606, end: 5453841 }, { filename: "/pglite/share/postgresql/timezone/Africa/El_Aaiun", start: 5453841, end: 5454921 }, { filename: "/pglite/share/postgresql/timezone/Africa/Freetown", start: 5454921, end: 5455069 }, { filename: "/pglite/share/postgresql/timezone/Africa/Gaborone", start: 5455069, end: 5455218 }, { filename: "/pglite/share/postgresql/timezone/Africa/Harare", start: 5455218, end: 5455367 }, { filename: "/pglite/share/postgresql/timezone/Africa/Johannesburg", start: 5455367, end: 5455613 }, { filename: "/pglite/share/postgresql/timezone/Africa/Juba", start: 5455613, end: 5456292 }, { filename: "/pglite/share/postgresql/timezone/Africa/Kampala", start: 5456292, end: 5456557 }, { filename: "/pglite/share/postgresql/timezone/Africa/Khartoum", start: 5456557, end: 5457236 }, { filename: "/pglite/share/postgresql/timezone/Africa/Kigali", start: 5457236, end: 5457385 }, { filename: "/pglite/share/postgresql/timezone/Africa/Kinshasa", start: 5457385, end: 5457620 }, { filename: "/pglite/share/postgresql/timezone/Africa/Lagos", start: 5457620, end: 5457855 }, { filename: "/pglite/share/postgresql/timezone/Africa/Libreville", start: 5457855, end: 5458090 }, { filename: "/pglite/share/postgresql/timezone/Africa/Lome", start: 5458090, end: 5458238 }, { filename: "/pglite/share/postgresql/timezone/Africa/Luanda", start: 5458238, end: 5458473 }, { filename: "/pglite/share/postgresql/timezone/Africa/Lubumbashi", start: 5458473, end: 5458622 }, { filename: "/pglite/share/postgresql/timezone/Africa/Lusaka", start: 5458622, end: 5458771 }, { filename: "/pglite/share/postgresql/timezone/Africa/Malabo", start: 5458771, end: 5459006 }, { filename: "/pglite/share/postgresql/timezone/Africa/Maputo", start: 5459006, end: 5459155 }, { filename: "/pglite/share/postgresql/timezone/Africa/Maseru", start: 5459155, end: 5459401 }, { filename: "/pglite/share/postgresql/timezone/Africa/Mbabane", start: 5459401, end: 5459647 }, { filename: "/pglite/share/postgresql/timezone/Africa/Mogadishu", start: 5459647, end: 5459912 }, { filename: "/pglite/share/postgresql/timezone/Africa/Monrovia", start: 5459912, end: 5460120 }, { filename: "/pglite/share/postgresql/timezone/Africa/Nairobi", start: 5460120, end: 5460385 }, { filename: "/pglite/share/postgresql/timezone/Africa/Ndjamena", start: 5460385, end: 5460584 }, { filename: "/pglite/share/postgresql/timezone/Africa/Niamey", start: 5460584, end: 5460819 }, { filename: "/pglite/share/postgresql/timezone/Africa/Nouakchott", start: 5460819, end: 5460967 }, { filename: "/pglite/share/postgresql/timezone/Africa/Ouagadougou", start: 5460967, end: 5461115 }, { filename: "/pglite/share/postgresql/timezone/Africa/Porto-Novo", start: 5461115, end: 5461350 }, { filename: "/pglite/share/postgresql/timezone/Africa/Sao_Tome", start: 5461350, end: 5461604 }, { filename: "/pglite/share/postgresql/timezone/Africa/Timbuktu", start: 5461604, end: 5461752 }, { filename: "/pglite/share/postgresql/timezone/Africa/Tripoli", start: 5461752, end: 5462377 }, { filename: "/pglite/share/postgresql/timezone/Africa/Tunis", start: 5462377, end: 5463066 }, { filename: "/pglite/share/postgresql/timezone/Africa/Windhoek", start: 5463066, end: 5464021 }, { filename: "/pglite/share/postgresql/timezone/America/Adak", start: 5464021, end: 5466377 }, { filename: "/pglite/share/postgresql/timezone/America/Anchorage", start: 5466377, end: 5468748 }, { filename: "/pglite/share/postgresql/timezone/America/Anguilla", start: 5468748, end: 5468994 }, { filename: "/pglite/share/postgresql/timezone/America/Antigua", start: 5468994, end: 5469240 }, { filename: "/pglite/share/postgresql/timezone/America/Araguaina", start: 5469240, end: 5470124 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Buenos_Aires", start: 5470124, end: 5471200 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Catamarca", start: 5471200, end: 5472276 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/ComodRivadavia", start: 5472276, end: 5473352 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Cordoba", start: 5473352, end: 5474428 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Jujuy", start: 5474428, end: 5475476 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/La_Rioja", start: 5475476, end: 5476566 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Mendoza", start: 5476566, end: 5477642 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Rio_Gallegos", start: 5477642, end: 5478718 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Salta", start: 5478718, end: 5479766 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/San_Juan", start: 5479766, end: 5480856 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/San_Luis", start: 5480856, end: 5481958 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Tucuman", start: 5481958, end: 5483062 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Ushuaia", start: 5483062, end: 5484138 }, { filename: "/pglite/share/postgresql/timezone/America/Aruba", start: 5484138, end: 5484384 }, { filename: "/pglite/share/postgresql/timezone/America/Asuncion", start: 5484384, end: 5486042 }, { filename: "/pglite/share/postgresql/timezone/America/Atikokan", start: 5486042, end: 5486224 }, { filename: "/pglite/share/postgresql/timezone/America/Atka", start: 5486224, end: 5488580 }, { filename: "/pglite/share/postgresql/timezone/America/Bahia", start: 5488580, end: 5489604 }, { filename: "/pglite/share/postgresql/timezone/America/Bahia_Banderas", start: 5489604, end: 5490704 }, { filename: "/pglite/share/postgresql/timezone/America/Barbados", start: 5490704, end: 5491140 }, { filename: "/pglite/share/postgresql/timezone/America/Belem", start: 5491140, end: 5491716 }, { filename: "/pglite/share/postgresql/timezone/America/Belize", start: 5491716, end: 5493330 }, { filename: "/pglite/share/postgresql/timezone/America/Blanc-Sablon", start: 5493330, end: 5493576 }, { filename: "/pglite/share/postgresql/timezone/America/Boa_Vista", start: 5493576, end: 5494208 }, { filename: "/pglite/share/postgresql/timezone/America/Bogota", start: 5494208, end: 5494454 }, { filename: "/pglite/share/postgresql/timezone/America/Boise", start: 5494454, end: 5496864 }, { filename: "/pglite/share/postgresql/timezone/America/Buenos_Aires", start: 5496864, end: 5497940 }, { filename: "/pglite/share/postgresql/timezone/America/Cambridge_Bay", start: 5497940, end: 5500194 }, { filename: "/pglite/share/postgresql/timezone/America/Campo_Grande", start: 5500194, end: 5501638 }, { filename: "/pglite/share/postgresql/timezone/America/Cancun", start: 5501638, end: 5502502 }, { filename: "/pglite/share/postgresql/timezone/America/Caracas", start: 5502502, end: 5502766 }, { filename: "/pglite/share/postgresql/timezone/America/Catamarca", start: 5502766, end: 5503842 }, { filename: "/pglite/share/postgresql/timezone/America/Cayenne", start: 5503842, end: 5504040 }, { filename: "/pglite/share/postgresql/timezone/America/Cayman", start: 5504040, end: 5504222 }, { filename: "/pglite/share/postgresql/timezone/America/Chicago", start: 5504222, end: 5507814 }, { filename: "/pglite/share/postgresql/timezone/America/Chihuahua", start: 5507814, end: 5508916 }, { filename: "/pglite/share/postgresql/timezone/America/Ciudad_Juarez", start: 5508916, end: 5510454 }, { filename: "/pglite/share/postgresql/timezone/America/Coral_Harbour", start: 5510454, end: 5510636 }, { filename: "/pglite/share/postgresql/timezone/America/Cordoba", start: 5510636, end: 5511712 }, { filename: "/pglite/share/postgresql/timezone/America/Costa_Rica", start: 5511712, end: 5512028 }, { filename: "/pglite/share/postgresql/timezone/America/Coyhaique", start: 5512028, end: 5514168 }, { filename: "/pglite/share/postgresql/timezone/America/Creston", start: 5514168, end: 5514528 }, { filename: "/pglite/share/postgresql/timezone/America/Cuiaba", start: 5514528, end: 5515944 }, { filename: "/pglite/share/postgresql/timezone/America/Curacao", start: 5515944, end: 5516190 }, { filename: "/pglite/share/postgresql/timezone/America/Danmarkshavn", start: 5516190, end: 5516888 }, { filename: "/pglite/share/postgresql/timezone/America/Dawson", start: 5516888, end: 5518502 }, { filename: "/pglite/share/postgresql/timezone/America/Dawson_Creek", start: 5518502, end: 5519552 }, { filename: "/pglite/share/postgresql/timezone/America/Denver", start: 5519552, end: 5522012 }, { filename: "/pglite/share/postgresql/timezone/America/Detroit", start: 5522012, end: 5524242 }, { filename: "/pglite/share/postgresql/timezone/America/Dominica", start: 5524242, end: 5524488 }, { filename: "/pglite/share/postgresql/timezone/America/Edmonton", start: 5524488, end: 5526518 }, { filename: "/pglite/share/postgresql/timezone/America/Eirunepe", start: 5526518, end: 5527174 }, { filename: "/pglite/share/postgresql/timezone/America/El_Salvador", start: 5527174, end: 5527398 }, { filename: "/pglite/share/postgresql/timezone/America/Ensenada", start: 5527398, end: 5530304 }, { filename: "/pglite/share/postgresql/timezone/America/Fort_Nelson", start: 5530304, end: 5532544 }, { filename: "/pglite/share/postgresql/timezone/America/Fort_Wayne", start: 5532544, end: 5534226 }, { filename: "/pglite/share/postgresql/timezone/America/Fortaleza", start: 5534226, end: 5534942 }, { filename: "/pglite/share/postgresql/timezone/America/Glace_Bay", start: 5534942, end: 5537134 }, { filename: "/pglite/share/postgresql/timezone/America/Godthab", start: 5537134, end: 5539037 }, { filename: "/pglite/share/postgresql/timezone/America/Goose_Bay", start: 5539037, end: 5542247 }, { filename: "/pglite/share/postgresql/timezone/America/Grand_Turk", start: 5542247, end: 5544081 }, { filename: "/pglite/share/postgresql/timezone/America/Grenada", start: 5544081, end: 5544327 }, { filename: "/pglite/share/postgresql/timezone/America/Guadeloupe", start: 5544327, end: 5544573 }, { filename: "/pglite/share/postgresql/timezone/America/Guatemala", start: 5544573, end: 5544853 }, { filename: "/pglite/share/postgresql/timezone/America/Guayaquil", start: 5544853, end: 5545099 }, { filename: "/pglite/share/postgresql/timezone/America/Guyana", start: 5545099, end: 5545361 }, { filename: "/pglite/share/postgresql/timezone/America/Halifax", start: 5545361, end: 5548785 }, { filename: "/pglite/share/postgresql/timezone/America/Havana", start: 5548785, end: 5551201 }, { filename: "/pglite/share/postgresql/timezone/America/Hermosillo", start: 5551201, end: 5551589 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Indianapolis", start: 5551589, end: 5553271 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Knox", start: 5553271, end: 5555715 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Marengo", start: 5555715, end: 5557453 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Petersburg", start: 5557453, end: 5559373 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Tell_City", start: 5559373, end: 5561073 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Vevay", start: 5561073, end: 5562503 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Vincennes", start: 5562503, end: 5564213 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Winamac", start: 5564213, end: 5566007 }, { filename: "/pglite/share/postgresql/timezone/America/Indianapolis", start: 5566007, end: 5567689 }, { filename: "/pglite/share/postgresql/timezone/America/Inuvik", start: 5567689, end: 5569763 }, { filename: "/pglite/share/postgresql/timezone/America/Iqaluit", start: 5569763, end: 5571965 }, { filename: "/pglite/share/postgresql/timezone/America/Jamaica", start: 5571965, end: 5572447 }, { filename: "/pglite/share/postgresql/timezone/America/Jujuy", start: 5572447, end: 5573495 }, { filename: "/pglite/share/postgresql/timezone/America/Juneau", start: 5573495, end: 5575848 }, { filename: "/pglite/share/postgresql/timezone/America/Kentucky/Louisville", start: 5575848, end: 5578636 }, { filename: "/pglite/share/postgresql/timezone/America/Kentucky/Monticello", start: 5578636, end: 5581004 }, { filename: "/pglite/share/postgresql/timezone/America/Knox_IN", start: 5581004, end: 5583448 }, { filename: "/pglite/share/postgresql/timezone/America/Kralendijk", start: 5583448, end: 5583694 }, { filename: "/pglite/share/postgresql/timezone/America/La_Paz", start: 5583694, end: 5583926 }, { filename: "/pglite/share/postgresql/timezone/America/Lima", start: 5583926, end: 5584332 }, { filename: "/pglite/share/postgresql/timezone/America/Los_Angeles", start: 5584332, end: 5587184 }, { filename: "/pglite/share/postgresql/timezone/America/Louisville", start: 5587184, end: 5589972 }, { filename: "/pglite/share/postgresql/timezone/America/Lower_Princes", start: 5589972, end: 5590218 }, { filename: "/pglite/share/postgresql/timezone/America/Maceio", start: 5590218, end: 5590962 }, { filename: "/pglite/share/postgresql/timezone/America/Managua", start: 5590962, end: 5591392 }, { filename: "/pglite/share/postgresql/timezone/America/Manaus", start: 5591392, end: 5591996 }, { filename: "/pglite/share/postgresql/timezone/America/Marigot", start: 5591996, end: 5592242 }, { filename: "/pglite/share/postgresql/timezone/America/Martinique", start: 5592242, end: 5592474 }, { filename: "/pglite/share/postgresql/timezone/America/Matamoros", start: 5592474, end: 5593892 }, { filename: "/pglite/share/postgresql/timezone/America/Mazatlan", start: 5593892, end: 5594952 }, { filename: "/pglite/share/postgresql/timezone/America/Mendoza", start: 5594952, end: 5596028 }, { filename: "/pglite/share/postgresql/timezone/America/Menominee", start: 5596028, end: 5598302 }, { filename: "/pglite/share/postgresql/timezone/America/Merida", start: 5598302, end: 5599306 }, { filename: "/pglite/share/postgresql/timezone/America/Metlakatla", start: 5599306, end: 5600729 }, { filename: "/pglite/share/postgresql/timezone/America/Mexico_City", start: 5600729, end: 5601951 }, { filename: "/pglite/share/postgresql/timezone/America/Miquelon", start: 5601951, end: 5603617 }, { filename: "/pglite/share/postgresql/timezone/America/Moncton", start: 5603617, end: 5606771 }, { filename: "/pglite/share/postgresql/timezone/America/Monterrey", start: 5606771, end: 5607885 }, { filename: "/pglite/share/postgresql/timezone/America/Montevideo", start: 5607885, end: 5609395 }, { filename: "/pglite/share/postgresql/timezone/America/Montreal", start: 5609395, end: 5612889 }, { filename: "/pglite/share/postgresql/timezone/America/Montserrat", start: 5612889, end: 5613135 }, { filename: "/pglite/share/postgresql/timezone/America/Nassau", start: 5613135, end: 5616629 }, { filename: "/pglite/share/postgresql/timezone/America/New_York", start: 5616629, end: 5620181 }, { filename: "/pglite/share/postgresql/timezone/America/Nipigon", start: 5620181, end: 5623675 }, { filename: "/pglite/share/postgresql/timezone/America/Nome", start: 5623675, end: 5626042 }, { filename: "/pglite/share/postgresql/timezone/America/Noronha", start: 5626042, end: 5626758 }, { filename: "/pglite/share/postgresql/timezone/America/North_Dakota/Beulah", start: 5626758, end: 5629154 }, { filename: "/pglite/share/postgresql/timezone/America/North_Dakota/Center", start: 5629154, end: 5631550 }, { filename: "/pglite/share/postgresql/timezone/America/North_Dakota/New_Salem", start: 5631550, end: 5633946 }, { filename: "/pglite/share/postgresql/timezone/America/Nuuk", start: 5633946, end: 5635849 }, { filename: "/pglite/share/postgresql/timezone/America/Ojinaga", start: 5635849, end: 5637373 }, { filename: "/pglite/share/postgresql/timezone/America/Panama", start: 5637373, end: 5637555 }, { filename: "/pglite/share/postgresql/timezone/America/Pangnirtung", start: 5637555, end: 5639757 }, { filename: "/pglite/share/postgresql/timezone/America/Paramaribo", start: 5639757, end: 5640019 }, { filename: "/pglite/share/postgresql/timezone/America/Phoenix", start: 5640019, end: 5640379 }, { filename: "/pglite/share/postgresql/timezone/America/Port-au-Prince", start: 5640379, end: 5641813 }, { filename: "/pglite/share/postgresql/timezone/America/Port_of_Spain", start: 5641813, end: 5642059 }, { filename: "/pglite/share/postgresql/timezone/America/Porto_Acre", start: 5642059, end: 5642687 }, { filename: "/pglite/share/postgresql/timezone/America/Porto_Velho", start: 5642687, end: 5643263 }, { filename: "/pglite/share/postgresql/timezone/America/Puerto_Rico", start: 5643263, end: 5643509 }, { filename: "/pglite/share/postgresql/timezone/America/Punta_Arenas", start: 5643509, end: 5645425 }, { filename: "/pglite/share/postgresql/timezone/America/Rainy_River", start: 5645425, end: 5648293 }, { filename: "/pglite/share/postgresql/timezone/America/Rankin_Inlet", start: 5648293, end: 5650359 }, { filename: "/pglite/share/postgresql/timezone/America/Recife", start: 5650359, end: 5651075 }, { filename: "/pglite/share/postgresql/timezone/America/Regina", start: 5651075, end: 5652055 }, { filename: "/pglite/share/postgresql/timezone/America/Resolute", start: 5652055, end: 5654121 }, { filename: "/pglite/share/postgresql/timezone/America/Rio_Branco", start: 5654121, end: 5654749 }, { filename: "/pglite/share/postgresql/timezone/America/Rosario", start: 5654749, end: 5655825 }, { filename: "/pglite/share/postgresql/timezone/America/Santa_Isabel", start: 5655825, end: 5658731 }, { filename: "/pglite/share/postgresql/timezone/America/Santarem", start: 5658731, end: 5659333 }, { filename: "/pglite/share/postgresql/timezone/America/Santiago", start: 5659333, end: 5661862 }, { filename: "/pglite/share/postgresql/timezone/America/Santo_Domingo", start: 5661862, end: 5662320 }, { filename: "/pglite/share/postgresql/timezone/America/Sao_Paulo", start: 5662320, end: 5663764 }, { filename: "/pglite/share/postgresql/timezone/America/Scoresbysund", start: 5663764, end: 5665713 }, { filename: "/pglite/share/postgresql/timezone/America/Shiprock", start: 5665713, end: 5668173 }, { filename: "/pglite/share/postgresql/timezone/America/Sitka", start: 5668173, end: 5670502 }, { filename: "/pglite/share/postgresql/timezone/America/St_Barthelemy", start: 5670502, end: 5670748 }, { filename: "/pglite/share/postgresql/timezone/America/St_Johns", start: 5670748, end: 5674403 }, { filename: "/pglite/share/postgresql/timezone/America/St_Kitts", start: 5674403, end: 5674649 }, { filename: "/pglite/share/postgresql/timezone/America/St_Lucia", start: 5674649, end: 5674895 }, { filename: "/pglite/share/postgresql/timezone/America/St_Thomas", start: 5674895, end: 5675141 }, { filename: "/pglite/share/postgresql/timezone/America/St_Vincent", start: 5675141, end: 5675387 }, { filename: "/pglite/share/postgresql/timezone/America/Swift_Current", start: 5675387, end: 5675947 }, { filename: "/pglite/share/postgresql/timezone/America/Tegucigalpa", start: 5675947, end: 5676199 }, { filename: "/pglite/share/postgresql/timezone/America/Thule", start: 5676199, end: 5677701 }, { filename: "/pglite/share/postgresql/timezone/America/Thunder_Bay", start: 5677701, end: 5681195 }, { filename: "/pglite/share/postgresql/timezone/America/Tijuana", start: 5681195, end: 5684101 }, { filename: "/pglite/share/postgresql/timezone/America/Toronto", start: 5684101, end: 5687595 }, { filename: "/pglite/share/postgresql/timezone/America/Tortola", start: 5687595, end: 5687841 }, { filename: "/pglite/share/postgresql/timezone/America/Vancouver", start: 5687841, end: 5690431 }, { filename: "/pglite/share/postgresql/timezone/America/Virgin", start: 5690431, end: 5690677 }, { filename: "/pglite/share/postgresql/timezone/America/Whitehorse", start: 5690677, end: 5692291 }, { filename: "/pglite/share/postgresql/timezone/America/Winnipeg", start: 5692291, end: 5695159 }, { filename: "/pglite/share/postgresql/timezone/America/Yakutat", start: 5695159, end: 5697464 }, { filename: "/pglite/share/postgresql/timezone/America/Yellowknife", start: 5697464, end: 5699494 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Casey", start: 5699494, end: 5699931 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Davis", start: 5699931, end: 5700228 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/DumontDUrville", start: 5700228, end: 5700414 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Macquarie", start: 5700414, end: 5702674 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Mawson", start: 5702674, end: 5702873 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/McMurdo", start: 5702873, end: 5705310 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Palmer", start: 5705310, end: 5706728 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Rothera", start: 5706728, end: 5706892 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/South_Pole", start: 5706892, end: 5709329 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Syowa", start: 5709329, end: 5709494 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Troll", start: 5709494, end: 5710656 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Vostok", start: 5710656, end: 5710883 }, { filename: "/pglite/share/postgresql/timezone/Arctic/Longyearbyen", start: 5710883, end: 5713181 }, { filename: "/pglite/share/postgresql/timezone/Asia/Aden", start: 5713181, end: 5713346 }, { filename: "/pglite/share/postgresql/timezone/Asia/Almaty", start: 5713346, end: 5714343 }, { filename: "/pglite/share/postgresql/timezone/Asia/Amman", start: 5714343, end: 5715790 }, { filename: "/pglite/share/postgresql/timezone/Asia/Anadyr", start: 5715790, end: 5716978 }, { filename: "/pglite/share/postgresql/timezone/Asia/Aqtau", start: 5716978, end: 5717961 }, { filename: "/pglite/share/postgresql/timezone/Asia/Aqtobe", start: 5717961, end: 5718972 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ashgabat", start: 5718972, end: 5719591 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ashkhabad", start: 5719591, end: 5720210 }, { filename: "/pglite/share/postgresql/timezone/Asia/Atyrau", start: 5720210, end: 5721201 }, { filename: "/pglite/share/postgresql/timezone/Asia/Baghdad", start: 5721201, end: 5722184 }, { filename: "/pglite/share/postgresql/timezone/Asia/Bahrain", start: 5722184, end: 5722383 }, { filename: "/pglite/share/postgresql/timezone/Asia/Baku", start: 5722383, end: 5723610 }, { filename: "/pglite/share/postgresql/timezone/Asia/Bangkok", start: 5723610, end: 5723809 }, { filename: "/pglite/share/postgresql/timezone/Asia/Barnaul", start: 5723809, end: 5725030 }, { filename: "/pglite/share/postgresql/timezone/Asia/Beirut", start: 5725030, end: 5727184 }, { filename: "/pglite/share/postgresql/timezone/Asia/Bishkek", start: 5727184, end: 5728167 }, { filename: "/pglite/share/postgresql/timezone/Asia/Brunei", start: 5728167, end: 5728650 }, { filename: "/pglite/share/postgresql/timezone/Asia/Calcutta", start: 5728650, end: 5728935 }, { filename: "/pglite/share/postgresql/timezone/Asia/Chita", start: 5728935, end: 5730156 }, { filename: "/pglite/share/postgresql/timezone/Asia/Choibalsan", start: 5730156, end: 5731047 }, { filename: "/pglite/share/postgresql/timezone/Asia/Chongqing", start: 5731047, end: 5731608 }, { filename: "/pglite/share/postgresql/timezone/Asia/Chungking", start: 5731608, end: 5732169 }, { filename: "/pglite/share/postgresql/timezone/Asia/Colombo", start: 5732169, end: 5732541 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dacca", start: 5732541, end: 5732878 }, { filename: "/pglite/share/postgresql/timezone/Asia/Damascus", start: 5732878, end: 5734765 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dhaka", start: 5734765, end: 5735102 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dili", start: 5735102, end: 5735373 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dubai", start: 5735373, end: 5735538 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dushanbe", start: 5735538, end: 5736129 }, { filename: "/pglite/share/postgresql/timezone/Asia/Famagusta", start: 5736129, end: 5738157 }, { filename: "/pglite/share/postgresql/timezone/Asia/Gaza", start: 5738157, end: 5742001 }, { filename: "/pglite/share/postgresql/timezone/Asia/Harbin", start: 5742001, end: 5742562 }, { filename: "/pglite/share/postgresql/timezone/Asia/Hebron", start: 5742562, end: 5746434 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ho_Chi_Minh", start: 5746434, end: 5746785 }, { filename: "/pglite/share/postgresql/timezone/Asia/Hong_Kong", start: 5746785, end: 5748018 }, { filename: "/pglite/share/postgresql/timezone/Asia/Hovd", start: 5748018, end: 5748909 }, { filename: "/pglite/share/postgresql/timezone/Asia/Irkutsk", start: 5748909, end: 5750152 }, { filename: "/pglite/share/postgresql/timezone/Asia/Istanbul", start: 5750152, end: 5752099 }, { filename: "/pglite/share/postgresql/timezone/Asia/Jakarta", start: 5752099, end: 5752482 }, { filename: "/pglite/share/postgresql/timezone/Asia/Jayapura", start: 5752482, end: 5752703 }, { filename: "/pglite/share/postgresql/timezone/Asia/Jerusalem", start: 5752703, end: 5755091 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kabul", start: 5755091, end: 5755299 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kamchatka", start: 5755299, end: 5756465 }, { filename: "/pglite/share/postgresql/timezone/Asia/Karachi", start: 5756465, end: 5756844 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kashgar", start: 5756844, end: 5757009 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kathmandu", start: 5757009, end: 5757221 }, { filename: "/pglite/share/postgresql/timezone/Asia/Katmandu", start: 5757221, end: 5757433 }, { filename: "/pglite/share/postgresql/timezone/Asia/Khandyga", start: 5757433, end: 5758704 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kolkata", start: 5758704, end: 5758989 }, { filename: "/pglite/share/postgresql/timezone/Asia/Krasnoyarsk", start: 5758989, end: 5760196 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kuala_Lumpur", start: 5760196, end: 5760611 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kuching", start: 5760611, end: 5761094 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kuwait", start: 5761094, end: 5761259 }, { filename: "/pglite/share/postgresql/timezone/Asia/Macao", start: 5761259, end: 5762486 }, { filename: "/pglite/share/postgresql/timezone/Asia/Macau", start: 5762486, end: 5763713 }, { filename: "/pglite/share/postgresql/timezone/Asia/Magadan", start: 5763713, end: 5764935 }, { filename: "/pglite/share/postgresql/timezone/Asia/Makassar", start: 5764935, end: 5765189 }, { filename: "/pglite/share/postgresql/timezone/Asia/Manila", start: 5765189, end: 5765611 }, { filename: "/pglite/share/postgresql/timezone/Asia/Muscat", start: 5765611, end: 5765776 }, { filename: "/pglite/share/postgresql/timezone/Asia/Nicosia", start: 5765776, end: 5767778 }, { filename: "/pglite/share/postgresql/timezone/Asia/Novokuznetsk", start: 5767778, end: 5768943 }, { filename: "/pglite/share/postgresql/timezone/Asia/Novosibirsk", start: 5768943, end: 5770164 }, { filename: "/pglite/share/postgresql/timezone/Asia/Omsk", start: 5770164, end: 5771371 }, { filename: "/pglite/share/postgresql/timezone/Asia/Oral", start: 5771371, end: 5772376 }, { filename: "/pglite/share/postgresql/timezone/Asia/Phnom_Penh", start: 5772376, end: 5772575 }, { filename: "/pglite/share/postgresql/timezone/Asia/Pontianak", start: 5772575, end: 5772928 }, { filename: "/pglite/share/postgresql/timezone/Asia/Pyongyang", start: 5772928, end: 5773165 }, { filename: "/pglite/share/postgresql/timezone/Asia/Qatar", start: 5773165, end: 5773364 }, { filename: "/pglite/share/postgresql/timezone/Asia/Qostanay", start: 5773364, end: 5774403 }, { filename: "/pglite/share/postgresql/timezone/Asia/Qyzylorda", start: 5774403, end: 5775428 }, { filename: "/pglite/share/postgresql/timezone/Asia/Rangoon", start: 5775428, end: 5775696 }, { filename: "/pglite/share/postgresql/timezone/Asia/Riyadh", start: 5775696, end: 5775861 }, { filename: "/pglite/share/postgresql/timezone/Asia/Saigon", start: 5775861, end: 5776212 }, { filename: "/pglite/share/postgresql/timezone/Asia/Sakhalin", start: 5776212, end: 5777414 }, { filename: "/pglite/share/postgresql/timezone/Asia/Samarkand", start: 5777414, end: 5777991 }, { filename: "/pglite/share/postgresql/timezone/Asia/Seoul", start: 5777991, end: 5778608 }, { filename: "/pglite/share/postgresql/timezone/Asia/Shanghai", start: 5778608, end: 5779169 }, { filename: "/pglite/share/postgresql/timezone/Asia/Singapore", start: 5779169, end: 5779584 }, { filename: "/pglite/share/postgresql/timezone/Asia/Srednekolymsk", start: 5779584, end: 5780792 }, { filename: "/pglite/share/postgresql/timezone/Asia/Taipei", start: 5780792, end: 5781553 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tashkent", start: 5781553, end: 5782144 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tbilisi", start: 5782144, end: 5783179 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tehran", start: 5783179, end: 5784441 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tel_Aviv", start: 5784441, end: 5786829 }, { filename: "/pglite/share/postgresql/timezone/Asia/Thimbu", start: 5786829, end: 5787032 }, { filename: "/pglite/share/postgresql/timezone/Asia/Thimphu", start: 5787032, end: 5787235 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tokyo", start: 5787235, end: 5787544 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tomsk", start: 5787544, end: 5788765 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ujung_Pandang", start: 5788765, end: 5789019 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ulaanbaatar", start: 5789019, end: 5789910 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ulan_Bator", start: 5789910, end: 5790801 }, { filename: "/pglite/share/postgresql/timezone/Asia/Urumqi", start: 5790801, end: 5790966 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ust-Nera", start: 5790966, end: 5792218 }, { filename: "/pglite/share/postgresql/timezone/Asia/Vientiane", start: 5792218, end: 5792417 }, { filename: "/pglite/share/postgresql/timezone/Asia/Vladivostok", start: 5792417, end: 5793625 }, { filename: "/pglite/share/postgresql/timezone/Asia/Yakutsk", start: 5793625, end: 5794832 }, { filename: "/pglite/share/postgresql/timezone/Asia/Yangon", start: 5794832, end: 5795100 }, { filename: "/pglite/share/postgresql/timezone/Asia/Yekaterinburg", start: 5795100, end: 5796343 }, { filename: "/pglite/share/postgresql/timezone/Asia/Yerevan", start: 5796343, end: 5797494 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Azores", start: 5797494, end: 5800950 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Bermuda", start: 5800950, end: 5803346 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Canary", start: 5803346, end: 5805243 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Cape_Verde", start: 5805243, end: 5805513 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Faeroe", start: 5805513, end: 5807328 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Faroe", start: 5807328, end: 5809143 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Jan_Mayen", start: 5809143, end: 5811441 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Madeira", start: 5811441, end: 5814818 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Reykjavik", start: 5814818, end: 5814966 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/South_Georgia", start: 5814966, end: 5815130 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/St_Helena", start: 5815130, end: 5815278 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Stanley", start: 5815278, end: 5816492 }, { filename: "/pglite/share/postgresql/timezone/Australia/ACT", start: 5816492, end: 5818682 }, { filename: "/pglite/share/postgresql/timezone/Australia/Adelaide", start: 5818682, end: 5820890 }, { filename: "/pglite/share/postgresql/timezone/Australia/Brisbane", start: 5820890, end: 5821309 }, { filename: "/pglite/share/postgresql/timezone/Australia/Broken_Hill", start: 5821309, end: 5823538 }, { filename: "/pglite/share/postgresql/timezone/Australia/Canberra", start: 5823538, end: 5825728 }, { filename: "/pglite/share/postgresql/timezone/Australia/Currie", start: 5825728, end: 5828086 }, { filename: "/pglite/share/postgresql/timezone/Australia/Darwin", start: 5828086, end: 5828411 }, { filename: "/pglite/share/postgresql/timezone/Australia/Eucla", start: 5828411, end: 5828881 }, { filename: "/pglite/share/postgresql/timezone/Australia/Hobart", start: 5828881, end: 5831239 }, { filename: "/pglite/share/postgresql/timezone/Australia/LHI", start: 5831239, end: 5833099 }, { filename: "/pglite/share/postgresql/timezone/Australia/Lindeman", start: 5833099, end: 5833574 }, { filename: "/pglite/share/postgresql/timezone/Australia/Lord_Howe", start: 5833574, end: 5835434 }, { filename: "/pglite/share/postgresql/timezone/Australia/Melbourne", start: 5835434, end: 5837624 }, { filename: "/pglite/share/postgresql/timezone/Australia/NSW", start: 5837624, end: 5839814 }, { filename: "/pglite/share/postgresql/timezone/Australia/North", start: 5839814, end: 5840139 }, { filename: "/pglite/share/postgresql/timezone/Australia/Perth", start: 5840139, end: 5840585 }, { filename: "/pglite/share/postgresql/timezone/Australia/Queensland", start: 5840585, end: 5841004 }, { filename: "/pglite/share/postgresql/timezone/Australia/South", start: 5841004, end: 5843212 }, { filename: "/pglite/share/postgresql/timezone/Australia/Sydney", start: 5843212, end: 5845402 }, { filename: "/pglite/share/postgresql/timezone/Australia/Tasmania", start: 5845402, end: 5847760 }, { filename: "/pglite/share/postgresql/timezone/Australia/Victoria", start: 5847760, end: 5849950 }, { filename: "/pglite/share/postgresql/timezone/Australia/West", start: 5849950, end: 5850396 }, { filename: "/pglite/share/postgresql/timezone/Australia/Yancowinna", start: 5850396, end: 5852625 }, { filename: "/pglite/share/postgresql/timezone/Brazil/Acre", start: 5852625, end: 5853253 }, { filename: "/pglite/share/postgresql/timezone/Brazil/DeNoronha", start: 5853253, end: 5853969 }, { filename: "/pglite/share/postgresql/timezone/Brazil/East", start: 5853969, end: 5855413 }, { filename: "/pglite/share/postgresql/timezone/Brazil/West", start: 5855413, end: 5856017 }, { filename: "/pglite/share/postgresql/timezone/CET", start: 5856017, end: 5858950 }, { filename: "/pglite/share/postgresql/timezone/CST6CDT", start: 5858950, end: 5862542 }, { filename: "/pglite/share/postgresql/timezone/Canada/Atlantic", start: 5862542, end: 5865966 }, { filename: "/pglite/share/postgresql/timezone/Canada/Central", start: 5865966, end: 5868834 }, { filename: "/pglite/share/postgresql/timezone/Canada/Eastern", start: 5868834, end: 5872328 }, { filename: "/pglite/share/postgresql/timezone/Canada/Mountain", start: 5872328, end: 5874358 }, { filename: "/pglite/share/postgresql/timezone/Canada/Newfoundland", start: 5874358, end: 5878013 }, { filename: "/pglite/share/postgresql/timezone/Canada/Pacific", start: 5878013, end: 5880603 }, { filename: "/pglite/share/postgresql/timezone/Canada/Saskatchewan", start: 5880603, end: 5881583 }, { filename: "/pglite/share/postgresql/timezone/Canada/Yukon", start: 5881583, end: 5883197 }, { filename: "/pglite/share/postgresql/timezone/Chile/Continental", start: 5883197, end: 5885726 }, { filename: "/pglite/share/postgresql/timezone/Chile/EasterIsland", start: 5885726, end: 5887959 }, { filename: "/pglite/share/postgresql/timezone/Cuba", start: 5887959, end: 5890375 }, { filename: "/pglite/share/postgresql/timezone/EET", start: 5890375, end: 5892637 }, { filename: "/pglite/share/postgresql/timezone/EST", start: 5892637, end: 5892819 }, { filename: "/pglite/share/postgresql/timezone/EST5EDT", start: 5892819, end: 5896371 }, { filename: "/pglite/share/postgresql/timezone/Egypt", start: 5896371, end: 5898770 }, { filename: "/pglite/share/postgresql/timezone/Eire", start: 5898770, end: 5902262 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT", start: 5902262, end: 5902376 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+0", start: 5902376, end: 5902490 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+1", start: 5902490, end: 5902606 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+10", start: 5902606, end: 5902723 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+11", start: 5902723, end: 5902840 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+12", start: 5902840, end: 5902957 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+2", start: 5902957, end: 5903073 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+3", start: 5903073, end: 5903189 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+4", start: 5903189, end: 5903305 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+5", start: 5903305, end: 5903421 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+6", start: 5903421, end: 5903537 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+7", start: 5903537, end: 5903653 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+8", start: 5903653, end: 5903769 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+9", start: 5903769, end: 5903885 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-0", start: 5903885, end: 5903999 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-1", start: 5903999, end: 5904116 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-10", start: 5904116, end: 5904234 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-11", start: 5904234, end: 5904352 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-12", start: 5904352, end: 5904470 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-13", start: 5904470, end: 5904588 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-14", start: 5904588, end: 5904706 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-2", start: 5904706, end: 5904823 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-3", start: 5904823, end: 5904940 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-4", start: 5904940, end: 5905057 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-5", start: 5905057, end: 5905174 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-6", start: 5905174, end: 5905291 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-7", start: 5905291, end: 5905408 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-8", start: 5905408, end: 5905525 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-9", start: 5905525, end: 5905642 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT0", start: 5905642, end: 5905756 }, { filename: "/pglite/share/postgresql/timezone/Etc/Greenwich", start: 5905756, end: 5905870 }, { filename: "/pglite/share/postgresql/timezone/Etc/UCT", start: 5905870, end: 5905984 }, { filename: "/pglite/share/postgresql/timezone/Etc/UTC", start: 5905984, end: 5906098 }, { filename: "/pglite/share/postgresql/timezone/Etc/Universal", start: 5906098, end: 5906212 }, { filename: "/pglite/share/postgresql/timezone/Etc/Zulu", start: 5906212, end: 5906326 }, { filename: "/pglite/share/postgresql/timezone/Europe/Amsterdam", start: 5906326, end: 5909259 }, { filename: "/pglite/share/postgresql/timezone/Europe/Andorra", start: 5909259, end: 5911001 }, { filename: "/pglite/share/postgresql/timezone/Europe/Astrakhan", start: 5911001, end: 5912166 }, { filename: "/pglite/share/postgresql/timezone/Europe/Athens", start: 5912166, end: 5914428 }, { filename: "/pglite/share/postgresql/timezone/Europe/Belfast", start: 5914428, end: 5918092 }, { filename: "/pglite/share/postgresql/timezone/Europe/Belgrade", start: 5918092, end: 5920012 }, { filename: "/pglite/share/postgresql/timezone/Europe/Berlin", start: 5920012, end: 5922310 }, { filename: "/pglite/share/postgresql/timezone/Europe/Bratislava", start: 5922310, end: 5924611 }, { filename: "/pglite/share/postgresql/timezone/Europe/Brussels", start: 5924611, end: 5927544 }, { filename: "/pglite/share/postgresql/timezone/Europe/Bucharest", start: 5927544, end: 5929728 }, { filename: "/pglite/share/postgresql/timezone/Europe/Budapest", start: 5929728, end: 5932096 }, { filename: "/pglite/share/postgresql/timezone/Europe/Busingen", start: 5932096, end: 5934005 }, { filename: "/pglite/share/postgresql/timezone/Europe/Chisinau", start: 5934005, end: 5936429 }, { filename: "/pglite/share/postgresql/timezone/Europe/Copenhagen", start: 5936429, end: 5938727 }, { filename: "/pglite/share/postgresql/timezone/Europe/Dublin", start: 5938727, end: 5942219 }, { filename: "/pglite/share/postgresql/timezone/Europe/Gibraltar", start: 5942219, end: 5945287 }, { filename: "/pglite/share/postgresql/timezone/Europe/Guernsey", start: 5945287, end: 5948951 }, { filename: "/pglite/share/postgresql/timezone/Europe/Helsinki", start: 5948951, end: 5950851 }, { filename: "/pglite/share/postgresql/timezone/Europe/Isle_of_Man", start: 5950851, end: 5954515 }, { filename: "/pglite/share/postgresql/timezone/Europe/Istanbul", start: 5954515, end: 5956462 }, { filename: "/pglite/share/postgresql/timezone/Europe/Jersey", start: 5956462, end: 5960126 }, { filename: "/pglite/share/postgresql/timezone/Europe/Kaliningrad", start: 5960126, end: 5961619 }, { filename: "/pglite/share/postgresql/timezone/Europe/Kiev", start: 5961619, end: 5963739 }, { filename: "/pglite/share/postgresql/timezone/Europe/Kirov", start: 5963739, end: 5964924 }, { filename: "/pglite/share/postgresql/timezone/Europe/Kyiv", start: 5964924, end: 5967044 }, { filename: "/pglite/share/postgresql/timezone/Europe/Lisbon", start: 5967044, end: 5970571 }, { filename: "/pglite/share/postgresql/timezone/Europe/Ljubljana", start: 5970571, end: 5972491 }, { filename: "/pglite/share/postgresql/timezone/Europe/London", start: 5972491, end: 5976155 }, { filename: "/pglite/share/postgresql/timezone/Europe/Luxembourg", start: 5976155, end: 5979088 }, { filename: "/pglite/share/postgresql/timezone/Europe/Madrid", start: 5979088, end: 5981702 }, { filename: "/pglite/share/postgresql/timezone/Europe/Malta", start: 5981702, end: 5984322 }, { filename: "/pglite/share/postgresql/timezone/Europe/Mariehamn", start: 5984322, end: 5986222 }, { filename: "/pglite/share/postgresql/timezone/Europe/Minsk", start: 5986222, end: 5987543 }, { filename: "/pglite/share/postgresql/timezone/Europe/Monaco", start: 5987543, end: 5990505 }, { filename: "/pglite/share/postgresql/timezone/Europe/Moscow", start: 5990505, end: 5992040 }, { filename: "/pglite/share/postgresql/timezone/Europe/Nicosia", start: 5992040, end: 5994042 }, { filename: "/pglite/share/postgresql/timezone/Europe/Oslo", start: 5994042, end: 5996340 }, { filename: "/pglite/share/postgresql/timezone/Europe/Paris", start: 5996340, end: 5999302 }, { filename: "/pglite/share/postgresql/timezone/Europe/Podgorica", start: 5999302, end: 6001222 }, { filename: "/pglite/share/postgresql/timezone/Europe/Prague", start: 6001222, end: 6003523 }, { filename: "/pglite/share/postgresql/timezone/Europe/Riga", start: 6003523, end: 6005721 }, { filename: "/pglite/share/postgresql/timezone/Europe/Rome", start: 6005721, end: 6008362 }, { filename: "/pglite/share/postgresql/timezone/Europe/Samara", start: 6008362, end: 6009577 }, { filename: "/pglite/share/postgresql/timezone/Europe/San_Marino", start: 6009577, end: 6012218 }, { filename: "/pglite/share/postgresql/timezone/Europe/Sarajevo", start: 6012218, end: 6014138 }, { filename: "/pglite/share/postgresql/timezone/Europe/Saratov", start: 6014138, end: 6015321 }, { filename: "/pglite/share/postgresql/timezone/Europe/Simferopol", start: 6015321, end: 6016790 }, { filename: "/pglite/share/postgresql/timezone/Europe/Skopje", start: 6016790, end: 6018710 }, { filename: "/pglite/share/postgresql/timezone/Europe/Sofia", start: 6018710, end: 6020787 }, { filename: "/pglite/share/postgresql/timezone/Europe/Stockholm", start: 6020787, end: 6023085 }, { filename: "/pglite/share/postgresql/timezone/Europe/Tallinn", start: 6023085, end: 6025233 }, { filename: "/pglite/share/postgresql/timezone/Europe/Tirane", start: 6025233, end: 6027317 }, { filename: "/pglite/share/postgresql/timezone/Europe/Tiraspol", start: 6027317, end: 6029741 }, { filename: "/pglite/share/postgresql/timezone/Europe/Ulyanovsk", start: 6029741, end: 6031008 }, { filename: "/pglite/share/postgresql/timezone/Europe/Uzhgorod", start: 6031008, end: 6033128 }, { filename: "/pglite/share/postgresql/timezone/Europe/Vaduz", start: 6033128, end: 6035037 }, { filename: "/pglite/share/postgresql/timezone/Europe/Vatican", start: 6035037, end: 6037678 }, { filename: "/pglite/share/postgresql/timezone/Europe/Vienna", start: 6037678, end: 6039878 }, { filename: "/pglite/share/postgresql/timezone/Europe/Vilnius", start: 6039878, end: 6042040 }, { filename: "/pglite/share/postgresql/timezone/Europe/Volgograd", start: 6042040, end: 6043233 }, { filename: "/pglite/share/postgresql/timezone/Europe/Warsaw", start: 6043233, end: 6045887 }, { filename: "/pglite/share/postgresql/timezone/Europe/Zagreb", start: 6045887, end: 6047807 }, { filename: "/pglite/share/postgresql/timezone/Europe/Zaporozhye", start: 6047807, end: 6049927 }, { filename: "/pglite/share/postgresql/timezone/Europe/Zurich", start: 6049927, end: 6051836 }, { filename: "/pglite/share/postgresql/timezone/Factory", start: 6051836, end: 6051952 }, { filename: "/pglite/share/postgresql/timezone/GB", start: 6051952, end: 6055616 }, { filename: "/pglite/share/postgresql/timezone/GB-Eire", start: 6055616, end: 6059280 }, { filename: "/pglite/share/postgresql/timezone/GMT", start: 6059280, end: 6059394 }, { filename: "/pglite/share/postgresql/timezone/GMT+0", start: 6059394, end: 6059508 }, { filename: "/pglite/share/postgresql/timezone/GMT-0", start: 6059508, end: 6059622 }, { filename: "/pglite/share/postgresql/timezone/GMT0", start: 6059622, end: 6059736 }, { filename: "/pglite/share/postgresql/timezone/Greenwich", start: 6059736, end: 6059850 }, { filename: "/pglite/share/postgresql/timezone/HST", start: 6059850, end: 6060179 }, { filename: "/pglite/share/postgresql/timezone/Hongkong", start: 6060179, end: 6061412 }, { filename: "/pglite/share/postgresql/timezone/Iceland", start: 6061412, end: 6061560 }, { filename: "/pglite/share/postgresql/timezone/Indian/Antananarivo", start: 6061560, end: 6061825 }, { filename: "/pglite/share/postgresql/timezone/Indian/Chagos", start: 6061825, end: 6062024 }, { filename: "/pglite/share/postgresql/timezone/Indian/Christmas", start: 6062024, end: 6062223 }, { filename: "/pglite/share/postgresql/timezone/Indian/Cocos", start: 6062223, end: 6062491 }, { filename: "/pglite/share/postgresql/timezone/Indian/Comoro", start: 6062491, end: 6062756 }, { filename: "/pglite/share/postgresql/timezone/Indian/Kerguelen", start: 6062756, end: 6062955 }, { filename: "/pglite/share/postgresql/timezone/Indian/Mahe", start: 6062955, end: 6063120 }, { filename: "/pglite/share/postgresql/timezone/Indian/Maldives", start: 6063120, end: 6063319 }, { filename: "/pglite/share/postgresql/timezone/Indian/Mauritius", start: 6063319, end: 6063560 }, { filename: "/pglite/share/postgresql/timezone/Indian/Mayotte", start: 6063560, end: 6063825 }, { filename: "/pglite/share/postgresql/timezone/Indian/Reunion", start: 6063825, end: 6063990 }, { filename: "/pglite/share/postgresql/timezone/Iran", start: 6063990, end: 6065252 }, { filename: "/pglite/share/postgresql/timezone/Israel", start: 6065252, end: 6067640 }, { filename: "/pglite/share/postgresql/timezone/Jamaica", start: 6067640, end: 6068122 }, { filename: "/pglite/share/postgresql/timezone/Japan", start: 6068122, end: 6068431 }, { filename: "/pglite/share/postgresql/timezone/Kwajalein", start: 6068431, end: 6068747 }, { filename: "/pglite/share/postgresql/timezone/Libya", start: 6068747, end: 6069372 }, { filename: "/pglite/share/postgresql/timezone/MET", start: 6069372, end: 6072305 }, { filename: "/pglite/share/postgresql/timezone/MST", start: 6072305, end: 6072665 }, { filename: "/pglite/share/postgresql/timezone/MST7MDT", start: 6072665, end: 6075125 }, { filename: "/pglite/share/postgresql/timezone/Mexico/BajaNorte", start: 6075125, end: 6078031 }, { filename: "/pglite/share/postgresql/timezone/Mexico/BajaSur", start: 6078031, end: 6079091 }, { filename: "/pglite/share/postgresql/timezone/Mexico/General", start: 6079091, end: 6080313 }, { filename: "/pglite/share/postgresql/timezone/NZ", start: 6080313, end: 6082750 }, { filename: "/pglite/share/postgresql/timezone/NZ-CHAT", start: 6082750, end: 6084818 }, { filename: "/pglite/share/postgresql/timezone/Navajo", start: 6084818, end: 6087278 }, { filename: "/pglite/share/postgresql/timezone/PRC", start: 6087278, end: 6087839 }, { filename: "/pglite/share/postgresql/timezone/PST8PDT", start: 6087839, end: 6090691 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Apia", start: 6090691, end: 6091303 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Auckland", start: 6091303, end: 6093740 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Bougainville", start: 6093740, end: 6094008 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Chatham", start: 6094008, end: 6096076 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Chuuk", start: 6096076, end: 6096262 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Easter", start: 6096262, end: 6098495 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Efate", start: 6098495, end: 6099033 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Enderbury", start: 6099033, end: 6099267 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Fakaofo", start: 6099267, end: 6099467 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Fiji", start: 6099467, end: 6100045 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Funafuti", start: 6100045, end: 6100211 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Galapagos", start: 6100211, end: 6100449 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Gambier", start: 6100449, end: 6100613 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Guadalcanal", start: 6100613, end: 6100779 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Guam", start: 6100779, end: 6101273 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Honolulu", start: 6101273, end: 6101602 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Johnston", start: 6101602, end: 6101931 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Kanton", start: 6101931, end: 6102165 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Kiritimati", start: 6102165, end: 6102403 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Kosrae", start: 6102403, end: 6102754 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Kwajalein", start: 6102754, end: 6103070 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Majuro", start: 6103070, end: 6103236 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Marquesas", start: 6103236, end: 6103409 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Midway", start: 6103409, end: 6103584 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Nauru", start: 6103584, end: 6103836 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Niue", start: 6103836, end: 6104039 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Norfolk", start: 6104039, end: 6104919 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Noumea", start: 6104919, end: 6105223 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Pago_Pago", start: 6105223, end: 6105398 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Palau", start: 6105398, end: 6105578 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Pitcairn", start: 6105578, end: 6105780 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Pohnpei", start: 6105780, end: 6105946 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Ponape", start: 6105946, end: 6106112 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Port_Moresby", start: 6106112, end: 6106298 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Rarotonga", start: 6106298, end: 6106901 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Saipan", start: 6106901, end: 6107395 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Samoa", start: 6107395, end: 6107570 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Tahiti", start: 6107570, end: 6107735 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Tarawa", start: 6107735, end: 6107901 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Tongatapu", start: 6107901, end: 6108273 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Truk", start: 6108273, end: 6108459 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Wake", start: 6108459, end: 6108625 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Wallis", start: 6108625, end: 6108791 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Yap", start: 6108791, end: 6108977 }, { filename: "/pglite/share/postgresql/timezone/Poland", start: 6108977, end: 6111631 }, { filename: "/pglite/share/postgresql/timezone/Portugal", start: 6111631, end: 6115158 }, { filename: "/pglite/share/postgresql/timezone/ROC", start: 6115158, end: 6115919 }, { filename: "/pglite/share/postgresql/timezone/ROK", start: 6115919, end: 6116536 }, { filename: "/pglite/share/postgresql/timezone/Singapore", start: 6116536, end: 6116951 }, { filename: "/pglite/share/postgresql/timezone/Turkey", start: 6116951, end: 6118898 }, { filename: "/pglite/share/postgresql/timezone/UCT", start: 6118898, end: 6119012 }, { filename: "/pglite/share/postgresql/timezone/US/Alaska", start: 6119012, end: 6121383 }, { filename: "/pglite/share/postgresql/timezone/US/Aleutian", start: 6121383, end: 6123739 }, { filename: "/pglite/share/postgresql/timezone/US/Arizona", start: 6123739, end: 6124099 }, { filename: "/pglite/share/postgresql/timezone/US/Central", start: 6124099, end: 6127691 }, { filename: "/pglite/share/postgresql/timezone/US/East-Indiana", start: 6127691, end: 6129373 }, { filename: "/pglite/share/postgresql/timezone/US/Eastern", start: 6129373, end: 6132925 }, { filename: "/pglite/share/postgresql/timezone/US/Hawaii", start: 6132925, end: 6133254 }, { filename: "/pglite/share/postgresql/timezone/US/Indiana-Starke", start: 6133254, end: 6135698 }, { filename: "/pglite/share/postgresql/timezone/US/Michigan", start: 6135698, end: 6137928 }, { filename: "/pglite/share/postgresql/timezone/US/Mountain", start: 6137928, end: 6140388 }, { filename: "/pglite/share/postgresql/timezone/US/Pacific", start: 6140388, end: 6143240 }, { filename: "/pglite/share/postgresql/timezone/US/Samoa", start: 6143240, end: 6143415 }, { filename: "/pglite/share/postgresql/timezone/UTC", start: 6143415, end: 6143529 }, { filename: "/pglite/share/postgresql/timezone/Universal", start: 6143529, end: 6143643 }, { filename: "/pglite/share/postgresql/timezone/W-SU", start: 6143643, end: 6145178 }, { filename: "/pglite/share/postgresql/timezone/WET", start: 6145178, end: 6148705 }, { filename: "/pglite/share/postgresql/timezone/Zulu", start: 6148705, end: 6148819 }, { filename: "/pglite/share/postgresql/timezonesets/Africa.txt", start: 6148819, end: 6155792 }, { filename: "/pglite/share/postgresql/timezonesets/America.txt", start: 6155792, end: 6166799 }, { filename: "/pglite/share/postgresql/timezonesets/Antarctica.txt", start: 6166799, end: 6167933 }, { filename: "/pglite/share/postgresql/timezonesets/Asia.txt", start: 6167933, end: 6176244 }, { filename: "/pglite/share/postgresql/timezonesets/Atlantic.txt", start: 6176244, end: 6179777 }, { filename: "/pglite/share/postgresql/timezonesets/Australia", start: 6179777, end: 6180912 }, { filename: "/pglite/share/postgresql/timezonesets/Australia.txt", start: 6180912, end: 6184296 }, { filename: "/pglite/share/postgresql/timezonesets/Default", start: 6184296, end: 6211510 }, { filename: "/pglite/share/postgresql/timezonesets/Etc.txt", start: 6211510, end: 6212760 }, { filename: "/pglite/share/postgresql/timezonesets/Europe.txt", start: 6212760, end: 6221506 }, { filename: "/pglite/share/postgresql/timezonesets/India", start: 6221506, end: 6222099 }, { filename: "/pglite/share/postgresql/timezonesets/Indian.txt", start: 6222099, end: 6223360 }, { filename: "/pglite/share/postgresql/timezonesets/Pacific.txt", start: 6223360, end: 6227128 }, { filename: "/pglite/share/postgresql/tsearch_data/danish.stop", start: 6227128, end: 6227552 }, { filename: "/pglite/share/postgresql/tsearch_data/dutch.stop", start: 6227552, end: 6228005 }, { filename: "/pglite/share/postgresql/tsearch_data/english.stop", start: 6228005, end: 6228627 }, { filename: "/pglite/share/postgresql/tsearch_data/finnish.stop", start: 6228627, end: 6230206 }, { filename: "/pglite/share/postgresql/tsearch_data/french.stop", start: 6230206, end: 6231011 }, { filename: "/pglite/share/postgresql/tsearch_data/german.stop", start: 6231011, end: 6232360 }, { filename: "/pglite/share/postgresql/tsearch_data/hungarian.stop", start: 6232360, end: 6233587 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample.affix", start: 6233587, end: 6233830 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_long.affix", start: 6233830, end: 6234463 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_long.dict", start: 6234463, end: 6234561 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_num.affix", start: 6234561, end: 6235023 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_num.dict", start: 6235023, end: 6235152 }, { filename: "/pglite/share/postgresql/tsearch_data/ispell_sample.affix", start: 6235152, end: 6235617 }, { filename: "/pglite/share/postgresql/tsearch_data/ispell_sample.dict", start: 6235617, end: 6235698 }, { filename: "/pglite/share/postgresql/tsearch_data/italian.stop", start: 6235698, end: 6237352 }, { filename: "/pglite/share/postgresql/tsearch_data/nepali.stop", start: 6237352, end: 6241613 }, { filename: "/pglite/share/postgresql/tsearch_data/norwegian.stop", start: 6241613, end: 6242464 }, { filename: "/pglite/share/postgresql/tsearch_data/portuguese.stop", start: 6242464, end: 6243731 }, { filename: "/pglite/share/postgresql/tsearch_data/russian.stop", start: 6243731, end: 6244966 }, { filename: "/pglite/share/postgresql/tsearch_data/spanish.stop", start: 6244966, end: 6247144 }, { filename: "/pglite/share/postgresql/tsearch_data/swedish.stop", start: 6247144, end: 6247703 }, { filename: "/pglite/share/postgresql/tsearch_data/synonym_sample.syn", start: 6247703, end: 6247776 }, { filename: "/pglite/share/postgresql/tsearch_data/thesaurus_sample.ths", start: 6247776, end: 6248249 }, { filename: "/pglite/share/postgresql/tsearch_data/turkish.stop", start: 6248249, end: 6248509 }], remote_package_size: 6248509 });
  })();
  var programArgs = [], thisProgram = "./this.program", quit_ = (e, t7) => {
    throw t7;
  }, _scriptName = import.meta.url, scriptDirectory = "";
  function locateFile(e) {
    return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
  }
  var readAsync, readBinary;
  if (ENVIRONMENT_IS_NODE) {
    var fs = require("node:fs");
    _scriptName.startsWith("file:") && (scriptDirectory = require("node:path").dirname(require("node:url").fileURLToPath(_scriptName)) + "/"), readBinary = (e) => {
      e = isFileURI(e) ? new URL(e) : e;
      var t7 = fs.readFileSync(e);
      return t7;
    }, readAsync = async (e, t7 = true) => {
      e = isFileURI(e) ? new URL(e) : e;
      var r2 = fs.readFileSync(e, t7 ? void 0 : "utf8");
      return r2;
    }, process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")), programArgs = process.argv.slice(2), quit_ = (e, t7) => {
      throw process.exitCode = e, t7;
    };
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    try {
      scriptDirectory = new URL(".", _scriptName).href;
    } catch {
    }
    ENVIRONMENT_IS_WORKER && (readBinary = (e) => {
      var t7 = new XMLHttpRequest();
      return t7.open("GET", e, false), t7.responseType = "arraybuffer", t7.send(null), new Uint8Array(t7.response);
    }), readAsync = async (e) => {
      var t7 = await fetch(e, { credentials: "same-origin" });
      if (t7.ok) return t7.arrayBuffer();
      throw new Error(t7.status + " : " + t7.url);
    };
  }
  var out = console.log.bind(console), err = console.error.bind(console), dynamicLibraries = [], wasmBinary, ABORT = false, EXITSTATUS, isFileURI = (e) => e.startsWith("file://");
  class EmscriptenEH {
  }
  class EmscriptenSjLj extends EmscriptenEH {
  }
  var runtimeInitialized = false, runtimeExited = false;
  function getMemoryBuffer() {
    return wasmMemory.buffer;
  }
  function updateMemoryViews() {
    if (!HEAP8?.buffer?.resizable) {
      var e = getMemoryBuffer();
      HEAP8 = new Int8Array(e), HEAP16 = new Int16Array(e), Module.HEAPU8 = HEAPU8 = new Uint8Array(e), HEAPU16 = new Uint16Array(e), HEAP32 = new Int32Array(e), HEAPU32 = new Uint32Array(e), HEAPF32 = new Float32Array(e), HEAPF64 = new Float64Array(e), HEAP64 = new BigInt64Array(e), HEAPU64 = new BigUint64Array(e);
    }
  }
  function initMemory() {
    if (Module.wasmMemory) wasmMemory = Module.wasmMemory;
    else {
      var e = Module.INITIAL_MEMORY || 134217728;
      wasmMemory = new WebAssembly.Memory({ initial: e / 65536, maximum: 32768 });
    }
    updateMemoryViews();
  }
  var __RELOC_FUNCS__ = [];
  function preRun() {
    var e = Module.preRun;
    e && (typeof e == "function" && (e = [e]), onPreRuns.push(...e)), callRuntimeCallbacks(onPreRuns);
  }
  function initRuntime() {
    runtimeInitialized = true, callRuntimeCallbacks(__RELOC_FUNCS__), !Module.noFSInit && !FS.initialized && FS.init(), TTY.init(), SOCKFS.root = FS.mount(SOCKFS, {}, null), PIPEFS.root = FS.mount(PIPEFS, {}, null), wasmExports.__wasm_call_ctors(), callRuntimeCallbacks(onPostCtors), FS.ignorePermissions = false;
  }
  function exitRuntime() {
    ___funcs_on_exit(), FS.quit(), TTY.shutdown(), IDBFS.quit(), clearTimers(), runtimeExited = true;
  }
  function postRun() {
    var e = Module.postRun;
    e && (typeof e == "function" && (e = [e]), onPostRuns.push(...e)), callRuntimeCallbacks(onPostRuns);
  }
  function abort(e) {
    Module.onAbort?.(e), e = `Aborted(${e})`, err(e), ABORT = true, e += ". Build with -sASSERTIONS for more info.";
    var t7 = new WebAssembly.RuntimeError(e);
    throw t7;
  }
  var wasmBinaryFile;
  function findWasmBinary() {
    return Module.locateFile ? locateFile("pglite.wasm") : new URL("pglite.wasm", import.meta.url).href;
  }
  function getBinarySync(e) {
    if (readBinary) return readBinary(e);
    throw "both async and sync fetching of the wasm failed";
  }
  async function getWasmBinary(e) {
    if (!wasmBinary) try {
      var t7 = await readAsync(e);
      return new Uint8Array(t7);
    } catch {
    }
    return getBinarySync(e);
  }
  async function instantiateArrayBuffer(e, t7) {
    try {
      var r2 = await getWasmBinary(e), _4 = await WebAssembly.instantiate(r2, t7);
      return _4;
    } catch (n3) {
      err(`failed to asynchronously prepare wasm: ${n3}`), abort(n3);
    }
  }
  async function instantiateAsync(e, t7, r2) {
    if (!e && !ENVIRONMENT_IS_NODE) try {
      var _4 = fetch(t7, { credentials: "same-origin" }), n3 = await WebAssembly.instantiateStreaming(_4, r2);
      return n3;
    } catch (a3) {
      err(`wasm streaming compile failed: ${a3}`), err("falling back to ArrayBuffer instantiation");
    }
    return instantiateArrayBuffer(t7, r2);
  }
  function getWasmImports() {
    var e = new Proxy(/* @__PURE__ */ new Set([]), GOTHandler), t7 = { env: wasmImports, wasi_snapshot_preview1: wasmImports, "GOT.mem": e, "GOT.func": e };
    return t7;
  }
  async function createWasm() {
    async function e(i4, l3) {
      wasmExports = i4.exports;
      var o6 = wasmExports;
      mergeLibSymbols(wasmExports, "main");
      var s5 = getDylinkMetadata(l3);
      return s5.neededDynlibs && (dynamicLibraries = s5.neededDynlibs.concat(dynamicLibraries)), assignWasmExports(wasmExports), updateGOT(o6), LDSO.init(), await loadDylibs(), wasmExports;
    }
    function t7(i4) {
      return e(i4.instance, i4.module);
    }
    var r2 = getWasmImports(), _4 = Module.instantiateWasm;
    if (_4) return new Promise((i4) => {
      _4(r2, (l3, o6) => i4(e(l3, o6)));
    });
    wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
    var n3 = await instantiateAsync(wasmBinary, wasmBinaryFile, r2), a3 = await t7(n3);
    return a3;
  }
  class ExitStatus {
    constructor(t7) {
      P(this, "name", "ExitStatus");
      this.message = `Program terminated with exit(${t7})`, this.status = t7;
    }
  }
  var GOT = {}, GOTHandler = { get(e, t7) {
    var r2 = GOT[t7];
    return r2 || (r2 = GOT[t7] = new WebAssembly.Global({ value: "i32", mutable: true }, -1)), e.has(t7) || (r2.required = true), r2;
  } }, HEAP16, HEAP32, HEAP64, HEAP8, HEAPF32, HEAPF64, HEAPU16, HEAPU32, HEAPU64, HEAPU8, callRuntimeCallbacks = (e) => {
    for (; e.length > 0; ) e.shift()(Module);
  }, onPostRuns = [], onPreRuns = [], UTF8Decoder = globalThis.TextDecoder && new TextDecoder(), findStringEnd = (e, t7, r2, _4) => {
    var n3 = t7 + r2;
    if (_4) return n3;
    for (; e[t7] && !(t7 >= n3); ) ++t7;
    return t7;
  }, UTF8ArrayToString = (e, t7 = 0, r2, _4) => {
    var n3 = findStringEnd(e, t7, r2, _4);
    if (n3 - t7 > 16 && e.buffer && UTF8Decoder) return UTF8Decoder.decode(e.subarray(t7, n3));
    for (var a3 = ""; t7 < n3; ) {
      var i4 = e[t7++];
      if (!(i4 & 128)) {
        a3 += String.fromCharCode(i4);
        continue;
      }
      var l3 = e[t7++] & 63;
      if ((i4 & 224) == 192) {
        a3 += String.fromCharCode((i4 & 31) << 6 | l3);
        continue;
      }
      var o6 = e[t7++] & 63;
      if ((i4 & 240) == 224 ? i4 = (i4 & 15) << 12 | l3 << 6 | o6 : i4 = (i4 & 7) << 18 | l3 << 12 | o6 << 6 | e[t7++] & 63, i4 < 65536) a3 += String.fromCharCode(i4);
      else {
        var s5 = i4 - 65536;
        a3 += String.fromCharCode(55296 | s5 >> 10, 56320 | s5 & 1023);
      }
    }
    return a3;
  }, getDylinkMetadata = (e) => {
    var t7 = 0, r2 = 0;
    function _4() {
      return e[t7++];
    }
    function n3() {
      for (var R3 = 0, H4 = 1; ; ) {
        var Oe3 = e[t7++];
        if (R3 += (Oe3 & 127) * H4, H4 *= 128, !(Oe3 & 128)) break;
      }
      return R3;
    }
    function a3() {
      var R3 = n3();
      return t7 += R3, UTF8ArrayToString(e, t7 - R3, R3);
    }
    function i4() {
      for (var R3 = n3(), H4 = []; R3--; ) H4.push(a3());
      return H4;
    }
    function l3(R3, H4) {
      if (R3) throw new Error(H4);
    }
    if (e instanceof WebAssembly.Module) {
      var o6 = WebAssembly.Module.customSections(e, "dylink.0");
      l3(o6.length === 0, "need dylink section"), e = new Uint8Array(o6[0]), r2 = e.length;
    } else {
      var s5 = new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer), c3 = s5[0] == 1836278016;
      l3(!c3, "need to see wasm magic number"), l3(e[8] !== 0, "need the dylink section to be first"), t7 = 9;
      var g6 = n3();
      r2 = t7 + g6;
      var d5 = a3();
      l3(d5 !== "dylink.0");
    }
    for (var p6 = { neededDynlibs: [], tlsExports: /* @__PURE__ */ new Set(), weakImports: /* @__PURE__ */ new Set(), runtimePaths: [] }, u3 = 1, m7 = 2, M2 = 3, S4 = 4, v5 = 5, F5 = 256, b4 = 3, A4 = 1; t7 < r2; ) {
      var T5 = _4(), V2 = n3();
      if (T5 === u3) p6.memorySize = n3(), p6.memoryAlign = n3(), p6.tableSize = n3(), p6.tableAlign = n3();
      else if (T5 === m7) p6.neededDynlibs = i4();
      else if (T5 === M2) for (var re = n3(); re--; ) {
        var _e2 = a3(), ne = n3();
        ne & F5 && p6.tlsExports.add(_e2);
      }
      else if (T5 === S4) for (var re = n3(); re--; ) {
        var L5 = a3(), _e2 = a3(), ne = n3();
        (ne & b4) == A4 && p6.weakImports.add(_e2);
      }
      else T5 === v5 ? p6.runtimePaths = i4() : t7 += V2;
    }
    return p6;
  };
  function getValue(e, t7 = "i8") {
    switch (t7.endsWith("*") && (t7 = "*"), t7) {
      case "i1":
        return HEAP8[e];
      case "i8":
        return HEAP8[e];
      case "i16":
        return HEAP16[e >> 1];
      case "i32":
        return HEAP32[e >> 2];
      case "i64":
        return HEAP64[e >> 3];
      case "float":
        return HEAPF32[e >> 2];
      case "double":
        return HEAPF64[e >> 3];
      case "*":
        return HEAPU32[e >> 2];
      default:
        abort(`invalid type for getValue: ${t7}`);
    }
  }
  var newDSO = (e, t7, r2) => {
    var _4 = { refcount: 1 / 0, name: e, exports: r2, global: true };
    return LDSO.loadedLibsByName[e] = _4, t7 != null && (LDSO.loadedLibsByHandle[t7] = _4), _4;
  }, LDSO = { loadedLibsByName: {}, loadedLibsByHandle: {}, init() {
    newDSO("__main__", 0, wasmImports);
  } }, alignMemory = (e, t7) => Math.ceil(e / t7) * t7, getMemory = (e) => {
    if (runtimeInitialized) return _calloc(e, 1);
    var t7 = ___heap_base, r2 = t7 + alignMemory(e, 16);
    ___heap_base = r2;
    var _4 = _emscripten_get_sbrk_ptr();
    return HEAPU32[_4 >> 2] = r2, t7;
  }, isInternalSym = (e) => ["memory", "__memory_base", "__table_base", "__stack_pointer", "__indirect_function_table", "__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm", "__start_em_js", "__stop_em_js"].includes(e) || e.startsWith("__em_js__"), wasmTableMirror = [], getWasmTableEntry = (e) => {
    var t7 = wasmTableMirror[e];
    return t7 || (wasmTableMirror[e] = t7 = wasmTable.get(e)), t7;
  }, updateTableMap = (e, t7) => {
    if (functionsInTableMap) for (var r2 = e; r2 < e + t7; r2++) {
      var _4 = getWasmTableEntry(r2);
      _4 && functionsInTableMap.set(_4, r2);
    }
  }, functionsInTableMap, getFunctionAddress = (e) => (functionsInTableMap || (functionsInTableMap = /* @__PURE__ */ new WeakMap(), updateTableMap(0, wasmTable.length)), functionsInTableMap.get(e) || 0), freeTableIndexes = [], getEmptyTableSlot = () => freeTableIndexes.length ? freeTableIndexes.pop() : wasmTable.grow(1), setWasmTableEntry = (e, t7) => {
    wasmTable.set(e, t7), wasmTableMirror[e] = wasmTable.get(e);
  }, uleb128EncodeWithLen = (e) => {
    let t7 = e.length;
    return [t7 % 128 | 128, t7 >> 7, ...e];
  }, wasmTypeCodes = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 }, generateTypePack = (e) => uleb128EncodeWithLen(Array.from(e, (t7) => {
    var r2 = wasmTypeCodes[t7];
    return r2;
  })), convertJsFunctionToWasm = (e, t7) => {
    var r2 = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, 1, ...uleb128EncodeWithLen([1, 96, ...generateTypePack(t7.slice(1)), ...generateTypePack(t7[0] === "v" ? "" : t7[0])]), 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0), _4 = new WebAssembly.Module(r2), n3 = new WebAssembly.Instance(_4, { e: { f: e } }), a3 = n3.exports.f;
    return a3;
  }, addFunction = (e, t7) => {
    var r2 = getFunctionAddress(e);
    if (r2) return r2;
    var _4 = getEmptyTableSlot();
    try {
      setWasmTableEntry(_4, e);
    } catch (a3) {
      if (!(a3 instanceof TypeError)) throw a3;
      var n3 = convertJsFunctionToWasm(e, t7);
      setWasmTableEntry(_4, n3);
    }
    return functionsInTableMap.set(e, _4), _4;
  }, updateGOT = (e, t7) => {
    for (var r2 in e) if (!isInternalSym(r2)) {
      var _4 = e[r2], n3 = GOT[r2] && GOT[r2].value != -1;
      if (t7 || !n3) {
        var a3;
        if (typeof _4 == "function") a3 = addFunction(_4);
        else if (typeof _4.value == "number") a3 = _4;
        else continue;
        GOT[r2] ?? (GOT[r2] = new WebAssembly.Global({ value: "i32", mutable: true })), GOT[r2].value = a3;
      }
    }
  }, isImmutableGlobal = (e) => {
    if (e instanceof WebAssembly.Global) try {
      e.value = e.value;
    } catch {
      return true;
    }
    return false;
  }, relocateExports = (e, t7 = 0) => {
    function r2(a3, i4) {
      return isImmutableGlobal(i4) ? new WebAssembly.Global({ value: "i32" }, i4.value + t7) : i4;
    }
    var _4 = {};
    for (var n3 in e) _4[n3] = r2(n3, e[n3]);
    return _4;
  }, isSymbolDefined = (e) => {
    var t7 = wasmImports[e];
    return !(!t7 || t7.stub);
  }, createNamedFunction = (e, t7) => Object.defineProperty(t7, "name", { value: e }), dynCall = (e, t7, r2 = [], _4 = false) => {
    var n3 = getWasmTableEntry(t7), a3 = n3(...r2);
    function i4(l3) {
      return l3;
    }
    return a3;
  }, stackSave = () => _emscripten_stack_get_current(), stackRestore = (e) => __emscripten_stack_restore(e), createInvokeFunction = (e) => (t7, ...r2) => {
    var _4 = stackSave();
    try {
      return dynCall(e, t7, r2);
    } catch (n3) {
      if (stackRestore(_4), !(n3 instanceof EmscriptenEH)) throw n3;
      if (_setThrew(1, 0), e[0] == "j") return 0n;
    }
  }, resolveGlobalSymbol = (e, t7 = false) => {
    var r2;
    return isSymbolDefined(e) ? r2 = wasmImports[e] : e.startsWith("invoke_") && (r2 = wasmImports[e] = createNamedFunction(e, createInvokeFunction(e.split("_")[1]))), { sym: r2, name: e };
  }, onPostCtors = [], addOnPostCtor = (e) => onPostCtors.push(e), UTF8ToString = (e, t7, r2) => e ? UTF8ArrayToString(HEAPU8, e, t7, r2) : "", loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
    var metadata = getDylinkMetadata(binary);
    function loadModule() {
      var memAlign = Math.pow(2, metadata.memoryAlign), memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0, tableBase = metadata.tableSize ? wasmTable.length : 0;
      handle && (HEAP8[handle + 8] = 1, HEAPU32[handle + 12 >> 2] = memoryBase, HEAP32[handle + 16 >> 2] = metadata.memorySize, HEAPU32[handle + 20 >> 2] = tableBase, HEAP32[handle + 24 >> 2] = metadata.tableSize), metadata.tableSize && wasmTable.grow(metadata.tableSize);
      var moduleExports;
      function resolveSymbol(e) {
        var t7 = resolveGlobalSymbol(e).sym;
        return !t7 && localScope && (t7 = localScope[e]), t7 || (t7 = moduleExports[e]), t7;
      }
      var proxyHandler = { get(e, t7) {
        switch (t7) {
          case "__memory_base":
            return memoryBase;
          case "__table_base":
            return tableBase;
        }
        if (t7 in wasmImports && !wasmImports[t7].stub) {
          var r2 = wasmImports[t7];
          return r2;
        }
        if (!(t7 in e)) {
          var _4;
          e[t7] = (...n3) => (_4 || (_4 = resolveSymbol(t7)), _4(...n3));
        }
        return e[t7];
      } }, proxy = new Proxy({}, proxyHandler), GOTProxy = new Proxy(metadata.weakImports, GOTHandler), info = { "GOT.mem": GOTProxy, "GOT.func": GOTProxy, env: proxy, wasi_snapshot_preview1: proxy };
      function postInstantiation(module, instance) {
        updateTableMap(tableBase, metadata.tableSize), moduleExports = relocateExports(instance.exports, memoryBase), updateGOT(moduleExports), flags.allowUndefined || reportUndefinedSymbols();
        function addEmAsm(addr, body) {
          for (var args = [], arity = 0; ; arity++) {
            var argName = "$" + arity;
            if (!body.includes(argName)) break;
            args.push(argName);
          }
          args = args.join();
          var func = `(${args}) => { ${body} };`;
          ASM_CONSTS[start] = eval(func);
        }
        if ("__start_em_asm" in moduleExports) for (var start = moduleExports.__start_em_asm.value, stop = moduleExports.__stop_em_asm.value; start < stop; ) {
          var jsString = UTF8ToString(start);
          addEmAsm(start, jsString), start = HEAPU8.indexOf(0, start) + 1;
        }
        function addEmJs(name, cSig, body) {
          var jsArgs = [];
          if (cSig = cSig.slice(1, -1), cSig != "void") {
            cSig = cSig.split(",");
            for (var arg of cSig) {
              var jsArg = arg.split(" ").pop();
              jsArgs.push(jsArg.replaceAll("*", ""));
            }
          }
          var func = `(${jsArgs}) => ${body};`;
          moduleExports[name] = eval(func);
        }
        for (var name in moduleExports) if (name.startsWith("__em_js__")) {
          var start = moduleExports[name].value, jsString = UTF8ToString(start), [sig, body] = jsString.split("<::>");
          addEmJs(name.replace("__em_js__", ""), sig, body), delete moduleExports[name];
        }
        var applyRelocs = moduleExports.__wasm_apply_data_relocs;
        applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
        var init = moduleExports.__wasm_call_ctors;
        return init && (runtimeInitialized ? init() : addOnPostCtor(init)), moduleExports;
      }
      if (flags.loadAsync) return (async () => {
        var e;
        return binary instanceof WebAssembly.Module ? e = new WebAssembly.Instance(binary, info) : { module: binary, instance: e } = await WebAssembly.instantiate(binary, info), postInstantiation(binary, e);
      })();
      var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary), instance = new WebAssembly.Instance(module, info);
      return postInstantiation(module, instance);
    }
    if (flags = { ...flags, rpath: { parentLibPath: libName, paths: metadata.runtimePaths } }, flags.loadAsync) return metadata.neededDynlibs.reduce((e, t7) => e.then(() => (t7 = findLibraryFS(t7, flags.rpath) ?? t7, loadDynamicLibrary(t7, flags, localScope))), Promise.resolve()).then(loadModule);
    for (var needed of metadata.neededDynlibs) needed = findLibraryFS(needed, flags.rpath) ?? needed, loadDynamicLibrary(needed, flags, localScope);
    return loadModule();
  }, mergeLibSymbols = (e, t7) => {
    for (var [r2, _4] of Object.entries(e)) {
      let n3 = (i4) => {
        isSymbolDefined(i4) || (wasmImports[i4] = _4);
      };
      n3(r2);
      let a3 = "__main_argc_argv";
      r2 == "main" && n3(a3), r2 == a3 && n3("main");
    }
  }, asyncLoad = async (e) => {
    var t7 = await readAsync(e);
    return new Uint8Array(t7);
  }, preloadPlugins = [], registerWasmPlugin = () => {
    var e = { promiseChainEnd: Promise.resolve(), canHandle: (t7) => !Module.noWasmDecoding && t7.endsWith(".so"), handle: async (t7, r2) => e.promiseChainEnd = e.promiseChainEnd.then(async () => {
      try {
        var _4 = await loadWebAssemblyModule(t7, { loadAsync: true, nodelete: true }, r2, {});
      } catch (n3) {
        throw new Error(`failed to instantiate wasm: ${r2}: ${n3}`);
      }
      return preloadedWasm[r2] = _4, t7;
    }) };
    preloadPlugins.push(e);
  }, preloadedWasm = {}, PATH = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
    var t7 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    return t7.exec(e).slice(1);
  }, normalizeArray: (e, t7) => {
    for (var r2 = 0, _4 = e.length - 1; _4 >= 0; _4--) {
      var n3 = e[_4];
      n3 === "." ? e.splice(_4, 1) : n3 === ".." ? (e.splice(_4, 1), r2++) : r2 && (e.splice(_4, 1), r2--);
    }
    if (t7) for (; r2; r2--) e.unshift("..");
    return e;
  }, normalize: (e) => {
    var t7 = PATH.isAbs(e), r2 = e.slice(-1) === "/";
    return e = PATH.normalizeArray(e.split("/").filter((_4) => !!_4), !t7).join("/"), !e && !t7 && (e = "."), e && r2 && (e += "/"), (t7 ? "/" : "") + e;
  }, dirname: (e) => {
    var t7 = PATH.splitPath(e), r2 = t7[0], _4 = t7[1];
    return !r2 && !_4 ? "." : (_4 && (_4 = _4.slice(0, -1)), r2 + _4);
  }, basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1], join: (...e) => PATH.normalize(e.join("/")), join2: (e, t7) => PATH.normalize(e + "/" + t7) }, replaceORIGIN = (e, t7) => {
    if (t7.startsWith("$ORIGIN")) {
      var r2 = PATH.dirname(e);
      return t7.replace("$ORIGIN", r2);
    }
    return t7;
  }, withStackSave = (e) => {
    var t7 = stackSave(), r2 = e();
    return stackRestore(t7), r2;
  }, stackAlloc = (e) => __emscripten_stack_alloc(e), lengthBytesUTF8 = (e) => {
    for (var t7 = 0, r2 = 0; r2 < e.length; ++r2) {
      var _4 = e.charCodeAt(r2);
      _4 <= 127 ? t7++ : _4 <= 2047 ? t7 += 2 : _4 >= 55296 && _4 <= 57343 ? (t7 += 4, ++r2) : t7 += 3;
    }
    return t7;
  }, stringToUTF8Array = (e, t7, r2, _4) => {
    if (!(_4 > 0)) return 0;
    for (var n3 = r2, a3 = r2 + _4 - 1, i4 = 0; i4 < e.length; ++i4) {
      var l3 = e.codePointAt(i4);
      if (l3 <= 127) {
        if (r2 >= a3) break;
        t7[r2++] = l3;
      } else if (l3 <= 2047) {
        if (r2 + 1 >= a3) break;
        t7[r2++] = 192 | l3 >> 6, t7[r2++] = 128 | l3 & 63;
      } else if (l3 <= 65535) {
        if (r2 + 2 >= a3) break;
        t7[r2++] = 224 | l3 >> 12, t7[r2++] = 128 | l3 >> 6 & 63, t7[r2++] = 128 | l3 & 63;
      } else {
        if (r2 + 3 >= a3) break;
        t7[r2++] = 240 | l3 >> 18, t7[r2++] = 128 | l3 >> 12 & 63, t7[r2++] = 128 | l3 >> 6 & 63, t7[r2++] = 128 | l3 & 63, i4++;
      }
    }
    return t7[r2] = 0, r2 - n3;
  }, stringToUTF8 = (e, t7, r2) => stringToUTF8Array(e, HEAPU8, t7, r2), stringToUTF8OnStack = (e) => {
    var t7 = lengthBytesUTF8(e) + 1, r2 = stackAlloc(t7);
    return stringToUTF8(e, r2, t7), r2;
  }, initRandomFill = () => {
    if (ENVIRONMENT_IS_NODE) {
      var e = require("node:crypto");
      return (t7) => (e.randomFillSync(t7), 0);
    }
    return (t7) => (crypto.getRandomValues(t7), 0);
  }, randomFill = (e) => (randomFill = initRandomFill())(e), PATH_FS = { resolve: (...e) => {
    for (var t7 = "", r2 = false, _4 = e.length - 1; _4 >= -1 && !r2; _4--) {
      var n3 = _4 >= 0 ? e[_4] : FS.cwd();
      if (typeof n3 != "string") throw new TypeError("Arguments to path.resolve must be strings");
      if (!n3) return "";
      t7 = n3 + "/" + t7, r2 = PATH.isAbs(n3);
    }
    return t7 = PATH.normalizeArray(t7.split("/").filter((a3) => !!a3), !r2).join("/"), (r2 ? "/" : "") + t7 || ".";
  }, relative: (e, t7) => {
    e = PATH_FS.resolve(e).slice(1), t7 = PATH_FS.resolve(t7).slice(1);
    function r2(s5) {
      for (var c3 = 0; c3 < s5.length && s5[c3] === ""; c3++) ;
      for (var g6 = s5.length - 1; g6 >= 0 && s5[g6] === ""; g6--) ;
      return c3 > g6 ? [] : s5.slice(c3, g6 - c3 + 1);
    }
    for (var _4 = r2(e.split("/")), n3 = r2(t7.split("/")), a3 = Math.min(_4.length, n3.length), i4 = a3, l3 = 0; l3 < a3; l3++) if (_4[l3] !== n3[l3]) {
      i4 = l3;
      break;
    }
    for (var o6 = [], l3 = i4; l3 < _4.length; l3++) o6.push("..");
    return o6 = o6.concat(n3.slice(i4)), o6.join("/");
  } }, FS_stdin_getChar_buffer = [], intArrayFromString = (e, t7, r2) => {
    var _4 = r2 > 0 ? r2 : lengthBytesUTF8(e) + 1, n3 = new Array(_4), a3 = stringToUTF8Array(e, n3, 0, n3.length);
    return t7 && (n3.length = a3), n3;
  }, FS_stdin_getChar = () => {
    if (!FS_stdin_getChar_buffer.length) {
      var e = null;
      if (ENVIRONMENT_IS_NODE) {
        var t7 = 256, r2 = Buffer.alloc(t7), _4 = 0, n3 = process.stdin.fd;
        try {
          _4 = fs.readSync(n3, r2, 0, t7);
        } catch (a3) {
          if (a3.toString().includes("EOF")) _4 = 0;
          else throw a3;
        }
        _4 > 0 && (e = r2.slice(0, _4).toString("utf-8"));
      } else globalThis.window?.prompt && (e = window.prompt("Input: "), e !== null && (e += `
`));
      if (!e) return null;
      FS_stdin_getChar_buffer = intArrayFromString(e, true);
    }
    return FS_stdin_getChar_buffer.shift();
  }, TTY = { ttys: [], init() {
  }, shutdown() {
  }, register(e, t7) {
    TTY.ttys[e] = { input: [], output: [], ops: t7 }, FS.registerDevice(e, TTY.stream_ops);
  }, stream_ops: { open(e) {
    var t7 = TTY.ttys[e.node.rdev];
    if (!t7) throw new FS.ErrnoError(43);
    e.tty = t7, e.seekable = false;
  }, close(e) {
    e.tty.ops.fsync(e.tty);
  }, fsync(e) {
    e.tty.ops.fsync(e.tty);
  }, read(e, t7, r2, _4, n3) {
    if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
    for (var a3 = 0, i4 = 0; i4 < _4; i4++) {
      var l3;
      try {
        l3 = e.tty.ops.get_char(e.tty);
      } catch {
        throw new FS.ErrnoError(29);
      }
      if (l3 === void 0 && a3 === 0) throw new FS.ErrnoError(6);
      if (l3 == null) break;
      a3++, t7[r2 + i4] = l3;
    }
    return a3 && (e.node.atime = Date.now()), a3;
  }, write(e, t7, r2, _4, n3) {
    if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
    try {
      for (var a3 = 0; a3 < _4; a3++) e.tty.ops.put_char(e.tty, t7[r2 + a3]);
    } catch {
      throw new FS.ErrnoError(29);
    }
    return _4 && (e.node.mtime = e.node.ctime = Date.now()), a3;
  } }, default_tty_ops: { get_char(e) {
    return FS_stdin_getChar();
  }, put_char(e, t7) {
    t7 === null || t7 === 10 ? (out(UTF8ArrayToString(e.output)), e.output = []) : t7 != 0 && e.output.push(t7);
  }, fsync(e) {
    e.output?.length > 0 && (out(UTF8ArrayToString(e.output)), e.output = []);
  }, ioctl_tcgets(e) {
    return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
  }, ioctl_tcsets(e, t7, r2) {
    return 0;
  }, ioctl_tiocgwinsz(e) {
    return [24, 80];
  } }, default_tty1_ops: { put_char(e, t7) {
    t7 === null || t7 === 10 ? (err(UTF8ArrayToString(e.output)), e.output = []) : t7 != 0 && e.output.push(t7);
  }, fsync(e) {
    e.output?.length > 0 && (err(UTF8ArrayToString(e.output)), e.output = []);
  } } }, zeroMemory = (e, t7) => HEAPU8.fill(0, e, e + t7), mmapAlloc = (e) => {
    e = alignMemory(e, 65536);
    var t7 = _emscripten_builtin_memalign(65536, e);
    return t7 && zeroMemory(t7, e), t7;
  }, MEMFS = { ops_table: null, mount(e) {
    return MEMFS.createNode(null, "/", 16895, 0);
  }, createNode(e, t7, r2, _4) {
    if (FS.isBlkdev(r2) || FS.isFIFO(r2)) throw new FS.ErrnoError(63);
    MEMFS.ops_table || (MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } });
    var n3 = FS.createNode(e, t7, r2, _4);
    return FS.isDir(n3.mode) ? (n3.node_ops = MEMFS.ops_table.dir.node, n3.stream_ops = MEMFS.ops_table.dir.stream, n3.contents = {}) : FS.isFile(n3.mode) ? (n3.node_ops = MEMFS.ops_table.file.node, n3.stream_ops = MEMFS.ops_table.file.stream, n3.usedBytes = 0, n3.contents = MEMFS.emptyFileContents ?? (MEMFS.emptyFileContents = new Uint8Array(0))) : FS.isLink(n3.mode) ? (n3.node_ops = MEMFS.ops_table.link.node, n3.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(n3.mode) && (n3.node_ops = MEMFS.ops_table.chrdev.node, n3.stream_ops = MEMFS.ops_table.chrdev.stream), n3.atime = n3.mtime = n3.ctime = Date.now(), e && (e.contents[t7] = n3, e.atime = e.mtime = e.ctime = n3.atime), n3;
  }, getFileDataAsTypedArray(e) {
    return e.contents.subarray(0, e.usedBytes);
  }, expandFileStorage(e, t7) {
    var r2 = e.contents.length;
    if (!(r2 >= t7)) {
      var _4 = 1024 * 1024;
      t7 = Math.max(t7, r2 * (r2 < _4 ? 2 : 1.125) >>> 0), r2 && (t7 = Math.max(t7, 256));
      var n3 = MEMFS.getFileDataAsTypedArray(e);
      e.contents = new Uint8Array(t7), e.contents.set(n3);
    }
  }, resizeFileStorage(e, t7) {
    if (e.usedBytes != t7) {
      var r2 = e.contents;
      e.contents = new Uint8Array(t7), e.contents.set(r2.subarray(0, Math.min(t7, e.usedBytes))), e.usedBytes = t7;
    }
  }, node_ops: { getattr(e) {
    var t7 = {};
    return t7.dev = FS.isChrdev(e.mode) ? e.id : 1, t7.ino = e.id, t7.mode = e.mode, t7.nlink = 1, t7.uid = 0, t7.gid = 0, t7.rdev = e.rdev, FS.isDir(e.mode) ? t7.size = 4096 : FS.isFile(e.mode) ? t7.size = e.usedBytes : FS.isLink(e.mode) ? t7.size = e.link.length : t7.size = 0, t7.atime = new Date(e.atime), t7.mtime = new Date(e.mtime), t7.ctime = new Date(e.ctime), t7.blksize = 4096, t7.blocks = Math.ceil(t7.size / t7.blksize), t7;
  }, setattr(e, t7) {
    for (let r2 of ["mode", "atime", "mtime", "ctime"]) t7[r2] != null && (e[r2] = t7[r2]);
    t7.size !== void 0 && MEMFS.resizeFileStorage(e, t7.size);
  }, lookup(e, t7) {
    throw MEMFS.doesNotExistError || (MEMFS.doesNotExistError = new FS.ErrnoError(44), MEMFS.doesNotExistError.stack = "<generic error, no stack>"), MEMFS.doesNotExistError;
  }, mknod(e, t7, r2, _4) {
    return MEMFS.createNode(e, t7, r2, _4);
  }, rename(e, t7, r2) {
    var _4;
    try {
      _4 = FS.lookupNode(t7, r2);
    } catch {
    }
    if (_4) {
      if (FS.isDir(e.mode)) for (var n3 in _4.contents) throw new FS.ErrnoError(55);
      FS.hashRemoveNode(_4);
    }
    delete e.parent.contents[e.name], t7.contents[r2] = e, e.name = r2, t7.ctime = t7.mtime = e.parent.ctime = e.parent.mtime = Date.now();
  }, unlink(e, t7) {
    delete e.contents[t7], e.ctime = e.mtime = Date.now();
  }, rmdir(e, t7) {
    var r2 = FS.lookupNode(e, t7);
    for (var _4 in r2.contents) throw new FS.ErrnoError(55);
    delete e.contents[t7], e.ctime = e.mtime = Date.now();
  }, readdir(e) {
    return [".", "..", ...Object.keys(e.contents)];
  }, symlink(e, t7, r2) {
    var _4 = MEMFS.createNode(e, t7, 41471, 0);
    return _4.link = r2, _4;
  }, readlink(e) {
    if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
    return e.link;
  } }, stream_ops: { read(e, t7, r2, _4, n3) {
    var a3 = e.node.contents;
    if (n3 >= e.node.usedBytes) return 0;
    var i4 = Math.min(e.node.usedBytes - n3, _4);
    return t7.set(a3.subarray(n3, n3 + i4), r2), i4;
  }, write(e, t7, r2, _4, n3, a3) {
    if (t7.buffer === HEAP8.buffer && (a3 = false), !_4) return 0;
    var i4 = e.node;
    return i4.mtime = i4.ctime = Date.now(), a3 ? (i4.contents = t7.subarray(r2, r2 + _4), i4.usedBytes = _4) : i4.usedBytes === 0 && n3 === 0 ? (i4.contents = t7.slice(r2, r2 + _4), i4.usedBytes = _4) : (MEMFS.expandFileStorage(i4, n3 + _4), i4.contents.set(t7.subarray(r2, r2 + _4), n3), i4.usedBytes = Math.max(i4.usedBytes, n3 + _4)), _4;
  }, llseek(e, t7, r2) {
    var _4 = t7;
    if (r2 === 1 ? _4 += e.position : r2 === 2 && FS.isFile(e.node.mode) && (_4 += e.node.usedBytes), _4 < 0) throw new FS.ErrnoError(28);
    return _4;
  }, mmap(e, t7, r2, _4, n3) {
    if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
    var a3, i4, l3 = e.node.contents;
    if (!(n3 & 2) && l3.buffer === HEAP8.buffer) i4 = false, a3 = l3.byteOffset;
    else {
      if (i4 = true, a3 = mmapAlloc(t7), !a3) throw new FS.ErrnoError(48);
      l3 && ((r2 > 0 || r2 + t7 < l3.length) && (l3.subarray ? l3 = l3.subarray(r2, r2 + t7) : l3 = Array.prototype.slice.call(l3, r2, r2 + t7)), HEAP8.set(l3, a3));
    }
    return { ptr: a3, allocated: i4 };
  }, msync(e, t7, r2, _4, n3) {
    return MEMFS.stream_ops.write(e, t7, 0, _4, r2, false), 0;
  } } }, FS_modeStringToFlags = (e) => {
    if (typeof e != "string") return e;
    var t7 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, r2 = t7[e];
    if (typeof r2 > "u") throw new Error(`Unknown file open mode: ${e}`);
    return r2;
  }, FS_fileDataToTypedArray = (e) => (typeof e == "string" && (e = intArrayFromString(e, true)), e.subarray || (e = new Uint8Array(e)), e), FS_getMode = (e, t7) => {
    var r2 = 0;
    return e && (r2 |= 365), t7 && (r2 |= 146), r2;
  }, IDBFS = { dbs: {}, indexedDB: () => indexedDB, DB_VERSION: 21, DB_STORE_NAME: "FILE_DATA", queuePersist: (e) => {
    function t7() {
      e.idbPersistState === "again" ? r2() : (e.idbPersistState = 0, IDBFS.onAutoPersistStateChanged?.(false));
    }
    function r2() {
      e.idbPersistState = "idb", IDBFS.onAutoPersistStateChanged?.(true), IDBFS.syncfs(e, false, t7);
    }
    e.idbPersistState ? e.idbPersistState === "idb" && (e.idbPersistState = "again") : e.idbPersistState = setTimeout(r2, 0);
  }, mount: (e) => {
    var t7 = MEMFS.mount(e);
    if (e?.opts?.autoPersist) {
      e.idbPersistState = 0;
      var r2 = t7.node_ops;
      t7.node_ops = { ...t7.node_ops }, t7.node_ops.mknod = (_4, n3, a3, i4) => {
        var l3 = r2.mknod(_4, n3, a3, i4);
        return l3.node_ops = t7.node_ops, l3.idbfs_mount = t7.mount, l3.memfs_stream_ops = l3.stream_ops, l3.stream_ops = { ...l3.stream_ops }, l3.stream_ops.write = (o6, s5, c3, g6, d5, p6) => (o6.node.isModified = true, l3.memfs_stream_ops.write(o6, s5, c3, g6, d5, p6)), l3.stream_ops.close = (o6) => {
          var s5 = o6.node;
          if (s5.isModified && (IDBFS.queuePersist(s5.idbfs_mount), s5.isModified = false), s5.memfs_stream_ops.close) return s5.memfs_stream_ops.close(o6);
        }, IDBFS.queuePersist(t7.mount), l3;
      }, t7.node_ops.rmdir = (..._4) => (IDBFS.queuePersist(t7.mount), r2.rmdir(..._4)), t7.node_ops.symlink = (..._4) => (IDBFS.queuePersist(t7.mount), r2.symlink(..._4)), t7.node_ops.unlink = (..._4) => (IDBFS.queuePersist(t7.mount), r2.unlink(..._4)), t7.node_ops.rename = (..._4) => (IDBFS.queuePersist(t7.mount), r2.rename(..._4));
    }
    return t7;
  }, syncfs: (e, t7, r2) => {
    IDBFS.getLocalSet(e, (_4, n3) => {
      if (_4) return r2(_4);
      IDBFS.getRemoteSet(e, (a3, i4) => {
        if (a3) return r2(a3);
        var l3 = t7 ? i4 : n3, o6 = t7 ? n3 : i4;
        IDBFS.reconcile(l3, o6, r2);
      });
    });
  }, quit: () => {
    for (var e of Object.values(IDBFS.dbs)) e.close();
    IDBFS.dbs = {};
  }, getDB: (e, t7) => {
    var r2 = IDBFS.dbs[e];
    if (r2) return t7(null, r2);
    var _4;
    try {
      _4 = IDBFS.indexedDB().open(e, IDBFS.DB_VERSION);
    } catch (n3) {
      return t7(n3);
    }
    if (!_4) return t7("Unable to connect to IndexedDB");
    _4.onupgradeneeded = (n3) => {
      var a3 = n3.target.result, i4 = n3.target.transaction, l3;
      a3.objectStoreNames.contains(IDBFS.DB_STORE_NAME) ? l3 = i4.objectStore(IDBFS.DB_STORE_NAME) : l3 = a3.createObjectStore(IDBFS.DB_STORE_NAME), l3.indexNames.contains("timestamp") || l3.createIndex("timestamp", "timestamp", { unique: false });
    }, _4.onsuccess = () => {
      r2 = _4.result, IDBFS.dbs[e] = r2, t7(null, r2);
    }, _4.onerror = (n3) => {
      t7(n3.target.error), n3.preventDefault();
    };
  }, getLocalSet: (e, t7) => {
    var r2 = {};
    function _4(o6) {
      return o6 !== "." && o6 !== "..";
    }
    function n3(o6) {
      return (s5) => PATH.join2(o6, s5);
    }
    for (var a3 = FS.readdir(e.mountpoint).filter(_4).map(n3(e.mountpoint)); a3.length; ) {
      var i4 = a3.pop(), l3;
      try {
        l3 = FS.lstat(i4);
      } catch (o6) {
        return t7(o6);
      }
      FS.isDir(l3.mode) && a3.push(...FS.readdir(i4).filter(_4).map(n3(i4))), r2[i4] = { timestamp: l3.mtime };
    }
    return t7(null, { type: "local", entries: r2 });
  }, getRemoteSet: (e, t7) => {
    var r2 = {};
    IDBFS.getDB(e.mountpoint, (_4, n3) => {
      if (_4) return t7(_4);
      try {
        var a3 = n3.transaction([IDBFS.DB_STORE_NAME], "readonly");
        a3.onerror = (o6) => {
          t7(o6.target.error), o6.preventDefault();
        };
        var i4 = a3.objectStore(IDBFS.DB_STORE_NAME), l3 = i4.index("timestamp");
        l3.openKeyCursor().onsuccess = (o6) => {
          var s5 = o6.target.result;
          if (!s5) return t7(null, { type: "remote", db: n3, entries: r2 });
          r2[s5.primaryKey] = { timestamp: s5.key }, s5.continue();
        };
      } catch (o6) {
        return t7(o6);
      }
    });
  }, loadLocalEntry: (e, t7) => {
    var r2, _4;
    try {
      var n3 = FS.lookupPath(e);
      _4 = n3.node, r2 = FS.lstat(e);
    } catch (a3) {
      return t7(a3);
    }
    return FS.isDir(r2.mode) ? t7(null, { timestamp: r2.mtime, mode: r2.mode }) : FS.isLink(r2.mode) ? t7(null, { timestamp: r2.mtime, mode: r2.mode, link: _4.link }) : FS.isFile(r2.mode) ? (_4.contents = MEMFS.getFileDataAsTypedArray(_4), t7(null, { timestamp: r2.mtime, mode: r2.mode, contents: _4.contents })) : t7(new Error("node type not supported"));
  }, storeLocalEntry: (e, t7, r2) => {
    try {
      if (FS.isDir(t7.mode)) FS.mkdirTree(e, t7.mode);
      else if (FS.isLink(t7.mode)) FS.symlink(t7.link, e);
      else if (FS.isFile(t7.mode)) FS.writeFile(e, t7.contents, { canOwn: true });
      else return r2(new Error("node type not supported"));
      FS.chmod(e, t7.mode), FS.utime(e, t7.timestamp, t7.timestamp);
    } catch (_4) {
      return r2(_4);
    }
    r2(null);
  }, removeLocalEntry: (e, t7) => {
    try {
      var r2 = FS.lstat(e);
      FS.isDir(r2.mode) ? FS.rmdir(e) : FS.unlink(e);
    } catch (_4) {
      return t7(_4);
    }
    t7(null);
  }, loadRemoteEntry: (e, t7, r2) => {
    var _4 = e.get(t7);
    _4.onsuccess = (n3) => r2(null, n3.target.result), _4.onerror = (n3) => {
      r2(n3.target.error), n3.preventDefault();
    };
  }, storeRemoteEntry: (e, t7, r2, _4) => {
    try {
      var n3 = e.put(r2, t7);
    } catch (a3) {
      _4(a3);
      return;
    }
    n3.onsuccess = (a3) => _4(), n3.onerror = (a3) => {
      _4(a3.target.error), a3.preventDefault();
    };
  }, removeRemoteEntry: (e, t7, r2) => {
    var _4 = e.delete(t7);
    _4.onsuccess = (n3) => r2(), _4.onerror = (n3) => {
      r2(n3.target.error), n3.preventDefault();
    };
  }, reconcile: (e, t7, r2) => {
    var _4 = 0, n3 = [];
    for (var [a3, i4] of Object.entries(e.entries)) {
      var l3 = t7.entries[a3];
      (!l3 || i4.timestamp.getTime() != l3.timestamp.getTime()) && (n3.push(a3), _4++);
    }
    var o6 = [];
    for (var a3 of Object.keys(t7.entries)) e.entries[a3] || (o6.push(a3), _4++);
    if (!_4) return r2(null);
    var s5 = false, c3 = e.type === "remote" ? e.db : t7.db, g6 = c3.transaction([IDBFS.DB_STORE_NAME], "readwrite"), d5 = g6.objectStore(IDBFS.DB_STORE_NAME);
    function p6(m7) {
      if (m7 && !s5) return s5 = true, r2(m7);
    }
    g6.onerror = g6.onabort = (m7) => {
      p6(m7.target.error), m7.preventDefault();
    }, g6.oncomplete = (m7) => {
      s5 || r2(null);
    };
    for (let m7 of n3.sort()) t7.type === "local" ? IDBFS.loadRemoteEntry(d5, m7, (M2, S4) => {
      if (M2) return p6(M2);
      IDBFS.storeLocalEntry(m7, S4, p6);
    }) : IDBFS.loadLocalEntry(m7, (M2, S4) => {
      if (M2) return p6(M2);
      IDBFS.storeRemoteEntry(d5, m7, S4, p6);
    });
    for (var u3 of o6.sort().reverse()) t7.type === "local" ? IDBFS.removeLocalEntry(u3, p6) : IDBFS.removeRemoteEntry(d5, u3, p6);
  } }, ERRNO_CODES = { EPERM: 63, ENOENT: 44, ESRCH: 71, EINTR: 27, EIO: 29, ENXIO: 60, E2BIG: 1, ENOEXEC: 45, EBADF: 8, ECHILD: 12, EAGAIN: 6, EWOULDBLOCK: 6, ENOMEM: 48, EACCES: 2, EFAULT: 21, ENOTBLK: 105, EBUSY: 10, EEXIST: 20, EXDEV: 75, ENODEV: 43, ENOTDIR: 54, EISDIR: 31, EINVAL: 28, ENFILE: 41, EMFILE: 33, ENOTTY: 59, ETXTBSY: 74, EFBIG: 22, ENOSPC: 51, ESPIPE: 70, EROFS: 69, EMLINK: 34, EPIPE: 64, EDOM: 18, ERANGE: 68, ENOMSG: 49, EIDRM: 24, ECHRNG: 106, EL2NSYNC: 156, EL3HLT: 107, EL3RST: 108, ELNRNG: 109, EUNATCH: 110, ENOCSI: 111, EL2HLT: 112, EDEADLK: 16, ENOLCK: 46, EBADE: 113, EBADR: 114, EXFULL: 115, ENOANO: 104, EBADRQC: 103, EBADSLT: 102, EDEADLOCK: 16, EBFONT: 101, ENOSTR: 100, ENODATA: 116, ETIME: 117, ENOSR: 118, ENONET: 119, ENOPKG: 120, EREMOTE: 121, ENOLINK: 47, EADV: 122, ESRMNT: 123, ECOMM: 124, EPROTO: 65, EMULTIHOP: 36, EDOTDOT: 125, EBADMSG: 9, ENOTUNIQ: 126, EBADFD: 127, EREMCHG: 128, ELIBACC: 129, ELIBBAD: 130, ELIBSCN: 131, ELIBMAX: 132, ELIBEXEC: 133, ENOSYS: 52, ENOTEMPTY: 55, ENAMETOOLONG: 37, ELOOP: 32, EOPNOTSUPP: 138, EPFNOSUPPORT: 139, ECONNRESET: 15, ENOBUFS: 42, EAFNOSUPPORT: 5, EPROTOTYPE: 67, ENOTSOCK: 57, ENOPROTOOPT: 50, ESHUTDOWN: 140, ECONNREFUSED: 14, EADDRINUSE: 3, ECONNABORTED: 13, ENETUNREACH: 40, ENETDOWN: 38, ETIMEDOUT: 73, EHOSTDOWN: 142, EHOSTUNREACH: 23, EINPROGRESS: 26, EALREADY: 7, EDESTADDRREQ: 17, EMSGSIZE: 35, EPROTONOSUPPORT: 66, ESOCKTNOSUPPORT: 137, EADDRNOTAVAIL: 4, ENETRESET: 39, EISCONN: 30, ENOTCONN: 53, ETOOMANYREFS: 141, EUSERS: 136, EDQUOT: 19, ESTALE: 72, ENOTSUP: 138, ENOMEDIUM: 148, EILSEQ: 25, EOVERFLOW: 61, ECANCELED: 11, ENOTRECOVERABLE: 56, EOWNERDEAD: 62, ESTRPIPE: 135 }, NODEFS = { isWindows: false, staticInit() {
    NODEFS.isWindows = !!process.platform.match(/^win/);
    var e = { fs: require("fs").constants }.fs;
    NODEFS.flagsForNodeMap = { 1024: e.O_APPEND, 64: e.O_CREAT, 128: e.O_EXCL, 256: e.O_NOCTTY, 0: e.O_RDONLY, 2: e.O_RDWR, 4096: e.O_SYNC, 512: e.O_TRUNC, 1: e.O_WRONLY, 131072: e.O_NOFOLLOW };
  }, convertNodeCode(e) {
    var t7 = e.code;
    return ERRNO_CODES[t7];
  }, tryFSOperation(e) {
    try {
      return e();
    } catch (t7) {
      throw t7.code ? t7.code === "UNKNOWN" ? new FS.ErrnoError(28) : new FS.ErrnoError(NODEFS.convertNodeCode(t7)) : t7;
    }
  }, mount(e) {
    return NODEFS.createNode(null, "/", NODEFS.getMode(e.opts.root), 0);
  }, createNode(e, t7, r2, _4) {
    if (!FS.isDir(r2) && !FS.isFile(r2) && !FS.isLink(r2)) throw new FS.ErrnoError(28);
    var n3 = FS.createNode(e, t7, r2);
    return n3.node_ops = NODEFS.node_ops, n3.stream_ops = NODEFS.stream_ops, n3;
  }, getMode(e) {
    return NODEFS.tryFSOperation(() => {
      var t7 = fs.lstatSync(e).mode;
      return NODEFS.isWindows && (t7 |= (t7 & 292) >> 2), t7;
    });
  }, realPath(e) {
    for (var t7 = []; e.parent !== e; ) t7.push(e.name), e = e.parent;
    return t7.push(e.mount.opts.root), t7.reverse(), PATH.join(...t7);
  }, flagsForNode(e) {
    e &= -2097153, e &= -2049, e &= -32769, e &= -524289, e &= -65537;
    var t7 = 0;
    for (var r2 in NODEFS.flagsForNodeMap) e & r2 && (t7 |= NODEFS.flagsForNodeMap[r2], e ^= r2);
    if (e) throw new FS.ErrnoError(28);
    return t7;
  }, getattr(e, t7) {
    var r2 = NODEFS.tryFSOperation(e);
    return NODEFS.isWindows && (r2.blksize || (r2.blksize = 4096), r2.blocks || (r2.blocks = (r2.size + r2.blksize - 1) / r2.blksize | 0), r2.mode |= (r2.mode & 292) >> 2), { dev: r2.dev, ino: t7.id, mode: r2.mode, nlink: r2.nlink, uid: r2.uid, gid: r2.gid, rdev: r2.rdev, size: r2.size, atime: r2.atime, mtime: r2.mtime, ctime: r2.ctime, blksize: r2.blksize, blocks: r2.blocks };
  }, setattr(e, t7, r2, _4, n3, a3, i4) {
    NODEFS.tryFSOperation(() => {
      if (r2.mode !== void 0) {
        var l3 = r2.mode;
        NODEFS.isWindows && (l3 &= 384), _4(e, l3), t7.mode = r2.mode;
      }
      if (typeof (r2.atime ?? r2.mtime) == "number") {
        var o6 = new Date(r2.atime ?? i4(e).atime), s5 = new Date(r2.mtime ?? i4(e).mtime);
        n3(e, o6, s5);
      }
      r2.size !== void 0 && a3(e, r2.size);
    });
  }, node_ops: { getattr(e) {
    var t7 = NODEFS.realPath(e);
    return NODEFS.getattr(() => fs.lstatSync(t7), e);
  }, setattr(e, t7) {
    var r2 = NODEFS.realPath(e);
    if (t7.mode != null && t7.dontFollow) throw new FS.ErrnoError(52);
    var _4 = t7.dontFollow ? fs.lutimesSync : fs.utimesSync;
    NODEFS.setattr(r2, e, t7, fs.chmodSync, _4, fs.truncateSync, fs.lstatSync);
  }, lookup(e, t7) {
    var r2 = PATH.join2(NODEFS.realPath(e), t7), _4 = NODEFS.getMode(r2);
    return NODEFS.createNode(e, t7, _4);
  }, mknod(e, t7, r2, _4) {
    var n3 = NODEFS.createNode(e, t7, r2, _4), a3 = NODEFS.realPath(n3);
    return NODEFS.tryFSOperation(() => {
      FS.isDir(n3.mode) ? fs.mkdirSync(a3, n3.mode) : fs.writeFileSync(a3, "", { mode: n3.mode });
    }), n3;
  }, rename(e, t7, r2) {
    var _4 = NODEFS.realPath(e), n3 = PATH.join2(NODEFS.realPath(t7), r2);
    try {
      FS.unlink(n3);
    } catch {
    }
    NODEFS.tryFSOperation(() => fs.renameSync(_4, n3)), e.name = r2;
  }, unlink(e, t7) {
    var r2 = PATH.join2(NODEFS.realPath(e), t7);
    NODEFS.tryFSOperation(() => fs.unlinkSync(r2));
  }, rmdir(e, t7) {
    var r2 = PATH.join2(NODEFS.realPath(e), t7);
    NODEFS.tryFSOperation(() => fs.rmdirSync(r2));
  }, readdir(e) {
    var t7 = NODEFS.realPath(e);
    return NODEFS.tryFSOperation(() => fs.readdirSync(t7));
  }, symlink(e, t7, r2) {
    var _4 = PATH.join2(NODEFS.realPath(e), t7);
    NODEFS.tryFSOperation(() => fs.symlinkSync(r2, _4));
  }, readlink(e) {
    var t7 = NODEFS.realPath(e);
    return NODEFS.tryFSOperation(() => fs.readlinkSync(t7));
  }, statfs(e) {
    var t7 = NODEFS.tryFSOperation(() => fs.statfsSync(e));
    return t7.frsize = t7.bsize, t7;
  } }, stream_ops: { getattr(e) {
    return NODEFS.getattr(() => fs.fstatSync(e.nfd), e.node);
  }, setattr(e, t7) {
    NODEFS.setattr(e.nfd, e.node, t7, fs.fchmodSync, fs.futimesSync, fs.ftruncateSync, fs.fstatSync);
  }, open(e) {
    var t7 = NODEFS.realPath(e.node);
    NODEFS.tryFSOperation(() => {
      e.shared.refcount = 1, e.nfd = fs.openSync(t7, NODEFS.flagsForNode(e.flags));
    });
  }, close(e) {
    NODEFS.tryFSOperation(() => {
      e.nfd && --e.shared.refcount === 0 && fs.closeSync(e.nfd);
    });
  }, dup(e) {
    e.shared.refcount++;
  }, read(e, t7, r2, _4, n3) {
    return NODEFS.tryFSOperation(() => fs.readSync(e.nfd, t7, r2, _4, n3));
  }, write(e, t7, r2, _4, n3) {
    return NODEFS.tryFSOperation(() => fs.writeSync(e.nfd, t7, r2, _4, n3));
  }, llseek(e, t7, r2) {
    var _4 = t7;
    if (r2 === 1 ? _4 += e.position : r2 === 2 && FS.isFile(e.node.mode) && NODEFS.tryFSOperation(() => {
      var n3 = fs.fstatSync(e.nfd);
      _4 += n3.size;
    }), _4 < 0) throw new FS.ErrnoError(28);
    return _4;
  }, mmap(e, t7, r2, _4, n3) {
    if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
    var a3 = mmapAlloc(t7);
    return NODEFS.stream_ops.read(e, HEAP8, a3, t7, r2), { ptr: a3, allocated: true };
  }, msync(e, t7, r2, _4, n3) {
    return NODEFS.stream_ops.write(e, t7, 0, _4, r2, false), 0;
  } } }, PROXYFS = { mount(e) {
    return PROXYFS.createNode(null, "/", e.opts.fs.lstat(e.opts.root).mode, 0);
  }, createNode(e, t7, r2, _4) {
    if (!FS.isDir(r2) && !FS.isFile(r2) && !FS.isLink(r2)) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
    var n3 = FS.createNode(e, t7, r2);
    return n3.node_ops = PROXYFS.node_ops, n3.stream_ops = PROXYFS.stream_ops, n3;
  }, realPath(e) {
    for (var t7 = []; e.parent !== e; ) t7.push(e.name), e = e.parent;
    return t7.push(e.mount.opts.root), t7.reverse(), PATH.join(...t7);
  }, node_ops: { getattr(e) {
    var t7 = PROXYFS.realPath(e), r2;
    try {
      r2 = e.mount.opts.fs.lstat(t7);
    } catch (_4) {
      throw _4.code ? new FS.ErrnoError(ERRNO_CODES[_4.code]) : _4;
    }
    return { dev: r2.dev, ino: r2.ino, mode: r2.mode, nlink: r2.nlink, uid: r2.uid, gid: r2.gid, rdev: r2.rdev, size: r2.size, atime: r2.atime, mtime: r2.mtime, ctime: r2.ctime, blksize: r2.blksize, blocks: r2.blocks };
  }, setattr(e, t7) {
    var r2 = PROXYFS.realPath(e);
    try {
      if (t7.mode !== void 0 && (e.mount.opts.fs.chmod(r2, t7.mode), e.mode = t7.mode), t7.atime || t7.mtime) {
        var _4 = new Date(t7.atime || t7.mtime), n3 = new Date(t7.mtime || t7.atime);
        e.mount.opts.fs.utime(r2, _4, n3);
      }
      t7.size !== void 0 && e.mount.opts.fs.truncate(r2, t7.size);
    } catch (a3) {
      throw a3.code ? new FS.ErrnoError(ERRNO_CODES[a3.code]) : a3;
    }
  }, lookup(e, t7) {
    try {
      var r2 = PATH.join2(PROXYFS.realPath(e), t7), _4 = e.mount.opts.fs.lstat(r2).mode, n3 = PROXYFS.createNode(e, t7, _4);
      return n3;
    } catch (a3) {
      throw a3.code ? new FS.ErrnoError(ERRNO_CODES[a3.code]) : a3;
    }
  }, mknod(e, t7, r2, _4) {
    var n3 = PROXYFS.createNode(e, t7, r2, _4), a3 = PROXYFS.realPath(n3);
    try {
      FS.isDir(n3.mode) ? n3.mount.opts.fs.mkdir(a3, n3.mode) : n3.mount.opts.fs.writeFile(a3, "", { mode: n3.mode });
    } catch (i4) {
      throw i4.code ? new FS.ErrnoError(ERRNO_CODES[i4.code]) : i4;
    }
    return n3;
  }, rename(e, t7, r2) {
    var _4 = PROXYFS.realPath(e), n3 = PATH.join2(PROXYFS.realPath(t7), r2);
    try {
      e.mount.opts.fs.rename(_4, n3), e.name = r2;
    } catch (a3) {
      throw a3.code ? new FS.ErrnoError(ERRNO_CODES[a3.code]) : a3;
    }
  }, unlink(e, t7) {
    var r2 = PATH.join2(PROXYFS.realPath(e), t7);
    try {
      e.mount.opts.fs.unlink(r2);
    } catch (_4) {
      throw _4.code ? new FS.ErrnoError(ERRNO_CODES[_4.code]) : _4;
    }
  }, rmdir(e, t7) {
    var r2 = PATH.join2(PROXYFS.realPath(e), t7);
    try {
      e.mount.opts.fs.rmdir(r2);
    } catch (_4) {
      throw _4.code ? new FS.ErrnoError(ERRNO_CODES[_4.code]) : _4;
    }
  }, readdir(e) {
    var t7 = PROXYFS.realPath(e);
    try {
      return e.mount.opts.fs.readdir(t7);
    } catch (r2) {
      throw r2.code ? new FS.ErrnoError(ERRNO_CODES[r2.code]) : r2;
    }
  }, symlink(e, t7, r2) {
    var _4 = PATH.join2(PROXYFS.realPath(e), t7);
    try {
      e.mount.opts.fs.symlink(r2, _4);
    } catch (n3) {
      throw n3.code ? new FS.ErrnoError(ERRNO_CODES[n3.code]) : n3;
    }
  }, readlink(e) {
    var t7 = PROXYFS.realPath(e);
    try {
      return e.mount.opts.fs.readlink(t7);
    } catch (r2) {
      throw r2.code ? new FS.ErrnoError(ERRNO_CODES[r2.code]) : r2;
    }
  } }, stream_ops: { open(e) {
    var t7 = PROXYFS.realPath(e.node);
    try {
      e.nfd = e.node.mount.opts.fs.open(t7, e.flags);
    } catch (r2) {
      throw r2.code ? new FS.ErrnoError(ERRNO_CODES[r2.code]) : r2;
    }
  }, close(e) {
    try {
      e.node.mount.opts.fs.close(e.nfd);
    } catch (t7) {
      throw t7.code ? new FS.ErrnoError(ERRNO_CODES[t7.code]) : t7;
    }
  }, read(e, t7, r2, _4, n3) {
    try {
      return e.node.mount.opts.fs.read(e.nfd, t7, r2, _4, n3);
    } catch (a3) {
      throw a3.code ? new FS.ErrnoError(ERRNO_CODES[a3.code]) : a3;
    }
  }, write(e, t7, r2, _4, n3) {
    try {
      return e.node.mount.opts.fs.write(e.nfd, t7, r2, _4, n3);
    } catch (a3) {
      throw a3.code ? new FS.ErrnoError(ERRNO_CODES[a3.code]) : a3;
    }
  }, llseek(e, t7, r2) {
    var _4 = t7;
    if (r2 === 1) _4 += e.position;
    else if (r2 === 2 && FS.isFile(e.node.mode)) try {
      var n3 = e.node.node_ops.getattr(e.node);
      _4 += n3.size;
    } catch (a3) {
      throw new FS.ErrnoError(ERRNO_CODES[a3.code]);
    }
    if (_4 < 0) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
    return _4;
  } } }, FS_createDataFile = (...e) => FS.createDataFile(...e), getUniqueRunDependency = (e) => e, dependenciesPromise = null, resolveRunDependencies = async () => dependenciesPromise, runDependencies = 0, dependenciesPromiseResolve = null, removeRunDependency = (e) => {
    runDependencies--, Module.monitorRunDependencies?.(runDependencies), runDependencies || dependenciesPromiseResolve();
  }, addRunDependency = (e) => {
    runDependencies || (dependenciesPromise = new Promise((t7) => dependenciesPromiseResolve = t7)), runDependencies++, Module.monitorRunDependencies?.(runDependencies);
  }, FS_handledByPreloadPlugin = async (e, t7) => {
    typeof Browser < "u" && Browser.init();
    for (var r2 of preloadPlugins) if (r2.canHandle(t7)) return r2.handle(e, t7);
    return e;
  }, FS_preloadFile = async (e, t7, r2, _4, n3, a3, i4, l3) => {
    var o6 = t7 ? PATH_FS.resolve(PATH.join2(e, t7)) : e, s5 = getUniqueRunDependency(`cp ${o6}`);
    addRunDependency(s5);
    try {
      var c3 = r2;
      typeof r2 == "string" && (c3 = await asyncLoad(r2)), c3 = await FS_handledByPreloadPlugin(c3, o6), l3?.(), a3 || FS_createDataFile(e, t7, c3, _4, n3, i4);
    } finally {
      removeRunDependency(s5);
    }
  }, FS_createPreloadedFile = (e, t7, r2, _4, n3, a3, i4, l3, o6, s5) => {
    FS_preloadFile(e, t7, r2, _4, n3, l3, o6, s5).then(a3).catch(i4);
  }, FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, filesystems: null, syncFSRequests: 0, ErrnoError: class {
    constructor(e) {
      P(this, "name", "ErrnoError");
      this.errno = e;
    }
  }, FSStream: class {
    constructor() {
      P(this, "shared", {});
    }
    get object() {
      return this.node;
    }
    set object(e) {
      this.node = e;
    }
    get isRead() {
      return (this.flags & 2097155) !== 1;
    }
    get isWrite() {
      return (this.flags & 2097155) !== 0;
    }
    get isAppend() {
      return this.flags & 1024;
    }
    get flags() {
      return this.shared.flags;
    }
    set flags(e) {
      this.shared.flags = e;
    }
    get position() {
      return this.shared.position;
    }
    set position(e) {
      this.shared.position = e;
    }
  }, FSNode: class {
    constructor(e, t7, r2, _4) {
      P(this, "node_ops", {});
      P(this, "stream_ops", {});
      P(this, "readMode", 365);
      P(this, "writeMode", 146);
      P(this, "mounted", null);
      e || (e = this), this.parent = e, this.mount = e.mount, this.id = FS.nextInode++, this.name = t7, this.mode = r2, this.rdev = _4, this.atime = this.mtime = this.ctime = Date.now();
    }
    get read() {
      return (this.mode & this.readMode) === this.readMode;
    }
    set read(e) {
      e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
    }
    get write() {
      return (this.mode & this.writeMode) === this.writeMode;
    }
    set write(e) {
      e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
    }
    get isFolder() {
      return FS.isDir(this.mode);
    }
    get isDevice() {
      return FS.isChrdev(this.mode);
    }
    addListener(e, t7 = false) {
      var r2 = { cb: e, exclusive: t7 }, _4 = this.listeners ?? (this.listeners = /* @__PURE__ */ new Set());
      return _4.add(r2), { listeners: _4, entry: r2 };
    }
    notifyListeners(e) {
      if (this.listeners) {
        var t7;
        for (var r2 of this.listeners) r2.exclusive ? (t7 || (t7 = [])).push(r2) : r2.cb(e);
        if (t7) {
          var _4 = (this.exclTurn || 0) % t7.length;
          this.exclTurn = _4 + 1, t7[_4].cb(e);
        }
      }
    }
  }, lookupPath(e, t7 = {}) {
    if (!e) throw new FS.ErrnoError(44);
    t7.follow_mount ?? (t7.follow_mount = true), PATH.isAbs(e) || (e = FS.cwd() + "/" + e);
    e: for (var r2 = 0; r2 < 40; r2++) {
      for (var _4 = e.split("/").filter((s5) => !!s5), n3 = FS.root, a3 = "/", i4 = 0; i4 < _4.length; i4++) {
        var l3 = i4 === _4.length - 1;
        if (l3 && t7.parent) break;
        if (_4[i4] !== ".") {
          if (_4[i4] === "..") {
            if (a3 = PATH.dirname(a3), FS.isRoot(n3)) {
              e = a3 + "/" + _4.slice(i4 + 1).join("/"), r2--;
              continue e;
            } else n3 = n3.parent;
            continue;
          }
          a3 = PATH.join2(a3, _4[i4]);
          try {
            n3 = FS.lookupNode(n3, _4[i4]);
          } catch (s5) {
            if (s5?.errno === 44 && l3 && t7.noent_okay) return { path: a3 };
            throw s5;
          }
          if (FS.isMountpoint(n3) && (!l3 || t7.follow_mount) && (n3 = n3.mounted.root), FS.isLink(n3.mode) && (!l3 || t7.follow)) {
            if (!n3.node_ops.readlink) throw new FS.ErrnoError(52);
            var o6 = n3.node_ops.readlink(n3);
            PATH.isAbs(o6) || (o6 = PATH.dirname(a3) + "/" + o6), e = o6 + "/" + _4.slice(i4 + 1).join("/");
            continue e;
          }
        }
      }
      return { path: a3, node: n3 };
    }
    throw new FS.ErrnoError(32);
  }, getPath(e) {
    for (var t7; ; ) {
      if (FS.isRoot(e)) {
        var r2 = e.mount.mountpoint;
        return t7 ? r2[r2.length - 1] !== "/" ? `${r2}/${t7}` : r2 + t7 : r2;
      }
      t7 = t7 ? `${e.name}/${t7}` : e.name, e = e.parent;
    }
  }, hashName(e, t7) {
    for (var r2 = 0, _4 = 0; _4 < t7.length; _4++) r2 = (r2 << 5) - r2 + t7.charCodeAt(_4) | 0;
    return (e + r2 >>> 0) % FS.nameTable.length;
  }, hashAddNode(e) {
    var t7 = FS.hashName(e.parent.id, e.name);
    e.name_next = FS.nameTable[t7], FS.nameTable[t7] = e;
  }, hashRemoveNode(e) {
    var t7 = FS.hashName(e.parent.id, e.name);
    if (FS.nameTable[t7] === e) FS.nameTable[t7] = e.name_next;
    else for (var r2 = FS.nameTable[t7]; r2; ) {
      if (r2.name_next === e) {
        r2.name_next = e.name_next;
        break;
      }
      r2 = r2.name_next;
    }
  }, lookupNode(e, t7) {
    var r2 = FS.mayLookup(e);
    if (r2) throw new FS.ErrnoError(r2);
    for (var _4 = FS.hashName(e.id, t7), n3 = FS.nameTable[_4]; n3; n3 = n3.name_next) {
      var a3 = n3.name;
      if (n3.parent.id === e.id && a3 === t7) return n3;
    }
    return FS.lookup(e, t7);
  }, createNode(e, t7, r2, _4) {
    var n3 = new FS.FSNode(e, t7, r2, _4);
    return FS.hashAddNode(n3), n3;
  }, destroyNode(e) {
    FS.hashRemoveNode(e);
  }, isRoot(e) {
    return e === e.parent;
  }, isMountpoint(e) {
    return !!e.mounted;
  }, isFile(e) {
    return (e & 61440) === 32768;
  }, isDir(e) {
    return (e & 61440) === 16384;
  }, isLink(e) {
    return (e & 61440) === 40960;
  }, isChrdev(e) {
    return (e & 61440) === 8192;
  }, isBlkdev(e) {
    return (e & 61440) === 24576;
  }, isFIFO(e) {
    return (e & 61440) === 4096;
  }, isSocket(e) {
    return (e & 49152) === 49152;
  }, flagsToPermissionString(e) {
    var t7 = ["r", "w", "rw"][e & 3];
    return e & 512 && (t7 += "w"), t7;
  }, nodePermissions(e, t7) {
    return FS.ignorePermissions ? 0 : t7.includes("r") && !(e.mode & 292) || t7.includes("w") && !(e.mode & 146) || t7.includes("x") && !(e.mode & 73) ? 2 : 0;
  }, mayLookup(e) {
    if (!FS.isDir(e.mode)) return 54;
    var t7 = FS.nodePermissions(e, "x");
    return t7 || (e.node_ops.lookup ? 0 : 2);
  }, mayCreate(e, t7) {
    if (!FS.isDir(e.mode)) return 54;
    try {
      var r2 = FS.lookupNode(e, t7);
      return 20;
    } catch {
    }
    return FS.nodePermissions(e, "wx");
  }, mayDelete(e, t7, r2) {
    var _4;
    try {
      _4 = FS.lookupNode(e, t7);
    } catch (a3) {
      return a3.errno;
    }
    var n3 = FS.nodePermissions(e, "wx");
    if (n3) return n3;
    if (r2) {
      if (!FS.isDir(_4.mode)) return 54;
      if (FS.isRoot(_4) || FS.getPath(_4) === FS.cwd()) return 10;
    } else if (FS.isDir(_4.mode)) return 31;
    return 0;
  }, mayOpen(e, t7) {
    if (!e) return 44;
    if (FS.isLink(e.mode)) return 32;
    var r2 = FS.flagsToPermissionString(t7);
    return FS.isDir(e.mode) && (r2 !== "r" || t7 & 576) ? 31 : FS.nodePermissions(e, r2);
  }, checkOpExists(e, t7) {
    if (!e) throw new FS.ErrnoError(t7);
    return e;
  }, MAX_OPEN_FDS: 4096, nextfd() {
    for (var e = 0; e <= FS.MAX_OPEN_FDS; e++) if (!FS.streams[e]) return e;
    throw new FS.ErrnoError(33);
  }, getStreamChecked(e) {
    var t7 = FS.getStream(e);
    if (!t7) throw new FS.ErrnoError(8);
    return t7;
  }, getStream: (e) => FS.streams[e], createStream(e, t7 = -1) {
    return e = Object.assign(new FS.FSStream(), e), t7 == -1 && (t7 = FS.nextfd()), e.fd = t7, FS.streams[t7] = e, e;
  }, closeStream(e) {
    FS.streams[e] = null;
  }, dupStream(e, t7 = -1) {
    var r2 = FS.createStream(e, t7);
    return r2.stream_ops?.dup?.(r2), r2;
  }, doSetAttr(e, t7, r2) {
    var _4 = e?.stream_ops.setattr, n3 = _4 ? e : t7;
    _4 ?? (_4 = t7.node_ops.setattr), FS.checkOpExists(_4, 63);
    try {
      _4(n3, r2);
    } catch (a3) {
      throw a3 instanceof RangeError ? new FS.ErrnoError(22) : a3;
    }
  }, chrdev_stream_ops: { open(e) {
    var t7 = FS.getDevice(e.node.rdev);
    e.stream_ops = t7.stream_ops, e.stream_ops.open?.(e);
  }, llseek() {
    throw new FS.ErrnoError(70);
  } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, t7) => e << 8 | t7, registerDevice(e, t7) {
    FS.devices[e] = { stream_ops: t7 };
  }, getDevice: (e) => FS.devices[e], getMounts(e) {
    for (var t7 = [], r2 = [e]; r2.length; ) {
      var _4 = r2.pop();
      t7.push(_4), r2.push(..._4.mounts);
    }
    return t7;
  }, syncfs(e, t7) {
    typeof e == "function" && (t7 = e, e = false), FS.syncFSRequests++, FS.syncFSRequests > 1 && err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
    var r2 = FS.getMounts(FS.root.mount), _4 = 0;
    function n3(l3) {
      return FS.syncFSRequests--, t7(l3);
    }
    function a3(l3) {
      if (l3) return a3.errored ? void 0 : (a3.errored = true, n3(l3));
      ++_4 >= r2.length && n3(null);
    }
    for (var i4 of r2) i4.type.syncfs ? i4.type.syncfs(i4, e, a3) : a3(null);
  }, mount(e, t7, r2) {
    var _4 = r2 === "/", n3 = !r2, a3;
    if (_4 && FS.root) throw new FS.ErrnoError(10);
    if (!_4 && !n3) {
      var i4 = FS.lookupPath(r2, { follow_mount: false });
      if (r2 = i4.path, a3 = i4.node, FS.isMountpoint(a3)) throw new FS.ErrnoError(10);
      if (!FS.isDir(a3.mode)) throw new FS.ErrnoError(54);
    }
    var l3 = { type: e, opts: t7, mountpoint: r2, mounts: [] }, o6 = e.mount(l3);
    return o6.mount = l3, l3.root = o6, _4 ? FS.root = o6 : a3 && (a3.mounted = l3, a3.mount && a3.mount.mounts.push(l3)), o6;
  }, unmount(e) {
    var t7 = FS.lookupPath(e, { follow_mount: false });
    if (!FS.isMountpoint(t7.node)) throw new FS.ErrnoError(28);
    var r2 = t7.node, _4 = r2.mounted, n3 = FS.getMounts(_4);
    for (var [a3, i4] of Object.entries(FS.nameTable)) for (; i4; ) {
      var l3 = i4.name_next;
      n3.includes(i4.mount) && FS.destroyNode(i4), i4 = l3;
    }
    r2.mounted = null;
    var o6 = r2.mount.mounts.indexOf(_4);
    r2.mount.mounts.splice(o6, 1);
  }, lookup(e, t7) {
    return e.node_ops.lookup(e, t7);
  }, mknod(e, t7, r2) {
    var _4 = FS.lookupPath(e, { parent: true }), n3 = _4.node, a3 = PATH.basename(e);
    if (!a3) throw new FS.ErrnoError(28);
    if (a3 === "." || a3 === "..") throw new FS.ErrnoError(20);
    var i4 = FS.mayCreate(n3, a3);
    if (i4) throw new FS.ErrnoError(i4);
    if (!n3.node_ops.mknod) throw new FS.ErrnoError(63);
    return n3.node_ops.mknod(n3, a3, t7, r2);
  }, statfs(e) {
    return FS.statfsNode(FS.lookupPath(e, { follow: true }).node);
  }, statfsStream(e) {
    return FS.statfsNode(e.node);
  }, statfsNode(e) {
    var t7 = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: FS.nextInode, ffree: FS.nextInode - 1, fsid: 42, flags: 2, namelen: 255 };
    return e.node_ops.statfs && Object.assign(t7, e.node_ops.statfs(e.mount.opts.root)), t7;
  }, create(e, t7 = 438) {
    return t7 &= 4095, t7 |= 32768, FS.mknod(e, t7, 0);
  }, mkdir(e, t7 = 511) {
    return t7 &= 1023, t7 |= 16384, FS.mknod(e, t7, 0);
  }, mkdirTree(e, t7) {
    var r2 = e.split("/"), _4 = "";
    for (var n3 of r2) if (n3) {
      (_4 || PATH.isAbs(e)) && (_4 += "/"), _4 += n3;
      try {
        FS.mkdir(_4, t7);
      } catch (a3) {
        if (a3.errno != 20) throw a3;
      }
    }
  }, mkdev(e, t7, r2) {
    return typeof r2 > "u" && (r2 = t7, t7 = 438), t7 |= 8192, FS.mknod(e, t7, r2);
  }, symlink(e, t7) {
    if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
    var r2 = FS.lookupPath(t7, { parent: true }), _4 = r2.node;
    if (!_4) throw new FS.ErrnoError(44);
    var n3 = PATH.basename(t7), a3 = FS.mayCreate(_4, n3);
    if (a3) throw new FS.ErrnoError(a3);
    if (!_4.node_ops.symlink) throw new FS.ErrnoError(63);
    return _4.node_ops.symlink(_4, n3, e);
  }, link(e, t7, r2) {
    var _4 = FS.lookupPath(t7, { parent: true }), n3 = _4.node;
    if (!n3) throw new FS.ErrnoError(44);
    var a3 = PATH.basename(t7), i4 = FS.mayCreate(n3, a3);
    if (i4) throw new FS.ErrnoError(i4);
    if (!n3.node_ops.link) throw new FS.ErrnoError(34);
    return n3.node_ops.link(n3, a3, e, r2);
  }, rename(e, t7) {
    var r2 = PATH.dirname(e), _4 = PATH.dirname(t7), n3 = PATH.basename(e), a3 = PATH.basename(t7), i4, l3, o6;
    if (i4 = FS.lookupPath(e, { parent: true }), l3 = i4.node, i4 = FS.lookupPath(t7, { parent: true }), o6 = i4.node, !l3 || !o6) throw new FS.ErrnoError(44);
    if (l3.mount !== o6.mount) throw new FS.ErrnoError(75);
    var s5 = FS.lookupNode(l3, n3), c3 = PATH_FS.relative(e, _4);
    if (c3.charAt(0) !== ".") throw new FS.ErrnoError(28);
    if (c3 = PATH_FS.relative(t7, r2), c3.charAt(0) !== ".") throw new FS.ErrnoError(55);
    var g6;
    try {
      g6 = FS.lookupNode(o6, a3);
    } catch {
    }
    if (s5 !== g6) {
      var d5 = FS.isDir(s5.mode), p6 = FS.mayDelete(l3, n3, d5);
      if (p6) throw new FS.ErrnoError(p6);
      if (p6 = g6 ? FS.mayDelete(o6, a3, d5) : FS.mayCreate(o6, a3), p6) throw new FS.ErrnoError(p6);
      if (!l3.node_ops.rename) throw new FS.ErrnoError(63);
      if (FS.isMountpoint(s5) || g6 && FS.isMountpoint(g6)) throw new FS.ErrnoError(10);
      if (o6 !== l3 && (p6 = FS.nodePermissions(l3, "w"), p6)) throw new FS.ErrnoError(p6);
      FS.hashRemoveNode(s5);
      try {
        l3.node_ops.rename(s5, o6, a3), s5.parent = o6;
      } catch (u3) {
        throw u3;
      } finally {
        FS.hashAddNode(s5);
      }
    }
  }, rmdir(e) {
    var t7 = FS.lookupPath(e, { parent: true }), r2 = t7.node, _4 = PATH.basename(e), n3 = FS.lookupNode(r2, _4), a3 = FS.mayDelete(r2, _4, true);
    if (a3) throw new FS.ErrnoError(a3);
    if (!r2.node_ops.rmdir) throw new FS.ErrnoError(63);
    if (FS.isMountpoint(n3)) throw new FS.ErrnoError(10);
    r2.node_ops.rmdir(r2, _4), FS.destroyNode(n3);
  }, readdir(e) {
    var t7 = FS.lookupPath(e, { follow: true }), r2 = t7.node, _4 = FS.checkOpExists(r2.node_ops.readdir, 54);
    return _4(r2);
  }, unlink(e) {
    var t7 = FS.lookupPath(e, { parent: true }), r2 = t7.node;
    if (!r2) throw new FS.ErrnoError(44);
    var _4 = PATH.basename(e), n3 = FS.lookupNode(r2, _4), a3 = FS.mayDelete(r2, _4, false);
    if (a3) throw new FS.ErrnoError(a3);
    if (!r2.node_ops.unlink) throw new FS.ErrnoError(63);
    if (FS.isMountpoint(n3)) throw new FS.ErrnoError(10);
    r2.node_ops.unlink(r2, _4), FS.destroyNode(n3);
  }, readlink(e) {
    var t7 = FS.lookupPath(e), r2 = t7.node;
    if (!r2) throw new FS.ErrnoError(44);
    if (!r2.node_ops.readlink) throw new FS.ErrnoError(28);
    return r2.node_ops.readlink(r2);
  }, stat(e, t7) {
    var r2 = FS.lookupPath(e, { follow: !t7 }), _4 = r2.node, n3 = FS.checkOpExists(_4.node_ops.getattr, 63);
    return n3(_4);
  }, fstat(e) {
    var t7 = FS.getStreamChecked(e), r2 = t7.node, _4 = t7.stream_ops.getattr, n3 = _4 ? t7 : r2;
    return _4 ?? (_4 = r2.node_ops.getattr), FS.checkOpExists(_4, 63), _4(n3);
  }, lstat(e) {
    return FS.stat(e, true);
  }, doChmod(e, t7, r2, _4) {
    FS.doSetAttr(e, t7, { mode: r2 & 4095 | t7.mode & -4096, ctime: Date.now(), dontFollow: _4 });
  }, chmod(e, t7, r2) {
    var _4;
    if (typeof e == "string") {
      var n3 = FS.lookupPath(e, { follow: !r2 });
      _4 = n3.node;
    } else _4 = e;
    FS.doChmod(null, _4, t7, r2);
  }, lchmod(e, t7) {
    FS.chmod(e, t7, true);
  }, fchmod(e, t7) {
    var r2 = FS.getStreamChecked(e);
    FS.doChmod(r2, r2.node, t7, false);
  }, doChown(e, t7, r2) {
    FS.doSetAttr(e, t7, { timestamp: Date.now(), dontFollow: r2 });
  }, chown(e, t7, r2, _4) {
    var n3;
    if (typeof e == "string") {
      var a3 = FS.lookupPath(e, { follow: !_4 });
      n3 = a3.node;
    } else n3 = e;
    FS.doChown(null, n3, _4);
  }, lchown(e, t7, r2) {
    FS.chown(e, t7, r2, true);
  }, fchown(e, t7, r2) {
    var _4 = FS.getStreamChecked(e);
    FS.doChown(_4, _4.node, false);
  }, doTruncate(e, t7, r2) {
    if (FS.isDir(t7.mode)) throw new FS.ErrnoError(31);
    if (!FS.isFile(t7.mode)) throw new FS.ErrnoError(28);
    var _4 = FS.nodePermissions(t7, "w");
    if (_4) throw new FS.ErrnoError(_4);
    FS.doSetAttr(e, t7, { size: r2, timestamp: Date.now() });
  }, truncate(e, t7) {
    if (t7 < 0) throw new FS.ErrnoError(28);
    var r2;
    if (typeof e == "string") {
      var _4 = FS.lookupPath(e, { follow: true });
      r2 = _4.node;
    } else r2 = e;
    FS.doTruncate(null, r2, t7);
  }, ftruncate(e, t7) {
    var r2 = FS.getStreamChecked(e);
    if (t7 < 0 || !(r2.flags & 2097155)) throw new FS.ErrnoError(28);
    FS.doTruncate(r2, r2.node, t7);
  }, utime(e, t7, r2, _4) {
    var n3 = FS.lookupPath(e, { follow: !_4 });
    FS.doSetAttr(null, n3.node, { atime: t7, mtime: r2, dontFollow: _4 });
  }, open(e, t7, r2 = 438) {
    if (e === "") throw new FS.ErrnoError(44);
    t7 = FS_modeStringToFlags(t7), t7 & 64 ? r2 = r2 & 4095 | 32768 : r2 = 0;
    var _4, n3;
    if (typeof e == "object") _4 = e;
    else {
      n3 = e.endsWith("/");
      var a3 = FS.lookupPath(e, { follow: !(t7 & 131072), noent_okay: true });
      _4 = a3.node, e = a3.path;
    }
    var i4 = false;
    if (t7 & 64) if (_4) {
      if (t7 & 128) throw new FS.ErrnoError(20);
    } else {
      if (n3) throw new FS.ErrnoError(31);
      _4 = FS.mknod(e, r2 | 511, 0), i4 = true;
    }
    if (!_4) throw new FS.ErrnoError(44);
    if (FS.isChrdev(_4.mode) && (t7 &= -513), t7 & 65536 && !FS.isDir(_4.mode)) throw new FS.ErrnoError(54);
    if (!i4) {
      var l3 = FS.mayOpen(_4, t7);
      if (l3) throw new FS.ErrnoError(l3);
    }
    t7 & 512 && !i4 && FS.truncate(_4, 0), t7 &= -131713;
    var o6 = FS.createStream({ node: _4, path: FS.getPath(_4), flags: t7, seekable: true, position: 0, stream_ops: _4.stream_ops, ungotten: [], error: false });
    return o6.stream_ops.open && o6.stream_ops.open(o6), i4 && FS.chmod(_4, r2 & 511), o6;
  }, close(e) {
    if (FS.isClosed(e)) throw new FS.ErrnoError(8);
    e.getdents && (e.getdents = null), e.node?.notifyListeners(32);
    try {
      e.stream_ops.close && e.stream_ops.close(e);
    } catch (t7) {
      throw t7;
    } finally {
      FS.closeStream(e.fd);
    }
    e.fd = null;
  }, isClosed(e) {
    return e.fd === null;
  }, llseek(e, t7, r2) {
    if (FS.isClosed(e)) throw new FS.ErrnoError(8);
    if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
    if (r2 != 0 && r2 != 1 && r2 != 2) throw new FS.ErrnoError(28);
    return e.position = e.stream_ops.llseek(e, t7, r2), e.ungotten = [], e.position;
  }, read(e, t7, r2, _4, n3) {
    if (_4 < 0 || n3 < 0) throw new FS.ErrnoError(28);
    if (FS.isClosed(e)) throw new FS.ErrnoError(8);
    if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(8);
    if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
    if (!e.stream_ops.read) throw new FS.ErrnoError(28);
    var a3 = typeof n3 < "u";
    if (!a3) n3 = e.position;
    else if (!e.seekable) throw new FS.ErrnoError(70);
    var i4 = e.stream_ops.read(e, t7, r2, _4, n3);
    return a3 || (e.position += i4), i4;
  }, write(e, t7, r2, _4, n3, a3) {
    if (_4 < 0 || n3 < 0) throw new FS.ErrnoError(28);
    if (FS.isClosed(e)) throw new FS.ErrnoError(8);
    if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
    if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
    if (!e.stream_ops.write) throw new FS.ErrnoError(28);
    e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
    var i4 = typeof n3 < "u";
    if (!i4) n3 = e.position;
    else if (!e.seekable) throw new FS.ErrnoError(70);
    var l3 = e.stream_ops.write(e, t7, r2, _4, n3, a3);
    return i4 || (e.position += l3), l3;
  }, mmap(e, t7, r2, _4, n3) {
    if (_4 & 2 && !(n3 & 2) && (e.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
    if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(2);
    if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
    if (!t7) throw new FS.ErrnoError(28);
    return e.stream_ops.mmap(e, t7, r2, _4, n3);
  }, msync(e, t7, r2, _4, n3) {
    return e.stream_ops.msync ? e.stream_ops.msync(e, t7, r2, _4, n3) : 0;
  }, ioctl(e, t7, r2) {
    if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
    return e.stream_ops.ioctl(e, t7, r2);
  }, readFile(e, t7 = {}) {
    t7.flags = t7.flags ?? 0, t7.encoding = t7.encoding ?? "binary", t7.encoding !== "utf8" && t7.encoding !== "binary" && abort(`Invalid encoding type "${t7.encoding}"`);
    var r2 = FS.open(e, t7.flags), _4 = FS.stat(e), n3 = _4.size, a3 = new Uint8Array(n3);
    return FS.read(r2, a3, 0, n3, 0), t7.encoding === "utf8" && (a3 = UTF8ArrayToString(a3)), FS.close(r2), a3;
  }, writeFile(e, t7, r2 = {}) {
    r2.flags = r2.flags ?? 577;
    var _4 = FS.open(e, r2.flags, r2.mode);
    t7 = FS_fileDataToTypedArray(t7), FS.write(_4, t7, 0, t7.byteLength, void 0, r2.canOwn), FS.close(_4);
  }, cwd: () => FS.currentPath, chdir(e) {
    var t7 = FS.lookupPath(e, { follow: true });
    if (t7.node === null) throw new FS.ErrnoError(44);
    if (!FS.isDir(t7.node.mode)) throw new FS.ErrnoError(54);
    var r2 = FS.nodePermissions(t7.node, "x");
    if (r2) throw new FS.ErrnoError(r2);
    FS.currentPath = t7.path;
  }, createDefaultDirectories() {
    FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
  }, createDefaultDevices() {
    FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (_4, n3, a3, i4, l3) => i4, llseek: () => 0 }), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0));
    var e = new Uint8Array(1024), t7 = 0, r2 = () => (t7 === 0 && (randomFill(e), t7 = e.byteLength), e[--t7]);
    FS.createDevice("/dev", "random", r2), FS.createDevice("/dev", "urandom", r2), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories() {
    FS.mkdir("/proc");
    var e = FS.mkdir("/proc/self");
    FS.mkdir("/proc/self/fd"), FS.mount({ mount() {
      var t7 = FS.createNode(e, "fd", 16895, 73);
      return t7.stream_ops = { llseek: MEMFS.stream_ops.llseek }, t7.node_ops = { lookup(r2, _4) {
        var n3 = +_4, a3 = FS.getStreamChecked(n3), i4 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => a3.path }, id: n3 + 1 };
        return i4.parent = i4, i4;
      }, readdir() {
        return Array.from(FS.streams.entries()).filter(([r2, _4]) => _4).map(([r2, _4]) => r2.toString());
      } }, t7;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams(e, t7, r2) {
    e ? FS.createDevice("/dev", "stdin", e) : FS.symlink("/dev/tty", "/dev/stdin"), t7 ? FS.createDevice("/dev", "stdout", null, t7) : FS.symlink("/dev/tty", "/dev/stdout"), r2 ? FS.createDevice("/dev", "stderr", null, r2) : FS.symlink("/dev/tty1", "/dev/stderr");
    var _4 = FS.open("/dev/stdin", 0), n3 = FS.open("/dev/stdout", 1), a3 = FS.open("/dev/stderr", 1);
  }, staticInit() {
    FS.nameTable = new Array(4096), FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories(), FS.filesystems = { MEMFS, IDBFS, NODEFS, PROXYFS };
  }, init(e, t7, r2) {
    FS.initialized = true, e ?? (e = Module.stdin), t7 ?? (t7 = Module.stdout), r2 ?? (r2 = Module.stderr), FS.createStandardStreams(e, t7, r2);
  }, quit() {
    FS.initialized = false, _fflush(0);
    for (var e of FS.streams) e && FS.close(e);
  }, findObject(e, t7) {
    var r2 = FS.analyzePath(e, t7);
    return r2.exists ? r2.object : null;
  }, analyzePath(e, t7) {
    try {
      var r2 = FS.lookupPath(e, { follow: !t7 });
      e = r2.path;
    } catch {
    }
    var _4 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
    try {
      var r2 = FS.lookupPath(e, { parent: true });
      _4.parentExists = true, _4.parentPath = r2.path, _4.parentObject = r2.node, _4.name = PATH.basename(e), r2 = FS.lookupPath(e, { follow: !t7 }), _4.exists = true, _4.path = r2.path, _4.object = r2.node, _4.name = r2.node.name, _4.isRoot = r2.path === "/";
    } catch (n3) {
      _4.error = n3.errno;
    }
    return _4;
  }, createPath(e, t7, r2, _4) {
    e = typeof e == "string" ? e : FS.getPath(e);
    for (var n3 = t7.split("/").reverse(); n3.length; ) {
      var a3 = n3.pop();
      if (a3) {
        var i4 = PATH.join2(e, a3);
        try {
          FS.mkdir(i4);
        } catch (l3) {
          if (l3.errno != 20) throw l3;
        }
        e = i4;
      }
    }
    return i4;
  }, createFile(e, t7, r2, _4, n3) {
    var a3 = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t7), i4 = FS_getMode(_4, n3);
    return FS.create(a3, i4);
  }, createDataFile(e, t7, r2, _4, n3, a3) {
    var i4 = t7;
    e && (e = typeof e == "string" ? e : FS.getPath(e), i4 = t7 ? PATH.join2(e, t7) : e);
    var l3 = FS_getMode(_4, n3), o6 = FS.create(i4, l3);
    if (r2) {
      r2 = FS_fileDataToTypedArray(r2), FS.chmod(o6, l3 | 146);
      var s5 = FS.open(o6, 577);
      FS.write(s5, r2, 0, r2.length, 0, a3), FS.close(s5), FS.chmod(o6, l3);
    }
  }, createDevice(e, t7, r2, _4) {
    var l3;
    var n3 = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t7), a3 = FS_getMode(!!r2, !!_4);
    (l3 = FS.createDevice).major ?? (l3.major = 64);
    var i4 = FS.makedev(FS.createDevice.major++, 0);
    return FS.registerDevice(i4, { open(o6) {
      o6.seekable = false;
    }, close(o6) {
      _4?.buffer?.length && _4(10);
    }, read(o6, s5, c3, g6, d5) {
      for (var p6 = 0, u3 = 0; u3 < g6; u3++) {
        var m7;
        try {
          m7 = r2();
        } catch {
          throw new FS.ErrnoError(29);
        }
        if (m7 === void 0 && p6 === 0) throw new FS.ErrnoError(6);
        if (m7 == null) break;
        p6++, s5[c3 + u3] = m7;
      }
      return p6 && (o6.node.atime = Date.now()), p6;
    }, write(o6, s5, c3, g6, d5) {
      for (var p6 = 0; p6 < g6; p6++) try {
        _4(s5[c3 + p6]);
      } catch {
        throw new FS.ErrnoError(29);
      }
      return g6 && (o6.node.mtime = o6.node.ctime = Date.now()), p6;
    } }), FS.mkdev(n3, a3, i4);
  }, forceLoadFile(e) {
    if (e.isDevice || e.isFolder || e.link || e.contents) return true;
    if (globalThis.XMLHttpRequest) abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    else try {
      e.contents = readBinary(e.url);
    } catch {
      throw new FS.ErrnoError(29);
    }
  }, createLazyFile(e, t7, r2, _4, n3) {
    class a3 {
      constructor() {
        P(this, "lengthKnown", false);
        P(this, "chunks", []);
      }
      get(d5) {
        if (!(d5 > this.length - 1 || d5 < 0)) {
          var p6 = d5 % this.chunkSize, u3 = d5 / this.chunkSize | 0;
          return this.getter(u3)[p6];
        }
      }
      setDataGetter(d5) {
        this.getter = d5;
      }
      cacheLength() {
        var d5 = new XMLHttpRequest();
        d5.open("HEAD", r2, false), d5.send(null), d5.status >= 200 && d5.status < 300 || d5.status === 304 || abort(`Couldn't load ${r2}. Status: ${d5.status}`);
        var p6 = Number(d5.getResponseHeader("Content-length")), u3, m7 = (u3 = d5.getResponseHeader("Accept-Ranges")) && u3 === "bytes", M2 = (u3 = d5.getResponseHeader("Content-Encoding")) && u3 === "gzip", S4 = 1024 * 1024;
        m7 || (S4 = p6);
        var v5 = (b4, A4) => {
          b4 > A4 && abort(`invalid range (${b4}, ${A4}) or no bytes requested!`), A4 > p6 - 1 && abort(`only ${p6} bytes available! programmer error!`);
          var T5 = new XMLHttpRequest();
          return T5.open("GET", r2, false), p6 !== S4 && T5.setRequestHeader("Range", `bytes=${b4}-${A4}`), T5.responseType = "arraybuffer", T5.overrideMimeType && T5.overrideMimeType("text/plain; charset=x-user-defined"), T5.send(null), T5.status >= 200 && T5.status < 300 || T5.status === 304 || abort(`Couldn't load ${r2}. Status: ${T5.status}`), T5.response !== void 0 ? new Uint8Array(T5.response || []) : intArrayFromString(T5.responseText ?? "", true);
        }, F5 = this;
        F5.setDataGetter((b4) => {
          var A4 = b4 * S4, T5 = (b4 + 1) * S4 - 1;
          return T5 = Math.min(T5, p6 - 1), typeof F5.chunks[b4] > "u" && (F5.chunks[b4] = v5(A4, T5)), typeof F5.chunks[b4] > "u" && abort("doXHR failed!"), F5.chunks[b4];
        }), (M2 || !p6) && (S4 = p6 = 1, p6 = this.getter(0).length, S4 = p6, out("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = p6, this._chunkSize = S4, this.lengthKnown = true;
      }
      get length() {
        return this.lengthKnown || this.cacheLength(), this._length;
      }
      get chunkSize() {
        return this.lengthKnown || this.cacheLength(), this._chunkSize;
      }
    }
    if (globalThis.XMLHttpRequest) {
      ENVIRONMENT_IS_WORKER || abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
      var i4 = new a3(), l3 = { isDevice: false, contents: i4 };
    } else var l3 = { isDevice: false, url: r2 };
    var o6 = FS.createFile(e, t7, l3, _4, n3);
    l3.contents ? o6.contents = l3.contents : l3.url && (o6.contents = null, o6.url = l3.url), Object.defineProperties(o6, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var s5 = {};
    for (let [g6, d5] of Object.entries(o6.stream_ops)) s5[g6] = (...p6) => (FS.forceLoadFile(o6), d5(...p6));
    function c3(g6, d5, p6, u3, m7) {
      var M2 = g6.node.contents;
      if (m7 >= M2.length) return 0;
      var S4 = Math.min(M2.length - m7, u3);
      if (M2.slice) for (var v5 = 0; v5 < S4; v5++) d5[p6 + v5] = M2[m7 + v5];
      else for (var v5 = 0; v5 < S4; v5++) d5[p6 + v5] = M2.get(m7 + v5);
      return S4;
    }
    return s5.read = (g6, d5, p6, u3, m7) => (FS.forceLoadFile(o6), c3(g6, d5, p6, u3, m7)), s5.mmap = (g6, d5, p6, u3, m7) => {
      FS.forceLoadFile(o6);
      var M2 = mmapAlloc(d5);
      if (!M2) throw new FS.ErrnoError(48);
      return c3(g6, HEAP8, M2, d5, p6), { ptr: M2, allocated: true };
    }, o6.stream_ops = s5, o6;
  } }, findLibraryFS = (e, t7) => {
    if (runtimeInitialized) {
      if (PATH.isAbs(e)) try {
        return FS.lookupPath(e), e;
      } catch {
        return;
      }
      var r2 = (t7?.paths || []).map((_4) => replaceORIGIN(t7?.parentLibPath, _4));
      return withStackSave(() => {
        var _4 = 512, n3 = stackAlloc(_4), a3 = stringToUTF8OnStack(r2.join(":")), i4 = stringToUTF8OnStack(e), l3 = __emscripten_find_dylib(n3, a3, i4, _4);
        return l3 ? UTF8ToString(l3) : void 0;
      });
    }
  };
  function loadDynamicLibrary(e, t7 = { global: true, nodelete: true }, r2, _4) {
    var n3 = LDSO.loadedLibsByName[e];
    if (n3) return t7.global ? n3.global || (n3.global = true, mergeLibSymbols(n3.exports, e)) : r2 && Object.assign(r2, n3.exports), t7.nodelete && n3.refcount !== 1 / 0 && (n3.refcount = 1 / 0), n3.refcount++, _4 && (LDSO.loadedLibsByHandle[_4] = n3), t7.loadAsync ? Promise.resolve(true) : true;
    n3 = newDSO(e, _4, "loading"), n3.refcount = t7.nodelete ? 1 / 0 : 1, n3.global = t7.global;
    function a3() {
      if (_4) {
        var o6 = HEAPU32[_4 + 28 >> 2], s5 = HEAPU32[_4 + 32 >> 2];
        if (o6 && s5) {
          var c3 = HEAP8.slice(o6, o6 + s5);
          return t7.loadAsync ? Promise.resolve(c3) : c3;
        }
      }
      var g6 = findLibraryFS(e, t7.rpath);
      if (g6) {
        var c3 = FS.readFile(g6, { encoding: "binary" });
        return t7.loadAsync ? Promise.resolve(c3) : c3;
      }
      var d5 = locateFile(e);
      if (t7.loadAsync) return asyncLoad(d5);
      if (!readBinary) throw new Error(`${d5}: file not found, and synchronous loading of external files is not available`);
      return readBinary(d5);
    }
    function i4() {
      var o6 = preloadedWasm[e];
      return o6 ? t7.loadAsync ? Promise.resolve(o6) : o6 : t7.loadAsync ? a3().then((s5) => loadWebAssemblyModule(s5, t7, e, r2, _4)) : loadWebAssemblyModule(a3(), t7, e, r2, _4);
    }
    function l3(o6) {
      n3.global ? mergeLibSymbols(o6, e) : r2 && Object.assign(r2, o6), n3.exports = o6;
    }
    return t7.loadAsync ? i4().then((o6) => (l3(o6), true)) : (l3(i4()), true);
  }
  var reportUndefinedSymbols = () => {
    for (var [e, t7] of Object.entries(GOT)) if (t7.value == -1) {
      var r2 = resolveGlobalSymbol(e, true).sym;
      if (!r2 && !t7.required) {
        t7.value = 0;
        continue;
      }
      if (typeof r2 == "function") t7.value = addFunction(r2, r2.sig);
      else if (typeof r2 == "number") t7.value = r2;
      else if (typeof r2.value == "number") t7.value = r2;
      else throw new Error(`bad export type for '${e}': ${typeof r2} (${r2})`);
    }
  }, loadDylibs = async () => {
    if (!dynamicLibraries.length) {
      reportUndefinedSymbols();
      return;
    }
    for (var e of dynamicLibraries) await loadDynamicLibrary(e, { loadAsync: true, global: true, nodelete: true, allowUndefined: true });
    reportUndefinedSymbols();
  }, noExitRuntime = false;
  function setValue(e, t7, r2 = "i8") {
    switch (r2.endsWith("*") && (r2 = "*"), r2) {
      case "i1":
        HEAP8[e] = t7;
        break;
      case "i8":
        HEAP8[e] = t7;
        break;
      case "i16":
        HEAP16[e >> 1] = t7;
        break;
      case "i32":
        HEAP32[e >> 2] = t7;
        break;
      case "i64":
        HEAP64[e >> 3] = BigInt(t7);
        break;
      case "float":
        HEAPF32[e >> 2] = t7;
        break;
      case "double":
        HEAPF64[e >> 3] = t7;
        break;
      case "*":
        HEAPU32[e >> 2] = t7;
        break;
      default:
        abort(`invalid type for setValue: ${r2}`);
    }
  }
  var wasmMemory, ___assert_fail = (e, t7, r2, _4) => abort(`Assertion failed: ${UTF8ToString(e)}, at: ` + [t7 ? UTF8ToString(t7) : "unknown filename", r2, _4 ? UTF8ToString(_4) : "unknown function"]);
  ___assert_fail.sig = "vppip";
  var ___call_sighandler = (e, t7) => getWasmTableEntry(e)(t7);
  ___call_sighandler.sig = "vpi";
  var SOCKFS = { websocketArgs: {}, callbacks: {}, on(e, t7) {
    SOCKFS.callbacks[e] = t7;
  }, emit(e, t7) {
    SOCKFS.callbacks[e]?.(t7);
    var r2 = e === "error" ? t7[0] : t7, _4 = { message: 65, open: 4, connection: 65, close: 17, error: 8 }[e];
    _4 && FS.getStream(r2)?.node.notifyListeners(_4);
  }, mount(e) {
    return SOCKFS.websocketArgs = Module.websocket || {}, (Module.websocket ?? (Module.websocket = {})).on = SOCKFS.on, FS.createNode(null, "/", 16895, 0);
  }, createSocket(e, t7, r2) {
    if (e != 2) throw new FS.ErrnoError(5);
    if (t7 &= -526337, t7 != 1 && t7 != 2) throw new FS.ErrnoError(28);
    var _4 = t7 == 1;
    if (_4 && r2 && r2 != 6) throw new FS.ErrnoError(66);
    var n3 = { family: e, type: t7, protocol: r2, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: SOCKFS.websocket_sock_ops }, a3 = SOCKFS.nextname(), i4 = FS.createNode(SOCKFS.root, a3, 49152, 0);
    i4.sock = n3;
    var l3 = FS.createStream({ path: a3, node: i4, flags: 2, seekable: false, stream_ops: SOCKFS.stream_ops });
    return n3.stream = l3, n3;
  }, getSocket(e) {
    var t7 = FS.getStream(e);
    return !t7 || !FS.isSocket(t7.node.mode) ? null : t7.node.sock;
  }, stream_ops: { getattr(e) {
    var t7 = e.node;
    return { dev: 1, ino: t7.id, mode: 49663, nlink: 1, uid: 0, gid: 0, rdev: 0, size: 0, atime: /* @__PURE__ */ new Date(0), mtime: /* @__PURE__ */ new Date(0), ctime: /* @__PURE__ */ new Date(0), blksize: 4096, blocks: 0 };
  }, poll(e) {
    var t7 = e.node.sock;
    return t7.sock_ops.poll(t7);
  }, ioctl(e, t7, r2) {
    var _4 = e.node.sock;
    return _4.sock_ops.ioctl(_4, t7, r2);
  }, read(e, t7, r2, _4, n3) {
    var a3 = e.node.sock, i4 = a3.sock_ops.recvmsg(a3, _4);
    return i4 ? (t7.set(i4.buffer, r2), i4.buffer.length) : 0;
  }, write(e, t7, r2, _4, n3) {
    var a3 = e.node.sock;
    return a3.sock_ops.sendmsg(a3, t7, r2, _4);
  }, close(e) {
    var t7 = e.node.sock;
    t7.sock_ops.close(t7);
  } }, nextname() {
    return SOCKFS.nextname.current || (SOCKFS.nextname.current = 0), `socket[${SOCKFS.nextname.current++}]`;
  }, websocket_sock_ops: { createPeer(e, t7, r2) {
    var _4;
    if (typeof t7 == "object" && (_4 = t7, t7 = null, r2 = null), _4) if (_4._socket) t7 = _4._socket.remoteAddress, r2 = _4._socket.remotePort;
    else {
      var n3 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_4.url);
      if (!n3) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
      t7 = n3[1], r2 = parseInt(n3[2], 10);
    }
    else try {
      var a3 = "ws://".replace("#", "//"), i4 = "binary", l3 = void 0;
      if (SOCKFS.websocketArgs.url && (a3 = SOCKFS.websocketArgs.url), SOCKFS.websocketArgs.subprotocol ? i4 = SOCKFS.websocketArgs.subprotocol : SOCKFS.websocketArgs.subprotocol === null && (i4 = "null"), a3 === "ws://" || a3 === "wss://") {
        var o6 = t7.split("/");
        a3 = a3 + o6[0] + ":" + r2 + "/" + o6.slice(1).join("/");
      }
      i4 !== "null" && (i4 = i4.replace(/^ +| +$/g, "").split(/ *, */), l3 = i4);
      var s5;
      ENVIRONMENT_IS_NODE ? s5 = require("ws") : s5 = WebSocket, _4 = new s5(a3, l3), _4.binaryType = "arraybuffer";
    } catch {
      throw new FS.ErrnoError(23);
    }
    var c3 = { addr: t7, port: r2, socket: _4, msg_send_queue: [] };
    return SOCKFS.websocket_sock_ops.addPeer(e, c3), SOCKFS.websocket_sock_ops.handlePeerEvents(e, c3), e.type === 2 && typeof e.sport < "u" && c3.msg_send_queue.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (e.sport & 65280) >> 8, e.sport & 255])), c3;
  }, getPeer(e, t7, r2) {
    return e.peers[t7 + ":" + r2];
  }, addPeer(e, t7) {
    e.peers[t7.addr + ":" + t7.port] = t7;
  }, removePeer(e, t7) {
    delete e.peers[t7.addr + ":" + t7.port];
  }, handlePeerEvents(e, t7) {
    var r2 = true;
    function _4() {
      e.connecting = false, SOCKFS.emit("open", e.stream.fd);
      try {
        for (var a3 = t7.msg_send_queue.shift(); a3; ) t7.socket.send(a3), a3 = t7.msg_send_queue.shift();
      } catch {
        t7.socket.close();
      }
    }
    function n3(a3) {
      if (typeof a3 == "string") {
        var i4 = new TextEncoder();
        a3 = i4.encode(a3);
      } else {
        if (a3.byteLength == 0) return;
        a3 = new Uint8Array(a3);
      }
      var l3 = r2;
      if (r2 = false, l3 && a3.length === 10 && a3[0] === 255 && a3[1] === 255 && a3[2] === 255 && a3[3] === 255 && a3[4] === 112 && a3[5] === 111 && a3[6] === 114 && a3[7] === 116) {
        var o6 = a3[8] << 8 | a3[9];
        SOCKFS.websocket_sock_ops.removePeer(e, t7), t7.port = o6, SOCKFS.websocket_sock_ops.addPeer(e, t7);
        return;
      }
      e.recv_queue.push({ addr: t7.addr, port: t7.port, data: a3 }), SOCKFS.emit("message", e.stream.fd);
    }
    if (ENVIRONMENT_IS_NODE) {
      t7.socket.on("open", _4), t7.socket.on("message", (a3, i4) => {
        i4 && n3(new Uint8Array(a3).buffer);
      }), t7.socket.on("close", () => SOCKFS.emit("close", e.stream.fd)), t7.socket.on("error", (a3) => {
        e.error = 14, SOCKFS.emit("error", [e.stream.fd, e.error, "ECONNREFUSED: Connection refused"]);
      });
      return;
    }
    t7.socket.onopen = _4, t7.socket.onclose = () => SOCKFS.emit("close", e.stream.fd), t7.socket.onmessage = (a3) => n3(a3.data), t7.socket.onerror = (a3) => {
      e.error = 14, SOCKFS.emit("error", [e.stream.fd, e.error, "ECONNREFUSED: Connection refused"]);
    };
  }, poll(e) {
    if (e.type === 1 && e.server) return e.pending.length ? 65 : 0;
    var t7 = 0, r2 = e.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
    return (e.recv_queue.length || !r2 || r2 && r2.socket.readyState === r2.socket.CLOSING || r2 && r2.socket.readyState === r2.socket.CLOSED) && (t7 |= 65), (!r2 || r2 && r2.socket.readyState === r2.socket.OPEN) && (t7 |= 4), (r2 && r2.socket.readyState === r2.socket.CLOSING || r2 && r2.socket.readyState === r2.socket.CLOSED) && (e.connecting ? t7 |= 4 : t7 |= 8208), t7;
  }, ioctl(e, t7, r2) {
    switch (t7) {
      case 21531:
        var _4 = 0;
        return e.recv_queue.length && (_4 = e.recv_queue[0].data.length), HEAP32[r2 >> 2] = _4, 0;
      case 21537:
        var n3 = HEAP32[r2 >> 2];
        return n3 ? e.stream.flags |= 2048 : e.stream.flags &= -2049, 0;
      default:
        return 28;
    }
  }, close(e) {
    if (e.server) {
      try {
        e.server.close();
      } catch {
      }
      e.server = null;
    }
    for (var t7 of Object.values(e.peers)) {
      try {
        t7.socket.close();
      } catch {
      }
      SOCKFS.websocket_sock_ops.removePeer(e, t7);
    }
    return 0;
  }, bind(e, t7, r2) {
    if (typeof e.saddr < "u" || typeof e.sport < "u") throw new FS.ErrnoError(28);
    if (e.saddr = t7, e.sport = r2, e.type === 2) {
      e.server && (e.server.close(), e.server = null);
      try {
        e.sock_ops.listen(e, 0);
      } catch (_4) {
        if (_4.name !== "ErrnoError" || _4.errno !== 138) throw _4;
      }
    }
  }, connect(e, t7, r2) {
    if (e.server) throw new FS.ErrnoError(138);
    if (typeof e.daddr < "u" && typeof e.dport < "u") {
      var _4 = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
      if (_4) throw _4.socket.readyState === _4.socket.CONNECTING ? new FS.ErrnoError(7) : new FS.ErrnoError(30);
    }
    var n3 = SOCKFS.websocket_sock_ops.createPeer(e, t7, r2);
    e.daddr = n3.addr, e.dport = n3.port, e.connecting = true;
  }, listen(e, t7) {
    if (!ENVIRONMENT_IS_NODE) throw new FS.ErrnoError(138);
    if (e.server) throw new FS.ErrnoError(28);
    var r2 = require("ws").Server, _4 = e.saddr;
    e.server = new r2({ host: _4, port: e.sport }), SOCKFS.emit("listen", e.stream.fd), e.server.on("connection", (n3) => {
      if (e.type === 1) {
        var a3 = SOCKFS.createSocket(e.family, e.type, e.protocol), i4 = SOCKFS.websocket_sock_ops.createPeer(a3, n3);
        a3.daddr = i4.addr, a3.dport = i4.port, e.pending.push(a3), SOCKFS.emit("connection", a3.stream.fd), e.stream.node.notifyListeners(65);
      } else SOCKFS.websocket_sock_ops.createPeer(e, n3), SOCKFS.emit("connection", e.stream.fd);
    }), e.server.on("close", () => {
      SOCKFS.emit("close", e.stream.fd), e.server = null;
    }), e.server.on("error", (n3) => {
      e.error = 23, SOCKFS.emit("error", [e.stream.fd, e.error, "EHOSTUNREACH: Host is unreachable"]);
    });
  }, accept(e) {
    if (!e.server || !e.pending.length) throw new FS.ErrnoError(28);
    var t7 = e.pending.shift();
    return t7.stream.flags = e.stream.flags, t7;
  }, getname(e, t7) {
    var r2, _4;
    if (t7) {
      if (e.daddr === void 0 || e.dport === void 0) throw new FS.ErrnoError(53);
      r2 = e.daddr, _4 = e.dport;
    } else r2 = e.saddr || 0, _4 = e.sport || 0;
    return { addr: r2, port: _4 };
  }, sendmsg(e, t7, r2, _4, n3, a3) {
    if (e.type === 2) {
      if ((n3 === void 0 || a3 === void 0) && (n3 = e.daddr, a3 = e.dport), n3 === void 0 || a3 === void 0) throw new FS.ErrnoError(17);
    } else n3 = e.daddr, a3 = e.dport;
    var i4 = SOCKFS.websocket_sock_ops.getPeer(e, n3, a3);
    if (e.type === 1 && (!i4 || i4.socket.readyState === i4.socket.CLOSING || i4.socket.readyState === i4.socket.CLOSED)) throw new FS.ErrnoError(53);
    ArrayBuffer.isView(t7) && (r2 += t7.byteOffset, t7 = t7.buffer);
    var l3 = t7.slice(r2, r2 + _4);
    if (!i4 || i4.socket.readyState !== i4.socket.OPEN) return e.type === 2 && (!i4 || i4.socket.readyState === i4.socket.CLOSING || i4.socket.readyState === i4.socket.CLOSED) && (i4 = SOCKFS.websocket_sock_ops.createPeer(e, n3, a3)), i4.msg_send_queue.push(l3), _4;
    try {
      return i4.socket.send(l3), _4;
    } catch {
      throw new FS.ErrnoError(28);
    }
  }, recvmsg(e, t7, r2) {
    if (e.type === 1 && e.server) throw new FS.ErrnoError(53);
    var _4 = r2 & 2, n3 = e.recv_queue[0];
    if (!n3) {
      if (e.type === 1) {
        var a3 = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
        if (!a3) throw new FS.ErrnoError(53);
        if (a3.socket.readyState === a3.socket.CLOSING || a3.socket.readyState === a3.socket.CLOSED) return null;
        throw new FS.ErrnoError(6);
      }
      throw new FS.ErrnoError(6);
    }
    var i4 = n3.data.byteLength || n3.data.length, l3 = n3.data.byteOffset || 0, o6 = n3.data.buffer || n3.data, s5 = Math.min(t7, i4), c3 = { buffer: new Uint8Array(o6, l3, s5), addr: n3.addr, port: n3.port };
    if (_4) return c3;
    if (e.recv_queue.shift(), e.type === 1 && s5 < i4) {
      var g6 = i4 - s5;
      n3.data = new Uint8Array(o6, l3 + s5, g6), e.recv_queue.unshift(n3);
    }
    return c3;
  } } }, getSocketFromFD = (e) => {
    var t7 = SOCKFS.getSocket(e);
    if (!t7) throw new FS.ErrnoError(8);
    return t7;
  }, inetPton4 = (e) => {
    for (var t7 = e.split("."), r2 = 0; r2 < 4; r2++) {
      var _4 = Number(t7[r2]);
      if (isNaN(_4)) return null;
      t7[r2] = _4;
    }
    return (t7[0] | t7[1] << 8 | t7[2] << 16 | t7[3] << 24) >>> 0;
  }, inetPton6 = (e) => {
    var t7, r2, _4, n3, a3 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, i4 = [];
    if (!a3.test(e)) return null;
    if (e === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
    for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(new RegExp("[.]", "g"), ":"), t7 = e.split(":"), t7[t7.length - 4] = Number(t7[t7.length - 4]) + Number(t7[t7.length - 3]) * 256, t7[t7.length - 3] = Number(t7[t7.length - 2]) + Number(t7[t7.length - 1]) * 256, t7 = t7.slice(0, t7.length - 2)) : t7 = e.split(":"), _4 = 0, n3 = 0, r2 = 0; r2 < t7.length; r2++) if (typeof t7[r2] == "string") if (t7[r2] === "Z") {
      for (n3 = 0; n3 < 8 - t7.length + 1; n3++) i4[r2 + n3] = 0;
      _4 = n3 - 1;
    } else i4[r2 + _4] = _htons(parseInt(t7[r2], 16));
    else i4[r2 + _4] = t7[r2];
    return [i4[1] << 16 | i4[0], i4[3] << 16 | i4[2], i4[5] << 16 | i4[4], i4[7] << 16 | i4[6]];
  }, writeSockaddr = (e, t7, r2, _4, n3) => {
    switch (t7) {
      case 2:
        r2 = inetPton4(r2), zeroMemory(e, 16), n3 && (HEAP32[n3 >> 2] = 16), HEAP16[e >> 1] = t7, HEAP32[e + 4 >> 2] = r2, HEAP16[e + 2 >> 1] = _htons(_4);
        break;
      case 10:
        r2 = inetPton6(r2), zeroMemory(e, 28), n3 && (HEAP32[n3 >> 2] = 28), HEAP32[e >> 2] = t7, HEAP32[e + 8 >> 2] = r2[0], HEAP32[e + 12 >> 2] = r2[1], HEAP32[e + 16 >> 2] = r2[2], HEAP32[e + 20 >> 2] = r2[3], HEAP16[e + 2 >> 1] = _htons(_4);
        break;
      default:
        return 5;
    }
    return 0;
  }, DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name(e) {
    var t7 = inetPton4(e);
    if (t7 !== null || (t7 = inetPton6(e), t7 !== null)) return e;
    var r2;
    if (DNS.address_map.addrs[e]) r2 = DNS.address_map.addrs[e];
    else {
      var _4 = DNS.address_map.id++;
      r2 = "172.29." + (_4 & 255) + "." + (_4 & 65280), DNS.address_map.names[r2] = e, DNS.address_map.addrs[e] = r2;
    }
    return r2;
  }, lookup_addr(e) {
    return DNS.address_map.names[e] ? DNS.address_map.names[e] : null;
  } };
  function ___syscall_accept4(e, t7, r2, _4, n3, a3) {
    try {
      var i4 = getSocketFromFD(e), l3 = i4.sock_ops.accept(i4);
      if (t7) var o6 = writeSockaddr(t7, l3.family, DNS.lookup_name(l3.daddr), l3.dport, r2);
      return l3.stream.fd;
    } catch (s5) {
      if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
      return -s5.errno;
    }
  }
  ___syscall_accept4.sig = "iippiii";
  var inetNtop4 = (e) => (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255), inetNtop6 = (e) => {
    var t7 = "", r2 = 0, _4 = 0, n3 = 0, a3 = 0, i4 = 0, l3 = 0, o6 = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16], s5 = true, c3 = "";
    for (l3 = 0; l3 < 5; l3++) if (o6[l3] !== 0) {
      s5 = false;
      break;
    }
    if (s5) {
      if (c3 = inetNtop4(o6[6] | o6[7] << 16), o6[5] === -1) return t7 = "::ffff:", t7 += c3, t7;
      if (o6[5] === 0) return t7 = "::", c3 === "0.0.0.0" && (c3 = ""), c3 === "0.0.0.1" && (c3 = "1"), t7 += c3, t7;
    }
    for (r2 = 0; r2 < 8; r2++) o6[r2] === 0 && (r2 - n3 > 1 && (i4 = 0), n3 = r2, i4++), i4 > _4 && (_4 = i4, a3 = r2 - _4 + 1);
    for (r2 = 0; r2 < 8; r2++) {
      if (_4 > 1 && o6[r2] === 0 && r2 >= a3 && r2 < a3 + _4) {
        r2 === a3 && (t7 += ":", a3 === 0 && (t7 += ":"));
        continue;
      }
      t7 += Number(_ntohs(o6[r2] & 65535)).toString(16), t7 += r2 < 7 ? ":" : "";
    }
    return t7;
  }, readSockaddr = (e, t7) => {
    var r2 = HEAP16[e >> 1], _4 = _ntohs(HEAPU16[e + 2 >> 1]), n3;
    switch (r2) {
      case 2:
        if (t7 !== 16) return { errno: 28 };
        n3 = HEAP32[e + 4 >> 2], n3 = inetNtop4(n3);
        break;
      case 10:
        if (t7 !== 28) return { errno: 28 };
        n3 = [HEAP32[e + 8 >> 2], HEAP32[e + 12 >> 2], HEAP32[e + 16 >> 2], HEAP32[e + 20 >> 2]], n3 = inetNtop6(n3);
        break;
      default:
        return { errno: 5 };
    }
    return { family: r2, addr: n3, port: _4 };
  }, getSocketAddress = (e, t7) => {
    var r2 = readSockaddr(e, t7);
    if (r2.errno) throw new FS.ErrnoError(r2.errno);
    return r2.addr = DNS.lookup_addr(r2.addr) || r2.addr, r2;
  };
  function ___syscall_bind(e, t7, r2, _4, n3, a3) {
    try {
      var i4 = getSocketFromFD(e), l3 = getSocketAddress(t7, r2);
      return i4.sock_ops.bind(i4, l3.addr, l3.port), 0;
    } catch (o6) {
      if (typeof FS > "u" || o6.name !== "ErrnoError") throw o6;
      return -o6.errno;
    }
  }
  ___syscall_bind.sig = "iipiiii";
  var SYSCALLS = { currentUmask: 18, calculateAt(e, t7, r2) {
    if (PATH.isAbs(t7)) return t7;
    var _4;
    if (e === -100) _4 = FS.cwd();
    else {
      var n3 = SYSCALLS.getStreamFromFD(e);
      _4 = n3.path;
    }
    if (t7.length == 0) {
      if (!r2) throw new FS.ErrnoError(44);
      return _4;
    }
    return _4 + "/" + t7;
  }, writeStat(e, t7) {
    HEAPU32[e >> 2] = t7.dev, HEAPU32[e + 4 >> 2] = t7.mode, HEAPU32[e + 8 >> 2] = t7.nlink, HEAPU32[e + 12 >> 2] = t7.uid, HEAPU32[e + 16 >> 2] = t7.gid, HEAPU32[e + 20 >> 2] = t7.rdev, HEAP64[e + 24 >> 3] = BigInt(t7.size), HEAP32[e + 32 >> 2] = 4096, HEAP32[e + 36 >> 2] = t7.blocks;
    var r2 = t7.atime.getTime(), _4 = t7.mtime.getTime(), n3 = t7.ctime.getTime();
    return HEAP64[e + 40 >> 3] = BigInt(Math.floor(r2 / 1e3)), HEAPU32[e + 48 >> 2] = r2 % 1e3 * 1e3 * 1e3, HEAP64[e + 56 >> 3] = BigInt(Math.floor(_4 / 1e3)), HEAPU32[e + 64 >> 2] = _4 % 1e3 * 1e3 * 1e3, HEAP64[e + 72 >> 3] = BigInt(Math.floor(n3 / 1e3)), HEAPU32[e + 80 >> 2] = n3 % 1e3 * 1e3 * 1e3, HEAP64[e + 88 >> 3] = BigInt(t7.ino), 0;
  }, writeStatFs(e, t7) {
    HEAPU32[e + 4 >> 2] = t7.bsize, HEAPU32[e + 60 >> 2] = t7.bsize, HEAP64[e + 8 >> 3] = BigInt(t7.blocks), HEAP64[e + 16 >> 3] = BigInt(t7.bfree), HEAP64[e + 24 >> 3] = BigInt(t7.bavail), HEAP64[e + 32 >> 3] = BigInt(t7.files), HEAP64[e + 40 >> 3] = BigInt(t7.ffree), HEAPU32[e + 48 >> 2] = t7.fsid, HEAPU32[e + 64 >> 2] = t7.flags, HEAPU32[e + 56 >> 2] = t7.namelen;
  }, doMsync(e, t7, r2, _4, n3) {
    if (!FS.isFile(t7.node.mode)) throw new FS.ErrnoError(43);
    if (_4 & 2) return 0;
    var a3 = HEAPU8.subarray(e, e + r2);
    FS.msync(t7, a3, n3, r2, _4);
  }, getStreamFromFD(e) {
    var t7 = FS.getStreamChecked(e);
    return t7;
  }, varargs: void 0, getStr(e) {
    var t7 = UTF8ToString(e);
    return t7;
  } };
  function ___syscall_chdir(e) {
    try {
      return e = SYSCALLS.getStr(e), FS.chdir(e), 0;
    } catch (t7) {
      if (typeof FS > "u" || t7.name !== "ErrnoError") throw t7;
      return -t7.errno;
    }
  }
  ___syscall_chdir.sig = "ip";
  function ___syscall_chmod(e, t7) {
    try {
      return e = SYSCALLS.getStr(e), FS.chmod(e, t7), 0;
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_chmod.sig = "ipi";
  function ___syscall_connect(e, t7, r2, _4, n3, a3) {
    try {
      var i4 = getSocketFromFD(e), l3 = getSocketAddress(t7, r2);
      return i4.sock_ops.connect(i4, l3.addr, l3.port), 0;
    } catch (o6) {
      if (typeof FS > "u" || o6.name !== "ErrnoError") throw o6;
      return -o6.errno;
    }
  }
  ___syscall_connect.sig = "iipiiii";
  function ___syscall_dup(e) {
    try {
      var t7 = SYSCALLS.getStreamFromFD(e);
      return FS.dupStream(t7).fd;
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_dup.sig = "ii";
  function ___syscall_dup3(e, t7, r2) {
    try {
      if (e === t7 || r2 & -524289) return -28;
      var _4 = SYSCALLS.getStreamFromFD(e);
      if (t7 < 0 || t7 >= FS.MAX_OPEN_FDS) return -8;
      var n3 = FS.getStream(t7);
      n3 && FS.close(n3);
      var a3 = FS.dupStream(_4, t7);
      return r2 & 524288 && (a3.flags |= 524288), a3.fd;
    } catch (i4) {
      if (typeof FS > "u" || i4.name !== "ErrnoError") throw i4;
      return -i4.errno;
    }
  }
  ___syscall_dup3.sig = "iiii";
  function ___syscall_faccessat(e, t7, r2, _4) {
    try {
      if (t7 = SYSCALLS.getStr(t7), t7 = SYSCALLS.calculateAt(e, t7), r2 & -8) return -28;
      var n3 = FS.lookupPath(t7, { follow: true }), a3 = n3.node;
      if (!a3) return -44;
      var i4 = "";
      return r2 & 4 && (i4 += "r"), r2 & 2 && (i4 += "w"), r2 & 1 && (i4 += "x"), i4 && FS.nodePermissions(a3, i4) ? -2 : 0;
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return -l3.errno;
    }
  }
  ___syscall_faccessat.sig = "iipii";
  var INT53_MAX = 9007199254740992, INT53_MIN = -9007199254740992, bigintToI53Checked = (e) => e < INT53_MIN || e > INT53_MAX ? NaN : Number(e);
  function ___syscall_fadvise64(e, t7, r2, _4) {
    t7 = bigintToI53Checked(t7), r2 = bigintToI53Checked(r2);
    try {
      return SYSCALLS.getStreamFromFD(e).seekable ? 0 : -70;
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return -n3.errno;
    }
  }
  ___syscall_fadvise64.sig = "iijji";
  function ___syscall_fallocate(e, t7, r2, _4) {
    r2 = bigintToI53Checked(r2), _4 = bigintToI53Checked(_4);
    try {
      if (isNaN(r2) || isNaN(_4)) return -22;
      if (t7 != 0) return -138;
      if (r2 < 0 || _4 < 0) return -28;
      if (!SYSCALLS.getStreamFromFD(e).seekable) return -70;
      var n3 = FS.fstat(e).size, a3 = r2 + _4;
      return a3 > n3 && FS.ftruncate(e, a3), 0;
    } catch (i4) {
      if (typeof FS > "u" || i4.name !== "ErrnoError") throw i4;
      return -i4.errno;
    }
  }
  ___syscall_fallocate.sig = "iiijj";
  function ___syscall_fchmod(e, t7) {
    try {
      return FS.fchmod(e, t7), 0;
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_fchmod.sig = "iii";
  function ___syscall_fchmodat2(e, t7, r2, _4) {
    try {
      var n3 = _4 & 256;
      return t7 = SYSCALLS.getStr(t7), t7 = SYSCALLS.calculateAt(e, t7), FS.chmod(t7, r2, n3), 0;
    } catch (a3) {
      if (typeof FS > "u" || a3.name !== "ErrnoError") throw a3;
      return -a3.errno;
    }
  }
  ___syscall_fchmodat2.sig = "iipii";
  function ___syscall_fchown32(e, t7, r2) {
    try {
      return FS.fchown(e, t7, r2), 0;
    } catch (_4) {
      if (typeof FS > "u" || _4.name !== "ErrnoError") throw _4;
      return -_4.errno;
    }
  }
  ___syscall_fchown32.sig = "iiii";
  function ___syscall_fchownat(e, t7, r2, _4, n3) {
    try {
      t7 = SYSCALLS.getStr(t7);
      var a3 = n3 & 256;
      return n3 = n3 & -257, t7 = SYSCALLS.calculateAt(e, t7), (a3 ? FS.lchown : FS.chown)(t7, r2, _4), 0;
    } catch (i4) {
      if (typeof FS > "u" || i4.name !== "ErrnoError") throw i4;
      return -i4.errno;
    }
  }
  ___syscall_fchownat.sig = "iipiii";
  var syscallGetVarargI = () => {
    var e = HEAP32[+SYSCALLS.varargs >> 2];
    return SYSCALLS.varargs += 4, e;
  }, syscallGetVarargP = syscallGetVarargI;
  function ___syscall_fcntl64(e, t7, r2) {
    SYSCALLS.varargs = r2;
    try {
      var _4 = SYSCALLS.getStreamFromFD(e);
      switch (t7) {
        case 0: {
          var n3 = syscallGetVarargI();
          if (n3 < 0) return -28;
          for (; FS.streams[n3]; ) n3++;
          var a3;
          return a3 = FS.dupStream(_4, n3), a3.fd;
        }
        case 1:
        case 2:
          return 0;
        case 3:
          return _4.flags;
        case 4: {
          var n3 = syscallGetVarargI(), i4 = 289792;
          return _4.flags = _4.flags & ~i4 | n3 & i4, 0;
        }
        case 12: {
          var n3 = syscallGetVarargP(), l3 = 0;
          return HEAP16[n3 + l3 >> 1] = 2, 0;
        }
        case 13:
        case 14:
          return 0;
      }
      return -28;
    } catch (o6) {
      if (typeof FS > "u" || o6.name !== "ErrnoError") throw o6;
      return -o6.errno;
    }
  }
  ___syscall_fcntl64.sig = "iiip";
  function ___syscall_fdatasync(e) {
    try {
      var t7 = SYSCALLS.getStreamFromFD(e);
      return 0;
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_fdatasync.sig = "ii";
  function ___syscall_fstat64(e, t7) {
    try {
      return SYSCALLS.writeStat(t7, FS.fstat(e));
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_fstat64.sig = "iip";
  function ___syscall_ftruncate64(e, t7) {
    t7 = bigintToI53Checked(t7);
    try {
      return isNaN(t7) ? -22 : (FS.ftruncate(e, t7), 0);
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_ftruncate64.sig = "iij";
  function ___syscall_getcwd(e, t7) {
    try {
      if (t7 === 0) return -28;
      var r2 = FS.cwd(), _4 = lengthBytesUTF8(r2) + 1;
      return t7 < _4 ? -68 : (stringToUTF8(r2, e, t7), _4);
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return -n3.errno;
    }
  }
  ___syscall_getcwd.sig = "ipp";
  function ___syscall_getdents64(e, t7, r2) {
    try {
      var _4 = SYSCALLS.getStreamFromFD(e);
      _4.getdents || (_4.getdents = FS.readdir(_4.path));
      for (var n3 = 280, a3 = 0, i4 = FS.llseek(_4, 0, 1), l3 = Math.floor(i4 / n3), o6 = Math.min(_4.getdents.length, l3 + Math.floor(r2 / n3)), s5 = l3; s5 < o6; s5++) {
        var c3, g6, d5 = _4.getdents[s5];
        if (d5 === ".") c3 = _4.node.id, g6 = 4;
        else if (d5 === "..") {
          var p6 = FS.lookupPath(_4.path, { parent: true });
          c3 = p6.node.id, g6 = 4;
        } else {
          var u3;
          try {
            u3 = FS.lookupNode(_4.node, d5);
          } catch (m7) {
            if (m7?.errno === 28) continue;
            throw m7;
          }
          c3 = u3.id, g6 = FS.isChrdev(u3.mode) ? 2 : FS.isDir(u3.mode) ? 4 : FS.isLink(u3.mode) ? 10 : 8;
        }
        HEAP64[t7 + a3 >> 3] = BigInt(c3), HEAP64[t7 + a3 + 8 >> 3] = BigInt((s5 + 1) * n3), HEAP16[t7 + a3 + 16 >> 1] = 280, HEAP8[t7 + a3 + 18] = g6, stringToUTF8(d5, t7 + a3 + 19, 256), a3 += n3;
      }
      return FS.llseek(_4, s5 * n3, 0), a3;
    } catch (m7) {
      if (typeof FS > "u" || m7.name !== "ErrnoError") throw m7;
      return -m7.errno;
    }
  }
  ___syscall_getdents64.sig = "iipp";
  var ___syscall_getegid32 = () => 0;
  ___syscall_getegid32.sig = "i";
  var ___syscall_geteuid32 = () => 0;
  ___syscall_geteuid32.sig = "i";
  var ___syscall_getgid32 = () => 0;
  ___syscall_getgid32.sig = "i";
  var ___syscall_getuid32 = () => 0;
  ___syscall_getuid32.sig = "i";
  function ___syscall_ioctl(e, t7, r2) {
    SYSCALLS.varargs = r2;
    try {
      var _4 = SYSCALLS.getStreamFromFD(e);
      switch (t7) {
        case 21509:
          return _4.tty ? 0 : -59;
        case 21505: {
          if (!_4.tty) return -59;
          if (_4.tty.ops.ioctl_tcgets) {
            var n3 = _4.tty.ops.ioctl_tcgets(_4), a3 = syscallGetVarargP();
            HEAP32[a3 >> 2] = n3.c_iflag || 0, HEAP32[a3 + 4 >> 2] = n3.c_oflag || 0, HEAP32[a3 + 8 >> 2] = n3.c_cflag || 0, HEAP32[a3 + 12 >> 2] = n3.c_lflag || 0;
            for (var i4 = 0; i4 < 32; i4++) HEAP8[a3 + i4 + 17] = n3.c_cc[i4] || 0;
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
          return _4.tty ? 0 : -59;
        case 21506:
        case 21507:
        case 21508: {
          if (!_4.tty) return -59;
          if (_4.tty.ops.ioctl_tcsets) {
            for (var a3 = syscallGetVarargP(), l3 = HEAP32[a3 >> 2], o6 = HEAP32[a3 + 4 >> 2], s5 = HEAP32[a3 + 8 >> 2], c3 = HEAP32[a3 + 12 >> 2], g6 = [], i4 = 0; i4 < 32; i4++) g6.push(HEAP8[a3 + i4 + 17]);
            return _4.tty.ops.ioctl_tcsets(_4.tty, t7, { c_iflag: l3, c_oflag: o6, c_cflag: s5, c_lflag: c3, c_cc: g6 });
          }
          return 0;
        }
        case 21519: {
          if (!_4.tty) return -59;
          var a3 = syscallGetVarargP();
          return HEAP32[a3 >> 2] = 0, 0;
        }
        case 21520:
          return _4.tty ? -28 : -59;
        case 21537:
        case 21531: {
          var a3 = syscallGetVarargP();
          return FS.ioctl(_4, t7, a3);
        }
        case 21523: {
          if (!_4.tty) return -59;
          if (_4.tty.ops.ioctl_tiocgwinsz) {
            var d5 = _4.tty.ops.ioctl_tiocgwinsz(_4.tty), a3 = syscallGetVarargP();
            HEAP16[a3 >> 1] = d5[0], HEAP16[a3 + 2 >> 1] = d5[1];
          }
          return 0;
        }
        case 21524:
          return _4.tty ? 0 : -59;
        case 21515:
          return _4.tty ? 0 : -59;
        default:
          return -28;
      }
    } catch (p6) {
      if (typeof FS > "u" || p6.name !== "ErrnoError") throw p6;
      return -p6.errno;
    }
  }
  ___syscall_ioctl.sig = "iiip";
  function ___syscall_linkat(e, t7, r2, _4, n3) {
    try {
      return t7 = SYSCALLS.getStr(t7), _4 = SYSCALLS.getStr(_4), t7 = SYSCALLS.calculateAt(e, t7), _4 = SYSCALLS.calculateAt(r2, _4), FS.link(t7, _4, n3), 0;
    } catch (a3) {
      if (typeof FS > "u" || a3.name !== "ErrnoError") throw a3;
      return -a3.errno;
    }
  }
  ___syscall_linkat.sig = "iipipi";
  function ___syscall_listen(e, t7, r2, _4, n3, a3) {
    try {
      var i4 = getSocketFromFD(e);
      return i4.sock_ops.listen(i4, t7), 0;
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return -l3.errno;
    }
  }
  ___syscall_listen.sig = "iiiiiii";
  function ___syscall_lstat64(e, t7) {
    try {
      return e = SYSCALLS.getStr(e), SYSCALLS.writeStat(t7, FS.lstat(e));
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_lstat64.sig = "ipp";
  function ___syscall_mkdirat(e, t7, r2) {
    try {
      return t7 = SYSCALLS.getStr(t7), t7 = SYSCALLS.calculateAt(e, t7), r2 &= ~SYSCALLS.currentUmask, FS.mkdir(t7, r2, 0), 0;
    } catch (_4) {
      if (typeof FS > "u" || _4.name !== "ErrnoError") throw _4;
      return -_4.errno;
    }
  }
  ___syscall_mkdirat.sig = "iipi";
  function ___syscall_newfstatat(e, t7, r2, _4) {
    try {
      t7 = SYSCALLS.getStr(t7);
      var n3 = _4 & 256, a3 = _4 & 4096;
      return _4 = _4 & -6401, t7 = SYSCALLS.calculateAt(e, t7, a3), SYSCALLS.writeStat(r2, n3 ? FS.lstat(t7) : FS.stat(t7));
    } catch (i4) {
      if (typeof FS > "u" || i4.name !== "ErrnoError") throw i4;
      return -i4.errno;
    }
  }
  ___syscall_newfstatat.sig = "iippi";
  function ___syscall_openat(e, t7, r2, _4) {
    SYSCALLS.varargs = _4;
    try {
      t7 = SYSCALLS.getStr(t7), t7 = SYSCALLS.calculateAt(e, t7);
      var n3 = _4 ? syscallGetVarargI() : 0;
      return r2 & 64 && (n3 &= ~SYSCALLS.currentUmask), FS.open(t7, r2, n3).fd;
    } catch (a3) {
      if (typeof FS > "u" || a3.name !== "ErrnoError") throw a3;
      return -a3.errno;
    }
  }
  ___syscall_openat.sig = "iipip";
  var PIPEFS = { BUCKET_BUFFER_SIZE: 8192, mount(e) {
    return FS.createNode(null, "/", 16895, 0);
  }, createPipe() {
    var e = { buckets: [], writerCount: 1, writeClosed: false, readerCount: 1, readClosed: false, timestamp: /* @__PURE__ */ new Date() };
    e.buckets.push({ buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 });
    var t7 = PIPEFS.nextname(), r2 = PIPEFS.nextname(), _4 = FS.createNode(PIPEFS.root, t7, 4096, 0), n3 = FS.createNode(PIPEFS.root, r2, 4096, 0);
    _4.pipe = e, n3.pipe = e, e.readNode = _4, e.writeNode = n3;
    var a3 = FS.createStream({ path: t7, node: _4, flags: 0, seekable: false, stream_ops: PIPEFS.stream_ops });
    _4.stream = a3;
    var i4 = FS.createStream({ path: r2, node: n3, flags: 1, seekable: false, stream_ops: PIPEFS.stream_ops });
    return n3.stream = i4, { readable_fd: a3.fd, writable_fd: i4.fd };
  }, stream_ops: { getattr(e) {
    var t7 = e.node, r2 = t7.pipe.timestamp;
    return { dev: 14, ino: t7.id, mode: 4480, nlink: 1, uid: 0, gid: 0, rdev: 0, size: 0, atime: r2, mtime: r2, ctime: r2, blksize: 4096, blocks: 0 };
  }, poll(e) {
    var t7 = e.node.pipe;
    if ((e.flags & 2097155) === 1) {
      var r2 = 260;
      return t7.readClosed && (r2 |= 8), r2;
    }
    var r2 = 0;
    for (var _4 of t7.buckets) if (_4.offset - _4.roffset > 0) {
      r2 = 65;
      break;
    }
    return t7.writeClosed && (r2 |= 17), r2;
  }, dup(e) {
    var t7 = e.node.pipe;
    (e.flags & 2097155) === 1 ? t7.writerCount++ : t7.readerCount++;
  }, ioctl(e, t7, r2) {
    if (t7 == 21531) {
      var _4 = e.node.pipe, n3 = 0;
      for (var a3 of _4.buckets) n3 += a3.offset - a3.roffset;
      return HEAP32[r2 >> 2] = n3, 0;
    }
    return 28;
  }, fsync(e) {
    return 28;
  }, read(e, t7, r2, _4, n3) {
    var a3 = e.node.pipe, i4 = 0;
    for (var l3 of a3.buckets) i4 += l3.offset - l3.roffset;
    var o6 = t7.subarray(r2, r2 + _4);
    if (_4 <= 0) return 0;
    if (i4 == 0) throw new FS.ErrnoError(6);
    var s5 = Math.min(i4, _4), c3 = s5, g6 = 0;
    for (var l3 of a3.buckets) {
      var d5 = l3.offset - l3.roffset;
      if (s5 <= d5) {
        var p6 = l3.buffer.subarray(l3.roffset, l3.offset);
        s5 < d5 ? (p6 = p6.subarray(0, s5), l3.roffset += s5) : g6++, o6.set(p6);
        break;
      } else {
        var p6 = l3.buffer.subarray(l3.roffset, l3.offset);
        o6.set(p6), o6 = o6.subarray(p6.byteLength), s5 -= p6.byteLength, g6++;
      }
    }
    return g6 && g6 == a3.buckets.length && (g6--, a3.buckets[g6].offset = 0, a3.buckets[g6].roffset = 0), a3.buckets.splice(0, g6), c3;
  }, write(e, t7, r2, _4, n3) {
    var a3 = e.node.pipe, i4 = t7.subarray(r2, r2 + _4), l3 = i4.byteLength;
    if (l3 <= 0) return 0;
    var o6 = null;
    a3.buckets.length == 0 ? (o6 = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 }, a3.buckets.push(o6)) : o6 = a3.buckets[a3.buckets.length - 1];
    var s5 = PIPEFS.BUCKET_BUFFER_SIZE - o6.offset;
    if (s5 >= l3) return o6.buffer.set(i4, o6.offset), o6.offset += l3, a3.readNode.notifyListeners(65), l3;
    s5 > 0 && (o6.buffer.set(i4.subarray(0, s5), o6.offset), o6.offset += s5, i4 = i4.subarray(s5, i4.byteLength));
    for (var c3 = i4.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0, g6 = i4.byteLength % PIPEFS.BUCKET_BUFFER_SIZE, d5 = 0; d5 < c3; d5++) {
      var p6 = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: PIPEFS.BUCKET_BUFFER_SIZE, roffset: 0 };
      a3.buckets.push(p6), p6.buffer.set(i4.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE)), i4 = i4.subarray(PIPEFS.BUCKET_BUFFER_SIZE, i4.byteLength);
    }
    if (g6 > 0) {
      var p6 = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: i4.byteLength, roffset: 0 };
      a3.buckets.push(p6), p6.buffer.set(i4);
    }
    return a3.readNode.notifyListeners(65), l3;
  }, close(e) {
    var t7 = e.node.pipe;
    (e.flags & 2097155) === 1 ? --t7.writerCount === 0 && (t7.writeClosed = true, t7.readNode.notifyListeners(81)) : --t7.readerCount === 0 && (t7.readClosed = true, t7.writeNode.notifyListeners(268)), t7.readerCount === 0 && t7.writerCount === 0 && (t7.buckets = null);
  } }, nextname() {
    return PIPEFS.nextname.current || (PIPEFS.nextname.current = 0), "pipe[" + PIPEFS.nextname.current++ + "]";
  } };
  function ___syscall_pipe2(e, t7) {
    try {
      if (e == 0) throw new FS.ErrnoError(21);
      var r2 = 526336;
      if (t7 & ~r2) throw new FS.ErrnoError(138);
      var _4 = PIPEFS.createPipe();
      return t7 & 2048 && (FS.getStream(_4.readable_fd).flags |= 2048, FS.getStream(_4.writable_fd).flags |= 2048), HEAP32[e >> 2] = _4.readable_fd, HEAP32[e + 4 >> 2] = _4.writable_fd, 0;
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return -n3.errno;
    }
  }
  ___syscall_pipe2.sig = "ipi";
  var pollOne = (e, t7) => {
    var r2 = FS.getStream(e);
    if (!r2) return 32;
    var _4 = r2.stream_ops?.poll ? r2.stream_ops.poll(r2) : 5;
    return _4 & (t7 | 8 | 16 | 32);
  }, doPollSync = (e, t7) => {
    for (var r2 = 0, _4 = 0, n3 = e; _4 < t7; _4++, n3 += 8) {
      var a3 = pollOne(HEAP32[n3 >> 2], HEAP16[n3 + 4 >> 1]);
      a3 && r2++, HEAP16[n3 + 6 >> 1] = a3;
    }
    return r2;
  };
  function ___syscall_poll(e, t7, r2) {
    try {
      var _4 = doPollSync(e, t7);
      return _4;
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return -n3.errno;
    }
  }
  ___syscall_poll.sig = "ipii";
  function ___syscall_readlinkat(e, t7, r2, _4) {
    try {
      if (t7 = SYSCALLS.getStr(t7), t7 = SYSCALLS.calculateAt(e, t7), _4 <= 0) return -28;
      var n3 = FS.readlink(t7), a3 = Math.min(_4, lengthBytesUTF8(n3)), i4 = HEAP8[r2 + a3];
      return stringToUTF8(n3, r2, _4 + 1), HEAP8[r2 + a3] = i4, a3;
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return -l3.errno;
    }
  }
  ___syscall_readlinkat.sig = "iippp";
  function ___syscall_recvfrom(e, t7, r2, _4, n3, a3) {
    try {
      var i4 = getSocketFromFD(e), l3 = i4.sock_ops.recvmsg(i4, r2, _4);
      if (!l3) return 0;
      if (n3) var o6 = writeSockaddr(n3, i4.family, DNS.lookup_name(l3.addr), l3.port, a3);
      return HEAPU8.set(l3.buffer, t7), l3.buffer.byteLength;
    } catch (s5) {
      if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
      return -s5.errno;
    }
  }
  ___syscall_recvfrom.sig = "iippipp";
  function ___syscall_renameat(e, t7, r2, _4) {
    try {
      return t7 = SYSCALLS.getStr(t7), _4 = SYSCALLS.getStr(_4), t7 = SYSCALLS.calculateAt(e, t7), _4 = SYSCALLS.calculateAt(r2, _4), FS.rename(t7, _4), 0;
    } catch (n3) {
      if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
      return -n3.errno;
    }
  }
  ___syscall_renameat.sig = "iipip";
  function ___syscall_rmdir(e) {
    try {
      return e = SYSCALLS.getStr(e), FS.rmdir(e), 0;
    } catch (t7) {
      if (typeof FS > "u" || t7.name !== "ErrnoError") throw t7;
      return -t7.errno;
    }
  }
  ___syscall_rmdir.sig = "ip";
  function ___syscall_sendto(e, t7, r2, _4, n3, a3) {
    try {
      var i4 = getSocketFromFD(e);
      if (!n3) return FS.write(i4.stream, HEAP8, t7, r2);
      var l3 = getSocketAddress(n3, a3);
      return i4.sock_ops.sendmsg(i4, HEAP8, t7, r2, l3.addr, l3.port);
    } catch (o6) {
      if (typeof FS > "u" || o6.name !== "ErrnoError") throw o6;
      return -o6.errno;
    }
  }
  ___syscall_sendto.sig = "iippipi";
  function ___syscall_socket(e, t7, r2, _4, n3, a3) {
    try {
      var i4 = SOCKFS.createSocket(e, t7, r2);
      return i4.stream.fd;
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return -l3.errno;
    }
  }
  ___syscall_socket.sig = "iiiiiii";
  function ___syscall_stat64(e, t7) {
    try {
      return e = SYSCALLS.getStr(e), SYSCALLS.writeStat(t7, FS.stat(e));
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_stat64.sig = "ipp";
  function ___syscall_statfs64(e, t7, r2) {
    try {
      return SYSCALLS.writeStatFs(r2, FS.statfs(SYSCALLS.getStr(e))), 0;
    } catch (_4) {
      if (typeof FS > "u" || _4.name !== "ErrnoError") throw _4;
      return -_4.errno;
    }
  }
  ___syscall_statfs64.sig = "ippp";
  function ___syscall_symlinkat(e, t7, r2) {
    try {
      return e = SYSCALLS.getStr(e), r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(t7, r2), FS.symlink(e, r2), 0;
    } catch (_4) {
      if (typeof FS > "u" || _4.name !== "ErrnoError") throw _4;
      return -_4.errno;
    }
  }
  ___syscall_symlinkat.sig = "ipip";
  function ___syscall_truncate64(e, t7) {
    t7 = bigintToI53Checked(t7);
    try {
      return isNaN(t7) ? -22 : (e = SYSCALLS.getStr(e), FS.truncate(e, t7), 0);
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_truncate64.sig = "ipj";
  function ___syscall_umask(e) {
    try {
      var t7 = SYSCALLS.currentUmask;
      return SYSCALLS.currentUmask = e, t7;
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return -r2.errno;
    }
  }
  ___syscall_umask.sig = "ii";
  function ___syscall_unlinkat(e, t7, r2) {
    try {
      if (t7 = SYSCALLS.getStr(t7), t7 = SYSCALLS.calculateAt(e, t7), !r2) FS.unlink(t7);
      else if (r2 === 512) FS.rmdir(t7);
      else return -28;
      return 0;
    } catch (_4) {
      if (typeof FS > "u" || _4.name !== "ErrnoError") throw _4;
      return -_4.errno;
    }
  }
  ___syscall_unlinkat.sig = "iipi";
  var readI53FromI64 = (e) => HEAPU32[e >> 2] + HEAP32[e + 4 >> 2] * 4294967296;
  function ___syscall_utimensat(e, t7, r2, _4) {
    try {
      var n3 = _4 & 256;
      t7 = SYSCALLS.getStr(t7), t7 = SYSCALLS.calculateAt(e, t7, true);
      var a3 = Date.now(), i4, l3;
      if (!r2) i4 = a3, l3 = a3;
      else {
        var o6 = readI53FromI64(r2), s5 = HEAP32[r2 + 8 >> 2];
        s5 == 1073741823 ? i4 = a3 : s5 == 1073741822 ? i4 = null : i4 = o6 * 1e3 + s5 / (1e3 * 1e3), r2 += 16, o6 = readI53FromI64(r2), s5 = HEAP32[r2 + 8 >> 2], s5 == 1073741823 ? l3 = a3 : s5 == 1073741822 ? l3 = null : l3 = o6 * 1e3 + s5 / (1e3 * 1e3);
      }
      return (l3 ?? i4) !== null && FS.utime(t7, i4, l3, n3), 0;
    } catch (c3) {
      if (typeof FS > "u" || c3.name !== "ErrnoError") throw c3;
      return -c3.errno;
    }
  }
  ___syscall_utimensat.sig = "iippi";
  var __abort_js = () => abort("");
  __abort_js.sig = "v";
  var dlSetError = (e) => {
    var t7 = stackSave(), r2 = stringToUTF8OnStack(e);
    ___dl_seterr(r2, 0), stackRestore(t7);
  }, dlopenInternal = (e, t7) => {
    var r2 = UTF8ToString(e + 36), _4 = HEAP32[e + 4 >> 2];
    r2 = PATH.normalize(r2);
    var n3 = !!(_4 & 256), a3 = n3 ? null : {}, i4 = { global: n3, nodelete: !!(_4 & 4096), loadAsync: t7.loadAsync };
    if (t7.loadAsync) return loadDynamicLibrary(r2, i4, a3, e);
    try {
      return loadDynamicLibrary(r2, i4, a3, e);
    } catch (l3) {
      return dlSetError(`could not load dynamic lib: ${r2}
${l3}`), 0;
    }
  }, __dlopen_js = (e) => dlopenInternal(e, { loadAsync: false });
  __dlopen_js.sig = "pp";
  var __dlsym_js = (e, t7, r2) => {
    t7 = UTF8ToString(t7);
    var _4, n3, a3 = LDSO.loadedLibsByHandle[e];
    if (n3 = Object.keys(a3.exports).indexOf(t7), n3 == -1 || a3.exports[t7].stub) return dlSetError(`Tried to lookup unknown symbol "${t7}" in dynamic lib: ${a3.name}`), 0;
    if (_4 = a3.exports[t7], typeof _4 == "function") {
      var i4 = getFunctionAddress(_4);
      i4 ? _4 = i4 : (_4 = addFunction(_4, _4.sig), HEAPU32[r2 >> 2] = n3);
    }
    return _4;
  };
  __dlsym_js.sig = "pppp";
  var runtimeKeepaliveCounter = 0, __emscripten_runtime_keepalive_clear = () => {
    noExitRuntime = false, runtimeKeepaliveCounter = 0;
  };
  __emscripten_runtime_keepalive_clear.sig = "v";
  var __emscripten_throw_longjmp = () => {
    throw new EmscriptenSjLj();
  };
  __emscripten_throw_longjmp.sig = "v";
  function __gmtime_js(e, t7) {
    e = bigintToI53Checked(e);
    var r2 = new Date(e * 1e3);
    if (isNaN(r2.getTime())) return 1;
    HEAP32[t7 >> 2] = r2.getUTCSeconds(), HEAP32[t7 + 4 >> 2] = r2.getUTCMinutes(), HEAP32[t7 + 8 >> 2] = r2.getUTCHours(), HEAP32[t7 + 12 >> 2] = r2.getUTCDate(), HEAP32[t7 + 16 >> 2] = r2.getUTCMonth(), HEAP32[t7 + 20 >> 2] = r2.getUTCFullYear() - 1900, HEAP32[t7 + 24 >> 2] = r2.getUTCDay();
    var _4 = Date.UTC(r2.getUTCFullYear(), 0, 1, 0, 0, 0, 0), n3 = (r2.getTime() - _4) / (1e3 * 60 * 60 * 24) | 0;
    return HEAP32[t7 + 28 >> 2] = n3, 0;
  }
  __gmtime_js.sig = "ijp";
  var isLeapYear = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ydayFromDate = (e) => {
    var t7 = isLeapYear(e.getFullYear()), r2 = t7 ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE, _4 = r2[e.getMonth()] + e.getDate() - 1;
    return _4;
  };
  function __localtime_js(e, t7) {
    e = bigintToI53Checked(e);
    var r2 = new Date(e * 1e3);
    if (isNaN(r2.getTime())) return 1;
    HEAP32[t7 >> 2] = r2.getSeconds(), HEAP32[t7 + 4 >> 2] = r2.getMinutes(), HEAP32[t7 + 8 >> 2] = r2.getHours(), HEAP32[t7 + 12 >> 2] = r2.getDate(), HEAP32[t7 + 16 >> 2] = r2.getMonth(), HEAP32[t7 + 20 >> 2] = r2.getFullYear() - 1900, HEAP32[t7 + 24 >> 2] = r2.getDay();
    var _4 = ydayFromDate(r2) | 0;
    HEAP32[t7 + 28 >> 2] = _4, HEAP32[t7 + 36 >> 2] = -(r2.getTimezoneOffset() * 60);
    var n3 = new Date(r2.getFullYear(), 0, 1), a3 = new Date(r2.getFullYear(), 6, 1).getTimezoneOffset(), i4 = n3.getTimezoneOffset(), l3 = (a3 != i4 && r2.getTimezoneOffset() == Math.min(i4, a3)) | 0;
    return HEAP32[t7 + 32 >> 2] = l3, 0;
  }
  __localtime_js.sig = "ijp";
  function __mmap_js(e, t7, r2, _4, n3, a3, i4) {
    n3 = bigintToI53Checked(n3);
    try {
      var l3 = SYSCALLS.getStreamFromFD(_4), o6 = FS.mmap(l3, e, n3, t7, r2), s5 = o6.ptr;
      return HEAP32[a3 >> 2] = o6.allocated, HEAPU32[i4 >> 2] = s5, 0;
    } catch (c3) {
      if (typeof FS > "u" || c3.name !== "ErrnoError") throw c3;
      return -c3.errno;
    }
  }
  __mmap_js.sig = "ipiiijpp";
  function __munmap_js(e, t7, r2, _4, n3, a3) {
    a3 = bigintToI53Checked(a3);
    try {
      var i4 = SYSCALLS.getStreamFromFD(n3);
      r2 & 2 && SYSCALLS.doMsync(e, i4, t7, _4, a3);
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return -l3.errno;
    }
  }
  __munmap_js.sig = "ippiiij";
  var timers = {}, clearTimers = () => {
    for (var e of Object.values(timers)) clearTimeout(e.id);
  }, handleException = (e) => {
    if (e instanceof ExitStatus || e == "unwind") return EXITSTATUS;
    quit_(1, e);
  }, keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0, _proc_exit = (e) => {
    EXITSTATUS = e, keepRuntimeAlive() || (Module.onExit?.(e), ABORT = true), quit_(e, new ExitStatus(e));
  };
  _proc_exit.sig = "vi";
  var exitJS = (e, t7) => {
    EXITSTATUS = e, keepRuntimeAlive() || exitRuntime(), _proc_exit(e);
  }, _exit = exitJS;
  _exit.sig = "vi";
  var maybeExit = () => {
    if (!runtimeExited && !keepRuntimeAlive()) try {
      _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }, callUserCallback = (e) => {
    if (!(runtimeExited || ABORT)) try {
      return e();
    } catch (t7) {
      handleException(t7);
    } finally {
      maybeExit();
    }
  }, _emscripten_get_now = () => performance.now();
  _emscripten_get_now.sig = "d";
  var __setitimer_js = (e, t7) => {
    if (timers[e] && (clearTimeout(timers[e].id), delete timers[e]), !t7) return 0;
    var r2 = setTimeout(() => {
      delete timers[e], callUserCallback(() => __emscripten_timeout(e, _emscripten_get_now()));
    }, t7);
    return timers[e] = { id: r2, timeout_ms: t7 }, 0;
  };
  __setitimer_js.sig = "iid";
  var __tzset_js = (e, t7, r2, _4) => {
    var n3 = (/* @__PURE__ */ new Date()).getFullYear(), a3 = new Date(n3, 0, 1), i4 = new Date(n3, 6, 1), l3 = a3.getTimezoneOffset(), o6 = i4.getTimezoneOffset(), s5 = Math.max(l3, o6);
    HEAPU32[e >> 2] = s5 * 60, HEAP32[t7 >> 2] = +(l3 != o6);
    var c3 = (p6) => {
      var u3 = p6 >= 0 ? "-" : "+", m7 = Math.abs(p6), M2 = String(Math.floor(m7 / 60)).padStart(2, "0"), S4 = String(m7 % 60).padStart(2, "0");
      return `UTC${u3}${M2}${S4}`;
    }, g6 = c3(l3), d5 = c3(o6);
    o6 < l3 ? (stringToUTF8(g6, r2, 17), stringToUTF8(d5, _4, 17)) : (stringToUTF8(g6, _4, 17), stringToUTF8(d5, r2, 17));
  };
  __tzset_js.sig = "vpppp";
  var _emscripten_date_now = () => Date.now();
  _emscripten_date_now.sig = "d";
  var nowIsMonotonic = 1, checkWasiClock = (e) => e >= 0 && e <= 3;
  function _clock_time_get(e, t7, r2) {
    if (t7 = bigintToI53Checked(t7), !checkWasiClock(e)) return 28;
    var _4;
    if (e === 0) _4 = _emscripten_date_now();
    else if (nowIsMonotonic) _4 = _emscripten_get_now();
    else return 52;
    var n3 = Math.round(_4 * 1e3 * 1e3);
    return HEAP64[r2 >> 3] = BigInt(n3), 0;
  }
  _clock_time_get.sig = "iijp";
  var getHeapMax = () => 2147483648, _emscripten_get_heap_max = () => getHeapMax();
  _emscripten_get_heap_max.sig = "p";
  var growMemory = (e) => {
    var t7 = wasmMemory.buffer.byteLength, r2 = (e - t7 + 65535) / 65536 | 0;
    try {
      return wasmMemory.grow(r2), updateMemoryViews(), 1;
    } catch {
    }
  }, _emscripten_resize_heap = (e) => {
    var t7 = HEAPU8.length;
    e >>>= 0;
    var r2 = getHeapMax();
    if (e > r2) return false;
    for (var _4 = 1; _4 <= 4; _4 *= 2) {
      var n3 = t7 * (1 + 0.2 / _4);
      n3 = Math.min(n3, e + 100663296);
      var a3 = Math.min(r2, alignMemory(Math.max(e, n3), 65536)), i4 = growMemory(a3);
      if (i4) return true;
    }
    return false;
  };
  _emscripten_resize_heap.sig = "ip";
  var ENV = {}, getExecutableName = () => thisProgram, getEnvStrings = () => {
    if (!getEnvStrings.strings) {
      var e = (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8", t7 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: getExecutableName() };
      for (var r2 in ENV) ENV[r2] === void 0 ? delete t7[r2] : t7[r2] = ENV[r2];
      var _4 = [];
      for (var r2 in t7) _4.push(`${r2}=${t7[r2]}`);
      getEnvStrings.strings = _4;
    }
    return getEnvStrings.strings;
  }, _environ_get = (e, t7) => {
    var r2 = 0, _4 = 0;
    for (var n3 of getEnvStrings()) {
      var a3 = t7 + r2;
      HEAPU32[e + _4 >> 2] = a3, r2 += stringToUTF8(n3, a3, 1 / 0) + 1, _4 += 4;
    }
    return 0;
  };
  _environ_get.sig = "ipp";
  var _environ_sizes_get = (e, t7) => {
    var r2 = getEnvStrings();
    HEAPU32[e >> 2] = r2.length;
    var _4 = 0;
    for (var n3 of r2) _4 += lengthBytesUTF8(n3) + 1;
    return HEAPU32[t7 >> 2] = _4, 0;
  };
  _environ_sizes_get.sig = "ipp";
  function _fd_close(e) {
    try {
      var t7 = SYSCALLS.getStreamFromFD(e);
      return FS.close(t7), 0;
    } catch (r2) {
      if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
      return r2.errno;
    }
  }
  _fd_close.sig = "ii";
  function _fd_fdstat_get(e, t7) {
    try {
      var r2 = 0, _4 = 0, n3 = 0, a3 = SYSCALLS.getStreamFromFD(e), i4 = a3.tty ? 2 : FS.isDir(a3.mode) ? 3 : FS.isLink(a3.mode) ? 7 : 4;
      return HEAP8[t7] = i4, HEAP16[t7 + 2 >> 1] = n3, HEAP64[t7 + 8 >> 3] = BigInt(r2), HEAP64[t7 + 16 >> 3] = BigInt(_4), 0;
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return l3.errno;
    }
  }
  _fd_fdstat_get.sig = "iip";
  var doReadv = (e, t7, r2, _4) => {
    for (var n3 = 0, a3 = 0; a3 < r2; a3++) {
      var i4 = HEAPU32[t7 >> 2], l3 = HEAPU32[t7 + 4 >> 2];
      t7 += 8;
      try {
        var o6 = FS.read(e, HEAP8, i4, l3, _4);
      } catch (s5) {
        if (n3 > 0 && s5 instanceof FS.ErrnoError && (s5.errno == 6 || s5.errno == 6)) break;
        throw s5;
      }
      if (o6 < 0) return -1;
      if (n3 += o6, o6 < l3) break;
      typeof _4 < "u" && (_4 += o6);
    }
    return n3;
  };
  function _fd_pread(e, t7, r2, _4, n3) {
    _4 = bigintToI53Checked(_4);
    try {
      if (isNaN(_4)) return 22;
      var a3 = SYSCALLS.getStreamFromFD(e), i4 = doReadv(a3, t7, r2, _4);
      return HEAPU32[n3 >> 2] = i4, 0;
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return l3.errno;
    }
  }
  _fd_pread.sig = "iippjp";
  var doWritev = (e, t7, r2, _4) => {
    if (r2 == 1) return FS.write(e, HEAP8, HEAPU32[t7 >> 2], HEAPU32[t7 + 4 >> 2], _4);
    for (var n3 = 0, a3 = 0, i4 = t7; a3 < r2; a3++, i4 += 8) n3 += HEAPU32[i4 + 4 >> 2];
    for (var l3 = new Uint8Array(n3), o6 = 0, a3 = 0; a3 < r2; a3++, t7 += 8) {
      var s5 = HEAPU32[t7 >> 2], c3 = HEAPU32[t7 + 4 >> 2];
      l3.set(HEAPU8.subarray(s5, s5 + c3), o6), o6 += c3;
    }
    return FS.write(e, l3, 0, n3, _4);
  };
  function _fd_pwrite(e, t7, r2, _4, n3) {
    _4 = bigintToI53Checked(_4);
    try {
      if (isNaN(_4)) return 22;
      var a3 = SYSCALLS.getStreamFromFD(e), i4 = doWritev(a3, t7, r2, _4);
      return HEAPU32[n3 >> 2] = i4, 0;
    } catch (l3) {
      if (typeof FS > "u" || l3.name !== "ErrnoError") throw l3;
      return l3.errno;
    }
  }
  _fd_pwrite.sig = "iippjp";
  function _fd_read(e, t7, r2, _4) {
    try {
      var n3 = SYSCALLS.getStreamFromFD(e), a3 = doReadv(n3, t7, r2);
      return HEAPU32[_4 >> 2] = a3, 0;
    } catch (i4) {
      if (typeof FS > "u" || i4.name !== "ErrnoError") throw i4;
      return i4.errno;
    }
  }
  _fd_read.sig = "iippp";
  function _fd_seek(e, t7, r2, _4) {
    t7 = bigintToI53Checked(t7);
    try {
      if (isNaN(t7)) return 22;
      var n3 = SYSCALLS.getStreamFromFD(e);
      return FS.llseek(n3, t7, r2), HEAP64[_4 >> 3] = BigInt(n3.position), n3.getdents && t7 === 0 && r2 === 0 && (n3.getdents = null), 0;
    } catch (a3) {
      if (typeof FS > "u" || a3.name !== "ErrnoError") throw a3;
      return a3.errno;
    }
  }
  _fd_seek.sig = "iijip";
  function _fd_sync(e) {
    try {
      var t7 = SYSCALLS.getStreamFromFD(e), r2 = t7.stream_ops?.fsync?.(t7);
      return r2;
    } catch (_4) {
      if (typeof FS > "u" || _4.name !== "ErrnoError") throw _4;
      return _4.errno;
    }
  }
  _fd_sync.sig = "ii";
  function _fd_write(e, t7, r2, _4) {
    try {
      var n3 = SYSCALLS.getStreamFromFD(e), a3 = doWritev(n3, t7, r2);
      return HEAPU32[_4 >> 2] = a3, 0;
    } catch (i4) {
      if (typeof FS > "u" || i4.name !== "ErrnoError") throw i4;
      return i4.errno;
    }
  }
  _fd_write.sig = "iippp";
  var _getaddrinfo = (e, t7, r2, _4) => {
    var n3 = 0, a3 = 0, i4 = 0, l3 = 0, o6 = 0, s5 = 0, c3;
    function g6(d5, p6, u3, m7, M2, S4) {
      var v5, F5, b4, A4;
      return F5 = d5 === 10 ? 28 : 16, M2 = d5 === 10 ? inetNtop6(M2) : inetNtop4(M2), v5 = _malloc(F5), A4 = writeSockaddr(v5, d5, M2, S4), b4 = _malloc(32), HEAP32[b4 + 4 >> 2] = d5, HEAP32[b4 + 8 >> 2] = p6, HEAP32[b4 + 12 >> 2] = u3, HEAPU32[b4 + 24 >> 2] = m7, HEAPU32[b4 + 20 >> 2] = v5, d5 === 10 ? HEAP32[b4 + 16 >> 2] = 28 : HEAP32[b4 + 16 >> 2] = 16, HEAP32[b4 + 28 >> 2] = 0, b4;
    }
    if (r2 && (i4 = HEAP32[r2 >> 2], l3 = HEAP32[r2 + 4 >> 2], o6 = HEAP32[r2 + 8 >> 2], s5 = HEAP32[r2 + 12 >> 2]), o6 && !s5 && (s5 = o6 === 2 ? 17 : 6), !o6 && s5 && (o6 = s5 === 17 ? 2 : 1), s5 === 0 && (s5 = 6), o6 === 0 && (o6 = 1), !e && !t7) return -2;
    if (i4 & -1088 || r2 !== 0 && HEAP32[r2 >> 2] & 2 && !e) return -1;
    if (i4 & 32) return -2;
    if (o6 !== 0 && o6 !== 1 && o6 !== 2) return -7;
    if (l3 !== 0 && l3 !== 2 && l3 !== 10) return -6;
    if (t7 && (t7 = UTF8ToString(t7), a3 = parseInt(t7, 10), isNaN(a3))) return i4 & 1024 ? -2 : -8;
    if (!e) return l3 === 0 && (l3 = 2), i4 & 1 || (l3 === 2 ? n3 = _htonl(2130706433) : n3 = [0, 0, 0, _htonl(1)]), c3 = g6(l3, o6, s5, null, n3, a3), HEAPU32[_4 >> 2] = c3, 0;
    if (e = UTF8ToString(e), n3 = inetPton4(e), n3 !== null) if (l3 === 0 || l3 === 2) l3 = 2;
    else if (l3 === 10 && i4 & 8) n3 = [0, 0, _htonl(65535), n3], l3 = 10;
    else return -2;
    else if (n3 = inetPton6(e), n3 !== null) if (l3 === 0 || l3 === 10) l3 = 10;
    else return -2;
    return n3 != null ? (c3 = g6(l3, o6, s5, e, n3, a3), HEAPU32[_4 >> 2] = c3, 0) : i4 & 4 ? -2 : (e = DNS.lookup_name(e), n3 = inetPton4(e), l3 === 0 ? l3 = 2 : l3 === 10 && (n3 = [0, 0, _htonl(65535), n3]), c3 = g6(l3, o6, s5, null, n3, a3), HEAPU32[_4 >> 2] = c3, 0);
  };
  _getaddrinfo.sig = "ipppp";
  var _getnameinfo = (e, t7, r2, _4, n3, a3, i4) => {
    var l3 = readSockaddr(e, t7);
    if (l3.errno) return -6;
    var o6 = l3.port, s5 = l3.addr, c3 = false;
    if (r2 && _4) {
      var g6;
      if (i4 & 1 || !(g6 = DNS.lookup_addr(s5))) {
        if (i4 & 8) return -2;
      } else s5 = g6;
      var d5 = stringToUTF8(s5, r2, _4);
      d5 + 1 >= _4 && (c3 = true);
    }
    if (n3 && a3) {
      o6 = "" + o6;
      var d5 = stringToUTF8(o6, n3, a3);
      d5 + 1 >= a3 && (c3 = true);
    }
    return c3 ? -12 : 0;
  };
  _getnameinfo.sig = "ipipipii";
  var _random_get = (e, t7) => randomFill(HEAPU8.subarray(e, e + t7));
  _random_get.sig = "ipp";
  var stringToNewUTF8 = (e) => {
    var t7 = lengthBytesUTF8(e) + 1, r2 = _malloc(t7);
    return r2 && stringToUTF8(e, r2, t7), r2;
  }, removeFunction = (e) => {
    functionsInTableMap.delete(getWasmTableEntry(e)), setWasmTableEntry(e, null), freeTableIndexes.push(e);
  }, FS_createPath = (...e) => FS.createPath(...e), FS_unlink = (...e) => FS.unlink(...e), FS_createLazyFile = (...e) => FS.createLazyFile(...e), FS_createDevice = (...e) => FS.createDevice(...e), setTempRet0 = (e) => __emscripten_tempret_set(e), _setTempRet0 = setTempRet0, getTempRet0 = (e) => __emscripten_tempret_get(), _getTempRet0 = getTempRet0, _emscripten_force_exit = (e) => {
    __emscripten_runtime_keepalive_clear(), _exit(e);
  };
  _emscripten_force_exit.sig = "vi";
  var _sched_yield = () => 0;
  _sched_yield.sig = "i";
  var findMatchingCatch = (e) => (setTempRet0(0), 0), ___cxa_find_matching_catch_2 = () => findMatchingCatch([]);
  ___cxa_find_matching_catch_2.sig = "p";
  var ___cxa_find_matching_catch_3 = (e) => findMatchingCatch([e]);
  ___cxa_find_matching_catch_3.sig = "pp";
  class ExceptionInfo {
    constructor(t7) {
      this.excPtr = t7, this.ptr = t7 - 24;
    }
    set_type(t7) {
      HEAPU32[this.ptr + 4 >> 2] = t7;
    }
    get_type() {
      return HEAPU32[this.ptr + 4 >> 2];
    }
    set_destructor(t7) {
      HEAPU32[this.ptr + 8 >> 2] = t7;
    }
    get_destructor() {
      return HEAPU32[this.ptr + 8 >> 2];
    }
    set_caught(t7) {
      t7 = t7 ? 1 : 0, HEAP8[this.ptr + 12] = t7;
    }
    get_caught() {
      return HEAP8[this.ptr + 12] != 0;
    }
    set_rethrown(t7) {
      t7 = t7 ? 1 : 0, HEAP8[this.ptr + 13] = t7;
    }
    get_rethrown() {
      return HEAP8[this.ptr + 13] != 0;
    }
    init(t7, r2) {
      this.set_adjusted_ptr(0), this.set_type(t7), this.set_destructor(r2);
    }
    set_adjusted_ptr(t7) {
      HEAPU32[this.ptr + 16 >> 2] = t7;
    }
    get_adjusted_ptr() {
      return HEAPU32[this.ptr + 16 >> 2];
    }
  }
  var uncaughtExceptionCount = 0, ___cxa_throw = (e, t7, r2) => {
    var _4 = new ExceptionInfo(e);
    _4.init(t7, r2), uncaughtExceptionCount++, abort();
  };
  ___cxa_throw.sig = "vppp";
  var exceptionCaught = [], ___cxa_rethrow = () => {
    exceptionCaught.length || abort("no exception to throw");
    var e = exceptionCaught.at(-1), t7 = e.excPtr;
    e.set_rethrown(true), e.set_caught(false), uncaughtExceptionCount++, abort();
  };
  ___cxa_rethrow.sig = "v";
  var ___cxa_begin_catch = (e) => {
    var t7 = new ExceptionInfo(e);
    return t7.get_caught() || (t7.set_caught(true), uncaughtExceptionCount--), t7.set_rethrown(false), exceptionCaught.push(t7), ___cxa_get_exception_ptr(e);
  };
  ___cxa_begin_catch.sig = "pp";
  var ___cxa_end_catch = () => {
    _setThrew(0, 0);
    var e = exceptionCaught.pop();
    ___cxa_decrement_exception_refcount(e.excPtr);
  };
  ___cxa_end_catch.sig = "v";
  var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;
  ___cxa_uncaught_exceptions.sig = "i";
  var ___cxa_current_primary_exception = () => {
    if (!exceptionCaught.length) return 0;
    var e = exceptionCaught[exceptionCaught.length - 1];
    return ___cxa_increment_exception_refcount(e.excPtr), e.excPtr;
  };
  ___cxa_current_primary_exception.sig = "p";
  var ___cxa_rethrow_primary_exception = (e) => {
    if (e) {
      var t7 = new ExceptionInfo(e);
      t7.set_rethrown(true), t7.set_caught(false), uncaughtExceptionCount++, abort();
    }
  };
  ___cxa_rethrow_primary_exception.sig = "vp";
  var ___resumeException = (e) => {
    abort();
  };
  ___resumeException.sig = "vp", registerWasmPlugin(), FS.createPreloadedFile = FS_createPreloadedFile, FS.preloadFile = FS_preloadFile, FS.staticInit(), ENVIRONMENT_IS_NODE && NODEFS.staticInit();
  {
    initMemory(), Module.noExitRuntime && (noExitRuntime = Module.noExitRuntime), Module.print && (out = Module.print), Module.printErr && (err = Module.printErr), Module.dynamicLibraries && (dynamicLibraries = Module.dynamicLibraries), Module.arguments && (programArgs = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram);
    var preInit = Module.preInit;
    if (preInit) for (typeof preInit == "function" && (Module.preInit = preInit = [preInit]); preInit.length > 0; ) preInit.shift()();
  }
  Module.callMain = callMain, Module.stackSave = stackSave, Module.stackRestore = stackRestore, Module.ENV = ENV, Module.addRunDependency = addRunDependency, Module.removeRunDependency = removeRunDependency, Module.addFunction = addFunction, Module.removeFunction = removeFunction, Module.setValue = setValue, Module.getValue = getValue, Module.UTF8ToString = UTF8ToString, Module.stringToNewUTF8 = stringToNewUTF8, Module.stringToUTF8OnStack = stringToUTF8OnStack, Module.FS_preloadFile = FS_preloadFile, Module.FS_unlink = FS_unlink, Module.FS_createPath = FS_createPath, Module.FS_createDevice = FS_createDevice, Module.FS = FS, Module.FS_createDataFile = FS_createDataFile, Module.FS_createLazyFile = FS_createLazyFile, Module.MEMFS = MEMFS, Module.PROXYFS = PROXYFS, Module.IDBFS = IDBFS, Module._exit = _exit, Module._setTempRet0 = _setTempRet0, Module._getTempRet0 = _getTempRet0, Module._emscripten_force_exit = _emscripten_force_exit, Module._sched_yield = _sched_yield, Module.___cxa_find_matching_catch_2 = ___cxa_find_matching_catch_2, Module.___cxa_find_matching_catch_3 = ___cxa_find_matching_catch_3, Module.___cxa_throw = ___cxa_throw, Module.___cxa_rethrow = ___cxa_rethrow, Module.___cxa_begin_catch = ___cxa_begin_catch, Module.___cxa_end_catch = ___cxa_end_catch, Module.___cxa_uncaught_exceptions = ___cxa_uncaught_exceptions, Module.___cxa_current_primary_exception = ___cxa_current_primary_exception, Module.___cxa_rethrow_primary_exception = ___cxa_rethrow_primary_exception, Module.___resumeException = ___resumeException;
  var ASM_CONSTS = {}, _palloc0, _RelationGetNumberOfBlocksInFork, _ExtendBufferedRel, _MarkBufferDirty, _XLogBeginInsert, _XLogRegisterData, _XLogRegisterBuffer, _XLogInsert, _UnlockReleaseBuffer, _palloc, _brin_build_desc, _EnterParallelMode, _CreateParallelContext, _GetTransactionSnapshot, _RegisterSnapshot, _table_parallelscan_estimate, _add_size, _tuplesort_estimate_shared, _mul_size, _strlen, _InitializeParallelDSM, _UnregisterSnapshot, _DestroyParallelContext, _ExitParallelMode, _shm_toc_allocate, _ConditionVariableInit, _table_parallelscan_initialize, _tuplesort_initialize_shared, _shm_toc_insert, _LaunchParallelWorkers, _WaitForParallelWorkersToAttach, _s_lock, _ConditionVariableSleep, _ConditionVariableCancelSleep, _tuplesort_performsort, _AllocSetContextCreateInternal, _tuplesort_end, _MemoryContextReset, _brin_deform_tuple, _pfree, _MemoryContextDelete, _errstart_cold, _errmsg_internal, _errfinish, _log_newpage_buffer, _ProcessInterrupts, _errstart, _errcode, _errmsg, _LockBuffer, _ReleaseBuffer, _IndexGetRelation, _table_open, _ReadBufferExtended, _table_close, _build_reloptions, _RelationGetIndexScan, _pgstat_assoc_relation, _palloc0_mul, _index_getprocinfo, _fmgr_info_copy, _FunctionCall4Coll, _palloc_mul, _FunctionCall1Coll, _brin_free_desc, _WaitForParallelWorkersToFinish, _PageGetFreeSpace, _BufferGetBlockNumber, _BuildIndexInfo, _Int64GetDatum, _DirectFunctionCall2Coll, _RecoveryInProgress, _GetUserIdAndSecContext, _SetUserIdAndSecContext, _NewGUCNestLevel, _RestrictSearchPath, _index_open, _object_ownercheck, _aclcheck_error, _AtEOXact_GUC, _relation_close, _errhint, _GetUserId, _ReadBuffer, _shm_toc_lookup, _pgstat_report_activity, _tuplesort_attach_shared, _index_close, _table_beginscan_parallel, _ConditionVariableSignal, _datumCopy, _lookup_type_cache, _get_fn_opclass_options, _log, _pg_detoast_datum, _index_getprocid, _errdetail_internal, _pg_popcount_optimized, _init_local_reloptions, _initStringInfo, _appendStringInfoChar, _appendStringInfo, _FunctionCall2Coll, _SearchSysCache4, _SysCacheGetAttrNotNull, _ReleaseSysCache, _get_opcode, _fmgr_info_cxt, _Float8GetDatum, _numeric_float8, _numeric_sub, _DirectFunctionCall1Coll, _pg_detoast_datum_packed, _pg_qsort, _get_typbyval, _get_typlen, _qsort_arg, _add_local_int_reloption, _getTypeOutputInfo, _fmgr_info, _OutputFunctionCall, _cstring_to_text_with_len, _accumArrayResult, _makeArrayResult, _OidOutputFunctionCall, _cstring_to_text, _PageGetExactFreeSpace, _PageIndexTupleOverwrite, _PageInit, _PageAddItemExtended, _LockRelationForExtension, _UnlockRelationForExtension, _smgropen, _smgrpin, _ItemPointerEquals, _detoast_external_attr, _CreateTemplateTupleDesc, _TupleDescInitEntry, _repalloc, _memcmp, _SearchSysCache1, _get_opfamily_name, _SearchSysCacheList, _check_amproc_signature, _check_amoptsproc_signature, _format_procedure, _format_operator, _check_amop_signature, _identify_opfamily_groups, _format_type_be, _ReleaseCatCacheList, _format_type_with_typemod, _errdetail, _strcmp, _DatumGetEOHP, _EOH_get_flat_size, _EOH_flatten_into, _toast_raw_datum_size, _getmissingattr, _hash_create, _hash_search, _nocachegetattr, _heap_getsysattr, _heap_form_tuple, _heap_modify_tuple, _heap_deform_tuple, _heap_modify_tuple_by_cols, _heap_freetuple, _hash_bytes, _index_form_tuple, _MemoryContextAllocZero, _nocache_index_getattr, _index_deform_tuple, _CopyIndexTuple, _CreateTupleDescTruncatedCopy, _enlargeStringInfo, _slot_getsomeattrs_int, _pg_lltoa, _pg_ltoa, _pq_sendbytes, _pg_printf, _relation_open, _LockRelationOid, _RelationIdGetRelation, _try_relation_open, _SearchSysCacheExists, _UnlockRelationOid, _relation_openrv, _AcceptInvalidationMessages, _RangeVarGetRelidExtended, _RelationClose, _add_reloption_kind, _register_reloptions_validator, _lappend, _pstrdup, _add_int_reloption, _add_real_reloption, _add_enum_reloption, _add_string_reloption, _strdup, _MemoryContextStrdup, _transformRelOptions, _deconstruct_array_builtin, _strncmp, _defGetString, _strchr, _defGetBoolean, _pg_sprintf, _untransformRelOptions, _text_to_cstring, _makeString, _makeDefElem, _heap_reloptions, _index_reloptions, _strcpy, _MemoryContextAlloc, _parse_bool, _parse_int, _parse_real, _pg_strcasecmp, _ScanKeyInit, _dsm_segment_handle, _dsm_create, _dsm_segment_address, _dsa_pin_mapping, _dsm_attach, _dsm_detach, _ShmemInitStruct, _LWLockAcquire, _LWLockRelease, _LWLockConditionalAcquire, _dsa_create_ext, _dsa_allocate_extended, _dsa_get_address, _LWLockInitialize, _dsa_attach, _dsa_free, _dsa_get_total_size, _MemoryContextMemAllocated, _check_stack_depth, _GetCurrentCommandId, _toast_open_indexes, _GetNewOidWithIndex, _heap_insert, _RelationGetIndexList, _list_free, _systable_beginscan, _systable_getnext, _systable_endscan, _toast_close_indexes, _systable_beginscan_ordered, _systable_getnext_ordered, _systable_endscan_ordered, _get_toast_snapshot, _convert_tuples_by_position, _execute_attr_map_tuple, _ExecStoreVirtualTuple, _bms_is_member, _bms_add_member, _free_conversion_map, _CreateTupleDescCopy, _FreeTupleDesc, _ResourceOwnerEnlarge, _ResourceOwnerRemember, _DecrTupleDescRefCount, _ResourceOwnerForget, _datumIsEqual, _equalRowTypes, _hashRowType, _namestrcpy, _TupleDescInitEntryCollation, _BuildDescFromLists, _stringToNode, _psprintf, _pg_detoast_datum_copy, _get_typlenbyvalalign, _deconstruct_array, _ginCompareAttEntries, _repalloc_huge, _GinDataLeafPageGetItems, _tbm_add_tuples, _ginPostingListDecode, _ItemPointerCompare, _gintuple_get_attrnum, _gintuple_get_key, _LockPage, _UnlockPage, _vacuum_delay_point, _RecordFreeIndexPage, _IndexFreeSpaceMapVacuum, _repalloc_mul, _initGinState, _pg_prng_double, _pgstat_progress_update_param, _log_newpage_range, _GetFreeIndexPage, _ConditionalLockBuffer, _LockBufferForCleanup, _ReadNextFullTransactionId, _PageIndexMultiDelete, _list_make1_impl, _list_delete_first, _lcons, _pow, _smgrnblocks, _list_free_deep, _BufFileCreateTemp, _BufFileWrite, _BufFileReadExact, _BufFileClose, _pairingheap_remove_first, _pairingheap_add, _float_overflow_error, _float8_cmp_internal, _float_underflow_error, _DirectFunctionCall5Coll, _pairingheap_allocate, _get_func_rettype, _OidFunctionCall1Coll, _GenerationContextCreate, _block_range_read_stream_cb, _read_stream_begin_relation, _read_stream_next_buffer, _read_stream_end, _estimate_rel_size, __hash_spareindex, __hash_getbuf, __hash_relbuf, __hash_get_indextuple_hashkey, _hashcharextended, _hashint8, _hashint8extended, _hash_bytes_extended, _hashfloat8, _hashfloat8extended, _pg_newlocale_from_collation, __hash_ovflblkno_to_bitno, __hash_get_totalbuckets, _hash_destroy, _list_append_unique_oid, _list_member_oid, _CommandCounterIncrement, _get_opclass_input_type, _list_concat_copy, _HeapTupleSatisfiesVisibility, _GetAccessStrategy, _FreeAccessStrategy, _heap_getnext, _ExecStoreBufferHeapTuple, _heap_fetch, _HeapTupleSatisfiesVacuum, _GetMultiXactIdMembers, _TransactionIdPrecedes, _GetBulkInsertState, _FreeBulkInsertState, _visibilitymap_clear_locked, _pgstat_count_heap_insert, _heap_multi_insert, _ExecFetchSlotHeapTuple, _heap_delete, _IsInParallelMode, _visibilitymap_pin, _HeapTupleSatisfiesUpdate, _TransactionIdIsCurrentTransactionId, _TransactionIdDidCommit, _UnlockTuple, _TransactionIdIsInProgress, _bms_free, _bms_add_members, _bms_next_member, _bms_overlap, _HeapTupleGetUpdateXid, _heap_lock_tuple, _MultiXactIdPrecedes, _heap_tuple_needs_eventual_freeze, _PrefetchBuffer, _RelationTruncate, _FlushRelationBuffers, _smgrexists, _table_slot_create, _ExecDropSingleTupleTableSlot, _CreateExecutorState, _MakePerTupleExprContext, _ExecPrepareQual, _GetOldestNonRemovableTransactionId, _FormIndexDatum, _FreeExecutorState, _MakeSingleTupleTableSlot, _tuplesort_getdatum, _ExecStoreHeapTuple, _XidInMVCCSnapshot, _bsearch, _XLogRecGetBlockTagExtended, _hash_seq_init, _hash_seq_search, _errcode_for_file_access, _pg_snprintf, _OpenTransientFile, _ftruncate, ___errno_location, _pwrite, _CloseTransientFile, _sscanf, _unlink, _fsync_fname, _GetCurrentTimestamp, _get_database_name, _get_namespace_name, _pg_prng_uint32, _GetRecordedFreeSpace, _visibilitymap_get_status, _vac_estimate_reltuples, _WaitLatch, _ResetLatch, _clock_gettime, _WalUsageAccumDiff, _BufferUsageAccumDiff, _appendStringInfoString, _set_errcontext_domain, _errcontext_msg, _visibilitymap_prepare_truncate, _GetIndexAmRoutine, _check_enable_rls, _pg_class_aclcheck, _pg_attribute_aclcheck, _try_index_open, _btboolcmp, _btint2cmp, _btint4cmp, _btint8cmp, _btoidcmp, _btcharcmp, __bt_form_posting, __bt_mkscankey, __bt_checkpage, __bt_compare, __bt_relbuf, __bt_search, __bt_binsrch_insert, __bt_freestack, __bt_metaversion, _get_opfamily_member, _OidFunctionCall2Coll, __bt_allequalimage, ___wasm_setjmp_test, _before_shmem_exit, ___wasm_setjmp, _cancel_before_shmem_exit, _pg_re_throw, _emscripten_longjmp, _ConditionVariableBroadcast, _datum_image_eq, _time, __bt_check_natts, _strlcpy, _strncpy, _timestamptz_to_str, _XLogRecGetBlockRefInfo, _varstr_cmp, _get_atttype, _getBaseType, _exprType, _GetActiveSnapshot, _errdetail_relkind_not_supported, _table_openrv, _table_slot_callbacks, _clamp_row_est, _pre_format_elog_string, _format_elog_string, _IsTransactionState, _estimate_expression_value, _SetConfigOption, _XLogFlush, _get_call_result_type, _HeapTupleHeaderGetDatum, _GenericXLogStart, _GenericXLogRegisterBuffer, _GenericXLogFinish, _GenericXLogAbort, _errmsg_plural, _ReadNextMultiXactId, _ReadMultiXactIdRange, _MultiXactIdPrecedesOrEquals, _init_MultiFuncCall, _TupleDescGetAttInMetadata, _per_MultiFuncCall, _BuildTupleFromCStrings, _end_MultiFuncCall, _GetCurrentSubTransactionId, _GetSessionUserId, _WaitForBackgroundWorkerShutdown, _RegisterDynamicBackgroundWorker, _appendBinaryStringInfo, _pq_getmsgbyte, _ThrowErrorData, _pq_getmsgint, _pq_getmsgint64, _die, _pqsignal_be, _BackgroundWorkerUnblockSignals, _load_external_function, _BackgroundWorkerInitializeConnectionByOid, _GetDatabaseEncoding, _StartTransactionCommand, _CommitTransactionCommand, _PushActiveSnapshot, _PopActiveSnapshot, _RmgrNotFound, _InitMaterializedSRF, _tuplestore_putvalues, _pread, _lseek, _strspn, _strtoll, _AllocateFile, _fgets, _ferror, _FreeFile, _getpid, _read, _write, _durable_rename, _BlessTupleDesc, _fstat, _superuser_arg, _wal_segment_close, _wal_segment_open, _XLogReaderAllocate, _XLogReadRecord, _XLogReaderFree, _strtoull, _access, _IsAbortedTransactionBlockState, _GetTopFullTransactionId, _GetCurrentFullTransactionId, _GetCurrentTransactionNestLevel, _ResourceOwnerCreate, _AbortCurrentTransaction, _PreventInTransactionBlock, _IsTransactionBlock, _RegisterXactCallback, _UnregisterXactCallback, _RegisterSubXactCallback, _BeginInternalSubTransaction, _ReleaseCurrentSubTransaction, _ResourceOwnerDelete, _RollbackAndReleaseCurrentSubTransaction, _pg_usleep, _close, _ReleaseExternalFD, _GetDefaultCharSignedness, _SplitIdentifierString, _guc_malloc, _find_option, _gettimeofday, _pg_strong_random, _stat, _GetFlushRecPtr, _GetXLogReplayRecPtr, _TimestampDifferenceMilliseconds, _strtoul, _readlink, _pg_fprintf, _fflush, _pgl_system, _wait_result_to_str, _replace_percent_placeholders, _makeStringInfo, _pg_toupper, _numeric_in, _DirectFunctionCall3Coll, _palloc_extended, _pg_vsnprintf, _XLogFindNextRecord, _RestoreBlockImage, _timestamptz_in, _fscanf, _symlink, _ConditionVariableTimedSleep, _ParseDateTime, _DecodeDateTime, _tm2timestamp, _XLogRecStoreStats, _hash_get_num_entries, _read_local_xlog_page_no_wait, _escape_json_with_len, _BufFileSeek, _lstat, _destroyStringInfo, _list_sort, _pgl_geteuid, _getegid, _pg_checksum_page, _CreateDestReceiver, _bbsink_forward_end_archive, _bbsink_forward_begin_manifest, _bbsink_forward_end_manifest, _bbsink_forward_end_backup, _bbsink_forward_cleanup, _MemoryContextAllocExtended, _appendStringInfoVA, _list_concat, _strrchr, _bbsink_forward_begin_backup, _bbsink_forward_archive_contents, _bbsink_forward_begin_archive, _bbsink_forward_manifest_contents, _has_privs_of_role, _BaseBackupAddTarget, _list_copy, _tuplestore_puttuple, _isatty, _makeRangeVar, _DefineIndex, _getc, _fread, _clearerr, _OidInputFunctionCall, _copyObjectImpl, _get_rolespec_oid, _lappend_oid, _get_object_address, _makeTypeNameFromNameList, _SearchSysCacheLocked1, _SearchSysCache2, _SysCacheGetAttr, _CatalogTupleUpdate, _get_attnum, _get_rel_name, _CatalogTupleDelete, _get_namespace_oid, _SearchSysCache3, _performDeletion, _CatalogTupleInsert, _recordDependencyOn, _RunObjectPostAlterHook, _aclcheck_error_col, _get_element_type, _object_aclcheck, _isTempNamespace, _pg_attribute_aclcheck_all, _IsToastNamespace, _IsCatalogNamespace, _superuser, _SearchSysCacheAttName, _LockDatabaseObject, _new_object_addresses, _UnlockDatabaseObject, _free_object_addresses, _performMultipleDeletions, _recordDependencyOnExpr, _get_typ_typrelid, _query_tree_walker_impl, _expression_tree_walker_impl, _add_exact_object_address, _get_rel_relkind, _SystemAttributeDefinition, _get_typtype, _list_delete_last, _type_is_collatable, _CatalogOpenIndexes, _CatalogCloseIndexes, _get_relname_relid, _GetSysCacheOid, _SearchSysCacheCopy, _CheckTableNotInUse, _RelationForgetRelation, _construct_array, _make_parsestate, _addRangeTableEntryForRelation, _addNSItemToQuery, _transformExpr, _coerce_to_boolean, _assign_expr_collations, _pull_var_clause, _get_attname, _equal, _coerce_to_target_type, _nodeToString, _list_delete_nth_cell, _lappend_int, _CatalogTupleInsertWithInfo, _heap_truncate_find_FKs, _list_oid_cmp, _buildint2vector, _buildoidvector, _parser_errposition, _check_functions_in_node, _exprLocation, _exprTypmod, _get_base_element_type, _make_ands_explicit, _SystemFuncName, _CreateTrigger, _plan_create_index_workers, _GetLatestSnapshot, _make_ands_implicit, _get_rel_relispartition, _get_partition_ancestors, _tuplesort_begin_datum, _tuplesort_putdatum, _list_delete_oid, _get_rel_namespace, _ExecOpenIndices, _ExecCloseIndices, _CatalogTupleUpdateWithInfo, _ConditionalLockRelationOid, _RelnameGetRelid, _get_relkind_objtype, _isAnyTempNamespace, _RelationIsVisible, _TypenameGetTypid, _FuncnameGetCandidates, _DeconstructQualifiedName, _get_func_arg_info, _NameListToString, _OpernameGetOprid, _OpclassnameGetOpcid, _OpclassIsVisible, _get_ts_config_oid, _makeRangeVarFromNameList, _quote_identifier, _atoi, _GetSearchPathMatcher, _SearchPathMatchesCurrentEnvironment, _get_collation_oid, _GetDatabaseEncodingName, _CacheRegisterSyscacheCallback, _fetch_search_path, _get_extension_oid, _get_tablespace_oid, _get_role_oid, _get_language_oid, _get_am_oid, _get_index_am_oid, _GetForeignServerByName, _typeStringToTypeName, _makeFloat, _list_make2_impl, _check_object_ownership, _GetUserNameFromId, _format_type_extended, _quote_qualified_identifier, _get_tablespace_name, _GetForeignServerExtended, _GetForeignServer, _get_extension_name, _construct_empty_array, _format_type_be_qualified, _get_namespace_name_or_temp, _list_make3_impl, _get_am_name, _construct_md_array, _pull_varattnos, _makeBoolExpr, _eval_const_expressions, _get_func_name, _construct_array_builtin, _makeObjectName, _get_primary_key_attnos, _check_functional_grouping, _bms_is_subset, _ProcessGUCArray, _LockHeldByMe, _CheckRelationOidLockedByMe, _getExtensionOfObject, _deleteDependencyRecordsFor, _find_inheritance_children, _ActiveSnapshotSet, _find_all_inheritors, _has_superclass, _strstr, _memchr, _get_opname, _build_function_result_tupdesc_t, _CheckFunctionValidatorAccess, _AcquireRewriteLocks, _pg_parse_query, _get_func_result_type, _function_parse_error_transpose, _geterrposition, _getinternalerrposition, _pg_mblen_cstr, _pg_mbstrlen_with_len, _errposition, _internalerrposition, _internalerrquery, _bms_num_members, _list_concat_unique_oid, _ATExecChangeOwner, _quote_literal_cstr, _get_array_type, _pnstrdup, _pg_mbcliplen, _smgrtruncate, _smgrreadv, _NewRelationCreateToastTable, _parse_analyze_fixedparams, _transformStmt, _free_parsestate, _makeFromExpr, _assign_query_collations, _makeTargetEntry, _exprCollation, _transformSortClause, _transformDistinctClause, _ParseFuncOrColumn, _select_common_type, _coerce_to_common_type, _select_common_collation, _contain_vars_of_level, _expandNSItemAttrs, _makeAlias, _addRangeTableEntryForSubquery, _assign_list_collations, _expandNSItemVars, _markTargetListOrigins, _addRangeTableEntryForJoin, _list_truncate, _makeVar, _analyze_requires_snapshot, _makeNullConst, _get_sort_group_operators, _refnameNamespaceItem, _getRTEPermissionInfo, _setup_parser_errposition_callback, _cancel_parser_errposition_callback, _locate_var_of_level, _makeBoolean, _makeInteger, _makeSimpleA_Expr, _makeTypeName, _SystemTypeName, _makeFuncCall, _makeA_Expr, _list_make4_impl, _addTargetToSortList, _locate_agg_of_level, _list_intersection_int, _get_sortgroupclause_tle, _flatten_join_alias_vars, _list_member_int, _list_union_int, _makeFuncExpr, _get_rte_attribute_name, _expression_tree_mutator_impl, _checkNameSpaceConflicts, _addRangeTableEntryForENR, _addRangeTableEntry, _FigureColname, _addRangeTableEntryForFunction, _coerce_to_specific_type, _typenameTypeIdAndMod, _get_typcollation, _markNullableIfNeeded, _markVarForSelectPriv, _coerce_type, _LookupFuncName, _parserOpenTable, _strip_implicit_coercions, _colNameToVar, _op_hashjoinable, _get_commutator, _get_ordering_op_properties, _can_coerce_type, _get_sortgroupref_tle, _assignSortGroupRef, _targetIsInSortList, _contain_aggs_of_level, _find_coercion_pathway, _typeidType, _typeTypeCollation, _typeLen, _typeByVal, _get_type_category_preferred, _makeConst, _lookup_rowtype_tupdesc, _type_is_enum, _verify_common_type, _type_is_range, _bms_del_member, _list_member, _raw_expression_tree_walker_impl, _type_is_rowtype, _scanNSItemForColumn, _make_op, _make_scalar_array_op, _count_nonjunk_tlist_entries, _makeWholeRowVar, _expandRTE, _contain_var_clause, _jsonb_in, _get_func_prokind, _escape_json, _geterrcode, _bit_in, _repalloc0, _bms_union, _varstr_levenshtein_less_equal, _get_atttypetypmodcoll, _raw_parser, _errsave_start, _errsave_finish, _makeColumnDef, _GetDefaultOpClass, _transformIndexStmt, _ChooseRelationName, _deparse_context_for, _deparse_expression, _expression_planner, _scanner_init, _scanner_finish, _core_yylex, _isxdigit, _scanner_isspace, _truncate_identifier, _ScanKeywordLookup, _pg_verifymbstr, _downcase_truncate_identifier, _pg_database_encoding_max_length, _getTypeInputInfo, _RenameSchema, _check_can_set_role, _namein, _BlockSampler_Init, _reservoir_init_selection_state, _reservoir_get_next_S, _sampler_random_fract, _std_typanalyze, _BlockSampler_HasMore, _BlockSampler_Next, _Async_Notify, _RangeVarCallbackMaintainsTable, _make_new_heap, _finish_heap_swap, _RenameRelationInternal, _OpenPipeStream, _pg_is_ascii, _ClosePipeStream, _PreventCommandIfReadOnly, _BeginCopyFrom, _EndCopyFrom, _ProcessCopyOptions, _pg_strtoint64, _CopyFromErrorCallback, _bms_make_singleton, _ExecInitRangeTable, _ExecInitResultRelation, _ExecInitQual, _contain_volatile_functions, _NextCopyFrom, _ExecCloseResultRelations, _ExecCloseRangeTableRelations, _ExecConstraints, _ExecInsertIndexTuples, _build_column_default, _ExecInitExpr, _fileno, _NextCopyFromRawFields, _resetStringInfo, _pq_copymsgbytes, _pg_encoding_max_length, _tolower, _pg_plan_query, _PushCopiedSnapshot, _UpdateActiveSnapshotCommandId, _CreateQueryDesc, _ExecutorStart, _ExecutorFinish, _ExecutorEnd, _FreeQueryDesc, _ExecutorRun, _pg_server_to_any, _fwrite, _CreateTableAsRelExists, _QueryRewrite, _DefineRelation, _rmdir, _atof, _int8in, _oidin, _RemoveObjects, _GetCommandTagEnum, _CreateCommandTag, _GetCommandTagName, _NewExplainState, _ExplainBeginOutput, _ExplainEndOutput, _ExplainOpenGroup, _ExplainPrintPlan, _ExplainIndentText, _ExplainPropertyInteger, _ExplainCloseGroup, _ExplainPropertyFloat, _ExplainPrintTriggers, _ExplainPropertyUInteger, _ExplainPropertyText, _GetConfigOptionByName, _ExplainPrintJITSummary, _ExplainPropertyBool, _InstrEndLoop, _appendStringInfoSpaces, _ExplainQueryText, _ExplainQueryParameters, _get_func_namespace, _escape_xml, _GetExplainExtensionId, _GetExplainExtensionState, _SetExplainExtensionState, _RegisterExtensionExplainOption, _get_extension_schema, _get_function_sibling_type, _GetSysCacheHashValue, _CreateSchemaCommand, _get_rel_type_id, _set_config_option, _pg_any_to_server, _DirectFunctionCall4Coll, _replace_text, _strpbrk, _ProcessUtility, _CleanQuerytext, _GetForeignDataWrapper, _CreateExprContext, _EnsurePortalSnapshotExists, _CheckIndexCompatible, _op_input_types, _ResolveOpClass, _get_opclass_family, _get_opfamily_member_for_cmptype, _pgstat_count_truncate, _SPI_connect, _SPI_exec, _SPI_execute, _SPI_getvalue, _generate_operator_clause, _SPI_finish, _CreateTransientRelDestReceiver, _MemoryContextSetIdentifier, _checkExprHasSubLink, _MemoryContextSetParent, _copyParamList, _SetTuplestoreDestReceiverParams, _tuplestore_rescan, _MemoryContextDeleteChildren, _GetCachedPlan, _makeParamList, _ReleaseCachedPlan, _bms_equal, _func_volatile, _register_label_provider, _DefineSequence, _AlterSequence, _RangeVarCallbackOwnsRelation, _nextval, _textToQualifiedNameList, _nextval_internal, _setval_oid, _tuplestore_gettupleslot, _list_delete, _tuplestore_end, _list_append_unique, _get_rel_relam, _contain_mutable_functions, _RemoveRelations, _ExecuteTruncateGuts, _InitResultRelInfo, _AlterTableLookupRelation, _AlterTable, _AlterTableInternal, _AlterTableGetLockLevel, _pg_get_indexdef_string, _ExecStoreAllNullTuple, _chmod, _ChangeVarNodes, _tuplestore_begin_heap, _tuplestore_puttupleslot, _ExecForceStoreHeapTuple, _ExecUpdateLockMode, _bms_copy, _strtoint, _strtod, _plain_crypt_verify, _ProcessConfigFile, _pgl_exit, _dsa_get_handle, _pg_strncasecmp, _guc_free, _ExecReScan, _ExecAsyncResponse, _ExecAsyncRequestDone, _ExecAsyncRequestPending, _ExprEvalPushStep, _lookup_rowtype_tupdesc_copy, _ExecInitExprWithParams, _ExecInitExprList, _ExecGetResultType, _ExecInitExtraTupleSlot, _MakeExpandedObjectReadOnlyInternal, _tuplesort_puttupleslot, _ArrayGetNItems, _expanded_record_fetch_tupdesc, _expanded_record_fetch_field, _json_validate, _JsonbValueToJsonb, _numeric_out, _boolout, _bool_int4, _lookup_rowtype_tupdesc_domain, _MemoryContextGetParent, _DeleteExpandedObject, _CreateStandaloneExprContext, _ExecFindJunkAttributeInTlist, _standard_ExecutorStart, _ExecInitNode, _standard_ExecutorRun, _standard_ExecutorFinish, _standard_ExecutorEnd, _ExecEndNode, _InstrAlloc, _MakeTupleTableSlot, _ExecWithCheckOptions, _get_typlenbyval, _ExecInitScanTupleSlot, _InputFunctionCall, _list_delete_ptr, _FreeExprContext, _ExecAssignExprContext, _ExecAssignProjectionInfo, _ExecOpenScanRelation, _bms_intersect, _GetAttributeByName, _GetAttributeByNum, _ExecGetReturningSlot, _ExecGetResultRelCheckAsUser, _MemoryContextRegisterResetCallback, _cached_function_compile, _CommandIsReadOnly, _InstrUpdateTupleCount, _tuplesort_begin_heap, _AggCheckCallContext, _tuplesort_gettupleslot, _bms_del_members, _AddWaitEventToSet, _GetNumRegisteredWaitEvents, _tuplestore_clear, _get_attstatsslot, _free_attstatsslot, _SharedFileSetInit, _SharedFileSetAttach, _tuplesort_reset, _pairingheap_first, _bms_nonempty_difference, _datum_image_hash, _tuplesort_rescan, _WinGetPartitionLocalMemory, _WinGetCurrentPosition, _WinGetPartitionRowCount, _WinGetFuncArgInPartition, _WinGetFuncArgCurrent, _SPI_connect_ext, _SPI_commit, _CopyErrorData, _FlushErrorState, _ReThrowError, _SPI_commit_and_chain, _SPI_rollback, _SPI_rollback_and_chain, _SPI_freetuptable, _SPI_execute_extended, _SPI_execute_plan, _SPI_execp, _SPI_execute_plan_extended, _SPI_execute_plan_with_paramlist, _SPI_execute_with_args, _SPI_prepare, _SPI_prepare_extended, _SPI_keepplan, _SPI_saveplan, _SPI_freeplan, _SPI_copytuple, _SPI_returntuple, _SPI_modifytuple, _SPI_fnumber, _SPI_fname, _SPI_getbinval, _SPI_gettype, _SPI_gettypeid, _SPI_getrelname, _SPI_palloc, _SPI_repalloc, _SPI_pfree, _SPI_datumTransfer, _datumTransfer, _SPI_cursor_open_with_args, _SPI_cursor_open_with_paramlist, _SPI_cursor_parse_open, _SPI_cursor_find, _SPI_cursor_fetch, _SPI_scroll_cursor_fetch, _SPI_scroll_cursor_move, _SPI_cursor_close, _SPI_plan_is_valid, _SPI_result_code_string, _SPI_plan_get_plan_sources, _SPI_plan_get_cached_plan, _SPI_register_relation, _create_queryEnv, _register_ENR, _SPI_register_trigger_data, _tuplestore_tuple_count, _GetUserMapping, _GetForeignTable, _GetForeignColumnOptions, _initClosestMatch, _updateClosestMatch, _getClosestMatch, _GetExistingLocalJoinPath, _pathkeys_contained_in, _bloom_create, _bloom_free, _bloom_add_element, _bloom_lacks_element, _bloom_prop_bits_set, _dshash_create, _dshash_attach, _dshash_detach, _dshash_destroy, _dshash_get_hash_table_handle, _dshash_find, _dshash_find_or_insert, _dshash_delete_key, _dshash_release_lock, _tag_hash, _dshash_seq_init, _dshash_seq_next, _dshash_seq_term, _dshash_delete_current, _ldexp, _pg_b64_enc_len, _pg_b64_encode, _strtol, _gai_strerror, _bind, _pgl_connect, _pgl_send, _pgl_recv, _sendto, _select, _recvfrom, _be_lo_unlink, _text_to_cstring_buffer, _feof, _pg_mb2wchar_with_len, _pg_regcomp, _pg_regerror, _strcat, _freeaddrinfo, _pgl_getsockname, _pgl_setsockopt, _pgl_fcntl, _listen, _accept, _utime, _pq_buffer_remaining_data, _pgl_getsockopt, _pq_sendtext, _pq_sendfloat4, _pq_sendfloat8, _pq_begintypsend, _pq_endtypsend, _pq_getmsgfloat4, _pq_getmsgfloat8, _pq_getmsgtext, _pg_strtoint32, _main, _pgl_getuid, _getenv, _bms_membership, _RegisterExtensibleNodeMethods, _list_make5_impl, _GetMemoryChunkContext, _list_insert_nth, _list_member_ptr, _list_delete_int, _list_intersection, _list_append_unique_ptr, _list_append_unique_int, _list_concat_unique_int, _make_opclause, _exprIsLengthCoercion, _fix_opfuncids, _outToken, _outNode, _appendStringInfoStringQuoted, _EnableQueryId, _nodeRead, _pg_strtok, _debackslash, _exp2, _find_base_rel, _add_path, _create_sort_path, _set_baserel_size_estimates, _get_func_support, _clauselist_selectivity, _get_tablespace_page_costs, _cost_qual_eval, _pull_varnos, _estimate_num_groups, _cost_sort, _get_sortgrouplist_exprs, _get_attavgwidth, _make_restrictinfo, _setup_eclass_member_iterator, _eclass_member_iterator_next, _remove_nulling_relids, _get_mergejoin_opfamilies, _generate_implied_equalities_for_column, _eclass_useful_for_merging, _join_clause_is_movable_to, _get_plan_rowmark, _is_pseudo_constant_for_index, _update_mergeclause_eclasses, _pull_vars_of_level, _find_join_rel, _make_canonical_pathkey, _get_sortgroupref_clause_noerr, _extract_actual_clauses, _tlist_member, _change_plan_targetlist, _make_foreignscan, _IncrementVarSublevelsUp, _op_mergejoinable, _find_nonnullable_rels, _setup_simple_rel_arrays, _standard_planner, _get_relids_in_jointree, _SS_process_sublinks, _add_new_columns_to_pathtarget, _get_agg_clause_costs, _grouping_is_sortable, _copy_pathtarget, _create_projection_path, _contain_nonstrict_functions, _get_translated_update_targetlist, _add_row_identity_var, _get_rel_all_updated_cols, _get_baserel_parampathinfo, _create_foreignscan_path, _create_foreign_join_path, _create_foreign_upper_path, _adjust_limit_rows_costs, _add_to_flat_tlist, _get_fn_expr_variadic, _get_fn_expr_argtype, _on_shmem_exit, _pgl_shmdt, _pgl_shmctl, _pgl_shmat, _mmap, _pgl_shmget, _pgl_munmap, _SignalHandlerForConfigReload, _SignalHandlerForShutdownRequest, _procsignal_sigusr1_handler, _ConditionalLockDatabaseObject, _RegisterBackgroundWorker, _WaitForBackgroundWorkerStartup, _open, _rename, _GetConfigOption, _puts, _fopen, _fclose, _fputc, _ftello, _malloc, _free, _realloc, _iswprint_l, _iswalpha_l, _iswdigit_l, _isdigit_l, _iswpunct_l, _iswspace_l, _iswlower_l, _iswupper_l, _pg_ascii_tolower, _towlower_l, _tolower_l, _towupper_l, _toupper_l, _pg_reg_getinitialstate, _pg_reg_getfinalstate, _pg_reg_getnumoutarcs, _pg_reg_getoutarcs, _pg_reg_getnumcolors, _pg_reg_colorisbegin, _pg_reg_colorisend, _pg_reg_getnumcharacters, _pg_reg_getcharacters, _dsa_pin, _OutputPluginPrepareWrite, _OutputPluginWrite, _array_contains_nulls, _CacheRegisterRelcacheCallback, _hash_seq_term, _FreeErrorData, _RelidByRelfilenumber, _SnapBuildRestoreSnapshot, _WaitLatchOrSocket, _BufFileCreateFileSet, _BufFileOpenFileSet, _BufFileTell, _ConditionVariablePrepareToSleep, _get_row_security_policies, _extract_variadic_args, _errhidestmt, _errhidecontext, _hash_estimate_size, _ShmemInitHash, _LockBufHdr, _LWLockHeldByMeInMode, _EvictUnpinnedBuffer, _EvictAllUnpinnedBuffers, _EvictRelUnpinnedBuffers, _have_free_buffer, _calloc, _BufFileExportFileSet, _BufFileRead, _copy_file, _fdatasync, _truncate, _dup, _AcquireExternalFD, _mkdir, _pgl_popen, _pgl_pclose, _closedir, _opendir, _readdir, _GetNamedDSMSegment, _pgl_atexit, _RequestAddinShmemSpace, _GetRunningTransactionData, _BackendXidGetPid, _pg_numa_init, _sysconf, _pg_numa_query_pages, _pg_get_shmem_pagesize, _LockAcquire, _LockRelease, _pgl_poll, _GetLockmodeName, _LWLockRegisterTranche, _GetNamedLWLockTranche, _LWLockNewTrancheId, _RequestNamedLWLockTranche, _LWLockHeldByMe, _ProcessStartupPacket, _htons, _htonl, _pgl_startPGlite, _pgl_pq_flush, _pgl_getMyProcPort, _pgl_sendConnData, _PostgresMainLongJmp, _PostgresMainLoopOnce, _PostgresSendReadyForQueryIfNecessary, _GetCommandLogLevel, _standard_ProcessUtility, _lookup_ts_dictionary_cache, _get_tsearch_config_filename, _str_tolower, _readstoplist, _searchstoplist, _tsearch_readline_begin, _tsearch_readline, _tsearch_readline_end, _stringToQualifiedNameList, _getTSCurrentConfig, _to_tsvector_byid, _t_isalnum_with_len, _isalnum, _t_isalnum_cstr, _pg_mblen_unbounded, _get_restriction_variable, _pg_mblen_range, _MemoryContextAllocHuge, _fseek, _WaitEventExtensionNew, _regprocedurein, _is_member_of_role, _expand_array, _exp, _arraycontsel, _arraycontjoinsel, _initArrayResult, _array_create_iterator, _array_iterate, _array_free_iterator, _ArrayGetIntegerTypmods, _boolin, ___multi3, _cash_cmp, _int64_to_numeric, _numeric_div, _numeric_round, _numeric_int8, _numeric_mul, _j2date, _EncodeDateOnly, _EncodeSpecialDate, _date_eq, _date_lt, _date_le, _date_gt, _date_ge, _date_cmp, _date_mi, _timestamp2tm, _time2tm, _EncodeTimeOnly, _time_eq, _time_lt, _time_le, _time_gt, _time_ge, _time_cmp, _time_mi_time, _timetz2tm, _timetz_cmp, _pg_tolower, _EncodeDateTime, _TransferExpandedObject, _forkname_to_number, _numeric_lt, _numeric_abs, _numeric_add, _numeric_ge, _err_generic_string, _domain_check, _enum_lt, _enum_le, _enum_ge, _enum_gt, _enum_cmp, _make_expanded_record_from_typeid, _make_expanded_record_from_tupdesc, _make_expanded_record_from_exprecord, _expanded_record_set_tuple, _expanded_record_get_tuple, _deconstruct_expanded_record, _expanded_record_lookup_field, _expanded_record_set_field_internal, _expanded_record_set_fields, _float4in_internal, _strtof, _float_to_shortest_decimal_buf, _float8in, _float8in_internal, _float8out, _float8out_internal, _float8pl, _float4_cmp_internal, _btfloat4cmp, _btfloat8cmp, _dtoi4, _dtoi2, _cbrt, _dexp, _log10, _dacos, _acos, _dasin, _asin, _datan, _atan, _datan2, _atan2, _dcos, _cos, _dcot, _tan, _dsin, _sin, _dtan, _fmod, _degrees, _dpi, _radians, _sinh, _cosh, _tanh, _asinh, _acosh, _atanh, _float8_accum, _float8_stddev_pop, _float8_stddev_samp, _asc_tolower, _pg_strfold, _numeric_power, _dtoi8, _int8out, _fseeko, _int4in, _int4_bool, _int8pl, _int84, _int82, _json_in, _EncodeSpecialTimestamp, _pushJsonbValue, _numeric_int2, _numeric_int4, _numeric_float4, _numeric_normalize, _numeric_cmp, _numeric_eq, _hash_numeric, _hash_numeric_extended, _int2_numeric, _int4_numeric, _int8_numeric, _float4_numeric, _float8_numeric, _numeric_uminus, _numeric_is_nan, _numeric_ceil, _numeric_floor, _timestamp_cmp, _macaddr_cmp, _macaddr_lt, _macaddr_le, _macaddr_eq, _macaddr_ge, _macaddr_gt, _macaddr8_cmp, _macaddr8_lt, _macaddr8_le, _macaddr8_eq, _macaddr8_ge, _macaddr8_gt, _current_query, _generate_collation_name, _get_fn_expr_arg_stable, _unpack_sql_state, _get_fn_expr_rettype, _btnamecmp, _inet_in, _network_cmp, _convert_network_to_scalar, _numeric_sign, _numeric_gt, _numeric_le, _numeric_mod, _numeric_sqrt, ___divti3, _numeric_exp, _numeric_ln, _numeric_log, _numeric_float8_no_overflow, _oidout, _btrim1, _ltrim1, _rtrim1, _tuplesort_skiptuples, _interval_mi, _setlocale, _newlocale, _strftime_l, _freelocale, _pg_utf_mblen_private, _uselocale, _strcoll_l, _strxfrm_l, _drandom, _quote_ident, _textregexeq, _text_substr, _pg_wchar2mb_with_len, _regexp_split_to_array, _regclassin, _regtypeout, _regconfigout, _pg_get_indexdef_columns_extended, _pg_get_querydef, _strcspn, _generic_restriction_selectivity, _genericcostestimate, _tidin, _tidout, _timestamp_in, _timestamp_eq, _timestamp_lt, _timestamp_gt, _timestamp_le, _timestamp_ge, _interval_eq, _interval_lt, _interval_gt, _interval_le, _interval_ge, _interval_cmp, _timestamp_mi, _interval_um, _tsquery_requires_match, _TS_execute_ternary, _has_fn_opclass_options, _uuid_in, _uuid_out, _uuid_cmp, _gen_random_uuid, _varbit_in, _biteq, _bitlt, _bitle, _bitgt, _bitge, _bitcmp, _bitlength, _bpchareq, _bpcharlt, _bpcharle, _bpchargt, _bpcharge, _bpcharcmp, _pg_detoast_datum_slice, _text_substr_no_len, _texteq, _text_lt, _text_le, _text_gt, _text_ge, _bttextcmp, _byteaeq, _bytealt, _byteale, _byteagt, _byteage, _byteacmp, _to_hex32, _text_left, _text_right, _text_reverse, _varstr_levenshtein, _wcslen, _pg_xml_init, _xml_ereport, _pg_xml_done, _pg_do_encoding_conversion, _CreateCacheMemoryContext, _cfunc_resolve_polymorphic_argtypes, _get_typsubscript, _CachedPlanAllowsSimpleValidityCheck, _CachedPlanIsSimplyValid, _GetCachedExpression, _FreeCachedExpression, _ReleaseAllPlanCacheRefsInOwner, _SearchSysCache, _lookup_rowtype_tupdesc_noerror, _abort, _in_error_recursion_trouble, _pg_vfprintf, _pgl_longjmp, _openlog, _syslog, _GetErrorContextStack, _closelog, _dlsym, _dlopen, _dlerror, _dlclose, _find_rendezvous_variable, _CallerFInfoFunctionCall1, _CallerFInfoFunctionCall2, _FunctionCall0Coll, _RelationNameGetTupleDesc, _memcpy, _hash_freeze, _chdir, _pg_bindtextdomain, _pg_mblen, _check_encoding_conversion_args, _DefineCustomBoolVariable, _DefineCustomIntVariable, _DefineCustomRealVariable, _DefineCustomStringVariable, _DefineCustomEnumVariable, _MarkGUCPrefixReserved, _sampler_random_init_state, _dsa_trim, _pchomp, _PinPortal, _UnpinPortal, ___lshrti3, _realpath, _float_to_shortest_decimal_bufn, _IsValidJsonNumber, _pg_prng_uint64, _makeStringInfoExt, _initStringInfoExt, _pgl_getpwuid, _getcwd, _pthread_mutex_lock, _localeconv, _pthread_mutex_unlock, _nanosleep, _sigaction, _strchrnul, _snprintf, _strerror_r, _clear_setitimer, _pgl_setPGliteActive, _pgl_siglongjmp, _pgl_set_system_fn, _pgl_set_popen_fn, _pgl_set_pclose_fn, _pgl_run_atexit_funcs, _pgl_freopen, _fiprintf, _pgl_set_rw_cbs, _vfprintf, _pthread_key_create, _pthread_getspecific, _pthread_key_delete, _pthread_setspecific, _toupper, _iconv_open, _iconv_close, _iconv, _pthread_mutex_init, _pthread_mutex_destroy, _pthread_cond_init, _pthread_cond_destroy, _pthread_self, _pthread_cond_wait, _pthread_cond_signal, _pthread_once, ___cxa_atexit, _fputs, _vsnprintf, ___small_fprintf, _zcalloc, _zcfree, ___dynamic_cast, ___cxa_pure_virtual, _modf, _localtime_r, _strncat, _munmap, ___ctype_get_mb_cur_max, ___ctype_tolower_loc, ___ctype_toupper_loc, _fdopen, _sqrt, _acosl, _aligned_alloc, _atan2l, ___funcs_on_exit, _atexit, ___cxa_finalize, _btowc, _clock, _scalbn, _cosl, _dladdr, ___dl_seterr, _duplocale, __emscripten_find_dylib, _memmove, _memset, _fchmod, _fchmodat, _fchown, _fcntl, _fdopendir, _fmax, _fmin, _fputwc, _frexp, _ftell, _getentropy, _geteuid, _getgid, _mbtowc, _getuid, _getwc, _gmtime, _hypot, _mbrtowc, _ioctl, _isalpha, _isgraph, _isspace, _iswblank_l, _iswcntrl_l, _iswxdigit_l, _isxdigit_l, _pthread_cond_broadcast, _pthread_atfork, _pthread_mutex_trylock, _pthread_create, _pthread_join, _pthread_cond_timedwait, _pthread_detach, _link, _llround, _localtime, _log2, _logb, _lround, _mbrlen, _mbsnrtowcs, _mbsrtowcs, _memmem, _memrchr, _emscripten_builtin_memalign, _socket, _nextafter, _nextafterf, _ntohs, _openat, _pathconf, _perror, _iprintf, ___small_printf, _pthread_mutexattr_getprotocol, _pthread_mutexattr_getpshared, _pthread_mutexattr_getrobust, _pthread_mutexattr_gettype, _pthread_mutexattr_destroy, _pthread_mutexattr_init, _pthread_mutexattr_setprotocol, _pthread_mutexattr_setpshared, _pthread_mutexattr_settype, _putchar, _qsort, _srand, _rand, _remainder, _remove, _remquo, _round, _roundf, __emscripten_timeout, _sinl, _siprintf, _sqrtl, _vsscanf, _statvfs, _strcasecmp, _strerror, _strftime, _strncasecmp, ___floatsitf, ___multf3, ___addtf3, ___extenddftf2, ___getf2, ___subtf3, ___divtf3, ___eqtf2, ___letf2, ___trunctfdf2, _strtold, _strtof_l, _strtod_l, _strtold_l, _strtok, _strtoull_l, _strtoll_l, _swprintf, _connect, _trunc, _ungetc, _ungetwc, _unlinkat, _usleep, _utimensat, _vasprintf, _wcrtomb, _wcscoll_l, _wcsnrtombs, _wcstof, _wcstod, _wcstold, _wcstoull, _wcstoll, _wcstoul, _wcstol, _wcsxfrm_l, _wctob, _wmemchr, _wmemcmp, _emscripten_get_sbrk_ptr, ___ashlti3, ___lttf2, _setThrew, __emscripten_tempret_set, __emscripten_tempret_get, ___fixtfsi, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, ___cxa_decrement_exception_refcount, ___cxa_increment_exception_refcount, ___cxa_bad_cast, ___cxa_bad_typeid, ___cxa_allocate_exception, ___cxa_free_exception, ___cxa_init_primary_exception, ___cxa_get_exception_ptr, ___stack_pointer, ___table_base, _LocalBufferBlockPointers, _BufferBlocks, _wal_level, _CurrentMemoryContext, ___memory_base, _SnapshotAnyData, _debug_query_string, _maintenance_work_mem, __indirect_function_table, _CritSectionCount, _InterruptPending, _ParallelWorkerNumber, _pg_number_of_ones, _TopMemoryContext, _IsUnderPostmaster, _MainLWLockArray, _CurrentResourceOwner, _MyBackendType, _work_mem, _pg_global_prng_state, _NBuffers, _XactIsoLevel, _bsysscan, _CheckXidAlive, _MyProc, _MyDatabaseId, _MyDatabaseTableSpace, _TTSOpsBufferHeapTuple, _RecentXmin, _TTSOpsHeapTuple, _pgWalUsage, _pgBufferUsage, _error_context_stack, _MyLatch, _SnapshotSelfData, ___THREW__, ___threwValue, _PG_exception_stack, _TTSOpsVirtual, _GUC_check_errdetail_string, _TransamVariables, _TopTransactionContext, _InterruptHoldoffCount, _MyProcPid, _RmgrTable, _process_shared_preload_libraries_in_progress, _wal_segment_size, _TopTransactionResourceOwner, _arch_module_check_errdetail_string, _stdout, _stdin, _creating_extension, _object_access_hook, _InvalidObjectAddress, _check_function_bodies, _post_parse_analyze_hook, _ScanKeywordTokens, _ScanKeywords, _standard_conforming_strings, _None_Receiver, _explain_per_plan_hook, _explain_get_index_name_hook, _explain_per_node_hook, _CacheMemoryContext, _SPI_processed, _SPI_tuptable, _TTSOpsMinimalTuple, _check_password_hook, _ConfigReloadPending, _max_parallel_maintenance_workers, _DateStyle, _ExecutorStart_hook, _ExecutorRun_hook, _ExecutorFinish_hook, _ExecutorEnd_hook, _ExecutorCheckPerms_hook, _SPI_result, _stderr, _MyProcPort, _ClientAuthentication_hook, _set_rel_pathlist_hook, _cpu_tuple_cost, _cpu_operator_cost, _seq_page_cost, _planner_hook, _get_relation_info_hook, _QueryCancelPending, _ShutdownRequestPending, _MyStartTime, _cluster_name, _ProcDiePending, _application_name, _row_security_policy_hook_restrictive, _row_security_policy_hook_permissive, _BufferDescriptors, _shmem_startup_hook, _ProcessUtility_hook, _IntervalStyle, _extra_float_digits, _ScanKeywordCategories, _pg_crc32_table, _shmem_request_hook, _z_errmsg, __length_code, __dist_code, ___heap_base, wasmTable;
  function assignWasmExports(e) {
    _palloc0 = Module._palloc0 = e.palloc0, _RelationGetNumberOfBlocksInFork = Module._RelationGetNumberOfBlocksInFork = e.RelationGetNumberOfBlocksInFork, _ExtendBufferedRel = Module._ExtendBufferedRel = e.ExtendBufferedRel, _MarkBufferDirty = Module._MarkBufferDirty = e.MarkBufferDirty, _XLogBeginInsert = Module._XLogBeginInsert = e.XLogBeginInsert, _XLogRegisterData = Module._XLogRegisterData = e.XLogRegisterData, _XLogRegisterBuffer = Module._XLogRegisterBuffer = e.XLogRegisterBuffer, _XLogInsert = Module._XLogInsert = e.XLogInsert, _UnlockReleaseBuffer = Module._UnlockReleaseBuffer = e.UnlockReleaseBuffer, _palloc = Module._palloc = e.palloc, _brin_build_desc = Module._brin_build_desc = e.brin_build_desc, _EnterParallelMode = Module._EnterParallelMode = e.EnterParallelMode, _CreateParallelContext = Module._CreateParallelContext = e.CreateParallelContext, _GetTransactionSnapshot = Module._GetTransactionSnapshot = e.GetTransactionSnapshot, _RegisterSnapshot = Module._RegisterSnapshot = e.RegisterSnapshot, _table_parallelscan_estimate = Module._table_parallelscan_estimate = e.table_parallelscan_estimate, _add_size = Module._add_size = e.add_size, _tuplesort_estimate_shared = Module._tuplesort_estimate_shared = e.tuplesort_estimate_shared, _mul_size = Module._mul_size = e.mul_size, _strlen = Module._strlen = e.strlen, _InitializeParallelDSM = Module._InitializeParallelDSM = e.InitializeParallelDSM, _UnregisterSnapshot = Module._UnregisterSnapshot = e.UnregisterSnapshot, _DestroyParallelContext = Module._DestroyParallelContext = e.DestroyParallelContext, _ExitParallelMode = Module._ExitParallelMode = e.ExitParallelMode, _shm_toc_allocate = Module._shm_toc_allocate = e.shm_toc_allocate, _ConditionVariableInit = Module._ConditionVariableInit = e.ConditionVariableInit, _table_parallelscan_initialize = Module._table_parallelscan_initialize = e.table_parallelscan_initialize, _tuplesort_initialize_shared = Module._tuplesort_initialize_shared = e.tuplesort_initialize_shared, _shm_toc_insert = Module._shm_toc_insert = e.shm_toc_insert, _LaunchParallelWorkers = Module._LaunchParallelWorkers = e.LaunchParallelWorkers, _WaitForParallelWorkersToAttach = Module._WaitForParallelWorkersToAttach = e.WaitForParallelWorkersToAttach, _s_lock = Module._s_lock = e.s_lock, _ConditionVariableSleep = Module._ConditionVariableSleep = e.ConditionVariableSleep, _ConditionVariableCancelSleep = Module._ConditionVariableCancelSleep = e.ConditionVariableCancelSleep, _tuplesort_performsort = Module._tuplesort_performsort = e.tuplesort_performsort, _AllocSetContextCreateInternal = Module._AllocSetContextCreateInternal = e.AllocSetContextCreateInternal, _tuplesort_end = Module._tuplesort_end = e.tuplesort_end, _MemoryContextReset = Module._MemoryContextReset = e.MemoryContextReset, _brin_deform_tuple = Module._brin_deform_tuple = e.brin_deform_tuple, _pfree = Module._pfree = e.pfree, _MemoryContextDelete = Module._MemoryContextDelete = e.MemoryContextDelete, _errstart_cold = Module._errstart_cold = e.errstart_cold, _errmsg_internal = Module._errmsg_internal = e.errmsg_internal, _errfinish = Module._errfinish = e.errfinish, _log_newpage_buffer = Module._log_newpage_buffer = e.log_newpage_buffer, _ProcessInterrupts = Module._ProcessInterrupts = e.ProcessInterrupts, _errstart = Module._errstart = e.errstart, _errcode = Module._errcode = e.errcode, _errmsg = Module._errmsg = e.errmsg, _LockBuffer = Module._LockBuffer = e.LockBuffer, _ReleaseBuffer = Module._ReleaseBuffer = e.ReleaseBuffer, _IndexGetRelation = Module._IndexGetRelation = e.IndexGetRelation, _table_open = Module._table_open = e.table_open, _ReadBufferExtended = Module._ReadBufferExtended = e.ReadBufferExtended, _table_close = Module._table_close = e.table_close, _build_reloptions = Module._build_reloptions = e.build_reloptions, _RelationGetIndexScan = Module._RelationGetIndexScan = e.RelationGetIndexScan, _pgstat_assoc_relation = Module._pgstat_assoc_relation = e.pgstat_assoc_relation, _palloc0_mul = Module._palloc0_mul = e.palloc0_mul, _index_getprocinfo = Module._index_getprocinfo = e.index_getprocinfo, _fmgr_info_copy = Module._fmgr_info_copy = e.fmgr_info_copy, _FunctionCall4Coll = Module._FunctionCall4Coll = e.FunctionCall4Coll, _palloc_mul = Module._palloc_mul = e.palloc_mul, _FunctionCall1Coll = Module._FunctionCall1Coll = e.FunctionCall1Coll, _brin_free_desc = Module._brin_free_desc = e.brin_free_desc, _WaitForParallelWorkersToFinish = Module._WaitForParallelWorkersToFinish = e.WaitForParallelWorkersToFinish, _PageGetFreeSpace = Module._PageGetFreeSpace = e.PageGetFreeSpace, _BufferGetBlockNumber = Module._BufferGetBlockNumber = e.BufferGetBlockNumber, _BuildIndexInfo = Module._BuildIndexInfo = e.BuildIndexInfo, _Int64GetDatum = Module._Int64GetDatum = e.Int64GetDatum, _DirectFunctionCall2Coll = Module._DirectFunctionCall2Coll = e.DirectFunctionCall2Coll, _RecoveryInProgress = Module._RecoveryInProgress = e.RecoveryInProgress, _GetUserIdAndSecContext = Module._GetUserIdAndSecContext = e.GetUserIdAndSecContext, _SetUserIdAndSecContext = Module._SetUserIdAndSecContext = e.SetUserIdAndSecContext, _NewGUCNestLevel = Module._NewGUCNestLevel = e.NewGUCNestLevel, _RestrictSearchPath = Module._RestrictSearchPath = e.RestrictSearchPath, _index_open = Module._index_open = e.index_open, _object_ownercheck = Module._object_ownercheck = e.object_ownercheck, _aclcheck_error = Module._aclcheck_error = e.aclcheck_error, _AtEOXact_GUC = Module._AtEOXact_GUC = e.AtEOXact_GUC, _relation_close = Module._relation_close = e.relation_close, _errhint = Module._errhint = e.errhint, _GetUserId = Module._GetUserId = e.GetUserId, _ReadBuffer = Module._ReadBuffer = e.ReadBuffer, _shm_toc_lookup = Module._shm_toc_lookup = e.shm_toc_lookup, _pgstat_report_activity = Module._pgstat_report_activity = e.pgstat_report_activity, _tuplesort_attach_shared = Module._tuplesort_attach_shared = e.tuplesort_attach_shared, _index_close = Module._index_close = e.index_close, _table_beginscan_parallel = Module._table_beginscan_parallel = e.table_beginscan_parallel, _ConditionVariableSignal = Module._ConditionVariableSignal = e.ConditionVariableSignal, _datumCopy = Module._datumCopy = e.datumCopy, _lookup_type_cache = Module._lookup_type_cache = e.lookup_type_cache, _get_fn_opclass_options = Module._get_fn_opclass_options = e.get_fn_opclass_options, _log = Module._log = e.log, _pg_detoast_datum = Module._pg_detoast_datum = e.pg_detoast_datum, _index_getprocid = Module._index_getprocid = e.index_getprocid, _errdetail_internal = Module._errdetail_internal = e.errdetail_internal, _pg_popcount_optimized = Module._pg_popcount_optimized = e.pg_popcount_optimized, _init_local_reloptions = Module._init_local_reloptions = e.init_local_reloptions, _initStringInfo = Module._initStringInfo = e.initStringInfo, _appendStringInfoChar = Module._appendStringInfoChar = e.appendStringInfoChar, _appendStringInfo = Module._appendStringInfo = e.appendStringInfo, _FunctionCall2Coll = Module._FunctionCall2Coll = e.FunctionCall2Coll, _SearchSysCache4 = Module._SearchSysCache4 = e.SearchSysCache4, _SysCacheGetAttrNotNull = Module._SysCacheGetAttrNotNull = e.SysCacheGetAttrNotNull, _ReleaseSysCache = Module._ReleaseSysCache = e.ReleaseSysCache, _get_opcode = Module._get_opcode = e.get_opcode, _fmgr_info_cxt = Module._fmgr_info_cxt = e.fmgr_info_cxt, _Float8GetDatum = Module._Float8GetDatum = e.Float8GetDatum, _numeric_float8 = Module._numeric_float8 = e.numeric_float8, _numeric_sub = Module._numeric_sub = e.numeric_sub, _DirectFunctionCall1Coll = Module._DirectFunctionCall1Coll = e.DirectFunctionCall1Coll, _pg_detoast_datum_packed = Module._pg_detoast_datum_packed = e.pg_detoast_datum_packed, _pg_qsort = Module._pg_qsort = e.pg_qsort, _get_typbyval = Module._get_typbyval = e.get_typbyval, _get_typlen = Module._get_typlen = e.get_typlen, _qsort_arg = Module._qsort_arg = e.qsort_arg, _add_local_int_reloption = Module._add_local_int_reloption = e.add_local_int_reloption, _getTypeOutputInfo = Module._getTypeOutputInfo = e.getTypeOutputInfo, _fmgr_info = Module._fmgr_info = e.fmgr_info, _OutputFunctionCall = Module._OutputFunctionCall = e.OutputFunctionCall, _cstring_to_text_with_len = Module._cstring_to_text_with_len = e.cstring_to_text_with_len, _accumArrayResult = Module._accumArrayResult = e.accumArrayResult, _makeArrayResult = Module._makeArrayResult = e.makeArrayResult, _OidOutputFunctionCall = Module._OidOutputFunctionCall = e.OidOutputFunctionCall, _cstring_to_text = Module._cstring_to_text = e.cstring_to_text, _PageGetExactFreeSpace = Module._PageGetExactFreeSpace = e.PageGetExactFreeSpace, _PageIndexTupleOverwrite = Module._PageIndexTupleOverwrite = e.PageIndexTupleOverwrite, _PageInit = Module._PageInit = e.PageInit, _PageAddItemExtended = Module._PageAddItemExtended = e.PageAddItemExtended, _LockRelationForExtension = Module._LockRelationForExtension = e.LockRelationForExtension, _UnlockRelationForExtension = Module._UnlockRelationForExtension = e.UnlockRelationForExtension, _smgropen = Module._smgropen = e.smgropen, _smgrpin = Module._smgrpin = e.smgrpin, _ItemPointerEquals = Module._ItemPointerEquals = e.ItemPointerEquals, _detoast_external_attr = Module._detoast_external_attr = e.detoast_external_attr, _CreateTemplateTupleDesc = Module._CreateTemplateTupleDesc = e.CreateTemplateTupleDesc, _TupleDescInitEntry = Module._TupleDescInitEntry = e.TupleDescInitEntry, _repalloc = Module._repalloc = e.repalloc, _memcmp = Module._memcmp = e.memcmp, _SearchSysCache1 = Module._SearchSysCache1 = e.SearchSysCache1, _get_opfamily_name = Module._get_opfamily_name = e.get_opfamily_name, _SearchSysCacheList = Module._SearchSysCacheList = e.SearchSysCacheList, _check_amproc_signature = Module._check_amproc_signature = e.check_amproc_signature, _check_amoptsproc_signature = Module._check_amoptsproc_signature = e.check_amoptsproc_signature, _format_procedure = Module._format_procedure = e.format_procedure, _format_operator = Module._format_operator = e.format_operator, _check_amop_signature = Module._check_amop_signature = e.check_amop_signature, _identify_opfamily_groups = Module._identify_opfamily_groups = e.identify_opfamily_groups, _format_type_be = Module._format_type_be = e.format_type_be, _ReleaseCatCacheList = Module._ReleaseCatCacheList = e.ReleaseCatCacheList, _format_type_with_typemod = Module._format_type_with_typemod = e.format_type_with_typemod, _errdetail = Module._errdetail = e.errdetail, _strcmp = Module._strcmp = e.strcmp, _DatumGetEOHP = Module._DatumGetEOHP = e.DatumGetEOHP, _EOH_get_flat_size = Module._EOH_get_flat_size = e.EOH_get_flat_size, _EOH_flatten_into = Module._EOH_flatten_into = e.EOH_flatten_into, _toast_raw_datum_size = Module._toast_raw_datum_size = e.toast_raw_datum_size, _getmissingattr = Module._getmissingattr = e.getmissingattr, _hash_create = Module._hash_create = e.hash_create, _hash_search = Module._hash_search = e.hash_search, _nocachegetattr = Module._nocachegetattr = e.nocachegetattr, _heap_getsysattr = Module._heap_getsysattr = e.heap_getsysattr, _heap_form_tuple = Module._heap_form_tuple = e.heap_form_tuple, _heap_modify_tuple = Module._heap_modify_tuple = e.heap_modify_tuple, _heap_deform_tuple = Module._heap_deform_tuple = e.heap_deform_tuple, _heap_modify_tuple_by_cols = Module._heap_modify_tuple_by_cols = e.heap_modify_tuple_by_cols, _heap_freetuple = Module._heap_freetuple = e.heap_freetuple, _hash_bytes = Module._hash_bytes = e.hash_bytes, _index_form_tuple = Module._index_form_tuple = e.index_form_tuple, _MemoryContextAllocZero = Module._MemoryContextAllocZero = e.MemoryContextAllocZero, _nocache_index_getattr = Module._nocache_index_getattr = e.nocache_index_getattr, _index_deform_tuple = Module._index_deform_tuple = e.index_deform_tuple, _CopyIndexTuple = Module._CopyIndexTuple = e.CopyIndexTuple, _CreateTupleDescTruncatedCopy = Module._CreateTupleDescTruncatedCopy = e.CreateTupleDescTruncatedCopy, _enlargeStringInfo = Module._enlargeStringInfo = e.enlargeStringInfo, _slot_getsomeattrs_int = Module._slot_getsomeattrs_int = e.slot_getsomeattrs_int, _pg_lltoa = Module._pg_lltoa = e.pg_lltoa, _pg_ltoa = Module._pg_ltoa = e.pg_ltoa, _pq_sendbytes = Module._pq_sendbytes = e.pq_sendbytes, _pg_printf = Module._pg_printf = e.pg_printf, _relation_open = Module._relation_open = e.relation_open, _LockRelationOid = Module._LockRelationOid = e.LockRelationOid, _RelationIdGetRelation = Module._RelationIdGetRelation = e.RelationIdGetRelation, _try_relation_open = Module._try_relation_open = e.try_relation_open, _SearchSysCacheExists = Module._SearchSysCacheExists = e.SearchSysCacheExists, _UnlockRelationOid = Module._UnlockRelationOid = e.UnlockRelationOid, _relation_openrv = Module._relation_openrv = e.relation_openrv, _AcceptInvalidationMessages = Module._AcceptInvalidationMessages = e.AcceptInvalidationMessages, _RangeVarGetRelidExtended = Module._RangeVarGetRelidExtended = e.RangeVarGetRelidExtended, _RelationClose = Module._RelationClose = e.RelationClose, _add_reloption_kind = Module._add_reloption_kind = e.add_reloption_kind, _register_reloptions_validator = Module._register_reloptions_validator = e.register_reloptions_validator, _lappend = Module._lappend = e.lappend, _pstrdup = Module._pstrdup = e.pstrdup, _add_int_reloption = Module._add_int_reloption = e.add_int_reloption, _add_real_reloption = Module._add_real_reloption = e.add_real_reloption, _add_enum_reloption = Module._add_enum_reloption = e.add_enum_reloption, _add_string_reloption = Module._add_string_reloption = e.add_string_reloption, _strdup = Module._strdup = e.strdup, _MemoryContextStrdup = Module._MemoryContextStrdup = e.MemoryContextStrdup, _transformRelOptions = Module._transformRelOptions = e.transformRelOptions, _deconstruct_array_builtin = Module._deconstruct_array_builtin = e.deconstruct_array_builtin, _strncmp = Module._strncmp = e.strncmp, _defGetString = Module._defGetString = e.defGetString, _strchr = Module._strchr = e.strchr, _defGetBoolean = Module._defGetBoolean = e.defGetBoolean, _pg_sprintf = Module._pg_sprintf = e.pg_sprintf, _untransformRelOptions = Module._untransformRelOptions = e.untransformRelOptions, _text_to_cstring = Module._text_to_cstring = e.text_to_cstring, _makeString = Module._makeString = e.makeString, _makeDefElem = Module._makeDefElem = e.makeDefElem, _heap_reloptions = Module._heap_reloptions = e.heap_reloptions, _index_reloptions = Module._index_reloptions = e.index_reloptions, _strcpy = Module._strcpy = e.strcpy, _MemoryContextAlloc = Module._MemoryContextAlloc = e.MemoryContextAlloc, _parse_bool = Module._parse_bool = e.parse_bool, _parse_int = Module._parse_int = e.parse_int, _parse_real = Module._parse_real = e.parse_real, _pg_strcasecmp = Module._pg_strcasecmp = e.pg_strcasecmp, _ScanKeyInit = Module._ScanKeyInit = e.ScanKeyInit, _dsm_segment_handle = Module._dsm_segment_handle = e.dsm_segment_handle, _dsm_create = Module._dsm_create = e.dsm_create, _dsm_segment_address = Module._dsm_segment_address = e.dsm_segment_address, _dsa_pin_mapping = Module._dsa_pin_mapping = e.dsa_pin_mapping, _dsm_attach = Module._dsm_attach = e.dsm_attach, _dsm_detach = Module._dsm_detach = e.dsm_detach, _ShmemInitStruct = Module._ShmemInitStruct = e.ShmemInitStruct, _LWLockAcquire = Module._LWLockAcquire = e.LWLockAcquire, _LWLockRelease = Module._LWLockRelease = e.LWLockRelease, _LWLockConditionalAcquire = Module._LWLockConditionalAcquire = e.LWLockConditionalAcquire, _dsa_create_ext = Module._dsa_create_ext = e.dsa_create_ext, _dsa_allocate_extended = Module._dsa_allocate_extended = e.dsa_allocate_extended, _dsa_get_address = Module._dsa_get_address = e.dsa_get_address, _LWLockInitialize = Module._LWLockInitialize = e.LWLockInitialize, _dsa_attach = Module._dsa_attach = e.dsa_attach, _dsa_free = Module._dsa_free = e.dsa_free, _dsa_get_total_size = Module._dsa_get_total_size = e.dsa_get_total_size, _MemoryContextMemAllocated = Module._MemoryContextMemAllocated = e.MemoryContextMemAllocated, _check_stack_depth = Module._check_stack_depth = e.check_stack_depth, _GetCurrentCommandId = Module._GetCurrentCommandId = e.GetCurrentCommandId, _toast_open_indexes = Module._toast_open_indexes = e.toast_open_indexes, _GetNewOidWithIndex = Module._GetNewOidWithIndex = e.GetNewOidWithIndex, _heap_insert = Module._heap_insert = e.heap_insert, _RelationGetIndexList = Module._RelationGetIndexList = e.RelationGetIndexList, _list_free = Module._list_free = e.list_free, _systable_beginscan = Module._systable_beginscan = e.systable_beginscan, _systable_getnext = Module._systable_getnext = e.systable_getnext, _systable_endscan = Module._systable_endscan = e.systable_endscan, _toast_close_indexes = Module._toast_close_indexes = e.toast_close_indexes, _systable_beginscan_ordered = Module._systable_beginscan_ordered = e.systable_beginscan_ordered, _systable_getnext_ordered = Module._systable_getnext_ordered = e.systable_getnext_ordered, _systable_endscan_ordered = Module._systable_endscan_ordered = e.systable_endscan_ordered, _get_toast_snapshot = Module._get_toast_snapshot = e.get_toast_snapshot, _convert_tuples_by_position = Module._convert_tuples_by_position = e.convert_tuples_by_position, _execute_attr_map_tuple = Module._execute_attr_map_tuple = e.execute_attr_map_tuple, _ExecStoreVirtualTuple = Module._ExecStoreVirtualTuple = e.ExecStoreVirtualTuple, _bms_is_member = Module._bms_is_member = e.bms_is_member, _bms_add_member = Module._bms_add_member = e.bms_add_member, _free_conversion_map = Module._free_conversion_map = e.free_conversion_map, _CreateTupleDescCopy = Module._CreateTupleDescCopy = e.CreateTupleDescCopy, _FreeTupleDesc = Module._FreeTupleDesc = e.FreeTupleDesc, _ResourceOwnerEnlarge = Module._ResourceOwnerEnlarge = e.ResourceOwnerEnlarge, _ResourceOwnerRemember = Module._ResourceOwnerRemember = e.ResourceOwnerRemember, _DecrTupleDescRefCount = Module._DecrTupleDescRefCount = e.DecrTupleDescRefCount, _ResourceOwnerForget = Module._ResourceOwnerForget = e.ResourceOwnerForget, _datumIsEqual = Module._datumIsEqual = e.datumIsEqual, _equalRowTypes = Module._equalRowTypes = e.equalRowTypes, _hashRowType = Module._hashRowType = e.hashRowType, _namestrcpy = Module._namestrcpy = e.namestrcpy, _TupleDescInitEntryCollation = Module._TupleDescInitEntryCollation = e.TupleDescInitEntryCollation, _BuildDescFromLists = Module._BuildDescFromLists = e.BuildDescFromLists, _stringToNode = Module._stringToNode = e.stringToNode, _psprintf = Module._psprintf = e.psprintf, _pg_detoast_datum_copy = Module._pg_detoast_datum_copy = e.pg_detoast_datum_copy, _get_typlenbyvalalign = Module._get_typlenbyvalalign = e.get_typlenbyvalalign, _deconstruct_array = Module._deconstruct_array = e.deconstruct_array, _ginCompareAttEntries = Module._ginCompareAttEntries = e.ginCompareAttEntries, _repalloc_huge = Module._repalloc_huge = e.repalloc_huge, _GinDataLeafPageGetItems = Module._GinDataLeafPageGetItems = e.GinDataLeafPageGetItems, _tbm_add_tuples = Module._tbm_add_tuples = e.tbm_add_tuples, _ginPostingListDecode = Module._ginPostingListDecode = e.ginPostingListDecode, _ItemPointerCompare = Module._ItemPointerCompare = e.ItemPointerCompare, _gintuple_get_attrnum = Module._gintuple_get_attrnum = e.gintuple_get_attrnum, _gintuple_get_key = Module._gintuple_get_key = e.gintuple_get_key, _LockPage = Module._LockPage = e.LockPage, _UnlockPage = Module._UnlockPage = e.UnlockPage, _vacuum_delay_point = Module._vacuum_delay_point = e.vacuum_delay_point, _RecordFreeIndexPage = Module._RecordFreeIndexPage = e.RecordFreeIndexPage, _IndexFreeSpaceMapVacuum = Module._IndexFreeSpaceMapVacuum = e.IndexFreeSpaceMapVacuum, _repalloc_mul = Module._repalloc_mul = e.repalloc_mul, _initGinState = Module._initGinState = e.initGinState, _pg_prng_double = Module._pg_prng_double = e.pg_prng_double, _pgstat_progress_update_param = Module._pgstat_progress_update_param = e.pgstat_progress_update_param, _log_newpage_range = Module._log_newpage_range = e.log_newpage_range, _GetFreeIndexPage = Module._GetFreeIndexPage = e.GetFreeIndexPage, _ConditionalLockBuffer = Module._ConditionalLockBuffer = e.ConditionalLockBuffer, _LockBufferForCleanup = Module._LockBufferForCleanup = e.LockBufferForCleanup, _ReadNextFullTransactionId = Module._ReadNextFullTransactionId = e.ReadNextFullTransactionId, _PageIndexMultiDelete = Module._PageIndexMultiDelete = e.PageIndexMultiDelete, _list_make1_impl = Module._list_make1_impl = e.list_make1_impl, _list_delete_first = Module._list_delete_first = e.list_delete_first, _lcons = Module._lcons = e.lcons, _pow = Module._pow = e.pow, _smgrnblocks = Module._smgrnblocks = e.smgrnblocks, _list_free_deep = Module._list_free_deep = e.list_free_deep, _BufFileCreateTemp = Module._BufFileCreateTemp = e.BufFileCreateTemp, _BufFileWrite = Module._BufFileWrite = e.BufFileWrite, _BufFileReadExact = Module._BufFileReadExact = e.BufFileReadExact, _BufFileClose = Module._BufFileClose = e.BufFileClose, _pairingheap_remove_first = Module._pairingheap_remove_first = e.pairingheap_remove_first, _pairingheap_add = Module._pairingheap_add = e.pairingheap_add, _float_overflow_error = Module._float_overflow_error = e.float_overflow_error, _float8_cmp_internal = Module._float8_cmp_internal = e.float8_cmp_internal, _float_underflow_error = Module._float_underflow_error = e.float_underflow_error, _DirectFunctionCall5Coll = Module._DirectFunctionCall5Coll = e.DirectFunctionCall5Coll, _pairingheap_allocate = Module._pairingheap_allocate = e.pairingheap_allocate, _get_func_rettype = Module._get_func_rettype = e.get_func_rettype, _OidFunctionCall1Coll = Module._OidFunctionCall1Coll = e.OidFunctionCall1Coll, _GenerationContextCreate = Module._GenerationContextCreate = e.GenerationContextCreate, _block_range_read_stream_cb = Module._block_range_read_stream_cb = e.block_range_read_stream_cb, _read_stream_begin_relation = Module._read_stream_begin_relation = e.read_stream_begin_relation, _read_stream_next_buffer = Module._read_stream_next_buffer = e.read_stream_next_buffer, _read_stream_end = Module._read_stream_end = e.read_stream_end, _estimate_rel_size = Module._estimate_rel_size = e.estimate_rel_size, __hash_spareindex = Module.__hash_spareindex = e._hash_spareindex, __hash_getbuf = Module.__hash_getbuf = e._hash_getbuf, __hash_relbuf = Module.__hash_relbuf = e._hash_relbuf, __hash_get_indextuple_hashkey = Module.__hash_get_indextuple_hashkey = e._hash_get_indextuple_hashkey, _hashcharextended = Module._hashcharextended = e.hashcharextended, _hashint8 = Module._hashint8 = e.hashint8, _hashint8extended = Module._hashint8extended = e.hashint8extended, _hash_bytes_extended = Module._hash_bytes_extended = e.hash_bytes_extended, _hashfloat8 = Module._hashfloat8 = e.hashfloat8, _hashfloat8extended = Module._hashfloat8extended = e.hashfloat8extended, _pg_newlocale_from_collation = Module._pg_newlocale_from_collation = e.pg_newlocale_from_collation, __hash_ovflblkno_to_bitno = Module.__hash_ovflblkno_to_bitno = e._hash_ovflblkno_to_bitno, __hash_get_totalbuckets = Module.__hash_get_totalbuckets = e._hash_get_totalbuckets, _hash_destroy = Module._hash_destroy = e.hash_destroy, _list_append_unique_oid = Module._list_append_unique_oid = e.list_append_unique_oid, _list_member_oid = Module._list_member_oid = e.list_member_oid, _CommandCounterIncrement = Module._CommandCounterIncrement = e.CommandCounterIncrement, _get_opclass_input_type = Module._get_opclass_input_type = e.get_opclass_input_type, _list_concat_copy = Module._list_concat_copy = e.list_concat_copy, _HeapTupleSatisfiesVisibility = Module._HeapTupleSatisfiesVisibility = e.HeapTupleSatisfiesVisibility, _GetAccessStrategy = Module._GetAccessStrategy = e.GetAccessStrategy, _FreeAccessStrategy = Module._FreeAccessStrategy = e.FreeAccessStrategy, _heap_getnext = Module._heap_getnext = e.heap_getnext, _ExecStoreBufferHeapTuple = Module._ExecStoreBufferHeapTuple = e.ExecStoreBufferHeapTuple, _heap_fetch = Module._heap_fetch = e.heap_fetch, _HeapTupleSatisfiesVacuum = Module._HeapTupleSatisfiesVacuum = e.HeapTupleSatisfiesVacuum, _GetMultiXactIdMembers = Module._GetMultiXactIdMembers = e.GetMultiXactIdMembers, _TransactionIdPrecedes = Module._TransactionIdPrecedes = e.TransactionIdPrecedes, _GetBulkInsertState = Module._GetBulkInsertState = e.GetBulkInsertState, _FreeBulkInsertState = Module._FreeBulkInsertState = e.FreeBulkInsertState, _visibilitymap_clear_locked = Module._visibilitymap_clear_locked = e.visibilitymap_clear_locked, _pgstat_count_heap_insert = Module._pgstat_count_heap_insert = e.pgstat_count_heap_insert, _heap_multi_insert = Module._heap_multi_insert = e.heap_multi_insert, _ExecFetchSlotHeapTuple = Module._ExecFetchSlotHeapTuple = e.ExecFetchSlotHeapTuple, _heap_delete = Module._heap_delete = e.heap_delete, _IsInParallelMode = Module._IsInParallelMode = e.IsInParallelMode, _visibilitymap_pin = Module._visibilitymap_pin = e.visibilitymap_pin, _HeapTupleSatisfiesUpdate = Module._HeapTupleSatisfiesUpdate = e.HeapTupleSatisfiesUpdate, _TransactionIdIsCurrentTransactionId = Module._TransactionIdIsCurrentTransactionId = e.TransactionIdIsCurrentTransactionId, _TransactionIdDidCommit = Module._TransactionIdDidCommit = e.TransactionIdDidCommit, _UnlockTuple = Module._UnlockTuple = e.UnlockTuple, _TransactionIdIsInProgress = Module._TransactionIdIsInProgress = e.TransactionIdIsInProgress, _bms_free = Module._bms_free = e.bms_free, _bms_add_members = Module._bms_add_members = e.bms_add_members, _bms_next_member = Module._bms_next_member = e.bms_next_member, _bms_overlap = Module._bms_overlap = e.bms_overlap, _HeapTupleGetUpdateXid = Module._HeapTupleGetUpdateXid = e.HeapTupleGetUpdateXid, _heap_lock_tuple = Module._heap_lock_tuple = e.heap_lock_tuple, _MultiXactIdPrecedes = Module._MultiXactIdPrecedes = e.MultiXactIdPrecedes, _heap_tuple_needs_eventual_freeze = Module._heap_tuple_needs_eventual_freeze = e.heap_tuple_needs_eventual_freeze, _PrefetchBuffer = Module._PrefetchBuffer = e.PrefetchBuffer, _RelationTruncate = Module._RelationTruncate = e.RelationTruncate, _FlushRelationBuffers = Module._FlushRelationBuffers = e.FlushRelationBuffers, _smgrexists = Module._smgrexists = e.smgrexists, _table_slot_create = Module._table_slot_create = e.table_slot_create, _ExecDropSingleTupleTableSlot = Module._ExecDropSingleTupleTableSlot = e.ExecDropSingleTupleTableSlot, _CreateExecutorState = Module._CreateExecutorState = e.CreateExecutorState, _MakePerTupleExprContext = Module._MakePerTupleExprContext = e.MakePerTupleExprContext, _ExecPrepareQual = Module._ExecPrepareQual = e.ExecPrepareQual, _GetOldestNonRemovableTransactionId = Module._GetOldestNonRemovableTransactionId = e.GetOldestNonRemovableTransactionId, _FormIndexDatum = Module._FormIndexDatum = e.FormIndexDatum, _FreeExecutorState = Module._FreeExecutorState = e.FreeExecutorState, _MakeSingleTupleTableSlot = Module._MakeSingleTupleTableSlot = e.MakeSingleTupleTableSlot, _tuplesort_getdatum = Module._tuplesort_getdatum = e.tuplesort_getdatum, _ExecStoreHeapTuple = Module._ExecStoreHeapTuple = e.ExecStoreHeapTuple, _XidInMVCCSnapshot = Module._XidInMVCCSnapshot = e.XidInMVCCSnapshot, _bsearch = Module._bsearch = e.bsearch, _XLogRecGetBlockTagExtended = Module._XLogRecGetBlockTagExtended = e.XLogRecGetBlockTagExtended, _hash_seq_init = Module._hash_seq_init = e.hash_seq_init, _hash_seq_search = Module._hash_seq_search = e.hash_seq_search, _errcode_for_file_access = Module._errcode_for_file_access = e.errcode_for_file_access, _pg_snprintf = Module._pg_snprintf = e.pg_snprintf, _OpenTransientFile = Module._OpenTransientFile = e.OpenTransientFile, _ftruncate = Module._ftruncate = e.ftruncate, ___errno_location = Module.___errno_location = e.__errno_location, _pwrite = Module._pwrite = e.pwrite, _CloseTransientFile = Module._CloseTransientFile = e.CloseTransientFile, _sscanf = Module._sscanf = e.sscanf, _unlink = Module._unlink = e.unlink, _fsync_fname = Module._fsync_fname = e.fsync_fname, _GetCurrentTimestamp = Module._GetCurrentTimestamp = e.GetCurrentTimestamp, _get_database_name = Module._get_database_name = e.get_database_name, _get_namespace_name = Module._get_namespace_name = e.get_namespace_name, _pg_prng_uint32 = Module._pg_prng_uint32 = e.pg_prng_uint32, _GetRecordedFreeSpace = Module._GetRecordedFreeSpace = e.GetRecordedFreeSpace, _visibilitymap_get_status = Module._visibilitymap_get_status = e.visibilitymap_get_status, _vac_estimate_reltuples = Module._vac_estimate_reltuples = e.vac_estimate_reltuples, _WaitLatch = Module._WaitLatch = e.WaitLatch, _ResetLatch = Module._ResetLatch = e.ResetLatch, _clock_gettime = Module._clock_gettime = e.clock_gettime, _WalUsageAccumDiff = Module._WalUsageAccumDiff = e.WalUsageAccumDiff, _BufferUsageAccumDiff = Module._BufferUsageAccumDiff = e.BufferUsageAccumDiff, _appendStringInfoString = Module._appendStringInfoString = e.appendStringInfoString, _set_errcontext_domain = Module._set_errcontext_domain = e.set_errcontext_domain, _errcontext_msg = Module._errcontext_msg = e.errcontext_msg, _visibilitymap_prepare_truncate = Module._visibilitymap_prepare_truncate = e.visibilitymap_prepare_truncate, _GetIndexAmRoutine = Module._GetIndexAmRoutine = e.GetIndexAmRoutine, _check_enable_rls = Module._check_enable_rls = e.check_enable_rls, _pg_class_aclcheck = Module._pg_class_aclcheck = e.pg_class_aclcheck, _pg_attribute_aclcheck = Module._pg_attribute_aclcheck = e.pg_attribute_aclcheck, _try_index_open = Module._try_index_open = e.try_index_open, _btboolcmp = Module._btboolcmp = e.btboolcmp, _btint2cmp = Module._btint2cmp = e.btint2cmp, _btint4cmp = Module._btint4cmp = e.btint4cmp, _btint8cmp = Module._btint8cmp = e.btint8cmp, _btoidcmp = Module._btoidcmp = e.btoidcmp, _btcharcmp = Module._btcharcmp = e.btcharcmp, __bt_form_posting = Module.__bt_form_posting = e._bt_form_posting, __bt_mkscankey = Module.__bt_mkscankey = e._bt_mkscankey, __bt_checkpage = Module.__bt_checkpage = e._bt_checkpage, __bt_compare = Module.__bt_compare = e._bt_compare, __bt_relbuf = Module.__bt_relbuf = e._bt_relbuf, __bt_search = Module.__bt_search = e._bt_search, __bt_binsrch_insert = Module.__bt_binsrch_insert = e._bt_binsrch_insert, __bt_freestack = Module.__bt_freestack = e._bt_freestack, __bt_metaversion = Module.__bt_metaversion = e._bt_metaversion, _get_opfamily_member = Module._get_opfamily_member = e.get_opfamily_member, _OidFunctionCall2Coll = Module._OidFunctionCall2Coll = e.OidFunctionCall2Coll, __bt_allequalimage = Module.__bt_allequalimage = e._bt_allequalimage, ___wasm_setjmp_test = Module.___wasm_setjmp_test = e.__wasm_setjmp_test, _before_shmem_exit = Module._before_shmem_exit = e.before_shmem_exit, ___wasm_setjmp = Module.___wasm_setjmp = e.__wasm_setjmp, _cancel_before_shmem_exit = Module._cancel_before_shmem_exit = e.cancel_before_shmem_exit, _pg_re_throw = Module._pg_re_throw = e.pg_re_throw, _emscripten_longjmp = Module._emscripten_longjmp = e.emscripten_longjmp, _ConditionVariableBroadcast = Module._ConditionVariableBroadcast = e.ConditionVariableBroadcast, _datum_image_eq = Module._datum_image_eq = e.datum_image_eq, _time = Module._time = e.time, __bt_check_natts = Module.__bt_check_natts = e._bt_check_natts, _strlcpy = Module._strlcpy = e.strlcpy, _strncpy = Module._strncpy = e.strncpy, _timestamptz_to_str = Module._timestamptz_to_str = e.timestamptz_to_str, _XLogRecGetBlockRefInfo = Module._XLogRecGetBlockRefInfo = e.XLogRecGetBlockRefInfo, _varstr_cmp = Module._varstr_cmp = e.varstr_cmp, _get_atttype = Module._get_atttype = e.get_atttype, _getBaseType = Module._getBaseType = e.getBaseType, _exprType = Module._exprType = e.exprType, _GetActiveSnapshot = Module._GetActiveSnapshot = e.GetActiveSnapshot, _errdetail_relkind_not_supported = Module._errdetail_relkind_not_supported = e.errdetail_relkind_not_supported, _table_openrv = Module._table_openrv = e.table_openrv, _table_slot_callbacks = Module._table_slot_callbacks = e.table_slot_callbacks, _clamp_row_est = Module._clamp_row_est = e.clamp_row_est, _pre_format_elog_string = Module._pre_format_elog_string = e.pre_format_elog_string, _format_elog_string = Module._format_elog_string = e.format_elog_string, _IsTransactionState = Module._IsTransactionState = e.IsTransactionState, _estimate_expression_value = Module._estimate_expression_value = e.estimate_expression_value, _SetConfigOption = Module._SetConfigOption = e.SetConfigOption, _XLogFlush = Module._XLogFlush = e.XLogFlush, _get_call_result_type = Module._get_call_result_type = e.get_call_result_type, _HeapTupleHeaderGetDatum = Module._HeapTupleHeaderGetDatum = e.HeapTupleHeaderGetDatum, _GenericXLogStart = Module._GenericXLogStart = e.GenericXLogStart, _GenericXLogRegisterBuffer = Module._GenericXLogRegisterBuffer = e.GenericXLogRegisterBuffer, _GenericXLogFinish = Module._GenericXLogFinish = e.GenericXLogFinish, _GenericXLogAbort = Module._GenericXLogAbort = e.GenericXLogAbort, _errmsg_plural = Module._errmsg_plural = e.errmsg_plural, _ReadNextMultiXactId = Module._ReadNextMultiXactId = e.ReadNextMultiXactId, _ReadMultiXactIdRange = Module._ReadMultiXactIdRange = e.ReadMultiXactIdRange, _MultiXactIdPrecedesOrEquals = Module._MultiXactIdPrecedesOrEquals = e.MultiXactIdPrecedesOrEquals, _init_MultiFuncCall = Module._init_MultiFuncCall = e.init_MultiFuncCall, _TupleDescGetAttInMetadata = Module._TupleDescGetAttInMetadata = e.TupleDescGetAttInMetadata, _per_MultiFuncCall = Module._per_MultiFuncCall = e.per_MultiFuncCall, _BuildTupleFromCStrings = Module._BuildTupleFromCStrings = e.BuildTupleFromCStrings, _end_MultiFuncCall = Module._end_MultiFuncCall = e.end_MultiFuncCall, _GetCurrentSubTransactionId = Module._GetCurrentSubTransactionId = e.GetCurrentSubTransactionId, _GetSessionUserId = Module._GetSessionUserId = e.GetSessionUserId, _WaitForBackgroundWorkerShutdown = Module._WaitForBackgroundWorkerShutdown = e.WaitForBackgroundWorkerShutdown, _RegisterDynamicBackgroundWorker = Module._RegisterDynamicBackgroundWorker = e.RegisterDynamicBackgroundWorker, _appendBinaryStringInfo = Module._appendBinaryStringInfo = e.appendBinaryStringInfo, _pq_getmsgbyte = Module._pq_getmsgbyte = e.pq_getmsgbyte, _ThrowErrorData = Module._ThrowErrorData = e.ThrowErrorData, _pq_getmsgint = Module._pq_getmsgint = e.pq_getmsgint, _pq_getmsgint64 = Module._pq_getmsgint64 = e.pq_getmsgint64, _die = Module._die = e.die, _pqsignal_be = Module._pqsignal_be = e.pqsignal_be, _BackgroundWorkerUnblockSignals = Module._BackgroundWorkerUnblockSignals = e.BackgroundWorkerUnblockSignals, _load_external_function = Module._load_external_function = e.load_external_function, _BackgroundWorkerInitializeConnectionByOid = Module._BackgroundWorkerInitializeConnectionByOid = e.BackgroundWorkerInitializeConnectionByOid, _GetDatabaseEncoding = Module._GetDatabaseEncoding = e.GetDatabaseEncoding, _StartTransactionCommand = Module._StartTransactionCommand = e.StartTransactionCommand, _CommitTransactionCommand = Module._CommitTransactionCommand = e.CommitTransactionCommand, _PushActiveSnapshot = Module._PushActiveSnapshot = e.PushActiveSnapshot, _PopActiveSnapshot = Module._PopActiveSnapshot = e.PopActiveSnapshot, _RmgrNotFound = Module._RmgrNotFound = e.RmgrNotFound, _InitMaterializedSRF = Module._InitMaterializedSRF = e.InitMaterializedSRF, _tuplestore_putvalues = Module._tuplestore_putvalues = e.tuplestore_putvalues, _pread = Module._pread = e.pread, _lseek = Module._lseek = e.lseek, _strspn = Module._strspn = e.strspn, _strtoll = Module._strtoll = e.strtoll, _AllocateFile = Module._AllocateFile = e.AllocateFile, _fgets = Module._fgets = e.fgets, _ferror = Module._ferror = e.ferror, _FreeFile = Module._FreeFile = e.FreeFile, _getpid = Module._getpid = e.getpid, _read = Module._read = e.read, _write = Module._write = e.write, _durable_rename = Module._durable_rename = e.durable_rename, _BlessTupleDesc = Module._BlessTupleDesc = e.BlessTupleDesc, _fstat = Module._fstat = e.fstat, _superuser_arg = Module._superuser_arg = e.superuser_arg, _wal_segment_close = Module._wal_segment_close = e.wal_segment_close, _wal_segment_open = Module._wal_segment_open = e.wal_segment_open, _XLogReaderAllocate = Module._XLogReaderAllocate = e.XLogReaderAllocate, _XLogReadRecord = Module._XLogReadRecord = e.XLogReadRecord, _XLogReaderFree = Module._XLogReaderFree = e.XLogReaderFree, _strtoull = Module._strtoull = e.strtoull, _access = Module._access = e.access, _IsAbortedTransactionBlockState = Module._IsAbortedTransactionBlockState = e.IsAbortedTransactionBlockState, _GetTopFullTransactionId = Module._GetTopFullTransactionId = e.GetTopFullTransactionId, _GetCurrentFullTransactionId = Module._GetCurrentFullTransactionId = e.GetCurrentFullTransactionId, _GetCurrentTransactionNestLevel = Module._GetCurrentTransactionNestLevel = e.GetCurrentTransactionNestLevel, _ResourceOwnerCreate = Module._ResourceOwnerCreate = e.ResourceOwnerCreate, _AbortCurrentTransaction = Module._AbortCurrentTransaction = e.AbortCurrentTransaction, _PreventInTransactionBlock = Module._PreventInTransactionBlock = e.PreventInTransactionBlock, _IsTransactionBlock = Module._IsTransactionBlock = e.IsTransactionBlock, _RegisterXactCallback = Module._RegisterXactCallback = e.RegisterXactCallback, _UnregisterXactCallback = Module._UnregisterXactCallback = e.UnregisterXactCallback, _RegisterSubXactCallback = Module._RegisterSubXactCallback = e.RegisterSubXactCallback, _BeginInternalSubTransaction = Module._BeginInternalSubTransaction = e.BeginInternalSubTransaction, _ReleaseCurrentSubTransaction = Module._ReleaseCurrentSubTransaction = e.ReleaseCurrentSubTransaction, _ResourceOwnerDelete = Module._ResourceOwnerDelete = e.ResourceOwnerDelete, _RollbackAndReleaseCurrentSubTransaction = Module._RollbackAndReleaseCurrentSubTransaction = e.RollbackAndReleaseCurrentSubTransaction, _pg_usleep = Module._pg_usleep = e.pg_usleep, _close = Module._close = e.close, _ReleaseExternalFD = Module._ReleaseExternalFD = e.ReleaseExternalFD, _GetDefaultCharSignedness = Module._GetDefaultCharSignedness = e.GetDefaultCharSignedness, _SplitIdentifierString = Module._SplitIdentifierString = e.SplitIdentifierString, _guc_malloc = Module._guc_malloc = e.guc_malloc, _find_option = Module._find_option = e.find_option, _gettimeofday = Module._gettimeofday = e.gettimeofday, _pg_strong_random = Module._pg_strong_random = e.pg_strong_random, _stat = Module._stat = e.stat, _GetFlushRecPtr = Module._GetFlushRecPtr = e.GetFlushRecPtr, _GetXLogReplayRecPtr = Module._GetXLogReplayRecPtr = e.GetXLogReplayRecPtr, _TimestampDifferenceMilliseconds = Module._TimestampDifferenceMilliseconds = e.TimestampDifferenceMilliseconds, _strtoul = Module._strtoul = e.strtoul, _readlink = Module._readlink = e.readlink, _pg_fprintf = Module._pg_fprintf = e.pg_fprintf, _fflush = Module._fflush = e.fflush, _pgl_system = Module._pgl_system = e.pgl_system, _wait_result_to_str = Module._wait_result_to_str = e.wait_result_to_str, _replace_percent_placeholders = Module._replace_percent_placeholders = e.replace_percent_placeholders, _makeStringInfo = Module._makeStringInfo = e.makeStringInfo, _pg_toupper = Module._pg_toupper = e.pg_toupper, _numeric_in = Module._numeric_in = e.numeric_in, _DirectFunctionCall3Coll = Module._DirectFunctionCall3Coll = e.DirectFunctionCall3Coll, _palloc_extended = Module._palloc_extended = e.palloc_extended, _pg_vsnprintf = Module._pg_vsnprintf = e.pg_vsnprintf, _XLogFindNextRecord = Module._XLogFindNextRecord = e.XLogFindNextRecord, _RestoreBlockImage = Module._RestoreBlockImage = e.RestoreBlockImage, _timestamptz_in = Module._timestamptz_in = e.timestamptz_in, _fscanf = Module._fscanf = e.fscanf, _symlink = Module._symlink = e.symlink, _ConditionVariableTimedSleep = Module._ConditionVariableTimedSleep = e.ConditionVariableTimedSleep, _ParseDateTime = Module._ParseDateTime = e.ParseDateTime, _DecodeDateTime = Module._DecodeDateTime = e.DecodeDateTime, _tm2timestamp = Module._tm2timestamp = e.tm2timestamp, _XLogRecStoreStats = Module._XLogRecStoreStats = e.XLogRecStoreStats, _hash_get_num_entries = Module._hash_get_num_entries = e.hash_get_num_entries, _read_local_xlog_page_no_wait = Module._read_local_xlog_page_no_wait = e.read_local_xlog_page_no_wait, _escape_json_with_len = Module._escape_json_with_len = e.escape_json_with_len, _BufFileSeek = Module._BufFileSeek = e.BufFileSeek, _lstat = Module._lstat = e.lstat, _destroyStringInfo = Module._destroyStringInfo = e.destroyStringInfo, _list_sort = Module._list_sort = e.list_sort, _pgl_geteuid = Module._pgl_geteuid = e.pgl_geteuid, _getegid = Module._getegid = e.getegid, _pg_checksum_page = Module._pg_checksum_page = e.pg_checksum_page, _CreateDestReceiver = Module._CreateDestReceiver = e.CreateDestReceiver, _bbsink_forward_end_archive = Module._bbsink_forward_end_archive = e.bbsink_forward_end_archive, _bbsink_forward_begin_manifest = Module._bbsink_forward_begin_manifest = e.bbsink_forward_begin_manifest, _bbsink_forward_end_manifest = Module._bbsink_forward_end_manifest = e.bbsink_forward_end_manifest, _bbsink_forward_end_backup = Module._bbsink_forward_end_backup = e.bbsink_forward_end_backup, _bbsink_forward_cleanup = Module._bbsink_forward_cleanup = e.bbsink_forward_cleanup, _MemoryContextAllocExtended = Module._MemoryContextAllocExtended = e.MemoryContextAllocExtended, _appendStringInfoVA = Module._appendStringInfoVA = e.appendStringInfoVA, _list_concat = Module._list_concat = e.list_concat, _strrchr = Module._strrchr = e.strrchr, _bbsink_forward_begin_backup = Module._bbsink_forward_begin_backup = e.bbsink_forward_begin_backup, _bbsink_forward_archive_contents = Module._bbsink_forward_archive_contents = e.bbsink_forward_archive_contents, _bbsink_forward_begin_archive = Module._bbsink_forward_begin_archive = e.bbsink_forward_begin_archive, _bbsink_forward_manifest_contents = Module._bbsink_forward_manifest_contents = e.bbsink_forward_manifest_contents, _has_privs_of_role = Module._has_privs_of_role = e.has_privs_of_role, _BaseBackupAddTarget = Module._BaseBackupAddTarget = e.BaseBackupAddTarget, _list_copy = Module._list_copy = e.list_copy, _tuplestore_puttuple = Module._tuplestore_puttuple = e.tuplestore_puttuple, _isatty = Module._isatty = e.isatty, _makeRangeVar = Module._makeRangeVar = e.makeRangeVar, _DefineIndex = Module._DefineIndex = e.DefineIndex, _getc = Module._getc = e.getc, _fread = Module._fread = e.fread, _clearerr = Module._clearerr = e.clearerr, _OidInputFunctionCall = Module._OidInputFunctionCall = e.OidInputFunctionCall, _copyObjectImpl = Module._copyObjectImpl = e.copyObjectImpl, _get_rolespec_oid = Module._get_rolespec_oid = e.get_rolespec_oid, _lappend_oid = Module._lappend_oid = e.lappend_oid, _get_object_address = Module._get_object_address = e.get_object_address, _makeTypeNameFromNameList = Module._makeTypeNameFromNameList = e.makeTypeNameFromNameList, _SearchSysCacheLocked1 = Module._SearchSysCacheLocked1 = e.SearchSysCacheLocked1, _SearchSysCache2 = Module._SearchSysCache2 = e.SearchSysCache2, _SysCacheGetAttr = Module._SysCacheGetAttr = e.SysCacheGetAttr, _CatalogTupleUpdate = Module._CatalogTupleUpdate = e.CatalogTupleUpdate, _get_attnum = Module._get_attnum = e.get_attnum, _get_rel_name = Module._get_rel_name = e.get_rel_name, _CatalogTupleDelete = Module._CatalogTupleDelete = e.CatalogTupleDelete, _get_namespace_oid = Module._get_namespace_oid = e.get_namespace_oid, _SearchSysCache3 = Module._SearchSysCache3 = e.SearchSysCache3, _performDeletion = Module._performDeletion = e.performDeletion, _CatalogTupleInsert = Module._CatalogTupleInsert = e.CatalogTupleInsert, _recordDependencyOn = Module._recordDependencyOn = e.recordDependencyOn, _RunObjectPostAlterHook = Module._RunObjectPostAlterHook = e.RunObjectPostAlterHook, _aclcheck_error_col = Module._aclcheck_error_col = e.aclcheck_error_col, _get_element_type = Module._get_element_type = e.get_element_type, _object_aclcheck = Module._object_aclcheck = e.object_aclcheck, _isTempNamespace = Module._isTempNamespace = e.isTempNamespace, _pg_attribute_aclcheck_all = Module._pg_attribute_aclcheck_all = e.pg_attribute_aclcheck_all, _IsToastNamespace = Module._IsToastNamespace = e.IsToastNamespace, _IsCatalogNamespace = Module._IsCatalogNamespace = e.IsCatalogNamespace, _superuser = Module._superuser = e.superuser, _SearchSysCacheAttName = Module._SearchSysCacheAttName = e.SearchSysCacheAttName, _LockDatabaseObject = Module._LockDatabaseObject = e.LockDatabaseObject, _new_object_addresses = Module._new_object_addresses = e.new_object_addresses, _UnlockDatabaseObject = Module._UnlockDatabaseObject = e.UnlockDatabaseObject, _free_object_addresses = Module._free_object_addresses = e.free_object_addresses, _performMultipleDeletions = Module._performMultipleDeletions = e.performMultipleDeletions, _recordDependencyOnExpr = Module._recordDependencyOnExpr = e.recordDependencyOnExpr, _get_typ_typrelid = Module._get_typ_typrelid = e.get_typ_typrelid, _query_tree_walker_impl = Module._query_tree_walker_impl = e.query_tree_walker_impl, _expression_tree_walker_impl = Module._expression_tree_walker_impl = e.expression_tree_walker_impl, _add_exact_object_address = Module._add_exact_object_address = e.add_exact_object_address, _get_rel_relkind = Module._get_rel_relkind = e.get_rel_relkind, _SystemAttributeDefinition = Module._SystemAttributeDefinition = e.SystemAttributeDefinition, _get_typtype = Module._get_typtype = e.get_typtype, _list_delete_last = Module._list_delete_last = e.list_delete_last, _type_is_collatable = Module._type_is_collatable = e.type_is_collatable, _CatalogOpenIndexes = Module._CatalogOpenIndexes = e.CatalogOpenIndexes, _CatalogCloseIndexes = Module._CatalogCloseIndexes = e.CatalogCloseIndexes, _get_relname_relid = Module._get_relname_relid = e.get_relname_relid, _GetSysCacheOid = Module._GetSysCacheOid = e.GetSysCacheOid, _SearchSysCacheCopy = Module._SearchSysCacheCopy = e.SearchSysCacheCopy, _CheckTableNotInUse = Module._CheckTableNotInUse = e.CheckTableNotInUse, _RelationForgetRelation = Module._RelationForgetRelation = e.RelationForgetRelation, _construct_array = Module._construct_array = e.construct_array, _make_parsestate = Module._make_parsestate = e.make_parsestate, _addRangeTableEntryForRelation = Module._addRangeTableEntryForRelation = e.addRangeTableEntryForRelation, _addNSItemToQuery = Module._addNSItemToQuery = e.addNSItemToQuery, _transformExpr = Module._transformExpr = e.transformExpr, _coerce_to_boolean = Module._coerce_to_boolean = e.coerce_to_boolean, _assign_expr_collations = Module._assign_expr_collations = e.assign_expr_collations, _pull_var_clause = Module._pull_var_clause = e.pull_var_clause, _get_attname = Module._get_attname = e.get_attname, _equal = Module._equal = e.equal, _coerce_to_target_type = Module._coerce_to_target_type = e.coerce_to_target_type, _nodeToString = Module._nodeToString = e.nodeToString, _list_delete_nth_cell = Module._list_delete_nth_cell = e.list_delete_nth_cell, _lappend_int = Module._lappend_int = e.lappend_int, _CatalogTupleInsertWithInfo = Module._CatalogTupleInsertWithInfo = e.CatalogTupleInsertWithInfo, _heap_truncate_find_FKs = Module._heap_truncate_find_FKs = e.heap_truncate_find_FKs, _list_oid_cmp = Module._list_oid_cmp = e.list_oid_cmp, _buildint2vector = Module._buildint2vector = e.buildint2vector, _buildoidvector = Module._buildoidvector = e.buildoidvector, _parser_errposition = Module._parser_errposition = e.parser_errposition, _check_functions_in_node = Module._check_functions_in_node = e.check_functions_in_node, _exprLocation = Module._exprLocation = e.exprLocation, _exprTypmod = Module._exprTypmod = e.exprTypmod, _get_base_element_type = Module._get_base_element_type = e.get_base_element_type, _make_ands_explicit = Module._make_ands_explicit = e.make_ands_explicit, _SystemFuncName = Module._SystemFuncName = e.SystemFuncName, _CreateTrigger = Module._CreateTrigger = e.CreateTrigger, _plan_create_index_workers = Module._plan_create_index_workers = e.plan_create_index_workers, _GetLatestSnapshot = Module._GetLatestSnapshot = e.GetLatestSnapshot, _make_ands_implicit = Module._make_ands_implicit = e.make_ands_implicit, _get_rel_relispartition = Module._get_rel_relispartition = e.get_rel_relispartition, _get_partition_ancestors = Module._get_partition_ancestors = e.get_partition_ancestors, _tuplesort_begin_datum = Module._tuplesort_begin_datum = e.tuplesort_begin_datum, _tuplesort_putdatum = Module._tuplesort_putdatum = e.tuplesort_putdatum, _list_delete_oid = Module._list_delete_oid = e.list_delete_oid, _get_rel_namespace = Module._get_rel_namespace = e.get_rel_namespace, _ExecOpenIndices = Module._ExecOpenIndices = e.ExecOpenIndices, _ExecCloseIndices = Module._ExecCloseIndices = e.ExecCloseIndices, _CatalogTupleUpdateWithInfo = Module._CatalogTupleUpdateWithInfo = e.CatalogTupleUpdateWithInfo, _ConditionalLockRelationOid = Module._ConditionalLockRelationOid = e.ConditionalLockRelationOid, _RelnameGetRelid = Module._RelnameGetRelid = e.RelnameGetRelid, _get_relkind_objtype = Module._get_relkind_objtype = e.get_relkind_objtype, _isAnyTempNamespace = Module._isAnyTempNamespace = e.isAnyTempNamespace, _RelationIsVisible = Module._RelationIsVisible = e.RelationIsVisible, _TypenameGetTypid = Module._TypenameGetTypid = e.TypenameGetTypid, _FuncnameGetCandidates = Module._FuncnameGetCandidates = e.FuncnameGetCandidates, _DeconstructQualifiedName = Module._DeconstructQualifiedName = e.DeconstructQualifiedName, _get_func_arg_info = Module._get_func_arg_info = e.get_func_arg_info, _NameListToString = Module._NameListToString = e.NameListToString, _OpernameGetOprid = Module._OpernameGetOprid = e.OpernameGetOprid, _OpclassnameGetOpcid = Module._OpclassnameGetOpcid = e.OpclassnameGetOpcid, _OpclassIsVisible = Module._OpclassIsVisible = e.OpclassIsVisible, _get_ts_config_oid = Module._get_ts_config_oid = e.get_ts_config_oid, _makeRangeVarFromNameList = Module._makeRangeVarFromNameList = e.makeRangeVarFromNameList, _quote_identifier = Module._quote_identifier = e.quote_identifier, _atoi = Module._atoi = e.atoi, _GetSearchPathMatcher = Module._GetSearchPathMatcher = e.GetSearchPathMatcher, _SearchPathMatchesCurrentEnvironment = Module._SearchPathMatchesCurrentEnvironment = e.SearchPathMatchesCurrentEnvironment, _get_collation_oid = Module._get_collation_oid = e.get_collation_oid, _GetDatabaseEncodingName = Module._GetDatabaseEncodingName = e.GetDatabaseEncodingName, _CacheRegisterSyscacheCallback = Module._CacheRegisterSyscacheCallback = e.CacheRegisterSyscacheCallback, _fetch_search_path = Module._fetch_search_path = e.fetch_search_path, _get_extension_oid = Module._get_extension_oid = e.get_extension_oid, _get_tablespace_oid = Module._get_tablespace_oid = e.get_tablespace_oid, _get_role_oid = Module._get_role_oid = e.get_role_oid, _get_language_oid = Module._get_language_oid = e.get_language_oid, _get_am_oid = Module._get_am_oid = e.get_am_oid, _get_index_am_oid = Module._get_index_am_oid = e.get_index_am_oid, _GetForeignServerByName = Module._GetForeignServerByName = e.GetForeignServerByName, _typeStringToTypeName = Module._typeStringToTypeName = e.typeStringToTypeName, _makeFloat = Module._makeFloat = e.makeFloat, _list_make2_impl = Module._list_make2_impl = e.list_make2_impl, _check_object_ownership = Module._check_object_ownership = e.check_object_ownership, _GetUserNameFromId = Module._GetUserNameFromId = e.GetUserNameFromId, _format_type_extended = Module._format_type_extended = e.format_type_extended, _quote_qualified_identifier = Module._quote_qualified_identifier = e.quote_qualified_identifier, _get_tablespace_name = Module._get_tablespace_name = e.get_tablespace_name, _GetForeignServerExtended = Module._GetForeignServerExtended = e.GetForeignServerExtended, _GetForeignServer = Module._GetForeignServer = e.GetForeignServer, _get_extension_name = Module._get_extension_name = e.get_extension_name, _construct_empty_array = Module._construct_empty_array = e.construct_empty_array, _format_type_be_qualified = Module._format_type_be_qualified = e.format_type_be_qualified, _get_namespace_name_or_temp = Module._get_namespace_name_or_temp = e.get_namespace_name_or_temp, _list_make3_impl = Module._list_make3_impl = e.list_make3_impl, _get_am_name = Module._get_am_name = e.get_am_name, _construct_md_array = Module._construct_md_array = e.construct_md_array, _pull_varattnos = Module._pull_varattnos = e.pull_varattnos, _makeBoolExpr = Module._makeBoolExpr = e.makeBoolExpr, _eval_const_expressions = Module._eval_const_expressions = e.eval_const_expressions, _get_func_name = Module._get_func_name = e.get_func_name, _construct_array_builtin = Module._construct_array_builtin = e.construct_array_builtin, _makeObjectName = Module._makeObjectName = e.makeObjectName, _get_primary_key_attnos = Module._get_primary_key_attnos = e.get_primary_key_attnos, _check_functional_grouping = Module._check_functional_grouping = e.check_functional_grouping, _bms_is_subset = Module._bms_is_subset = e.bms_is_subset, _ProcessGUCArray = Module._ProcessGUCArray = e.ProcessGUCArray, _LockHeldByMe = Module._LockHeldByMe = e.LockHeldByMe, _CheckRelationOidLockedByMe = Module._CheckRelationOidLockedByMe = e.CheckRelationOidLockedByMe, _getExtensionOfObject = Module._getExtensionOfObject = e.getExtensionOfObject, _deleteDependencyRecordsFor = Module._deleteDependencyRecordsFor = e.deleteDependencyRecordsFor, _find_inheritance_children = Module._find_inheritance_children = e.find_inheritance_children, _ActiveSnapshotSet = Module._ActiveSnapshotSet = e.ActiveSnapshotSet, _find_all_inheritors = Module._find_all_inheritors = e.find_all_inheritors, _has_superclass = Module._has_superclass = e.has_superclass, _strstr = Module._strstr = e.strstr, _memchr = Module._memchr = e.memchr, _get_opname = Module._get_opname = e.get_opname, _build_function_result_tupdesc_t = Module._build_function_result_tupdesc_t = e.build_function_result_tupdesc_t, _CheckFunctionValidatorAccess = Module._CheckFunctionValidatorAccess = e.CheckFunctionValidatorAccess, _AcquireRewriteLocks = Module._AcquireRewriteLocks = e.AcquireRewriteLocks, _pg_parse_query = Module._pg_parse_query = e.pg_parse_query, _get_func_result_type = Module._get_func_result_type = e.get_func_result_type, _function_parse_error_transpose = Module._function_parse_error_transpose = e.function_parse_error_transpose, _geterrposition = Module._geterrposition = e.geterrposition, _getinternalerrposition = Module._getinternalerrposition = e.getinternalerrposition, _pg_mblen_cstr = Module._pg_mblen_cstr = e.pg_mblen_cstr, _pg_mbstrlen_with_len = Module._pg_mbstrlen_with_len = e.pg_mbstrlen_with_len, _errposition = Module._errposition = e.errposition, _internalerrposition = Module._internalerrposition = e.internalerrposition, _internalerrquery = Module._internalerrquery = e.internalerrquery, _bms_num_members = Module._bms_num_members = e.bms_num_members, _list_concat_unique_oid = Module._list_concat_unique_oid = e.list_concat_unique_oid, _ATExecChangeOwner = Module._ATExecChangeOwner = e.ATExecChangeOwner, _quote_literal_cstr = Module._quote_literal_cstr = e.quote_literal_cstr, _get_array_type = Module._get_array_type = e.get_array_type, _pnstrdup = Module._pnstrdup = e.pnstrdup, _pg_mbcliplen = Module._pg_mbcliplen = e.pg_mbcliplen, _smgrtruncate = Module._smgrtruncate = e.smgrtruncate, _smgrreadv = Module._smgrreadv = e.smgrreadv, _NewRelationCreateToastTable = Module._NewRelationCreateToastTable = e.NewRelationCreateToastTable, _parse_analyze_fixedparams = Module._parse_analyze_fixedparams = e.parse_analyze_fixedparams, _transformStmt = Module._transformStmt = e.transformStmt, _free_parsestate = Module._free_parsestate = e.free_parsestate, _makeFromExpr = Module._makeFromExpr = e.makeFromExpr, _assign_query_collations = Module._assign_query_collations = e.assign_query_collations, _makeTargetEntry = Module._makeTargetEntry = e.makeTargetEntry, _exprCollation = Module._exprCollation = e.exprCollation, _transformSortClause = Module._transformSortClause = e.transformSortClause, _transformDistinctClause = Module._transformDistinctClause = e.transformDistinctClause, _ParseFuncOrColumn = Module._ParseFuncOrColumn = e.ParseFuncOrColumn, _select_common_type = Module._select_common_type = e.select_common_type, _coerce_to_common_type = Module._coerce_to_common_type = e.coerce_to_common_type, _select_common_collation = Module._select_common_collation = e.select_common_collation, _contain_vars_of_level = Module._contain_vars_of_level = e.contain_vars_of_level, _expandNSItemAttrs = Module._expandNSItemAttrs = e.expandNSItemAttrs, _makeAlias = Module._makeAlias = e.makeAlias, _addRangeTableEntryForSubquery = Module._addRangeTableEntryForSubquery = e.addRangeTableEntryForSubquery, _assign_list_collations = Module._assign_list_collations = e.assign_list_collations, _expandNSItemVars = Module._expandNSItemVars = e.expandNSItemVars, _markTargetListOrigins = Module._markTargetListOrigins = e.markTargetListOrigins, _addRangeTableEntryForJoin = Module._addRangeTableEntryForJoin = e.addRangeTableEntryForJoin, _list_truncate = Module._list_truncate = e.list_truncate, _makeVar = Module._makeVar = e.makeVar, _analyze_requires_snapshot = Module._analyze_requires_snapshot = e.analyze_requires_snapshot, _makeNullConst = Module._makeNullConst = e.makeNullConst, _get_sort_group_operators = Module._get_sort_group_operators = e.get_sort_group_operators, _refnameNamespaceItem = Module._refnameNamespaceItem = e.refnameNamespaceItem, _getRTEPermissionInfo = Module._getRTEPermissionInfo = e.getRTEPermissionInfo, _setup_parser_errposition_callback = Module._setup_parser_errposition_callback = e.setup_parser_errposition_callback, _cancel_parser_errposition_callback = Module._cancel_parser_errposition_callback = e.cancel_parser_errposition_callback, _locate_var_of_level = Module._locate_var_of_level = e.locate_var_of_level, _makeBoolean = Module._makeBoolean = e.makeBoolean, _makeInteger = Module._makeInteger = e.makeInteger, _makeSimpleA_Expr = Module._makeSimpleA_Expr = e.makeSimpleA_Expr, _makeTypeName = Module._makeTypeName = e.makeTypeName, _SystemTypeName = Module._SystemTypeName = e.SystemTypeName, _makeFuncCall = Module._makeFuncCall = e.makeFuncCall, _makeA_Expr = Module._makeA_Expr = e.makeA_Expr, _list_make4_impl = Module._list_make4_impl = e.list_make4_impl, _addTargetToSortList = Module._addTargetToSortList = e.addTargetToSortList, _locate_agg_of_level = Module._locate_agg_of_level = e.locate_agg_of_level, _list_intersection_int = Module._list_intersection_int = e.list_intersection_int, _get_sortgroupclause_tle = Module._get_sortgroupclause_tle = e.get_sortgroupclause_tle, _flatten_join_alias_vars = Module._flatten_join_alias_vars = e.flatten_join_alias_vars, _list_member_int = Module._list_member_int = e.list_member_int, _list_union_int = Module._list_union_int = e.list_union_int, _makeFuncExpr = Module._makeFuncExpr = e.makeFuncExpr, _get_rte_attribute_name = Module._get_rte_attribute_name = e.get_rte_attribute_name, _expression_tree_mutator_impl = Module._expression_tree_mutator_impl = e.expression_tree_mutator_impl, _checkNameSpaceConflicts = Module._checkNameSpaceConflicts = e.checkNameSpaceConflicts, _addRangeTableEntryForENR = Module._addRangeTableEntryForENR = e.addRangeTableEntryForENR, _addRangeTableEntry = Module._addRangeTableEntry = e.addRangeTableEntry, _FigureColname = Module._FigureColname = e.FigureColname, _addRangeTableEntryForFunction = Module._addRangeTableEntryForFunction = e.addRangeTableEntryForFunction, _coerce_to_specific_type = Module._coerce_to_specific_type = e.coerce_to_specific_type, _typenameTypeIdAndMod = Module._typenameTypeIdAndMod = e.typenameTypeIdAndMod, _get_typcollation = Module._get_typcollation = e.get_typcollation, _markNullableIfNeeded = Module._markNullableIfNeeded = e.markNullableIfNeeded, _markVarForSelectPriv = Module._markVarForSelectPriv = e.markVarForSelectPriv, _coerce_type = Module._coerce_type = e.coerce_type, _LookupFuncName = Module._LookupFuncName = e.LookupFuncName, _parserOpenTable = Module._parserOpenTable = e.parserOpenTable, _strip_implicit_coercions = Module._strip_implicit_coercions = e.strip_implicit_coercions, _colNameToVar = Module._colNameToVar = e.colNameToVar, _op_hashjoinable = Module._op_hashjoinable = e.op_hashjoinable, _get_commutator = Module._get_commutator = e.get_commutator, _get_ordering_op_properties = Module._get_ordering_op_properties = e.get_ordering_op_properties, _can_coerce_type = Module._can_coerce_type = e.can_coerce_type, _get_sortgroupref_tle = Module._get_sortgroupref_tle = e.get_sortgroupref_tle, _assignSortGroupRef = Module._assignSortGroupRef = e.assignSortGroupRef, _targetIsInSortList = Module._targetIsInSortList = e.targetIsInSortList, _contain_aggs_of_level = Module._contain_aggs_of_level = e.contain_aggs_of_level, _find_coercion_pathway = Module._find_coercion_pathway = e.find_coercion_pathway, _typeidType = Module._typeidType = e.typeidType, _typeTypeCollation = Module._typeTypeCollation = e.typeTypeCollation, _typeLen = Module._typeLen = e.typeLen, _typeByVal = Module._typeByVal = e.typeByVal, _get_type_category_preferred = Module._get_type_category_preferred = e.get_type_category_preferred, _makeConst = Module._makeConst = e.makeConst, _lookup_rowtype_tupdesc = Module._lookup_rowtype_tupdesc = e.lookup_rowtype_tupdesc, _type_is_enum = Module._type_is_enum = e.type_is_enum, _verify_common_type = Module._verify_common_type = e.verify_common_type, _type_is_range = Module._type_is_range = e.type_is_range, _bms_del_member = Module._bms_del_member = e.bms_del_member, _list_member = Module._list_member = e.list_member, _raw_expression_tree_walker_impl = Module._raw_expression_tree_walker_impl = e.raw_expression_tree_walker_impl, _type_is_rowtype = Module._type_is_rowtype = e.type_is_rowtype, _scanNSItemForColumn = Module._scanNSItemForColumn = e.scanNSItemForColumn, _make_op = Module._make_op = e.make_op, _make_scalar_array_op = Module._make_scalar_array_op = e.make_scalar_array_op, _count_nonjunk_tlist_entries = Module._count_nonjunk_tlist_entries = e.count_nonjunk_tlist_entries, _makeWholeRowVar = Module._makeWholeRowVar = e.makeWholeRowVar, _expandRTE = Module._expandRTE = e.expandRTE, _contain_var_clause = Module._contain_var_clause = e.contain_var_clause, _jsonb_in = Module._jsonb_in = e.jsonb_in, _get_func_prokind = Module._get_func_prokind = e.get_func_prokind, _escape_json = Module._escape_json = e.escape_json, _geterrcode = Module._geterrcode = e.geterrcode, _bit_in = Module._bit_in = e.bit_in, _repalloc0 = Module._repalloc0 = e.repalloc0, _bms_union = Module._bms_union = e.bms_union, _varstr_levenshtein_less_equal = Module._varstr_levenshtein_less_equal = e.varstr_levenshtein_less_equal, _get_atttypetypmodcoll = Module._get_atttypetypmodcoll = e.get_atttypetypmodcoll, _raw_parser = Module._raw_parser = e.raw_parser, _errsave_start = Module._errsave_start = e.errsave_start, _errsave_finish = Module._errsave_finish = e.errsave_finish, _makeColumnDef = Module._makeColumnDef = e.makeColumnDef, _GetDefaultOpClass = Module._GetDefaultOpClass = e.GetDefaultOpClass, _transformIndexStmt = Module._transformIndexStmt = e.transformIndexStmt, _ChooseRelationName = Module._ChooseRelationName = e.ChooseRelationName, _deparse_context_for = Module._deparse_context_for = e.deparse_context_for, _deparse_expression = Module._deparse_expression = e.deparse_expression, _expression_planner = Module._expression_planner = e.expression_planner, _scanner_init = Module._scanner_init = e.scanner_init, _scanner_finish = Module._scanner_finish = e.scanner_finish, _core_yylex = Module._core_yylex = e.core_yylex, _isxdigit = Module._isxdigit = e.isxdigit, _scanner_isspace = Module._scanner_isspace = e.scanner_isspace, _truncate_identifier = Module._truncate_identifier = e.truncate_identifier, _ScanKeywordLookup = Module._ScanKeywordLookup = e.ScanKeywordLookup, _pg_verifymbstr = Module._pg_verifymbstr = e.pg_verifymbstr, _downcase_truncate_identifier = Module._downcase_truncate_identifier = e.downcase_truncate_identifier, _pg_database_encoding_max_length = Module._pg_database_encoding_max_length = e.pg_database_encoding_max_length, _getTypeInputInfo = Module._getTypeInputInfo = e.getTypeInputInfo, _RenameSchema = Module._RenameSchema = e.RenameSchema, _check_can_set_role = Module._check_can_set_role = e.check_can_set_role, _namein = Module._namein = e.namein, _BlockSampler_Init = Module._BlockSampler_Init = e.BlockSampler_Init, _reservoir_init_selection_state = Module._reservoir_init_selection_state = e.reservoir_init_selection_state, _reservoir_get_next_S = Module._reservoir_get_next_S = e.reservoir_get_next_S, _sampler_random_fract = Module._sampler_random_fract = e.sampler_random_fract, _std_typanalyze = Module._std_typanalyze = e.std_typanalyze, _BlockSampler_HasMore = Module._BlockSampler_HasMore = e.BlockSampler_HasMore, _BlockSampler_Next = Module._BlockSampler_Next = e.BlockSampler_Next, _Async_Notify = Module._Async_Notify = e.Async_Notify, _RangeVarCallbackMaintainsTable = Module._RangeVarCallbackMaintainsTable = e.RangeVarCallbackMaintainsTable, _make_new_heap = Module._make_new_heap = e.make_new_heap, _finish_heap_swap = Module._finish_heap_swap = e.finish_heap_swap, _RenameRelationInternal = Module._RenameRelationInternal = e.RenameRelationInternal, _OpenPipeStream = Module._OpenPipeStream = e.OpenPipeStream, _pg_is_ascii = Module._pg_is_ascii = e.pg_is_ascii, _ClosePipeStream = Module._ClosePipeStream = e.ClosePipeStream, _PreventCommandIfReadOnly = Module._PreventCommandIfReadOnly = e.PreventCommandIfReadOnly, _BeginCopyFrom = Module._BeginCopyFrom = e.BeginCopyFrom, _EndCopyFrom = Module._EndCopyFrom = e.EndCopyFrom, _ProcessCopyOptions = Module._ProcessCopyOptions = e.ProcessCopyOptions, _pg_strtoint64 = Module._pg_strtoint64 = e.pg_strtoint64, _CopyFromErrorCallback = Module._CopyFromErrorCallback = e.CopyFromErrorCallback, _bms_make_singleton = Module._bms_make_singleton = e.bms_make_singleton, _ExecInitRangeTable = Module._ExecInitRangeTable = e.ExecInitRangeTable, _ExecInitResultRelation = Module._ExecInitResultRelation = e.ExecInitResultRelation, _ExecInitQual = Module._ExecInitQual = e.ExecInitQual, _contain_volatile_functions = Module._contain_volatile_functions = e.contain_volatile_functions, _NextCopyFrom = Module._NextCopyFrom = e.NextCopyFrom, _ExecCloseResultRelations = Module._ExecCloseResultRelations = e.ExecCloseResultRelations, _ExecCloseRangeTableRelations = Module._ExecCloseRangeTableRelations = e.ExecCloseRangeTableRelations, _ExecConstraints = Module._ExecConstraints = e.ExecConstraints, _ExecInsertIndexTuples = Module._ExecInsertIndexTuples = e.ExecInsertIndexTuples, _build_column_default = Module._build_column_default = e.build_column_default, _ExecInitExpr = Module._ExecInitExpr = e.ExecInitExpr, _fileno = Module._fileno = e.fileno, _NextCopyFromRawFields = Module._NextCopyFromRawFields = e.NextCopyFromRawFields, _resetStringInfo = Module._resetStringInfo = e.resetStringInfo, _pq_copymsgbytes = Module._pq_copymsgbytes = e.pq_copymsgbytes, _pg_encoding_max_length = Module._pg_encoding_max_length = e.pg_encoding_max_length, _tolower = Module._tolower = e.tolower, _pg_plan_query = Module._pg_plan_query = e.pg_plan_query, _PushCopiedSnapshot = Module._PushCopiedSnapshot = e.PushCopiedSnapshot, _UpdateActiveSnapshotCommandId = Module._UpdateActiveSnapshotCommandId = e.UpdateActiveSnapshotCommandId, _CreateQueryDesc = Module._CreateQueryDesc = e.CreateQueryDesc, _ExecutorStart = Module._ExecutorStart = e.ExecutorStart, _ExecutorFinish = Module._ExecutorFinish = e.ExecutorFinish, _ExecutorEnd = Module._ExecutorEnd = e.ExecutorEnd, _FreeQueryDesc = Module._FreeQueryDesc = e.FreeQueryDesc, _ExecutorRun = Module._ExecutorRun = e.ExecutorRun, _pg_server_to_any = Module._pg_server_to_any = e.pg_server_to_any, _fwrite = Module._fwrite = e.fwrite, _CreateTableAsRelExists = Module._CreateTableAsRelExists = e.CreateTableAsRelExists, _QueryRewrite = Module._QueryRewrite = e.QueryRewrite, _DefineRelation = Module._DefineRelation = e.DefineRelation, _rmdir = Module._rmdir = e.rmdir, _atof = Module._atof = e.atof, _int8in = Module._int8in = e.int8in, _oidin = Module._oidin = e.oidin, _RemoveObjects = Module._RemoveObjects = e.RemoveObjects, _GetCommandTagEnum = Module._GetCommandTagEnum = e.GetCommandTagEnum, _CreateCommandTag = Module._CreateCommandTag = e.CreateCommandTag, _GetCommandTagName = Module._GetCommandTagName = e.GetCommandTagName, _NewExplainState = Module._NewExplainState = e.NewExplainState, _ExplainBeginOutput = Module._ExplainBeginOutput = e.ExplainBeginOutput, _ExplainEndOutput = Module._ExplainEndOutput = e.ExplainEndOutput, _ExplainOpenGroup = Module._ExplainOpenGroup = e.ExplainOpenGroup, _ExplainPrintPlan = Module._ExplainPrintPlan = e.ExplainPrintPlan, _ExplainIndentText = Module._ExplainIndentText = e.ExplainIndentText, _ExplainPropertyInteger = Module._ExplainPropertyInteger = e.ExplainPropertyInteger, _ExplainCloseGroup = Module._ExplainCloseGroup = e.ExplainCloseGroup, _ExplainPropertyFloat = Module._ExplainPropertyFloat = e.ExplainPropertyFloat, _ExplainPrintTriggers = Module._ExplainPrintTriggers = e.ExplainPrintTriggers, _ExplainPropertyUInteger = Module._ExplainPropertyUInteger = e.ExplainPropertyUInteger, _ExplainPropertyText = Module._ExplainPropertyText = e.ExplainPropertyText, _GetConfigOptionByName = Module._GetConfigOptionByName = e.GetConfigOptionByName, _ExplainPrintJITSummary = Module._ExplainPrintJITSummary = e.ExplainPrintJITSummary, _ExplainPropertyBool = Module._ExplainPropertyBool = e.ExplainPropertyBool, _InstrEndLoop = Module._InstrEndLoop = e.InstrEndLoop, _appendStringInfoSpaces = Module._appendStringInfoSpaces = e.appendStringInfoSpaces, _ExplainQueryText = Module._ExplainQueryText = e.ExplainQueryText, _ExplainQueryParameters = Module._ExplainQueryParameters = e.ExplainQueryParameters, _get_func_namespace = Module._get_func_namespace = e.get_func_namespace, _escape_xml = Module._escape_xml = e.escape_xml, _GetExplainExtensionId = Module._GetExplainExtensionId = e.GetExplainExtensionId, _GetExplainExtensionState = Module._GetExplainExtensionState = e.GetExplainExtensionState, _SetExplainExtensionState = Module._SetExplainExtensionState = e.SetExplainExtensionState, _RegisterExtensionExplainOption = Module._RegisterExtensionExplainOption = e.RegisterExtensionExplainOption, _get_extension_schema = Module._get_extension_schema = e.get_extension_schema, _get_function_sibling_type = Module._get_function_sibling_type = e.get_function_sibling_type, _GetSysCacheHashValue = Module._GetSysCacheHashValue = e.GetSysCacheHashValue, _CreateSchemaCommand = Module._CreateSchemaCommand = e.CreateSchemaCommand, _get_rel_type_id = Module._get_rel_type_id = e.get_rel_type_id, _set_config_option = Module._set_config_option = e.set_config_option, _pg_any_to_server = Module._pg_any_to_server = e.pg_any_to_server, _DirectFunctionCall4Coll = Module._DirectFunctionCall4Coll = e.DirectFunctionCall4Coll, _replace_text = Module._replace_text = e.replace_text, _strpbrk = Module._strpbrk = e.strpbrk, _ProcessUtility = Module._ProcessUtility = e.ProcessUtility, _CleanQuerytext = Module._CleanQuerytext = e.CleanQuerytext, _GetForeignDataWrapper = Module._GetForeignDataWrapper = e.GetForeignDataWrapper, _CreateExprContext = Module._CreateExprContext = e.CreateExprContext, _EnsurePortalSnapshotExists = Module._EnsurePortalSnapshotExists = e.EnsurePortalSnapshotExists, _CheckIndexCompatible = Module._CheckIndexCompatible = e.CheckIndexCompatible, _op_input_types = Module._op_input_types = e.op_input_types, _ResolveOpClass = Module._ResolveOpClass = e.ResolveOpClass, _get_opclass_family = Module._get_opclass_family = e.get_opclass_family, _get_opfamily_member_for_cmptype = Module._get_opfamily_member_for_cmptype = e.get_opfamily_member_for_cmptype, _pgstat_count_truncate = Module._pgstat_count_truncate = e.pgstat_count_truncate, _SPI_connect = Module._SPI_connect = e.SPI_connect, _SPI_exec = Module._SPI_exec = e.SPI_exec, _SPI_execute = Module._SPI_execute = e.SPI_execute, _SPI_getvalue = Module._SPI_getvalue = e.SPI_getvalue, _generate_operator_clause = Module._generate_operator_clause = e.generate_operator_clause, _SPI_finish = Module._SPI_finish = e.SPI_finish, _CreateTransientRelDestReceiver = Module._CreateTransientRelDestReceiver = e.CreateTransientRelDestReceiver, _MemoryContextSetIdentifier = Module._MemoryContextSetIdentifier = e.MemoryContextSetIdentifier, _checkExprHasSubLink = Module._checkExprHasSubLink = e.checkExprHasSubLink, _MemoryContextSetParent = Module._MemoryContextSetParent = e.MemoryContextSetParent, _copyParamList = Module._copyParamList = e.copyParamList, _SetTuplestoreDestReceiverParams = Module._SetTuplestoreDestReceiverParams = e.SetTuplestoreDestReceiverParams, _tuplestore_rescan = Module._tuplestore_rescan = e.tuplestore_rescan, _MemoryContextDeleteChildren = Module._MemoryContextDeleteChildren = e.MemoryContextDeleteChildren, _GetCachedPlan = Module._GetCachedPlan = e.GetCachedPlan, _makeParamList = Module._makeParamList = e.makeParamList, _ReleaseCachedPlan = Module._ReleaseCachedPlan = e.ReleaseCachedPlan, _bms_equal = Module._bms_equal = e.bms_equal, _func_volatile = Module._func_volatile = e.func_volatile, _register_label_provider = Module._register_label_provider = e.register_label_provider, _DefineSequence = Module._DefineSequence = e.DefineSequence, _AlterSequence = Module._AlterSequence = e.AlterSequence, _RangeVarCallbackOwnsRelation = Module._RangeVarCallbackOwnsRelation = e.RangeVarCallbackOwnsRelation, _nextval = Module._nextval = e.nextval, _textToQualifiedNameList = Module._textToQualifiedNameList = e.textToQualifiedNameList, _nextval_internal = Module._nextval_internal = e.nextval_internal, _setval_oid = Module._setval_oid = e.setval_oid, _tuplestore_gettupleslot = Module._tuplestore_gettupleslot = e.tuplestore_gettupleslot, _list_delete = Module._list_delete = e.list_delete, _tuplestore_end = Module._tuplestore_end = e.tuplestore_end, _list_append_unique = Module._list_append_unique = e.list_append_unique, _get_rel_relam = Module._get_rel_relam = e.get_rel_relam, _contain_mutable_functions = Module._contain_mutable_functions = e.contain_mutable_functions, _RemoveRelations = Module._RemoveRelations = e.RemoveRelations, _ExecuteTruncateGuts = Module._ExecuteTruncateGuts = e.ExecuteTruncateGuts, _InitResultRelInfo = Module._InitResultRelInfo = e.InitResultRelInfo, _AlterTableLookupRelation = Module._AlterTableLookupRelation = e.AlterTableLookupRelation, _AlterTable = Module._AlterTable = e.AlterTable, _AlterTableInternal = Module._AlterTableInternal = e.AlterTableInternal, _AlterTableGetLockLevel = Module._AlterTableGetLockLevel = e.AlterTableGetLockLevel, _pg_get_indexdef_string = Module._pg_get_indexdef_string = e.pg_get_indexdef_string, _ExecStoreAllNullTuple = Module._ExecStoreAllNullTuple = e.ExecStoreAllNullTuple, _chmod = Module._chmod = e.chmod, _ChangeVarNodes = Module._ChangeVarNodes = e.ChangeVarNodes, _tuplestore_begin_heap = Module._tuplestore_begin_heap = e.tuplestore_begin_heap, _tuplestore_puttupleslot = Module._tuplestore_puttupleslot = e.tuplestore_puttupleslot, _ExecForceStoreHeapTuple = Module._ExecForceStoreHeapTuple = e.ExecForceStoreHeapTuple, _ExecUpdateLockMode = Module._ExecUpdateLockMode = e.ExecUpdateLockMode, _bms_copy = Module._bms_copy = e.bms_copy, _strtoint = Module._strtoint = e.strtoint, _strtod = Module._strtod = e.strtod, _plain_crypt_verify = Module._plain_crypt_verify = e.plain_crypt_verify, _ProcessConfigFile = Module._ProcessConfigFile = e.ProcessConfigFile, _pgl_exit = Module._pgl_exit = e.pgl_exit, _dsa_get_handle = Module._dsa_get_handle = e.dsa_get_handle, _pg_strncasecmp = Module._pg_strncasecmp = e.pg_strncasecmp, _guc_free = Module._guc_free = e.guc_free, _ExecReScan = Module._ExecReScan = e.ExecReScan, _ExecAsyncResponse = Module._ExecAsyncResponse = e.ExecAsyncResponse, _ExecAsyncRequestDone = Module._ExecAsyncRequestDone = e.ExecAsyncRequestDone, _ExecAsyncRequestPending = Module._ExecAsyncRequestPending = e.ExecAsyncRequestPending, _ExprEvalPushStep = Module._ExprEvalPushStep = e.ExprEvalPushStep, _lookup_rowtype_tupdesc_copy = Module._lookup_rowtype_tupdesc_copy = e.lookup_rowtype_tupdesc_copy, _ExecInitExprWithParams = Module._ExecInitExprWithParams = e.ExecInitExprWithParams, _ExecInitExprList = Module._ExecInitExprList = e.ExecInitExprList, _ExecGetResultType = Module._ExecGetResultType = e.ExecGetResultType, _ExecInitExtraTupleSlot = Module._ExecInitExtraTupleSlot = e.ExecInitExtraTupleSlot, _MakeExpandedObjectReadOnlyInternal = Module._MakeExpandedObjectReadOnlyInternal = e.MakeExpandedObjectReadOnlyInternal, _tuplesort_puttupleslot = Module._tuplesort_puttupleslot = e.tuplesort_puttupleslot, _ArrayGetNItems = Module._ArrayGetNItems = e.ArrayGetNItems, _expanded_record_fetch_tupdesc = Module._expanded_record_fetch_tupdesc = e.expanded_record_fetch_tupdesc, _expanded_record_fetch_field = Module._expanded_record_fetch_field = e.expanded_record_fetch_field, _json_validate = Module._json_validate = e.json_validate, _JsonbValueToJsonb = Module._JsonbValueToJsonb = e.JsonbValueToJsonb, _numeric_out = Module._numeric_out = e.numeric_out, _boolout = Module._boolout = e.boolout, _bool_int4 = Module._bool_int4 = e.bool_int4, _lookup_rowtype_tupdesc_domain = Module._lookup_rowtype_tupdesc_domain = e.lookup_rowtype_tupdesc_domain, _MemoryContextGetParent = Module._MemoryContextGetParent = e.MemoryContextGetParent, _DeleteExpandedObject = Module._DeleteExpandedObject = e.DeleteExpandedObject, _CreateStandaloneExprContext = Module._CreateStandaloneExprContext = e.CreateStandaloneExprContext, _ExecFindJunkAttributeInTlist = Module._ExecFindJunkAttributeInTlist = e.ExecFindJunkAttributeInTlist, _standard_ExecutorStart = Module._standard_ExecutorStart = e.standard_ExecutorStart, _ExecInitNode = Module._ExecInitNode = e.ExecInitNode, _standard_ExecutorRun = Module._standard_ExecutorRun = e.standard_ExecutorRun, _standard_ExecutorFinish = Module._standard_ExecutorFinish = e.standard_ExecutorFinish, _standard_ExecutorEnd = Module._standard_ExecutorEnd = e.standard_ExecutorEnd, _ExecEndNode = Module._ExecEndNode = e.ExecEndNode, _InstrAlloc = Module._InstrAlloc = e.InstrAlloc, _MakeTupleTableSlot = Module._MakeTupleTableSlot = e.MakeTupleTableSlot, _ExecWithCheckOptions = Module._ExecWithCheckOptions = e.ExecWithCheckOptions, _get_typlenbyval = Module._get_typlenbyval = e.get_typlenbyval, _ExecInitScanTupleSlot = Module._ExecInitScanTupleSlot = e.ExecInitScanTupleSlot, _InputFunctionCall = Module._InputFunctionCall = e.InputFunctionCall, _list_delete_ptr = Module._list_delete_ptr = e.list_delete_ptr, _FreeExprContext = Module._FreeExprContext = e.FreeExprContext, _ExecAssignExprContext = Module._ExecAssignExprContext = e.ExecAssignExprContext, _ExecAssignProjectionInfo = Module._ExecAssignProjectionInfo = e.ExecAssignProjectionInfo, _ExecOpenScanRelation = Module._ExecOpenScanRelation = e.ExecOpenScanRelation, _bms_intersect = Module._bms_intersect = e.bms_intersect, _GetAttributeByName = Module._GetAttributeByName = e.GetAttributeByName, _GetAttributeByNum = Module._GetAttributeByNum = e.GetAttributeByNum, _ExecGetReturningSlot = Module._ExecGetReturningSlot = e.ExecGetReturningSlot, _ExecGetResultRelCheckAsUser = Module._ExecGetResultRelCheckAsUser = e.ExecGetResultRelCheckAsUser, _MemoryContextRegisterResetCallback = Module._MemoryContextRegisterResetCallback = e.MemoryContextRegisterResetCallback, _cached_function_compile = Module._cached_function_compile = e.cached_function_compile, _CommandIsReadOnly = Module._CommandIsReadOnly = e.CommandIsReadOnly, _InstrUpdateTupleCount = Module._InstrUpdateTupleCount = e.InstrUpdateTupleCount, _tuplesort_begin_heap = Module._tuplesort_begin_heap = e.tuplesort_begin_heap, _AggCheckCallContext = Module._AggCheckCallContext = e.AggCheckCallContext, _tuplesort_gettupleslot = Module._tuplesort_gettupleslot = e.tuplesort_gettupleslot, _bms_del_members = Module._bms_del_members = e.bms_del_members, _AddWaitEventToSet = Module._AddWaitEventToSet = e.AddWaitEventToSet, _GetNumRegisteredWaitEvents = Module._GetNumRegisteredWaitEvents = e.GetNumRegisteredWaitEvents, _tuplestore_clear = Module._tuplestore_clear = e.tuplestore_clear, _get_attstatsslot = Module._get_attstatsslot = e.get_attstatsslot, _free_attstatsslot = Module._free_attstatsslot = e.free_attstatsslot, _SharedFileSetInit = Module._SharedFileSetInit = e.SharedFileSetInit, _SharedFileSetAttach = Module._SharedFileSetAttach = e.SharedFileSetAttach, _tuplesort_reset = Module._tuplesort_reset = e.tuplesort_reset, _pairingheap_first = Module._pairingheap_first = e.pairingheap_first, _bms_nonempty_difference = Module._bms_nonempty_difference = e.bms_nonempty_difference, _datum_image_hash = Module._datum_image_hash = e.datum_image_hash, _tuplesort_rescan = Module._tuplesort_rescan = e.tuplesort_rescan, _WinGetPartitionLocalMemory = Module._WinGetPartitionLocalMemory = e.WinGetPartitionLocalMemory, _WinGetCurrentPosition = Module._WinGetCurrentPosition = e.WinGetCurrentPosition, _WinGetPartitionRowCount = Module._WinGetPartitionRowCount = e.WinGetPartitionRowCount, _WinGetFuncArgInPartition = Module._WinGetFuncArgInPartition = e.WinGetFuncArgInPartition, _WinGetFuncArgCurrent = Module._WinGetFuncArgCurrent = e.WinGetFuncArgCurrent, _SPI_connect_ext = Module._SPI_connect_ext = e.SPI_connect_ext, _SPI_commit = Module._SPI_commit = e.SPI_commit, _CopyErrorData = Module._CopyErrorData = e.CopyErrorData, _FlushErrorState = Module._FlushErrorState = e.FlushErrorState, _ReThrowError = Module._ReThrowError = e.ReThrowError, _SPI_commit_and_chain = Module._SPI_commit_and_chain = e.SPI_commit_and_chain, _SPI_rollback = Module._SPI_rollback = e.SPI_rollback, _SPI_rollback_and_chain = Module._SPI_rollback_and_chain = e.SPI_rollback_and_chain, _SPI_freetuptable = Module._SPI_freetuptable = e.SPI_freetuptable, _SPI_execute_extended = Module._SPI_execute_extended = e.SPI_execute_extended, _SPI_execute_plan = Module._SPI_execute_plan = e.SPI_execute_plan, _SPI_execp = Module._SPI_execp = e.SPI_execp, _SPI_execute_plan_extended = Module._SPI_execute_plan_extended = e.SPI_execute_plan_extended, _SPI_execute_plan_with_paramlist = Module._SPI_execute_plan_with_paramlist = e.SPI_execute_plan_with_paramlist, _SPI_execute_with_args = Module._SPI_execute_with_args = e.SPI_execute_with_args, _SPI_prepare = Module._SPI_prepare = e.SPI_prepare, _SPI_prepare_extended = Module._SPI_prepare_extended = e.SPI_prepare_extended, _SPI_keepplan = Module._SPI_keepplan = e.SPI_keepplan, _SPI_saveplan = Module._SPI_saveplan = e.SPI_saveplan, _SPI_freeplan = Module._SPI_freeplan = e.SPI_freeplan, _SPI_copytuple = Module._SPI_copytuple = e.SPI_copytuple, _SPI_returntuple = Module._SPI_returntuple = e.SPI_returntuple, _SPI_modifytuple = Module._SPI_modifytuple = e.SPI_modifytuple, _SPI_fnumber = Module._SPI_fnumber = e.SPI_fnumber, _SPI_fname = Module._SPI_fname = e.SPI_fname, _SPI_getbinval = Module._SPI_getbinval = e.SPI_getbinval, _SPI_gettype = Module._SPI_gettype = e.SPI_gettype, _SPI_gettypeid = Module._SPI_gettypeid = e.SPI_gettypeid, _SPI_getrelname = Module._SPI_getrelname = e.SPI_getrelname, _SPI_palloc = Module._SPI_palloc = e.SPI_palloc, _SPI_repalloc = Module._SPI_repalloc = e.SPI_repalloc, _SPI_pfree = Module._SPI_pfree = e.SPI_pfree, _SPI_datumTransfer = Module._SPI_datumTransfer = e.SPI_datumTransfer, _datumTransfer = Module._datumTransfer = e.datumTransfer, _SPI_cursor_open_with_args = Module._SPI_cursor_open_with_args = e.SPI_cursor_open_with_args, _SPI_cursor_open_with_paramlist = Module._SPI_cursor_open_with_paramlist = e.SPI_cursor_open_with_paramlist, _SPI_cursor_parse_open = Module._SPI_cursor_parse_open = e.SPI_cursor_parse_open, _SPI_cursor_find = Module._SPI_cursor_find = e.SPI_cursor_find, _SPI_cursor_fetch = Module._SPI_cursor_fetch = e.SPI_cursor_fetch, _SPI_scroll_cursor_fetch = Module._SPI_scroll_cursor_fetch = e.SPI_scroll_cursor_fetch, _SPI_scroll_cursor_move = Module._SPI_scroll_cursor_move = e.SPI_scroll_cursor_move, _SPI_cursor_close = Module._SPI_cursor_close = e.SPI_cursor_close, _SPI_plan_is_valid = Module._SPI_plan_is_valid = e.SPI_plan_is_valid, _SPI_result_code_string = Module._SPI_result_code_string = e.SPI_result_code_string, _SPI_plan_get_plan_sources = Module._SPI_plan_get_plan_sources = e.SPI_plan_get_plan_sources, _SPI_plan_get_cached_plan = Module._SPI_plan_get_cached_plan = e.SPI_plan_get_cached_plan, _SPI_register_relation = Module._SPI_register_relation = e.SPI_register_relation, _create_queryEnv = Module._create_queryEnv = e.create_queryEnv, _register_ENR = Module._register_ENR = e.register_ENR, _SPI_register_trigger_data = Module._SPI_register_trigger_data = e.SPI_register_trigger_data, _tuplestore_tuple_count = Module._tuplestore_tuple_count = e.tuplestore_tuple_count, _GetUserMapping = Module._GetUserMapping = e.GetUserMapping, _GetForeignTable = Module._GetForeignTable = e.GetForeignTable, _GetForeignColumnOptions = Module._GetForeignColumnOptions = e.GetForeignColumnOptions, _initClosestMatch = Module._initClosestMatch = e.initClosestMatch, _updateClosestMatch = Module._updateClosestMatch = e.updateClosestMatch, _getClosestMatch = Module._getClosestMatch = e.getClosestMatch, _GetExistingLocalJoinPath = Module._GetExistingLocalJoinPath = e.GetExistingLocalJoinPath, _pathkeys_contained_in = Module._pathkeys_contained_in = e.pathkeys_contained_in, _bloom_create = Module._bloom_create = e.bloom_create, _bloom_free = Module._bloom_free = e.bloom_free, _bloom_add_element = Module._bloom_add_element = e.bloom_add_element, _bloom_lacks_element = Module._bloom_lacks_element = e.bloom_lacks_element, _bloom_prop_bits_set = Module._bloom_prop_bits_set = e.bloom_prop_bits_set, _dshash_create = Module._dshash_create = e.dshash_create, _dshash_attach = Module._dshash_attach = e.dshash_attach, _dshash_detach = Module._dshash_detach = e.dshash_detach, _dshash_destroy = Module._dshash_destroy = e.dshash_destroy, _dshash_get_hash_table_handle = Module._dshash_get_hash_table_handle = e.dshash_get_hash_table_handle, _dshash_find = Module._dshash_find = e.dshash_find, _dshash_find_or_insert = Module._dshash_find_or_insert = e.dshash_find_or_insert, _dshash_delete_key = Module._dshash_delete_key = e.dshash_delete_key, _dshash_release_lock = Module._dshash_release_lock = e.dshash_release_lock, _tag_hash = Module._tag_hash = e.tag_hash, _dshash_seq_init = Module._dshash_seq_init = e.dshash_seq_init, _dshash_seq_next = Module._dshash_seq_next = e.dshash_seq_next, _dshash_seq_term = Module._dshash_seq_term = e.dshash_seq_term, _dshash_delete_current = Module._dshash_delete_current = e.dshash_delete_current, _ldexp = Module._ldexp = e.ldexp, _pg_b64_enc_len = Module._pg_b64_enc_len = e.pg_b64_enc_len, _pg_b64_encode = Module._pg_b64_encode = e.pg_b64_encode, _strtol = Module._strtol = e.strtol, _gai_strerror = Module._gai_strerror = e.gai_strerror, _bind = Module._bind = e.bind, _pgl_connect = Module._pgl_connect = e.pgl_connect, _pgl_send = Module._pgl_send = e.pgl_send, _pgl_recv = Module._pgl_recv = e.pgl_recv, _sendto = Module._sendto = e.sendto, _select = Module._select = e.select, _recvfrom = Module._recvfrom = e.recvfrom, _be_lo_unlink = Module._be_lo_unlink = e.be_lo_unlink, _text_to_cstring_buffer = Module._text_to_cstring_buffer = e.text_to_cstring_buffer, _feof = Module._feof = e.feof, _pg_mb2wchar_with_len = Module._pg_mb2wchar_with_len = e.pg_mb2wchar_with_len, _pg_regcomp = Module._pg_regcomp = e.pg_regcomp, _pg_regerror = Module._pg_regerror = e.pg_regerror, _strcat = Module._strcat = e.strcat, _freeaddrinfo = Module._freeaddrinfo = e.freeaddrinfo, _pgl_getsockname = Module._pgl_getsockname = e.pgl_getsockname, _pgl_setsockopt = Module._pgl_setsockopt = e.pgl_setsockopt, _pgl_fcntl = Module._pgl_fcntl = e.pgl_fcntl, _listen = Module._listen = e.listen, _accept = Module._accept = e.accept, _utime = Module._utime = e.utime, _pq_buffer_remaining_data = Module._pq_buffer_remaining_data = e.pq_buffer_remaining_data, _pgl_getsockopt = Module._pgl_getsockopt = e.pgl_getsockopt, _pq_sendtext = Module._pq_sendtext = e.pq_sendtext, _pq_sendfloat4 = Module._pq_sendfloat4 = e.pq_sendfloat4, _pq_sendfloat8 = Module._pq_sendfloat8 = e.pq_sendfloat8, _pq_begintypsend = Module._pq_begintypsend = e.pq_begintypsend, _pq_endtypsend = Module._pq_endtypsend = e.pq_endtypsend, _pq_getmsgfloat4 = Module._pq_getmsgfloat4 = e.pq_getmsgfloat4, _pq_getmsgfloat8 = Module._pq_getmsgfloat8 = e.pq_getmsgfloat8, _pq_getmsgtext = Module._pq_getmsgtext = e.pq_getmsgtext, _pg_strtoint32 = Module._pg_strtoint32 = e.pg_strtoint32, _main = Module._main = e.__main_argc_argv, _pgl_getuid = Module._pgl_getuid = e.pgl_getuid, _getenv = Module._getenv = e.getenv, _bms_membership = Module._bms_membership = e.bms_membership, _RegisterExtensibleNodeMethods = Module._RegisterExtensibleNodeMethods = e.RegisterExtensibleNodeMethods, _list_make5_impl = Module._list_make5_impl = e.list_make5_impl, _GetMemoryChunkContext = Module._GetMemoryChunkContext = e.GetMemoryChunkContext, _list_insert_nth = Module._list_insert_nth = e.list_insert_nth, _list_member_ptr = Module._list_member_ptr = e.list_member_ptr, _list_delete_int = Module._list_delete_int = e.list_delete_int, _list_intersection = Module._list_intersection = e.list_intersection, _list_append_unique_ptr = Module._list_append_unique_ptr = e.list_append_unique_ptr, _list_append_unique_int = Module._list_append_unique_int = e.list_append_unique_int, _list_concat_unique_int = Module._list_concat_unique_int = e.list_concat_unique_int, _make_opclause = Module._make_opclause = e.make_opclause, _exprIsLengthCoercion = Module._exprIsLengthCoercion = e.exprIsLengthCoercion, _fix_opfuncids = Module._fix_opfuncids = e.fix_opfuncids, _outToken = Module._outToken = e.outToken, _outNode = Module._outNode = e.outNode, _appendStringInfoStringQuoted = Module._appendStringInfoStringQuoted = e.appendStringInfoStringQuoted, _EnableQueryId = Module._EnableQueryId = e.EnableQueryId, _nodeRead = Module._nodeRead = e.nodeRead, _pg_strtok = Module._pg_strtok = e.pg_strtok, _debackslash = Module._debackslash = e.debackslash, _exp2 = Module._exp2 = e.exp2, _find_base_rel = Module._find_base_rel = e.find_base_rel, _add_path = Module._add_path = e.add_path, _create_sort_path = Module._create_sort_path = e.create_sort_path, _set_baserel_size_estimates = Module._set_baserel_size_estimates = e.set_baserel_size_estimates, _get_func_support = Module._get_func_support = e.get_func_support, _clauselist_selectivity = Module._clauselist_selectivity = e.clauselist_selectivity, _get_tablespace_page_costs = Module._get_tablespace_page_costs = e.get_tablespace_page_costs, _cost_qual_eval = Module._cost_qual_eval = e.cost_qual_eval, _pull_varnos = Module._pull_varnos = e.pull_varnos, _estimate_num_groups = Module._estimate_num_groups = e.estimate_num_groups, _cost_sort = Module._cost_sort = e.cost_sort, _get_sortgrouplist_exprs = Module._get_sortgrouplist_exprs = e.get_sortgrouplist_exprs, _get_attavgwidth = Module._get_attavgwidth = e.get_attavgwidth, _make_restrictinfo = Module._make_restrictinfo = e.make_restrictinfo, _setup_eclass_member_iterator = Module._setup_eclass_member_iterator = e.setup_eclass_member_iterator, _eclass_member_iterator_next = Module._eclass_member_iterator_next = e.eclass_member_iterator_next, _remove_nulling_relids = Module._remove_nulling_relids = e.remove_nulling_relids, _get_mergejoin_opfamilies = Module._get_mergejoin_opfamilies = e.get_mergejoin_opfamilies, _generate_implied_equalities_for_column = Module._generate_implied_equalities_for_column = e.generate_implied_equalities_for_column, _eclass_useful_for_merging = Module._eclass_useful_for_merging = e.eclass_useful_for_merging, _join_clause_is_movable_to = Module._join_clause_is_movable_to = e.join_clause_is_movable_to, _get_plan_rowmark = Module._get_plan_rowmark = e.get_plan_rowmark, _is_pseudo_constant_for_index = Module._is_pseudo_constant_for_index = e.is_pseudo_constant_for_index, _update_mergeclause_eclasses = Module._update_mergeclause_eclasses = e.update_mergeclause_eclasses, _pull_vars_of_level = Module._pull_vars_of_level = e.pull_vars_of_level, _find_join_rel = Module._find_join_rel = e.find_join_rel, _make_canonical_pathkey = Module._make_canonical_pathkey = e.make_canonical_pathkey, _get_sortgroupref_clause_noerr = Module._get_sortgroupref_clause_noerr = e.get_sortgroupref_clause_noerr, _extract_actual_clauses = Module._extract_actual_clauses = e.extract_actual_clauses, _tlist_member = Module._tlist_member = e.tlist_member, _change_plan_targetlist = Module._change_plan_targetlist = e.change_plan_targetlist, _make_foreignscan = Module._make_foreignscan = e.make_foreignscan, _IncrementVarSublevelsUp = Module._IncrementVarSublevelsUp = e.IncrementVarSublevelsUp, _op_mergejoinable = Module._op_mergejoinable = e.op_mergejoinable, _find_nonnullable_rels = Module._find_nonnullable_rels = e.find_nonnullable_rels, _setup_simple_rel_arrays = Module._setup_simple_rel_arrays = e.setup_simple_rel_arrays, _standard_planner = Module._standard_planner = e.standard_planner, _get_relids_in_jointree = Module._get_relids_in_jointree = e.get_relids_in_jointree, _SS_process_sublinks = Module._SS_process_sublinks = e.SS_process_sublinks, _add_new_columns_to_pathtarget = Module._add_new_columns_to_pathtarget = e.add_new_columns_to_pathtarget, _get_agg_clause_costs = Module._get_agg_clause_costs = e.get_agg_clause_costs, _grouping_is_sortable = Module._grouping_is_sortable = e.grouping_is_sortable, _copy_pathtarget = Module._copy_pathtarget = e.copy_pathtarget, _create_projection_path = Module._create_projection_path = e.create_projection_path, _contain_nonstrict_functions = Module._contain_nonstrict_functions = e.contain_nonstrict_functions, _get_translated_update_targetlist = Module._get_translated_update_targetlist = e.get_translated_update_targetlist, _add_row_identity_var = Module._add_row_identity_var = e.add_row_identity_var, _get_rel_all_updated_cols = Module._get_rel_all_updated_cols = e.get_rel_all_updated_cols, _get_baserel_parampathinfo = Module._get_baserel_parampathinfo = e.get_baserel_parampathinfo, _create_foreignscan_path = Module._create_foreignscan_path = e.create_foreignscan_path, _create_foreign_join_path = Module._create_foreign_join_path = e.create_foreign_join_path, _create_foreign_upper_path = Module._create_foreign_upper_path = e.create_foreign_upper_path, _adjust_limit_rows_costs = Module._adjust_limit_rows_costs = e.adjust_limit_rows_costs, _add_to_flat_tlist = Module._add_to_flat_tlist = e.add_to_flat_tlist, _get_fn_expr_variadic = Module._get_fn_expr_variadic = e.get_fn_expr_variadic, _get_fn_expr_argtype = Module._get_fn_expr_argtype = e.get_fn_expr_argtype, _on_shmem_exit = Module._on_shmem_exit = e.on_shmem_exit, _pgl_shmdt = Module._pgl_shmdt = e.pgl_shmdt, _pgl_shmctl = Module._pgl_shmctl = e.pgl_shmctl, _pgl_shmat = Module._pgl_shmat = e.pgl_shmat, _mmap = Module._mmap = e.mmap, _pgl_shmget = Module._pgl_shmget = e.pgl_shmget, _pgl_munmap = Module._pgl_munmap = e.pgl_munmap, _SignalHandlerForConfigReload = Module._SignalHandlerForConfigReload = e.SignalHandlerForConfigReload, _SignalHandlerForShutdownRequest = Module._SignalHandlerForShutdownRequest = e.SignalHandlerForShutdownRequest, _procsignal_sigusr1_handler = Module._procsignal_sigusr1_handler = e.procsignal_sigusr1_handler, _ConditionalLockDatabaseObject = Module._ConditionalLockDatabaseObject = e.ConditionalLockDatabaseObject, _RegisterBackgroundWorker = Module._RegisterBackgroundWorker = e.RegisterBackgroundWorker, _WaitForBackgroundWorkerStartup = Module._WaitForBackgroundWorkerStartup = e.WaitForBackgroundWorkerStartup, _open = Module._open = e.open, _rename = Module._rename = e.rename, _GetConfigOption = Module._GetConfigOption = e.GetConfigOption, _puts = Module._puts = e.puts, _fopen = Module._fopen = e.fopen, _fclose = Module._fclose = e.fclose, _fputc = Module._fputc = e.fputc, _ftello = Module._ftello = e.ftello, _malloc = Module._malloc = e.malloc, _free = Module._free = e.free, _realloc = Module._realloc = e.realloc, _iswprint_l = Module._iswprint_l = e.iswprint_l, _iswalpha_l = Module._iswalpha_l = e.iswalpha_l, _iswdigit_l = Module._iswdigit_l = e.iswdigit_l, _isdigit_l = Module._isdigit_l = e.isdigit_l, _iswpunct_l = Module._iswpunct_l = e.iswpunct_l, _iswspace_l = Module._iswspace_l = e.iswspace_l, _iswlower_l = Module._iswlower_l = e.iswlower_l, _iswupper_l = Module._iswupper_l = e.iswupper_l, _pg_ascii_tolower = Module._pg_ascii_tolower = e.pg_ascii_tolower, _towlower_l = Module._towlower_l = e.towlower_l, _tolower_l = Module._tolower_l = e.tolower_l, _towupper_l = Module._towupper_l = e.towupper_l, _toupper_l = Module._toupper_l = e.toupper_l, _pg_reg_getinitialstate = Module._pg_reg_getinitialstate = e.pg_reg_getinitialstate, _pg_reg_getfinalstate = Module._pg_reg_getfinalstate = e.pg_reg_getfinalstate, _pg_reg_getnumoutarcs = Module._pg_reg_getnumoutarcs = e.pg_reg_getnumoutarcs, _pg_reg_getoutarcs = Module._pg_reg_getoutarcs = e.pg_reg_getoutarcs, _pg_reg_getnumcolors = Module._pg_reg_getnumcolors = e.pg_reg_getnumcolors, _pg_reg_colorisbegin = Module._pg_reg_colorisbegin = e.pg_reg_colorisbegin, _pg_reg_colorisend = Module._pg_reg_colorisend = e.pg_reg_colorisend, _pg_reg_getnumcharacters = Module._pg_reg_getnumcharacters = e.pg_reg_getnumcharacters, _pg_reg_getcharacters = Module._pg_reg_getcharacters = e.pg_reg_getcharacters, _dsa_pin = Module._dsa_pin = e.dsa_pin, _OutputPluginPrepareWrite = Module._OutputPluginPrepareWrite = e.OutputPluginPrepareWrite, _OutputPluginWrite = Module._OutputPluginWrite = e.OutputPluginWrite, _array_contains_nulls = Module._array_contains_nulls = e.array_contains_nulls, _CacheRegisterRelcacheCallback = Module._CacheRegisterRelcacheCallback = e.CacheRegisterRelcacheCallback, _hash_seq_term = Module._hash_seq_term = e.hash_seq_term, _FreeErrorData = Module._FreeErrorData = e.FreeErrorData, _RelidByRelfilenumber = Module._RelidByRelfilenumber = e.RelidByRelfilenumber, _SnapBuildRestoreSnapshot = Module._SnapBuildRestoreSnapshot = e.SnapBuildRestoreSnapshot, _WaitLatchOrSocket = Module._WaitLatchOrSocket = e.WaitLatchOrSocket, _BufFileCreateFileSet = Module._BufFileCreateFileSet = e.BufFileCreateFileSet, _BufFileOpenFileSet = Module._BufFileOpenFileSet = e.BufFileOpenFileSet, _BufFileTell = Module._BufFileTell = e.BufFileTell, _ConditionVariablePrepareToSleep = Module._ConditionVariablePrepareToSleep = e.ConditionVariablePrepareToSleep, _get_row_security_policies = Module._get_row_security_policies = e.get_row_security_policies, _extract_variadic_args = Module._extract_variadic_args = e.extract_variadic_args, _errhidestmt = Module._errhidestmt = e.errhidestmt, _errhidecontext = Module._errhidecontext = e.errhidecontext, _hash_estimate_size = Module._hash_estimate_size = e.hash_estimate_size, _ShmemInitHash = Module._ShmemInitHash = e.ShmemInitHash, _LockBufHdr = Module._LockBufHdr = e.LockBufHdr, _LWLockHeldByMeInMode = Module._LWLockHeldByMeInMode = e.LWLockHeldByMeInMode, _EvictUnpinnedBuffer = Module._EvictUnpinnedBuffer = e.EvictUnpinnedBuffer, _EvictAllUnpinnedBuffers = Module._EvictAllUnpinnedBuffers = e.EvictAllUnpinnedBuffers, _EvictRelUnpinnedBuffers = Module._EvictRelUnpinnedBuffers = e.EvictRelUnpinnedBuffers, _have_free_buffer = Module._have_free_buffer = e.have_free_buffer, _calloc = Module._calloc = e.calloc, _BufFileExportFileSet = Module._BufFileExportFileSet = e.BufFileExportFileSet, _BufFileRead = Module._BufFileRead = e.BufFileRead, _copy_file = Module._copy_file = e.copy_file, _fdatasync = Module._fdatasync = e.fdatasync, _truncate = Module._truncate = e.truncate, _dup = Module._dup = e.dup, _AcquireExternalFD = Module._AcquireExternalFD = e.AcquireExternalFD, _mkdir = Module._mkdir = e.mkdir, _pgl_popen = Module._pgl_popen = e.pgl_popen, _pgl_pclose = Module._pgl_pclose = e.pgl_pclose, _closedir = Module._closedir = e.closedir, _opendir = Module._opendir = e.opendir, _readdir = Module._readdir = e.readdir, _GetNamedDSMSegment = Module._GetNamedDSMSegment = e.GetNamedDSMSegment, _pgl_atexit = Module._pgl_atexit = e.pgl_atexit, _RequestAddinShmemSpace = Module._RequestAddinShmemSpace = e.RequestAddinShmemSpace, _GetRunningTransactionData = Module._GetRunningTransactionData = e.GetRunningTransactionData, _BackendXidGetPid = Module._BackendXidGetPid = e.BackendXidGetPid, _pg_numa_init = Module._pg_numa_init = e.pg_numa_init, _sysconf = Module._sysconf = e.sysconf, _pg_numa_query_pages = Module._pg_numa_query_pages = e.pg_numa_query_pages, _pg_get_shmem_pagesize = Module._pg_get_shmem_pagesize = e.pg_get_shmem_pagesize, _LockAcquire = Module._LockAcquire = e.LockAcquire, _LockRelease = Module._LockRelease = e.LockRelease, _pgl_poll = Module._pgl_poll = e.pgl_poll, _GetLockmodeName = Module._GetLockmodeName = e.GetLockmodeName, _LWLockRegisterTranche = Module._LWLockRegisterTranche = e.LWLockRegisterTranche, _GetNamedLWLockTranche = Module._GetNamedLWLockTranche = e.GetNamedLWLockTranche, _LWLockNewTrancheId = Module._LWLockNewTrancheId = e.LWLockNewTrancheId, _RequestNamedLWLockTranche = Module._RequestNamedLWLockTranche = e.RequestNamedLWLockTranche, _LWLockHeldByMe = Module._LWLockHeldByMe = e.LWLockHeldByMe, _ProcessStartupPacket = Module._ProcessStartupPacket = e.ProcessStartupPacket, _htons = e.htons, _htonl = e.htonl, _pgl_startPGlite = Module._pgl_startPGlite = e.pgl_startPGlite, _pgl_pq_flush = Module._pgl_pq_flush = e.pgl_pq_flush, _pgl_getMyProcPort = Module._pgl_getMyProcPort = e.pgl_getMyProcPort, _pgl_sendConnData = Module._pgl_sendConnData = e.pgl_sendConnData, _PostgresMainLongJmp = Module._PostgresMainLongJmp = e.PostgresMainLongJmp, _PostgresMainLoopOnce = Module._PostgresMainLoopOnce = e.PostgresMainLoopOnce, _PostgresSendReadyForQueryIfNecessary = Module._PostgresSendReadyForQueryIfNecessary = e.PostgresSendReadyForQueryIfNecessary, _GetCommandLogLevel = Module._GetCommandLogLevel = e.GetCommandLogLevel, _standard_ProcessUtility = Module._standard_ProcessUtility = e.standard_ProcessUtility, _lookup_ts_dictionary_cache = Module._lookup_ts_dictionary_cache = e.lookup_ts_dictionary_cache, _get_tsearch_config_filename = Module._get_tsearch_config_filename = e.get_tsearch_config_filename, _str_tolower = Module._str_tolower = e.str_tolower, _readstoplist = Module._readstoplist = e.readstoplist, _searchstoplist = Module._searchstoplist = e.searchstoplist, _tsearch_readline_begin = Module._tsearch_readline_begin = e.tsearch_readline_begin, _tsearch_readline = Module._tsearch_readline = e.tsearch_readline, _tsearch_readline_end = Module._tsearch_readline_end = e.tsearch_readline_end, _stringToQualifiedNameList = Module._stringToQualifiedNameList = e.stringToQualifiedNameList, _getTSCurrentConfig = Module._getTSCurrentConfig = e.getTSCurrentConfig, _to_tsvector_byid = Module._to_tsvector_byid = e.to_tsvector_byid, _t_isalnum_with_len = Module._t_isalnum_with_len = e.t_isalnum_with_len, _isalnum = Module._isalnum = e.isalnum, _t_isalnum_cstr = Module._t_isalnum_cstr = e.t_isalnum_cstr, _pg_mblen_unbounded = Module._pg_mblen_unbounded = e.pg_mblen_unbounded, _get_restriction_variable = Module._get_restriction_variable = e.get_restriction_variable, _pg_mblen_range = Module._pg_mblen_range = e.pg_mblen_range, _MemoryContextAllocHuge = Module._MemoryContextAllocHuge = e.MemoryContextAllocHuge, _fseek = Module._fseek = e.fseek, _WaitEventExtensionNew = Module._WaitEventExtensionNew = e.WaitEventExtensionNew, _regprocedurein = Module._regprocedurein = e.regprocedurein, _is_member_of_role = Module._is_member_of_role = e.is_member_of_role, _expand_array = Module._expand_array = e.expand_array, _exp = Module._exp = e.exp, _arraycontsel = Module._arraycontsel = e.arraycontsel, _arraycontjoinsel = Module._arraycontjoinsel = e.arraycontjoinsel, _initArrayResult = Module._initArrayResult = e.initArrayResult, _array_create_iterator = Module._array_create_iterator = e.array_create_iterator, _array_iterate = Module._array_iterate = e.array_iterate, _array_free_iterator = Module._array_free_iterator = e.array_free_iterator, _ArrayGetIntegerTypmods = Module._ArrayGetIntegerTypmods = e.ArrayGetIntegerTypmods, _boolin = Module._boolin = e.boolin, ___multi3 = Module.___multi3 = e.__multi3, _cash_cmp = Module._cash_cmp = e.cash_cmp, _int64_to_numeric = Module._int64_to_numeric = e.int64_to_numeric, _numeric_div = Module._numeric_div = e.numeric_div, _numeric_round = Module._numeric_round = e.numeric_round, _numeric_int8 = Module._numeric_int8 = e.numeric_int8, _numeric_mul = Module._numeric_mul = e.numeric_mul, _j2date = Module._j2date = e.j2date, _EncodeDateOnly = Module._EncodeDateOnly = e.EncodeDateOnly, _EncodeSpecialDate = Module._EncodeSpecialDate = e.EncodeSpecialDate, _date_eq = Module._date_eq = e.date_eq, _date_lt = Module._date_lt = e.date_lt, _date_le = Module._date_le = e.date_le, _date_gt = Module._date_gt = e.date_gt, _date_ge = Module._date_ge = e.date_ge, _date_cmp = Module._date_cmp = e.date_cmp, _date_mi = Module._date_mi = e.date_mi, _timestamp2tm = Module._timestamp2tm = e.timestamp2tm, _time2tm = Module._time2tm = e.time2tm, _EncodeTimeOnly = Module._EncodeTimeOnly = e.EncodeTimeOnly, _time_eq = Module._time_eq = e.time_eq, _time_lt = Module._time_lt = e.time_lt, _time_le = Module._time_le = e.time_le, _time_gt = Module._time_gt = e.time_gt, _time_ge = Module._time_ge = e.time_ge, _time_cmp = Module._time_cmp = e.time_cmp, _time_mi_time = Module._time_mi_time = e.time_mi_time, _timetz2tm = Module._timetz2tm = e.timetz2tm, _timetz_cmp = Module._timetz_cmp = e.timetz_cmp, _pg_tolower = Module._pg_tolower = e.pg_tolower, _EncodeDateTime = Module._EncodeDateTime = e.EncodeDateTime, _TransferExpandedObject = Module._TransferExpandedObject = e.TransferExpandedObject, _forkname_to_number = Module._forkname_to_number = e.forkname_to_number, _numeric_lt = Module._numeric_lt = e.numeric_lt, _numeric_abs = Module._numeric_abs = e.numeric_abs, _numeric_add = Module._numeric_add = e.numeric_add, _numeric_ge = Module._numeric_ge = e.numeric_ge, _err_generic_string = Module._err_generic_string = e.err_generic_string, _domain_check = Module._domain_check = e.domain_check, _enum_lt = Module._enum_lt = e.enum_lt, _enum_le = Module._enum_le = e.enum_le, _enum_ge = Module._enum_ge = e.enum_ge, _enum_gt = Module._enum_gt = e.enum_gt, _enum_cmp = Module._enum_cmp = e.enum_cmp, _make_expanded_record_from_typeid = Module._make_expanded_record_from_typeid = e.make_expanded_record_from_typeid, _make_expanded_record_from_tupdesc = Module._make_expanded_record_from_tupdesc = e.make_expanded_record_from_tupdesc, _make_expanded_record_from_exprecord = Module._make_expanded_record_from_exprecord = e.make_expanded_record_from_exprecord, _expanded_record_set_tuple = Module._expanded_record_set_tuple = e.expanded_record_set_tuple, _expanded_record_get_tuple = Module._expanded_record_get_tuple = e.expanded_record_get_tuple, _deconstruct_expanded_record = Module._deconstruct_expanded_record = e.deconstruct_expanded_record, _expanded_record_lookup_field = Module._expanded_record_lookup_field = e.expanded_record_lookup_field, _expanded_record_set_field_internal = Module._expanded_record_set_field_internal = e.expanded_record_set_field_internal, _expanded_record_set_fields = Module._expanded_record_set_fields = e.expanded_record_set_fields, _float4in_internal = Module._float4in_internal = e.float4in_internal, _strtof = Module._strtof = e.strtof, _float_to_shortest_decimal_buf = Module._float_to_shortest_decimal_buf = e.float_to_shortest_decimal_buf, _float8in = Module._float8in = e.float8in, _float8in_internal = Module._float8in_internal = e.float8in_internal, _float8out = Module._float8out = e.float8out, _float8out_internal = Module._float8out_internal = e.float8out_internal, _float8pl = Module._float8pl = e.float8pl, _float4_cmp_internal = Module._float4_cmp_internal = e.float4_cmp_internal, _btfloat4cmp = Module._btfloat4cmp = e.btfloat4cmp, _btfloat8cmp = Module._btfloat8cmp = e.btfloat8cmp, _dtoi4 = Module._dtoi4 = e.dtoi4, _dtoi2 = Module._dtoi2 = e.dtoi2, _cbrt = Module._cbrt = e.cbrt, _dexp = Module._dexp = e.dexp, _log10 = Module._log10 = e.log10, _dacos = Module._dacos = e.dacos, _acos = Module._acos = e.acos, _dasin = Module._dasin = e.dasin, _asin = Module._asin = e.asin, _datan = Module._datan = e.datan, _atan = Module._atan = e.atan, _datan2 = Module._datan2 = e.datan2, _atan2 = Module._atan2 = e.atan2, _dcos = Module._dcos = e.dcos, _cos = Module._cos = e.cos, _dcot = Module._dcot = e.dcot, _tan = Module._tan = e.tan, _dsin = Module._dsin = e.dsin, _sin = Module._sin = e.sin, _dtan = Module._dtan = e.dtan, _fmod = Module._fmod = e.fmod, _degrees = Module._degrees = e.degrees, _dpi = Module._dpi = e.dpi, _radians = Module._radians = e.radians, _sinh = Module._sinh = e.sinh, _cosh = Module._cosh = e.cosh, _tanh = Module._tanh = e.tanh, _asinh = Module._asinh = e.asinh, _acosh = Module._acosh = e.acosh, _atanh = Module._atanh = e.atanh, _float8_accum = Module._float8_accum = e.float8_accum, _float8_stddev_pop = Module._float8_stddev_pop = e.float8_stddev_pop, _float8_stddev_samp = Module._float8_stddev_samp = e.float8_stddev_samp, _asc_tolower = Module._asc_tolower = e.asc_tolower, _pg_strfold = Module._pg_strfold = e.pg_strfold, _numeric_power = Module._numeric_power = e.numeric_power, _dtoi8 = Module._dtoi8 = e.dtoi8, _int8out = Module._int8out = e.int8out, _fseeko = Module._fseeko = e.fseeko, _int4in = Module._int4in = e.int4in, _int4_bool = Module._int4_bool = e.int4_bool, _int8pl = Module._int8pl = e.int8pl, _int84 = Module._int84 = e.int84, _int82 = Module._int82 = e.int82, _json_in = Module._json_in = e.json_in, _EncodeSpecialTimestamp = Module._EncodeSpecialTimestamp = e.EncodeSpecialTimestamp, _pushJsonbValue = Module._pushJsonbValue = e.pushJsonbValue, _numeric_int2 = Module._numeric_int2 = e.numeric_int2, _numeric_int4 = Module._numeric_int4 = e.numeric_int4, _numeric_float4 = Module._numeric_float4 = e.numeric_float4, _numeric_normalize = Module._numeric_normalize = e.numeric_normalize, _numeric_cmp = Module._numeric_cmp = e.numeric_cmp, _numeric_eq = Module._numeric_eq = e.numeric_eq, _hash_numeric = Module._hash_numeric = e.hash_numeric, _hash_numeric_extended = Module._hash_numeric_extended = e.hash_numeric_extended, _int2_numeric = Module._int2_numeric = e.int2_numeric, _int4_numeric = Module._int4_numeric = e.int4_numeric, _int8_numeric = Module._int8_numeric = e.int8_numeric, _float4_numeric = Module._float4_numeric = e.float4_numeric, _float8_numeric = Module._float8_numeric = e.float8_numeric, _numeric_uminus = Module._numeric_uminus = e.numeric_uminus, _numeric_is_nan = Module._numeric_is_nan = e.numeric_is_nan, _numeric_ceil = Module._numeric_ceil = e.numeric_ceil, _numeric_floor = Module._numeric_floor = e.numeric_floor, _timestamp_cmp = Module._timestamp_cmp = e.timestamp_cmp, _macaddr_cmp = Module._macaddr_cmp = e.macaddr_cmp, _macaddr_lt = Module._macaddr_lt = e.macaddr_lt, _macaddr_le = Module._macaddr_le = e.macaddr_le, _macaddr_eq = Module._macaddr_eq = e.macaddr_eq, _macaddr_ge = Module._macaddr_ge = e.macaddr_ge, _macaddr_gt = Module._macaddr_gt = e.macaddr_gt, _macaddr8_cmp = Module._macaddr8_cmp = e.macaddr8_cmp, _macaddr8_lt = Module._macaddr8_lt = e.macaddr8_lt, _macaddr8_le = Module._macaddr8_le = e.macaddr8_le, _macaddr8_eq = Module._macaddr8_eq = e.macaddr8_eq, _macaddr8_ge = Module._macaddr8_ge = e.macaddr8_ge, _macaddr8_gt = Module._macaddr8_gt = e.macaddr8_gt, _current_query = Module._current_query = e.current_query, _generate_collation_name = Module._generate_collation_name = e.generate_collation_name, _get_fn_expr_arg_stable = Module._get_fn_expr_arg_stable = e.get_fn_expr_arg_stable, _unpack_sql_state = Module._unpack_sql_state = e.unpack_sql_state, _get_fn_expr_rettype = Module._get_fn_expr_rettype = e.get_fn_expr_rettype, _btnamecmp = Module._btnamecmp = e.btnamecmp, _inet_in = Module._inet_in = e.inet_in, _network_cmp = Module._network_cmp = e.network_cmp, _convert_network_to_scalar = Module._convert_network_to_scalar = e.convert_network_to_scalar, _numeric_sign = Module._numeric_sign = e.numeric_sign, _numeric_gt = Module._numeric_gt = e.numeric_gt, _numeric_le = Module._numeric_le = e.numeric_le, _numeric_mod = Module._numeric_mod = e.numeric_mod, _numeric_sqrt = Module._numeric_sqrt = e.numeric_sqrt, ___divti3 = Module.___divti3 = e.__divti3, _numeric_exp = Module._numeric_exp = e.numeric_exp, _numeric_ln = Module._numeric_ln = e.numeric_ln, _numeric_log = Module._numeric_log = e.numeric_log, _numeric_float8_no_overflow = Module._numeric_float8_no_overflow = e.numeric_float8_no_overflow, _oidout = Module._oidout = e.oidout, _btrim1 = Module._btrim1 = e.btrim1, _ltrim1 = Module._ltrim1 = e.ltrim1, _rtrim1 = Module._rtrim1 = e.rtrim1, _tuplesort_skiptuples = Module._tuplesort_skiptuples = e.tuplesort_skiptuples, _interval_mi = Module._interval_mi = e.interval_mi, _setlocale = Module._setlocale = e.setlocale, _newlocale = Module._newlocale = e.newlocale, _strftime_l = Module._strftime_l = e.strftime_l, _freelocale = Module._freelocale = e.freelocale, _pg_utf_mblen_private = Module._pg_utf_mblen_private = e.pg_utf_mblen_private, _uselocale = Module._uselocale = e.uselocale, _strcoll_l = Module._strcoll_l = e.strcoll_l, _strxfrm_l = Module._strxfrm_l = e.strxfrm_l, _drandom = Module._drandom = e.drandom, _quote_ident = Module._quote_ident = e.quote_ident, _textregexeq = Module._textregexeq = e.textregexeq, _text_substr = Module._text_substr = e.text_substr, _pg_wchar2mb_with_len = Module._pg_wchar2mb_with_len = e.pg_wchar2mb_with_len, _regexp_split_to_array = Module._regexp_split_to_array = e.regexp_split_to_array, _regclassin = Module._regclassin = e.regclassin, _regtypeout = Module._regtypeout = e.regtypeout, _regconfigout = Module._regconfigout = e.regconfigout, _pg_get_indexdef_columns_extended = Module._pg_get_indexdef_columns_extended = e.pg_get_indexdef_columns_extended, _pg_get_querydef = Module._pg_get_querydef = e.pg_get_querydef, _strcspn = Module._strcspn = e.strcspn, _generic_restriction_selectivity = Module._generic_restriction_selectivity = e.generic_restriction_selectivity, _genericcostestimate = Module._genericcostestimate = e.genericcostestimate, _tidin = Module._tidin = e.tidin, _tidout = Module._tidout = e.tidout, _timestamp_in = Module._timestamp_in = e.timestamp_in, _timestamp_eq = Module._timestamp_eq = e.timestamp_eq, _timestamp_lt = Module._timestamp_lt = e.timestamp_lt, _timestamp_gt = Module._timestamp_gt = e.timestamp_gt, _timestamp_le = Module._timestamp_le = e.timestamp_le, _timestamp_ge = Module._timestamp_ge = e.timestamp_ge, _interval_eq = Module._interval_eq = e.interval_eq, _interval_lt = Module._interval_lt = e.interval_lt, _interval_gt = Module._interval_gt = e.interval_gt, _interval_le = Module._interval_le = e.interval_le, _interval_ge = Module._interval_ge = e.interval_ge, _interval_cmp = Module._interval_cmp = e.interval_cmp, _timestamp_mi = Module._timestamp_mi = e.timestamp_mi, _interval_um = Module._interval_um = e.interval_um, _tsquery_requires_match = Module._tsquery_requires_match = e.tsquery_requires_match, _TS_execute_ternary = Module._TS_execute_ternary = e.TS_execute_ternary, _has_fn_opclass_options = Module._has_fn_opclass_options = e.has_fn_opclass_options, _uuid_in = Module._uuid_in = e.uuid_in, _uuid_out = Module._uuid_out = e.uuid_out, _uuid_cmp = Module._uuid_cmp = e.uuid_cmp, _gen_random_uuid = Module._gen_random_uuid = e.gen_random_uuid, _varbit_in = Module._varbit_in = e.varbit_in, _biteq = Module._biteq = e.biteq, _bitlt = Module._bitlt = e.bitlt, _bitle = Module._bitle = e.bitle, _bitgt = Module._bitgt = e.bitgt, _bitge = Module._bitge = e.bitge, _bitcmp = Module._bitcmp = e.bitcmp, _bitlength = Module._bitlength = e.bitlength, _bpchareq = Module._bpchareq = e.bpchareq, _bpcharlt = Module._bpcharlt = e.bpcharlt, _bpcharle = Module._bpcharle = e.bpcharle, _bpchargt = Module._bpchargt = e.bpchargt, _bpcharge = Module._bpcharge = e.bpcharge, _bpcharcmp = Module._bpcharcmp = e.bpcharcmp, _pg_detoast_datum_slice = Module._pg_detoast_datum_slice = e.pg_detoast_datum_slice, _text_substr_no_len = Module._text_substr_no_len = e.text_substr_no_len, _texteq = Module._texteq = e.texteq, _text_lt = Module._text_lt = e.text_lt, _text_le = Module._text_le = e.text_le, _text_gt = Module._text_gt = e.text_gt, _text_ge = Module._text_ge = e.text_ge, _bttextcmp = Module._bttextcmp = e.bttextcmp, _byteaeq = Module._byteaeq = e.byteaeq, _bytealt = Module._bytealt = e.bytealt, _byteale = Module._byteale = e.byteale, _byteagt = Module._byteagt = e.byteagt, _byteage = Module._byteage = e.byteage, _byteacmp = Module._byteacmp = e.byteacmp, _to_hex32 = Module._to_hex32 = e.to_hex32, _text_left = Module._text_left = e.text_left, _text_right = Module._text_right = e.text_right, _text_reverse = Module._text_reverse = e.text_reverse, _varstr_levenshtein = Module._varstr_levenshtein = e.varstr_levenshtein, _wcslen = Module._wcslen = e.wcslen, _pg_xml_init = Module._pg_xml_init = e.pg_xml_init, _xml_ereport = Module._xml_ereport = e.xml_ereport, _pg_xml_done = Module._pg_xml_done = e.pg_xml_done, _pg_do_encoding_conversion = Module._pg_do_encoding_conversion = e.pg_do_encoding_conversion, _CreateCacheMemoryContext = Module._CreateCacheMemoryContext = e.CreateCacheMemoryContext, _cfunc_resolve_polymorphic_argtypes = Module._cfunc_resolve_polymorphic_argtypes = e.cfunc_resolve_polymorphic_argtypes, _get_typsubscript = Module._get_typsubscript = e.get_typsubscript, _CachedPlanAllowsSimpleValidityCheck = Module._CachedPlanAllowsSimpleValidityCheck = e.CachedPlanAllowsSimpleValidityCheck, _CachedPlanIsSimplyValid = Module._CachedPlanIsSimplyValid = e.CachedPlanIsSimplyValid, _GetCachedExpression = Module._GetCachedExpression = e.GetCachedExpression, _FreeCachedExpression = Module._FreeCachedExpression = e.FreeCachedExpression, _ReleaseAllPlanCacheRefsInOwner = Module._ReleaseAllPlanCacheRefsInOwner = e.ReleaseAllPlanCacheRefsInOwner, _SearchSysCache = Module._SearchSysCache = e.SearchSysCache, _lookup_rowtype_tupdesc_noerror = Module._lookup_rowtype_tupdesc_noerror = e.lookup_rowtype_tupdesc_noerror, _abort = Module._abort = e.abort, _in_error_recursion_trouble = Module._in_error_recursion_trouble = e.in_error_recursion_trouble, _pg_vfprintf = Module._pg_vfprintf = e.pg_vfprintf, _pgl_longjmp = Module._pgl_longjmp = e.pgl_longjmp, _openlog = Module._openlog = e.openlog, _syslog = Module._syslog = e.syslog, _GetErrorContextStack = Module._GetErrorContextStack = e.GetErrorContextStack, _closelog = Module._closelog = e.closelog, _dlsym = Module._dlsym = e.dlsym, _dlopen = Module._dlopen = e.dlopen, _dlerror = Module._dlerror = e.dlerror, _dlclose = Module._dlclose = e.dlclose, _find_rendezvous_variable = Module._find_rendezvous_variable = e.find_rendezvous_variable, _CallerFInfoFunctionCall1 = Module._CallerFInfoFunctionCall1 = e.CallerFInfoFunctionCall1, _CallerFInfoFunctionCall2 = Module._CallerFInfoFunctionCall2 = e.CallerFInfoFunctionCall2, _FunctionCall0Coll = Module._FunctionCall0Coll = e.FunctionCall0Coll, _RelationNameGetTupleDesc = Module._RelationNameGetTupleDesc = e.RelationNameGetTupleDesc, _memcpy = Module._memcpy = e.memcpy, _hash_freeze = Module._hash_freeze = e.hash_freeze, _chdir = Module._chdir = e.chdir, _pg_bindtextdomain = Module._pg_bindtextdomain = e.pg_bindtextdomain, _pg_mblen = Module._pg_mblen = e.pg_mblen, _check_encoding_conversion_args = Module._check_encoding_conversion_args = e.check_encoding_conversion_args, _DefineCustomBoolVariable = Module._DefineCustomBoolVariable = e.DefineCustomBoolVariable, _DefineCustomIntVariable = Module._DefineCustomIntVariable = e.DefineCustomIntVariable, _DefineCustomRealVariable = Module._DefineCustomRealVariable = e.DefineCustomRealVariable, _DefineCustomStringVariable = Module._DefineCustomStringVariable = e.DefineCustomStringVariable, _DefineCustomEnumVariable = Module._DefineCustomEnumVariable = e.DefineCustomEnumVariable, _MarkGUCPrefixReserved = Module._MarkGUCPrefixReserved = e.MarkGUCPrefixReserved, _sampler_random_init_state = Module._sampler_random_init_state = e.sampler_random_init_state, _dsa_trim = Module._dsa_trim = e.dsa_trim, _pchomp = Module._pchomp = e.pchomp, _PinPortal = Module._PinPortal = e.PinPortal, _UnpinPortal = Module._UnpinPortal = e.UnpinPortal, ___lshrti3 = Module.___lshrti3 = e.__lshrti3, _realpath = Module._realpath = e.realpath, _float_to_shortest_decimal_bufn = Module._float_to_shortest_decimal_bufn = e.float_to_shortest_decimal_bufn, _IsValidJsonNumber = Module._IsValidJsonNumber = e.IsValidJsonNumber, _pg_prng_uint64 = Module._pg_prng_uint64 = e.pg_prng_uint64, _makeStringInfoExt = Module._makeStringInfoExt = e.makeStringInfoExt, _initStringInfoExt = Module._initStringInfoExt = e.initStringInfoExt, _pgl_getpwuid = Module._pgl_getpwuid = e.pgl_getpwuid, _getcwd = Module._getcwd = e.getcwd, _pthread_mutex_lock = Module._pthread_mutex_lock = e.pthread_mutex_lock, _localeconv = Module._localeconv = e.localeconv, _pthread_mutex_unlock = Module._pthread_mutex_unlock = e.pthread_mutex_unlock, _nanosleep = Module._nanosleep = e.nanosleep, _sigaction = Module._sigaction = e.sigaction, _strchrnul = Module._strchrnul = e.strchrnul, _snprintf = Module._snprintf = e.snprintf, _strerror_r = Module._strerror_r = e.strerror_r, _clear_setitimer = Module._clear_setitimer = e.clear_setitimer, _pgl_setPGliteActive = Module._pgl_setPGliteActive = e.pgl_setPGliteActive, _pgl_siglongjmp = Module._pgl_siglongjmp = e.pgl_siglongjmp, _pgl_set_system_fn = Module._pgl_set_system_fn = e.pgl_set_system_fn, _pgl_set_popen_fn = Module._pgl_set_popen_fn = e.pgl_set_popen_fn, _pgl_set_pclose_fn = Module._pgl_set_pclose_fn = e.pgl_set_pclose_fn, _pgl_run_atexit_funcs = Module._pgl_run_atexit_funcs = e.pgl_run_atexit_funcs, _pgl_freopen = Module._pgl_freopen = e.pgl_freopen, _fiprintf = Module._fiprintf = e.fiprintf, _pgl_set_rw_cbs = Module._pgl_set_rw_cbs = e.pgl_set_rw_cbs, _vfprintf = Module._vfprintf = e.vfprintf, _pthread_key_create = Module._pthread_key_create = e.pthread_key_create, _pthread_getspecific = Module._pthread_getspecific = e.pthread_getspecific, _pthread_key_delete = Module._pthread_key_delete = e.pthread_key_delete, _pthread_setspecific = Module._pthread_setspecific = e.pthread_setspecific, _toupper = Module._toupper = e.toupper, _iconv_open = Module._iconv_open = e.iconv_open, _iconv_close = Module._iconv_close = e.iconv_close, _iconv = Module._iconv = e.iconv, _pthread_mutex_init = Module._pthread_mutex_init = e.pthread_mutex_init, _pthread_mutex_destroy = Module._pthread_mutex_destroy = e.pthread_mutex_destroy, _pthread_cond_init = Module._pthread_cond_init = e.pthread_cond_init, _pthread_cond_destroy = Module._pthread_cond_destroy = e.pthread_cond_destroy, _pthread_self = Module._pthread_self = e.pthread_self, _pthread_cond_wait = Module._pthread_cond_wait = e.pthread_cond_wait, _pthread_cond_signal = Module._pthread_cond_signal = e.pthread_cond_signal, _pthread_once = Module._pthread_once = e.pthread_once, ___cxa_atexit = Module.___cxa_atexit = e.__cxa_atexit, _fputs = Module._fputs = e.fputs, _vsnprintf = Module._vsnprintf = e.vsnprintf, ___small_fprintf = Module.___small_fprintf = e.__small_fprintf, _zcalloc = Module._zcalloc = e.zcalloc, _zcfree = Module._zcfree = e.zcfree, ___dynamic_cast = Module.___dynamic_cast = e.__dynamic_cast, ___cxa_pure_virtual = Module.___cxa_pure_virtual = e.__cxa_pure_virtual, _modf = Module._modf = e.modf, _localtime_r = Module._localtime_r = e.localtime_r, _strncat = Module._strncat = e.strncat, _munmap = Module._munmap = e.munmap, ___ctype_get_mb_cur_max = Module.___ctype_get_mb_cur_max = e.__ctype_get_mb_cur_max, ___ctype_tolower_loc = Module.___ctype_tolower_loc = e.__ctype_tolower_loc, ___ctype_toupper_loc = Module.___ctype_toupper_loc = e.__ctype_toupper_loc, _fdopen = Module._fdopen = e.fdopen, _sqrt = Module._sqrt = e.sqrt, _acosl = Module._acosl = e.acosl, _aligned_alloc = Module._aligned_alloc = e.aligned_alloc, _atan2l = Module._atan2l = e.atan2l, ___funcs_on_exit = e.__funcs_on_exit, _atexit = Module._atexit = e.atexit, ___cxa_finalize = Module.___cxa_finalize = e.__cxa_finalize, _btowc = Module._btowc = e.btowc, _clock = Module._clock = e.clock, _scalbn = Module._scalbn = e.scalbn, _cosl = Module._cosl = e.cosl, _dladdr = Module._dladdr = e.dladdr, ___dl_seterr = e.__dl_seterr, _duplocale = Module._duplocale = e.duplocale, __emscripten_find_dylib = e._emscripten_find_dylib, _memmove = Module._memmove = e.memmove, _memset = Module._memset = e.memset, _fchmod = Module._fchmod = e.fchmod, _fchmodat = Module._fchmodat = e.fchmodat, _fchown = Module._fchown = e.fchown, _fcntl = Module._fcntl = e.fcntl, _fdopendir = Module._fdopendir = e.fdopendir, _fmax = Module._fmax = e.fmax, _fmin = Module._fmin = e.fmin, _fputwc = Module._fputwc = e.fputwc, _frexp = Module._frexp = e.frexp, _ftell = Module._ftell = e.ftell, _getentropy = Module._getentropy = e.getentropy, _geteuid = Module._geteuid = e.geteuid, _getgid = Module._getgid = e.getgid, _mbtowc = Module._mbtowc = e.mbtowc, _getuid = Module._getuid = e.getuid, _getwc = Module._getwc = e.getwc, _gmtime = Module._gmtime = e.gmtime, _hypot = Module._hypot = e.hypot, _mbrtowc = Module._mbrtowc = e.mbrtowc, _ioctl = Module._ioctl = e.ioctl, _isalpha = Module._isalpha = e.isalpha, _isgraph = Module._isgraph = e.isgraph, _isspace = Module._isspace = e.isspace, _iswblank_l = Module._iswblank_l = e.iswblank_l, _iswcntrl_l = Module._iswcntrl_l = e.iswcntrl_l, _iswxdigit_l = Module._iswxdigit_l = e.iswxdigit_l, _isxdigit_l = Module._isxdigit_l = e.isxdigit_l, _pthread_cond_broadcast = Module._pthread_cond_broadcast = e.pthread_cond_broadcast, _pthread_atfork = Module._pthread_atfork = e.pthread_atfork, _pthread_mutex_trylock = Module._pthread_mutex_trylock = e.pthread_mutex_trylock, _pthread_create = Module._pthread_create = e.pthread_create, _pthread_join = Module._pthread_join = e.pthread_join, _pthread_cond_timedwait = Module._pthread_cond_timedwait = e.pthread_cond_timedwait, _pthread_detach = Module._pthread_detach = e.pthread_detach, _link = Module._link = e.link, _llround = Module._llround = e.llround, _localtime = Module._localtime = e.localtime, _log2 = Module._log2 = e.log2, _logb = Module._logb = e.logb, _lround = Module._lround = e.lround, _mbrlen = Module._mbrlen = e.mbrlen, _mbsnrtowcs = Module._mbsnrtowcs = e.mbsnrtowcs, _mbsrtowcs = Module._mbsrtowcs = e.mbsrtowcs, _memmem = Module._memmem = e.memmem, _memrchr = Module._memrchr = e.memrchr, _emscripten_builtin_memalign = e.emscripten_builtin_memalign, _socket = Module._socket = e.socket, _nextafter = Module._nextafter = e.nextafter, _nextafterf = Module._nextafterf = e.nextafterf, _ntohs = e.ntohs, _openat = Module._openat = e.openat, _pathconf = Module._pathconf = e.pathconf, _perror = Module._perror = e.perror, _iprintf = Module._iprintf = e.iprintf, ___small_printf = Module.___small_printf = e.__small_printf, _pthread_mutexattr_getprotocol = Module._pthread_mutexattr_getprotocol = e.pthread_mutexattr_getprotocol, _pthread_mutexattr_getpshared = Module._pthread_mutexattr_getpshared = e.pthread_mutexattr_getpshared, _pthread_mutexattr_getrobust = Module._pthread_mutexattr_getrobust = e.pthread_mutexattr_getrobust, _pthread_mutexattr_gettype = Module._pthread_mutexattr_gettype = e.pthread_mutexattr_gettype, _pthread_mutexattr_destroy = Module._pthread_mutexattr_destroy = e.pthread_mutexattr_destroy, _pthread_mutexattr_init = Module._pthread_mutexattr_init = e.pthread_mutexattr_init, _pthread_mutexattr_setprotocol = Module._pthread_mutexattr_setprotocol = e.pthread_mutexattr_setprotocol, _pthread_mutexattr_setpshared = Module._pthread_mutexattr_setpshared = e.pthread_mutexattr_setpshared, _pthread_mutexattr_settype = Module._pthread_mutexattr_settype = e.pthread_mutexattr_settype, _putchar = Module._putchar = e.putchar, _qsort = Module._qsort = e.qsort, _srand = Module._srand = e.srand, _rand = Module._rand = e.rand, _remainder = Module._remainder = e.remainder, _remove = Module._remove = e.remove, _remquo = Module._remquo = e.remquo, _round = Module._round = e.round, _roundf = Module._roundf = e.roundf, __emscripten_timeout = e._emscripten_timeout, _sinl = Module._sinl = e.sinl, _siprintf = Module._siprintf = e.siprintf, _sqrtl = Module._sqrtl = e.sqrtl, _vsscanf = Module._vsscanf = e.vsscanf, _statvfs = Module._statvfs = e.statvfs, _strcasecmp = Module._strcasecmp = e.strcasecmp, _strerror = Module._strerror = e.strerror, _strftime = Module._strftime = e.strftime, _strncasecmp = Module._strncasecmp = e.strncasecmp, ___floatsitf = Module.___floatsitf = e.__floatsitf, ___multf3 = Module.___multf3 = e.__multf3, ___addtf3 = Module.___addtf3 = e.__addtf3, ___extenddftf2 = Module.___extenddftf2 = e.__extenddftf2, ___getf2 = Module.___getf2 = e.__getf2, ___subtf3 = Module.___subtf3 = e.__subtf3, ___divtf3 = Module.___divtf3 = e.__divtf3, ___eqtf2 = Module.___eqtf2 = e.__eqtf2, ___letf2 = Module.___letf2 = e.__letf2, ___trunctfdf2 = Module.___trunctfdf2 = e.__trunctfdf2, _strtold = Module._strtold = e.strtold, _strtof_l = Module._strtof_l = e.strtof_l, _strtod_l = Module._strtod_l = e.strtod_l, _strtold_l = Module._strtold_l = e.strtold_l, _strtok = Module._strtok = e.strtok, _strtoull_l = Module._strtoull_l = e.strtoull_l, _strtoll_l = Module._strtoll_l = e.strtoll_l, _swprintf = Module._swprintf = e.swprintf, _connect = Module._connect = e.connect, _trunc = Module._trunc = e.trunc, _ungetc = Module._ungetc = e.ungetc, _ungetwc = Module._ungetwc = e.ungetwc, _unlinkat = Module._unlinkat = e.unlinkat, _usleep = Module._usleep = e.usleep, _utimensat = Module._utimensat = e.utimensat, _vasprintf = Module._vasprintf = e.vasprintf, _wcrtomb = Module._wcrtomb = e.wcrtomb, _wcscoll_l = Module._wcscoll_l = e.wcscoll_l, _wcsnrtombs = Module._wcsnrtombs = e.wcsnrtombs, _wcstof = Module._wcstof = e.wcstof, _wcstod = Module._wcstod = e.wcstod, _wcstold = Module._wcstold = e.wcstold, _wcstoull = Module._wcstoull = e.wcstoull, _wcstoll = Module._wcstoll = e.wcstoll, _wcstoul = Module._wcstoul = e.wcstoul, _wcstol = Module._wcstol = e.wcstol, _wcsxfrm_l = Module._wcsxfrm_l = e.wcsxfrm_l, _wctob = Module._wctob = e.wctob, _wmemchr = Module._wmemchr = e.wmemchr, _wmemcmp = Module._wmemcmp = e.wmemcmp, _emscripten_get_sbrk_ptr = e.emscripten_get_sbrk_ptr, ___ashlti3 = Module.___ashlti3 = e.__ashlti3, ___lttf2 = Module.___lttf2 = e.__lttf2, _setThrew = e.setThrew, __emscripten_tempret_set = e._emscripten_tempret_set, __emscripten_tempret_get = e._emscripten_tempret_get, ___fixtfsi = Module.___fixtfsi = e.__fixtfsi, __emscripten_stack_restore = e._emscripten_stack_restore, __emscripten_stack_alloc = e._emscripten_stack_alloc, _emscripten_stack_get_current = e.emscripten_stack_get_current, ___cxa_decrement_exception_refcount = Module.___cxa_decrement_exception_refcount = e.__cxa_decrement_exception_refcount, ___cxa_increment_exception_refcount = Module.___cxa_increment_exception_refcount = e.__cxa_increment_exception_refcount, ___cxa_bad_cast = Module.___cxa_bad_cast = e.__cxa_bad_cast, ___cxa_bad_typeid = Module.___cxa_bad_typeid = e.__cxa_bad_typeid, ___cxa_allocate_exception = Module.___cxa_allocate_exception = e.__cxa_allocate_exception, ___cxa_free_exception = Module.___cxa_free_exception = e.__cxa_free_exception, ___cxa_init_primary_exception = Module.___cxa_init_primary_exception = e.__cxa_init_primary_exception, ___cxa_get_exception_ptr = Module.___cxa_get_exception_ptr = e.__cxa_get_exception_ptr, ___stack_pointer = Module.___stack_pointer = e.__stack_pointer, ___table_base = Module.___table_base = e.__table_base.value, _LocalBufferBlockPointers = Module._LocalBufferBlockPointers = e.LocalBufferBlockPointers.value, _BufferBlocks = Module._BufferBlocks = e.BufferBlocks.value, _wal_level = Module._wal_level = e.wal_level.value, _CurrentMemoryContext = Module._CurrentMemoryContext = e.CurrentMemoryContext.value, ___memory_base = Module.___memory_base = e.__memory_base.value, _SnapshotAnyData = Module._SnapshotAnyData = e.SnapshotAnyData.value, _debug_query_string = Module._debug_query_string = e.debug_query_string.value, _maintenance_work_mem = Module._maintenance_work_mem = e.maintenance_work_mem.value, __indirect_function_table = wasmTable = e.__indirect_function_table, _CritSectionCount = Module._CritSectionCount = e.CritSectionCount.value, _InterruptPending = Module._InterruptPending = e.InterruptPending.value, _ParallelWorkerNumber = Module._ParallelWorkerNumber = e.ParallelWorkerNumber.value, _pg_number_of_ones = Module._pg_number_of_ones = e.pg_number_of_ones.value, _TopMemoryContext = Module._TopMemoryContext = e.TopMemoryContext.value, _IsUnderPostmaster = Module._IsUnderPostmaster = e.IsUnderPostmaster.value, _MainLWLockArray = Module._MainLWLockArray = e.MainLWLockArray.value, _CurrentResourceOwner = Module._CurrentResourceOwner = e.CurrentResourceOwner.value, _MyBackendType = Module._MyBackendType = e.MyBackendType.value, _work_mem = Module._work_mem = e.work_mem.value, _pg_global_prng_state = Module._pg_global_prng_state = e.pg_global_prng_state.value, _NBuffers = Module._NBuffers = e.NBuffers.value, _XactIsoLevel = Module._XactIsoLevel = e.XactIsoLevel.value, _bsysscan = Module._bsysscan = e.bsysscan.value, _CheckXidAlive = Module._CheckXidAlive = e.CheckXidAlive.value, _MyProc = Module._MyProc = e.MyProc.value, _MyDatabaseId = Module._MyDatabaseId = e.MyDatabaseId.value, _MyDatabaseTableSpace = Module._MyDatabaseTableSpace = e.MyDatabaseTableSpace.value, _TTSOpsBufferHeapTuple = Module._TTSOpsBufferHeapTuple = e.TTSOpsBufferHeapTuple.value, _RecentXmin = Module._RecentXmin = e.RecentXmin.value, _TTSOpsHeapTuple = Module._TTSOpsHeapTuple = e.TTSOpsHeapTuple.value, _pgWalUsage = Module._pgWalUsage = e.pgWalUsage.value, _pgBufferUsage = Module._pgBufferUsage = e.pgBufferUsage.value, _error_context_stack = Module._error_context_stack = e.error_context_stack.value, _MyLatch = Module._MyLatch = e.MyLatch.value, _SnapshotSelfData = Module._SnapshotSelfData = e.SnapshotSelfData.value, ___THREW__ = Module.___THREW__ = e.__THREW__.value, ___threwValue = Module.___threwValue = e.__threwValue.value, _PG_exception_stack = Module._PG_exception_stack = e.PG_exception_stack.value, _TTSOpsVirtual = Module._TTSOpsVirtual = e.TTSOpsVirtual.value, _GUC_check_errdetail_string = Module._GUC_check_errdetail_string = e.GUC_check_errdetail_string.value, _TransamVariables = Module._TransamVariables = e.TransamVariables.value, _TopTransactionContext = Module._TopTransactionContext = e.TopTransactionContext.value, _InterruptHoldoffCount = Module._InterruptHoldoffCount = e.InterruptHoldoffCount.value, _MyProcPid = Module._MyProcPid = e.MyProcPid.value, _RmgrTable = Module._RmgrTable = e.RmgrTable.value, _process_shared_preload_libraries_in_progress = Module._process_shared_preload_libraries_in_progress = e.process_shared_preload_libraries_in_progress.value, _wal_segment_size = Module._wal_segment_size = e.wal_segment_size.value, _TopTransactionResourceOwner = Module._TopTransactionResourceOwner = e.TopTransactionResourceOwner.value, _arch_module_check_errdetail_string = Module._arch_module_check_errdetail_string = e.arch_module_check_errdetail_string.value, _stdout = Module._stdout = e.stdout.value, _stdin = Module._stdin = e.stdin.value, _creating_extension = Module._creating_extension = e.creating_extension.value, _object_access_hook = Module._object_access_hook = e.object_access_hook.value, _InvalidObjectAddress = Module._InvalidObjectAddress = e.InvalidObjectAddress.value, _check_function_bodies = Module._check_function_bodies = e.check_function_bodies.value, _post_parse_analyze_hook = Module._post_parse_analyze_hook = e.post_parse_analyze_hook.value, _ScanKeywordTokens = Module._ScanKeywordTokens = e.ScanKeywordTokens.value, _ScanKeywords = Module._ScanKeywords = e.ScanKeywords.value, _standard_conforming_strings = Module._standard_conforming_strings = e.standard_conforming_strings.value, _None_Receiver = Module._None_Receiver = e.None_Receiver.value, _explain_per_plan_hook = Module._explain_per_plan_hook = e.explain_per_plan_hook.value, _explain_get_index_name_hook = Module._explain_get_index_name_hook = e.explain_get_index_name_hook.value, _explain_per_node_hook = Module._explain_per_node_hook = e.explain_per_node_hook.value, _CacheMemoryContext = Module._CacheMemoryContext = e.CacheMemoryContext.value, _SPI_processed = Module._SPI_processed = e.SPI_processed.value, _SPI_tuptable = Module._SPI_tuptable = e.SPI_tuptable.value, _TTSOpsMinimalTuple = Module._TTSOpsMinimalTuple = e.TTSOpsMinimalTuple.value, _check_password_hook = Module._check_password_hook = e.check_password_hook.value, _ConfigReloadPending = Module._ConfigReloadPending = e.ConfigReloadPending.value, _max_parallel_maintenance_workers = Module._max_parallel_maintenance_workers = e.max_parallel_maintenance_workers.value, _DateStyle = Module._DateStyle = e.DateStyle.value, _ExecutorStart_hook = Module._ExecutorStart_hook = e.ExecutorStart_hook.value, _ExecutorRun_hook = Module._ExecutorRun_hook = e.ExecutorRun_hook.value, _ExecutorFinish_hook = Module._ExecutorFinish_hook = e.ExecutorFinish_hook.value, _ExecutorEnd_hook = Module._ExecutorEnd_hook = e.ExecutorEnd_hook.value, _ExecutorCheckPerms_hook = Module._ExecutorCheckPerms_hook = e.ExecutorCheckPerms_hook.value, _SPI_result = Module._SPI_result = e.SPI_result.value, _stderr = Module._stderr = e.stderr.value, _MyProcPort = Module._MyProcPort = e.MyProcPort.value, _ClientAuthentication_hook = Module._ClientAuthentication_hook = e.ClientAuthentication_hook.value, _set_rel_pathlist_hook = Module._set_rel_pathlist_hook = e.set_rel_pathlist_hook.value, _cpu_tuple_cost = Module._cpu_tuple_cost = e.cpu_tuple_cost.value, _cpu_operator_cost = Module._cpu_operator_cost = e.cpu_operator_cost.value, _seq_page_cost = Module._seq_page_cost = e.seq_page_cost.value, _planner_hook = Module._planner_hook = e.planner_hook.value, _get_relation_info_hook = Module._get_relation_info_hook = e.get_relation_info_hook.value, _QueryCancelPending = Module._QueryCancelPending = e.QueryCancelPending.value, _ShutdownRequestPending = Module._ShutdownRequestPending = e.ShutdownRequestPending.value, _MyStartTime = Module._MyStartTime = e.MyStartTime.value, _cluster_name = Module._cluster_name = e.cluster_name.value, _ProcDiePending = Module._ProcDiePending = e.ProcDiePending.value, _application_name = Module._application_name = e.application_name.value, _row_security_policy_hook_restrictive = Module._row_security_policy_hook_restrictive = e.row_security_policy_hook_restrictive.value, _row_security_policy_hook_permissive = Module._row_security_policy_hook_permissive = e.row_security_policy_hook_permissive.value, _BufferDescriptors = Module._BufferDescriptors = e.BufferDescriptors.value, _shmem_startup_hook = Module._shmem_startup_hook = e.shmem_startup_hook.value, _ProcessUtility_hook = Module._ProcessUtility_hook = e.ProcessUtility_hook.value, _IntervalStyle = Module._IntervalStyle = e.IntervalStyle.value, _extra_float_digits = Module._extra_float_digits = e.extra_float_digits.value, _ScanKeywordCategories = Module._ScanKeywordCategories = e.ScanKeywordCategories.value, _pg_crc32_table = Module._pg_crc32_table = e.pg_crc32_table.value, _shmem_request_hook = Module._shmem_request_hook = e.shmem_request_hook.value, _z_errmsg = Module._z_errmsg = e.z_errmsg.value, __length_code = Module.__length_code = e._length_code.value, __dist_code = Module.__dist_code = e._dist_code.value, ___heap_base = e.__heap_base.value;
  }
  var wasmImports = { __assert_fail: ___assert_fail, __call_sighandler: ___call_sighandler, __cxa_begin_catch: ___cxa_begin_catch, __cxa_current_primary_exception: ___cxa_current_primary_exception, __cxa_end_catch: ___cxa_end_catch, __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2, __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3, __cxa_rethrow: ___cxa_rethrow, __cxa_rethrow_primary_exception: ___cxa_rethrow_primary_exception, __cxa_throw: ___cxa_throw, __cxa_uncaught_exceptions: ___cxa_uncaught_exceptions, __resumeException: ___resumeException, __syscall_accept4: ___syscall_accept4, __syscall_bind: ___syscall_bind, __syscall_chdir: ___syscall_chdir, __syscall_chmod: ___syscall_chmod, __syscall_connect: ___syscall_connect, __syscall_dup: ___syscall_dup, __syscall_dup3: ___syscall_dup3, __syscall_faccessat: ___syscall_faccessat, __syscall_fadvise64: ___syscall_fadvise64, __syscall_fallocate: ___syscall_fallocate, __syscall_fchmod: ___syscall_fchmod, __syscall_fchmodat2: ___syscall_fchmodat2, __syscall_fchown32: ___syscall_fchown32, __syscall_fchownat: ___syscall_fchownat, __syscall_fcntl64: ___syscall_fcntl64, __syscall_fdatasync: ___syscall_fdatasync, __syscall_fstat64: ___syscall_fstat64, __syscall_ftruncate64: ___syscall_ftruncate64, __syscall_getcwd: ___syscall_getcwd, __syscall_getdents64: ___syscall_getdents64, __syscall_getegid32: ___syscall_getegid32, __syscall_geteuid32: ___syscall_geteuid32, __syscall_getgid32: ___syscall_getgid32, __syscall_getuid32: ___syscall_getuid32, __syscall_ioctl: ___syscall_ioctl, __syscall_linkat: ___syscall_linkat, __syscall_listen: ___syscall_listen, __syscall_lstat64: ___syscall_lstat64, __syscall_mkdirat: ___syscall_mkdirat, __syscall_newfstatat: ___syscall_newfstatat, __syscall_openat: ___syscall_openat, __syscall_pipe2: ___syscall_pipe2, __syscall_poll: ___syscall_poll, __syscall_readlinkat: ___syscall_readlinkat, __syscall_recvfrom: ___syscall_recvfrom, __syscall_renameat: ___syscall_renameat, __syscall_rmdir: ___syscall_rmdir, __syscall_sendto: ___syscall_sendto, __syscall_socket: ___syscall_socket, __syscall_stat64: ___syscall_stat64, __syscall_statfs64: ___syscall_statfs64, __syscall_symlinkat: ___syscall_symlinkat, __syscall_truncate64: ___syscall_truncate64, __syscall_umask: ___syscall_umask, __syscall_unlinkat: ___syscall_unlinkat, __syscall_utimensat: ___syscall_utimensat, _abort_js: __abort_js, _dlopen_js: __dlopen_js, _dlsym_js: __dlsym_js, _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear, _emscripten_throw_longjmp: __emscripten_throw_longjmp, _gmtime_js: __gmtime_js, _localtime_js: __localtime_js, _mmap_js: __mmap_js, _munmap_js: __munmap_js, _setitimer_js: __setitimer_js, _tzset_js: __tzset_js, clock_time_get: _clock_time_get, emscripten_date_now: _emscripten_date_now, emscripten_force_exit: _emscripten_force_exit, emscripten_get_heap_max: _emscripten_get_heap_max, emscripten_get_now: _emscripten_get_now, emscripten_resize_heap: _emscripten_resize_heap, environ_get: _environ_get, environ_sizes_get: _environ_sizes_get, exit: _exit, fd_close: _fd_close, fd_fdstat_get: _fd_fdstat_get, fd_pread: _fd_pread, fd_pwrite: _fd_pwrite, fd_read: _fd_read, fd_seek: _fd_seek, fd_sync: _fd_sync, fd_write: _fd_write, getTempRet0: _getTempRet0, getaddrinfo: _getaddrinfo, getnameinfo: _getnameinfo, invoke_di, invoke_i, invoke_id, invoke_ii, invoke_iii, invoke_iiii, invoke_iiiii, invoke_iiiiii, invoke_iiiiiii, invoke_iiiiiiii, invoke_iiiiiiiii, invoke_iiiiiiiiii, invoke_iiiiiiiiiii, invoke_iiiiiiiiiiiiii, invoke_iiiiiiiiiiiiiiiiii, invoke_iiiiiji, invoke_iiiij, invoke_iiij, invoke_iiji, invoke_iijj, invoke_ij, invoke_ijiiiii, invoke_ijiiiiii, invoke_ijji, invoke_j, invoke_ji, invoke_jii, invoke_jiiii, invoke_jiiiiii, invoke_jiiiiiiiii, invoke_jij, invoke_v, invoke_vi, invoke_vid, invoke_vii, invoke_viii, invoke_viiii, invoke_viiiii, invoke_viiiiii, invoke_viiiiiii, invoke_viiiiiiii, invoke_viiiiiiiii, invoke_viiiiiiiiiiii, invoke_viiiji, invoke_viij, invoke_viiji, invoke_viijii, invoke_viijiiii, invoke_vij, invoke_viji, invoke_vijiji, invoke_vijjii, invoke_vj, invoke_vji, invoke_vjii, invoke_vjjii, memory: wasmMemory, proc_exit: _proc_exit, random_get: _random_get, sched_yield: _sched_yield, setTempRet0: _setTempRet0 };
  function invoke_ii(e, t7) {
    var r2 = stackSave();
    try {
      return getWasmTableEntry(e)(t7);
    } catch (_4) {
      if (stackRestore(r2), !(_4 instanceof EmscriptenEH)) throw _4;
      _setThrew(1, 0);
    }
  }
  function invoke_vii(e, t7, r2) {
    var _4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2);
    } catch (n3) {
      if (stackRestore(_4), !(n3 instanceof EmscriptenEH)) throw n3;
      _setThrew(1, 0);
    }
  }
  function invoke_viiiii(e, t7, r2, _4, n3, a3) {
    var i4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3);
    } catch (l3) {
      if (stackRestore(i4), !(l3 instanceof EmscriptenEH)) throw l3;
      _setThrew(1, 0);
    }
  }
  function invoke_vi(e, t7) {
    var r2 = stackSave();
    try {
      getWasmTableEntry(e)(t7);
    } catch (_4) {
      if (stackRestore(r2), !(_4 instanceof EmscriptenEH)) throw _4;
      _setThrew(1, 0);
    }
  }
  function invoke_v(e) {
    var t7 = stackSave();
    try {
      getWasmTableEntry(e)();
    } catch (r2) {
      if (stackRestore(t7), !(r2 instanceof EmscriptenEH)) throw r2;
      _setThrew(1, 0);
    }
  }
  function invoke_iii(e, t7, r2) {
    var _4 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2);
    } catch (n3) {
      if (stackRestore(_4), !(n3 instanceof EmscriptenEH)) throw n3;
      _setThrew(1, 0);
    }
  }
  function invoke_viii(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_iiii(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_jii(e, t7, r2) {
    var _4 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2);
    } catch (n3) {
      if (stackRestore(_4), !(n3 instanceof EmscriptenEH)) throw n3;
      return _setThrew(1, 0), 0n;
    }
  }
  function invoke_iiiii(e, t7, r2, _4, n3) {
    var a3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3);
    } catch (i4) {
      if (stackRestore(a3), !(i4 instanceof EmscriptenEH)) throw i4;
      _setThrew(1, 0);
    }
  }
  function invoke_i(e) {
    var t7 = stackSave();
    try {
      return getWasmTableEntry(e)();
    } catch (r2) {
      if (stackRestore(t7), !(r2 instanceof EmscriptenEH)) throw r2;
      _setThrew(1, 0);
    }
  }
  function invoke_ji(e, t7) {
    var r2 = stackSave();
    try {
      return getWasmTableEntry(e)(t7);
    } catch (_4) {
      if (stackRestore(r2), !(_4 instanceof EmscriptenEH)) throw _4;
      return _setThrew(1, 0), 0n;
    }
  }
  function invoke_jiiiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6, s5) {
    var c3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6, s5);
    } catch (g6) {
      if (stackRestore(c3), !(g6 instanceof EmscriptenEH)) throw g6;
      return _setThrew(1, 0), 0n;
    }
  }
  function invoke_jiiiiii(e, t7, r2, _4, n3, a3, i4) {
    var l3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4);
    } catch (o6) {
      if (stackRestore(l3), !(o6 instanceof EmscriptenEH)) throw o6;
      return _setThrew(1, 0), 0n;
    }
  }
  function invoke_viiii(e, t7, r2, _4, n3) {
    var a3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3);
    } catch (i4) {
      if (stackRestore(a3), !(i4 instanceof EmscriptenEH)) throw i4;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiiiiiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6, s5, c3, g6, d5, p6) {
    var u3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6, s5, c3, g6, d5, p6);
    } catch (m7) {
      if (stackRestore(u3), !(m7 instanceof EmscriptenEH)) throw m7;
      _setThrew(1, 0);
    }
  }
  function invoke_vji(e, t7, r2) {
    var _4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2);
    } catch (n3) {
      if (stackRestore(_4), !(n3 instanceof EmscriptenEH)) throw n3;
      _setThrew(1, 0);
    }
  }
  function invoke_viiji(e, t7, r2, _4, n3) {
    var a3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3);
    } catch (i4) {
      if (stackRestore(a3), !(i4 instanceof EmscriptenEH)) throw i4;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiij(e, t7, r2, _4, n3) {
    var a3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3);
    } catch (i4) {
      if (stackRestore(a3), !(i4 instanceof EmscriptenEH)) throw i4;
      _setThrew(1, 0);
    }
  }
  function invoke_vijiji(e, t7, r2, _4, n3, a3) {
    var i4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3);
    } catch (l3) {
      if (stackRestore(i4), !(l3 instanceof EmscriptenEH)) throw l3;
      _setThrew(1, 0);
    }
  }
  function invoke_viji(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiii(e, t7, r2, _4, n3, a3) {
    var i4 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3);
    } catch (l3) {
      if (stackRestore(i4), !(l3 instanceof EmscriptenEH)) throw l3;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6) {
    var s5 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6);
    } catch (c3) {
      if (stackRestore(s5), !(c3 instanceof EmscriptenEH)) throw c3;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiiiiiiiiiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6, s5, c3, g6, d5, p6, u3, m7, M2, S4) {
    var v5 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6, s5, c3, g6, d5, p6, u3, m7, M2, S4);
    } catch (F5) {
      if (stackRestore(v5), !(F5 instanceof EmscriptenEH)) throw F5;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiiii(e, t7, r2, _4, n3, a3, i4) {
    var l3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4);
    } catch (o6) {
      if (stackRestore(l3), !(o6 instanceof EmscriptenEH)) throw o6;
      _setThrew(1, 0);
    }
  }
  function invoke_vj(e, t7) {
    var r2 = stackSave();
    try {
      getWasmTableEntry(e)(t7);
    } catch (_4) {
      if (stackRestore(r2), !(_4 instanceof EmscriptenEH)) throw _4;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6, s5) {
    var c3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6, s5);
    } catch (g6) {
      if (stackRestore(c3), !(g6 instanceof EmscriptenEH)) throw g6;
      _setThrew(1, 0);
    }
  }
  function invoke_viij(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_viiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6) {
    var s5 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6);
    } catch (c3) {
      if (stackRestore(s5), !(c3 instanceof EmscriptenEH)) throw c3;
      _setThrew(1, 0);
    }
  }
  function invoke_viiiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6, s5) {
    var c3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6, s5);
    } catch (g6) {
      if (stackRestore(c3), !(g6 instanceof EmscriptenEH)) throw g6;
      _setThrew(1, 0);
    }
  }
  function invoke_vij(e, t7, r2) {
    var _4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2);
    } catch (n3) {
      if (stackRestore(_4), !(n3 instanceof EmscriptenEH)) throw n3;
      _setThrew(1, 0);
    }
  }
  function invoke_viiiiii(e, t7, r2, _4, n3, a3, i4) {
    var l3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4);
    } catch (o6) {
      if (stackRestore(l3), !(o6 instanceof EmscriptenEH)) throw o6;
      _setThrew(1, 0);
    }
  }
  function invoke_iiji(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_ij(e, t7) {
    var r2 = stackSave();
    try {
      return getWasmTableEntry(e)(t7);
    } catch (_4) {
      if (stackRestore(r2), !(_4 instanceof EmscriptenEH)) throw _4;
      _setThrew(1, 0);
    }
  }
  function invoke_viiiiiii(e, t7, r2, _4, n3, a3, i4, l3) {
    var o6 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3);
    } catch (s5) {
      if (stackRestore(o6), !(s5 instanceof EmscriptenEH)) throw s5;
      _setThrew(1, 0);
    }
  }
  function invoke_viiiji(e, t7, r2, _4, n3, a3) {
    var i4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3);
    } catch (l3) {
      if (stackRestore(i4), !(l3 instanceof EmscriptenEH)) throw l3;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiiiii(e, t7, r2, _4, n3, a3, i4, l3) {
    var o6 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3);
    } catch (s5) {
      if (stackRestore(o6), !(s5 instanceof EmscriptenEH)) throw s5;
      _setThrew(1, 0);
    }
  }
  function invoke_iiij(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_vid(e, t7, r2) {
    var _4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2);
    } catch (n3) {
      if (stackRestore(_4), !(n3 instanceof EmscriptenEH)) throw n3;
      _setThrew(1, 0);
    }
  }
  function invoke_j(e) {
    var t7 = stackSave();
    try {
      return getWasmTableEntry(e)();
    } catch (r2) {
      if (stackRestore(t7), !(r2 instanceof EmscriptenEH)) throw r2;
      return _setThrew(1, 0), 0n;
    }
  }
  function invoke_vjjii(e, t7, r2, _4, n3) {
    var a3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3);
    } catch (i4) {
      if (stackRestore(a3), !(i4 instanceof EmscriptenEH)) throw i4;
      _setThrew(1, 0);
    }
  }
  function invoke_ijji(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_iijj(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_jij(e, t7, r2) {
    var _4 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2);
    } catch (n3) {
      if (stackRestore(_4), !(n3 instanceof EmscriptenEH)) throw n3;
      return _setThrew(1, 0), 0n;
    }
  }
  function invoke_ijiiiiii(e, t7, r2, _4, n3, a3, i4, l3) {
    var o6 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3);
    } catch (s5) {
      if (stackRestore(o6), !(s5 instanceof EmscriptenEH)) throw s5;
      _setThrew(1, 0);
    }
  }
  function invoke_viijii(e, t7, r2, _4, n3, a3) {
    var i4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3);
    } catch (l3) {
      if (stackRestore(i4), !(l3 instanceof EmscriptenEH)) throw l3;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiiji(e, t7, r2, _4, n3, a3, i4) {
    var l3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4);
    } catch (o6) {
      if (stackRestore(l3), !(o6 instanceof EmscriptenEH)) throw o6;
      _setThrew(1, 0);
    }
  }
  function invoke_viijiiii(e, t7, r2, _4, n3, a3, i4, l3) {
    var o6 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3);
    } catch (s5) {
      if (stackRestore(o6), !(s5 instanceof EmscriptenEH)) throw s5;
      _setThrew(1, 0);
    }
  }
  function invoke_vijjii(e, t7, r2, _4, n3, a3) {
    var i4 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3);
    } catch (l3) {
      if (stackRestore(i4), !(l3 instanceof EmscriptenEH)) throw l3;
      _setThrew(1, 0);
    }
  }
  function invoke_vjii(e, t7, r2, _4) {
    var n3 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4);
    } catch (a3) {
      if (stackRestore(n3), !(a3 instanceof EmscriptenEH)) throw a3;
      _setThrew(1, 0);
    }
  }
  function invoke_jiiii(e, t7, r2, _4, n3) {
    var a3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3);
    } catch (i4) {
      if (stackRestore(a3), !(i4 instanceof EmscriptenEH)) throw i4;
      return _setThrew(1, 0), 0n;
    }
  }
  function invoke_viiiiiiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6, s5, c3, g6, d5) {
    var p6 = stackSave();
    try {
      getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6, s5, c3, g6, d5);
    } catch (u3) {
      if (stackRestore(p6), !(u3 instanceof EmscriptenEH)) throw u3;
      _setThrew(1, 0);
    }
  }
  function invoke_di(e, t7) {
    var r2 = stackSave();
    try {
      return getWasmTableEntry(e)(t7);
    } catch (_4) {
      if (stackRestore(r2), !(_4 instanceof EmscriptenEH)) throw _4;
      _setThrew(1, 0);
    }
  }
  function invoke_id(e, t7) {
    var r2 = stackSave();
    try {
      return getWasmTableEntry(e)(t7);
    } catch (_4) {
      if (stackRestore(r2), !(_4 instanceof EmscriptenEH)) throw _4;
      _setThrew(1, 0);
    }
  }
  function invoke_ijiiiii(e, t7, r2, _4, n3, a3, i4) {
    var l3 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4);
    } catch (o6) {
      if (stackRestore(l3), !(o6 instanceof EmscriptenEH)) throw o6;
      _setThrew(1, 0);
    }
  }
  function invoke_iiiiiiiiiii(e, t7, r2, _4, n3, a3, i4, l3, o6, s5, c3) {
    var g6 = stackSave();
    try {
      return getWasmTableEntry(e)(t7, r2, _4, n3, a3, i4, l3, o6, s5, c3);
    } catch (d5) {
      if (stackRestore(g6), !(d5 instanceof EmscriptenEH)) throw d5;
      _setThrew(1, 0);
    }
  }
  function callMain(e = []) {
    var t7 = resolveGlobalSymbol("main").sym;
    if (t7) {
      e.unshift(thisProgram);
      var r2 = e.length, _4 = stackAlloc((r2 + 1) * 4), n3 = _4;
      for (var a3 of e) HEAPU32[n3 >> 2] = stringToUTF8OnStack(a3), n3 += 4;
      HEAPU32[n3 >> 2] = 0;
      try {
        var i4 = t7(r2, _4);
        return exitJS(i4, true), i4;
      } catch (l3) {
        return handleException(l3);
      }
    }
  }
  async function run(e = programArgs) {
    preRun(), runDependencies && await resolveRunDependencies();
    var t7 = Module.setStatus;
    if (t7 && (t7("Running..."), await new Promise((_4) => setTimeout(_4, 1)), setTimeout(t7, 1, "")), !ABORT) {
      initRuntime(), Module.onRuntimeInitialized?.();
      var r2 = Module.noInitialRun || true;
      r2 || callMain(e), postRun();
    }
  }
  var wasmExports;
  return wasmExports = await createWasm(), await run(), quit_ = (e, t7) => {
    throw t7;
  }, Module;
}
var Xe2 = ut2;
var Ke2 = Xe2;
var J3 = class {
  constructor(t7 = { results: [], throwOnError: false, onNotice: void 0, databaseError: null }) {
    this.results = [];
    this.throwOnError = false;
    this.databaseError = null;
    this.results = t7.results || [], this.throwOnError = t7.throwOnError || false, this.onNotice = t7.onNotice, this.databaseError = t7.databaseError === void 0 ? null : t7.databaseError;
  }
};
var j5;
var Z2;
var x8;
var w6;
var le3;
var oe3;
var me2;
var Te3;
var Ae2;
var se2;
var de;
var he2;
var ce3;
var ee2;
var X2;
var z5;
var te2;
var ue3;
var C5;
var pe2;
var W4;
var E5;
var O3;
var N4;
var Se2;
var ye2;
var Me3;
var ge2;
var h3;
var qe2;
var De3;
var $e2;
var Qe2;
var Je2;
var Ze2;
var xe3;
var ze3;
var we2;
var B4;
var et2;
var tt2;
var rt2;
var _t2;
var nt3;
var D6 = class D7 extends z2 {
  constructor(r2 = {}, _4 = {}) {
    super();
    R(this, h3);
    this.POSTGRES_MAIN_LONGJMP = 100;
    this.PGLITE_EXIT_ALIVE = 99;
    R(this, j5);
    R(this, Z2, false);
    R(this, x8, false);
    R(this, w6, false);
    R(this, le3, false);
    R(this, oe3, new Y2());
    R(this, me2, new Y2());
    R(this, Te3, new Y2());
    R(this, Ae2, new Y2());
    R(this, se2, false);
    this.debug = 0;
    R(this, de);
    R(this, he2, []);
    R(this, ce3, new pe());
    R(this, ee2);
    R(this, X2);
    R(this, z5, /* @__PURE__ */ new Map());
    R(this, te2, /* @__PURE__ */ new Set());
    R(this, ue3, -1);
    R(this, C5, new J3());
    R(this, pe2, -1);
    R(this, W4, []);
    R(this, E5, 0);
    R(this, O3, new Uint8Array(0));
    R(this, N4, 0);
    R(this, Se2, -1);
    R(this, ye2, -1);
    R(this, Me3, -1);
    this.externalCommandStreamFd = null;
    R(this, ge2, false);
    typeof r2 == "string" ? _4 = { dataDir: r2, ..._4 } : _4 = r2, this.dataDir = _4.dataDir, _4.parsers !== void 0 && (this.parsers = { ...this.parsers, ..._4.parsers }), _4.serializers !== void 0 && (this.serializers = { ...this.serializers, ..._4.serializers }), _4?.debug !== void 0 && (this.debug = _4.debug), _4?.relaxedDurability !== void 0 && x(this, le3, _4.relaxedDurability), x(this, de, _4.extensions ?? {}), this.waitReady = T(this, h3, $e2).call(this, _4 ?? {});
  }
  get ENV() {
    return this.mod?.ENV;
  }
  static async create(r2, _4) {
    let n3 = typeof r2 == "string" ? { dataDir: r2, ..._4 ?? {} } : r2 ?? _4 ?? {}, a3 = new D7(n3);
    return await a3.waitReady, a3;
  }
  handleExternalCmd(r2, _4) {
    if (r2.startsWith("locale -a") && _4 === "r") {
      let n3 = this.mod.stringToUTF8OnStack("/pglite/locale-a"), a3 = this.mod.stringToUTF8OnStack(_4);
      return this.mod._fopen(n3, a3);
    }
    throw new Error("Unhandled cmd");
  }
  get Module() {
    return this.mod;
  }
  get ready() {
    return h(this, Z2) && !h(this, x8) && !h(this, w6);
  }
  get closed() {
    return h(this, w6);
  }
  async close() {
    await this._checkReady(), await h(this, me2).runExclusive(async () => {
      await h(this, oe3).runExclusive(async () => {
        await this._checkReady(), x(this, x8, true);
      });
    });
    for (let r2 of h(this, he2)) await r2();
    try {
      this.mod._pgl_setPGliteActive(0), await this.execProtocol($e.end()), this.mod._pgl_run_atexit_funcs();
    } catch (r2) {
      let _4 = r2;
      _4.name === "ExitStatus" && _4.status === 0 || T(this, h3, B4).call(this, "An error occured while closing the db", r2.toString());
    } finally {
      this.mod.removeFunction(h(this, pe2)), this.mod.removeFunction(h(this, ue3));
    }
    await this.fs.closeFs(), x(this, w6, true), x(this, x8, false), x(this, Z2, false), x(this, ge2, false);
    try {
      this.mod._emscripten_force_exit(0);
    } catch (r2) {
      T(this, h3, B4).call(this, r2), r2.status !== 0 && T(this, h3, B4).call(this, "Error when exiting", r2.toString());
    } finally {
      this.mod = void 0;
    }
  }
  async [Symbol.asyncDispose]() {
    await this.close();
  }
  async _handleBlob(r2) {
    x(this, ee2, r2 ? await r2.arrayBuffer() : void 0);
  }
  async _cleanupBlob() {
    x(this, ee2, void 0);
  }
  async _getWrittenBlob() {
    if (!h(this, X2)) return;
    let r2 = new Blob(h(this, X2));
    return x(this, X2, void 0), r2;
  }
  async _checkReady() {
    if (h(this, x8)) throw new Error("PGlite is closing");
    if (h(this, w6)) throw new Error("PGlite is closed");
    h(this, Z2) || await this.waitReady;
  }
  execProtocolRawSync(r2) {
    let _4 = this.mod;
    if (x(this, E5, 0), x(this, N4, 0), x(this, W4, r2), h(this, j5) || x(this, j5, T(this, h3, xe3)), h(this, O3).length !== D7.DEFAULT_RECV_BUF_SIZE && x(this, O3, new Uint8Array(D7.DEFAULT_RECV_BUF_SIZE)), r2[0] === 88) return new Uint8Array(0);
    if (r2[0] === 0) return T(this, h3, nt3).call(this, r2);
    try {
      for (; h(this, E5) < r2.length || _4._pq_buffer_remaining_data() > 0; ) {
        let n3;
        try {
          n3 = _4.stackSave(), _4._PostgresMainLoopOnce();
        } catch (a3) {
          _4.stackRestore(n3), a3.status === this.POSTGRES_MAIN_LONGJMP && _4._PostgresMainLongJmp();
        }
      }
    } finally {
      _4._PostgresSendReadyForQueryIfNecessary(), _4._pgl_pq_flush();
    }
    return x(this, W4, []), h(this, N4) ? new Uint8Array(h(this, O3).subarray(0, h(this, N4))) : new Uint8Array(0);
  }
  async execProtocolRaw(r2, { syncToFs: _4 = true } = {}) {
    let n3 = this.execProtocolRawSync(r2);
    return _4 && await this.syncToFs(), n3;
  }
  async execProtocolRawStream(r2, { syncToFs: _4 = true, onRawData: n3 }) {
    x(this, j5, (a3) => (n3(a3), a3.length)), this.execProtocolRawSync(r2), _4 && await this.syncToFs();
  }
  async execProtocol(r2, { syncToFs: _4 = true, throwOnError: n3 = true, onNotice: a3 } = {}) {
    x(this, C5, new J3({ throwOnError: n3, onNotice: a3 }));
    let i4 = await this.execProtocolRaw(r2, { syncToFs: _4 }), l3 = h(this, C5).databaseError, o6 = { messages: h(this, C5).results, data: i4 };
    if (x(this, C5, new J3()), x(this, j5, void 0), n3 && l3) throw x(this, ce3, new pe()), l3;
    return o6;
  }
  async execProtocolStream(r2, { syncToFs: _4, throwOnError: n3 = true, onNotice: a3 } = {}) {
    x(this, C5, new J3({ throwOnError: n3, onNotice: a3 })), x(this, j5, T(this, h3, ze3)), await this.execProtocolRaw(r2, { syncToFs: _4 });
    let i4 = h(this, C5).databaseError, l3 = h(this, C5).results;
    if (x(this, C5, new J3()), x(this, j5, void 0), n3 && i4) throw x(this, ce3, new pe()), i4;
    return l3;
  }
  isInTransaction() {
    return this.mod._IsTransactionBlock() !== 0;
  }
  async syncToFs() {
    if (h(this, se2)) return;
    x(this, se2, true);
    let r2 = async () => {
      await h(this, Ae2).runExclusive(async () => {
        x(this, se2, false), await this.fs.syncToFs(h(this, le3));
      });
    };
    h(this, le3) ? r2() : await r2();
  }
  async listen(r2, _4, n3) {
    return this._runExclusiveListen(() => T(this, h3, et2).call(this, r2, _4, n3));
  }
  async unlisten(r2, _4, n3) {
    return this._runExclusiveListen(() => T(this, h3, tt2).call(this, r2, _4, n3));
  }
  onNotification(r2) {
    return h(this, te2).add(r2), () => {
      h(this, te2).delete(r2);
    };
  }
  offNotification(r2) {
    h(this, te2).delete(r2);
  }
  async dumpDataDir(r2) {
    return await h(this, oe3).runExclusive(async () => {
      await this._checkReady();
      let n3 = this.dataDir?.split("/").pop() ?? "pgdata";
      return this.fs.dumpTar(n3, r2);
    });
  }
  _runExclusiveQuery(r2) {
    return h(this, oe3).runExclusive(r2);
  }
  _runExclusiveTransaction(r2) {
    return h(this, me2).runExclusive(r2);
  }
  async clone() {
    let r2 = await this.dumpDataDir("none");
    return D7.create({ loadDataDir: r2, extensions: h(this, de) });
  }
  _runExclusiveListen(r2) {
    return h(this, Te3).runExclusive(r2);
  }
  callMain(r2) {
    return this.mod.callMain(r2);
  }
  copyToFS(r2, _4, n3) {
    fe(this.mod.FS, r2, _4, n3);
  }
};
j5 = /* @__PURE__ */ new WeakMap(), Z2 = /* @__PURE__ */ new WeakMap(), x8 = /* @__PURE__ */ new WeakMap(), w6 = /* @__PURE__ */ new WeakMap(), le3 = /* @__PURE__ */ new WeakMap(), oe3 = /* @__PURE__ */ new WeakMap(), me2 = /* @__PURE__ */ new WeakMap(), Te3 = /* @__PURE__ */ new WeakMap(), Ae2 = /* @__PURE__ */ new WeakMap(), se2 = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), he2 = /* @__PURE__ */ new WeakMap(), ce3 = /* @__PURE__ */ new WeakMap(), ee2 = /* @__PURE__ */ new WeakMap(), X2 = /* @__PURE__ */ new WeakMap(), z5 = /* @__PURE__ */ new WeakMap(), te2 = /* @__PURE__ */ new WeakMap(), ue3 = /* @__PURE__ */ new WeakMap(), C5 = /* @__PURE__ */ new WeakMap(), pe2 = /* @__PURE__ */ new WeakMap(), W4 = /* @__PURE__ */ new WeakMap(), E5 = /* @__PURE__ */ new WeakMap(), O3 = /* @__PURE__ */ new WeakMap(), N4 = /* @__PURE__ */ new WeakMap(), Se2 = /* @__PURE__ */ new WeakMap(), ye2 = /* @__PURE__ */ new WeakMap(), Me3 = /* @__PURE__ */ new WeakMap(), ge2 = /* @__PURE__ */ new WeakMap(), h3 = /* @__PURE__ */ new WeakSet(), qe2 = function(r2) {
  this.debug && console.debug(r2);
}, De3 = function(r2) {
  this.debug && console.error(r2);
}, $e2 = async function(r2) {
  if (r2.fs) this.fs = r2.fs;
  else {
    let { dataDir: d5, fsType: p6 } = We2(r2.dataDir);
    this.fs = await Ve2(d5, p6);
  }
  let _4 = {}, n3 = [], a3 = [...this.debug ? ["-d", this.debug.toString()] : []];
  r2.pgliteWasmModule || m2.startArtifactDownload(new URL("./pglite.wasm", import.meta.url)), r2.initdbWasmModule || m2.startArtifactDownload(new URL("./initdb.wasm", import.meta.url));
  let i4 = r2.fsBundle ? r2.fsBundle.arrayBuffer() : m2.getFsBundle(new URL("./pglite.data", import.meta.url)), l3;
  i4.then((d5) => {
    l3 = d5;
  });
  let o6 = new WebAssembly.Memory({ initial: r2.initialMemory ? r2.initialMemory / (64 * 1024) : 2048, maximum: 32768 }), s5 = { thisProgram: yt2, PGLITE_ENV: {}, WASM_PREFIX: m2.WASM_PREFIX, arguments: a3, noExitRuntime: true, wasmMemory: o6, stdin: () => null, print: (d5) => {
    if (r2.onStdout && r2.onStdout(d5)) return T(this, h3, qe2).call(this, d5);
    T(this, h3, qe2).call(this, d5);
  }, printErr: (d5) => {
    if (r2.onStderr && r2.onStderr(d5)) return T(this, h3, De3).call(this, d5);
    T(this, h3, De3).call(this, d5);
  }, instantiateWasm: (d5, p6) => (m2.instantiateWasm(d5, () => new URL("./pglite.wasm", import.meta.url), r2.pgliteWasmModule).then(({ instance: u3, module: m7 }) => {
    p6(u3, m7);
  }), {}), getPreloadedPackage: (d5, p6) => {
    if (d5 === "pglite.data") {
      if (l3.byteLength !== p6) throw new Error(`Invalid FS bundle size: ${l3.byteLength} !== ${p6}`);
      return l3;
    }
    throw new Error(`Unknown package: ${d5}`);
  }, preRun: [(d5) => {
    d5.onRuntimeInitialized = () => {
      T(this, h3, Ze2).call(this, d5);
    };
  }, (d5) => {
    let p6 = d5.FS.makedev(64, 0), u3 = { open: (m7) => {
    }, close: (m7) => {
    }, read: (m7, M2, S4, v5, F5) => {
      let b4 = h(this, ee2);
      if (!b4) throw new Error("No /dev/blob File or Blob provided to read from");
      let A4 = new Uint8Array(b4);
      if (F5 >= A4.length) return 0;
      let T5 = Math.min(A4.length - F5, v5);
      for (let V2 = 0; V2 < T5; V2++) M2[S4 + V2] = A4[F5 + V2];
      return T5;
    }, write: (m7, M2, S4, v5, F5) => (h(this, X2) ?? x(this, X2, []), h(this, X2).push(M2.slice(S4, S4 + v5)), v5), llseek: (m7, M2, S4) => {
      let v5 = h(this, ee2);
      if (!v5) throw new Error("No /dev/blob File or Blob provided to llseek");
      let F5 = M2;
      if (S4 === 1 ? F5 += m7.position : S4 === 2 && (F5 = new Uint8Array(v5).length), F5 < 0) throw new d5.FS.ErrnoError(28);
      return F5;
    } };
    d5.FS.registerDevice(p6, u3), d5.FS.mkdev("/dev/blob", p6);
  }, (d5) => {
    d5.ENV.HOME = "/home/postgres", d5.ENV.USER = "postgres", d5.ENV.LOGNAME = "postgres", d5.ENV.PGDATA = x4, d5.ENV.PGUSER = r2.username ?? "postgres", d5.ENV.PGDATABASE = r2.database ?? "postgres", d5.ENV.LANG = d5.ENV.LC_COLLATE = d5.ENV.LC_CTYPE = "en_US.UTF-8", d5.ENV.TZ = "UTC", d5.ENV.PGTZ = "UTC", d5.ENV.PGCLIENTENCODING = "UTF8", d5.ENV.ICU_DATA = zr, d5.PGLITE_ENV && Object.assign(d5.ENV, d5.PGLITE_ENV);
  }, (d5) => {
    r2.pgDataProxyFs && (d5.FS.mkdirTree(x4), d5.FS.mount(d5.PROXYFS, { root: x4, fs: r2.pgDataProxyFs }, x4));
  }] }, { emscriptenOpts: c3 } = await this.fs.init(this, s5);
  s5 = c3;
  let g6 = [];
  for (let [d5, p6] of Object.entries(h(this, de))) if (p6 instanceof URL) _4[d5] = Re3(p6);
  else {
    let u3 = await p6.setup(this, s5);
    if (u3.emscriptenOpts && (s5 = u3.emscriptenOpts), u3.namespaceObj) {
      let m7 = this;
      m7[d5] = u3.namespaceObj;
    }
    u3.bundlePath && (_4[d5] = Re3(u3.bundlePath)), u3.init && n3.push(u3.init), u3.close && h(this, he2).push(u3.close), g6.push(...u3.sharedPreloadLibraries ?? []);
  }
  if (s5.pg_extensions = _4, await i4, this.mod = await Ke2(s5), this.mod.FS.chmod("/home/postgres/.pgpass", 384), this.mod.FS.chmod(Br, 365), this.mod.FS.chmod(yt2, 365), await this.fs.initialSyncFs(), r2.icuDataDir && await T(this, h3, Je2).call(this, r2.icuDataDir), !r2.noInitDb) {
    if (r2.loadDataDir) {
      if (this.mod.FS.analyzePath(x4 + "/PG_VERSION").exists) throw new Error("Database already exists, cannot load from tarball");
      T(this, h3, B4).call(this, "pglite: loading data from tarball"), await nt2(this.mod.FS, r2.loadDataDir, x4);
    } else if (this.mod.FS.analyzePath(x4 + "/PG_VERSION").exists) T(this, h3, B4).call(this, "pglite: found DB, resuming");
    else {
      T(this, h3, B4).call(this, "pglite: no db in filesystem, running initdb");
      let d5 = { ...r2 };
      d5.noInitDb = true, d5.dataDir = void 0, d5.extensions = void 0, d5.loadDataDir = void 0, d5.fs = void 0;
      let p6 = this.fs instanceof ie2;
      p6 && (this.mod.FS.mkdirTree(x4, 448), d5.pgDataProxyFs = this.mod.FS);
      let u3 = await D6.create(d5);
      try {
        let m7 = await ht2({ pg: u3, debug: r2.debug, wasmModule: r2.initdbWasmModule, args: r2.initDbStartParams });
        if (m7.exitCode !== 0 && !m7.stderr.includes("exists but is not empty")) throw new Error("INITDB failed to initialize: " + m7.stderr);
        if (!p6) {
          let M2 = await u3.dumpDataDir("none");
          await nt2(this.mod.FS, M2, x4);
        }
      } finally {
        await u3.close();
      }
      await this.syncToFs();
    }
    await Ee2(this.mod, (...d5) => T(this, h3, B4).call(this, ...d5)), T(this, h3, Qe2).call(this, g6, r2), this.mod._pgl_setPGliteActive(1), T(this, h3, _t2).call(this, { pgDataFolder: x4, startParams: [...r2.startParams || D6.defaultStartParams, ...this.debug ? ["-d", this.debug.toString()] : []] }), T(this, h3, rt2).call(this), x(this, Z2, true), r2.username && await this.exec(`SET ROLE ${r2.username};`), await this._initArrayTypes();
    for (let d5 of n3) await d5();
  }
}, Qe2 = function(r2, _4) {
  if (r2.length && !_4.postgresqlconf && (_4.postgresqlconf = new Array()), _4.postgresqlconf) {
    let n3 = typeof _4.postgresqlconf == "string" ? _4.postgresqlconf : _4.postgresqlconf.join(`
`);
    if (r2.length) {
      let a3 = n3.match(/^(shared_preload_libraries\s*=\s*)(.*)$/m);
      if (a3) {
        let i4 = a3[2].split(",").map((o6) => o6.trim()), l3 = [.../* @__PURE__ */ new Set([...i4, ...r2])];
        n3 = n3.replace(a3[0], `${a3[1]}${l3.join(",")}`);
      } else n3 += `
shared_preload_libraries=${r2.join(",")}`;
    }
    fe(this.mod.FS, `${x4}/postgresql.conf`, new TextEncoder().encode(n3));
  }
}, Je2 = async function(r2) {
  T(this, h3, B4).call(this, `pglite: icuDataDir specified, removing default icu data dir at ${zr}`), m2.rmdirRecursive(this.mod.FS, zr), T(this, h3, B4).call(this, `pglite: loading icu data from tarball ${r2}`), this.mod.FS.mkdirTree(zr), await nt2(this.mod.FS, r2, zr);
}, Ze2 = function(r2) {
  x(this, Se2, r2.addFunction((_4) => (T(this, h3, B4).call(this, `Postgres tried to execute ${r2.UTF8ToString(_4)}, returning 1.`), 1), "pi")), r2._pgl_set_system_fn(h(this, Se2)), x(this, ye2, r2.addFunction((_4, n3) => {
    let a3 = r2.UTF8ToString(n3), i4 = r2.UTF8ToString(_4);
    return this.externalCommandStreamFd = this.handleExternalCmd(i4, a3), this.externalCommandStreamFd;
  }, "ppp")), r2._pgl_set_popen_fn(h(this, ye2)), x(this, Me3, r2.addFunction((_4) => {
    if (_4 === this.externalCommandStreamFd) this.mod._fclose(this.externalCommandStreamFd), this.externalCommandStreamFd = null;
    else throw `Unhandled pclose ${_4}`;
    T(this, h3, B4).call(this, "pclose_fn", _4);
  }, "pi")), r2._pgl_set_pclose_fn(h(this, Me3)), x(this, ue3, r2.addFunction((_4, n3) => {
    let a3;
    try {
      a3 = this.mod.HEAPU8.subarray(_4, _4 + n3);
    } catch (i4) {
      throw console.error("error", i4), i4;
    }
    return h(this, j5).call(this, a3);
  }, "ipi")), x(this, pe2, r2.addFunction((_4, n3) => {
    let a3 = h(this, W4).length - h(this, E5);
    return a3 > n3 && (a3 = n3), this.mod.HEAPU8.set(h(this, W4).subarray(h(this, E5), h(this, E5) + a3), _4), x(this, E5, h(this, E5) + a3), a3;
  }, "ipi")), r2._pgl_set_rw_cbs(h(this, pe2), h(this, ue3));
}, xe3 = function(r2) {
  let _4 = r2.slice(), n3 = h(this, N4) + _4.length;
  if (n3 > h(this, O3).length) {
    let a3 = h(this, O3).length + (h(this, O3).length >> 1) + n3;
    n3 > D6.MAX_BUFFER_SIZE && (n3 = D6.MAX_BUFFER_SIZE);
    let i4 = new Uint8Array(a3);
    i4.set(h(this, O3).subarray(0, h(this, N4))), x(this, O3, i4);
  }
  return h(this, O3).set(_4, h(this, N4)), x(this, N4, h(this, N4) + _4.length), T(this, h3, ze3).call(this, _4);
}, ze3 = function(r2) {
  return h(this, ce3).parse(r2, (_4) => {
    let n3 = T(this, h3, we2).call(this, _4);
    n3 && h(this, C5).results.push(n3);
  }), r2.length;
}, we2 = function(r2) {
  if (!h(this, C5).databaseError) {
    if (r2 instanceof O) h(this, C5).throwOnError && (h(this, C5).databaseError = r2);
    else if (r2 instanceof te) this.debug > 0 && console.warn(r2), h(this, C5).onNotice && h(this, C5).onNotice(r2);
    else if (r2 instanceof $) {
      let _4 = h(this, z5).get(r2.channel);
      _4 && _4.forEach((n3) => {
        queueMicrotask(() => n3(r2.payload));
      }), h(this, te2).forEach((n3) => {
        queueMicrotask(() => n3(r2.channel, r2.payload));
      });
    }
    return r2;
  }
  return null;
}, B4 = function(...r2) {
  this.debug > 0 && console.log(...r2);
}, et2 = async function(r2, _4, n3) {
  let a3 = m2.toPostgresName(r2), i4 = n3 ?? this;
  h(this, z5).has(a3) || h(this, z5).set(a3, /* @__PURE__ */ new Set()), h(this, z5).get(a3).add(_4);
  try {
    await i4.exec(`LISTEN ${r2}`);
  } catch (l3) {
    throw h(this, z5).get(a3).delete(_4), h(this, z5).get(a3)?.size === 0 && h(this, z5).delete(a3), l3;
  }
  return async (l3) => {
    await this.unlisten(a3, _4, l3);
  };
}, tt2 = async function(r2, _4, n3) {
  let a3 = m2.toPostgresName(r2), i4 = n3 ?? this, l3 = async () => {
    await i4.exec(`UNLISTEN ${r2}`), h(this, z5).get(a3)?.size === 0 && h(this, z5).delete(a3);
  };
  _4 ? (h(this, z5).get(a3)?.delete(_4), h(this, z5).get(a3)?.size === 0 && await l3()) : await l3();
}, rt2 = function() {
  if (h(this, ge2)) throw new Error("PGlite single mode already running");
  this.mod._pgl_startPGlite(), x(this, ge2, true);
}, _t2 = function(r2) {
  let _4 = [...r2.startParams, "-D", r2.pgDataFolder, this.mod.ENV.PGDATABASE], n3 = -1;
  if (n3 = this.mod.callMain(_4), n3 !== this.PGLITE_EXIT_ALIVE) throw new Error("PGlite failed to initialize properly");
}, nt3 = function(r2) {
  x(this, E5, 0), x(this, N4, 0), x(this, W4, r2);
  let _4 = this.mod._pgl_getMyProcPort();
  if (this.mod._ProcessStartupPacket(_4, true, true) !== 0) throw new Error(`Cannot process startup packet + ${r2.toString()}`);
  return this.mod._pgl_sendConnData(), this.mod._pgl_pq_flush(), x(this, W4, []), h(this, N4) ? h(this, O3).subarray(0, h(this, N4)) : new Uint8Array(0);
}, D6.paths = { PG_ROOT: U3, PGDATA: x4, ICU_DATA_PATH: zr, INITDB_EXE_PATH: Br, POSTGRES_EXE_PATH: yt2 }, D6.DEFAULT_RECV_BUF_SIZE = 1 * 1024 * 1024, D6.MAX_BUFFER_SIZE = Math.pow(2, 30), D6.defaultStartParams = ["--single", "-F", "-O", "-j", "-c", "search_path=public", "-c", "exit_on_error=false", "-c", "log_checkpoints=false", "-c", "max_worker_processes=0", "-c", "max_parallel_workers=0", "-c", "max_parallel_workers_per_gather=0", "-c", "io_method=sync", "-c", "max_parallel_maintenance_workers=0"];
var Ye3 = D6;

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/index.js
init_chunk_CE4NCHVO();
init_chunk_ZKGLEABV();
init_chunk_QY3QWFKW();
u();
u();

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/contrib/btree_gist.js
init_chunk_QY3QWFKW();
u();
var t2 = async (s5, n3) => ({ bundlePath: new URL("./btree_gist.tar.gz", import.meta.url) });
var a2 = { name: "btree_gist", setup: t2 };

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/contrib/pg_trgm.js
init_chunk_QY3QWFKW();
u();
var t3 = async (n3, s5) => ({ bundlePath: new URL("./pg_trgm.tar.gz", import.meta.url) });
var p5 = { name: "pg_trgm", setup: t3 };

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/contrib/pgcrypto.js
init_chunk_QY3QWFKW();
u();
var t4 = async (n3, s5) => ({ bundlePath: new URL("./pgcrypto.tar.gz", import.meta.url) });
var i2 = { name: "pgcrypto", setup: t4 };

// node_modules/.pnpm/@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite/dist/contrib/uuid_ossp.js
init_chunk_QY3QWFKW();
u();
var t5 = async (s5, n3) => ({ bundlePath: new URL("./uuid-ossp.tar.gz", import.meta.url) });
var o5 = { name: "uuid-ossp", setup: t5 };

// node_modules/.pnpm/@electric-sql+pglite-pgvector@0.0.15_@electric-sql+pglite@0.5.14/node_modules/@electric-sql/pglite-pgvector/dist/index.js
var t6 = async (n3, e) => ({ emscriptenOpts: e, bundlePath: new URL("./vector.tar.gz", import.meta.url) });
var i3 = { name: "vector", setup: t6 };

// packages/core/dist/schema/index.js
var import_libpg_query = __toESM(require_wasm(), 1);

// packages/core/dist/shims/index.js
var SHIM_ROLES = ["anon", "authenticated", "service_role"];
var ROLE_LIST = SHIM_ROLES.join(", ");

// packages/core/dist/schema/index.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();

// packages/core/dist/synth/index.js
var HEX_CODES = Array.from("0123456789abcdef", (c3) => c3.charCodeAt(0));
var uuidCodes = new Array(36).fill(0);
var uuidBytes = new Uint8Array(16);
var EPOCH = Date.UTC(2025, 0, 1);
var YEAR_MS = 365 * 24 * 3600 * 1e3;

// packages/core/dist/translate/sql.js
var import_libpg_query2 = __toESM(require_wasm(), 1);
var encoder2 = new TextEncoder();

// packages/core/dist/measure/index.js
function isRecord(v5) {
  return typeof v5 === "object" && v5 !== null && !Array.isArray(v5);
}
function isPlanNode(v5) {
  return isRecord(v5) && typeof v5["Node Type"] === "string";
}
function parseExplainJson(value) {
  let v5 = value;
  if (typeof v5 === "string") {
    v5 = JSON.parse(v5);
  }
  if (Array.isArray(v5)) {
    v5 = v5[0];
  }
  if (!isRecord(v5) || !isPlanNode(v5["Plan"])) {
    throw new Error("parseExplainJson: not an EXPLAIN (FORMAT JSON) result");
  }
  return v5;
}

// packages/core/dist/policy/index.js
var import_libpg_query3 = __toESM(require_wasm(), 1);

// packages/core/dist/license/index.js
var OFFLINE_GRACE_MS = 7 * 24 * 60 * 60 * 1e3;

// packages/core/dist/structural/index.js
var SPLINTER_COMMIT_FULL = "cd6d16a741483f5fdb7d6d065ede3400e4565510";
var SPLINTER_URL = `https://raw.githubusercontent.com/supabase/splinter/${SPLINTER_COMMIT_FULL}/splinter.sql`;

// packages/core/dist/snapshot/md5.js
var K3 = Array.from({ length: 64 }, (_4, i4) => Math.floor(Math.abs(Math.sin(i4 + 1)) * 2 ** 32) >>> 0);

// packages/core/dist/snapshot/model.js
var nullable = (s5) => ({ nullable: s5 });
var COLUMN = { name: "string", type: "string", notNull: "boolean", default: "string?", generated: nullable({ expr: "string", stored: "boolean" }), identity: "string?", collation: "string?" };
var INDEX = { name: "string", def: "string" };
var SHAPE = {
  format: "string",
  version: "number",
  server: { versionNum: "number", version: "string" },
  capturedAt: "string",
  searchPath: "string",
  schemas: "strings",
  skippedSchemas: "strings",
  extensions: [{ name: "string", version: "string", schema: "string", types: "strings" }],
  types: [
    {
      schema: "string",
      name: "string",
      kind: "string",
      labels: "strings?",
      baseType: "string?",
      notNull: "boolean?",
      default: "string?",
      constraints: nullable([{ name: "string", def: "string" }]),
      attributes: nullable([{ name: "string", type: "string" }]),
      subtype: "string?"
    }
  ],
  sequences: [{ schema: "string", name: "string", type: "string", start: "string", increment: "string", min: "string", max: "string", cache: "string", cycle: "boolean", ownedBy: "string?" }],
  tables: [
    {
      schema: "string",
      name: "string",
      kind: "string",
      unlogged: "boolean",
      options: "strings?",
      partitionKey: "string?",
      partitionOf: "string?",
      partitionBound: "string?",
      inherits: "strings",
      columns: [COLUMN],
      constraints: [{ name: "string", type: "string", def: "string" }],
      indexes: [INDEX],
      rls: { enabled: "boolean", forced: "boolean" },
      policies: [{ name: "string", command: "string", permissive: "boolean", roles: "strings", using: "string?", check: "string?" }],
      triggers: [{ name: "string", def: "string", enabled: "string" }]
    }
  ],
  views: [{ schema: "string", name: "string", materialized: "boolean", options: "strings?", def: "string", indexes: [INDEX], dependsOn: "strings" }],
  functions: [{ schema: "string", name: "string", args: "string", kind: "string", language: "string", def: "string?" }],
  roles: "strings",
  platform: { authUsers: [{ name: "string", type: "string" }], triggers: [{ table: "string", name: "string", def: "string" }], policies: [{ table: "string", name: "string" }] },
  migrations: { available: "boolean", versions: "strings" }
};

// packages/core/dist/snapshot/replay.js
var import_libpg_query4 = __toESM(require_wasm(), 1);
var NEAR_MS = 12 * 3600 * 1e3;
var encoder3 = new TextEncoder();
var decoder2 = new TextDecoder();

// packages/core/dist/snapshot/sql.js
var SNAPSHOT_PLATFORM_SCHEMAS = [
  "auth",
  "storage",
  "realtime",
  "_realtime",
  "supabase_functions",
  "supabase_migrations",
  "extensions",
  "graphql",
  "graphql_public",
  "pgbouncer",
  "pgsodium",
  "pgsodium_masks",
  "vault",
  "net",
  "cron",
  "_analytics",
  "_supavisor"
];
var platformList = SNAPSHOT_PLATFORM_SCHEMAS.map((s5) => `'${s5}'`).join(", ");
var SNAPSHOT_SQL = `with
app as (
  select n.oid, n.nspname from pg_catalog.pg_namespace n
  where n.nspname not like 'pg\\_%' and n.nspname <> 'information_schema' and n.nspname not in (${platformList})
    and pg_catalog.pg_get_userbyid(n.nspowner) not like 'supabase\\_%'
    and not exists (select 1 from pg_catalog.pg_depend d where d.classid = 'pg_catalog.pg_namespace'::regclass and d.objid = n.oid and d.deptype = 'e')
),
skipped as (
  select n.nspname from pg_catalog.pg_namespace n
  where n.nspname not like 'pg\\_%' and n.nspname <> 'information_schema' and n.nspname not in (select nspname from app)
),
extmember as (
  select d.classid, d.objid from pg_catalog.pg_depend d where d.deptype = 'e'
),
rels as (
  select c.oid, c.relname, c.relkind, c.relpersistence, c.relrowsecurity, c.relforcerowsecurity, c.relispartition, c.reloptions, a.nspname
  from pg_catalog.pg_class c join app a on a.oid = c.relnamespace
  where c.relkind in ('r', 'p', 'v', 'm', 'S', 'f')
    and not exists (select 1 from extmember e where e.classid = 'pg_catalog.pg_class'::regclass and e.objid = c.oid)
),
cols as (
  select r.oid as relid, jsonb_agg(jsonb_build_object(
      'name', att.attname,
      'type', pg_catalog.format_type(att.atttypid, att.atttypmod),
      'notNull', att.attnotnull,
      'default', case when att.attgenerated = '' then pg_catalog.pg_get_expr(ad.adbin, ad.adrelid) end,
      'generated', case when att.attgenerated <> '' then jsonb_build_object('expr', pg_catalog.pg_get_expr(ad.adbin, ad.adrelid), 'stored', att.attgenerated = 's') end,
      'identity', nullif(att.attidentity, ''),
      'collation', case when att.attcollation <> t.typcollation and att.attcollation <> 0 then (select pg_catalog.quote_ident(cn.nspname) || '.' || pg_catalog.quote_ident(co.collname) from pg_catalog.pg_collation co join pg_catalog.pg_namespace cn on cn.oid = co.collnamespace where co.oid = att.attcollation) end
    ) order by att.attnum) as cols
  from rels r
  join pg_catalog.pg_attribute att on att.attrelid = r.oid and att.attnum > 0 and not att.attisdropped
  join pg_catalog.pg_type t on t.oid = att.atttypid
  left join pg_catalog.pg_attrdef ad on ad.adrelid = att.attrelid and ad.adnum = att.attnum
  where r.relkind in ('r', 'p', 'f')
  group by r.oid
),
cons as (
  select con.conrelid as relid, jsonb_agg(jsonb_build_object('name', con.conname, 'type', con.contype, 'def', pg_catalog.pg_get_constraintdef(con.oid)) order by con.oid) as cons
  from pg_catalog.pg_constraint con join rels r on r.oid = con.conrelid
  where con.contype in ('p', 'u', 'f', 'c', 'x') and con.conparentid = 0
  group by con.conrelid
),
idx as (
  select i.indrelid as relid, jsonb_agg(jsonb_build_object('name', ic.relname, 'def', pg_catalog.pg_get_indexdef(i.indexrelid)) order by i.indexrelid) as idx
  from pg_catalog.pg_index i join pg_catalog.pg_class ic on ic.oid = i.indexrelid join rels r on r.oid = i.indrelid
  where not exists (select 1 from pg_catalog.pg_constraint con where con.conindid = i.indexrelid and con.contype in ('p', 'u', 'x'))
    and not exists (select 1 from pg_catalog.pg_inherits inh where inh.inhrelid = i.indexrelid)
  group by i.indrelid
),
pols as (
  select p.polrelid as relid, jsonb_agg(jsonb_build_object(
      'name', p.polname,
      'command', case p.polcmd when 'r' then 'SELECT' when 'a' then 'INSERT' when 'w' then 'UPDATE' when 'd' then 'DELETE' else 'ALL' end,
      'permissive', p.polpermissive,
      'roles', (select coalesce(jsonb_agg(case when x = 0 then 'public' else pg_catalog.pg_get_userbyid(x) end order by 1), '[]'::jsonb) from unnest(p.polroles) as x),
      'using', pg_catalog.pg_get_expr(p.polqual, p.polrelid),
      'check', pg_catalog.pg_get_expr(p.polwithcheck, p.polrelid)
    ) order by p.polname) as pols
  from pg_catalog.pg_policy p join rels r on r.oid = p.polrelid
  group by p.polrelid
),
trg as (
  select tg.tgrelid as relid, jsonb_agg(jsonb_build_object('name', tg.tgname, 'def', pg_catalog.pg_get_triggerdef(tg.oid), 'enabled', tg.tgenabled) order by tg.tgname) as trg
  from pg_catalog.pg_trigger tg join rels r on r.oid = tg.tgrelid
  where not tg.tgisinternal
  group by tg.tgrelid
),
tables as (
  select coalesce(jsonb_agg(jsonb_build_object(
      'schema', r.nspname,
      'name', r.relname,
      'kind', case r.relkind when 'p' then 'partitioned' when 'f' then 'foreign' else 'table' end,
      'unlogged', r.relpersistence = 'u',
      'options', r.reloptions,
      'partitionKey', case when r.relkind = 'p' then pg_catalog.pg_get_partkeydef(r.oid) end,
      'partitionOf', (select pg_catalog.quote_ident(pn.nspname) || '.' || pg_catalog.quote_ident(pc.relname) from pg_catalog.pg_inherits inh join pg_catalog.pg_class pc on pc.oid = inh.inhparent join pg_catalog.pg_namespace pn on pn.oid = pc.relnamespace where inh.inhrelid = r.oid and r.relispartition),
      'partitionBound', case when r.relispartition then (select pg_catalog.pg_get_expr(c2.relpartbound, c2.oid) from pg_catalog.pg_class c2 where c2.oid = r.oid) end,
      'inherits', (select coalesce(jsonb_agg(pg_catalog.quote_ident(pn.nspname) || '.' || pg_catalog.quote_ident(pc.relname) order by inh.inhseqno), '[]'::jsonb) from pg_catalog.pg_inherits inh join pg_catalog.pg_class pc on pc.oid = inh.inhparent join pg_catalog.pg_namespace pn on pn.oid = pc.relnamespace where inh.inhrelid = r.oid and not r.relispartition),
      'columns', coalesce(cols.cols, '[]'::jsonb),
      'constraints', coalesce(cons.cons, '[]'::jsonb),
      'indexes', coalesce(idx.idx, '[]'::jsonb),
      'rls', jsonb_build_object('enabled', r.relrowsecurity, 'forced', r.relforcerowsecurity),
      'policies', coalesce(pols.pols, '[]'::jsonb),
      'triggers', coalesce(trg.trg, '[]'::jsonb)
    ) order by r.nspname, r.relname), '[]'::jsonb) as v
  from rels r
  left join cols on cols.relid = r.oid left join cons on cons.relid = r.oid left join idx on idx.relid = r.oid
  left join pols on pols.relid = r.oid left join trg on trg.relid = r.oid
  where r.relkind in ('r', 'p', 'f')
),
views as (
  select coalesce(jsonb_agg(jsonb_build_object(
      'schema', r.nspname,
      'name', r.relname,
      'materialized', r.relkind = 'm',
      'options', r.reloptions,
      'def', pg_catalog.pg_get_viewdef(r.oid),
      'indexes', coalesce(idx.idx, '[]'::jsonb),
      'dependsOn', (select coalesce(jsonb_agg(distinct pg_catalog.quote_ident(dn.nspname) || '.' || pg_catalog.quote_ident(dc.relname)), '[]'::jsonb)
                    from pg_catalog.pg_rewrite rw join pg_catalog.pg_depend d on d.classid = 'pg_catalog.pg_rewrite'::regclass and d.objid = rw.oid
                    join pg_catalog.pg_class dc on d.refclassid = 'pg_catalog.pg_class'::regclass and dc.oid = d.refobjid and dc.oid <> r.oid and dc.relkind in ('v', 'm')
                    join pg_catalog.pg_namespace dn on dn.oid = dc.relnamespace
                    where rw.ev_class = r.oid)
    ) order by r.nspname, r.relname), '[]'::jsonb) as v
  from rels r left join idx on idx.relid = r.oid
  where r.relkind in ('v', 'm')
),
seqs as (
  select coalesce(jsonb_agg(jsonb_build_object(
      'schema', r.nspname,
      'name', r.relname,
      'type', pg_catalog.format_type(s.seqtypid, null),
      'start', s.seqstart::text, 'increment', s.seqincrement::text, 'min', s.seqmin::text, 'max', s.seqmax::text, 'cache', s.seqcache::text, 'cycle', s.seqcycle,
      'ownedBy', (select pg_catalog.quote_ident(tn.nspname) || '.' || pg_catalog.quote_ident(tc.relname) || '.' || pg_catalog.quote_ident(ta.attname)
                  from pg_catalog.pg_depend d join pg_catalog.pg_class tc on tc.oid = d.refobjid join pg_catalog.pg_namespace tn on tn.oid = tc.relnamespace
                  join pg_catalog.pg_attribute ta on ta.attrelid = d.refobjid and ta.attnum = d.refobjsubid
                  where d.classid = 'pg_catalog.pg_class'::regclass and d.objid = r.oid and d.refclassid = 'pg_catalog.pg_class'::regclass and d.deptype = 'a' limit 1)
    ) order by r.nspname, r.relname), '[]'::jsonb) as v
  from rels r join pg_catalog.pg_sequence s on s.seqrelid = r.oid
  where r.relkind = 'S'
    and not exists (select 1 from pg_catalog.pg_depend d where d.classid = 'pg_catalog.pg_class'::regclass and d.objid = r.oid and d.deptype = 'i')
),
types as (
  select coalesce(jsonb_agg(jsonb_build_object(
      'schema', a.nspname,
      'name', t.typname,
      'kind', case t.typtype when 'e' then 'enum' when 'd' then 'domain' when 'c' then 'composite' when 'r' then 'range' end,
      'labels', case when t.typtype = 'e' then (select jsonb_agg(e.enumlabel order by e.enumsortorder) from pg_catalog.pg_enum e where e.enumtypid = t.oid) end,
      'baseType', case when t.typtype = 'd' then pg_catalog.format_type(t.typbasetype, t.typtypmod) end,
      'notNull', case when t.typtype = 'd' then t.typnotnull end,
      'default', case when t.typtype = 'd' then t.typdefault end,
      'constraints', case when t.typtype = 'd' then (select coalesce(jsonb_agg(jsonb_build_object('name', con.conname, 'def', pg_catalog.pg_get_constraintdef(con.oid)) order by con.conname), '[]'::jsonb) from pg_catalog.pg_constraint con where con.contypid = t.oid) end,
      'attributes', case when t.typtype = 'c' then (select jsonb_agg(jsonb_build_object('name', att.attname, 'type', pg_catalog.format_type(att.atttypid, att.atttypmod)) order by att.attnum) from pg_catalog.pg_attribute att where att.attrelid = t.typrelid and att.attnum > 0 and not att.attisdropped) end,
      'subtype', case when t.typtype = 'r' then (select pg_catalog.format_type(rg.rngsubtype, null) from pg_catalog.pg_range rg where rg.rngtypid = t.oid) end
    ) order by a.nspname, t.typname), '[]'::jsonb) as v
  from pg_catalog.pg_type t join app a on a.oid = t.typnamespace
  where t.typtype in ('e', 'd', 'r', 'c')
    and (t.typtype <> 'c' or (select c.relkind from pg_catalog.pg_class c where c.oid = t.typrelid) = 'c')
    and not exists (select 1 from extmember e where e.classid = 'pg_catalog.pg_type'::regclass and e.objid = t.oid)
),
funcs as (
  select coalesce(jsonb_agg(jsonb_build_object(
      'schema', a.nspname,
      'name', p.proname,
      'args', pg_catalog.pg_get_function_identity_arguments(p.oid),
      'kind', p.prokind,
      'language', l.lanname,
      'def', case when p.prokind <> 'a' then pg_catalog.pg_get_functiondef(p.oid) end
    ) order by a.nspname, p.proname, pg_catalog.pg_get_function_identity_arguments(p.oid)), '[]'::jsonb) as v
  from pg_catalog.pg_proc p join app a on a.oid = p.pronamespace join pg_catalog.pg_language l on l.oid = p.prolang
  where not exists (select 1 from extmember e where e.classid = 'pg_catalog.pg_proc'::regclass and e.objid = p.oid)
),
exts as (
  select coalesce(jsonb_agg(jsonb_build_object(
      'name', x.extname,
      'version', x.extversion,
      'schema', xn.nspname,
      'types', (select coalesce(jsonb_agg(distinct t.typname), '[]'::jsonb) from pg_catalog.pg_depend d join pg_catalog.pg_type t on t.oid = d.objid where d.classid = 'pg_catalog.pg_type'::regclass and d.refclassid = 'pg_catalog.pg_extension'::regclass and d.refobjid = x.oid and d.deptype = 'e' and t.typtype <> 'p' and t.typelem = 0)
    ) order by x.extname), '[]'::jsonb) as v
  from pg_catalog.pg_extension x join pg_catalog.pg_namespace xn on xn.oid = x.extnamespace
),
platform as (
  select jsonb_build_object(
    'authUsers', (select coalesce(jsonb_agg(jsonb_build_object('name', att.attname, 'type', pg_catalog.format_type(att.atttypid, att.atttypmod)) order by att.attnum), '[]'::jsonb)
                  from pg_catalog.pg_attribute att where att.attrelid = pg_catalog.to_regclass('auth.users') and att.attnum > 0 and not att.attisdropped),
    'triggers', (select coalesce(jsonb_agg(jsonb_build_object('table', pg_catalog.quote_ident(tn.nspname) || '.' || pg_catalog.quote_ident(tc.relname), 'name', tg.tgname, 'def', pg_catalog.pg_get_triggerdef(tg.oid)) order by tn.nspname, tc.relname, tg.tgname), '[]'::jsonb)
                 from pg_catalog.pg_trigger tg join pg_catalog.pg_class tc on tc.oid = tg.tgrelid join pg_catalog.pg_namespace tn on tn.oid = tc.relnamespace
                 join pg_catalog.pg_proc fp on fp.oid = tg.tgfoid join app fa on fa.oid = fp.pronamespace
                 where not tg.tgisinternal and tn.nspname in ('auth', 'storage')),
    'policies', (select coalesce(jsonb_agg(jsonb_build_object('table', pg_catalog.quote_ident(pn.nspname) || '.' || pg_catalog.quote_ident(pc.relname), 'name', p.polname) order by pn.nspname, pc.relname, p.polname), '[]'::jsonb)
                 from pg_catalog.pg_policy p join pg_catalog.pg_class pc on pc.oid = p.polrelid join pg_catalog.pg_namespace pn on pn.oid = pc.relnamespace
                 where pn.nspname in ('auth', 'storage'))
  ) as v
),
roles as (
  select coalesce(jsonb_agg(distinct pg_catalog.pg_get_userbyid(x)), '[]'::jsonb) as v
  from pg_catalog.pg_policy p join rels r on r.oid = p.polrelid, unnest(p.polroles) as x where x <> 0
),
migrations as (
  select case when pg_catalog.to_regclass('supabase_migrations.schema_migrations') is null then null
    else (select coalesce(jsonb_agg(v.version order by v.version), '[]'::jsonb) from (
            select (xpath('/row/version/text()', r))[1]::text as version
            from unnest(xpath('/table/row', pg_catalog.query_to_xml('select version from supabase_migrations.schema_migrations', false, false, ''))) as r) v)
    end as v
),
snap as (
  select jsonb_build_object(
    'format', 'pggate-snapshot',
    'version', 1,
    'server', jsonb_build_object('versionNum', pg_catalog.current_setting('server_version_num')::int, 'version', pg_catalog.version()),
    'capturedAt', pg_catalog.to_char(pg_catalog.now() at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
    'searchPath', pg_catalog.current_setting('search_path'),
    'schemas', (select coalesce(jsonb_agg(nspname order by nspname), '[]'::jsonb) from app),
    'skippedSchemas', (select coalesce(jsonb_agg(nspname order by nspname), '[]'::jsonb) from skipped),
    'extensions', (select v from exts),
    'types', (select v from types),
    'sequences', (select v from seqs),
    'tables', (select v from tables),
    'views', (select v from views),
    'functions', (select v from funcs),
    'roles', (select v from roles),
    'platform', (select v from platform),
    'migrations', jsonb_build_object('available', (select v from migrations) is not null, 'versions', coalesce((select v from migrations), '[]'::jsonb))
  )::text as s
)
select s as snapshot, pg_catalog.length(s) as length, pg_catalog.md5(s) as md5 from snap`;

// packages/core/dist/secrets/patterns.json
var patterns_default = [
  {
    id: "github-token",
    source: "\\b(gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\\b",
    flags: "g",
    what: "GitHub token",
    redact: true
  },
  {
    id: "cloudflare-token",
    source: `\\b(cfut_[A-Za-z0-9]{20,}|[A-Za-z0-9_-]{40}(?=["'\\s]*\\s*#?\\s*cloudflare))`,
    flags: "gi",
    what: "Cloudflare API token",
    redact: true
  },
  {
    id: "lemonsqueezy-key",
    source: "\\b(eyJ0eXAiOiJKV1Qi[A-Za-z0-9._-]{40,}|[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12})\\b",
    flags: "g",
    what: "Lemon Squeezy API key / license key (UUID-shaped, upper-case)",
    redact: true,
    redactSource: "\\b(eyJ0eXAiOiJKV1Qi[A-Za-z0-9._-]{40,})\\b"
  },
  {
    id: "aws-key",
    source: "\\b(AKIA|ASIA)[A-Z0-9]{16}\\b",
    flags: "g",
    what: "AWS access key id",
    redact: true
  },
  {
    id: "private-key",
    source: "-----BEGIN [A-Z ]*PRIVATE KEY-----",
    flags: "g",
    what: "private key block",
    redact: true
  },
  {
    id: "slack-token",
    source: "\\bxox[abpors]-[A-Za-z0-9-]{10,}\\b",
    flags: "g",
    what: "Slack token",
    redact: true
  },
  {
    id: "stripe-key",
    source: "\\b(sk|rk)_(live|test)_[A-Za-z0-9]{16,}\\b",
    flags: "g",
    what: "Stripe key",
    redact: true
  },
  {
    id: "jwt",
    source: "\\beyJ[A-Za-z0-9_-]{10,}\\.eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}\\b",
    flags: "g",
    what: "JWT (Supabase anon / service_role keys are JWTs)",
    redact: true
  },
  {
    id: "supabase-key",
    source: "\\bsb_(secret|publishable)_[A-Za-z0-9_-]{20,}\\b",
    flags: "g",
    what: "Supabase API key",
    redact: true
  },
  {
    id: "dsn-password",
    source: "\\b(postgres(?:ql)?|mysql|mongodb(?:\\+srv)?|redis):\\/\\/[^\\s:@/'\"`]+:[^\\s@/'\"`]+@[^\\s'\"`]+",
    flags: "g",
    what: "connection string with a password",
    redact: true
  },
  {
    id: "password-assign",
    source: `\\b(password|passwd|pwd|secret|api[_-]?key|access[_-]?token)\\s*[:=]\\s*['"]?[^\\s'"\`,;)]{6,}`,
    flags: "gi",
    what: "password / secret assignment",
    redact: true
  },
  {
    id: "env-password",
    source: "\\b[A-Z0-9_]*(PASSWORD|SECRET|TOKEN|API_KEY)=[^\\s'\"`]{4,}",
    flags: "g",
    what: "secret in an env assignment",
    redact: true
  }
];

// packages/core/dist/secrets/redact.js
var REDACT = patterns_default.filter((p6) => p6.redact).map((p6) => new RegExp(p6.redactSource ?? p6.source, p6.flags.includes("g") ? p6.flags : `${p6.flags}g`));

// packages/adapters/pglite/dist/index.js
var quoteIdent2 = (s5) => `"${s5.replace(/"/g, '""')}"`;
function explainSql(sql, options) {
  const flags2 = ["FORMAT JSON"];
  if (options.analyze)
    flags2.push("ANALYZE");
  if (options.buffers)
    flags2.push("BUFFERS");
  return `EXPLAIN (${flags2.join(", ")}) ${sql}`;
}
function sessionOf(q3) {
  return {
    async query(sql, params = []) {
      const result = await q3.query(sql, [...params]);
      return { rows: result.rows, rowCount: result.rows.length };
    },
    async exec(sql) {
      await q3.exec(sql);
    },
    async explain(sql, options = {}) {
      const result = await q3.query(explainSql(sql, options));
      return parseExplainJson(result.rows[0]?.["QUERY PLAN"]);
    },
    async copy(schema, table, columns, csv) {
      const target = `${quoteIdent2(schema)}.${quoteIdent2(table)}`;
      const cols = columns.map(quoteIdent2).join(", ");
      const result = await q3.query(`copy ${target} (${cols}) from '/dev/blob' with (format csv)`, [], { blob: new Blob(typeof csv === "string" ? [csv] : [...csv]) });
      return result.affectedRows ?? 0;
    }
  };
}
var RESET_SQL = `
do $$
declare
  s text;
begin
  for s in select nspname from pg_catalog.pg_namespace where nspname not like 'pg\\_%' and nspname <> 'information_schema' loop
    execute pg_catalog.format('drop schema if exists %I cascade', s);
  end loop;
end
$$;
create schema public;
grant usage on schema public to public;
reset all;
`;
var PgliteBackend = class _PgliteBackend {
  db;
  kind = "pglite";
  session;
  constructor(db2) {
    this.db = db2;
    this.session = sessionOf(db2);
  }
  static async create(options = {}) {
    const extensions2 = options.extensions === false ? {} : { pgcrypto: i2, uuid_ossp: o5, pg_trgm: p5, btree_gist: a2, vector: i3 };
    const db2 = await Ye3.create({
      extensions: extensions2,
      ...options.dataDir !== void 0 ? { dataDir: options.dataDir } : {},
      ...options.fs !== void 0 ? { fs: options.fs } : {}
    });
    return new _PgliteBackend(db2);
  }
  query(sql, params = []) {
    return this.session.query(sql, params);
  }
  exec(sql) {
    return this.session.exec(sql);
  }
  explain(sql, options = {}) {
    return this.session.explain(sql, options);
  }
  copy(schema, table, columns, csv) {
    return this.session.copy(schema, table, columns, csv);
  }
  /**
   * `COPY … FROM '<path>'`，path 是 PGlite 裡看得到的路徑（dataDir 掛在 data_directory 底下）。node 的 worker 用：
   * csv 一段一段寫進 dataDir 裡的檔，Postgres 自己從磁碟讀，記憶體裡不必有整份（DECISIONS #125）。與 /dev/blob 一樣是一句 COPY。
   */
  async copyFromFile(schema, table, columns, path) {
    const target = `${quoteIdent2(schema)}.${quoteIdent2(table)}`;
    const cols = columns.map(quoteIdent2).join(", ");
    const result = await this.db.query(`copy ${target} (${cols}) from '${path.replace(/'/g, "''")}' with (format csv)`);
    return result.affectedRows ?? 0;
  }
  /** PGlite 裡的 data_directory（dataDir 掛載的位置） */
  async dataDirectory() {
    const r2 = await this.db.query("show data_directory");
    return r2.rows[0]?.data_directory ?? "/pglite/data";
  }
  transaction(fn2) {
    return this.db.transaction((tx) => fn2(sessionOf(tx)));
  }
  async reset() {
    await this.db.exec(RESET_SQL);
  }
  async close() {
    await this.db.close();
  }
};

// packages/adapters/pglite/dist/serve.js
function errorOf(err2) {
  if (err2 instanceof Error) {
    const e = err2;
    const extra = {};
    for (const k4 of ["position", "code", "detail", "hint", "severity", "where"])
      if (e[k4] !== void 0)
        extra[k4] = e[k4];
    return { message: err2.message, extra };
  }
  return { message: String(err2), extra: {} };
}
var SESSION_SETTINGS = `select name, current_setting(name) as value from pg_catalog.pg_settings where source = 'session' order by name`;
async function handle2(db2, copy2, req) {
  switch (req.op) {
    case "copy-part":
      return void 0;
    case "copy-end":
      return copy2.end(db2, req.stream, req.schema, req.table, req.columns);
    case "query":
      return db2.query(req.sql, req.params ?? []);
    case "exec":
      return db2.exec(req.sql);
    case "explain":
      return db2.explain(req.sql, req.options);
    case "checkpoint":
      return db2.exec("checkpoint");
    case "settings":
      return (await db2.query(SESSION_SETTINGS)).rows;
    case "reset":
      return db2.reset();
    case "close":
      await db2.close();
      return void 0;
  }
}
function serve(db2, copy2, determinism2, post) {
  return (req) => {
    if (req.op === "copy-part") {
      copy2.part(req.stream, req.part);
      return;
    }
    handle2(db2, copy2, req).then((value) => post({ id: req.id, ok: true, value, clock: determinism2.clock() }), (err2) => post({ id: req.id, ok: false, error: errorOf(err2), clock: determinism2.clock() }));
  };
}
function readyMessage(determinism2) {
  return { id: 0, ok: true, value: "ready", clock: determinism2.clock() };
}

// packages/adapters/pglite/dist/node-worker.js
var port = parentPort;
if (!port)
  throw new Error("node-worker.js must run in a worker thread");
var { dataDir, extensions, clock, generation } = workerData;
var determinism = installDeterminism({ clock, generation }, { node: crypto2 });
var db = await PgliteBackend.create({ dataDir, extensions });
var copyFile = (stream) => `pggate_copy_${stream}.csv`;
var pgDataDirectory;
var copy = {
  part(stream, part) {
    appendFileSync(join2(dataDir, copyFile(stream)), part);
  },
  async end(pg, stream, schema, table, columns) {
    const name2 = copyFile(stream);
    appendFileSync(join2(dataDir, name2), "");
    try {
      pgDataDirectory ??= await pg.dataDirectory();
      return await pg.copyFromFile(schema, table, columns, `${pgDataDirectory}/${name2}`);
    } finally {
      rmSync(join2(dataDir, name2), { force: true });
    }
  }
};
port.on("message", serve(db, copy, determinism, (m7) => port.postMessage(m7)));
port.postMessage(readyMessage(determinism));
