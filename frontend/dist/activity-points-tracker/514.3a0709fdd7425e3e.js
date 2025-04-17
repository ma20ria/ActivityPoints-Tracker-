"use strict";(self.webpackChunkactivity_points_tracker=self.webpackChunkactivity_points_tracker||[]).push([[514],{7514:(A,d,o)=>{o.r(d),o.d(d,{ActivityListComponent:()=>C});var a=o(177),_=o(2183),c=o(4341),v=o(1529),t=o(4438),p=o(8010),u=o(8489);function h(e,r){1&e&&(t.j41(0,"div",8)(1,"div",9)(2,"span",10),t.EFF(3,"Loading..."),t.k0s()(),t.j41(4,"p",11),t.EFF(5,"Loading your activities..."),t.k0s()())}function g(e,r){if(1&e&&(t.j41(0,"option",38),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&e){const i=r.$implicit;t.Y8G("value",i),t.R7$(),t.JRh(t.bMT(2,2,i))}}function m(e,r){1&e&&(t.j41(0,"div",39)(1,"p",16),t.EFF(2,"No activities found."),t.k0s()())}function F(e,r){1&e&&(t.j41(0,"div",39)(1,"p",16),t.EFF(2,"No activities match the selected filters."),t.k0s()())}function b(e,r){if(1&e&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&e){const i=t.XpG().$implicit;t.R7$(),t.JRh(i.feedback)}}function f(e,r){1&e&&(t.j41(0,"span",46),t.EFF(1,"No feedback yet"),t.k0s())}function y(e,r){if(1&e&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.nI1(7,"date"),t.k0s(),t.j41(8,"td")(9,"span",44),t.EFF(10),t.nI1(11,"titlecase"),t.k0s()(),t.j41(12,"td"),t.EFF(13),t.k0s(),t.j41(14,"td"),t.DNE(15,b,2,1,"span",7)(16,f,2,0,"span",45),t.k0s()()),2&e){const i=r.$implicit,s=t.XpG(4);t.R7$(2),t.JRh(i.title),t.R7$(2),t.JRh(i.activityType),t.R7$(2),t.JRh(t.i5U(7,8,i.date,"mediumDate")),t.R7$(3),t.Y8G("ngClass",s.getStatusBadgeClass(i.status)),t.R7$(),t.SpI(" ",t.bMT(11,11,i.status)," "),t.R7$(3),t.JRh(i.pointsAwarded||0),t.R7$(2),t.Y8G("ngIf",i.feedback),t.R7$(),t.Y8G("ngIf",!i.feedback)}}function j(e,r){if(1&e&&(t.j41(0,"div",41)(1,"table",42)(2,"thead")(3,"tr")(4,"th"),t.EFF(5,"Title"),t.k0s(),t.j41(6,"th"),t.EFF(7,"Type"),t.k0s(),t.j41(8,"th"),t.EFF(9,"Date"),t.k0s(),t.j41(10,"th"),t.EFF(11,"Status"),t.k0s(),t.j41(12,"th"),t.EFF(13,"Points"),t.k0s(),t.j41(14,"th"),t.EFF(15,"Feedback"),t.k0s()()(),t.j41(16,"tbody"),t.DNE(17,y,17,13,"tr",43),t.k0s()()()),2&e){const i=t.XpG(3);t.R7$(17),t.Y8G("ngForOf",i.filterActivities())}}function E(e,r){if(1&e&&(t.j41(0,"div"),t.DNE(1,F,3,0,"div",37)(2,j,18,1,"div",40),t.k0s()),2&e){const i=t.XpG(2);t.R7$(),t.Y8G("ngIf",0===i.filterActivities().length),t.R7$(),t.Y8G("ngIf",i.filterActivities().length>0)}}function k(e,r){if(1&e){const i=t.RV6();t.j41(0,"div")(1,"div",1)(2,"div",12)(3,"div",13)(4,"div",14)(5,"h3",15),t.EFF(6),t.k0s(),t.j41(7,"p",16),t.EFF(8,"Total Points"),t.k0s()()()(),t.j41(9,"div",12)(10,"div",13)(11,"div",14)(12,"h3",17),t.EFF(13),t.k0s(),t.j41(14,"p",16),t.EFF(15,"Approved"),t.k0s()()()(),t.j41(16,"div",12)(17,"div",13)(18,"div",14)(19,"h3",18),t.EFF(20),t.k0s(),t.j41(21,"p",16),t.EFF(22,"Pending"),t.k0s()()()(),t.j41(23,"div",19)(24,"div",13)(25,"div",14)(26,"h3",20),t.EFF(27),t.k0s(),t.j41(28,"p",16),t.EFF(29,"Rejected"),t.k0s()()()()(),t.j41(30,"div",21)(31,"div",22)(32,"h5",23),t.EFF(33,"Filters"),t.k0s(),t.j41(34,"div",24)(35,"div",25)(36,"label",26),t.EFF(37,"Status"),t.k0s(),t.j41(38,"div",27)(39,"div",28)(40,"button",29),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.setStatusFilter("all"))}),t.EFF(41," All "),t.k0s(),t.j41(42,"button",29),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.setStatusFilter("approved"))}),t.EFF(43," Approved "),t.k0s(),t.j41(44,"button",29),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.setStatusFilter("pending"))}),t.EFF(45," Pending "),t.k0s(),t.j41(46,"button",29),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.setStatusFilter("rejected"))}),t.EFF(47," Rejected "),t.k0s()()()(),t.j41(48,"div",25)(49,"label",26),t.EFF(50,"Activity Type"),t.k0s(),t.j41(51,"select",30),t.mxI("ngModelChange",function(n){t.eBV(i);const l=t.XpG();return t.DH7(l.typeFilter,n)||(l.typeFilter=n),t.Njj(n)}),t.bIt("change",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.setTypeFilter(n.typeFilter))}),t.j41(52,"option",31),t.EFF(53,"All Types"),t.k0s(),t.DNE(54,g,3,4,"option",32),t.k0s()(),t.j41(55,"div",33)(56,"button",34),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.resetFilters())}),t.EFF(57,"Reset Filters"),t.k0s()()()()(),t.j41(58,"div",35)(59,"div",36)(60,"h5",4),t.EFF(61,"Activity History"),t.k0s()(),t.j41(62,"div",22),t.DNE(63,m,3,0,"div",37)(64,E,3,2,"div",7),t.k0s()()()}if(2&e){const i=t.XpG();t.R7$(6),t.JRh(i.totalPoints),t.R7$(7),t.JRh(i.approvedActivities),t.R7$(7),t.JRh(i.pendingActivities),t.R7$(7),t.JRh(i.rejectedActivities),t.R7$(13),t.AVh("btn-primary","all"===i.statusFilter)("btn-outline-primary","all"!==i.statusFilter),t.R7$(2),t.AVh("btn-success","approved"===i.statusFilter)("btn-outline-success","approved"!==i.statusFilter),t.R7$(2),t.AVh("btn-warning","pending"===i.statusFilter)("btn-outline-warning","pending"!==i.statusFilter),t.R7$(2),t.AVh("btn-danger","rejected"===i.statusFilter)("btn-outline-danger","rejected"!==i.statusFilter),t.R7$(5),t.R50("ngModel",i.typeFilter),t.R7$(3),t.Y8G("ngForOf",i.activityTypes),t.R7$(9),t.Y8G("ngIf",0===i.activities.length),t.R7$(),t.Y8G("ngIf",i.activities.length>0)}}let C=(()=>{class e{constructor(i,s){this.authService=i,this.activityService=s,this.currentUser=null,this.activities=[],this.isLoading=!0,this.totalActivities=0,this.pendingActivities=0,this.approvedActivities=0,this.rejectedActivities=0,this.totalPoints=0,this.statusFilter="all",this.typeFilter="all",this.activityTypes=["sports","mooc","workshops","internships"]}ngOnInit(){this.currentUser=this.authService.getCurrentUser(),this.loadActivities()}loadActivities(){this.isLoading=!0,this.activityService.getMyActivities().subscribe({next:i=>{i&&i.data?(this.activities=i.data,this.calculateStats()):this.activities=[],this.isLoading=!1},error:i=>{console.error("Error loading activities:",i),this.activities=[],this.isLoading=!1}})}calculateStats(){this.totalActivities=this.activities.length,this.pendingActivities=this.activities.filter(i=>"pending"===i.status).length,this.approvedActivities=this.activities.filter(i=>"approved"===i.status).length,this.rejectedActivities=this.activities.filter(i=>"rejected"===i.status).length,this.totalPoints=this.activities.filter(i=>"approved"===i.status).reduce((i,s)=>i+(s.pointsAwarded||0),0)}filterActivities(){return this.activities.filter(i=>!("all"!==this.statusFilter&&i.status!==this.statusFilter||"all"!==this.typeFilter&&i.activityType!==this.typeFilter))}setStatusFilter(i){this.statusFilter=i}setTypeFilter(i){this.typeFilter=i}resetFilters(){this.statusFilter="all",this.typeFilter="all"}getStatusBadgeClass(i){switch(i){case"approved":return"bg-success";case"pending":return"bg-warning";case"rejected":return"bg-danger";default:return"bg-secondary"}}static{this.\u0275fac=function(s){return new(s||e)(t.rXU(p.u),t.rXU(u.T))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-activity-list"]],standalone:!0,features:[t.aNF],decls:11,vars:2,consts:[[1,"container","py-4"],[1,"row","mb-4"],[1,"col-12"],[1,"d-flex","justify-content-between","align-items-center"],[1,"mb-0"],["routerLink","/activities/submit",1,"btn","btn-primary"],["class","text-center py-5",4,"ngIf"],[4,"ngIf"],[1,"text-center","py-5"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"],[1,"mt-2"],[1,"col-md-3","mb-3","mb-md-0"],[1,"card","h-100","border-0","shadow-sm"],[1,"card-body","d-flex","flex-column","align-items-center"],[1,"text-primary","mb-0"],[1,"text-muted","mb-0"],[1,"text-success","mb-0"],[1,"text-warning","mb-0"],[1,"col-md-3"],[1,"text-danger","mb-0"],[1,"card","border-0","shadow-sm","mb-4"],[1,"card-body"],[1,"mb-3"],[1,"row"],[1,"col-md-4","mb-3","mb-md-0"],[1,"form-label"],[1,"d-flex"],["role","group",1,"btn-group"],["type","button",1,"btn",3,"click"],[1,"form-input",3,"ngModelChange","change","ngModel"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-4","d-flex","align-items-end"],[1,"btn","btn-outline-secondary",3,"click"],[1,"card","border-0","shadow-sm"],[1,"card-header","bg-white","border-0"],["class","text-center py-4",4,"ngIf"],[3,"value"],[1,"text-center","py-4"],["class","table-responsive",4,"ngIf"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"badge",3,"ngClass"],["class","text-muted",4,"ngIf"],[1,"text-muted"]],template:function(s,n){1&s&&(t.nrm(0,"app-navbar"),t.j41(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),t.EFF(6,"My Activities"),t.k0s(),t.j41(7,"a",5),t.EFF(8,"Submit New Activity"),t.k0s()()()(),t.DNE(9,h,6,0,"div",6)(10,k,65,24,"div",7),t.k0s()),2&s&&(t.R7$(9),t.Y8G("ngIf",n.isLoading),t.R7$(),t.Y8G("ngIf",!n.isLoading))},dependencies:[a.MD,a.YU,a.Sq,a.bT,a.PV,a.vh,_.Wk,c.YN,c.xH,c.y7,c.wz,c.BC,c.vS,v._],styles:[".shadow-sm[_ngcontent-%COMP%]{box-shadow:0 .125rem .25rem #00000013!important}.card[_ngcontent-%COMP%]{transition:transform .2s ease-in-out}.card[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}h3[_ngcontent-%COMP%]{font-size:2rem;font-weight:600}.text-muted[_ngcontent-%COMP%]{font-size:.9rem}.badge[_ngcontent-%COMP%]{padding:.5em .75em;font-weight:500}.table[_ngcontent-%COMP%]{font-size:.95rem}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600;color:#495057}.card-header[_ngcontent-%COMP%]{padding:1rem 1.25rem}.card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600}.form-input[_ngcontent-%COMP%]{width:100%;padding:.75rem 1rem;border:1px solid #ced4da;border-radius:.375rem;font-size:1rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#80bdff;box-shadow:0 0 0 .2rem #007bff40}.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border:1px solid #ced4da}.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:last-child){border-right:none}.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}"]})}}return e})()}}]);