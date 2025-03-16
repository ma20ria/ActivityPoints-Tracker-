"use strict";
(self["webpackChunkactivity_points_tracker"] = self["webpackChunkactivity_points_tracker"] || []).push([["src_app_features_activities_activity-list_activity-list_component_ts"],{

/***/ 7514:
/*!******************************************************************************!*\
  !*** ./src/app/features/activities/activity-list/activity-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityListComponent: () => (/* binding */ ActivityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/navbar/navbar.component */ 1529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/activity.service */ 2633);









function ActivityListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loading your activities...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivityListComponent_div_10_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r3);
  }
}
function ActivityListComponent_div_10_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39)(1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No activities found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivityListComponent_div_10_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39)(1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No activities match the selected filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivityListComponent_div_10_div_64_div_2_tr_17_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activity_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](activity_r4.feedback);
  }
}
function ActivityListComponent_div_10_div_64_div_2_tr_17_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No feedback yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ActivityListComponent_div_10_div_64_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td")(9, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ActivityListComponent_div_10_div_64_div_2_tr_17_span_15_Template, 2, 1, "span", 7)(16, ActivityListComponent_div_10_div_64_div_2_tr_17_span_16_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const activity_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](activity_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](activity_r4.activityType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 8, activity_r4.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.getStatusBadgeClass(activity_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 11, activity_r4.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](activity_r4.pointsAwarded || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", activity_r4.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !activity_r4.feedback);
  }
}
function ActivityListComponent_div_10_div_64_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41)(1, "table", 42)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ActivityListComponent_div_10_div_64_div_2_tr_17_Template, 17, 13, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filterActivities());
  }
}
function ActivityListComponent_div_10_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ActivityListComponent_div_10_div_64_div_1_Template, 3, 0, "div", 37)(2, ActivityListComponent_div_10_div_64_div_2_Template, 18, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.filterActivities().length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.filterActivities().length > 0);
  }
}
function ActivityListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 12)(3, "div", 13)(4, "div", 14)(5, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Total Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 12)(10, "div", 13)(11, "div", 14)(12, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 19)(24, "div", 13)(25, "div", 14)(26, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21)(31, "div", 22)(32, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 24)(35, "div", 25)(36, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 27)(39, "div", 28)(40, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityListComponent_div_10_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setStatusFilter("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityListComponent_div_10_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setStatusFilter("approved"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Approved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityListComponent_div_10_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setStatusFilter("pending"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityListComponent_div_10_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setStatusFilter("rejected"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 25)(49, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Activity Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ActivityListComponent_div_10_Template_select_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.typeFilter, $event) || (ctx_r1.typeFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ActivityListComponent_div_10_Template_select_change_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setTypeFilter(ctx_r1.typeFilter));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "All Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, ActivityListComponent_div_10_option_54_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 33)(56, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityListComponent_div_10_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Reset Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 35)(59, "div", 36)(60, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Activity History");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ActivityListComponent_div_10_div_63_Template, 3, 0, "div", 37)(64, ActivityListComponent_div_10_div_64_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.totalPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.approvedActivities);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.pendingActivities);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.rejectedActivities);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("btn-primary", ctx_r1.statusFilter === "all")("btn-outline-primary", ctx_r1.statusFilter !== "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("btn-success", ctx_r1.statusFilter === "approved")("btn-outline-success", ctx_r1.statusFilter !== "approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("btn-warning", ctx_r1.statusFilter === "pending")("btn-outline-warning", ctx_r1.statusFilter !== "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("btn-danger", ctx_r1.statusFilter === "rejected")("btn-outline-danger", ctx_r1.statusFilter !== "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.typeFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.activityTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.activities.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.activities.length > 0);
  }
}
class ActivityListComponent {
  constructor(authService, activityService) {
    this.authService = authService;
    this.activityService = activityService;
    this.currentUser = null;
    this.activities = [];
    this.isLoading = true;
    // Activity stats
    this.totalActivities = 0;
    this.pendingActivities = 0;
    this.approvedActivities = 0;
    this.rejectedActivities = 0;
    this.totalPoints = 0;
    // Filters
    this.statusFilter = 'all';
    this.typeFilter = 'all';
    this.activityTypes = ['Sports', 'Cultural', 'Technical', 'Professional Development', 'Community Service', 'Other'];
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.loadActivities();
  }
  loadActivities() {
    this.isLoading = true;
    this.activityService.getMyActivities().subscribe({
      next: response => {
        if (response && response.data) {
          this.activities = response.data;
          this.calculateStats();
        } else {
          this.activities = [];
        }
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading activities:', error);
        this.activities = [];
        this.isLoading = false;
      }
    });
  }
  calculateStats() {
    this.totalActivities = this.activities.length;
    this.pendingActivities = this.activities.filter(a => a.status === 'pending').length;
    this.approvedActivities = this.activities.filter(a => a.status === 'approved').length;
    this.rejectedActivities = this.activities.filter(a => a.status === 'rejected').length;
    this.totalPoints = this.activities.filter(a => a.status === 'approved').reduce((sum, activity) => sum + activity.pointsAwarded, 0);
  }
  filterActivities() {
    return this.activities.filter(activity => {
      // Filter by status
      if (this.statusFilter !== 'all' && activity.status !== this.statusFilter) {
        return false;
      }
      // Filter by type
      if (this.typeFilter !== 'all' && activity.activityType !== this.typeFilter) {
        return false;
      }
      return true;
    });
  }
  setStatusFilter(status) {
    this.statusFilter = status;
  }
  setTypeFilter(type) {
    this.typeFilter = type;
  }
  resetFilters() {
    this.statusFilter = 'all';
    this.typeFilter = 'all';
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case 'approved':
        return 'bg-success';
      case 'pending':
        return 'bg-warning';
      case 'rejected':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
  static {
    this.ɵfac = function ActivityListComponent_Factory(t) {
      return new (t || ActivityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__.ActivityService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ActivityListComponent,
      selectors: [["app-activity-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 2,
      consts: [[1, "container", "py-4"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["routerLink", "/activities/submit", 1, "btn", "btn-primary"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "col-md-3", "mb-3", "mb-md-0"], [1, "card", "h-100", "border-0", "shadow-sm"], [1, "card-body", "d-flex", "flex-column", "align-items-center"], [1, "text-primary", "mb-0"], [1, "text-muted", "mb-0"], [1, "text-success", "mb-0"], [1, "text-warning", "mb-0"], [1, "col-md-3"], [1, "text-danger", "mb-0"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-body"], [1, "mb-3"], [1, "row"], [1, "col-md-4", "mb-3", "mb-md-0"], [1, "form-label"], [1, "d-flex"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", 3, "click"], [1, "form-input", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4", "d-flex", "align-items-end"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "border-0"], ["class", "text-center py-4", 4, "ngIf"], [3, "value"], [1, "text-center", "py-4"], ["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"]],
      template: function ActivityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "My Activities");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Submit New Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ActivityListComponent_div_9_Template, 6, 0, "div", 6)(10, ActivityListComponent_div_10_Template, 65, 24, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
      styles: [".shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.5em 0.75em;\n  font-weight: 500;\n}\n\n.table[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n}\n.card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  font-size: 1rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: none;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.375rem;\n  border-bottom-left-radius: 0.375rem;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWN0aXZpdGllcy9hY3Rpdml0eS1saXN0L2FjdGl2aXR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4REFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7QUFDRjtBQUNFO0VBQ0UsMkJBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0UscUJBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUFGSjs7QUFPRTtFQUNFLHlCQUFBO0FBSko7QUFNSTtFQUNFLGtCQUFBO0FBSk47QUFPSTtFQUNFLGdDQUFBO0VBQ0EsbUNBQUE7QUFMTjtBQVFJO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtBQU5OIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYWRvdy1zbSB7XHJcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICB9XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBcclxuICB0aCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcclxuICBcclxuICBoNSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgLmJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgXHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zNzVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_activities_activity-list_activity-list_component_ts.js.map