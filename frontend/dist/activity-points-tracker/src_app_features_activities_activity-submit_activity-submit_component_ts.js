"use strict";
(self["webpackChunkactivity_points_tracker"] = self["webpackChunkactivity_points_tracker"] || []).push([["src_app_features_activities_activity-submit_activity-submit_component_ts"],{

/***/ 4786:
/*!**********************************************************************************!*\
  !*** ./src/app/features/activities/activity-submit/activity-submit.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivitySubmitComponent: () => (/* binding */ ActivitySubmitComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/navbar/navbar.component */ 1529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/activity.service */ 2633);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);











const _c0 = a0 => ({
  "is-invalid": a0
});
function ActivitySubmitComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
  }
}
function ActivitySubmitComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function ActivitySubmitComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Drag & drop your certificate here or click to browse");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ActivitySubmitComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedFile.name);
  }
}
function ActivitySubmitComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Extracting data from certificate...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivitySubmitComponent_div_29_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivitySubmitComponent_div_29_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Event organizer is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivitySubmitComponent_div_29_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r2);
  }
}
function ActivitySubmitComponent_div_29_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Activity type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivitySubmitComponent_div_29_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivitySubmitComponent_div_29_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", level_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Level ", level_r3, "");
  }
}
function ActivitySubmitComponent_div_29_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Level is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivitySubmitComponent_div_29_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivitySubmitComponent_div_29_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submitting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ActivitySubmitComponent_div_29_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ActivitySubmitComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Certificate Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "The following details were extracted from your certificate. Please verify and complete any missing information.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 30)(6, "div", 31)(7, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Certificate Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ActivitySubmitComponent_div_29_div_10_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 31)(12, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Event Organizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ActivitySubmitComponent_div_29_div_15_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 30)(17, "div", 31)(18, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Activity Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 38)(21, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Select Activity Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ActivitySubmitComponent_div_29_option_23_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ActivitySubmitComponent_div_29_div_24_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 31)(26, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Certificate Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ActivitySubmitComponent_div_29_div_29_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 30)(31, "div", 31)(32, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Activity Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "select", 44)(35, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Select Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ActivitySubmitComponent_div_29_option_37_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ActivitySubmitComponent_div_29_div_38_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 12)(40, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ActivitySubmitComponent_div_29_div_43_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 47)(45, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ActivitySubmitComponent_div_29_span_46_Template, 2, 0, "span", 20)(47, ActivitySubmitComponent_div_29_span_47_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ((tmp_1_0 = ctx_r0.activityForm.get("title")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.activityForm.get("title")) == null ? null : tmp_1_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r0.activityForm.get("title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.activityForm.get("title")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, ((tmp_3_0 = ctx_r0.activityForm.get("eventOrganizer")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.activityForm.get("eventOrganizer")) == null ? null : tmp_3_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r0.activityForm.get("eventOrganizer")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.activityForm.get("eventOrganizer")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c0, ((tmp_5_0 = ctx_r0.activityForm.get("activityType")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.activityForm.get("activityType")) == null ? null : tmp_5_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.activityTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r0.activityForm.get("activityType")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.activityForm.get("activityType")) == null ? null : tmp_7_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c0, ((tmp_8_0 = ctx_r0.activityForm.get("date")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.activityForm.get("date")) == null ? null : tmp_8_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r0.activityForm.get("date")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.activityForm.get("date")) == null ? null : tmp_9_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c0, ((tmp_10_0 = ctx_r0.activityForm.get("level")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.activityForm.get("level")) == null ? null : tmp_10_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.levels);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r0.activityForm.get("level")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.activityForm.get("level")) == null ? null : tmp_12_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c0, ((tmp_13_0 = ctx_r0.activityForm.get("description")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r0.activityForm.get("description")) == null ? null : tmp_13_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx_r0.activityForm.get("description")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.activityForm.get("description")) == null ? null : tmp_14_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.activityForm.invalid || ctx_r0.isSubmitting || !ctx_r0.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isSubmitting);
  }
}
class ActivitySubmitComponent {
  constructor(fb, authService, activityService, router, http) {
    this.fb = fb;
    this.authService = authService;
    this.activityService = activityService;
    this.router = router;
    this.http = http;
    this.currentUser = null;
    this.isLoading = false;
    this.isSubmitting = false;
    this.errorMessage = '';
    this.successMessage = '';
    this.selectedFile = null;
    this.extractedData = null;
    this.activityTypes = ['Sports', 'Cultural', 'Technical', 'Professional Development', 'Community Service', 'Other'];
    this.levels = [1, 2, 3, 4, 5];
    this.activityForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      activityType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      eventOrganizer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      certificateFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.activityForm.get('certificateFile')?.setValue(file.name);
      // Extract data from PDF
      this.extractDataFromPDF(file);
    }
  }
  extractDataFromPDF(file) {
    this.isLoading = true;
    // Create FormData
    const formData = new FormData();
    formData.append('file', file);
    // In a real application, you would send this to a backend API for PDF text extraction
    // For demo purposes, we'll simulate extraction with a timeout
    setTimeout(() => {
      // Simulated extracted data
      this.extractedData = {
        title: 'Certificate of Achievement',
        eventOrganizer: 'Tech Conference 2023',
        date: '2023-06-15',
        description: 'Participated in the annual tech conference and completed all workshops.'
      };
      // Populate form with extracted data
      this.activityForm.patchValue({
        title: this.extractedData.title,
        eventOrganizer: this.extractedData.eventOrganizer,
        date: this.extractedData.date,
        description: this.extractedData.description
      });
      this.isLoading = false;
    }, 2000);
  }
  onSubmit() {
    if (this.activityForm.invalid || !this.selectedFile) {
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';
    // Create FormData
    const formData = new FormData();
    formData.append('certificate', this.selectedFile);
    // Add other form values
    Object.keys(this.activityForm.value).forEach(key => {
      if (key !== 'certificateFile') {
        formData.append(key, this.activityForm.value[key]);
      }
    });
    // Submit the activity using the ActivityService
    this.activityService.submitActivity(formData).subscribe({
      next: response => {
        this.isSubmitting = false;
        this.successMessage = response.message || 'Activity submitted successfully! Your certificate will be reviewed by your teacher.';
        // Reset form after successful submission
        this.activityForm.reset();
        this.selectedFile = null;
        // Navigate to dashboard after a delay
        setTimeout(() => {
          this.router.navigate(['/activities']);
        }, 2000);
      },
      error: error => {
        this.isSubmitting = false;
        this.errorMessage = error.error.message || 'Failed to submit activity. Please try again.';
      }
    });
  }
  static {
    this.ɵfac = function ActivitySubmitComponent_Factory(t) {
      return new (t || ActivitySubmitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__.ActivityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ActivitySubmitComponent,
      selectors: [["app-activity-submit"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 30,
      vars: 7,
      consts: [[1, "container", "py-4"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["routerLink", "/dashboard/student", 1, "btn", "btn-outline-primary"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-4"], ["class", "alert alert-success mb-4", 4, "ngIf"], ["class", "alert alert-danger mb-4", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "mb-4"], [1, "mb-3"], [1, "certificate-upload-container"], [1, "certificate-upload-box"], ["type", "file", "id", "certificateFile", "accept", ".pdf,.jpg,.jpeg,.png", 1, "file-input", 3, "change"], ["for", "certificateFile", 1, "file-label"], [1, "upload-icon"], [1, "bi", "bi-cloud-arrow-up"], [1, "upload-text"], [4, "ngIf"], [1, "text-muted"], ["class", "text-center py-3 mb-4", 4, "ngIf"], [1, "alert", "alert-success", "mb-4"], [1, "alert", "alert-danger", "mb-4"], [1, "text-center", "py-3", "mb-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "text-muted", "mb-4"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-input", 3, "ngClass"], ["class", "text-danger mt-1", 4, "ngIf"], ["for", "eventOrganizer", 1, "form-label"], ["type", "text", "id", "eventOrganizer", "formControlName", "eventOrganizer", 1, "form-input", 3, "ngClass"], ["for", "activityType", 1, "form-label"], ["id", "activityType", "formControlName", "activityType", 1, "form-input", 3, "ngClass"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "date", 1, "form-label"], ["type", "date", "id", "date", "formControlName", "date", 1, "form-input", 3, "ngClass"], ["for", "level", 1, "form-label"], ["id", "level", "formControlName", "level", 1, "form-input", 3, "ngClass"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "4", 1, "form-input", 3, "ngClass"], [1, "d-grid", "gap-2", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-danger", "mt-1"], [3, "value"]],
      template: function ActivitySubmitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Submit Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Back to Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ActivitySubmitComponent_div_11_Template, 2, 1, "div", 8)(12, ActivitySubmitComponent_div_12_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ActivitySubmitComponent_Template_form_ngSubmit_13_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Upload Certificate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ActivitySubmitComponent_Template_input_change_19_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 16)(21, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ActivitySubmitComponent_span_24_Template, 2, 0, "span", 20)(25, ActivitySubmitComponent_span_25_Template, 2, 1, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "small", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Supported formats: PDF, JPG, JPEG, PNG (Max size: 5MB)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ActivitySubmitComponent_div_28_Template, 6, 0, "div", 22)(29, ActivitySubmitComponent_div_29_Template, 48, 29, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.activityForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
      styles: [".shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  font-size: 1rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.certificate-upload-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\n.certificate-upload-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 150px;\n  border: 2px dashed #ced4da;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  transition: border-color 0.3s ease;\n}\n.certificate-upload-box[_ngcontent-%COMP%]:hover {\n  border-color: #80bdff;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 2;\n}\n\n.file-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: 2rem;\n  cursor: pointer;\n}\n\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #6c757d;\n  margin-bottom: 1rem;\n}\n\n.upload-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n}\n\ntextarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWN0aXZpdGllcy9hY3Rpdml0eS1zdWJtaXQvYWN0aXZpdHktc3VibWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOERBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7QUFBSjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBREY7QUFHRTtFQUNFLHFCQUFBO0FBREo7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hhZG93LXNtIHtcclxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xyXG4gIH1cclxuICBcclxuICAmLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmNlcnRpZmljYXRlLXVwbG9hZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jZXJ0aWZpY2F0ZS11cGxvYWQtYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsZS1pbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZmlsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXBsb2FkLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi51cGxvYWQtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWlucHV0IHtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_activities_activity-submit_activity-submit_component_ts.js.map