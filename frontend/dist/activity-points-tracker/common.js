"use strict";
(self["webpackChunkactivity_points_tracker"] = self["webpackChunkactivity_points_tracker"] || []).push([["common"],{

/***/ 2633:
/*!***************************************************!*\
  !*** ./src/app/core/services/activity.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityService: () => (/* binding */ ActivityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ActivityService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:5000/api/activities';
  }
  submitActivity(activityData) {
    return this.http.post(this.apiUrl, activityData);
  }
  getMyActivities() {
    return this.http.get(this.apiUrl);
  }
  getPendingActivities() {
    return this.http.get(`${this.apiUrl}/pending`);
  }
  reviewActivity(id, reviewData) {
    return this.http.put(`${this.apiUrl}/${id}/review`, reviewData);
  }
  getAllActivities() {
    return this.http.get(`${this.apiUrl}/all`);
  }
  generateReport(filters) {
    return this.http.get(`${this.apiUrl}/report`, {
      params: filters
    });
  }
  static {
    this.ɵfac = function ActivityService_Factory(t) {
      return new (t || ActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ActivityService,
      factory: ActivityService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map