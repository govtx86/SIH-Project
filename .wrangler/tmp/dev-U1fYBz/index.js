var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  } catch (e4) {
    throw err = [e4], e4;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e4) => e4.name !== markName) : this._entries.filter((e4) => e4.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e4) => e4.name !== measureName) : this._entries.filter((e4) => e4.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e4) => e4.entryType !== "resource" || e4.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e4) => e4.name === name && (!type || e4.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e4) => e4.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn2) {
        return fn2;
      }
      runInAsyncScope(fn2, thisArg, ...args) {
        return fn2.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x5, y3, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd3) {
        this.#cwd = cwd3;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert2, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .output/server/chunks/_/shared.esm-bundler.mjs
function makeMap(e4) {
  const t12 = /* @__PURE__ */ Object.create(null);
  for (const a8 of e4.split(",")) t12[a8] = 1;
  return (e5) => e5 in t12;
}
function generateCodeFrame(e4, t12 = 0, a8 = e4.length) {
  if ((t12 = Math.max(0, Math.min(t12, e4.length))) > (a8 = Math.max(0, Math.min(a8, e4.length)))) return "";
  let n5 = e4.split(/(\r?\n)/);
  const r6 = n5.filter((e5, t13) => t13 % 2 == 1);
  n5 = n5.filter((e5, t13) => t13 % 2 == 0);
  let o7 = 0;
  const i4 = [];
  for (let e5 = 0; e5 < n5.length; e5++) if (o7 += n5[e5].length + (r6[e5] && r6[e5].length || 0), o7 >= t12) {
    for (let s6 = e5 - 2; s6 <= e5 + 2 || a8 > o7; s6++) {
      if (s6 < 0 || s6 >= n5.length) continue;
      const l5 = s6 + 1;
      i4.push(`${l5}${" ".repeat(Math.max(3 - String(l5).length, 0))}|  ${n5[s6]}`);
      const c4 = n5[s6].length, p5 = r6[s6] && r6[s6].length || 0;
      if (s6 === e5) {
        const e6 = t12 - (o7 - (c4 + p5)), n6 = Math.max(1, a8 > o7 ? c4 - e6 : a8 - t12);
        i4.push("   |  " + " ".repeat(e6) + "^".repeat(n6));
      } else if (s6 > e5) {
        if (a8 > o7) {
          const e6 = Math.max(Math.min(a8 - o7, c4), 1);
          i4.push("   |  " + "^".repeat(e6));
        }
        o7 += c4 + p5;
      }
    }
    break;
  }
  return i4.join("\n");
}
function normalizeStyle(e4) {
  if (o(e4)) {
    const t12 = {};
    for (let a8 = 0; a8 < e4.length; a8++) {
      const n5 = e4[a8], r6 = isString(n5) ? parseStringStyle(n5) : normalizeStyle(n5);
      if (r6) for (const e5 in r6) t12[e5] = r6[e5];
    }
    return t12;
  }
  if (isString(e4) || isObject(e4)) return e4;
}
function parseStringStyle(e4) {
  const t12 = {};
  return e4.replace(k, "").split(A).forEach((e5) => {
    if (e5) {
      const a8 = e5.split(T);
      a8.length > 1 && (t12[a8[0].trim()] = a8[1].trim());
    }
  }), t12;
}
function stringifyStyle(e4) {
  if (!e4) return "";
  if (isString(e4)) return e4;
  let t12 = "";
  for (const a8 in e4) {
    const n5 = e4[a8];
    if (isString(n5) || "number" == typeof n5) {
      t12 += `${a8.startsWith("--") ? a8 : d(a8)}:${n5};`;
    }
  }
  return t12;
}
function normalizeClass(e4) {
  let t12 = "";
  if (isString(e4)) t12 = e4;
  else if (o(e4)) for (let a8 = 0; a8 < e4.length; a8++) {
    const n5 = normalizeClass(e4[a8]);
    n5 && (t12 += n5 + " ");
  }
  else if (isObject(e4)) for (const a8 in e4) e4[a8] && (t12 += a8 + " ");
  return t12.trim();
}
function normalizeProps(e4) {
  if (!e4) return null;
  let { class: t12, style: a8 } = e4;
  return t12 && !isString(t12) && (e4.class = normalizeClass(t12)), a8 && (e4.style = normalizeStyle(a8)), e4;
}
function includeBooleanAttr(e4) {
  return !!e4 || "" === e4;
}
function isSSRSafeAttrName(e4) {
  if (L.hasOwnProperty(e4)) return L[e4];
  const t12 = _.test(e4);
  return t12 && console.error(`unsafe attribute name: ${e4}`), L[e4] = !t12;
}
function isRenderableAttrValue(e4) {
  if (null == e4) return false;
  const t12 = typeof e4;
  return "string" === t12 || "number" === t12 || "boolean" === t12;
}
function escapeHtml(e4) {
  const t12 = "" + e4, a8 = z.exec(t12);
  if (!a8) return t12;
  let n5, r6, o7 = "", i4 = 0;
  for (r6 = a8.index; r6 < t12.length; r6++) {
    switch (t12.charCodeAt(r6)) {
      case 34:
        n5 = "&quot;";
        break;
      case 38:
        n5 = "&amp;";
        break;
      case 39:
        n5 = "&#39;";
        break;
      case 60:
        n5 = "&lt;";
        break;
      case 62:
        n5 = "&gt;";
        break;
      default:
        continue;
    }
    i4 !== r6 && (o7 += t12.slice(i4, r6)), i4 = r6 + 1, o7 += n5;
  }
  return i4 !== r6 ? o7 + t12.slice(i4, r6) : o7;
}
function escapeHtmlComment(e4) {
  let t12;
  do {
    t12 = e4, e4 = e4.replace(I, "");
  } while (e4 !== t12);
  return e4;
}
function looseCompareCollections(e4, t12) {
  if (e4.size !== t12.size) return false;
  const a8 = Array.from(t12), n5 = new Uint8Array(a8.length);
  for (const t13 of e4) {
    let e5 = -1;
    for (let r6 = 0; r6 < a8.length; r6++) if (!n5[r6] && looseEqual(t13, a8[r6])) {
      e5 = r6;
      break;
    }
    if (e5 < 0) return false;
    n5[e5] = 1;
  }
  return true;
}
function looseEqual(e4, t12) {
  if (e4 === t12) return true;
  let a8 = isDate(e4), n5 = isDate(t12);
  if (a8 || n5) return !(!a8 || !n5) && e4.getTime() === t12.getTime();
  if (a8 = isSymbol(e4), n5 = isSymbol(t12), a8 || n5) return e4 === t12;
  if (a8 = o(e4), n5 = o(t12), a8 || n5) return !(!a8 || !n5) && (function(e5, t13) {
    if (e5.length !== t13.length) return false;
    let a9 = true;
    for (let n6 = 0; a9 && n6 < e5.length; n6++) a9 = looseEqual(e5[n6], t13[n6]);
    return a9;
  })(e4, t12);
  if (a8 = isObject(e4), n5 = isObject(t12), a8 || n5) {
    if (!a8 || !n5) return false;
    if (a8 = isMap(e4), n5 = isMap(t12), a8 || n5) return !(!a8 || !n5) && looseCompareCollections(e4, t12);
    if (a8 = isSet(e4), n5 = isSet(t12), a8 || n5) return !(!a8 || !n5) && looseCompareCollections(e4, t12);
    if (Object.keys(e4).length !== Object.keys(t12).length) return false;
    for (const a9 in e4) {
      const n6 = e4.hasOwnProperty(a9), r6 = t12.hasOwnProperty(a9);
      if (n6 && !r6 || !n6 && r6 || !looseEqual(e4[a9], t12[a9])) return false;
    }
  }
  return String(e4) === String(t12);
}
function looseIndexOf(e4, t12) {
  return e4.findIndex((e5) => looseEqual(e5, t12));
}
function normalizeCssVarValue(e4) {
  return null == e4 ? "initial" : "string" == typeof e4 ? "" === e4 ? " " : e4 : String(e4);
}
var t, a, NOOP, NO, isOn, isModelListener, n, remove, r, hasOwn, o, isMap, isSet, isDate, isRegExp, isFunction, isString, isSymbol, isObject, isPromise, i, toTypeString, toRawType, isPlainObject, isIntegerKey, s, l, cacheStringFunction, c, p, m, d, f, u, hasChanged, invokeArrayFns, def, looseToNumber, toNumber, g, getGlobalThis, h, y, b, E, S, A, T, k, N, O, C, M, x, v, R, _, L, P, w, D, F, z, I, U, isRef, toDisplayString, replacer, stringifySymbol, j;
var init_shared_esm_bundler = __esm({
  ".output/server/chunks/_/shared.esm-bundler.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    __name(makeMap, "makeMap");
    t = {};
    a = [];
    NOOP = /* @__PURE__ */ __name(() => {
    }, "NOOP");
    NO = /* @__PURE__ */ __name(() => false, "NO");
    isOn = /* @__PURE__ */ __name((e4) => 111 === e4.charCodeAt(0) && 110 === e4.charCodeAt(1) && (e4.charCodeAt(2) > 122 || e4.charCodeAt(2) < 97), "isOn");
    isModelListener = /* @__PURE__ */ __name((e4) => e4.startsWith("onUpdate:"), "isModelListener");
    n = Object.assign;
    remove = /* @__PURE__ */ __name((e4, t12) => {
      const a8 = e4.indexOf(t12);
      a8 > -1 && e4.splice(a8, 1);
    }, "remove");
    r = Object.prototype.hasOwnProperty;
    hasOwn = /* @__PURE__ */ __name((e4, t12) => r.call(e4, t12), "hasOwn");
    o = Array.isArray;
    isMap = /* @__PURE__ */ __name((e4) => "[object Map]" === toTypeString(e4), "isMap");
    isSet = /* @__PURE__ */ __name((e4) => "[object Set]" === toTypeString(e4), "isSet");
    isDate = /* @__PURE__ */ __name((e4) => "[object Date]" === toTypeString(e4), "isDate");
    isRegExp = /* @__PURE__ */ __name((e4) => "[object RegExp]" === toTypeString(e4), "isRegExp");
    isFunction = /* @__PURE__ */ __name((e4) => "function" == typeof e4, "isFunction");
    isString = /* @__PURE__ */ __name((e4) => "string" == typeof e4, "isString");
    isSymbol = /* @__PURE__ */ __name((e4) => "symbol" == typeof e4, "isSymbol");
    isObject = /* @__PURE__ */ __name((e4) => null !== e4 && "object" == typeof e4, "isObject");
    isPromise = /* @__PURE__ */ __name((e4) => (isObject(e4) || isFunction(e4)) && isFunction(e4.then) && isFunction(e4.catch), "isPromise");
    i = Object.prototype.toString;
    toTypeString = /* @__PURE__ */ __name((e4) => i.call(e4), "toTypeString");
    toRawType = /* @__PURE__ */ __name((e4) => toTypeString(e4).slice(8, -1), "toRawType");
    isPlainObject = /* @__PURE__ */ __name((e4) => "[object Object]" === toTypeString(e4), "isPlainObject");
    isIntegerKey = /* @__PURE__ */ __name((e4) => isString(e4) && "NaN" !== e4 && "-" !== e4[0] && "" + parseInt(e4, 10) === e4, "isIntegerKey");
    s = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    l = makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
    cacheStringFunction = /* @__PURE__ */ __name((e4) => {
      const t12 = /* @__PURE__ */ Object.create(null);
      return (a8) => t12[a8] || (t12[a8] = e4(a8));
    }, "cacheStringFunction");
    c = /-\w/g;
    p = cacheStringFunction((e4) => e4.replace(c, (e5) => e5.slice(1).toUpperCase()));
    m = /\B([A-Z])/g;
    d = cacheStringFunction((e4) => e4.replace(m, "-$1").toLowerCase());
    f = cacheStringFunction((e4) => e4.charAt(0).toUpperCase() + e4.slice(1));
    u = cacheStringFunction((e4) => e4 ? `on${f(e4)}` : "");
    hasChanged = /* @__PURE__ */ __name((e4, t12) => !Object.is(e4, t12), "hasChanged");
    invokeArrayFns = /* @__PURE__ */ __name((e4, ...t12) => {
      for (let a8 = 0; a8 < e4.length; a8++) e4[a8](...t12);
    }, "invokeArrayFns");
    def = /* @__PURE__ */ __name((e4, t12, a8, n5 = false) => {
      Object.defineProperty(e4, t12, { configurable: true, enumerable: false, writable: n5, value: a8 });
    }, "def");
    looseToNumber = /* @__PURE__ */ __name((e4) => {
      const t12 = parseFloat(e4);
      return isNaN(t12) ? e4 : t12;
    }, "looseToNumber");
    toNumber = /* @__PURE__ */ __name((e4) => {
      const t12 = isString(e4) ? Number(e4) : NaN;
      return isNaN(t12) ? e4 : t12;
    }, "toNumber");
    getGlobalThis = /* @__PURE__ */ __name(() => g || (g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== lr ? lr : {}), "getGlobalThis");
    h = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    y = { 1: "TEXT", 2: "CLASS", 4: "STYLE", 8: "PROPS", 16: "FULL_PROPS", 32: "NEED_HYDRATION", 64: "STABLE_FRAGMENT", 128: "KEYED_FRAGMENT", 256: "UNKEYED_FRAGMENT", 512: "NEED_PATCH", 1024: "DYNAMIC_SLOTS", 2048: "DEV_ROOT_FRAGMENT", [-1]: "CACHED", [-2]: "BAIL" };
    b = { 1: "STABLE", 2: "DYNAMIC", 3: "FORWARDED" };
    E = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
    S = E;
    __name(generateCodeFrame, "generateCodeFrame");
    __name(normalizeStyle, "normalizeStyle");
    A = /;(?![^(]*\))/g;
    T = /:([^]+)/;
    k = /\/\*[^]*?\*\//g;
    __name(parseStringStyle, "parseStringStyle");
    __name(stringifyStyle, "stringifyStyle");
    __name(normalizeClass, "normalizeClass");
    __name(normalizeProps, "normalizeProps");
    N = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot");
    O = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    C = makeMap("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics");
    M = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    x = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    v = makeMap(x);
    R = makeMap(x + ",async,autofocus,autoplay,controls,default,defer,disabled,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    __name(includeBooleanAttr, "includeBooleanAttr");
    _ = /[>/="'\u0009\u000a\u000c\u000d\u0020]/;
    L = {};
    __name(isSSRSafeAttrName, "isSSRSafeAttrName");
    P = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    w = makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
    D = makeMap("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
    F = makeMap("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");
    __name(isRenderableAttrValue, "isRenderableAttrValue");
    z = /["'&<>]/;
    __name(escapeHtml, "escapeHtml");
    I = /^(?:-?>)+|<!--|-->|--!>|<!-$/g;
    __name(escapeHtmlComment, "escapeHtmlComment");
    U = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
    __name(looseCompareCollections, "looseCompareCollections");
    __name(looseEqual, "looseEqual");
    __name(looseIndexOf, "looseIndexOf");
    isRef = /* @__PURE__ */ __name((e4) => !(!e4 || true !== e4.__v_isRef), "isRef");
    toDisplayString = /* @__PURE__ */ __name((e4) => isString(e4) ? e4 : null == e4 ? "" : o(e4) || isObject(e4) && (e4.toString === i || !isFunction(e4.toString)) ? isRef(e4) ? toDisplayString(e4.value) : JSON.stringify(e4, replacer, 2) : String(e4), "toDisplayString");
    replacer = /* @__PURE__ */ __name((e4, t12) => isRef(t12) ? replacer(e4, t12.value) : isMap(t12) ? { [`Map(${t12.size})`]: [...t12.entries()].reduce((e5, [t13, a8], n5) => (e5[stringifySymbol(t13, n5) + " =>"] = a8, e5), {}) } : isSet(t12) ? { [`Set(${t12.size})`]: [...t12.values()].map((e5) => stringifySymbol(e5)) } : isSymbol(t12) ? stringifySymbol(t12) : !isObject(t12) || o(t12) || isPlainObject(t12) ? t12 : String(t12), "replacer");
    stringifySymbol = /* @__PURE__ */ __name((e4, t12 = "") => {
      var a8;
      return isSymbol(e4) ? `Symbol(${null != (a8 = e4.description) ? a8 : t12})` : e4;
    }, "stringifySymbol");
    __name(normalizeCssVarValue, "normalizeCssVarValue");
    j = Object.freeze(Object.defineProperty({ __proto__: null, EMPTY_ARR: a, EMPTY_OBJ: t, NO, NOOP, PatchFlagNames: y, PatchFlags: { TEXT: 1, 1: "TEXT", CLASS: 2, 2: "CLASS", STYLE: 4, 4: "STYLE", PROPS: 8, 8: "PROPS", FULL_PROPS: 16, 16: "FULL_PROPS", NEED_HYDRATION: 32, 32: "NEED_HYDRATION", STABLE_FRAGMENT: 64, 64: "STABLE_FRAGMENT", KEYED_FRAGMENT: 128, 128: "KEYED_FRAGMENT", UNKEYED_FRAGMENT: 256, 256: "UNKEYED_FRAGMENT", NEED_PATCH: 512, 512: "NEED_PATCH", DYNAMIC_SLOTS: 1024, 1024: "DYNAMIC_SLOTS", DEV_ROOT_FRAGMENT: 2048, 2048: "DEV_ROOT_FRAGMENT", CACHED: -1, "-1": "CACHED", BAIL: -2, "-2": "BAIL" }, ShapeFlags: { ELEMENT: 1, 1: "ELEMENT", FUNCTIONAL_COMPONENT: 2, 2: "FUNCTIONAL_COMPONENT", STATEFUL_COMPONENT: 4, 4: "STATEFUL_COMPONENT", TEXT_CHILDREN: 8, 8: "TEXT_CHILDREN", ARRAY_CHILDREN: 16, 16: "ARRAY_CHILDREN", SLOTS_CHILDREN: 32, 32: "SLOTS_CHILDREN", TELEPORT: 64, 64: "TELEPORT", SUSPENSE: 128, 128: "SUSPENSE", COMPONENT_SHOULD_KEEP_ALIVE: 256, 256: "COMPONENT_SHOULD_KEEP_ALIVE", COMPONENT_KEPT_ALIVE: 512, 512: "COMPONENT_KEPT_ALIVE", COMPONENT: 6, 6: "COMPONENT" }, SlotFlags: { STABLE: 1, 1: "STABLE", DYNAMIC: 2, 2: "DYNAMIC", FORWARDED: 3, 3: "FORWARDED" }, camelize: p, capitalize: f, cssVarNameEscapeSymbolsRE: U, def, escapeHtml, escapeHtmlComment, extend: n, genCacheKey: /* @__PURE__ */ __name(function(e4, t12) {
      return e4 + JSON.stringify(t12, (e5, t13) => "function" == typeof t13 ? t13.toString() : t13);
    }, "genCacheKey"), genPropsAccessExp: /* @__PURE__ */ __name(function(e4) {
      return h.test(e4) ? `__props.${e4}` : `__props[${JSON.stringify(e4)}]`;
    }, "genPropsAccessExp"), generateCodeFrame, getEscapedCssVarName: /* @__PURE__ */ __name(function(e4, t12) {
      return e4.replace(U, (e5) => t12 ? '"' === e5 ? '\\\\\\"' : `\\\\${e5}` : `\\${e5}`);
    }, "getEscapedCssVarName"), getGlobalThis, hasChanged, hasOwn, hyphenate: d, includeBooleanAttr, invokeArrayFns, isArray: o, isBooleanAttr: R, isBuiltInDirective: l, isDate, isFunction, isGloballyAllowed: E, isGloballyWhitelisted: S, isHTMLTag: N, isIntegerKey, isKnownHtmlAttr: w, isKnownMathMLAttr: F, isKnownSvgAttr: D, isMap, isMathMLTag: C, isModelListener, isObject, isOn, isPlainObject, isPromise, isRegExp, isRenderableAttrValue, isReservedProp: s, isSSRSafeAttrName, isSVGTag: O, isSet, isSpecialBooleanAttr: v, isString, isSymbol, isVoidTag: M, looseEqual, looseIndexOf, looseToNumber, makeMap, normalizeClass, normalizeCssVarValue, normalizeProps, normalizeStyle, objectToString: i, parseStringStyle, propsToAttrMap: P, remove, slotFlagsText: b, stringifyStyle, toDisplayString, toHandlerKey: u, toNumber, toRawType, toTypeString }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
var t2, template;
var init_error_500 = __esm({
  ".output/server/chunks/_/error-500.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_shared_esm_bundler();
    init_nitro();
    t2 = { appName: "Nuxt", status: 500, statusText: "Internal server error", description: "This page is temporarily unavailable.", refresh: "Refresh this page" };
    template = /* @__PURE__ */ __name((r6) => (r6 = { ...t2, ...r6 }, '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(r6.status) + " - " + escapeHtml(r6.statusText) + " | " + escapeHtml(r6.appName) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><script>!function(){let e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(let e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(let t of e)if("childList"===t.type)for(let e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;let r=function(e){let r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),r.credentials="use-credentials"===e.crossOrigin?"include":"anonymous"===e.crossOrigin?"omit":"same-origin",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:""}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (width>=640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class="antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide"><div class="max-w-520px text-center"><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]">` + escapeHtml(r6.status) + '</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl">' + escapeHtml(r6.statusText) + '</h2><p class="mb-4 px-2 text-[#64748B] text-md">' + escapeHtml(r6.description) + "</p></div></body></html>"), "template");
  }
});

// .output/server/chunks/virtual/precomputed.mjs
var precomputed_exports = {};
__export(precomputed_exports, {
  default: () => e
});
var e, s2, r2, p2, o2, t3, d2;
var init_precomputed = __esm({
  ".output/server/chunks/virtual/precomputed.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    e = { dependencies: { "../node_modules/cytoscape/dist/cytoscape.esm.mjs": { scripts: {}, styles: {}, preload: { "../node_modules/cytoscape/dist/cytoscape.esm.mjs": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D6xx22XN.js", name: "cytoscape.esm", src: "../node_modules/cytoscape/dist/cytoscape.esm.mjs", isDynamicEntry: true } }, prefetch: {} }, "_8Q5p_Rgz.js": { scripts: {}, styles: {}, preload: { "_8Q5p_Rgz.js": s2 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "8Q5p_Rgz.js", name: "composables" } }, prefetch: {} }, "../node_modules/nuxt/dist/app/entry.js": { scripts: { "../node_modules/nuxt/dist/app/entry.js": p2 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "h5W2IsCz.js", name: "entry", src: "../node_modules/nuxt/dist/app/entry.js", isEntry: true, imports: ["_8Q5p_Rgz.js"], dynamicImports: r2 = ["../node_modules/nuxt/dist/app/components/error-404.vue", "../node_modules/nuxt/dist/app/components/error-500.vue"], css: ["entry.DVpdvty5.css"] } }, styles: { "entry.DVpdvty5.css": o2 = { file: "entry.DVpdvty5.css", resourceType: "style", prefetch: true, preload: true } }, preload: { "../node_modules/nuxt/dist/app/entry.js": p2, "entry.DVpdvty5.css": o2, "_8Q5p_Rgz.js": s2 }, prefetch: { "entry.DVpdvty5.css": o2 } }, "_BDNMzG2s.js": { scripts: {}, styles: {}, preload: { "_BDNMzG2s.js": t3 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "BDNMzG2s.js", name: "_plugin-vue_export-helper" } }, prefetch: {} }, "../node_modules/nuxt/dist/app/components/error-404.vue": { scripts: {}, styles: { "entry.DVpdvty5.css": o2 }, preload: { "../node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CXx5Chv3.js", name: "error-404", src: "../node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["_8Q5p_Rgz.js", "../node_modules/nuxt/dist/app/entry.js", "_BDNMzG2s.js"], css: [] }, "_8Q5p_Rgz.js": s2, "../node_modules/nuxt/dist/app/entry.js": p2, "entry.DVpdvty5.css": o2, "_BDNMzG2s.js": t3 }, prefetch: { "entry.DVpdvty5.css": o2 } }, "error-404.Bb87HomL.css": { scripts: {}, styles: {}, preload: { "error-404.Bb87HomL.css": { file: "error-404.Bb87HomL.css", resourceType: "style", prefetch: true, preload: true } }, prefetch: {} }, "../node_modules/nuxt/dist/app/components/error-500.vue": { scripts: {}, styles: {}, preload: { "../node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "Bgt03FZM.js", name: "error-500", src: "../node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["_8Q5p_Rgz.js", "_BDNMzG2s.js"], css: [] }, "_8Q5p_Rgz.js": s2, "_BDNMzG2s.js": t3 }, prefetch: {} }, "error-500.Bwd7zAaE.css": { scripts: {}, styles: {}, preload: { "error-500.Bwd7zAaE.css": { file: "error-500.Bwd7zAaE.css", resourceType: "style", prefetch: true, preload: true } }, prefetch: {} }, "entry.DVpdvty5.css": { scripts: {}, styles: {}, preload: { "entry.DVpdvty5.css": o2 }, prefetch: {} }, "pages/index.vue": { scripts: {}, styles: { "entry.DVpdvty5.css": o2 }, preload: { "pages/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CYyUlB7I.js", name: "pages", src: "pages/index.vue", isDynamicEntry: true, imports: ["_8Q5p_Rgz.js", "../node_modules/nuxt/dist/app/entry.js", "_BDNMzG2s.js"], dynamicImports: d2 = ["../node_modules/cytoscape/dist/cytoscape.esm.mjs"], css: [] }, "_8Q5p_Rgz.js": s2, "../node_modules/nuxt/dist/app/entry.js": p2, "entry.DVpdvty5.css": o2, "_BDNMzG2s.js": t3 }, prefetch: { "entry.DVpdvty5.css": o2 } }, "pages.CZz6dH6p.css": { scripts: {}, styles: {}, preload: { "pages.CZz6dH6p.css": { file: "pages.CZz6dH6p.css", resourceType: "style", prefetch: true, preload: true } }, prefetch: {} } }, entrypoints: ["../node_modules/nuxt/dist/app/entry.js"], modules: { "../node_modules/cytoscape/dist/cytoscape.esm.mjs": { file: "D6xx22XN.js", resourceType: "script", mimeType: void 0, module: true }, "../node_modules/nuxt/dist/app/components/error-404.vue": { file: "CXx5Chv3.js", resourceType: "script", mimeType: void 0, module: true }, "error-404.Bb87HomL.css": { file: "error-404.Bb87HomL.css", resourceType: "style", mimeType: void 0, module: void 0 }, "../node_modules/nuxt/dist/app/components/error-500.vue": { file: "Bgt03FZM.js", resourceType: "script", mimeType: void 0, module: true }, "error-500.Bwd7zAaE.css": { file: "error-500.Bwd7zAaE.css", resourceType: "style", mimeType: void 0, module: void 0 }, "../node_modules/nuxt/dist/app/entry.js": { file: "h5W2IsCz.js", resourceType: "script", mimeType: void 0, module: true, dynamicImports: r2 }, "entry.DVpdvty5.css": { file: "entry.DVpdvty5.css", resourceType: "style", mimeType: void 0, module: void 0 }, "_8Q5p_Rgz.js": { file: "8Q5p_Rgz.js", resourceType: "script", mimeType: void 0, module: true }, "_BDNMzG2s.js": { file: "BDNMzG2s.js", resourceType: "script", mimeType: void 0, module: true }, "pages/index.vue": { file: "CYyUlB7I.js", resourceType: "script", mimeType: void 0, module: true, dynamicImports: d2 }, "pages.CZz6dH6p.css": { file: "pages.CZz6dH6p.css", resourceType: "style", mimeType: void 0, module: void 0 } }, resourceCount: 11 };
  }
});

// .output/server/chunks/build/_plugin-vue_export-helper-BOaGB7Aw.mjs
var _plugin_vue_export_helper_default;
var init_plugin_vue_export_helper_BOaGB7Aw = __esm({
  ".output/server/chunks/build/_plugin-vue_export-helper-BOaGB7Aw.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    _plugin_vue_export_helper_default = /* @__PURE__ */ __name((o7, r6) => {
      const t12 = o7.__vccOpts || o7;
      for (const [o8, c4] of r6) t12[o8] = c4;
      return t12;
    }, "_plugin_vue_export_helper_default");
  }
});

// .output/server/chunks/build/pages-D5r-0Twz.mjs
var pages_D5r_0Twz_exports = {};
__export(pages_D5r_0Twz_exports, {
  default: () => $
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
function fmtLtc(a8) {
  return null == a8 || Number.isNaN(a8) ? "0" : a8.toLocaleString("en-US", { maximumFractionDigits: 8 });
}
function fmtDate(a8) {
  return a8 ? new Date(a8).toISOString().replace("T", " ").slice(0, 16) + " UTC" : "\u2014";
}
function shortAddr(a8, e4 = 8, d5 = 6) {
  return a8.length <= e4 + d5 + 1 ? a8 : `${a8.slice(0, e4)}\u2026${a8.slice(-d5)}`;
}
var l2, p3, f2, u2, b2, m2, x2, g2, $;
var init_pages_D5r_0Twz = __esm({
  ".output/server/chunks/build/pages-D5r-0Twz.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_entry();
    init_plugin_vue_export_helper_BOaGB7Aw();
    init_renderer();
    init_shared_esm_bundler();
    init_nitro();
    __name(fmtLtc, "fmtLtc");
    __name(fmtDate, "fmtDate");
    __name(shortAddr, "shortAddr");
    l2 = mn.defineComponent({ __name: "GraphView", __ssrInlineRender: true, props: { elements: {} }, emits: ["node:click", "edge:click"], setup(e4, { expose: d5, emit: s6 }) {
      const n5 = e4, c4 = mn.ref();
      return mn.watch(() => n5.elements, (a8) => {
      }, { deep: true }), d5({ fit: /* @__PURE__ */ __name(() => {
      }, "fit") }), (e5, d6, s7, n6) => {
        d6(`<div${ssrRenderAttrs(mn.mergeProps({ ref_key: "container", ref: c4, class: "cy-wrap" }, n6))} data-v-3cf0f97d></div>`);
      };
    } });
    p3 = l2.setup;
    l2.setup = (e4, d5) => {
      const t12 = mn.useSSRContext();
      return (t12.modules || (t12.modules = /* @__PURE__ */ new Set())).add("components/GraphView.vue"), p3 ? p3(e4, d5) : void 0;
    };
    f2 = Object.assign(_plugin_vue_export_helper_default(l2, [["__scopeId", "data-v-3cf0f97d"]]), { __name: "GraphView" });
    u2 = mn.defineComponent({ __name: "DetailsPanel", __ssrInlineRender: true, props: { selected: {}, kytByAddress: {}, edgesCount: {} }, setup(e4) {
      const d5 = e4, r6 = mn.computed(() => "node" === d5.selected?.kind ? d5.selected.data : null), i4 = mn.computed(() => r6.value ? d5.edgesCount.get(r6.value.address) ?? null : null), o7 = mn.computed(() => r6.value ? d5.kytByAddress.get(r6.value.address) ?? null : null), v3 = mn.computed(() => r6.value?.isExchange ? "badge-exch" : r6.value?.isSuspect ? "badge-suspect" : "badge-wallet"), l5 = mn.computed(() => r6.value?.isExchange ? "EXCHANGE WALLET" : r6.value?.isSuspect ? "SUSPECT" : "PRIVATE WALLET");
      return (d6, p5, f4, u5) => {
        p5(`<div${ssrRenderAttrs(mn.mergeProps({ class: "card", style: { position: "sticky", top: "84px" } }, u5))} data-v-9d1afd44><div class="card-title" data-v-9d1afd44>Inspection</div>`), e4.selected ? "node" === e4.selected.kind ? (p5(`<!--[--><div class="row" style="${ssrRenderStyle({ "margin-bottom": "12px", "flex-wrap": "wrap" })}" data-v-9d1afd44><span class="${ssrRenderClass([mn.unref(v3), "pill"])}" data-v-9d1afd44>${ssrInterpolate(mn.unref(l5))}</span>`), mn.unref(r6).isExchange && mn.unref(r6).exchangeName ? p5(`<span class="pill badge-exch" data-v-9d1afd44>${ssrInterpolate(mn.unref(r6).exchangeName)}</span>`) : p5("<!---->"), mn.unref(r6).isSuspect ? p5('<span class="pill badge-suspect" data-v-9d1afd44>SUSPECT</span>') : p5("<!---->"), p5("</div>"), mn.unref(r6).isSuspect && mn.unref(r6).ownerName ? p5(`<div class="row" style="${ssrRenderStyle({ gap: "8px", "margin-bottom": "10px" })}" data-v-9d1afd44><span style="${ssrRenderStyle({ color: "var(--muted)", "font-size": "11px", "text-transform": "uppercase", "letter-spacing": ".06em" })}" data-v-9d1afd44>Holder name</span><b style="${ssrRenderStyle({ "font-size": "14px" })}" data-v-9d1afd44>${ssrInterpolate(mn.unref(r6).ownerName)}</b></div>`) : p5("<!---->"), p5(`<div class="mono" style="${ssrRenderStyle({ "font-size": "12px", "word-break": "break-all", color: "var(--muted)", "margin-bottom": "14px" })}" data-v-9d1afd44>${ssrInterpolate(mn.unref(r6).address)}</div><div class="kv" data-v-9d1afd44><div data-v-9d1afd44><span data-v-9d1afd44>Balance</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(fmtLtc)(mn.unref(r6).balance))} LTC</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Received</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(fmtLtc)(mn.unref(r6).totalReceived))} LTC</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Sent</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(fmtLtc)(mn.unref(r6).totalSent))} LTC</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Transactions</span><b data-v-9d1afd44>${ssrInterpolate(mn.unref(r6).txCount)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>In / Out degree</span><b data-v-9d1afd44>${ssrInterpolate(mn.unref(i4)?.in ?? 0)} \xB7 ${ssrInterpolate(mn.unref(i4)?.out ?? 0)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>First seen</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(fmtDate)(mn.unref(r6).firstSeen))}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Last seen</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(fmtDate)(mn.unref(r6).lastSeen))}</b></div></div>`), mn.unref(o7) ? p5(`<div class="kyc-block" data-v-9d1afd44><div class="card-title" style="${ssrRenderStyle({ margin: "0 0 10px" })}" data-v-9d1afd44>KYC identity on ${ssrInterpolate(mn.unref(o7).exchange)}</div><div class="kv" data-v-9d1afd44><div data-v-9d1afd44><span data-v-9d1afd44>Account holder</span><b data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.name)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Email</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.email)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Country</span><b data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.country)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Verification</span><b data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.verificationLevel)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>ID type</span><b data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.idType)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>ID number</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.idNumber)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Phone</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.phone)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Date of birth</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.dob)}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Registered</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(o7).user.registeredAt.slice(0, 10))}</b></div></div><div class="muted" style="${ssrRenderStyle({ "font-size": "12px", "margin-top": "8px" })}" data-v-9d1afd44>Exchange HQ: ${ssrInterpolate(mn.unref(o7).exchangeCountry)}</div></div>`) : p5("<!---->"), p5("<!--]-->")) : "edge" === e4.selected.kind ? p5(`<!--[--><div class="row" style="${ssrRenderStyle({ gap: "8px", "margin-bottom": "12px", "flex-wrap": "wrap" })}" data-v-9d1afd44><span class="${ssrRenderClass(["in" === e4.selected.data.direction ? "pill-ok" : "pill-warn", "pill"])}" data-v-9d1afd44>${ssrInterpolate("in" === e4.selected.data.direction ? "inflow \u2192 suspect" : "outflow \u2190 suspect")}</span></div><div class="kv" data-v-9d1afd44><div data-v-9d1afd44><span data-v-9d1afd44>Amount</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(fmtLtc)(e4.selected.data.amount))} LTC</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Fee</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(fmtLtc)(e4.selected.data.fee))} LTC</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Timestamp</span><b class="mono" data-v-9d1afd44>${ssrInterpolate(mn.unref(fmtDate)(e4.selected.data.timestamp))}</b></div><div data-v-9d1afd44><span data-v-9d1afd44>Relative to suspect</span><b data-v-9d1afd44>${ssrInterpolate("in" === e4.selected.data.direction ? "received" : "sent")}</b></div></div><div class="mono" style="${ssrRenderStyle({ "font-size": "12px", "word-break": "break-all", margin: "10px 0" })}" data-v-9d1afd44>tx ${ssrInterpolate(mn.unref(shortAddr)(e4.selected.data.hash, 14, 10))}</div><div class="flow-line" data-v-9d1afd44><span class="mono flow-addr" data-v-9d1afd44>${ssrInterpolate(mn.unref(shortAddr)(e4.selected.data.source, 10, 6))}</span><span style="${ssrRenderStyle({ color: "var(--accent)" })}" data-v-9d1afd44>\u2192</span><span class="mono flow-addr" data-v-9d1afd44>${ssrInterpolate(mn.unref(shortAddr)(e4.selected.data.target, 10, 6))}</span></div><!--]-->`) : p5("<!---->") : p5(`<div class="muted" style="${ssrRenderStyle({ "font-size": "13px" })}" data-v-9d1afd44> Click an address or a transaction edge in the graph to inspect it here. </div>`), p5("</div>");
      };
    } });
    b2 = u2.setup;
    u2.setup = (e4, d5) => {
      const t12 = mn.useSSRContext();
      return (t12.modules || (t12.modules = /* @__PURE__ */ new Set())).add("components/DetailsPanel.vue"), b2 ? b2(e4, d5) : void 0;
    };
    m2 = Object.assign(_plugin_vue_export_helper_default(u2, [["__scopeId", "data-v-9d1afd44"]]), { __name: "DetailsPanel" });
    x2 = mn.defineComponent({ __name: "index", __ssrInlineRender: true, setup(d5) {
      const n5 = mn.ref(""), l5 = mn.ref(false), p5 = mn.ref(""), u5 = mn.ref(null), b5 = mn.ref(null), x5 = mn.ref([]);
      !(function() {
        try {
          x5.value = JSON.parse(localStorage.getItem("rdr-recent") ?? "[]");
        } catch {
          x5.value = [];
        }
      })(), useHead$1({ title: "ChainPulse \xB7 Litecoin Testnet Transaction Graph" });
      const g5 = mn.computed(() => /^(tltc1|[mn2])/.test(n5.value)), $3 = mn.computed(() => n5.value.trim().length >= 20), h5 = mn.computed(() => new Map((u5.value?.kyt ?? []).map((a8) => [a8.address, a8]))), y3 = mn.computed(() => {
        const a8 = /* @__PURE__ */ new Map();
        for (const e4 of u5.value?.graph.edges ?? []) {
          const d6 = e4.data;
          a8.has(d6.target) || a8.set(d6.target, { in: 0, out: 0 }), a8.has(d6.source) || a8.set(d6.source, { in: 0, out: 0 }), a8.get(d6.source).out++, a8.get(d6.target).in++;
        }
        return a8;
      });
      return (e4, d6, w5, k4) => {
        const C3 = f2, S3 = m2;
        d6(`<div${ssrRenderAttrs(k4)} data-v-5b12bc7c><section class="hero" data-v-5b12bc7c><h1 data-v-5b12bc7c>Litecoin Testnet \u2014 Transaction Graph</h1><p class="muted" data-v-5b12bc7c> Generate a transaction graph around any Litecoin testnet address and see which addresses belong to known (simulated) exchanges, with their linked KYC identity. </p></section><section class="card search-card" data-v-5b12bc7c><div class="search-row" data-v-5b12bc7c><input${ssrRenderAttr("value", mn.unref(n5))} class="addr-input mono" placeholder="Enter a Litecoin testnet address (starts with m, n, 2 or tltc1\u2026)" spellcheck="false" autocomplete="off" data-v-5b12bc7c><button class="btn btn-primary"${includeBooleanAttr(mn.unref(l5) || !mn.unref($3)) ? " disabled" : ""} data-v-5b12bc7c>`), mn.unref(l5) ? d6("<!--[-->Analyzing\u2026<!--]-->") : d6("<!--[-->Analyze<!--]-->"), d6(`</button></div><div class="search-actions" data-v-5b12bc7c><button class="btn"${includeBooleanAttr(mn.unref(l5)) ? " disabled" : ""} data-v-5b12bc7c>Use demo address</button>`), mn.unref(g5) ? d6('<span class="pill pill-ok" data-v-5b12bc7c>valid testnet address</span>') : d6(`<span class="muted" style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-5b12bc7c>Testnet formats: m\u2026, n\u2026, 2\u2026, tltc1\u2026</span>`), d6("</div>"), mn.unref(p5) ? d6(`<div class="error-box" data-v-5b12bc7c>${ssrInterpolate(mn.unref(p5))}</div>`) : d6("<!---->"), d6("</section>"), mn.unref(x5).length ? (d6(`<div class="card" data-v-5b12bc7c><div class="card-title" data-v-5b12bc7c>Recent analyses</div><div class="row" style="${ssrRenderStyle({ "flex-wrap": "wrap" })}" data-v-5b12bc7c><!--[-->`), ssrRenderList(mn.unref(x5), (e5) => {
          d6(`<button class="btn" style="${ssrRenderStyle({ padding: "6px 10px", "font-size": "12px" })}" data-v-5b12bc7c><span class="mono" data-v-5b12bc7c>${ssrInterpolate(mn.unref(shortAddr)(e5))}</span></button>`);
        }), d6("<!--]--></div></div>")) : d6("<!---->"), mn.unref(u5) ? (d6(`<!--[--><div class="card" data-v-5b12bc7c><div class="card-row" data-v-5b12bc7c><div class="card-title" style="${ssrRenderStyle({ margin: "0" })}" data-v-5b12bc7c>Transaction graph</div><div class="row" data-v-5b12bc7c><span class="muted" style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-5b12bc7c>${ssrInterpolate(mn.unref(u5).graph.nodes.length)} addresses \xB7 ${ssrInterpolate(mn.unref(u5).graph.edges.length)} transactions</span><button class="btn" style="${ssrRenderStyle({ padding: "6px 10px", "font-size": "12px" })}" data-v-5b12bc7c>Export JSON</button></div></div><div class="graph-wrap" data-v-5b12bc7c>`), d6(ssrRenderComponent(C3, { elements: mn.unref(u5).graph, "onNode:click": /* @__PURE__ */ __name((a8) => b5.value = { kind: "node", data: a8 }, "onNode:click"), "onEdge:click": /* @__PURE__ */ __name((a8) => b5.value = { kind: "edge", data: a8 }, "onEdge:click") }, null, w5)), d6(`<div class="legend" data-v-5b12bc7c><span data-v-5b12bc7c><i class="dot" style="${ssrRenderStyle({ background: "#ef4444" })}" data-v-5b12bc7c></i> suspect</span><span data-v-5b12bc7c><i class="dot" style="${ssrRenderStyle({ background: "#8b5cf6" })}" data-v-5b12bc7c></i> exchange (KYC)</span><span data-v-5b12bc7c><i class="dot" style="${ssrRenderStyle({ background: "#7a87a5" })}" data-v-5b12bc7c></i> private wallet</span><span data-v-5b12bc7c><i class="dot" style="${ssrRenderStyle({ background: "#3b82f6" })}" data-v-5b12bc7c></i> tx edge</span></div></div><div class="mode-line muted" data-v-5b12bc7c> storage: <span class="mono" data-v-5b12bc7c>${ssrInterpolate(mn.unref(u5).storageMode)}</span>`), mn.unref(u5).tursoConnected ? d6(`<!--[--> \xB7 relational KYC: <span class="mono" style="${ssrRenderStyle({ color: "var(--ok)" })}" data-v-5b12bc7c>turso</span><!--]-->`) : d6(`<!--[--> \xB7 relational KYC: <span class="mono" style="${ssrRenderStyle({ color: "var(--warn)" })}" data-v-5b12bc7c>memory fallback</span><!--]-->`), d6(`</div></div><div style="${ssrRenderStyle({ "margin-top": "18px" })}" data-v-5b12bc7c>`), d6(ssrRenderComponent(S3, { selected: mn.unref(b5), "kyt-by-address": mn.unref(h5), "edges-count": mn.unref(y3) }, null, w5)), d6("</div><!--]-->")) : d6("<!---->"), d6("</div>");
      };
    } });
    g2 = x2.setup;
    x2.setup = (e4, d5) => {
      const t12 = mn.useSSRContext();
      return (t12.modules || (t12.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), g2 ? g2(e4, d5) : void 0;
    };
    $ = _plugin_vue_export_helper_default(x2, [["__scopeId", "data-v-5b12bc7c"]]);
  }
});

// .output/server/chunks/build/error-404-3sM3lfvw.mjs
var error_404_3sM3lfvw_exports = {};
__export(error_404_3sM3lfvw_exports, {
  default: () => w2
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
function sanitizeExternalHref(e4) {
  let t12 = e4.replace(/[\u0000-\u001F\s]+/g, "");
  for (; t12.toLowerCase().startsWith("view-source:"); ) t12 = t12.slice(12);
  const r6 = t12.indexOf(":");
  return r6 > 0 && isScriptProtocol(t12.slice(0, r6 + 1)) ? null : e4;
}
function defineNuxtLink(t12) {
  const s6 = t12.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(e4) {
    return "string" == typeof e4 && e4.startsWith("#");
  }
  __name(isHashLinkWithoutHashMode, "isHashLinkWithoutHashMode");
  function useNuxtLink(a8) {
    const u5 = useRouter(), s7 = useRuntimeConfig(), l5 = mn.computed(() => !!mn.unref(a8.target) && "_self" !== mn.unref(a8.target)), p5 = mn.computed(() => {
      const t13 = mn.unref(a8.to) || mn.unref(a8.href) || "";
      return "string" == typeof t13 && hasProtocol(t13, { acceptRelative: true });
    }), f4 = mn.resolveComponent("RouterLink"), v3 = f4 && "string" != typeof f4 ? f4.useLink : void 0, h5 = mn.computed(() => {
      if (mn.unref(a8.external)) return true;
      const t13 = mn.unref(a8.to) || mn.unref(a8.href) || "";
      return "object" != typeof t13 && ("" === t13 || p5.value);
    }), m5 = mn.computed(() => {
      const r6 = mn.unref(a8.to) || mn.unref(a8.href) || "";
      return h5.value ? r6 : (function(e4, r7, a9) {
        const n5 = a9 ?? t12.trailingSlash;
        if (!e4 || "append" !== n5 && "remove" !== n5) return e4;
        if ("string" == typeof e4) return applyTrailingSlashBehavior(e4, n5);
        const i4 = "path" in e4 && void 0 !== e4.path ? e4.path : r7(e4).path;
        return { ...e4, name: void 0, path: applyTrailingSlashBehavior(i4, n5) };
      })(r6, u5.resolve, mn.unref(a8.trailingSlash));
    }), g5 = h5.value ? void 0 : v3?.({ ...a8, to: m5, viewTransition: mn.unref(a8.viewTransition) }), y3 = mn.computed(() => {
      const r6 = mn.unref(a8.trailingSlash) ?? t12.trailingSlash;
      if (!m5.value || p5.value || isHashLinkWithoutHashMode(m5.value)) {
        const e4 = m5.value;
        return "string" == typeof e4 ? sanitizeExternalHref(e4) : e4;
      }
      if (h5.value) {
        const e4 = "object" == typeof m5.value && "path" in m5.value ? resolveRouteObject(m5.value) : m5.value, t13 = "object" == typeof e4 ? u5.resolve(e4).href : e4, a9 = "string" == typeof t13 ? sanitizeExternalHref(t13) : t13;
        return null === a9 ? null : applyTrailingSlashBehavior(a9, r6);
      }
      return "object" == typeof m5.value ? u5.resolve(m5.value)?.href ?? null : applyTrailingSlashBehavior(joinURL(s7.app.baseURL, m5.value), r6);
    });
    return { to: m5, hasTarget: l5, isAbsoluteUrl: p5, isExternal: h5, href: y3, isActive: g5?.isActive ?? mn.computed(() => m5.value === u5.currentRoute.value.path), isExactActive: g5?.isExactActive ?? mn.computed(() => m5.value === u5.currentRoute.value.path), route: g5?.route ?? mn.computed(() => u5.resolve(m5.value)), async navigate(t13) {
      null !== y3.value && await navigateTo(y3.value, { replace: mn.unref(a8.replace), external: h5.value || l5.value });
    } };
  }
  __name(useNuxtLink, "useNuxtLink");
  return mn.defineComponent({ name: s6, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: useNuxtLink, setup(n5, { slots: i4 }) {
    const o7 = useRouter(), { to: s7, href: l5, navigate: c4, isExternal: d5, hasTarget: f4, isAbsoluteUrl: v3 } = useNuxtLink(n5), h5 = mn.shallowRef(false);
    function shouldPrefetch(e4) {
      return false;
    }
    __name(shouldPrefetch, "shouldPrefetch");
    async function prefetch(e4 = useNuxtApp()) {
    }
    __name(prefetch, "prefetch");
    return () => {
      const r6 = n5.target || null, u5 = ((...e4) => e4.find((e5) => void 0 !== e5))(n5.noRel ? "" : n5.rel, t12.externalRelAttribute, v3.value || f4.value ? "noopener noreferrer" : "") || null, getCustomSlotProps = /* @__PURE__ */ __name((e4) => ({ href: l5.value, navigate: c4, get route() {
        if (!l5.value) return;
        const e5 = new URL(l5.value, "http://localhost");
        return { path: e5.pathname, fullPath: e5.pathname, get query() {
          return parseQuery(e5.search);
        }, hash: e5.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: l5.value };
      }, rel: u5, target: r6, isExternal: d5.value || f4.value, isActive: false, isExactActive: false, ...e4, prefetch, prefetched: h5.value, shouldPrefetch }), "getCustomSlotProps");
      if (!d5.value && !f4.value && !isHashLinkWithoutHashMode(s7.value)) {
        const r7 = { ref: void 0, to: s7.value, activeClass: n5.activeClass || t12.activeClass, exactActiveClass: n5.exactActiveClass || t12.exactActiveClass, replace: n5.replace, ariaCurrentValue: n5.ariaCurrentValue, custom: n5.custom };
        return n5.custom || (r7.rel = n5.rel || void 0), mn.h(mn.resolveComponent("RouterLink"), r7, n5.custom && i4.default ? { default: /* @__PURE__ */ __name((e4) => i4.default(getCustomSlotProps(e4)), "default") } : i4.default);
      }
      return n5.custom ? i4.default ? i4.default(getCustomSlotProps()) : null : mn.h("a", { ref: void 0, href: l5.value || null, rel: u5, target: r6, onClick: /* @__PURE__ */ __name(async (e4) => {
        if (!d5.value && !f4.value) {
          e4.preventDefault();
          try {
            const e5 = encodeRoutePath(l5.value ?? "");
            return await (n5.replace ? o7.replace(e5) : o7.push(e5));
          } finally {
          }
        }
      }, "onClick") }, i4.default?.());
    };
  } });
}
function applyTrailingSlashBehavior(e4, t12) {
  if ("append" !== t12 && "remove" !== t12) return e4;
  const r6 = "append" === t12 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e4) && !e4.startsWith("http") ? e4 : r6(e4, true);
}
var b3, x3, k2, w2;
var init_error_404_3sM3lfvw = __esm({
  ".output/server/chunks/build/error-404-3sM3lfvw.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_entry();
    init_plugin_vue_export_helper_BOaGB7Aw();
    init_nitro();
    init_renderer();
    init_shared_esm_bundler();
    __name(sanitizeExternalHref, "sanitizeExternalHref");
    __name(defineNuxtLink, "defineNuxtLink");
    b3 = defineNuxtLink(Cn);
    __name(applyTrailingSlashBehavior, "applyTrailingSlashBehavior");
    x3 = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, status: { type: Number, default: 404 }, statusText: { type: String, default: "Page not found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(r6) {
      const a8 = r6;
      return useHead$1({ title: `${a8.status} - ${a8.statusText} | ${a8.appName}`, script: [{ innerHTML: `!function(){let e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(let e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(let t of e)if("childList"===t.type)for(let e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;let r=function(e){let r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),r.credentials="use-credentials"===e.crossOrigin?"include":"anonymous"===e.crossOrigin?"omit":"same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:""}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t12, a9, n5, i4) => {
        const o7 = b3;
        a9(`<div${ssrRenderAttrs(mn.mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide" }, i4))} data-v-b8cc6c10><div class="max-w-520px text-center" data-v-b8cc6c10><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]" data-v-b8cc6c10>${ssrInterpolate(r6.status)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-b8cc6c10>${ssrInterpolate(r6.statusText)}</h2><p class="mb-4 px-2 text-[#64748B] text-md" data-v-b8cc6c10>${ssrInterpolate(r6.description)}</p><div class="flex items-center justify-center w-full" data-v-b8cc6c10>`), a9(ssrRenderComponent(o7, { to: "/", class: "font-medium hover:text-[#00DC82] text-sm underline underline-offset-3" }, { default: mn.withCtx((t13, a10, n6, i5) => {
          if (!a10) return [mn.createTextVNode(mn.toDisplayString(r6.backHome), 1)];
          a10(`${ssrInterpolate(r6.backHome)}`);
        }), _: 1 }, n5)), a9("</div></div></div>");
      };
    } };
    k2 = x3.setup;
    x3.setup = (t12, r6) => {
      const a8 = mn.useSSRContext();
      return (a8.modules || (a8.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/error-404.vue"), k2 ? k2(t12, r6) : void 0;
    };
    w2 = _plugin_vue_export_helper_default(x3, [["__scopeId", "data-v-b8cc6c10"]]);
  }
});

// .output/server/chunks/build/error-500-5Uvp2HbW.mjs
var error_500_5Uvp2HbW_exports = {};
__export(error_500_5Uvp2HbW_exports, {
  default: () => a2
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
var s3, i2, a2;
var init_error_500_5Uvp2HbW = __esm({
  ".output/server/chunks/build/error-500-5Uvp2HbW.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_entry();
    init_plugin_vue_export_helper_BOaGB7Aw();
    init_renderer();
    init_nitro();
    init_shared_esm_bundler();
    s3 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, status: { type: Number, default: 500 }, statusText: { type: String, default: "Internal server error" }, description: { type: String, default: "This page is temporarily unavailable." }, refresh: { type: String, default: "Refresh this page" } }, setup(r6) {
      const s6 = r6;
      return useHead$1({ title: `${s6.status} - ${s6.statusText} | ${s6.appName}`, script: [{ innerHTML: `!function(){let e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(let e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(let t of e)if("childList"===t.type)for(let e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;let r=function(e){let r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),r.credentials="use-credentials"===e.crossOrigin?"include":"anonymous"===e.crossOrigin?"omit":"same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:""}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t12, s7, i4, a8) => {
        s7(`<div${ssrRenderAttrs(mn.mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide" }, a8))} data-v-f91406c7><div class="max-w-520px text-center" data-v-f91406c7><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]" data-v-f91406c7>${ssrInterpolate(r6.status)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-f91406c7>${ssrInterpolate(r6.statusText)}</h2><p class="mb-4 px-2 text-[#64748B] text-md" data-v-f91406c7>${ssrInterpolate(r6.description)}</p></div></div>`);
      };
    } };
    i2 = s3.setup;
    s3.setup = (t12, r6) => {
      const n5 = mn.useSSRContext();
      return (n5.modules || (n5.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/error-500.vue"), i2 ? i2(t12, r6) : void 0;
    };
    a2 = _plugin_vue_export_helper_default(s3, [["__scopeId", "data-v-f91406c7"]]);
  }
});

// .output/server/chunks/virtual/entry.mjs
var entry_exports = {};
__export(entry_exports, {
  a: () => useRouter,
  b: () => useRuntimeConfig,
  c: () => useNuxtApp,
  d: () => Cn,
  e: () => encodeRoutePath,
  f: () => zr,
  n: () => navigateTo,
  r: () => resolveRouteObject,
  u: () => useHead$1,
  v: () => mn
});
function useHead(u5, p5 = {}) {
  const d5 = p5.head || injectHead();
  return d5.ssr ? d5.push(u5 || {}, p5) : (function(e4, u6, p6 = {}) {
    const d6 = getCurrentScope();
    if (d6 && !d6.active) return { patch() {
    }, dispose() {
    }, _i: -1 };
    const h5 = ref2(false);
    if (p6.onRendered && d6) {
      const e5 = p6.onRendered;
      p6 = { ...p6, onRendered: /* @__PURE__ */ __name((t12) => d6.run(() => e5(t12)), "onRendered") };
    }
    let f4;
    watchEffect(() => {
      const t12 = h5.value ? {} : walkResolver(u6, Lr);
      f4 ? f4.patch(t12) : f4 = e4.push(t12, p6);
    });
    getCurrentInstance() && (rn(() => {
      f4.dispose();
    }), onDeactivated(() => {
      h5.value = true;
    }), onActivated(() => {
      h5.value = false;
    }));
    return f4;
  })(d5, u5, p5);
}
function registerRuntimeHelpers(e4) {
  Object.getOwnPropertySymbols(e4).forEach((t12) => {
    tt[t12] = e4[t12];
  });
}
function createRoot(e4, t12 = "") {
  return { type: 0, source: t12, children: e4, helpers: /* @__PURE__ */ new Set(), components: [], directives: [], hoists: [], imports: [], cached: [], temps: 0, codegenNode: void 0, loc: nt };
}
function createVNodeCall(e4, t12, n5, r6, o7, s6, i4, a8 = false, c4 = false, l5 = false, u5 = nt) {
  return e4 && (a8 ? (e4.helper(Te), e4.helper(getVNodeBlockHelper(e4.inSSR, l5))) : e4.helper(getVNodeHelper(e4.inSSR, l5)), i4 && e4.helper(Me)), { type: 13, tag: t12, props: n5, children: r6, patchFlag: o7, dynamicProps: s6, directives: i4, isBlock: a8, disableTracking: c4, isComponent: l5, loc: u5 };
}
function createArrayExpression(e4, t12 = nt) {
  return { type: 17, loc: t12, elements: e4 };
}
function createObjectExpression(e4, t12 = nt) {
  return { type: 15, loc: t12, properties: e4 };
}
function createObjectProperty(e4, t12) {
  return { type: 16, loc: nt, key: isString(e4) ? createSimpleExpression(e4, true) : e4, value: t12 };
}
function createSimpleExpression(e4, t12 = false, n5 = nt, r6 = 0) {
  return { type: 4, loc: n5, content: e4, isStatic: t12, constType: t12 ? 3 : r6 };
}
function createCompoundExpression(e4, t12 = nt) {
  return { type: 8, loc: t12, children: e4 };
}
function createCallExpression(e4, t12 = [], n5 = nt) {
  return { type: 14, loc: n5, callee: e4, arguments: t12 };
}
function createFunctionExpression(e4, t12 = void 0, n5 = false, r6 = false, o7 = nt) {
  return { type: 18, params: e4, returns: t12, newline: n5, isSlot: r6, loc: o7 };
}
function createConditionalExpression(e4, t12, n5, r6 = true) {
  return { type: 19, test: e4, consequent: t12, alternate: n5, newline: r6, loc: nt };
}
function createCacheExpression(e4, t12, n5 = false, r6 = false) {
  return { type: 20, index: e4, value: t12, needPauseTracking: n5, inVOnce: r6, needArraySpread: false, loc: nt };
}
function createBlockStatement(e4) {
  return { type: 21, body: e4, loc: nt };
}
function getVNodeHelper(e4, t12) {
  return e4 || t12 ? Ce : xe;
}
function getVNodeBlockHelper(e4, t12) {
  return e4 || t12 ? Ne : ve;
}
function convertToBlock(e4, { helper: t12, removeHelper: n5, inSSR: r6 }) {
  e4.isBlock || (e4.isBlock = true, n5(getVNodeHelper(r6, e4.isComponent)), t12(Te), t12(getVNodeBlockHelper(r6, e4.isComponent)));
}
function isTagStartChar(e4) {
  return e4 >= 97 && e4 <= 122 || e4 >= 65 && e4 <= 90;
}
function isWhitespace(e4) {
  return 32 === e4 || 10 === e4 || 9 === e4 || 12 === e4 || 13 === e4;
}
function isEndOfTagSection(e4) {
  return 47 === e4 || 62 === e4 || isWhitespace(e4);
}
function toCharCodes(e4) {
  const t12 = new Uint8Array(e4.length);
  for (let n5 = 0; n5 < e4.length; n5++) t12[n5] = e4.charCodeAt(n5);
  return t12;
}
function getCompatValue(e4, { compatConfig: t12 }) {
  const n5 = t12 && t12[e4];
  return "MODE" === e4 ? n5 || 3 : n5;
}
function isCompatEnabled(e4, t12) {
  const n5 = getCompatValue("MODE", t12), r6 = getCompatValue(e4, t12);
  return 3 === n5 ? true === r6 : false !== r6;
}
function checkCompatEnabled(e4, t12, n5, ...r6) {
  return isCompatEnabled(e4, t12);
}
function defaultOnError(e4) {
  throw e4;
}
function defaultOnWarn(e4) {
}
function createCompilerError(e4, t12, n5, r6) {
  const o7 = new SyntaxError(String(`https://vuejs.org/error-reference/#compiler-${e4}`));
  return o7.code = e4, o7.loc = t12, o7;
}
function walkBlockDeclarations(e4, t12) {
  const n5 = "SwitchCase" === e4.type ? e4.consequent : e4.body;
  for (const e5 of n5) if ("VariableDeclaration" === e5.type) {
    if (e5.declare) continue;
    for (const n6 of e5.declarations) for (const e6 of extractIdentifiers(n6.id)) t12(e6);
  } else if ("FunctionDeclaration" === e5.type || "ClassDeclaration" === e5.type) {
    if (e5.declare || !e5.id) continue;
    t12(e5.id);
  } else isForStatement(e5) ? walkForStatement(e5, true, t12) : "SwitchStatement" === e5.type && walkSwitchStatement(e5, true, t12);
}
function isForStatement(e4) {
  return "ForOfStatement" === e4.type || "ForInStatement" === e4.type || "ForStatement" === e4.type;
}
function walkForStatement(e4, t12, n5) {
  const r6 = "ForStatement" === e4.type ? e4.init : e4.left;
  if (r6 && "VariableDeclaration" === r6.type && ("var" === r6.kind ? t12 : !t12)) for (const e5 of r6.declarations) for (const t13 of extractIdentifiers(e5.id)) n5(t13);
}
function walkSwitchStatement(e4, t12, n5) {
  for (const r6 of e4.cases) {
    for (const e5 of r6.consequent) if ("VariableDeclaration" === e5.type && ("var" === e5.kind ? t12 : !t12)) for (const t13 of e5.declarations) for (const e6 of extractIdentifiers(t13.id)) n5(e6);
    walkBlockDeclarations(r6, n5);
  }
}
function extractIdentifiers(e4, t12 = []) {
  switch (e4.type) {
    case "Identifier":
      t12.push(e4);
      break;
    case "MemberExpression":
      let n5 = e4;
      for (; "MemberExpression" === n5.type; ) n5 = n5.object;
      t12.push(n5);
      break;
    case "ObjectPattern":
      for (const n6 of e4.properties) "RestElement" === n6.type ? extractIdentifiers(n6.argument, t12) : extractIdentifiers(n6.value, t12);
      break;
    case "ArrayPattern":
      e4.elements.forEach((e5) => {
        e5 && extractIdentifiers(e5, t12);
      });
      break;
    case "RestElement":
      extractIdentifiers(e4.argument, t12);
      break;
    case "AssignmentPattern":
      extractIdentifiers(e4.left, t12);
  }
  return t12;
}
function isCoreComponent(e4) {
  switch (e4) {
    case "Teleport":
    case "teleport":
      return Ee;
    case "Suspense":
    case "suspense":
      return Se;
    case "KeepAlive":
    case "keep-alive":
      return _e;
    case "BaseTransition":
    case "base-transition":
      return ye;
  }
}
function advancePositionWithMutation(e4, t12, n5 = t12.length) {
  let r6 = 0, o7 = -1;
  for (let e5 = 0; e5 < n5; e5++) 10 === t12.charCodeAt(e5) && (r6++, o7 = e5);
  return e4.offset += n5, e4.line += r6, e4.column = -1 === o7 ? e4.column + n5 : n5 - o7, e4;
}
function findDir(e4, t12, n5 = false) {
  for (let r6 = 0; r6 < e4.props.length; r6++) {
    const o7 = e4.props[r6];
    if (7 === o7.type && (n5 || o7.exp) && (isString(t12) ? o7.name === t12 : t12.test(o7.name))) return o7;
  }
}
function findProp(e4, t12, n5 = false, r6 = false) {
  for (let o7 = 0; o7 < e4.props.length; o7++) {
    const s6 = e4.props[o7];
    if (6 === s6.type) {
      if (n5) continue;
      if (s6.name === t12 && (s6.value || r6)) return s6;
    } else if ("bind" === s6.name && (s6.exp || r6) && isStaticArgOf(s6.arg, t12)) return s6;
  }
}
function isStaticArgOf(e4, t12) {
  return !(!e4 || !isStaticExp(e4) || e4.content !== t12);
}
function hasDynamicKeyVBind(e4) {
  return e4.props.some((e5) => !(7 !== e5.type || "bind" !== e5.name || e5.arg && 4 === e5.arg.type && e5.arg.isStatic));
}
function isText$1(e4) {
  return 5 === e4.type || 2 === e4.type;
}
function isVPre(e4) {
  return 7 === e4.type && "pre" === e4.name;
}
function isVSlot(e4) {
  return 7 === e4.type && "slot" === e4.name;
}
function isTemplateNode(e4) {
  return 1 === e4.type && 3 === e4.tagType;
}
function isSlotOutlet(e4) {
  return 1 === e4.type && 2 === e4.tagType;
}
function getUnnormalizedProps(e4, t12 = []) {
  if (e4 && !isString(e4) && 14 === e4.type) {
    const n5 = e4.callee;
    if (!isString(n5) && St.has(n5)) return getUnnormalizedProps(e4.arguments[0], t12.concat(e4));
  }
  return [e4, t12];
}
function injectProp(e4, t12, n5) {
  if (13 !== e4.type && (function(e5, t13) {
    var n6, r7, o8;
    if (4 !== t13.key.type || "key" !== t13.key.content) return false;
    const s7 = e5.arguments[2];
    if (s7 && !isString(s7)) {
      const [e6] = getUnnormalizedProps(s7);
      if (e6 && !isString(e6) && 15 === e6.type && hasProp(t13, e6)) return true;
    }
    return (n6 = e5.arguments)[2] || (n6[2] = "{}"), (r7 = e5.arguments)[3] || (r7[3] = "undefined"), (o8 = e5.arguments)[4] || (o8[4] = "undefined"), e5.arguments[5] = t13.value, true;
  })(e4, t12)) return;
  let r6, o7, s6 = 13 === e4.type ? e4.props : e4.arguments[2], i4 = [];
  if (s6 && !isString(s6) && 14 === s6.type) {
    const e5 = getUnnormalizedProps(s6);
    s6 = e5[0], i4 = e5[1], o7 = i4[i4.length - 1];
  }
  if (null == s6 || isString(s6)) r6 = createObjectExpression([t12]);
  else if (14 === s6.type) {
    const e5 = s6.arguments[0];
    isString(e5) || 15 !== e5.type ? s6.callee === He ? r6 = createCallExpression(n5.helper(Fe), [createObjectExpression([t12]), s6]) : s6.arguments.unshift(createObjectExpression([t12])) : hasProp(t12, e5) || e5.properties.unshift(t12), !r6 && (r6 = s6);
  } else 15 === s6.type ? (hasProp(t12, s6) || s6.properties.unshift(t12), r6 = s6) : (r6 = createCallExpression(n5.helper(Fe), [createObjectExpression([t12]), s6]), o7 && o7.callee === je && (o7 = i4[i4.length - 2]));
  13 === e4.type ? o7 ? o7.arguments[0] = r6 : e4.props = r6 : o7 ? o7.arguments[0] = r6 : e4.arguments[2] = r6;
}
function hasProp(e4, t12) {
  let n5 = false;
  if (4 === e4.key.type) {
    const r6 = e4.key.content;
    n5 = t12.properties.some((e5) => 4 === e5.key.type && e5.key.content === r6);
  }
  return n5;
}
function toValidAssetId(e4, t12) {
  return `_${t12}_${e4.replace(/[^\w]/g, (t13, n5) => "-" === t13 ? "_" : e4.charCodeAt(n5).toString())}`;
}
function getMemoedVNodeCall(e4) {
  return 14 === e4.type && e4.callee === Ze ? e4.arguments[1].returns : e4;
}
function isAllWhitespace(e4) {
  for (let t12 = 0; t12 < e4.length; t12++) if (!isWhitespace(e4.charCodeAt(t12))) return false;
  return true;
}
function isWhitespaceText(e4) {
  return 2 === e4.type && isAllWhitespace(e4.content) || 12 === e4.type && isWhitespaceText(e4.content);
}
function isCommentOrWhitespace(e4) {
  return 3 === e4.type || isWhitespaceText(e4);
}
function getSlice(e4, t12) {
  return vt.slice(e4, t12);
}
function endOpenTag(e4) {
  Mt.inSFCRoot && (Ct.innerLoc = getLoc(e4 + 1, e4 + 1)), addNode(Ct);
  const { tag: t12, ns: n5 } = Ct;
  0 === n5 && Tt.isPreTag(t12) && Rt++, Tt.isVoidTag(t12) ? onCloseTag(Ct, e4) : (Lt.unshift(Ct), 1 !== n5 && 2 !== n5 || (Mt.inXML = true)), Ct = null;
}
function onText(e4, t12, n5) {
  {
    const t13 = Lt[0] && Lt[0].tag;
    "script" !== t13 && "style" !== t13 && e4.includes("&") && (e4 = Tt.decodeEntities(e4, false));
  }
  const r6 = Lt[0] || Nt, o7 = r6.children[r6.children.length - 1];
  o7 && 2 === o7.type ? (o7.content += e4, setLocEnd(o7.loc, n5)) : r6.children.push({ type: 2, content: e4, loc: getLoc(t12, n5) });
}
function onCloseTag(e4, t12, n5 = false) {
  setLocEnd(e4.loc, n5 ? backTrack(t12, 60) : (function(e5, t13) {
    let n6 = e5;
    for (; vt.charCodeAt(n6) !== t13 && n6 < vt.length - 1; ) n6++;
    return n6;
  })(t12, 62) + 1), Mt.inSFCRoot && (e4.children.length ? e4.innerLoc.end = n({}, e4.children[e4.children.length - 1].loc.end) : e4.innerLoc.end = n({}, e4.innerLoc.start), e4.innerLoc.source = getSlice(e4.innerLoc.start.offset, e4.innerLoc.end.offset));
  const { tag: r6, ns: o7, children: s6 } = e4;
  if (At || ("slot" === r6 ? e4.tagType = 2 : isFragmentTemplate(e4) ? e4.tagType = 3 : (function({ tag: e5, props: t13 }) {
    if (Tt.isCustomElement(e5)) return false;
    if ("component" === e5 || (n6 = e5.charCodeAt(0), n6 > 64 && n6 < 91) || isCoreComponent(e5) || Tt.isBuiltInComponent && Tt.isBuiltInComponent(e5) || Tt.isNativeTag && !Tt.isNativeTag(e5)) return true;
    var n6;
    for (let e6 = 0; e6 < t13.length; e6++) {
      const n7 = t13[e6];
      if (6 === n7.type) {
        if ("is" === n7.name && n7.value) {
          if (n7.value.content.startsWith("vue:")) return true;
          if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT", Tt, n7.loc)) return true;
        }
      } else if ("bind" === n7.name && isStaticArgOf(n7.arg, "is") && checkCompatEnabled("COMPILER_IS_ON_ELEMENT", Tt, n7.loc)) return true;
    }
    return false;
  })(e4) && (e4.tagType = 1)), Mt.inRCDATA || (e4.children = condenseWhitespace(s6)), 0 === o7 && Tt.isIgnoreNewlineTag(r6)) {
    const e5 = s6[0];
    e5 && 2 === e5.type && (e5.content = e5.content.replace(/^\r?\n/, ""));
  }
  0 === o7 && Tt.isPreTag(r6) && Rt--, Pt === e4 && (At = Mt.inVPre = false, Pt = null), Mt.inXML && 0 === (Lt[0] ? Lt[0].ns : Tt.ns) && (Mt.inXML = false);
  {
    const t13 = e4.props;
    if (!Mt.inSFCRoot && isCompatEnabled("COMPILER_NATIVE_TEMPLATE", Tt) && "template" === e4.tag && !isFragmentTemplate(e4)) {
      const t14 = Lt[0] || Nt, n7 = t14.children.indexOf(e4);
      t14.children.splice(n7, 1, ...e4.children);
    }
    const n6 = t13.find((e5) => 6 === e5.type && "inline-template" === e5.name);
    n6 && checkCompatEnabled("COMPILER_INLINE_TEMPLATE", Tt, n6.loc) && e4.children.length && (n6.value = { type: 2, content: getSlice(e4.children[0].loc.start.offset, e4.children[e4.children.length - 1].loc.end.offset), loc: n6.loc });
  }
}
function backTrack(e4, t12) {
  let n5 = e4;
  for (; vt.charCodeAt(n5) !== t12 && n5 >= 0; ) n5--;
  return n5;
}
function isFragmentTemplate({ tag: e4, props: t12 }) {
  if ("template" === e4) {
    for (let e5 = 0; e5 < t12.length; e5++) if (7 === t12[e5].type && Dt.has(t12[e5].name)) return true;
  }
  return false;
}
function condenseWhitespace(e4) {
  const t12 = "preserve" !== Tt.whitespace;
  let n5 = false;
  for (let r6 = 0; r6 < e4.length; r6++) {
    const o7 = e4[r6];
    if (2 === o7.type) if (Rt) o7.content = o7.content.replace(Vt, "\n");
    else if (isAllWhitespace(o7.content)) {
      const s6 = e4[r6 - 1] && e4[r6 - 1].type, i4 = e4[r6 + 1] && e4[r6 + 1].type;
      !s6 || !i4 || t12 && (3 === s6 && (3 === i4 || 1 === i4) || 1 === s6 && (3 === i4 || 1 === i4 && hasNewlineChar(o7.content))) ? (n5 = true, e4[r6] = null) : o7.content = " ";
    } else t12 && (o7.content = condense(o7.content));
  }
  return n5 ? e4.filter(Boolean) : e4;
}
function hasNewlineChar(e4) {
  for (let t12 = 0; t12 < e4.length; t12++) {
    const n5 = e4.charCodeAt(t12);
    if (10 === n5 || 13 === n5) return true;
  }
  return false;
}
function condense(e4) {
  let t12 = "", n5 = false;
  for (let r6 = 0; r6 < e4.length; r6++) isWhitespace(e4.charCodeAt(r6)) ? n5 || (t12 += " ", n5 = true) : (t12 += e4[r6], n5 = false);
  return t12;
}
function addNode(e4) {
  (Lt[0] || Nt).children.push(e4);
}
function getLoc(e4, t12) {
  return { start: Mt.getPos(e4), end: null == t12 ? t12 : Mt.getPos(t12), source: null == t12 ? t12 : getSlice(e4, t12) };
}
function setLocEnd(e4, t12) {
  e4.end = Mt.getPos(t12), e4.source = getSlice(e4.start.offset, t12);
}
function dirToAttr(e4) {
  const t12 = { type: 6, name: e4.rawName, nameLoc: getLoc(e4.loc.start.offset, e4.loc.start.offset + e4.rawName.length), value: void 0, loc: e4.loc };
  if (e4.exp) {
    const n5 = e4.exp.loc;
    n5.end.offset < e4.loc.end.offset && (n5.start.offset--, n5.start.column--, n5.end.offset++, n5.end.column++), t12.value = { type: 2, content: e4.exp.content, loc: n5 };
  }
  return t12;
}
function createExp(e4, t12 = false, n5, r6 = 0, o7 = 0) {
  return createSimpleExpression(e4, t12, n5, r6);
}
function emitError(e4, t12, n5) {
  Tt.onError(createCompilerError(e4, getLoc(t12, t12)));
}
function baseParse(e4, t12) {
  if (Mt.reset(), Ct = null, xt = null, bt = "", Ot = -1, It = -1, Lt.length = 0, vt = e4, Tt = n({}, yt), t12) {
    let e5;
    for (e5 in t12) null != t12[e5] && (Tt[e5] = t12[e5]);
  }
  Mt.mode = "html" === Tt.parseMode ? 1 : "sfc" === Tt.parseMode ? 2 : 0, Mt.inXML = 1 === Tt.ns || 2 === Tt.ns;
  const n5 = t12 && t12.delimiters;
  n5 && (Mt.delimiterOpen = toCharCodes(n5[0]), Mt.delimiterClose = toCharCodes(n5[1]));
  const r6 = Nt = createRoot([], e4);
  return Mt.parse(vt), r6.loc = getLoc(0, e4.length), r6.children = condenseWhitespace(r6.children), Nt = null, r6;
}
function cacheStatic(e4, t12) {
  walk(e4, void 0, t12, !!getSingleElementRoot(e4));
}
function getSingleElementRoot(e4) {
  const t12 = e4.children.filter((e5) => 3 !== e5.type);
  return 1 !== t12.length || 1 !== t12[0].type || isSlotOutlet(t12[0]) ? null : t12[0];
}
function walk(e4, t12, n5, r6 = false, o7 = false) {
  const { children: s6 } = e4, i4 = [];
  for (let t13 = 0; t13 < s6.length; t13++) {
    const a9 = s6[t13];
    if (1 === a9.type && 0 === a9.tagType) {
      const e5 = r6 ? 0 : getConstantType(a9, n5);
      if (e5 > 0) {
        if (e5 >= 2) {
          a9.codegenNode.patchFlag = -1, i4.push(a9);
          continue;
        }
      } else {
        const e6 = a9.codegenNode;
        if (13 === e6.type) {
          const t14 = e6.patchFlag;
          if ((void 0 === t14 || 512 === t14 || 1 === t14) && getGeneratedPropsConstantType(a9, n5) >= 2) {
            const t15 = getNodeProps(a9);
            t15 && (e6.props = n5.hoist(t15));
          }
          e6.dynamicProps && (e6.dynamicProps = n5.hoist(e6.dynamicProps));
        }
      }
    } else if (12 === a9.type) {
      if ((r6 ? 0 : getConstantType(a9, n5)) >= 2) {
        14 === a9.codegenNode.type && a9.codegenNode.arguments.length > 0 && a9.codegenNode.arguments.push("-1"), i4.push(a9);
        continue;
      }
    }
    if (1 === a9.type) {
      const t14 = 1 === a9.tagType;
      t14 && n5.scopes.vSlot++, walk(a9, e4, n5, false, o7), t14 && n5.scopes.vSlot--;
    } else if (11 === a9.type) walk(a9, e4, n5, 1 === a9.children.length, true);
    else if (9 === a9.type) for (let t14 = 0; t14 < a9.branches.length; t14++) walk(a9.branches[t14], e4, n5, 1 === a9.branches[t14].children.length, o7);
  }
  let a8 = false;
  if (i4.length === s6.length && 1 === e4.type) {
    if (0 === e4.tagType && e4.codegenNode && 13 === e4.codegenNode.type && o(e4.codegenNode.children)) e4.codegenNode.children = getCacheExpression(createArrayExpression(e4.codegenNode.children)), a8 = true;
    else if (1 === e4.tagType && e4.codegenNode && 13 === e4.codegenNode.type && e4.codegenNode.children && !o(e4.codegenNode.children) && 15 === e4.codegenNode.children.type) {
      const t13 = getSlotNode(e4.codegenNode, "default");
      t13 && (t13.returns = getCacheExpression(createArrayExpression(t13.returns)), a8 = true);
    } else if (3 === e4.tagType && t12 && 1 === t12.type && 1 === t12.tagType && t12.codegenNode && 13 === t12.codegenNode.type && t12.codegenNode.children && !o(t12.codegenNode.children) && 15 === t12.codegenNode.children.type) {
      const n6 = findDir(e4, "slot", true), r7 = n6 && n6.arg && getSlotNode(t12.codegenNode, n6.arg);
      r7 && (r7.returns = getCacheExpression(createArrayExpression(r7.returns)), a8 = true);
    }
  }
  if (!a8) for (const e5 of i4) e5.codegenNode = n5.cache(e5.codegenNode);
  function getCacheExpression(e5) {
    const t13 = n5.cache(e5);
    return t13.needArraySpread = true, t13;
  }
  __name(getCacheExpression, "getCacheExpression");
  function getSlotNode(e5, t13) {
    if (e5.children && !o(e5.children) && 15 === e5.children.type) {
      const n6 = e5.children.properties.find((e6) => e6.key === t13 || e6.key.content === t13);
      return n6 && n6.value;
    }
  }
  __name(getSlotNode, "getSlotNode");
  i4.length && n5.transformHoist && n5.transformHoist(s6, n5, e4);
}
function getConstantType(e4, t12) {
  const { constantCache: n5 } = t12;
  switch (e4.type) {
    case 1:
      if (0 !== e4.tagType) return 0;
      const r6 = n5.get(e4);
      if (void 0 !== r6) return r6;
      const o7 = e4.codegenNode;
      if (13 !== o7.type) return 0;
      if (o7.isBlock && "svg" !== e4.tag && "foreignObject" !== e4.tag && "math" !== e4.tag) return 0;
      if (void 0 === o7.patchFlag) {
        let r7 = 3;
        const s7 = getGeneratedPropsConstantType(e4, t12);
        if (0 === s7) return n5.set(e4, 0), 0;
        s7 < r7 && (r7 = s7);
        for (let o8 = 0; o8 < e4.children.length; o8++) {
          const s8 = getConstantType(e4.children[o8], t12);
          if (0 === s8) return n5.set(e4, 0), 0;
          s8 < r7 && (r7 = s8);
        }
        if (r7 > 1) for (let o8 = 0; o8 < e4.props.length; o8++) {
          const s8 = e4.props[o8];
          if (7 === s8.type && "bind" === s8.name && s8.exp) {
            const o9 = getConstantType(s8.exp, t12);
            if (0 === o9) return n5.set(e4, 0), 0;
            o9 < r7 && (r7 = o9);
          }
        }
        if (o7.isBlock) {
          for (let t13 = 0; t13 < e4.props.length; t13++) {
            if (7 === e4.props[t13].type) return n5.set(e4, 0), 0;
          }
          t12.removeHelper(Te), t12.removeHelper(getVNodeBlockHelper(t12.inSSR, o7.isComponent)), o7.isBlock = false, t12.helper(getVNodeHelper(t12.inSSR, o7.isComponent));
        }
        return n5.set(e4, r7), r7;
      }
      return n5.set(e4, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
    default:
      return 0;
    case 5:
    case 12:
      return getConstantType(e4.content, t12);
    case 4:
      return e4.constType;
    case 8:
      let s6 = 3;
      for (let n6 = 0; n6 < e4.children.length; n6++) {
        const r7 = e4.children[n6];
        if (isString(r7) || isSymbol(r7)) continue;
        const o8 = getConstantType(r7, t12);
        if (0 === o8) return 0;
        o8 < s6 && (s6 = o8);
      }
      return s6;
    case 20:
      return 2;
  }
}
function getConstantTypeOfHelperCall(e4, t12) {
  if (14 === e4.type && !isString(e4.callee) && Ft2.has(e4.callee)) {
    const n5 = e4.arguments[0];
    if (4 === n5.type) return getConstantType(n5, t12);
    if (14 === n5.type) return getConstantTypeOfHelperCall(n5, t12);
  }
  return 0;
}
function getGeneratedPropsConstantType(e4, t12) {
  let n5 = 3;
  const r6 = getNodeProps(e4);
  if (r6 && 15 === r6.type) {
    const { properties: e5 } = r6;
    for (let r7 = 0; r7 < e5.length; r7++) {
      const { key: o7, value: s6 } = e5[r7], i4 = getConstantType(o7, t12);
      if (0 === i4) return i4;
      let a8;
      if (i4 < n5 && (n5 = i4), a8 = 4 === s6.type ? getConstantType(s6, t12) : 14 === s6.type ? getConstantTypeOfHelperCall(s6, t12) : 0, 0 === a8) return a8;
      a8 < n5 && (n5 = a8);
    }
  }
  return n5;
}
function getNodeProps(e4) {
  const t12 = e4.codegenNode;
  if (13 === t12.type) return t12.props;
}
function createTransformContext(e4, { filename: t12 = "", prefixIdentifiers: n5 = false, hoistStatic: r6 = false, hmr: o7 = false, cacheHandlers: s6 = false, nodeTransforms: i4 = [], directiveTransforms: a8 = {}, transformHoist: c4 = null, isBuiltInComponent: l5 = NOOP, isCustomElement: u5 = NOOP, expressionPlugins: p5 = [], scopeId: d5 = null, slotted: h5 = true, ssr: f4 = false, inSSR: m5 = false, ssrCssVars: g5 = "", bindingMetadata: E3 = t, inline: S3 = false, isTS: _3 = false, onError: y3 = defaultOnError, onWarn: T3 = defaultOnWarn, compatConfig: N3 }) {
  const v3 = t12.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), C3 = { filename: t12, selfName: v3 && f(p(v3[1])), prefixIdentifiers: n5, hoistStatic: r6, hmr: o7, cacheHandlers: s6, nodeTransforms: i4, directiveTransforms: a8, transformHoist: c4, isBuiltInComponent: l5, isCustomElement: u5, expressionPlugins: p5, scopeId: d5, slotted: h5, ssr: f4, inSSR: m5, ssrCssVars: g5, bindingMetadata: E3, inline: S3, isTS: _3, onError: y3, onWarn: T3, compatConfig: N3, root: e4, helpers: /* @__PURE__ */ new Map(), components: /* @__PURE__ */ new Set(), directives: /* @__PURE__ */ new Set(), hoists: [], imports: [], cached: [], constantCache: /* @__PURE__ */ new WeakMap(), vForMemoKeyedNodes: /* @__PURE__ */ new WeakSet(), temps: 0, identifiers: /* @__PURE__ */ Object.create(null), scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 }, parent: null, grandParent: null, currentNode: e4, childIndex: 0, inVOnce: false, helper(e5) {
    const t13 = C3.helpers.get(e5) || 0;
    return C3.helpers.set(e5, t13 + 1), e5;
  }, removeHelper(e5) {
    const t13 = C3.helpers.get(e5);
    if (t13) {
      const n6 = t13 - 1;
      n6 ? C3.helpers.set(e5, n6) : C3.helpers.delete(e5);
    }
  }, helperString: /* @__PURE__ */ __name((e5) => `_${tt[C3.helper(e5)]}`, "helperString"), replaceNode(e5) {
    C3.parent.children[C3.childIndex] = C3.currentNode = e5;
  }, removeNode(e5) {
    const t13 = C3.parent.children, n6 = e5 ? t13.indexOf(e5) : C3.currentNode ? C3.childIndex : -1;
    e5 && e5 !== C3.currentNode ? C3.childIndex > n6 && (C3.childIndex--, C3.onNodeRemoved()) : (C3.currentNode = null, C3.onNodeRemoved()), C3.parent.children.splice(n6, 1);
  }, onNodeRemoved: NOOP, addIdentifiers(e5) {
  }, removeIdentifiers(e5) {
  }, hoist(e5) {
    isString(e5) && (e5 = createSimpleExpression(e5)), C3.hoists.push(e5);
    const t13 = createSimpleExpression(`_hoisted_${C3.hoists.length}`, false, e5.loc, 2);
    return t13.hoisted = e5, t13;
  }, cache(e5, t13 = false, n6 = false) {
    const r7 = createCacheExpression(C3.cached.length, e5, t13, n6);
    return C3.cached.push(r7), r7;
  } };
  return C3.filters = /* @__PURE__ */ new Set(), C3;
}
function transform(e4, t12) {
  const n5 = createTransformContext(e4, t12);
  traverseNode(e4, n5), t12.hoistStatic && cacheStatic(e4, n5), t12.ssr || (function(e5, t13) {
    const { helper: n6 } = t13, { children: r6 } = e5;
    if (1 === r6.length) {
      const n7 = getSingleElementRoot(e5);
      if (n7 && n7.codegenNode) {
        const r7 = n7.codegenNode;
        13 === r7.type && convertToBlock(r7, t13), e5.codegenNode = r7;
      } else e5.codegenNode = r6[0];
    } else if (r6.length > 1) {
      let r7 = 64;
      e5.codegenNode = createVNodeCall(t13, n6(ge), void 0, e5.children, r7, void 0, void 0, true, void 0, false);
    }
  })(e4, n5), e4.helpers = /* @__PURE__ */ new Set([...n5.helpers.keys()]), e4.components = [...n5.components], e4.directives = [...n5.directives], e4.imports = n5.imports, e4.hoists = n5.hoists, e4.temps = n5.temps, e4.cached = n5.cached, e4.transformed = true, e4.filters = [...n5.filters];
}
function traverseNode(e4, t12) {
  t12.currentNode = e4;
  const { nodeTransforms: n5 } = t12, r6 = [];
  for (let o8 = 0; o8 < n5.length; o8++) {
    const s6 = n5[o8](e4, t12);
    if (s6 && (o(s6) ? r6.push(...s6) : r6.push(s6)), !t12.currentNode) return;
    e4 = t12.currentNode;
  }
  switch (e4.type) {
    case 3:
      t12.ssr || t12.helper(be);
      break;
    case 5:
      t12.ssr || t12.helper(Ve);
      break;
    case 9:
      for (let n6 = 0; n6 < e4.branches.length; n6++) traverseNode(e4.branches[n6], t12);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      !(function(e5, t13) {
        let n6 = 0;
        const nodeRemoved = /* @__PURE__ */ __name(() => {
          n6--;
        }, "nodeRemoved");
        for (; n6 < e5.children.length; n6++) {
          const r7 = e5.children[n6];
          isString(r7) || (t13.grandParent = t13.parent, t13.parent = e5, t13.childIndex = n6, t13.onNodeRemoved = nodeRemoved, traverseNode(r7, t13));
        }
      })(e4, t12);
  }
  t12.currentNode = e4;
  let o7 = r6.length;
  for (; o7--; ) r6[o7]();
}
function createStructuralDirectiveTransform(e4, t12) {
  const n5 = isString(e4) ? (t13) => t13 === e4 : (t13) => e4.test(t13);
  return (e5, r6) => {
    if (1 === e5.type) {
      const { props: o7 } = e5;
      if (3 === e5.tagType && o7.some(isVSlot)) return;
      const s6 = [];
      for (let i4 = 0; i4 < o7.length; i4++) {
        const a8 = o7[i4];
        if (7 === a8.type && n5(a8.name)) {
          o7.splice(i4, 1), i4--;
          const n6 = t12(e5, a8, r6);
          n6 && s6.push(n6);
        }
      }
      return s6;
    }
  };
}
function generate(e4, t12 = {}) {
  const n5 = (function(e5, { mode: t13 = "function", prefixIdentifiers: n6 = "module" === t13, sourceMap: r7 = false, filename: o8 = "template.vue.html", scopeId: s7 = null, optimizeImports: i5 = false, runtimeGlobalName: a9 = "Vue", runtimeModuleName: c5 = "vue", ssrRuntimeModuleName: l6 = "vue/server-renderer", ssr: u6 = false, isTS: p6 = false, inSSR: d6 = false }) {
    const h6 = { mode: t13, prefixIdentifiers: n6, sourceMap: r7, filename: o8, scopeId: s7, optimizeImports: i5, runtimeGlobalName: a9, runtimeModuleName: c5, ssrRuntimeModuleName: l6, ssr: u6, isTS: p6, inSSR: d6, source: e5.source, code: "", column: 1, line: 1, offset: 0, indentLevel: 0, pure: false, map: void 0, helper: /* @__PURE__ */ __name((e6) => `_${tt[e6]}`, "helper"), push(e6, t14 = -2, n7) {
      h6.code += e6;
    }, indent() {
      newline(++h6.indentLevel);
    }, deindent(e6 = false) {
      e6 ? --h6.indentLevel : newline(--h6.indentLevel);
    }, newline() {
      newline(h6.indentLevel);
    } };
    function newline(e6) {
      h6.push("\n" + "  ".repeat(e6), 0);
    }
    __name(newline, "newline");
    return h6;
  })(e4, t12);
  t12.onContextCreated && t12.onContextCreated(n5);
  const { mode: r6, push: o7, prefixIdentifiers: s6, indent: i4, deindent: a8, newline: c4, scopeId: l5, ssr: u5 } = n5, p5 = Array.from(e4.helpers), d5 = p5.length > 0, h5 = !s6 && "module" !== r6;
  !(function(e5, t13) {
    const { ssr: n6, prefixIdentifiers: r7, push: o8, newline: s7, runtimeModuleName: i5, runtimeGlobalName: a9, ssrRuntimeModuleName: c5 } = t13, l6 = a9, u6 = Array.from(e5.helpers);
    if (u6.length > 0 && (o8(`const _Vue = ${l6}
`, -1), e5.hoists.length)) {
      o8(`const { ${[Ce, xe, be, Oe, Ie].filter((e6) => u6.includes(e6)).map(aliasHelper).join(", ")} } = _Vue
`, -1);
    }
    (function(e6, t14) {
      if (!e6.length) return;
      t14.pure = true;
      const { push: n7, newline: r8 } = t14;
      r8();
      for (let o9 = 0; o9 < e6.length; o9++) {
        const s8 = e6[o9];
        s8 && (n7(`const _hoisted_${o9 + 1} = `), genNode(s8, t14), r8());
      }
      t14.pure = false;
    })(e5.hoists, t13), s7(), o8("return ");
  })(e4, n5);
  if (o7(`function ${u5 ? "ssrRender" : "render"}(${(u5 ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`), i4(), h5 && (o7("with (_ctx) {"), i4(), d5 && (o7(`const { ${p5.map(aliasHelper).join(", ")} } = _Vue
`, -1), c4())), e4.components.length && (genAssets(e4.components, "component", n5), (e4.directives.length || e4.temps > 0) && c4()), e4.directives.length && (genAssets(e4.directives, "directive", n5), e4.temps > 0 && c4()), e4.filters && e4.filters.length && (c4(), genAssets(e4.filters, "filter", n5), c4()), e4.temps > 0) {
    o7("let ");
    for (let t13 = 0; t13 < e4.temps; t13++) o7(`${t13 > 0 ? ", " : ""}_temp${t13}`);
  }
  return (e4.components.length || e4.directives.length || e4.temps) && (o7("\n", 0), c4()), u5 || o7("return "), e4.codegenNode ? genNode(e4.codegenNode, n5) : o7("null"), h5 && (a8(), o7("}")), a8(), o7("}"), { ast: e4, code: n5.code, preamble: "", map: n5.map ? n5.map.toJSON() : void 0 };
}
function genAssets(e4, t12, { helper: n5, push: r6, newline: o7, isTS: s6 }) {
  const i4 = n5("filter" === t12 ? Le : "component" === t12 ? Re : Pe);
  for (let n6 = 0; n6 < e4.length; n6++) {
    let a8 = e4[n6];
    const c4 = a8.endsWith("__self");
    c4 && (a8 = a8.slice(0, -6)), r6(`const ${toValidAssetId(a8, t12)} = ${i4}(${JSON.stringify(a8)}${c4 ? ", true" : ""})${s6 ? "!" : ""}`), n6 < e4.length - 1 && o7();
  }
}
function genNodeListAsArray(e4, t12) {
  const n5 = e4.length > 3 || false;
  t12.push("["), n5 && t12.indent(), genNodeList(e4, t12, n5), n5 && t12.deindent(), t12.push("]");
}
function genNodeList(e4, t12, n5 = false, r6 = true) {
  const { push: o7, newline: s6 } = t12;
  for (let i4 = 0; i4 < e4.length; i4++) {
    const a8 = e4[i4];
    isString(a8) ? o7(a8, -3) : o(a8) ? genNodeListAsArray(a8, t12) : genNode(a8, t12), i4 < e4.length - 1 && (n5 ? (r6 && o7(","), s6()) : r6 && o7(", "));
  }
}
function genNode(e4, t12) {
  if (isString(e4)) t12.push(e4, -3);
  else if (isSymbol(e4)) t12.push(t12.helper(e4));
  else switch (e4.type) {
    case 1:
    case 9:
    case 11:
    case 12:
      genNode(e4.codegenNode, t12);
      break;
    case 2:
      !(function(e5, t13) {
        t13.push(JSON.stringify(e5.content), -3, e5);
      })(e4, t12);
      break;
    case 4:
      genExpression(e4, t12);
      break;
    case 5:
      !(function(e5, t13) {
        const { push: n5, helper: r6, pure: o7 } = t13;
        o7 && n5(Bt);
        n5(`${r6(Ve)}(`), genNode(e5.content, t13), n5(")");
      })(e4, t12);
      break;
    case 8:
      genCompoundExpression(e4, t12);
      break;
    case 3:
      !(function(e5, t13) {
        const { push: n5, helper: r6, pure: o7 } = t13;
        o7 && n5(Bt);
        n5(`${r6(be)}(${JSON.stringify(e5.content)})`, -3, e5);
      })(e4, t12);
      break;
    case 13:
      !(function(e5, t13) {
        const { push: n5, helper: r6, pure: o7 } = t13, { tag: s6, props: i4, children: a8, patchFlag: c4, dynamicProps: l5, directives: u5, isBlock: p5, disableTracking: d5, isComponent: h5 } = e5;
        let f4;
        c4 && (f4 = String(c4));
        u5 && n5(r6(Me) + "(");
        p5 && n5(`(${r6(Te)}(${d5 ? "true" : ""}), `);
        o7 && n5(Bt);
        const m5 = p5 ? getVNodeBlockHelper(t13.inSSR, h5) : getVNodeHelper(t13.inSSR, h5);
        n5(r6(m5) + "(", -2, e5), genNodeList((function(e6) {
          let t14 = e6.length;
          for (; t14-- && null == e6[t14]; ) ;
          return e6.slice(0, t14 + 1).map((e7) => e7 || "null");
        })([s6, i4, a8, f4, l5]), t13), n5(")"), p5 && n5(")");
        u5 && (n5(", "), genNode(u5, t13), n5(")"));
      })(e4, t12);
      break;
    case 14:
      !(function(e5, t13) {
        const { push: n5, helper: r6, pure: o7 } = t13, s6 = isString(e5.callee) ? e5.callee : r6(e5.callee);
        o7 && n5(Bt);
        n5(s6 + "(", -2, e5), genNodeList(e5.arguments, t13), n5(")");
      })(e4, t12);
      break;
    case 15:
      !(function(e5, t13) {
        const { push: n5, indent: r6, deindent: o7, newline: s6 } = t13, { properties: i4 } = e5;
        if (!i4.length) return void n5("{}", -2, e5);
        const a8 = i4.length > 1 || false;
        n5(a8 ? "{" : "{ "), a8 && r6();
        for (let e6 = 0; e6 < i4.length; e6++) {
          const { key: r7, value: o8 } = i4[e6];
          genExpressionAsPropertyKey(r7, t13), n5(": "), genNode(o8, t13), e6 < i4.length - 1 && (n5(","), s6());
        }
        a8 && o7(), n5(a8 ? "}" : " }");
      })(e4, t12);
      break;
    case 17:
      !(function(e5, t13) {
        genNodeListAsArray(e5.elements, t13);
      })(e4, t12);
      break;
    case 18:
      !(function(e5, t13) {
        const { push: n5, indent: r6, deindent: o7 } = t13, { params: s6, returns: i4, body: a8, newline: c4, isSlot: l5 } = e5;
        l5 && n5(`_${tt[ze]}(`);
        n5("(", -2, e5), o(s6) ? genNodeList(s6, t13) : s6 && genNode(s6, t13);
        n5(") => "), (c4 || a8) && (n5("{"), r6());
        i4 ? (c4 && n5("return "), o(i4) ? genNodeListAsArray(i4, t13) : genNode(i4, t13)) : a8 && genNode(a8, t13);
        (c4 || a8) && (o7(), n5("}"));
        l5 && (e5.isNonScopedSlot && n5(", undefined, true"), n5(")"));
      })(e4, t12);
      break;
    case 19:
      !(function(e5, t13) {
        const { test: n5, consequent: r6, alternate: o7, newline: s6 } = e5, { push: i4, indent: a8, deindent: c4, newline: l5 } = t13;
        if (4 === n5.type) {
          const e6 = !isSimpleIdentifier(n5.content);
          e6 && i4("("), genExpression(n5, t13), e6 && i4(")");
        } else i4("("), genNode(n5, t13), i4(")");
        s6 && a8(), t13.indentLevel++, s6 || i4(" "), i4("? "), genNode(r6, t13), t13.indentLevel--, s6 && l5(), s6 || i4(" "), i4(": ");
        const u5 = 19 === o7.type;
        u5 || t13.indentLevel++;
        genNode(o7, t13), u5 || t13.indentLevel--;
        s6 && c4(true);
      })(e4, t12);
      break;
    case 20:
      !(function(e5, t13) {
        const { push: n5, helper: r6, indent: o7, deindent: s6, newline: i4 } = t13, { needPauseTracking: a8, needArraySpread: c4 } = e5;
        c4 && n5("[...(");
        n5(`_cache[${e5.index}] || (`), a8 && (o7(), n5(`${r6(qe)}(-1`), e5.inVOnce && n5(", true"), n5("),"), i4(), n5("("));
        n5(`_cache[${e5.index}] = `), genNode(e5.value, t13), a8 && (n5(`).cacheIndex = ${e5.index},`), i4(), n5(`${r6(qe)}(1),`), i4(), n5(`_cache[${e5.index}]`), s6());
        n5(")"), c4 && n5(")]");
      })(e4, t12);
      break;
    case 21:
      genNodeList(e4.body, t12, true, false);
  }
}
function genExpression(e4, t12) {
  const { content: n5, isStatic: r6 } = e4;
  t12.push(r6 ? JSON.stringify(n5) : n5, -3, e4);
}
function genCompoundExpression(e4, t12) {
  for (let n5 = 0; n5 < e4.children.length; n5++) {
    const r6 = e4.children[n5];
    isString(r6) ? t12.push(r6, -3) : genNode(r6, t12);
  }
}
function genExpressionAsPropertyKey(e4, t12) {
  const { push: n5 } = t12;
  if (8 === e4.type) n5("["), genCompoundExpression(e4, t12), n5("]");
  else if (e4.isStatic) {
    n5(isSimpleIdentifier(e4.content) ? e4.content : JSON.stringify(e4.content), -2, e4);
  } else n5(`[${e4.content}]`, -3, e4);
}
function processExpression(e4, t12, n5 = false, r6 = false, o7 = Object.create(t12.identifiers)) {
  return e4;
}
function processIf(e4, t12, n5, r6) {
  if (!("else" === t12.name || t12.exp && t12.exp.content.trim())) {
    const r7 = t12.exp ? t12.exp.loc : e4.loc;
    n5.onError(createCompilerError(28, t12.loc)), t12.exp = createSimpleExpression("true", false, r7);
  }
  if ("if" === t12.name) {
    const s6 = createIfBranch(e4, t12), i4 = { type: 9, loc: (o7 = e4.loc, getLoc(o7.start.offset, o7.end.offset)), branches: [s6] };
    if (n5.replaceNode(i4), r6) return r6(i4, s6, true);
  } else {
    const o8 = n5.parent.children;
    let s6 = o8.indexOf(e4);
    for (; s6-- >= -1; ) {
      const i4 = o8[s6];
      if (!i4 || !isCommentOrWhitespace(i4)) {
        if (i4 && 9 === i4.type) {
          "else-if" !== t12.name && "else" !== t12.name || void 0 !== i4.branches[i4.branches.length - 1].condition || n5.onError(createCompilerError(30, e4.loc)), n5.removeNode();
          const o9 = createIfBranch(e4, t12);
          i4.branches.push(o9);
          const s7 = r6 && r6(i4, o9, false);
          traverseNode(o9, n5), s7 && s7(), n5.currentNode = null;
        } else n5.onError(createCompilerError(30, e4.loc));
        break;
      }
      n5.removeNode(i4);
    }
  }
  var o7;
}
function createIfBranch(e4, t12) {
  const n5 = 3 === e4.tagType;
  return { type: 10, loc: e4.loc, condition: "else" === t12.name ? void 0 : t12.exp, children: n5 && !findDir(e4, "for") ? e4.children : [e4], userKey: findProp(e4, "key"), isTemplateIf: n5 };
}
function createCodegenNodeForBranch(e4, t12, n5) {
  return e4.condition ? createConditionalExpression(e4.condition, createChildrenCodegenNode(e4, t12, n5), createCallExpression(n5.helper(be), ['""', "true"])) : createChildrenCodegenNode(e4, t12, n5);
}
function createChildrenCodegenNode(e4, t12, n5) {
  const { helper: r6 } = n5, o7 = createObjectProperty("key", createSimpleExpression(`${t12}`, false, nt, 2)), { children: s6 } = e4, i4 = s6[0];
  if (1 !== s6.length || 1 !== i4.type) {
    if (1 === s6.length && 11 === i4.type) {
      const e5 = i4.codegenNode;
      return injectProp(e5, o7, n5), e5;
    }
    {
      let t13 = 64;
      return createVNodeCall(n5, r6(ge), createObjectExpression([o7]), s6, t13, void 0, void 0, true, false, false, e4.loc);
    }
  }
  {
    const e5 = i4.codegenNode, t13 = getMemoedVNodeCall(e5);
    return 13 === t13.type && convertToBlock(t13, n5), injectProp(t13, o7, n5), e5;
  }
}
function processFor(e4, t12, n5, r6) {
  if (!t12.exp) return void n5.onError(createCompilerError(31, t12.loc));
  const o7 = t12.forParseResult;
  if (!o7) return void n5.onError(createCompilerError(32, t12.loc));
  finalizeForParseResult(o7);
  const { addIdentifiers: s6, removeIdentifiers: i4, scopes: a8 } = n5, { source: c4, value: l5, key: u5, index: p5 } = o7, d5 = { type: 11, loc: t12.loc, source: c4, valueAlias: l5, keyAlias: u5, objectIndexAlias: p5, parseResult: o7, children: isTemplateNode(e4) ? e4.children : [e4] };
  n5.replaceNode(d5), a8.vFor++;
  const h5 = r6 && r6(d5);
  return () => {
    a8.vFor--, h5 && h5();
  };
}
function finalizeForParseResult(e4, t12) {
  e4.finalized || (e4.finalized = true);
}
function createForLoopParams({ value: e4, key: t12, index: n5 }, r6 = []) {
  return (function(e5) {
    let t13 = e5.length;
    for (; t13-- && !e5[t13]; ) ;
    return e5.slice(0, t13 + 1).map((e6, t14) => e6 || createSimpleExpression("_".repeat(t14 + 1), false));
  })([e4, t12, n5, ...r6]);
}
function buildSlots(e4, t12, n5 = buildClientSlotFn) {
  t12.helper(ze);
  const { children: r6, loc: o7 } = e4, s6 = [], i4 = [];
  let a8 = t12.scopes.vSlot > 0 || t12.scopes.vFor > 0;
  const c4 = findDir(e4, "slot", true);
  if (c4) {
    const { arg: e5, exp: t13 } = c4;
    e5 && !isStaticExp(e5) && (a8 = true), s6.push(createObjectProperty(e5 || createSimpleExpression("default", true), n5(t13, void 0, r6, o7)));
  }
  let l5 = false, u5 = false;
  const p5 = [], d5 = /* @__PURE__ */ new Set();
  let h5 = 0;
  for (let e5 = 0; e5 < r6.length; e5++) {
    const o8 = r6[e5];
    let f5;
    if (!isTemplateNode(o8) || !(f5 = findDir(o8, "slot", true))) {
      3 !== o8.type && p5.push(o8);
      continue;
    }
    if (c4) {
      t12.onError(createCompilerError(37, f5.loc));
      break;
    }
    l5 = true;
    const { children: m6, loc: g5 } = o8, { arg: E3 = createSimpleExpression("default", true), exp: S3, loc: _3 } = f5;
    let y3;
    isStaticExp(E3) ? y3 = E3 ? E3.content : "default" : a8 = true;
    const T3 = findDir(o8, "for"), N3 = n5(S3, T3, m6, g5);
    let v3, C3;
    if (v3 = findDir(o8, "if")) a8 = true, i4.push(createConditionalExpression(v3.exp, buildDynamicSlot(E3, N3, h5++), jt));
    else if (C3 = findDir(o8, /^else(?:-if)?$/, true)) {
      let n6, o9 = e5;
      for (; o9-- && (n6 = r6[o9], isCommentOrWhitespace(n6)); ) ;
      if (n6 && isTemplateNode(n6) && findDir(n6, /^(?:else-)?if$/)) {
        let e6 = i4[i4.length - 1];
        for (; 19 === e6.alternate.type; ) e6 = e6.alternate;
        e6.alternate = C3.exp ? createConditionalExpression(C3.exp, buildDynamicSlot(E3, N3, h5++), jt) : buildDynamicSlot(E3, N3, h5++);
      } else t12.onError(createCompilerError(30, C3.loc));
    } else if (T3) {
      a8 = true;
      const e6 = T3.forParseResult;
      e6 ? (finalizeForParseResult(e6), i4.push(createCallExpression(t12.helper(we), [e6.source, createFunctionExpression(createForLoopParams(e6), buildDynamicSlot(E3, N3), true)]))) : t12.onError(createCompilerError(32, T3.loc));
    } else {
      if (y3) {
        if (d5.has(y3)) {
          t12.onError(createCompilerError(38, _3));
          continue;
        }
        d5.add(y3), "default" === y3 && (u5 = true);
      }
      s6.push(createObjectProperty(E3, N3));
    }
  }
  if (!c4) {
    const buildDefaultSlotProperty = /* @__PURE__ */ __name((e5, r7) => {
      const s7 = n5(e5, void 0, r7, o7);
      return t12.compatConfig && (s7.isNonScopedSlot = true), createObjectProperty("default", s7);
    }, "buildDefaultSlotProperty");
    l5 ? p5.length && !p5.every(isWhitespaceText) && (u5 ? t12.onError(createCompilerError(39, p5[0].loc)) : s6.push(buildDefaultSlotProperty(void 0, p5))) : s6.push(buildDefaultSlotProperty(void 0, r6));
  }
  const f4 = a8 ? 2 : hasForwardedSlots(e4.children) ? 3 : 1;
  let m5 = createObjectExpression(s6.concat(createObjectProperty("_", createSimpleExpression(f4 + "", false))), o7);
  return i4.length && (m5 = createCallExpression(t12.helper(De), [m5, createArrayExpression(i4)])), { slots: m5, hasDynamicSlots: a8 };
}
function buildDynamicSlot(e4, t12, n5) {
  const r6 = [createObjectProperty("name", e4), createObjectProperty("fn", t12)];
  return null != n5 && r6.push(createObjectProperty("key", createSimpleExpression(String(n5), true))), createObjectExpression(r6);
}
function hasForwardedSlots(e4) {
  for (let t12 = 0; t12 < e4.length; t12++) {
    const n5 = e4[t12];
    switch (n5.type) {
      case 1:
        if (2 === n5.tagType || hasForwardedSlots(n5.children)) return true;
        break;
      case 9:
        if (hasForwardedSlots(n5.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(n5.children)) return true;
    }
  }
  return false;
}
function resolveComponentType(e4, t12, n5 = false) {
  let { tag: r6 } = e4;
  const o7 = isComponentTag(r6), s6 = findProp(e4, "is", false, true);
  if (s6) if (o7 || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t12)) {
    let e5;
    if (6 === s6.type ? e5 = s6.value && createSimpleExpression(s6.value.content, true) : (e5 = s6.exp, e5 || (e5 = createSimpleExpression("is", false, s6.arg.loc))), e5) return createCallExpression(t12.helper(Ae), [e5]);
  } else 6 === s6.type && s6.value.content.startsWith("vue:") && (r6 = s6.value.content.slice(4));
  const i4 = isCoreComponent(r6) || t12.isBuiltInComponent(r6);
  return i4 ? (n5 || t12.helper(i4), i4) : (t12.helper(Re), t12.components.add(r6), toValidAssetId(r6, "component"));
}
function buildProps(e4, t12, n5 = e4.props, r6, o7, s6 = false) {
  const { tag: i4, loc: a8, children: c4 } = e4;
  let l5 = [];
  const u5 = [], p5 = [], d5 = c4.length > 0;
  let h5 = false, f4 = false, m5 = 0, g5 = false, E3 = false, S3 = false, _3 = false, y3 = false, T3 = false;
  const N3 = [], pushMergeArg = /* @__PURE__ */ __name((e5) => {
    l5.length && (u5.push(createObjectExpression(dedupeProperties(l5), a8)), l5 = []), e5 && u5.push(e5);
  }, "pushMergeArg"), pushRefVForMarker = /* @__PURE__ */ __name(() => {
    t12.scopes.vFor > 0 && l5.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
  }, "pushRefVForMarker"), analyzePatchFlag = /* @__PURE__ */ __name(({ key: e5, value: n6 }) => {
    if (isStaticExp(e5)) {
      const s7 = e5.content, i5 = isOn(s7);
      if (!i5 || r6 && !o7 || "onclick" === s7.toLowerCase() || "onUpdate:modelValue" === s7 || s(s7) || (_3 = true), i5 && s(s7) && (T3 = true), "ref" === s7 && (g5 = true), i5 && 14 === n6.type && (n6 = n6.arguments[0]), 20 === n6.type || (4 === n6.type || 8 === n6.type) && getConstantType(n6, t12) > 0) return;
      "class" === s7 ? E3 = true : "style" === s7 ? S3 = true : "ref" === s7 || "key" === s7 || N3.includes(s7) || N3.push(s7), !r6 || "class" !== s7 && "style" !== s7 || N3.includes(s7) || N3.push(s7);
    } else y3 = true;
  }, "analyzePatchFlag");
  for (let o8 = 0; o8 < n5.length; o8++) {
    const c5 = n5[o8];
    if (6 === c5.type) {
      const { loc: e5, name: n6, nameLoc: r7, value: o9 } = c5;
      let s7 = true;
      if ("ref" === n6 && (g5 = true, pushRefVForMarker()), "is" === n6 && (isComponentTag(i4) || o9 && o9.content.startsWith("vue:") || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t12))) continue;
      l5.push(createObjectProperty(createSimpleExpression(n6, true, r7), createSimpleExpression(o9 ? o9.content : "", s7, o9 ? o9.loc : e5)));
    } else {
      const { name: n6, arg: o9, exp: g6, loc: E4, modifiers: S4 } = c5, _4 = "bind" === n6, T4 = "on" === n6;
      if ("slot" === n6) {
        r6 || t12.onError(createCompilerError(40, E4));
        continue;
      }
      if ("once" === n6 || "memo" === n6) continue;
      if ("is" === n6 || _4 && isStaticArgOf(o9, "is") && (isComponentTag(i4) || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t12))) continue;
      if (T4 && s6) continue;
      if (_4 && isStaticArgOf(o9, "key") && (h5 = true), T4 && d5 && o9 && isStaticExp(o9) && "vue:beforeUpdate" === p(o9.content) && (h5 = true, f4 = true), _4 && isStaticArgOf(o9, "ref") && pushRefVForMarker(), !o9 && (_4 || T4)) {
        if (y3 = true, g6) if (_4) {
          if (pushMergeArg(), isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", t12)) {
            u5.unshift(g6);
            continue;
          }
          pushRefVForMarker(), pushMergeArg(), u5.push(g6);
        } else pushMergeArg({ type: 14, loc: E4, callee: t12.helper(He), arguments: r6 ? [g6] : [g6, "true"] });
        else t12.onError(createCompilerError(_4 ? 34 : 35, E4));
        continue;
      }
      _4 && S4.some((e5) => "prop" === e5.content) && (m5 |= 32);
      const N4 = t12.directiveTransforms[n6];
      if (N4) {
        const { props: n7, needRuntime: r7 } = N4(c5, e4, t12);
        !s6 && n7.forEach(analyzePatchFlag), T4 && o9 && !isStaticExp(o9) ? pushMergeArg(createObjectExpression(n7, a8)) : l5.push(...n7), r7 && (p5.push(c5), isSymbol(r7) && Ht.set(c5, r7));
      } else l(n6) || (p5.push(c5), d5 && (h5 = true, f4 = true));
    }
  }
  let v3;
  u5.length ? (pushMergeArg(), v3 = u5.length > 1 ? createCallExpression(t12.helper(Fe), u5, a8) : u5[0]) : l5.length && (v3 = createObjectExpression(dedupeProperties(l5), a8)), y3 ? m5 |= 16 : (E3 && !r6 && (m5 |= 2), S3 && !r6 && (m5 |= 4), N3.length && (m5 |= 8), _3 && (m5 |= 32));
  const C3 = (0 === m5 || 32 === m5) && (g5 || T3 || p5.length > 0);
  if (!h5 && C3 && (m5 |= 512), !t12.inSSR && v3) switch (v3.type) {
    case 15:
      let e5 = -1, n6 = -1, r7 = false;
      for (let t13 = 0; t13 < v3.properties.length; t13++) {
        const o9 = v3.properties[t13].key;
        isStaticExp(o9) ? "class" === o9.content ? e5 = t13 : "style" === o9.content && (n6 = t13) : o9.isHandlerKey || (r7 = true);
      }
      const o8 = v3.properties[e5], s7 = v3.properties[n6];
      r7 ? v3 = createCallExpression(t12.helper(Ue), [v3]) : (o8 && !isStaticExp(o8.value) && (o8.value = createCallExpression(t12.helper(Be), [o8.value])), s7 && (S3 || 4 === s7.value.type && "[" === s7.value.content.trim()[0] || 17 === s7.value.type) && (s7.value = createCallExpression(t12.helper(Xe), [s7.value])));
      break;
    case 14:
      break;
    default:
      v3 = createCallExpression(t12.helper(Ue), [createCallExpression(t12.helper(je), [v3])]);
  }
  return { props: v3, directives: p5, patchFlag: m5, dynamicPropNames: N3, shouldUseBlock: h5, needsPatch: C3, isBlockRequired: f4 };
}
function dedupeProperties(e4) {
  const t12 = /* @__PURE__ */ new Map(), n5 = [];
  for (let r6 = 0; r6 < e4.length; r6++) {
    const o7 = e4[r6];
    if (8 === o7.key.type || !o7.key.isStatic) {
      n5.push(o7);
      continue;
    }
    const s6 = o7.key.content, i4 = t12.get(s6);
    i4 ? ("style" === s6 || "class" === s6 || isOn(s6)) && mergeAsArray(i4, o7) : (t12.set(s6, o7), n5.push(o7));
  }
  return n5;
}
function mergeAsArray(e4, t12) {
  17 === e4.value.type ? e4.value.elements.push(t12.value) : e4.value = createArrayExpression([e4.value, t12.value], e4.loc);
}
function buildDirectiveArgs(e4, t12) {
  const n5 = [], r6 = Ht.get(e4);
  r6 ? n5.push(t12.helperString(r6)) : (t12.helper(Pe), t12.directives.add(e4.name), n5.push(toValidAssetId(e4.name, "directive")));
  const { loc: o7 } = e4;
  if (e4.exp && n5.push(e4.exp), e4.arg && (e4.exp || n5.push("void 0"), n5.push(e4.arg)), Object.keys(e4.modifiers).length) {
    e4.arg || (e4.exp || n5.push("void 0"), n5.push("void 0"));
    const t13 = createSimpleExpression("true", false, o7);
    n5.push(createObjectExpression(e4.modifiers.map((e5) => createObjectProperty(e5, t13)), o7));
  }
  return createArrayExpression(n5, e4.loc);
}
function isComponentTag(e4) {
  return "component" === e4 || "Component" === e4;
}
function processSlotOutlet(e4, t12) {
  let n5, r6 = '"default"';
  const o7 = [];
  for (let t13 = 0; t13 < e4.props.length; t13++) {
    const n6 = e4.props[t13];
    if (6 === n6.type) n6.value && ("name" === n6.name ? r6 = JSON.stringify(n6.value.content) : (n6.name = p(n6.name), o7.push(n6)));
    else if ("bind" === n6.name && isStaticArgOf(n6.arg, "name")) {
      if (n6.exp) r6 = n6.exp;
      else if (n6.arg && 4 === n6.arg.type) {
        const e5 = p(n6.arg.content);
        r6 = n6.exp = createSimpleExpression(e5, false, n6.arg.loc);
      }
    } else "bind" === n6.name && n6.arg && isStaticExp(n6.arg) && (n6.arg.content = p(n6.arg.content)), o7.push(n6);
  }
  if (o7.length > 0) {
    const { props: r7, directives: s6 } = buildProps(e4, t12, o7, false, false);
    n5 = r7, s6.length && t12.onError(createCompilerError(36, s6[0].loc));
  }
  return { slotName: r6, slotProps: n5 };
}
function createTransformProps(e4 = []) {
  return { props: e4 };
}
function rewriteFilter(e4, t12) {
  if (4 === e4.type) parseFilter(e4, t12);
  else for (let n5 = 0; n5 < e4.children.length; n5++) {
    const r6 = e4.children[n5];
    "object" == typeof r6 && (4 === r6.type ? parseFilter(r6, t12) : 8 === r6.type ? rewriteFilter(r6, t12) : 5 === r6.type && rewriteFilter(r6.content, t12));
  }
}
function parseFilter(e4, t12) {
  const n5 = e4.content;
  let r6, o7, s6, i4, a8 = false, c4 = false, l5 = false, u5 = false, p5 = 0, d5 = 0, h5 = 0, f4 = 0, m5 = [];
  for (s6 = 0; s6 < n5.length; s6++) if (o7 = r6, r6 = n5.charCodeAt(s6), a8) 39 === r6 && 92 !== o7 && (a8 = false);
  else if (c4) 34 === r6 && 92 !== o7 && (c4 = false);
  else if (l5) 96 === r6 && 92 !== o7 && (l5 = false);
  else if (u5) 47 === r6 && 92 !== o7 && (u5 = false);
  else if (124 !== r6 || 124 === n5.charCodeAt(s6 + 1) || 124 === n5.charCodeAt(s6 - 1) || p5 || d5 || h5) {
    switch (r6) {
      case 34:
        c4 = true;
        break;
      case 39:
        a8 = true;
        break;
      case 96:
        l5 = true;
        break;
      case 40:
        h5++;
        break;
      case 41:
        h5--;
        break;
      case 91:
        d5++;
        break;
      case 93:
        d5--;
        break;
      case 123:
        p5++;
        break;
      case 125:
        p5--;
    }
    if (47 === r6) {
      let e5, t13 = s6 - 1;
      for (; t13 >= 0 && (e5 = n5.charAt(t13), " " === e5); t13--) ;
      e5 && Wt.test(e5) || (u5 = true);
    }
  } else void 0 === i4 ? (f4 = s6 + 1, i4 = n5.slice(0, s6).trim()) : pushFilter();
  function pushFilter() {
    m5.push(n5.slice(f4, s6).trim()), f4 = s6 + 1;
  }
  __name(pushFilter, "pushFilter");
  if (void 0 === i4 ? i4 = n5.slice(0, s6).trim() : 0 !== f4 && pushFilter(), m5.length) {
    for (s6 = 0; s6 < m5.length; s6++) i4 = wrapFilter(i4, m5[s6], t12);
    e4.content = i4, e4.ast = void 0;
  }
}
function wrapFilter(e4, t12, n5) {
  n5.helper(Le);
  const r6 = t12.indexOf("(");
  if (r6 < 0) return n5.filters.add(t12), `${toValidAssetId(t12, "filter")}(${e4})`;
  {
    const o7 = t12.slice(0, r6), s6 = t12.slice(r6 + 1);
    return n5.filters.add(o7), `${toValidAssetId(o7, "filter")}(${e4}${")" !== s6 ? "," + s6 : s6}`;
  }
}
function getBaseTransformPreset(e4) {
  return [[transformVBindShorthand, transformOnce, Xt, transformMemo, Ut, transformFilter, transformSlotOutlet, transformElement, trackSlotScopes, transformText], { on: transformOn$1, bind: transformBind, model: transformModel$1 }];
}
function baseCompile(e4, t12 = {}) {
  const n5 = t12.onError || defaultOnError, r6 = "module" === t12.mode;
  true === t12.prefixIdentifiers ? n5(createCompilerError(48)) : r6 && n5(createCompilerError(49));
  t12.cacheHandlers && n5(createCompilerError(50)), t12.scopeId && !r6 && n5(createCompilerError(51));
  const o7 = n({}, t12, { prefixIdentifiers: false }), s6 = isString(e4) ? baseParse(e4, o7) : e4, [i4, a8] = getBaseTransformPreset();
  return transform(s6, n({}, o7, { nodeTransforms: [...i4, ...t12.nodeTransforms || []], directiveTransforms: n({}, a8, t12.directiveTransforms || {}) })), generate(s6, o7);
}
function createDOMCompilerError(e4, t12) {
  return createCompilerError(e4, t12);
}
function createContext(e4 = {}) {
  let t12, n5 = false;
  const checkConflict = /* @__PURE__ */ __name((e5) => {
    if (t12 && t12 !== e5) throw new Error("Context conflict");
  }, "checkConflict");
  let r6;
  if (e4.asyncContext) {
    const t13 = e4.AsyncLocalStorage || globalThis.AsyncLocalStorage || globalThis.process?.getBuiltinModule?.("node:async_hooks")?.AsyncLocalStorage;
    t13 ? r6 = new t13() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const _wrapInstance = /* @__PURE__ */ __name((e5) => r6 && null !== e5 && "object" == typeof e5 ? { __unctx_weak: new gn(e5) } : e5, "_wrapInstance"), _getCurrentInstance = /* @__PURE__ */ __name(() => {
    if (r6) {
      const e5 = r6.getStore();
      if (void 0 !== e5) return ((e6) => e6 && e6.__unctx_weak ? e6.__unctx_weak.deref() : e6)(e5);
    }
    return t12;
  }, "_getCurrentInstance");
  return { use: /* @__PURE__ */ __name(() => {
    const e5 = _getCurrentInstance();
    if (void 0 === e5) throw new Error("Context is not available");
    return e5;
  }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance() ?? null, "tryUse"), set: /* @__PURE__ */ __name((e5, r7) => {
    r7 || checkConflict(e5), t12 = e5, n5 = true;
  }, "set"), unset: /* @__PURE__ */ __name(() => {
    t12 = void 0, n5 = false;
  }, "unset"), call: /* @__PURE__ */ __name((e5, o7) => {
    checkConflict(e5), t12 = e5;
    try {
      return r6 ? r6.run(_wrapInstance(e5), o7) : o7();
    } finally {
      n5 || (t12 = void 0);
    }
  }, "call"), async callAsync(e5, o7) {
    t12 = e5;
    const onRestore = /* @__PURE__ */ __name(() => {
      t12 = e5;
    }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t12 === e5 ? onRestore : void 0, "onLeave");
    Tn.add(onLeave);
    try {
      const s6 = r6 ? r6.run(_wrapInstance(e5), o7) : o7();
      return n5 || (t12 = void 0), await s6;
    } finally {
      Tn.delete(onLeave);
    }
  } };
}
function executeAsync(e4) {
  const t12 = [];
  for (const e5 of Tn) {
    const n6 = e5();
    n6 && t12.push(n6);
  }
  const restore = /* @__PURE__ */ __name(() => {
    for (const e5 of t12) e5();
  }, "restore");
  let n5 = e4();
  return n5 && "object" == typeof n5 && "catch" in n5 && (n5 = n5.catch((e5) => {
    throw restore(), e5;
  })), [n5, restore];
}
function docsBase(e4) {
  return `https://nuxt.com/docs/4.x/errors/${e4.replace("NUXT_", "").toLowerCase()}`;
}
function getNuxtAppCtx(e4 = "nuxt-app") {
  return ((e5, t12 = {}) => _n.get(e5, t12))(e4, { asyncContext: false });
}
async function applyPlugin(e4, t12) {
  if ("function" == typeof t12) {
    const run = /* @__PURE__ */ __name(() => e4.runWithContext(() => t12(e4)), "run"), { provide: n5 } = await run() || {};
    if (n5 && "object" == typeof n5) for (const t13 in n5) e4.provide(t13, n5[t13]);
  }
}
function defineNuxtPlugin(e4) {
  if ("function" == typeof e4) return e4;
  const t12 = e4._name || e4.name;
  return delete e4.name, Object.assign(e4.setup || (() => {
  }), e4, { [xn]: true, _name: t12 });
}
function callWithNuxt(e4, t12, n5) {
  const fn2 = /* @__PURE__ */ __name(() => t12(), "fn"), r6 = getNuxtAppCtx(e4._id);
  return e4.vueApp.runWithContext(() => r6.callAsync(e4, fn2));
}
function useNuxtApp(e4) {
  const t12 = (function(e5) {
    let t13;
    return mn.hasInjectionContext() && (t13 = mn.getCurrentInstance()?.appContext.app.$nuxt), t13 ||= getNuxtAppCtx(e5).tryUse(), t13 || null;
  })(e4);
  if (!t12) throw vn.NUXT_E1001();
  return t12;
}
function useRuntimeConfig(e4) {
  return useNuxtApp().$config;
}
function defineGetter(e4, t12, n5) {
  Object.defineProperty(e4, t12, { get: /* @__PURE__ */ __name(() => n5, "get") });
}
function useHead$1(e4, t12 = {}) {
  return useHead(e4, { head: t12.head || (function(e5) {
    const t13 = e5 || useNuxtApp();
    return t13.ssrContext?.head || t13.runWithContext(() => {
      if (mn.hasInjectionContext()) {
        const e6 = mn.inject(Ir);
        if (!e6) throw bn.NUXT_E6001();
        return e6;
      }
    });
  })(t12.nuxt), ...t12 });
}
function isRouteComponent(e4) {
  return "object" == typeof e4 || "displayName" in e4 || "props" in e4 || "__vccOpts" in e4;
}
function applyToParams(e4, t12) {
  const n5 = {};
  for (const r6 in t12) {
    const o7 = t12[r6];
    n5[r6] = Mn(o7) ? o7.map(e4) : e4(o7);
  }
  return n5;
}
function mergeOptions(e4, t12) {
  const n5 = {};
  for (const r6 in e4) n5[r6] = r6 in t12 ? t12[r6] : e4[r6];
  return n5;
}
function createRouterError(e4, t12) {
  return Ln(new Error(), { type: e4, [wn]: true }, t12);
}
function isNavigationFailure(e4, t12) {
  return e4 instanceof Error && wn in e4 && (null == t12 || !!(e4.type & t12));
}
function commonEncode(e4) {
  return null == e4 ? "" : encodeURI("" + e4).replace(Yn, "|").replace(qn, "[").replace(Kn, "]");
}
function encodeQueryValue(e4) {
  return commonEncode(e4).replace(Gn, "%2B").replace(er, "+").replace(Un, "%23").replace(jn, "%26").replace(zn, "`").replace(Qn, "{").replace(Zn, "}").replace(Jn, "^");
}
function encodeQueryKey(e4) {
  return encodeQueryValue(e4).replace($n, "%3D");
}
function encodeParam(e4) {
  return (function(e5) {
    return commonEncode(e5).replace(Un, "%23").replace(Wn, "%3F");
  })(e4).replace(Hn, "%2F");
}
function decode(e4) {
  if (null == e4) return null;
  try {
    return decodeURIComponent("" + e4);
  } catch {
  }
  return "" + e4;
}
function parseURL2(e4, t12, n5 = "/") {
  let r6, o7 = {}, s6 = "", i4 = "";
  const a8 = t12.indexOf("#");
  let c4 = t12.indexOf("?");
  return c4 = a8 >= 0 && c4 > a8 ? -1 : c4, c4 >= 0 && (r6 = t12.slice(0, c4), s6 = t12.slice(c4, a8 > 0 ? a8 : t12.length), o7 = e4(s6.slice(1))), a8 >= 0 && (r6 = r6 || t12.slice(0, a8), i4 = t12.slice(a8, t12.length)), r6 = (function(e5, t13) {
    if (isAbsolutePath(e5)) return e5;
    if (!e5) return t13;
    const n6 = t13.split("/"), r7 = e5.split("/"), o8 = r7[r7.length - 1];
    ".." !== o8 && "." !== o8 || r7.push("");
    let s7, i5, a9 = n6.length - 1;
    for (s7 = 0; s7 < r7.length; s7++) if (i5 = r7[s7], "." !== i5) {
      if (".." !== i5) break;
      a9 > 1 && a9--;
    }
    return n6.slice(0, a9).join("/") + "/" + r7.slice(s7).join("/");
  })(null != r6 ? r6 : t12, n5), { fullPath: r6 + s6 + i4, path: r6, query: o7, hash: decode(i4) };
}
function isSameRouteRecord(e4, t12) {
  return (e4.aliasOf || e4) === (t12.aliasOf || t12);
}
function isSameRouteLocationParams(e4, t12) {
  if (Object.keys(e4).length !== Object.keys(t12).length) return false;
  for (var n5 in e4) if (!isSameRouteLocationParamsValue(e4[n5], t12[n5])) return false;
  return true;
}
function isSameRouteLocationParamsValue(e4, t12) {
  return Mn(e4) ? isEquivalentArray(e4, t12) : Mn(t12) ? isEquivalentArray(t12, e4) : (e4 && e4.valueOf()) === (t12 && t12.valueOf());
}
function isEquivalentArray(e4, t12) {
  return Mn(t12) ? e4.length === t12.length && e4.every((e5, n5) => e5 === t12[n5]) : 1 === e4.length && e4[0] === t12;
}
function normalizeBase(e4) {
  if (!e4) if (Xn) {
    const t12 = document.querySelector("base");
    e4 = (e4 = t12 && t12.getAttribute("href") || "/").replace(/^\w+:\/\/[^/]+/, "");
  } else e4 = "/";
  return "/" !== e4[0] && "#" !== e4[0] && (e4 = "/" + e4), e4.replace(tr, "");
}
function createHref(e4, t12) {
  return e4.replace(rr, "#") + t12;
}
function scrollToPosition(e4) {
  let t12;
  if ("el" in e4) {
    const n5 = e4.el, r6 = "string" == typeof n5 && n5.startsWith("#"), o7 = "string" == typeof n5 ? r6 ? document.getElementById(n5.slice(1)) : document.querySelector(n5) : n5;
    if (!o7) return;
    t12 = (function(e5, t13) {
      const n6 = document.documentElement.getBoundingClientRect(), r7 = e5.getBoundingClientRect();
      return { behavior: t13.behavior, left: r7.left - n6.left - (t13.left || 0), top: r7.top - n6.top - (t13.top || 0) };
    })(o7, e4);
  } else t12 = e4;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t12) : window.scrollTo(null != t12.left ? t12.left : window.scrollX, null != t12.top ? t12.top : window.scrollY);
}
function getScrollKey(e4, t12) {
  return (history.state ? history.state.position - t12 : -1) + e4;
}
function saveScrollPosition(e4) {
  or.set(e4, "manual" === history.scrollRestoration ? { left: window.scrollX, top: window.scrollY } : null);
}
function isRouteName(e4) {
  return "string" == typeof e4 || "symbol" == typeof e4;
}
function parseQuery2(e4) {
  const t12 = {};
  if ("" === e4 || "?" === e4) return t12;
  const n5 = ("?" === e4[0] ? e4.slice(1) : e4).split("&");
  for (let e5 = 0; e5 < n5.length; ++e5) {
    const r6 = n5[e5].replace(Gn, " "), o7 = r6.indexOf("="), s6 = decode(o7 < 0 ? r6 : r6.slice(0, o7)), i4 = o7 < 0 ? null : decode(r6.slice(o7 + 1));
    if (s6 in t12) {
      let e6 = t12[s6];
      Mn(e6) || (e6 = t12[s6] = [e6]), e6.push(i4);
    } else t12[s6] = i4;
  }
  return t12;
}
function stringifyQuery(e4) {
  let t12 = "";
  for (let n5 in e4) {
    const r6 = e4[n5];
    n5 = encodeQueryKey(n5), null != r6 ? (Mn(r6) ? r6.map((e5) => e5 && encodeQueryValue(e5)) : [r6 && encodeQueryValue(r6)]).forEach((e5) => {
      void 0 !== e5 && (t12 += (t12.length ? "&" : "") + n5, null != e5 && (t12 += "=" + e5));
    }) : void 0 !== r6 && (t12 += (t12.length ? "&" : "") + n5);
  }
  return t12;
}
function normalizeQuery(e4) {
  const t12 = {};
  for (const n5 in e4) {
    const r6 = e4[n5];
    void 0 !== r6 && (t12[n5] = Mn(r6) ? r6.map((e5) => null == e5 ? null : "" + e5) : null == r6 ? r6 : "" + r6);
  }
  return t12;
}
function useCallbacks() {
  let e4 = [];
  return { add: /* @__PURE__ */ __name(function(t12) {
    return e4.push(t12), () => {
      const n5 = e4.indexOf(t12);
      n5 > -1 && e4.splice(n5, 1);
    };
  }, "add"), list: /* @__PURE__ */ __name(() => e4.slice(), "list"), reset: /* @__PURE__ */ __name(function() {
    e4 = [];
  }, "reset") };
}
function guardToPromiseFn(e4, t12, n5, r6, o7, s6 = (e5) => e5()) {
  const i4 = r6 && (r6.enterCallbacks[o7] = r6.enterCallbacks[o7] || []);
  return () => new Promise((a8, c4) => {
    const next = /* @__PURE__ */ __name((e5) => {
      var s7;
      false === e5 ? c4(createRouterError(4, { from: n5, to: t12 })) : e5 instanceof Error ? c4(e5) : "string" == typeof (s7 = e5) || s7 && "object" == typeof s7 ? c4(createRouterError(2, { from: t12, to: e5 })) : (i4 && r6.enterCallbacks[o7] === i4 && "function" == typeof e5 && i4.push(e5), a8());
    }, "next"), l5 = s6(() => e4.call(r6 && r6.instances[o7], t12, n5, next));
    let u5 = Promise.resolve(l5);
    e4.length < 3 && (u5 = u5.then(next)), u5.catch((e5) => c4(e5));
  });
}
function extractComponentsGuards(e4, t12, n5, r6, o7 = (e5) => e5()) {
  const s6 = [];
  for (const i4 of e4) for (const e5 in i4.components) {
    let a8 = i4.components[e5];
    if ("beforeRouteEnter" === t12 || i4.instances[e5]) if (isRouteComponent(a8)) {
      const c4 = (a8.__vccOpts || a8)[t12];
      c4 && s6.push(guardToPromiseFn(c4, n5, r6, i4, e5, o7));
    } else {
      let c4 = a8();
      s6.push(() => c4.then((s7) => {
        if (!s7) throw new Error(`Couldn't resolve component "${e5}" at "${i4.path}"`);
        const a9 = (c5 = s7).__esModule || "Module" === c5[Symbol.toStringTag] || c5.default && isRouteComponent(c5.default) ? s7.default : s7;
        var c5;
        i4.mods[e5] = s7, i4.components[e5] = a9;
        const l5 = (a9.__vccOpts || a9)[t12];
        return l5 && guardToPromiseFn(l5, n5, r6, i4, e5, o7)();
      }));
    }
  }
  return s6;
}
function createMemoryHistory(e4 = "") {
  let t12 = [], n5 = [["", {}]], r6 = 0;
  function setLocation(e5, t13 = {}) {
    r6++, r6 !== n5.length && n5.splice(r6), n5.push([e5, t13]);
  }
  __name(setLocation, "setLocation");
  const o7 = { location: "", state: {}, base: e4 = normalizeBase(e4), createHref: createHref.bind(null, e4), replace(e5, t13) {
    n5.splice(r6--, 1), setLocation(e5, t13);
  }, push(e5, t13) {
    setLocation(e5, t13);
  }, listen: /* @__PURE__ */ __name((e5) => (t12.push(e5), () => {
    const n6 = t12.indexOf(e5);
    n6 > -1 && t12.splice(n6, 1);
  }), "listen"), destroy() {
    t12 = [], n5 = [["", {}]], r6 = 0;
  }, go(e5, o8 = true) {
    const s6 = this.location, i4 = e5 < 0 ? "back" : "forward";
    r6 = Math.max(0, Math.min(r6 + e5, n5.length - 1)), o8 && (function(e6, n6, { direction: r7, delta: o9 }) {
      const s7 = { direction: r7, delta: o9, type: "pop" };
      for (const r8 of t12) r8(e6, n6, s7);
    })(this.location, s6, { direction: i4, delta: e5 });
  } };
  return Object.defineProperty(o7, "location", { enumerable: true, get: /* @__PURE__ */ __name(() => n5[r6][0], "get") }), Object.defineProperty(o7, "state", { enumerable: true, get: /* @__PURE__ */ __name(() => n5[r6][1], "get") }), o7;
}
function compareScoreArray(e4, t12) {
  let n5 = 0;
  for (; n5 < e4.length && n5 < t12.length; ) {
    const r6 = t12[n5] - e4[n5];
    if (r6) return r6;
    n5++;
  }
  return e4.length < t12.length ? 1 === e4.length && 80 === e4[0] ? -1 : 1 : e4.length > t12.length ? 1 === t12.length && 80 === t12[0] ? 1 : -1 : 0;
}
function comparePathParserScore(e4, t12) {
  let n5 = 0;
  const r6 = e4.score, o7 = t12.score;
  for (; n5 < r6.length && n5 < o7.length; ) {
    const e5 = compareScoreArray(r6[n5], o7[n5]);
    if (e5) return e5;
    n5++;
  }
  if (1 === Math.abs(o7.length - r6.length)) {
    if (isLastScoreNegative(r6)) return 1;
    if (isLastScoreNegative(o7)) return -1;
  }
  return o7.length - r6.length;
}
function isLastScoreNegative(e4) {
  const t12 = e4[e4.length - 1];
  return e4.length > 0 && t12[t12.length - 1] < 0;
}
function createRouteRecordMatcher(e4, t12, n5) {
  const r6 = (function(e5, t13) {
    const n6 = Ln({}, cr, t13), r7 = [];
    let o8 = n6.start ? "^" : "";
    const s6 = [];
    for (const t14 of e5) {
      const e6 = t14.length ? [] : [90];
      n6.strict && !t14.length && (o8 += "/");
      for (let r8 = 0; r8 < t14.length; r8++) {
        const i5 = t14[r8];
        let a8 = 40 + (n6.sensitive ? 0.25 : 0);
        if (0 === i5.type) r8 || (o8 += "/"), o8 += i5.value.replace(lr2, "\\$&"), a8 += 40;
        else if (1 === i5.type) {
          const { value: e7, repeatable: n7, optional: c4, regexp: l5 } = i5;
          s6.push({ name: e7, repeatable: n7, optional: c4 });
          const u5 = l5 || ar;
          if (u5 !== ar) {
            a8 += 10;
            try {
              new RegExp(`(${u5})`);
            } catch (t15) {
              throw new Error(`Invalid custom RegExp for param "${e7}" (${u5}): ` + t15.message);
            }
          }
          let p5 = n7 ? `((?:${u5})(?:/(?:${u5}))*)` : `(${u5})`;
          r8 || (p5 = c4 && t14.length < 2 ? `(?:/${p5})` : "/" + p5), c4 && (p5 += "?"), o8 += p5, a8 += 20, c4 && (a8 += -8), n7 && (a8 += -20), ".*" === u5 && (a8 += -50);
        }
        e6.push(a8);
      }
      r7.push(e6);
    }
    if (n6.strict && n6.end) {
      const e6 = r7.length - 1;
      r7[e6][r7[e6].length - 1] += 0.7000000000000001;
    }
    n6.strict || (o8 += "/?"), n6.end ? o8 += "$" : n6.strict && !o8.endsWith("/") && (o8 += "(?:/|$)");
    const i4 = new RegExp(o8, n6.sensitive ? "" : "i");
    return { re: i4, score: r7, keys: s6, parse: /* @__PURE__ */ __name(function(e6) {
      const t14 = e6.match(i4), n7 = {};
      if (!t14) return null;
      for (let e7 = 1; e7 < t14.length; e7++) {
        const r8 = t14[e7] || "", o9 = s6[e7 - 1];
        n7[o9.name] = r8 && o9.repeatable ? r8.split("/") : r8;
      }
      return n7;
    }, "parse"), stringify: /* @__PURE__ */ __name(function(t14) {
      let n7 = "", r8 = false;
      for (const o9 of e5) {
        r8 && n7.endsWith("/") || (n7 += "/"), r8 = false;
        for (const e6 of o9) if (0 === e6.type) n7 += e6.value;
        else if (1 === e6.type) {
          const { value: s7, repeatable: i5, optional: a8 } = e6, c4 = s7 in t14 ? t14[s7] : "";
          if (Mn(c4) && !i5) throw new Error(`Provided param "${s7}" is an array but it is not repeatable (* or + modifiers)`);
          const l5 = Mn(c4) ? c4.join("/") : c4;
          if (!l5) {
            if (!a8) throw new Error(`Missing required param "${s7}"`);
            o9.length < 2 && (n7.endsWith("/") ? n7 = n7.slice(0, -1) : r8 = true);
          }
          n7 += l5;
        }
      }
      return n7 || "/";
    }, "stringify") };
  })((function(e5) {
    if (!e5) return [[]];
    if ("/" === e5) return [[sr]];
    if (!isAbsolutePath(e5)) throw new Error(`Invalid path "${e5}"`);
    function crash(e6) {
      throw new Error(`ERR (${t13})/"${a8}": ${e6}`);
    }
    __name(crash, "crash");
    let t13 = 0, n6 = t13;
    const r7 = [];
    let o8;
    function finalizeSegment() {
      o8 && r7.push(o8), o8 = [];
    }
    __name(finalizeSegment, "finalizeSegment");
    let s6, i4 = 0, a8 = "", c4 = "";
    function consumeBuffer() {
      a8 && (0 === t13 ? o8.push({ type: 0, value: a8 }) : 1 === t13 || 2 === t13 || 3 === t13 ? (o8.length > 1 && ("*" === s6 || "+" === s6) && crash(`A repeatable param (${a8}) must be alone in its segment. eg: '/:ids+.`), o8.push({ type: 1, value: a8, regexp: c4, repeatable: "*" === s6 || "+" === s6, optional: "*" === s6 || "?" === s6 })) : crash("Invalid state to consume buffer"), a8 = "");
    }
    __name(consumeBuffer, "consumeBuffer");
    function addCharToBuffer() {
      a8 += s6;
    }
    __name(addCharToBuffer, "addCharToBuffer");
    for (; i4 < e5.length; ) switch (s6 = e5[i4++], t13) {
      case 0:
        "\\" === s6 ? (n6 = t13, t13 = 4) : "/" === s6 ? (a8 && consumeBuffer(), finalizeSegment()) : ":" === s6 ? (consumeBuffer(), t13 = 1) : addCharToBuffer();
        break;
      case 4:
        addCharToBuffer(), t13 = n6;
        break;
      case 1:
        "(" === s6 ? t13 = 2 : ir.test(s6) ? addCharToBuffer() : (consumeBuffer(), t13 = 0, "*" !== s6 && "?" !== s6 && "+" !== s6 && i4--);
        break;
      case 2:
        ")" === s6 ? "\\" == c4[c4.length - 1] ? c4 = c4.slice(0, -1) + s6 : t13 = 3 : c4 += s6;
        break;
      case 3:
        consumeBuffer(), t13 = 0, "*" !== s6 && "?" !== s6 && "+" !== s6 && i4--, c4 = "";
        break;
      default:
        crash("Unknown state");
    }
    return 2 === t13 && crash(`Unfinished custom RegExp for param "${a8}"`), consumeBuffer(), finalizeSegment(), r7;
  })(e4.path), n5), o7 = Ln(r6, { record: e4, parent: t12, children: [], alias: [] });
  return t12 && !o7.record.aliasOf == !t12.record.aliasOf && t12.children.push(o7), o7;
}
function createRouterMatcher(e4, t12) {
  const n5 = [], r6 = /* @__PURE__ */ new Map();
  function addRoute(e5, n6, r7) {
    const o7 = !r7, s6 = normalizeRouteRecord(e5);
    s6.aliasOf = r7 && r7.record;
    const i4 = mergeOptions(t12, e5), a8 = [s6];
    if ("alias" in e5) {
      const t13 = "string" == typeof e5.alias ? [e5.alias] : e5.alias;
      for (const e6 of t13) a8.push(normalizeRouteRecord(Ln({}, s6, { components: r7 ? r7.record.components : s6.components, path: e6, aliasOf: r7 ? r7.record : s6 })));
    }
    let c4, l5;
    for (const t13 of a8) {
      const { path: a9 } = t13;
      if (n6 && !isAbsolutePath(a9)) {
        const e6 = n6.record.path, r8 = "/" === e6[e6.length - 1] ? "" : "/";
        t13.path = n6.record.path + (a9 && r8 + a9);
      }
      if (c4 = createRouteRecordMatcher(t13, n6, i4), r7 ? r7.alias.push(c4) : (l5 = l5 || c4, l5 !== c4 && l5.alias.push(c4), o7 && e5.name && !isAliasRecord(c4) && removeRoute(e5.name)), isMatchable(c4) && insertMatcher(c4), s6.children) {
        const e6 = s6.children;
        for (let t14 = 0; t14 < e6.length; t14++) addRoute(e6[t14], c4, r7 && r7.children[t14]);
      }
      r7 = r7 || c4;
    }
    return l5 ? () => {
      removeRoute(l5);
    } : noop;
  }
  __name(addRoute, "addRoute");
  function removeRoute(e5) {
    if (isRouteName(e5)) {
      const t13 = r6.get(e5);
      t13 && (r6.delete(e5), n5.splice(n5.indexOf(t13), 1), t13.children.forEach(removeRoute), t13.alias.forEach(removeRoute));
    } else {
      const t13 = n5.indexOf(e5);
      t13 > -1 && (n5.splice(t13, 1), e5.record.name && r6.delete(e5.record.name), e5.children.forEach(removeRoute), e5.alias.forEach(removeRoute));
    }
  }
  __name(removeRoute, "removeRoute");
  function insertMatcher(e5) {
    const t13 = (function(e6, t14) {
      let n6 = 0, r7 = t14.length;
      for (; n6 !== r7; ) {
        const o8 = n6 + r7 >> 1;
        comparePathParserScore(e6, t14[o8]) < 0 ? r7 = o8 : n6 = o8 + 1;
      }
      const o7 = (function(e7) {
        let t15 = e7;
        for (; t15 = t15.parent; ) if (isMatchable(t15) && 0 === comparePathParserScore(e7, t15)) return t15;
      })(e6);
      o7 && (r7 = t14.lastIndexOf(o7, r7 - 1));
      return r7;
    })(e5, n5);
    n5.splice(t13, 0, e5), e5.record.name && !isAliasRecord(e5) && r6.set(e5.record.name, e5);
  }
  __name(insertMatcher, "insertMatcher");
  return t12 = mergeOptions(ur, t12), e4.forEach((e5) => addRoute(e5)), { addRoute, resolve: /* @__PURE__ */ __name(function(e5, t13) {
    let o7, s6, i4, a8 = {};
    if ("name" in e5 && e5.name) {
      if (o7 = r6.get(e5.name), !o7) throw createRouterError(1, { location: e5 });
      i4 = o7.record.name, a8 = Ln(pickParams(t13.params, o7.keys.filter((e6) => !e6.optional).concat(o7.parent ? o7.parent.keys.filter((e6) => e6.optional) : []).map((e6) => e6.name)), e5.params && pickParams(e5.params, o7.keys.map((e6) => e6.name))), s6 = o7.stringify(a8);
    } else if (null != e5.path) s6 = e5.path, o7 = n5.find((e6) => e6.re.test(s6)), o7 && (a8 = o7.parse(s6), i4 = o7.record.name, o7.keys.forEach((e6) => {
      e6.optional && !a8[e6.name] && delete a8[e6.name];
    }));
    else {
      if (o7 = t13.name ? r6.get(t13.name) : n5.find((e6) => e6.re.test(t13.path)), !o7) throw createRouterError(1, { location: e5, currentLocation: t13 });
      i4 = o7.record.name, a8 = Ln({}, t13.params, e5.params), s6 = o7.stringify(a8);
    }
    const c4 = [];
    let l5 = o7;
    for (; l5; ) c4.unshift(l5.record), l5 = l5.parent;
    return { name: i4, path: s6, params: a8, matched: c4, meta: mergeMetaFields(c4) };
  }, "resolve"), removeRoute, clearRoutes: /* @__PURE__ */ __name(function() {
    n5.length = 0, r6.clear();
  }, "clearRoutes"), getRoutes: /* @__PURE__ */ __name(function() {
    return n5;
  }, "getRoutes"), getRecordMatcher: /* @__PURE__ */ __name(function(e5) {
    return r6.get(e5);
  }, "getRecordMatcher") };
}
function pickParams(e4, t12) {
  const n5 = {};
  for (const r6 of t12) r6 in e4 && (n5[r6] = e4[r6]);
  return n5;
}
function normalizeRouteRecord(e4) {
  const t12 = { path: e4.path, redirect: e4.redirect, name: e4.name, meta: e4.meta || {}, aliasOf: e4.aliasOf, beforeEnter: e4.beforeEnter, props: normalizeRecordProps(e4), children: e4.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e4 ? e4.components || null : e4.component && { default: e4.component } };
  return Object.defineProperty(t12, "mods", { value: {} }), t12;
}
function normalizeRecordProps(e4) {
  const t12 = {}, n5 = e4.props || false;
  if ("component" in e4) t12.default = n5;
  else for (const r6 in e4.components) t12[r6] = "object" == typeof n5 ? n5[r6] : n5;
  return t12;
}
function isAliasRecord(e4) {
  for (; e4; ) {
    if (e4.record.aliasOf) return true;
    e4 = e4.parent;
  }
  return false;
}
function mergeMetaFields(e4) {
  return e4.reduce((e5, t12) => Ln(e5, t12.meta), {});
}
function isMatchable({ record: e4 }) {
  return !!(e4.name || e4.components && Object.keys(e4.components).length || e4.redirect);
}
function useLink(e4) {
  const t12 = inject(Vn), n5 = inject(Fn), r6 = computed(() => {
    const n6 = unref2(e4.to);
    return t12.resolve(n6);
  }), o7 = computed(() => {
    const { matched: e5 } = r6.value, { length: t13 } = e5, o8 = e5[t13 - 1], s7 = n5.matched;
    if (!o8 || !s7.length) return -1;
    const i5 = s7.findIndex(isSameRouteRecord.bind(null, o8));
    if (i5 > -1) return i5;
    const a8 = getOriginalPath(e5[t13 - 2]);
    return t13 > 1 && getOriginalPath(o8) === a8 && s7[s7.length - 1].path !== a8 ? s7.findIndex(isSameRouteRecord.bind(null, e5[t13 - 2])) : i5;
  }), s6 = computed(() => o7.value > -1 && (function(e5, t13) {
    for (const n6 in t13) {
      const r7 = t13[n6], o8 = e5[n6];
      if (Mn(r7)) {
        if (!Mn(o8) || o8.length !== r7.length || r7.some((e6, t14) => e6.valueOf() !== o8[t14].valueOf())) return false;
      } else if (r7 !== o8) return false;
    }
    return true;
  })(n5.params, r6.value.params)), i4 = computed(() => o7.value > -1 && o7.value === n5.matched.length - 1 && isSameRouteLocationParams(n5.params, r6.value.params));
  return { route: r6, href: computed(() => r6.value.href), isActive: s6, isExactActive: i4, navigate: /* @__PURE__ */ __name(function(n6 = {}) {
    if ((function(e5) {
      if (e5.metaKey || e5.altKey || e5.ctrlKey || e5.shiftKey) return;
      if (e5.defaultPrevented) return;
      if (void 0 !== e5.button && 0 !== e5.button) return;
      if (e5.currentTarget && e5.currentTarget.getAttribute) {
        const t13 = e5.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t13)) return;
      }
      e5.preventDefault && e5.preventDefault();
      return true;
    })(n6)) {
      const n7 = t12[unref2(e4.replace) ? "replace" : "push"](unref2(e4.to)).catch(noop);
      return e4.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => n7), n7;
    }
    return Promise.resolve();
  }, "navigate") };
}
function getOriginalPath(e4) {
  return e4 ? e4.aliasOf ? e4.aliasOf.path : e4.path : "";
}
function normalizeSlot$1(e4, t12) {
  if (!e4) return null;
  const n5 = e4(t12);
  return 1 === n5.length ? n5[0] : n5;
}
function createRouter(e4) {
  const t12 = createRouterMatcher(e4.routes, e4), n5 = e4.parseQuery || parseQuery2, r6 = e4.stringifyQuery || stringifyQuery, o7 = e4.history, s6 = useCallbacks(), i4 = useCallbacks(), a8 = useCallbacks(), c4 = shallowRef(nr), l5 = shallowRef(0);
  let u5 = nr;
  Xn && e4.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const p5 = applyToParams.bind(null, (e5) => "" + e5), d5 = applyToParams.bind(null, encodeParam), h5 = applyToParams.bind(null, decode);
  function resolve2(e5, s7) {
    if (l5.value, "string" == typeof e5) {
      s7 = s7 || (e5.startsWith("/") ? nr : c4.value);
      const r7 = parseURL2(n5, e5, s7.path), i6 = t12.resolve({ path: r7.path }, s7), a10 = o7.createHref(r7.fullPath);
      return Ln(r7, i6, { params: h5(i6.params), redirectedFrom: void 0, href: a10 });
    }
    let i5;
    if (s7 = Ln({}, s7 || (null == e5.path || !e5.path.startsWith("/") || "name" in e5 && e5.name ? c4.value : nr)), null != e5.path) i5 = Ln({}, e5, { path: parseURL2(n5, e5.path, s7.path).path });
    else {
      const t13 = Ln({}, e5.params);
      for (const e6 in t13) null == t13[e6] && delete t13[e6];
      i5 = Ln({}, e5, { params: d5(t13) }), s7.params = d5(s7.params);
    }
    const a9 = t12.resolve(i5, s7), u6 = e5.hash || "";
    a9.params = p5(h5(a9.params));
    const f5 = (function(e6, t13) {
      const n6 = t13.query ? e6(t13.query) : "";
      return t13.path + (n6 && "?") + n6 + (t13.hash || "");
    })(r6, Ln({}, e5, { hash: (m5 = u6, commonEncode(m5).replace(Qn, "{").replace(Zn, "}").replace(Jn, "^")), path: a9.path }));
    var m5;
    const g5 = o7.createHref(f5);
    return Ln({ fullPath: f5, hash: u6, query: r6 === stringifyQuery ? normalizeQuery(e5.query) : e5.query || {} }, a9, { redirectedFrom: void 0, href: g5 });
  }
  __name(resolve2, "resolve");
  function locationAsObject(e5) {
    return "string" == typeof e5 ? parseURL2(n5, e5, c4.value.path) : Ln({}, e5);
  }
  __name(locationAsObject, "locationAsObject");
  function checkCanceledNavigation(e5, t13) {
    if (u5 !== e5) return createRouterError(8, { from: t13, to: e5 });
  }
  __name(checkCanceledNavigation, "checkCanceledNavigation");
  function push(e5) {
    return pushWithRedirect(e5);
  }
  __name(push, "push");
  function handleRedirectRecord(e5, t13) {
    const n6 = e5.matched[e5.matched.length - 1];
    if (n6 && n6.redirect) {
      const { redirect: r7 } = n6;
      let o8 = "function" == typeof r7 ? r7(e5, t13) : r7;
      return "string" == typeof o8 && (o8 = o8.includes("?") || o8.includes("#") ? o8 = locationAsObject(o8) : { path: o8 }, o8.params = {}), Ln({ query: e5.query, hash: e5.hash, params: null != o8.path ? {} : e5.params }, o8);
    }
  }
  __name(handleRedirectRecord, "handleRedirectRecord");
  function pushWithRedirect(e5, t13) {
    const n6 = u5 = resolve2(e5), o8 = c4.value, s7 = e5.state, i5 = e5.force, a9 = true === e5.replace, l6 = handleRedirectRecord(n6, o8);
    if (l6) return pushWithRedirect(Ln(locationAsObject(l6), { state: "object" == typeof l6 ? Ln({}, s7, l6.state) : s7, force: i5, replace: a9 }), t13 || n6);
    const p6 = n6;
    let d6;
    return p6.redirectedFrom = t13, !i5 && (function(e6, t14, n7) {
      const r7 = t14.matched.length - 1, o9 = n7.matched.length - 1;
      return r7 > -1 && r7 === o9 && isSameRouteRecord(t14.matched[r7], n7.matched[o9]) && isSameRouteLocationParams(t14.params, n7.params) && e6(t14.query) === e6(n7.query) && t14.hash === n7.hash;
    })(r6, o8, n6) && (d6 = createRouterError(16, { to: p6, from: o8 }), handleScroll(o8, o8, true, false)), (d6 ? Promise.resolve(d6) : navigate(p6, o8)).catch((e6) => isNavigationFailure(e6) ? isNavigationFailure(e6, 2) ? e6 : markAsReady(e6) : triggerError(e6, p6, o8)).then((e6) => {
      if (e6) {
        if (isNavigationFailure(e6, 2)) return pushWithRedirect(Ln({ replace: a9 }, locationAsObject(e6.to), { state: "object" == typeof e6.to ? Ln({}, s7, e6.to.state) : s7, force: i5 }), t13 || p6);
      } else e6 = finalizeNavigation(p6, o8, true, a9, s7);
      return triggerAfterEach(p6, o8, e6), e6;
    });
  }
  __name(pushWithRedirect, "pushWithRedirect");
  function checkCanceledNavigationAndReject(e5, t13) {
    const n6 = checkCanceledNavigation(e5, t13);
    return n6 ? Promise.reject(n6) : Promise.resolve();
  }
  __name(checkCanceledNavigationAndReject, "checkCanceledNavigationAndReject");
  function runWithContext(e5) {
    const t13 = v3.values().next().value;
    return t13 && "function" == typeof t13.runWithContext ? t13.runWithContext(e5) : e5();
  }
  __name(runWithContext, "runWithContext");
  function navigate(e5, t13) {
    let n6;
    const [r7, o8, a9] = (function(e6, t14) {
      const n7 = [], r8 = [], o9 = [], s7 = Math.max(t14.matched.length, e6.matched.length);
      for (let i5 = 0; i5 < s7; i5++) {
        const s8 = t14.matched[i5];
        s8 && (e6.matched.find((e7) => isSameRouteRecord(e7, s8)) ? r8.push(s8) : n7.push(s8));
        const a10 = e6.matched[i5];
        a10 && (t14.matched.find((e7) => isSameRouteRecord(e7, a10)) || o9.push(a10));
      }
      return [n7, r8, o9];
    })(e5, t13);
    n6 = extractComponentsGuards(r7.reverse(), "beforeRouteLeave", e5, t13);
    for (const o9 of r7) o9.leaveGuards.forEach((r8) => {
      n6.push(guardToPromiseFn(r8, e5, t13));
    });
    const c5 = checkCanceledNavigationAndReject.bind(null, e5, t13);
    return n6.push(c5), runGuardQueue(n6).then(() => {
      n6 = [];
      for (const r8 of s6.list()) n6.push(guardToPromiseFn(r8, e5, t13));
      return n6.push(c5), runGuardQueue(n6);
    }).then(() => {
      n6 = extractComponentsGuards(o8, "beforeRouteUpdate", e5, t13);
      for (const r8 of o8) r8.updateGuards.forEach((r9) => {
        n6.push(guardToPromiseFn(r9, e5, t13));
      });
      return n6.push(c5), runGuardQueue(n6);
    }).then(() => {
      n6 = [];
      for (const r8 of a9) if (r8.beforeEnter) if (Mn(r8.beforeEnter)) for (const o9 of r8.beforeEnter) n6.push(guardToPromiseFn(o9, e5, t13));
      else n6.push(guardToPromiseFn(r8.beforeEnter, e5, t13));
      return n6.push(c5), runGuardQueue(n6);
    }).then(() => (e5.matched.forEach((e6) => e6.enterCallbacks = {}), n6 = extractComponentsGuards(a9, "beforeRouteEnter", e5, t13, runWithContext), n6.push(c5), runGuardQueue(n6))).then(() => {
      n6 = [];
      for (const r8 of i4.list()) n6.push(guardToPromiseFn(r8, e5, t13));
      return n6.push(c5), runGuardQueue(n6);
    }).catch((e6) => isNavigationFailure(e6, 8) ? e6 : Promise.reject(e6));
  }
  __name(navigate, "navigate");
  function triggerAfterEach(e5, t13, n6) {
    a8.list().forEach((r7) => runWithContext(() => r7(e5, t13, n6)));
  }
  __name(triggerAfterEach, "triggerAfterEach");
  function finalizeNavigation(e5, t13, n6, r7, s7) {
    const i5 = checkCanceledNavigation(e5, t13);
    if (i5) return i5;
    const a9 = t13 === nr, l6 = Xn ? history.state : {};
    n6 && (r7 || a9 ? o7.replace(e5.fullPath, Ln({ scroll: a9 && l6 && l6.scroll }, s7)) : o7.push(e5.fullPath, s7)), c4.value = e5, handleScroll(e5, t13, n6, a9), markAsReady();
  }
  __name(finalizeNavigation, "finalizeNavigation");
  let f4;
  let S3, _3 = useCallbacks(), y3 = useCallbacks();
  function triggerError(e5, t13, n6) {
    markAsReady(e5);
    const r7 = y3.list();
    return r7.length ? r7.forEach((r8) => r8(e5, t13, n6)) : console.error(e5), Promise.reject(e5);
  }
  __name(triggerError, "triggerError");
  function markAsReady(e5) {
    return S3 || (S3 = !e5, f4 || (f4 = o7.listen((e6, t13, n6) => {
      if (!C3.listening) return;
      const r7 = resolve2(e6), s7 = handleRedirectRecord(r7, C3.currentRoute.value);
      if (s7) return void pushWithRedirect(Ln(s7, { replace: true, force: true }), r7).catch(noop);
      u5 = r7;
      const i5 = c4.value;
      Xn && n6.delta && saveScrollPosition(getScrollKey(i5.fullPath, n6.delta)), navigate(r7, i5).catch((e7) => isNavigationFailure(e7, 12) ? e7 : isNavigationFailure(e7, 2) ? (pushWithRedirect(Ln(locationAsObject(e7.to), { force: true }), r7).then((e8) => {
        isNavigationFailure(e8, 20) && !n6.delta && "pop" === n6.type && o7.go(-1, false);
      }).catch(noop), Promise.reject()) : (n6.delta && o7.go(-n6.delta, false), triggerError(e7, r7, i5))).then((e7) => {
        (e7 = e7 || finalizeNavigation(r7, i5, false)) && (n6.delta && !isNavigationFailure(e7, 8) ? o7.go(-n6.delta, false) : "pop" === n6.type && isNavigationFailure(e7, 20) && o7.go(-1, false)), triggerAfterEach(r7, i5, e7);
      }).catch(noop);
    })), _3.list().forEach(([t13, n6]) => e5 ? n6(e5) : t13()), _3.reset()), e5;
  }
  __name(markAsReady, "markAsReady");
  function handleScroll(t13, n6, r7, o8) {
    const { scrollBehavior: s7 } = e4;
    if (!Xn || !s7) return Promise.resolve();
    const i5 = !r7 && (function(e5) {
      const t14 = or.get(e5);
      return or.delete(e5), t14;
    })(getScrollKey(t13.fullPath, 0)) || (o8 || !r7) && history.state && history.state.scroll || null;
    return nextTick2().then(() => s7(t13, n6, i5)).then((e5) => t13 === c4.value && e5 && scrollToPosition(e5)).catch((e5) => t13 === c4.value && triggerError(e5, t13, n6));
  }
  __name(handleScroll, "handleScroll");
  const go = /* @__PURE__ */ __name((e5) => o7.go(e5), "go");
  let T3;
  const v3 = /* @__PURE__ */ new Set(), C3 = { currentRoute: c4, listening: true, addRoute: /* @__PURE__ */ __name(function(e5, n6) {
    let r7, o8;
    isRouteName(e5) ? (r7 = t12.getRecordMatcher(e5), o8 = n6) : o8 = e5;
    const s7 = t12.addRoute(o8, r7);
    return l5.value++, () => {
      s7(), l5.value++;
    };
  }, "addRoute"), removeRoute: /* @__PURE__ */ __name(function(e5) {
    const n6 = t12.getRecordMatcher(e5);
    n6 && (t12.removeRoute(n6), l5.value++);
  }, "removeRoute"), clearRoutes: /* @__PURE__ */ __name(function() {
    t12.clearRoutes(), l5.value++;
  }, "clearRoutes"), hasRoute: /* @__PURE__ */ __name(function(e5) {
    return !!t12.getRecordMatcher(e5);
  }, "hasRoute"), getRoutes: /* @__PURE__ */ __name(function() {
    return t12.getRoutes().map((e5) => e5.record);
  }, "getRoutes"), resolve: resolve2, options: e4, push, replace: /* @__PURE__ */ __name(function(e5) {
    return push(Ln(locationAsObject(e5), { replace: true }));
  }, "replace"), go, back: /* @__PURE__ */ __name(() => go(-1), "back"), forward: /* @__PURE__ */ __name(() => go(1), "forward"), beforeEach: s6.add, beforeResolve: i4.add, afterEach: a8.add, onError: y3.add, isReady: /* @__PURE__ */ __name(function() {
    return S3 && c4.value !== nr ? Promise.resolve() : new Promise((e5, t13) => {
      _3.add([e5, t13]);
    });
  }, "isReady"), install(e5) {
    e5.component("RouterLink", pr), e5.component("RouterView", dr), e5.config.globalProperties.$router = C3, Object.defineProperty(e5.config.globalProperties, "$route", { enumerable: true, get: /* @__PURE__ */ __name(() => unref2(c4), "get") }), Xn && !T3 && c4.value === nr && (T3 = true, push(o7.location).catch((e6) => {
    }));
    const t13 = {};
    for (const e6 in nr) Object.defineProperty(t13, e6, { get: /* @__PURE__ */ __name(() => c4.value[e6], "get"), enumerable: true });
    e5.provide(Vn, C3), e5.provide(Fn, shallowReactive(t13)), e5.provide(Bn, c4);
    const n6 = e5.unmount;
    v3.add(e5), e5.unmount = function() {
      v3.delete(e5), v3.size < 1 && (u5 = nr, f4 && f4(), f4 = null, c4.value = nr, T3 = false, S3 = false), n6();
    };
  } };
  function runGuardQueue(e5) {
    return e5.reduce((e6, t13) => e6.then(() => runWithContext(t13)), Promise.resolve());
  }
  __name(runGuardQueue, "runGuardQueue");
  return C3;
}
function defineNuxtRouteMiddleware(e4) {
  return e4;
}
function resolveRouteObject(e4) {
  return withQuery(e4.path || "", e4.query || {}) + (e4.hash || "");
}
function encodeRoutePath(e4) {
  const t12 = parseURL(e4);
  return encodePath(decodePath(t12.pathname)) + t12.search + t12.hash;
}
function toArray(e4) {
  return Array.isArray(e4) ? e4 : [e4];
}
function generateRouteKey(e4) {
  const t12 = e4?.meta.key ?? e4.path.replace(vr, "$1").replace(Cr, "$1").replace(xr, (t13) => e4.params[t13.slice(1)]?.toString() || "");
  return "function" == typeof t12 ? t12(e4) : t12;
}
function isChangingPage(e4, t12) {
  return e4 !== t12 && t12 !== nr && (generateRouteKey(e4) !== generateRouteKey(t12) || !e4.matched.every((e5, n5) => e5.components && e5.components.default === t12.matched[n5]?.components?.default));
}
function _getHashElementScrollMarginTop(e4) {
  try {
    const t12 = (void 0).querySelector(e4);
    if (t12) return (Number.parseFloat(getComputedStyle(t12).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
  } catch {
  }
  return 0;
}
function _calculatePosition(e4, t12, n5, r6) {
  return n5 || (e4.hash ? { el: e4.hash, top: _getHashElementScrollMarginTop(e4.hash), behavior: isChangingPage(e4, t12) ? r6 : "instant" } : { left: 0, top: 0 });
}
function definePayloadReducer(e4, t12) {
  useNuxtApp().ssrContext["~payloadReducers"][e4] = t12;
}
function markStableSlot(e4) {
  const wrapped = /* @__PURE__ */ __name((t12) => {
    const n5 = e4(t12);
    return Array.isArray(n5) ? n5 : null != n5 && mn.isVNode(n5) ? [n5] : [mn.createCommentVNode()];
  }, "wrapped");
  return wrapped._n = true, wrapped;
}
function normalizeSlot(e4, t12) {
  const n5 = e4(t12);
  return 1 === n5.length ? mn.h(n5[0]) : mn.h(mn.Fragment, void 0, n5);
}
var fe, me, ge, Ee, Se, _e, ye, Te, Ne, ve, Ce, xe, be, Oe, Ie, Re, Ae, Pe, Le, Me, we, ke, De, Ve, Fe, Be, Xe, Ue, je, He, $e, We, Ge, qe, Ke, Je, ze, Qe, Ye, Ze, et, tt, nt, rt, ot, st, it, at, isStaticProperty, ct, isStaticExp, lt, isSimpleIdentifier, ut, pt, dt, getExpSource, isMemberExpressionBrowser, ht, ft, mt, isFnExpressionBrowser, gt, Et, St, _t, yt, Tt, Nt, vt, Ct, xt, bt, Ot, It, Rt, At, Pt, Lt, Mt, wt, kt, Dt, Vt, Ft2, Bt, aliasHelper, Xt, Ut, jt, trackSlotScopes, buildClientSlotFn, Ht, transformElement, transformSlotOutlet, transformOn$1, transformBind, injectPrefix, transformText, $t, transformOnce, transformModel$1, Wt, transformFilter, Gt, transformMemo, transformVBindShorthand, noopDirectiveTransform, qt, Kt, Jt, zt, Qt, Yt, Zt, en, tn, nn, rn2, on2, transformStyle, parseInlineCSS, sn, an, cn, ln, un, transformClick, ignoreSideEffectTags, pn, dn, hn, mn, gn, En, Sn, _n, yn, Tn, Nn, vn, Cn, xn, bn, On, In, Rn, An, Pn, isAbsolutePath, Ln, noop, Mn, wn, kn, Dn, Vn, Fn, Bn, Xn, Un, jn, Hn, $n, Wn, Gn, qn, Kn, Jn, zn, Qn, Yn, Zn, er, tr, nr, rr, or, sr, ir, ar, cr, lr2, ur, pr, getLinkClass, dr, hr, fr, mr, useRouter, useRoute$1, gr, Er, navigateTo, useError, showError, _showErrorUnlessCrawler, isNuxtError, createError$1, Sr, _r, yr, Tr, Nr, generateRouteKey$1, vr, Cr, xr, br, Or, Ir2, Rr, Ar, sensitiveMatcher, Pr, normalizePath, routeRulesMatcher, Lr2, Mr, wr, kr, Dr, Vr2, Fr, Br, Xr, Ur, jr, Hr, $r, Wr, Gr2, qr, IslandRenderer, Kr, Jr, entry$1, zr;
var init_entry = __esm({
  ".output/server/chunks/virtual/entry.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_renderer();
    init_nitro();
    init_shared_esm_bundler();
    globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: {} };
    __name(useHead, "useHead");
    fe = { exports: {} };
    me = {};
    ge = /* @__PURE__ */ Symbol("");
    Ee = /* @__PURE__ */ Symbol("");
    Se = /* @__PURE__ */ Symbol("");
    _e = /* @__PURE__ */ Symbol("");
    ye = /* @__PURE__ */ Symbol("");
    Te = /* @__PURE__ */ Symbol("");
    Ne = /* @__PURE__ */ Symbol("");
    ve = /* @__PURE__ */ Symbol("");
    Ce = /* @__PURE__ */ Symbol("");
    xe = /* @__PURE__ */ Symbol("");
    be = /* @__PURE__ */ Symbol("");
    Oe = /* @__PURE__ */ Symbol("");
    Ie = /* @__PURE__ */ Symbol("");
    Re = /* @__PURE__ */ Symbol("");
    Ae = /* @__PURE__ */ Symbol("");
    Pe = /* @__PURE__ */ Symbol("");
    Le = /* @__PURE__ */ Symbol("");
    Me = /* @__PURE__ */ Symbol("");
    we = /* @__PURE__ */ Symbol("");
    ke = /* @__PURE__ */ Symbol("");
    De = /* @__PURE__ */ Symbol("");
    Ve = /* @__PURE__ */ Symbol("");
    Fe = /* @__PURE__ */ Symbol("");
    Be = /* @__PURE__ */ Symbol("");
    Xe = /* @__PURE__ */ Symbol("");
    Ue = /* @__PURE__ */ Symbol("");
    je = /* @__PURE__ */ Symbol("");
    He = /* @__PURE__ */ Symbol("");
    $e = /* @__PURE__ */ Symbol("");
    We = /* @__PURE__ */ Symbol("");
    Ge = /* @__PURE__ */ Symbol("");
    qe = /* @__PURE__ */ Symbol("");
    Ke = /* @__PURE__ */ Symbol("");
    Je = /* @__PURE__ */ Symbol("");
    ze = /* @__PURE__ */ Symbol("");
    Qe = /* @__PURE__ */ Symbol("");
    Ye = /* @__PURE__ */ Symbol("");
    Ze = /* @__PURE__ */ Symbol("");
    et = /* @__PURE__ */ Symbol("");
    tt = { [ge]: "Fragment", [Ee]: "Teleport", [Se]: "Suspense", [_e]: "KeepAlive", [ye]: "BaseTransition", [Te]: "openBlock", [Ne]: "createBlock", [ve]: "createElementBlock", [Ce]: "createVNode", [xe]: "createElementVNode", [be]: "createCommentVNode", [Oe]: "createTextVNode", [Ie]: "createStaticVNode", [Re]: "resolveComponent", [Ae]: "resolveDynamicComponent", [Pe]: "resolveDirective", [Le]: "resolveFilter", [Me]: "withDirectives", [we]: "renderList", [ke]: "renderSlot", [De]: "createSlots", [Ve]: "toDisplayString", [Fe]: "mergeProps", [Be]: "normalizeClass", [Xe]: "normalizeStyle", [Ue]: "normalizeProps", [je]: "guardReactiveProps", [He]: "toHandlers", [$e]: "camelize", [We]: "capitalize", [Ge]: "toHandlerKey", [qe]: "setBlockTracking", [Ke]: "pushScopeId", [Je]: "popScopeId", [ze]: "withCtx", [Qe]: "unref", [Ye]: "isRef", [Ze]: "withMemo", [et]: "isMemoSame" };
    __name(registerRuntimeHelpers, "registerRuntimeHelpers");
    nt = { start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 }, source: "" };
    __name(createRoot, "createRoot");
    __name(createVNodeCall, "createVNodeCall");
    __name(createArrayExpression, "createArrayExpression");
    __name(createObjectExpression, "createObjectExpression");
    __name(createObjectProperty, "createObjectProperty");
    __name(createSimpleExpression, "createSimpleExpression");
    __name(createCompoundExpression, "createCompoundExpression");
    __name(createCallExpression, "createCallExpression");
    __name(createFunctionExpression, "createFunctionExpression");
    __name(createConditionalExpression, "createConditionalExpression");
    __name(createCacheExpression, "createCacheExpression");
    __name(createBlockStatement, "createBlockStatement");
    __name(getVNodeHelper, "getVNodeHelper");
    __name(getVNodeBlockHelper, "getVNodeBlockHelper");
    __name(convertToBlock, "convertToBlock");
    rt = new Uint8Array([123, 123]);
    ot = new Uint8Array([125, 125]);
    __name(isTagStartChar, "isTagStartChar");
    __name(isWhitespace, "isWhitespace");
    __name(isEndOfTagSection, "isEndOfTagSection");
    __name(toCharCodes, "toCharCodes");
    st = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) };
    it = { COMPILER_IS_ON_ELEMENT: { message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".', link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html" }, COMPILER_V_BIND_SYNC: { message: /* @__PURE__ */ __name((e4) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e4}.sync\` should be changed to \`v-model:${e4}\`.`, "message"), link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html" }, COMPILER_V_BIND_OBJECT_ORDER: { message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.', link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html" }, COMPILER_V_ON_NATIVE: { message: ".native modifier for v-on has been removed as is no longer necessary.", link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html" }, COMPILER_V_IF_V_FOR_PRECEDENCE: { message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.", link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html" }, COMPILER_NATIVE_TEMPLATE: { message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3." }, COMPILER_INLINE_TEMPLATE: { message: '"inline-template" has been removed in Vue 3.', link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html" }, COMPILER_FILTERS: { message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.', link: "https://v3-migration.vuejs.org/breaking-changes/filters.html" } };
    __name(getCompatValue, "getCompatValue");
    __name(isCompatEnabled, "isCompatEnabled");
    __name(checkCompatEnabled, "checkCompatEnabled");
    __name(defaultOnError, "defaultOnError");
    __name(defaultOnWarn, "defaultOnWarn");
    __name(createCompilerError, "createCompilerError");
    at = { 0: "Illegal comment.", 1: "CDATA section is allowed only in XML context.", 2: "Duplicate attribute.", 3: "End tag cannot have attributes.", 4: "Illegal '/' in tags.", 5: "Unexpected EOF in tag.", 6: "Unexpected EOF in CDATA section.", 7: "Unexpected EOF in comment.", 8: "Unexpected EOF in script.", 9: "Unexpected EOF in tag.", 10: "Incorrectly closed comment.", 11: "Incorrectly opened comment.", 12: "Illegal tag name. Use '&lt;' to print '<'.", 13: "Attribute value was expected.", 14: "End tag name was expected.", 15: "Whitespace was expected.", 16: "Unexpected '<!--' in comment.", 17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`, 18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).", 19: "Attribute name cannot start with '='.", 21: "'<?' is allowed only in XML context.", 20: "Unexpected null character.", 22: "Illegal '/' in tags.", 23: "Invalid end tag.", 24: "Element is missing end tag.", 25: "Interpolation end sign was not found.", 27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.", 26: "Legal directive name was expected.", 28: "v-if/v-else-if is missing expression.", 29: "v-if/else branches must use unique keys.", 30: "v-else/v-else-if has no adjacent v-if or v-else-if.", 31: "v-for is missing expression.", 32: "v-for has invalid expression.", 33: "<template v-for> key should be placed on the <template> tag.", 34: "v-bind is missing expression.", 53: "v-bind with same-name shorthand only allows static argument.", 35: "v-on is missing expression.", 36: "Unexpected custom directive on <slot> outlet.", 37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.", 38: "Duplicate slot names found. ", 39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.", 40: "v-slot can only be used on components or <template> tags.", 41: "v-model is missing expression.", 42: "v-model value must be a valid JavaScript member expression.", 43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.", 44: "v-model cannot be used on a prop, because local prop bindings are not writable.\nUse a v-bind binding combined with a v-on listener that emits update:x event instead.", 45: "v-model cannot be used on a const binding because it is not writable.", 46: "Error parsing JavaScript expression: ", 47: "<KeepAlive> expects exactly one child component.", 52: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.", 48: '"prefixIdentifiers" option is not supported in this build of compiler.', 49: "ES module mode is not supported in this build of compiler.", 50: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.', 51: '"scopeId" option is only supported in module mode.', 54: "" };
    __name(walkBlockDeclarations, "walkBlockDeclarations");
    __name(isForStatement, "isForStatement");
    __name(walkForStatement, "walkForStatement");
    __name(walkSwitchStatement, "walkSwitchStatement");
    __name(extractIdentifiers, "extractIdentifiers");
    isStaticProperty = /* @__PURE__ */ __name((e4) => e4 && ("ObjectProperty" === e4.type || "ObjectMethod" === e4.type) && !e4.computed, "isStaticProperty");
    ct = ["TSAsExpression", "TSTypeAssertion", "TSNonNullExpression", "TSInstantiationExpression", "TSSatisfiesExpression"];
    isStaticExp = /* @__PURE__ */ __name((e4) => 4 === e4.type && e4.isStatic, "isStaticExp");
    __name(isCoreComponent, "isCoreComponent");
    lt = /^$|^\d|[^\$\w\xA0-\uFFFF]/;
    isSimpleIdentifier = /* @__PURE__ */ __name((e4) => !lt.test(e4), "isSimpleIdentifier");
    ut = /[A-Za-z_$\xA0-\uFFFF]/;
    pt = /[\.\?\w$\xA0-\uFFFF]/;
    dt = /\s+[.[]\s*|\s*[.[]\s+/g;
    getExpSource = /* @__PURE__ */ __name((e4) => 4 === e4.type ? e4.content : e4.loc.source, "getExpSource");
    isMemberExpressionBrowser = /* @__PURE__ */ __name((e4) => {
      const t12 = getExpSource(e4).trim().replace(dt, (e5) => e5.trim());
      let n5 = 0, r6 = [], o7 = 0, s6 = 0, i4 = null;
      for (let e5 = 0; e5 < t12.length; e5++) {
        const a8 = t12.charAt(e5);
        switch (n5) {
          case 0:
            if ("[" === a8) r6.push(n5), n5 = 1, o7++;
            else if ("(" === a8) r6.push(n5), n5 = 2, s6++;
            else if (!(0 === e5 ? ut : pt).test(a8)) return false;
            break;
          case 1:
            "'" === a8 || '"' === a8 || "`" === a8 ? (r6.push(n5), n5 = 3, i4 = a8) : "[" === a8 ? o7++ : "]" === a8 && (--o7 || (n5 = r6.pop()));
            break;
          case 2:
            if ("'" === a8 || '"' === a8 || "`" === a8) r6.push(n5), n5 = 3, i4 = a8;
            else if ("(" === a8) s6++;
            else if (")" === a8) {
              if (e5 === t12.length - 1) return false;
              --s6 || (n5 = r6.pop());
            }
            break;
          case 3:
            a8 === i4 && (n5 = r6.pop(), i4 = null);
        }
      }
      return !o7 && !s6;
    }, "isMemberExpressionBrowser");
    ht = NOOP;
    ft = isMemberExpressionBrowser;
    mt = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/;
    isFnExpressionBrowser = /* @__PURE__ */ __name((e4) => mt.test(getExpSource(e4)), "isFnExpressionBrowser");
    gt = NOOP;
    Et = isFnExpressionBrowser;
    __name(advancePositionWithMutation, "advancePositionWithMutation");
    __name(findDir, "findDir");
    __name(findProp, "findProp");
    __name(isStaticArgOf, "isStaticArgOf");
    __name(hasDynamicKeyVBind, "hasDynamicKeyVBind");
    __name(isText$1, "isText$1");
    __name(isVPre, "isVPre");
    __name(isVSlot, "isVSlot");
    __name(isTemplateNode, "isTemplateNode");
    __name(isSlotOutlet, "isSlotOutlet");
    St = /* @__PURE__ */ new Set([Ue, je]);
    __name(getUnnormalizedProps, "getUnnormalizedProps");
    __name(injectProp, "injectProp");
    __name(hasProp, "hasProp");
    __name(toValidAssetId, "toValidAssetId");
    __name(getMemoedVNodeCall, "getMemoedVNodeCall");
    _t = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
    __name(isAllWhitespace, "isAllWhitespace");
    __name(isWhitespaceText, "isWhitespaceText");
    __name(isCommentOrWhitespace, "isCommentOrWhitespace");
    yt = { parseMode: "base", ns: 0, delimiters: ["{{", "}}"], getNamespace: /* @__PURE__ */ __name(() => 0, "getNamespace"), isVoidTag: NO, isPreTag: NO, isIgnoreNewlineTag: NO, isCustomElement: NO, onError: defaultOnError, onWarn: defaultOnWarn, comments: false, prefixIdentifiers: false };
    Tt = yt;
    Nt = null;
    vt = "";
    Ct = null;
    xt = null;
    bt = "";
    Ot = -1;
    It = -1;
    Rt = 0;
    At = false;
    Pt = null;
    Lt = [];
    Mt = new class {
      constructor(e4, t12) {
        this.stack = e4, this.cbs = t12, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = false, this.inXML = false, this.inVPre = false, this.newlines = [], this.mode = 0, this.delimiterOpen = rt, this.delimiterClose = ot, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
      }
      get inSFCRoot() {
        return 2 === this.mode && 0 === this.stack.length;
      }
      reset() {
        this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = false, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = rt, this.delimiterClose = ot;
      }
      getPos(e4) {
        let t12 = 1, n5 = e4 + 1;
        const r6 = this.newlines.length;
        let o7 = -1;
        if (r6 > 100) {
          let t13 = -1, n6 = r6;
          for (; t13 + 1 < n6; ) {
            const r7 = t13 + n6 >>> 1;
            this.newlines[r7] < e4 ? t13 = r7 : n6 = r7;
          }
          o7 = t13;
        } else for (let t13 = r6 - 1; t13 >= 0; t13--) if (e4 > this.newlines[t13]) {
          o7 = t13;
          break;
        }
        return o7 >= 0 && (t12 = o7 + 2, n5 = e4 - this.newlines[o7]), { column: n5, line: t12, offset: e4 };
      }
      peek() {
        return this.buffer.charCodeAt(this.index + 1);
      }
      stateText(e4) {
        60 === e4 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : this.inVPre || e4 !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e4));
      }
      stateInterpolationOpen(e4) {
        if (e4 === this.delimiterOpen[this.delimiterIndex]) if (this.delimiterIndex === this.delimiterOpen.length - 1) {
          const e5 = this.index + 1 - this.delimiterOpen.length;
          e5 > this.sectionStart && this.cbs.ontext(this.sectionStart, e5), this.state = 3, this.sectionStart = e5;
        } else this.delimiterIndex++;
        else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e4)) : (this.state = 1, this.stateText(e4));
      }
      stateInterpolation(e4) {
        e4 === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e4));
      }
      stateInterpolationClose(e4) {
        e4 === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e4));
      }
      stateSpecialStartSequence(e4) {
        const t12 = this.sequenceIndex === this.currentSequence.length;
        if (t12 ? isEndOfTagSection(e4) : (32 | e4) === this.currentSequence[this.sequenceIndex]) {
          if (!t12) return void this.sequenceIndex++;
        } else this.inRCDATA = false;
        this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e4);
      }
      stateInRCDATA(e4) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (62 === e4 || isWhitespace(e4)) {
            const t12 = this.index - this.currentSequence.length;
            if (this.sectionStart < t12) {
              const e5 = this.index;
              this.index = t12, this.cbs.ontext(this.sectionStart, t12), this.index = e5;
            }
            return this.sectionStart = t12 + 2, this.stateInClosingTagName(e4), void (this.inRCDATA = false);
          }
          this.sequenceIndex = 0;
        }
        (32 | e4) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === st.TitleEnd || this.currentSequence === st.TextareaEnd && !this.inSFCRoot ? this.inVPre || e4 !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e4)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(60 === e4);
      }
      stateCDATASequence(e4) {
        e4 === st.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === st.Cdata.length && (this.state = 28, this.currentSequence = st.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e4));
      }
      fastForwardTo(e4) {
        for (; ++this.index < this.buffer.length; ) {
          const t12 = this.buffer.charCodeAt(this.index);
          if (10 === t12 && this.newlines.push(this.index), t12 === e4) return true;
        }
        return this.index = this.buffer.length - 1, false;
      }
      stateInCommentLike(e4) {
        e4 === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === st.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e4 !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }
      startSpecial(e4, t12) {
        this.enterRCDATA(e4, t12), this.state = 31;
      }
      enterRCDATA(e4, t12) {
        this.inRCDATA = true, this.currentSequence = e4, this.sequenceIndex = t12;
      }
      stateBeforeTagName(e4) {
        33 === e4 ? (this.state = 22, this.sectionStart = this.index + 1) : 63 === e4 ? (this.state = 24, this.sectionStart = this.index + 1) : isTagStartChar(e4) ? (this.sectionStart = this.index, 0 === this.mode ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : this.state = 116 === e4 ? 30 : 115 === e4 ? 29 : 6) : 47 === e4 ? this.state = 8 : (this.state = 1, this.stateText(e4));
      }
      stateInTagName(e4) {
        isEndOfTagSection(e4) && this.handleTagName(e4);
      }
      stateInSFCRootTagName(e4) {
        if (isEndOfTagSection(e4)) {
          const t12 = this.buffer.slice(this.sectionStart, this.index);
          "template" !== t12 && this.enterRCDATA(toCharCodes("</" + t12), 0), this.handleTagName(e4);
        }
      }
      handleTagName(e4) {
        this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e4);
      }
      stateBeforeClosingTagName(e4) {
        isWhitespace(e4) || (62 === e4 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = isTagStartChar(e4) ? 9 : 27, this.sectionStart = this.index));
      }
      stateInClosingTagName(e4) {
        (62 === e4 || isWhitespace(e4)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e4));
      }
      stateAfterClosingTagName(e4) {
        62 === e4 && (this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeAttrName(e4) {
        62 === e4 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : 47 === e4 ? this.state = 7 : 60 === e4 && 47 === this.peek() ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : isWhitespace(e4) || this.handleAttrStart(e4);
      }
      handleAttrStart(e4) {
        118 === e4 && 45 === this.peek() ? (this.state = 13, this.sectionStart = this.index) : 46 === e4 || 58 === e4 || 64 === e4 || 35 === e4 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
      }
      stateInSelfClosingTag(e4) {
        62 === e4 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = false) : isWhitespace(e4) || (this.state = 11, this.stateBeforeAttrName(e4));
      }
      stateInAttrName(e4) {
        (61 === e4 || isEndOfTagSection(e4)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e4));
      }
      stateInDirName(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 58 === e4 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : 46 === e4 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
      }
      stateInDirArg(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 91 === e4 ? this.state = 15 : 46 === e4 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
      }
      stateInDynamicDirArg(e4) {
        93 === e4 ? this.state = 14 : (61 === e4 || isEndOfTagSection(e4)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e4));
      }
      stateInDirModifier(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 46 === e4 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
      }
      handleAttrNameEnd(e4) {
        this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e4);
      }
      stateAfterAttrName(e4) {
        61 === e4 ? this.state = 18 : 47 === e4 || 62 === e4 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e4)) : isWhitespace(e4) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e4));
      }
      stateBeforeAttrValue(e4) {
        34 === e4 ? (this.state = 19, this.sectionStart = this.index + 1) : 39 === e4 ? (this.state = 20, this.sectionStart = this.index + 1) : isWhitespace(e4) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e4));
      }
      handleInAttrValue(e4, t12) {
        (e4 === t12 || this.fastForwardTo(t12)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(34 === t12 ? 3 : 2, this.index + 1), this.state = 11);
      }
      stateInAttrValueDoubleQuotes(e4) {
        this.handleInAttrValue(e4, 34);
      }
      stateInAttrValueSingleQuotes(e4) {
        this.handleInAttrValue(e4, 39);
      }
      stateInAttrValueNoQuotes(e4) {
        isWhitespace(e4) || 62 === e4 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e4)) : 39 !== e4 && 60 !== e4 && 61 !== e4 && 96 !== e4 || this.cbs.onerr(18, this.index);
      }
      stateBeforeDeclaration(e4) {
        91 === e4 ? (this.state = 26, this.sequenceIndex = 0) : this.state = 45 === e4 ? 25 : 23;
      }
      stateInDeclaration(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
      }
      stateInProcessingInstruction(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeComment(e4) {
        45 === e4 ? (this.state = 28, this.currentSequence = st.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
      }
      stateInSpecialComment(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeSpecialS(e4) {
        e4 === st.ScriptEnd[3] ? this.startSpecial(st.ScriptEnd, 4) : e4 === st.StyleEnd[3] ? this.startSpecial(st.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e4));
      }
      stateBeforeSpecialT(e4) {
        e4 === st.TitleEnd[3] ? this.startSpecial(st.TitleEnd, 4) : e4 === st.TextareaEnd[3] ? this.startSpecial(st.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e4));
      }
      startEntity() {
      }
      stateInEntity() {
      }
      parse(e4) {
        for (this.buffer = e4; this.index < this.buffer.length; ) {
          const e5 = this.buffer.charCodeAt(this.index);
          switch (10 === e5 && 33 !== this.state && this.newlines.push(this.index), this.state) {
            case 1:
              this.stateText(e5);
              break;
            case 2:
              this.stateInterpolationOpen(e5);
              break;
            case 3:
              this.stateInterpolation(e5);
              break;
            case 4:
              this.stateInterpolationClose(e5);
              break;
            case 31:
              this.stateSpecialStartSequence(e5);
              break;
            case 32:
              this.stateInRCDATA(e5);
              break;
            case 26:
              this.stateCDATASequence(e5);
              break;
            case 19:
              this.stateInAttrValueDoubleQuotes(e5);
              break;
            case 12:
              this.stateInAttrName(e5);
              break;
            case 13:
              this.stateInDirName(e5);
              break;
            case 14:
              this.stateInDirArg(e5);
              break;
            case 15:
              this.stateInDynamicDirArg(e5);
              break;
            case 16:
              this.stateInDirModifier(e5);
              break;
            case 28:
              this.stateInCommentLike(e5);
              break;
            case 27:
              this.stateInSpecialComment(e5);
              break;
            case 11:
              this.stateBeforeAttrName(e5);
              break;
            case 6:
              this.stateInTagName(e5);
              break;
            case 34:
              this.stateInSFCRootTagName(e5);
              break;
            case 9:
              this.stateInClosingTagName(e5);
              break;
            case 5:
              this.stateBeforeTagName(e5);
              break;
            case 17:
              this.stateAfterAttrName(e5);
              break;
            case 20:
              this.stateInAttrValueSingleQuotes(e5);
              break;
            case 18:
              this.stateBeforeAttrValue(e5);
              break;
            case 8:
              this.stateBeforeClosingTagName(e5);
              break;
            case 10:
              this.stateAfterClosingTagName(e5);
              break;
            case 29:
              this.stateBeforeSpecialS(e5);
              break;
            case 30:
              this.stateBeforeSpecialT(e5);
              break;
            case 21:
              this.stateInAttrValueNoQuotes(e5);
              break;
            case 7:
              this.stateInSelfClosingTag(e5);
              break;
            case 23:
              this.stateInDeclaration(e5);
              break;
            case 22:
              this.stateBeforeDeclaration(e5);
              break;
            case 25:
              this.stateBeforeComment(e5);
              break;
            case 24:
              this.stateInProcessingInstruction(e5);
              break;
            case 33:
              this.stateInEntity();
          }
          this.index++;
        }
        this.cleanup(), this.finish();
      }
      cleanup() {
        this.sectionStart !== this.index && (1 === this.state || 32 === this.state && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : 19 !== this.state && 20 !== this.state && 21 !== this.state || (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }
      finish() {
        this.handleTrailingData(), this.cbs.onend();
      }
      handleTrailingData() {
        const e4 = this.buffer.length;
        this.sectionStart >= e4 || (28 === this.state ? this.currentSequence === st.CdataEnd ? this.cbs.oncdata(this.sectionStart, e4) : this.cbs.oncomment(this.sectionStart, e4) : 6 === this.state || 11 === this.state || 18 === this.state || 17 === this.state || 12 === this.state || 13 === this.state || 14 === this.state || 15 === this.state || 16 === this.state || 20 === this.state || 19 === this.state || 21 === this.state || 9 === this.state || this.cbs.ontext(this.sectionStart, e4));
      }
      emitCodePoint(e4, t12) {
      }
    }(Lt, { onerr: emitError, ontext(e4, t12) {
      onText(getSlice(e4, t12), e4, t12);
    }, ontextentity(e4, t12, n5) {
      onText(e4, t12, n5);
    }, oninterpolation(e4, t12) {
      if (At) return onText(getSlice(e4, t12), e4, t12);
      let n5 = e4 + Mt.delimiterOpen.length, r6 = t12 - Mt.delimiterClose.length;
      for (; isWhitespace(vt.charCodeAt(n5)); ) n5++;
      for (; isWhitespace(vt.charCodeAt(r6 - 1)); ) r6--;
      let o7 = getSlice(n5, r6);
      o7.includes("&") && (o7 = Tt.decodeEntities(o7, false)), addNode({ type: 5, content: createExp(o7, false, getLoc(n5, r6)), loc: getLoc(e4, t12) });
    }, onopentagname(e4, t12) {
      const n5 = getSlice(e4, t12);
      Ct = { type: 1, tag: n5, ns: Tt.getNamespace(n5, Lt[0], Tt.ns), tagType: 0, props: [], children: [], loc: getLoc(e4 - 1, t12), codegenNode: void 0 };
    }, onopentagend(e4) {
      endOpenTag(e4);
    }, onclosetag(e4, t12) {
      const n5 = getSlice(e4, t12);
      if (!Tt.isVoidTag(n5)) {
        let r6 = false;
        for (let e5 = 0; e5 < Lt.length; e5++) {
          if (Lt[e5].tag.toLowerCase() === n5.toLowerCase()) {
            r6 = true, e5 > 0 && emitError(24, Lt[0].loc.start.offset);
            for (let n6 = 0; n6 <= e5; n6++) {
              onCloseTag(Lt.shift(), t12, n6 < e5);
            }
            break;
          }
        }
        r6 || emitError(23, backTrack(e4, 60));
      }
    }, onselfclosingtag(e4) {
      const t12 = Ct.tag;
      Ct.isSelfClosing = true, endOpenTag(e4), Lt[0] && Lt[0].tag === t12 && onCloseTag(Lt.shift(), e4);
    }, onattribname(e4, t12) {
      xt = { type: 6, name: getSlice(e4, t12), nameLoc: getLoc(e4, t12), value: void 0, loc: getLoc(e4) };
    }, ondirname(e4, t12) {
      const n5 = getSlice(e4, t12), r6 = "." === n5 || ":" === n5 ? "bind" : "@" === n5 ? "on" : "#" === n5 ? "slot" : n5.slice(2);
      if (At || "" !== r6 || emitError(26, e4), At || "" === r6) xt = { type: 6, name: n5, nameLoc: getLoc(e4, t12), value: void 0, loc: getLoc(e4) };
      else if (xt = { type: 7, name: r6, rawName: n5, exp: void 0, arg: void 0, modifiers: "." === n5 ? [createSimpleExpression("prop")] : [], loc: getLoc(e4) }, "pre" === r6) {
        At = Mt.inVPre = true, Pt = Ct;
        const e5 = Ct.props;
        for (let t13 = 0; t13 < e5.length; t13++) 7 === e5[t13].type && (e5[t13] = dirToAttr(e5[t13]));
      }
    }, ondirarg(e4, t12) {
      if (e4 === t12) return;
      const n5 = getSlice(e4, t12);
      if (At && !isVPre(xt)) xt.name += n5, setLocEnd(xt.nameLoc, t12);
      else {
        const r6 = "[" !== n5[0];
        xt.arg = createExp(r6 ? n5 : n5.slice(1, -1), r6, getLoc(e4, t12), r6 ? 3 : 0);
      }
    }, ondirmodifier(e4, t12) {
      const n5 = getSlice(e4, t12);
      if (At && !isVPre(xt)) xt.name += "." + n5, setLocEnd(xt.nameLoc, t12);
      else if ("slot" === xt.name) {
        const e5 = xt.arg;
        e5 && (e5.content += "." + n5, setLocEnd(e5.loc, t12));
      } else {
        const r6 = createSimpleExpression(n5, true, getLoc(e4, t12));
        xt.modifiers.push(r6);
      }
    }, onattribdata(e4, t12) {
      bt += getSlice(e4, t12), Ot < 0 && (Ot = e4), It = t12;
    }, onattribentity(e4, t12, n5) {
      bt += e4, Ot < 0 && (Ot = t12), It = n5;
    }, onattribnameend(e4) {
      const t12 = xt.loc.start.offset, n5 = getSlice(t12, e4);
      7 === xt.type && (xt.rawName = n5), Ct.props.some((e5) => (7 === e5.type ? e5.rawName : e5.name) === n5) && emitError(2, t12);
    }, onattribend(e4, t12) {
      if (Ct && xt) {
        if (setLocEnd(xt.loc, t12), 0 !== e4) if (bt.includes("&") && (bt = Tt.decodeEntities(bt, true)), 6 === xt.type) "class" === xt.name && (bt = condense(bt).trim()), 1 !== e4 || bt || emitError(13, t12), xt.value = { type: 2, content: bt, loc: 1 === e4 ? getLoc(Ot, It) : getLoc(Ot - 1, It + 1) }, Mt.inSFCRoot && "template" === Ct.tag && "lang" === xt.name && bt && "html" !== bt && Mt.enterRCDATA(toCharCodes("</template"), 0);
        else {
          let e5 = 0;
          xt.exp = createExp(bt, false, getLoc(Ot, It), 0, e5), "for" === xt.name && (xt.forParseResult = (function(e6) {
            const t14 = e6.loc, n5 = e6.content, r6 = n5.match(_t);
            if (!r6) return;
            const [, o7, s6] = r6, createAliasExpression = /* @__PURE__ */ __name((e7, n6, r7 = false) => {
              const o8 = t14.start.offset + n6;
              return createExp(e7, false, getLoc(o8, o8 + e7.length), 0, r7 ? 1 : 0);
            }, "createAliasExpression"), i4 = { source: createAliasExpression(s6.trim(), n5.indexOf(s6, o7.length)), value: void 0, key: void 0, index: void 0, finalized: false };
            let a8 = o7.trim().replace(kt, "").trim();
            const c4 = o7.indexOf(a8), l5 = a8.match(wt);
            if (l5) {
              a8 = a8.replace(wt, "").trim();
              const e7 = l5[1].trim();
              let t15;
              if (e7 && (t15 = n5.indexOf(e7, c4 + a8.length), i4.key = createAliasExpression(e7, t15, true)), l5[2]) {
                const r7 = l5[2].trim();
                r7 && (i4.index = createAliasExpression(r7, n5.indexOf(r7, i4.key ? t15 + e7.length : c4 + a8.length), true));
              }
            }
            a8 && (i4.value = createAliasExpression(a8, c4, true));
            return i4;
          })(xt.exp));
          let t13 = -1;
          "bind" === xt.name && (t13 = xt.modifiers.findIndex((e6) => "sync" === e6.content)) > -1 && checkCompatEnabled("COMPILER_V_BIND_SYNC", Tt, xt.loc, xt.arg.loc.source) && (xt.name = "model", xt.modifiers.splice(t13, 1));
        }
        7 === xt.type && "pre" === xt.name || Ct.props.push(xt);
      }
      bt = "", Ot = It = -1;
    }, oncomment(e4, t12) {
      Tt.comments && addNode({ type: 3, content: getSlice(e4, t12), loc: getLoc(e4 - 4, t12 + 3) });
    }, onend() {
      const e4 = vt.length;
      for (let t12 = 0; t12 < Lt.length; t12++) onCloseTag(Lt[t12], e4 - 1), emitError(24, Lt[t12].loc.start.offset);
    }, oncdata(e4, t12) {
      0 !== (Lt[0] ? Lt[0].ns : Tt.ns) ? onText(getSlice(e4, t12), e4, t12) : emitError(1, e4 - 9);
    }, onprocessinginstruction(e4) {
      0 === (Lt[0] ? Lt[0].ns : Tt.ns) && emitError(21, e4 - 1);
    } });
    wt = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    kt = /^\(|\)$/g;
    __name(getSlice, "getSlice");
    __name(endOpenTag, "endOpenTag");
    __name(onText, "onText");
    __name(onCloseTag, "onCloseTag");
    __name(backTrack, "backTrack");
    Dt = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
    __name(isFragmentTemplate, "isFragmentTemplate");
    Vt = /\r\n/g;
    __name(condenseWhitespace, "condenseWhitespace");
    __name(hasNewlineChar, "hasNewlineChar");
    __name(condense, "condense");
    __name(addNode, "addNode");
    __name(getLoc, "getLoc");
    __name(setLocEnd, "setLocEnd");
    __name(dirToAttr, "dirToAttr");
    __name(createExp, "createExp");
    __name(emitError, "emitError");
    __name(baseParse, "baseParse");
    __name(cacheStatic, "cacheStatic");
    __name(getSingleElementRoot, "getSingleElementRoot");
    __name(walk, "walk");
    __name(getConstantType, "getConstantType");
    Ft2 = /* @__PURE__ */ new Set([Be, Xe, Ue, je]);
    __name(getConstantTypeOfHelperCall, "getConstantTypeOfHelperCall");
    __name(getGeneratedPropsConstantType, "getGeneratedPropsConstantType");
    __name(getNodeProps, "getNodeProps");
    __name(createTransformContext, "createTransformContext");
    __name(transform, "transform");
    __name(traverseNode, "traverseNode");
    __name(createStructuralDirectiveTransform, "createStructuralDirectiveTransform");
    Bt = "/*@__PURE__*/";
    aliasHelper = /* @__PURE__ */ __name((e4) => `${tt[e4]}: _${tt[e4]}`, "aliasHelper");
    __name(generate, "generate");
    __name(genAssets, "genAssets");
    __name(genNodeListAsArray, "genNodeListAsArray");
    __name(genNodeList, "genNodeList");
    __name(genNode, "genNode");
    __name(genExpression, "genExpression");
    __name(genCompoundExpression, "genCompoundExpression");
    __name(genExpressionAsPropertyKey, "genExpressionAsPropertyKey");
    new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
    __name(processExpression, "processExpression");
    Xt = createStructuralDirectiveTransform(/^(?:if|else|else-if)$/, (e4, t12, n5) => processIf(e4, t12, n5, (e5, t13, r6) => {
      const o7 = n5.parent.children;
      let s6 = o7.indexOf(e5), i4 = 0;
      for (; s6-- >= 0; ) {
        const e6 = o7[s6];
        e6 && 9 === e6.type && (i4 += e6.branches.length);
      }
      return () => {
        if (r6) e5.codegenNode = createCodegenNodeForBranch(t13, i4, n5);
        else {
          const r7 = (function(e6) {
            for (; ; ) if (19 === e6.type) {
              if (19 !== e6.alternate.type) return e6;
              e6 = e6.alternate;
            } else 20 === e6.type && (e6 = e6.value);
          })(e5.codegenNode);
          r7.alternate = createCodegenNodeForBranch(t13, i4 + e5.branches.length - 1, n5);
        }
      };
    }));
    __name(processIf, "processIf");
    __name(createIfBranch, "createIfBranch");
    __name(createCodegenNodeForBranch, "createCodegenNodeForBranch");
    __name(createChildrenCodegenNode, "createChildrenCodegenNode");
    Ut = createStructuralDirectiveTransform("for", (e4, t12, n5) => {
      const { helper: r6, removeHelper: o7 } = n5;
      return processFor(e4, t12, n5, (t13) => {
        const s6 = createCallExpression(r6(we), [t13.source]), i4 = isTemplateNode(e4), a8 = findDir(e4, "memo"), c4 = findProp(e4, "key", false, true);
        c4 && c4.type;
        let l5 = c4 && (6 === c4.type ? c4.value ? createSimpleExpression(c4.value.content, true) : void 0 : c4.exp);
        const u5 = l5 ? createObjectProperty("key", l5) : null, p5 = 4 === t13.source.type && t13.source.constType > 0, d5 = p5 ? 64 : c4 ? 128 : 256;
        return t13.codegenNode = createVNodeCall(n5, r6(ge), void 0, s6, d5, void 0, void 0, true, !p5, false, e4.loc), () => {
          var c5;
          let d6;
          const { children: h5 } = t13, f4 = 1 !== h5.length || 1 !== h5[0].type, m5 = isSlotOutlet(e4) ? e4 : i4 && 1 === e4.children.length && isSlotOutlet(e4.children[0]) ? e4.children[0] : null;
          if (m5) d6 = m5.codegenNode, i4 && u5 && injectProp(d6, u5, n5);
          else if (f4) d6 = createVNodeCall(n5, r6(ge), u5 ? createObjectExpression([u5]) : void 0, e4.children, 64, void 0, void 0, true, void 0, false);
          else {
            d6 = h5[0].codegenNode, i4 && u5 && injectProp(d6, u5, n5);
            const e5 = !p5 || true === d6.isBlockRequired;
            d6.isBlock !== e5 && (d6.isBlock ? (o7(Te), o7(getVNodeBlockHelper(n5.inSSR, d6.isComponent))) : o7(getVNodeHelper(n5.inSSR, d6.isComponent))), d6.isBlock = e5, d6.isBlock ? (r6(Te), r6(getVNodeBlockHelper(n5.inSSR, d6.isComponent))) : (r6(getVNodeHelper(n5.inSSR, d6.isComponent)), d6.needsPatch && (d6.patchFlag = 512 | (null != (c5 = d6.patchFlag) ? c5 : 0)));
          }
          if (a8) {
            const e5 = createFunctionExpression(createForLoopParams(t13.parseResult, [createSimpleExpression("_cached")]));
            e5.body = createBlockStatement([createCompoundExpression(["const _memo = (", a8.exp, ")"]), createCompoundExpression(["if (_cached && _cached.el", ...l5 ? [" && _cached.key === ", l5] : [], ` && ${n5.helperString(et)}(_cached, _memo)) return _cached`]), createCompoundExpression(["const _item = ", d6]), createSimpleExpression("_item.memo = _memo"), createSimpleExpression("return _item")]), s6.arguments.push(e5, createSimpleExpression("_cache"), createSimpleExpression(String(n5.cached.length))), n5.cached.push(null);
          } else s6.arguments.push(createFunctionExpression(createForLoopParams(t13.parseResult), d6, true));
        };
      });
    });
    __name(processFor, "processFor");
    __name(finalizeForParseResult, "finalizeForParseResult");
    __name(createForLoopParams, "createForLoopParams");
    jt = createSimpleExpression("undefined", false);
    trackSlotScopes = /* @__PURE__ */ __name((e4, t12) => {
      if (1 === e4.type && (1 === e4.tagType || 3 === e4.tagType)) {
        const n5 = findDir(e4, "slot");
        if (n5) return n5.exp, t12.scopes.vSlot++, () => {
          t12.scopes.vSlot--;
        };
      }
    }, "trackSlotScopes");
    buildClientSlotFn = /* @__PURE__ */ __name((e4, t12, n5, r6) => createFunctionExpression(e4, n5, false, true, n5.length ? n5[0].loc : r6), "buildClientSlotFn");
    __name(buildSlots, "buildSlots");
    __name(buildDynamicSlot, "buildDynamicSlot");
    __name(hasForwardedSlots, "hasForwardedSlots");
    Ht = /* @__PURE__ */ new WeakMap();
    transformElement = /* @__PURE__ */ __name((e4, t12) => function() {
      if (1 !== (e4 = t12.currentNode).type || 0 !== e4.tagType && 1 !== e4.tagType) return;
      const { tag: n5, props: r6 } = e4, o7 = 1 === e4.tagType;
      let s6 = o7 ? resolveComponentType(e4, t12) : `"${n5}"`;
      const i4 = isObject(s6) && s6.callee === Ae;
      let a8, c4, l5, u5, p5, d5 = 0, h5 = false, f4 = false, m5 = i4 || s6 === Ee || s6 === Se || !o7 && ("svg" === n5 || "foreignObject" === n5 || "math" === n5);
      if (r6.length > 0) {
        const n6 = buildProps(e4, t12, void 0, o7, i4);
        a8 = n6.props, d5 = n6.patchFlag, u5 = n6.dynamicPropNames, h5 = n6.needsPatch, f4 = n6.isBlockRequired;
        const r7 = n6.directives;
        p5 = r7 && r7.length ? createArrayExpression(r7.map((e5) => buildDirectiveArgs(e5, t12))) : void 0, n6.shouldUseBlock && (m5 = true);
      }
      if (e4.children.length > 0) {
        s6 === _e && (m5 = true, d5 |= 1024);
        if (o7 && s6 !== Ee && s6 !== _e) {
          const { slots: n6, hasDynamicSlots: r7 } = buildSlots(e4, t12);
          c4 = n6, r7 && (d5 |= 1024);
        } else if (1 === e4.children.length && s6 !== Ee) {
          const n6 = e4.children[0], r7 = n6.type, o8 = 5 === r7 || 8 === r7;
          o8 && 0 === getConstantType(n6, t12) && (d5 |= 1), c4 = o8 || 2 === r7 ? n6 : e4.children;
        } else c4 = e4.children;
      }
      u5 && u5.length && (l5 = (function(e5) {
        let t13 = "[";
        for (let n6 = 0, r7 = e5.length; n6 < r7; n6++) t13 += JSON.stringify(e5[n6]), n6 < r7 - 1 && (t13 += ", ");
        return t13 + "]";
      })(u5));
      const g5 = e4.codegenNode = createVNodeCall(t12, s6, a8, c4, 0 === d5 ? void 0 : d5, l5, p5, !!m5, false, o7, e4.loc);
      h5 = h5 && (0 === d5 || 32 === d5), h5 && (g5.needsPatch = true), f4 && (g5.isBlockRequired = true);
    }, "transformElement");
    __name(resolveComponentType, "resolveComponentType");
    __name(buildProps, "buildProps");
    __name(dedupeProperties, "dedupeProperties");
    __name(mergeAsArray, "mergeAsArray");
    __name(buildDirectiveArgs, "buildDirectiveArgs");
    __name(isComponentTag, "isComponentTag");
    transformSlotOutlet = /* @__PURE__ */ __name((e4, t12) => {
      if (isSlotOutlet(e4)) {
        const { children: n5, loc: r6 } = e4, { slotName: o7, slotProps: s6 } = processSlotOutlet(e4, t12), i4 = [t12.prefixIdentifiers ? "_ctx.$slots" : "$slots", o7, "{}", "undefined", "true"];
        let a8 = 2;
        s6 && (i4[2] = s6, a8 = 3), n5.length && (i4[3] = createFunctionExpression([], n5, false, false, r6), a8 = 4), t12.scopeId && !t12.slotted && (a8 = 5), i4.splice(a8), e4.codegenNode = createCallExpression(t12.helper(ke), i4, r6);
      }
    }, "transformSlotOutlet");
    __name(processSlotOutlet, "processSlotOutlet");
    transformOn$1 = /* @__PURE__ */ __name((e4, t12, n5, r6) => {
      const { loc: o7, modifiers: s6, arg: i4 } = e4;
      let a8;
      if (e4.exp || s6.length || n5.onError(createCompilerError(35, o7)), 4 === i4.type) if (i4.isStatic) {
        let e5 = i4.content;
        e5.startsWith("vue:") && (e5 = `vnode-${e5.slice(4)}`);
        a8 = createSimpleExpression(0 !== t12.tagType || e5.startsWith("vnode") || !/[A-Z]/.test(e5) ? u(p(e5)) : `on:${e5}`, true, i4.loc);
      } else a8 = createCompoundExpression([`${n5.helperString(Ge)}(`, i4, ")"]);
      else a8 = i4, a8.children.unshift(`${n5.helperString(Ge)}(`), a8.children.push(")");
      let c4 = e4.exp;
      c4 && !c4.content.trim() && (c4 = void 0);
      let l5 = n5.cacheHandlers && !c4 && !n5.inVOnce;
      if (c4) {
        const e5 = ft(c4), t13 = !(e5 || Et(c4)), n6 = c4.content.includes(";");
        (t13 || l5 && e5) && (c4 = createCompoundExpression([`${t13 ? "$event" : "(...args)"} => ${n6 ? "{" : "("}`, c4, n6 ? "}" : ")"]));
      }
      let u5 = { props: [createObjectProperty(a8, c4 || createSimpleExpression("() => {}", false, o7))] };
      return r6 && (u5 = r6(u5)), l5 && (u5.props[0].value = n5.cache(u5.props[0].value)), u5.props.forEach((e5) => e5.key.isHandlerKey = true), u5;
    }, "transformOn$1");
    transformBind = /* @__PURE__ */ __name((e4, t12, n5) => {
      const { modifiers: r6, loc: o7 } = e4, s6 = e4.arg;
      let { exp: i4 } = e4;
      return i4 && 4 === i4.type && !i4.content.trim() && (i4 = void 0), 4 !== s6.type ? (s6.children.unshift("("), s6.children.push(') || ""')) : s6.isStatic || (s6.content = s6.content ? `${s6.content} || ""` : '""'), r6.some((e5) => "camel" === e5.content) && (4 === s6.type ? s6.isStatic ? s6.content = p(s6.content) : s6.content = `${n5.helperString($e)}(${s6.content})` : (s6.children.unshift(`${n5.helperString($e)}(`), s6.children.push(")"))), n5.inSSR || (r6.some((e5) => "prop" === e5.content) && injectPrefix(s6, "."), r6.some((e5) => "attr" === e5.content) && injectPrefix(s6, "^")), { props: [createObjectProperty(s6, i4)] };
    }, "transformBind");
    injectPrefix = /* @__PURE__ */ __name((e4, t12) => {
      4 === e4.type ? e4.isStatic ? e4.content = t12 + e4.content : e4.content = `\`${t12}\${${e4.content}}\`` : (e4.children.unshift(`'${t12}' + (`), e4.children.push(")"));
    }, "injectPrefix");
    transformText = /* @__PURE__ */ __name((e4, t12) => {
      if (0 === e4.type || 1 === e4.type || 11 === e4.type || 10 === e4.type) return () => {
        const n5 = e4.children;
        let r6, o7 = false;
        for (let e5 = 0; e5 < n5.length; e5++) {
          const t13 = n5[e5];
          if (isText$1(t13)) {
            o7 = true;
            for (let o8 = e5 + 1; o8 < n5.length; o8++) {
              const s6 = n5[o8];
              if (!isText$1(s6)) {
                r6 = void 0;
                break;
              }
              r6 || (r6 = n5[e5] = createCompoundExpression([t13], t13.loc)), r6.children.push(" + ", s6), n5.splice(o8, 1), o8--;
            }
          }
        }
        if (o7 && (1 !== n5.length || 0 !== e4.type && (1 !== e4.type || 0 !== e4.tagType || e4.props.find((e5) => 7 === e5.type && !t12.directiveTransforms[e5.name]) || "template" === e4.tag))) for (let e5 = 0; e5 < n5.length; e5++) {
          const r7 = n5[e5];
          if (isText$1(r7) || 8 === r7.type) {
            const o8 = [];
            2 === r7.type && " " === r7.content || o8.push(r7), t12.ssr || 0 !== getConstantType(r7, t12) || o8.push("1"), n5[e5] = { type: 12, content: r7, loc: r7.loc, codegenNode: createCallExpression(t12.helper(Oe), o8) };
          }
        }
      };
    }, "transformText");
    $t = /* @__PURE__ */ new WeakSet();
    transformOnce = /* @__PURE__ */ __name((e4, t12) => {
      if (1 === e4.type && findDir(e4, "once", true)) {
        if ($t.has(e4) || t12.inVOnce || t12.inSSR) return;
        return $t.add(e4), t12.inVOnce = true, t12.helper(qe), () => {
          t12.inVOnce = false;
          const e5 = t12.currentNode;
          e5.codegenNode && (e5.codegenNode = t12.cache(e5.codegenNode, true, true));
        };
      }
    }, "transformOnce");
    transformModel$1 = /* @__PURE__ */ __name((e4, t12, n5) => {
      const { exp: r6, arg: o7 } = e4;
      if (!r6) return n5.onError(createCompilerError(41, e4.loc)), createTransformProps();
      const s6 = r6.loc.source.trim(), i4 = 4 === r6.type ? r6.content : s6, a8 = n5.bindingMetadata[s6];
      if ("props" === a8 || "props-aliased" === a8) return n5.onError(createCompilerError(44, r6.loc)), createTransformProps();
      if ("literal-const" === a8 || "setup-const" === a8) return n5.onError(createCompilerError(45, r6.loc)), createTransformProps();
      if (!i4.trim() || !ft(r6)) return n5.onError(createCompilerError(42, r6.loc)), createTransformProps();
      const c4 = o7 || createSimpleExpression("modelValue", true), l5 = o7 ? isStaticExp(o7) ? `onUpdate:${p(o7.content)}` : createCompoundExpression(['"onUpdate:" + ', o7]) : "onUpdate:modelValue";
      let u5;
      u5 = createCompoundExpression([`${n5.isTS ? "($event: any)" : "$event"} => ((`, r6, ") = $event)"]);
      const p5 = [createObjectProperty(c4, e4.exp), createObjectProperty(l5, u5)];
      if (e4.modifiers.length && 1 === t12.tagType) {
        const t13 = e4.modifiers.map((e5) => e5.content).map((e5) => (isSimpleIdentifier(e5) ? e5 : JSON.stringify(e5)) + ": true").join(", "), n6 = o7 ? isStaticExp(o7) ? `${o7.content}Modifiers` : createCompoundExpression([o7, ' + "Modifiers"']) : "modelModifiers";
        p5.push(createObjectProperty(n6, createSimpleExpression(`{ ${t13} }`, false, e4.loc, 2)));
      }
      return createTransformProps(p5);
    }, "transformModel$1");
    __name(createTransformProps, "createTransformProps");
    Wt = /[\w).+\-_$\]]/;
    transformFilter = /* @__PURE__ */ __name((e4, t12) => {
      isCompatEnabled("COMPILER_FILTERS", t12) && (5 === e4.type ? rewriteFilter(e4.content, t12) : 1 === e4.type && e4.props.forEach((e5) => {
        7 === e5.type && "for" !== e5.name && e5.exp && rewriteFilter(e5.exp, t12);
      }));
    }, "transformFilter");
    __name(rewriteFilter, "rewriteFilter");
    __name(parseFilter, "parseFilter");
    __name(wrapFilter, "wrapFilter");
    Gt = /* @__PURE__ */ new WeakSet();
    transformMemo = /* @__PURE__ */ __name((e4, t12) => {
      if (1 === e4.type) {
        const n5 = findDir(e4, "memo");
        if (!n5 || Gt.has(e4) || t12.inSSR) return;
        return Gt.add(e4), () => {
          const r6 = e4.codegenNode || t12.currentNode.codegenNode;
          r6 && 13 === r6.type && (1 !== e4.tagType && convertToBlock(r6, t12), e4.codegenNode = createCallExpression(t12.helper(Ze), [n5.exp, createFunctionExpression(void 0, r6), "_cache", String(t12.cached.length)]), t12.cached.push(null));
        };
      }
    }, "transformMemo");
    transformVBindShorthand = /* @__PURE__ */ __name((e4, t12) => {
      if (1 === e4.type) {
        for (const n5 of e4.props) if (7 === n5.type && "bind" === n5.name && (!n5.exp || 4 === n5.exp.type && !n5.exp.content.trim()) && n5.arg) {
          const e5 = n5.arg;
          if (4 === e5.type && e5.isStatic) {
            const t13 = p(e5.content);
            (ut.test(t13[0]) || "-" === t13[0]) && (n5.exp = createSimpleExpression(t13, false, e5.loc));
          } else t12.onError(createCompilerError(53, e5.loc)), n5.exp = createSimpleExpression("", true, e5.loc);
        }
      }
    }, "transformVBindShorthand");
    __name(getBaseTransformPreset, "getBaseTransformPreset");
    __name(baseCompile, "baseCompile");
    noopDirectiveTransform = /* @__PURE__ */ __name(() => ({ props: [] }), "noopDirectiveTransform");
    qt = /* @__PURE__ */ Symbol("");
    Kt = /* @__PURE__ */ Symbol("");
    Jt = /* @__PURE__ */ Symbol("");
    zt = /* @__PURE__ */ Symbol("");
    Qt = /* @__PURE__ */ Symbol("");
    Yt = /* @__PURE__ */ Symbol("");
    Zt = /* @__PURE__ */ Symbol("");
    en = /* @__PURE__ */ Symbol("");
    tn = /* @__PURE__ */ Symbol("");
    nn = /* @__PURE__ */ Symbol("");
    registerRuntimeHelpers({ [qt]: "vModelRadio", [Kt]: "vModelCheckbox", [Jt]: "vModelText", [zt]: "vModelSelect", [Qt]: "vModelDynamic", [Yt]: "withModifiers", [Zt]: "withKeys", [en]: "vShow", [tn]: "Transition", [nn]: "TransitionGroup" });
    on2 = { parseMode: "html", isVoidTag: M, isNativeTag: /* @__PURE__ */ __name((e4) => N(e4) || O(e4) || C(e4), "isNativeTag"), isPreTag: /* @__PURE__ */ __name((e4) => "pre" === e4, "isPreTag"), isIgnoreNewlineTag: /* @__PURE__ */ __name((e4) => "pre" === e4 || "textarea" === e4, "isIgnoreNewlineTag"), decodeEntities: /* @__PURE__ */ __name(function(e4, t12 = false) {
      return rn2 || (rn2 = document.createElement("div")), t12 ? (rn2.innerHTML = `<div foo="${e4.replace(/"/g, "&quot;")}">`, rn2.children[0].getAttribute("foo")) : (rn2.innerHTML = e4, rn2.textContent);
    }, "decodeEntities"), isBuiltInComponent: /* @__PURE__ */ __name((e4) => "Transition" === e4 || "transition" === e4 ? tn : "TransitionGroup" === e4 || "transition-group" === e4 ? nn : void 0, "isBuiltInComponent"), getNamespace(e4, t12, n5) {
      let r6 = t12 ? t12.ns : n5;
      if (t12 && 2 === r6) if ("annotation-xml" === t12.tag) {
        if ("svg" === e4) return 1;
        t12.props.some((e5) => 6 === e5.type && "encoding" === e5.name && null != e5.value && ("text/html" === e5.value.content || "application/xhtml+xml" === e5.value.content)) && (r6 = 0);
      } else /^m(?:[ions]|text)$/.test(t12.tag) && "mglyph" !== e4 && "malignmark" !== e4 && (r6 = 0);
      else t12 && 1 === r6 && ("foreignObject" !== t12.tag && "desc" !== t12.tag && "title" !== t12.tag || (r6 = 0));
      if (0 === r6) {
        if ("svg" === e4) return 1;
        if ("math" === e4) return 2;
      }
      return r6;
    } };
    transformStyle = /* @__PURE__ */ __name((e4) => {
      1 === e4.type && e4.props.forEach((t12, n5) => {
        6 === t12.type && "style" === t12.name && t12.value && (e4.props[n5] = { type: 7, name: "bind", arg: createSimpleExpression("style", true, t12.loc), exp: parseInlineCSS(t12.value.content, t12.loc), modifiers: [], loc: t12.loc });
      });
    }, "transformStyle");
    parseInlineCSS = /* @__PURE__ */ __name((e4, t12) => {
      const n5 = parseStringStyle(e4);
      return createSimpleExpression(JSON.stringify(n5), false, t12, 3);
    }, "parseInlineCSS");
    __name(createDOMCompilerError, "createDOMCompilerError");
    sn = { 54: "v-html is missing expression.", 55: "v-html will override element children.", 56: "v-text is missing expression.", 57: "v-text will override element children.", 58: "v-model can only be used on <input>, <textarea> and <select> elements.", 59: "v-model argument is not supported on plain elements.", 60: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.", 61: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.", 62: "v-show is missing expression.", 63: "<Transition> expects exactly one child element or component.", 64: "Tags with side effect (<script> and <style>) are ignored in client component templates." };
    an = makeMap("passive,once,capture");
    cn = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact,middle");
    ln = makeMap("left,right");
    un = makeMap("onkeyup,onkeydown,onkeypress");
    transformClick = /* @__PURE__ */ __name((e4, t12) => isStaticExp(e4) && "onclick" === e4.content.toLowerCase() ? createSimpleExpression(t12, true) : 4 !== e4.type ? createCompoundExpression(["(", e4, `) === "onClick" ? "${t12}" : (`, e4, ")"]) : e4, "transformClick");
    ignoreSideEffectTags = /* @__PURE__ */ __name((e4, t12) => {
      1 !== e4.type || 0 !== e4.tagType || "script" !== e4.tag && "style" !== e4.tag || t12.removeNode();
    }, "ignoreSideEffectTags");
    pn = [transformStyle];
    dn = { cloak: noopDirectiveTransform, html: /* @__PURE__ */ __name((e4, t12, n5) => {
      const { exp: r6, loc: o7 } = e4;
      return r6 || n5.onError(createDOMCompilerError(54, o7)), t12.children.length && (n5.onError(createDOMCompilerError(55, o7)), t12.children.length = 0), { props: [createObjectProperty(createSimpleExpression("innerHTML", true, o7), r6 || createSimpleExpression("", true))] };
    }, "html"), text: /* @__PURE__ */ __name((e4, t12, n5) => {
      const { exp: r6, loc: o7 } = e4;
      return r6 || n5.onError(createDOMCompilerError(56, o7)), t12.children.length && (n5.onError(createDOMCompilerError(57, o7)), t12.children.length = 0), { props: [createObjectProperty(createSimpleExpression("textContent", true), r6 ? getConstantType(r6, n5) > 0 ? r6 : createCallExpression(n5.helperString(Ve), [r6], o7) : createSimpleExpression("", true))] };
    }, "text"), model: /* @__PURE__ */ __name((e4, t12, n5) => {
      const r6 = transformModel$1(e4, t12, n5);
      if (!r6.props.length || 1 === t12.tagType) return r6;
      e4.arg && n5.onError(createDOMCompilerError(59, e4.arg.loc));
      const { tag: o7 } = t12, s6 = n5.isCustomElement(o7);
      if ("input" === o7 || "textarea" === o7 || "select" === o7 || s6) {
        let i4 = Jt, a8 = false;
        if ("input" === o7 || s6) {
          const r7 = findProp(t12, "type");
          if (r7) {
            if (7 === r7.type) i4 = Qt;
            else if (r7.value) switch (r7.value.content) {
              case "radio":
                i4 = qt;
                break;
              case "checkbox":
                i4 = Kt;
                break;
              case "file":
                a8 = true, n5.onError(createDOMCompilerError(60, e4.loc));
            }
          } else hasDynamicKeyVBind(t12) && (i4 = Qt);
        } else "select" === o7 && (i4 = zt);
        a8 || (r6.needRuntime = n5.helper(i4));
      } else n5.onError(createDOMCompilerError(58, e4.loc));
      return r6.props = r6.props.filter((e5) => !(4 === e5.key.type && "modelValue" === e5.key.content)), r6;
    }, "model"), on: /* @__PURE__ */ __name((e4, t12, n5) => transformOn$1(e4, t12, n5, (t13) => {
      const { modifiers: r6 } = e4;
      if (!r6.length) return t13;
      let { key: o7, value: s6 } = t13.props[0];
      const { keyModifiers: i4, nonKeyModifiers: a8, eventOptionModifiers: c4 } = ((e5, t14, n6) => {
        const r7 = [], o8 = [], s7 = [];
        for (let i5 = 0; i5 < t14.length; i5++) {
          const a9 = t14[i5].content;
          "native" === a9 && checkCompatEnabled("COMPILER_V_ON_NATIVE", n6) || an(a9) ? s7.push(a9) : ln(a9) ? isStaticExp(e5) ? un(e5.content.toLowerCase()) ? r7.push(a9) : o8.push(a9) : (r7.push(a9), o8.push(a9)) : cn(a9) ? o8.push(a9) : r7.push(a9);
        }
        return { keyModifiers: r7, nonKeyModifiers: o8, eventOptionModifiers: s7 };
      })(o7, r6, n5, e4.loc);
      if (a8.includes("right") && (o7 = transformClick(o7, "onContextmenu")), a8.includes("middle") && (o7 = transformClick(o7, "onMouseup")), a8.length && (s6 = createCallExpression(n5.helper(Yt), [s6, JSON.stringify(a8)])), !i4.length || isStaticExp(o7) && !un(o7.content.toLowerCase()) || (s6 = createCallExpression(n5.helper(Zt), [s6, JSON.stringify(i4)])), c4.length) {
        const e5 = c4.map(f).join("");
        o7 = isStaticExp(o7) ? createSimpleExpression(`${o7.content}${e5}`, true) : createCompoundExpression(["(", o7, `) + "${e5}"`]);
      }
      return { props: [createObjectProperty(o7, s6)] };
    }), "on"), show: /* @__PURE__ */ __name((e4, t12, n5) => {
      const { exp: r6, loc: o7 } = e4;
      return r6 || n5.onError(createDOMCompilerError(62, o7)), { props: [], needRuntime: n5.helper(en) };
    }, "show") };
    hn = Object.freeze(Object.defineProperty({ __proto__: null, BASE_TRANSITION: ye, BindingTypes: { DATA: "data", PROPS: "props", PROPS_ALIASED: "props-aliased", SETUP_LET: "setup-let", SETUP_CONST: "setup-const", SETUP_REACTIVE_CONST: "setup-reactive-const", SETUP_MAYBE_REF: "setup-maybe-ref", SETUP_REF: "setup-ref", OPTIONS: "options", LITERAL_CONST: "literal-const" }, CAMELIZE: $e, CAPITALIZE: We, CREATE_BLOCK: Ne, CREATE_COMMENT: be, CREATE_ELEMENT_BLOCK: ve, CREATE_ELEMENT_VNODE: xe, CREATE_SLOTS: De, CREATE_STATIC: Ie, CREATE_TEXT: Oe, CREATE_VNODE: Ce, CompilerDeprecationTypes: { COMPILER_IS_ON_ELEMENT: "COMPILER_IS_ON_ELEMENT", COMPILER_V_BIND_SYNC: "COMPILER_V_BIND_SYNC", COMPILER_V_BIND_OBJECT_ORDER: "COMPILER_V_BIND_OBJECT_ORDER", COMPILER_V_ON_NATIVE: "COMPILER_V_ON_NATIVE", COMPILER_V_IF_V_FOR_PRECEDENCE: "COMPILER_V_IF_V_FOR_PRECEDENCE", COMPILER_NATIVE_TEMPLATE: "COMPILER_NATIVE_TEMPLATE", COMPILER_INLINE_TEMPLATE: "COMPILER_INLINE_TEMPLATE", COMPILER_FILTERS: "COMPILER_FILTERS" }, ConstantTypes: { NOT_CONSTANT: 0, 0: "NOT_CONSTANT", CAN_SKIP_PATCH: 1, 1: "CAN_SKIP_PATCH", CAN_CACHE: 2, 2: "CAN_CACHE", CAN_STRINGIFY: 3, 3: "CAN_STRINGIFY" }, DOMDirectiveTransforms: dn, DOMErrorCodes: { X_V_HTML_NO_EXPRESSION: 54, 54: "X_V_HTML_NO_EXPRESSION", X_V_HTML_WITH_CHILDREN: 55, 55: "X_V_HTML_WITH_CHILDREN", X_V_TEXT_NO_EXPRESSION: 56, 56: "X_V_TEXT_NO_EXPRESSION", X_V_TEXT_WITH_CHILDREN: 57, 57: "X_V_TEXT_WITH_CHILDREN", X_V_MODEL_ON_INVALID_ELEMENT: 58, 58: "X_V_MODEL_ON_INVALID_ELEMENT", X_V_MODEL_ARG_ON_ELEMENT: 59, 59: "X_V_MODEL_ARG_ON_ELEMENT", X_V_MODEL_ON_FILE_INPUT_ELEMENT: 60, 60: "X_V_MODEL_ON_FILE_INPUT_ELEMENT", X_V_MODEL_UNNECESSARY_VALUE: 61, 61: "X_V_MODEL_UNNECESSARY_VALUE", X_V_SHOW_NO_EXPRESSION: 62, 62: "X_V_SHOW_NO_EXPRESSION", X_TRANSITION_INVALID_CHILDREN: 63, 63: "X_TRANSITION_INVALID_CHILDREN", X_IGNORED_SIDE_EFFECT_TAG: 64, 64: "X_IGNORED_SIDE_EFFECT_TAG", __EXTEND_POINT__: 65, 65: "__EXTEND_POINT__" }, DOMErrorMessages: sn, DOMNodeTransforms: pn, ElementTypes: { ELEMENT: 0, 0: "ELEMENT", COMPONENT: 1, 1: "COMPONENT", SLOT: 2, 2: "SLOT", TEMPLATE: 3, 3: "TEMPLATE" }, ErrorCodes: { ABRUPT_CLOSING_OF_EMPTY_COMMENT: 0, 0: "ABRUPT_CLOSING_OF_EMPTY_COMMENT", CDATA_IN_HTML_CONTENT: 1, 1: "CDATA_IN_HTML_CONTENT", DUPLICATE_ATTRIBUTE: 2, 2: "DUPLICATE_ATTRIBUTE", END_TAG_WITH_ATTRIBUTES: 3, 3: "END_TAG_WITH_ATTRIBUTES", END_TAG_WITH_TRAILING_SOLIDUS: 4, 4: "END_TAG_WITH_TRAILING_SOLIDUS", EOF_BEFORE_TAG_NAME: 5, 5: "EOF_BEFORE_TAG_NAME", EOF_IN_CDATA: 6, 6: "EOF_IN_CDATA", EOF_IN_COMMENT: 7, 7: "EOF_IN_COMMENT", EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT: 8, 8: "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT", EOF_IN_TAG: 9, 9: "EOF_IN_TAG", INCORRECTLY_CLOSED_COMMENT: 10, 10: "INCORRECTLY_CLOSED_COMMENT", INCORRECTLY_OPENED_COMMENT: 11, 11: "INCORRECTLY_OPENED_COMMENT", INVALID_FIRST_CHARACTER_OF_TAG_NAME: 12, 12: "INVALID_FIRST_CHARACTER_OF_TAG_NAME", MISSING_ATTRIBUTE_VALUE: 13, 13: "MISSING_ATTRIBUTE_VALUE", MISSING_END_TAG_NAME: 14, 14: "MISSING_END_TAG_NAME", MISSING_WHITESPACE_BETWEEN_ATTRIBUTES: 15, 15: "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES", NESTED_COMMENT: 16, 16: "NESTED_COMMENT", UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME: 17, 17: "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME", UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE: 18, 18: "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE", UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME: 19, 19: "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME", UNEXPECTED_NULL_CHARACTER: 20, 20: "UNEXPECTED_NULL_CHARACTER", UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME: 21, 21: "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME", UNEXPECTED_SOLIDUS_IN_TAG: 22, 22: "UNEXPECTED_SOLIDUS_IN_TAG", X_INVALID_END_TAG: 23, 23: "X_INVALID_END_TAG", X_MISSING_END_TAG: 24, 24: "X_MISSING_END_TAG", X_MISSING_INTERPOLATION_END: 25, 25: "X_MISSING_INTERPOLATION_END", X_MISSING_DIRECTIVE_NAME: 26, 26: "X_MISSING_DIRECTIVE_NAME", X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END: 27, 27: "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END", X_V_IF_NO_EXPRESSION: 28, 28: "X_V_IF_NO_EXPRESSION", X_V_IF_SAME_KEY: 29, 29: "X_V_IF_SAME_KEY", X_V_ELSE_NO_ADJACENT_IF: 30, 30: "X_V_ELSE_NO_ADJACENT_IF", X_V_FOR_NO_EXPRESSION: 31, 31: "X_V_FOR_NO_EXPRESSION", X_V_FOR_MALFORMED_EXPRESSION: 32, 32: "X_V_FOR_MALFORMED_EXPRESSION", X_V_FOR_TEMPLATE_KEY_PLACEMENT: 33, 33: "X_V_FOR_TEMPLATE_KEY_PLACEMENT", X_V_BIND_NO_EXPRESSION: 34, 34: "X_V_BIND_NO_EXPRESSION", X_V_ON_NO_EXPRESSION: 35, 35: "X_V_ON_NO_EXPRESSION", X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET: 36, 36: "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET", X_V_SLOT_MIXED_SLOT_USAGE: 37, 37: "X_V_SLOT_MIXED_SLOT_USAGE", X_V_SLOT_DUPLICATE_SLOT_NAMES: 38, 38: "X_V_SLOT_DUPLICATE_SLOT_NAMES", X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN: 39, 39: "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN", X_V_SLOT_MISPLACED: 40, 40: "X_V_SLOT_MISPLACED", X_V_MODEL_NO_EXPRESSION: 41, 41: "X_V_MODEL_NO_EXPRESSION", X_V_MODEL_MALFORMED_EXPRESSION: 42, 42: "X_V_MODEL_MALFORMED_EXPRESSION", X_V_MODEL_ON_SCOPE_VARIABLE: 43, 43: "X_V_MODEL_ON_SCOPE_VARIABLE", X_V_MODEL_ON_PROPS: 44, 44: "X_V_MODEL_ON_PROPS", X_V_MODEL_ON_CONST: 45, 45: "X_V_MODEL_ON_CONST", X_INVALID_EXPRESSION: 46, 46: "X_INVALID_EXPRESSION", X_KEEP_ALIVE_INVALID_CHILDREN: 47, 47: "X_KEEP_ALIVE_INVALID_CHILDREN", X_PREFIX_ID_NOT_SUPPORTED: 48, 48: "X_PREFIX_ID_NOT_SUPPORTED", X_MODULE_MODE_NOT_SUPPORTED: 49, 49: "X_MODULE_MODE_NOT_SUPPORTED", X_CACHE_HANDLER_NOT_SUPPORTED: 50, 50: "X_CACHE_HANDLER_NOT_SUPPORTED", X_SCOPE_ID_NOT_SUPPORTED: 51, 51: "X_SCOPE_ID_NOT_SUPPORTED", X_VNODE_HOOKS: 52, 52: "X_VNODE_HOOKS", X_V_BIND_INVALID_SAME_NAME_ARGUMENT: 53, 53: "X_V_BIND_INVALID_SAME_NAME_ARGUMENT", __EXTEND_POINT__: 54, 54: "__EXTEND_POINT__" }, FRAGMENT: ge, GUARD_REACTIVE_PROPS: je, IS_MEMO_SAME: et, IS_REF: Ye, KEEP_ALIVE: _e, MERGE_PROPS: Fe, NORMALIZE_CLASS: Be, NORMALIZE_PROPS: Ue, NORMALIZE_STYLE: Xe, Namespaces: { HTML: 0, 0: "HTML", SVG: 1, 1: "SVG", MATH_ML: 2, 2: "MATH_ML" }, NodeTypes: { ROOT: 0, 0: "ROOT", ELEMENT: 1, 1: "ELEMENT", TEXT: 2, 2: "TEXT", COMMENT: 3, 3: "COMMENT", SIMPLE_EXPRESSION: 4, 4: "SIMPLE_EXPRESSION", INTERPOLATION: 5, 5: "INTERPOLATION", ATTRIBUTE: 6, 6: "ATTRIBUTE", DIRECTIVE: 7, 7: "DIRECTIVE", COMPOUND_EXPRESSION: 8, 8: "COMPOUND_EXPRESSION", IF: 9, 9: "IF", IF_BRANCH: 10, 10: "IF_BRANCH", FOR: 11, 11: "FOR", TEXT_CALL: 12, 12: "TEXT_CALL", VNODE_CALL: 13, 13: "VNODE_CALL", JS_CALL_EXPRESSION: 14, 14: "JS_CALL_EXPRESSION", JS_OBJECT_EXPRESSION: 15, 15: "JS_OBJECT_EXPRESSION", JS_PROPERTY: 16, 16: "JS_PROPERTY", JS_ARRAY_EXPRESSION: 17, 17: "JS_ARRAY_EXPRESSION", JS_FUNCTION_EXPRESSION: 18, 18: "JS_FUNCTION_EXPRESSION", JS_CONDITIONAL_EXPRESSION: 19, 19: "JS_CONDITIONAL_EXPRESSION", JS_CACHE_EXPRESSION: 20, 20: "JS_CACHE_EXPRESSION", JS_BLOCK_STATEMENT: 21, 21: "JS_BLOCK_STATEMENT", JS_TEMPLATE_LITERAL: 22, 22: "JS_TEMPLATE_LITERAL", JS_IF_STATEMENT: 23, 23: "JS_IF_STATEMENT", JS_ASSIGNMENT_EXPRESSION: 24, 24: "JS_ASSIGNMENT_EXPRESSION", JS_SEQUENCE_EXPRESSION: 25, 25: "JS_SEQUENCE_EXPRESSION", JS_RETURN_STATEMENT: 26, 26: "JS_RETURN_STATEMENT" }, OPEN_BLOCK: Te, POP_SCOPE_ID: Je, PUSH_SCOPE_ID: Ke, RENDER_LIST: we, RENDER_SLOT: ke, RESOLVE_COMPONENT: Re, RESOLVE_DIRECTIVE: Pe, RESOLVE_DYNAMIC_COMPONENT: Ae, RESOLVE_FILTER: Le, SET_BLOCK_TRACKING: qe, SUSPENSE: Se, TELEPORT: Ee, TO_DISPLAY_STRING: Ve, TO_HANDLERS: He, TO_HANDLER_KEY: Ge, TRANSITION: tn, TRANSITION_GROUP: nn, TS_NODE_TYPES: ct, UNREF: Qe, V_MODEL_CHECKBOX: Kt, V_MODEL_DYNAMIC: Qt, V_MODEL_RADIO: qt, V_MODEL_SELECT: zt, V_MODEL_TEXT: Jt, V_ON_WITH_KEYS: Zt, V_ON_WITH_MODIFIERS: Yt, V_SHOW: en, WITH_CTX: ze, WITH_DIRECTIVES: Me, WITH_MEMO: Ze, advancePositionWithClone: /* @__PURE__ */ __name(function(e4, t12, n5 = t12.length) {
      return advancePositionWithMutation({ offset: e4.offset, line: e4.line, column: e4.column }, t12, n5);
    }, "advancePositionWithClone"), advancePositionWithMutation, assert: /* @__PURE__ */ __name(function(e4, t12) {
      if (!e4) throw new Error(t12 || "unexpected compiler condition");
    }, "assert"), baseCompile, baseParse, buildDirectiveArgs, buildProps, buildSlots, checkCompatEnabled, compile: /* @__PURE__ */ __name(function(e4, t12 = {}) {
      return baseCompile(e4, n({}, on2, t12, { nodeTransforms: [ignoreSideEffectTags, ...pn, ...t12.nodeTransforms || []], directiveTransforms: n({}, dn, t12.directiveTransforms || {}), transformHoist: null }));
    }, "compile"), convertToBlock, createArrayExpression, createAssignmentExpression: /* @__PURE__ */ __name(function(e4, t12) {
      return { type: 24, left: e4, right: t12, loc: nt };
    }, "createAssignmentExpression"), createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createDOMCompilerError, createForLoopParams, createFunctionExpression, createIfStatement: /* @__PURE__ */ __name(function(e4, t12, n5) {
      return { type: 23, test: e4, consequent: t12, alternate: n5, loc: nt };
    }, "createIfStatement"), createInterpolation: /* @__PURE__ */ __name(function(e4, t12) {
      return { type: 5, loc: t12, content: isString(e4) ? createSimpleExpression(e4, false, t12) : e4 };
    }, "createInterpolation"), createObjectExpression, createObjectProperty, createReturnStatement: /* @__PURE__ */ __name(function(e4) {
      return { type: 26, returns: e4, loc: nt };
    }, "createReturnStatement"), createRoot, createSequenceExpression: /* @__PURE__ */ __name(function(e4) {
      return { type: 25, expressions: e4, loc: nt };
    }, "createSequenceExpression"), createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral: /* @__PURE__ */ __name(function(e4) {
      return { type: 22, elements: e4, loc: nt };
    }, "createTemplateLiteral"), createTransformContext, createVNodeCall, errorMessages: at, extractIdentifiers, findDir, findProp, forAliasRE: _t, generate, generateCodeFrame, getBaseTransformPreset, getConstantType, getMemoedVNodeCall, getVNodeBlockHelper, getVNodeHelper, hasDynamicKeyVBind, hasScopeRef: /* @__PURE__ */ __name(function hasScopeRef(e4, t12) {
      if (!e4 || 0 === Object.keys(t12).length) return false;
      switch (e4.type) {
        case 1:
          for (let n5 = 0; n5 < e4.props.length; n5++) {
            const r6 = e4.props[n5];
            if (7 === r6.type && (hasScopeRef(r6.arg, t12) || hasScopeRef(r6.exp, t12))) return true;
          }
          return e4.children.some((e5) => hasScopeRef(e5, t12));
        case 11:
          return !!hasScopeRef(e4.source, t12) || e4.children.some((e5) => hasScopeRef(e5, t12));
        case 9:
          return e4.branches.some((e5) => hasScopeRef(e5, t12));
        case 10:
          return !!hasScopeRef(e4.condition, t12) || e4.children.some((e5) => hasScopeRef(e5, t12));
        case 4:
          return !e4.isStatic && isSimpleIdentifier(e4.content) && !!t12[e4.content];
        case 8:
          return e4.children.some((e5) => isObject(e5) && hasScopeRef(e5, t12));
        case 5:
        case 12:
          return hasScopeRef(e4.content, t12);
        default:
          return false;
      }
    }, "hasScopeRef"), helperNameMap: tt, injectProp, isAllWhitespace, isCommentOrWhitespace, isCoreComponent, isFnExpression: Et, isFnExpressionBrowser, isFnExpressionNode: gt, isFunctionType: /* @__PURE__ */ __name((e4) => /Function(?:Expression|Declaration)$|Method$/.test(e4.type), "isFunctionType"), isInDestructureAssignment: /* @__PURE__ */ __name(function(e4, t12) {
      if (e4 && ("ObjectProperty" === e4.type || "ArrayPattern" === e4.type)) {
        let e5 = t12.length;
        for (; e5--; ) {
          const n5 = t12[e5];
          if ("AssignmentExpression" === n5.type) return true;
          if ("ObjectProperty" !== n5.type && !n5.type.endsWith("Pattern")) break;
        }
      }
      return false;
    }, "isInDestructureAssignment"), isInNewExpression: /* @__PURE__ */ __name(function(e4) {
      let t12 = e4.length;
      for (; t12--; ) {
        const n5 = e4[t12];
        if ("NewExpression" === n5.type) return true;
        if ("MemberExpression" !== n5.type) break;
      }
      return false;
    }, "isInNewExpression"), isMemberExpression: ft, isMemberExpressionBrowser, isMemberExpressionNode: ht, isReferencedIdentifier: /* @__PURE__ */ __name(function(e4, t12, n5) {
      return false;
    }, "isReferencedIdentifier"), isSimpleIdentifier, isSlotOutlet, isStaticArgOf, isStaticExp, isStaticProperty, isStaticPropertyKey: /* @__PURE__ */ __name((e4, t12) => isStaticProperty(t12) && t12.key === e4, "isStaticPropertyKey"), isTemplateNode, isText: isText$1, isVPre, isVSlot, isWhitespaceText, locStub: nt, noopDirectiveTransform, parse: /* @__PURE__ */ __name(function(e4, t12 = {}) {
      return baseParse(e4, n({}, on2, t12));
    }, "parse"), parserOptions: on2, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, stringifyExpression: /* @__PURE__ */ __name(function stringifyExpression(e4) {
      return isString(e4) ? e4 : 4 === e4.type ? e4.content : e4.children.map(stringifyExpression).join("");
    }, "stringifyExpression"), toValidAssetId, trackSlotScopes, trackVForSlotScopes: /* @__PURE__ */ __name((e4, t12) => {
      let n5;
      if (isTemplateNode(e4) && e4.props.some(isVSlot) && (n5 = findDir(e4, "for"))) {
        const e5 = n5.forParseResult;
        if (e5) {
          finalizeForParseResult(e5);
          const { value: n6, key: r6, index: o7 } = e5, { addIdentifiers: s6, removeIdentifiers: i4 } = t12;
          return n6 && s6(n6), r6 && s6(r6), o7 && s6(o7), () => {
            n6 && i4(n6), r6 && i4(r6), o7 && i4(o7);
          };
        }
      }
    }, "trackVForSlotScopes"), transform, transformBind, transformElement, transformExpression: /* @__PURE__ */ __name((e4, t12) => {
      if (5 === e4.type) e4.content = processExpression(e4.content, t12);
      else if (1 === e4.type) {
        const n5 = findDir(e4, "memo");
        for (let r6 = 0; r6 < e4.props.length; r6++) {
          const o7 = e4.props[r6];
          if (7 === o7.type && "for" !== o7.name) {
            const r7 = o7.exp, s6 = o7.arg;
            !r7 || 4 !== r7.type || "on" === o7.name && s6 || n5 && t12.vForMemoKeyedNodes.has(e4) && s6 && 4 === s6.type && "key" === s6.content || (o7.exp = processExpression(r7, t12, "slot" === o7.name)), s6 && 4 === s6.type && !s6.isStatic && (o7.arg = processExpression(s6, t12));
          }
        }
      }
    }, "transformExpression"), transformModel: transformModel$1, transformOn: transformOn$1, transformStyle, transformVBindShorthand, traverseNode, unwrapTSNode: /* @__PURE__ */ __name(function unwrapTSNode(e4) {
      return ct.includes(e4.type) ? unwrapTSNode(e4.expression) : e4;
    }, "unwrapTSNode"), validFirstIdentCharRE: ut, walkBlockDeclarations, walkFunctionParams: /* @__PURE__ */ __name(function(e4, t12) {
      for (const n5 of e4.params) for (const e5 of extractIdentifiers(n5)) t12(e5);
    }, "walkFunctionParams"), walkIdentifiers: /* @__PURE__ */ __name(function(e4, t12, n5 = false, r6 = [], o7 = /* @__PURE__ */ Object.create(null)) {
    }, "walkIdentifiers"), warnDeprecation: /* @__PURE__ */ __name(function(e4, t12, n5, ...r6) {
      if ("suppress-warning" === getCompatValue(e4, t12)) return;
      const { message: o7, link: s6 } = it[e4], i4 = `(deprecation ${e4}) ${"function" == typeof o7 ? o7(...r6) : o7}${s6 ? `
  Details: ${s6}` : ""}`, a8 = new SyntaxError(i4);
      a8.code = e4, n5 && (a8.loc = n5), t12.onWarn(a8);
    }, "warnDeprecation") }, Symbol.toStringTag, { value: "Module" }));
    !(function(e4) {
      Object.defineProperty(e4, "__esModule", { value: true });
      var t12 = hn, n5 = Vr, r6 = j;
      function _interopNamespaceDefault(e5) {
        var t13 = /* @__PURE__ */ Object.create(null);
        if (e5) for (var n6 in e5) t13[n6] = e5[n6];
        return t13.default = e5, Object.freeze(t13);
      }
      __name(_interopNamespaceDefault, "_interopNamespaceDefault");
      var o7 = _interopNamespaceDefault(n5);
      const s6 = /* @__PURE__ */ Object.create(null);
      function compileToFunction(e5, n6) {
        if (!r6.isString(e5)) {
          if (!e5.nodeType) return r6.NOOP;
          e5 = e5.innerHTML;
        }
        const i4 = r6.genCacheKey(e5, n6), a8 = s6[i4];
        if (a8) return a8;
        if ("#" === e5[0]) {
          const t13 = document.querySelector(e5);
          e5 = t13 ? t13.innerHTML : "";
        }
        const c4 = r6.extend({ hoistStatic: true, onError: void 0, onWarn: r6.NOOP }, n6);
        c4.isCustomElement || "undefined" == typeof customElements || (c4.isCustomElement = (e6) => !!customElements.get(e6));
        const { code: l5 } = t12.compile(e5, c4), u5 = new Function("Vue", l5)(o7);
        return u5._rc = true, s6[i4] = u5;
      }
      __name(compileToFunction, "compileToFunction");
      n5.registerRuntimeCompiler(compileToFunction), e4.compile = compileToFunction, Object.keys(n5).forEach(function(t13) {
        "default" === t13 || Object.prototype.hasOwnProperty.call(e4, t13) || (e4[t13] = n5[t13]);
      });
    })(me), fe.exports = me;
    mn = fe.exports;
    gn = globalThis.WeakRef || class {
      #e;
      constructor(e4) {
        this.#e = e4;
      }
      deref() {
        return this.#e;
      }
    };
    __name(createContext, "createContext");
    En = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== lr ? lr : {};
    Sn = "__unctx__";
    _n = En[Sn] || (En[Sn] = /* @__PURE__ */ (function(e4 = {}) {
      const t12 = {};
      return { get: /* @__PURE__ */ __name((n5, r6 = {}) => (t12[n5] || (t12[n5] = createContext({ ...e4, ...r6 })), t12[n5]), "get") };
    })());
    yn = "__unctx_async_handlers__";
    Tn = En[yn] || (En[yn] = /* @__PURE__ */ new Set());
    __name(executeAsync, "executeAsync");
    __name(docsBase, "docsBase");
    Nn = [(e4) => {
      console.error(`[${e4.name}]`);
    }];
    vn = defineProdDiagnostics({ docsBase, reporters: Nn });
    Cn = { componentName: "NuxtLink" };
    __name(getNuxtAppCtx, "getNuxtAppCtx");
    xn = "__nuxt_plugin";
    __name(applyPlugin, "applyPlugin");
    __name(defineNuxtPlugin, "defineNuxtPlugin");
    __name(callWithNuxt, "callWithNuxt");
    __name(useNuxtApp, "useNuxtApp");
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(defineGetter, "defineGetter");
    bn = defineProdDiagnostics({ docsBase, reporters: Nn });
    __name(useHead$1, "useHead$1");
    On = { Agent };
    In = globalThis.Headers;
    Rn = globalThis.AbortController;
    An = globalThis.fetch || (() => {
      throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!");
    });
    Pn = createFetch({ fetch: globalThis.fetch ? (...e4) => globalThis.fetch(...e4) : (function() {
      if (!JSON.parse(g3.env.FETCH_KEEP_ALIVE || "false")) return An;
      const e4 = { keepAlive: true }, t12 = new Gr.Agent(e4), n5 = new On.Agent(e4), r6 = { agent: /* @__PURE__ */ __name((e5) => "http:" === e5.protocol ? t12 : n5, "agent") };
      return function(e5, t13) {
        return An(e5, { ...r6, ...t13 });
      };
    })(), Headers: globalThis.Headers || In, AbortController: globalThis.AbortController || Rn });
    isAbsolutePath = /* @__PURE__ */ __name((e4) => e4.startsWith("/"), "isAbsolutePath");
    __name(isRouteComponent, "isRouteComponent");
    Ln = Object.assign;
    __name(applyToParams, "applyToParams");
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    Mn = Array.isArray;
    __name(mergeOptions, "mergeOptions");
    wn = /* @__PURE__ */ Symbol("");
    __name(createRouterError, "createRouterError");
    __name(isNavigationFailure, "isNavigationFailure");
    kn = /* @__PURE__ */ Symbol("");
    Dn = /* @__PURE__ */ Symbol("");
    Vn = /* @__PURE__ */ Symbol("");
    Fn = /* @__PURE__ */ Symbol("");
    Bn = /* @__PURE__ */ Symbol("");
    Xn = "undefined" != typeof document;
    Un = /#/g;
    jn = /&/g;
    Hn = /\//g;
    $n = /=/g;
    Wn = /\?/g;
    Gn = /\+/g;
    qn = /%5B/g;
    Kn = /%5D/g;
    Jn = /%5E/g;
    zn = /%60/g;
    Qn = /%7B/g;
    Yn = /%7C/g;
    Zn = /%7D/g;
    er = /%20/g;
    __name(commonEncode, "commonEncode");
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(encodeParam, "encodeParam");
    __name(decode, "decode");
    tr = /\/$/;
    __name(parseURL2, "parseURL");
    __name(isSameRouteRecord, "isSameRouteRecord");
    __name(isSameRouteLocationParams, "isSameRouteLocationParams");
    __name(isSameRouteLocationParamsValue, "isSameRouteLocationParamsValue");
    __name(isEquivalentArray, "isEquivalentArray");
    nr = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
    __name(normalizeBase, "normalizeBase");
    rr = /^[^#]+#/;
    __name(createHref, "createHref");
    __name(scrollToPosition, "scrollToPosition");
    __name(getScrollKey, "getScrollKey");
    or = /* @__PURE__ */ new Map();
    __name(saveScrollPosition, "saveScrollPosition");
    __name(isRouteName, "isRouteName");
    __name(parseQuery2, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    __name(normalizeQuery, "normalizeQuery");
    __name(useCallbacks, "useCallbacks");
    __name(guardToPromiseFn, "guardToPromiseFn");
    __name(extractComponentsGuards, "extractComponentsGuards");
    __name(createMemoryHistory, "createMemoryHistory");
    sr = { type: 0, value: "" };
    ir = /[a-zA-Z0-9_]/;
    ar = "[^/]+?";
    cr = { sensitive: false, strict: false, start: true, end: true };
    lr2 = /[.+*?^${}()[\]/\\]/g;
    __name(compareScoreArray, "compareScoreArray");
    __name(comparePathParserScore, "comparePathParserScore");
    __name(isLastScoreNegative, "isLastScoreNegative");
    ur = { strict: false, end: true, sensitive: false };
    __name(createRouteRecordMatcher, "createRouteRecordMatcher");
    __name(createRouterMatcher, "createRouterMatcher");
    __name(pickParams, "pickParams");
    __name(normalizeRouteRecord, "normalizeRouteRecord");
    __name(normalizeRecordProps, "normalizeRecordProps");
    __name(isAliasRecord, "isAliasRecord");
    __name(mergeMetaFields, "mergeMetaFields");
    __name(isMatchable, "isMatchable");
    __name(useLink, "useLink");
    pr = defineComponent({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink, setup(e4, { slots: t12 }) {
      const n5 = reactive(useLink(e4)), { options: r6 } = inject(Vn), o7 = computed(() => ({ [getLinkClass(e4.activeClass, r6.linkActiveClass, "router-link-active")]: n5.isActive, [getLinkClass(e4.exactActiveClass, r6.linkExactActiveClass, "router-link-exact-active")]: n5.isExactActive }));
      return () => {
        const r7 = t12.default && (1 === (s6 = t12.default(n5)).length ? s6[0] : s6);
        var s6;
        return e4.custom ? r7 : h2("a", { "aria-current": n5.isExactActive ? e4.ariaCurrentValue : null, href: n5.href, onClick: n5.navigate, class: o7.value }, r7);
      };
    } });
    __name(getOriginalPath, "getOriginalPath");
    getLinkClass = /* @__PURE__ */ __name((e4, t12, n5) => null != e4 ? e4 : null != t12 ? t12 : n5, "getLinkClass");
    __name(normalizeSlot$1, "normalizeSlot$1");
    dr = defineComponent({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e4, { attrs: t12, slots: n5 }) {
      const r6 = inject(Bn), o7 = computed(() => e4.route || r6.value), s6 = inject(Dn, 0), i4 = computed(() => {
        let e5 = unref2(s6);
        const { matched: t13 } = o7.value;
        let n6;
        for (; (n6 = t13[e5]) && !n6.components; ) e5++;
        return e5;
      }), a8 = computed(() => o7.value.matched[i4.value]);
      provide(Dn, computed(() => i4.value + 1)), provide(kn, a8), provide(Bn, o7);
      const c4 = ref2();
      return watch(() => [c4.value, a8.value, e4.name], ([e5, t13, n6], [r7, o8, s7]) => {
        t13 && (t13.instances[n6] = e5, o8 && o8 !== t13 && e5 && e5 === r7 && (t13.leaveGuards.size || (t13.leaveGuards = o8.leaveGuards), t13.updateGuards.size || (t13.updateGuards = o8.updateGuards))), !e5 || !t13 || o8 && isSameRouteRecord(t13, o8) && r7 || (t13.enterCallbacks[n6] || []).forEach((t14) => t14(e5));
      }, { flush: "post" }), () => {
        const r7 = o7.value, s7 = e4.name, i5 = a8.value, l5 = i5 && i5.components[s7];
        if (!l5) return normalizeSlot$1(n5.default, { Component: l5, route: r7 });
        const u5 = i5.props[s7], p5 = u5 ? true === u5 ? r7.params : "function" == typeof u5 ? u5(r7) : u5 : null, d5 = h2(l5, Ln({}, p5, t12, { onVnodeUnmounted: /* @__PURE__ */ __name((e5) => {
          e5.component.isUnmounted && (i5.instances[s7] = null);
        }, "onVnodeUnmounted"), ref: c4 }));
        return normalizeSlot$1(n5.default, { Component: d5, route: r7 }) || d5;
      };
    } });
    __name(createRouter, "createRouter");
    globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
    hr = /* @__PURE__ */ Symbol("layout-meta");
    fr = /* @__PURE__ */ Symbol("route");
    mr = defineProdDiagnostics({ docsBase, reporters: Nn });
    useRouter = /* @__PURE__ */ __name(() => useNuxtApp()?.$router, "useRouter");
    useRoute$1 = /* @__PURE__ */ __name(() => {
      if (mn.hasInjectionContext()) {
        const e4 = mn.getCurrentInstance();
        if (!e4 || (function(e5) {
          const t12 = e5.scope;
          let n5 = mn.getCurrentScope();
          for (; n5; ) {
            if (n5 === t12) return true;
            n5 = n5.parent;
          }
          return false;
        })(e4)) return mn.inject(fr, useNuxtApp()._route);
      }
      return useNuxtApp()._route;
    }, "useRoute$1");
    __name(defineNuxtRouteMiddleware, "defineNuxtRouteMiddleware");
    gr = /[&"'<>]/g;
    Er = { "&": "&amp;", '"': "&quot;", "'": "&#x27;", "<": "&lt;", ">": "&gt;" };
    navigateTo = /* @__PURE__ */ __name((e4, t12) => {
      e4 ||= "/";
      const n5 = "string" == typeof e4 ? e4 : "path" in e4 ? resolveRouteObject(e4) : useRouter().resolve(e4).href, r6 = hasProtocol(n5, { acceptRelative: true }), o7 = t12?.external || r6;
      if (o7) {
        if (!t12?.external) throw mr.NUXT_E2001({ toPath: n5 });
        const { protocol: e5 } = new URL(n5, "http://localhost");
        if (e5 && isScriptProtocol(e5)) throw mr.NUXT_E2002({ toPath: n5, protocol: e5 });
      }
      const s6 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware) return true;
        } catch {
          return false;
        }
        return false;
      })(), i4 = useRouter(), a8 = useNuxtApp();
      if (a8.ssrContext) {
        const c5 = "string" == typeof e4 || o7 ? n5 : i4.resolve(e4).fullPath || "/", l5 = o7 ? n5 : joinURL(useRuntimeConfig().app.baseURL, c5), redirect = /* @__PURE__ */ __name(async function(e5) {
          await a8.callHook("app:redirected");
          const n6 = (function(e6, t13 = false) {
            const n7 = new URL(e6, "http://localhost");
            return t13 ? e6.startsWith("//") ? n7.toString().replace(n7.protocol, "") : n7.toString() : n7.pathname.replace(/^\/{2,}/, "/") + n7.search + n7.hash;
          })(l5, r6), o8 = n6.replace(gr, (e6) => Er[e6]);
          return a8.ssrContext["~renderResponse"] = { statusCode: sanitizeStatusCode(t12?.redirectCode || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${o8}"></head></html>`, headers: { location: n6 } }, e5;
        }, "redirect");
        return !o7 && s6 ? (i4.afterEach((e5) => e5.fullPath === c5 ? redirect(false) : void 0), e4) : redirect(!s6 && void 0);
      }
      if (o7) return a8._scope.stop(), t12?.replace ? (void 0).replace(n5) : (void 0).href = n5, s6 ? !!a8.isHydrating && new Promise(() => {
      }) : Promise.resolve();
      const c4 = "string" == typeof e4 ? encodeRoutePath(e4) : e4;
      return t12?.replace ? i4.replace(c4) : i4.push(c4);
    }, "navigateTo");
    __name(resolveRouteObject, "resolveRouteObject");
    __name(encodeRoutePath, "encodeRoutePath");
    useError = /* @__PURE__ */ __name(() => mn.toRef(useNuxtApp().payload, "error"), "useError");
    showError = /* @__PURE__ */ __name((e4) => {
      const t12 = createError$1(e4);
      try {
        const e5 = useError();
        e5.value ||= t12;
      } catch {
        throw t12;
      }
      return t12;
    }, "showError");
    _showErrorUnlessCrawler = /* @__PURE__ */ __name(async (e4, t12) => {
      await e4.runWithContext(() => showError(t12));
    }, "_showErrorUnlessCrawler");
    isNuxtError = /* @__PURE__ */ __name((e4) => !!e4 && "object" == typeof e4 && "__nuxt_error" in e4, "isNuxtError");
    createError$1 = /* @__PURE__ */ __name((e4) => {
      "string" != typeof e4 && e4.statusText && (e4.message ??= e4.statusText);
      const t12 = createError(e4);
      return Object.defineProperty(t12, "__nuxt_error", { value: true, configurable: false, writable: false }), Object.defineProperty(t12, "status", { get: /* @__PURE__ */ __name(() => t12.statusCode, "get"), configurable: true }), Object.defineProperty(t12, "statusText", { get: /* @__PURE__ */ __name(() => t12.statusMessage, "get"), configurable: true }), t12;
    }, "createError$1");
    globalThis.$fetch || (globalThis.$fetch = Pn.create({ baseURL: baseURL() }));
    Sr = globalThis.$fetch;
    "global" in globalThis || (globalThis.global = globalThis);
    _r = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e4) {
      const t12 = e4.ssrContext.head;
      if (e4.ssrContext.islandContext) {
        const n5 = (function(e5) {
          const t13 = e5.push;
          return e5.push = () => ({ dispose: /* @__PURE__ */ __name(() => {
          }, "dispose"), patch: /* @__PURE__ */ __name(() => {
          }, "patch"), _i: 0 }), () => {
            e5.push = t13;
          };
        })(t12);
        e4.hooks.hookOnce("app:created", n5);
      }
      e4.vueApp.use(t12);
    } });
    yr = /(:\w+)\([^)]+\)/g;
    Tr = /(:\w+)[?+*]/g;
    Nr = /:\w+/g;
    generateRouteKey$1 = /* @__PURE__ */ __name((e4, t12) => {
      const n5 = e4.route.matched.find((t13) => t13.components?.default === e4.Component.type), r6 = n5?.meta.key ?? (n5 && (o7 = e4.route, n5.path.replace(yr, "$1").replace(Tr, "$1").replace(Nr, (e5) => o7.params[e5.slice(1)]?.toString() || "")));
      var o7;
      return "function" == typeof r6 ? r6(e4.route) : r6;
    }, "generateRouteKey$1");
    __name(toArray, "toArray");
    vr = /(:\w+)\([^)]+\)/g;
    Cr = /(:\w+)[?+*]/g;
    xr = /:\w+/g;
    __name(generateRouteKey, "generateRouteKey");
    __name(isChangingPage, "isChangingPage");
    br = /^[a-z][a-z0-9-]*$/i;
    __name(_getHashElementScrollMarginTop, "_getHashElementScrollMarginTop");
    __name(_calculatePosition, "_calculatePosition");
    Or = { hashMode: false, scrollBehaviorType: "auto", ...{ scrollBehavior(e4, t12, n5) {
      const r6 = useNuxtApp(), o7 = useRouter(), s6 = o7.options?.scrollBehaviorType ?? "auto";
      return e4.path.replace(/\/$/, "") === t12.path.replace(/\/$/, "") ? t12.hash && !e4.hash ? n5 ?? { left: 0, top: 0 } : !!e4.hash && { el: e4.hash, top: _getHashElementScrollMarginTop(e4.hash), behavior: s6 } : false !== ("function" == typeof e4.meta.scrollToTop ? e4.meta.scrollToTop(e4, t12) : e4.meta.scrollToTop) && (t12 === nr ? _calculatePosition(e4, t12, n5, s6) : new Promise((i4) => {
        const doScroll = /* @__PURE__ */ __name(() => {
          requestAnimationFrame(() => {
            o7.currentRoute.value.fullPath === e4.fullPath ? i4(_calculatePosition(e4, t12, n5, s6)) : i4(false);
          });
        }, "doScroll");
        r6.hooks.hookOnce("page:loading:end", () => {
          const e5 = r6["~transitionPromise"];
          e5 ? e5.then(doScroll) : doScroll();
        });
      }));
    } } };
    Object.assign(/* @__PURE__ */ Object.create(null), {});
    Ir2 = Object.assign(/* @__PURE__ */ Object.create(null), {});
    Rr = defineNuxtRouteMiddleware(async (e4) => {
      let t12, n5;
      if (!e4.meta?.validate) return;
      const r6 = ([t12, n5] = executeAsync(() => Promise.resolve(e4.meta.validate(e4))), t12 = await t12, n5(), t12);
      return true !== r6 ? createError$1({ fatal: false, status: r6 && (r6.status || r6.statusCode) || 404, statusText: r6 && (r6.statusText || r6.statusMessage) || `Page Not Found: ${e4.fullPath}`, data: { path: e4.fullPath } }) : void 0;
    });
    Ar = defineProdDiagnostics({ docsBase, reporters: Nn });
    sensitiveMatcher = /* @__PURE__ */ __name((e4, t12) => [], "sensitiveMatcher");
    Pr = sensitiveMatcher;
    normalizePath = /* @__PURE__ */ __name((e4, t12) => {
      if ("string" != typeof e4) return e4;
      const n5 = (function(e5) {
        if (!e5.includes("%")) return e5;
        const t13 = e5.indexOf("?"), n6 = -1 === t13 ? e5 : e5.slice(0, t13);
        try {
          return -1 === t13 ? decodeURI(n6) : decodeURI(n6) + e5.slice(t13);
        } catch {
          return e5;
        }
      })(e4);
      return t12 ? n5.toLowerCase() : n5;
    }, "normalizePath");
    routeRulesMatcher = /* @__PURE__ */ __name((e4) => Or.sensitive ? Ft({}, ...(normalizePath(e4, false), []).map((e5) => e5.data).reverse()) : Ft({}, ...Pr("", normalizePath(e4, true)).map((e5) => e5.data).reverse()), "routeRulesMatcher");
    Lr2 = [Rr, defineNuxtRouteMiddleware((e4) => {
    })];
    Mr = {};
    wr = [{ name: "index", path: "/", component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_pages_D5r_0Twz(), pages_D5r_0Twz_exports)), "component") }];
    kr = defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", async setup(e4) {
      let t12, n5, r6 = useRuntimeConfig().app.baseURL;
      const o7 = Or.history?.(r6) ?? createMemoryHistory(r6), s6 = Or.routes ? ([t12, n5] = executeAsync(() => Or.routes(wr)), t12 = await t12, n5(), t12 ?? wr) : wr;
      let i4;
      const a8 = createRouter({ ...Or, scrollBehavior: /* @__PURE__ */ __name((e5, t13, n6) => {
        if (t13 !== nr) {
          if (Or.scrollBehavior) {
            if (a8.options.scrollBehavior = Or.scrollBehavior, "scrollRestoration" in (void 0).history) {
              const e6 = a8.beforeEach(() => {
                e6(), (void 0).history.scrollRestoration = "manual";
              });
            }
            return Or.scrollBehavior(e5, nr, i4 || n6);
          }
        } else i4 = n6;
      }, "scrollBehavior"), history: o7, routes: s6 });
      e4.vueApp.use(a8);
      const c4 = mn.shallowRef(a8.currentRoute.value);
      a8.afterEach((e5, t13) => {
        c4.value = t13;
      }), Object.defineProperty(e4.vueApp.config.globalProperties, "previousRoute", { get: /* @__PURE__ */ __name(() => c4.value, "get") });
      const l5 = e4.ssrContext.url, u5 = mn.shallowRef(a8.currentRoute.value), syncCurrentRoute = /* @__PURE__ */ __name(() => {
        u5.value = a8.currentRoute.value;
      }, "syncCurrentRoute");
      a8.afterEach((e5, t13) => {
        const n6 = e5.matched.at(-1)?.components?.default, r7 = t13.matched.at(-1)?.components?.default;
        n6 !== r7 ? e5.matched.length < t13.matched.length && e5.matched.every((e6, n7) => e6.components?.default === t13.matched[n7]?.components?.default) && syncCurrentRoute() : generateRouteKey$1({ route: e5, Component: { type: n6 } }) === generateRouteKey$1({ route: t13, Component: { type: r7 } }) && syncCurrentRoute();
      });
      const p5 = { sync: syncCurrentRoute };
      for (const e5 in u5.value) Object.defineProperty(p5, e5, { get: /* @__PURE__ */ __name(() => u5.value[e5], "get"), enumerable: true });
      e4._route = mn.shallowReactive(p5), e4._middleware ||= { global: [], named: {} };
      const d5 = useError(), h5 = e4.ssrContext?.islandContext?.name?.startsWith("page_");
      e4.ssrContext?.islandContext && !h5 || a8.afterEach(async (t13, n6, r7) => {
        delete e4._processingMiddleware, delete e4._middlewareTo, r7 && await e4.callHook("page:loading:end"), 4 !== r7?.type && t13.redirectedFrom && t13.fullPath !== l5 && await e4.runWithContext(() => navigateTo(t13.fullPath || "/"));
      });
      try {
        [t12, n5] = executeAsync(() => a8.push(l5)), t12 = await t12, n5(), [t12, n5] = executeAsync(() => a8.isReady()), await t12, n5();
      } catch (d6) {
        [t12, n5] = executeAsync(() => _showErrorUnlessCrawler(e4, d6)), await t12, n5();
      }
      const f4 = a8.currentRoute.value;
      if (syncCurrentRoute(), e4.ssrContext?.islandContext && !h5) return { provide: { router: a8 } };
      const m5 = e4.payload.state._layout;
      return a8.beforeEach(async (t13, n6) => {
        if (await e4.callHook("page:loading:start"), t13.meta = mn.reactive(t13.meta), e4.isHydrating && m5 && !mn.isReadonly(t13.meta.layout) && (t13.meta.layout = m5), e4._processingMiddleware = true, e4._middlewareTo = t13, !e4.ssrContext?.islandContext || h5) {
          const r7 = /* @__PURE__ */ new Set([...Lr2, ...e4._middleware.global]);
          for (const e5 of t13.matched) {
            const t14 = e5.meta.middleware;
            if (t14) for (const e6 of toArray(t14)) r7.add(e6);
          }
          const o8 = (function(e5) {
            const t14 = "string" == typeof e5 ? e5 : e5.path;
            try {
              return routeRulesMatcher(t14);
            } catch (e6) {
              return Ar.NUXT_E5003({ path: t14, cause: e6 }), {};
            }
          })({ path: t13.path });
          if (o8.appMiddleware) for (const e5 in o8.appMiddleware) o8.appMiddleware[e5] ? r7.add(e5) : r7.delete(e5);
          for (const o9 of r7) {
            const r8 = "string" == typeof o9 ? e4._middleware.named[o9] || await Mr[o9]?.().then((e5) => e5.default || e5) : o9;
            if (!r8) throw mr.NUXT_E2004({ entry: String(o9), validMiddleware: void 0 });
            try {
              const o10 = await e4.runWithContext(() => r8(t13, n6));
              if (false === o10 || o10 instanceof Error) {
                const t14 = o10 || createError$1({ status: 404, statusText: `Page Not Found: ${l5}` });
                return await e4.runWithContext(() => showError(t14)), false;
              }
              if (true === o10) continue;
              if (false === o10) return o10;
              if (o10) return isNuxtError(o10) && o10.fatal && await e4.runWithContext(() => showError(o10)), o10;
            } catch (t14) {
              const n7 = createError$1(t14);
              return n7.fatal && await e4.runWithContext(() => showError(n7)), n7;
            }
          }
        }
      }), h5 && a8.beforeResolve((t13) => {
        const n6 = Ir2[e4.ssrContext.islandContext.name], r7 = t13.matched.find((e5) => e5.components?.default?.__nuxt_island)?.components?.default;
        if (!n6 || n6 !== r7?.__nuxt_island) return e4.ssrContext["~renderResponse"] = { statusCode: 400, statusMessage: "Invalid island request path" }, false;
      }), a8.onError(async () => {
        delete e4._processingMiddleware, delete e4._middlewareTo, await e4.callHook("page:loading:end");
      }), a8.afterEach((t13) => {
        if (0 === t13.matched.length && !d5.value) return e4.runWithContext(() => showError(createError$1({ status: 404, fatal: false, statusText: `Page not found: ${t13.fullPath}`, data: { path: t13.fullPath } })));
      }), e4.hooks.hookOnce("app:created", async () => {
        try {
          "name" in f4 && (f4.name = void 0), await a8.replace({ ...f4, force: true }), a8.options.scrollBehavior = Or.scrollBehavior;
        } catch (t13) {
          await _showErrorUnlessCrawler(e4, t13);
        }
      }), { provide: { router: a8 } };
    } });
    __name(definePayloadReducer, "definePayloadReducer");
    Dr = [["NuxtError", (e4) => isNuxtError(e4) && e4.toJSON()], ["EmptyShallowRef", (e4) => mn.isRef(e4) && mn.isShallow(e4) && !e4.value && ("bigint" == typeof e4.value ? "0n" : JSON.stringify(e4.value) || "_")], ["EmptyRef", (e4) => mn.isRef(e4) && !e4.value && ("bigint" == typeof e4.value ? "0n" : JSON.stringify(e4.value) || "_")], ["ShallowRef", (e4) => mn.isRef(e4) && mn.isShallow(e4) && e4.value], ["ShallowReactive", (e4) => mn.isReactive(e4) && mn.isShallow(e4) && mn.toRaw(e4)], ["Ref", (e4) => mn.isRef(e4) && e4.value], ["Reactive", (e4) => mn.isReactive(e4) && mn.toRaw(e4)]];
    Vr2 = [_r, kr, defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const [e4, t12] of Dr) definePayloadReducer(e4, t12);
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    Fr = mn.defineComponent({ name: "ServerPlaceholder", render: /* @__PURE__ */ __name(() => mn.createElementBlock("div"), "render") });
    Br = /* @__PURE__ */ Symbol.for("nuxt:client-only");
    Xr = mn.defineComponent({ name: "ClientOnly", inheritAttrs: false, props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"], setup(e4, { slots: t12, attrs: n5 }) {
      const r6 = mn.shallowRef(false), o7 = mn.getCurrentInstance();
      return o7 && (o7._nuxtClientOnly = true), mn.provide(Br, true), () => {
        if (r6.value) {
          const e5 = t12.default?.();
          return e5 && 1 === e5.length ? [mn.cloneVNode(e5[0], n5)] : e5;
        }
        const o8 = t12.fallback || t12.placeholder;
        if (o8) return mn.h(o8);
        const s6 = e4.fallback || e4.placeholder || "", i4 = (a8 = e4.fallbackTag || e4.placeholderTag, c4 = "span", a8 && br.test(a8) ? a8 : c4);
        var a8, c4;
        return mn.createElementBlock(i4, n5, s6);
      };
    } });
    Ur = ((e4 = "RouteProvider") => mn.defineComponent({ name: e4, props: { route: { type: Object, required: true }, vnode: Object, vnodeRef: Object, renderKey: String, trackRootNodes: Boolean, routeRecord: Object }, setup(e5) {
      const t12 = e5.renderKey, n5 = e5.route, r6 = {};
      for (const o7 in e5.route) Object.defineProperty(r6, o7, { get: /* @__PURE__ */ __name(() => t12 === e5.renderKey ? e5.route[o7] : n5[o7], "get"), enumerable: true });
      return mn.provide(fr, mn.shallowReactive(r6)), () => e5.vnode ? mn.h(e5.vnode, { ref: e5.vnodeRef }) : e5.vnode;
    } }))();
    jr = mn.defineComponent({ name: "NuxtPage", inheritAttrs: false, props: { name: { type: String }, transition: { type: [Boolean, Object], default: void 0 }, keepalive: { type: [Boolean, Object], default: void 0 }, route: { type: Object }, pageKey: { type: [Function, String], default: null } }, setup(e4, { attrs: t12, slots: n5, expose: r6 }) {
      const o7 = useNuxtApp(), s6 = mn.ref();
      return mn.inject(fr, null), r6({ pageRef: s6 }), mn.inject(hr, null), o7.deferHydration(), () => mn.h(dr, { name: e4.name, route: e4.route, ...t12 }, { default: markStableSlot((e5) => mn.h(mn.Suspense, { suspensible: true }, { default: /* @__PURE__ */ __name(() => mn.h(Ur, { vnode: n5.default ? normalizeSlot(n5.default, e5) : e5.Component, route: e5.route, vnodeRef: s6 }), "default") })) });
    } });
    __name(markStableSlot, "markStableSlot");
    __name(normalizeSlot, "normalizeSlot");
    Hr = mn.defineComponent({ __name: "app", __ssrInlineRender: true, setup(e4) {
      const t12 = mn.ref(null), n5 = mn.ref(true);
      return (async function() {
        try {
          t12.value = await Sr("/api/health"), n5.value = true;
        } catch {
          n5.value = false;
        }
      })(), (e5, t13, n6, r6) => {
        const o7 = Fr, s6 = Xr, i4 = jr;
        t13(`<div${ssrRenderAttrs(r6)}>`), t13(ssrRenderComponent(o7, null, null, n6)), t13(`<header class="app-header"><div class="brand"><div class="logo">\u25C9</div><div><div style="${ssrRenderStyle({ "font-weight": "700", "font-size": "15px" })}">ChainPulse <span class="muted" style="${ssrRenderStyle({ "font-weight": "400" })}">\xB7 Litecoin Testnet</span></div><div class="sub">Testnet transaction graph \u2014 Neo4j graph + Turso relational</div></div></div>`), t13(ssrRenderComponent(s6, null, {}, n6)), t13('</header><main class="page">'), t13(ssrRenderComponent(i4, null, null, n6)), t13("</main></div>");
      };
    } });
    $r = Hr.setup;
    Hr.setup = (e4, t12) => {
      const n5 = mn.useSSRContext();
      return (n5.modules || (n5.modules = /* @__PURE__ */ new Set())).add("app.vue"), $r ? $r(e4, t12) : void 0;
    };
    Wr = Hr;
    Gr2 = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e4) {
      const t12 = e4.error, n5 = Number(t12.statusCode || 500), r6 = 404 === n5, o7 = t12.statusMessage ?? (r6 ? "Page Not Found" : "Internal Server Error"), s6 = t12.message || t12.toString(), i4 = mn.defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_3sM3lfvw(), error_404_3sM3lfvw_exports))), a8 = mn.defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_5Uvp2HbW(), error_500_5Uvp2HbW_exports))), c4 = r6 ? i4 : a8;
      return (e5, t13, r7, i5) => {
        t13(ssrRenderComponent(mn.unref(c4), mn.mergeProps({ status: mn.unref(n5), statusText: mn.unref(o7), statusCode: mn.unref(n5), statusMessage: mn.unref(o7), description: mn.unref(s6), stack: mn.unref(void 0) }, i5), null, r7));
      };
    } };
    qr = Gr2.setup;
    Gr2.setup = (e4, t12) => {
      const n5 = mn.useSSRContext();
      return (n5.modules || (n5.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), qr ? qr(e4, t12) : void 0;
    };
    IslandRenderer = /* @__PURE__ */ __name(() => null, "IslandRenderer");
    Kr = { __name: "nuxt-root", __ssrInlineRender: true, setup(e4) {
      const t12 = useNuxtApp();
      t12.deferHydration(), t12.ssrContext.url;
      const n5 = false;
      mn.provide(fr, useRoute$1()), t12.hooks.callHookWith((e5) => e5.map((e6) => e6()), "vue:setup", []);
      const r6 = useError(), o7 = r6.value && !t12.ssrContext.error;
      mn.onErrorCaptured((e5, n6, r7) => {
        t12.hooks.callHook("vue:error", e5, n6, r7)?.catch((e6) => console.error("[nuxt] Error in `vue:error` hook", e6));
        {
          const o8 = t12.runWithContext(() => showError(e5));
          return mn.onServerPrefetch(() => o8), (function(e6, n7, r8) {
            const o9 = t12.vueApp.config.errorHandler;
            if (o9 && !o9.__nuxt_default) try {
              o9(e6, n7, r8);
            } catch (e7) {
              console.error("[nuxt] Error in `app.config.errorHandler`", e7);
            }
          })(e5, n6, r7), false;
        }
      });
      const s6 = t12.ssrContext.islandContext;
      return (e5, t13, i4, a8) => {
        ssrRenderSuspense(t13, { default: /* @__PURE__ */ __name(() => {
          mn.unref(o7) ? t13("<div></div>") : mn.unref(r6) ? t13(ssrRenderComponent(mn.unref(Gr2), { error: mn.unref(r6) }, null, i4)) : mn.unref(s6) ? t13(ssrRenderComponent(mn.unref(IslandRenderer), { context: mn.unref(s6) }, null, i4)) : mn.unref(n5) ? renderVNode(t13, mn.createVNode(mn.resolveDynamicComponent(mn.unref(n5)), null, null), i4) : t13(ssrRenderComponent(mn.unref(Wr), null, null, i4));
        }, "default") });
      };
    } };
    Jr = Kr.setup;
    Kr.setup = (e4, t12) => {
      const n5 = mn.useSSRContext();
      return (n5.modules || (n5.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue"), Jr ? Jr(e4, t12) : void 0;
    };
    entry$1 = /* @__PURE__ */ __name(async function(e4) {
      const t12 = mn.createApp(Kr), n5 = (function(e5) {
        let t13 = 0;
        const n6 = { _id: e5.id || "nuxt-app", _scope: mn.effectScope(), provide: void 0, versions: { get nuxt() {
          return "4.5.2";
        }, get vue() {
          return n6.vueApp.version;
        } }, payload: mn.shallowReactive({ ...e5.ssrContext?.payload || {}, data: mn.shallowReactive({}), state: mn.reactive({}), once: /* @__PURE__ */ new Set(), _errors: mn.shallowReactive({}) }), static: { data: {} }, runWithContext: /* @__PURE__ */ __name((e6) => n6._scope.active && !mn.getCurrentScope() ? n6._scope.run(() => callWithNuxt(n6, e6)) : callWithNuxt(n6, e6), "runWithContext"), isHydrating: false, deferHydration() {
          if (!n6.isHydrating) return () => {
          };
          t13++;
          let e6 = false;
          return () => {
            if (!e6) return e6 = true, t13--, 0 === t13 ? (n6.isHydrating = false, n6.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: mn.shallowReactive({}), _state: mn.shallowReactive({}), _payloadRevivers: {}, ...e5 };
        n6.payload.serverRendered = true, n6.ssrContext && (n6.payload.path = n6.ssrContext.url, n6.ssrContext.nuxt = n6, n6.ssrContext.payload = n6.payload, n6.ssrContext.config = { public: n6.ssrContext.runtimeConfig.public, app: n6.ssrContext.runtimeConfig.app }), n6.hooks = createHooks$1(), n6.hook = n6.hooks.hook;
        {
          const contextCaller = /* @__PURE__ */ __name(async function(e6, t14) {
            for (const r7 of e6) await n6.runWithContext(() => r7(...t14));
          }, "contextCaller");
          n6.hooks.callHook = (e6, ...t14) => n6.hooks.callHookWith(contextCaller, e6, t14);
        }
        n6.callHook = n6.hooks.callHook, n6.provide = (e6, t14) => {
          const r7 = "$" + e6;
          defineGetter(n6, r7, t14), defineGetter(n6.vueApp.config.globalProperties, r7, t14);
        }, defineGetter(n6.vueApp, "$nuxt", n6), defineGetter(n6.vueApp.config.globalProperties, "$nuxt", n6);
        const r6 = e5.ssrContext.runtimeConfig;
        return n6.provide("config", r6), n6;
      })({ vueApp: t12, ssrContext: e4 });
      try {
        await (async function(e5, t13) {
          let n6;
          for (const r6 of t13) try {
            await applyPlugin(e5, r6);
          } catch (t14) {
            if (!e5.payload.error) throw t14;
            n6 ||= t14;
          }
          if (n6) throw e5.payload.error || n6;
        })(n5, Vr2), await n5.hooks.callHook("app:created", t12);
      } catch (e5) {
        await n5.hooks.callHook("app:error", e5), n5.payload.error ||= createError$1(e5);
      }
      if (e4 && (e4["~renderResponse"] || e4._renderResponse)) throw new Error("skipping render");
      return t12;
    }, "entry$1");
    zr = Object.freeze(Object.defineProperty({ __proto__: null, default: /* @__PURE__ */ __name((e4) => entry$1(e4), "default") }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o3
});
var o3;
var init_virtual_spa_template = __esm({
  ".output/server/chunks/virtual/_virtual_spa-template.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    o3 = "";
  }
});

// .output/server/chunks/build/index-styles-1.mjs-UnSXB8XE.mjs
var r3;
var init_index_styles_1_mjs_UnSXB8XE = __esm({
  ".output/server/chunks/build/index-styles-1.mjs-UnSXB8XE.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    r3 = ".cy-wrap[data-v-3cf0f97d]{border:1px solid var(--border);background:radial-gradient(circle at 20% 20%,#101b31,#0000 60%),#0b1222;border-radius:12px;width:100%;height:520px}";
  }
});

// .output/server/chunks/build/index-styles-2.mjs-CUCvKwCy.mjs
var a3;
var init_index_styles_2_mjs_CUCvKwCy = __esm({
  ".output/server/chunks/build/index-styles-2.mjs-CUCvKwCy.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    a3 = ".kv[data-v-9d1afd44]{grid-template-columns:1fr 1fr;gap:8px 16px;display:grid}@media (width<=480px){.kv[data-v-9d1afd44]{grid-template-columns:1fr}}.kv>div[data-v-9d1afd44]{flex-direction:column;gap:2px;font-size:12px;display:flex}.kv span[data-v-9d1afd44]{color:var(--muted);text-transform:uppercase;letter-spacing:.06em;font-size:10px}.kv b[data-v-9d1afd44]{font-size:13px;font-weight:600}.kyc-block[data-v-9d1afd44]{background:#8b5cf60f;border:1px solid #8b5cf659;border-radius:10px;margin-top:16px;padding:14px}.flow-line[data-v-9d1afd44]{align-items:center;gap:10px;margin-top:8px;display:flex}.flow-addr[data-v-9d1afd44]{background:#0b1222;border:1px solid #1c2a47;border-radius:8px;padding:6px 10px;font-size:12px}";
  }
});

// .output/server/chunks/build/index-styles.CNk4XcE1.mjs
var index_styles_CNk4XcE1_exports = {};
__export(index_styles_CNk4XcE1_exports, {
  default: () => t4
});
var t4;
var init_index_styles_CNk4XcE1 = __esm({
  ".output/server/chunks/build/index-styles.CNk4XcE1.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_styles_1_mjs_UnSXB8XE();
    init_index_styles_2_mjs_CUCvKwCy();
    t4 = [r3, a3, ".hero[data-v-5b12bc7c]{margin-bottom:20px}.hero h1[data-v-5b12bc7c]{letter-spacing:-.01em;font-size:26px}.hero p[data-v-5b12bc7c]{max-width:760px;margin:8px 0 0}.search-card[data-v-5b12bc7c]{padding:20px}.search-row[data-v-5b12bc7c]{gap:12px;display:flex}.addr-input[data-v-5b12bc7c]{border:1px solid var(--border);color:var(--text);background:#0b1222;border-radius:10px;outline:none;flex:1;padding:12px 14px;font-size:14px;transition:border-color .15s}.addr-input[data-v-5b12bc7c]:focus{border-color:var(--accent)}.search-actions[data-v-5b12bc7c]{gap:14px;margin-top:12px}.card-row[data-v-5b12bc7c],.search-actions[data-v-5b12bc7c]{align-items:center;display:flex}.card-row[data-v-5b12bc7c]{justify-content:space-between;gap:12px;margin-bottom:14px}.graph-wrap[data-v-5b12bc7c]{position:relative}.card+.card[data-v-5b12bc7c]{margin-top:18px}.mode-line[data-v-5b12bc7c]{margin-top:14px;font-size:12px}"];
  }
});

// .output/server/chunks/build/GraphView-styles.DqjlF_M_.mjs
var GraphView_styles_DqjlF_M_exports = {};
__export(GraphView_styles_DqjlF_M_exports, {
  default: () => t5
});
var t5;
var init_GraphView_styles_DqjlF_M = __esm({
  ".output/server/chunks/build/GraphView-styles.DqjlF_M_.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_styles_1_mjs_UnSXB8XE();
    t5 = [r3];
  }
});

// .output/server/chunks/build/error-404-styles.CbLQIMfl.mjs
var error_404_styles_CbLQIMfl_exports = {};
__export(error_404_styles_CbLQIMfl_exports, {
  default: () => t6
});
var t6;
var init_error_404_styles_CbLQIMfl = __esm({
  ".output/server/chunks/build/error-404-styles.CbLQIMfl.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    t6 = [".grid[data-v-b8cc6c10]{display:grid}.mb-2[data-v-b8cc6c10]{margin-bottom:.5rem}.mb-4[data-v-b8cc6c10]{margin-bottom:1rem}.max-w-520px[data-v-b8cc6c10]{max-width:520px}.min-h-screen[data-v-b8cc6c10]{min-height:100vh}.w-full[data-v-b8cc6c10]{width:100%}.flex[data-v-b8cc6c10]{display:flex}.place-content-center[data-v-b8cc6c10]{place-content:center}.items-center[data-v-b8cc6c10]{align-items:center}.justify-center[data-v-b8cc6c10]{justify-content:center}.overflow-hidden[data-v-b8cc6c10]{overflow:hidden}.bg-white[data-v-b8cc6c10]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2[data-v-b8cc6c10]{padding-left:.5rem;padding-right:.5rem}.text-center[data-v-b8cc6c10]{text-align:center}.text-\\[80px\\][data-v-b8cc6c10]{font-size:80px}.text-2xl[data-v-b8cc6c10]{font-size:1.5rem;line-height:2rem}.text-sm[data-v-b8cc6c10]{font-size:.875rem;line-height:1.25rem}.text-\\[\\#020420\\][data-v-b8cc6c10]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\][data-v-b8cc6c10]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.hover\\:text-\\[\\#00DC82\\][data-v-b8cc6c10]:hover{--un-text-opacity:1;color:rgb(0 220 130/var(--un-text-opacity))}.font-medium[data-v-b8cc6c10]{font-weight:500}.font-semibold[data-v-b8cc6c10]{font-weight:600}.leading-none[data-v-b8cc6c10]{line-height:1}.tracking-wide[data-v-b8cc6c10]{letter-spacing:.025em}.font-sans[data-v-b8cc6c10]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums[data-v-b8cc6c10]{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.underline[data-v-b8cc6c10]{text-decoration-line:underline}.underline-offset-3[data-v-b8cc6c10]{text-underline-offset:3px}.antialiased[data-v-b8cc6c10]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\][data-v-b8cc6c10]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white[data-v-b8cc6c10]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (width>=640px){.sm\\:text-\\[110px\\][data-v-b8cc6c10]{font-size:110px}.sm\\:text-3xl[data-v-b8cc6c10]{font-size:1.875rem;line-height:2.25rem}}"];
  }
});

// .output/server/chunks/build/error-500-styles.CB5z51D_.mjs
var error_500_styles_CB5z51D_exports = {};
__export(error_500_styles_CB5z51D_exports, {
  default: () => t7
});
var t7;
var init_error_500_styles_CB5z51D = __esm({
  ".output/server/chunks/build/error-500-styles.CB5z51D_.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    t7 = [".grid[data-v-f91406c7]{display:grid}.mb-2[data-v-f91406c7]{margin-bottom:.5rem}.mb-4[data-v-f91406c7]{margin-bottom:1rem}.max-w-520px[data-v-f91406c7]{max-width:520px}.min-h-screen[data-v-f91406c7]{min-height:100vh}.place-content-center[data-v-f91406c7]{place-content:center}.overflow-hidden[data-v-f91406c7]{overflow:hidden}.bg-white[data-v-f91406c7]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2[data-v-f91406c7]{padding-left:.5rem;padding-right:.5rem}.text-center[data-v-f91406c7]{text-align:center}.text-\\[80px\\][data-v-f91406c7]{font-size:80px}.text-2xl[data-v-f91406c7]{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\][data-v-f91406c7]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\][data-v-f91406c7]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold[data-v-f91406c7]{font-weight:600}.leading-none[data-v-f91406c7]{line-height:1}.tracking-wide[data-v-f91406c7]{letter-spacing:.025em}.font-sans[data-v-f91406c7]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums[data-v-f91406c7]{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased[data-v-f91406c7]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\][data-v-f91406c7]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white[data-v-f91406c7]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (width>=640px){.sm\\:text-\\[110px\\][data-v-f91406c7]{font-size:110px}.sm\\:text-3xl[data-v-f91406c7]{font-size:1.875rem;line-height:2.25rem}}"];
  }
});

// .output/server/chunks/build/DetailsPanel-styles.K65ZnhKv.mjs
var DetailsPanel_styles_K65ZnhKv_exports = {};
__export(DetailsPanel_styles_K65ZnhKv_exports, {
  default: () => t8
});
var t8;
var init_DetailsPanel_styles_K65ZnhKv = __esm({
  ".output/server/chunks/build/DetailsPanel-styles.K65ZnhKv.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_styles_2_mjs_CUCvKwCy();
    t8 = [a3];
  }
});

// .output/server/chunks/virtual/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e2
});
var interopDefault, e2;
var init_styles = __esm({
  ".output/server/chunks/virtual/styles.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    interopDefault = /* @__PURE__ */ __name((e4) => e4.default || e4 || [], "interopDefault");
    e2 = { "pages/index.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_styles_CNk4XcE1(), index_styles_CNk4XcE1_exports)).then(interopDefault), "pages/index.vue"), "components/GraphView.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_GraphView_styles_DqjlF_M(), GraphView_styles_DqjlF_M_exports)).then(interopDefault), "components/GraphView.vue"), "../node_modules/nuxt/dist/app/components/error-404.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_404_styles_CbLQIMfl(), error_404_styles_CbLQIMfl_exports)).then(interopDefault), "../node_modules/nuxt/dist/app/components/error-404.vue"), "../node_modules/nuxt/dist/app/components/error-500.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_500_styles_CB5z51D(), error_500_styles_CB5z51D_exports)).then(interopDefault), "../node_modules/nuxt/dist/app/components/error-500.vue"), "components/DetailsPanel.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_DetailsPanel_styles_K65ZnhKv(), DetailsPanel_styles_K65ZnhKv_exports)).then(interopDefault), "components/DetailsPanel.vue") };
  }
});

// .output/server/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  A: () => ssrRenderComponent,
  B: () => renderVNode,
  C: () => ssrRenderAttrs,
  D: () => ssrRenderStyle,
  E: () => ssrRenderClass,
  F: () => ssrInterpolate,
  G: () => ssrRenderAttr,
  H: () => ssrRenderList,
  I: () => zs,
  V: () => Lr,
  a: () => onDeactivated,
  b: () => onActivated,
  c: () => getCurrentInstance,
  d: () => walkResolver,
  e: () => Vr,
  f: () => createHooks$1,
  g: () => getCurrentScope,
  h: () => defineProdDiagnostics,
  i: () => injectHead,
  j: () => Ir,
  k: () => defineComponent,
  l: () => shallowRef,
  m: () => reactive,
  n: () => inject,
  o: () => rn,
  p: () => h2,
  q: () => computed,
  r: () => ref2,
  s: () => shallowReactive,
  t: () => nextTick2,
  u: () => unref2,
  v: () => watch,
  w: () => watchEffect,
  x: () => provide,
  y: () => ssrRenderSuspense,
  z: () => baseURL
});
import { Buffer as fe2 } from "node:buffer";
function formatDiagnostic(e4) {
  const t12 = `[${e4.name}] ${e4.message}`, n5 = [];
  return e4.fix && n5.push(`fix: ${e4.fix}`), e4.sources?.length && n5.push(`sources: ${e4.sources.join(", ")}`), e4.docs && n5.push(`see: ${e4.docs}`), 0 === n5.length ? t12 : [t12, ...n5.map((e5, t13) => `${t13 < n5.length - 1 ? "\u251C\u25B6" : "\u2570\u25B6"} ${e5}`)].join("\n");
}
function toValueWithArgs(e4, ...t12) {
  return "function" == typeof e4 ? e4(...t12) : e4;
}
function createConsoleReporter({ method: e4 = "warn", formatter: t12 = formatDiagnostic } = {}) {
  return (n5, { method: r6 = e4 } = {}) => {
    console[r6](t12(n5));
  };
}
function deriveDocs(e4, t12) {
  return "string" == typeof e4 ? `${e4}/${t12.toLowerCase()}` : e4?.(t12);
}
function defineDiagnostics(e4) {
  const t12 = e4.reporters ?? [], n5 = {}, { docsBase: r6 } = e4;
  for (const s6 of Object.keys(e4.codes)) {
    const o7 = e4.codes[s6], i4 = false === o7.docs ? void 0 : o7.docs || deriveDocs(r6, s6), handle = /* @__PURE__ */ __name((e5 = {}, n6 = {}) => {
      const r7 = new ge2({ code: s6, why: toValueWithArgs(o7.why, e5), fix: toValueWithArgs(o7.fix, e5), docs: i4, cause: e5.cause, sources: e5.sources }, handle);
      for (const e6 of t12) e6(r7, n6);
      return r7;
    }, "handle");
    n5[s6] = handle;
  }
  return n5;
}
function defineProdDiagnostics(e4 = {}) {
  const { docsBase: t12, reporters: n5 = [] } = e4;
  return new Proxy({}, { get(e5, r6) {
    if ("string" != typeof r6) return;
    const handle = /* @__PURE__ */ __name((e6 = {}, s6 = {}) => {
      const o7 = deriveDocs(t12, r6), i4 = new ge2({ code: r6, why: o7 ?? "", docs: o7, cause: e6.cause, sources: e6.sources }, handle);
      for (const e7 of n5) e7(i4, s6);
      return i4;
    }, "handle");
    return handle;
  } });
}
function createUnhead(e4, t12 = {}) {
  const n5 = !t12.document, r6 = /* @__PURE__ */ new Map(), s6 = { _entryCount: 1, _h: 0, plugins: /* @__PURE__ */ new Map(), resolvedOptions: t12, ssr: n5, entries: r6, hooks: void 0, render: /* @__PURE__ */ __name(() => e4(s6), "render"), use: /* @__PURE__ */ __name((e5) => (function(e6, t13) {
    if ("function" == typeof t13 && t13.key && e6.plugins.has(t13.key)) return;
    const n6 = "function" == typeof t13 ? t13(e6) : t13, r7 = n6.key || String(e6.plugins.size + 1);
    if (!e6.plugins.get(r7)) {
      e6.plugins.set(r7, n6);
      for (const t14 in n6.hooks || {}) e6.hooks?.hook(t14, n6.hooks[t14]);
    }
  })(s6, e5), "use"), push(e5, t13) {
    const o7 = t13?._index ?? s6._entryCount++, i4 = t13 ? { ...t13 } : {};
    delete i4.head, delete i4.onRendered, delete i4._index;
    const a8 = { _i: o7, input: e5, options: i4 };
    r6.set(o7, a8);
    return { _i: o7, dispose() {
      r6.delete(o7);
    }, patch(e6) {
      n5 ? (a8.input = e6, delete a8._tags) : a8._pending = e6, r6.has(o7) || r6.set(o7, a8);
    } };
  } };
  return t12.init?.forEach((e5) => e5 && s6.push(e5)), s6;
}
function isUnsafeKey(e4) {
  return "__proto__" === e4 || "constructor" === e4 || "prototype" === e4;
}
function flatHooks(e4, t12 = {}, n5) {
  for (const r6 in e4) {
    const s6 = e4[r6], o7 = n5 ? `${n5}:${r6}` : r6;
    "object" == typeof s6 && null !== s6 ? flatHooks(s6, t12, o7) : "function" == typeof s6 && (t12[o7] = s6);
  }
  return t12;
}
function callHooks(e4, t12, n5, r6) {
  for (let s6 = n5; s6 < e4.length; s6 += 1) try {
    const n6 = r6 ? r6.run(() => e4[s6](...t12)) : e4[s6](...t12);
    if (n6 && "function" == typeof n6.then) return Promise.resolve(n6).then(() => callHooks(e4, t12, s6 + 1, r6));
  } catch (e5) {
    return Promise.reject(e5);
  }
}
function serialTaskCaller(e4, t12, n5) {
  if (e4.length > 0) return callHooks(e4, t12, 0, xe2(n5));
}
function parallelTaskCaller(e4, t12, n5) {
  if (e4.length > 0) {
    const r6 = xe2(n5);
    return Promise.all(e4.map((e5) => r6.run(() => e5(...t12))));
  }
}
function callEachWith(e4, t12) {
  for (const n5 of [...e4]) n5(t12);
}
function createHooks$1() {
  return new Ee2();
}
function callHook$2(e4, t12, n5) {
  const r6 = e4.hooks?._hooks?.[t12];
  if (r6?.length) return e4.hooks?.callHook(t12, n5);
}
function isMetaArrayDupeKey(e4) {
  const t12 = e4.indexOf(":");
  if (-1 === t12) return false;
  const n5 = e4.slice(t12 + 1);
  return Re2.has(n5) || n5.startsWith("og:image:") || n5.startsWith("og:video:") || n5.startsWith("og:audio:") || n5.startsWith("twitter:image:");
}
function dedupeKey(e4) {
  const { props: t12, tag: n5, key: r6 } = e4;
  if (Ce2.has(n5)) return n5;
  if ("link" === n5) {
    if ("canonical" === t12.rel) return "canonical";
    if ("alternate" === t12.rel && t12.hreflang) return `alternate:${t12.hreflang}`;
  }
  if (t12.charset) return "charset";
  if ("meta" === n5) for (const e5 of $e2) {
    const n6 = t12[e5];
    if (void 0 !== n6) return `meta:${n6}${"string" == typeof n6 && n6.includes(":") || Oe2.test(n6) || !r6 ? "" : `:key:${r6}`}`;
  }
  return r6 ? `${n5}:key:${r6}` : t12.id ? `${n5}:id:${t12.id}` : "link" === n5 && t12.rel && t12.href ? `link:${t12.rel}:${t12.href}` : be2.has(n5) && (e4.textContent || e4.innerHTML) ? `${n5}:content:${e4.textContent || e4.innerHTML}` : void 0;
}
function hashTag(e4) {
  const t12 = e4._h || e4._d || e4.textContent || e4.innerHTML;
  if (t12) return t12;
  const n5 = Object.keys(e4.props).sort();
  let r6 = `${e4.tag}:`, s6 = "";
  for (const t13 of n5) r6 += `${s6}${t13}:${String(e4.props[t13])}`, s6 = ",";
  return r6;
}
function walkResolver(e4, t12, n5) {
  if ("_resolver" === n5) return e4;
  "function" != typeof e4 || n5 && ("titleTemplate" === n5 || n5.startsWith("on")) || (e4 = e4());
  const r6 = t12 ? t12(n5, e4) : e4;
  if (Array.isArray(r6)) {
    let e5;
    for (let n6 = 0; n6 < r6.length; n6++) {
      const s6 = walkResolver(r6[n6], t12);
      e5 ? e5[n6] = s6 : s6 !== r6[n6] && (e5 = r6.slice(0, n6), e5[n6] = s6);
    }
    return e5 || r6;
  }
  if (r6?.constructor === Object) {
    let e5;
    for (const n6 in r6) {
      const s6 = isUnsafeKey(n6), o7 = s6 ? void 0 : walkResolver(r6[n6], t12, n6);
      if (!e5 && (s6 || o7 !== r6[n6])) {
        e5 = {};
        for (const t13 in r6) {
          if (t13 === n6) break;
          e5[t13] = r6[t13];
        }
      }
      e5 && !s6 && (e5[n6] = o7);
    }
    return e5 || r6;
  }
  return r6;
}
function normalizeStyleClassProps(e4, t12) {
  const n5 = "style" === e4, r6 = n5 ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set(), add = /* @__PURE__ */ __name((e5) => {
    if (e5) if (n5) {
      const t13 = e5.indexOf(":");
      t13 > 0 && r6.set(e5.slice(0, t13).trim(), e5.slice(t13 + 1).trim());
    } else e5.split(" ").forEach((e6) => e6 && r6.add(e6));
  }, "add");
  if ("string" == typeof t12) (n5 ? t12.split(";") : [t12]).forEach(add);
  else if (Array.isArray(t12)) t12.forEach(add);
  else if (t12 && "object" == typeof t12) for (const e5 in t12) {
    const s6 = t12[e5];
    s6 && "false" !== s6 && (n5 ? r6.set(e5.trim(), String(s6)) : add(e5));
  }
  return r6;
}
function normalizeTag(e4, t12) {
  const n5 = (function(e5, t13) {
    if (e5.props = e5.props || {}, !t13) return e5;
    if ("templateParams" === e5.tag) return e5.props = t13, e5;
    const n6 = ke2.has(e5.tag) || "htmlAttrs" === e5.tag || "bodyAttrs" === e5.tag;
    for (const r6 in t13) {
      if (isUnsafeKey(r6)) continue;
      const s6 = r6.startsWith("data-"), o7 = n6 && !we2.has(r6), i4 = o7 && !s6 ? r6.toLowerCase() : r6;
      if (o7 && (!i4 || Ne2.test(i4))) continue;
      const a8 = t13[r6];
      if (null === a8) e5.props[i4] = null;
      else if ("class" === r6 || "style" === r6) e5.props[r6] = normalizeStyleClassProps(r6, a8);
      else if (we2.has(r6)) if ("textContent" !== r6 && "innerHTML" !== r6 || "object" != typeof a8) e5[r6] = a8;
      else {
        const n7 = t13.type || "application/json";
        (n7.endsWith("json") || "speculationrules" === n7 || "importmap" === n7) && (e5.props.type = n7, e5[r6] = JSON.stringify(a8));
      }
      else if (void 0 !== a8) {
        const t14 = String(a8), n7 = "meta" === e5.tag && "content" === i4;
        e5.props[i4] = "true" === t14 || "" === t14 ? !s6 && !n7 || t14 : !a8 && s6 && "false" === t14 ? "false" : a8;
      }
    }
    return e5;
  })({ tag: e4, props: {} }, "object" == typeof t12 && "function" != typeof t12 ? t12 : { ["script" === e4 || "noscript" === e4 || "style" === e4 ? "innerHTML" : "textContent"]: t12 });
  if (n5.key && _e2.has(n5.tag) && (n5.props["data-hid"] = n5._h = n5.key), "script" === n5.tag && "object" == typeof n5.innerHTML && (n5.innerHTML = JSON.stringify(n5.innerHTML), n5.props.type = n5.props.type || "application/json"), Array.isArray(n5.props.content)) {
    const e5 = [];
    for (const t13 of n5.props.content) e5.push({ ...n5, props: { ...n5.props, content: t13 } });
    return e5;
  }
  return n5;
}
function pushNormalizedTag(e4, t12) {
  if (Array.isArray(t12)) for (const n5 of t12) e4.push(n5);
  else e4.push(t12);
}
function normalizeEntryToTags(e4, t12) {
  if (!e4) return [];
  "function" == typeof e4 && (e4 = e4()), e4 = (function(e5, t13) {
    let n6;
    return t13.length && (n6 = /* @__PURE__ */ __name((e6, n7) => {
      for (let r6 = 0; r6 < t13.length; r6++) n7 = t13[r6](e6, n7);
      return n7;
    }, "n"), e5 = n6(void 0, e5)), walkResolver(e5, n6);
  })(e4, t12);
  const n5 = [];
  for (const t13 in e4) {
    const r6 = e4[t13];
    if (void 0 !== r6) if (Array.isArray(r6)) for (const e5 of r6) pushNormalizedTag(n5, normalizeTag(t13, e5));
    else pushNormalizedTag(n5, normalizeTag(t13, r6));
  }
  return n5;
}
function isEmptyProps(e4) {
  for (const t12 in e4) return false;
  return true;
}
function syncEntryHookCache(e4, t12) {
  const n5 = (t12["entries:resolve"]?.length || 0) + (t12["entries:normalize"]?.length || 0);
  if (e4._h !== n5) {
    e4._h = n5;
    for (const t13 of e4.entries.values()) delete t13._tags;
  }
}
function cloneTagsInPlace(e4) {
  for (let t12 = 0; t12 < e4.length; t12++) {
    const n5 = e4[t12], r6 = { ...n5.props };
    r6.class instanceof Set && (r6.class = new Set(r6.class)), r6.style instanceof Map && (r6.style = new Map(r6.style)), e4[t12] = { ...n5, props: r6 };
  }
}
function resolveTags(e4, t12) {
  const n5 = t12?.tagWeight ?? e4.resolvedOptions._tagWeight ?? DEFAULT_TAG_WEIGHT, r6 = { tagMap: /* @__PURE__ */ new Map(), tags: [] }, s6 = e4.hooks?._hooks || {};
  syncEntryHookCache(e4, s6);
  for (const t13 of e4.entries.values()) void 0 !== t13._pending && (t13.input = t13._pending, delete t13._pending, delete t13._tags, delete t13._precomputedTags);
  let o7;
  (s6["entries:resolve"]?.length || s6["entries:normalize"]?.length) && (o7 = [...e4.entries.values()], s6["entries:resolve"]?.length && callHook$2(e4, "entries:resolve", { entries: o7, ...r6 })), syncEntryHookCache(e4, s6);
  for (const t13 of o7 || e4.entries.values()) {
    let o8 = t13._tags;
    if (!o8) if (!t13._precomputedTags || n5 !== e4.resolvedOptions._tagWeight || s6["entries:normalize"]?.length || s6["entries:resolve"]?.length || t13.options && !isEmptyProps(t13.options)) {
      if (o8 = normalizeEntryToTags(t13.input, e4.resolvedOptions.propResolvers || []), t13.options && !isEmptyProps(t13.options)) for (const e5 of o8) Object.assign(e5, t13.options);
      if (s6["entries:normalize"]?.length) {
        const n6 = { tags: o8, entry: t13 };
        callHook$2(e4, "entries:normalize", n6), o8 = n6.tags;
      }
      for (let e5 = 0; e5 < o8.length; e5++) {
        const r7 = o8[e5];
        r7._w = n5(r7), r7._p = (t13._i << 10) + e5, r7._d = dedupeKey(r7), r7._d || (r7._h = hashTag(r7));
      }
      t13._tags = o8;
    } else o8 = t13._precomputedTags;
    r6.tags.push(...o8);
  }
  for (const e5 in s6) if (s6[e5]?.length && Ve2.test(e5)) {
    cloneTagsInPlace(r6.tags);
    break;
  }
  const i4 = (function(e5) {
    let t13 = false;
    for (const n6 of e5.tags.sort(sortTags$1)) {
      const r7 = n6._d || hashTag(n6);
      if (!r7) continue;
      const s7 = e5.tagMap.get(r7);
      if (s7) if ("merge" === (n6.tagDuplicateStrategy || (Te2.has(n6.tag) ? "merge" : null) || (n6.key && n6.key === s7.key ? "merge" : null))) {
        const t14 = { ...s7.props };
        for (const e6 in n6.props) t14[e6] = "style" === e6 ? new Map([...s7.props.style || /* @__PURE__ */ new Map(), ...n6.props[e6]]) : "class" === e6 ? /* @__PURE__ */ new Set([...s7.props.class || [], ...n6.props[e6]]) : n6.props[e6];
        e5.tagMap.set(r7, { ...n6, props: t14 });
      } else n6._p >> 10 == s7._p >> 10 && "meta" === n6.tag && isMetaArrayDupeKey(r7) ? (e5.tagMap.set(r7, Object.assign([...Array.isArray(s7) ? s7 : [s7], n6], n6)), t13 = true) : (n6._w === s7._w ? n6._p > s7._p : n6._w < s7._w) && e5.tagMap.set(r7, n6);
      else e5.tagMap.set(r7, n6);
    }
    return t13;
  })(r6);
  return (function(e5, t13) {
    const n6 = e5.tagMap.get("title"), r7 = e5.tagMap.get("titleTemplate");
    if (t13._title = n6?.textContent, !r7) return;
    const s7 = r7.textContent;
    if (t13._titleTemplate = s7, !s7) return;
    let o8 = "function" == typeof s7 ? s7(n6?.textContent) : s7;
    "string" != typeof o8 || t13.plugins.has("template-params") || (o8 = o8.replace("%s", n6?.textContent || "")), n6 ? null === o8 ? e5.tagMap.delete("title") : e5.tagMap.set("title", { ...n6, textContent: o8 }) : e5.tagMap.set("titleTemplate", { ...r7, tag: "title", textContent: o8 });
  })(r6, e4), (function(e5, t13) {
    const n6 = e5.tags;
    let r7 = 0;
    for (const t14 of e5.tagMap.values()) if (Array.isArray(t14)) for (const e6 of t14) n6[r7++] = e6;
    else n6[r7++] = t14;
    n6.length = r7, t13 && n6.sort(sortTags$1);
  })(r6, i4), callHook$2(e4, "tags:beforeResolve", r6), callHook$2(e4, "tags:resolve", r6), callHook$2(e4, "tags:afterResolve", r6), (function(e5) {
    let t13 = 0;
    for (let n6 of e5) {
      const { innerHTML: r7, tag: s7, props: o8 } = n6;
      if (Se2.has(s7) && (!isEmptyProps(o8) || hasContent(r7) || hasContent(n6.textContent)) && ("meta" !== s7 || hasContent(o8.content) || o8["http-equiv"] || o8.charset)) {
        if ("script" === s7 && (r7 || n6.textContent)) {
          const e6 = String(o8.type), t14 = e6.endsWith("json") || "importmap" === e6 || "speculationrules" === e6, escape = /* @__PURE__ */ __name((e7) => t14 ? ("string" == typeof e7 ? e7 : JSON.stringify(e7)).replace(He2, "\\u003C") : "string" == typeof e7 ? e7.replace(Me2, "<\\/script") : e7, "escape");
          n6 = { ...n6 }, r7 && (n6.innerHTML = escape(r7)), n6.textContent && (n6.textContent = escape(n6.textContent)), n6._d = dedupeKey(n6);
        }
        e5[t13++] = n6;
      }
    }
    return e5.length = t13, e5;
  })(r6.tags);
}
function capoTagWeight(e4) {
  if ("number" == typeof e4.tagPriority) return e4.tagPriority;
  let t12 = 100;
  const n5 = Ae2[e4.tagPriority] || 0;
  if ("base" === e4.tag) t12 = -10;
  else if ("title" === e4.tag) t12 = 10;
  else if ("meta" === e4.tag) t12 = "content-security-policy" === e4.props["http-equiv"] ? -30 : e4.props.charset ? -20 : "viewport" === e4.props.name ? -15 : t12;
  else if ("link" === e4.tag && e4.props.rel) {
    const n6 = e4.props.rel;
    t12 = "preconnect" === n6 ? 20 : "stylesheet" === n6 ? 60 : "preload" === n6 || "modulepreload" === n6 ? 70 : "prefetch" === n6 || "dns-prefetch" === n6 || "prerender" === n6 ? 90 : t12;
  } else if ("script" === e4.tag) {
    const n6 = "string" == typeof e4.props.type ? e4.props.type : "", r6 = n6.endsWith("json");
    "importmap" === n6 ? t12 = 25 : "speculationrules" === n6 ? t12 = 90 : isTruthy(e4.props.async) ? t12 = 30 : e4.props.src && !isTruthy(e4.props.defer) && "module" !== n6 && !r6 || (e4.innerHTML || e4.textContent) && !r6 ? t12 = 50 : (isTruthy(e4.props.defer) && e4.props.src || "module" === n6) && (t12 = 80);
  } else "style" === e4.tag && (t12 = e4.innerHTML && /@import/.test(e4.innerHTML) ? 40 : 60);
  return (t12 || 100) + n5;
}
function encodeAttribute(e4) {
  const t12 = "string" == typeof e4 ? e4 : String(e4);
  return t12.includes('"') ? t12.replace(Ie2, "&quot;") : t12;
}
function propsToString(e4) {
  let t12 = "";
  for (const n5 in e4) {
    if (!Object.hasOwn(e4, n5) || !n5 || Ne2.test(n5)) continue;
    let r6 = e4[n5];
    if ("string" != typeof r6) {
      if ("class" === n5) {
        let e5 = "";
        for (const t13 of r6) e5 += e5 ? ` ${t13}` : t13;
        r6 = e5;
      } else if ("style" === n5) {
        let e5 = "";
        for (const [t13, n6] of r6) e5 += e5 ? `;${t13}:${n6}` : `${t13}:${n6}`;
        r6 = e5;
      }
    }
    false !== r6 && null !== r6 && (t12 += true === r6 ? ` ${n5}` : ` ${n5}="${encodeAttribute(r6)}"`);
  }
  return t12;
}
function tagToString(e4) {
  const t12 = propsToString(e4.props), n5 = `<${e4.tag}${t12}>`;
  if (ve2.has(e4.tag)) return n5;
  if (!be2.has(e4.tag)) return `${n5}</${e4.tag}>`;
  let r6 = String(e4.textContent ?? e4.innerHTML ?? "");
  return r6 = "title" === e4.tag ? r6.replace(Le2, (e5) => je2[e5]) : r6.replace(De2[e4.tag] ||= new RegExp(`</${e4.tag}`, "gi"), `<\\/${e4.tag}`), `${n5}${r6}</${e4.tag}>`;
}
function ssrRenderTags(e4, t12) {
  const n5 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: "", bodyClose: "", bodyOpen: "" } }, r6 = t12?.omitLineBreaks ? "" : "\n";
  for (const t13 of e4) {
    if ("htmlAttrs" === t13.tag || "bodyAttrs" === t13.tag) {
      Object.assign(n5[t13.tag], t13.props);
      continue;
    }
    const e5 = tagToString(t13), s6 = t13.tagPosition || "head";
    n5.tags[s6] += n5.tags[s6] ? `${r6}${e5}` : e5;
  }
  return { headTags: n5.tags.head, bodyTags: n5.tags.bodyClose, bodyTagsOpen: n5.tags.bodyOpen, htmlAttrs: propsToString(n5.htmlAttrs), bodyAttrs: propsToString(n5.bodyAttrs) };
}
function createServerRenderer(e4 = {}) {
  return (t12) => {
    const n5 = { shouldRender: true };
    if (callHook$2(t12, "ssr:beforeRender", n5), !n5.shouldRender) return ssrRenderTags([]);
    const r6 = { tags: e4.resolvedTags || resolveTags(t12, { tagWeight: e4.tagWeight ?? capoTagWeight }), options: { ...e4 } };
    callHook$2(t12, "ssr:render", r6);
    const s6 = ssrRenderTags(r6.tags, r6.options), o7 = { tags: r6.tags, html: s6 };
    return callHook$2(t12, "ssr:rendered", o7), o7.html;
  };
}
function createHead$1(e4 = {}) {
  const t12 = e4.tagWeight || capoTagWeight, n5 = createUnhead(createServerRenderer({ tagWeight: t12, omitLineBreaks: e4.omitLineBreaks }), { _tagWeight: t12, document: false, experimentalStreamKey: e4.experimentalStreamKey, propResolvers: [...e4.propResolvers || [], Be2], init: [e4.disableDefaults ? void 0 : Fe2, ...e4.init || []] });
  if (!e4.disableDefaults && !e4.tagWeight && !e4.propResolvers?.some((e5) => !e5._static)) {
    const e5 = n5.entries.get(1);
    e5 && (e5._precomputedTags = (function() {
      if (!Ue2) {
        Ue2 = normalizeEntryToTags(Fe2, []);
        for (let e6 = 0; e6 < Ue2.length; e6++) {
          const t13 = Ue2[e6];
          t13._w = capoTagWeight(t13), t13._p = 1024 + e6, t13._d = dedupeKey(t13), t13._d || (t13._h = hashTag(t13));
        }
      }
      return Ue2;
    })());
  }
  return n5.hooks = (function(e5) {
    const t13 = new Pe2();
    for (const n6 in e5 || {}) t13.hook(n6, e5[n6]);
    return t13;
  })(e4.hooks), e4.plugins?.forEach((e5) => n5.use(e5)), n5;
}
function getCurrentScope() {
  return We2;
}
function batch(e4, t12 = false) {
  if (e4.flags |= 8, t12) return e4.next = Je2, void (Je2 = e4);
  e4.next = qe2, qe2 = e4;
}
function startBatch() {
  Ge2++;
}
function endBatch() {
  if (--Ge2 > 0) return;
  if (Je2) {
    let e5 = Je2;
    for (Je2 = void 0; e5; ) {
      const t12 = e5.next;
      e5.next = void 0, e5.flags &= -9, e5 = t12;
    }
  }
  let e4;
  for (; qe2; ) {
    let t12 = qe2;
    for (qe2 = void 0; t12; ) {
      const n5 = t12.next;
      if (t12.next = void 0, t12.flags &= -9, 1 & t12.flags) try {
        t12.trigger();
      } catch (t13) {
        e4 || (e4 = t13);
      }
      t12 = n5;
    }
  }
  if (e4) throw e4;
}
function prepareDeps(e4) {
  for (let t12 = e4.deps; t12; t12 = t12.nextDep) t12.version = -1, t12.prevActiveLink = t12.dep.activeLink, t12.dep.activeLink = t12;
}
function cleanupDeps(e4) {
  let t12, n5 = e4.depsTail, r6 = n5;
  for (; r6; ) {
    const e5 = r6.prevDep;
    -1 === r6.version ? (r6 === n5 && (n5 = e5), removeSub(r6), removeDep(r6)) : t12 = r6, r6.dep.activeLink = r6.prevActiveLink, r6.prevActiveLink = void 0, r6 = e5;
  }
  e4.deps = t12, e4.depsTail = n5;
}
function isDirty(e4) {
  for (let t12 = e4.deps; t12; t12 = t12.nextDep) if (t12.dep.version !== t12.version || t12.dep.computed && (refreshComputed(t12.dep.computed) || t12.dep.version !== t12.version)) return true;
  return !!e4._dirty;
}
function refreshComputed(e4) {
  if (4 & e4.flags && !(16 & e4.flags)) return;
  if (e4.flags &= -17, e4.globalVersion === Ye2) return;
  if (e4.globalVersion = Ye2, !e4.isSSR && 128 & e4.flags && (!e4.deps && !e4._dirty || !isDirty(e4))) return;
  e4.flags |= 2;
  const t12 = e4.dep, n5 = ze2, r6 = Ze2;
  ze2 = e4, Ze2 = true;
  try {
    prepareDeps(e4);
    const n6 = e4.fn(e4._value);
    (0 === t12.version || hasChanged(n6, e4._value)) && (e4.flags |= 128, e4._value = n6, t12.version++);
  } catch (e5) {
    throw t12.version++, e5;
  } finally {
    ze2 = n5, Ze2 = r6, cleanupDeps(e4), e4.flags &= -3;
  }
}
function removeSub(e4, t12 = false) {
  const { dep: n5, prevSub: r6, nextSub: s6 } = e4;
  if (r6 && (r6.nextSub = s6, e4.prevSub = void 0), s6 && (s6.prevSub = r6, e4.nextSub = void 0), n5.subs === e4 && (n5.subs = r6, !r6 && n5.computed)) {
    n5.computed.flags &= -5;
    for (let e5 = n5.computed.deps; e5; e5 = e5.nextDep) removeSub(e5, true);
  }
  t12 || --n5.sc || !n5.map || n5.map.delete(n5.key);
}
function removeDep(e4) {
  const { prevDep: t12, nextDep: n5 } = e4;
  t12 && (t12.nextDep = n5, e4.prevDep = void 0), n5 && (n5.prevDep = t12, e4.nextDep = void 0);
}
function pauseTracking() {
  Xe2.push(Ze2), Ze2 = false;
}
function resetTracking() {
  const e4 = Xe2.pop();
  Ze2 = void 0 === e4 || e4;
}
function cleanupEffect(e4) {
  const { cleanup: t12 } = e4;
  if (e4.cleanup = void 0, t12) {
    const e5 = ze2;
    ze2 = void 0;
    try {
      t12();
    } finally {
      ze2 = e5;
    }
  }
}
function addSub(e4) {
  if (e4.dep.sc++, 4 & e4.sub.flags) {
    const t12 = e4.dep.computed;
    if (t12 && !e4.dep.subs) {
      t12.flags |= 20;
      for (let e5 = t12.deps; e5; e5 = e5.nextDep) addSub(e5);
    }
    const n5 = e4.dep.subs;
    n5 !== e4 && (e4.prevSub = n5, n5 && (n5.nextSub = e4)), e4.dep.subs = e4;
  }
}
function track(e4, t12, n5) {
  if (Ze2 && ze2) {
    let t13 = Qe2.get(e4);
    t13 || Qe2.set(e4, t13 = /* @__PURE__ */ new Map());
    let r6 = t13.get(n5);
    r6 || (t13.set(n5, r6 = new Dep()), r6.map = t13, r6.key = n5), r6.track();
  }
}
function trigger(e4, t12, n5, r6, s6, o7) {
  const i4 = Qe2.get(e4);
  if (!i4) return void Ye2++;
  const run = /* @__PURE__ */ __name((e5) => {
    e5 && e5.trigger();
  }, "run");
  if (startBatch(), "clear" === t12) i4.forEach(run);
  else {
    const s7 = o(e4), o8 = s7 && isIntegerKey(n5);
    if (s7 && "length" === n5) {
      const e5 = Number(r6);
      i4.forEach((t13, n6) => {
        ("length" === n6 || n6 === nt2 || !isSymbol(n6) && n6 >= e5) && run(t13);
      });
    } else switch ((void 0 !== n5 || i4.has(void 0)) && run(i4.get(n5)), o8 && run(i4.get(nt2)), t12) {
      case "add":
        s7 ? o8 && run(i4.get("length")) : (run(i4.get(et2)), isMap(e4) && run(i4.get(tt2)));
        break;
      case "delete":
        s7 || (run(i4.get(et2)), isMap(e4) && run(i4.get(tt2)));
        break;
      case "set":
        isMap(e4) && run(i4.get(et2));
    }
  }
  endBatch();
}
function reactiveReadArray(e4) {
  const t12 = toRaw(e4);
  return t12 === e4 ? t12 : (track(t12, 0, nt2), isShallow(e4) ? t12 : t12.map(toReactive));
}
function shallowReadArray(e4) {
  return track(e4 = toRaw(e4), 0, nt2), e4;
}
function toWrapped(e4, t12) {
  return isReadonly(e4) ? isReactive(e4) ? toReadonly(toReactive(t12)) : toReadonly(t12) : toReactive(t12);
}
function iterator(e4, t12, n5) {
  const r6 = shallowReadArray(e4), s6 = r6[t12]();
  return r6 === e4 || isShallow(e4) || (s6._next = s6.next, s6.next = () => {
    const e5 = s6._next();
    return e5.done || (e5.value = n5(e5.value)), e5;
  }), s6;
}
function apply(e4, t12, n5, r6, s6, o7) {
  const i4 = shallowReadArray(e4), a8 = i4 !== e4 && !isShallow(e4), l5 = i4[t12];
  if (l5 !== st2[t12]) {
    const t13 = l5.apply(e4, o7);
    return a8 ? toReactive(t13) : t13;
  }
  let c4 = n5;
  i4 !== e4 && (a8 ? c4 = /* @__PURE__ */ __name(function(t13, r7) {
    return n5.call(this, toWrapped(e4, t13), r7, e4);
  }, "c") : n5.length > 2 && (c4 = /* @__PURE__ */ __name(function(t13, r7) {
    return n5.call(this, t13, r7, e4);
  }, "c")));
  const u5 = l5.call(i4, c4, r6);
  return a8 && s6 ? s6(u5) : u5;
}
function reduce(e4, t12, n5, r6) {
  const s6 = shallowReadArray(e4), o7 = s6 !== e4 && !isShallow(e4);
  let i4 = n5, a8 = false;
  s6 !== e4 && (o7 ? (a8 = 0 === r6.length, i4 = /* @__PURE__ */ __name(function(t13, r7, s7) {
    return a8 && (a8 = false, t13 = toWrapped(e4, t13)), n5.call(this, t13, toWrapped(e4, r7), s7, e4);
  }, "i")) : n5.length > 3 && (i4 = /* @__PURE__ */ __name(function(t13, r7, s7) {
    return n5.call(this, t13, r7, s7, e4);
  }, "i")));
  const l5 = s6[t12](i4, ...r6);
  return a8 ? toWrapped(e4, l5) : l5;
}
function searchProxy(e4, t12, n5) {
  const r6 = toRaw(e4);
  track(r6, 0, nt2);
  const s6 = r6[t12](...n5);
  return -1 !== s6 && false !== s6 || !isProxy(n5[0]) ? s6 : (n5[0] = toRaw(n5[0]), r6[t12](...n5));
}
function noTracking(e4, t12, n5 = []) {
  pauseTracking(), startBatch();
  const r6 = toRaw(e4)[t12].apply(e4, n5);
  return endBatch(), resetTracking(), r6;
}
function hasOwnProperty(e4) {
  isSymbol(e4) || (e4 = String(e4));
  const t12 = toRaw(this);
  return track(t12, 0, e4), t12.hasOwnProperty(e4);
}
function createReadonlyMethod(e4) {
  return function(...t12) {
    return "delete" !== e4 && ("clear" === e4 ? void 0 : this);
  };
}
function createInstrumentations(e4, t12) {
  const n5 = { get(n6) {
    const r6 = this.__v_raw, s6 = toRaw(r6), o7 = toRaw(n6);
    e4 || (hasChanged(n6, o7) && track(s6, 0, n6), track(s6, 0, o7));
    const { has: i4 } = getProto(s6), a8 = t12 ? toShallow : e4 ? toReadonly : toReactive;
    return i4.call(s6, n6) ? a8(r6.get(n6)) : i4.call(s6, o7) ? a8(r6.get(o7)) : void (r6 !== s6 && r6.get(n6));
  }, get size() {
    const t13 = this.__v_raw;
    return !e4 && track(toRaw(t13), 0, et2), t13.size;
  }, has(t13) {
    const n6 = this.__v_raw, r6 = toRaw(n6), s6 = toRaw(t13);
    return e4 || (hasChanged(t13, s6) && track(r6, 0, t13), track(r6, 0, s6)), t13 === s6 ? n6.has(t13) : n6.has(t13) || n6.has(s6);
  }, forEach(n6, r6) {
    const s6 = this, o7 = s6.__v_raw, i4 = toRaw(o7), a8 = t12 ? toShallow : e4 ? toReadonly : toReactive;
    return !e4 && track(i4, 0, et2), o7.forEach((e5, t13) => n6.call(r6, a8(e5), a8(t13), s6));
  } };
  n(n5, e4 ? { add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear") } : { add(e5) {
    const n6 = toRaw(this), r6 = getProto(n6), s6 = toRaw(e5), o7 = t12 || isShallow(e5) || isReadonly(e5) ? e5 : s6;
    return r6.has.call(n6, o7) || hasChanged(e5, o7) && r6.has.call(n6, e5) || hasChanged(s6, o7) && r6.has.call(n6, s6) || (n6.add(o7), trigger(n6, "add", o7, o7)), this;
  }, set(e5, n6) {
    t12 || isShallow(n6) || isReadonly(n6) || (n6 = toRaw(n6));
    const r6 = toRaw(this), { has: s6, get: o7 } = getProto(r6);
    let i4 = s6.call(r6, e5);
    i4 || (e5 = toRaw(e5), i4 = s6.call(r6, e5));
    const a8 = o7.call(r6, e5);
    return r6.set(e5, n6), i4 ? hasChanged(n6, a8) && trigger(r6, "set", e5, n6) : trigger(r6, "add", e5, n6), this;
  }, delete(e5) {
    const t13 = toRaw(this), { has: n6, get: r6 } = getProto(t13);
    let s6 = n6.call(t13, e5);
    s6 || (e5 = toRaw(e5), s6 = n6.call(t13, e5)), r6 && r6.call(t13, e5);
    const o7 = t13.delete(e5);
    return s6 && trigger(t13, "delete", e5, void 0), o7;
  }, clear() {
    const e5 = toRaw(this), t13 = 0 !== e5.size, n6 = e5.clear();
    return t13 && trigger(e5, "clear", void 0, void 0), n6;
  } });
  return ["keys", "values", "entries", Symbol.iterator].forEach((r6) => {
    n5[r6] = /* @__PURE__ */ (function(e5, t13, n6) {
      return function(...r7) {
        const s6 = this.__v_raw, o7 = toRaw(s6), i4 = isMap(o7), a8 = "entries" === e5 || e5 === Symbol.iterator && i4, l5 = "keys" === e5 && i4, c4 = s6[e5](...r7), u5 = n6 ? toShallow : t13 ? toReadonly : toReactive;
        return !t13 && track(o7, 0, l5 ? tt2 : et2), n(Object.create(c4), { next() {
          const { value: e6, done: t14 } = c4.next();
          return t14 ? { value: e6, done: t14 } : { value: a8 ? [u5(e6[0]), u5(e6[1])] : u5(e6), done: t14 };
        } });
      };
    })(r6, e4, t12);
  }), n5;
}
function createInstrumentationGetter(e4, t12) {
  const n5 = createInstrumentations(e4, t12);
  return (t13, r6, s6) => "__v_isReactive" === r6 ? !e4 : "__v_isReadonly" === r6 ? e4 : "__v_raw" === r6 ? t13 : Reflect.get(hasOwn(n5, r6) && r6 in t13 ? n5 : t13, r6, s6);
}
function reactive(e4) {
  return isReadonly(e4) ? e4 : createReactiveObject(e4, false, at2, pt2, gt2);
}
function shallowReactive(e4) {
  return createReactiveObject(e4, false, ct2, dt2, mt2);
}
function readonly(e4) {
  return createReactiveObject(e4, true, lt2, ft2, yt2);
}
function shallowReadonly(e4) {
  return createReactiveObject(e4, true, ut2, ht2, vt2);
}
function createReactiveObject(e4, t12, n5, r6, s6) {
  if (!isObject(e4)) return e4;
  if (e4.__v_raw && (!t12 || !e4.__v_isReactive)) return e4;
  if (e4.__v_skip || !Object.isExtensible(e4)) return e4;
  const o7 = s6.get(e4);
  if (o7) return o7;
  const i4 = (function(e5) {
    switch (e5) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  })(toRawType(e4));
  if (0 === i4) return e4;
  const a8 = new Proxy(e4, 2 === i4 ? r6 : n5);
  return s6.set(e4, a8), a8;
}
function isReactive(e4) {
  return isReadonly(e4) ? isReactive(e4.__v_raw) : !(!e4 || !e4.__v_isReactive);
}
function isReadonly(e4) {
  return !(!e4 || !e4.__v_isReadonly);
}
function isShallow(e4) {
  return !(!e4 || !e4.__v_isShallow);
}
function isProxy(e4) {
  return !!e4 && !!e4.__v_raw;
}
function toRaw(e4) {
  const t12 = e4 && e4.__v_raw;
  return t12 ? toRaw(t12) : e4;
}
function markRaw(e4) {
  return !hasOwn(e4, "__v_skip") && Object.isExtensible(e4) && def(e4, "__v_skip", true), e4;
}
function isRef2(e4) {
  return !!e4 && true === e4.__v_isRef;
}
function ref2(e4) {
  return createRef(e4, false);
}
function shallowRef(e4) {
  return createRef(e4, true);
}
function createRef(e4, t12) {
  return isRef2(e4) ? e4 : new RefImpl(e4, t12);
}
function unref2(e4) {
  return isRef2(e4) ? e4.value : e4;
}
function toValue(e4) {
  return isFunction(e4) ? e4() : unref2(e4);
}
function proxyRefs(e4) {
  return isReactive(e4) ? e4 : new Proxy(e4, _t2);
}
function customRef(e4) {
  return new CustomRefImpl(e4);
}
function propertyToRef(e4, t12, n5) {
  return new ObjectRefImpl(e4, t12, n5);
}
function onWatcherCleanup(e4, t12 = false, n5 = St2) {
  if (n5) {
    let t13 = kt2.get(n5);
    t13 || kt2.set(n5, t13 = []), t13.push(e4);
  }
}
function traverse(e4, t12 = 1 / 0, n5) {
  if (t12 <= 0 || !isObject(e4) || e4.__v_skip) return e4;
  if (((n5 = n5 || /* @__PURE__ */ new Map()).get(e4) || 0) >= t12) return e4;
  if (n5.set(e4, t12), t12--, isRef2(e4)) traverse(e4.value, t12, n5);
  else if (o(e4)) for (let r6 = 0; r6 < e4.length; r6++) traverse(e4[r6], t12, n5);
  else if (isSet(e4) || isMap(e4)) e4.forEach((e5) => {
    traverse(e5, t12, n5);
  });
  else if (isPlainObject(e4)) {
    for (const r6 in e4) traverse(e4[r6], t12, n5);
    for (const r6 of Object.getOwnPropertySymbols(e4)) Object.prototype.propertyIsEnumerable.call(e4, r6) && traverse(e4[r6], t12, n5);
  }
  return e4;
}
function callWithErrorHandling(e4, t12, n5, r6) {
  try {
    return r6 ? e4(...r6) : e4();
  } catch (e5) {
    handleError(e5, t12, n5);
  }
}
function callWithAsyncErrorHandling(e4, t12, n5, r6) {
  if (isFunction(e4)) {
    const s6 = callWithErrorHandling(e4, t12, n5, r6);
    return s6 && isPromise(s6) && s6.catch((e5) => {
      handleError(e5, t12, n5);
    }), s6;
  }
  if (o(e4)) {
    const s6 = [];
    for (let o7 = 0; o7 < e4.length; o7++) s6.push(callWithAsyncErrorHandling(e4[o7], t12, n5, r6));
    return s6;
  }
}
function handleError(e4, t12, n5, r6 = true) {
  t12 && t12.vnode;
  const { errorHandler: s6, throwUnhandledErrorInProduction: o7 } = t12 && t12.appContext.config || t;
  if (t12) {
    let r7 = t12.parent;
    const o8 = t12.proxy, i4 = `https://vuejs.org/error-reference/#runtime-${n5}`;
    for (; r7; ) {
      const t13 = r7.ec;
      if (t13) {
        for (let n6 = 0; n6 < t13.length; n6++) if (false === t13[n6](e4, o8, i4)) return;
      }
      r7 = r7.parent;
    }
    if (s6) return pauseTracking(), callWithErrorHandling(s6, null, 10, [e4, o8, i4]), void resetTracking();
  }
  !(function(e5, t13, n6, r7 = true, s7 = false) {
    if (s7) throw e5;
    console.error(e5);
  })(e4, 0, 0, r6, o7);
}
function nextTick2(e4) {
  const t12 = Ot2 || Pt2;
  return e4 ? t12.then(this ? e4.bind(this) : e4) : t12;
}
function queueJob(e4) {
  if (!(1 & e4.flags)) {
    const t12 = getId(e4), n5 = Tt2[Tt2.length - 1];
    !n5 || !(2 & e4.flags) && t12 >= getId(n5) ? Tt2.push(e4) : Tt2.splice((function(e5) {
      let t13 = Rt2 + 1, n6 = Tt2.length;
      for (; t13 < n6; ) {
        const r6 = t13 + n6 >>> 1, s6 = Tt2[r6], o7 = getId(s6);
        o7 < e5 || o7 === e5 && 2 & s6.flags ? t13 = r6 + 1 : n6 = r6;
      }
      return t13;
    })(t12), 0, e4), e4.flags |= 1, queueFlush();
  }
}
function queueFlush() {
  Ot2 || (Ot2 = Pt2.then(flushJobs));
}
function queuePostFlushCb(e4) {
  if (o(e4)) for (let t12 = 0; t12 < e4.length; t12++) At2.push(e4[t12]);
  else xt2 && -1 === e4.id ? xt2.splice(Et2 + 1, 0, e4) : 1 & e4.flags || (At2.push(e4), e4.flags |= 1);
  queueFlush();
}
function flushPreFlushCbs(e4, t12, n5 = Rt2 + 1) {
  for (; n5 < Tt2.length; n5++) {
    const t13 = Tt2[n5];
    if (t13 && 2 & t13.flags) {
      if (e4 && t13.id !== e4.uid) continue;
      Tt2.splice(n5, 1), n5--, 4 & t13.flags && (t13.flags &= -2), t13(), 4 & t13.flags || (t13.flags &= -2);
    }
  }
}
function flushPostFlushCbs(e4) {
  if (At2.length) {
    const e5 = [...new Set(At2)].sort((e6, t12) => getId(e6) - getId(t12));
    if (At2.length = 0, xt2) {
      for (let t12 = 0; t12 < e5.length; t12++) xt2.push(e5[t12]);
      return;
    }
    for (xt2 = e5, Et2 = 0; Et2 < xt2.length; Et2++) {
      const e6 = xt2[Et2];
      4 & e6.flags && (e6.flags &= -2), 8 & e6.flags || e6(), e6.flags &= -2;
    }
    xt2 = null, Et2 = 0;
  }
}
function flushJobs(e4) {
  try {
    for (Rt2 = 0; Rt2 < Tt2.length; Rt2++) {
      const e5 = Tt2[Rt2];
      !e5 || 8 & e5.flags || (4 & e5.flags && (e5.flags &= -2), callWithErrorHandling(e5, e5.i, e5.i ? 15 : 14), 4 & e5.flags || (e5.flags &= -2));
    }
  } finally {
    for (; Rt2 < Tt2.length; Rt2++) {
      const e5 = Tt2[Rt2];
      e5 && (e5.flags &= -2);
    }
    Rt2 = -1, Tt2.length = 0, flushPostFlushCbs(), Ot2 = null, (Tt2.length || At2.length) && flushJobs();
  }
}
function setCurrentRenderingInstance$1(e4) {
  const t12 = Ht2;
  return Ht2 = e4, Mt2 = e4 && e4.type.__scopeId || null, t12;
}
function withCtx(e4, t12 = Ht2, n5) {
  if (!t12) return e4;
  if (e4._n) return e4;
  const renderFnWithContext = /* @__PURE__ */ __name((...n6) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r6 = setCurrentRenderingInstance$1(t12), s6 = xn2.length;
    let o7;
    try {
      o7 = e4(...n6);
    } finally {
      for (let e5 = xn2.length; e5 > s6; e5--) closeBlock();
      setCurrentRenderingInstance$1(r6), renderFnWithContext._d && setBlockTracking(1);
    }
    return o7;
  }, "renderFnWithContext");
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function invokeDirectiveHook(e4, t12, n5, r6) {
  const s6 = e4.dirs, o7 = t12 && t12.dirs;
  for (let i4 = 0; i4 < s6.length; i4++) {
    const a8 = s6[i4];
    o7 && (a8.oldValue = o7[i4].value);
    let l5 = a8.dir[r6];
    l5 && (pauseTracking(), callWithAsyncErrorHandling(l5, n5, 8, [e4.el, a8, e4, t12]), resetTracking());
  }
}
function provide(e4, t12) {
  if (Nn2) {
    let n5 = Nn2.provides;
    const r6 = Nn2.parent && Nn2.parent.provides;
    r6 === n5 && (n5 = Nn2.provides = Object.create(r6)), n5[e4] = t12;
  }
}
function inject(e4, t12, n5 = false) {
  const r6 = getCurrentInstance();
  if (r6 || yn2) {
    let s6 = yn2 ? yn2._context.provides : r6 ? null == r6.parent || r6.ce ? r6.vnode.appContext && r6.vnode.appContext.provides : r6.parent.provides : void 0;
    if (s6 && e4 in s6) return s6[e4];
    if (arguments.length > 1) return n5 && isFunction(t12) ? t12.call(r6 && r6.proxy) : t12;
  }
}
function hasInjectionContext() {
  return !(!getCurrentInstance() && !yn2);
}
function watchEffect(e4, t12) {
  return doWatch(e4, null, t12);
}
function watchSyncEffect(e4, t12) {
  return doWatch(e4, null, { flush: "sync" });
}
function watch(e4, t12, n5) {
  return doWatch(e4, t12, n5);
}
function doWatch(e4, t12, n5 = t) {
  const { immediate: r6, deep: s6, flush: o7, once: i4 } = n5, a8 = n({}, n5), l5 = t12 && r6 || !t12 && "post" !== o7;
  let c4;
  if (Ln2) {
    if ("sync" === o7) {
      const e5 = useSSRContext();
      c4 = e5.__watcherHandles || (e5.__watcherHandles = []);
    } else if (!l5) {
      const watchStopHandle = /* @__PURE__ */ __name(() => {
      }, "watchStopHandle");
      return watchStopHandle.stop = NOOP, watchStopHandle.resume = NOOP, watchStopHandle.pause = NOOP, watchStopHandle;
    }
  }
  const u5 = Nn2;
  a8.call = (e5, t13, n6) => callWithAsyncErrorHandling(e5, u5, t13, n6);
  let p5 = false;
  "post" === o7 ? a8.scheduler = (e5) => {
    kn2(e5, u5 && u5.suspense);
  } : "sync" !== o7 && (p5 = true, a8.scheduler = (e5, t13) => {
    t13 ? e5() : queueJob(e5);
  }), a8.augmentJob = (e5) => {
    t12 && (e5.flags |= 4), p5 && (e5.flags |= 2, u5 && (e5.id = u5.uid, e5.i = u5));
  };
  const d5 = (function(e5, t13, n6 = t) {
    const { immediate: r7, deep: s7, once: o8, scheduler: i5, augmentJob: a9, call: l6 } = n6, reactiveGetter = /* @__PURE__ */ __name((e6) => s7 ? e6 : isShallow(e6) || false === s7 || 0 === s7 ? traverse(e6, 1) : traverse(e6), "reactiveGetter");
    let c5, u6, p6, d6, f4 = false, m5 = false;
    if (isRef2(e5) ? (u6 = /* @__PURE__ */ __name(() => e5.value, "u"), f4 = isShallow(e5)) : isReactive(e5) ? (u6 = /* @__PURE__ */ __name(() => reactiveGetter(e5), "u"), f4 = true) : o(e5) ? (m5 = true, f4 = e5.some((e6) => isReactive(e6) || isShallow(e6)), u6 = /* @__PURE__ */ __name(() => e5.map((e6) => isRef2(e6) ? e6.value : isReactive(e6) ? reactiveGetter(e6) : isFunction(e6) ? l6 ? l6(e6, 2) : e6() : void 0), "u")) : u6 = isFunction(e5) ? t13 ? l6 ? () => l6(e5, 2) : e5 : () => {
      if (p6) {
        pauseTracking();
        try {
          p6();
        } finally {
          resetTracking();
        }
      }
      const t14 = St2;
      St2 = c5;
      try {
        return l6 ? l6(e5, 3, [d6]) : e5(d6);
      } finally {
        St2 = t14;
      }
    } : NOOP, t13 && s7) {
      const e6 = u6, t14 = true === s7 ? 1 / 0 : s7;
      u6 = /* @__PURE__ */ __name(() => traverse(e6(), t14), "u");
    }
    const y3 = getCurrentScope(), watchHandle = /* @__PURE__ */ __name(() => {
      c5.stop(), y3 && y3.active && remove(y3.effects, c5);
    }, "watchHandle");
    if (o8 && t13) {
      const e6 = t13;
      t13 = /* @__PURE__ */ __name((...t14) => {
        const n7 = e6(...t14);
        return watchHandle(), n7;
      }, "t");
    }
    let v3 = m5 ? new Array(e5.length).fill(bt2) : bt2;
    const job = /* @__PURE__ */ __name((e6) => {
      if (1 & c5.flags && (c5.dirty || e6)) if (t13) {
        const n7 = c5.run();
        if (e6 || s7 || f4 || (m5 ? n7.some((e7, t14) => hasChanged(e7, v3[t14])) : hasChanged(n7, v3))) {
          p6 && p6();
          const e7 = St2;
          St2 = c5;
          try {
            const e8 = [n7, v3 === bt2 ? void 0 : m5 && v3[0] === bt2 ? [] : v3, d6];
            v3 = n7, l6 ? l6(t13, 3, e8) : t13(...e8);
          } finally {
            St2 = e7;
          }
        }
      } else c5.run();
    }, "job");
    return a9 && a9(job), c5 = new ReactiveEffect(u6), c5.scheduler = i5 ? () => i5(job, false) : job, d6 = /* @__PURE__ */ __name((e6) => onWatcherCleanup(e6, false, c5), "d"), p6 = c5.onStop = () => {
      const e6 = kt2.get(c5);
      if (e6) {
        if (l6) l6(e6, 4);
        else for (const t14 of e6) t14();
        kt2.delete(c5);
      }
    }, t13 ? r7 ? job(true) : v3 = c5.run() : i5 ? i5(job.bind(null, true), true) : c5.run(), watchHandle.pause = c5.pause.bind(c5), watchHandle.resume = c5.resume.bind(c5), watchHandle.stop = watchHandle, watchHandle;
  })(e4, t12, a8);
  return Ln2 && (c4 ? c4.push(d5) : l5 && d5()), d5;
}
function instanceWatch(e4, t12, n5) {
  const r6 = this.proxy, s6 = isString(e4) ? e4.includes(".") ? createPathGetter(r6, e4) : () => r6[e4] : e4.bind(r6, r6);
  let o7;
  isFunction(t12) ? o7 = t12 : (o7 = t12.handler, n5 = t12);
  const i4 = setCurrentInstance(this), a8 = doWatch(s6, o7.bind(r6), n5);
  return i4(), a8;
}
function createPathGetter(e4, t12) {
  const n5 = t12.split(".");
  return () => {
    let t13 = e4;
    for (let e5 = 0; e5 < n5.length && t13; e5++) t13 = t13[n5[e5]];
    return t13;
  };
}
function moveTeleport(e4, t12, n5, { o: { insert: r6 }, m: s6 }, o7 = 2) {
  0 === o7 && r6(e4.targetAnchor, t12, n5);
  const { el: i4, anchor: a8, shapeFlag: l5, children: c4, props: u5 } = e4, p5 = 2 === o7;
  if (p5 && r6(i4, t12, n5), !It2.has(e4) && (!p5 || isTeleportDisabled(u5)) && 16 & l5) for (let e5 = 0; e5 < c4.length; e5++) s6(c4[e5], t12, n5, 2);
  p5 && r6(a8, t12, n5);
}
function updateCssVars(e4, t12) {
  const n5 = e4.ctx;
  if (n5 && n5.ut) {
    let r6, s6;
    for (t12 ? (r6 = e4.el, s6 = e4.anchor) : (r6 = e4.targetStart, s6 = e4.targetAnchor); r6 && r6 !== s6; ) 1 === r6.nodeType && r6.setAttribute("data-v-owner", n5.uid), r6 = r6.nextSibling;
    n5.ut();
  }
}
function prepareAnchor(e4, t12, n5, r6, s6 = null) {
  const o7 = t12.targetStart = n5(""), i4 = t12.targetAnchor = n5("");
  return o7[Lt2] = i4, e4 && (r6(o7, e4, s6), r6(i4, e4, s6)), i4;
}
function useTransitionState() {
  const e4 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return en2(() => {
    e4.isMounted = true;
  }), rn(() => {
    e4.isUnmounting = true;
  }), e4;
}
function findNonCommentChild(e4) {
  let t12 = e4[0];
  if (e4.length > 1) {
    for (const n5 of e4) if (n5.type !== Rn2) {
      t12 = n5;
      break;
    }
  }
  return t12;
}
function getLeavingNodesForType(e4, t12) {
  const { leavingVNodes: n5 } = e4;
  let r6 = n5.get(t12.type);
  return r6 || (r6 = /* @__PURE__ */ Object.create(null), n5.set(t12.type, r6)), r6;
}
function resolveTransitionHooks(e4, t12, n5, r6, s6) {
  const { appear: o7, mode: i4, persisted: a8 = false, onBeforeEnter: l5, onEnter: c4, onAfterEnter: u5, onEnterCancelled: p5, onBeforeLeave: d5, onLeave: f4, onAfterLeave: g5, onLeaveCancelled: m5, onBeforeAppear: y3, onAppear: v3, onAfterAppear: _3, onAppearCancelled: k4 } = t12, S3 = String(e4.key), C3 = getLeavingNodesForType(n5, e4), callHook2 = /* @__PURE__ */ __name((e5, t13) => {
    e5 && callWithAsyncErrorHandling(e5, r6, 9, t13);
  }, "callHook"), callAsyncHook = /* @__PURE__ */ __name((e5, t13) => {
    const n6 = t13[1];
    callHook2(e5, t13), o(e5) ? e5.every((e6) => e6.length <= 1) && n6() : e5.length <= 1 && n6();
  }, "callAsyncHook"), w5 = { mode: i4, persisted: a8, beforeEnter(t13) {
    let r7 = l5;
    if (!n5.isMounted) {
      if (!o7) return;
      r7 = y3 || l5;
    }
    t13[jt2] && t13[jt2](true);
    const s7 = C3[S3];
    s7 && isSameVNodeType(e4, s7) && s7.el[jt2] && s7.el[jt2](), callHook2(r7, [t13]);
  }, enter(t13) {
    if (C3[S3] === e4) return;
    let r7 = c4, s7 = u5, i5 = p5;
    if (!n5.isMounted) {
      if (!o7) return;
      r7 = v3 || c4, s7 = _3 || u5, i5 = k4 || p5;
    }
    let a9 = false;
    t13[Ft3] = (e5) => {
      a9 || (a9 = true, callHook2(e5 ? i5 : s7, [t13]), w5.delayedLeave && w5.delayedLeave(), t13[Ft3] = void 0);
    };
    const l6 = t13[Ft3].bind(null, false);
    r7 ? callAsyncHook(r7, [t13, l6]) : l6();
  }, leave(t13, r7) {
    const s7 = String(e4.key);
    if (t13[Ft3] && t13[Ft3](true), n5.isUnmounting) return r7();
    callHook2(d5, [t13]);
    let o8 = false;
    t13[jt2] = (n6) => {
      o8 || (o8 = true, r7(), callHook2(n6 ? m5 : g5, [t13]), t13[jt2] = void 0, C3[s7] === e4 && delete C3[s7]);
    };
    const i5 = t13[jt2].bind(null, false);
    C3[s7] = e4, f4 ? callAsyncHook(f4, [t13, i5]) : i5();
  }, clone(e5) {
    const o8 = resolveTransitionHooks(e5, t12, n5, r6, s6);
    return s6 && s6(o8), o8;
  } };
  return w5;
}
function emptyPlaceholder(e4) {
  if (isKeepAlive(e4)) return (e4 = cloneVNode(e4)).children = null, e4;
}
function getInnerChild$1(e4) {
  if (!isKeepAlive(e4)) return isTeleport(e4.type) && e4.children ? findNonCommentChild(e4.children) : e4;
  if (e4.component) return e4.component.subTree;
  const { shapeFlag: t12, children: n5 } = e4;
  if (n5) {
    if (16 & t12) return n5[0];
    if (32 & t12 && isFunction(n5.default)) return n5.default();
  }
}
function setTransitionHooks(e4, t12) {
  if (6 & e4.shapeFlag && e4.component) {
    e4.transition = t12;
    const n5 = e4.component.subTree;
    setTransitionHooks(isTeleport(n5.type) && getInnerChild$1(n5) || n5, t12);
  } else 128 & e4.shapeFlag ? (e4.ssContent.transition = t12.clone(e4.ssContent), e4.ssFallback.transition = t12.clone(e4.ssFallback)) : e4.transition = t12;
}
function getTransitionRawChildren(e4, t12 = false, n5) {
  let r6 = [], s6 = 0;
  for (let o7 = 0; o7 < e4.length; o7++) {
    let i4 = e4[o7];
    const a8 = null == n5 ? i4.key : String(n5) + String(null != i4.key ? i4.key : o7);
    i4.type === wn2 ? (128 & i4.patchFlag && s6++, r6 = r6.concat(getTransitionRawChildren(i4.children, t12, a8))) : (t12 || i4.type !== Rn2) && r6.push(null != a8 ? cloneVNode(i4, { key: a8 }) : i4);
  }
  if (s6 > 1) for (let e5 = 0; e5 < r6.length; e5++) r6[e5].patchFlag = -2;
  return r6;
}
function defineComponent(e4, t12) {
  return isFunction(e4) ? (() => n({ name: e4.name }, t12, { setup: e4 }))() : e4;
}
function markAsyncBoundary(e4) {
  e4.ids = [e4.ids[0] + e4.ids[2]++ + "-", 0, 0];
}
function isTemplateRefKey(e4, t12) {
  let n5;
  return !(!(n5 = Object.getOwnPropertyDescriptor(e4, t12)) || n5.configurable);
}
function setRef(e4, t12, n5, r6, s6 = false) {
  if (o(e4)) return void e4.forEach((e5, o8) => setRef(e5, t12 && (o(t12) ? t12[o8] : t12), n5, r6, s6));
  if (isAsyncWrapper(r6) && !s6) return void (512 & r6.shapeFlag && r6.type.__asyncResolved && r6.component.subTree.component && setRef(e4, t12, n5, r6.component.subTree));
  const o7 = 4 & r6.shapeFlag ? getComponentPublicInstance(r6.component) : r6.el, i4 = s6 ? null : o7, { i: a8, r: l5 } = e4, c4 = t12 && t12.r, u5 = a8.refs === t ? a8.refs = {} : a8.refs, p5 = a8.setupState, d5 = toRaw(p5), f4 = p5 === t ? NO : (e5) => !isTemplateRefKey(u5, e5) && hasOwn(d5, e5), canSetRef = /* @__PURE__ */ __name((e5, t13) => !t13 || !isTemplateRefKey(u5, t13), "canSetRef");
  if (null != c4 && c4 !== l5) {
    if (invalidatePendingSetRef(t12), isString(c4)) u5[c4] = null, f4(c4) && (p5[c4] = null);
    else if (isRef2(c4)) {
      const e5 = t12;
      canSetRef(0, e5.k) && (c4.value = null), e5.k && (u5[e5.k] = null);
    }
  }
  if (isFunction(l5)) callWithErrorHandling(l5, a8, 12, [i4, u5]);
  else {
    const t13 = isString(l5), r7 = isRef2(l5);
    if (t13 || r7) {
      const doSet = /* @__PURE__ */ __name(() => {
        if (e4.f) {
          const n6 = t13 ? f4(l5) ? p5[l5] : u5[l5] : canSetRef() || !e4.k ? l5.value : u5[e4.k];
          if (s6) o(n6) && remove(n6, o7);
          else if (o(n6)) n6.includes(o7) || n6.push(o7);
          else if (t13) u5[l5] = [o7], f4(l5) && (p5[l5] = u5[l5]);
          else {
            const t14 = [o7];
            canSetRef(0, e4.k) && (l5.value = t14), e4.k && (u5[e4.k] = t14);
          }
        } else t13 ? (u5[l5] = i4, f4(l5) && (p5[l5] = i4)) : r7 && (canSetRef(0, e4.k) && (l5.value = i4), e4.k && (u5[e4.k] = i4));
      }, "doSet");
      if (i4) {
        const job = /* @__PURE__ */ __name(() => {
          doSet(), zt2.delete(e4);
        }, "job");
        job.id = -1, zt2.set(e4, job), kn2(job, n5);
      } else invalidatePendingSetRef(e4), doSet();
    }
  }
}
function invalidatePendingSetRef(e4) {
  const t12 = zt2.get(e4);
  t12 && (t12.flags |= 8, zt2.delete(e4));
}
function createHydrationFunctions(e4) {
  const { mt: t12, p: n5, o: { patchProp: r6, createText: s6, nextSibling: o7, parentNode: i4, remove: a8, insert: l5, createComment: c4 } } = e4, hydrateNode = /* @__PURE__ */ __name((n6, r7, a9, c5, u5, p5 = false) => {
    p5 = p5 || !!r7.dynamicChildren;
    const d5 = isComment(n6) && "[" === n6.data, onMismatch = /* @__PURE__ */ __name(() => handleMismatch(n6, r7, a9, c5, u5, d5), "onMismatch"), { type: f4, ref: g5, shapeFlag: m5, patchFlag: y3 } = r7;
    let v3 = n6.nodeType;
    r7.el = n6, -2 === y3 && (p5 = false, r7.dynamicChildren = null);
    let _3 = null;
    switch (f4) {
      case Tn2:
        3 !== v3 ? "" === r7.children ? (l5(r7.el = s6(""), i4(n6), n6), _3 = n6) : _3 = onMismatch() : (n6.data !== r7.children && (logMismatchError(), n6.data = r7.children), _3 = o7(n6));
        break;
      case Rn2:
        isTemplateNode2(n6) ? (_3 = o7(n6), replaceNode(r7.el = n6.content.firstChild, n6, a9)) : _3 = 8 !== v3 || d5 ? onMismatch() : o7(n6);
        break;
      case An2:
        if (d5 && (v3 = (n6 = o7(n6)).nodeType), 1 === v3 || 3 === v3) {
          _3 = n6;
          const e5 = !r7.children.length;
          for (let t13 = 0; t13 < r7.staticCount; t13++) e5 && (r7.children += 1 === _3.nodeType ? _3.outerHTML : _3.data), t13 === r7.staticCount - 1 && (r7.anchor = _3), _3 = o7(_3);
          return d5 ? o7(_3) : _3;
        }
        onMismatch();
        break;
      case wn2:
        _3 = d5 ? hydrateFragment(n6, r7, a9, c5, u5, p5) : onMismatch();
        break;
      default:
        if (1 & m5) _3 = 1 === v3 && r7.type.toLowerCase() === n6.tagName.toLowerCase() || isTemplateNode2(n6) ? hydrateElement(n6, r7, a9, c5, u5, p5) : onMismatch();
        else if (6 & m5) {
          r7.slotScopeIds = u5;
          const e5 = i4(n6);
          if (_3 = d5 ? locateClosingAnchor(n6) : isComment(n6) && "teleport start" === n6.data ? locateClosingAnchor(n6, n6.data, "teleport end") : o7(n6), t12(r7, e5, null, a9, c5, getContainerType(e5), p5), isAsyncWrapper(r7) && !r7.component.subTree) {
            let t13;
            d5 ? (t13 = createVNode(An2), t13.anchor = _3 ? _3.previousSibling : e5.lastChild) : t13 = 3 === n6.nodeType ? createTextVNode("") : createVNode("div"), t13.el = n6, r7.component.subTree = t13;
          }
        } else 64 & m5 ? _3 = 8 !== v3 ? onMismatch() : r7.type.hydrate(n6, r7, a9, c5, u5, p5, e4, hydrateChildren) : 128 & m5 && (_3 = r7.type.hydrate(n6, r7, a9, c5, getContainerType(i4(n6)), u5, p5, e4, hydrateNode));
    }
    return null != g5 && setRef(g5, null, c5, r7), _3;
  }, "hydrateNode"), hydrateElement = /* @__PURE__ */ __name((e5, t13, n6, s7, o8, i5) => {
    i5 = i5 || !!t13.dynamicChildren;
    const { type: l6, dynamicProps: c5, props: u5, patchFlag: p5, shapeFlag: d5, dirs: f4, transition: g5 } = t13, m5 = "input" === l6 || "option" === l6, y3 = !!c5;
    if (m5 || y3 || -1 !== p5) {
      f4 && invokeDirectiveHook(t13, null, n6, "created");
      let l7, v3 = false;
      if (isTemplateNode2(e5)) {
        v3 = needTransition(null, g5) && n6 && n6.vnode.props && n6.vnode.props.appear;
        const r7 = e5.content.firstChild;
        if (v3) {
          const e6 = r7.getAttribute("class");
          e6 && (r7.$cls = e6), g5.beforeEnter(r7);
        }
        replaceNode(r7, e5, n6), t13.el = e5 = r7;
      }
      if (16 & d5 && (!u5 || !u5.innerHTML && !u5.textContent)) {
        let r7 = hydrateChildren(e5.firstChild, t13, e5, n6, s7, o8, i5);
        for (r7 && !isMismatchAllowed(e5, 1) && logMismatchError(); r7; ) {
          const e6 = r7;
          r7 = r7.nextSibling, a8(e6);
        }
      } else if (8 & d5) {
        let n7 = t13.children;
        "\n" !== n7[0] || "PRE" !== e5.tagName && "TEXTAREA" !== e5.tagName || (n7 = n7.slice(1));
        const { textContent: r7 } = e5;
        r7 !== n7 && r7 !== n7.replace(/\r\n|\r/g, "\n") && (isMismatchAllowed(e5, 0) || logMismatchError(), e5.textContent = t13.children);
      }
      if (u5) {
        if (m5 || y3 || !i5 || 48 & p5) {
          const t14 = e5.tagName.includes("-"), s8 = e5.namespaceURI.includes("svg") ? "svg" : e5.namespaceURI.includes("MathML") ? "mathml" : void 0;
          for (const o9 in u5) if (m5 && (o9.endsWith("value") || "indeterminate" === o9) || isOn(o9) && !s(o9) || "." === o9[0] || t14 && !s(o9) || c5 && c5.includes(o9)) {
            if (isUnchangedResourceProp(e5, o9, u5[o9])) continue;
            r6(e5, o9, null, u5[o9], s8, n6);
          }
        } else if (u5.onClick) r6(e5, "onClick", null, u5.onClick, void 0, n6);
        else if (4 & p5 && isReactive(u5.style)) for (const e6 in u5.style) u5.style[e6];
      }
      (l7 = u5 && u5.onVnodeBeforeMount) && invokeVNodeHook(l7, n6, t13), f4 && invokeDirectiveHook(t13, null, n6, "beforeMount"), ((l7 = u5 && u5.onVnodeMounted) || f4 || v3) && queueEffectWithSuspense(() => {
        l7 && invokeVNodeHook(l7, n6, t13), v3 && g5.enter(e5), f4 && invokeDirectiveHook(t13, null, n6, "mounted");
      }, s7);
    }
    return e5.nextSibling;
  }, "hydrateElement"), hydrateChildren = /* @__PURE__ */ __name((e5, t13, r7, i5, a9, c5, u5) => {
    u5 = u5 || !!t13.dynamicChildren;
    const p5 = t13.children, d5 = p5.length;
    let f4 = false;
    for (let t14 = 0; t14 < d5; t14++) {
      const g5 = u5 ? p5[t14] : p5[t14] = normalizeVNode$1(p5[t14]), m5 = g5.type === Tn2;
      e5 ? (m5 && !u5 && t14 + 1 < d5 && normalizeVNode$1(p5[t14 + 1]).type === Tn2 && (l5(s6(e5.data.slice(g5.children.length)), r7, o7(e5)), e5.data = g5.children), e5 = hydrateNode(e5, g5, i5, a9, c5, u5)) : m5 && !g5.children ? l5(g5.el = s6(""), r7) : (f4 || (f4 = true, isMismatchAllowed(r7, 1) || logMismatchError()), n5(null, g5, r7, null, i5, a9, getContainerType(r7), c5));
    }
    return e5;
  }, "hydrateChildren"), hydrateFragment = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, a9) => {
    const { slotScopeIds: u5 } = t13;
    u5 && (s7 = s7 ? s7.concat(u5) : u5);
    const p5 = i4(e5), d5 = hydrateChildren(o7(e5), t13, p5, n6, r7, s7, a9);
    return d5 && isComment(d5) && "]" === d5.data ? o7(t13.anchor = d5) : (logMismatchError(), l5(t13.anchor = c4("]"), p5, d5), d5);
  }, "hydrateFragment"), handleMismatch = /* @__PURE__ */ __name((e5, t13, r7, s7, l6, c5) => {
    if ((function(e6, t14) {
      return isMismatchAllowed(e6.parentElement, 1) || (function(e7) {
        return 1 === e7.nodeType && isMismatchAllowedByAttr(e7.getAttribute(Jt2), 1);
      })(e6) || (function({ props: e7 }) {
        const t15 = e7 && e7[Jt2];
        return "string" == typeof t15 && isMismatchAllowedByAttr(t15, 1);
      })(t14);
    })(e5, t13) || logMismatchError(), t13.el = null, c5) {
      const t14 = locateClosingAnchor(e5);
      for (; ; ) {
        const n6 = o7(e5);
        if (!n6 || n6 === t14) break;
        a8(n6);
      }
    }
    const u5 = o7(e5), p5 = i4(e5);
    return a8(e5), n5(null, t13, p5, u5, r7, s7, getContainerType(p5), l6), r7 && (r7.vnode.el = t13.el, updateHOCHostEl(r7, t13.el)), u5;
  }, "handleMismatch"), locateClosingAnchor = /* @__PURE__ */ __name((e5, t13 = "[", n6 = "]") => {
    let r7 = 0;
    for (; e5; ) if ((e5 = o7(e5)) && isComment(e5) && (e5.data === t13 && r7++, e5.data === n6)) {
      if (0 === r7) return o7(e5);
      r7--;
    }
    return e5;
  }, "locateClosingAnchor"), replaceNode = /* @__PURE__ */ __name((e5, t13, n6) => {
    const r7 = t13.parentNode;
    r7 && r7.replaceChild(e5, t13);
    let s7 = n6;
    for (; s7; ) s7.vnode.el === t13 && (s7.vnode.el = s7.subTree.el = e5), s7 = s7.parent;
  }, "replaceNode"), isTemplateNode2 = /* @__PURE__ */ __name((e5) => 1 === e5.nodeType && "TEMPLATE" === e5.tagName, "isTemplateNode");
  return [(e5, t13) => {
    if (!t13.hasChildNodes()) return n5(null, e5, t13), flushPostFlushCbs(), void (t13._vnode = e5);
    hydrateNode(t13.firstChild, e5, null, null, null), flushPostFlushCbs(), t13._vnode = e5;
  }, hydrateNode];
}
function isUnchangedResourceProp(e4, t12, n5) {
  return !!qt2.has(t12) && e4.getAttribute(t12) === (null == n5 ? null : `${n5}`);
}
function isMismatchAllowed(e4, t12) {
  if (0 === t12 || 1 === t12) for (; e4 && !e4.hasAttribute(Jt2); ) e4 = e4.parentElement;
  return isMismatchAllowedByAttr(e4 && e4.getAttribute(Jt2), t12);
}
function isMismatchAllowedByAttr(e4, t12) {
  if (null == e4) return false;
  if ("" === e4) return true;
  {
    const n5 = e4.split(",");
    return !(0 !== t12 || !n5.includes("children")) || n5.includes(Gt2[t12]);
  }
}
function createInnerComp(e4, t12) {
  const { ref: n5, props: r6, children: s6, ce: o7 } = t12.vnode, i4 = createVNode(e4, r6, s6);
  return i4.ref = n5, i4.ce = o7, delete t12.vnode.ce, i4;
}
function matches(e4, t12) {
  return o(e4) ? e4.some((e5) => matches(e5, t12)) : isString(e4) ? e4.split(",").includes(t12) : !!isRegExp(e4) && (e4.lastIndex = 0, e4.test(t12));
}
function onActivated(e4, t12) {
  registerKeepAliveHook(e4, "a", t12);
}
function onDeactivated(e4, t12) {
  registerKeepAliveHook(e4, "da", t12);
}
function registerKeepAliveHook(e4, t12, n5 = Nn2) {
  const r6 = e4.__wdc || (e4.__wdc = () => {
    let t13 = n5;
    for (; t13; ) {
      if (t13.isDeactivated) return;
      t13 = t13.parent;
    }
    return e4();
  });
  if (injectHook(t12, r6, n5), n5) {
    let e5 = n5.parent;
    for (; e5 && e5.parent; ) isKeepAlive(e5.parent.vnode) && injectToKeepAliveRoot(r6, t12, n5, e5), e5 = e5.parent;
  }
}
function injectToKeepAliveRoot(e4, t12, n5, r6) {
  const s6 = injectHook(t12, e4, r6, true);
  sn2(() => {
    remove(r6[t12], s6);
  }, n5);
}
function resetShapeFlag(e4) {
  e4.shapeFlag &= -257, e4.shapeFlag &= -513;
}
function getInnerChild(e4) {
  return 128 & e4.shapeFlag ? e4.ssContent : e4;
}
function injectHook(e4, t12, n5 = Nn2, r6 = false) {
  if (n5) {
    const s6 = n5[e4] || (n5[e4] = []), o7 = t12.__weh || (t12.__weh = (...r7) => {
      pauseTracking();
      const s7 = setCurrentInstance(n5), o8 = callWithAsyncErrorHandling(t12, n5, e4, r7);
      return s7(), resetTracking(), o8;
    });
    return r6 ? s6.unshift(o7) : s6.push(o7), o7;
  }
}
function onErrorCaptured(e4, t12 = Nn2) {
  injectHook("ec", e4, t12);
}
function resolveAsset(e4, t12, n5 = true, r6 = false) {
  const s6 = Ht2 || Nn2;
  if (s6) {
    const n6 = s6.type;
    if (e4 === cn2) {
      const e5 = getComponentName(n6, false);
      if (e5 && (e5 === t12 || e5 === p(t12) || e5 === f(p(t12)))) return n6;
    }
    const o7 = resolve$1(s6[e4] || n6[e4], t12) || resolve$1(s6.appContext[e4], t12);
    return !o7 && r6 ? n6 : o7;
  }
}
function resolve$1(e4, t12) {
  return e4 && (e4[t12] || e4[p(t12)] || e4[f(p(t12))]);
}
function ensureValidVNode$1(e4) {
  return e4.some((e5) => !isVNode$2(e5) || e5.type !== Rn2 && !(e5.type === wn2 && !ensureValidVNode$1(e5.children))) ? e4 : null;
}
function getContext(e4) {
  const t12 = getCurrentInstance();
  return t12.setupContext || (t12.setupContext = createSetupContext(t12));
}
function normalizePropsOrEmits(e4) {
  return o(e4) ? e4.reduce((e5, t12) => (e5[t12] = null, e5), {}) : e4;
}
function applyOptions(e4) {
  const t12 = resolveMergedOptions(e4), n5 = e4.proxy, r6 = e4.ctx;
  hn2 = false, t12.beforeCreate && callHook$1(t12.beforeCreate, e4, "bc");
  const { data: s6, computed: o7, methods: i4, watch: a8, provide: l5, inject: c4, created: u5, beforeMount: p5, mounted: d5, beforeUpdate: f4, updated: m5, activated: y3, deactivated: v3, beforeDestroy: _3, beforeUnmount: S3, destroyed: C3, unmounted: w5, render: T3, renderTracked: R3, renderTriggered: A3, errorCaptured: x5, serverPrefetch: P3, expose: O3, inheritAttrs: $3, components: N3, directives: H2, filters: M3 } = t12;
  if (c4 && (function(e5, t13) {
    o(e5) && (e5 = normalizeInject(e5));
    for (const n6 in e5) {
      const r7 = e5[n6];
      let s7;
      s7 = isObject(r7) ? "default" in r7 ? inject(r7.from || n6, r7.default, true) : inject(r7.from || n6) : inject(r7), isRef2(s7) ? Object.defineProperty(t13, n6, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => s7.value, "get"), set: /* @__PURE__ */ __name((e6) => s7.value = e6, "set") }) : t13[n6] = s7;
    }
  })(c4, r6, null), i4) for (const e5 in i4) {
    const t13 = i4[e5];
    isFunction(t13) && (r6[e5] = t13.bind(n5));
  }
  if (s6) {
    const t13 = s6.call(n5, n5);
    isObject(t13) && (e4.data = reactive(t13));
  }
  if (hn2 = true, o7) for (const e5 in o7) {
    const t13 = o7[e5], s7 = isFunction(t13) ? t13.bind(n5, n5) : isFunction(t13.get) ? t13.get.bind(n5, n5) : NOOP, i5 = !isFunction(t13) && isFunction(t13.set) ? t13.set.bind(n5) : NOOP, a9 = computed({ get: s7, set: i5 });
    Object.defineProperty(r6, e5, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => a9.value, "get"), set: /* @__PURE__ */ __name((e6) => a9.value = e6, "set") });
  }
  if (a8) for (const e5 in a8) createWatcher(a8[e5], r6, n5, e5);
  if (l5) {
    const e5 = isFunction(l5) ? l5.call(n5) : l5;
    Reflect.ownKeys(e5).forEach((t13) => {
      provide(t13, e5[t13]);
    });
  }
  function registerLifecycleHook(e5, t13) {
    o(t13) ? t13.forEach((t14) => e5(t14.bind(n5))) : t13 && e5(t13.bind(n5));
  }
  __name(registerLifecycleHook, "registerLifecycleHook");
  if (u5 && callHook$1(u5, e4, "c"), registerLifecycleHook(Qt2, p5), registerLifecycleHook(en2, d5), registerLifecycleHook(tn2, f4), registerLifecycleHook(nn2, m5), registerLifecycleHook(onActivated, y3), registerLifecycleHook(onDeactivated, v3), registerLifecycleHook(onErrorCaptured, x5), registerLifecycleHook(ln2, R3), registerLifecycleHook(an2, A3), registerLifecycleHook(rn, S3), registerLifecycleHook(sn2, w5), registerLifecycleHook(on3, P3), o(O3)) if (O3.length) {
    const t13 = e4.exposed || (e4.exposed = {});
    O3.forEach((e5) => {
      Object.defineProperty(t13, e5, { get: /* @__PURE__ */ __name(() => n5[e5], "get"), set: /* @__PURE__ */ __name((t14) => n5[e5] = t14, "set"), enumerable: true });
    });
  } else e4.exposed || (e4.exposed = {});
  T3 && e4.render === NOOP && (e4.render = T3), null != $3 && (e4.inheritAttrs = $3), N3 && (e4.components = N3), H2 && (e4.directives = H2), P3 && markAsyncBoundary(e4);
}
function callHook$1(e4, t12, n5) {
  callWithAsyncErrorHandling(o(e4) ? e4.map((e5) => e5.bind(t12.proxy)) : e4.bind(t12.proxy), t12, n5);
}
function createWatcher(e4, t12, n5, r6) {
  let s6 = r6.includes(".") ? createPathGetter(n5, r6) : () => n5[r6];
  if (isString(e4)) {
    const n6 = t12[e4];
    isFunction(n6) && watch(s6, n6);
  } else if (isFunction(e4)) watch(s6, e4.bind(n5));
  else if (isObject(e4)) if (o(e4)) e4.forEach((e5) => createWatcher(e5, t12, n5, r6));
  else {
    const r7 = isFunction(e4.handler) ? e4.handler.bind(n5) : t12[e4.handler];
    isFunction(r7) && watch(s6, r7, e4);
  }
}
function resolveMergedOptions(e4) {
  const t12 = e4.type, { mixins: n5, extends: r6 } = t12, { mixins: s6, optionsCache: o7, config: { optionMergeStrategies: i4 } } = e4.appContext, a8 = o7.get(t12);
  let l5;
  return a8 ? l5 = a8 : s6.length || n5 || r6 ? (l5 = {}, s6.length && s6.forEach((e5) => mergeOptions2(l5, e5, i4, true)), mergeOptions2(l5, t12, i4)) : l5 = t12, isObject(t12) && o7.set(t12, l5), l5;
}
function mergeOptions2(e4, t12, n5, r6 = false) {
  const { mixins: s6, extends: o7 } = t12;
  o7 && mergeOptions2(e4, o7, n5, true), s6 && s6.forEach((t13) => mergeOptions2(e4, t13, n5, true));
  for (const s7 in t12) if (r6 && "expose" === s7) ;
  else {
    const r7 = gn2[s7] || n5 && n5[s7];
    e4[s7] = r7 ? r7(e4[s7], t12[s7]) : t12[s7];
  }
  return e4;
}
function mergeDataFn(e4, t12) {
  return t12 ? e4 ? function() {
    return n(isFunction(e4) ? e4.call(this, this) : e4, isFunction(t12) ? t12.call(this, this) : t12);
  } : t12 : e4;
}
function normalizeInject(e4) {
  if (o(e4)) {
    const t12 = {};
    for (let n5 = 0; n5 < e4.length; n5++) t12[e4[n5]] = e4[n5];
    return t12;
  }
  return e4;
}
function mergeAsArray2(e4, t12) {
  return e4 ? [...new Set([].concat(e4, t12))] : t12;
}
function mergeObjectOptions(e4, t12) {
  return e4 ? n(/* @__PURE__ */ Object.create(null), e4, t12) : t12;
}
function mergeEmitsOrPropsOptions(e4, t12) {
  return e4 ? o(e4) && o(t12) ? [.../* @__PURE__ */ new Set([...e4, ...t12])] : n(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e4), normalizePropsOrEmits(null != t12 ? t12 : {})) : t12;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e4, t12) {
  return function(n5, r6 = null) {
    isFunction(n5) || (n5 = n({}, n5)), null == r6 || isObject(r6) || (r6 = null);
    const s6 = createAppContext(), o7 = /* @__PURE__ */ new WeakSet(), i4 = [];
    let a8 = false;
    const l5 = s6.app = { _uid: mn2++, _component: n5, _props: r6, _container: null, _context: s6, _instance: null, version: jn2, get config() {
      return s6.config;
    }, set config(e5) {
    }, use: /* @__PURE__ */ __name((e5, ...t13) => (o7.has(e5) || (e5 && isFunction(e5.install) ? (o7.add(e5), e5.install(l5, ...t13)) : isFunction(e5) && (o7.add(e5), e5(l5, ...t13))), l5), "use"), mixin: /* @__PURE__ */ __name((e5) => (s6.mixins.includes(e5) || s6.mixins.push(e5), l5), "mixin"), component: /* @__PURE__ */ __name((e5, t13) => t13 ? (s6.components[e5] = t13, l5) : s6.components[e5], "component"), directive: /* @__PURE__ */ __name((e5, t13) => t13 ? (s6.directives[e5] = t13, l5) : s6.directives[e5], "directive"), mount(o8, i5, c4) {
      if (!a8) {
        const u5 = l5._ceVNode || createVNode(n5, r6);
        return u5.appContext = s6, true === c4 ? c4 = "svg" : false === c4 && (c4 = void 0), i5 && t12 ? t12(u5, o8) : e4(u5, o8, c4), a8 = true, l5._container = o8, o8.__vue_app__ = l5, getComponentPublicInstance(u5.component);
      }
    }, onUnmount(e5) {
      i4.push(e5);
    }, unmount() {
      a8 && (callWithAsyncErrorHandling(i4, l5._instance, 16), e4(null, l5._container), delete l5._container.__vue_app__);
    }, provide: /* @__PURE__ */ __name((e5, t13) => (s6.provides[e5] = t13, l5), "provide"), runWithContext(e5) {
      const t13 = yn2;
      yn2 = l5;
      try {
        return e5();
      } finally {
        yn2 = t13;
      }
    } };
    return l5;
  };
}
function emit2(e4, t12, ...n5) {
  if (e4.isUnmounted) return;
  const r6 = e4.vnode.props || t;
  let s6 = n5;
  const o7 = t12.startsWith("update:"), i4 = o7 && getModelModifiers(r6, t12.slice(7));
  let a8;
  i4 && (i4.trim && (s6 = n5.map((e5) => isString(e5) ? e5.trim() : e5)), i4.number && (s6 = s6.map(looseToNumber)));
  let l5 = r6[a8 = u(t12)] || r6[a8 = u(p(t12))];
  !l5 && o7 && (l5 = r6[a8 = u(d(t12))]), l5 && callWithAsyncErrorHandling(l5, e4, 6, s6);
  const c4 = r6[a8 + "Once"];
  if (c4) {
    if (e4.emitted) {
      if (e4.emitted[a8]) return;
    } else e4.emitted = {};
    e4.emitted[a8] = true, callWithAsyncErrorHandling(c4, e4, 6, s6);
  }
}
function normalizeEmitsOptions(e4, t12, n5 = false) {
  const r6 = n5 ? vn2 : t12.emitsCache, s6 = r6.get(e4);
  if (void 0 !== s6) return s6;
  const o7 = e4.emits;
  let i4 = {}, a8 = false;
  if (!isFunction(e4)) {
    const extendEmits = /* @__PURE__ */ __name((e5) => {
      const n6 = normalizeEmitsOptions(e5, t12, true);
      n6 && (a8 = true, n(i4, n6));
    }, "extendEmits");
    !n5 && t12.mixins.length && t12.mixins.forEach(extendEmits), e4.extends && extendEmits(e4.extends), e4.mixins && e4.mixins.forEach(extendEmits);
  }
  return o7 || a8 ? (o(o7) ? o7.forEach((e5) => i4[e5] = null) : n(i4, o7), isObject(e4) && r6.set(e4, i4), i4) : (isObject(e4) && r6.set(e4, null), null);
}
function isEmitListener(e4, t12) {
  return !(!e4 || !isOn(t12)) && (t12 = "Once" === (t12 = t12.slice(2)) ? t12 : t12.replace(/Once$/, ""), hasOwn(e4, t12[0].toLowerCase() + t12.slice(1)) || hasOwn(e4, d(t12)) || hasOwn(e4, t12));
}
function renderComponentRoot$1(e4) {
  const { type: t12, vnode: n5, proxy: r6, withProxy: s6, propsOptions: [o7], slots: i4, attrs: a8, emit: l5, render: c4, renderCache: u5, props: p5, data: d5, setupState: f4, ctx: g5, inheritAttrs: m5 } = e4, y3 = setCurrentRenderingInstance$1(e4);
  let v3, _3;
  try {
    if (4 & n5.shapeFlag) {
      const e5 = s6 || r6, t13 = e5;
      v3 = normalizeVNode$1(c4.call(t13, e5, u5, p5, f4, d5, g5)), _3 = a8;
    } else {
      const e5 = t12;
      0, v3 = normalizeVNode$1(e5.length > 1 ? e5(p5, { attrs: a8, slots: i4, emit: l5 }) : e5(p5, null)), _3 = t12.props ? a8 : getFunctionalFallthrough(a8);
    }
  } catch (t13) {
    xn2.length = 0, handleError(t13, e4, 1), v3 = createVNode(Rn2);
  }
  let b5 = v3;
  if (_3 && false !== m5) {
    const e5 = Object.keys(_3), { shapeFlag: t13 } = b5;
    e5.length && 7 & t13 && (o7 && e5.some(isModelListener) && (_3 = filterModelListeners(_3, o7)), b5 = cloneVNode(b5, _3, false, true));
  }
  if (n5.dirs && (b5 = cloneVNode(b5, null, false, true), b5.dirs = b5.dirs ? b5.dirs.concat(n5.dirs) : n5.dirs), n5.transition) {
    setTransitionHooks(isTeleport(b5.type) && getInnerChild$1(b5) || b5, n5.transition);
  }
  return v3 = b5, setCurrentRenderingInstance$1(y3), v3;
}
function hasPropsChanged(e4, t12, n5) {
  const r6 = Object.keys(t12);
  if (r6.length !== Object.keys(e4).length) return true;
  for (let s6 = 0; s6 < r6.length; s6++) {
    const o7 = r6[s6];
    if (hasPropValueChanged(t12, e4, o7) && !isEmitListener(n5, o7)) return true;
  }
  return false;
}
function hasPropValueChanged(e4, t12, n5) {
  const r6 = e4[n5], s6 = t12[n5];
  return "style" === n5 && isObject(r6) && isObject(s6) ? !looseEqual(r6, s6) : r6 !== s6;
}
function updateHOCHostEl({ vnode: e4, parent: t12, suspense: n5 }, r6) {
  for (; t12; ) {
    const n6 = t12.subTree;
    if (n6.suspense && n6.suspense.activeBranch === e4 && (n6.suspense.vnode.el = n6.el = r6, e4 = n6), n6 !== e4) break;
    (e4 = t12.vnode).el = r6, t12 = t12.parent;
  }
  n5 && n5.activeBranch === e4 && (n5.vnode.el = r6);
}
function setFullProps(e4, t12, n5, r6) {
  const [s6, o7] = e4.propsOptions;
  let i4, a8 = false;
  if (t12) for (let l5 in t12) {
    if (s(l5)) continue;
    const c4 = t12[l5];
    let u5;
    s6 && hasOwn(s6, u5 = p(l5)) ? o7 && o7.includes(u5) ? (i4 || (i4 = {}))[u5] = c4 : n5[u5] = c4 : isEmitListener(e4.emitsOptions, l5) || l5 in r6 && c4 === r6[l5] || (r6[l5] = c4, a8 = true);
  }
  if (o7) {
    const t13 = toRaw(n5), r7 = i4 || t;
    for (let i5 = 0; i5 < o7.length; i5++) {
      const a9 = o7[i5];
      n5[a9] = resolvePropValue(s6, t13, a9, r7[a9], e4, !hasOwn(r7, a9));
    }
  }
  return a8;
}
function resolvePropValue(e4, t12, n5, r6, s6, o7) {
  const i4 = e4[n5];
  if (null != i4) {
    const e5 = hasOwn(i4, "default");
    if (e5 && void 0 === r6) {
      const e6 = i4.default;
      if (i4.type !== Function && !i4.skipFactory && isFunction(e6)) {
        const { propsDefaults: o8 } = s6;
        if (n5 in o8) r6 = o8[n5];
        else {
          const i5 = setCurrentInstance(s6);
          r6 = o8[n5] = e6.call(null, t12), i5();
        }
      } else r6 = e6;
      s6.ce && s6.ce._setProp(n5, r6);
    }
    i4[0] && (o7 && !e5 ? r6 = false : !i4[1] || "" !== r6 && r6 !== d(n5) || (r6 = true));
  }
  return r6;
}
function normalizePropsOptions(e4, t12, n5 = false) {
  const r6 = n5 ? bn2 : t12.propsCache, s6 = r6.get(e4);
  if (s6) return s6;
  const o7 = e4.props, i4 = {}, a8 = [];
  let l5 = false;
  if (!isFunction(e4)) {
    const extendProps = /* @__PURE__ */ __name((e5) => {
      l5 = true;
      const [n6, r7] = normalizePropsOptions(e5, t12, true);
      n(i4, n6), r7 && a8.push(...r7);
    }, "extendProps");
    !n5 && t12.mixins.length && t12.mixins.forEach(extendProps), e4.extends && extendProps(e4.extends), e4.mixins && e4.mixins.forEach(extendProps);
  }
  if (!o7 && !l5) return isObject(e4) && r6.set(e4, a), a;
  if (o(o7)) for (let e5 = 0; e5 < o7.length; e5++) {
    const t13 = p(o7[e5]);
    validatePropName(t13) && (i4[t13] = t);
  }
  else if (o7) for (const e5 in o7) {
    const t13 = p(e5);
    if (validatePropName(t13)) {
      const n6 = o7[e5], r7 = i4[t13] = o(n6) || isFunction(n6) ? { type: n6 } : n({}, n6), s7 = r7.type;
      let l6 = false, c5 = true;
      if (o(s7)) for (let e6 = 0; e6 < s7.length; ++e6) {
        const t14 = s7[e6], n7 = isFunction(t14) && t14.name;
        if ("Boolean" === n7) {
          l6 = true;
          break;
        }
        "String" === n7 && (c5 = false);
      }
      else l6 = isFunction(s7) && "Boolean" === s7.name;
      r7[0] = l6, r7[1] = c5, (l6 || hasOwn(r7, "default")) && a8.push(t13);
    }
  }
  const c4 = [i4, a8];
  return isObject(e4) && r6.set(e4, c4), c4;
}
function validatePropName(e4) {
  return "$" !== e4[0] && !s(e4);
}
function createRenderer$1(e4) {
  return baseCreateRenderer(e4);
}
function createHydrationRenderer(e4) {
  return baseCreateRenderer(e4, createHydrationFunctions);
}
function baseCreateRenderer(e4, t12) {
  getGlobalThis().__VUE__ = true;
  const { insert: n5, remove: r6, patchProp: s6, createElement: o7, createText: i4, createComment: a8, setText: l5, setElementText: c4, parentNode: u5, nextSibling: p5, setScopeId: d5 = NOOP, insertStaticContent: f4 } = e4, patch = /* @__PURE__ */ __name((e5, t13, n6, r7 = null, s7 = null, o8 = null, i5 = void 0, a9 = null, l6 = !!t13.dynamicChildren) => {
    if (e5 === t13) return;
    e5 && !isSameVNodeType(e5, t13) && (r7 = getNextHostNode(e5), unmount(e5, s7, o8, true), e5 = null), -2 === t13.patchFlag && (l6 = false, t13.dynamicChildren = null);
    const { type: c5, ref: u6, shapeFlag: p6 } = t13;
    switch (c5) {
      case Tn2:
        processText(e5, t13, n6, r7);
        break;
      case Rn2:
        processCommentNode(e5, t13, n6, r7);
        break;
      case An2:
        null == e5 && mountStaticNode(t13, n6, r7, i5);
        break;
      case wn2:
        processFragment(e5, t13, n6, r7, s7, o8, i5, a9, l6);
        break;
      default:
        1 & p6 ? processElement(e5, t13, n6, r7, s7, o8, i5, a9, l6) : 6 & p6 ? processComponent(e5, t13, n6, r7, s7, o8, i5, a9, l6) : (64 & p6 || 128 & p6) && c5.process(e5, t13, n6, r7, s7, o8, i5, a9, l6, m5);
    }
    null != u6 && s7 ? setRef(u6, e5 && e5.ref, o8, t13 || e5, !t13) : null == u6 && e5 && null != e5.ref && setRef(e5.ref, null, o8, e5, true);
  }, "patch"), processText = /* @__PURE__ */ __name((e5, t13, r7, s7) => {
    if (null == e5) n5(t13.el = i4(t13.children), r7, s7);
    else {
      const n6 = t13.el = e5.el;
      t13.children !== e5.children && l5(n6, t13.children);
    }
  }, "processText"), processCommentNode = /* @__PURE__ */ __name((e5, t13, r7, s7) => {
    null == e5 ? n5(t13.el = a8(t13.children || ""), r7, s7) : t13.el = e5.el;
  }, "processCommentNode"), mountStaticNode = /* @__PURE__ */ __name((e5, t13, n6, r7) => {
    [e5.el, e5.anchor] = f4(e5.children, t13, n6, r7, e5.el, e5.anchor);
  }, "mountStaticNode"), processElement = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5, a9, l6) => {
    if ("svg" === t13.type ? i5 = "svg" : "math" === t13.type && (i5 = "mathml"), null == e5) mountElement(t13, n6, r7, s7, o8, i5, a9, l6);
    else {
      const n7 = e5.el && e5.el._isVueCE ? e5.el : null;
      try {
        n7 && n7._beginPatch(), patchElement(e5, t13, s7, o8, i5, a9, l6);
      } finally {
        n7 && n7._endPatch();
      }
    }
  }, "processElement"), mountElement = /* @__PURE__ */ __name((e5, t13, r7, i5, a9, l6, u6, p6) => {
    let d6, f5;
    const { props: g6, shapeFlag: m6, transition: y3, dirs: v4 } = e5;
    if (d6 = e5.el = o7(e5.type, l6, g6 && g6.is, g6), 8 & m6 ? c4(d6, e5.children) : 16 & m6 && mountChildren(e5.children, d6, null, i5, a9, resolveChildrenNamespace(e5, l6), u6, p6), v4 && invokeDirectiveHook(e5, null, i5, "created"), setScopeId(d6, e5, e5.scopeId, u6, i5), g6) {
      for (const e6 in g6) "value" === e6 || s(e6) || s6(d6, e6, null, g6[e6], l6, i5);
      "value" in g6 && s6(d6, "value", null, g6.value, l6), (f5 = g6.onVnodeBeforeMount) && invokeVNodeHook(f5, i5, e5);
    }
    v4 && invokeDirectiveHook(e5, null, i5, "beforeMount");
    const _3 = needTransition(a9, y3);
    _3 && y3.beforeEnter(d6), n5(d6, t13, r7), ((f5 = g6 && g6.onVnodeMounted) || _3 || v4) && kn2(() => {
      try {
        f5 && invokeVNodeHook(f5, i5, e5), _3 && y3.enter(d6), v4 && invokeDirectiveHook(e5, null, i5, "mounted");
      } finally {
      }
    }, a9);
  }, "mountElement"), setScopeId = /* @__PURE__ */ __name((e5, t13, n6, r7, s7) => {
    if (n6 && d5(e5, n6), r7) for (let t14 = 0; t14 < r7.length; t14++) d5(e5, r7[t14]);
    if (s7) {
      let n7 = s7.subTree;
      if (t13 === n7 || isSuspense(n7.type) && (n7.ssContent === t13 || n7.ssFallback === t13)) {
        const t14 = s7.vnode;
        setScopeId(e5, t14, t14.scopeId, t14.slotScopeIds, s7.parent);
      }
    }
  }, "setScopeId"), mountChildren = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5, a9, l6 = 0) => {
    for (let c5 = l6; c5 < e5.length; c5++) {
      const l7 = e5[c5] = a9 ? cloneIfMounted(e5[c5]) : normalizeVNode$1(e5[c5]);
      patch(null, l7, t13, n6, r7, s7, o8, i5, a9);
    }
  }, "mountChildren"), patchElement = /* @__PURE__ */ __name((e5, t13, n6, r7, o8, i5, a9) => {
    const l6 = t13.el = e5.el;
    let { patchFlag: u6, dynamicChildren: p6, dirs: d6 } = t13;
    u6 |= 16 & e5.patchFlag;
    const f5 = e5.props || t, g6 = t13.props || t;
    let m6;
    if (n6 && toggleRecurse(n6, false), (m6 = g6.onVnodeBeforeUpdate) && invokeVNodeHook(m6, n6, t13, e5), d6 && invokeDirectiveHook(t13, e5, n6, "beforeUpdate"), n6 && toggleRecurse(n6, true), !p6 || e5.dynamicChildren && e5.dynamicChildren.length === p6.length || (u6 = 0, a9 = false, p6 = null), (f5.innerHTML && null == g6.innerHTML || f5.textContent && null == g6.textContent) && c4(l6, ""), p6 ? patchBlockChildren(e5.dynamicChildren, p6, l6, n6, r7, resolveChildrenNamespace(t13, o8), i5) : a9 || patchChildren(e5, t13, l6, null, n6, r7, resolveChildrenNamespace(t13, o8), i5, false), u6 > 0) {
      if (16 & u6) patchProps(l6, f5, g6, n6, o8);
      else if (2 & u6 && f5.class !== g6.class && s6(l6, "class", null, g6.class, o8), 4 & u6 && s6(l6, "style", f5.style, g6.style, o8), 8 & u6) {
        const e6 = t13.dynamicProps;
        for (let t14 = 0; t14 < e6.length; t14++) {
          const r8 = e6[t14], i6 = f5[r8], a10 = g6[r8];
          a10 === i6 && "value" !== r8 || s6(l6, r8, i6, a10, o8, n6);
        }
      }
      1 & u6 && e5.children !== t13.children && c4(l6, t13.children);
    } else a9 || null != p6 || patchProps(l6, f5, g6, n6, o8);
    ((m6 = g6.onVnodeUpdated) || d6) && kn2(() => {
      m6 && invokeVNodeHook(m6, n6, t13, e5), d6 && invokeDirectiveHook(t13, e5, n6, "updated");
    }, r7);
  }, "patchElement"), patchBlockChildren = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5) => {
    for (let a9 = 0; a9 < t13.length; a9++) {
      const l6 = e5[a9], c5 = t13[a9], p6 = l6.el && (l6.type === wn2 || !isSameVNodeType(l6, c5) || 198 & l6.shapeFlag) ? u5(l6.el) : n6;
      patch(l6, c5, p6, null, r7, s7, o8, i5, true);
    }
  }, "patchBlockChildren"), patchProps = /* @__PURE__ */ __name((e5, t13, n6, r7, o8) => {
    if (t13 !== n6) {
      if (t13 !== t) for (const i5 in t13) s(i5) || i5 in n6 || s6(e5, i5, t13[i5], null, o8, r7);
      for (const i5 in n6) {
        if (s(i5)) continue;
        const a9 = n6[i5], l6 = t13[i5];
        a9 !== l6 && "value" !== i5 && s6(e5, i5, l6, a9, o8, r7);
      }
      "value" in n6 && s6(e5, "value", t13.value, n6.value, o8);
    }
  }, "patchProps"), processFragment = /* @__PURE__ */ __name((e5, t13, r7, s7, o8, a9, l6, c5, u6) => {
    const p6 = t13.el = e5 ? e5.el : i4(""), d6 = t13.anchor = e5 ? e5.anchor : i4("");
    let { patchFlag: f5, dynamicChildren: g6, slotScopeIds: m6 } = t13;
    m6 && (c5 = c5 ? c5.concat(m6) : m6), null == e5 ? (n5(p6, r7, s7), n5(d6, r7, s7), mountChildren(t13.children || [], r7, d6, o8, a9, l6, c5, u6)) : f5 > 0 && 64 & f5 && g6 && e5.dynamicChildren && e5.dynamicChildren.length === g6.length ? (patchBlockChildren(e5.dynamicChildren, g6, r7, o8, a9, l6, c5), (null != t13.key || o8 && t13 === o8.subTree) && traverseStaticChildren(e5, t13, true)) : patchChildren(e5, t13, r7, d6, o8, a9, l6, c5, u6);
  }, "processFragment"), processComponent = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5, a9, l6) => {
    t13.slotScopeIds = a9, null == e5 ? 512 & t13.shapeFlag ? s7.ctx.activate(t13, n6, r7, i5, l6) : mountComponent(t13, n6, r7, s7, o8, i5, l6) : updateComponent(e5, t13, l6);
  }, "processComponent"), mountComponent = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5) => {
    const a9 = e5.component = createComponentInstance$1(e5, r7, s7);
    if (isKeepAlive(e5) && (a9.ctx.renderer = m5), setupComponent$1(a9, false, i5), a9.asyncDep) {
      if (s7 && s7.registerDep(a9, setupRenderEffect, i5), !e5.el) {
        const r8 = a9.subTree = createVNode(Rn2);
        processCommentNode(null, r8, t13, n6), e5.placeholder = r8.el;
      }
    } else setupRenderEffect(a9, e5, t13, n6, s7, o8, i5);
  }, "mountComponent"), updateComponent = /* @__PURE__ */ __name((e5, t13, n6) => {
    const r7 = t13.component = e5.component;
    if ((function(e6, t14, n7) {
      const { props: r8, children: s7, component: o8 } = e6, { props: i5, children: a9, patchFlag: l6 } = t14, c5 = o8.emitsOptions;
      if (t14.dirs || t14.transition) return true;
      if (!(n7 && l6 >= 0)) return !(!s7 && !a9 || a9 && a9.$stable) || r8 !== i5 && (r8 ? !i5 || hasPropsChanged(r8, i5, c5) : !!i5);
      if (1024 & l6) return true;
      if (16 & l6) return r8 ? hasPropsChanged(r8, i5, c5) : !!i5;
      if (8 & l6) {
        const e7 = t14.dynamicProps;
        for (let t15 = 0; t15 < e7.length; t15++) {
          const n8 = e7[t15];
          if (hasPropValueChanged(i5, r8, n8) && !isEmitListener(c5, n8)) return true;
        }
      }
      return false;
    })(e5, t13, n6)) {
      if (r7.asyncDep && !r7.asyncResolved) return void updateComponentPreRender(r7, t13, n6);
      r7.next = t13, r7.update();
    } else t13.el = e5.el, r7.vnode = t13;
  }, "updateComponent"), setupRenderEffect = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5) => {
    e5.scope.on();
    const a9 = e5.effect = new ReactiveEffect(() => {
      if (e5.isMounted) {
        let { next: t14, bu: n7, u: r8, parent: a10, vnode: c6 } = e5;
        {
          const n8 = locateNonHydratedAsyncRoot(e5);
          if (n8) return t14 && (t14.el = c6.el, updateComponentPreRender(e5, t14, i5)), void n8.asyncDep.then(() => {
            kn2(() => {
              e5.isUnmounted || l6();
            }, s7);
          });
        }
        let p6, d6 = t14;
        toggleRecurse(e5, false), t14 ? (t14.el = c6.el, updateComponentPreRender(e5, t14, i5)) : t14 = c6, n7 && invokeArrayFns(n7), (p6 = t14.props && t14.props.onVnodeBeforeUpdate) && invokeVNodeHook(p6, a10, t14, c6), toggleRecurse(e5, true);
        const f5 = renderComponentRoot$1(e5), g6 = e5.subTree;
        e5.subTree = f5, patch(g6, f5, u5(g6.el), getNextHostNode(g6), e5, s7, o8), t14.el = f5.el, null === d6 && updateHOCHostEl(e5, f5.el), r8 && kn2(r8, s7), (p6 = t14.props && t14.props.onVnodeUpdated) && kn2(() => invokeVNodeHook(p6, a10, t14, c6), s7);
      } else {
        let i6;
        const { el: a10, props: l7 } = t13, { bm: c6, m: u6, parent: p6, root: d6, type: f5 } = e5, g6 = isAsyncWrapper(t13);
        if (toggleRecurse(e5, false), c6 && invokeArrayFns(c6), !g6 && (i6 = l7 && l7.onVnodeBeforeMount) && invokeVNodeHook(i6, p6, t13), toggleRecurse(e5, true), a10 && b5) {
          const hydrateSubTree = /* @__PURE__ */ __name(() => {
            e5.subTree = renderComponentRoot$1(e5), b5(a10, e5.subTree, e5, s7, null);
          }, "hydrateSubTree");
          g6 && f5.__asyncHydrate ? f5.__asyncHydrate(a10, e5, hydrateSubTree) : hydrateSubTree();
        } else {
          d6.ce && d6.ce._hasShadowRoot() && d6.ce._injectChildStyle(f5, e5.parent ? e5.parent.type : void 0);
          const i7 = e5.subTree = renderComponentRoot$1(e5);
          patch(null, i7, n6, r7, e5, s7, o8), t13.el = i7.el;
        }
        if (u6 && kn2(u6, s7), !g6 && (i6 = l7 && l7.onVnodeMounted)) {
          const e6 = t13;
          kn2(() => invokeVNodeHook(i6, p6, e6), s7);
        }
        (256 & t13.shapeFlag || p6 && isAsyncWrapper(p6.vnode) && 256 & p6.vnode.shapeFlag) && e5.a && kn2(e5.a, s7), e5.isMounted = true, t13 = n6 = r7 = null;
      }
    });
    e5.scope.off();
    const l6 = e5.update = a9.run.bind(a9), c5 = e5.job = a9.runIfDirty.bind(a9);
    c5.i = e5, c5.id = e5.uid, a9.scheduler = () => queueJob(c5), toggleRecurse(e5, true), l6();
  }, "setupRenderEffect"), updateComponentPreRender = /* @__PURE__ */ __name((e5, t13, n6) => {
    t13.component = e5;
    const r7 = e5.vnode.props;
    e5.vnode = t13, e5.next = null, (function(e6, t14, n7, r8) {
      const { props: s7, attrs: o8, vnode: { patchFlag: i5 } } = e6, a9 = toRaw(s7), [l6] = e6.propsOptions;
      let c5 = false;
      if (!(r8 || i5 > 0) || 16 & i5) {
        let r9;
        setFullProps(e6, t14, s7, o8) && (c5 = true);
        for (const o9 in a9) t14 && (hasOwn(t14, o9) || (r9 = d(o9)) !== o9 && hasOwn(t14, r9)) || (l6 ? !n7 || void 0 === n7[o9] && void 0 === n7[r9] || (s7[o9] = resolvePropValue(l6, a9, o9, void 0, e6, true)) : delete s7[o9]);
        if (o8 !== a9) for (const e7 in o8) t14 && hasOwn(t14, e7) || (delete o8[e7], c5 = true);
      } else if (8 & i5) {
        const n8 = e6.vnode.dynamicProps;
        for (let r9 = 0; r9 < n8.length; r9++) {
          let i6 = n8[r9];
          if (isEmitListener(e6.emitsOptions, i6)) continue;
          const u6 = t14[i6];
          if (l6) if (hasOwn(o8, i6)) u6 !== o8[i6] && (o8[i6] = u6, c5 = true);
          else {
            const t15 = p(i6);
            s7[t15] = resolvePropValue(l6, a9, t15, u6, e6, false);
          }
          else u6 !== o8[i6] && (o8[i6] = u6, c5 = true);
        }
      }
      c5 && trigger(e6.attrs, "set", "");
    })(e5, t13.props, r7, n6), ((e6, t14, n7) => {
      const { vnode: r8, slots: s7 } = e6;
      let o8 = true, i5 = t;
      if (32 & r8.shapeFlag) {
        const e7 = t14._;
        e7 ? n7 && 1 === e7 ? o8 = false : assignSlots(s7, t14, n7) : (o8 = !t14.$stable, normalizeObjectSlots(t14, s7)), i5 = t14;
      } else t14 && (normalizeVNodeSlots(e6, t14), i5 = { default: 1 });
      if (o8) for (const e7 in s7) isInternalKey(e7) || null != i5[e7] || delete s7[e7];
    })(e5, t13.children, n6), pauseTracking(), flushPreFlushCbs(e5), resetTracking();
  }, "updateComponentPreRender"), patchChildren = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5, a9, l6 = false) => {
    const u6 = e5 && e5.children, p6 = e5 ? e5.shapeFlag : 0, d6 = t13.children, { patchFlag: f5, shapeFlag: g6 } = t13;
    if (f5 > 0) {
      if (128 & f5) return void patchKeyedChildren(u6, d6, n6, r7, s7, o8, i5, a9, l6);
      if (256 & f5) return void patchUnkeyedChildren(u6, d6, n6, r7, s7, o8, i5, a9, l6);
    }
    8 & g6 ? (16 & p6 && unmountChildren(u6, s7, o8), d6 !== u6 && c4(n6, d6)) : 16 & p6 ? 16 & g6 ? patchKeyedChildren(u6, d6, n6, r7, s7, o8, i5, a9, l6) : unmountChildren(u6, s7, o8, true) : (8 & p6 && c4(n6, ""), 16 & g6 && mountChildren(d6, n6, r7, s7, o8, i5, a9, l6));
  }, "patchChildren"), patchUnkeyedChildren = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5, a9, l6) => {
    t13 = t13 || a;
    const c5 = (e5 = e5 || a).length, u6 = t13.length, p6 = Math.min(c5, u6);
    let d6;
    for (d6 = 0; d6 < p6; d6++) {
      const r8 = t13[d6] = l6 ? cloneIfMounted(t13[d6]) : normalizeVNode$1(t13[d6]);
      patch(e5[d6], r8, n6, null, s7, o8, i5, a9, l6);
    }
    c5 > u6 ? unmountChildren(e5, s7, o8, true, false, p6) : mountChildren(t13, n6, r7, s7, o8, i5, a9, l6, p6);
  }, "patchUnkeyedChildren"), patchKeyedChildren = /* @__PURE__ */ __name((e5, t13, n6, r7, s7, o8, i5, a9, l6) => {
    let c5 = 0;
    const u6 = t13.length;
    let p6 = e5.length - 1, d6 = u6 - 1;
    for (; c5 <= p6 && c5 <= d6; ) {
      const r8 = e5[c5], u7 = t13[c5] = l6 ? cloneIfMounted(t13[c5]) : normalizeVNode$1(t13[c5]);
      if (!isSameVNodeType(r8, u7)) break;
      patch(r8, u7, n6, null, s7, o8, i5, a9, l6), c5++;
    }
    for (; c5 <= p6 && c5 <= d6; ) {
      const r8 = e5[p6], c6 = t13[d6] = l6 ? cloneIfMounted(t13[d6]) : normalizeVNode$1(t13[d6]);
      if (!isSameVNodeType(r8, c6)) break;
      patch(r8, c6, n6, null, s7, o8, i5, a9, l6), p6--, d6--;
    }
    if (c5 > p6) {
      if (c5 <= d6) {
        const e6 = d6 + 1, p7 = e6 < u6 ? t13[e6].el : r7;
        for (; c5 <= d6; ) patch(null, t13[c5] = l6 ? cloneIfMounted(t13[c5]) : normalizeVNode$1(t13[c5]), n6, p7, s7, o8, i5, a9, l6), c5++;
      }
    } else if (c5 > d6) for (; c5 <= p6; ) unmount(e5[c5], s7, o8, true), c5++;
    else {
      const f5 = c5, g6 = c5, m6 = /* @__PURE__ */ new Map();
      for (c5 = g6; c5 <= d6; c5++) {
        const e6 = t13[c5] = l6 ? cloneIfMounted(t13[c5]) : normalizeVNode$1(t13[c5]);
        null != e6.key && m6.set(e6.key, c5);
      }
      let y3, v4 = 0;
      const _3 = d6 - g6 + 1;
      let b6 = false, k4 = 0;
      const S3 = new Array(_3);
      for (c5 = 0; c5 < _3; c5++) S3[c5] = 0;
      for (c5 = f5; c5 <= p6; c5++) {
        const r8 = e5[c5];
        if (v4 >= _3) {
          unmount(r8, s7, o8, true);
          continue;
        }
        let u7;
        if (null != r8.key) u7 = m6.get(r8.key);
        else for (y3 = g6; y3 <= d6; y3++) if (0 === S3[y3 - g6] && isSameVNodeType(r8, t13[y3])) {
          u7 = y3;
          break;
        }
        void 0 === u7 ? unmount(r8, s7, o8, true) : (S3[u7 - g6] = c5 + 1, u7 >= k4 ? k4 = u7 : b6 = true, patch(r8, t13[u7], n6, null, s7, o8, i5, a9, l6), v4++);
      }
      const C3 = b6 ? (function(e6) {
        const t14 = e6.slice(), n7 = [0];
        let r8, s8, o9, i6, a10;
        const l7 = e6.length;
        for (r8 = 0; r8 < l7; r8++) {
          const l8 = e6[r8];
          if (0 !== l8) {
            if (s8 = n7[n7.length - 1], e6[s8] < l8) {
              t14[r8] = s8, n7.push(r8);
              continue;
            }
            for (o9 = 0, i6 = n7.length - 1; o9 < i6; ) a10 = o9 + i6 >> 1, e6[n7[a10]] < l8 ? o9 = a10 + 1 : i6 = a10;
            l8 < e6[n7[o9]] && (o9 > 0 && (t14[r8] = n7[o9 - 1]), n7[o9] = r8);
          }
        }
        o9 = n7.length, i6 = n7[o9 - 1];
        for (; o9-- > 0; ) n7[o9] = i6, i6 = t14[i6];
        return n7;
      })(S3) : a;
      for (y3 = C3.length - 1, c5 = _3 - 1; c5 >= 0; c5--) {
        const e6 = g6 + c5, p7 = t13[e6], d7 = t13[e6 + 1], f6 = e6 + 1 < u6 ? d7.el || resolveAsyncComponentPlaceholder(d7) : r7;
        0 === S3[c5] ? patch(null, p7, n6, f6, s7, o8, i5, a9, l6) : b6 && (y3 < 0 || c5 !== C3[y3] ? move(p7, n6, f6, 2) : y3--);
      }
    }
  }, "patchKeyedChildren"), move = /* @__PURE__ */ __name((e5, t13, s7, o8, i5 = null) => {
    const { el: a9, type: l6, transition: c5, children: u6, shapeFlag: d6 } = e5;
    if (6 & d6) return void move(e5.component.subTree, t13, s7, o8);
    if (128 & d6) return void e5.suspense.move(t13, s7, o8);
    if (64 & d6) return void l6.move(e5, t13, s7, m5);
    if (l6 === wn2) {
      n5(a9, t13, s7);
      for (let e6 = 0; e6 < u6.length; e6++) move(u6[e6], t13, s7, o8);
      return void n5(e5.anchor, t13, s7);
    }
    if (l6 === An2) return void (({ el: e6, anchor: t14 }, r7, s8) => {
      let o9;
      for (; e6 && e6 !== t14; ) o9 = p5(e6), n5(e6, r7, s8), e6 = o9;
      n5(t14, r7, s8);
    })(e5, t13, s7);
    if (2 !== o8 && 1 & d6 && c5) if (0 === o8) c5.persisted && !a9[jt2] ? n5(a9, t13, s7) : (c5.beforeEnter(a9), n5(a9, t13, s7), kn2(() => c5.enter(a9), i5));
    else {
      const { leave: o9, delayLeave: i6, afterLeave: l7 } = c5, remove22 = /* @__PURE__ */ __name(() => {
        e5.ctx.isUnmounted ? r6(a9) : n5(a9, t13, s7);
      }, "remove2"), performLeave = /* @__PURE__ */ __name(() => {
        const e6 = a9._isLeaving || !!a9[jt2];
        a9._isLeaving && a9[jt2](true), c5.persisted && !e6 ? remove22() : o9(a9, () => {
          remove22(), l7 && l7();
        });
      }, "performLeave");
      i6 ? i6(a9, remove22, performLeave) : performLeave();
    }
    else n5(a9, t13, s7);
  }, "move"), unmount = /* @__PURE__ */ __name((e5, t13, n6, r7 = false, s7 = false) => {
    const { type: o8, props: i5, ref: a9, children: l6, dynamicChildren: c5, shapeFlag: u6, patchFlag: p6, dirs: d6, cacheIndex: f5, memo: g6 } = e5;
    if (-2 === p6 && (s7 = false), null != a9 && (pauseTracking(), setRef(a9, null, n6, e5, true), resetTracking()), null != f5 && (t13.renderCache[f5] = void 0), 256 & u6) return void t13.ctx.deactivate(e5);
    const y3 = 1 & u6 && d6, v4 = !isAsyncWrapper(e5);
    let _3;
    if (v4 && (_3 = i5 && i5.onVnodeBeforeUnmount) && invokeVNodeHook(_3, t13, e5), 6 & u6) unmountComponent(e5.component, n6, r7);
    else {
      if (128 & u6) return void e5.suspense.unmount(n6, r7);
      y3 && invokeDirectiveHook(e5, null, t13, "beforeUnmount"), 64 & u6 ? e5.type.remove(e5, t13, n6, m5, r7) : c5 && !c5.hasOnce && (o8 !== wn2 || p6 > 0 && 64 & p6) ? unmountChildren(c5, t13, n6, false, true) : (o8 === wn2 && 384 & p6 || !s7 && 16 & u6) && unmountChildren(l6, t13, n6), r7 && remove2(e5);
    }
    const b6 = null != g6 && null == f5;
    (v4 && (_3 = i5 && i5.onVnodeUnmounted) || y3 || b6) && kn2(() => {
      _3 && invokeVNodeHook(_3, t13, e5), y3 && invokeDirectiveHook(e5, null, t13, "unmounted"), b6 && (e5.el = null);
    }, n6);
  }, "unmount"), remove2 = /* @__PURE__ */ __name((e5) => {
    const { type: t13, el: n6, anchor: s7, transition: o8 } = e5;
    if (t13 === wn2) return void removeFragment(n6, s7);
    if (t13 === An2) return void (({ el: e6, anchor: t14 }) => {
      let n7;
      for (; e6 && e6 !== t14; ) n7 = p5(e6), r6(e6), e6 = n7;
      r6(t14);
    })(e5);
    const performRemove = /* @__PURE__ */ __name(() => {
      r6(n6), o8 && !o8.persisted && o8.afterLeave && o8.afterLeave();
    }, "performRemove");
    if (1 & e5.shapeFlag && o8 && !o8.persisted) {
      const { leave: t14, delayLeave: r7 } = o8, performLeave = /* @__PURE__ */ __name(() => t14(n6, performRemove), "performLeave");
      r7 ? r7(e5.el, performRemove, performLeave) : performLeave();
    } else performRemove();
  }, "remove"), removeFragment = /* @__PURE__ */ __name((e5, t13) => {
    let n6;
    for (; e5 !== t13; ) n6 = p5(e5), r6(e5), e5 = n6;
    r6(t13);
  }, "removeFragment"), unmountComponent = /* @__PURE__ */ __name((e5, t13, n6) => {
    const { bum: r7, scope: s7, job: o8, subTree: i5, um: a9, m: l6, a: c5 } = e5;
    invalidateMount(l6), invalidateMount(c5), r7 && invokeArrayFns(r7), s7.stop(), o8 && (o8.flags |= 8, unmount(i5, e5, t13, n6)), a9 && kn2(a9, t13), kn2(() => {
      e5.isUnmounted = true;
    }, t13);
  }, "unmountComponent"), unmountChildren = /* @__PURE__ */ __name((e5, t13, n6, r7 = false, s7 = false, o8 = 0) => {
    for (let i5 = o8; i5 < e5.length; i5++) unmount(e5[i5], t13, n6, r7, s7);
  }, "unmountChildren"), getNextHostNode = /* @__PURE__ */ __name((e5) => {
    if (6 & e5.shapeFlag) return getNextHostNode(e5.component.subTree);
    if (128 & e5.shapeFlag) return e5.suspense.next();
    const t13 = p5(e5.anchor || e5.el), n6 = t13 && t13[Lt2];
    return n6 ? p5(n6) : t13;
  }, "getNextHostNode");
  let g5 = false;
  const render2 = /* @__PURE__ */ __name((e5, t13, n6) => {
    let r7;
    null == e5 ? t13._vnode && (unmount(t13._vnode, null, null, true), r7 = t13._vnode.component) : patch(t13._vnode || null, e5, t13, null, null, null, n6), t13._vnode = e5, g5 || (g5 = true, flushPreFlushCbs(r7), flushPostFlushCbs(), g5 = false);
  }, "render"), m5 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e4 };
  let v3, b5;
  return t12 && ([v3, b5] = t12(m5)), { render: render2, hydrate: v3, createApp: createAppAPI(render2, v3) };
}
function resolveChildrenNamespace({ type: e4, props: t12 }, n5) {
  return "svg" === n5 && "foreignObject" === e4 || "mathml" === n5 && "annotation-xml" === e4 && t12 && t12.encoding && t12.encoding.includes("html") ? void 0 : n5;
}
function toggleRecurse({ effect: e4, job: t12 }, n5) {
  n5 ? (e4.flags |= 32, t12.flags |= 4) : (e4.flags &= -33, t12.flags &= -5);
}
function needTransition(e4, t12) {
  return (!e4 || e4 && !e4.pendingBranch) && t12 && !t12.persisted;
}
function traverseStaticChildren(e4, t12, n5 = false) {
  const r6 = e4.children, s6 = t12.children;
  if (o(r6) && o(s6)) for (let e5 = 0; e5 < r6.length; e5++) {
    const t13 = r6[e5];
    let o7 = s6[e5];
    1 & o7.shapeFlag && !o7.dynamicChildren && ((o7.patchFlag <= 0 || 32 === o7.patchFlag) && (o7 = s6[e5] = cloneIfMounted(s6[e5]), o7.el = t13.el), n5 || -2 === o7.patchFlag || traverseStaticChildren(t13, o7)), o7.type === Tn2 && (-1 === o7.patchFlag && (o7 = s6[e5] = cloneIfMounted(o7)), o7.el = t13.el), o7.type !== Rn2 || o7.el || (o7.el = t13.el);
  }
}
function locateNonHydratedAsyncRoot(e4) {
  const t12 = e4.subTree.component;
  if (t12) return t12.asyncDep && !t12.asyncResolved ? t12 : locateNonHydratedAsyncRoot(t12);
}
function invalidateMount(e4) {
  if (e4) for (let t12 = 0; t12 < e4.length; t12++) e4[t12].flags |= 8;
}
function resolveAsyncComponentPlaceholder(e4) {
  if (e4.placeholder) return e4.placeholder;
  const t12 = e4.component;
  return t12 ? resolveAsyncComponentPlaceholder(t12.subTree) : null;
}
function triggerEvent(e4, t12) {
  const n5 = e4.props && e4.props[t12];
  isFunction(n5) && n5();
}
function createSuspenseBoundary(e4, t12, n5, r6, s6, o7, i4, a8, l5, c4, u5 = false) {
  const { p: p5, m: d5, um: f4, n: g5, o: { parentNode: m5, remove: y3 } } = c4;
  let v3;
  const _3 = (function(e5) {
    const t13 = e5.props && e5.props.suspensible;
    return null != t13 && false !== t13;
  })(e4);
  _3 && t12 && t12.pendingBranch && (v3 = t12.pendingId, t12.deps++);
  const b5 = e4.props ? toNumber(e4.props.timeout) : void 0, k4 = o7, S3 = { vnode: e4, parent: t12, parentComponent: n5, namespace: i4, container: r6, hiddenContainer: s6, deps: 0, pendingId: Sn2++, timeout: "number" == typeof b5 ? b5 : -1, activeBranch: null, isFallbackMountPending: false, pendingBranch: null, isInFallback: !u5, isHydrating: u5, isUnmounted: false, effects: [], resolve(e5 = false, n6 = false) {
    const { vnode: r7, activeBranch: s7, pendingBranch: i5, pendingId: a9, effects: l6, parentComponent: c5, container: u6, isInFallback: p6 } = S3;
    let y4 = false;
    if (S3.isHydrating) S3.isHydrating = false;
    else if (!e5) {
      y4 = s7 && i5.transition && "out-in" === i5.transition.mode;
      let e6 = false;
      y4 && (s7.transition.afterLeave = () => {
        a9 === S3.pendingId && (d5(i5, u6, o7 !== k4 || e6 ? o7 : g5(s7), 0), queuePostFlushCb(l6), p6 && r7.ssFallback && (r7.ssFallback.el = null));
      }), s7 && !S3.isFallbackMountPending && (m5(s7.el) === u6 && (o7 = g5(s7), e6 = true), f4(s7, c5, S3, true), !y4 && p6 && r7.ssFallback && kn2(() => r7.ssFallback.el = null, S3)), y4 || d5(i5, u6, o7, 0);
    }
    S3.isFallbackMountPending = false, setActiveBranch(S3, i5), S3.pendingBranch = null, S3.isInFallback = false;
    let b6 = S3.parent, C3 = false;
    for (; b6; ) {
      if (b6.pendingBranch) {
        for (let e6 = 0; e6 < l6.length; e6++) b6.effects.push(l6[e6]);
        C3 = true;
        break;
      }
      b6 = b6.parent;
    }
    C3 || y4 || queuePostFlushCb(l6), S3.effects = [], _3 && t12 && t12.pendingBranch && v3 === t12.pendingId && (t12.deps--, 0 !== t12.deps || n6 || t12.resolve()), triggerEvent(r7, "onResolve");
  }, fallback(e5) {
    if (!S3.pendingBranch) return;
    const { vnode: t13, activeBranch: n6, parentComponent: r7, container: s7, namespace: o8 } = S3;
    triggerEvent(t13, "onFallback");
    const i5 = g5(n6), mountFallback = /* @__PURE__ */ __name(() => {
      if (S3.isFallbackMountPending = false, !S3.isInFallback) return;
      const e6 = S3.vnode.ssFallback;
      p5(null, e6, s7, i5, r7, null, o8, a8, l5), setActiveBranch(S3, e6);
    }, "mountFallback"), c5 = e5.transition && "out-in" === e5.transition.mode;
    c5 && (S3.isFallbackMountPending = true, n6.transition.afterLeave = mountFallback), S3.isInFallback = true, f4(n6, r7, null, true), c5 || mountFallback();
  }, move(e5, t13, n6) {
    S3.activeBranch && d5(S3.activeBranch, e5, t13, n6), S3.container = e5;
  }, next: /* @__PURE__ */ __name(() => S3.activeBranch && g5(S3.activeBranch), "next"), registerDep(e5, t13, n6) {
    const r7 = !!S3.pendingBranch;
    r7 && S3.deps++;
    const s7 = e5.vnode.el;
    e5.asyncDep.catch((t14) => {
      handleError(t14, e5, 0);
    }).then((o8) => {
      if (e5.isUnmounted || S3.isUnmounted || S3.pendingId !== e5.suspenseId) return;
      unsetCurrentInstance(), e5.asyncResolved = true;
      const { vnode: a9 } = e5;
      handleSetupResult(e5, o8, false), s7 && (a9.el = s7);
      const l6 = !s7 && e5.subTree.el;
      t13(e5, a9, m5(s7 || e5.subTree.el), s7 ? null : g5(e5.subTree), S3, i4, n6), l6 && (a9.placeholder = null, y3(l6)), updateHOCHostEl(e5, a9.el), r7 && 0 === --S3.deps && S3.resolve();
    });
  }, unmount(e5, t13) {
    S3.isUnmounted = true, S3.activeBranch && f4(S3.activeBranch, n5, e5, t13), S3.pendingBranch && f4(S3.pendingBranch, n5, e5, t13);
  } };
  return S3;
}
function normalizeSuspenseSlot(e4) {
  let t12;
  if (isFunction(e4)) {
    const n5 = Pn2 && e4._c;
    n5 && (e4._d = false, openBlock()), e4 = e4(), n5 && (e4._d = true, t12 = En2, closeBlock());
  }
  if (o(e4)) {
    const t13 = (function(e5) {
      let t14;
      for (let n5 = 0; n5 < e5.length; n5++) {
        const r6 = e5[n5];
        if (!isVNode$2(r6)) return;
        if (r6.type !== Rn2 || "v-if" === r6.children) {
          if (t14) return;
          t14 = r6;
        }
      }
      return t14;
    })(e4);
    e4 = t13;
  }
  return e4 = normalizeVNode$1(e4), t12 && !e4.dynamicChildren && (e4.dynamicChildren = t12.filter((t13) => t13 !== e4)), e4;
}
function queueEffectWithSuspense(e4, t12) {
  t12 && t12.pendingBranch ? o(e4) ? t12.effects.push(...e4) : t12.effects.push(e4) : queuePostFlushCb(e4);
}
function setActiveBranch(e4, t12) {
  e4.activeBranch = t12;
  const { vnode: n5, parentComponent: r6 } = e4;
  let s6 = t12.el;
  for (; !s6 && t12.component; ) s6 = (t12 = t12.component.subTree).el;
  n5.el = s6, r6 && r6.subTree === n5 && (r6.vnode.el = s6, updateHOCHostEl(r6, s6));
}
function openBlock(e4 = false) {
  xn2.push(En2 = e4 ? null : []);
}
function closeBlock() {
  xn2.pop(), En2 = xn2[xn2.length - 1] || null;
}
function setBlockTracking(e4, t12 = false) {
  Pn2 += e4, e4 < 0 && En2 && t12 && (En2.hasOnce = true);
}
function setupBlock(e4) {
  return e4.dynamicChildren = Pn2 > 0 ? En2 || a : null, closeBlock(), Pn2 > 0 && En2 && En2.push(e4), e4;
}
function createBlock(e4, t12, n5, r6, s6) {
  return setupBlock(createVNode(e4, t12, n5, r6, s6, true));
}
function isVNode$2(e4) {
  return !!e4 && true === e4.__v_isVNode;
}
function isSameVNodeType(e4, t12) {
  return e4.type === t12.type && e4.key === t12.key;
}
function createBaseVNode(e4, t12 = null, n5 = null, r6 = 0, s6 = null, o7 = e4 === wn2 ? 0 : 1, i4 = false, a8 = false) {
  const l5 = { __v_isVNode: true, __v_skip: true, type: e4, props: t12, key: t12 && normalizeKey(t12), ref: t12 && normalizeRef(t12), scopeId: Mt2, slotScopeIds: null, children: n5, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o7, patchFlag: r6, dynamicProps: s6, dynamicChildren: null, appContext: null, ctx: Ht2 };
  return a8 ? (normalizeChildren(l5, n5), 128 & o7 && e4.normalize(l5)) : n5 && (l5.shapeFlag |= isString(n5) ? 8 : 16), Pn2 > 0 && !i4 && En2 && (l5.patchFlag > 0 || 6 & o7) && 32 !== l5.patchFlag && En2.push(l5), l5;
}
function guardReactiveProps(e4) {
  return e4 ? isProxy(e4) || isInternalObject(e4) ? n({}, e4) : e4 : null;
}
function cloneVNode(e4, t12, n5 = false, r6 = false) {
  const { props: s6, ref: o7, patchFlag: i4, children: a8, transition: l5 } = e4, c4 = t12 ? mergeProps(s6 || {}, t12) : s6, u5 = { __v_isVNode: true, __v_skip: true, type: e4.type, props: c4, key: c4 && normalizeKey(c4), ref: t12 && t12.ref ? n5 && o7 ? o(o7) ? o7.concat(normalizeRef(t12)) : [o7, normalizeRef(t12)] : normalizeRef(t12) : o7, scopeId: e4.scopeId, slotScopeIds: e4.slotScopeIds, children: a8, target: e4.target, targetStart: e4.targetStart, targetAnchor: e4.targetAnchor, staticCount: e4.staticCount, shapeFlag: e4.shapeFlag, patchFlag: t12 && e4.type !== wn2 ? -1 === i4 ? 16 : 16 | i4 : i4, dynamicProps: e4.dynamicProps, dynamicChildren: e4.dynamicChildren, appContext: e4.appContext, dirs: e4.dirs, transition: l5, component: e4.component, suspense: e4.suspense, ssContent: e4.ssContent && cloneVNode(e4.ssContent), ssFallback: e4.ssFallback && cloneVNode(e4.ssFallback), placeholder: e4.placeholder, el: e4.el, anchor: e4.anchor, ctx: e4.ctx, ce: e4.ce };
  return l5 && r6 && setTransitionHooks(u5, l5.clone(u5)), u5;
}
function createTextVNode(e4 = " ", t12 = 0) {
  return createVNode(Tn2, null, e4, t12);
}
function createCommentVNode(e4 = "", t12 = false) {
  return t12 ? (openBlock(), createBlock(Rn2, null, e4)) : createVNode(Rn2, null, e4);
}
function normalizeVNode$1(e4) {
  return null == e4 || "boolean" == typeof e4 ? createVNode(Rn2) : o(e4) ? createVNode(wn2, null, e4.slice()) : isVNode$2(e4) ? cloneIfMounted(e4) : createVNode(Tn2, null, String(e4));
}
function cloneIfMounted(e4) {
  return null === e4.el && -1 !== e4.patchFlag || e4.memo ? e4 : cloneVNode(e4);
}
function normalizeChildren(e4, t12) {
  let n5 = 0;
  const { shapeFlag: r6 } = e4;
  if (null == t12) t12 = null;
  else if (o(t12)) n5 = 16;
  else if ("object" == typeof t12) {
    if (65 & r6) {
      const n6 = t12.default;
      return void (n6 && (n6._c && (n6._d = false), normalizeChildren(e4, n6()), n6._c && (n6._d = true)));
    }
    {
      n5 = 32;
      const r7 = t12._;
      r7 || isInternalObject(t12) ? 3 === r7 && Ht2 && (1 === Ht2.slots._ ? t12._ = 1 : (t12._ = 2, e4.patchFlag |= 1024)) : t12._ctx = Ht2;
    }
  } else if (isFunction(t12)) {
    if (65 & r6) return void normalizeChildren(e4, { default: t12 });
    t12 = { default: t12, _ctx: Ht2 }, n5 = 32;
  } else t12 = String(t12), 64 & r6 ? (n5 = 16, t12 = [createTextVNode(t12)]) : n5 = 8;
  e4.children = t12, e4.shapeFlag |= n5;
}
function mergeProps(...e4) {
  const t12 = {};
  for (let n5 = 0; n5 < e4.length; n5++) {
    const r6 = e4[n5];
    for (const e5 in r6) if ("class" === e5) t12.class !== r6.class && (t12.class = normalizeClass([t12.class, r6.class]));
    else if ("style" === e5) t12.style = normalizeStyle([t12.style, r6.style]);
    else if (isOn(e5)) {
      const n6 = t12[e5], s6 = r6[e5];
      !s6 || n6 === s6 || o(n6) && n6.includes(s6) ? null != s6 || null != n6 || isModelListener(e5) || (t12[e5] = s6) : t12[e5] = n6 ? [].concat(n6, s6) : s6;
    } else "" !== e5 && (t12[e5] = r6[e5]);
  }
  return t12;
}
function invokeVNodeHook(e4, t12, n5, r6 = null) {
  callWithAsyncErrorHandling(e4, t12, 7, [n5, r6]);
}
function createComponentInstance$1(e4, t12, n5) {
  const r6 = e4.type, s6 = (t12 ? t12.appContext : e4.appContext) || On2, o7 = { uid: $n2++, vnode: e4, type: r6, parent: t12, appContext: s6, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t12 ? t12.provides : Object.create(s6.provides), ids: t12 ? t12.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r6, s6), emitsOptions: normalizeEmitsOptions(r6, s6), emit: null, emitted: null, propsDefaults: t, inheritAttrs: r6.inheritAttrs, ctx: t, data: t, props: t, attrs: t, slots: t, refs: t, setupState: t, setupContext: null, suspense: n5, suspenseId: n5 ? n5.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o7.ctx = { _: o7 }, o7.root = t12 ? t12.root : o7, o7.emit = emit2.bind(null, o7), e4.ce && e4.ce(o7), o7;
}
function isStatefulComponent(e4) {
  return 4 & e4.vnode.shapeFlag;
}
function setupComponent$1(e4, t12 = false, n5 = false) {
  t12 && Mn2(t12);
  const { props: r6, children: s6 } = e4.vnode, o7 = isStatefulComponent(e4);
  !(function(e5, t13, n6, r7 = false) {
    const s7 = {}, o8 = createInternalObject();
    e5.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e5, t13, s7, o8);
    for (const t14 in e5.propsOptions[0]) t14 in s7 || (s7[t14] = void 0);
    n6 ? e5.props = r7 ? s7 : shallowReactive(s7) : e5.type.props ? e5.props = s7 : e5.props = o8, e5.attrs = o8;
  })(e4, r6, o7, t12), ((e5, t13, n6) => {
    const r7 = e5.slots = createInternalObject();
    if (32 & e5.vnode.shapeFlag) {
      const e6 = t13._;
      e6 ? (assignSlots(r7, t13, n6), n6 && def(r7, "_", e6, true)) : normalizeObjectSlots(t13, r7);
    } else t13 && normalizeVNodeSlots(e5, t13);
  })(e4, s6, n5 || t12);
  const i4 = o7 ? (function(e5, t13) {
    const n6 = e5.type;
    e5.accessCache = /* @__PURE__ */ Object.create(null), e5.proxy = new Proxy(e5.ctx, dn2);
    const { setup: r7 } = n6;
    if (r7) {
      pauseTracking();
      const n7 = e5.setupContext = r7.length > 1 ? createSetupContext(e5) : null, s7 = setCurrentInstance(e5), o8 = callWithErrorHandling(r7, e5, 0, [e5.props, n7]), i5 = isPromise(o8);
      if (resetTracking(), s7(), !i5 && !e5.sp || isAsyncWrapper(e5) || markAsyncBoundary(e5), i5) {
        if (o8.then(unsetCurrentInstance, unsetCurrentInstance), t13) return o8.then((n8) => {
          Mn2(true);
          try {
            handleSetupResult(e5, n8, t13);
          } finally {
            Mn2(false);
          }
        }).catch((t14) => {
          handleError(t14, e5, 0);
        });
        e5.asyncDep = o8;
      } else handleSetupResult(e5, o8, t13);
    } else finishComponentSetup(e5, t13);
  })(e4, t12) : void 0;
  return t12 && Mn2(false), i4;
}
function handleSetupResult(e4, t12, n5) {
  isFunction(t12) ? e4.type.__ssrInlineRender ? e4.ssrRender = t12 : e4.render = t12 : isObject(t12) && (e4.setupState = proxyRefs(t12)), finishComponentSetup(e4, n5);
}
function finishComponentSetup(e4, t12, n5) {
  const r6 = e4.type;
  if (!e4.render) {
    if (!t12 && Vn2 && !r6.render) {
      const t13 = r6.template || resolveMergedOptions(e4).template;
      if (t13) {
        const { isCustomElement: n6, compilerOptions: s6 } = e4.appContext.config, { delimiters: o7, compilerOptions: i4 } = r6, a8 = n(n({ isCustomElement: n6, delimiters: o7 }, s6), i4);
        r6.render = Vn2(t13, a8);
      }
    }
    e4.render = r6.render || NOOP, In2 && In2(e4);
  }
  {
    const t13 = setCurrentInstance(e4);
    pauseTracking();
    try {
      applyOptions(e4);
    } finally {
      resetTracking(), t13();
    }
  }
}
function createSetupContext(e4) {
  const expose = /* @__PURE__ */ __name((t12) => {
    e4.exposed = t12 || {};
  }, "expose");
  return { attrs: new Proxy(e4.attrs, Dn2), slots: e4.slots, emit: e4.emit, expose };
}
function getComponentPublicInstance(e4) {
  return e4.exposed ? e4.exposeProxy || (e4.exposeProxy = new Proxy(proxyRefs(markRaw(e4.exposed)), { get: /* @__PURE__ */ __name((t12, n5) => n5 in t12 ? t12[n5] : n5 in pn2 ? pn2[n5](e4) : void 0, "get"), has: /* @__PURE__ */ __name((e5, t12) => t12 in e5 || t12 in pn2, "has") })) : e4.proxy;
}
function getComponentName(e4, t12 = true) {
  return isFunction(e4) ? e4.displayName || e4.name : e4.name || t12 && e4.__name;
}
function h2(e4, t12, n5) {
  try {
    setBlockTracking(-1);
    const r6 = arguments.length;
    return 2 === r6 ? isObject(t12) && !o(t12) ? isVNode$2(t12) ? createVNode(e4, null, [t12]) : createVNode(e4, t12) : createVNode(e4, null, t12) : (r6 > 3 ? n5 = Array.prototype.slice.call(arguments, 2) : 3 === r6 && isVNode$2(n5) && (n5 = [n5]), createVNode(e4, t12, n5));
  } finally {
    setBlockTracking(1);
  }
}
function isMemoSame(e4, t12) {
  const n5 = e4.memo;
  if (n5.length != t12.length) return false;
  for (let e5 = 0; e5 < n5.length; e5++) if (hasChanged(n5[e5], t12[e5])) return false;
  return Pn2 > 0 && En2 && En2.push(e4), true;
}
function resolveTransitionProps(e4) {
  const t12 = {};
  for (const n6 in e4) n6 in Xn2 || (t12[n6] = e4[n6]);
  if (false === e4.css) return t12;
  const { name: n5 = "v", type: r6, duration: s6, enterFromClass: o7 = `${n5}-enter-from`, enterActiveClass: i4 = `${n5}-enter-active`, enterToClass: a8 = `${n5}-enter-to`, appearFromClass: l5 = o7, appearActiveClass: c4 = i4, appearToClass: u5 = a8, leaveFromClass: p5 = `${n5}-leave-from`, leaveActiveClass: d5 = `${n5}-leave-active`, leaveToClass: f4 = `${n5}-leave-to` } = e4, g5 = (function(e5) {
    if (null == e5) return null;
    if (isObject(e5)) return [NumberOf(e5.enter), NumberOf(e5.leave)];
    {
      const t13 = NumberOf(e5);
      return [t13, t13];
    }
  })(s6), m5 = g5 && g5[0], y3 = g5 && g5[1], { onBeforeEnter: v3, onEnter: _3, onEnterCancelled: b5, onLeave: S3, onLeaveCancelled: C3, onBeforeAppear: w5 = v3, onAppear: T3 = _3, onAppearCancelled: A3 = b5 } = t12, finishEnter = /* @__PURE__ */ __name((e5, t13, n6, r7) => {
    e5._enterCancelled = r7, removeTransitionClass(e5, t13 ? u5 : a8), removeTransitionClass(e5, t13 ? c4 : i4), n6 && n6();
  }, "finishEnter"), finishLeave = /* @__PURE__ */ __name((e5, t13) => {
    e5._isLeaving = false, removeTransitionClass(e5, p5), removeTransitionClass(e5, f4), removeTransitionClass(e5, d5), t13 && t13();
  }, "finishLeave"), makeEnterHook = /* @__PURE__ */ __name((e5) => (t13, n6) => {
    const s7 = e5 ? T3 : _3, resolve2 = /* @__PURE__ */ __name(() => finishEnter(t13, e5, n6), "resolve");
    callHook(s7, [t13, resolve2]), nextFrame(() => {
      removeTransitionClass(t13, e5 ? l5 : o7), addTransitionClass(t13, e5 ? u5 : a8), hasExplicitCallback(s7) || whenTransitionEnds(t13, r6, m5, resolve2);
    });
  }, "makeEnterHook");
  return n(t12, { onBeforeEnter(e5) {
    callHook(v3, [e5]), addTransitionClass(e5, o7), addTransitionClass(e5, i4);
  }, onBeforeAppear(e5) {
    callHook(w5, [e5]), addTransitionClass(e5, l5), addTransitionClass(e5, c4);
  }, onEnter: makeEnterHook(false), onAppear: makeEnterHook(true), onLeave(e5, t13) {
    e5._isLeaving = true;
    const resolve2 = /* @__PURE__ */ __name(() => finishLeave(e5, t13), "resolve");
    addTransitionClass(e5, p5), e5._enterCancelled ? (addTransitionClass(e5, d5), forceReflow(e5)) : (forceReflow(e5), addTransitionClass(e5, d5)), nextFrame(() => {
      e5._isLeaving && (removeTransitionClass(e5, p5), addTransitionClass(e5, f4), hasExplicitCallback(S3) || whenTransitionEnds(e5, r6, y3, resolve2));
    }), callHook(S3, [e5, resolve2]);
  }, onEnterCancelled(e5) {
    finishEnter(e5, false, void 0, true), callHook(b5, [e5]);
  }, onAppearCancelled(e5) {
    finishEnter(e5, true, void 0, true), callHook(A3, [e5]);
  }, onLeaveCancelled(e5) {
    finishLeave(e5), callHook(C3, [e5]);
  } });
}
function NumberOf(e4) {
  return toNumber(e4);
}
function addTransitionClass(e4, t12) {
  t12.split(/\s+/).forEach((t13) => t13 && e4.classList.add(t13)), (e4[Zn2] || (e4[Zn2] = /* @__PURE__ */ new Set())).add(t12);
}
function removeTransitionClass(e4, t12) {
  t12.split(/\s+/).forEach((t13) => t13 && e4.classList.remove(t13));
  const n5 = e4[Zn2];
  n5 && (n5.delete(t12), n5.size || (e4[Zn2] = void 0));
}
function nextFrame(e4) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e4);
  });
}
function whenTransitionEnds(e4, t12, n5, r6) {
  const s6 = e4._endId = ++er2, resolveIfNotStale = /* @__PURE__ */ __name(() => {
    s6 === e4._endId && r6();
  }, "resolveIfNotStale");
  if (null != n5) return setTimeout(resolveIfNotStale, n5);
  const { type: o7, timeout: i4, propCount: a8 } = getTransitionInfo(e4, t12);
  if (!o7) return r6();
  const l5 = o7 + "end";
  let c4 = 0;
  const end = /* @__PURE__ */ __name(() => {
    e4.removeEventListener(l5, onEnd), resolveIfNotStale();
  }, "end"), onEnd = /* @__PURE__ */ __name((t13) => {
    t13.target === e4 && ++c4 >= a8 && end();
  }, "onEnd");
  setTimeout(() => {
    c4 < a8 && end();
  }, i4 + 1), e4.addEventListener(l5, onEnd);
}
function getTransitionInfo(e4, t12) {
  const n5 = window.getComputedStyle(e4), getStyleProperties = /* @__PURE__ */ __name((e5) => (n5[e5] || "").split(", "), "getStyleProperties"), r6 = getStyleProperties(`${Jn2}Delay`), s6 = getStyleProperties(`${Jn2}Duration`), o7 = getTimeout(r6, s6), i4 = getStyleProperties(`${Gn2}Delay`), a8 = getStyleProperties(`${Gn2}Duration`), l5 = getTimeout(i4, a8);
  let c4 = null, u5 = 0, p5 = 0;
  t12 === Jn2 ? o7 > 0 && (c4 = Jn2, u5 = o7, p5 = s6.length) : t12 === Gn2 ? l5 > 0 && (c4 = Gn2, u5 = l5, p5 = a8.length) : (u5 = Math.max(o7, l5), c4 = u5 > 0 ? o7 > l5 ? Jn2 : Gn2 : null, p5 = c4 ? c4 === Jn2 ? s6.length : a8.length : 0);
  return { type: c4, timeout: u5, propCount: p5, hasTransform: c4 === Jn2 && /\b(?:transform|all)(?:,|$)/.test(getStyleProperties(`${Jn2}Property`).toString()) };
}
function getTimeout(e4, t12) {
  for (; e4.length < t12.length; ) e4 = e4.concat(e4);
  return Math.max(...t12.map((t13, n5) => toMs(t13) + toMs(e4[n5])));
}
function toMs(e4) {
  return "auto" === e4 ? 0 : 1e3 * Number(e4.slice(0, -1).replace(",", "."));
}
function forceReflow(e4) {
  return (e4 ? e4.ownerDocument : document).body.offsetHeight;
}
function setDisplay(e4, t12) {
  e4.style.display = t12 ? e4[tr2] : "none", e4[nr2] = !t12;
}
function setVarsOnVNode(e4, t12) {
  if (128 & e4.shapeFlag) {
    const n5 = e4.suspense;
    e4 = n5.activeBranch, n5.pendingBranch && !n5.isHydrating && n5.effects.push(() => {
      setVarsOnVNode(n5.activeBranch, t12);
    });
  }
  for (; e4.component; ) e4 = e4.component.subTree;
  if (1 & e4.shapeFlag && e4.el) setVarsOnNode(e4.el, t12);
  else if (e4.type === wn2) e4.children.forEach((e5) => setVarsOnVNode(e5, t12));
  else if (e4.type === An2) {
    let { el: n5, anchor: r6 } = e4;
    for (; n5 && (setVarsOnNode(n5, t12), n5 !== r6); ) n5 = n5.nextSibling;
  }
}
function setVarsOnNode(e4, t12) {
  if (1 === e4.nodeType) {
    const n5 = e4.style;
    let r6 = "";
    for (const e5 in t12) {
      const s6 = normalizeCssVarValue(t12[e5]);
      n5.setProperty(`--${e5}`, s6), r6 += `--${e5}: ${s6};`;
    }
    n5[sr2] = r6;
  }
}
function setStyle(e4, t12, n5) {
  if (o(n5)) n5.forEach((n6) => setStyle(e4, t12, n6));
  else if (null == n5 && (n5 = ""), t12.startsWith("--")) ir2.test(n5) ? e4.setProperty(t12, n5.replace(ir2, ""), "important") : e4.setProperty(t12, n5);
  else {
    const r6 = (function(e5, t13) {
      const n6 = lr3[t13];
      if (n6) return n6;
      let r7 = p(t13);
      if ("filter" !== r7 && r7 in e5) return lr3[t13] = r7;
      r7 = f(r7);
      for (let n7 = 0; n7 < ar2.length; n7++) {
        const s6 = ar2[n7] + r7;
        if (s6 in e5) return lr3[t13] = s6;
      }
      return t13;
    })(e4, t12);
    ir2.test(n5) ? e4.setProperty(d(r6), n5.replace(ir2, ""), "important") : e4[r6] = n5;
  }
}
function shouldPreserveTextareaResizeStyle(e4, t12, n5, r6) {
  return "TEXTAREA" === e4.tagName && ("width" === t12 || "height" === t12) && isString(r6) && n5 === r6;
}
function patchAttr(e4, t12, n5, r6, s6, o7 = v(t12)) {
  r6 && t12.startsWith("xlink:") ? null == n5 ? e4.removeAttributeNS(cr2, t12.slice(6, t12.length)) : e4.setAttributeNS(cr2, t12, n5) : null == n5 || o7 && !includeBooleanAttr(n5) ? e4.removeAttribute(t12) : e4.setAttribute(t12, o7 ? "" : isSymbol(n5) ? String(n5) : n5);
}
function patchDOMProp(e4, t12, n5, r6, s6) {
  if ("innerHTML" === t12 || "textContent" === t12) return void (null != n5 && (e4[t12] = n5));
  const o7 = e4.tagName;
  if ("value" === t12 && "PROGRESS" !== o7 && !o7.includes("-")) {
    const r7 = "OPTION" === o7 ? e4.getAttribute("value") || "" : e4.value, s7 = null == n5 ? "checkbox" === e4.type ? "on" : "" : String(n5);
    return r7 === s7 && "_value" in e4 || (e4.value = s7), null == n5 && e4.removeAttribute(t12), void (e4._value = n5);
  }
  let i4 = false;
  if ("" === n5 || null == n5) {
    const r7 = typeof e4[t12];
    "boolean" === r7 ? n5 = includeBooleanAttr(n5) : null == n5 && "string" === r7 ? (n5 = "", i4 = true) : "number" === r7 && (n5 = 0, i4 = true);
  }
  try {
    e4[t12] = n5;
  } catch (e5) {
  }
  i4 && e4.removeAttribute(s6 || t12);
}
function addEventListener(e4, t12, n5, r6) {
  e4.addEventListener(t12, n5, r6);
}
function patchEvent(e4, t12, n5, r6, s6 = null) {
  const o7 = e4[ur2] || (e4[ur2] = {}), i4 = o7[t12];
  if (r6 && i4) i4.value = r6;
  else {
    const [n6, a8] = (function(e5) {
      let t13, n7;
      for (; (n7 = e5.match(pr2)) && !dr2.test(e5); ) t13 || (t13 = {}), e5 = e5.slice(0, e5.length - n7[1].length), t13[n7[1].toLowerCase()] = true;
      const r7 = ":" === e5[2] ? e5.slice(3) : d(e5.slice(2));
      return [r7, t13];
    })(t12);
    if (r6) {
      const i5 = o7[t12] = (function(e5, t13) {
        const invoker = /* @__PURE__ */ __name((e6) => {
          if (e6._vts) {
            if (e6._vts <= invoker.attached) return;
          } else e6._vts = Date.now();
          const n7 = invoker.value;
          if (o(n7)) {
            const r7 = e6.stopImmediatePropagation;
            e6.stopImmediatePropagation = () => {
              r7.call(e6), e6._stopped = true;
            };
            const s7 = n7.slice(), o8 = [e6];
            for (let n8 = 0; n8 < s7.length && !e6._stopped; n8++) {
              const e7 = s7[n8];
              e7 && callWithAsyncErrorHandling(e7, t13, 5, o8);
            }
          } else callWithAsyncErrorHandling(n7, t13, 5, [e6]);
        }, "invoker");
        return invoker.value = e5, invoker.attached = getNow(), invoker;
      })(r6, s6);
      addEventListener(e4, n6, i5, a8);
    } else i4 && (!(function(e5, t13, n7, r7) {
      e5.removeEventListener(t13, n7, r7);
    })(e4, n6, i4, a8), o7[t12] = void 0);
  }
}
function defineCustomElement(e4, t12, n5) {
  let r6 = defineComponent(e4, t12);
  isPlainObject(r6) && (r6 = n({}, r6, t12));
  class VueCustomElement extends VueElement {
    static {
      __name(this, "VueCustomElement");
    }
    constructor(e5) {
      super(r6, e5, n5);
    }
  }
  return VueCustomElement.def = r6, VueCustomElement;
}
function useHost(e4) {
  const t12 = getCurrentInstance(), n5 = t12 && t12.ce;
  return n5 || null;
}
function callPendingCbs(e4) {
  const t12 = e4.el;
  t12[_r2] && t12[_r2](), t12[br2] && t12[br2]();
}
function recordPosition(e4) {
  vr2.set(e4, getPosition(e4.el));
}
function applyTranslation(e4) {
  const t12 = yr2.get(e4), n5 = vr2.get(e4), r6 = t12.left - n5.left, s6 = t12.top - n5.top;
  if (r6 || s6) {
    const t13 = e4.el, n6 = t13.style, o7 = t13.getBoundingClientRect();
    let i4 = 1, a8 = 1;
    return t13.offsetWidth && (i4 = o7.width / t13.offsetWidth), t13.offsetHeight && (a8 = o7.height / t13.offsetHeight), Number.isFinite(i4) && 0 !== i4 || (i4 = 1), Number.isFinite(a8) && 0 !== a8 || (a8 = 1), Math.abs(i4 - 1) < 0.01 && (i4 = 1), Math.abs(a8 - 1) < 0.01 && (a8 = 1), n6.transform = n6.webkitTransform = `translate(${r6 / i4}px,${s6 / a8}px)`, n6.transitionDuration = "0s", e4;
  }
}
function getPosition(e4) {
  const t12 = e4.getBoundingClientRect();
  return { left: t12.left, top: t12.top };
}
function onCompositionStart(e4) {
  e4.target.composing = true;
}
function onCompositionEnd(e4) {
  const t12 = e4.target;
  t12.composing && (t12.composing = false, t12.dispatchEvent(new Event("input")));
}
function castValue(e4, t12, n5) {
  return t12 && (e4 = e4.trim()), n5 && (e4 = looseToNumber(e4)), e4;
}
function setChecked(e4, { value: t12, oldValue: n5 }, r6) {
  let s6;
  if (e4._modelValue = t12, o(t12)) s6 = looseIndexOf(t12, r6.props.value) > -1;
  else if (isSet(t12)) s6 = t12.has(r6.props.value);
  else {
    if (t12 === n5) return;
    s6 = looseEqual(t12, getCheckboxValue(e4, true));
  }
  e4.checked !== s6 && (e4.checked = s6);
}
function setSelected(e4, t12) {
  const n5 = e4.multiple, r6 = o(t12);
  if (!n5 || r6 || isSet(t12)) {
    for (let s6 = 0, o7 = e4.options.length; s6 < o7; s6++) {
      const o8 = e4.options[s6], i4 = getValue(o8);
      if (n5) if (r6) {
        const e5 = typeof i4;
        o8.selected = "string" === e5 || "number" === e5 ? t12.some((e6) => String(e6) === String(i4)) : looseIndexOf(t12, i4) > -1;
      } else o8.selected = t12.has(i4);
      else if (looseEqual(getValue(o8), t12)) return void (e4.selectedIndex !== s6 && (e4.selectedIndex = s6));
    }
    n5 || -1 === e4.selectedIndex || (e4.selectedIndex = -1);
  }
}
function getValue(e4) {
  return "_value" in e4 ? e4._value : e4.value;
}
function getCheckboxValue(e4, t12) {
  const n5 = t12 ? "_trueValue" : "_falseValue";
  return n5 in e4 ? e4[n5] : t12;
}
function resolveDynamicModel(e4, t12) {
  switch (e4) {
    case "SELECT":
      return Ar2;
    case "TEXTAREA":
      return wr2;
    default:
      switch (t12) {
        case "checkbox":
          return Tr2;
        case "radio":
          return Rr2;
        default:
          return wr2;
      }
  }
}
function callModelHook(e4, t12, n5, r6, s6) {
  const o7 = resolveDynamicModel(e4.tagName, n5.props && n5.props.type)[s6];
  o7 && o7(e4, t12, n5, r6);
}
function ensureRenderer() {
  return Nr2 || (Nr2 = createRenderer$1($r2));
}
function ensureHydrationRenderer() {
  return Nr2 = Hr2 ? Nr2 : createHydrationRenderer($r2), Hr2 = true, Nr2;
}
function resolveRootNamespace(e4) {
  return e4 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && e4 instanceof MathMLElement ? "mathml" : void 0;
}
function normalizeContainer(e4) {
  if (isString(e4)) {
    return document.querySelector(e4);
  }
  return e4;
}
function injectHead() {
  if (hasInjectionContext()) {
    const e4 = inject(Ir);
    if (e4) return e4;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function defineHeadPlugin(e4, t12) {
  return t12 && "function" == typeof e4 && (e4.key = t12), e4;
}
function processTemplateParams(e4, t12, n5, r6 = false) {
  if ("string" != typeof e4 || !e4.includes("%")) return e4;
  let s6 = e4;
  try {
    s6 = decodeURI(e4);
  } catch {
  }
  const o7 = s6.match(Br2);
  if (!o7) return e4;
  const i4 = e4.includes(Ur2);
  return e4 = e4.replace(Br2, (e5) => {
    if (e5 === Ur2 || !o7.includes(e5)) return e5;
    const n6 = (function(e6, t13, n7 = false) {
      let r7;
      if ("s" === t13 || "pageTitle" === t13) r7 = e6.pageTitle;
      else if (t13.includes(".")) {
        const n8 = t13.indexOf(".");
        r7 = e6[t13.substring(0, n8)]?.[t13.substring(n8 + 1)];
      } else r7 = e6[t13];
      if (void 0 !== r7) return n7 ? (r7 || "").replace(Dr2, "\\\\").replace(jr2, "\\u003C").replace(Fr2, '\\"') : r7 || "";
    })(t12, e5.slice(1), r6);
    return void 0 !== n6 ? n6 : e5;
  }).trim(), i4 && (e4 = e4.split(Ur2).map((e5) => e5.trim()).filter((e5) => "" !== e5).join(n5 ? ` ${n5} ` : " ")), e4;
}
function isThenable(e4) {
  return "function" == typeof e4?.then;
}
function walkArrayPromises(e4, t12) {
  if (t12 === e4.length) return;
  if (256 === t12) {
    const n6 = new Array(e4.length);
    let r7 = false;
    for (; t12 < e4.length; t12++) {
      const s6 = walkPromises(e4[t12]);
      n6[t12] = s6, r7 ||= isThenable(s6);
    }
    return r7 ? n6 : void 0;
  }
  const n5 = walkPromises(e4[t12]);
  if (isThenable(n5)) {
    const r7 = new Array(e4.length);
    r7[t12] = n5;
    for (let n6 = t12 + 1; n6 < e4.length; n6++) r7[n6] = walkPromises(e4[n6]);
    return r7;
  }
  const r6 = walkArrayPromises(e4, t12 + 1);
  return r6 && (r6[t12] = n5), r6;
}
function walkObjectPromises(e4, t12, n5) {
  if (n5 === t12.length) return;
  if (256 === n5) {
    const r7 = new Array(t12.length);
    let s7 = false;
    for (; n5 < t12.length; n5++) {
      const o7 = walkPromises(e4[t12[n5]]);
      r7[n5] = o7, s7 ||= isThenable(o7);
    }
    return s7 ? r7 : void 0;
  }
  const r6 = walkPromises(e4[t12[n5]]);
  if (isThenable(r6)) {
    const s7 = new Array(t12.length);
    s7[n5] = r6;
    for (let r7 = n5 + 1; r7 < t12.length; r7++) s7[r7] = walkPromises(e4[t12[r7]]);
    return s7;
  }
  const s6 = walkObjectPromises(e4, t12, n5 + 1);
  return s6 && (s6[n5] = r6), s6;
}
function walkPromises(e4) {
  if ("function" == typeof e4) return e4;
  if (isThenable(e4)) return Promise.resolve(e4).then(walkPromises);
  if (Array.isArray(e4)) {
    const t12 = walkArrayPromises(e4, 0);
    return t12 ? Promise.all(t12) : e4;
  }
  if (e4?.constructor === Object) {
    const t12 = Object.keys(e4), n5 = walkObjectPromises(e4, t12, 0);
    if (n5) return Promise.all(n5).then((e5) => Object.fromEntries(t12.map((t13, n6) => [t13, e5[n6]])));
  }
  return e4;
}
function processIfNeeded(e4, t12, n5, r6 = false) {
  return "string" == typeof e4 && e4.includes("%") ? processTemplateParams(e4, t12, n5, r6) : e4;
}
function createHead(e4 = {}) {
  const t12 = createHead$1({ ...e4, propResolvers: [Lr] });
  return t12.install = (function(e5) {
    return { install(t13) {
      t13.config.globalProperties.$unhead = e5, t13.config.globalProperties.$head = e5, t13.provide(Ir, e5);
    } }.install;
  })(t12), t12;
}
function createSSRContext(n5) {
  return { url: (function(e4) {
    const n6 = e4.indexOf("?");
    return -1 === n6 ? encodePath(e4) : encodePath(e4.slice(0, n6)) + e4.slice(n6);
  })(n5.path), event: n5, runtimeConfig: useRuntimeConfig2(n5), noSSR: n5.context.nuxt?.noSSR || false, head: createHead(Zr), error: false, nuxt: void 0, payload: {}, "~payloadReducers": /* @__PURE__ */ Object.create(null), modules: /* @__PURE__ */ new Set() };
}
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...t12) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...t12);
}
function publicAssetsURL(...t12) {
  const r6 = useRuntimeConfig2().app, s6 = r6.cdnURL || r6.baseURL;
  return t12.length ? joinRelativeURL(s6, ...t12) : s6;
}
function lazyCachedFunction(e4) {
  let t12 = null;
  return () => (null === t12 && (t12 = e4().catch((e5) => {
    throw t12 = null, e5;
  })), t12);
}
function createMergeSlots(e4 = 16) {
  return { slotOf: /* @__PURE__ */ Object.create(null), count: 0, idOf: [], metaOf: [], scripts: new Uint8Array(e4), styles: new Uint8Array(e4), preload: new Uint8Array(e4), prefetch: new Uint8Array(e4), epoch: 0 };
}
function slotFor(e4, t12, n5) {
  let r6 = e4.slotOf[t12];
  if (void 0 === r6 && (r6 = e4.count++, e4.slotOf[t12] = r6, e4.idOf.push(t12), e4.metaOf.push(n5), r6 >= e4.scripts.length)) {
    const t13 = 2 * e4.scripts.length;
    for (const n6 of ["scripts", "styles", "preload", "prefetch"]) {
      const r7 = new Uint8Array(t13);
      r7.set(e4[n6]), e4[n6] = r7;
    }
  }
  return r6;
}
function getModuleDependencies(e4, t12) {
  if (t12._dependencies[e4]) return t12._dependencies[e4];
  const n5 = t12._dependencies[e4] = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
  if (!t12.manifest) return n5;
  const r6 = t12.manifest[e4];
  if (!r6) return n5;
  r6.file && (r6.preload && (n5.preload[e4] = r6), (r6.isEntry || r6.sideEffects) && (n5.scripts[e4] = r6));
  for (const e5 of r6.css || []) {
    const r7 = t12.manifest[e5];
    n5.styles[e5] = n5.prefetch[e5] = r7, r7.preload && (n5.preload[e5] = r7);
  }
  for (const e5 of r6.assets || []) {
    const r7 = t12.manifest[e5];
    n5.prefetch[e5] = r7, r7.preload && (n5.preload[e5] = r7);
  }
  if (r6.imports) for (const e5 of r6.imports) {
    const r7 = getModuleDependencies(e5, t12);
    Object.assign(n5.styles, r7.styles), Object.assign(n5.preload, r7.preload), Object.assign(n5.prefetch, r7.prefetch);
  }
  return n5;
}
function setAlias(e4, t12, n5, r6, s6) {
  const o7 = e4._dependencySetAliases;
  if (o7.set(t12, { ids: [...n5], deps: r6 }), o7.size > s6) {
    const e5 = o7.keys().next().value;
    void 0 !== e5 && o7.delete(e5);
  }
}
function collectInto(e4, t12, n5) {
  for (const r6 in e4) t12.push(slotFor(n5, r6, e4[r6]));
}
function collectPrefetch(e4, t12, n5, r6, s6) {
  const { styles: o7, preload: i4 } = e4;
  for (const e5 in t12) {
    const a8 = t12[e5];
    if (!a8.prefetch || e5 in i4 || e5 in o7) continue;
    const l5 = slotFor(s6, e5, a8);
    r6.has(l5) || (r6.add(l5), n5.push(l5));
  }
}
function getFlatDependencies(e4, t12) {
  const n5 = t12._flatDependencies[e4];
  if (void 0 !== n5) return n5;
  const r6 = getModuleDependencies(e4, t12), s6 = t12._mergeSlots, o7 = { scriptSlots: [], styleSlots: [], preloadSlots: [], prefetchSlots: [] };
  collectInto(r6.scripts, o7.scriptSlots, s6), collectInto(r6.styles, o7.styleSlots, s6), (function(e5, t13, n6) {
    const { styles: r7, preload: s7 } = e5;
    for (const e6 in s7) e6 in r7 || t13.push(slotFor(n6, e6, s7[e6]));
  })(r6, o7.preloadSlots, s6);
  const i4 = /* @__PURE__ */ new Set();
  collectPrefetch(r6, r6.prefetch, o7.prefetchSlots, i4, s6);
  const a8 = t12.manifest?.[e4]?.dynamicImports || t12.precomputed?.modules[e4]?.dynamicImports;
  if (a8) for (const e5 of a8) {
    const n6 = getModuleDependencies(e5, t12);
    collectPrefetch(r6, n6.scripts, o7.prefetchSlots, i4, s6), collectPrefetch(r6, n6.styles, o7.prefetchSlots, i4, s6), collectPrefetch(r6, n6.preload, o7.prefetchSlots, i4, s6);
  }
  return t12._flatDependencies[e4] = o7, o7;
}
function getRequestDependencies(e4, t12, n5) {
  const r6 = n5?.exclude ? new Set(n5.exclude) : void 0, s6 = r6 && r6.size > 0;
  if (!s6 && e4._requestDependencies) return e4._requestDependencies;
  const o7 = e4.modules || e4._registeredComponents;
  let i4 = 0, a8 = false;
  if (!s6 && t12._dependencySetsCacheSize > 0) {
    i4 = (function(e5, t13, n7) {
      let r7 = e5._aliasIdHashes;
      e5._aliasIdHashCount > 65536 && (r7 = e5._aliasIdHashes = /* @__PURE__ */ Object.create(null), e5._aliasIdHashCount = 0, e5._dependencySetAliases.clear());
      let s7 = 0, o8 = 1, i5 = 0;
      for (const n8 of t13) {
        let t14 = r7[n8];
        void 0 === t14 && (t14 = 2654435761 * e5._aliasIdHashCount++ | 0, r7[n8] = t14), s7 = s7 + t14 | 0, o8 = o8 ^ t14 + i5 | 0, i5++;
      }
      if (n7) for (const t14 of n7) {
        let n8 = r7[t14];
        void 0 === n8 && (n8 = 2654435761 * e5._aliasIdHashCount++ | 0, r7[t14] = n8), s7 = s7 + n8 | 0, o8 = o8 ^ n8 + i5 | 0, i5++;
      }
      return Math.imul(s7, 2654435761) ^ Math.imul(o8, 40503) ^ i5 | 0;
    })(t12, t12._entrypoints, o7), a8 = true;
    const n6 = (function(e5, t13, n7, r7, s7) {
      const o8 = e5._dependencySetAliases.get(t13);
      if (void 0 === o8) return;
      const { ids: i5 } = o8;
      let a9 = 0;
      for (const e6 of r7) if (i5[a9++] !== e6) return;
      if (s7) {
        for (const e6 of s7) if (i5[a9++] !== e6) return;
      }
      return a9 === i5.length ? o8.deps : void 0;
    })(t12, i4, 0, t12._entrypoints, o7);
    if (void 0 !== n6) return e4._requestDependencies = n6, n6;
  }
  const l5 = t12._idScratch;
  if (l5.length = 0, s6) {
    for (const e5 of t12._entrypoints) r6.has(e5) || l5.push(e5);
    if (o7) for (const e5 of o7) r6.has(e5) || l5.push(e5);
  } else {
    for (const e5 of t12._entrypoints) l5.push(e5);
    if (o7) for (const e5 of o7) l5.push(e5);
  }
  const c4 = (function(e5, t13, n6, r7) {
    const s7 = t13._dependencySetsCacheSize, o8 = s7 > 0;
    let i5 = "";
    if (o8) {
      i5 = e5.length <= 1 ? e5[0] || "" : [...new Set(e5)].sort().join(",");
      const o9 = t13._dependencySets.get(i5);
      if (void 0 !== o9) return t13._dependencySets.size >= s7 && (t13._dependencySets.delete(i5), t13._dependencySets.set(i5, o9)), r7 && setAlias(t13, n6, e5, o9, s7), o9;
    }
    const a9 = [], l6 = [], c5 = [], u5 = [], p5 = t13._mergeSlots;
    let d5 = p5.epoch + 1;
    d5 > 255 && (d5 = 1, p5.scripts.fill(0), p5.styles.fill(0), p5.preload.fill(0), p5.prefetch.fill(0)), p5.epoch = d5;
    let f4 = p5.scripts, g5 = p5.styles, m5 = p5.preload, y3 = p5.prefetch;
    for (let n7 = 0; n7 < e5.length; n7++) {
      const r8 = getFlatDependencies(e5[n7], t13);
      p5.scripts !== f4 && (f4 = p5.scripts, g5 = p5.styles, m5 = p5.preload, y3 = p5.prefetch);
      for (let e6 = 0; e6 < r8.scriptSlots.length; e6++) {
        const t14 = r8.scriptSlots[e6];
        f4[t14] !== d5 && (f4[t14] = d5, l6.push(t14));
      }
      for (let e6 = 0; e6 < r8.styleSlots.length; e6++) {
        const t14 = r8.styleSlots[e6];
        g5[t14] !== d5 && (g5[t14] = d5, a9.push(t14));
      }
      for (let e6 = 0; e6 < r8.preloadSlots.length; e6++) {
        const t14 = r8.preloadSlots[e6];
        m5[t14] !== d5 && (m5[t14] = d5, c5.push(t14));
      }
      for (let e6 = 0; e6 < r8.prefetchSlots.length; e6++) {
        const t14 = r8.prefetchSlots[e6];
        y3[t14] !== d5 && (y3[t14] = d5, u5.push(t14));
      }
    }
    let v3 = 0;
    for (let e6 = 0; e6 < c5.length; e6++) {
      const t14 = c5[e6];
      g5[t14] !== d5 && (c5[v3] = t14, v3++);
    }
    c5.length = v3, v3 = 0;
    const _3 = p5.metaOf;
    for (let e6 = 0; e6 < u5.length; e6++) {
      const t14 = u5[e6];
      _3[t14].prefetch && m5[t14] !== d5 && g5[t14] !== d5 && (u5[v3] = t14, v3++);
    }
    u5.length = v3;
    const b5 = { styleSlots: a9, scriptSlots: l6, preloadSlots: c5, prefetchSlots: u5, mergeSlots: p5 }, k4 = new Proxy({ [Xr2]: b5 }, Qr);
    if (t13._renderedCache.set(k4, { order: b5 }), o8) {
      if (t13._dependencySets.set(i5, k4), t13._dependencySets.size > s7) {
        const e6 = t13._dependencySets.keys().next().value;
        void 0 !== e6 && t13._dependencySets.delete(e6);
      }
      r7 && setAlias(t13, n6, e5, k4, s7);
    }
    return k4;
  })(l5, t12, i4, a8);
  return s6 || (e4._requestDependencies = c4), c4;
}
function getRenderedOutputs(e4, t12) {
  let n5 = e4._renderedCache.get(t12);
  return n5 || (n5 = {}, e4._renderedCache.set(t12, n5)), n5;
}
function isRecordKey(e4) {
  return "scripts" === e4 || "styles" === e4 || "preload" === e4 || "prefetch" === e4;
}
function materialiseRecord(e4, t12) {
  const n5 = e4[Xr2], r6 = (function(e5, t13) {
    const { idOf: n6, metaOf: r7 } = e5, s6 = {};
    for (let e6 = 0; e6 < t13.length; e6++) {
      const o7 = t13[e6];
      s6[n6[o7]] = r7[o7];
    }
    return s6;
  })(n5.mergeSlots, n5[Yr[t12]]);
  return e4[t12] = r6, r6;
}
function collectOrder(e4, t12, n5) {
  for (const r6 in e4) t12.push(slotFor(n5, r6, e4[r6]));
}
function getOrder(e4, t12, n5) {
  if (n5.order) return n5.order;
  const r6 = e4._mergeSlots, s6 = { styleSlots: [], scriptSlots: [], preloadSlots: [], prefetchSlots: [], mergeSlots: r6 };
  return collectOrder(t12.styles, s6.styleSlots, r6), collectOrder(t12.scripts, s6.scriptSlots, r6), collectOrder(t12.preload, s6.preloadSlots, r6), collectOrder(t12.prefetch, s6.prefetchSlots, r6), n5.order = s6, s6;
}
function renderStyles(e4, t12) {
  const n5 = getRequestDependencies(e4, t12), r6 = getRenderedOutputs(t12, n5);
  if (void 0 !== r6.styles) return r6.styles;
  const s6 = getOrder(t12, n5, r6), o7 = t12._mergeSlots.metaOf;
  let i4 = "";
  const a8 = t12._fragments.style;
  for (let e5 = 0; e5 < s6.styleSlots.length; e5++) {
    const n6 = s6.styleSlots[e5];
    let r7 = a8[n6];
    void 0 === r7 && (r7 = a8[n6] = `<link rel="stylesheet" href="${t12.buildAssetsURL(o7[n6].file)}" crossorigin>`), i4 += r7;
  }
  return r6.styles = i4, i4;
}
function isScriptResource(e4) {
  return !!e4.module || "script" === e4.resourceType;
}
function renderResourceHints(e4, t12, n5) {
  const r6 = getRequestDependencies(e4, t12, n5), s6 = getRenderedOutputs(t12, r6), o7 = false !== n5?.scripts, i4 = o7 ? s6.hints : s6.hintsWithoutScripts;
  if (void 0 !== i4) return i4;
  const a8 = getOrder(t12, r6, s6), l5 = t12._mergeSlots.metaOf;
  let c4 = "";
  const u5 = t12._fragments.preloadHint;
  for (let e5 = 0; e5 < a8.preloadSlots.length; e5++) {
    const n6 = a8.preloadSlots[e5];
    if (!o7 && isScriptResource(l5[n6])) continue;
    let r7 = u5[n6];
    if (void 0 === r7) {
      const e6 = l5[n6], s7 = t12.buildAssetsURL(e6.file), o8 = e6.module ? "modulepreload" : "preload", i5 = "style" === e6.resourceType || "font" === e6.resourceType || "script" === e6.resourceType || e6.module ? " crossorigin" : "";
      r7 = e6.resourceType && e6.mimeType ? `<link rel="${o8}" as="${e6.resourceType}" type="${e6.mimeType}"${i5} href="${s7}">` : e6.resourceType ? `<link rel="${o8}" as="${e6.resourceType}"${i5} href="${s7}">` : `<link rel="${o8}"${i5} href="${s7}">`, u5[n6] = r7;
    }
    c4 += r7;
  }
  const p5 = t12._fragments.prefetchHint;
  for (let e5 = 0; e5 < a8.prefetchSlots.length; e5++) {
    const n6 = a8.prefetchSlots[e5];
    if (!o7 && isScriptResource(l5[n6])) continue;
    let r7 = p5[n6];
    if (void 0 === r7) {
      const e6 = l5[n6], s7 = t12.buildAssetsURL(e6.file), o8 = "style" === e6.resourceType || "font" === e6.resourceType || "script" === e6.resourceType || e6.module ? " crossorigin" : "";
      r7 = e6.resourceType && e6.mimeType ? `<link rel="prefetch" as="${e6.resourceType}" type="${e6.mimeType}"${o8} href="${s7}">` : e6.resourceType ? `<link rel="prefetch" as="${e6.resourceType}"${o8} href="${s7}">` : `<link rel="prefetch"${o8} href="${s7}">`, p5[n6] = r7;
    }
    c4 += r7;
  }
  return o7 ? s6.hints = c4 : s6.hintsWithoutScripts = c4, c4;
}
function renderResourceHeaders(e4, t12, n5) {
  const r6 = getRequestDependencies(e4, t12, n5), s6 = getRenderedOutputs(t12, r6), o7 = false !== n5?.scripts, i4 = o7 ? s6.headerLink : s6.headerLinkWithoutScripts;
  if (void 0 !== i4) return { link: i4 };
  const a8 = getOrder(t12, r6, s6), l5 = t12._mergeSlots.metaOf;
  let c4 = "";
  const u5 = t12._fragments.preloadHeader;
  for (let e5 = 0; e5 < a8.preloadSlots.length; e5++) {
    const n6 = a8.preloadSlots[e5];
    if (!o7 && isScriptResource(l5[n6])) continue;
    let r7 = u5[n6];
    if (void 0 === r7) {
      const e6 = l5[n6];
      r7 = `<${t12.buildAssetsURL(e6.file).replace(ts, encodeURIComponent)}>; rel="${e6.module ? "modulepreload" : "preload"}"`, e6.resourceType && (r7 += `; as="${e6.resourceType}"`), e6.mimeType && (r7 += `; type="${e6.mimeType}"`), ("style" === e6.resourceType || "font" === e6.resourceType || "script" === e6.resourceType || e6.module) && (r7 += "; crossorigin"), u5[n6] = r7;
    }
    c4 = c4 ? `${c4}, ${r7}` : r7;
  }
  const p5 = t12._fragments.prefetchHeader;
  for (let e5 = 0; e5 < a8.prefetchSlots.length; e5++) {
    const n6 = a8.prefetchSlots[e5];
    if (!o7 && isScriptResource(l5[n6])) continue;
    let r7 = p5[n6];
    if (void 0 === r7) {
      const e6 = l5[n6];
      r7 = `<${t12.buildAssetsURL(e6.file).replace(ts, encodeURIComponent)}>; rel="prefetch"`, e6.resourceType && (r7 += `; as="${e6.resourceType}"`), e6.mimeType && (r7 += `; type="${e6.mimeType}"`), ("style" === e6.resourceType || "font" === e6.resourceType || "script" === e6.resourceType || e6.module) && (r7 += "; crossorigin"), p5[n6] = r7;
    }
    c4 = c4 ? `${c4}, ${r7}` : r7;
  }
  return o7 ? s6.headerLink = c4 : s6.headerLinkWithoutScripts = c4, { link: c4 };
}
function hrefFor(e4, t12, n5) {
  const r6 = e4._fragments.href;
  let s6 = r6[t12];
  return void 0 === s6 && (s6 = r6[t12] = e4.buildAssetsURL(n5.file)), s6;
}
function renderScripts(e4, t12) {
  const n5 = getRequestDependencies(e4, t12), r6 = getRenderedOutputs(t12, n5);
  if (void 0 !== r6.scripts) return r6.scripts;
  const s6 = getOrder(t12, n5, r6), o7 = t12._mergeSlots.metaOf;
  let i4 = "";
  const a8 = t12._fragments.script;
  for (let e5 = 0; e5 < s6.scriptSlots.length; e5++) {
    const n6 = s6.scriptSlots[e5];
    let r7 = a8[n6];
    if (void 0 === r7) {
      const i5 = o7[s6.scriptSlots[e5]];
      r7 = a8[n6] = i5.module ? `<script type="module" src="${t12.buildAssetsURL(i5.file)}" crossorigin><\/script>` : `<script src="${t12.buildAssetsURL(i5.file)}" defer crossorigin><\/script>`;
    }
    i4 += r7;
  }
  return r6.scripts = i4, i4;
}
function createRenderer(e4, t12) {
  const n5 = (function({ manifest: e5, precomputed: t13, buildAssetsURL: n6, dependencySetsCacheSize: s6 }) {
    if (!e5 && !t13) throw new Error("Either manifest or precomputed data must be provided");
    const o7 = "number" == typeof s6 && Number.isFinite(s6) && s6 > 0 ? Math.floor(s6) : void 0 === s6 ? 1e3 : 0, i4 = [];
    let a8 = 16;
    if (t13) a8 = t13.resourceCount ?? 16;
    else if (e5) for (const t14 in e5) a8++, e5[t14].isEntry && i4.push(t14);
    const l5 = { buildAssetsURL: n6 || withLeadingSlash, manifest: e5, precomputed: t13, updateManifest: /* @__PURE__ */ __name(function(e6) {
      l5.manifest = e6, l5._dependencies = {}, l5._dependencySets.clear(), l5._dependencySetAliases.clear(), l5._aliasIdHashes = /* @__PURE__ */ Object.create(null), l5._aliasIdHashCount = 0, l5._renderedCache = /* @__PURE__ */ new WeakMap(), l5._fragments = { style: [], script: [], preloadHint: [], prefetchHint: [], preloadHeader: [], prefetchHeader: [], href: [] }, l5._flatDependencies = /* @__PURE__ */ Object.create(null);
      let t14 = 16;
      const n7 = [];
      for (const r6 in e6) t14++, e6[r6].isEntry && n7.push(r6);
      l5._mergeSlots = createMergeSlots(Math.min(t14, 8192)), l5._entrypoints = n7;
    }, "updateManifest"), _dependencies: {}, _dependencySets: /* @__PURE__ */ new Map(), _dependencySetAliases: /* @__PURE__ */ new Map(), _aliasIdHashes: /* @__PURE__ */ Object.create(null), _aliasIdHashCount: 0, _dependencySetsCacheSize: o7, _entrypoints: [], _renderedCache: /* @__PURE__ */ new WeakMap(), _fragments: { style: [], script: [], preloadHint: [], prefetchHint: [], preloadHeader: [], prefetchHeader: [], href: [] }, _flatDependencies: /* @__PURE__ */ Object.create(null), _mergeSlots: createMergeSlots(Math.min(a8, 8192)), _idScratch: [] };
    return t13 ? (l5._dependencies = t13.dependencies, l5._entrypoints = t13.entrypoints) : e5 && (l5._entrypoints = i4), l5;
  })(t12);
  return { rendererContext: n5, async renderToString(r6) {
    r6._registeredComponents = r6._registeredComponents || /* @__PURE__ */ new Set();
    const s6 = await (await Promise.resolve(e4).then((e5) => "default" in e5 ? e5.default : e5))(r6), wrap = /* @__PURE__ */ __name((e5) => () => e5(r6, n5), "wrap");
    return { html: await t12.renderToString(s6, r6), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function ssrRenderAttrs(e4, t12) {
  let n5 = "";
  for (let r6 in e4) {
    if (os(r6) || isOn(r6) || "textarea" === t12 && "value" === r6 || r6.startsWith(".")) continue;
    const s6 = e4[r6];
    r6.startsWith("^") && (r6 = r6.slice(1)), "class" === r6 ? n5 += ` class="${ssrRenderClass(s6)}"` : "style" === r6 ? n5 += ` style="${ssrRenderStyle(s6)}"` : "className" === r6 ? null != s6 && (n5 += ` class="${escapeHtml(String(s6))}"`) : n5 += ssrRenderDynamicAttr(r6, s6, t12);
  }
  return n5;
}
function ssrRenderDynamicAttr(e4, t12, n5) {
  if (!isRenderableAttrValue(t12)) return "";
  const r6 = n5 && (n5.indexOf("-") > 0 || O(n5)) ? e4 : P[e4] || e4.toLowerCase();
  return R(r6) || "hidden" === r6 && ("boolean" == typeof t12 || "number" == typeof t12) ? includeBooleanAttr(t12) ? ` ${r6}` : "" : isSSRSafeAttrName(r6) ? "" === t12 ? ` ${r6}` : ` ${r6}="${escapeHtml(t12)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r6}`), "");
}
function ssrRenderAttr(e4, t12) {
  return isRenderableAttrValue(t12) ? ` ${e4}="${escapeHtml(t12)}"` : "";
}
function ssrRenderClass(e4) {
  return escapeHtml(normalizeClass(e4));
}
function ssrRenderStyle(e4) {
  if (!e4) return "";
  if (isString(e4)) return escapeHtml(e4);
  const t12 = normalizeStyle((function(e5) {
    if (!o(e5) && isObject(e5)) {
      const t13 = {};
      for (const n5 in e5) n5.startsWith(":--") ? t13[n5.slice(1)] = normalizeCssVarValue(e5[n5]) : t13[n5] = e5[n5];
      return t13;
    }
    return e5;
  })(e4));
  return escapeHtml(stringifyStyle(t12));
}
function ssrRenderComponent(e4, t12 = null, n5 = null, r6 = null, s6) {
  return renderComponentVNode(createVNode(e4, t12, n5), r6, s6);
}
function ssrInterpolate(e4) {
  return escapeHtml(toDisplayString(e4));
}
function ssrRenderList(e4, t12) {
  if (o(e4) || isString(e4)) for (let n5 = 0, r6 = e4.length; n5 < r6; n5++) t12(e4[n5], n5);
  else if ("number" == typeof e4) for (let n5 = 0; n5 < e4; n5++) t12(n5 + 1, n5);
  else if (isObject(e4)) if (e4[Symbol.iterator]) {
    let n5 = 0;
    for (const r6 of e4) t12(r6, n5++);
  } else {
    const n5 = Object.keys(e4);
    for (let r6 = 0, s6 = n5.length; r6 < s6; r6++) {
      const s7 = n5[r6];
      t12(e4[s7], s7, r6);
    }
  }
}
function ssrRenderSuspense(e4, { default: t12 }) {
  t12 ? t12() : e4("<!---->");
}
function createBuffer() {
  let e4 = false;
  const t12 = [];
  return { getBuffer: /* @__PURE__ */ __name(() => t12, "getBuffer"), push(n5) {
    const r6 = isString(n5);
    e4 && r6 ? t12[t12.length - 1] += n5 : (t12.push(n5), e4 = r6, (isPromise(n5) || o(n5) && n5.hasAsync) && (t12.hasAsync = true));
  } };
}
function renderComponentVNode(e4, t12 = null, n5) {
  const r6 = e4.component = as(e4, t12, null), s6 = cs(r6, true), o7 = isPromise(s6);
  let i4 = r6.sp;
  if (o7 || i4) {
    return Promise.resolve(s6).then(() => {
      if (o7 && (i4 = r6.sp), i4) return Promise.all(i4.map((e5) => e5.call(r6.proxy)));
    }).catch(NOOP).then(() => renderComponentSubTree(r6, n5));
  }
  try {
    return renderComponentSubTree(r6, n5);
  } catch (e5) {
    return Promise.reject(e5);
  }
}
function renderComponentSubTree(e4, t12) {
  const n5 = e4.type, { getBuffer: r6, push: s6 } = createBuffer();
  if (isFunction(n5)) {
    let r7 = us(e4);
    if (!n5.props) for (const t13 in e4.attrs) t13.startsWith("data-v-") && ((r7.props || (r7.props = {}))[t13] = "");
    renderVNode(s6, e4.subTree = r7, e4, t12);
  } else {
    e4.render && e4.render !== NOOP || e4.ssrRender || n5.ssrRender || !isString(n5.template) || (n5.ssrRender = (function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    })(n5.template));
    const r7 = e4.ssrRender || n5.ssrRender;
    if (r7) {
      let n6 = false !== e4.inheritAttrs ? e4.attrs : void 0, o7 = false, i4 = e4;
      for (; ; ) {
        const e5 = i4.vnode.scopeId;
        e5 && (o7 || (n6 = { ...n6 }, o7 = true), n6[e5] = "");
        const t13 = i4.parent;
        if (!t13 || !t13.subTree || t13.subTree !== i4.vnode) break;
        i4 = t13;
      }
      if (t12) {
        o7 || (n6 = { ...n6 });
        const e5 = t12.trim().split(" ");
        for (let t13 = 0; t13 < e5.length; t13++) n6[e5[t13]] = "";
      }
      const a8 = ls(e4);
      try {
        r7(e4.proxy, s6, e4, n6, e4.props, e4.setupState, e4.data, e4.ctx);
      } catch (t13) {
        handleError(t13, e4, 1);
      } finally {
        ls(a8);
      }
    } else e4.render && e4.render !== NOOP ? renderVNode(s6, e4.subTree = us(e4), e4, t12) : (n5.name || n5.__file, s6("<!---->"));
  }
  return r6();
}
function renderVNode(e4, t12, n5, r6) {
  const { type: s6, shapeFlag: o7, children: i4, dirs: a8, props: l5 } = t12;
  switch (a8 && (t12.props = (function(e5, t13, n6) {
    const r7 = [];
    for (let t14 = 0; t14 < n6.length; t14++) {
      const s7 = n6[t14], { dir: { getSSRProps: o8 } } = s7;
      if (o8) {
        const t15 = o8(s7, e5);
        t15 && r7.push(t15);
      }
    }
    return mergeProps(t13 || {}, ...r7);
  })(t12, l5, a8)), s6) {
    case Tn2:
      e4(escapeHtml(i4));
      break;
    case Rn2:
      e4(i4 ? `<!--${escapeHtmlComment(i4)}-->` : "<!---->");
      break;
    case An2:
      e4(i4);
      break;
    case wn2:
      t12.slotScopeIds && (r6 = (r6 ? r6 + " " : "") + t12.slotScopeIds.join(" ")), e4("<!--[-->"), renderVNodeChildren(e4, i4, n5, r6), e4("<!--]-->");
      break;
    default:
      1 & o7 ? (function(e5, t13, n6, r7) {
        const s7 = t13.type;
        let { props: o8, children: i5, shapeFlag: a9, scopeId: l6 } = t13, c4 = `<${s7}`;
        o8 && (c4 += ssrRenderAttrs(o8, s7));
        const u5 = [], appendScopeId = /* @__PURE__ */ __name((e6) => {
          !e6 || o8 && hasOwn(o8, e6) || u5.includes(e6) || (c4 += ` ${e6}`, u5.push(e6));
        }, "appendScopeId");
        l6 && appendScopeId(l6);
        let p5 = n6, d5 = t13;
        for (; p5 && d5 === p5.subTree; ) d5 = p5.vnode, d5.scopeId && appendScopeId(d5.scopeId), p5 = p5.parent;
        if (r7) {
          const e6 = r7.trim().split(" ");
          for (let t14 = 0; t14 < e6.length; t14++) appendScopeId(e6[t14]);
        }
        if (e5(c4 + ">"), !M(s7)) {
          let t14 = false;
          o8 && (o8.innerHTML ? (t14 = true, e5(o8.innerHTML)) : o8.textContent ? (t14 = true, e5(escapeHtml(o8.textContent))) : "textarea" === s7 && o8.value && (t14 = true, e5(escapeHtml(o8.value)))), t14 || (8 & a9 ? e5(escapeHtml(i5)) : 16 & a9 && renderVNodeChildren(e5, i5, n6, r7)), e5(`</${s7}>`);
        }
      })(e4, t12, n5, r6) : 6 & o7 ? e4(renderComponentVNode(t12, n5, r6)) : 64 & o7 ? (function(e5, t13, n6, r7) {
        const s7 = t13.props && t13.props.to, o8 = t13.props && t13.props.disabled;
        if (!s7) return [];
        if (!isString(s7)) return [];
        !(function(e6, t14, n7, r8, s8) {
          e6("<!--teleport start-->");
          const o9 = s8.appContext.provides[Vt2], i5 = o9.__teleportBuffers || (o9.__teleportBuffers = {}), a9 = i5[n7] || (i5[n7] = []), l6 = a9.length;
          let c4;
          if (r8) t14(e6), c4 = "<!--teleport start anchor--><!--teleport anchor-->";
          else {
            const { getBuffer: e7, push: n8 } = createBuffer();
            n8("<!--teleport start anchor-->"), t14(n8), n8("<!--teleport anchor-->"), c4 = e7();
          }
          a9.splice(l6, 0, c4), (isPromise(c4) || o(c4) && c4.hasAsync) && (a9.hasAsync = true), e6("<!--teleport end-->");
        })(e5, (e6) => {
          renderVNodeChildren(e6, t13.children, n6, r7);
        }, s7, o8 || "" === o8, n6);
      })(e4, t12, n5, r6) : 128 & o7 && renderVNode(e4, t12.ssContent, n5, r6);
  }
}
function renderVNodeChildren(e4, t12, n5, r6) {
  for (let s6 = 0; s6 < t12.length; s6++) renderVNode(e4, ps(t12[s6]), n5, r6);
}
function nestedUnrollBuffer(e4, t12, n5) {
  if (!e4.hasAsync) return t12 + unrollBufferSync$1(e4);
  let r6 = t12;
  for (let t13 = n5; t13 < e4.length; t13 += 1) {
    const n6 = e4[t13];
    if (isString(n6)) {
      r6 += n6;
      continue;
    }
    if (isPromise(n6)) return n6.then((n7) => (e4[t13] = n7, nestedUnrollBuffer(e4, r6, t13)));
    const s6 = nestedUnrollBuffer(n6, r6, 0);
    if (isPromise(s6)) return s6.then((n7) => (e4[t13] = n7, nestedUnrollBuffer(e4, "", t13)));
    r6 = s6;
  }
  return r6;
}
function unrollBuffer$1(e4) {
  return nestedUnrollBuffer(e4, "", 0);
}
function unrollBufferSync$1(e4) {
  let t12 = "";
  for (let n5 = 0; n5 < e4.length; n5++) {
    let r6 = e4[n5];
    isString(r6) ? t12 += r6 : t12 += unrollBufferSync$1(r6);
  }
  return t12;
}
async function renderToString(e4, t12 = {}) {
  if (hs(e4)) return renderToString(createApp({ render: /* @__PURE__ */ __name(() => e4, "render") }), t12);
  const n5 = createVNode(e4._component, e4._props);
  n5.appContext = e4._context, e4.provide(Vt2, t12);
  const r6 = await renderComponentVNode(n5), s6 = await unrollBuffer$1(r6);
  if (await (async function(e5) {
    if (e5.__teleportBuffers) {
      e5.teleports = e5.teleports || {};
      for (const t13 in e5.__teleportBuffers) e5.teleports[t13] = await unrollBuffer$1(e5.__teleportBuffers[t13]);
    }
  })(t12), t12.__watcherHandles) for (const e5 of t12.__watcherHandles) e5();
  return s6;
}
function is_primitive(e4) {
  return null === e4 || "object" != typeof e4 && "function" != typeof e4;
}
function is_plain_object(e4) {
  const t12 = Object.getPrototypeOf(e4);
  return t12 === Object.prototype || null === t12 || null === Object.getPrototypeOf(t12) || Object.getOwnPropertyNames(t12).sort().join("\0") === Ss;
}
function get_type(e4) {
  return Object.prototype.toString.call(e4).slice(8, -1);
}
function get_escaped_char(e4) {
  switch (e4) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e4 < " " ? `\\u${e4.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e4) {
  let t12 = "", n5 = 0;
  const r6 = e4.length;
  for (let s6 = 0; s6 < r6; s6 += 1) {
    const r7 = get_escaped_char(e4[s6]);
    r7 && (t12 += e4.slice(n5, s6) + r7, n5 = s6 + 1);
  }
  return `"${0 === n5 ? e4 : t12 + e4.slice(n5)}"`;
}
function enumerable_symbols(e4) {
  return Object.getOwnPropertySymbols(e4).filter((t12) => Object.getOwnPropertyDescriptor(e4, t12).enumerable);
}
function stringify_key(e4) {
  return Cs.test(e4) ? "." + e4 : "[" + JSON.stringify(e4) + "]";
}
function is_valid_array_index_string(e4) {
  if (0 === e4.length) return false;
  if (e4.length > 1 && 48 === e4.charCodeAt(0)) return false;
  for (let t13 = 0; t13 < e4.length; t13++) {
    const n5 = e4.charCodeAt(t13);
    if (n5 < 48 || n5 > 57) return false;
  }
  return t12 = +e4, !(!Number.isInteger(t12) || t12 < 0 || t12 > 4294967294);
  var t12;
}
function valid_array_indices(e4) {
  const t12 = Object.keys(e4);
  return t12.length = (function(e5) {
    for (var t13 = e5.length - 1; t13 >= 0 && !is_valid_array_index_string(e5[t13]); t13--) ;
    return t13 + 1;
  })(t12), t12;
}
function uneval(e4, t12) {
  const n5 = /* @__PURE__ */ new Map(), r6 = [], s6 = /* @__PURE__ */ new Map();
  !(/* @__PURE__ */ __name(function walk2(t13) {
    if (is_primitive(t13)) {
      if ("symbol" == typeof t13) throw new DevalueError("Cannot stringify a Symbol primitive", r6, t13, e4);
    } else {
      if (n5.has(t13)) return void n5.set(t13, n5.get(t13) + 1);
      if (n5.set(t13, 1), "function" == typeof t13) throw new DevalueError("Cannot stringify a function", r6, t13, e4);
      switch (get_type(t13)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
        case "ArrayBuffer":
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        case "Array":
          t13.forEach((e5, t14) => {
            r6.push(`[${t14}]`), walk2(e5), r6.pop();
          });
          break;
        case "Set":
          Array.from(t13).forEach(walk2);
          break;
        case "Map":
          for (const [e5, n6] of t13) r6.push(`.get(${is_primitive(e5) ? stringify_primitive$1(e5) : "..."})`), walk2(e5), walk2(n6), r6.pop();
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "DataView":
          return void walk2(t13.buffer);
        default:
          if (!is_plain_object(t13)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", r6, t13, e4);
          if (enumerable_symbols(t13).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", r6, t13, e4);
          for (const n6 of Object.keys(t13)) {
            if ("__proto__" === n6) throw new DevalueError("Cannot stringify objects with __proto__ keys", r6, t13, e4);
            r6.push(stringify_key(n6)), walk2(t13[n6]), r6.pop();
          }
      }
    }
  }, "walk"))(e4);
  const o7 = /* @__PURE__ */ new Map();
  function stringify3(e5) {
    if (o7.has(e5)) return o7.get(e5);
    if (is_primitive(e5)) return stringify_primitive$1(e5);
    if (s6.has(e5)) return s6.get(e5);
    const t13 = get_type(e5);
    switch (t13) {
      case "Number":
      case "String":
      case "Boolean":
      case "BigInt":
        return `Object(${stringify3(e5.valueOf())})`;
      case "RegExp":
        const { source: n6, flags: r7 } = e5;
        return r7 ? `new RegExp(${stringify_string(n6)},"${r7}")` : `new RegExp(${stringify_string(n6)})`;
      case "Date":
        return `new Date(${e5.getTime()})`;
      case "URL":
        return `new URL(${stringify_string(e5.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${stringify_string(e5.toString())})`;
      case "Array": {
        let t14 = false, n7 = "[";
        for (let r8 = 0; r8 < e5.length; r8 += 1) if (r8 > 0 && (n7 += ","), Object.hasOwn(e5, r8)) n7 += stringify3(e5[r8]);
        else if (!t14) {
          const n8 = valid_array_indices(e5), r9 = n8.length, s8 = String(e5.length).length;
          if (e5.length + 2 > 25 + s8 + r9 * (s8 + 2)) {
            const t15 = n8.map((t16) => `${t16}:${stringify3(e5[t16])}`).join(",");
            return `Object.assign(Array(${e5.length}),{${t15}})`;
          }
          t14 = true;
        }
        return n7 + (0 === e5.length || e5.length - 1 in e5 ? "" : ",") + "]";
      }
      case "Set":
      case "Map":
        return `new ${t13}([${Array.from(e5).map(stringify3).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Float16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        let n7 = `new ${t13}`;
        if (o7.has(e5.buffer) ? n7 += `(${stringify3(e5.buffer)})` : n7 += `([${stringify_typed_array_elements(t13, e5.buffer)}])`, e5.byteLength !== e5.buffer.byteLength) {
          const t14 = e5.byteOffset / e5.BYTES_PER_ELEMENT;
          n7 += `.subarray(${t14},${t14 + e5.length})`;
        }
        return n7;
      }
      case "DataView": {
        let t14 = "new DataView";
        return o7.has(e5.buffer) ? t14 += `(${stringify3(e5.buffer)}` : t14 += `(new Uint8Array([${new Uint8Array(e5.buffer)}]).buffer`, e5.byteLength !== e5.buffer.byteLength && (t14 += `,${e5.byteOffset},${e5.byteLength}`), t14 + ")";
      }
      case "ArrayBuffer":
        return `new Uint8Array([${new Uint8Array(e5).toString()}]).buffer`;
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${t13}.from(${stringify_string(e5.toString())})`;
      default:
        const s7 = Object.keys(e5), i5 = s7.map((t14) => `${(function(e6) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e6) ? e6 : escape_unsafe_chars(JSON.stringify(e6));
        })(t14)}:${stringify3(e5[t14])}`).join(",");
        return null === Object.getPrototypeOf(e5) ? s7.length > 0 ? `{${i5},__proto__:null}` : "{__proto__:null}" : `{${i5}}`;
    }
  }
  __name(stringify3, "stringify");
  Array.from(n5).filter((e5) => e5[1] > 1).sort((e5, t13) => t13[1] - e5[1]).forEach((e5, t13) => {
    o7.set(e5[0], (function(e6) {
      let t14 = "";
      do {
        t14 = ws[e6 % 54] + t14, e6 = ~~(e6 / 54) - 1;
      } while (e6 >= 0);
      return Rs.test(t14) ? `${t14}0` : t14;
    })(t13));
  });
  const i4 = stringify3(e4);
  if (o7.size) {
    const e5 = [], t13 = [], n6 = [], r7 = [];
    o7.forEach((i5, a9) => {
      if (e5.push(i5), s6.has(a9)) return void n6.push(s6.get(a9));
      if (is_primitive(a9)) return void n6.push(stringify_primitive$1(a9));
      const l5 = get_type(a9);
      switch (l5) {
        case "Number":
        case "String":
        case "Boolean":
        case "BigInt":
          n6.push(`Object(${stringify3(a9.valueOf())})`);
          break;
        case "RegExp":
          const { source: e6, flags: s7 } = a9, c4 = s7 ? `new RegExp(${stringify_string(e6)},"${s7}")` : `new RegExp(${stringify_string(e6)})`;
          n6.push(c4);
          break;
        case "Date":
          n6.push(`new Date(${a9.getTime()})`);
          break;
        case "URL":
          n6.push(`new URL(${stringify_string(a9.toString())})`);
          break;
        case "URLSearchParams":
          n6.push(`new URLSearchParams(${stringify_string(a9.toString())})`);
          break;
        case "Array":
          n6.push(`Array(${a9.length})`), a9.forEach((e7, n7) => {
            t13.push(`${i5}[${n7}]=${stringify3(e7)}`);
          });
          break;
        case "Set": {
          n6.push("new Set");
          const e7 = Array.from(a9).map((e8) => `.add(${stringify3(e8)})`);
          e7.length > 0 && t13.push(i5 + e7.join(""));
          break;
        }
        case "Map": {
          n6.push("new Map");
          const e7 = Array.from(a9).map(([e8, t14]) => `.set(${stringify3(e8)}, ${stringify3(t14)})`);
          e7.length > 0 && t13.push(i5 + e7.join(""));
          break;
        }
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          let e7 = `new ${l5}`;
          if (o7.has(a9.buffer) ? e7 += `(${stringify3(a9.buffer)})` : e7 += `([${stringify_typed_array_elements(l5, a9.buffer)}])`, a9.byteLength !== a9.buffer.byteLength) {
            const t14 = a9.byteOffset / a9.BYTES_PER_ELEMENT;
            e7 += `.subarray(${t14},${t14 + a9.length})`;
          }
          n6.push("{}"), r7.push(`${i5}=${e7}`);
          break;
        }
        case "DataView": {
          let e7 = "new DataView";
          o7.has(a9.buffer) ? e7 += `(${stringify3(a9.buffer)}` : e7 += `(new Uint8Array([${new Uint8Array(a9.buffer)}]).buffer`, a9.byteLength !== a9.buffer.byteLength && (e7 += `,${a9.byteOffset},${a9.byteLength}`), e7 += ")", n6.push("{}"), r7.push(`${i5}=${e7}`);
          break;
        }
        case "ArrayBuffer":
          n6.push(`new Uint8Array([${new Uint8Array(a9)}]).buffer`);
          break;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          n6.push(`${l5}.from(${stringify_string(a9.toString())})`);
          break;
        default:
          n6.push(null === Object.getPrototypeOf(a9) ? "Object.create(null)" : "{}"), Object.keys(a9).forEach((e7) => {
            t13.push(`${i5}${(function(e8) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e8) ? `.${e8}` : `[${escape_unsafe_chars(JSON.stringify(e8))}]`;
            })(e7)}=${stringify3(a9[e7])}`);
          });
      }
    }), t13.push(`return ${i4}`);
    const a8 = [...r7, ...t13].join(";");
    return e5.length > 65534 ? `(function(){var[${e5.join(",")}]=arguments[0];${a8}}([${n6.join(",")}]))` : `(function(${e5.join(",")}){${a8}}(${n6.join(",")}))`;
  }
  return i4;
}
function stringify_typed_array_elements(e4, t12) {
  const n5 = new globalThis[e4](t12);
  return "BigInt64Array" === e4 || "BigUint64Array" === e4 ? Array.from(n5, (e5) => `${e5}n`).join(",") : n5 instanceof Float32Array || n5 instanceof Float64Array || "undefined" != typeof Float16Array && n5 instanceof Float16Array ? Array.from(n5, (e5) => Object.is(e5, -0) ? "-0" : `${e5}`).join(",") : n5.toString();
}
function escape_unsafe_char(e4) {
  return ks[e4] || e4;
}
function escape_unsafe_chars(e4) {
  return e4.replace(Ts, escape_unsafe_char);
}
function stringify_primitive$1(e4) {
  const t12 = typeof e4;
  if ("string" === t12) return stringify_string(e4);
  if (void 0 === e4) return "void 0";
  if (0 === e4 && 1 / e4 < 0) return "-0";
  const n5 = String(e4);
  return "number" === t12 ? n5.replace(/^(-)?0\./, "$1.") : "bigint" === t12 ? e4 + "n" : n5;
}
function stringify(e4, t12, n5) {
  const r6 = (function(e5, t13, n6) {
    const r7 = (a8 = Ns, a8), s6 = [], o7 = /* @__PURE__ */ new Map(), i4 = [];
    var a8;
    if (n6) for (const e6 of Object.getOwnPropertyNames(n6)) i4.push({ key: e6, fn: n6[e6] });
    const l5 = [];
    let c4 = 0;
    function flatten(e6, n7) {
      const a9 = r7.typeOf(e6);
      if ("undefined" === a9) return -1;
      let u6;
      if ("number" === a9) {
        if (u6 = r7.toPrimitive(e6), Number.isNaN(u6)) return -3;
        if (u6 === 1 / 0) return -4;
        if (u6 === -1 / 0) return -5;
        if (0 === u6 && 1 / u6 < 0) return -6;
      }
      const p5 = r7.identify(e6);
      if (o7.has(p5)) return o7.get(p5);
      n7 ??= c4++, o7.set(p5, n7);
      for (const { key: t14, fn: r8 } of i4) {
        const o8 = r8(e6);
        if (o8) return s6[n7] = `["${t14}",${flatten(o8)}]`, n7;
      }
      if ("function" === a9) throw new DevalueError("Cannot stringify a function", l5, e6, t13);
      if ("symbol" === a9) throw new DevalueError("Cannot stringify a Symbol primitive", l5, e6, t13);
      let d5 = "";
      if ("object" !== a9) d5 = stringify_primitive("number" === a9 ? u6 : r7.toPrimitive(e6));
      else {
        if (r7.isThenable(e6)) throw new DevalueError("Cannot stringify a Promise or thenable \u2014 use stringifyAsync instead", l5, e6, t13);
        {
          const n8 = r7.tagOf(e6);
          switch (n8) {
            case "Number":
            case "String":
            case "Boolean":
            case "BigInt":
              d5 = `["Object",${flatten(r7.unbox(e6))}]`;
              break;
            case "Date":
              d5 = `["Date","${r7.toISOString(e6)}"]`;
              break;
            case "URL":
              d5 = `["URL",${stringify_string(r7.toStringValue(e6))}]`;
              break;
            case "URLSearchParams":
              d5 = `["URLSearchParams",${stringify_string(r7.toStringValue(e6))}]`;
              break;
            case "RegExp":
              const { source: s7, flags: o8 } = r7.regExpInfo(e6);
              d5 = o8 ? `["RegExp",${stringify_string(s7)},"${o8}"]` : `["RegExp",${stringify_string(s7)}]`;
              break;
            case "Array": {
              let t14 = false;
              const n9 = r7.lengthOf(e6);
              d5 = "[";
              for (let s8 = 0; s8 < n9; s8 += 1) if (s8 > 0 && (d5 += ","), r7.hasOwn(e6, s8)) l5.push(`[${s8}]`), d5 += flatten(r7.get(e6, s8)), l5.pop();
              else if (t14) d5 += -2;
              else {
                const s9 = r7.indicesOf(e6), o9 = s9.length, i5 = String(n9).length;
                if (3 * (n9 - o9) > 4 + i5 + o9 * (i5 + 1)) {
                  d5 = "[-7," + n9;
                  for (let t15 = 0; t15 < s9.length; t15++) {
                    const n10 = s9[t15];
                    l5.push(`[${n10}]`), d5 += "," + n10 + "," + flatten(r7.get(e6, n10)), l5.pop();
                  }
                  break;
                }
                t14 = true, d5 += -2;
              }
              d5 += "]";
              break;
            }
            case "Set":
              d5 = '["Set"';
              for (const t14 of r7.valuesOf(e6)) d5 += `,${flatten(t14)}`;
              d5 += "]";
              break;
            case "Map":
              d5 = '["Map"';
              for (const [t14, n9] of r7.entriesOf(e6)) {
                const e7 = r7.typeOf(t14), s8 = "object" !== e7 && "function" !== e7 && "symbol" !== e7;
                l5.push(`.get(${s8 ? stringify_primitive(r7.toPrimitive(t14)) : "..."})`), d5 += `,${flatten(t14)},${flatten(n9)}`, l5.pop();
              }
              d5 += "]";
              break;
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Float16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array": {
              const t14 = r7.viewInfo(e6);
              d5 = '["' + n8 + '",' + flatten(t14.buffer), t14.byteLength !== t14.bufferByteLength && (d5 += `,${t14.byteOffset},${t14.length}`), d5 += "]";
              break;
            }
            case "DataView": {
              const t14 = r7.viewInfo(e6);
              d5 = '["' + n8 + '",' + flatten(t14.buffer), t14.byteLength !== t14.bufferByteLength && (d5 += `,${t14.byteOffset},${t14.byteLength}`), d5 += "]";
              break;
            }
            case "ArrayBuffer":
              d5 = `["ArrayBuffer","${Es(r7.toArrayBuffer(e6))}"]`;
              break;
            case "Temporal.Duration":
            case "Temporal.Instant":
            case "Temporal.PlainDate":
            case "Temporal.PlainTime":
            case "Temporal.PlainDateTime":
            case "Temporal.PlainMonthDay":
            case "Temporal.PlainYearMonth":
            case "Temporal.ZonedDateTime":
              d5 = `["${n8}",${stringify_string(r7.toStringValue(e6))}]`;
              break;
            default: {
              const n9 = r7.shapeOf(e6);
              if ("not-plain" === n9.kind) throw new DevalueError("Cannot stringify arbitrary non-POJOs", l5, e6, t13);
              if ("symbol-keys" === n9.kind) throw new DevalueError("Cannot stringify POJOs with symbolic keys", l5, e6, t13);
              if ("null-proto" === n9.kind) {
                d5 = '["null"';
                for (const s8 of n9.keys) {
                  if ("__proto__" === s8) throw new DevalueError("Cannot stringify objects with __proto__ keys", l5, e6, t13);
                  l5.push(stringify_key(s8)), d5 += `,${stringify_string(s8)},${flatten(r7.get(e6, s8))}`, l5.pop();
                }
                d5 += "]";
              } else {
                d5 = "{";
                let s8 = false;
                for (const o9 of n9.keys) {
                  if ("__proto__" === o9) throw new DevalueError("Cannot stringify objects with __proto__ keys", l5, e6, t13);
                  s8 && (d5 += ","), s8 = true, l5.push(stringify_key(o9)), d5 += `${stringify_string(o9)}:${flatten(r7.get(e6, o9))}`, l5.pop();
                }
                d5 += "}";
              }
            }
          }
        }
      }
      return s6[n7] = d5, n7;
    }
    __name(flatten, "flatten");
    const u5 = flatten(t13);
    return u5 < 0 ? `${u5}` : s6;
  })(0, e4, t12);
  return "string" == typeof r6 ? r6 : `[${r6.join(",")}]`;
}
function stringify_primitive(e4) {
  const t12 = typeof e4;
  return "string" === t12 ? stringify_string(e4) : void 0 === e4 ? (-1).toString() : 0 === e4 && 1 / e4 < 0 ? (-6).toString() : "bigint" === t12 ? `["BigInt","${e4}"]` : String(e4);
}
function renderPayloadJsonScript(e4) {
  const t12 = { type: "application/json", innerHTML: e4.data ? (n5 = stringify(e4.data, e4.ssrContext["~payloadReducers"]), n5.replaceAll("/", "\\u002F")) : "", "data-nuxt-data": "nuxt-app", "data-ssr": !e4.ssrContext.noSSR };
  var n5;
  t12.id = "__NUXT_DATA__", e4.src && (t12["data-src"] = e4.src);
  return [t12, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e4.ssrContext.config)}` }];
}
function cwd2() {
  return void 0 !== g3 && "function" == typeof g3.cwd ? g3.cwd().replace(/\\/g, "/") : "/";
}
function normalizeChunks(e4) {
  const t12 = [];
  for (const n5 of e4) {
    const e5 = n5?.trim();
    e5 && t12.push(e5);
  }
  return t12;
}
function joinTags(e4) {
  return e4.join("");
}
function joinAttrs(e4) {
  return 0 === e4.length ? "" : " " + e4.join(" ");
}
function renderHTMLDocument(e4) {
  return `<!DOCTYPE html><html${joinAttrs(e4.htmlAttrs)}><head>${joinTags(e4.head)}</head><body${joinAttrs(e4.bodyAttrs)}>${joinTags(e4.bodyPrepend)}${joinTags(e4.body)}${joinTags(e4.bodyAppend)}</body></html>`;
}
function stripInlineOnlyPayloadFields(e4) {
  if (!e4.prefetchLinks) return e4;
  const { prefetchLinks: t12, ...n5 } = e4;
  return n5;
}
var he, ge2, me2, ye2, ve2, _e2, be2, ke2, Se2, Ce2, we2, Te2, Re2, Ae2, hasContent, xe2, Ee2, Pe2, Oe2, $e2, Ne2, He2, Me2, sortTags$1, DEFAULT_TAG_WEIGHT, Ve2, isTruthy, Ie2, Le2, De2, je2, Fe2, Be2, Ue2, We2, ze2, EffectScope, Ke2, ReactiveEffect, qe2, Je2, Ge2, Ze2, Xe2, Ye2, Link, Dep, Qe2, et2, tt2, nt2, rt2, st2, ot2, it2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, at2, lt2, ct2, ut2, toShallow, getProto, pt2, dt2, ft2, ht2, gt2, mt2, yt2, vt2, toReactive, toReadonly, RefImpl, _t2, CustomRefImpl, ObjectRefImpl, GetterRefImpl, ComputedRefImpl, bt2, kt2, St2, Ct2, wt2, Tt2, Rt2, At2, xt2, Et2, Pt2, Ot2, getId, $t2, Nt2, Ht2, Mt2, Vt2, useSSRContext, It2, Lt2, isTeleport, isTeleportDisabled, isTargetSVG, isTargetMathML, resolveTarget, Dt2, jt2, Ft3, Bt2, Ut2, recursiveGetSubtree, Wt2, zt2, Kt2, logMismatchError, getContainerType, isComment, qt2, Jt2, Gt2, Zt2, Xt2, isAsyncWrapper, isKeepAlive, Yt2, createHook, Qt2, en2, tn2, nn2, rn, sn2, on3, an2, ln2, cn2, un2, getPublicInstance, pn2, hasSetupBinding, dn2, fn, hn2, gn2, mn2, yn2, getModelModifiers, vn2, getFunctionalFallthrough, filterModelListeners, _n2, createInternalObject, isInternalObject, bn2, isInternalKey, normalizeSlotValue, normalizeSlot2, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, kn2, isSuspense, Sn2, Cn2, wn2, Tn2, Rn2, An2, xn2, En2, Pn2, normalizeKey, normalizeRef, createVNode, On2, $n2, Nn2, getCurrentInstance, Hn2, Mn2, setCurrentInstance, unsetCurrentInstance, Vn2, In2, Ln2, Dn2, computed, jn2, Fn2, Bn2, Un2, setDevtoolsHook, Wn2, zn2, Kn2, qn2, Jn2, Gn2, Zn2, Xn2, Yn2, Qn2, callHook, hasExplicitCallback, er2, tr2, nr2, rr2, sr2, or2, ir2, ar2, lr3, cr2, ur2, pr2, dr2, fr2, hr2, getNow, isNativeOn, patchProp, gr2, mr2, VueElement, yr2, vr2, _r2, br2, kr2, getModelAssigner, Sr2, Cr2, wr2, Tr2, Rr2, Ar2, xr2, Er2, Pr2, Or2, $r2, Nr2, Hr2, render, createApp, createSSRApp, Mr2, initDirectivesForSSR, Vr, Ir, Lr, Dr2, jr2, Fr2, Br2, Ur2, sortTags, formatKey, Wr2, zr2, Kr2, qr2, Jr2, Gr3, Zr, Xr2, Yr, Qr, es, ts, ns, rs, ss, os, is, as, ls, cs, us, ps, ds, fs, hs, gs, ms, ys, getPrecomputedDependencies, vs, _s, bs, ks, DevalueError, Ss, Cs, ws, Ts, Rs, As, xs, Es, Ps, Os, $s, Ns, Hs, Ms, Vs, Is, Ls, Ds, resolve, isAbsolute, js, Fs, Bs, Us, Ws, zs;
var init_renderer = __esm({
  ".output/server/chunks/routes/renderer.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_shared_esm_bundler();
    __name(formatDiagnostic, "formatDiagnostic");
    __name(toValueWithArgs, "toValueWithArgs");
    __name(createConsoleReporter, "createConsoleReporter");
    he = Error.captureStackTrace;
    ge2 = class Diagnostic extends Error {
      static {
        __name(this, "Diagnostic");
      }
      name;
      code;
      docs;
      fix;
      sources;
      get why() {
        return this.message;
      }
      constructor(e4, t12 = Diagnostic) {
        super(e4.why, { cause: e4.cause }), this.code = this.name = e4.code, this.fix = e4.fix, this.docs = e4.docs, this.sources = e4.sources, he?.(this, t12);
      }
      toJSON() {
        return { name: this.name, why: this.why, fix: this.fix, docs: this.docs, sources: this.sources, cause: this.cause, stack: this.stack };
      }
    };
    __name(deriveDocs, "deriveDocs");
    __name(defineDiagnostics, "defineDiagnostics");
    __name(defineProdDiagnostics, "defineProdDiagnostics");
    me2 = defineDiagnostics({ docsBase: /* @__PURE__ */ __name((e4) => `https://nuxt.com/docs/4.x/errors/${e4.replace("NUXT_", "").toLowerCase()}`, "docsBase"), reporters: [createConsoleReporter(void 0)], codes: { NUXT_E8001: { why: /* @__PURE__ */ __name((e4) => `\`render:html\` mutated \`body\`/\`bodyAppend\` while streaming (\`${e4.path}\`). These fields are silently dropped because the body is about to stream.`, "why"), fix: "Use the `render:html:close` hook instead.", docs: false }, NUXT_E8002: { why: /* @__PURE__ */ __name((e4) => `SSR streaming committed the response before render completed (\`${e4.path}\`). The following mutations did not reach the client and were dropped:
  - ${e4.mutations}`, "why"), fix: /* @__PURE__ */ __name((e4) => `Move the mutation into a plugin (which runs before the shell is flushed), or opt this route out of streaming with \`routeRules: { '${e4.path}': { streaming: false } }\` or the \`render:route\` hook.`, "fix"), docs: false }, NUXT_E8003: { why: /* @__PURE__ */ __name((e4) => "Failed to stringify dev server logs." + (e4.error ? ` Received \`${e4.error}\`.` : ""), "why"), fix: "You can define your own reducer/reviver for rich types following the instructions in `https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload`.", docs: false }, NUXT_E8004: { why: "The server bundle is not available.", fix: "Ensure the Nuxt build completed successfully and the server entry was emitted by your builder.", docs: false }, NUXT_E8005: { why: "Island props cannot contain a `template` key, which the Vue runtime compiler would compile and execute.", fix: "Rename the prop (e.g. `templateName`), or disable `vue.runtimeCompiler` if you do not need runtime template compilation.", docs: false } } });
    ye2 = false;
    __name(createUnhead, "createUnhead");
    ve2 = /* @__PURE__ */ new Set(["meta", "link", "base"]);
    _e2 = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
    be2 = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
    ke2 = /* @__PURE__ */ new Set(["base", "meta", "link", "style", "script", "noscript"]);
    Se2 = /* @__PURE__ */ new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]);
    Ce2 = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
    we2 = /* @__PURE__ */ new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]);
    Te2 = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
    Re2 = /* @__PURE__ */ new Set(["theme-color", "google-site-verification", "author", "og:locale:alternate", "og:image", "og:video", "og:audio", "article:author", "article:tag", "book:author", "book:tag", "twitter:image"]);
    Ae2 = { critical: -8, high: -1, low: 2 };
    hasContent = /* @__PURE__ */ __name((e4) => "number" == typeof e4 ? Number.isFinite(e4) : e4, "hasContent");
    __name(isUnsafeKey, "isUnsafeKey");
    __name(flatHooks, "flatHooks");
    xe2 = (() => {
      if (console.createTask) return console.createTask;
      const e4 = { run: /* @__PURE__ */ __name((e5) => e5(), "run") };
      return () => e4;
    })();
    __name(callHooks, "callHooks");
    __name(serialTaskCaller, "serialTaskCaller");
    __name(parallelTaskCaller, "parallelTaskCaller");
    __name(callEachWith, "callEachWith");
    Ee2 = class {
      static {
        __name(this, "Ee");
      }
      _hooks;
      _before;
      _after;
      _deprecatedHooks;
      _deprecatedMessages;
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e4, t12, n5 = {}) {
        if (!e4 || "function" != typeof t12) return () => {
        };
        const r6 = e4;
        let s6;
        for (; this._deprecatedHooks[e4]; ) s6 = this._deprecatedHooks[e4], e4 = s6.to;
        if (s6 && !n5.allowDeprecated) {
          let e5 = s6.message;
          e5 || (e5 = `${r6} hook has been deprecated` + (s6.to ? `, please use ${s6.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e5) || (console.warn(e5), this._deprecatedMessages.add(e5));
        }
        if (!t12.name) try {
          Object.defineProperty(t12, "name", { get: /* @__PURE__ */ __name(() => "_" + e4.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t12), () => {
          t12 && (this.removeHook(e4, t12), t12 = void 0);
        };
      }
      hookOnce(e4, t12) {
        let n5, _function = /* @__PURE__ */ __name((...e5) => ("function" == typeof n5 && n5(), n5 = void 0, _function = void 0, t12(...e5)), "_function");
        return n5 = this.hook(e4, _function), n5;
      }
      removeHook(e4, t12) {
        const n5 = this._hooks[e4];
        if (n5) {
          const r6 = n5.indexOf(t12);
          -1 !== r6 && n5.splice(r6, 1), 0 === n5.length && (this._hooks[e4] = void 0);
        }
      }
      clearHook(e4) {
        this._hooks[e4] = void 0;
      }
      deprecateHook(e4, t12) {
        this._deprecatedHooks[e4] = "string" == typeof t12 ? { to: t12 } : t12;
        const n5 = this._hooks[e4] || [];
        this._hooks[e4] = void 0;
        for (const t13 of n5) this.hook(e4, t13);
      }
      deprecateHooks(e4) {
        for (const t12 in e4) this.deprecateHook(t12, e4[t12]);
      }
      addHooks(e4) {
        const t12 = flatHooks(e4), n5 = Object.keys(t12).map((e5) => this.hook(e5, t12[e5]));
        return () => {
          for (const e5 of n5) e5();
          n5.length = 0;
        };
      }
      removeHooks(e4) {
        const t12 = flatHooks(e4);
        for (const e5 in t12) this.removeHook(e5, t12[e5]);
      }
      removeAllHooks() {
        this._hooks = {};
      }
      callHook(e4, ...t12) {
        return this.callHookWith(serialTaskCaller, e4, t12);
      }
      callHookParallel(e4, ...t12) {
        return this.callHookWith(parallelTaskCaller, e4, t12);
      }
      callHookWith(e4, t12, n5) {
        const r6 = this._before || this._after ? { name: t12, args: n5, context: {} } : void 0;
        this._before && callEachWith(this._before, r6);
        const s6 = e4(this._hooks[t12] ? [...this._hooks[t12]] : [], n5, t12);
        return s6 instanceof Promise ? s6.finally(() => {
          this._after && r6 && callEachWith(this._after, r6);
        }) : (this._after && r6 && callEachWith(this._after, r6), s6);
      }
      beforeEach(e4) {
        return this._before = this._before || [], this._before.push(e4), () => {
          if (void 0 !== this._before) {
            const t12 = this._before.indexOf(e4);
            -1 !== t12 && this._before.splice(t12, 1);
          }
        };
      }
      afterEach(e4) {
        return this._after = this._after || [], this._after.push(e4), () => {
          if (void 0 !== this._after) {
            const t12 = this._after.indexOf(e4);
            -1 !== t12 && this._after.splice(t12, 1);
          }
        };
      }
    };
    __name(createHooks$1, "createHooks$1");
    Pe2 = class {
      static {
        __name(this, "Pe");
      }
      _hooks;
      constructor() {
        this._hooks = {};
      }
      hook(e4, t12) {
        return e4 && "function" == typeof t12 ? (this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t12), () => {
          t12 && (this.removeHook(e4, t12), t12 = void 0);
        }) : () => {
        };
      }
      removeHook(e4, t12) {
        const n5 = this._hooks[e4];
        if (n5) {
          const r6 = n5.indexOf(t12);
          -1 !== r6 && n5.splice(r6, 1), 0 === n5.length && (this._hooks[e4] = void 0);
        }
      }
      callHook(e4, ...t12) {
        const n5 = this._hooks[e4];
        if (n5 && 0 !== n5.length) return callHooks(n5, t12, 0);
      }
    };
    __name(callHook$2, "callHook$2");
    Oe2 = /^(?:viewport|description|keywords|robots)$/;
    $e2 = ["name", "property", "http-equiv"];
    __name(isMetaArrayDupeKey, "isMetaArrayDupeKey");
    __name(dedupeKey, "dedupeKey");
    __name(hashTag, "hashTag");
    __name(walkResolver, "walkResolver");
    Ne2 = /[\s"'<>/=\x00-\x1F\x7F]/;
    __name(normalizeStyleClassProps, "normalizeStyleClassProps");
    __name(normalizeTag, "normalizeTag");
    __name(pushNormalizedTag, "pushNormalizedTag");
    __name(normalizeEntryToTags, "normalizeEntryToTags");
    He2 = /</g;
    Me2 = /<\/script/g;
    sortTags$1 = /* @__PURE__ */ __name((e4, t12) => e4._w === t12._w ? e4._p - t12._p : e4._w - t12._w, "sortTags$1");
    DEFAULT_TAG_WEIGHT = /* @__PURE__ */ __name(() => 100, "DEFAULT_TAG_WEIGHT");
    __name(isEmptyProps, "isEmptyProps");
    Ve2 = /^tags:|:render/;
    __name(syncEntryHookCache, "syncEntryHookCache");
    __name(cloneTagsInPlace, "cloneTagsInPlace");
    __name(resolveTags, "resolveTags");
    isTruthy = /* @__PURE__ */ __name((e4) => "" === e4 || true === e4, "isTruthy");
    __name(capoTagWeight, "capoTagWeight");
    Ie2 = /"/g;
    __name(encodeAttribute, "encodeAttribute");
    __name(propsToString, "propsToString");
    Le2 = /[&<>"'/]/g;
    De2 = {};
    je2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;" };
    __name(tagToString, "tagToString");
    __name(ssrRenderTags, "ssrRenderTags");
    __name(createServerRenderer, "createServerRenderer");
    Fe2 = { htmlAttrs: { lang: "en" }, meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }] };
    Be2 = Object.assign((e4, t12) => e4 && e4.startsWith("on") && "function" == typeof t12 ? `this.dataset.${e4}fired = true` : t12, { _static: true });
    __name(createHead$1, "createHead$1");
    EffectScope = class {
      static {
        __name(this, "EffectScope");
      }
      constructor(e4 = false) {
        this.detached = e4, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this._warnOnRun = true, this.__v_skip = true, !e4 && We2 && (We2.active ? (this.parent = We2, this.index = (We2.scopes || (We2.scopes = [])).push(this) - 1) : (this._active = false, this._warnOnRun = false));
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          let e4, t12;
          if (this._isPaused = true, this.scopes) {
            const n5 = this.scopes.slice();
            for (e4 = 0, t12 = n5.length; e4 < t12; e4++) n5[e4].pause();
          }
          for (e4 = 0, t12 = this.effects.length; e4 < t12; e4++) this.effects[e4].pause();
        }
      }
      resume() {
        if (this._active && this._isPaused) {
          let e4, t12;
          if (this._isPaused = false, this.scopes) {
            const n6 = this.scopes.slice();
            for (e4 = 0, t12 = n6.length; e4 < t12; e4++) n6[e4].resume();
          }
          const n5 = this.effects.slice();
          for (e4 = 0, t12 = n5.length; e4 < t12; e4++) n5[e4].resume();
        }
      }
      run(e4) {
        if (this._active) {
          const t12 = We2;
          try {
            return We2 = this, e4();
          } finally {
            We2 = t12;
          }
        }
      }
      on() {
        1 === ++this._on && (this.prevScope = We2, We2 = this);
      }
      off() {
        if (this._on > 0 && 0 === --this._on) {
          if (We2 === this) We2 = this.prevScope;
          else {
            let e4 = We2;
            for (; e4; ) {
              if (e4.prevScope === this) {
                e4.prevScope = this.prevScope;
                break;
              }
              e4 = e4.prevScope;
            }
          }
          this.prevScope = void 0;
        }
      }
      stop(e4) {
        if (this._active) {
          let t12, n5;
          for (this._active = false, t12 = 0, n5 = this.effects.length; t12 < n5; t12++) this.effects[t12].stop();
          for (this.effects.length = 0, t12 = 0, n5 = this.cleanups.length; t12 < n5; t12++) this.cleanups[t12]();
          if (this.cleanups.length = 0, this.scopes) {
            const e5 = this.scopes.slice();
            for (t12 = 0, n5 = e5.length; t12 < n5; t12++) e5[t12].stop(true);
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !e4) {
            const e5 = this.parent.scopes.pop();
            e5 && e5 !== this && (this.parent.scopes[this.index] = e5, e5.index = this.index);
          }
          this.parent = void 0;
        }
      }
    };
    __name(getCurrentScope, "getCurrentScope");
    Ke2 = /* @__PURE__ */ new WeakSet();
    ReactiveEffect = class {
      static {
        __name(this, "ReactiveEffect");
      }
      constructor(e4) {
        this.fn = e4, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, We2 && (We2.active ? We2.effects.push(this) : this.flags &= -2);
      }
      pause() {
        this.flags |= 64;
      }
      resume() {
        64 & this.flags && (this.flags &= -65, Ke2.has(this) && (Ke2.delete(this), this.trigger()));
      }
      notify() {
        2 & this.flags && !(32 & this.flags) || 8 & this.flags || batch(this);
      }
      run() {
        if (!(1 & this.flags)) return this.fn();
        this.flags |= 2, cleanupEffect(this), prepareDeps(this);
        const e4 = ze2, t12 = Ze2;
        ze2 = this, Ze2 = true;
        try {
          return this.fn();
        } finally {
          cleanupDeps(this), ze2 = e4, Ze2 = t12, this.flags &= -3;
        }
      }
      stop() {
        if (1 & this.flags) {
          for (let e4 = this.deps; e4; e4 = e4.nextDep) removeSub(e4);
          this.deps = this.depsTail = void 0, cleanupEffect(this), this.onStop && this.onStop(), this.flags &= -2;
        }
      }
      trigger() {
        64 & this.flags ? Ke2.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
      }
      runIfDirty() {
        isDirty(this) && this.run();
      }
      get dirty() {
        return isDirty(this);
      }
    };
    Ge2 = 0;
    __name(batch, "batch");
    __name(startBatch, "startBatch");
    __name(endBatch, "endBatch");
    __name(prepareDeps, "prepareDeps");
    __name(cleanupDeps, "cleanupDeps");
    __name(isDirty, "isDirty");
    __name(refreshComputed, "refreshComputed");
    __name(removeSub, "removeSub");
    __name(removeDep, "removeDep");
    Ze2 = true;
    Xe2 = [];
    __name(pauseTracking, "pauseTracking");
    __name(resetTracking, "resetTracking");
    __name(cleanupEffect, "cleanupEffect");
    Ye2 = 0;
    Link = class {
      static {
        __name(this, "Link");
      }
      constructor(e4, t12) {
        this.sub = e4, this.dep = t12, this.version = t12.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
      }
    };
    Dep = class {
      static {
        __name(this, "Dep");
      }
      constructor(e4) {
        this.computed = e4, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
      }
      track(e4) {
        if (!ze2 || !Ze2 || ze2 === this.computed) return;
        let t12 = this.activeLink;
        if (void 0 === t12 || t12.sub !== ze2) t12 = this.activeLink = new Link(ze2, this), ze2.deps ? (t12.prevDep = ze2.depsTail, ze2.depsTail.nextDep = t12, ze2.depsTail = t12) : ze2.deps = ze2.depsTail = t12, addSub(t12);
        else if (-1 === t12.version && (t12.version = this.version, t12.nextDep)) {
          const e5 = t12.nextDep;
          e5.prevDep = t12.prevDep, t12.prevDep && (t12.prevDep.nextDep = e5), t12.prevDep = ze2.depsTail, t12.nextDep = void 0, ze2.depsTail.nextDep = t12, ze2.depsTail = t12, ze2.deps === t12 && (ze2.deps = e5);
        }
        return t12;
      }
      trigger(e4) {
        this.version++, Ye2++, this.notify(e4);
      }
      notify(e4) {
        startBatch();
        try {
          0;
          for (let e5 = this.subs; e5; e5 = e5.prevSub) e5.sub.notify() && e5.sub.dep.notify();
        } finally {
          endBatch();
        }
      }
    };
    __name(addSub, "addSub");
    Qe2 = /* @__PURE__ */ new WeakMap();
    et2 = /* @__PURE__ */ Symbol("");
    tt2 = /* @__PURE__ */ Symbol("");
    nt2 = /* @__PURE__ */ Symbol("");
    __name(track, "track");
    __name(trigger, "trigger");
    __name(reactiveReadArray, "reactiveReadArray");
    __name(shallowReadArray, "shallowReadArray");
    __name(toWrapped, "toWrapped");
    rt2 = { __proto__: null, [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, (e4) => toWrapped(this, e4));
    }, concat(...e4) {
      return reactiveReadArray(this).concat(...e4.map((e5) => o(e5) ? reactiveReadArray(e5) : e5));
    }, entries() {
      return iterator(this, "entries", (e4) => (e4[1] = toWrapped(this, e4[1]), e4));
    }, every(e4, t12) {
      return apply(this, "every", e4, t12, void 0, arguments);
    }, filter(e4, t12) {
      return apply(this, "filter", e4, t12, (e5) => e5.map((e6) => toWrapped(this, e6)), arguments);
    }, find(e4, t12) {
      return apply(this, "find", e4, t12, (e5) => toWrapped(this, e5), arguments);
    }, findIndex(e4, t12) {
      return apply(this, "findIndex", e4, t12, void 0, arguments);
    }, findLast(e4, t12) {
      return apply(this, "findLast", e4, t12, (e5) => toWrapped(this, e5), arguments);
    }, findLastIndex(e4, t12) {
      return apply(this, "findLastIndex", e4, t12, void 0, arguments);
    }, forEach(e4, t12) {
      return apply(this, "forEach", e4, t12, void 0, arguments);
    }, includes(...e4) {
      return searchProxy(this, "includes", e4);
    }, indexOf(...e4) {
      return searchProxy(this, "indexOf", e4);
    }, join(e4) {
      return reactiveReadArray(this).join(e4);
    }, lastIndexOf(...e4) {
      return searchProxy(this, "lastIndexOf", e4);
    }, map(e4, t12) {
      return apply(this, "map", e4, t12, void 0, arguments);
    }, pop() {
      return noTracking(this, "pop");
    }, push(...e4) {
      return noTracking(this, "push", e4);
    }, reduce(e4, ...t12) {
      return reduce(this, "reduce", e4, t12);
    }, reduceRight(e4, ...t12) {
      return reduce(this, "reduceRight", e4, t12);
    }, shift() {
      return noTracking(this, "shift");
    }, some(e4, t12) {
      return apply(this, "some", e4, t12, void 0, arguments);
    }, splice(...e4) {
      return noTracking(this, "splice", e4);
    }, toReversed() {
      return reactiveReadArray(this).toReversed();
    }, toSorted(e4) {
      return reactiveReadArray(this).toSorted(e4);
    }, toSpliced(...e4) {
      return reactiveReadArray(this).toSpliced(...e4);
    }, unshift(...e4) {
      return noTracking(this, "unshift", e4);
    }, values() {
      return iterator(this, "values", (e4) => toWrapped(this, e4));
    } };
    __name(iterator, "iterator");
    st2 = Array.prototype;
    __name(apply, "apply");
    __name(reduce, "reduce");
    __name(searchProxy, "searchProxy");
    __name(noTracking, "noTracking");
    ot2 = makeMap("__proto__,__v_isRef,__isVue");
    it2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e4) => "arguments" !== e4 && "caller" !== e4).map((e4) => Symbol[e4]).filter(isSymbol));
    __name(hasOwnProperty, "hasOwnProperty");
    BaseReactiveHandler = class {
      static {
        __name(this, "BaseReactiveHandler");
      }
      constructor(e4 = false, t12 = false) {
        this._isReadonly = e4, this._isShallow = t12;
      }
      get(e4, t12, n5) {
        if ("__v_skip" === t12) return e4.__v_skip;
        const r6 = this._isReadonly, s6 = this._isShallow;
        if ("__v_isReactive" === t12) return !r6;
        if ("__v_isReadonly" === t12) return r6;
        if ("__v_isShallow" === t12) return s6;
        if ("__v_raw" === t12) return n5 === (r6 ? s6 ? vt2 : yt2 : s6 ? mt2 : gt2).get(e4) || Object.getPrototypeOf(e4) === Object.getPrototypeOf(n5) ? e4 : void 0;
        const o7 = o(e4);
        if (!r6) {
          let e5;
          if (o7 && (e5 = rt2[t12])) return e5;
          if ("hasOwnProperty" === t12) return hasOwnProperty;
        }
        const i4 = Reflect.get(e4, t12, isRef2(e4) ? e4 : n5);
        if (isSymbol(t12) ? it2.has(t12) : ot2(t12)) return i4;
        if (r6 || track(e4, 0, t12), s6) return i4;
        if (isRef2(i4)) {
          const e5 = o7 && isIntegerKey(t12) ? i4 : i4.value;
          return r6 && isObject(e5) ? readonly(e5) : e5;
        }
        return isObject(i4) ? r6 ? readonly(i4) : reactive(i4) : i4;
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "MutableReactiveHandler");
      }
      constructor(e4 = false) {
        super(false, e4);
      }
      set(e4, t12, n5, r6) {
        let s6 = e4[t12];
        const o7 = o(e4) && isIntegerKey(t12);
        if (!this._isShallow) {
          const e5 = isReadonly(s6);
          if (isShallow(n5) || isReadonly(n5) || (s6 = toRaw(s6), n5 = toRaw(n5)), !o7 && isRef2(s6) && !isRef2(n5)) return e5 || (s6.value = n5), true;
        }
        const i4 = o7 ? Number(t12) < e4.length : hasOwn(e4, t12), a8 = Reflect.set(e4, t12, n5, isRef2(e4) ? e4 : r6);
        return e4 === toRaw(r6) && a8 && (i4 ? hasChanged(n5, s6) && trigger(e4, "set", t12, n5) : trigger(e4, "add", t12, n5)), a8;
      }
      deleteProperty(e4, t12) {
        const n5 = hasOwn(e4, t12);
        e4[t12];
        const r6 = Reflect.deleteProperty(e4, t12);
        return r6 && n5 && trigger(e4, "delete", t12, void 0), r6;
      }
      has(e4, t12) {
        const n5 = Reflect.has(e4, t12);
        return isSymbol(t12) && it2.has(t12) || track(e4, 0, t12), n5;
      }
      ownKeys(e4) {
        return track(e4, 0, o(e4) ? "length" : et2), Reflect.ownKeys(e4);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "ReadonlyReactiveHandler");
      }
      constructor(e4 = false) {
        super(true, e4);
      }
      set(e4, t12) {
        return true;
      }
      deleteProperty(e4, t12) {
        return true;
      }
    };
    at2 = new MutableReactiveHandler();
    lt2 = new ReadonlyReactiveHandler();
    ct2 = new MutableReactiveHandler(true);
    ut2 = new ReadonlyReactiveHandler(true);
    toShallow = /* @__PURE__ */ __name((e4) => e4, "toShallow");
    getProto = /* @__PURE__ */ __name((e4) => Reflect.getPrototypeOf(e4), "getProto");
    __name(createReadonlyMethod, "createReadonlyMethod");
    __name(createInstrumentations, "createInstrumentations");
    __name(createInstrumentationGetter, "createInstrumentationGetter");
    pt2 = { get: createInstrumentationGetter(false, false) };
    dt2 = { get: createInstrumentationGetter(false, true) };
    ft2 = { get: createInstrumentationGetter(true, false) };
    ht2 = { get: createInstrumentationGetter(true, true) };
    gt2 = /* @__PURE__ */ new WeakMap();
    mt2 = /* @__PURE__ */ new WeakMap();
    yt2 = /* @__PURE__ */ new WeakMap();
    vt2 = /* @__PURE__ */ new WeakMap();
    __name(reactive, "reactive");
    __name(shallowReactive, "shallowReactive");
    __name(readonly, "readonly");
    __name(shallowReadonly, "shallowReadonly");
    __name(createReactiveObject, "createReactiveObject");
    __name(isReactive, "isReactive");
    __name(isReadonly, "isReadonly");
    __name(isShallow, "isShallow");
    __name(isProxy, "isProxy");
    __name(toRaw, "toRaw");
    __name(markRaw, "markRaw");
    toReactive = /* @__PURE__ */ __name((e4) => isObject(e4) ? reactive(e4) : e4, "toReactive");
    toReadonly = /* @__PURE__ */ __name((e4) => isObject(e4) ? readonly(e4) : e4, "toReadonly");
    __name(isRef2, "isRef");
    __name(ref2, "ref");
    __name(shallowRef, "shallowRef");
    __name(createRef, "createRef");
    RefImpl = class {
      static {
        __name(this, "RefImpl");
      }
      constructor(e4, t12) {
        this.dep = new Dep(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t12 ? e4 : toRaw(e4), this._value = t12 ? e4 : toReactive(e4), this.__v_isShallow = t12;
      }
      get value() {
        return this.dep.track(), this._value;
      }
      set value(e4) {
        const t12 = this._rawValue, n5 = this.__v_isShallow || isShallow(e4) || isReadonly(e4);
        e4 = n5 ? e4 : toRaw(e4), hasChanged(e4, t12) && (this._rawValue = e4, this._value = n5 ? e4 : toReactive(e4), this.dep.trigger());
      }
    };
    __name(unref2, "unref");
    __name(toValue, "toValue");
    _t2 = { get: /* @__PURE__ */ __name((e4, t12, n5) => "__v_raw" === t12 ? e4 : unref2(Reflect.get(e4, t12, n5)), "get"), set: /* @__PURE__ */ __name((e4, t12, n5, r6) => {
      const s6 = e4[t12];
      return isRef2(s6) && !isRef2(n5) ? (s6.value = n5, true) : Reflect.set(e4, t12, n5, r6);
    }, "set") };
    __name(proxyRefs, "proxyRefs");
    CustomRefImpl = class {
      static {
        __name(this, "CustomRefImpl");
      }
      constructor(e4) {
        this.__v_isRef = true, this._value = void 0;
        const t12 = this.dep = new Dep(), { get: n5, set: r6 } = e4(t12.track.bind(t12), t12.trigger.bind(t12));
        this._get = n5, this._set = r6;
      }
      get value() {
        return this._value = this._get();
      }
      set value(e4) {
        this._set(e4);
      }
    };
    __name(customRef, "customRef");
    ObjectRefImpl = class {
      static {
        __name(this, "ObjectRefImpl");
      }
      constructor(e4, t12, n5) {
        this._object = e4, this._defaultValue = n5, this.__v_isRef = true, this._value = void 0, this._key = isSymbol(t12) ? t12 : String(t12), this._raw = toRaw(e4);
        let r6 = true, s6 = e4;
        if (!o(e4) || isSymbol(this._key) || !isIntegerKey(this._key)) do {
          r6 = !isProxy(s6) || isShallow(s6);
        } while (r6 && (s6 = s6.__v_raw));
        this._shallow = r6;
      }
      get value() {
        let e4 = this._object[this._key];
        return this._shallow && (e4 = unref2(e4)), this._value = void 0 === e4 ? this._defaultValue : e4;
      }
      set value(e4) {
        if (this._shallow && isRef2(this._raw[this._key])) {
          const t12 = this._object[this._key];
          if (isRef2(t12)) return void (t12.value = e4);
        }
        this._object[this._key] = e4;
      }
      get dep() {
        return (function(e4, t12) {
          const n5 = Qe2.get(e4);
          return n5 && n5.get(t12);
        })(this._raw, this._key);
      }
    };
    GetterRefImpl = class {
      static {
        __name(this, "GetterRefImpl");
      }
      constructor(e4) {
        this._getter = e4, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
      }
      get value() {
        return this._value = this._getter();
      }
    };
    __name(propertyToRef, "propertyToRef");
    ComputedRefImpl = class {
      static {
        __name(this, "ComputedRefImpl");
      }
      constructor(e4, t12, n5) {
        this.fn = e4, this.setter = t12, this._value = void 0, this.dep = new Dep(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ye2 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t12, this.isSSR = n5;
      }
      notify() {
        if (this.flags |= 16, !(8 & this.flags) && ze2 !== this) return batch(this, true), true;
      }
      get value() {
        const e4 = this.dep.track();
        return refreshComputed(this), e4 && (e4.version = this.dep.version), this._value;
      }
      set value(e4) {
        this.setter && this.setter(e4);
      }
    };
    bt2 = {};
    kt2 = /* @__PURE__ */ new WeakMap();
    __name(onWatcherCleanup, "onWatcherCleanup");
    __name(traverse, "traverse");
    Ct2 = [];
    wt2 = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush", 15: "component update", 16: "app unmount cleanup function" };
    __name(callWithErrorHandling, "callWithErrorHandling");
    __name(callWithAsyncErrorHandling, "callWithAsyncErrorHandling");
    __name(handleError, "handleError");
    Tt2 = [];
    Rt2 = -1;
    At2 = [];
    xt2 = null;
    Et2 = 0;
    Pt2 = Promise.resolve();
    Ot2 = null;
    __name(nextTick2, "nextTick");
    __name(queueJob, "queueJob");
    __name(queueFlush, "queueFlush");
    __name(queuePostFlushCb, "queuePostFlushCb");
    __name(flushPreFlushCbs, "flushPreFlushCbs");
    __name(flushPostFlushCbs, "flushPostFlushCbs");
    getId = /* @__PURE__ */ __name((e4) => null == e4.id ? 2 & e4.flags ? -1 : 1 / 0 : e4.id, "getId");
    __name(flushJobs, "flushJobs");
    Nt2 = [];
    Ht2 = null;
    Mt2 = null;
    __name(setCurrentRenderingInstance$1, "setCurrentRenderingInstance$1");
    __name(withCtx, "withCtx");
    __name(invokeDirectiveHook, "invokeDirectiveHook");
    __name(provide, "provide");
    __name(inject, "inject");
    __name(hasInjectionContext, "hasInjectionContext");
    Vt2 = /* @__PURE__ */ Symbol.for("v-scx");
    useSSRContext = /* @__PURE__ */ __name(() => inject(Vt2), "useSSRContext");
    __name(watchEffect, "watchEffect");
    __name(watchSyncEffect, "watchSyncEffect");
    __name(watch, "watch");
    __name(doWatch, "doWatch");
    __name(instanceWatch, "instanceWatch");
    __name(createPathGetter, "createPathGetter");
    It2 = /* @__PURE__ */ new WeakMap();
    Lt2 = /* @__PURE__ */ Symbol("_vte");
    isTeleport = /* @__PURE__ */ __name((e4) => e4.__isTeleport, "isTeleport");
    isTeleportDisabled = /* @__PURE__ */ __name((e4) => e4 && (e4.disabled || "" === e4.disabled), "isTeleportDisabled");
    isTargetSVG = /* @__PURE__ */ __name((e4) => "undefined" != typeof SVGElement && e4 instanceof SVGElement, "isTargetSVG");
    isTargetMathML = /* @__PURE__ */ __name((e4) => "function" == typeof MathMLElement && e4 instanceof MathMLElement, "isTargetMathML");
    resolveTarget = /* @__PURE__ */ __name((e4, t12) => {
      const n5 = e4 && e4.to;
      if (isString(n5)) {
        if (t12) {
          return t12(n5);
        }
        return null;
      }
      return n5;
    }, "resolveTarget");
    __name(moveTeleport, "moveTeleport");
    Dt2 = { name: "Teleport", __isTeleport: true, process(e4, t12, n5, r6, s6, o7, i4, a8, l5, c4) {
      const { mc: u5, pc: p5, pbc: d5, o: { insert: f4, querySelector: g5, createText: m5, createComment: y3, parentNode: v3 } } = c4, _3 = isTeleportDisabled(t12.props);
      let { dynamicChildren: b5 } = t12;
      const mount = /* @__PURE__ */ __name((e5, t13, n6) => {
        16 & e5.shapeFlag && u5(e5.children, t13, n6, s6, o7, i4, a8, l5);
      }, "mount"), mountToTarget = /* @__PURE__ */ __name((e5 = t12) => {
        const n6 = isTeleportDisabled(e5.props), r7 = e5.target = resolveTarget(e5.props, g5), o8 = prepareAnchor(r7, e5, m5, f4);
        r7 && ("svg" !== i4 && isTargetSVG(r7) ? i4 = "svg" : "mathml" !== i4 && isTargetMathML(r7) && (i4 = "mathml"), s6 && s6.isCE && (s6.ce._teleportTargets || (s6.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r7), n6 || (mount(e5, r7, o8), updateCssVars(e5, false)));
      }, "mountToTarget"), queuePendingMount = /* @__PURE__ */ __name((e5) => {
        const mountJob = /* @__PURE__ */ __name(() => {
          if (It2.get(e5) === mountJob) {
            if (It2.delete(e5), isTeleportDisabled(e5.props)) {
              const t13 = v3(e5.el) || n5;
              mount(e5, t13, e5.anchor), updateCssVars(e5, true);
            }
            mountToTarget(e5);
          }
        }, "mountJob");
        It2.set(e5, mountJob), kn2(mountJob, o7);
      }, "queuePendingMount");
      if (null == e4) {
        const e5 = t12.el = m5(""), s7 = t12.anchor = m5("");
        if (f4(e5, n5, r6), f4(s7, n5, r6), (k4 = t12.props) && (k4.defer || "" === k4.defer) || o7 && o7.pendingBranch) return void queuePendingMount(t12);
        _3 && (mount(t12, n5, s7), updateCssVars(t12, true)), mountToTarget();
      } else {
        t12.el = e4.el;
        const r7 = t12.anchor = e4.anchor, u6 = It2.get(e4);
        if (u6) return u6.flags |= 8, It2.delete(e4), void queuePendingMount(t12);
        t12.targetStart = e4.targetStart;
        const f5 = t12.target = e4.target, m6 = t12.targetAnchor = e4.targetAnchor, y4 = isTeleportDisabled(e4.props), v4 = y4 ? n5 : f5, k5 = y4 ? r7 : m6;
        if ("svg" === i4 || isTargetSVG(f5) ? i4 = "svg" : ("mathml" === i4 || isTargetMathML(f5)) && (i4 = "mathml"), b5 ? (d5(e4.dynamicChildren, b5, v4, s6, o7, i4, a8), traverseStaticChildren(e4, t12, true)) : l5 || p5(e4, t12, v4, k5, s6, o7, i4, a8, false), _3) y4 ? t12.props && e4.props && t12.props.to !== e4.props.to && (t12.props.to = e4.props.to) : moveTeleport(t12, n5, r7, c4, 1);
        else if ((t12.props && t12.props.to) !== (e4.props && e4.props.to)) {
          const e5 = resolveTarget(t12.props, g5);
          e5 && (t12.target = e5, moveTeleport(t12, e5, null, c4, 0));
        } else y4 && moveTeleport(t12, f5, m6, c4, 1);
        updateCssVars(t12, _3);
      }
      var k4;
    }, remove(e4, t12, n5, { um: r6, o: { remove: s6 } }, o7) {
      const { shapeFlag: i4, children: a8, anchor: l5, targetStart: c4, targetAnchor: u5, target: p5, props: d5 } = e4, f4 = isTeleportDisabled(d5), g5 = o7 || !f4, m5 = It2.get(e4);
      if (m5 && (m5.flags |= 8, It2.delete(e4)), p5 && (s6(c4), s6(u5)), o7 && s6(l5), !m5 && (f4 || p5) && 16 & i4) for (let e5 = 0; e5 < a8.length; e5++) {
        const s7 = a8[e5];
        r6(s7, t12, n5, g5, !!s7.dynamicChildren);
      }
    }, move: moveTeleport, hydrate: /* @__PURE__ */ __name(function(e4, t12, n5, r6, s6, o7, { o: { nextSibling: i4, parentNode: a8, querySelector: l5, insert: c4, createText: u5 } }, p5) {
      function hydrateAnchor(e5, n6) {
        let r7 = n6;
        for (; r7; ) {
          if (r7 && 8 === r7.nodeType) {
            if ("teleport start anchor" === r7.data) t12.targetStart = r7;
            else if ("teleport anchor" === r7.data) {
              t12.targetAnchor = r7, e5._lpa = t12.targetAnchor && i4(t12.targetAnchor);
              break;
            }
          }
          r7 = i4(r7);
        }
      }
      __name(hydrateAnchor, "hydrateAnchor");
      function hydrateDisabledTeleport(e5, t13) {
        t13.anchor = p5(i4(e5), t13, a8(e5), n5, r6, s6, o7);
      }
      __name(hydrateDisabledTeleport, "hydrateDisabledTeleport");
      const d5 = t12.target = resolveTarget(t12.props, l5), f4 = isTeleportDisabled(t12.props);
      if (d5) {
        const l6 = d5._lpa || d5.firstChild;
        16 & t12.shapeFlag && (f4 ? (hydrateDisabledTeleport(e4, t12), hydrateAnchor(d5, l6), t12.targetAnchor || prepareAnchor(d5, t12, u5, c4, a8(e4) === d5 ? e4 : null)) : (t12.anchor = i4(e4), hydrateAnchor(d5, l6), t12.targetAnchor || prepareAnchor(d5, t12, u5, c4), p5(l6 && i4(l6), t12, d5, n5, r6, s6, o7))), updateCssVars(t12, f4);
      } else f4 && 16 & t12.shapeFlag && (hydrateDisabledTeleport(e4, t12), t12.targetStart = e4, t12.targetAnchor = i4(e4));
      return t12.anchor && i4(t12.anchor);
    }, "hydrate") };
    __name(updateCssVars, "updateCssVars");
    __name(prepareAnchor, "prepareAnchor");
    jt2 = /* @__PURE__ */ Symbol("_leaveCb");
    Ft3 = /* @__PURE__ */ Symbol("_enterCb");
    __name(useTransitionState, "useTransitionState");
    Bt2 = [Function, Array];
    Ut2 = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Bt2, onEnter: Bt2, onAfterEnter: Bt2, onEnterCancelled: Bt2, onBeforeLeave: Bt2, onLeave: Bt2, onAfterLeave: Bt2, onLeaveCancelled: Bt2, onBeforeAppear: Bt2, onAppear: Bt2, onAfterAppear: Bt2, onAppearCancelled: Bt2 };
    recursiveGetSubtree = /* @__PURE__ */ __name((e4) => {
      const t12 = e4.subTree;
      return t12.component ? recursiveGetSubtree(t12.component) : t12;
    }, "recursiveGetSubtree");
    __name(findNonCommentChild, "findNonCommentChild");
    Wt2 = { name: "BaseTransition", props: Ut2, setup(e4, { slots: t12 }) {
      const n5 = getCurrentInstance(), r6 = useTransitionState();
      return () => {
        const s6 = t12.default && getTransitionRawChildren(t12.default(), true), o7 = s6 && s6.length ? findNonCommentChild(s6) : n5.subTree ? createCommentVNode() : void 0;
        if (!o7) return;
        const i4 = toRaw(e4), { mode: a8 } = i4;
        if (r6.isLeaving) return emptyPlaceholder(o7);
        const l5 = getInnerChild$1(o7);
        if (!l5) return emptyPlaceholder(o7);
        let c4 = resolveTransitionHooks(l5, i4, r6, n5, (e5) => c4 = e5);
        l5.type !== Rn2 && setTransitionHooks(l5, c4);
        let u5 = n5.subTree && getInnerChild$1(n5.subTree);
        if (u5 && u5.type !== Rn2 && !isSameVNodeType(u5, l5) && recursiveGetSubtree(n5).type !== Rn2) {
          let e5 = resolveTransitionHooks(u5, i4, r6, n5);
          if (setTransitionHooks(u5, e5), "out-in" === a8 && l5.type !== Rn2) return r6.isLeaving = true, e5.afterLeave = () => {
            r6.isLeaving = false, 8 & n5.job.flags || n5.update(), delete e5.afterLeave, u5 = void 0;
          }, emptyPlaceholder(o7);
          "in-out" === a8 && l5.type !== Rn2 ? e5.delayLeave = (e6, t13, n6) => {
            getLeavingNodesForType(r6, u5)[String(u5.key)] = u5, e6[jt2] = () => {
              t13(), e6[jt2] = void 0, delete c4.delayedLeave, u5 = void 0;
            }, c4.delayedLeave = () => {
              n6(), delete c4.delayedLeave, u5 = void 0;
            };
          } : u5 = void 0;
        } else u5 && (u5 = void 0);
        return o7;
      };
    } };
    __name(getLeavingNodesForType, "getLeavingNodesForType");
    __name(resolveTransitionHooks, "resolveTransitionHooks");
    __name(emptyPlaceholder, "emptyPlaceholder");
    __name(getInnerChild$1, "getInnerChild$1");
    __name(setTransitionHooks, "setTransitionHooks");
    __name(getTransitionRawChildren, "getTransitionRawChildren");
    __name(defineComponent, "defineComponent");
    __name(markAsyncBoundary, "markAsyncBoundary");
    __name(isTemplateRefKey, "isTemplateRefKey");
    zt2 = /* @__PURE__ */ new WeakMap();
    __name(setRef, "setRef");
    __name(invalidatePendingSetRef, "invalidatePendingSetRef");
    Kt2 = false;
    logMismatchError = /* @__PURE__ */ __name(() => {
      Kt2 || (console.error("Hydration completed but contains mismatches."), Kt2 = true);
    }, "logMismatchError");
    getContainerType = /* @__PURE__ */ __name((e4) => {
      if (1 === e4.nodeType) return ((e5) => e5.namespaceURI.includes("svg") && "foreignObject" !== e5.tagName)(e4) ? "svg" : ((e5) => e5.namespaceURI.includes("MathML"))(e4) ? "mathml" : void 0;
    }, "getContainerType");
    isComment = /* @__PURE__ */ __name((e4) => 8 === e4.nodeType, "isComment");
    __name(createHydrationFunctions, "createHydrationFunctions");
    qt2 = /* @__PURE__ */ new Set(["src", "srcset", "href", "poster"]);
    __name(isUnchangedResourceProp, "isUnchangedResourceProp");
    Jt2 = "data-allow-mismatch";
    Gt2 = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
    __name(isMismatchAllowed, "isMismatchAllowed");
    __name(isMismatchAllowedByAttr, "isMismatchAllowedByAttr");
    Zt2 = getGlobalThis().requestIdleCallback || ((e4) => setTimeout(e4, 1));
    Xt2 = getGlobalThis().cancelIdleCallback || ((e4) => clearTimeout(e4));
    isAsyncWrapper = /* @__PURE__ */ __name((e4) => !!e4.type.__asyncLoader, "isAsyncWrapper");
    __name(createInnerComp, "createInnerComp");
    isKeepAlive = /* @__PURE__ */ __name((e4) => e4.type.__isKeepAlive, "isKeepAlive");
    Yt2 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e4, { slots: t12 }) {
      const n5 = getCurrentInstance(), r6 = n5.ctx;
      if (!r6.renderer) return () => {
        const e5 = t12.default && t12.default();
        return e5 && 1 === e5.length ? e5[0] : e5;
      };
      const s6 = /* @__PURE__ */ new Map(), o7 = /* @__PURE__ */ new Set();
      let i4 = null;
      const a8 = n5.suspense, { renderer: { p: l5, m: c4, um: u5, o: { createElement: p5 } } } = r6, d5 = p5("div");
      function unmount(e5) {
        resetShapeFlag(e5), u5(e5, n5, a8, true);
      }
      __name(unmount, "unmount");
      function pruneCache(e5) {
        s6.forEach((t13, n6) => {
          const r7 = getComponentName(isAsyncWrapper(t13) ? t13.type.__asyncResolved || {} : t13.type);
          r7 && !e5(r7) && pruneCacheEntry(n6);
        });
      }
      __name(pruneCache, "pruneCache");
      function pruneCacheEntry(e5) {
        const t13 = s6.get(e5);
        !t13 || i4 && isSameVNodeType(t13, i4) ? i4 && resetShapeFlag(i4) : unmount(t13), s6.delete(e5), o7.delete(e5);
      }
      __name(pruneCacheEntry, "pruneCacheEntry");
      r6.activate = (e5, t13, n6, r7, s7) => {
        const o8 = e5.component;
        c4(e5, t13, n6, 0, a8), l5(o8.vnode, e5, t13, n6, o8, a8, r7, e5.slotScopeIds, s7), kn2(() => {
          o8.isDeactivated = false, o8.a && invokeArrayFns(o8.a);
          const t14 = e5.props && e5.props.onVnodeMounted;
          t14 && invokeVNodeHook(t14, o8.parent, e5);
        }, a8);
      }, r6.deactivate = (e5) => {
        const t13 = e5.component;
        invalidateMount(t13.m), invalidateMount(t13.a), c4(e5, d5, null, 1, a8), kn2(() => {
          t13.da && invokeArrayFns(t13.da);
          const n6 = e5.props && e5.props.onVnodeUnmounted;
          n6 && invokeVNodeHook(n6, t13.parent, e5), t13.isDeactivated = true;
        }, a8);
      }, watch(() => [e4.include, e4.exclude], ([e5, t13]) => {
        e5 && pruneCache((t14) => matches(e5, t14)), t13 && pruneCache((e6) => !matches(t13, e6));
      }, { flush: "post", deep: true });
      let f4 = null;
      const cacheSubtree = /* @__PURE__ */ __name(() => {
        null != f4 && (isSuspense(n5.subTree.type) ? kn2(() => {
          const e5 = getInnerChild(n5.subTree);
          e5.component && s6.set(f4, e5);
        }, n5.subTree.suspense) : s6.set(f4, getInnerChild(n5.subTree)));
      }, "cacheSubtree");
      return en2(cacheSubtree), nn2(cacheSubtree), rn(() => {
        s6.forEach((e5) => {
          const { subTree: t13, suspense: r7 } = n5, s7 = getInnerChild(t13);
          if (e5.type === s7.type && e5.key === s7.key) {
            resetShapeFlag(s7);
            const e6 = s7.component.da;
            return void (e6 && kn2(e6, r7));
          }
          unmount(e5);
        });
      }), () => {
        if (f4 = null, !t12.default) return i4 = null;
        const n6 = t12.default(), r7 = n6[0];
        if (n6.length > 1) return i4 = null, n6;
        if (!(isVNode$2(r7) && (4 & r7.shapeFlag || 128 & r7.shapeFlag))) return i4 = null, r7;
        let a9 = getInnerChild(r7);
        if (a9.type === Rn2) return i4 = null, a9;
        const l6 = a9.type, c5 = getComponentName(isAsyncWrapper(a9) ? a9.type.__asyncResolved || {} : l6), { include: u6, exclude: p6, max: d6 } = e4;
        if (u6 && (!c5 || !matches(u6, c5)) || p6 && c5 && matches(p6, c5)) return a9.shapeFlag &= -257, i4 = a9, r7;
        const g5 = null == a9.key ? l6 : a9.key, m5 = s6.get(g5);
        return a9.el && (a9 = cloneVNode(a9), 128 & r7.shapeFlag && (r7.ssContent = a9)), f4 = g5, m5 ? (a9.el = m5.el, a9.component = m5.component, a9.transition && setTransitionHooks(a9, a9.transition), a9.shapeFlag |= 512, o7.delete(g5), o7.add(g5)) : (o7.add(g5), d6 && o7.size > parseInt(d6, 10) && pruneCacheEntry(o7.values().next().value)), a9.shapeFlag |= 256, i4 = a9, isSuspense(r7.type) ? r7 : a9;
      };
    } };
    __name(matches, "matches");
    __name(onActivated, "onActivated");
    __name(onDeactivated, "onDeactivated");
    __name(registerKeepAliveHook, "registerKeepAliveHook");
    __name(injectToKeepAliveRoot, "injectToKeepAliveRoot");
    __name(resetShapeFlag, "resetShapeFlag");
    __name(getInnerChild, "getInnerChild");
    __name(injectHook, "injectHook");
    createHook = /* @__PURE__ */ __name((e4) => (t12, n5 = Nn2) => {
      Ln2 && "sp" !== e4 || injectHook(e4, (...e5) => t12(...e5), n5);
    }, "createHook");
    Qt2 = createHook("bm");
    en2 = createHook("m");
    tn2 = createHook("bu");
    nn2 = createHook("u");
    rn = createHook("bum");
    sn2 = createHook("um");
    on3 = createHook("sp");
    an2 = createHook("rtg");
    ln2 = createHook("rtc");
    __name(onErrorCaptured, "onErrorCaptured");
    cn2 = "components";
    un2 = /* @__PURE__ */ Symbol.for("v-ndc");
    __name(resolveAsset, "resolveAsset");
    __name(resolve$1, "resolve$1");
    __name(ensureValidVNode$1, "ensureValidVNode$1");
    getPublicInstance = /* @__PURE__ */ __name((e4) => e4 ? isStatefulComponent(e4) ? getComponentPublicInstance(e4) : getPublicInstance(e4.parent) : null, "getPublicInstance");
    pn2 = n(/* @__PURE__ */ Object.create(null), { $: /* @__PURE__ */ __name((e4) => e4, "$"), $el: /* @__PURE__ */ __name((e4) => e4.vnode.el, "$el"), $data: /* @__PURE__ */ __name((e4) => e4.data, "$data"), $props: /* @__PURE__ */ __name((e4) => e4.props, "$props"), $attrs: /* @__PURE__ */ __name((e4) => e4.attrs, "$attrs"), $slots: /* @__PURE__ */ __name((e4) => e4.slots, "$slots"), $refs: /* @__PURE__ */ __name((e4) => e4.refs, "$refs"), $parent: /* @__PURE__ */ __name((e4) => getPublicInstance(e4.parent), "$parent"), $root: /* @__PURE__ */ __name((e4) => getPublicInstance(e4.root), "$root"), $host: /* @__PURE__ */ __name((e4) => e4.ce, "$host"), $emit: /* @__PURE__ */ __name((e4) => e4.emit, "$emit"), $options: /* @__PURE__ */ __name((e4) => resolveMergedOptions(e4), "$options"), $forceUpdate: /* @__PURE__ */ __name((e4) => e4.f || (e4.f = () => {
      queueJob(e4.update);
    }), "$forceUpdate"), $nextTick: /* @__PURE__ */ __name((e4) => e4.n || (e4.n = nextTick2.bind(e4.proxy)), "$nextTick"), $watch: /* @__PURE__ */ __name((e4) => instanceWatch.bind(e4), "$watch") });
    hasSetupBinding = /* @__PURE__ */ __name((e4, t12) => e4 !== t && !e4.__isScriptSetup && hasOwn(e4, t12), "hasSetupBinding");
    dn2 = { get({ _: e4 }, t12) {
      if ("__v_skip" === t12) return true;
      const { ctx: n5, setupState: r6, data: s6, props: o7, accessCache: i4, type: a8, appContext: l5 } = e4;
      if ("$" !== t12[0]) {
        const e5 = i4[t12];
        if (void 0 !== e5) switch (e5) {
          case 1:
            return r6[t12];
          case 2:
            return s6[t12];
          case 4:
            return n5[t12];
          case 3:
            return o7[t12];
        }
        else {
          if (hasSetupBinding(r6, t12)) return i4[t12] = 1, r6[t12];
          if (s6 !== t && hasOwn(s6, t12)) return i4[t12] = 2, s6[t12];
          if (hasOwn(o7, t12)) return i4[t12] = 3, o7[t12];
          if (n5 !== t && hasOwn(n5, t12)) return i4[t12] = 4, n5[t12];
          hn2 && (i4[t12] = 0);
        }
      }
      const c4 = pn2[t12];
      let u5, p5;
      return c4 ? ("$attrs" === t12 && track(e4.attrs, 0, ""), c4(e4)) : (u5 = a8.__cssModules) && (u5 = u5[t12]) ? u5 : n5 !== t && hasOwn(n5, t12) ? (i4[t12] = 4, n5[t12]) : (p5 = l5.config.globalProperties, hasOwn(p5, t12) ? p5[t12] : void 0);
    }, set({ _: e4 }, t12, n5) {
      const { data: r6, setupState: s6, ctx: o7 } = e4;
      return hasSetupBinding(s6, t12) ? (s6[t12] = n5, true) : r6 !== t && hasOwn(r6, t12) ? (r6[t12] = n5, true) : !hasOwn(e4.props, t12) && (("$" !== t12[0] || !(t12.slice(1) in e4)) && (o7[t12] = n5, true));
    }, has({ _: { data: e4, setupState: t12, accessCache: n5, ctx: r6, appContext: s6, props: o7, type: i4 } }, a8) {
      let l5;
      return !!(n5[a8] || e4 !== t && "$" !== a8[0] && hasOwn(e4, a8) || hasSetupBinding(t12, a8) || hasOwn(o7, a8) || hasOwn(r6, a8) || hasOwn(pn2, a8) || hasOwn(s6.config.globalProperties, a8) || (l5 = i4.__cssModules) && l5[a8]);
    }, defineProperty(e4, t12, n5) {
      return null != n5.get ? e4._.accessCache[t12] = 0 : hasOwn(n5, "value") && this.set(e4, t12, n5.value, null), Reflect.defineProperty(e4, t12, n5);
    } };
    fn = n({}, dn2, { get(e4, t12) {
      if (t12 !== Symbol.unscopables) return dn2.get(e4, t12, e4);
    }, has: /* @__PURE__ */ __name((e4, t12) => "_" !== t12[0] && !E(t12), "has") });
    __name(getContext, "getContext");
    __name(normalizePropsOrEmits, "normalizePropsOrEmits");
    hn2 = true;
    __name(applyOptions, "applyOptions");
    __name(callHook$1, "callHook$1");
    __name(createWatcher, "createWatcher");
    __name(resolveMergedOptions, "resolveMergedOptions");
    __name(mergeOptions2, "mergeOptions");
    gn2 = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray2, created: mergeAsArray2, beforeMount: mergeAsArray2, mounted: mergeAsArray2, beforeUpdate: mergeAsArray2, updated: mergeAsArray2, beforeDestroy: mergeAsArray2, beforeUnmount: mergeAsArray2, destroyed: mergeAsArray2, unmounted: mergeAsArray2, activated: mergeAsArray2, deactivated: mergeAsArray2, errorCaptured: mergeAsArray2, serverPrefetch: mergeAsArray2, components: mergeObjectOptions, directives: mergeObjectOptions, watch: /* @__PURE__ */ __name(function(e4, t12) {
      if (!e4) return t12;
      if (!t12) return e4;
      const n5 = n(/* @__PURE__ */ Object.create(null), e4);
      for (const r6 in t12) n5[r6] = mergeAsArray2(e4[r6], t12[r6]);
      return n5;
    }, "watch"), provide: mergeDataFn, inject: /* @__PURE__ */ __name(function(e4, t12) {
      return mergeObjectOptions(normalizeInject(e4), normalizeInject(t12));
    }, "inject") };
    __name(mergeDataFn, "mergeDataFn");
    __name(normalizeInject, "normalizeInject");
    __name(mergeAsArray2, "mergeAsArray");
    __name(mergeObjectOptions, "mergeObjectOptions");
    __name(mergeEmitsOrPropsOptions, "mergeEmitsOrPropsOptions");
    __name(createAppContext, "createAppContext");
    mn2 = 0;
    __name(createAppAPI, "createAppAPI");
    yn2 = null;
    getModelModifiers = /* @__PURE__ */ __name((e4, t12) => "modelValue" === t12 || "model-value" === t12 ? e4.modelModifiers : e4[`${t12}Modifiers`] || e4[`${p(t12)}Modifiers`] || e4[`${d(t12)}Modifiers`], "getModelModifiers");
    __name(emit2, "emit");
    vn2 = /* @__PURE__ */ new WeakMap();
    __name(normalizeEmitsOptions, "normalizeEmitsOptions");
    __name(isEmitListener, "isEmitListener");
    __name(renderComponentRoot$1, "renderComponentRoot$1");
    getFunctionalFallthrough = /* @__PURE__ */ __name((e4) => {
      let t12;
      for (const n5 in e4) ("class" === n5 || "style" === n5 || isOn(n5)) && ((t12 || (t12 = {}))[n5] = e4[n5]);
      return t12;
    }, "getFunctionalFallthrough");
    filterModelListeners = /* @__PURE__ */ __name((e4, t12) => {
      const n5 = {};
      for (const r6 in e4) isModelListener(r6) && r6.slice(9) in t12 || (n5[r6] = e4[r6]);
      return n5;
    }, "filterModelListeners");
    __name(hasPropsChanged, "hasPropsChanged");
    __name(hasPropValueChanged, "hasPropValueChanged");
    __name(updateHOCHostEl, "updateHOCHostEl");
    _n2 = {};
    createInternalObject = /* @__PURE__ */ __name(() => Object.create(_n2), "createInternalObject");
    isInternalObject = /* @__PURE__ */ __name((e4) => Object.getPrototypeOf(e4) === _n2, "isInternalObject");
    __name(setFullProps, "setFullProps");
    __name(resolvePropValue, "resolvePropValue");
    bn2 = /* @__PURE__ */ new WeakMap();
    __name(normalizePropsOptions, "normalizePropsOptions");
    __name(validatePropName, "validatePropName");
    isInternalKey = /* @__PURE__ */ __name((e4) => "_" === e4 || "_ctx" === e4 || "$stable" === e4, "isInternalKey");
    normalizeSlotValue = /* @__PURE__ */ __name((e4) => o(e4) ? e4.map(normalizeVNode$1) : [normalizeVNode$1(e4)], "normalizeSlotValue");
    normalizeSlot2 = /* @__PURE__ */ __name((e4, t12, n5) => {
      if (t12._n) return t12;
      const r6 = withCtx((...e5) => normalizeSlotValue(t12(...e5)), n5);
      return r6._c = false, r6;
    }, "normalizeSlot");
    normalizeObjectSlots = /* @__PURE__ */ __name((e4, t12, n5) => {
      const r6 = e4._ctx;
      for (const n6 in e4) {
        if (isInternalKey(n6)) continue;
        const s6 = e4[n6];
        if (isFunction(s6)) t12[n6] = normalizeSlot2(0, s6, r6);
        else if (null != s6) {
          const e5 = normalizeSlotValue(s6);
          t12[n6] = () => e5;
        }
      }
    }, "normalizeObjectSlots");
    normalizeVNodeSlots = /* @__PURE__ */ __name((e4, t12) => {
      const n5 = normalizeSlotValue(t12);
      e4.slots.default = () => n5;
    }, "normalizeVNodeSlots");
    assignSlots = /* @__PURE__ */ __name((e4, t12, n5) => {
      for (const r6 in t12) !n5 && isInternalKey(r6) || (e4[r6] = t12[r6]);
    }, "assignSlots");
    kn2 = queueEffectWithSuspense;
    __name(createRenderer$1, "createRenderer$1");
    __name(createHydrationRenderer, "createHydrationRenderer");
    __name(baseCreateRenderer, "baseCreateRenderer");
    __name(resolveChildrenNamespace, "resolveChildrenNamespace");
    __name(toggleRecurse, "toggleRecurse");
    __name(needTransition, "needTransition");
    __name(traverseStaticChildren, "traverseStaticChildren");
    __name(locateNonHydratedAsyncRoot, "locateNonHydratedAsyncRoot");
    __name(invalidateMount, "invalidateMount");
    __name(resolveAsyncComponentPlaceholder, "resolveAsyncComponentPlaceholder");
    isSuspense = /* @__PURE__ */ __name((e4) => e4.__isSuspense, "isSuspense");
    Sn2 = 0;
    Cn2 = { name: "Suspense", __isSuspense: true, process(e4, t12, n5, r6, s6, o7, i4, a8, l5, c4) {
      if (null == e4) !(function(e5, t13, n6, r7, s7, o8, i5, a9, l6) {
        const { p: c5, o: { createElement: u5 } } = l6, p5 = u5("div"), d5 = e5.suspense = createSuspenseBoundary(e5, s7, r7, t13, p5, n6, o8, i5, a9, l6);
        c5(null, d5.pendingBranch = e5.ssContent, p5, null, r7, d5, o8, i5), d5.deps > 0 ? (triggerEvent(e5, "onPending"), triggerEvent(e5, "onFallback"), c5(null, e5.ssFallback, t13, n6, r7, null, o8, i5), setActiveBranch(d5, e5.ssFallback)) : d5.resolve(false, true);
      })(t12, n5, r6, s6, o7, i4, a8, l5, c4);
      else {
        if (o7 && o7.deps > 0 && !e4.suspense.isInFallback) return t12.suspense = e4.suspense, t12.suspense.vnode = t12, void (t12.el = e4.el);
        !(function(e5, t13, n6, r7, s7, o8, i5, a9, { p: l6, um: c5, o: { createElement: u5 } }) {
          const p5 = t13.suspense = e5.suspense;
          p5.vnode = t13, t13.el = e5.el;
          const d5 = t13.ssContent, f4 = t13.ssFallback, { activeBranch: g5, pendingBranch: m5, isInFallback: y3, isHydrating: v3 } = p5;
          if (m5) p5.pendingBranch = d5, isSameVNodeType(m5, d5) ? (l6(m5, d5, p5.hiddenContainer, null, s7, p5, o8, i5, a9), p5.deps <= 0 ? p5.resolve() : y3 && (v3 || p5.isFallbackMountPending || (l6(g5, f4, n6, r7, s7, null, o8, i5, a9), setActiveBranch(p5, f4)))) : (p5.pendingId = Sn2++, v3 ? (p5.isHydrating = false, p5.activeBranch = m5) : c5(m5, s7, p5), p5.deps = 0, p5.effects.length = 0, p5.hiddenContainer = u5("div"), y3 ? (l6(null, d5, p5.hiddenContainer, null, s7, p5, o8, i5, a9), p5.deps <= 0 ? p5.resolve() : p5.isFallbackMountPending || (l6(g5, f4, n6, r7, s7, null, o8, i5, a9), setActiveBranch(p5, f4))) : g5 && isSameVNodeType(g5, d5) ? (l6(g5, d5, n6, r7, s7, p5, o8, i5, a9), p5.resolve(true)) : (l6(null, d5, p5.hiddenContainer, null, s7, p5, o8, i5, a9), p5.deps <= 0 && p5.resolve()));
          else if (g5 && isSameVNodeType(g5, d5)) l6(g5, d5, n6, r7, s7, p5, o8, i5, a9), setActiveBranch(p5, d5);
          else if (triggerEvent(t13, "onPending"), p5.pendingBranch = d5, 512 & d5.shapeFlag ? p5.pendingId = d5.component.suspenseId : p5.pendingId = Sn2++, l6(null, d5, p5.hiddenContainer, null, s7, p5, o8, i5, a9), p5.deps <= 0) p5.resolve();
          else {
            const { timeout: e6, pendingId: t14 } = p5;
            e6 > 0 ? setTimeout(() => {
              p5.pendingId === t14 && p5.fallback(f4);
            }, e6) : 0 === e6 && p5.fallback(f4);
          }
        })(e4, t12, n5, r6, s6, i4, a8, l5, c4);
      }
    }, hydrate: /* @__PURE__ */ __name(function(e4, t12, n5, r6, s6, o7, i4, a8, l5) {
      const c4 = t12.suspense = createSuspenseBoundary(t12, r6, n5, e4.parentNode, document.createElement("div"), null, s6, o7, i4, a8, true), u5 = l5(e4, c4.pendingBranch = t12.ssContent, n5, c4, o7, i4);
      0 === c4.deps && c4.resolve(false, true);
      return u5;
    }, "hydrate"), normalize: /* @__PURE__ */ __name(function(e4) {
      const { shapeFlag: t12, children: n5 } = e4, r6 = 32 & t12;
      e4.ssContent = normalizeSuspenseSlot(r6 ? n5.default : n5), e4.ssFallback = r6 ? normalizeSuspenseSlot(n5.fallback) : createVNode(Rn2);
    }, "normalize") };
    __name(triggerEvent, "triggerEvent");
    __name(createSuspenseBoundary, "createSuspenseBoundary");
    __name(normalizeSuspenseSlot, "normalizeSuspenseSlot");
    __name(queueEffectWithSuspense, "queueEffectWithSuspense");
    __name(setActiveBranch, "setActiveBranch");
    wn2 = /* @__PURE__ */ Symbol.for("v-fgt");
    Tn2 = /* @__PURE__ */ Symbol.for("v-txt");
    Rn2 = /* @__PURE__ */ Symbol.for("v-cmt");
    An2 = /* @__PURE__ */ Symbol.for("v-stc");
    xn2 = [];
    En2 = null;
    __name(openBlock, "openBlock");
    __name(closeBlock, "closeBlock");
    Pn2 = 1;
    __name(setBlockTracking, "setBlockTracking");
    __name(setupBlock, "setupBlock");
    __name(createBlock, "createBlock");
    __name(isVNode$2, "isVNode$2");
    __name(isSameVNodeType, "isSameVNodeType");
    normalizeKey = /* @__PURE__ */ __name(({ key: e4 }) => null != e4 ? e4 : null, "normalizeKey");
    normalizeRef = /* @__PURE__ */ __name(({ ref: e4, ref_key: t12, ref_for: n5 }) => ("number" == typeof e4 && (e4 = "" + e4), null != e4 ? isString(e4) || isRef2(e4) || isFunction(e4) ? { i: Ht2, r: e4, k: t12, f: !!n5 } : e4 : null), "normalizeRef");
    __name(createBaseVNode, "createBaseVNode");
    createVNode = /* @__PURE__ */ __name(function(e4, t12 = null, n5 = null, r6 = 0, s6 = null, o7 = false) {
      e4 && e4 !== un2 || (e4 = Rn2);
      if (isVNode$2(e4)) {
        const r7 = cloneVNode(e4, t12, true);
        return n5 && normalizeChildren(r7, n5), Pn2 > 0 && !o7 && En2 && (6 & r7.shapeFlag ? En2[En2.indexOf(e4)] = r7 : En2.push(r7)), r7.patchFlag = -2, r7;
      }
      i4 = e4, isFunction(i4) && "__vccOpts" in i4 && (e4 = e4.__vccOpts);
      var i4;
      if (t12) {
        t12 = guardReactiveProps(t12);
        let { class: e5, style: n6 } = t12;
        e5 && !isString(e5) && (t12.class = normalizeClass(e5)), isObject(n6) && (isProxy(n6) && !o(n6) && (n6 = n({}, n6)), t12.style = normalizeStyle(n6));
      }
      const a8 = isString(e4) ? 1 : isSuspense(e4) ? 128 : isTeleport(e4) ? 64 : isObject(e4) ? 4 : isFunction(e4) ? 2 : 0;
      return createBaseVNode(e4, t12, n5, r6, s6, a8, o7, true);
    }, "createVNode");
    __name(guardReactiveProps, "guardReactiveProps");
    __name(cloneVNode, "cloneVNode");
    __name(createTextVNode, "createTextVNode");
    __name(createCommentVNode, "createCommentVNode");
    __name(normalizeVNode$1, "normalizeVNode$1");
    __name(cloneIfMounted, "cloneIfMounted");
    __name(normalizeChildren, "normalizeChildren");
    __name(mergeProps, "mergeProps");
    __name(invokeVNodeHook, "invokeVNodeHook");
    On2 = createAppContext();
    $n2 = 0;
    __name(createComponentInstance$1, "createComponentInstance$1");
    Nn2 = null;
    getCurrentInstance = /* @__PURE__ */ __name(() => Nn2 || Ht2, "getCurrentInstance");
    {
      const e4 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t12, n5) => {
        let r6;
        return (r6 = e4[t12]) || (r6 = e4[t12] = []), r6.push(n5), (e5) => {
          r6.length > 1 ? r6.forEach((t13) => t13(e5)) : r6[0](e5);
        };
      }, "registerGlobalSetter");
      Hn2 = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e5) => Nn2 = e5), Mn2 = registerGlobalSetter("__VUE_SSR_SETTERS__", (e5) => Ln2 = e5);
    }
    setCurrentInstance = /* @__PURE__ */ __name((e4) => {
      const t12 = Nn2;
      return Hn2(e4), e4.scope.on(), () => {
        e4.scope.off(), Hn2(t12);
      };
    }, "setCurrentInstance");
    unsetCurrentInstance = /* @__PURE__ */ __name(() => {
      Nn2 && Nn2.scope.off(), Hn2(null);
    }, "unsetCurrentInstance");
    __name(isStatefulComponent, "isStatefulComponent");
    Ln2 = false;
    __name(setupComponent$1, "setupComponent$1");
    __name(handleSetupResult, "handleSetupResult");
    __name(finishComponentSetup, "finishComponentSetup");
    Dn2 = { get: /* @__PURE__ */ __name((e4, t12) => (track(e4, 0, ""), e4[t12]), "get") };
    __name(createSetupContext, "createSetupContext");
    __name(getComponentPublicInstance, "getComponentPublicInstance");
    __name(getComponentName, "getComponentName");
    computed = /* @__PURE__ */ __name((e4, t12) => {
      const n5 = (function(e5, t13, n6 = false) {
        let r6, s6;
        return isFunction(e5) ? r6 = e5 : (r6 = e5.get, s6 = e5.set), new ComputedRefImpl(r6, s6, n6);
      })(e4, 0, Ln2);
      return n5;
    }, "computed");
    __name(h2, "h");
    __name(isMemoSame, "isMemoSame");
    jn2 = "3.5.42";
    Fn2 = NOOP;
    Bn2 = wt2;
    Un2 = $t2;
    setDevtoolsHook = /* @__PURE__ */ __name(function(e4, t12) {
      $t2 = e4, $t2 ? ($t2.enabled = true, Nt2.forEach(({ event: e5, args: t13 }) => $t2.emit(e5, ...t13)), Nt2 = []) : Nt2 = [];
    }, "setDevtoolsHook");
    Wn2 = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode: isVNode$2, normalizeVNode: normalizeVNode$1, getComponentPublicInstance, ensureValidVNode: ensureValidVNode$1, pushWarningContext: /* @__PURE__ */ __name(function(e4) {
      Ct2.push(e4);
    }, "pushWarningContext"), popWarningContext: /* @__PURE__ */ __name(function() {
      Ct2.pop();
    }, "popWarningContext") };
    zn2 = "undefined" != typeof document ? document : null;
    Kn2 = zn2 && zn2.createElement("template");
    qn2 = { insert: /* @__PURE__ */ __name((e4, t12, n5) => {
      t12.insertBefore(e4, n5 || null);
    }, "insert"), remove: /* @__PURE__ */ __name((e4) => {
      const t12 = e4.parentNode;
      t12 && t12.removeChild(e4);
    }, "remove"), createElement: /* @__PURE__ */ __name((e4, t12, n5, r6) => {
      const s6 = "svg" === t12 ? zn2.createElementNS("http://www.w3.org/2000/svg", e4) : "mathml" === t12 ? zn2.createElementNS("http://www.w3.org/1998/Math/MathML", e4) : n5 ? zn2.createElement(e4, { is: n5 }) : zn2.createElement(e4);
      return "select" === e4 && r6 && null != r6.multiple && s6.setAttribute("multiple", r6.multiple), s6;
    }, "createElement"), createText: /* @__PURE__ */ __name((e4) => zn2.createTextNode(e4), "createText"), createComment: /* @__PURE__ */ __name((e4) => zn2.createComment(e4), "createComment"), setText: /* @__PURE__ */ __name((e4, t12) => {
      e4.nodeValue = t12;
    }, "setText"), setElementText: /* @__PURE__ */ __name((e4, t12) => {
      e4.textContent = t12;
    }, "setElementText"), parentNode: /* @__PURE__ */ __name((e4) => e4.parentNode, "parentNode"), nextSibling: /* @__PURE__ */ __name((e4) => e4.nextSibling, "nextSibling"), querySelector: /* @__PURE__ */ __name((e4) => zn2.querySelector(e4), "querySelector"), setScopeId(e4, t12) {
      e4.setAttribute(t12, "");
    }, insertStaticContent(e4, t12, n5, r6, s6, o7) {
      const i4 = n5 ? n5.previousSibling : t12.lastChild;
      if (s6 && (s6 === o7 || s6.nextSibling)) for (; t12.insertBefore(s6.cloneNode(true), n5), s6 !== o7 && (s6 = s6.nextSibling); ) ;
      else {
        Kn2.innerHTML = "svg" === r6 ? `<svg>${e4}</svg>` : "mathml" === r6 ? `<math>${e4}</math>` : e4;
        const s7 = Kn2.content;
        if ("svg" === r6 || "mathml" === r6) {
          const e5 = s7.firstChild;
          for (; e5.firstChild; ) s7.appendChild(e5.firstChild);
          s7.removeChild(e5);
        }
        t12.insertBefore(s7, n5);
      }
      return [i4 ? i4.nextSibling : t12.firstChild, n5 ? n5.previousSibling : t12.lastChild];
    } };
    Jn2 = "transition";
    Gn2 = "animation";
    Zn2 = /* @__PURE__ */ Symbol("_vtc");
    Xn2 = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
    Yn2 = n({}, Ut2, Xn2);
    Qn2 = ((e4) => (e4.displayName = "Transition", e4.props = Yn2, e4))((e4, { slots: t12 }) => h2(Wt2, resolveTransitionProps(e4), t12));
    callHook = /* @__PURE__ */ __name((e4, t12 = []) => {
      o(e4) ? e4.forEach((e5) => e5(...t12)) : e4 && e4(...t12);
    }, "callHook");
    hasExplicitCallback = /* @__PURE__ */ __name((e4) => !!e4 && (o(e4) ? e4.some((e5) => e5.length > 1) : e4.length > 1), "hasExplicitCallback");
    __name(resolveTransitionProps, "resolveTransitionProps");
    __name(NumberOf, "NumberOf");
    __name(addTransitionClass, "addTransitionClass");
    __name(removeTransitionClass, "removeTransitionClass");
    __name(nextFrame, "nextFrame");
    er2 = 0;
    __name(whenTransitionEnds, "whenTransitionEnds");
    __name(getTransitionInfo, "getTransitionInfo");
    __name(getTimeout, "getTimeout");
    __name(toMs, "toMs");
    __name(forceReflow, "forceReflow");
    tr2 = /* @__PURE__ */ Symbol("_vod");
    nr2 = /* @__PURE__ */ Symbol("_vsh");
    rr2 = { name: "show", beforeMount(e4, { value: t12 }, { transition: n5 }) {
      e4[tr2] = "none" === e4.style.display ? "" : e4.style.display, n5 && t12 ? n5.beforeEnter(e4) : setDisplay(e4, t12);
    }, mounted(e4, { value: t12 }, { transition: n5 }) {
      n5 && t12 && n5.enter(e4);
    }, updated(e4, { value: t12, oldValue: n5 }, { transition: r6 }) {
      !t12 != !n5 && (r6 ? t12 ? (r6.beforeEnter(e4), setDisplay(e4, true), r6.enter(e4)) : r6.leave(e4, () => {
        setDisplay(e4, false);
      }) : setDisplay(e4, t12));
    }, beforeUnmount(e4, { value: t12 }) {
      setDisplay(e4, t12);
    } };
    __name(setDisplay, "setDisplay");
    sr2 = /* @__PURE__ */ Symbol("");
    __name(setVarsOnVNode, "setVarsOnVNode");
    __name(setVarsOnNode, "setVarsOnNode");
    or2 = /(?:^|;)\s*display\s*:/;
    ir2 = /\s*!important$/;
    __name(setStyle, "setStyle");
    ar2 = ["Webkit", "Moz", "ms"];
    lr3 = {};
    __name(shouldPreserveTextareaResizeStyle, "shouldPreserveTextareaResizeStyle");
    cr2 = "http://www.w3.org/1999/xlink";
    __name(patchAttr, "patchAttr");
    __name(patchDOMProp, "patchDOMProp");
    __name(addEventListener, "addEventListener");
    ur2 = /* @__PURE__ */ Symbol("_vei");
    __name(patchEvent, "patchEvent");
    pr2 = /(Once|Passive|Capture)$/;
    dr2 = /^on:?(?:Once|Passive|Capture)$/;
    fr2 = 0;
    hr2 = Promise.resolve();
    getNow = /* @__PURE__ */ __name(() => fr2 || (hr2.then(() => fr2 = 0), fr2 = Date.now()), "getNow");
    isNativeOn = /* @__PURE__ */ __name((e4) => 111 === e4.charCodeAt(0) && 110 === e4.charCodeAt(1) && e4.charCodeAt(2) > 96 && e4.charCodeAt(2) < 123, "isNativeOn");
    patchProp = /* @__PURE__ */ __name((e4, t12, n5, r6, s6, o7) => {
      const i4 = "svg" === s6;
      "class" === t12 ? (function(e5, t13, n6) {
        const r7 = e5[Zn2];
        r7 && (t13 = (t13 ? [t13, ...r7] : [...r7]).join(" ")), null == t13 ? e5.removeAttribute("class") : n6 ? e5.setAttribute("class", t13) : e5.className = t13;
      })(e4, r6, i4) : "style" === t12 ? (function(e5, t13, n6) {
        const r7 = e5.style, s7 = isString(n6);
        let o8 = false;
        if (n6 && !s7) {
          if (t13) if (isString(t13)) for (const e6 of t13.split(";")) {
            const t14 = e6.slice(0, e6.indexOf(":")).trim();
            null == n6[t14] && setStyle(r7, t14, "");
          }
          else for (const e6 in t13) null == n6[e6] && setStyle(r7, e6, "");
          for (const s8 in n6) {
            "display" === s8 && (o8 = true);
            const i5 = n6[s8];
            null != i5 ? shouldPreserveTextareaResizeStyle(e5, s8, !isString(t13) && t13 ? t13[s8] : void 0, i5) || setStyle(r7, s8, i5) : setStyle(r7, s8, "");
          }
        } else if (s7) {
          if (t13 !== n6) {
            const e6 = r7[sr2];
            e6 && (n6 += ";" + e6), r7.cssText = n6, o8 = or2.test(n6);
          }
        } else t13 && e5.removeAttribute("style");
        tr2 in e5 && (e5[tr2] = o8 ? r7.display : "", e5[nr2] && (r7.display = "none"));
      })(e4, n5, r6) : isOn(t12) ? isModelListener(t12) || patchEvent(e4, t12, 0, r6, o7) : ("." === t12[0] ? (t12 = t12.slice(1), 1) : "^" === t12[0] ? (t12 = t12.slice(1), 0) : (function(e5, t13, n6, r7) {
        if (r7) return "innerHTML" === t13 || "textContent" === t13 || !!(t13 in e5 && isNativeOn(t13) && isFunction(n6));
        if ("spellcheck" === t13 || "draggable" === t13 || "translate" === t13 || "autocorrect" === t13) return false;
        if ("sandbox" === t13 && "IFRAME" === e5.tagName) return false;
        if ("form" === t13) return false;
        if ("list" === t13 && "INPUT" === e5.tagName) return false;
        if ("type" === t13 && "TEXTAREA" === e5.tagName) return false;
        if ("width" === t13 || "height" === t13) {
          const t14 = e5.tagName;
          if ("IMG" === t14 || "VIDEO" === t14 || "CANVAS" === t14 || "SOURCE" === t14) return false;
        }
        if (isNativeOn(t13) && isString(n6)) return false;
        return t13 in e5;
      })(e4, t12, r6, i4)) ? (patchDOMProp(e4, t12, r6), e4.tagName.includes("-") || "value" !== t12 && "checked" !== t12 && "selected" !== t12 || patchAttr(e4, t12, r6, i4, 0, "value" !== t12)) : e4._isVueCE && ((function(e5, t13) {
        const n6 = e5._def.props;
        if (!n6) return false;
        const r7 = p(t13);
        return Array.isArray(n6) ? n6.some((e6) => p(e6) === r7) : Object.keys(n6).some((e6) => p(e6) === r7);
      })(e4, t12) || e4._def.__asyncLoader && (/[A-Z]/.test(t12) || !isString(r6))) ? patchDOMProp(e4, p(t12), r6, 0, t12) : ("true-value" === t12 ? e4._trueValue = r6 : "false-value" === t12 && (e4._falseValue = r6), patchAttr(e4, t12, r6, i4));
    }, "patchProp");
    gr2 = {};
    __name(defineCustomElement, "defineCustomElement");
    mr2 = "undefined" != typeof HTMLElement ? HTMLElement : class {
    };
    VueElement = class _VueElement extends mr2 {
      static {
        __name(this, "VueElement");
      }
      constructor(e4, t12 = {}, n5 = createApp) {
        super(), this._def = e4, this._props = t12, this._createApp = n5, this._isVueCE = true, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = false, this._resolved = false, this._patching = false, this._dirty = false, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n5 !== createApp ? this._root = this.shadowRoot : false !== e4.shadowRoot ? (this.attachShadow(n({}, e4.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot) : this._root = this;
      }
      connectedCallback() {
        if (!this.isConnected) return;
        this.shadowRoot || this._resolved || this._parseSlots(), this._connected = true;
        let e4 = this;
        for (; e4 = e4 && (e4.assignedSlot || e4.parentNode || e4.host); ) if (e4 instanceof _VueElement) {
          this._parent = e4;
          break;
        }
        this._instance || (this._resolved ? this._mount(this._def) : e4 && e4._pendingResolve ? this._pendingResolve = e4._pendingResolve.then(() => {
          if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
        }) : this._resolveDef());
      }
      _setParent(e4 = this._parent) {
        e4 && (this._instance.parent = e4._instance, this._inheritParentContext(e4));
      }
      _inheritParentContext(e4 = this._parent) {
        e4 && this._app && Object.setPrototypeOf(this._app._context.provides, e4._instance.provides);
      }
      disconnectedCallback() {
        this._connected = false, nextTick2(() => {
          this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
        });
      }
      _processMutations(e4) {
        for (const t12 of e4) this._setAttr(t12.attributeName);
      }
      _resolveDef() {
        if (this._pendingResolve) return this._pendingResolve;
        for (let e5 = 0; e5 < this.attributes.length; e5++) this._setAttr(this.attributes[e5].name);
        this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: true });
        const resolve2 = /* @__PURE__ */ __name((e5, t12 = false) => {
          this._resolved = true, this._pendingResolve = void 0;
          const { props: n5, styles: r6 } = e5;
          let s6;
          if (n5 && !o(n5)) for (const e6 in n5) {
            const t13 = n5[e6];
            (t13 === Number || t13 && t13.type === Number) && (e6 in this._props && (this._props[e6] = toNumber(this._props[e6])), (s6 || (s6 = /* @__PURE__ */ Object.create(null)))[p(e6)] = true);
          }
          this._numberProps = s6, this._resolveProps(e5), this.shadowRoot && this._applyStyles(r6), this._mount(e5);
        }, "resolve"), e4 = this._def.__asyncLoader;
        if (e4) return this._pendingResolve = e4().then((e5) => {
          e5.configureApp = this._def.configureApp, resolve2(this._def = e5, true);
        }), this._pendingResolve;
        resolve2(this._def);
      }
      _mount(e4) {
        this._app = this._createApp(e4), this._inheritParentContext(), e4.configureApp && e4.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
        const t12 = this._instance && this._instance.exposed;
        if (t12) for (const e5 in t12) hasOwn(this, e5) || Object.defineProperty(this, e5, { get: /* @__PURE__ */ __name(() => unref2(t12[e5]), "get") });
      }
      _resolveProps(e4) {
        const { props: t12 } = e4, n5 = o(t12) ? t12 : Object.keys(t12 || {});
        for (const e5 of Object.keys(this)) "_" !== e5[0] && n5.includes(e5) && this._setProp(e5, this[e5]);
        for (const e5 of n5.map(p)) Object.defineProperty(this, e5, { get() {
          return this._getProp(e5);
        }, set(t13) {
          this._setProp(e5, t13, true, !this._patching);
        } });
      }
      _setAttr(e4) {
        if (e4.startsWith("data-v-")) return;
        const t12 = this.hasAttribute(e4);
        let n5 = t12 ? this.getAttribute(e4) : gr2;
        const r6 = p(e4);
        t12 && this._numberProps && this._numberProps[r6] && (n5 = toNumber(n5)), this._setProp(r6, n5, false, true);
      }
      _getProp(e4) {
        return this._props[e4];
      }
      _setProp(e4, t12, n5 = true, r6 = false) {
        if (t12 !== this._props[e4] && (this._dirty = true, t12 === gr2 ? delete this._props[e4] : (this._props[e4] = t12, "key" === e4 && this._app && (this._app._ceVNode.key = t12)), r6 && this._instance && this._update(), n5)) {
          const n6 = this._ob;
          n6 && (this._processMutations(n6.takeRecords()), n6.disconnect()), true === t12 ? this.setAttribute(d(e4), "") : "string" == typeof t12 || "number" == typeof t12 ? this.setAttribute(d(e4), t12 + "") : t12 || this.removeAttribute(d(e4)), n6 && n6.observe(this, { attributes: true });
        }
      }
      _update() {
        const e4 = this._createVNode();
        this._app && (e4.appContext = this._app._context), render(e4, this._root);
      }
      _createVNode() {
        const e4 = {};
        this.shadowRoot || (e4.onVnodeMounted = e4.onVnodeUpdated = this._renderSlots.bind(this));
        const t12 = createVNode(this._def, n(e4, this._props));
        return this._instance || (t12.ce = (e5) => {
          this._instance = e5, e5.ce = this, e5.isCE = true;
          const dispatch = /* @__PURE__ */ __name((e6, t13) => {
            this.dispatchEvent(new CustomEvent(e6, isPlainObject(t13[0]) ? n({ detail: t13 }, t13[0]) : { detail: t13 }));
          }, "dispatch");
          e5.emit = (e6, ...t13) => {
            dispatch(e6, t13), d(e6) !== e6 && dispatch(d(e6), t13);
          }, this._setParent();
        }), t12;
      }
      _applyStyles(e4, t12, n5) {
        if (!e4) return;
        if (t12) {
          if (t12 === this._def || this._styleChildren.has(t12)) return;
          this._styleChildren.add(t12);
        }
        const r6 = this._nonce, s6 = this.shadowRoot, o7 = n5 ? this._getStyleAnchor(n5) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(s6);
        let i4 = null;
        for (let a8 = e4.length - 1; a8 >= 0; a8--) {
          const l5 = document.createElement("style");
          r6 && l5.setAttribute("nonce", r6), l5.textContent = e4[a8], s6.insertBefore(l5, i4 || o7), i4 = l5, 0 === a8 && (n5 || this._styleAnchors.set(this._def, l5), t12 && this._styleAnchors.set(t12, l5));
        }
      }
      _getStyleAnchor(e4) {
        if (!e4) return null;
        const t12 = this._styleAnchors.get(e4);
        return t12 && t12.parentNode === this.shadowRoot ? t12 : (t12 && this._styleAnchors.delete(e4), null);
      }
      _getRootStyleInsertionAnchor(e4) {
        for (let t12 = 0; t12 < e4.childNodes.length; t12++) {
          const n5 = e4.childNodes[t12];
          if (!(n5 instanceof HTMLStyleElement)) return n5;
        }
        return null;
      }
      _parseSlots() {
        const e4 = this._slots = {};
        let t12;
        for (; t12 = this.firstChild; ) {
          const n5 = 1 === t12.nodeType && t12.getAttribute("slot") || "default";
          (e4[n5] || (e4[n5] = [])).push(t12), this.removeChild(t12);
        }
      }
      _renderSlots() {
        const e4 = this._getSlots(), t12 = this._instance.type.__scopeId;
        for (let n5 = 0; n5 < e4.length; n5++) {
          const r6 = e4[n5], s6 = r6.getAttribute("name") || "default", o7 = this._slots[s6], i4 = r6.parentNode;
          if (o7) for (const e5 of o7) {
            if (t12 && 1 === e5.nodeType) {
              const n6 = t12 + "-s", r7 = document.createTreeWalker(e5, 1);
              let s7;
              for (e5.setAttribute(n6, ""); s7 = r7.nextNode(); ) s7.setAttribute(n6, "");
            }
            i4.insertBefore(e5, r6);
          }
          else for (; r6.firstChild; ) i4.insertBefore(r6.firstChild, r6);
          i4.removeChild(r6);
        }
      }
      _getSlots() {
        const e4 = [this];
        this._teleportTargets && e4.push(...this._teleportTargets);
        const t12 = /* @__PURE__ */ new Set();
        for (const n5 of e4) {
          const e5 = n5.querySelectorAll("slot");
          for (let n6 = 0; n6 < e5.length; n6++) t12.add(e5[n6]);
        }
        return Array.from(t12);
      }
      _injectChildStyle(e4, t12) {
        this._applyStyles(e4.styles, e4, t12);
      }
      _beginPatch() {
        this._patching = true, this._dirty = false;
      }
      _endPatch() {
        this._patching = false, this._dirty && this._instance && this._update();
      }
      _hasShadowRoot() {
        return false !== this._def.shadowRoot;
      }
      _removeChildStyle(e4) {
      }
    };
    __name(useHost, "useHost");
    yr2 = /* @__PURE__ */ new WeakMap();
    vr2 = /* @__PURE__ */ new WeakMap();
    _r2 = /* @__PURE__ */ Symbol("_moveCb");
    br2 = /* @__PURE__ */ Symbol("_enterCb");
    kr2 = ((e4) => (delete e4.props.mode, e4))({ name: "TransitionGroup", props: n({}, Yn2, { tag: String, moveClass: String }), setup(e4, { slots: t12 }) {
      const n5 = getCurrentInstance(), r6 = useTransitionState();
      let s6, o7;
      return nn2(() => {
        if (!s6.length) return;
        const t13 = e4.moveClass || `${e4.name || "v"}-move`;
        if (!(function(e5, t14, n6) {
          const r8 = e5.cloneNode(), s7 = e5[Zn2];
          s7 && s7.forEach((e6) => {
            e6.split(/\s+/).forEach((e7) => e7 && r8.classList.remove(e7));
          });
          n6.split(/\s+/).forEach((e6) => e6 && r8.classList.add(e6)), r8.style.display = "none";
          const o8 = 1 === t14.nodeType ? t14 : t14.parentNode;
          o8.appendChild(r8);
          const { hasTransform: i4 } = getTransitionInfo(r8);
          return o8.removeChild(r8), i4;
        })(s6[0].el, n5.vnode.el, t13)) return void (s6 = []);
        s6.forEach(callPendingCbs), s6.forEach(recordPosition);
        const r7 = s6.filter(applyTranslation);
        forceReflow(n5.vnode.el), r7.forEach((e5) => {
          const n6 = e5.el, r8 = n6.style;
          addTransitionClass(n6, t13), r8.transform = r8.webkitTransform = r8.transitionDuration = "";
          const s7 = n6[_r2] = (e6) => {
            e6 && e6.target !== n6 || e6 && !e6.propertyName.endsWith("transform") || (n6.removeEventListener("transitionend", s7), n6[_r2] = null, removeTransitionClass(n6, t13));
          };
          n6.addEventListener("transitionend", s7);
        }), s6 = [];
      }), () => {
        const i4 = toRaw(e4), a8 = resolveTransitionProps(i4);
        let l5 = i4.tag || wn2;
        if (s6 = [], o7) for (let e5 = 0; e5 < o7.length; e5++) {
          const t13 = o7[e5];
          t13.el && t13.el instanceof Element && !t13.el[nr2] && (s6.push(t13), setTransitionHooks(t13, resolveTransitionHooks(t13, a8, r6, n5)), yr2.set(t13, getPosition(t13.el)));
        }
        o7 = t12.default ? getTransitionRawChildren(t12.default()) : [];
        for (let e5 = 0; e5 < o7.length; e5++) {
          const t13 = o7[e5];
          null != t13.key && setTransitionHooks(t13, resolveTransitionHooks(t13, a8, r6, n5));
        }
        return createVNode(l5, null, o7);
      };
    } });
    __name(callPendingCbs, "callPendingCbs");
    __name(recordPosition, "recordPosition");
    __name(applyTranslation, "applyTranslation");
    __name(getPosition, "getPosition");
    getModelAssigner = /* @__PURE__ */ __name((e4) => {
      const t12 = e4.props["onUpdate:modelValue"] || false;
      return o(t12) ? (e5) => invokeArrayFns(t12, e5) : t12;
    }, "getModelAssigner");
    __name(onCompositionStart, "onCompositionStart");
    __name(onCompositionEnd, "onCompositionEnd");
    Sr2 = /* @__PURE__ */ Symbol("_assign");
    Cr2 = /* @__PURE__ */ Symbol("_initialValue");
    __name(castValue, "castValue");
    wr2 = { created(e4, { modifiers: { lazy: t12, trim: n5, number: r6 } }, s6) {
      e4.parentNode && ("text" === e4.type ? e4[Cr2] = e4.defaultValue.replace(/[\r\n]/g, "") : "textarea" === e4.type && (e4[Cr2] = e4.defaultValue.replace(/\r\n?/g, "\n"))), e4[Sr2] = getModelAssigner(s6);
      const o7 = r6 || s6.props && "number" === s6.props.type;
      addEventListener(e4, t12 ? "change" : "input", (t13) => {
        t13.target.composing || e4[Sr2](castValue(e4.value, n5, o7));
      }), (n5 || o7) && addEventListener(e4, "change", () => {
        e4.value = castValue(e4.value, n5, o7);
      }), t12 || (addEventListener(e4, "compositionstart", onCompositionStart), addEventListener(e4, "compositionend", onCompositionEnd), addEventListener(e4, "change", onCompositionEnd));
    }, mounted(e4, { value: t12, modifiers: { trim: n5, number: r6 } }) {
      const s6 = null == t12 ? "" : t12, o7 = e4[Cr2];
      delete e4[Cr2], void 0 === o7 || "text" !== e4.type && "textarea" !== e4.type || e4.value === o7 ? e4.value = s6 : e4[Sr2](castValue(e4.value, n5, r6));
    }, beforeUpdate(e4, { value: t12, oldValue: n5, modifiers: { lazy: r6, trim: s6, number: o7 } }, i4) {
      if (e4[Sr2] = getModelAssigner(i4), e4.composing) return;
      const a8 = null == t12 ? "" : t12;
      if ((!o7 && "number" !== e4.type || /^0\d/.test(e4.value) ? e4.value : looseToNumber(e4.value)) === a8) return;
      const l5 = e4.getRootNode();
      if ((l5 instanceof Document || l5 instanceof ShadowRoot) && l5.activeElement === e4 && "range" !== e4.type) {
        if (r6 && t12 === n5) return;
        if (s6 && e4.value.trim() === a8) return;
      }
      e4.value = a8;
    } };
    Tr2 = { deep: true, created(e4, t12, n5) {
      e4[Sr2] = getModelAssigner(n5), addEventListener(e4, "change", () => {
        const t13 = e4._modelValue, n6 = getValue(e4), r6 = e4.checked, s6 = e4[Sr2];
        if (o(t13)) {
          const e5 = looseIndexOf(t13, n6), o7 = -1 !== e5;
          if (r6 && !o7) s6(t13.concat(n6));
          else if (!r6 && o7) {
            const n7 = [...t13];
            n7.splice(e5, 1), s6(n7);
          }
        } else if (isSet(t13)) {
          const e5 = new Set(t13);
          r6 ? e5.add(n6) : e5.delete(n6), s6(e5);
        } else s6(getCheckboxValue(e4, r6));
      });
    }, mounted: setChecked, beforeUpdate(e4, t12, n5) {
      e4[Sr2] = getModelAssigner(n5), setChecked(e4, t12, n5);
    } };
    __name(setChecked, "setChecked");
    Rr2 = { created(e4, { value: t12 }, n5) {
      e4.checked = looseEqual(t12, n5.props.value), e4[Sr2] = getModelAssigner(n5), addEventListener(e4, "change", () => {
        e4[Sr2](getValue(e4));
      });
    }, beforeUpdate(e4, { value: t12, oldValue: n5 }, r6) {
      e4[Sr2] = getModelAssigner(r6), t12 !== n5 && (e4.checked = looseEqual(t12, r6.props.value));
    } };
    Ar2 = { deep: true, created(e4, { value: t12, modifiers: { number: n5 } }, r6) {
      e4._modelValue = t12, addEventListener(e4, "change", () => {
        const t13 = Array.prototype.filter.call(e4.options, (e5) => e5.selected).map((e5) => n5 ? looseToNumber(getValue(e5)) : getValue(e5)), r7 = e4.multiple, s6 = r7 ? isSet(e4._modelValue) ? new Set(t13) : t13 : t13[0], o7 = e4._pendingValue = [r7, r7 ? o(s6) ? t13.slice() : t13 : s6];
        try {
          e4[Sr2](s6);
        } finally {
          nextTick2(() => {
            e4._pendingValue === o7 && (e4._pendingValue = void 0);
          });
        }
      }), e4[Sr2] = getModelAssigner(r6);
    }, mounted(e4, { value: t12 }) {
      setSelected(e4, t12);
    }, beforeUpdate(e4, { value: t12 }, n5) {
      e4._modelValue = t12, e4[Sr2] = getModelAssigner(n5);
    }, updated(e4, { value: t12 }) {
      const n5 = e4._pendingValue;
      e4._pendingValue = void 0, n5 && n5[0] === e4.multiple && (function(e5, t13, n6) {
        if (!n6) return looseEqual(e5, t13);
        if (o(e5)) return looseEqual(e5, t13);
        if (isSet(e5)) {
          if (e5.size !== t13.length) return false;
          for (const n7 of t13) if (!e5.has(n7)) return false;
          return true;
        }
        return false;
      })(t12, n5[1], n5[0]) || setSelected(e4, t12);
    } };
    __name(setSelected, "setSelected");
    __name(getValue, "getValue");
    __name(getCheckboxValue, "getCheckboxValue");
    xr2 = { created(e4, t12, n5) {
      callModelHook(e4, t12, n5, null, "created");
    }, mounted(e4, t12, n5) {
      callModelHook(e4, t12, n5, null, "mounted");
    }, beforeUpdate(e4, t12, n5, r6) {
      callModelHook(e4, t12, n5, r6, "beforeUpdate");
    }, updated(e4, t12, n5, r6) {
      callModelHook(e4, t12, n5, r6, "updated");
    } };
    __name(resolveDynamicModel, "resolveDynamicModel");
    __name(callModelHook, "callModelHook");
    Er2 = ["ctrl", "shift", "alt", "meta"];
    Pr2 = { stop: /* @__PURE__ */ __name((e4) => e4.stopPropagation(), "stop"), prevent: /* @__PURE__ */ __name((e4) => e4.preventDefault(), "prevent"), self: /* @__PURE__ */ __name((e4) => e4.target !== e4.currentTarget, "self"), ctrl: /* @__PURE__ */ __name((e4) => !e4.ctrlKey, "ctrl"), shift: /* @__PURE__ */ __name((e4) => !e4.shiftKey, "shift"), alt: /* @__PURE__ */ __name((e4) => !e4.altKey, "alt"), meta: /* @__PURE__ */ __name((e4) => !e4.metaKey, "meta"), left: /* @__PURE__ */ __name((e4) => "button" in e4 && 0 !== e4.button, "left"), middle: /* @__PURE__ */ __name((e4) => "button" in e4 && 1 !== e4.button, "middle"), right: /* @__PURE__ */ __name((e4) => "button" in e4 && 2 !== e4.button, "right"), exact: /* @__PURE__ */ __name((e4, t12) => Er2.some((n5) => e4[`${n5}Key`] && !t12.includes(n5)), "exact") };
    Or2 = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
    $r2 = n({ patchProp }, qn2);
    Hr2 = false;
    __name(ensureRenderer, "ensureRenderer");
    __name(ensureHydrationRenderer, "ensureHydrationRenderer");
    render = /* @__PURE__ */ __name((...e4) => {
      ensureRenderer().render(...e4);
    }, "render");
    createApp = /* @__PURE__ */ __name((...e4) => {
      const t12 = ensureRenderer().createApp(...e4), { mount: n5 } = t12;
      return t12.mount = (e5) => {
        const r6 = normalizeContainer(e5);
        if (!r6) return;
        const s6 = t12._component;
        isFunction(s6) || s6.render || s6.template || (s6.template = r6.innerHTML), 1 === r6.nodeType && (r6.textContent = "");
        const o7 = n5(r6, false, resolveRootNamespace(r6));
        return r6 instanceof Element && (r6.removeAttribute("v-cloak"), r6.setAttribute("data-v-app", "")), o7;
      }, t12;
    }, "createApp");
    createSSRApp = /* @__PURE__ */ __name((...e4) => {
      const t12 = ensureHydrationRenderer().createApp(...e4), { mount: n5 } = t12;
      return t12.mount = (e5) => {
        const t13 = normalizeContainer(e5);
        if (t13) return n5(t13, true, resolveRootNamespace(t13));
      }, t12;
    }, "createSSRApp");
    __name(resolveRootNamespace, "resolveRootNamespace");
    __name(normalizeContainer, "normalizeContainer");
    Mr2 = false;
    initDirectivesForSSR = /* @__PURE__ */ __name(() => {
      Mr2 || (Mr2 = true, wr2.getSSRProps = ({ value: e4 }) => ({ value: e4 }), Rr2.getSSRProps = ({ value: e4 }, t12) => {
        if (t12.props && looseEqual(t12.props.value, e4)) return { checked: true };
      }, Tr2.getSSRProps = ({ value: e4 }, t12) => {
        if (o(e4)) {
          if (t12.props && looseIndexOf(e4, t12.props.value) > -1) return { checked: true };
        } else if (isSet(e4)) {
          if (t12.props && e4.has(t12.props.value)) return { checked: true };
        } else if (e4) return { checked: true };
      }, xr2.getSSRProps = (e4, t12) => {
        if ("string" != typeof t12.type) return;
        const n5 = resolveDynamicModel(t12.type.toUpperCase(), t12.props && t12.props.type);
        return n5.getSSRProps ? n5.getSSRProps(e4, t12) : void 0;
      }, rr2.getSSRProps = ({ value: e4 }) => {
        if (!e4) return { style: { display: "none" } };
      });
    }, "initDirectivesForSSR");
    Vr = Object.freeze(Object.defineProperty({ __proto__: null, BaseTransition: Wt2, BaseTransitionPropsValidators: Ut2, Comment: Rn2, DeprecationTypes: null, EffectScope, ErrorCodes: { SETUP_FUNCTION: 0, 0: "SETUP_FUNCTION", RENDER_FUNCTION: 1, 1: "RENDER_FUNCTION", NATIVE_EVENT_HANDLER: 5, 5: "NATIVE_EVENT_HANDLER", COMPONENT_EVENT_HANDLER: 6, 6: "COMPONENT_EVENT_HANDLER", VNODE_HOOK: 7, 7: "VNODE_HOOK", DIRECTIVE_HOOK: 8, 8: "DIRECTIVE_HOOK", TRANSITION_HOOK: 9, 9: "TRANSITION_HOOK", APP_ERROR_HANDLER: 10, 10: "APP_ERROR_HANDLER", APP_WARN_HANDLER: 11, 11: "APP_WARN_HANDLER", FUNCTION_REF: 12, 12: "FUNCTION_REF", ASYNC_COMPONENT_LOADER: 13, 13: "ASYNC_COMPONENT_LOADER", SCHEDULER: 14, 14: "SCHEDULER", COMPONENT_UPDATE: 15, 15: "COMPONENT_UPDATE", APP_UNMOUNT_CLEANUP: 16, 16: "APP_UNMOUNT_CLEANUP" }, ErrorTypeStrings: Bn2, Fragment: wn2, KeepAlive: Yt2, ReactiveEffect, Static: An2, Suspense: Cn2, Teleport: Dt2, Text: Tn2, TrackOpTypes: { GET: "get", HAS: "has", ITERATE: "iterate" }, Transition: Qn2, TransitionGroup: kr2, TriggerOpTypes: { SET: "set", ADD: "add", DELETE: "delete", CLEAR: "clear" }, VueElement, assertNumber: /* @__PURE__ */ __name(function(e4, t12) {
    }, "assertNumber"), callWithAsyncErrorHandling, callWithErrorHandling, camelize: p, capitalize: f, cloneVNode, compatUtils: null, computed, createApp, createBlock, createCommentVNode, createElementBlock: /* @__PURE__ */ __name(function(e4, t12, n5, r6, s6, o7) {
      return setupBlock(createBaseVNode(e4, t12, n5, r6, s6, o7, true));
    }, "createElementBlock"), createElementVNode: createBaseVNode, createHydrationRenderer, createPropsRestProxy: /* @__PURE__ */ __name(function(e4, t12) {
      const n5 = {};
      for (const r6 in e4) t12.includes(r6) || Object.defineProperty(n5, r6, { enumerable: true, get: /* @__PURE__ */ __name(() => e4[r6], "get") });
      return n5;
    }, "createPropsRestProxy"), createRenderer: createRenderer$1, createSSRApp, createSlots: /* @__PURE__ */ __name(function(e4, t12) {
      for (let n5 = 0; n5 < t12.length; n5++) {
        const r6 = t12[n5];
        if (o(r6)) for (let t13 = 0; t13 < r6.length; t13++) e4[r6[t13].name] = r6[t13].fn;
        else r6 && (e4[r6.name] = r6.key ? (...e5) => {
          const t13 = r6.fn(...e5);
          return t13 && (t13.key = r6.key), t13;
        } : r6.fn);
      }
      return e4;
    }, "createSlots"), createStaticVNode: /* @__PURE__ */ __name(function(e4, t12) {
      const n5 = createVNode(An2, null, e4);
      return n5.staticCount = t12, n5;
    }, "createStaticVNode"), createTextVNode, createVNode, customRef, defineAsyncComponent: /* @__PURE__ */ __name(function(e4) {
      isFunction(e4) && (e4 = { loader: e4 });
      const { loader: t12, loadingComponent: n5, errorComponent: r6, delay: s6 = 200, hydrate: o7, timeout: i4, suspensible: a8 = true, onError: l5 } = e4;
      let c4, u5 = null, p5 = 0;
      const load = /* @__PURE__ */ __name(() => {
        let e5;
        return u5 || (e5 = u5 = t12().catch((e6) => {
          if (e6 = e6 instanceof Error ? e6 : new Error(String(e6)), l5) return new Promise((t13, n6) => {
            l5(e6, () => t13((p5++, u5 = null, load())), () => n6(e6), p5 + 1);
          });
          throw e6;
        }).then((t13) => e5 !== u5 && u5 ? u5 : (t13 && (t13.__esModule || "Module" === t13[Symbol.toStringTag]) && (t13 = t13.default), c4 = t13, t13)));
      }, "load");
      return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, __asyncHydrate(e5, t13, n6) {
        const r7 = e5.isConnected;
        let s7 = false;
        (t13.bu || (t13.bu = [])).push(() => s7 = true);
        const performHydrate = /* @__PURE__ */ __name(() => {
          s7 || !e5.parentNode || r7 && !e5.isConnected || n6();
        }, "performHydrate"), i5 = o7 ? () => {
          const n7 = o7(performHydrate, (t14) => (function(e6, t15) {
            if (isComment(e6) && "[" === e6.data) {
              let n8 = 1, r8 = e6.nextSibling;
              for (; r8; ) {
                if (1 === r8.nodeType) {
                  if (false === t15(r8)) break;
                } else if (isComment(r8)) if ("]" === r8.data) {
                  if (0 === --n8) break;
                } else "[" === r8.data && n8++;
                r8 = r8.nextSibling;
              }
            } else t15(e6);
          })(e5, t14));
          n7 && (t13.bum || (t13.bum = [])).push(n7);
        } : performHydrate;
        c4 ? i5() : load().then(() => !t13.isUnmounted && i5());
      }, get __asyncResolved() {
        return c4;
      }, setup() {
        const e5 = Nn2;
        if (markAsyncBoundary(e5), c4) return () => createInnerComp(c4, e5);
        const onError = /* @__PURE__ */ __name((t14) => {
          u5 = null, handleError(t14, e5, 13, !r6);
        }, "onError");
        if (a8 && e5.suspense || Ln2) return load().then((t14) => () => createInnerComp(t14, e5)).catch((e6) => (onError(e6), () => r6 ? createVNode(r6, { error: e6 }) : null));
        const t13 = ref2(false), o8 = ref2(), l6 = ref2(!!s6);
        let p6, d5;
        return sn2(() => {
          null != p6 && clearTimeout(p6), null != d5 && clearTimeout(d5);
        }), s6 && (d5 = setTimeout(() => {
          e5.isUnmounted || (l6.value = false);
        }, s6)), null != i4 && (p6 = setTimeout(() => {
          if (!e5.isUnmounted && !t13.value && !o8.value) {
            const e6 = new Error(`Async component timed out after ${i4}ms.`);
            onError(e6), o8.value = e6;
          }
        }, i4)), load().then(() => {
          e5.isUnmounted || (t13.value = true, e5.parent && isKeepAlive(e5.parent.vnode) && e5.parent.update());
        }).catch((t14) => {
          e5.isUnmounted ? u5 = null : (onError(t14), o8.value = t14);
        }), () => t13.value && c4 ? createInnerComp(c4, e5) : o8.value && r6 ? createVNode(r6, { error: o8.value }) : n5 && !l6.value ? createInnerComp(n5, e5) : void 0;
      } });
    }, "defineAsyncComponent"), defineComponent, defineCustomElement, defineEmits: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineEmits"), defineExpose: /* @__PURE__ */ __name(function(e4) {
    }, "defineExpose"), defineModel: /* @__PURE__ */ __name(function() {
    }, "defineModel"), defineOptions: /* @__PURE__ */ __name(function(e4) {
    }, "defineOptions"), defineProps: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineProps"), defineSSRCustomElement: /* @__PURE__ */ __name((e4, t12) => defineCustomElement(e4, t12, createSSRApp), "defineSSRCustomElement"), defineSlots: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineSlots"), devtools: Un2, effect: /* @__PURE__ */ __name(function(e4, t12) {
      e4.effect instanceof ReactiveEffect && (e4 = e4.effect.fn);
      const n5 = new ReactiveEffect(e4);
      t12 && n(n5, t12);
      try {
        n5.run();
      } catch (e5) {
        throw n5.stop(), e5;
      }
      const r6 = n5.run.bind(n5);
      return r6.effect = n5, r6;
    }, "effect"), effectScope: /* @__PURE__ */ __name(function(e4) {
      return new EffectScope(e4);
    }, "effectScope"), getCurrentInstance, getCurrentScope, getCurrentWatcher: /* @__PURE__ */ __name(function() {
      return St2;
    }, "getCurrentWatcher"), getTransitionRawChildren, guardReactiveProps, h: h2, handleError, hasInjectionContext, hydrate: /* @__PURE__ */ __name((...e4) => {
      ensureHydrationRenderer().hydrate(...e4);
    }, "hydrate"), hydrateOnIdle: /* @__PURE__ */ __name((e4 = 1e4) => (t12) => {
      const n5 = Zt2(t12, { timeout: e4 });
      return () => Xt2(n5);
    }, "hydrateOnIdle"), hydrateOnInteraction: /* @__PURE__ */ __name((e4 = []) => (t12, n5) => {
      isString(e4) && (e4 = [e4]);
      let r6 = false;
      const doHydrate = /* @__PURE__ */ __name((e5) => {
        r6 || (r6 = true, teardown(), t12(), e5.target.dispatchEvent(new e5.constructor(e5.type, e5)));
      }, "doHydrate"), teardown = /* @__PURE__ */ __name(() => {
        n5((t13) => {
          for (const n6 of e4) t13.removeEventListener(n6, doHydrate);
        });
      }, "teardown");
      return n5((t13) => {
        for (const n6 of e4) t13.addEventListener(n6, doHydrate, { once: true });
      }), teardown;
    }, "hydrateOnInteraction"), hydrateOnMediaQuery: /* @__PURE__ */ __name((e4) => (t12) => {
      if (e4) {
        const n5 = matchMedia(e4);
        if (!n5.matches) return n5.addEventListener("change", t12, { once: true }), () => n5.removeEventListener("change", t12);
        t12();
      }
    }, "hydrateOnMediaQuery"), hydrateOnVisible: /* @__PURE__ */ __name((e4) => (t12, n5) => {
      const r6 = new IntersectionObserver((e5) => {
        for (const n6 of e5) if (n6.isIntersecting) {
          r6.disconnect(), t12();
          break;
        }
      }, e4);
      return n5((e5) => {
        if (e5 instanceof Element) return (function(e6) {
          const { top: t13, left: n6, bottom: r7, right: s6 } = e6.getBoundingClientRect(), { innerHeight: o7, innerWidth: i4 } = window;
          return (t13 > 0 && t13 < o7 || r7 > 0 && r7 < o7) && (n6 > 0 && n6 < i4 || s6 > 0 && s6 < i4);
        })(e5) ? (t12(), r6.disconnect(), false) : void r6.observe(e5);
      }), () => r6.disconnect();
    }, "hydrateOnVisible"), initCustomFormatter: /* @__PURE__ */ __name(function() {
    }, "initCustomFormatter"), initDirectivesForSSR, inject, isMemoSame, isProxy, isReactive, isReadonly, isRef: isRef2, isRuntimeOnly: /* @__PURE__ */ __name(() => !Vn2, "isRuntimeOnly"), isShallow, isVNode: isVNode$2, markRaw, mergeDefaults: /* @__PURE__ */ __name(function(e4, t12) {
      const n5 = normalizePropsOrEmits(e4);
      for (const e5 in t12) {
        if (e5.startsWith("__skip")) continue;
        let r6 = n5[e5];
        r6 ? o(r6) || isFunction(r6) ? r6 = n5[e5] = { type: r6, default: t12[e5] } : r6.default = t12[e5] : null === r6 && (r6 = n5[e5] = { default: t12[e5] }), r6 && t12[`__skip_${e5}`] && (r6.skipFactory = true);
      }
      return n5;
    }, "mergeDefaults"), mergeModels: /* @__PURE__ */ __name(function(e4, t12) {
      return e4 && t12 ? o(e4) && o(t12) ? e4.concat(t12) : n({}, normalizePropsOrEmits(e4), normalizePropsOrEmits(t12)) : e4 || t12;
    }, "mergeModels"), mergeProps, nextTick: nextTick2, nodeOps: qn2, normalizeClass, normalizeProps, normalizeStyle, onActivated, onBeforeMount: Qt2, onBeforeUnmount: rn, onBeforeUpdate: tn2, onDeactivated, onErrorCaptured, onMounted: en2, onRenderTracked: ln2, onRenderTriggered: an2, onScopeDispose: /* @__PURE__ */ __name(function(e4, t12 = false) {
      We2 && We2.cleanups.push(e4);
    }, "onScopeDispose"), onServerPrefetch: on3, onUnmounted: sn2, onUpdated: nn2, onWatcherCleanup, openBlock, patchProp, popScopeId: /* @__PURE__ */ __name(function() {
      Mt2 = null;
    }, "popScopeId"), provide, proxyRefs, pushScopeId: /* @__PURE__ */ __name(function(e4) {
      Mt2 = e4;
    }, "pushScopeId"), queuePostFlushCb, reactive, readonly, ref: ref2, registerRuntimeCompiler: /* @__PURE__ */ __name(function(e4) {
      Vn2 = e4, In2 = /* @__PURE__ */ __name((e5) => {
        e5.render._rc && (e5.withProxy = new Proxy(e5.ctx, fn));
      }, "In");
    }, "registerRuntimeCompiler"), render, renderList: /* @__PURE__ */ __name(function(e4, t12, n5, r6) {
      let s6;
      const o7 = n5 && n5[r6], i4 = o(e4);
      if (i4 || isString(e4)) {
        let n6 = false, r7 = false;
        i4 && isReactive(e4) && (n6 = !isShallow(e4), r7 = isReadonly(e4), e4 = shallowReadArray(e4)), s6 = new Array(e4.length);
        for (let i5 = 0, a8 = e4.length; i5 < a8; i5++) s6[i5] = t12(n6 ? r7 ? toReadonly(toReactive(e4[i5])) : toReactive(e4[i5]) : e4[i5], i5, void 0, o7 && o7[i5]);
      } else if ("number" == typeof e4) {
        s6 = new Array(e4);
        for (let n6 = 0; n6 < e4; n6++) s6[n6] = t12(n6 + 1, n6, void 0, o7 && o7[n6]);
      } else if (isObject(e4)) if (e4[Symbol.iterator]) s6 = Array.from(e4, (e5, n6) => t12(e5, n6, void 0, o7 && o7[n6]));
      else {
        const n6 = Object.keys(e4);
        s6 = new Array(n6.length);
        for (let r7 = 0, i5 = n6.length; r7 < i5; r7++) {
          const i6 = n6[r7];
          s6[r7] = t12(e4[i6], i6, r7, o7 && o7[r7]);
        }
      }
      else s6 = [];
      return n5 && (n5[r6] = s6), s6;
    }, "renderList"), renderSlot: /* @__PURE__ */ __name(function(e4, t12, n5, r6, s6, o7) {
      if (null == n5 && (n5 = {}), Ht2.ce || Ht2.parent && isAsyncWrapper(Ht2.parent) && Ht2.parent.ce) {
        const e5 = null != o7 && null == n5.key ? n({}, n5, { key: o7 }) : n5, s7 = Object.keys(e5).length > 0;
        return "default" !== t12 && (e5.name = t12), openBlock(), createBlock(wn2, null, [createVNode("slot", e5, r6 && r6())], s7 ? -2 : 64);
      }
      let i4 = e4[t12];
      i4 && i4._c && (i4._d = false);
      const a8 = xn2.length;
      let l5;
      openBlock();
      try {
        const s7 = i4 && ensureValidVNode$1(i4(n5)), a9 = n5.key || o7 || s7 && s7.key;
        l5 = createBlock(wn2, { key: (a9 && !isSymbol(a9) ? a9 : `_${t12}`) + (!s7 && r6 ? "_fb" : "") }, s7 || (r6 ? r6() : []), s7 && 1 === e4._ ? 64 : -2);
      } catch (e5) {
        for (let e6 = xn2.length; e6 > a8; e6--) closeBlock();
        throw e5;
      } finally {
        i4 && i4._c && (i4._d = true);
      }
      return !s6 && l5.scopeId && (l5.slotScopeIds = [l5.scopeId + "-s"]), l5;
    }, "renderSlot"), resolveComponent: /* @__PURE__ */ __name(function(e4, t12) {
      return resolveAsset(cn2, e4, true, t12) || e4;
    }, "resolveComponent"), resolveDirective: /* @__PURE__ */ __name(function(e4) {
      return resolveAsset("directives", e4);
    }, "resolveDirective"), resolveDynamicComponent: /* @__PURE__ */ __name(function(e4) {
      return isString(e4) ? resolveAsset(cn2, e4, false) || e4 : e4 || un2;
    }, "resolveDynamicComponent"), resolveFilter: null, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, shallowReactive, shallowReadonly, shallowRef, ssrContextKey: Vt2, ssrUtils: Wn2, stop: /* @__PURE__ */ __name(function(e4) {
      e4.effect.stop();
    }, "stop"), toDisplayString, toHandlerKey: u, toHandlers: /* @__PURE__ */ __name(function(e4, t12) {
      const n5 = {};
      for (const r6 in e4) n5[t12 && /[A-Z]/.test(r6) ? `on:${r6}` : u(r6)] = e4[r6];
      return n5;
    }, "toHandlers"), toRaw, toRef: /* @__PURE__ */ __name(function(e4, t12, n5) {
      return isRef2(e4) ? e4 : isFunction(e4) ? new GetterRefImpl(e4) : isObject(e4) && arguments.length > 1 ? propertyToRef(e4, t12, n5) : ref2(e4);
    }, "toRef"), toRefs: /* @__PURE__ */ __name(function(e4) {
      const t12 = o(e4) ? new Array(e4.length) : {};
      for (const n5 in e4) t12[n5] = propertyToRef(e4, n5);
      return t12;
    }, "toRefs"), toValue, transformVNodeArgs: /* @__PURE__ */ __name(function(e4) {
    }, "transformVNodeArgs"), triggerRef: /* @__PURE__ */ __name(function(e4) {
      e4.dep && e4.dep.trigger();
    }, "triggerRef"), unref: unref2, useAttrs: /* @__PURE__ */ __name(function() {
      return getContext().attrs;
    }, "useAttrs"), useCssModule: /* @__PURE__ */ __name(function(e4 = "$style") {
      {
        const t12 = getCurrentInstance();
        if (!t12) return t;
        const n5 = t12.type.__cssModules;
        if (!n5) return t;
        const r6 = n5[e4];
        return r6 || t;
      }
    }, "useCssModule"), useCssVars: /* @__PURE__ */ __name(function(e4) {
      const t12 = getCurrentInstance();
      if (!t12) return;
      const n5 = t12.ut = (n6 = e4(t12.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t12.uid}"]`)).forEach((e5) => setVarsOnNode(e5, n6));
      }, setVars = /* @__PURE__ */ __name(() => {
        const r6 = e4(t12.proxy);
        t12.ce ? setVarsOnNode(t12.ce, r6) : setVarsOnVNode(t12.subTree, r6), n5(r6);
      }, "setVars");
      tn2(() => {
        queuePostFlushCb(setVars);
      }), en2(() => {
        watch(setVars, NOOP, { flush: "post" });
        const e5 = new MutationObserver(setVars);
        e5.observe(t12.subTree.el.parentNode, { childList: true }), sn2(() => e5.disconnect());
      });
    }, "useCssVars"), useHost, useId: /* @__PURE__ */ __name(function() {
      const e4 = getCurrentInstance();
      return e4 ? (e4.appContext.config.idPrefix || "v") + "-" + e4.ids[0] + e4.ids[1]++ : "";
    }, "useId"), useModel: /* @__PURE__ */ __name(function(e4, t12, n5 = t) {
      const r6 = getCurrentInstance(), s6 = p(t12), o7 = d(t12), i4 = getModelModifiers(e4, s6), a8 = customRef((i5, a9) => {
        let l5, c4, u5 = t;
        return watchSyncEffect(() => {
          const t13 = e4[s6];
          hasChanged(l5, t13) && (l5 = t13, a9());
        }), { get: /* @__PURE__ */ __name(() => (i5(), n5.get ? n5.get(l5) : l5), "get"), set(e5) {
          const i6 = n5.set ? n5.set(e5) : e5;
          if (!(hasChanged(i6, l5) || u5 !== t && hasChanged(e5, u5))) return;
          const p5 = r6.vnode.props, d5 = !!(p5 && (t12 in p5 || s6 in p5 || o7 in p5) && (`onUpdate:${t12}` in p5 || `onUpdate:${s6}` in p5 || `onUpdate:${o7}` in p5));
          d5 || (l5 = e5, a9()), r6.emit(`update:${t12}`, i6), hasChanged(e5, u5) && (hasChanged(e5, i6) && !hasChanged(i6, c4) || d5 && u5 !== t && !hasChanged(i6, l5)) && a9(), u5 = e5, c4 = i6;
        } };
      });
      return a8[Symbol.iterator] = () => {
        let e5 = 0;
        return { next: /* @__PURE__ */ __name(() => e5 < 2 ? { value: e5++ ? i4 || t : a8, done: false } : { done: true }, "next") };
      }, a8;
    }, "useModel"), useSSRContext, useShadowRoot: /* @__PURE__ */ __name(function() {
      const e4 = useHost();
      return e4 && e4.shadowRoot;
    }, "useShadowRoot"), useSlots: /* @__PURE__ */ __name(function() {
      return getContext().slots;
    }, "useSlots"), useTemplateRef: /* @__PURE__ */ __name(function(e4) {
      const t12 = getCurrentInstance(), n5 = shallowRef(null);
      if (t12) {
        const r6 = t12.refs === t ? t12.refs = {} : t12.refs;
        Object.defineProperty(r6, e4, { enumerable: true, get: /* @__PURE__ */ __name(() => n5.value, "get"), set: /* @__PURE__ */ __name((e5) => n5.value = e5, "set") });
      }
      return n5;
    }, "useTemplateRef"), useTransitionState, vModelCheckbox: Tr2, vModelDynamic: xr2, vModelRadio: Rr2, vModelSelect: Ar2, vModelText: wr2, vShow: rr2, version: jn2, warn: Fn2, watch, watchEffect, watchPostEffect: /* @__PURE__ */ __name(function(e4, t12) {
      return doWatch(e4, null, { flush: "post" });
    }, "watchPostEffect"), watchSyncEffect, withAsyncContext: /* @__PURE__ */ __name(function(e4) {
      const t12 = getCurrentInstance(), n5 = Ln2;
      let r6 = e4();
      unsetCurrentInstance(), n5 && Mn2(false);
      const restore = /* @__PURE__ */ __name(() => {
        setCurrentInstance(t12), n5 && Mn2(true);
      }, "restore"), cleanup = /* @__PURE__ */ __name(() => {
        getCurrentInstance() !== t12 && t12.scope.off(), unsetCurrentInstance(), n5 && Mn2(false);
      }, "cleanup");
      return isPromise(r6) && (r6 = r6.catch((e5) => {
        throw restore(), Promise.resolve().then(() => Promise.resolve().then(cleanup)), e5;
      })), [r6, () => {
        restore(), Promise.resolve().then(cleanup);
      }];
    }, "withAsyncContext"), withCtx, withDefaults: /* @__PURE__ */ __name(function(e4, t12) {
      return null;
    }, "withDefaults"), withDirectives: /* @__PURE__ */ __name(function(e4, t12) {
      if (null === Ht2) return e4;
      const n5 = getComponentPublicInstance(Ht2), r6 = e4.dirs || (e4.dirs = []);
      for (let e5 = 0; e5 < t12.length; e5++) {
        let [s6, o7, i4, a8 = t] = t12[e5];
        s6 && (isFunction(s6) && (s6 = { mounted: s6, updated: s6 }), s6.deep && traverse(o7), r6.push({ dir: s6, instance: n5, value: o7, oldValue: void 0, arg: i4, modifiers: a8 }));
      }
      return e4;
    }, "withDirectives"), withKeys: /* @__PURE__ */ __name((e4, t12) => {
      const n5 = e4._withKeys || (e4._withKeys = {}), r6 = t12.join(".");
      return n5[r6] || (n5[r6] = (n6) => {
        if (!("key" in n6)) return;
        const r7 = d(n6.key);
        return t12.some((e5) => e5 === r7 || Or2[e5] === r7) ? e4(n6) : void 0;
      });
    }, "withKeys"), withMemo: /* @__PURE__ */ __name(function(e4, t12, n5, r6) {
      const s6 = n5[r6];
      if (s6 && isMemoSame(s6, e4)) return s6;
      const o7 = t12();
      return o7.memo = e4.slice(), o7.cacheIndex = r6, n5[r6] = o7;
    }, "withMemo"), withModifiers: /* @__PURE__ */ __name((e4, t12) => {
      if (!e4) return e4;
      const n5 = e4._withMods || (e4._withMods = {}), r6 = t12.join(".");
      return n5[r6] || (n5[r6] = (n6, ...r7) => {
        for (let e5 = 0; e5 < t12.length; e5++) {
          const r8 = Pr2[t12[e5]];
          if (r8 && r8(n6, t12)) return;
        }
        return e4(n6, ...r7);
      });
    }, "withModifiers"), withScopeId: /* @__PURE__ */ __name((e4) => withCtx, "withScopeId") }, Symbol.toStringTag, { value: "Module" }));
    Ir = "usehead";
    __name(injectHead, "injectHead");
    Lr = Object.assign((e4, t12) => isRef2(t12) ? toValue(t12) : t12, { _static: true });
    __name(defineHeadPlugin, "defineHeadPlugin");
    Dr2 = /\\/g;
    jr2 = /</g;
    Fr2 = /"/g;
    Br2 = /%\w+(?:\.\w+)?/g;
    Ur2 = "%separator";
    __name(processTemplateParams, "processTemplateParams");
    sortTags = /* @__PURE__ */ __name((e4, t12) => e4._w === t12._w ? e4._p - t12._p : e4._w - t12._w, "sortTags");
    formatKey = /* @__PURE__ */ __name((e4) => e4.includes(":key") ? e4 : e4.split(":").join(":key:"), "formatKey");
    Wr2 = defineHeadPlugin({ key: "aliasSorting", hooks: { "tags:resolve": /* @__PURE__ */ __name((e4) => {
      let t12 = false;
      for (const n5 of e4.tags) {
        const r6 = n5.tagPriority;
        if (!r6) continue;
        const s6 = String(r6);
        if (s6.startsWith("before:")) {
          const r7 = formatKey(s6.slice(7)), o7 = e4.tagMap.get(r7);
          o7 && ("number" == typeof o7.tagPriority && (n5.tagPriority = o7.tagPriority), n5._p = o7._p - 1, t12 = true);
        } else if (s6.startsWith("after:")) {
          const r7 = formatKey(s6.slice(6)), o7 = e4.tagMap.get(r7);
          o7 && ("number" == typeof o7.tagPriority && (n5.tagPriority = o7.tagPriority), n5._p = o7._p + 1, t12 = true);
        }
      }
      t12 && (e4.tags = e4.tags.sort(sortTags));
    }, "tags:resolve") } });
    zr2 = defineHeadPlugin({ key: "deprecations", hooks: { "entries:normalize": /* @__PURE__ */ __name(({ tags: e4 }) => {
      for (const t12 of e4) t12.props.children && (t12.innerHTML = t12.props.children, delete t12.props.children), t12.props.hid && (t12.key = t12.props.hid, delete t12.props.hid), t12.props.vmid && (t12.key = t12.props.vmid, delete t12.props.vmid), "body" in t12.props && (t12.props.body && (t12.tagPosition = "bodyClose"), delete t12.props.body), null != t12.props.renderPriority && (t12.tagPriority = t12.props.renderPriority, delete t12.props.renderPriority);
    }, "entries:normalize") } });
    __name(isThenable, "isThenable");
    __name(walkArrayPromises, "walkArrayPromises");
    __name(walkObjectPromises, "walkObjectPromises");
    __name(walkPromises, "walkPromises");
    Kr2 = defineHeadPlugin((e4) => {
      const t12 = /* @__PURE__ */ new WeakMap();
      return { key: "promises", hooks: { "entries:resolve": /* @__PURE__ */ __name((n5) => {
        for (let r6 = n5.entries.length - 1; r6 >= 0; r6--) {
          const s6 = n5.entries[r6], o7 = s6.input;
          if (t12.get(s6) === o7) {
            n5.entries.splice(r6, 1);
            continue;
          }
          const i4 = walkPromises(o7);
          isThenable(i4) ? (t12.set(s6, o7), n5.entries.splice(r6, 1), Promise.resolve(i4).then((n6) => {
            t12.get(s6) === o7 && (t12.delete(s6), s6.input = n6, delete s6._tags, e4.invalidate?.());
          }, () => {
            t12.get(s6) === o7 && t12.delete(s6);
          })) : t12.delete(s6);
        }
      }, "entries:resolve") } };
    }, "promises");
    qr2 = { meta: "content", link: "href", htmlAttrs: "lang" };
    Jr2 = ["innerHTML", "textContent"];
    __name(processIfNeeded, "processIfNeeded");
    Gr3 = defineHeadPlugin((e4) => ({ key: "template-params", hooks: { "tags:resolve": /* @__PURE__ */ __name(({ tagMap: t12, tags: n5 }) => {
      const r6 = t12.get("templateParams")?.props || {}, s6 = r6.separator || "|";
      delete r6.separator, r6.pageTitle = processIfNeeded(r6.pageTitle || e4._title || "", r6, s6);
      for (const e5 of n5) {
        if (false === e5.processTemplateParams) continue;
        const t13 = qr2[e5.tag];
        if (t13 && "string" == typeof e5.props[t13]) e5.props[t13] = processIfNeeded(e5.props[t13], r6, s6);
        else if (e5.processTemplateParams || "titleTemplate" === e5.tag || "title" === e5.tag) for (const t14 of Jr2) "string" == typeof e5[t14] && (e5[t14] = processIfNeeded(e5[t14], r6, s6, "script" === e5.tag && "string" == typeof e5.props.type && e5.props.type.endsWith("json")));
      }
      e4._templateParams = r6, e4._separator = s6;
    }, "tags:resolve"), "tags:afterResolve": /* @__PURE__ */ __name(({ tagMap: t12 }) => {
      const n5 = t12.get("title");
      n5?.textContent && false !== n5.processTemplateParams && (n5.textContent = processIfNeeded(n5.textContent, e4._templateParams, e4._separator));
    }, "tags:afterResolve") } }), "template-params");
    __name(createHead, "createHead");
    Zr = { disableDefaults: true, plugins: [zr2, Kr2, Gr3, Wr2] };
    __name(createSSRContext, "createSSRContext");
    __name(baseURL, "baseURL");
    __name(buildAssetsURL, "buildAssetsURL");
    __name(publicAssetsURL, "publicAssetsURL");
    __name(lazyCachedFunction, "lazyCachedFunction");
    __name(createMergeSlots, "createMergeSlots");
    __name(slotFor, "slotFor");
    __name(getModuleDependencies, "getModuleDependencies");
    __name(setAlias, "setAlias");
    __name(collectInto, "collectInto");
    __name(collectPrefetch, "collectPrefetch");
    __name(getFlatDependencies, "getFlatDependencies");
    __name(getRequestDependencies, "getRequestDependencies");
    __name(getRenderedOutputs, "getRenderedOutputs");
    Xr2 = /* @__PURE__ */ Symbol("slots");
    Yr = { scripts: "scriptSlots", styles: "styleSlots", preload: "preloadSlots", prefetch: "prefetchSlots" };
    Qr = { get(e4, t12) {
      const n5 = e4[t12];
      return void 0 === n5 && isRecordKey(t12) ? materialiseRecord(e4, t12) : n5;
    }, has: /* @__PURE__ */ __name((e4, t12) => isRecordKey(t12) || t12 in e4, "has"), ownKeys(e4) {
      const t12 = Reflect.ownKeys(e4).filter((e5) => e5 !== Xr2 && !isRecordKey(e5));
      return t12.length > 0 ? [...es, ...t12] : es.slice();
    }, getOwnPropertyDescriptor: /* @__PURE__ */ __name((e4, t12) => isRecordKey(t12) ? { value: e4[t12] ?? materialiseRecord(e4, t12), writable: true, enumerable: true, configurable: true } : t12 === Xr2 ? void 0 : Reflect.getOwnPropertyDescriptor(e4, t12), "getOwnPropertyDescriptor"), set: /* @__PURE__ */ __name((e4, t12, n5) => (e4[t12] = n5, true), "set"), deleteProperty: /* @__PURE__ */ __name((e4, t12) => Reflect.deleteProperty(e4, t12), "deleteProperty") };
    es = ["scripts", "styles", "preload", "prefetch"];
    __name(isRecordKey, "isRecordKey");
    __name(materialiseRecord, "materialiseRecord");
    __name(collectOrder, "collectOrder");
    __name(getOrder, "getOrder");
    __name(renderStyles, "renderStyles");
    __name(isScriptResource, "isScriptResource");
    __name(renderResourceHints, "renderResourceHints");
    ts = /[^\0-\u007F]+/g;
    __name(renderResourceHeaders, "renderResourceHeaders");
    __name(hrefFor, "hrefFor");
    __name(renderScripts, "renderScripts");
    __name(createRenderer, "createRenderer");
    ns = { meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }], link: [], style: [], script: [], noscript: [] };
    rs = { id: "teleports" };
    ss = { id: "__nuxt-loader" };
    os = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    __name(ssrRenderAttrs, "ssrRenderAttrs");
    __name(ssrRenderDynamicAttr, "ssrRenderDynamicAttr");
    __name(ssrRenderAttr, "ssrRenderAttr");
    __name(ssrRenderClass, "ssrRenderClass");
    __name(ssrRenderStyle, "ssrRenderStyle");
    __name(ssrRenderComponent, "ssrRenderComponent");
    ({ ensureValidVNode: is } = Wn2);
    __name(ssrInterpolate, "ssrInterpolate");
    __name(ssrRenderList, "ssrRenderList");
    __name(ssrRenderSuspense, "ssrRenderSuspense");
    ({ createComponentInstance: as, setCurrentRenderingInstance: ls, setupComponent: cs, renderComponentRoot: us, normalizeVNode: ps, pushWarningContext: ds, popWarningContext: fs } = Wn2);
    __name(createBuffer, "createBuffer");
    __name(renderComponentVNode, "renderComponentVNode");
    __name(renderComponentSubTree, "renderComponentSubTree");
    __name(renderVNode, "renderVNode");
    __name(renderVNodeChildren, "renderVNodeChildren");
    ({ isVNode: hs } = Wn2);
    __name(nestedUnrollBuffer, "nestedUnrollBuffer");
    __name(unrollBuffer$1, "unrollBuffer$1");
    __name(unrollBufferSync$1, "unrollBufferSync$1");
    __name(renderToString, "renderToString");
    ({ isVNode: gs } = Wn2);
    initDirectivesForSSR(), globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    ms = `<div${propsToString({ id: "__nuxt" })}>`;
    ys = "</div>";
    getPrecomputedDependencies = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_precomputed(), precomputed_exports)).then((e4) => "default" in e4 ? e4.default : e4).then((e4) => "function" == typeof e4 ? e4() : e4), "getPrecomputedDependencies");
    vs = lazyCachedFunction(async () => {
      const e4 = await Promise.resolve().then(() => (init_entry(), entry_exports)).then(function(e5) {
        return e5.f;
      }).then((e5) => e5.default || e5);
      if (!e4) throw me2.NUXT_E8004();
      return createRenderer(e4, { precomputed: await getPrecomputedDependencies(), manifest: void 0, renderToString: /* @__PURE__ */ __name(async function(e5, t12) {
        const n5 = await renderToString(e5, t12);
        return ms + n5 + ys;
      }, "renderToString"), buildAssetsURL });
    });
    _s = lazyCachedFunction(async () => {
      const t12 = await getPrecomputedDependencies(), n5 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e4) => e4.template).catch(() => "").then((e4) => {
        {
          const t13 = `<div${propsToString(ss)}>`;
          return ms + ys + (e4 ? t13 + e4 + "</div>" : "");
        }
      }), r6 = createRenderer(() => () => {
      }, { precomputed: t12, manifest: void 0, renderToString: /* @__PURE__ */ __name(() => n5, "renderToString"), buildAssetsURL }), s6 = await r6.renderToString({});
      return { rendererContext: r6.rendererContext, renderToString: /* @__PURE__ */ __name((t13) => {
        const n6 = useRuntimeConfig2(t13.event);
        return t13.modules ||= /* @__PURE__ */ new Set(), t13.payload.serverRendered = false, t13.config = { public: n6.public, app: n6.app }, Promise.resolve(s6);
      }, "renderToString") };
    });
    bs = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e4) => e4.default || e4));
    ks = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      constructor(e4, t12, n5, r6) {
        super(e4), this.name = "DevalueError", this.path = t12.join(""), this.value = n5, this.root = r6;
      }
    };
    __name(is_primitive, "is_primitive");
    Ss = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    Cs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    __name(is_valid_array_index_string, "is_valid_array_index_string");
    __name(valid_array_indices, "valid_array_indices");
    ws = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    Ts = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    Rs = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    __name(uneval, "uneval");
    __name(stringify_typed_array_elements, "stringify_typed_array_elements");
    __name(escape_unsafe_char, "escape_unsafe_char");
    __name(escape_unsafe_chars, "escape_unsafe_chars");
    __name(stringify_primitive$1, "stringify_primitive$1");
    As = "function" == typeof Uint8Array.fromBase64;
    xs = "object" == typeof g3 && void 0 !== g3.versions?.node;
    Es = As ? function(e4) {
      return new Uint8Array(e4).toBase64();
    } : xs ? function(e4) {
      return fe2.from(e4).toString("base64");
    } : function(e4) {
      const t12 = new Uint8Array(e4);
      let n5 = "";
      for (let e5 = 0; e5 < t12.length; e5 += 32768) {
        const r6 = t12.subarray(e5, e5 + 32768);
        n5 += String.fromCharCode.apply(null, r6);
      }
      return btoa(n5);
    };
    Ps = Object.freeze({ kind: "not-plain" });
    Os = Object.freeze({ kind: "symbol-keys" });
    $s = { identify: /* @__PURE__ */ __name((e4) => e4, "identify"), typeOf: /* @__PURE__ */ __name((e4) => null === e4 ? "null" : typeof e4, "typeOf"), toPrimitive: /* @__PURE__ */ __name((e4) => e4, "toPrimitive"), tagOf: /* @__PURE__ */ __name((e4) => get_type(e4), "tagOf"), isThenable: /* @__PURE__ */ __name((e4) => "function" == typeof e4.then, "isThenable"), toPromise: /* @__PURE__ */ __name((e4) => Promise.resolve(e4), "toPromise"), unbox: /* @__PURE__ */ __name((e4) => e4.valueOf(), "unbox"), toISOString: /* @__PURE__ */ __name((e4) => isNaN(e4.getDate()) ? "" : e4.toISOString(), "toISOString"), toStringValue: /* @__PURE__ */ __name((e4) => e4.toString(), "toStringValue"), regExpInfo: /* @__PURE__ */ __name((e4) => ({ source: e4.source, flags: e4.flags }), "regExpInfo"), valuesOf: /* @__PURE__ */ __name((e4) => e4, "valuesOf"), entriesOf: /* @__PURE__ */ __name((e4) => e4, "entriesOf"), viewInfo: /* @__PURE__ */ __name((e4) => ({ buffer: e4.buffer, byteOffset: e4.byteOffset, byteLength: e4.byteLength, length: e4.length, bufferByteLength: e4.buffer.byteLength }), "viewInfo"), toArrayBuffer: /* @__PURE__ */ __name((e4) => e4, "toArrayBuffer"), lengthOf: /* @__PURE__ */ __name((e4) => e4.length, "lengthOf"), hasOwn: /* @__PURE__ */ __name((e4, t12) => Object.hasOwn(e4, t12), "hasOwn"), indicesOf: /* @__PURE__ */ __name((e4) => valid_array_indices(e4), "indicesOf"), shapeOf: /* @__PURE__ */ __name((e4) => is_plain_object(e4) ? enumerable_symbols(e4).length > 0 ? Os : { kind: null === Object.getPrototypeOf(e4) ? "null-proto" : "plain", keys: Object.keys(e4) } : Ps, "shapeOf"), get: /* @__PURE__ */ __name((e4, t12) => e4[t12], "get") };
    Ns = Object.freeze($s);
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    __name(renderPayloadJsonScript, "renderPayloadJsonScript");
    Hs = { omitLineBreaks: true };
    Ms = [];
    Vs = "h5W2IsCz.js";
    Is = /^[A-Za-z]:\//;
    Ls = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
    Ds = /^\/([A-Za-z]:)?$/;
    __name(cwd2, "cwd");
    resolve = /* @__PURE__ */ __name(function(...e4) {
      let t12 = "", n5 = false;
      for (let r6 = (e4 = e4.map((e5) => (function(e6 = "") {
        return e6 ? e6.replace(/\\/g, "/").replace(Is, (e7) => e7.toUpperCase()) : e6;
      })(e5))).length - 1; r6 >= -1 && !n5; r6--) {
        const s6 = r6 >= 0 ? e4[r6] : cwd2();
        s6 && 0 !== s6.length && (t12 = `${s6}/${t12}`, n5 = isAbsolute(s6));
      }
      return t12 = (function(e5, t13) {
        let n6 = "", r6 = 0, s6 = -1, o7 = 0, i4 = null;
        for (let a8 = 0; a8 <= e5.length; ++a8) {
          if (a8 < e5.length) i4 = e5[a8];
          else {
            if ("/" === i4) break;
            i4 = "/";
          }
          if ("/" === i4) {
            if (s6 === a8 - 1 || 1 === o7) ;
            else if (2 === o7) {
              if (n6.length < 2 || 2 !== r6 || "." !== n6[n6.length - 1] || "." !== n6[n6.length - 2]) {
                if (n6.length > 2) {
                  const e6 = n6.lastIndexOf("/");
                  -1 === e6 ? (n6 = "", r6 = 0) : (n6 = n6.slice(0, e6), r6 = n6.length - 1 - n6.lastIndexOf("/")), s6 = a8, o7 = 0;
                  continue;
                }
                if (n6.length > 0) {
                  n6 = "", r6 = 0, s6 = a8, o7 = 0;
                  continue;
                }
              }
              t13 && (n6 += n6.length > 0 ? "/.." : "..", r6 = 2);
            } else n6.length > 0 ? n6 += `/${e5.slice(s6 + 1, a8)}` : n6 = e5.slice(s6 + 1, a8), r6 = a8 - s6 - 1;
            s6 = a8, o7 = 0;
          } else "." === i4 && -1 !== o7 ? ++o7 : o7 = -1;
        }
        return n6;
      })(t12, !n5), n5 && !isAbsolute(t12) ? `/${t12}` : t12.length > 0 ? t12 : ".";
    }, "resolve");
    isAbsolute = /* @__PURE__ */ __name(function(e4) {
      return Ls.test(e4);
    }, "isAbsolute");
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    js = !!rs.id;
    Fs = js ? `<div${propsToString(rs)}>` : "";
    Bs = js ? "</div>" : "";
    Ws = defineRenderHandler((e4) => {
      const t12 = e4.path.startsWith("/__nuxt_error") ? getQuery(e4) : null;
      if (t12 && !("__unenv__" in e4.node.req)) throw createError({ status: 404, statusText: "Page Not Found: /__nuxt_error", message: "Page Not Found: /__nuxt_error" });
      return (async function(e5, t13) {
        const n5 = useNitroApp(), r6 = createSSRContext(e5);
        if (r6.head.push(ns), t13) {
          const e6 = t13.status || t13.statusCode;
          if (e6 && (t13.status = t13.statusCode = Number.parseInt(e6)), "string" == typeof t13.data) try {
            t13.data = destr(t13.data);
          } catch {
          }
          !(function(e7, t14) {
            e7.error = true, e7.payload = { error: t14 }, e7.url = t14.url;
          })(r6, t13);
        }
        const s6 = getRouteRules(e5);
        false === s6.ssr && (r6.noSSR = true);
        r6.noSSR;
        const o7 = await (function(e6) {
          return e6.noSSR ? _s() : vs();
        })(r6);
        for (const e6 of Ms) r6.modules.add(e6);
        const i4 = { canStream: ye2, prefersStream: false };
        await n5.hooks.callHook("render:route", i4, { event: e5 });
        const a8 = await o7.renderToString(r6).catch(async (e6) => {
          if ((r6["~renderResponse"] || r6._renderResponse) && "skipping render" === e6.message) return {};
          const n6 = !t13 && r6.payload?.error || e6;
          throw await r6.nuxt?.hooks.callHook("app:error", n6), n6;
        }), g5 = r6["~renderResponse"] || r6._renderResponse ? [] : await (async function(e6) {
          const t14 = await bs(), n6 = /* @__PURE__ */ new Set(), r7 = [];
          for (const n7 of e6) n7 in t14 && t14[n7] && r7.push(t14[n7]());
          for (const e7 of await Promise.all(r7)) for (const t15 of e7) n6.add(t15);
          return Array.from(n6).map((e7) => ({ innerHTML: e7 }));
        })(r6.modules ?? []);
        if (await r6.nuxt?.hooks.callHook("app:rendered", { ssrContext: r6, renderResult: a8 }), r6["~renderResponse"] || r6._renderResponse) return r6["~renderResponse"] || r6._renderResponse;
        if (r6.payload?.error && !t13) throw r6.payload.error;
        const m5 = s6.noScripts, { styles: y3, scripts: v3 } = getRequestDependencies(r6, o7.rendererContext);
        if (!m5) {
          let t14 = Us;
          t14 || (t14 = buildAssetsURL(Vs), r6.runtimeConfig.app.cdnURL || /^(?:\/|\.+\/)/.test(t14) ? Us = t14 : (t14 = (function(e6, t15) {
            const n6 = resolve(e6).replace(Ds, "$1").split("/"), r7 = resolve(t15).replace(Ds, "$1").split("/");
            if (":" === r7[0][1] && ":" === n6[0][1] && n6[0] !== r7[0]) return r7.join("/");
            const s7 = [...n6];
            for (const e7 of s7) {
              if (r7[0] !== e7) break;
              n6.shift(), r7.shift();
            }
            return [...n6.map(() => ".."), ...r7].join("/");
          })(e5.path.replace(/\/[^/]+$/, "/"), joinURL("/", t14)), /^(?:\/|\.+\/)/.test(t14) || (t14 = `./${t14}`))), r6.head.push({ script: [{ type: "importmap", innerHTML: { imports: { "#entry": t14 } } }] });
        }
        g5.length && r6.head.push({ style: g5 });
        const _3 = [];
        for (const e6 of Object.values(y3)) _3.push({ rel: "stylesheet", href: o7.rendererContext.buildAssetsURL(e6.file), crossorigin: "" });
        _3.length && r6.head.push({ link: _3 });
        if (!m5) {
          const e6 = r6["~lazyHydratedModules"]?.size ? { exclude: r6["~lazyHydratedModules"] } : void 0, t14 = new Set(_3.map((e7) => e7.href));
          for (const e7 of r6["~neverHydratedModules"] ?? []) {
            const n7 = o7.rendererContext.manifest?.[e7]?.file;
            n7 && t14.add(o7.rendererContext.buildAssetsURL(n7));
          }
          const n6 = [];
          for (const s7 of (function(e7, t15, n7) {
            const r7 = getRequestDependencies(e7, t15, n7), s8 = getOrder(t15, r7, getRenderedOutputs(t15, r7)), o8 = t15._mergeSlots.metaOf, i5 = false !== n7?.scripts, a9 = [];
            for (let e8 = 0; e8 < s8.preloadSlots.length; e8++) {
              const n8 = s8.preloadSlots[e8], r8 = o8[n8];
              !i5 && isScriptResource(r8) || a9.push({ rel: r8.module ? "modulepreload" : "preload", as: r8.resourceType, type: r8.mimeType ?? null, crossorigin: "style" === r8.resourceType || "font" === r8.resourceType || "script" === r8.resourceType || r8.module ? "" : null, href: hrefFor(t15, n8, r8) });
            }
            return a9;
          })(r6, o7.rendererContext, e6)) t14.has(s7.href) || n6.push(s7);
          for (const s7 of (function(e7, t15, n7) {
            const r7 = getRequestDependencies(e7, t15, n7), s8 = getOrder(t15, r7, getRenderedOutputs(t15, r7)), o8 = t15._mergeSlots.metaOf, i5 = false !== n7?.scripts, a9 = [];
            for (let e8 = 0; e8 < s8.prefetchSlots.length; e8++) {
              const n8 = s8.prefetchSlots[e8], r8 = o8[n8];
              !i5 && isScriptResource(r8) || a9.push({ rel: "prefetch", as: r8.resourceType, type: r8.mimeType ?? null, crossorigin: "style" === r8.resourceType || "font" === r8.resourceType || "script" === r8.resourceType || r8.module ? "" : null, href: hrefFor(t15, n8, r8) });
            }
            return a9;
          })(r6, o7.rendererContext, e6)) t14.has(s7.href) || n6.push(s7);
          r6.head.push({ link: n6 }), r6.head.push({ script: renderPayloadJsonScript({ ssrContext: r6, data: stripInlineOnlyPayloadFields(r6.payload) }) }, { tagPosition: "bodyClose", tagPriority: "high" });
        }
        if (!s6.noScripts) {
          const e6 = "head";
          r6.head.push({ script: Object.values(v3).map((t14) => ({ type: t14.module ? "module" : null, src: o7.rendererContext.buildAssetsURL(t14.file), defer: !t14.module || null, tagPosition: e6, crossorigin: "" })) });
        }
        const { headTags: b5, bodyTags: k4, bodyTagsOpen: S3, htmlAttrs: C3, bodyAttrs: w5 } = (R3 = r6.head, A3 = Hs, createServerRenderer(A3)(R3)), T3 = { htmlAttrs: C3 ? [C3] : [], head: normalizeChunks([b5]), bodyAttrs: w5 ? [w5] : [], bodyPrepend: normalizeChunks([S3, r6.teleports?.body]), body: [a8.html, Fs + (js ? joinTags([r6.teleports?.[`#${rs.id}`]]) : "") + Bs], bodyAppend: [k4] };
        var R3, A3;
        return await n5.hooks.callHook("render:html", T3, { event: e5 }), { body: renderHTMLDocument(T3), statusCode: getResponseStatus(e5), statusMessage: getResponseStatusText(e5), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
      })(e4, t12);
    });
    __name(normalizeChunks, "normalizeChunks");
    __name(joinTags, "joinTags");
    __name(joinAttrs, "joinAttrs");
    __name(renderHTMLDocument, "renderHTMLDocument");
    __name(stripInlineOnlyPayloadFields, "stripInlineOnlyPayloadFields");
    zs = Object.freeze(Object.defineProperty({ __proto__: null, default: Ws }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/_/address.mjs
function fnv1a(t12) {
  let n5 = 2166136261;
  for (let e4 = 0; e4 < t12.length; e4++) n5 ^= t12.charCodeAt(e4), n5 = Math.imul(n5, 16777619);
  return n5 >>> 0;
}
function createRng(t12) {
  const n5 = (function(t13) {
    let n6 = 1779033703 ^ t13.length;
    for (let e4 = 0; e4 < t13.length; e4++) n6 = Math.imul(n6 ^ t13.charCodeAt(e4), 3432918353), n6 = n6 << 13 | n6 >>> 19;
    return function() {
      return n6 = Math.imul(n6 ^ n6 >>> 16, 2246822507), n6 = Math.imul(n6 ^ n6 >>> 13, 3266489909), n6 ^= n6 >>> 16, n6 >>> 0;
    };
  })(t12);
  return (function(t13) {
    let n6 = t13 >>> 0;
    return function() {
      n6 |= 0, n6 = n6 + 1831565813 | 0;
      let t14 = Math.imul(n6 ^ n6 >>> 15, 1 | n6);
      return t14 = t14 + Math.imul(t14 ^ t14 >>> 7, 61 | t14) ^ t14, ((t14 ^ t14 >>> 14) >>> 0) / 4294967296;
    };
  })(n5() ^ n5() ^ n5() ^ n5());
}
function randBetween(t12, n5, e4) {
  return n5 + t12() * (e4 - n5);
}
function randInt(t12, n5, e4) {
  return Math.floor(randBetween(t12, n5, e4 + 1));
}
function pick(t12, n5) {
  return n5[randInt(t12, 0, n5.length - 1)];
}
function pickN(t12, n5, e4) {
  const r6 = [...n5], i4 = [];
  for (; i4.length < e4 && r6.length; ) {
    const n6 = randInt(t12, 0, r6.length - 1);
    i4.push(r6.splice(n6, 1)[0]);
  }
  return i4;
}
function weightedPick(t12, n5) {
  const e4 = n5.reduce((t13, [, n6]) => t13 + n6, 0);
  let r6 = t12() * e4;
  for (const [t13, e5] of n5) if (r6 -= e5, r6 <= 0) return t13;
  return n5[n5.length - 1][0];
}
function hexDigest(t12, n5 = 16) {
  let e4 = 3735928559 ^ fnv1a(t12), r6 = 1103547991 ^ fnv1a(t12 + ":salt"), i4 = "";
  for (let t13 = 0; t13 < n5; t13++) e4 = Math.imul(e4 ^ e4 >>> 16, 2246822507), r6 = Math.imul(r6 ^ r6 >>> 13, 3266489909), e4 ^= r6 ^ r6 >>> 9, r6 ^= e4 ^ e4 >>> 11, i4 += (255 & (e4 ^ r6)).toString(16).padStart(2, "0");
  return i4.slice(0, n5);
}
function isValidLtcTestnetAddress(t12) {
  if ("string" != typeof t12) return false;
  const n5 = t12.trim();
  return !!/^tltc1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{36,90}$/i.test(n5) || !!/^[mn2][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(n5);
}
function genLegacyAddress(n5) {
  return (function(n6, e4, r6) {
    let i4 = e4.charAt(Math.floor(n6() * e4.length));
    for (let e5 = 1; e5 < r6; e5++) i4 += t9.charAt(Math.floor(58 * n6()));
    return i4;
  })(n5, weightedPick(n5, [["m", 0.44], ["n", 0.44], ["2", 0.12]]), randInt(n5, 26, 34));
}
function genAddress(t12) {
  return weightedPick(t12, [[() => genLegacyAddress(t12), 0.7], [() => (function(t13) {
    let e4 = "tltc1";
    e4 += weightedPick(t13, [["q", 0.85], ["p", 0.15]]);
    for (let r6 = 0; r6 < 37; r6++) e4 += n2.charAt(Math.floor(32 * t13()));
    return e4;
  })(t12), 0.3]])();
}
var t9, n2;
var init_address = __esm({
  ".output/server/chunks/_/address.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(fnv1a, "fnv1a");
    __name(createRng, "createRng");
    __name(randBetween, "randBetween");
    __name(randInt, "randInt");
    __name(pick, "pick");
    __name(pickN, "pickN");
    __name(weightedPick, "weightedPick");
    __name(hexDigest, "hexDigest");
    t9 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    n2 = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
    __name(isValidLtcTestnetAddress, "isValidLtcTestnetAddress");
    __name(genLegacyAddress, "genLegacyAddress");
    __name(genAddress, "genAddress");
  }
});

// .output/server/chunks/_/neo4j.mjs
function neo4jConfig() {
  const t12 = useRuntimeConfig2();
  return { host: String(t12.neo4jHost || ""), user: String(t12.neo4jUser || "neo4j"), password: String(t12.neo4jPassword || ""), database: String(t12.neo4jDatabase || "neo4j") };
}
function hasNeo4j() {
  const e4 = neo4jConfig();
  return Boolean(e4.host && e4.password);
}
function normalize(e4) {
  if (null == e4) return e4;
  if (Array.isArray(e4)) return e4.map(normalize);
  if ("object" != typeof e4) return e4;
  const t12 = e4;
  for (const e5 of ["node", "relationship", "map", "list"]) if (e5 in t12) return normalize(t12[e5]);
  if ("int" in t12 && 1 === Object.keys(t12).length) {
    const e5 = Number(t12.int);
    return Number.isSafeInteger(e5) ? e5 : String(t12.int);
  }
  if ("float" in t12 && 1 === Object.keys(t12).length) return Number(t12.float);
  if ("string" in t12 && 1 === Object.keys(t12).length) return String(t12.string);
  if ("bool" in t12 && 1 === Object.keys(t12).length) return Boolean(t12.bool);
  if ("date" in t12 && 1 === Object.keys(t12).length) return String(t12.date);
  if ("value" in t12 && "type" in t12) return "null" === t12.type ? null : normalize(t12.value);
  if ("labels" in t12 && "properties" in t12) return { ...t12.properties, labels: t12.labels, elementId: t12.elementId };
  if ("type" in t12 && "start" in t12 && "end" in t12) return { ...t12.properties, type: t12.type, elementId: t12.elementId, start: t12.start, end: t12.end };
  const n5 = {};
  for (const [e5, s6] of Object.entries(t12)) n5[e5] = normalize(s6);
  return n5;
}
async function cypher(e4, t12 = {}) {
  var n5, s6, a8, r6, o7, l5;
  const i4 = neo4jConfig(), d5 = `https://${i4.host}/db/${i4.database}/query/v2`, c4 = `Basic ${btoa(`${i4.user}:${i4.password}`)}`, u5 = await fetch(d5, { method: "POST", headers: { "Content-Type": "application/json", Authorization: c4 }, body: JSON.stringify({ statement: e4, parameters: t12 }) }), h5 = await u5.json();
  if (!u5.ok || h5.errors && h5.errors.length) {
    const e5 = (null == (s6 = null == (n5 = h5.errors) ? void 0 : n5[0]) ? void 0 : s6.message) || u5.statusText || String(u5.status);
    throw new Error(`Neo4j query failed (${u5.status}): ${e5}`);
  }
  const S3 = null != (r6 = null == (a8 = h5.data) ? void 0 : a8.fields) ? r6 : [];
  return (null != (l5 = null == (o7 = h5.data) ? void 0 : o7.values) ? l5 : []).map((e5) => {
    const t13 = {};
    return S3.forEach((n6, s7) => {
      t13[n6] = normalize(e5[s7]);
    }), t13;
  });
}
async function upsertSimulation(e4) {
  if (!hasNeo4j()) return void t10.set(e4.address, (function(e5) {
    const t12 = /* @__PURE__ */ new Map();
    for (const n7 of e5.nodes) t12.set(n7.address, n7);
    const n6 = [];
    for (const t13 of e5.txns) n6.push({ id: t13.hash, source: t13.from, target: t13.to, hash: t13.hash, amount: t13.amount, fee: t13.fee, timestamp: t13.timestamp, direction: t13.to === e5.address ? "in" : t13.from === e5.address || n6.length % 2 == 0 ? "out" : "in" });
    return { nodes: t12, edges: n6 };
  })(e4));
  const n5 = e4.nodes.map((e5) => {
    var t12, n6;
    return { address: e5.address, totalReceived: e5.totalReceived, totalSent: e5.totalSent, balance: e5.balance, txCount: e5.txCount, firstSeen: e5.firstSeen, lastSeen: e5.lastSeen, isExchange: e5.isExchange, exchangeName: null != (t12 = e5.exchangeName) ? t12 : "", ownerName: null != (n6 = e5.ownerName) ? n6 : "", isSuspect: e5.isSuspect };
  });
  await cypher("UNWIND $nodes AS n\n     MERGE (a:Address {address: n.address})\n     SET a.total_received = n.totalReceived, a.total_sent = n.totalSent,\n         a.balance = n.balance, a.tx_count = n.txCount,\n         a.first_seen = n.firstSeen, a.last_seen = n.lastSeen\n     FOREACH (_ IN CASE WHEN n.isExchange THEN [1] ELSE [] END |\n        SET a:Exchange, a.exchange = n.exchangeName)\n     FOREACH (_ IN CASE WHEN n.isSuspect THEN [1] ELSE [] END |\n        SET a:Suspect, a.owner_name = n.ownerName)", { nodes: n5 });
  const s6 = e4.txns.map((e5) => ({ from: e5.from, to: e5.to, hash: e5.hash, amount: e5.amount, fee: e5.fee, timestamp: e5.timestamp }));
  await cypher("UNWIND $edges AS e\n     MERGE (f:Address {address: e.from})\n     MERGE (t:Address {address: e.to})\n     MERGE (f)-[r:SENT_TO {hash: e.hash}]->(t)\n     SET r.amount = e.amount, r.fee = e.fee, r.timestamp = e.timestamp", { edges: s6 });
}
function toAddressStat(e4, t12) {
  var n5, s6, a8, r6, o7, l5;
  const i4 = Array.isArray(e4.labels) ? e4.labels : [];
  return { address: t12, isExchange: i4.includes("Exchange"), exchangeName: e4.exchange || void 0, ownerName: e4.owner_name || void 0, isSuspect: i4.includes("Suspect"), balance: Number(null != (n5 = e4.balance) ? n5 : 0), totalReceived: Number(null != (s6 = e4.total_received) ? s6 : 0), totalSent: Number(null != (a8 = e4.total_sent) ? a8 : 0), txCount: Number(null != (r6 = e4.tx_count) ? r6 : 0), firstSeen: Number(null != (o7 = e4.first_seen) ? o7 : 0), lastSeen: Number(null != (l5 = e4.last_seen) ? l5 : 0) };
}
function edgeKey(e4, t12, n5) {
  return `${e4}|${t12}|${n5}`;
}
async function readGraph(e4) {
  if (!hasNeo4j()) {
    const n6 = t10.get(e4);
    return n6 ? { nodes: [...n6.nodes.values()].map((e5) => ({ data: e5 })), edges: n6.edges.map((e5) => ({ data: e5 })) } : { nodes: [], edges: [] };
  }
  const n5 = /* @__PURE__ */ new Map(), s6 = /* @__PURE__ */ new Map(), a8 = await cypher("MATCH (s:Address {address: $addr})\n     RETURN s.address AS address, s.balance AS balance, s.total_received AS total_received,\n            s.total_sent AS total_sent, s.tx_count AS tx_count, s.first_seen AS first_seen,\n            s.last_seen AS last_seen, [l IN labels(s) | l] AS labels, s.exchange AS exchange,\n            s.owner_name AS owner_name", { addr: e4 });
  a8[0] && n5.set(e4, toAddressStat(a8[0], e4));
  const collectNode = /* @__PURE__ */ __name((e5) => {
    const t12 = e5.address;
    t12 && !n5.has(t12) && n5.set(t12, toAddressStat(e5, t12));
  }, "collectNode"), collectEdge = /* @__PURE__ */ __name((e5, t12, n6, a9) => {
    var r6, o7, l5;
    if (!a9.hash) return;
    const i4 = { id: e5, source: t12, target: n6, hash: a9.hash, amount: Number(null != (r6 = a9.amount) ? r6 : 0), fee: Number(null != (o7 = a9.fee) ? o7 : 0), timestamp: Number(null != (l5 = a9.timestamp) ? l5 : 0), direction: a9.direction };
    s6.has(e5) || s6.set(e5, i4);
  }, "collectEdge");
  for (const [t12, n6] of [["(s)-[r:SENT_TO]->(n)", "out"], ["(n)-[r:SENT_TO]->(s)", "in"]]) {
    const s7 = await cypher(`MATCH (s:Address {address: $addr})
       OPTIONAL MATCH ${t12}
       RETURN n.address AS address, n.balance AS balance, n.total_received AS total_received,
              n.total_sent AS total_sent, n.tx_count AS tx_count, n.first_seen AS first_seen,
              n.last_seen AS last_seen,
              [l IN labels(n) | l] AS labels, n.exchange AS exchange,
              r.hash AS hash, r.amount AS amount, r.fee AS fee, r.timestamp AS timestamp`, { addr: e4 });
    for (const t13 of s7) {
      collectNode(t13);
      const s8 = t13.address;
      "out" === n6 ? collectEdge(edgeKey(e4, s8, t13.hash), e4, s8, { ...t13, direction: n6 }) : collectEdge(edgeKey(s8, e4, t13.hash), s8, e4, { ...t13, direction: n6 });
    }
  }
  for (const t12 of [true, false]) {
    const s7 = t12 ? "(s)-[r1:SENT_TO]->(a)-[r2:SENT_TO]->(b)" : "(b)-[r2:SENT_TO]->(a)-[r1:SENT_TO]->(s)", a9 = await cypher(`MATCH (s:Address {address: $addr})
       OPTIONAL MATCH ${s7}
       RETURN a.address AS address, a.balance AS balance, a.total_received AS total_received,
              a.total_sent AS total_sent, a.tx_count AS tx_count, a.first_seen AS first_seen,
              a.last_seen AS last_seen, [l IN labels(a) | l] AS labels, a.exchange AS exchange,
              r1.hash AS h1, r1.amount AS amt1, r1.fee AS fee1, r1.timestamp AS ts1,
              b.address AS b, b.balance AS bBalance, b.total_received AS bReceived,
              b.total_sent AS bSent, b.tx_count AS bTx, b.first_seen AS bFirst, b.last_seen AS bLast,
              [l IN labels(b) | l] AS bLabels, b.exchange AS bExchange,
              r2.hash AS h2, r2.amount AS amt2, r2.fee AS fee2, r2.timestamp AS ts2`, { addr: e4 });
    for (const s8 of a9) {
      const a10 = s8.address, r6 = s8.b;
      if (a10) {
        const e5 = toAddressStat({ ...s8, labels: s8.labels, exchange: s8.exchange, balance: s8.balance, total_received: s8.total_received, total_sent: s8.total_sent, tx_count: s8.tx_count, first_seen: s8.first_seen, last_seen: s8.last_seen }, a10);
        n5.has(a10) || n5.set(a10, e5);
      }
      if (r6) {
        const e5 = toAddressStat({ ...s8, labels: s8.bLabels, exchange: s8.bExchange, balance: s8.bBalance, total_received: s8.bReceived, total_sent: s8.bSent, tx_count: s8.bTx, first_seen: s8.bFirst, last_seen: s8.bLast }, r6);
        n5.has(r6) || n5.set(r6, e5);
      }
      if (s8.h1 && a10) {
        const n6 = t12 ? e4 : a10, r7 = t12 ? a10 : e4;
        collectEdge(edgeKey(n6, r7, s8.h1), n6, r7, { hash: s8.h1, amount: s8.amt1, fee: s8.fee1, timestamp: s8.ts1, direction: t12 ? "out" : "in" });
      }
      if (s8.h2 && a10 && r6) {
        const e5 = t12 ? a10 : r6, n6 = t12 ? r6 : a10;
        collectEdge(edgeKey(e5, n6, s8.h2), e5, n6, { hash: s8.h2, amount: s8.amt2, fee: s8.fee2, timestamp: s8.ts2, direction: t12 ? "out" : "in" });
      }
    }
  }
  return { nodes: [...n5.values()].map((e5) => ({ data: e5 })), edges: [...s6.values()].filter((e5) => n5.has(e5.source) && n5.has(e5.target)).map((e5) => ({ data: e5 })) };
}
async function getAddressNode(e4) {
  if (!hasNeo4j()) {
    for (const n6 of t10.values()) {
      const t12 = n6.nodes.get(e4);
      if (t12) return t12;
    }
    return null;
  }
  const n5 = await cypher("MATCH (s:Address {address: $addr})\n     RETURN s.address AS address, s.balance AS balance, s.total_received AS total_received,\n            s.total_sent AS total_sent, s.tx_count AS tx_count, s.first_seen AS first_seen,\n            s.last_seen AS last_seen, [l IN labels(s) | l] AS labels, s.exchange AS exchange,\n            s.owner_name AS owner_name", { addr: e4 });
  return n5[0] ? toAddressStat(n5[0], e4) : null;
}
async function cypher_health() {
  hasNeo4j() && await cypher("RETURN 1 AS ok");
}
async function countNodes() {
  var e4, n5;
  if (!hasNeo4j()) return [...t10.values()].reduce((e5, t12) => e5 + t12.nodes.size, 0);
  const s6 = await cypher("MATCH (a:Address) RETURN count(a) AS c");
  return Number(null != (n5 = null == (e4 = s6[0]) ? void 0 : e4.c) ? n5 : 0);
}
var t10;
var init_neo4j = __esm({
  ".output/server/chunks/_/neo4j.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    __name(neo4jConfig, "neo4jConfig");
    __name(hasNeo4j, "hasNeo4j");
    __name(normalize, "normalize");
    __name(cypher, "cypher");
    t10 = /* @__PURE__ */ new Map();
    __name(upsertSimulation, "upsertSimulation");
    __name(toAddressStat, "toAddressStat");
    __name(edgeKey, "edgeKey");
    __name(readGraph, "readGraph");
    __name(getAddressNode, "getAddressNode");
    __name(cypher_health, "cypher_health");
    __name(countNodes, "countNodes");
  }
});

// .output/server/chunks/_/turso.mjs
function tursoInfo() {
  const n5 = useRuntimeConfig2();
  return { url: String(n5.tursoUrl || ""), token: String(n5.tursoToken || "") };
}
function hasTurso() {
  const e4 = tursoInfo();
  return Boolean(e4.url && e4.token);
}
function decodeValue(e4) {
  var n5;
  if (null == e4) return e4;
  if ("object" != typeof e4) return e4;
  const r6 = e4;
  if (!("type" in r6)) return e4;
  const t12 = r6.type;
  return "null" === t12 ? null : "integer" === t12 || "float" === t12 ? Number(r6.value) : "boolean" === t12 ? Boolean(r6.value) : "blob" === t12 ? String(r6.value) : null != (n5 = r6.value) ? n5 : null;
}
async function pipeline(e4) {
  var n5;
  const r6 = tursoInfo(), t12 = await fetch(`${r6.url}/v2/pipeline`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${r6.token}` }, body: JSON.stringify({ requests: e4 }) });
  if (!t12.ok) {
    const e5 = await t12.text().catch(() => "");
    throw new Error(`Turso request failed (${t12.status}): ${e5.slice(0, 200)}`);
  }
  return (null != (n5 = (await t12.json()).results) ? n5 : []).map((e5) => {
    var n6, r7;
    if (!e5 || "execute" !== e5.type || !e5.response) return null;
    const t13 = e5.response.result;
    if (!t13) return null;
    return { cols: (null != (n6 = t13.cols) ? n6 : []).map((e6) => {
      var n7;
      return null != (n7 = e6.name) ? n7 : "";
    }), rows: (null != (r7 = t13.rows) ? r7 : []).map((e6) => e6.map(decodeValue)) };
  });
}
async function turfExecute(e4, n5 = []) {
  var r6, t12;
  return null != (t12 = null == (r6 = (await pipeline([{ type: "execute", stmt: { sql: e4, args: n5 }, want_rows: true }, { type: "close" }]))[0]) ? void 0 : r6.rows) ? t12 : [];
}
async function turfBatch(e4) {
  var n5;
  if (!e4.length) return;
  const r6 = [];
  let t12 = [];
  for (const s6 of e4) t12.push({ type: "execute", stmt: { sql: s6.sql, args: null != (n5 = s6.args) ? n5 : [] } }), t12.length >= 40 && (r6.push(t12), t12 = []);
  t12.length && r6.push(t12);
  for (const e5 of r6) await pipeline([...e5, { type: "close" }]);
}
async function ensureSchema() {
  !r4 && hasTurso() && (await turfBatch(n3.map((e4) => ({ sql: e4 }))), r4 = true);
}
async function persistExchangeKyc(e4) {
  if (!hasTurso()) {
    for (const n6 of e4) t11.set(n6.address, { address: n6.address, exchange: n6.exchangeName, exchangeCountry: n6.country, user: { ...n6.kyc } });
    return "memory";
  }
  await ensureSchema();
  const n5 = [];
  for (const r6 of e4) n5.push({ sql: "INSERT OR IGNORE INTO exchanges(slug, name, country, category) VALUES (?, ?, ?, ?)", args: [r6.exchangeSlug, r6.exchangeName, r6.country, r6.category] }), n5.push({ sql: "INSERT OR IGNORE INTO exchange_addresses(address, exchange_id, chain) VALUES (?, (SELECT id FROM exchanges WHERE slug = ?), 'litecoin_testnet')", args: [r6.address, r6.exchangeSlug] }), n5.push({ sql: "INSERT INTO kyc_records(address, exchange_id, user_name, user_email, user_country, id_type, id_number, verification_level, phone, dob, registered_at)\n            VALUES (?, (SELECT id FROM exchanges WHERE slug = ?), ?, ?, ?, ?, ?, ?, ?, ?, ?)\n            ON CONFLICT(address) DO UPDATE SET\n              user_name = excluded.user_name,\n              user_email = excluded.user_email,\n              user_country = excluded.user_country,\n              id_type = excluded.id_type,\n              id_number = excluded.id_number,\n              verification_level = excluded.verification_level,\n              phone = excluded.phone,\n              dob = excluded.dob,\n              registered_at = excluded.registered_at", args: [r6.address, r6.exchangeSlug, r6.kyc.name, r6.kyc.email, r6.kyc.country, r6.kyc.idType, r6.kyc.idNumber, r6.kyc.verificationLevel, r6.kyc.phone, r6.kyc.dob, r6.kyc.registeredAt] });
  return await turfBatch(n5), "turso";
}
async function getKycForAddresses(e4) {
  const n5 = [...new Set(e4)];
  if (!hasTurso()) return n5.map((e5) => t11.get(e5)).filter(Boolean);
  if (await ensureSchema(), !n5.length) return [];
  const r6 = n5.map(() => "?").join(",");
  return (await turfExecute(`SELECT ea.address,
            ex.name AS exchange, ex.country AS exchange_country,
            k.user_name, k.user_email, k.user_country, k.id_type, k.id_number,
            k.verification_level, k.phone, k.dob, k.registered_at
     FROM exchange_addresses ea
     JOIN exchanges ex ON ex.id = ea.exchange_id
     LEFT JOIN kyc_records k ON k.address = ea.address AND k.exchange_id = ea.exchange_id
     WHERE ea.address IN (${r6})`, n5)).map((e5) => {
    var n6, r7, t12, s6, a8, u5, c4, i4, o7;
    return { address: String(e5[0]), exchange: String(e5[1]), exchangeCountry: String(e5[2]), user: { name: String(null != (n6 = e5[3]) ? n6 : ""), email: String(null != (r7 = e5[4]) ? r7 : ""), country: String(null != (t12 = e5[5]) ? t12 : ""), idType: String(null != (s6 = e5[6]) ? s6 : ""), idNumber: String(null != (a8 = e5[7]) ? a8 : ""), verificationLevel: String(null != (u5 = e5[8]) ? u5 : ""), phone: String(null != (c4 = e5[9]) ? c4 : ""), dob: String(null != (i4 = e5[10]) ? i4 : ""), registeredAt: String(null != (o7 = e5[11]) ? o7 : "") } };
  });
}
async function listExchangeSummaries() {
  if (!hasTurso()) return [];
  await ensureSchema();
  return (await turfExecute("SELECT ex.slug, ex.name, ex.country, ex.category, COUNT(ea.address) AS n\n     FROM exchanges ex\n     LEFT JOIN exchange_addresses ea ON ea.exchange_id = ex.id\n     GROUP BY ex.id ORDER BY ex.name")).map((e4) => ({ slug: String(e4[0]), name: String(e4[1]), country: String(e4[2]), category: String(e4[3]), count: Number(e4[4]) }));
}
var n3, r4, t11;
var init_turso = __esm({
  ".output/server/chunks/_/turso.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    __name(tursoInfo, "tursoInfo");
    __name(hasTurso, "hasTurso");
    __name(decodeValue, "decodeValue");
    __name(pipeline, "pipeline");
    __name(turfExecute, "turfExecute");
    __name(turfBatch, "turfBatch");
    n3 = ["CREATE TABLE IF NOT EXISTS exchanges (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    slug TEXT UNIQUE NOT NULL,\n    name TEXT NOT NULL,\n    country TEXT NOT NULL DEFAULT '',\n    category TEXT NOT NULL DEFAULT ''\n  )", "CREATE TABLE IF NOT EXISTS exchange_addresses (\n    address TEXT PRIMARY KEY,\n    exchange_id INTEGER NOT NULL REFERENCES exchanges(id),\n    chain TEXT NOT NULL DEFAULT 'litecoin_testnet'\n  )", "CREATE TABLE IF NOT EXISTS kyc_records (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    address TEXT UNIQUE NOT NULL REFERENCES exchange_addresses(address),\n    exchange_id INTEGER NOT NULL REFERENCES exchanges(id),\n    user_name TEXT NOT NULL,\n    user_email TEXT NOT NULL,\n    user_country TEXT NOT NULL,\n    id_type TEXT NOT NULL,\n    id_number TEXT NOT NULL,\n    verification_level TEXT NOT NULL,\n    phone TEXT NOT NULL DEFAULT '',\n    dob TEXT NOT NULL DEFAULT '',\n    registered_at TEXT NOT NULL DEFAULT ''\n  )", "CREATE INDEX IF NOT EXISTS idx_exch_address ON exchange_addresses(address)"];
    r4 = false;
    __name(ensureSchema, "ensureSchema");
    t11 = /* @__PURE__ */ new Map();
    __name(persistExchangeKyc, "persistExchangeKyc");
    __name(getKycForAddresses, "getKycForAddresses");
    __name(listExchangeSummaries, "listExchangeSummaries");
  }
});

// .output/server/chunks/routes/api/address/_address_.get.mjs
var address_get_exports = {};
__export(address_get_exports, {
  default: () => n4
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
var n4;
var init_address_get = __esm({
  ".output/server/chunks/routes/api/address/_address_.get.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_address();
    init_neo4j();
    init_turso();
    n4 = defineEventHandler(async (s6) => {
      var n5, i4, d5;
      const m5 = String(null != (n5 = getRouterParam(s6, "address")) ? n5 : "").trim();
      if (!isValidLtcTestnetAddress(m5)) throw createError({ statusCode: 422, statusMessage: "Not a valid Litecoin testnet address" });
      const [l5, u5] = await Promise.all([getAddressNode(m5), getKycForAddresses([m5])]);
      return l5 ? { address: m5, exists: true, node: l5, kyc: null != (d5 = u5[0]) ? d5 : null } : { address: m5, exists: false, node: null, kyc: null != (i4 = u5[0]) ? i4 : null };
    });
  }
});

// .output/server/chunks/_/identities.mjs
function identityName(a8) {
  const n5 = (function() {
    var a9;
    if (m3) return m3;
    const n6 = null != (a9 = useRuntimeConfig2().suspectNames) ? a9 : [];
    return m3 = Array.isArray(n6) ? n6.map(String).map((e4) => e4.trim()).filter(Boolean) : [], m3;
  })();
  return n5.length ? n5[randInt(a8, 0, n5.length - 1)] : `${pick(a8, c2)} ${pick(a8, u3)}`;
}
function suspectOwnerName(e4) {
  return identityName(createRng(`${e4}:owner`));
}
function genKyc(e4, a8) {
  var r6, o7;
  const s6 = identityName(e4), l5 = s6.split(/\s+/), c4 = null != (r6 = l5[0]) ? r6 : "user", u5 = null != (o7 = l5[l5.length - 1]) ? o7 : "user", m5 = pick(e4, g4), h5 = randInt(e4, 1965, 1999), p5 = String(randInt(e4, 1, 12)).padStart(2, "0"), y3 = String(randInt(e4, 1, 28)).padStart(2, "0"), f4 = pick(e4, d3), $3 = (function(e5, a9, n5) {
    const r7 = n5.slice(0, 2).toUpperCase();
    if ("Passport" === a9) return `${r7}${chr(e5)}${chr(e5)}${randInt(e5, 1e5, 999999)}`;
    return `${r7}${randInt(e5, 1e7, 99999999)}`;
  })(e4, f4, m5);
  return { name: s6, email: `${c4.toLowerCase()}.${u5.toLowerCase()}${randInt(e4, 1, 99)}@example.net`, country: m5, idType: f4, idNumber: (S3 = $3, S3.length <= 6 ? "*".repeat(S3.length) : S3.slice(0, 3) + "*".repeat(S3.length - 6) + S3.slice(-3)), verificationLevel: weightedPick(e4, [["L3 Verified", 0.45], ["L2 Verified", 0.4], ["L1 Basic", 0.15]]), phone: `+${randInt(e4, 1, 99)} ${randInt(e4, 100, 999)} ${randInt(e4, 100, 999)} ${randInt(e4, 10, 99)}${randInt(e4, 10, 99)}`, dob: `${h5}-${p5}-${y3}`, registeredAt: new Date(Date.UTC(2017 + randInt(e4, 0, 7), randInt(e4, 0, 11), randInt(e4, 1, 28))).toISOString() };
  var S3;
}
function chr(e4) {
  return String.fromCharCode(65 + randInt(e4, 0, 25));
}
function buildExchangeRegistry() {
  const e4 = createRng("fake-exchange-registry-v2"), t12 = (function(e5) {
    const a8 = [], r6 = /* @__PURE__ */ new Set();
    let t13 = 0;
    for (; a8.length < 14 && t13++ < 300; ) {
      const t14 = `${pick(e5, o4)} ${pick(e5, s4)}`;
      if (r6.has(t14)) continue;
      r6.add(t14);
      const c5 = t14.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      a8.push({ slug: c5, name: t14, country: pick(e5, g4), category: weightedPick(e5, l3) });
    }
    return a8;
  })(e4), c4 = [];
  for (const i4 of t12) {
    const t13 = weightedPick(e4, [[2, 0.6], [3, 0.3], [4, 0.1]]);
    for (let e5 = 0; e5 < t13; e5++) {
      const n5 = createRng(`${i4.slug}:${e5}`), t14 = genAddress(n5);
      c4.push({ exchangeSlug: i4.slug, exchangeName: i4.name, country: i4.country, category: i4.category, address: t14, kyc: genKyc(createRng(`${i4.slug}:${e5}:kyc:${t14}`)) });
    }
  }
  return c4;
}
function getExchangeRegistry() {
  return h3 || (h3 = buildExchangeRegistry()), h3;
}
function findExchangeByAddress(e4) {
  return getExchangeRegistry().find((a8) => a8.address === e4);
}
var o4, s4, l3, c2, u3, g4, d3, m3, h3;
var init_identities = __esm({
  ".output/server/chunks/_/identities.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_address();
    o4 = ["Nimbus", "Velaro", "Lunastone", "Onyx", "Crimson", "Aurora", "Solace", "Meridian", "Vantage", "Northgrove", "Zenith", "Cobalt", "Ember", "Fathom", "Holloway", "Opaline", "Quartz", "Steelrock", "Tideway", "Vesper", "Garland", "Ivory", "Keystone", "Midwinter", "Prism", "Rutabaga", "Skyreach", "Twinpeak"];
    s4 = ["Exchange", "Trade", "Markets", "Capital", "Trust", "Group", "Global", "Labs", "Prime", "Collective", "Fintech", "Vault", "Desk", "Pinnacle", "Node", "Row", "Shore", "Brigade", "Circuit", "Dispatch"];
    l3 = [["Centralized Exchange", 0.55], ["OTC / Pro Desk", 0.15], ["Instant Swap", 0.2], ["Crypto Exchange", 0.1]];
    c2 = ["Ahmed", "Anya", "Bruno", "Camille", "Diego", "Elif", "Fatima", "Gunnar", "Hassan", "Ingrid", "Jamal", "Katarina", "Liam", "Mei", "Nadia", "Omar", "Priya", "Quentin", "Ravi", "Sofia", "Tomas", "Ursula", "Viktor", "Wei", "Ximena", "Yusuf", "Zara", "Ivan", "Lena", "Mateo"];
    u3 = ["Alvarez", "Bauer", "Chen", "Diaz", "Elaine", "Fischer", "Garcia", "Haddad", "Ivanov", "Jensen", "Kim", "Lopez", "Miranda", "Novak", "Okafor", "Petersen", "Rossi", "Silva", "Tanaka", "Ueda", "Vega", "Wagner", "Xu", "Yilmaz", "Zimmermann", "Farouk", "Gupta", "Hoffmann", "Nordqvist", "Osman"];
    g4 = ["Germany", "France", "United Kingdom", "Spain", "Portugal", "Netherlands", "Sweden", "Poland", "Czech Republic", "United Arab Emirates", "Singapore", "Hong Kong", "Japan", "Brazil", "Argentina", "Turkey", "Nigeria", "Kenya", "India", "Indonesia", "Vietnam", "Philippines", "Mexico", "Colombia", "Canada", "Australia", "New Zealand", "South Africa", "Romania", "Hungary", "Greece", "Italy", "Belgium", "Austria", "Switzerland", "Luxembourg", "Ireland", "Norway", "Finland", "Denmark", "Estonia", "Lithuania", "Latvia", "Slovakia"];
    d3 = ["Passport", "National ID Card", "Driver License", "Residence Permit"];
    m3 = null;
    __name(identityName, "identityName");
    __name(suspectOwnerName, "suspectOwnerName");
    __name(genKyc, "genKyc");
    __name(chr, "chr");
    __name(buildExchangeRegistry, "buildExchangeRegistry");
    h3 = null;
    __name(getExchangeRegistry, "getExchangeRegistry");
    __name(findExchangeByAddress, "findExchangeByAddress");
  }
});

// .output/server/chunks/routes/api/analyze.post.mjs
var analyze_post_exports = {};
__export(analyze_post_exports, {
  default: () => w3
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
function uniqueAddresses(t12, e4) {
  const s6 = /* @__PURE__ */ new Set(), a8 = [];
  let n5 = 0;
  for (; a8.length < e4; ) {
    const e5 = genAddress(createRng(`${t12}:slot:${n5++}`));
    s6.has(e5) || (s6.add(e5), a8.push(e5));
  }
  return a8;
}
function round8(t12) {
  return Math.round(1e8 * t12) / 1e8;
}
function txHash(t12, e4, s6, o7, a8) {
  return `sim:${hexDigest(`${e4}:${s6}:${o7}:${a8}:${t12().toString(16)}`, 58)}`;
}
function buildNode(t12, e4, s6, o7, a8) {
  let n5 = 0, r6 = 0;
  const d5 = [];
  for (const e5 of s6) e5.from !== t12 && e5.to !== t12 || (d5.push(e5.timestamp), e5.to === t12 && (n5 += e5.amount), e5.from === t12 && (r6 += e5.amount + e5.fee));
  return { address: t12, isExchange: o7, exchangeName: a8, isSuspect: t12 === e4, totalReceived: round8(n5), totalSent: round8(r6), balance: round8(Math.max(0, n5 - r6)), txCount: d5.length, firstSeen: d5.length ? Math.min(...d5) : 0, lastSeen: d5.length ? Math.max(...d5) : 0 };
}
var w3;
var init_analyze_post = __esm({
  ".output/server/chunks/routes/api/analyze.post.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_address();
    init_identities();
    init_neo4j();
    init_turso();
    __name(uniqueAddresses, "uniqueAddresses");
    __name(round8, "round8");
    __name(txHash, "txHash");
    __name(buildNode, "buildNode");
    w3 = defineEventHandler(async (t12) => {
      var d5;
      const i4 = await readBody(t12).catch(() => ({})), w5 = String(null != (d5 = null == i4 ? void 0 : i4.address) ? d5 : "").trim();
      if (!w5) throw createError({ statusCode: 400, statusMessage: 'Missing "address" in request body' });
      if (!isValidLtcTestnetAddress(w5)) throw createError({ statusCode: 422, statusMessage: "Not a valid Litecoin testnet address" });
      if (w5.length > 100) throw createError({ statusCode: 422, statusMessage: "Address too long" });
      const x5 = (function(t13) {
        const e4 = createRng(t13), s6 = getExchangeRegistry(), d6 = pickN(e4, s6, randInt(e4, 4, 7));
        new Set(d6.map((t14) => t14.address));
        const i5 = randInt(e4, 5, 11), u5 = uniqueAddresses(`${t13}:mids`, i5), l5 = uniqueAddresses(`${t13}:leaves`, randInt(e4, 2, 5)), h5 = [];
        let p5 = Date.now() - 864e5 * randInt(e4, 260, 380), g5 = 0;
        const push = /* @__PURE__ */ __name((t14, s7, o7, a8) => {
          var n5;
          p5 += 6e4 * randInt(e4, 45, 12960), h5.push({ hash: txHash(e4, t14, s7, g5++, p5), from: t14, to: s7, amount: round8(o7), fee: round8(a8), timestamp: p5, blockHeight: (n5 = p5, Math.floor((n5 - 160704e7) / 15e4)) });
        }, "push");
        for (const s7 of u5) {
          const o7 = randInt(e4, 1, 2);
          for (let a8 = 0; a8 < o7; a8++) push(s7, t13, randBetween(e4, 0.05, 45), randBetween(e4, 1e-4, 6e-3));
        }
        const w6 = pickN(e4, u5, randInt(e4, 2, 4));
        for (const t14 of w6) {
          const s7 = randInt(e4, 1, 2);
          for (let o7 = 0; o7 < s7; o7++) push(t14, pickN(e4, d6, 1)[0].address, randBetween(e4, 5, 90), randBetween(e4, 1e-4, 9e-3));
        }
        const x6 = randInt(e4, 2, 5);
        for (let s7 = 0; s7 < x6; s7++) {
          const s8 = pickN(e4, d6, 1)[0];
          push(t13, s8.address, randBetween(e4, 5, 220), randBetween(e4, 2e-4, 9e-3));
        }
        const M4 = randInt(e4, 2, 5);
        for (let s7 = 0; s7 < M4; s7++) push(t13, pickN(e4, u5, 1)[0], randBetween(e4, 0.3, 60), randBetween(e4, 1e-4, 7e-3));
        for (const s7 of l5) push(t13, s7, randBetween(e4, 0.01, 4), randBetween(e4, 1e-4, 4e-3));
        let $4 = 0, v4 = 0;
        for (const e5 of h5) e5.to === t13 && ($4 += e5.amount), e5.from === t13 && (v4 += e5.amount + e5.fee);
        let S4 = 0;
        for (; v4 > $4 && S4 < 5; ) {
          const s7 = v4 - $4, o7 = pickN(e4, u5, 1)[0], r6 = randBetween(e4, s7 + 15, s7 + 220);
          push(o7, t13, r6, randBetween(e4, 1e-4, 5e-3)), $4 += r6, S4++;
        }
        const A3 = buildNode(t13, t13, h5, false);
        A3.ownerName = suspectOwnerName(t13);
        const b5 = /* @__PURE__ */ new Map(), j3 = [...new Set(h5.flatMap((t14) => [t14.from, t14.to]).filter((e5) => e5 !== t13))];
        for (const e5 of j3) {
          const s7 = findExchangeByAddress(e5);
          b5.set(e5, buildNode(e5, t13, h5, Boolean(s7), null == s7 ? void 0 : s7.exchangeName));
        }
        return b5.set(t13, A3), { address: t13, txns: h5, nodes: [...b5.values()].sort((t14, e5) => t14.address.localeCompare(e5.address)), exchangeAccounts: d6, generatedAt: Date.now() };
      })(w5);
      await upsertSimulation(x5);
      const M3 = hasNeo4j() ? "neo4j" : "memory", $3 = await persistExchangeKyc(x5.exchangeAccounts), v3 = { nodes: x5.nodes.map((t13) => ({ data: t13 })), edges: x5.txns.map((t13) => ({ data: { id: t13.hash, source: t13.from, target: t13.to, hash: t13.hash, amount: t13.amount, fee: t13.fee, timestamp: t13.timestamp, direction: t13.to === x5.address ? "in" : "out" } })) }, S3 = x5.nodes.filter((t13) => t13.isExchange).map((t13) => t13.address);
      return { graph: v3, kyt: await getKycForAddresses(S3), suspect: w5, storageMode: M3, tursoConnected: "turso" === $3, generatedAt: Date.now() };
    });
  }
});

// .output/server/chunks/routes/api/exchanges.get.mjs
var exchanges_get_exports = {};
__export(exchanges_get_exports, {
  default: () => o5
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
var o5;
var init_exchanges_get = __esm({
  ".output/server/chunks/routes/api/exchanges.get.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_turso();
    init_identities();
    init_address();
    o5 = defineEventHandler(async () => {
      if (hasTurso()) return { connected: true, storage: "turso", exchanges: await listExchangeSummaries() };
      const e4 = getExchangeRegistry(), o7 = /* @__PURE__ */ new Map();
      for (const r6 of e4) o7.has(r6.exchangeSlug) || o7.set(r6.exchangeSlug, { name: r6.exchangeName, country: r6.country, category: r6.category, addresses: [] }), o7.get(r6.exchangeSlug).addresses.push(r6.address);
      return { connected: false, storage: "registry", exchanges: [...o7.entries()].map(([e5, r6]) => ({ slug: e5, name: r6.name, country: r6.country, category: r6.category, count: r6.addresses.length })) };
    });
  }
});

// .output/server/chunks/routes/api/graph/_address_.get.mjs
var address_get_exports2 = {};
__export(address_get_exports2, {
  default: () => a4
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
var a4;
var init_address_get2 = __esm({
  ".output/server/chunks/routes/api/graph/_address_.get.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_address();
    init_neo4j();
    a4 = defineEventHandler(async (s6) => {
      var a8;
      const i4 = String(null != (a8 = getRouterParam(s6, "address")) ? a8 : "").trim();
      if (!isValidLtcTestnetAddress(i4)) throw createError({ statusCode: 422, statusMessage: "Not a valid Litecoin testnet address" });
      const n5 = await readGraph(i4);
      return { ...n5, exists: n5.nodes.length > 0 };
    });
  }
});

// .output/server/chunks/routes/api/health.get.mjs
var health_get_exports = {};
__export(health_get_exports, {
  default: () => a5
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
var a5;
var init_health_get = __esm({
  ".output/server/chunks/routes/api/health.get.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_neo4j();
    init_turso();
    a5 = defineEventHandler(async () => {
      const o7 = {};
      if (o7.neo4j = { available: hasNeo4j() }, hasNeo4j()) try {
        await cypher_health(), o7.neo4j.connected = true, o7.neo4j.nodes = await countNodes();
      } catch (e4) {
        o7.neo4j.connected = false, o7.neo4j.detail = e4.message;
      }
      return o7.turso = { available: hasTurso() }, { ok: true, mode: hasNeo4j() ? "neo4j" : "memory", services: o7, time: (/* @__PURE__ */ new Date()).toISOString() };
    });
  }
});

// .output/server/chunks/routes/api/kyt/_address_.get.mjs
var address_get_exports3 = {};
__export(address_get_exports3, {
  default: () => a6
});
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
var a6;
var init_address_get3 = __esm({
  ".output/server/chunks/routes/api/kyt/_address_.get.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_address();
    init_turso();
    a6 = defineEventHandler(async (s6) => {
      var a8;
      const i4 = String(null != (a8 = getRouterParam(s6, "address")) ? a8 : "").trim();
      if (!isValidLtcTestnetAddress(i4)) throw createError({ statusCode: 422, statusMessage: "Not a valid Litecoin testnet address" });
      const d5 = (await getKycForAddresses([i4]))[0];
      if (!d5) throw createError({ statusCode: 404, statusMessage: "No KYC record for this address" });
      return d5;
    });
  }
});

// .output/server/chunks/nitro/nitro.mjs
import { EventEmitter as e3 } from "node:events";
import { env as r5 } from "cloudflare:workers";
import { Buffer as s5 } from "node:buffer";
import { setImmediate as a7, clearImmediate as c3 } from "node:timers";
function createNotImplementedError2(e4) {
  return new Error(`[unenv] ${e4} is not implemented yet!`);
}
function notImplemented2(e4) {
  return Object.assign(() => {
    throw createNotImplementedError2(e4);
  }, { __unenv__: true });
}
function jsonParseTransform(e4, t12) {
  if (!("__proto__" === e4 || "constructor" === e4 && t12 && "object" == typeof t12 && "prototype" in t12)) return t12;
  !(function(e5) {
    console.warn(`[destr] Dropping "${e5}" key to prevent prototype pollution.`);
  })(e4);
}
function destr(e4, t12 = {}) {
  if ("string" != typeof e4) return e4;
  if ('"' === e4[0] && '"' === e4[e4.length - 1] && -1 === e4.indexOf("\\")) return e4.slice(1, -1);
  const r6 = e4.trim();
  if (r6.length <= 9) switch (r6.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!xt3.test(e4)) {
    if (t12.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e4;
  }
  try {
    if (bt3.test(e4) || vt3.test(e4)) {
      if (t12.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e4, jsonParseTransform);
    }
    return JSON.parse(e4);
  } catch (r7) {
    if (t12.strict) throw r7;
    return e4;
  }
}
function encode(e4) {
  return encodeURI("" + e4).replace(Ht3, "|");
}
function encodeQueryValue2(e4) {
  return encode("string" == typeof e4 ? e4 : JSON.stringify(e4)).replace(St3, "%2B").replace(Pt3, "+").replace(Rt3, "%23").replace(kt3, "%26").replace(jt3, "`").replace(Tt3, "^").replace(Ct3, "%2F");
}
function encodeQueryKey2(e4) {
  return encodeQueryValue2(e4).replace(Et3, "%3D");
}
function encodePath(e4) {
  return encode(e4).replace(Rt3, "%23").replace(At3, "%3F").replace(Mt3, "%2F").replace(kt3, "%26").replace(St3, "%2B");
}
function decode2(e4 = "") {
  try {
    return decodeURIComponent("" + e4);
  } catch {
    return "" + e4;
  }
}
function decodePath(e4) {
  return decode2(e4.replace(It3, "%252F"));
}
function decodeQueryKey(e4) {
  return decode2(e4.replace(St3, " "));
}
function decodeQueryValue(e4) {
  return decode2(e4.replace(St3, " "));
}
function parseQuery(e4 = "") {
  const t12 = /* @__PURE__ */ Object.create(null);
  "?" === e4[0] && (e4 = e4.slice(1));
  for (const r6 of e4.split("&")) {
    const e5 = r6.match(/([^=]+)=?(.*)/) || [];
    if (e5.length < 2) continue;
    const s6 = decodeQueryKey(e5[1]);
    if ("__proto__" === s6 || "constructor" === s6) continue;
    const a8 = decodeQueryValue(e5[2] || "");
    void 0 === t12[s6] ? t12[s6] = a8 : Array.isArray(t12[s6]) ? t12[s6].push(a8) : t12[s6] = [t12[s6], a8];
  }
  return t12;
}
function stringifyQuery2(e4) {
  return Object.keys(e4).filter((t12) => void 0 !== e4[t12]).map((t12) => {
    return r6 = t12, "number" != typeof (s6 = e4[t12]) && "boolean" != typeof s6 || (s6 = String(s6)), s6 ? Array.isArray(s6) ? s6.map((e5) => `${encodeQueryKey2(r6)}=${encodeQueryValue2(e5)}`).join("&") : `${encodeQueryKey2(r6)}=${encodeQueryValue2(s6)}` : encodeQueryKey2(r6);
    var r6, s6;
  }).filter(Boolean).join("&");
}
function hasProtocol(e4, t12 = {}) {
  return "boolean" == typeof t12 && (t12 = { acceptRelative: t12 }), t12.strict ? Ot3.test(e4) : Nt3.test(e4) || !!t12.acceptRelative && Bt3.test(e4);
}
function isScriptProtocol(e4) {
  return !!e4 && qt3.test(e4);
}
function hasTrailingSlash(e4 = "", t12) {
  return t12 ? Ut3.test(e4) : e4.endsWith("/");
}
function withoutTrailingSlash(e4 = "", t12) {
  if (!t12) return (hasTrailingSlash(e4) ? e4.slice(0, -1) : e4) || "/";
  if (!hasTrailingSlash(e4, true)) return e4 || "/";
  let r6 = e4, s6 = "";
  const a8 = e4.indexOf("#");
  -1 !== a8 && (r6 = e4.slice(0, a8), s6 = e4.slice(a8));
  const [c4, ...u5] = r6.split("?");
  return ((c4.endsWith("/") ? c4.slice(0, -1) : c4) || "/") + (u5.length > 0 ? `?${u5.join("?")}` : "") + s6;
}
function withTrailingSlash(e4 = "", t12) {
  if (!t12) return e4.endsWith("/") ? e4 : e4 + "/";
  if (hasTrailingSlash(e4, true)) return e4 || "/";
  let r6 = e4, s6 = "";
  const a8 = e4.indexOf("#");
  if (-1 !== a8 && (r6 = e4.slice(0, a8), s6 = e4.slice(a8), !r6)) return s6;
  const [c4, ...u5] = r6.split("?");
  return c4 + "/" + (u5.length > 0 ? `?${u5.join("?")}` : "") + s6;
}
function withLeadingSlash(e4 = "") {
  return (function(e5 = "") {
    return e5.startsWith("/");
  })(e4) ? e4 : "/" + e4;
}
function withoutBase(e4, t12) {
  if (isEmptyURL(t12)) return e4;
  const r6 = withoutTrailingSlash(t12);
  if (!e4.startsWith(r6)) return e4;
  const s6 = e4[r6.length];
  if (s6 && "/" !== s6 && "?" !== s6) return e4;
  return "/" + e4.slice(r6.length).replace(/^\/+/, "");
}
function withQuery(e4, t12) {
  const r6 = parseURL(e4), s6 = { ...parseQuery(r6.search), ...t12 };
  return r6.search = stringifyQuery2(s6), (function(e5) {
    const t13 = e5.pathname || "", r7 = e5.search ? (e5.search.startsWith("?") ? "" : "?") + e5.search : "", s7 = e5.hash || "", a8 = e5.auth ? e5.auth + "@" : "", c4 = e5.host || "", u5 = e5.protocol || e5[Lt3] ? (e5.protocol || "") + "//" : "";
    return u5 + a8 + c4 + t13 + r7 + s7;
  })(r6);
}
function getQuery$1(e4) {
  return parseQuery(parseURL(e4).search);
}
function isEmptyURL(e4) {
  return !e4 || "/" === e4;
}
function joinURL(e4, ...t12) {
  let r6 = e4 || "";
  for (const e5 of t12.filter((e6) => /* @__PURE__ */ (function(e7) {
    return e7 && "/" !== e7;
  })(e6))) if (r6) {
    const t13 = e5.replace(zt3, "");
    r6 = withTrailingSlash(r6) + t13;
  } else r6 = e5;
  return r6;
}
function joinRelativeURL(...e4) {
  const t12 = /\/(?!\/)/, r6 = e4.filter(Boolean), s6 = [];
  let a8 = 0;
  for (const e5 of r6) if (e5 && "/" !== e5) {
    for (const [r7, c5] of e5.split(t12).entries()) if (c5 && "." !== c5) if (".." !== c5) 1 === r7 && s6[s6.length - 1]?.endsWith(":/") ? s6[s6.length - 1] += "/" + c5 : (s6.push(c5), a8++);
    else {
      if (1 === s6.length && hasProtocol(s6[0])) continue;
      s6.pop(), a8--;
    }
  }
  let c4 = s6.join("/");
  return a8 >= 0 ? r6[0]?.startsWith("/") && !c4.startsWith("/") ? c4 = "/" + c4 : r6[0]?.startsWith("./") && !c4.startsWith("./") && (c4 = "./" + c4) : c4 = "../".repeat(-1 * a8) + c4, r6[r6.length - 1]?.endsWith("/") && !c4.endsWith("/") && (c4 += "/"), c4;
}
function parseURL(e4 = "", t12) {
  const r6 = e4.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r6) {
    const [, e5, t13 = ""] = r6;
    return { protocol: e5.toLowerCase(), pathname: t13, href: e5 + t13, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e4, { acceptRelative: true })) return parsePath(e4);
  const [, s6 = "", a8, c4 = ""] = e4.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u5 = "", d5 = ""] = c4.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s6 && (d5 = d5.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h5, search: f4, hash: m5 } = parsePath(d5);
  return { protocol: s6.toLowerCase(), auth: a8 ? a8.slice(0, Math.max(0, a8.length - 1)) : "", host: u5, pathname: h5, search: f4, hash: m5, [Lt3]: !s6 };
}
function parsePath(e4 = "") {
  const [t12 = "", r6 = "", s6 = ""] = (e4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t12, search: r6, hash: s6 };
}
function createRouter$1(e4 = {}) {
  const t12 = { options: e4, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t13) => e4.strictTrailingSlash ? t13 : t13.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e4.routes) for (const r6 in e4.routes) insert(t12, normalizeTrailingSlash(r6), e4.routes[r6]);
  return { ctx: t12, lookup: /* @__PURE__ */ __name((e5) => (function(e6, t13) {
    const r6 = e6.staticRoutesMap[t13];
    if (r6) return r6.data;
    const s6 = t13.split("/"), a8 = {};
    let c4 = false, u5 = null, d5 = e6.rootNode, h5 = null;
    for (let e7 = 0; e7 < s6.length; e7++) {
      const t14 = s6[e7];
      null !== d5.wildcardChildNode && (u5 = d5.wildcardChildNode, h5 = s6.slice(e7).join("/"));
      const r7 = d5.children.get(t14);
      if (void 0 === r7) {
        if (d5 && d5.placeholderChildren.length > 1) {
          const t15 = s6.length - e7;
          d5 = d5.placeholderChildren.find((e8) => e8.maxDepth === t15) || null;
        } else d5 = d5.placeholderChildren[0] || null;
        if (!d5) break;
        d5.paramName && (a8[d5.paramName] = t14), c4 = true;
      } else d5 = r7;
    }
    null !== d5 && null !== d5.data || null === u5 || (d5 = u5, a8[d5.paramName || "_"] = h5, c4 = true);
    if (!d5) return null;
    if (c4) return { ...d5.data, params: c4 ? a8 : void 0 };
    return d5.data;
  })(t12, normalizeTrailingSlash(e5)), "lookup"), insert: /* @__PURE__ */ __name((e5, r6) => insert(t12, normalizeTrailingSlash(e5), r6), "insert"), remove: /* @__PURE__ */ __name((e5) => (function(e6, t13) {
    let r6 = false;
    const s6 = t13.split("/");
    let a8 = e6.rootNode;
    for (const e7 of s6) if (a8 = a8.children.get(e7), !a8) return r6;
    if (a8.data) {
      const e7 = s6.at(-1) || "";
      a8.data = null, 0 === Object.keys(a8.children).length && a8.parent && (a8.parent.children.delete(e7), a8.parent.wildcardChildNode = null, a8.parent.placeholderChildren = []), r6 = true;
    }
    return r6;
  })(t12, normalizeTrailingSlash(e5)), "remove") };
}
function insert(e4, t12, r6) {
  let s6 = true;
  const a8 = t12.split("/");
  let c4 = e4.rootNode, u5 = 0;
  const d5 = [c4];
  for (const e5 of a8) {
    let t13;
    if (t13 = c4.children.get(e5)) c4 = t13;
    else {
      const r7 = getNodeType(e5);
      t13 = createRadixNode({ type: r7, parent: c4 }), c4.children.set(e5, t13), r7 === Dt3 ? (t13.paramName = "*" === e5 ? "_" + u5++ : e5.slice(1), c4.placeholderChildren.push(t13), s6 = false) : r7 === Wt3 && (c4.wildcardChildNode = t13, t13.paramName = e5.slice(3) || "_", s6 = false), d5.push(t13), c4 = t13;
    }
  }
  for (const [e5, t13] of d5.entries()) t13.maxDepth = Math.max(d5.length - e5, t13.maxDepth || 0);
  return c4.data = r6, true === s6 && (e4.staticRoutesMap[t12] = c4), c4;
}
function createRadixNode(e4 = {}) {
  return { type: e4.type || $t3, maxDepth: 0, parent: e4.parent || null, children: /* @__PURE__ */ new Map(), data: e4.data || null, paramName: e4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e4) {
  return e4.startsWith("**") ? Wt3 : ":" === e4[0] || "*" === e4 ? Dt3 : $t3;
}
function toRouteMatcher(e4) {
  return /* @__PURE__ */ (function(e5, t12) {
    return { ctx: { table: e5 }, matchAll: /* @__PURE__ */ __name((r6) => _matchRoutes(r6, e5, t12), "matchAll") };
  })(_routerNodeToTable("", e4.ctx.rootNode), e4.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e4, t12, r6) {
  true !== r6 && e4.endsWith("/") && (e4 = e4.slice(0, -1) || "/");
  const s6 = [];
  for (const [r7, a9] of _sortRoutesMap(t12.wildcard)) (e4 === r7 || e4.startsWith(r7 + "/")) && s6.push(a9);
  for (const [r7, a9] of _sortRoutesMap(t12.dynamic)) if (e4.startsWith(r7 + "/")) {
    const t13 = "/" + e4.slice(r7.length).split("/").splice(2).join("/");
    s6.push(..._matchRoutes(t13, a9));
  }
  const a8 = t12.static.get(e4);
  return a8 && s6.push(a8), s6.filter(Boolean);
}
function _sortRoutesMap(e4) {
  return [...e4.entries()].sort((e5, t12) => e5[0].length - t12[0].length);
}
function _routerNodeToTable(e4, t12) {
  const r6 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e5, t13) {
    if (e5) if (t13.type !== $t3 || e5.includes("*") || e5.includes(":")) {
      if (t13.type === Wt3) r6.wildcard.set(e5.replace("/**", ""), t13.data);
      else if (t13.type === Dt3) {
        const s6 = _routerNodeToTable("", t13);
        return t13.data && s6.static.set("/", t13.data), void r6.dynamic.set(e5.replace(/\/\*|\/:\w+/, ""), s6);
      }
    } else t13.data && r6.static.set(e5, t13.data);
    for (const [r7, s6] of t13.children.entries()) _addNode(`${e5}/${r7}`.replace("//", "/"), s6);
  }, "_addNode"))(e4, t12), r6;
}
function isPlainObject2(e4) {
  if (null === e4 || "object" != typeof e4) return false;
  const t12 = Object.getPrototypeOf(e4);
  return (null === t12 || t12 === Object.prototype || null === Object.getPrototypeOf(t12)) && (!(Symbol.iterator in e4) && (!(Symbol.toStringTag in e4) || "[object Module]" === Object.prototype.toString.call(e4)));
}
function _defu(e4, t12, r6 = ".", s6) {
  if (!isPlainObject2(t12)) return _defu(e4, {}, r6, s6);
  const a8 = { ...t12 };
  for (const t13 of Object.keys(e4)) {
    if ("__proto__" === t13 || "constructor" === t13) continue;
    const c4 = e4[t13];
    null != c4 && (s6 && s6(a8, t13, c4, r6) || (Array.isArray(c4) && Array.isArray(a8[t13]) ? a8[t13] = [...c4, ...a8[t13]] : isPlainObject2(c4) && isPlainObject2(a8[t13]) ? a8[t13] = _defu(c4, a8[t13], (r6 ? `${r6}.` : "") + t13.toString(), s6) : a8[t13] = c4));
  }
  return a8;
}
function createDefu(e4) {
  return (...t12) => t12.reduce((t13, r6) => _defu(t13, r6, "", e4), {});
}
function o6(e4) {
  throw new Error(`${e4} is not implemented yet!`);
}
function p4(e4) {
  const t12 = {};
  for (const [r6, s6] of Object.entries(e4)) r6 && (t12[r6] = (Array.isArray(s6) ? s6 : [s6]).filter(Boolean));
  return t12;
}
function v2(e4 = {}) {
  if (e4 instanceof Headers) return e4;
  const t12 = new Headers();
  for (const [r6, s6] of Object.entries(e4)) if (void 0 !== s6) {
    if (Array.isArray(s6)) {
      for (const e5 of s6) t12.append(r6, String(e5));
      continue;
    }
    t12.set(r6, String(s6));
  }
  return t12;
}
async function b4(e4, t12) {
  const r6 = new y2(), s6 = new w4(r6);
  let a8;
  if (r6.url = t12.url?.toString() || "/", !r6.url.startsWith("/")) {
    const e5 = new URL(r6.url);
    a8 = e5.host, r6.url = e5.pathname + e5.search + e5.hash;
  }
  r6.method = t12.method || "GET", r6.headers = (function(e5 = {}) {
    const t13 = new Zt3(), r7 = Array.isArray(e5) || (function(e6) {
      return "function" == typeof e6?.entries;
    })(e5) ? e5 : Object.entries(e5);
    for (const [e6, s7] of r7) if (s7) {
      if (void 0 === t13[e6]) {
        t13[e6] = s7;
        continue;
      }
      t13[e6] = [...Array.isArray(t13[e6]) ? t13[e6] : [t13[e6]], ...Array.isArray(s7) ? s7 : [s7]];
    }
    return t13;
  })(t12.headers || {}), r6.headers.host || (r6.headers.host = t12.host || a8 || "localhost"), r6.connection.encrypted = r6.connection.encrypted || "https" === t12.protocol, r6.body = t12.body || null, r6.__unenv__ = t12.context, await e4(r6, s6);
  let c4 = s6._data;
  (Vt3.has(s6.statusCode) || "HEAD" === r6.method.toUpperCase()) && (c4 = null, delete s6._headers["content-length"]);
  const u5 = { status: s6.statusCode, statusText: s6.statusMessage, headers: s6._headers, body: c4 };
  return r6.destroy(), s6.destroy(), u5;
}
function hasProp2(e4, t12) {
  try {
    return t12 in e4;
  } catch {
    return false;
  }
}
function createError(e4) {
  if ("string" == typeof e4) return new H3Error(e4);
  if (isError(e4)) return e4;
  const t12 = new H3Error(e4.message ?? e4.statusMessage ?? "", { cause: e4.cause || e4 });
  if (hasProp2(e4, "stack")) try {
    Object.defineProperty(t12, "stack", { get: /* @__PURE__ */ __name(() => e4.stack, "get") });
  } catch {
    try {
      t12.stack = e4.stack;
    } catch {
    }
  }
  if (e4.data && (t12.data = e4.data), e4.statusCode ? t12.statusCode = sanitizeStatusCode(e4.statusCode, t12.statusCode) : e4.status && (t12.statusCode = sanitizeStatusCode(e4.status, t12.statusCode)), e4.statusMessage ? t12.statusMessage = e4.statusMessage : e4.statusText && (t12.statusMessage = e4.statusText), t12.statusMessage) {
    const e5 = t12.statusMessage;
    sanitizeStatusMessage(t12.statusMessage) !== e5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e4.fatal && (t12.fatal = e4.fatal), void 0 !== e4.unhandled && (t12.unhandled = e4.unhandled), t12;
}
function isError(e4) {
  return true === e4?.constructor?.__h3_error__;
}
function getQuery(e4) {
  return getQuery$1(e4.path || "");
}
function getRouterParam(e4, t12, r6 = {}) {
  const s6 = (function(e5, t13 = {}) {
    let r7 = e5.context.params || {};
    if (t13.decode) {
      r7 = { ...r7 };
      for (const e6 in r7) r7[e6] = decode2(r7[e6]);
    }
    return r7;
  })(e4, r6);
  return s6[t12];
}
function getRequestHeaders(e4) {
  const t12 = {};
  for (const r6 in e4.node.req.headers) {
    const s6 = e4.node.req.headers[r6];
    t12[r6] = Array.isArray(s6) ? s6.filter(Boolean).join(", ") : s6;
  }
  return t12;
}
function readRawBody(e4, t12 = "utf8") {
  !(function(e5, t13) {
    if (!(function(e6, t14) {
      if ("string" == typeof t14) {
        if (e6.method === t14) return true;
      } else if (t14.includes(e6.method)) return true;
      return false;
    })(e5, t13)) throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  })(e4, Yt3);
  const r6 = e4._requestBody || e4.web?.request?.body || e4.node.req[Gt3] || e4.node.req.rawBody || e4.node.req.body;
  if (r6) {
    const e5 = Promise.resolve(r6).then((e6) => s5.isBuffer(e6) ? e6 : "function" == typeof e6.pipeTo ? new Promise((t13, r7) => {
      const a9 = [];
      e6.pipeTo(new WritableStream({ write(e7) {
        a9.push(e7);
      }, close() {
        t13(s5.concat(a9));
      }, abort(e7) {
        r7(e7);
      } })).catch(r7);
    }) : "function" == typeof e6.pipe ? new Promise((t13, r7) => {
      const a9 = [];
      e6.on("data", (e7) => {
        a9.push(e7);
      }).on("end", () => {
        t13(s5.concat(a9));
      }).on("error", r7);
    }) : e6.constructor === Object ? s5.from(JSON.stringify(e6)) : e6 instanceof URLSearchParams ? s5.from(e6.toString()) : e6 instanceof FormData ? new Response(e6).bytes().then((e7) => s5.from(e7)) : s5.from(e6));
    return t12 ? e5.then((e6) => e6.toString(t12)) : e5;
  }
  if (!Number.parseInt(e4.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(String(e4.node.req.headers["transfer-encoding"] ?? ""))) return Promise.resolve(void 0);
  const a8 = e4.node.req[Gt3] = new Promise((t13, r7) => {
    const a9 = [];
    e4.node.req.on("error", (e5) => {
      r7(e5);
    }).on("data", (e5) => {
      a9.push(e5);
    }).on("end", () => {
      t13(s5.concat(a9));
    });
  });
  return t12 ? a8.then((e5) => e5.toString(t12)) : a8;
}
async function readBody(e4, t12 = {}) {
  const r6 = e4.node.req;
  if (hasProp2(r6, Xt3)) return r6[Xt3];
  const s6 = r6.headers["content-type"] || "", a8 = await readRawBody(e4);
  let c4;
  return c4 = "application/json" === s6 ? _parseJSON(a8, t12.strict ?? true) : s6.startsWith("application/x-www-form-urlencoded") ? (function(e5) {
    const t13 = new URLSearchParams(e5), r7 = /* @__PURE__ */ Object.create(null);
    for (const [e6, s7] of t13.entries()) hasProp2(r7, e6) ? (Array.isArray(r7[e6]) || (r7[e6] = [r7[e6]]), r7[e6].push(s7)) : r7[e6] = s7;
    return r7;
  })(a8) : s6.startsWith("text/") ? a8 : _parseJSON(a8, t12.strict ?? false), r6[Xt3] = c4, c4;
}
function _parseJSON(e4 = "", t12) {
  if (e4) try {
    return destr(e4, { strict: t12 });
  } catch {
    throw createError({ statusCode: 400, statusMessage: "Bad Request", message: "Invalid JSON body" });
  }
}
function handleCacheHeaders(e4, t12) {
  const r6 = ["public", ...t12.cacheControls || []];
  let s6 = false;
  if (void 0 !== t12.maxAge && r6.push("max-age=" + +t12.maxAge, "s-maxage=" + +t12.maxAge), t12.modifiedTime) {
    const r7 = new Date(t12.modifiedTime), a8 = e4.node.req.headers["if-modified-since"];
    e4.node.res.setHeader("last-modified", r7.toUTCString()), a8 && new Date(a8) >= r7 && (s6 = true);
  }
  if (t12.etag) {
    e4.node.res.setHeader("etag", t12.etag);
    e4.node.req.headers["if-none-match"] === t12.etag && (s6 = true);
  }
  return e4.node.res.setHeader("cache-control", r6.join(", ")), !!s6 && (e4.node.res.statusCode = 304, e4.handled || e4.node.res.end(), true);
}
function sanitizeStatusMessage(e4 = "") {
  return e4.replace(tr3, "");
}
function sanitizeStatusCode(e4, t12 = 200) {
  return e4 ? ("string" == typeof e4 && (e4 = Number.parseInt(e4, 10)), e4 < 100 || e4 > 999 ? t12 : e4) : t12;
}
function splitCookiesString(e4) {
  if (Array.isArray(e4)) return e4.flatMap((e5) => splitCookiesString(e5));
  if ("string" != typeof e4) return [];
  const t12 = [];
  let r6, s6, a8, c4, u5, d5 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; d5 < e4.length && /\s/.test(e4.charAt(d5)); ) d5 += 1;
    return d5 < e4.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (s6 = e4.charAt(d5), "=" !== s6 && ";" !== s6 && "," !== s6), "notSpecialChar");
  for (; d5 < e4.length; ) {
    for (r6 = d5, u5 = false; skipWhitespace(); ) if (s6 = e4.charAt(d5), "," === s6) {
      for (a8 = d5, d5 += 1, skipWhitespace(), c4 = d5; d5 < e4.length && notSpecialChar(); ) d5 += 1;
      d5 < e4.length && "=" === e4.charAt(d5) ? (u5 = true, d5 = c4, t12.push(e4.slice(r6, a8)), r6 = d5) : d5 = a8 + 1;
    } else d5 += 1;
    (!u5 || d5 >= e4.length) && t12.push(e4.slice(r6));
  }
  return t12;
}
function send2(e4, t12, r6) {
  return r6 && (function(e5, t13) {
    t13 && 304 !== e5.node.res.statusCode && !e5.node.res.getHeader("content-type") && e5.node.res.setHeader("content-type", t13);
  })(e4, r6), new Promise((r7) => {
    rr3(() => {
      e4.handled || e4.node.res.end(t12), r7();
    });
  });
}
function setResponseStatus(e4, t12, r6) {
  t12 && (e4.node.res.statusCode = sanitizeStatusCode(t12, e4.node.res.statusCode)), r6 && (e4.node.res.statusMessage = sanitizeStatusMessage(r6));
}
function getResponseStatus(e4) {
  return e4.node.res.statusCode;
}
function getResponseStatusText(e4) {
  return e4.node.res.statusMessage;
}
function setResponseHeaders(e4, t12) {
  for (const [r6, s6] of Object.entries(t12)) e4.node.res.setHeader(r6, s6);
}
function setResponseHeader(e4, t12, r6) {
  e4.node.res.setHeader(t12, r6);
}
function appendResponseHeader(e4, t12, r6) {
  let s6 = e4.node.res.getHeader(t12);
  s6 ? (Array.isArray(s6) || (s6 = [s6.toString()]), e4.node.res.setHeader(t12, [...s6, r6])) : e4.node.res.setHeader(t12, r6);
}
function sendStream(e4, t12) {
  if (!t12 || "object" != typeof t12) throw new Error("[h3] Invalid stream provided.");
  if (e4.node.res._data = t12, !e4.node.res.socket) return e4._handled = true, Promise.resolve();
  if (hasProp2(t12, "pipeTo") && "function" == typeof t12.pipeTo) return t12.pipeTo(new WritableStream({ write(t13) {
    e4.node.res.write(t13);
  } })).then(() => {
    e4.node.res.end();
  });
  if (hasProp2(t12, "pipe") && "function" == typeof t12.pipe) return new Promise((r6, s6) => {
    t12.pipe(e4.node.res), t12.on && (t12.on("end", () => {
      e4.node.res.end(), r6();
    }), t12.on("error", (e5) => {
      s6(e5);
    })), e4.node.res.on("close", () => {
      t12.abort && t12.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e4, t12) {
  for (const [r6, s6] of t12.headers) "set-cookie" === r6 ? e4.node.res.appendHeader(r6, splitCookiesString(s6)) : e4.node.res.setHeader(r6, s6);
  if (t12.status && (e4.node.res.statusCode = sanitizeStatusCode(t12.status, e4.node.res.statusCode)), t12.statusText && (e4.node.res.statusMessage = sanitizeStatusMessage(t12.statusText)), t12.redirected && e4.node.res.setHeader("location", t12.url), t12.body) return sendStream(e4, t12.body);
  e4.node.res.end();
}
async function proxyRequest(e4, t12, r6 = {}) {
  let s6, a8;
  or3.has(e4.method) && (r6.streamRequest ? (s6 = (function(e5) {
    if (!Yt3.includes(e5.method)) return;
    const t13 = e5.web?.request?.body || e5._requestBody;
    return t13 || (Gt3 in e5.node.req || "rawBody" in e5.node.req || "body" in e5.node.req || "__unenv__" in e5.node.req ? new ReadableStream({ async start(t14) {
      const r7 = await readRawBody(e5, false);
      r7 && t14.enqueue(r7), t14.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t14) => {
      e5.node.req.on("data", (e6) => {
        t14.enqueue(e6);
      }), e5.node.req.on("end", () => {
        t14.close();
      }), e5.node.req.on("error", (e6) => {
        t14.error(e6);
      });
    }, "start") }));
  })(e4), a8 = "half") : s6 = await readRawBody(e4, false).catch(() => {
  }));
  const c4 = r6.fetchOptions?.method || e4.method, u5 = (function(e5, ...t13) {
    const r7 = t13.filter(Boolean);
    if (0 === r7.length) return e5;
    const s7 = new Headers(e5);
    for (const e6 of r7) {
      const t14 = Array.isArray(e6) ? e6 : "function" == typeof e6.entries ? e6.entries() : Object.entries(e6);
      for (const [e7, r8] of t14) void 0 !== r8 && s7.set(e7, r8);
    }
    return s7;
  })(getProxyRequestHeaders(e4, { host: t12.startsWith("/") }), r6.fetchOptions?.headers, r6.headers);
  return (async function(e5, t13, r7 = {}) {
    let s7;
    try {
      s7 = await _getFetch(r7.fetch)(t13, { headers: r7.headers, ignoreResponseError: true, ...r7.fetchOptions });
    } catch (e6) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e6 });
    }
    e5.node.res.statusCode = sanitizeStatusCode(s7.status, e5.node.res.statusCode), e5.node.res.statusMessage = sanitizeStatusMessage(s7.statusText);
    const a9 = [];
    for (const [t14, r8] of s7.headers.entries()) "content-encoding" !== t14 && "content-length" !== t14 && ("set-cookie" !== t14 ? e5.node.res.setHeader(t14, r8) : a9.push(...splitCookiesString(r8)));
    a9.length > 0 && e5.node.res.setHeader("set-cookie", a9.map((e6) => (r7.cookieDomainRewrite && (e6 = rewriteCookieProperty(e6, r7.cookieDomainRewrite, "domain")), r7.cookiePathRewrite && (e6 = rewriteCookieProperty(e6, r7.cookiePathRewrite, "path")), e6)));
    r7.onResponse && await r7.onResponse(e5, s7);
    if (void 0 !== s7._data) return s7._data;
    if (e5.handled) return;
    if (false === r7.sendStream) {
      const t14 = new Uint8Array(await s7.arrayBuffer());
      return e5.node.res.end(t14);
    }
    if (s7.body) for await (const t14 of s7.body) e5.node.res.write(t14);
    return e5.node.res.end();
  })(e4, t12, { ...r6, fetchOptions: { method: c4, body: s6, duplex: a8, ...r6.fetchOptions, headers: u5 } });
}
function getProxyRequestHeaders(e4, t12) {
  const r6 = /* @__PURE__ */ Object.create(null), s6 = getRequestHeaders(e4);
  for (const e5 in s6) (!nr3.has(e5) || "host" === e5 && t12?.host) && (r6[e5] = s6[e5]);
  return r6;
}
function fetchWithEvent(e4, t12, r6, s6) {
  return _getFetch(s6?.fetch)(t12, { ...r6, context: r6?.context || e4.context, headers: { ...getProxyRequestHeaders(e4, { host: "string" == typeof t12 && t12.startsWith("/") }), ...r6?.headers } });
}
function _getFetch(e4) {
  if (e4) return e4;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e4, t12, r6) {
  const s6 = "string" == typeof t12 ? { "*": t12 } : t12;
  return e4.replace(new RegExp(`(;\\s*${r6}=)([^;]+)`, "gi"), (e5, t13, r7) => {
    let a8;
    if (r7 in s6) a8 = s6[r7];
    else {
      if (!("*" in s6)) return e5;
      a8 = s6["*"];
    }
    return a8 ? t13 + a8 : "";
  });
}
function isEvent(e4) {
  return hasProp2(e4, "__is_event__");
}
function createEvent(e4, t12) {
  return new H3Event(e4, t12);
}
function defineEventHandler(e4) {
  if ("function" == typeof e4) return e4.__is_handler__ = true, e4;
  const t12 = { onRequest: _normalizeArray(e4.onRequest), onBeforeResponse: _normalizeArray(e4.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((r6) => (async function(e5, t13, r7) {
    if (r7.onRequest) {
      for (const t14 of r7.onRequest) if (await t14(e5), e5.handled) return;
    }
    const s6 = await t13(e5), a8 = { body: s6 };
    if (r7.onBeforeResponse) for (const t14 of r7.onBeforeResponse) await t14(e5, a8);
    return a8.body;
  })(r6, e4.handler, t12), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e4.handler.__resolve__, _handler.__websocket__ = e4.websocket, _handler;
}
function _normalizeArray(e4) {
  return e4 ? Array.isArray(e4) ? e4 : [e4] : void 0;
}
function toEventHandler(e4, t12, r6) {
  return e4;
}
function createApp2(e4 = {}) {
  const t12 = [], r6 = (function(e5, t13) {
    const r7 = t13.debug ? 2 : void 0;
    return ar3(async (s7) => {
      s7.node.req.originalUrl = s7.node.req.originalUrl || s7.node.req.url || "/";
      const a9 = s7.node.req.url || "/", c5 = (function(e6) {
        const t14 = e6.indexOf("?"), r8 = -1 === t14 ? e6 : e6.slice(0, t14), s8 = -1 === t14 ? "" : e6.slice(t14);
        return (r8.includes("%25") ? decodePath(r8.replace(/%25/g, "%2525")) : decodePath(r8)) + s8;
      })(s7._path || a9);
      s7._path = c5;
      const u5 = c5 !== a9;
      let d5;
      t13.onRequest && await t13.onRequest(s7);
      for (const h5 of e5) {
        if (h5.route.length > 1) {
          if (!c5.startsWith(h5.route)) continue;
          d5 = c5.slice(h5.route.length) || "/";
        } else d5 = c5;
        if (h5.match && !h5.match(d5, s7)) continue;
        s7._path = d5, s7.node.req.url = u5 ? h5.route.length > 1 ? a9.slice(h5.route.length) || "/" : a9 : d5;
        const e6 = await h5.handler(s7), f4 = void 0 === e6 ? void 0 : await e6;
        if (void 0 !== f4) {
          const e7 = { body: f4 };
          return t13.onBeforeResponse && (s7._onBeforeResponseCalled = true, await t13.onBeforeResponse(s7, e7)), await handleHandlerResponse(s7, e7.body, r7), void (t13.onAfterResponse && (s7._onAfterResponseCalled = true, await t13.onAfterResponse(s7, e7)));
        }
        if (s7.handled) return void (t13.onAfterResponse && (s7._onAfterResponseCalled = true, await t13.onAfterResponse(s7, void 0)));
      }
      if (!s7.handled) throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${s7.path || "/"}.` });
      t13.onAfterResponse && (s7._onAfterResponseCalled = true, await t13.onAfterResponse(s7, void 0));
    });
  })(t12, e4), s6 = /* @__PURE__ */ (function(e5) {
    return async (t13) => {
      let r7;
      for (const s7 of e5) {
        if ("/" === s7.route && !s7.handler.__resolve__) continue;
        if (!t13.startsWith(s7.route)) continue;
        if (r7 = t13.slice(s7.route.length) || "/", s7.match && !s7.match(r7, void 0)) continue;
        let e6 = { route: s7.route, handler: s7.handler };
        if (e6.handler.__resolve__) {
          const t14 = await e6.handler.__resolve__(r7);
          if (!t14) continue;
          e6 = { ...e6, ...t14, route: joinURL(e6.route || "/", t14.route || "/") };
        }
        return e6;
      }
    };
  })(t12);
  r6.__resolve__ = s6;
  const a8 = /* @__PURE__ */ (function(e5) {
    let t13;
    return () => (t13 || (t13 = e5()), t13);
  })(() => {
    return t13 = s6, { ...e4.websocket, async resolve(e5) {
      const r7 = e5.request?.url || e5.url || "/", { pathname: s7 } = "string" == typeof r7 ? parseURL(r7) : r7, a9 = await t13(s7);
      return a9?.handler?.__websocket__ || {};
    } };
    var t13;
  }), c4 = { use: /* @__PURE__ */ __name((e5, t13, r7) => use(c4, e5, t13, r7), "use"), resolve: s6, handler: r6, stack: t12, options: e4, get websocket() {
    return a8();
  } };
  return c4;
}
function use(e4, t12, r6, s6) {
  if (Array.isArray(t12)) for (const a8 of t12) use(e4, a8, r6, s6);
  else if (Array.isArray(r6)) for (const a8 of r6) use(e4, t12, a8, s6);
  else "string" == typeof t12 ? e4.stack.push(normalizeLayer({ ...s6, route: t12, handler: r6 })) : "function" == typeof t12 ? e4.stack.push(normalizeLayer({ ...r6, handler: t12 })) : e4.stack.push(normalizeLayer({ ...t12 }));
  return e4;
}
function normalizeLayer(e4) {
  let t12 = e4.handler;
  return t12.handler && (t12 = t12.handler), e4.lazy ? t12 = lazyEventHandler(t12) : (function(e5) {
    return hasProp2(e5, "__is_handler__");
  })(t12) || (t12 = toEventHandler(t12, 0, e4.route)), { route: withoutTrailingSlash(e4.route), match: e4.match, handler: t12 };
}
function handleHandlerResponse(e4, t12, r6) {
  if (null === t12) return (function(e5, t13) {
    if (e5.handled) return;
    t13 || 200 === e5.node.res.statusCode || (t13 = e5.node.res.statusCode);
    const r7 = sanitizeStatusCode(t13, 204);
    204 === r7 && e5.node.res.removeHeader("content-length"), e5.node.res.writeHead(r7), e5.node.res.end();
  })(e4);
  if (t12) {
    if (a8 = t12, "undefined" != typeof Response && a8 instanceof Response) return sendWebResponse(e4, t12);
    if ((function(e5) {
      if (!e5 || "object" != typeof e5) return false;
      if ("function" == typeof e5.pipe) {
        if ("function" == typeof e5._read) return true;
        if ("function" == typeof e5.abort) return true;
      }
      return "function" == typeof e5.pipeTo;
    })(t12)) return sendStream(e4, t12);
    if (t12.buffer) return send2(e4, t12);
    if (t12.arrayBuffer && "function" == typeof t12.arrayBuffer) return t12.arrayBuffer().then((r7) => send2(e4, s5.from(r7), t12.type));
    if (t12 instanceof Error) throw createError(t12);
    if ("function" == typeof t12.end) return true;
  }
  var a8;
  const c4 = typeof t12;
  if ("string" === c4) return send2(e4, t12, er3.html);
  if ("object" === c4 || "boolean" === c4 || "number" === c4) return send2(e4, JSON.stringify(t12, void 0, r6), er3.json);
  if ("bigint" === c4) return send2(e4, t12.toString(), er3.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${c4} as response.` });
}
function toNodeListener(e4) {
  return async function(t12, r6) {
    const s6 = createEvent(t12, r6);
    try {
      await e4.handler(s6);
    } catch (t13) {
      const r7 = createError(t13);
      if (isError(t13) || (r7.unhandled = true), setResponseStatus(s6, r7.statusCode, r7.statusMessage), e4.options.onError && await e4.options.onError(r7, s6), s6.handled) return;
      (r7.unhandled || r7.fatal) && console.error("[h3]", r7.fatal ? "[fatal]" : "[unhandled]", r7), e4.options.onBeforeResponse && !s6._onBeforeResponseCalled && await e4.options.onBeforeResponse(s6, { body: r7 }), await (function(e5, t14, r8) {
        if (e5.handled) return;
        const s7 = isError(t14) ? t14 : createError(t14), a8 = { statusCode: s7.statusCode, statusMessage: s7.statusMessage, stack: [], data: s7.data };
        if (r8 && (a8.stack = (s7.stack || "").split("\n").map((e6) => e6.trim())), e5.handled) return;
        setResponseStatus(e5, Number.parseInt(s7.statusCode), s7.statusMessage), e5.node.res.setHeader("content-type", er3.json), e5.node.res.end(JSON.stringify(a8, void 0, 2));
      })(s6, r7, !!e4.options.debug), e4.options.onAfterResponse && !s6._onAfterResponseCalled && await e4.options.onAfterResponse(s6, { body: r7 });
    }
  };
}
function flatHooks2(e4, t12 = {}, r6) {
  for (const s6 in e4) {
    const a8 = e4[s6], c4 = r6 ? `${r6}:${s6}` : s6;
    "object" == typeof a8 && null !== a8 ? flatHooks2(a8, t12, c4) : "function" == typeof a8 && (t12[c4] = a8);
  }
  return t12;
}
function serialTaskCaller2(e4, t12) {
  const r6 = t12.shift(), s6 = ur3(r6);
  return e4.reduce((e5, r7) => e5.then(() => s6.run(() => r7(...t12))), Promise.resolve());
}
function parallelTaskCaller2(e4, t12) {
  const r6 = t12.shift(), s6 = ur3(r6);
  return Promise.all(e4.map((e5) => s6.run(() => e5(...t12))));
}
function callEachWith2(e4, t12) {
  for (const r6 of [...e4]) r6(t12);
}
function isPayloadMethod(e4 = "GET") {
  return dr3.has(e4.toUpperCase());
}
function resolveFetchOptions(e4, t12, r6, s6) {
  const a8 = (function(e5, t13, r7) {
    if (!t13) return new r7(e5);
    const s7 = new r7(t13);
    if (e5) for (const [t14, a9] of Symbol.iterator in e5 || Array.isArray(e5) ? e5 : new r7(e5)) s7.set(t14, a9);
    return s7;
  })(t12?.headers ?? e4?.headers, r6?.headers, s6);
  let c4;
  return (r6?.query || r6?.params || t12?.params || t12?.query) && (c4 = { ...r6?.params, ...r6?.query, ...t12?.params, ...t12?.query }), { ...r6, ...t12, query: c4, params: c4, headers: a8 };
}
async function callHooks2(e4, t12) {
  if (t12) if (Array.isArray(t12)) for (const r6 of t12) await r6(e4);
  else await t12(e4);
}
function createFetch(e4 = {}) {
  const { fetch: t12 = globalThis.fetch, Headers: r6 = globalThis.Headers, AbortController: s6 = globalThis.AbortController } = e4;
  async function onError(e5) {
    const t13 = e5.error && "AbortError" === e5.error.name && !e5.options.timeout || false;
    if (false !== e5.options.retry && !t13) {
      let t14;
      t14 = "number" == typeof e5.options.retry ? e5.options.retry : isPayloadMethod(e5.options.method) ? 0 : 1;
      const r8 = e5.response && e5.response.status || 500;
      if (t14 > 0 && (Array.isArray(e5.options.retryStatusCodes) ? e5.options.retryStatusCodes.includes(r8) : fr3.has(r8))) {
        const r9 = "function" == typeof e5.options.retryDelay ? e5.options.retryDelay(e5) : e5.options.retryDelay || 0;
        return r9 > 0 && await new Promise((e6) => setTimeout(e6, r9)), $fetchRaw(e5.request, { ...e5.options, retry: t14 - 1 });
      }
    }
    const r7 = (function(e6) {
      const t14 = e6.error?.message || e6.error?.toString() || "", r8 = e6.request?.method || e6.options?.method || "GET", s7 = e6.request?.url || String(e6.request) || "/", a8 = `[${r8}] ${JSON.stringify(s7)}`, c4 = e6.response ? `${e6.response.status} ${e6.response.statusText}` : "<no response>", u5 = new FetchError(`${a8}: ${c4}${t14 ? ` ${t14}` : ""}`, e6.error ? { cause: e6.error } : void 0);
      for (const t15 of ["request", "options", "response"]) Object.defineProperty(u5, t15, { get: /* @__PURE__ */ __name(() => e6[t15], "get") });
      for (const [t15, r9] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(u5, t15, { get: /* @__PURE__ */ __name(() => e6.response && e6.response[r9], "get") });
      return u5;
    })(e5);
    throw Error.captureStackTrace && Error.captureStackTrace(r7, $fetchRaw), r7;
  }
  __name(onError, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a8, c4 = {}) {
    const u5 = { request: a8, options: resolveFetchOptions(a8, c4, e4.defaults, r6), response: void 0, error: void 0 };
    if (u5.options.method && (u5.options.method = u5.options.method.toUpperCase()), u5.options.onRequest && (await callHooks2(u5, u5.options.onRequest), u5.options.headers instanceof r6 || (u5.options.headers = new r6(u5.options.headers || {}))), "string" == typeof u5.request && (u5.options.baseURL && (u5.request = (function(e5, t13) {
      if (isEmptyURL(t13) || hasProtocol(e5)) return e5;
      const r7 = withoutTrailingSlash(t13);
      if (e5.startsWith(r7)) {
        const t14 = e5[r7.length];
        if (!t14 || "/" === t14 || "?" === t14) return e5;
      }
      return joinURL(r7, e5);
    })(u5.request, u5.options.baseURL)), u5.options.query && (u5.request = withQuery(u5.request, u5.options.query), delete u5.options.query), "query" in u5.options && delete u5.options.query, "params" in u5.options && delete u5.options.params), u5.options.body && isPayloadMethod(u5.options.method)) if ((function(e5) {
      if (void 0 === e5) return false;
      const t13 = typeof e5;
      return "string" === t13 || "number" === t13 || "boolean" === t13 || null === t13 || "object" === t13 && (!!Array.isArray(e5) || !e5.buffer && !(e5 instanceof FormData || e5 instanceof URLSearchParams) && (e5.constructor && "Object" === e5.constructor.name || "function" == typeof e5.toJSON));
    })(u5.options.body)) {
      const e5 = u5.options.headers.get("content-type");
      "string" != typeof u5.options.body && (u5.options.body = "application/x-www-form-urlencoded" === e5 ? new URLSearchParams(u5.options.body).toString() : JSON.stringify(u5.options.body)), e5 || u5.options.headers.set("content-type", "application/json"), u5.options.headers.has("accept") || u5.options.headers.set("accept", "application/json");
    } else ("pipeTo" in u5.options.body && "function" == typeof u5.options.body.pipeTo || "function" == typeof u5.options.body.pipe) && ("duplex" in u5.options || (u5.options.duplex = "half"));
    let d5;
    if (!u5.options.signal && u5.options.timeout) {
      const e5 = new s6();
      d5 = setTimeout(() => {
        const t13 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t13.name = "TimeoutError", t13.code = 23, e5.abort(t13);
      }, u5.options.timeout), u5.options.signal = e5.signal;
    }
    try {
      u5.response = await t12(u5.request, u5.options);
    } catch (e5) {
      return u5.error = e5, u5.options.onRequestError && await callHooks2(u5, u5.options.onRequestError), await onError(u5);
    } finally {
      d5 && clearTimeout(d5);
    }
    if ((u5.response.body || u5.response._bodyInit) && !mr3.has(u5.response.status) && "HEAD" !== u5.options.method) {
      const e5 = (u5.options.parseResponse ? "json" : u5.options.responseType) || (function(e6 = "") {
        if (!e6) return "json";
        const t13 = e6.split(";").shift() || "";
        return pr3.test(t13) ? "json" : "text/event-stream" === t13 ? "stream" : hr3.has(t13) || t13.startsWith("text/") ? "text" : "blob";
      })(u5.response.headers.get("content-type") || "");
      switch (e5) {
        case "json": {
          const e6 = await u5.response.text(), t13 = u5.options.parseResponse || destr;
          u5.response._data = t13(e6);
          break;
        }
        case "stream":
          u5.response._data = u5.response.body || u5.response._bodyInit;
          break;
        default:
          u5.response._data = await u5.response[e5]();
      }
    }
    return u5.options.onResponse && await callHooks2(u5, u5.options.onResponse), !u5.options.ignoreResponseError && u5.response.status >= 400 && u5.response.status < 600 ? (u5.options.onResponseError && await callHooks2(u5, u5.options.onResponseError), await onError(u5)) : u5.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e5, t13) {
    return (await $fetchRaw(e5, t13))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e5) => t12(...e5), $fetch.create = (t13 = {}, r7 = {}) => createFetch({ ...e4, ...r7, defaults: { ...e4.defaults, ...r7.defaults, ...t13 } }), $fetch;
}
function asyncCall(e4, ...t12) {
  try {
    return (r6 = e4(...t12)) && "function" == typeof r6.then ? r6 : Promise.resolve(r6);
  } catch (e5) {
    return Promise.reject(e5);
  }
  var r6;
}
function stringify2(e4) {
  if (/* @__PURE__ */ (function(e5) {
    const t12 = typeof e5;
    return null === e5 || "object" !== t12 && "function" !== t12;
  })(e4)) return String(e4);
  if ((function(e5) {
    const t12 = Object.getPrototypeOf(e5);
    return !t12 || t12.isPrototypeOf(Object);
  })(e4) || Array.isArray(e4)) return JSON.stringify(e4);
  if ("function" == typeof e4.toJSON) return stringify2(e4.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e4) {
  return "string" == typeof e4 ? e4 : br3 + (function(e5) {
    if (globalThis.Buffer) return s5.from(e5).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...e5));
  })(e4);
}
function deserializeRaw(e4) {
  return "string" != typeof e4 ? e4 : e4.startsWith(br3) ? (function(e5) {
    if (globalThis.Buffer) return s5.from(e5, "base64");
    return Uint8Array.from(globalThis.atob(e5), (e6) => e6.codePointAt(0));
  })(e4.slice(7)) : e4;
}
function normalizeKey$1(e4) {
  return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e4) {
  return normalizeKey$1(e4.join(":"));
}
function normalizeBaseKey(e4) {
  return (e4 = normalizeKey$1(e4)) ? e4 + ":" : "";
}
function watch2(e4, t12, r6) {
  return e4.watch ? e4.watch((e5, s6) => t12(e5, r6 + s6)) : () => {
  };
}
async function dispose(e4) {
  "function" == typeof e4.dispose && await asyncCall(e4.dispose);
}
function useStorage(e4 = "") {
  return e4 ? (function(e5, t12) {
    if (!(t12 = normalizeBaseKey(t12))) return e5;
    const r6 = { ...e5 };
    for (const s6 of vr3) r6[s6] = (r7 = "", ...a8) => e5[s6](t12 + r7, ...a8);
    return r6.getKeys = (r7 = "", ...s6) => e5.getKeys(t12 + r7, ...s6).then((e6) => e6.map((e7) => e7.slice(t12.length))), r6.keys = r6.getKeys, r6.getItems = async (r7, s6) => {
      const a8 = r7.map((e6) => "string" == typeof e6 ? t12 + e6 : { ...e6, key: t12 + e6.key });
      return (await e5.getItems(a8, s6)).map((e6) => ({ key: e6.key.slice(t12.length), value: e6.value }));
    }, r6.setItems = async (r7, s6) => {
      const a8 = r7.map((e6) => ({ key: t12 + e6.key, value: e6.value, options: e6.options }));
      return e5.setItems(a8, s6);
    }, r6;
  })(kr3, e4) : kr3;
}
function hash(e4) {
  return (t12 = "string" == typeof e4 ? e4 : (function(e5) {
    const t13 = new jr3();
    return t13.dispatch(e5), t13.buff;
  })(e4), new Sr3().finalize(t12).toBase64()).replace(/[-_]/g, "").slice(0, 10);
  var t12;
}
function defineCachedFunction(e4, t12 = {}) {
  t12 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t12 };
  const r6 = {}, s6 = t12.group || "nitro/functions", a8 = t12.name || e4.name || "_", c4 = t12.integrity || hash([e4, t12]), u5 = t12.validate || ((e5) => void 0 !== e5.value);
  return async (...d5) => {
    if (await t12.shouldBypassCache?.(...d5)) return e4(...d5);
    const h5 = await (t12.getKey || getKey)(...d5), f4 = await t12.shouldInvalidateCache?.(...d5), m5 = await (async function(e5, d6, h6, f5) {
      const m6 = [t12.base, s6, a8, e5 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let g6 = await useStorage().getItem(m6).catch((e6) => {
        console.error("[cache] Cache read error.", e6), useNitroApp().captureError(e6, { event: f5, tags: ["cache"] });
      }) || {};
      if ("object" != typeof g6) {
        g6 = {};
        const e6 = new Error("Malformed data read from cache.");
        console.error("[cache]", e6), useNitroApp().captureError(e6, { event: f5, tags: ["cache"] });
      }
      const _3 = 1e3 * (t12.maxAge ?? 0);
      _3 && (g6.expires = Date.now() + _3);
      const x5 = h6 || g6.integrity !== c4 || _3 && Date.now() - (g6.mtime || 0) > _3 || false === u5(g6), R3 = x5 ? (async () => {
        const s7 = r6[e5];
        s7 || (void 0 !== g6.value && (t12.staleMaxAge || 0) >= 0 && false === t12.swr && (g6.value = void 0, g6.integrity = void 0, g6.mtime = void 0, g6.expires = void 0), r6[e5] = Promise.resolve(d6()));
        try {
          g6.value = await r6[e5];
        } catch (t13) {
          throw s7 || delete r6[e5], t13;
        }
        if (!s7 && (g6.mtime = Date.now(), g6.integrity = c4, delete r6[e5], false !== u5(g6))) {
          let e6;
          t12.maxAge && !t12.swr && (e6 = { ttl: t12.maxAge });
          const r7 = useStorage().setItem(m6, g6, e6).catch((e7) => {
            console.error("[cache] Cache write error.", e7), useNitroApp().captureError(e7, { event: f5, tags: ["cache"] });
          });
          f5?.waitUntil && f5.waitUntil(r7);
        }
      })() : Promise.resolve();
      return void 0 === g6.value ? await R3 : x5 && f5 && f5.waitUntil && f5.waitUntil(R3), t12.swr && false !== u5(g6) ? (R3.catch((e6) => {
        console.error("[cache] SWR handler error.", e6), useNitroApp().captureError(e6, { event: f5, tags: ["cache"] });
      }), g6) : R3.then(() => g6);
    })(h5, () => e4(...d5), f4, d5[0] && isEvent(d5[0]) ? d5[0] : void 0);
    let g5 = m5.value;
    return t12.transform && (g5 = await t12.transform(m5, ...d5) || g5), g5;
  };
}
function getKey(...e4) {
  return e4.length > 0 ? hash(e4) : "";
}
function escapeKey(e4) {
  return String(e4).replace(/\W/g, "");
}
function cloneWithProxy(e4, t12) {
  return new Proxy(e4, { get: /* @__PURE__ */ __name((e5, r6, s6) => r6 in t12 ? t12[r6] : Reflect.get(e5, r6, s6), "get"), set: /* @__PURE__ */ __name((e5, r6, s6, a8) => r6 in t12 ? (t12[r6] = s6, true) : Reflect.set(e5, r6, s6, a8), "set") });
}
function klona(e4) {
  if ("object" != typeof e4) return e4;
  var t12, r6, s6 = Object.prototype.toString.call(e4);
  if ("[object Object]" === s6) {
    if (e4.constructor !== Object && "function" == typeof e4.constructor) for (t12 in r6 = new e4.constructor(), e4) e4.hasOwnProperty(t12) && r6[t12] !== e4[t12] && (r6[t12] = klona(e4[t12]));
    else for (t12 in r6 = {}, e4) "__proto__" === t12 ? Object.defineProperty(r6, t12, { value: klona(e4[t12]), configurable: true, enumerable: true, writable: true }) : r6[t12] = klona(e4[t12]);
    return r6;
  }
  if ("[object Array]" === s6) {
    for (t12 = e4.length, r6 = Array(t12); t12--; ) r6[t12] = klona(e4[t12]);
    return r6;
  }
  return "[object Set]" === s6 ? (r6 = /* @__PURE__ */ new Set(), e4.forEach(function(e5) {
    r6.add(klona(e5));
  }), r6) : "[object Map]" === s6 ? (r6 = /* @__PURE__ */ new Map(), e4.forEach(function(e5, t13) {
    r6.set(klona(t13), klona(e5));
  }), r6) : "[object Date]" === s6 ? /* @__PURE__ */ new Date(+e4) : "[object RegExp]" === s6 ? ((r6 = new RegExp(e4.source, e4.flags)).lastIndex = e4.lastIndex, r6) : "[object DataView]" === s6 ? new e4.constructor(klona(e4.buffer)) : "[object ArrayBuffer]" === s6 ? e4.slice(0) : "Array]" === s6.slice(-6) ? new e4.constructor(e4) : e4;
}
function isUppercase(e4 = "") {
  if (!Pr3.test(e4)) return e4 !== e4.toLowerCase();
}
function kebabCase(e4, t12) {
  return e4 ? (Array.isArray(e4) ? e4 : (function(e5) {
    const t13 = Ir3, r6 = [];
    if (!e5 || "string" != typeof e5) return r6;
    let s6, a8, c4 = "";
    for (const u5 of e5) {
      const e6 = t13.includes(u5);
      if (true === e6) {
        r6.push(c4), c4 = "", s6 = void 0;
        continue;
      }
      const d5 = isUppercase(u5);
      if (false === a8) {
        if (false === s6 && true === d5) {
          r6.push(c4), c4 = u5, s6 = d5;
          continue;
        }
        if (true === s6 && false === d5 && c4.length > 1) {
          const e7 = c4.at(-1);
          r6.push(c4.slice(0, Math.max(0, c4.length - 1))), c4 = e7 + u5, s6 = d5;
          continue;
        }
      }
      c4 += u5, s6 = d5, a8 = e6;
    }
    return r6.push(c4), r6;
  })(e4)).map((e5) => e5.toLowerCase()).join(t12) : "";
}
function getEnv(e4, t12) {
  const r6 = (s6 = e4, kebabCase(s6 || "", "_")).toUpperCase();
  var s6;
  return destr(g3.env[t12.prefix + r6] ?? g3.env[t12.altPrefix + r6]);
}
function _isObject(e4) {
  return "object" == typeof e4 && !Array.isArray(e4);
}
function applyEnv(e4, t12, r6 = "") {
  for (const s6 in e4) {
    const a8 = r6 ? `${r6}_${s6}` : s6, c4 = getEnv(a8, t12);
    _isObject(e4[s6]) ? _isObject(c4) ? (e4[s6] = { ...e4[s6], ...c4 }, applyEnv(e4[s6], t12, a8)) : void 0 === c4 ? applyEnv(e4[s6], t12, a8) : e4[s6] = c4 ?? e4[s6] : e4[s6] = c4 ?? e4[s6], t12.envExpansion && "string" == typeof e4[s6] && (e4[s6] = _expandFromEnv(e4[s6]));
  }
  return e4;
}
function _expandFromEnv(e4) {
  return e4.replace(Mr3, (e5, t12) => g3.env[t12] || e5);
}
function useRuntimeConfig2(e4) {
  if (!e4) return Br3;
  if (e4.context.nitro.runtimeConfig) return e4.context.nitro.runtimeConfig;
  const t12 = klona(Or3);
  return applyEnv(t12, Nr3), e4.context.nitro.runtimeConfig = t12, t12;
}
function _deepFreeze(e4) {
  const t12 = Object.getOwnPropertyNames(e4);
  for (const r6 of t12) {
    const t13 = e4[r6];
    t13 && "object" == typeof t13 && _deepFreeze(t13);
  }
  return Object.freeze(e4);
}
function isPathInScope(e4, t12) {
  let r6;
  try {
    const t13 = e4.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    r6 = new URL(t13, "http://_").pathname;
  } catch {
    return false;
  }
  return !t12 || r6 === t12 || r6.startsWith(t12 + "/");
}
function createRouteRulesHandler(e4) {
  return ar3((t12) => {
    const r6 = getRouteRules(t12);
    if (r6.headers && sr3(t12, r6.headers), r6.redirect) {
      let e5 = r6.redirect.to;
      if (e5.endsWith("/**")) {
        let s6 = t12.path;
        const a8 = r6.redirect._redirectStripBase;
        if (a8) {
          if (!isPathInScope(t12.path.split("?")[0], a8)) throw createError({ statusCode: 400 });
          s6 = withoutBase(s6, a8);
        } else s6.startsWith("//") && (s6 = s6.replace(/^\/+/, "/"));
        e5 = joinURL(e5.slice(0, -3), s6);
      } else if (t12.path.includes("?")) {
        e5 = withQuery(e5, getQuery$1(t12.path));
      }
      return (function(e6, t13, r7 = 302) {
        return e6.node.res.statusCode = sanitizeStatusCode(r7, e6.node.res.statusCode), e6.node.res.setHeader("location", t13), send2(e6, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t13.replace(/"/g, "%22")}"></head></html>`, er3.html);
      })(t12, e5, r6.redirect.statusCode);
    }
    if (r6.proxy) {
      let s6 = r6.proxy.to;
      if (s6.endsWith("/**")) {
        let e5 = t12.path;
        const a8 = r6.proxy._proxyStripBase;
        if (a8) {
          if (!isPathInScope(t12.path.split("?")[0], a8)) throw createError({ statusCode: 400 });
          e5 = withoutBase(e5, a8);
        } else e5.startsWith("//") && (e5 = e5.replace(/^\/+/, "/"));
        s6 = joinURL(s6.slice(0, -3), e5);
      } else if (t12.path.includes("?")) {
        s6 = withQuery(s6, getQuery$1(t12.path));
      }
      return proxyRequest(t12, s6, { fetch: e4.localFetch, ...r6.proxy });
    }
  });
}
function getRouteRules(e4) {
  return e4.context._nitro = e4.context._nitro || {}, e4.context._nitro.routeRules || (e4.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e4.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e4.context._nitro.routeRules;
}
function getRouteRulesForPath(e4) {
  return Ft({}, ...Wr3.matchAll(e4).reverse());
}
function joinHeaders(e4) {
  return Array.isArray(e4) ? e4.join(", ") : String(e4);
}
function normalizeCookieHeader(e4 = "") {
  return splitCookiesString(joinHeaders(e4));
}
function normalizeCookieHeaders(e4) {
  const t12 = new Headers();
  for (const [r6, s6] of e4) if ("set-cookie" === r6) for (const e5 of normalizeCookieHeader(s6)) t12.append("set-cookie", e5);
  else t12.set(r6, joinHeaders(s6));
  return t12;
}
function hasReqHeader(e4, t12, r6) {
  const s6 = (function(e5, t13) {
    return getRequestHeaders(e5)[t13.toLowerCase()];
  })(e4, t12);
  return !(!s6 || "string" != typeof s6 || !s6.toLowerCase().includes(r6));
}
function defaultHandler(e4, t12, r6) {
  const s6 = e4.unhandled || e4.fatal, a8 = e4.statusCode || 500, c4 = e4.statusMessage || "Server Error", u5 = (function(e5, t13 = {}) {
    const r7 = (function(e6, t14 = {}) {
      if (t14.xForwardedHost) {
        const t15 = e6.node.req.headers["x-forwarded-host"], r8 = (t15 || "").split(",").shift()?.trim();
        if (r8) return r8;
      }
      return e6.node.req.headers.host || "localhost";
    })(e5, t13), s7 = (function(e6, t14 = {}) {
      return false !== t14.xForwardedProto && "https" === e6.node.req.headers["x-forwarded-proto"] || e6.node.req.connection?.encrypted ? "https" : "http";
    })(e5, t13), a9 = (e5.node.req.originalUrl || e5.path).replace(/^[/\\]+/g, "/");
    return new URL(a9, `${s7}://${r7}`);
  })(t12, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a8) {
    const e5 = "/";
    if (/^\/[^/]/.test(e5) && !u5.pathname.startsWith(e5)) {
      return { status: 302, statusText: "Found", headers: { location: `${e5}${u5.pathname.slice(1)}${u5.search}` }, body: "Redirecting..." };
    }
  }
  if (s6 && !r6?.silent) {
    const r7 = [e4.unhandled && "[unhandled]", e4.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${r7} [${t12.method}] ${u5}
`, e4);
  }
  const d5 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t12, a8, c4), 404 !== a8 && (function(e5, t13) {
    return e5.node.res.getHeader(t13);
  })(t12, "cache-control") || (d5["cache-control"] = "no-cache");
  return { status: a8, statusText: c4, headers: d5, body: { error: true, url: u5.href, statusCode: a8, statusMessage: c4, message: s6 ? "Server Error" : e4.message, data: s6 ? void 0 : e4.data } };
}
function useNitroApp() {
  return Jr3;
}
function defineRenderHandler(e4) {
  const t12 = useRuntimeConfig2();
  return ar3(async (r6) => {
    const s6 = useNitroApp(), a8 = { event: r6, render: e4, response: void 0 };
    if (await s6.hooks.callHook("render:before", a8), !a8.response) {
      if (r6.path === `${t12.app.baseURL}favicon.ico`) return setResponseHeader(r6, "Content-Type", "image/x-icon"), send2(r6, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      if (a8.response = await a8.render(r6), !a8.response) {
        const e5 = getResponseStatus(r6);
        return setResponseStatus(r6, 200 === e5 ? 500 : e5), send2(r6, "No response returned from render handler: " + r6.path);
      }
    }
    return await s6.hooks.callHook("render:response", a8.response, a8), a8.response.headers && setResponseHeaders(r6, a8.response.headers), (a8.response.statusCode || a8.response.statusMessage) && setResponseStatus(r6, a8.response.statusCode, a8.response.statusMessage), a8.response.body;
  });
}
var ReadStream2, WriteStream2, u4, Process2, d4, h4, _getEnv, f3, m4, g3, _2, x4, R2, k3, C2, E2, S2, T2, j2, H, P2, I2, M2, O2, N2, B, q, U2, z2, L2, $2, W, D2, F2, K, Q, J, Z, V, G, X, Y, ee, te, re, se, oe, ne, ae, ie, ce, ue, le, de, he2, pe, fe3, me3, ge3, ye3, we3, _e3, be3, ve3, xe3, Re3, ke3, Ce3, Ee3, Ae3, Se3, Te3, je3, He3, Pe3, Ie3, Me3, Oe3, Ne3, Be3, qe3, Ue3, ze3, Le3, $e3, We3, De3, Fe3, Ke3, Qe3, Je3, Ze3, Ve3, Ge3, Xe3, Ye3, et3, tt3, rt3, st3, ot3, nt3, at3, it3, ct3, ut3, lt3, dt3, ht3, pt3, ft3, mt3, gt3, yt3, wt3, _t3, bt3, vt3, xt3, Rt3, kt3, Ct3, Et3, At3, St3, Tt3, jt3, Ht3, Pt3, It3, Mt3, Ot3, Nt3, Bt3, qt3, Ut3, zt3, Lt3, $t3, Wt3, Dt3, Ft, Kt3, i3, l4, Qt3, Jt3, A2, y2, w4, Zt3, Vt3, H3Error, Gt3, Xt3, Yt3, er3, tr3, rr3, sr3, or3, nr3, H3Event, ar3, lazyEventHandler, ir3, cr3, ur3, Hookable, lr, FetchError, dr3, hr3, pr3, fr3, mr3, gr3, yr3, wr3, _r3, br3, vr3, memory, xr3, normalizeKey2, Rr3, kr3, Cr3, Er3, Ar3, Sr3, Tr3, jr3, cachedEventHandler, Hr3, Pr3, Ir3, Mr3, Or3, Nr3, Br3, qr3, Ur3, zr3, Lr3, $r3, Wr3, Dr3, Fr3, Kr3, _lazy_WkuB0F, Qr2, Jr3, Zr2, Vr3, Agent, Gr, Xr3;
var init_nitro = __esm({
  ".output/server/chunks/nitro/nitro.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_process2();
    "global" in globalThis || (globalThis.global = globalThis);
    ReadStream2 = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      setRawMode(e4) {
        return this.isRaw = e4, this;
      }
    };
    WriteStream2 = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      clearLine(e4, t12) {
        return t12 && t12(), false;
      }
      clearScreenDown(e4) {
        return e4 && e4(), false;
      }
      cursorTo(e4, t12, r6) {
        return r6 && "function" == typeof r6 && r6(), false;
      }
      moveCursor(e4, t12, r6) {
        return r6 && r6(), false;
      }
      getColorDepth(e4) {
        return 1;
      }
      hasColors(e4, t12) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e4, t12, r6) {
        e4 instanceof Uint8Array && (e4 = new TextDecoder().decode(e4));
        try {
          console.log(e4);
        } catch {
        }
        return r6 && "function" == typeof r6 && r6(), false;
      }
    };
    __name(createNotImplementedError2, "createNotImplementedError");
    __name(notImplemented2, "notImplemented");
    u4 = "22.14.0";
    Process2 = class _Process extends e3 {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(t12) {
        super(), this.env = t12.env, this.hrtime = t12.hrtime, this.nextTick = t12.nextTick;
        for (const t13 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(e3.prototype)]) {
          const e4 = this[t13];
          "function" == typeof e4 && (this[t13] = e4.bind(this));
        }
      }
      emitWarning(e4, t12, r6) {
        console.warn(`${r6 ? `[${r6}] ` : ""}${t12 ? `${t12}: ` : ""}${e4}`);
      }
      emit(...e4) {
        return super.emit(...e4);
      }
      listeners(e4) {
        return super.listeners(e4);
      }
      #e;
      #t;
      #r;
      get stdin() {
        return this.#e ??= new ReadStream2(0);
      }
      get stdout() {
        return this.#t ??= new WriteStream2(1);
      }
      get stderr() {
        return this.#r ??= new WriteStream2(2);
      }
      #s = "/";
      chdir(e4) {
        this.#s = e4;
      }
      cwd() {
        return this.#s;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${u4}`;
      }
      get versions() {
        return { node: u4 };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError2("process.umask");
      }
      getBuiltinModule() {
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError2("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError2("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError2("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError2("process.kill");
      }
      abort() {
        throw createNotImplementedError2("process.abort");
      }
      dlopen() {
        throw createNotImplementedError2("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError2("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError2("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError2("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError2("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError2("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError2("process.openStdin");
      }
      assert() {
        throw createNotImplementedError2("process.assert");
      }
      binding() {
        throw createNotImplementedError2("process.binding");
      }
      permission = { has: notImplemented2("process.permission.has") };
      report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: notImplemented2("process.report.getReport"), writeReport: notImplemented2("process.report.writeReport") };
      finalization = { register: notImplemented2("process.finalization.register"), unregister: notImplemented2("process.finalization.unregister"), registerBeforeExit: notImplemented2("process.finalization.registerBeforeExit") };
      memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    d4 = /* @__PURE__ */ Object.create(null);
    h4 = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e4) => globalThis.__env__ || h4?.env || (e4 ? d4 : globalThis), "_getEnv");
    f3 = new Proxy(d4, { get: /* @__PURE__ */ __name((e4, t12) => _getEnv()[t12] ?? d4[t12], "get"), has: /* @__PURE__ */ __name((e4, t12) => t12 in _getEnv() || t12 in d4, "has"), set: /* @__PURE__ */ __name((e4, t12, r6) => (_getEnv(true)[t12] = r6, true), "set"), deleteProperty: /* @__PURE__ */ __name((e4, t12) => (delete _getEnv(true)[t12], true), "deleteProperty"), ownKeys() {
      const e4 = _getEnv();
      return Object.keys(e4);
    }, getOwnPropertyDescriptor(e4, t12) {
      const r6 = _getEnv();
      if (t12 in r6) return { value: r6[t12], writable: true, enumerable: true, configurable: true };
    } });
    m4 = Object.assign(function(e4) {
      const t12 = Date.now(), r6 = Math.trunc(t12 / 1e3), s6 = t12 % 1e3 * 1e6;
      if (e4) {
        let t13 = r6 - e4[0], a8 = s6 - e4[0];
        return a8 < 0 && (t13 -= 1, a8 = 1e9 + a8), [t13, a8];
      }
      return [r6, s6];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") });
    globalThis.__env__ = r5;
    g3 = new Process2({ env: f3, hrtime: m4, nextTick: process_default.nextTick });
    for (const e4 of ["exit", "getBuiltinModule", "platform"]) e4 in process_default && (g3[e4] = process_default[e4]);
    process_default.features && Object.defineProperty(g3, "features", { get: /* @__PURE__ */ __name(() => process_default.features, "get") });
    ({ abort: _2, addListener: x4, allowedNodeEnvironmentFlags: R2, hasUncaughtExceptionCaptureCallback: k3, setUncaughtExceptionCaptureCallback: C2, loadEnvFile: E2, sourceMapsEnabled: S2, arch: T2, argv: j2, argv0: H, chdir: P2, config: I2, connected: M2, constrainedMemory: O2, availableMemory: N2, cpuUsage: B, cwd: q, debugPort: U2, dlopen: z2, disconnect: L2, emit: $2, emitWarning: W, env: D2, eventNames: F2, execArgv: K, execPath: Q, exit: J, finalization: Z, features: V, getBuiltinModule: G, getActiveResourcesInfo: X, getMaxListeners: Y, hrtime: ee, kill: te, listeners: re, listenerCount: se, memoryUsage: oe, nextTick: ne, on: ae, off: ie, once: ce, pid: ue, platform: le, ppid: de, prependListener: he2, prependOnceListener: pe, rawListeners: fe3, release: me3, removeAllListeners: ge3, removeListener: ye3, report: we3, resourceUsage: _e3, setMaxListeners: be3, setSourceMapsEnabled: ve3, stderr: xe3, stdin: Re3, stdout: ke3, title: Ce3, umask: Ee3, uptime: Ae3, version: Se3, versions: Te3, domain: je3, initgroups: He3, moduleLoadList: Pe3, reallyExit: Ie3, openStdin: Me3, assert: Oe3, binding: Ne3, send: Be3, exitCode: qe3, channel: Ue3, getegid: ze3, geteuid: Le3, getgid: $e3, getgroups: We3, getuid: De3, setegid: Fe3, seteuid: Ke3, setgid: Qe3, setgroups: Je3, setuid: Ze3, permission: Ve3, mainModule: Ge3, _events: Xe3, _eventsCount: Ye3, _exiting: et3, _maxListeners: tt3, _debugEnd: rt3, _debugProcess: st3, _fatalException: ot3, _getActiveHandles: nt3, _getActiveRequests: at3, _kill: it3, _preload_modules: ct3, _rawDebug: ut3, _startProfilerIdleNotifier: lt3, _stopProfilerIdleNotifier: dt3, _tickCallback: ht3, _disconnect: pt3, _handleQueue: ft3, _pendingMessage: mt3, _channel: gt3, _send: yt3, _linkedBinding: wt3 } = g3);
    _t3 = globalThis.process;
    globalThis.process = _t3 ? new Proxy(_t3, { get: /* @__PURE__ */ __name((e4, t12, r6) => Reflect.has(e4, t12) ? Reflect.get(e4, t12, r6) : Reflect.get(g3, t12, r6), "get") }) : g3, globalThis.Buffer || (globalThis.Buffer = s5), globalThis.setImmediate || (globalThis.setImmediate = a7), globalThis.clearImmediate || (globalThis.clearImmediate = c3);
    bt3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    vt3 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    xt3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    Rt3 = /#/g;
    kt3 = /&/g;
    Ct3 = /\//g;
    Et3 = /=/g;
    At3 = /\?/g;
    St3 = /\+/g;
    Tt3 = /%5e/gi;
    jt3 = /%60/gi;
    Ht3 = /%7c/gi;
    Pt3 = /%20/gi;
    It3 = /%2f/gi;
    Mt3 = /%252f/gi;
    __name(encode, "encode");
    __name(encodeQueryValue2, "encodeQueryValue");
    __name(encodeQueryKey2, "encodeQueryKey");
    __name(encodePath, "encodePath");
    __name(decode2, "decode");
    __name(decodePath, "decodePath");
    __name(decodeQueryKey, "decodeQueryKey");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery2, "stringifyQuery");
    Ot3 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Nt3 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Bt3 = /^([/\\]\s*){2,}[^/\\]/;
    qt3 = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    Ut3 = /\/$|\/\?|\/#/;
    zt3 = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(isScriptProtocol, "isScriptProtocol");
    __name(hasTrailingSlash, "hasTrailingSlash");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withLeadingSlash, "withLeadingSlash");
    __name(withoutBase, "withoutBase");
    __name(withQuery, "withQuery");
    __name(getQuery$1, "getQuery$1");
    __name(isEmptyURL, "isEmptyURL");
    __name(joinURL, "joinURL");
    __name(joinRelativeURL, "joinRelativeURL");
    Lt3 = /* @__PURE__ */ Symbol.for("ufo:protocolRelative");
    __name(parseURL, "parseURL");
    __name(parsePath, "parsePath");
    $t3 = 0;
    Wt3 = 1;
    Dt3 = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    __name(isPlainObject2, "isPlainObject");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    Ft = createDefu();
    Kt3 = createDefu((e4, t12, r6) => {
      if (void 0 !== e4[t12] && "function" == typeof r6) return e4[t12] = r6(e4[t12]), true;
    });
    __name(o6, "o");
    i3 = class _i extends e3 {
      static {
        __name(this, "i");
      }
      __unenv__ = {};
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e4, t12) {
        return new _i(t12);
      }
      constructor(e4) {
        super();
      }
      _read(e4) {
      }
      read(e4) {
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e4) {
        return this;
      }
      unshift(e4, t12) {
      }
      wrap(e4) {
        return this;
      }
      push(e4, t12) {
        return false;
      }
      _destroy(e4, t12) {
        this.removeAllListeners();
      }
      destroy(e4) {
        return this.destroyed = true, this._destroy(e4), this;
      }
      pipe(e4, t12) {
        return {};
      }
      compose(e4, t12) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o6("Readable.asyncIterator");
      }
      iterator(e4) {
        throw o6("Readable.iterator");
      }
      map(e4, t12) {
        throw o6("Readable.map");
      }
      filter(e4, t12) {
        throw o6("Readable.filter");
      }
      forEach(e4, t12) {
        throw o6("Readable.forEach");
      }
      reduce(e4, t12, r6) {
        throw o6("Readable.reduce");
      }
      find(e4, t12) {
        throw o6("Readable.find");
      }
      findIndex(e4, t12) {
        throw o6("Readable.findIndex");
      }
      some(e4, t12) {
        throw o6("Readable.some");
      }
      toArray(e4) {
        throw o6("Readable.toArray");
      }
      every(e4, t12) {
        throw o6("Readable.every");
      }
      flatMap(e4, t12) {
        throw o6("Readable.flatMap");
      }
      drop(e4, t12) {
        throw o6("Readable.drop");
      }
      take(e4, t12) {
        throw o6("Readable.take");
      }
      asIndexedPairs(e4) {
        throw o6("Readable.asIndexedPairs");
      }
    };
    l4 = class extends e3 {
      static {
        __name(this, "l");
      }
      __unenv__ = {};
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      writableAborted = false;
      destroyed = false;
      _data;
      _encoding = "utf8";
      constructor(e4) {
        super();
      }
      pipe(e4, t12) {
        return {};
      }
      _write(e4, t12, r6) {
        if (this.writableEnded) r6 && r6();
        else {
          if (void 0 === this._data) this._data = e4;
          else {
            const r7 = "string" == typeof this._data ? s5.from(this._data, this._encoding || t12 || "utf8") : this._data, a8 = "string" == typeof e4 ? s5.from(e4, t12 || this._encoding || "utf8") : e4;
            this._data = s5.concat([r7, a8]);
          }
          this._encoding = t12, r6 && r6();
        }
      }
      _writev(e4, t12) {
      }
      _destroy(e4, t12) {
      }
      _final(e4) {
      }
      write(e4, t12, r6) {
        const s6 = "string" == typeof t12 ? this._encoding : "utf8", a8 = "function" == typeof t12 ? t12 : "function" == typeof r6 ? r6 : void 0;
        return this._write(e4, s6, a8), true;
      }
      setDefaultEncoding(e4) {
        return this;
      }
      end(e4, t12, r6) {
        const s6 = "function" == typeof e4 ? e4 : "function" == typeof t12 ? t12 : "function" == typeof r6 ? r6 : void 0;
        if (this.writableEnded) return s6 && s6(), this;
        const a8 = e4 === s6 ? void 0 : e4;
        if (a8) {
          const e5 = t12 === s6 ? void 0 : t12;
          this.write(a8, e5);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), s6 && s6(), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e4) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e4, t12) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return Promise.resolve();
      }
    };
    Qt3 = class {
      static {
        __name(this, "Qt");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e4 = new i3(), t12 = new l4()) {
        Object.assign(this, e4), Object.assign(this, t12), this._destroy = /* @__PURE__ */ (function(...e5) {
          return function(...t13) {
            for (const r6 of e5) r6(...t13);
          };
        })(e4._destroy, t12._destroy);
      }
    };
    Jt3 = (Object.assign(Qt3.prototype, i3.prototype), Object.assign(Qt3.prototype, l4.prototype), Qt3);
    A2 = class extends Jt3 {
      static {
        __name(this, "A");
      }
      __unenv__ = {};
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e4) {
        super();
      }
      write(e4, t12, r6) {
        return false;
      }
      connect(e4, t12, r6) {
        return this;
      }
      end(e4, t12, r6) {
        return this;
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e4, t12) {
        return this;
      }
      setNoDelay(e4) {
        return this;
      }
      setKeepAlive(e4, t12) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e4 = new Error("ERR_SOCKET_CLOSED");
        return e4.code = "ERR_SOCKET_CLOSED", this.destroy(e4), this;
      }
    };
    y2 = class extends i3 {
      static {
        __name(this, "y");
      }
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e4) {
        super(), this.socket = this.connection = e4 || new A2();
      }
      get rawHeaders() {
        const e4 = this.headers, t12 = [];
        for (const r6 in e4) if (Array.isArray(e4[r6])) for (const s6 of e4[r6]) t12.push(r6, s6);
        else t12.push(r6, e4[r6]);
        return t12;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e4, t12) {
        return this;
      }
      get headersDistinct() {
        return p4(this.headers);
      }
      get trailersDistinct() {
        return p4(this.trailers);
      }
    };
    __name(p4, "p");
    w4 = class extends l4 {
      static {
        __name(this, "w");
      }
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e4) {
        super(), this.req = e4;
      }
      assignSocket(e4) {
        e4._httpMessage = this, this.socket = e4, this.connection = e4, this.emit("socket", e4), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e4) {
      }
      writeContinue(e4) {
      }
      writeHead(e4, t12, r6) {
        e4 && (this.statusCode = e4), "string" == typeof t12 && (this.statusMessage = t12, t12 = void 0);
        const s6 = r6 || t12;
        if (s6 && !Array.isArray(s6)) for (const e5 in s6) this.setHeader(e5, s6[e5]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e4, t12) {
        return this;
      }
      appendHeader(e4, t12) {
        e4 = e4.toLowerCase();
        const r6 = this._headers[e4], s6 = [...Array.isArray(r6) ? r6 : [r6], ...Array.isArray(t12) ? t12 : [t12]].filter(Boolean);
        return this._headers[e4] = s6.length > 1 ? s6 : s6[0], this;
      }
      setHeader(e4, t12) {
        return this._headers[e4.toLowerCase()] = t12, this;
      }
      setHeaders(e4) {
        for (const [t12, r6] of Object.entries(e4)) this.setHeader(t12, r6);
        return this;
      }
      getHeader(e4) {
        return this._headers[e4.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e4) {
        return e4.toLowerCase() in this._headers;
      }
      removeHeader(e4) {
        delete this._headers[e4.toLowerCase()];
      }
      addTrailers(e4) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e4, t12) {
        "function" == typeof t12 && t12();
      }
    };
    Zt3 = (() => {
      const n5 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n5.prototype = /* @__PURE__ */ Object.create(null), n5;
    })();
    __name(v2, "v");
    Vt3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b4, "b");
    __name(hasProp2, "hasProp");
    H3Error = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e4, t12 = {}) {
        super(e4, t12), t12.cause && !this.cause && (this.cause = t12.cause);
      }
      toJSON() {
        const e4 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e4.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e4.data = this.data), e4;
      }
    };
    __name(createError, "createError");
    __name(isError, "isError");
    __name(getQuery, "getQuery");
    __name(getRouterParam, "getRouterParam");
    __name(getRequestHeaders, "getRequestHeaders");
    Gt3 = /* @__PURE__ */ Symbol.for("h3RawBody");
    Xt3 = /* @__PURE__ */ Symbol.for("h3ParsedBody");
    Yt3 = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(readBody, "readBody");
    __name(_parseJSON, "_parseJSON");
    __name(handleCacheHeaders, "handleCacheHeaders");
    er3 = { html: "text/html", json: "application/json" };
    tr3 = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    rr3 = void 0 === a7 ? (e4) => e4() : a7;
    __name(send2, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(getResponseStatus, "getResponseStatus");
    __name(getResponseStatusText, "getResponseStatusText");
    __name(setResponseHeaders, "setResponseHeaders");
    sr3 = setResponseHeaders;
    __name(setResponseHeader, "setResponseHeader");
    __name(appendResponseHeader, "appendResponseHeader");
    __name(sendStream, "sendStream");
    __name(sendWebResponse, "sendWebResponse");
    or3 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    nr3 = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    __name(proxyRequest, "proxyRequest");
    __name(getProxyRequestHeaders, "getProxyRequestHeaders");
    __name(fetchWithEvent, "fetchWithEvent");
    __name(_getFetch, "_getFetch");
    __name(rewriteCookieProperty, "rewriteCookieProperty");
    H3Event = class {
      static {
        __name(this, "H3Event");
      }
      __is_event__ = true;
      node;
      web;
      context = {};
      _method;
      _path;
      _headers;
      _requestBody;
      _handled = false;
      _onBeforeResponseCalled;
      _onAfterResponseCalled;
      constructor(e4, t12) {
        this.node = { req: e4, res: t12 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = (function(e4) {
          const t12 = new Headers();
          for (const [r6, s6] of Object.entries(e4)) if (Array.isArray(s6)) for (const e5 of s6) t12.append(r6, e5);
          else s6 && t12.set(r6, s6);
          return t12;
        })(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e4) {
        return Promise.resolve(e4).then((e5) => sendWebResponse(this, e5));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(isEvent, "isEvent");
    __name(createEvent, "createEvent");
    __name(defineEventHandler, "defineEventHandler");
    __name(_normalizeArray, "_normalizeArray");
    ar3 = defineEventHandler;
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e4) {
      let t12, r6;
      const resolveHandler = /* @__PURE__ */ __name(() => r6 ? Promise.resolve(r6) : (t12 || (t12 = Promise.resolve(e4()).then((e5) => {
        const t13 = e5.default || e5;
        if ("function" != typeof t13) throw new TypeError("Invalid lazy handler result. It should be a function:", t13);
        return r6 = { handler: toEventHandler(e5.default || e5) }, r6;
      })), t12), "resolveHandler"), s6 = ar3((e5) => r6 ? r6.handler(e5) : resolveHandler().then((t13) => t13.handler(e5)));
      return s6.__resolve__ = resolveHandler, s6;
    }, "lazyEventHandler");
    __name(createApp2, "createApp");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    ir3 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks2, "flatHooks");
    cr3 = { run: /* @__PURE__ */ __name((e4) => e4(), "run") };
    ur3 = void 0 !== console.createTask ? console.createTask : () => cr3;
    __name(serialTaskCaller2, "serialTaskCaller");
    __name(parallelTaskCaller2, "parallelTaskCaller");
    __name(callEachWith2, "callEachWith");
    Hookable = class {
      static {
        __name(this, "Hookable");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e4, t12, r6 = {}) {
        if (!e4 || "function" != typeof t12) return () => {
        };
        const s6 = e4;
        let a8;
        for (; this._deprecatedHooks[e4]; ) a8 = this._deprecatedHooks[e4], e4 = a8.to;
        if (a8 && !r6.allowDeprecated) {
          let e5 = a8.message;
          e5 || (e5 = `${s6} hook has been deprecated` + (a8.to ? `, please use ${a8.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e5) || (console.warn(e5), this._deprecatedMessages.add(e5));
        }
        if (!t12.name) try {
          Object.defineProperty(t12, "name", { get: /* @__PURE__ */ __name(() => "_" + e4.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t12), () => {
          t12 && (this.removeHook(e4, t12), t12 = void 0);
        };
      }
      hookOnce(e4, t12) {
        let r6, _function = /* @__PURE__ */ __name((...e5) => ("function" == typeof r6 && r6(), r6 = void 0, _function = void 0, t12(...e5)), "_function");
        return r6 = this.hook(e4, _function), r6;
      }
      removeHook(e4, t12) {
        if (this._hooks[e4]) {
          const r6 = this._hooks[e4].indexOf(t12);
          -1 !== r6 && this._hooks[e4].splice(r6, 1), 0 === this._hooks[e4].length && delete this._hooks[e4];
        }
      }
      deprecateHook(e4, t12) {
        this._deprecatedHooks[e4] = "string" == typeof t12 ? { to: t12 } : t12;
        const r6 = this._hooks[e4] || [];
        delete this._hooks[e4];
        for (const t13 of r6) this.hook(e4, t13);
      }
      deprecateHooks(e4) {
        Object.assign(this._deprecatedHooks, e4);
        for (const t12 in e4) this.deprecateHook(t12, e4[t12]);
      }
      addHooks(e4) {
        const t12 = flatHooks2(e4), r6 = Object.keys(t12).map((e5) => this.hook(e5, t12[e5]));
        return () => {
          for (const e5 of r6.splice(0, r6.length)) e5();
        };
      }
      removeHooks(e4) {
        const t12 = flatHooks2(e4);
        for (const e5 in t12) this.removeHook(e5, t12[e5]);
      }
      removeAllHooks() {
        for (const e4 in this._hooks) delete this._hooks[e4];
      }
      callHook(e4, ...t12) {
        return t12.unshift(e4), this.callHookWith(serialTaskCaller2, e4, ...t12);
      }
      callHookParallel(e4, ...t12) {
        return t12.unshift(e4), this.callHookWith(parallelTaskCaller2, e4, ...t12);
      }
      callHookWith(e4, t12, ...r6) {
        const s6 = this._before || this._after ? { name: t12, args: r6, context: {} } : void 0;
        this._before && callEachWith2(this._before, s6);
        const a8 = e4(t12 in this._hooks ? [...this._hooks[t12]] : [], r6);
        return a8 instanceof Promise ? a8.finally(() => {
          this._after && s6 && callEachWith2(this._after, s6);
        }) : (this._after && s6 && callEachWith2(this._after, s6), a8);
      }
      beforeEach(e4) {
        return this._before = this._before || [], this._before.push(e4), () => {
          if (void 0 !== this._before) {
            const t12 = this._before.indexOf(e4);
            -1 !== t12 && this._before.splice(t12, 1);
          }
        };
      }
      afterEach(e4) {
        return this._after = this._after || [], this._after.push(e4), () => {
          if (void 0 !== this._after) {
            const t12 = this._after.indexOf(e4);
            -1 !== t12 && this._after.splice(t12, 1);
          }
        };
      }
    };
    lr = globalThis;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e4, t12) {
        super(e4, t12), this.name = "FetchError", t12?.cause && !this.cause && (this.cause = t12.cause);
      }
    };
    dr3 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    hr3 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    pr3 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks2, "callHooks");
    fr3 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    mr3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch, "createFetch");
    gr3 = (function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== lr) return lr;
      throw new Error("unable to locate global object");
    })();
    yr3 = gr3.fetch ? (...e4) => gr3.fetch(...e4) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    wr3 = gr3.Headers;
    _r3 = gr3.AbortController;
    __name(asyncCall, "asyncCall");
    __name(stringify2, "stringify");
    createFetch({ fetch: yr3, Headers: wr3, AbortController: _r3 });
    br3 = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    vr3 = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    __name(normalizeKey$1, "normalizeKey$1");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e4 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e4, "getInstance"), hasItem: /* @__PURE__ */ __name((t12) => e4.has(t12), "hasItem"), getItem: /* @__PURE__ */ __name((t12) => e4.get(t12) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t12) => e4.get(t12) ?? null, "getItemRaw"), setItem(t12, r6) {
        e4.set(t12, r6);
      }, setItemRaw(t12, r6) {
        e4.set(t12, r6);
      }, removeItem(t12) {
        e4.delete(t12);
      }, getKeys: /* @__PURE__ */ __name(() => [...e4.keys()], "getKeys"), clear() {
        e4.clear();
      }, dispose() {
        e4.clear();
      } };
    }, "memory");
    __name(watch2, "watch");
    __name(dispose, "dispose");
    xr3 = {};
    normalizeKey2 = /* @__PURE__ */ __name(function(e4) {
      return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey");
    Rr3 = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(xr3)), "getKeys"), hasItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(e4 in xr3)), "hasItem"), getItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(xr3[e4] ? xr3[e4].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(xr3[e4] ? xr3[e4].meta : {})), "getMeta") };
    kr3 = (function(e4 = {}) {
      const t12 = { mounts: { "": e4.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = /* @__PURE__ */ __name((e5) => {
        for (const r7 of t12.mountpoints) if (e5.startsWith(r7)) return { base: r7, relativeKey: e5.slice(r7.length), driver: t12.mounts[r7] };
        return { base: "", relativeKey: e5, driver: t12.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e5, r7) => t12.mountpoints.filter((t13) => t13.startsWith(e5) || r7 && e5.startsWith(t13)).map((r8) => ({ relativeBase: e5.length > r8.length ? e5.slice(r8.length) : void 0, mountpoint: r8, driver: t12.mounts[r8] })), "getMounts"), onChange = /* @__PURE__ */ __name((e5, r7) => {
        if (t12.watching) {
          r7 = normalizeKey$1(r7);
          for (const s6 of t12.watchListeners) s6(e5, r7);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t12.watching) {
          for (const e5 in t12.unwatch) await t12.unwatch[e5]();
          t12.unwatch = {}, t12.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e5, t13, r7) => {
        const s6 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e6) => {
          let t14 = s6.get(e6.base);
          return t14 || (t14 = { driver: e6.driver, base: e6.base, items: [] }, s6.set(e6.base, t14)), t14;
        }, "getBatch");
        for (const r8 of e5) {
          const e6 = "string" == typeof r8, s7 = normalizeKey$1(e6 ? r8 : r8.key), a8 = e6 ? void 0 : r8.value, c4 = e6 || !r8.options ? t13 : { ...t13, ...r8.options }, u5 = getMount(s7);
          getBatch(u5).items.push({ key: s7, value: a8, relativeKey: u5.relativeKey, options: c4 });
        }
        return Promise.all([...s6.values()].map((e6) => r7(e6))).then((e6) => e6.flat());
      }, "runBatch"), r6 = { hasItem(e5, t13 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s6 } = getMount(e5);
        return asyncCall(s6.hasItem, r7, t13);
      }, getItem(e5, t13 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s6 } = getMount(e5);
        return asyncCall(s6.getItem, r7, t13).then((e6) => destr(e6));
      }, getItems: /* @__PURE__ */ __name((e5, t13 = {}) => runBatch(e5, t13, (e6) => e6.driver.getItems ? asyncCall(e6.driver.getItems, e6.items.map((e7) => ({ key: e7.relativeKey, options: e7.options })), t13).then((t14) => t14.map((t15) => ({ key: joinKeys(e6.base, t15.key), value: destr(t15.value) }))) : Promise.all(e6.items.map((t14) => asyncCall(e6.driver.getItem, t14.relativeKey, t14.options).then((e7) => ({ key: t14.key, value: destr(e7) }))))), "getItems"), getItemRaw(e5, t13 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s6 } = getMount(e5);
        return s6.getItemRaw ? asyncCall(s6.getItemRaw, r7, t13) : asyncCall(s6.getItem, r7, t13).then((e6) => deserializeRaw(e6));
      }, async setItem(e5, t13, s6 = {}) {
        if (void 0 === t13) return r6.removeItem(e5);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a8, driver: c4 } = getMount(e5);
        c4.setItem && (await asyncCall(c4.setItem, a8, stringify2(t13), s6), c4.watch || onChange("update", e5));
      }, async setItems(e5, t13) {
        await runBatch(e5, t13, async (e6) => {
          if (e6.driver.setItems) return asyncCall(e6.driver.setItems, e6.items.map((e7) => ({ key: e7.relativeKey, value: stringify2(e7.value), options: e7.options })), t13);
          e6.driver.setItem && await Promise.all(e6.items.map((t14) => asyncCall(e6.driver.setItem, t14.relativeKey, stringify2(t14.value), t14.options)));
        });
      }, async setItemRaw(e5, t13, s6 = {}) {
        if (void 0 === t13) return r6.removeItem(e5, s6);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a8, driver: c4 } = getMount(e5);
        if (c4.setItemRaw) await asyncCall(c4.setItemRaw, a8, t13, s6);
        else {
          if (!c4.setItem) return;
          await asyncCall(c4.setItem, a8, serializeRaw(t13), s6);
        }
        c4.watch || onChange("update", e5);
      }, async removeItem(e5, t13 = {}) {
        "boolean" == typeof t13 && (t13 = { removeMeta: t13 }), e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s6 } = getMount(e5);
        s6.removeItem && (await asyncCall(s6.removeItem, r7, t13), (t13.removeMeta || t13.removeMata) && await asyncCall(s6.removeItem, r7 + "$", t13), s6.watch || onChange("remove", e5));
      }, async getMeta(e5, t13 = {}) {
        "boolean" == typeof t13 && (t13 = { nativeOnly: t13 }), e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s6 } = getMount(e5), a8 = /* @__PURE__ */ Object.create(null);
        if (s6.getMeta && Object.assign(a8, await asyncCall(s6.getMeta, r7, t13)), !t13.nativeOnly) {
          const e6 = await asyncCall(s6.getItem, r7 + "$", t13).then((e7) => destr(e7));
          e6 && "object" == typeof e6 && ("string" == typeof e6.atime && (e6.atime = new Date(e6.atime)), "string" == typeof e6.mtime && (e6.mtime = new Date(e6.mtime)), Object.assign(a8, e6));
        }
        return a8;
      }, setMeta(e5, t13, r7 = {}) {
        return this.setItem(e5 + "$", t13, r7);
      }, removeMeta(e5, t13 = {}) {
        return this.removeItem(e5 + "$", t13);
      }, async getKeys(e5, t13 = {}) {
        e5 = normalizeBaseKey(e5);
        const r7 = getMounts(e5, true);
        let s6 = [];
        const a8 = [];
        let c4 = true;
        for (const e6 of r7) {
          e6.driver.flags?.maxDepth || (c4 = false);
          const r8 = await asyncCall(e6.driver.getKeys, e6.relativeBase, t13);
          for (const t14 of r8) {
            const r9 = e6.mountpoint + normalizeKey$1(t14);
            s6.some((e7) => r9.startsWith(e7)) || a8.push(r9);
          }
          s6 = [e6.mountpoint, ...s6.filter((t14) => !t14.startsWith(e6.mountpoint))];
        }
        const u5 = void 0 !== t13.maxDepth && !c4;
        return a8.filter((r8) => (!u5 || (function(e6, t14) {
          if (void 0 === t14) return true;
          let r9 = 0, s7 = e6.indexOf(":");
          for (; s7 > -1; ) r9++, s7 = e6.indexOf(":", s7 + 1);
          return r9 <= t14;
        })(r8, t13.maxDepth)) && (function(e6, t14) {
          return t14 ? e6.startsWith(t14) && "$" !== e6[e6.length - 1] : "$" !== e6[e6.length - 1];
        })(r8, e5));
      }, async clear(e5, t13 = {}) {
        e5 = normalizeBaseKey(e5), await Promise.all(getMounts(e5, false).map(async (e6) => {
          if (e6.driver.clear) return asyncCall(e6.driver.clear, e6.relativeBase, t13);
          if (e6.driver.removeItem) {
            const r7 = await e6.driver.getKeys(e6.relativeBase || "", t13);
            return Promise.all(r7.map((r8) => e6.driver.removeItem(r8, t13)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t12.mounts).map((e5) => dispose(e5)));
      }, watch: /* @__PURE__ */ __name(async (e5) => (await (async () => {
        if (!t12.watching) {
          t12.watching = true;
          for (const e6 in t12.mounts) t12.unwatch[e6] = await watch2(t12.mounts[e6], onChange, e6);
        }
      })(), t12.watchListeners.push(e5), async () => {
        t12.watchListeners = t12.watchListeners.filter((t13) => t13 !== e5), 0 === t12.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t12.watchListeners = [], await stopWatch();
      }, mount(e5, s6) {
        if ((e5 = normalizeBaseKey(e5)) && t12.mounts[e5]) throw new Error(`already mounted at ${e5}`);
        return e5 && (t12.mountpoints.push(e5), t12.mountpoints.sort((e6, t13) => t13.length - e6.length)), t12.mounts[e5] = s6, t12.watching && Promise.resolve(watch2(s6, onChange, e5)).then((r7) => {
          t12.unwatch[e5] = r7;
        }).catch(console.error), r6;
      }, async unmount(e5, r7 = true) {
        (e5 = normalizeBaseKey(e5)) && t12.mounts[e5] && (t12.watching && e5 in t12.unwatch && (t12.unwatch[e5]?.(), delete t12.unwatch[e5]), r7 && await dispose(t12.mounts[e5]), t12.mountpoints = t12.mountpoints.filter((t13) => t13 !== e5), delete t12.mounts[e5]);
      }, getMount(e5 = "") {
        e5 = normalizeKey$1(e5) + ":";
        const t13 = getMount(e5);
        return { driver: t13.driver, base: t13.base };
      }, getMounts(e5 = "", t13 = {}) {
        e5 = normalizeKey$1(e5);
        return getMounts(e5, t13.parents).map((e6) => ({ driver: e6.driver, base: e6.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e5, t13 = {}) => r6.getKeys(e5, t13), "keys"), get: /* @__PURE__ */ __name((e5, t13 = {}) => r6.getItem(e5, t13), "get"), set: /* @__PURE__ */ __name((e5, t13, s6 = {}) => r6.setItem(e5, t13, s6), "set"), has: /* @__PURE__ */ __name((e5, t13 = {}) => r6.hasItem(e5, t13), "has"), del: /* @__PURE__ */ __name((e5, t13 = {}) => r6.removeItem(e5, t13), "del"), remove: /* @__PURE__ */ __name((e5, t13 = {}) => r6.removeItem(e5, t13), "remove") };
      return r6;
    })({});
    __name(useStorage, "useStorage");
    kr3.mount("/assets", Rr3);
    Cr3 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    Er3 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    Ar3 = [];
    Sr3 = class {
      static {
        __name(this, "Sr");
      }
      _data = new Tr3();
      _hash = new Tr3([...Cr3]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e4) {
        e4 && this._append(e4);
        const t12 = 8 * this._nDataBytes, r6 = 8 * this._data.sigBytes;
        return this._data.words[r6 >>> 5] |= 128 << 24 - r6 % 32, this._data.words[14 + (r6 + 64 >>> 9 << 4)] = Math.floor(t12 / 4294967296), this._data.words[15 + (r6 + 64 >>> 9 << 4)] = t12, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e4, t12) {
        const r6 = this._hash.words;
        let s6 = r6[0], a8 = r6[1], c4 = r6[2], u5 = r6[3], d5 = r6[4], h5 = r6[5], f4 = r6[6], m5 = r6[7];
        for (let r7 = 0; r7 < 64; r7++) {
          if (r7 < 16) Ar3[r7] = 0 | e4[t12 + r7];
          else {
            const e5 = Ar3[r7 - 15], t13 = (e5 << 25 | e5 >>> 7) ^ (e5 << 14 | e5 >>> 18) ^ e5 >>> 3, s7 = Ar3[r7 - 2], a9 = (s7 << 15 | s7 >>> 17) ^ (s7 << 13 | s7 >>> 19) ^ s7 >>> 10;
            Ar3[r7] = t13 + Ar3[r7 - 7] + a9 + Ar3[r7 - 16];
          }
          const g5 = s6 & a8 ^ s6 & c4 ^ a8 & c4, _3 = (s6 << 30 | s6 >>> 2) ^ (s6 << 19 | s6 >>> 13) ^ (s6 << 10 | s6 >>> 22), x5 = m5 + ((d5 << 26 | d5 >>> 6) ^ (d5 << 21 | d5 >>> 11) ^ (d5 << 7 | d5 >>> 25)) + (d5 & h5 ^ ~d5 & f4) + Er3[r7] + Ar3[r7];
          m5 = f4, f4 = h5, h5 = d5, d5 = u5 + x5 | 0, u5 = c4, c4 = a8, a8 = s6, s6 = x5 + (_3 + g5) | 0;
        }
        r6[0] = r6[0] + s6 | 0, r6[1] = r6[1] + a8 | 0, r6[2] = r6[2] + c4 | 0, r6[3] = r6[3] + u5 | 0, r6[4] = r6[4] + d5 | 0, r6[5] = r6[5] + h5 | 0, r6[6] = r6[6] + f4 | 0, r6[7] = r6[7] + m5 | 0;
      }
      _append(e4) {
        "string" == typeof e4 && (e4 = Tr3.fromUtf8(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }
      _process(e4) {
        let t12, r6 = this._data.sigBytes / 64;
        r6 = e4 ? Math.ceil(r6) : Math.max((0 | r6) - this._minBufferSize, 0);
        const s6 = 16 * r6, a8 = Math.min(4 * s6, this._data.sigBytes);
        if (s6) {
          for (let e5 = 0; e5 < s6; e5 += 16) this._doProcessBlock(this._data.words, e5);
          t12 = this._data.words.splice(0, s6), this._data.sigBytes -= a8;
        }
        return new Tr3(t12, a8);
      }
    };
    Tr3 = class WordArray {
      static {
        __name(this, "WordArray");
      }
      words;
      sigBytes;
      constructor(e4, t12) {
        e4 = this.words = e4 || [], this.sigBytes = void 0 === t12 ? 4 * e4.length : t12;
      }
      static fromUtf8(e4) {
        const t12 = unescape(encodeURIComponent(e4)), r6 = t12.length, s6 = [];
        for (let e5 = 0; e5 < r6; e5++) s6[e5 >>> 2] |= (255 & t12.charCodeAt(e5)) << 24 - e5 % 4 * 8;
        return new WordArray(s6, r6);
      }
      toBase64() {
        const e4 = [];
        for (let t12 = 0; t12 < this.sigBytes; t12 += 3) {
          const r6 = (this.words[t12 >>> 2] >>> 24 - t12 % 4 * 8 & 255) << 16 | (this.words[t12 + 1 >>> 2] >>> 24 - (t12 + 1) % 4 * 8 & 255) << 8 | this.words[t12 + 2 >>> 2] >>> 24 - (t12 + 2) % 4 * 8 & 255;
          for (let s6 = 0; s6 < 4 && 8 * t12 + 6 * s6 < 8 * this.sigBytes; s6++) e4.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(r6 >>> 6 * (3 - s6) & 63));
        }
        return e4.join("");
      }
      concat(e4) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t12 = 0; t12 < e4.sigBytes; t12++) {
          const r6 = e4.words[t12 >>> 2] >>> 24 - t12 % 4 * 8 & 255;
          this.words[this.sigBytes + t12 >>> 2] |= r6 << 24 - (this.sigBytes + t12) % 4 * 8;
        }
        else for (let t12 = 0; t12 < e4.sigBytes; t12 += 4) this.words[this.sigBytes + t12 >>> 2] = e4.words[t12 >>> 2];
        this.sigBytes += e4.sigBytes;
      }
    };
    jr3 = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #o = /* @__PURE__ */ new Map();
        write(e4) {
          this.buff += e4;
        }
        dispatch(e4) {
          return this[null === e4 ? "null" : typeof e4](e4);
        }
        object(e4) {
          if (e4 && "function" == typeof e4.toJSON) return this.object(e4.toJSON());
          const t12 = Object.prototype.toString.call(e4);
          let r6 = "";
          const a8 = t12.length;
          r6 = a8 < 10 ? "unknown:[" + t12 + "]" : t12.slice(8, a8 - 1), r6 = r6.toLowerCase();
          let c4 = null;
          if (void 0 !== (c4 = this.#o.get(e4))) return this.dispatch("[CIRCULAR:" + c4 + "]");
          if (this.#o.set(e4, this.#o.size), void 0 !== s5 && s5.isBuffer && s5.isBuffer(e4)) return this.write("buffer:"), this.write(e4.toString("utf8"));
          if ("object" !== r6 && "function" !== r6 && "asyncfunction" !== r6) this[r6] ? this[r6](e4) : this.unknown(e4, r6);
          else {
            const t13 = Object.keys(e4).sort(), r7 = [];
            this.write("object:" + (t13.length + r7.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((t14) => {
              this.dispatch(t14), this.write(":"), this.dispatch(e4[t14]), this.write(",");
            }, "dispatchForKey");
            for (const e5 of t13) dispatchForKey(e5);
            for (const e5 of r7) dispatchForKey(e5);
          }
        }
        array(e4, t12) {
          if (t12 = void 0 !== t12 && t12, this.write("array:" + e4.length + ":"), !t12 || e4.length <= 1) {
            for (const t13 of e4) this.dispatch(t13);
            return;
          }
          const r6 = /* @__PURE__ */ new Map(), s6 = e4.map((e5) => {
            const t13 = new Hasher2();
            t13.dispatch(e5);
            for (const [e6, s7] of t13.#o) r6.set(e6, s7);
            return t13.toString();
          });
          return this.#o = r6, s6.sort(), this.array(s6, false);
        }
        date(e4) {
          return this.write("date:" + e4.toJSON());
        }
        symbol(e4) {
          return this.write("symbol:" + e4.toString());
        }
        unknown(e4, t12) {
          if (this.write(t12), e4) return this.write(":"), e4 && "function" == typeof e4.entries ? this.array([...e4.entries()], true) : void 0;
        }
        error(e4) {
          return this.write("error:" + e4.toString());
        }
        boolean(e4) {
          return this.write("bool:" + e4);
        }
        string(e4) {
          this.write("string:" + e4.length + ":"), this.write(e4);
        }
        function(e4) {
          this.write("fn:"), !(function(e5) {
            if ("function" != typeof e5) return false;
            return "[native code] }" === Function.prototype.toString.call(e5).slice(-15);
          })(e4) ? this.dispatch(e4.toString()) : this.dispatch("[native]");
        }
        number(e4) {
          return this.write("number:" + e4);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e4) {
          return this.write("regex:" + e4.toString());
        }
        arraybuffer(e4) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e4));
        }
        url(e4) {
          return this.write("url:" + e4.toString());
        }
        map(e4) {
          this.write("map:");
          const t12 = [...e4];
          return this.array(t12, false);
        }
        set(e4) {
          this.write("set:");
          const t12 = [...e4];
          return this.array(t12, false);
        }
        bigint(e4) {
          return this.write("bigint:" + e4.toString());
        }
      }
      for (const e4 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e4] = function(t12) {
        return this.write(e4 + ":"), this.array([...t12], false);
      };
      return Hasher2;
    })();
    __name(hash, "hash");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e4, t12 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const r6 = (t12.varies || []).filter(Boolean).map((e5) => e5.toLowerCase()).sort(), s6 = { ...t12, getKey: /* @__PURE__ */ __name(async (e5) => {
        const s7 = await t12.getKey?.(e5);
        if (s7) return escapeKey(s7);
        const a9 = e5.node.req.originalUrl || e5.node.req.url || e5.path;
        let c4;
        try {
          c4 = escapeKey(decodeURI(parseURL(a9).pathname)).slice(0, 16) || "index";
        } catch {
          c4 = "-";
        }
        return [`${c4}.${hash(a9)}`, ...r6.map((t13) => [t13, e5.node.req.headers[t13]]).map(([e6, t13]) => `${escapeKey(e6)}.${hash(t13)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e5) => !!e5.value && (!(e5.value.code >= 400) && (void 0 !== e5.value.body && ("undefined" !== e5.value.headers.etag && "undefined" !== e5.value.headers["last-modified"]))), "validate"), group: t12.group || "nitro/handlers", integrity: t12.integrity || hash([e4, t12]) }, a8 = (function(e5, t13 = {}) {
        return defineCachedFunction(e5, t13);
      })(async (a9) => {
        const c4 = {};
        for (const e5 of r6) {
          const t13 = a9.node.req.headers[e5];
          void 0 !== t13 && (c4[e5] = t13);
        }
        const u5 = cloneWithProxy(a9.node.req, { headers: c4 }), d5 = {};
        let h5;
        const f4 = createEvent(u5, cloneWithProxy(a9.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e5) => d5[e5], "getHeader"), setHeader(e5, t13) {
          return d5[e5] = t13, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(d5), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e5) => e5 in d5, "hasHeader"), removeHeader(e5) {
          delete d5[e5];
        }, getHeaders: /* @__PURE__ */ __name(() => d5, "getHeaders"), end(e5, t13, r7) {
          return "string" == typeof e5 && (h5 = e5), "function" == typeof t13 && t13(), "function" == typeof r7 && r7(), this;
        }, write: /* @__PURE__ */ __name((e5, t13, r7) => ("string" == typeof e5 && (h5 = e5), "function" == typeof t13 && t13(void 0), "function" == typeof r7 && r7(), true), "write"), writeHead(e5, t13) {
          if (this.statusCode = e5, t13) {
            if (Array.isArray(t13) || "string" == typeof t13) throw new TypeError("Raw headers  is not supported.");
            for (const e6 in t13) {
              const r7 = t13[e6];
              void 0 !== r7 && this.setHeader(e6, r7);
            }
          }
          return this;
        } }));
        f4.fetch = (e5, t13) => fetchWithEvent(f4, e5, t13, { fetch: useNitroApp().localFetch }), f4.$fetch = (e5, t13) => fetchWithEvent(f4, e5, t13, { fetch: globalThis.$fetch }), f4.waitUntil = a9.waitUntil, f4.context = a9.context, f4.context.cache = { options: s6 };
        const m5 = await e4(f4) || h5, g5 = f4.node.res.getHeaders();
        g5.etag = String(g5.Etag || g5.etag || `W/"${hash(m5)}"`), g5["last-modified"] = String(g5["Last-Modified"] || g5["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const _3 = [];
        t12.swr ? (t12.maxAge && _3.push(`s-maxage=${t12.maxAge}`), t12.staleMaxAge ? _3.push(`stale-while-revalidate=${t12.staleMaxAge}`) : _3.push("stale-while-revalidate")) : t12.maxAge && _3.push(`max-age=${t12.maxAge}`), _3.length > 0 && (g5["cache-control"] = _3.join(", "));
        return { code: f4.node.res.statusCode, headers: g5, body: m5 };
      }, s6);
      return defineEventHandler(async (r7) => {
        if (t12.headersOnly) {
          if (handleCacheHeaders(r7, { maxAge: t12.maxAge })) return;
          return e4(r7);
        }
        const s7 = await a8(r7);
        if (r7.node.res.headersSent || r7.node.res.writableEnded) return s7.body;
        if (!handleCacheHeaders(r7, { modifiedTime: new Date(s7.headers["last-modified"]), etag: s7.headers.etag, maxAge: t12.maxAge })) {
          r7.node.res.statusCode = s7.code;
          for (const e5 in s7.headers) {
            const t13 = s7.headers[e5];
            "set-cookie" === e5 ? r7.node.res.appendHeader(e5, splitCookiesString(t13)) : void 0 !== t13 && r7.node.res.setHeader(e5, t13);
          }
          return s7.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    Hr3 = Kt3({});
    Pr3 = /\d/;
    Ir3 = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    __name(applyEnv, "applyEnv");
    Mr3 = /\{\{([^{}]*)\}\}/g;
    __name(_expandFromEnv, "_expandFromEnv");
    Or3 = { app: { baseURL: "/", buildId: "d849a361-b623-40b5-8bb2-9b34c7035b92", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {}, neo4jHost: "", neo4jUser: "neo4j", neo4jPassword: "", neo4jDatabase: "neo4j", tursoUrl: "", tursoToken: "", suspectNames: [] };
    Nr3 = { prefix: "NITRO_", altPrefix: Or3.nitro.envPrefix ?? g3.env.NITRO_ENV_PREFIX ?? "_", envExpansion: Or3.nitro.envExpansion ?? g3.env.NITRO_ENV_EXPANSION ?? false };
    Br3 = _deepFreeze(applyEnv(klona(Or3), Nr3));
    __name(useRuntimeConfig2, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(Hr3)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e4, t12) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r6 = useRuntimeConfig2();
      if (t12 in r6) return r6[t12];
    }, "get") });
    qr3 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== lr ? lr : {};
    Ur3 = "__unctx__";
    zr3 = qr3[Ur3] || (qr3[Ur3] = /* @__PURE__ */ (function(e4 = {}) {
      const t12 = {};
      return { get: /* @__PURE__ */ __name((r6, s6 = {}) => (t12[r6] || (t12[r6] = (function(e5 = {}) {
        let t13, r7 = false;
        const checkConflict = /* @__PURE__ */ __name((e6) => {
          if (t13 && t13 !== e6) throw new Error("Context conflict");
        }, "checkConflict");
        let s7;
        if (e5.asyncContext) {
          const t14 = e5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t14 ? s7 = new t14() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (s7) {
            const e6 = s7.getStore();
            if (void 0 !== e6) return e6;
          }
          return t13;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e6 = _getCurrentInstance();
          if (void 0 === e6) throw new Error("Context is not available");
          return e6;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e6, s8) => {
          s8 || checkConflict(e6), t13 = e6, r7 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t13 = void 0, r7 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e6, a8) => {
          checkConflict(e6), t13 = e6;
          try {
            return s7 ? s7.run(e6, a8) : a8();
          } finally {
            r7 || (t13 = void 0);
          }
        }, "call"), async callAsync(e6, a8) {
          t13 = e6;
          const onRestore = /* @__PURE__ */ __name(() => {
            t13 = e6;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t13 === e6 ? onRestore : void 0, "onLeave");
          $r3.add(onLeave);
          try {
            const c4 = s7 ? s7.run(e6, a8) : a8();
            return r7 || (t13 = void 0), await c4;
          } finally {
            $r3.delete(onLeave);
          }
        } };
      })({ ...e4, ...s6 })), t12[r6]), "get") };
    })());
    Lr3 = "__unctx_async_handlers__";
    $r3 = qr3[Lr3] || (qr3[Lr3] = /* @__PURE__ */ new Set());
    __name(isPathInScope, "isPathInScope");
    ((e4, t12 = {}) => {
      zr3.get(e4, t12);
    })("nitro-app", { asyncContext: false, AsyncLocalStorage: void 0 });
    Wr3 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRules, "getRouteRules");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    Dr3 = /post|put|patch/i;
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    __name(hasReqHeader, "hasReqHeader");
    __name(defaultHandler, "defaultHandler");
    Fr3 = [async function(e4, t12, { defaultHandler: r6 }) {
      if (t12.handled || (function(e5) {
        return !hasReqHeader(e5, "accept", "text/html") && (hasReqHeader(e5, "accept", "application/json") || hasReqHeader(e5, "user-agent", "curl/") || hasReqHeader(e5, "user-agent", "httpie/") || hasReqHeader(e5, "sec-fetch-mode", "cors") || e5.path.startsWith("/api/") || e5.path.endsWith(".json"));
      })(t12)) return;
      const s6 = await r6(e4, t12, { json: true });
      if (404 === (e4.status || e4.statusCode || 500) && 302 === s6.status) return setResponseHeaders(t12, s6.headers), setResponseStatus(t12, s6.status, s6.statusText), send2(t12, JSON.stringify(s6.body, null, 2));
      const a8 = s6.body, c4 = new URL(a8.url);
      a8.url = withoutBase(c4.pathname, useRuntimeConfig2(t12).app.baseURL) + c4.search + c4.hash, a8.message = e4.unhandled ? a8.message || "Server Error" : e4.message || a8.message || "Server Error", a8.data ||= e4.data, a8.statusText ||= e4.statusText || e4.statusMessage, delete s6.headers["content-type"], delete s6.headers["content-security-policy"], setResponseHeaders(t12, s6.headers);
      const u5 = getRequestHeaders(t12), d5 = t12.path.startsWith("/__nuxt_error") || u5["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t12).app.baseURL, "/__nuxt_error"), a8), { headers: { ...u5, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (t12.handled) return;
      if (!d5) {
        const { template: e5 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        return setResponseHeader(t12, "Content-Type", "text/html;charset=UTF-8"), send2(t12, e5(a8));
      }
      const h5 = await d5.text();
      for (const [e5, r7] of d5.headers.entries()) "set-cookie" !== e5 ? setResponseHeader(t12, e5, r7) : appendResponseHeader(t12, e5, r7);
      return setResponseStatus(t12, d5.status && 200 !== d5.status ? d5.status : s6.status, d5.statusText || s6.statusText), send2(t12, h5);
    }, function(e4, t12) {
      const r6 = defaultHandler(e4, t12);
      return setResponseHeaders(t12, r6.headers), setResponseStatus(t12, r6.status, r6.statusText), send2(t12, JSON.stringify(r6.body, null, 2));
    }];
    Kr3 = [];
    _lazy_WkuB0F = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e4) {
      return e4.I;
    }), "_lazy_WkuB0F");
    Qr2 = [{ route: "/api/address/:address", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_address_get(), address_get_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/analyze", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_analyze_post(), analyze_post_exports)), "handler"), lazy: true, middleware: false, method: "post" }, { route: "/api/exchanges", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_exchanges_get(), exchanges_get_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/graph/:address", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_address_get2(), address_get_exports2)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/health", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_health_get(), health_get_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/kyt/:address", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_address_get3(), address_get_exports3)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/__nuxt_error", handler: _lazy_WkuB0F, lazy: true, middleware: false, method: void 0 }, { route: "/__nuxt_island/**", handler: defineEventHandler(() => {
    }), lazy: false, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_WkuB0F, lazy: true, middleware: false, method: void 0 }];
    Jr3 = (function() {
      const e4 = useRuntimeConfig2(), t12 = new Hookable(), captureError = /* @__PURE__ */ __name((e5, r7 = {}) => {
        const s7 = t12.callHookParallel("error", e5, r7).catch((e6) => {
          console.error("Error while capturing another error", e6);
        });
        if (r7.event && isEvent(r7.event)) {
          const t13 = r7.event.context.nitro?.errors;
          t13 && t13.push({ error: e5, context: r7 }), r7.event.waitUntil && r7.event.waitUntil(s7);
        }
      }, "captureError"), r6 = createApp2({ debug: destr(false), onError: /* @__PURE__ */ __name((e5, t13) => (captureError(e5, { event: t13, tags: ["request"] }), (async function(e6, t14) {
        for (const r7 of Fr3) try {
          if (await r7(e6, t14, { defaultHandler }), t14.handled) return;
        } catch (e7) {
          console.error(e7);
        }
      })(e5, t13)), "onError"), onRequest: /* @__PURE__ */ __name(async (e5) => {
        e5.context.nitro = e5.context.nitro || { errors: [] };
        const t13 = e5.node.req?.__unenv__;
        t13?._platform && (e5.context = { _platform: t13?._platform, ...t13._platform, ...e5.context }), !e5.context.waitUntil && t13?.waitUntil && (e5.context.waitUntil = t13.waitUntil), e5.fetch = (t14, r7) => fetchWithEvent(e5, t14, r7, { fetch: localFetch }), e5.$fetch = (t14, r7) => fetchWithEvent(e5, t14, r7, { fetch: c4 }), e5.waitUntil = (t14) => {
          e5.context.nitro._waitUntilPromises || (e5.context.nitro._waitUntilPromises = []), e5.context.nitro._waitUntilPromises.push(t14), e5.context.waitUntil && e5.context.waitUntil(t14);
        }, e5.captureError = (t14, r7) => {
          captureError(t14, { event: e5, ...r7 });
        }, await Jr3.hooks.callHook("request", e5).catch((t14) => {
          captureError(t14, { event: e5, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e5, t13) => {
        await Jr3.hooks.callHook("beforeResponse", e5, t13).catch((t14) => {
          captureError(t14, { event: e5, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e5, t13) => {
        await Jr3.hooks.callHook("afterResponse", e5, t13).catch((t14) => {
          captureError(t14, { event: e5, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), s6 = (function(e5 = {}) {
        const t13 = createRouter$1({}), r7 = {};
        let s7;
        const a9 = {}, addRoute = /* @__PURE__ */ __name((e6, s8, c6) => {
          let u5 = r7[e6];
          if (u5 || (r7[e6] = u5 = { path: e6, handlers: {} }, t13.insert(e6, u5)), Array.isArray(c6)) for (const t14 of c6) addRoute(e6, s8, t14);
          else u5.handlers[c6] = toEventHandler(s8);
          return a9;
        }, "addRoute");
        a9.use = a9.add = (e6, t14, r8) => addRoute(e6, t14, r8 || "all");
        for (const e6 of ir3) a9[e6] = (t14, r8) => a9.add(t14, r8, e6);
        const matchHandler = /* @__PURE__ */ __name((e6 = "/", r8 = "get") => {
          const a10 = e6.indexOf("?");
          -1 !== a10 && (e6 = e6.slice(0, Math.max(0, a10)));
          const c6 = t13.lookup(e6);
          if (!c6 || !c6.handlers) return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e6 || "/"}.` }) };
          let u5 = c6.handlers[r8] || c6.handlers.all;
          if (!u5) {
            s7 || (s7 = toRouteMatcher(t13));
            const a11 = s7.matchAll(e6).reverse();
            for (const e7 of a11) {
              if (e7.handlers[r8]) {
                u5 = e7.handlers[r8], c6.handlers[r8] = c6.handlers[r8] || u5;
                break;
              }
              if (e7.handlers.all) {
                u5 = e7.handlers.all, c6.handlers.all = c6.handlers.all || u5;
                break;
              }
            }
          }
          return u5 ? { matched: c6, handler: u5 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r8} is not allowed on this route.` }) };
        }, "matchHandler"), c5 = e5.preemptive || e5.preemtive;
        return a9.handler = ar3((e6) => {
          const t14 = matchHandler(e6.path, e6.method.toLowerCase());
          if ("error" in t14) {
            if (c5) throw t14.error;
            return;
          }
          e6.context.matchedRoute = t14.matched;
          const r8 = t14.matched.params || {};
          return e6.context.params = r8, Promise.resolve(t14.handler(e6)).then((e7) => void 0 === e7 && c5 ? null : e7);
        }), a9.handler.__resolve__ = async (e6) => {
          e6 = withLeadingSlash(e6);
          const t14 = matchHandler(e6);
          if ("error" in t14) return;
          let r8 = { route: t14.matched.path, handler: t14.handler };
          if (t14.handler.__resolve__) {
            const s8 = await t14.handler.__resolve__(e6);
            if (!s8) return;
            r8 = { ...r8, ...s8 };
          }
          return r8;
        }, a9;
      })({ preemptive: true }), a8 = toNodeListener(r6), localFetch = /* @__PURE__ */ __name((e5, t13) => e5.toString().startsWith("/") ? (async function(e6, t14, r7 = {}) {
        try {
          const s7 = await b4(e6, { url: t14, ...r7 });
          return new Response(s7.body, { status: s7.status, statusText: s7.statusText, headers: v2(s7.headers) });
        } catch (e7) {
          return new Response(e7.toString(), { status: Number.parseInt(e7.statusCode || e7.code) || 500, statusText: e7.statusText });
        }
      })(a8, e5, t13).then((e6) => (function(e7) {
        return e7.headers.has("set-cookie") ? new Response(e7.body, { status: e7.status, statusText: e7.statusText, headers: normalizeCookieHeaders(e7.headers) }) : e7;
      })(e6)) : globalThis.fetch(e5, t13), "localFetch"), c4 = createFetch({ fetch: localFetch, Headers: wr3, defaults: { baseURL: e4.app.baseURL } });
      globalThis.$fetch = c4, r6.use(createRouteRulesHandler({ localFetch }));
      for (const t13 of Qr2) {
        let a9 = t13.lazy ? lazyEventHandler(t13.handler) : t13.handler;
        if (t13.middleware || !t13.route) {
          const s7 = (e4.app.baseURL + (t13.route || "/")).replace(/\/+/g, "/");
          r6.use(s7, a9);
        } else {
          const e5 = getRouteRulesForPath(t13.route.replace(/:\w+|\*\*/g, "_"));
          e5.cache && (a9 = cachedEventHandler(a9, { group: "nitro/routes", ...e5.cache })), s6.use(t13.route, a9, t13.method);
        }
      }
      return r6.use(e4.app.baseURL, s6.handler), { hooks: t12, h3App: r6, router: s6, localCall: /* @__PURE__ */ __name((e5) => b4(a8, e5), "localCall"), localFetch, captureError };
    })();
    __name(useNitroApp, "useNitroApp");
    __name(defineRenderHandler, "defineRenderHandler");
    !(function(e4) {
      for (const t12 of Kr3) try {
        t12(e4);
      } catch (t13) {
        throw e4.captureError(t13, { tags: ["plugin"] }), t13;
      }
    })(Jr3);
    Zr2 = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2026-09-17T08:09:57.659Z", size: 4286, path: "../public/favicon.ico" }, "/robots.txt": { type: "text/plain; charset=utf-8", etag: '"18-j8OIsL9qGDmNZ+lHhp2tyH4XtaE"', mtime: "2026-09-17T08:09:57.659Z", size: 24, path: "../public/robots.txt" }, "/_nuxt/Bgt03FZM.js": { type: "text/javascript; charset=utf-8", etag: '"d3a-FWcrEOP0qJhCDNwIytDWX2GSGkk"', mtime: "2026-09-17T08:09:57.657Z", size: 3386, path: "../public/_nuxt/Bgt03FZM.js" }, "/_nuxt/CXx5Chv3.js": { type: "text/javascript; charset=utf-8", etag: '"e90-BOtGEq7wSqFqbDE8CNhqY42J+tI"', mtime: "2026-09-17T08:09:57.657Z", size: 3728, path: "../public/_nuxt/CXx5Chv3.js" }, "/_nuxt/8Q5p_Rgz.js": { type: "text/javascript; charset=utf-8", etag: '"164c6-UVdN+1+rICpdlPayaVFzIBaEHdY"', mtime: "2026-09-17T08:09:57.657Z", size: 91334, path: "../public/_nuxt/8Q5p_Rgz.js" }, "/_nuxt/BDNMzG2s.js": { type: "text/javascript; charset=utf-8", etag: '"54-MasMfSk/A98C3Gn9uIOxtFxkWNw"', mtime: "2026-09-17T08:09:57.657Z", size: 84, path: "../public/_nuxt/BDNMzG2s.js" }, "/_nuxt/CYyUlB7I.js": { type: "text/javascript; charset=utf-8", etag: '"2fde-RRvsIdKGVqFJSC/M7H+KdzE2M/k"', mtime: "2026-09-17T08:09:57.657Z", size: 12254, path: "../public/_nuxt/CYyUlB7I.js" }, "/_nuxt/entry.DVpdvty5.css": { type: "text/css; charset=utf-8", etag: '"d10-8JnguhTG/AwA74krnZThtIF03RI"', mtime: "2026-09-17T08:09:57.657Z", size: 3344, path: "../public/_nuxt/entry.DVpdvty5.css" }, "/_nuxt/error-404.Bb87HomL.css": { type: "text/css; charset=utf-8", etag: '"97d-4h9VfBznldxjqagfMldh1hDncR0"', mtime: "2026-09-17T08:09:57.657Z", size: 2429, path: "../public/_nuxt/error-404.Bb87HomL.css" }, "/_nuxt/error-500.Bwd7zAaE.css": { type: "text/css; charset=utf-8", etag: '"772-nqXXACYtFiPK+D42BNu4uEECARA"', mtime: "2026-09-17T08:09:57.657Z", size: 1906, path: "../public/_nuxt/error-500.Bwd7zAaE.css" }, "/_nuxt/pages.CZz6dH6p.css": { type: "text/css; charset=utf-8", etag: '"702-IKzFtoLX0y+rj1bDvxZHFtvuD5I"', mtime: "2026-09-17T08:09:57.657Z", size: 1794, path: "../public/_nuxt/pages.CZz6dH6p.css" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-YEJt7x85o/4qN9cY0uXdUCYBZgM"', mtime: "2026-09-17T08:09:57.653Z", size: 71, path: "../public/_nuxt/builds/latest.json" }, "/_nuxt/builds/meta/d849a361-b623-40b5-8bb2-9b34c7035b92.json": { type: "application/json", etag: '"58-QDOqM0RXrfYcUcHMtr6RsxbV1N8"', mtime: "2026-09-17T08:09:57.649Z", size: 88, path: "../public/_nuxt/builds/meta/d849a361-b623-40b5-8bb2-9b34c7035b92.json" }, "/_nuxt/h5W2IsCz.js": { type: "text/javascript; charset=utf-8", etag: '"17c63-lfeb3i/xFWXixzFHnOqhXAlo5oo"', mtime: "2026-09-17T08:09:57.657Z", size: 97379, path: "../public/_nuxt/h5W2IsCz.js" }, "/_nuxt/D6xx22XN.js": { type: "text/javascript; charset=utf-8", etag: '"6a2ad-l0PbVTdKt29N9PiTmRT8E27o8RI"', mtime: "2026-09-17T08:09:57.657Z", size: 434861, path: "../public/_nuxt/D6xx22XN.js" } };
    Vr3 = { "/_nuxt/builds/meta/": { maxAge: 31536e3 }, "/_nuxt/builds/": { maxAge: 1 }, "/_nuxt/": { maxAge: 31536e3 } };
    Agent = class extends e3 {
      static {
        __name(this, "Agent");
      }
      __unenv__ = {};
      maxFreeSockets = 256;
      maxSockets = 1 / 0;
      maxTotalSockets = 1 / 0;
      freeSockets = {};
      sockets = {};
      requests = {};
      options;
      constructor(e4 = {}) {
        super(), this.options = e4;
      }
      destroy() {
      }
    };
    new Agent();
    Gr = { Agent };
    Xr3 = (function(e4) {
      const t12 = useNitroApp();
      return { async fetch(r6, a8, c4) {
        const u5 = {}, d5 = new URL(r6.url);
        if (e4.fetch) {
          const t13 = await e4.fetch(r6, a8, c4, d5, u5);
          if (t13) return t13;
        }
        return (async function(e5, t13, r7, a9 = new URL(e5.url), c5 = useNitroApp(), u6) {
          let d6;
          (function(e6) {
            return Dr3.test(e6.method);
          })(e5) && (d6 = s5.from(await e5.arrayBuffer()));
          return globalThis.__env__ = t13, c5.localFetch(a9.pathname + a9.search, { context: { waitUntil: /* @__PURE__ */ __name((e6) => r7.waitUntil(e6), "waitUntil"), _platform: { cf: e5.cf, cloudflare: { request: e5, env: t13, context: r7, url: a9, ...u6 } } }, host: a9.hostname, protocol: a9.protocol, method: e5.method, headers: e5.headers, body: d6 });
        })(r6, a8, c4, d5, t12, u5);
      }, scheduled(e5, r6, s6) {
        globalThis.__env__ = r6, s6.waitUntil(t12.hooks.callHook("cloudflare:scheduled", { controller: e5, env: r6, context: s6 }));
      }, email(e5, r6, s6) {
        globalThis.__env__ = r6, s6.waitUntil(t12.hooks.callHook("cloudflare:email", { message: e5, event: e5, env: r6, context: s6 }));
      }, queue(e5, r6, s6) {
        globalThis.__env__ = r6, s6.waitUntil(t12.hooks.callHook("cloudflare:queue", { batch: e5, event: e5, env: r6, context: s6 }));
      }, tail(e5, r6, s6) {
        globalThis.__env__ = r6, s6.waitUntil(t12.hooks.callHook("cloudflare:tail", { traces: e5, env: r6, context: s6 }));
      }, trace(e5, r6, s6) {
        globalThis.__env__ = r6, s6.waitUntil(t12.hooks.callHook("cloudflare:trace", { traces: e5, env: r6, context: s6 }));
      } };
    })({ fetch(e4, t12, r6, s6) {
      if (t12.ASSETS && (function(e5 = "") {
        if (Zr2[e5]) return true;
        for (const t13 in Vr3) if (e5.startsWith(t13)) return true;
        return false;
      })(s6.pathname)) return t12.ASSETS.fetch(e4);
    } });
  }
});

// .wrangler/tmp/bundle-C2CUww/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-C2CUww/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .output/server/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_nitro();
import "node:events";
import "cloudflare:workers";
import "node:buffer";
import "node:timers";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e4) {
      console.error("Failed to drain the unused request body.", e4);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e4) {
  return {
    name: e4?.name,
    message: e4?.message ?? String(e4),
    stack: e4?.stack,
    cause: e4?.cause === void 0 ? void 0 : reduceError(e4.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e4) {
    const error3 = reduceError(e4);
    const body = JSON.stringify(error3);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-C2CUww/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Xr3;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-C2CUww/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
