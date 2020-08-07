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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/playlist.js":
/*!************************************!*\
  !*** ./src/components/playlist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function PlayList(songs) {
  this.songs = [];
  this.currentIndex = 0;
}

PlayList.prototype.add = function (song) {
  this.songs.push(song);
};

PlayList.prototype.play = function () {
  var song = this.songs[this.currentIndex];
  song.play();
};

PlayList.prototype.stop = function () {
  var song = this.songs[this.currentIndex];
  song.stop();
};

PlayList.prototype.next = function () {
  this.stop();
  this.currentIndex++;
  if (this.currentIndex === this.songs.length) this.currentIndex = 0;
  var song = this.songs[this.currentIndex];
  song.play();
};

PlayList.prototype.render = function (list) {
  list.innerHTML = '';
  songsList = '';
  this.songs.forEach(function (song) {
    return songsList += song.toHtml();
  });
  list.innerHTML = songsList;
};

/* harmony default export */ __webpack_exports__["default"] = (PlayList);

/***/ }),

/***/ "./src/components/song.js":
/*!********************************!*\
  !*** ./src/components/song.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Song(title, duration, artist) {
  this.title = title;
  this.duration = duration;
  this.artist = artist;
  this.isPlaying = false;
}

;

Song.prototype.play = function () {
  this.isPlaying = true;
};

Song.prototype.stop = function () {
  this.isPlaying = false;
};

Song.prototype.toHtml = function () {
  return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n  <div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.artist, "</div>\n  <div class=\"col-sm-3\">").concat(this.duration, "</div>\n  </div>");
};

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/song */ "./src/components/song.js");
/* harmony import */ var _components_playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/playlist */ "./src/components/playlist.js");
console.log("Hello from Play List");


var playList = new _components_playlist__WEBPACK_IMPORTED_MODULE_1__["default"]();
var s1 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('TEST', 'Tom', '03:12');
var s2 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('TEST 1', 'Bill', '05:22');
playList.add(s1);
playList.add(s2);
var list = document.getElementById('list');
playList.render(list);
var play = document.getElementById('btn-play');
var stop = document.getElementById('btn-stop');
var next = document.getElementById('btn-next');

play.onclick = function () {
  playList.play();
  playList.render(list);
};

stop.onclick = function () {
  playList.stop();
  playList.render(list);
};

next.onclick = function () {
  playList.next();
  playList.render(list);
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29uZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJQbGF5TGlzdCIsInNvbmdzIiwiY3VycmVudEluZGV4IiwicHJvdG90eXBlIiwiYWRkIiwic29uZyIsInB1c2giLCJwbGF5Iiwic3RvcCIsIm5leHQiLCJsZW5ndGgiLCJyZW5kZXIiLCJsaXN0IiwiaW5uZXJIVE1MIiwic29uZ3NMaXN0IiwiZm9yRWFjaCIsInRvSHRtbCIsIlNvbmciLCJ0aXRsZSIsImR1cmF0aW9uIiwiYXJ0aXN0IiwiaXNQbGF5aW5nIiwiY29uc29sZSIsImxvZyIsInBsYXlMaXN0IiwiczEiLCJzMiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxp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d0IsT0FBeEIsQ0FBWDtBQUNBLElBQU1TLEVBQUUsR0FBRyxJQUFJVCx3REFBSixDQUFTLFFBQVQsRUFBbUIsTUFBbkIsRUFBMkIsT0FBM0IsQ0FBWDtBQUVBTyxRQUFRLENBQUNwQixHQUFULENBQWFxQixFQUFiO0FBQ0FELFFBQVEsQ0FBQ3BCLEdBQVQsQ0FBYXNCLEVBQWI7QUFFQSxJQUFNZCxJQUFJLEdBQUdlLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0FKLFFBQVEsQ0FBQ2IsTUFBVCxDQUFnQkMsSUFBaEI7QUFFQSxJQUFNTCxJQUFJLEdBQUdvQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjtBQUNBLElBQU1wQixJQUFJLEdBQUdtQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjtBQUNBLElBQU1uQixJQUFJLEdBQUdrQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjs7QUFFQXJCLElBQUksQ0FBQ3NCLE9BQUwsR0FBZSxZQUFVO0FBQ3ZCTCxVQUFRLENBQUNqQixJQUFUO0FBQ0FpQixVQUFRLENBQUNiLE1BQVQsQ0FBZ0JDLElBQWhCO0FBQ0QsQ0FIRDs7QUFLQUosSUFBSSxDQUFDcUIsT0FBTCxHQUFlLFlBQVU7QUFDdkJMLFVBQVEsQ0FBQ2hCLElBQVQ7QUFDQWdCLFVBQVEsQ0FBQ2IsTUFBVCxDQUFnQkMsSUFBaEI7QUFDRCxDQUhEOztBQUtBSCxJQUFJLENBQUNvQixPQUFMLEdBQWUsWUFBVTtBQUN2QkwsVUFBUSxDQUFDZixJQUFUO0FBQ0FlLFVBQVEsQ0FBQ2IsTUFBVCxDQUFnQkMsSUFBaEI7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDN0JBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIFBsYXlMaXN0IChzb25ncykge1xuICB0aGlzLnNvbmdzID0gW107XG4gIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbn1cblxuUGxheUxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHNvbmcpIHtcbiAgdGhpcy5zb25ncy5wdXNoKHNvbmcpO1xufVxuXG5QbGF5TGlzdC5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgc29uZyA9IHRoaXMuc29uZ3NbdGhpcy5jdXJyZW50SW5kZXhdO1xuICBzb25nLnBsYXkoKTtcbn1cblxuUGxheUxpc3QucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHNvbmcgPSB0aGlzLnNvbmdzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgc29uZy5zdG9wKCk7XG59XG5cblBsYXlMaXN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc3RvcCgpO1xuICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICBpZih0aGlzLmN1cnJlbnRJbmRleCA9PT0gdGhpcy5zb25ncy5sZW5ndGgpIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgbGV0IHNvbmcgPSB0aGlzLnNvbmdzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgc29uZy5wbGF5KCk7XG59XG5cblBsYXlMaXN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihsaXN0KSB7XG4gIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHNvbmdzTGlzdCA9ICcnO1xuICB0aGlzLnNvbmdzLmZvckVhY2goc29uZyA9PiBzb25nc0xpc3QgKz0gc29uZy50b0h0bWwoKSk7XG4gIGxpc3QuaW5uZXJIVE1MID0gc29uZ3NMaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5TGlzdDsiLCJmdW5jdGlvbiBTb25nICh0aXRsZSwgZHVyYXRpb24sIGFydGlzdCkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgdGhpcy5hcnRpc3QgPSBhcnRpc3Q7XG4gIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG59O1xuXG5Tb25nLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbn07XG5cblNvbmcucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbn07XG5cblNvbmcucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyb3cgcHktMyAke3RoaXMuaXNQbGF5aW5nID8gJ2N1cnJlbnQnIDogJyd9XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPiR7dGhpcy50aXRsZX0gLSAke3RoaXMuYXJ0aXN0fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj4ke3RoaXMuZHVyYXRpb259PC9kaXY+XG4gIDwvZGl2PmBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvbmc7IiwiY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIFBsYXkgTGlzdFwiKTtcblxuaW1wb3J0IFNvbmcgZnJvbSAnLi9jb21wb25lbnRzL3NvbmcnO1xuaW1wb3J0IFBsYXlMaXN0IGZyb20gJy4vY29tcG9uZW50cy9wbGF5bGlzdCc7XG5cbmNvbnN0IHBsYXlMaXN0ID0gbmV3IFBsYXlMaXN0KCk7XG5jb25zdCBzMSA9IG5ldyBTb25nKCdURVNUJywgJ1RvbScsICcwMzoxMicpXG5jb25zdCBzMiA9IG5ldyBTb25nKCdURVNUIDEnLCAnQmlsbCcsICcwNToyMicpXG5cbnBsYXlMaXN0LmFkZChzMSlcbnBsYXlMaXN0LmFkZChzMilcblxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JylcbnBsYXlMaXN0LnJlbmRlcihsaXN0KVxuXG5jb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wbGF5JylcbmNvbnN0IHN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN0b3AnKVxuY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbmV4dCcpXG5cbnBsYXkub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gIHBsYXlMaXN0LnBsYXkoKTtcbiAgcGxheUxpc3QucmVuZGVyKGxpc3QpXG59XG5cbnN0b3Aub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gIHBsYXlMaXN0LnN0b3AoKTtcbiAgcGxheUxpc3QucmVuZGVyKGxpc3QpXG59XG5cbm5leHQub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gIHBsYXlMaXN0Lm5leHQoKTtcbiAgcGxheUxpc3QucmVuZGVyKGxpc3QpXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==