{"code":"System.register([\"@beyond-js/kernel@0.1.8/bundle\",\"@beyond-js/kernel@0.1.8/core\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.8\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@beyond-js/kernel/styles.0.1.8.js\nvar styles_0_1_8_exports = {};\n__export(styles_0_1_8_exports, {\n  DependenciesStyles: () => DependenciesStyles,\n  V1Styles: () => V1Styles,\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr,\n  styles: () => styles\n});\nmodule.exports = __toCommonJS(styles_0_1_8_exports);\n\n// node_modules/@beyond-js/kernel/styles/styles.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.8/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"@beyond-js/kernel@0.1.8/core\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/kernel@0.1.8/styles\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"@beyond-js/kernel/core\", dependency_1]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./dependencies-styles\", {\n  hash: 282408023,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.DependenciesStyles = void 0;\n    var _bundle = require2(\"@beyond-js/kernel/bundle\");\n    var _core = require2(\"@beyond-js/kernel/core\");\n    var _registry = require2(\"./registry\");\n    class DependenciesStyles2 extends _core.Events {\n      #vspecifier;\n      #elements;\n      get elements() {\n        return this.#elements;\n      }\n      constructor(vspecifier) {\n        super();\n        this.#vspecifier = vspecifier;\n        const change = () => this.trigger(\"change\");\n        this.#elements = /* @__PURE__ */new Set();\n        const recursive = vspecifier2 => {\n          if (!vspecifier2) {\n            console.trace(\"Bundle vspecifier not defined\");\n            return;\n          }\n          if (!_bundle.instances.has(vspecifier2)) {\n            console.error(`Bundle id \"${vspecifier2}\" not found. Try refreshing the page.\nIf the problem still persist, delete the BeyondJS cache and try again.`);\n            return;\n          }\n          const bundle = _bundle.instances.get(vspecifier2);\n          if (vspecifier2 !== this.#vspecifier && bundle.type === \"widget\") return;\n          const styles2 = _registry.styles.get(vspecifier2);\n          if (styles2 && styles2.engine !== \"legacy\") {\n            this.#elements.add(styles2);\n            styles2.on(\"change\", change);\n          }\n          const {\n            dependencies\n          } = bundle.package();\n          dependencies.forEach(dependency => {\n            const pkg = dependency.__beyond_pkg;\n            if (!pkg) return;\n            recursive(pkg.vspecifier);\n          });\n        };\n        recursive(this.#vspecifier);\n      }\n    }\n    exports.DependenciesStyles = DependenciesStyles2;\n  }\n});\nims.set(\"./legacy\", {\n  hash: 859564821,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.default = void 0;\n    class _default {\n      get engine() {\n        return \"legacy\";\n      }\n      #bundle;\n      #value;\n      get value() {\n        return this.#value;\n      }\n      #appended = false;\n      get appended() {\n        return this.#appended;\n      }\n      constructor(bundle, value) {\n        this.#bundle = bundle;\n        const module2 = (() => {\n          const module3 = bundle.split(\"/\");\n          module3.pop();\n          return module3.join(\"/\");\n        })();\n        const regexp = /#host\\.([\\w\\d]*)#([^.]*\\.[\\w\\d]*)/g;\n        this.#value = value.replace(regexp, (match, host, resource) => {\n          if (host === \"module\" || host === \"library\") {\n            return `${module2}/${resource}`;\n          } else if (host === \"application\") {\n            return resource;\n          }\n          console.warn(`Invalid css host specification on bundle \"${bundle}\"`, match);\n        });\n      }\n      appendToDOM(is) {\n        if (this.#appended) {\n          const previous = document.querySelectorAll(`:scope > [bundle=\"${this.#bundle}\"]`)[0];\n          previous && document.removeChild(previous);\n        }\n        const css = document.createElement(\"style\");\n        css.appendChild(document.createTextNode(this.#value));\n        is && css.setAttribute(\"is\", is);\n        document.getElementsByTagName(\"head\")[0].appendChild(css);\n        this.#appended = true;\n      }\n    }\n    exports.default = _default;\n  }\n});\nims.set(\"./registry\", {\n  hash: 2402124624,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.styles = void 0;\n    var _legacy = require2(\"./legacy\");\n    var _v = require2(\"./v1\");\n    class Registry {\n      #registry = /* @__PURE__ */new Map();\n      register(vspecifier, value) {\n        if (this.#registry.has(vspecifier)) return;\n        const styles3 = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);\n        this.#registry.set(vspecifier, styles3);\n        return styles3;\n      }\n      has(vspecifier) {\n        return this.#registry.has(vspecifier);\n      }\n      get(vspecifier) {\n        return this.#registry.get(vspecifier);\n      }\n    }\n    const styles2 = new Registry();\n    exports.styles = styles2;\n    globalThis.beyondLegacyStyles = styles2;\n  }\n});\nims.set(\"./v1\", {\n  hash: 1891964101,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.V1Styles = void 0;\n    var _core = require2(\"@beyond-js/kernel/core\");\n    var _bundle = require2(\"@beyond-js/kernel/bundle\");\n    class V1Styles2 extends _core.Events {\n      get engine() {\n        return \"v1\";\n      }\n      #bundle;\n      get bundle() {\n        return this.#bundle;\n      }\n      #version = 0;\n      get version() {\n        return this.#version;\n      }\n      #resource;\n      get resource() {\n        return this.#resource;\n      }\n      get href() {\n        const version = this.#version ? `?version=${this.#version}` : \"\";\n        return `${this.#resource}${version}`;\n      }\n      constructor(resource) {\n        super();\n        this.#bundle = _bundle.instances.get(resource);\n        this.#resource = (() => {\n          if (typeof process === \"object\") {\n            const split = resource.split(\"/\");\n            const pkg = split[0].startsWith(\"@\") ? `${split.shift()}/${split.shift()}` : split.shift();\n            const subpath = split.join(\"/\");\n            return `##_!${pkg}!_##${subpath}.css`;\n          }\n          let {\n            uri\n          } = this.#bundle;\n          const regexp = new RegExp(\"^https?://cdn.beyondjs.com\", \"i\");\n          if (regexp.test(uri)) {\n            const {\n              origin,\n              pathname,\n              searchParams\n            } = new URL(uri);\n            const version = searchParams.has(\"version\") ? `&version=${searchParams.get(\"version\")}` : \"\";\n            return origin + pathname + \"?css\" + version;\n          }\n          uri = uri.slice(0, uri.length - 3);\n          return `${uri}.css`;\n        })();\n      }\n      change() {\n        this.#version++;\n        this.trigger(\"change\");\n      }\n    }\n    exports.V1Styles = V1Styles2;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./dependencies-styles\",\n  \"from\": \"DependenciesStyles\",\n  \"name\": \"DependenciesStyles\"\n}, {\n  \"im\": \"./registry\",\n  \"from\": \"styles\",\n  \"name\": \"styles\"\n}, {\n  \"im\": \"./v1\",\n  \"from\": \"V1Styles\",\n  \"name\": \"V1Styles\"\n}];\nvar DependenciesStyles, styles, V1Styles;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"DependenciesStyles\") && (DependenciesStyles = require2 ? require2(\"./dependencies-styles\").DependenciesStyles : value);\n  (require2 || prop === \"styles\") && (styles = require2 ? require2(\"./registry\").styles : value);\n  (require2 || prop === \"V1Styles\") && (V1Styles = require2 ? require2(\"./v1\").V1Styles : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMuMC4xLjguanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy9sZWdhY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvcmVnaXN0cnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvdjEudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJWMVN0eWxlcyIsIl9fYmV5b25kX3BrZyIsImhtciIsInN0eWxlcyIsIm1vZHVsZSIsIkV2ZW50cyIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJ2c3BlY2lmaWVyIiwiY2hhbmdlIiwidHJpZ2dlciIsIlNldCIsInJlY3Vyc2l2ZSIsImNvbnNvbGUiLCJ0cmFjZSIsImJ1bmRsZXMiLCJoYXMiLCJlcnJvciIsImJ1bmRsZSIsImdldCIsInR5cGUiLCJyZWdpc3RyeSIsImVuZ2luZSIsImFkZCIsIm9uIiwiZGVwZW5kZW5jaWVzIiwicGFja2FnZSIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwicGtnIiwiZXhwb3J0cyIsInZhbHVlIiwiYXBwZW5kZWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJyZWdleHAiLCJyZXBsYWNlIiwibWF0Y2giLCJob3N0IiwicmVzb3VyY2UiLCJ3YXJuIiwiYXBwZW5kVG9ET00iLCJpcyIsInByZXZpb3VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiUmVnaXN0cnkiLCJNYXAiLCJyZWdpc3RlciIsIkxlZ2FjeVN0eWxlcyIsInNldCIsImdsb2JhbFRoaXMiLCJiZXlvbmRMZWdhY3lTdHlsZXMiLCJ2ZXJzaW9uIiwiaHJlZiIsInByb2Nlc3MiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJzdWJwYXRoIiwidXJpIiwiUmVnRXhwIiwidGVzdCIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwic2xpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQ0E7SUFDQTtJQUdpQixNQUNYTCw0QkFBMkJNLGFBQU07TUFDMUI7TUFDQTtNQUNULElBQUlDLFdBQVE7UUFDUixPQUFPLEtBQUs7TUFDaEI7TUFFQUMsWUFBWUMsWUFBa0I7UUFDMUIsT0FBSztRQUNMLEtBQUssY0FBY0E7UUFFbkIsTUFBTUMsU0FBUyxNQUFNLEtBQUtDLFFBQVEsUUFBUTtRQUUxQyxLQUFLLFlBQVksbUJBQUlDLEtBQUc7UUFDeEIsTUFBTUMsWUFBYUosZUFBc0I7VUFDckMsSUFBSSxDQUFDQSxhQUFZO1lBQ2JLLFFBQVFDLE1BQU0sK0JBQStCO1lBQzdDOztVQUdKLElBQUksQ0FBQ0Msa0JBQVFDLElBQUlSLFdBQVUsR0FBRztZQUMxQkssUUFBUUksTUFBTSxjQUFjVDt1RUFDZ0Q7WUFDNUU7O1VBRUosTUFBTVUsU0FBU0gsa0JBQVFJLElBQUlYLFdBQVU7VUFDckMsSUFBSUEsZ0JBQWUsS0FBSyxlQUFlVSxPQUFPRSxTQUFTLFVBQVU7VUFHakUsTUFBTWpCLFVBQW1Ca0IsaUJBQVNGLElBQUlYLFdBQVU7VUFDaEQs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","dependencies":[{"id":"@beyond-js/kernel@0.1.8/bundle","path":"C:\\Users\\Gabigol\\Documents\\shop-real\\project\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/kernel@0.1.8/core","path":"C:\\Users\\Gabigol\\Documents\\shop-real\\project\\node_modules\\@beyond-js\\kernel"}],"warnings":[]}