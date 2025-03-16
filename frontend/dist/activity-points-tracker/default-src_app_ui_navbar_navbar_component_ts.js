"use strict";
(self["webpackChunkactivity_points_tracker"] = self["webpackChunkactivity_points_tracker"] || []).push([["default-src_app_ui_navbar_navbar_component_ts"],{

/***/ 8010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = 'http://localhost:5000/api/auth';
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.loadUserFromStorage();
  }
  loadUserFromStorage() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.currentUserSubject.next(JSON.parse(userData));
    }
  }
  register(userData) {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => this.handleAuthentication(response)));
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => this.handleAuthentication(response)));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
  handleAuthentication(response) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    this.currentUserSubject.next(response.user);
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  getCurrentUserRole() {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }
  getAuthToken() {
    return localStorage.getItem('token');
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1529:
/*!***********************************************!*\
  !*** ./src/app/ui/navbar/navbar.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);





const _c0 = a0 => ["/dashboard", a0];
function NavbarComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 8)(2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 8)(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_ng_container_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 8)(2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 8)(5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Submit Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_ng_container_9_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 8)(2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Review Activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 8)(5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_ng_container_9_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 18)(2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 20)(5, "li")(6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Manage Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 8)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 8)(5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavbarComponent_ng_container_9_ng_container_7_Template, 7, 0, "ng-container", 7)(8, NavbarComponent_ng_container_9_ng_container_8_Template, 7, 0, "ng-container", 7)(9, NavbarComponent_ng_container_9_ng_container_9_Template, 11, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8)(11, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_container_9_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.currentUser.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.role === "student");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.role === "teacher" || ctx_r1.currentUser.role === "superadmin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.role === "superadmin");
  }
}
class NavbarComponent {
  constructor(authService) {
    this.authService = authService;
    this.currentUser = null;
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [4, "ngIf"], [1, "nav-item"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-link"], ["href", "javascript:void(0)", 1, "nav-link", 3, "click"], ["routerLink", "/activities", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/activities/submit", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/review", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/reports", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "adminDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "adminDropdown", 1, "dropdown-menu"], ["routerLink", "/admin/users", 1, "dropdown-item"], ["routerLink", "/admin/settings", 1, "dropdown-item"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Activity Points Tracker");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_ng_container_8_Template, 7, 0, "ng-container", 7)(9, NavbarComponent_ng_container_9_Template, 13, 6, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      styles: [".navbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1rem;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.4rem;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.2s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-weight: 500;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-item[_ngcontent-%COMP%]:active {\n  background-color: #e9ecef;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdWkvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLHlCQUFBO0FBREo7QUFJRTtFQUNFLHlCQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgfVxyXG4gIFxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_ui_navbar_navbar_component_ts.js.map