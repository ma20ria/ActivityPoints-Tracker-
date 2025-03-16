"use strict";
(self["webpackChunkactivity_points_tracker"] = self["webpackChunkactivity_points_tracker"] || []).push([["src_app_features_dashboard_teacher-dashboard_teacher-dashboard_component_ts"],{

/***/ 3065:
/*!*************************************************************************************!*\
  !*** ./src/app/features/dashboard/teacher-dashboard/teacher-dashboard.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeacherDashboardComponent: () => (/* binding */ TeacherDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/navbar/navbar.component */ 1529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/activity.service */ 2633);








function TeacherDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loading your dashboard...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TeacherDashboardComponent_div_8_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No pending certificate requests.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TeacherDashboardComponent_div_8_div_29_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 38)(3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td")(15, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TeacherDashboardComponent_div_8_div_29_tr_15_Template_button_click_15_listener() {
      const activity_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.selectActivity(activity_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const activity_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.isUserObject(activity_r2.student) ? activity_r2.student.name : "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.isUserObject(activity_r2.student) ? activity_r2.student.rollNumber : "", " | ", ctx_r2.isUserObject(activity_r2.student) ? activity_r2.student.class : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](activity_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](activity_r2.activityType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 6, activity_r2.date, "mediumDate"));
  }
}
function TeacherDashboardComponent_div_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "table", 36)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TeacherDashboardComponent_div_8_div_29_tr_15_Template, 17, 9, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.pendingActivities);
  }
}
function TeacherDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 21)(3, "div", 22)(4, "div", 23)(5, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Pending Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 21)(10, "div", 22)(11, "div", 23)(12, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Approved Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27)(17, "div", 22)(18, "div", 23)(19, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Rejected Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 29)(24, "div", 30)(25, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Pending Certificate Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, TeacherDashboardComponent_div_8_div_28_Template, 3, 0, "div", 32)(29, TeacherDashboardComponent_div_8_div_29_Template, 16, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.totalPendingRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.totalApprovedRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.totalRejectedRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.pendingActivities.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.pendingActivities.length > 0);
  }
}
function TeacherDashboardComponent_div_17_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Points to Award");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TeacherDashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 42)(3, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Student Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 44)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 44)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Roll Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 44)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Class:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p", 44)(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Department:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 4)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Semester:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 42)(26, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Certificate Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 44)(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 44)(33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 44)(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p", 4)(42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Submitted On:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 45)(47, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 45)(52, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Certificate Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 46)(55, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Certificate preview would be displayed here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "form", 48)(58, "div", 49)(59, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Decision");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 51)(62, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, TeacherDashboardComponent_div_17_div_70_Template, 4, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 49)(72, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Feedback (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "textarea", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isUserObject(ctx_r2.selectedActivity.student) ? ctx_r2.selectedActivity.student.name : "Unknown", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isUserObject(ctx_r2.selectedActivity.student) ? ctx_r2.selectedActivity.student.rollNumber : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isUserObject(ctx_r2.selectedActivity.student) ? ctx_r2.selectedActivity.student.class : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isUserObject(ctx_r2.selectedActivity.student) ? ctx_r2.selectedActivity.student.department : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isUserObject(ctx_r2.selectedActivity.student) ? ctx_r2.selectedActivity.student.semester : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedActivity.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedActivity.activityType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](40, 12, ctx_r2.selectedActivity.date, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](45, 15, ctx_r2.selectedActivity.createdAt, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.selectedActivity.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.reviewForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r2.reviewForm.get("status")) == null ? null : tmp_12_0.value) === "approved");
  }
}
class TeacherDashboardComponent {
  constructor(authService, activityService, fb) {
    this.authService = authService;
    this.activityService = activityService;
    this.fb = fb;
    this.currentUser = null;
    this.pendingActivities = [];
    this.isLoading = true;
    this.selectedActivity = null;
    // Activity stats
    this.totalPendingRequests = 0;
    this.totalApprovedRequests = 0;
    this.totalRejectedRequests = 0;
    this.reviewForm = this.fb.group({
      status: ['approved'],
      pointsAwarded: [0],
      feedback: ['']
    });
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.loadPendingActivities();
  }
  // Helper method to check if student is a User object
  isUserObject(student) {
    return typeof student === 'object';
  }
  loadPendingActivities() {
    this.isLoading = true;
    this.activityService.getPendingActivities().subscribe({
      next: response => {
        if (response && response.data) {
          this.pendingActivities = response.data;
          // Update stats from the response
          if (response.stats) {
            this.totalPendingRequests = response.stats.pending || 0;
            this.totalApprovedRequests = response.stats.approved || 0;
            this.totalRejectedRequests = response.stats.rejected || 0;
          } else {
            this.calculateStats();
          }
        } else {
          this.pendingActivities = [];
          this.calculateStats();
        }
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading pending activities:', error);
        this.isLoading = false;
        this.pendingActivities = [];
        this.calculateStats();
      }
    });
  }
  calculateStats() {
    // Calculate stats based on actual data
    this.totalPendingRequests = this.pendingActivities.length;
    // In a real application, you would fetch these counts from the server
    // For now, we'll set some placeholder values
    this.totalApprovedRequests = 5;
    this.totalRejectedRequests = 2;
  }
  selectActivity(activity) {
    this.selectedActivity = activity;
    // Reset form
    this.reviewForm.patchValue({
      status: 'approved',
      pointsAwarded: 0,
      feedback: ''
    });
  }
  submitReview() {
    if (!this.selectedActivity || !this.reviewForm.valid) {
      return;
    }
    const reviewData = this.reviewForm.value;
    this.activityService.reviewActivity(this.selectedActivity._id, reviewData).subscribe({
      next: response => {
        // Update the activity in the list
        const index = this.pendingActivities.findIndex(a => a._id === this.selectedActivity?._id);
        if (index !== -1) {
          this.pendingActivities.splice(index, 1);
        }
        // Update stats
        this.calculateStats();
        // Close the modal
        this.selectedActivity = null;
      },
      error: error => {
        console.error('Error submitting review:', error);
        // You could add error handling here, such as displaying an error message
      }
    });
  }
  static {
    this.ɵfac = function TeacherDashboardComponent_Factory(t) {
      return new (t || TeacherDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__.ActivityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TeacherDashboardComponent,
      selectors: [["app-teacher-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 23,
      vars: 3,
      consts: [[1, "container", "py-4"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["id", "reviewModal", "tabindex", "-1", "aria-labelledby", "reviewModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "reviewModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "col-md-4", "mb-3", "mb-md-0"], [1, "card", "h-100", "border-0", "shadow-sm"], [1, "card-body", "d-flex", "flex-column", "align-items-center"], [1, "text-warning", "mb-0"], [1, "text-muted", "mb-0"], [1, "text-success", "mb-0"], [1, "col-md-4"], [1, "text-danger", "mb-0"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "border-0"], [1, "card-body"], ["class", "text-center py-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "text-center", "py-4"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column"], [1, "fw-medium"], [1, "text-muted"], ["data-bs-toggle", "modal", "data-bs-target", "#reviewModal", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "col-md-6"], [1, "mb-2"], [1, "mb-1"], [1, "mb-4"], [1, "certificate-preview"], [1, "text-muted", "text-center"], [3, "formGroup"], [1, "mb-3"], [1, "form-label"], [1, "d-flex"], [1, "form-check", "me-3"], ["type", "radio", "formControlName", "status", "id", "statusApprove", "value", "approved", 1, "form-check-input"], ["for", "statusApprove", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "formControlName", "status", "id", "statusReject", "value", "rejected", 1, "form-check-input"], ["for", "statusReject", 1, "form-check-label"], ["class", "mb-3", 4, "ngIf"], ["for", "feedback", 1, "form-label"], ["id", "feedback", "formControlName", "feedback", "rows", "3", "placeholder", "Provide feedback to the student", 1, "form-input"], ["for", "pointsAwarded", 1, "form-label"], ["type", "number", "id", "pointsAwarded", "formControlName", "pointsAwarded", "min", "0", "max", "100", 1, "form-input"]],
      template: function TeacherDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Teacher Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TeacherDashboardComponent_div_7_Template, 6, 0, "div", 5)(8, TeacherDashboardComponent_div_8_Template, 30, 5, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Review Certificate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, TeacherDashboardComponent_div_17_Template, 75, 18, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14)(19, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TeacherDashboardComponent_Template_button_click_21_listener() {
            return ctx.submitReview();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Submit Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedActivity);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
      styles: [".shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.table[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n}\n.card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.fw-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  font-size: 1rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.certificate-preview[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 2rem;\n  background-color: #f8f9fa;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3RlYWNoZXItZGFzaGJvYXJkL3RlYWNoZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOERBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0FBQ0Y7QUFDRTtFQUNFLDJCQUFBO0FBQ0o7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0FBREo7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnREFBQTtBQUZKOztBQU1BO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi5zaGFkb3ctc20ge1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgfVxyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgXHJcbiAgdGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XHJcbiAgXHJcbiAgaDUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbi5mdy1tZWRpdW0ge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcclxuICB9XHJcbn1cclxuXHJcbi5jZXJ0aWZpY2F0ZS1wcmV2aWV3IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_teacher-dashboard_teacher-dashboard_component_ts.js.map