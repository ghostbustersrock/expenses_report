import {
  DefaultPropsProvider_default,
  GlobalStyles_default,
  _extends,
  capitalize,
  clsx_default,
  composeClasses,
  css,
  defaultTheme_default,
  exactProp,
  extendSxProp,
  generateUtilityClass,
  generateUtilityClasses,
  identifier_default,
  keyframes,
  require_jsx_runtime,
  require_prop_types,
  require_react,
  resolveProps,
  rootShouldForwardProp_default,
  shouldForwardProp,
  styled_default,
  unstable_createUseMediaQuery,
  unstable_memoTheme,
  useDefaultProps,
  useEnhancedEffect_default,
  useId,
  useRtl,
  useTheme,
  useThemeProps
} from "./chunk-7IJQBEBZ.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-DC5AMYBS.js";

// ../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is2(x2, y2) {
        return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React93.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState15({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect27(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React93 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is2, useState15 = React93.useState, useEffect27 = React93.useEffect, useLayoutEffect = React93.useLayoutEffect, useDebugValue = React93.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React93.useSyncExternalStore ? React93.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// ../node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "../node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// ../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is2(x2, y2) {
        return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React93 = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is2, useSyncExternalStore2 = shim.useSyncExternalStore, useRef21 = React93.useRef, useEffect27 = React93.useEffect, useMemo13 = React93.useMemo, useDebugValue = React93.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef21(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo13(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
        useEffect27(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// ../node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "../node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// ../node_modules/bezier-easing/src/index.js
var require_src = __commonJS({
  "../node_modules/bezier-easing/src/index.js"(exports, module) {
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 1e-3;
    var SUBDIVISION_PRECISION = 1e-7;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1 / (kSplineTableSize - 1);
    var float32ArraySupported = typeof Float32Array === "function";
    function A2(aA1, aA2) {
      return 1 - 3 * aA2 + 3 * aA1;
    }
    function B2(aA1, aA2) {
      return 3 * aA2 - 6 * aA1;
    }
    function C2(aA1) {
      return 3 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
      return ((A2(aA1, aA2) * aT + B2(aA1, aA2)) * aT + C2(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
      return 3 * A2(aA1, aA2) * aT * aT + 2 * B2(aA1, aA2) * aT + C2(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX, currentT, i = 0;
      do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
      return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) {
          return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }
    function LinearEasing(x2) {
      return x2;
    }
    module.exports = function bezier(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error("bezier x values must be in [0, 1] range");
      }
      if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
      }
      var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
      function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
      return function BezierEasing2(x2) {
        if (x2 === 0) {
          return 0;
        }
        if (x2 === 1) {
          return 1;
        }
        return calcBezier(getTForX(x2), mY1, mY2);
      };
    };
  }
});

// ../node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({
  "../node_modules/react-dom/cjs/react-dom.development.js"(exports) {
    "use strict";
    (function() {
      function noop3() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function createPortal$1(children2, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        try {
          testStringCoercion(key);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        JSCompiler_inline_result && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
        ), testStringCoercion(key));
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: null == key ? null : "" + key,
          children: children2,
          containerInfo,
          implementation
        };
      }
      function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input)
          return "use-credentials" === input ? input : "";
      }
      function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
      }
      function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React93 = require_react(), Internals = {
        d: {
          f: noop3,
          r: function() {
            throw Error(
              "Invalid form element. requestFormReset must be passed a form that was rendered by React."
            );
          },
          D: noop3,
          C: noop3,
          L: noop3,
          m: noop3,
          X: noop3,
          S: noop3,
          M: noop3
        },
        p: 0,
        findDOMNode: null
      }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React93.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      );
      exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
      exports.createPortal = function(children2, container) {
        var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
          throw Error("Target container is not a DOM element.");
        return createPortal$1(children2, container, null, key);
      };
      exports.flushSync = function(fn2) {
        var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
        try {
          if (ReactSharedInternals.T = null, Internals.p = 2, fn2)
            return fn2();
        } finally {
          ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error(
            "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
          );
        }
      };
      exports.preconnect = function(href, options) {
        "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error(
          "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : null != options && "string" !== typeof options.crossOrigin && console.error(
          "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
          getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
        ) : console.error(
          "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
      };
      exports.prefetchDNS = function(href) {
        if ("string" !== typeof href || !href)
          console.error(
            "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
        else if (1 < arguments.length) {
          var options = arguments[1];
          "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          );
        }
        "string" === typeof href && Internals.d.D(href);
      };
      exports.preinit = function(href, options) {
        "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error(
          "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : "style" !== options.as && "script" !== options.as && console.error(
          'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
          getValueDescriptorExpectingEnumForWarning(options.as)
        ) : console.error(
          "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        if ("string" === typeof href && options && "string" === typeof options.as) {
          var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
          "style" === as ? Internals.d.S(
            href,
            "string" === typeof options.precedence ? options.precedence : void 0,
            {
              crossOrigin,
              integrity,
              fetchPriority
            }
          ) : "script" === as && Internals.d.X(href, {
            crossOrigin,
            integrity,
            fetchPriority,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0
          });
        }
      };
      exports.preinitModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
        if (encountered)
          console.error(
            "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
            encountered
          );
        else
          switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
            case "script":
              break;
            default:
              encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error(
                'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                encountered,
                href
              );
          }
        if ("string" === typeof href)
          if ("object" === typeof options && null !== options) {
            if (null == options.as || "script" === options.as)
              encountered = getCrossOriginStringAs(
                options.as,
                options.crossOrigin
              ), Internals.d.M(href, {
                crossOrigin: encountered,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0
              });
          } else null == options && Internals.d.M(href);
      };
      exports.preload = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
          encountered
        );
        if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
          encountered = options.as;
          var crossOrigin = getCrossOriginStringAs(
            encountered,
            options.crossOrigin
          );
          Internals.d.L(href, encountered, {
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0,
            type: "string" === typeof options.type ? options.type : void 0,
            fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
            referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
            imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
            imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
            media: "string" === typeof options.media ? options.media : void 0
          });
        }
      };
      exports.preloadModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
          encountered
        );
        "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        ), Internals.d.m(href, {
          as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
          crossOrigin: encountered,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0
        })) : Internals.d.m(href));
      };
      exports.requestFormReset = function(form) {
        Internals.d.r(form);
      };
      exports.unstable_batchedUpdates = function(fn2, a2) {
        return fn2(a2);
      };
      exports.useFormState = function(action, initialState, permalink) {
        return resolveDispatcher().useFormState(action, initialState, permalink);
      };
      exports.useFormStatus = function() {
        return resolveDispatcher().useHostTransitionStatus();
      };
      exports.version = "19.2.3";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// ../node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "../node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    if (false) {
      checkDCE();
      module.exports = null;
    } else {
      module.exports = require_react_dom_development();
    }
  }
});

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// ../node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var React = __toESM(require_react(), 1);
function useForkRef(...refs) {
  const cleanupRef = React.useRef(void 0);
  const refEffect = React.useCallback((instance) => {
    const cleanups = refs.map((ref) => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === "function") {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === "function" ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach((refCleanup) => refCleanup == null ? void 0 : refCleanup());
    };
  }, refs);
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
  }, refs);
}

// ../node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}
var isHostComponent_default = isHostComponent;

// ../node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent_default(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
var appendOwnerState_default = appendOwnerState;

// ../node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var extractEventHandlers_default = extractEventHandlers;

// ../node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var omitEventHandlers_default = omitEventHandlers;

// ../node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_default(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = {
      ...additionalProps == null ? void 0 : additionalProps.style,
      ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
      ...externalSlotProps == null ? void 0 : externalSlotProps.style
    };
    const props2 = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers_default({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_default(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_default(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = {
    ...internalSlotProps == null ? void 0 : internalSlotProps.style,
    ...additionalProps == null ? void 0 : additionalProps.style,
    ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
    ...externalSlotProps == null ? void 0 : externalSlotProps.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
var mergeSlotProps_default = mergeSlotProps;

// ../node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
var resolveComponentProps_default = resolveComponentProps;

// ../node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
function useSlotProps(parameters) {
  var _a;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps_default(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps_default({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_a = parameters.additionalProps) == null ? void 0 : _a.ref);
  const props = appendOwnerState_default(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}
var useSlotProps_default = useSlotProps;

// ../node_modules/@mui/x-internals/esm/reactMajor/index.js
var React2 = __toESM(require_react(), 1);
var reactMajor_default = parseInt(React2.version, 10);

// ../node_modules/@mui/x-charts/esm/constants/index.js
var DEFAULT_X_AXIS_KEY = "DEFAULT_X_AXIS_KEY";
var DEFAULT_Y_AXIS_KEY = "DEFAULT_Y_AXIS_KEY";
var DEFAULT_ROTATION_AXIS_KEY = "DEFAULT_ROTATION_AXIS_KEY";
var DEFAULT_RADIUS_AXIS_KEY = "DEFAULT_RADIUS_AXIS_KEY";
var DEFAULT_MARGINS = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
};
var DEFAULT_AXIS_SIZE_WIDTH = 45;
var DEFAULT_AXIS_SIZE_HEIGHT = 25;
var AXIS_LABEL_DEFAULT_HEIGHT = 20;

// ../node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var React3 = __toESM(require_react(), 1);
function useEventCallback(fn2) {
  const ref = React3.useRef(fn2);
  useEnhancedEffect_default(() => {
    ref.current = fn2;
  });
  return React3.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var useEventCallback_default = useEventCallback;

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartInteraction/useChartInteraction.js
var useChartInteraction = ({
  store
}) => {
  const cleanInteraction = useEventCallback_default(function cleanInteraction2() {
    store.update({
      interaction: _extends({}, store.state.interaction, {
        pointer: null
      })
    });
  });
  const setLastUpdateSource = useEventCallback_default(function setLastUpdateSource2(interaction) {
    if (store.state.interaction.lastUpdate !== interaction) {
      store.set("interaction", _extends({}, store.state.interaction, {
        lastUpdate: interaction
      }));
    }
  });
  const setPointerCoordinate = useEventCallback_default(function setPointerCoordinate2(coordinate) {
    store.set("interaction", _extends({}, store.state.interaction, {
      pointer: coordinate,
      lastUpdate: coordinate !== null ? "pointer" : store.state.interaction.lastUpdate
    }));
  });
  return {
    instance: {
      cleanInteraction,
      setLastUpdateSource,
      setPointerCoordinate
    }
  };
};
useChartInteraction.getInitialState = () => ({
  interaction: {
    item: null,
    pointer: null,
    lastUpdate: "pointer"
  }
});
useChartInteraction.params = {};

// ../node_modules/reselect/dist/reselect.mjs
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult) => {
  if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
    let isInputSameAsOutput = false;
    try {
      const emptyObject = {};
      if (resultFunc(emptyObject) === emptyObject)
        isInputSameAsOutput = true;
    } catch {
    }
    if (isInputSameAsOutput) {
      let stack = void 0;
      try {
        throw new Error();
      } catch (e) {
        ;
        ({ stack } = e);
      }
      console.warn(
        "The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.",
        { stack }
      );
    }
  }
};
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs) => {
  const { memoize, memoizeOptions } = options;
  const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
  const createAnEmptyObject = memoize(() => ({}), ...memoizeOptions);
  const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
  if (!areInputSelectorResultsEqual) {
    let stack = void 0;
    try {
      throw new Error();
    } catch (e) {
      ;
      ({ stack } = e);
    }
    console.warn(
      "An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`",
      {
        arguments: inputSelectorArgs,
        firstInputs: inputSelectorResults,
        secondInputs: inputSelectorResultsCopy,
        stack
      }
    );
  }
};
var globalDevModeChecks = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
var NOT_FOUND = Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array2, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array2.every((item) => typeof item === "function")) {
    const itemTypes = array2.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const { length } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks) => {
  const { identityFunctionCheck, inputStabilityCheck } = {
    ...globalDevModeChecks,
    ...devModeChecks
  };
  return {
    identityFunctionCheck: {
      shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
      run: runIdentityFunctionCheck
    },
    inputStabilityCheck: {
      shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
      run: runInputStabilityCheck
    }
  };
};
var REDUX_PROXY_LABEL = Symbol();
var proto = Object.getPrototypeOf({});
function createSingletonCache(equals) {
  let entry;
  return {
    get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put(key, value) {
      entry = { key, value };
    },
    getEntries() {
      return entry ? [entry] : [];
    },
    clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  let entries = [];
  function get(key) {
    const cacheIndex = entries.findIndex((entry) => equals(key, entry.key));
    if (cacheIndex > -1) {
      const entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({ key, value });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return { get, put, getEntries, clear };
}
var referenceEqualityCheck = (a2, b) => a2 === b;
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    const { length } = prev;
    for (let i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function lruMemoize(func, equalityCheckOrOptions) {
  const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : { equalityCheck: equalityCheckOrOptions };
  const {
    equalityCheck = referenceEqualityCheck,
    maxSize = 1,
    resultEqualityCheck
  } = providedOptions;
  const comparator = createCacheKeyComparator(equalityCheck);
  let resultsCount = 0;
  const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    let value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const entries = cache.getEntries();
        const matchingEntry = entries.find(
          (entry) => resultEqualityCheck(entry.value, value)
        );
        if (matchingEntry) {
          value = matchingEntry.value;
          resultsCount !== 0 && resultsCount--;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = () => {
    cache.clear();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    var _a;
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const lastResultValue = ((_a = lastResult == null ? void 0 : lastResult.deref) == null ? void 0 : _a.call(lastResult)) ?? lastResult;
        if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
          result = lastResultValue;
          resultsCount !== 0 && resultsCount--;
        }
        const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
        lastResult = needsWeakRef ? new Ref(result) : result;
      }
    }
    terminatedNode.s = TERMINATED;
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector22 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = [],
      devModeChecks = {}
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    let firstRun = true;
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(
        dependencies,
        arguments
      );
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      if (true) {
        const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
        if (identityFunctionCheck.shouldRun) {
          identityFunctionCheck.run(
            resultFunc,
            inputSelectorResults,
            lastResult
          );
        }
        if (inputStabilityCheck.shouldRun) {
          const inputSelectorResultsCopy = collectInputSelectorResults(
            dependencies,
            arguments
          );
          inputStabilityCheck.run(
            { inputSelectorResults, inputSelectorResultsCopy },
            { memoize, memoizeOptions: finalMemoizeOptions },
            arguments
          );
        }
        if (firstRun)
          firstRun = false;
      }
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector22, {
    withTypes: () => createSelector22
  });
  return createSelector22;
}
var createSelector = createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign(
  (inputSelectorsObject, selectorCreator = createSelector) => {
    assertIsObject(
      inputSelectorsObject,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
    );
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map(
      (key) => inputSelectorsObject[key]
    );
    const structuredSelector = selectorCreator(
      dependencies,
      (...inputSelectorResults) => {
        return inputSelectorResults.reduce((composition, value, index2) => {
          composition[inputSelectorKeys[index2]] = value;
          return composition;
        }, {});
      }
    );
    return structuredSelector;
  },
  { withTypes: () => createStructuredSelector }
);

// ../node_modules/@mui/x-internals/esm/store/createSelector.js
var reselectCreateSelector = createSelectorCreator({
  memoize: lruMemoize,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is
  }
});
var createSelector2 = (a2, b, c2, d, e, f, g, h, ...other) => {
  if (other.length > 0) {
    throw new Error("Unsupported number of selectors");
  }
  let selector;
  if (a2 && b && c2 && d && e && f && g && h) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b(state, a1, a22, a3);
      const vc = c2(state, a1, a22, a3);
      const vd = d(state, a1, a22, a3);
      const ve = e(state, a1, a22, a3);
      const vf = f(state, a1, a22, a3);
      const vg = g(state, a1, a22, a3);
      return h(va, vb, vc, vd, ve, vf, vg, a1, a22, a3);
    };
  } else if (a2 && b && c2 && d && e && f && g) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b(state, a1, a22, a3);
      const vc = c2(state, a1, a22, a3);
      const vd = d(state, a1, a22, a3);
      const ve = e(state, a1, a22, a3);
      const vf = f(state, a1, a22, a3);
      return g(va, vb, vc, vd, ve, vf, a1, a22, a3);
    };
  } else if (a2 && b && c2 && d && e && f) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b(state, a1, a22, a3);
      const vc = c2(state, a1, a22, a3);
      const vd = d(state, a1, a22, a3);
      const ve = e(state, a1, a22, a3);
      return f(va, vb, vc, vd, ve, a1, a22, a3);
    };
  } else if (a2 && b && c2 && d && e) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b(state, a1, a22, a3);
      const vc = c2(state, a1, a22, a3);
      const vd = d(state, a1, a22, a3);
      return e(va, vb, vc, vd, a1, a22, a3);
    };
  } else if (a2 && b && c2 && d) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b(state, a1, a22, a3);
      const vc = c2(state, a1, a22, a3);
      return d(va, vb, vc, a1, a22, a3);
    };
  } else if (a2 && b && c2) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b(state, a1, a22, a3);
      return c2(va, vb, a1, a22, a3);
    };
  } else if (a2 && b) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      return b(va, a1, a22, a3);
    };
  } else if (a2) {
    selector = a2;
  } else {
    throw new Error("Missing arguments");
  }
  return selector;
};
var createSelectorMemoizedWithOptions = (options) => (...inputs) => {
  const cache = /* @__PURE__ */ new WeakMap();
  let nextCacheId = 1;
  const combiner = inputs[inputs.length - 1];
  const nSelectors = inputs.length - 1 || 1;
  const argsLength = Math.max(combiner.length - nSelectors, 0);
  if (argsLength > 3) {
    throw new Error("Unsupported number of arguments");
  }
  const selector = (state, a1, a2, a3) => {
    let cacheKey = state.__cacheKey__;
    if (!cacheKey) {
      cacheKey = {
        id: nextCacheId
      };
      state.__cacheKey__ = cacheKey;
      nextCacheId += 1;
    }
    let fn2 = cache.get(cacheKey);
    if (!fn2) {
      const selectors = inputs.length === 1 ? [(x2) => x2, combiner] : inputs;
      let reselectArgs = inputs;
      const selectorArgs = [void 0, void 0, void 0];
      switch (argsLength) {
        case 0:
          break;
        case 1: {
          reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], combiner];
          break;
        }
        case 2: {
          reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], () => selectorArgs[1], combiner];
          break;
        }
        case 3: {
          reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], () => selectorArgs[1], () => selectorArgs[2], combiner];
          break;
        }
        default:
          throw new Error("Unsupported number of arguments");
      }
      if (options) {
        reselectArgs = [...reselectArgs, options];
      }
      fn2 = reselectCreateSelector(...reselectArgs);
      fn2.selectorArgs = selectorArgs;
      cache.set(cacheKey, fn2);
    }
    switch (argsLength) {
      case 3:
        fn2.selectorArgs[2] = a3;
      case 2:
        fn2.selectorArgs[1] = a2;
      case 1:
        fn2.selectorArgs[0] = a1;
      case 0:
      default:
    }
    switch (argsLength) {
      case 0:
        return fn2(state);
      case 1:
        return fn2(state, a1);
      case 2:
        return fn2(state, a1, a2);
      case 3:
        return fn2(state, a1, a2, a3);
      default:
        throw new Error("unreachable");
    }
  };
  return selector;
};
var createSelectorMemoized = createSelectorMemoizedWithOptions();

// ../node_modules/@mui/x-internals/esm/store/useStore.js
var React4 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var canUseRawUseSyncExternalStore = reactMajor_default >= 19;
var useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreR19 : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React4.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return (0, import_shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}

// ../node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
var React5 = __toESM(require_react(), 1);
var UNINITIALIZED = {};
function useLazyRef(init, initArg) {
  const ref = React5.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// ../node_modules/@mui/utils/esm/useOnMount/useOnMount.js
var React6 = __toESM(require_react(), 1);
var EMPTY = [];
function useOnMount(fn2) {
  React6.useEffect(fn2, EMPTY);
}

// ../node_modules/@mui/x-internals/esm/store/useStoreEffect.js
var noop = () => {
};
function useStoreEffect(store, selector, effect4) {
  const instance = useLazyRef(initialize, {
    store,
    selector
  }).current;
  instance.effect = effect4;
  useOnMount(instance.onMount);
}
function initialize(params) {
  const {
    store,
    selector
  } = params;
  let previousState = selector(store.state);
  const instance = {
    effect: noop,
    dispose: null,
    // We want a single subscription done right away and cleared on unmount only,
    // but React triggers `useOnMount` multiple times in dev, so we need to manage
    // the subscription anyway.
    subscribe: () => {
      instance.dispose ?? (instance.dispose = store.subscribe((state) => {
        const nextState = selector(state);
        if (!Object.is(previousState, nextState)) {
          const prev = previousState;
          previousState = nextState;
          instance.effect(prev, nextState);
        }
      }));
    },
    onMount: () => {
      instance.subscribe();
      return () => {
        var _a;
        (_a = instance.dispose) == null ? void 0 : _a.call(instance);
        instance.dispose = null;
      };
    }
  };
  instance.subscribe();
  return instance;
}

// ../node_modules/@mui/x-internals/esm/store/Store.js
var Store = class _Store {
  constructor(state) {
    __publicField(this, "subscribe", (fn2) => {
      this.listeners.add(fn2);
      return () => {
        this.listeners.delete(fn2);
      };
    });
    /**
     * Returns the current state snapshot. Meant for usage with `useSyncExternalStore`.
     * If you want to access the state, use the `state` property instead.
     */
    __publicField(this, "getSnapshot", () => {
      return this.state;
    });
    __publicField(this, "use", /* @__PURE__ */ (() => (selector, a1, a2, a3) => {
      return useStore(this, selector, a1, a2, a3);
    })());
    this.state = state;
    this.listeners = /* @__PURE__ */ new Set();
    this.updateTick = 0;
  }
  // HACK: `any` fixes adding listeners that accept partial state.
  // Internal state to handle recursive `setState()` calls
  static create(state) {
    return new _Store(state);
  }
  setState(newState) {
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    const it = this.listeners.values();
    let result;
    while (result = it.next(), !result.done) {
      if (currentTick !== this.updateTick) {
        return;
      }
      const listener = result.value;
      listener(newState);
    }
  }
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState(_extends({}, this.state, changes));
        return;
      }
    }
  }
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState(_extends({}, this.state, {
        [key]: value
      }));
    }
  }
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartInteraction/useChartInteraction.selectors.js
var selectInteraction = (state) => state.interaction;
var selectorChartsInteractionIsInitialized = createSelector2(selectInteraction, (interaction) => interaction !== void 0);
var selectorChartsInteractionPointer = createSelector2(selectInteraction, (interaction) => (interaction == null ? void 0 : interaction.pointer) ?? null);
var selectorChartsInteractionPointerX = createSelector2(selectorChartsInteractionPointer, (pointer) => pointer && pointer.x);
var selectorChartsInteractionPointerY = createSelector2(selectorChartsInteractionPointer, (pointer) => pointer && pointer.y);
var selectorChartsLastInteraction = createSelector2(selectInteraction, (interaction) => interaction == null ? void 0 : interaction.lastUpdate);

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxis.js
var React10 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-internals/esm/useAssertModelConsistency/useAssertModelConsistency.js
var React7 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-internals/esm/warning/warning.js
var warnedOnceCache = /* @__PURE__ */ new Set();
function warnOnce(message, gravity = "warning") {
  if (false) {
    return;
  }
  const cleanMessage = Array.isArray(message) ? message.join("\n") : message;
  if (!warnedOnceCache.has(cleanMessage)) {
    warnedOnceCache.add(cleanMessage);
    if (gravity === "error") {
      console.error(cleanMessage);
    } else {
      console.warn(cleanMessage);
    }
  }
}

// ../node_modules/@mui/x-internals/esm/useAssertModelConsistency/useAssertModelConsistency.js
function useAssertModelConsistencyOutsideOfProduction(parameters) {
  const {
    componentName,
    propName,
    controlled,
    defaultValue,
    warningPrefix = "MUI X"
  } = parameters;
  const [{
    initialDefaultValue,
    isControlled
  }] = React7.useState({
    initialDefaultValue: defaultValue,
    isControlled: controlled !== void 0
  });
  if (isControlled !== (controlled !== void 0)) {
    warnOnce([`${warningPrefix}: A component is changing the ${isControlled ? "" : "un"}controlled ${propName} state of ${componentName} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${propName} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"], "error");
  }
  if (JSON.stringify(initialDefaultValue) !== JSON.stringify(defaultValue)) {
    warnOnce([`${warningPrefix}: A component is changing the default ${propName} state of an uncontrolled ${componentName} after being initialized. To suppress this warning opt to use a controlled ${componentName}.`], "error");
  }
}
var useAssertModelConsistency = false ? () => {
} : useAssertModelConsistencyOutsideOfProduction;

// ../node_modules/@mui/x-charts/esm/colorPalettes/categorical/rainbowSurge.js
var rainbowSurgePaletteLight = ["#4254FB", "#FFB422", "#FA4F58", "#0DBEFF", "#22BF75", "#FA83B4", "#FF7511"];
var rainbowSurgePaletteDark = ["#495AFB", "#FFC758", "#F35865", "#30C8FF", "#44CE8D", "#F286B3", "#FF8C39"];
var rainbowSurgePalette = (mode2) => mode2 === "dark" ? rainbowSurgePaletteDark : rainbowSurgePaletteLight;

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxisLayout.selectors.js
var selectorChartRawXAxis = (state) => {
  var _a;
  return (_a = state.cartesianAxis) == null ? void 0 : _a.x;
};
var selectorChartRawYAxis = (state) => {
  var _a;
  return (_a = state.cartesianAxis) == null ? void 0 : _a.y;
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartAxisSize.selectors.js
var selectorChartLeftAxisSize = createSelector2(selectorChartRawYAxis, function selectorChartLeftAxisSize2(yAxis) {
  return (yAxis ?? []).reduce((acc, axis) => {
    var _a;
    return axis.position === "left" ? acc + (axis.width || 0) + (((_a = axis.zoom) == null ? void 0 : _a.slider.enabled) ? axis.zoom.slider.size : 0) : acc;
  }, 0);
});
var selectorChartRightAxisSize = createSelector2(selectorChartRawYAxis, function selectorChartRightAxisSize2(yAxis) {
  return (yAxis ?? []).reduce((acc, axis) => {
    var _a;
    return axis.position === "right" ? acc + (axis.width || 0) + (((_a = axis.zoom) == null ? void 0 : _a.slider.enabled) ? axis.zoom.slider.size : 0) : acc;
  }, 0);
});
var selectorChartTopAxisSize = createSelector2(selectorChartRawXAxis, function selectorChartTopAxisSize2(xAxis) {
  return (xAxis ?? []).reduce((acc, axis) => {
    var _a;
    return axis.position === "top" ? acc + (axis.height || 0) + (((_a = axis.zoom) == null ? void 0 : _a.slider.enabled) ? axis.zoom.slider.size : 0) : acc;
  }, 0);
});
var selectorChartBottomAxisSize = createSelector2(selectorChartRawXAxis, function selectorChartBottomAxisSize2(xAxis) {
  return (xAxis ?? []).reduce((acc, axis) => {
    var _a;
    return axis.position === "bottom" ? acc + (axis.height || 0) + (((_a = axis.zoom) == null ? void 0 : _a.slider.enabled) ? axis.zoom.slider.size : 0) : acc;
  }, 0);
});
var selectorChartAxisSizes = createSelectorMemoized(selectorChartLeftAxisSize, selectorChartRightAxisSize, selectorChartTopAxisSize, selectorChartBottomAxisSize, function selectorChartAxisSizes2(left2, right2, top2, bottom2) {
  return {
    left: left2,
    right: right2,
    top: top2,
    bottom: bottom2
  };
});

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartDimensions/useChartDimensions.selectors.js
var selectorChartDimensionsState = (state) => state.dimensions;
var selectorChartMargin = (state) => state.dimensions.margin;
var selectorChartDrawingArea = createSelectorMemoized(selectorChartDimensionsState, selectorChartMargin, selectorChartAxisSizes, function selectorChartDrawingArea2({
  width,
  height
}, {
  top: marginTop,
  right: marginRight,
  bottom: marginBottom,
  left: marginLeft
}, {
  left: axisSizeLeft,
  right: axisSizeRight,
  top: axisSizeTop,
  bottom: axisSizeBottom
}) {
  return {
    width: width - marginLeft - marginRight - axisSizeLeft - axisSizeRight,
    left: marginLeft + axisSizeLeft,
    right: marginRight + axisSizeRight,
    height: height - marginTop - marginBottom - axisSizeTop - axisSizeBottom,
    top: marginTop + axisSizeTop,
    bottom: marginBottom + axisSizeBottom
  };
});
var selectorChartSvgWidth = createSelector2(selectorChartDimensionsState, (dimensionsState) => dimensionsState.width);
var selectorChartSvgHeight = createSelector2(selectorChartDimensionsState, (dimensionsState) => dimensionsState.height);
var selectorChartPropsWidth = createSelector2(selectorChartDimensionsState, (dimensionsState) => dimensionsState.propsWidth);
var selectorChartPropsHeight = createSelector2(selectorChartDimensionsState, (dimensionsState) => dimensionsState.propsHeight);

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartSeries/processSeries.js
var defaultizeSeries = ({
  series,
  colors,
  seriesConfig
}) => {
  const seriesGroups = {};
  series.forEach((seriesData, seriesIndex) => {
    var _a;
    const seriesWithDefaultValues = seriesConfig[seriesData.type].getSeriesWithDefaultValues(seriesData, seriesIndex, colors);
    const id = seriesWithDefaultValues.id;
    if (seriesGroups[seriesData.type] === void 0) {
      seriesGroups[seriesData.type] = {
        series: {},
        seriesOrder: []
      };
    }
    if (((_a = seriesGroups[seriesData.type]) == null ? void 0 : _a.series[id]) !== void 0) {
      throw new Error(`MUI X Charts: series' id "${id}" is not unique.`);
    }
    seriesGroups[seriesData.type].series[id] = seriesWithDefaultValues;
    seriesGroups[seriesData.type].seriesOrder.push(id);
  });
  return seriesGroups;
};
var applySeriesProcessors = (defaultizedSeries, seriesConfig, dataset) => {
  const processedSeries = {};
  Object.keys(seriesConfig).forEach((type) => {
    var _a, _b;
    const group2 = defaultizedSeries[type];
    if (group2 !== void 0) {
      processedSeries[type] = ((_b = (_a = seriesConfig[type]) == null ? void 0 : _a.seriesProcessor) == null ? void 0 : _b.call(_a, group2, dataset)) ?? group2;
    }
  });
  return processedSeries;
};
var applySeriesLayout = (processedSeries, seriesConfig, drawingArea) => {
  let processingDetected = false;
  const seriesLayout2 = {};
  Object.keys(processedSeries).forEach((type) => {
    var _a;
    const processor = (_a = seriesConfig[type]) == null ? void 0 : _a.seriesLayout;
    const thisSeries = processedSeries[type];
    if (processor !== void 0 && thisSeries !== void 0) {
      const newValue = processor(thisSeries, drawingArea);
      if (newValue && newValue !== processedSeries[type]) {
        processingDetected = true;
        seriesLayout2[type] = newValue;
      }
    }
  });
  if (!processingDetected) {
    return {};
  }
  return seriesLayout2;
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartSeries/useChartSeries.selectors.js
var selectorChartSeriesState = (state) => state.series;
var selectorChartDefaultizedSeries = createSelector2(selectorChartSeriesState, (seriesState) => seriesState.defaultizedSeries);
var selectorChartSeriesConfig = createSelector2(selectorChartSeriesState, (seriesState) => seriesState.seriesConfig);
var selectorChartDataset = createSelector2(selectorChartSeriesState, (seriesState) => seriesState.dataset);
var selectorChartSeriesProcessed = createSelectorMemoized(selectorChartDefaultizedSeries, selectorChartSeriesConfig, selectorChartDataset, function selectorChartSeriesProcessed2(defaultizedSeries, seriesConfig, dataset) {
  return applySeriesProcessors(defaultizedSeries, seriesConfig, dataset);
});
var selectorChartSeriesLayout = createSelectorMemoized(selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorChartDrawingArea, function selectorChartSeriesLayout2(processedSeries, seriesConfig, drawingArea) {
  return applySeriesLayout(processedSeries, seriesConfig, drawingArea);
});

// ../node_modules/@mui/x-charts/esm/internals/constants.js
var ZOOM_SLIDER_MARGIN = 4;
var ZOOM_SLIDER_PREVIEW_SIZE = 40;
var DEFAULT_ZOOM_SLIDER_SIZE = 20 + 2 * ZOOM_SLIDER_MARGIN;
var DEFAULT_ZOOM_SLIDER_PREVIEW_SIZE = 40 + 2 * ZOOM_SLIDER_MARGIN;
var DEFAULT_ZOOM_SLIDER_SHOW_TOOLTIP = "hover";

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/defaultizeZoom.js
var defaultZoomOptions = {
  minStart: 0,
  maxEnd: 100,
  step: 5,
  minSpan: 10,
  maxSpan: 100,
  panning: true,
  filterMode: "keep",
  reverse: false,
  slider: {
    enabled: false,
    preview: false,
    size: DEFAULT_ZOOM_SLIDER_SIZE,
    showTooltip: DEFAULT_ZOOM_SLIDER_SHOW_TOOLTIP
  }
};
var defaultizeZoom = (zoom, axisId, axisDirection, reverse2) => {
  var _a;
  if (!zoom) {
    return void 0;
  }
  if (zoom === true) {
    return _extends({
      axisId,
      axisDirection
    }, defaultZoomOptions, {
      reverse: reverse2 ?? false
    });
  }
  return _extends({
    axisId,
    axisDirection
  }, defaultZoomOptions, {
    reverse: reverse2 ?? false
  }, zoom, {
    slider: _extends({}, defaultZoomOptions.slider, {
      size: ((_a = zoom.slider) == null ? void 0 : _a.preview) ?? defaultZoomOptions.slider.preview ? DEFAULT_ZOOM_SLIDER_PREVIEW_SIZE : DEFAULT_ZOOM_SLIDER_SIZE
    }, zoom.slider)
  });
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/defaultizeAxis.js
function defaultizeXAxis(inAxes, dataset) {
  const offsets = {
    top: 0,
    bottom: 0,
    none: 0
  };
  const inputAxes = inAxes && inAxes.length > 0 ? inAxes : [{
    id: DEFAULT_X_AXIS_KEY,
    scaleType: "linear"
  }];
  const parsedAxes = inputAxes.map((axisConfig, index2) => {
    var _a;
    const dataKey = axisConfig.dataKey;
    const defaultPosition = index2 === 0 ? "bottom" : "none";
    const position = axisConfig.position ?? defaultPosition;
    const defaultHeight = DEFAULT_AXIS_SIZE_HEIGHT + (axisConfig.label ? AXIS_LABEL_DEFAULT_HEIGHT : 0);
    const id = axisConfig.id ?? `defaultized-x-axis-${index2}`;
    const sharedConfig = _extends({
      offset: offsets[position]
    }, axisConfig, {
      id,
      position,
      height: axisConfig.height ?? defaultHeight,
      zoom: defaultizeZoom(axisConfig.zoom, id, "x", axisConfig.reverse)
    });
    if (position !== "none") {
      offsets[position] += sharedConfig.height;
      if ((_a = sharedConfig.zoom) == null ? void 0 : _a.slider.enabled) {
        offsets[position] += sharedConfig.zoom.slider.size;
      }
    }
    if (dataKey === void 0 || axisConfig.data !== void 0) {
      return sharedConfig;
    }
    if (dataset === void 0) {
      throw new Error(`MUI X Charts: x-axis uses \`dataKey\` but no \`dataset\` is provided.`);
    }
    return _extends({}, sharedConfig, {
      data: dataset.map((d) => d[dataKey])
    });
  });
  return parsedAxes;
}
function defaultizeYAxis(inAxes, dataset) {
  const offsets = {
    right: 0,
    left: 0,
    none: 0
  };
  const inputAxes = inAxes && inAxes.length > 0 ? inAxes : [{
    id: DEFAULT_Y_AXIS_KEY,
    scaleType: "linear"
  }];
  const parsedAxes = inputAxes.map((axisConfig, index2) => {
    var _a;
    const dataKey = axisConfig.dataKey;
    const defaultPosition = index2 === 0 ? "left" : "none";
    const position = axisConfig.position ?? defaultPosition;
    const defaultWidth = DEFAULT_AXIS_SIZE_WIDTH + (axisConfig.label ? AXIS_LABEL_DEFAULT_HEIGHT : 0);
    const id = axisConfig.id ?? `defaultized-y-axis-${index2}`;
    const sharedConfig = _extends({
      offset: offsets[position]
    }, axisConfig, {
      id,
      position,
      width: axisConfig.width ?? defaultWidth,
      zoom: defaultizeZoom(axisConfig.zoom, id, "y", axisConfig.reverse)
    });
    if (position !== "none") {
      offsets[position] += sharedConfig.width;
      if ((_a = sharedConfig.zoom) == null ? void 0 : _a.slider.enabled) {
        offsets[position] += sharedConfig.zoom.slider.size;
      }
    }
    if (dataKey === void 0 || axisConfig.data !== void 0) {
      return sharedConfig;
    }
    if (dataset === void 0) {
      throw new Error(`MUI X Charts: y-axis uses \`dataKey\` but no \`dataset\` is provided.`);
    }
    return _extends({}, sharedConfig, {
      data: dataset.map((d) => d[dataKey])
    });
  });
  return parsedAxes;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartDimensions/useChartDimensions.js
var React9 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-internals/esm/useEffectAfterFirstRender/useEffectAfterFirstRender.js
var React8 = __toESM(require_react(), 1);
function useEffectAfterFirstRender(effect4, deps) {
  const isFirstRender = React8.useRef(true);
  React8.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return void 0;
    }
    return effect4();
  }, deps);
}

// ../node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// ../node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

// ../node_modules/@mui/x-charts/esm/internals/defaultizeMargin.js
function defaultizeMargin(input, defaultMargin) {
  if (typeof input === "number") {
    return {
      top: input,
      bottom: input,
      left: input,
      right: input
    };
  }
  if (defaultMargin) {
    return _extends({}, defaultMargin, input);
  }
  return input;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartDimensions/useChartDimensions.js
var MAX_COMPUTE_RUN = 10;
var useChartDimensions = ({
  params,
  store,
  svgRef
}) => {
  const hasInSize = params.width !== void 0 && params.height !== void 0;
  const stateRef = React9.useRef({
    displayError: false,
    initialCompute: true,
    computeRun: 0
  });
  const [innerWidth, setInnerWidth] = React9.useState(0);
  const [innerHeight, setInnerHeight] = React9.useState(0);
  const computeSize = React9.useCallback(() => {
    const mainEl = svgRef == null ? void 0 : svgRef.current;
    if (!mainEl) {
      return {};
    }
    const win = ownerWindow(mainEl);
    const computedStyle = win.getComputedStyle(mainEl);
    const newHeight = Math.floor(parseFloat(computedStyle.height)) || 0;
    const newWidth = Math.floor(parseFloat(computedStyle.width)) || 0;
    if (store.state.dimensions.width !== newWidth || store.state.dimensions.height !== newHeight) {
      store.set("dimensions", {
        margin: {
          top: params.margin.top,
          right: params.margin.right,
          bottom: params.margin.bottom,
          left: params.margin.left
        },
        width: params.width ?? newWidth,
        height: params.height ?? newHeight,
        propsWidth: params.width,
        propsHeight: params.height
      });
    }
    return {
      height: newHeight,
      width: newWidth
    };
  }, [
    store,
    svgRef,
    params.height,
    params.width,
    // Margin is an object, so we need to include all the properties to prevent infinite loops.
    params.margin.left,
    params.margin.right,
    params.margin.top,
    params.margin.bottom
  ]);
  useEffectAfterFirstRender(() => {
    const width = params.width ?? store.state.dimensions.width;
    const height = params.height ?? store.state.dimensions.height;
    store.set("dimensions", {
      margin: {
        top: params.margin.top,
        right: params.margin.right,
        bottom: params.margin.bottom,
        left: params.margin.left
      },
      width,
      height,
      propsHeight: params.height,
      propsWidth: params.width
    });
  }, [
    store,
    params.height,
    params.width,
    // Margin is an object, so we need to include all the properties to prevent infinite loops.
    params.margin.left,
    params.margin.right,
    params.margin.top,
    params.margin.bottom
  ]);
  React9.useEffect(() => {
    stateRef.current.displayError = true;
  }, []);
  useEnhancedEffect_default(() => {
    if (hasInSize || !stateRef.current.initialCompute || stateRef.current.computeRun > MAX_COMPUTE_RUN) {
      return;
    }
    const computedSize = computeSize();
    if (computedSize.width !== innerWidth || computedSize.height !== innerHeight) {
      stateRef.current.computeRun += 1;
      if (computedSize.width !== void 0) {
        setInnerWidth(computedSize.width);
      }
      if (computedSize.height !== void 0) {
        setInnerHeight(computedSize.height);
      }
    } else if (stateRef.current.initialCompute) {
      stateRef.current.initialCompute = false;
    }
  }, [innerHeight, innerWidth, computeSize, hasInSize]);
  useEnhancedEffect_default(() => {
    if (hasInSize) {
      return () => {
      };
    }
    computeSize();
    const elementToObserve = svgRef.current;
    if (typeof ResizeObserver === "undefined") {
      return () => {
      };
    }
    let animationFrame;
    const observer = new ResizeObserver(() => {
      animationFrame = requestAnimationFrame(() => {
        computeSize();
      });
    });
    if (elementToObserve) {
      observer.observe(elementToObserve);
    }
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (elementToObserve) {
        observer.unobserve(elementToObserve);
      }
    };
  }, [computeSize, hasInSize, svgRef]);
  if (true) {
    if (stateRef.current.displayError && params.width === void 0 && innerWidth === 0) {
      console.error(`MUI X Charts: ChartContainer does not have \`width\` prop, and its container has no \`width\` defined.`);
      stateRef.current.displayError = false;
    }
    if (stateRef.current.displayError && params.height === void 0 && innerHeight === 0) {
      console.error(`MUI X Charts: ChartContainer does not have \`height\` prop, and its container has no \`height\` defined.`);
      stateRef.current.displayError = false;
    }
  }
  const drawingArea = store.use(selectorChartDrawingArea);
  const isXInside = React9.useCallback((x2) => x2 >= drawingArea.left - 1 && x2 <= drawingArea.left + drawingArea.width, [drawingArea.left, drawingArea.width]);
  const isYInside = React9.useCallback((y2) => y2 >= drawingArea.top - 1 && y2 <= drawingArea.top + drawingArea.height, [drawingArea.height, drawingArea.top]);
  const isPointInside = React9.useCallback((x2, y2, targetElement) => {
    if (targetElement && "closest" in targetElement && targetElement.closest("[data-drawing-container]")) {
      return true;
    }
    return isXInside(x2) && isYInside(y2);
  }, [isXInside, isYInside]);
  return {
    instance: {
      isPointInside,
      isXInside,
      isYInside
    }
  };
};
useChartDimensions.params = {
  width: true,
  height: true,
  margin: true
};
useChartDimensions.getDefaultizedParams = ({
  params
}) => _extends({}, params, {
  margin: defaultizeMargin(params.margin, DEFAULT_MARGINS)
});
useChartDimensions.getInitialState = ({
  width,
  height,
  margin
}) => {
  return {
    dimensions: {
      margin,
      width: width ?? 0,
      height: height ?? 0,
      propsWidth: width,
      propsHeight: height
    }
  };
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartSeries/useChartSeries.js
var useChartSeries = ({
  params,
  store,
  seriesConfig
}) => {
  const {
    series,
    dataset,
    theme,
    colors
  } = params;
  useEffectAfterFirstRender(() => {
    store.set("series", _extends({}, store.state.series, {
      defaultizedSeries: defaultizeSeries({
        series,
        colors: typeof colors === "function" ? colors(theme) : colors,
        seriesConfig
      }),
      dataset
    }));
  }, [colors, dataset, series, theme, seriesConfig, store]);
  return {};
};
useChartSeries.params = {
  dataset: true,
  series: true,
  colors: true,
  theme: true
};
var EMPTY_ARRAY = [];
useChartSeries.getDefaultizedParams = ({
  params
}) => {
  var _a;
  return _extends({}, params, {
    series: ((_a = params.series) == null ? void 0 : _a.length) ? params.series : EMPTY_ARRAY,
    colors: params.colors ?? rainbowSurgePalette,
    theme: params.theme ?? "light"
  });
};
useChartSeries.getInitialState = ({
  series = [],
  colors,
  theme,
  dataset
}, _, seriesConfig) => {
  return {
    series: {
      seriesConfig,
      defaultizedSeries: defaultizeSeries({
        series,
        colors: typeof colors === "function" ? colors(theme) : colors,
        seriesConfig
      }),
      dataset
    }
  };
};

// ../node_modules/@mui/x-charts/esm/internals/defaultValueFormatters.js
function createScalarFormatter(tickNumber, zoomScale) {
  return function defaultScalarValueFormatter(value, context) {
    if (context.location === "tick") {
      const domain = context.scale.domain();
      const zeroSizeDomain = domain[0] === domain[1];
      if (zeroSizeDomain) {
        return context.scale.tickFormat(1)(value);
      }
      return context.scale.tickFormat(tickNumber)(value);
    }
    if (context.location === "zoom-slider-tooltip") {
      return zoomScale.tickFormat(2)(value);
    }
    return `${value}`;
  };
}

// ../node_modules/@mui/x-charts/esm/models/axis.js
function isBandScaleConfig(scaleConfig) {
  return scaleConfig.scaleType === "band";
}
function isPointScaleConfig(scaleConfig) {
  return scaleConfig.scaleType === "point";
}
function isContinuousScaleConfig(scaleConfig) {
  return scaleConfig.scaleType !== "point" && scaleConfig.scaleType !== "band";
}
function isSymlogScaleConfig(scaleConfig) {
  return scaleConfig.scaleType === "symlog";
}

// ../node_modules/d3-array/src/ascending.js
function ascending(a2, b) {
  return a2 == null || b == null ? NaN : a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// ../node_modules/d3-array/src/descending.js
function descending(a2, b) {
  return a2 == null || b == null ? NaN : b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}

// ../node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x2) => ascending(f(d), x2);
    delta = (d, x2) => f(d) - x2;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left2(a2, x2, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a2[mid], x2) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right2(a2, x2, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a2[mid], x2) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a2, x2, lo = 0, hi = a2.length) {
    const i = left2(a2, x2, lo, hi - 1);
    return i > lo && delta(a2[i - 1], x2) > -delta(a2[i], x2) ? i - 1 : i;
  }
  return { left: left2, center, right: right2 };
}
function zero() {
  return 0;
}

// ../node_modules/d3-array/src/number.js
function number(x2) {
  return x2 === null ? NaN : +x2;
}

// ../node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// ../node_modules/d3-array/src/blur.js
var blur2 = Blur2(blurf);
var blurImage = Blur2(blurfImage);
function Blur2(blur3) {
  return function(data, rx, ry = rx) {
    if (!((rx = +rx) >= 0)) throw new RangeError("invalid rx");
    if (!((ry = +ry) >= 0)) throw new RangeError("invalid ry");
    let { data: values2, width, height } = data;
    if (!((width = Math.floor(width)) >= 0)) throw new RangeError("invalid width");
    if (!((height = Math.floor(height !== void 0 ? height : values2.length / width)) >= 0)) throw new RangeError("invalid height");
    if (!width || !height || !rx && !ry) return data;
    const blurx = rx && blur3(rx);
    const blury = ry && blur3(ry);
    const temp = values2.slice();
    if (blurx && blury) {
      blurh(blurx, temp, values2, width, height);
      blurh(blurx, values2, temp, width, height);
      blurh(blurx, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
      blurv(blury, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
    } else if (blurx) {
      blurh(blurx, values2, temp, width, height);
      blurh(blurx, temp, values2, width, height);
      blurh(blurx, values2, temp, width, height);
    } else if (blury) {
      blurv(blury, values2, temp, width, height);
      blurv(blury, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
    }
    return data;
  };
}
function blurh(blur3, T, S, w, h) {
  for (let y2 = 0, n = w * h; y2 < n; ) {
    blur3(T, S, y2, y2 += w, 1);
  }
}
function blurv(blur3, T, S, w, h) {
  for (let x2 = 0, n = w * h; x2 < w; ++x2) {
    blur3(T, S, x2, x2 + n, w);
  }
}
function blurfImage(radius) {
  const blur3 = blurf(radius);
  return (T, S, start2, stop, step) => {
    start2 <<= 2, stop <<= 2, step <<= 2;
    blur3(T, S, start2 + 0, stop + 0, step);
    blur3(T, S, start2 + 1, stop + 1, step);
    blur3(T, S, start2 + 2, stop + 2, step);
    blur3(T, S, start2 + 3, stop + 3, step);
  };
}
function blurf(radius) {
  const radius0 = Math.floor(radius);
  if (radius0 === radius) return bluri(radius);
  const t = radius - radius0;
  const w = 2 * radius + 1;
  return (T, S, start2, stop, step) => {
    if (!((stop -= step) >= start2)) return;
    let sum3 = radius0 * S[start2];
    const s0 = step * radius0;
    const s1 = s0 + step;
    for (let i = start2, j = start2 + s0; i < j; i += step) {
      sum3 += S[Math.min(stop, i)];
    }
    for (let i = start2, j = stop; i <= j; i += step) {
      sum3 += S[Math.min(stop, i + s0)];
      T[i] = (sum3 + t * (S[Math.max(start2, i - s1)] + S[Math.min(stop, i + s1)])) / w;
      sum3 -= S[Math.max(start2, i - s0)];
    }
  };
}
function bluri(radius) {
  const w = 2 * radius + 1;
  return (T, S, start2, stop, step) => {
    if (!((stop -= step) >= start2)) return;
    let sum3 = radius * S[start2];
    const s2 = step * radius;
    for (let i = start2, j = start2 + s2; i < j; i += step) {
      sum3 += S[Math.min(stop, i)];
    }
    for (let i = start2, j = stop; i <= j; i += step) {
      sum3 += S[Math.min(stop, i + s2)];
      T[i] = sum3 / w;
      sum3 -= S[Math.max(start2, i - s2)];
    }
  };
}

// ../node_modules/internmap/src/index.js
var InternMap = class extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
};
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// ../node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// ../node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start2, stop, count2) {
  const step = (stop - start2) / Math.max(0, count2), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start2) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start2) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count2 && count2 < 2) return tickSpec(start2, stop, count2 * 2);
  return [i1, i2, inc];
}
function ticks(start2, stop, count2) {
  stop = +stop, start2 = +start2, count2 = +count2;
  if (!(count2 > 0)) return [];
  if (start2 === stop) return [start2];
  const reverse2 = stop < start2, [i1, i2, inc] = reverse2 ? tickSpec(stop, start2, count2) : tickSpec(start2, stop, count2);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse2) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start2, stop, count2) {
  stop = +stop, start2 = +start2, count2 = +count2;
  return tickSpec(start2, stop, count2)[2];
}
function tickStep(start2, stop, count2) {
  stop = +stop, start2 = +start2, count2 = +count2;
  const reverse2 = stop < start2, inc = reverse2 ? tickIncrement(stop, start2, count2) : tickIncrement(start2, stop, count2);
  return (reverse2 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// ../node_modules/d3-array/src/range.js
function range(start2, stop, step) {
  start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start2 + i * step;
  }
  return range2;
}

// ../node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array2[m + i0];
      array2[m + i0] = array2[i + i0];
      array2[i + i0] = t;
    }
    return array2;
  };
}

// ../node_modules/d3-scale/src/init.js
function initRange(domain, range2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range2).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}

// ../node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index2 = new InternMap(), domain = [], range2 = [], unknown = implicit;
  function scale(d) {
    let i = index2.get(d);
    if (i === void 0) {
      if (unknown !== implicit) return unknown;
      index2.set(d, i = domain.push(d) - 1);
    }
    return range2[i % range2.length];
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index2 = new InternMap();
    for (const value of _) {
      if (index2.has(value)) continue;
      index2.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), scale) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range2).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// ../node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// ../node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a2 = clampa(this.opacity);
  return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s2, l, a2) {
  if (a2 <= 0) h = s2 = l = NaN;
  else if (l <= 0 || l >= 1) h = s2 = NaN;
  else if (s2 <= 0) h = NaN;
  return new Hsl(h, s2, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min4 = Math.min(r, g, b), max4 = Math.max(r, g, b), h = NaN, s2 = max4 - min4, l = (max4 + min4) / 2;
  if (s2) {
    if (r === max4) h = (g - b) / s2 + (g < b) * 6;
    else if (g === max4) h = (b - r) / s2 + 2;
    else h = (r - g) / s2 + 4;
    s2 /= l < 0.5 ? max4 + min4 : 2 - max4 - min4;
    h *= 60;
  } else {
    s2 = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s2, l, o.opacity);
}
function hsl(h, s2, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a2 = clampa(this.opacity);
    return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// ../node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// ../node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y2 = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x2, z;
  if (r === g && g === b) x2 = z = y2;
  else {
    x2 = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y2 - 16, 500 * (x2 - y2), 200 * (y2 - z), o.opacity);
}
function lab(l, a2, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a2, b, opacity == null ? 1 : opacity);
}
function Lab(l, a2, b, opacity) {
  this.l = +l;
  this.a = +a2;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter(k2) {
    return new Lab(this.l + K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  darker(k2) {
    return new Lab(this.l - K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  rgb() {
    var y2 = (this.l + 16) / 116, x2 = isNaN(this.a) ? y2 : y2 + this.a / 500, z = isNaN(this.b) ? y2 : y2 - this.b / 200;
    x2 = Xn * lab2xyz(x2);
    y2 = Yn * lab2xyz(y2);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb(3.1338561 * x2 - 1.6168667 * y2 - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x2 + 1.9161415 * y2 + 0.033454 * z),
      lrgb2rgb(0.0719453 * x2 - 0.2289914 * y2 + 1.4052427 * z),
      this.opacity
    );
  }
}));
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x2) {
  return 255 * (x2 <= 31308e-7 ? 12.92 * x2 : 1.055 * Math.pow(x2, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x2) {
  return (x2 /= 255) <= 0.04045 ? x2 / 12.92 : Math.pow((x2 + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl(h, c2, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c2, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c2, l, opacity) {
  this.h = +h;
  this.c = +c2;
  this.l = +l;
  this.opacity = +opacity;
}
function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter(k2) {
    return new Hcl(this.h, this.c, this.l + K * (k2 == null ? 1 : k2), this.opacity);
  },
  darker(k2) {
    return new Hcl(this.h, this.c, this.l - K * (k2 == null ? 1 : k2), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

// ../node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k2 = (E * (g - l) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l * (1 - l)), h = s2 ? Math.atan2(k2, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s2, l, o.opacity);
}
function cubehelix(h, s2, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
    return new Rgb(
      255 * (l + a2 * (A * cosh2 + B * sinh2)),
      255 * (l + a2 * (C * cosh2 + D * sinh2)),
      255 * (l + a2 * (E * cosh2)),
      this.opacity
    );
  }
}));

// ../node_modules/d3-interpolate/src/basis.js
function basis(t13, v0, v1, v2, v3) {
  var t22 = t13 * t13, t32 = t22 * t13;
  return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values2) {
  var n = values2.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values2[i], v2 = values2[i + 1], v0 = i > 0 ? values2[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values2[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// ../node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values2) {
  var n = values2.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values2[(i + n - 1) % n], v1 = values2[i % n], v2 = values2[(i + 1) % n], v3 = values2[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// ../node_modules/d3-interpolate/src/constant.js
var constant_default = (x2) => () => x2;

// ../node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y2) {
  return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
    return Math.pow(a2 + t * b, y2);
  };
}
function hue(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default(isNaN(a2) ? b : a2);
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y2) : constant_default(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default(isNaN(a2) ? b : a2);
}

// ../node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start2, end2) {
    var r = color2((start2 = rgb(start2)).r, (end2 = rgb(end2)).r), g = color2(start2.g, end2.g), b = color2(start2.b, end2.b), opacity = nogamma(start2.opacity, end2.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// ../node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a2, b) {
  if (!b) b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c2 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) c2[i] = a2[i] * (1 - t) + b[i] * t;
    return c2;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}

// ../node_modules/d3-interpolate/src/array.js
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c2 = new Array(nb), i;
  for (i = 0; i < na; ++i) x2[i] = value_default(a2[i], b[i]);
  for (; i < nb; ++i) c2[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c2[i] = x2[i](t);
    return c2;
  };
}

// ../node_modules/d3-interpolate/src/date.js
function date_default(a2, b) {
  var d = /* @__PURE__ */ new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}

// ../node_modules/d3-interpolate/src/number.js
function number_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// ../node_modules/d3-interpolate/src/object.js
function object_default(a2, b) {
  var i = {}, c2 = {}, k2;
  if (a2 === null || typeof a2 !== "object") a2 = {};
  if (b === null || typeof b !== "object") b = {};
  for (k2 in b) {
    if (k2 in a2) {
      i[k2] = value_default(a2[k2], b[k2]);
    } else {
      c2[k2] = b[k2];
    }
  }
  return function(t) {
    for (k2 in i) c2[k2] = i[k2](t);
    return c2;
  };
}

// ../node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i]) s2[i] += bs;
      else s2[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i]) s2[i] += bm;
      else s2[++i] = bm;
    } else {
      s2[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i]) s2[i] += bs;
    else s2[++i] = bs;
  }
  return s2.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s2[(o = q[i2]).i] = o.x(t);
    return s2.join("");
  });
}

// ../node_modules/d3-interpolate/src/value.js
function value_default(a2, b) {
  var t = typeof b, c2;
  return b == null || t === "boolean" ? constant_default(b) : (t === "number" ? number_default : t === "string" ? (c2 = color(b)) ? (b = c2, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a2, b);
}

// ../node_modules/d3-interpolate/src/round.js
function round_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return Math.round(a2 * (1 - t) + b * t);
  };
}

// ../node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a2, b, c2, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a2 * a2 + b * b)) a2 /= scaleX, b /= scaleX;
  if (skewX = a2 * c2 + b * d) c2 -= a2 * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c2 * c2 + d * d)) c2 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a2 * d < b * c2) a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a2) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// ../node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity2 : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity2;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity2;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// ../node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s2) {
    return s2.length ? s2.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s2.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a2, b, s2, q) {
    if (a2 !== b) {
      if (a2 - b > 180) b += 360;
      else if (b - a2 > 180) a2 += 360;
      q.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s2.push(pop(s2) + "rotate(" + b + degParen);
    }
  }
  function skewX(a2, b, s2, q) {
    if (a2 !== b) {
      q.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s2.push(pop(s2) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a2, b) {
    var s2 = [], q = [];
    a2 = parse(a2), b = parse(b);
    translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q);
    rotate(a2.rotate, b.rotate, s2, q);
    skewX(a2.skewX, b.skewX, s2, q);
    scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q);
    a2 = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s2[(o = q[i]).i] = o.x(t);
      return s2.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// ../node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x2) {
  return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
}
function sinh(x2) {
  return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
}
function tanh(x2) {
  return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s2 = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s2 + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// ../node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end2) {
    var h = hue2((start2 = hsl(start2)).h, (end2 = hsl(end2)).h), s2 = nogamma(start2.s, end2.s), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
    return function(t) {
      start2.h = h(t);
      start2.s = s2(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// ../node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end2) {
    var h = hue2((start2 = hcl(start2)).h, (end2 = hcl(end2)).h), c2 = nogamma(start2.c, end2.c), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
    return function(t) {
      start2.h = h(t);
      start2.c = c2(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// ../node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y2) {
    y2 = +y2;
    function cubehelix3(start2, end2) {
      var h = hue2((start2 = cubehelix(start2)).h, (end2 = cubehelix(end2)).h), s2 = nogamma(start2.s, end2.s), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s2(t);
        start2.l = l(Math.pow(t, y2));
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// ../node_modules/d3-scale/src/constant.js
function constants(x2) {
  return function() {
    return x2;
  };
}

// ../node_modules/d3-scale/src/number.js
function number2(x2) {
  return +x2;
}

// ../node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity3(x2) {
  return x2;
}
function normalize(a2, b) {
  return (b -= a2 = +a2) ? function(x2) {
    return (x2 - a2) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a2, b) {
  var t;
  if (a2 > b) t = a2, a2 = b, b = t;
  return function(x2) {
    return Math.max(a2, Math.min(b, x2));
  };
}
function bimap(domain, range2, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range2, interpolate) {
  var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range2 = range2.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range2[i], range2[i + 1]);
  }
  return function(x2) {
    var i2 = bisect_default(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range2 = unit, interpolate = value_default, transform, untransform, unknown, clamp = identity3, piecewise2, output, input;
  function rescale() {
    var n = Math.min(domain.length, range2.length);
    if (clamp !== identity3) clamp = clamper(domain[0], domain[n - 1]);
    piecewise2 = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise2(domain.map(transform), range2, interpolate)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise2(range2, domain.map(transform), number_default)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return range2 = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity3, rescale()) : clamp !== identity3;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity3, identity3);
}

// ../node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}

// ../node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}

// ../node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// ../node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// ../node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// ../node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out: for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s2[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s2[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// ../node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}

// ../node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// ../node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal_default,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded_default(x2 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};

// ../node_modules/d3-format/src/identity.js
function identity_default(x2) {
  return x2;
}

// ../node_modules/d3-format/src/locale.js
var map3 = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "−" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n") comma = true, type = "g";
    else if (!formatTypes_default[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero3 || fill === "0" && align === "=") zero3 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c2;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c2 = value.charCodeAt(i), 48 > c2 || c2 > 57) {
              valueSuffix = (c2 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3) value = group2(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero3) value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k2 * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// ../node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// ../node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// ../node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// ../node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max4) {
  step = Math.abs(step), max4 = Math.abs(max4) - step;
  return Math.max(0, exponent_default(max4) - exponent_default(step)) + 1;
}

// ../node_modules/d3-scale/src/tickFormat.js
function tickFormat(start2, stop, count2, specifier) {
  var step = tickStep(start2, stop, count2), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// ../node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count2) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count2 == null ? 10 : count2);
  };
  scale.tickFormat = function(count2, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count2 == null ? 10 : count2, specifier);
  };
  scale.nice = function(count2) {
    if (count2 == null) count2 = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start2 = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count2);
      if (step === prestep) {
        d[i0] = start2;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// ../node_modules/d3-scale/src/nice.js
function nice2(domain, interval2) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval2.floor(x0);
  domain[i1] = interval2.ceil(x1);
  return domain;
}

// ../node_modules/d3-scale/src/log.js
function transformLog(x2) {
  return Math.log(x2);
}
function transformExp(x2) {
  return Math.exp(x2);
}
function transformLogn(x2) {
  return -Math.log(-x2);
}
function transformExpn(x2) {
  return -Math.exp(-x2);
}
function pow10(x2) {
  return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : (x2) => Math.pow(base, x2);
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x2) => Math.log(x2) / base);
}
function reflect(f) {
  return (x2, k2) => -f(-x2, k2);
}
function loggish(transform) {
  const scale = transform(transformLog, transformExp);
  const domain = scale.domain;
  let base = 10;
  let logs;
  let pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = (count2) => {
    const d = domain();
    let u = d[0];
    let v = d[d.length - 1];
    const r = v < u;
    if (r) [u, v] = [v, u];
    let i = logs(u);
    let j = logs(v);
    let k2;
    let t;
    const n = count2 == null ? 10 : +count2;
    let z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k2 = 1; k2 < base; ++k2) {
          t = i < 0 ? k2 / pows(-i) : k2 * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      else for (; i <= j; ++i) {
        for (k2 = base - 1; k2 >= 1; --k2) {
          t = i > 0 ? k2 / pows(-i) : k2 * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = (count2, specifier) => {
    if (count2 == null) count2 = 10;
    if (specifier == null) specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
      specifier = format(specifier);
    }
    if (count2 === Infinity) return specifier;
    const k2 = Math.max(1, base * count2 / scale.ticks().length);
    return (d) => {
      let i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k2 ? specifier(d) : "";
    };
  };
  scale.nice = () => {
    return domain(nice2(domain(), {
      floor: (x2) => pows(Math.floor(logs(x2))),
      ceil: (x2) => pows(Math.ceil(logs(x2)))
    }));
  };
  return scale;
}
function log() {
  const scale = loggish(transformer()).domain([1, 10]);
  scale.copy = () => copy(scale, log()).base(scale.base());
  initRange.apply(scale, arguments);
  return scale;
}

// ../node_modules/d3-scale/src/symlog.js
function transformSymlog(c2) {
  return function(x2) {
    return Math.sign(x2) * Math.log1p(Math.abs(x2 / c2));
  };
}
function transformSymexp(c2) {
  return function(x2) {
    return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c2;
  };
}
function symlogish(transform) {
  var c2 = 1, scale = transform(transformSymlog(c2), transformSymexp(c2));
  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c2 = +_), transformSymexp(c2)) : c2;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

// ../node_modules/d3-scale/src/pow.js
function transformPow(exponent) {
  return function(x2) {
    return x2 < 0 ? -Math.pow(-x2, exponent) : Math.pow(x2, exponent);
  };
}
function transformSqrt(x2) {
  return x2 < 0 ? -Math.sqrt(-x2) : Math.sqrt(x2);
}
function transformSquare(x2) {
  return x2 < 0 ? -x2 * x2 : x2 * x2;
}
function powish(transform) {
  var scale = transform(identity3, identity3), exponent = 1;
  function rescale() {
    return exponent === 1 ? transform(identity3, identity3) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };
  return linearish(scale);
}
function pow() {
  var scale = powish(transformer());
  scale.copy = function() {
    return copy(scale, pow()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

// ../node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range2 = [0, 1], unknown, n = 1;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range2[bisect_default(domain, x2, 0, n)] : unknown;
  }
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range2.length - 1), scale) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), n = Math.min(domain.length, range2.length - 1), scale) : range2.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range2.indexOf(y2);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range2).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// ../node_modules/d3-time/src/interval.js
var t02 = /* @__PURE__ */ new Date();
var t12 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count2, field) {
  function interval2(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval2.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval2.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval2.round = (date2) => {
    const d0 = interval2(date2), d1 = interval2.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval2.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval2.range = (start2, stop, step) => {
    const range2 = [];
    start2 = interval2.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop) || !(step > 0)) return range2;
    let previous;
    do
      range2.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop);
    return range2;
  };
  interval2.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
        }
      }
    });
  };
  if (count2) {
    interval2.count = (start2, end2) => {
      t02.setTime(+start2), t12.setTime(+end2);
      floori(t02), floori(t12);
      return Math.floor(count2(t02, t12));
    };
    interval2.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? (d) => field(d) % step === 0 : (d) => interval2.count(0, d) % step === 0);
    };
  }
  return interval2;
}

// ../node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start2, end2) => {
  return end2 - start2;
});
millisecond.every = (k2) => {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0)) return null;
  if (!(k2 > 1)) return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k2);
  }, (start2, end2) => {
    return (end2 - start2) / k2;
  });
};
var milliseconds = millisecond.range;

// ../node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// ../node_modules/d3-time/src/second.js
var second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start2, end2) => {
  return (end2 - start2) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
var seconds = second.range;

// ../node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end2) => {
  return (end2 - start2) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end2) => {
  return (end2 - start2) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// ../node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end2) => {
  return (end2 - start2) / durationHour;
}, (date2) => {
  return date2.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end2) => {
  return (end2 - start2) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
var utcHours = utcHour.range;

// ../node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start2, end2) => (end2 - start2 - (end2.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end2) => {
  return (end2 - start2) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end2) => {
  return (end2 - start2) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
var unixDays = unixDay.range;

// ../node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start2, end2) => {
    return (end2 - start2 - (end2.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start2, end2) => {
    return (end2 - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// ../node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start2, end2) => {
  return end2.getMonth() - start2.getMonth() + (end2.getFullYear() - start2.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start2, end2) => {
  return end2.getUTCMonth() - start2.getUTCMonth() + (end2.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
var utcMonths = utcMonth.range;

// ../node_modules/d3-time/src/year.js
var timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start2, end2) => {
  return end2.getFullYear() - start2.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start2, end2) => {
  return end2.getUTCFullYear() - start2.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
var utcYears = utcYear.range;

// ../node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start2, stop, count2) {
    const reverse2 = stop < start2;
    if (reverse2) [start2, stop] = [stop, start2];
    const interval2 = count2 && typeof count2.range === "function" ? count2 : tickInterval(start2, stop, count2);
    const ticks3 = interval2 ? interval2.range(start2, +stop + 1) : [];
    return reverse2 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start2, stop, count2) {
    const target = Math.abs(stop - start2) / count2;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start2 / durationYear, stop / durationYear, count2));
    if (i === 0) return millisecond.every(Math.max(tickStep(start2, stop, count2), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// ../node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c2, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c2 = specifier.charAt(++i)]) != null) c2 = specifier.charAt(++i);
          else pad2 = c2 === "e" ? " " : "0";
          if (format2 = formats2[c2]) c2 = format2(date2, pad2);
          string.push(c2);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c2, parse;
    while (i < n) {
      if (j >= m) return -1;
      c2 = specifier.charCodeAt(i++);
      if (c2 === 37) {
        c2 = specifier.charAt(i++);
        parse = parses[c2 in pads ? specifier.charAt(i++) : c2];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c2 != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// ../node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// ../node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date2) {
  return date2.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

// ../node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date2 = new Date(string);
  return isNaN(date2) ? null : date2;
}
var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

// ../node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number3(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number3)) : domain().map(date);
  };
  scale.ticks = function(interval2) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
  };
  scale.tickFormat = function(count2, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval2) {
    var d = domain();
    if (!interval2 || typeof interval2.range !== "function") interval2 = tickInterval(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
    return interval2 ? domain(nice2(d, interval2)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// ../node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// ../node_modules/d3-scale/src/sequential.js
function transformer2() {
  var x0 = 0, x1 = 1, t03, t13, k10, transform, interpolator = identity3, clamp = false, unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : interpolator(k10 === 0 ? 0.5 : (x2 = (transform(x2) - t03) * k10, clamp ? Math.max(0, Math.min(1, x2)) : x2));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t03 = transform(x0 = +x0), t13 = transform(x1 = +x1), k10 = t03 === t13 ? 0 : 1 / (t13 - t03), scale) : [x0, x1];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range2(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }
  scale.range = range2(value_default);
  scale.rangeRound = range2(round_default);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t03 = t(x0), t13 = t(x1), k10 = t03 === t13 ? 0 : 1 / (t13 - t03);
    return scale;
  };
}
function copy2(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer2()(identity3));
  scale.copy = function() {
    return copy2(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}

// ../node_modules/@mui/x-charts/esm/internals/colorScale.js
function getSequentialColorScale(config) {
  if (config.type === "piecewise") {
    return threshold(config.thresholds, config.colors);
  }
  return sequential([config.min ?? 0, config.max ?? 100], config.color);
}
function getOrdinalColorScale(config) {
  if (config.values) {
    return ordinal(config.values, config.colors).unknown(config.unknownColor ?? null);
  }
  return ordinal(config.colors.map((_, index2) => index2), config.colors).unknown(config.unknownColor ?? null);
}
function getColorScale(config) {
  return config.type === "ordinal" ? getOrdinalColorScale(config) : getSequentialColorScale(config);
}

// ../node_modules/@mui/x-charts/esm/internals/ticks.js
function getTickNumber(params, domain, defaultTickNumber) {
  const {
    tickMaxStep,
    tickMinStep,
    tickNumber
  } = params;
  const maxTicks = tickMinStep === void 0 ? 999 : Math.floor(Math.abs(domain[1] - domain[0]) / tickMinStep);
  const minTicks = tickMaxStep === void 0 ? 2 : Math.ceil(Math.abs(domain[1] - domain[0]) / tickMaxStep);
  const defaultizedTickNumber = tickNumber ?? defaultTickNumber;
  return Math.min(maxTicks, Math.max(minTicks, defaultizedTickNumber));
}
function scaleTickNumberByRange(tickNumber, range2) {
  const rangeGap = range2[1] - range2[0];
  if (rangeGap === 0) {
    return 1;
  }
  return tickNumber / ((range2[1] - range2[0]) / 100);
}
function getDefaultTickNumber(dimension) {
  return Math.floor(Math.abs(dimension) / 50);
}

// ../node_modules/@mui/x-charts/esm/internals/scales/scaleBand.js
function keyof2(value) {
  if (Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value === "object" && value !== null) {
    return value.valueOf();
  }
  return value;
}
function scaleBand(...args) {
  let index2 = new InternMap(void 0, keyof2);
  let domain = [];
  let ordinalRange = [];
  let r0 = 0;
  let r1 = 1;
  let step;
  let bandwidth;
  let isRound = false;
  let paddingInner = 0;
  let paddingOuter = 0;
  let align = 0.5;
  const scale = (d) => {
    const i = index2.get(d);
    if (i === void 0) {
      return void 0;
    }
    return ordinalRange[i % ordinalRange.length];
  };
  const rescale = () => {
    const n = domain.length;
    const reverse2 = r1 < r0;
    const start2 = reverse2 ? r1 : r0;
    const stop = reverse2 ? r0 : r1;
    step = (stop - start2) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (isRound) {
      step = Math.floor(step);
    }
    const adjustedStart = start2 + (stop - start2 - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    const finalStart = isRound ? Math.round(adjustedStart) : adjustedStart;
    const finalBandwidth = isRound ? Math.round(bandwidth) : bandwidth;
    bandwidth = finalBandwidth;
    const values2 = range(n).map((i) => finalStart + step * i);
    ordinalRange = reverse2 ? values2.reverse() : values2;
    return scale;
  };
  scale.domain = function(_) {
    if (!arguments.length) {
      return domain.slice();
    }
    domain = [];
    index2 = new InternMap(void 0, keyof2);
    for (const value of _) {
      if (index2.has(value)) {
        continue;
      }
      index2.set(value, domain.push(value) - 1);
    }
    return rescale();
  };
  scale.range = function(_) {
    if (!arguments.length) {
      return [r0, r1];
    }
    const [v0, v1] = _;
    r0 = +v0;
    r1 = +v1;
    return rescale();
  };
  scale.rangeRound = function(_) {
    const [v0, v1] = _;
    r0 = +v0;
    r1 = +v1;
    isRound = true;
    return rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    if (!arguments.length) {
      return isRound;
    }
    isRound = !!_;
    return rescale();
  };
  scale.padding = function(_) {
    if (!arguments.length) {
      return paddingInner;
    }
    paddingInner = Math.min(1, paddingOuter = +_);
    return rescale();
  };
  scale.paddingInner = function(_) {
    if (!arguments.length) {
      return paddingInner;
    }
    paddingInner = Math.min(1, _);
    return rescale();
  };
  scale.paddingOuter = function(_) {
    if (!arguments.length) {
      return paddingOuter;
    }
    paddingOuter = +_;
    return rescale();
  };
  scale.align = function(_) {
    if (!arguments.length) {
      return align;
    }
    align = Math.max(0, Math.min(1, _));
    return rescale();
  };
  scale.copy = () => {
    return scaleBand(domain, [r0, r1]).round(isRound).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  const [arg0, arg1] = args;
  if (args.length > 1) {
    scale.domain(arg0);
    scale.range(arg1);
  } else if (arg0) {
    scale.range(arg0);
  } else {
    rescale();
  }
  return scale;
}

// ../node_modules/@mui/x-charts/esm/internals/scales/scalePoint.js
function scalePoint(...args) {
  const scale = scaleBand(...args).paddingInner(1);
  const originalCopy = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = () => {
    const copied = originalCopy();
    copied.padding = copied.paddingOuter;
    delete copied.paddingInner;
    delete copied.paddingOuter;
    copied.copy = scale.copy;
    return copied;
  };
  return scale;
}

// ../node_modules/@mui/x-charts/esm/internals/scales/scaleSymlog.js
function scaleSymlog(...args) {
  const scale = symlog(...args);
  const originalTicks = scale.ticks;
  const {
    negativeScale,
    linearScale,
    positiveScale
  } = generateScales(scale);
  scale.ticks = (count2) => {
    const ticks2 = originalTicks(count2);
    const constant2 = scale.constant();
    let negativeLogTickCount = 0;
    let linearTickCount = 0;
    let positiveLogTickCount = 0;
    ticks2.forEach((tick) => {
      if (tick > -constant2 && tick < constant2) {
        linearTickCount += 1;
      }
      if (tick <= -constant2) {
        negativeLogTickCount += 1;
      }
      if (tick >= constant2) {
        positiveLogTickCount += 1;
      }
    });
    const finalTicks = [];
    if (negativeLogTickCount > 0) {
      finalTicks.push(...negativeScale.ticks(negativeLogTickCount));
    }
    if (linearTickCount > 0) {
      const linearTicks = linearScale.ticks(linearTickCount);
      if (finalTicks.at(-1) === linearTicks[0]) {
        finalTicks.push(...linearTicks.slice(1));
      } else {
        finalTicks.push(...linearTicks);
      }
    }
    if (positiveLogTickCount > 0) {
      const positiveTicks = positiveScale.ticks(positiveLogTickCount);
      if (finalTicks.at(-1) === positiveTicks[0]) {
        finalTicks.push(...positiveTicks.slice(1));
      } else {
        finalTicks.push(...positiveTicks);
      }
    }
    return finalTicks;
  };
  scale.tickFormat = (count2 = 10, specifier) => {
    const constant2 = scale.constant();
    const [start2, end2] = scale.domain();
    const extent2 = end2 - start2;
    const negativeScaleDomain = negativeScale.domain();
    const negativeScaleExtent = negativeScaleDomain[1] - negativeScaleDomain[0];
    const negativeScaleRatio = extent2 === 0 ? 0 : negativeScaleExtent / extent2;
    const negativeScaleTickCount = negativeScaleRatio * count2;
    const linearScaleDomain = linearScale.domain();
    const linearScaleExtent = linearScaleDomain[1] - linearScaleDomain[0];
    const linearScaleRatio = extent2 === 0 ? 0 : linearScaleExtent / extent2;
    const linearScaleTickCount = linearScaleRatio * count2;
    const positiveScaleDomain = positiveScale.domain();
    const positiveScaleExtent = positiveScaleDomain[1] - positiveScaleDomain[0];
    const positiveScaleRatio = extent2 === 0 ? 0 : positiveScaleExtent / extent2;
    const positiveScaleTickCount = positiveScaleRatio * count2;
    const negativeTickFormat = negativeScale.tickFormat(negativeScaleTickCount, specifier);
    const linearTickFormat = linearScale.tickFormat(linearScaleTickCount, specifier);
    const positiveTickFormat = positiveScale.tickFormat(positiveScaleTickCount, specifier);
    return (tick) => {
      const tickFormat2 = (
        // eslint-disable-next-line no-nested-ternary
        tick.valueOf() <= -constant2 ? negativeTickFormat : tick.valueOf() >= constant2 ? positiveTickFormat : linearTickFormat
      );
      return tickFormat2(tick);
    };
  };
  scale.copy = () => {
    return scaleSymlog(scale.domain(), scale.range()).constant(scale.constant());
  };
  return scale;
}
function generateScales(scale) {
  const constant2 = scale.constant();
  const domain = scale.domain();
  const negativeDomain = [domain[0], Math.min(domain[1], -constant2)];
  const negativeLogScale = log(negativeDomain, scale.range());
  const linearDomain = [Math.max(domain[0], -constant2), Math.min(domain[1], constant2)];
  const linearScale = linear2(linearDomain, scale.range());
  const positiveDomain = [Math.max(domain[0], constant2), domain[1]];
  const positiveLogScale = log(positiveDomain, scale.range());
  return {
    negativeScale: negativeLogScale,
    linearScale,
    positiveScale: positiveLogScale
  };
}

// ../node_modules/@mui/x-charts/esm/internals/getScale.js
function getScale(scaleType, domain, range2) {
  switch (scaleType) {
    case "log":
      return log(domain, range2);
    case "pow":
      return pow(domain, range2);
    case "sqrt":
      return sqrt(domain, range2);
    case "time":
      return time(domain, range2);
    case "utc":
      return utcTime(domain, range2);
    case "symlog":
      return scaleSymlog(domain, range2);
    default:
      return linear2(domain, range2);
  }
}

// ../node_modules/@mui/x-charts/esm/internals/dateHelpers.js
var isDateData = (data) => (data == null ? void 0 : data[0]) instanceof Date;
function createDateFormatter(data, range2, tickNumber) {
  const timeScale = time(data, range2);
  return (v, {
    location
  }) => location === "tick" ? timeScale.tickFormat(tickNumber)(v) : `${v.toLocaleString()}`;
}

// ../node_modules/@mui/x-charts/esm/internals/configInit.js
var cartesianInstance;
var polarInstance;
var CartesianSeriesTypes = class {
  constructor() {
    __publicField(this, "types", /* @__PURE__ */ (() => /* @__PURE__ */ new Set())());
    if (cartesianInstance) {
      throw new Error("You can only create one instance!");
    }
    cartesianInstance = this.types;
  }
  addType(value) {
    this.types.add(value);
  }
  getTypes() {
    return this.types;
  }
};
var PolarSeriesTypes = class {
  constructor() {
    __publicField(this, "types", /* @__PURE__ */ (() => /* @__PURE__ */ new Set())());
    if (polarInstance) {
      throw new Error("You can only create one instance!");
    }
    polarInstance = this.types;
  }
  addType(value) {
    this.types.add(value);
  }
  getTypes() {
    return this.types;
  }
};
var cartesianSeriesTypes = new CartesianSeriesTypes();
cartesianSeriesTypes.addType("bar");
cartesianSeriesTypes.addType("line");
cartesianSeriesTypes.addType("scatter");
var polarSeriesTypes = new PolarSeriesTypes();
polarSeriesTypes.addType("radar");

// ../node_modules/@mui/x-charts/esm/internals/isCartesian.js
function isCartesianSeriesType(seriesType) {
  return cartesianSeriesTypes.getTypes().has(seriesType);
}
function isCartesianSeries(series) {
  return isCartesianSeriesType(series.type);
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/getAxisTriggerTooltip.js
var getAxisTriggerTooltip = (axisDirection, seriesConfig, formattedSeries, defaultAxisId) => {
  const tooltipAxesIds = /* @__PURE__ */ new Set();
  const chartTypes = Object.keys(seriesConfig).filter(isCartesianSeriesType);
  chartTypes.forEach((chartType) => {
    var _a, _b, _c;
    const series = ((_a = formattedSeries[chartType]) == null ? void 0 : _a.series) ?? {};
    const tooltipAxes = (_c = (_b = seriesConfig[chartType]).axisTooltipGetter) == null ? void 0 : _c.call(_b, series);
    if (tooltipAxes === void 0) {
      return;
    }
    tooltipAxes.forEach(({
      axisId,
      direction
    }) => {
      if (direction === axisDirection) {
        tooltipAxesIds.add(axisId ?? defaultAxisId);
      }
    });
  });
  return tooltipAxesIds;
};

// ../node_modules/@mui/x-charts/esm/internals/scaleGuards.js
function isOrdinalScale(scale) {
  return scale.bandwidth !== void 0;
}
function isBandScale(scale) {
  return isOrdinalScale(scale) && scale.paddingOuter !== void 0;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/computeAxisValue.js
function getRange(drawingArea, axisDirection, reverse2) {
  const range2 = axisDirection === "x" ? [drawingArea.left, drawingArea.left + drawingArea.width] : [drawingArea.top + drawingArea.height, drawingArea.top];
  return reverse2 ? [range2[1], range2[0]] : range2;
}
var DEFAULT_CATEGORY_GAP_RATIO = 0.2;
var DEFAULT_BAR_GAP_RATIO = 0.1;
function computeAxisValue({
  scales,
  drawingArea,
  formattedSeries,
  axis: allAxis,
  seriesConfig,
  axisDirection,
  zoomMap,
  domains
}) {
  if (allAxis === void 0) {
    return {
      axis: {},
      axisIds: []
    };
  }
  const axisIdsTriggeringTooltip = getAxisTriggerTooltip(axisDirection, seriesConfig, formattedSeries, allAxis[0].id);
  const completeAxis = {};
  allAxis.forEach((eachAxis) => {
    const axis = eachAxis;
    const scale = scales[axis.id];
    const zoom = zoomMap == null ? void 0 : zoomMap.get(axis.id);
    const zoomRange = zoom ? [zoom.start, zoom.end] : [0, 100];
    const range2 = getRange(drawingArea, axisDirection, axis.reverse ?? false);
    const rawTickNumber = domains[axis.id].tickNumber;
    const triggerTooltip = !axis.ignoreTooltip && axisIdsTriggeringTooltip.has(axis.id);
    const tickNumber = scaleTickNumberByRange(rawTickNumber, zoomRange);
    const data = axis.data ?? [];
    if (isOrdinalScale(scale)) {
      const scaleRange = axisDirection === "y" ? [range2[1], range2[0]] : range2;
      if (isBandScale(scale) && isBandScaleConfig(axis)) {
        const categoryGapRatio = axis.categoryGapRatio ?? DEFAULT_CATEGORY_GAP_RATIO;
        const barGapRatio = axis.barGapRatio ?? DEFAULT_BAR_GAP_RATIO;
        completeAxis[axis.id] = _extends({
          offset: 0,
          height: 0,
          categoryGapRatio,
          barGapRatio,
          triggerTooltip
        }, axis, {
          data,
          scale,
          tickNumber,
          colorScale: axis.colorMap && (axis.colorMap.type === "ordinal" ? getOrdinalColorScale(_extends({
            values: axis.data
          }, axis.colorMap)) : getColorScale(axis.colorMap))
        });
      }
      if (isPointScaleConfig(axis)) {
        completeAxis[axis.id] = _extends({
          offset: 0,
          height: 0,
          triggerTooltip
        }, axis, {
          data,
          scale,
          tickNumber,
          colorScale: axis.colorMap && (axis.colorMap.type === "ordinal" ? getOrdinalColorScale(_extends({
            values: axis.data
          }, axis.colorMap)) : getColorScale(axis.colorMap))
        });
      }
      if (isDateData(axis.data)) {
        const dateFormatter = createDateFormatter(axis.data, scaleRange, axis.tickNumber);
        completeAxis[axis.id].valueFormatter = axis.valueFormatter ?? dateFormatter;
      }
      return;
    }
    if (axis.scaleType === "band" || axis.scaleType === "point") {
      return;
    }
    const continuousAxis = axis;
    const scaleType = continuousAxis.scaleType ?? "linear";
    completeAxis[axis.id] = _extends({
      offset: 0,
      height: 0,
      triggerTooltip
    }, continuousAxis, {
      data,
      scaleType,
      scale,
      tickNumber,
      colorScale: continuousAxis.colorMap && getSequentialColorScale(continuousAxis.colorMap),
      valueFormatter: axis.valueFormatter ?? createScalarFormatter(tickNumber, getScale(scaleType, range2.map((v) => scale.invert(v)), range2))
    });
  });
  return {
    axis: completeAxis,
    axisIds: allAxis.map(({
      id
    }) => id)
  };
}

// ../node_modules/@mui/x-charts/esm/internals/isDefined.js
function isDefined(value) {
  return value !== null && value !== void 0;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/createAxisFilterMapper.js
function createDiscreteScaleGetAxisFilter(axisData, zoomStart, zoomEnd, direction) {
  const maxIndex2 = (axisData == null ? void 0 : axisData.length) ?? 0;
  const minVal = Math.floor(zoomStart * maxIndex2 / 100);
  const maxVal = Math.ceil(zoomEnd * maxIndex2 / 100);
  return function filterAxis(value, dataIndex) {
    const val = value[direction] ?? (axisData == null ? void 0 : axisData[dataIndex]);
    if (val == null) {
      return true;
    }
    return dataIndex >= minVal && dataIndex < maxVal;
  };
}
function createContinuousScaleGetAxisFilter(domain, zoomStart, zoomEnd, direction, axisData) {
  const min4 = domain[0].valueOf();
  const max4 = domain[1].valueOf();
  const minVal = min4 + zoomStart * (max4 - min4) / 100;
  const maxVal = min4 + zoomEnd * (max4 - min4) / 100;
  return function filterAxis(value, dataIndex) {
    const val = value[direction] ?? (axisData == null ? void 0 : axisData[dataIndex]);
    if (val == null) {
      return true;
    }
    return val >= minVal && val <= maxVal;
  };
}
var createGetAxisFilters = (filters) => ({
  currentAxisId,
  seriesXAxisId,
  seriesYAxisId,
  isDefaultAxis
}) => {
  return (value, dataIndex) => {
    var _a, _b;
    const axisId = currentAxisId === seriesXAxisId ? seriesYAxisId : seriesXAxisId;
    if (!axisId || isDefaultAxis) {
      return ((_b = (_a = Object.values(filters ?? {}))[0]) == null ? void 0 : _b.call(_a, value, dataIndex)) ?? true;
    }
    const data = [seriesYAxisId, seriesXAxisId].filter((id) => id !== currentAxisId).map((id) => filters[id ?? ""]).filter(isDefined);
    return data.every((f) => f(value, dataIndex));
  };
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/createZoomLookup.js
var createZoomLookup = (axisDirection) => (axes = []) => axes.reduce((acc, v) => {
  const {
    zoom,
    id: axisId,
    reverse: reverse2
  } = v;
  const defaultizedZoom = defaultizeZoom(zoom, axisId, axisDirection, reverse2);
  if (defaultizedZoom) {
    acc[axisId] = defaultizedZoom;
  }
  return acc;
}, {});

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartExperimentalFeature/useChartExperimentalFeature.js
var useChartExperimentalFeatures = ({
  params,
  store
}) => {
  useEnhancedEffect_default(() => {
    store.set("experimentalFeatures", params.experimentalFeatures);
  }, [store, params.experimentalFeatures]);
  return {};
};
useChartExperimentalFeatures.params = {
  experimentalFeatures: true
};
useChartExperimentalFeatures.getInitialState = ({
  experimentalFeatures
}) => {
  return {
    experimentalFeatures
  };
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartExperimentalFeature/useChartExperimentalFeature.selectors.js
var selectorChartExperimentalFeaturesState = (state) => state.experimentalFeatures;
var selectorPreferStrictDomainInLineCharts = createSelector2(selectorChartExperimentalFeaturesState, (features) => Boolean(features == null ? void 0 : features.preferStrictDomainInLineCharts));

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/getAxisScale.js
var DEFAULT_CATEGORY_GAP_RATIO2 = 0.2;
function getRange2(drawingArea, axisDirection, axis) {
  const range2 = axisDirection === "x" ? [drawingArea.left, drawingArea.left + drawingArea.width] : [drawingArea.top + drawingArea.height, drawingArea.top];
  return axis.reverse ? [range2[1], range2[0]] : range2;
}
function getNormalizedAxisScale(axis, domain) {
  const range2 = [0, 1];
  if (isBandScaleConfig(axis)) {
    const categoryGapRatio = axis.categoryGapRatio ?? DEFAULT_CATEGORY_GAP_RATIO2;
    return scaleBand(domain, range2).paddingInner(categoryGapRatio).paddingOuter(categoryGapRatio / 2);
  }
  if (isPointScaleConfig(axis)) {
    return scalePoint(domain, range2);
  }
  const scaleType = axis.scaleType ?? "linear";
  const scale = getScale(scaleType, domain, range2);
  if (isSymlogScaleConfig(axis) && axis.constant != null) {
    scale.constant(axis.constant);
  }
  return scale;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/zoom.js
var zoomScaleRange = (scaleRange, zoomRange) => {
  const rangeGap = scaleRange[1] - scaleRange[0];
  const zoomGap = zoomRange[1] - zoomRange[0];
  const min4 = scaleRange[0] - zoomRange[0] * rangeGap / zoomGap;
  const max4 = scaleRange[1] + (100 - zoomRange[1]) * rangeGap / zoomGap;
  return [min4, max4];
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/getAxisExtrema.js
var axisExtremumCallback = (chartType, axis, axisDirection, seriesConfig, axisIndex, formattedSeries, getFilters) => {
  var _a;
  const getter = axisDirection === "x" ? seriesConfig[chartType].xExtremumGetter : seriesConfig[chartType].yExtremumGetter;
  const series = ((_a = formattedSeries[chartType]) == null ? void 0 : _a.series) ?? {};
  return (getter == null ? void 0 : getter({
    series,
    axis,
    axisIndex,
    isDefaultAxis: axisIndex === 0,
    getFilters
  })) ?? [Infinity, -Infinity];
};
function getAxisExtrema(axis, axisDirection, seriesConfig, axisIndex, formattedSeries, getFilters) {
  const cartesianChartTypes = Object.keys(seriesConfig).filter(isCartesianSeriesType);
  let extrema = [Infinity, -Infinity];
  for (const chartType of cartesianChartTypes) {
    const [min4, max4] = axisExtremumCallback(chartType, axis, axisDirection, seriesConfig, axisIndex, formattedSeries, getFilters);
    extrema = [Math.min(extrema[0], min4), Math.max(extrema[1], max4)];
  }
  if (Number.isNaN(extrema[0]) || Number.isNaN(extrema[1])) {
    return [Infinity, -Infinity];
  }
  return extrema;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/getAxisDomainLimit.js
var getAxisDomainLimit = (axis, axisDirection, axisIndex, formattedSeries) => {
  var _a;
  if (axis.domainLimit !== void 0) {
    return axis.domainLimit;
  }
  if (axisDirection === "x") {
    for (const seriesId of ((_a = formattedSeries.line) == null ? void 0 : _a.seriesOrder) ?? []) {
      const series = formattedSeries.line.series[seriesId];
      if (series.xAxisId === axis.id || series.xAxisId === void 0 && axisIndex === 0) {
        return "strict";
      }
    }
  }
  return "nice";
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/domain.js
function niceDomain(scaleType, domain, tickNumber) {
  return getScale(scaleType ?? "linear", domain, [0, 1]).nice(tickNumber).domain();
}
function calculateInitialDomainAndTickNumber(axis, axisDirection, axisIndex, formattedSeries, [minData, maxData], defaultTickNumber, preferStrictDomainInLineCharts) {
  const domainLimit = getDomainLimit(axis, axisDirection, axisIndex, formattedSeries, preferStrictDomainInLineCharts);
  let axisExtrema = getActualAxisExtrema(axis, minData, maxData);
  if (typeof domainLimit === "function") {
    const {
      min: min4,
      max: max4
    } = domainLimit(minData.valueOf(), maxData.valueOf());
    axisExtrema[0] = min4;
    axisExtrema[1] = max4;
  }
  const tickNumber = getTickNumber(axis, axisExtrema, defaultTickNumber);
  if (domainLimit === "nice") {
    axisExtrema = niceDomain(axis.scaleType, axisExtrema, tickNumber);
  }
  axisExtrema = ["min" in axis ? axis.min ?? axisExtrema[0] : axisExtrema[0], "max" in axis ? axis.max ?? axisExtrema[1] : axisExtrema[1]];
  return {
    domain: axisExtrema,
    tickNumber
  };
}
function calculateFinalDomain(axis, axisDirection, axisIndex, formattedSeries, [minData, maxData], tickNumber, preferStrictDomainInLineCharts) {
  const domainLimit = getDomainLimit(axis, axisDirection, axisIndex, formattedSeries, preferStrictDomainInLineCharts);
  let axisExtrema = getActualAxisExtrema(axis, minData, maxData);
  if (typeof domainLimit === "function") {
    const {
      min: min4,
      max: max4
    } = domainLimit(minData.valueOf(), maxData.valueOf());
    axisExtrema[0] = min4;
    axisExtrema[1] = max4;
  }
  if (domainLimit === "nice") {
    axisExtrema = niceDomain(axis.scaleType, axisExtrema, tickNumber);
  }
  return [axis.min ?? axisExtrema[0], axis.max ?? axisExtrema[1]];
}
function getDomainLimit(axis, axisDirection, axisIndex, formattedSeries, preferStrictDomainInLineCharts) {
  return preferStrictDomainInLineCharts ? getAxisDomainLimit(axis, axisDirection, axisIndex, formattedSeries) : axis.domainLimit ?? "nice";
}
function getActualAxisExtrema(axisExtrema, minData, maxData) {
  let min4 = minData;
  let max4 = maxData;
  if ("max" in axisExtrema && axisExtrema.max != null && axisExtrema.max < minData) {
    min4 = axisExtrema.max;
  }
  if ("min" in axisExtrema && axisExtrema.min != null && axisExtrema.min > minData) {
    max4 = axisExtrema.min;
  }
  if (!("min" in axisExtrema) && !("max" in axisExtrema)) {
    return [min4, max4];
  }
  return [axisExtrema.min ?? min4, axisExtrema.max ?? max4];
}

// ../node_modules/flatqueue/index.js
var FlatQueue = class {
  constructor() {
    this.ids = [];
    this.values = [];
    this.length = 0;
  }
  /** Removes all items from the queue. */
  clear() {
    this.length = 0;
  }
  /**
   * Adds `item` to the queue with the specified `priority`.
   *
   * `priority` must be a number. Items are sorted and returned from low to high priority. Multiple items
   * with the same priority value can be added to the queue, but there is no guaranteed order between these items.
   *
   * @param {T} item
   * @param {number} priority
   */
  push(item, priority) {
    let pos = this.length++;
    while (pos > 0) {
      const parent = pos - 1 >> 1;
      const parentValue = this.values[parent];
      if (priority >= parentValue) break;
      this.ids[pos] = this.ids[parent];
      this.values[pos] = parentValue;
      pos = parent;
    }
    this.ids[pos] = item;
    this.values[pos] = priority;
  }
  /**
   * Removes and returns the item from the head of this queue, which is one of
   * the items with the lowest priority. If this queue is empty, returns `undefined`.
   */
  pop() {
    if (this.length === 0) return void 0;
    const ids = this.ids, values2 = this.values, top2 = ids[0], last = --this.length;
    if (last > 0) {
      const id = ids[last];
      const value = values2[last];
      let pos = 0;
      const halfLen = last >> 1;
      while (pos < halfLen) {
        const left2 = (pos << 1) + 1;
        const right2 = left2 + 1;
        const child = left2 + (+(right2 < last) & +(values2[right2] < values2[left2]));
        if (values2[child] >= value) break;
        ids[pos] = ids[child];
        values2[pos] = values2[child];
        pos = child;
      }
      ids[pos] = id;
      values2[pos] = value;
    }
    return top2;
  }
  /** Returns the item from the head of this queue without removing it. If this queue is empty, returns `undefined`. */
  peek() {
    return this.length > 0 ? this.ids[0] : void 0;
  }
  /**
   * Returns the priority value of the item at the head of this queue without
   * removing it. If this queue is empty, returns `undefined`.
   */
  peekValue() {
    return this.length > 0 ? this.values[0] : void 0;
  }
  /**
   * Shrinks the internal arrays to `this.length`.
   *
   * `pop()` and `clear()` calls don't free memory automatically to avoid unnecessary resize operations.
   * This also means that items that have been added to the queue can't be garbage collected until
   * a new item is pushed in their place, or this method is called.
   */
  shrink() {
    this.ids.length = this.values.length = this.length;
  }
};

// ../node_modules/@mui/x-charts/esm/internals/Flatbush.js
var ARRAY_TYPES = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
var VERSION = 3;
var Flatbush = class _Flatbush {
  /**
   * Recreate a Flatbush index from raw `ArrayBuffer` or `SharedArrayBuffer` data.
   * @param {ArrayBufferLike} data
   * @param {number} [byteOffset=0] byte offset to the start of the Flatbush buffer in the referenced ArrayBuffer.
   * @returns {Flatbush} index
   */
  static from(data, byteOffset = 0) {
    if (byteOffset % 8 !== 0) {
      throw new Error("byteOffset must be 8-byte aligned.");
    }
    if (!data || data.byteLength === void 0 || data.buffer) {
      throw new Error("Data must be an instance of ArrayBuffer or SharedArrayBuffer.");
    }
    const [magic, versionAndType] = new Uint8Array(data, byteOffset + 0, 2);
    if (magic !== 251) {
      throw new Error("Data does not appear to be in a Flatbush format.");
    }
    const version3 = versionAndType >> 4;
    if (version3 !== VERSION) {
      throw new Error(`Got v${version3} data when expected v${VERSION}.`);
    }
    const ArrayType = ARRAY_TYPES[versionAndType & 15];
    if (!ArrayType) {
      throw new Error("Unrecognized array type.");
    }
    const [nodeSize] = new Uint16Array(data, byteOffset + 2, 1);
    const [numItems] = new Uint32Array(data, byteOffset + 4, 1);
    return new _Flatbush(numItems, nodeSize, ArrayType, void 0, data, byteOffset);
  }
  /**
   * Create a Flatbush index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=16] Size of the tree node (16 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBufferConstructor | SharedArrayBufferConstructor} [ArrayBufferType=ArrayBuffer] The array buffer type used to store data (`ArrayBuffer` by default).
   * @param {ArrayBufferLike} [data] (Only used internally)
   * @param {number} [byteOffset=0] (Only used internally)
   */
  constructor(numItems, nodeSize = 16, ArrayType = Float64Array, ArrayBufferType = ArrayBuffer, data, byteOffset = 0) {
    if (numItems === void 0) {
      throw new Error("Missing required argument: numItems.");
    }
    if (isNaN(numItems) || numItems <= 0) {
      throw new Error(`Unexpected numItems value: ${numItems}.`);
    }
    this.numItems = +numItems;
    this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
    this.byteOffset = byteOffset;
    let n = numItems;
    let numNodes = n;
    this._levelBounds = [n * 4];
    do {
      n = Math.ceil(n / this.nodeSize);
      numNodes += n;
      this._levelBounds.push(numNodes * 4);
    } while (n !== 1);
    this.ArrayType = ArrayType;
    this.IndexArrayType = numNodes < 16384 ? Uint16Array : Uint32Array;
    const arrayTypeIndex = ARRAY_TYPES.indexOf(ArrayType);
    const nodesByteSize = numNodes * 4 * ArrayType.BYTES_PER_ELEMENT;
    if (arrayTypeIndex < 0) {
      throw new Error(`Unexpected typed array class: ${ArrayType}.`);
    }
    if (data) {
      this.data = data;
      this._boxes = new ArrayType(data, byteOffset + 8, numNodes * 4);
      this._indices = new this.IndexArrayType(data, byteOffset + 8 + nodesByteSize, numNodes);
      this._pos = numNodes * 4;
      this.minX = this._boxes[this._pos - 4];
      this.minY = this._boxes[this._pos - 3];
      this.maxX = this._boxes[this._pos - 2];
      this.maxY = this._boxes[this._pos - 1];
    } else {
      const data2 = this.data = new ArrayBufferType(8 + nodesByteSize + numNodes * this.IndexArrayType.BYTES_PER_ELEMENT);
      this._boxes = new ArrayType(data2, 8, numNodes * 4);
      this._indices = new this.IndexArrayType(data2, 8 + nodesByteSize, numNodes);
      this._pos = 0;
      this.minX = Infinity;
      this.minY = Infinity;
      this.maxX = -Infinity;
      this.maxY = -Infinity;
      new Uint8Array(data2, 0, 2).set([251, (VERSION << 4) + arrayTypeIndex]);
      new Uint16Array(data2, 2, 1)[0] = nodeSize;
      new Uint32Array(data2, 4, 1)[0] = numItems;
    }
    this._queue = new FlatQueue();
  }
  /**
   * Add a given rectangle to the index.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number} A zero-based, incremental number that represents the newly added rectangle.
   */
  add(minX, minY, maxX = minX, maxY = minY) {
    const index2 = this._pos >> 2;
    const boxes = this._boxes;
    this._indices[index2] = index2;
    boxes[this._pos++] = minX;
    boxes[this._pos++] = minY;
    boxes[this._pos++] = maxX;
    boxes[this._pos++] = maxY;
    if (minX < this.minX) {
      this.minX = minX;
    }
    if (minY < this.minY) {
      this.minY = minY;
    }
    if (maxX > this.maxX) {
      this.maxX = maxX;
    }
    if (maxY > this.maxY) {
      this.maxY = maxY;
    }
    return index2;
  }
  /** Perform indexing of the added rectangles. */
  finish() {
    if (this._pos >> 2 !== this.numItems) {
      throw new Error(`Added ${this._pos >> 2} items when expected ${this.numItems}.`);
    }
    const boxes = this._boxes;
    if (this.numItems <= this.nodeSize) {
      boxes[this._pos++] = this.minX;
      boxes[this._pos++] = this.minY;
      boxes[this._pos++] = this.maxX;
      boxes[this._pos++] = this.maxY;
      return;
    }
    const width = this.maxX - this.minX || 1;
    const height = this.maxY - this.minY || 1;
    const hilbertValues = new Uint32Array(this.numItems);
    const hilbertMax = (1 << 16) - 1;
    for (let i = 0, pos = 0; i < this.numItems; i++) {
      const minX = boxes[pos++];
      const minY = boxes[pos++];
      const maxX = boxes[pos++];
      const maxY = boxes[pos++];
      const x2 = Math.floor(hilbertMax * ((minX + maxX) / 2 - this.minX) / width);
      const y2 = Math.floor(hilbertMax * ((minY + maxY) / 2 - this.minY) / height);
      hilbertValues[i] = hilbert(x2, y2);
    }
    sort2(hilbertValues, boxes, this._indices, 0, this.numItems - 1, this.nodeSize);
    for (let i = 0, pos = 0; i < this._levelBounds.length - 1; i++) {
      const end2 = this._levelBounds[i];
      while (pos < end2) {
        const nodeIndex = pos;
        let nodeMinX = boxes[pos++];
        let nodeMinY = boxes[pos++];
        let nodeMaxX = boxes[pos++];
        let nodeMaxY = boxes[pos++];
        for (let j = 1; j < this.nodeSize && pos < end2; j++) {
          nodeMinX = Math.min(nodeMinX, boxes[pos++]);
          nodeMinY = Math.min(nodeMinY, boxes[pos++]);
          nodeMaxX = Math.max(nodeMaxX, boxes[pos++]);
          nodeMaxY = Math.max(nodeMaxY, boxes[pos++]);
        }
        this._indices[this._pos >> 2] = nodeIndex;
        boxes[this._pos++] = nodeMinX;
        boxes[this._pos++] = nodeMinY;
        boxes[this._pos++] = nodeMaxX;
        boxes[this._pos++] = nodeMaxY;
      }
    }
  }
  /**
   * Search the index by a bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @param {(index: number) => boolean} [filterFn] An optional function for filtering the results.
   * @returns {number[]} An array containing the index, the x coordinate and the y coordinate of the points intersecting or touching the given bounding box.
   */
  search(minX, minY, maxX, maxY, filterFn) {
    if (this._pos !== this._boxes.length) {
      throw new Error("Data not yet indexed - call index.finish().");
    }
    let nodeIndex = this._boxes.length - 4;
    const queue = [];
    const results = [];
    while (nodeIndex !== void 0) {
      const end2 = Math.min(nodeIndex + this.nodeSize * 4, upperBound(nodeIndex, this._levelBounds));
      for (let pos = nodeIndex; pos < end2; pos += 4) {
        if (maxX < this._boxes[pos]) {
          continue;
        }
        if (maxY < this._boxes[pos + 1]) {
          continue;
        }
        if (minX > this._boxes[pos + 2]) {
          continue;
        }
        if (minY > this._boxes[pos + 3]) {
          continue;
        }
        const index2 = this._indices[pos >> 2] | 0;
        if (nodeIndex >= this.numItems * 4) {
          queue.push(index2);
        } else if (filterFn === void 0 || filterFn(index2)) {
          results.push(index2);
          results.push(this._boxes[pos]);
          results.push(this._boxes[pos + 1]);
        }
      }
      nodeIndex = queue.pop();
    }
    return results;
  }
  /**
   * Search items in order of distance from the given point.
   * @param x
   * @param y
   * @param [maxResults=Infinity]
   * @param maxDistSq
   * @param [filterFn] An optional function for filtering the results.
   * @param [sqDistFn] An optional function to calculate squared distance from the point to the item.
   * @returns {number[]} An array of indices of items found.
   */
  neighbors(x2, y2, maxResults = Infinity, maxDistSq = Infinity, filterFn, sqDistFn = sqDist) {
    if (this._pos !== this._boxes.length) {
      throw new Error("Data not yet indexed - call index.finish().");
    }
    let nodeIndex = this._boxes.length - 4;
    const q = this._queue;
    const results = [];
    outer: while (nodeIndex !== void 0) {
      const end2 = Math.min(nodeIndex + this.nodeSize * 4, upperBound(nodeIndex, this._levelBounds));
      for (let pos = nodeIndex; pos < end2; pos += 4) {
        const index2 = this._indices[pos >> 2] | 0;
        const minX = this._boxes[pos];
        const minY = this._boxes[pos + 1];
        const maxX = this._boxes[pos + 2];
        const maxY = this._boxes[pos + 3];
        const dx = x2 < minX ? minX - x2 : x2 > maxX ? x2 - maxX : 0;
        const dy = y2 < minY ? minY - y2 : y2 > maxY ? y2 - maxY : 0;
        const dist = sqDistFn(dx, dy);
        if (dist > maxDistSq) {
          continue;
        }
        if (nodeIndex >= this.numItems * 4) {
          q.push(index2 << 1, dist);
        } else if (filterFn === void 0 || filterFn(index2)) {
          q.push((index2 << 1) + 1, dist);
        }
      }
      while (q.length && q.peek() & 1) {
        const dist = q.peekValue();
        if (dist > maxDistSq) {
          break outer;
        }
        results.push(q.pop() >> 1);
        if (results.length === maxResults) {
          break outer;
        }
      }
      nodeIndex = q.length ? q.pop() >> 1 : void 0;
    }
    q.clear();
    return results;
  }
};
function sqDist(dx, dy) {
  return dx * dx + dy * dy;
}
function upperBound(value, arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const m = i + j >> 1;
    if (arr[m] > value) {
      j = m;
    } else {
      i = m + 1;
    }
  }
  return arr[i];
}
function sort2(values2, boxes, indices, left2, right2, nodeSize) {
  if (Math.floor(left2 / nodeSize) >= Math.floor(right2 / nodeSize)) {
    return;
  }
  const start2 = values2[left2];
  const mid = values2[left2 + right2 >> 1];
  const end2 = values2[right2];
  let pivot = end2;
  const x2 = Math.max(start2, mid);
  if (end2 > x2) {
    pivot = x2;
  } else if (x2 === start2) {
    pivot = Math.max(mid, end2);
  } else if (x2 === mid) {
    pivot = Math.max(start2, end2);
  }
  let i = left2 - 1;
  let j = right2 + 1;
  while (true) {
    do {
      i++;
    } while (values2[i] < pivot);
    do {
      j--;
    } while (values2[j] > pivot);
    if (i >= j) {
      break;
    }
    swap(values2, boxes, indices, i, j);
  }
  sort2(values2, boxes, indices, left2, j, nodeSize);
  sort2(values2, boxes, indices, j + 1, right2, nodeSize);
}
function swap(values2, boxes, indices, i, j) {
  const temp = values2[i];
  values2[i] = values2[j];
  values2[j] = temp;
  const k2 = 4 * i;
  const m = 4 * j;
  const a2 = boxes[k2];
  const b = boxes[k2 + 1];
  const c2 = boxes[k2 + 2];
  const d = boxes[k2 + 3];
  boxes[k2] = boxes[m];
  boxes[k2 + 1] = boxes[m + 1];
  boxes[k2 + 2] = boxes[m + 2];
  boxes[k2 + 3] = boxes[m + 3];
  boxes[m] = a2;
  boxes[m + 1] = b;
  boxes[m + 2] = c2;
  boxes[m + 3] = d;
  const e = indices[i];
  indices[i] = indices[j];
  indices[j] = e;
}
function hilbert(x2, y2) {
  let a2 = x2 ^ y2;
  let b = 65535 ^ a2;
  let c2 = 65535 ^ (x2 | y2);
  let d = x2 & (y2 ^ 65535);
  let A2 = a2 | b >> 1;
  let B2 = a2 >> 1 ^ a2;
  let C2 = c2 >> 1 ^ b & d >> 1 ^ c2;
  let D2 = a2 & c2 >> 1 ^ d >> 1 ^ d;
  a2 = A2;
  b = B2;
  c2 = C2;
  d = D2;
  A2 = a2 & a2 >> 2 ^ b & b >> 2;
  B2 = a2 & b >> 2 ^ b & (a2 ^ b) >> 2;
  C2 ^= a2 & c2 >> 2 ^ b & d >> 2;
  D2 ^= b & c2 >> 2 ^ (a2 ^ b) & d >> 2;
  a2 = A2;
  b = B2;
  c2 = C2;
  d = D2;
  A2 = a2 & a2 >> 4 ^ b & b >> 4;
  B2 = a2 & b >> 4 ^ b & (a2 ^ b) >> 4;
  C2 ^= a2 & c2 >> 4 ^ b & d >> 4;
  D2 ^= b & c2 >> 4 ^ (a2 ^ b) & d >> 4;
  a2 = A2;
  b = B2;
  c2 = C2;
  d = D2;
  C2 ^= a2 & c2 >> 8 ^ b & d >> 8;
  D2 ^= b & c2 >> 8 ^ (a2 ^ b) & d >> 8;
  a2 = C2 ^ C2 >> 1;
  b = D2 ^ D2 >> 1;
  let i0 = x2 ^ y2;
  let i1 = b | 65535 ^ (i0 | a2);
  i0 = (i0 | i0 << 8) & 16711935;
  i0 = (i0 | i0 << 4) & 252645135;
  i0 = (i0 | i0 << 2) & 858993459;
  i0 = (i0 | i0 << 1) & 1431655765;
  i1 = (i1 | i1 << 8) & 16711935;
  i1 = (i1 | i1 << 4) & 252645135;
  i1 = (i1 | i1 << 2) & 858993459;
  i1 = (i1 | i1 << 1) & 1431655765;
  return (i1 << 1 | i0) >>> 0;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxisRendering.selectors.js
var createZoomMap = (zoom) => {
  const zoomItemMap = /* @__PURE__ */ new Map();
  zoom.forEach((zoomItem) => {
    zoomItemMap.set(zoomItem.axisId, zoomItem);
  });
  return zoomItemMap;
};
var selectorChartZoomState = (state) => state.zoom;
var selectorChartHasZoom = createSelector2(selectorChartRawXAxis, selectorChartRawYAxis, (xAxes, yAxes) => (xAxes == null ? void 0 : xAxes.some((axis) => Boolean(axis.zoom))) || (yAxes == null ? void 0 : yAxes.some((axis) => Boolean(axis.zoom))) || false);
var selectorChartZoomIsInteracting = createSelector2(selectorChartZoomState, (zoom) => zoom == null ? void 0 : zoom.isInteracting);
var selectorChartZoomMap = createSelectorMemoized(selectorChartZoomState, function selectorChartZoomMap2(zoom) {
  return (zoom == null ? void 0 : zoom.zoomData) && createZoomMap(zoom == null ? void 0 : zoom.zoomData);
});
var selectorChartAxisZoomData = createSelector2(selectorChartZoomMap, (zoomMap, axisId) => zoomMap == null ? void 0 : zoomMap.get(axisId));
var selectorChartZoomOptionsLookup = createSelectorMemoized(selectorChartRawXAxis, selectorChartRawYAxis, function selectorChartZoomOptionsLookup2(xAxis, yAxis) {
  return _extends({}, createZoomLookup("x")(xAxis), createZoomLookup("y")(yAxis));
});
var selectorChartAxisZoomOptionsLookup = createSelector2(selectorChartZoomOptionsLookup, (axisLookup, axisId) => axisLookup[axisId]);
var selectorDefaultXAxisTickNumber = createSelector2(selectorChartDrawingArea, function selectorDefaultXAxisTickNumber2(drawingArea) {
  return getDefaultTickNumber(drawingArea.width);
});
var selectorDefaultYAxisTickNumber = createSelector2(selectorChartDrawingArea, function selectorDefaultYAxisTickNumber2(drawingArea) {
  return getDefaultTickNumber(drawingArea.height);
});
var selectorChartXAxisWithDomains = createSelectorMemoized(selectorChartRawXAxis, selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorPreferStrictDomainInLineCharts, selectorDefaultXAxisTickNumber, function selectorChartXAxisWithDomains2(axes, formattedSeries, seriesConfig, preferStrictDomainInLineCharts, defaultTickNumber) {
  const axisDirection = "x";
  const domains = {};
  axes == null ? void 0 : axes.forEach((eachAxis, axisIndex) => {
    var _a, _b;
    const axis = eachAxis;
    if (isBandScaleConfig(axis) || isPointScaleConfig(axis)) {
      domains[axis.id] = {
        domain: axis.data
      };
      if (axis.ordinalTimeTicks !== void 0) {
        domains[axis.id].tickNumber = getTickNumber(axis, [(_a = axis.data) == null ? void 0 : _a.find((d) => d !== null), (_b = axis.data) == null ? void 0 : _b.findLast((d) => d !== null)], defaultTickNumber);
      }
      return;
    }
    const axisExtrema = getAxisExtrema(axis, axisDirection, seriesConfig, axisIndex, formattedSeries);
    domains[axis.id] = calculateInitialDomainAndTickNumber(axis, "x", axisIndex, formattedSeries, axisExtrema, defaultTickNumber, preferStrictDomainInLineCharts);
  });
  return {
    axes,
    domains
  };
});
var selectorChartYAxisWithDomains = createSelectorMemoized(selectorChartRawYAxis, selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorPreferStrictDomainInLineCharts, selectorDefaultYAxisTickNumber, function selectorChartYAxisWithDomains2(axes, formattedSeries, seriesConfig, preferStrictDomainInLineCharts, defaultTickNumber) {
  const axisDirection = "y";
  const domains = {};
  axes == null ? void 0 : axes.forEach((eachAxis, axisIndex) => {
    var _a, _b;
    const axis = eachAxis;
    if (isBandScaleConfig(axis) || isPointScaleConfig(axis)) {
      domains[axis.id] = {
        domain: axis.data
      };
      if (axis.ordinalTimeTicks !== void 0) {
        domains[axis.id].tickNumber = getTickNumber(axis, [(_a = axis.data) == null ? void 0 : _a.find((d) => d !== null), (_b = axis.data) == null ? void 0 : _b.findLast((d) => d !== null)], defaultTickNumber);
      }
      return;
    }
    const axisExtrema = getAxisExtrema(axis, axisDirection, seriesConfig, axisIndex, formattedSeries);
    domains[axis.id] = calculateInitialDomainAndTickNumber(axis, "y", axisIndex, formattedSeries, axisExtrema, defaultTickNumber, preferStrictDomainInLineCharts);
  });
  return {
    axes,
    domains
  };
});
var selectorChartZoomAxisFilters = createSelectorMemoized(selectorChartZoomMap, selectorChartZoomOptionsLookup, selectorChartXAxisWithDomains, selectorChartYAxisWithDomains, function selectorChartZoomAxisFilters2(zoomMap, zoomOptions, {
  axes: xAxis,
  domains: xDomains
}, {
  axes: yAxis,
  domains: yDomains
}) {
  if (!zoomMap || !zoomOptions) {
    return void 0;
  }
  let hasFilter = false;
  const filters = {};
  const axes = [...xAxis ?? [], ...yAxis ?? []];
  for (let i = 0; i < axes.length; i += 1) {
    const axis = axes[i];
    if (!zoomOptions[axis.id] || zoomOptions[axis.id].filterMode !== "discard") {
      continue;
    }
    const zoom = zoomMap.get(axis.id);
    if (zoom === void 0 || zoom.start <= 0 && zoom.end >= 100) {
      continue;
    }
    const axisDirection = i < ((xAxis == null ? void 0 : xAxis.length) ?? 0) ? "x" : "y";
    if (axis.scaleType === "band" || axis.scaleType === "point") {
      filters[axis.id] = createDiscreteScaleGetAxisFilter(axis.data, zoom.start, zoom.end, axisDirection);
    } else {
      const {
        domain
      } = axisDirection === "x" ? xDomains[axis.id] : yDomains[axis.id];
      filters[axis.id] = createContinuousScaleGetAxisFilter(
        // For continuous scales, the domain is always a two-value array.
        domain,
        zoom.start,
        zoom.end,
        axisDirection,
        axis.data
      );
    }
    hasFilter = true;
  }
  if (!hasFilter) {
    return void 0;
  }
  return createGetAxisFilters(filters);
});
var selectorChartFilteredXDomains = createSelectorMemoized(selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorChartZoomMap, selectorChartZoomOptionsLookup, selectorChartZoomAxisFilters, selectorPreferStrictDomainInLineCharts, selectorChartXAxisWithDomains, function selectorChartFilteredXDomains2(formattedSeries, seriesConfig, zoomMap, zoomOptions, getFilters, preferStrictDomainInLineCharts, {
  axes,
  domains
}) {
  const filteredDomains = {};
  axes == null ? void 0 : axes.forEach((axis, axisIndex) => {
    const domain = domains[axis.id].domain;
    if (isBandScaleConfig(axis) || isPointScaleConfig(axis)) {
      filteredDomains[axis.id] = domain;
      return;
    }
    const zoom = zoomMap == null ? void 0 : zoomMap.get(axis.id);
    const zoomOption = zoomOptions == null ? void 0 : zoomOptions[axis.id];
    const filter2 = zoom === void 0 && !zoomOption ? getFilters : void 0;
    if (!filter2) {
      filteredDomains[axis.id] = domain;
      return;
    }
    const rawTickNumber = domains[axis.id].tickNumber;
    const axisExtrema = getAxisExtrema(axis, "x", seriesConfig, axisIndex, formattedSeries, filter2);
    filteredDomains[axis.id] = calculateFinalDomain(axis, "x", axisIndex, formattedSeries, axisExtrema, rawTickNumber, preferStrictDomainInLineCharts);
  });
  return filteredDomains;
});
var selectorChartFilteredYDomains = createSelectorMemoized(selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorChartZoomMap, selectorChartZoomOptionsLookup, selectorChartZoomAxisFilters, selectorPreferStrictDomainInLineCharts, selectorChartYAxisWithDomains, function selectorChartFilteredYDomains2(formattedSeries, seriesConfig, zoomMap, zoomOptions, getFilters, preferStrictDomainInLineCharts, {
  axes,
  domains
}) {
  const filteredDomains = {};
  axes == null ? void 0 : axes.forEach((axis, axisIndex) => {
    const domain = domains[axis.id].domain;
    if (isBandScaleConfig(axis) || isPointScaleConfig(axis)) {
      filteredDomains[axis.id] = domain;
      return;
    }
    const zoom = zoomMap == null ? void 0 : zoomMap.get(axis.id);
    const zoomOption = zoomOptions == null ? void 0 : zoomOptions[axis.id];
    const filter2 = zoom === void 0 && !zoomOption ? getFilters : void 0;
    if (!filter2) {
      filteredDomains[axis.id] = domain;
      return;
    }
    const rawTickNumber = domains[axis.id].tickNumber;
    const axisExtrema = getAxisExtrema(axis, "y", seriesConfig, axisIndex, formattedSeries, filter2);
    filteredDomains[axis.id] = calculateFinalDomain(axis, "y", axisIndex, formattedSeries, axisExtrema, rawTickNumber, preferStrictDomainInLineCharts);
  });
  return filteredDomains;
});
var selectorChartNormalizedXScales = createSelectorMemoized(selectorChartRawXAxis, selectorChartFilteredXDomains, function selectorChartNormalizedXScales2(axes, filteredDomains) {
  const scales = {};
  axes == null ? void 0 : axes.forEach((eachAxis) => {
    const axis = eachAxis;
    const domain = filteredDomains[axis.id];
    scales[axis.id] = getNormalizedAxisScale(axis, domain);
  });
  return scales;
});
var selectorChartNormalizedYScales = createSelectorMemoized(selectorChartRawYAxis, selectorChartFilteredYDomains, function selectorChartNormalizedYScales2(axes, filteredDomains) {
  const scales = {};
  axes == null ? void 0 : axes.forEach((eachAxis) => {
    const axis = eachAxis;
    const domain = filteredDomains[axis.id];
    scales[axis.id] = getNormalizedAxisScale(axis, domain);
  });
  return scales;
});
var selectorChartXScales = createSelectorMemoized(selectorChartRawXAxis, selectorChartNormalizedXScales, selectorChartDrawingArea, selectorChartZoomMap, function selectorChartXScales2(axes, normalizedScales, drawingArea, zoomMap) {
  const scales = {};
  axes == null ? void 0 : axes.forEach((eachAxis) => {
    const axis = eachAxis;
    const zoom = zoomMap == null ? void 0 : zoomMap.get(axis.id);
    const zoomRange = zoom ? [zoom.start, zoom.end] : [0, 100];
    const range2 = getRange2(drawingArea, "x", axis);
    const scale = normalizedScales[axis.id].copy();
    const zoomedRange = zoomScaleRange(range2, zoomRange);
    scale.range(zoomedRange);
    scales[axis.id] = scale;
  });
  return scales;
});
var selectorChartYScales = createSelectorMemoized(selectorChartRawYAxis, selectorChartNormalizedYScales, selectorChartDrawingArea, selectorChartZoomMap, function selectorChartYScales2(axes, normalizedScales, drawingArea, zoomMap) {
  const scales = {};
  axes == null ? void 0 : axes.forEach((eachAxis) => {
    const axis = eachAxis;
    const zoom = zoomMap == null ? void 0 : zoomMap.get(axis.id);
    const zoomRange = zoom ? [zoom.start, zoom.end] : [0, 100];
    const range2 = getRange2(drawingArea, "y", axis);
    const scale = normalizedScales[axis.id].copy();
    const scaleRange = isOrdinalScale(scale) ? range2.reverse() : range2;
    const zoomedRange = zoomScaleRange(scaleRange, zoomRange);
    scale.range(zoomedRange);
    scales[axis.id] = scale;
  });
  return scales;
});
var selectorChartXAxis = createSelectorMemoized(selectorChartDrawingArea, selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorChartZoomMap, selectorChartXAxisWithDomains, selectorChartXScales, function selectorChartXAxis2(drawingArea, formattedSeries, seriesConfig, zoomMap, {
  axes,
  domains
}, scales) {
  return computeAxisValue({
    scales,
    drawingArea,
    formattedSeries,
    axis: axes,
    seriesConfig,
    axisDirection: "x",
    zoomMap,
    domains
  });
});
var selectorChartYAxis = createSelectorMemoized(selectorChartDrawingArea, selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorChartZoomMap, selectorChartYAxisWithDomains, selectorChartYScales, function selectorChartYAxis2(drawingArea, formattedSeries, seriesConfig, zoomMap, {
  axes,
  domains
}, scales) {
  return computeAxisValue({
    scales,
    drawingArea,
    formattedSeries,
    axis: axes,
    seriesConfig,
    axisDirection: "y",
    zoomMap,
    domains
  });
});
var selectorChartAxis = createSelector2(selectorChartXAxis, selectorChartYAxis, (xAxes, yAxes, axisId) => (xAxes == null ? void 0 : xAxes.axis[axisId]) ?? (yAxes == null ? void 0 : yAxes.axis[axisId]));
var selectorChartRawAxis = createSelector2(selectorChartRawXAxis, selectorChartRawYAxis, (xAxes, yAxes, axisId) => {
  const axis = (xAxes == null ? void 0 : xAxes.find((a2) => a2.id === axisId)) ?? (yAxes == null ? void 0 : yAxes.find((a2) => a2.id === axisId)) ?? null;
  if (!axis) {
    return void 0;
  }
  return axis;
});
var selectorChartDefaultXAxisId = createSelector2(selectorChartRawXAxis, (xAxes) => xAxes[0].id);
var selectorChartDefaultYAxisId = createSelector2(selectorChartRawYAxis, (yAxes) => yAxes[0].id);
var EMPTY_MAP = /* @__PURE__ */ new Map();
var selectorChartSeriesEmptyFlatbushMap = () => EMPTY_MAP;
var selectorChartSeriesFlatbushMap = createSelectorMemoized(selectorChartSeriesProcessed, selectorChartNormalizedXScales, selectorChartNormalizedYScales, selectorChartDefaultXAxisId, selectorChartDefaultYAxisId, function selectChartSeriesFlatbushMap(allSeries, xAxesScaleMap, yAxesScaleMap, defaultXAxisId, defaultYAxisId) {
  const validSeries = allSeries.scatter;
  const flatbushMap = /* @__PURE__ */ new Map();
  if (!validSeries) {
    return flatbushMap;
  }
  validSeries.seriesOrder.forEach((seriesId) => {
    const {
      data,
      xAxisId = defaultXAxisId,
      yAxisId = defaultYAxisId
    } = validSeries.series[seriesId];
    const flatbush = new Flatbush(data.length);
    const originalXScale = xAxesScaleMap[xAxisId];
    const originalYScale = yAxesScaleMap[yAxisId];
    for (const datum of data) {
      flatbush.add(originalXScale(datum.x), originalYScale(datum.y));
    }
    flatbush.finish();
    flatbushMap.set(seriesId, flatbush);
  });
  return flatbushMap;
});

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/getAxisValue.js
function getAsANumber(value) {
  return value instanceof Date ? value.getTime() : value;
}
function getAxisIndex(axisConfig, pointerValue) {
  const {
    scale,
    data: axisData,
    reverse: reverse2
  } = axisConfig;
  if (!isOrdinalScale(scale)) {
    const value = scale.invert(pointerValue);
    if (axisData === void 0) {
      return -1;
    }
    const valueAsNumber = getAsANumber(value);
    const closestIndex = axisData == null ? void 0 : axisData.findIndex((pointValue, index2) => {
      const v = getAsANumber(pointValue);
      if (v > valueAsNumber) {
        if (index2 === 0 || Math.abs(valueAsNumber - v) <= Math.abs(valueAsNumber - getAsANumber(axisData[index2 - 1]))) {
          return true;
        }
      }
      if (v <= valueAsNumber) {
        if (index2 === axisData.length - 1 || Math.abs(getAsANumber(value) - v) < Math.abs(getAsANumber(value) - getAsANumber(axisData[index2 + 1]))) {
          return true;
        }
      }
      return false;
    });
    return closestIndex;
  }
  const dataIndex = scale.bandwidth() === 0 ? Math.floor((pointerValue - Math.min(...scale.range()) + scale.step() / 2) / scale.step()) : Math.floor((pointerValue - Math.min(...scale.range())) / scale.step());
  if (dataIndex < 0 || dataIndex >= axisData.length) {
    return -1;
  }
  return reverse2 ? axisData.length - 1 - dataIndex : dataIndex;
}
function getAxisValue(scale, axisData, pointerValue, dataIndex) {
  if (!isOrdinalScale(scale)) {
    if (dataIndex === null) {
      const invertedValue = scale.invert(pointerValue);
      return Number.isNaN(invertedValue) ? null : invertedValue;
    }
    return axisData[dataIndex];
  }
  if (dataIndex === null || dataIndex < 0 || dataIndex >= axisData.length) {
    return null;
  }
  return axisData[dataIndex];
}

// ../node_modules/@mui/x-charts/esm/internals/getSVGPoint.js
function getSVGPoint(svg, event) {
  const pt = svg.createSVGPoint();
  pt.x = event.clientX;
  pt.y = event.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}

// ../node_modules/@mui/x-internals/esm/isDeepEqual/isDeepEqual.js
function isDeepEqual(a2, b) {
  if (a2 === b) {
    return true;
  }
  if (a2 && b && typeof a2 === "object" && typeof b === "object") {
    if (a2.constructor !== b.constructor) {
      return false;
    }
    if (Array.isArray(a2)) {
      const length2 = a2.length;
      if (length2 !== b.length) {
        return false;
      }
      for (let i = 0; i < length2; i += 1) {
        if (!isDeepEqual(a2[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (a2 instanceof Map && b instanceof Map) {
      if (a2.size !== b.size) {
        return false;
      }
      const entriesA = Array.from(a2.entries());
      for (let i = 0; i < entriesA.length; i += 1) {
        if (!b.has(entriesA[i][0])) {
          return false;
        }
      }
      for (let i = 0; i < entriesA.length; i += 1) {
        const entryA = entriesA[i];
        if (!isDeepEqual(entryA[1], b.get(entryA[0]))) {
          return false;
        }
      }
      return true;
    }
    if (a2 instanceof Set && b instanceof Set) {
      if (a2.size !== b.size) {
        return false;
      }
      const entries = Array.from(a2.entries());
      for (let i = 0; i < entries.length; i += 1) {
        if (!b.has(entries[i][0])) {
          return false;
        }
      }
      return true;
    }
    if (ArrayBuffer.isView(a2) && ArrayBuffer.isView(b)) {
      const length2 = a2.length;
      if (length2 !== b.length) {
        return false;
      }
      for (let i = 0; i < length2; i += 1) {
        if (a2[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    if (a2.constructor === RegExp) {
      return a2.source === b.source && a2.flags === b.flags;
    }
    if (a2.valueOf !== Object.prototype.valueOf) {
      return a2.valueOf() === b.valueOf();
    }
    if (a2.toString !== Object.prototype.toString) {
      return a2.toString() === b.toString();
    }
    const keys = Object.keys(a2);
    const length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (let i = 0; i < length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (let i = 0; i < length; i += 1) {
      const key = keys[i];
      if (!isDeepEqual(a2[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b !== b;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianInteraction.selectors.js
function indexGetter(value, axes, ids = axes.axisIds[0]) {
  return Array.isArray(ids) ? ids.map((id) => getAxisIndex(axes.axis[id], value)) : getAxisIndex(axes.axis[ids], value);
}
var selectChartsInteractionAxisIndex = (value, axes, id) => {
  if (value === null) {
    return null;
  }
  const index2 = indexGetter(value, axes, id);
  return index2 === -1 ? null : index2;
};
var selectorChartsInteractionXAxisIndex = createSelector2(selectorChartsInteractionPointerX, selectorChartXAxis, selectChartsInteractionAxisIndex);
var selectorChartsInteractionYAxisIndex = createSelector2(selectorChartsInteractionPointerY, selectorChartYAxis, selectChartsInteractionAxisIndex);
var selectorChartAxisInteraction = createSelector2(selectorChartsInteractionPointerX, selectorChartsInteractionPointerY, selectorChartXAxis, selectorChartYAxis, (x2, y2, xAxis, yAxis) => [...x2 === null ? [] : xAxis.axisIds.map((axisId) => ({
  axisId,
  dataIndex: indexGetter(x2, xAxis, axisId)
})), ...y2 === null ? [] : yAxis.axisIds.map((axisId) => ({
  axisId,
  dataIndex: indexGetter(y2, yAxis, axisId)
}))].filter((item) => item.dataIndex !== null && item.dataIndex >= 0));
function valueGetter(value, axes, indexes2, ids = axes.axisIds[0]) {
  return Array.isArray(ids) ? ids.map((id, axisIndex) => {
    const axis = axes.axis[id];
    return getAxisValue(axis.scale, axis.data, value, indexes2[axisIndex]);
  }) : getAxisValue(axes.axis[ids].scale, axes.axis[ids].data, value, indexes2);
}
var selectorChartsInteractionXAxisValue = createSelector2(selectorChartsInteractionPointerX, selectorChartXAxis, selectorChartsInteractionXAxisIndex, (x2, xAxes, xIndex, id) => {
  if (x2 === null || xAxes.axisIds.length === 0) {
    return null;
  }
  return valueGetter(x2, xAxes, xIndex, id);
});
var selectorChartsInteractionYAxisValue = createSelector2(selectorChartsInteractionPointerY, selectorChartYAxis, selectorChartsInteractionYAxisIndex, (y2, yAxes, yIndex, id) => {
  if (y2 === null || yAxes.axisIds.length === 0) {
    return null;
  }
  return valueGetter(y2, yAxes, yIndex, id);
});
var EMPTY_ARRAY2 = [];
var selectorChartsInteractionTooltipXAxes = createSelectorMemoizedWithOptions({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: isDeepEqual
  }
})(selectorChartsInteractionPointerX, selectorChartXAxis, (value, axes) => {
  if (value === null) {
    return EMPTY_ARRAY2;
  }
  return axes.axisIds.filter((id) => axes.axis[id].triggerTooltip).map((axisId) => ({
    axisId,
    dataIndex: getAxisIndex(axes.axis[axisId], value)
  })).filter(({
    dataIndex
  }) => dataIndex >= 0);
});
var selectorChartsInteractionTooltipYAxes = createSelectorMemoizedWithOptions({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: isDeepEqual
  }
})(selectorChartsInteractionPointerY, selectorChartYAxis, (value, axes) => {
  if (value === null) {
    return EMPTY_ARRAY2;
  }
  return axes.axisIds.filter((id) => axes.axis[id].triggerTooltip).map((axisId) => ({
    axisId,
    dataIndex: getAxisIndex(axes.axis[axisId], value)
  })).filter(({
    dataIndex
  }) => dataIndex >= 0);
});
var selectorChartsInteractionAxisTooltip = createSelector2(selectorChartsInteractionTooltipXAxes, selectorChartsInteractionTooltipYAxes, (xTooltip, yTooltip) => xTooltip.length > 0 || yTooltip.length > 0);

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartInteraction/checkHasInteractionPlugin.js
function checkHasInteractionPlugin(instance) {
  return instance.setPointerCoordinate !== void 0;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxis.js
var useChartCartesianAxis = ({
  params,
  store,
  seriesConfig,
  svgRef,
  instance
}) => {
  const {
    xAxis,
    yAxis,
    dataset,
    onHighlightedAxisChange
  } = params;
  if (true) {
    const ids = [...xAxis ?? [], ...yAxis ?? []].filter((axis) => axis.id).map((axis) => axis.id);
    const duplicates = new Set(ids.filter((id, index2) => ids.indexOf(id) !== index2));
    if (duplicates.size > 0) {
      warnOnce([`MUI X Charts: The following axis ids are duplicated: ${Array.from(duplicates).join(", ")}.`, `Please make sure that each axis has a unique id.`].join("\n"), "error");
    }
  }
  const drawingArea = store.use(selectorChartDrawingArea);
  const processedSeries = store.use(selectorChartSeriesProcessed);
  const isInteractionEnabled = store.use(selectorChartsInteractionIsInitialized);
  const {
    axis: xAxisWithScale,
    axisIds: xAxisIds
  } = store.use(selectorChartXAxis);
  const {
    axis: yAxisWithScale,
    axisIds: yAxisIds
  } = store.use(selectorChartYAxis);
  useAssertModelConsistency({
    warningPrefix: "MUI X Charts",
    componentName: "Chart",
    propName: "highlightedAxis",
    controlled: params.highlightedAxis,
    defaultValue: void 0
  });
  useEnhancedEffect_default(() => {
    if (params.highlightedAxis !== void 0) {
      store.set("controlledCartesianAxisHighlight", params.highlightedAxis);
    }
  }, [store, params.highlightedAxis]);
  const isFirstRender = React10.useRef(true);
  React10.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    store.set("cartesianAxis", {
      x: defaultizeXAxis(xAxis, dataset),
      y: defaultizeYAxis(yAxis, dataset)
    });
  }, [seriesConfig, drawingArea, xAxis, yAxis, dataset, store]);
  const usedXAxis = xAxisIds[0];
  const usedYAxis = yAxisIds[0];
  useStoreEffect(store, selectorChartAxisInteraction, (prevAxisInteraction, nextAxisInteraction) => {
    if (!onHighlightedAxisChange) {
      return;
    }
    if (Object.is(prevAxisInteraction, nextAxisInteraction)) {
      return;
    }
    if (prevAxisInteraction.length !== nextAxisInteraction.length) {
      onHighlightedAxisChange(nextAxisInteraction);
      return;
    }
    if (prevAxisInteraction == null ? void 0 : prevAxisInteraction.some(({
      axisId,
      dataIndex
    }, itemIndex) => nextAxisInteraction[itemIndex].axisId !== axisId || nextAxisInteraction[itemIndex].dataIndex !== dataIndex)) {
      onHighlightedAxisChange(nextAxisInteraction);
    }
  });
  const hasInteractionPlugin = checkHasInteractionPlugin(instance);
  React10.useEffect(() => {
    const element = svgRef.current;
    if (!isInteractionEnabled || !hasInteractionPlugin || !element || params.disableAxisListener) {
      return () => {
      };
    }
    const moveEndHandler = instance.addInteractionListener("moveEnd", (event) => {
      if (!event.detail.activeGestures.pan) {
        instance.cleanInteraction();
      }
    });
    const panEndHandler = instance.addInteractionListener("panEnd", (event) => {
      if (!event.detail.activeGestures.move) {
        instance.cleanInteraction();
      }
    });
    const pressEndHandler = instance.addInteractionListener("quickPressEnd", (event) => {
      if (!event.detail.activeGestures.move && !event.detail.activeGestures.pan) {
        instance.cleanInteraction();
      }
    });
    const gestureHandler = (event) => {
      var _a;
      const srvEvent = event.detail.srcEvent;
      const target = event.detail.target;
      const svgPoint = getSVGPoint(element, srvEvent);
      if (event.detail.srcEvent.buttons >= 1 && (target == null ? void 0 : target.hasPointerCapture(event.detail.srcEvent.pointerId)) && !(target == null ? void 0 : target.closest("[data-charts-zoom-slider]"))) {
        target == null ? void 0 : target.releasePointerCapture(event.detail.srcEvent.pointerId);
      }
      if (!instance.isPointInside(svgPoint.x, svgPoint.y, target)) {
        (_a = instance.cleanInteraction) == null ? void 0 : _a.call(instance);
        return;
      }
      instance.setPointerCoordinate(svgPoint);
    };
    const moveHandler = instance.addInteractionListener("move", gestureHandler);
    const panHandler = instance.addInteractionListener("pan", gestureHandler);
    const pressHandler = instance.addInteractionListener("quickPress", gestureHandler);
    return () => {
      moveHandler.cleanup();
      moveEndHandler.cleanup();
      panHandler.cleanup();
      panEndHandler.cleanup();
      pressHandler.cleanup();
      pressEndHandler.cleanup();
    };
  }, [svgRef, store, xAxisWithScale, usedXAxis, yAxisWithScale, usedYAxis, instance, params.disableAxisListener, isInteractionEnabled, hasInteractionPlugin]);
  React10.useEffect(() => {
    const element = svgRef.current;
    const onAxisClick = params.onAxisClick;
    if (element === null || !onAxisClick) {
      return () => {
      };
    }
    const axisClickHandler = instance.addInteractionListener("tap", (event) => {
      let dataIndex = null;
      let isXAxis = false;
      const svgPoint = getSVGPoint(element, event.detail.srcEvent);
      const xIndex = getAxisIndex(xAxisWithScale[usedXAxis], svgPoint.x);
      isXAxis = xIndex !== -1;
      dataIndex = isXAxis ? xIndex : getAxisIndex(yAxisWithScale[usedYAxis], svgPoint.y);
      const USED_AXIS_ID = isXAxis ? xAxisIds[0] : yAxisIds[0];
      if (dataIndex == null || dataIndex === -1) {
        return;
      }
      const axisValue = (isXAxis ? xAxisWithScale : yAxisWithScale)[USED_AXIS_ID].data[dataIndex];
      const seriesValues = {};
      Object.keys(processedSeries).filter((seriesType) => ["bar", "line"].includes(seriesType)).forEach((seriesType) => {
        var _a;
        (_a = processedSeries[seriesType]) == null ? void 0 : _a.seriesOrder.forEach((seriesId) => {
          const seriesItem = processedSeries[seriesType].series[seriesId];
          const providedXAxisId = seriesItem.xAxisId;
          const providedYAxisId = seriesItem.yAxisId;
          const axisKey = isXAxis ? providedXAxisId : providedYAxisId;
          if (axisKey === void 0 || axisKey === USED_AXIS_ID) {
            seriesValues[seriesId] = seriesItem.data[dataIndex];
          }
        });
      });
      onAxisClick(event.detail.srcEvent, {
        dataIndex,
        axisValue,
        seriesValues
      });
    });
    return () => {
      axisClickHandler.cleanup();
    };
  }, [params.onAxisClick, processedSeries, svgRef, xAxisWithScale, xAxisIds, yAxisWithScale, yAxisIds, usedXAxis, usedYAxis, instance]);
  return {};
};
useChartCartesianAxis.params = {
  xAxis: true,
  yAxis: true,
  dataset: true,
  onAxisClick: true,
  disableAxisListener: true,
  onHighlightedAxisChange: true,
  highlightedAxis: true
};
useChartCartesianAxis.getDefaultizedParams = ({
  params
}) => {
  return _extends({}, params, {
    colors: params.colors ?? rainbowSurgePalette,
    theme: params.theme ?? "light",
    defaultizedXAxis: defaultizeXAxis(params.xAxis, params.dataset),
    defaultizedYAxis: defaultizeYAxis(params.yAxis, params.dataset)
  });
};
useChartCartesianAxis.getInitialState = (params) => _extends({
  cartesianAxis: {
    x: params.defaultizedXAxis,
    y: params.defaultizedYAxis
  }
}, params.highlightedAxis === void 0 ? {} : {
  controlledCartesianAxisHighlight: params.highlightedAxis
});

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartBrush/useChartBrush.js
var React11 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartBrush/useChartBrush.selectors.js
var selectorBrush = (state) => state.brush;
var selectorBrushStart = createSelector2(selectorBrush, (brush) => brush == null ? void 0 : brush.start);
var selectorBrushCurrent = createSelector2(selectorBrush, (brush) => brush == null ? void 0 : brush.current);
var selectorBrushStartX = createSelector2(selectorBrush, (brush) => {
  var _a;
  return ((_a = brush == null ? void 0 : brush.start) == null ? void 0 : _a.x) ?? null;
});
var selectorBrushStartY = createSelector2(selectorBrush, (brush) => {
  var _a;
  return ((_a = brush == null ? void 0 : brush.start) == null ? void 0 : _a.y) ?? null;
});
var selectorBrushCurrentX = createSelector2(selectorBrush, (brush) => {
  var _a;
  return ((_a = brush == null ? void 0 : brush.current) == null ? void 0 : _a.x) ?? null;
});
var selectorBrushCurrentY = createSelector2(selectorBrush, (brush) => {
  var _a;
  return ((_a = brush == null ? void 0 : brush.current) == null ? void 0 : _a.y) ?? null;
});
var selectorBrushState = createSelectorMemoized(selectorBrushStartX, selectorBrushStartY, selectorBrushCurrentX, selectorBrushCurrentY, (startX, startY, currentX, currentY) => {
  if (startX === null || startY === null || currentX === null || currentY === null) {
    return null;
  }
  return {
    start: {
      x: startX,
      y: startY
    },
    current: {
      x: currentX,
      y: currentY
    }
  };
});
var selectorBrushConfigNoZoom = createSelector2(selectorChartSeriesProcessed, (series) => {
  let hasHorizontal = false;
  let isBothDirections = false;
  if (series) {
    Object.entries(series).forEach(([seriesType, seriesData]) => {
      if (Object.values(seriesData.series).some((s2) => s2.layout === "horizontal")) {
        hasHorizontal = true;
      }
      if (seriesType === "scatter" && seriesData.seriesOrder.length > 0) {
        isBothDirections = true;
      }
    });
  }
  if (isBothDirections) {
    return "xy";
  }
  if (hasHorizontal) {
    return "y";
  }
  return "x";
});
var selectorBrushConfigZoom = createSelector2(selectorChartZoomOptionsLookup, function selectorBrushConfigZoom2(optionsLookup) {
  let hasX = false;
  let hasY = false;
  Object.values(optionsLookup).forEach((options) => {
    if (options.axisDirection === "y") {
      hasY = true;
    }
    if (options.axisDirection === "x") {
      hasX = true;
    }
  });
  if (hasX && hasY) {
    return "xy";
  }
  if (hasY) {
    return "y";
  }
  if (hasX) {
    return "x";
  }
  return null;
});
var selectorBrushConfig = createSelector2(selectorBrushConfigNoZoom, selectorBrushConfigZoom, (configNoZoom, configZoom) => configZoom ?? configNoZoom);
var selectorIsBrushEnabled = createSelector2(selectorBrush, (brush) => (brush == null ? void 0 : brush.enabled) || (brush == null ? void 0 : brush.isZoomBrushEnabled));
var selectorIsBrushSelectionActive = createSelector2(selectorIsBrushEnabled, selectorBrush, (isBrushEnabled, brush) => {
  return isBrushEnabled && (brush == null ? void 0 : brush.start) !== null && (brush == null ? void 0 : brush.current) !== null;
});
var selectorBrushShouldPreventAxisHighlight = createSelector2(selectorBrush, selectorIsBrushSelectionActive, (brush, isBrushSelectionActive) => isBrushSelectionActive && (brush == null ? void 0 : brush.preventHighlight));
var selectorBrushShouldPreventTooltip = createSelector2(selectorBrush, selectorIsBrushSelectionActive, (brush, isBrushSelectionActive) => isBrushSelectionActive && (brush == null ? void 0 : brush.preventTooltip));

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartBrush/useChartBrush.js
var useChartBrush = ({
  store,
  svgRef,
  instance,
  params
}) => {
  const isEnabled = store.use(selectorIsBrushEnabled);
  useEnhancedEffect_default(() => {
    store.set("brush", _extends({}, store.state.brush, {
      enabled: params.brushConfig.enabled,
      preventTooltip: params.brushConfig.preventTooltip,
      preventHighlight: params.brushConfig.preventHighlight
    }));
  }, [store, params.brushConfig.enabled, params.brushConfig.preventTooltip, params.brushConfig.preventHighlight]);
  const setBrushCoordinates = useEventCallback_default(function setBrushCoordinates2(point6) {
    store.set("brush", _extends({}, store.state.brush, {
      start: store.state.brush.start ?? point6,
      current: point6
    }));
  });
  const clearBrush = useEventCallback_default(function clearBrush2() {
    store.set("brush", _extends({}, store.state.brush, {
      start: null,
      current: null
    }));
  });
  const setZoomBrushEnabled = useEventCallback_default(function setZoomBrushEnabled2(enabled) {
    if (store.state.brush.isZoomBrushEnabled === enabled) {
      return;
    }
    store.set("brush", _extends({}, store.state.brush, {
      isZoomBrushEnabled: enabled
    }));
  });
  React11.useEffect(() => {
    const element = svgRef.current;
    if (element === null || !isEnabled) {
      return () => {
      };
    }
    const handleBrushStart = (event) => {
      var _a;
      if ((_a = event.detail.target) == null ? void 0 : _a.closest("[data-charts-zoom-slider]")) {
        return;
      }
      const point6 = getSVGPoint(element, {
        clientX: event.detail.initialCentroid.x,
        clientY: event.detail.initialCentroid.y
      });
      setBrushCoordinates(point6);
    };
    const handleBrush = (event) => {
      const currentPoint = getSVGPoint(element, {
        clientX: event.detail.centroid.x,
        clientY: event.detail.centroid.y
      });
      setBrushCoordinates(currentPoint);
    };
    const brushStartHandler = instance.addInteractionListener("brushStart", handleBrushStart);
    const brushHandler = instance.addInteractionListener("brush", handleBrush);
    const brushCancelHandler = instance.addInteractionListener("brushCancel", clearBrush);
    const brushEndHandler = instance.addInteractionListener("brushEnd", clearBrush);
    return () => {
      brushStartHandler.cleanup();
      brushHandler.cleanup();
      brushEndHandler.cleanup();
      brushCancelHandler.cleanup();
    };
  }, [svgRef, instance, store, clearBrush, setBrushCoordinates, isEnabled]);
  return {
    instance: {
      setBrushCoordinates,
      clearBrush,
      setZoomBrushEnabled
    }
  };
};
useChartBrush.params = {
  brushConfig: true
};
useChartBrush.getDefaultizedParams = ({
  params
}) => {
  var _a, _b, _c;
  return _extends({}, params, {
    brushConfig: {
      enabled: ((_a = params == null ? void 0 : params.brushConfig) == null ? void 0 : _a.enabled) ?? false,
      preventTooltip: ((_b = params == null ? void 0 : params.brushConfig) == null ? void 0 : _b.preventTooltip) ?? true,
      preventHighlight: ((_c = params == null ? void 0 : params.brushConfig) == null ? void 0 : _c.preventHighlight) ?? true
    }
  });
};
useChartBrush.getInitialState = (params) => {
  return {
    brush: {
      enabled: params.brushConfig.enabled,
      isZoomBrushEnabled: false,
      preventTooltip: params.brushConfig.preventTooltip,
      preventHighlight: params.brushConfig.preventHighlight,
      start: null,
      current: null
    }
  };
};

// ../node_modules/@mui/x-internals/esm/fastObjectShallowCompare/fastObjectShallowCompare.js
var is = Object.is;
function fastObjectShallowCompare(a2, b) {
  if (a2 === b) {
    return true;
  }
  if (!(a2 instanceof Object) || !(b instanceof Object)) {
    return false;
  }
  let aLength = 0;
  let bLength = 0;
  for (const key in a2) {
    aLength += 1;
    if (!is(a2[key], b[key])) {
      return false;
    }
    if (!(key in b)) {
      return false;
    }
  }
  for (const _ in b) {
    bLength += 1;
  }
  return aLength === bLength;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartKeyboardNavigation/useChartKeyboardNavigation.selectors.js
var selectKeyboardNavigation = (state) => state.keyboardNavigation;
var selectorChartsItemIsFocused = createSelector2(selectKeyboardNavigation, (keyboardNavigationState, item) => (keyboardNavigationState == null ? void 0 : keyboardNavigationState.item) != null && fastObjectShallowCompare(keyboardNavigationState.item, item));
var selectorChartsHasFocusedItem = createSelector2(selectKeyboardNavigation, (keyboardNavigationState) => (keyboardNavigationState == null ? void 0 : keyboardNavigationState.item) != null);
var selectorChartsFocusedItem = createSelector2(selectKeyboardNavigation, (keyboardNavigationState) => (keyboardNavigationState == null ? void 0 : keyboardNavigationState.item) ?? null);
var selectorChartsIsKeyboardNavigationEnabled = createSelector2(selectKeyboardNavigation, (keyboardNavigationState) => !!(keyboardNavigationState == null ? void 0 : keyboardNavigationState.enableKeyboardNavigation));
var createSelectAxisHighlight = (direction) => (item, axis, series) => {
  var _a;
  if (item == null || !("dataIndex" in item) || item.dataIndex === void 0) {
    return void 0;
  }
  const seriesConfig = (_a = series[item.type]) == null ? void 0 : _a.series[item.seriesId];
  if (!seriesConfig) {
    return void 0;
  }
  let axisId = direction === "x" ? "xAxisId" in seriesConfig && seriesConfig.xAxisId : "yAxisId" in seriesConfig && seriesConfig.yAxisId;
  if (axisId === void 0 || axisId === false) {
    axisId = axis.axisIds[0];
  }
  return {
    axisId,
    dataIndex: item.dataIndex
  };
};
var selectorChartsKeyboardXAxisIndex = createSelector2(selectorChartsFocusedItem, selectorChartXAxis, selectorChartSeriesProcessed, createSelectAxisHighlight("x"));
var selectorChartsKeyboardYAxisIndex = createSelector2(selectorChartsFocusedItem, selectorChartYAxis, selectorChartSeriesProcessed, createSelectAxisHighlight("y"));
var selectorChartsKeyboardItem = createSelector2(selectKeyboardNavigation, function selectorChartsKeyboardItem2(keyboardState) {
  if ((keyboardState == null ? void 0 : keyboardState.item) == null) {
    return null;
  }
  const {
    type,
    seriesId
  } = keyboardState.item;
  if (type === void 0 || seriesId === void 0) {
    return null;
  }
  return keyboardState.item;
});

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianHighlight.selectors.js
var selectorChartControlledCartesianAxisHighlight = (state) => state.controlledCartesianAxisHighlight;
var selectAxisHighlight = (computedIndex, axis, axisItems, isBrushSelectionActive) => {
  if (isBrushSelectionActive) {
    return [];
  }
  if (axisItems !== void 0) {
    return axisItems.filter((item) => axis.axis[item.axisId] !== void 0).map((item) => item);
  }
  return computedIndex === null ? [] : [{
    axisId: axis.axisIds[0],
    dataIndex: computedIndex
  }];
};
var selectorChartsHighlightXAxisIndex = createSelectorMemoized(selectorChartsInteractionXAxisIndex, selectorChartXAxis, selectorChartControlledCartesianAxisHighlight, selectorBrushShouldPreventAxisHighlight, selectAxisHighlight);
var selectorChartsHighlightYAxisIndex = createSelectorMemoized(selectorChartsInteractionYAxisIndex, selectorChartYAxis, selectorChartControlledCartesianAxisHighlight, selectorBrushShouldPreventAxisHighlight, selectAxisHighlight);
var selectAxisHighlightWithValue = (computedIndex, computedValue, axis, controlledAxisItems, keyboardAxisItem, lastInteractionUpdate, isBrushSelectionActive) => {
  var _a, _b;
  if (isBrushSelectionActive) {
    return [];
  }
  if (controlledAxisItems !== void 0) {
    return controlledAxisItems.map((item) => {
      var _a2, _b2;
      return _extends({}, item, {
        value: (_b2 = (_a2 = axis.axis[item.axisId]) == null ? void 0 : _a2.data) == null ? void 0 : _b2[item.dataIndex]
      });
    }).filter(({
      value
    }) => value !== void 0);
  }
  const pointerHighlight = computedValue !== null && {
    axisId: axis.axisIds[0],
    dataIndex: computedIndex,
    value: computedValue
  };
  const keyboardValue = keyboardAxisItem && ((_b = (_a = axis.axis[keyboardAxisItem.axisId]) == null ? void 0 : _a.data) == null ? void 0 : _b[keyboardAxisItem.dataIndex]);
  const keyboardHighlight = keyboardAxisItem && keyboardValue != null && _extends({}, keyboardAxisItem, {
    value: keyboardValue
  });
  if (lastInteractionUpdate === "pointer") {
    if (pointerHighlight) {
      return [pointerHighlight];
    }
    if (keyboardHighlight) {
      return [keyboardHighlight];
    }
  }
  if (lastInteractionUpdate === "keyboard") {
    if (keyboardHighlight) {
      return [keyboardHighlight];
    }
    if (pointerHighlight) {
      return [pointerHighlight];
    }
  }
  return [];
};
var selectorChartsHighlightXAxisValue = createSelectorMemoized(selectorChartsInteractionXAxisIndex, selectorChartsInteractionXAxisValue, selectorChartXAxis, selectorChartControlledCartesianAxisHighlight, selectorChartsKeyboardXAxisIndex, selectorChartsLastInteraction, selectorBrushShouldPreventAxisHighlight, selectAxisHighlightWithValue);
var selectorChartsHighlightYAxisValue = createSelectorMemoized(selectorChartsInteractionYAxisIndex, selectorChartsInteractionYAxisValue, selectorChartYAxis, selectorChartControlledCartesianAxisHighlight, selectorChartsKeyboardYAxisIndex, selectorChartsLastInteraction, selectorBrushShouldPreventAxisHighlight, selectAxisHighlightWithValue);
var selectAxis = (axisItems, axis) => {
  if (axisItems === void 0) {
    return [axis.axis[axis.axisIds[0]]];
  }
  const filteredAxes = axisItems.map((item) => axis.axis[item.axisId] ?? null).filter((item) => item !== null);
  return filteredAxes;
};
var selectorChartsHighlightXAxis = createSelector2(selectorChartControlledCartesianAxisHighlight, selectorChartXAxis, selectAxis);
var selectorChartsHighlightYAxis = createSelector2(selectorChartControlledCartesianAxisHighlight, selectorChartYAxis, selectAxis);

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxisPreview.selectors.js
function createPreviewDrawingArea(axisDirection, mainChartDrawingArea) {
  return axisDirection === "x" ? {
    left: 0,
    top: 0,
    width: mainChartDrawingArea.width,
    height: ZOOM_SLIDER_PREVIEW_SIZE,
    right: mainChartDrawingArea.width,
    bottom: ZOOM_SLIDER_PREVIEW_SIZE
  } : {
    left: 0,
    top: 0,
    width: ZOOM_SLIDER_PREVIEW_SIZE,
    height: mainChartDrawingArea.height,
    right: ZOOM_SLIDER_PREVIEW_SIZE,
    bottom: mainChartDrawingArea.height
  };
}
var selectorChartPreviewXScales = createSelectorMemoized(selectorChartRawXAxis, selectorChartDrawingArea, selectorChartZoomOptionsLookup, selectorChartNormalizedXScales, function selectorChartPreviewXScales2(xAxes, chartDrawingArea, zoomOptions, normalizedXScales, axisId) {
  const hasAxis = xAxes == null ? void 0 : xAxes.some((axis) => axis.id === axisId);
  const drawingArea = createPreviewDrawingArea(hasAxis ? "x" : "y", chartDrawingArea);
  const options = zoomOptions[axisId];
  const scales = {};
  xAxes == null ? void 0 : xAxes.forEach((eachAxis) => {
    const axis = eachAxis;
    const scale = normalizedXScales[axis.id].copy();
    const range2 = getRange2(drawingArea, "x", axis);
    const zoomedRange = zoomScaleRange(range2, [options.minStart, options.maxEnd]);
    scale.range(zoomedRange);
    scales[axis.id] = scale;
  });
  return scales;
});
var selectorChartPreviewComputedXAxis = createSelectorMemoized(selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorChartZoomOptionsLookup, selectorChartDrawingArea, selectorChartPreviewXScales, selectorChartXAxisWithDomains, (formattedSeries, seriesConfig, zoomOptions, chartDrawingArea, scales, {
  axes,
  domains
}, axisId) => {
  const hasAxis = axes == null ? void 0 : axes.some((axis) => axis.id === axisId);
  const drawingArea = createPreviewDrawingArea(hasAxis ? "x" : "y", chartDrawingArea);
  const options = zoomOptions[axisId];
  const zoomMap = /* @__PURE__ */ new Map([[axisId, {
    axisId,
    start: options.minStart,
    end: options.maxEnd
  }]]);
  const computedAxes = computeAxisValue({
    scales,
    drawingArea,
    formattedSeries,
    axis: axes,
    seriesConfig,
    axisDirection: "x",
    zoomMap,
    domains
  });
  if (computedAxes.axis[axisId]) {
    return {
      [axisId]: computedAxes.axis[axisId]
    };
  }
  return computedAxes.axis;
});
var selectorChartPreviewYScales = createSelectorMemoized(selectorChartRawYAxis, selectorChartDrawingArea, selectorChartZoomOptionsLookup, selectorChartNormalizedYScales, function selectorChartPreviewYScales2(yAxes, chartDrawingArea, zoomOptions, normalizedYScales, axisId) {
  const hasAxis = yAxes == null ? void 0 : yAxes.some((axis) => axis.id === axisId);
  const drawingArea = createPreviewDrawingArea(hasAxis ? "y" : "x", chartDrawingArea);
  const options = zoomOptions[axisId];
  const scales = {};
  yAxes == null ? void 0 : yAxes.forEach((eachAxis) => {
    const axis = eachAxis;
    const scale = normalizedYScales[axis.id].copy();
    let range2 = getRange2(drawingArea, "y", axis);
    if (isOrdinalScale(scale)) {
      range2 = range2.reverse();
    }
    const zoomedRange = zoomScaleRange(range2, [options.minStart, options.maxEnd]);
    scale.range(zoomedRange);
    scales[axis.id] = scale;
  });
  return scales;
});
var selectorChartPreviewComputedYAxis = createSelectorMemoized(selectorChartSeriesProcessed, selectorChartSeriesConfig, selectorChartZoomOptionsLookup, selectorChartDrawingArea, selectorChartPreviewYScales, selectorChartYAxisWithDomains, (formattedSeries, seriesConfig, zoomOptions, chartDrawingArea, scales, {
  axes,
  domains
}, axisId) => {
  const hasAxis = axes == null ? void 0 : axes.some((axis) => axis.id === axisId);
  const drawingArea = createPreviewDrawingArea(hasAxis ? "y" : "x", chartDrawingArea);
  const options = zoomOptions[axisId];
  const zoomMap = /* @__PURE__ */ new Map([[axisId, {
    axisId,
    start: options.minStart,
    end: options.maxEnd
  }]]);
  const computedAxes = computeAxisValue({
    scales,
    drawingArea,
    formattedSeries,
    axis: axes,
    seriesConfig,
    axisDirection: "y",
    zoomMap,
    domains
  });
  if (computedAxes.axis[axisId]) {
    return {
      [axisId]: computedAxes.axis[axisId]
    };
  }
  return computedAxes.axis;
});

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartTooltip/useChartTooltip.js
var useChartTooltip = ({
  store
}) => {
  const removeTooltipItem = useEventCallback_default(function removeTooltipItem2(itemToRemove) {
    const prevItem = store.state.tooltip.item;
    if (!itemToRemove) {
      if (prevItem !== null) {
        store.set("tooltip", {
          item: null
        });
      }
      return;
    }
    if (prevItem === null || !fastObjectShallowCompare(prevItem, itemToRemove)) {
      return;
    }
    store.set("tooltip", {
      item: null
    });
  });
  const setTooltipItem = useEventCallback_default(function setTooltipItem2(newItem) {
    if (!fastObjectShallowCompare(store.state.tooltip.item, newItem)) {
      store.set("tooltip", {
        item: newItem
      });
    }
  });
  return {
    instance: {
      setTooltipItem,
      removeTooltipItem
    }
  };
};
useChartTooltip.getInitialState = () => ({
  tooltip: {
    item: null
  }
});
useChartTooltip.params = {};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartKeyboardNavigation/useChartKeyboardNavigation.js
var React12 = __toESM(require_react(), 1);
var useChartKeyboardNavigation = ({
  params,
  store,
  svgRef
}) => {
  const removeFocus = useEventCallback_default(function removeFocus2() {
    if (store.state.keyboardNavigation.item !== null) {
      store.set("keyboardNavigation", _extends({}, store.state.keyboardNavigation, {
        item: null
      }));
    }
  });
  React12.useEffect(() => {
    const element = svgRef.current;
    if (!element || !params.enableKeyboardNavigation) {
      return void 0;
    }
    function keyboardHandler(event) {
      var _a, _b;
      let newFocusedItem = store.state.keyboardNavigation.item;
      let seriesType = newFocusedItem == null ? void 0 : newFocusedItem.type;
      if (!seriesType) {
        seriesType = Object.keys(selectorChartDefaultizedSeries(store.state)).find((key) => store.state.series.seriesConfig[key] !== void 0);
        if (seriesType === void 0) {
          return;
        }
      }
      const calculateFocusedItem = (_b = (_a = store.state.series.seriesConfig[seriesType]) == null ? void 0 : _a.keyboardFocusHandler) == null ? void 0 : _b.call(_a, event);
      if (!calculateFocusedItem) {
        return;
      }
      newFocusedItem = calculateFocusedItem(newFocusedItem, store.state);
      if (newFocusedItem !== store.state.keyboardNavigation.item) {
        event.preventDefault();
        store.update(_extends({}, store.state.highlight && {
          highlight: _extends({}, store.state.highlight, {
            lastUpdate: "keyboard"
          })
        }, store.state.interaction && {
          interaction: _extends({}, store.state.interaction, {
            lastUpdate: "keyboard"
          })
        }, {
          keyboardNavigation: _extends({}, store.state.keyboardNavigation, {
            item: newFocusedItem
          })
        }));
      }
    }
    element.addEventListener("keydown", keyboardHandler);
    element.addEventListener("blur", removeFocus);
    return () => {
      element.removeEventListener("keydown", keyboardHandler);
      element.removeEventListener("blur", removeFocus);
    };
  }, [svgRef, removeFocus, params.enableKeyboardNavigation, store]);
  useEnhancedEffect_default(() => {
    if (store.state.keyboardNavigation.enableKeyboardNavigation !== params.enableKeyboardNavigation) {
      store.set("keyboardNavigation", _extends({}, store.state.keyboardNavigation, {
        enableKeyboardNavigation: !!params.enableKeyboardNavigation
      }));
    }
  }, [store, params.enableKeyboardNavigation]);
  return {};
};
useChartKeyboardNavigation.getInitialState = (params) => ({
  keyboardNavigation: {
    item: null,
    enableKeyboardNavigation: !!params.enableKeyboardNavigation
  }
});
useChartKeyboardNavigation.params = {
  enableKeyboardNavigation: true
};

// ../node_modules/@mui/x-charts/esm/internals/isPolar.js
function isPolarSeriesType(seriesType) {
  return polarSeriesTypes.getTypes().has(seriesType);
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/getAxisExtremum.js
var axisExtremumCallback2 = (acc, chartType, axis, axisDirection, seriesConfig, axisIndex, formattedSeries) => {
  var _a;
  const getter = axisDirection === "rotation" ? seriesConfig[chartType].rotationExtremumGetter : seriesConfig[chartType].radiusExtremumGetter;
  const series = ((_a = formattedSeries[chartType]) == null ? void 0 : _a.series) ?? {};
  const [minChartTypeData, maxChartTypeData] = (getter == null ? void 0 : getter({
    series,
    axis,
    axisIndex,
    isDefaultAxis: axisIndex === 0
  })) ?? [Infinity, -Infinity];
  const [minData, maxData] = acc;
  return [Math.min(minChartTypeData, minData), Math.max(maxChartTypeData, maxData)];
};
var getAxisExtremum = (axis, axisDirection, seriesConfig, axisIndex, formattedSeries) => {
  const polarSeriesTypes2 = Object.keys(seriesConfig).filter(isPolarSeriesType);
  const extremums = polarSeriesTypes2.reduce((acc, charType) => axisExtremumCallback2(acc, charType, axis, axisDirection, seriesConfig, axisIndex, formattedSeries), [Infinity, -Infinity]);
  if (Number.isNaN(extremums[0]) || Number.isNaN(extremums[1])) {
    return [Infinity, -Infinity];
  }
  return extremums;
};

// ../node_modules/@mui/x-charts/esm/internals/angleConversion.js
var deg2rad = (value, defaultRad) => {
  if (value === void 0) {
    return defaultRad;
  }
  return Math.PI * value / 180;
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/getAxisTriggerTooltip.js
var getAxisTriggerTooltip2 = (axisDirection, seriesConfig, formattedSeries, defaultAxisId) => {
  const tooltipAxesIds = /* @__PURE__ */ new Set();
  const chartTypes = Object.keys(seriesConfig).filter(isPolarSeriesType);
  chartTypes.forEach((chartType) => {
    var _a, _b, _c;
    const series = ((_a = formattedSeries[chartType]) == null ? void 0 : _a.series) ?? {};
    const tooltipAxes = (_c = (_b = seriesConfig[chartType]).axisTooltipGetter) == null ? void 0 : _c.call(_b, series);
    if (tooltipAxes === void 0) {
      return;
    }
    tooltipAxes.forEach(({
      axisId,
      direction
    }) => {
      if (direction === axisDirection) {
        tooltipAxesIds.add(axisId ?? defaultAxisId);
      }
    });
  });
  return tooltipAxesIds;
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/computeAxisValue.js
function getRange3(drawingArea, axisDirection, axis) {
  if (axisDirection === "rotation") {
    if (axis.scaleType === "point") {
      const angles = [deg2rad(axis.startAngle, 0), deg2rad(axis.endAngle, 2 * Math.PI)];
      const diff = angles[1] - angles[0];
      if (diff > Math.PI * 2 - 0.1) {
        angles[1] -= diff / axis.data.length;
      }
      return angles;
    }
    return [deg2rad(axis.startAngle, 0), deg2rad(axis.endAngle, 2 * Math.PI)];
  }
  return [0, Math.min(drawingArea.height, drawingArea.width) / 2];
}
var DEFAULT_CATEGORY_GAP_RATIO3 = 0.2;
var DEFAULT_BAR_GAP_RATIO2 = 0.1;
function computeAxisValue2({
  drawingArea,
  formattedSeries,
  axis: allAxis,
  seriesConfig,
  axisDirection
}) {
  if (allAxis === void 0) {
    return {
      axis: {},
      axisIds: []
    };
  }
  const axisIdsTriggeringTooltip = getAxisTriggerTooltip2(axisDirection, seriesConfig, formattedSeries, allAxis[0].id);
  const completeAxis = {};
  allAxis.forEach((eachAxis, axisIndex) => {
    const axis = eachAxis;
    const range2 = getRange3(drawingArea, axisDirection, axis);
    const [minData, maxData] = getAxisExtremum(axis, axisDirection, seriesConfig, axisIndex, formattedSeries);
    const triggerTooltip = !axis.ignoreTooltip && axisIdsTriggeringTooltip.has(axis.id);
    const data = axis.data ?? [];
    if (isBandScaleConfig(axis)) {
      const categoryGapRatio = axis.categoryGapRatio ?? DEFAULT_CATEGORY_GAP_RATIO3;
      const barGapRatio = axis.barGapRatio ?? DEFAULT_BAR_GAP_RATIO2;
      completeAxis[axis.id] = _extends({
        offset: 0,
        categoryGapRatio,
        barGapRatio,
        triggerTooltip
      }, axis, {
        data,
        scale: scaleBand(axis.data, range2).paddingInner(categoryGapRatio).paddingOuter(categoryGapRatio / 2),
        tickNumber: axis.data.length,
        colorScale: axis.colorMap && (axis.colorMap.type === "ordinal" ? getOrdinalColorScale(_extends({
          values: axis.data
        }, axis.colorMap)) : getColorScale(axis.colorMap))
      });
      if (isDateData(axis.data)) {
        const dateFormatter = createDateFormatter(axis.data, range2, axis.tickNumber);
        completeAxis[axis.id].valueFormatter = axis.valueFormatter ?? dateFormatter;
      }
    }
    if (isPointScaleConfig(axis)) {
      completeAxis[axis.id] = _extends({
        offset: 0,
        triggerTooltip
      }, axis, {
        data,
        scale: scalePoint(axis.data, range2),
        tickNumber: axis.data.length,
        colorScale: axis.colorMap && (axis.colorMap.type === "ordinal" ? getOrdinalColorScale(_extends({
          values: axis.data
        }, axis.colorMap)) : getColorScale(axis.colorMap))
      });
      if (isDateData(axis.data)) {
        const dateFormatter = createDateFormatter(axis.data, range2, axis.tickNumber);
        completeAxis[axis.id].valueFormatter = axis.valueFormatter ?? dateFormatter;
      }
    }
    if (!isContinuousScaleConfig(axis)) {
      return;
    }
    const scaleType = axis.scaleType ?? "linear";
    const domainLimit = axis.domainLimit ?? "nice";
    const axisExtremums = [axis.min ?? minData, axis.max ?? maxData];
    if (typeof domainLimit === "function") {
      const {
        min: min4,
        max: max4
      } = domainLimit(minData, maxData);
      axisExtremums[0] = min4;
      axisExtremums[1] = max4;
    }
    const rawTickNumber = getTickNumber(axis, axisExtremums, getDefaultTickNumber(Math.abs(range2[1] - range2[0])));
    const tickNumber = scaleTickNumberByRange(rawTickNumber, range2);
    const scale = getScale(scaleType, axisExtremums, range2);
    const finalScale = domainLimit === "nice" ? scale.nice(rawTickNumber) : scale;
    const [minDomain, maxDomain] = finalScale.domain();
    const domain = [axis.min ?? minDomain, axis.max ?? maxDomain];
    completeAxis[axis.id] = _extends({
      offset: 0,
      triggerTooltip
    }, axis, {
      data,
      scaleType,
      scale: finalScale.domain(domain),
      tickNumber,
      colorScale: axis.colorMap && getColorScale(axis.colorMap)
    });
  });
  return {
    axis: completeAxis,
    axisIds: allAxis.map(({
      id
    }) => id)
  };
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarAxis.selectors.js
var selectorChartPolarAxisState = (state) => state.polarAxis;
var selectorChartRawRotationAxis = createSelector2(selectorChartPolarAxisState, (axis) => axis == null ? void 0 : axis.rotation);
var selectorChartRawRadiusAxis = createSelector2(selectorChartPolarAxisState, (axis) => axis == null ? void 0 : axis.radius);
var selectorChartRotationAxis = createSelectorMemoized(selectorChartRawRotationAxis, selectorChartDrawingArea, selectorChartSeriesProcessed, selectorChartSeriesConfig, (axis, drawingArea, formattedSeries, seriesConfig) => computeAxisValue2({
  drawingArea,
  formattedSeries,
  axis,
  seriesConfig,
  axisDirection: "rotation"
}));
var selectorChartRadiusAxis = createSelectorMemoized(selectorChartRawRadiusAxis, selectorChartDrawingArea, selectorChartSeriesProcessed, selectorChartSeriesConfig, (axis, drawingArea, formattedSeries, seriesConfig) => computeAxisValue2({
  drawingArea,
  formattedSeries,
  axis,
  seriesConfig,
  axisDirection: "radius"
}));
function getDrawingAreaCenter(drawingArea) {
  return {
    cx: drawingArea.left + drawingArea.width / 2,
    cy: drawingArea.top + drawingArea.height / 2
  };
}
var selectorChartPolarCenter = createSelectorMemoized(selectorChartDrawingArea, getDrawingAreaCenter);

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartTooltip/useChartTooltip.selectors.js
var selectTooltip = (state) => state.tooltip;
var selectorChartsTooltipPointerItem = createSelector2(selectTooltip, (tooltip) => (tooltip == null ? void 0 : tooltip.item) ?? null);
var selectorChartsTooltipPointerItemIsDefined = createSelector2(selectorChartsTooltipPointerItem, (item) => item !== null);
var selectorChartsTooltipItem = createSelector2(selectorChartsLastInteraction, selectorChartsTooltipPointerItem, selectorChartsKeyboardItem, (lastInteraction, pointerItem, keyboardItem) => lastInteraction === "keyboard" ? keyboardItem : pointerItem ?? null);
var selectorChartsTooltipItemIsDefined = createSelector2(selectorChartsLastInteraction, selectorChartsTooltipPointerItemIsDefined, selectorChartsHasFocusedItem, (lastInteraction, pointerItemIsDefined, keyboardItemIsDefined) => lastInteraction === "keyboard" ? keyboardItemIsDefined : pointerItemIsDefined);
var selectorChartsTooltipAxisConfig = createSelectorMemoized(selectorChartsTooltipItem, selectorChartXAxis, selectorChartYAxis, selectorChartRotationAxis, selectorChartRadiusAxis, selectorChartSeriesProcessed, function selectorChartsTooltipAxisConfig2(identifier, {
  axis: xAxis,
  axisIds: xAxisIds
}, {
  axis: yAxis,
  axisIds: yAxisIds
}, rotationAxes, radiusAxes, series) {
  var _a;
  if (!identifier) {
    return {};
  }
  const itemSeries = (_a = series[identifier.type]) == null ? void 0 : _a.series[identifier.seriesId];
  if (!itemSeries) {
    return {};
  }
  const axesConfig = {
    rotationAxes,
    radiusAxes
  };
  const xAxisId = isCartesianSeries(itemSeries) ? itemSeries.xAxisId ?? xAxisIds[0] : void 0;
  const yAxisId = isCartesianSeries(itemSeries) ? itemSeries.yAxisId ?? yAxisIds[0] : void 0;
  if (xAxisId !== void 0) {
    axesConfig.x = xAxis[xAxisId];
  }
  if (yAxisId !== void 0) {
    axesConfig.y = yAxis[yAxisId];
  }
  return axesConfig;
});
var selectorChartsTooltipItemPosition = createSelectorMemoized(selectorChartsTooltipItem, selectorChartDrawingArea, selectorChartSeriesConfig, selectorChartSeriesProcessed, selectorChartSeriesLayout, selectorChartsTooltipAxisConfig, function selectorChartsTooltipItemPosition2(identifier, drawingArea, seriesConfig, series, seriesLayout2, axesConfig, placement = "top") {
  var _a, _b, _c;
  if (!identifier) {
    return null;
  }
  const itemSeries = (_a = series[identifier.type]) == null ? void 0 : _a.series[identifier.seriesId];
  if (!itemSeries) {
    return null;
  }
  return ((_c = (_b = seriesConfig[itemSeries.type]).tooltipItemPositionGetter) == null ? void 0 : _c.call(_b, {
    series,
    seriesLayout: seriesLayout2,
    drawingArea,
    axesConfig,
    identifier,
    placement
  })) ?? null;
});

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartZAxis/useChartZAxis.js
var React13 = __toESM(require_react(), 1);
function addDefaultId(axisConfig, defaultId) {
  if (axisConfig.id !== void 0) {
    return axisConfig;
  }
  return _extends({
    id: defaultId
  }, axisConfig);
}
function processColorMap(axisConfig) {
  if (!axisConfig.colorMap) {
    return axisConfig;
  }
  return _extends({}, axisConfig, {
    colorScale: axisConfig.colorMap.type === "ordinal" && axisConfig.data ? getOrdinalColorScale(_extends({
      values: axisConfig.data
    }, axisConfig.colorMap)) : getColorScale(axisConfig.colorMap.type === "continuous" ? _extends({
      min: axisConfig.min,
      max: axisConfig.max
    }, axisConfig.colorMap) : axisConfig.colorMap)
  });
}
function getZAxisState(zAxis, dataset) {
  if (!zAxis || zAxis.length === 0) {
    return {
      axis: {},
      axisIds: []
    };
  }
  const zAxisLookup = {};
  const axisIds = [];
  zAxis.forEach((axisConfig, index2) => {
    const dataKey = axisConfig.dataKey;
    const defaultizedId = axisConfig.id ?? `defaultized-z-axis-${index2}`;
    if (dataKey === void 0 || axisConfig.data !== void 0) {
      zAxisLookup[defaultizedId] = processColorMap(addDefaultId(axisConfig, defaultizedId));
      axisIds.push(defaultizedId);
      return;
    }
    if (dataset === void 0) {
      throw new Error("MUI X Charts: z-axis uses `dataKey` but no `dataset` is provided.");
    }
    zAxisLookup[defaultizedId] = processColorMap(addDefaultId(_extends({}, axisConfig, {
      data: dataset.map((d) => d[dataKey])
    }), defaultizedId));
    axisIds.push(defaultizedId);
  });
  return {
    axis: zAxisLookup,
    axisIds
  };
}
var useChartZAxis = ({
  params,
  store
}) => {
  const {
    zAxis,
    dataset
  } = params;
  const isFirstRender = React13.useRef(true);
  React13.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    store.set("zAxis", getZAxisState(zAxis, dataset));
  }, [zAxis, dataset, store]);
  return {};
};
useChartZAxis.params = {
  zAxis: true,
  dataset: true
};
useChartZAxis.getInitialState = (params) => ({
  zAxis: getZAxisState(params.zAxis, params.dataset)
});

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartZAxis/useChartZAxis.selectors.js
var selectRootState = (state) => state;
var selectorChartZAxis = createSelector2(selectRootState, (state) => state.zAxis);

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartHighlight/useChartHighlight.js
var useChartHighlight = ({
  store,
  params
}) => {
  useAssertModelConsistency({
    warningPrefix: "MUI X Charts",
    componentName: "Chart",
    propName: "highlightedItem",
    controlled: params.highlightedItem,
    defaultValue: null
  });
  useEnhancedEffect_default(() => {
    if (store.state.highlight.item !== params.highlightedItem) {
      store.set("highlight", _extends({}, store.state.highlight, {
        item: params.highlightedItem
      }));
    }
    if (true) {
      if (params.highlightedItem !== void 0 && !store.state.highlight.isControlled) {
        warnOnce(["MUI X Charts: The `highlightedItem` switched between controlled and uncontrolled state.", "To remove the highlight when using controlled state, you must provide `null` to the `highlightedItem` prop instead of `undefined`."].join("\n"));
      }
    }
  }, [store, params.highlightedItem]);
  const clearHighlight = useEventCallback_default(() => {
    var _a;
    (_a = params.onHighlightChange) == null ? void 0 : _a.call(params, null);
    const prevHighlight = store.state.highlight;
    if (prevHighlight.item === null || prevHighlight.isControlled) {
      return;
    }
    store.set("highlight", {
      item: null,
      lastUpdate: "pointer",
      isControlled: false
    });
  });
  const setHighlight = useEventCallback_default((newItem) => {
    var _a;
    const prevHighlight = store.state.highlight;
    if (fastObjectShallowCompare(prevHighlight.item, newItem)) {
      return;
    }
    (_a = params.onHighlightChange) == null ? void 0 : _a.call(params, newItem);
    if (prevHighlight.isControlled) {
      return;
    }
    store.set("highlight", {
      item: newItem,
      lastUpdate: "pointer",
      isControlled: false
    });
  });
  return {
    instance: {
      clearHighlight,
      setHighlight
    }
  };
};
useChartHighlight.getInitialState = (params) => ({
  highlight: {
    item: params.highlightedItem,
    lastUpdate: "pointer",
    isControlled: params.highlightedItem !== void 0
  }
});
useChartHighlight.params = {
  highlightedItem: true,
  onHighlightChange: true
};

// ../node_modules/d3-shape/src/constant.js
function constant_default2(x2) {
  return function constant2() {
    return x2;
  };
}

// ../node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k2 = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k2) / k2 + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x1, y1, x2, y2) {
    this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }
    if (!r) return;
    if (da < 0) da = da % tau + tau;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// ../node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// ../node_modules/d3-shape/src/math.js
var cos = Math.cos;
var sin = Math.sin;
var sqrt2 = Math.sqrt;
var epsilon3 = 1e-12;
var pi2 = Math.PI;
var halfPi = pi2 / 2;
var tau2 = 2 * pi2;

// ../node_modules/d3-shape/src/symbol/asterisk.js
var sqrt3 = sqrt2(3);

// ../node_modules/d3-shape/src/symbol/circle.js
var circle_default = {
  draw(context, size) {
    const r = sqrt2(size / pi2);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau2);
  }
};

// ../node_modules/d3-shape/src/symbol/cross.js
var cross_default = {
  draw(context, size) {
    const r = sqrt2(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

// ../node_modules/d3-shape/src/symbol/diamond.js
var tan30 = sqrt2(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = {
  draw(context, size) {
    const y2 = sqrt2(size / tan30_2);
    const x2 = y2 * tan30;
    context.moveTo(0, -y2);
    context.lineTo(x2, 0);
    context.lineTo(0, y2);
    context.lineTo(-x2, 0);
    context.closePath();
  }
};

// ../node_modules/d3-shape/src/symbol/square.js
var square_default = {
  draw(context, size) {
    const w = sqrt2(size);
    const x2 = -w / 2;
    context.rect(x2, x2, w, w);
  }
};

// ../node_modules/d3-shape/src/symbol/star.js
var ka = 0.8908130915292852;
var kr = sin(pi2 / 10) / sin(7 * pi2 / 10);
var kx = sin(tau2 / 10) * kr;
var ky = -cos(tau2 / 10) * kr;
var star_default = {
  draw(context, size) {
    const r = sqrt2(size * ka);
    const x2 = kx * r;
    const y2 = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x2, y2);
    for (let i = 1; i < 5; ++i) {
      const a2 = tau2 * i / 5;
      const c2 = cos(a2);
      const s2 = sin(a2);
      context.lineTo(s2 * r, -c2 * r);
      context.lineTo(c2 * x2 - s2 * y2, s2 * x2 + c2 * y2);
    }
    context.closePath();
  }
};

// ../node_modules/d3-shape/src/symbol/triangle.js
var sqrt32 = sqrt2(3);
var triangle_default = {
  draw(context, size) {
    const y2 = -sqrt2(size / (sqrt32 * 3));
    context.moveTo(0, y2 * 2);
    context.lineTo(-sqrt32 * y2, -y2);
    context.lineTo(sqrt32 * y2, -y2);
    context.closePath();
  }
};

// ../node_modules/d3-shape/src/symbol/triangle2.js
var sqrt33 = sqrt2(3);

// ../node_modules/d3-shape/src/symbol/wye.js
var c = -0.5;
var s = sqrt2(3) / 2;
var k = 1 / sqrt2(12);
var a = (k / 2 + 1) * 3;
var wye_default = {
  draw(context, size) {
    const r = sqrt2(size / a);
    const x0 = r / 2, y0 = r * k;
    const x1 = x0, y1 = r * k + r;
    const x2 = -x1, y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

// ../node_modules/d3-shape/src/symbol.js
var symbolsFill = [
  circle_default,
  cross_default,
  diamond_default,
  square_default,
  star_default,
  triangle_default,
  wye_default
];
function Symbol2(type, size) {
  let context = null, path2 = withPath(symbol);
  type = typeof type === "function" ? type : constant_default2(type || circle_default);
  size = typeof size === "function" ? size : constant_default2(size === void 0 ? 64 : +size);
  function symbol() {
    let buffer;
    if (!context) context = buffer = path2();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }
  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant_default2(_), symbol) : type;
  };
  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant_default2(+_), symbol) : size;
  };
  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}

// ../node_modules/d3-shape/src/array.js
var slice2 = Array.prototype.slice;
function array_default2(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// ../node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// ../node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// ../node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default2(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default2(y2);
  function line(data) {
    var i, n = (data = array_default2(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default2(+_), line) : x2;
  };
  line.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default2(+_), line) : y2;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// ../node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default2(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default2(0) : constant_default2(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default2(+y1);
  function area(data) {
    var i, j, k2, n = (data = array_default2(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i - 1; k2 >= j; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// ../node_modules/d3-shape/src/descending.js
function descending_default(a2, b) {
  return b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}

// ../node_modules/d3-shape/src/identity.js
function identity_default2(d) {
  return d;
}

// ../node_modules/d3-shape/src/pie.js
function pie_default() {
  var value = identity_default2, sortValues = descending_default, sort3 = null, startAngle = constant_default2(0), endAngle = constant_default2(tau2), padAngle = constant_default2(0);
  function pie(data) {
    var i, n = (data = array_default2(data)).length, j, k2, sum3 = 0, index2 = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau2, Math.max(-tau2, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
    for (i = 0; i < n; ++i) {
      if ((v = arcs[index2[i] = i] = +value(data[i], i, data)) > 0) {
        sum3 += v;
      }
    }
    if (sortValues != null) index2.sort(function(i2, j2) {
      return sortValues(arcs[i2], arcs[j2]);
    });
    else if (sort3 != null) index2.sort(function(i2, j2) {
      return sort3(data[i2], data[j2]);
    });
    for (i = 0, k2 = sum3 ? (da - n * pa) / sum3 : 0; i < n; ++i, a0 = a1) {
      j = index2[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k2 : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }
    return arcs;
  }
  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default2(+_), pie) : value;
  };
  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort3 = null, pie) : sortValues;
  };
  pie.sort = function(_) {
    return arguments.length ? (sort3 = _, sortValues = null, pie) : sort3;
  };
  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default2(+_), pie) : startAngle;
  };
  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default2(+_), pie) : endAngle;
  };
  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default2(+_), pie) : padAngle;
  };
  return pie;
}

// ../node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a2, r) {
    this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
  }
};
function curveRadial(curve) {
  function radial2(context) {
    return new Radial(curve(context));
  }
  radial2._curve = curve;
  return radial2;
}

// ../node_modules/d3-shape/src/curve/bump.js
var Bump = class {
  constructor(context, x2) {
    this._context = context;
    this._x = x2;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line) this._context.lineTo(x2, y2);
        else this._context.moveTo(x2, y2);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x2) / 2, this._y0, this._x0, y2, x2, y2);
        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y2) / 2, x2, this._y0, x2, y2);
        break;
      }
    }
    this._x0 = x2, this._y0 = y2;
  }
};
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}

// ../node_modules/d3-shape/src/noop.js
function noop_default() {
}

// ../node_modules/d3-shape/src/curve/basis.js
function point2(that, x2, y2) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x2) / 6,
    (that._y0 + 4 * that._y1 + y2) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// ../node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// ../node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// ../node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, j = x2.length - 1;
    if (j > 0) {
      var x0 = x2[0], y0 = y2[0], dx = x2[j] - x0, dy = y2[j] - y0, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x2[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y2[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
var bundle_default = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);

// ../node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x2, y2) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x2),
    that._y2 + that._k * (that._y1 - y2),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        this._x1 = x2, this._y1 = y2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinal_default = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// ../node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalClosed_default = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// ../node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// ../node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x2, y2) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon3) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon3) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x2 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y2 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// ../node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// ../node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// ../node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) this._context.lineTo(x2, y2);
    else this._point = 1, this._context.moveTo(x2, y2);
  }
};

// ../node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point5(that, t03, t13) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t03, x1 - dx, y1 - dx * t13, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t13 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t13 = slope3(this, x2, y2)), t13);
        break;
      default:
        point5(this, this._t0, t13 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t13;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// ../node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i) a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i) m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x2[i + 1] - a2[i + 1];
  return [a2, b];
}
function natural_default(context) {
  return new Natural(context);
}

// ../node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// ../node_modules/d3-shape/src/offset/none.js
function none_default(series, order2) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order2[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order2[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

// ../node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}

// ../node_modules/d3-shape/src/stack.js
function stackValue(d, key) {
  return d[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function stack_default() {
  var keys = constant_default2([]), order2 = none_default2, offset2 = none_default, value = stackValue;
  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }
    for (i = 0, oz = array_default2(order2(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset2(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant_default2(Array.from(_)), stack) : keys;
  };
  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default2(+_), stack) : value;
  };
  stack.order = function(_) {
    return arguments.length ? (order2 = _ == null ? none_default2 : typeof _ === "function" ? _ : constant_default2(Array.from(_)), stack) : order2;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset2 = _ == null ? none_default : _, stack) : offset2;
  };
  return stack;
}

// ../node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order2) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y2; j < m; ++j) {
    for (y2 = i = 0; i < n; ++i) y2 += series[i][j][1] || 0;
    if (y2) for (i = 0; i < n; ++i) series[i][j][1] /= y2;
  }
  none_default(series, order2);
}

// ../node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order2) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order2[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y2 = 0; i < n; ++i) y2 += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y2 / 2;
  }
  none_default(series, order2);
}

// ../node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order2) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order2[0]]).length) > 0)) return;
  for (var y2 = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order2[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k2 = 0; k2 < i; ++k2) {
        var sk = series[order2[k2]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y2;
    if (s1) y2 -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y2;
  none_default(series, order2);
}

// ../node_modules/d3-shape/src/order/appearance.js
function appearance_default(series) {
  var peaks = series.map(peak);
  return none_default2(series).sort(function(a2, b) {
    return peaks[a2] - peaks[b];
  });
}
function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}

// ../node_modules/d3-shape/src/order/ascending.js
function ascending_default(series) {
  var sums = series.map(sum2);
  return none_default2(series).sort(function(a2, b) {
    return sums[a2] - sums[b];
  });
}
function sum2(series) {
  var s2 = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s2 += v;
  return s2;
}

// ../node_modules/d3-shape/src/order/descending.js
function descending_default2(series) {
  return ascending_default(series).reverse();
}

// ../node_modules/d3-shape/src/order/insideOut.js
function insideOut_default(series) {
  var n = series.length, i, j, sums = series.map(sum2), order2 = appearance_default(series), top2 = 0, bottom2 = 0, tops = [], bottoms = [];
  for (i = 0; i < n; ++i) {
    j = order2[i];
    if (top2 < bottom2) {
      top2 += sums[j];
      tops.push(j);
    } else {
      bottom2 += sums[j];
      bottoms.push(j);
    }
  }
  return bottoms.reverse().concat(tops);
}

// ../node_modules/d3-shape/src/order/reverse.js
function reverse_default(series) {
  return none_default2(series).reverse();
}

// ../node_modules/@mui/x-charts/esm/internals/getBandSize.js
function getBandSize(bandWidth, groupCount, gapRatio) {
  if (gapRatio === 0) {
    return {
      barWidth: bandWidth / groupCount,
      offset: 0
    };
  }
  const barWidth = bandWidth / (groupCount + (groupCount - 1) * gapRatio);
  const offset2 = gapRatio * barWidth;
  return {
    barWidth,
    offset: offset2
  };
}

// ../node_modules/@mui/x-charts/esm/internals/getBarDimensions.js
function shouldInvertStartCoordinate(verticalLayout, baseValue, reverse2) {
  const isVerticalAndPositive = verticalLayout && baseValue > 0;
  const isHorizontalAndNegative = !verticalLayout && baseValue < 0;
  const invertStartCoordinate = isVerticalAndPositive || isHorizontalAndNegative;
  return reverse2 ? !invertStartCoordinate : invertStartCoordinate;
}
function getBarDimensions(params) {
  const {
    verticalLayout,
    xAxisConfig,
    yAxisConfig,
    series,
    dataIndex,
    numberOfGroups,
    groupIndex
  } = params;
  const baseScaleConfig = verticalLayout ? xAxisConfig : yAxisConfig;
  const reverse2 = (verticalLayout ? yAxisConfig.reverse : xAxisConfig.reverse) ?? false;
  const {
    barWidth,
    offset: offset2
  } = getBandSize(baseScaleConfig.scale.bandwidth(), numberOfGroups, baseScaleConfig.barGapRatio);
  const barOffset = groupIndex * (barWidth + offset2);
  const xScale = xAxisConfig.scale;
  const yScale = yAxisConfig.scale;
  const baseValue = baseScaleConfig.data[dataIndex];
  const seriesValue = series.data[dataIndex];
  if (seriesValue == null) {
    return null;
  }
  const values2 = series.stackedData[dataIndex];
  const valueCoordinates = values2.map((v) => verticalLayout ? yScale(v) : xScale(v));
  const minValueCoord = Math.round(Math.min(...valueCoordinates));
  const maxValueCoord = Math.round(Math.max(...valueCoordinates));
  const barSize = seriesValue === 0 ? 0 : Math.max(series.minBarSize, maxValueCoord - minValueCoord);
  const startCoordinate = shouldInvertStartCoordinate(verticalLayout, seriesValue, reverse2) ? maxValueCoord - barSize : minValueCoord;
  return {
    x: verticalLayout ? xScale(baseValue) + barOffset : startCoordinate,
    y: verticalLayout ? startCoordinate : yScale(baseValue) + barOffset,
    height: verticalLayout ? barSize : barWidth,
    width: verticalLayout ? barWidth : barSize
  };
}

// ../node_modules/@mui/x-charts/esm/internals/getSeriesColorFn.js
function getSeriesColorFn(series) {
  return series.colorGetter ? series.colorGetter : () => series.color;
}

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/getColor.js
var getColor = (series, xAxis, yAxis) => {
  const yColorScale = yAxis == null ? void 0 : yAxis.colorScale;
  const xColorScale = xAxis == null ? void 0 : xAxis.colorScale;
  const getSeriesColor = getSeriesColorFn(series);
  if (yColorScale) {
    return (dataIndex) => {
      if (dataIndex === void 0) {
        return series.color;
      }
      const value = series.data[dataIndex];
      const color2 = value === null ? getSeriesColor({
        value,
        dataIndex
      }) : yColorScale(value);
      if (color2 === null) {
        return getSeriesColor({
          value,
          dataIndex
        });
      }
      return color2;
    };
  }
  if (xColorScale) {
    return (dataIndex) => {
      var _a;
      if (dataIndex === void 0) {
        return series.color;
      }
      const value = (_a = xAxis.data) == null ? void 0 : _a[dataIndex];
      const color2 = value === null ? getSeriesColor({
        value,
        dataIndex
      }) : xColorScale(value);
      if (color2 === null) {
        return getSeriesColor({
          value,
          dataIndex
        });
      }
      return color2;
    };
  }
  return (dataIndex) => {
    if (dataIndex === void 0) {
      return series.color;
    }
    const value = series.data[dataIndex];
    return getSeriesColor({
      value,
      dataIndex
    });
  };
};
var getColor_default = getColor;

// ../node_modules/@mui/x-charts/esm/context/ChartProvider/useChartContext.js
var React15 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/context/ChartProvider/ChartContext.js
var React14 = __toESM(require_react(), 1);
var ChartContext = React14.createContext(null);
if (true) ChartContext.displayName = "ChartContext";

// ../node_modules/@mui/x-charts/esm/context/ChartProvider/useChartContext.js
var useChartContext = () => {
  const context = React15.useContext(ChartContext);
  if (context == null) {
    throw new Error(["MUI X Charts: Could not find the Chart context.", "It looks like you rendered your component outside of a ChartDataProvider.", "This can also happen if you are bundling multiple versions of the library."].join("\n"));
  }
  return context;
};

// ../node_modules/@mui/x-charts/esm/context/ChartProvider/ChartProvider.js
var React20 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/store/useCharts.js
var React19 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartAnimation/useChartAnimation.js
var React16 = __toESM(require_react(), 1);
var useChartAnimation = ({
  params,
  store
}) => {
  React16.useEffect(() => {
    store.set("animation", _extends({}, store.state.animation, {
      skip: params.skipAnimation
    }));
  }, [store, params.skipAnimation]);
  const disableAnimation = React16.useCallback(() => {
    let disableCalled = false;
    store.set("animation", _extends({}, store.state.animation, {
      skipAnimationRequests: store.state.animation.skipAnimationRequests + 1
    }));
    return () => {
      if (disableCalled) {
        return;
      }
      disableCalled = true;
      store.set("animation", _extends({}, store.state.animation, {
        skipAnimationRequests: store.state.animation.skipAnimationRequests - 1
      }));
    };
  }, [store]);
  useEnhancedEffect_default(() => {
    const isAnimationDisabledEnvironment = typeof window === "undefined" || !(window == null ? void 0 : window.matchMedia);
    if (isAnimationDisabledEnvironment) {
      return void 0;
    }
    let disableAnimationCleanup;
    const handleMediaChange = (event) => {
      if (event.matches) {
        disableAnimationCleanup = disableAnimation();
      } else {
        disableAnimationCleanup == null ? void 0 : disableAnimationCleanup();
      }
    };
    const mql = window.matchMedia("(prefers-reduced-motion)");
    handleMediaChange(mql);
    mql.addEventListener("change", handleMediaChange);
    return () => {
      mql.removeEventListener("change", handleMediaChange);
    };
  }, [disableAnimation, store]);
  return {
    instance: {
      disableAnimation
    }
  };
};
useChartAnimation.params = {
  skipAnimation: true
};
useChartAnimation.getDefaultizedParams = ({
  params
}) => _extends({}, params, {
  skipAnimation: params.skipAnimation ?? false
});
useChartAnimation.getInitialState = ({
  skipAnimation
}) => {
  const isAnimationDisabledEnvironment = typeof window === "undefined" || !(window == null ? void 0 : window.matchMedia);
  const disableAnimations = false ? isAnimationDisabledEnvironment : false;
  return {
    animation: {
      skip: skipAnimation,
      // By initializing the skipAnimationRequests to 1, we ensure that the animation is always skipped
      skipAnimationRequests: disableAnimations ? 1 : 0
    }
  };
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartAnimation/useChartAnimation.selectors.js
var selectorChartAnimationState = (state) => state.animation;
var selectorChartSkipAnimation = createSelector2(selectorChartAnimationState, (state) => state.skip || state.skipAnimationRequests > 0);

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartId/useChartId.js
var React17 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartId/useChartId.utils.js
var globalChartDefaultId = 0;
var createChartDefaultId = () => {
  globalChartDefaultId += 1;
  return `mui-chart-${globalChartDefaultId}`;
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartId/useChartId.js
var useChartId = ({
  params,
  store
}) => {
  React17.useEffect(() => {
    if (params.id === void 0 || params.id === store.state.id.providedChartId && store.state.id.chartId !== void 0) {
      return;
    }
    store.set("id", _extends({}, store.state.id, {
      chartId: params.id ?? createChartDefaultId()
    }));
  }, [store, params.id]);
  return {};
};
useChartId.params = {
  id: true
};
useChartId.getInitialState = ({
  id
}) => ({
  id: {
    chartId: id,
    providedChartId: id
  }
});

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartId/useChartId.selectors.js
var selectorChartIdState = (state) => state.id;
var selectorChartId = createSelector2(selectorChartIdState, (idState) => idState.chartId);

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartInteractionListener/useChartInteractionListener.js
var React18 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/eventList.js
var eventList = {
  abort: true,
  animationcancel: true,
  animationend: true,
  animationiteration: true,
  animationstart: true,
  auxclick: true,
  beforeinput: true,
  beforetoggle: true,
  blur: true,
  cancel: true,
  canplay: true,
  canplaythrough: true,
  change: true,
  click: true,
  close: true,
  compositionend: true,
  compositionstart: true,
  compositionupdate: true,
  contextlost: true,
  contextmenu: true,
  contextrestored: true,
  copy: true,
  cuechange: true,
  cut: true,
  dblclick: true,
  drag: true,
  dragend: true,
  dragenter: true,
  dragleave: true,
  dragover: true,
  dragstart: true,
  drop: true,
  durationchange: true,
  emptied: true,
  ended: true,
  error: true,
  focus: true,
  focusin: true,
  focusout: true,
  formdata: true,
  gotpointercapture: true,
  input: true,
  invalid: true,
  keydown: true,
  keypress: true,
  keyup: true,
  load: true,
  loadeddata: true,
  loadedmetadata: true,
  loadstart: true,
  lostpointercapture: true,
  mousedown: true,
  mouseenter: true,
  mouseleave: true,
  mousemove: true,
  mouseout: true,
  mouseover: true,
  mouseup: true,
  paste: true,
  pause: true,
  play: true,
  playing: true,
  pointercancel: true,
  pointerdown: true,
  pointerenter: true,
  pointerleave: true,
  pointermove: true,
  pointerout: true,
  pointerover: true,
  pointerup: true,
  progress: true,
  ratechange: true,
  reset: true,
  resize: true,
  scroll: true,
  scrollend: true,
  securitypolicyviolation: true,
  seeked: true,
  seeking: true,
  select: true,
  selectionchange: true,
  selectstart: true,
  slotchange: true,
  stalled: true,
  submit: true,
  suspend: true,
  timeupdate: true,
  toggle: true,
  touchcancel: true,
  touchend: true,
  touchmove: true,
  touchstart: true,
  transitioncancel: true,
  transitionend: true,
  transitionrun: true,
  transitionstart: true,
  volumechange: true,
  waiting: true,
  webkitanimationend: true,
  webkitanimationiteration: true,
  webkitanimationstart: true,
  webkittransitionend: true,
  wheel: true,
  beforematch: true,
  pointerrawupdate: true
};

// ../node_modules/@mui/x-internal-gestures/esm/core/Gesture.js
var Gesture = class {
  /** Reference to the singleton PointerManager instance */
  /** Reference to the singleton ActiveGesturesRegistry instance */
  /** The DOM element this gesture is attached to */
  /** Stores the active gesture state */
  /** @internal For types. If false enables phases (xStart, x, xEnd) */
  /** @internal For types. The event type this gesture is associated with */
  /** @internal For types. The options type for this gesture */
  /** @internal For types. The options that can be changed at runtime */
  /** @internal For types. The state that can be changed at runtime */
  /**
   * Create a new gesture instance with the specified options
   *
   * @param options - Configuration options for this gesture
   */
  constructor(options) {
    /** Unique name identifying this gesture type */
    /** Whether to prevent default browser action for gesture events */
    /** Whether to stop propagation of gesture events */
    /**
     * List of gesture names that should prevent this gesture from activating when they are active.
     */
    /**
     * Array of keyboard keys that must be pressed for the gesture to be recognized.
     */
    /**
     * KeyboardManager instance for tracking key presses
     */
    /**
     * List of pointer types that can trigger this gesture.
     * If undefined, all pointer types are allowed.
     */
    /**
     * Pointer mode-specific configuration overrides.
     */
    /**
     * User-mutable data object for sharing state between gesture events
     * This object is included in all events emitted by this gesture
     */
    __publicField(this, "customData", {});
    /**
     * Handle option change events
     * @param event Custom event with new options in the detail property
     */
    __publicField(this, "handleOptionsChange", (event) => {
      if (event && event.detail) {
        this.updateOptions(event.detail);
      }
    });
    /**
     * Handle state change events
     * @param event Custom event with new state values in the detail property
     */
    __publicField(this, "handleStateChange", (event) => {
      if (event && event.detail) {
        this.updateState(event.detail);
      }
    });
    if (!options || !options.name) {
      throw new Error("Gesture must be initialized with a valid name.");
    }
    if (options.name in eventList) {
      throw new Error(`Gesture can't be created with a native event name. Tried to use "${options.name}". Please use a custom name instead.`);
    }
    this.name = options.name;
    this.preventDefault = options.preventDefault ?? false;
    this.stopPropagation = options.stopPropagation ?? false;
    this.preventIf = options.preventIf ?? [];
    this.requiredKeys = options.requiredKeys ?? [];
    this.pointerMode = options.pointerMode ?? [];
    this.pointerOptions = options.pointerOptions ?? {};
  }
  /**
   * Initialize the gesture by acquiring the pointer manager and gestures registry
   * Must be called before the gesture can be used
   */
  init(element, pointerManager, gestureRegistry, keyboardManager) {
    this.element = element;
    this.pointerManager = pointerManager;
    this.gesturesRegistry = gestureRegistry;
    this.keyboardManager = keyboardManager;
    const changeOptionsEventName = `${this.name}ChangeOptions`;
    this.element.addEventListener(changeOptionsEventName, this.handleOptionsChange);
    const changeStateEventName = `${this.name}ChangeState`;
    this.element.addEventListener(changeStateEventName, this.handleStateChange);
  }
  /**
   * Update the gesture options with new values
   * @param options Object containing properties to update
   */
  updateOptions(options) {
    this.preventDefault = options.preventDefault ?? this.preventDefault;
    this.stopPropagation = options.stopPropagation ?? this.stopPropagation;
    this.preventIf = options.preventIf ?? this.preventIf;
    this.requiredKeys = options.requiredKeys ?? this.requiredKeys;
    this.pointerMode = options.pointerMode ?? this.pointerMode;
    this.pointerOptions = options.pointerOptions ?? this.pointerOptions;
  }
  /**
   * Get the default configuration for the pointer specific options.
   * Change this function in child classes to provide different defaults.
   */
  getBaseConfig() {
    return {
      requiredKeys: this.requiredKeys
    };
  }
  /**
   * Get the effective configuration for a specific pointer mode.
   * This merges the base configuration with pointer mode-specific overrides.
   *
   * @param pointerType - The pointer type to get configuration for
   * @returns The effective configuration object
   */
  getEffectiveConfig(pointerType, baseConfig) {
    if (pointerType !== "mouse" && pointerType !== "touch" && pointerType !== "pen") {
      return baseConfig;
    }
    const pointerModeOverrides = this.pointerOptions[pointerType];
    if (pointerModeOverrides) {
      return _extends({}, baseConfig, pointerModeOverrides);
    }
    return baseConfig;
  }
  /**
   * Update the gesture state with new values
   * @param stateChanges Object containing state properties to update
   */
  updateState(stateChanges) {
    Object.assign(this.state, stateChanges);
  }
  /**
   * Create a deep clone of this gesture for a new element
   *
   * @param overrides - Optional configuration options that override the defaults
   * @returns A new instance of this gesture with the same configuration and any overrides applied
   */
  /**
   * Check if the event's target is or is contained within any of our registered elements
   *
   * @param event - The browser event to check
   * @returns The matching element or null if no match is found
   */
  getTargetElement(event) {
    if (this.isActive || this.element === event.target || "contains" in this.element && this.element.contains(event.target) || "getRootNode" in this.element && this.element.getRootNode() instanceof ShadowRoot && event.composedPath().includes(this.element)) {
      return this.element;
    }
    return null;
  }
  /** Whether the gesture is currently active */
  set isActive(isActive) {
    if (isActive) {
      this.gesturesRegistry.registerActiveGesture(this.element, this);
    } else {
      this.gesturesRegistry.unregisterActiveGesture(this.element, this);
    }
  }
  /** Whether the gesture is currently active */
  get isActive() {
    return this.gesturesRegistry.isGestureActive(this.element, this) ?? false;
  }
  /**
   * Checks if this gesture should be prevented from activating.
   *
   * @param element - The DOM element to check against
   * @param pointerType - The type of pointer triggering the gesture
   * @returns true if the gesture should be prevented, false otherwise
   */
  shouldPreventGesture(element, pointerType) {
    const effectiveConfig = this.getEffectiveConfig(pointerType, this.getBaseConfig());
    if (!this.keyboardManager.areKeysPressed(effectiveConfig.requiredKeys)) {
      return true;
    }
    if (this.preventIf.length === 0) {
      return false;
    }
    const activeGestures = this.gesturesRegistry.getActiveGestures(element);
    return this.preventIf.some((gestureName) => activeGestures[gestureName]);
  }
  /**
   * Checks if the given pointer type is allowed for this gesture based on the pointerMode setting.
   *
   * @param pointerType - The type of pointer to check.
   * @returns true if the pointer type is allowed, false otherwise.
   */
  isPointerTypeAllowed(pointerType) {
    if (!this.pointerMode || this.pointerMode.length === 0) {
      return true;
    }
    return this.pointerMode.includes(pointerType);
  }
  /**
   * Clean up the gesture and unregister any listeners
   * Call this method when the gesture is no longer needed to prevent memory leaks
   */
  destroy() {
    const changeOptionsEventName = `${this.name}ChangeOptions`;
    this.element.removeEventListener(changeOptionsEventName, this.handleOptionsChange);
    const changeStateEventName = `${this.name}ChangeState`;
    this.element.removeEventListener(changeStateEventName, this.handleStateChange);
  }
  /**
   * Reset the gesture state to its initial values
   */
};

// ../node_modules/@mui/x-internal-gestures/esm/core/ActiveGesturesRegistry.js
var ActiveGesturesRegistry = class {
  constructor() {
    /** Map of elements to their active gestures */
    __publicField(this, "activeGestures", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
  }
  /**
   * Register a gesture as active on an element
   *
   * @param element - The DOM element on which the gesture is active
   * @param gesture - The gesture instance that is active
   */
  registerActiveGesture(element, gesture) {
    if (!this.activeGestures.has(element)) {
      this.activeGestures.set(element, /* @__PURE__ */ new Set());
    }
    const elementGestures = this.activeGestures.get(element);
    const entry = {
      gesture,
      element
    };
    elementGestures.add(entry);
  }
  /**
   * Remove a gesture from the active registry
   *
   * @param element - The DOM element on which the gesture was active
   * @param gesture - The gesture instance to deactivate
   */
  unregisterActiveGesture(element, gesture) {
    const elementGestures = this.activeGestures.get(element);
    if (!elementGestures) {
      return;
    }
    elementGestures.forEach((entry) => {
      if (entry.gesture === gesture) {
        elementGestures.delete(entry);
      }
    });
    if (elementGestures.size === 0) {
      this.activeGestures.delete(element);
    }
  }
  /**
   * Get all active gestures for a specific element
   *
   * @param element - The DOM element to query
   * @returns Array of active gesture names
   */
  getActiveGestures(element) {
    const elementGestures = this.activeGestures.get(element);
    if (!elementGestures) {
      return {};
    }
    return Array.from(elementGestures).reduce((acc, entry) => {
      acc[entry.gesture.name] = true;
      return acc;
    }, {});
  }
  /**
   * Check if a specific gesture is active on an element
   *
   * @param element - The DOM element to check
   * @param gesture - The gesture instance to check
   * @returns True if the gesture is active on the element, false otherwise
   */
  isGestureActive(element, gesture) {
    const elementGestures = this.activeGestures.get(element);
    if (!elementGestures) {
      return false;
    }
    return Array.from(elementGestures).some((entry) => entry.gesture === gesture);
  }
  /**
   * Clear all active gestures from the registry
   */
  destroy() {
    this.activeGestures.clear();
  }
  /**
   * Clear all active gestures for a specific element
   *
   * @param element - The DOM element to clear
   */
  unregisterElement(element) {
    this.activeGestures.delete(element);
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/KeyboardManager.js
var KeyboardManager = class {
  /**
   * Create a new KeyboardManager instance
   */
  constructor() {
    __publicField(this, "pressedKeys", /* @__PURE__ */ (() => /* @__PURE__ */ new Set())());
    /**
     * Handle keydown events
     */
    __publicField(this, "handleKeyDown", (event) => {
      this.pressedKeys.add(event.key);
    });
    /**
     * Handle keyup events
     */
    __publicField(this, "handleKeyUp", (event) => {
      this.pressedKeys.delete(event.key);
    });
    /**
     * Clear all pressed keys
     */
    __publicField(this, "clearKeys", () => {
      this.pressedKeys.clear();
    });
    this.initialize();
  }
  /**
   * Initialize the keyboard event listeners
   */
  initialize() {
    if (typeof window === "undefined") {
      return;
    }
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
    window.addEventListener("blur", this.clearKeys);
  }
  /**
   * Check if a set of keys are all currently pressed
   * @param keys The keys to check
   * @returns True if all specified keys are pressed, false otherwise
   */
  areKeysPressed(keys) {
    if (!keys || keys.length === 0) {
      return true;
    }
    return keys.every((key) => {
      if (key === "ControlOrMeta") {
        return navigator.platform.includes("Mac") ? this.pressedKeys.has("Meta") : this.pressedKeys.has("Control");
      }
      return this.pressedKeys.has(key);
    });
  }
  /**
   * Cleanup method to remove event listeners
   */
  destroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", this.handleKeyDown);
      window.removeEventListener("keyup", this.handleKeyUp);
      window.removeEventListener("blur", this.clearKeys);
    }
    this.clearKeys();
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/PointerManager.js
var PointerManager = class {
  constructor(options) {
    /** Root element where pointer events are captured */
    /** CSS touch-action property value applied to the root element */
    /** Whether to use passive event listeners */
    /** Whether to prevent interrupt events like blur or contextmenu */
    __publicField(this, "preventEventInterruption", true);
    /** Map of all currently active pointers by their pointerId */
    __publicField(this, "pointers", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
    /** Set of registered gesture handlers that receive pointer events */
    __publicField(this, "gestureHandlers", /* @__PURE__ */ (() => /* @__PURE__ */ new Set())());
    /**
     * Handle events that should interrupt all gestures.
     * This clears all active pointers and notifies handlers with a pointercancel-like event.
     *
     * @param event - The event that triggered the interruption (blur or contextmenu)
     */
    __publicField(this, "handleInterruptEvents", (event) => {
      if (this.preventEventInterruption && "pointerType" in event && event.pointerType === "touch") {
        event.preventDefault();
        return;
      }
      const cancelEvent = new PointerEvent("forceCancel", {
        bubbles: false,
        cancelable: false
      });
      const firstPointer = this.pointers.values().next().value;
      if (this.pointers.size > 0 && firstPointer) {
        Object.defineProperties(cancelEvent, {
          clientX: {
            value: firstPointer.clientX
          },
          clientY: {
            value: firstPointer.clientY
          },
          pointerId: {
            value: firstPointer.pointerId
          },
          pointerType: {
            value: firstPointer.pointerType
          }
        });
        for (const [pointerId, pointer] of this.pointers.entries()) {
          const updatedPointer = _extends({}, pointer, {
            type: "forceCancel"
          });
          this.pointers.set(pointerId, updatedPointer);
        }
      }
      this.notifyHandlers(cancelEvent);
      this.pointers.clear();
    });
    /**
     * Event handler for all pointer events.
     *
     * This method:
     * 1. Updates the internal pointers map based on the event type
     * 2. Manages pointer capture for tracking pointers outside the root element
     * 3. Notifies all registered handlers with the current state
     *
     * @param event - The original pointer event from the browser
     */
    __publicField(this, "handlePointerEvent", (event) => {
      const {
        type,
        pointerId
      } = event;
      if (type === "pointerdown" || type === "pointermove") {
        this.pointers.set(pointerId, this.createPointerData(event));
      } else if (type === "pointerup" || type === "pointercancel" || type === "forceCancel") {
        this.pointers.set(pointerId, this.createPointerData(event));
        this.notifyHandlers(event);
        this.pointers.delete(pointerId);
        return;
      }
      this.notifyHandlers(event);
    });
    this.root = // User provided root element
    options.root ?? // Fallback to document root or body, this fixes shadow DOM scenarios
    document.getRootNode({
      composed: true
    }) ?? // Fallback to document body, for some testing environments
    document.body;
    this.touchAction = options.touchAction || "auto";
    this.passive = options.passive ?? false;
    this.preventEventInterruption = options.preventEventInterruption ?? true;
    this.setupEventListeners();
  }
  /**
   * Register a handler function to receive pointer events.
   *
   * The handler will be called whenever pointer events occur within the root element.
   * It receives the current map of all active pointers and the original event.
   *
   * @param {Function} handler - Function to receive pointer events and current pointer state
   * @returns {Function} An unregister function that removes this handler when called
   */
  registerGestureHandler(handler) {
    this.gestureHandlers.add(handler);
    return () => {
      this.gestureHandlers.delete(handler);
    };
  }
  /**
   * Get a copy of the current active pointers map.
   *
   * Returns a new Map containing all currently active pointers.
   * Modifying the returned map will not affect the internal pointers state.
   *
   * @returns A new Map containing all active pointers
   */
  getPointers() {
    return new Map(this.pointers);
  }
  /**
   * Set up event listeners for pointer events on the root element.
   *
   * This method attaches all necessary event listeners and configures
   * the CSS touch-action property on the root element.
   */
  setupEventListeners() {
    if (this.touchAction !== "auto") {
      this.root.style.touchAction = this.touchAction;
    }
    this.root.addEventListener("pointerdown", this.handlePointerEvent, {
      passive: this.passive
    });
    this.root.addEventListener("pointermove", this.handlePointerEvent, {
      passive: this.passive
    });
    this.root.addEventListener("pointerup", this.handlePointerEvent, {
      passive: this.passive
    });
    this.root.addEventListener("pointercancel", this.handlePointerEvent, {
      passive: this.passive
    });
    this.root.addEventListener("forceCancel", this.handlePointerEvent, {
      passive: this.passive
    });
    this.root.addEventListener("blur", this.handleInterruptEvents);
    this.root.addEventListener("contextmenu", this.handleInterruptEvents);
  }
  /**
   * Notify all registered gesture handlers about a pointer event.
   *
   * Each handler receives the current map of active pointers and the original event.
   *
   * @param event - The original pointer event that triggered this notification
   */
  notifyHandlers(event) {
    this.gestureHandlers.forEach((handler) => handler(this.pointers, event));
  }
  /**
   * Create a normalized PointerData object from a browser PointerEvent.
   *
   * This method extracts all relevant information from the original event
   * and formats it in a consistent way for gesture recognizers to use.
   *
   * @param event - The original browser pointer event
   * @returns A new PointerData object representing this pointer
   */
  createPointerData(event) {
    return {
      pointerId: event.pointerId,
      clientX: event.clientX,
      clientY: event.clientY,
      pageX: event.pageX,
      pageY: event.pageY,
      target: event.target,
      timeStamp: event.timeStamp,
      type: event.type,
      isPrimary: event.isPrimary,
      pressure: event.pressure,
      width: event.width,
      height: event.height,
      pointerType: event.pointerType,
      srcEvent: event
    };
  }
  /**
   * Clean up all event listeners and reset the PointerManager state.
   *
   * This method should be called when the PointerManager is no longer needed
   * to prevent memory leaks. It removes all event listeners, clears the
   * internal state, and resets the singleton instance.
   */
  destroy() {
    this.root.removeEventListener("pointerdown", this.handlePointerEvent);
    this.root.removeEventListener("pointermove", this.handlePointerEvent);
    this.root.removeEventListener("pointerup", this.handlePointerEvent);
    this.root.removeEventListener("pointercancel", this.handlePointerEvent);
    this.root.removeEventListener("forceCancel", this.handlePointerEvent);
    this.root.removeEventListener("blur", this.handleInterruptEvents);
    this.root.removeEventListener("contextmenu", this.handleInterruptEvents);
    this.pointers.clear();
    this.gestureHandlers.clear();
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/GestureManager.js
var GestureManager = class {
  /**
   * Create a new GestureManager instance to coordinate gesture recognition
   *
   * @param options - Configuration options for the gesture manager
   */
  constructor(options) {
    /** Repository of gesture templates that can be cloned for specific elements */
    __publicField(this, "gestureTemplates", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
    /** Maps DOM elements to their active gesture instances */
    __publicField(this, "elementGestureMap", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
    __publicField(this, "activeGesturesRegistry", (() => new ActiveGesturesRegistry())());
    __publicField(this, "keyboardManager", (() => new KeyboardManager())());
    this.pointerManager = new PointerManager({
      root: options.root,
      touchAction: options.touchAction,
      passive: options.passive
    });
    if (options.gestures && options.gestures.length > 0) {
      options.gestures.forEach((gesture) => {
        this.addGestureTemplate(gesture);
      });
    }
  }
  /**
   * Add a gesture template to the manager's template registry.
   * Templates serve as prototypes that can be cloned for individual elements.
   *
   * @param gesture - The gesture instance to use as a template
   */
  addGestureTemplate(gesture) {
    if (this.gestureTemplates.has(gesture.name)) {
      console.warn(`Gesture template with name "${gesture.name}" already exists. It will be overwritten.`);
    }
    this.gestureTemplates.set(gesture.name, gesture);
  }
  /**
   * Updates the options for a specific gesture on a given element and emits a change event.
   *
   * @param gestureName - Name of the gesture whose options should be updated
   * @param element - The DOM element where the gesture is attached
   * @param options - New options to apply to the gesture
   * @returns True if the options were successfully updated, false if the gesture wasn't found
   *
   * @example
   * ```typescript
   * // Update pan gesture sensitivity on the fly
   * manager.setGestureOptions('pan', element, { threshold: 5 });
   * ```
   */
  setGestureOptions(gestureName, element, options) {
    const elementGestures = this.elementGestureMap.get(element);
    if (!elementGestures || !elementGestures.has(gestureName)) {
      console.error(`Gesture "${gestureName}" not found on the provided element.`);
      return;
    }
    const event = new CustomEvent(`${gestureName}ChangeOptions`, {
      detail: options,
      bubbles: false,
      cancelable: false,
      composed: false
    });
    element.dispatchEvent(event);
  }
  /**
   * Updates the state for a specific gesture on a given element and emits a change event.
   *
   * @param gestureName - Name of the gesture whose state should be updated
   * @param element - The DOM element where the gesture is attached
   * @param state - New state to apply to the gesture
   * @returns True if the state was successfully updated, false if the gesture wasn't found
   *
   * @example
   * ```typescript
   * // Update total delta for a turnWheel gesture
   * manager.setGestureState('turnWheel', element, { totalDeltaX: 10 });
   * ```
   */
  setGestureState(gestureName, element, state) {
    const elementGestures = this.elementGestureMap.get(element);
    if (!elementGestures || !elementGestures.has(gestureName)) {
      console.error(`Gesture "${gestureName}" not found on the provided element.`);
      return;
    }
    const event = new CustomEvent(`${gestureName}ChangeState`, {
      detail: state,
      bubbles: false,
      cancelable: false,
      composed: false
    });
    element.dispatchEvent(event);
  }
  /**
   * Register an element to recognize one or more gestures.
   *
   * This method clones the specified gesture template(s) and creates
   * gesture recognizer instance(s) specifically for the provided element.
   * The element is returned with enhanced TypeScript typing for gesture events.
   *
   * @param gestureNames - Name(s) of the gesture(s) to register (must match template names)
   * @param element - The DOM element to attach the gesture(s) to
   * @param options - Optional map of gesture-specific options to override when registering
   * @returns The same element with properly typed event listeners
   *
   * @example
   * ```typescript
   * // Register multiple gestures
   * const element = manager.registerElement(['pan', 'pinch'], myDiv);
   *
   * // Register a single gesture
   * const draggable = manager.registerElement('pan', dragHandle);
   *
   * // Register with customized options for each gesture
   * const customElement = manager.registerElement(
   *   ['pan', 'pinch', 'rotate'],
   *   myElement,
   *   {
   *     pan: { threshold: 20, direction: ['left', 'right'] },
   *     pinch: { threshold: 0.1 }
   *   }
   * );
   * ```
   */
  registerElement(gestureNames, element, options) {
    if (!Array.isArray(gestureNames)) {
      gestureNames = [gestureNames];
    }
    gestureNames.forEach((name) => {
      const gestureOptions = options == null ? void 0 : options[name];
      this.registerSingleGesture(name, element, gestureOptions);
    });
    return element;
  }
  /**
   * Internal method to register a single gesture on an element.
   *
   * @param gestureName - Name of the gesture to register
   * @param element - DOM element to attach the gesture to
   * @param options - Optional options to override the gesture template configuration
   * @returns True if the registration was successful, false otherwise
   */
  registerSingleGesture(gestureName, element, options) {
    const gestureTemplate = this.gestureTemplates.get(gestureName);
    if (!gestureTemplate) {
      console.error(`Gesture template "${gestureName}" not found.`);
      return false;
    }
    if (!this.elementGestureMap.has(element)) {
      this.elementGestureMap.set(element, /* @__PURE__ */ new Map());
    }
    const elementGestures = this.elementGestureMap.get(element);
    if (elementGestures.has(gestureName)) {
      console.warn(`Element already has gesture "${gestureName}" registered. It will be replaced.`);
      this.unregisterElement(gestureName, element);
    }
    const gestureInstance = gestureTemplate.clone(options);
    gestureInstance.init(element, this.pointerManager, this.activeGesturesRegistry, this.keyboardManager);
    elementGestures.set(gestureName, gestureInstance);
    return true;
  }
  /**
   * Unregister a specific gesture from an element.
   * This removes the gesture recognizer and stops event emission for that gesture.
   *
   * @param gestureName - Name of the gesture to unregister
   * @param element - The DOM element to remove the gesture from
   * @returns True if the gesture was found and removed, false otherwise
   */
  unregisterElement(gestureName, element) {
    const elementGestures = this.elementGestureMap.get(element);
    if (!elementGestures || !elementGestures.has(gestureName)) {
      return false;
    }
    const gesture = elementGestures.get(gestureName);
    gesture.destroy();
    elementGestures.delete(gestureName);
    this.activeGesturesRegistry.unregisterElement(element);
    if (elementGestures.size === 0) {
      this.elementGestureMap.delete(element);
    }
    return true;
  }
  /**
   * Unregister all gestures from an element.
   * Completely removes the element from the gesture system.
   *
   * @param element - The DOM element to remove all gestures from
   */
  unregisterAllGestures(element) {
    const elementGestures = this.elementGestureMap.get(element);
    if (elementGestures) {
      for (const [, gesture] of elementGestures) {
        gesture.destroy();
        this.activeGesturesRegistry.unregisterElement(element);
      }
      this.elementGestureMap.delete(element);
    }
  }
  /**
   * Clean up all gestures and event listeners.
   * Call this method when the GestureManager is no longer needed to prevent memory leaks.
   */
  destroy() {
    for (const [element] of this.elementGestureMap) {
      this.unregisterAllGestures(element);
    }
    this.gestureTemplates.clear();
    this.elementGestureMap.clear();
    this.activeGesturesRegistry.destroy();
    this.keyboardManager.destroy();
    this.pointerManager.destroy();
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/PointerGesture.js
var PointerGesture = class extends Gesture {
  /**
   * Minimum number of simultaneous pointers required to activate the gesture.
   * The gesture will not start until at least this many pointers are active.
   */
  /**
   * Maximum number of simultaneous pointers allowed for this gesture.
   * If more than this many pointers are detected, the gesture may be canceled.
   */
  constructor(options) {
    super(options);
    /** Function to unregister from the PointerManager when destroying this gesture */
    __publicField(this, "unregisterHandler", null);
    /** The original target element when the gesture began, used to prevent limbo state if target is removed */
    __publicField(this, "originalTarget", null);
    this.minPointers = options.minPointers ?? 1;
    this.maxPointers = options.maxPointers ?? Infinity;
  }
  init(element, pointerManager, gestureRegistry, keyboardManager) {
    super.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.unregisterHandler = this.pointerManager.registerGestureHandler(this.handlePointerEvent);
  }
  updateOptions(options) {
    super.updateOptions(options);
    this.minPointers = options.minPointers ?? this.minPointers;
    this.maxPointers = options.maxPointers ?? this.maxPointers;
  }
  getBaseConfig() {
    return {
      requiredKeys: this.requiredKeys,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers
    };
  }
  isWithinPointerCount(pointers, pointerMode) {
    const config = this.getEffectiveConfig(pointerMode, this.getBaseConfig());
    return pointers.length >= config.minPointers && pointers.length <= config.maxPointers;
  }
  /**
   * Handler for pointer events from the PointerManager.
   * Concrete gesture implementations must override this method to provide
   * gesture-specific logic for recognizing and tracking the gesture.
   *
   * @param pointers - Map of active pointers by pointer ID
   * @param event - The original pointer event from the browser
   */
  /**
   * Calculate the target element for the gesture based on the active pointers.
   *
   * It takes into account the original target element.
   *
   * @param pointers - Map of active pointers by pointer ID
   * @param calculatedTarget - The target element calculated from getTargetElement
   * @returns A list of relevant pointers for this gesture
   */
  getRelevantPointers(pointers, calculatedTarget) {
    return pointers.filter((pointer) => this.isPointerTypeAllowed(pointer.pointerType) && (calculatedTarget === pointer.target || pointer.target === this.originalTarget || calculatedTarget === this.originalTarget || "contains" in calculatedTarget && calculatedTarget.contains(pointer.target)) || "getRootNode" in calculatedTarget && calculatedTarget.getRootNode() instanceof ShadowRoot && pointer.srcEvent.composedPath().includes(calculatedTarget));
  }
  destroy() {
    if (this.unregisterHandler) {
      this.unregisterHandler();
      this.unregisterHandler = null;
    }
    super.destroy();
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/getDistance.js
function getDistance(pointA, pointB) {
  const deltaX = pointB.x - pointA.x;
  const deltaY = pointB.y - pointA.y;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/calculateAverageDistance.js
function calculateAverageDistance(pointers) {
  if (pointers.length < 2) {
    return 0;
  }
  let totalDistance = 0;
  let pairCount = 0;
  for (let i = 0; i < pointers.length; i += 1) {
    for (let j = i + 1; j < pointers.length; j += 1) {
      totalDistance += getDistance({
        x: pointers[i].clientX,
        y: pointers[i].clientY
      }, {
        x: pointers[j].clientX,
        y: pointers[j].clientY
      });
      pairCount += 1;
    }
  }
  return pairCount > 0 ? totalDistance / pairCount : 0;
}

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/calculateCentroid.js
function calculateCentroid(pointers) {
  if (pointers.length === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  const sum3 = pointers.reduce((acc, pointer) => {
    acc.x += pointer.clientX;
    acc.y += pointer.clientY;
    return acc;
  }, {
    x: 0,
    y: 0
  });
  return {
    x: sum3.x / pointers.length,
    y: sum3.y / pointers.length
  };
}

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/createEventName.js
function createEventName(gesture, phase) {
  return `${gesture}${phase === "ongoing" ? "" : phase.charAt(0).toUpperCase() + phase.slice(1)}`;
}

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/getDirection.js
var MAIN_THRESHOLD = 1e-5;
var ANGLE_THRESHOLD = 1e-5;
var SECONDARY_THRESHOLD = 0.15;
function getDirection(previous, current) {
  const deltaX = current.x - previous.x;
  const deltaY = current.y - previous.y;
  const direction = {
    vertical: null,
    horizontal: null,
    mainAxis: null
  };
  const isDiagonal = isDiagonalMovement(current, previous);
  const mainMovement = Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";
  const horizontalThreshold = isDiagonal ? MAIN_THRESHOLD : mainMovement === "horizontal" ? MAIN_THRESHOLD : SECONDARY_THRESHOLD;
  const verticalThreshold = isDiagonal ? MAIN_THRESHOLD : mainMovement === "horizontal" ? SECONDARY_THRESHOLD : MAIN_THRESHOLD;
  if (Math.abs(deltaX) > horizontalThreshold) {
    direction.horizontal = deltaX > 0 ? "right" : "left";
  }
  if (Math.abs(deltaY) > verticalThreshold) {
    direction.vertical = deltaY > 0 ? "down" : "up";
  }
  direction.mainAxis = isDiagonal ? "diagonal" : mainMovement;
  return direction;
}
function isDiagonalMovement(previous, current) {
  const deltaX = current.x - previous.x;
  const deltaY = current.y - previous.y;
  const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
  return angle >= -45 + ANGLE_THRESHOLD && angle <= -22.5 + ANGLE_THRESHOLD || angle >= 22.5 + ANGLE_THRESHOLD && angle <= 45 + ANGLE_THRESHOLD || angle >= 135 + ANGLE_THRESHOLD && angle <= 157.5 + ANGLE_THRESHOLD || angle >= -157.5 + ANGLE_THRESHOLD && angle <= -135 + ANGLE_THRESHOLD;
}

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/isDirectionAllowed.js
function isDirectionAllowed(direction, allowedDirections) {
  if (!direction.vertical && !direction.horizontal) {
    return false;
  }
  if (allowedDirections.length === 0) {
    return true;
  }
  const verticalAllowed = direction.vertical === null || allowedDirections.includes(direction.vertical);
  const horizontalAllowed = direction.horizontal === null || allowedDirections.includes(direction.horizontal);
  return verticalAllowed && horizontalAllowed;
}

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/getPinchDirection.js
var DIRECTION_THRESHOLD = 0;
var getPinchDirection = (velocity) => {
  if (velocity > DIRECTION_THRESHOLD) {
    return 1;
  }
  if (velocity < -DIRECTION_THRESHOLD) {
    return -1;
  }
  return 0;
};

// ../node_modules/@mui/x-internal-gestures/esm/core/utils/preventDefault.js
var preventDefault = (event) => {
  if (event.cancelable) {
    event.preventDefault();
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/gestures/MoveGesture.js
var MoveGesture = class _MoveGesture extends PointerGesture {
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  constructor(options) {
    super(options);
    __publicField(this, "state", {
      lastPosition: null
    });
    /**
     * Handle pointer enter events for a specific element
     * @param event The original pointer event
     */
    __publicField(this, "handleElementEnter", (event) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
        return;
      }
      const pointers = this.pointerManager.getPointers() || /* @__PURE__ */ new Map();
      const pointersArray = Array.from(pointers.values());
      if (this.isWithinPointerCount(pointersArray, event.pointerType)) {
        this.isActive = true;
        const currentPosition = {
          x: event.clientX,
          y: event.clientY
        };
        this.state.lastPosition = currentPosition;
        this.emitMoveEvent(this.element, "start", pointersArray, event);
        this.emitMoveEvent(this.element, "ongoing", pointersArray, event);
      }
    });
    /**
     * Handle pointer leave events for a specific element
     * @param event The original pointer event
     */
    __publicField(this, "handleElementLeave", (event) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
        return;
      }
      if (!this.isActive) {
        return;
      }
      const pointers = this.pointerManager.getPointers() || /* @__PURE__ */ new Map();
      const pointersArray = Array.from(pointers.values());
      this.emitMoveEvent(this.element, "end", pointersArray, event);
      this.resetState();
    });
    /**
     * Handle pointer events for the move gesture (only handles move events now)
     * @param pointers Map of active pointers
     * @param event The original pointer event
     */
    __publicField(this, "handlePointerEvent", (pointers, event) => {
      if (event.type !== "pointermove" || event.pointerType !== "mouse" && event.pointerType !== "pen") {
        return;
      }
      if (this.preventDefault) {
        event.preventDefault();
      }
      if (this.stopPropagation) {
        event.stopPropagation();
      }
      const pointersArray = Array.from(pointers.values());
      const targetElement = this.getTargetElement(event);
      if (!targetElement) {
        return;
      }
      if (!this.isWithinPointerCount(pointersArray, event.pointerType)) {
        return;
      }
      if (this.shouldPreventGesture(targetElement, event.pointerType)) {
        if (!this.isActive) {
          return;
        }
        this.resetState();
        this.emitMoveEvent(targetElement, "end", pointersArray, event);
        return;
      }
      const currentPosition = {
        x: event.clientX,
        y: event.clientY
      };
      this.state.lastPosition = currentPosition;
      if (!this.isActive) {
        this.isActive = true;
        this.emitMoveEvent(targetElement, "start", pointersArray, event);
      }
      this.emitMoveEvent(targetElement, "ongoing", pointersArray, event);
    });
    this.threshold = options.threshold || 0;
  }
  clone(overrides) {
    return new _MoveGesture(_extends({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, overrides));
  }
  init(element, pointerManager, gestureRegistry, keyboardManager) {
    super.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.element.addEventListener("pointerenter", this.handleElementEnter);
    this.element.addEventListener("pointerleave", this.handleElementLeave);
  }
  destroy() {
    this.element.removeEventListener("pointerenter", this.handleElementEnter);
    this.element.removeEventListener("pointerleave", this.handleElementLeave);
    this.resetState();
    super.destroy();
  }
  updateOptions(options) {
    super.updateOptions(options);
  }
  resetState() {
    this.isActive = false;
    this.state = {
      lastPosition: null
    };
  }
  /**
   * Emit move-specific events
   * @param element The DOM element the event is related to
   * @param phase The current phase of the gesture (start, ongoing, end)
   * @param pointers Array of active pointers
   * @param event The original pointer event
   */
  emitMoveEvent(element, phase, pointers, event) {
    const currentPosition = this.state.lastPosition || calculateCentroid(pointers);
    const activeGestures = this.gesturesRegistry.getActiveGestures(element);
    const customEventData = {
      gestureName: this.name,
      centroid: currentPosition,
      target: event.target,
      srcEvent: event,
      phase,
      pointers,
      timeStamp: event.timeStamp,
      activeGestures,
      customData: this.customData
    };
    const eventName = createEventName(this.name, phase);
    const domEvent = new CustomEvent(eventName, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: customEventData
    });
    element.dispatchEvent(domEvent);
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/gestures/PanGesture.js
var PanGesture = class _PanGesture extends PointerGesture {
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  /**
   * Allowed directions for the pan gesture
   * Default allows all directions
   */
  constructor(options) {
    super(options);
    __publicField(this, "state", /* @__PURE__ */ (() => ({
      startPointers: /* @__PURE__ */ new Map(),
      startCentroid: null,
      lastCentroid: null,
      movementThresholdReached: false,
      totalDeltaX: 0,
      totalDeltaY: 0,
      activeDeltaX: 0,
      activeDeltaY: 0,
      lastDirection: {
        vertical: null,
        horizontal: null,
        mainAxis: null
      },
      lastDeltas: null
    }))());
    /**
     * Handle pointer events for the pan gesture
     */
    __publicField(this, "handlePointerEvent", (pointers, event) => {
      var _a;
      const pointersArray = Array.from(pointers.values());
      if (event.type === "forceCancel") {
        this.cancel(event.target, pointersArray, event);
        return;
      }
      const targetElement = this.getTargetElement(event);
      if (!targetElement) {
        return;
      }
      if (this.shouldPreventGesture(targetElement, event.pointerType)) {
        this.cancel(targetElement, pointersArray, event);
        return;
      }
      const relevantPointers = this.getRelevantPointers(pointersArray, targetElement);
      if (!this.isWithinPointerCount(relevantPointers, event.pointerType)) {
        this.cancel(targetElement, relevantPointers, event);
        return;
      }
      switch (event.type) {
        case "pointerdown":
          if (!this.isActive && !this.state.startCentroid) {
            relevantPointers.forEach((pointer) => {
              this.state.startPointers.set(pointer.pointerId, pointer);
            });
            this.originalTarget = targetElement;
            this.state.startCentroid = calculateCentroid(relevantPointers);
            this.state.lastCentroid = _extends({}, this.state.startCentroid);
          } else if (this.state.startCentroid && this.state.lastCentroid) {
            const oldCentroid = this.state.lastCentroid;
            const newCentroid = calculateCentroid(relevantPointers);
            const offsetX = newCentroid.x - oldCentroid.x;
            const offsetY = newCentroid.y - oldCentroid.y;
            this.state.startCentroid = {
              x: this.state.startCentroid.x + offsetX,
              y: this.state.startCentroid.y + offsetY
            };
            this.state.lastCentroid = newCentroid;
            relevantPointers.forEach((pointer) => {
              if (!this.state.startPointers.has(pointer.pointerId)) {
                this.state.startPointers.set(pointer.pointerId, pointer);
              }
            });
          }
          break;
        case "pointermove":
          if (this.state.startCentroid && this.isWithinPointerCount(pointersArray, event.pointerType)) {
            const currentCentroid = calculateCentroid(relevantPointers);
            const distanceDeltaX = currentCentroid.x - this.state.startCentroid.x;
            const distanceDeltaY = currentCentroid.y - this.state.startCentroid.y;
            const distance = Math.sqrt(distanceDeltaX * distanceDeltaX + distanceDeltaY * distanceDeltaY);
            const moveDirection = getDirection(this.state.lastCentroid ?? this.state.startCentroid, currentCentroid);
            const lastDeltaX = this.state.lastCentroid ? currentCentroid.x - this.state.lastCentroid.x : 0;
            const lastDeltaY = this.state.lastCentroid ? currentCentroid.y - this.state.lastCentroid.y : 0;
            if (!this.state.movementThresholdReached && distance >= this.threshold && isDirectionAllowed(moveDirection, this.direction)) {
              this.state.movementThresholdReached = true;
              this.isActive = true;
              this.state.lastDeltas = {
                x: lastDeltaX,
                y: lastDeltaY
              };
              this.state.totalDeltaX += lastDeltaX;
              this.state.totalDeltaY += lastDeltaY;
              this.state.activeDeltaX += lastDeltaX;
              this.state.activeDeltaY += lastDeltaY;
              this.emitPanEvent(targetElement, "start", relevantPointers, event, currentCentroid);
              this.emitPanEvent(targetElement, "ongoing", relevantPointers, event, currentCentroid);
            } else if (this.state.movementThresholdReached && this.isActive) {
              this.state.lastDeltas = {
                x: lastDeltaX,
                y: lastDeltaY
              };
              this.state.totalDeltaX += lastDeltaX;
              this.state.totalDeltaY += lastDeltaY;
              this.state.activeDeltaX += lastDeltaX;
              this.state.activeDeltaY += lastDeltaY;
              this.emitPanEvent(targetElement, "ongoing", relevantPointers, event, currentCentroid);
            }
            this.state.lastCentroid = currentCentroid;
            this.state.lastDirection = moveDirection;
          }
          break;
        case "pointerup":
        case "pointercancel":
        case "forceCancel":
          if (this.isActive && this.state.movementThresholdReached) {
            const remainingPointers = relevantPointers.filter((p) => p.type !== "pointerup" && p.type !== "pointercancel");
            if (!this.isWithinPointerCount(remainingPointers, event.pointerType)) {
              const currentCentroid = this.state.lastCentroid || this.state.startCentroid;
              if (event.type === "pointercancel") {
                this.emitPanEvent(targetElement, "cancel", relevantPointers, event, currentCentroid);
              }
              this.emitPanEvent(targetElement, "end", relevantPointers, event, currentCentroid);
              this.resetState();
            } else if (remainingPointers.length >= 1 && this.state.lastCentroid) {
              const newCentroid = calculateCentroid(remainingPointers);
              const offsetX = newCentroid.x - this.state.lastCentroid.x;
              const offsetY = newCentroid.y - this.state.lastCentroid.y;
              this.state.startCentroid = {
                x: this.state.startCentroid.x + offsetX,
                y: this.state.startCentroid.y + offsetY
              };
              this.state.lastCentroid = newCentroid;
              const removedPointerId = (_a = relevantPointers.find((p) => p.type === "pointerup" || p.type === "pointercancel")) == null ? void 0 : _a.pointerId;
              if (removedPointerId !== void 0) {
                this.state.startPointers.delete(removedPointerId);
              }
            }
          } else {
            this.resetState();
          }
          break;
        default:
          break;
      }
    });
    this.direction = options.direction || ["up", "down", "left", "right"];
    this.threshold = options.threshold || 0;
  }
  clone(overrides) {
    return new _PanGesture(_extends({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      direction: [...this.direction],
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, overrides));
  }
  destroy() {
    this.resetState();
    super.destroy();
  }
  updateOptions(options) {
    super.updateOptions(options);
    this.direction = options.direction || this.direction;
    this.threshold = options.threshold ?? this.threshold;
  }
  resetState() {
    this.isActive = false;
    this.state = _extends({}, this.state, {
      startPointers: /* @__PURE__ */ new Map(),
      startCentroid: null,
      lastCentroid: null,
      lastDeltas: null,
      activeDeltaX: 0,
      activeDeltaY: 0,
      movementThresholdReached: false,
      lastDirection: {
        vertical: null,
        horizontal: null,
        mainAxis: null
      }
    });
  }
  /**
   * Emit pan-specific events with additional data
   */
  emitPanEvent(element, phase, pointers, event, currentCentroid) {
    var _a, _b;
    if (!this.state.startCentroid) {
      return;
    }
    const deltaX = ((_a = this.state.lastDeltas) == null ? void 0 : _a.x) ?? 0;
    const deltaY = ((_b = this.state.lastDeltas) == null ? void 0 : _b.y) ?? 0;
    const firstPointer = this.state.startPointers.values().next().value;
    const timeElapsed = firstPointer ? (event.timeStamp - firstPointer.timeStamp) / 1e3 : 0;
    const velocityX = timeElapsed > 0 ? deltaX / timeElapsed : 0;
    const velocityY = timeElapsed > 0 ? deltaY / timeElapsed : 0;
    const velocity = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    const activeGestures = this.gesturesRegistry.getActiveGestures(element);
    const customEventData = {
      gestureName: this.name,
      initialCentroid: this.state.startCentroid,
      centroid: currentCentroid,
      target: event.target,
      srcEvent: event,
      phase,
      pointers,
      timeStamp: event.timeStamp,
      deltaX,
      deltaY,
      direction: this.state.lastDirection,
      velocityX,
      velocityY,
      velocity,
      totalDeltaX: this.state.totalDeltaX,
      totalDeltaY: this.state.totalDeltaY,
      activeDeltaX: this.state.activeDeltaX,
      activeDeltaY: this.state.activeDeltaY,
      activeGestures,
      customData: this.customData
    };
    const eventName = createEventName(this.name, phase);
    const domEvent = new CustomEvent(eventName, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: customEventData
    });
    element.dispatchEvent(domEvent);
    if (this.preventDefault) {
      event.preventDefault();
    }
    if (this.stopPropagation) {
      event.stopPropagation();
    }
  }
  /**
   * Cancel the current gesture
   */
  cancel(element, pointers, event) {
    if (this.isActive) {
      const el = element ?? this.element;
      this.emitPanEvent(el, "cancel", pointers, event, this.state.lastCentroid);
      this.emitPanEvent(el, "end", pointers, event, this.state.lastCentroid);
    }
    this.resetState();
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/gestures/PinchGesture.js
var PinchGesture = class _PinchGesture extends PointerGesture {
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  constructor(options) {
    super(_extends({}, options, {
      minPointers: options.minPointers ?? 2
    }));
    __publicField(this, "state", {
      startDistance: 0,
      lastDistance: 0,
      lastScale: 1,
      lastTime: 0,
      velocity: 0,
      totalScale: 1,
      deltaScale: 0
    });
    /**
     * Handle pointer events for the pinch gesture
     */
    __publicField(this, "handlePointerEvent", (pointers, event) => {
      const pointersArray = Array.from(pointers.values());
      const targetElement = this.getTargetElement(event);
      if (!targetElement) {
        return;
      }
      if (this.shouldPreventGesture(targetElement, event.pointerType)) {
        if (this.isActive) {
          this.emitPinchEvent(targetElement, "cancel", pointersArray, event);
          this.resetState();
        }
        return;
      }
      const relevantPointers = this.getRelevantPointers(pointersArray, targetElement);
      switch (event.type) {
        case "pointerdown":
          if (relevantPointers.length >= 2 && !this.isActive) {
            const initialDistance = calculateAverageDistance(relevantPointers);
            this.state.startDistance = initialDistance;
            this.state.lastDistance = initialDistance;
            this.state.lastTime = event.timeStamp;
            this.originalTarget = targetElement;
          } else if (this.isActive && relevantPointers.length >= 2) {
            const newDistance = calculateAverageDistance(relevantPointers);
            this.state.startDistance = newDistance / this.state.lastScale;
            this.state.lastDistance = newDistance;
            this.state.lastTime = event.timeStamp;
          }
          break;
        case "pointermove":
          if (this.state.startDistance && this.isWithinPointerCount(relevantPointers, event.pointerType)) {
            const currentDistance = calculateAverageDistance(relevantPointers);
            const distanceChange = Math.abs(currentDistance - this.state.lastDistance);
            if (distanceChange !== 0 && distanceChange >= this.threshold) {
              const scale = this.state.startDistance ? currentDistance / this.state.startDistance : 1;
              const scaleChange = scale / this.state.lastScale;
              this.state.totalScale *= scaleChange;
              const deltaTime = (event.timeStamp - this.state.lastTime) / 1e3;
              if (this.state.lastDistance) {
                const deltaDistance = currentDistance - this.state.lastDistance;
                const result = deltaDistance / deltaTime;
                this.state.velocity = Number.isNaN(result) ? 0 : result;
              }
              this.state.lastDistance = currentDistance;
              this.state.deltaScale = scale - this.state.lastScale;
              this.state.lastScale = scale;
              this.state.lastTime = event.timeStamp;
              if (!this.isActive) {
                this.isActive = true;
                this.emitPinchEvent(targetElement, "start", relevantPointers, event);
                this.emitPinchEvent(targetElement, "ongoing", relevantPointers, event);
              } else {
                this.emitPinchEvent(targetElement, "ongoing", relevantPointers, event);
              }
            }
          }
          break;
        case "pointerup":
        case "pointercancel":
        case "forceCancel":
          if (this.isActive) {
            const remainingPointers = relevantPointers.filter((p) => p.type !== "pointerup" && p.type !== "pointercancel");
            if (!this.isWithinPointerCount(remainingPointers, event.pointerType)) {
              if (event.type === "pointercancel") {
                this.emitPinchEvent(targetElement, "cancel", relevantPointers, event);
              }
              this.emitPinchEvent(targetElement, "end", relevantPointers, event);
              this.resetState();
            } else if (remainingPointers.length >= 2) {
              const newDistance = calculateAverageDistance(remainingPointers);
              this.state.startDistance = newDistance / this.state.lastScale;
              this.state.lastDistance = newDistance;
              this.state.lastTime = event.timeStamp;
            }
          }
          break;
        default:
          break;
      }
    });
    this.threshold = options.threshold ?? 0;
  }
  clone(overrides) {
    return new _PinchGesture(_extends({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, overrides));
  }
  destroy() {
    this.resetState();
    super.destroy();
  }
  updateOptions(options) {
    super.updateOptions(options);
  }
  resetState() {
    this.isActive = false;
    this.state = _extends({}, this.state, {
      startDistance: 0,
      lastDistance: 0,
      lastScale: 1,
      lastTime: 0,
      velocity: 0,
      deltaScale: 0
    });
  }
  /**
   * Emit pinch-specific events with additional data
   */
  emitPinchEvent(element, phase, pointers, event) {
    const centroid = calculateCentroid(pointers);
    const distance = this.state.lastDistance;
    const scale = this.state.lastScale;
    const activeGestures = this.gesturesRegistry.getActiveGestures(element);
    const customEventData = {
      gestureName: this.name,
      centroid,
      target: event.target,
      srcEvent: event,
      phase,
      pointers,
      timeStamp: event.timeStamp,
      scale,
      deltaScale: this.state.deltaScale,
      totalScale: this.state.totalScale,
      distance,
      velocity: this.state.velocity,
      activeGestures,
      direction: getPinchDirection(this.state.velocity),
      customData: this.customData
    };
    if (this.preventDefault) {
      event.preventDefault();
    }
    if (this.stopPropagation) {
      event.stopPropagation();
    }
    const eventName = createEventName(this.name, phase);
    const domEvent = new CustomEvent(eventName, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: customEventData
    });
    element.dispatchEvent(domEvent);
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/gestures/PressGesture.js
var PressGesture = class _PressGesture extends PointerGesture {
  /**
   * Duration in milliseconds required to hold before the press gesture is recognized
   */
  /**
   * Maximum distance a pointer can move for a gesture to still be considered a press
   */
  constructor(options) {
    super(options);
    __publicField(this, "state", {
      startCentroid: null,
      lastPosition: null,
      timerId: null,
      startTime: 0,
      pressThresholdReached: false
    });
    /**
     * Handle pointer events for the press gesture
     */
    __publicField(this, "handlePointerEvent", (pointers, event) => {
      const pointersArray = Array.from(pointers.values());
      if (event.type === "forceCancel") {
        this.cancelPress(event.target, pointersArray, event);
        return;
      }
      const targetElement = this.getTargetElement(event);
      if (!targetElement) {
        return;
      }
      if (this.shouldPreventGesture(targetElement, event.pointerType)) {
        if (this.isActive) {
          this.cancelPress(targetElement, pointersArray, event);
        }
        return;
      }
      const relevantPointers = this.getRelevantPointers(pointersArray, targetElement);
      if (!this.isWithinPointerCount(relevantPointers, event.pointerType)) {
        if (this.isActive) {
          this.cancelPress(targetElement, relevantPointers, event);
        }
        return;
      }
      switch (event.type) {
        case "pointerdown":
          if (!this.isActive && !this.state.startCentroid) {
            this.state.startCentroid = calculateCentroid(relevantPointers);
            this.state.lastPosition = _extends({}, this.state.startCentroid);
            this.state.startTime = event.timeStamp;
            this.isActive = true;
            this.originalTarget = targetElement;
            this.clearPressTimer();
            this.state.timerId = setTimeout(() => {
              if (this.isActive && this.state.startCentroid) {
                this.state.pressThresholdReached = true;
                const lastPosition = this.state.lastPosition;
                this.emitPressEvent(targetElement, "start", relevantPointers, event, lastPosition);
                this.emitPressEvent(targetElement, "ongoing", relevantPointers, event, lastPosition);
              }
            }, this.duration);
          }
          break;
        case "pointermove":
          if (this.isActive && this.state.startCentroid) {
            const currentPosition = calculateCentroid(relevantPointers);
            this.state.lastPosition = currentPosition;
            const deltaX = currentPosition.x - this.state.startCentroid.x;
            const deltaY = currentPosition.y - this.state.startCentroid.y;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (distance > this.maxDistance) {
              this.cancelPress(targetElement, relevantPointers, event);
            }
          }
          break;
        case "pointerup":
          if (this.isActive) {
            if (this.state.pressThresholdReached) {
              const position = this.state.lastPosition || this.state.startCentroid;
              this.emitPressEvent(targetElement, "end", relevantPointers, event, position);
            }
            this.resetState();
          }
          break;
        case "pointercancel":
        case "forceCancel":
          this.cancelPress(targetElement, relevantPointers, event);
          break;
        default:
          break;
      }
    });
    this.duration = options.duration ?? 500;
    this.maxDistance = options.maxDistance ?? 10;
  }
  clone(overrides) {
    return new _PressGesture(_extends({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      duration: this.duration,
      maxDistance: this.maxDistance,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, overrides));
  }
  destroy() {
    this.clearPressTimer();
    this.resetState();
    super.destroy();
  }
  updateOptions(options) {
    super.updateOptions(options);
    this.duration = options.duration ?? this.duration;
    this.maxDistance = options.maxDistance ?? this.maxDistance;
  }
  resetState() {
    this.clearPressTimer();
    this.isActive = false;
    this.state = _extends({}, this.state, {
      startCentroid: null,
      lastPosition: null,
      timerId: null,
      startTime: 0,
      pressThresholdReached: false
    });
  }
  /**
   * Clear the press timer if it's active
   */
  clearPressTimer() {
    if (this.state.timerId !== null) {
      clearTimeout(this.state.timerId);
      this.state.timerId = null;
    }
  }
  /**
   * Emit press-specific events with additional data
   */
  emitPressEvent(element, phase, pointers, event, position) {
    const activeGestures = this.gesturesRegistry.getActiveGestures(element);
    const currentDuration = event.timeStamp - this.state.startTime;
    const customEventData = {
      gestureName: this.name,
      centroid: position,
      target: event.target,
      srcEvent: event,
      phase,
      pointers,
      timeStamp: event.timeStamp,
      x: position.x,
      y: position.y,
      duration: currentDuration,
      activeGestures,
      customData: this.customData
    };
    const eventName = createEventName(this.name, phase);
    const domEvent = new CustomEvent(eventName, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: customEventData
    });
    element.dispatchEvent(domEvent);
    if (this.preventDefault) {
      event.preventDefault();
    }
    if (this.stopPropagation) {
      event.stopPropagation();
    }
  }
  /**
   * Cancel the current press gesture
   */
  cancelPress(element, pointers, event) {
    if (this.isActive && this.state.pressThresholdReached) {
      const position = this.state.lastPosition || this.state.startCentroid;
      this.emitPressEvent(element ?? this.element, "cancel", pointers, event, position);
      this.emitPressEvent(element ?? this.element, "end", pointers, event, position);
    }
    this.resetState();
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/gestures/PressAndDragGesture.js
var PressAndDragGesture = class _PressAndDragGesture extends PointerGesture {
  /**
   * Duration required for press recognition
   */
  /**
   * Maximum distance a pointer can move during press for it to still be considered a press
   */
  /**
   * Maximum time between press completion and drag start
   */
  /**
   * Movement threshold for drag activation
   */
  /**
   * Allowed directions for the drag gesture
   */
  constructor(options) {
    super(options);
    __publicField(this, "state", {
      phase: "waitingForPress",
      dragTimeoutId: null
    });
    __publicField(this, "pressHandler", () => {
      if (this.state.phase !== "waitingForPress") {
        return;
      }
      this.state.phase = "pressDetected";
      this.setTouchAction();
      this.state.dragTimeoutId = setTimeout(() => {
        this.resetState();
      }, this.dragTimeout);
    });
    __publicField(this, "dragStartHandler", (event) => {
      if (this.state.phase !== "pressDetected") {
        return;
      }
      if (this.state.dragTimeoutId !== null) {
        clearTimeout(this.state.dragTimeoutId);
        this.state.dragTimeoutId = null;
      }
      this.restoreTouchAction();
      this.state.phase = "dragging";
      this.isActive = true;
      this.element.dispatchEvent(new CustomEvent(createEventName(this.name, event.detail.phase), event));
    });
    __publicField(this, "dragMoveHandler", (event) => {
      if (this.state.phase !== "dragging") {
        return;
      }
      this.element.dispatchEvent(new CustomEvent(createEventName(this.name, event.detail.phase), event));
    });
    __publicField(this, "dragEndHandler", (event) => {
      if (this.state.phase !== "dragging") {
        return;
      }
      this.resetState();
      this.element.dispatchEvent(new CustomEvent(createEventName(this.name, event.detail.phase), event));
    });
    this.pressDuration = options.pressDuration ?? 500;
    this.pressMaxDistance = options.pressMaxDistance ?? 10;
    this.dragTimeout = options.dragTimeout ?? 1e3;
    this.dragThreshold = options.dragThreshold ?? 0;
    this.dragDirection = options.dragDirection || ["up", "down", "left", "right"];
    this.pressGesture = new PressGesture({
      name: `${this.name}-press`,
      duration: this.pressDuration,
      maxDistance: this.pressMaxDistance,
      maxPointers: this.maxPointers,
      pointerMode: this.pointerMode,
      requiredKeys: this.requiredKeys,
      preventIf: this.preventIf,
      pointerOptions: structuredClone(this.pointerOptions)
    });
    this.panGesture = new PanGesture({
      name: `${this.name}-pan`,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      threshold: this.dragThreshold,
      direction: this.dragDirection,
      pointerMode: this.pointerMode,
      requiredKeys: this.requiredKeys,
      preventIf: this.preventIf,
      pointerOptions: structuredClone(this.pointerOptions)
    });
  }
  clone(overrides) {
    return new _PressAndDragGesture(_extends({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      pressDuration: this.pressDuration,
      pressMaxDistance: this.pressMaxDistance,
      dragTimeout: this.dragTimeout,
      dragThreshold: this.dragThreshold,
      dragDirection: [...this.dragDirection],
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, overrides));
  }
  init(element, pointerManager, gestureRegistry, keyboardManager) {
    super.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.pressGesture.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.panGesture.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.element.addEventListener(this.pressGesture.name, this.pressHandler);
    this.element.addEventListener(`${this.panGesture.name}Start`, this.dragStartHandler);
    this.element.addEventListener(this.panGesture.name, this.dragMoveHandler);
    this.element.addEventListener(`${this.panGesture.name}End`, this.dragEndHandler);
    this.element.addEventListener(`${this.panGesture.name}Cancel`, this.dragEndHandler);
  }
  destroy() {
    this.resetState();
    this.pressGesture.destroy();
    this.panGesture.destroy();
    this.element.removeEventListener(this.pressGesture.name, this.pressHandler);
    this.element.removeEventListener(`${this.panGesture.name}Start`, this.dragStartHandler);
    this.element.removeEventListener(this.panGesture.name, this.dragMoveHandler);
    this.element.removeEventListener(`${this.panGesture.name}End`, this.dragEndHandler);
    this.element.removeEventListener(`${this.panGesture.name}Cancel`, this.dragEndHandler);
    super.destroy();
  }
  updateOptions(options) {
    super.updateOptions(options);
    this.pressDuration = options.pressDuration ?? this.pressDuration;
    this.pressMaxDistance = options.pressMaxDistance ?? this.pressMaxDistance;
    this.dragTimeout = options.dragTimeout ?? this.dragTimeout;
    this.dragThreshold = options.dragThreshold ?? this.dragThreshold;
    this.dragDirection = options.dragDirection || this.dragDirection;
    this.element.dispatchEvent(new CustomEvent(`${this.panGesture.name}ChangeOptions`, {
      detail: {
        minPointers: this.minPointers,
        maxPointers: this.maxPointers,
        threshold: this.dragThreshold,
        direction: this.dragDirection,
        pointerMode: this.pointerMode,
        requiredKeys: this.requiredKeys,
        preventIf: this.preventIf,
        pointerOptions: structuredClone(this.pointerOptions)
      }
    }));
    this.element.dispatchEvent(new CustomEvent(`${this.pressGesture.name}ChangeOptions`, {
      detail: {
        duration: this.pressDuration,
        maxDistance: this.pressMaxDistance,
        maxPointers: this.maxPointers,
        pointerMode: this.pointerMode,
        requiredKeys: this.requiredKeys,
        preventIf: this.preventIf,
        pointerOptions: structuredClone(this.pointerOptions)
      }
    }));
  }
  resetState() {
    if (this.state.dragTimeoutId !== null) {
      clearTimeout(this.state.dragTimeoutId);
    }
    this.restoreTouchAction();
    this.isActive = false;
    this.state = {
      phase: "waitingForPress",
      dragTimeoutId: null
    };
  }
  /**
   * This can be empty because the PressAndDragGesture relies on PressGesture and PanGesture to handle pointer events
   * The internal gestures will manage their own state and events, while this class coordinates between them
   */
  handlePointerEvent() {
  }
  setTouchAction() {
    this.element.addEventListener("touchstart", preventDefault, {
      passive: false
    });
    this.element.addEventListener("touchmove", preventDefault, {
      passive: false
    });
    this.element.addEventListener("touchend", preventDefault, {
      passive: false
    });
  }
  restoreTouchAction() {
    this.element.removeEventListener("touchstart", preventDefault);
    this.element.removeEventListener("touchmove", preventDefault);
    this.element.removeEventListener("touchend", preventDefault);
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/gestures/TapGesture.js
var TapGesture = class _TapGesture extends PointerGesture {
  /**
   * Maximum distance a pointer can move for a gesture to still be considered a tap
   */
  /**
   * Number of consecutive taps to detect
   */
  constructor(options) {
    super(options);
    __publicField(this, "state", {
      startCentroid: null,
      currentTapCount: 0,
      lastTapTime: 0,
      lastPosition: null
    });
    /**
     * Handle pointer events for the tap gesture
     */
    __publicField(this, "handlePointerEvent", (pointers, event) => {
      const pointersArray = Array.from(pointers.values());
      const targetElement = this.getTargetElement(event);
      if (!targetElement) {
        return;
      }
      const relevantPointers = this.getRelevantPointers(pointersArray, targetElement);
      if (this.shouldPreventGesture(targetElement, event.pointerType) || !this.isWithinPointerCount(relevantPointers, event.pointerType)) {
        if (this.isActive) {
          this.cancelTap(targetElement, relevantPointers, event);
        }
        return;
      }
      switch (event.type) {
        case "pointerdown":
          if (!this.isActive) {
            this.state.startCentroid = calculateCentroid(relevantPointers);
            this.state.lastPosition = _extends({}, this.state.startCentroid);
            this.isActive = true;
            this.originalTarget = targetElement;
          }
          break;
        case "pointermove":
          if (this.isActive && this.state.startCentroid) {
            const currentPosition = calculateCentroid(relevantPointers);
            this.state.lastPosition = currentPosition;
            const deltaX = currentPosition.x - this.state.startCentroid.x;
            const deltaY = currentPosition.y - this.state.startCentroid.y;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (distance > this.maxDistance) {
              this.cancelTap(targetElement, relevantPointers, event);
            }
          }
          break;
        case "pointerup":
          if (this.isActive) {
            this.state.currentTapCount += 1;
            const position = this.state.lastPosition || this.state.startCentroid;
            if (!position) {
              this.cancelTap(targetElement, relevantPointers, event);
              return;
            }
            if (this.state.currentTapCount >= this.taps) {
              this.fireTapEvent(targetElement, relevantPointers, event, position);
              this.resetState();
            } else {
              this.state.lastTapTime = event.timeStamp;
              this.isActive = false;
              this.state.startCentroid = null;
              setTimeout(() => {
                if (this.state && this.state.currentTapCount > 0 && this.state.currentTapCount < this.taps) {
                  this.state.currentTapCount = 0;
                }
              }, 300);
            }
          }
          break;
        case "pointercancel":
        case "forceCancel":
          this.cancelTap(targetElement, relevantPointers, event);
          break;
        default:
          break;
      }
    });
    this.maxDistance = options.maxDistance ?? 10;
    this.taps = options.taps ?? 1;
  }
  clone(overrides) {
    return new _TapGesture(_extends({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      maxDistance: this.maxDistance,
      taps: this.taps,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, overrides));
  }
  destroy() {
    this.resetState();
    super.destroy();
  }
  updateOptions(options) {
    super.updateOptions(options);
    this.maxDistance = options.maxDistance ?? this.maxDistance;
    this.taps = options.taps ?? this.taps;
  }
  resetState() {
    this.isActive = false;
    this.state = {
      startCentroid: null,
      currentTapCount: 0,
      lastTapTime: 0,
      lastPosition: null
    };
  }
  /**
   * Fire the main tap event when a valid tap is detected
   */
  fireTapEvent(element, pointers, event, position) {
    const activeGestures = this.gesturesRegistry.getActiveGestures(element);
    const customEventData = {
      gestureName: this.name,
      centroid: position,
      target: event.target,
      srcEvent: event,
      phase: "end",
      // The tap is complete, so we use 'end' state for the event data
      pointers,
      timeStamp: event.timeStamp,
      x: position.x,
      y: position.y,
      tapCount: this.state.currentTapCount,
      activeGestures,
      customData: this.customData
    };
    const domEvent = new CustomEvent(this.name, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: customEventData
    });
    element.dispatchEvent(domEvent);
    if (this.preventDefault) {
      event.preventDefault();
    }
    if (this.stopPropagation) {
      event.stopPropagation();
    }
  }
  /**
   * Cancel the current tap gesture
   */
  cancelTap(element, pointers, event) {
    if (this.state.startCentroid || this.state.lastPosition) {
      const position = this.state.lastPosition || this.state.startCentroid;
      const activeGestures = this.gesturesRegistry.getActiveGestures(element);
      const customEventData = {
        gestureName: this.name,
        centroid: position,
        target: event.target,
        srcEvent: event,
        phase: "cancel",
        pointers,
        timeStamp: event.timeStamp,
        x: position.x,
        y: position.y,
        tapCount: this.state.currentTapCount,
        activeGestures,
        customData: this.customData
      };
      const eventName = createEventName(this.name, "cancel");
      const domEvent = new CustomEvent(eventName, {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: customEventData
      });
      element.dispatchEvent(domEvent);
    }
    this.resetState();
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/gestures/TapAndDragGesture.js
var TapAndDragGesture = class _TapAndDragGesture extends PointerGesture {
  /**
   * Maximum distance a pointer can move during tap for it to still be considered a tap
   * (Following TapGesture pattern)
   */
  /**
   * Maximum time between tap completion and drag start
   */
  /**
   * Movement threshold for drag activation
   */
  /**
   * Allowed directions for the drag gesture
   */
  constructor(options) {
    super(options);
    __publicField(this, "state", {
      phase: "waitingForTap",
      dragTimeoutId: null
    });
    __publicField(this, "tapHandler", () => {
      if (this.state.phase !== "waitingForTap") {
        return;
      }
      this.state.phase = "tapDetected";
      this.setTouchAction();
      this.state.dragTimeoutId = setTimeout(() => {
        this.resetState();
      }, this.dragTimeout);
    });
    __publicField(this, "dragStartHandler", (event) => {
      if (this.state.phase !== "tapDetected") {
        return;
      }
      if (this.state.dragTimeoutId !== null) {
        clearTimeout(this.state.dragTimeoutId);
        this.state.dragTimeoutId = null;
      }
      this.restoreTouchAction();
      this.state.phase = "dragging";
      this.isActive = true;
      this.element.dispatchEvent(new CustomEvent(createEventName(this.name, event.detail.phase), event));
    });
    __publicField(this, "dragMoveHandler", (event) => {
      if (this.state.phase !== "dragging") {
        return;
      }
      this.element.dispatchEvent(new CustomEvent(createEventName(this.name, event.detail.phase), event));
    });
    __publicField(this, "dragEndHandler", (event) => {
      if (this.state.phase !== "dragging") {
        return;
      }
      this.resetState();
      this.element.dispatchEvent(new CustomEvent(createEventName(this.name, event.detail.phase), event));
    });
    this.tapMaxDistance = options.tapMaxDistance ?? 10;
    this.dragTimeout = options.dragTimeout ?? 1e3;
    this.dragThreshold = options.dragThreshold ?? 0;
    this.dragDirection = options.dragDirection || ["up", "down", "left", "right"];
    this.tapGesture = new TapGesture({
      name: `${this.name}-tap`,
      maxDistance: this.tapMaxDistance,
      maxPointers: this.maxPointers,
      pointerMode: this.pointerMode,
      requiredKeys: this.requiredKeys,
      preventIf: this.preventIf,
      pointerOptions: structuredClone(this.pointerOptions)
    });
    this.panGesture = new PanGesture({
      name: `${this.name}-pan`,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      threshold: this.dragThreshold,
      direction: this.dragDirection,
      pointerMode: this.pointerMode,
      requiredKeys: this.requiredKeys,
      preventIf: this.preventIf,
      pointerOptions: structuredClone(this.pointerOptions)
    });
  }
  clone(overrides) {
    return new _TapAndDragGesture(_extends({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      tapMaxDistance: this.tapMaxDistance,
      dragTimeout: this.dragTimeout,
      dragThreshold: this.dragThreshold,
      dragDirection: [...this.dragDirection],
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, overrides));
  }
  init(element, pointerManager, gestureRegistry, keyboardManager) {
    super.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.tapGesture.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.panGesture.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.element.addEventListener(this.tapGesture.name, this.tapHandler);
    this.element.addEventListener(`${this.panGesture.name}Start`, this.dragStartHandler);
    this.element.addEventListener(this.panGesture.name, this.dragMoveHandler);
    this.element.addEventListener(`${this.panGesture.name}End`, this.dragEndHandler);
    this.element.addEventListener(`${this.panGesture.name}Cancel`, this.dragEndHandler);
  }
  destroy() {
    this.resetState();
    this.tapGesture.destroy();
    this.panGesture.destroy();
    this.element.removeEventListener(this.tapGesture.name, this.tapHandler);
    this.element.removeEventListener(`${this.panGesture.name}Start`, this.dragStartHandler);
    this.element.removeEventListener(this.panGesture.name, this.dragMoveHandler);
    this.element.removeEventListener(`${this.panGesture.name}End`, this.dragEndHandler);
    this.element.removeEventListener(`${this.panGesture.name}Cancel`, this.dragEndHandler);
    super.destroy();
  }
  updateOptions(options) {
    super.updateOptions(options);
    this.tapMaxDistance = options.tapMaxDistance ?? this.tapMaxDistance;
    this.dragTimeout = options.dragTimeout ?? this.dragTimeout;
    this.dragThreshold = options.dragThreshold ?? this.dragThreshold;
    this.dragDirection = options.dragDirection || this.dragDirection;
    this.element.dispatchEvent(new CustomEvent(`${this.panGesture.name}ChangeOptions`, {
      detail: {
        minPointers: this.minPointers,
        maxPointers: this.maxPointers,
        threshold: this.dragThreshold,
        direction: this.dragDirection,
        pointerMode: this.pointerMode,
        requiredKeys: this.requiredKeys,
        preventIf: this.preventIf,
        pointerOptions: structuredClone(this.pointerOptions)
      }
    }));
    this.element.dispatchEvent(new CustomEvent(`${this.tapGesture.name}ChangeOptions`, {
      detail: {
        maxDistance: this.tapMaxDistance,
        maxPointers: this.maxPointers,
        pointerMode: this.pointerMode,
        requiredKeys: this.requiredKeys,
        preventIf: this.preventIf,
        pointerOptions: structuredClone(this.pointerOptions)
      }
    }));
  }
  resetState() {
    if (this.state.dragTimeoutId !== null) {
      clearTimeout(this.state.dragTimeoutId);
    }
    this.restoreTouchAction();
    this.isActive = false;
    this.state = {
      phase: "waitingForTap",
      dragTimeoutId: null
    };
  }
  /**
   * This can be empty because the TapAndDragGesture relies on TapGesture and PanGesture to handle pointer events
   * The internal gestures will manage their own state and events, while this class coordinates between them
   */
  handlePointerEvent() {
  }
  setTouchAction() {
    this.element.addEventListener("touchstart", preventDefault, {
      passive: false
    });
  }
  restoreTouchAction() {
    this.element.removeEventListener("touchstart", preventDefault);
  }
};

// ../node_modules/@mui/x-internal-gestures/esm/core/gestures/TurnWheelGesture.js
var TurnWheelGesture = class _TurnWheelGesture extends Gesture {
  /**
   * Scaling factor for delta values
   * Values > 1 increase sensitivity, values < 1 decrease sensitivity
   */
  /**
   * Maximum value for totalDelta values
   * Limits how large the accumulated wheel deltas can be
   */
  /**
   * Minimum value for totalDelta values
   * Sets a lower bound for accumulated wheel deltas
   */
  /**
   * Initial value for totalDelta values
   * Sets the starting value for delta trackers
   */
  /**
   * Whether to invert the direction of delta changes
   * When true, reverses the sign of deltaX, deltaY, and deltaZ values
   */
  constructor(options) {
    super(options);
    __publicField(this, "state", {
      totalDeltaX: 0,
      totalDeltaY: 0,
      totalDeltaZ: 0
    });
    /**
     * Handle wheel events for a specific element
     * @param element The element that received the wheel event
     * @param event The original wheel event
     */
    __publicField(this, "handleWheelEvent", (event) => {
      if (this.shouldPreventGesture(this.element, "mouse")) {
        return;
      }
      const pointers = this.pointerManager.getPointers() || /* @__PURE__ */ new Map();
      const pointersArray = Array.from(pointers.values());
      this.state.totalDeltaX += event.deltaX * this.sensitivity * (this.invert ? -1 : 1);
      this.state.totalDeltaY += event.deltaY * this.sensitivity * (this.invert ? -1 : 1);
      this.state.totalDeltaZ += event.deltaZ * this.sensitivity * (this.invert ? -1 : 1);
      ["totalDeltaX", "totalDeltaY", "totalDeltaZ"].forEach((axis) => {
        if (this.state[axis] < this.min) {
          this.state[axis] = this.min;
        }
        if (this.state[axis] > this.max) {
          this.state[axis] = this.max;
        }
      });
      this.emitWheelEvent(pointersArray, event);
    });
    this.sensitivity = options.sensitivity ?? 1;
    this.max = options.max ?? Number.MAX_SAFE_INTEGER;
    this.min = options.min ?? Number.MIN_SAFE_INTEGER;
    this.initialDelta = options.initialDelta ?? 0;
    this.invert = options.invert ?? false;
    this.state.totalDeltaX = this.initialDelta;
    this.state.totalDeltaY = this.initialDelta;
    this.state.totalDeltaZ = this.initialDelta;
  }
  clone(overrides) {
    return new _TurnWheelGesture(_extends({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      sensitivity: this.sensitivity,
      max: this.max,
      min: this.min,
      initialDelta: this.initialDelta,
      invert: this.invert,
      requiredKeys: [...this.requiredKeys],
      preventIf: [...this.preventIf]
    }, overrides));
  }
  init(element, pointerManager, gestureRegistry, keyboardManager) {
    super.init(element, pointerManager, gestureRegistry, keyboardManager);
    this.element.addEventListener("wheel", this.handleWheelEvent);
  }
  destroy() {
    this.element.removeEventListener("wheel", this.handleWheelEvent);
    this.resetState();
    super.destroy();
  }
  resetState() {
    this.isActive = false;
    this.state = {
      totalDeltaX: 0,
      totalDeltaY: 0,
      totalDeltaZ: 0
    };
  }
  updateOptions(options) {
    super.updateOptions(options);
    this.sensitivity = options.sensitivity ?? this.sensitivity;
    this.max = options.max ?? this.max;
    this.min = options.min ?? this.min;
    this.initialDelta = options.initialDelta ?? this.initialDelta;
    this.invert = options.invert ?? this.invert;
  }
  /**
   * Emit wheel-specific events
   * @param pointers The current pointers on the element
   * @param event The original wheel event
   */
  emitWheelEvent(pointers, event) {
    const centroid = pointers.length > 0 ? calculateCentroid(pointers) : {
      x: event.clientX,
      y: event.clientY
    };
    const activeGestures = this.gesturesRegistry.getActiveGestures(this.element);
    const customEventData = {
      gestureName: this.name,
      centroid,
      target: event.target,
      srcEvent: event,
      phase: "ongoing",
      // Wheel events are always in "ongoing" state
      pointers,
      timeStamp: event.timeStamp,
      deltaX: event.deltaX * this.sensitivity * (this.invert ? -1 : 1),
      deltaY: event.deltaY * this.sensitivity * (this.invert ? -1 : 1),
      deltaZ: event.deltaZ * this.sensitivity * (this.invert ? -1 : 1),
      deltaMode: event.deltaMode,
      totalDeltaX: this.state.totalDeltaX,
      totalDeltaY: this.state.totalDeltaY,
      totalDeltaZ: this.state.totalDeltaZ,
      activeGestures,
      customData: this.customData
    };
    if (this.preventDefault) {
      event.preventDefault();
    }
    if (this.stopPropagation) {
      event.stopPropagation();
    }
    const eventName = createEventName(this.name, "ongoing");
    const domEvent = new CustomEvent(eventName, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: customEventData
    });
    this.element.dispatchEvent(domEvent);
  }
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartInteractionListener/useChartInteractionListener.js
var preventDefault2 = (event) => event.preventDefault();
var useChartInteractionListener = ({
  svgRef
}) => {
  const gestureManagerRef = React18.useRef(null);
  React18.useEffect(() => {
    const svg = svgRef.current;
    if (!gestureManagerRef.current) {
      gestureManagerRef.current = new GestureManager({
        gestures: [
          // We separate the zoom gestures from the gestures that are not zoom related
          // This allows us to configure the zoom gestures based on the zoom configuration.
          new PanGesture({
            name: "pan",
            threshold: 0,
            maxPointers: 1
          }),
          new MoveGesture({
            name: "move",
            preventIf: ["pan", "zoomPinch", "zoomPan"]
          }),
          new TapGesture({
            name: "tap",
            preventIf: ["pan", "zoomPinch", "zoomPan"]
          }),
          new PressGesture({
            name: "quickPress",
            duration: 50
          }),
          new PanGesture({
            name: "brush",
            threshold: 0,
            maxPointers: 1
          }),
          // Zoom gestures
          new PanGesture({
            name: "zoomPan",
            threshold: 0,
            preventIf: ["zoomTapAndDrag", "zoomPressAndDrag"]
          }),
          new PinchGesture({
            name: "zoomPinch",
            threshold: 5
          }),
          new TurnWheelGesture({
            name: "zoomTurnWheel",
            sensitivity: 0.01,
            initialDelta: 1
          }),
          new TurnWheelGesture({
            name: "panTurnWheel",
            sensitivity: 0.5
          }),
          new TapAndDragGesture({
            name: "zoomTapAndDrag",
            dragThreshold: 10
          }),
          new PressAndDragGesture({
            name: "zoomPressAndDrag",
            dragThreshold: 10,
            preventIf: ["zoomPinch"]
          }),
          new TapGesture({
            name: "zoomDoubleTapReset",
            taps: 2
          })
        ]
      });
    }
    const gestureManager = gestureManagerRef.current;
    if (!svg || !gestureManager) {
      return void 0;
    }
    gestureManager.registerElement(["pan", "move", "zoomPinch", "zoomPan", "zoomTurnWheel", "panTurnWheel", "tap", "quickPress", "zoomTapAndDrag", "zoomPressAndDrag", "zoomDoubleTapReset", "brush"], svg);
    return () => {
      gestureManager.unregisterAllGestures(svg);
    };
  }, [svgRef, gestureManagerRef]);
  const addInteractionListener = React18.useCallback((interaction, callback, options) => {
    const svg = svgRef.current;
    svg == null ? void 0 : svg.addEventListener(interaction, callback, options);
    return {
      cleanup: () => svg == null ? void 0 : svg.removeEventListener(interaction, callback)
    };
  }, [svgRef]);
  const updateZoomInteractionListeners = React18.useCallback((interaction, options) => {
    const svg = svgRef.current;
    const gestureManager = gestureManagerRef.current;
    if (!gestureManager || !svg) {
      return;
    }
    gestureManager.setGestureOptions(interaction, svg, options ?? {});
  }, [svgRef, gestureManagerRef]);
  React18.useEffect(() => {
    const svg = svgRef.current;
    svg == null ? void 0 : svg.addEventListener("gesturestart", preventDefault2);
    svg == null ? void 0 : svg.addEventListener("gesturechange", preventDefault2);
    svg == null ? void 0 : svg.addEventListener("gestureend", preventDefault2);
    return () => {
      svg == null ? void 0 : svg.removeEventListener("gesturestart", preventDefault2);
      svg == null ? void 0 : svg.removeEventListener("gesturechange", preventDefault2);
      svg == null ? void 0 : svg.removeEventListener("gestureend", preventDefault2);
    };
  }, [svgRef]);
  return {
    instance: {
      addInteractionListener,
      updateZoomInteractionListeners
    }
  };
};
useChartInteractionListener.params = {};
useChartInteractionListener.getInitialState = () => {
  return {};
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/corePlugins.js
var CHART_CORE_PLUGINS = [useChartId, useChartExperimentalFeatures, useChartDimensions, useChartSeries, useChartInteractionListener, useChartAnimation];

// ../node_modules/@mui/x-charts/esm/internals/store/extractPluginParamsFromProps.js
var _excluded = ["apiRef"];
var extractPluginParamsFromProps = (_ref) => {
  let {
    plugins
  } = _ref, props = _objectWithoutPropertiesLoose(_ref.props, _excluded);
  const paramsLookup = {};
  plugins.forEach((plugin) => {
    Object.assign(paramsLookup, plugin.params);
  });
  const pluginParams = {};
  Object.keys(props).forEach((propName) => {
    const prop = props[propName];
    if (paramsLookup[propName]) {
      pluginParams[propName] = prop;
    }
  });
  const defaultizedPluginParams = plugins.reduce((acc, plugin) => {
    if (plugin.getDefaultizedParams) {
      return plugin.getDefaultizedParams({
        params: acc
      });
    }
    return acc;
  }, pluginParams);
  return defaultizedPluginParams;
};

// ../node_modules/@mui/x-charts/esm/internals/store/useCharts.js
var globalId = 0;
function useCharts(inPlugins, props, seriesConfig) {
  const chartId = useId();
  const plugins = React19.useMemo(() => [...CHART_CORE_PLUGINS, ...inPlugins], [inPlugins]);
  const pluginParams = extractPluginParamsFromProps({
    plugins,
    props
  });
  pluginParams.id = pluginParams.id ?? chartId;
  const instanceRef = React19.useRef({});
  const instance = instanceRef.current;
  const publicAPI = useChartApiInitialization(props.apiRef);
  const innerChartRootRef = React19.useRef(null);
  const innerSvgRef = React19.useRef(null);
  const storeRef = React19.useRef(null);
  if (storeRef.current == null) {
    globalId += 1;
    const initialState = {
      cacheKey: {
        id: globalId
      }
    };
    plugins.forEach((plugin) => {
      if (plugin.getInitialState) {
        Object.assign(initialState, plugin.getInitialState(pluginParams, initialState, seriesConfig));
      }
    });
    storeRef.current = new Store(initialState);
  }
  const runPlugin = (plugin) => {
    const pluginResponse = plugin({
      instance,
      params: pluginParams,
      plugins,
      store: storeRef.current,
      svgRef: innerSvgRef,
      chartRootRef: innerChartRootRef,
      seriesConfig
    });
    if (pluginResponse.publicAPI) {
      Object.assign(publicAPI.current, pluginResponse.publicAPI);
    }
    if (pluginResponse.instance) {
      Object.assign(instance, pluginResponse.instance);
    }
  };
  plugins.forEach(runPlugin);
  const contextValue = React19.useMemo(() => ({
    store: storeRef.current,
    publicAPI: publicAPI.current,
    instance,
    svgRef: innerSvgRef,
    chartRootRef: innerChartRootRef
  }), [instance, publicAPI]);
  return {
    contextValue
  };
}
function initializeInputApiRef(inputApiRef) {
  if (inputApiRef.current == null) {
    inputApiRef.current = {};
  }
  return inputApiRef;
}
function useChartApiInitialization(inputApiRef) {
  const fallbackPublicApiRef = React19.useRef({});
  if (inputApiRef) {
    return initializeInputApiRef(inputApiRef);
  }
  return fallbackPublicApiRef;
}

// ../node_modules/@mui/x-charts/esm/internals/findMinMax.js
function findMinMax(data) {
  let min4 = Infinity;
  let max4 = -Infinity;
  for (const value of data ?? []) {
    if (value < min4) {
      min4 = value;
    }
    if (value > max4) {
      max4 = value;
    }
  }
  return [min4, max4];
}

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/bar/extremums.js
var createResult = (data, direction) => {
  if (direction === "x") {
    return {
      x: data,
      y: null
    };
  }
  return {
    x: null,
    y: data
  };
};
var getBaseExtremum = (params) => {
  var _a;
  const {
    axis,
    getFilters,
    isDefaultAxis
  } = params;
  const filter2 = getFilters == null ? void 0 : getFilters({
    currentAxisId: axis.id,
    isDefaultAxis
  });
  const data = filter2 ? (_a = axis.data) == null ? void 0 : _a.filter((_, i) => filter2({
    x: null,
    y: null
  }, i)) : axis.data;
  return findMinMax(data ?? []);
};
var getValueExtremum = (direction) => (params) => {
  const {
    series,
    axis,
    getFilters,
    isDefaultAxis
  } = params;
  return Object.keys(series).filter((seriesId) => {
    const axisId = direction === "x" ? series[seriesId].xAxisId : series[seriesId].yAxisId;
    return axisId === axis.id || isDefaultAxis && axisId === void 0;
  }).reduce((acc, seriesId) => {
    const {
      stackedData
    } = series[seriesId];
    const filter2 = getFilters == null ? void 0 : getFilters({
      currentAxisId: axis.id,
      isDefaultAxis,
      seriesXAxisId: series[seriesId].xAxisId,
      seriesYAxisId: series[seriesId].yAxisId
    });
    const [seriesMin, seriesMax] = (stackedData == null ? void 0 : stackedData.reduce((seriesAcc, values2, index2) => {
      if (filter2 && (!filter2(createResult(values2[0], direction), index2) || !filter2(createResult(values2[1], direction), index2))) {
        return seriesAcc;
      }
      return [Math.min(...values2, seriesAcc[0]), Math.max(...values2, seriesAcc[1])];
    }, [Infinity, -Infinity])) ?? [Infinity, -Infinity];
    return [Math.min(seriesMin, acc[0]), Math.max(seriesMax, acc[1])];
  }, [Infinity, -Infinity]);
};
var getExtremumX = (params) => {
  const isHorizontal = Object.keys(params.series).some((seriesId) => params.series[seriesId].layout === "horizontal");
  if (isHorizontal) {
    return getValueExtremum("x")(params);
  }
  return getBaseExtremum(params);
};
var getExtremumY = (params) => {
  const isHorizontal = Object.keys(params.series).some((seriesId) => params.series[seriesId].layout === "horizontal");
  if (isHorizontal) {
    return getBaseExtremum(params);
  }
  return getValueExtremum("y")(params);
};

// ../node_modules/@mui/x-charts/esm/internals/stacking/offset/offsetDiverging.js
function offsetDiverging(series, order2) {
  if (series.length === 0) {
    return;
  }
  const seriesCount = series.length;
  const numericOrder = order2;
  const pointCount = series[numericOrder[0]].length;
  for (let pointIndex = 0; pointIndex < pointCount; pointIndex += 1) {
    let positiveSum = 0;
    let negativeSum = 0;
    for (let seriesIndex = 0; seriesIndex < seriesCount; seriesIndex += 1) {
      const currentSeries = series[numericOrder[seriesIndex]];
      const dataPoint = currentSeries[pointIndex];
      const difference2 = dataPoint[1] - dataPoint[0];
      if (difference2 > 0) {
        dataPoint[0] = positiveSum;
        positiveSum += difference2;
        dataPoint[1] = positiveSum;
      } else if (difference2 < 0) {
        dataPoint[1] = negativeSum;
        negativeSum += difference2;
        dataPoint[0] = negativeSum;
      } else if (dataPoint.data[currentSeries.key] > 0) {
        dataPoint[0] = positiveSum;
        dataPoint[1] = positiveSum;
      } else if (dataPoint.data[currentSeries.key] < 0) {
        dataPoint[1] = negativeSum;
        dataPoint[0] = negativeSum;
      } else {
        dataPoint[0] = 0;
        dataPoint[1] = 0;
      }
    }
  }
}

// ../node_modules/@mui/x-charts/esm/internals/stacking/stackSeries.js
var StackOrder = {
  /**
   * Series order such that the earliest series (according to the maximum value) is at the bottom.
   * */
  appearance: appearance_default,
  /**
   *  Series order such that the smallest series (according to the sum of values) is at the bottom.
   * */
  ascending: ascending_default,
  /**
   * Series order such that the largest series (according to the sum of values) is at the bottom.
   */
  descending: descending_default2,
  /**
   * Series order such that the earliest series (according to the maximum value) are on the inside and the later series are on the outside. This order is recommended for streamgraphs in conjunction with the wiggle offset. See Stacked Graphs—Geometry & Aesthetics by Byron & Wattenberg for more information.
   */
  insideOut: insideOut_default,
  /**
   * Given series order [0, 1, … n - 1] where n is the number of elements in series. Thus, the stack order is given by the key accessor.
   */
  none: none_default2,
  /**
   * Reverse of the given series order [n - 1, n - 2, … 0] where n is the number of elements in series. Thus, the stack order is given by the reverse of the key accessor.
   */
  reverse: reverse_default
};
var StackOffset = {
  /**
   * Applies a zero baseline and normalizes the values for each point such that the topline is always one.
   * */
  expand: expand_default,
  /**
   * Positive values are stacked above zero, negative values are stacked below zero, and zero values are stacked at zero.
   * */
  // @ts-expect-error, d3 types are wrong, our custom function implements the correct signature
  diverging: offsetDiverging,
  /**
   * Applies a zero baseline.
   * */
  none: none_default,
  /**
   * Shifts the baseline down such that the center of the streamgraph is always at zero.
   * */
  silhouette: silhouette_default,
  /**
   * Shifts the baseline so as to minimize the weighted wiggle of layers. This offset is recommended for streamgraphs in conjunction with the inside-out order. See Stacked Graphs—Geometry & Aesthetics by Bryon & Wattenberg for more information.
   * */
  wiggle: wiggle_default
};
var getStackingGroups = (params) => {
  const {
    series,
    seriesOrder,
    defaultStrategy
  } = params;
  const stackingGroups = [];
  const stackIndex = {};
  seriesOrder.forEach((id) => {
    const {
      stack,
      stackOrder,
      stackOffset
    } = series[id];
    if (stack === void 0) {
      stackingGroups.push({
        ids: [id],
        stackingOrder: StackOrder.none,
        stackingOffset: StackOffset.none
      });
    } else if (stackIndex[stack] === void 0) {
      stackIndex[stack] = stackingGroups.length;
      stackingGroups.push({
        ids: [id],
        stackingOrder: StackOrder[stackOrder ?? (defaultStrategy == null ? void 0 : defaultStrategy.stackOrder) ?? "none"],
        stackingOffset: StackOffset[stackOffset ?? (defaultStrategy == null ? void 0 : defaultStrategy.stackOffset) ?? "diverging"]
      });
    } else {
      stackingGroups[stackIndex[stack]].ids.push(id);
      if (stackOrder !== void 0) {
        stackingGroups[stackIndex[stack]].stackingOrder = StackOrder[stackOrder];
      }
      if (stackOffset !== void 0) {
        stackingGroups[stackIndex[stack]].stackingOffset = StackOffset[stackOffset];
      }
    }
  });
  return stackingGroups;
};

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/bar/seriesProcessor.js
var barValueFormatter = (v) => v == null ? "" : v.toLocaleString();
var seriesProcessor = (params, dataset) => {
  const {
    seriesOrder,
    series
  } = params;
  const stackingGroups = getStackingGroups(params);
  const d3Dataset = dataset ?? [];
  seriesOrder.forEach((id) => {
    const data = series[id].data;
    if (data !== void 0) {
      data.forEach((value, index2) => {
        if (d3Dataset.length <= index2) {
          d3Dataset.push({
            [id]: value
          });
        } else {
          d3Dataset[index2][id] = value;
        }
      });
    } else if (dataset === void 0) {
      throw new Error([`MUI X Charts: bar series with id='${id}' has no data.`, "Either provide a data property to the series or use the dataset prop."].join("\n"));
    }
    if (true) {
      if (!data && dataset) {
        const dataKey = series[id].dataKey;
        if (!dataKey) {
          throw new Error([`MUI X Charts: bar series with id='${id}' has no data and no dataKey.`, "You must provide a dataKey when using the dataset prop."].join("\n"));
        }
        dataset.forEach((entry, index2) => {
          const value = entry[dataKey];
          if (value != null && typeof value !== "number") {
            warnOnce([`MUI X Charts: your dataset key "${dataKey}" is used for plotting bars, but the dataset contains the non-null non-numerical element "${value}" at index ${index2}.`, "Bar plots only support numeric and null values."].join("\n"));
          }
        });
      }
    }
  });
  const completedSeries = {};
  stackingGroups.forEach((stackingGroup) => {
    const {
      ids,
      stackingOffset,
      stackingOrder
    } = stackingGroup;
    const stackedSeries = stack_default().keys(ids.map((id) => {
      const dataKey = series[id].dataKey;
      return series[id].data === void 0 && dataKey !== void 0 ? dataKey : id;
    })).value((d, key) => d[key] ?? 0).order(stackingOrder).offset(stackingOffset)(d3Dataset);
    ids.forEach((id, index2) => {
      const dataKey = series[id].dataKey;
      completedSeries[id] = _extends({
        layout: "vertical",
        labelMarkType: "square",
        minBarSize: 0,
        valueFormatter: series[id].valueFormatter ?? barValueFormatter
      }, series[id], {
        data: dataKey ? dataset.map((data) => {
          const value = data[dataKey];
          return typeof value === "number" ? value : null;
        }) : series[id].data,
        stackedData: stackedSeries[index2].map(([a2, b]) => [a2, b])
      });
    });
  });
  return {
    seriesOrder,
    stackingGroups,
    series: completedSeries
  };
};
var seriesProcessor_default = seriesProcessor;

// ../node_modules/@mui/x-charts/esm/internals/getLabel.js
function getLabel(value, location) {
  return typeof value === "function" ? value(location) : value;
}

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/bar/legend.js
var legendGetter = (params) => {
  const {
    seriesOrder,
    series
  } = params;
  return seriesOrder.reduce((acc, seriesId) => {
    const formattedLabel = getLabel(series[seriesId].label, "legend");
    if (formattedLabel === void 0) {
      return acc;
    }
    acc.push({
      markType: series[seriesId].labelMarkType,
      id: seriesId,
      seriesId,
      color: series[seriesId].color,
      label: formattedLabel
    });
    return acc;
  }, []);
};
var legend_default = legendGetter;

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/bar/getColor.js
var getColor2 = (series, xAxis, yAxis) => {
  const verticalLayout = series.layout === "vertical";
  const bandColorScale = verticalLayout ? xAxis == null ? void 0 : xAxis.colorScale : yAxis == null ? void 0 : yAxis.colorScale;
  const valueColorScale = verticalLayout ? yAxis == null ? void 0 : yAxis.colorScale : xAxis == null ? void 0 : xAxis.colorScale;
  const bandValues = verticalLayout ? xAxis == null ? void 0 : xAxis.data : yAxis == null ? void 0 : yAxis.data;
  const getSeriesColor = getSeriesColorFn(series);
  if (valueColorScale) {
    return (dataIndex) => {
      if (dataIndex === void 0) {
        return series.color;
      }
      const value = series.data[dataIndex];
      const color2 = value === null ? getSeriesColor({
        value,
        dataIndex
      }) : valueColorScale(value);
      if (color2 === null) {
        return getSeriesColor({
          value,
          dataIndex
        });
      }
      return color2;
    };
  }
  if (bandColorScale && bandValues) {
    return (dataIndex) => {
      if (dataIndex === void 0) {
        return series.color;
      }
      const value = bandValues[dataIndex];
      const color2 = value === null ? getSeriesColor({
        value,
        dataIndex
      }) : bandColorScale(value);
      if (color2 === null) {
        return getSeriesColor({
          value,
          dataIndex
        });
      }
      return color2;
    };
  }
  return (dataIndex) => {
    if (dataIndex === void 0) {
      return series.color;
    }
    const value = series.data[dataIndex];
    return getSeriesColor({
      value,
      dataIndex
    });
  };
};
var getColor_default2 = getColor2;

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartKeyboardNavigation/utils/getPreviousNonEmptySeries.js
function getPreviousNonEmptySeries(series, availableSeriesTypes, type, seriesId) {
  const seriesType = Object.keys(series);
  const startingSeriesIndex = type !== void 0 && seriesId !== void 0 && series[type] && series[type].series[seriesId] ? series[type].seriesOrder.indexOf(seriesId) : 1;
  const typesAvailable = seriesType.filter((t) => availableSeriesTypes == null ? void 0 : availableSeriesTypes.has(t));
  const startingTypeIndex = type !== void 0 && series[type] ? typesAvailable.indexOf(type) : 0;
  for (let typeGap = 0; typeGap < typesAvailable.length; typeGap += 1) {
    const typeIndex2 = (typesAvailable.length + startingTypeIndex - typeGap) % typesAvailable.length;
    const seriesOfType2 = series[typesAvailable[typeIndex2]];
    const maxGap = typeGap === 0 ? startingSeriesIndex + 1 : seriesOfType2.seriesOrder.length;
    for (let seriesGap = 1; seriesGap < maxGap; seriesGap += 1) {
      const seriesIndex = (seriesOfType2.seriesOrder.length + startingSeriesIndex - seriesGap) % seriesOfType2.seriesOrder.length;
      if (seriesOfType2.series[seriesOfType2.seriesOrder[seriesIndex]].data.length > 0) {
        return {
          type: typesAvailable[typeIndex2],
          seriesId: seriesOfType2.seriesOrder[seriesIndex]
        };
      }
    }
  }
  const typeIndex = startingTypeIndex;
  const seriesOfType = series[typesAvailable[typeIndex]];
  const availableSeriesIds = seriesOfType.seriesOrder;
  for (let seriesIndex = availableSeriesIds.length - 1; seriesIndex > startingSeriesIndex; seriesIndex -= 1) {
    if (seriesOfType.series[seriesOfType.seriesOrder[seriesIndex]].data.length > 0) {
      return {
        type: typesAvailable[typeIndex],
        seriesId: seriesOfType.seriesOrder[seriesIndex]
      };
    }
  }
  return null;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartKeyboardNavigation/utils/getNextNonEmptySeries.js
function getNextNonEmptySeries(series, availableSeriesTypes, type, seriesId) {
  const seriesType = Object.keys(series);
  const currentSeriesIndex = type !== void 0 && seriesId !== void 0 && series[type] && series[type].series[seriesId] ? series[type].seriesOrder.indexOf(seriesId) : -1;
  const typesAvailable = seriesType.filter((t) => availableSeriesTypes == null ? void 0 : availableSeriesTypes.has(t));
  const startingTypeIndex = type !== void 0 && series[type] ? typesAvailable.indexOf(type) : 0;
  for (let typeGap = 0; typeGap < typesAvailable.length; typeGap += 1) {
    const typeIndex2 = (startingTypeIndex + typeGap) % typesAvailable.length;
    const seriesOfType2 = series[typesAvailable[typeIndex2]];
    const startingSeriesIndex = typeGap === 0 ? currentSeriesIndex + 1 : 0;
    for (let seriesIndex = startingSeriesIndex; seriesIndex < seriesOfType2.seriesOrder.length; seriesIndex += 1) {
      if (seriesOfType2.series[seriesOfType2.seriesOrder[seriesIndex]].data.length > 0) {
        return {
          type: typesAvailable[typeIndex2],
          seriesId: seriesOfType2.seriesOrder[seriesIndex]
        };
      }
    }
  }
  const typeIndex = startingTypeIndex;
  const seriesOfType = series[typesAvailable[typeIndex]];
  const endingSeriesIndex = currentSeriesIndex;
  for (let seriesIndex = 0; seriesIndex < endingSeriesIndex; seriesIndex += 1) {
    if (seriesOfType.series[seriesOfType.seriesOrder[seriesIndex]].data.length > 0) {
      return {
        type: typesAvailable[typeIndex],
        seriesId: seriesOfType.seriesOrder[seriesIndex]
      };
    }
  }
  return null;
}

// ../node_modules/@mui/x-charts/esm/internals/seriesHasData.js
function seriesHasData(series, type, seriesId) {
  var _a, _b;
  if (type === "sankey") {
    return false;
  }
  const data = (_b = (_a = series[type]) == null ? void 0 : _a.series[seriesId]) == null ? void 0 : _b.data;
  return data != null && data.length > 0;
}

// ../node_modules/@mui/x-charts/esm/internals/commonNextFocusItem.js
function createGetNextIndexFocusedItem(compatibleSeriesTypes) {
  return function getNextIndexFocusedItem(currentItem, state) {
    const processedSeries = selectorChartSeriesProcessed(state);
    let seriesId = currentItem == null ? void 0 : currentItem.seriesId;
    let type = currentItem == null ? void 0 : currentItem.type;
    if (!type || seriesId == null || !seriesHasData(processedSeries, type, seriesId)) {
      const nextSeries = getNextNonEmptySeries(processedSeries, compatibleSeriesTypes, type, seriesId);
      if (nextSeries === null) {
        return null;
      }
      type = nextSeries.type;
      seriesId = nextSeries.seriesId;
    }
    const dataLength = processedSeries[type].series[seriesId].data.length;
    return {
      type,
      seriesId,
      dataIndex: (((currentItem == null ? void 0 : currentItem.dataIndex) ?? -1) + 1) % dataLength
    };
  };
}
function createGetPreviousIndexFocusedItem(compatibleSeriesTypes) {
  return function getPreviousIndexFocusedItem(currentItem, state) {
    const processedSeries = selectorChartSeriesProcessed(state);
    let seriesId = currentItem == null ? void 0 : currentItem.seriesId;
    let type = currentItem == null ? void 0 : currentItem.type;
    if (!type || seriesId == null || !seriesHasData(processedSeries, type, seriesId)) {
      const previousSeries = getPreviousNonEmptySeries(processedSeries, compatibleSeriesTypes, type, seriesId);
      if (previousSeries === null) {
        return null;
      }
      type = previousSeries.type;
      seriesId = previousSeries.seriesId;
    }
    const dataLength = processedSeries[type].series[seriesId].data.length;
    return {
      type,
      seriesId,
      dataIndex: (dataLength + ((currentItem == null ? void 0 : currentItem.dataIndex) ?? 1) - 1) % dataLength
    };
  };
}
function createGetNextSeriesFocusedItem(compatibleSeriesTypes) {
  return function getNextSeriesFocusedItem(currentItem, state) {
    const processedSeries = selectorChartSeriesProcessed(state);
    let seriesId = currentItem == null ? void 0 : currentItem.seriesId;
    let type = currentItem == null ? void 0 : currentItem.type;
    const nextSeries = getNextNonEmptySeries(processedSeries, compatibleSeriesTypes, type, seriesId);
    if (nextSeries === null) {
      return null;
    }
    type = nextSeries.type;
    seriesId = nextSeries.seriesId;
    const dataLength = processedSeries[type].series[seriesId].data.length;
    return {
      type,
      seriesId,
      dataIndex: Math.min(dataLength - 1, (currentItem == null ? void 0 : currentItem.dataIndex) ?? 0)
    };
  };
}
function createGetPreviousSeriesFocusedItem(compatibleSeriesTypes) {
  return function getPreviousSeriesFocusedItem(currentItem, state) {
    const processedSeries = selectorChartSeriesProcessed(state);
    let seriesId = currentItem == null ? void 0 : currentItem.seriesId;
    let type = currentItem == null ? void 0 : currentItem.type;
    const previousSeries = getPreviousNonEmptySeries(processedSeries, compatibleSeriesTypes, type, seriesId);
    if (previousSeries === null) {
      return null;
    }
    type = previousSeries.type;
    seriesId = previousSeries.seriesId;
    const dataLength = processedSeries[type].series[seriesId].data.length;
    return {
      type,
      seriesId,
      dataIndex: Math.min(dataLength - 1, (currentItem == null ? void 0 : currentItem.dataIndex) ?? 0)
    };
  };
}

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/bar/keyboardFocusHandler.js
var outSeriesTypes = /* @__PURE__ */ new Set(["bar", "line", "scatter"]);
var keyboardFocusHandler = (event) => {
  switch (event.key) {
    case "ArrowRight":
      return createGetNextIndexFocusedItem(outSeriesTypes);
    case "ArrowLeft":
      return createGetPreviousIndexFocusedItem(outSeriesTypes);
    case "ArrowDown":
      return createGetPreviousSeriesFocusedItem(outSeriesTypes);
    case "ArrowUp":
      return createGetNextSeriesFocusedItem(outSeriesTypes);
    default:
      return null;
  }
};
var keyboardFocusHandler_default = keyboardFocusHandler;

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/bar/tooltip.js
var tooltipGetter = (params) => {
  const {
    series,
    getColor: getColor5,
    identifier
  } = params;
  if (!identifier || identifier.dataIndex === void 0) {
    return null;
  }
  const label = getLabel(series.label, "tooltip");
  const value = series.data[identifier.dataIndex];
  if (value == null) {
    return null;
  }
  const formattedValue = series.valueFormatter(value, {
    dataIndex: identifier.dataIndex
  });
  return {
    identifier,
    color: getColor5(identifier.dataIndex),
    label,
    value,
    formattedValue,
    markType: series.labelMarkType
  };
};
var axisTooltipGetter = (series) => {
  return Object.values(series).map((s2) => s2.layout === "horizontal" ? {
    direction: "y",
    axisId: s2.yAxisId
  } : {
    direction: "x",
    axisId: s2.xAxisId
  });
};
var tooltip_default = tooltipGetter;

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/bar/tooltipPosition.js
var tooltipItemPositionGetter = (params) => {
  var _a;
  const {
    series,
    identifier,
    axesConfig,
    placement
  } = params;
  if (!identifier || identifier.dataIndex === void 0) {
    return null;
  }
  const itemSeries = (_a = series.bar) == null ? void 0 : _a.series[identifier.seriesId];
  if (series.bar == null || itemSeries == null) {
    return null;
  }
  if (axesConfig.x === void 0 || axesConfig.y === void 0) {
    return null;
  }
  const dimensions = getBarDimensions({
    verticalLayout: itemSeries.layout === "vertical",
    xAxisConfig: axesConfig.x,
    yAxisConfig: axesConfig.y,
    series: itemSeries,
    dataIndex: identifier.dataIndex,
    numberOfGroups: series.bar.stackingGroups.length,
    groupIndex: series.bar.stackingGroups.findIndex((group2) => group2.ids.includes(itemSeries.id))
  });
  if (dimensions == null) {
    return null;
  }
  const {
    x: x2,
    y: y2,
    width,
    height
  } = dimensions;
  switch (placement) {
    case "right":
      return {
        x: x2 + width,
        y: y2 + height / 2
      };
    case "bottom":
      return {
        x: x2 + width / 2,
        y: y2 + height
      };
    case "left":
      return {
        x: x2,
        y: y2 + height / 2
      };
    case "top":
    default:
      return {
        x: x2 + width / 2,
        y: y2
      };
  }
};
var tooltipPosition_default = tooltipItemPositionGetter;

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/bar/getSeriesWithDefaultValues.js
function getSeriesWithDefaultValues(seriesData, seriesIndex, colors) {
  return _extends({}, seriesData, {
    id: seriesData.id ?? `auto-generated-id-${seriesIndex}`,
    color: seriesData.color ?? colors[seriesIndex % colors.length]
  });
}

// ../node_modules/@mui/x-charts/esm/BarChart/seriesConfig/index.js
var barSeriesConfig = {
  seriesProcessor: seriesProcessor_default,
  colorProcessor: getColor_default2,
  legendGetter: legend_default,
  tooltipGetter: tooltip_default,
  tooltipItemPositionGetter: tooltipPosition_default,
  axisTooltipGetter,
  xExtremumGetter: getExtremumX,
  yExtremumGetter: getExtremumY,
  getSeriesWithDefaultValues,
  keyboardFocusHandler: keyboardFocusHandler_default
};

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/extremums.js
var getExtremumX2 = (params) => {
  const {
    series,
    axis,
    isDefaultAxis,
    getFilters
  } = params;
  let min4 = Infinity;
  let max4 = -Infinity;
  for (const seriesId in series) {
    if (!Object.hasOwn(series, seriesId)) {
      continue;
    }
    const axisId = series[seriesId].xAxisId;
    if (!(axisId === axis.id || axisId === void 0 && isDefaultAxis)) {
      continue;
    }
    const filter2 = getFilters == null ? void 0 : getFilters({
      currentAxisId: axis.id,
      isDefaultAxis,
      seriesXAxisId: series[seriesId].xAxisId,
      seriesYAxisId: series[seriesId].yAxisId
    });
    const seriesData = series[seriesId].data ?? [];
    for (let i = 0; i < seriesData.length; i += 1) {
      const d = seriesData[i];
      if (filter2 && !filter2(d, i)) {
        continue;
      }
      if (d.x !== null) {
        if (d.x < min4) {
          min4 = d.x;
        }
        if (d.x > max4) {
          max4 = d.x;
        }
      }
    }
  }
  return [min4, max4];
};
var getExtremumY2 = (params) => {
  const {
    series,
    axis,
    isDefaultAxis,
    getFilters
  } = params;
  let min4 = Infinity;
  let max4 = -Infinity;
  for (const seriesId in series) {
    if (!Object.hasOwn(series, seriesId)) {
      continue;
    }
    const axisId = series[seriesId].yAxisId;
    if (!(axisId === axis.id || axisId === void 0 && isDefaultAxis)) {
      continue;
    }
    const filter2 = getFilters == null ? void 0 : getFilters({
      currentAxisId: axis.id,
      isDefaultAxis,
      seriesXAxisId: series[seriesId].xAxisId,
      seriesYAxisId: series[seriesId].yAxisId
    });
    const seriesData = series[seriesId].data ?? [];
    for (let i = 0; i < seriesData.length; i += 1) {
      const d = seriesData[i];
      if (filter2 && !filter2(d, i)) {
        continue;
      }
      if (d.y !== null) {
        if (d.y < min4) {
          min4 = d.y;
        }
        if (d.y > max4) {
          max4 = d.y;
        }
      }
    }
  }
  return [min4, max4];
};

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/seriesProcessor.js
var seriesProcessor2 = ({
  series,
  seriesOrder
}, dataset) => {
  const completeSeries = Object.fromEntries(Object.entries(series).map(([seriesId, seriesData]) => {
    const datasetKeys = seriesData == null ? void 0 : seriesData.datasetKeys;
    const missingKeys = ["x", "y"].filter((key) => typeof (datasetKeys == null ? void 0 : datasetKeys[key]) !== "string");
    if ((seriesData == null ? void 0 : seriesData.datasetKeys) && missingKeys.length > 0) {
      throw new Error([`MUI X Charts: scatter series with id='${seriesId}' has incomplete datasetKeys.`, `Properties ${missingKeys.map((key) => `"${key}"`).join(", ")} are missing.`].join("\n"));
    }
    const data = !datasetKeys ? seriesData.data ?? [] : (dataset == null ? void 0 : dataset.map((d) => {
      return {
        x: d[datasetKeys.x] ?? null,
        y: d[datasetKeys.y] ?? null,
        z: datasetKeys.z && d[datasetKeys.z],
        id: datasetKeys.id && d[datasetKeys.id]
      };
    })) ?? [];
    return [seriesId, _extends({
      labelMarkType: "circle",
      markerSize: 4
    }, seriesData, {
      preview: _extends({
        markerSize: 1
      }, seriesData == null ? void 0 : seriesData.preview),
      data,
      valueFormatter: seriesData.valueFormatter ?? ((v) => v && `(${v.x}, ${v.y})`)
    })];
  }));
  return {
    series: completeSeries,
    seriesOrder
  };
};
var seriesProcessor_default2 = seriesProcessor2;

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/getColor.js
var getColor3 = (series, xAxis, yAxis, zAxis) => {
  const zColorScale = zAxis == null ? void 0 : zAxis.colorScale;
  const yColorScale = yAxis == null ? void 0 : yAxis.colorScale;
  const xColorScale = xAxis == null ? void 0 : xAxis.colorScale;
  const getSeriesColor = getSeriesColorFn(series);
  if (zColorScale) {
    return (dataIndex) => {
      var _a, _b;
      if (dataIndex === void 0) {
        return series.color;
      }
      if (((_a = zAxis == null ? void 0 : zAxis.data) == null ? void 0 : _a[dataIndex]) !== void 0) {
        const color3 = zColorScale((_b = zAxis == null ? void 0 : zAxis.data) == null ? void 0 : _b[dataIndex]);
        if (color3 !== null) {
          return color3;
        }
      }
      const value = series.data[dataIndex];
      const color2 = value === null ? getSeriesColor({
        value,
        dataIndex
      }) : zColorScale(value.z);
      if (color2 === null) {
        return getSeriesColor({
          value,
          dataIndex
        });
      }
      return color2;
    };
  }
  if (yColorScale) {
    return (dataIndex) => {
      if (dataIndex === void 0) {
        return series.color;
      }
      const value = series.data[dataIndex];
      const color2 = value === null ? getSeriesColor({
        value,
        dataIndex
      }) : yColorScale(value.y);
      if (color2 === null) {
        return getSeriesColor({
          value,
          dataIndex
        });
      }
      return color2;
    };
  }
  if (xColorScale) {
    return (dataIndex) => {
      if (dataIndex === void 0) {
        return series.color;
      }
      const value = series.data[dataIndex];
      const color2 = value === null ? getSeriesColor({
        value,
        dataIndex
      }) : xColorScale(value.x);
      if (color2 === null) {
        return getSeriesColor({
          value,
          dataIndex
        });
      }
      return color2;
    };
  }
  return (dataIndex) => {
    if (dataIndex === void 0) {
      return series.color;
    }
    const value = series.data[dataIndex];
    return getSeriesColor({
      value,
      dataIndex
    });
  };
};
var getColor_default3 = getColor3;

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/legend.js
var legendGetter2 = (params) => {
  const {
    seriesOrder,
    series
  } = params;
  return seriesOrder.reduce((acc, seriesId) => {
    const formattedLabel = getLabel(series[seriesId].label, "legend");
    if (formattedLabel === void 0) {
      return acc;
    }
    acc.push({
      markType: series[seriesId].labelMarkType,
      id: seriesId,
      seriesId,
      color: series[seriesId].color,
      label: formattedLabel
    });
    return acc;
  }, []);
};
var legend_default2 = legendGetter2;

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/tooltip.js
var tooltipGetter2 = (params) => {
  const {
    series,
    getColor: getColor5,
    identifier
  } = params;
  if (!identifier || identifier.dataIndex === void 0) {
    return null;
  }
  const label = getLabel(series.label, "tooltip");
  const value = series.data[identifier.dataIndex];
  const formattedValue = series.valueFormatter(value, {
    dataIndex: identifier.dataIndex
  });
  return {
    identifier,
    color: getColor5(identifier.dataIndex),
    label,
    value,
    formattedValue,
    markType: series.labelMarkType
  };
};
var tooltip_default2 = tooltipGetter2;

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/getSeriesWithDefaultValues.js
var getSeriesWithDefaultValues2 = (seriesData, seriesIndex, colors) => {
  return _extends({}, seriesData, {
    id: seriesData.id ?? `auto-generated-id-${seriesIndex}`,
    color: seriesData.color ?? colors[seriesIndex % colors.length]
  });
};
var getSeriesWithDefaultValues_default = getSeriesWithDefaultValues2;

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/tooltipPosition.js
var tooltipItemPositionGetter2 = (params) => {
  var _a, _b, _c;
  const {
    series,
    identifier,
    axesConfig
  } = params;
  if (!identifier || identifier.dataIndex === void 0) {
    return null;
  }
  const itemSeries = (_a = series.scatter) == null ? void 0 : _a.series[identifier.seriesId];
  if (itemSeries == null) {
    return null;
  }
  if (axesConfig.x === void 0 || axesConfig.y === void 0) {
    return null;
  }
  const xValue = (_b = itemSeries.data) == null ? void 0 : _b[identifier.dataIndex].x;
  const yValue = (_c = itemSeries.data) == null ? void 0 : _c[identifier.dataIndex].y;
  if (xValue == null || yValue == null) {
    return null;
  }
  return {
    x: axesConfig.x.scale(xValue),
    y: axesConfig.y.scale(yValue)
  };
};
var tooltipPosition_default2 = tooltipItemPositionGetter2;

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/keyboardFocusHandler.js
var outSeriesTypes2 = /* @__PURE__ */ new Set(["bar", "line", "scatter"]);
var keyboardFocusHandler2 = (event) => {
  switch (event.key) {
    case "ArrowRight":
      return createGetNextIndexFocusedItem(outSeriesTypes2);
    case "ArrowLeft":
      return createGetPreviousIndexFocusedItem(outSeriesTypes2);
    case "ArrowDown":
      return createGetPreviousSeriesFocusedItem(outSeriesTypes2);
    case "ArrowUp":
      return createGetNextSeriesFocusedItem(outSeriesTypes2);
    default:
      return null;
  }
};
var keyboardFocusHandler_default2 = keyboardFocusHandler2;

// ../node_modules/@mui/x-charts/esm/ScatterChart/seriesConfig/index.js
var scatterSeriesConfig = {
  seriesProcessor: seriesProcessor_default2,
  colorProcessor: getColor_default3,
  legendGetter: legend_default2,
  tooltipGetter: tooltip_default2,
  tooltipItemPositionGetter: tooltipPosition_default2,
  xExtremumGetter: getExtremumX2,
  yExtremumGetter: getExtremumY2,
  getSeriesWithDefaultValues: getSeriesWithDefaultValues_default,
  keyboardFocusHandler: keyboardFocusHandler_default2
};

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/extremums.js
var getExtremumX3 = (params) => {
  const {
    axis
  } = params;
  return findMinMax(axis.data ?? []);
};
function getSeriesExtremums(getValues, data, stackedData, filter2) {
  return stackedData.reduce((seriesAcc, stackedValue, index2) => {
    if (data[index2] === null) {
      return seriesAcc;
    }
    const [base, value] = getValues(stackedValue);
    if (filter2 && (!filter2({
      y: base,
      x: null
    }, index2) || !filter2({
      y: value,
      x: null
    }, index2))) {
      return seriesAcc;
    }
    return [Math.min(base, value, seriesAcc[0]), Math.max(base, value, seriesAcc[1])];
  }, [Infinity, -Infinity]);
}
var getExtremumY3 = (params) => {
  const {
    series,
    axis,
    isDefaultAxis,
    getFilters
  } = params;
  return Object.keys(series).filter((seriesId) => {
    const yAxisId = series[seriesId].yAxisId;
    return yAxisId === axis.id || isDefaultAxis && yAxisId === void 0;
  }).reduce((acc, seriesId) => {
    const {
      area,
      stackedData,
      data
    } = series[seriesId];
    const isArea = area !== void 0;
    const filter2 = getFilters == null ? void 0 : getFilters({
      currentAxisId: axis.id,
      isDefaultAxis,
      seriesXAxisId: series[seriesId].xAxisId,
      seriesYAxisId: series[seriesId].yAxisId
    });
    const getValues = isArea && axis.scaleType !== "log" && typeof series[seriesId].baseline !== "string" ? (d) => d : (d) => [d[1], d[1]];
    const seriesExtremums = getSeriesExtremums(getValues, data, stackedData, filter2);
    const [seriesMin, seriesMax] = seriesExtremums;
    return [Math.min(seriesMin, acc[0]), Math.max(seriesMax, acc[1])];
  }, [Infinity, -Infinity]);
};

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/seriesProcessor.js
var seriesProcessor3 = (params, dataset) => {
  const {
    seriesOrder,
    series
  } = params;
  const stackingGroups = getStackingGroups(_extends({}, params, {
    defaultStrategy: {
      stackOffset: "none"
    }
  }));
  const d3Dataset = dataset ?? [];
  seriesOrder.forEach((id) => {
    const data = series[id].data;
    if (data !== void 0) {
      data.forEach((value, index2) => {
        if (d3Dataset.length <= index2) {
          d3Dataset.push({
            [id]: value
          });
        } else {
          d3Dataset[index2][id] = value;
        }
      });
    } else if (dataset === void 0 && true) {
      throw new Error([`MUI X Charts: line series with id='${id}' has no data.`, "Either provide a data property to the series or use the dataset prop."].join("\n"));
    }
    if (true) {
      if (!data && dataset) {
        const dataKey = series[id].dataKey;
        if (!dataKey) {
          throw new Error([`MUI X Charts: line series with id='${id}' has no data and no dataKey.`, "You must provide a dataKey when using the dataset prop."].join("\n"));
        }
        dataset.forEach((entry, index2) => {
          const value = entry[dataKey];
          if (value != null && typeof value !== "number") {
            warnOnce([`MUI X Charts: your dataset key "${dataKey}" is used for plotting lines, but the dataset contains the non-null non-numerical element "${value}" at index ${index2}.`, "Line plots only support numeric and null values."].join("\n"));
          }
        });
      }
    }
  });
  const completedSeries = {};
  stackingGroups.forEach((stackingGroup) => {
    const {
      ids,
      stackingOrder,
      stackingOffset
    } = stackingGroup;
    const stackedSeries = stack_default().keys(ids.map((id) => {
      const dataKey = series[id].dataKey;
      return series[id].data === void 0 && dataKey !== void 0 ? dataKey : id;
    })).value((d, key) => d[key] ?? 0).order(stackingOrder).offset(stackingOffset)(d3Dataset);
    ids.forEach((id, index2) => {
      var _a;
      const dataKey = series[id].dataKey;
      completedSeries[id] = _extends({
        labelMarkType: "line"
      }, series[id], {
        data: dataKey ? dataset.map((data) => {
          const value = data[dataKey];
          return typeof value === "number" ? value : null;
        }) : series[id].data,
        stackedData: stackedSeries[index2].map(([a2, b]) => [a2, b]),
        valueFormatter: ((_a = series[id]) == null ? void 0 : _a.valueFormatter) ?? ((v) => v == null ? "" : v.toLocaleString())
      });
    });
  });
  return {
    seriesOrder,
    stackingGroups,
    series: completedSeries
  };
};
var seriesProcessor_default3 = seriesProcessor3;

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/legend.js
var legendGetter3 = (params) => {
  const {
    seriesOrder,
    series
  } = params;
  return seriesOrder.reduce((acc, seriesId) => {
    const formattedLabel = getLabel(series[seriesId].label, "legend");
    if (formattedLabel === void 0) {
      return acc;
    }
    acc.push({
      markType: series[seriesId].labelMarkType,
      id: seriesId,
      seriesId,
      color: series[seriesId].color,
      label: formattedLabel
    });
    return acc;
  }, []);
};
var legend_default3 = legendGetter3;

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/tooltip.js
var tooltipGetter3 = (params) => {
  const {
    series,
    getColor: getColor5,
    identifier
  } = params;
  if (!identifier || identifier.dataIndex === void 0) {
    return null;
  }
  const label = getLabel(series.label, "tooltip");
  const value = series.data[identifier.dataIndex];
  const formattedValue = series.valueFormatter(value, {
    dataIndex: identifier.dataIndex
  });
  return {
    identifier,
    color: getColor5(identifier.dataIndex),
    label,
    value,
    formattedValue,
    markType: series.labelMarkType
  };
};
var axisTooltipGetter2 = (series) => {
  return Object.values(series).map((s2) => ({
    direction: "x",
    axisId: s2.xAxisId
  }));
};
var tooltip_default3 = tooltipGetter3;

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/getSeriesWithDefaultValues.js
var getSeriesWithDefaultValues3 = (seriesData, seriesIndex, colors) => {
  return _extends({}, seriesData, {
    id: seriesData.id ?? `auto-generated-id-${seriesIndex}`,
    color: seriesData.color ?? colors[seriesIndex % colors.length]
  });
};
var getSeriesWithDefaultValues_default2 = getSeriesWithDefaultValues3;

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/tooltipPosition.js
var tooltipItemPositionGetter3 = (params) => {
  var _a, _b;
  const {
    series,
    identifier,
    axesConfig
  } = params;
  if (!identifier || identifier.dataIndex === void 0) {
    return null;
  }
  const itemSeries = (_a = series.line) == null ? void 0 : _a.series[identifier.seriesId];
  if (itemSeries == null) {
    return null;
  }
  if (axesConfig.x === void 0 || axesConfig.y === void 0) {
    return null;
  }
  const xValue = (_b = axesConfig.x.data) == null ? void 0 : _b[identifier.dataIndex];
  const yValue = itemSeries.data[identifier.dataIndex];
  if (xValue == null || yValue == null) {
    return null;
  }
  return {
    x: axesConfig.x.scale(xValue),
    y: axesConfig.y.scale(yValue)
  };
};
var tooltipPosition_default3 = tooltipItemPositionGetter3;

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/keyboardFocusHandler.js
var outSeriesTypes3 = /* @__PURE__ */ new Set(["bar", "line", "scatter"]);
var keyboardFocusHandler3 = (event) => {
  switch (event.key) {
    case "ArrowRight":
      return createGetNextIndexFocusedItem(outSeriesTypes3);
    case "ArrowLeft":
      return createGetPreviousIndexFocusedItem(outSeriesTypes3);
    case "ArrowDown":
      return createGetPreviousSeriesFocusedItem(outSeriesTypes3);
    case "ArrowUp":
      return createGetNextSeriesFocusedItem(outSeriesTypes3);
    default:
      return null;
  }
};
var keyboardFocusHandler_default3 = keyboardFocusHandler3;

// ../node_modules/@mui/x-charts/esm/LineChart/seriesConfig/index.js
var lineSeriesConfig = {
  colorProcessor: getColor_default,
  seriesProcessor: seriesProcessor_default3,
  legendGetter: legend_default3,
  tooltipGetter: tooltip_default3,
  tooltipItemPositionGetter: tooltipPosition_default3,
  axisTooltipGetter: axisTooltipGetter2,
  xExtremumGetter: getExtremumX3,
  yExtremumGetter: getExtremumY3,
  getSeriesWithDefaultValues: getSeriesWithDefaultValues_default2,
  keyboardFocusHandler: keyboardFocusHandler_default3
};

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/seriesProcessor.js
var getSortingComparator = (comparator = "none") => {
  if (typeof comparator === "function") {
    return comparator;
  }
  switch (comparator) {
    case "none":
      return null;
    case "desc":
      return (a2, b) => b - a2;
    case "asc":
      return (a2, b) => a2 - b;
    default:
      return null;
  }
};
var seriesProcessor4 = (params) => {
  const {
    seriesOrder,
    series
  } = params;
  const defaultizedSeries = {};
  seriesOrder.forEach((seriesId) => {
    const arcs = pie_default().startAngle(deg2rad(series[seriesId].startAngle ?? 0)).endAngle(deg2rad(series[seriesId].endAngle ?? 360)).padAngle(deg2rad(series[seriesId].paddingAngle ?? 0)).sortValues(getSortingComparator(series[seriesId].sortingValues ?? "none"))(series[seriesId].data.map((piePoint) => piePoint.value));
    defaultizedSeries[seriesId] = _extends({
      labelMarkType: "circle",
      valueFormatter: (item) => item.value.toLocaleString()
    }, series[seriesId], {
      data: series[seriesId].data.map((item, index2) => _extends({}, item, {
        id: item.id ?? `auto-generated-pie-id-${seriesId}-${index2}`
      }, arcs[index2])).map((item, index2) => {
        var _a, _b;
        return _extends({
          labelMarkType: "circle"
        }, item, {
          formattedValue: ((_b = (_a = series[seriesId]).valueFormatter) == null ? void 0 : _b.call(_a, _extends({}, item, {
            label: getLabel(item.label, "arc")
          }), {
            dataIndex: index2
          })) ?? item.value.toLocaleString()
        });
      })
    });
  });
  return {
    seriesOrder,
    series: defaultizedSeries
  };
};
var seriesProcessor_default4 = seriesProcessor4;

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/getColor.js
var getColor4 = (series) => {
  return (dataIndex) => {
    return series.data[dataIndex].color;
  };
};
var getColor_default4 = getColor4;

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/legend.js
var legendGetter4 = (params) => {
  const {
    seriesOrder,
    series
  } = params;
  return seriesOrder.reduce((acc, seriesId) => {
    series[seriesId].data.forEach((item, dataIndex) => {
      const formattedLabel = getLabel(item.label, "legend");
      if (formattedLabel === void 0) {
        return;
      }
      acc.push({
        markType: item.labelMarkType ?? series[seriesId].labelMarkType,
        id: item.id ?? dataIndex,
        seriesId,
        color: item.color,
        label: formattedLabel,
        itemId: item.id ?? dataIndex
      });
    });
    return acc;
  }, []);
};
var legend_default4 = legendGetter4;

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/tooltip.js
var tooltipGetter4 = (params) => {
  const {
    series,
    getColor: getColor5,
    identifier
  } = params;
  if (!identifier || identifier.dataIndex === void 0) {
    return null;
  }
  const point6 = series.data[identifier.dataIndex];
  if (point6 == null) {
    return null;
  }
  const label = getLabel(point6.label, "tooltip");
  const value = _extends({}, point6, {
    label
  });
  const formattedValue = series.valueFormatter(value, {
    dataIndex: identifier.dataIndex
  });
  return {
    identifier,
    color: getColor5(identifier.dataIndex),
    label,
    value,
    formattedValue,
    markType: point6.labelMarkType ?? series.labelMarkType
  };
};
var tooltip_default4 = tooltipGetter4;

// ../node_modules/@mui/x-charts/esm/internals/getPercentageValue.js
function getPercentageValue(value, refValue) {
  if (typeof value === "number") {
    return value;
  }
  if (value === "100%") {
    return refValue;
  }
  if (value.endsWith("%")) {
    const percentage = Number.parseFloat(value.slice(0, value.length - 1));
    if (!Number.isNaN(percentage)) {
      return percentage * refValue / 100;
    }
  }
  if (value.endsWith("px")) {
    const val = Number.parseFloat(value.slice(0, value.length - 2));
    if (!Number.isNaN(val)) {
      return val;
    }
  }
  throw new Error(`MUI X Charts: Received an unknown value "${value}". It should be a number, or a string with a percentage value.`);
}

// ../node_modules/@mui/x-charts/esm/PieChart/getPieCoordinates.js
function getPieCoordinates(series, drawing) {
  const {
    height,
    width
  } = drawing;
  const {
    cx: cxParam,
    cy: cyParam
  } = series;
  const availableRadius = Math.min(width, height) / 2;
  const cx = getPercentageValue(cxParam ?? "50%", width);
  const cy = getPercentageValue(cyParam ?? "50%", height);
  return {
    cx,
    cy,
    availableRadius
  };
}

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/seriesLayout.js
var seriesLayout = (series, drawingArea) => {
  const seriesLayoutRecord = {};
  for (const seriesId of series.seriesOrder) {
    const {
      innerRadius,
      outerRadius,
      arcLabelRadius,
      cx: cxParam,
      cy: cyParam
    } = series.series[seriesId];
    const {
      cx,
      cy,
      availableRadius
    } = getPieCoordinates({
      cx: cxParam,
      cy: cyParam
    }, {
      width: drawingArea.width,
      height: drawingArea.height
    });
    const outer = getPercentageValue(outerRadius ?? availableRadius, availableRadius);
    const inner = getPercentageValue(innerRadius ?? 0, availableRadius);
    const label = arcLabelRadius === void 0 ? (inner + outer) / 2 : getPercentageValue(arcLabelRadius, availableRadius);
    seriesLayoutRecord[seriesId] = {
      radius: {
        available: availableRadius,
        inner,
        outer,
        label
      },
      center: {
        x: drawingArea.left + cx,
        y: drawingArea.top + cy
      }
    };
  }
  return seriesLayoutRecord;
};
var seriesLayout_default = seriesLayout;

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/getSeriesWithDefaultValues.js
var getSeriesWithDefaultValues4 = (seriesData, seriesIndex, colors) => {
  return _extends({}, seriesData, {
    id: seriesData.id ?? `auto-generated-id-${seriesIndex}`,
    data: seriesData.data.map((d, index2) => _extends({}, d, {
      color: d.color ?? colors[index2 % colors.length]
    }))
  });
};
var getSeriesWithDefaultValues_default3 = getSeriesWithDefaultValues4;

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/tooltipPosition.js
var tooltipItemPositionGetter4 = (params) => {
  var _a, _b;
  const {
    series,
    identifier,
    placement,
    seriesLayout: seriesLayout2
  } = params;
  if (!identifier || identifier.dataIndex === void 0) {
    return null;
  }
  const itemSeries = (_a = series.pie) == null ? void 0 : _a.series[identifier.seriesId];
  const layout = (_b = seriesLayout2.pie) == null ? void 0 : _b[identifier.seriesId];
  if (itemSeries == null || layout == null) {
    return null;
  }
  const {
    center,
    radius
  } = layout;
  const {
    data
  } = itemSeries;
  const dataItem = data[identifier.dataIndex];
  if (!dataItem) {
    return null;
  }
  const points = [[radius.inner, dataItem.startAngle], [radius.inner, dataItem.endAngle], [radius.outer, dataItem.startAngle], [radius.outer, dataItem.endAngle]].map(([r, angle]) => ({
    x: center.x + r * Math.sin(angle),
    y: center.y - r * Math.cos(angle)
  }));
  const [x0, x1] = findMinMax(points.map((p) => p.x));
  const [y0, y1] = findMinMax(points.map((p) => p.y));
  switch (placement) {
    case "bottom":
      return {
        x: (x1 + x0) / 2,
        y: y1
      };
    case "left":
      return {
        x: x0,
        y: (y1 + y0) / 2
      };
    case "right":
      return {
        x: x1,
        y: (y1 + y0) / 2
      };
    case "top":
    default:
      return {
        x: (x1 + x0) / 2,
        y: y0
      };
  }
};
var tooltipPosition_default4 = tooltipItemPositionGetter4;

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/keyboardFocusHandler.js
var outSeriesTypes4 = /* @__PURE__ */ new Set(["pie"]);
var keyboardFocusHandler4 = (event) => {
  switch (event.key) {
    case "ArrowRight":
      return createGetNextIndexFocusedItem(outSeriesTypes4);
    case "ArrowLeft":
      return createGetPreviousIndexFocusedItem(outSeriesTypes4);
    case "ArrowDown":
      return createGetPreviousSeriesFocusedItem(outSeriesTypes4);
    case "ArrowUp":
      return createGetNextSeriesFocusedItem(outSeriesTypes4);
    default:
      return null;
  }
};
var keyboardFocusHandler_default4 = keyboardFocusHandler4;

// ../node_modules/@mui/x-charts/esm/PieChart/seriesConfig/index.js
var pieSeriesConfig = {
  colorProcessor: getColor_default4,
  seriesProcessor: seriesProcessor_default4,
  seriesLayout: seriesLayout_default,
  legendGetter: legend_default4,
  tooltipGetter: tooltip_default4,
  tooltipItemPositionGetter: tooltipPosition_default4,
  getSeriesWithDefaultValues: getSeriesWithDefaultValues_default3,
  keyboardFocusHandler: keyboardFocusHandler_default4
};

// ../node_modules/@mui/x-charts/esm/context/ChartProvider/ChartProvider.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var defaultSeriesConfig = {
  bar: barSeriesConfig,
  scatter: scatterSeriesConfig,
  line: lineSeriesConfig,
  pie: pieSeriesConfig
};
var defaultPlugins = [useChartZAxis, useChartTooltip, useChartInteraction, useChartCartesianAxis, useChartHighlight];
function ChartProvider(props) {
  const {
    children: children2,
    plugins = defaultPlugins,
    pluginParams = {},
    seriesConfig = defaultSeriesConfig
  } = props;
  const {
    contextValue
  } = useCharts(plugins, pluginParams, seriesConfig);
  return (0, import_jsx_runtime.jsx)(ChartContext.Provider, {
    value: contextValue,
    children: children2
  });
}

// ../node_modules/@mui/x-charts/esm/hooks/useInteractionItemProps.js
var React21 = __toESM(require_react(), 1);
function onPointerDown(event) {
  if ("hasPointerCapture" in event.currentTarget && event.currentTarget.hasPointerCapture(event.pointerId)) {
    event.currentTarget.releasePointerCapture(event.pointerId);
  }
}
var useInteractionItemProps = (data, skip) => {
  const {
    instance
  } = useChartContext();
  const interactionActive = React21.useRef(false);
  const onPointerEnter = useEventCallback_default(() => {
    interactionActive.current = true;
    instance.setLastUpdateSource("pointer");
    instance.setTooltipItem(data);
    instance.setHighlight(
      // @ts-ignore
      data.type === "sankey" ? data : {
        seriesId: data.seriesId,
        dataIndex: data.dataIndex
      }
    );
  });
  const onPointerLeave = useEventCallback_default(() => {
    interactionActive.current = false;
    instance.removeTooltipItem(data);
    instance.clearHighlight();
  });
  React21.useEffect(() => {
    return () => {
      if (interactionActive.current) {
        onPointerLeave();
      }
    };
  }, [onPointerLeave]);
  return React21.useMemo(() => skip ? {} : {
    onPointerEnter,
    onPointerLeave,
    onPointerDown
  }, [skip, onPointerEnter, onPointerLeave]);
};

// ../node_modules/@mui/x-charts/esm/internals/store/useStore.js
function useStore2() {
  const context = useChartContext();
  if (!context) {
    throw new Error(["MUI X Charts: Could not find the charts context.", "It looks like you rendered your component outside of a ChartContainer parent component."].join("\n"));
  }
  return context.store;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartHighlight/createIsHighlighted.js
function alwaysFalse() {
  return false;
}
function createIsHighlighted(highlightScope, highlightedItem) {
  if (!highlightScope || !highlightedItem) {
    return alwaysFalse;
  }
  return function isHighlighted(item) {
    if (!item) {
      return false;
    }
    if (highlightScope.highlight === "series") {
      return item.seriesId === highlightedItem.seriesId;
    }
    if (highlightScope.highlight === "item") {
      return item.dataIndex === highlightedItem.dataIndex && item.seriesId === highlightedItem.seriesId;
    }
    return false;
  };
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartHighlight/createIsFaded.js
function alwaysFalse2() {
  return false;
}
function createIsFaded(highlightScope, highlightedItem) {
  if (!highlightScope || !highlightedItem) {
    return alwaysFalse2;
  }
  return function isFaded(item) {
    if (!item) {
      return false;
    }
    if (highlightScope.fade === "series") {
      return item.seriesId === highlightedItem.seriesId && item.dataIndex !== highlightedItem.dataIndex;
    }
    if (highlightScope.fade === "global") {
      return item.seriesId !== highlightedItem.seriesId || item.dataIndex !== highlightedItem.dataIndex;
    }
    return false;
  };
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartHighlight/highlightStates.js
function isSeriesHighlighted(scope, item, seriesId) {
  return (scope == null ? void 0 : scope.highlight) === "series" && (item == null ? void 0 : item.seriesId) === seriesId;
}
function isSeriesFaded(scope, item, seriesId) {
  if (isSeriesHighlighted(scope, item, seriesId)) {
    return false;
  }
  return (scope == null ? void 0 : scope.fade) === "global" && item != null || (scope == null ? void 0 : scope.fade) === "series" && (item == null ? void 0 : item.seriesId) === seriesId;
}
function getSeriesHighlightedItem(scope, item, seriesId) {
  return (scope == null ? void 0 : scope.highlight) === "item" && (item == null ? void 0 : item.seriesId) === seriesId ? item.dataIndex : null;
}
function getSeriesUnfadedItem(scope, item, seriesId) {
  if (isSeriesHighlighted(scope, item, seriesId)) {
    return null;
  }
  if (getSeriesHighlightedItem(scope, item, seriesId) === (item == null ? void 0 : item.dataIndex)) {
    return null;
  }
  return ((scope == null ? void 0 : scope.fade) === "series" || (scope == null ? void 0 : scope.fade) === "global") && (item == null ? void 0 : item.seriesId) === seriesId ? item.dataIndex : null;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartHighlight/useChartHighlight.selectors.js
var selectHighlight = (state) => state.highlight;
var selectorChartsHighlightScopePerSeriesId = createSelector2(selectorChartSeriesProcessed, (processedSeries) => {
  const map4 = /* @__PURE__ */ new Map();
  Object.keys(processedSeries).forEach((seriesType) => {
    var _a;
    const seriesData = processedSeries[seriesType];
    (_a = seriesData == null ? void 0 : seriesData.seriesOrder) == null ? void 0 : _a.forEach((seriesId) => {
      const seriesItem = seriesData == null ? void 0 : seriesData.series[seriesId];
      map4.set(seriesId, seriesItem == null ? void 0 : seriesItem.highlightScope);
    });
  });
  return map4;
});
var selectorChartsHighlightedItem = createSelectorMemoized(selectHighlight, selectorChartsKeyboardItem, function selectorChartsHighlightedItem2(highlight, keyboardItem) {
  return highlight.isControlled || highlight.lastUpdate === "pointer" ? highlight.item : keyboardItem;
});
var selectorChartsHighlightScope = createSelector2(selectorChartsHighlightScopePerSeriesId, selectorChartsHighlightedItem, function selectorChartsHighlightScope2(seriesIdToHighlightScope, highlightedItem) {
  if (!highlightedItem) {
    return null;
  }
  const highlightScope = seriesIdToHighlightScope.get(highlightedItem.seriesId);
  if (highlightScope === void 0) {
    return null;
  }
  return highlightScope;
});
var selectorChartsIsHighlightedCallback = createSelectorMemoized(selectorChartsHighlightScope, selectorChartsHighlightedItem, createIsHighlighted);
var selectorChartsIsFadedCallback = createSelectorMemoized(selectorChartsHighlightScope, selectorChartsHighlightedItem, createIsFaded);
var selectorChartsIsHighlighted = createSelector2(selectorChartsHighlightScope, selectorChartsHighlightedItem, function selectorChartsIsHighlighted2(highlightScope, highlightedItem, item) {
  return createIsHighlighted(highlightScope, highlightedItem)(item);
});
var selectorChartIsSeriesHighlighted = createSelector2(selectorChartsHighlightScope, selectorChartsHighlightedItem, isSeriesHighlighted);
var selectorChartIsSeriesFaded = createSelector2(selectorChartsHighlightScope, selectorChartsHighlightedItem, isSeriesFaded);
var selectorChartSeriesUnfadedItem = createSelector2(selectorChartsHighlightScope, selectorChartsHighlightedItem, getSeriesUnfadedItem);
var selectorChartSeriesHighlightedItem = createSelector2(selectorChartsHighlightScope, selectorChartsHighlightedItem, getSeriesHighlightedItem);
var selectorChartsIsFaded = createSelector2(selectorChartsHighlightScope, selectorChartsHighlightedItem, function selectorChartsIsFaded2(highlightScope, highlightedItem, item) {
  return createIsFaded(highlightScope, highlightedItem)(item);
});

// ../node_modules/@mui/x-charts/esm/hooks/useItemHighlighted.js
function useItemHighlighted(item) {
  const store = useStore2();
  const isHighlighted = store.use(selectorChartsIsHighlighted, item);
  const isFaded = store.use(selectorChartsIsFaded, item);
  return {
    isHighlighted,
    isFaded: !isHighlighted && isFaded
  };
}

// ../node_modules/@mui/x-charts/esm/internals/animation/animation.js
var import_bezier_easing = __toESM(require_src(), 1);
var ANIMATION_DURATION_MS = 300;
var ANIMATION_TIMING_FUNCTION = "cubic-bezier(0.66, 0, 0.34, 1)";
var ANIMATION_TIMING_FUNCTION_JS = (0, import_bezier_easing.default)(0.66, 0, 0.34, 1);

// ../node_modules/@mui/x-charts/esm/internals/animation/useAnimateInternal.js
var React22 = __toESM(require_react(), 1);

// ../node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time2) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time2;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time2) {
  var t = new Timer();
  t.restart(callback, delay, time2);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t03, t13 = taskHead, t22, time2 = Infinity;
  while (t13) {
    if (t13._call) {
      if (time2 > t13._time) time2 = t13._time;
      t03 = t13, t13 = t13._next;
    } else {
      t22 = t13._next, t13._next = null;
      t13 = t03 ? t03._next = t22 : taskHead = t22;
    }
  }
  taskTail = t03;
  sleep(time2);
}
function sleep(time2) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time2 - clockNow;
  if (delay > 24) {
    if (time2 < Infinity) timeout = setTimeout(wake, time2 - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// ../node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time2) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time2);
  return t;
}

// ../node_modules/@mui/x-charts/esm/internals/animation/Transition.js
var Transition = class {
  /**
   * Create a new ResumableTransition.
   * @param duration Duration in milliseconds
   * @param easingFn The easing function
   * @param onTick Callback function called on each animation frame with the eased time in range [0, 1].
   */
  constructor(duration, easingFn, onTick) {
    __publicField(this, "elapsed", 0);
    __publicField(this, "timer", null);
    this.duration = duration;
    this.easingFn = easingFn;
    this.onTickCallback = onTick;
    this.resume();
  }
  get running() {
    return this.timer !== null;
  }
  timerCallback(elapsed) {
    this.elapsed = Math.min(elapsed, this.duration);
    const t = this.duration === 0 ? 1 : this.elapsed / this.duration;
    const easedT = this.easingFn(t);
    this.onTickCallback(easedT);
    if (this.elapsed >= this.duration) {
      this.stop();
    }
  }
  /**
   * Resume the transition
   */
  resume() {
    if (this.running || this.elapsed >= this.duration) {
      return this;
    }
    const time2 = now() - this.elapsed;
    this.timer = timer((elapsed) => this.timerCallback(elapsed), 0, time2);
    return this;
  }
  /**
   * Stops the transition.
   */
  stop() {
    if (!this.running) {
      return this;
    }
    if (this.timer) {
      this.timer.stop();
      this.timer = null;
    }
    return this;
  }
  /**
   * Immediately finishes the transition and calls the tick callback with the final value.
   */
  finish() {
    this.stop();
    timeout_default(() => this.timerCallback(this.duration));
    return this;
  }
};

// ../node_modules/@mui/x-charts/esm/internals/shallowEqual.js
function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i += 1) {
    const currentKey = keysA[i];
    if (!Object.prototype.hasOwnProperty.call(objB, currentKey) || // @ts-ignore
    !Object.is(objA[currentKey], objB[currentKey])) {
      return false;
    }
  }
  return true;
}

// ../node_modules/@mui/x-charts/esm/internals/animation/useAnimateInternal.js
function useAnimateInternal(props, {
  createInterpolator,
  applyProps,
  skip,
  initialProps = props
}) {
  const lastInterpolatedPropsRef = React22.useRef(initialProps);
  const transitionRef = React22.useRef(null);
  const elementRef = React22.useRef(null);
  const lastPropsRef = React22.useRef(props);
  useEnhancedEffect_default(() => {
    lastPropsRef.current = props;
  }, [props]);
  useEnhancedEffect_default(() => {
    var _a;
    if (skip) {
      (_a = transitionRef.current) == null ? void 0 : _a.finish();
      transitionRef.current = null;
      elementRef.current = null;
      lastInterpolatedPropsRef.current = props;
    }
  }, [props, skip]);
  const animate = React22.useCallback((element) => {
    const lastInterpolatedProps = lastInterpolatedPropsRef.current;
    const interpolate = createInterpolator(lastInterpolatedProps, props);
    transitionRef.current = new Transition(ANIMATION_DURATION_MS, ANIMATION_TIMING_FUNCTION_JS, (t) => {
      const interpolatedProps = interpolate(t);
      lastInterpolatedPropsRef.current = interpolatedProps;
      applyProps(element, interpolatedProps);
    });
  }, [applyProps, createInterpolator, props]);
  const setRef2 = React22.useCallback((element) => {
    var _a, _b, _c, _d;
    if (element === null) {
      (_a = transitionRef.current) == null ? void 0 : _a.stop();
      return;
    }
    const lastElement = elementRef.current;
    if (lastElement === element) {
      if (shallowEqual(lastPropsRef.current, props)) {
        (_b = transitionRef.current) == null ? void 0 : _b.resume();
        return;
      }
      (_c = transitionRef.current) == null ? void 0 : _c.stop();
    }
    if (lastElement) {
      (_d = transitionRef.current) == null ? void 0 : _d.stop();
    }
    elementRef.current = element;
    if (transitionRef.current || !skip) {
      animate(element);
    }
  }, [animate, props, skip]);
  return [setRef2, lastInterpolatedPropsRef.current];
}

// ../node_modules/@mui/x-charts/esm/hooks/animation/useAnimate.js
function useAnimate(props, {
  createInterpolator,
  transformProps,
  applyProps,
  skip,
  initialProps = props,
  ref
}) {
  const transform = transformProps ?? ((p) => p);
  const [animateRef, lastInterpolatedProps] = useAnimateInternal(props, {
    initialProps,
    createInterpolator,
    applyProps: (element, animatedProps) => applyProps(element, transform(animatedProps)),
    skip
  });
  const usedProps = skip ? transformProps(props) : transformProps(lastInterpolatedProps);
  return _extends({}, usedProps, {
    ref: useForkRef(animateRef, ref)
  });
}

// ../node_modules/@mui/x-charts/esm/hooks/animation/useAnimateArea.js
function useAnimateArea(props) {
  return useAnimate({
    d: props.d
  }, {
    createInterpolator: (lastProps, newProps) => {
      const interpolate = string_default(lastProps.d, newProps.d);
      return (t) => ({
        d: interpolate(t)
      });
    },
    applyProps: (element, {
      d
    }) => element.setAttribute("d", d),
    transformProps: (p) => p,
    skip: props.skipAnimation,
    ref: props.ref
  });
}

// ../node_modules/@mui/x-charts/esm/hooks/useDrawingArea.js
function useDrawingArea() {
  const store = useStore2();
  return store.use(selectorChartDrawingArea);
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarAxis.js
var React23 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/defaultizeAxis.js
function defaultizeAxis(inAxis, dataset, axisName) {
  const DEFAULT_AXIS_KEY = axisName === "rotation" ? DEFAULT_ROTATION_AXIS_KEY : DEFAULT_RADIUS_AXIS_KEY;
  const inputAxes = inAxis && inAxis.length > 0 ? inAxis : [{
    id: DEFAULT_AXIS_KEY
  }];
  return inputAxes.map((axisConfig, index2) => {
    const id = `defaultized-${axisName}-axis-${index2}`;
    const dataKey = axisConfig.dataKey;
    if (dataKey === void 0 || axisConfig.data !== void 0) {
      return _extends({
        id
      }, axisConfig);
    }
    if (dataset === void 0) {
      throw new Error(`MUI X Charts: ${axisName}-axis uses \`dataKey\` but no \`dataset\` is provided.`);
    }
    return _extends({
      id,
      data: dataset.map((d) => d[dataKey])
    }, axisConfig);
  });
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/coordinateTransformation.js
var generateSvg2rotation = (center) => (x2, y2) => Math.atan2(x2 - center.cx, center.cy - y2);
var generateSvg2polar = (center) => (x2, y2) => {
  const angle = Math.atan2(x2 - center.cx, center.cy - y2);
  return [Math.sqrt((x2 - center.cx) ** 2 + (center.cy - y2) ** 2), angle];
};
var generatePolar2svg = (center) => (radius, rotation) => {
  return [center.cx + radius * Math.sin(rotation), center.cy - radius * Math.cos(rotation)];
};

// ../node_modules/@mui/x-charts/esm/internals/clampAngle.js
function clampAngle(angle) {
  return (angle % 360 + 360) % 360;
}
var TWO_PI = 2 * Math.PI;
function clampAngleRad(angle) {
  return (angle % TWO_PI + TWO_PI) % TWO_PI;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/getAxisIndex.js
function getAxisIndex2(axisConfig, pointerValue) {
  const {
    scale,
    data: axisData,
    reverse: reverse2
  } = axisConfig;
  if (!isOrdinalScale(scale)) {
    throw new Error("MUI X Charts: getAxisValue is not implemented for polare continuous axes.");
  }
  if (!axisData) {
    return -1;
  }
  const angleGap = clampAngleRad(pointerValue - Math.min(...scale.range()));
  const dataIndex = scale.bandwidth() === 0 ? Math.floor((angleGap + scale.step() / 2) / scale.step()) % axisData.length : Math.floor(angleGap / scale.step());
  if (dataIndex < 0 || dataIndex >= axisData.length) {
    return -1;
  }
  return reverse2 ? axisData.length - 1 - dataIndex : dataIndex;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarAxis.js
var useChartPolarAxis = ({
  params,
  store,
  seriesConfig,
  svgRef,
  instance
}) => {
  const {
    rotationAxis,
    radiusAxis,
    dataset
  } = params;
  if (true) {
    const ids = [...rotationAxis ?? [], ...radiusAxis ?? []].filter((axis) => axis.id).map((axis) => axis.id);
    const duplicates = new Set(ids.filter((id, index2) => ids.indexOf(id) !== index2));
    if (duplicates.size > 0) {
      warnOnce([`MUI X Charts: The following axis ids are duplicated: ${Array.from(duplicates).join(", ")}.`, `Please make sure that each axis has a unique id.`].join("\n"), "error");
    }
  }
  const drawingArea = store.use(selectorChartDrawingArea);
  const processedSeries = store.use(selectorChartSeriesProcessed);
  const center = store.use(selectorChartPolarCenter);
  const isInteractionEnabled = store.use(selectorChartsInteractionIsInitialized);
  const {
    axis: rotationAxisWithScale,
    axisIds: rotationAxisIds
  } = store.use(selectorChartRotationAxis);
  const {
    axis: radiusAxisWithScale,
    axisIds: radiusAxisIds
  } = store.use(selectorChartRadiusAxis);
  const isFirstRender = React23.useRef(true);
  React23.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    store.set("polarAxis", _extends({}, store.state.polarAxis, {
      rotation: defaultizeAxis(rotationAxis, dataset, "rotation"),
      radius: defaultizeAxis(radiusAxis, dataset, "radius")
    }));
  }, [seriesConfig, drawingArea, rotationAxis, radiusAxis, dataset, store]);
  const svg2rotation = React23.useMemo(() => generateSvg2rotation({
    cx: center.cx,
    cy: center.cy
  }), [center.cx, center.cy]);
  const svg2polar = React23.useMemo(() => generateSvg2polar({
    cx: center.cx,
    cy: center.cy
  }), [center.cx, center.cy]);
  const polar2svg = React23.useMemo(() => generatePolar2svg({
    cx: center.cx,
    cy: center.cy
  }), [center.cx, center.cy]);
  const usedRotationAxisId = rotationAxisIds[0];
  const usedRadiusAxisId = radiusAxisIds[0];
  const mousePosition = React23.useRef({
    isInChart: false
  });
  const hasInteractionPlugin = checkHasInteractionPlugin(instance);
  React23.useEffect(() => {
    const element = svgRef.current;
    if (!isInteractionEnabled || !hasInteractionPlugin || element === null || params.disableAxisListener) {
      return () => {
      };
    }
    const moveEndHandler = instance.addInteractionListener("moveEnd", (event) => {
      if (!event.detail.activeGestures.pan) {
        mousePosition.current.isInChart = false;
        instance.cleanInteraction();
      }
    });
    const panEndHandler = instance.addInteractionListener("panEnd", (event) => {
      var _a;
      if (!event.detail.activeGestures.move) {
        mousePosition.current.isInChart = false;
        (_a = instance.cleanInteraction) == null ? void 0 : _a.call(instance);
      }
    });
    const pressEndHandler = instance.addInteractionListener("quickPressEnd", (event) => {
      var _a;
      if (!event.detail.activeGestures.move && !event.detail.activeGestures.pan) {
        mousePosition.current.isInChart = false;
        (_a = instance.cleanInteraction) == null ? void 0 : _a.call(instance);
      }
    });
    const gestureHandler = (event) => {
      var _a, _b, _c, _d, _e;
      const srcEvent = event.detail.srcEvent;
      if (event.detail.srcEvent.pointerType === "touch") {
        const svgRect = element.getBoundingClientRect();
        if (srcEvent.clientX < svgRect.left || srcEvent.clientX > svgRect.right || srcEvent.clientY < svgRect.top || srcEvent.clientY > svgRect.bottom) {
          mousePosition.current.isInChart = false;
          (_a = instance.cleanInteraction) == null ? void 0 : _a.call(instance);
          return;
        }
        const svgPoint2 = getSVGPoint(element, srcEvent);
        mousePosition.current.isInChart = true;
        (_b = instance.setPointerCoordinate) == null ? void 0 : _b.call(instance, svgPoint2);
        return;
      }
      const svgPoint = getSVGPoint(element, srcEvent);
      if (!instance.isPointInside(svgPoint.x, svgPoint.y, event.detail.target)) {
        if (mousePosition.current.isInChart) {
          (_c = instance.cleanInteraction) == null ? void 0 : _c.call(instance);
          mousePosition.current.isInChart = false;
        }
        return;
      }
      const radiusSquare = (center.cx - svgPoint.x) ** 2 + (center.cy - svgPoint.y) ** 2;
      const maxRadius = radiusAxisWithScale[usedRadiusAxisId].scale.range()[1];
      if (radiusSquare > maxRadius ** 2) {
        if (mousePosition.current.isInChart) {
          (_d = instance.cleanInteraction) == null ? void 0 : _d.call(instance);
          mousePosition.current.isInChart = false;
        }
        return;
      }
      mousePosition.current.isInChart = true;
      (_e = instance.setPointerCoordinate) == null ? void 0 : _e.call(instance, svgPoint);
    };
    const moveHandler = instance.addInteractionListener("move", gestureHandler);
    const panHandler = instance.addInteractionListener("pan", gestureHandler);
    const pressHandler = instance.addInteractionListener("quickPress", gestureHandler);
    return () => {
      moveHandler.cleanup();
      moveEndHandler.cleanup();
      panHandler.cleanup();
      panEndHandler.cleanup();
      pressHandler.cleanup();
      pressEndHandler.cleanup();
    };
  }, [svgRef, store, center, radiusAxisWithScale, usedRadiusAxisId, rotationAxisWithScale, usedRotationAxisId, instance, params.disableAxisListener, isInteractionEnabled, svg2rotation, hasInteractionPlugin]);
  React23.useEffect(() => {
    const element = svgRef.current;
    const onAxisClick = params.onAxisClick;
    if (element === null || !onAxisClick) {
      return () => {
      };
    }
    const axisClickHandler = instance.addInteractionListener("tap", (event) => {
      let dataIndex = null;
      let isRotationAxis = false;
      const svgPoint = getSVGPoint(element, event.detail.srcEvent);
      const rotation = generateSvg2rotation(center)(svgPoint.x, svgPoint.y);
      const rotationIndex = getAxisIndex2(rotationAxisWithScale[usedRotationAxisId], rotation);
      isRotationAxis = rotationIndex !== -1;
      dataIndex = isRotationAxis ? rotationIndex : null;
      const USED_AXIS_ID = isRotationAxis ? usedRotationAxisId : usedRadiusAxisId;
      if (dataIndex == null || dataIndex === -1) {
        return;
      }
      const axisValue = (isRotationAxis ? rotationAxisWithScale : radiusAxisWithScale)[USED_AXIS_ID].data[dataIndex];
      const seriesValues = {};
      Object.keys(processedSeries).filter((seriesType) => seriesType === "radar").forEach((seriesType) => {
        var _a;
        (_a = processedSeries[seriesType]) == null ? void 0 : _a.seriesOrder.forEach((seriesId) => {
          const seriesItem = processedSeries[seriesType].series[seriesId];
          seriesValues[seriesId] = seriesItem.data[dataIndex];
        });
      });
      onAxisClick(event.detail.srcEvent, {
        dataIndex,
        axisValue,
        seriesValues
      });
    });
    return () => {
      axisClickHandler.cleanup();
    };
  }, [center, instance, params.onAxisClick, processedSeries, radiusAxisWithScale, rotationAxisWithScale, svgRef, usedRadiusAxisId, usedRotationAxisId]);
  return {
    instance: {
      svg2polar,
      svg2rotation,
      polar2svg
    }
  };
};
useChartPolarAxis.params = {
  rotationAxis: true,
  radiusAxis: true,
  dataset: true,
  disableAxisListener: true,
  onAxisClick: true
};
useChartPolarAxis.getInitialState = (params) => ({
  polarAxis: {
    rotation: defaultizeAxis(params.rotationAxis, params.dataset, "rotation"),
    radius: defaultizeAxis(params.radiusAxis, params.dataset, "radius")
  }
});

// ../node_modules/@mui/x-charts/esm/hooks/useAxis.js
function useXAxes() {
  const store = useStore2();
  const {
    axis: xAxis,
    axisIds: xAxisIds
  } = store.use(selectorChartXAxis);
  return {
    xAxis,
    xAxisIds
  };
}
function useYAxes() {
  const store = useStore2();
  const {
    axis: yAxis,
    axisIds: yAxisIds
  } = store.use(selectorChartYAxis);
  return {
    yAxis,
    yAxisIds
  };
}
function useXAxis(axisId) {
  const store = useStore2();
  const {
    axis: xAxis,
    axisIds: xAxisIds
  } = store.use(selectorChartXAxis);
  const id = axisId ?? xAxisIds[0];
  return xAxis[id];
}
function useYAxis(axisId) {
  const store = useStore2();
  const {
    axis: yAxis,
    axisIds: yAxisIds
  } = store.use(selectorChartYAxis);
  const id = axisId ?? yAxisIds[0];
  return yAxis[id];
}
function useRotationAxes() {
  const store = useStore2();
  const {
    axis: rotationAxis,
    axisIds: rotationAxisIds
  } = store.use(selectorChartRotationAxis);
  return {
    rotationAxis,
    rotationAxisIds
  };
}
function useRotationAxis(axisId) {
  const store = useStore2();
  const {
    axis: rotationAxis,
    axisIds: rotationAxisIds
  } = store.use(selectorChartRotationAxis);
  const id = axisId ?? rotationAxisIds[0];
  return rotationAxis[id];
}

// ../node_modules/@mui/x-charts/esm/hooks/useScale.js
function getValueToPositionMapper(scale) {
  if (isOrdinalScale(scale)) {
    return (value) => (scale(value) ?? 0) + scale.bandwidth() / 2;
  }
  const domain = scale.domain();
  if (domain[0] === domain[1]) {
    return (value) => value === domain[0] ? scale(value) : NaN;
  }
  return (value) => scale(value);
}

// ../node_modules/@mui/x-charts/esm/internals/seriesSelectorOfType.js
var selectorAllSeriesOfType = createSelector2(selectorChartSeriesProcessed, (processedSeries, seriesType) => processedSeries[seriesType]);
var selectorSeriesOfType = createSelectorMemoized(selectorChartSeriesProcessed, (processedSeries, seriesType, ids) => {
  var _a, _b, _c, _d, _e, _f;
  if (ids === void 0 || Array.isArray(ids) && ids.length === 0) {
    return ((_b = (_a = processedSeries[seriesType]) == null ? void 0 : _a.seriesOrder) == null ? void 0 : _b.map((seriesId) => {
      var _a2;
      return (_a2 = processedSeries[seriesType]) == null ? void 0 : _a2.series[seriesId];
    })) ?? [];
  }
  if (!Array.isArray(ids)) {
    return (_d = (_c = processedSeries[seriesType]) == null ? void 0 : _c.series) == null ? void 0 : _d[ids];
  }
  const result = [];
  const failedIds = [];
  for (const id of ids) {
    const series = (_f = (_e = processedSeries[seriesType]) == null ? void 0 : _e.series) == null ? void 0 : _f[id];
    if (series) {
      result.push(series);
    } else {
      failedIds.push(id);
    }
  }
  if (failedIds.length > 0) {
    const formattedIds = failedIds.map((v) => JSON.stringify(v)).join(", ");
    const fnName = `use${seriesType.charAt(0).toUpperCase()}${seriesType.slice(1)}Series`;
    warnOnce([`MUI X Charts: The following ids provided to "${fnName}" could not be found: ${formattedIds}.`, `Make sure that they exist and their series are using the "${seriesType}" series type.`]);
  }
  return result;
});
var useAllSeriesOfType = (seriesType) => {
  const store = useStore2();
  return store.use(selectorAllSeriesOfType, seriesType);
};

// ../node_modules/@mui/x-charts/esm/hooks/useBarSeries.js
function useBarSeriesContext() {
  return useAllSeriesOfType("bar");
}

// ../node_modules/@mui/x-charts/esm/hooks/useLineSeries.js
function useLineSeriesContext() {
  return useAllSeriesOfType("line");
}

// ../node_modules/@mui/x-charts/esm/hooks/useItemHighlightedGetter.js
function useItemHighlightedGetter() {
  const store = useStore2();
  const isHighlighted = store.use(selectorChartsIsHighlightedCallback);
  const isFaded = store.use(selectorChartsIsFadedCallback);
  return {
    isHighlighted,
    isFaded
  };
}

// ../node_modules/@mui/x-charts/esm/hooks/animation/useAnimateBarLabel.js
function barLabelPropsInterpolator(from, to) {
  const interpolateX = number_default(from.x, to.x);
  const interpolateY = number_default(from.y, to.y);
  const interpolateWidth = number_default(from.width, to.width);
  const interpolateHeight = number_default(from.height, to.height);
  return (t) => ({
    x: interpolateX(t),
    y: interpolateY(t),
    width: interpolateWidth(t),
    height: interpolateHeight(t)
  });
}
function useAnimateBarLabel(props) {
  const {
    initialX,
    currentX,
    initialY,
    currentY
  } = props.placement === "outside" ? getOutsidePlacement(props) : getCenterPlacement(props);
  const initialProps = {
    x: initialX,
    y: initialY,
    width: props.width,
    height: props.height
  };
  const currentProps = {
    x: currentX,
    y: currentY,
    width: props.width,
    height: props.height
  };
  return useAnimate(currentProps, {
    createInterpolator: barLabelPropsInterpolator,
    transformProps: (p) => p,
    applyProps(element, animatedProps) {
      element.setAttribute("x", animatedProps.x.toString());
      element.setAttribute("y", animatedProps.y.toString());
      element.setAttribute("width", animatedProps.width.toString());
      element.setAttribute("height", animatedProps.height.toString());
    },
    initialProps,
    skip: props.skipAnimation,
    ref: props.ref
  });
}
var LABEL_OFFSET = 4;
function getCenterPlacement(props) {
  return {
    initialX: props.layout === "vertical" ? props.x + props.width / 2 : props.xOrigin,
    initialY: props.layout === "vertical" ? props.yOrigin : props.y + props.height / 2,
    currentX: props.x + props.width / 2,
    currentY: props.y + props.height / 2
  };
}
function getOutsidePlacement(props) {
  let initialY = 0;
  let currentY = 0;
  let initialX = 0;
  let currentX = 0;
  if (props.layout === "vertical") {
    const shouldPlaceAbove = props.y < props.yOrigin;
    if (shouldPlaceAbove) {
      initialY = props.yOrigin - LABEL_OFFSET;
      currentY = props.y - LABEL_OFFSET;
    } else {
      initialY = props.yOrigin + LABEL_OFFSET;
      currentY = props.y + props.height + LABEL_OFFSET;
    }
    return {
      initialX: props.x + props.width / 2,
      currentX: props.x + props.width / 2,
      initialY,
      currentY
    };
  }
  const shouldPlaceToTheLeft = props.x < props.xOrigin;
  if (shouldPlaceToTheLeft) {
    initialX = props.xOrigin;
    currentX = props.x - LABEL_OFFSET;
  } else {
    initialX = props.xOrigin;
    currentX = props.x + props.width + LABEL_OFFSET;
  }
  return {
    initialX,
    currentX,
    initialY: props.y + props.height / 2,
    currentY: props.y + props.height / 2
  };
}

// ../node_modules/@mui/x-charts/esm/hooks/animation/useAnimateLine.js
function useAnimateLine(props) {
  return useAnimate({
    d: props.d
  }, {
    createInterpolator: (lastProps, newProps) => {
      const interpolate = string_default(lastProps.d, newProps.d);
      return (t) => ({
        d: interpolate(t)
      });
    },
    applyProps: (element, {
      d
    }) => element.setAttribute("d", d),
    skip: props.skipAnimation,
    transformProps: (p) => p,
    ref: props.ref
  });
}

// ../node_modules/@mui/x-charts/esm/hooks/useChartId.js
function useChartId2() {
  const store = useStore2();
  return store.use(selectorChartId);
}

// ../node_modules/@mui/x-charts/esm/hooks/useZAxis.js
function useZAxes() {
  const store = useStore2();
  const {
    axis: zAxis,
    axisIds: zAxisIds
  } = store.use(selectorChartZAxis) ?? {
    axis: {},
    axisIds: []
  };
  return {
    zAxis,
    zAxisIds
  };
}

// ../node_modules/@mui/x-charts/esm/hooks/useSvgRef.js
function useSvgRef() {
  const context = useChartContext();
  if (!context) {
    throw new Error(["MUI X Charts: Could not find the svg ref context.", "It looks like you rendered your component outside of a ChartContainer parent component."].join("\n"));
  }
  return context.svgRef;
}

// ../node_modules/@mui/x-charts/esm/hooks/useSeries.js
function useSeries() {
  const store = useStore2();
  return store.use(selectorChartSeriesProcessed);
}

// ../node_modules/@mui/x-charts/esm/hooks/useLegend.js
function getSeriesToDisplay(series, seriesConfig) {
  return Object.keys(series).flatMap((seriesType) => {
    const getter = seriesConfig[seriesType].legendGetter;
    return getter === void 0 ? [] : getter(series[seriesType]);
  });
}
function useLegend() {
  const series = useSeries();
  const store = useStore2();
  const seriesConfig = store.use(selectorChartSeriesConfig);
  return {
    items: getSeriesToDisplay(series, seriesConfig)
  };
}

// ../node_modules/@mui/x-charts/esm/hooks/useChartGradientId.js
var React24 = __toESM(require_react(), 1);
function useChartGradientIdBuilder() {
  const chartId = useChartId2();
  return React24.useCallback((axisId) => `${chartId}-gradient-${axisId}`, [chartId]);
}
function useChartGradientIdObjectBoundBuilder() {
  const chartId = useChartId2();
  return React24.useCallback((axisId) => `${chartId}-gradient-${axisId}-object-bound`, [chartId]);
}

// ../node_modules/@mui/x-charts/esm/hooks/animation/useAnimateBar.js
function barPropsInterpolator(from, to) {
  const interpolateX = number_default(from.x, to.x);
  const interpolateY = number_default(from.y, to.y);
  const interpolateWidth = number_default(from.width, to.width);
  const interpolateHeight = number_default(from.height, to.height);
  return (t) => {
    return {
      x: interpolateX(t),
      y: interpolateY(t),
      width: interpolateWidth(t),
      height: interpolateHeight(t)
    };
  };
}
function useAnimateBar(props) {
  const initialProps = {
    x: props.layout === "vertical" ? props.x : props.xOrigin,
    y: props.layout === "vertical" ? props.yOrigin : props.y,
    width: props.layout === "vertical" ? props.width : 0,
    height: props.layout === "vertical" ? 0 : props.height
  };
  return useAnimate({
    x: props.x,
    y: props.y,
    width: props.width,
    height: props.height
  }, {
    createInterpolator: barPropsInterpolator,
    applyProps(element, animatedProps) {
      element.setAttribute("x", animatedProps.x.toString());
      element.setAttribute("y", animatedProps.y.toString());
      element.setAttribute("width", animatedProps.width.toString());
      element.setAttribute("height", animatedProps.height.toString());
    },
    transformProps: (p) => p,
    initialProps,
    skip: props.skipAnimation,
    ref: props.ref
  });
}

// ../node_modules/@mui/x-charts/esm/hooks/useChartRootRef.js
function useChartRootRef() {
  const context = useChartContext();
  return context.chartRootRef;
}

// ../node_modules/@mui/x-charts/esm/hooks/useChartsLocalization.js
var React26 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsLocalizationProvider/ChartsLocalizationProvider.js
var React25 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/locales/utils/imageMimeTypes.js
var imageMimeTypes = {
  "image/png": "PNG",
  "image/jpeg": "JPEG",
  "image/webp": "WebP"
};

// ../node_modules/@mui/x-charts/esm/locales/utils/getChartsLocalization.js
var getChartsLocalization = (chartsTranslations) => {
  return {
    components: {
      MuiChartsLocalizationProvider: {
        defaultProps: {
          localeText: _extends({}, chartsTranslations)
        }
      }
    }
  };
};

// ../node_modules/@mui/x-charts/esm/locales/enUS.js
var enUSLocaleText = {
  // Overlay
  loading: "Loading data…",
  noData: "No data to display",
  // Toolbar
  zoomIn: "Zoom in",
  zoomOut: "Zoom out",
  toolbarExport: "Export",
  // Toolbar Export Menu
  toolbarExportPrint: "Print",
  toolbarExportImage: (mimeType) => `Export as ${imageMimeTypes[mimeType] ?? mimeType}`,
  // Charts renderer configuration
  chartTypeBar: "Bar",
  chartTypeColumn: "Column",
  chartTypeLine: "Line",
  chartTypeArea: "Area",
  chartTypePie: "Pie",
  chartPaletteLabel: "Color palette",
  chartPaletteNameRainbowSurge: "Rainbow Surge",
  chartPaletteNameBlueberryTwilight: "Blueberry Twilight",
  chartPaletteNameMangoFusion: "Mango Fusion",
  chartPaletteNameCheerfulFiesta: "Cheerful Fiesta",
  chartPaletteNameStrawberrySky: "Strawberry Sky",
  chartPaletteNameBlue: "Blue",
  chartPaletteNameGreen: "Green",
  chartPaletteNamePurple: "Purple",
  chartPaletteNameRed: "Red",
  chartPaletteNameOrange: "Orange",
  chartPaletteNameYellow: "Yellow",
  chartPaletteNameCyan: "Cyan",
  chartPaletteNamePink: "Pink",
  chartConfigurationSectionChart: "Chart",
  chartConfigurationSectionColumns: "Columns",
  chartConfigurationSectionBars: "Bars",
  chartConfigurationSectionAxes: "Axes",
  chartConfigurationGrid: "Grid",
  chartConfigurationBorderRadius: "Border radius",
  chartConfigurationCategoryGapRatio: "Category gap ratio",
  chartConfigurationBarGapRatio: "Series gap ratio",
  chartConfigurationStacked: "Stacked",
  chartConfigurationShowToolbar: "Show toolbar",
  chartConfigurationSkipAnimation: "Skip animation",
  chartConfigurationInnerRadius: "Inner radius",
  chartConfigurationOuterRadius: "Outer radius",
  chartConfigurationColors: "Colors",
  chartConfigurationHideLegend: "Hide legend",
  chartConfigurationShowMark: "Show mark",
  chartConfigurationHeight: "Height",
  chartConfigurationWidth: "Width",
  chartConfigurationSeriesGap: "Series gap",
  chartConfigurationTickPlacement: "Tick placement",
  chartConfigurationTickLabelPlacement: "Tick label placement",
  chartConfigurationCategoriesAxisLabel: "Categories axis label",
  chartConfigurationSeriesAxisLabel: "Series axis label",
  chartConfigurationXAxisPosition: "X-axis position",
  chartConfigurationYAxisPosition: "Y-axis position",
  chartConfigurationSeriesAxisReverse: "Reverse series axis",
  chartConfigurationTooltipPlacement: "Placement",
  chartConfigurationTooltipTrigger: "Trigger",
  chartConfigurationLegendPosition: "Position",
  chartConfigurationLegendDirection: "Direction",
  chartConfigurationBarLabels: "Bar labels",
  chartConfigurationColumnLabels: "Column labels",
  chartConfigurationInterpolation: "Interpolation",
  chartConfigurationSectionTooltip: "Tooltip",
  chartConfigurationSectionLegend: "Legend",
  chartConfigurationSectionLines: "Lines",
  chartConfigurationSectionAreas: "Areas",
  chartConfigurationSectionArcs: "Arcs",
  chartConfigurationPaddingAngle: "Padding angle",
  chartConfigurationCornerRadius: "Corner radius",
  chartConfigurationArcLabels: "Arc labels",
  chartConfigurationStartAngle: "Start angle",
  chartConfigurationEndAngle: "End angle",
  chartConfigurationPieTooltipTrigger: "Trigger",
  chartConfigurationPieLegendPosition: "Position",
  chartConfigurationPieLegendDirection: "Direction",
  // Common option labels
  chartConfigurationOptionNone: "None",
  chartConfigurationOptionValue: "Value",
  chartConfigurationOptionAuto: "Auto",
  chartConfigurationOptionTop: "Top",
  chartConfigurationOptionTopLeft: "Top Left",
  chartConfigurationOptionTopRight: "Top Right",
  chartConfigurationOptionBottom: "Bottom",
  chartConfigurationOptionBottomLeft: "Bottom Left",
  chartConfigurationOptionBottomRight: "Bottom Right",
  chartConfigurationOptionLeft: "Left",
  chartConfigurationOptionRight: "Right",
  chartConfigurationOptionAxis: "Axis",
  chartConfigurationOptionItem: "Item",
  chartConfigurationOptionHorizontal: "Horizontal",
  chartConfigurationOptionVertical: "Vertical",
  chartConfigurationOptionBoth: "Both",
  chartConfigurationOptionStart: "Start",
  chartConfigurationOptionMiddle: "Middle",
  chartConfigurationOptionEnd: "End",
  chartConfigurationOptionExtremities: "Extremities",
  chartConfigurationOptionTick: "Tick",
  chartConfigurationOptionMonotoneX: "Monotone X",
  chartConfigurationOptionMonotoneY: "Monotone Y",
  chartConfigurationOptionCatmullRom: "Catmull-Rom",
  chartConfigurationOptionLinear: "Linear",
  chartConfigurationOptionNatural: "Natural",
  chartConfigurationOptionStep: "Step",
  chartConfigurationOptionStepBefore: "Step Before",
  chartConfigurationOptionStepAfter: "Step After",
  chartConfigurationOptionBumpX: "Bump X",
  chartConfigurationOptionBumpY: "Bump Y"
};
var DEFAULT_LOCALE = enUSLocaleText;
var enUS = getChartsLocalization(enUSLocaleText);

// ../node_modules/@mui/x-charts/esm/ChartsLocalizationProvider/ChartsLocalizationProvider.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var _excluded2 = ["localeText"];
var ChartsLocalizationContext = React25.createContext(null);
if (true) ChartsLocalizationContext.displayName = "ChartsLocalizationContext";
function ChartsLocalizationProvider(inProps) {
  const {
    localeText: inLocaleText
  } = inProps, other = _objectWithoutPropertiesLoose(inProps, _excluded2);
  const {
    localeText: parentLocaleText
  } = React25.useContext(ChartsLocalizationContext) ?? {
    localeText: void 0
  };
  const props = useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: other,
    name: "MuiChartsLocalizationProvider"
  });
  const {
    children: children2,
    localeText: themeLocaleText
  } = props;
  const localeText = React25.useMemo(() => _extends({}, DEFAULT_LOCALE, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const contextValue = React25.useMemo(() => {
    return {
      localeText
    };
  }, [localeText]);
  return (0, import_jsx_runtime2.jsx)(ChartsLocalizationContext.Provider, {
    value: contextValue,
    children: children2
  });
}
true ? ChartsLocalizationProvider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types.default.node,
  /**
   * Localized text for chart components.
   */
  localeText: import_prop_types.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/hooks/useChartsLocalization.js
var useChartsLocalization = () => {
  const localization = React26.useContext(ChartsLocalizationContext);
  if (localization === null) {
    throw new Error(["MUI X Charts: Can not find the charts localization context.", "It looks like you forgot to wrap your component in ChartsLocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-charts` package"].join("\n"));
  }
  return localization;
};

// ../node_modules/@mui/x-charts/esm/hooks/useSkipAnimation.js
function useSkipAnimation(skipAnimation) {
  const store = useStore2();
  const storeSkipAnimation = store.use(selectorChartSkipAnimation);
  return skipAnimation || storeSkipAnimation;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useInternalIsZoomInteracting.js
function useInternalIsZoomInteracting() {
  const store = useStore2();
  const isInteracting = store.use(selectorChartZoomIsInteracting);
  return isInteracting;
}

// ../node_modules/@mui/x-charts/esm/ChartsAxis/ChartsAxis.js
var React38 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/ChartsXAxis.js
var import_prop_types3 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/ChartsXAxisImpl.js
var React34 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/ChartsSingleXAxisTicks.js
var React31 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/hooks/useIsHydrated.js
var React27 = __toESM(require_react(), 1);
function useIsHydrated() {
  const [isHydrated, setIsHydrated] = React27.useState(false);
  React27.useEffect(() => {
    setIsHydrated(true);
  }, []);
  return isHydrated;
}

// ../node_modules/@mui/x-charts/esm/hooks/useTicks.js
var React28 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/isInfinity.js
function isInfinity(v) {
  return typeof v === "number" && !Number.isFinite(v);
}

// ../node_modules/@mui/x-charts/esm/utils/timeTicks.js
function yearNumber(from, to) {
  return Math.abs(to.getFullYear() - from.getFullYear());
}
function monthNumber(from, to) {
  return Math.abs(to.getFullYear() * 12 + to.getMonth() - 12 * from.getFullYear() - from.getMonth());
}
function dayNumber(from, to) {
  return Math.abs(to.getTime() - from.getTime()) / (1e3 * 60 * 60 * 24);
}
function hourNumber(from, to) {
  return Math.abs(to.getTime() - from.getTime()) / (1e3 * 60 * 60);
}
var tickFrequencies = {
  years: {
    getTickNumber: yearNumber,
    isTick: (prev, value) => value.getFullYear() !== prev.getFullYear(),
    format: (d) => d.getFullYear().toString()
  },
  quarterly: {
    getTickNumber: (from, to) => Math.floor(monthNumber(from, to) / 3),
    isTick: (prev, value) => value.getMonth() !== prev.getMonth() && value.getMonth() % 3 === 0,
    format: new Intl.DateTimeFormat("default", {
      month: "short"
    }).format
  },
  months: {
    getTickNumber: monthNumber,
    isTick: (prev, value) => value.getMonth() !== prev.getMonth(),
    format: new Intl.DateTimeFormat("default", {
      month: "short"
    }).format
  },
  biweekly: {
    getTickNumber: (from, to) => dayNumber(from, to) / 14,
    isTick: (prev, value) => (value.getDay() < prev.getDay() || dayNumber(value, prev) > 7) && Math.floor(value.getDate() / 7) % 2 === 1,
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  weeks: {
    getTickNumber: (from, to) => dayNumber(from, to) / 7,
    isTick: (prev, value) => value.getDay() < prev.getDay() || dayNumber(value, prev) >= 7,
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  days: {
    getTickNumber: dayNumber,
    isTick: (prev, value) => value.getDate() !== prev.getDate(),
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  hours: {
    getTickNumber: hourNumber,
    isTick: (prev, value) => value.getHours() !== prev.getHours(),
    format: new Intl.DateTimeFormat("default", {
      hour: "2-digit",
      minute: "2-digit"
    }).format
  }
};

// ../node_modules/@mui/x-charts/esm/hooks/useTicks.js
var offsetRatio = {
  start: 0,
  extremities: 0,
  end: 1,
  middle: 0.5
};
function getTickPosition(scale, value, placement) {
  return scale(value) - (scale.step() - scale.bandwidth()) / 2 + offsetRatio[placement] * scale.step();
}
function applyTickSpacing(domain, range2, tickSpacing) {
  const rangeSpan = Math.abs(range2[1] - range2[0]);
  const every2 = Math.ceil(domain.length / (rangeSpan / tickSpacing));
  if (Number.isNaN(every2) || every2 <= 1) {
    return domain;
  }
  return domain.filter((_, index2) => index2 % every2 === 0);
}
function getTimeTicks(domain, tickNumber, ticksFrequencies, scale, isInside) {
  if (ticksFrequencies.length === 0) {
    return [];
  }
  const isReversed = scale.range()[0] > scale.range()[1];
  const startIndex = domain.findIndex((value) => {
    return isInside(getTickPosition(scale, value, isReversed ? "start" : "end"));
  });
  const endIndex = domain.findLastIndex((value) => isInside(getTickPosition(scale, value, isReversed ? "end" : "start")));
  const start2 = domain[0];
  const end2 = domain[domain.length - 1];
  if (!(start2 instanceof Date) || !(end2 instanceof Date)) {
    return [];
  }
  let startFrequencyIndex = 0;
  for (let i = 0; i < ticksFrequencies.length; i += 1) {
    if (ticksFrequencies[i].getTickNumber(start2, end2) !== 0) {
      startFrequencyIndex = i;
      break;
    }
  }
  let endFrequencyIndex = startFrequencyIndex;
  for (let i = startFrequencyIndex; i < ticksFrequencies.length; i += 1) {
    if (i === ticksFrequencies.length - 1) {
      endFrequencyIndex = i;
      break;
    }
    const prevTickCount = ticksFrequencies[i].getTickNumber(start2, end2);
    const nextTickCount = ticksFrequencies[i + 1].getTickNumber(start2, end2);
    if (nextTickCount > tickNumber || tickNumber / prevTickCount < nextTickCount / tickNumber) {
      endFrequencyIndex = i;
      break;
    }
  }
  const ticks2 = [];
  for (let tickIndex = Math.max(1, startIndex); tickIndex <= endIndex; tickIndex += 1) {
    for (let i = startFrequencyIndex; i <= endFrequencyIndex; i += 1) {
      const prevDate = domain[tickIndex - 1];
      const currentDate = domain[tickIndex];
      if (prevDate instanceof Date && currentDate instanceof Date && ticksFrequencies[i].isTick(prevDate, currentDate)) {
        ticks2.push({
          index: tickIndex,
          formatter: ticksFrequencies[i].format
        });
        break;
      }
    }
  }
  return ticks2;
}
function getTicks(options) {
  const {
    scale,
    tickNumber,
    valueFormatter,
    tickInterval,
    tickPlacement: tickPlacementProp,
    tickLabelPlacement: tickLabelPlacementProp,
    tickSpacing,
    isInside,
    ordinalTimeTicks
  } = options;
  if (ordinalTimeTicks !== void 0 && isDateData(scale.domain()) && isOrdinalScale(scale)) {
    const domain2 = scale.domain();
    if (domain2.length === 0 || domain2.length === 1) {
      return [];
    }
    const tickPlacement2 = "middle";
    const ticksIndexes = getTimeTicks(domain2, tickNumber, ordinalTimeTicks.map((tickDef) => typeof tickDef === "string" ? tickFrequencies[tickDef] : tickDef), scale, isInside);
    return ticksIndexes.map(({
      index: index2,
      formatter
    }) => {
      const value = domain2[index2];
      const formattedValue = formatter(value);
      return {
        value,
        formattedValue,
        offset: getTickPosition(scale, value, tickPlacement2),
        labelOffset: 0
      };
    });
  }
  const tickPlacement = tickPlacementProp ?? "extremities";
  if (isOrdinalScale(scale)) {
    const domain2 = scale.domain();
    const tickLabelPlacement2 = tickLabelPlacementProp ?? "middle";
    let filteredDomain = domain2;
    if (typeof tickInterval === "object" && tickInterval != null) {
      filteredDomain = tickInterval;
    } else {
      if (typeof tickInterval === "function") {
        filteredDomain = filteredDomain.filter(tickInterval);
      }
      if (tickSpacing !== void 0 && tickSpacing > 0) {
        filteredDomain = applyTickSpacing(filteredDomain, scale.range(), tickSpacing);
      }
    }
    if (filteredDomain.length === 0) {
      return [];
    }
    if (scale.bandwidth() > 0) {
      const isReversed = scale.range()[0] > scale.range()[1];
      const startIndex = filteredDomain.findIndex((value) => {
        return isInside(getTickPosition(scale, value, isReversed ? "start" : "end"));
      });
      const endIndex = filteredDomain.findLastIndex((value) => isInside(getTickPosition(scale, value, isReversed ? "end" : "start")));
      return [...filteredDomain.slice(startIndex, endIndex + 1).map((value) => {
        const defaultTickLabel = `${value}`;
        return {
          value,
          formattedValue: (valueFormatter == null ? void 0 : valueFormatter(value, {
            location: "tick",
            scale,
            tickNumber,
            defaultTickLabel
          })) ?? defaultTickLabel,
          offset: getTickPosition(scale, value, tickPlacement),
          labelOffset: tickLabelPlacement2 === "tick" ? 0 : scale.step() * (offsetRatio[tickLabelPlacement2] - offsetRatio[tickPlacement])
        };
      }), ...tickPlacement === "extremities" && endIndex === domain2.length - 1 && isInside(scale.range()[1]) ? [{
        formattedValue: void 0,
        offset: scale.range()[1],
        labelOffset: 0
      }] : []];
    }
    return filteredDomain.map((value) => {
      const defaultTickLabel = `${value}`;
      return {
        value,
        formattedValue: (valueFormatter == null ? void 0 : valueFormatter(value, {
          location: "tick",
          scale,
          tickNumber,
          defaultTickLabel
        })) ?? defaultTickLabel,
        offset: scale(value),
        labelOffset: 0
      };
    });
  }
  const domain = scale.domain();
  if (domain.some(isInfinity)) {
    return [];
  }
  const tickLabelPlacement = tickLabelPlacementProp;
  const ticks2 = typeof tickInterval === "object" ? tickInterval : getDefaultTicks(scale, tickNumber);
  const visibleTicks = [];
  for (let i = 0; i < ticks2.length; i += 1) {
    const value = ticks2[i];
    const offset2 = scale(value);
    if (isInside(offset2)) {
      const defaultTickLabel = scale.tickFormat(tickNumber)(value);
      visibleTicks.push({
        value,
        formattedValue: (valueFormatter == null ? void 0 : valueFormatter(value, {
          location: "tick",
          scale,
          tickNumber,
          defaultTickLabel
        })) ?? defaultTickLabel,
        offset: offset2,
        // Allowing the label to be placed in the middle of a continuous scale is weird.
        // But it is useful in some cases, like funnel categories with a linear scale.
        labelOffset: tickLabelPlacement === "middle" ? scale(ticks2[i - 1] ?? 0) - (offset2 + scale(ticks2[i - 1] ?? 0)) / 2 : 0
      });
    }
  }
  return visibleTicks;
}
function getDefaultTicks(scale, tickNumber) {
  const domain = scale.domain();
  if (domain[0] === domain[1]) {
    return [domain[0]];
  }
  return scale.ticks(tickNumber);
}
function useTicks(options) {
  const {
    scale,
    tickNumber,
    valueFormatter,
    tickInterval,
    tickPlacement = "extremities",
    tickLabelPlacement,
    tickSpacing,
    direction,
    ordinalTimeTicks
  } = options;
  const {
    instance
  } = useChartContext();
  const isInside = direction === "x" ? instance.isXInside : instance.isYInside;
  return React28.useMemo(() => getTicks({
    scale,
    tickNumber,
    tickPlacement,
    tickInterval,
    tickLabelPlacement,
    tickSpacing,
    valueFormatter,
    isInside,
    ordinalTimeTicks
  }), [scale, tickNumber, tickPlacement, tickInterval, tickLabelPlacement, tickSpacing, valueFormatter, isInside, ordinalTimeTicks]);
}

// ../node_modules/@mui/x-charts/esm/hooks/useMounted.js
var React29 = __toESM(require_react(), 1);
function useMounted(defer = false) {
  const [mountedState, setMountedState] = React29.useState(false);
  useEnhancedEffect_default(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React29.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return mountedState;
}

// ../node_modules/@mui/x-charts/esm/internals/getGraphemeCount.js
var segmenter = typeof window !== "undefined" && "Intl" in window && "Segmenter" in Intl ? new Intl.Segmenter(void 0, {
  granularity: "grapheme"
}) : null;
function getGraphemeCountFallback(text) {
  return text.length;
}
function getGraphemeCountModern(text) {
  const segments = segmenter.segment(text);
  let count2 = 0;
  for (const _unused of segments) {
    count2 += 1;
  }
  return count2;
}
var getGraphemeCount = segmenter ? getGraphemeCountModern : getGraphemeCountFallback;

// ../node_modules/@mui/x-charts/esm/internals/degToRad.js
function degToRad(degrees3) {
  return degrees3 * (Math.PI / 180);
}

// ../node_modules/@mui/x-charts/esm/internals/sliceUntil.js
var segmenter2 = typeof window !== "undefined" && "Intl" in window && "Segmenter" in Intl ? new Intl.Segmenter(void 0, {
  granularity: "grapheme"
}) : null;
function sliceUntilFallback(text, endIndex) {
  return text.slice(0, endIndex);
}
function sliceUntilModern(text, endIndex) {
  const segments = segmenter2.segment(text);
  let newText = "";
  let i = 0;
  for (const segment of segments) {
    newText += segment.segment;
    i += 1;
    if (i >= endIndex) {
      break;
    }
  }
  return newText;
}
var sliceUntil = segmenter2 ? sliceUntilModern : sliceUntilFallback;

// ../node_modules/@mui/x-charts/esm/internals/ellipsize.js
var ELLIPSIS = "…";
function doesTextFitInRect(text, config) {
  const {
    width,
    height,
    measureText
  } = config;
  const angle = degToRad(config.angle);
  const textSize = measureText(text);
  const angledWidth = Math.abs(textSize.width * Math.cos(angle)) + Math.abs(textSize.height * Math.sin(angle));
  const angledHeight = Math.abs(textSize.width * Math.sin(angle)) + Math.abs(textSize.height * Math.cos(angle));
  return angledWidth <= width && angledHeight <= height;
}
function ellipsize(text, doesTextFit) {
  if (doesTextFit(text)) {
    return text;
  }
  let shortenedText = text;
  let step = 1;
  let by = 1 / 2;
  const graphemeCount = getGraphemeCount(text);
  let newLength = graphemeCount;
  let lastLength = graphemeCount;
  let longestFittingText = null;
  do {
    lastLength = newLength;
    newLength = Math.floor(graphemeCount * by);
    if (newLength === 0) {
      break;
    }
    shortenedText = sliceUntil(text, newLength).trim();
    const fits = doesTextFit(shortenedText + ELLIPSIS);
    step += 1;
    if (fits) {
      longestFittingText = shortenedText;
      by += 1 / 2 ** step;
    } else {
      by -= 1 / 2 ** step;
    }
  } while (Math.abs(newLength - lastLength) !== 1);
  return longestFittingText ? longestFittingText + ELLIPSIS : "";
}

// ../node_modules/@mui/x-charts/esm/internals/domUtils.js
function isSsr() {
  return typeof window === "undefined";
}
var stringCache = /* @__PURE__ */ new Map();
var MAX_CACHE_NUM = 2e3;
var PIXEL_STYLES = /* @__PURE__ */ new Set(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"]);
function convertPixelValue(name, value) {
  if (PIXEL_STYLES.has(name) && value === +value) {
    return `${value}px`;
  }
  return value;
}
var AZ = /([A-Z])/g;
function camelCaseToDashCase(text) {
  return String(text).replace(AZ, (match) => `-${match.toLowerCase()}`);
}
function getStyleString(style) {
  let result = "";
  for (const key in style) {
    if (Object.hasOwn(style, key)) {
      const k2 = key;
      const value = style[k2];
      if (value === void 0) {
        continue;
      }
      result += `${camelCaseToDashCase(k2)}:${convertPixelValue(k2, value)};`;
    }
  }
  return result;
}
var getStringSize = (text, style = {}) => {
  if (text === void 0 || text === null || isSsr()) {
    return {
      width: 0,
      height: 0
    };
  }
  const str = String(text);
  const styleString = getStyleString(style);
  const cacheKey = `${str}-${styleString}`;
  const size = stringCache.get(cacheKey);
  if (size) {
    return size;
  }
  try {
    const measurementSpanContainer = getMeasurementContainer();
    const measurementElem = document.createElementNS("http://www.w3.org/2000/svg", "text");
    Object.keys(style).map((styleKey) => {
      measurementElem.style[camelCaseToDashCase(styleKey)] = convertPixelValue(styleKey, style[styleKey]);
      return styleKey;
    });
    measurementElem.textContent = str;
    measurementSpanContainer.replaceChildren(measurementElem);
    const result = measureSVGTextElement(measurementElem);
    stringCache.set(cacheKey, result);
    if (stringCache.size + 1 > MAX_CACHE_NUM) {
      stringCache.clear();
    }
    if (false) {
      measurementSpanContainer.replaceChildren();
    }
    return result;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
};
function batchMeasureStrings(texts, style = {}) {
  if (isSsr()) {
    return new Map(Array.from(texts).map((text) => [text, {
      width: 0,
      height: 0
    }]));
  }
  const sizeMap = /* @__PURE__ */ new Map();
  const textToMeasure = [];
  const styleString = getStyleString(style);
  for (const text of texts) {
    const cacheKey = `${text}-${styleString}`;
    const size = stringCache.get(cacheKey);
    if (size) {
      sizeMap.set(text, size);
    } else {
      textToMeasure.push(text);
    }
  }
  const measurementContainer2 = getMeasurementContainer();
  const measurementSpanStyle = _extends({}, style);
  Object.keys(measurementSpanStyle).map((styleKey) => {
    measurementContainer2.style[camelCaseToDashCase(styleKey)] = convertPixelValue(styleKey, measurementSpanStyle[styleKey]);
    return styleKey;
  });
  const measurementElements = [];
  for (const string of textToMeasure) {
    const measurementElem = document.createElementNS("http://www.w3.org/2000/svg", "text");
    measurementElem.textContent = `${string}`;
    measurementElements.push(measurementElem);
  }
  measurementContainer2.replaceChildren(...measurementElements);
  for (let i = 0; i < textToMeasure.length; i += 1) {
    const text = textToMeasure[i];
    const measurementElem = measurementContainer2.children[i];
    const result = measureSVGTextElement(measurementElem);
    const cacheKey = `${text}-${styleString}`;
    stringCache.set(cacheKey, result);
    sizeMap.set(text, result);
  }
  if (stringCache.size + 1 > MAX_CACHE_NUM) {
    stringCache.clear();
  }
  if (false) {
    measurementContainer2.replaceChildren();
  }
  return sizeMap;
}
function measureSVGTextElement(element) {
  try {
    const result = element.getBBox();
    return {
      width: result.width,
      height: result.height
    };
  } catch {
    const result = element.getBoundingClientRect();
    return {
      width: result.width,
      height: result.height
    };
  }
}
var measurementContainer = null;
function getMeasurementContainer() {
  if (measurementContainer === null) {
    measurementContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    measurementContainer.setAttribute("aria-hidden", "true");
    measurementContainer.style.position = "absolute";
    measurementContainer.style.top = "-20000px";
    measurementContainer.style.left = "0";
    measurementContainer.style.padding = "0";
    measurementContainer.style.margin = "0";
    measurementContainer.style.border = "none";
    measurementContainer.style.pointerEvents = "none";
    measurementContainer.style.visibility = "hidden";
    measurementContainer.style.contain = "strict";
    document.body.appendChild(measurementContainer);
  }
  return measurementContainer;
}

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/shortenLabels.js
function shortenLabels(visibleLabels, drawingArea, maxHeight, isRtl, tickLabelStyle) {
  const shortenedLabels = /* @__PURE__ */ new Map();
  const angle = clampAngle((tickLabelStyle == null ? void 0 : tickLabelStyle.angle) ?? 0);
  let leftBoundFactor = 1;
  let rightBoundFactor = 1;
  if ((tickLabelStyle == null ? void 0 : tickLabelStyle.textAnchor) === "start") {
    leftBoundFactor = Infinity;
    rightBoundFactor = 1;
  } else if ((tickLabelStyle == null ? void 0 : tickLabelStyle.textAnchor) === "end") {
    leftBoundFactor = 1;
    rightBoundFactor = Infinity;
  } else {
    leftBoundFactor = 2;
    rightBoundFactor = 2;
  }
  if (angle > 90 && angle < 270) {
    [leftBoundFactor, rightBoundFactor] = [rightBoundFactor, leftBoundFactor];
  }
  if (isRtl) {
    [leftBoundFactor, rightBoundFactor] = [rightBoundFactor, leftBoundFactor];
  }
  for (const item of visibleLabels) {
    if (item.formattedValue) {
      const width = Math.min((item.offset + item.labelOffset) * leftBoundFactor, (drawingArea.left + drawingArea.width + drawingArea.right - item.offset - item.labelOffset) * rightBoundFactor);
      const doesTextFit = (text) => doesTextFitInRect(text, {
        width,
        height: maxHeight,
        angle,
        measureText: (string) => getStringSize(string, tickLabelStyle)
      });
      shortenedLabels.set(item, ellipsize(item.formattedValue.toString(), doesTextFit));
    }
  }
  return shortenedLabels;
}

// ../node_modules/@mui/x-charts/esm/internals/geometry.js
var ANGLE_APPROX = 5;
function getMinXTranslation(width, height, angle = 0) {
  if (true) {
    if (angle > 90 && angle < -90) {
      warnOnce([`MUI X Charts: It seems you applied an angle larger than 90° or smaller than -90° to an axis text.`, `This could cause some text overlapping.`, `If you encounter a use case where it's needed, please open an issue.`]);
    }
  }
  const standardAngle = Math.min(Math.abs(angle) % 180, Math.abs(Math.abs(angle) % 180 - 180) % 180);
  if (standardAngle < ANGLE_APPROX) {
    return width;
  }
  if (standardAngle > 90 - ANGLE_APPROX) {
    return height;
  }
  const radAngle = deg2rad(standardAngle);
  const angleSwich = Math.atan2(height, width);
  if (radAngle < angleSwich) {
    return width / Math.cos(radAngle);
  }
  return height / Math.sin(radAngle);
}

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/getVisibleLabels.js
function getVisibleLabels(xTicks, {
  tickLabelStyle: style,
  tickLabelInterval,
  tickLabelMinGap,
  reverse: reverse2,
  isMounted,
  isXInside
}) {
  if (typeof tickLabelInterval === "function") {
    return new Set(xTicks.filter((item, index2) => tickLabelInterval(item.value, index2)));
  }
  let previousTextLimit = 0;
  const direction = reverse2 ? -1 : 1;
  const candidateTickLabels = xTicks.filter((item) => {
    const {
      offset: offset2,
      labelOffset,
      formattedValue
    } = item;
    if (formattedValue === "") {
      return false;
    }
    const textPosition = offset2 + labelOffset;
    return isXInside(textPosition);
  });
  const sizeMap = measureTickLabels(candidateTickLabels, style);
  return new Set(candidateTickLabels.filter((item, labelIndex) => {
    const {
      offset: offset2,
      labelOffset
    } = item;
    const textPosition = offset2 + labelOffset;
    if (labelIndex > 0 && direction * textPosition < direction * (previousTextLimit + tickLabelMinGap)) {
      return false;
    }
    const {
      width,
      height
    } = isMounted ? getTickLabelSize(sizeMap, item) : {
      width: 0,
      height: 0
    };
    const distance = getMinXTranslation(width, height, style == null ? void 0 : style.angle);
    const currentTextLimit = textPosition - direction * distance / 2;
    if (labelIndex > 0 && direction * currentTextLimit < direction * (previousTextLimit + tickLabelMinGap)) {
      return false;
    }
    previousTextLimit = textPosition + direction * distance / 2;
    return true;
  }));
}
function getTickLabelSize(sizeMap, tick) {
  if (tick.formattedValue === void 0) {
    return {
      width: 0,
      height: 0
    };
  }
  let width = 0;
  let height = 0;
  for (const line of tick.formattedValue.split("\n")) {
    const lineSize = sizeMap.get(line);
    if (lineSize) {
      width = Math.max(width, lineSize.width);
      height += lineSize.height;
    }
  }
  return {
    width,
    height
  };
}
function measureTickLabels(ticks2, style) {
  const strings = /* @__PURE__ */ new Set();
  for (const tick of ticks2) {
    if (tick.formattedValue) {
      tick.formattedValue.split("\n").forEach((line) => strings.add(line));
    }
  }
  return batchMeasureStrings(strings, style);
}

// ../node_modules/@mui/x-charts/esm/ChartsAxis/axisClasses.js
function getAxisUtilityClass(slot) {
  return generateUtilityClass("MuiChartsAxis", slot);
}
var axisClasses = generateUtilityClasses("MuiChartsAxis", ["root", "line", "tickContainer", "tick", "tickLabel", "label", "directionX", "directionY", "top", "bottom", "left", "right", "id"]);

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/utilities.js
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    position,
    id
  } = ownerState;
  const slots = {
    root: ["root", "directionX", position, `id-${id}`],
    line: ["line"],
    tickContainer: ["tickContainer"],
    tick: ["tick"],
    tickLabel: ["tickLabel"],
    label: ["label"]
  };
  return composeClasses(slots, getAxisUtilityClass, classes);
};
var TICK_LABEL_GAP = 3;
var AXIS_LABEL_TICK_LABEL_GAP = 4;
var defaultProps = {
  disableLine: false,
  disableTicks: false,
  tickSize: 6,
  tickLabelMinGap: 4
};

// ../node_modules/@mui/x-charts/esm/ChartsText/ChartsText.js
var React30 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/internals/getWordsByLines.js
function getWordsByLines({
  style,
  needsComputation,
  text
}) {
  return text.split("\n").map((subText) => _extends({
    text: subText
  }, needsComputation ? getStringSize(subText, style) : {
    width: 0,
    height: 0
  }));
}

// ../node_modules/@mui/x-charts/esm/ChartsText/ChartsText.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var _excluded3 = ["x", "y", "style", "text", "ownerState"];
var _excluded22 = ["angle", "textAnchor", "dominantBaseline"];
function ChartsText(props) {
  const {
    x: x2,
    y: y2,
    style: styleProps,
    text
  } = props, textProps = _objectWithoutPropertiesLoose(props, _excluded3);
  const _ref = styleProps ?? {}, {
    angle,
    textAnchor,
    dominantBaseline
  } = _ref, style = _objectWithoutPropertiesLoose(_ref, _excluded22);
  const isHydrated = useIsHydrated();
  const wordsByLines = React30.useMemo(() => getWordsByLines({
    style,
    needsComputation: isHydrated && text.includes("\n"),
    text
  }), [style, text, isHydrated]);
  let startDy;
  switch (dominantBaseline) {
    case "hanging":
    case "text-before-edge":
      startDy = 0;
      break;
    case "central":
      startDy = (wordsByLines.length - 1) / 2 * -wordsByLines[0].height;
      break;
    default:
      startDy = (wordsByLines.length - 1) * -wordsByLines[0].height;
      break;
  }
  return (0, import_jsx_runtime3.jsx)("text", _extends({}, textProps, {
    transform: angle ? `rotate(${angle}, ${x2}, ${y2})` : void 0,
    x: x2,
    y: y2,
    textAnchor,
    dominantBaseline,
    style,
    children: wordsByLines.map((line, index2) => (0, import_jsx_runtime3.jsx)("tspan", {
      x: x2,
      dy: `${index2 === 0 ? startDy : wordsByLines[0].height}px`,
      dominantBaseline,
      children: line.text
    }, index2))
  }));
}
true ? ChartsText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Height of a text line (in `em`).
   */
  lineHeight: import_prop_types2.default.number,
  /**
   * If `true`, the line width is computed.
   * @default false
   */
  needsComputation: import_prop_types2.default.bool,
  ownerState: import_prop_types2.default.any,
  /**
   * Style applied to text elements.
   */
  style: import_prop_types2.default.object,
  /**
   * Text displayed.
   */
  text: import_prop_types2.default.string.isRequired
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsText/defaultTextPlacement.js
function getDefaultTextAnchor(angle) {
  const adjustedAngle = clampAngle(angle);
  if (adjustedAngle <= 30 || adjustedAngle >= 330) {
    return "middle";
  }
  if (adjustedAngle <= 210 && adjustedAngle >= 150) {
    return "middle";
  }
  if (adjustedAngle <= 180) {
    return "end";
  }
  return "start";
}
function getDefaultBaseline(angle) {
  const adjustedAngle = clampAngle(angle);
  if (adjustedAngle <= 30 || adjustedAngle >= 330) {
    return "hanging";
  }
  if (adjustedAngle <= 210 && adjustedAngle >= 150) {
    return "auto";
  }
  return "central";
}

// ../node_modules/@mui/x-charts/esm/internals/invertTextAnchor.js
function invertTextAnchor(textAnchor) {
  switch (textAnchor) {
    case "start":
      return "end";
    case "end":
      return "start";
    default:
      return textAnchor;
  }
}

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/useAxisTicksProps.js
var _excluded4 = ["scale", "tickNumber", "reverse"];
function useAxisTicksProps(inProps) {
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const _xAxis = xAxis[inProps.axisId ?? xAxisIds[0]], {
    scale: xScale,
    tickNumber,
    reverse: reverse2
  } = _xAxis, settings = _objectWithoutPropertiesLoose(_xAxis, _excluded4);
  const themedProps = useThemeProps({
    props: _extends({}, settings, inProps),
    name: "MuiChartsXAxis"
  });
  const defaultizedProps = _extends({}, defaultProps, themedProps);
  const {
    position,
    tickLabelStyle,
    slots,
    slotProps
  } = defaultizedProps;
  const theme = useTheme();
  const isRtl = useRtl();
  const classes = useUtilityClasses(defaultizedProps);
  const positionSign = position === "bottom" ? 1 : -1;
  const Tick = (slots == null ? void 0 : slots.axisTick) ?? "line";
  const TickLabel = (slots == null ? void 0 : slots.axisTickLabel) ?? ChartsText;
  const defaultTextAnchor = getDefaultTextAnchor((position === "bottom" ? 0 : 180) - ((tickLabelStyle == null ? void 0 : tickLabelStyle.angle) ?? 0));
  const defaultDominantBaseline = getDefaultBaseline((position === "bottom" ? 0 : 180) - ((tickLabelStyle == null ? void 0 : tickLabelStyle.angle) ?? 0));
  const axisTickLabelProps = useSlotProps_default({
    elementType: TickLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: slotProps == null ? void 0 : slotProps.axisTickLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: _extends({}, theme.typography.caption, {
        fontSize: 12,
        lineHeight: 1.25,
        textAnchor: isRtl ? invertTextAnchor(defaultTextAnchor) : defaultTextAnchor,
        dominantBaseline: defaultDominantBaseline
      }, tickLabelStyle)
    },
    className: classes.tickLabel,
    ownerState: {}
  });
  return {
    xScale,
    defaultizedProps,
    tickNumber,
    positionSign,
    classes,
    Tick,
    TickLabel,
    axisTickLabelProps,
    reverse: reverse2
  };
}

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/ChartsSingleXAxisTicks.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function ChartsSingleXAxisTicks(inProps) {
  const {
    axisLabelHeight,
    ordinalTimeTicks
  } = inProps;
  const {
    xScale,
    defaultizedProps,
    tickNumber,
    positionSign,
    classes,
    Tick,
    TickLabel,
    axisTickLabelProps,
    reverse: reverse2
  } = useAxisTicksProps(inProps);
  const isRtl = useRtl();
  const isMounted = useMounted();
  const {
    disableTicks,
    tickSize: tickSizeProp,
    valueFormatter,
    slotProps,
    tickInterval,
    tickLabelInterval,
    tickPlacement,
    tickLabelPlacement,
    tickLabelMinGap,
    tickSpacing,
    height: axisHeight
  } = defaultizedProps;
  const drawingArea = useDrawingArea();
  const {
    instance
  } = useChartContext();
  const isHydrated = useIsHydrated();
  const tickSize = disableTicks ? 4 : tickSizeProp;
  const xTicks = useTicks({
    scale: xScale,
    tickNumber,
    valueFormatter,
    tickInterval,
    tickPlacement,
    tickLabelPlacement,
    tickSpacing,
    direction: "x",
    ordinalTimeTicks
  });
  const visibleLabels = getVisibleLabels(xTicks, {
    tickLabelStyle: axisTickLabelProps.style,
    tickLabelInterval,
    tickLabelMinGap,
    reverse: reverse2,
    isMounted,
    isXInside: instance.isXInside
  });
  const tickLabelsMaxHeight = Math.max(0, axisHeight - (axisLabelHeight > 0 ? axisLabelHeight + AXIS_LABEL_TICK_LABEL_GAP : 0) - tickSize - TICK_LABEL_GAP);
  const tickLabels = isHydrated ? shortenLabels(visibleLabels, drawingArea, tickLabelsMaxHeight, isRtl, axisTickLabelProps.style) : new Map(Array.from(visibleLabels).map((item) => [item, item.formattedValue]));
  return (0, import_jsx_runtime4.jsx)(React31.Fragment, {
    children: xTicks.map((item, index2) => {
      const {
        offset: tickOffset,
        labelOffset
      } = item;
      const xTickLabel = labelOffset ?? 0;
      const yTickLabel = positionSign * (tickSize + TICK_LABEL_GAP);
      const showTick = instance.isXInside(tickOffset);
      const tickLabel = tickLabels.get(item);
      const showTickLabel = visibleLabels.has(item);
      return (0, import_jsx_runtime4.jsxs)("g", {
        transform: `translate(${tickOffset}, 0)`,
        className: classes.tickContainer,
        children: [!disableTicks && showTick && (0, import_jsx_runtime4.jsx)(Tick, _extends({
          y2: positionSign * tickSize,
          className: classes.tick
        }, slotProps == null ? void 0 : slotProps.axisTick)), tickLabel !== void 0 && showTickLabel && (0, import_jsx_runtime4.jsx)(TickLabel, _extends({
          x: xTickLabel,
          y: yTickLabel
        }, axisTickLabelProps, {
          text: tickLabel
        }))]
      }, index2);
    })
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/ChartsGroupedXAxisTicks.js
var React33 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/hooks/useTicksGrouped.js
var React32 = __toESM(require_react(), 1);
var offsetRatio2 = {
  start: 0,
  extremities: 0,
  end: 1,
  middle: 0.5,
  tick: 0
};
function useTicksGrouped(options) {
  const {
    scale,
    tickInterval,
    tickLabelPlacement = "middle",
    tickPlacement = "extremities",
    groups: groups2
  } = options;
  return React32.useMemo(() => {
    const domain = scale.domain();
    const filteredDomain = typeof tickInterval === "function" && domain.filter(tickInterval) || typeof tickInterval === "object" && tickInterval || domain;
    if (scale.bandwidth() > 0) {
      const entries = mapToGrouping(filteredDomain, groups2, tickPlacement, tickLabelPlacement, scale);
      if (entries[0]) {
        entries[0].ignoreTick = true;
      }
      return [
        {
          formattedValue: void 0,
          offset: scale.range()[0],
          labelOffset: 0,
          groupIndex: groups2.length - 1
        },
        ...entries,
        // Last tick
        {
          formattedValue: void 0,
          offset: scale.range()[1],
          labelOffset: 0,
          groupIndex: groups2.length - 1
        }
      ];
    }
    return mapToGrouping(filteredDomain, groups2, tickPlacement, tickLabelPlacement, scale);
  }, [scale, tickInterval, groups2, tickPlacement, tickLabelPlacement]);
}
function mapToGrouping(tickValues, groups2, tickPlacement, tickLabelPlacement, scale) {
  const allTickItems = [];
  const dataIndexToTickIndex = /* @__PURE__ */ new Map();
  let currentValueCount = 0;
  for (let groupIndex = 0; groupIndex < groups2.length; groupIndex += 1) {
    for (let dataIndex = 0; dataIndex < tickValues.length; dataIndex += 1) {
      const tickValue = tickValues[dataIndex];
      const groupValue = groups2[groupIndex].getValue(tickValue, dataIndex);
      const lastItem = allTickItems[allTickItems.length - 1];
      const isNew = (lastItem == null ? void 0 : lastItem.value) !== groupValue || (lastItem == null ? void 0 : lastItem.groupIndex) !== groupIndex;
      if (isNew) {
        currentValueCount = 1;
        const tickOffset = isOrdinalScale(scale) ? scale(tickValue) - (scale.step() - scale.bandwidth()) / 2 + offsetRatio2[tickPlacement] * scale.step() : scale(tickValue);
        const labelOffset = scale.step() * currentValueCount * (offsetRatio2[tickLabelPlacement] - offsetRatio2[tickPlacement]);
        allTickItems.push({
          value: groupValue,
          formattedValue: `${groupValue}`,
          offset: tickOffset,
          groupIndex,
          dataIndex,
          ignoreTick: false,
          labelOffset
        });
        if (!dataIndexToTickIndex.has(dataIndex)) {
          dataIndexToTickIndex.set(dataIndex, /* @__PURE__ */ new Set());
        }
        const tickIndexes = dataIndexToTickIndex.get(dataIndex);
        for (const previousIndex of tickIndexes.values()) {
          allTickItems[previousIndex].ignoreTick = true;
        }
        tickIndexes.add(allTickItems.length - 1);
      } else {
        currentValueCount += 1;
        const labelOffset = scale.step() * currentValueCount * (offsetRatio2[tickLabelPlacement] - offsetRatio2[tickPlacement]);
        lastItem.labelOffset = labelOffset;
      }
    }
  }
  return allTickItems;
}

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/ChartsGroupedXAxisTicks.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_GROUPING_CONFIG = {
  tickSize: 6
};
var getGroupingConfig = (groups2, groupIndex, tickSize) => {
  const config = groups2[groupIndex] ?? {};
  const defaultTickSize = tickSize ?? DEFAULT_GROUPING_CONFIG.tickSize;
  const calculatedTickSize = defaultTickSize * groupIndex * 2 + defaultTickSize;
  return _extends({}, DEFAULT_GROUPING_CONFIG, config, {
    tickSize: config.tickSize ?? calculatedTickSize
  });
};
function ChartsGroupedXAxisTicks(inProps) {
  const {
    xScale,
    defaultizedProps,
    tickNumber,
    positionSign,
    classes,
    Tick,
    TickLabel,
    axisTickLabelProps
  } = useAxisTicksProps(inProps);
  if (!isOrdinalScale(xScale)) {
    throw new Error("MUI X Charts: ChartsGroupedXAxis only supports the `band` and `point` scale types.");
  }
  const {
    disableTicks,
    tickSize,
    valueFormatter,
    slotProps,
    tickInterval,
    tickPlacement,
    tickLabelPlacement
  } = defaultizedProps;
  const groups2 = defaultizedProps.groups;
  const {
    instance
  } = useChartContext();
  const xTicks = useTicksGrouped({
    scale: xScale,
    tickNumber,
    valueFormatter,
    tickInterval,
    tickPlacement,
    tickLabelPlacement,
    direction: "x",
    groups: groups2
  });
  return (0, import_jsx_runtime5.jsx)(React33.Fragment, {
    children: xTicks.map((item, index2) => {
      const {
        offset: tickOffset,
        labelOffset
      } = item;
      const xTickLabel = labelOffset ?? 0;
      const showTick = instance.isXInside(tickOffset);
      const tickLabel = item.formattedValue;
      const ignoreTick = item.ignoreTick ?? false;
      const groupIndex = item.groupIndex ?? 0;
      const groupConfig = getGroupingConfig(groups2, groupIndex, tickSize);
      const tickYSize = positionSign * groupConfig.tickSize;
      const labelPositionY = positionSign * (groupConfig.tickSize + TICK_LABEL_GAP);
      return (0, import_jsx_runtime5.jsxs)("g", {
        transform: `translate(${tickOffset}, 0)`,
        className: classes.tickContainer,
        "data-group-index": groupIndex,
        children: [!disableTicks && !ignoreTick && showTick && (0, import_jsx_runtime5.jsx)(Tick, _extends({
          y2: tickYSize,
          className: classes.tick
        }, slotProps == null ? void 0 : slotProps.axisTick)), tickLabel !== void 0 && (0, import_jsx_runtime5.jsx)(TickLabel, _extends({
          x: xTickLabel,
          y: labelPositionY
        }, axisTickLabelProps, {
          style: _extends({}, axisTickLabelProps.style, groupConfig.tickLabelStyle),
          text: tickLabel
        }))]
      }, index2);
    })
  });
}

// ../node_modules/@mui/x-charts/esm/internals/components/AxisSharedComponents.js
var AxisRoot = styled_default("g", {
  name: "MuiChartsAxis",
  slot: "Root"
})(({
  theme
}) => ({
  [`& .${axisClasses.tickLabel}`]: _extends({}, theme.typography.caption, {
    fill: (theme.vars || theme).palette.text.primary
  }),
  [`& .${axisClasses.label}`]: {
    fill: (theme.vars || theme).palette.text.primary
  },
  [`& .${axisClasses.line}`]: {
    stroke: (theme.vars || theme).palette.text.primary,
    shapeRendering: "crispEdges",
    strokeWidth: 1
  },
  [`& .${axisClasses.tick}`]: {
    stroke: (theme.vars || theme).palette.text.primary,
    shapeRendering: "crispEdges"
  }
}));

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/ChartsXAxisImpl.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var _excluded5 = ["axis"];
var _excluded23 = ["scale", "tickNumber", "reverse", "ordinalTimeTicks"];
var XAxisRoot = styled_default(AxisRoot, {
  name: "MuiChartsXAxis",
  slot: "Root"
})({});
function ChartsXAxisImpl(_ref) {
  let {
    axis
  } = _ref, inProps = _objectWithoutPropertiesLoose(_ref, _excluded5);
  const {
    scale: xScale,
    ordinalTimeTicks
  } = axis, settings = _objectWithoutPropertiesLoose(axis, _excluded23);
  const themedProps = useThemeProps({
    props: _extends({}, settings, inProps),
    name: "MuiChartsXAxis"
  });
  const defaultizedProps = _extends({}, defaultProps, themedProps);
  const {
    position,
    labelStyle,
    offset: offset2,
    slots,
    slotProps,
    sx,
    disableLine,
    label,
    height: axisHeight
  } = defaultizedProps;
  const theme = useTheme();
  const classes = useUtilityClasses(defaultizedProps);
  const {
    left: left2,
    top: top2,
    width,
    height
  } = useDrawingArea();
  const positionSign = position === "bottom" ? 1 : -1;
  const Line = (slots == null ? void 0 : slots.axisLine) ?? "line";
  const Label = (slots == null ? void 0 : slots.axisLabel) ?? ChartsText;
  const axisLabelProps = useSlotProps_default({
    elementType: Label,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: slotProps == null ? void 0 : slotProps.axisLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: _extends({}, theme.typography.body1, {
        lineHeight: 1,
        fontSize: 14,
        textAnchor: "middle",
        dominantBaseline: position === "bottom" ? "text-after-edge" : "text-before-edge"
      }, labelStyle)
    },
    ownerState: {}
  });
  if (position === "none") {
    return null;
  }
  const labelHeight = label ? getStringSize(label, axisLabelProps.style).height : 0;
  const domain = xScale.domain();
  const isScaleOrdinal = isOrdinalScale(xScale);
  const skipTickRendering = isScaleOrdinal ? domain.length === 0 : domain.some(isInfinity);
  let children2 = null;
  if (!skipTickRendering) {
    children2 = "groups" in axis && Array.isArray(axis.groups) ? (0, import_jsx_runtime6.jsx)(ChartsGroupedXAxisTicks, _extends({}, inProps)) : (0, import_jsx_runtime6.jsx)(ChartsSingleXAxisTicks, _extends({}, inProps, {
      axisLabelHeight: labelHeight,
      ordinalTimeTicks
    }));
  }
  const labelRefPoint = {
    x: left2 + width / 2,
    y: positionSign * axisHeight
  };
  return (0, import_jsx_runtime6.jsxs)(XAxisRoot, {
    transform: `translate(0, ${position === "bottom" ? top2 + height + offset2 : top2 - offset2})`,
    className: classes.root,
    sx,
    children: [!disableLine && (0, import_jsx_runtime6.jsx)(Line, _extends({
      x1: left2,
      x2: left2 + width,
      className: classes.line
    }, slotProps == null ? void 0 : slotProps.axisLine)), children2, label && (0, import_jsx_runtime6.jsx)("g", {
      className: classes.label,
      children: (0, import_jsx_runtime6.jsx)(Label, _extends({}, labelRefPoint, axisLabelProps, {
        text: label
      }))
    })]
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsXAxis/ChartsXAxis.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function ChartsXAxis(inProps) {
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const axis = xAxis[inProps.axisId ?? xAxisIds[0]];
  if (!axis) {
    warnOnce(`MUI X Charts: No axis found. The axisId "${inProps.axisId}" is probably invalid.`);
    return null;
  }
  return (0, import_jsx_runtime7.jsx)(ChartsXAxisImpl, _extends({}, inProps, {
    axis
  }));
}
true ? ChartsXAxis.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  axis: import_prop_types3.default.oneOf(["x"]),
  /**
   * The id of the axis to render.
   * If undefined, it will be the first defined axis.
   */
  axisId: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  /**
   * If true, the axis line is disabled.
   * @default false
   */
  disableLine: import_prop_types3.default.bool,
  /**
   * If true, the ticks are disabled.
   * @default false
   */
  disableTicks: import_prop_types3.default.bool,
  /**
   * The label of the axis.
   */
  label: import_prop_types3.default.string,
  /**
   * The style applied to the axis label.
   */
  labelStyle: import_prop_types3.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object,
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * Defines which ticks are displayed.
   * Its value can be:
   * - 'auto' In such case the ticks are computed based on axis scale and other parameters.
   * - a filtering function of the form `(value, index) => boolean` which is available only if the axis has "point" scale.
   * - an array containing the values where ticks should be displayed.
   * @see See {@link https://mui.com/x/react-charts/axis/#fixed-tick-positions}
   * @default 'auto'
   */
  tickInterval: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["auto"]), import_prop_types3.default.array, import_prop_types3.default.func]),
  /**
   * Defines which ticks get its label displayed. Its value can be:
   * - 'auto' In such case, labels are displayed if they do not overlap with the previous one.
   * - a filtering function of the form (value, index) => boolean. Warning: the index is tick index, not data ones.
   * @default 'auto'
   */
  tickLabelInterval: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["auto"]), import_prop_types3.default.func]),
  /**
   * The minimum gap in pixels between two tick labels.
   * If two tick labels are closer than this minimum gap, one of them will be hidden.
   * @default 4
   */
  tickLabelMinGap: import_prop_types3.default.number,
  /**
   * The placement of ticks label. Can be the middle of the band, or the tick position.
   * Only used if scale is 'band'.
   * @default 'middle'
   */
  tickLabelPlacement: import_prop_types3.default.oneOf(["middle", "tick"]),
  /**
   * The style applied to ticks text.
   */
  tickLabelStyle: import_prop_types3.default.object,
  /**
   * Maximal step between two ticks.
   * When using time data, the value is assumed to be in ms.
   * Not supported by categorical axis (band, points).
   */
  tickMaxStep: import_prop_types3.default.number,
  /**
   * Minimal step between two ticks.
   * When using time data, the value is assumed to be in ms.
   * Not supported by categorical axis (band, points).
   */
  tickMinStep: import_prop_types3.default.number,
  /**
   * The number of ticks. This number is not guaranteed.
   * Not supported by categorical axis (band, points).
   */
  tickNumber: import_prop_types3.default.number,
  /**
   * The placement of ticks in regard to the band interval.
   * Only used if scale is 'band'.
   * @default 'extremities'
   */
  tickPlacement: import_prop_types3.default.oneOf(["end", "extremities", "middle", "start"]),
  /**
   * The size of the ticks.
   * @default 6
   */
  tickSize: import_prop_types3.default.number
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/ChartsYAxis.js
var import_prop_types4 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/ChartsYAxisImpl.js
var React37 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/ChartsSingleYAxisTicks.js
var React35 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/shortenLabels.js
function shortenLabels2(visibleLabels, drawingArea, maxWidth, isRtl, tickLabelStyle) {
  const shortenedLabels = /* @__PURE__ */ new Map();
  const angle = clampAngle((tickLabelStyle == null ? void 0 : tickLabelStyle.angle) ?? 0);
  let topBoundFactor = 1;
  let bottomBoundFactor = 1;
  if ((tickLabelStyle == null ? void 0 : tickLabelStyle.textAnchor) === "start") {
    topBoundFactor = Infinity;
    bottomBoundFactor = 1;
  } else if ((tickLabelStyle == null ? void 0 : tickLabelStyle.textAnchor) === "end") {
    topBoundFactor = 1;
    bottomBoundFactor = Infinity;
  } else {
    topBoundFactor = 2;
    bottomBoundFactor = 2;
  }
  if (angle > 180) {
    [topBoundFactor, bottomBoundFactor] = [bottomBoundFactor, topBoundFactor];
  }
  if (isRtl) {
    [topBoundFactor, bottomBoundFactor] = [bottomBoundFactor, topBoundFactor];
  }
  for (const item of visibleLabels) {
    if (item.formattedValue) {
      const height = Math.min((item.offset + item.labelOffset) * topBoundFactor, (drawingArea.top + drawingArea.height + drawingArea.bottom - item.offset - item.labelOffset) * bottomBoundFactor);
      const doesTextFit = (text) => doesTextFitInRect(text, {
        width: maxWidth,
        height,
        angle,
        measureText: (string) => getStringSize(string, tickLabelStyle)
      });
      shortenedLabels.set(item, ellipsize(item.formattedValue.toString(), doesTextFit));
    }
  }
  return shortenedLabels;
}

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/utilities.js
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    position,
    id
  } = ownerState;
  const slots = {
    root: ["root", "directionY", position, `id-${id}`],
    line: ["line"],
    tickContainer: ["tickContainer"],
    tick: ["tick"],
    tickLabel: ["tickLabel"],
    label: ["label"]
  };
  return composeClasses(slots, getAxisUtilityClass, classes);
};
var TICK_LABEL_GAP2 = 2;
var AXIS_LABEL_TICK_LABEL_GAP2 = 2;
var defaultProps2 = {
  disableLine: false,
  disableTicks: false,
  tickSize: 6
};

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/useAxisTicksProps.js
var _excluded6 = ["scale", "tickNumber", "reverse"];
function useAxisTicksProps2(inProps) {
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  const _yAxis = yAxis[inProps.axisId ?? yAxisIds[0]], {
    scale: yScale,
    tickNumber
  } = _yAxis, settings = _objectWithoutPropertiesLoose(_yAxis, _excluded6);
  const themedProps = useThemeProps({
    props: _extends({}, settings, inProps),
    name: "MuiChartsYAxis"
  });
  const defaultizedProps = _extends({}, defaultProps2, themedProps);
  const {
    position,
    tickLabelStyle,
    slots,
    slotProps
  } = defaultizedProps;
  const theme = useTheme();
  const isRtl = useRtl();
  const classes = useUtilityClasses2(defaultizedProps);
  const positionSign = position === "right" ? 1 : -1;
  const tickFontSize = typeof (tickLabelStyle == null ? void 0 : tickLabelStyle.fontSize) === "number" ? tickLabelStyle.fontSize : 12;
  const Tick = (slots == null ? void 0 : slots.axisTick) ?? "line";
  const TickLabel = (slots == null ? void 0 : slots.axisTickLabel) ?? ChartsText;
  const defaultTextAnchor = getDefaultTextAnchor((position === "right" ? -90 : 90) - ((tickLabelStyle == null ? void 0 : tickLabelStyle.angle) ?? 0));
  const defaultDominantBaseline = getDefaultBaseline((position === "right" ? -90 : 90) - ((tickLabelStyle == null ? void 0 : tickLabelStyle.angle) ?? 0));
  const axisTickLabelProps = useSlotProps_default({
    elementType: TickLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: slotProps == null ? void 0 : slotProps.axisTickLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: _extends({}, theme.typography.caption, {
        fontSize: tickFontSize,
        textAnchor: isRtl ? invertTextAnchor(defaultTextAnchor) : defaultTextAnchor,
        dominantBaseline: defaultDominantBaseline
      }, tickLabelStyle)
    },
    className: classes.tickLabel,
    ownerState: {}
  });
  return {
    yScale,
    defaultizedProps,
    tickNumber,
    positionSign,
    classes,
    Tick,
    TickLabel,
    axisTickLabelProps
  };
}

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/ChartsSingleYAxisTicks.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function ChartsSingleYAxisTicks(inProps) {
  const {
    axisLabelHeight,
    ordinalTimeTicks
  } = inProps;
  const {
    yScale,
    defaultizedProps,
    tickNumber,
    positionSign,
    classes,
    Tick,
    TickLabel,
    axisTickLabelProps
  } = useAxisTicksProps2(inProps);
  const isRtl = useRtl();
  const {
    disableTicks,
    tickSize: tickSizeProp,
    valueFormatter,
    slotProps,
    tickPlacement,
    tickLabelPlacement,
    tickInterval,
    tickLabelInterval,
    tickSpacing,
    width: axisWidth
  } = defaultizedProps;
  const drawingArea = useDrawingArea();
  const {
    instance
  } = useChartContext();
  const isHydrated = useIsHydrated();
  const tickSize = disableTicks ? 4 : tickSizeProp;
  const yTicks = useTicks({
    scale: yScale,
    tickNumber,
    valueFormatter,
    tickPlacement,
    tickLabelPlacement,
    tickInterval,
    tickSpacing,
    direction: "y",
    ordinalTimeTicks
  });
  const tickLabelsMaxWidth = Math.max(0, axisWidth - (axisLabelHeight > 0 ? axisLabelHeight + AXIS_LABEL_TICK_LABEL_GAP2 : 0) - tickSize - TICK_LABEL_GAP2);
  const tickLabels = isHydrated ? shortenLabels2(yTicks, drawingArea, tickLabelsMaxWidth, isRtl, axisTickLabelProps.style) : new Map(Array.from(yTicks).map((item) => [item, item.formattedValue]));
  return (0, import_jsx_runtime8.jsx)(React35.Fragment, {
    children: yTicks.map((item, index2) => {
      const {
        offset: tickOffset,
        labelOffset,
        value
      } = item;
      const xTickLabel = positionSign * (tickSize + TICK_LABEL_GAP2);
      const yTickLabel = labelOffset;
      const skipLabel = typeof tickLabelInterval === "function" && !(tickLabelInterval == null ? void 0 : tickLabelInterval(value, index2));
      const showLabel = instance.isYInside(tickOffset);
      const tickLabel = tickLabels.get(item);
      if (!showLabel) {
        return null;
      }
      return (0, import_jsx_runtime8.jsxs)("g", {
        transform: `translate(0, ${tickOffset})`,
        className: classes.tickContainer,
        children: [!disableTicks && (0, import_jsx_runtime8.jsx)(Tick, _extends({
          x2: positionSign * tickSize,
          className: classes.tick
        }, slotProps == null ? void 0 : slotProps.axisTick)), tickLabel !== void 0 && !skipLabel && (0, import_jsx_runtime8.jsx)(TickLabel, _extends({
          x: xTickLabel,
          y: yTickLabel,
          text: tickLabel
        }, axisTickLabelProps))]
      }, index2);
    })
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/ChartsGroupedYAxisTicks.js
var React36 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_GROUPING_CONFIG2 = {
  tickSize: 6
};
var getGroupingConfig2 = (groups2, groupIndex, tickSize) => {
  const config = groups2[groupIndex] ?? {};
  const defaultTickSize = tickSize ?? DEFAULT_GROUPING_CONFIG2.tickSize;
  const calculatedTickSize = defaultTickSize * groupIndex * 2 + defaultTickSize;
  return _extends({}, DEFAULT_GROUPING_CONFIG2, config, {
    tickSize: config.tickSize ?? calculatedTickSize
  });
};
function ChartsGroupedYAxisTicks(inProps) {
  const {
    yScale,
    defaultizedProps,
    tickNumber,
    positionSign,
    classes,
    Tick,
    TickLabel,
    axisTickLabelProps
  } = useAxisTicksProps2(inProps);
  if (!isOrdinalScale(yScale)) {
    throw new Error("MUI X Charts: ChartsGroupedYAxis only supports the `band` and `point` scale types.");
  }
  const {
    disableTicks,
    tickSize,
    valueFormatter,
    slotProps,
    tickInterval,
    tickPlacement,
    tickLabelPlacement
  } = defaultizedProps;
  const groups2 = defaultizedProps.groups;
  const {
    instance
  } = useChartContext();
  const yTicks = useTicksGrouped({
    scale: yScale,
    tickNumber,
    valueFormatter,
    tickInterval,
    tickPlacement,
    tickLabelPlacement,
    direction: "y",
    groups: groups2
  });
  return (0, import_jsx_runtime9.jsx)(React36.Fragment, {
    children: yTicks.map((item, index2) => {
      const {
        offset: tickOffset,
        labelOffset
      } = item;
      const yTickLabel = labelOffset ?? 0;
      const showTick = instance.isYInside(tickOffset);
      const tickLabel = item.formattedValue;
      const ignoreTick = item.ignoreTick ?? false;
      const groupIndex = item.groupIndex ?? 0;
      const groupConfig = getGroupingConfig2(groups2, groupIndex, tickSize);
      const tickXSize = positionSign * groupConfig.tickSize;
      const labelPositionX = positionSign * (groupConfig.tickSize + TICK_LABEL_GAP2);
      return (0, import_jsx_runtime9.jsxs)("g", {
        transform: `translate(0, ${tickOffset})`,
        className: classes.tickContainer,
        "data-group-index": groupIndex,
        children: [!disableTicks && !ignoreTick && showTick && (0, import_jsx_runtime9.jsx)(Tick, _extends({
          x2: tickXSize,
          className: classes.tick
        }, slotProps == null ? void 0 : slotProps.axisTick)), tickLabel !== void 0 && (0, import_jsx_runtime9.jsx)(TickLabel, _extends({
          x: labelPositionX,
          y: yTickLabel
        }, axisTickLabelProps, {
          style: _extends({}, axisTickLabelProps.style, groupConfig.tickLabelStyle),
          text: tickLabel
        }))]
      }, index2);
    })
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/ChartsYAxisImpl.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var _excluded7 = ["axis"];
var _excluded24 = ["scale", "tickNumber", "reverse", "ordinalTimeTicks"];
var YAxisRoot = styled_default(AxisRoot, {
  name: "MuiChartsYAxis",
  slot: "Root"
})({});
function ChartsYAxisImpl(_ref) {
  let {
    axis
  } = _ref, inProps = _objectWithoutPropertiesLoose(_ref, _excluded7);
  const {
    scale: yScale,
    ordinalTimeTicks
  } = axis, settings = _objectWithoutPropertiesLoose(axis, _excluded24);
  const isHydrated = useIsHydrated();
  const themedProps = useThemeProps({
    props: _extends({}, settings, inProps),
    name: "MuiChartsYAxis"
  });
  const defaultizedProps = _extends({}, defaultProps2, themedProps);
  const {
    position,
    disableLine,
    label,
    labelStyle,
    offset: offset2,
    width: axisWidth,
    sx,
    slots,
    slotProps
  } = defaultizedProps;
  const theme = useTheme();
  const classes = useUtilityClasses2(defaultizedProps);
  const {
    left: left2,
    top: top2,
    width,
    height
  } = useDrawingArea();
  const positionSign = position === "right" ? 1 : -1;
  const Line = (slots == null ? void 0 : slots.axisLine) ?? "line";
  const Label = (slots == null ? void 0 : slots.axisLabel) ?? ChartsText;
  const lineProps = useSlotProps_default({
    elementType: Line,
    externalSlotProps: slotProps == null ? void 0 : slotProps.axisLine,
    additionalProps: {
      strokeLinecap: "square"
    },
    ownerState: {}
  });
  const axisLabelProps = useSlotProps_default({
    elementType: Label,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: slotProps == null ? void 0 : slotProps.axisLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: _extends({}, theme.typography.body1, {
        lineHeight: 1,
        fontSize: 14,
        angle: positionSign * 90,
        textAnchor: "middle",
        dominantBaseline: "text-before-edge"
      }, labelStyle)
    },
    ownerState: {}
  });
  if (position === "none") {
    return null;
  }
  const labelRefPoint = {
    x: positionSign * axisWidth,
    y: top2 + height / 2
  };
  const axisLabelHeight = label == null ? 0 : getStringSize(label, axisLabelProps.style).height;
  const domain = yScale.domain();
  const isScaleOrdinal = isOrdinalScale(yScale);
  const skipTickRendering = isScaleOrdinal ? domain.length === 0 : domain.some(isInfinity);
  let children2 = null;
  if (!skipTickRendering) {
    children2 = "groups" in axis && Array.isArray(axis.groups) ? (0, import_jsx_runtime10.jsx)(ChartsGroupedYAxisTicks, _extends({}, inProps)) : (0, import_jsx_runtime10.jsx)(ChartsSingleYAxisTicks, _extends({}, inProps, {
      axisLabelHeight,
      ordinalTimeTicks
    }));
  }
  return (0, import_jsx_runtime10.jsxs)(YAxisRoot, {
    transform: `translate(${position === "right" ? left2 + width + offset2 : left2 - offset2}, 0)`,
    className: classes.root,
    sx,
    children: [!disableLine && (0, import_jsx_runtime10.jsx)(Line, _extends({
      y1: top2,
      y2: top2 + height,
      className: classes.line
    }, lineProps)), children2, label && isHydrated && (0, import_jsx_runtime10.jsx)("g", {
      className: classes.label,
      children: (0, import_jsx_runtime10.jsx)(Label, _extends({}, labelRefPoint, axisLabelProps, {
        text: label
      }))
    })]
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsYAxis/ChartsYAxis.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function ChartsYAxis(inProps) {
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  const axis = yAxis[inProps.axisId ?? yAxisIds[0]];
  if (!axis) {
    warnOnce(`MUI X Charts: No axis found. The axisId "${inProps.axisId}" is probably invalid.`);
    return null;
  }
  return (0, import_jsx_runtime11.jsx)(ChartsYAxisImpl, _extends({}, inProps, {
    axis
  }));
}
true ? ChartsYAxis.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  axis: import_prop_types4.default.oneOf(["y"]),
  /**
   * The id of the axis to render.
   * If undefined, it will be the first defined axis.
   */
  axisId: import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types4.default.object,
  /**
   * If true, the axis line is disabled.
   * @default false
   */
  disableLine: import_prop_types4.default.bool,
  /**
   * If true, the ticks are disabled.
   * @default false
   */
  disableTicks: import_prop_types4.default.bool,
  /**
   * The label of the axis.
   */
  label: import_prop_types4.default.string,
  /**
   * The style applied to the axis label.
   */
  labelStyle: import_prop_types4.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types4.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types4.default.object,
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * Defines which ticks are displayed.
   * Its value can be:
   * - 'auto' In such case the ticks are computed based on axis scale and other parameters.
   * - a filtering function of the form `(value, index) => boolean` which is available only if the axis has "point" scale.
   * - an array containing the values where ticks should be displayed.
   * @see See {@link https://mui.com/x/react-charts/axis/#fixed-tick-positions}
   * @default 'auto'
   */
  tickInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.array, import_prop_types4.default.func]),
  /**
   * Defines which ticks get its label displayed. Its value can be:
   * - 'auto' In such case, labels are displayed if they do not overlap with the previous one.
   * - a filtering function of the form (value, index) => boolean. Warning: the index is tick index, not data ones.
   * @default 'auto'
   */
  tickLabelInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.func]),
  /**
   * The placement of ticks label. Can be the middle of the band, or the tick position.
   * Only used if scale is 'band'.
   * @default 'middle'
   */
  tickLabelPlacement: import_prop_types4.default.oneOf(["middle", "tick"]),
  /**
   * The style applied to ticks text.
   */
  tickLabelStyle: import_prop_types4.default.object,
  /**
   * Maximal step between two ticks.
   * When using time data, the value is assumed to be in ms.
   * Not supported by categorical axis (band, points).
   */
  tickMaxStep: import_prop_types4.default.number,
  /**
   * Minimal step between two ticks.
   * When using time data, the value is assumed to be in ms.
   * Not supported by categorical axis (band, points).
   */
  tickMinStep: import_prop_types4.default.number,
  /**
   * The number of ticks. This number is not guaranteed.
   * Not supported by categorical axis (band, points).
   */
  tickNumber: import_prop_types4.default.number,
  /**
   * The placement of ticks in regard to the band interval.
   * Only used if scale is 'band'.
   * @default 'extremities'
   */
  tickPlacement: import_prop_types4.default.oneOf(["end", "extremities", "middle", "start"]),
  /**
   * The size of the ticks.
   * @default 6
   */
  tickSize: import_prop_types4.default.number
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsAxis/ChartsAxis.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function ChartsAxis(props) {
  const {
    slots,
    slotProps
  } = props;
  const {
    xAxisIds,
    xAxis
  } = useXAxes();
  const {
    yAxisIds,
    yAxis
  } = useYAxes();
  return (0, import_jsx_runtime12.jsxs)(React38.Fragment, {
    children: [xAxisIds.map((axisId) => {
      if (!xAxis[axisId].position || xAxis[axisId].position === "none") {
        return null;
      }
      return (0, import_jsx_runtime12.jsx)(ChartsXAxis, {
        slots,
        slotProps,
        axisId
      }, axisId);
    }), yAxisIds.map((axisId) => {
      if (!yAxis[axisId].position || yAxis[axisId].position === "none") {
        return null;
      }
      return (0, import_jsx_runtime12.jsx)(ChartsYAxis, {
        slots,
        slotProps,
        axisId
      }, axisId);
    })]
  });
}
true ? ChartsAxis.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types5.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types5.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltip.js
var import_prop_types18 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an HTMLElement.`);
  }
  return null;
}

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsItemTooltipContent.js
var import_prop_types10 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/material/esm/Typography/Typography.js
var React40 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js
var import_prop_types6 = __toESM(require_prop_types(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function GlobalStyles(props) {
  return (0, import_jsx_runtime13.jsx)(GlobalStyles_default, {
    ...props,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
true ? GlobalStyles.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types6.default.oneOfType([import_prop_types6.default.array, import_prop_types6.default.func, import_prop_types6.default.number, import_prop_types6.default.object, import_prop_types6.default.string, import_prop_types6.default.bool])
} : void 0;

// ../node_modules/@mui/material/esm/zero-styled/index.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
function internal_createExtendSxProp() {
  return extendSxProp;
}

// ../node_modules/@mui/material/esm/utils/memoTheme.js
var memoTheme = unstable_memoTheme;
var memoTheme_default = memoTheme;

// ../node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js
var React39 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
function DefaultPropsProvider(props) {
  return (0, import_jsx_runtime15.jsx)(DefaultPropsProvider_default, {
    ...props
  });
}
true ? DefaultPropsProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types7.default.node,
  /**
   * @ignore
   */
  value: import_prop_types7.default.object.isRequired
} : void 0;
function useDefaultProps2(params) {
  return useDefaultProps(params);
}

// ../node_modules/@mui/material/esm/utils/capitalize.js
var capitalize_default = capitalize;

// ../node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js
function hasCorrectMainProperty(obj) {
  return typeof obj.main === "string";
}
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
  if (!hasCorrectMainProperty(obj)) {
    return false;
  }
  for (const value of additionalPropertiesToCheck) {
    if (!obj.hasOwnProperty(value) || typeof obj[value] !== "string") {
      return false;
    }
  }
  return true;
}
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
  return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}

// ../node_modules/@mui/material/esm/Typography/typographyClasses.js
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
var typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);

// ../node_modules/@mui/material/esm/Typography/Typography.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var v6Colors = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
var extendSxProp2 = internal_createExtendSxProp();
var useUtilityClasses3 = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
var TypographyRoot = styled_default("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(memoTheme_default(({
  theme
}) => {
  var _a;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== "inherit" && value && typeof value === "object").map(([variant, value]) => ({
      props: {
        variant
      },
      style: value
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        color: (theme.vars || theme).palette[color2].main
      }
    })), ...Object.entries(((_a = theme.palette) == null ? void 0 : _a.text) || {}).filter(([, value]) => typeof value === "string").map(([color2]) => ({
      props: {
        color: `text${capitalize_default(color2)}`
      },
      style: {
        color: (theme.vars || theme).palette.text[color2]
      }
    })), {
      props: ({
        ownerState
      }) => ownerState.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
}));
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
var Typography = React40.forwardRef(function Typography2(inProps, ref) {
  const {
    color: color2,
    ...themeProps
  } = useDefaultProps2({
    props: inProps,
    name: "MuiTypography"
  });
  const isSxColor = !v6Colors[color2];
  const props = extendSxProp2({
    ...themeProps,
    ...isSxColor && {
      color: color2
    }
  });
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping,
    ...other
  } = props;
  const ownerState = {
    ...props,
    align,
    color: color2,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  };
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime16.jsx)(TypographyRoot, {
    as: Component,
    ref,
    className: clsx_default(classes.root, className),
    ...other,
    ownerState,
    style: {
      ...align !== "inherit" && {
        "--Typography-textAlign": align
      },
      ...other.style
    }
  });
});
true ? Typography.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: import_prop_types8.default.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: import_prop_types8.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types8.default.object,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), import_prop_types8.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types8.default.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: import_prop_types8.default.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: import_prop_types8.default.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: import_prop_types8.default.bool,
  /**
   * @ignore
   */
  style: import_prop_types8.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types8.default.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: import_prop_types8.default.object
} : void 0;
var Typography_default = Typography;

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/chartsTooltipClasses.js
function getChartsTooltipUtilityClass(slot) {
  return generateUtilityClass("MuiChartsTooltip", slot);
}
var chartsTooltipClasses = generateUtilityClasses("MuiChartsTooltip", ["root", "paper", "table", "row", "cell", "mark", "markContainer", "labelCell", "valueCell", "axisValueCell"]);
var useUtilityClasses4 = (classes) => {
  const slots = {
    root: ["root"],
    paper: ["paper"],
    table: ["table"],
    row: ["row"],
    cell: ["cell"],
    mark: ["mark"],
    markContainer: ["markContainer"],
    labelCell: ["labelCell"],
    valueCell: ["valueCell"],
    axisValueCell: ["axisValueCell"]
  };
  return composeClasses(slots, getChartsTooltipUtilityClass, classes);
};

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/useItemTooltip.js
function useInternalItemTooltip() {
  var _a, _b, _c;
  const store = useStore2();
  const identifier = store.use(selectorChartsTooltipItem);
  const seriesConfig = store.use(selectorChartSeriesConfig);
  const series = useSeries();
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  const {
    zAxis,
    zAxisIds
  } = useZAxes();
  const {
    rotationAxis,
    rotationAxisIds
  } = useRotationAxes();
  if (!identifier) {
    return null;
  }
  const itemSeries = (_a = series[identifier.type]) == null ? void 0 : _a.series[identifier.seriesId];
  if (!itemSeries) {
    return null;
  }
  const xAxisId = isCartesianSeries(itemSeries) ? itemSeries.xAxisId ?? xAxisIds[0] : void 0;
  const yAxisId = isCartesianSeries(itemSeries) ? itemSeries.yAxisId ?? yAxisIds[0] : void 0;
  const zAxisId = "zAxisId" in itemSeries ? itemSeries.zAxisId ?? zAxisIds[0] : zAxisIds[0];
  const rotationAxisId = rotationAxisIds[0];
  const getColor5 = ((_c = (_b = seriesConfig[itemSeries.type]).colorProcessor) == null ? void 0 : _c.call(_b, itemSeries, xAxisId !== void 0 ? xAxis[xAxisId] : void 0, yAxisId !== void 0 ? yAxis[yAxisId] : void 0, zAxisId !== void 0 ? zAxis[zAxisId] : void 0)) ?? (() => "");
  const axesConfig = {};
  if (xAxisId !== void 0) {
    axesConfig.x = xAxis[xAxisId];
  }
  if (yAxisId !== void 0) {
    axesConfig.y = yAxis[yAxisId];
  }
  if (rotationAxisId !== void 0) {
    axesConfig.rotation = rotationAxis[rotationAxisId];
  }
  return seriesConfig[itemSeries.type].tooltipGetter({
    series: itemSeries,
    axesConfig,
    getColor: getColor5,
    identifier
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltipTable.js
var ChartsTooltipPaper = styled_default("div", {
  name: "MuiChartsTooltip",
  slot: "Container",
  overridesResolver: (props, styles) => styles.paper
  // FIXME: Inconsistent naming with slot
})(({
  theme
}) => {
  var _a;
  return {
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    borderRadius: (_a = (theme.vars || theme).shape) == null ? void 0 : _a.borderRadius,
    border: `solid ${(theme.vars || theme).palette.divider} 1px`
  };
});
var ChartsTooltipTable = styled_default("table", {
  name: "MuiChartsTooltip",
  slot: "Table"
})(({
  theme
}) => ({
  borderSpacing: 0,
  [`& .${chartsTooltipClasses.markContainer}`]: {
    display: "inline-block",
    width: `calc(20px + ${theme.spacing(1.5)})`,
    verticalAlign: "middle"
  },
  "& caption": {
    borderBottom: `solid ${(theme.vars || theme).palette.divider} 1px`,
    padding: theme.spacing(0.5, 1.5),
    textAlign: "start",
    whiteSpace: "nowrap",
    "& span": {
      marginRight: theme.spacing(1.5)
    }
  }
}));
var ChartsTooltipRow = styled_default("tr", {
  name: "MuiChartsTooltip",
  slot: "Row"
})(({
  theme
}) => ({
  "tr:first-of-type& td": {
    paddingTop: theme.spacing(0.5)
  },
  "tr:last-of-type& td": {
    paddingBottom: theme.spacing(0.5)
  }
}));
var ChartsTooltipCell = styled_default(Typography_default, {
  name: "MuiChartsTooltip",
  slot: "Cell"
})(({
  theme
}) => ({
  verticalAlign: "middle",
  color: (theme.vars || theme).palette.text.secondary,
  textAlign: "start",
  [`&.${chartsTooltipClasses.cell}`]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  [`&.${chartsTooltipClasses.labelCell}`]: {
    whiteSpace: "nowrap",
    fontWeight: theme.typography.fontWeightRegular
  },
  [`&.${chartsTooltipClasses.valueCell}, &.${chartsTooltipClasses.axisValueCell}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium
  },
  [`&.${chartsTooltipClasses.valueCell}`]: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5)
  },
  "td:first-of-type&, th:first-of-type&": {
    paddingLeft: theme.spacing(1.5)
  },
  "td:last-of-type&, th:last-of-type&": {
    paddingRight: theme.spacing(1.5)
  }
}));

// ../node_modules/@mui/x-charts/esm/ChartsLabel/ChartsLabelMark.js
var React42 = __toESM(require_react(), 1);
var import_prop_types9 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsLabel/labelMarkClasses.js
function getLabelMarkUtilityClass(slot) {
  return generateUtilityClass("MuiChartsLabelMark", slot);
}
var labelMarkClasses = generateUtilityClasses("MuiChartsLabelMark", ["root", "line", "square", "circle", "mask", "fill"]);
var useUtilityClasses5 = (props) => {
  const {
    type
  } = props;
  const slots = {
    root: typeof type === "function" ? ["root"] : ["root", type],
    mask: ["mask"],
    fill: ["fill"]
  };
  return composeClasses(slots, getLabelMarkUtilityClass, props.classes);
};

// ../node_modules/@mui/x-charts/esm/internals/consumeThemeProps.js
var React41 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var consumeThemeProps = (name, options, InComponent) => React41.forwardRef(function ConsumeThemeInternal(props, ref) {
  var _a;
  const themedProps = useThemeProps({
    props,
    // eslint-disable-next-line material-ui/mui-name-matches-component-name
    name
  });
  const defaultProps4 = typeof options.defaultProps === "function" ? options.defaultProps(themedProps) : options.defaultProps ?? {};
  const outProps = resolveProps(defaultProps4, themedProps);
  const theme = useTheme();
  const classes = (_a = options.classesResolver) == null ? void 0 : _a.call(options, outProps, theme);
  const OutComponent = React41.forwardRef(InComponent);
  if (true) OutComponent.displayName = "OutComponent";
  if (true) {
    OutComponent.displayName = `consumeThemeProps(${name})`;
  }
  return (0, import_jsx_runtime17.jsx)(OutComponent, _extends({}, outProps, {
    classes,
    ref
  }));
});
if (true) consumeThemeProps.displayName = "consumeThemeProps";

// ../node_modules/@mui/x-charts/esm/ChartsLabel/ChartsLabelMark.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var _excluded8 = ["type", "color", "className", "classes"];
var Root = styled_default("div", {
  name: "MuiChartsLabelMark",
  slot: "Root"
})(() => {
  return {
    display: "flex",
    width: 14,
    height: 14,
    [`&.${labelMarkClasses.line}`]: {
      width: 16,
      height: "unset",
      alignItems: "center",
      [`.${labelMarkClasses.mask}`]: {
        height: 4,
        width: "100%",
        borderRadius: 1,
        overflow: "hidden"
      }
    },
    [`&.${labelMarkClasses.square}`]: {
      height: 13,
      width: 13,
      borderRadius: 2,
      overflow: "hidden"
    },
    [`&.${labelMarkClasses.circle}`]: {
      height: 15,
      width: 15
    },
    svg: {
      display: "block"
    },
    [`& .${labelMarkClasses.mask} > *`]: {
      height: "100%",
      width: "100%"
    },
    [`& .${labelMarkClasses.mask}`]: {
      height: "100%",
      width: "100%"
    }
  };
});
var ChartsLabelMark = consumeThemeProps("MuiChartsLabelMark", {
  defaultProps: {
    type: "square"
  },
  classesResolver: useUtilityClasses5
}, function ChartsLabelMark2(props, ref) {
  const {
    type,
    color: color2,
    className,
    classes
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const Component = type;
  return (0, import_jsx_runtime18.jsx)(Root, _extends({
    className: clsx_default(classes == null ? void 0 : classes.root, className),
    ownerState: props,
    "aria-hidden": "true",
    ref
  }, other, {
    children: (0, import_jsx_runtime18.jsx)("div", {
      className: classes == null ? void 0 : classes.mask,
      children: typeof Component === "function" ? (0, import_jsx_runtime18.jsx)(Component, {
        className: classes == null ? void 0 : classes.fill,
        color: color2
      }) : (0, import_jsx_runtime18.jsx)("svg", {
        viewBox: "0 0 24 24",
        preserveAspectRatio: type === "line" ? "none" : void 0,
        children: type === "circle" ? (0, import_jsx_runtime18.jsx)("circle", {
          className: classes == null ? void 0 : classes.fill,
          r: "12",
          cx: "12",
          cy: "12",
          fill: color2
        }) : (0, import_jsx_runtime18.jsx)("rect", {
          className: classes == null ? void 0 : classes.fill,
          width: "24",
          height: "24",
          fill: color2
        })
      })
    })
  }));
});
true ? ChartsLabelMark.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types9.default.object,
  /**
   * The color of the mark.
   */
  color: import_prop_types9.default.string,
  /**
   * The type of the mark.
   * @default 'square'
   */
  type: import_prop_types9.default.oneOf(["circle", "line", "square"])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsItemTooltipContent.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
function ChartsItemTooltipContent(props) {
  const {
    classes: propClasses,
    sx
  } = props;
  const tooltipData = useInternalItemTooltip();
  const classes = useUtilityClasses4(propClasses);
  if (!tooltipData) {
    return null;
  }
  if ("values" in tooltipData) {
    const {
      label: seriesLabel,
      color: color3,
      markType: markType2
    } = tooltipData;
    return (0, import_jsx_runtime19.jsx)(ChartsTooltipPaper, {
      sx,
      className: classes.paper,
      children: (0, import_jsx_runtime19.jsxs)(ChartsTooltipTable, {
        className: classes.table,
        children: [(0, import_jsx_runtime19.jsxs)(Typography_default, {
          component: "caption",
          children: [(0, import_jsx_runtime19.jsx)("div", {
            className: classes.markContainer,
            children: (0, import_jsx_runtime19.jsx)(ChartsLabelMark, {
              type: markType2,
              color: color3,
              className: classes.mark
            })
          }), seriesLabel]
        }), (0, import_jsx_runtime19.jsx)("tbody", {
          children: tooltipData.values.map(({
            formattedValue: formattedValue2,
            label: label2
          }) => (0, import_jsx_runtime19.jsxs)(ChartsTooltipRow, {
            className: classes.row,
            children: [(0, import_jsx_runtime19.jsx)(ChartsTooltipCell, {
              className: clsx_default(classes.labelCell, classes.cell),
              component: "th",
              children: label2
            }), (0, import_jsx_runtime19.jsx)(ChartsTooltipCell, {
              className: clsx_default(classes.valueCell, classes.cell),
              component: "td",
              children: formattedValue2
            })]
          }, label2))
        })]
      })
    });
  }
  const {
    color: color2,
    label,
    formattedValue,
    markType
  } = tooltipData;
  return (0, import_jsx_runtime19.jsx)(ChartsTooltipPaper, {
    sx,
    className: classes.paper,
    children: (0, import_jsx_runtime19.jsx)(ChartsTooltipTable, {
      className: classes.table,
      children: (0, import_jsx_runtime19.jsx)("tbody", {
        children: (0, import_jsx_runtime19.jsxs)(ChartsTooltipRow, {
          className: classes.row,
          children: [(0, import_jsx_runtime19.jsxs)(ChartsTooltipCell, {
            className: clsx_default(classes.labelCell, classes.cell),
            component: "th",
            children: [(0, import_jsx_runtime19.jsx)("div", {
              className: classes.markContainer,
              children: (0, import_jsx_runtime19.jsx)(ChartsLabelMark, {
                type: markType,
                color: color2,
                className: classes.mark
              })
            }), label]
          }), (0, import_jsx_runtime19.jsx)(ChartsTooltipCell, {
            className: clsx_default(classes.valueCell, classes.cell),
            component: "td",
            children: formattedValue
          })]
        })
      })
    })
  });
}
true ? ChartsItemTooltipContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types10.default.object,
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsAxisTooltipContent.js
var import_prop_types11 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartSeries/useColorProcessor.js
var React43 = __toESM(require_react(), 1);
function useColorProcessor(seriesType) {
  const store = useStore2();
  const seriesConfig = store.use(selectorChartSeriesConfig);
  const colorProcessors = React43.useMemo(() => {
    const rep = {};
    Object.keys(seriesConfig).forEach((seriesT) => {
      rep[seriesT] = seriesConfig[seriesT].colorProcessor;
    });
    return rep;
  }, [seriesConfig]);
  if (!seriesType) {
    return colorProcessors;
  }
  return colorProcessors[seriesType];
}

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/utils.js
var React44 = __toESM(require_react(), 1);

// ../node_modules/@mui/material/esm/useMediaQuery/index.js
var useMediaQuery = unstable_createUseMediaQuery({
  themeId: identifier_default
});
var useMediaQuery_default = useMediaQuery;

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/utils.js
function usePointerType() {
  const svgRef = useSvgRef();
  const [pointerType, setPointerType] = React44.useState(null);
  React44.useEffect(() => {
    const element = svgRef.current;
    if (element === null) {
      return () => {
      };
    }
    const handleOut = (event) => {
      if (event.pointerType !== "mouse") {
        setPointerType(null);
      }
    };
    const handleEnter = (event) => {
      setPointerType({
        pointerType: event.pointerType
      });
    };
    element.addEventListener("pointerenter", handleEnter);
    element.addEventListener("pointerup", handleOut);
    return () => {
      element.removeEventListener("pointerenter", handleEnter);
      element.removeEventListener("pointerup", handleOut);
    };
  }, [svgRef]);
  return pointerType;
}
function utcFormatter(v) {
  if (v instanceof Date) {
    return v.toUTCString();
  }
  return v.toLocaleString();
}
var mainPointerFineMediaQuery = "@media (pointer: fine)";
var useIsFineMainPointer = () => {
  return useMediaQuery_default(mainPointerFineMediaQuery, {
    defaultMatches: true
  });
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarInteraction.selectors.js
var optionalGetAxisId = (_, id) => id;
var optionalGetAxisIds = (_, ids) => ids;
function indexGetter2(value, axes, ids) {
  return Array.isArray(ids) ? ids.map((id) => getAxisIndex2(axes.axis[id], value)) : getAxisIndex2(axes.axis[ids], value);
}
var selectorChartsInteractionRotationAngle = createSelector2(selectorChartsInteractionPointerX, selectorChartsInteractionPointerY, selectorChartPolarCenter, (x2, y2, center) => {
  if (x2 === null || y2 === null) {
    return null;
  }
  return generateSvg2rotation(center)(x2, y2);
});
var selectorChartsInteractionRotationAxisIndex = createSelector2(selectorChartsInteractionRotationAngle, selectorChartRotationAxis, optionalGetAxisId, (rotation, rotationAxis, id = rotationAxis.axisIds[0]) => rotation === null ? null : indexGetter2(rotation, rotationAxis, id));
var selectorChartsInteractionRotationAxisIndexes = createSelector2(selectorChartsInteractionRotationAngle, selectorChartRotationAxis, optionalGetAxisIds, (rotation, rotationAxis, ids = rotationAxis.axisIds) => rotation === null ? null : indexGetter2(rotation, rotationAxis, ids));
var selectorChartsInteractionRotationAxisValue = createSelector2(selectorChartRotationAxis, selectorChartsInteractionRotationAxisIndex, optionalGetAxisId, (rotationAxis, rotationIndex, id = rotationAxis.axisIds[0]) => {
  var _a;
  if (rotationIndex === null || rotationIndex === -1 || rotationAxis.axisIds.length === 0) {
    return null;
  }
  const data = (_a = rotationAxis.axis[id]) == null ? void 0 : _a.data;
  if (!data) {
    return null;
  }
  return data[rotationIndex];
});
var selectorChartsInteractionRotationAxisValues = createSelector2(selectorChartRotationAxis, selectorChartsInteractionRotationAxisIndexes, optionalGetAxisIds, (rotationAxis, rotationIndexes, ids = rotationAxis.axisIds) => {
  if (rotationIndexes === null) {
    return null;
  }
  return ids.map((id, axisIndex) => {
    var _a;
    const rotationIndex = rotationIndexes[axisIndex];
    if (rotationIndex === -1) {
      return null;
    }
    return (_a = rotationAxis.axis[id].data) == null ? void 0 : _a[rotationIndex];
  });
});
var selectorChartsInteractionTooltipRotationAxes = createSelectorMemoizedWithOptions({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: isDeepEqual
  }
})(selectorChartsInteractionRotationAxisIndexes, selectorChartRotationAxis, (indexes2, axes) => {
  if (indexes2 === null) {
    return [];
  }
  return axes.axisIds.map((axisId, axisIndex) => ({
    axisId,
    dataIndex: indexes2[axisIndex]
  })).filter(({
    axisId,
    dataIndex
  }) => axes.axis[axisId].triggerTooltip && dataIndex >= 0);
});
var selectorChartsInteractionPolarAxisTooltip = createSelector2(selectorChartsInteractionTooltipRotationAxes, (rotationTooltip) => rotationTooltip.length > 0);

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/useAxisTooltip.js
function defaultAxisTooltipConfig(axis, dataIndex, axisDirection) {
  var _a;
  const axisValue = ((_a = axis.data) == null ? void 0 : _a[dataIndex]) ?? null;
  const axisFormatter = axis.valueFormatter ?? ((v) => axis.scaleType === "utc" ? utcFormatter(v) : v.toLocaleString());
  const axisFormattedValue = axisFormatter(axisValue, {
    location: "tooltip",
    scale: axis.scale
  });
  return {
    axisDirection,
    axisId: axis.id,
    mainAxis: axis,
    dataIndex,
    axisValue,
    axisFormattedValue,
    seriesItems: []
  };
}
function useAxisTooltip(params = {}) {
  const {
    multipleAxes,
    directions
  } = params;
  const defaultXAxis = useXAxis();
  const defaultYAxis = useYAxis();
  const defaultRotationAxis = useRotationAxis();
  const store = useStore2();
  const tooltipXAxes = store.use(selectorChartsInteractionTooltipXAxes);
  const tooltipYAxes = store.use(selectorChartsInteractionTooltipYAxes);
  const tooltipRotationAxes = store.use(selectorChartsInteractionTooltipRotationAxes);
  const series = useSeries();
  const {
    xAxis
  } = useXAxes();
  const {
    yAxis
  } = useYAxes();
  const {
    zAxis,
    zAxisIds
  } = useZAxes();
  const {
    rotationAxis
  } = useRotationAxes();
  const colorProcessors = useColorProcessor();
  if (tooltipXAxes.length === 0 && tooltipYAxes.length === 0 && tooltipRotationAxes.length === 0) {
    return null;
  }
  const tooltipAxes = [];
  if (directions === void 0 || directions.includes("x")) {
    tooltipXAxes.forEach(({
      axisId,
      dataIndex
    }) => {
      if (!multipleAxes && tooltipAxes.length > 1) {
        return;
      }
      tooltipAxes.push(defaultAxisTooltipConfig(xAxis[axisId], dataIndex, "x"));
    });
  }
  if (directions === void 0 || directions.includes("y")) {
    tooltipYAxes.forEach(({
      axisId,
      dataIndex
    }) => {
      if (!multipleAxes && tooltipAxes.length > 1) {
        return;
      }
      tooltipAxes.push(defaultAxisTooltipConfig(yAxis[axisId], dataIndex, "y"));
    });
  }
  if (directions === void 0 || directions.includes("rotation")) {
    tooltipRotationAxes.forEach(({
      axisId,
      dataIndex
    }) => {
      if (!multipleAxes && tooltipAxes.length > 1) {
        return;
      }
      tooltipAxes.push(defaultAxisTooltipConfig(rotationAxis[axisId], dataIndex, "rotation"));
    });
  }
  Object.keys(series).filter(isCartesianSeriesType).forEach((seriesType) => {
    const seriesOfType = series[seriesType];
    if (!seriesOfType) {
      return [];
    }
    return seriesOfType.seriesOrder.forEach((seriesId) => {
      var _a;
      const seriesToAdd = seriesOfType.series[seriesId];
      const providedXAxisId = seriesToAdd.xAxisId ?? defaultXAxis.id;
      const providedYAxisId = seriesToAdd.yAxisId ?? defaultYAxis.id;
      const tooltipItemIndex = tooltipAxes.findIndex(({
        axisDirection,
        axisId
      }) => axisDirection === "x" && axisId === providedXAxisId || axisDirection === "y" && axisId === providedYAxisId);
      if (tooltipItemIndex >= 0) {
        const zAxisId = "zAxisId" in seriesToAdd ? seriesToAdd.zAxisId : zAxisIds[0];
        const {
          dataIndex
        } = tooltipAxes[tooltipItemIndex];
        const color2 = ((_a = colorProcessors[seriesType]) == null ? void 0 : _a.call(colorProcessors, seriesToAdd, xAxis[providedXAxisId], yAxis[providedYAxisId], zAxisId ? zAxis[zAxisId] : void 0)(dataIndex)) ?? "";
        const value = seriesToAdd.data[dataIndex] ?? null;
        const formattedValue = seriesToAdd.valueFormatter(value, {
          dataIndex
        });
        const formattedLabel = getLabel(seriesToAdd.label, "tooltip") ?? null;
        tooltipAxes[tooltipItemIndex].seriesItems.push({
          seriesId,
          color: color2,
          value,
          formattedValue,
          formattedLabel,
          markType: seriesToAdd.labelMarkType
        });
      }
    });
  });
  Object.keys(series).filter(isPolarSeriesType).forEach((seriesType) => {
    const seriesOfType = series[seriesType];
    if (!seriesOfType) {
      return [];
    }
    return seriesOfType.seriesOrder.forEach((seriesId) => {
      var _a;
      const seriesToAdd = seriesOfType.series[seriesId];
      const providedRotationAxisId = (
        // @ts-expect-error Should be fixed when we introduce a polar series with a rotationAxisId
        seriesToAdd.rotationAxisId ?? (defaultRotationAxis == null ? void 0 : defaultRotationAxis.id)
      );
      const tooltipItemIndex = tooltipAxes.findIndex(({
        axisDirection,
        axisId
      }) => axisDirection === "rotation" && axisId === providedRotationAxisId);
      if (tooltipItemIndex >= 0) {
        const {
          dataIndex
        } = tooltipAxes[tooltipItemIndex];
        const color2 = ((_a = colorProcessors[seriesType]) == null ? void 0 : _a.call(colorProcessors, seriesToAdd)(dataIndex)) ?? "";
        const value = seriesToAdd.data[dataIndex] ?? null;
        const formattedValue = seriesToAdd.valueFormatter(value, {
          dataIndex
        });
        const formattedLabel = getLabel(seriesToAdd.label, "tooltip") ?? null;
        tooltipAxes[tooltipItemIndex].seriesItems.push({
          seriesId,
          color: color2,
          value,
          formattedValue,
          formattedLabel,
          markType: seriesToAdd.labelMarkType
        });
      }
    });
  });
  if (!multipleAxes) {
    return tooltipAxes.length === 0 ? tooltipAxes[0] : null;
  }
  return tooltipAxes;
}

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/useAxesTooltip.js
function useAxesTooltip(params) {
  return useAxisTooltip(_extends({}, params, {
    multipleAxes: true
  }));
}

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsAxisTooltipContent.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
function ChartsAxisTooltipContent(props) {
  const classes = useUtilityClasses4(props.classes);
  const tooltipData = useAxesTooltip();
  if (tooltipData === null) {
    return null;
  }
  return (0, import_jsx_runtime20.jsx)(ChartsTooltipPaper, {
    sx: props.sx,
    className: classes.paper,
    children: tooltipData.map(({
      axisId,
      mainAxis,
      axisValue,
      axisFormattedValue,
      seriesItems
    }) => {
      return (0, import_jsx_runtime20.jsxs)(ChartsTooltipTable, {
        className: classes.table,
        children: [axisValue != null && !mainAxis.hideTooltip && (0, import_jsx_runtime20.jsx)(Typography_default, {
          component: "caption",
          children: axisFormattedValue
        }), (0, import_jsx_runtime20.jsx)("tbody", {
          children: seriesItems.map(({
            seriesId,
            color: color2,
            formattedValue,
            formattedLabel,
            markType
          }) => {
            if (formattedValue == null) {
              return null;
            }
            return (0, import_jsx_runtime20.jsxs)(ChartsTooltipRow, {
              className: classes.row,
              children: [(0, import_jsx_runtime20.jsxs)(ChartsTooltipCell, {
                className: clsx_default(classes.labelCell, classes.cell),
                component: "th",
                children: [(0, import_jsx_runtime20.jsx)("div", {
                  className: classes.markContainer,
                  children: (0, import_jsx_runtime20.jsx)(ChartsLabelMark, {
                    type: markType,
                    color: color2,
                    className: classes.mark
                  })
                }), formattedLabel || null]
              }), (0, import_jsx_runtime20.jsx)(ChartsTooltipCell, {
                className: clsx_default(classes.valueCell, classes.cell),
                component: "td",
                children: formattedValue
              })]
            }, seriesId);
          })
        })]
      }, axisId);
    })
  });
}
true ? ChartsAxisTooltipContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types11.default.object,
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltipContainer.js
var React50 = __toESM(require_react(), 1);
var import_prop_types17 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/utils/esm/refType/refType.js
var import_prop_types12 = __toESM(require_prop_types(), 1);
var refType = import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object]);
var refType_default = refType;

// ../node_modules/@mui/material/esm/Popper/Popper.js
var import_prop_types15 = __toESM(require_prop_types(), 1);
var React48 = __toESM(require_react(), 1);

// ../node_modules/@mui/material/esm/Popper/BasePopper.js
var React47 = __toESM(require_react(), 1);

// ../node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// ../node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// ../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// ../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument2 = node.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node;
}

// ../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// ../node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// ../node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// ../node_modules/@popperjs/core/lib/utils/math.js
var max3 = Math.max;
var min3 = Math.min;
var round = Math.round;

// ../node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// ../node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// ../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}

// ../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// ../node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// ../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// ../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// ../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// ../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// ../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css2 = getComputedStyle(currentNode);
    if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// ../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// ../node_modules/@popperjs/core/lib/utils/within.js
function within(min4, value, max4) {
  return max3(min4, min3(value, max4));
}
function withinMaxClamp(min4, value, max4) {
  var v = within(min4, value, max4);
  return v > max4 ? max4 : v;
}

// ../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// ../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// ../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// ../node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min4 = paddingObject[minProp];
  var max4 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min4, center, max4);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// ../node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// ../node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// ../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// ../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// ../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// ../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// ../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// ../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}

// ../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max3(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max3(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x2 += max3(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}

// ../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// ../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// ../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// ../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// ../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max3(rect.top, accRect.top);
    accRect.right = min3(rect.right, accRect.right);
    accRect.bottom = min3(rect.bottom, accRect.bottom);
    accRect.left = max3(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// ../node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// ../node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// ../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b) {
    return overflows[a2] - overflows[b];
  });
}

// ../node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// ../node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// ../node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// ../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// ../node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// ../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min4 = offset2 + overflow[mainSide];
    var max4 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min3(min4, tetherMin) : min4, offset2, tether ? max3(max4, tetherMax) : max4);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// ../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// ../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// ../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// ../node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map4 = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map4.set(modifier.name, modifier);
  });
  function sort3(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map4.get(dep);
        if (depModifier) {
          sort3(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort3(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// ../node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// ../node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// ../node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// ../node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// ../node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// ../node_modules/@mui/material/esm/Popper/BasePopper.js
var import_prop_types14 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/material/esm/Portal/Portal.js
var React46 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var import_prop_types13 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/utils/esm/setRef/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// ../node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var React45 = __toESM(require_react(), 1);
function getReactElementRef(element) {
  var _a;
  if (parseInt(React45.version, 10) >= 19) {
    return ((_a = element == null ? void 0 : element.props) == null ? void 0 : _a.ref) || null;
  }
  return (element == null ? void 0 : element.ref) || null;
}

// ../node_modules/@mui/material/esm/Portal/Portal.js
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React46.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children: children2,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React46.useState(null);
  const handleRef = useForkRef(React46.isValidElement(children2) ? getReactElementRef(children2) : null, forwardedRef);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (React46.isValidElement(children2)) {
      const newProps = {
        ref: handleRef
      };
      return React46.cloneElement(children2, newProps);
    }
    return children2;
  }
  return mountNode ? ReactDOM.createPortal(children2, mountNode) : mountNode;
});
true ? Portal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types13.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types13.default.oneOfType([HTMLElementType, import_prop_types13.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types13.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
var Portal_default = Portal;

// ../node_modules/@mui/material/esm/Popper/popperClasses.js
function getPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPopper", slot);
}
var popperClasses = generateUtilityClasses("MuiPopper", ["root"]);

// ../node_modules/@mui/material/esm/Popper/BasePopper.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
function isHTMLElement2(element) {
  return element.nodeType !== void 0;
}
function isVirtualElement(element) {
  return !isHTMLElement2(element);
}
var useUtilityClasses6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPopperUtilityClass, classes);
};
var defaultPopperOptions = {};
var PopperTooltip = React47.forwardRef(function PopperTooltip2(props, forwardedRef) {
  const {
    anchorEl,
    children: children2,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps,
    // @ts-ignore internal logic
    ownerState: ownerStateProp,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...other
  } = props;
  const tooltipRef = React47.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React47.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React47.useRef(handlePopperRef);
  useEnhancedEffect_default(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React47.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = React47.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React47.useState(resolveAnchorEl(anchorEl));
  React47.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React47.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect_default(() => {
    if (!resolvedAnchorElement || !open) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    if (true) {
      if (resolvedAnchorElement && isHTMLElement2(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
        const box = resolvedAnchorElement.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper2 = createPopper3(resolvedAnchorElement, tooltipRef.current, {
      placement: rtlPlacement,
      ...popperOptions,
      modifiers: popperModifiers
    });
    handlePopperRefRef.current(popper2);
    return () => {
      popper2.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses6(props);
  const Root4 = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root4,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return (0, import_jsx_runtime21.jsx)(Root4, {
    ...rootProps,
    children: typeof children2 === "function" ? children2(childProps) : children2
  });
});
var Popper = React47.forwardRef(function Popper2(props, forwardedRef) {
  const {
    anchorEl,
    children: children2,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const [exited, setExited] = React47.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? "none" : void 0;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return (0, import_jsx_runtime21.jsx)(Portal_default, {
    disablePortal,
    container,
    children: (0, import_jsx_runtime21.jsx)(PopperTooltip, {
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots,
      ...other,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display,
        ...style
      },
      TransitionProps: transitionProps,
      children: children2
    })
  });
});
true ? Popper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(import_prop_types14.default.oneOfType([HTMLElementType, import_prop_types14.default.object, import_prop_types14.default.func]), (props) => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== "function" || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join("\n"));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: import_prop_types14.default.oneOfType([import_prop_types14.default.node, import_prop_types14.default.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types14.default.oneOfType([HTMLElementType, import_prop_types14.default.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types14.default.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types14.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types14.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types14.default.arrayOf(import_prop_types14.default.shape({
    data: import_prop_types14.default.object,
    effect: import_prop_types14.default.func,
    enabled: import_prop_types14.default.bool,
    fn: import_prop_types14.default.func,
    name: import_prop_types14.default.any,
    options: import_prop_types14.default.object,
    phase: import_prop_types14.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types14.default.arrayOf(import_prop_types14.default.string),
    requiresIfExists: import_prop_types14.default.arrayOf(import_prop_types14.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types14.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types14.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types14.default.shape({
    modifiers: import_prop_types14.default.array,
    onFirstUpdate: import_prop_types14.default.func,
    placement: import_prop_types14.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types14.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types14.default.shape({
    root: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types14.default.shape({
    root: import_prop_types14.default.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types14.default.bool
} : void 0;
var BasePopper_default = Popper;

// ../node_modules/@mui/material/esm/Popper/Popper.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var PopperRoot = styled_default(BasePopper_default, {
  name: "MuiPopper",
  slot: "Root"
})({});
var Popper3 = React48.forwardRef(function Popper4(inProps, ref) {
  const isRtl = useRtl();
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiPopper"
  });
  const {
    anchorEl,
    component,
    components,
    componentsProps,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    slots,
    slotProps,
    ...other
  } = props;
  const RootComponent = (slots == null ? void 0 : slots.root) ?? (components == null ? void 0 : components.Root);
  const otherProps = {
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    ...other
  };
  return (0, import_jsx_runtime22.jsx)(PopperRoot, {
    as: component,
    direction: isRtl ? "rtl" : "ltr",
    slots: {
      root: RootComponent
    },
    slotProps: slotProps ?? componentsProps,
    ...otherProps,
    ref
  });
});
true ? Popper3.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: import_prop_types15.default.oneOfType([HTMLElementType, import_prop_types15.default.object, import_prop_types15.default.func]),
  /**
   * Popper render function or node.
   */
  children: import_prop_types15.default.oneOfType([import_prop_types15.default.node, import_prop_types15.default.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types15.default.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: import_prop_types15.default.shape({
    Root: import_prop_types15.default.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: import_prop_types15.default.shape({
    root: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types15.default.oneOfType([HTMLElementType, import_prop_types15.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types15.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types15.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types15.default.arrayOf(import_prop_types15.default.shape({
    data: import_prop_types15.default.object,
    effect: import_prop_types15.default.func,
    enabled: import_prop_types15.default.bool,
    fn: import_prop_types15.default.func,
    name: import_prop_types15.default.any,
    options: import_prop_types15.default.object,
    phase: import_prop_types15.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types15.default.arrayOf(import_prop_types15.default.string),
    requiresIfExists: import_prop_types15.default.arrayOf(import_prop_types15.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types15.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types15.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types15.default.shape({
    modifiers: import_prop_types15.default.array,
    onFirstUpdate: import_prop_types15.default.func,
    placement: import_prop_types15.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types15.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types15.default.shape({
    root: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types15.default.shape({
    root: import_prop_types15.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types15.default.bool
} : void 0;
var Popper_default = Popper3;

// ../node_modules/@mui/material/esm/NoSsr/NoSsr.js
var React49 = __toESM(require_react(), 1);
var import_prop_types16 = __toESM(require_prop_types(), 1);
function NoSsr(props) {
  const {
    children: children2,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React49.useState(false);
  useEnhancedEffect_default(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React49.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return mountedState ? children2 : fallback;
}
true ? NoSsr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: import_prop_types16.default.node,
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   * @default false
   */
  defer: import_prop_types16.default.bool,
  /**
   * The fallback content to display.
   * @default null
   */
  fallback: import_prop_types16.default.node
} : void 0;
if (true) {
  NoSsr["propTypes"] = exactProp(NoSsr.propTypes);
}
var NoSsr_default = NoSsr;

// ../node_modules/@mui/x-internals/esm/rafThrottle/rafThrottle.js
function rafThrottle(fn2) {
  let lastArgs;
  let rafRef;
  const later = () => {
    rafRef = null;
    fn2(...lastArgs);
  };
  function throttled(...args) {
    lastArgs = args;
    if (!rafRef) {
      rafRef = requestAnimationFrame(later);
    }
  }
  throttled.clear = () => {
    if (rafRef) {
      cancelAnimationFrame(rafRef);
      rafRef = null;
    }
  };
  return throttled;
}

// ../node_modules/@mui/x-charts/esm/hooks/useAxisSystem.js
function useAxisSystem() {
  const store = useStore2();
  const rawRotationAxis = store.use(selectorChartRawRotationAxis);
  const rawXAxis = store.use(selectorChartRawXAxis);
  if (rawRotationAxis !== void 0) {
    return "polar";
  }
  if (rawXAxis !== void 0) {
    return "cartesian";
  }
  return "none";
}

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltipContainer.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var _excluded9 = ["trigger", "position", "anchor", "classes", "children"];
var selectorReturnFalse = () => false;
var selectorReturnNull = () => null;
function getIsOpenSelector(trigger, axisSystem, shouldPreventBecauseOfBrush) {
  if (shouldPreventBecauseOfBrush) {
    return selectorReturnFalse;
  }
  if (trigger === "item") {
    return selectorChartsTooltipItemIsDefined;
  }
  if (axisSystem === "polar") {
    return selectorChartsInteractionPolarAxisTooltip;
  }
  if (axisSystem === "cartesian") {
    return selectorChartsInteractionAxisTooltip;
  }
  return selectorReturnFalse;
}
var ChartsTooltipRoot = styled_default(Popper_default, {
  name: "MuiChartsTooltip",
  slot: "Root"
})(({
  theme
}) => ({
  pointerEvents: "none",
  zIndex: theme.zIndex.modal
}));
function ChartsTooltipContainer(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiChartsTooltipContainer"
  });
  const {
    trigger = "axis",
    position,
    anchor = "pointer",
    classes: propClasses,
    children: children2
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const svgRef = useSvgRef();
  const classes = useUtilityClasses4(propClasses);
  const pointerType = usePointerType();
  const isFineMainPointer = useIsFineMainPointer();
  const popperRef = React50.useRef(null);
  const positionRef = useLazyRef(() => ({
    x: 0,
    y: 0
  }));
  const axisSystem = useAxisSystem();
  const store = useStore2();
  const shouldPreventBecauseOfBrush = store.use(selectorBrushShouldPreventTooltip);
  const isOpen = store.use(getIsOpenSelector(trigger, axisSystem, shouldPreventBecauseOfBrush));
  const lastInteraction = store.use(selectorChartsLastInteraction);
  const computedAnchor = lastInteraction === "keyboard" ? "node" : anchor;
  const itemPosition = store.use(trigger === "item" && computedAnchor === "node" ? selectorChartsTooltipItemPosition : selectorReturnNull, position);
  React50.useEffect(() => {
    const svgElement = svgRef.current;
    if (svgElement === null) {
      return () => {
      };
    }
    if (itemPosition !== null) {
      const positionUpdate = rafThrottle(() => {
        var _a;
        positionRef.current = {
          x: svgElement.getBoundingClientRect().left + ((itemPosition == null ? void 0 : itemPosition.x) ?? 0),
          y: svgElement.getBoundingClientRect().top + ((itemPosition == null ? void 0 : itemPosition.y) ?? 0)
        };
        (_a = popperRef.current) == null ? void 0 : _a.update();
      });
      positionUpdate();
      return () => positionUpdate.clear();
    }
    const pointerUpdate = rafThrottle((x2, y2) => {
      var _a;
      positionRef.current = {
        x: x2,
        y: y2
      };
      (_a = popperRef.current) == null ? void 0 : _a.update();
    });
    const handlePointerEvent = (event) => {
      pointerUpdate(event.clientX, event.clientY);
    };
    svgElement.addEventListener("pointerdown", handlePointerEvent);
    svgElement.addEventListener("pointermove", handlePointerEvent);
    svgElement.addEventListener("pointerenter", handlePointerEvent);
    return () => {
      svgElement.removeEventListener("pointerdown", handlePointerEvent);
      svgElement.removeEventListener("pointermove", handlePointerEvent);
      svgElement.removeEventListener("pointerenter", handlePointerEvent);
      pointerUpdate.clear();
    };
  }, [svgRef, positionRef, itemPosition]);
  const anchorEl = React50.useMemo(() => ({
    getBoundingClientRect: () => ({
      x: positionRef.current.x,
      y: positionRef.current.y,
      top: positionRef.current.y,
      left: positionRef.current.x,
      right: positionRef.current.x,
      bottom: positionRef.current.y,
      width: 0,
      height: 0,
      toJSON: () => ""
    })
  }), [positionRef]);
  const isMouse = (pointerType == null ? void 0 : pointerType.pointerType) === "mouse" || isFineMainPointer;
  const isTouch = (pointerType == null ? void 0 : pointerType.pointerType) === "touch" || !isFineMainPointer;
  const modifiers = React50.useMemo(() => [
    {
      name: "offset",
      options: {
        offset: () => {
          if (isTouch) {
            return [0, 64];
          }
          return [0, 8];
        }
      }
    },
    ...!isMouse ? [{
      name: "flip",
      options: {
        fallbackPlacements: ["top-end", "top-start", "bottom-end", "bottom"]
      }
    }] : [],
    // Keep default behavior
    {
      name: "preventOverflow",
      options: {
        altAxis: true
      }
    }
  ], [isMouse, isTouch]);
  if (trigger === "none") {
    return null;
  }
  return (0, import_jsx_runtime23.jsx)(NoSsr_default, {
    children: isOpen && (0, import_jsx_runtime23.jsx)(ChartsTooltipRoot, _extends({}, other, {
      className: classes == null ? void 0 : classes.root,
      open: isOpen,
      placement: other.placement ?? position ?? (isMouse ? "right-start" : "top"),
      popperRef,
      anchorEl,
      modifiers,
      children: children2
    }))
  });
}
true ? ChartsTooltipContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Determine if the tooltip should be placed on the pointer location or on the node.
   * @default 'pointer'
   */
  anchor: import_prop_types17.default.oneOf(["node", "pointer"]),
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: import_prop_types17.default.oneOfType([HTMLElementType, import_prop_types17.default.object, import_prop_types17.default.func]),
  /**
   * Popper render function or node.
   */
  children: import_prop_types17.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types17.default.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types17.default.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: import_prop_types17.default.shape({
    Root: import_prop_types17.default.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: import_prop_types17.default.shape({
    root: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types17.default.oneOfType([(props, propName) => {
    if (props[propName] == null) {
      return new Error(`Prop '${propName}' is required but wasn't specified`);
    }
    if (typeof props[propName] !== "object" || props[propName].nodeType !== 1) {
      return new Error(`Expected prop '${propName}' to be of type Element`);
    }
    return null;
  }, import_prop_types17.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types17.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types17.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types17.default.arrayOf(import_prop_types17.default.shape({
    data: import_prop_types17.default.object,
    effect: import_prop_types17.default.func,
    enabled: import_prop_types17.default.bool,
    fn: import_prop_types17.default.func,
    name: import_prop_types17.default.any,
    options: import_prop_types17.default.object,
    phase: import_prop_types17.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types17.default.arrayOf(import_prop_types17.default.string),
    requiresIfExists: import_prop_types17.default.arrayOf(import_prop_types17.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types17.default.bool,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types17.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types17.default.shape({
    modifiers: import_prop_types17.default.array,
    onFirstUpdate: import_prop_types17.default.func,
    placement: import_prop_types17.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types17.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.shape({
    current: import_prop_types17.default.shape({
      destroy: import_prop_types17.default.func.isRequired,
      forceUpdate: import_prop_types17.default.func.isRequired,
      setOptions: import_prop_types17.default.func.isRequired,
      state: import_prop_types17.default.shape({
        attributes: import_prop_types17.default.object.isRequired,
        elements: import_prop_types17.default.object.isRequired,
        modifiersData: import_prop_types17.default.object.isRequired,
        options: import_prop_types17.default.object.isRequired,
        orderedModifiers: import_prop_types17.default.arrayOf(import_prop_types17.default.object).isRequired,
        placement: import_prop_types17.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]).isRequired,
        rects: import_prop_types17.default.object.isRequired,
        reset: import_prop_types17.default.bool.isRequired,
        scrollParents: import_prop_types17.default.object.isRequired,
        strategy: import_prop_types17.default.oneOf(["absolute", "fixed"]).isRequired,
        styles: import_prop_types17.default.object.isRequired
      }).isRequired,
      update: import_prop_types17.default.func.isRequired
    })
  })]),
  /**
   * Determines the tooltip position relatively to the anchor.
   */
  position: import_prop_types17.default.oneOf(["bottom", "left", "right", "top"]),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types17.default.object,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types17.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types17.default.bool,
  /**
   * Select the kind of tooltip to display
   * - 'item': Shows data about the item below the mouse;
   * - 'axis': Shows values associated with the hovered x value;
   * - 'none': Does not display tooltip.
   * @default 'axis'
   */
  trigger: import_prop_types17.default.oneOf(["axis", "item", "none"])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltip.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
function ChartsTooltip(props) {
  const {
    classes: propClasses,
    trigger = "axis"
  } = props;
  const classes = useUtilityClasses4(propClasses);
  return (0, import_jsx_runtime24.jsx)(ChartsTooltipContainer, _extends({}, props, {
    classes: propClasses,
    children: trigger === "axis" ? (0, import_jsx_runtime24.jsx)(ChartsAxisTooltipContent, {
      classes
    }) : (0, import_jsx_runtime24.jsx)(ChartsItemTooltipContent, {
      classes
    })
  }));
}
true ? ChartsTooltip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Determine if the tooltip should be placed on the pointer location or on the node.
   * @default 'pointer'
   */
  anchor: import_prop_types18.default.oneOf(["node", "pointer"]),
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: import_prop_types18.default.oneOfType([HTMLElementType, import_prop_types18.default.object, import_prop_types18.default.func]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types18.default.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types18.default.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: import_prop_types18.default.shape({
    Root: import_prop_types18.default.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: import_prop_types18.default.shape({
    root: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types18.default.oneOfType([(props, propName) => {
    if (props[propName] == null) {
      return new Error(`Prop '${propName}' is required but wasn't specified`);
    }
    if (typeof props[propName] !== "object" || props[propName].nodeType !== 1) {
      return new Error(`Expected prop '${propName}' to be of type Element`);
    }
    return null;
  }, import_prop_types18.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types18.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types18.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types18.default.arrayOf(import_prop_types18.default.shape({
    data: import_prop_types18.default.object,
    effect: import_prop_types18.default.func,
    enabled: import_prop_types18.default.bool,
    fn: import_prop_types18.default.func,
    name: import_prop_types18.default.any,
    options: import_prop_types18.default.object,
    phase: import_prop_types18.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types18.default.arrayOf(import_prop_types18.default.string),
    requiresIfExists: import_prop_types18.default.arrayOf(import_prop_types18.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types18.default.bool,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types18.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types18.default.shape({
    modifiers: import_prop_types18.default.array,
    onFirstUpdate: import_prop_types18.default.func,
    placement: import_prop_types18.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types18.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.shape({
    current: import_prop_types18.default.shape({
      destroy: import_prop_types18.default.func.isRequired,
      forceUpdate: import_prop_types18.default.func.isRequired,
      setOptions: import_prop_types18.default.func.isRequired,
      state: import_prop_types18.default.shape({
        attributes: import_prop_types18.default.object.isRequired,
        elements: import_prop_types18.default.object.isRequired,
        modifiersData: import_prop_types18.default.object.isRequired,
        options: import_prop_types18.default.object.isRequired,
        orderedModifiers: import_prop_types18.default.arrayOf(import_prop_types18.default.object).isRequired,
        placement: import_prop_types18.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]).isRequired,
        rects: import_prop_types18.default.object.isRequired,
        reset: import_prop_types18.default.bool.isRequired,
        scrollParents: import_prop_types18.default.object.isRequired,
        strategy: import_prop_types18.default.oneOf(["absolute", "fixed"]).isRequired,
        styles: import_prop_types18.default.object.isRequired
      }).isRequired,
      update: import_prop_types18.default.func.isRequired
    })
  })]),
  /**
   * Determines the tooltip position relatively to the anchor.
   */
  position: import_prop_types18.default.oneOf(["bottom", "left", "right", "top"]),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types18.default.object,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types18.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object, import_prop_types18.default.bool])), import_prop_types18.default.func, import_prop_types18.default.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types18.default.bool,
  /**
   * Select the kind of tooltip to display
   * - 'item': Shows data about the item below the mouse;
   * - 'axis': Shows values associated with the hovered x value;
   * - 'none': Does not display tooltip.
   * @default 'axis'
   */
  trigger: import_prop_types18.default.oneOf(["axis", "item", "none"])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsLegend/ChartsLegend.js
var React53 = __toESM(require_react(), 1);
var import_prop_types20 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsLegend/onClickContextBuilder.js
var seriesContextBuilder = (context) => ({
  type: "series",
  color: context.color,
  label: context.label,
  seriesId: context.seriesId,
  itemId: context.itemId
});

// ../node_modules/@mui/x-charts/esm/ChartsLegend/chartsLegendClasses.js
function getLegendUtilityClass(slot) {
  return generateUtilityClass("MuiChartsLegend", slot);
}
var useUtilityClasses7 = (props) => {
  const {
    classes,
    direction
  } = props;
  const slots = {
    root: ["root", direction],
    item: ["item"],
    mark: ["mark"],
    label: ["label"],
    series: ["series"]
  };
  return composeClasses(slots, getLegendUtilityClass, classes);
};
var legendClasses = generateUtilityClasses("MuiChartsLegend", ["root", "item", "series", "mark", "label", "vertical", "horizontal"]);

// ../node_modules/@mui/x-charts/esm/internals/consumeSlots.js
var React51 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var _excluded10 = ["slots", "slotProps"];
var _excluded25 = ["ownerState"];
var consumeSlots = (name, slotPropName, options, InComponent) => {
  function ConsumeSlotsInternal(props, ref) {
    var _a;
    const themedProps = useThemeProps({
      props,
      // eslint-disable-next-line material-ui/mui-name-matches-component-name
      name
    });
    const defaultProps4 = typeof options.defaultProps === "function" ? options.defaultProps(themedProps) : options.defaultProps ?? {};
    const defaultizedProps = resolveProps(defaultProps4, themedProps);
    const _ref = defaultizedProps, {
      slots,
      slotProps
    } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded10);
    const theme = useTheme();
    const classes = (_a = options.classesResolver) == null ? void 0 : _a.call(options, defaultizedProps, theme);
    const Component = (slots == null ? void 0 : slots[slotPropName]) ?? InComponent;
    const propagateSlots = options.propagateSlots && !(slots == null ? void 0 : slots[slotPropName]);
    const _useSlotProps = useSlotProps_default({
      elementType: Component,
      externalSlotProps: slotProps == null ? void 0 : slotProps[slotPropName],
      additionalProps: _extends({}, other, {
        classes
      }, propagateSlots && {
        slots,
        slotProps
      }),
      ownerState: {}
    }), originalOutProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded25);
    const outProps = _extends({}, originalOutProps);
    for (const prop of options.omitProps ?? []) {
      delete outProps[prop];
    }
    if (true) {
      Component.displayName = `${name}.slots.${slotPropName}`;
    }
    return (0, import_jsx_runtime25.jsx)(Component, _extends({}, outProps, {
      ref
    }));
  }
  return React51.forwardRef(ConsumeSlotsInternal);
};
if (true) consumeSlots.displayName = "consumeSlots";

// ../node_modules/@mui/x-charts/esm/ChartsLabel/ChartsLabel.js
var React52 = __toESM(require_react(), 1);
var import_prop_types19 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsLabel/labelClasses.js
function getLabelUtilityClass(slot) {
  return generateUtilityClass("MuiChartsLabel", slot);
}
var labelClasses = generateUtilityClasses("MuiChartsLabel", ["root"]);
var useUtilityClasses8 = (props) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getLabelUtilityClass, props.classes);
};

// ../node_modules/@mui/x-charts/esm/ChartsLabel/ChartsLabel.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var _excluded11 = ["children", "className", "classes"];
var ChartsLabel = consumeThemeProps("MuiChartsLabel", {
  classesResolver: useUtilityClasses8
}, function ChartsLabel2(props, ref) {
  const {
    children: children2,
    className,
    classes
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  return (0, import_jsx_runtime26.jsx)("span", _extends({
    className: clsx_default(classes == null ? void 0 : classes.root, className),
    ref
  }, other, {
    children: children2
  }));
});
true ? ChartsLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types19.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types19.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsLegend/ChartsLegend.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var _excluded12 = ["direction", "onItemClick", "className", "classes"];
var RootElement = styled_default("ul", {
  name: "MuiChartsLegend",
  slot: "Root"
})(({
  ownerState,
  theme
}) => _extends({}, theme.typography.caption, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "100%",
  display: "flex",
  flexDirection: ownerState.direction === "vertical" ? "column" : "row",
  alignItems: ownerState.direction === "vertical" ? void 0 : "center",
  flexShrink: 0,
  gap: theme.spacing(2),
  listStyleType: "none",
  paddingInlineStart: 0,
  marginBlock: theme.spacing(1),
  marginInline: theme.spacing(1),
  flexWrap: "wrap",
  li: {
    display: ownerState.direction === "horizontal" ? "inline-flex" : void 0
  },
  [`button.${legendClasses.series}`]: {
    // Reset button styles
    background: "none",
    border: "none",
    padding: 0,
    fontFamily: "inherit",
    fontWeight: "inherit",
    fontSize: "inherit",
    letterSpacing: "inherit",
    color: "inherit"
  },
  [`& .${legendClasses.series}`]: {
    display: ownerState.direction === "vertical" ? "flex" : "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1)
  },
  gridArea: "legend"
}));
var ChartsLegend = consumeSlots("MuiChartsLegend", "legend", {
  defaultProps: {
    direction: "horizontal"
  },
  // @ts-expect-error position is used only in the slots, but it is passed to the SVG wrapper.
  // We omit it here to avoid passing to slots.
  omitProps: ["position"],
  classesResolver: useUtilityClasses7
}, React53.forwardRef(function ChartsLegend2(props, ref) {
  const data = useLegend();
  const {
    onItemClick,
    className,
    classes
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  if (data.items.length === 0) {
    return null;
  }
  const Element2 = onItemClick ? "button" : "div";
  return (0, import_jsx_runtime27.jsx)(RootElement, _extends({
    className: clsx_default(classes == null ? void 0 : classes.root, className),
    ref
  }, other, {
    ownerState: props,
    children: data.items.map((item, i) => {
      return (0, import_jsx_runtime27.jsx)("li", {
        className: classes == null ? void 0 : classes.item,
        "data-series": item.id,
        children: (0, import_jsx_runtime27.jsxs)(Element2, {
          className: classes == null ? void 0 : classes.series,
          role: onItemClick ? "button" : void 0,
          type: onItemClick ? "button" : void 0,
          onClick: onItemClick ? (
            // @ts-ignore onClick is only attached to a button
            (event) => onItemClick(event, seriesContextBuilder(item), i)
          ) : void 0,
          children: [(0, import_jsx_runtime27.jsx)(ChartsLabelMark, {
            className: classes == null ? void 0 : classes.mark,
            color: item.color,
            type: item.markType
          }), (0, import_jsx_runtime27.jsx)(ChartsLabel, {
            className: classes == null ? void 0 : classes.label,
            children: item.label
          })]
        })
      }, item.id);
    })
  }));
}));
if (true) ChartsLegend.displayName = "ChartsLegend";
true ? ChartsLegend.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types20.default.object,
  className: import_prop_types20.default.string,
  /**
   * The direction of the legend layout.
   * The default depends on the chart.
   */
  direction: import_prop_types20.default.oneOf(["horizontal", "vertical"]),
  /**
   * Callback fired when a legend item is clicked.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
   * @param {SeriesLegendItemContext} legendItem The legend item data.
   * @param {number} index The index of the clicked legend item.
   */
  onItemClick: import_prop_types20.default.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types20.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types20.default.object,
  sx: import_prop_types20.default.oneOfType([import_prop_types20.default.arrayOf(import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object, import_prop_types20.default.bool])), import_prop_types20.default.func, import_prop_types20.default.object])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsLegend/ContinuousColorLegend.js
var React55 = __toESM(require_react(), 1);
var import_prop_types22 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsLegend/useAxis.js
function useAxis({
  axisDirection,
  axisId
}) {
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  const {
    zAxis,
    zAxisIds
  } = useZAxes();
  switch (axisDirection) {
    case "x": {
      const id = typeof axisId === "string" ? axisId : xAxisIds[axisId ?? 0];
      return xAxis[id];
    }
    case "y": {
      const id = typeof axisId === "string" ? axisId : yAxisIds[axisId ?? 0];
      return yAxis[id];
    }
    case "z":
    default: {
      const id = typeof axisId === "string" ? axisId : zAxisIds[axisId ?? 0];
      return zAxis[id];
    }
  }
}

// ../node_modules/@mui/x-charts/esm/ChartsLabel/ChartsLabelGradient.js
var React54 = __toESM(require_react(), 1);
var import_prop_types21 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsLabel/labelGradientClasses.js
function getLabelGradientUtilityClass(slot) {
  return generateUtilityClass("MuiChartsLabelGradient", slot);
}
var labelGradientClasses = generateUtilityClasses("MuiChartsLabelGradient", ["root", "vertical", "horizontal", "mask", "fill"]);
var useUtilityClasses9 = (props) => {
  const {
    direction
  } = props;
  const slots = {
    root: ["root", direction],
    mask: ["mask"],
    fill: ["fill"]
  };
  return composeClasses(slots, getLabelGradientUtilityClass, props.classes);
};

// ../node_modules/@mui/x-charts/esm/ChartsLabel/ChartsLabelGradient.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var _excluded13 = ["gradientId", "direction", "classes", "className", "rotate", "reverse", "thickness"];
var getRotation = (direction, reverse2, rotate, isRtl) => {
  const angle = (direction === "vertical" ? -90 : 0) + (rotate ? 90 : 0) + (reverse2 ? 180 : 0);
  if (isRtl && direction !== "vertical") {
    return angle + 180;
  }
  return angle;
};
var Root2 = styled_default("div", {
  name: "MuiChartsLabelGradient",
  slot: "Root"
})(({
  ownerState
}) => {
  const rotation = getRotation(ownerState.direction, ownerState.reverse, ownerState.rotate, ownerState.isRtl);
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [`.${labelGradientClasses.mask}`]: {
      borderRadius: 2,
      overflow: "hidden"
    },
    [`&.${labelGradientClasses.horizontal}`]: {
      width: "100%",
      [`.${labelGradientClasses.mask}`]: {
        height: ownerState.thickness,
        width: "100%"
      }
    },
    [`&.${labelGradientClasses.vertical}`]: {
      height: "100%",
      [`.${labelGradientClasses.mask}`]: {
        width: ownerState.thickness,
        height: "100%",
        "> svg": {
          height: "100%"
        }
      }
    },
    svg: {
      transform: `rotate(${rotation}deg)`,
      display: "block"
    }
  };
});
var ChartsLabelGradient = consumeThemeProps("MuiChartsLabelGradient", {
  defaultProps: {
    direction: "horizontal",
    thickness: 12
  },
  classesResolver: useUtilityClasses9
}, function ChartsLabelGradient2(props, ref) {
  const {
    gradientId,
    classes,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const isRtl = useRtl();
  return (0, import_jsx_runtime28.jsx)(Root2, _extends({
    className: clsx_default(classes == null ? void 0 : classes.root, className),
    ownerState: _extends({}, props, {
      isRtl
    }),
    "aria-hidden": "true",
    ref
  }, other, {
    children: (0, import_jsx_runtime28.jsx)("div", {
      className: classes == null ? void 0 : classes.mask,
      children: (0, import_jsx_runtime28.jsx)("svg", {
        viewBox: "0 0 24 24",
        children: (0, import_jsx_runtime28.jsx)("rect", {
          className: classes == null ? void 0 : classes.fill,
          width: "24",
          height: "24",
          fill: `url(#${gradientId})`
        })
      })
    })
  }));
});
true ? ChartsLabelGradient.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types21.default.object,
  /**
   * The direction of the gradient.
   * @default 'horizontal'
   */
  direction: import_prop_types21.default.oneOf(["vertical", "horizontal"]),
  /**
   * A unique identifier for the gradient.
   * The `gradientId` will be used as `fill="url(#gradientId)"`.
   */
  gradientId: import_prop_types21.default.string.isRequired,
  /**
   * If `true`, the gradient will be reversed.
   */
  reverse: import_prop_types21.default.bool,
  /**
   * If provided, the gradient will be rotated by 90deg.
   * Useful for linear gradients that are not in the correct orientation.
   */
  rotate: import_prop_types21.default.bool,
  /**
   * The thickness of the gradient
   * @default 12
   */
  thickness: import_prop_types21.default.number
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsLegend/continuousColorLegendClasses.js
function getLegendUtilityClass2(slot) {
  return generateUtilityClass("MuiContinuousColorLegend", slot);
}
var useUtilityClasses10 = (props) => {
  const {
    classes,
    direction,
    labelPosition
  } = props;
  const slots = {
    root: ["root", direction, labelPosition],
    minLabel: ["minLabel"],
    maxLabel: ["maxLabel"],
    gradient: ["gradient"],
    mark: ["mark"],
    label: ["label"]
  };
  return composeClasses(slots, getLegendUtilityClass2, classes);
};
var continuousColorLegendClasses = generateUtilityClasses("MuiContinuousColorLegend", ["root", "minLabel", "maxLabel", "gradient", "vertical", "horizontal", "start", "end", "extremes", "label"]);

// ../node_modules/@mui/x-charts/esm/ChartsLegend/ContinuousColorLegend.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var _excluded14 = ["minLabel", "maxLabel", "direction", "axisDirection", "axisId", "rotateGradient", "reverse", "classes", "className", "gradientId", "labelPosition", "thickness"];
var templateAreas = (reverse2) => {
  const startLabel = reverse2 ? "max-label" : "min-label";
  const endLabel = reverse2 ? "min-label" : "max-label";
  return {
    row: {
      start: `
    '${startLabel} . ${endLabel}'
    'gradient gradient gradient'
  `,
      end: `
      'gradient gradient gradient'
      '${startLabel} . ${endLabel}'
    `,
      extremes: `
      '${startLabel} gradient ${endLabel}'
    `
    },
    column: {
      start: `
      '${endLabel} gradient'
      '. gradient'
      '${startLabel} gradient'
    `,
      end: `
      'gradient ${endLabel}'
      'gradient .'
      'gradient ${startLabel}'
    `,
      extremes: `
      '${endLabel}'
      'gradient'
      '${startLabel}'
    `
    }
  };
};
var RootElement2 = styled_default("ul", {
  name: "MuiContinuousColorLegend",
  slot: "Root"
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.caption, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "100%",
  display: "grid",
  flexShrink: 0,
  gap: theme.spacing(0.5),
  listStyleType: "none",
  paddingInlineStart: 0,
  marginBlock: theme.spacing(1),
  marginInline: theme.spacing(1),
  gridArea: "legend",
  [`&.${continuousColorLegendClasses.horizontal}`]: {
    gridTemplateRows: "min-content min-content",
    gridTemplateColumns: "min-content auto min-content",
    [`&.${continuousColorLegendClasses.start}`]: {
      gridTemplateAreas: templateAreas(ownerState.reverse).row.start
    },
    [`&.${continuousColorLegendClasses.end}`]: {
      gridTemplateAreas: templateAreas(ownerState.reverse).row.end
    },
    [`&.${continuousColorLegendClasses.extremes}`]: {
      gridTemplateAreas: templateAreas(ownerState.reverse).row.extremes,
      gridTemplateRows: "min-content",
      alignItems: "center"
    }
  },
  [`&.${continuousColorLegendClasses.vertical}`]: {
    gridTemplateRows: "min-content auto min-content",
    gridTemplateColumns: "min-content min-content",
    [`&.${continuousColorLegendClasses.start}`]: {
      gridTemplateAreas: templateAreas(ownerState.reverse).column.start,
      [`.${continuousColorLegendClasses.maxLabel}, .${continuousColorLegendClasses.minLabel}`]: {
        justifySelf: "end"
      }
    },
    [`&.${continuousColorLegendClasses.end}`]: {
      gridTemplateAreas: templateAreas(ownerState.reverse).column.end,
      [`.${continuousColorLegendClasses.maxLabel}, .${continuousColorLegendClasses.minLabel}`]: {
        justifySelf: "start"
      }
    },
    [`&.${continuousColorLegendClasses.extremes}`]: {
      gridTemplateAreas: templateAreas(ownerState.reverse).column.extremes,
      gridTemplateColumns: "min-content",
      [`.${continuousColorLegendClasses.maxLabel}, .${continuousColorLegendClasses.minLabel}`]: {
        justifySelf: "center"
      }
    }
  },
  [`.${continuousColorLegendClasses.gradient}`]: {
    gridArea: "gradient"
  },
  [`.${continuousColorLegendClasses.maxLabel}`]: {
    gridArea: "max-label"
  },
  [`.${continuousColorLegendClasses.minLabel}`]: {
    gridArea: "min-label"
  }
}));
var getText = (label, value, formattedValue) => {
  if (typeof label === "string") {
    return label;
  }
  return (label == null ? void 0 : label({
    value,
    formattedValue
  })) ?? formattedValue;
};
var isZAxis = (axis) => axis.scale === void 0;
var ContinuousColorLegend = consumeThemeProps("MuiContinuousColorLegend", {
  defaultProps: {
    direction: "horizontal",
    labelPosition: "end",
    axisDirection: "z"
  },
  classesResolver: useUtilityClasses10
}, function ContinuousColorLegend2(props, ref) {
  const {
    minLabel,
    maxLabel,
    direction,
    axisDirection,
    axisId,
    rotateGradient,
    reverse: reverse2,
    classes,
    className,
    gradientId,
    thickness
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const generateGradientId = useChartGradientIdObjectBoundBuilder();
  const axisItem = useAxis({
    axisDirection,
    axisId
  });
  const colorMap = axisItem == null ? void 0 : axisItem.colorMap;
  if (!colorMap || !colorMap.type || colorMap.type !== "continuous") {
    return null;
  }
  const minValue = colorMap.min ?? 0;
  const maxValue = colorMap.max ?? 100;
  const valueFormatter = isZAxis(axisItem) ? void 0 : axisItem.valueFormatter;
  const formattedMin = valueFormatter ? valueFormatter(minValue, {
    location: "legend"
  }) : minValue.toLocaleString();
  const formattedMax = valueFormatter ? valueFormatter(maxValue, {
    location: "legend"
  }) : maxValue.toLocaleString();
  const minText = getText(minLabel, minValue, formattedMin);
  const maxText = getText(maxLabel, maxValue, formattedMax);
  const minComponent = (0, import_jsx_runtime29.jsx)("li", {
    className: classes == null ? void 0 : classes.minLabel,
    children: (0, import_jsx_runtime29.jsx)(ChartsLabel, {
      className: classes == null ? void 0 : classes.label,
      children: minText
    })
  });
  const maxComponent = (0, import_jsx_runtime29.jsx)("li", {
    className: classes == null ? void 0 : classes.maxLabel,
    children: (0, import_jsx_runtime29.jsx)(ChartsLabel, {
      className: classes == null ? void 0 : classes.label,
      children: maxText
    })
  });
  return (0, import_jsx_runtime29.jsxs)(RootElement2, _extends({
    className: clsx_default(classes == null ? void 0 : classes.root, className),
    ref
  }, other, {
    ownerState: props,
    children: [reverse2 ? maxComponent : minComponent, (0, import_jsx_runtime29.jsx)("li", {
      className: classes == null ? void 0 : classes.gradient,
      children: (0, import_jsx_runtime29.jsx)(ChartsLabelGradient, {
        direction,
        rotate: rotateGradient,
        reverse: reverse2,
        thickness,
        gradientId: gradientId ?? generateGradientId(axisItem.id)
      })
    }), reverse2 ? minComponent : maxComponent]
  }));
});
true ? ContinuousColorLegend.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The axis direction containing the color configuration to represent.
   * @default 'z'
   */
  axisDirection: import_prop_types22.default.oneOf(["x", "y", "z"]),
  /**
   * The id of the axis item with the color configuration to represent.
   * @default The first axis item.
   */
  axisId: import_prop_types22.default.oneOfType([import_prop_types22.default.number, import_prop_types22.default.string]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types22.default.object,
  className: import_prop_types22.default.string,
  /**
   * The direction of the legend layout.
   * @default 'horizontal'
   */
  direction: import_prop_types22.default.oneOf(["horizontal", "vertical"]),
  /**
   * The id for the gradient to use.
   * If not provided, it will use the generated gradient from the axis configuration.
   * The `gradientId` will be used as `fill="url(#gradientId)"`.
   * @default auto-generated id
   */
  gradientId: import_prop_types22.default.string,
  /**
   * Where to position the labels relative to the gradient.
   * @default 'end'
   */
  labelPosition: import_prop_types22.default.oneOf(["start", "end", "extremes"]),
  /**
   * The label to display at the maximum side of the gradient.
   * Can either be a string, or a function.
   * If not defined, the formatted maximal value is display.
   * @default formattedValue
   */
  maxLabel: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.string]),
  /**
   * The label to display at the minimum side of the gradient.
   * Can either be a string, or a function.
   * @default formattedValue
   */
  minLabel: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.string]),
  /**
   * If `true`, the gradient and labels will be reversed.
   * @default false
   */
  reverse: import_prop_types22.default.bool,
  /**
   * If provided, the gradient will be rotated by 90deg.
   * Useful for linear gradients that are not in the correct orientation.
   */
  rotateGradient: import_prop_types22.default.bool,
  /**
   * The thickness of the gradient
   * @default 12
   */
  thickness: import_prop_types22.default.number,
  sx: import_prop_types22.default.oneOfType([import_prop_types22.default.arrayOf(import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object, import_prop_types22.default.bool])), import_prop_types22.default.func, import_prop_types22.default.object])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsLegend/PiecewiseColorLegend.js
var React56 = __toESM(require_react(), 1);
var import_prop_types23 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsLegend/piecewiseColorLegendClasses.js
function getLegendUtilityClass3(slot) {
  return generateUtilityClass("MuiPiecewiseColorLegendClasses", slot);
}
var useUtilityClasses11 = (props) => {
  const {
    classes,
    direction,
    labelPosition
  } = props;
  const slots = {
    root: ["root", direction, labelPosition == null ? void 0 : labelPosition.replaceAll(/-(\w)/g, (match) => match[1].toUpperCase())],
    minLabel: ["minLabel"],
    maxLabel: ["maxLabel"],
    item: ["item"],
    mark: ["mark"],
    label: ["label"]
  };
  return composeClasses(slots, getLegendUtilityClass3, classes);
};
var piecewiseColorLegendClasses = generateUtilityClasses("MuiPiecewiseColorLegendClasses", ["root", "minLabel", "maxLabel", "item", "vertical", "horizontal", "start", "end", "extremes", "inlineStart", "inlineEnd", "mark", "label"]);

// ../node_modules/@mui/x-charts/esm/ChartsLegend/piecewiseColorDefaultLabelFormatter.js
function piecewiseColorDefaultLabelFormatter(params) {
  if (params.min === null) {
    return `<${params.formattedMax}`;
  }
  if (params.max === null) {
    return `>${params.formattedMin}`;
  }
  return `${params.formattedMin}-${params.formattedMax}`;
}

// ../node_modules/@mui/x-charts/esm/ChartsLegend/PiecewiseColorLegend.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var _excluded15 = ["direction", "classes", "className", "markType", "labelPosition", "axisDirection", "axisId", "labelFormatter", "onItemClick"];
var RootElement3 = styled_default("ul", {
  name: "MuiPiecewiseColorLegend",
  slot: "Root"
})(({
  theme,
  ownerState
}) => {
  const classes = piecewiseColorLegendClasses;
  return _extends({}, theme.typography.caption, {
    color: (theme.vars || theme).palette.text.primary,
    lineHeight: "100%",
    display: "flex",
    flexDirection: ownerState.direction === "vertical" ? "column" : "row",
    flexShrink: 0,
    gap: theme.spacing(0.5),
    listStyleType: "none",
    paddingInlineStart: 0,
    marginBlock: theme.spacing(1),
    marginInline: theme.spacing(1),
    width: "fit-content",
    gridArea: "legend",
    [`button.${classes.item}`]: {
      // Reset button styles
      background: "none",
      border: "none",
      padding: 0,
      cursor: ownerState.onItemClick ? "pointer" : "unset",
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      letterSpacing: "inherit",
      color: "inherit"
    },
    [`.${classes.item}`]: {
      display: "flex",
      gap: theme.spacing(0.5)
    },
    [`li :not(.${classes.minLabel}, .${classes.maxLabel}) .${classes == null ? void 0 : classes.mark}`]: {
      alignSelf: "center"
    },
    [`&.${classes.start}`]: {
      alignItems: "end"
    },
    [`&.${classes.end}`]: {
      alignItems: "start"
    },
    [`&.${classes.horizontal}`]: {
      alignItems: "center",
      [`.${classes.item}`]: {
        flexDirection: "column"
      },
      [`&.${classes.inlineStart}, &.${classes.inlineEnd}`]: {
        gap: theme.spacing(1.5),
        flexWrap: "wrap",
        [`.${classes.item}`]: {
          flexDirection: "row"
        }
      },
      [`&.${classes.start}`]: {
        alignItems: "end"
      },
      [`&.${classes.end}`]: {
        alignItems: "start"
      },
      [`.${classes.minLabel}`]: {
        alignItems: "end"
      },
      [`&.${classes.extremes}`]: {
        [`.${classes.minLabel}, .${classes.maxLabel}`]: {
          alignItems: "center",
          display: "flex",
          flexDirection: "row"
        }
      }
    },
    [`&.${classes.vertical}`]: {
      [`.${classes.item}`]: {
        flexDirection: "row",
        alignItems: "center"
      },
      [`&.${classes.start}, &.${classes.inlineStart}`]: {
        alignItems: "end"
      },
      [`&.${classes.end}, &.${classes.inlineEnd}`]: {
        alignItems: "start"
      },
      [`&.${classes.extremes}`]: {
        alignItems: "center",
        [`.${classes.minLabel}, .${classes.maxLabel}`]: {
          alignItems: "center",
          display: "flex",
          flexDirection: "column"
        }
      }
    }
  });
});
var PiecewiseColorLegend = consumeThemeProps("MuiPiecewiseColorLegend", {
  defaultProps: {
    direction: "horizontal",
    labelPosition: "extremes",
    labelFormatter: piecewiseColorDefaultLabelFormatter
  },
  classesResolver: useUtilityClasses11
}, function PiecewiseColorLegend2(props, ref) {
  const {
    direction,
    classes,
    className,
    markType,
    labelPosition,
    axisDirection,
    axisId,
    labelFormatter,
    onItemClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const isVertical = direction === "vertical";
  const isReverse = isVertical;
  const axisItem = useAxis({
    axisDirection,
    axisId
  });
  const colorMap = axisItem == null ? void 0 : axisItem.colorMap;
  if (!colorMap || !colorMap.type || colorMap.type !== "piecewise") {
    return null;
  }
  const valueFormatter = (v) => {
    var _a;
    return ((_a = axisItem.valueFormatter) == null ? void 0 : _a.call(axisItem, v, {
      location: "legend"
    })) ?? v.toLocaleString();
  };
  const formattedLabels = colorMap.thresholds.map(valueFormatter);
  const startClass = isReverse ? classes == null ? void 0 : classes.maxLabel : classes == null ? void 0 : classes.minLabel;
  const endClass = isReverse ? classes == null ? void 0 : classes.minLabel : classes == null ? void 0 : classes.maxLabel;
  const colors = colorMap.colors.map((color2, colorIndex) => ({
    color: color2,
    colorIndex
  }));
  const orderedColors = isReverse ? colors.reverse() : colors;
  const isStart = labelPosition === "start";
  const isEnd = labelPosition === "end";
  const isExtremes = labelPosition === "extremes";
  const isInlineStart = labelPosition === "inline-start";
  const isInlineEnd = labelPosition === "inline-end";
  return (0, import_jsx_runtime30.jsx)(RootElement3, _extends({
    className: clsx_default(classes == null ? void 0 : classes.root, className),
    ref
  }, other, {
    ownerState: props,
    children: orderedColors.map(({
      color: color2,
      colorIndex
    }, index2) => {
      const isFirst = index2 === 0;
      const isLast = index2 === colorMap.colors.length - 1;
      const isFirstColor = colorIndex === 0;
      const isLastColor = colorIndex === colorMap.colors.length - 1;
      const data = _extends({
        index: colorIndex,
        length: formattedLabels.length
      }, isFirstColor ? {
        min: null,
        formattedMin: null
      } : {
        min: colorMap.thresholds[colorIndex - 1],
        formattedMin: formattedLabels[colorIndex - 1]
      }, isLastColor ? {
        max: null,
        formattedMax: null
      } : {
        max: colorMap.thresholds[colorIndex],
        formattedMax: formattedLabels[colorIndex]
      });
      const label = labelFormatter == null ? void 0 : labelFormatter(data);
      if (label === null || label === void 0) {
        return null;
      }
      const isTextBefore = isStart || isExtremes && isFirst || isInlineStart;
      const isTextAfter = isEnd || isExtremes && isLast || isInlineEnd;
      const clickObject = {
        type: "piecewiseColor",
        color: color2,
        label,
        minValue: data.min,
        maxValue: data.max
      };
      const Element2 = onItemClick ? "button" : "div";
      return (0, import_jsx_runtime30.jsx)("li", {
        children: (0, import_jsx_runtime30.jsxs)(Element2, {
          role: onItemClick ? "button" : void 0,
          type: onItemClick ? "button" : void 0,
          onClick: (
            // @ts-ignore onClick is only attached to a button
            onItemClick ? (event) => onItemClick(event, clickObject, index2) : void 0
          ),
          className: clsx_default(classes == null ? void 0 : classes.item, index2 === 0 && `${startClass}`, index2 === orderedColors.length - 1 && `${endClass}`),
          children: [isTextBefore && (0, import_jsx_runtime30.jsx)(ChartsLabel, {
            className: classes == null ? void 0 : classes.label,
            children: label
          }), (0, import_jsx_runtime30.jsx)(ChartsLabelMark, {
            className: classes == null ? void 0 : classes.mark,
            type: markType,
            color: color2
          }), isTextAfter && (0, import_jsx_runtime30.jsx)(ChartsLabel, {
            className: classes == null ? void 0 : classes.label,
            children: label
          })]
        })
      }, colorIndex);
    })
  }));
});
true ? PiecewiseColorLegend.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The axis direction containing the color configuration to represent.
   * @default 'z'
   */
  axisDirection: import_prop_types23.default.oneOf(["x", "y", "z"]),
  /**
   * The id of the axis item with the color configuration to represent.
   * @default The first axis item.
   */
  axisId: import_prop_types23.default.oneOfType([import_prop_types23.default.number, import_prop_types23.default.string]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types23.default.object,
  className: import_prop_types23.default.string,
  /**
   * The direction of the legend layout.
   * @default 'horizontal'
   */
  direction: import_prop_types23.default.oneOf(["horizontal", "vertical"]),
  /**
   * Format the legend labels.
   * @param {PiecewiseLabelFormatterParams} params The bound of the piece to format.
   * @returns {string|null} The displayed label, `''` to skip the label but show the color mark, or `null` to skip it entirely.
   */
  labelFormatter: import_prop_types23.default.func,
  /**
   * Where to position the labels relative to the gradient.
   * @default 'extremes'
   */
  labelPosition: import_prop_types23.default.oneOf(["start", "end", "extremes", "inline-start", "inline-end"]),
  /**
   * The type of the mark.
   * @default 'square'
   */
  markType: import_prop_types23.default.oneOf(["square", "circle", "line"]),
  /**
   * Callback fired when a legend item is clicked.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
   * @param {PiecewiseColorLegendItemContext} legendItem The legend item data.
   * @param {number} index The index of the clicked legend item.
   */
  onItemClick: import_prop_types23.default.func,
  sx: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.bool])), import_prop_types23.default.func, import_prop_types23.default.object])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsAxisHighlight/ChartsAxisHighlight.js
var React59 = __toESM(require_react(), 1);
var import_prop_types24 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsAxisHighlight/chartsAxisHighlightClasses.js
function getAxisHighlightUtilityClass(slot) {
  return generateUtilityClass("MuiChartsAxisHighlight", slot);
}
var chartsAxisHighlightClasses = generateUtilityClasses("MuiChartsAxisHighlight", ["root"]);

// ../node_modules/@mui/x-charts/esm/ChartsAxisHighlight/ChartsYAxisHighlight.js
var React57 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsAxisHighlight/ChartsAxisHighlightPath.js
var ChartsAxisHighlightPath = styled_default("path", {
  name: "MuiChartsAxisHighlight",
  slot: "Root"
})(({
  theme
}) => ({
  pointerEvents: "none",
  variants: [{
    props: {
      axisHighlight: "band"
    },
    style: _extends({
      fill: "white",
      fillOpacity: 0.1
    }, theme.applyStyles("light", {
      fill: "gray"
    }))
  }, {
    props: {
      axisHighlight: "line"
    },
    style: _extends({
      strokeDasharray: "5 2",
      stroke: "#ffffff"
    }, theme.applyStyles("light", {
      stroke: "#000000"
    }))
  }]
}));

// ../node_modules/@mui/x-charts/esm/ChartsAxisHighlight/ChartsYAxisHighlight.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
function ChartsYHighlight(props) {
  const {
    type,
    classes
  } = props;
  const {
    left: left2,
    width
  } = useDrawingArea();
  const store = useStore2();
  const axisYValues = store.use(selectorChartsHighlightYAxisValue);
  const yAxes = store.use(selectorChartYAxis);
  if (axisYValues.length === 0) {
    return null;
  }
  return axisYValues.map(({
    axisId,
    value
  }) => {
    const yAxis = yAxes.axis[axisId];
    const yScale = yAxis.scale;
    const getYPosition = getValueToPositionMapper(yScale);
    const isYScaleOrdinal = type === "band" && value !== null && isOrdinalScale(yScale);
    if (true) {
      const isError = isYScaleOrdinal && yScale(value) === void 0;
      if (isError) {
        console.error([`MUI X Charts: The position value provided for the axis is not valid for the current scale.`, `This probably means something is wrong with the data passed to the chart.`, `The ChartsAxisHighlight component will not be displayed.`].join("\n"));
      }
    }
    return (0, import_jsx_runtime31.jsxs)(React57.Fragment, {
      children: [isYScaleOrdinal && yScale(value) !== void 0 && (0, import_jsx_runtime31.jsx)(ChartsAxisHighlightPath, {
        d: `M ${left2} ${yScale(value) - (yScale.step() - yScale.bandwidth()) / 2} l 0 ${yScale.step()} l ${width} 0 l 0 ${-yScale.step()} Z`,
        className: classes.root,
        ownerState: {
          axisHighlight: "band"
        }
      }), type === "line" && value !== null && (0, import_jsx_runtime31.jsx)(ChartsAxisHighlightPath, {
        d: `M ${left2} ${getYPosition(value)} L ${left2 + width} ${getYPosition(value)}`,
        className: classes.root,
        ownerState: {
          axisHighlight: "line"
        }
      })]
    }, `${axisId}-${value}`);
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsAxisHighlight/ChartsXAxisHighlight.js
var React58 = __toESM(require_react(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
function ChartsXHighlight(props) {
  const {
    type,
    classes
  } = props;
  const {
    top: top2,
    height
  } = useDrawingArea();
  const store = useStore2();
  const axisXValues = store.use(selectorChartsHighlightXAxisValue);
  const xAxes = store.use(selectorChartXAxis);
  if (axisXValues.length === 0) {
    return null;
  }
  return axisXValues.map(({
    axisId,
    value
  }) => {
    const xAxis = xAxes.axis[axisId];
    const xScale = xAxis.scale;
    const getXPosition = getValueToPositionMapper(xScale);
    const isXScaleOrdinal = type === "band" && value !== null && isOrdinalScale(xScale);
    if (true) {
      const isError = isXScaleOrdinal && xScale(value) === void 0;
      if (isError) {
        console.error([`MUI X Charts: The position value provided for the axis is not valid for the current scale.`, `This probably means something is wrong with the data passed to the chart.`, `The ChartsAxisHighlight component will not be displayed.`].join("\n"));
      }
    }
    return (0, import_jsx_runtime32.jsxs)(React58.Fragment, {
      children: [isXScaleOrdinal && xScale(value) !== void 0 && (0, import_jsx_runtime32.jsx)(ChartsAxisHighlightPath, {
        d: `M ${xScale(value) - (xScale.step() - xScale.bandwidth()) / 2} ${top2} l ${xScale.step()} 0 l 0 ${height} l ${-xScale.step()} 0 Z`,
        className: classes.root,
        ownerState: {
          axisHighlight: "band"
        }
      }), type === "line" && value !== null && (0, import_jsx_runtime32.jsx)(ChartsAxisHighlightPath, {
        d: `M ${getXPosition(value)} ${top2} L ${getXPosition(value)} ${top2 + height}`,
        className: classes.root,
        ownerState: {
          axisHighlight: "line"
        }
      })]
    }, `${axisId}-${value}`);
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsAxisHighlight/ChartsAxisHighlight.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses12 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getAxisHighlightUtilityClass);
};
function ChartsAxisHighlight(props) {
  const {
    x: xAxisHighlight,
    y: yAxisHighlight
  } = props;
  const classes = useUtilityClasses12();
  return (0, import_jsx_runtime33.jsxs)(React59.Fragment, {
    children: [xAxisHighlight && xAxisHighlight !== "none" && (0, import_jsx_runtime33.jsx)(ChartsXHighlight, {
      type: xAxisHighlight,
      classes
    }), yAxisHighlight && yAxisHighlight !== "none" && (0, import_jsx_runtime33.jsx)(ChartsYHighlight, {
      type: yAxisHighlight,
      classes
    })]
  });
}
true ? ChartsAxisHighlight.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  x: import_prop_types24.default.oneOf(["band", "line", "none"]),
  y: import_prop_types24.default.oneOf(["band", "line", "none"])
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsClipPath/ChartsClipPath.js
var import_prop_types25 = __toESM(require_prop_types(), 1);
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
function ChartsClipPath(props) {
  const {
    id,
    offset: offsetProps
  } = props;
  const {
    left: left2,
    top: top2,
    width,
    height
  } = useDrawingArea();
  const offset2 = _extends({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, offsetProps);
  return (0, import_jsx_runtime34.jsx)("clipPath", {
    id,
    children: (0, import_jsx_runtime34.jsx)("rect", {
      x: left2 - offset2.left,
      y: top2 - offset2.top,
      width: width + offset2.left + offset2.right,
      height: height + offset2.top + offset2.bottom
    })
  });
}
true ? ChartsClipPath.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The id of the clip path.
   */
  id: import_prop_types25.default.string.isRequired,
  /**
   * Offset, in pixels, of the clip path rectangle from the drawing area.
   *
   * A positive value will move the rectangle outside the drawing area.
   */
  offset: import_prop_types25.default.shape({
    bottom: import_prop_types25.default.number,
    left: import_prop_types25.default.number,
    right: import_prop_types25.default.number,
    top: import_prop_types25.default.number
  })
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsGrid/ChartsGrid.js
var import_prop_types26 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsGrid/chartsGridClasses.js
function getChartsGridUtilityClass(slot) {
  return generateUtilityClass("MuiChartsGrid", slot);
}
var chartsGridClasses = generateUtilityClasses("MuiChartsGrid", ["root", "line", "horizontalLine", "verticalLine"]);

// ../node_modules/@mui/x-charts/esm/ChartsGrid/styledComponents.js
var GridRoot = styled_default("g", {
  name: "MuiChartsGrid",
  slot: "Root",
  overridesResolver: (props, styles) => [{
    [`&.${chartsGridClasses.verticalLine}`]: styles.verticalLine
  }, {
    [`&.${chartsGridClasses.horizontalLine}`]: styles.horizontalLine
  }, styles.root]
})({});
var GridLine = styled_default("line", {
  name: "MuiChartsGrid",
  slot: "Line"
})(({
  theme
}) => ({
  stroke: (theme.vars || theme).palette.divider,
  shapeRendering: "crispEdges",
  strokeWidth: 1
}));

// ../node_modules/@mui/x-charts/esm/ChartsGrid/ChartsVerticalGrid.js
var React60 = __toESM(require_react(), 1);
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
function ChartsGridVertical(props) {
  const {
    instance
  } = useChartContext();
  const {
    axis,
    start: start2,
    end: end2,
    classes
  } = props;
  const {
    scale,
    tickNumber,
    tickInterval,
    tickSpacing
  } = axis;
  const xTicks = useTicks({
    scale,
    tickNumber,
    tickInterval,
    tickSpacing,
    direction: "x",
    ordinalTimeTicks: "ordinalTimeTicks" in axis ? axis.ordinalTimeTicks : void 0
  });
  return (0, import_jsx_runtime35.jsx)(React60.Fragment, {
    children: xTicks.map(({
      value,
      offset: offset2
    }) => {
      var _a;
      return !instance.isXInside(offset2) ? null : (0, import_jsx_runtime35.jsx)(GridLine, {
        y1: start2,
        y2: end2,
        x1: offset2,
        x2: offset2,
        className: classes.verticalLine
      }, `vertical-${((_a = value == null ? void 0 : value.getTime) == null ? void 0 : _a.call(value)) ?? value}`);
    })
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsGrid/ChartsHorizontalGrid.js
var React61 = __toESM(require_react(), 1);
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
function ChartsGridHorizontal(props) {
  const {
    instance
  } = useChartContext();
  const {
    axis,
    start: start2,
    end: end2,
    classes
  } = props;
  const {
    scale,
    tickNumber,
    tickInterval,
    tickSpacing
  } = axis;
  const yTicks = useTicks({
    scale,
    tickNumber,
    tickInterval,
    tickSpacing,
    direction: "y",
    ordinalTimeTicks: "ordinalTimeTicks" in axis ? axis.ordinalTimeTicks : void 0
  });
  return (0, import_jsx_runtime36.jsx)(React61.Fragment, {
    children: yTicks.map(({
      value,
      offset: offset2
    }) => {
      var _a;
      return !instance.isYInside(offset2) ? null : (0, import_jsx_runtime36.jsx)(GridLine, {
        y1: offset2,
        y2: offset2,
        x1: start2,
        x2: end2,
        className: classes.horizontalLine
      }, `horizontal-${((_a = value == null ? void 0 : value.getTime) == null ? void 0 : _a.call(value)) ?? value}`);
    })
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsGrid/ChartsGrid.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var _excluded16 = ["vertical", "horizontal"];
var useUtilityClasses13 = ({
  classes
}) => {
  const slots = {
    root: ["root"],
    verticalLine: ["line", "verticalLine"],
    horizontalLine: ["line", "horizontalLine"]
  };
  return composeClasses(slots, getChartsGridUtilityClass, classes);
};
function ChartsGrid(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiChartsGrid"
  });
  const drawingArea = useDrawingArea();
  const {
    vertical,
    horizontal
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  const classes = useUtilityClasses13(props);
  const horizontalAxis = yAxis[yAxisIds[0]];
  const verticalAxis = xAxis[xAxisIds[0]];
  return (0, import_jsx_runtime37.jsxs)(GridRoot, _extends({}, other, {
    className: classes.root,
    children: [vertical && (0, import_jsx_runtime37.jsx)(ChartsGridVertical, {
      axis: verticalAxis,
      start: drawingArea.top,
      end: drawingArea.height + drawingArea.top,
      classes
    }), horizontal && (0, import_jsx_runtime37.jsx)(ChartsGridHorizontal, {
      axis: horizontalAxis,
      start: drawingArea.left,
      end: drawingArea.width + drawingArea.left,
      classes
    })]
  }));
}
true ? ChartsGrid.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types26.default.object,
  /**
   * Displays horizontal grid.
   */
  horizontal: import_prop_types26.default.bool,
  /**
   * Displays vertical grid.
   */
  vertical: import_prop_types26.default.bool
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsOverlay/ChartsOverlay.js
var React62 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/ChartsOverlay/ChartsLoadingOverlay.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var _excluded17 = ["message"];
var StyledText = styled_default("text")(({
  theme
}) => _extends({}, theme.typography.body2, {
  stroke: "none",
  fill: (theme.vars || theme).palette.text.primary,
  shapeRendering: "crispEdges",
  textAnchor: "middle",
  dominantBaseline: "middle"
}));
function ChartsLoadingOverlay(props) {
  const {
    message
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const {
    top: top2,
    left: left2,
    height,
    width
  } = useDrawingArea();
  const {
    localeText
  } = useChartsLocalization();
  return (0, import_jsx_runtime38.jsx)(StyledText, _extends({
    x: left2 + width / 2,
    y: top2 + height / 2
  }, other, {
    children: message ?? localeText.loading
  }));
}

// ../node_modules/@mui/x-charts/esm/ChartsOverlay/ChartsNoDataOverlay.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var _excluded18 = ["message"];
var StyledText2 = styled_default("text")(({
  theme
}) => _extends({}, theme.typography.body2, {
  stroke: "none",
  fill: (theme.vars || theme).palette.text.primary,
  shapeRendering: "crispEdges",
  textAnchor: "middle",
  dominantBaseline: "middle"
}));
function ChartsNoDataOverlay(props) {
  const {
    message
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const {
    top: top2,
    left: left2,
    height,
    width
  } = useDrawingArea();
  const {
    localeText
  } = useChartsLocalization();
  return (0, import_jsx_runtime39.jsx)(StyledText2, _extends({
    x: left2 + width / 2,
    y: top2 + height / 2
  }, other, {
    children: message ?? localeText.noData
  }));
}

// ../node_modules/@mui/x-charts/esm/ChartsOverlay/ChartsOverlay.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
function useNoData() {
  const seriesPerType = useSeries();
  return Object.values(seriesPerType).every((seriesOfGivenType) => {
    if (!seriesOfGivenType) {
      return true;
    }
    const {
      series,
      seriesOrder
    } = seriesOfGivenType;
    return seriesOrder.every((seriesId) => {
      const seriesItem = series[seriesId];
      if (seriesItem.type === "sankey") {
        return seriesItem.data.links.length === 0;
      }
      return seriesItem.data.length === 0;
    });
  });
}
function ChartsOverlay(props) {
  var _a, _b, _c, _d;
  const noData = useNoData();
  if (props.loading) {
    const LoadingOverlay = ((_a = props.slots) == null ? void 0 : _a.loadingOverlay) ?? ChartsLoadingOverlay;
    return (0, import_jsx_runtime40.jsx)(LoadingOverlay, _extends({}, (_b = props.slotProps) == null ? void 0 : _b.loadingOverlay));
  }
  if (noData) {
    const NoDataOverlay = ((_c = props.slots) == null ? void 0 : _c.noDataOverlay) ?? ChartsNoDataOverlay;
    return (0, import_jsx_runtime40.jsx)(NoDataOverlay, _extends({}, (_d = props.slotProps) == null ? void 0 : _d.noDataOverlay));
  }
  return null;
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartClosestPoint/useChartClosestPoint.js
var React63 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartClosestPoint/findClosestPoints.js
function findClosestPoints(flatbush, seriesData, xScale, yScale, xZoomStart, xZoomEnd, yZoomStart, yZoomEnd, svgPointX, svgPointY, maxRadius = Infinity, maxResults = 1) {
  const originalXScale = xScale.copy();
  const originalYScale = yScale.copy();
  originalXScale.range([0, 1]);
  originalYScale.range([0, 1]);
  const excludeIfOutsideDrawingArea = function excludeIfOutsideDrawingArea2(index2) {
    const x2 = originalXScale(seriesData[index2].x);
    const y2 = originalYScale(seriesData[index2].y);
    return x2 >= xZoomStart && x2 <= xZoomEnd && y2 >= yZoomStart && y2 <= yZoomEnd;
  };
  const fx = xScale.range()[1] - xScale.range()[0];
  const fy = yScale.range()[1] - yScale.range()[0];
  const fxSq = fx * fx;
  const fySq = fy * fy;
  function sqDistFn(dx, dy) {
    return fxSq * dx * dx + fySq * dy * dy;
  }
  const pointX = originalXScale(invertScale(xScale, svgPointX, (dataIndex) => {
    var _a;
    return (_a = seriesData[dataIndex]) == null ? void 0 : _a.x;
  }));
  const pointY = originalYScale(invertScale(yScale, svgPointY, (dataIndex) => {
    var _a;
    return (_a = seriesData[dataIndex]) == null ? void 0 : _a.y;
  }));
  return flatbush.neighbors(pointX, pointY, maxResults, maxRadius != null ? maxRadius * maxRadius : Infinity, excludeIfOutsideDrawingArea, sqDistFn);
}
function invertScale(scale, value, getDataPoint) {
  if (isOrdinalScale(scale)) {
    const dataIndex = scale.bandwidth() === 0 ? Math.floor((value - Math.min(...scale.range()) + scale.step() / 2) / scale.step()) : Math.floor((value - Math.min(...scale.range())) / scale.step());
    return getDataPoint(dataIndex);
  }
  return scale.invert(value);
}

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartClosestPoint/useChartClosestPoint.js
var useChartClosestPoint = ({
  svgRef,
  params,
  store,
  instance
}) => {
  var _a;
  const {
    disableVoronoi,
    voronoiMaxRadius,
    onItemClick
  } = params;
  const {
    axis: xAxis,
    axisIds: xAxisIds
  } = store.use(selectorChartXAxis);
  const {
    axis: yAxis,
    axisIds: yAxisIds
  } = store.use(selectorChartYAxis);
  const zoomIsInteracting = store.use(selectorChartZoomIsInteracting);
  const {
    series,
    seriesOrder
  } = ((_a = store.use(selectorChartSeriesProcessed)) == null ? void 0 : _a.scatter) ?? {};
  const flatbushMap = store.use(zoomIsInteracting ? selectorChartSeriesEmptyFlatbushMap : selectorChartSeriesFlatbushMap);
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  useEnhancedEffect_default(() => {
    store.set("voronoi", {
      isVoronoiEnabled: !disableVoronoi
    });
  }, [store, disableVoronoi]);
  React63.useEffect(() => {
    if (svgRef.current === null || disableVoronoi) {
      return void 0;
    }
    const element = svgRef.current;
    function getClosestPoint(event) {
      const svgPoint = getSVGPoint(element, event);
      if (!instance.isPointInside(svgPoint.x, svgPoint.y)) {
        return "outside-chart";
      }
      let closestPoint = void 0;
      for (const seriesId of seriesOrder ?? []) {
        const aSeries = (series ?? {})[seriesId];
        const flatbush = flatbushMap.get(seriesId);
        if (!flatbush) {
          continue;
        }
        const xAxisId = aSeries.xAxisId ?? defaultXAxisId;
        const yAxisId = aSeries.yAxisId ?? defaultYAxisId;
        const xAxisZoom = selectorChartAxisZoomData(store.state, xAxisId);
        const yAxisZoom = selectorChartAxisZoomData(store.state, yAxisId);
        const maxRadius = voronoiMaxRadius === "item" ? aSeries.markerSize : voronoiMaxRadius;
        const xZoomStart = ((xAxisZoom == null ? void 0 : xAxisZoom.start) ?? 0) / 100;
        const xZoomEnd = ((xAxisZoom == null ? void 0 : xAxisZoom.end) ?? 100) / 100;
        const yZoomStart = ((yAxisZoom == null ? void 0 : yAxisZoom.start) ?? 0) / 100;
        const yZoomEnd = ((yAxisZoom == null ? void 0 : yAxisZoom.end) ?? 100) / 100;
        const xScale = xAxis[xAxisId].scale;
        const yScale = yAxis[yAxisId].scale;
        const closestPointIndex = findClosestPoints(flatbush, aSeries.data, xScale, yScale, xZoomStart, xZoomEnd, yZoomStart, yZoomEnd, svgPoint.x, svgPoint.y, maxRadius)[0];
        if (closestPointIndex === void 0) {
          continue;
        }
        const point6 = aSeries.data[closestPointIndex];
        const scaledX = xScale(point6.x);
        const scaledY = yScale(point6.y);
        const distSq = (scaledX - svgPoint.x) ** 2 + (scaledY - svgPoint.y) ** 2;
        if (closestPoint === void 0 || distSq < closestPoint.distanceSq) {
          closestPoint = {
            dataIndex: closestPointIndex,
            seriesId,
            distanceSq: distSq
          };
        }
      }
      if (closestPoint === void 0) {
        return "no-point-found";
      }
      return {
        seriesId: closestPoint.seriesId,
        dataIndex: closestPoint.dataIndex
      };
    }
    const moveEndHandler = instance.addInteractionListener("moveEnd", (event) => {
      var _a2, _b, _c;
      if (!event.detail.activeGestures.pan) {
        (_a2 = instance.cleanInteraction) == null ? void 0 : _a2.call(instance);
        (_b = instance.clearHighlight) == null ? void 0 : _b.call(instance);
        (_c = instance.removeTooltipItem) == null ? void 0 : _c.call(instance);
      }
    });
    const panEndHandler = instance.addInteractionListener("panEnd", (event) => {
      var _a2, _b, _c;
      if (!event.detail.activeGestures.move) {
        (_a2 = instance.cleanInteraction) == null ? void 0 : _a2.call(instance);
        (_b = instance.clearHighlight) == null ? void 0 : _b.call(instance);
        (_c = instance.removeTooltipItem) == null ? void 0 : _c.call(instance);
      }
    });
    const pressEndHandler = instance.addInteractionListener("quickPressEnd", (event) => {
      var _a2, _b, _c;
      if (!event.detail.activeGestures.move && !event.detail.activeGestures.pan) {
        (_a2 = instance.cleanInteraction) == null ? void 0 : _a2.call(instance);
        (_b = instance.clearHighlight) == null ? void 0 : _b.call(instance);
        (_c = instance.removeTooltipItem) == null ? void 0 : _c.call(instance);
      }
    });
    const gestureHandler = (event) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
      const closestPoint = getClosestPoint(event.detail.srcEvent);
      if (closestPoint === "outside-chart") {
        (_a2 = instance.cleanInteraction) == null ? void 0 : _a2.call(instance);
        (_b = instance.clearHighlight) == null ? void 0 : _b.call(instance);
        (_c = instance.removeTooltipItem) == null ? void 0 : _c.call(instance);
        return;
      }
      if (closestPoint === "outside-voronoi-max-radius" || closestPoint === "no-point-found") {
        (_d = instance.removeTooltipItem) == null ? void 0 : _d.call(instance);
        (_e = instance.clearHighlight) == null ? void 0 : _e.call(instance);
        (_f = instance.removeTooltipItem) == null ? void 0 : _f.call(instance);
        return;
      }
      const {
        seriesId,
        dataIndex
      } = closestPoint;
      (_g = instance.setTooltipItem) == null ? void 0 : _g.call(instance, {
        type: "scatter",
        seriesId,
        dataIndex
      });
      (_h = instance.setLastUpdateSource) == null ? void 0 : _h.call(instance, "pointer");
      (_i = instance.setHighlight) == null ? void 0 : _i.call(instance, {
        seriesId,
        dataIndex
      });
    };
    const tapHandler = instance.addInteractionListener("tap", (event) => {
      const closestPoint = getClosestPoint(event.detail.srcEvent);
      if (typeof closestPoint !== "string" && onItemClick) {
        const {
          seriesId,
          dataIndex
        } = closestPoint;
        onItemClick(event.detail.srcEvent, {
          type: "scatter",
          seriesId,
          dataIndex
        });
      }
    });
    const moveHandler = instance.addInteractionListener("move", gestureHandler);
    const panHandler = instance.addInteractionListener("pan", gestureHandler);
    const pressHandler = instance.addInteractionListener("quickPress", gestureHandler);
    return () => {
      tapHandler.cleanup();
      moveHandler.cleanup();
      moveEndHandler.cleanup();
      panHandler.cleanup();
      panEndHandler.cleanup();
      pressHandler.cleanup();
      pressEndHandler.cleanup();
    };
  }, [svgRef, yAxis, xAxis, voronoiMaxRadius, onItemClick, disableVoronoi, instance, seriesOrder, series, flatbushMap, defaultXAxisId, defaultYAxisId, store]);
  const enableVoronoiCallback = useEventCallback_default(() => {
    store.set("voronoi", {
      isVoronoiEnabled: true
    });
  });
  const disableVoronoiCallback = useEventCallback_default(() => {
    store.set("voronoi", {
      isVoronoiEnabled: false
    });
  });
  return {
    instance: {
      enableVoronoi: enableVoronoiCallback,
      disableVoronoi: disableVoronoiCallback
    }
  };
};
useChartClosestPoint.getDefaultizedParams = ({
  params
}) => _extends({}, params, {
  disableVoronoi: params.disableVoronoi ?? !params.series.some((item) => item.type === "scatter")
});
useChartClosestPoint.getInitialState = (params) => ({
  voronoi: {
    isVoronoiEnabled: !params.disableVoronoi
  }
});
useChartClosestPoint.params = {
  disableVoronoi: true,
  voronoiMaxRadius: true,
  onItemClick: true
};

// ../node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartClosestPoint/useChartClosestPoint.selectors.js
var selectVoronoi = (state) => state.voronoi;
var selectorChartsIsVoronoiEnabled = createSelector2(selectVoronoi, (voronoi) => voronoi == null ? void 0 : voronoi.isVoronoiEnabled);

// ../node_modules/@mui/x-charts/esm/internals/plugins/allPlugins.js
var DEFAULT_PLUGINS = [useChartZAxis, useChartBrush, useChartTooltip, useChartInteraction, useChartCartesianAxis, useChartHighlight, useChartClosestPoint, useChartKeyboardNavigation];

// ../node_modules/@mui/x-charts/esm/ChartContainer/useChartContainerProps.js
var _excluded19 = ["width", "height", "margin", "children", "series", "colors", "dataset", "desc", "onAxisClick", "highlightedAxis", "onHighlightedAxisChange", "disableVoronoi", "voronoiMaxRadius", "onItemClick", "disableAxisListener", "highlightedItem", "onHighlightChange", "sx", "title", "xAxis", "yAxis", "zAxis", "rotationAxis", "radiusAxis", "skipAnimation", "seriesConfig", "plugins", "localeText", "slots", "slotProps", "experimentalFeatures", "enableKeyboardNavigation", "brushConfig"];
var useChartContainerProps = (props, ref) => {
  const _ref = props, {
    width,
    height,
    margin,
    children: children2,
    series,
    colors,
    dataset,
    desc,
    onAxisClick,
    highlightedAxis,
    onHighlightedAxisChange,
    disableVoronoi,
    voronoiMaxRadius,
    onItemClick,
    disableAxisListener,
    highlightedItem,
    onHighlightChange,
    sx,
    title,
    xAxis,
    yAxis,
    zAxis,
    rotationAxis,
    radiusAxis,
    skipAnimation,
    seriesConfig,
    plugins,
    localeText,
    slots,
    slotProps,
    experimentalFeatures,
    enableKeyboardNavigation,
    brushConfig
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded19);
  const chartsSurfaceProps = _extends({
    title,
    desc,
    sx,
    ref
  }, other);
  const chartDataProviderProps = {
    margin,
    series,
    colors,
    dataset,
    disableAxisListener,
    highlightedItem,
    onHighlightChange,
    onAxisClick,
    highlightedAxis,
    onHighlightedAxisChange,
    disableVoronoi,
    voronoiMaxRadius,
    onItemClick,
    xAxis,
    yAxis,
    zAxis,
    rotationAxis,
    radiusAxis,
    skipAnimation,
    width,
    height,
    localeText,
    seriesConfig,
    experimentalFeatures,
    enableKeyboardNavigation,
    brushConfig,
    plugins: plugins ?? DEFAULT_PLUGINS,
    slots,
    slotProps
  };
  return {
    chartDataProviderProps,
    chartsSurfaceProps,
    children: children2
  };
};

// ../node_modules/@mui/x-charts/esm/ChartDataProvider/ChartDataProvider.js
var React83 = __toESM(require_react(), 1);
var import_prop_types41 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/material/esm/IconButton/IconButton.js
var React78 = __toESM(require_react(), 1);
var import_prop_types39 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/material/esm/utils/createSvgIcon.js
var React65 = __toESM(require_react(), 1);

// ../node_modules/@mui/material/esm/SvgIcon/SvgIcon.js
var React64 = __toESM(require_react(), 1);
var import_prop_types27 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/material/esm/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// ../node_modules/@mui/material/esm/SvgIcon/SvgIcon.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses14 = (ownerState) => {
  const {
    color: color2,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize_default(color2)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(memoTheme_default(({
  theme
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (_d = (_a = theme.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", {
      duration: (_c = (_b = (theme.vars ?? theme).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter
    }),
    variants: [
      {
        props: (props) => !props.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((_f = (_e = theme.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((_h = (_g = theme.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((_j = (_i = theme.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color2]) => {
        var _a2, _b2;
        return {
          props: {
            color: color2
          },
          style: {
            color: (_b2 = (_a2 = (theme.vars ?? theme).palette) == null ? void 0 : _a2[color2]) == null ? void 0 : _b2.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (_l = (_k = (theme.vars ?? theme).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (_n = (_m = (theme.vars ?? theme).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
}));
var SvgIcon = React64.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children: children2,
    className,
    color: color2 = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24",
    ...other
  } = props;
  const hasSvgAsChild = React64.isValidElement(children2) && children2.type === "svg";
  const ownerState = {
    ...props,
    color: color2,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  };
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses14(ownerState);
  return (0, import_jsx_runtime41.jsxs)(SvgIconRoot, {
    as: component,
    className: clsx_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref,
    ...more,
    ...other,
    ...hasSvgAsChild && children2.props,
    ownerState,
    children: [hasSvgAsChild ? children2.props.children : children2, titleAccess ? (0, import_jsx_runtime41.jsx)("title", {
      children: titleAccess
    }) : null]
  });
});
true ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types27.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types27.default.object,
  /**
   * @ignore
   */
  className: import_prop_types27.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: import_prop_types27.default.oneOfType([import_prop_types27.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types27.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types27.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types27.default.oneOfType([import_prop_types27.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types27.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types27.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types27.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types27.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object, import_prop_types27.default.bool])), import_prop_types27.default.func, import_prop_types27.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types27.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types27.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";

// ../node_modules/@mui/material/esm/utils/createSvgIcon.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);

// ../node_modules/@mui/material/esm/utils/useId.js
var useId_default = useId;

// ../node_modules/@mui/utils/esm/useControlled/useControlled.js
var React66 = __toESM(require_react(), 1);

// ../node_modules/@mui/material/esm/utils/useEventCallback.js
var useEventCallback_default2 = useEventCallback_default;

// ../node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef_default = useForkRef;

// ../node_modules/@mui/material/esm/ButtonBase/ButtonBase.js
var React76 = __toESM(require_react(), 1);
var import_prop_types37 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js
var import_prop_types28 = __toESM(require_prop_types(), 1);
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  if (typeof propValue === "function" && !isClassComponent(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types28.default.elementType, elementTypeAcceptingRef);

// ../node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
function isFocusVisible(element) {
  try {
    return element.matches(":focus-visible");
  } catch (error) {
    if (!window.navigator.userAgent.includes("jsdom")) {
      console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join("\n"));
    }
  }
  return false;
}

// ../node_modules/@mui/material/esm/useLazyRipple/useLazyRipple.js
var React67 = __toESM(require_react(), 1);
var LazyRipple = class _LazyRipple {
  constructor() {
    __publicField(this, "mountEffect", () => {
      if (this.shouldMount && !this.didMount) {
        if (this.ref.current !== null) {
          this.didMount = true;
          this.mounted.resolve();
        }
      }
    });
    this.ref = {
      current: null
    };
    this.mounted = null;
    this.didMount = false;
    this.shouldMount = false;
    this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new _LazyRipple();
  }
  static use() {
    const ripple = useLazyRef(_LazyRipple.create).current;
    const [shouldMount, setShouldMount] = React67.useState(false);
    ripple.shouldMount = shouldMount;
    ripple.setShouldMount = setShouldMount;
    React67.useEffect(ripple.mountEffect, [shouldMount]);
    return ripple;
  }
  mount() {
    if (!this.mounted) {
      this.mounted = createControlledPromise();
      this.shouldMount = true;
      this.setShouldMount(this.shouldMount);
    }
    return this.mounted;
  }
  /* Ripple API */
  start(...args) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.start(...args);
    });
  }
  stop(...args) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.stop(...args);
    });
  }
  pulsate(...args) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...args);
    });
  }
};
function useLazyRipple() {
  return LazyRipple.use();
}
function createControlledPromise() {
  let resolve;
  let reject;
  const p = new Promise((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });
  p.resolve = resolve;
  p.reject = reject;
  return p;
}

// ../node_modules/@mui/material/esm/ButtonBase/TouchRipple.js
var React75 = __toESM(require_react(), 1);
var import_prop_types36 = __toESM(require_prop_types(), 1);

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e3) {
    return t4.__proto__ = e3, t4;
  }, _setPrototypeOf(t, e);
}

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// ../node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types31 = __toESM(require_prop_types());

// ../node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// ../node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// ../node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// ../node_modules/react-transition-group/esm/CSSTransition.js
var import_react3 = __toESM(require_react());

// ../node_modules/react-transition-group/esm/Transition.js
var import_prop_types30 = __toESM(require_prop_types());
var import_react2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// ../node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// ../node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types29 = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types29.default.oneOfType([import_prop_types29.default.number, import_prop_types29.default.shape({
  enter: import_prop_types29.default.number,
  exit: import_prop_types29.default.number,
  appear: import_prop_types29.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types29.default.oneOfType([import_prop_types29.default.string, import_prop_types29.default.shape({
  enter: import_prop_types29.default.string,
  exit: import_prop_types29.default.string,
  active: import_prop_types29.default.string
}), import_prop_types29.default.shape({
  enter: import_prop_types29.default.string,
  enterDone: import_prop_types29.default.string,
  enterActive: import_prop_types29.default.string,
  exit: import_prop_types29.default.string,
  exitDone: import_prop_types29.default.string,
  exitActive: import_prop_types29.default.string
})]) : null;

// ../node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react = __toESM(require_react());
var TransitionGroupContext_default = import_react.default.createContext(null);

// ../node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// ../node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition2 = function(_React$Component) {
  _inheritsLoose(Transition3, _React$Component);
  function Transition3(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition3.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition3.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout3 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout3;
    if (timeout3 != null && typeof timeout3 !== "number") {
      exit = timeout3.exit;
      enter = timeout3.enter;
      appear = timeout3.appear !== void 0 ? timeout3.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout3, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout3 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout3 != null) {
      setTimeout(this.nextCallback, timeout3);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children2 = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      import_react2.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children2 === "function" ? children2(status, childProps) : import_react2.default.cloneElement(import_react2.default.Children.only(children2), childProps))
    );
  };
  return Transition3;
}(import_react2.default.Component);
Transition2.contextType = TransitionGroupContext_default;
Transition2.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types30.default.shape({
    current: typeof Element === "undefined" ? import_prop_types30.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types30.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types30.default.oneOfType([import_prop_types30.default.func.isRequired, import_prop_types30.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types30.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types30.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types30.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types30.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types30.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types30.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout2(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types30.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types30.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types30.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types30.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types30.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types30.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types30.default.func
} : {};
function noop2() {
}
Transition2.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop2,
  onEntering: noop2,
  onEntered: noop2,
  onExit: noop2,
  onExiting: noop2,
  onExited: noop2
};
Transition2.UNMOUNTED = UNMOUNTED;
Transition2.EXITED = EXITED;
Transition2.ENTERING = ENTERING;
Transition2.ENTERED = ENTERED;
Transition2.EXITING = EXITING;
var Transition_default = Transition2;

// ../node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c2) {
    return addClass(node, c2);
  });
};
var removeClass2 = function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c2) {
    return removeClass(node, c2);
  });
};
var CSSTransition = function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === "string";
      var prefix = isStringClassNames && classNames ? classNames + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node) forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _ = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return import_react3.default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react3.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types31.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types31.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types31.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types31.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types31.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types31.default.func
}) : {};

// ../node_modules/react-transition-group/esm/ReplaceTransition.js
var import_prop_types33 = __toESM(require_prop_types());
var import_react6 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// ../node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types32 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());

// ../node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react4 = __toESM(require_react());
function getChildMapping(children2, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react4.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children2) import_react4.Children.map(children2, function(c2) {
    return c2;
  }).forEach(function(child) {
    result[child.key] = mapper(child);
  });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react4.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children2 = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children2).forEach(function(key) {
    var child = children2[key];
    if (!(0, import_react4.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react4.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children2[key] = (0, import_react4.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children2[key] = (0, import_react4.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react4.isValidElement)(prevChild)) {
      children2[key] = (0, import_react4.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children2;
}

// ../node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps3 = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children2 = _extends({}, state.children);
        delete children2[child.key];
        return {
          children: children2
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children2 = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return import_react5.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children2);
    }
    return import_react5.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, import_react5.default.createElement(Component, props, children2));
  };
  return TransitionGroup2;
}(import_react5.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types32.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types32.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types32.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types32.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types32.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types32.default.func
} : {};
TransitionGroup.defaultProps = defaultProps3;
var TransitionGroup_default = TransitionGroup;

// ../node_modules/react-transition-group/esm/ReplaceTransition.js
var ReplaceTransition = function(_React$Component) {
  _inheritsLoose(ReplaceTransition2, _React$Component);
  function ReplaceTransition2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.handleEnter = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _this.handleLifecycle("onEnter", 0, args);
    };
    _this.handleEntering = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _this.handleLifecycle("onEntering", 0, args);
    };
    _this.handleEntered = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _this.handleLifecycle("onEntered", 0, args);
    };
    _this.handleExit = function() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return _this.handleLifecycle("onExit", 1, args);
    };
    _this.handleExiting = function() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return _this.handleLifecycle("onExiting", 1, args);
    };
    _this.handleExited = function() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return _this.handleLifecycle("onExited", 1, args);
    };
    return _this;
  }
  var _proto = ReplaceTransition2.prototype;
  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;
    var children2 = this.props.children;
    var child = import_react6.default.Children.toArray(children2)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? void 0 : import_react_dom2.default.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);
    var _React$Children$toArr = import_react6.default.Children.toArray(children2), first = _React$Children$toArr[0], second2 = _React$Children$toArr[1];
    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return import_react6.default.createElement(TransitionGroup_default, props, inProp ? import_react6.default.cloneElement(first, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : import_react6.default.cloneElement(second2, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };
  return ReplaceTransition2;
}(import_react6.default.Component);
ReplaceTransition.propTypes = true ? {
  in: import_prop_types33.default.bool.isRequired,
  children: function children(props, propName) {
    if (import_react6.default.Children.count(props[propName]) !== 2) return new Error('"' + propName + '" must be exactly two transition components.');
    return null;
  }
} : {};

// ../node_modules/react-transition-group/esm/SwitchTransition.js
var import_react7 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());
var _leaveRenders;
var _enterRenders;
function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;
  if (import_react7.default.isValidElement(oldChildren) && import_react7.default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }
  return true;
}
var modes = {
  out: "out-in",
  in: "in-out"
};
var callHook = function callHook2(element, name, cb) {
  return function() {
    var _element$props;
    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};
var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function(_ref) {
  var current = _ref.current, changeState = _ref.changeState;
  return import_react7.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function(_ref2) {
  var current = _ref2.current, changeState = _ref2.changeState, children2 = _ref2.children;
  return [current, import_react7.default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function(_ref3) {
  var children2 = _ref3.children, changeState = _ref3.changeState;
  return import_react7.default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERED, import_react7.default.cloneElement(children2, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function(_ref4) {
  var current = _ref4.current, children2 = _ref4.children, changeState = _ref4.changeState;
  return [import_react7.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERED, import_react7.default.cloneElement(children2, {
        in: true
      }));
    })
  }), import_react7.default.cloneElement(children2, {
    in: true
  })];
}, _enterRenders);
var SwitchTransition = function(_React$Component) {
  _inheritsLoose(SwitchTransition2, _React$Component);
  function SwitchTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;
    _this.changeState = function(status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }
      _this.setState({
        status,
        current
      });
    };
    return _this;
  }
  var _proto = SwitchTransition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };
  SwitchTransition2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }
    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }
    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }
    return {
      current: import_react7.default.cloneElement(props.children, {
        in: true
      })
    };
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, mode2 = _this$props.mode, _this$state = this.state, status = _this$state.status, current = _this$state.current;
    var data = {
      children: children2,
      current,
      changeState: this.changeState,
      status
    };
    var component;
    switch (status) {
      case ENTERING:
        component = enterRenders[mode2](data);
        break;
      case EXITING:
        component = leaveRenders[mode2](data);
        break;
      case ENTERED:
        component = current;
    }
    return import_react7.default.createElement(TransitionGroupContext_default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };
  return SwitchTransition2;
}(import_react7.default.Component);
SwitchTransition.propTypes = true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: import_prop_types34.default.oneOf([modes.in, modes.out]),
  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: import_prop_types34.default.oneOfType([import_prop_types34.default.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

// ../node_modules/@mui/utils/esm/useTimeout/useTimeout.js
var Timeout = class _Timeout {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    });
    __publicField(this, "disposeEffect", () => {
      return this.clear;
    });
  }
  static create() {
    return new _Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn2) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn2();
    }, delay);
  }
};
function useTimeout() {
  const timeout3 = useLazyRef(Timeout.create).current;
  useOnMount(timeout3.disposeEffect);
  return timeout3;
}

// ../node_modules/@mui/material/esm/ButtonBase/Ripple.js
var React74 = __toESM(require_react(), 1);
var import_prop_types35 = __toESM(require_prop_types(), 1);
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout: timeout3
  } = props;
  const [leaving, setLeaving] = React74.useState(false);
  const rippleClassName = clsx_default(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React74.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout3);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout3]);
  return (0, import_jsx_runtime43.jsx)("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: (0, import_jsx_runtime43.jsx)("span", {
      className: childClassName
    })
  });
}
true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types35.default.object.isRequired,
  className: import_prop_types35.default.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: import_prop_types35.default.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: import_prop_types35.default.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: import_prop_types35.default.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: import_prop_types35.default.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: import_prop_types35.default.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: import_prop_types35.default.number,
  /**
   * exit delay
   */
  timeout: import_prop_types35.default.number.isRequired
} : void 0;
var Ripple_default = Ripple;

// ../node_modules/@mui/material/esm/ButtonBase/touchRippleClasses.js
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var touchRippleClasses_default = touchRippleClasses;

// ../node_modules/@mui/material/esm/ButtonBase/TouchRipple.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var DURATION = 550;
var DELAY_RIPPLE = 80;
var enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
var exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
var pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
var TouchRippleRoot = styled_default("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
var TouchRippleRipple = styled_default(Ripple_default, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses_default.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses_default.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses_default.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses_default.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses_default.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;
var TouchRipple = React75.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className,
    ...other
  } = props;
  const [ripples, setRipples] = React75.useState([]);
  const nextKey = React75.useRef(0);
  const rippleCallback = React75.useRef(null);
  React75.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React75.useRef(false);
  const startTimer = useTimeout();
  const startTimerCommit = React75.useRef(null);
  const container = React75.useRef(null);
  const startCommit = React75.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, (0, import_jsx_runtime44.jsx)(TouchRippleRipple, {
      classes: {
        ripple: clsx_default(classes.ripple, touchRippleClasses_default.ripple),
        rippleVisible: clsx_default(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
        ripplePulsate: clsx_default(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
        child: clsx_default(classes.child, touchRippleClasses_default.child),
        childLeaving: clsx_default(classes.childLeaving, touchRippleClasses_default.childLeaving),
        childPulsate: clsx_default(classes.childPulsate, touchRippleClasses_default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start2 = React75.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event == null ? void 0 : event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = React75.useCallback(() => {
    start2({}, {
      pulsate: true
    });
  }, [start2]);
  const stop = React75.useCallback((event, cb) => {
    startTimer.clear();
    if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  React75.useImperativeHandle(ref, () => ({
    pulsate,
    start: start2,
    stop
  }), [pulsate, start2, stop]);
  return (0, import_jsx_runtime44.jsx)(TouchRippleRoot, {
    className: clsx_default(touchRippleClasses_default.root, classes.root, className),
    ref: container,
    ...other,
    children: (0, import_jsx_runtime44.jsx)(TransitionGroup_default, {
      component: null,
      exit: true,
      children: ripples
    })
  });
});
true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: import_prop_types36.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types36.default.object,
  /**
   * @ignore
   */
  className: import_prop_types36.default.string
} : void 0;
var TouchRipple_default = TouchRipple;

// ../node_modules/@mui/material/esm/ButtonBase/buttonBaseClasses.js
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var buttonBaseClasses_default = buttonBaseClasses;

// ../node_modules/@mui/material/esm/ButtonBase/ButtonBase.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses15 = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var ButtonBaseRoot = styled_default("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses_default.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
var ButtonBase = React76.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children: children2,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type,
    ...other
  } = props;
  const buttonRef = React76.useRef(null);
  const ripple = useLazyRipple();
  const handleRippleRef = useForkRef_default(ripple.ref, touchRippleRef);
  const [focusVisible, setFocusVisible] = React76.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React76.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
  React76.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      ripple.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, ripple]);
  const handleMouseDown = useRippleHandler(ripple, "start", onMouseDown, disableTouchRipple);
  const handleContextMenu = useRippleHandler(ripple, "stop", onContextMenu, disableTouchRipple);
  const handleDragLeave = useRippleHandler(ripple, "stop", onDragLeave, disableTouchRipple);
  const handleMouseUp = useRippleHandler(ripple, "stop", onMouseUp, disableTouchRipple);
  const handleMouseLeave = useRippleHandler(ripple, "stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  }, disableTouchRipple);
  const handleTouchStart = useRippleHandler(ripple, "start", onTouchStart, disableTouchRipple);
  const handleTouchEnd = useRippleHandler(ripple, "stop", onTouchEnd, disableTouchRipple);
  const handleTouchMove = useRippleHandler(ripple, "stop", onTouchMove, disableTouchRipple);
  const handleBlur = useRippleHandler(ripple, "stop", (event) => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback_default2((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const handleKeyDown = useEventCallback_default2((event) => {
    if (focusRipple && !event.repeat && focusVisible && event.key === " ") {
      ripple.stop(event, () => {
        ripple.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback_default2((event) => {
    if (focusRipple && event.key === " " && focusVisible && !event.defaultPrevented) {
      ripple.stop(event, () => {
        ripple.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    const hasFormAttributes = !!other.formAction;
    buttonProps.type = type === void 0 && !hasFormAttributes ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef_default(ref, buttonRef);
  const ownerState = {
    ...props,
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  };
  const classes = useUtilityClasses15(ownerState);
  return (0, import_jsx_runtime45.jsxs)(ButtonBaseRoot, {
    as: ComponentProp,
    className: clsx_default(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type,
    ...buttonProps,
    ...other,
    children: [children2, enableTouchRipple ? (0, import_jsx_runtime45.jsx)(TouchRipple_default, {
      ref: handleRippleRef,
      center: centerRipple,
      ...TouchRippleProps
    }) : null]
  });
});
function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
  return useEventCallback_default2((event) => {
    if (eventCallback) {
      eventCallback(event);
    }
    if (!skipRippleAction) {
      ripple[rippleAction](event);
    }
    return true;
  });
}
true ? ButtonBase.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType_default,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types37.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types37.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types37.default.object,
  /**
   * @ignore
   */
  className: import_prop_types37.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef_default,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types37.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types37.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types37.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types37.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types37.default.string,
  /**
   * @ignore
   */
  formAction: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.string]),
  /**
   * @ignore
   */
  href: import_prop_types37.default.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: import_prop_types37.default.elementType,
  /**
   * @ignore
   */
  onBlur: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onContextMenu: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onDragLeave: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types37.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onMouseUp: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onTouchEnd: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onTouchMove: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onTouchStart: import_prop_types37.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types37.default.oneOfType([import_prop_types37.default.arrayOf(import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object, import_prop_types37.default.bool])), import_prop_types37.default.func, import_prop_types37.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types37.default.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types37.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.shape({
    current: import_prop_types37.default.shape({
      pulsate: import_prop_types37.default.func.isRequired,
      start: import_prop_types37.default.func.isRequired,
      stop: import_prop_types37.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["button", "reset", "submit"]), import_prop_types37.default.string])
} : void 0;
var ButtonBase_default = ButtonBase;

// ../node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var React77 = __toESM(require_react(), 1);
var import_prop_types38 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/material/esm/CircularProgress/circularProgressClasses.js
function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass("MuiCircularProgress", slot);
}
var circularProgressClasses = generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);

// ../node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var SIZE = 44;
var circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
var circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
var rotateAnimation = typeof circularRotateKeyframe !== "string" ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
var dashAnimation = typeof circularDashKeyframe !== "string" ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
var useUtilityClasses16 = (ownerState) => {
  const {
    classes,
    variant,
    color: color2,
    disableShrink
  } = ownerState;
  const slots = {
    root: ["root", variant, `color${capitalize_default(color2)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${capitalize_default(variant)}`, disableShrink && "circleDisableShrink"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
var CircularProgressRoot = styled_default("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`color${capitalize_default(ownerState.color)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
    props: {
      color: color2
    },
    style: {
      color: (theme.vars || theme).palette[color2].main
    }
  }))]
})));
var CircularProgressSVG = styled_default("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
});
var CircularProgressCircle = styled_default("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.circle, styles[`circle${capitalize_default(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(memoTheme_default(({
  theme
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));
var CircularProgressTrack = styled_default("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(memoTheme_default(({
  theme
}) => ({
  stroke: "currentColor",
  opacity: (theme.vars || theme).palette.action.activatedOpacity
})));
var CircularProgress = React77.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiCircularProgress"
  });
  const {
    className,
    color: color2 = "primary",
    disableShrink = false,
    enableTrackSlot = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color: color2,
    disableShrink,
    size,
    thickness,
    value,
    variant,
    enableTrackSlot
  };
  const classes = useUtilityClasses16(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = "rotate(-90deg)";
  }
  return (0, import_jsx_runtime46.jsx)(CircularProgressRoot, {
    className: clsx_default(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState,
    ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: (0, import_jsx_runtime46.jsxs)(CircularProgressSVG, {
      className: classes.svg,
      ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: [enableTrackSlot ? (0, import_jsx_runtime46.jsx)(CircularProgressTrack, {
        className: classes.track,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness,
        "aria-hidden": "true"
      }) : null, (0, import_jsx_runtime46.jsx)(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })]
    })
  });
});
true ? CircularProgress.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types38.default.object,
  /**
   * @ignore
   */
  className: import_prop_types38.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types38.default.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: chainPropTypes(import_prop_types38.default.bool, (props) => {
    if (props.disableShrink && props.variant && props.variant !== "indeterminate") {
      return new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
    }
    return null;
  }),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: import_prop_types38.default.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.string]),
  /**
   * @ignore
   */
  style: import_prop_types38.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.func, import_prop_types38.default.object, import_prop_types38.default.bool])), import_prop_types38.default.func, import_prop_types38.default.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: import_prop_types38.default.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: import_prop_types38.default.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: import_prop_types38.default.oneOf(["determinate", "indeterminate"])
} : void 0;
var CircularProgress_default = CircularProgress;

// ../node_modules/@mui/material/esm/IconButton/iconButtonClasses.js
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]);
var iconButtonClasses_default = iconButtonClasses;

// ../node_modules/@mui/material/esm/IconButton/IconButton.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses17 = (ownerState) => {
  const {
    classes,
    disabled,
    color: color2,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", disabled && "disabled", color2 !== "default" && `color${capitalize_default(color2)}`, edge && `edge${capitalize_default(edge)}`, `size${capitalize_default(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
var IconButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.loading && styles.loading, ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize_default(ownerState.edge)}`], styles[`size${capitalize_default(ownerState.size)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: (props) => !props.disableRipple,
    style: {
      "--IconButton-hoverBg": theme.alpha((theme.vars || theme).palette.action.active, (theme.vars || theme).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), memoTheme_default(({
  theme
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
    props: {
      color: color2
    },
    style: {
      color: (theme.vars || theme).palette[color2].main
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
    props: {
      color: color2
    },
    style: {
      "--IconButton-hoverBg": theme.alpha((theme.vars || theme).palette[color2].main, (theme.vars || theme).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${iconButtonClasses_default.disabled}`]: {
    backgroundColor: "transparent",
    color: (theme.vars || theme).palette.action.disabled
  },
  [`&.${iconButtonClasses_default.loading}`]: {
    color: "transparent"
  }
})));
var IconButtonLoadingIndicator = styled_default("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }]
}));
var IconButton = React78.forwardRef(function IconButton2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children: children2,
    className,
    color: color2 = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium",
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp ?? (0, import_jsx_runtime47.jsx)(CircularProgress_default, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color: color2,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses17(ownerState);
  return (0, import_jsx_runtime47.jsxs)(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: clsx_default(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref,
    ...other,
    ownerState,
    children: [typeof loading === "boolean" && // use plain HTML span to minimize the runtime overhead
    (0, import_jsx_runtime47.jsx)("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: (0, import_jsx_runtime47.jsx)(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loading && loadingIndicator
      })
    }), children2]
  });
});
true ? IconButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: chainPropTypes(import_prop_types39.default.node, (props) => {
    const found = React78.Children.toArray(props.children).some((child) => React78.isValidElement(child) && child.props.onClick);
    if (found) {
      return new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join("\n"));
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types39.default.object,
  /**
   * @ignore
   */
  className: import_prop_types39.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types39.default.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types39.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types39.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types39.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: import_prop_types39.default.oneOf(["end", "start", false]),
  /**
   * @ignore
   */
  id: import_prop_types39.default.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: import_prop_types39.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types39.default.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["small", "medium", "large"]), import_prop_types39.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.func, import_prop_types39.default.object, import_prop_types39.default.bool])), import_prop_types39.default.func, import_prop_types39.default.object])
} : void 0;
var IconButton_default = IconButton;

// ../node_modules/@mui/material/esm/Button/Button.js
var React81 = __toESM(require_react(), 1);
var import_prop_types40 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/material/esm/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]);
var buttonClasses_default = buttonClasses;

// ../node_modules/@mui/material/esm/ButtonGroup/ButtonGroupContext.js
var React79 = __toESM(require_react(), 1);
var ButtonGroupContext = React79.createContext({});
if (true) {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
var ButtonGroupContext_default = ButtonGroupContext;

// ../node_modules/@mui/material/esm/ButtonGroup/ButtonGroupButtonContext.js
var React80 = __toESM(require_react(), 1);
var ButtonGroupButtonContext = React80.createContext(void 0);
if (true) {
  ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
}
var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

// ../node_modules/@mui/material/esm/Button/Button.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses18 = (ownerState) => {
  const {
    color: color2,
    disableElevation,
    fullWidth,
    size,
    variant,
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", variant, `${variant}${capitalize_default(color2)}`, `size${capitalize_default(size)}`, `${variant}Size${capitalize_default(size)}`, `color${capitalize_default(color2)}`, disableElevation && "disableElevation", fullWidth && "fullWidth", loading && `loadingPosition${capitalize_default(loadingPosition)}`],
    startIcon: ["icon", "startIcon", `iconSize${capitalize_default(size)}`],
    endIcon: ["icon", "endIcon", `iconSize${capitalize_default(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses
  };
};
var commonIconStyles = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}];
var ButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles[`size${capitalize_default(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth, ownerState.loading && styles.loading];
  }
})(memoTheme_default(({
  theme
}) => {
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return {
    ...theme.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${buttonClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: `var(--variant-containedColor)`,
        backgroundColor: `var(--variant-containedBg)`,
        boxShadow: (theme.vars || theme).shadows[2],
        "&:hover": {
          boxShadow: (theme.vars || theme).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (theme.vars || theme).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[8]
        },
        [`&.${buttonClasses_default.focusVisible}`]: {
          boxShadow: (theme.vars || theme).shadows[6]
        },
        [`&.${buttonClasses_default.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled,
          boxShadow: (theme.vars || theme).shadows[0],
          backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: `var(--variant-outlinedBorder, currentColor)`,
        backgroundColor: `var(--variant-outlinedBg)`,
        color: `var(--variant-outlinedColor)`,
        [`&.${buttonClasses_default.disabled}`]: {
          border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: `var(--variant-textColor)`,
        backgroundColor: `var(--variant-textBg)`
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        "--variant-textColor": (theme.vars || theme).palette[color2].main,
        "--variant-outlinedColor": (theme.vars || theme).palette[color2].main,
        "--variant-outlinedBorder": theme.alpha((theme.vars || theme).palette[color2].main, 0.5),
        "--variant-containedColor": (theme.vars || theme).palette[color2].contrastText,
        "--variant-containedBg": (theme.vars || theme).palette[color2].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (theme.vars || theme).palette[color2].dark,
            "--variant-textBg": theme.alpha((theme.vars || theme).palette[color2].main, (theme.vars || theme).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (theme.vars || theme).palette[color2].main,
            "--variant-outlinedBg": theme.alpha((theme.vars || theme).palette[color2].main, (theme.vars || theme).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
            "--variant-textBg": theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity),
            "--variant-outlinedBg": theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: true
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${buttonClasses_default.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${buttonClasses_default.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: true
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: theme.transitions.duration.short
        }),
        [`&.${buttonClasses_default.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
}));
var ButtonStartIcon = styled_default("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.startIcon, ownerState.loading && styles.startIconLoadingStart, styles[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true,
      fullWidth: true
    },
    style: {
      marginRight: -8
    }
  }, ...commonIconStyles]
}));
var ButtonEndIcon = styled_default("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.endIcon, ownerState.loading && styles.endIconLoadingEnd, styles[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true,
      fullWidth: true
    },
    style: {
      marginLeft: -8
    }
  }, ...commonIconStyles]
}));
var ButtonLoadingIndicator = styled_default("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: true
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: true
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
}));
var ButtonLoadingIconPlaceholder = styled_default("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
});
var Button = React81.forwardRef(function Button2(inProps, ref) {
  const contextProps = React81.useContext(ButtonGroupContext_default);
  const buttonGroupButtonContextPositionClassName = React81.useContext(ButtonGroupButtonContext_default);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps2({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children: children2,
    color: color2 = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text",
    ...other
  } = props;
  const loadingId = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp ?? (0, import_jsx_runtime48.jsx)(CircularProgress_default, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    color: color2,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition,
    size,
    type,
    variant
  };
  const classes = useUtilityClasses18(ownerState);
  const startIcon = (startIconProp || loading && loadingPosition === "start") && (0, import_jsx_runtime48.jsx)(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp || (0, import_jsx_runtime48.jsx)(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const endIcon = (endIconProp || loading && loadingPosition === "end") && (0, import_jsx_runtime48.jsx)(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp || (0, import_jsx_runtime48.jsx)(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  const loader = typeof loading === "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    (0, import_jsx_runtime48.jsx)("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: loading && (0, import_jsx_runtime48.jsx)(ButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loadingIndicator
      })
    })
  ) : null;
  return (0, import_jsx_runtime48.jsxs)(ButtonRoot, {
    ownerState,
    className: clsx_default(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled: disabled || loading,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type,
    id: loading ? loadingId : idProp,
    ...other,
    classes,
    children: [startIcon, loadingPosition !== "end" && loader, children2, loadingPosition === "end" && loader, endIcon]
  });
});
true ? Button.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types40.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types40.default.object,
  /**
   * @ignore
   */
  className: import_prop_types40.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types40.default.oneOfType([import_prop_types40.default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), import_prop_types40.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types40.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types40.default.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: import_prop_types40.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types40.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types40.default.bool,
  /**
   * Element placed after the children.
   */
  endIcon: import_prop_types40.default.node,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types40.default.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types40.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: import_prop_types40.default.string,
  /**
   * @ignore
   */
  id: import_prop_types40.default.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: import_prop_types40.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types40.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: import_prop_types40.default.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types40.default.oneOfType([import_prop_types40.default.oneOf(["small", "medium", "large"]), import_prop_types40.default.string]),
  /**
   * Element placed before the children.
   */
  startIcon: import_prop_types40.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types40.default.oneOfType([import_prop_types40.default.arrayOf(import_prop_types40.default.oneOfType([import_prop_types40.default.func, import_prop_types40.default.object, import_prop_types40.default.bool])), import_prop_types40.default.func, import_prop_types40.default.object]),
  /**
   * @ignore
   */
  type: import_prop_types40.default.oneOfType([import_prop_types40.default.oneOf(["button", "reset", "submit"]), import_prop_types40.default.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types40.default.oneOfType([import_prop_types40.default.oneOf(["contained", "outlined", "text"]), import_prop_types40.default.string])
} : void 0;
var Button_default = Button;

// ../node_modules/@mui/x-charts/esm/internals/material/index.js
var baseSlots = {
  baseButton: Button_default,
  baseIconButton: IconButton_default
};
var iconSlots = {};
var defaultSlotsMaterial = _extends({}, baseSlots, iconSlots);

// ../node_modules/@mui/x-charts/esm/context/ChartsSlotsContext.js
var React82 = __toESM(require_react(), 1);
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var ChartsSlotsContext = React82.createContext(null);
if (true) ChartsSlotsContext.displayName = "ChartsSlotsContext";
function useChartsSlots() {
  const context = React82.useContext(ChartsSlotsContext);
  if (context == null) {
    throw new Error(["MUI X Charts: Could not find the Charts Slots context.", "It looks like you rendered your component outside of a ChartDataProvider.", "This can also happen if you are bundling multiple versions of the library."].join("\n"));
  }
  return context;
}
function ChartsSlotsProvider(props) {
  const {
    slots,
    slotProps = {},
    defaultSlots,
    children: children2
  } = props;
  const value = React82.useMemo(() => ({
    slots: _extends({}, defaultSlots, slots),
    slotProps
  }), [defaultSlots, slots, slotProps]);
  return (0, import_jsx_runtime49.jsx)(ChartsSlotsContext.Provider, {
    value,
    children: children2
  });
}

// ../node_modules/@mui/x-charts/esm/ChartDataProvider/useChartDataProviderProps.js
var _excluded20 = ["children", "localeText", "plugins", "seriesConfig", "slots", "slotProps"];
var useChartDataProviderProps = (inProps) => {
  const props = useThemeProps({
    props: inProps,
    name: "MuiChartDataProvider"
  });
  const {
    children: children2,
    localeText,
    plugins = DEFAULT_PLUGINS,
    seriesConfig,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const theme = useTheme();
  const chartProviderProps = {
    plugins,
    seriesConfig,
    pluginParams: _extends({
      theme: theme.palette.mode
    }, other)
  };
  return {
    children: children2,
    localeText,
    chartProviderProps,
    slots,
    slotProps
  };
};

// ../node_modules/@mui/x-charts/esm/ChartDataProvider/ChartDataProvider.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
function ChartDataProvider(props) {
  const {
    children: children2,
    localeText,
    chartProviderProps,
    slots,
    slotProps
  } = useChartDataProviderProps(props);
  return (0, import_jsx_runtime50.jsx)(ChartProvider, _extends({}, chartProviderProps, {
    children: (0, import_jsx_runtime50.jsx)(ChartsLocalizationProvider, {
      localeText,
      children: (0, import_jsx_runtime50.jsx)(ChartsSlotsProvider, {
        slots,
        slotProps,
        defaultSlots: defaultSlotsMaterial,
        children: children2
      })
    })
  }));
}
true ? ChartDataProvider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types41.default.shape({
    current: import_prop_types41.default.any
  }),
  /**
   * Color palette used to colorize multiple series.
   * @default rainbowSurgePalette
   */
  colors: import_prop_types41.default.oneOfType([import_prop_types41.default.arrayOf(import_prop_types41.default.string), import_prop_types41.default.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types41.default.arrayOf(import_prop_types41.default.object),
  /**
   * Options to enable features planned for the next major.
   */
  experimentalFeatures: import_prop_types41.default.shape({
    preferStrictDomainInLineCharts: import_prop_types41.default.bool
  }),
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: import_prop_types41.default.number,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: import_prop_types41.default.string,
  /**
   * Localized text for chart components.
   */
  localeText: import_prop_types41.default.object,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   *
   * Accepts a `number` to be used on all sides or an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   */
  margin: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.shape({
    bottom: import_prop_types41.default.number,
    left: import_prop_types41.default.number,
    right: import_prop_types41.default.number,
    top: import_prop_types41.default.number
  })]),
  /**
   * The array of series to display.
   * Each type of series has its own specificity.
   * Please refer to the appropriate docs page to learn more about it.
   */
  series: import_prop_types41.default.arrayOf(import_prop_types41.default.object),
  /**
   * If `true`, animations are skipped.
   * If unset or `false`, the animations respects the user's `prefers-reduced-motion` setting.
   */
  skipAnimation: import_prop_types41.default.bool,
  /**
   * The props for the slots.
   */
  slotProps: import_prop_types41.default.object,
  /**
   * Slots to customize charts' components.
   */
  slots: import_prop_types41.default.object,
  theme: import_prop_types41.default.oneOf(["dark", "light"]),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: import_prop_types41.default.number
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsSurface/ChartsSurface.js
var import_prop_types42 = __toESM(require_prop_types(), 1);
var React86 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/components/ChartsAxesGradients/ChartsAxesGradients.js
var React85 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/components/ChartsAxesGradients/ChartsPiecewiseGradient.js
var React84 = __toESM(require_react(), 1);
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
function ChartsPiecewiseGradient(props) {
  const {
    isReversed,
    gradientId,
    size,
    direction,
    scale,
    colorMap
  } = props;
  if (size <= 0) {
    return null;
  }
  return (0, import_jsx_runtime51.jsx)("linearGradient", {
    id: gradientId,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "0",
    [`${direction}${isReversed ? 1 : 2}`]: `${size}px`,
    gradientUnits: "userSpaceOnUse",
    children: colorMap.thresholds.map((threshold2, index2) => {
      const x2 = scale(threshold2);
      if (x2 === void 0) {
        return null;
      }
      const offset2 = isReversed ? 1 - x2 / size : x2 / size;
      if (Number.isNaN(offset2)) {
        return null;
      }
      return (0, import_jsx_runtime51.jsxs)(React84.Fragment, {
        children: [(0, import_jsx_runtime51.jsx)("stop", {
          offset: offset2,
          stopColor: colorMap.colors[index2],
          stopOpacity: 1
        }), (0, import_jsx_runtime51.jsx)("stop", {
          offset: offset2,
          stopColor: colorMap.colors[index2 + 1],
          stopOpacity: 1
        })]
      }, threshold2.toString() + index2);
    })
  });
}

// ../node_modules/@mui/x-charts/esm/internals/components/ChartsAxesGradients/ChartsContinuousGradient.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var PX_PRECISION = 10;
function ChartsContinuousGradient(props) {
  const {
    gradientUnits,
    isReversed,
    gradientId,
    size,
    direction,
    scale,
    colorScale,
    colorMap
  } = props;
  const extremumValues = [colorMap.min ?? 0, colorMap.max ?? 100];
  const extremumPositions = extremumValues.map(scale).filter((p) => p !== void 0);
  if (extremumPositions.length !== 2) {
    return null;
  }
  const interpolator = typeof extremumValues[0] === "number" ? number_default(extremumValues[0], extremumValues[1]) : date_default(extremumValues[0], extremumValues[1]);
  const numberOfPoints = Math.round((Math.max(...extremumPositions) - Math.min(...extremumPositions)) / PX_PRECISION);
  const keyPrefix = `${extremumValues[0]}-${extremumValues[1]}-`;
  return (0, import_jsx_runtime52.jsx)("linearGradient", {
    id: gradientId,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "0",
    [`${direction}${isReversed ? 1 : 2}`]: gradientUnits === "objectBoundingBox" ? 1 : `${size}px`,
    gradientUnits: gradientUnits ?? "userSpaceOnUse",
    children: Array.from({
      length: numberOfPoints + 1
    }, (_, index2) => {
      const value = interpolator(index2 / numberOfPoints);
      if (value === void 0) {
        return null;
      }
      const x2 = scale(value);
      if (x2 === void 0) {
        return null;
      }
      const offset2 = isReversed ? 1 - x2 / size : x2 / size;
      const color2 = colorScale(value);
      if (color2 === null) {
        return null;
      }
      return (0, import_jsx_runtime52.jsx)("stop", {
        offset: offset2,
        stopColor: color2,
        stopOpacity: 1
      }, keyPrefix + index2);
    })
  });
}

// ../node_modules/@mui/x-charts/esm/internals/components/ChartsAxesGradients/ChartsContinuousGradientObjectBound.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var PX_PRECISION2 = 10;
var getDirection2 = (isReversed) => {
  if (isReversed) {
    return {
      x1: "1",
      x2: "0",
      y1: "0",
      y2: "0"
    };
  }
  return {
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  };
};
function ChartsContinuousGradientObjectBound(props) {
  const {
    isReversed,
    gradientId,
    colorScale,
    colorMap
  } = props;
  const extremumValues = [colorMap.min ?? 0, colorMap.max ?? 100];
  const interpolator = typeof extremumValues[0] === "number" ? number_default(extremumValues[0], extremumValues[1]) : date_default(extremumValues[0], extremumValues[1]);
  const numberOfPoints = PX_PRECISION2;
  const keyPrefix = `${extremumValues[0]}-${extremumValues[1]}-`;
  return (0, import_jsx_runtime53.jsx)("linearGradient", _extends({
    id: gradientId
  }, getDirection2(isReversed), {
    gradientUnits: "objectBoundingBox",
    children: Array.from({
      length: numberOfPoints + 1
    }, (_, index2) => {
      const offset2 = index2 / numberOfPoints;
      const value = interpolator(offset2);
      if (value === void 0) {
        return null;
      }
      const color2 = colorScale(value);
      if (color2 === null) {
        return null;
      }
      return (0, import_jsx_runtime53.jsx)("stop", {
        offset: offset2,
        stopColor: color2,
        stopOpacity: 1
      }, keyPrefix + index2);
    })
  }));
}

// ../node_modules/@mui/x-charts/esm/internals/components/ChartsAxesGradients/ChartsAxesGradients.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
function ChartsAxesGradients() {
  const {
    top: top2,
    height,
    bottom: bottom2,
    left: left2,
    width,
    right: right2
  } = useDrawingArea();
  const svgHeight = top2 + height + bottom2;
  const svgWidth = left2 + width + right2;
  const getGradientId = useChartGradientIdBuilder();
  const getObjectBoundGradientId = useChartGradientIdObjectBoundBuilder();
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  const {
    zAxis,
    zAxisIds
  } = useZAxes();
  const filteredYAxisIds = yAxisIds.filter((axisId) => yAxis[axisId].colorMap !== void 0);
  const filteredXAxisIds = xAxisIds.filter((axisId) => xAxis[axisId].colorMap !== void 0);
  const filteredZAxisIds = zAxisIds.filter((axisId) => zAxis[axisId].colorMap !== void 0);
  if (filteredYAxisIds.length === 0 && filteredXAxisIds.length === 0 && filteredZAxisIds.length === 0) {
    return null;
  }
  return (0, import_jsx_runtime54.jsxs)("defs", {
    children: [filteredYAxisIds.map((axisId) => {
      const gradientId = getGradientId(axisId);
      const objectBoundGradientId = getObjectBoundGradientId(axisId);
      const {
        colorMap,
        scale,
        colorScale,
        reverse: reverse2
      } = yAxis[axisId];
      if ((colorMap == null ? void 0 : colorMap.type) === "piecewise") {
        return (0, import_jsx_runtime54.jsx)(ChartsPiecewiseGradient, {
          isReversed: !reverse2,
          scale,
          colorMap,
          size: svgHeight,
          gradientId,
          direction: "y"
        }, gradientId);
      }
      if ((colorMap == null ? void 0 : colorMap.type) === "continuous") {
        return (0, import_jsx_runtime54.jsxs)(React85.Fragment, {
          children: [(0, import_jsx_runtime54.jsx)(ChartsContinuousGradient, {
            isReversed: !reverse2,
            scale,
            colorScale,
            colorMap,
            size: svgHeight,
            gradientId,
            direction: "y"
          }), (0, import_jsx_runtime54.jsx)(ChartsContinuousGradientObjectBound, {
            isReversed: reverse2,
            colorScale,
            colorMap,
            gradientId: objectBoundGradientId
          })]
        }, gradientId);
      }
      return null;
    }), filteredXAxisIds.map((axisId) => {
      const gradientId = getGradientId(axisId);
      const objectBoundGradientId = getObjectBoundGradientId(axisId);
      const {
        colorMap,
        scale,
        reverse: reverse2,
        colorScale
      } = xAxis[axisId];
      if ((colorMap == null ? void 0 : colorMap.type) === "piecewise") {
        return (0, import_jsx_runtime54.jsx)(ChartsPiecewiseGradient, {
          isReversed: reverse2,
          scale,
          colorMap,
          size: svgWidth,
          gradientId,
          direction: "x"
        }, gradientId);
      }
      if ((colorMap == null ? void 0 : colorMap.type) === "continuous") {
        return (0, import_jsx_runtime54.jsxs)(React85.Fragment, {
          children: [(0, import_jsx_runtime54.jsx)(ChartsContinuousGradient, {
            isReversed: reverse2,
            scale,
            colorScale,
            colorMap,
            size: svgWidth,
            gradientId,
            direction: "x"
          }), (0, import_jsx_runtime54.jsx)(ChartsContinuousGradientObjectBound, {
            isReversed: reverse2,
            colorScale,
            colorMap,
            gradientId: objectBoundGradientId
          })]
        }, gradientId);
      }
      return null;
    }), filteredZAxisIds.map((axisId) => {
      const objectBoundGradientId = getObjectBoundGradientId(axisId);
      const {
        colorMap,
        colorScale
      } = zAxis[axisId];
      if ((colorMap == null ? void 0 : colorMap.type) === "continuous") {
        return (0, import_jsx_runtime54.jsx)(ChartsContinuousGradientObjectBound, {
          colorScale,
          colorMap,
          gradientId: objectBoundGradientId
        }, objectBoundGradientId);
      }
      return null;
    })]
  });
}

// ../node_modules/@mui/x-charts/esm/ChartsSurface/chartsSurfaceClasses.js
function getSurfaceUtilityClass(slot) {
  return generateUtilityClass("MuiChartsSurface", slot);
}
var useUtilityClasses19 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getSurfaceUtilityClass);
};
var chartsSurfaceClasses = generateUtilityClasses("MuiChartsSurface", ["root"]);

// ../node_modules/@mui/x-charts/esm/ChartsSurface/ChartsSurface.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var _excluded21 = ["children", "className", "title", "desc"];
var ChartsSurfaceStyles = styled_default("svg", {
  name: "MuiChartsSurface",
  slot: "Root"
})(({
  ownerState
}) => ({
  width: ownerState.width ?? "100%",
  height: ownerState.height ?? "100%",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  // This prevents default touch actions when using the svg on mobile devices.
  // For example, prevent page scroll & zoom.
  touchAction: ownerState.hasZoom ? "pan-y" : void 0,
  userSelect: "none",
  gridArea: "chart",
  "&:focus": {
    outline: "none"
    // By default don't show focus on the SVG container
  }
}));
var ChartsSurface = React86.forwardRef(function ChartsSurface2(inProps, ref) {
  const store = useStore2();
  const svgWidth = store.use(selectorChartSvgWidth);
  const svgHeight = store.use(selectorChartSvgHeight);
  const propsWidth = store.use(selectorChartPropsWidth);
  const propsHeight = store.use(selectorChartPropsHeight);
  const isKeyboardNavigationEnabled = store.use(selectorChartsIsKeyboardNavigationEnabled);
  const hasFocusedItem = store.use(selectorChartsHasFocusedItem);
  const hasZoom = store.use(selectorChartHasZoom);
  const svgRef = useSvgRef();
  const handleRef = useForkRef(svgRef, ref);
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiChartsSurface"
  });
  const {
    children: children2,
    className,
    title,
    desc
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded21);
  const classes = useUtilityClasses19();
  const hasIntrinsicSize = svgHeight > 0 && svgWidth > 0;
  return (0, import_jsx_runtime55.jsxs)(ChartsSurfaceStyles, _extends({
    ownerState: {
      width: propsWidth,
      height: propsHeight,
      hasZoom
    },
    viewBox: `${0} ${0} ${svgWidth} ${svgHeight}`,
    className: clsx_default(classes.root, className),
    tabIndex: isKeyboardNavigationEnabled ? 0 : void 0,
    "data-has-focused-item": hasFocusedItem || void 0
  }, other, {
    ref: handleRef,
    children: [title && (0, import_jsx_runtime55.jsx)("title", {
      children: title
    }), desc && (0, import_jsx_runtime55.jsx)("desc", {
      children: desc
    }), (0, import_jsx_runtime55.jsx)(ChartsAxesGradients, {}), hasIntrinsicSize && children2]
  }));
});
if (true) ChartsSurface.displayName = "ChartsSurface";
true ? ChartsSurface.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types42.default.node,
  className: import_prop_types42.default.string,
  desc: import_prop_types42.default.string,
  sx: import_prop_types42.default.oneOfType([import_prop_types42.default.arrayOf(import_prop_types42.default.oneOfType([import_prop_types42.default.func, import_prop_types42.default.object, import_prop_types42.default.bool])), import_prop_types42.default.func, import_prop_types42.default.object]),
  title: import_prop_types42.default.string
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsWrapper/ChartsWrapper.js
var React92 = __toESM(require_react(), 1);
var import_prop_types45 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/Toolbar/Toolbar.js
var React90 = __toESM(require_react(), 1);
var import_prop_types43 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-internals/esm/useComponentRenderer/useComponentRenderer.js
var React87 = __toESM(require_react(), 1);
function useComponentRenderer(defaultElement, render, props, state = {}) {
  if (typeof render === "function") {
    return render(props, state);
  }
  if (render) {
    if (render.props.className) {
      props.className = mergeClassNames(render.props.className, props.className);
    }
    if (render.props.style || props.style) {
      props.style = _extends({}, props.style, render.props.style);
    }
    return React87.cloneElement(render, props);
  }
  return React87.createElement(defaultElement, props);
}
function mergeClassNames(className, otherClassName) {
  if (!className || !otherClassName) {
    return className || otherClassName;
  }
  return `${className} ${otherClassName}`;
}

// ../node_modules/@mui/x-internals/esm/ToolbarContext/ToolbarContext.js
var React88 = __toESM(require_react(), 1);
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var ToolbarContext = React88.createContext(void 0);
if (true) ToolbarContext.displayName = "ToolbarContext";
function useToolbarContext() {
  const context = React88.useContext(ToolbarContext);
  if (context === void 0) {
    throw new Error("MUI X: Missing context. Toolbar subcomponents must be placed within a <Toolbar /> component.");
  }
  return context;
}
function ToolbarContextProvider({
  children: children2
}) {
  const [focusableItemId, setFocusableItemId] = React88.useState(null);
  const focusableItemIdRef = React88.useRef(focusableItemId);
  const [items, setItems] = React88.useState([]);
  const getSortedItems = React88.useCallback(() => items.sort(sortByDocumentPosition), [items]);
  const findEnabledItem = React88.useCallback((startIndex, step, wrap = true) => {
    var _a, _b;
    let index2 = startIndex;
    const sortedItems = getSortedItems();
    const itemCount = sortedItems.length;
    for (let i = 0; i < itemCount; i += 1) {
      index2 += step;
      if (index2 >= itemCount) {
        if (!wrap) {
          return -1;
        }
        index2 = 0;
      } else if (index2 < 0) {
        if (!wrap) {
          return -1;
        }
        index2 = itemCount - 1;
      }
      if (!((_a = sortedItems[index2].ref.current) == null ? void 0 : _a.disabled) && ((_b = sortedItems[index2].ref.current) == null ? void 0 : _b.ariaDisabled) !== "true") {
        return index2;
      }
    }
    return -1;
  }, [getSortedItems]);
  const registerItem = React88.useCallback((id, itemRef) => {
    setItems((prevItems) => [...prevItems, {
      id,
      ref: itemRef
    }]);
  }, []);
  const unregisterItem = React88.useCallback((id) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  }, []);
  const onItemKeyDown = React88.useCallback((event) => {
    var _a;
    if (!focusableItemId) {
      return;
    }
    const sortedItems = getSortedItems();
    const focusableItemIndex = sortedItems.findIndex((item) => item.id === focusableItemId);
    let newIndex = -1;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      newIndex = findEnabledItem(focusableItemIndex, 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      newIndex = findEnabledItem(focusableItemIndex, -1);
    } else if (event.key === "Home") {
      event.preventDefault();
      newIndex = findEnabledItem(-1, 1, false);
    } else if (event.key === "End") {
      event.preventDefault();
      newIndex = findEnabledItem(sortedItems.length, -1, false);
    }
    if (newIndex >= 0 && newIndex < sortedItems.length) {
      const item = sortedItems[newIndex];
      setFocusableItemId(item.id);
      (_a = item.ref.current) == null ? void 0 : _a.focus();
    }
  }, [getSortedItems, focusableItemId, findEnabledItem]);
  const onItemFocus = React88.useCallback((id) => {
    if (focusableItemId !== id) {
      setFocusableItemId(id);
    }
  }, [focusableItemId, setFocusableItemId]);
  const onItemDisabled = React88.useCallback((id) => {
    var _a;
    const sortedItems = getSortedItems();
    const currentIndex = sortedItems.findIndex((item) => item.id === id);
    const newIndex = findEnabledItem(currentIndex, 1);
    if (newIndex >= 0 && newIndex < sortedItems.length) {
      const item = sortedItems[newIndex];
      setFocusableItemId(item.id);
      (_a = item.ref.current) == null ? void 0 : _a.focus();
    }
  }, [getSortedItems, findEnabledItem]);
  React88.useEffect(() => {
    focusableItemIdRef.current = focusableItemId;
  }, [focusableItemId]);
  React88.useEffect(() => {
    var _a, _b;
    const sortedItems = getSortedItems();
    if (sortedItems.length > 0) {
      if (!focusableItemIdRef.current) {
        setFocusableItemId(sortedItems[0].id);
        return;
      }
      const focusableItemIndex = sortedItems.findIndex((item) => item.id === focusableItemIdRef.current);
      if (!sortedItems[focusableItemIndex]) {
        const item = sortedItems[sortedItems.length - 1];
        if (item) {
          setFocusableItemId(item.id);
          (_a = item.ref.current) == null ? void 0 : _a.focus();
        }
      } else if (focusableItemIndex === -1) {
        const item = sortedItems[focusableItemIndex];
        if (item) {
          setFocusableItemId(item.id);
          (_b = item.ref.current) == null ? void 0 : _b.focus();
        }
      }
    }
  }, [getSortedItems, findEnabledItem]);
  const contextValue = React88.useMemo(() => ({
    focusableItemId,
    registerItem,
    unregisterItem,
    onItemKeyDown,
    onItemFocus,
    onItemDisabled
  }), [focusableItemId, registerItem, unregisterItem, onItemKeyDown, onItemFocus, onItemDisabled]);
  return (0, import_jsx_runtime56.jsx)(ToolbarContext.Provider, {
    value: contextValue,
    children: children2
  });
}
function sortByDocumentPosition(a2, b) {
  if (!a2.ref.current || !b.ref.current) {
    return 0;
  }
  const position = a2.ref.current.compareDocumentPosition(b.ref.current);
  if (!position) {
    return 0;
  }
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}

// ../node_modules/@mui/x-internals/esm/ToolbarContext/useRegisterToolbarButton.js
var React89 = __toESM(require_react(), 1);
function useRegisterToolbarButton(props, ref) {
  const {
    onKeyDown,
    onFocus,
    disabled,
    "aria-disabled": ariaDisabled
  } = props;
  const id = useId();
  const {
    focusableItemId,
    registerItem,
    unregisterItem,
    onItemKeyDown,
    onItemFocus,
    onItemDisabled
  } = useToolbarContext();
  const handleKeyDown = (event) => {
    onItemKeyDown(event);
    onKeyDown == null ? void 0 : onKeyDown(event);
  };
  const handleFocus = (event) => {
    onItemFocus(id);
    onFocus == null ? void 0 : onFocus(event);
  };
  React89.useEffect(() => {
    registerItem(id, ref);
    return () => unregisterItem(id);
  }, [id, ref, registerItem, unregisterItem]);
  const previousDisabled = React89.useRef(disabled);
  React89.useEffect(() => {
    if (previousDisabled.current !== disabled && disabled === true) {
      onItemDisabled(id, disabled);
    }
    previousDisabled.current = disabled;
  }, [disabled, id, onItemDisabled]);
  const previousAriaDisabled = React89.useRef(ariaDisabled);
  React89.useEffect(() => {
    if (previousAriaDisabled.current !== ariaDisabled && ariaDisabled === true) {
      onItemDisabled(id, true);
    }
    previousAriaDisabled.current = ariaDisabled;
  }, [ariaDisabled, id, onItemDisabled]);
  return {
    tabIndex: focusableItemId === id ? 0 : -1,
    disabled,
    "aria-disabled": ariaDisabled,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus
  };
}

// ../node_modules/@mui/x-charts/esm/Toolbar/chartToolbarClasses.js
var chartsToolbarClasses = generateUtilityClasses("MuiChartsToolbar", ["root"]);

// ../node_modules/@mui/x-charts/esm/Toolbar/Toolbar.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var _excluded26 = ["className", "render"];
var ToolbarRoot = styled_default("div", {
  name: "MuiChartsToolbar",
  slot: "Root"
})(({
  theme
}) => ({
  flex: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: theme.spacing(0.25),
  padding: theme.spacing(0.5),
  marginBottom: theme.spacing(1.5),
  minHeight: 44,
  boxSizing: "border-box",
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
  borderRadius: 4
}));
var Toolbar = React90.forwardRef(function Toolbar2(_ref, ref) {
  let {
    className,
    render
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded26);
  const element = useComponentRenderer(ToolbarRoot, render, _extends({
    role: "toolbar",
    "aria-orientation": "horizontal",
    className: clsx_default(chartsToolbarClasses.root, className)
  }, other, {
    ref
  }));
  return (0, import_jsx_runtime57.jsx)(ToolbarContextProvider, {
    children: element
  });
});
if (true) Toolbar.displayName = "Toolbar";
true ? Toolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: import_prop_types43.default.string,
  /**
   * A function to customize rendering of the component.
   */
  render: import_prop_types43.default.oneOfType([import_prop_types43.default.element, import_prop_types43.default.func])
} : void 0;

// ../node_modules/@mui/x-charts/esm/Toolbar/ToolbarButton.js
var import_prop_types44 = __toESM(require_prop_types(), 1);
var React91 = __toESM(require_react(), 1);
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var _excluded27 = ["render", "onKeyDown", "onFocus", "disabled", "aria-disabled"];
var _excluded28 = ["tabIndex"];
var ToolbarButton = React91.forwardRef(function ToolbarButton2(props, ref) {
  const {
    render
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const {
    slots,
    slotProps
  } = useChartsSlots();
  const buttonRef = React91.useRef(null);
  const handleRef = useForkRef(buttonRef, ref);
  const _useRegisterToolbarBu = useRegisterToolbarButton(props, buttonRef), {
    tabIndex
  } = _useRegisterToolbarBu, toolbarButtonProps = _objectWithoutPropertiesLoose(_useRegisterToolbarBu, _excluded28);
  const element = useComponentRenderer(slots.baseIconButton, render, _extends({}, slotProps == null ? void 0 : slotProps.baseIconButton, {
    tabIndex
  }, other, toolbarButtonProps, {
    ref: handleRef
  }));
  return (0, import_jsx_runtime58.jsx)(React91.Fragment, {
    children: element
  });
});
if (true) ToolbarButton.displayName = "ToolbarButton";
true ? ToolbarButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: import_prop_types44.default.string,
  disabled: import_prop_types44.default.bool,
  id: import_prop_types44.default.string,
  /**
   * A function to customize the rendering of the component.
   */
  render: import_prop_types44.default.oneOfType([import_prop_types44.default.element, import_prop_types44.default.func]),
  size: import_prop_types44.default.oneOf(["large", "medium", "small"]),
  style: import_prop_types44.default.object,
  tabIndex: import_prop_types44.default.number
} : void 0;

// ../node_modules/@mui/x-charts/esm/ChartsWrapper/ChartsWrapper.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var getJustifyItems = (position) => {
  if ((position == null ? void 0 : position.horizontal) === "start") {
    return "start";
  }
  if ((position == null ? void 0 : position.horizontal) === "end") {
    return "end";
  }
  return "center";
};
var getAlignItems = (position) => {
  if ((position == null ? void 0 : position.vertical) === "top") {
    return "flex-start";
  }
  if ((position == null ? void 0 : position.vertical) === "bottom") {
    return "flex-end";
  }
  return "center";
};
var getGridTemplateAreas = (hideLegend, direction, position) => {
  if (hideLegend) {
    return `"chart"`;
  }
  if (direction === "vertical") {
    if ((position == null ? void 0 : position.horizontal) === "start") {
      return `"legend chart"`;
    }
    return `"chart legend"`;
  }
  if ((position == null ? void 0 : position.vertical) === "bottom") {
    return `"chart"
            "legend"`;
  }
  return `"legend"
          "chart"`;
};
var getTemplateColumns = (hideLegend = false, direction = "horizontal", horizontalPosition = "end", width = void 0) => {
  const drawingAreaColumn = width ? "auto" : "1fr";
  if (direction === "horizontal") {
    return drawingAreaColumn;
  }
  if (hideLegend) {
    return drawingAreaColumn;
  }
  return horizontalPosition === "start" ? `auto ${drawingAreaColumn}` : `${drawingAreaColumn} auto`;
};
var getTemplateRows = (hideLegend = false, direction = "horizontal", verticalPosition = "top") => {
  const drawingAreaRow = "1fr";
  if (direction === "vertical") {
    return drawingAreaRow;
  }
  if (hideLegend) {
    return drawingAreaRow;
  }
  return verticalPosition === "bottom" ? `${drawingAreaRow} auto` : `auto ${drawingAreaRow}`;
};
var Root3 = styled_default("div", {
  name: "MuiChartsWrapper",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "extendVertically" && prop !== "width"
})(({
  ownerState,
  width
}) => {
  var _a, _b;
  const gridTemplateColumns = getTemplateColumns(ownerState.hideLegend, ownerState.legendDirection, (_a = ownerState.legendPosition) == null ? void 0 : _a.horizontal, width);
  const gridTemplateRows = getTemplateRows(ownerState.hideLegend, ownerState.legendDirection, (_b = ownerState.legendPosition) == null ? void 0 : _b.vertical);
  const gridTemplateAreas = getGridTemplateAreas(ownerState.hideLegend, ownerState.legendDirection, ownerState.legendPosition);
  return {
    variants: [{
      props: {
        extendVertically: true
      },
      style: {
        height: "100%",
        minHeight: 0
      }
    }],
    flex: 1,
    display: "grid",
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    [`&:has(.${chartsToolbarClasses.root})`]: {
      // Add a row for toolbar if there is one.
      gridTemplateRows: `auto ${gridTemplateRows}`,
      gridTemplateAreas: `"${gridTemplateColumns.split(" ").map(() => "toolbar").join(" ")}"
        ${gridTemplateAreas}`
    },
    [`& .${chartsToolbarClasses.root}`]: {
      gridArea: "toolbar",
      justifySelf: "center"
    },
    justifyContent: "safe center",
    justifyItems: getJustifyItems(ownerState.legendPosition),
    alignItems: getAlignItems(ownerState.legendPosition)
  };
});
function ChartsWrapper(props) {
  const {
    children: children2,
    sx,
    extendVertically
  } = props;
  const chartRootRef = useChartRootRef();
  const store = useStore2();
  const propsWidth = store.use(selectorChartPropsWidth);
  const propsHeight = store.use(selectorChartPropsHeight);
  return (0, import_jsx_runtime59.jsx)(Root3, {
    ref: chartRootRef,
    ownerState: props,
    sx,
    extendVertically: extendVertically ?? propsHeight === void 0,
    width: propsWidth,
    children: children2
  });
}
true ? ChartsWrapper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types45.default.node,
  /**
   * If `true`, the chart wrapper set `height: 100%`.
   * @default `false` if the `height` prop is set. And `true` otherwise.
   */
  extendVertically: import_prop_types45.default.bool,
  /**
   * If `true`, the legend is not rendered.
   * @default false
   */
  hideLegend: import_prop_types45.default.bool,
  /**
   * The direction of the legend.
   * @default 'horizontal'
   */
  legendDirection: import_prop_types45.default.oneOf(["horizontal", "vertical"]),
  /**
   * The position of the legend.
   * @default { horizontal: 'center', vertical: 'bottom' }
   */
  legendPosition: import_prop_types45.default.shape({
    horizontal: import_prop_types45.default.oneOf(["center", "end", "start"]),
    vertical: import_prop_types45.default.oneOf(["bottom", "middle", "top"])
  }),
  sx: import_prop_types45.default.oneOfType([import_prop_types45.default.arrayOf(import_prop_types45.default.oneOfType([import_prop_types45.default.func, import_prop_types45.default.object, import_prop_types45.default.bool])), import_prop_types45.default.func, import_prop_types45.default.object])
} : void 0;

// ../node_modules/@mui/x-charts/esm/hooks/useFocusedItem.js
function useFocusedItem() {
  const store = useStore2();
  return store.use(selectorChartsFocusedItem);
}

export {
  _objectWithoutPropertiesLoose,
  useSlotProps_default,
  reactMajor_default,
  DEFAULT_X_AXIS_KEY,
  DEFAULT_Y_AXIS_KEY,
  warnOnce,
  number_default,
  isOrdinalScale,
  useChartInteraction,
  useChartCartesianAxis,
  selectorChartsItemIsFocused,
  useChartBrush,
  selectorChartsHighlightXAxisIndex,
  useChartTooltip,
  useChartKeyboardNavigation,
  useChartZAxis,
  useChartHighlight,
  linear_default,
  line_default,
  area_default,
  bumpX,
  bumpY,
  symbolsFill,
  Symbol2 as Symbol,
  catmullRom_default,
  monotoneX,
  monotoneY,
  natural_default,
  step_default,
  stepBefore,
  stepAfter,
  getColor_default2 as getColor_default,
  getBarDimensions,
  getColor_default as getColor_default2,
  useChartContext,
  useInteractionItemProps,
  useStore2 as useStore,
  useItemHighlighted,
  ANIMATION_DURATION_MS,
  ANIMATION_TIMING_FUNCTION,
  useAnimate,
  useAnimateArea,
  useDrawingArea,
  useChartId2 as useChartId,
  useXAxes,
  useYAxes,
  getValueToPositionMapper,
  useBarSeriesContext,
  useLineSeriesContext,
  useItemHighlightedGetter,
  useChartGradientIdBuilder,
  useAnimateBar,
  useAnimateBarLabel,
  useAnimateLine,
  useSkipAnimation,
  useInternalIsZoomInteracting,
  ChartsAxis,
  ChartsTooltip,
  ChartsLegend,
  ChartsAxisHighlight,
  ChartsClipPath,
  ChartsGrid,
  ChartsOverlay,
  useChartContainerProps,
  ChartDataProvider,
  ChartsSurface,
  ChartsWrapper,
  useFocusedItem
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-JT4MR2Q4.js.map
