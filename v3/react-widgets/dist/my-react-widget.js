var Xg = { exports: {} }, yp = {};
var Mb;
function p3() {
  if (Mb) return yp;
  Mb = 1;
  var k = /* @__PURE__ */ Symbol.for("react.transitional.element"), ae = /* @__PURE__ */ Symbol.for("react.fragment");
  function $e(N, Ce, qe) {
    var vt = null;
    if (qe !== void 0 && (vt = "" + qe), Ce.key !== void 0 && (vt = "" + Ce.key), "key" in Ce) {
      qe = {};
      for (var ee in Ce)
        ee !== "key" && (qe[ee] = Ce[ee]);
    } else qe = Ce;
    return Ce = qe.ref, {
      $$typeof: k,
      type: N,
      key: vt,
      ref: Ce !== void 0 ? Ce : null,
      props: qe
    };
  }
  return yp.Fragment = ae, yp.jsx = $e, yp.jsxs = $e, yp;
}
var pp = {}, Qg = { exports: {} }, Qe = {};
var Cb;
function v3() {
  if (Cb) return Qe;
  Cb = 1;
  var k = /* @__PURE__ */ Symbol.for("react.transitional.element"), ae = /* @__PURE__ */ Symbol.for("react.portal"), $e = /* @__PURE__ */ Symbol.for("react.fragment"), N = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ce = /* @__PURE__ */ Symbol.for("react.profiler"), qe = /* @__PURE__ */ Symbol.for("react.consumer"), vt = /* @__PURE__ */ Symbol.for("react.context"), ee = /* @__PURE__ */ Symbol.for("react.forward_ref"), ne = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.memo"), He = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.activity"), U = Symbol.iterator;
  function ce(S) {
    return S === null || typeof S != "object" ? null : (S = U && S[U] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var Le = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _t = Object.assign, ft = {};
  function lt(S, B, F) {
    this.props = S, this.context = B, this.refs = ft, this.updater = F || Le;
  }
  lt.prototype.isReactComponent = {}, lt.prototype.setState = function(S, B) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, B, "setState");
  }, lt.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Tl() {
  }
  Tl.prototype = lt.prototype;
  function Bt(S, B, F) {
    this.props = S, this.context = B, this.refs = ft, this.updater = F || Le;
  }
  var Jt = Bt.prototype = new Tl();
  Jt.constructor = Bt, _t(Jt, lt.prototype), Jt.isPureReactComponent = !0;
  var el = Array.isArray;
  function ul() {
  }
  var ze = { H: null, A: null, T: null, S: null }, Ve = Object.prototype.hasOwnProperty;
  function Dt(S, B, F) {
    var W = F.ref;
    return {
      $$typeof: k,
      type: S,
      key: B,
      ref: W !== void 0 ? W : null,
      props: F
    };
  }
  function se(S, B) {
    return Dt(S.type, B, S.props);
  }
  function Yt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === k;
  }
  function ye(S) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(F) {
      return B[F];
    });
  }
  var je = /\/+/g;
  function Qt(S, B) {
    return typeof S == "object" && S !== null && S.key != null ? ye("" + S.key) : B.toString(36);
  }
  function jt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ul, ul) : (S.status = "pending", S.then(
          function(B) {
            S.status === "pending" && (S.status = "fulfilled", S.value = B);
          },
          function(B) {
            S.status === "pending" && (S.status = "rejected", S.reason = B);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function _(S, B, F, W, ge) {
    var xe = typeof S;
    (xe === "undefined" || xe === "boolean") && (S = null);
    var Ee = !1;
    if (S === null) Ee = !0;
    else
      switch (xe) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case k:
            case ae:
              Ee = !0;
              break;
            case He:
              return Ee = S._init, _(
                Ee(S._payload),
                B,
                F,
                W,
                ge
              );
          }
      }
    if (Ee)
      return ge = ge(S), Ee = W === "" ? "." + Qt(S, 0) : W, el(ge) ? (F = "", Ee != null && (F = Ee.replace(je, "$&/") + "/"), _(ge, B, F, "", function(qa) {
        return qa;
      })) : ge != null && (Yt(ge) && (ge = se(
        ge,
        F + (ge.key == null || S && S.key === ge.key ? "" : ("" + ge.key).replace(
          je,
          "$&/"
        ) + "/") + Ee
      )), B.push(ge)), 1;
    Ee = 0;
    var Lt = W === "" ? "." : W + ":";
    if (el(S))
      for (var ht = 0; ht < S.length; ht++)
        W = S[ht], xe = Lt + Qt(W, ht), Ee += _(
          W,
          B,
          F,
          xe,
          ge
        );
    else if (ht = ce(S), typeof ht == "function")
      for (S = ht.call(S), ht = 0; !(W = S.next()).done; )
        W = W.value, xe = Lt + Qt(W, ht++), Ee += _(
          W,
          B,
          F,
          xe,
          ge
        );
    else if (xe === "object") {
      if (typeof S.then == "function")
        return _(
          jt(S),
          B,
          F,
          W,
          ge
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
  }
  function L(S, B, F) {
    if (S == null) return S;
    var W = [], ge = 0;
    return _(S, W, "", "", function(xe) {
      return B.call(F, xe, ge++);
    }), W;
  }
  function P(S) {
    if (S._status === -1) {
      var B = S._result;
      B = B(), B.then(
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = F);
        },
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = F);
        }
      ), S._status === -1 && (S._status = 0, S._result = B);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Ae = {
    map: L,
    forEach: function(S, B, F) {
      L(
        S,
        function() {
          B.apply(this, arguments);
        },
        F
      );
    },
    count: function(S) {
      var B = 0;
      return L(S, function() {
        B++;
      }), B;
    },
    toArray: function(S) {
      return L(S, function(B) {
        return B;
      }) || [];
    },
    only: function(S) {
      if (!Yt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Qe.Activity = X, Qe.Children = Ae, Qe.Component = lt, Qe.Fragment = $e, Qe.Profiler = Ce, Qe.PureComponent = Bt, Qe.StrictMode = N, Qe.Suspense = ne, Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ze, Qe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return ze.H.useMemoCache(S);
    }
  }, Qe.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Qe.cacheSignal = function() {
    return null;
  }, Qe.cloneElement = function(S, B, F) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var W = _t({}, S.props), ge = S.key;
    if (B != null)
      for (xe in B.key !== void 0 && (ge = "" + B.key), B)
        !Ve.call(B, xe) || xe === "key" || xe === "__self" || xe === "__source" || xe === "ref" && B.ref === void 0 || (W[xe] = B[xe]);
    var xe = arguments.length - 2;
    if (xe === 1) W.children = F;
    else if (1 < xe) {
      for (var Ee = Array(xe), Lt = 0; Lt < xe; Lt++)
        Ee[Lt] = arguments[Lt + 2];
      W.children = Ee;
    }
    return Dt(S.type, ge, W);
  }, Qe.createContext = function(S) {
    return S = {
      $$typeof: vt,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: qe,
      _context: S
    }, S;
  }, Qe.createElement = function(S, B, F) {
    var W, ge = {}, xe = null;
    if (B != null)
      for (W in B.key !== void 0 && (xe = "" + B.key), B)
        Ve.call(B, W) && W !== "key" && W !== "__self" && W !== "__source" && (ge[W] = B[W]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ge.children = F;
    else if (1 < Ee) {
      for (var Lt = Array(Ee), ht = 0; ht < Ee; ht++)
        Lt[ht] = arguments[ht + 2];
      ge.children = Lt;
    }
    if (S && S.defaultProps)
      for (W in Ee = S.defaultProps, Ee)
        ge[W] === void 0 && (ge[W] = Ee[W]);
    return Dt(S, xe, ge);
  }, Qe.createRef = function() {
    return { current: null };
  }, Qe.forwardRef = function(S) {
    return { $$typeof: ee, render: S };
  }, Qe.isValidElement = Yt, Qe.lazy = function(S) {
    return {
      $$typeof: He,
      _payload: { _status: -1, _result: S },
      _init: P
    };
  }, Qe.memo = function(S, B) {
    return {
      $$typeof: $,
      type: S,
      compare: B === void 0 ? null : B
    };
  }, Qe.startTransition = function(S) {
    var B = ze.T, F = {};
    ze.T = F;
    try {
      var W = S(), ge = ze.S;
      ge !== null && ge(F, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(ul, pe);
    } catch (xe) {
      pe(xe);
    } finally {
      B !== null && F.types !== null && (B.types = F.types), ze.T = B;
    }
  }, Qe.unstable_useCacheRefresh = function() {
    return ze.H.useCacheRefresh();
  }, Qe.use = function(S) {
    return ze.H.use(S);
  }, Qe.useActionState = function(S, B, F) {
    return ze.H.useActionState(S, B, F);
  }, Qe.useCallback = function(S, B) {
    return ze.H.useCallback(S, B);
  }, Qe.useContext = function(S) {
    return ze.H.useContext(S);
  }, Qe.useDebugValue = function() {
  }, Qe.useDeferredValue = function(S, B) {
    return ze.H.useDeferredValue(S, B);
  }, Qe.useEffect = function(S, B) {
    return ze.H.useEffect(S, B);
  }, Qe.useEffectEvent = function(S) {
    return ze.H.useEffectEvent(S);
  }, Qe.useId = function() {
    return ze.H.useId();
  }, Qe.useImperativeHandle = function(S, B, F) {
    return ze.H.useImperativeHandle(S, B, F);
  }, Qe.useInsertionEffect = function(S, B) {
    return ze.H.useInsertionEffect(S, B);
  }, Qe.useLayoutEffect = function(S, B) {
    return ze.H.useLayoutEffect(S, B);
  }, Qe.useMemo = function(S, B) {
    return ze.H.useMemo(S, B);
  }, Qe.useOptimistic = function(S, B) {
    return ze.H.useOptimistic(S, B);
  }, Qe.useReducer = function(S, B, F) {
    return ze.H.useReducer(S, B, F);
  }, Qe.useRef = function(S) {
    return ze.H.useRef(S);
  }, Qe.useState = function(S) {
    return ze.H.useState(S);
  }, Qe.useSyncExternalStore = function(S, B, F) {
    return ze.H.useSyncExternalStore(
      S,
      B,
      F
    );
  }, Qe.useTransition = function() {
    return ze.H.useTransition();
  }, Qe.version = "19.2.3", Qe;
}
var Sp = { exports: {} };
Sp.exports;
var Ub;
function g3() {
  return Ub || (Ub = 1, (function(k, ae) {
    process.env.NODE_ENV !== "production" && (function() {
      function $e(v, M) {
        Object.defineProperty(qe.prototype, v, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function N(v) {
        return v === null || typeof v != "object" ? null : (v = _c && v[_c] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function Ce(v, M) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var I = v + "." + M;
        Rc[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          v
        ), Rc[I] = !0);
      }
      function qe(v, M, I) {
        this.props = v, this.context = M, this.refs = mt, this.updater = I || xa;
      }
      function vt() {
      }
      function ee(v, M, I) {
        this.props = v, this.context = M, this.refs = mt, this.updater = I || xa;
      }
      function ne() {
      }
      function $(v) {
        return "" + v;
      }
      function He(v) {
        try {
          $(v);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var I = M.error, te = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
          return I.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            te
          ), $(v);
        }
      }
      function X(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === rs ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case S:
            return "Fragment";
          case F:
            return "Profiler";
          case B:
            return "StrictMode";
          case Ee:
            return "Suspense";
          case Lt:
            return "SuspenseList";
          case ie:
            return "Activity";
        }
        if (typeof v == "object")
          switch (typeof v.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), v.$$typeof) {
            case Ae:
              return "Portal";
            case ge:
              return v.displayName || "Context";
            case W:
              return (v._context.displayName || "Context") + ".Consumer";
            case xe:
              var M = v.render;
              return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case ht:
              return M = v.displayName || null, M !== null ? M : X(v.type) || "Memo";
            case qa:
              M = v._payload, v = v._init;
              try {
                return X(v(M));
              } catch {
              }
          }
        return null;
      }
      function U(v) {
        if (v === S) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === qa)
          return "<...>";
        try {
          var M = X(v);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ce() {
        var v = re.A;
        return v === null ? null : v.getOwner();
      }
      function Le() {
        return Error("react-stack-top-frame");
      }
      function _t(v) {
        if (Mc.call(v, "key")) {
          var M = Object.getOwnPropertyDescriptor(v, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function ft(v, M) {
        function I() {
          Si || (Si = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        I.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: I,
          configurable: !0
        });
      }
      function lt() {
        var v = X(this.type);
        return Ir[v] || (Ir[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function Tl(v, M, I, te, de, De) {
        var he = I.ref;
        return v = {
          $$typeof: pe,
          type: v,
          key: M,
          props: I,
          _owner: te
        }, (he !== void 0 ? he : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: lt
        }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(v, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(v, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: de
        }), Object.defineProperty(v, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: De
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Bt(v, M) {
        return M = Tl(
          v.type,
          M,
          v.props,
          v._owner,
          v._debugStack,
          v._debugTask
        ), v._store && (M._store.validated = v._store.validated), M;
      }
      function Jt(v) {
        el(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === qa && (v._payload.status === "fulfilled" ? el(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function el(v) {
        return typeof v == "object" && v !== null && v.$$typeof === pe;
      }
      function ul(v) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(I) {
          return M[I];
        });
      }
      function ze(v, M) {
        return typeof v == "object" && v !== null && v.key != null ? (He(v.key), ul("" + v.key)) : M.toString(36);
      }
      function Ve(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(ne, ne) : (v.status = "pending", v.then(
              function(M) {
                v.status === "pending" && (v.status = "fulfilled", v.value = M);
              },
              function(M) {
                v.status === "pending" && (v.status = "rejected", v.reason = M);
              }
            )), v.status) {
              case "fulfilled":
                return v.value;
              case "rejected":
                throw v.reason;
            }
        }
        throw v;
      }
      function Dt(v, M, I, te, de) {
        var De = typeof v;
        (De === "undefined" || De === "boolean") && (v = null);
        var he = !1;
        if (v === null) he = !0;
        else
          switch (De) {
            case "bigint":
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (v.$$typeof) {
                case pe:
                case Ae:
                  he = !0;
                  break;
                case qa:
                  return he = v._init, Dt(
                    he(v._payload),
                    M,
                    I,
                    te,
                    de
                  );
              }
          }
        if (he) {
          he = v, de = de(he);
          var Pe = te === "" ? "." + ze(he, 0) : te;
          return gi(de) ? (I = "", Pe != null && (I = Pe.replace(Pr, "$&/") + "/"), Dt(de, M, I, "", function(ea) {
            return ea;
          })) : de != null && (el(de) && (de.key != null && (he && he.key === de.key || He(de.key)), I = Bt(
            de,
            I + (de.key == null || he && he.key === de.key ? "" : ("" + de.key).replace(
              Pr,
              "$&/"
            ) + "/") + Pe
          ), te !== "" && he != null && el(he) && he.key == null && he._store && !he._store.validated && (I._store.validated = 2), de = I), M.push(de)), 1;
        }
        if (he = 0, Pe = te === "" ? "." : te + ":", gi(v))
          for (var Ge = 0; Ge < v.length; Ge++)
            te = v[Ge], De = Pe + ze(te, Ge), he += Dt(
              te,
              M,
              I,
              De,
              de
            );
        else if (Ge = N(v), typeof Ge == "function")
          for (Ge === v.entries && (Cn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Cn = !0), v = Ge.call(v), Ge = 0; !(te = v.next()).done; )
            te = te.value, De = Pe + ze(te, Ge++), he += Dt(
              te,
              M,
              I,
              De,
              de
            );
        else if (De === "object") {
          if (typeof v.then == "function")
            return Dt(
              Ve(v),
              M,
              I,
              te,
              de
            );
          throw M = String(v), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return he;
      }
      function se(v, M, I) {
        if (v == null) return v;
        var te = [], de = 0;
        return Dt(v, te, "", "", function(De) {
          return M.call(I, De, de++);
        }), te;
      }
      function Yt(v) {
        if (v._status === -1) {
          var M = v._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = v._result;
          var I = M();
          if (I.then(
            function(de) {
              if (v._status === 0 || v._status === -1) {
                v._status = 1, v._result = de;
                var De = v._ioInfo;
                De != null && (De.end = performance.now()), I.status === void 0 && (I.status = "fulfilled", I.value = de);
              }
            },
            function(de) {
              if (v._status === 0 || v._status === -1) {
                v._status = 2, v._result = de;
                var De = v._ioInfo;
                De != null && (De.end = performance.now()), I.status === void 0 && (I.status = "rejected", I.reason = de);
              }
            }
          ), M = v._ioInfo, M != null) {
            M.value = I;
            var te = I.displayName;
            typeof te == "string" && (M.name = te);
          }
          v._status === -1 && (v._status = 0, v._result = I);
        }
        if (v._status === 1)
          return M = v._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw v._result;
      }
      function ye() {
        var v = re.H;
        return v === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), v;
      }
      function je() {
        re.asyncTransitions--;
      }
      function Qt(v) {
        if (bi === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            bi = (k && k[M]).call(
              k,
              "timers"
            ).setImmediate;
          } catch {
            bi = function(te) {
              ds === !1 && (ds = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var de = new MessageChannel();
              de.port1.onmessage = te, de.port2.postMessage(void 0);
            };
          }
        return bi(v);
      }
      function jt(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function _(v, M) {
        M !== rn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), rn = M;
      }
      function L(v, M, I) {
        var te = re.actQueue;
        if (te !== null)
          if (te.length !== 0)
            try {
              P(te), Qt(function() {
                return L(v, M, I);
              });
              return;
            } catch (de) {
              re.thrownErrors.push(de);
            }
          else re.actQueue = null;
        0 < re.thrownErrors.length ? (te = jt(re.thrownErrors), re.thrownErrors.length = 0, I(te)) : M(v);
      }
      function P(v) {
        if (!Ga) {
          Ga = !0;
          var M = 0;
          try {
            for (; M < v.length; M++) {
              var I = v[M];
              do {
                re.didUsePromise = !1;
                var te = I(!1);
                if (te !== null) {
                  if (re.didUsePromise) {
                    v[M] = I, v.splice(0, M);
                    return;
                  }
                  I = te;
                } else break;
              } while (!0);
            }
            v.length = 0;
          } catch (de) {
            v.splice(0, M + 1), re.thrownErrors.push(de);
          } finally {
            Ga = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var pe = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ae = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), ge = /* @__PURE__ */ Symbol.for("react.context"), xe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ee = /* @__PURE__ */ Symbol.for("react.suspense"), Lt = /* @__PURE__ */ Symbol.for("react.suspense_list"), ht = /* @__PURE__ */ Symbol.for("react.memo"), qa = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.activity"), _c = Symbol.iterator, Rc = {}, xa = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          Ce(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          Ce(v, "replaceState");
        },
        enqueueSetState: function(v) {
          Ce(v, "setState");
        }
      }, cu = Object.assign, mt = {};
      Object.freeze(mt), qe.prototype.isReactComponent = {}, qe.prototype.setState = function(v, M) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, M, "setState");
      }, qe.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var Pl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Cc in Pl)
        Pl.hasOwnProperty(Cc) && $e(Cc, Pl[Cc]);
      vt.prototype = qe.prototype, Pl = ee.prototype = new vt(), Pl.constructor = ee, cu(Pl, qe.prototype), Pl.isPureReactComponent = !0;
      var gi = Array.isArray, rs = /* @__PURE__ */ Symbol.for("react.client.reference"), re = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Mc = Object.prototype.hasOwnProperty, iu = console.createTask ? console.createTask : function() {
        return null;
      };
      Pl = {
        react_stack_bottom_frame: function(v) {
          return v();
        }
      };
      var Si, vl, Ir = {}, Co = Pl.react_stack_bottom_frame.bind(
        Pl,
        Le
      )(), Uo = iu(U(Le)), Cn = !1, Pr = /\/+/g, Ho = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
            error: v
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", v);
          return;
        }
        console.error(v);
      }, ds = !1, bi = null, rn = 0, Al = !1, Ga = !1, Ul = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : Qt;
      Pl = Object.freeze({
        __proto__: null,
        c: function(v) {
          return ye().useMemoCache(v);
        }
      });
      var Cc = {
        map: se,
        forEach: function(v, M, I) {
          se(
            v,
            function() {
              M.apply(this, arguments);
            },
            I
          );
        },
        count: function(v) {
          var M = 0;
          return se(v, function() {
            M++;
          }), M;
        },
        toArray: function(v) {
          return se(v, function(M) {
            return M;
          }) || [];
        },
        only: function(v) {
          if (!el(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      };
      ae.Activity = ie, ae.Children = Cc, ae.Component = qe, ae.Fragment = S, ae.Profiler = F, ae.PureComponent = ee, ae.StrictMode = B, ae.Suspense = Ee, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re, ae.__COMPILER_RUNTIME = Pl, ae.act = function(v) {
        var M = re.actQueue, I = rn;
        rn++;
        var te = re.actQueue = M !== null ? M : [], de = !1;
        try {
          var De = v();
        } catch (Ge) {
          re.thrownErrors.push(Ge);
        }
        if (0 < re.thrownErrors.length)
          throw _(M, I), v = jt(re.thrownErrors), re.thrownErrors.length = 0, v;
        if (De !== null && typeof De == "object" && typeof De.then == "function") {
          var he = De;
          return Ul(function() {
            de || Al || (Al = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ge, ea) {
              de = !0, he.then(
                function(dn) {
                  if (_(M, I), I === 0) {
                    try {
                      P(te), Qt(function() {
                        return L(
                          dn,
                          Ge,
                          ea
                        );
                      });
                    } catch (No) {
                      re.thrownErrors.push(No);
                    }
                    if (0 < re.thrownErrors.length) {
                      var Uc = jt(
                        re.thrownErrors
                      );
                      re.thrownErrors.length = 0, ea(Uc);
                    }
                  } else Ge(dn);
                },
                function(dn) {
                  _(M, I), 0 < re.thrownErrors.length && (dn = jt(
                    re.thrownErrors
                  ), re.thrownErrors.length = 0), ea(dn);
                }
              );
            }
          };
        }
        var Pe = De;
        if (_(M, I), I === 0 && (P(te), te.length !== 0 && Ul(function() {
          de || Al || (Al = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), re.actQueue = null), 0 < re.thrownErrors.length)
          throw v = jt(re.thrownErrors), re.thrownErrors.length = 0, v;
        return {
          then: function(Ge, ea) {
            de = !0, I === 0 ? (re.actQueue = te, Qt(function() {
              return L(
                Pe,
                Ge,
                ea
              );
            })) : Ge(Pe);
          }
        };
      }, ae.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, ae.cacheSignal = function() {
        return null;
      }, ae.captureOwnerStack = function() {
        var v = re.getCurrentStack;
        return v === null ? null : v();
      }, ae.cloneElement = function(v, M, I) {
        if (v == null)
          throw Error(
            "The argument must be a React element, but you passed " + v + "."
          );
        var te = cu({}, v.props), de = v.key, De = v._owner;
        if (M != null) {
          var he;
          e: {
            if (Mc.call(M, "ref") && (he = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && he.isReactWarning) {
              he = !1;
              break e;
            }
            he = M.ref !== void 0;
          }
          he && (De = ce()), _t(M) && (He(M.key), de = "" + M.key);
          for (Pe in M)
            !Mc.call(M, Pe) || Pe === "key" || Pe === "__self" || Pe === "__source" || Pe === "ref" && M.ref === void 0 || (te[Pe] = M[Pe]);
        }
        var Pe = arguments.length - 2;
        if (Pe === 1) te.children = I;
        else if (1 < Pe) {
          he = Array(Pe);
          for (var Ge = 0; Ge < Pe; Ge++)
            he[Ge] = arguments[Ge + 2];
          te.children = he;
        }
        for (te = Tl(
          v.type,
          de,
          te,
          De,
          v._debugStack,
          v._debugTask
        ), de = 2; de < arguments.length; de++)
          Jt(arguments[de]);
        return te;
      }, ae.createContext = function(v) {
        return v = {
          $$typeof: ge,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, v.Provider = v, v.Consumer = {
          $$typeof: W,
          _context: v
        }, v._currentRenderer = null, v._currentRenderer2 = null, v;
      }, ae.createElement = function(v, M, I) {
        for (var te = 2; te < arguments.length; te++)
          Jt(arguments[te]);
        te = {};
        var de = null;
        if (M != null)
          for (Ge in vl || !("__self" in M) || "key" in M || (vl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), _t(M) && (He(M.key), de = "" + M.key), M)
            Mc.call(M, Ge) && Ge !== "key" && Ge !== "__self" && Ge !== "__source" && (te[Ge] = M[Ge]);
        var De = arguments.length - 2;
        if (De === 1) te.children = I;
        else if (1 < De) {
          for (var he = Array(De), Pe = 0; Pe < De; Pe++)
            he[Pe] = arguments[Pe + 2];
          Object.freeze && Object.freeze(he), te.children = he;
        }
        if (v && v.defaultProps)
          for (Ge in De = v.defaultProps, De)
            te[Ge] === void 0 && (te[Ge] = De[Ge]);
        de && ft(
          te,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var Ge = 1e4 > re.recentlyCreatedOwnerStacks++;
        return Tl(
          v,
          de,
          te,
          ce(),
          Ge ? Error("react-stack-top-frame") : Co,
          Ge ? iu(U(v)) : Uo
        );
      }, ae.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, ae.forwardRef = function(v) {
        v != null && v.$$typeof === ht ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof v != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          v === null ? "null" : typeof v
        ) : v.length !== 0 && v.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          v.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), v != null && v.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var M = { $$typeof: xe, render: v }, I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(te) {
            I = te, v.name || v.displayName || (Object.defineProperty(v, "name", { value: te }), v.displayName = te);
          }
        }), M;
      }, ae.isValidElement = el, ae.lazy = function(v) {
        v = { _status: -1, _result: v };
        var M = {
          $$typeof: qa,
          _payload: v,
          _init: Yt
        }, I = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return v._ioInfo = I, M._debugInfo = [{ awaited: I }], M;
      }, ae.memo = function(v, M) {
        v == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          v === null ? "null" : typeof v
        ), M = {
          $$typeof: ht,
          type: v,
          compare: M === void 0 ? null : M
        };
        var I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(te) {
            I = te, v.name || v.displayName || (Object.defineProperty(v, "name", { value: te }), v.displayName = te);
          }
        }), M;
      }, ae.startTransition = function(v) {
        var M = re.T, I = {};
        I._updatedFibers = /* @__PURE__ */ new Set(), re.T = I;
        try {
          var te = v(), de = re.S;
          de !== null && de(I, te), typeof te == "object" && te !== null && typeof te.then == "function" && (re.asyncTransitions++, te.then(je, je), te.then(ne, Ho));
        } catch (De) {
          Ho(De);
        } finally {
          M === null && I._updatedFibers && (v = I._updatedFibers.size, I._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && I.types !== null && (M.types !== null && M.types !== I.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = I.types), re.T = M;
        }
      }, ae.unstable_useCacheRefresh = function() {
        return ye().useCacheRefresh();
      }, ae.use = function(v) {
        return ye().use(v);
      }, ae.useActionState = function(v, M, I) {
        return ye().useActionState(
          v,
          M,
          I
        );
      }, ae.useCallback = function(v, M) {
        return ye().useCallback(v, M);
      }, ae.useContext = function(v) {
        var M = ye();
        return v.$$typeof === W && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(v);
      }, ae.useDebugValue = function(v, M) {
        return ye().useDebugValue(v, M);
      }, ae.useDeferredValue = function(v, M) {
        return ye().useDeferredValue(v, M);
      }, ae.useEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useEffect(v, M);
      }, ae.useEffectEvent = function(v) {
        return ye().useEffectEvent(v);
      }, ae.useId = function() {
        return ye().useId();
      }, ae.useImperativeHandle = function(v, M, I) {
        return ye().useImperativeHandle(v, M, I);
      }, ae.useInsertionEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useInsertionEffect(v, M);
      }, ae.useLayoutEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useLayoutEffect(v, M);
      }, ae.useMemo = function(v, M) {
        return ye().useMemo(v, M);
      }, ae.useOptimistic = function(v, M) {
        return ye().useOptimistic(v, M);
      }, ae.useReducer = function(v, M, I) {
        return ye().useReducer(v, M, I);
      }, ae.useRef = function(v) {
        return ye().useRef(v);
      }, ae.useState = function(v) {
        return ye().useState(v);
      }, ae.useSyncExternalStore = function(v, M, I) {
        return ye().useSyncExternalStore(
          v,
          M,
          I
        );
      }, ae.useTransition = function() {
        return ye().useTransition();
      }, ae.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(Sp, Sp.exports)), Sp.exports;
}
var Hb;
function S0() {
  return Hb || (Hb = 1, process.env.NODE_ENV === "production" ? Qg.exports = v3() : Qg.exports = g3()), Qg.exports;
}
var Nb;
function S3() {
  return Nb || (Nb = 1, process.env.NODE_ENV !== "production" && (function() {
    function k(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Yt ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case ft:
          return "Fragment";
        case Tl:
          return "Profiler";
        case lt:
          return "StrictMode";
        case ul:
          return "Suspense";
        case ze:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case _t:
            return "Portal";
          case Jt:
            return S.displayName || "Context";
          case Bt:
            return (S._context.displayName || "Context") + ".Consumer";
          case el:
            var B = S.render;
            return S = S.displayName, S || (S = B.displayName || B.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Ve:
            return B = S.displayName || null, B !== null ? B : k(S.type) || "Memo";
          case Dt:
            B = S._payload, S = S._init;
            try {
              return k(S(B));
            } catch {
            }
        }
      return null;
    }
    function ae(S) {
      return "" + S;
    }
    function $e(S) {
      try {
        ae(S);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var F = B.error, W = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return F.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), ae(S);
      }
    }
    function N(S) {
      if (S === ft) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === Dt)
        return "<...>";
      try {
        var B = k(S);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Ce() {
      var S = ye.A;
      return S === null ? null : S.getOwner();
    }
    function qe() {
      return Error("react-stack-top-frame");
    }
    function vt(S) {
      if (je.call(S, "key")) {
        var B = Object.getOwnPropertyDescriptor(S, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function ee(S, B) {
      function F() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: F,
        configurable: !0
      });
    }
    function ne() {
      var S = k(this.type);
      return L[S] || (L[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function $(S, B, F, W, ge, xe) {
      var Ee = F.ref;
      return S = {
        $$typeof: Le,
        type: S,
        key: B,
        props: F,
        _owner: W
      }, (Ee !== void 0 ? Ee : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: ne
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function He(S, B, F, W, ge, xe) {
      var Ee = B.children;
      if (Ee !== void 0)
        if (W)
          if (Qt(Ee)) {
            for (W = 0; W < Ee.length; W++)
              X(Ee[W]);
            Object.freeze && Object.freeze(Ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else X(Ee);
      if (je.call(B, "key")) {
        Ee = k(S);
        var Lt = Object.keys(B).filter(function(qa) {
          return qa !== "key";
        });
        W = 0 < Lt.length ? "{key: someKey, " + Lt.join(": ..., ") + ": ...}" : "{key: someKey}", Ae[Ee + W] || (Lt = 0 < Lt.length ? "{" + Lt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          Ee,
          Lt,
          Ee
        ), Ae[Ee + W] = !0);
      }
      if (Ee = null, F !== void 0 && ($e(F), Ee = "" + F), vt(B) && ($e(B.key), Ee = "" + B.key), "key" in B) {
        F = {};
        for (var ht in B)
          ht !== "key" && (F[ht] = B[ht]);
      } else F = B;
      return Ee && ee(
        F,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), $(
        S,
        Ee,
        F,
        Ce(),
        ge,
        xe
      );
    }
    function X(S) {
      U(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === Dt && (S._payload.status === "fulfilled" ? U(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function U(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Le;
    }
    var ce = S0(), Le = /* @__PURE__ */ Symbol.for("react.transitional.element"), _t = /* @__PURE__ */ Symbol.for("react.portal"), ft = /* @__PURE__ */ Symbol.for("react.fragment"), lt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Tl = /* @__PURE__ */ Symbol.for("react.profiler"), Bt = /* @__PURE__ */ Symbol.for("react.consumer"), Jt = /* @__PURE__ */ Symbol.for("react.context"), el = /* @__PURE__ */ Symbol.for("react.forward_ref"), ul = /* @__PURE__ */ Symbol.for("react.suspense"), ze = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ve = /* @__PURE__ */ Symbol.for("react.memo"), Dt = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), Yt = /* @__PURE__ */ Symbol.for("react.client.reference"), ye = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, je = Object.prototype.hasOwnProperty, Qt = Array.isArray, jt = console.createTask ? console.createTask : function() {
      return null;
    };
    ce = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var _, L = {}, P = ce.react_stack_bottom_frame.bind(
      ce,
      qe
    )(), pe = jt(N(qe)), Ae = {};
    pp.Fragment = ft, pp.jsx = function(S, B, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return He(
        S,
        B,
        F,
        !1,
        W ? Error("react-stack-top-frame") : P,
        W ? jt(N(S)) : pe
      );
    }, pp.jsxs = function(S, B, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return He(
        S,
        B,
        F,
        !0,
        W ? Error("react-stack-top-frame") : P,
        W ? jt(N(S)) : pe
      );
    };
  })()), pp;
}
var Bb;
function b3() {
  return Bb || (Bb = 1, process.env.NODE_ENV === "production" ? Xg.exports = p3() : Xg.exports = S3()), Xg.exports;
}
var Mn = b3(), Lg = { exports: {} }, vp = {}, Vg = { exports: {} }, v2 = {};
var Yb;
function E3() {
  return Yb || (Yb = 1, (function(k) {
    function ae(_, L) {
      var P = _.length;
      _.push(L);
      e: for (; 0 < P; ) {
        var pe = P - 1 >>> 1, Ae = _[pe];
        if (0 < Ce(Ae, L))
          _[pe] = L, _[P] = Ae, P = pe;
        else break e;
      }
    }
    function $e(_) {
      return _.length === 0 ? null : _[0];
    }
    function N(_) {
      if (_.length === 0) return null;
      var L = _[0], P = _.pop();
      if (P !== L) {
        _[0] = P;
        e: for (var pe = 0, Ae = _.length, S = Ae >>> 1; pe < S; ) {
          var B = 2 * (pe + 1) - 1, F = _[B], W = B + 1, ge = _[W];
          if (0 > Ce(F, P))
            W < Ae && 0 > Ce(ge, F) ? (_[pe] = ge, _[W] = P, pe = W) : (_[pe] = F, _[B] = P, pe = B);
          else if (W < Ae && 0 > Ce(ge, P))
            _[pe] = ge, _[W] = P, pe = W;
          else break e;
        }
      }
      return L;
    }
    function Ce(_, L) {
      var P = _.sortIndex - L.sortIndex;
      return P !== 0 ? P : _.id - L.id;
    }
    if (k.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var qe = performance;
      k.unstable_now = function() {
        return qe.now();
      };
    } else {
      var vt = Date, ee = vt.now();
      k.unstable_now = function() {
        return vt.now() - ee;
      };
    }
    var ne = [], $ = [], He = 1, X = null, U = 3, ce = !1, Le = !1, _t = !1, ft = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Tl = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null;
    function Jt(_) {
      for (var L = $e($); L !== null; ) {
        if (L.callback === null) N($);
        else if (L.startTime <= _)
          N($), L.sortIndex = L.expirationTime, ae(ne, L);
        else break;
        L = $e($);
      }
    }
    function el(_) {
      if (_t = !1, Jt(_), !Le)
        if ($e(ne) !== null)
          Le = !0, ul || (ul = !0, ye());
        else {
          var L = $e($);
          L !== null && jt(el, L.startTime - _);
        }
    }
    var ul = !1, ze = -1, Ve = 5, Dt = -1;
    function se() {
      return ft ? !0 : !(k.unstable_now() - Dt < Ve);
    }
    function Yt() {
      if (ft = !1, ul) {
        var _ = k.unstable_now();
        Dt = _;
        var L = !0;
        try {
          e: {
            Le = !1, _t && (_t = !1, Tl(ze), ze = -1), ce = !0;
            var P = U;
            try {
              t: {
                for (Jt(_), X = $e(ne); X !== null && !(X.expirationTime > _ && se()); ) {
                  var pe = X.callback;
                  if (typeof pe == "function") {
                    X.callback = null, U = X.priorityLevel;
                    var Ae = pe(
                      X.expirationTime <= _
                    );
                    if (_ = k.unstable_now(), typeof Ae == "function") {
                      X.callback = Ae, Jt(_), L = !0;
                      break t;
                    }
                    X === $e(ne) && N(ne), Jt(_);
                  } else N(ne);
                  X = $e(ne);
                }
                if (X !== null) L = !0;
                else {
                  var S = $e($);
                  S !== null && jt(
                    el,
                    S.startTime - _
                  ), L = !1;
                }
              }
              break e;
            } finally {
              X = null, U = P, ce = !1;
            }
            L = void 0;
          }
        } finally {
          L ? ye() : ul = !1;
        }
      }
    }
    var ye;
    if (typeof Bt == "function")
      ye = function() {
        Bt(Yt);
      };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), Qt = je.port2;
      je.port1.onmessage = Yt, ye = function() {
        Qt.postMessage(null);
      };
    } else
      ye = function() {
        lt(Yt, 0);
      };
    function jt(_, L) {
      ze = lt(function() {
        _(k.unstable_now());
      }, L);
    }
    k.unstable_IdlePriority = 5, k.unstable_ImmediatePriority = 1, k.unstable_LowPriority = 4, k.unstable_NormalPriority = 3, k.unstable_Profiling = null, k.unstable_UserBlockingPriority = 2, k.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, k.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ve = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, k.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, k.unstable_next = function(_) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = U;
      }
      var P = U;
      U = L;
      try {
        return _();
      } finally {
        U = P;
      }
    }, k.unstable_requestPaint = function() {
      ft = !0;
    }, k.unstable_runWithPriority = function(_, L) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var P = U;
      U = _;
      try {
        return L();
      } finally {
        U = P;
      }
    }, k.unstable_scheduleCallback = function(_, L, P) {
      var pe = k.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pe + P : pe) : P = pe, _) {
        case 1:
          var Ae = -1;
          break;
        case 2:
          Ae = 250;
          break;
        case 5:
          Ae = 1073741823;
          break;
        case 4:
          Ae = 1e4;
          break;
        default:
          Ae = 5e3;
      }
      return Ae = P + Ae, _ = {
        id: He++,
        callback: L,
        priorityLevel: _,
        startTime: P,
        expirationTime: Ae,
        sortIndex: -1
      }, P > pe ? (_.sortIndex = P, ae($, _), $e(ne) === null && _ === $e($) && (_t ? (Tl(ze), ze = -1) : _t = !0, jt(el, P - pe))) : (_.sortIndex = Ae, ae(ne, _), Le || ce || (Le = !0, ul || (ul = !0, ye()))), _;
    }, k.unstable_shouldYield = se, k.unstable_wrapCallback = function(_) {
      var L = U;
      return function() {
        var P = U;
        U = L;
        try {
          return _.apply(this, arguments);
        } finally {
          U = P;
        }
      };
    };
  })(v2)), v2;
}
var g2 = {};
var jb;
function T3() {
  return jb || (jb = 1, (function(k) {
    process.env.NODE_ENV !== "production" && (function() {
      function ae() {
        if (el = !1, Dt) {
          var _ = k.unstable_now();
          ye = _;
          var L = !0;
          try {
            e: {
              Bt = !1, Jt && (Jt = !1, ze(se), se = -1), Tl = !0;
              var P = lt;
              try {
                t: {
                  for (vt(_), ft = N(ce); ft !== null && !(ft.expirationTime > _ && ne()); ) {
                    var pe = ft.callback;
                    if (typeof pe == "function") {
                      ft.callback = null, lt = ft.priorityLevel;
                      var Ae = pe(
                        ft.expirationTime <= _
                      );
                      if (_ = k.unstable_now(), typeof Ae == "function") {
                        ft.callback = Ae, vt(_), L = !0;
                        break t;
                      }
                      ft === N(ce) && Ce(ce), vt(_);
                    } else Ce(ce);
                    ft = N(ce);
                  }
                  if (ft !== null) L = !0;
                  else {
                    var S = N(Le);
                    S !== null && $(
                      ee,
                      S.startTime - _
                    ), L = !1;
                  }
                }
                break e;
              } finally {
                ft = null, lt = P, Tl = !1;
              }
              L = void 0;
            }
          } finally {
            L ? je() : Dt = !1;
          }
        }
      }
      function $e(_, L) {
        var P = _.length;
        _.push(L);
        e: for (; 0 < P; ) {
          var pe = P - 1 >>> 1, Ae = _[pe];
          if (0 < qe(Ae, L))
            _[pe] = L, _[P] = Ae, P = pe;
          else break e;
        }
      }
      function N(_) {
        return _.length === 0 ? null : _[0];
      }
      function Ce(_) {
        if (_.length === 0) return null;
        var L = _[0], P = _.pop();
        if (P !== L) {
          _[0] = P;
          e: for (var pe = 0, Ae = _.length, S = Ae >>> 1; pe < S; ) {
            var B = 2 * (pe + 1) - 1, F = _[B], W = B + 1, ge = _[W];
            if (0 > qe(F, P))
              W < Ae && 0 > qe(ge, F) ? (_[pe] = ge, _[W] = P, pe = W) : (_[pe] = F, _[B] = P, pe = B);
            else if (W < Ae && 0 > qe(ge, P))
              _[pe] = ge, _[W] = P, pe = W;
            else break e;
          }
        }
        return L;
      }
      function qe(_, L) {
        var P = _.sortIndex - L.sortIndex;
        return P !== 0 ? P : _.id - L.id;
      }
      function vt(_) {
        for (var L = N(Le); L !== null; ) {
          if (L.callback === null) Ce(Le);
          else if (L.startTime <= _)
            Ce(Le), L.sortIndex = L.expirationTime, $e(ce, L);
          else break;
          L = N(Le);
        }
      }
      function ee(_) {
        if (Jt = !1, vt(_), !Bt)
          if (N(ce) !== null)
            Bt = !0, Dt || (Dt = !0, je());
          else {
            var L = N(Le);
            L !== null && $(
              ee,
              L.startTime - _
            );
          }
      }
      function ne() {
        return el ? !0 : !(k.unstable_now() - ye < Yt);
      }
      function $(_, L) {
        se = ul(function() {
          _(k.unstable_now());
        }, L);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), k.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var He = performance;
        k.unstable_now = function() {
          return He.now();
        };
      } else {
        var X = Date, U = X.now();
        k.unstable_now = function() {
          return X.now() - U;
        };
      }
      var ce = [], Le = [], _t = 1, ft = null, lt = 3, Tl = !1, Bt = !1, Jt = !1, el = !1, ul = typeof setTimeout == "function" ? setTimeout : null, ze = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null, Dt = !1, se = -1, Yt = 5, ye = -1;
      if (typeof Ve == "function")
        var je = function() {
          Ve(ae);
        };
      else if (typeof MessageChannel < "u") {
        var Qt = new MessageChannel(), jt = Qt.port2;
        Qt.port1.onmessage = ae, je = function() {
          jt.postMessage(null);
        };
      } else
        je = function() {
          ul(ae, 0);
        };
      k.unstable_IdlePriority = 5, k.unstable_ImmediatePriority = 1, k.unstable_LowPriority = 4, k.unstable_NormalPriority = 3, k.unstable_Profiling = null, k.unstable_UserBlockingPriority = 2, k.unstable_cancelCallback = function(_) {
        _.callback = null;
      }, k.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Yt = 0 < _ ? Math.floor(1e3 / _) : 5;
      }, k.unstable_getCurrentPriorityLevel = function() {
        return lt;
      }, k.unstable_next = function(_) {
        switch (lt) {
          case 1:
          case 2:
          case 3:
            var L = 3;
            break;
          default:
            L = lt;
        }
        var P = lt;
        lt = L;
        try {
          return _();
        } finally {
          lt = P;
        }
      }, k.unstable_requestPaint = function() {
        el = !0;
      }, k.unstable_runWithPriority = function(_, L) {
        switch (_) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            _ = 3;
        }
        var P = lt;
        lt = _;
        try {
          return L();
        } finally {
          lt = P;
        }
      }, k.unstable_scheduleCallback = function(_, L, P) {
        var pe = k.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pe + P : pe) : P = pe, _) {
          case 1:
            var Ae = -1;
            break;
          case 2:
            Ae = 250;
            break;
          case 5:
            Ae = 1073741823;
            break;
          case 4:
            Ae = 1e4;
            break;
          default:
            Ae = 5e3;
        }
        return Ae = P + Ae, _ = {
          id: _t++,
          callback: L,
          priorityLevel: _,
          startTime: P,
          expirationTime: Ae,
          sortIndex: -1
        }, P > pe ? (_.sortIndex = P, $e(Le, _), N(ce) === null && _ === N(Le) && (Jt ? (ze(se), se = -1) : Jt = !0, $(ee, P - pe))) : (_.sortIndex = Ae, $e(ce, _), Bt || Tl || (Bt = !0, Dt || (Dt = !0, je()))), _;
      }, k.unstable_shouldYield = ne, k.unstable_wrapCallback = function(_) {
        var L = lt;
        return function() {
          var P = lt;
          lt = L;
          try {
            return _.apply(this, arguments);
          } finally {
            lt = P;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(g2)), g2;
}
var qb;
function Zb() {
  return qb || (qb = 1, process.env.NODE_ENV === "production" ? Vg.exports = E3() : Vg.exports = T3()), Vg.exports;
}
var Zg = { exports: {} }, Ya = {};
var xb;
function A3() {
  if (xb) return Ya;
  xb = 1;
  var k = S0();
  function ae(ne) {
    var $ = "https://react.dev/errors/" + ne;
    if (1 < arguments.length) {
      $ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var He = 2; He < arguments.length; He++)
        $ += "&args[]=" + encodeURIComponent(arguments[He]);
    }
    return "Minified React error #" + ne + "; visit " + $ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $e() {
  }
  var N = {
    d: {
      f: $e,
      r: function() {
        throw Error(ae(522));
      },
      D: $e,
      C: $e,
      L: $e,
      m: $e,
      X: $e,
      S: $e,
      M: $e
    },
    p: 0,
    findDOMNode: null
  }, Ce = /* @__PURE__ */ Symbol.for("react.portal");
  function qe(ne, $, He) {
    var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: X == null ? null : "" + X,
      children: ne,
      containerInfo: $,
      implementation: He
    };
  }
  var vt = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ee(ne, $) {
    if (ne === "font") return "";
    if (typeof $ == "string")
      return $ === "use-credentials" ? $ : "";
  }
  return Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Ya.createPortal = function(ne, $) {
    var He = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$ || $.nodeType !== 1 && $.nodeType !== 9 && $.nodeType !== 11)
      throw Error(ae(299));
    return qe(ne, $, null, He);
  }, Ya.flushSync = function(ne) {
    var $ = vt.T, He = N.p;
    try {
      if (vt.T = null, N.p = 2, ne) return ne();
    } finally {
      vt.T = $, N.p = He, N.d.f();
    }
  }, Ya.preconnect = function(ne, $) {
    typeof ne == "string" && ($ ? ($ = $.crossOrigin, $ = typeof $ == "string" ? $ === "use-credentials" ? $ : "" : void 0) : $ = null, N.d.C(ne, $));
  }, Ya.prefetchDNS = function(ne) {
    typeof ne == "string" && N.d.D(ne);
  }, Ya.preinit = function(ne, $) {
    if (typeof ne == "string" && $ && typeof $.as == "string") {
      var He = $.as, X = ee(He, $.crossOrigin), U = typeof $.integrity == "string" ? $.integrity : void 0, ce = typeof $.fetchPriority == "string" ? $.fetchPriority : void 0;
      He === "style" ? N.d.S(
        ne,
        typeof $.precedence == "string" ? $.precedence : void 0,
        {
          crossOrigin: X,
          integrity: U,
          fetchPriority: ce
        }
      ) : He === "script" && N.d.X(ne, {
        crossOrigin: X,
        integrity: U,
        fetchPriority: ce,
        nonce: typeof $.nonce == "string" ? $.nonce : void 0
      });
    }
  }, Ya.preinitModule = function(ne, $) {
    if (typeof ne == "string")
      if (typeof $ == "object" && $ !== null) {
        if ($.as == null || $.as === "script") {
          var He = ee(
            $.as,
            $.crossOrigin
          );
          N.d.M(ne, {
            crossOrigin: He,
            integrity: typeof $.integrity == "string" ? $.integrity : void 0,
            nonce: typeof $.nonce == "string" ? $.nonce : void 0
          });
        }
      } else $ == null && N.d.M(ne);
  }, Ya.preload = function(ne, $) {
    if (typeof ne == "string" && typeof $ == "object" && $ !== null && typeof $.as == "string") {
      var He = $.as, X = ee(He, $.crossOrigin);
      N.d.L(ne, He, {
        crossOrigin: X,
        integrity: typeof $.integrity == "string" ? $.integrity : void 0,
        nonce: typeof $.nonce == "string" ? $.nonce : void 0,
        type: typeof $.type == "string" ? $.type : void 0,
        fetchPriority: typeof $.fetchPriority == "string" ? $.fetchPriority : void 0,
        referrerPolicy: typeof $.referrerPolicy == "string" ? $.referrerPolicy : void 0,
        imageSrcSet: typeof $.imageSrcSet == "string" ? $.imageSrcSet : void 0,
        imageSizes: typeof $.imageSizes == "string" ? $.imageSizes : void 0,
        media: typeof $.media == "string" ? $.media : void 0
      });
    }
  }, Ya.preloadModule = function(ne, $) {
    if (typeof ne == "string")
      if ($) {
        var He = ee($.as, $.crossOrigin);
        N.d.m(ne, {
          as: typeof $.as == "string" && $.as !== "script" ? $.as : void 0,
          crossOrigin: He,
          integrity: typeof $.integrity == "string" ? $.integrity : void 0
        });
      } else N.d.m(ne);
  }, Ya.requestFormReset = function(ne) {
    N.d.r(ne);
  }, Ya.unstable_batchedUpdates = function(ne, $) {
    return ne($);
  }, Ya.useFormState = function(ne, $, He) {
    return vt.H.useFormState(ne, $, He);
  }, Ya.useFormStatus = function() {
    return vt.H.useHostTransitionStatus();
  }, Ya.version = "19.2.3", Ya;
}
var ja = {};
var Gb;
function O3() {
  return Gb || (Gb = 1, process.env.NODE_ENV !== "production" && (function() {
    function k() {
    }
    function ae(X) {
      return "" + X;
    }
    function $e(X, U, ce) {
      var Le = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        ae(Le);
        var _t = !1;
      } catch {
        _t = !0;
      }
      return _t && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Le[Symbol.toStringTag] || Le.constructor.name || "Object"
      ), ae(Le)), {
        $$typeof: $,
        key: Le == null ? null : "" + Le,
        children: X,
        containerInfo: U,
        implementation: ce
      };
    }
    function N(X, U) {
      if (X === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function Ce(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : 'something with type "' + typeof X + '"';
    }
    function qe(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : typeof X == "string" ? JSON.stringify(X) : typeof X == "number" ? "`" + X + "`" : 'something with type "' + typeof X + '"';
    }
    function vt() {
      var X = He.H;
      return X === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), X;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var ee = S0(), ne = {
      d: {
        f: k,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: k,
        C: k,
        L: k,
        m: k,
        X: k,
        S: k,
        M: k
      },
      p: 0,
      findDOMNode: null
    }, $ = /* @__PURE__ */ Symbol.for("react.portal"), He = ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ne, ja.createPortal = function(X, U) {
      var ce = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return $e(X, U, null, ce);
    }, ja.flushSync = function(X) {
      var U = He.T, ce = ne.p;
      try {
        if (He.T = null, ne.p = 2, X)
          return X();
      } finally {
        He.T = U, ne.p = ce, ne.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ja.preconnect = function(X, U) {
      typeof X == "string" && X ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        qe(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Ce(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ce(X)
      ), typeof X == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, ne.d.C(X, U));
    }, ja.prefetchDNS = function(X) {
      if (typeof X != "string" || !X)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Ce(X)
        );
      else if (1 < arguments.length) {
        var U = arguments[1];
        typeof U == "object" && U.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          qe(U)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          qe(U)
        );
      }
      typeof X == "string" && ne.d.D(X);
    }, ja.preinit = function(X, U) {
      if (typeof X == "string" && X ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        qe(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        qe(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ce(X)
      ), typeof X == "string" && U && typeof U.as == "string") {
        var ce = U.as, Le = N(ce, U.crossOrigin), _t = typeof U.integrity == "string" ? U.integrity : void 0, ft = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        ce === "style" ? ne.d.S(
          X,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: Le,
            integrity: _t,
            fetchPriority: ft
          }
        ) : ce === "script" && ne.d.X(X, {
          crossOrigin: Le,
          integrity: _t,
          fetchPriority: ft,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, ja.preinitModule = function(X, U) {
      var ce = "";
      typeof X == "string" && X || (ce += " The `href` argument encountered was " + Ce(X) + "."), U !== void 0 && typeof U != "object" ? ce += " The `options` argument encountered was " + Ce(U) + "." : U && "as" in U && U.as !== "script" && (ce += " The `as` option encountered was " + qe(U.as) + "."), ce ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ce
      ) : (ce = U && typeof U.as == "string" ? U.as : "script", ce) === "script" || (ce = qe(ce), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ce,
        X
      )), typeof X == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (ce = N(
        U.as,
        U.crossOrigin
      ), ne.d.M(X, {
        crossOrigin: ce,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && ne.d.M(X));
    }, ja.preload = function(X, U) {
      var ce = "";
      if (typeof X == "string" && X || (ce += " The `href` argument encountered was " + Ce(X) + "."), U == null || typeof U != "object" ? ce += " The `options` argument encountered was " + Ce(U) + "." : typeof U.as == "string" && U.as || (ce += " The `as` option encountered was " + Ce(U.as) + "."), ce && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ce
      ), typeof X == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        ce = U.as;
        var Le = N(
          ce,
          U.crossOrigin
        );
        ne.d.L(X, ce, {
          crossOrigin: Le,
          integrity: typeof U.integrity == "string" ? U.integrity : void 0,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0,
          type: typeof U.type == "string" ? U.type : void 0,
          fetchPriority: typeof U.fetchPriority == "string" ? U.fetchPriority : void 0,
          referrerPolicy: typeof U.referrerPolicy == "string" ? U.referrerPolicy : void 0,
          imageSrcSet: typeof U.imageSrcSet == "string" ? U.imageSrcSet : void 0,
          imageSizes: typeof U.imageSizes == "string" ? U.imageSizes : void 0,
          media: typeof U.media == "string" ? U.media : void 0
        });
      }
    }, ja.preloadModule = function(X, U) {
      var ce = "";
      typeof X == "string" && X || (ce += " The `href` argument encountered was " + Ce(X) + "."), U !== void 0 && typeof U != "object" ? ce += " The `options` argument encountered was " + Ce(U) + "." : U && "as" in U && typeof U.as != "string" && (ce += " The `as` option encountered was " + Ce(U.as) + "."), ce && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ce
      ), typeof X == "string" && (U ? (ce = N(
        U.as,
        U.crossOrigin
      ), ne.d.m(X, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: ce,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : ne.d.m(X));
    }, ja.requestFormReset = function(X) {
      ne.d.r(X);
    }, ja.unstable_batchedUpdates = function(X, U) {
      return X(U);
    }, ja.useFormState = function(X, U, ce) {
      return vt().useFormState(X, U, ce);
    }, ja.useFormStatus = function() {
      return vt().useHostTransitionStatus();
    }, ja.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ja;
}
var wb;
function Jb() {
  if (wb) return Zg.exports;
  wb = 1;
  function k() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (ae) {
        console.error(ae);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (k(), Zg.exports = A3()) : Zg.exports = O3(), Zg.exports;
}
var Xb;
function z3() {
  if (Xb) return vp;
  Xb = 1;
  var k = Zb(), ae = S0(), $e = Jb();
  function N(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ce(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function qe(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function vt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ee(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ne(l) {
    if (qe(l) !== l)
      throw Error(N(188));
  }
  function $(l) {
    var n = l.alternate;
    if (!n) {
      if (n = qe(l), n === null) throw Error(N(188));
      return n !== l ? null : l;
    }
    for (var u = l, i = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (i = s.return, i !== null) {
          u = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ne(s), l;
          if (r === i) return ne(s), n;
          r = r.sibling;
        }
        throw Error(N(188));
      }
      if (u.return !== i.return) u = s, i = r;
      else {
        for (var m = !1, g = s.child; g; ) {
          if (g === u) {
            m = !0, u = s, i = r;
            break;
          }
          if (g === i) {
            m = !0, i = s, u = r;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = r.child; g; ) {
            if (g === u) {
              m = !0, u = r, i = s;
              break;
            }
            if (g === i) {
              m = !0, i = r, u = s;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(N(189));
        }
      }
      if (u.alternate !== i) throw Error(N(190));
    }
    if (u.tag !== 3) throw Error(N(188));
    return u.stateNode.current === u ? l : n;
  }
  function He(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = He(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var X = Object.assign, U = /* @__PURE__ */ Symbol.for("react.element"), ce = /* @__PURE__ */ Symbol.for("react.transitional.element"), Le = /* @__PURE__ */ Symbol.for("react.portal"), _t = /* @__PURE__ */ Symbol.for("react.fragment"), ft = /* @__PURE__ */ Symbol.for("react.strict_mode"), lt = /* @__PURE__ */ Symbol.for("react.profiler"), Tl = /* @__PURE__ */ Symbol.for("react.consumer"), Bt = /* @__PURE__ */ Symbol.for("react.context"), Jt = /* @__PURE__ */ Symbol.for("react.forward_ref"), el = /* @__PURE__ */ Symbol.for("react.suspense"), ul = /* @__PURE__ */ Symbol.for("react.suspense_list"), ze = /* @__PURE__ */ Symbol.for("react.memo"), Ve = /* @__PURE__ */ Symbol.for("react.lazy"), Dt = /* @__PURE__ */ Symbol.for("react.activity"), se = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Yt = Symbol.iterator;
  function ye(l) {
    return l === null || typeof l != "object" ? null : (l = Yt && l[Yt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Qt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === je ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _t:
        return "Fragment";
      case lt:
        return "Profiler";
      case ft:
        return "StrictMode";
      case el:
        return "Suspense";
      case ul:
        return "SuspenseList";
      case Dt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Le:
          return "Portal";
        case Bt:
          return l.displayName || "Context";
        case Tl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Jt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ze:
          return n = l.displayName || null, n !== null ? n : Qt(l.type) || "Memo";
        case Ve:
          n = l._payload, l = l._init;
          try {
            return Qt(l(n));
          } catch {
          }
      }
    return null;
  }
  var jt = Array.isArray, _ = ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], Ae = -1;
  function S(l) {
    return { current: l };
  }
  function B(l) {
    0 > Ae || (l.current = pe[Ae], pe[Ae] = null, Ae--);
  }
  function F(l, n) {
    Ae++, pe[Ae] = l.current, l.current = n;
  }
  var W = S(null), ge = S(null), xe = S(null), Ee = S(null);
  function Lt(l, n) {
    switch (F(xe, n), F(ge, l), F(W, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Hv(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Hv(n), l = sy(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    B(W), F(W, l);
  }
  function ht() {
    B(W), B(ge), B(xe);
  }
  function qa(l) {
    l.memoizedState !== null && F(Ee, l);
    var n = W.current, u = sy(n, l.type);
    n !== u && (F(ge, l), F(W, u));
  }
  function ie(l) {
    ge.current === l && (B(W), B(ge)), Ee.current === l && (B(Ee), zr._currentValue = P);
  }
  var _c, Rc;
  function xa(l) {
    if (_c === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        _c = n && n[1] || "", Rc = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + _c + l + Rc;
  }
  var cu = !1;
  function mt(l, n) {
    if (!l || cu) return "";
    cu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (w) {
                  var j = w;
                }
                Reflect.construct(l, [], J);
              } else {
                try {
                  J.call();
                } catch (w) {
                  j = w;
                }
                l.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                j = w;
              }
              (J = l()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (w) {
            if (w && j && typeof w.stack == "string")
              return [w.stack, j.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = i.DetermineComponentFrameRoot(), m = r[0], g = r[1];
      if (m && g) {
        var A = m.split(`
`), Y = g.split(`
`);
        for (s = i = 0; i < A.length && !A[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < Y.length && !Y[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === A.length || s === Y.length)
          for (i = A.length - 1, s = Y.length - 1; 1 <= i && 0 <= s && A[i] !== Y[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (A[i] !== Y[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || A[i] !== Y[s]) {
                  var Q = `
` + A[i].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      cu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? xa(u) : "";
  }
  function Pl(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return xa(l.type);
      case 16:
        return xa("Lazy");
      case 13:
        return l.child !== n && n !== null ? xa("Suspense Fallback") : xa("Suspense");
      case 19:
        return xa("SuspenseList");
      case 0:
      case 15:
        return mt(l.type, !1);
      case 11:
        return mt(l.type.render, !1);
      case 1:
        return mt(l.type, !0);
      case 31:
        return xa("Activity");
      default:
        return "";
    }
  }
  function gi(l) {
    try {
      var n = "", u = null;
      do
        n += Pl(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var rs = Object.prototype.hasOwnProperty, re = k.unstable_scheduleCallback, Mc = k.unstable_cancelCallback, iu = k.unstable_shouldYield, Si = k.unstable_requestPaint, vl = k.unstable_now, Ir = k.unstable_getCurrentPriorityLevel, Co = k.unstable_ImmediatePriority, Uo = k.unstable_UserBlockingPriority, Cn = k.unstable_NormalPriority, Pr = k.unstable_LowPriority, Ho = k.unstable_IdlePriority, ds = k.log, bi = k.unstable_setDisableYieldValue, rn = null, Al = null;
  function Ga(l) {
    if (typeof ds == "function" && bi(l), Al && typeof Al.setStrictMode == "function")
      try {
        Al.setStrictMode(rn, l);
      } catch {
      }
  }
  var Ul = Math.clz32 ? Math.clz32 : M, Cc = Math.log, v = Math.LN2;
  function M(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Cc(l) / v | 0) | 0;
  }
  var I = 256, te = 262144, de = 4194304;
  function De(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function he(l, n, u) {
    var i = l.pendingLanes;
    if (i === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = i & 134217727;
    return g !== 0 ? (i = g & ~r, i !== 0 ? s = De(i) : (m &= g, m !== 0 ? s = De(m) : u || (u = g & ~l, u !== 0 && (s = De(u))))) : (g = i & ~r, g !== 0 ? s = De(g) : m !== 0 ? s = De(m) : u || (u = i & ~l, u !== 0 && (s = De(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function Pe(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Ge(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ea() {
    var l = de;
    return de <<= 1, (de & 62914560) === 0 && (de = 4194304), l;
  }
  function dn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Uc(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function No(l, n, u, i, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, A = l.expirationTimes, Y = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Q = 31 - Ul(u), J = 1 << Q;
      g[Q] = 0, A[Q] = -1;
      var j = Y[Q];
      if (j !== null)
        for (Y[Q] = null, Q = 0; Q < j.length; Q++) {
          var w = j[Q];
          w !== null && (w.lane &= -536870913);
        }
      u &= ~J;
    }
    i !== 0 && hs(l, i, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function hs(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var i = 31 - Ul(n);
    l.entangledLanes |= n, l.entanglements[i] = l.entanglements[i] | 1073741824 | u & 261930;
  }
  function ou(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var i = 31 - Ul(u), s = 1 << i;
      s & n | l[i] & n && (l[i] |= n), u &= ~s;
    }
  }
  function wa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : ed(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function ed(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function b0(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function td() {
    var l = L.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Dr(l.type));
  }
  function E0(l, n) {
    var u = L.p;
    try {
      return L.p = l, n();
    } finally {
      L.p = u;
    }
  }
  var Un = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + Un, fa = "__reactProps$" + Un, Hc = "__reactContainer$" + Un, ld = "__reactEvents$" + Un, T0 = "__reactListeners$" + Un, bp = "__reactHandles$" + Un, A0 = "__reactResources$" + Un, fu = "__reactMarker$" + Un;
  function ad(l) {
    delete l[Rt], delete l[fa], delete l[ld], delete l[T0], delete l[bp];
  }
  function Ei(l) {
    var n = l[Rt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Hc] || u[Rt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = In(l); l !== null; ) {
            if (u = l[Rt]) return u;
            l = In(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ti(l) {
    if (l = l[Rt] || l[Hc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function Bo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(N(33));
  }
  function Ai(l) {
    var n = l[A0];
    return n || (n = l[A0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Et(l) {
    l[fu] = !0;
  }
  var Oi = /* @__PURE__ */ new Set(), Nc = {};
  function Bc(l, n) {
    su(l, n), su(l + "Capture", n);
  }
  function su(l, n) {
    for (Nc[l] = n, l = 0; l < n.length; l++)
      Oi.add(n[l]);
  }
  var nd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ud = {}, Yo = {};
  function jo(l) {
    return rs.call(Yo, l) ? !0 : rs.call(ud, l) ? !1 : nd.test(l) ? Yo[l] = !0 : (ud[l] = !0, !1);
  }
  function qo(l, n, u) {
    if (jo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function cd(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Iu(l, n, u, i) {
    if (i === null) l.removeAttribute(u);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + i);
    }
  }
  function Xa(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function id(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function O0(l, n, u) {
    var i = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var s = i.get, r = i.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function od(l) {
    if (!l._valueTracker) {
      var n = id(l) ? "checked" : "value";
      l._valueTracker = O0(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function z0(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), i = "";
    return l && (i = id(l) ? l.checked ? "true" : "false" : l.value), l = i, l !== u ? (n.setValue(l), !0) : !1;
  }
  function ms(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Jg = /[\n"\\]/g;
  function Qa(l) {
    return l.replace(
      Jg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ys(l, n, u, i, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Xa(n)) : l.value !== "" + Xa(n) && (l.value = "" + Xa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? zi(l, m, Xa(n)) : u != null ? zi(l, m, Xa(u)) : i != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + Xa(g) : l.removeAttribute("name");
  }
  function ps(l, n, u, i, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        od(l);
        return;
      }
      u = u != null ? "" + Xa(u) : "", n = n != null ? "" + Xa(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, l.checked = g ? l.checked : !!i, l.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), od(l);
  }
  function zi(l, n, u) {
    n === "number" && ms(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function xo(l, n, u, i) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && i && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Xa(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, i && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function D0(l, n, u) {
    if (n != null && (n = "" + Xa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Xa(u) : "";
  }
  function _0(l, n, u, i) {
    if (n == null) {
      if (i != null) {
        if (u != null) throw Error(N(92));
        if (jt(i)) {
          if (1 < i.length) throw Error(N(93));
          i = i[0];
        }
        u = i;
      }
      u == null && (u = ""), n = u;
    }
    u = Xa(n), l.defaultValue = u, i = l.textContent, i === u && i !== "" && i !== null && (l.value = i), od(l);
  }
  function ru(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Ep = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tp(l, n, u) {
    var i = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? i ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : i ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Ep.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Ap(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(N(62));
    if (l = l.style, u != null) {
      for (var i in u)
        !u.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? l.setProperty(i, "") : i === "float" ? l.cssFloat = "" : l[i] = "");
      for (var s in n)
        i = n[s], n.hasOwnProperty(s) && u[s] !== i && Tp(l, s, i);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Tp(l, r, n[r]);
  }
  function R0(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Kg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), vs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hn(l) {
    return vs.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Hn() {
  }
  var fd = null;
  function sd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var du = null, Di = null;
  function gs(l) {
    var n = Ti(l);
    if (n && (l = n.stateNode)) {
      var u = l[fa] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ys(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Qa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var i = u[n];
              if (i !== l && i.form === l.form) {
                var s = i[fa] || null;
                if (!s) throw Error(N(90));
                ys(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              i = u[n], i.form === l.form && z0(i);
          }
          break e;
        case "textarea":
          D0(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && xo(l, !!u.multiple, n, !1);
      }
    }
  }
  var Go = !1;
  function M0(l, n, u) {
    if (Go) return l(n, u);
    Go = !0;
    try {
      var i = l(n);
      return i;
    } finally {
      if (Go = !1, (du !== null || Di !== null) && (Tf(), du && (n = du, l = Di, Di = du = null, gs(n), l)))
        for (n = 0; n < l.length; n++) gs(l[n]);
    }
  }
  function Hl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var i = u[fa] || null;
    if (i === null) return null;
    u = i[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (l = l.type, i = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !i;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        N(231, n, typeof u)
      );
    return u;
  }
  var Pu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ss = !1;
  if (Pu)
    try {
      var wo = {};
      Object.defineProperty(wo, "passive", {
        get: function() {
          Ss = !0;
        }
      }), window.addEventListener("test", wo, wo), window.removeEventListener("test", wo, wo);
    } catch {
      Ss = !1;
    }
  var ec = null, C0 = null, rd = null;
  function U0() {
    if (rd) return rd;
    var l, n = C0, u = n.length, i, s = "value" in ec ? ec.value : ec.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (i = 1; i <= m && n[u - i] === s[r - i]; i++) ;
    return rd = s.slice(l, 1 < i ? 1 - i : void 0);
  }
  function dd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function bs() {
    return !0;
  }
  function Op() {
    return !1;
  }
  function Kl(l) {
    function n(u, i, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? bs : Op, this.isPropagationStopped = Op, this;
    }
    return X(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = bs);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = bs);
      },
      persist: function() {
      },
      isPersistent: bs
    }), n;
  }
  var Yc = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Es = Kl(Yc), Xo = X({}, Yc, { view: 0, detail: 0 }), $g = Kl(Xo), H0, N0, Ts, hd = X({}, Xo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ts && (Ts && l.type === "mousemove" ? (H0 = l.screenX - Ts.screenX, N0 = l.screenY - Ts.screenY) : N0 = H0 = 0, Ts = l), H0);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : N0;
    }
  }), Qo = Kl(hd), zp = X({}, hd, { dataTransfer: 0 }), Dp = Kl(zp), _p = X({}, Xo, { relatedTarget: 0 }), md = Kl(_p), B0 = X({}, Yc, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Rp = Kl(B0), _i = X({}, Yc, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Ri = Kl(_i), Nn = X({}, Yc, { data: 0 }), Mp = Kl(Nn), Y0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, hu = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Cp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Bn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Cp[l]) ? !!n[l] : !1;
  }
  function mn() {
    return Bn;
  }
  var yd = X({}, Xo, {
    key: function(l) {
      if (l.key) {
        var n = Y0[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = dd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? hu[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mn,
    charCode: function(l) {
      return l.type === "keypress" ? dd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? dd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), pd = Kl(yd), j0 = X({}, hd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Yn = Kl(j0), kg = X({}, Xo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mn
  }), Up = Kl(kg), Hp = X({}, Yc, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wg = Kl(Hp), q0 = X({}, hd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fg = Kl(q0), Np = X({}, Yc, {
    newState: 0,
    oldState: 0
  }), x0 = Kl(Np), vd = [9, 13, 27, 32], Lo = Pu && "CompositionEvent" in window, Mi = null;
  Pu && "documentMode" in document && (Mi = document.documentMode);
  var ta = Pu && "TextEvent" in window && !Mi, G0 = Pu && (!Lo || Mi && 8 < Mi && 11 >= Mi), As = " ", jc = !1;
  function gd(l, n) {
    switch (l) {
      case "keyup":
        return vd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function w0(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ci = !1;
  function Bp(l, n) {
    switch (l) {
      case "compositionend":
        return w0(n);
      case "keypress":
        return n.which !== 32 ? null : (jc = !0, As);
      case "textInput":
        return l = n.data, l === As && jc ? null : l;
      default:
        return null;
    }
  }
  function Ig(l, n) {
    if (Ci)
      return l === "compositionend" || !Lo && gd(l, n) ? (l = U0(), rd = C0 = ec = null, Ci = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return G0 && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var X0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function mu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!X0[l.type] : n === "textarea";
  }
  function Q0(l, n, u, i) {
    du ? Di ? Di.push(i) : Di = [i] : du = i, n = Sr(n, "onChange"), 0 < n.length && (u = new Es(
      "onChange",
      "change",
      null,
      u,
      i
    ), l.push({ event: u, listeners: n }));
  }
  var Ui = null, qc = null;
  function Hi(l) {
    Mv(l, 0);
  }
  function Vo(l) {
    var n = Bo(l);
    if (z0(n)) return l;
  }
  function L0(l, n) {
    if (l === "change") return n;
  }
  var Sd = !1;
  if (Pu) {
    var sa;
    if (Pu) {
      var jn = "oninput" in document;
      if (!jn) {
        var V0 = document.createElement("div");
        V0.setAttribute("oninput", "return;"), jn = typeof V0.oninput == "function";
      }
      sa = jn;
    } else sa = !1;
    Sd = sa && (!document.documentMode || 9 < document.documentMode);
  }
  function bd() {
    Ui && (Ui.detachEvent("onpropertychange", Ed), qc = Ui = null);
  }
  function Ed(l) {
    if (l.propertyName === "value" && Vo(qc)) {
      var n = [];
      Q0(
        n,
        qc,
        l,
        sd(l)
      ), M0(Hi, n);
    }
  }
  function Yp(l, n, u) {
    l === "focusin" ? (bd(), Ui = n, qc = u, Ui.attachEvent("onpropertychange", Ed)) : l === "focusout" && bd();
  }
  function jp(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vo(qc);
  }
  function xc(l, n) {
    if (l === "click") return Vo(n);
  }
  function Ni(l, n) {
    if (l === "input" || l === "change")
      return Vo(n);
  }
  function qp(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var la = typeof Object.is == "function" ? Object.is : qp;
  function yn(l, n) {
    if (la(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), i = Object.keys(n);
    if (u.length !== i.length) return !1;
    for (i = 0; i < u.length; i++) {
      var s = u[i];
      if (!rs.call(n, s) || !la(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Z0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function J0(l, n) {
    var u = Z0(l);
    l = 0;
    for (var i; u; ) {
      if (u.nodeType === 3) {
        if (i = l + u.textContent.length, l <= n && i >= n)
          return { node: u, offset: n - l };
        l = i;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Z0(u);
    }
  }
  function Bi(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bi(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Gc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ms(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ms(l.document);
    }
    return n;
  }
  function Os(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var zs = Pu && "documentMode" in document && 11 >= document.documentMode, wc = null, Zo = null, pn = null, qn = !1;
  function Td(l, n, u) {
    var i = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    qn || wc == null || wc !== ms(i) || (i = wc, "selectionStart" in i && Os(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), pn && yn(pn, i) || (pn = i, i = Sr(Zo, "onSelect"), 0 < i.length && (n = new Es(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: i }), n.target = wc)));
  }
  function tc(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var xn = {
    animationend: tc("Animation", "AnimationEnd"),
    animationiteration: tc("Animation", "AnimationIteration"),
    animationstart: tc("Animation", "AnimationStart"),
    transitionrun: tc("Transition", "TransitionRun"),
    transitionstart: tc("Transition", "TransitionStart"),
    transitioncancel: tc("Transition", "TransitionCancel"),
    transitionend: tc("Transition", "TransitionEnd")
  }, Jo = {}, Xc = {};
  Pu && (Xc = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
  function gt(l) {
    if (Jo[l]) return Jo[l];
    if (!xn[l]) return l;
    var n = xn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Xc)
        return Jo[l] = n[u];
    return l;
  }
  var Ds = gt("animationend"), K0 = gt("animationiteration"), Ad = gt("animationstart"), Yi = gt("transitionrun"), _s = gt("transitionstart"), yu = gt("transitioncancel"), xp = gt("transitionend"), pu = /* @__PURE__ */ new Map(), Ko = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ko.push("scrollEnd");
  function ra(l, n) {
    pu.set(l, n), Bc(n, [l]);
  }
  var ji = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Kt = [], Nl = 0, vn = 0;
  function La() {
    for (var l = Nl, n = vn = Nl = 0; n < l; ) {
      var u = Kt[n];
      Kt[n++] = null;
      var i = Kt[n];
      Kt[n++] = null;
      var s = Kt[n];
      Kt[n++] = null;
      var r = Kt[n];
      if (Kt[n++] = null, i !== null && s !== null) {
        var m = i.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), i.pending = s;
      }
      r !== 0 && Od(u, s, r);
    }
  }
  function Va(l, n, u, i) {
    Kt[Nl++] = l, Kt[Nl++] = n, Kt[Nl++] = u, Kt[Nl++] = i, vn |= i, l.lanes |= i, l = l.alternate, l !== null && (l.lanes |= i);
  }
  function gn(l, n, u, i) {
    return Va(l, n, u, i), Rs(l);
  }
  function lc(l, n) {
    return Va(l, null, null, n), Rs(l);
  }
  function Od(l, n, u) {
    l.lanes |= u;
    var i = l.alternate;
    i !== null && (i.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, i = r.alternate, i !== null && (i.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ul(u), l = r.hiddenUpdates, i = l[s], i === null ? l[s] = [n] : i.push(n), n.lane = u | 536870912), r) : null;
  }
  function Rs(l) {
    if (50 < Ef)
      throw Ef = 0, sr = null, Error(N(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var da = {};
  function Gp(l, n, u, i) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function cl(l, n, u, i) {
    return new Gp(l, n, u, i);
  }
  function qi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ac(l, n) {
    var u = l.alternate;
    return u === null ? (u = cl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function $0(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function zd(l, n, u, i, s, r) {
    var m = 0;
    if (i = l, typeof l == "function") qi(l) && (m = 1);
    else if (typeof l == "string")
      m = vy(
        l,
        u,
        W.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Dt:
          return l = cl(31, u, n, s), l.elementType = Dt, l.lanes = r, l;
        case _t:
          return nc(u.children, s, r, n);
        case ft:
          m = 8, s |= 24;
          break;
        case lt:
          return l = cl(12, u, n, s | 2), l.elementType = lt, l.lanes = r, l;
        case el:
          return l = cl(13, u, n, s), l.elementType = el, l.lanes = r, l;
        case ul:
          return l = cl(19, u, n, s), l.elementType = ul, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Bt:
                m = 10;
                break e;
              case Tl:
                m = 9;
                break e;
              case Jt:
                m = 11;
                break e;
              case ze:
                m = 14;
                break e;
              case Ve:
                m = 16, i = null;
                break e;
            }
          m = 29, u = Error(
            N(130, l === null ? "null" : typeof l, "")
          ), i = null;
      }
    return n = cl(m, u, n, s), n.elementType = l, n.type = i, n.lanes = r, n;
  }
  function nc(l, n, u, i) {
    return l = cl(7, l, i, n), l.lanes = u, l;
  }
  function $o(l, n, u) {
    return l = cl(6, l, null, n), l.lanes = u, l;
  }
  function k0(l) {
    var n = cl(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Dd(l, n, u) {
    return n = cl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var W0 = /* @__PURE__ */ new WeakMap();
  function Za(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = W0.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: gi(n)
      }, W0.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: gi(n)
    };
  }
  var Ja = [], xi = 0, Ms = null, rl = 0, Da = [], ha = 0, Gn = null, _a = 1, wn = "";
  function Sn(l, n) {
    Ja[xi++] = rl, Ja[xi++] = Ms, Ms = l, rl = n;
  }
  function F0(l, n, u) {
    Da[ha++] = _a, Da[ha++] = wn, Da[ha++] = Gn, Gn = l;
    var i = _a;
    l = wn;
    var s = 32 - Ul(i) - 1;
    i &= ~(1 << s), u += 1;
    var r = 32 - Ul(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (i & (1 << m) - 1).toString(32), i >>= m, s -= m, _a = 1 << 32 - Ul(n) + s | u << s | i, wn = r + l;
    } else
      _a = 1 << r | u << s | i, wn = l;
  }
  function ko(l) {
    l.return !== null && (Sn(l, 1), F0(l, 1, 0));
  }
  function _d(l) {
    for (; l === Ms; )
      Ms = Ja[--xi], Ja[xi] = null, rl = Ja[--xi], Ja[xi] = null;
    for (; l === Gn; )
      Gn = Da[--ha], Da[ha] = null, wn = Da[--ha], Da[ha] = null, _a = Da[--ha], Da[ha] = null;
  }
  function Cs(l, n) {
    Da[ha++] = _a, Da[ha++] = wn, Da[ha++] = Gn, _a = n.id, wn = n.overflow, Gn = l;
  }
  var Bl = null, qt = null, nt = !1, vu = null, Ol = !1, gu = Error(N(519));
  function bn(l) {
    var n = Error(
      N(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Fo(Za(n, l)), gu;
  }
  function Us(l) {
    var n = l.stateNode, u = l.type, i = l.memoizedProps;
    switch (n[Rt] = l, n[fa] = i, u) {
      case "dialog":
        at("cancel", n), at("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < _f.length; u++)
          at(_f[u], n);
        break;
      case "source":
        at("error", n);
        break;
      case "img":
      case "image":
      case "link":
        at("error", n), at("load", n);
        break;
      case "details":
        at("toggle", n);
        break;
      case "input":
        at("invalid", n), ps(
          n,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        at("invalid", n);
        break;
      case "textarea":
        at("invalid", n), _0(n, i.value, i.defaultValue, i.children);
    }
    u = i.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || i.suppressHydrationWarning === !0 || cy(n.textContent, u) ? (i.popover != null && (at("beforetoggle", n), at("toggle", n)), i.onScroll != null && at("scroll", n), i.onScrollEnd != null && at("scrollend", n), i.onClick != null && (n.onclick = Hn), n = !0) : n = !1, n || bn(l, !0);
  }
  function Wo(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          Ol = !1;
          return;
        case 27:
        case 3:
          Ol = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function Su(l) {
    if (l !== Bl) return !1;
    if (!nt) return Wo(l), nt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Mf(l.type, l.memoizedProps)), u = !u), u && qt && bn(l), Wo(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
      qt = Ch(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
      qt = Ch(l);
    } else
      n === 27 ? (n = qt, Fn(l.type) ? (l = Tr, Tr = null, qt = l) : qt = n) : qt = Bl ? Aa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Qc() {
    qt = Bl = null, nt = !1;
  }
  function I0() {
    var l = vu;
    return l !== null && (al === null ? al = l : al.push.apply(
      al,
      l
    ), vu = null), l;
  }
  function Fo(l) {
    vu === null ? vu = [l] : vu.push(l);
  }
  var Rd = S(null), uc = null, Xn = null;
  function ma(l, n, u) {
    F(Rd, n._currentValue), n._currentValue = u;
  }
  function Qn(l) {
    l._currentValue = Rd.current, B(Rd);
  }
  function Md(l, n, u) {
    for (; l !== null; ) {
      var i = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function bu(l, n, u, i) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (g.context === n[A]) {
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), Md(
                r.return,
                u,
                l
              ), i || (m = null);
              break e;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(N(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Md(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Yl(l, n, u, i) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(N(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          la(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === Ee.current) {
        if (m = s.alternate, m === null) throw Error(N(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(zr) : l = [zr]);
      }
      s = s.return;
    }
    l !== null && bu(
      n,
      l,
      u,
      i
    ), n.flags |= 262144;
  }
  function Gi(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!la(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ne(l) {
    uc = l, Xn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function K(l) {
    return Hs(uc, l);
  }
  function cc(l, n) {
    return uc === null && Ne(l), Hs(l, n);
  }
  function Hs(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Xn === null) {
      if (l === null) throw Error(N(308));
      Xn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Xn = Xn.next = n;
    return u;
  }
  var il = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, i) {
        l.push(i);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, P0 = k.unstable_scheduleCallback, em = k.unstable_NormalPriority, dl = {
    $$typeof: Bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ns() {
    return {
      controller: new il(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Bs(l) {
    l.refCount--, l.refCount === 0 && P0(em, function() {
      l.controller.abort();
    });
  }
  var wi = null, Ys = 0, Lc = 0, gl = null;
  function Tt(l, n) {
    if (wi === null) {
      var u = wi = [];
      Ys = 0, Lc = Th(), gl = {
        status: "pending",
        value: void 0,
        then: function(i) {
          u.push(i);
        }
      };
    }
    return Ys++, n.then(js, js), n;
  }
  function js() {
    if (--Ys === 0 && wi !== null) {
      gl !== null && (gl.status = "fulfilled");
      var l = wi;
      wi = null, Lc = 0, gl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function qs(l, n) {
    var u = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        i.status = "fulfilled", i.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), i;
  }
  var ic = _.S;
  _.S = function(l, n) {
    Km = vl(), typeof n == "object" && n !== null && typeof n.then == "function" && Tt(l, n), ic !== null && ic(l, n);
  };
  var Ka = S(null);
  function $a() {
    var l = Ka.current;
    return l !== null ? l : Ct.pooledCache;
  }
  function Io(l, n) {
    n === null ? F(Ka, Ka.current) : F(Ka, n.pool);
  }
  function Xi() {
    var l = $a();
    return l === null ? null : { parent: dl._currentValue, pool: l };
  }
  var Vc = Error(N(460)), Qi = Error(N(474)), Po = Error(N(542)), Li = { then: function() {
  } };
  function tm(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function lm(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Hn, Hn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Cd(l), l;
      default:
        if (typeof n.status == "string") n.then(Hn, Hn);
        else {
          if (l = Ct, l !== null && 100 < l.shellSuspendCounter)
            throw Error(N(482));
          l = n, l.status = "pending", l.then(
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Cd(l), l;
        }
        throw Jc = n, Vc;
    }
  }
  function Zc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Jc = u, Vc) : u;
    }
  }
  var Jc = null;
  function am() {
    if (Jc === null) throw Error(N(459));
    var l = Jc;
    return Jc = null, l;
  }
  function Cd(l) {
    if (l === Vc || l === Po)
      throw Error(N(483));
  }
  var Kc = null, Vi = 0;
  function xs(l) {
    var n = Vi;
    return Vi += 1, Kc === null && (Kc = []), lm(Kc, l, n);
  }
  function ef(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Gs(l, n) {
    throw n.$$typeof === U ? Error(N(525)) : (l = Object.prototype.toString.call(n), Error(
      N(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function wp(l) {
    function n(C, D) {
      if (l) {
        var H = C.deletions;
        H === null ? (C.deletions = [D], C.flags |= 16) : H.push(D);
      }
    }
    function u(C, D) {
      if (!l) return null;
      for (; D !== null; )
        n(C, D), D = D.sibling;
      return null;
    }
    function i(C) {
      for (var D = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? D.set(C.key, C) : D.set(C.index, C), C = C.sibling;
      return D;
    }
    function s(C, D) {
      return C = ac(C, D), C.index = 0, C.sibling = null, C;
    }
    function r(C, D, H) {
      return C.index = H, l ? (H = C.alternate, H !== null ? (H = H.index, H < D ? (C.flags |= 67108866, D) : H) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function g(C, D, H, Z) {
      return D === null || D.tag !== 6 ? (D = $o(H, C.mode, Z), D.return = C, D) : (D = s(D, H), D.return = C, D);
    }
    function A(C, D, H, Z) {
      var Se = H.type;
      return Se === _t ? Q(
        C,
        D,
        H.props.children,
        Z,
        H.key
      ) : D !== null && (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ve && Zc(Se) === D.type) ? (D = s(D, H.props), ef(D, H), D.return = C, D) : (D = zd(
        H.type,
        H.key,
        H.props,
        null,
        C.mode,
        Z
      ), ef(D, H), D.return = C, D);
    }
    function Y(C, D, H, Z) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== H.containerInfo || D.stateNode.implementation !== H.implementation ? (D = Dd(H, C.mode, Z), D.return = C, D) : (D = s(D, H.children || []), D.return = C, D);
    }
    function Q(C, D, H, Z, Se) {
      return D === null || D.tag !== 7 ? (D = nc(
        H,
        C.mode,
        Z,
        Se
      ), D.return = C, D) : (D = s(D, H), D.return = C, D);
    }
    function J(C, D, H) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = $o(
          "" + D,
          C.mode,
          H
        ), D.return = C, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ce:
            return H = zd(
              D.type,
              D.key,
              D.props,
              null,
              C.mode,
              H
            ), ef(H, D), H.return = C, H;
          case Le:
            return D = Dd(
              D,
              C.mode,
              H
            ), D.return = C, D;
          case Ve:
            return D = Zc(D), J(C, D, H);
        }
        if (jt(D) || ye(D))
          return D = nc(
            D,
            C.mode,
            H,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return J(C, xs(D), H);
        if (D.$$typeof === Bt)
          return J(
            C,
            cc(C, D),
            H
          );
        Gs(C, D);
      }
      return null;
    }
    function j(C, D, H, Z) {
      var Se = D !== null ? D.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return Se !== null ? null : g(C, D, "" + H, Z);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ce:
            return H.key === Se ? A(C, D, H, Z) : null;
          case Le:
            return H.key === Se ? Y(C, D, H, Z) : null;
          case Ve:
            return H = Zc(H), j(C, D, H, Z);
        }
        if (jt(H) || ye(H))
          return Se !== null ? null : Q(C, D, H, Z, null);
        if (typeof H.then == "function")
          return j(
            C,
            D,
            xs(H),
            Z
          );
        if (H.$$typeof === Bt)
          return j(
            C,
            D,
            cc(C, H),
            Z
          );
        Gs(C, H);
      }
      return null;
    }
    function w(C, D, H, Z, Se) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return C = C.get(H) || null, g(D, C, "" + Z, Se);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case ce:
            return C = C.get(
              Z.key === null ? H : Z.key
            ) || null, A(D, C, Z, Se);
          case Le:
            return C = C.get(
              Z.key === null ? H : Z.key
            ) || null, Y(D, C, Z, Se);
          case Ve:
            return Z = Zc(Z), w(
              C,
              D,
              H,
              Z,
              Se
            );
        }
        if (jt(Z) || ye(Z))
          return C = C.get(H) || null, Q(D, C, Z, Se, null);
        if (typeof Z.then == "function")
          return w(
            C,
            D,
            H,
            xs(Z),
            Se
          );
        if (Z.$$typeof === Bt)
          return w(
            C,
            D,
            H,
            cc(D, Z),
            Se
          );
        Gs(D, Z);
      }
      return null;
    }
    function fe(C, D, H, Z) {
      for (var Se = null, rt = null, me = D, we = D = 0, Je = null; me !== null && we < H.length; we++) {
        me.index > we ? (Je = me, me = null) : Je = me.sibling;
        var pt = j(
          C,
          me,
          H[we],
          Z
        );
        if (pt === null) {
          me === null && (me = Je);
          break;
        }
        l && me && pt.alternate === null && n(C, me), D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt, me = Je;
      }
      if (we === H.length)
        return u(C, me), nt && Sn(C, we), Se;
      if (me === null) {
        for (; we < H.length; we++)
          me = J(C, H[we], Z), me !== null && (D = r(
            me,
            D,
            we
          ), rt === null ? Se = me : rt.sibling = me, rt = me);
        return nt && Sn(C, we), Se;
      }
      for (me = i(me); we < H.length; we++)
        Je = w(
          me,
          C,
          we,
          H[we],
          Z
        ), Je !== null && (l && Je.alternate !== null && me.delete(
          Je.key === null ? we : Je.key
        ), D = r(
          Je,
          D,
          we
        ), rt === null ? Se = Je : rt.sibling = Je, rt = Je);
      return l && me.forEach(function(eu) {
        return n(C, eu);
      }), nt && Sn(C, we), Se;
    }
    function Oe(C, D, H, Z) {
      if (H == null) throw Error(N(151));
      for (var Se = null, rt = null, me = D, we = D = 0, Je = null, pt = H.next(); me !== null && !pt.done; we++, pt = H.next()) {
        me.index > we ? (Je = me, me = null) : Je = me.sibling;
        var eu = j(C, me, pt.value, Z);
        if (eu === null) {
          me === null && (me = Je);
          break;
        }
        l && me && eu.alternate === null && n(C, me), D = r(eu, D, we), rt === null ? Se = eu : rt.sibling = eu, rt = eu, me = Je;
      }
      if (pt.done)
        return u(C, me), nt && Sn(C, we), Se;
      if (me === null) {
        for (; !pt.done; we++, pt = H.next())
          pt = J(C, pt.value, Z), pt !== null && (D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt);
        return nt && Sn(C, we), Se;
      }
      for (me = i(me); !pt.done; we++, pt = H.next())
        pt = w(me, C, we, pt.value, Z), pt !== null && (l && pt.alternate !== null && me.delete(pt.key === null ? we : pt.key), D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt);
      return l && me.forEach(function(Vv) {
        return n(C, Vv);
      }), nt && Sn(C, we), Se;
    }
    function Ht(C, D, H, Z) {
      if (typeof H == "object" && H !== null && H.type === _t && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ce:
            e: {
              for (var Se = H.key; D !== null; ) {
                if (D.key === Se) {
                  if (Se = H.type, Se === _t) {
                    if (D.tag === 7) {
                      u(
                        C,
                        D.sibling
                      ), Z = s(
                        D,
                        H.props.children
                      ), Z.return = C, C = Z;
                      break e;
                    }
                  } else if (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ve && Zc(Se) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), Z = s(D, H.props), ef(Z, H), Z.return = C, C = Z;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              H.type === _t ? (Z = nc(
                H.props.children,
                C.mode,
                Z,
                H.key
              ), Z.return = C, C = Z) : (Z = zd(
                H.type,
                H.key,
                H.props,
                null,
                C.mode,
                Z
              ), ef(Z, H), Z.return = C, C = Z);
            }
            return m(C);
          case Le:
            e: {
              for (Se = H.key; D !== null; ) {
                if (D.key === Se)
                  if (D.tag === 4 && D.stateNode.containerInfo === H.containerInfo && D.stateNode.implementation === H.implementation) {
                    u(
                      C,
                      D.sibling
                    ), Z = s(D, H.children || []), Z.return = C, C = Z;
                    break e;
                  } else {
                    u(C, D);
                    break;
                  }
                else n(C, D);
                D = D.sibling;
              }
              Z = Dd(H, C.mode, Z), Z.return = C, C = Z;
            }
            return m(C);
          case Ve:
            return H = Zc(H), Ht(
              C,
              D,
              H,
              Z
            );
        }
        if (jt(H))
          return fe(
            C,
            D,
            H,
            Z
          );
        if (ye(H)) {
          if (Se = ye(H), typeof Se != "function") throw Error(N(150));
          return H = Se.call(H), Oe(
            C,
            D,
            H,
            Z
          );
        }
        if (typeof H.then == "function")
          return Ht(
            C,
            D,
            xs(H),
            Z
          );
        if (H.$$typeof === Bt)
          return Ht(
            C,
            D,
            cc(C, H),
            Z
          );
        Gs(C, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, D !== null && D.tag === 6 ? (u(C, D.sibling), Z = s(D, H), Z.return = C, C = Z) : (u(C, D), Z = $o(H, C.mode, Z), Z.return = C, C = Z), m(C)) : u(C, D);
    }
    return function(C, D, H, Z) {
      try {
        Vi = 0;
        var Se = Ht(
          C,
          D,
          H,
          Z
        );
        return Kc = null, Se;
      } catch (me) {
        if (me === Vc || me === Po) throw me;
        var rt = cl(29, me, null, C.mode);
        return rt.lanes = Z, rt.return = C, rt;
      }
    };
  }
  var $c = wp(!0), nm = wp(!1), oc = !1;
  function ws(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ud(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function fc(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ka(l, n, u) {
    var i = l.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (yt & 2) !== 0) {
      var s = i.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), i.pending = n, n = Rs(l), Od(l, null, u), n;
    }
    return Va(l, i, n, u), Rs(l);
  }
  function kc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, ou(l, u);
    }
  }
  function Hd(l, n) {
    var u = l.updateQueue, i = l.alternate;
    if (i !== null && (i = i.updateQueue, u === i)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var um = !1;
  function Wc() {
    if (um) {
      var l = gl;
      if (l !== null) throw l;
    }
  }
  function Eu(l, n, u, i) {
    um = !1;
    var s = l.updateQueue;
    oc = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var A = g, Y = A.next;
      A.next = null, m === null ? r = Y : m.next = Y, m = A;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, g = Q.lastBaseUpdate, g !== m && (g === null ? Q.firstBaseUpdate = Y : g.next = Y, Q.lastBaseUpdate = A));
    }
    if (r !== null) {
      var J = s.baseState;
      m = 0, Q = Y = A = null, g = r;
      do {
        var j = g.lane & -536870913, w = j !== g.lane;
        if (w ? (et & j) === j : (i & j) === j) {
          j !== 0 && j === Lc && (um = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = l, Oe = g;
            j = n;
            var Ht = u;
            switch (Oe.tag) {
              case 1:
                if (fe = Oe.payload, typeof fe == "function") {
                  J = fe.call(Ht, J, j);
                  break e;
                }
                J = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = Oe.payload, j = typeof fe == "function" ? fe.call(Ht, J, j) : fe, j == null) break e;
                J = X({}, J, j);
                break e;
              case 2:
                oc = !0;
            }
          }
          j = g.callback, j !== null && (l.flags |= 64, w && (l.flags |= 8192), w = s.callbacks, w === null ? s.callbacks = [j] : w.push(j));
        } else
          w = {
            lane: j,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, Q === null ? (Y = Q = w, A = J) : Q = Q.next = w, m |= j;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          w = g, g = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
        }
      } while (!0);
      Q === null && (A = J), s.baseState = A, s.firstBaseUpdate = Y, s.lastBaseUpdate = Q, r === null && (s.shared.lanes = 0), kn |= m, l.lanes = m, l.memoizedState = J;
    }
  }
  function Nd(l, n) {
    if (typeof l != "function")
      throw Error(N(191, l));
    l.call(n);
  }
  function Fc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Nd(u[l], n);
  }
  var zl = S(null), Zi = S(0);
  function Xp(l, n) {
    l = $n, F(Zi, l), F(zl, n), $n = l | n.baseLanes;
  }
  function Xs() {
    F(Zi, $n), F(zl, zl.current);
  }
  function tf() {
    $n = Zi.current, B(zl), B(Zi);
  }
  var ya = S(null), Wa = null;
  function Tu(l) {
    var n = l.alternate;
    F($t, $t.current & 1), F(ya, l), Wa === null && (n === null || zl.current !== null || n.memoizedState !== null) && (Wa = l);
  }
  function lf(l) {
    F($t, $t.current), F(ya, l), Wa === null && (Wa = l);
  }
  function Bd(l) {
    l.tag === 22 ? (F($t, $t.current), F(ya, l), Wa === null && (Wa = l)) : Ln();
  }
  function Ln() {
    F($t, $t.current), F(ya, ya.current);
  }
  function pa(l) {
    B(ya), Wa === l && (Wa = null), B($t);
  }
  var $t = S(0);
  function af(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || On(u) || fi(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Au = 0, Xe = null, At = null, hl = null, Ji = !1, Ki = !1, sc = !1, Qs = 0, nf = 0, Ic = null, Qp = 0;
  function tl() {
    throw Error(N(321));
  }
  function rc(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!la(l[u], n[u])) return !1;
    return !0;
  }
  function Ls(l, n, u, i, s, r) {
    return Au = r, Xe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _.H = l === null || l.memoizedState === null ? Wp : Fd, sc = !1, r = u(i, s), sc = !1, Ki && (r = Lp(
      n,
      u,
      i,
      s
    )), Yd(l), r;
  }
  function Yd(l) {
    _.H = Is;
    var n = At !== null && At.next !== null;
    if (Au = 0, hl = At = Xe = null, Ji = !1, nf = 0, Ic = null, n) throw Error(N(300));
    l === null || ml || (l = l.dependencies, l !== null && Gi(l) && (ml = !0));
  }
  function Lp(l, n, u, i) {
    Xe = l;
    var s = 0;
    do {
      if (Ki && (Ic = null), nf = 0, Ki = !1, 25 <= s) throw Error(N(301));
      if (s += 1, hl = At = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      _.H = Fp, r = n(u, i);
    } while (Ki);
    return r;
  }
  function Pg() {
    var l = _.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? ki(n) : n, l = l.useState()[0], (At !== null ? At.memoizedState : null) !== l && (Xe.flags |= 1024), n;
  }
  function jd() {
    var l = Qs !== 0;
    return Qs = 0, l;
  }
  function $i(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Vs(l) {
    if (Ji) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Ji = !1;
    }
    Au = 0, hl = At = Xe = null, Ki = !1, nf = Qs = 0, Ic = null;
  }
  function jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return hl === null ? Xe.memoizedState = hl = l : hl = hl.next = l, hl;
  }
  function ol() {
    if (At === null) {
      var l = Xe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = At.next;
    var n = hl === null ? Xe.memoizedState : hl.next;
    if (n !== null)
      hl = n, At = l;
    else {
      if (l === null)
        throw Xe.alternate === null ? Error(N(467)) : Error(N(310));
      At = l, l = {
        memoizedState: At.memoizedState,
        baseState: At.baseState,
        baseQueue: At.baseQueue,
        queue: At.queue,
        next: null
      }, hl === null ? Xe.memoizedState = hl = l : hl = hl.next = l;
    }
    return hl;
  }
  function Zs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ki(l) {
    var n = nf;
    return nf += 1, Ic === null && (Ic = []), l = lm(Ic, l, n), n = Xe, (hl === null ? n.memoizedState : hl.next) === null && (n = n.alternate, _.H = n === null || n.memoizedState === null ? Wp : Fd), l;
  }
  function uf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ki(l);
      if (l.$$typeof === Bt) return K(l);
    }
    throw Error(N(438, String(l)));
  }
  function qd(l) {
    var n = null, u = Xe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var i = Xe.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (n = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Zs(), Xe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), i = 0; i < l; i++)
        u[i] = se;
    return n.index++, u;
  }
  function Ou(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function zu(l) {
    var n = ol();
    return xd(n, At, l);
  }
  function xd(l, n, u) {
    var i = l.queue;
    if (i === null) throw Error(N(311));
    i.lastRenderedReducer = u;
    var s = l.baseQueue, r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, i.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var g = m = null, A = null, Y = n, Q = !1;
      do {
        var J = Y.lane & -536870913;
        if (J !== Y.lane ? (et & J) === J : (Au & J) === J) {
          var j = Y.revertLane;
          if (j === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }), J === Lc && (Q = !0);
          else if ((Au & j) === j) {
            Y = Y.next, j === Lc && (Q = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, A === null ? (g = A = J, m = r) : A = A.next = J, Xe.lanes |= j, kn |= j;
          J = Y.action, sc && u(r, J), r = Y.hasEagerState ? Y.eagerState : u(r, J);
        } else
          j = {
            lane: J,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, A === null ? (g = A = j, m = r) : A = A.next = j, Xe.lanes |= J, kn |= J;
        Y = Y.next;
      } while (Y !== null && Y !== n);
      if (A === null ? m = r : A.next = g, !la(r, l.memoizedState) && (ml = !0, Q && (u = gl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, i.lastRenderedState = r;
    }
    return s === null && (i.lanes = 0), [l.memoizedState, i.dispatch];
  }
  function Gd(l) {
    var n = ol(), u = n.queue;
    if (u === null) throw Error(N(311));
    u.lastRenderedReducer = l;
    var i = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      la(r, n.memoizedState) || (ml = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, i];
  }
  function cm(l, n, u) {
    var i = Xe, s = ol(), r = nt;
    if (r) {
      if (u === void 0) throw Error(N(407));
      u = u();
    } else u = n();
    var m = !la(
      (At || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, ml = !0), s = s.queue, Vd(wd.bind(null, i, s, l), [
      l
    ]), s.getSnapshot !== n || m || hl !== null && hl.memoizedState.tag & 1) {
      if (i.flags |= 2048, Fi(
        9,
        { destroy: void 0 },
        im.bind(
          null,
          i,
          s,
          u,
          n
        ),
        null
      ), Ct === null) throw Error(N(349));
      r || (Au & 127) !== 0 || Js(i, n, u);
    }
    return u;
  }
  function Js(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Xe.updateQueue, n === null ? (n = Zs(), Xe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function im(l, n, u, i) {
    n.value = u, n.getSnapshot = i, Xd(n) && Qd(l);
  }
  function wd(l, n, u) {
    return u(function() {
      Xd(n) && Qd(l);
    });
  }
  function Xd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !la(l, u);
    } catch {
      return !0;
    }
  }
  function Qd(l) {
    var n = lc(l, 2);
    n !== null && Ta(n, l, 2);
  }
  function om(l) {
    var n = jl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), sc) {
        Ga(!0);
        try {
          u();
        } finally {
          Ga(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ou,
      lastRenderedState: l
    }, n;
  }
  function ql(l, n, u, i) {
    return l.baseState = u, xd(
      l,
      At,
      typeof i == "function" ? i : Ou
    );
  }
  function Vp(l, n, u, i, s) {
    if (Fs(l)) throw Error(N(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      _.T !== null ? u(!0) : r.isTransition = !1, i(r), u = n.pending, u === null ? (r.next = n.pending = r, fm(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function fm(l, n) {
    var u = n.action, i = n.payload, s = l.state;
    if (n.isTransition) {
      var r = _.T, m = {};
      _.T = m;
      try {
        var g = u(s, i), A = _.S;
        A !== null && A(m, g), sm(l, n, g);
      } catch (Y) {
        Wi(l, n, Y);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), _.T = r;
      }
    } else
      try {
        r = u(s, i), sm(l, n, r);
      } catch (Y) {
        Wi(l, n, Y);
      }
  }
  function sm(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(i) {
        rm(l, n, i);
      },
      function(i) {
        return Wi(l, n, i);
      }
    ) : rm(l, n, u);
  }
  function rm(l, n, u) {
    n.status = "fulfilled", n.value = u, dm(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, fm(l, u)));
  }
  function Wi(l, n, u) {
    var i = l.pending;
    if (l.pending = null, i !== null) {
      i = i.next;
      do
        n.status = "rejected", n.reason = u, dm(n), n = n.next;
      while (n !== i);
    }
    l.action = null;
  }
  function dm(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ks(l, n) {
    return n;
  }
  function hm(l, n) {
    if (nt) {
      var u = Ct.formState;
      if (u !== null) {
        e: {
          var i = Xe;
          if (nt) {
            if (qt) {
              t: {
                for (var s = qt, r = Ol; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Aa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                qt = Aa(
                  s.nextSibling
                ), i = s.data === "F!";
                break e;
              }
            }
            bn(i);
          }
          i = !1;
        }
        i && (n = u[0]);
      }
    }
    return u = jl(), u.memoizedState = u.baseState = n, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ks,
      lastRenderedState: n
    }, u.queue = i, u = kd.bind(
      null,
      Xe,
      i
    ), i.dispatch = u, i = om(!1), r = Pc.bind(
      null,
      Xe,
      !1,
      i.queue
    ), i = jl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, i.queue = s, u = Vp.bind(
      null,
      Xe,
      s,
      r,
      u
    ), s.dispatch = u, i.memoizedState = l, [n, u, !1];
  }
  function Zp(l) {
    var n = ol();
    return $s(n, At, l);
  }
  function $s(l, n, u) {
    if (n = xd(
      l,
      n,
      Ks
    )[0], l = zu(Ou)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var i = ki(n);
      } catch (m) {
        throw m === Vc ? Po : m;
      }
    else i = n;
    n = ol();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Xe.flags |= 2048, Fi(
      9,
      { destroy: void 0 },
      mm.bind(null, s, u),
      null
    )), [i, r, l];
  }
  function mm(l, n) {
    l.action = n;
  }
  function ym(l) {
    var n = ol(), u = At;
    if (u !== null)
      return $s(n, u, l);
    ol(), n = n.memoizedState, u = ol();
    var i = u.queue.dispatch;
    return u.memoizedState = l, [n, i, !1];
  }
  function Fi(l, n, u, i) {
    return l = { tag: l, create: u, deps: i, inst: n, next: null }, n = Xe.updateQueue, n === null && (n = Zs(), Xe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (i = u.next, u.next = l, l.next = i, n.lastEffect = l), l;
  }
  function pm() {
    return ol().memoizedState;
  }
  function cf(l, n, u, i) {
    var s = jl();
    Xe.flags |= l, s.memoizedState = Fi(
      1 | n,
      { destroy: void 0 },
      u,
      i === void 0 ? null : i
    );
  }
  function of(l, n, u, i) {
    var s = ol();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    At !== null && i !== null && rc(i, At.memoizedState.deps) ? s.memoizedState = Fi(n, r, u, i) : (Xe.flags |= l, s.memoizedState = Fi(
      1 | n,
      r,
      u,
      i
    ));
  }
  function Ld(l, n) {
    cf(8390656, 8, l, n);
  }
  function Vd(l, n) {
    of(2048, 8, l, n);
  }
  function vm(l) {
    Xe.flags |= 4;
    var n = Xe.updateQueue;
    if (n === null)
      n = Zs(), Xe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function ks(l) {
    var n = ol().memoizedState;
    return vm({ ref: n, nextImpl: l }), function() {
      if ((yt & 2) !== 0) throw Error(N(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Zd(l, n) {
    return of(4, 2, l, n);
  }
  function gm(l, n) {
    return of(4, 4, l, n);
  }
  function Jd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Sm(l, n, u) {
    u = u != null ? u.concat([l]) : null, of(4, 4, Jd.bind(null, n, l), u);
  }
  function Vn() {
  }
  function Kd(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    return n !== null && rc(n, i[1]) ? i[0] : (u.memoizedState = [l, n], l);
  }
  function Jp(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    if (n !== null && rc(n, i[1]))
      return i[0];
    if (i = l(), sc) {
      Ga(!0);
      try {
        l();
      } finally {
        Ga(!1);
      }
    }
    return u.memoizedState = [i, n], i;
  }
  function Ws(l, n, u) {
    return u === void 0 || (Au & 1073741824) !== 0 && (et & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = iv(), Xe.lanes |= l, kn |= l, u);
  }
  function Du(l, n, u, i) {
    return la(u, n) ? u : zl.current !== null ? (l = Ws(l, u, i), la(l, n) || (ml = !0), l) : (Au & 42) === 0 || (Au & 1073741824) !== 0 && (et & 261930) === 0 ? (ml = !0, l.memoizedState = u) : (l = iv(), Xe.lanes |= l, kn |= l, n);
  }
  function $d(l, n, u, i, s) {
    var r = L.p;
    L.p = r !== 0 && 8 > r ? r : 8;
    var m = _.T, g = {};
    _.T = g, Pc(l, !1, n, u);
    try {
      var A = s(), Y = _.S;
      if (Y !== null && Y(g, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var Q = qs(
          A,
          i
        );
        dc(
          l,
          n,
          Q,
          Ua(l)
        );
      } else
        dc(
          l,
          n,
          i,
          Ua(l)
        );
    } catch (J) {
      dc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: J },
        Ua()
      );
    } finally {
      L.p = r, m !== null && g.types !== null && (m.types = g.types), _.T = m;
    }
  }
  function Kp() {
  }
  function ff(l, n, u, i) {
    if (l.tag !== 5) throw Error(N(476));
    var s = sf(l).queue;
    $d(
      l,
      s,
      n,
      P,
      u === null ? Kp : function() {
        return Mt(l), u(i);
      }
    );
  }
  function sf(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ou,
        lastRenderedState: P
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ou,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Mt(l) {
    var n = sf(l);
    n.next === null && (n = l.alternate.memoizedState), dc(
      l,
      n.next.queue,
      {},
      Ua()
    );
  }
  function bm() {
    return K(zr);
  }
  function $p() {
    return ol().memoizedState;
  }
  function Em() {
    return ol().memoizedState;
  }
  function _u(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ua();
          l = fc(u);
          var i = ka(n, l, u);
          i !== null && (Ta(i, n, u), kc(i, n, u)), n = { cache: Ns() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function kp(l, n, u) {
    var i = Ua();
    u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fs(l) ? Wd(n, u) : (u = gn(l, n, u, i), u !== null && (Ta(u, l, i), Tm(u, n, i)));
  }
  function kd(l, n, u) {
    var i = Ua();
    dc(l, n, u, i);
  }
  function dc(l, n, u, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fs(l)) Wd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, la(g, m))
            return Va(l, n, s, 0), Ct === null && La(), !1;
        } catch {
        }
      if (u = gn(l, n, s, i), u !== null)
        return Ta(u, l, i), Tm(u, n, i), !0;
    }
    return !1;
  }
  function Pc(l, n, u, i) {
    if (i = {
      lane: 2,
      revertLane: Th(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fs(l)) {
      if (n) throw Error(N(479));
    } else
      n = gn(
        l,
        u,
        i,
        2
      ), n !== null && Ta(n, l, 2);
  }
  function Fs(l) {
    var n = l.alternate;
    return l === Xe || n !== null && n === Xe;
  }
  function Wd(l, n) {
    Ki = Ji = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Tm(l, n, u) {
    if ((u & 4194048) !== 0) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, ou(l, u);
    }
  }
  var Is = {
    readContext: K,
    use: uf,
    useCallback: tl,
    useContext: tl,
    useEffect: tl,
    useImperativeHandle: tl,
    useLayoutEffect: tl,
    useInsertionEffect: tl,
    useMemo: tl,
    useReducer: tl,
    useRef: tl,
    useState: tl,
    useDebugValue: tl,
    useDeferredValue: tl,
    useTransition: tl,
    useSyncExternalStore: tl,
    useId: tl,
    useHostTransitionStatus: tl,
    useFormState: tl,
    useActionState: tl,
    useOptimistic: tl,
    useMemoCache: tl,
    useCacheRefresh: tl
  };
  Is.useEffectEvent = tl;
  var Wp = {
    readContext: K,
    use: uf,
    useCallback: function(l, n) {
      return jl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: K,
    useEffect: Ld,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, cf(
        4194308,
        4,
        Jd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return cf(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      cf(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = jl();
      n = n === void 0 ? null : n;
      var i = l();
      if (sc) {
        Ga(!0);
        try {
          l();
        } finally {
          Ga(!1);
        }
      }
      return u.memoizedState = [i, n], i;
    },
    useReducer: function(l, n, u) {
      var i = jl();
      if (u !== void 0) {
        var s = u(n);
        if (sc) {
          Ga(!0);
          try {
            u(n);
          } finally {
            Ga(!1);
          }
        }
      } else s = n;
      return i.memoizedState = i.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, i.queue = l, l = l.dispatch = kp.bind(
        null,
        Xe,
        l
      ), [i.memoizedState, l];
    },
    useRef: function(l) {
      var n = jl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = om(l);
      var n = l.queue, u = kd.bind(null, Xe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = jl();
      return Ws(u, l, n);
    },
    useTransition: function() {
      var l = om(!1);
      return l = $d.bind(
        null,
        Xe,
        l.queue,
        !0,
        !1
      ), jl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var i = Xe, s = jl();
      if (nt) {
        if (u === void 0)
          throw Error(N(407));
        u = u();
      } else {
        if (u = n(), Ct === null)
          throw Error(N(349));
        (et & 127) !== 0 || Js(i, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Ld(wd.bind(null, i, r, l), [
        l
      ]), i.flags |= 2048, Fi(
        9,
        { destroy: void 0 },
        im.bind(
          null,
          i,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = jl(), n = Ct.identifierPrefix;
      if (nt) {
        var u = wn, i = _a;
        u = (i & ~(1 << 32 - Ul(i) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Qs++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Qp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: bm,
    useFormState: hm,
    useActionState: hm,
    useOptimistic: function(l) {
      var n = jl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Pc.bind(
        null,
        Xe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: qd,
    useCacheRefresh: function() {
      return jl().memoizedState = _u.bind(
        null,
        Xe
      );
    },
    useEffectEvent: function(l) {
      var n = jl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((yt & 2) !== 0)
          throw Error(N(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Fd = {
    readContext: K,
    use: uf,
    useCallback: Kd,
    useContext: K,
    useEffect: Vd,
    useImperativeHandle: Sm,
    useInsertionEffect: Zd,
    useLayoutEffect: gm,
    useMemo: Jp,
    useReducer: zu,
    useRef: pm,
    useState: function() {
      return zu(Ou);
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = ol();
      return Du(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = zu(Ou)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : ki(l),
        n
      ];
    },
    useSyncExternalStore: cm,
    useId: $p,
    useHostTransitionStatus: bm,
    useFormState: Zp,
    useActionState: Zp,
    useOptimistic: function(l, n) {
      var u = ol();
      return ql(u, At, l, n);
    },
    useMemoCache: qd,
    useCacheRefresh: Em
  };
  Fd.useEffectEvent = ks;
  var Fp = {
    readContext: K,
    use: uf,
    useCallback: Kd,
    useContext: K,
    useEffect: Vd,
    useImperativeHandle: Sm,
    useInsertionEffect: Zd,
    useLayoutEffect: gm,
    useMemo: Jp,
    useReducer: Gd,
    useRef: pm,
    useState: function() {
      return Gd(Ou);
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = ol();
      return At === null ? Ws(u, l, n) : Du(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Gd(Ou)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : ki(l),
        n
      ];
    },
    useSyncExternalStore: cm,
    useId: $p,
    useHostTransitionStatus: bm,
    useFormState: ym,
    useActionState: ym,
    useOptimistic: function(l, n) {
      var u = ol();
      return At !== null ? ql(u, At, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: qd,
    useCacheRefresh: Em
  };
  Fp.useEffectEvent = ks;
  function Ii(l, n, u, i) {
    n = l.memoizedState, u = u(i, n), u = u == null ? n : X({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var En = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var i = Ua(), s = fc(i);
      s.payload = n, u != null && (s.callback = u), n = ka(l, s, i), n !== null && (Ta(n, l, i), kc(n, l, i));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var i = Ua(), s = fc(i);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = ka(l, s, i), n !== null && (Ta(n, l, i), kc(n, l, i));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ua(), i = fc(u);
      i.tag = 2, n != null && (i.callback = n), n = ka(l, i, u), n !== null && (Ta(n, l, u), kc(n, l, u));
    }
  };
  function Am(l, n, u, i, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(i, r, m) : n.prototype && n.prototype.isPureReactComponent ? !yn(u, i) || !yn(s, r) : !0;
  }
  function Ip(l, n, u, i) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, i), n.state !== l && En.enqueueReplaceState(n, n.state, null);
  }
  function ei(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var i in n)
        i !== "ref" && (u[i] = n[i]);
    }
    if (l = l.defaultProps) {
      u === n && (u = X({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Id(l) {
    ji(l);
  }
  function Om(l) {
    console.error(l);
  }
  function Pd(l) {
    ji(l);
  }
  function rf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Ps(l, n, u) {
    try {
      var i = l.onCaughtError;
      i(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function zm(l, n, u) {
    return u = fc(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      rf(l, n);
    }, u;
  }
  function Dm(l) {
    return l = fc(l), l.tag = 3, l;
  }
  function _m(l, n, u, i) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Ps(n, u, i);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Ps(n, u, i), typeof s != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
      var g = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function e1(l, n, u, i, s) {
    if (u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (n = u.alternate, n !== null && Yl(
        n,
        u,
        s,
        !0
      ), u = ya.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Wa === null ? gh() : u.alternate === null && Gt === 0 && (Gt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, i === Li ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([i]) : n.add(i), hr(l, i, s)), !1;
          case 22:
            return u.flags |= 65536, i === Li ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([i]) : u.add(i)), hr(l, i, s)), !1;
        }
        throw Error(N(435, u.tag));
      }
      return hr(l, i, s), gh(), !1;
    }
    if (nt)
      return n = ya.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, i !== gu && (l = Error(N(422), { cause: i }), Fo(Za(l, u)))) : (i !== gu && (n = Error(N(423), {
        cause: i
      }), Fo(
        Za(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, i = Za(i, u), s = zm(
        l.stateNode,
        i,
        s
      ), Hd(l, s), Gt !== 4 && (Gt = 2)), !1;
    var r = Error(N(520), { cause: i });
    if (r = Za(r, u), fr === null ? fr = [r] : fr.push(r), Gt !== 4 && (Gt = 2), n === null) return !0;
    i = Za(i, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = zm(u.stateNode, i, l), Hd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Dm(s), _m(
              s,
              l,
              u,
              i
            ), Hd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var eh = Error(N(461)), ml = !1;
  function Vt(l, n, u, i) {
    n.child = l === null ? nm(n, null, u, i) : $c(
      n,
      l.child,
      u,
      i
    );
  }
  function Rm(l, n, u, i, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in i) {
      var m = {};
      for (var g in i)
        g !== "ref" && (m[g] = i[g]);
    } else m = i;
    return Ne(n), i = Ls(
      l,
      n,
      u,
      m,
      r,
      s
    ), g = jd(), l !== null && !ml ? ($i(l, n, s), Pa(l, n, s)) : (nt && g && ko(n), n.flags |= 1, Vt(l, n, i, s), n.child);
  }
  function Mm(l, n, u, i, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !qi(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Cm(
        l,
        n,
        r,
        i,
        s
      )) : (l = zd(
        u.type,
        null,
        i,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !ah(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : yn, u(m, i) && l.ref === n.ref)
        return Pa(l, n, s);
    }
    return n.flags |= 1, l = ac(r, i), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Cm(l, n, u, i, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (yn(r, i) && l.ref === n.ref)
        if (ml = !1, n.pendingProps = i = r, ah(l, s))
          (l.flags & 131072) !== 0 && (ml = !0);
        else
          return n.lanes = l.lanes, Pa(l, n, s);
    }
    return th(
      l,
      n,
      u,
      i,
      s
    );
  }
  function Pp(l, n, u, i) {
    var s = i.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (i = n.child = l.child, s = 0; i !== null; )
            s = s | i.lanes | i.childLanes, i = i.sibling;
          i = s & ~r;
        } else i = 0, n.child = null;
        return va(
          l,
          n,
          r,
          u,
          i
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Io(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Xp(n, r) : Xs(), Bd(n);
      else
        return i = n.lanes = 536870912, va(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          i
        );
    } else
      r !== null ? (Io(n, r.cachePool), Xp(n, r), Ln(), n.memoizedState = null) : (l !== null && Io(n, null), Xs(), Ln());
    return Vt(l, n, s, u), n.child;
  }
  function ti(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function va(l, n, u, i, s) {
    var r = $a();
    return r = r === null ? null : { parent: dl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Io(n, null), Xs(), Bd(n), l !== null && Yl(l, n, i, !0), n.childLanes = s, null;
  }
  function er(l, n) {
    return n = ar(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function ga(l, n, u) {
    return $c(n, l.child, null, u), l = er(n, n.pendingProps), l.flags |= 2, pa(n), n.memoizedState = null, l;
  }
  function ev(l, n, u) {
    var i = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (nt) {
        if (i.mode === "hidden")
          return l = er(n, i), n.lanes = 536870912, ti(null, l);
        if (lf(n), (l = qt) ? (l = Yv(
          l,
          Ol
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: _a, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = k0(l), u.return = n, n.child = u, Bl = n, qt = null)) : l = null, l === null) throw bn(n);
        return n.lanes = 536870912, null;
      }
      return er(n, i);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (lf(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = ga(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(N(558));
      else if (ml || Yl(l, n, u, !1), s = (u & l.childLanes) !== 0, ml || s) {
        if (i = Ct, i !== null && (m = wa(i, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, lc(l, m), Ta(i, l, m), eh;
        gh(), n = ga(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, qt = Aa(m.nextSibling), Bl = n, nt = !0, vu = null, Ol = !1, l !== null && Cs(n, l), n = er(n, i), n.flags |= 4096;
      return n;
    }
    return l = ac(l.child, {
      mode: i.mode,
      children: i.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Fa(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(N(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function th(l, n, u, i, s) {
    return Ne(n), u = Ls(
      l,
      n,
      u,
      i,
      void 0,
      s
    ), i = jd(), l !== null && !ml ? ($i(l, n, s), Pa(l, n, s)) : (nt && i && ko(n), n.flags |= 1, Vt(l, n, u, s), n.child);
  }
  function li(l, n, u, i, s, r) {
    return Ne(n), n.updateQueue = null, u = Lp(
      n,
      i,
      u,
      s
    ), Yd(l), i = jd(), l !== null && !ml ? ($i(l, n, r), Pa(l, n, r)) : (nt && i && ko(n), n.flags |= 1, Vt(l, n, u, r), n.child);
  }
  function Um(l, n, u, i, s) {
    if (Ne(n), n.stateNode === null) {
      var r = da, m = u.contextType;
      typeof m == "object" && m !== null && (r = K(m)), r = new u(i, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = En, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = i, r.state = n.memoizedState, r.refs = {}, ws(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? K(m) : da, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Ii(
        n,
        u,
        m,
        i
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && En.enqueueReplaceState(r, r.state, null), Eu(n, i, r, s), Wc(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, A = ei(u, g);
      r.props = A;
      var Y = r.context, Q = u.contextType;
      m = da, typeof Q == "object" && Q !== null && (m = K(Q));
      var J = u.getDerivedStateFromProps;
      Q = typeof J == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, Q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || Y !== m) && Ip(
        n,
        r,
        i,
        m
      ), oc = !1;
      var j = n.memoizedState;
      r.state = j, Eu(n, i, r, s), Wc(), Y = n.memoizedState, g || j !== Y || oc ? (typeof J == "function" && (Ii(
        n,
        u,
        J,
        i
      ), Y = n.memoizedState), (A = oc || Am(
        n,
        u,
        A,
        i,
        j,
        Y,
        m
      )) ? (Q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = Y), r.props = i, r.state = Y, r.context = m, i = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      r = n.stateNode, Ud(l, n), m = n.memoizedProps, Q = ei(u, m), r.props = Q, J = n.pendingProps, j = r.context, Y = u.contextType, A = da, typeof Y == "object" && Y !== null && (A = K(Y)), g = u.getDerivedStateFromProps, (Y = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== J || j !== A) && Ip(
        n,
        r,
        i,
        A
      ), oc = !1, j = n.memoizedState, r.state = j, Eu(n, i, r, s), Wc();
      var w = n.memoizedState;
      m !== J || j !== w || oc || l !== null && l.dependencies !== null && Gi(l.dependencies) ? (typeof g == "function" && (Ii(
        n,
        u,
        g,
        i
      ), w = n.memoizedState), (Q = oc || Am(
        n,
        u,
        Q,
        i,
        j,
        w,
        A
      ) || l !== null && l.dependencies !== null && Gi(l.dependencies)) ? (Y || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, w, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        i,
        w,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = w), r.props = i, r.state = w, r.context = A, i = Q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), i = !1);
    }
    return r = i, Fa(l, n), i = (n.flags & 128) !== 0, r || i ? (r = n.stateNode, u = i && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && i ? (n.child = $c(
      n,
      l.child,
      null,
      s
    ), n.child = $c(
      n,
      null,
      u,
      s
    )) : Vt(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Pa(
      l,
      n,
      s
    ), l;
  }
  function Zn(l, n, u, i) {
    return Qc(), n.flags |= 256, Vt(l, n, u, i), n.child;
  }
  var tr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function lr(l) {
    return { baseLanes: l, cachePool: Xi() };
  }
  function Ia(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ea), l;
  }
  function Hm(l, n, u) {
    var i = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : ($t.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (nt) {
        if (s ? Tu(n) : Ln(), (l = qt) ? (l = Yv(
          l,
          Ol
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: _a, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = k0(l), u.return = n, n.child = u, Bl = n, qt = null)) : l = null, l === null) throw bn(n);
        return fi(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = i.children;
      return i = i.fallback, s ? (Ln(), s = n.mode, g = ar(
        { mode: "hidden", children: g },
        s
      ), i = nc(
        i,
        s,
        u,
        null
      ), g.return = n, i.return = n, g.sibling = i, n.child = g, i = n.child, i.memoizedState = lr(u), i.childLanes = Ia(
        l,
        m,
        u
      ), n.memoizedState = tr, ti(null, i)) : (Tu(n), ai(n, g));
    }
    var A = l.memoizedState;
    if (A !== null && (g = A.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (Tu(n), n.flags &= -257, n = Pi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Ln(), n.child = l.child, n.flags |= 128, n = null) : (Ln(), g = i.fallback, s = n.mode, i = ar(
          { mode: "visible", children: i.children },
          s
        ), g = nc(
          g,
          s,
          u,
          null
        ), g.flags |= 2, i.return = n, g.return = n, i.sibling = g, n.child = i, $c(
          n,
          l.child,
          null,
          u
        ), i = n.child, i.memoizedState = lr(u), i.childLanes = Ia(
          l,
          m,
          u
        ), n.memoizedState = tr, n = ti(null, i));
      else if (Tu(n), fi(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var Y = m.dgst;
        m = Y, i = Error(N(419)), i.stack = "", i.digest = m, Fo({ value: i, source: null, stack: null }), n = Pi(
          l,
          n,
          u
        );
      } else if (ml || Yl(l, n, u, !1), m = (u & l.childLanes) !== 0, ml || m) {
        if (m = Ct, m !== null && (i = wa(m, u), i !== 0 && i !== A.retryLane))
          throw A.retryLane = i, lc(l, i), Ta(m, l, i), eh;
        On(g) || gh(), n = Pi(
          l,
          n,
          u
        );
      } else
        On(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, qt = Aa(
          g.nextSibling
        ), Bl = n, nt = !0, vu = null, Ol = !1, l !== null && Cs(n, l), n = ai(
          n,
          i.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Ln(), g = i.fallback, s = n.mode, A = l.child, Y = A.sibling, i = ac(A, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = A.subtreeFlags & 65011712, Y !== null ? g = ac(
      Y,
      g
    ) : (g = nc(
      g,
      s,
      u,
      null
    ), g.flags |= 2), g.return = n, i.return = n, i.sibling = g, n.child = i, ti(null, i), i = n.child, g = l.child.memoizedState, g === null ? g = lr(u) : (s = g.cachePool, s !== null ? (A = dl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = Xi(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: s
    }), i.memoizedState = g, i.childLanes = Ia(
      l,
      m,
      u
    ), n.memoizedState = tr, ti(l.child, i)) : (Tu(n), u = l.child, l = u.sibling, u = ac(u, {
      mode: "visible",
      children: i.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function ai(l, n) {
    return n = ar(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function ar(l, n) {
    return l = cl(22, l, null, n), l.lanes = 0, l;
  }
  function Pi(l, n, u) {
    return $c(n, l.child, null, u), l = ai(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function eo(l, n, u) {
    l.lanes |= n;
    var i = l.alternate;
    i !== null && (i.lanes |= n), Md(l.return, n, u);
  }
  function lh(l, n, u, i, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = i, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function Nm(l, n, u) {
    var i = n.pendingProps, s = i.revealOrder, r = i.tail;
    i = i.children;
    var m = $t.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, F($t, m), Vt(l, n, i, u), i = nt ? rl : 0, !g && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && eo(l, u, n);
        else if (l.tag === 19)
          eo(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && af(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), lh(
          n,
          !1,
          s,
          u,
          r,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && af(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        lh(
          n,
          !0,
          u,
          null,
          r,
          i
        );
        break;
      case "together":
        lh(
          n,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Pa(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), kn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Yl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(N(153));
    if (n.child !== null) {
      for (l = n.child, u = ac(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ac(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function ah(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Gi(l)));
  }
  function nh(l, n, u) {
    switch (n.tag) {
      case 3:
        Lt(n, n.stateNode.containerInfo), ma(n, dl, l.memoizedState.cache), Qc();
        break;
      case 27:
      case 5:
        qa(n);
        break;
      case 4:
        Lt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ma(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, lf(n), null;
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Tu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Hm(l, n, u) : (Tu(n), l = Pa(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Tu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (i = (u & n.childLanes) !== 0, i || (Yl(
          l,
          n,
          u,
          !1
        ), i = (u & n.childLanes) !== 0), s) {
          if (i)
            return Nm(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), F($t, $t.current), i) break;
        return null;
      case 22:
        return n.lanes = 0, Pp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        ma(n, dl, l.memoizedState.cache);
    }
    return Pa(l, n, u);
  }
  function Bm(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ml = !0;
      else {
        if (!ah(l, u) && (n.flags & 128) === 0)
          return ml = !1, nh(
            l,
            n,
            u
          );
        ml = (l.flags & 131072) !== 0;
      }
    else
      ml = !1, nt && (n.flags & 1048576) !== 0 && F0(n, rl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var i = n.pendingProps;
          if (l = Zc(n.elementType), n.type = l, typeof l == "function")
            qi(l) ? (i = ei(l, i), n.tag = 1, n = Um(
              null,
              n,
              l,
              i,
              u
            )) : (n.tag = 0, n = th(
              null,
              n,
              l,
              i,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Jt) {
                n.tag = 11, n = Rm(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break e;
              } else if (s === ze) {
                n.tag = 14, n = Mm(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break e;
              }
            }
            throw n = Qt(l) || l, Error(N(306, n, ""));
          }
        }
        return n;
      case 0:
        return th(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return i = n.type, s = ei(
          i,
          n.pendingProps
        ), Um(
          l,
          n,
          i,
          s,
          u
        );
      case 3:
        e: {
          if (Lt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(N(387));
          i = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Ud(l, n), Eu(n, i, null, u);
          var m = n.memoizedState;
          if (i = m.cache, ma(n, dl, i), i !== r.cache && bu(
            n,
            [dl],
            u,
            !0
          ), Wc(), i = m.element, r.isDehydrated)
            if (r = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Zn(
                l,
                n,
                i,
                u
              );
              break e;
            } else if (i !== s) {
              s = Za(
                Error(N(424)),
                n
              ), Fo(s), n = Zn(
                l,
                n,
                i,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, qt = Aa(l.firstChild), Bl = n, nt = !0, vu = null, Ol = !0, u = nm(
                n,
                null,
                i,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Qc(), i === s) {
              n = Pa(
                l,
                n,
                u
              );
              break e;
            }
            Vt(l, n, i, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Fa(l, n), l === null ? (u = Nf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : nt || (u = n.type, l = n.pendingProps, i = oi(
          xe.current
        ).createElement(u), i[Rt] = n, i[fa] = l, $l(i, u, l), Et(i), n.stateNode = i) : n.memoizedState = Nf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qa(n), l === null && nt && (i = n.stateNode = Uf(
          n.type,
          n.pendingProps,
          xe.current
        ), Bl = n, Ol = !0, s = qt, Fn(n.type) ? (Tr = s, qt = Aa(i.firstChild)) : qt = s), Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), Fa(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && nt && ((s = i = qt) && (i = a1(
          i,
          n.type,
          n.pendingProps,
          Ol
        ), i !== null ? (n.stateNode = i, Bl = n, qt = Aa(i.firstChild), Ol = !1, s = !0) : s = !1), s || bn(n)), qa(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, i = r.children, Mf(s, r) ? i = null : m !== null && Mf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ls(
          l,
          n,
          Pg,
          null,
          null,
          u
        ), zr._currentValue = s), Fa(l, n), Vt(l, n, i, u), n.child;
      case 6:
        return l === null && nt && ((l = u = qt) && (u = ke(
          u,
          n.pendingProps,
          Ol
        ), u !== null ? (n.stateNode = u, Bl = n, qt = null, l = !0) : l = !1), l || bn(n)), null;
      case 13:
        return Hm(l, n, u);
      case 4:
        return Lt(
          n,
          n.stateNode.containerInfo
        ), i = n.pendingProps, l === null ? n.child = $c(
          n,
          null,
          i,
          u
        ) : Vt(l, n, i, u), n.child;
      case 11:
        return Rm(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Vt(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return i = n.pendingProps, ma(n, n.type, i.value), Vt(l, n, i.children, u), n.child;
      case 9:
        return s = n.type._context, i = n.pendingProps.children, Ne(n), s = K(s), i = i(s), n.flags |= 1, Vt(l, n, i, u), n.child;
      case 14:
        return Mm(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Cm(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Nm(l, n, u);
      case 31:
        return ev(l, n, u);
      case 22:
        return Pp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return Ne(n), i = K(dl), l === null ? (s = $a(), s === null && (s = Ct, r = Ns(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: i, cache: s }, ws(n), ma(n, dl, s)) : ((l.lanes & u) !== 0 && (Ud(l, n), Eu(n, null, null, u), Wc()), s = l.memoizedState, r = n.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), ma(n, dl, i)) : (i = r.cache, ma(n, dl, i), i !== s.cache && bu(
          n,
          [dl],
          u,
          !0
        ))), Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(N(156, n.tag));
  }
  function Ru(l) {
    l.flags |= 4;
  }
  function Ym(l, n, u, i, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (sv()) l.flags |= 8192;
        else
          throw Jc = Li, Qi;
    } else l.flags &= -16777217;
  }
  function jm(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Na(n))
      if (sv()) l.flags |= 8192;
      else
        throw Jc = Li, Qi;
  }
  function aa(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ea() : 536870912, l.lanes |= n, ll |= n);
  }
  function df(l, n) {
    if (!nt)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var i = null; u !== null; )
            u.alternate !== null && (i = u), u = u.sibling;
          i === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : i.sibling = null;
      }
  }
  function Ue(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, i = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= i, l.childLanes = u, n;
  }
  function tv(l, n, u) {
    var i = n.pendingProps;
    switch (_d(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(n), null;
      case 1:
        return Ue(n), null;
      case 3:
        return u = n.stateNode, i = null, l !== null && (i = l.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), Qn(dl), ht(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Su(n) ? Ru(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, I0())), Ue(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (Ru(n), r !== null ? (Ue(n), jm(n, r)) : (Ue(n), Ym(
          n,
          s,
          null,
          i,
          u
        ))) : r ? r !== l.memoizedState ? (Ru(n), Ue(n), jm(n, r)) : (Ue(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== i && Ru(n), Ue(n), Ym(
          n,
          s,
          l,
          i,
          u
        )), null;
      case 27:
        if (ie(n), u = xe.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && Ru(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(N(166));
            return Ue(n), null;
          }
          l = W.current, Su(n) ? Us(n) : (l = Uf(s, i, u), n.stateNode = l, Ru(n));
        }
        return Ue(n), null;
      case 5:
        if (ie(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && Ru(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(N(166));
            return Ue(n), null;
          }
          if (r = W.current, Su(n))
            Us(n);
          else {
            var m = oi(
              xe.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof i.is == "string" ? m.createElement("select", {
                      is: i.is
                    }) : m.createElement("select"), i.multiple ? r.multiple = !0 : i.size && (r.size = i.size);
                    break;
                  default:
                    r = typeof i.is == "string" ? m.createElement(s, { is: i.is }) : m.createElement(s);
                }
            }
            r[Rt] = n, r[fa] = i;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            e: switch ($l(r, s, i), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && Ru(n);
          }
        }
        return Ue(n), Ym(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== i && Ru(n);
        else {
          if (typeof i != "string" && n.stateNode === null)
            throw Error(N(166));
          if (l = xe.current, Su(n)) {
            if (l = n.stateNode, u = n.memoizedProps, i = null, s = Bl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            l[Rt] = n, l = !!(l.nodeValue === u || i !== null && i.suppressHydrationWarning === !0 || cy(l.nodeValue, u)), l || bn(n, !0);
          } else
            l = oi(l).createTextNode(
              i
            ), l[Rt] = n, n.stateNode = l;
        }
        return Ue(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (i = Su(n), u !== null) {
            if (l === null) {
              if (!i) throw Error(N(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(557));
              l[Rt] = n;
            } else
              Qc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ue(n), l = !1;
          } else
            u = I0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(N(558));
        }
        return Ue(n), null;
      case 13:
        if (i = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Su(n), i !== null && i.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(N(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(N(317));
              s[Rt] = n;
            } else
              Qc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ue(n), s = !1;
          } else
            s = I0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
        }
        return pa(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = i !== null, l = l !== null && l.memoizedState !== null, u && (i = n.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== s && (i.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), aa(n, n.updateQueue), Ue(n), null);
      case 4:
        return ht(), l === null && Rf(n.stateNode.containerInfo), Ue(n), null;
      case 10:
        return Qn(n.type), Ue(n), null;
      case 19:
        if (B($t), i = n.memoizedState, i === null) return Ue(n), null;
        if (s = (n.flags & 128) !== 0, r = i.rendering, r === null)
          if (s) df(i, !1);
          else {
            if (Gt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = af(l), r !== null) {
                  for (n.flags |= 128, df(i, !1), l = r.updateQueue, n.updateQueue = l, aa(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    $0(u, l), u = u.sibling;
                  return F(
                    $t,
                    $t.current & 1 | 2
                  ), nt && Sn(n, i.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            i.tail !== null && vl() > St && (n.flags |= 128, s = !0, df(i, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = af(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, aa(n, l), df(i, !0), i.tail === null && i.tailMode === "hidden" && !r.alternate && !nt)
                return Ue(n), null;
            } else
              2 * vl() - i.renderingStartTime > St && u !== 536870912 && (n.flags |= 128, s = !0, df(i, !1), n.lanes = 4194304);
          i.isBackwards ? (r.sibling = n.child, n.child = r) : (l = i.last, l !== null ? l.sibling = r : n.child = r, i.last = r);
        }
        return i.tail !== null ? (l = i.tail, i.rendering = l, i.tail = l.sibling, i.renderingStartTime = vl(), l.sibling = null, u = $t.current, F(
          $t,
          s ? u & 1 | 2 : u & 1
        ), nt && Sn(n, i.treeForkCount), l) : (Ue(n), null);
      case 22:
      case 23:
        return pa(n), tf(), i = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ue(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ue(n), u = n.updateQueue, u !== null && aa(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048), l !== null && B(Ka), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Qn(dl), Ue(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(N(156, n.tag));
  }
  function lv(l, n) {
    switch (_d(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Qn(dl), ht(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ie(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (pa(n), n.alternate === null)
            throw Error(N(340));
          Qc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (pa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(N(340));
          Qc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return B($t), null;
      case 4:
        return ht(), null;
      case 10:
        return Qn(n.type), null;
      case 22:
      case 23:
        return pa(n), tf(), l !== null && B(Ka), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Qn(dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function av(l, n) {
    switch (_d(n), n.tag) {
      case 3:
        Qn(dl), ht();
        break;
      case 26:
      case 27:
      case 5:
        ie(n);
        break;
      case 4:
        ht();
        break;
      case 31:
        n.memoizedState !== null && pa(n);
        break;
      case 13:
        pa(n);
        break;
      case 19:
        B($t);
        break;
      case 10:
        Qn(n.type);
        break;
      case 22:
      case 23:
        pa(n), tf(), l !== null && B(Ka);
        break;
      case 24:
        Qn(dl);
    }
  }
  function Tn(l, n) {
    try {
      var u = n.updateQueue, i = u !== null ? u.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            i = void 0;
            var r = u.create, m = u.inst;
            i = r(), m.destroy = i;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (g) {
      zt(n, n.return, g);
    }
  }
  function en(l, n, u) {
    try {
      var i = n.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & l) === l) {
            var m = i.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, s = n;
              var A = u, Y = g;
              try {
                Y();
              } catch (Q) {
                zt(
                  s,
                  A,
                  Q
                );
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (Q) {
      zt(n, n.return, Q);
    }
  }
  function uh(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Fc(n, u);
      } catch (i) {
        zt(l, l.return, i);
      }
    }
  }
  function ni(l, n, u) {
    u.props = ei(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (i) {
      zt(l, n, i);
    }
  }
  function Mu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var i = l.stateNode;
            break;
          case 30:
            i = l.stateNode;
            break;
          default:
            i = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(i) : u.current = i;
      }
    } catch (s) {
      zt(l, n, s);
    }
  }
  function Jn(l, n) {
    var u = l.ref, i = l.refCleanup;
    if (u !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          zt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          zt(l, n, s);
        }
      else u.current = null;
  }
  function qm(l) {
    var n = l.type, u = l.memoizedProps, i = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && i.focus();
          break e;
        case "img":
          u.src ? i.src = u.src : u.srcSet && (i.srcset = u.srcSet);
      }
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function ch(l, n, u) {
    try {
      var i = l.stateNode;
      oy(i, l.type, u, n), i[fa] = n;
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function xm(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Fn(l.type) || l.tag === 4;
  }
  function hf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || xm(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Fn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function mf(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Hn));
    else if (i !== 4 && (i === 27 && Fn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (mf(l, n, u), l = l.sibling; l !== null; )
        mf(l, n, u), l = l.sibling;
  }
  function yf(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (i !== 4 && (i === 27 && Fn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (yf(l, n, u), l = l.sibling; l !== null; )
        yf(l, n, u), l = l.sibling;
  }
  function Gm(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var i = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      $l(n, i, u), n[Rt] = l, n[fa] = u;
    } catch (r) {
      zt(l, l.return, r);
    }
  }
  var hc = !1, Sl = !1, ih = !1, wm = typeof WeakSet == "function" ? WeakSet : Set, xl = null;
  function pf(l, n) {
    if (l = l.containerInfo, _h = _l, l = Gc(l), Os(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var i = u.getSelection && u.getSelection();
          if (i && i.rangeCount !== 0) {
            u = i.anchorNode;
            var s = i.anchorOffset, r = i.focusNode;
            i = i.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, g = -1, A = -1, Y = 0, Q = 0, J = l, j = null;
            t: for (; ; ) {
              for (var w; J !== u || s !== 0 && J.nodeType !== 3 || (g = m + s), J !== r || i !== 0 && J.nodeType !== 3 || (A = m + i), J.nodeType === 3 && (m += J.nodeValue.length), (w = J.firstChild) !== null; )
                j = J, J = w;
              for (; ; ) {
                if (J === l) break t;
                if (j === u && ++Y === s && (g = m), j === r && ++Q === i && (A = m), (w = J.nextSibling) !== null) break;
                J = j, j = J.parentNode;
              }
              J = w;
            }
            u = g === -1 || A === -1 ? null : { start: g, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Rh = { focusedElem: l, selectionRange: u }, _l = !1, xl = n; xl !== null; )
      if (n = xl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, xl = l;
      else
        for (; xl !== null; ) {
          switch (n = xl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, i = u.stateNode;
                try {
                  var fe = ei(
                    u.type,
                    s
                  );
                  l = i.getSnapshotBeforeUpdate(
                    fe,
                    r
                  ), i.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Oe) {
                  zt(
                    u,
                    u.return,
                    Oe
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Er(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Er(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(N(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, xl = l;
            break;
          }
          xl = n.return;
        }
  }
  function nr(l, n, u) {
    var i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        mc(l, u), i & 4 && Tn(5, u);
        break;
      case 1:
        if (mc(l, u), i & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              zt(u, u.return, m);
            }
          else {
            var s = ei(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              zt(
                u,
                u.return,
                m
              );
            }
          }
        i & 64 && uh(u), i & 512 && Mu(u, u.return);
        break;
      case 3:
        if (mc(l, u), i & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Fc(l, n);
          } catch (m) {
            zt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Gm(u);
      case 26:
      case 5:
        mc(l, u), n === null && i & 4 && qm(u), i & 512 && Mu(u, u.return);
        break;
      case 12:
        mc(l, u);
        break;
      case 31:
        mc(l, u), i & 4 && nv(l, u);
        break;
      case 13:
        mc(l, u), i & 4 && Lm(l, u), i & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = tn.bind(
          null,
          u
        ), Cf(l, u))));
        break;
      case 22:
        if (i = u.memoizedState !== null || hc, !i) {
          n = n !== null && n.memoizedState !== null || Sl, s = hc;
          var r = Sl;
          hc = i, (Sl = n) && !r ? Kn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : mc(l, u), hc = s, Sl = r;
        }
        break;
      case 30:
        break;
      default:
        mc(l, u);
    }
  }
  function Xm(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Xm(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ad(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var xt = null, Sa = !1;
  function Cu(l, n, u) {
    for (u = u.child; u !== null; )
      Qm(l, n, u), u = u.sibling;
  }
  function Qm(l, n, u) {
    if (Al && typeof Al.onCommitFiberUnmount == "function")
      try {
        Al.onCommitFiberUnmount(rn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Jn(u, n), Cu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Jn(u, n);
        var i = xt, s = Sa;
        Fn(u.type) && (xt = u.stateNode, Sa = !1), Cu(
          l,
          n,
          u
        ), oo(u.stateNode), xt = i, Sa = s;
        break;
      case 5:
        Sl || Jn(u, n);
      case 6:
        if (i = xt, s = Sa, xt = null, Cu(
          l,
          n,
          u
        ), xt = i, Sa = s, xt !== null)
          if (Sa)
            try {
              (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
          else
            try {
              xt.removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        xt !== null && (Sa ? (l = xt, dy(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Xf(l)) : dy(xt, u.stateNode));
        break;
      case 4:
        i = xt, s = Sa, xt = u.stateNode.containerInfo, Sa = !0, Cu(
          l,
          n,
          u
        ), xt = i, Sa = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        en(2, u, n), Sl || en(4, u, n), Cu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (Jn(u, n), i = u.stateNode, typeof i.componentWillUnmount == "function" && ni(
          u,
          n,
          i
        )), Cu(
          l,
          n,
          u
        );
        break;
      case 21:
        Cu(
          l,
          n,
          u
        );
        break;
      case 22:
        Sl = (i = Sl) || u.memoizedState !== null, Cu(
          l,
          n,
          u
        ), Sl = i;
        break;
      default:
        Cu(
          l,
          n,
          u
        );
    }
  }
  function nv(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Xf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
    }
  }
  function Lm(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Xf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
  }
  function ur(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new wm()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new wm()), n;
      default:
        throw Error(N(435, l.tag));
    }
  }
  function cr(l, n) {
    var u = ur(l);
    n.forEach(function(i) {
      if (!u.has(i)) {
        u.add(i);
        var s = zv.bind(null, l, i);
        i.then(s, s);
      }
    });
  }
  function ba(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var i = 0; i < u.length; i++) {
        var s = u[i], r = l, m = n, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Fn(g.type)) {
                xt = g.stateNode, Sa = !1;
                break e;
              }
              break;
            case 5:
              xt = g.stateNode, Sa = !1;
              break e;
            case 3:
            case 4:
              xt = g.stateNode.containerInfo, Sa = !0;
              break e;
          }
          g = g.return;
        }
        if (xt === null) throw Error(N(160));
        Qm(r, m, s), xt = null, Sa = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        oh(n, l), n = n.sibling;
  }
  var Ze = null;
  function oh(l, n) {
    var u = l.alternate, i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ba(n, l), Ra(l), i & 4 && (en(3, l, l.return), Tn(3, l), en(5, l, l.return));
        break;
      case 1:
        ba(n, l), Ra(l), i & 512 && (Sl || u === null || Jn(u, u.return)), i & 64 && hc && (l = l.updateQueue, l !== null && (i = l.callbacks, i !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? i : u.concat(i))));
        break;
      case 26:
        var s = Ze;
        if (ba(n, l), Ra(l), i & 512 && (Sl || u === null || Jn(u, u.return)), i & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (i = l.memoizedState, u === null)
            if (i === null)
              if (l.stateNode === null) {
                e: {
                  i = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (i) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[fu] || r[Rt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), $l(r, i, u), r[Rt] = l, Et(r), i = r;
                      break e;
                    case "link":
                      var m = py(
                        "link",
                        "href",
                        s
                      ).get(i + (u.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(i), $l(r, i, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = py(
                        "meta",
                        "content",
                        s
                      ).get(i + (u.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(i), $l(r, i, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(N(468, i));
                  }
                  r[Rt] = l, Et(r), i = r;
                }
                l.stateNode = i;
              } else
                Nh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = yy(
                s,
                i,
                l.memoizedProps
              );
          else
            r !== i ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, i === null ? Nh(
              s,
              l.type,
              l.stateNode
            ) : yy(
              s,
              i,
              l.memoizedProps
            )) : i === null && l.stateNode !== null && ch(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ba(n, l), Ra(l), i & 512 && (Sl || u === null || Jn(u, u.return)), u !== null && i & 4 && ch(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ba(n, l), Ra(l), i & 512 && (Sl || u === null || Jn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            ru(s, "");
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        i & 4 && l.stateNode != null && (s = l.memoizedProps, ch(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), i & 1024 && (ih = !0);
        break;
      case 6:
        if (ba(n, l), Ra(l), i & 4) {
          if (l.stateNode === null)
            throw Error(N(162));
          i = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = i;
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        break;
      case 3:
        if (jf = null, s = Ze, Ze = na(n.containerInfo), ba(n, l), Ze = s, Ra(l), i & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Xf(n.containerInfo);
          } catch (fe) {
            zt(l, l.return, fe);
          }
        ih && (ih = !1, Vm(l));
        break;
      case 4:
        i = Ze, Ze = na(
          l.stateNode.containerInfo
        ), ba(n, l), Ra(l), Ze = i;
        break;
      case 12:
        ba(n, l), Ra(l);
        break;
      case 31:
        ba(n, l), Ra(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, cr(l, i)));
        break;
      case 13:
        ba(n, l), Ra(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Wn = vl()), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, cr(l, i)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, Y = hc, Q = Sl;
        if (hc = Y || s, Sl = Q || A, ba(n, l), Sl = Q, hc = Y, Ra(l), i & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || hc || Sl || to(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = A.stateNode;
                    var J = A.memoizedProps.style, j = J != null && J.hasOwnProperty("display") ? J.display : null;
                    g.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var w = A.stateNode;
                  s ? yl(w, !0) : yl(A.stateNode, !1);
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        i & 4 && (i = l.updateQueue, i !== null && (u = i.retryQueue, u !== null && (i.retryQueue = null, cr(l, u))));
        break;
      case 19:
        ba(n, l), Ra(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, cr(l, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ba(n, l), Ra(l);
    }
  }
  function Ra(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, i = l.return; i !== null; ) {
          if (xm(i)) {
            u = i;
            break;
          }
          i = i.return;
        }
        if (u == null) throw Error(N(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = hf(l);
            yf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (ru(m, ""), u.flags &= -33);
            var g = hf(l);
            yf(l, g, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, Y = hf(l);
            mf(
              l,
              Y,
              A
            );
            break;
          default:
            throw Error(N(161));
        }
      } catch (Q) {
        zt(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Vm(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Vm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function mc(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        nr(l, n.alternate, n), n = n.sibling;
  }
  function to(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          en(4, n, n.return), to(n);
          break;
        case 1:
          Jn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && ni(
            n,
            n.return,
            u
          ), to(n);
          break;
        case 27:
          oo(n.stateNode);
        case 26:
        case 5:
          Jn(n, n.return), to(n);
          break;
        case 22:
          n.memoizedState === null && to(n);
          break;
        case 30:
          to(n);
          break;
        default:
          to(n);
      }
      l = l.sibling;
    }
  }
  function Kn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            s,
            r,
            u
          ), Tn(4, r);
          break;
        case 1:
          if (Kn(
            s,
            r,
            u
          ), i = r, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (Y) {
              zt(i, i.return, Y);
            }
          if (i = r, s = i.updateQueue, s !== null) {
            var g = i.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  Nd(A[s], g);
            } catch (Y) {
              zt(i, i.return, Y);
            }
          }
          u && m & 64 && uh(r), Mu(r, r.return);
          break;
        case 27:
          Gm(r);
        case 26:
        case 5:
          Kn(
            s,
            r,
            u
          ), u && i === null && m & 4 && qm(r), Mu(r, r.return);
          break;
        case 12:
          Kn(
            s,
            r,
            u
          );
          break;
        case 31:
          Kn(
            s,
            r,
            u
          ), u && m & 4 && nv(s, r);
          break;
        case 13:
          Kn(
            s,
            r,
            u
          ), u && m & 4 && Lm(s, r);
          break;
        case 22:
          r.memoizedState === null && Kn(
            s,
            r,
            u
          ), Mu(r, r.return);
          break;
        case 30:
          break;
        default:
          Kn(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function fh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Bs(u));
  }
  function sh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Bs(l));
  }
  function An(l, n, u, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        vf(
          l,
          n,
          u,
          i
        ), n = n.sibling;
  }
  function vf(l, n, u, i) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(
          l,
          n,
          u,
          i
        ), s & 2048 && Tn(9, n);
        break;
      case 1:
        An(
          l,
          n,
          u,
          i
        );
        break;
      case 3:
        An(
          l,
          n,
          u,
          i
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Bs(l)));
        break;
      case 12:
        if (s & 2048) {
          An(
            l,
            n,
            u,
            i
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, g = r.onPostCommit;
            typeof g == "function" && g(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            zt(n, n.return, A);
          }
        } else
          An(
            l,
            n,
            u,
            i
          );
        break;
      case 31:
        An(
          l,
          n,
          u,
          i
        );
        break;
      case 13:
        An(
          l,
          n,
          u,
          i
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? An(
          l,
          n,
          u,
          i
        ) : ir(l, n) : r._visibility & 2 ? An(
          l,
          n,
          u,
          i
        ) : (r._visibility |= 2, gf(
          l,
          n,
          u,
          i,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && fh(m, n);
        break;
      case 24:
        An(
          l,
          n,
          u,
          i
        ), s & 2048 && sh(n.alternate, n);
        break;
      default:
        An(
          l,
          n,
          u,
          i
        );
    }
  }
  function gf(l, n, u, i, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, g = u, A = i, Y = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          gf(
            r,
            m,
            g,
            A,
            s
          ), Tn(8, m);
          break;
        case 23:
          break;
        case 22:
          var Q = m.stateNode;
          m.memoizedState !== null ? Q._visibility & 2 ? gf(
            r,
            m,
            g,
            A,
            s
          ) : ir(
            r,
            m
          ) : (Q._visibility |= 2, gf(
            r,
            m,
            g,
            A,
            s
          )), s && Y & 2048 && fh(
            m.alternate,
            m
          );
          break;
        case 24:
          gf(
            r,
            m,
            g,
            A,
            s
          ), s && Y & 2048 && sh(m.alternate, m);
          break;
        default:
          gf(
            r,
            m,
            g,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function ir(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, i = n, s = i.flags;
        switch (i.tag) {
          case 22:
            ir(u, i), s & 2048 && fh(
              i.alternate,
              i
            );
            break;
          case 24:
            ir(u, i), s & 2048 && sh(i.alternate, i);
            break;
          default:
            ir(u, i);
        }
        n = n.sibling;
      }
  }
  var Ma = 8192;
  function Uu(l, n, u) {
    if (l.subtreeFlags & Ma)
      for (l = l.child; l !== null; )
        uv(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function uv(l, n, u) {
    switch (l.tag) {
      case 26:
        Uu(
          l,
          n,
          u
        ), l.flags & Ma && l.memoizedState !== null && ju(
          u,
          Ze,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Uu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var i = Ze;
        Ze = na(l.stateNode.containerInfo), Uu(
          l,
          n,
          u
        ), Ze = i;
        break;
      case 22:
        l.memoizedState === null && (i = l.alternate, i !== null && i.memoizedState !== null ? (i = Ma, Ma = 16777216, Uu(
          l,
          n,
          u
        ), Ma = i) : Uu(
          l,
          n,
          u
        ));
        break;
      default:
        Uu(
          l,
          n,
          u
        );
    }
  }
  function rh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Sf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          xl = i, dh(
            i,
            l
          );
        }
      rh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Zm(l), l = l.sibling;
  }
  function Zm(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Sf(l), l.flags & 2048 && en(9, l, l.return);
        break;
      case 3:
        Sf(l);
        break;
      case 12:
        Sf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, or(l)) : Sf(l);
        break;
      default:
        Sf(l);
    }
  }
  function or(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          xl = i, dh(
            i,
            l
          );
        }
      rh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          en(8, n, n.return), or(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, or(n));
          break;
        default:
          or(n);
      }
      l = l.sibling;
    }
  }
  function dh(l, n) {
    for (; xl !== null; ) {
      var u = xl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          en(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var i = u.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Bs(u.memoizedState.cache);
      }
      if (i = u.child, i !== null) i.return = u, xl = i;
      else
        e: for (u = l; xl !== null; ) {
          i = xl;
          var s = i.sibling, r = i.return;
          if (Xm(i), i === u) {
            xl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, xl = s;
            break e;
          }
          xl = r;
        }
    }
  }
  var cv = {
    getCacheForType: function(l) {
      var n = K(dl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return K(dl).controller.signal;
    }
  }, Jm = typeof WeakMap == "function" ? WeakMap : Map, yt = 0, Ct = null, ut = null, et = 0, Ot = 0, Re = null, Hu = !1, ui = !1, hh = !1, $n = 0, Gt = 0, kn = 0, lo = 0, mh = 0, Ea = 0, ll = 0, fr = null, al = null, yh = !1, Wn = 0, Km = 0, St = 1 / 0, bf = null, kt = null, Dl = 0, yc = null, ci = null, Nu = 0, Ca = 0, ph = null, vh = null, Ef = 0, sr = null;
  function Ua() {
    return (yt & 2) !== 0 && et !== 0 ? et & -et : _.T !== null ? Th() : td();
  }
  function iv() {
    if (Ea === 0)
      if ((et & 536870912) === 0 || nt) {
        var l = te;
        te <<= 1, (te & 3932160) === 0 && (te = 262144), Ea = l;
      } else Ea = 536870912;
    return l = ya.current, l !== null && (l.flags |= 32), Ea;
  }
  function Ta(l, n, u) {
    (l === Ct && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null) && (Bu(l, 0), pc(
      l,
      et,
      Ea,
      !1
    )), Uc(l, u), ((yt & 2) === 0 || l !== Ct) && (l === Ct && ((yt & 2) === 0 && (lo |= u), Gt === 4 && pc(
      l,
      et,
      Ea,
      !1
    )), Yu(l));
  }
  function ov(l, n, u) {
    if ((yt & 6) !== 0) throw Error(N(327));
    var i = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || Pe(l, n), s = i ? hv(l, n) : Sh(l, n, !0), r = i;
    do {
      if (s === 0) {
        ui && !i && pc(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !fv(u)) {
          s = Sh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var g = l;
              s = fr;
              var A = g.current.memoizedState.isDehydrated;
              if (A && (Bu(g, m).flags |= 256), m = Sh(
                g,
                m,
                !1
              ), m !== 2) {
                if (hh && !A) {
                  g.errorRecoveryDisabledLanes |= r, lo |= r, s = 4;
                  break e;
                }
                r = al, al = s, r !== null && (al === null ? al = r : al.push.apply(
                  al,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Bu(l, 0), pc(l, n, 0, !0);
          break;
        }
        e: {
          switch (i = l, r = s, r) {
            case 0:
            case 1:
              throw Error(N(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pc(
                i,
                n,
                Ea,
                !Hu
              );
              break e;
            case 2:
              al = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(N(329));
          }
          if ((n & 62914560) === n && (s = Wn + 300 - vl(), 10 < s)) {
            if (pc(
              i,
              n,
              Ea,
              !Hu
            ), he(i, 0, !0) !== 0) break e;
            Nu = n, i.timeoutHandle = br(
              rr.bind(
                null,
                i,
                u,
                al,
                bf,
                yh,
                n,
                Ea,
                lo,
                ll,
                Hu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          rr(
            i,
            u,
            al,
            bf,
            yh,
            n,
            Ea,
            lo,
            ll,
            Hu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Yu(l);
  }
  function rr(l, n, u, i, s, r, m, g, A, Y, Q, J, j, w) {
    if (l.timeoutHandle = -1, J = n.subtreeFlags, J & 8192 || (J & 16785408) === 16785408) {
      J = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Hn
      }, uv(
        n,
        r,
        J
      );
      var fe = (r & 62914560) === r ? Wn - vl() : (r & 4194048) === r ? Km - vl() : 0;
      if (fe = gy(
        J,
        fe
      ), fe !== null) {
        Nu = r, l.cancelPendingCommit = fe(
          vv.bind(
            null,
            l,
            n,
            r,
            u,
            i,
            s,
            m,
            g,
            A,
            Q,
            J,
            null,
            j,
            w
          )
        ), pc(l, r, m, !Y);
        return;
      }
    }
    vv(
      l,
      n,
      r,
      u,
      i,
      s,
      m,
      g,
      A
    );
  }
  function fv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var i = 0; i < u.length; i++) {
          var s = u[i], r = s.getSnapshot;
          s = s.value;
          try {
            if (!la(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pc(l, n, u, i) {
    n &= ~mh, n &= ~lo, l.suspendedLanes |= n, l.pingedLanes &= ~n, i && (l.warmLanes |= n), i = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ul(s), m = 1 << r;
      i[r] = -1, s &= ~m;
    }
    u !== 0 && hs(l, u, n);
  }
  function Tf() {
    return (yt & 6) === 0 ? (gc(0), !1) : !0;
  }
  function $m() {
    if (ut !== null) {
      if (Ot === 0)
        var l = ut.return;
      else
        l = ut, Xn = uc = null, Vs(l), Kc = null, Vi = 0, l = ut;
      for (; l !== null; )
        av(l.alternate, l), l = l.return;
      ut = null;
    }
  }
  function Bu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Nv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Nu = 0, $m(), Ct = l, ut = u = ac(l.current, null), et = n, Ot = 0, Re = null, Hu = !1, ui = Pe(l, n), hh = !1, ll = Ea = mh = lo = kn = Gt = 0, al = fr = null, yh = !1, (n & 8) !== 0 && (n |= n & 32);
    var i = l.entangledLanes;
    if (i !== 0)
      for (l = l.entanglements, i &= n; 0 < i; ) {
        var s = 31 - Ul(i), r = 1 << s;
        n |= l[s], i &= ~r;
      }
    return $n = n, La(), u;
  }
  function Af(l, n) {
    Xe = null, _.H = Is, n === Vc || n === Po ? (n = am(), Ot = 3) : n === Qi ? (n = am(), Ot = 4) : Ot = n === eh ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Re = n, ut === null && (Gt = 1, rf(
      l,
      Za(n, l.current)
    ));
  }
  function sv() {
    var l = ya.current;
    return l === null ? !0 : (et & 4194048) === et ? Wa === null : (et & 62914560) === et || (et & 536870912) !== 0 ? l === Wa : !1;
  }
  function rv() {
    var l = _.H;
    return _.H = Is, l === null ? Is : l;
  }
  function dv() {
    var l = _.A;
    return _.A = cv, l;
  }
  function gh() {
    Gt = 4, Hu || (et & 4194048) !== et && ya.current !== null || (ui = !0), (kn & 134217727) === 0 && (lo & 134217727) === 0 || Ct === null || pc(
      Ct,
      et,
      Ea,
      !1
    );
  }
  function Sh(l, n, u) {
    var i = yt;
    yt |= 2;
    var s = rv(), r = dv();
    (Ct !== l || et !== n) && (bf = null, Bu(l, n)), n = !1;
    var m = Gt;
    e: do
      try {
        if (Ot !== 0 && ut !== null) {
          var g = ut, A = Re;
          switch (Ot) {
            case 8:
              $m(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ya.current === null && (n = !0);
              var Y = Ot;
              if (Ot = 0, Re = null, ao(l, g, A, Y), u && ui) {
                m = 0;
                break e;
              }
              break;
            default:
              Y = Ot, Ot = 0, Re = null, ao(l, g, A, Y);
          }
        }
        t1(), m = Gt;
        break;
      } catch (Q) {
        Af(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Xn = uc = null, yt = i, _.H = s, _.A = r, ut === null && (Ct = null, et = 0, La()), m;
  }
  function t1() {
    for (; ut !== null; ) mv(ut);
  }
  function hv(l, n) {
    var u = yt;
    yt |= 2;
    var i = rv(), s = dv();
    Ct !== l || et !== n ? (bf = null, St = vl() + 500, Bu(l, n)) : ui = Pe(
      l,
      n
    );
    e: do
      try {
        if (Ot !== 0 && ut !== null) {
          n = ut;
          var r = Re;
          t: switch (Ot) {
            case 1:
              Ot = 0, Re = null, ao(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (tm(r)) {
                Ot = 0, Re = null, yv(n);
                break;
              }
              n = function() {
                Ot !== 2 && Ot !== 9 || Ct !== l || (Ot = 7), Yu(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ot = 7;
              break e;
            case 4:
              Ot = 5;
              break e;
            case 7:
              tm(r) ? (Ot = 0, Re = null, yv(n)) : (Ot = 0, Re = null, ao(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (ut.tag) {
                case 26:
                  m = ut.memoizedState;
                case 5:
                case 27:
                  var g = ut;
                  if (m ? Na(m) : g.stateNode.complete) {
                    Ot = 0, Re = null;
                    var A = g.sibling;
                    if (A !== null) ut = A;
                    else {
                      var Y = g.return;
                      Y !== null ? (ut = Y, dr(Y)) : ut = null;
                    }
                    break t;
                  }
              }
              Ot = 0, Re = null, ao(l, n, r, 5);
              break;
            case 6:
              Ot = 0, Re = null, ao(l, n, r, 6);
              break;
            case 8:
              $m(), Gt = 6;
              break e;
            default:
              throw Error(N(462));
          }
        }
        ii();
        break;
      } catch (Q) {
        Af(l, Q);
      }
    while (!0);
    return Xn = uc = null, _.H = i, _.A = s, yt = u, ut !== null ? 0 : (Ct = null, et = 0, La(), Gt);
  }
  function ii() {
    for (; ut !== null && !iu(); )
      mv(ut);
  }
  function mv(l) {
    var n = Bm(l.alternate, l, $n);
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : ut = n;
  }
  function yv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = li(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          et
        );
        break;
      case 11:
        n = li(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          et
        );
        break;
      case 5:
        Vs(n);
      default:
        av(u, n), n = ut = $0(n, $n), n = Bm(u, n, $n);
    }
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : ut = n;
  }
  function ao(l, n, u, i) {
    Xn = uc = null, Vs(n), Kc = null, Vi = 0;
    var s = n.return;
    try {
      if (e1(
        l,
        s,
        n,
        u,
        et
      )) {
        Gt = 1, rf(
          l,
          Za(u, l.current)
        ), ut = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ut = s, r;
      Gt = 1, rf(
        l,
        Za(u, l.current)
      ), ut = null;
      return;
    }
    n.flags & 32768 ? (nt || i === 1 ? l = !0 : ui || (et & 536870912) !== 0 ? l = !1 : (Hu = l = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = ya.current, i !== null && i.tag === 13 && (i.flags |= 16384))), pv(n, l)) : dr(n);
  }
  function dr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        pv(
          n,
          Hu
        );
        return;
      }
      l = n.return;
      var u = tv(
        n.alternate,
        n,
        $n
      );
      if (u !== null) {
        ut = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ut = n;
        return;
      }
      ut = n = l;
    } while (n !== null);
    Gt === 0 && (Gt = 5);
  }
  function pv(l, n) {
    do {
      var u = lv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ut = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ut = l;
        return;
      }
      ut = l = u;
    } while (l !== null);
    Gt = 6, ut = null;
  }
  function vv(l, n, u, i, s, r, m, g, A) {
    l.cancelPendingCommit = null;
    do
      Of();
    while (Dl !== 0);
    if ((yt & 6) !== 0) throw Error(N(327));
    if (n !== null) {
      if (n === l.current) throw Error(N(177));
      if (r = n.lanes | n.childLanes, r |= vn, No(
        l,
        u,
        r,
        m,
        g,
        A
      ), l === Ct && (ut = Ct = null, et = 0), ci = n, yc = l, Nu = u, Ca = r, ph = s, vh = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Dv(Cn, function() {
        return Tv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
        i = _.T, _.T = null, s = L.p, L.p = 2, m = yt, yt |= 4;
        try {
          pf(l, n, u);
        } finally {
          yt = m, L.p = s, _.T = i;
        }
      }
      Dl = 1, gv(), Sv(), bv();
    }
  }
  function gv() {
    if (Dl === 1) {
      Dl = 0;
      var l = yc, n = ci, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null;
        var i = L.p;
        L.p = 2;
        var s = yt;
        yt |= 4;
        try {
          oh(n, l);
          var r = Rh, m = Gc(l.containerInfo), g = r.focusedElem, A = r.selectionRange;
          if (m !== g && g && g.ownerDocument && Bi(
            g.ownerDocument.documentElement,
            g
          )) {
            if (A !== null && Os(g)) {
              var Y = A.start, Q = A.end;
              if (Q === void 0 && (Q = Y), "selectionStart" in g)
                g.selectionStart = Y, g.selectionEnd = Math.min(
                  Q,
                  g.value.length
                );
              else {
                var J = g.ownerDocument || document, j = J && J.defaultView || window;
                if (j.getSelection) {
                  var w = j.getSelection(), fe = g.textContent.length, Oe = Math.min(A.start, fe), Ht = A.end === void 0 ? Oe : Math.min(A.end, fe);
                  !w.extend && Oe > Ht && (m = Ht, Ht = Oe, Oe = m);
                  var C = J0(
                    g,
                    Oe
                  ), D = J0(
                    g,
                    Ht
                  );
                  if (C && D && (w.rangeCount !== 1 || w.anchorNode !== C.node || w.anchorOffset !== C.offset || w.focusNode !== D.node || w.focusOffset !== D.offset)) {
                    var H = J.createRange();
                    H.setStart(C.node, C.offset), w.removeAllRanges(), Oe > Ht ? (w.addRange(H), w.extend(D.node, D.offset)) : (H.setEnd(D.node, D.offset), w.addRange(H));
                  }
                }
              }
            }
            for (J = [], w = g; w = w.parentNode; )
              w.nodeType === 1 && J.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < J.length; g++) {
              var Z = J[g];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          _l = !!_h, Rh = _h = null;
        } finally {
          yt = s, L.p = i, _.T = u;
        }
      }
      l.current = n, Dl = 2;
    }
  }
  function Sv() {
    if (Dl === 2) {
      Dl = 0;
      var l = yc, n = ci, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = _.T, _.T = null;
        var i = L.p;
        L.p = 2;
        var s = yt;
        yt |= 4;
        try {
          nr(l, n.alternate, n);
        } finally {
          yt = s, L.p = i, _.T = u;
        }
      }
      Dl = 3;
    }
  }
  function bv() {
    if (Dl === 4 || Dl === 3) {
      Dl = 0, Si();
      var l = yc, n = ci, u = Nu, i = vh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Dl = 5 : (Dl = 0, ci = yc = null, Ev(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (kt = null), b0(u), n = n.stateNode, Al && typeof Al.onCommitFiberRoot == "function")
        try {
          Al.onCommitFiberRoot(
            rn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        n = _.T, s = L.p, L.p = 2, _.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < i.length; m++) {
            var g = i[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          _.T = n, L.p = s;
        }
      }
      (Nu & 3) !== 0 && Of(), Yu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === sr ? Ef++ : (Ef = 0, sr = l) : Ef = 0, gc(0);
    }
  }
  function Ev(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Bs(n)));
  }
  function Of() {
    return gv(), Sv(), bv(), Tv();
  }
  function Tv() {
    if (Dl !== 5) return !1;
    var l = yc, n = Ca;
    Ca = 0;
    var u = b0(Nu), i = _.T, s = L.p;
    try {
      L.p = 32 > u ? 32 : u, _.T = null, u = ph, ph = null;
      var r = yc, m = Nu;
      if (Dl = 0, ci = yc = null, Nu = 0, (yt & 6) !== 0) throw Error(N(331));
      var g = yt;
      if (yt |= 4, Zm(r.current), vf(
        r,
        r.current,
        m,
        u
      ), yt = g, gc(0, !1), Al && typeof Al.onPostCommitFiberRoot == "function")
        try {
          Al.onPostCommitFiberRoot(rn, r);
        } catch {
        }
      return !0;
    } finally {
      L.p = s, _.T = i, Ev(l, n);
    }
  }
  function Av(l, n, u) {
    n = Za(u, n), n = zm(l.stateNode, n, 2), l = ka(l, n, 2), l !== null && (Uc(l, 2), Yu(l));
  }
  function zt(l, n, u) {
    if (l.tag === 3)
      Av(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Av(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (kt === null || !kt.has(i))) {
            l = Za(u, l), u = Dm(2), i = ka(n, u, 2), i !== null && (_m(
              u,
              i,
              n,
              l
            ), Uc(i, 2), Yu(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function hr(l, n, u) {
    var i = l.pingCache;
    if (i === null) {
      i = l.pingCache = new Jm();
      var s = /* @__PURE__ */ new Set();
      i.set(n, s);
    } else
      s = i.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(n, s));
    s.has(u) || (hh = !0, s.add(u), l = km.bind(null, l, n, u), n.then(l, l));
  }
  function km(l, n, u) {
    var i = l.pingCache;
    i !== null && i.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ct === l && (et & u) === u && (Gt === 4 || Gt === 3 && (et & 62914560) === et && 300 > vl() - Wn ? (yt & 2) === 0 && Bu(l, 0) : mh |= u, ll === et && (ll = 0)), Yu(l);
  }
  function Ov(l, n) {
    n === 0 && (n = ea()), l = lc(l, n), l !== null && (Uc(l, n), Yu(l));
  }
  function tn(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Ov(l, u);
  }
  function zv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var i = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        i = l.stateNode;
        break;
      case 22:
        i = l.stateNode._retryCache;
        break;
      default:
        throw Error(N(314));
    }
    i !== null && i.delete(n), Ov(l, u);
  }
  function Dv(l, n) {
    return re(l, n);
  }
  var zf = null, no = null, Wm = !1, bh = !1, Fm = !1, vc = 0;
  function Yu(l) {
    l !== no && l.next === null && (no === null ? zf = no = l : no = no.next = l), bh = !0, Wm || (Wm = !0, yr());
  }
  function gc(l, n) {
    if (!Fm && bh) {
      Fm = !0;
      do
        for (var u = !1, i = zf; i !== null; ) {
          if (l !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = i.suspendedLanes, g = i.pingedLanes;
              r = (1 << 31 - Ul(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, uo(i, r));
          } else
            r = et, r = he(
              i,
              i === Ct ? r : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (r & 3) === 0 || Pe(i, r) || (u = !0, uo(i, r));
          i = i.next;
        }
      while (u);
      Fm = !1;
    }
  }
  function Eh() {
    Im();
  }
  function Im() {
    bh = Wm = !1;
    var l = 0;
    vc !== 0 && l1() && (l = vc);
    for (var n = vl(), u = null, i = zf; i !== null; ) {
      var s = i.next, r = Pm(i, n);
      r === 0 ? (i.next = null, u === null ? zf = s : u.next = s, s === null && (no = u)) : (u = i, (l !== 0 || (r & 3) !== 0) && (bh = !0)), i = s;
    }
    Dl !== 0 && Dl !== 5 || gc(l), vc !== 0 && (vc = 0);
  }
  function Pm(l, n) {
    for (var u = l.suspendedLanes, i = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ul(r), g = 1 << m, A = s[m];
      A === -1 ? ((g & u) === 0 || (g & i) !== 0) && (s[m] = Ge(g, n)) : A <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = Ct, u = et, u = he(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i = l.callbackNode, u === 0 || l === n && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null)
      return i !== null && i !== null && Mc(i), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Pe(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (i !== null && Mc(i), b0(u)) {
        case 2:
        case 8:
          u = Uo;
          break;
        case 32:
          u = Cn;
          break;
        case 268435456:
          u = Ho;
          break;
        default:
          u = Cn;
      }
      return i = mr.bind(null, l), u = re(u, i), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return i !== null && i !== null && Mc(i), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function mr(l, n) {
    if (Dl !== 0 && Dl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Of() && l.callbackNode !== u)
      return null;
    var i = et;
    return i = he(
      l,
      l === Ct ? i : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i === 0 ? null : (ov(l, i, n), Pm(l, vl()), l.callbackNode != null && l.callbackNode === u ? mr.bind(null, l) : null);
  }
  function uo(l, n) {
    if (Of()) return null;
    ov(l, n, !0);
  }
  function yr() {
    Bv(function() {
      (yt & 6) !== 0 ? re(
        Co,
        Eh
      ) : Im();
    });
  }
  function Th() {
    if (vc === 0) {
      var l = Lc;
      l === 0 && (l = I, I <<= 1, (I & 261888) === 0 && (I = 256)), vc = l;
    }
    return vc;
  }
  function _v(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : hn("" + l);
  }
  function co(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function pr(l, n, u, i, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = _v(
        (s[fa] || null).action
      ), m = i.submitter;
      m && (n = (n = m[fa] || null) ? _v(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new Es(
        "action",
        "action",
        null,
        i,
        s
      );
      l.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (vc !== 0) {
                  var A = m ? co(s, m) : new FormData(s);
                  ff(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (g.preventDefault(), A = m ? co(s, m) : new FormData(s), ff(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Ah = 0; Ah < Ko.length; Ah++) {
    var Df = Ko[Ah], ey = Df.toLowerCase(), ty = Df[0].toUpperCase() + Df.slice(1);
    ra(
      ey,
      "on" + ty
    );
  }
  ra(Ds, "onAnimationEnd"), ra(K0, "onAnimationIteration"), ra(Ad, "onAnimationStart"), ra("dblclick", "onDoubleClick"), ra("focusin", "onFocus"), ra("focusout", "onBlur"), ra(Yi, "onTransitionRun"), ra(_s, "onTransitionStart"), ra(yu, "onTransitionCancel"), ra(xp, "onTransitionEnd"), su("onMouseEnter", ["mouseout", "mouseover"]), su("onMouseLeave", ["mouseout", "mouseover"]), su("onPointerEnter", ["pointerout", "pointerover"]), su("onPointerLeave", ["pointerout", "pointerover"]), Bc(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Bc(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Bc("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Bc(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Bc(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Bc(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _f = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Rv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_f)
  );
  function Mv(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var i = l[u], s = i.event;
      i = i.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = i.length - 1; 0 <= m; m--) {
            var g = i[m], A = g.instance, Y = g.currentTarget;
            if (g = g.listener, A !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = Y;
            try {
              r(s);
            } catch (Q) {
              ji(Q);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (g = i[m], A = g.instance, Y = g.currentTarget, g = g.listener, A !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = Y;
            try {
              r(s);
            } catch (Q) {
              ji(Q);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function at(l, n) {
    var u = n[ld];
    u === void 0 && (u = n[ld] = /* @__PURE__ */ new Set());
    var i = l + "__bubble";
    u.has(i) || (vr(n, l, 2, !1), u.add(i));
  }
  function ly(l, n, u) {
    var i = 0;
    n && (i |= 4), vr(
      u,
      l,
      i,
      n
    );
  }
  var Oh = "_reactListening" + Math.random().toString(36).slice(2);
  function Rf(l) {
    if (!l[Oh]) {
      l[Oh] = !0, Oi.forEach(function(u) {
        u !== "selectionchange" && (Rv.has(u) || ly(u, !1, l), ly(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Oh] || (n[Oh] = !0, ly("selectionchange", !1, n));
    }
  }
  function vr(l, n, u, i) {
    switch (Dr(n)) {
      case 2:
        var s = qu;
        break;
      case 8:
        s = xu;
        break;
      default:
        s = kl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Ss || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), i ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function ay(l, n, u, i, s) {
    var r = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var g = i.stateNode.containerInfo;
          if (g === s) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = Ei(g), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              i = r = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    M0(function() {
      var Y = r, Q = sd(u), J = [];
      e: {
        var j = pu.get(l);
        if (j !== void 0) {
          var w = Es, fe = l;
          switch (l) {
            case "keypress":
              if (dd(u) === 0) break e;
            case "keydown":
            case "keyup":
              w = pd;
              break;
            case "focusin":
              fe = "focus", w = md;
              break;
            case "focusout":
              fe = "blur", w = md;
              break;
            case "beforeblur":
            case "afterblur":
              w = md;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Qo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = Dp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = Up;
              break;
            case Ds:
            case K0:
            case Ad:
              w = Rp;
              break;
            case xp:
              w = Wg;
              break;
            case "scroll":
            case "scrollend":
              w = $g;
              break;
            case "wheel":
              w = Fg;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = Ri;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Yn;
              break;
            case "toggle":
            case "beforetoggle":
              w = x0;
          }
          var Oe = (n & 4) !== 0, Ht = !Oe && (l === "scroll" || l === "scrollend"), C = Oe ? j !== null ? j + "Capture" : null : j;
          Oe = [];
          for (var D = Y, H; D !== null; ) {
            var Z = D;
            if (H = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || H === null || C === null || (Z = Hl(D, C), Z != null && Oe.push(
              gr(D, Z, H)
            )), Ht) break;
            D = D.return;
          }
          0 < Oe.length && (j = new w(
            j,
            fe,
            null,
            u,
            Q
          ), J.push({ event: j, listeners: Oe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (j = l === "mouseover" || l === "pointerover", w = l === "mouseout" || l === "pointerout", j && u !== fd && (fe = u.relatedTarget || u.fromElement) && (Ei(fe) || fe[Hc]))
            break e;
          if ((w || j) && (j = Q.window === Q ? Q : (j = Q.ownerDocument) ? j.defaultView || j.parentWindow : window, w ? (fe = u.relatedTarget || u.toElement, w = Y, fe = fe ? Ei(fe) : null, fe !== null && (Ht = qe(fe), Oe = fe.tag, fe !== Ht || Oe !== 5 && Oe !== 27 && Oe !== 6) && (fe = null)) : (w = null, fe = Y), w !== fe)) {
            if (Oe = Qo, Z = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (Oe = Yn, Z = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Ht = w == null ? j : Bo(w), H = fe == null ? j : Bo(fe), j = new Oe(
              Z,
              D + "leave",
              w,
              u,
              Q
            ), j.target = Ht, j.relatedTarget = H, Z = null, Ei(Q) === Y && (Oe = new Oe(
              C,
              D + "enter",
              fe,
              u,
              Q
            ), Oe.target = H, Oe.relatedTarget = Ht, Z = Oe), Ht = Z, w && fe)
              t: {
                for (Oe = Cv, C = w, D = fe, H = 0, Z = C; Z; Z = Oe(Z))
                  H++;
                Z = 0;
                for (var Se = D; Se; Se = Oe(Se))
                  Z++;
                for (; 0 < H - Z; )
                  C = Oe(C), H--;
                for (; 0 < Z - H; )
                  D = Oe(D), Z--;
                for (; H--; ) {
                  if (C === D || D !== null && C === D.alternate) {
                    Oe = C;
                    break t;
                  }
                  C = Oe(C), D = Oe(D);
                }
                Oe = null;
              }
            else Oe = null;
            w !== null && zh(
              J,
              j,
              w,
              Oe,
              !1
            ), fe !== null && Ht !== null && zh(
              J,
              Ht,
              fe,
              Oe,
              !0
            );
          }
        }
        e: {
          if (j = Y ? Bo(Y) : window, w = j.nodeName && j.nodeName.toLowerCase(), w === "select" || w === "input" && j.type === "file")
            var rt = L0;
          else if (mu(j))
            if (Sd)
              rt = Ni;
            else {
              rt = jp;
              var me = Yp;
            }
          else
            w = j.nodeName, !w || w.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? Y && R0(Y.elementType) && (rt = L0) : rt = xc;
          if (rt && (rt = rt(l, Y))) {
            Q0(
              J,
              rt,
              u,
              Q
            );
            break e;
          }
          me && me(l, j, Y), l === "focusout" && Y && j.type === "number" && Y.memoizedProps.value != null && zi(j, "number", j.value);
        }
        switch (me = Y ? Bo(Y) : window, l) {
          case "focusin":
            (mu(me) || me.contentEditable === "true") && (wc = me, Zo = Y, pn = null);
            break;
          case "focusout":
            pn = Zo = wc = null;
            break;
          case "mousedown":
            qn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qn = !1, Td(J, u, Q);
            break;
          case "selectionchange":
            if (zs) break;
          case "keydown":
          case "keyup":
            Td(J, u, Q);
        }
        var we;
        if (Lo)
          e: {
            switch (l) {
              case "compositionstart":
                var Je = "onCompositionStart";
                break e;
              case "compositionend":
                Je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Je = "onCompositionUpdate";
                break e;
            }
            Je = void 0;
          }
        else
          Ci ? gd(l, u) && (Je = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Je = "onCompositionStart");
        Je && (G0 && u.locale !== "ko" && (Ci || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Ci && (we = U0()) : (ec = Q, C0 = "value" in ec ? ec.value : ec.textContent, Ci = !0)), me = Sr(Y, Je), 0 < me.length && (Je = new Mp(
          Je,
          l,
          null,
          u,
          Q
        ), J.push({ event: Je, listeners: me }), we ? Je.data = we : (we = w0(u), we !== null && (Je.data = we)))), (we = ta ? Bp(l, u) : Ig(l, u)) && (Je = Sr(Y, "onBeforeInput"), 0 < Je.length && (me = new Mp(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), J.push({
          event: me,
          listeners: Je
        }), me.data = we)), pr(
          J,
          l,
          Y,
          u,
          Q
        );
      }
      Mv(J, n);
    });
  }
  function gr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Sr(l, n) {
    for (var u = n + "Capture", i = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Hl(l, u), s != null && i.unshift(
        gr(l, s, r)
      ), s = Hl(l, n), s != null && i.push(
        gr(l, s, r)
      )), l.tag === 3) return i;
      l = l.return;
    }
    return [];
  }
  function Cv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function zh(l, n, u, i, s) {
    for (var r = n._reactName, m = []; u !== null && u !== i; ) {
      var g = u, A = g.alternate, Y = g.stateNode;
      if (g = g.tag, A !== null && A === i) break;
      g !== 5 && g !== 26 && g !== 27 || Y === null || (A = Y, s ? (Y = Hl(u, r), Y != null && m.unshift(
        gr(u, Y, A)
      )) : s || (Y = Hl(u, r), Y != null && m.push(
        gr(u, Y, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Uv = /\r\n?/g, ny = /\u0000|\uFFFD/g;
  function uy(l) {
    return (typeof l == "string" ? l : "" + l).replace(Uv, `
`).replace(ny, "");
  }
  function cy(l, n) {
    return n = uy(n), uy(l) === n;
  }
  function Ut(l, n, u, i, s, r) {
    switch (u) {
      case "children":
        typeof i == "string" ? n === "body" || n === "textarea" && i === "" || ru(l, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && ru(l, "" + i);
        break;
      case "className":
        cd(l, "class", i);
        break;
      case "tabIndex":
        cd(l, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cd(l, u, i);
        break;
      case "style":
        Ap(l, i, r);
        break;
      case "data":
        if (n !== "object") {
          cd(l, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = hn("" + i), l.setAttribute(u, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ut(l, n, "name", s.name, s, null), Ut(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ut(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ut(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ut(l, n, "encType", s.encType, s, null), Ut(l, n, "method", s.method, s, null), Ut(l, n, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = hn("" + i), l.setAttribute(u, i);
        break;
      case "onClick":
        i != null && (l.onclick = Hn);
        break;
      case "onScroll":
        i != null && at("scroll", l);
        break;
      case "onScrollEnd":
        i != null && at("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(N(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(N(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        l.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = hn("" + i), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "" + i) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        i === !0 ? l.setAttribute(u, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? l.removeAttribute(u) : l.setAttribute(u, i);
        break;
      case "popover":
        at("beforetoggle", l), at("toggle", l), qo(l, "popover", i);
        break;
      case "xlinkActuate":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        qo(l, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Kg.get(u) || u, qo(l, u, i));
    }
  }
  function iy(l, n, u, i, s, r) {
    switch (u) {
      case "style":
        Ap(l, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(N(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(N(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof i == "string" ? ru(l, i) : (typeof i == "number" || typeof i == "bigint") && ru(l, "" + i);
        break;
      case "onScroll":
        i != null && at("scroll", l);
        break;
      case "onScrollEnd":
        i != null && at("scrollend", l);
        break;
      case "onClick":
        i != null && (l.onclick = Hn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Nc.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[fa] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof i == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, i, s);
              break e;
            }
            u in l ? l[u] = i : i === !0 ? l.setAttribute(u, "") : qo(l, u, i);
          }
    }
  }
  function $l(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        at("error", l), at("load", l);
        var i = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(N(137, n));
                default:
                  Ut(l, n, r, m, u, null);
              }
          }
        s && Ut(l, n, "srcSet", u.srcSet, u, null), i && Ut(l, n, "src", u.src, u, null);
        return;
      case "input":
        at("invalid", l);
        var g = r = m = s = null, A = null, Y = null;
        for (i in u)
          if (u.hasOwnProperty(i)) {
            var Q = u[i];
            if (Q != null)
              switch (i) {
                case "name":
                  s = Q;
                  break;
                case "type":
                  m = Q;
                  break;
                case "checked":
                  A = Q;
                  break;
                case "defaultChecked":
                  Y = Q;
                  break;
                case "value":
                  r = Q;
                  break;
                case "defaultValue":
                  g = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(N(137, n));
                  break;
                default:
                  Ut(l, n, i, Q, u, null);
              }
          }
        ps(
          l,
          r,
          g,
          A,
          Y,
          m,
          s,
          !1
        );
        return;
      case "select":
        at("invalid", l), i = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (g = u[s], g != null))
            switch (s) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                i = g;
              default:
                Ut(l, n, s, g, u, null);
            }
        n = r, u = m, l.multiple = !!i, n != null ? xo(l, !!i, n, !1) : u != null && xo(l, !!i, u, !0);
        return;
      case "textarea":
        at("invalid", l), r = s = i = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (g = u[m], g != null))
            switch (m) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(N(91));
                break;
              default:
                Ut(l, n, m, g, u, null);
            }
        _0(l, i, s, r);
        return;
      case "option":
        for (A in u)
          u.hasOwnProperty(A) && (i = u[A], i != null) && (A === "selected" ? l.selected = i && typeof i != "function" && typeof i != "symbol" : Ut(l, n, A, i, u, null));
        return;
      case "dialog":
        at("beforetoggle", l), at("toggle", l), at("cancel", l), at("close", l);
        break;
      case "iframe":
      case "object":
        at("load", l);
        break;
      case "video":
      case "audio":
        for (i = 0; i < _f.length; i++)
          at(_f[i], l);
        break;
      case "image":
        at("error", l), at("load", l);
        break;
      case "details":
        at("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        at("error", l), at("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Y in u)
          if (u.hasOwnProperty(Y) && (i = u[Y], i != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(N(137, n));
              default:
                Ut(l, n, Y, i, u, null);
            }
        return;
      default:
        if (R0(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (i = u[Q], i !== void 0 && iy(
              l,
              n,
              Q,
              i,
              u,
              void 0
            ));
          return;
        }
    }
    for (g in u)
      u.hasOwnProperty(g) && (i = u[g], i != null && Ut(l, n, g, i, u, null));
  }
  function oy(l, n, u, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, g = null, A = null, Y = null, Q = null;
        for (w in u) {
          var J = u[w];
          if (u.hasOwnProperty(w) && J != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = J;
              default:
                i.hasOwnProperty(w) || Ut(l, n, w, null, i, J);
            }
        }
        for (var j in i) {
          var w = i[j];
          if (J = u[j], i.hasOwnProperty(j) && (w != null || J != null))
            switch (j) {
              case "type":
                r = w;
                break;
              case "name":
                s = w;
                break;
              case "checked":
                Y = w;
                break;
              case "defaultChecked":
                Q = w;
                break;
              case "value":
                m = w;
                break;
              case "defaultValue":
                g = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(N(137, n));
                break;
              default:
                w !== J && Ut(
                  l,
                  n,
                  j,
                  w,
                  i,
                  J
                );
            }
        }
        ys(
          l,
          m,
          g,
          A,
          Y,
          Q,
          r,
          s
        );
        return;
      case "select":
        w = m = g = j = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                w = A;
              default:
                i.hasOwnProperty(r) || Ut(
                  l,
                  n,
                  r,
                  null,
                  i,
                  A
                );
            }
        for (s in i)
          if (r = i[s], A = u[s], i.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                j = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== A && Ut(
                  l,
                  n,
                  s,
                  r,
                  i,
                  A
                );
            }
        n = g, u = m, i = w, j != null ? xo(l, !!u, j, !1) : !!i != !!u && (n != null ? xo(l, !!u, n, !0) : xo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        w = j = null;
        for (g in u)
          if (s = u[g], u.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(l, n, g, null, i, s);
            }
        for (m in i)
          if (s = i[m], r = u[m], i.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                w = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(N(91));
                break;
              default:
                s !== r && Ut(l, n, m, s, i, r);
            }
        D0(l, j, w);
        return;
      case "option":
        for (var fe in u)
          j = u[fe], u.hasOwnProperty(fe) && j != null && !i.hasOwnProperty(fe) && (fe === "selected" ? l.selected = !1 : Ut(
            l,
            n,
            fe,
            null,
            i,
            j
          ));
        for (A in i)
          j = i[A], w = u[A], i.hasOwnProperty(A) && j !== w && (j != null || w != null) && (A === "selected" ? l.selected = j && typeof j != "function" && typeof j != "symbol" : Ut(
            l,
            n,
            A,
            j,
            i,
            w
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Oe in u)
          j = u[Oe], u.hasOwnProperty(Oe) && j != null && !i.hasOwnProperty(Oe) && Ut(l, n, Oe, null, i, j);
        for (Y in i)
          if (j = i[Y], w = u[Y], i.hasOwnProperty(Y) && j !== w && (j != null || w != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(N(137, n));
                break;
              default:
                Ut(
                  l,
                  n,
                  Y,
                  j,
                  i,
                  w
                );
            }
        return;
      default:
        if (R0(n)) {
          for (var Ht in u)
            j = u[Ht], u.hasOwnProperty(Ht) && j !== void 0 && !i.hasOwnProperty(Ht) && iy(
              l,
              n,
              Ht,
              void 0,
              i,
              j
            );
          for (Q in i)
            j = i[Q], w = u[Q], !i.hasOwnProperty(Q) || j === w || j === void 0 && w === void 0 || iy(
              l,
              n,
              Q,
              j,
              i,
              w
            );
          return;
        }
    }
    for (var C in u)
      j = u[C], u.hasOwnProperty(C) && j != null && !i.hasOwnProperty(C) && Ut(l, n, C, null, i, j);
    for (J in i)
      j = i[J], w = u[J], !i.hasOwnProperty(J) || j === w || j == null && w == null || Ut(l, n, J, j, i, w);
  }
  function Dh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function fy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), i = 0; i < u.length; i++) {
        var s = u[i], r = s.transferSize, m = s.initiatorType, g = s.duration;
        if (r && g && Dh(m)) {
          for (m = 0, g = s.responseEnd, i += 1; i < u.length; i++) {
            var A = u[i], Y = A.startTime;
            if (Y > g) break;
            var Q = A.transferSize, J = A.initiatorType;
            Q && Dh(J) && (A = A.responseEnd, m += Q * (A < g ? 1 : (g - Y) / (A - Y)));
          }
          if (--i, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var _h = null, Rh = null;
  function oi(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Hv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sy(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Mf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Mh = null;
  function l1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Mh ? !1 : (Mh = l, !0) : (Mh = null, !1);
  }
  var br = typeof setTimeout == "function" ? setTimeout : void 0, Nv = typeof clearTimeout == "function" ? clearTimeout : void 0, io = typeof Promise == "function" ? Promise : void 0, Bv = typeof queueMicrotask == "function" ? queueMicrotask : typeof io < "u" ? function(l) {
    return io.resolve(null).then(l).catch(ry);
  } : br;
  function ry(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Fn(l) {
    return l === "head";
  }
  function dy(l, n) {
    var u = n, i = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (i === 0) {
            l.removeChild(s), Xf(n);
            return;
          }
          i--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          i++;
        else if (u === "html")
          oo(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, oo(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, g = r.nodeName;
            r[fu] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && oo(l.ownerDocument.body);
      u = s;
    } while (u);
    Xf(n);
  }
  function yl(l, n) {
    var u = l;
    l = 0;
    do {
      var i = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), i && i.nodeType === 8)
        if (u = i.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = i;
    } while (u);
  }
  function Er(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Er(u), ad(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function a1(l, n, u, i) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (i) {
        if (!l[fu])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Aa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function ke(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function Yv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function On(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function fi(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Cf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var i = function() {
        n(), u.removeEventListener("DOMContentLoaded", i);
      };
      u.addEventListener("DOMContentLoaded", i), l._reactRetry = i;
    }
  }
  function Aa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var Tr = null;
  function Ch(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Aa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function In(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Uf(l, n, u) {
    switch (n = oi(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(N(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(N(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(N(454));
        return l;
      default:
        throw Error(N(451));
    }
  }
  function oo(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ad(l);
  }
  var Ha = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Set();
  function na(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Pn = L.d;
  L.d = {
    f: n1,
    r: jv,
    D: G,
    C: bt,
    L: u1,
    m: hy,
    X: Sc,
    S: my,
    M: si
  };
  function n1() {
    var l = Pn.f(), n = Tf();
    return l || n;
  }
  function jv(l) {
    var n = Ti(l);
    n !== null && n.tag === 5 && n.type === "form" ? Mt(n) : Pn.r(l);
  }
  var Hf = typeof document > "u" ? null : document;
  function bl(l, n, u) {
    var i = Hf;
    if (i && typeof n == "string" && n) {
      var s = Qa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Ar.has(s) || (Ar.add(s), l = { rel: l, crossOrigin: u, href: n }, i.querySelector(s) === null && (n = i.createElement("link"), $l(n, "link", l), Et(n), i.head.appendChild(n)));
    }
  }
  function G(l) {
    Pn.D(l), bl("dns-prefetch", l, null);
  }
  function bt(l, n) {
    Pn.C(l, n), bl("preconnect", l, n);
  }
  function u1(l, n, u) {
    Pn.L(l, n, u);
    var i = Hf;
    if (i && l && n) {
      var s = 'link[rel="preload"][as="' + Qa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Qa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Qa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Qa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = ln(l);
          break;
        case "script":
          r = fo(l);
      }
      Ha.has(r) || (l = X(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ha.set(r, l), i.querySelector(s) !== null || n === "style" && i.querySelector(ri(r)) || n === "script" && i.querySelector(Yf(r)) || (n = i.createElement("link"), $l(n, "link", l), Et(n), i.head.appendChild(n)));
    }
  }
  function hy(l, n) {
    Pn.m(l, n);
    var u = Hf;
    if (u && l) {
      var i = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Qa(i) + '"][href="' + Qa(l) + '"]', r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = fo(l);
      }
      if (!Ha.has(r) && (l = X({ rel: "modulepreload", href: l }, n), Ha.set(r, l), u.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Yf(r)))
              return;
        }
        i = u.createElement("link"), $l(i, "link", l), Et(i), u.head.appendChild(i);
      }
    }
  }
  function my(l, n, u) {
    Pn.S(l, n, u);
    var i = Hf;
    if (i && l) {
      var s = Ai(i).hoistableStyles, r = ln(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = i.querySelector(
          ri(r)
        ))
          g.loading = 5;
        else {
          l = X(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ha.get(r)) && Uh(l, u);
          var A = m = i.createElement("link");
          Et(A), $l(A, "link", l), A._p = new Promise(function(Y, Q) {
            A.onload = Y, A.onerror = Q;
          }), A.addEventListener("load", function() {
            g.loading |= 1;
          }), A.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Or(m, n, i);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, s.set(r, m);
      }
    }
  }
  function Sc(l, n) {
    Pn.X(l, n);
    var u = Hf;
    if (u && l) {
      var i = Ai(u).hoistableScripts, s = fo(l), r = i.get(s);
      r || (r = u.querySelector(Yf(s)), r || (l = X({ src: l, async: !0 }, n), (n = Ha.get(s)) && Hh(l, n), r = u.createElement("script"), Et(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function si(l, n) {
    Pn.M(l, n);
    var u = Hf;
    if (u && l) {
      var i = Ai(u).hoistableScripts, s = fo(l), r = i.get(s);
      r || (r = u.querySelector(Yf(s)), r || (l = X({ src: l, async: !0, type: "module" }, n), (n = Ha.get(s)) && Hh(l, n), r = u.createElement("script"), Et(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function Nf(l, n, u, i) {
    var s = (s = xe.current) ? na(s) : null;
    if (!s) throw Error(N(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = ln(u.href), u = Ai(
          s
        ).hoistableStyles, i = u.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ln(u.href);
          var r = Ai(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            ri(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Ha.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ha.set(l, u), r || qv(
            s,
            l,
            u,
            m.state
          ))), n && i === null)
            throw Error(N(528, ""));
          return m;
        }
        if (n && i !== null)
          throw Error(N(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = fo(u), u = Ai(
          s
        ).hoistableScripts, i = u.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(N(444, l));
    }
  }
  function ln(l) {
    return 'href="' + Qa(l) + '"';
  }
  function ri(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Bf(l) {
    return X({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function qv(l, n, u, i) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = l.createElement("link"), i.preload = n, n.addEventListener("load", function() {
      return i.loading |= 1;
    }), n.addEventListener("error", function() {
      return i.loading |= 2;
    }), $l(n, "link", u), Et(n), l.head.appendChild(n));
  }
  function fo(l) {
    return '[src="' + Qa(l) + '"]';
  }
  function Yf(l) {
    return "script[async]" + l;
  }
  function yy(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var i = l.querySelector(
            'style[data-href~="' + Qa(u.href) + '"]'
          );
          if (i)
            return n.instance = i, Et(i), i;
          var s = X({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return i = (l.ownerDocument || l).createElement(
            "style"
          ), Et(i), $l(i, "style", s), Or(i, u.precedence, l), n.instance = i;
        case "stylesheet":
          s = ln(u.href);
          var r = l.querySelector(
            ri(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Et(r), r;
          i = Bf(u), (s = Ha.get(s)) && Uh(i, s), r = (l.ownerDocument || l).createElement("link"), Et(r);
          var m = r;
          return m._p = new Promise(function(g, A) {
            m.onload = g, m.onerror = A;
          }), $l(r, "link", i), n.state.loading |= 4, Or(r, u.precedence, l), n.instance = r;
        case "script":
          return r = fo(u.src), (s = l.querySelector(
            Yf(r)
          )) ? (n.instance = s, Et(s), s) : (i = u, (s = Ha.get(r)) && (i = X({}, u), Hh(i, s)), l = l.ownerDocument || l, s = l.createElement("script"), Et(s), $l(s, "link", i), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(N(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, Or(i, u.precedence, l));
    return n.instance;
  }
  function Or(l, n, u) {
    for (var i = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, r = s, m = 0; m < i.length; m++) {
      var g = i[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Uh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Hh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var jf = null;
  function py(l, n, u) {
    if (jf === null) {
      var i = /* @__PURE__ */ new Map(), s = jf = /* @__PURE__ */ new Map();
      s.set(u, i);
    } else
      s = jf, i = s.get(u), i || (i = /* @__PURE__ */ new Map(), s.set(u, i));
    if (i.has(l)) return i;
    for (i.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[fu] || r[Rt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = i.get(m);
        g ? g.push(r) : i.set(m, [r]);
      }
    }
    return i;
  }
  function Nh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function vy(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Na(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function ju(l, n, u, i) {
    if (u.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = ln(i.href), r = n.querySelector(
          ri(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Bh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Et(r);
          return;
        }
        r = n.ownerDocument || n, i = Bf(i), (s = Ha.get(s)) && Uh(i, s), r = r.createElement("link"), Et(r);
        var m = r;
        m._p = new Promise(function(g, A) {
          m.onload = g, m.onerror = A;
        }), $l(r, "link", i), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Bh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var an = 0;
  function gy(l, n) {
    return l.stylesheets && l.count === 0 && jh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var i = setTimeout(function() {
        if (l.stylesheets && jh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && an === 0 && (an = 62500 * fy());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && jh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > an ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function Bh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) jh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Yh = null;
  function jh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Yh = /* @__PURE__ */ new Map(), n.forEach(Gl, l), Yh = null, Bh.call(l));
  }
  function Gl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Yh.get(l);
      if (u) var i = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Yh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), i = m);
        }
        i && u.set(null, i);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || i, r === i && u.set(null, s), u.set(m, s), this.count++, i = Bh.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var zr = {
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Sy(l, n, u, i, s, r, m, g, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dn(0), this.hiddenUpdates = dn(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qh(l, n, u, i, s, r, m, g, A, Y, Q, J) {
    return l = new Sy(
      l,
      n,
      u,
      m,
      A,
      Y,
      Q,
      J,
      g
    ), n = 1, r === !0 && (n |= 24), r = cl(3, null, null, n), l.current = r, r.stateNode = l, n = Ns(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: i,
      isDehydrated: u,
      cache: n
    }, ws(r), l;
  }
  function so(l) {
    return l ? (l = da, l) : da;
  }
  function xv(l, n, u, i, s, r) {
    s = so(s), i.context === null ? i.context = s : i.pendingContext = s, i = fc(n), i.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (i.callback = r), u = ka(l, i, n), u !== null && (Ta(u, l, n), kc(u, l, n));
  }
  function xh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function by(l, n) {
    xh(l, n), (l = l.alternate) && xh(l, n);
  }
  function Gv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = lc(l, 67108864);
      n !== null && Ta(n, l, 67108864), by(l, 67108864);
    }
  }
  function ro(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ua();
      n = ed(n);
      var u = lc(l, n);
      u !== null && Ta(u, l, n), by(l, n);
    }
  }
  var _l = !0;
  function qu(l, n, u, i) {
    var s = _.T;
    _.T = null;
    var r = L.p;
    try {
      L.p = 2, kl(l, n, u, i);
    } finally {
      L.p = r, _.T = s;
    }
  }
  function xu(l, n, u, i) {
    var s = _.T;
    _.T = null;
    var r = L.p;
    try {
      L.p = 8, kl(l, n, u, i);
    } finally {
      L.p = r, _.T = s;
    }
  }
  function kl(l, n, u, i) {
    if (_l) {
      var s = Ey(i);
      if (s === null)
        ay(
          l,
          n,
          i,
          Gh,
          u
        ), bc(l, i);
      else if (c1(
        s,
        l,
        n,
        u,
        i
      ))
        i.stopPropagation();
      else if (bc(l, i), n & 4 && -1 < Oa.indexOf(l)) {
        for (; s !== null; ) {
          var r = Ti(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = De(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Ul(m);
                      g.entanglements[1] |= A, m &= ~A;
                    }
                    Yu(r), (yt & 6) === 0 && (St = vl() + 500, gc(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = lc(r, 2), g !== null && Ta(g, r, 2), Tf(), by(r, 2);
            }
          if (r = Ey(i), r === null && ay(
            l,
            n,
            i,
            Gh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else
        ay(
          l,
          n,
          i,
          null,
          u
        );
    }
  }
  function Ey(l) {
    return l = sd(l), qf(l);
  }
  var Gh = null;
  function qf(l) {
    if (Gh = null, l = Ei(l), l !== null) {
      var n = qe(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = vt(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = ee(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Gh = l, null;
  }
  function Dr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ir()) {
          case Co:
            return 2;
          case Uo:
            return 8;
          case Cn:
          case Pr:
            return 32;
          case Ho:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xf = !1, Rl = null, Wl = null, ua = null, di = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), Wt = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function bc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Wl = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        di.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(n.pointerId);
    }
  }
  function ho(l, n, u, i, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: i,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Ti(n), n !== null && Gv(n)), l) : (l.eventSystemFlags |= i, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function c1(l, n, u, i, s) {
    switch (n) {
      case "focusin":
        return Rl = ho(
          Rl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "dragenter":
        return Wl = ho(
          Wl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "mouseover":
        return ua = ho(
          ua,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return di.set(
          r,
          ho(
            di.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, zn.set(
          r,
          ho(
            zn.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function wv(l) {
    var n = Ei(l.target);
    if (n !== null) {
      var u = qe(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = vt(u), n !== null) {
            l.blockedOn = n, E0(l.priority, function() {
              ro(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = ee(u), n !== null) {
            l.blockedOn = n, E0(l.priority, function() {
              ro(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function _r(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Ey(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var i = new u.constructor(
          u.type,
          u
        );
        fd = i, u.target.dispatchEvent(i), fd = null;
      } else
        return n = Ti(u), n !== null && Gv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Gf(l, n, u) {
    _r(l) && u.delete(n);
  }
  function Xv() {
    xf = !1, Rl !== null && _r(Rl) && (Rl = null), Wl !== null && _r(Wl) && (Wl = null), ua !== null && _r(ua) && (ua = null), di.forEach(Gf), zn.forEach(Gf);
  }
  function Gu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, xf || (xf = !0, k.unstable_scheduleCallback(
      k.unstable_NormalPriority,
      Xv
    )));
  }
  var wf = null;
  function Qv(l) {
    wf !== l && (wf = l, k.unstable_scheduleCallback(
      k.unstable_NormalPriority,
      function() {
        wf === l && (wf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], i = l[n + 1], s = l[n + 2];
          if (typeof i != "function") {
            if (qf(i || u) === null)
              continue;
            break;
          }
          var r = Ti(u);
          r !== null && (l.splice(n, 3), n -= 3, ff(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function Xf(l) {
    function n(A) {
      return Gu(A, l);
    }
    Rl !== null && Gu(Rl, l), Wl !== null && Gu(Wl, l), ua !== null && Gu(ua, l), di.forEach(n), zn.forEach(n);
    for (var u = 0; u < Wt.length; u++) {
      var i = Wt[u];
      i.blockedOn === l && (i.blockedOn = null);
    }
    for (; 0 < Wt.length && (u = Wt[0], u.blockedOn === null); )
      wv(u), u.blockedOn === null && Wt.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (i = 0; i < u.length; i += 3) {
        var s = u[i], r = u[i + 1], m = s[fa] || null;
        if (typeof r == "function")
          m || Qv(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[fa] || null)
              g = m.formAction;
            else if (qf(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[i + 1] = g : (u.splice(i, 3), i -= 3), Qv(u);
        }
      }
  }
  function Ty() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), i || setTimeout(u, 20);
    }
    function u() {
      if (!i && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        i = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function wh(l) {
    this._internalRoot = l;
  }
  Xh.prototype.render = wh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(N(409));
    var u = n.current, i = Ua();
    xv(u, i, l, n, null, null);
  }, Xh.prototype.unmount = wh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      xv(l.current, 2, null, l, null, null), Tf(), n[Hc] = null;
    }
  };
  function Xh(l) {
    this._internalRoot = l;
  }
  Xh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = td();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Wt.length && n !== 0 && n < Wt[u].priority; u++) ;
      Wt.splice(u, 0, l), u === 0 && wv(l);
    }
  };
  var Ay = ae.version;
  if (Ay !== "19.2.3")
    throw Error(
      N(
        527,
        Ay,
        "19.2.3"
      )
    );
  L.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(N(188)) : (l = Object.keys(l).join(","), Error(N(268, l)));
    return l = $(n), l = l !== null ? He(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Lv = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rr.isDisabled && Rr.supportsFiber)
      try {
        rn = Rr.inject(
          Lv
        ), Al = Rr;
      } catch {
      }
  }
  return vp.createRoot = function(l, n) {
    if (!Ce(l)) throw Error(N(299));
    var u = !1, i = "", s = Id, r = Om, m = Pd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = qh(
      l,
      1,
      !1,
      null,
      null,
      u,
      i,
      null,
      s,
      r,
      m,
      Ty
    ), l[Hc] = n.current, Rf(l), new wh(n);
  }, vp.hydrateRoot = function(l, n, u) {
    if (!Ce(l)) throw Error(N(299));
    var i = !1, s = "", r = Id, m = Om, g = Pd, A = null;
    return u != null && (u.unstable_strictMode === !0 && (i = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = qh(
      l,
      1,
      !0,
      n,
      u ?? null,
      i,
      s,
      A,
      r,
      m,
      g,
      Ty
    ), n.context = so(null), u = n.current, i = Ua(), i = ed(i), s = fc(i), s.callback = null, ka(u, s, i), u = i, n.current.lanes = u, Uc(n, u), Yu(n), l[Hc] = n.current, Rf(l), new Xh(n);
  }, vp.version = "19.2.3", vp;
}
var gp = {};
var Qb;
function D3() {
  return Qb || (Qb = 1, process.env.NODE_ENV !== "production" && (function() {
    function k(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function ae(e, t, a, c) {
      if (a >= t.length) return c;
      var o = t[a], f = bl(e) ? e.slice() : ke({}, e);
      return f[o] = ae(e[o], t, a + 1, c), f;
    }
    function $e(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var c = 0; c < a.length - 1; c++)
          if (t[c] !== a[c]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return N(e, t, a, 0);
      }
    }
    function N(e, t, a, c) {
      var o = t[c], f = bl(e) ? e.slice() : ke({}, e);
      return c + 1 === t.length ? (f[a[c]] = f[o], bl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = N(
        e[o],
        t,
        a,
        c + 1
      ), f;
    }
    function Ce(e, t, a) {
      var c = t[a], o = bl(e) ? e.slice() : ke({}, e);
      return a + 1 === t.length ? (bl(o) ? o.splice(c, 1) : delete o[c], o) : (o[c] = Ce(e[c], t, a + 1), o);
    }
    function qe() {
      return !1;
    }
    function vt() {
      return null;
    }
    function ee() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function ne() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function $() {
    }
    function He() {
    }
    function X(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function U(e, t, a, c) {
      return new Ig(e, t, a, c);
    }
    function ce(e, t) {
      e.context === Zf && (zh(e.current, 2, t, e, null, null), en());
    }
    function Le(e, t) {
      if (Qu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, ur(), Bp(
          e.current,
          t,
          a
        ), en();
      }
    }
    function _t(e) {
      Qu = e;
    }
    function ft(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function lt(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Tl(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Bt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Jt(e) {
      if (lt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function el(e) {
      var t = e.alternate;
      if (!t) {
        if (t = lt(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, c = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (c = o.return, c !== null) {
            a = c;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Jt(o), e;
            if (f === c) return Jt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== c.return) a = o, c = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, c = f;
              break;
            }
            if (h === c) {
              d = !0, c = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, c = o;
                break;
              }
              if (h === c) {
                d = !0, c = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== c)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ul(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ul(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ze(e) {
      return e === null || typeof e != "object" ? null : (e = jv && e[jv] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ve(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Hf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Cf:
          return "Fragment";
        case Tr:
          return "Profiler";
        case Aa:
          return "StrictMode";
        case oo:
          return "Suspense";
        case Ha:
          return "SuspenseList";
        case Pn:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case fi:
            return "Portal";
          case In:
            return e.displayName || "Context";
          case Ch:
            return (e._context.displayName || "Context") + ".Consumer";
          case Uf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Ar:
            return t = e.displayName || null, t !== null ? t : Ve(e.type) || "Memo";
          case na:
            t = e._payload, e = e._init;
            try {
              return Ve(e(t));
            } catch {
            }
        }
      return null;
    }
    function Dt(e) {
      return typeof e.tag == "number" ? se(e) : typeof e.name == "string" ? e.name : null;
    }
    function se(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ve(t);
        case 8:
          return t === Aa ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return se(e.return);
      }
      return null;
    }
    function Yt(e) {
      return { current: e };
    }
    function ye(e, t) {
      0 > Sc ? console.error("Unexpected pop.") : (t !== my[Sc] && console.error("Unexpected Fiber popped."), e.current = hy[Sc], hy[Sc] = null, my[Sc] = null, Sc--);
    }
    function je(e, t, a) {
      Sc++, hy[Sc] = e.current, my[Sc] = a, e.current = t;
    }
    function Qt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function jt(e, t) {
      je(ln, t, e), je(Nf, e, e), je(si, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? fv(t) : _o;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = fv(t), t = pc(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = v0;
                break;
              case "math":
                t = Bg;
                break;
              default:
                t = _o;
            }
      }
      a = a.toLowerCase(), a = z0(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ye(si, e), je(si, a, e);
    }
    function _(e) {
      ye(si, e), ye(Nf, e), ye(ln, e);
    }
    function L() {
      return Qt(si.current);
    }
    function P(e) {
      e.memoizedState !== null && je(ri, e, e);
      var t = Qt(si.current), a = e.type, c = pc(t.context, a);
      a = z0(t.ancestorInfo, a), c = { context: c, ancestorInfo: a }, t !== c && (je(Nf, e, e), je(si, c, e));
    }
    function pe(e) {
      Nf.current === e && (ye(si, e), ye(Nf, e)), ri.current === e && (ye(ri, e), dp._currentValue = Fr);
    }
    function Ae() {
    }
    function S() {
      if (Bf === 0) {
        qv = console.log, fo = console.info, Yf = console.warn, yy = console.error, Or = console.group, Uh = console.groupCollapsed, Hh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ae,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Bf++;
    }
    function B() {
      if (Bf--, Bf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ke({}, e, { value: qv }),
          info: ke({}, e, { value: fo }),
          warn: ke({}, e, { value: Yf }),
          error: ke({}, e, { value: yy }),
          group: ke({}, e, { value: Or }),
          groupCollapsed: ke({}, e, { value: Uh }),
          groupEnd: ke({}, e, { value: Hh })
        });
      }
      0 > Bf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function F(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function W(e) {
      if (jf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          jf = t && t[1] || "", py = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + jf + e + py;
    }
    function ge(e, t) {
      if (!e || Nh) return "";
      var a = vy.get(e);
      if (a !== void 0) return a;
      Nh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var c = null;
      c = G.H, G.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var E = function() {
                  throw Error();
                };
                if (Object.defineProperty(E.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(E, []);
                  } catch (le) {
                    var q = le;
                  }
                  Reflect.construct(e, [], E);
                } else {
                  try {
                    E.call();
                  } catch (le) {
                    q = le;
                  }
                  e.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (le) {
                  q = le;
                }
                (E = e()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (le) {
              if (le && q && typeof le.stack == "string")
                return [le.stack, q.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), z = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < z.length && !z[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === z.length)
            for (f = p.length - 1, d = z.length - 1; 1 <= f && 0 <= d && p[f] !== z[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== z[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== z[d]) {
                    var R = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && vy.set(e, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Nh = !1, G.H = c, B(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? W(p) : "", typeof e == "function" && vy.set(e, p), p;
    }
    function xe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return W(e.type);
        case 16:
          return W("Lazy");
        case 13:
          return e.child !== t && t !== null ? W("Suspense Fallback") : W("Suspense");
        case 19:
          return W("SuspenseList");
        case 0:
        case 15:
          return ge(e.type, !1);
        case 11:
          return ge(e.type.render, !1);
        case 1:
          return ge(e.type, !0);
        case 31:
          return W("Activity");
        default:
          return "";
      }
    }
    function Ee(e) {
      try {
        var t = "", a = null;
        do {
          t += xe(e, a);
          var c = e._debugInfo;
          if (c)
            for (var o = c.length - 1; 0 <= o; o--) {
              var f = c[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var z = F(p), R = z.lastIndexOf(`
`), E = R === -1 ? z : z.slice(R + 1);
                    if (E.indexOf(h) !== -1) {
                      var q = `
` + E;
                      break e;
                    }
                  }
                  q = W(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + q;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (le) {
        return `
Error generating stack: ` + le.message + `
` + le.stack;
      }
    }
    function Lt(e) {
      return (e = e ? e.displayName || e.name : "") ? W(e) : "";
    }
    function ht() {
      if (Na === null) return null;
      var e = Na._debugOwner;
      return e != null ? Dt(e) : null;
    }
    function qa() {
      if (Na === null) return "";
      var e = Na;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += W(e.type);
            break;
          case 13:
            t += W("Suspense");
            break;
          case 19:
            t += W("SuspenseList");
            break;
          case 31:
            t += W("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Lt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Lt(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var c = a._debugStack;
            if (e && c) {
              var o = F(c);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + F(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function ie(e, t, a, c, o, f, d) {
      var h = Na;
      _c(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, c, o, f, d)
        ) : t(a, c, o, f, d);
      } finally {
        _c(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function _c(e) {
      G.getCurrentStack = e === null ? null : qa, ju = !1, Na = e;
    }
    function Rc(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function xa(e) {
      try {
        return cu(e), !1;
      } catch {
        return !0;
      }
    }
    function cu(e) {
      return "" + e;
    }
    function mt(e, t) {
      if (xa(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Rc(e)
        ), cu(e);
    }
    function Pl(e, t) {
      if (xa(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Rc(e)
        ), cu(e);
    }
    function gi(e) {
      if (xa(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Rc(e)
        ), cu(e);
    }
    function rs(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ro = t.inject(e), _l = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function re(e) {
      if (typeof by == "function" && Gv(e), _l && typeof _l.setStrictMode == "function")
        try {
          _l.setStrictMode(ro, e);
        } catch (t) {
          qu || (qu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Mc(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ey(e) / Gh | 0) | 0;
    }
    function iu(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Si(e, t, a) {
      var c = e.pendingLanes;
      if (c === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = c & 134217727;
      return h !== 0 ? (c = h & ~f, c !== 0 ? o = iu(c) : (d &= h, d !== 0 ? o = iu(d) : a || (a = h & ~e, a !== 0 && (o = iu(a))))) : (h = c & ~f, h !== 0 ? o = iu(h) : d !== 0 ? o = iu(d) : a || (a = c & ~e, a !== 0 && (o = iu(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function vl(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ir(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Co() {
      var e = xf;
      return xf <<= 1, (xf & 62914560) === 0 && (xf = 4194304), e;
    }
    function Uo(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Cn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Pr(e, t, a, c, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var z = 31 - kl(a), R = 1 << z;
        h[z] = 0, y[z] = -1;
        var E = p[z];
        if (E !== null)
          for (p[z] = null, z = 0; z < E.length; z++) {
            var q = E[z];
            q !== null && (q.lane &= -536870913);
          }
        a &= ~R;
      }
      c !== 0 && Ho(e, c, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Ho(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var c = 31 - kl(t);
      e.entangledLanes |= t, e.entanglements[c] = e.entanglements[c] | 1073741824 | a & 261930;
    }
    function ds(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var c = 31 - kl(a), o = 1 << c;
        o & t | e[c] & t && (e[c] |= t), a &= ~o;
      }
    }
    function bi(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : rn(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function rn(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Al(e, t, a) {
      if (xu)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var c = 31 - kl(a), o = 1 << c;
          e[c].add(t), a &= ~o;
        }
    }
    function Ga(e, t) {
      if (xu)
        for (var a = e.pendingUpdatersLaneMap, c = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - kl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && c.has(d) || c.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Ul(e) {
      return e &= -e, Rl < e ? Wl < e ? (e & 134217727) !== 0 ? ua : di : Wl : Rl;
    }
    function Cc() {
      var e = bt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? ua : _h(e.type));
    }
    function v(e, t) {
      var a = bt.p;
      try {
        return bt.p = e, t();
      } finally {
        bt.p = a;
      }
    }
    function M(e) {
      delete e[Wt], delete e[Oa], delete e[ho], delete e[c1], delete e[wv];
    }
    function I(e) {
      var t = e[Wt];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[bc] || a[Wt]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = no(e); e !== null; ) {
              if (a = e[Wt])
                return a;
              e = no(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function te(e) {
      if (e = e[Wt] || e[bc]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function de(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function De(e) {
      var t = e[_r];
      return t || (t = e[_r] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function he(e) {
      e[Gf] = !0;
    }
    function Pe(e, t) {
      Ge(e, t), Ge(e + "Capture", t);
    }
    function Ge(e, t) {
      Gu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Gu[e] = t;
      var a = e.toLowerCase();
      for (wf[a] = e, e === "onDoubleClick" && (wf.ondblclick = e), e = 0; e < t.length; e++)
        Xv.add(t[e]);
    }
    function ea(e, t) {
      Qv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function dn(e) {
      return an.call(wh, e) ? !0 : an.call(Ty, e) ? !1 : Xf.test(e) ? wh[e] = !0 : (Ty[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Uc(e, t, a) {
      if (dn(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (mt(a, t), e === "" + a ? a : e);
      }
    }
    function No(e, t, a) {
      if (dn(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var c = t.toLowerCase().slice(0, 5);
              if (c !== "data-" && c !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          mt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function hs(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        mt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function ou(e, t, a, c) {
      if (c === null) e.removeAttribute(a);
      else {
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        mt(c, a), e.setAttributeNS(t, a, "" + c);
      }
    }
    function wa(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return gi(e), e;
        default:
          return "";
      }
    }
    function ed(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function b0(e, t, a) {
      var c = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
        var o = c.get, f = c.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            gi(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: c.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            gi(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function td(e) {
      if (!e._valueTracker) {
        var t = ed(e) ? "checked" : "value";
        e._valueTracker = b0(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function E0(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), c = "";
      return e && (c = ed(e) ? e.checked ? "true" : "false" : e.value), e = c, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Un(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Rt(e) {
      return e.replace(
        Xh,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function fa(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Lv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component",
        t.type
      ), Lv = !0), t.value === void 0 || t.defaultValue === void 0 || Ay || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component",
        t.type
      ), Ay = !0);
    }
    function Hc(e, t, a, c, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (mt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wa(t)) : e.value !== "" + wa(t) && (e.value = "" + wa(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? T0(e, d, wa(t)) : a != null ? T0(e, d, wa(a)) : c != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (mt(h, "name"), e.name = "" + wa(h)) : e.removeAttribute("name");
    }
    function ld(e, t, a, c, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (mt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          td(e);
          return;
        }
        a = a != null ? "" + wa(a) : "", t = t != null ? "" + wa(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      c = c ?? o, c = typeof c != "function" && typeof c != "symbol" && !!c, e.checked = h ? e.checked : !!c, e.defaultChecked = !!c, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (mt(d, "name"), e.name = d), td(e);
    }
    function T0(e, t, a) {
      t === "number" && Un(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function bp(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Er.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Rr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Rr = !0);
    }
    function A0() {
      var e = ht();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function fu(e, t, a, c) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && c && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + wa(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, c && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function ad(e, t) {
      for (e = 0; e < i.length; e++) {
        var a = i[e];
        if (t[a] != null) {
          var c = bl(t[a]);
          t.multiple && !c ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            A0()
          ) : !t.multiple && c && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            A0()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Ei(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ti(e, t, a) {
      if (t != null && (t = "" + wa(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + wa(a) : "";
    }
    function Bo(e, t, a, c) {
      if (t == null) {
        if (c != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (bl(c)) {
            if (1 < c.length)
              throw Error("<textarea> can only have at most one child.");
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), t = a;
      }
      a = wa(t), e.defaultValue = a, c = e.textContent, c === a && c !== "" && c !== null && (e.value = c), td(e);
    }
    function Ai(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Ai(e.children[0], t) : e;
    }
    function Et(e) {
      return "  " + "  ".repeat(e);
    }
    function Oi(e) {
      return "+ " + "  ".repeat(e);
    }
    function Nc(e) {
      return "- " + "  ".repeat(e);
    }
    function Bc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function su(e, t) {
      return r.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function nd(e, t, a) {
      var c = 120 - 2 * a;
      if (t === null)
        return Oi(a) + su(e, c) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > c - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Oi(a) + su(e, c) + `
` + Nc(a) + su(t, c) + `
`;
      }
      return Et(a) + su(e, c) + `
`;
    }
    function ud(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Yo(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (bl(e)) return "[...]";
          if (e.$$typeof === On)
            return (t = Ve(e.type)) ? "<" + t + ">" : "<...>";
          var a = ud(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var c in e)
              if (e.hasOwnProperty(c)) {
                var o = JSON.stringify(c);
                if (o !== '"' + c + '"' && (c = o), t -= c.length - 2, o = Yo(
                  e[c],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + c + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function jo(e, t) {
      return typeof e != "string" || r.test(e) ? "{" + Yo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function qo(e, t, a) {
      var c = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = jo(
            t[f],
            120 - a.length - f.length - 1
          );
          c -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < c ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function cd(e, t, a) {
      var c = "", o = ke({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Yo(e[f], d);
          t.hasOwnProperty(f) ? (d = Yo(t[f], d), c += Oi(a) + f + ": " + h + `
`, c += Nc(a) + f + ": " + d + `
`) : c += Oi(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), c += Nc(a) + y + ": " + e + `
`);
      return c;
    }
    function Iu(e, t, a, c) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += qo(
          e,
          t,
          Et(c)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (c + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var z = jo(
                p,
                h
              );
              h = jo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && ud(p) === "Object" && ud(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < z.indexOf("...") || -1 < h.indexOf("...")) ? o += Et(c + 1) + d + `={{
` + cd(
                p,
                y,
                c + 2
              ) + Et(c + 1) + `}}
` : (o += Oi(c + 1) + d + "=" + z + `
`, o += Nc(c + 1) + d + "=" + h + `
`);
            } else
              o += Et(c + 1) + d + "=" + jo(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var E = 120 - 2 * (c + 1) - R.length - 1;
            o += Nc(c + 1) + R + "=" + jo(a[R], E) + `
`;
          }
        }), o = o === "" ? Et(c) + "<" + e + `>
` : Et(c) + "<" + e + `
` + o + Et(c) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += nd(f, "" + e, c + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + nd("" + t, null, c + 1) : o + nd("" + t, void 0, c + 1)), o;
    }
    function Xa(e, t) {
      var a = Bc(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Xa(e, t), e = e.sibling;
        return a;
      }
      return Et(t) + "<" + a + `>
`;
    }
    function id(e, t) {
      var a = Ai(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Et(t) + `...
` + id(a, t + 1);
      a = "";
      var c = e.fiber._debugInfo;
      if (c)
        for (var o = 0; o < c.length; o++) {
          var f = c[o].name;
          typeof f == "string" && (a += Et(t) + "<" + f + `>
`, t++);
        }
      if (c = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        c = nd(o, e.serverProps, t), t++;
      else if (f = Bc(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          c = t;
          var d = 120 - 2 * c - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = jo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          c = Et(c) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (c = qo(
            f,
            o,
            Oi(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (c = Iu(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += id(d, t), f++) : p += Xa(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Et(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Nc(t) + su(f, 120 - 2 * t) + `
`) : p + qo(
          f.type,
          f.props,
          Nc(t)
        );
      return a + c + p;
    }
    function O0(e) {
      try {
        return `

` + id(e, 0);
      } catch {
        return "";
      }
    }
    function od(e, t, a) {
      for (var c = t, o = null, f = 0; c; )
        c === e && (f = 0), o = {
          fiber: c,
          children: o !== null ? [o] : [],
          serverProps: c === t ? a : c === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, c = c.return;
      return o !== null ? O0(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function z0(e, t) {
      var a = ke({}, e || Q), c = { tag: t };
      return g.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = c, t === "form" && (a.formTag = c), t === "a" && (a.aTagInScope = c), t === "button" && (a.buttonTagInScope = c), t === "nobr" && (a.nobrTagInScope = c), t === "p" && (a.pTagInButtonScope = c), t === "li" && (a.listItemTagAutoclosing = c), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = c), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = c), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ms(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Y.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Jg(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Qa(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function ys(e, t) {
      t = t || Q;
      var a = t.current;
      if (t = (a = ms(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Jg(e, t), t = a || t, !t) return !0;
      var c = t.tag;
      if (t = String(!!a) + "|" + e + "|" + c, J[t]) return !1;
      J[t] = !0;
      var o = (t = Na) ? Qa(t.return, c) : null, f = t !== null && o !== null ? od(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", c === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        c,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        c,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ie(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          c,
          d
        );
      })), !1;
    }
    function ps(e, t, a) {
      if (a || ms("#text", t, !1))
        return !0;
      if (a = "#text|" + t, J[a]) return !1;
      J[a] = !0;
      var c = (a = Na) ? Qa(a, t) : null;
      return a = a !== null && c !== null ? od(
        c,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function zi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function xo(e) {
      return e.replace(C, function(t, a) {
        return a.toUpperCase();
      });
    }
    function D0(e, t, a) {
      var c = t.indexOf("--") === 0;
      c || (-1 < t.indexOf("-") ? H.hasOwnProperty(t) && H[t] || (H[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        xo(t.replace(Ht, "ms-"))
      )) : Oe.test(t) ? H.hasOwnProperty(t) && H[t] || (H[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !D.test(a) || Z.hasOwnProperty(a) && Z[a] || (Z[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(D, "")
      )), typeof a == "number" && (isNaN(a) ? Se || (Se = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || rt || (rt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? c ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : c ? e.setProperty(t, a) : typeof a != "number" || a === 0 || me.has(t) ? t === "float" ? e.cssFloat = a : (Pl(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function _0(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var c = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = j[o] || [o], d = 0; d < f.length; d++)
                  c[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = j[h] || [h], f = 0; f < o.length; f++)
                c[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = j[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in c)
            if (o = c[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var z = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                z == null || typeof z == "boolean" || z === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var R in a)
          !a.hasOwnProperty(R) || t != null && t.hasOwnProperty(R) || (R.indexOf("--") === 0 ? e.setProperty(R, "") : R === "float" ? e.cssFloat = "" : e[R] = "");
        for (var E in t)
          p = t[E], t.hasOwnProperty(E) && a[E] !== p && D0(e, E, p);
      } else
        for (c in t)
          t.hasOwnProperty(c) && D0(e, c, t[c]);
    }
    function ru(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Ep(e) {
      return pt.get(e) || e;
    }
    function Tp(e, t) {
      if (an.call(Qh, t) && Qh[t])
        return !0;
      if (kb.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Vv.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Qh[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Qh[t] = !0;
      }
      if ($b.test(t)) {
        if (e = t.toLowerCase(), e = Vv.hasOwnProperty(e) ? e : null, e == null) return Qh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Qh[t] = !0);
      }
      return !0;
    }
    function Ap(e, t) {
      var a = [], c;
      for (c in t)
        Tp(e, c) || a.push(c);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function R0(e, t, a, c) {
      if (an.call(nn, t) && nn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), nn[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (c != null) {
        if (e = c.possibleRegistrationNames, c.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (c = e.hasOwnProperty(o) ? e[o] : null, c != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            c
          ), nn[t] = !0;
        if (b2.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), nn[t] = !0;
      } else if (b2.test(t))
        return Wb.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), nn[t] = !0;
      if (Fb.test(t) || Ib.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), nn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), nn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), nn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), nn[t] = !0;
      if (eu.hasOwnProperty(o)) {
        if (o = eu[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), nn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), nn[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), nn[t] = !0);
          }
        case "function":
        case "symbol":
          return nn[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), nn[t] = !0;
          }
      }
      return !0;
    }
    function Kg(e, t, a) {
      var c = [], o;
      for (o in t)
        R0(e, o, t[o], a) || c.push(o);
      t = c.map(function(f) {
        return "`" + f + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < c.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function vs(e) {
      return Pb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function hn() {
    }
    function Hn(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function fd(e) {
      var t = te(e);
      if (t && (e = t.stateNode)) {
        var a = e[Oa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Hc(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (mt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Rt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var c = a[t];
                if (c !== e && c.form === e.form) {
                  var o = c[Oa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Hc(
                    c,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                c = a[t], c.form === e.form && E0(c);
            }
            break e;
          case "textarea":
            Ti(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && fu(e, !!a.multiple, t, !1);
        }
      }
    }
    function sd(e, t, a) {
      if (i1) return e(t, a);
      i1 = !0;
      try {
        var c = e(t);
        return c;
      } finally {
        if (i1 = !1, (Lh !== null || Vh !== null) && (en(), Lh && (t = Lh, e = Vh, Vh = Lh = null, fd(t), e)))
          for (t = 0; t < e.length; t++) fd(e[t]);
      }
    }
    function du(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var c = a[Oa] || null;
      if (c === null) return null;
      a = c[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (c = !c.disabled) || (e = e.type, c = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !c;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Di() {
      if (Zv) return Zv;
      var e, t = f1, a = t.length, c, o = "value" in Qf ? Qf.value : Qf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (c = 1; c <= d && t[a - c] === o[f - c]; c++) ;
      return Zv = o.slice(e, 1 < c ? 1 - c : void 0);
    }
    function gs(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Go() {
      return !0;
    }
    function M0() {
      return !1;
    }
    function Hl(e) {
      function t(a, c, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = c, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Go : M0, this.isPropagationStopped = M0, this;
      }
      return ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Go);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Go);
        },
        persist: function() {
        },
        isPersistent: Go
      }), t;
    }
    function Pu(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = dE[e]) ? !!t[e] : !1;
    }
    function Ss() {
      return Pu;
    }
    function wo(e, t) {
      switch (e) {
        case "keyup":
          return OE.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== O2;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ec(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function C0(e, t) {
      switch (e) {
        case "compositionend":
          return ec(t);
        case "keypress":
          return t.which !== D2 ? null : (R2 = !0, _2);
        case "textInput":
          return e = t.data, e === _2 && R2 ? null : e;
        default:
          return null;
      }
    }
    function rd(e, t) {
      if (Zh)
        return e === "compositionend" || !h1 && wo(e, t) ? (e = Di(), Zv = f1 = Qf = null, Zh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return z2 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function U0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!DE[e.type] : t === "textarea";
    }
    function dd(e) {
      if (!hi) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function bs(e, t, a, c) {
      Lh ? Vh ? Vh.push(c) : Vh = [c] : Lh = c, t = kn(t, "onChange"), 0 < t.length && (a = new Jv(
        "onChange",
        "change",
        null,
        a,
        c
      ), e.push({ event: a, listeners: t }));
    }
    function Op(e) {
      Ot(e, 0);
    }
    function Kl(e) {
      var t = de(e);
      if (E0(t)) return e;
    }
    function Yc(e, t) {
      if (e === "change") return t;
    }
    function Es() {
      My && (My.detachEvent("onpropertychange", Xo), Cy = My = null);
    }
    function Xo(e) {
      if (e.propertyName === "value" && Kl(Cy)) {
        var t = [];
        bs(
          t,
          Cy,
          e,
          Hn(e)
        ), sd(Op, t);
      }
    }
    function $g(e, t, a) {
      e === "focusin" ? (Es(), My = t, Cy = a, My.attachEvent("onpropertychange", Xo)) : e === "focusout" && Es();
    }
    function H0(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Kl(Cy);
    }
    function N0(e, t) {
      if (e === "click") return Kl(t);
    }
    function Ts(e, t) {
      if (e === "input" || e === "change")
        return Kl(t);
    }
    function hd(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Qo(e, t) {
      if (un(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), c = Object.keys(t);
      if (a.length !== c.length) return !1;
      for (c = 0; c < a.length; c++) {
        var o = a[c];
        if (!an.call(t, o) || !un(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function zp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Dp(e, t) {
      var a = zp(e);
      e = 0;
      for (var c; a; ) {
        if (a.nodeType === 3) {
          if (c = e + a.textContent.length, e <= t && c >= t)
            return { node: a, offset: t - e };
          e = c;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = zp(a);
      }
    }
    function _p(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _p(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function md(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Un(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Un(e.document);
      }
      return t;
    }
    function B0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Rp(e, t, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      y1 || Jh == null || Jh !== Un(c) || (c = Jh, "selectionStart" in c && B0(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), Uy && Qo(Uy, c) || (Uy = c, c = kn(m1, "onSelect"), 0 < c.length && (t = new Jv(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: c }), t.target = Jh)));
    }
    function _i(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Ri(e) {
      if (p1[e]) return p1[e];
      if (!Kh[e]) return e;
      var t = Kh[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in C2)
          return p1[e] = t[a];
      return e;
    }
    function Nn(e, t) {
      Y2.set(e, t), Pe(t, [e]);
    }
    function Mp(e) {
      for (var t = $v, a = 0; a < e.length; a++) {
        var c = e[a];
        if (typeof c == "object" && c !== null)
          if (bl(c) && c.length === 2 && typeof c[0] == "string") {
            if (t !== $v && t !== E1)
              return S1;
            t = E1;
          } else return S1;
        else {
          if (typeof c == "function" || typeof c == "string" && 50 < c.length || t !== $v && t !== b1)
            return S1;
          t = b1;
        }
      }
      return t;
    }
    function Y0(e, t, a, c) {
      for (var o in e)
        an.call(e, o) && o[0] !== "_" && hu(o, e[o], t, a, c);
    }
    function hu(e, t, a, c, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === On) {
              var f = Ve(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > c || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(c) + e,
                "<" + f
              ]), d !== null && hu(
                "key",
                d,
                a,
                c + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!bl(t.children) || 0 < t.children.length) && (e = !0) : an.call(t, p) && p[0] !== "_" && hu(
                  p,
                  t[p],
                  a,
                  c + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Mp(t), p === b1 || p === $v) {
                t = JSON.stringify(t);
                break;
              } else if (p === E1) {
                for (a.push([
                  o + "  ".repeat(c) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], hu(
                    f[0],
                    f[1],
                    a,
                    c + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, hu(
                  e,
                  t.value,
                  a,
                  c,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, hu(
                e,
                t.reason,
                a,
                c,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(c) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(c) + e,
              f === "Object" ? 3 > c ? "" : "…" : f
            ]), 3 > c && Y0(t, a, c + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === NE ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(c) + e,
        t
      ]);
    }
    function Cp(e, t, a, c) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          kv + "  ".repeat(c) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (c === 0 && f === "children")
              o = "  ".repeat(c) + f, a.push(
                [kv + o, "…"],
                [Wv + o, "…"]
              );
            else {
              if (!(3 <= c)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === On) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Ve(h.type) || "…", o = "  ".repeat(c) + f, d = "<" + d + " … />", a.push(
                        [kv + o, d],
                        [Wv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        x2 + "  ".repeat(c) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Cp(
                        d,
                        h,
                        a,
                        c + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    x2 + "  ".repeat(c) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              hu(f, d, a, c, kv), hu(f, h, a, c, Wv);
            }
            o = !1;
          }
        } else
          a.push([
            Wv + "  ".repeat(c) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Bn(e) {
      st = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function mn(e, t, a, c) {
      Ft && (Vf.start = t, Vf.end = a, mo.color = "warning", mo.tooltipText = c, mo.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          c,
          Vf
        )
      ) : performance.measure(c, Vf));
    }
    function yd(e, t, a) {
      mn(e, t, a, "Reconnect");
    }
    function pd(e, t, a, c, o) {
      var f = se(e);
      if (f !== null && Ft) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        c = 0.5 > h ? c ? "tertiary-light" : "primary-light" : 10 > h ? c ? "tertiary" : "primary" : 100 > h ? c ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [BE], p = Cp(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Lf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Lf = !0, y[0] = YE, mo.color = "warning", mo.tooltipText = G2) : (mo.color = c, mo.tooltipText = f), mo.properties = y, Vf.start = t, Vf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Vf
          )
        ) : performance.measure(
          "​" + f,
          Vf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            wu,
            void 0,
            c
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          wu,
          void 0,
          c
        );
      }
    }
    function j0(e, t, a, c) {
      if (Ft) {
        var o = se(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < c.length; h++) {
            var y = c[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && hu("key", e.key, d, 0, ""), e.memoizedProps !== null && Y0(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: wu,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function Yn(e, t, a, c, o) {
      if (o !== null) {
        if (Ft) {
          var f = se(e);
          if (f !== null) {
            c = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              c.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && hu("key", e.key, c, 0, ""), e.memoizedProps !== null && Y0(e.memoizedProps, c, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: wu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: c
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = se(e), f !== null && Ft && (o = 1 > c ? "secondary-light" : 100 > c ? "secondary" : 500 > c ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            wu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          wu,
          void 0,
          o
        ));
    }
    function kg(e, t, a, c) {
      if (Ft && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", c ? c.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            st,
            it,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          st,
          it,
          o
        );
      }
    }
    function Up(e, t, a, c) {
      !Ft || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          st,
          it,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        st,
        it,
        a
      ));
    }
    function Hp(e, t, a, c) {
      !Ft || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          st,
          it,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        st,
        it,
        a
      ));
    }
    function Wg(e, t, a, c, o, f) {
      if (Ft && !(t <= e)) {
        a = [];
        for (var d = 0; d < c.length; d++) {
          var h = c[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: st,
              trackGroup: it,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function q0(e, t, a, c) {
      !Ft || t <= e || (c ? c.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          st,
          it,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        st,
        it,
        "error"
      ));
    }
    function Fg(e, t, a, c) {
      !Ft || t <= e || (c ? c.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          st,
          it,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        st,
        it,
        "secondary-light"
      ));
    }
    function Np(e, t, a, c, o) {
      if (Ft && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: st,
              trackGroup: it,
              tooltipText: c ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function x0(e, t, a) {
      !Ft || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        st,
        it,
        "secondary-dark"
      );
    }
    function vd() {
      for (var e = $h, t = T1 = $h = 0; t < e; ) {
        var a = Xu[t];
        Xu[t++] = null;
        var c = Xu[t];
        Xu[t++] = null;
        var o = Xu[t];
        Xu[t++] = null;
        var f = Xu[t];
        if (Xu[t++] = null, c !== null && o !== null) {
          var d = c.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), c.pending = o;
        }
        f !== 0 && G0(a, o, f);
      }
    }
    function Lo(e, t, a, c) {
      Xu[$h++] = e, Xu[$h++] = t, Xu[$h++] = a, Xu[$h++] = c, T1 |= c, e.lanes |= c, e = e.alternate, e !== null && (e.lanes |= c);
    }
    function Mi(e, t, a, c) {
      return Lo(e, t, a, c), As(e);
    }
    function ta(e, t) {
      return Lo(e, null, null, t), As(e);
    }
    function G0(e, t, a) {
      e.lanes |= a;
      var c = e.alternate;
      c !== null && (c.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, c = f.alternate, c !== null && (c.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Hy || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - kl(a), e = f.hiddenUpdates, c = e[o], c === null ? e[o] = [t] : c.push(t), t.lane = a | 536870912), f) : null;
    }
    function As(e) {
      if (up > FE)
        throw Zr = up = 0, cp = t2 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Zr > IE && (Zr = 0, cp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && An(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && An(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function jc(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e : t.current;
    }
    function gd(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = jc(e.render), e.render !== t) ? (t = { $$typeof: Uf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function w0(e, t) {
      if (Qu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var c = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (c = !0);
          break;
        case 0:
          (typeof t == "function" || o === na) && (c = !0);
          break;
        case 11:
          (o === Uf || o === na) && (c = !0);
          break;
        case 14:
        case 15:
          (o === Ar || o === na) && (c = !0);
          break;
        default:
          return !1;
      }
      return !!(c && (e = Qu(a), e !== void 0 && e === Qu(t)));
    }
    function Ci(e) {
      Qu !== null && typeof WeakSet == "function" && (kh === null && (kh = /* @__PURE__ */ new WeakSet()), kh.add(e));
    }
    function Bp(e, t, a) {
      do {
        var c = e, o = c.alternate, f = c.child, d = c.sibling, h = c.tag;
        c = c.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = c;
            break;
          case 11:
            y = c.render;
        }
        if (Qu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (c = !1, y !== null && (y = Qu(y), y !== void 0 && (a.has(y) ? c = !0 : t.has(y) && (h === 1 ? c = !0 : p = !0))), kh !== null && (kh.has(e) || o !== null && kh.has(o)) && (c = !0), c && (e._debugNeedsRemount = !0), (c || p) && (o = ta(e, 2), o !== null && Ue(o, e, 2)), f === null || c || Bp(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Ig(e, t, a, c) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, w2 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function X0(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function mu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = U(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = jc(e.type);
          break;
        case 1:
          a.type = jc(e.type);
          break;
        case 11:
          a.type = gd(e.type);
      }
      return a;
    }
    function Q0(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Ui(e, t, a, c, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        X0(e) && (d = 1), h = jc(h);
      else if (typeof e == "string")
        d = L(), d = Mv(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Pn:
            return t = U(31, a, t, o), t.elementType = Pn, t.lanes = f, t;
          case Cf:
            return Hi(
              a.children,
              o,
              f,
              t
            );
          case Aa:
            d = 8, o |= Ba, o |= Ec;
            break;
          case Tr:
            return e = a, c = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = U(12, e, t, c | We), t.elementType = Tr, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case oo:
            return t = U(13, a, t, o), t.elementType = oo, t.lanes = f, t;
          case Ha:
            return t = U(19, a, t, o), t.elementType = Ha, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case In:
                  d = 10;
                  break e;
                case Ch:
                  d = 9;
                  break e;
                case Uf:
                  d = 11, h = gd(h);
                  break e;
                case Ar:
                  d = 14;
                  break e;
                case na:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : bl(e) ? a = "array" : e !== void 0 && e.$$typeof === On ? (a = "<" + (Ve(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = c ? Dt(c) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = U(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = c, t;
    }
    function qc(e, t, a) {
      return t = Ui(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Hi(e, t, a, c) {
      return e = U(7, e, c, t), e.lanes = a, e;
    }
    function Vo(e, t, a) {
      return e = U(6, e, null, t), e.lanes = a, e;
    }
    function L0(e) {
      var t = U(18, null, null, Me);
      return t.stateNode = e, t;
    }
    function Sd(e, t, a) {
      return t = U(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function sa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = A1.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Ee(t)
        }, A1.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Ee(t)
      };
    }
    function jn(e, t) {
      xc(), Wh[Fh++] = Ny, Wh[Fh++] = Fv, Fv = e, Ny = t;
    }
    function V0(e, t, a) {
      xc(), Lu[Vu++] = po, Lu[Vu++] = vo, Lu[Vu++] = Cr, Cr = e;
      var c = po;
      e = vo;
      var o = 32 - kl(c) - 1;
      c &= ~(1 << o), a += 1;
      var f = 32 - kl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (c & (1 << d) - 1).toString(32), c >>= d, o -= d, po = 1 << 32 - kl(t) + o | a << o | c, vo = f + e;
      } else
        po = 1 << f | a << o | c, vo = e;
    }
    function bd(e) {
      xc(), e.return !== null && (jn(e, 1), V0(e, 1, 0));
    }
    function Ed(e) {
      for (; e === Fv; )
        Fv = Wh[--Fh], Wh[Fh] = null, Ny = Wh[--Fh], Wh[Fh] = null;
      for (; e === Cr; )
        Cr = Lu[--Vu], Lu[Vu] = null, vo = Lu[--Vu], Lu[Vu] = null, po = Lu[--Vu], Lu[Vu] = null;
    }
    function Yp() {
      return xc(), Cr !== null ? { id: po, overflow: vo } : null;
    }
    function jp(e, t) {
      xc(), Lu[Vu++] = po, Lu[Vu++] = vo, Lu[Vu++] = Cr, po = t.id, vo = t.overflow, Cr = e;
    }
    function xc() {
      ct || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Ni(e, t) {
      if (e.return === null) {
        if (tu === null)
          tu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (tu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          tu.distanceFromLeaf > t && (tu.distanceFromLeaf = t);
        }
        return tu;
      }
      var a = Ni(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function qp() {
      ct && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function la(e, t) {
      mi || (e = Ni(e, 0), e.serverProps = null, t !== null && (t = zv(t), e.serverTail.push(t)));
    }
    function yn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", c = tu;
      throw c !== null && (tu = null, a = O0(c)), zs(
        sa(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), O1;
    }
    function Z0(e) {
      var t = e.stateNode, a = e.type, c = e.memoizedProps;
      switch (t[Wt] = e, t[Oa] = c, Ea(a, c), a) {
        case "dialog":
          Re("cancel", t), Re("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Re("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ip.length; a++)
            Re(ip[a], t);
          break;
        case "source":
          Re("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Re("error", t), Re("load", t);
          break;
        case "details":
          Re("toggle", t);
          break;
        case "input":
          ea("input", c), Re("invalid", t), fa(t, c), ld(
            t,
            c.value,
            c.defaultValue,
            c.checked,
            c.defaultChecked,
            c.type,
            c.name,
            !0
          );
          break;
        case "option":
          bp(t, c);
          break;
        case "select":
          ea("select", c), Re("invalid", t), ad(t, c);
          break;
        case "textarea":
          ea("textarea", c), Re("invalid", t), Ei(t, c), Bo(
            t,
            c.value,
            c.defaultValue,
            c.children
          );
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || c.suppressHydrationWarning === !0 || Km(t.textContent, a) ? (c.popover != null && (Re("beforetoggle", t), Re("toggle", t)), c.onScroll != null && Re("scroll", t), c.onScrollEnd != null && Re("scrollend", t), c.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || yn(e, !0);
    }
    function J0(e) {
      for (za = e.return; za; )
        switch (za.tag) {
          case 5:
          case 31:
          case 13:
            Zu = !1;
            return;
          case 27:
          case 3:
            Zu = !0;
            return;
          default:
            za = za.return;
        }
    }
    function Bi(e) {
      if (e !== za) return !1;
      if (!ct)
        return J0(e), ct = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Tf(e.type, e.memoizedProps)), a = !a), a && It) {
        for (a = It; a; ) {
          var c = Ni(e, 0), o = zv(a);
          c.serverTail.push(o), a = o.type === "Suspense" ? zf(a) : tn(a.nextSibling);
        }
        yn(e);
      }
      if (J0(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = zf(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = zf(e);
      } else
        t === 27 ? (t = It, ii(e.type) ? (e = h2, h2 = null, It = e) : It = t) : It = za ? tn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Gc() {
      It = za = null, mi = ct = !1;
    }
    function Os() {
      var e = Jf;
      return e !== null && (sn === null ? sn = e : sn.push.apply(
        sn,
        e
      ), Jf = null), e;
    }
    function zs(e) {
      Jf === null ? Jf = [e] : Jf.push(e);
    }
    function wc() {
      var e = tu;
      if (e !== null) {
        tu = null;
        for (var t = O0(e); 0 < e.children.length; )
          e = e.children[0];
        ie(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Zo() {
      Ih = Iv = null, Ph = !1;
    }
    function pn(e, t, a) {
      je(z1, t._currentValue, e), t._currentValue = a, je(D1, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Q2 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Q2;
    }
    function qn(e, t) {
      e._currentValue = z1.current;
      var a = D1.current;
      ye(D1, t), e._currentRenderer = a, ye(z1, t);
    }
    function Td(e, t, a) {
      for (; e !== null; ) {
        var c = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, c !== null && (c.childLanes |= t)) : c !== null && (c.childLanes & t) !== t && (c.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function tc(e, t, a, c) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Td(
                  f.return,
                  a,
                  e
                ), c || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Td(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function xn(e, t, a, c) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            un(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === ri.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(dp) : e = [dp]);
        }
        o = o.return;
      }
      e !== null && tc(
        t,
        e,
        a,
        c
      ), t.flags |= 262144;
    }
    function Jo(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!un(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Xc(e) {
      Iv = e, Ih = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function gt(e) {
      return Ph && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), K0(Iv, e);
    }
    function Ds(e, t) {
      return Iv === null && Xc(e), K0(e, t);
    }
    function K0(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Ih === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Ih = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Ih = Ih.next = t;
      return a;
    }
    function Ad() {
      return {
        controller: new xE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Yi(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _s(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && GE(wE, function() {
        e.controller.abort();
      });
    }
    function yu(e, t, a) {
      (e & 127) !== 0 ? 0 > yi && (yi = Xl(), Yy = Pv(t), _1 = t, a != null && (R1 = se(a)), (dt & (Il | nu)) !== oa && (pl = !0, $f = By), e = Af(), t = Bu(), e !== e0 || t !== jy ? e0 = -1.1 : t !== null && ($f = By), Nr = e, jy = t) : (e & 4194048) !== 0 && 0 > Ju && (Ju = Xl(), qy = Pv(t), L2 = t, a != null && (V2 = se(a)), 0 > Eo) && (e = Af(), t = Bu(), (e !== Wf || t !== Br) && (Wf = -1.1), kf = e, Br = t);
    }
    function xp(e) {
      if (0 > yi) {
        yi = Xl(), Yy = e._debugTask != null ? e._debugTask : null, (dt & (Il | nu)) !== oa && ($f = By);
        var t = Af(), a = Bu();
        t !== e0 || a !== jy ? e0 = -1.1 : a !== null && ($f = By), Nr = t, jy = a;
      }
      0 > Ju && (Ju = Xl(), qy = e._debugTask != null ? e._debugTask : null, 0 > Eo) && (e = Af(), t = Bu(), (e !== Wf || t !== Br) && (Wf = -1.1), kf = e, Br = t);
    }
    function pu() {
      var e = Ur;
      return Ur = 0, e;
    }
    function Ko(e) {
      var t = Ur;
      return Ur = e, t;
    }
    function ra(e) {
      var t = Ur;
      return Ur += e, t;
    }
    function ji() {
      _e = Te = -1.1;
    }
    function Kt() {
      var e = Te;
      return Te = -1.1, e;
    }
    function Nl(e) {
      0 <= e && (Te = e);
    }
    function vn() {
      var e = fl;
      return fl = -0, e;
    }
    function La(e) {
      0 <= e && (fl = e);
    }
    function Va() {
      var e = nl;
      return nl = null, e;
    }
    function gn() {
      var e = pl;
      return pl = !1, e;
    }
    function lc(e) {
      cn = Xl(), 0 > e.actualStartTime && (e.actualStartTime = cn);
    }
    function Od(e) {
      if (0 <= cn) {
        var t = Xl() - cn;
        e.actualDuration += t, e.selfBaseDuration = t, cn = -1;
      }
    }
    function Rs(e) {
      if (0 <= cn) {
        var t = Xl() - cn;
        e.actualDuration += t, cn = -1;
      }
    }
    function da() {
      if (0 <= cn) {
        var e = Xl(), t = e - cn;
        cn = -1, Ur += t, fl += t, _e = e;
      }
    }
    function Gp(e) {
      nl === null && (nl = []), nl.push(e), So === null && (So = []), So.push(e);
    }
    function cl() {
      cn = Xl(), 0 > Te && (Te = cn);
    }
    function qi(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ac(e, t) {
      if (Gy === null) {
        var a = Gy = [];
        C1 = 0, Yr = Jm(), t0 = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return C1++, t.then($0, $0), t;
    }
    function $0() {
      if (--C1 === 0 && (-1 < Ju || (Eo = -1.1), Gy !== null)) {
        t0 !== null && (t0.status = "fulfilled");
        var e = Gy;
        Gy = null, Yr = 0, t0 = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function zd(e, t) {
      var a = [], c = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          c.status = "fulfilled", c.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (c.status = "rejected", c.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), c;
    }
    function nc() {
      var e = jr.current;
      return e !== null ? e : Xt.pooledCache;
    }
    function $o(e, t) {
      t === null ? je(jr, jr.current, e) : je(jr, t.pool, e);
    }
    function k0() {
      var e = nc();
      return e === null ? null : { parent: wl._currentValue, pool: e };
    }
    function Dd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function W0(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Za(e, t, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var c = e.thenables;
      if (a = c[a], a === void 0 ? c.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(hn, hn), t = a), t._debugInfo === void 0) {
        e = performance.now(), c = t.displayName;
        var o = {
          name: typeof c == "string" ? c : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ms(e), e;
        default:
          if (typeof t.status == "string")
            t.then(hn, hn);
          else {
            if (e = Xt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ms(e), e;
          }
          throw xr = t, Jy = !0, l0;
      }
    }
    function Ja(e) {
      try {
        return ZE(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (xr = t, Jy = !0, l0) : t;
      }
    }
    function xi() {
      if (xr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = xr;
      return xr = null, Jy = !1, e;
    }
    function Ms(e) {
      if (e === l0 || e === ig)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function rl(e) {
      var t = Fe;
      return e != null && (Fe = t === null ? e : t.concat(e)), t;
    }
    function Da() {
      var e = Fe;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function ha(e, t, a) {
      for (var c = Object.keys(e.props), o = 0; o < c.length; o++) {
        var f = c[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = qc(e, a.mode, 0), t._debugInfo = Fe, t.return = a), ie(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function Gn(e) {
      var t = Ky;
      return Ky += 1, a0 === null && (a0 = Dd()), Za(a0, e, t);
    }
    function _a(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function wn(e, t) {
      throw t.$$typeof === Yv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Sn(e, t) {
      var a = Da();
      a !== null ? a.run(
        wn.bind(null, e, t)
      ) : wn(e, t);
    }
    function F0(e, t) {
      var a = se(e) || "Component";
      sS[a] || (sS[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function ko(e, t) {
      var a = Da();
      a !== null ? a.run(
        F0.bind(null, e, t)
      ) : F0(e, t);
    }
    function _d(e, t) {
      var a = se(e) || "Component";
      rS[a] || (rS[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Cs(e, t) {
      var a = Da();
      a !== null ? a.run(
        _d.bind(null, e, t)
      ) : _d(e, t);
    }
    function Bl(e) {
      function t(b, T) {
        if (e) {
          var O = b.deletions;
          O === null ? (b.deletions = [T], b.flags |= 16) : O.push(T);
        }
      }
      function a(b, T) {
        if (!e) return null;
        for (; T !== null; )
          t(b, T), T = T.sibling;
        return null;
      }
      function c(b) {
        for (var T = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? T.set(b.key, b) : T.set(b.index, b), b = b.sibling;
        return T;
      }
      function o(b, T) {
        return b = mu(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, O) {
        return b.index = O, e ? (O = b.alternate, O !== null ? (O = O.index, O < T ? (b.flags |= 67108866, T) : O) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, O, V) {
        return T === null || T.tag !== 6 ? (T = Vo(
          O,
          b.mode,
          V
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function y(b, T, O, V) {
        var ue = O.type;
        return ue === Cf ? (T = z(
          b,
          T,
          O.props.children,
          V,
          O.key
        ), ha(O, T, b), T) : T !== null && (T.elementType === ue || w0(T, O) || typeof ue == "object" && ue !== null && ue.$$typeof === na && Ja(ue) === T.type) ? (T = o(T, O.props), _a(T, O), T.return = b, T._debugOwner = O._owner, T._debugInfo = Fe, T) : (T = qc(O, b.mode, V), _a(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function p(b, T, O, V) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = Sd(O, b.mode, V), T.return = b, T._debugInfo = Fe, T) : (T = o(T, O.children || []), T.return = b, T._debugInfo = Fe, T);
      }
      function z(b, T, O, V, ue) {
        return T === null || T.tag !== 7 ? (T = Hi(
          O,
          b.mode,
          V,
          ue
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function R(b, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Vo(
            "" + T,
            b.mode,
            O
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case On:
              return O = qc(
                T,
                b.mode,
                O
              ), _a(O, T), O.return = b, b = rl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
            case fi:
              return T = Sd(
                T,
                b.mode,
                O
              ), T.return = b, T._debugInfo = Fe, T;
            case na:
              var V = rl(T._debugInfo);
              return T = Ja(T), b = R(b, T, O), Fe = V, b;
          }
          if (bl(T) || ze(T))
            return O = Hi(
              T,
              b.mode,
              O,
              null
            ), O.return = b, O._debugOwner = b, O._debugTask = b._debugTask, b = rl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
          if (typeof T.then == "function")
            return V = rl(T._debugInfo), b = R(
              b,
              Gn(T),
              O
            ), Fe = V, b;
          if (T.$$typeof === In)
            return R(
              b,
              Ds(b, T),
              O
            );
          Sn(b, T);
        }
        return typeof T == "function" && ko(b, T), typeof T == "symbol" && Cs(b, T), null;
      }
      function E(b, T, O, V) {
        var ue = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return ue !== null ? null : h(b, T, "" + O, V);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case On:
              return O.key === ue ? (ue = rl(O._debugInfo), b = y(
                b,
                T,
                O,
                V
              ), Fe = ue, b) : null;
            case fi:
              return O.key === ue ? p(b, T, O, V) : null;
            case na:
              return ue = rl(O._debugInfo), O = Ja(O), b = E(
                b,
                T,
                O,
                V
              ), Fe = ue, b;
          }
          if (bl(O) || ze(O))
            return ue !== null ? null : (ue = rl(O._debugInfo), b = z(
              b,
              T,
              O,
              V,
              null
            ), Fe = ue, b);
          if (typeof O.then == "function")
            return ue = rl(O._debugInfo), b = E(
              b,
              T,
              Gn(O),
              V
            ), Fe = ue, b;
          if (O.$$typeof === In)
            return E(
              b,
              T,
              Ds(b, O),
              V
            );
          Sn(b, O);
        }
        return typeof O == "function" && ko(b, O), typeof O == "symbol" && Cs(b, O), null;
      }
      function q(b, T, O, V, ue) {
        if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
          return b = b.get(O) || null, h(T, b, "" + V, ue);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case On:
              return O = b.get(
                V.key === null ? O : V.key
              ) || null, b = rl(V._debugInfo), T = y(
                T,
                O,
                V,
                ue
              ), Fe = b, T;
            case fi:
              return b = b.get(
                V.key === null ? O : V.key
              ) || null, p(T, b, V, ue);
            case na:
              var Ye = rl(V._debugInfo);
              return V = Ja(V), T = q(
                b,
                T,
                O,
                V,
                ue
              ), Fe = Ye, T;
          }
          if (bl(V) || ze(V))
            return O = b.get(O) || null, b = rl(V._debugInfo), T = z(
              T,
              O,
              V,
              ue,
              null
            ), Fe = b, T;
          if (typeof V.then == "function")
            return Ye = rl(V._debugInfo), T = q(
              b,
              T,
              O,
              Gn(V),
              ue
            ), Fe = Ye, T;
          if (V.$$typeof === In)
            return q(
              b,
              T,
              O,
              Ds(T, V),
              ue
            );
          Sn(T, V);
        }
        return typeof V == "function" && ko(T, V), typeof V == "symbol" && Cs(T, V), null;
      }
      function le(b, T, O, V) {
        if (typeof O != "object" || O === null) return V;
        switch (O.$$typeof) {
          case On:
          case fi:
            He(b, T, O);
            var ue = O.key;
            if (typeof ue != "string") break;
            if (V === null) {
              V = /* @__PURE__ */ new Set(), V.add(ue);
              break;
            }
            if (!V.has(ue)) {
              V.add(ue);
              break;
            }
            ie(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ue
              );
            });
            break;
          case na:
            O = Ja(O), le(b, T, O, V);
        }
        return V;
      }
      function oe(b, T, O, V) {
        for (var ue = null, Ye = null, be = null, ve = T, Ke = T = 0, Pt = null; ve !== null && Ke < O.length; Ke++) {
          ve.index > Ke ? (Pt = ve, ve = null) : Pt = ve.sibling;
          var Cl = E(
            b,
            ve,
            O[Ke],
            V
          );
          if (Cl === null) {
            ve === null && (ve = Pt);
            break;
          }
          ue = le(
            b,
            Cl,
            O[Ke],
            ue
          ), e && ve && Cl.alternate === null && t(b, ve), T = f(Cl, T, Ke), be === null ? Ye = Cl : be.sibling = Cl, be = Cl, ve = Pt;
        }
        if (Ke === O.length)
          return a(b, ve), ct && jn(b, Ke), Ye;
        if (ve === null) {
          for (; Ke < O.length; Ke++)
            ve = R(b, O[Ke], V), ve !== null && (ue = le(
              b,
              ve,
              O[Ke],
              ue
            ), T = f(
              ve,
              T,
              Ke
            ), be === null ? Ye = ve : be.sibling = ve, be = ve);
          return ct && jn(b, Ke), Ye;
        }
        for (ve = c(ve); Ke < O.length; Ke++)
          Pt = q(
            ve,
            b,
            Ke,
            O[Ke],
            V
          ), Pt !== null && (ue = le(
            b,
            Pt,
            O[Ke],
            ue
          ), e && Pt.alternate !== null && ve.delete(
            Pt.key === null ? Ke : Pt.key
          ), T = f(
            Pt,
            T,
            Ke
          ), be === null ? Ye = Pt : be.sibling = Pt, be = Pt);
        return e && ve.forEach(function(Mo) {
          return t(b, Mo);
        }), ct && jn(b, Ke), Ye;
      }
      function Zt(b, T, O, V) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var ue = null, Ye = null, be = T, ve = T = 0, Ke = null, Pt = null, Cl = O.next(); be !== null && !Cl.done; ve++, Cl = O.next()) {
          be.index > ve ? (Ke = be, be = null) : Ke = be.sibling;
          var Mo = E(b, be, Cl.value, V);
          if (Mo === null) {
            be === null && (be = Ke);
            break;
          }
          Pt = le(
            b,
            Mo,
            Cl.value,
            Pt
          ), e && be && Mo.alternate === null && t(b, be), T = f(Mo, T, ve), Ye === null ? ue = Mo : Ye.sibling = Mo, Ye = Mo, be = Ke;
        }
        if (Cl.done)
          return a(b, be), ct && jn(b, ve), ue;
        if (be === null) {
          for (; !Cl.done; ve++, Cl = O.next())
            be = R(b, Cl.value, V), be !== null && (Pt = le(
              b,
              be,
              Cl.value,
              Pt
            ), T = f(
              be,
              T,
              ve
            ), Ye === null ? ue = be : Ye.sibling = be, Ye = be);
          return ct && jn(b, ve), ue;
        }
        for (be = c(be); !Cl.done; ve++, Cl = O.next())
          Ke = q(
            be,
            b,
            ve,
            Cl.value,
            V
          ), Ke !== null && (Pt = le(
            b,
            Ke,
            Cl.value,
            Pt
          ), e && Ke.alternate !== null && be.delete(
            Ke.key === null ? ve : Ke.key
          ), T = f(
            Ke,
            T,
            ve
          ), Ye === null ? ue = Ke : Ye.sibling = Ke, Ye = Ke);
        return e && be.forEach(function(y3) {
          return t(b, y3);
        }), ct && jn(b, ve), ue;
      }
      function ot(b, T, O, V) {
        if (typeof O == "object" && O !== null && O.type === Cf && O.key === null && (ha(O, null, b), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case On:
              var ue = rl(O._debugInfo);
              e: {
                for (var Ye = O.key; T !== null; ) {
                  if (T.key === Ye) {
                    if (Ye = O.type, Ye === Cf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), V = o(
                          T,
                          O.props.children
                        ), V.return = b, V._debugOwner = O._owner, V._debugInfo = Fe, ha(O, V, b), b = V;
                        break e;
                      }
                    } else if (T.elementType === Ye || w0(
                      T,
                      O
                    ) || typeof Ye == "object" && Ye !== null && Ye.$$typeof === na && Ja(Ye) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), V = o(T, O.props), _a(V, O), V.return = b, V._debugOwner = O._owner, V._debugInfo = Fe, b = V;
                      break e;
                    }
                    a(b, T);
                    break;
                  } else t(b, T);
                  T = T.sibling;
                }
                O.type === Cf ? (V = Hi(
                  O.props.children,
                  b.mode,
                  V,
                  O.key
                ), V.return = b, V._debugOwner = b, V._debugTask = b._debugTask, V._debugInfo = Fe, ha(O, V, b), b = V) : (V = qc(
                  O,
                  b.mode,
                  V
                ), _a(V, O), V.return = b, V._debugInfo = Fe, b = V);
              }
              return b = d(b), Fe = ue, b;
            case fi:
              e: {
                for (ue = O, O = ue.key; T !== null; ) {
                  if (T.key === O)
                    if (T.tag === 4 && T.stateNode.containerInfo === ue.containerInfo && T.stateNode.implementation === ue.implementation) {
                      a(
                        b,
                        T.sibling
                      ), V = o(
                        T,
                        ue.children || []
                      ), V.return = b, b = V;
                      break e;
                    } else {
                      a(b, T);
                      break;
                    }
                  else t(b, T);
                  T = T.sibling;
                }
                V = Sd(
                  ue,
                  b.mode,
                  V
                ), V.return = b, b = V;
              }
              return d(b);
            case na:
              return ue = rl(O._debugInfo), O = Ja(O), b = ot(
                b,
                T,
                O,
                V
              ), Fe = ue, b;
          }
          if (bl(O))
            return ue = rl(O._debugInfo), b = oe(
              b,
              T,
              O,
              V
            ), Fe = ue, b;
          if (ze(O)) {
            if (ue = rl(O._debugInfo), Ye = ze(O), typeof Ye != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var be = Ye.call(O);
            return be === O ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(be) !== "[object Generator]") && (oS || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), oS = !0) : O.entries !== Ye || B1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), B1 = !0), b = Zt(
              b,
              T,
              be,
              V
            ), Fe = ue, b;
          }
          if (typeof O.then == "function")
            return ue = rl(O._debugInfo), b = ot(
              b,
              T,
              Gn(O),
              V
            ), Fe = ue, b;
          if (O.$$typeof === In)
            return ot(
              b,
              T,
              Ds(b, O),
              V
            );
          Sn(b, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (ue = "" + O, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), V = o(T, ue), V.return = b, b = V) : (a(b, T), V = Vo(
          ue,
          b.mode,
          V
        ), V.return = b, V._debugOwner = b, V._debugTask = b._debugTask, V._debugInfo = Fe, b = V), d(b)) : (typeof O == "function" && ko(b, O), typeof O == "symbol" && Cs(b, O), a(b, T));
      }
      return function(b, T, O, V) {
        var ue = Fe;
        Fe = null;
        try {
          Ky = 0;
          var Ye = ot(
            b,
            T,
            O,
            V
          );
          return a0 = null, Ye;
        } catch (Pt) {
          if (Pt === l0 || Pt === ig) throw Pt;
          var be = U(29, Pt, null, b.mode);
          be.lanes = V, be.return = b;
          var ve = be._debugInfo = Fe;
          if (be._debugOwner = b._debugOwner, be._debugTask = b._debugTask, ve != null) {
            for (var Ke = ve.length - 1; 0 <= Ke; Ke--)
              if (typeof ve[Ke].stack == "string") {
                be._debugOwner = ve[Ke], be._debugTask = ve[Ke].debugTask;
                break;
              }
          }
          return be;
        } finally {
          Fe = ue;
        }
      };
    }
    function qt(e, t) {
      var a = bl(e);
      return e = !a && typeof ze(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function nt(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function vu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Ol(e) {
      return {
        lane: e,
        tag: hS,
        payload: null,
        callback: null,
        next: null
      };
    }
    function gu(e, t, a) {
      var c = e.updateQueue;
      if (c === null) return null;
      if (c = c.shared, j1 === c && !pS) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), pS = !0;
      }
      return (dt & Il) !== oa ? (o = c.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), c.pending = t, t = As(e), G0(e, null, a), t) : (Lo(e, c, t, a), As(e));
    }
    function bn(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var c = t.lanes;
        c &= e.pendingLanes, a |= c, t.lanes = a, ds(e, a);
      }
    }
    function Us(e, t) {
      var a = e.updateQueue, c = e.alternate;
      if (c !== null && (c = c.updateQueue, a === c)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: c.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: c.shared,
          callbacks: c.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Wo() {
      if (q1) {
        var e = t0;
        if (e !== null) throw e;
      }
    }
    function Su(e, t, a, c) {
      q1 = !1;
      var o = e.updateQueue;
      Ff = !1, j1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var z = e.alternate;
        z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== d && (h === null ? z.firstBaseUpdate = p : h.next = p, z.lastBaseUpdate = y));
      }
      if (f !== null) {
        var R = o.baseState;
        d = 0, z = p = y = null, h = f;
        do {
          var E = h.lane & -536870913, q = E !== h.lane;
          if (q ? (Ie & E) === E : (c & E) === E) {
            E !== 0 && E === Yr && (q1 = !0), z !== null && (z = z.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              E = e;
              var le = h, oe = t, Zt = a;
              switch (le.tag) {
                case mS:
                  if (le = le.payload, typeof le == "function") {
                    Ph = !0;
                    var ot = le.call(
                      Zt,
                      R,
                      oe
                    );
                    if (E.mode & Ba) {
                      re(!0);
                      try {
                        le.call(Zt, R, oe);
                      } finally {
                        re(!1);
                      }
                    }
                    Ph = !1, R = ot;
                    break e;
                  }
                  R = le;
                  break e;
                case Y1:
                  E.flags = E.flags & -65537 | 128;
                case hS:
                  if (ot = le.payload, typeof ot == "function") {
                    if (Ph = !0, le = ot.call(
                      Zt,
                      R,
                      oe
                    ), E.mode & Ba) {
                      re(!0);
                      try {
                        ot.call(Zt, R, oe);
                      } finally {
                        re(!1);
                      }
                    }
                    Ph = !1;
                  } else le = ot;
                  if (le == null) break e;
                  R = ke({}, R, le);
                  break e;
                case yS:
                  Ff = !0;
              }
            }
            E = h.callback, E !== null && (e.flags |= 64, q && (e.flags |= 8192), q = o.callbacks, q === null ? o.callbacks = [E] : q.push(E));
          } else
            q = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, z === null ? (p = z = q, y = R) : z = z.next = q, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            q = h, h = q.next, q.next = null, o.lastBaseUpdate = q, o.shared.pending = null;
          }
        } while (!0);
        z === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = z, f === null && (o.shared.lanes = 0), es |= d, e.lanes = d, e.memoizedState = R;
      }
      j1 = null;
    }
    function Qc(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function I0(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Qc(a[e], t);
    }
    function Fo(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Qc(a[e], t);
    }
    function Rd(e, t) {
      var a = vi;
      je(fg, a, e), je(n0, t, e), vi = a | t.baseLanes;
    }
    function uc(e) {
      je(fg, vi, e), je(
        n0,
        n0.current,
        e
      );
    }
    function Xn(e) {
      vi = fg.current, ye(n0, e), ye(fg, e);
    }
    function ma(e) {
      var t = e.alternate;
      je(
        Ml,
        Ml.current & u0,
        e
      ), je(lu, e, e), Ku === null && (t === null || n0.current !== null || t.memoizedState !== null) && (Ku = e);
    }
    function Qn(e) {
      je(Ml, Ml.current, e), je(lu, e, e), Ku === null && (Ku = e);
    }
    function Md(e) {
      e.tag === 22 ? (je(Ml, Ml.current, e), je(lu, e, e), Ku === null && (Ku = e)) : bu(e);
    }
    function bu(e) {
      je(Ml, Ml.current, e), je(
        lu,
        lu.current,
        e
      );
    }
    function Yl(e) {
      ye(lu, e), Ku === e && (Ku = null), ye(Ml, e);
    }
    function Gi(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || hr(a) || km(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Ne() {
      var e = x;
      ku === null ? ku = [e] : ku.push(e);
    }
    function K() {
      var e = x;
      if (ku !== null && (Oo++, ku[Oo] !== e)) {
        var t = se(Be);
        if (!vS.has(t) && (vS.add(t), ku !== null)) {
          for (var a = "", c = 0; c <= Oo; c++) {
            var o = ku[c], f = c === Oo ? e : o;
            for (o = c + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function cc(e) {
      e == null || bl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        x,
        typeof e
      );
    }
    function Hs() {
      var e = se(Be);
      SS.has(e) || (SS.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function il() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function P0(e, t) {
      if (Wy) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          x
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        x,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!un(e[a], t[a])) return !1;
      return !0;
    }
    function em(e, t, a, c, o, f) {
      To = f, Be = t, ku = e !== null ? e._debugHookTypes : null, Oo = -1, Wy = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = se(Be), x1.has(f) || (x1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e !== null && e.memoizedState !== null ? w1 : ku !== null ? bS : G1, wr = f = (t.mode & Ba) !== Me;
      var d = U1(a, c, o);
      if (wr = !1, i0 && (d = Ns(
        t,
        a,
        c,
        o
      )), f) {
        re(!0);
        try {
          d = Ns(
            t,
            a,
            c,
            o
          );
        } finally {
          re(!1);
        }
      }
      return dl(e, t), d;
    }
    function dl(e, t) {
      t._debugHookTypes = ku, t.dependencies === null ? Ao !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Ao
      }) : t.dependencies._debugThenableState = Ao, G.H = Fy;
      var a = wt !== null && wt.next !== null;
      if (To = 0, ku = x = Ql = wt = Be = null, Oo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), rg = !1, ky = 0, Ao = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Ll || (e = e.dependencies, e !== null && Jo(e) && (Ll = !0)), Jy ? (Jy = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", gS.has(t) || x1.has(t) || (gS.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Ns(e, t, a, c) {
      Be = e;
      var o = 0;
      do {
        if (i0 && (Ao = null), ky = 0, i0 = !1, o >= KE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Wy = !1, Ql = wt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Oo = -1, G.H = ES, f = U1(t, a, c);
      } while (i0);
      return f;
    }
    function Bs() {
      var e = G.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? qs(t) : t, e = e.useState()[0], (wt !== null ? wt.memoizedState : null) !== e && (Be.flags |= 1024), t;
    }
    function wi() {
      var e = dg !== 0;
      return dg = 0, e;
    }
    function Ys(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ec) !== Me ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Lc(e) {
      if (rg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rg = !1;
      }
      To = 0, ku = Ql = wt = Be = null, Oo = -1, x = null, i0 = !1, ky = dg = 0, Ao = null;
    }
    function gl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ql === null ? Be.memoizedState = Ql = e : Ql = Ql.next = e, Ql;
    }
    function Tt() {
      if (wt === null) {
        var e = Be.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = wt.next;
      var t = Ql === null ? Be.memoizedState : Ql.next;
      if (t !== null)
        Ql = t, wt = e;
      else {
        if (e === null)
          throw Be.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        wt = e, e = {
          memoizedState: wt.memoizedState,
          baseState: wt.baseState,
          baseQueue: wt.baseQueue,
          queue: wt.queue,
          next: null
        }, Ql === null ? Be.memoizedState = Ql = e : Ql = Ql.next = e;
      }
      return Ql;
    }
    function js() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function qs(e) {
      var t = ky;
      return ky += 1, Ao === null && (Ao = Dd()), e = Za(Ao, e, t), t = Be, (Ql === null ? t.memoizedState : Ql.next) === null && (t = t.alternate, G.H = t !== null && t.memoizedState !== null ? w1 : G1), e;
    }
    function ic(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return qs(e);
        if (e.$$typeof === In) return gt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ka(e) {
      var t = null, a = Be.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var c = Be.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (t = {
          data: c.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = js(), Be.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Wy)
        for (a = t.data[t.index] = Array(e), c = 0; c < e; c++)
          a[c] = n1;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function $a(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Io(e, t, a) {
      var c = gl();
      if (a !== void 0) {
        var o = a(t);
        if (wr) {
          re(!0);
          try {
            a(t);
          } finally {
            re(!1);
          }
        }
      } else o = t;
      return c.memoizedState = c.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, c.queue = e, e = e.dispatch = Pg.bind(
        null,
        Be,
        e
      ), [c.memoizedState, e];
    }
    function Xi(e) {
      var t = Tt();
      return Vc(t, wt, e);
    }
    function Vc(e, t, a) {
      var c = e.queue;
      if (c === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      c.lastRenderedReducer = a;
      var o = e.baseQueue, f = c.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, c.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, z = !1;
        do {
          var R = p.lane & -536870913;
          if (R !== p.lane ? (Ie & R) === R : (To & R) === R) {
            var E = p.revertLane;
            if (E === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), R === Yr && (z = !0);
            else if ((To & E) === E) {
              p = p.next, E === Yr && (z = !0);
              continue;
            } else
              R = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Be.lanes |= E, es |= E;
            R = p.action, wr && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            E = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, Be.lanes |= R, es |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !un(f, e.memoizedState) && (Ll = !0, z && (a = t0, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, c.lastRenderedState = f;
      }
      return o === null && (c.lanes = 0), [e.memoizedState, c.dispatch];
    }
    function Qi(e) {
      var t = Tt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var c = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        un(f, t.memoizedState) || (Ll = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, c];
    }
    function Po(e, t, a) {
      var c = Be, o = gl();
      if (ct) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        c0 || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), c0 = !0);
      } else {
        if (f = t(), c0 || (a = t(), un(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c0 = !0)), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ie & 127) !== 0 || tm(c, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Zi(
        Zc.bind(null, c, a, e),
        [e]
      ), c.flags |= 2048, Eu(
        $u | fn,
        { destroy: void 0 },
        lm.bind(
          null,
          c,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Li(e, t, a) {
      var c = Be, o = Tt(), f = ct;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !c0) {
        var d = t();
        un(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c0 = !0);
      }
      (d = !un(
        (wt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Ll = !0), o = o.queue;
      var h = Zc.bind(null, c, o, e);
      if (zl(2048, fn, h, [e]), o.getSnapshot !== t || d || Ql !== null && Ql.memoizedState.tag & $u) {
        if (c.flags |= 2048, Eu(
          $u | fn,
          { destroy: void 0 },
          lm.bind(
            null,
            c,
            o,
            a,
            t
          ),
          null
        ), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (To & 127) !== 0 || tm(c, t, a);
      }
      return a;
    }
    function tm(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Be.updateQueue, t === null ? (t = js(), Be.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function lm(e, t, a, c) {
      t.value = a, t.getSnapshot = c, Jc(t) && am(e);
    }
    function Zc(e, t, a) {
      return a(function() {
        Jc(t) && (yu(2, "updateSyncExternalStore()", e), am(e));
      });
    }
    function Jc(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !un(e, a);
      } catch {
        return !0;
      }
    }
    function am(e) {
      var t = ta(e, 2);
      t !== null && Ue(t, e, 2);
    }
    function Cd(e) {
      var t = gl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), wr) {
          re(!0);
          try {
            a();
          } finally {
            re(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $a,
        lastRenderedState: e
      }, t;
    }
    function Kc(e) {
      e = Cd(e);
      var t = e.queue, a = jd.bind(null, Be, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Vi(e) {
      var t = gl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Vs.bind(
        null,
        Be,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function xs(e, t) {
      var a = Tt();
      return ef(a, wt, e, t);
    }
    function ef(e, t, a, c) {
      return e.baseState = a, Vc(
        e,
        wt,
        typeof c == "function" ? c : $a
      );
    }
    function Gs(e, t) {
      var a = Tt();
      return wt !== null ? ef(a, wt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function wp(e, t, a, c, o) {
      if (jl(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        G.T !== null ? a(!0) : f.isTransition = !1, c(f), a = t.pending, a === null ? (f.next = t.pending = f, $c(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function $c(e, t) {
      var a = t.action, c = t.payload, o = e.state;
      if (t.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, c), y = G.S;
          y !== null && y(d, h), nm(e, t, h);
        } catch (p) {
          ws(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), G.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, c), nm(e, t, d);
        } catch (p) {
          ws(e, t, p);
        }
    }
    function nm(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(Ji, Ji), a.then(
        function(c) {
          oc(e, t, c);
        },
        function(c) {
          return ws(e, t, c);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : oc(e, t, a);
    }
    function oc(e, t, a) {
      t.status = "fulfilled", t.value = a, Ud(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, $c(e, a)));
    }
    function ws(e, t, a) {
      var c = e.pending;
      if (e.pending = null, c !== null) {
        c = c.next;
        do
          t.status = "rejected", t.reason = a, Ud(t), t = t.next;
        while (t !== c);
      }
      e.action = null;
    }
    function Ud(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function fc(e, t) {
      return t;
    }
    function ka(e, t) {
      if (ct) {
        var a = Xt.formState;
        if (a !== null) {
          e: {
            var c = Be;
            if (ct) {
              if (It) {
                t: {
                  for (var o = It, f = Zu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = tn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === f2 || f === cb ? o : null;
                }
                if (o) {
                  It = tn(
                    o.nextSibling
                  ), c = o.data === f2;
                  break e;
                }
              }
              yn(c);
            }
            c = !1;
          }
          c && (t = a[0]);
        }
      }
      return a = gl(), a.memoizedState = a.baseState = t, c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fc,
        lastRenderedState: t
      }, a.queue = c, a = jd.bind(
        null,
        Be,
        c
      ), c.dispatch = a, c = Cd(!1), f = Vs.bind(
        null,
        Be,
        !1,
        c.queue
      ), c = gl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, c.queue = o, a = wp.bind(
        null,
        Be,
        o,
        f,
        a
      ), o.dispatch = a, c.memoizedState = e, [t, a, !1];
    }
    function kc(e) {
      var t = Tt();
      return Hd(t, wt, e);
    }
    function Hd(e, t, a) {
      if (t = Vc(
        e,
        t,
        fc
      )[0], e = Xi($a)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var c = qs(t);
        } catch (d) {
          throw d === l0 ? ig : d;
        }
      else c = t;
      t = Tt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Be.flags |= 2048, Eu(
        $u | fn,
        { destroy: void 0 },
        um.bind(null, o, a),
        null
      )), [c, f, e];
    }
    function um(e, t) {
      e.action = t;
    }
    function Wc(e) {
      var t = Tt(), a = wt;
      if (a !== null)
        return Hd(t, a, e);
      Tt(), t = t.memoizedState, a = Tt();
      var c = a.queue.dispatch;
      return a.memoizedState = e, [t, c, !1];
    }
    function Eu(e, t, a, c) {
      return e = { tag: e, create: a, deps: c, inst: t, next: null }, t = Be.updateQueue, t === null && (t = js(), Be.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (c = a.next, a.next = e, e.next = c, t.lastEffect = e), e;
    }
    function Nd(e) {
      var t = gl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Fc(e, t, a, c) {
      var o = gl();
      Be.flags |= e, o.memoizedState = Eu(
        $u | t,
        { destroy: void 0 },
        a,
        c === void 0 ? null : c
      );
    }
    function zl(e, t, a, c) {
      var o = Tt();
      c = c === void 0 ? null : c;
      var f = o.memoizedState.inst;
      wt !== null && c !== null && P0(c, wt.memoizedState.deps) ? o.memoizedState = Eu(t, f, a, c) : (Be.flags |= e, o.memoizedState = Eu(
        $u | t,
        f,
        a,
        c
      ));
    }
    function Zi(e, t) {
      (Be.mode & Ec) !== Me ? Fc(276826112, fn, e, t) : Fc(8390656, fn, e, t);
    }
    function Xp(e) {
      Be.flags |= 4;
      var t = Be.updateQueue;
      if (t === null)
        t = js(), Be.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Xs(e) {
      var t = gl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((dt & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function tf(e) {
      var t = Tt().memoizedState;
      return Xp({ ref: t, nextImpl: e }), function() {
        if ((dt & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function ya(e, t) {
      var a = 4194308;
      return (Be.mode & Ec) !== Me && (a |= 134217728), Fc(a, au, e, t);
    }
    function Wa(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Tu(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var c = 4194308;
      (Be.mode & Ec) !== Me && (c |= 134217728), Fc(
        c,
        au,
        Wa.bind(null, t, e),
        a
      );
    }
    function lf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, zl(
        4,
        au,
        Wa.bind(null, t, e),
        a
      );
    }
    function Bd(e, t) {
      return gl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ln(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var c = a.memoizedState;
      return t !== null && P0(t, c[1]) ? c[0] : (a.memoizedState = [e, t], e);
    }
    function pa(e, t) {
      var a = gl();
      t = t === void 0 ? null : t;
      var c = e();
      if (wr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [c, t], c;
    }
    function $t(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var c = a.memoizedState;
      if (t !== null && P0(t, c[1]))
        return c[0];
      if (c = e(), wr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [c, t], c;
    }
    function af(e, t) {
      var a = gl();
      return At(a, e, t);
    }
    function Au(e, t) {
      var a = Tt();
      return hl(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function Xe(e, t) {
      var a = Tt();
      return wt === null ? At(a, e, t) : hl(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function At(e, t, a) {
      return a === void 0 || (To & 1073741824) !== 0 && (Ie & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = df(), Be.lanes |= e, es |= e, a);
    }
    function hl(e, t, a, c) {
      return un(a, t) ? a : n0.current !== null ? (e = At(e, a, c), un(e, t) || (Ll = !0), e) : (To & 42) === 0 || (To & 1073741824) !== 0 && (Ie & 261930) === 0 ? (Ll = !0, e.memoizedState = a) : (e = df(), Be.lanes |= e, es |= e, t);
    }
    function Ji() {
      G.asyncTransitions--;
    }
    function Ki(e, t, a, c, o) {
      var f = bt.p;
      bt.p = f !== 0 && f < Wl ? f : Wl;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Vs(e, !1, t, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(Ji, Ji);
          var z = zd(
            y,
            c
          );
          $i(
            e,
            t,
            z,
            aa(e)
          );
        } else
          $i(
            e,
            t,
            c,
            aa(e)
          );
      } catch (R) {
        $i(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          aa(e)
        );
      } finally {
        bt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function sc(e, t, a, c) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Qs(e).queue;
      xp(e), Ki(
        e,
        o,
        t,
        Fr,
        a === null ? $ : function() {
          return nf(e), a(c);
        }
      );
    }
    function Qs(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Fr,
        baseState: Fr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $a,
          lastRenderedState: Fr
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $a,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function nf(e) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Qs(e);
      t.next === null && (t = e.alternate.memoizedState), $i(
        e,
        t.next.queue,
        {},
        aa(e)
      );
    }
    function Ic() {
      var e = Cd(!1);
      return e = Ki.bind(
        null,
        Be,
        e.queue,
        !0,
        !1
      ), gl().memoizedState = e, [!1, e];
    }
    function Qp() {
      var e = Xi($a)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : qs(e),
        t
      ];
    }
    function tl() {
      var e = Qi($a)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : qs(e),
        t
      ];
    }
    function rc() {
      return gt(dp);
    }
    function Ls() {
      var e = gl(), t = Xt.identifierPrefix;
      if (ct) {
        var a = vo, c = po;
        a = (c & ~(1 << 32 - kl(c) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = dg++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = JE++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Yd() {
      return gl().memoizedState = Lp.bind(
        null,
        Be
      );
    }
    function Lp(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var c = aa(a), o = Ol(c), f = gu(a, o, c);
            f !== null && (yu(c, "refresh()", e), Ue(f, a, c), bn(f, a, c)), e = Ad(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function Pg(e, t, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = aa(e);
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      jl(e) ? ol(t, o) : (o = Mi(e, t, o, c), o !== null && (yu(c, "dispatch()", e), Ue(o, e, c), Zs(o, t, c)));
    }
    function jd(e, t, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = aa(e), $i(e, t, a, c) && yu(c, "setState()", e);
    }
    function $i(e, t, a, c) {
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jl(e)) ol(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = Ac;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, un(y, h))
              return Lo(e, t, o, 0), Xt === null && vd(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = Mi(e, t, o, c), a !== null)
          return Ue(a, e, c), Zs(a, t, c), !0;
      }
      return !1;
    }
    function Vs(e, t, a, c) {
      if (G.T === null && Yr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), c = {
        lane: 2,
        revertLane: Jm(),
        gesture: null,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, jl(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Mi(
          e,
          a,
          c,
          2
        ), t !== null && (yu(2, "setOptimistic()", e), Ue(t, e, 2));
    }
    function jl(e) {
      var t = e.alternate;
      return e === Be || t !== null && t === Be;
    }
    function ol(e, t) {
      i0 = rg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Zs(e, t, a) {
      if ((a & 4194048) !== 0) {
        var c = t.lanes;
        c &= e.pendingLanes, a |= c, t.lanes = a, ds(e, a);
      }
    }
    function ki(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        HS.has(t) || (HS.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function uf(e, t, a, c) {
      var o = e.memoizedState, f = a(c, o);
      if (e.mode & Ba) {
        re(!0);
        try {
          f = a(c, o);
        } finally {
          re(!1);
        }
      }
      f === void 0 && (t = Ve(t) || "Component", RS.has(t) || (RS.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : ke({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function qd(e, t, a, c, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          c,
          f,
          d
        ), e.mode & Ba) {
          re(!0);
          try {
            a = h.shouldComponentUpdate(
              c,
              f,
              d
            );
          } finally {
            re(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ve(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qo(a, c) || !Qo(o, f) : !0;
    }
    function Ou(e, t, a, c) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, c), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, c), t.state !== o && (e = se(e) || "Component", AS.has(e) || (AS.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), X1.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function zu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var c in t)
          c !== "ref" && (a[c] = t[c]);
      }
      if (e = e.defaultProps) {
        a === t && (a = ke({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function xd(e) {
      g1(e), console.warn(
        `%s

%s
`,
        o0 ? "An error occurred in the <" + o0 + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Gd(e) {
      var t = o0 ? "The above error occurred in the <" + o0 + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Q1 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var c = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          mb + " " + e[0],
          yb,
          qg + c + qg,
          pb
        ) : e.splice(
          0,
          0,
          mb,
          yb,
          qg + c + qg,
          pb
        ), e.unshift(console), c = h3.apply(console.error, e), c();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function cm(e) {
      g1(e);
    }
    function Js(e, t) {
      try {
        o0 = t.source ? se(t.source) : null, Q1 = null;
        var a = t.value;
        if (G.actQueue !== null)
          G.thrownErrors.push(a);
        else {
          var c = e.onUncaughtError;
          c(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function im(e, t, a) {
      try {
        o0 = a.source ? se(a.source) : null, Q1 = se(t);
        var c = e.onCaughtError;
        c(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function wd(e, t, a) {
      return a = Ol(a), a.tag = Y1, a.payload = { element: null }, a.callback = function() {
        ie(t.source, Js, e, t);
      }, a;
    }
    function Xd(e) {
      return e = Ol(e), e.tag = Y1, e;
    }
    function Qd(e, t, a, c) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = c.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Ci(a), ie(
            c.source,
            im,
            t,
            a,
            c
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Ci(a), ie(
          c.source,
          im,
          t,
          a,
          c
        ), typeof o != "function" && (ls === null ? ls = /* @__PURE__ */ new Set([this]) : ls.add(this)), QE(this, c), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          se(a) || "Unknown"
        );
      });
    }
    function om(e, t, a, c, o) {
      if (a.flags |= 32768, xu && vf(e, o), c !== null && typeof c == "object" && typeof c.then == "function") {
        if (t = a.alternate, t !== null && xn(
          t,
          a,
          o,
          !0
        ), ct && (mi = !0), a = lu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ku === null ? mf() : a.alternate === null && sl === Do && (sl = yg), a.flags &= -257, a.flags |= 65536, a.lanes = o, c === og ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([c]) : t.add(c), oh(e, c, o)), !1;
            case 22:
              return a.flags |= 65536, c === og ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([c])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([c]) : a.add(c)), oh(e, c, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return oh(e, c, o), mf(), !1;
      }
      if (ct)
        return mi = !0, t = lu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, c !== O1 && zs(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: c }
            ),
            a
          )
        )) : (c !== O1 && zs(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: c }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, c = sa(c, a), o = wd(
          e.stateNode,
          c,
          o
        ), Us(e, o), sl !== If && (sl = Xr)), !1;
      var f = sa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: c }
        ),
        a
      );
      if (ap === null ? ap = [f] : ap.push(f), sl !== If && (sl = Xr), t === null) return !0;
      c = sa(c, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = wd(
              a.stateNode,
              c,
              e
            ), Us(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ls === null || !ls.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Xd(o), Qd(
                o,
                e,
                a,
                c
              ), Us(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function ql(e, t, a, c) {
      t.child = e === null ? dS(t, null, a, c) : Gr(
        t,
        e.child,
        a,
        c
      );
    }
    function Vp(e, t, a, c, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in c) {
        var d = {};
        for (var h in c)
          h !== "ref" && (d[h] = c[h]);
      } else d = c;
      return Xc(t), c = em(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = wi(), e !== null && !Ll ? (Ys(e, t, o), Vn(e, t, o)) : (ct && h && bd(t), t.flags |= 1, ql(e, t, c, o), t.child);
    }
    function fm(e, t, a, c, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !X0(f) && f.defaultProps === void 0 && a.compare === null ? (a = jc(f), t.tag = 15, t.type = a, cf(t, f), sm(
          e,
          t,
          a,
          c,
          o
        )) : (e = Ui(
          a.type,
          null,
          c,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Kd(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Qo, a(d, c) && e.ref === t.ref)
          return Vn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = mu(f, c), e.ref = t.ref, e.return = t, t.child = e;
    }
    function sm(e, t, a, c, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Qo(f, c) && e.ref === t.ref && t.type === e.type)
          if (Ll = !1, t.pendingProps = c = f, Kd(e, o))
            (e.flags & 131072) !== 0 && (Ll = !0);
          else
            return t.lanes = e.lanes, Vn(e, t, o);
      }
      return mm(
        e,
        t,
        a,
        c,
        o
      );
    }
    function rm(e, t, a, c) {
      var o = c.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Hy,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), c.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (c = t.child = e.child, o = 0; c !== null; )
              o = o | c.lanes | c.childLanes, c = c.sibling;
            c = o & ~f;
          } else c = 0, t.child = null;
          return dm(
            e,
            t,
            f,
            a,
            c
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && $o(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Rd(t, f) : uc(t), Md(t);
        else
          return c = t.lanes = 536870912, dm(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            c
          );
      } else
        f !== null ? ($o(t, f.cachePool), Rd(t, f), bu(t), t.memoizedState = null) : (e !== null && $o(t, null), uc(t), bu(t));
      return ql(e, t, o, a), t.child;
    }
    function Wi(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Hy,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function dm(e, t, a, c, o) {
      var f = nc();
      return f = f === null ? null : {
        parent: wl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && $o(t, null), uc(t), Md(t), e !== null && xn(e, t, c, !0), t.childLanes = o, null;
    }
    function Ks(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = ks(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function hm(e, t, a) {
      return Gr(t, e.child, null, a), e = Ks(
        t,
        t.pendingProps
      ), e.flags |= 2, Yl(t), t.memoizedState = null, e;
    }
    function Zp(e, t, a) {
      var c = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (ct) {
          if (c.mode === "hidden")
            return e = Ks(t, c), t.lanes = 536870912, Wi(null, e);
          if (Qn(t), (e = It) ? (a = zt(
            e,
            Zu
          ), a = a !== null && a.data === Kr ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Yp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = c, c = L0(a), c.return = t, t.child = c, za = t, It = null)) : a = null, a === null)
            throw la(t, e), yn(t);
          return t.lanes = 536870912, null;
        }
        return Ks(t, c);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Qn(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = hm(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (qp(), (a & 536870912) !== 0 && hf(t), Ll || xn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Ll || o) {
          if (c = Xt, c !== null && (d = bi(
            c,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, ta(e, d), Ue(c, e, d), L1;
          mf(), t = hm(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, It = tn(
            d.nextSibling
          ), za = t, ct = !0, Jf = null, mi = !1, tu = null, Zu = !1, e !== null && jp(t, e), t = Ks(t, c), t.flags |= 4096;
        return t;
      }
      return f = e.child, c = { mode: c.mode, children: c.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && hf(t), e = mu(f, c), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function $s(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function mm(e, t, a, c, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ve(a) || "Unknown";
        NS[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), NS[f] = !0);
      }
      return t.mode & Ba && Tc.recordLegacyContextWarning(
        t,
        null
      ), e === null && (cf(t, t.type), a.contextTypes && (f = Ve(a) || "Unknown", YS[f] || (YS[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Xc(t), a = em(
        e,
        t,
        a,
        c,
        void 0,
        o
      ), c = wi(), e !== null && !Ll ? (Ys(e, t, o), Vn(e, t, o)) : (ct && c && bd(t), t.flags |= 1, ql(e, t, a, o), t.child);
    }
    function ym(e, t, a, c, o, f) {
      return Xc(t), Oo = -1, Wy = e !== null && e.type !== t.type, t.updateQueue = null, a = Ns(
        t,
        c,
        a,
        o
      ), dl(e, t), c = wi(), e !== null && !Ll ? (Ys(e, t, f), Vn(e, t, f)) : (ct && c && bd(t), t.flags |= 1, ql(e, t, a, f), t.child);
    }
    function Fi(e, t, a, c, o) {
      switch (vt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Xt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Xd(h), Qd(
            h,
            d,
            t,
            sa(f, t)
          ), Us(t, h);
      }
      if (Xc(t), t.stateNode === null) {
        if (d = Zf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== In) && !US.has(a) && (US.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Ch ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ve(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = gt(f)), f = new a(c, d), t.mode & Ba) {
          re(!0);
          try {
            f = new a(c, d);
          } finally {
            re(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = X1, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = TS, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ve(a) || "Component", OS.has(d) || (OS.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Ve(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            DS.has(f) || (DS.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = Ve(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !CS.has(a) && (CS.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !MS.has(a) && (MS.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ve(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== c, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || zS.has(a) || (zS.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ve(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || bl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = c, f.state = t.memoizedState, f.refs = {}, nt(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? gt(d) : Zf, f.state === c && (d = Ve(a) || "Component", _S.has(d) || (_S.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ba && Tc.recordLegacyContextWarning(
          t,
          f
        ), Tc.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (uf(
          t,
          a,
          d,
          c
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
        ), X1.enqueueReplaceState(
          f,
          f.state,
          null
        )), Su(t, c, f, o), Wo(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ec) !== Me && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var z = t.memoizedProps;
        h = zu(a, z), f.props = h;
        var R = f.context;
        y = a.contextType, d = Zf, typeof y == "object" && y !== null && (d = gt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", z = t.pendingProps !== z, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (z || R !== d) && Ou(
          t,
          f,
          c,
          d
        ), Ff = !1;
        var E = t.memoizedState;
        f.state = E, Su(t, c, f, o), Wo(), R = t.memoizedState, z || E !== R || Ff ? (typeof p == "function" && (uf(
          t,
          a,
          p,
          c
        ), R = t.memoizedState), (h = Ff || qd(
          t,
          a,
          h,
          c,
          E,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ec) !== Me && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ec) !== Me && (t.flags |= 134217728), t.memoizedProps = c, t.memoizedState = R), f.props = c, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ec) !== Me && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, vu(e, t), d = t.memoizedProps, y = zu(a, d), f.props = y, p = t.pendingProps, E = f.context, R = a.contextType, h = Zf, typeof R == "object" && R !== null && (h = gt(R)), z = a.getDerivedStateFromProps, (R = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && Ou(
          t,
          f,
          c,
          h
        ), Ff = !1, E = t.memoizedState, f.state = E, Su(t, c, f, o), Wo();
        var q = t.memoizedState;
        d !== p || E !== q || Ff || e !== null && e.dependencies !== null && Jo(e.dependencies) ? (typeof z == "function" && (uf(
          t,
          a,
          z,
          c
        ), q = t.memoizedState), (y = Ff || qd(
          t,
          a,
          y,
          c,
          E,
          q,
          h
        ) || e !== null && e.dependencies !== null && Jo(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(c, q, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          c,
          q,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = c, t.memoizedState = q), f.props = c, f.state = q, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, $s(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, _c(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, cn = -1;
        else if (a = I2(h), t.mode & Ba) {
          re(!0);
          try {
            I2(h);
          } finally {
            re(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Gr(
          t,
          e.child,
          null,
          o
        ), t.child = Gr(
          t,
          null,
          a,
          o
        )) : ql(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Vn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== c && (f0 || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        se(t) || "a component"
      ), f0 = !0), e;
    }
    function pm(e, t, a, c) {
      return Gc(), t.flags |= 256, ql(e, t, a, c), t.child;
    }
    function cf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ve(t) || "Unknown", jS[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), jS[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ve(t) || "Unknown", BS[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), BS[t] = !0));
    }
    function of(e) {
      return { baseLanes: e, cachePool: k0() };
    }
    function Ld(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rn), e;
    }
    function Vd(e, t, a) {
      var c, o = t.pendingProps;
      qe(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((c = d) || (c = e !== null && e.memoizedState === null ? !1 : (Ml.current & $y) !== 0), c && (f = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ct) {
          if (f ? ma(t) : bu(t), (e = It) ? (a = zt(
            e,
            Zu
          ), a = a !== null && a.data !== Kr ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Yp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = c, c = L0(a), c.return = t, t.child = c, za = t, It = null)) : a = null, a === null)
            throw la(t, e), yn(t);
          return km(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          bu(t);
          var y = t.mode;
          return h = ks(
            { mode: "hidden", children: h },
            y
          ), o = Hi(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = of(a), o.childLanes = Ld(
            e,
            c,
            a
          ), t.memoizedState = V1, Wi(
            null,
            o
          );
        }
        return ma(t), vm(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var z = p.dehydrated;
        if (z !== null) {
          if (d)
            t.flags & 256 ? (ma(t), t.flags &= -257, t = Zd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (bu(t), t.child = e.child, t.flags |= 128, t = null) : (bu(t), h = o.fallback, y = t.mode, o = ks(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Hi(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Gr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = of(a), o.childLanes = Ld(
              e,
              c,
              a
            ), t.memoizedState = V1, t = Wi(
              null,
              o
            ));
          else if (ma(t), qp(), (a & 536870912) !== 0 && hf(t), km(
            z
          )) {
            if (c = z.nextSibling && z.nextSibling.dataset, c) {
              h = c.dgst;
              var R = c.msg;
              y = c.stck;
              var E = c.cstck;
            }
            f = R, c = h, o = y, z = E, h = f, y = z, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = c, c = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: c
            }, typeof c == "string" && A1.set(
              h,
              o
            ), zs(o), t = Zd(
              e,
              t,
              a
            );
          } else if (Ll || xn(
            e,
            t,
            a,
            !1
          ), c = (a & e.childLanes) !== 0, Ll || c) {
            if (c = Xt, c !== null && (o = bi(
              c,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, ta(
                e,
                o
              ), Ue(
                c,
                e,
                o
              ), L1;
            hr(
              z
            ) || mf(), t = Zd(
              e,
              t,
              a
            );
          } else
            hr(
              z
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, It = tn(
              z.nextSibling
            ), za = t, ct = !0, Jf = null, mi = !1, tu = null, Zu = !1, e !== null && jp(t, e), t = vm(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (bu(t), h = o.fallback, y = t.mode, E = e.child, z = E.sibling, o = mu(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, z !== null ? h = mu(
        z,
        h
      ) : (h = Hi(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, Wi(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = of(a) : (y = h.cachePool, y !== null ? (E = wl._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = k0(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ld(
        e,
        c,
        a
      ), t.memoizedState = V1, Wi(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && hf(t), ma(t), a = e.child, e = a.sibling, a = mu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function vm(e, t) {
      return t = ks(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function ks(e, t) {
      return e = U(22, e, null, t), e.lanes = 0, e;
    }
    function Zd(e, t, a) {
      return Gr(t, e.child, null, a), e = vm(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function gm(e, t, a) {
      e.lanes |= t;
      var c = e.alternate;
      c !== null && (c.lanes |= t), Td(
        e.return,
        t,
        a
      );
    }
    function Jd(e, t, a, c, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = c, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function Sm(e, t, a) {
      var c = t.pendingProps, o = c.revealOrder, f = c.tail, d = c.children, h = Ml.current;
      if ((c = (h & $y) !== 0) ? (h = h & u0 | $y, t.flags |= 128) : h &= u0, je(Ml, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !qS[h])
        if (qS[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", mg[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (mg[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (mg[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (mg[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (bl(d)) {
          for (h = 0; h < d.length; h++)
            if (!qt(
              d[h],
              h
            ))
              break e;
        } else if (h = ze(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!qt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (ql(e, t, d, a), ct ? (xc(), d = Ny) : d = 0, !c && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && gm(e, a, t);
          else if (e.tag === 19)
            gm(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Gi(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Jd(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Gi(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Jd(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Jd(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Vn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), cn = -1, es |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (xn(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = mu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = mu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Kd(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Jo(e)));
    }
    function Jp(e, t, a) {
      switch (t.tag) {
        case 3:
          jt(
            t,
            t.stateNode.containerInfo
          ), pn(
            t,
            wl,
            e.memoizedState.cache
          ), Gc();
          break;
        case 27:
        case 5:
          P(t);
          break;
        case 4:
          jt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          pn(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var c = t.stateNode;
          c.effectDuration = -0, c.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Qn(t), null;
          break;
        case 13:
          if (c = t.memoizedState, c !== null)
            return c.dehydrated !== null ? (ma(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Vd(
              e,
              t,
              a
            ) : (ma(t), e = Vn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ma(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (c = (a & t.childLanes) !== 0, c || (xn(
            e,
            t,
            a,
            !1
          ), c = (a & t.childLanes) !== 0), o) {
            if (c)
              return Sm(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), je(
            Ml,
            Ml.current,
            t
          ), c) break;
          return null;
        case 22:
          return t.lanes = 0, rm(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          pn(
            t,
            wl,
            e.memoizedState.cache
          );
      }
      return Vn(e, t, a);
    }
    function Ws(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Ui(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var c = t.return;
        if (c === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === c.child)
          c.child = a;
        else {
          var o = c.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = c.deletions, t === null ? (c.deletions = [e], c.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Ll = !0;
        else {
          if (!Kd(e, a) && (t.flags & 128) === 0)
            return Ll = !1, Jp(
              e,
              t,
              a
            );
          Ll = (e.flags & 131072) !== 0;
        }
      else
        Ll = !1, (c = ct) && (xc(), c = (t.flags & 1048576) !== 0), c && (c = t.index, xc(), V0(t, Ny, c));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (c = t.pendingProps, e = Ja(t.elementType), t.type = e, typeof e == "function")
            X0(e) ? (c = zu(
              e,
              c
            ), t.tag = 1, t.type = e = jc(e), t = Fi(
              null,
              t,
              e,
              c,
              a
            )) : (t.tag = 0, cf(t, e), t.type = e = jc(e), t = mm(
              null,
              t,
              e,
              c,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Uf) {
                t.tag = 11, t.type = e = gd(e), t = Vp(
                  null,
                  t,
                  e,
                  c,
                  a
                );
                break e;
              } else if (o === Ar) {
                t.tag = 14, t = fm(
                  null,
                  t,
                  e,
                  c,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === na && (t = " Did you wrap a component in React.lazy() more than once?"), a = Ve(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return mm(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return c = t.type, o = zu(
            c,
            t.pendingProps
          ), Fi(
            e,
            t,
            c,
            o,
            a
          );
        case 3:
          e: {
            if (jt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            c = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, vu(e, t), Su(t, c, null, a);
            var d = t.memoizedState;
            if (c = d.cache, pn(t, wl, c), c !== f.cache && tc(
              t,
              [wl],
              a,
              !0
            ), Wo(), c = d.element, f.isDehydrated)
              if (f = {
                element: c,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = pm(
                  e,
                  t,
                  c,
                  a
                );
                break e;
              } else if (c !== o) {
                o = sa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), zs(o), t = pm(
                  e,
                  t,
                  c,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, It = tn(e.firstChild), za = t, ct = !0, Jf = null, mi = !1, tu = null, Zu = !0, a = dS(
                  t,
                  null,
                  c,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Gc(), c === o) {
                t = Vn(
                  e,
                  t,
                  a
                );
                break e;
              }
              ql(
                e,
                t,
                c,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return $s(e, t), e === null ? (a = Pm(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : ct || (a = t.type, e = t.pendingProps, c = Qt(
            ln.current
          ), c = rr(
            c
          ).createElement(a), c[Wt] = t, c[Oa] = e, kt(c, a, e), he(c), t.stateNode = c) : t.memoizedState = Pm(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return P(t), e === null && ct && (c = Qt(ln.current), o = L(), c = t.stateNode = vc(
            t.type,
            t.pendingProps,
            c,
            o,
            !1
          ), mi || (o = Ua(
            c,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Ni(t, 0).serverProps = o)), za = t, Zu = !0, o = It, ii(t.type) ? (h2 = o, It = tn(
            c.firstChild
          )) : It = o), ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), $s(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ct && (f = L(), c = ys(
            t.type,
            f.ancestorInfo
          ), o = It, (d = !o) || (d = Tv(
            o,
            t.type,
            t.pendingProps,
            Zu
          ), d !== null ? (t.stateNode = d, mi || (f = Ua(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Ni(t, 0).serverProps = f)), za = t, It = tn(
            d.firstChild
          ), Zu = !1, f = !0) : f = !1, d = !f), d && (c && la(t, o), yn(t))), P(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, c = f.children, Tf(o, f) ? c = null : d !== null && Tf(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = em(
            e,
            t,
            Bs,
            null,
            null,
            a
          ), dp._currentValue = o), $s(e, t), ql(
            e,
            t,
            c,
            a
          ), t.child;
        case 6:
          return e === null && ct && (a = t.pendingProps, e = L(), c = e.ancestorInfo.current, a = c != null ? ps(
            a,
            c.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = It, (c = !e) || (c = Av(
            e,
            t.pendingProps,
            Zu
          ), c !== null ? (t.stateNode = c, za = t, It = null, c = !0) : c = !1, c = !c), c && (a && la(t, e), yn(t))), null;
        case 13:
          return Vd(e, t, a);
        case 4:
          return jt(
            t,
            t.stateNode.containerInfo
          ), c = t.pendingProps, e === null ? t.child = Gr(
            t,
            null,
            c,
            a
          ) : ql(
            e,
            t,
            c,
            a
          ), t.child;
        case 11:
          return Vp(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return ql(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, c = t.stateNode, c.effectDuration = -0, c.passiveEffectDuration = -0, ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return c = t.type, o = t.pendingProps, f = o.value, "value" in o || xS || (xS = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), pn(t, c, f), ql(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, c = t.pendingProps.children, typeof c != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Xc(t), o = gt(o), c = U1(
            c,
            o,
            void 0
          ), t.flags |= 1, ql(
            e,
            t,
            c,
            a
          ), t.child;
        case 14:
          return fm(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return sm(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return Sm(
            e,
            t,
            a
          );
        case 31:
          return Zp(e, t, a);
        case 22:
          return rm(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Xc(t), c = gt(wl), e === null ? (o = nc(), o === null && (o = Xt, f = Ad(), o.pooledCache = f, Yi(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: c,
            cache: o
          }, nt(t), pn(t, wl, o)) : ((e.lanes & a) !== 0 && (vu(e, t), Su(t, null, null, a), Wo()), o = e.memoizedState, f = t.memoizedState, o.parent !== c ? (o = {
            parent: c,
            cache: c
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), pn(t, wl, c)) : (c = f.cache, pn(t, wl, c), c !== o.cache && tc(
            t,
            [wl],
            a,
            !0
          ))), ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Du(e) {
      e.flags |= 4;
    }
    function $d(e, t, a, c, o) {
      if ((t = (e.mode & qE) !== Me) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (qm()) e.flags |= 8192;
          else
            throw xr = og, N1;
      } else e.flags &= -16777217;
    }
    function Kp(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Wu) !== Wr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !at(t))
        if (qm()) e.flags |= 8192;
        else
          throw xr = og, N1;
    }
    function ff(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Co() : 536870912, e.lanes |= t, Vr |= t);
    }
    function sf(e, t) {
      if (!ct)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var c = null; a !== null; )
              a.alternate !== null && (c = a), a = a.sibling;
            c === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : c.sibling = null;
        }
    }
    function Mt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, c = 0;
      if (t)
        if ((e.mode & We) !== Me) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, c |= o.subtreeFlags & 65011712, c |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & We) !== Me) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, c |= o.subtreeFlags, c |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= c, e.childLanes = a, t;
    }
    function bm(e, t, a) {
      var c = t.pendingProps;
      switch (Ed(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Mt(t), null;
        case 1:
          return Mt(t), null;
        case 3:
          return a = t.stateNode, c = null, e !== null && (c = e.memoizedState.cache), t.memoizedState.cache !== c && (t.flags |= 2048), qn(wl, t), _(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Bi(t) ? (wc(), Du(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Os())), Mt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Du(t), f !== null ? (Mt(t), Kp(
            t,
            f
          )) : (Mt(t), $d(
            t,
            o,
            null,
            c,
            a
          ))) : f ? f !== e.memoizedState ? (Du(t), Mt(t), Kp(
            t,
            f
          )) : (Mt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== c && Du(t), Mt(t), $d(
            t,
            o,
            e,
            c,
            a
          )), null;
        case 27:
          if (pe(t), a = Qt(ln.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== c && Du(t);
          else {
            if (!c) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            e = L(), Bi(t) ? Z0(t) : (e = vc(
              o,
              c,
              a,
              e,
              !0
            ), t.stateNode = e, Du(t));
          }
          return Mt(t), null;
        case 5:
          if (pe(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== c && Du(t);
          else {
            if (!c) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            var d = L();
            if (Bi(t))
              Z0(t);
            else {
              switch (f = Qt(ln.current), ys(o, d.ancestorInfo), d = d.context, f = rr(f), d) {
                case v0:
                  f = f.createElementNS(
                    Je,
                    o
                  );
                  break;
                case Bg:
                  f = f.createElementNS(
                    we,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        Je,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        we,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof c.is == "string" ? f.createElement("select", {
                        is: c.is
                      }) : f.createElement("select"), c.multiple ? f.multiple = !0 : c.size && (f.size = c.size);
                      break;
                    default:
                      f = typeof c.is == "string" ? f.createElement(o, {
                        is: c.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || an.call(ob, o) || (ob[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Wt] = t, f[Oa] = c;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (kt(f, o, c), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
              c && Du(t);
            }
          }
          return Mt(t), $d(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== c && Du(t);
          else {
            if (typeof c != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Qt(ln.current), a = L(), Bi(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !mi, c = null, f = za, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Dv(
                      e,
                      a,
                      c
                    ), o !== null && (Ni(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    c = f.memoizedProps, o && (o = Dv(
                      e,
                      a,
                      c
                    ), o !== null && (Ni(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Wt] = t, e = !!(e.nodeValue === a || c !== null && c.suppressHydrationWarning === !0 || Km(e.nodeValue, a)), e || yn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && ps(
                c,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = rr(e).createTextNode(
                c
              ), e[Wt] = t, t.stateNode = e;
          }
          return Mt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (c = Bi(t), a !== null) {
              if (e === null) {
                if (!c)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Wt] = t, Mt(t), (t.mode & We) !== Me && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                wc(), Gc(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== Me && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = Os(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (Yl(t), t) : (Yl(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Mt(t), null;
        case 13:
          if (c = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = c, f = Bi(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Wt] = t, Mt(t), (t.mode & We) !== Me && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                wc(), Gc(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== Me && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Os(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Yl(t), t) : (Yl(t), null);
          }
          return Yl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & We) !== Me && qi(t), t) : (a = c !== null, e = e !== null && e.memoizedState !== null, a && (c = t.child, o = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (o = c.alternate.memoizedState.cachePool.pool), f = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (f = c.memoizedState.cachePool.pool), f !== o && (c.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), ff(t, t.updateQueue), Mt(t), (t.mode & We) !== Me && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return _(t), e === null && ui(
            t.stateNode.containerInfo
          ), Mt(t), null;
        case 10:
          return qn(t.type, t), Mt(t), null;
        case 19:
          if (ye(Ml, t), c = t.memoizedState, c === null) return Mt(t), null;
          if (o = (t.flags & 128) !== 0, f = c.rendering, f === null)
            if (o) sf(c, !1);
            else {
              if (sl !== Do || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Gi(e), f !== null) {
                    for (t.flags |= 128, sf(c, !1), e = f.updateQueue, t.updateQueue = e, ff(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Q0(a, e), a = a.sibling;
                    return je(
                      Ml,
                      Ml.current & u0 | $y,
                      t
                    ), ct && jn(t, c.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              c.tail !== null && Gl() > Eg && (t.flags |= 128, o = !0, sf(c, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Gi(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, ff(t, e), sf(c, !0), c.tail === null && c.tailMode === "hidden" && !f.alternate && !ct)
                  return Mt(t), null;
              } else
                2 * Gl() - c.renderingStartTime > Eg && a !== 536870912 && (t.flags |= 128, o = !0, sf(c, !1), t.lanes = 4194304);
            c.isBackwards ? (f.sibling = t.child, t.child = f) : (e = c.last, e !== null ? e.sibling = f : t.child = f, c.last = f);
          }
          return c.tail !== null ? (e = c.tail, c.rendering = e, c.tail = e.sibling, c.renderingStartTime = Gl(), e.sibling = null, a = Ml.current, a = o ? a & u0 | $y : a & u0, je(Ml, a, t), ct && jn(t, c.treeForkCount), e) : (Mt(t), null);
        case 22:
        case 23:
          return Yl(t), Xn(t), c = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== c && (t.flags |= 8192) : c && (t.flags |= 8192), c ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), a = t.updateQueue, a !== null && ff(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), c = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (c = t.memoizedState.cachePool.pool), c !== a && (t.flags |= 2048), e !== null && ye(jr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qn(wl, t), Mt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $p(e, t) {
      switch (Ed(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Me && qi(t), t) : null;
        case 3:
          return qn(wl, t), _(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return pe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Yl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Me && qi(t), t) : null;
        case 13:
          if (Yl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Me && qi(t), t) : null;
        case 19:
          return ye(Ml, t), null;
        case 4:
          return _(t), null;
        case 10:
          return qn(t.type, t), null;
        case 22:
        case 23:
          return Yl(t), Xn(t), e !== null && ye(jr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Me && qi(t), t) : null;
        case 24:
          return qn(wl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Em(e, t) {
      switch (Ed(t), t.tag) {
        case 3:
          qn(wl, t), _(t);
          break;
        case 26:
        case 27:
        case 5:
          pe(t);
          break;
        case 4:
          _(t);
          break;
        case 31:
          t.memoizedState !== null && Yl(t);
          break;
        case 13:
          Yl(t);
          break;
        case 19:
          ye(Ml, t);
          break;
        case 10:
          qn(t.type, t);
          break;
        case 22:
        case 23:
          Yl(t), Xn(t), e !== null && ye(jr, t);
          break;
        case 24:
          qn(wl, t);
      }
    }
    function _u(e) {
      return (e.mode & We) !== Me;
    }
    function kp(e, t) {
      _u(e) ? (cl(), dc(t, e), da()) : dc(t, e);
    }
    function kd(e, t, a) {
      _u(e) ? (cl(), Pc(
        a,
        e,
        t
      ), da()) : Pc(
        a,
        e,
        t
      );
    }
    function dc(e, t) {
      try {
        var a = t.updateQueue, c = a !== null ? a.lastEffect : null;
        if (c !== null) {
          var o = c.next;
          a = o;
          do {
            if ((a.tag & e) === e && (c = void 0, (e & on) !== sg && (m0 = !0), c = ie(
              t,
              LE,
              a
            ), (e & on) !== sg && (m0 = !1), c !== void 0 && typeof c != "function")) {
              var f = void 0;
              f = (a.tag & au) !== 0 ? "useLayoutEffect" : (a.tag & on) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = c === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof c.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + c, ie(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Ze(t, t.return, h);
      }
    }
    function Pc(e, t, a) {
      try {
        var c = t.updateQueue, o = c !== null ? c.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          c = f;
          do {
            if ((c.tag & e) === e) {
              var d = c.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & on) !== sg && (m0 = !0), o = t, ie(
                o,
                VE,
                o,
                a,
                h
              ), (e & on) !== sg && (m0 = !1));
            }
            c = c.next;
          } while (c !== f);
        }
      } catch (y) {
        Ze(t, t.return, y);
      }
    }
    function Fs(e, t) {
      _u(e) ? (cl(), dc(t, e), da()) : dc(t, e);
    }
    function Wd(e, t, a) {
      _u(e) ? (cl(), Pc(
        a,
        e,
        t
      ), da()) : Pc(
        a,
        e,
        t
      );
    }
    function Tm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || f0 || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          se(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          se(e) || "instance"
        ));
        try {
          ie(
            e,
            Fo,
            t,
            a
          );
        } catch (c) {
          Ze(e, e.return, c);
        }
      }
    }
    function Is(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Wp(e, t) {
      var a = t.memoizedProps, c = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || f0 || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        se(e) || "instance"
      ));
      try {
        var o = zu(
          e.type,
          a
        ), f = ie(
          e,
          Is,
          t,
          o,
          c
        );
        a = GS, f !== void 0 || a.has(e.type) || (a.add(e.type), ie(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Ze(e, e.return, d);
      }
    }
    function Fd(e, t, a) {
      a.props = zu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, _u(e) ? (cl(), ie(
        e,
        nS,
        e,
        t,
        a
      ), da()) : ie(
        e,
        nS,
        e,
        t,
        a
      );
    }
    function Fp(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (_u(e))
            try {
              cl(), e.refCleanup = t(a);
            } finally {
              da();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            se(e)
          ), t.current = a;
      }
    }
    function Ii(e, t) {
      try {
        ie(e, Fp, e);
      } catch (a) {
        Ze(e, t, a);
      }
    }
    function En(e, t) {
      var a = e.ref, c = e.refCleanup;
      if (a !== null)
        if (typeof c == "function")
          try {
            if (_u(e))
              try {
                cl(), ie(e, c);
              } finally {
                da(e);
              }
            else ie(e, c);
          } catch (o) {
            Ze(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (_u(e))
              try {
                cl(), ie(e, a, null);
              } finally {
                da(e);
              }
            else ie(e, a, null);
          } catch (o) {
            Ze(e, t, o);
          }
        else a.current = null;
    }
    function Am(e, t, a, c) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", ng && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, c, a);
    }
    function Ip(e, t, a, c) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", ng && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        c,
        a
      );
    }
    function ei(e) {
      var t = e.type, a = e.memoizedProps, c = e.stateNode;
      try {
        ie(
          e,
          rv,
          c,
          t,
          a,
          e
        );
      } catch (o) {
        Ze(e, e.return, o);
      }
    }
    function Id(e, t, a) {
      try {
        ie(
          e,
          gh,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (c) {
        Ze(e, e.return, c);
      }
    }
    function Om(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ii(e.type) || e.tag === 4;
    }
    function Pd(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Om(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && ii(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function rf(e, t, a) {
      var c = e.tag;
      if (c === 5 || c === 6)
        e = e.stateNode, t ? (hv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (hv(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hn));
      else if (c !== 4 && (c === 27 && ii(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (rf(e, t, a), e = e.sibling; e !== null; )
          rf(e, t, a), e = e.sibling;
    }
    function Ps(e, t, a) {
      var c = e.tag;
      if (c === 5 || c === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (c !== 4 && (c === 27 && ii(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Ps(e, t, a), e = e.sibling; e !== null; )
          Ps(e, t, a), e = e.sibling;
    }
    function zm(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Om(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Pd(e), Ps(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Sh(a), t.flags &= -33), t = Pd(e), Ps(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Pd(e), rf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Dm(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ie(
          e,
          Yu,
          e.type,
          a,
          t,
          e
        );
      } catch (c) {
        Ze(e, e.return, c);
      }
    }
    function _m(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function e1(e, t) {
      if (e = e.containerInfo, s2 = xg, e = md(e), B0(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var c = a.getSelection && a.getSelection();
            if (c && c.rangeCount !== 0) {
              a = c.anchorNode;
              var o = c.anchorOffset, f = c.focusNode;
              c = c.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, z = 0, R = e, E = null;
              t: for (; ; ) {
                for (var q; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || c !== 0 && R.nodeType !== 3 || (y = d + c), R.nodeType === 3 && (d += R.nodeValue.length), (q = R.firstChild) !== null; )
                  E = R, R = q;
                for (; ; ) {
                  if (R === e) break t;
                  if (E === a && ++p === o && (h = d), E === f && ++z === c && (y = d), (q = R.nextSibling) !== null) break;
                  R = E, E = R.parentNode;
                }
                R = q;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (r2 = {
        focusedElem: e,
        selectionRange: a
      }, xg = !1, ia = t; ia !== null; )
        if (t = ia, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, ia = e;
        else
          for (; ia !== null; ) {
            switch (e = t = ia, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Wp(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Of(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Of(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, ia = e;
              break;
            }
            ia = t.return;
          }
    }
    function eh(e, t, a) {
      var c = Kt(), o = vn(), f = Va(), d = gn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Fa(e, a), h & 4 && kp(a, au | $u);
          break;
        case 1:
          if (Fa(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || f0 || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), _u(a) ? (cl(), ie(
                a,
                H1,
                a,
                e
              ), da()) : ie(
                a,
                H1,
                a,
                e
              );
            else {
              var y = zu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || f0 || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), _u(a) ? (cl(), ie(
                a,
                tS,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), da()) : ie(
                a,
                tS,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Tm(a), h & 512 && Ii(a, a.return);
          break;
        case 3:
          if (t = pu(), Fa(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              ie(
                a,
                Fo,
                h,
                y
              );
            } catch (z) {
              Ze(a, a.return, z);
            }
          }
          e.effectDuration += Ko(t);
          break;
        case 27:
          t === null && h & 4 && Dm(a);
        case 26:
        case 5:
          if (Fa(e, a), t === null) {
            if (h & 4) ei(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                ie(
                  a,
                  dv,
                  y,
                  e,
                  t,
                  a
                );
              } catch (z) {
                Ze(
                  a,
                  a.return,
                  z
                );
              }
            }
          }
          h & 512 && Ii(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = pu(), Fa(e, a), e = a.stateNode, e.effectDuration += ra(h);
            try {
              ie(
                a,
                Am,
                a,
                t,
                Kf,
                e.effectDuration
              );
            } catch (z) {
              Ze(a, a.return, z);
            }
          } else Fa(e, a);
          break;
        case 31:
          Fa(e, a), h & 4 && Mm(e, a);
          break;
        case 13:
          Fa(e, a), h & 4 && Cm(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = mc.bind(
            null,
            a
          ), Ov(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || zo, !h) {
            t = t !== null && t.memoizedState !== null || Vl, y = zo;
            var p = Vl;
            zo = h, (Vl = t) && !p ? (Zn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && yd(
              a,
              Te,
              _e
            )) : Fa(e, a), zo = y, Vl = p;
          }
          break;
        case 30:
          break;
        default:
          Fa(e, a);
      }
      (a.mode & We) !== Me && 0 <= Te && 0 <= _e && ((pl || 0.05 < fl) && Yn(
        a,
        Te,
        _e,
        fl,
        nl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < _e - Te && (_m(
        a.return.alternate,
        a.return
      ) || mn(
        a,
        Te,
        _e,
        "Mount"
      ))), Nl(c), La(o), nl = f, pl = d;
    }
    function ml(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ml(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && M(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Vt(e, t, a) {
      for (a = a.child; a !== null; )
        Rm(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Rm(e, t, a) {
      if (_l && typeof _l.onCommitFiberUnmount == "function")
        try {
          _l.onCommitFiberUnmount(ro, a);
        } catch (p) {
          qu || (qu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var c = Kt(), o = vn(), f = Va(), d = gn();
      switch (a.tag) {
        case 26:
          Vl || En(a, t), Vt(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Vl || En(a, t);
          var h = Zl, y = Dn;
          ii(a.type) && (Zl = a.stateNode, Dn = !1), Vt(
            e,
            t,
            a
          ), ie(
            a,
            gc,
            a.stateNode
          ), Zl = h, Dn = y;
          break;
        case 5:
          Vl || En(a, t);
        case 6:
          if (h = Zl, y = Dn, Zl = null, Vt(
            e,
            t,
            a
          ), Zl = h, Dn = y, Zl !== null)
            if (Dn)
              try {
                ie(
                  a,
                  yv,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Ze(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                ie(
                  a,
                  mv,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Ze(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Zl !== null && (Dn ? (e = Zl, ao(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), io(e)) : ao(Zl, a.stateNode));
          break;
        case 4:
          h = Zl, y = Dn, Zl = a.stateNode.containerInfo, Dn = !0, Vt(
            e,
            t,
            a
          ), Zl = h, Dn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Pc(
            on,
            a,
            t
          ), Vl || kd(
            a,
            t,
            au
          ), Vt(
            e,
            t,
            a
          );
          break;
        case 1:
          Vl || (En(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Fd(
            a,
            t,
            h
          )), Vt(
            e,
            t,
            a
          );
          break;
        case 21:
          Vt(
            e,
            t,
            a
          );
          break;
        case 22:
          Vl = (h = Vl) || a.memoizedState !== null, Vt(
            e,
            t,
            a
          ), Vl = h;
          break;
        default:
          Vt(
            e,
            t,
            a
          );
      }
      (a.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Yn(
        a,
        Te,
        _e,
        fl,
        nl
      ), Nl(c), La(o), nl = f, pl = d;
    }
    function Mm(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          ie(
            t,
            bh,
            e
          );
        } catch (a) {
          Ze(t, t.return, a);
        }
      }
    }
    function Cm(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ie(
            t,
            Fm,
            e
          );
        } catch (a) {
          Ze(t, t.return, a);
        }
    }
    function Pp(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new wS()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new wS()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function ti(e, t) {
      var a = Pp(e);
      t.forEach(function(c) {
        if (!a.has(c)) {
          if (a.add(c), xu)
            if (s0 !== null && r0 !== null)
              vf(r0, s0);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = to.bind(null, e, c);
          c.then(o, o);
        }
      });
    }
    function va(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var c = 0; c < a.length; c++) {
          var o = e, f = t, d = a[c], h = Kt(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (ii(y.type)) {
                  Zl = y.stateNode, Dn = !1;
                  break e;
                }
                break;
              case 5:
                Zl = y.stateNode, Dn = !1;
                break e;
              case 3:
              case 4:
                Zl = y.stateNode.containerInfo, Dn = !0;
                break e;
            }
            y = y.return;
          }
          if (Zl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Rm(o, f, d), Zl = null, Dn = !1, (d.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
            d,
            Te,
            _e,
            "Unmount"
          ), Nl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          er(t, e), t = t.sibling;
    }
    function er(e, t) {
      var a = Kt(), c = vn(), o = Va(), f = gn(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          va(t, e), ga(e), h & 4 && (Pc(
            on | $u,
            e,
            e.return
          ), dc(on | $u, e), kd(
            e,
            e.return,
            au | $u
          ));
          break;
        case 1:
          if (va(t, e), ga(e), h & 512 && (Vl || d === null || En(d, d.return)), h & 64 && zo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Oc, va(t, e), ga(e), h & 512 && (Vl || d === null || En(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Gf] || p[Wt] || p.namespaceURI === Je || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), kt(p, h, d), p[Wt] = e, he(p), h = p;
                        break e;
                      case "link":
                        var z = _f(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (z) {
                          for (var R = 0; R < z.length; R++)
                            if (p = z[R], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              z.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), kt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (z = _f(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < z.length; R++)
                            if (p = z[R], mt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              z.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), kt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Wt] = e, he(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  Rv(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Ah(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Rv(
                y,
                e.type,
                e.stateNode
              ) : Ah(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && Id(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          va(t, e), ga(e), h & 512 && (Vl || d === null || En(d, d.return)), d !== null && h & 4 && Id(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (va(t, e), ga(e), h & 512 && (Vl || d === null || En(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              ie(
                e,
                Sh,
                y
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, Id(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (Z1 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (va(t, e), ga(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              ie(
                e,
                t1,
                y,
                d,
                h
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          }
          break;
        case 3:
          if (y = pu(), Yg = null, p = Oc, Oc = Eh(t.containerInfo), va(t, e), Oc = p, ga(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              ie(
                e,
                Wm,
                t.containerInfo
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          Z1 && (Z1 = !1, ev(e)), t.effectDuration += Ko(
            y
          );
          break;
        case 4:
          h = Oc, Oc = Eh(
            e.stateNode.containerInfo
          ), va(t, e), ga(e), Oc = h;
          break;
        case 12:
          h = pu(), va(t, e), ga(e), e.stateNode.effectDuration += ra(h);
          break;
        case 31:
          va(t, e), ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ti(e, h)));
          break;
        case 13:
          va(t, e), ga(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (bg = Gl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ti(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, q = zo, le = Vl;
          if (zo = q || y, Vl = le || E, va(t, e), Vl = le, zo = q, E && !y && !q && !le && (e.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && yd(
            e,
            Te,
            _e
          ), ga(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Hy : t._visibility | Hy, !y || d === null || E || zo || Vl || (li(e), (e.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
              e,
              Te,
              _e,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  E = d = t;
                  try {
                    p = E.stateNode, y ? ie(
                      E,
                      vv,
                      p
                    ) : ie(
                      E,
                      bv,
                      E.stateNode,
                      E.memoizedProps
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  E = t;
                  try {
                    z = E.stateNode, y ? ie(
                      E,
                      gv,
                      z
                    ) : ie(
                      E,
                      Ev,
                      z,
                      E.memoizedProps
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  E = t;
                  try {
                    R = E.stateNode, y ? ie(
                      E,
                      pv,
                      R
                    ) : ie(
                      E,
                      Sv,
                      E.stateNode
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, ti(e, d))));
          break;
        case 19:
          va(t, e), ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ti(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          va(t, e), ga(e);
      }
      (e.mode & We) !== Me && 0 <= Te && 0 <= _e && ((pl || 0.05 < fl) && Yn(
        e,
        Te,
        _e,
        fl,
        nl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < _e - Te && (_m(
        e.return.alternate,
        e.return
      ) || mn(
        e,
        Te,
        _e,
        "Mount"
      ))), Nl(a), La(c), nl = o, pl = f;
    }
    function ga(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ie(e, zm, e);
        } catch (a) {
          Ze(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ev(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ev(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Fa(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          eh(e, t.alternate, t), t = t.sibling;
    }
    function th(e) {
      var t = Kt(), a = vn(), c = Va(), o = gn();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kd(
            e,
            e.return,
            au
          ), li(e);
          break;
        case 1:
          En(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Fd(
            e,
            e.return,
            f
          ), li(e);
          break;
        case 27:
          ie(
            e,
            gc,
            e.stateNode
          );
        case 26:
        case 5:
          En(e, e.return), li(e);
          break;
        case 22:
          e.memoizedState === null && li(e);
          break;
        case 30:
          li(e);
          break;
        default:
          li(e);
      }
      (e.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Yn(
        e,
        Te,
        _e,
        fl,
        nl
      ), Nl(t), La(a), nl = c, pl = o;
    }
    function li(e) {
      for (e = e.child; e !== null; )
        th(e), e = e.sibling;
    }
    function Um(e, t, a, c) {
      var o = Kt(), f = vn(), d = Va(), h = gn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Zn(
            e,
            a,
            c
          ), kp(a, au);
          break;
        case 1:
          if (Zn(
            e,
            a,
            c
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ie(
            a,
            H1,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ie(
                a,
                I0,
                t,
                e
              );
            } catch (p) {
              Ze(a, a.return, p);
            }
          }
          c && y & 64 && Tm(a), Ii(a, a.return);
          break;
        case 27:
          Dm(a);
        case 26:
        case 5:
          Zn(
            e,
            a,
            c
          ), c && t === null && y & 4 && ei(a), Ii(a, a.return);
          break;
        case 12:
          if (c && y & 4) {
            y = pu(), Zn(
              e,
              a,
              c
            ), c = a.stateNode, c.effectDuration += ra(y);
            try {
              ie(
                a,
                Am,
                a,
                t,
                Kf,
                c.effectDuration
              );
            } catch (p) {
              Ze(a, a.return, p);
            }
          } else
            Zn(
              e,
              a,
              c
            );
          break;
        case 31:
          Zn(
            e,
            a,
            c
          ), c && y & 4 && Mm(e, a);
          break;
        case 13:
          Zn(
            e,
            a,
            c
          ), c && y & 4 && Cm(e, a);
          break;
        case 22:
          a.memoizedState === null && Zn(
            e,
            a,
            c
          ), Ii(a, a.return);
          break;
        case 30:
          break;
        default:
          Zn(
            e,
            a,
            c
          );
      }
      (a.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Yn(
        a,
        Te,
        _e,
        fl,
        nl
      ), Nl(o), La(f), nl = d, pl = h;
    }
    function Zn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Um(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function tr(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Yi(e), a != null && _s(a));
    }
    function lr(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Yi(t), e != null && _s(e));
    }
    function Ia(e, t, a, c, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          Hm(
            e,
            t,
            a,
            c,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function Hm(e, t, a, c, o) {
      var f = Kt(), d = vn(), h = Va(), y = gn(), p = Lf, z = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & We) !== Me && 0 < t.actualStartTime && (t.flags & 1) !== 0 && pd(
            t,
            t.actualStartTime,
            o,
            Fl,
            a
          ), Ia(
            e,
            t,
            a,
            c,
            o
          ), z & 2048 && Fs(t, fn | $u);
          break;
        case 1:
          (t.mode & We) !== Me && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? j0(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && pd(
            t,
            t.actualStartTime,
            o,
            Fl,
            a
          )), Ia(
            e,
            t,
            a,
            c,
            o
          );
          break;
        case 3:
          var R = pu(), E = Fl;
          Fl = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Ia(
            e,
            t,
            a,
            c,
            o
          ), Fl = E, z & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), c = t.memoizedState.cache, c !== a && (Yi(c), a != null && _s(a))), e.passiveEffectDuration += Ko(
            R
          );
          break;
        case 12:
          if (z & 2048) {
            z = pu(), Ia(
              e,
              t,
              a,
              c,
              o
            ), e = t.stateNode, e.passiveEffectDuration += ra(z);
            try {
              ie(
                t,
                Ip,
                t,
                t.alternate,
                Kf,
                e.passiveEffectDuration
              );
            } catch (q) {
              Ze(t, t.return, q);
            }
          } else
            Ia(
              e,
              t,
              a,
              c,
              o
            );
          break;
        case 31:
          z = Fl, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R !== null && E === null ? (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && j0(
            t,
            t.actualStartTime,
            o,
            R
          )) : Fl = !0) : Fl = !1, Ia(
            e,
            t,
            a,
            c,
            o
          ), Fl = z;
          break;
        case 13:
          z = Fl, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R === null || R.dehydrated === null || E !== null && E.dehydrated !== null ? Fl = !1 : (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && j0(
            t,
            t.actualStartTime,
            o,
            R
          )) : Fl = !0), Ia(
            e,
            t,
            a,
            c,
            o
          ), Fl = z;
          break;
        case 23:
          break;
        case 22:
          E = t.stateNode, R = t.alternate, t.memoizedState !== null ? E._visibility & yo ? Ia(
            e,
            t,
            a,
            c,
            o
          ) : Pi(
            e,
            t,
            a,
            c,
            o
          ) : E._visibility & yo ? Ia(
            e,
            t,
            a,
            c,
            o
          ) : (E._visibility |= yo, ai(
            e,
            t,
            a,
            c,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & We) === Me || Fl || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && yd(t, e, o), 0 <= Te && 0 <= _e && 0.05 < _e - Te && yd(
            t,
            Te,
            _e
          ))), z & 2048 && tr(
            R,
            t
          );
          break;
        case 24:
          Ia(
            e,
            t,
            a,
            c,
            o
          ), z & 2048 && lr(t.alternate, t);
          break;
        default:
          Ia(
            e,
            t,
            a,
            c,
            o
          );
      }
      (t.mode & We) !== Me && ((e = !Fl && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && mn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Te && 0 <= _e && ((pl || 0.05 < fl) && Yn(
        t,
        Te,
        _e,
        fl,
        nl
      ), e && 0.05 < _e - Te && mn(
        t,
        Te,
        _e,
        "Mount"
      ))), Nl(f), La(d), nl = h, pl = y, Lf = p;
    }
    function ai(e, t, a, c, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        ar(
          e,
          t,
          a,
          c,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function ar(e, t, a, c, o, f) {
      var d = Kt(), h = vn(), y = Va(), p = gn(), z = Lf;
      o && (t.mode & We) !== Me && 0 < t.actualStartTime && (t.flags & 1) !== 0 && pd(
        t,
        t.actualStartTime,
        f,
        Fl,
        a
      );
      var R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ai(
            e,
            t,
            a,
            c,
            o,
            f
          ), Fs(t, fn);
          break;
        case 23:
          break;
        case 22:
          var E = t.stateNode;
          t.memoizedState !== null ? E._visibility & yo ? ai(
            e,
            t,
            a,
            c,
            o,
            f
          ) : Pi(
            e,
            t,
            a,
            c,
            f
          ) : (E._visibility |= yo, ai(
            e,
            t,
            a,
            c,
            o,
            f
          )), o && R & 2048 && tr(
            t.alternate,
            t
          );
          break;
        case 24:
          ai(
            e,
            t,
            a,
            c,
            o,
            f
          ), o && R & 2048 && lr(t.alternate, t);
          break;
        default:
          ai(
            e,
            t,
            a,
            c,
            o,
            f
          );
      }
      (t.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Yn(
        t,
        Te,
        _e,
        fl,
        nl
      ), Nl(d), La(h), nl = y, pl = p, Lf = z;
    }
    function Pi(e, t, a, c, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = c, p = t !== null ? t.actualStartTime : o, z = Lf;
          (f.mode & We) !== Me && 0 < f.actualStartTime && (f.flags & 1) !== 0 && pd(
            f,
            f.actualStartTime,
            p,
            Fl,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              Pi(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && tr(f.alternate, f);
              break;
            case 24:
              Pi(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && lr(f.alternate, f);
              break;
            default:
              Pi(
                d,
                f,
                h,
                y,
                p
              );
          }
          Lf = z, f = t;
        }
    }
    function eo(e, t, a) {
      if (e.subtreeFlags & Iy)
        for (e = e.child; e !== null; )
          lh(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function lh(e, t, a) {
      switch (e.tag) {
        case 26:
          eo(
            e,
            t,
            a
          ), e.flags & Iy && e.memoizedState !== null && ly(
            a,
            Oc,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          eo(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var c = Oc;
          Oc = Eh(
            e.stateNode.containerInfo
          ), eo(
            e,
            t,
            a
          ), Oc = c;
          break;
        case 22:
          e.memoizedState === null && (c = e.alternate, c !== null && c.memoizedState !== null ? (c = Iy, Iy = 16777216, eo(
            e,
            t,
            a
          ), Iy = c) : eo(
            e,
            t,
            a
          ));
          break;
        default:
          eo(
            e,
            t,
            a
          );
      }
    }
    function Nm(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Pa(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var c = t[a], o = Kt();
            ia = c, Ru(
              c,
              e
            ), (c.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
              c,
              Te,
              _e,
              "Unmount"
            ), Nl(o);
          }
        Nm(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          ah(e), e = e.sibling;
    }
    function ah(e) {
      var t = Kt(), a = vn(), c = Va(), o = gn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Pa(e), e.flags & 2048 && Wd(
            e,
            e.return,
            fn | $u
          );
          break;
        case 3:
          var f = pu();
          Pa(e), e.stateNode.passiveEffectDuration += Ko(f);
          break;
        case 12:
          f = pu(), Pa(e), e.stateNode.passiveEffectDuration += ra(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & yo && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~yo, nh(e), (e.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
            e,
            Te,
            _e,
            "Disconnect"
          )) : Pa(e);
          break;
        default:
          Pa(e);
      }
      (e.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Yn(
        e,
        Te,
        _e,
        fl,
        nl
      ), Nl(t), La(a), pl = o, nl = c;
    }
    function nh(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var c = t[a], o = Kt();
            ia = c, Ru(
              c,
              e
            ), (c.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
              c,
              Te,
              _e,
              "Unmount"
            ), Nl(o);
          }
        Nm(e);
      }
      for (e = e.child; e !== null; )
        Bm(e), e = e.sibling;
    }
    function Bm(e) {
      var t = Kt(), a = vn(), c = Va(), o = gn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Wd(
            e,
            e.return,
            fn
          ), nh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & yo && (f._visibility &= ~yo, nh(e));
          break;
        default:
          nh(e);
      }
      (e.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Yn(
        e,
        Te,
        _e,
        fl,
        nl
      ), Nl(t), La(a), pl = o, nl = c;
    }
    function Ru(e, t) {
      for (; ia !== null; ) {
        var a = ia, c = a, o = t, f = Kt(), d = vn(), h = Va(), y = gn();
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Wd(
              c,
              o,
              fn
            );
            break;
          case 23:
          case 22:
            c.memoizedState !== null && c.memoizedState.cachePool !== null && (o = c.memoizedState.cachePool.pool, o != null && Yi(o));
            break;
          case 24:
            _s(c.memoizedState.cache);
        }
        if ((c.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Yn(
          c,
          Te,
          _e,
          fl,
          nl
        ), Nl(f), La(d), pl = y, nl = h, c = a.child, c !== null) c.return = a, ia = c;
        else
          e: for (a = e; ia !== null; ) {
            if (c = ia, f = c.sibling, d = c.return, ml(c), c === a) {
              ia = null;
              break e;
            }
            if (f !== null) {
              f.return = d, ia = f;
              break e;
            }
            ia = d;
          }
      }
    }
    function Ym() {
      kE.forEach(function(e) {
        return e();
      });
    }
    function jm() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function aa(e) {
      if ((dt & Il) !== oa && Ie !== 0)
        return Ie & -Ie;
      var t = G.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Jm()) : Cc();
    }
    function df() {
      if (Rn === 0)
        if ((Ie & 536870912) === 0 || ct) {
          var e = Dr;
          Dr <<= 1, (Dr & 3932160) === 0 && (Dr = 262144), Rn = e;
        } else Rn = 536870912;
      return e = lu.current, e !== null && (e.flags |= 32), Rn;
    }
    function Ue(e, t, a) {
      if (m0 && console.error("useInsertionEffect must not schedule updates."), l2 && (Og = !0), (e === Xt && (Nt === Qr || Nt === Lr) || e.cancelPendingCommit !== null) && (Mu(e, 0), Tn(
        e,
        Ie,
        Rn,
        !1
      )), Cn(e, a), (dt & Il) !== oa && e === Xt) {
        if (ju)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = tt && se(tt) || "Unknown", tb.has(e) || (tb.add(e), t = se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              eb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), eb = !0);
          }
      } else
        xu && Al(e, t, a), ir(t), e === Xt && ((dt & Il) === oa && (ts |= a), sl === If && Tn(
          e,
          Ie,
          Rn,
          !1
        )), Ma(e);
    }
    function tv(e, t, a) {
      if ((dt & (Il | nu)) !== oa)
        throw Error("Should not already be working.");
      if (Ie !== 0 && tt !== null) {
        var c = tt, o = Gl();
        switch (K2) {
          case tp:
          case Qr:
            var f = xy;
            Ft && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                wu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              wu,
              void 0,
              "primary-light"
            ));
            break;
          case Lr:
            f = xy, Ft && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                wu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              wu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Ft && (c = o - xy, 3 > c || console.timeStamp(
              "Blocked",
              xy,
              o,
              wu,
              void 0,
              5 > c ? "primary-light" : 10 > c ? "primary" : 100 > c ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || vl(e, t)) ? hc(e, t) : yf(e, t, !0);
      var d = a;
      do {
        if (f === Do) {
          d0 && !a && Tn(e, t, 0, !1), t = Nt, xy = Xl(), K2 = t;
          break;
        } else {
          if (c = Gl(), o = e.current.alternate, d && !av(o)) {
            Bn(t), o = ca, f = c, !Ft || f <= o || (El ? El.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                st,
                it,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              st,
              it,
              "error"
            )), ni(t, c), f = yf(e, t, !1), d = !1;
            continue;
          }
          if (f === Xr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Bn(t), q0(
                ca,
                c,
                t,
                El
              ), ni(t, c), t = h;
              e: {
                c = e, f = d, d = ap;
                var y = c.current.memoizedState.isDehydrated;
                if (y && (Mu(c, h).flags |= 256), h = yf(
                  c,
                  h,
                  !1
                ), h !== Xr) {
                  if ($1 && !y) {
                    c.errorRecoveryDisabledLanes |= f, ts |= f, f = If;
                    break e;
                  }
                  c = sn, sn = d, c !== null && (sn === null ? sn = c : sn.push.apply(
                    sn,
                    c
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Xr) continue;
              c = Gl();
            }
          }
          if (f === ep) {
            Bn(t), q0(
              ca,
              c,
              t,
              El
            ), ni(t, c), Mu(e, 0), Tn(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Do:
              case ep:
                throw Error("Root did not complete. This is a bug in React.");
              case If:
                if ((t & 4194048) !== t) break;
              case pg:
                Bn(t), Up(
                  ca,
                  c,
                  t,
                  El
                ), ni(t, c), o = t, (o & 127) !== 0 ? tg = c : (o & 4194048) !== 0 && (lg = c), Tn(
                  a,
                  t,
                  Rn,
                  !Pf
                );
                break e;
              case Xr:
                sn = null;
                break;
              case yg:
              case XS:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              xt(
                a,
                o,
                t,
                sn,
                np,
                Sg,
                Rn,
                ts,
                Vr,
                f,
                null,
                null,
                ca,
                c
              );
            else {
              if ((t & 62914560) === t && (d = bg + VS - Gl(), 10 < d)) {
                if (Tn(
                  a,
                  t,
                  Rn,
                  !Pf
                ), Si(a, 0, !0) !== 0) break e;
                zc = t, a.timeoutHandle = fb(
                  lv.bind(
                    null,
                    a,
                    o,
                    sn,
                    np,
                    Sg,
                    t,
                    Rn,
                    ts,
                    Vr,
                    Pf,
                    f,
                    "Throttled",
                    ca,
                    c
                  ),
                  d
                );
                break e;
              }
              lv(
                a,
                o,
                sn,
                np,
                Sg,
                t,
                Rn,
                ts,
                Vr,
                Pf,
                f,
                null,
                ca,
                c
              );
            }
          }
        }
        break;
      } while (!0);
      Ma(e);
    }
    function lv(e, t, a, c, o, f, d, h, y, p, z, R, E, q) {
      e.timeoutHandle = kr;
      var le = t.subtreeFlags, oe = null;
      if ((le & 8192 || (le & 16785408) === 16785408) && (oe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: hn
      }, lh(t, f, oe), le = (f & 62914560) === f ? bg - Gl() : (f & 4194048) === f ? LS - Gl() : 0, le = Oh(oe, le), le !== null)) {
        zc = f, e.cancelPendingCommit = le(
          xt.bind(
            null,
            e,
            t,
            f,
            a,
            c,
            o,
            d,
            h,
            y,
            z,
            oe,
            oe.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < oe.count ? 0 < oe.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : oe.imgCount === 1 ? "Suspended on an Image" : 0 < oe.imgCount ? "Suspended on Images" : null,
            E,
            q
          )
        ), Tn(
          e,
          f,
          d,
          !p
        );
        return;
      }
      xt(
        e,
        t,
        f,
        a,
        c,
        o,
        d,
        h,
        y,
        z,
        oe,
        R,
        E,
        q
      );
    }
    function av(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var c = 0; c < a.length; c++) {
            var o = a[c], f = o.getSnapshot;
            o = o.value;
            try {
              if (!un(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Tn(e, t, a, c) {
      t &= ~k1, t &= ~ts, e.suspendedLanes |= t, e.pingedLanes &= ~t, c && (e.warmLanes |= t), c = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - kl(o), d = 1 << f;
        c[f] = -1, o &= ~d;
      }
      a !== 0 && Ho(e, a, t);
    }
    function en() {
      return (dt & (Il | nu)) === oa ? (Uu(0), !1) : !0;
    }
    function uh() {
      if (tt !== null) {
        if (Nt === _n)
          var e = tt.return;
        else
          e = tt, Zo(), Lc(e), a0 = null, Ky = 0, e = tt;
        for (; e !== null; )
          Em(e.alternate, e), e = e.return;
        tt = null;
      }
    }
    function ni(e, t) {
      (e & 127) !== 0 && (Hr = t), (e & 4194048) !== 0 && (bo = t), (e & 62914560) !== 0 && (Z2 = t), (e & 2080374784) !== 0 && (J2 = t);
    }
    function Mu(e, t) {
      Ft && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        it,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        it,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        it,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        it,
        "primary-light"
      ));
      var a = ca;
      if (ca = Xl(), Ie !== 0 && 0 < a) {
        if (Bn(Ie), sl === yg || sl === If)
          Up(
            a,
            ca,
            t,
            El
          );
        else {
          var c = ca, o = El;
          if (Ft && !(c <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                c,
                st,
                it,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              c,
              st,
              it,
              f
            );
          }
        }
        ni(Ie, ca);
      }
      if (a = El, El = null, (t & 127) !== 0) {
        El = Yy, o = 0 <= yi && yi < Hr ? Hr : yi, c = 0 <= Nr && Nr < Hr ? Hr : Nr, f = 0 <= c ? c : 0 <= o ? o : ca, 0 <= tg ? (Bn(2), Hp(
          tg,
          f,
          t,
          a
        )) : ag & 127, a = o;
        var h = c, y = jy, p = 0 < e0, z = $f === By, R = $f === eg;
        if (o = ca, c = Yy, f = _1, d = R1, Ft) {
          if (st = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var E = p ? "secondary-light" : "warning";
            c ? c.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                st,
                it,
                E
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              st,
              it,
              E
            );
          }
          o > a && (h = z ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", z = R ? "Promise Resolved" : z ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: st,
                trackGroup: it,
                color: h
              }
            }
          }, c ? c.run(
            performance.measure.bind(
              performance,
              z,
              a
            )
          ) : performance.measure(z, a));
        }
        yi = -1.1, $f = 0, R1 = _1 = null, tg = -1.1, e0 = Nr, Nr = -1.1, Hr = Xl();
      }
      if ((t & 4194048) !== 0 && (El = qy, o = 0 <= Eo && Eo < bo ? bo : Eo, a = 0 <= Ju && Ju < bo ? bo : Ju, c = 0 <= kf && kf < bo ? bo : kf, f = 0 <= c ? c : 0 <= a ? a : ca, 0 <= lg ? (Bn(256), Hp(
        lg,
        f,
        t,
        El
      )) : ag & 4194048, R = c, h = Br, y = 0 < Wf, p = M1 === eg, f = ca, c = qy, d = L2, z = V2, Ft && (st = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (E = y ? "secondary-light" : "warning", c ? c.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          st,
          it,
          E
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        st,
        it,
        E
      )), a > o && (c ? c.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          st,
          it,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        st,
        it,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], z != null && R.push(["Component name", z]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: st,
            trackGroup: it,
            color: "primary-light"
          }
        }
      }, c ? c.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Ju = Eo = -1.1, M1 = 0, lg = -1.1, Wf = kf, kf = -1.1, bo = Xl()), (t & 62914560) !== 0 && (ag & 62914560) !== 0 && (Bn(4194304), x0(Z2, ca)), (t & 2080374784) !== 0 && (ag & 2080374784) !== 0 && (Bn(268435456), x0(J2, ca)), a = e.timeoutHandle, a !== kr && (e.timeoutHandle = kr, o3(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), zc = 0, uh(), Xt = e, tt = a = mu(
        e.current,
        null
      ), Ie = t, Nt = _n, uu = null, Pf = !1, d0 = vl(e, t), $1 = !1, sl = Do, Vr = Rn = k1 = ts = es = 0, sn = ap = null, Sg = !1, (t & 8) !== 0 && (t |= t & 32), c = e.entangledLanes, c !== 0)
        for (e = e.entanglements, c &= t; 0 < c; )
          o = 31 - kl(c), f = 1 << o, t |= e[o], c &= ~f;
      return vi = t, vd(), e = q2(), 1e3 < e - j2 && (G.recentlyCreatedOwnerStacks = 0, j2 = e), Tc.discardPendingWarnings(), a;
    }
    function Jn(e, t) {
      Be = null, G.H = Fy, G.getCurrentStack = null, ju = !1, Na = null, t === l0 || t === ig ? (t = xi(), Nt = tp) : t === N1 ? (t = xi(), Nt = QS) : Nt = t === L1 ? K1 : t !== null && typeof t == "object" && typeof t.then == "function" ? lp : vg, uu = t;
      var a = tt;
      a === null ? (sl = ep, Js(
        e,
        sa(t, e.current)
      )) : a.mode & We && Od(a);
    }
    function qm() {
      var e = lu.current;
      return e === null ? !0 : (Ie & 4194048) === Ie ? Ku === null : (Ie & 62914560) === Ie || (Ie & 536870912) !== 0 ? e === Ku : !1;
    }
    function ch() {
      var e = G.H;
      return G.H = Fy, e === null ? Fy : e;
    }
    function xm() {
      var e = G.A;
      return G.A = $E, e;
    }
    function hf(e) {
      El === null && (El = e._debugTask == null ? null : e._debugTask);
    }
    function mf() {
      sl = If, Pf || (Ie & 4194048) !== Ie && lu.current !== null || (d0 = !0), (es & 134217727) === 0 && (ts & 134217727) === 0 || Xt === null || Tn(
        Xt,
        Ie,
        Rn,
        !1
      );
    }
    function yf(e, t, a) {
      var c = dt;
      dt |= Il;
      var o = ch(), f = xm();
      if (Xt !== e || Ie !== t) {
        if (xu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (vf(e, Ie), d.clear()), Ga(e, t);
        }
        np = null, Mu(e, t);
      }
      t = !1, d = sl;
      e: do
        try {
          if (Nt !== _n && tt !== null) {
            var h = tt, y = uu;
            switch (Nt) {
              case K1:
                uh(), d = pg;
                break e;
              case tp:
              case Qr:
              case Lr:
              case lp:
                lu.current === null && (t = !0);
                var p = Nt;
                if (Nt = _n, uu = null, pf(e, h, y, p), a && d0) {
                  d = Do;
                  break e;
                }
                break;
              default:
                p = Nt, Nt = _n, uu = null, pf(e, h, y, p);
            }
          }
          Gm(), d = sl;
          break;
        } catch (z) {
          Jn(e, z);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Zo(), dt = c, G.H = o, G.A = f, tt === null && (Xt = null, Ie = 0, vd()), d;
    }
    function Gm() {
      for (; tt !== null; ) ih(tt);
    }
    function hc(e, t) {
      var a = dt;
      dt |= Il;
      var c = ch(), o = xm();
      if (Xt !== e || Ie !== t) {
        if (xu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (vf(e, Ie), f.clear()), Ga(e, t);
        }
        np = null, Eg = Gl() + ZS, Mu(e, t);
      } else
        d0 = vl(
          e,
          t
        );
      e: do
        try {
          if (Nt !== _n && tt !== null)
            t: switch (t = tt, f = uu, Nt) {
              case vg:
                Nt = _n, uu = null, pf(
                  e,
                  t,
                  f,
                  vg
                );
                break;
              case Qr:
              case Lr:
                if (W0(f)) {
                  Nt = _n, uu = null, wm(t);
                  break;
                }
                t = function() {
                  Nt !== Qr && Nt !== Lr || Xt !== e || (Nt = gg), Ma(e);
                }, f.then(t, t);
                break e;
              case tp:
                Nt = gg;
                break e;
              case QS:
                Nt = J1;
                break e;
              case gg:
                W0(f) ? (Nt = _n, uu = null, wm(t)) : (Nt = _n, uu = null, pf(
                  e,
                  t,
                  f,
                  gg
                ));
                break;
              case J1:
                var d = null;
                switch (tt.tag) {
                  case 26:
                    d = tt.memoizedState;
                  case 5:
                  case 27:
                    var h = tt;
                    if (d ? at(d) : h.stateNode.complete) {
                      Nt = _n, uu = null;
                      var y = h.sibling;
                      if (y !== null) tt = y;
                      else {
                        var p = h.return;
                        p !== null ? (tt = p, nr(p)) : tt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Nt = _n, uu = null, pf(
                  e,
                  t,
                  f,
                  J1
                );
                break;
              case lp:
                Nt = _n, uu = null, pf(
                  e,
                  t,
                  f,
                  lp
                );
                break;
              case K1:
                uh(), sl = pg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          G.actQueue !== null ? Gm() : Sl();
          break;
        } catch (z) {
          Jn(e, z);
        }
      while (!0);
      return Zo(), G.H = c, G.A = o, dt = a, tt !== null ? Do : (Xt = null, Ie = 0, vd(), sl);
    }
    function Sl() {
      for (; tt !== null && !Yh(); )
        ih(tt);
    }
    function ih(e) {
      var t = e.alternate;
      (e.mode & We) !== Me ? (lc(e), t = ie(
        e,
        Ws,
        t,
        e,
        vi
      ), Od(e)) : t = ie(
        e,
        Ws,
        t,
        e,
        vi
      ), e.memoizedProps = e.pendingProps, t === null ? nr(e) : tt = t;
    }
    function wm(e) {
      var t = ie(e, xl, e);
      e.memoizedProps = e.pendingProps, t === null ? nr(e) : tt = t;
    }
    function xl(e) {
      var t = e.alternate, a = (e.mode & We) !== Me;
      switch (a && lc(e), e.tag) {
        case 15:
        case 0:
          t = ym(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ie
          );
          break;
        case 11:
          t = ym(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ie
          );
          break;
        case 5:
          Lc(e);
        default:
          Em(t, e), e = tt = Q0(e, vi), t = Ws(t, e, vi);
      }
      return a && Od(e), t;
    }
    function pf(e, t, a, c) {
      Zo(), Lc(t), a0 = null, Ky = 0;
      var o = t.return;
      try {
        if (om(
          e,
          o,
          t,
          a,
          Ie
        )) {
          sl = ep, Js(
            e,
            sa(a, e.current)
          ), tt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw tt = o, f;
        sl = ep, Js(
          e,
          sa(a, e.current)
        ), tt = null;
        return;
      }
      t.flags & 32768 ? (ct || c === vg ? e = !0 : d0 || (Ie & 536870912) !== 0 ? e = !1 : (Pf = e = !0, (c === Qr || c === Lr || c === tp || c === lp) && (c = lu.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Xm(t, e)) : nr(t);
    }
    function nr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Xm(
            t,
            Pf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, lc(t), a = ie(
          t,
          bm,
          a,
          t,
          vi
        ), (t.mode & We) !== Me && Rs(t), a !== null) {
          tt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      sl === Do && (sl = XS);
    }
    function Xm(e, t) {
      do {
        var a = $p(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, tt = a;
          return;
        }
        if ((e.mode & We) !== Me) {
          Rs(e), a = e.actualDuration;
          for (var c = e.child; c !== null; )
            a += c.actualDuration, c = c.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          tt = e;
          return;
        }
        tt = e = a;
      } while (e !== null);
      sl = pg, tt = null;
    }
    function xt(e, t, a, c, o, f, d, h, y, p, z, R, E, q) {
      e.cancelPendingCommit = null;
      do
        ur();
      while (Jl !== as);
      if (Tc.flushLegacyContextWarning(), Tc.flushPendingUnsafeLifecycleWarnings(), (dt & (Il | nu)) !== oa)
        throw Error("Should not already be working.");
      if (Bn(a), p === Xr ? q0(
        E,
        q,
        a,
        El
      ) : c !== null ? Wg(
        E,
        q,
        a,
        c,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        El
      ) : kg(
        E,
        q,
        a,
        El
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= T1, Pr(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Xt && (tt = Xt = null, Ie = 0), h0 = t, ns = e, zc = a, I1 = f, e2 = o, FS = c, P1 = q, IS = R, Dc = Tg, PS = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, gf(so, function() {
          return sp = window.event, Dc === Tg && (Dc = F1), cr(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), So = null, Kf = Xl(), R !== null && Fg(
          q,
          Kf,
          R,
          El
        ), c = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || c) {
          c = G.T, G.T = null, o = bt.p, bt.p = Rl, d = dt, dt |= nu;
          try {
            e1(e, t, a);
          } finally {
            dt = d, bt.p = o, G.T = c;
          }
        }
        Jl = KS, Sa(), Cu(), Qm();
      }
    }
    function Sa() {
      if (Jl === KS) {
        Jl = as;
        var e = ns, t = h0, a = zc, c = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || c) {
          c = G.T, G.T = null;
          var o = bt.p;
          bt.p = Rl;
          var f = dt;
          dt |= nu;
          try {
            s0 = a, r0 = e, ji(), er(t, e), r0 = s0 = null, a = r2;
            var d = md(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && _p(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && B0(h)) {
                var p = y.start, z = y.end;
                if (z === void 0 && (z = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    z,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, E = R && R.defaultView || window;
                  if (E.getSelection) {
                    var q = E.getSelection(), le = h.textContent.length, oe = Math.min(
                      y.start,
                      le
                    ), Zt = y.end === void 0 ? oe : Math.min(y.end, le);
                    !q.extend && oe > Zt && (d = Zt, Zt = oe, oe = d);
                    var ot = Dp(
                      h,
                      oe
                    ), b = Dp(
                      h,
                      Zt
                    );
                    if (ot && b && (q.rangeCount !== 1 || q.anchorNode !== ot.node || q.anchorOffset !== ot.offset || q.focusNode !== b.node || q.focusOffset !== b.offset)) {
                      var T = R.createRange();
                      T.setStart(ot.node, ot.offset), q.removeAllRanges(), oe > Zt ? (q.addRange(T), q.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), q.addRange(T));
                    }
                  }
                }
              }
              for (R = [], q = h; q = q.parentNode; )
                q.nodeType === 1 && R.push({
                  element: q,
                  left: q.scrollLeft,
                  top: q.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var O = R[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            xg = !!s2, r2 = s2 = null;
          } finally {
            dt = f, bt.p = o, G.T = c;
          }
        }
        e.current = t, Jl = $S;
      }
    }
    function Cu() {
      if (Jl === $S) {
        Jl = as;
        var e = PS;
        if (e !== null) {
          Kf = Xl();
          var t = go, a = Kf;
          !Ft || a <= t || console.timeStamp(
            e,
            t,
            a,
            st,
            it,
            "secondary-light"
          );
        }
        e = ns, t = h0, a = zc;
        var c = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || c) {
          c = G.T, G.T = null;
          var o = bt.p;
          bt.p = Rl;
          var f = dt;
          dt |= nu;
          try {
            s0 = a, r0 = e, ji(), eh(
              e,
              t.alternate,
              t
            ), r0 = s0 = null;
          } finally {
            dt = f, bt.p = o, G.T = c;
          }
        }
        e = P1, t = IS, go = Xl(), e = t === null ? e : Kf, t = go, a = Dc === W1, c = El, So !== null ? Np(
          e,
          t,
          So,
          !1,
          c
        ) : !Ft || t <= e || (c ? c.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            st,
            it,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          st,
          it,
          a ? "error" : "secondary-dark"
        )), Jl = kS;
      }
    }
    function Qm() {
      if (Jl === WS || Jl === kS) {
        if (Jl === WS) {
          var e = go;
          go = Xl();
          var t = go, a = Dc === W1;
          !Ft || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            st,
            it,
            a ? " error" : "secondary-light"
          ), Dc !== W1 && (Dc = JS);
        }
        Jl = as, jh(), e = ns;
        var c = h0;
        t = zc, a = FS;
        var o = c.actualDuration !== 0 || (c.subtreeFlags & 10256) !== 0 || (c.flags & 10256) !== 0;
        o ? Jl = Ag : (Jl = as, h0 = ns = null, Lm(
          e,
          e.pendingLanes
        ), Zr = 0, cp = null);
        var f = e.pendingLanes;
        if (f === 0 && (ls = null), o || sh(e), f = Ul(t), c = c.stateNode, _l && typeof _l.onCommitFiberRoot == "function")
          try {
            var d = (c.current.flags & 128) === 128;
            switch (f) {
              case Rl:
                var h = Sy;
                break;
              case Wl:
                h = qh;
                break;
              case ua:
                h = so;
                break;
              case di:
                h = xh;
                break;
              default:
                h = so;
            }
            _l.onCommitFiberRoot(
              ro,
              c,
              h,
              d
            );
          } catch (R) {
            qu || (qu = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (xu && e.memoizedUpdaters.clear(), Ym(), a !== null) {
          d = G.T, h = bt.p, bt.p = Rl, G.T = null;
          try {
            var y = e.onRecoverableError;
            for (c = 0; c < a.length; c++) {
              var p = a[c], z = nv(p.stack);
              ie(
                p.source,
                y,
                p.value,
                z
              );
            }
          } finally {
            G.T = d, bt.p = h;
          }
        }
        (zc & 3) !== 0 && ur(), Ma(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (ug = !0, e === t2 ? up++ : (up = 0, t2 = e)) : up = 0, o || ni(t, go), Uu(0);
      }
    }
    function nv(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Lm(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _s(t)));
    }
    function ur() {
      return Sa(), Cu(), Qm(), cr();
    }
    function cr() {
      if (Jl !== Ag) return !1;
      var e = ns, t = I1;
      I1 = 0;
      var a = Ul(zc), c = ua > a ? ua : a;
      a = G.T;
      var o = bt.p;
      try {
        bt.p = c, G.T = null;
        var f = e2;
        e2 = null, c = ns;
        var d = zc;
        if (Jl = as, h0 = ns = null, zc = 0, (dt & (Il | nu)) !== oa)
          throw Error("Cannot flush passive effects while already rendering.");
        Bn(d), l2 = !0, Og = !1;
        var h = 0;
        if (So = null, h = Gl(), Dc === JS)
          x0(
            go,
            h,
            XE
          );
        else {
          var y = go, p = h, z = Dc === F1;
          !Ft || p <= y || (El ? El.run(
            console.timeStamp.bind(
              console,
              z ? "Waiting for Paint" : "Waiting",
              y,
              p,
              st,
              it,
              "secondary-light"
            )
          ) : console.timeStamp(
            z ? "Waiting for Paint" : "Waiting",
            y,
            p,
            st,
            it,
            "secondary-light"
          ));
        }
        y = dt, dt |= nu;
        var R = c.current;
        ji(), ah(R);
        var E = c.current;
        R = P1, ji(), Hm(
          c,
          E,
          d,
          f,
          R
        ), sh(c), dt = y;
        var q = Gl();
        if (E = h, R = El, So !== null ? Np(
          E,
          q,
          So,
          !0,
          R
        ) : !Ft || q <= E || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            q,
            st,
            it,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          q,
          st,
          it,
          "secondary-dark"
        )), ni(d, q), Uu(0, !1), Og ? c === cp ? Zr++ : (Zr = 0, cp = c) : Zr = 0, Og = l2 = !1, _l && typeof _l.onPostCommitFiberRoot == "function")
          try {
            _l.onPostCommitFiberRoot(ro, c);
          } catch (oe) {
            qu || (qu = !0, console.error(
              "React instrumentation encountered an error: %o",
              oe
            ));
          }
        var le = c.current.stateNode;
        return le.effectDuration = 0, le.passiveEffectDuration = 0, !0;
      } finally {
        bt.p = o, G.T = a, Lm(e, t);
      }
    }
    function ba(e, t, a) {
      t = sa(a, t), Gp(t), t = wd(e.stateNode, t, 2), e = gu(e, t, 2), e !== null && (Cn(e, 2), Ma(e));
    }
    function Ze(e, t, a) {
      if (m0 = !1, e.tag === 3)
        ba(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            ba(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var c = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ls === null || !ls.has(c))) {
              e = sa(a, e), Gp(e), a = Xd(2), c = gu(t, a, 2), c !== null && (Qd(
                a,
                c,
                t,
                e
              ), Cn(c, 2), Ma(c));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function oh(e, t, a) {
      var c = e.pingCache;
      if (c === null) {
        c = e.pingCache = new WE();
        var o = /* @__PURE__ */ new Set();
        c.set(t, o);
      } else
        o = c.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), c.set(t, o));
      o.has(a) || ($1 = !0, o.add(a), c = Ra.bind(null, e, t, a), xu && vf(e, a), t.then(c, c));
    }
    function Ra(e, t, a) {
      var c = e.pingCache;
      c !== null && c.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > yi && (Hr = yi = Xl(), Yy = Pv("Promise Resolved"), $f = eg) : (a & 4194048) !== 0 && 0 > Ju && (bo = Ju = Xl(), qy = Pv("Promise Resolved"), M1 = eg), jm() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xt === e && (Ie & a) === a && (sl === If || sl === yg && (Ie & 62914560) === Ie && Gl() - bg < VS ? (dt & Il) === oa && Mu(e, 0) : k1 |= a, Vr === Ie && (Vr = 0)), Ma(e);
    }
    function Vm(e, t) {
      t === 0 && (t = Co()), e = ta(e, t), e !== null && (Cn(e, t), Ma(e));
    }
    function mc(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Vm(e, a);
    }
    function to(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var c = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          c = e.stateNode;
          break;
        case 22:
          c = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      c !== null && c.delete(t), Vm(e, a);
    }
    function Kn(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var c = e, o = t, f = o.type === Aa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ie(
            o,
            fh,
            c,
            o
          ) : Kn(
            c,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ie(
            o,
            fh,
            c,
            o
          ) : o.subtreeFlags & 67108864 && ie(
            o,
            Kn,
            c,
            o,
            f
          )), t = t.sibling;
        }
    }
    function fh(e, t) {
      re(!0);
      try {
        th(t), Bm(t), Um(e, t.alternate, t, !1), ar(e, t, 0, null, !1, 0);
      } finally {
        re(!1);
      }
    }
    function sh(e) {
      var t = !0;
      e.current.mode & (Ba | Ec) || (t = !1), Kn(
        e,
        e.current,
        t
      );
    }
    function An(e) {
      if ((dt & Il) === oa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = se(e) || "ReactComponent", zg !== null) {
            if (zg.has(t)) return;
            zg.add(t);
          } else zg = /* @__PURE__ */ new Set([t]);
          ie(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function vf(e, t) {
      xu && e.memoizedUpdaters.forEach(function(a) {
        Al(e, a, t);
      });
    }
    function gf(e, t) {
      var a = G.actQueue;
      return a !== null ? (a.push(t), PE) : gy(e, t);
    }
    function ir(e) {
      jm() && G.actQueue === null && ie(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          se(e)
        );
      });
    }
    function Ma(e) {
      e !== y0 && e.next === null && (y0 === null ? Dg = y0 = e : y0 = y0.next = e), _g = !0, G.actQueue !== null ? n2 || (n2 = !0, cv()) : a2 || (a2 = !0, cv());
    }
    function Uu(e, t) {
      if (!u2 && _g) {
        u2 = !0;
        do
          for (var a = !1, c = Dg; c !== null; ) {
            if (e !== 0) {
              var o = c.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = c.suspendedLanes, h = c.pingedLanes;
                f = (1 << 31 - kl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, or(c, f));
            } else
              f = Ie, f = Si(
                c,
                c === Xt ? f : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== kr
              ), (f & 3) === 0 || vl(c, f) || (a = !0, or(c, f));
            c = c.next;
          }
        while (a);
        u2 = !1;
      }
    }
    function uv() {
      sp = window.event, rh();
    }
    function rh() {
      _g = n2 = a2 = !1;
      var e = 0;
      us !== 0 && $m() && (e = us);
      for (var t = Gl(), a = null, c = Dg; c !== null; ) {
        var o = c.next, f = Sf(c, t);
        f === 0 ? (c.next = null, a === null ? Dg = o : a.next = o, o === null && (y0 = a)) : (a = c, (e !== 0 || (f & 3) !== 0) && (_g = !0)), c = o;
      }
      Jl !== as && Jl !== Ag || Uu(e), us !== 0 && (us = 0);
    }
    function Sf(e, t) {
      for (var a = e.suspendedLanes, c = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - kl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & c) !== 0) && (o[d] = Ir(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Xt, a = Ie, a = Si(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), c = e.callbackNode, a === 0 || e === t && (Nt === Qr || Nt === Lr) || e.cancelPendingCommit !== null)
        return c !== null && dh(c), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || vl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || G.actQueue !== null && c !== c2)
          dh(c);
        else return t;
        switch (Ul(a)) {
          case Rl:
          case Wl:
            a = qh;
            break;
          case ua:
            a = so;
            break;
          case di:
            a = xh;
            break;
          default:
            a = so;
        }
        return c = Zm.bind(null, e), G.actQueue !== null ? (G.actQueue.push(c), a = c2) : a = gy(a, c), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return c !== null && dh(c), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Zm(e, t) {
      if (ug = ng = !1, sp = window.event, Jl !== as && Jl !== Ag)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Dc === Tg && (Dc = F1), ur() && e.callbackNode !== a)
        return null;
      var c = Ie;
      return c = Si(
        e,
        e === Xt ? c : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), c === 0 ? null : (tv(
        e,
        c,
        t
      ), Sf(e, Gl()), e.callbackNode != null && e.callbackNode === a ? Zm.bind(null, e) : null);
    }
    function or(e, t) {
      if (ur()) return null;
      ng = ug, ug = !1, tv(e, t, !0);
    }
    function dh(e) {
      e !== c2 && e !== null && Bh(e);
    }
    function cv() {
      G.actQueue !== null && G.actQueue.push(function() {
        return rh(), null;
      }), f3(function() {
        (dt & (Il | nu)) !== oa ? gy(
          Sy,
          uv
        ) : rh();
      });
    }
    function Jm() {
      if (us === 0) {
        var e = Yr;
        e === 0 && (e = qf, qf <<= 1, (qf & 261888) === 0 && (qf = 256)), us = e;
      }
      return us;
    }
    function yt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (mt(e, "action"), vs("" + e));
    }
    function Ct(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ut(e, t, a, c, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = yt(
          (o[Oa] || null).action
        ), d = c.submitter;
        d && (t = (t = d[Oa] || null) ? yt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Jv(
          "action",
          "action",
          null,
          c,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (c.defaultPrevented) {
                  if (us !== 0) {
                    var y = d ? Ct(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), sc(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Ct(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), sc(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function et(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (c) {
        g1(c);
      }
      e.currentTarget = null;
    }
    function Ot(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var c = e[a];
        e: {
          var o = void 0, f = c.event;
          if (c = c.listeners, t)
            for (var d = c.length - 1; 0 <= d; d--) {
              var h = c[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ie(
                y,
                et,
                f,
                h,
                p
              ) : et(f, h, p), o = y;
            }
          else
            for (d = 0; d < c.length; d++) {
              if (h = c[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ie(
                y,
                et,
                f,
                h,
                p
              ) : et(f, h, p), o = y;
            }
        }
      }
    }
    function Re(e, t) {
      i2.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[ho];
      a === void 0 && (a = t[ho] = /* @__PURE__ */ new Set());
      var c = e + "__bubble";
      a.has(c) || (hh(t, e, 2, !1), a.add(c));
    }
    function Hu(e, t, a) {
      i2.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var c = 0;
      t && (c |= 4), hh(
        a,
        e,
        c,
        t
      );
    }
    function ui(e) {
      if (!e[Rg]) {
        e[Rg] = !0, Xv.forEach(function(a) {
          a !== "selectionchange" && (i2.has(a) || Hu(a, !1, e), Hu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Rg] || (t[Rg] = !0, Hu("selectionchange", !1, t));
      }
    }
    function hh(e, t, a, c) {
      switch (_h(t)) {
        case Rl:
          var o = iy;
          break;
        case Wl:
          o = $l;
          break;
        default:
          o = oy;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !o1 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), c ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function $n(e, t, a, c, o) {
      var f = c;
      if ((t & 1) === 0 && (t & 2) === 0 && c !== null)
        e: for (; ; ) {
          if (c === null) return;
          var d = c.tag;
          if (d === 3 || d === 4) {
            var h = c.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = c.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = I(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                c = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          c = c.return;
        }
      sd(function() {
        var p = f, z = Hn(a), R = [];
        e: {
          var E = Y2.get(e);
          if (E !== void 0) {
            var q = Jv, le = e;
            switch (e) {
              case "keypress":
                if (gs(a) === 0) break e;
              case "keydown":
              case "keyup":
                q = mE;
                break;
              case "focusin":
                le = "focus", q = d1;
                break;
              case "focusout":
                le = "blur", q = d1;
                break;
              case "beforeblur":
              case "afterblur":
                q = d1;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                q = E2;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = lE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = vE;
                break;
              case U2:
              case H2:
              case N2:
                q = uE;
                break;
              case B2:
                q = SE;
                break;
              case "scroll":
              case "scrollend":
                q = eE;
                break;
              case "wheel":
                q = EE;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = iE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = A2;
                break;
              case "toggle":
              case "beforetoggle":
                q = AE;
            }
            var oe = (t & 4) !== 0, Zt = !oe && (e === "scroll" || e === "scrollend"), ot = oe ? E !== null ? E + "Capture" : null : E;
            oe = [];
            for (var b = p, T; b !== null; ) {
              var O = b;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || ot === null || (O = du(b, ot), O != null && oe.push(
                Gt(
                  b,
                  O,
                  T
                )
              )), Zt) break;
              b = b.return;
            }
            0 < oe.length && (E = new q(
              E,
              le,
              null,
              a,
              z
            ), R.push({
              event: E,
              listeners: oe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (E = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", E && a !== Oy && (le = a.relatedTarget || a.fromElement) && (I(le) || le[bc]))
              break e;
            if ((q || E) && (E = z.window === z ? z : (E = z.ownerDocument) ? E.defaultView || E.parentWindow : window, q ? (le = a.relatedTarget || a.toElement, q = p, le = le ? I(le) : null, le !== null && (Zt = lt(le), oe = le.tag, le !== Zt || oe !== 5 && oe !== 27 && oe !== 6) && (le = null)) : (q = null, le = p), q !== le)) {
              if (oe = E2, O = "onMouseLeave", ot = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (oe = A2, O = "onPointerLeave", ot = "onPointerEnter", b = "pointer"), Zt = q == null ? E : de(q), T = le == null ? E : de(le), E = new oe(
                O,
                b + "leave",
                q,
                a,
                z
              ), E.target = Zt, E.relatedTarget = T, O = null, I(z) === p && (oe = new oe(
                ot,
                b + "enter",
                le,
                a,
                z
              ), oe.target = T, oe.relatedTarget = Zt, O = oe), Zt = O, q && le)
                t: {
                  for (oe = lo, ot = q, b = le, T = 0, O = ot; O; O = oe(O))
                    T++;
                  O = 0;
                  for (var V = b; V; V = oe(V))
                    O++;
                  for (; 0 < T - O; )
                    ot = oe(ot), T--;
                  for (; 0 < O - T; )
                    b = oe(b), O--;
                  for (; T--; ) {
                    if (ot === b || b !== null && ot === b.alternate) {
                      oe = ot;
                      break t;
                    }
                    ot = oe(ot), b = oe(b);
                  }
                  oe = null;
                }
              else oe = null;
              q !== null && mh(
                R,
                E,
                q,
                oe,
                !1
              ), le !== null && Zt !== null && mh(
                R,
                Zt,
                le,
                oe,
                !0
              );
            }
          }
          e: {
            if (E = p ? de(p) : window, q = E.nodeName && E.nodeName.toLowerCase(), q === "select" || q === "input" && E.type === "file")
              var ue = Yc;
            else if (U0(E))
              if (M2)
                ue = Ts;
              else {
                ue = H0;
                var Ye = $g;
              }
            else
              q = E.nodeName, !q || q.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && ru(p.elementType) && (ue = Yc) : ue = N0;
            if (ue && (ue = ue(e, p))) {
              bs(
                R,
                ue,
                a,
                z
              );
              break e;
            }
            Ye && Ye(e, E, p), e === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && T0(E, "number", E.value);
          }
          switch (Ye = p ? de(p) : window, e) {
            case "focusin":
              (U0(Ye) || Ye.contentEditable === "true") && (Jh = Ye, m1 = p, Uy = null);
              break;
            case "focusout":
              Uy = m1 = Jh = null;
              break;
            case "mousedown":
              y1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              y1 = !1, Rp(
                R,
                a,
                z
              );
              break;
            case "selectionchange":
              if (_E) break;
            case "keydown":
            case "keyup":
              Rp(
                R,
                a,
                z
              );
          }
          var be;
          if (h1)
            e: {
              switch (e) {
                case "compositionstart":
                  var ve = "onCompositionStart";
                  break e;
                case "compositionend":
                  ve = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ve = "onCompositionUpdate";
                  break e;
              }
              ve = void 0;
            }
          else
            Zh ? wo(e, a) && (ve = "onCompositionEnd") : e === "keydown" && a.keyCode === O2 && (ve = "onCompositionStart");
          ve && (z2 && a.locale !== "ko" && (Zh || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && Zh && (be = Di()) : (Qf = z, f1 = "value" in Qf ? Qf.value : Qf.textContent, Zh = !0)), Ye = kn(
            p,
            ve
          ), 0 < Ye.length && (ve = new T2(
            ve,
            e,
            null,
            a,
            z
          ), R.push({
            event: ve,
            listeners: Ye
          }), be ? ve.data = be : (be = ec(a), be !== null && (ve.data = be)))), (be = zE ? C0(e, a) : rd(e, a)) && (ve = kn(
            p,
            "onBeforeInput"
          ), 0 < ve.length && (Ye = new fE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            z
          ), R.push({
            event: Ye,
            listeners: ve
          }), Ye.data = be)), ut(
            R,
            e,
            p,
            a,
            z
          );
        }
        Ot(R, t);
      });
    }
    function Gt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kn(e, t) {
      for (var a = t + "Capture", c = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = du(e, a), o != null && c.unshift(
          Gt(e, o, f)
        ), o = du(e, t), o != null && c.push(
          Gt(e, o, f)
        )), e.tag === 3) return c;
        e = e.return;
      }
      return [];
    }
    function lo(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function mh(e, t, a, c, o) {
      for (var f = t._reactName, d = []; a !== null && a !== c; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === c) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = du(a, f), p != null && d.unshift(
          Gt(a, p, y)
        )) : o || (p = du(a, f), p != null && d.push(
          Gt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ea(e, t) {
      Ap(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || S2 || (S2 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Gu,
        possibleRegistrationNames: wf
      };
      ru(e) || typeof t.is == "string" || Kg(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ll(e, t, a, c) {
      t !== a && (a = Wn(a), Wn(t) !== a && (c[e] = t));
    }
    function fr(e, t, a) {
      t.forEach(function(c) {
        a[yc(c)] = c === "style" ? ci(e) : e.getAttribute(c);
      });
    }
    function al(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function yh(e, t) {
      return e = e.namespaceURI === we || e.namespaceURI === Je ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Wn(e) {
      return xa(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Rc(e)
      ), cu(e)), (typeof e == "string" ? e : "" + e).replace(e3, `
`).replace(t3, "");
    }
    function Km(e, t) {
      return t = Wn(t), Wn(e) === t;
    }
    function St(e, t, a, c, o, f) {
      switch (a) {
        case "children":
          typeof c == "string" ? (ps(c, t, !1), t === "body" || t === "textarea" && c === "" || zi(e, c)) : (typeof c == "number" || typeof c == "bigint") && (ps("" + c, t, !1), t !== "body" && zi(e, "" + c));
          break;
        case "className":
          hs(e, "class", c);
          break;
        case "tabIndex":
          hs(e, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          hs(e, a, c);
          break;
        case "style":
          _0(e, c, f);
          break;
        case "data":
          if (t !== "object") {
            hs(e, "data", c);
            break;
          }
        case "src":
        case "href":
          if (c === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
            e.removeAttribute(a);
            break;
          }
          mt(c, a), c = vs("" + c), e.setAttribute(a, c);
          break;
        case "action":
        case "formAction":
          if (c != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof c == "function" && (o.encType == null && o.method == null || Ug || (Ug = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Cg || (Cg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Mg ? t !== "button" || o.type == null || o.type === "submit" || Mg ? typeof c == "function" && (o.name == null || nb || (nb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Ug || (Ug = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Cg || (Cg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Mg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Mg = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof c == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && St(e, t, "name", o.name, o, null), St(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), St(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), St(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (St(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), St(e, t, "method", o.method, o, null), St(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (c == null || typeof c == "symbol" || typeof c == "boolean") {
            e.removeAttribute(a);
            break;
          }
          mt(c, a), c = vs("" + c), e.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (typeof c != "function" && al(a, c), e.onclick = hn);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && al(a, c), Re("scroll", e));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && al(a, c), Re("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "muted":
          e.muted = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          mt(c, a), a = vs("" + c), e.setAttributeNS(Jr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? (mt(c, a), e.setAttribute(a, "" + c)) : e.removeAttribute(a);
          break;
        case "inert":
          c !== "" || Hg[a] || (Hg[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          c && typeof c != "function" && typeof c != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          c === !0 ? e.setAttribute(a, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? (mt(c, a), e.setAttribute(a, c)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? (mt(c, a), e.setAttribute(a, c)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? e.removeAttribute(a) : (mt(c, a), e.setAttribute(a, c));
          break;
        case "popover":
          Re("beforetoggle", e), Re("toggle", e), No(e, "popover", c);
          break;
        case "xlinkActuate":
          ou(
            e,
            Jr,
            "xlink:actuate",
            c
          );
          break;
        case "xlinkArcrole":
          ou(
            e,
            Jr,
            "xlink:arcrole",
            c
          );
          break;
        case "xlinkRole":
          ou(
            e,
            Jr,
            "xlink:role",
            c
          );
          break;
        case "xlinkShow":
          ou(
            e,
            Jr,
            "xlink:show",
            c
          );
          break;
        case "xlinkTitle":
          ou(
            e,
            Jr,
            "xlink:title",
            c
          );
          break;
        case "xlinkType":
          ou(
            e,
            Jr,
            "xlink:type",
            c
          );
          break;
        case "xmlBase":
          ou(
            e,
            o2,
            "xml:base",
            c
          );
          break;
        case "xmlLang":
          ou(
            e,
            o2,
            "xml:lang",
            c
          );
          break;
        case "xmlSpace":
          ou(
            e,
            o2,
            "xml:space",
            c
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), No(e, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          ub || c == null || typeof c != "object" || (ub = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            c
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Ep(a), No(e, a, c)) : Gu.hasOwnProperty(a) && c != null && typeof c != "function" && al(a, c);
      }
    }
    function bf(e, t, a, c, o, f) {
      switch (a) {
        case "style":
          _0(e, c, f);
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof c == "string" ? zi(e, c) : (typeof c == "number" || typeof c == "bigint") && zi(e, "" + c);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && al(a, c), Re("scroll", e));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && al(a, c), Re("scrollend", e));
          break;
        case "onClick":
          c != null && (typeof c != "function" && al(a, c), e.onclick = hn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Gu.hasOwnProperty(a))
            c != null && typeof c != "function" && al(a, c);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Oa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof c == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, c, o);
                break e;
              }
              a in e ? e[a] = c : c === !0 ? e.setAttribute(a, "") : No(e, a, c);
            }
      }
    }
    function kt(e, t, a) {
      switch (Ea(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Re("error", e), Re("load", e);
          var c = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    c = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    St(e, t, f, d, a, null);
                }
            }
          o && St(e, t, "srcSet", a.srcSet, a, null), c && St(e, t, "src", a.src, a, null);
          return;
        case "input":
          ea("input", a), Re("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var z = a[c];
              if (z != null)
                switch (c) {
                  case "name":
                    o = z;
                    break;
                  case "type":
                    d = z;
                    break;
                  case "checked":
                    y = z;
                    break;
                  case "defaultChecked":
                    p = z;
                    break;
                  case "value":
                    f = z;
                    break;
                  case "defaultValue":
                    h = z;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (z != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    St(e, t, c, z, a, null);
                }
            }
          fa(e, a), ld(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ea("select", a), Re("invalid", e), c = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  c = h;
                default:
                  St(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          ad(e, a), t = f, a = d, e.multiple = !!c, t != null ? fu(e, !!c, t, !1) : a != null && fu(e, !!c, a, !0);
          return;
        case "textarea":
          ea("textarea", a), Re("invalid", e), f = o = c = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  c = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  St(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Ei(e, a), Bo(e, c, o, f);
          return;
        case "option":
          bp(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (c = a[y], c != null) && (y === "selected" ? e.selected = c && typeof c != "function" && typeof c != "symbol" : St(e, t, y, c, a, null));
          return;
        case "dialog":
          Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
          break;
        case "iframe":
        case "object":
          Re("load", e);
          break;
        case "video":
        case "audio":
          for (c = 0; c < ip.length; c++)
            Re(ip[c], e);
          break;
        case "image":
          Re("error", e), Re("load", e);
          break;
        case "details":
          Re("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Re("error", e), Re("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (c = a[p], c != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  St(e, t, p, c, a, null);
              }
          return;
        default:
          if (ru(t)) {
            for (z in a)
              a.hasOwnProperty(z) && (c = a[z], c !== void 0 && bf(
                e,
                t,
                z,
                c,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (c = a[h], c != null && St(e, t, h, c, a, null));
    }
    function Dl(e, t, a, c) {
      switch (Ea(t, c), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, z = null;
          for (q in a) {
            var R = a[q];
            if (a.hasOwnProperty(q) && R != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  c.hasOwnProperty(q) || St(
                    e,
                    t,
                    q,
                    null,
                    c,
                    R
                  );
              }
          }
          for (var E in c) {
            var q = c[E];
            if (R = a[E], c.hasOwnProperty(E) && (q != null || R != null))
              switch (E) {
                case "type":
                  f = q;
                  break;
                case "name":
                  o = q;
                  break;
                case "checked":
                  p = q;
                  break;
                case "defaultChecked":
                  z = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  q !== R && St(
                    e,
                    t,
                    E,
                    q,
                    c,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, c = c.type === "checkbox" || c.type === "radio" ? c.checked != null : c.value != null, t || !c || ab || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), ab = !0), !t || c || lb || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), lb = !0), Hc(
            e,
            d,
            h,
            y,
            p,
            z,
            f,
            o
          );
          return;
        case "select":
          q = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  q = y;
                default:
                  c.hasOwnProperty(f) || St(
                    e,
                    t,
                    f,
                    null,
                    c,
                    y
                  );
              }
          for (o in c)
            if (f = c[o], y = a[o], c.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  E = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && St(
                    e,
                    t,
                    o,
                    f,
                    c,
                    y
                  );
              }
          c = h, t = d, a = q, E != null ? fu(e, !!t, E, !1) : !!a != !!t && (c != null ? fu(e, !!t, c, !0) : fu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          q = E = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !c.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  St(e, t, h, null, c, o);
              }
          for (d in c)
            if (o = c[d], f = a[d], c.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  E = o;
                  break;
                case "defaultValue":
                  q = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && St(e, t, d, o, c, f);
              }
          Ti(e, E, q);
          return;
        case "option":
          for (var le in a)
            E = a[le], a.hasOwnProperty(le) && E != null && !c.hasOwnProperty(le) && (le === "selected" ? e.selected = !1 : St(
              e,
              t,
              le,
              null,
              c,
              E
            ));
          for (y in c)
            E = c[y], q = a[y], c.hasOwnProperty(y) && E !== q && (E != null || q != null) && (y === "selected" ? e.selected = E && typeof E != "function" && typeof E != "symbol" : St(
              e,
              t,
              y,
              E,
              c,
              q
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var oe in a)
            E = a[oe], a.hasOwnProperty(oe) && E != null && !c.hasOwnProperty(oe) && St(
              e,
              t,
              oe,
              null,
              c,
              E
            );
          for (p in c)
            if (E = c[p], q = a[p], c.hasOwnProperty(p) && E !== q && (E != null || q != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  St(
                    e,
                    t,
                    p,
                    E,
                    c,
                    q
                  );
              }
          return;
        default:
          if (ru(t)) {
            for (var Zt in a)
              E = a[Zt], a.hasOwnProperty(Zt) && E !== void 0 && !c.hasOwnProperty(Zt) && bf(
                e,
                t,
                Zt,
                void 0,
                c,
                E
              );
            for (z in c)
              E = c[z], q = a[z], !c.hasOwnProperty(z) || E === q || E === void 0 && q === void 0 || bf(
                e,
                t,
                z,
                E,
                c,
                q
              );
            return;
          }
      }
      for (var ot in a)
        E = a[ot], a.hasOwnProperty(ot) && E != null && !c.hasOwnProperty(ot) && St(e, t, ot, null, c, E);
      for (R in c)
        E = c[R], q = a[R], !c.hasOwnProperty(R) || E === q || E == null && q == null || St(e, t, R, E, c, q);
    }
    function yc(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function ci(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var c = e[a];
        t[c] = e.getPropertyValue(c);
      }
      return t;
    }
    function Nu(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var c, o = c = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Pl(d, f), c += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || me.has(f) ? (Pl(d, f), c += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + ("" + d).trim()) : c += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + d + "px", o = ";");
          }
        c = c || null, t = e.getAttribute("style"), t !== c && (c = Wn(c), Wn(t) !== c && (a.style = ci(e)));
      }
    }
    function Ca(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (mt(c, t), e === "" + c)
              return;
        }
      ll(t, e, c, f);
    }
    function ph(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
        }
        if (!c) return;
      } else
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (c) return;
        }
      ll(t, e, c, f);
    }
    function vh(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (mt(c, a), e === "" + c)
              return;
        }
      ll(t, e, c, f);
    }
    function Ef(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(c)) return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(c) && (mt(c, t), e === "" + c))
              return;
        }
      ll(t, e, c, f);
    }
    function sr(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (mt(c, t), a = vs("" + c), e === a)
              return;
        }
      ll(t, e, c, f);
    }
    function Ua(e, t, a, c) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (ru(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Gu.hasOwnProperty(y))
                typeof p != "function" && al(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || ll(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = yh(e, p), ll(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Nu(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Uc(
                      e,
                      "class",
                      p
                    ), ll(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    c.context === _o && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Uc(
                      e,
                      y,
                      p
                    ), ll(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Gu.hasOwnProperty(p))
              typeof y != "function" && al(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || ll(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = yh(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ca(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ca(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Nu(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), ll(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), ll(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ll(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), ll(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  sr(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === l3) {
                    f.delete(p.toLowerCase()), ll(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  sr(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  sr(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  vh(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  vh(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  vh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  ph(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var z = d = p, R = o;
                    if (f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (mt(y, d), h === "" + y)
                            break e;
                      }
                    ll(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, z = d = p, R = o, f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (mt(y, d), h === "" + y))
                            break e;
                      }
                    ll(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "rowSpan":
                  Ef(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Ef(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ca(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ca(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ca(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ca(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ca(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ca(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ca(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ca(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ca(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ca(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Hg[p] || (Hg[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), ph(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = Ep(p), d = !1, c.context === _o && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (z = p.toLowerCase(), z = eu.hasOwnProperty(
                      z
                    ) && eu[z] || null, z !== null && z !== p && (d = !0, f.delete(z)), f.delete(h));
                    e: if (z = e, R = h, h = y, dn(R))
                      if (z.hasAttribute(R))
                        z = z.getAttribute(
                          R
                        ), mt(
                          h,
                          R
                        ), h = z === "" + h ? h : z;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (z = R.toLowerCase().slice(0, 5), z !== "data-" && z !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ll(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && fr(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function iv(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Ta(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function ov() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), c = 0; c < a.length; c++) {
          var o = a[c], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Ta(d)) {
            for (d = 0, h = o.responseEnd, c += 1; c < a.length; c++) {
              var y = a[c], p = y.startTime;
              if (p > h) break;
              var z = y.transferSize, R = y.initiatorType;
              z && Ta(R) && (y = y.responseEnd, d += z * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--c, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function rr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function fv(e) {
      switch (e) {
        case Je:
          return v0;
        case we:
          return Bg;
        default:
          return _o;
      }
    }
    function pc(e, t) {
      if (e === _o)
        switch (t) {
          case "svg":
            return v0;
          case "math":
            return Bg;
          default:
            return _o;
        }
      return e === v0 && t === "foreignObject" ? _o : e;
    }
    function Tf(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function $m() {
      var e = window.event;
      return e && e.type === "popstate" ? e === d2 ? !1 : (d2 = e, !0) : (d2 = null, !1);
    }
    function Bu() {
      var e = window.event;
      return e && e !== sp ? e.type : null;
    }
    function Af() {
      var e = window.event;
      return e && e !== sp ? e.timeStamp : -1.1;
    }
    function sv(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function rv(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function dv() {
    }
    function gh(e, t, a, c) {
      Dl(e, t, a, c), e[Oa] = c;
    }
    function Sh(e) {
      zi(e, "");
    }
    function t1(e, t, a) {
      e.nodeValue = a;
    }
    function hv(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[Oa] || null;
        if (t !== null) {
          var a = te(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, ie(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, ie(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function ii(e) {
      return e === "head";
    }
    function mv(e, t) {
      e.removeChild(t);
    }
    function yv(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function ao(e, t) {
      var a = t, c = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === fp || a === Ng) {
            if (c === 0) {
              e.removeChild(o), io(t);
              return;
            }
            c--;
          } else if (a === op || a === cs || a === $r || a === p0 || a === Kr)
            c++;
          else if (a === n3)
            gc(
              e.ownerDocument.documentElement
            );
          else if (a === c3) {
            a = e.ownerDocument.head, gc(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Gf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === u3 && gc(e.ownerDocument.body);
        a = o;
      } while (a);
      io(t);
    }
    function dr(e, t) {
      var a = e;
      e = 0;
      do {
        var c = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), c && c.nodeType === 8)
          if (a = c.data, a === fp) {
            if (e === 0) break;
            e--;
          } else
            a !== op && a !== cs && a !== $r && a !== p0 || e++;
        a = c;
      } while (a);
    }
    function pv(e) {
      dr(e, !0);
    }
    function vv(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function gv(e) {
      e.nodeValue = "";
    }
    function Sv(e) {
      dr(e, !1);
    }
    function bv(e, t) {
      t = t[i3], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Ev(e, t) {
      e.nodeValue = t;
    }
    function Of(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Of(a), M(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Tv(e, t, a, c) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!c && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (c) {
          if (!e[Gf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          mt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = tn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Av(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = tn(e.nextSibling), e === null)) return null;
      return e;
    }
    function zt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = tn(e.nextSibling), e === null)) return null;
      return e;
    }
    function hr(e) {
      return e.data === cs || e.data === $r;
    }
    function km(e) {
      return e.data === p0 || e.data === cs && e.ownerDocument.readyState !== ib;
    }
    function Ov(e, t) {
      var a = e.ownerDocument;
      if (e.data === $r)
        e._reactRetry = t;
      else if (e.data !== cs || a.readyState !== ib)
        t();
      else {
        var c = function() {
          t(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), e._reactRetry = c;
      }
    }
    function tn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === op || t === p0 || t === cs || t === $r || t === Kr || t === f2 || t === cb)
            break;
          if (t === fp || t === Ng)
            return null;
        }
      }
      return e;
    }
    function zv(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, c = e.attributes, o = 0; o < c.length; o++) {
          var f = c[o];
          a[yc(f.name)] = f.name.toLowerCase() === "style" ? ci(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Kr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Dv(e, t, a) {
      return a === null || a[a3] !== !0 ? (e.nodeValue === t ? e = null : (t = Wn(t), e = Wn(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function zf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === fp || a === Ng) {
            if (t === 0)
              return tn(e.nextSibling);
            t--;
          } else
            a !== op && a !== p0 && a !== cs && a !== $r && a !== Kr || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function no(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === op || a === p0 || a === cs || a === $r || a === Kr) {
            if (t === 0) return e;
            t--;
          } else
            a !== fp && a !== Ng || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Wm(e) {
      io(e);
    }
    function bh(e) {
      io(e);
    }
    function Fm(e) {
      io(e);
    }
    function vc(e, t, a, c, o) {
      switch (o && ys(e, c.ancestorInfo), t = rr(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Yu(e, t, a, c) {
      if (!a[bc] && te(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      kt(a, e, t), a[Wt] = c, a[Oa] = t;
    }
    function gc(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function Eh(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Im(e, t, a) {
      var c = g0;
      if (c && typeof t == "string" && t) {
        var o = Rt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), hb.has(o) || (hb.add(o), e = { rel: e, crossOrigin: a, href: t }, c.querySelector(o) === null && (t = c.createElement("link"), kt(t, "link", e), he(t), c.head.appendChild(t)));
      }
    }
    function Pm(e, t, a, c) {
      var o = (o = ln.current) ? Eh(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = uo(a.href), t = De(o).hoistableStyles, c = t.get(a), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = uo(a.href);
            var f = De(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Wr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              yr(e)
            )) && !f._p && (d.instance = f, d.state.loading = rp | Wu), !Fu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Fu.set(e, h), f || _v(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && c === null)
              throw a = `

  - ` + mr(t) + `
  + ` + mr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && c !== null)
            throw a = `

  - ` + mr(t) + `
  + ` + mr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = co(a), t = De(o).hoistableScripts, c = t.get(a), c || (c = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function mr(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : an.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : an.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : an.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function uo(e) {
      return 'href="' + Rt(e) + '"';
    }
    function yr(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Th(e) {
      return ke({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function _v(e, t, a, c) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? c.loading = rp : (t = e.createElement("link"), c.preload = t, t.addEventListener("load", function() {
        return c.loading |= rp;
      }), t.addEventListener("error", function() {
        return c.loading |= rb;
      }), kt(t, "link", a), he(t), e.head.appendChild(t));
    }
    function co(e) {
      return '[src="' + Rt(e) + '"]';
    }
    function pr(e) {
      return "script[async]" + e;
    }
    function Ah(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var c = e.querySelector(
              'style[data-href~="' + Rt(a.href) + '"]'
            );
            if (c)
              return t.instance = c, he(c), c;
            var o = ke({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return c = (e.ownerDocument || e).createElement("style"), he(c), kt(c, "style", o), Df(c, a.precedence, e), t.instance = c;
          case "stylesheet":
            o = uo(a.href);
            var f = e.querySelector(
              yr(o)
            );
            if (f)
              return t.state.loading |= Wu, t.instance = f, he(f), f;
            c = Th(a), (o = Fu.get(o)) && ey(c, o), f = (e.ownerDocument || e).createElement("link"), he(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), kt(f, "link", c), t.state.loading |= Wu, Df(f, a.precedence, e), t.instance = f;
          case "script":
            return f = co(a.src), (o = e.querySelector(
              pr(f)
            )) ? (t.instance = o, he(o), o) : (c = a, (o = Fu.get(f)) && (c = ke({}, a), ty(c, o)), e = e.ownerDocument || e, o = e.createElement("script"), he(o), kt(o, "link", c), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Wu) === Wr && (c = t.instance, t.state.loading |= Wu, Df(c, a.precedence, e));
      return t.instance;
    }
    function Df(e, t, a) {
      for (var c = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = c.length ? c[c.length - 1] : null, f = o, d = 0; d < c.length; d++) {
        var h = c[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function ey(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ty(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function _f(e, t, a) {
      if (Yg === null) {
        var c = /* @__PURE__ */ new Map(), o = Yg = /* @__PURE__ */ new Map();
        o.set(a, c);
      } else
        o = Yg, c = o.get(a), c || (c = /* @__PURE__ */ new Map(), o.set(a, c));
      if (c.has(e)) return c;
      for (c.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Gf] || f[Wt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Je) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = c.get(d);
          h ? h.push(f) : c.set(d, [f]);
        }
      }
      return c;
    }
    function Rv(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Mv(e, t, a) {
      var c = !a.ancestorInfo.containerTagInScope;
      if (a.context === v0 || t.itemProp != null)
        return !c || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            c && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = iv(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            c && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return t.rel === "stylesheet" ? (e = t.precedence, t = t.disabled, typeof e != "string" && c && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof e == "string" && t == null) : !0;
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            c && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          c && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function at(e) {
      return !(e.type === "stylesheet" && (e.state.loading & db) === Wr);
    }
    function ly(e, t, a, c) {
      if (a.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (a.state.loading & Wu) === Wr) {
        if (a.instance === null) {
          var o = uo(c.href), f = t.querySelector(
            yr(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Rf.bind(e), t.then(e, e)), a.state.loading |= Wu, a.instance = f, he(f);
            return;
          }
          f = t.ownerDocument || t, c = Th(c), (o = Fu.get(o)) && ey(c, o), f = f.createElement("link"), he(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), kt(f, "link", c), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & db) === Wr && (e.count++, a = Rf.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function Oh(e, t) {
      return e.stylesheets && e.count === 0 && vr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var c = setTimeout(function() {
          if (e.stylesheets && vr(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, s3 + t);
        0 < e.imgBytes && m2 === 0 && (m2 = 125 * ov() * d3);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && vr(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > m2 ? 50 : r3) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(c), clearTimeout(o);
        };
      } : null;
    }
    function Rf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          vr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function vr(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, jg = /* @__PURE__ */ new Map(), t.forEach(ay, e), jg = null, Rf.call(e));
    }
    function ay(e, t) {
      if (!(t.state.loading & Wu)) {
        var a = jg.get(e);
        if (a) var c = a.get(y2);
        else {
          a = /* @__PURE__ */ new Map(), jg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), c = d);
          }
          c && a.set(y2, c);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || c, f === c && a.set(y2, o), a.set(d, o), this.count++, c = Rf.bind(this), o.addEventListener("load", c), o.addEventListener("error", c), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Wu;
      }
    }
    function gr(e, t, a, c, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = kr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uo(0), this.hiddenUpdates = Uo(null), this.identifierPrefix = c, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Sr(e, t, a, c, o, f, d, h, y, p, z, R) {
      return e = new gr(
        e,
        t,
        a,
        d,
        y,
        p,
        z,
        R,
        h
      ), t = jE, f === !0 && (t |= Ba | Ec), t |= We, f = U(3, null, null, t), e.current = f, f.stateNode = e, t = Ad(), Yi(t), e.pooledCache = t, Yi(t), f.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: t
      }, nt(f), e;
    }
    function Cv(e) {
      return e ? (e = Zf, e) : Zf;
    }
    function zh(e, t, a, c, o, f) {
      if (_l && typeof _l.onScheduleFiberRoot == "function")
        try {
          _l.onScheduleFiberRoot(ro, c, a);
        } catch (d) {
          qu || (qu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Cv(o), c.context === null ? c.context = o : c.pendingContext = o, ju && Na !== null && !vb && (vb = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(Na) || "Unknown"
      )), c = Ol(t), c.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), c.callback = f), a = gu(e, c, t), a !== null && (yu(t, "root.render()", null), Ue(a, e, t), bn(a, e, t));
    }
    function Uv(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function ny(e, t) {
      Uv(e, t), (e = e.alternate) && Uv(e, t);
    }
    function uy(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ta(e, 67108864);
        t !== null && Ue(t, e, 67108864), ny(e, 67108864);
      }
    }
    function cy(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = aa(e);
        t = rn(t);
        var a = ta(e, t);
        a !== null && Ue(a, e, t), ny(e, t);
      }
    }
    function Ut() {
      return Na;
    }
    function iy(e, t, a, c) {
      var o = G.T;
      G.T = null;
      var f = bt.p;
      try {
        bt.p = Rl, oy(e, t, a, c);
      } finally {
        bt.p = f, G.T = o;
      }
    }
    function $l(e, t, a, c) {
      var o = G.T;
      G.T = null;
      var f = bt.p;
      try {
        bt.p = Wl, oy(e, t, a, c);
      } finally {
        bt.p = f, G.T = o;
      }
    }
    function oy(e, t, a, c) {
      if (xg) {
        var o = Dh(c);
        if (o === null)
          $n(
            e,
            t,
            c,
            Gg,
            a
          ), Rh(e, c);
        else if (Hv(
          o,
          e,
          t,
          a,
          c
        ))
          c.stopPropagation();
        else if (Rh(e, c), t & 4 && -1 < m3.indexOf(e)) {
          for (; o !== null; ) {
            var f = te(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = iu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - kl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ma(f), (dt & (Il | nu)) === oa && (Eg = Gl() + ZS, Uu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = ta(f, 2), h !== null && Ue(h, f, 2), en(), ny(f, 2);
              }
            if (f = Dh(c), f === null && $n(
              e,
              t,
              c,
              Gg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && c.stopPropagation();
        } else
          $n(
            e,
            t,
            c,
            null,
            a
          );
      }
    }
    function Dh(e) {
      return e = Hn(e), fy(e);
    }
    function fy(e) {
      if (Gg = null, e = I(e), e !== null) {
        var t = lt(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Tl(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Bt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Gg = e, null;
    }
    function _h(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Rl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Wl;
        case "message":
          switch (zr()) {
            case Sy:
              return Rl;
            case qh:
              return Wl;
            case so:
            case xv:
              return ua;
            case xh:
              return di;
            default:
              return ua;
          }
        default:
          return ua;
      }
    }
    function Rh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          is = null;
          break;
        case "dragenter":
        case "dragleave":
          os = null;
          break;
        case "mouseover":
        case "mouseout":
          fs = null;
          break;
        case "pointerover":
        case "pointerout":
          hp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          mp.delete(t.pointerId);
      }
    }
    function oi(e, t, a, c, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = te(t), t !== null && uy(t)), e) : (e.eventSystemFlags |= c, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Hv(e, t, a, c, o) {
      switch (t) {
        case "focusin":
          return is = oi(
            is,
            e,
            t,
            a,
            c,
            o
          ), !0;
        case "dragenter":
          return os = oi(
            os,
            e,
            t,
            a,
            c,
            o
          ), !0;
        case "mouseover":
          return fs = oi(
            fs,
            e,
            t,
            a,
            c,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return hp.set(
            f,
            oi(
              hp.get(f) || null,
              e,
              t,
              a,
              c,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, mp.set(
            f,
            oi(
              mp.get(f) || null,
              e,
              t,
              a,
              c,
              o
            )
          ), !0;
      }
      return !1;
    }
    function sy(e) {
      var t = I(e.target);
      if (t !== null) {
        var a = lt(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Tl(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                cy(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Bt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                cy(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Mf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Dh(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var c = new a.constructor(
            a.type,
            a
          ), o = c;
          Oy !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Oy = o, a.target.dispatchEvent(c), Oy === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Oy = null;
        } else
          return t = te(a), t !== null && uy(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Mh(e, t, a) {
      Mf(e) && a.delete(t);
    }
    function l1() {
      p2 = !1, is !== null && Mf(is) && (is = null), os !== null && Mf(os) && (os = null), fs !== null && Mf(fs) && (fs = null), hp.forEach(Mh), mp.forEach(Mh);
    }
    function br(e, t) {
      e.blockedOn === t && (e.blockedOn = null, p2 || (p2 = !0, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        l1
      )));
    }
    function Nv(e) {
      wg !== e && (wg = e, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        function() {
          wg === e && (wg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], c = e[t + 1], o = e[t + 2];
            if (typeof c != "function") {
              if (fy(c || a) === null)
                continue;
              break;
            }
            var f = te(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: c
            }, Object.freeze(a), sc(
              f,
              a,
              c,
              o
            ));
          }
        }
      ));
    }
    function io(e) {
      function t(y) {
        return br(y, e);
      }
      is !== null && br(is, e), os !== null && br(os, e), fs !== null && br(fs, e), hp.forEach(t), mp.forEach(t);
      for (var a = 0; a < ss.length; a++) {
        var c = ss[a];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; 0 < ss.length && (a = ss[0], a.blockedOn === null); )
        sy(a), a.blockedOn === null && ss.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (c = 0; c < a.length; c += 3) {
          var o = a[c], f = a[c + 1], d = o[Oa] || null;
          if (typeof f == "function")
            d || Nv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Oa] || null)
                h = d.formAction;
              else if (fy(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[c + 1] = h : (a.splice(c, 3), c -= 3), Nv(a);
          }
        }
    }
    function Bv() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), c || setTimeout(a, 20);
      }
      function a() {
        if (!c && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var c = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          c = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function ry(e) {
      this._internalRoot = e;
    }
    function Fn(e) {
      this._internalRoot = e;
    }
    function dy(e) {
      e[bc] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yl = Zb(), Er = S0(), a1 = Jb(), ke = Object.assign, Yv = /* @__PURE__ */ Symbol.for("react.element"), On = /* @__PURE__ */ Symbol.for("react.transitional.element"), fi = /* @__PURE__ */ Symbol.for("react.portal"), Cf = /* @__PURE__ */ Symbol.for("react.fragment"), Aa = /* @__PURE__ */ Symbol.for("react.strict_mode"), Tr = /* @__PURE__ */ Symbol.for("react.profiler"), Ch = /* @__PURE__ */ Symbol.for("react.consumer"), In = /* @__PURE__ */ Symbol.for("react.context"), Uf = /* @__PURE__ */ Symbol.for("react.forward_ref"), oo = /* @__PURE__ */ Symbol.for("react.suspense"), Ha = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ar = /* @__PURE__ */ Symbol.for("react.memo"), na = /* @__PURE__ */ Symbol.for("react.lazy"), Pn = /* @__PURE__ */ Symbol.for("react.activity"), n1 = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), jv = Symbol.iterator, Hf = /* @__PURE__ */ Symbol.for("react.client.reference"), bl = Array.isArray, G = Er.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bt = a1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, u1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), hy = [], my = [], Sc = -1, si = Yt(null), Nf = Yt(null), ln = Yt(null), ri = Yt(null), Bf = 0, qv, fo, Yf, yy, Or, Uh, Hh;
    Ae.__reactDisabledLog = !0;
    var jf, py, Nh = !1, vy = new (typeof WeakMap == "function" ? WeakMap : Map)(), Na = null, ju = !1, an = Object.prototype.hasOwnProperty, gy = yl.unstable_scheduleCallback, Bh = yl.unstable_cancelCallback, Yh = yl.unstable_shouldYield, jh = yl.unstable_requestPaint, Gl = yl.unstable_now, zr = yl.unstable_getCurrentPriorityLevel, Sy = yl.unstable_ImmediatePriority, qh = yl.unstable_UserBlockingPriority, so = yl.unstable_NormalPriority, xv = yl.unstable_LowPriority, xh = yl.unstable_IdlePriority, by = yl.log, Gv = yl.unstable_setDisableYieldValue, ro = null, _l = null, qu = !1, xu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", kl = Math.clz32 ? Math.clz32 : Mc, Ey = Math.log, Gh = Math.LN2, qf = 256, Dr = 262144, xf = 4194304, Rl = 2, Wl = 8, ua = 32, di = 268435456, zn = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + zn, Oa = "__reactProps$" + zn, bc = "__reactContainer$" + zn, ho = "__reactEvents$" + zn, c1 = "__reactListeners$" + zn, wv = "__reactHandles$" + zn, _r = "__reactResources$" + zn, Gf = "__reactMarker$" + zn, Xv = /* @__PURE__ */ new Set(), Gu = {}, wf = {}, Qv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Xf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ty = {}, wh = {}, Xh = /[\n"\\]/g, Ay = !1, Lv = !1, Rr = !1, l = !1, n = !1, u = !1, i = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), g = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = g.concat(["button"]), Y = "dd dt li option optgroup p rp rt".split(" "), Q = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, J = {}, j = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, w = /([A-Z])/g, fe = /^ms-/, Oe = /^(?:webkit|moz|o)[A-Z]/, Ht = /^-ms-/, C = /-(.)/g, D = /;\s*$/, H = {}, Z = {}, Se = !1, rt = !1, me = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), we = "http://www.w3.org/1998/Math/MathML", Je = "http://www.w3.org/2000/svg", pt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), eu = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Vv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Qh = {}, $b = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), kb = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), S2 = !1, nn = {}, b2 = /^on./, Wb = /^on[^A-Z]/, Fb = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ib = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Pb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Oy = null, Lh = null, Vh = null, i1 = !1, hi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), o1 = !1;
    if (hi)
      try {
        var zy = {};
        Object.defineProperty(zy, "passive", {
          get: function() {
            o1 = !0;
          }
        }), window.addEventListener("test", zy, zy), window.removeEventListener("test", zy, zy);
      } catch {
        o1 = !1;
      }
    var Qf = null, f1 = null, Zv = null, Mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Jv = Hl(Mr), Dy = ke({}, Mr, { view: 0, detail: 0 }), eE = Hl(Dy), s1, r1, _y, Kv = ke({}, Dy, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ss,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== _y && (_y && e.type === "mousemove" ? (s1 = e.screenX - _y.screenX, r1 = e.screenY - _y.screenY) : r1 = s1 = 0, _y = e), s1);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : r1;
      }
    }), E2 = Hl(Kv), tE = ke({}, Kv, { dataTransfer: 0 }), lE = Hl(tE), aE = ke({}, Dy, { relatedTarget: 0 }), d1 = Hl(aE), nE = ke({}, Mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uE = Hl(nE), cE = ke({}, Mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), iE = Hl(cE), oE = ke({}, Mr, { data: 0 }), T2 = Hl(
      oE
    ), fE = T2, sE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, rE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, dE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, hE = ke({}, Dy, {
      key: function(e) {
        if (e.key) {
          var t = sE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = gs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ss,
      charCode: function(e) {
        return e.type === "keypress" ? gs(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? gs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), mE = Hl(hE), yE = ke({}, Kv, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), A2 = Hl(yE), pE = ke({}, Dy, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ss
    }), vE = Hl(pE), gE = ke({}, Mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), SE = Hl(gE), bE = ke({}, Kv, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), EE = Hl(bE), TE = ke({}, Mr, {
      newState: 0,
      oldState: 0
    }), AE = Hl(TE), OE = [9, 13, 27, 32], O2 = 229, h1 = hi && "CompositionEvent" in window, Ry = null;
    hi && "documentMode" in document && (Ry = document.documentMode);
    var zE = hi && "TextEvent" in window && !Ry, z2 = hi && (!h1 || Ry && 8 < Ry && 11 >= Ry), D2 = 32, _2 = String.fromCharCode(D2), R2 = !1, Zh = !1, DE = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, My = null, Cy = null, M2 = !1;
    hi && (M2 = dd("input") && (!document.documentMode || 9 < document.documentMode));
    var un = typeof Object.is == "function" ? Object.is : hd, _E = hi && "documentMode" in document && 11 >= document.documentMode, Jh = null, m1 = null, Uy = null, y1 = !1, Kh = {
      animationend: _i("Animation", "AnimationEnd"),
      animationiteration: _i("Animation", "AnimationIteration"),
      animationstart: _i("Animation", "AnimationStart"),
      transitionrun: _i("Transition", "TransitionRun"),
      transitionstart: _i("Transition", "TransitionStart"),
      transitioncancel: _i("Transition", "TransitionCancel"),
      transitionend: _i("Transition", "TransitionEnd")
    }, p1 = {}, C2 = {};
    hi && (C2 = document.createElement("div").style, "AnimationEvent" in window || (delete Kh.animationend.animation, delete Kh.animationiteration.animation, delete Kh.animationstart.animation), "TransitionEvent" in window || delete Kh.transitionend.transition);
    var U2 = Ri("animationend"), H2 = Ri("animationiteration"), N2 = Ri("animationstart"), RE = Ri("transitionrun"), ME = Ri("transitionstart"), CE = Ri("transitioncancel"), B2 = Ri("transitionend"), Y2 = /* @__PURE__ */ new Map(), v1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    v1.push("scrollEnd");
    var j2 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var UE = performance, q2 = function() {
        return UE.now();
      };
    else {
      var HE = Date;
      q2 = function() {
        return HE.now();
      };
    }
    var g1 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, NE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", $v = 0, S1 = 1, b1 = 2, E1 = 3, kv = "– ", Wv = "+ ", x2 = "  ", Ft = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", wu = "Components ⚛", it = "Scheduler ⚛", st = "Blocking", Lf = !1, mo = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: wu
    }, Vf = {
      start: -0,
      end: -0,
      detail: { devtools: mo }
    }, BE = ["Changed Props", ""], G2 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", YE = ["Changed Props", G2], Hy = 1, yo = 2, Xu = [], $h = 0, T1 = 0, Zf = {};
    Object.freeze(Zf);
    var Qu = null, kh = null, Me = 0, jE = 1, We = 2, Ba = 8, Ec = 16, qE = 32, w2 = !1;
    try {
      var X2 = Object.preventExtensions({});
    } catch {
      w2 = !0;
    }
    var A1 = /* @__PURE__ */ new WeakMap(), Wh = [], Fh = 0, Fv = null, Ny = 0, Lu = [], Vu = 0, Cr = null, po = 1, vo = "", za = null, It = null, ct = !1, mi = !1, tu = null, Jf = null, Zu = !1, O1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), z1 = Yt(null), D1 = Yt(null), Q2 = {}, Iv = null, Ih = null, Ph = !1, xE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, c) {
          e.push(c);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, GE = yl.unstable_scheduleCallback, wE = yl.unstable_NormalPriority, wl = {
      $$typeof: In,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = yl.unstable_now, Pv = console.createTask ? console.createTask : function() {
      return null;
    }, By = 1, eg = 2, ca = -0, Kf = -0, go = -0, So = null, cn = -1.1, Ur = -0, fl = -0, Te = -1.1, _e = -1.1, nl = null, pl = !1, Hr = -0, yi = -1.1, Yy = null, $f = 0, _1 = null, R1 = null, Nr = -1.1, jy = null, e0 = -1.1, tg = -1.1, bo = -0, Eo = -1.1, Ju = -1.1, M1 = 0, qy = null, L2 = null, V2 = null, kf = -1.1, Br = null, Wf = -1.1, lg = -1.1, Z2 = -0, J2 = -0, ag = 0, XE = null, K2 = 0, xy = -1.1, ng = !1, ug = !1, Gy = null, C1 = 0, Yr = 0, t0 = null, $2 = G.S;
    G.S = function(e, t) {
      if (LS = Gl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Eo && 0 > Ju) {
          Eo = Xl();
          var a = Af(), c = Bu();
          (a !== Wf || c !== Br) && (Wf = -1.1), kf = a, Br = c;
        }
        ac(e, t);
      }
      $2 !== null && $2(e, t);
    };
    var jr = Yt(null), Tc = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, wy = [], Xy = [], Qy = [], Ly = [], Vy = [], Zy = [], qr = /* @__PURE__ */ new Set();
    Tc.recordUnsafeLifecycleWarnings = function(e, t) {
      qr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && wy.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillMount == "function" && Xy.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Qy.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ly.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vy.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillUpdate == "function" && Zy.push(e));
    }, Tc.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < wy.length && (wy.forEach(function(h) {
        e.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), wy = []);
      var t = /* @__PURE__ */ new Set();
      0 < Xy.length && (Xy.forEach(function(h) {
        t.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Xy = []);
      var a = /* @__PURE__ */ new Set();
      0 < Qy.length && (Qy.forEach(function(h) {
        a.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Qy = []);
      var c = /* @__PURE__ */ new Set();
      0 < Ly.length && (Ly.forEach(
        function(h) {
          c.add(
            se(h) || "Component"
          ), qr.add(h.type);
        }
      ), Ly = []);
      var o = /* @__PURE__ */ new Set();
      0 < Vy.length && (Vy.forEach(function(h) {
        o.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Vy = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Zy.length && (Zy.forEach(function(h) {
        f.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Zy = []), 0 < t.size) {
        var d = X(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < c.size && (d = X(
        c
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = X(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = X(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = X(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = X(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var cg = /* @__PURE__ */ new Map(), k2 = /* @__PURE__ */ new Set();
    Tc.recordLegacyContextWarning = function(e, t) {
      for (var a = null, c = e; c !== null; )
        c.mode & Ba && (a = c), c = c.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !k2.has(e.type) && (c = cg.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (c === void 0 && (c = [], cg.set(a, c)), c.push(e));
    }, Tc.flushLegacyContextWarning = function() {
      cg.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(se(o) || "Component"), k2.add(o.type);
          });
          var c = X(a);
          ie(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              c
            );
          });
        }
      });
    }, Tc.discardPendingWarnings = function() {
      wy = [], Xy = [], Qy = [], Ly = [], Vy = [], Zy = [], cg = /* @__PURE__ */ new Map();
    };
    var W2 = {
      react_stack_bottom_frame: function(e, t, a) {
        var c = ju;
        ju = !0;
        try {
          return e(t, a);
        } finally {
          ju = c;
        }
      }
    }, U1 = W2.react_stack_bottom_frame.bind(W2), F2 = {
      react_stack_bottom_frame: function(e) {
        var t = ju;
        ju = !0;
        try {
          return e.render();
        } finally {
          ju = t;
        }
      }
    }, I2 = F2.react_stack_bottom_frame.bind(F2), P2 = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ze(e, e.return, a);
        }
      }
    }, H1 = P2.react_stack_bottom_frame.bind(
      P2
    ), eS = {
      react_stack_bottom_frame: function(e, t, a, c, o) {
        try {
          t.componentDidUpdate(a, c, o);
        } catch (f) {
          Ze(e, e.return, f);
        }
      }
    }, tS = eS.react_stack_bottom_frame.bind(
      eS
    ), lS = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, QE = lS.react_stack_bottom_frame.bind(
      lS
    ), aS = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (c) {
          Ze(e, t, c);
        }
      }
    }, nS = aS.react_stack_bottom_frame.bind(
      aS
    ), uS = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, LE = uS.react_stack_bottom_frame.bind(uS), cS = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (c) {
          Ze(e, t, c);
        }
      }
    }, VE = cS.react_stack_bottom_frame.bind(cS), iS = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, ZE = iS.react_stack_bottom_frame.bind(iS), l0 = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), N1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ig = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), og = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, xr = null, Jy = !1, a0 = null, Ky = 0, Fe = null, B1, oS = B1 = !1, fS = {}, sS = {}, rS = {};
    He = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var c = se(e), o = c || "null";
        if (!fS[o]) {
          fS[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = se(e)) && (f = `

Check the render method of \`` + o + "`."), f || c && (f = `

Check the top-level render call using <` + c + ">.");
          var d = "";
          a != null && e !== a && (c = null, typeof a.tag == "number" ? c = se(a) : typeof a.name == "string" && (c = a.name), c && (d = " It was passed a child from " + c + ".")), ie(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Gr = Bl(!0), dS = Bl(!1), hS = 0, mS = 1, yS = 2, Y1 = 3, Ff = !1, pS = !1, j1 = null, q1 = !1, n0 = Yt(null), fg = Yt(0), lu = Yt(null), Ku = null, u0 = 1, $y = 2, Ml = Yt(0), sg = 0, $u = 1, on = 2, au = 4, fn = 8, c0, vS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), x1 = /* @__PURE__ */ new Set(), SS = /* @__PURE__ */ new Set(), To = 0, Be = null, wt = null, Ql = null, rg = !1, i0 = !1, wr = !1, dg = 0, ky = 0, Ao = null, JE = 0, KE = 25, x = null, ku = null, Oo = -1, Wy = !1, Fy = {
      readContext: gt,
      use: ic,
      useCallback: il,
      useContext: il,
      useEffect: il,
      useImperativeHandle: il,
      useLayoutEffect: il,
      useInsertionEffect: il,
      useMemo: il,
      useReducer: il,
      useRef: il,
      useState: il,
      useDebugValue: il,
      useDeferredValue: il,
      useTransition: il,
      useSyncExternalStore: il,
      useId: il,
      useHostTransitionStatus: il,
      useFormState: il,
      useActionState: il,
      useOptimistic: il,
      useMemoCache: il,
      useCacheRefresh: il
    };
    Fy.useEffectEvent = il;
    var G1 = null, bS = null, w1 = null, ES = null, pi = null, Ac = null, hg = null;
    G1 = {
      readContext: function(e) {
        return gt(e);
      },
      use: ic,
      useCallback: function(e, t) {
        return x = "useCallback", Ne(), cc(t), Bd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Ne(), gt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", Ne(), cc(t), Zi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Ne(), cc(a), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", Ne(), cc(t), Fc(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Ne(), cc(t), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Ne(), cc(t);
        var a = G.H;
        G.H = pi;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Ne();
        var c = G.H;
        G.H = pi;
        try {
          return Io(e, t, a);
        } finally {
          G.H = c;
        }
      },
      useRef: function(e) {
        return x = "useRef", Ne(), Nd(e);
      },
      useState: function(e) {
        x = "useState", Ne();
        var t = G.H;
        G.H = pi;
        try {
          return Kc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Ne();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Ne(), af(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Ne(), Ic();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Ne(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Ne(), Ls();
      },
      useFormState: function(e, t) {
        return x = "useFormState", Ne(), Hs(), ka(e, t);
      },
      useActionState: function(e, t) {
        return x = "useActionState", Ne(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", Ne(), Vi(e);
      },
      useHostTransitionStatus: rc,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Ne(), Yd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", Ne(), Xs(e);
      }
    }, bS = {
      readContext: function(e) {
        return gt(e);
      },
      use: ic,
      useCallback: function(e, t) {
        return x = "useCallback", K(), Bd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", K(), gt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", K(), Zi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", K(), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", K(), Fc(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", K(), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", K();
        var a = G.H;
        G.H = pi;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", K();
        var c = G.H;
        G.H = pi;
        try {
          return Io(e, t, a);
        } finally {
          G.H = c;
        }
      },
      useRef: function(e) {
        return x = "useRef", K(), Nd(e);
      },
      useState: function(e) {
        x = "useState", K();
        var t = G.H;
        G.H = pi;
        try {
          return Kc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", K(), af(e, t);
      },
      useTransition: function() {
        return x = "useTransition", K(), Ic();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", K(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Ls();
      },
      useActionState: function(e, t) {
        return x = "useActionState", K(), ka(e, t);
      },
      useFormState: function(e, t) {
        return x = "useFormState", K(), Hs(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", K(), Vi(e);
      },
      useHostTransitionStatus: rc,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Yd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", K(), Xs(e);
      }
    }, w1 = {
      readContext: function(e) {
        return gt(e);
      },
      use: ic,
      useCallback: function(e, t) {
        return x = "useCallback", K(), Ln(e, t);
      },
      useContext: function(e) {
        return x = "useContext", K(), gt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", K(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", K(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", K(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", K(), zl(4, au, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", K();
        var a = G.H;
        G.H = Ac;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", K();
        var c = G.H;
        G.H = Ac;
        try {
          return Xi(e, t, a);
        } finally {
          G.H = c;
        }
      },
      useRef: function() {
        return x = "useRef", K(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", K();
        var e = G.H;
        G.H = Ac;
        try {
          return Xi($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", K(), Au(e, t);
      },
      useTransition: function() {
        return x = "useTransition", K(), Qp();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", K(), Li(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", K(), Hs(), kc(e);
      },
      useActionState: function(e) {
        return x = "useActionState", K(), kc(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", K(), xs(e, t);
      },
      useHostTransitionStatus: rc,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", K(), tf(e);
      }
    }, ES = {
      readContext: function(e) {
        return gt(e);
      },
      use: ic,
      useCallback: function(e, t) {
        return x = "useCallback", K(), Ln(e, t);
      },
      useContext: function(e) {
        return x = "useContext", K(), gt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", K(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", K(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", K(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", K(), zl(4, au, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", K();
        var a = G.H;
        G.H = hg;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", K();
        var c = G.H;
        G.H = hg;
        try {
          return Qi(e, t, a);
        } finally {
          G.H = c;
        }
      },
      useRef: function() {
        return x = "useRef", K(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", K();
        var e = G.H;
        G.H = hg;
        try {
          return Qi($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", K(), Xe(e, t);
      },
      useTransition: function() {
        return x = "useTransition", K(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", K(), Li(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", K(), Hs(), Wc(e);
      },
      useActionState: function(e) {
        return x = "useActionState", K(), Wc(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", K(), Gs(e, t);
      },
      useHostTransitionStatus: rc,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", K(), tf(e);
      }
    }, pi = {
      readContext: function(e) {
        return ne(), gt(e);
      },
      use: function(e) {
        return ee(), ic(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), Ne(), Bd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), Ne(), gt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", ee(), Ne(), Zi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), Ne(), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", ee(), Ne(), Fc(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), Ne(), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), Ne();
        var a = G.H;
        G.H = pi;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), Ne();
        var c = G.H;
        G.H = pi;
        try {
          return Io(e, t, a);
        } finally {
          G.H = c;
        }
      },
      useRef: function(e) {
        return x = "useRef", ee(), Ne(), Nd(e);
      },
      useState: function(e) {
        x = "useState", ee(), Ne();
        var t = G.H;
        G.H = pi;
        try {
          return Kc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), Ne();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), Ne(), af(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), Ne(), Ic();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), Ne(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), Ne(), Ls();
      },
      useFormState: function(e, t) {
        return x = "useFormState", ee(), Ne(), ka(e, t);
      },
      useActionState: function(e, t) {
        return x = "useActionState", ee(), Ne(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", ee(), Ne(), Vi(e);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: rc,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Ne(), Yd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), Ne(), Xs(e);
      }
    }, Ac = {
      readContext: function(e) {
        return ne(), gt(e);
      },
      use: function(e) {
        return ee(), ic(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), K(), Ln(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), K(), gt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", ee(), K(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), K(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", ee(), K(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), K(), zl(4, au, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), K();
        var a = G.H;
        G.H = Ac;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), K();
        var c = G.H;
        G.H = Ac;
        try {
          return Xi(e, t, a);
        } finally {
          G.H = c;
        }
      },
      useRef: function() {
        return x = "useRef", ee(), K(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", ee(), K();
        var e = G.H;
        G.H = Ac;
        try {
          return Xi($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), K(), Au(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), K(), Qp();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), K(), Li(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), K(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", ee(), K(), kc(e);
      },
      useActionState: function(e) {
        return x = "useActionState", ee(), K(), kc(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", ee(), K(), xs(e, t);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: rc,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), K(), tf(e);
      }
    }, hg = {
      readContext: function(e) {
        return ne(), gt(e);
      },
      use: function(e) {
        return ee(), ic(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), K(), Ln(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), K(), gt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", ee(), K(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), K(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", ee(), K(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), K(), zl(4, au, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), K();
        var a = G.H;
        G.H = Ac;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), K();
        var c = G.H;
        G.H = Ac;
        try {
          return Qi(e, t, a);
        } finally {
          G.H = c;
        }
      },
      useRef: function() {
        return x = "useRef", ee(), K(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", ee(), K();
        var e = G.H;
        G.H = Ac;
        try {
          return Qi($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), K(), Xe(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), K(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), K(), Li(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), K(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", ee(), K(), Wc(e);
      },
      useActionState: function(e) {
        return x = "useActionState", ee(), K(), Wc(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", ee(), K(), Gs(e, t);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: rc,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), K(), tf(e);
      }
    };
    var TS = {}, AS = /* @__PURE__ */ new Set(), OS = /* @__PURE__ */ new Set(), zS = /* @__PURE__ */ new Set(), DS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), RS = /* @__PURE__ */ new Set(), MS = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), US = /* @__PURE__ */ new Set(), HS = /* @__PURE__ */ new Set();
    Object.freeze(TS);
    var X1 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var c = aa(e), o = Ol(c);
        o.payload = t, a != null && (ki(a), o.callback = a), t = gu(e, o, c), t !== null && (yu(c, "this.setState()", e), Ue(t, e, c), bn(t, e, c));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var c = aa(e), o = Ol(c);
        o.tag = mS, o.payload = t, a != null && (ki(a), o.callback = a), t = gu(e, o, c), t !== null && (yu(c, "this.replaceState()", e), Ue(t, e, c), bn(t, e, c));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = aa(e), c = Ol(a);
        c.tag = yS, t != null && (ki(t), c.callback = t), t = gu(e, c, a), t !== null && (yu(a, "this.forceUpdate()", e), Ue(t, e, a), bn(t, e, a));
      }
    }, o0 = null, Q1 = null, L1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ll = !1, NS = {}, BS = {}, YS = {}, jS = {}, f0 = !1, qS = {}, mg = {}, V1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, xS = !1, GS = null;
    GS = /* @__PURE__ */ new Set();
    var zo = !1, Vl = !1, Z1 = !1, wS = typeof WeakSet == "function" ? WeakSet : Set, ia = null, s0 = null, r0 = null, Zl = null, Dn = !1, Oc = null, Fl = !1, Iy = 8192, $E = {
      getCacheForType: function(e) {
        var t = gt(wl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return gt(wl).controller.signal;
      },
      getOwner: function() {
        return Na;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Py = Symbol.for;
      Py("selector.component"), Py("selector.has_pseudo_class"), Py("selector.role"), Py("selector.test_id"), Py("selector.text");
    }
    var kE = [], WE = typeof WeakMap == "function" ? WeakMap : Map, oa = 0, Il = 2, nu = 4, Do = 0, ep = 1, Xr = 2, yg = 3, If = 4, pg = 6, XS = 5, dt = oa, Xt = null, tt = null, Ie = 0, _n = 0, vg = 1, Qr = 2, tp = 3, QS = 4, J1 = 5, lp = 6, gg = 7, K1 = 8, Lr = 9, Nt = _n, uu = null, Pf = !1, d0 = !1, $1 = !1, vi = 0, sl = Do, es = 0, ts = 0, k1 = 0, Rn = 0, Vr = 0, ap = null, sn = null, Sg = !1, bg = 0, LS = 0, VS = 300, Eg = 1 / 0, ZS = 500, np = null, El = null, ls = null, Tg = 0, W1 = 1, F1 = 2, JS = 3, as = 0, KS = 1, $S = 2, kS = 3, WS = 4, Ag = 5, Jl = 0, ns = null, h0 = null, zc = 0, I1 = 0, P1 = -0, e2 = null, FS = null, IS = null, Dc = Tg, PS = null, FE = 50, up = 0, t2 = null, l2 = !1, Og = !1, IE = 50, Zr = 0, cp = null, m0 = !1, zg = null, eb = !1, tb = /* @__PURE__ */ new Set(), PE = {}, Dg = null, y0 = null, a2 = !1, n2 = !1, _g = !1, u2 = !1, us = 0, c2 = {};
    (function() {
      for (var e = 0; e < v1.length; e++) {
        var t = v1[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Nn(a, "on" + t);
      }
      Nn(U2, "onAnimationEnd"), Nn(H2, "onAnimationIteration"), Nn(N2, "onAnimationStart"), Nn("dblclick", "onDoubleClick"), Nn("focusin", "onFocus"), Nn("focusout", "onBlur"), Nn(RE, "onTransitionRun"), Nn(ME, "onTransitionStart"), Nn(CE, "onTransitionCancel"), Nn(B2, "onTransitionEnd");
    })(), Ge("onMouseEnter", ["mouseout", "mouseover"]), Ge("onMouseLeave", ["mouseout", "mouseover"]), Ge("onPointerEnter", ["pointerout", "pointerover"]), Ge("onPointerLeave", ["pointerout", "pointerover"]), Pe(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Pe(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Pe("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Pe(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Pe(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Pe(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var ip = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), i2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ip)
    ), Rg = "_reactListening" + Math.random().toString(36).slice(2), lb = !1, ab = !1, Mg = !1, nb = !1, Cg = !1, Ug = !1, ub = !1, Hg = {}, e3 = /\r\n?/g, t3 = /\u0000|\uFFFD/g, Jr = "http://www.w3.org/1999/xlink", o2 = "http://www.w3.org/XML/1998/namespace", l3 = "javascript:throw new Error('React form unexpectedly submitted.')", a3 = "suppressHydrationWarning", Kr = "&", Ng = "/&", op = "$", fp = "/$", cs = "$?", $r = "$~", p0 = "$!", n3 = "html", u3 = "body", c3 = "head", f2 = "F!", cb = "F", ib = "loading", i3 = "style", _o = 0, v0 = 1, Bg = 2, s2 = null, r2 = null, ob = { dialog: !0, webview: !0 }, d2 = null, sp = void 0, fb = typeof setTimeout == "function" ? setTimeout : void 0, o3 = typeof clearTimeout == "function" ? clearTimeout : void 0, kr = -1, sb = typeof Promise == "function" ? Promise : void 0, f3 = typeof queueMicrotask == "function" ? queueMicrotask : typeof sb < "u" ? function(e) {
      return sb.resolve(null).then(e).catch(sv);
    } : fb, h2 = null, Wr = 0, rp = 1, rb = 2, db = 3, Wu = 4, Fu = /* @__PURE__ */ new Map(), hb = /* @__PURE__ */ new Set(), Ro = bt.d;
    bt.d = {
      f: function() {
        var e = Ro.f(), t = en();
        return e || t;
      },
      r: function(e) {
        var t = te(e);
        t !== null && t.tag === 5 && t.type === "form" ? nf(t) : Ro.r(e);
      },
      D: function(e) {
        Ro.D(e), Im("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Ro.C(e, t), Im("preconnect", e, t);
      },
      L: function(e, t, a) {
        Ro.L(e, t, a);
        var c = g0;
        if (c && e && t) {
          var o = 'link[rel="preload"][as="' + Rt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Rt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Rt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Rt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = uo(e);
              break;
            case "script":
              f = co(e);
          }
          Fu.has(f) || (e = ke(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Fu.set(f, e), c.querySelector(o) !== null || t === "style" && c.querySelector(
            yr(f)
          ) || t === "script" && c.querySelector(pr(f)) || (t = c.createElement("link"), kt(t, "link", e), he(t), c.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Ro.m(e, t);
        var a = g0;
        if (a && e) {
          var c = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Rt(c) + '"][href="' + Rt(e) + '"]', f = o;
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = co(e);
          }
          if (!Fu.has(f) && (e = ke({ rel: "modulepreload", href: e }, t), Fu.set(f, e), a.querySelector(o) === null)) {
            switch (c) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(pr(f)))
                  return;
            }
            c = a.createElement("link"), kt(c, "link", e), he(c), a.head.appendChild(c);
          }
        }
      },
      X: function(e, t) {
        Ro.X(e, t);
        var a = g0;
        if (a && e) {
          var c = De(a).hoistableScripts, o = co(e), f = c.get(o);
          f || (f = a.querySelector(
            pr(o)
          ), f || (e = ke({ src: e, async: !0 }, t), (t = Fu.get(o)) && ty(e, t), f = a.createElement("script"), he(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      },
      S: function(e, t, a) {
        Ro.S(e, t, a);
        var c = g0;
        if (c && e) {
          var o = De(c).hoistableStyles, f = uo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Wr, preload: null };
            if (d = c.querySelector(
              yr(f)
            ))
              h.loading = rp | Wu;
            else {
              e = ke(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Fu.get(f)) && ey(e, a);
              var y = d = c.createElement("link");
              he(y), kt(y, "link", e), y._p = new Promise(function(p, z) {
                y.onload = p, y.onerror = z;
              }), y.addEventListener("load", function() {
                h.loading |= rp;
              }), y.addEventListener("error", function() {
                h.loading |= rb;
              }), h.loading |= Wu, Df(d, t, c);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Ro.M(e, t);
        var a = g0;
        if (a && e) {
          var c = De(a).hoistableScripts, o = co(e), f = c.get(o);
          f || (f = a.querySelector(
            pr(o)
          ), f || (e = ke({ src: e, async: !0, type: "module" }, t), (t = Fu.get(o)) && ty(e, t), f = a.createElement("script"), he(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      }
    };
    var g0 = typeof document > "u" ? null : document, Yg = null, s3 = 6e4, r3 = 800, d3 = 500, m2 = 0, y2 = null, jg = null, Fr = u1, dp = {
      $$typeof: In,
      Provider: null,
      Consumer: null,
      _currentValue: Fr,
      _currentValue2: Fr,
      _threadCount: 0
    }, mb = "%c%s%c", yb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", pb = "", qg = " ", h3 = Function.prototype.bind, vb = !1, gb = null, Sb = null, bb = null, Eb = null, Tb = null, Ab = null, Ob = null, zb = null, Db = null, _b = null;
    gb = function(e, t, a, c) {
      t = k(e, t), t !== null && (a = ae(t.memoizedState, a, 0, c), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ue(a, e, 2));
    }, Sb = function(e, t, a) {
      t = k(e, t), t !== null && (a = Ce(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ue(a, e, 2));
    }, bb = function(e, t, a, c) {
      t = k(e, t), t !== null && (a = $e(t.memoizedState, a, c), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ue(a, e, 2));
    }, Eb = function(e, t, a) {
      e.pendingProps = ae(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ue(t, e, 2);
    }, Tb = function(e, t) {
      e.pendingProps = Ce(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ue(t, e, 2);
    }, Ab = function(e, t, a) {
      e.pendingProps = $e(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ue(t, e, 2);
    }, Ob = function(e) {
      var t = ta(e, 2);
      t !== null && Ue(t, e, 2);
    }, zb = function(e) {
      var t = Co(), a = ta(e, t);
      a !== null && Ue(a, e, t);
    }, Db = function(e) {
      vt = e;
    }, _b = function(e) {
      qe = e;
    };
    var xg = !0, Gg = null, p2 = !1, is = null, os = null, fs = null, hp = /* @__PURE__ */ new Map(), mp = /* @__PURE__ */ new Map(), ss = [], m3 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), wg = null;
    if (Fn.prototype.render = ry.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ft(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var c = t.current, o = aa(c);
      zh(c, o, a, t, null, null);
    }, Fn.prototype.unmount = ry.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (dt & (Il | nu)) !== oa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), zh(e.current, 2, null, e, null, null), en(), t[bc] = null;
      }
    }, Fn.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Cc();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < ss.length && t !== 0 && t < ss[a].priority; a++) ;
        ss.splice(a, 0, e), a === 0 && sy(e);
      }
    }, (function() {
      var e = Er.version;
      if (e !== "19.2.3")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.3
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), bt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = el(t), e = e !== null ? ul(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        reconcilerVersion: "19.2.3"
      };
      return e.overrideHookState = gb, e.overrideHookStateDeletePath = Sb, e.overrideHookStateRenamePath = bb, e.overrideProps = Eb, e.overridePropsDeletePath = Tb, e.overridePropsRenamePath = Ab, e.scheduleUpdate = Ob, e.scheduleRetry = zb, e.setErrorHandler = Db, e.setSuspenseHandler = _b, e.scheduleRefresh = Le, e.scheduleRoot = ce, e.setRefreshHandler = _t, e.getCurrentFiber = Ut, rs(e);
    })() && hi && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var Rb = window.location.protocol;
      /^(https?|file):$/.test(Rb) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (Rb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    gp.createRoot = function(e, t) {
      if (!ft(e))
        throw Error("Target container is not a DOM element.");
      dy(e);
      var a = !1, c = "", o = xd, f = Gd, d = cm;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === On && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (c = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Sr(
        e,
        1,
        !1,
        null,
        null,
        a,
        c,
        null,
        o,
        f,
        d,
        Bv
      ), e[bc] = t.current, ui(e), new ry(t);
    }, gp.hydrateRoot = function(e, t, a) {
      if (!ft(e))
        throw Error("Target container is not a DOM element.");
      dy(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var c = !1, o = "", f = xd, d = Gd, h = cm, y = null;
      return a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Sr(
        e,
        1,
        !0,
        t,
        a ?? null,
        c,
        o,
        y,
        f,
        d,
        h,
        Bv
      ), t.context = Cv(null), a = t.current, c = aa(a), c = rn(c), o = Ol(c), o.callback = null, gu(a, o, c), yu(c, "hydrateRoot()", null), a = c, t.current.lanes = a, Cn(t, a), Ma(t), e[bc] = t.current, ui(e), new Fn(t);
    }, gp.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), gp;
}
var Lb;
function _3() {
  if (Lb) return Lg.exports;
  Lb = 1;
  function k() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (ae) {
        console.error(ae);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (k(), Lg.exports = z3()) : Lg.exports = D3(), Lg.exports;
}
var R3 = _3(), M3 = S0();
const C3 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", U3 = "/vite.svg";
function H3() {
  const [k, ae] = M3.useState(0);
  return /* @__PURE__ */ Mn.jsxs(Mn.Fragment, { children: [
    /* @__PURE__ */ Mn.jsxs("div", { children: [
      /* @__PURE__ */ Mn.jsx("a", { href: "https://vite.dev", target: "_blank", children: /* @__PURE__ */ Mn.jsx("img", { src: U3, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ Mn.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ Mn.jsx("img", { src: C3, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ Mn.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ Mn.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ Mn.jsxs("button", { onClick: () => ae(($e) => $e + 1), children: [
        "count is ",
        k
      ] }),
      /* @__PURE__ */ Mn.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ Mn.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ Mn.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
function Kb(k) {
  const ae = document.createElement("div");
  k.appendChild(ae), R3.createRoot(ae).render(/* @__PURE__ */ Mn.jsx(H3, {}));
}
const Vb = document.getElementById("root");
Vb && Kb(Vb);
class N3 extends HTMLElement {
  connectedCallback() {
    const ae = this.attachShadow({ mode: "open" });
    Kb(ae);
  }
}
customElements.define("my-react-widget", N3);
