"use strict";
(self["webpackChunkactivity_points_tracker"] = self["webpackChunkactivity_points_tracker"] || []).push([["src_app_features_auth_login_login_component_ts"],{

/***/ 461:
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/navbar/navbar.component */ 1529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);









const _c0 = a0 => ({
  "is-invalid": a0
});
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_div_14_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_14_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_14_small_1_Template, 2, 0, "small", 16)(2, LoginComponent_div_14_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function LoginComponent_div_19_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_19_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function LoginComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logging in...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.errorMessage = '';
    this.isLoading = false;
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.authService.login(this.loginForm.value).subscribe({
      next: response => {
        this.isLoading = false;
        this.router.navigate(['/dashboard', response.user.role]);
      },
      error: error => {
        this.isLoading = false;
        this.errorMessage = error.error.message || 'Login failed. Please try again.';
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 13,
      consts: [[1, "container", "py-5"], [1, "row", "justify-content-center"], [1, "col-md-6", "col-lg-5"], [1, "card", "shadow"], [1, "card-body", "p-5"], [1, "text-center", "mb-4"], ["class", "alert alert-danger mb-4", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-input", 3, "ngClass"], ["class", "text-danger mt-1", 4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-input", 3, "ngClass"], [1, "d-grid", "gap-2", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "text-center", "mt-4"], ["routerLink", "/signup", 1, "text-primary"], [1, "alert", "alert-danger", "mb-4"], [1, "text-danger", "mt-1"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 3, 2, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LoginComponent_span_22_Template, 2, 0, "span", 16)(23, LoginComponent_span_23_Template, 2, 0, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
      styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 5px;\n  border: 1px solid #ced4da;\n  width: 100%;\n  font-size: 1rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtBQUFKOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usd0RBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgJi5pcy1pbnZhbGlkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_auth_login_login_component_ts.js.map