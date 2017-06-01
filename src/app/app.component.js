"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var movie_service_1 = require("./movie.service");
var AppComponent = (function () {
    function AppComponent(itemService) {
        this.itemService = itemService;
        this.category = 'Movie: ';
        this.showClear = "";
        this.state = "closed"; //closed or open
    }
    AppComponent.prototype.getMovies = function () {
        var _this = this;
        //this.movies = this.itemService.getMovies();
        //this.itemService.getMovies().then(items => console.log("mv: ", items.length));
        this.itemService.getMovies().then(function (items) { return _this.movies = items; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    AppComponent.prototype.onSelect = function (item) {
        this.selectedItem = item.title;
        this.showClear = ""; //css classname
        this.toggleMenu();
    };
    ;
    AppComponent.prototype.onClear = function () {
        this.selectedItem = "";
        this.showClear = "no";
    };
    AppComponent.prototype.toggleMenu = function () {
        if (this.state == "closed") {
            this.state = "open";
        }
        else {
            this.state = "closed";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        providers: [movie_service_1.MovieService],
        selector: 'my-app',
        templateUrl: './dropdown.component.html',
        styleUrls: ['./dropdown.component.css'],
        animations: [
            animations_1.trigger('menuState', [animations_1.state('closed', animations_1.style({
                    display: 'block',
                    height: '0px',
                })),
                animations_1.state('open', animations_1.style({
                    display: 'block',
                    height: '150px',
                })),
                animations_1.transition('closed => open', animations_1.animate('600ms 50ms ease')),
                animations_1.transition('open => closed', animations_1.animate('600ms 50ms ease'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map