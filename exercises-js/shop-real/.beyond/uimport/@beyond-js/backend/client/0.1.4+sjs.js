{"code":"System.register([\"@beyond-js/kernel@0.1.8/bundle\",\"@beyond-js/kernel@0.1.8/core\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.8\"],[\"@beyond-js/backend\",\"0.1.4\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@beyond-js/backend/client.0.1.4.js\nvar client_0_1_4_exports = {};\n__export(client_0_1_4_exports, {\n  ActionsBridge: () => ActionsBridge,\n  Backend: () => Backend,\n  __beyond_pkg: () => __beyond_pkg,\n  backends: () => backends,\n  hmr: () => hmr\n});\nmodule.exports = __toCommonJS(client_0_1_4_exports);\n\n// node_modules/@beyond-js/backend/client/client.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.8/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"@beyond-js/kernel@0.1.8/core\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/backend@0.1.4/client\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"@beyond-js/kernel/core\", dependency_1]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./action/bridge\", {\n  hash: 2081575659,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.ActionsBridge = void 0;\n    var _ = require2(\"./\");\n    class ActionsBridge2 {\n      #distribution;\n      #bundle;\n      #backend;\n      constructor(distribution, bundle) {\n        this.#distribution = distribution;\n        this.#bundle = bundle.specifier;\n        this.#backend = `${bundle.module.pkg}/${this.#distribution}`;\n      }\n      async execute(action, ...params) {\n        const a = new _.default(this.#backend, this.#bundle, action, ...params);\n        return await a.execute();\n      }\n    }\n    exports.ActionsBridge = ActionsBridge2;\n  }\n});\nims.set(\"./action/execution-error\", {\n  hash: 3368390780,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.ExecutionError = void 0;\n    const ExecutionError = class {\n      #message;\n      get message() {\n        return this.#message;\n      }\n      #stack;\n      get stack() {\n        return this.#stack;\n      }\n      constructor(message, stack) {\n        this.#message = message;\n        this.#stack = stack;\n      }\n    };\n    exports.ExecutionError = ExecutionError;\n  }\n});\nims.set(\"./action/index\", {\n  hash: 2047620412,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.default = void 0;\n    var _core = require2(\"@beyond-js/kernel/core\");\n    var _backends = require2(\"../backends\");\n    var _executionError = require2(\"./execution-error\");\n    let autoincrement = 0;\n    class _default extends _core.Events {\n      #pkg;\n      #request;\n      #module;\n      get module() {\n        return this.#module;\n      }\n      #action;\n      get action() {\n        return this.#action;\n      }\n      #params;\n      get params() {\n        return this.#params;\n      }\n      constructor(backend, module2, action, ...params) {\n        super();\n        const id = this.#id;\n        const pkg = this.#pkg = (() => {\n          const split = backend.split(\"/\");\n          split.pop();\n          return split.join(\"/\");\n        })();\n        this.#module = module2;\n        this.#action = action;\n        this.#params = params;\n        this.#request = {\n          id,\n          pkg,\n          module: module2,\n          action,\n          params\n        };\n      }\n      #id = ++autoincrement;\n      get id() {\n        return this.#id;\n      }\n      #channel = `response-v2-${this.#id}`;\n      get channel() {\n        return this.#channel;\n      }\n      #executed = false;\n      get executed() {\n        return this.#executed;\n      }\n      #executing = false;\n      get executing() {\n        return this.#executing;\n      }\n      #error = false;\n      get error() {\n        return this.#error;\n      }\n      #timer;\n      #attempts = 0;\n      #promise = new _core.PendingPromise();\n      #send = socket => {\n        this.#attempts && this.trigger(\"retrying\", this.#attempts);\n        this.#attempts++;\n        try {\n          socket.emit(\"rpc-v2\", this.#request);\n        } catch (exc) {\n          this.#executing = false;\n          this.#executed = true;\n          this.#error = true;\n          this.#promise.reject(exc);\n        }\n      };\n      async execute() {\n        if (this.#executing || this.#executed) return this.#promise;\n        this.#executing = true;\n        const backend = await _backends.backends.get(this.#pkg);\n        if (!backend) throw new Error(`Project \"${this.#pkg}\" does not have a backend configured`);\n        try {\n          const socket = await backend.socket;\n          if (!socket) {\n            const message = `Error getting socket on \"${backend.pkg}\" backend. `;\n            this.#promise.reject(new Error(message));\n            return;\n          }\n          const onresponse = response => {\n            this.#executed = true;\n            this.#executing = false;\n            clearTimeout(this.#timer);\n            socket.off(this.#channel, onresponse);\n            const {\n              error,\n              message,\n              source,\n              processingTime\n            } = response;\n            error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);\n          };\n          socket.on(this.#channel, onresponse);\n          this.#send(socket);\n        } catch (exc) {\n          this.#promise.reject(exc);\n          return;\n        }\n        return this.#promise;\n      }\n    }\n    exports.default = _default;\n  }\n});\nims.set(\"./backend\", {\n  hash: 486330626,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.Backend = void 0;\n    var _io = require2(\"./io\");\n    var _socket = require2(\"./socket\");\n    class Backend2 {\n      #pkg;\n      get pkg() {\n        return this.#pkg;\n      }\n      #host;\n      get host() {\n        return this.#host;\n      }\n      #local;\n      get local() {\n        return this.#local;\n      }\n      #socket;\n      #io = new _io.ServiceIOConfiguration();\n      get io() {\n        return this.#io;\n      }\n      constructor(pkg, host, local) {\n        this.#pkg = pkg;\n        this.#host = host;\n        this.#local = local;\n        this.#socket = new _socket.default(this);\n      }\n      get socket() {\n        return this.#socket.get();\n      }\n    }\n    exports.Backend = Backend2;\n  }\n});\nims.set(\"./backends\", {\n  hash: 1705909413,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.backends = void 0;\n    var _backend = require2(\"./backend\");\n    const backends2 = new class {\n      #hosts = /* @__PURE__ */new Map();\n      register(pkg, host) {\n        !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));\n      }\n      async get(pkg) {\n        if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);\n        try {\n          const {\n            backend: config\n          } = (await bimport(`${pkg}/config`)).default;\n          if (!config) {\n            console.log(`Backend configuration not set on package \"${pkg}\"`);\n            this.#hosts.set(pkg, void 0);\n            return;\n          }\n          const {\n            host,\n            local\n          } = config;\n          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);\n          const backend = new _backend.Backend(pkg, host, local);\n          this.#hosts.set(pkg, backend);\n          return this.#hosts.get(pkg);\n        } catch (exc) {\n          console.log(`Error importing package \"${pkg}\" configuration: ${exc.message}`);\n          this.#hosts.set(pkg, void 0);\n        }\n      }\n      async execute(pkg, distribution, module2, action, ...params) {\n        const a = new (require2(\"./action\").default)(`${pkg}/${distribution}`, module2, action, ...params);\n        return await a.execute();\n      }\n    }();\n    exports.backends = backends2;\n  }\n});\nims.set(\"./io\", {\n  hash: 2941830475,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.ServiceIOConfiguration = void 0;\n    class ServiceIOConfiguration {\n      querystring;\n    }\n    exports.ServiceIOConfiguration = ServiceIOConfiguration;\n  }\n});\nims.set(\"./socket/index\", {\n  hash: 1119353765,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.default = void 0;\n    var _core = require2(\"@beyond-js/kernel/core\");\n    var _initiator = require2(\"./initiator\");\n    var __decorate = function (decorators, target, key, desc) {\n      var c = arguments.length,\n        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n        d;\n      if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n      return c > 3 && r && Object.defineProperty(target, key, r), r;\n    };\n    class default_1 {\n      #backend;\n      #initiator;\n      #socket;\n      constructor(backend) {\n        this.#backend = backend;\n        this.#initiator = new _initiator.default(backend);\n      }\n      async get() {\n        if (this.#socket) return this.#socket;\n        const backend = this.#backend;\n        const {\n          pkg\n        } = backend;\n        pkg !== \"@beyond-js/local\" && (await this.#initiator.check());\n        const {\n          io\n        } = await bimport(\"socket.io-client\");\n        let query = backend.io.querystring && (await backend.io.querystring());\n        const {\n          host\n        } = this.#backend;\n        return this.#socket = io(host, {\n          transports: [\"websocket\"],\n          \"query\": query\n        });\n      }\n    }\n    exports.default = default_1;\n    __decorate([_core.SingleCall], default_1.prototype, \"get\", null);\n  }\n});\nims.set(\"./socket/initiator\", {\n  hash: 4260137755,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.default = void 0;\n    var _core = require2(\"@beyond-js/kernel/core\");\n    class _default {\n      #backend;\n      #local;\n      constructor(backend) {\n        this.#backend = backend;\n      }\n      #promise;\n      #initialise = async () => {\n        if (this.#promise) {\n          await this.#promise;\n          return;\n        }\n        this.#promise = new _core.PendingPromise();\n        if (!this.#backend.local || this.#local) return;\n        this.#local = (await bimport(\"@beyond-js/local/main\")).local;\n        this.#promise.resolve();\n      };\n      async check() {\n        await this.#initialise();\n        if (!this.#local) return;\n        const {\n          pkg,\n          local\n        } = this.#backend;\n        const id = `${pkg}/${local}`;\n        const launcher = this.#local.launchers.get(id);\n        const status = await launcher.status;\n        if (status === \"running\") return;\n        await launcher.start();\n        await new Promise(resolve => setTimeout(resolve, 2e3));\n      }\n    }\n    exports.default = _default;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./action/bridge\",\n  \"from\": \"ActionsBridge\",\n  \"name\": \"ActionsBridge\"\n}, {\n  \"im\": \"./backend\",\n  \"from\": \"Backend\",\n  \"name\": \"Backend\"\n}, {\n  \"im\": \"./backends\",\n  \"from\": \"backends\",\n  \"name\": \"backends\"\n}];\nvar ActionsBridge, Backend, backends;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"ActionsBridge\") && (ActionsBridge = require2 ? require2(\"./action/bridge\").ActionsBridge : value);\n  (require2 || prop === \"Backend\") && (Backend = require2 ? require2(\"./backend\").Backend : value);\n  (require2 || prop === \"backends\") && (backends = require2 ? require2(\"./backends\").backends : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50LjAuMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vYnJpZGdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vZXhlY3V0aW9uLWVycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9pby50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvc29ja2V0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5pdGlhdG9yLnRzIl0sIm5hbWVzIjpbImNsaWVudF8wXzFfNF9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25zQnJpZGdlIiwiQmFja2VuZCIsIl9fYmV5b25kX3BrZyIsImJhY2tlbmRzIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl8iLCJyZXF1aXJlMiIsIkFjdGlvbnNCcmlkZ2UyIiwiZGlzdHJpYnV0aW9uIiwiYnVuZGxlIiwiYmFja2VuZCIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwicGtnIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImEiLCJkZWZhdWx0IiwiRXhlY3V0aW9uRXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJfY29yZSIsIl9iYWNrZW5kcyIsIl9leGVjdXRpb25FcnJvciIsImF1dG9pbmNyZW1lbnQiLCJfZGVmYXVsdCIsIkV2ZW50cyIsInJlcXVlc3QiLCJtb2R1bGUyIiwiaWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJjaGFubmVsIiwiZXhlY3V0ZWQiLCJleGVjdXRpbmciLCJlcnJvciIsInRpbWVyIiwiYXR0ZW1wdHMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzZW5kIiwic29ja2V0IiwidHJpZ2dlciIsImVtaXQiLCJleGMiLCJyZWplY3QiLCJnZXQiLCJFcnJvciIsIm9ucmVzcG9uc2UiLCJyZXNwb25zZSIsImNsZWFyVGltZW91dCIsIm9mZiIsInNvdXJjZSIsInByb2Nlc3NpbmdUaW1lIiwicmVzb2x2ZSIsIm9uIiwiX2lvIiwiX3NvY2tldCIsIkJhY2tlbmQyIiwiaG9zdCIsImxvY2FsIiwiaW8iLCJTZXJ2aWNlSU9Db25maWd1cmF0aW9uIiwiX2JhY2tlbmQiLCJiYWNrZW5kczIiLCJob3N0cyIsIk1hcCIsInJlZ2lzdGVyIiwiaGFzIiwic2V0IiwiY29uZmlnIiwiYmltcG9ydCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeXN0cmluZyIsIl9pbml0aWF0b3IiLCJkZWZhdWx0XzEiLCJpbml0aWF0b3IiLCJjaGVjayIsInF1ZXJ5IiwidHJhbnNwb3J0cyIsIl9fZGVjb3JhdGUiLCJTaW5nbGVDYWxsIiwicHJvdG90eXBlIiwiaW5pdGlhbGlzZSIsIiNpbml0aWFsaXNlIiwibGF1bmNoZXIiLCJsYXVuY2hlcnMiLCJzdGF0dXMiLCJzdGFydCIsIlByb21pc2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJ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","dependencies":[{"id":"@beyond-js/kernel@0.1.8/bundle","path":"E:\\workspace\\exercises\\exercises-js\\shop-real\\project\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/kernel@0.1.8/core","path":"E:\\workspace\\exercises\\exercises-js\\shop-real\\project\\node_modules\\@beyond-js\\kernel"}],"warnings":[]}