"use strict";
(self["webpackChunkactivity_points_tracker"] = self["webpackChunkactivity_points_tracker"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  constructor() {
    this.title = 'Activity Points Tracker';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwIENvbXBvbmVudCBTdHlsZXMgKi8gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);



const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)()]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ui_navbar_navbar_component_ts"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_auth_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/login/login.component */ 461)).then(m => m.LoginComponent)
}, {
  path: 'login',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ui_navbar_navbar_component_ts"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_auth_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/login/login.component */ 461)).then(m => m.LoginComponent)
}, {
  path: 'signup',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ui_navbar_navbar_component_ts"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_auth_signup_signup_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/signup/signup.component */ 3807)).then(m => m.SignupComponent)
}, {
  path: 'dashboard/student',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ui_navbar_navbar_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_dashboard_student-dashboard_student-dashboard_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/student-dashboard/student-dashboard.component */ 921)).then(m => m.StudentDashboardComponent)
}, {
  path: 'dashboard/teacher',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ui_navbar_navbar_component_ts"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_dashboard_teacher-dashboard_teacher-dashboard_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/teacher-dashboard/teacher-dashboard.component */ 3065)).then(m => m.TeacherDashboardComponent)
}, {
  path: 'activities',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ui_navbar_navbar_component_ts"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_activities_activity-list_activity-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/activities/activity-list/activity-list.component */ 7514)).then(m => m.ActivityListComponent)
}, {
  path: 'activities/submit',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ui_navbar_navbar_component_ts"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_activities_activity-submit_activity-submit_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/activities/activity-submit/activity-submit.component */ 4786)).then(m => m.ActivitySubmitComponent)
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map