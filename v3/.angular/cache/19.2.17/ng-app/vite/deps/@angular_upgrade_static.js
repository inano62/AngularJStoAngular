import {
  platformBrowser
} from "./chunk-HNTEWQMX.js";
import "./chunk-BPKB36Y2.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  NG_MOD_DEF,
  NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR,
  NgModule,
  NgZone,
  PlatformRef,
  SIGNAL,
  SimpleChange,
  Testability,
  TestabilityRegistry,
  Version,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject,
  ɵɵinvalidFactory
} from "./chunk-TGMXX4AN.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/upgrade/fesm2022/constants-nqBIph3y.mjs
function noNg() {
  throw new Error("AngularJS v1.x is not loaded!");
}
var noNgElement = () => noNg();
noNgElement.cleanData = noNg;
var angular = {
  bootstrap: noNg,
  module: noNg,
  element: noNgElement,
  injector: noNg,
  version: void 0,
  resumeBootstrap: noNg,
  getTestability: noNg
};
try {
  if (window.hasOwnProperty("angular")) {
    angular = window.angular;
  }
} catch {
}
function setAngularLib(ng) {
  setAngularJSGlobal(ng);
}
function getAngularLib() {
  return getAngularJSGlobal();
}
function setAngularJSGlobal(ng) {
  angular = ng;
}
function getAngularJSGlobal() {
  return angular;
}
var bootstrap = (e, modules, config) => angular.bootstrap(e, modules, config);
var module_ = (prefix, dependencies) => angular.module(prefix, dependencies);
var element = (e) => angular.element(e);
element.cleanData = (nodes) => angular.element.cleanData(nodes);
var injector = (modules, strictDi) => angular.injector(modules, strictDi);
var resumeBootstrap = () => angular.resumeBootstrap();
var getTestability = (e) => angular.getTestability(e);
var angular1 = Object.freeze({
  __proto__: null,
  bootstrap,
  element,
  getAngularJSGlobal,
  getAngularLib,
  getTestability,
  injector,
  module_,
  resumeBootstrap,
  setAngularJSGlobal,
  setAngularLib
});
var $COMPILE = "$compile";
var $CONTROLLER = "$controller";
var $DELEGATE = "$delegate";
var $EXCEPTION_HANDLER = "$exceptionHandler";
var $HTTP_BACKEND = "$httpBackend";
var $INJECTOR = "$injector";
var $INTERVAL = "$interval";
var $PARSE = "$parse";
var $PROVIDE = "$provide";
var $ROOT_ELEMENT = "$rootElement";
var $ROOT_SCOPE = "$rootScope";
var $SCOPE = "$scope";
var $TEMPLATE_CACHE = "$templateCache";
var $TEMPLATE_REQUEST = "$templateRequest";
var $$TESTABILITY = "$$testability";
var COMPILER_KEY = "$$angularCompiler";
var DOWNGRADED_MODULE_COUNT_KEY = "$$angularDowngradedModuleCount";
var GROUP_PROJECTABLE_NODES_KEY = "$$angularGroupProjectableNodes";
var INJECTOR_KEY = "$$angularInjector";
var LAZY_MODULE_REF = "$$angularLazyModuleRef";
var NG_ZONE_KEY = "$$angularNgZone";
var UPGRADE_APP_TYPE_KEY = "$$angularUpgradeAppType";
var REQUIRE_INJECTOR = "?^^" + INJECTOR_KEY;
var REQUIRE_NG_MODEL = "?ngModel";
var UPGRADE_MODULE_NAME = "$$UpgradeModule";
var constants = Object.freeze({
  __proto__: null,
  $$TESTABILITY,
  $COMPILE,
  $CONTROLLER,
  $DELEGATE,
  $EXCEPTION_HANDLER,
  $HTTP_BACKEND,
  $INJECTOR,
  $INTERVAL,
  $PARSE,
  $PROVIDE,
  $ROOT_ELEMENT,
  $ROOT_SCOPE,
  $SCOPE,
  $TEMPLATE_CACHE,
  $TEMPLATE_REQUEST,
  COMPILER_KEY,
  DOWNGRADED_MODULE_COUNT_KEY,
  GROUP_PROJECTABLE_NODES_KEY,
  INJECTOR_KEY,
  LAZY_MODULE_REF,
  NG_ZONE_KEY,
  REQUIRE_INJECTOR,
  REQUIRE_NG_MODEL,
  UPGRADE_APP_TYPE_KEY,
  UPGRADE_MODULE_NAME
});

// node_modules/@angular/upgrade/fesm2022/upgrade_helper-C850j0tg.mjs
var VERSION = new Version("19.2.17");
var PropertyBinding = class {
  prop;
  attr;
  bracketAttr;
  bracketParenAttr;
  parenAttr;
  onAttr;
  bindAttr;
  bindonAttr;
  constructor(prop, attr) {
    this.prop = prop;
    this.attr = attr;
    this.bracketAttr = `[${this.attr}]`;
    this.parenAttr = `(${this.attr})`;
    this.bracketParenAttr = `[(${this.attr})]`;
    const capitalAttr = this.attr.charAt(0).toUpperCase() + this.attr.slice(1);
    this.onAttr = `on${capitalAttr}`;
    this.bindAttr = `bind${capitalAttr}`;
    this.bindonAttr = `bindon${capitalAttr}`;
  }
};
var DIRECTIVE_PREFIX_REGEXP = /^(?:x|data)[:\-_]/i;
var DIRECTIVE_SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g;
function onError(e) {
  console.error(e, e.stack);
  throw e;
}
function cleanData(node) {
  element.cleanData([node]);
  if (isParentNode(node)) {
    element.cleanData(node.querySelectorAll("*"));
  }
}
function controllerKey(name) {
  return "$" + name + "Controller";
}
function destroyApp($injector) {
  const $rootElement = $injector.get($ROOT_ELEMENT);
  const $rootScope = $injector.get($ROOT_SCOPE);
  $rootScope.$destroy();
  cleanData($rootElement[0]);
}
function directiveNormalize(name) {
  return name.replace(DIRECTIVE_PREFIX_REGEXP, "").replace(DIRECTIVE_SPECIAL_CHARS_REGEXP, (_, letter) => letter.toUpperCase());
}
function getTypeName(type) {
  return type.overriddenName || type.name || type.toString().split("\n")[0];
}
function getDowngradedModuleCount($injector) {
  return $injector.has(DOWNGRADED_MODULE_COUNT_KEY) ? $injector.get(DOWNGRADED_MODULE_COUNT_KEY) : 0;
}
function getUpgradeAppType($injector) {
  return $injector.has(UPGRADE_APP_TYPE_KEY) ? $injector.get(UPGRADE_APP_TYPE_KEY) : 0;
}
function isFunction(value) {
  return typeof value === "function";
}
function isNgModuleType(value) {
  return isFunction(value) && !!value[NG_MOD_DEF];
}
function isParentNode(node) {
  return isFunction(node.querySelectorAll);
}
function validateInjectionKey($injector, downgradedModule, injectionKey, attemptedAction) {
  const upgradeAppType = getUpgradeAppType($injector);
  const downgradedModuleCount = getDowngradedModuleCount($injector);
  switch (upgradeAppType) {
    case 1:
    case 2:
      if (downgradedModule) {
        throw new Error(`Error while ${attemptedAction}: 'downgradedModule' unexpectedly specified.
You should not specify a value for 'downgradedModule', unless you are downgrading more than one Angular module (via 'downgradeModule()').`);
      }
      break;
    case 3:
      if (!downgradedModule && downgradedModuleCount >= 2) {
        throw new Error(`Error while ${attemptedAction}: 'downgradedModule' not specified.
This application contains more than one downgraded Angular module, thus you need to always specify 'downgradedModule' when downgrading components and injectables.`);
      }
      if (!$injector.has(injectionKey)) {
        throw new Error(`Error while ${attemptedAction}: Unable to find the specified downgraded module.
Did you forget to downgrade an Angular module or include it in the AngularJS application?`);
      }
      break;
    default:
      throw new Error(`Error while ${attemptedAction}: Not a valid '@angular/upgrade' application.
Did you forget to downgrade an Angular module or include it in the AngularJS application?`);
  }
}
var Deferred = class {
  promise;
  resolve;
  reject;
  constructor() {
    this.promise = new Promise((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
  }
};
function supportsNgModel(component) {
  return typeof component.writeValue === "function" && typeof component.registerOnChange === "function";
}
function hookupNgModel(ngModel, component) {
  if (ngModel && supportsNgModel(component)) {
    ngModel.$render = () => {
      component.writeValue(ngModel.$viewValue);
    };
    component.registerOnChange(ngModel.$setViewValue.bind(ngModel));
    if (typeof component.registerOnTouched === "function") {
      component.registerOnTouched(ngModel.$setTouched.bind(ngModel));
    }
  }
}
function strictEquals(val1, val2) {
  return val1 === val2 || val1 !== val1 && val2 !== val2;
}
var util = Object.freeze({
  __proto__: null,
  Deferred,
  cleanData,
  controllerKey,
  destroyApp,
  directiveNormalize,
  getDowngradedModuleCount,
  getTypeName,
  getUpgradeAppType,
  hookupNgModel,
  isFunction,
  isNgModuleType,
  onError,
  strictEquals,
  validateInjectionKey
});
var INITIAL_VALUE = {
  __UNINITIALIZED__: true
};
var DowngradeComponentAdapter = class {
  element;
  attrs;
  scope;
  ngModel;
  parentInjector;
  $compile;
  $parse;
  componentFactory;
  wrapCallback;
  unsafelyOverwriteSignalInputs;
  implementsOnChanges = false;
  inputChangeCount = 0;
  inputChanges = {};
  componentScope;
  constructor(element2, attrs, scope, ngModel, parentInjector, $compile, $parse, componentFactory, wrapCallback, unsafelyOverwriteSignalInputs) {
    this.element = element2;
    this.attrs = attrs;
    this.scope = scope;
    this.ngModel = ngModel;
    this.parentInjector = parentInjector;
    this.$compile = $compile;
    this.$parse = $parse;
    this.componentFactory = componentFactory;
    this.wrapCallback = wrapCallback;
    this.unsafelyOverwriteSignalInputs = unsafelyOverwriteSignalInputs;
    this.componentScope = scope.$new();
  }
  compileContents() {
    const compiledProjectableNodes = [];
    const projectableNodes = this.groupProjectableNodes();
    const linkFns = projectableNodes.map((nodes) => this.$compile(nodes));
    this.element.empty();
    linkFns.forEach((linkFn) => {
      linkFn(this.scope, (clone) => {
        compiledProjectableNodes.push(clone);
        this.element.append(clone);
      });
    });
    return compiledProjectableNodes;
  }
  createComponentAndSetup(projectableNodes, manuallyAttachView = false, propagateDigest = true) {
    const component = this.createComponent(projectableNodes);
    this.setupInputs(manuallyAttachView, propagateDigest, component);
    this.setupOutputs(component.componentRef);
    this.registerCleanup(component.componentRef);
    return component.componentRef;
  }
  createComponent(projectableNodes) {
    const providers = [{
      provide: $SCOPE,
      useValue: this.componentScope
    }];
    const childInjector = Injector.create({
      providers,
      parent: this.parentInjector,
      name: "DowngradeComponentAdapter"
    });
    const componentRef = this.componentFactory.create(childInjector, projectableNodes, this.element[0]);
    const viewChangeDetector = componentRef.injector.get(ChangeDetectorRef);
    const changeDetector = componentRef.changeDetectorRef;
    const testability = componentRef.injector.get(Testability, null);
    if (testability) {
      componentRef.injector.get(TestabilityRegistry).registerApplication(componentRef.location.nativeElement, testability);
    }
    hookupNgModel(this.ngModel, componentRef.instance);
    return {
      viewChangeDetector,
      componentRef,
      changeDetector
    };
  }
  setupInputs(manuallyAttachView, propagateDigest = true, {
    componentRef,
    changeDetector,
    viewChangeDetector
  }) {
    const attrs = this.attrs;
    const inputs = this.componentFactory.inputs || [];
    for (const input of inputs) {
      const inputBinding = new PropertyBinding(input.propName, input.templateName);
      let expr = null;
      if (attrs.hasOwnProperty(inputBinding.attr)) {
        const observeFn = /* @__PURE__ */ ((prop, isSignal) => {
          let prevValue = INITIAL_VALUE;
          return (currValue) => {
            if (!strictEquals(prevValue, currValue)) {
              if (prevValue === INITIAL_VALUE) {
                prevValue = currValue;
              }
              this.updateInput(componentRef, prop, prevValue, currValue, isSignal);
              prevValue = currValue;
            }
          };
        })(inputBinding.prop, input.isSignal);
        attrs.$observe(inputBinding.attr, observeFn);
        let unwatch = this.componentScope.$watch(() => {
          unwatch();
          unwatch = null;
          observeFn(attrs[inputBinding.attr]);
        });
      } else if (attrs.hasOwnProperty(inputBinding.bindAttr)) {
        expr = attrs[inputBinding.bindAttr];
      } else if (attrs.hasOwnProperty(inputBinding.bracketAttr)) {
        expr = attrs[inputBinding.bracketAttr];
      } else if (attrs.hasOwnProperty(inputBinding.bindonAttr)) {
        expr = attrs[inputBinding.bindonAttr];
      } else if (attrs.hasOwnProperty(inputBinding.bracketParenAttr)) {
        expr = attrs[inputBinding.bracketParenAttr];
      }
      if (expr != null) {
        const watchFn = /* @__PURE__ */ ((prop, isSignal) => (currValue, prevValue) => this.updateInput(componentRef, prop, prevValue, currValue, isSignal))(inputBinding.prop, input.isSignal);
        this.componentScope.$watch(expr, watchFn);
      }
    }
    const detectChanges = () => changeDetector.detectChanges();
    const prototype = this.componentFactory.componentType.prototype;
    this.implementsOnChanges = !!(prototype && prototype.ngOnChanges);
    this.componentScope.$watch(() => this.inputChangeCount, this.wrapCallback(() => {
      if (this.implementsOnChanges) {
        const inputChanges = this.inputChanges;
        this.inputChanges = {};
        componentRef.instance.ngOnChanges(inputChanges);
      }
      viewChangeDetector.markForCheck();
      if (!propagateDigest) {
        detectChanges();
      }
    }));
    if (propagateDigest) {
      this.componentScope.$watch(this.wrapCallback(detectChanges));
    }
    if (manuallyAttachView || !propagateDigest) {
      let unwatch = this.componentScope.$watch(() => {
        unwatch();
        unwatch = null;
        const appRef = this.parentInjector.get(ApplicationRef);
        appRef.attachView(componentRef.hostView);
      });
    }
  }
  setupOutputs(componentRef) {
    const attrs = this.attrs;
    const outputs = this.componentFactory.outputs || [];
    for (const output of outputs) {
      const outputBindings = new PropertyBinding(output.propName, output.templateName);
      const bindonAttr = outputBindings.bindonAttr.substring(0, outputBindings.bindonAttr.length - 6);
      const bracketParenAttr = `[(${outputBindings.bracketParenAttr.substring(2, outputBindings.bracketParenAttr.length - 8)})]`;
      if (attrs.hasOwnProperty(bindonAttr)) {
        this.subscribeToOutput(componentRef, outputBindings, attrs[bindonAttr], true);
      }
      if (attrs.hasOwnProperty(bracketParenAttr)) {
        this.subscribeToOutput(componentRef, outputBindings, attrs[bracketParenAttr], true);
      }
      if (attrs.hasOwnProperty(outputBindings.onAttr)) {
        this.subscribeToOutput(componentRef, outputBindings, attrs[outputBindings.onAttr]);
      }
      if (attrs.hasOwnProperty(outputBindings.parenAttr)) {
        this.subscribeToOutput(componentRef, outputBindings, attrs[outputBindings.parenAttr]);
      }
    }
  }
  subscribeToOutput(componentRef, output, expr, isAssignment = false) {
    const getter = this.$parse(expr);
    const setter = getter.assign;
    if (isAssignment && !setter) {
      throw new Error(`Expression '${expr}' is not assignable!`);
    }
    const emitter = componentRef.instance[output.prop];
    if (emitter) {
      const subscription = emitter.subscribe(isAssignment ? (v) => setter(this.scope, v) : (v) => getter(this.scope, {
        "$event": v
      }));
      componentRef.onDestroy(() => subscription.unsubscribe());
    } else {
      throw new Error(`Missing emitter '${output.prop}' on component '${getTypeName(this.componentFactory.componentType)}'!`);
    }
  }
  registerCleanup(componentRef) {
    const testabilityRegistry = componentRef.injector.get(TestabilityRegistry);
    const destroyComponentRef = this.wrapCallback(() => componentRef.destroy());
    let destroyed = false;
    this.element.on("$destroy", () => {
      if (!destroyed) this.componentScope.$destroy();
    });
    this.componentScope.$on("$destroy", () => {
      if (!destroyed) {
        destroyed = true;
        testabilityRegistry.unregisterApplication(componentRef.location.nativeElement);
        cleanData(this.element[0]);
        destroyComponentRef();
      }
    });
  }
  updateInput(componentRef, prop, prevValue, currValue, isSignal) {
    if (this.implementsOnChanges) {
      this.inputChanges[prop] = new SimpleChange(prevValue, currValue, prevValue === currValue);
    }
    this.inputChangeCount++;
    if (isSignal && !this.unsafelyOverwriteSignalInputs) {
      const node = componentRef.instance[prop][SIGNAL];
      node.applyValueToInputSignal(node, currValue);
    } else {
      componentRef.instance[prop] = currValue;
    }
  }
  groupProjectableNodes() {
    let ngContentSelectors = this.componentFactory.ngContentSelectors;
    return groupNodesBySelector(ngContentSelectors, this.element.contents());
  }
};
function groupNodesBySelector(ngContentSelectors, nodes) {
  const projectableNodes = [];
  for (let i = 0, ii = ngContentSelectors.length; i < ii; ++i) {
    projectableNodes[i] = [];
  }
  for (let j = 0, jj = nodes.length; j < jj; ++j) {
    const node = nodes[j];
    const ngContentIndex = findMatchingNgContentIndex(node, ngContentSelectors);
    if (ngContentIndex != null) {
      projectableNodes[ngContentIndex].push(node);
    }
  }
  return projectableNodes;
}
function findMatchingNgContentIndex(element2, ngContentSelectors) {
  const ngContentIndices = [];
  let wildcardNgContentIndex = -1;
  for (let i = 0; i < ngContentSelectors.length; i++) {
    const selector = ngContentSelectors[i];
    if (selector === "*") {
      wildcardNgContentIndex = i;
    } else {
      if (matchesSelector(element2, selector)) {
        ngContentIndices.push(i);
      }
    }
  }
  ngContentIndices.sort();
  if (wildcardNgContentIndex !== -1) {
    ngContentIndices.push(wildcardNgContentIndex);
  }
  return ngContentIndices.length ? ngContentIndices[0] : null;
}
function matchesSelector(el, selector) {
  const elProto = Element.prototype;
  return el.nodeType === Node.ELEMENT_NODE ? (
    // matches is supported by all browsers from 2014 onwards except non-chromium edge
    (elProto.matches ?? elProto.msMatchesSelector).call(el, selector)
  ) : false;
}
function isThenable(obj) {
  return !!obj && isFunction(obj.then);
}
var SyncPromise = class _SyncPromise {
  value;
  resolved = false;
  callbacks = [];
  static all(valuesOrPromises) {
    const aggrPromise = new _SyncPromise();
    let resolvedCount = 0;
    const results = [];
    const resolve = (idx, value) => {
      results[idx] = value;
      if (++resolvedCount === valuesOrPromises.length) aggrPromise.resolve(results);
    };
    valuesOrPromises.forEach((p, idx) => {
      if (isThenable(p)) {
        p.then((v) => resolve(idx, v));
      } else {
        resolve(idx, p);
      }
    });
    return aggrPromise;
  }
  resolve(value) {
    if (this.resolved) return;
    this.value = value;
    this.resolved = true;
    this.callbacks.forEach((callback) => callback(value));
    this.callbacks.length = 0;
  }
  then(callback) {
    if (this.resolved) {
      callback(this.value);
    } else {
      this.callbacks.push(callback);
    }
  }
};
function downgradeComponent(info) {
  const directiveFactory = function($compile, $injector, $parse) {
    const unsafelyOverwriteSignalInputs = info.unsafelyOverwriteSignalInputs ?? false;
    const isNgUpgradeLite = getUpgradeAppType($injector) === 3;
    const wrapCallback = !isNgUpgradeLite ? (cb) => cb : (cb) => () => NgZone.isInAngularZone() ? cb() : ngZone.run(cb);
    let ngZone;
    const hasMultipleDowngradedModules = isNgUpgradeLite && getDowngradedModuleCount($injector) > 1;
    return {
      restrict: "E",
      terminal: true,
      require: [REQUIRE_INJECTOR, REQUIRE_NG_MODEL],
      // Controller needs to be set so that `angular-component-router.js` (from beta Angular 2)
      // configuration properties can be made available. See:
      // See G3: javascript/angular2/angular1_router_lib.js
      // https://github.com/angular/angular.js/blob/47bf11ee94664367a26ed8c91b9b586d3dd420f5/src/ng/compile.js#L1670-L1691.
      controller: function() {
      },
      link: (scope, element2, attrs, required) => {
        const ngModel = required[1];
        const parentInjector = required[0];
        let moduleInjector = void 0;
        let ranAsync = false;
        if (!parentInjector || hasMultipleDowngradedModules) {
          const downgradedModule = info.downgradedModule || "";
          const lazyModuleRefKey = `${LAZY_MODULE_REF}${downgradedModule}`;
          const attemptedAction = `instantiating component '${getTypeName(info.component)}'`;
          validateInjectionKey($injector, downgradedModule, lazyModuleRefKey, attemptedAction);
          const lazyModuleRef = $injector.get(lazyModuleRefKey);
          moduleInjector = lazyModuleRef.injector ?? lazyModuleRef.promise;
        }
        const finalParentInjector = parentInjector || moduleInjector;
        const finalModuleInjector = moduleInjector || parentInjector;
        const doDowngrade = (injector2, moduleInjector2) => {
          const componentFactoryResolver = moduleInjector2.get(ComponentFactoryResolver$1);
          const componentFactory = componentFactoryResolver.resolveComponentFactory(info.component);
          if (!componentFactory) {
            throw new Error(`Expecting ComponentFactory for: ${getTypeName(info.component)}`);
          }
          const injectorPromise = new ParentInjectorPromise(element2);
          const facade = new DowngradeComponentAdapter(element2, attrs, scope, ngModel, injector2, $compile, $parse, componentFactory, wrapCallback, unsafelyOverwriteSignalInputs);
          const projectableNodes = facade.compileContents();
          const componentRef = facade.createComponentAndSetup(projectableNodes, isNgUpgradeLite, info.propagateDigest);
          injectorPromise.resolve(componentRef.injector);
          if (ranAsync) {
            scope.$evalAsync(() => {
            });
          }
        };
        const downgradeFn = !isNgUpgradeLite ? doDowngrade : (pInjector, mInjector) => {
          if (!ngZone) {
            ngZone = pInjector.get(NgZone);
          }
          wrapCallback(() => doDowngrade(pInjector, mInjector))();
        };
        SyncPromise.all([finalParentInjector, finalModuleInjector]).then(([pInjector, mInjector]) => downgradeFn(pInjector, mInjector));
        ranAsync = true;
      }
    };
  };
  directiveFactory["$inject"] = [$COMPILE, $INJECTOR, $PARSE];
  return directiveFactory;
}
var ParentInjectorPromise = class extends SyncPromise {
  element;
  injectorKey = controllerKey(INJECTOR_KEY);
  constructor(element2) {
    super();
    this.element = element2;
    element2.data(this.injectorKey, this);
  }
  resolve(injector2) {
    this.element.data(this.injectorKey, injector2);
    this.element = null;
    super.resolve(injector2);
  }
};
function downgradeInjectable(token, downgradedModule = "") {
  const factory = function($injector) {
    const injectorKey = `${INJECTOR_KEY}${downgradedModule}`;
    const injectableName = isFunction(token) ? getTypeName(token) : String(token);
    const attemptedAction = `instantiating injectable '${injectableName}'`;
    validateInjectionKey($injector, downgradedModule, injectorKey, attemptedAction);
    try {
      const injector2 = $injector.get(injectorKey);
      return injector2.get(token);
    } catch (err) {
      throw new Error(`Error while ${attemptedAction}: ${err.message || err}`);
    }
  };
  factory["$inject"] = [$INJECTOR];
  return factory;
}
var policy;
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    const windowWithTrustedTypes = window;
    if (windowWithTrustedTypes.trustedTypes) {
      try {
        policy = windowWithTrustedTypes.trustedTypes.createPolicy("angular#unsafe-upgrade", {
          createHTML: (s) => s
        });
      } catch {
      }
    }
  }
  return policy;
}
function trustedHTMLFromLegacyTemplate(html) {
  return getPolicy()?.createHTML(html) || html;
}
var REQUIRE_PREFIX_RE = /^(\^\^?)?(\?)?(\^\^?)?/;
var UpgradeHelper = class _UpgradeHelper {
  name;
  $injector;
  element;
  $element;
  directive;
  $compile;
  $controller;
  constructor(injector2, name, elementRef, directive) {
    this.name = name;
    this.$injector = injector2.get($INJECTOR);
    this.$compile = this.$injector.get($COMPILE);
    this.$controller = this.$injector.get($CONTROLLER);
    this.element = elementRef.nativeElement;
    this.$element = element(this.element);
    this.directive = directive ?? _UpgradeHelper.getDirective(this.$injector, name);
  }
  static getDirective($injector, name) {
    const directives = $injector.get(name + "Directive");
    if (directives.length > 1) {
      throw new Error(`Only support single directive definition for: ${name}`);
    }
    const directive = directives[0];
    if (directive.compile && !directive.link) notSupported(name, "compile");
    if (directive.replace) notSupported(name, "replace");
    if (directive.terminal) notSupported(name, "terminal");
    return directive;
  }
  static getTemplate($injector, directive, fetchRemoteTemplate = false, $element) {
    if (directive.template !== void 0) {
      return trustedHTMLFromLegacyTemplate(getOrCall(directive.template, $element));
    } else if (directive.templateUrl) {
      const $templateCache = $injector.get($TEMPLATE_CACHE);
      const url = getOrCall(directive.templateUrl, $element);
      const template = $templateCache.get(url);
      if (template !== void 0) {
        return trustedHTMLFromLegacyTemplate(template);
      } else if (!fetchRemoteTemplate) {
        throw new Error("loading directive templates asynchronously is not supported");
      }
      return new Promise((resolve, reject) => {
        const $httpBackend = $injector.get($HTTP_BACKEND);
        $httpBackend("GET", url, null, (status, response) => {
          if (status === 200) {
            resolve(trustedHTMLFromLegacyTemplate($templateCache.put(url, response)));
          } else {
            reject(`GET component template from '${url}' returned '${status}: ${response}'`);
          }
        });
      });
    } else {
      throw new Error(`Directive '${directive.name}' is not a component, it is missing template.`);
    }
  }
  buildController(controllerType, $scope) {
    const locals = {
      "$scope": $scope,
      "$element": this.$element
    };
    const controller = this.$controller(controllerType, locals, null, this.directive.controllerAs);
    this.$element.data?.(controllerKey(this.directive.name), controller);
    return controller;
  }
  compileTemplate(template) {
    if (template === void 0) {
      template = _UpgradeHelper.getTemplate(this.$injector, this.directive, false, this.$element);
    }
    return this.compileHtml(template);
  }
  onDestroy($scope, controllerInstance) {
    if (controllerInstance && isFunction(controllerInstance.$onDestroy)) {
      controllerInstance.$onDestroy();
    }
    $scope.$destroy();
    cleanData(this.element);
  }
  prepareTransclusion() {
    const transclude = this.directive.transclude;
    const contentChildNodes = this.extractChildNodes();
    const attachChildrenFn = (scope, cloneAttachFn) => {
      scope = scope || {
        $destroy: () => void 0
      };
      return cloneAttachFn($template, scope);
    };
    let $template = contentChildNodes;
    if (transclude) {
      const slots = /* @__PURE__ */ Object.create(null);
      if (typeof transclude === "object") {
        $template = [];
        const slotMap = /* @__PURE__ */ Object.create(null);
        const filledSlots = /* @__PURE__ */ Object.create(null);
        Object.keys(transclude).forEach((slotName) => {
          let selector = transclude[slotName];
          const optional = selector.charAt(0) === "?";
          selector = optional ? selector.substring(1) : selector;
          slotMap[selector] = slotName;
          slots[slotName] = null;
          filledSlots[slotName] = optional;
        });
        contentChildNodes.forEach((node) => {
          const slotName = slotMap[directiveNormalize(node.nodeName.toLowerCase())];
          if (slotName) {
            filledSlots[slotName] = true;
            slots[slotName] = slots[slotName] || [];
            slots[slotName].push(node);
          } else {
            $template.push(node);
          }
        });
        Object.keys(filledSlots).forEach((slotName) => {
          if (!filledSlots[slotName]) {
            throw new Error(`Required transclusion slot '${slotName}' on directive: ${this.name}`);
          }
        });
        Object.keys(slots).filter((slotName) => slots[slotName]).forEach((slotName) => {
          const nodes = slots[slotName];
          slots[slotName] = (scope, cloneAttach) => {
            return cloneAttach(nodes, scope);
          };
        });
      }
      attachChildrenFn.$$slots = slots;
      $template.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && !node.nodeValue) {
          node.nodeValue = "‌";
        }
      });
    }
    return attachChildrenFn;
  }
  resolveAndBindRequiredControllers(controllerInstance) {
    const directiveRequire = this.getDirectiveRequire();
    const requiredControllers = this.resolveRequire(directiveRequire);
    if (controllerInstance && this.directive.bindToController && isMap(directiveRequire)) {
      const requiredControllersMap = requiredControllers;
      Object.keys(requiredControllersMap).forEach((key) => {
        controllerInstance[key] = requiredControllersMap[key];
      });
    }
    return requiredControllers;
  }
  compileHtml(html) {
    this.element.innerHTML = html;
    return this.$compile(this.element.childNodes);
  }
  extractChildNodes() {
    const childNodes = [];
    let childNode;
    while (childNode = this.element.firstChild) {
      childNode.remove();
      childNodes.push(childNode);
    }
    return childNodes;
  }
  getDirectiveRequire() {
    const require2 = this.directive.require || this.directive.controller && this.directive.name;
    if (isMap(require2)) {
      Object.entries(require2).forEach(([key, value]) => {
        const match = value.match(REQUIRE_PREFIX_RE);
        const name = value.substring(match[0].length);
        if (!name) {
          require2[key] = match[0] + key;
        }
      });
    }
    return require2;
  }
  resolveRequire(require2) {
    if (!require2) {
      return null;
    } else if (Array.isArray(require2)) {
      return require2.map((req) => this.resolveRequire(req));
    } else if (typeof require2 === "object") {
      const value = {};
      Object.keys(require2).forEach((key) => value[key] = this.resolveRequire(require2[key]));
      return value;
    } else if (typeof require2 === "string") {
      const match = require2.match(REQUIRE_PREFIX_RE);
      const inheritType = match[1] || match[3];
      const name = require2.substring(match[0].length);
      const isOptional = !!match[2];
      const searchParents = !!inheritType;
      const startOnParent = inheritType === "^^";
      const ctrlKey = controllerKey(name);
      const elem = startOnParent ? this.$element.parent() : this.$element;
      const value = searchParents ? elem.inheritedData(ctrlKey) : elem.data(ctrlKey);
      if (!value && !isOptional) {
        throw new Error(`Unable to find required '${require2}' in upgraded directive '${this.name}'.`);
      }
      return value;
    } else {
      throw new Error(`Unrecognized 'require' syntax on upgraded directive '${this.name}': ${require2}`);
    }
  }
};
function getOrCall(property, ...args) {
  return isFunction(property) ? property(...args) : property;
}
function isMap(value) {
  return value && !Array.isArray(value) && typeof value === "object";
}
function notSupported(name, feature) {
  throw new Error(`Upgraded directive '${name}' contains unsupported feature: '${feature}'.`);
}
var upgrade_helper = Object.freeze({
  __proto__: null,
  UpgradeHelper
});

// node_modules/@angular/upgrade/fesm2022/static.mjs
var tempInjectorRef = null;
function setTempInjectorRef(injector2) {
  tempInjectorRef = injector2;
}
function injectorFactory() {
  if (!tempInjectorRef) {
    throw new Error("Trying to get the AngularJS injector before it being set.");
  }
  const injector2 = tempInjectorRef;
  tempInjectorRef = null;
  return injector2;
}
function rootScopeFactory(i) {
  return i.get("$rootScope");
}
function compileFactory(i) {
  return i.get("$compile");
}
function parseFactory(i) {
  return i.get("$parse");
}
var angular1Providers = [
  // We must use exported named functions for the ng2 factories to keep the compiler happy:
  // > Metadata collected contains an error that will be reported at runtime:
  // >   Function calls are not supported.
  // >   Consider replacing the function or lambda with a reference to an exported function
  {
    provide: "$injector",
    useFactory: injectorFactory,
    deps: []
  },
  {
    provide: "$rootScope",
    useFactory: rootScopeFactory,
    deps: ["$injector"]
  },
  {
    provide: "$compile",
    useFactory: compileFactory,
    deps: ["$injector"]
  },
  {
    provide: "$parse",
    useFactory: parseFactory,
    deps: ["$injector"]
  }
];
var NgAdapterInjector = class {
  modInjector;
  constructor(modInjector) {
    this.modInjector = modInjector;
  }
  // When Angular locate a service in the component injector tree, the not found value is set to
  // `NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR`. In such a case we should not walk up to the module
  // injector.
  // AngularJS only supports a single tree and should always check the module injector.
  get(token, notFoundValue) {
    if (notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) {
      return notFoundValue;
    }
    return this.modInjector.get(token, notFoundValue);
  }
};
var moduleUid = 0;
function downgradeModule(moduleOrBootstrapFn) {
  const lazyModuleName = `${UPGRADE_MODULE_NAME}.lazy${++moduleUid}`;
  const lazyModuleRefKey = `${LAZY_MODULE_REF}${lazyModuleName}`;
  const lazyInjectorKey = `${INJECTOR_KEY}${lazyModuleName}`;
  let bootstrapFn;
  if (isNgModuleType(moduleOrBootstrapFn)) {
    bootstrapFn = (extraProviders) => platformBrowser(extraProviders).bootstrapModule(moduleOrBootstrapFn);
  } else if (!isFunction(moduleOrBootstrapFn)) {
    bootstrapFn = (extraProviders) => platformBrowser(extraProviders).bootstrapModuleFactory(moduleOrBootstrapFn);
  } else {
    bootstrapFn = moduleOrBootstrapFn;
  }
  let injector2;
  module_(lazyModuleName, []).constant(
    UPGRADE_APP_TYPE_KEY,
    3
    /* ɵutil.UpgradeAppType.Lite */
  ).factory(INJECTOR_KEY, [lazyInjectorKey, identity]).factory(lazyInjectorKey, () => {
    if (!injector2) {
      throw new Error("Trying to get the Angular injector before bootstrapping the corresponding Angular module.");
    }
    return injector2;
  }).factory(LAZY_MODULE_REF, [lazyModuleRefKey, identity]).factory(lazyModuleRefKey, [$INJECTOR, ($injector) => {
    setTempInjectorRef($injector);
    const result = {
      promise: bootstrapFn(angular1Providers).then((ref) => {
        injector2 = result.injector = new NgAdapterInjector(ref.injector);
        injector2.get($INJECTOR);
        injector2.get(PlatformRef).onDestroy(() => destroyApp($injector));
        return injector2;
      })
    };
    return result;
  }]).config([$INJECTOR, $PROVIDE, ($injector, $provide) => {
    $provide.constant(DOWNGRADED_MODULE_COUNT_KEY, getDowngradedModuleCount($injector) + 1);
  }]);
  return lazyModuleName;
}
function identity(x) {
  return x;
}
var NOT_SUPPORTED = "NOT_SUPPORTED";
var INITIAL_VALUE2 = {
  __UNINITIALIZED__: true
};
var Bindings = class {
  twoWayBoundProperties = [];
  twoWayBoundLastValues = [];
  expressionBoundProperties = [];
  propertyToOutputMap = {};
};
var UpgradeComponent = class _UpgradeComponent {
  helper;
  $element;
  $componentScope;
  directive;
  bindings;
  controllerInstance;
  bindingDestination;
  // We will be instantiating the controller in the `ngOnInit` hook, when the
  // first `ngOnChanges` will have been already triggered. We store the
  // `SimpleChanges` and "play them back" later.
  pendingChanges = null;
  unregisterDoCheckWatcher;
  /**
   * Create a new `UpgradeComponent` instance. You should not normally need to do this.
   * Instead you should derive a new class from this one and call the super constructor
   * from the base class.
   *
   * {@example upgrade/static/ts/full/module.ts region="ng1-hero-wrapper" }
   *
   * * The `name` parameter should be the name of the AngularJS directive.
   * * The `elementRef` and `injector` parameters should be acquired from Angular by dependency
   *   injection into the base class constructor.
   */
  constructor(name, elementRef, injector2) {
    this.helper = new UpgradeHelper(injector2, name, elementRef);
    this.$element = this.helper.$element;
    this.directive = this.helper.directive;
    this.bindings = this.initializeBindings(this.directive, name);
    const $parentScope = injector2.get($SCOPE);
    this.$componentScope = $parentScope.$new(!!this.directive.scope);
    this.initializeOutputs();
  }
  /** @docs-private */
  ngOnInit() {
    const attachChildNodes = this.helper.prepareTransclusion();
    const linkFn = this.helper.compileTemplate();
    const controllerType = this.directive.controller;
    const bindToController = this.directive.bindToController;
    let controllerInstance = controllerType ? this.helper.buildController(controllerType, this.$componentScope) : void 0;
    let bindingDestination;
    if (!bindToController) {
      bindingDestination = this.$componentScope;
    } else if (controllerType && controllerInstance) {
      bindingDestination = controllerInstance;
    } else {
      throw new Error(`Upgraded directive '${this.directive.name}' specifies 'bindToController' but no controller.`);
    }
    this.controllerInstance = controllerInstance;
    this.bindingDestination = bindingDestination;
    this.bindOutputs(bindingDestination);
    const requiredControllers = this.helper.resolveAndBindRequiredControllers(controllerInstance);
    if (this.pendingChanges) {
      this.forwardChanges(this.pendingChanges, bindingDestination);
      this.pendingChanges = null;
    }
    if (this.controllerInstance && isFunction(this.controllerInstance.$onInit)) {
      this.controllerInstance.$onInit();
    }
    if (controllerInstance && isFunction(controllerInstance.$doCheck)) {
      const callDoCheck = () => controllerInstance?.$doCheck?.();
      this.unregisterDoCheckWatcher = this.$componentScope.$parent.$watch(callDoCheck);
      callDoCheck();
    }
    const link = this.directive.link;
    const preLink = typeof link == "object" && link.pre;
    const postLink = typeof link == "object" ? link.post : link;
    const attrs = NOT_SUPPORTED;
    const transcludeFn = NOT_SUPPORTED;
    if (preLink) {
      preLink(this.$componentScope, this.$element, attrs, requiredControllers, transcludeFn);
    }
    linkFn(this.$componentScope, null, {
      parentBoundTranscludeFn: attachChildNodes
    });
    if (postLink) {
      postLink(this.$componentScope, this.$element, attrs, requiredControllers, transcludeFn);
    }
    if (this.controllerInstance && isFunction(this.controllerInstance.$postLink)) {
      this.controllerInstance.$postLink();
    }
  }
  /** @docs-private */
  ngOnChanges(changes) {
    if (!this.bindingDestination) {
      this.pendingChanges = changes;
    } else {
      this.forwardChanges(changes, this.bindingDestination);
    }
  }
  /** @docs-private */
  ngDoCheck() {
    const twoWayBoundProperties = this.bindings.twoWayBoundProperties;
    const twoWayBoundLastValues = this.bindings.twoWayBoundLastValues;
    const propertyToOutputMap = this.bindings.propertyToOutputMap;
    twoWayBoundProperties.forEach((propName, idx) => {
      const newValue = this.bindingDestination?.[propName];
      const oldValue = twoWayBoundLastValues[idx];
      if (!Object.is(newValue, oldValue)) {
        const outputName = propertyToOutputMap[propName];
        const eventEmitter = this[outputName];
        eventEmitter.emit(newValue);
        twoWayBoundLastValues[idx] = newValue;
      }
    });
  }
  /** @docs-private */
  ngOnDestroy() {
    if (isFunction(this.unregisterDoCheckWatcher)) {
      this.unregisterDoCheckWatcher();
    }
    this.helper.onDestroy(this.$componentScope, this.controllerInstance);
  }
  initializeBindings(directive, name) {
    const btcIsObject = typeof directive.bindToController === "object";
    if (btcIsObject && Object.keys(directive.scope).length) {
      throw new Error(`Binding definitions on scope and controller at the same time is not supported.`);
    }
    const context = btcIsObject ? directive.bindToController : directive.scope;
    const bindings = new Bindings();
    if (typeof context == "object") {
      Object.keys(context).forEach((propName) => {
        const definition = context[propName];
        const bindingType = definition.charAt(0);
        switch (bindingType) {
          case "@":
          case "<":
            break;
          case "=":
            bindings.twoWayBoundProperties.push(propName);
            bindings.twoWayBoundLastValues.push(INITIAL_VALUE2);
            bindings.propertyToOutputMap[propName] = propName + "Change";
            break;
          case "&":
            bindings.expressionBoundProperties.push(propName);
            bindings.propertyToOutputMap[propName] = propName;
            break;
          default:
            let json = JSON.stringify(context);
            throw new Error(`Unexpected mapping '${bindingType}' in '${json}' in '${name}' directive.`);
        }
      });
    }
    return bindings;
  }
  initializeOutputs() {
    this.bindings.twoWayBoundProperties.concat(this.bindings.expressionBoundProperties).forEach((propName) => {
      const outputName = this.bindings.propertyToOutputMap[propName];
      this[outputName] = new EventEmitter();
    });
  }
  bindOutputs(bindingDestination) {
    this.bindings.expressionBoundProperties.forEach((propName) => {
      const outputName = this.bindings.propertyToOutputMap[propName];
      const emitter = this[outputName];
      bindingDestination[propName] = (value) => emitter.emit(value);
    });
  }
  forwardChanges(changes, bindingDestination) {
    Object.keys(changes).forEach((propName) => bindingDestination[propName] = changes[propName].currentValue);
    if (isFunction(bindingDestination.$onChanges)) {
      bindingDestination.$onChanges(changes);
    }
  }
  static ɵfac = function UpgradeComponent_Factory(__ngFactoryType__) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UpgradeComponent,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpgradeComponent, [{
    type: Directive
  }], () => [{
    type: void 0
  }, {
    type: ElementRef
  }, {
    type: Injector
  }], null);
})();
var UpgradeModule = class _UpgradeModule {
  ngZone;
  platformRef;
  /**
   * The AngularJS `$injector` for the upgrade application.
   */
  $injector;
  /** The Angular Injector **/
  injector;
  constructor(injector2, ngZone, platformRef) {
    this.ngZone = ngZone;
    this.platformRef = platformRef;
    this.injector = new NgAdapterInjector(injector2);
  }
  /**
   * Bootstrap an AngularJS application from this NgModule
   * @param element the element on which to bootstrap the AngularJS application
   * @param [modules] the AngularJS modules to bootstrap for this application
   * @param [config] optional extra AngularJS bootstrap configuration
   * @return The value returned by
   *     [angular.bootstrap()](https://docs.angularjs.org/api/ng/function/angular.bootstrap).
   */
  bootstrap(element$1, modules = [], config) {
    const INIT_MODULE_NAME = UPGRADE_MODULE_NAME + ".init";
    module_(INIT_MODULE_NAME, []).constant(
      UPGRADE_APP_TYPE_KEY,
      2
      /* ɵutil.UpgradeAppType.Static */
    ).value(INJECTOR_KEY, this.injector).factory(LAZY_MODULE_REF, [INJECTOR_KEY, (injector2) => ({
      injector: injector2
    })]).config([$PROVIDE, $INJECTOR, ($provide, $injector) => {
      if ($injector.has($$TESTABILITY)) {
        $provide.decorator($$TESTABILITY, [$DELEGATE, (testabilityDelegate) => {
          const originalWhenStable = testabilityDelegate.whenStable;
          const injector2 = this.injector;
          const newWhenStable = function(callback) {
            originalWhenStable.call(testabilityDelegate, function() {
              const ng2Testability = injector2.get(Testability);
              if (ng2Testability.isStable()) {
                callback();
              } else {
                ng2Testability.whenStable(newWhenStable.bind(testabilityDelegate, callback));
              }
            });
          };
          testabilityDelegate.whenStable = newWhenStable;
          return testabilityDelegate;
        }]);
      }
      if ($injector.has($INTERVAL)) {
        $provide.decorator($INTERVAL, [$DELEGATE, (intervalDelegate) => {
          let wrappedInterval = (fn, delay, count, invokeApply, ...pass) => {
            return this.ngZone.runOutsideAngular(() => {
              return intervalDelegate((...args) => {
                setTimeout(() => {
                  this.ngZone.run(() => fn(...args));
                });
              }, delay, count, invokeApply, ...pass);
            });
          };
          Object.keys(intervalDelegate).forEach((prop) => wrappedInterval[prop] = intervalDelegate[prop]);
          if (intervalDelegate.hasOwnProperty("flush")) {
            wrappedInterval["flush"] = () => {
              intervalDelegate["flush"]();
              return wrappedInterval;
            };
          }
          return wrappedInterval;
        }]);
      }
    }]).run([$INJECTOR, ($injector) => {
      this.$injector = $injector;
      const $rootScope = $injector.get("$rootScope");
      setTempInjectorRef($injector);
      this.injector.get($INJECTOR);
      element(element$1).data(controllerKey(INJECTOR_KEY), this.injector);
      this.platformRef.onDestroy(() => destroyApp($injector));
      setTimeout(() => {
        const subscription = this.ngZone.onMicrotaskEmpty.subscribe(() => {
          if ($rootScope.$$phase) {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              console.warn("A digest was triggered while one was already in progress. This may mean that something is triggering digests outside the Angular zone.");
            }
            return $rootScope.$evalAsync();
          }
          return $rootScope.$digest();
        });
        $rootScope.$on("$destroy", () => {
          subscription.unsubscribe();
        });
      }, 0);
    }]);
    const upgradeModule = module_(UPGRADE_MODULE_NAME, [INIT_MODULE_NAME].concat(modules));
    const windowAngular = window["angular"];
    windowAngular.resumeBootstrap = void 0;
    const returnValue = this.ngZone.run(() => bootstrap(element$1, [upgradeModule.name], config));
    if (windowAngular.resumeBootstrap) {
      const originalResumeBootstrap = windowAngular.resumeBootstrap;
      const ngZone = this.ngZone;
      windowAngular.resumeBootstrap = function() {
        let args = arguments;
        windowAngular.resumeBootstrap = originalResumeBootstrap;
        return ngZone.run(() => windowAngular.resumeBootstrap.apply(this, args));
      };
    }
    return returnValue;
  }
  static ɵfac = function UpgradeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpgradeModule)(ɵɵinject(Injector), ɵɵinject(NgZone), ɵɵinject(PlatformRef));
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _UpgradeModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [angular1Providers]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpgradeModule, [{
    type: NgModule,
    args: [{
      providers: [angular1Providers]
    }]
  }], () => [{
    type: Injector
  }, {
    type: NgZone
  }, {
    type: PlatformRef
  }], null);
})();
export {
  UpgradeComponent,
  UpgradeModule,
  VERSION,
  downgradeComponent,
  downgradeInjectable,
  downgradeModule,
  getAngularJSGlobal,
  getAngularLib,
  setAngularJSGlobal,
  setAngularLib,
  angular1 as ɵangular1,
  constants as ɵconstants,
  upgrade_helper as ɵupgradeHelper,
  util as ɵutil
};
/*! Bundled license information:

@angular/upgrade/fesm2022/constants-nqBIph3y.mjs:
@angular/upgrade/fesm2022/upgrade_helper-C850j0tg.mjs:
@angular/upgrade/fesm2022/static.mjs:
  (**
   * @license Angular v19.2.17
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=@angular_upgrade_static.js.map
