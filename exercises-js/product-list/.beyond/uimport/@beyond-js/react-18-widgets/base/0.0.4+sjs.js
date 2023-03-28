{"code":"System.register([\"@beyond-js/kernel@0.1.9/bundle\",\"react@18.2.0\",\"scheduler@0.23.0\",\"react-dom@18.2.0\",\"react-dom@18.2.0/client\",\"@beyond-js/kernel@0.1.9/core\",\"@beyond-js/widgets@0.1.4/render\",\"@beyond-js/kernel@0.1.9/styles\",\"@beyond-js/widgets@0.1.4/controller\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.9\"],[\"react\",\"18.2.0\"],[\"scheduler\",\"0.23.0\"],[\"react-dom\",\"18.2.0\"],[\"@beyond-js/widgets\",\"0.1.4\"],[\"@beyond-js/react-18-widgets\",\"0.0.4\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@beyond-js/react-18-widgets/base.0.0.4.js\nvar base_0_0_4_exports = {};\n__export(base_0_0_4_exports, {\n  ReactWidgetController: () => ReactWidgetController,\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr\n});\nmodule.exports = __toCommonJS(base_0_0_4_exports);\n\n// node_modules/@beyond-js/react-18-widgets/base/base.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.9/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"react@18.2.0\"), 0);\nvar dependency_2 = __toESM(require(\"react-dom@18.2.0/client\"), 0);\nvar dependency_3 = __toESM(require(\"@beyond-js/widgets@0.1.4/controller\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/react-18-widgets@0.0.4/base\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"react\", dependency_1], [\"react-dom/client\", dependency_2], [\"@beyond-js/widgets/controller\", dependency_3]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./controller\", {\n  hash: 2569255018,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.ReactWidgetController = void 0;\n    var React = require2(\"react\");\n    var _client = require2(\"react-dom/client\");\n    var _controller = require2(\"@beyond-js/widgets/controller\");\n    var _widget = require2(\"./widget\");\n    var _wrapper = require2(\"./wrapper\");\n    class ReactWidgetController2 extends _controller.WidgetClientController {\n      #wrapper;\n      #root;\n      get Widget() {\n        return null;\n      }\n      mount(props) {\n        if (!this.Widget) {\n          return {\n            errors: [`Widget \"${this.element}\" does not export a Widget class`]\n          };\n        }\n        props = Object.assign({\n          widget: this.widget,\n          attributes: this.attributes,\n          component: this.widget,\n          store: this.store\n        }, props ? props : {});\n        const holder = this.widget.holder;\n        const hydrate = !!holder.children.length;\n        try {\n          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);\n          const {\n            styles,\n            widget\n          } = this;\n          const {\n            holder: holder2\n          } = widget;\n          const p = {\n            wrapper,\n            props,\n            styles,\n            holder: holder2,\n            hydrate\n          };\n          const element = React.createElement(_widget.default, p);\n          if (hydrate) {\n            this.#root = (0, _client.hydrateRoot)(holder2, element);\n          } else {\n            const root = this.#root = (0, _client.createRoot)(holder2);\n            root.render(element);\n          }\n        } catch (exc) {\n          console.log(`Error rendering widget \"${this.widget.localName}\":`);\n          console.log(exc.stack);\n        }\n      }\n      unmount() {\n        this.#root.unmount();\n      }\n      refresh() {\n        this.#wrapper.changed();\n      }\n    }\n    exports.ReactWidgetController = ReactWidgetController2;\n  }\n});\nims.set(\"./styles\", {\n  hash: 3645751033,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.default = _default;\n    var React = require2(\"react\");\n    function _default({\n      styles\n    }) {\n      const rs = React.useState(0);\n      React.useEffect(() => {\n        const refresh = () => rs[1](prev => prev + 1);\n        styles.on(\"change\", refresh);\n        return () => styles.off(\"change\", refresh) && void 0;\n      }, []);\n      const head = [...styles.resources].map(url => {\n        const loaded = () => styles.onloaded(url);\n        return React.createElement(\"link\", {\n          key: url,\n          href: url,\n          rel: \"stylesheet\",\n          onLoad: loaded,\n          onError: loaded\n        });\n      });\n      return React.createElement(React.Fragment, null, head);\n    }\n  }\n});\nims.set(\"./widget\", {\n  hash: 90867181,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.default = _default;\n    var React = require2(\"react\");\n    var _styles = require2(\"./styles\");\n    function _default({\n      wrapper,\n      props,\n      styles,\n      holder,\n      hydrate\n    }) {\n      const elements = [];\n      elements.push(React.createElement(_styles.default, {\n        key: \"styles\",\n        styles,\n        widget: props.widget\n      }));\n      const rs = React.useState(0);\n      const refresh = () => rs[1](rs[0] + 1);\n      wrapper.changed = refresh;\n      const loaded = (() => {\n        !styles.loaded && styles.ready.then(refresh);\n        holder.style.display = \"\";\n        return styles.loaded;\n      })();\n      const {\n        Widget\n      } = wrapper;\n      const widget = React.createElement(Widget, {\n        key: \"widget\",\n        ...props\n      });\n      (hydrate || loaded) && elements.push(widget);\n      return React.createElement(React.Fragment, null, elements);\n    }\n  }\n});\nims.set(\"./wrapper\", {\n  hash: 4175409966,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.Wrapper = void 0;\n    class Wrapper {\n      #Widget;\n      get Widget() {\n        return this.#Widget.Widget;\n      }\n      changed = () => void 0;\n      constructor(Widget) {\n        this.#Widget = Widget;\n      }\n    }\n    exports.Wrapper = Wrapper;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./controller\",\n  \"from\": \"ReactWidgetController\",\n  \"name\": \"ReactWidgetController\"\n}];\nvar ReactWidgetController;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"ReactWidgetController\") && (ReactWidgetController = require2 ? require2(\"./controller\").ReactWidgetController : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS4wLjAuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3N0eWxlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvd2lkZ2V0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93cmFwcGVyLnRzIl0sIm5hbWVzIjpbImJhc2VfMF8wXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwicmVxdWlyZTIiLCJfY2xpZW50IiwiX2NvbnRyb2xsZXIiLCJfd2lkZ2V0IiwiX3dyYXBwZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIndyYXBwZXIiLCJyb290IiwiV2lkZ2V0IiwibW91bnQiLCJwcm9wcyIsImVycm9ycyIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic3RvcmUiLCJob2xkZXIiLCJoeWRyYXRlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJXcmFwcGVyIiwic3R5bGVzIiwiaG9sZGVyMiIsInAiLCJjcmVhdGVFbGVtZW50IiwiZGVmYXVsdCIsImh5ZHJhdGVSb290IiwiY3JlYXRlUm9vdCIsInJlbmRlciIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInVubW91bnQiLCJyZWZyZXNoIiwiY2hhbmdlZCIsIl9kZWZhdWx0IiwicnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZXYiLCJvbiIsIm9mZiIsImhlYWQiLCJyZXNvdXJjZXMiLCJtYXAiLCJ1cmwiLCJsb2FkZWQiLCJvbmxvYWRlZCIsImtleSIsImhyZWYiLCJyZWwiLCJvbkxvYWQiLCJvbkVycm9yIiwiRnJhZ21lbnQiLCJfc3R5bGVzIiwiZWxlbWVudHMiLCJwdXNoIiwicmVhZHkiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUSxLQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxPQUFBLEdBQUFELFFBQUE7SUFDQSxJQUFBRSxXQUFBLEdBQUFGLFFBQUE7SUFDQSxJQUFBRyxPQUFBLEdBQUFILFFBQUE7SUFDQSxJQUFBSSxRQUFBLEdBQUFKLFFBQUE7SUFFaUIsTUFDRkssc0JBQUEsU0FBOEJILFdBQUEsQ0FBQUksc0JBQUEsQ0FBc0I7TUFDL0QsQ0FBQUMsT0FBQTtNQUNBLENBQUFDLElBQUE7TUFHQSxJQUFJQyxPQUFBLEVBQU07UUFDTixPQUFPO01BQ1g7TUFFQUMsTUFBTUMsS0FBQSxFQUEyQjtRQUM3QixJQUFJLENBQUMsS0FBS0YsTUFBQSxFQUFRO1VBQ2QsT0FBTztZQUFDRyxNQUFBLEVBQVEs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ckQsS0FBQSxDQUFBNkIsYUFBQSxDQUFBN0IsS0FBQSxDQUFBNEQsUUFBQSxRQUFHWCxJQUFJO0lBQ2xCOzs7Ozs7Ozs7Ozs7SUN2QkEsSUFBQWpELEtBQUEsR0FBQUMsUUFBQTtJQUNBLElBQUE0RCxPQUFBLEdBQUE1RCxRQUFBO0lBRWMsU0FBQXlDLFNBQVc7TUFBQ2xDLE9BQUE7TUFBU0ksS0FBQTtNQUFPYyxNQUFBO01BQVFMLE1BQUE7TUFBUUM7SUFBTyxHQUFNO01BQ25FLE1BQU13QyxRQUFBLEdBQWlDO01BQ3ZDQSxRQUFBLENBQVNDLElBQUEsQ0FBSy9ELEtBQUEsQ0FBQTZCLGFBQUEsQ0FBQ2dDLE9BQUEsQ0FBQS9CLE9BQUEsRUFBTTtRQUFDeUIsR0FBQSxFQUFJO1FBQVM3QixNQUFBO1FBQWdCVCxNQUFBLEVBQVFMLEtBQUEsQ0FBTUs7TUFBTSxFQUFHO01BRTFFLE1BQU0wQixFQUFBLEdBQUszQyxLQUFBLENBQU00QyxRQUFBLENBQVMsQ0FBQztNQUMzQixNQUFNSixPQUFBLEdBQVVBLENBQUEsS0FBTUcsRUFBQSxDQUFHLEdBQUdBLEVBQUEsQ0FBRyxLQUFLLENBQUM7TUFHckNuQyxPQUFBLENBQVFpQyxPQUFBLEdBQVVELE9BQUE7TUFHbEIsTUFBTWEsTUFBQSxJQUFtQixNQUFLO1FBQzFCLENBQUMzQixNQUFBLENBQU8yQixNQUFBLElBQVUzQixNQUFBLENBQU9zQyxLQUFBLENBQU1DLElBQUEsQ0FBS3pCLE9BQU87UUFDM0NuQixNQUFBLENBQU82QyxLQUFBLENBQU1DLE9BQUEsR0FBVTtRQUN2QixPQUFPekMsTUFBQSxDQUFPMkIsTUFBQTtNQUNsQixJQUFDO01BRUQsTUFBTTtRQUFDM0M7TUFBTSxJQUFJRixPQUFBO01BQ2pCLE1BQU1TLE1BQUEsR0FBU2pCLEtBQUEsQ0FBQTZCLGFBQUEsQ0FBQ25CLE1BQUEsRUFBTTtRQUFDNkMsR0FBQSxFQUFJO1FBQVEsR0FBSzNDO01BQUs7TUFDN0MsQ0FBQ1UsT0FBQSxJQUFXK0IsTUFBQSxLQUFXUyxRQUFBLENBQVNDLElBQUEsQ0FBSzlDLE1BQU07TUFFM0MsT0FBUWpCLEtBQUEsQ0FBQTZCLGFBQUEsQ0FBQTdCLEtBQUEsQ0FBQTRELFFBQUEsUUFBR0UsUUFBUTtJQUN2Qjs7Ozs7Ozs7Ozs7O0lDdEJNLE1BQU9yQyxPQUFBLENBQU87TUFDaEIsQ0FBQWYsTUFBQTtNQUNBLElBQUlBLE9BQUEsRUFBTTtRQUNOLE9BQU8sS0FBSyxDQUFBQSxNQUFBLENBQVFBLE1BQUE7TUFDeEI7TUFHQStCLE9BQUEsR0FBVUEsQ0FBQSxLQUFZO01BRXRCMkIsWUFBWTFELE1BQUEsRUFBNkI7UUFDckMsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7TUFDbkI7O0lBQ0haLE9BQUEsQ0FBQTJCLE9BQUEsR0FBQUEsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2R1Y3RzLWxpc3Qvb3V0In0=","dependencies":[{"id":"@beyond-js/kernel@0.1.9/bundle","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\@beyond-js\\kernel"},{"id":"react@18.2.0","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\react"},{"id":"scheduler@0.23.0","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\scheduler"},{"id":"react-dom@18.2.0","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\react-dom"},{"id":"react-dom@18.2.0/client","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\react-dom"},{"id":"@beyond-js/kernel@0.1.9/core","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.4/render","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\@beyond-js\\widgets"},{"id":"@beyond-js/kernel@0.1.9/styles","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.4/controller","path":"C:\\Users\\Gabigol\\Documents\\exercises\\products-list\\node_modules\\@beyond-js\\widgets"}],"warnings":[]}