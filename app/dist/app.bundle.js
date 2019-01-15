/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _klondike_scoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klondike/scoring */ \"./app/klondike/scoring.js\");\n/* harmony import */ var _klondike_scoring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_klondike_scoring__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _klondike_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./klondike/game */ \"./app/klondike/game.js\");\n/* harmony import */ var _klondike_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_klondike_game__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _klondike_klondike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./klondike/klondike */ \"./app/klondike/klondike.js\");\n/* harmony import */ var _klondike_klondike__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_klondike_klondike__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _klondike_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./klondike/board */ \"./app/klondike/board.js\");\n/* harmony import */ var _klondike_board__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_klondike_board__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nangular.module(\"solitaire\", [\"klondike\", \"ngDraggable\"]);\r\n\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/klondike/board.js":
/*!*******************************!*\
  !*** ./app/klondike/board.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n  \"use strict\";\r\n\r\n  angular.module(\"klondike.board\", [\"ngRoute\", \"klondike.game\"])\r\n    .config([\"$routeProvider\", function ($routeProvider) {\r\n      $routeProvider\r\n        .when(\"/board\", {\r\n          templateUrl: \"klondike/board.html\",\r\n          controller: \"KlondikeController\"\r\n        })\r\n        .otherwise({redirectTo: \"/board\"});\r\n    }])\r\n    .controller(\"KlondikeController\", [\"$scope\", \"klondikeGame\", \"scoring\", function KlondikeController($scope, klondikeGame, scoring) {\r\n      klondikeGame.newGame();\r\n      $scope.game = klondikeGame;\r\n      $scope.scoring = scoring;\r\n    }])\r\n    .directive(\"sNoPile\", function () {\r\n      return {\r\n        restrict: \"E\",\r\n        template: \"<div class=\\\"no-pile\\\"></div>\"\r\n      };\r\n    })\r\n    .directive(\"sTableau\", function () {\r\n      return {\r\n        restrict: \"E\",\r\n        templateUrl: \"klondike/piles/tableau.html\"\r\n      };\r\n    })\r\n    .directive(\"sFoundation\", function () {\r\n      return {\r\n        restrict: \"E\",\r\n        templateUrl: \"klondike/piles/foundation.html\"\r\n      };\r\n    })\r\n    .directive(\"sCard\", function () {\r\n      return {\r\n        restrict: \"A\",\r\n        templateUrl: \"cards/card.html\",\r\n        scope: {\r\n          card: \"=\"\r\n        }\r\n      };\r\n    })\r\n    .directive(\"sRemainder\", function () {\r\n      return {\r\n        restrict: \"E\",\r\n        templateUrl: \"klondike/piles/remainder.html\"\r\n      };\r\n    })\r\n    .directive(\"sWaste\", function () {\r\n      return {\r\n        restrict: \"E\",\r\n        templateUrl: \"klondike/piles/waste.html\"\r\n      };\r\n    });\r\n})();\r\n\n\n//# sourceURL=webpack:///./app/klondike/board.js?");

/***/ }),

/***/ "./app/klondike/game.js":
/*!******************************!*\
  !*** ./app/klondike/game.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n  \"use strict\";\r\n\r\n  angular.module(\"klondike.game\", [])\r\n    .service(\"klondikeGame\", [\"scoring\", KlondikeGame]);\r\n\r\n  function KlondikeGame(scoring) {\r\n    this.newGame = function newGame() {\r\n      var cards = new Deck().shuffled();\r\n      this.newGameFromDeck(cards);\r\n    };\r\n\r\n    this.newGameFromDeck = function (cards) {\r\n      scoring.newGame();\r\n      turnAllCardsDown(cards);\r\n      this.tableaus = dealTableaus(cards);\r\n      this.foundations = buildFoundations();\r\n      this.remainder = dealRemainder(cards);\r\n    };\r\n\r\n    function turnAllCardsDown(cards) {\r\n      cards.forEach(function (card) {\r\n        card.turnDown();\r\n      });\r\n    }\r\n\r\n    function dealTableaus(cards) {\r\n      var tableaus = [\r\n        new TableauPile(cards.slice(0, 1), scoring),\r\n        new TableauPile(cards.slice(1, 3), scoring),\r\n        new TableauPile(cards.slice(3, 6), scoring),\r\n        new TableauPile(cards.slice(6, 10), scoring),\r\n        new TableauPile(cards.slice(10, 15), scoring),\r\n        new TableauPile(cards.slice(15, 21), scoring),\r\n        new TableauPile(cards.slice(21, 28), scoring)\r\n      ];\r\n      tableaus.forEach(function (tableau) {\r\n        tableau.turnTopCardUp();\r\n      });\r\n      return tableaus;\r\n    }\r\n\r\n    function buildFoundations() {\r\n      return _.range(1, 5)\r\n        .map(function () {\r\n          return new FoundationPile([], scoring);\r\n        });\r\n    }\r\n\r\n    function dealRemainder(cards) {\r\n      return new RemainderPile(cards.slice(28), scoring);\r\n    }\r\n  }\r\n\r\n  KlondikeGame.prototype.tryMoveTopCardToAnyFoundation = function (sourcePile) {\r\n    if (sourcePile.isEmpty()) {\r\n      return;\r\n    }\r\n    var foundationThatWillAccept = _.find(this.foundations, function (foundation) {\r\n      return foundation.willAcceptCard(sourcePile.topCard());\r\n    });\r\n    if (foundationThatWillAccept) {\r\n      foundationThatWillAccept.moveCardsFrom(sourcePile);\r\n    }\r\n  };\r\n\r\n})();\r\n\n\n//# sourceURL=webpack:///./app/klondike/game.js?");

/***/ }),

/***/ "./app/klondike/klondike.js":
/*!**********************************!*\
  !*** ./app/klondike/klondike.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module(\"klondike\", [\r\n  \"klondike.game\",\r\n  \"klondike.board\",\r\n  \"klondike.scoring\"\r\n]);\r\n\n\n//# sourceURL=webpack:///./app/klondike/klondike.js?");

/***/ }),

/***/ "./app/klondike/scoring.js":
/*!*********************************!*\
  !*** ./app/klondike/scoring.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module(\"klondike.scoring\", [])\r\n  .service(\"scoring\", [function Scoring() {\r\n    \"use strict\";\r\n\r\n    this.score = 0;\r\n\r\n    this.newGame = function () {\r\n      this.score = 0;\r\n    };\r\n    this.tableauCardTurnedUp = function () {\r\n      this.score += 5;\r\n    };\r\n    this.dropped = function (source, destionation) {\r\n      this.score += scoreForMoving(source, destionation) || 0;\r\n    };\r\n    this.wasteRecycled = function () {\r\n      this.score = Math.max(this.score - 100, 0);\r\n    };\r\n\r\n    function scoreForMoving(source, destionation) {\r\n      if (destionation.name === \"TableauPile\") {\r\n        if (source.name === \"FoundationPile\") {\r\n          return -15;\r\n        }\r\n        return 5;\r\n      }\r\n      if (destionation.name === \"FoundationPile\") {\r\n        if (source.name === \"TableauPile\" || source.name === \"WastePile\") {\r\n          return 10;\r\n        }\r\n      }\r\n    }\r\n  }]);\r\n\n\n//# sourceURL=webpack:///./app/klondike/scoring.js?");

/***/ })

/******/ });