(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Gitlab Trading';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repositories/repositories.component */ "./src/app/repositories/repositories.component.ts");
/* harmony import */ var _repositories_add_repository_add_repository_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repositories/add-repository/add-repository.component */ "./src/app/repositories/add-repository/add-repository.component.ts");
/* harmony import */ var _repositories_edit_repository_edit_repository_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repositories/edit-repository/edit-repository.component */ "./src/app/repositories/edit-repository/edit-repository.component.ts");
/* harmony import */ var _auctions_auctions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auctions/auctions.component */ "./src/app/auctions/auctions.component.ts");
/* harmony import */ var _auctions_project_auction_project_auction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auctions/project-auction/project-auction.component */ "./src/app/auctions/project-auction/project-auction.component.ts");
/* harmony import */ var _login_callback_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/callback/callback.component */ "./src/app/login/callback/callback.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-show/user-show.component */ "./src/app/user-show/user-show.component.ts");
/* harmony import */ var _table_contributions_contributions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./table/contributions/contributions.component */ "./src/app/table/contributions/contributions.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_6__["RepositoriesComponent"],
                _repositories_add_repository_add_repository_component__WEBPACK_IMPORTED_MODULE_7__["AddRepositoryComponent"],
                _repositories_edit_repository_edit_repository_component__WEBPACK_IMPORTED_MODULE_8__["EditRepositoryComponent"],
                _auctions_auctions_component__WEBPACK_IMPORTED_MODULE_9__["AuctionsComponent"],
                _auctions_project_auction_project_auction_component__WEBPACK_IMPORTED_MODULE_10__["ProjectAuctionComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _login_callback_callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
                _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_19__["UserShowComponent"],
                _table_contributions_contributions_component__WEBPACK_IMPORTED_MODULE_20__["ContributionsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_23__["LogoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auctions/auctions.component.html":
/*!**************************************************!*\
  !*** ./src/app/auctions/auctions.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid page-main-content\">\n  <div class=\"row align-items-stretch\">\n    <app-sidebar></app-sidebar>\n    <div class=\"col-12 col-md-8 col-lg-10\">\n      <h1 class=\"title\">\n        Auctions\n      </h1>\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover table-striped table-dark\">\n          <thead>\n            <tr>\n              <th>Projects</th>\n              <th>Project total tokens</th>\n              <th>Your tokens</th>\n              <th class=\"actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr colspan=\"6\" *ngIf=\"projects === null\">\n              <app-loading [visible]=\"projects === null\"></app-loading>\n            </tr>\n\n            <tr *ngFor=\"let project of projects\">\n              <td>\n                {{ project[0].name }}\n              </td>\n              <td>\n                {{ (project[0].project_value || 0) |number: \"1.2-2\"}} <i class=\"fas fa-fw fa-coins\"></i>\n              </td>\n              <td>\n                {{ (project.my_contribution || 0) |number: \"1.2-2\"}} <i class=\"fas fa-fw fa-coins\"></i>\n              </td>\n              <td class=\"actions\">\n                <a [routerLink]=\"['/auctions/project', project[0].id]\" class=\"btn btn-sm btn-warning\">\n                  <i class=\"fas fa-fw fa-eye\"></i> View\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n      <!-- <nav aria-label=\"Projects navigation\">\n        <ul class=\"pagination justify-content-center\">\n          <li class=\"page-item disabled\">\n            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">\n                <i class=\"fas fa-fw fa-caret-left\"></i>\n              </span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n          <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">1</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">\n                <i class=\"fas fa-fw fa-caret-right\"></i>\n              </span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n        </ul>\n      </nav> -->\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/auctions/auctions.component.scss":
/*!**************************************************!*\
  !*** ./src/app/auctions/auctions.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auctions/auctions.component.ts":
/*!************************************************!*\
  !*** ./src/app/auctions/auctions.component.ts ***!
  \************************************************/
/*! exports provided: AuctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionsComponent", function() { return AuctionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api/git-project-api.service */ "./src/app/services/api/git-project-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuctionsComponent = /** @class */ (function () {
    function AuctionsComponent(projectsApi) {
        this.projectsApi = projectsApi;
        this.title = 'GitHub Trading';
        this.projects = null;
    }
    AuctionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsApi.getAll().subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    AuctionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auctions',
            template: __webpack_require__(/*! ./auctions.component.html */ "./src/app/auctions/auctions.component.html"),
            styles: [__webpack_require__(/*! ./auctions.component.scss */ "./src/app/auctions/auctions.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_1__["GitProjectApiService"]])
    ], AuctionsComponent);
    return AuctionsComponent;
}());



/***/ }),

/***/ "./src/app/auctions/project-auction/project-auction.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/auctions/project-auction/project-auction.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid page-main-content\">\n  <div class=\"row align-items-stretch\">\n    <app-sidebar></app-sidebar>\n    <div class=\"col-12 col-md-8 col-lg-10\">\n      <h1 class=\"title\">\n        {{ currentProject?.name|titlecase }}'s project auction\n      </h1>\n\n      <ul class=\"nav nav-tabs\" id=\"auction-tabs\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [class.active]=\"selectedTab == 1\" id=\"contribution-hstory-tab\" data-toggle=\"tab\"\n            data-target=\"#contribution-history\" role=\"tab\" aria-controls=\"contribution-history\" aria-selected=\"true\"\n            target=\"_self\" (click)=\"selectedTab = 1;\">Contribution\n            history</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [class.active]=\"selectedTab == 2\" id=\"selling-offers-tab\" data-toggle=\"tab\" data-target=\"#selling-offers\"\n            role=\"tab\" aria-controls=\"selling-offers\" aria-selected=\"false\" target=\"_self\" (click)=\"selectedTab = 2;\">Selling\n            offers</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [class.active]=\"selectedTab == 3\" id=\"buying-offers-tab\" data-toggle=\"tab\" data-target=\"#buying-offers\"\n            role=\"tab\" aria-controls=\"buying-offers\" aria-selected=\"false\" target=\"_self\" (click)=\"selectedTab = 3;\">Buying\n            offers</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\" id=\"auction-tab-content\">\n        <div class=\"tab-pane fade\" [class.show]=\"selectedTab == 1\" [class.active]=\"selectedTab == 1\" id=\"contribution-history\"\n          role=\"tabpanel\" aria-labelledby=\"contribution-history-tab\">\n          <h3>Contributions</h3>\n          <div class=\"table-responsive\">\n            <app-table-contributions [git-project]=\"currentProject\"></app-table-contributions>\n          </div>\n          <nav aria-label=\"Projects navigation\">\n            <ul class=\"pagination justify-content-center\">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">\n                    <i class=\"fas fa-fw fa-caret-left\"></i>\n                  </span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">1</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                  <span aria-hidden=\"true\">\n                    <i class=\"fas fa-fw fa-caret-right\"></i>\n                  </span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n        <div class=\"tab-pane fade\" [class.show]=\"selectedTab == 2\" [class.active]=\"selectedTab == 2\" id=\"selling-offers\"\n          role=\"tabpanel\" aria-labelledby=\"selling-offers-tab\">\n          <h3>Selling offers</h3>\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover table-striped table-dark\">\n              <thead>\n                <tr>\n                  <th>User</th>\n                  <th>Token offered</th>\n                  <th>Date</th>\n                  <th>Price (sdg)/token</th>\n                  <th>Expire</th>\n                  <th class=\"actions\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngIf=\"currentSales === null\">\n                  <app-loading></app-loading>\n                </tr>\n                <tr *ngFor=\"let sale of currentSales\">\n                  <td>\n                    <a href=\"https://github.com/{{ sale.seller?.username }}\">\n                      @{{ sale.seller?.username }}\n                    </a>\n                  </td>\n                  <td>\n                    {{ sale.remaining_tokens }} / {{ sale.number_of_tokens }} <i class=\"fas fa-fw fa-coins\"></i>\n                  </td>\n                  <td>\n                    {{ sale.offer_starts_utc_date }}\n                  </td>\n                  <td>\n                    <span class=\"badge badge-warning\">\n                      <i class=\"fas fa-fw fa-money-bill\"></i>\n                      {{ sale.sell_price_per_token | number : \"1.2-4\" }} SDG\n                    </span>\n                  </td>\n                  <td>\n                    {{ sale.offer_expires_at_utc_date }}\n                  </td>\n                  <td class=\"actions\">\n                    <a class=\"btn btn-dark\" data-toggle=\"modal\" (click)=\"buyTokens(buyModalForm, sale)\" aria-controls=\"buy-modal\">\n                      <i class=\"fas fa-fw fa-shopping-cart\"></i> Buy\n                    </a>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th colspan=\"5\" class=\"text-right\">\n\n                  </th>\n                  <th>\n                    <a class=\"btn btn-dark\" data-toggle=\"modal\" data-target=\"#new-offer-modal\" aria-controls=\"new-offer-modal\">\n                      <i class=\"fas fa-fw fa-gavel\"></i> New offer\n                    </a>\n                  </th>\n                </tr>\n              </tfoot>\n            </table>\n\n          </div>\n          <nav aria-label=\"Projects navigation\">\n            <ul class=\"pagination justify-content-center\">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">\n                    <i class=\"fas fa-fw fa-caret-left\"></i>\n                  </span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">1</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                  <span aria-hidden=\"true\">\n                    <i class=\"fas fa-fw fa-caret-right\"></i>\n                  </span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n        <div class=\"tab-pane fade\" [class.show]=\"selectedTab == 3\" [class.active]=\"selectedTab == 3\" id=\"buying-offers\"\n          role=\"tabpanel\" aria-labelledby=\"buying-offers-tab\">\n          <h3>Buying offers</h3>\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover table-striped table-dark\">\n              <thead>\n                <tr>\n                  <th>User</th>\n                  <th>Number of tokens to buy</th>\n                  <th>Proposed amount / token</th>\n                  <th>Date</th>\n                  <th>Expire</th>\n                  <th class=\"actions\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngIf=\"currentPurchaseOffers === null\">\n                  <app-loading></app-loading>\n                </tr>\n                <tr *ngFor=\"let offer of currentPurchaseOffers\">\n                  <td>\n                    <a href=\"https://github.com/{{ offer.purchaser?.username }}\">\n                      @{{ offer.purchaser?.username }}\n                    </a>\n                  </td>\n                  <td>\n                    {{ offer.number_of_tokens }} <i class=\"fas fa-fw fa-coins\"></i>\n                  </td>\n                  <td>\n                    {{ offer.purchase_price_per_token }} <i class=\"fas fa-fw fa-coins\"></i>\n                  </td>\n                  <td>\n                    {{ offer.offer_starts_utc_date }}\n                  </td>\n                  <td>\n                    {{ offer.offer_expires_at_utc_date }}\n                  </td>\n                  <td class=\"actions\">\n                    <a class=\"btn btn-dark\" data-toggle=\"modal\" data-target=\"#new-offer-modal\" aria-controls=\"new-offer-modal\">\n                      <i class=\"fas fa-fw fa-coins\"></i> Sell to this price\n                    </a>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th colspan=\"4\" class=\"text-right\">\n\n                  </th>\n                  <th>\n                    <a class=\"btn btn-dark\" data-toggle=\"modal\" data-target=\"#new-purchase-offer-modal\" aria-controls=\"new-purchase-offer-modal\">\n                      <i class=\"fas fa-fw fa-gavel\"></i> New purchase offer\n                    </a>\n                  </th>\n                </tr>\n              </tfoot>\n            </table>\n\n          </div>\n          <nav aria-label=\"Projects navigation\">\n            <ul class=\"pagination justify-content-center\">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">\n                    <i class=\"fas fa-fw fa-caret-left\"></i>\n                  </span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">1</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                  <span aria-hidden=\"true\">\n                    <i class=\"fas fa-fw fa-caret-right\"></i>\n                  </span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n\n      <!-- Buy modal -->\n      <ng-template #buyModalForm>\n        <div class=\"\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"buy-modal-title\">Buy tokens</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeBuyModalForm()\">\n                <span aria-hidden=\"true\"><i class=\"fas fa-fw fa-times\"></i></span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form (ngSubmit)=\"submitBuyingForm()\" [formGroup]=\"buyForm\" [ngClass]=\"{'submitted': buyFormSumitted}\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-7\" for=\"number-of-tokens\">\n                    Number of tokens\n                  </label>\n                  <div class=\"col-sm-5\">\n                    <div class=\"input-group\">\n                      <input type=\"number\" class=\"form-control\" id=\"number-of-tokens\" placeholder=\"Tokens\" min=\"1\" step=\"1\"\n                        formControlName=\"nb_tokens\" (input)=\"onNbOfTokensToBuyChange($event.target.value, totalPrice)\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fas fa-fw fa-coins\"></i>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"invalid-feedback\" *ngIf=\"buyForm.get('nb_tokens').errors\">\n                      {{ buyForm.get('nb_tokens').errors.nbTokens }}\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-7\" for=\"value-of-tokens\">\n                    Total\n                  </label>\n                  <div class=\"col-sm-5\">\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"value-of-tokens\" placeholder=\"Total\" #totalPrice\n                        disabled>\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fas fa-fw fa-money-bill\"></i>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12 text-right\">\n                    <button type=\"submit\" class=\"btn\"><i class=\"fas fa-fw fa-shopping-cart\"></i> Buy</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n\n      <!-- New offer modal -->\n      <div class=\"modal fade\" id=\"new-offer-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"new-offer-modal-title\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"new-offer-modal-title\">Sell tokens</h5>\n              <button #sellModalCloseButton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\"><i class=\"fas fa-fw fa-times\"></i></span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"sellForm\" (ngSubmit)=\"submitSellForm()\" [ngClass]=\"{'submitted': sellFormSubmitted}\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-7\" for=\"number-of-tokens-to-sell\">\n                    Number of tokens to sell\n                  </label>\n                  <div class=\"col-sm-5\">\n                    <div class=\"input-group\">\n                      <input type=\"number\" class=\"form-control\" id=\"number-of-tokens-to-sell\" placeholder=\"Tokens\" min=\"1\"\n                        step=\"1\" formControlName=\"number_of_tokens\" [ngClass]=\"{ 'is-invalid': sellFormSubmitted && sellForm.get('number_of_tokens').errors }\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fas fa-fw fa-coins\"></i>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"invalid-feedback\" *ngIf=\"sellForm.get('number_of_tokens').errors\">\n                      Please provide the number of tokens to sell.\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-7\" for=\"number-of-tokens-to-sell\">\n                    Price per token\n                  </label>\n                  <div class=\"col-sm-5\">\n                    <div class=\"input-group\">\n                      <input type=\"number\" class=\"form-control\" id=\"price-per-token\" placeholder=\"Tokens\" min=\"1\" step=\"1\"\n                        formControlName=\"sell_price_per_token\" [ngClass]=\"{ 'is-invalid': sellFormSubmitted && sellForm.get('sell_price_per_token').errors }\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fas fa-fw fa-money-bill\"></i>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"invalid-feedback\" *ngIf=\"sellForm.get('sell_price_per_token').errors\">\n                      Please provide the price per token.\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12 text-right\">\n                    <button type=\"submit\" class=\"btn\"><i class=\"fas fa-fw fa-gavel\"></i> Sell</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- New purchase offer-->\n      <div class=\"modal fade\" id=\"new-purchase-offer-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"new-purchase-offer-modal-title\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"new-purchase-offer-modal-title\">Purchase offer</h5>\n              <button #purchaseOfferModalCloseButton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\"><i class=\"fas fa-fw fa-times\"></i></span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"purchaseOfferForm\" (ngSubmit)=\"submitPurchaseOfferForm()\" [ngClass]=\"{'submitted': purchaseOfferFormSubmitted}\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-7\" for=\"number-of-tokens-to-purchase\">\n                    Number of tokens to purchase\n                  </label>\n                  <div class=\"col-sm-5\">\n                    <div class=\"input-group\">\n                      <input type=\"number\" class=\"form-control\" id=\"number-of-tokens-to-purchase\" placeholder=\"Tokens\"\n                        min=\"1\" step=\"1\" formControlName=\"number_of_tokens\" [ngClass]=\"{ 'is-invalid': purchaseOfferFormSubmitted && purchaseOfferForm.get('number_of_tokens').errors }\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fas fa-fw fa-coins\"></i>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"invalid-feedback\" *ngIf=\"purchaseOfferForm.get('number_of_tokens').errors\">\n                      Please provide the number of tokens to purchase.\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-7\" for=\"number-of-tokens-to-purchase-offer\">\n                    Price per token\n                  </label>\n                  <div class=\"col-sm-5\">\n                    <div class=\"input-group\">\n                      <input type=\"number\" class=\"form-control\" id=\"price-per-token\" placeholder=\"Tokens\" min=\"1\" step=\"1\"\n                        formControlName=\"purchase_price_per_token\" [ngClass]=\"{ 'is-invalid': purchaseOfferFormSubmitted && purchaseOfferForm.get('purchase_price_per_token').errors }\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fas fa-fw fa-money-bill\"></i>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"invalid-feedback\" *ngIf=\"purchaseOfferForm.get('purchase_price_per_token').errors\">\n                      Please provide the price per token.\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12 text-right\">\n                    <button type=\"submit\" class=\"btn\"><i class=\"fas fa-fw fa-gavel\"></i> Create purchase offer</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/auctions/project-auction/project-auction.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/auctions/project-auction/project-auction.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auctions/project-auction/project-auction.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auctions/project-auction/project-auction.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectAuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAuctionComponent", function() { return ProjectAuctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_api_sell_offer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api-sell-offer.service */ "./src/app/services/api/api-sell-offer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_api_api_purchase_offer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api/api-purchase-offer.service */ "./src/app/services/api/api-purchase-offer.service.ts");
/* harmony import */ var src_app_services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api/git-project-api.service */ "./src/app/services/api/git-project-api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProjectAuctionComponent = /** @class */ (function () {
    function ProjectAuctionComponent(fb, route, sellOfferApi, purchaseOfferApi, toastr, router, projecApi, sellApi, modalService, authService) {
        this.fb = fb;
        this.route = route;
        this.sellOfferApi = sellOfferApi;
        this.purchaseOfferApi = purchaseOfferApi;
        this.toastr = toastr;
        this.router = router;
        this.projecApi = projecApi;
        this.sellApi = sellApi;
        this.modalService = modalService;
        this.authService = authService;
        this.title = 'GitHub Trading';
        this.selectedTab = 1;
        this.sellFormSubmitted = false;
        this.purchaseOfferFormSubmitted = false;
        this.buyFormSumitted = false;
        this.currentSales = null;
        this.currentPurchaseOffers = null;
    }
    ProjectAuctionComponent.prototype.generateSellingForm = function () {
        this.sellFormSubmitted = false;
        this.sellForm = this.fb.group({
            number_of_tokens: [1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            sell_price_per_token: [1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            project: [this.projectId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
    };
    ProjectAuctionComponent.prototype.generateBuyForm = function (sellForm) {
        this.buyFormSumitted = false;
        this.buyForm = this.fb.group({
            nb_tokens: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            sell_offer: [sellForm, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
    };
    ProjectAuctionComponent.prototype.generatePurchaseOfferForm = function () {
        this.purchaseOfferFormSubmitted = false;
        this.purchaseOfferForm = this.fb.group({
            number_of_tokens: [1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            purchase_price_per_token: [1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            project: [this.projectId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
    };
    ProjectAuctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectId = this.route.snapshot.params["id"];
        this.projecApi.get(this.projectId).toPromise().then(function (project) {
            _this.currentProject = project;
        }).catch(function (err) {
            console.log(err);
        });
        this.generateSellingForm();
        this.generatePurchaseOfferForm();
        this.refreshSellOffer();
        this.refreshPurchasesOffer();
    };
    ProjectAuctionComponent.prototype.refreshSellOffer = function () {
        var _this = this;
        this.sellOfferApi.getAll(this.projectId).toPromise().then(function (sales) {
            _this.currentSales = sales;
            console.log("Selling offers", sales);
        });
    };
    ProjectAuctionComponent.prototype.buyTokens = function (modalForm, sellOffer) {
        console.log("Offer selected", sellOffer, modalForm);
        this.modalService.open(modalForm);
        this.currentSellFormBuying = sellOffer;
        this.generateBuyForm(sellOffer.id);
    };
    ProjectAuctionComponent.prototype.closeBuyModalForm = function () {
        this.modalService.dismissAll();
    };
    ProjectAuctionComponent.prototype.refreshPurchasesOffer = function () {
        var _this = this;
        this.purchaseOfferApi.getAll(this.projectId).toPromise().then(function (purchasesOffer) {
            _this.currentPurchaseOffers = purchasesOffer;
            console.log("Purchases offers", purchasesOffer);
        });
    };
    ProjectAuctionComponent.prototype.onNbOfTokensToBuyChange = function (nbOfTokens, totalPriceField) {
        var totalPrice = nbOfTokens * parseFloat(this.currentSellFormBuying.sell_price_per_token);
        totalPriceField.value = totalPrice.toFixed(2);
    };
    ProjectAuctionComponent.prototype.submitSellForm = function () {
        var _this = this;
        var formValue = this.sellForm.value;
        this.sellFormSubmitted = true;
        if (this.sellForm.valid) {
            this.sellOfferApi.create(formValue).toPromise().then(function (data) {
                _this.sellModalCloseButton.nativeElement.click();
                _this.generateSellingForm();
                _this.refreshSellOffer();
                console.log("success", data);
                _this.toastr.success("The data have been saved successfully", "Data saved");
            }).catch(function (error) {
                console.log(error);
                _this.toastr.error("An error occurred while saving your data", error);
            });
        }
    };
    ProjectAuctionComponent.prototype.submitBuyingForm = function () {
        var _this = this;
        var formValue = this.buyForm.value;
        this.buyFormSumitted = true;
        if (this.buyForm.valid) {
            this.sellApi.buy(formValue).toPromise().then(function (data) {
                _this.authService.refreshUser();
                _this.sellModalCloseButton.nativeElement.click();
                _this.closeBuyModalForm();
                _this.refreshSellOffer();
                _this.toastr.success("Your transaction is complete", "Transaction complete");
            }).catch(function (error) {
                console.log(error);
                _this.toastr.error("An error occurred while saving your data", error);
                console.log("ERROR", error.error.errors.children);
                if (error.error && error.error.errors && error.error.errors.children && error.error.errors.children.nbTokens.errors) {
                    console.log("there is an error");
                    _this.buyForm.get("nb_tokens").setErrors({
                        "nbTokens": error.error.errors.children.nbTokens.errors.join("<br>")
                    });
                }
            });
        }
    };
    ProjectAuctionComponent.prototype.submitPurchaseOfferForm = function () {
        var _this = this;
        var formValue = this.purchaseOfferForm.value;
        this.purchaseOfferFormSubmitted = true;
        if (this.purchaseOfferForm.valid) {
            this.purchaseOfferApi.create(formValue).toPromise().then(function (data) {
                _this.purchaseOfferModalCloseButton.nativeElement.click();
                _this.generatePurchaseOfferForm();
                _this.refreshPurchasesOffer();
                _this.toastr.success("The data have been saved successfully", "Data saved");
            }).catch(function (error) {
                console.log(error);
                _this.toastr.error("An error occurred while saving your data", error);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sellModalCloseButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProjectAuctionComponent.prototype, "sellModalCloseButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('purchaseOfferModalCloseButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProjectAuctionComponent.prototype, "purchaseOfferModalCloseButton", void 0);
    ProjectAuctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-auction',
            template: __webpack_require__(/*! ./project-auction.component.html */ "./src/app/auctions/project-auction/project-auction.component.html"),
            styles: [__webpack_require__(/*! ./project-auction.component.scss */ "./src/app/auctions/project-auction/project-auction.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_api_sell_offer_service__WEBPACK_IMPORTED_MODULE_3__["ApiSellOfferService"],
            src_app_services_api_api_purchase_offer_service__WEBPACK_IMPORTED_MODULE_5__["ApiPurchaseOfferService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_6__["GitProjectApiService"], src_app_services_api_api_sell_offer_service__WEBPACK_IMPORTED_MODULE_3__["ApiSellOfferService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ProjectAuctionComponent);
    return ProjectAuctionComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_api_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api/api-user.service */ "./src/app/services/api/api-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    /**
     *
     * @param router
     * @param userService
     */
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    /**
     *
     * @param next
     * @param state
     */
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var role = next.data.expectedRole;
        return this.userService.getMe()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user !== null && user !== false && _this.hasTheRole(user, role)) {
                return true;
            }
            _this.router.navigate(['login']);
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.router.navigate(['login']);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(false);
        }));
    };
    /**
     * If no role add then its simple user, or else check if user has this role in his ROLE array from API response
     * @param role
     */
    AuthGuard.prototype.hasTheRole = function (user, role) {
        if (!user) {
            return false;
        }
        if (role) {
            return user.roles.includes(role);
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_api_api_user_service__WEBPACK_IMPORTED_MODULE_4__["ApiUserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/user.service */ "./src/app/services/api/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router, http, userService) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.authenticationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshUser();
        this.environment = JSON.parse(localStorage.getItem("APP_SETTINGS"));
    }
    AuthService.prototype.login = function () {
        var url = this.environment.githubAuth.URL + "?scope=" + this.environment.githubAuth.SCOPE;
        url += "&state=" + this.generateRandomState() + "&response_type=code&approval_prompt=auto";
        url += "&redirect_uri=" + this.environment.githubAuth.REDIRECT_URI + "&client_id=" + this.environment.githubAuth.CLIENT_ID;
        window.location.href = url;
    };
    AuthService.prototype.verifyCodeAndState = function (code, state) {
        var url = this.environment.baseAPIUrl + 'connect/github/check';
        return this.http.get(url + "?code=" + code + "&state=" + state);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.environment.localStorageJWT);
        localStorage.removeItem("CURRENT_USER");
        this.authenticationEvent.emit(null);
    };
    AuthService.prototype.logInUser = function (response) {
        localStorage.setItem(this.environment.localStorageJWT, response.token);
        this.refreshUser();
    };
    AuthService.prototype.refreshUser = function () {
        var _this = this;
        console.log("refreshing user");
        this.userService.getMe().toPromise().then(function (user) {
            _this.authenticationEvent.emit(user);
            if (user) {
                localStorage.setItem("CURRENT_USER", JSON.stringify(user));
            }
            else {
                _this.logout();
            }
        }).catch(function (err) {
            console.log("authentication error");
        });
    };
    AuthService.prototype.generateRandomState = function () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"page-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur, consequuntur deserunt\n          dignissimos doloribus et impedit nesciunt odio perspiciatis praesentium quo temporibus veniam veritatis. Eius\n          quo, reprehenderit! Aliquid, in, voluptate.\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <p class=\"text-right footer-links\">\n          <a href=\"#\">Terms of use</a>\n          <a href=\"#\">Privacy policy</a>\n        </p>\n        <p class=\"text-right\">\n          &copy; 2018 All rights reserved.\n        </p>\n      </div>\n    </div>\n  </div>\n</footer> -->"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"container-fluid page-header\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <nav class=\"navbar navbar-expand-lg navbar-dark\">\n        <a class=\"navbar-brand\" href=\"#\">\n          SDG Market\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#header-navigation\"\n          aria-controls=\"header-navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"header-navigation\">\n          <ul class=\"navbar-nav ml-auto\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/logout']\" *ngIf=\"currentUser\">Log out [{{ currentUser.username }}]</a>\n              <a class=\"nav-link\" [routerLink]=\"['/login']\" *ngIf=\"!currentUser\">Login</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"currentUser\">\n              <a href=\"javascript:;\" class=\"nav-link\">\n                <span class=\"badge badge-warning\">\n                  <i class=\"fas fa-fw fa-money-bill\"></i>\n                  {{ (currentUser.sold_sdg || 0) | number : \"1.2-3\" }} SDG\n                </span>\n              </a>\n\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = localStorage.getItem("CURRENT_USER") ? JSON.parse(localStorage.getItem("CURRENT_USER")) : null;
        this.authService.authenticationEvent.subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"visible\">\n  Loading content...\n</p>"

/***/ }),

/***/ "./src/app/loading/loading.component.scss":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.visible = false;
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("visible"),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "visible", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/callback/callback.component.html":
/*!********************************************************!*\
  !*** ./src/app/login/callback/callback.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container page-main-content\">\n  <div class=\"row align-items-center\">\n    <div class=\"col col-md-8 offset-md-2\">\n\n      <div class=\"jumbotron\" *ngIf=\"!error\">\n\n        <h1 class=\"title\">Login with your Github account</h1>\n        <p>Please wait while we are negociating with your Github account</p>\n\n      </div>\n\n      <div class=\"jumbotron\" *ngIf=\"error\">\n        <h1 class=\"title\">Login with your Github account</h1>\n        <div class=\"alert alert-danger\">\n          <strong>Error during authentication!</strong>\n          {{ error }}\n        </div>\n        <button class=\"btn btn-block btn-default\" (click)=\"connectGitHub()\"><i class=\"fab fa-github\"></i> Click to\n          try again!</button>\n      </div>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/login/callback/callback.component.scss":
/*!********************************************************!*\
  !*** ./src/app/login/callback/callback.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/callback/callback.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/callback/callback.component.ts ***!
  \******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        var code = this.route.snapshot.queryParamMap.get('code');
        var state = this.route.snapshot.queryParamMap.get('state');
        this.auth.verifyCodeAndState(code, state)
            .subscribe(function (response) {
            _this.auth.logInUser(response);
            _this.router.navigate(['/auctions']);
        }, function (error) {
            // TODO: Better error handling
            if (error.error && error.error.error_description) {
                self.error = error.error.error_description;
            }
            if (error.error && error.error.message) {
                self.error = error.error.message;
            }
        });
    };
    CallbackComponent.prototype.connectGitHub = function () {
        this.auth.login();
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/login/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.scss */ "./src/app/login/callback/callback.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container page-main-content\">\n  <div class=\"row align-items-center\">\n    <div class=\"col col-md-8 offset-md-2\">\n      <div class=\"jumbotron\">\n        <h1 class=\"title\">Login with GitHub</h1>\n        <button class=\"btn btn-block btn-default\" (click)=\"connectGitHub()\"><i class=\"fab fa-github\"></i> Click to\n          connect with GitHub!</button>\n      </div>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .page-main-content {\n  justify-content: space-around; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.title = 'GitHub Trading';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.connectGitHub = function () {
        this.auth.login();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Loging out..."

/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.router.navigate(["/auctions"]);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/repositories/add-repository/add-repository.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/repositories/add-repository/add-repository.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid page-main-content\">\n  <div class=\"row align-items-stretch\">\n    <app-sidebar></app-sidebar>\n    <div class=\"col-12 col-md-8 col-lg-10\">\n      <h1 class=\"title\">\n        Add repository\n      </h1>\n      <app-loading [visible]=\"project === null\"></app-loading>\n      <form *ngIf=\"project\" [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" [ngClass]=\"{'submitted': submitted}\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"git-name\">\n                Git name\n              </label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"git-name\" placeholder=\"Repository name\" formControlName=\"name\"\n                  [ngClass]=\"{ 'is-invalid': submitted && form.get('name').errors }\">\n                <div class=\"error invalid-feedback\" *ngIf=\"form.get('name').errors\">\n                  Git name is required\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"git-address\">\n                Git address\n              </label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"git-address\" placeholder=\"Repository Git URL\"\n                  formControlName=\"git_address\" [ngClass]=\"{ 'is-invalid': submitted && form.get('git_address').errors }\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.get('git_address').errors\">\n                  Please provide a valid Git URL\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"git-address\">\n                Project address\n              </label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"project-address\" placeholder=\"Project URL\" formControlName=\"project_address\"\n                  [ngClass]=\"{ 'is-invalid': submitted && form.get('project_address').errors }\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.get('project_address').errors\">\n                  Please provide a valid project URL (could be the same as the git url)\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group row\">\n              <div class=\"col\">\n                <a class=\"btn btn-block btn-outline-light\" href=\"{{ project.git_address }}\">\n                  <i class=\"fab fa-fw fa-github\"></i> Go to GitHub\n                </a>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"status-active\">\n                Status\n              </label>\n              <div class=\"col-sm-10\">\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"status-active\" name=\"active\" class=\"custom-control-input\" [value]=\"true\"\n                    formControlName=\"active\">\n                  <label class=\"custom-control-label\" for=\"status-active\">Active</label>\n                </div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"status-inactive\" name=\"active\" class=\"custom-control-input\" [value]=\"false\"\n                    formControlName=\"active\">\n                  <label class=\"custom-control-label\" for=\"status-inactive\">Inactive</label>\n                  <div class=\"invalid-feedback\" *ngIf=\"form.get('active').errors\">\n                    Please define if the project is active or not\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-10 offset-sm-2\">\n                <a [routerLink]=\"['/repositories']\" class=\"btn btn-light\">\n                  <i class=\"fas fa-fw fa-undo-alt\"></i>\n                  Return\n                </a>\n                <button type=\"submit\" class=\"btn btn-success\">\n                  <i class=\"fas fa-fw fa-save\"></i>\n                  Save\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/repositories/add-repository/add-repository.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/repositories/add-repository/add-repository.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/repositories/add-repository/add-repository.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/repositories/add-repository/add-repository.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddRepositoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRepositoryComponent", function() { return AddRepositoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/git-project-api.service */ "./src/app/services/api/git-project-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AddRepositoryComponent = /** @class */ (function () {
    function AddRepositoryComponent(projectsApi, route, fb, toastr, router) {
        this.projectsApi = projectsApi;
        this.route = route;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.title = 'GitHub Trading';
        this.loading = false;
        this.submitted = false;
    }
    AddRepositoryComponent.prototype.ngOnInit = function () {
        var urlRegexp = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        this.project = {
            active: true,
            git_address: null,
            project_address: null,
            name: null
        };
        this.form = this.fb.group({
            "name": [this.project.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            "git_address": [this.project.git_address, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(urlRegexp)
                ]],
            "project_address": [this.project.project_address, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(urlRegexp)
                ]],
            "active": [this.project.active, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]]
        });
    };
    AddRepositoryComponent.prototype.submitForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formValue;
            var _this = this;
            return __generator(this, function (_a) {
                formValue = this.form.value;
                this.submitted = true;
                console.log(this.form.valid, this.form.errors);
                if (this.form.valid) {
                    this.projectsApi.create(formValue).toPromise().then(function (data) {
                        console.log("success", data);
                        _this.toastr.success("The data have been saved successfully", "Data saved");
                        _this.router.navigate(["/repositories"]);
                    }).catch(function (error) {
                        console.log(error);
                        _this.toastr.error("An error occurred while saving your data", error);
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AddRepositoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-repository',
            template: __webpack_require__(/*! ./add-repository.component.html */ "./src/app/repositories/add-repository/add-repository.component.html"),
            styles: [__webpack_require__(/*! ./add-repository.component.scss */ "./src/app/repositories/add-repository/add-repository.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_1__["GitProjectApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddRepositoryComponent);
    return AddRepositoryComponent;
}());



/***/ }),

/***/ "./src/app/repositories/edit-repository/edit-repository.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/repositories/edit-repository/edit-repository.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid page-main-content\">\n  <div class=\"row align-items-stretch\">\n    <app-sidebar></app-sidebar>\n    <div class=\"col-12 col-md-8 col-lg-10\">\n      <h1 class=\"title\">\n        Edit repository\n      </h1>\n      <app-loading [visible]=\"project === null\"></app-loading>\n      <form *ngIf=\"project\" [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" [ngClass]=\"{'submitted': submitted}\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"git-name\">\n                Git name\n              </label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"git-name\" placeholder=\"Repository name\" formControlName=\"name\"\n                  [ngClass]=\"{ 'is-invalid': submitted && form.get('name').errors }\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.get('name').errors\">\n                  Git name is required\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"git-address\">\n                Git address\n              </label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"git-address\" placeholder=\"Repository Git URL\"\n                  formControlName=\"git_address\" [ngClass]=\"{ 'is-invalid': submitted && form.get('git_address').errors }\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.get('git_address').errors\">\n                  Please provide a valid Git URL\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"git-address\">\n                Project address\n              </label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"project-address\" placeholder=\"Project URL\" formControlName=\"project_address\"\n                  [ngClass]=\"{ 'is-invalid': submitted && form.get('project_address').errors }\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.get('project_address').errors\">\n                  Please provide a valid project URL (could be the same as the git url)\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group row\">\n              <div class=\"col\">\n                <a class=\"btn btn-block btn-outline-light\" href=\"{{ project.git_address }}\">\n                  <i class=\"fab fa-fw fa-github\"></i> Go to GitHub\n                </a>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"status-active\">\n                Status\n              </label>\n              <div class=\"col-sm-10\">\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"status-active\" name=\"active\" class=\"custom-control-input\" [value]=\"true\"\n                    formControlName=\"active\">\n                  <label class=\"custom-control-label\" for=\"status-active\">Active</label>\n                </div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"status-inactive\" name=\"active\" class=\"custom-control-input\" [value]=\"false\"\n                    formControlName=\"active\">\n                  <label class=\"custom-control-label\" for=\"status-inactive\">Inactive</label>\n                  <div class=\"invalid-feedback\" *ngIf=\"form.get('active').errors\">\n                    Please define if the project is active or not\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-10 offset-sm-2\">\n                <a [routerLink]=\"['/repositories']\" class=\"btn btn-light\">\n                  <i class=\"fas fa-fw fa-undo-alt\"></i>\n                  Return\n                </a>\n                <button type=\"submit\" class=\"btn btn-success\">\n                  <i class=\"fas fa-fw fa-save\"></i>\n                  Save\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/repositories/edit-repository/edit-repository.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/repositories/edit-repository/edit-repository.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/repositories/edit-repository/edit-repository.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/repositories/edit-repository/edit-repository.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditRepositoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRepositoryComponent", function() { return EditRepositoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/git-project-api.service */ "./src/app/services/api/git-project-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var EditRepositoryComponent = /** @class */ (function () {
    function EditRepositoryComponent(projectsApi, route, fb, toastr, router) {
        this.projectsApi = projectsApi;
        this.route = route;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.title = 'GitHub Trading';
        this.loading = false;
        this.submitted = false;
    }
    EditRepositoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var urlRegexp = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        this.projectId = this.route.snapshot.params["id"];
        this.projectsApi.get(this.projectId).subscribe(function (project) {
            _this.project = project;
            _this.form = _this.fb.group({
                "name": [_this.project.name, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    ]],
                "git_address": [_this.project.git_address, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(urlRegexp)
                    ]],
                "project_address": [_this.project.project_address, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(urlRegexp)
                    ]],
                "active": [_this.project.active, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    ]]
            });
        });
    };
    EditRepositoryComponent.prototype.submitForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formValue;
            var _this = this;
            return __generator(this, function (_a) {
                formValue = this.form.value;
                this.submitted = true;
                if (this.form.valid) {
                    this.projectsApi.update(this.projectId, formValue).toPromise().then(function (data) {
                        console.log("success", data);
                        _this.toastr.success("The data have been saved successfully", "Data saved");
                        _this.router.navigate(["/repositories"]);
                    }).catch(function (error) {
                        console.log(error);
                        _this.toastr.error("An error occurred while saving your data", error);
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    EditRepositoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-repository',
            template: __webpack_require__(/*! ./edit-repository.component.html */ "./src/app/repositories/edit-repository/edit-repository.component.html"),
            styles: [__webpack_require__(/*! ./edit-repository.component.scss */ "./src/app/repositories/edit-repository/edit-repository.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_1__["GitProjectApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditRepositoryComponent);
    return EditRepositoryComponent;
}());



/***/ }),

/***/ "./src/app/repositories/repositories.component.html":
/*!**********************************************************!*\
  !*** ./src/app/repositories/repositories.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid page-main-content\">\n  <div class=\"row align-items-stretch\">\n    <app-sidebar></app-sidebar>\n    <div class=\"col-12 col-md-8 col-lg-10\">\n      <h1 class=\"title\">\n        Manage repositories\n        <a class=\"btn btn-light float-right\" [routerLink]=\"['/repositories/add']\" [routerLinkActive]=\"['active']\">\n          <i class=\"fas fa-fw fa-plus\"></i> Add new\n        </a>\n      </h1>\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover table-striped table-dark\">\n          <thead>\n            <tr>\n              <th>Git name</th>\n              <th>GitHub address</th>\n              <th>Project total tokens</th>\n              <th class=\"actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <app-loading [visible]=\"projects === null\"></app-loading>\n            <tr *ngFor=\"let project of projects\">\n              <td>\n                {{ project[0].name }}\n              </td>\n              <td>\n                <a href=\"{{ project[0].git_address }}\" target=\"_blank\">\n                  {{ project[0].git_address }}\n                </a>\n              </td>\n              <td>\n                {{ project[0].project_value }} <i class=\"fas fa-fw fa-coins\"></i>\n              </td>\n              <td class=\"actions\">\n                <a [routerLink]=\"['/repositories/edit', project[0].id]\" class=\"btn btn-sm btn-warning\">\n                  <i class=\"fas fa-fw fa-pencil-alt\"></i> Edit\n                </a>\n                <a href=\"javascript:;\" class=\"btn btn-sm btn-danger\" (click)=\"deleteItem(project[0].id)\">\n                  <i class=\"fas fa-fw fa-trash\"></i> Remove\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!-- <nav aria-label=\"Repositories navigation\">\n        <ul class=\"pagination justify-content-center\">\n          <li class=\"page-item disabled\">\n            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">\n                <i class=\"fas fa-fw fa-caret-left\"></i>\n              </span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n          <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">1</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">\n                <i class=\"fas fa-fw fa-caret-right\"></i>\n              </span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n        </ul>\n      </nav> -->\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/repositories/repositories.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/repositories/repositories.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/repositories/repositories.component.ts":
/*!********************************************************!*\
  !*** ./src/app/repositories/repositories.component.ts ***!
  \********************************************************/
/*! exports provided: RepositoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesComponent", function() { return RepositoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api/git-project-api.service */ "./src/app/services/api/git-project-api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var bootbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootbox */ "./node_modules/bootbox/bootbox.js");
/* harmony import */ var bootbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootbox__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepositoriesComponent = /** @class */ (function () {
    function RepositoriesComponent(projectsApi, toastr) {
        this.projectsApi = projectsApi;
        this.toastr = toastr;
        this.title = 'GitHub Trading';
        this.projects = null;
    }
    RepositoriesComponent.prototype.removeProjectFromList = function (projectId) {
        this.projects = this.projects.filter(function (el) {
            return el.id !== projectId;
        });
    };
    RepositoriesComponent.prototype.deleteItem = function (projectId) {
        var _this = this;
        var self = this;
        bootbox.confirm("Do you really want to remove this project ?", function (confirmation) {
            if (confirmation) {
                _this.removeProjectFromList(projectId);
                _this.projectsApi.delete(projectId).toPromise().then(function (data) {
                    self.toastr.success("The project was removed successfully.");
                }).catch(function (err) {
                    self.toastr.error("This project can't be removed.");
                });
            }
        });
    };
    RepositoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsApi.getAll().subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    RepositoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repositories',
            template: __webpack_require__(/*! ./repositories.component.html */ "./src/app/repositories/repositories.component.html"),
            styles: [__webpack_require__(/*! ./repositories.component.scss */ "./src/app/repositories/repositories.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_git_project_api_service__WEBPACK_IMPORTED_MODULE_1__["GitProjectApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RepositoriesComponent);
    return RepositoriesComponent;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repositories/repositories.component */ "./src/app/repositories/repositories.component.ts");
/* harmony import */ var _repositories_add_repository_add_repository_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repositories/add-repository/add-repository.component */ "./src/app/repositories/add-repository/add-repository.component.ts");
/* harmony import */ var _repositories_edit_repository_edit_repository_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repositories/edit-repository/edit-repository.component */ "./src/app/repositories/edit-repository/edit-repository.component.ts");
/* harmony import */ var _auctions_auctions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auctions/auctions.component */ "./src/app/auctions/auctions.component.ts");
/* harmony import */ var _auctions_project_auction_project_auction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auctions/project-auction/project-auction.component */ "./src/app/auctions/project-auction/project-auction.component.ts");
/* harmony import */ var _login_callback_callback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/callback/callback.component */ "./src/app/login/callback/callback.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-show/user-show.component */ "./src/app/user-show/user-show.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/**
 * Route constant
 */
var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"] },
    { path: 'callback', component: _login_callback_callback_component__WEBPACK_IMPORTED_MODULE_9__["CallbackComponent"] },
    { path: 'repositories', component: _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_4__["RepositoriesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'repositories/add', component: _repositories_add_repository_add_repository_component__WEBPACK_IMPORTED_MODULE_5__["AddRepositoryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'repositories/edit/:id', component: _repositories_edit_repository_edit_repository_component__WEBPACK_IMPORTED_MODULE_6__["EditRepositoryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'auctions', component: _auctions_auctions_component__WEBPACK_IMPORTED_MODULE_7__["AuctionsComponent"] },
    { path: 'auctions/project/:id', component: _auctions_project_auction_project_auction_component__WEBPACK_IMPORTED_MODULE_8__["ProjectAuctionComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { expectedRole: 'ROLE_ADMIN' } },
    { path: 'users/show/:username', component: _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_11__["UserShowComponent"] },
    { path: '**', redirectTo: 'auctions' },
];
/**
 * Routing module
 */
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            providers: [
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/api/api-contribution.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/api/api-contribution.service.ts ***!
  \**********************************************************/
/*! exports provided: ApiContributionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiContributionService", function() { return ApiContributionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-api.service */ "./src/app/services/api/backend-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiContributionService = /** @class */ (function () {
    function ApiContributionService(backendApi) {
        this.backendApi = backendApi;
    }
    ApiContributionService.prototype.getAll = function (search) {
        return this.backendApi.get("contributions", {
            "project": search.project ? search.project.id : null,
            "user": search.user ? search.user.id : null
        });
    };
    ApiContributionService.prototype.get = function (id) {
        return this.backendApi.get("contributions/" + id);
    };
    ApiContributionService.prototype.update = function (id, data) {
        return this.backendApi.update("contributions/" + id, data);
    };
    ApiContributionService.prototype.create = function (data) {
        return this.backendApi.post("contributions", data);
    };
    ApiContributionService.prototype.delete = function (id) {
        return this.backendApi.delete("contributions/" + id);
    };
    ApiContributionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]])
    ], ApiContributionService);
    return ApiContributionService;
}());



/***/ }),

/***/ "./src/app/services/api/api-purchase-offer.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/api/api-purchase-offer.service.ts ***!
  \************************************************************/
/*! exports provided: ApiPurchaseOfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPurchaseOfferService", function() { return ApiPurchaseOfferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-api.service */ "./src/app/services/api/backend-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiPurchaseOfferService = /** @class */ (function () {
    function ApiPurchaseOfferService(backendApi) {
        this.backendApi = backendApi;
    }
    ApiPurchaseOfferService.prototype.getAll = function (projectId) {
        return this.backendApi.get("purchase-offers", {
            "project": projectId
        });
    };
    ApiPurchaseOfferService.prototype.get = function (id) {
        return this.backendApi.get("purchase-offers/" + id);
    };
    ApiPurchaseOfferService.prototype.update = function (id, data) {
        return this.backendApi.update("purchase-offers/" + id, data);
    };
    ApiPurchaseOfferService.prototype.create = function (data) {
        return this.backendApi.post("purchase-offers", data);
    };
    ApiPurchaseOfferService.prototype.delete = function (id) {
        return this.backendApi.delete("purchase-offers/" + id);
    };
    ApiPurchaseOfferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]])
    ], ApiPurchaseOfferService);
    return ApiPurchaseOfferService;
}());



/***/ }),

/***/ "./src/app/services/api/api-sell-offer.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/api/api-sell-offer.service.ts ***!
  \********************************************************/
/*! exports provided: ApiSellOfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiSellOfferService", function() { return ApiSellOfferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-api.service */ "./src/app/services/api/backend-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiSellOfferService = /** @class */ (function () {
    function ApiSellOfferService(backendApi) {
        this.backendApi = backendApi;
    }
    ApiSellOfferService.prototype.getAll = function (projectId) {
        return this.backendApi.get("sell-offers", {
            "project": projectId
        });
    };
    ApiSellOfferService.prototype.get = function (id) {
        return this.backendApi.get("sell-offers/" + id);
    };
    ApiSellOfferService.prototype.update = function (id, data) {
        return this.backendApi.update("sell-offers/" + id, data);
    };
    ApiSellOfferService.prototype.buy = function (data) {
        return this.backendApi.update("sell-offers/" + data.sell_offer + "/buy", data);
    };
    ApiSellOfferService.prototype.create = function (data) {
        return this.backendApi.post("sell-offers", data);
    };
    ApiSellOfferService.prototype.delete = function (id) {
        return this.backendApi.delete("sell-offers/" + id);
    };
    ApiSellOfferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]])
    ], ApiSellOfferService);
    return ApiSellOfferService;
}());



/***/ }),

/***/ "./src/app/services/api/api-user.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/api/api-user.service.ts ***!
  \**************************************************/
/*! exports provided: ApiUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUserService", function() { return ApiUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-api.service */ "./src/app/services/api/backend-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiUserService = /** @class */ (function () {
    function ApiUserService(backendApi) {
        this.backendApi = backendApi;
    }
    ApiUserService.prototype.getAll = function () {
        return this.backendApi.get("users");
    };
    ApiUserService.prototype.get = function (username) {
        return this.backendApi.get("users/" + username);
    };
    ApiUserService.prototype.update = function (id, data) {
        return this.backendApi.update("users/" + id, data);
    };
    ApiUserService.prototype.create = function (data) {
        return this.backendApi.post("users", data);
    };
    ApiUserService.prototype.blacklist = function (id) {
        return this.backendApi.post("users/" + id + "/blacklist", {});
    };
    ApiUserService.prototype.getMe = function () {
        return this.backendApi.get('user/me');
    };
    ApiUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]])
    ], ApiUserService);
    return ApiUserService;
}());



/***/ }),

/***/ "./src/app/services/api/backend-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/api/backend-api.service.ts ***!
  \*****************************************************/
/*! exports provided: BackendApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendApiService", function() { return BackendApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendApiService = /** @class */ (function () {
    function BackendApiService(http) {
        this.http = http;
        this.environment = null;
        this.endpoint = null;
        this.environment = JSON.parse(localStorage.getItem("APP_SETTINGS"));
        this.endpoint = this.environment.baseAPIUrl;
    }
    // public get(apiUrl: string, parameters?: object): Observable<any> {
    //   return this.http.get(endpoint + apiUrl, this.httpOptions(parameters)).pipe(
    //     map(this.extractData));
    // }
    BackendApiService.prototype.httpOptions = function (parameters) {
        var headers = {
            'Content-Type': 'application/json',
        };
        var token = localStorage.getItem(this.environment.localStorageJWT);
        if (token) {
            headers["Authorization"] = "Bearer " + token;
        }
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (parameters) {
            for (var parameter in parameters) {
                params.append(parameter, parameters[parameter]);
            }
        }
        return {
            headers: httpHeaders
        };
    };
    BackendApiService.prototype.extractData = function (res) {
        return res || {};
    };
    BackendApiService.prototype.generateQueryString = function (params) {
        if (params) {
            return "?" + Object.keys(params).map(function (key) { return key + '=' + params[key]; }).join('&');
        }
        return "";
    };
    BackendApiService.prototype.get = function (apiUrl, parameters) {
        return this.http.get(this.endpoint + apiUrl + this.generateQueryString(parameters), this.httpOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    BackendApiService.prototype.post = function (apiUrl, data) {
        return this.http.post(this.endpoint + apiUrl, JSON.stringify(data), this.httpOptions()).pipe();
    };
    BackendApiService.prototype.update = function (apiUrl, data) {
        return this.http.put(this.endpoint + apiUrl, JSON.stringify(data), this.httpOptions()).pipe();
    };
    BackendApiService.prototype.delete = function (apiUrl) {
        return this.http.delete(this.endpoint + apiUrl, this.httpOptions()).pipe();
    };
    BackendApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BackendApiService);
    return BackendApiService;
}());



/***/ }),

/***/ "./src/app/services/api/git-project-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/api/git-project-api.service.ts ***!
  \*********************************************************/
/*! exports provided: GitProjectApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitProjectApiService", function() { return GitProjectApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-api.service */ "./src/app/services/api/backend-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GitProjectApiService = /** @class */ (function () {
    function GitProjectApiService(backendApi) {
        this.backendApi = backendApi;
    }
    GitProjectApiService.prototype.getAll = function () {
        return this.backendApi.get("git-projects");
    };
    GitProjectApiService.prototype.get = function (id) {
        return this.backendApi.get("git-projects/" + id);
    };
    GitProjectApiService.prototype.update = function (id, data) {
        return this.backendApi.update("git-projects/" + id, data);
    };
    GitProjectApiService.prototype.create = function (data) {
        return this.backendApi.post("git-projects", data);
    };
    GitProjectApiService.prototype.delete = function (id) {
        return this.backendApi.delete("git-projects/" + id);
    };
    GitProjectApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]])
    ], GitProjectApiService);
    return GitProjectApiService;
}());



/***/ }),

/***/ "./src/app/services/api/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/api/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-api.service */ "./src/app/services/api/backend-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(backendApi) {
        this.backendApi = backendApi;
    }
    UserService.prototype.getMe = function () {
        console.log("GET ME !!!");
        return this.backendApi.get('user/me');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar col-12\">\n  <h3>Sidebar</h3>\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/auctions']\" [routerLinkActive]=\"['active']\">\n          <i class=\"fas fa-fw fa-gavel\"></i> Auctions\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" [routerLink]=\"['/repositories']\" [routerLinkActive]=\"['active']\" *ngIf=\"authGuard.hasTheRole(currentUser, 'ROLE_ADMIN')\">\n          <i class=\"fab fa-fw fa-github\"></i> Manage repositories\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authGuard.hasTheRole(currentUser, 'ROLE_ADMIN')\">\n        <a class=\"nav-link\" [routerLink]=\"['/users']\" [routerLinkActive]=\"['active']\">\n          <i class=\"fas fa-fw fa-user\"></i> Manage users\n        </a>\n      </li>\n    </ul>\n  </nav>\n</aside>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authGuard, authService) {
        this.authGuard = authGuard;
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = localStorage.getItem("CURRENT_USER") ? JSON.parse(localStorage.getItem("CURRENT_USER")) : null;
        this.authService.authenticationEvent.subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/table/contributions/contributions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/table/contributions/contributions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-striped table-dark\">\n  <thead>\n    <tr>\n      <th>Date</th>\n      <th *ngIf=\"!currentProject\">Project</th>\n      <th>Commit</th>\n      <th>Value</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let contribution of currentContributions\">\n      <td>\n        {{ contribution.calculation_utc_datetime }}\n      </td>\n\n      <td *ngIf=\"!currentProject\">\n        {{ contribution.git_project.name }}\n      </td>\n      <td>\n        <a href=\"{{ contribution.git_project.git_address }}/commit/{{ contribution.commit_id }}\">\n          #{{ contribution.commit_id }}\n        </a>\n      </td>\n      <td>\n        <i class=\"fas fa-fw fa-coins\"></i>\n        {{ contribution.transaction.nb_tokens }}\n      </td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <th colspan=\"2\" class=\"text-right\">\n        Total\n      </th>\n      <th>\n        <i class=\"fas fa-fw fa-coins\"></i>\n        {{ (contributionsSum() || 0) |number : '1.2-4' }}\n        (owned: {{ (currentProject?.own_value || 0) | number: '1.2-4'}})\n      </th>\n    </tr>\n  </tfoot>\n</table>"

/***/ }),

/***/ "./src/app/table/contributions/contributions.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/table/contributions/contributions.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table/contributions/contributions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/table/contributions/contributions.component.ts ***!
  \****************************************************************/
/*! exports provided: ContributionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionsComponent", function() { return ContributionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_contribution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/api-contribution.service */ "./src/app/services/api/api-contribution.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContributionsComponent = /** @class */ (function () {
    function ContributionsComponent(contributionApi) {
        this.contributionApi = contributionApi;
    }
    ContributionsComponent.prototype.ngOnInit = function () {
    };
    ContributionsComponent.prototype.ngOnChanges = function (changes) {
        this.refreshContributions();
    };
    ContributionsComponent.prototype.refreshContributions = function () {
        var _this = this;
        if (this.currentProject || this.user) {
            this.contributionApi.getAll({
                project: this.currentProject ? this.currentProject : null,
                user: this.user ? this.user : null,
            }).toPromise().then(function (contributions) {
                _this.currentContributions = contributions;
            });
        }
    };
    ContributionsComponent.prototype.contributionsSum = function () {
        if (this.currentContributions) {
            return this.currentContributions.reduce(function (x, contribution) {
                return x + contribution.transaction.nb_tokens;
            }, 0);
        }
        return 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("git-project"),
        __metadata("design:type", Object)
    ], ContributionsComponent.prototype, "currentProject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("user"),
        __metadata("design:type", Object)
    ], ContributionsComponent.prototype, "user", void 0);
    ContributionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-contributions',
            template: __webpack_require__(/*! ./contributions.component.html */ "./src/app/table/contributions/contributions.component.html"),
            styles: [__webpack_require__(/*! ./contributions.component.scss */ "./src/app/table/contributions/contributions.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_api_contribution_service__WEBPACK_IMPORTED_MODULE_1__["ApiContributionService"]])
    ], ContributionsComponent);
    return ContributionsComponent;
}());



/***/ }),

/***/ "./src/app/user-show/user-show.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-show/user-show.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid page-main-content\">\n  <div class=\"row align-items-stretch\">\n    <app-sidebar></app-sidebar>\n    <div class=\"col-12 col-md-8 col-lg-10\">\n      <h1 class=\"title\" *ngIf=\"user\">\n        {{ user.username }}'s profile\n      </h1>\n\n\n      <form *ngIf=\"user\" class=\"mb-sm-3\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Username</label>\n              <p>{{ user.username }}</p>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Github Id</label>\n              <p>{{ user.github_id }}</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <a class=\"btn btn-block btn-outline-primary\" href=\"https://github.com/{{ user.username }}\" target=\"_blank\"><i\n                class=\"fab fa-fw fa-github\"></i>\n              View profile on Github </a>\n          </div>\n        </div>\n\n      </form>\n\n      <h2>Contributions</h2>\n      <app-table-contributions [user]=\"user\"></app-table-contributions>\n\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/user-show/user-show.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-show/user-show.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-show/user-show.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-show/user-show.component.ts ***!
  \**************************************************/
/*! exports provided: UserShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShowComponent", function() { return UserShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_api_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api/api-user.service */ "./src/app/services/api/api-user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserShowComponent = /** @class */ (function () {
    function UserShowComponent(apiUser, toastr, route) {
        this.apiUser = apiUser;
        this.toastr = toastr;
        this.route = route;
    }
    UserShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = this.route.snapshot.params["username"];
        this.apiUser.get(username).toPromise().then(function (user) {
            _this.user = user;
        }).catch(function (err) {
            _this.toastr.error("Unable to fetch the users", "An error occurred");
        });
    };
    UserShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-show',
            template: __webpack_require__(/*! ./user-show.component.html */ "./src/app/user-show/user-show.component.html"),
            styles: [__webpack_require__(/*! ./user-show.component.scss */ "./src/app/user-show/user-show.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_api_user_service__WEBPACK_IMPORTED_MODULE_1__["ApiUserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserShowComponent);
    return UserShowComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid page-main-content\">\n  <div class=\"row align-items-stretch\">\n    <app-sidebar></app-sidebar>\n    <div class=\"col-12 col-md-8 col-lg-10\">\n      <h1 class=\"title\">\n        Manage users\n      </h1>\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover table-striped table-dark\">\n          <thead>\n            <tr>\n              <th>Username</th>\n              <th>Email</th>\n              <th>Github ID</th>\n              <th>Timezone</th>\n              <th>Role</th>\n              <th>Active</th>\n              <th>Blacklisted</th>\n              <th class=\"actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of users\">\n              <td>\n                <a href=\"https://github.com/{{ user.username }}\" target=\"_blank\">\n                  {{user.username}}\n                </a>\n              </td>\n              <td>\n                {{user.email}}\n              </td>\n              <td>\n                {{user.github_id}}\n              </td>\n              <td>\n                {{user.timezone}}\n              </td>\n              <td>\n                {{user.role}}\n              </td>\n              <td>\n                {{user.active}}\n              </td>\n              <td>\n                {{user.black_listed}}\n              </td>\n              <td class=\"actions\">\n                <a [routerLink]=\"['/users/show', user.username]\" class=\"btn btn-sm btn-warning\">\n                  <i class=\"fas fa-fw fa-pencil-alt\"></i> Display\n                </a>\n                <a href=\"#\" class=\"btn btn-sm btn-danger\">\n                  <i class=\"fas fa-fw fa-trash\"></i> Blacklist\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!-- <nav aria-label=\"Repositories navigation\">\n        <ul class=\"pagination justify-content-center\">\n          <li class=\"page-item disabled\">\n            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">\n                <i class=\"fas fa-fw fa-caret-left\"></i>\n              </span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n          <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">1</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">\n                <i class=\"fas fa-fw fa-caret-right\"></i>\n              </span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n        </ul>\n      </nav> -->\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api-user.service */ "./src/app/services/api/api-user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, apiUser, toastr) {
        this.http = http;
        this.apiUser = apiUser;
        this.toastr = toastr;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiUser.getAll().toPromise().then(function (users) {
            _this.users = users;
        }).catch(function (err) {
            _this.toastr.error("Unable to fetch the users", "An error occurred");
        });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_api_api_user_service__WEBPACK_IMPORTED_MODULE_2__["ApiUserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment-loader.ts":
/*!************************************************!*\
  !*** ./src/environments/environment-loader.ts ***!
  \************************************************/
/*! exports provided: environmentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentLoader", function() { return environmentLoader; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./src/environments/environment.ts");

var environmentLoader = new Promise(function (resolve, reject) {
    var xmlhttp = new XMLHttpRequest(), method = 'GET', url = './assets/environments/environment.json?date=' + new Date().getTime();
    xmlhttp.open(method, url, true);
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            resolve(JSON.parse(xmlhttp.responseText));
        }
        else {
            resolve(_environment__WEBPACK_IMPORTED_MODULE_0__["environment"]);
        }
    };
    xmlhttp.send();
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8000',
    baseAPIUrl: 'http://localhost:8000/api/v1/',
    githubAuth: {
        URL: 'https://github.com/login/oauth/authorize',
        CLIENT_ID: 'Iv1.54319c9b16b131e3',
        CLIENT_DOMAIN: 'github-trading.eu.auth0.com',
        REDIRECT_URI: 'http://localhost:4200/callback',
        SCOPE: 'user user:email repo'
    },
    localStorageJWT: 'git-trading-jwt'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _environments_environment_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment-loader */ "./src/environments/environment-loader.ts");





_environments_environment_loader__WEBPACK_IMPORTED_MODULE_4__["environmentLoader"].then(function (env) {
    if (env.production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
        if (window) {
            window.console.log = function () { };
        }
    }
    _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production = env.production;
    _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl = env.baseUrl;
    _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseAPIUrl = env.baseAPIUrl;
    _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].githubAuth = env.githubAuth;
    _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localStorageJWT = env.localStorageJWT;
    localStorage.setItem("APP_SETTINGS", JSON.stringify(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]));
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\XoesekoI\sdg-market-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map