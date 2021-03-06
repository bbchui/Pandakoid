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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
  function Block(game, health, posX, posY, powerUp) {
    _classCallCheck(this, Block);

    this.game = game;
    this.stage = game.stage;
    this.block = new createjs.Shape();
    this.health = health;
    this.posX = posX;
    this.posY = posY;
    this.powerUp = powerUp;
  }

  _createClass(Block, [{
    key: "initiate",
    value: function initiate(posX, posY, width, height, powerUp) {
      if (this.powerUp === 1) {
        this.block.graphics.beginStroke("#000").beginFill("#FF5154").drawRect(posX, posY, width, height);
      } else if (this.powerUp === 2) {
        this.block.graphics.beginStroke("#000").beginFill("#858AE3").drawRect(posX, posY, width, height);
      } else if (this.health === 5) {
        this.block.graphics.beginStroke("#000").beginFill("#668E39").drawRect(posX, posY, width, height);
      } else if (this.health === 4) {
        this.block.graphics.beginStroke("#000").beginFill("#96B566").drawRect(posX, posY, width, height);
      } else if (this.health === 3) {
        this.block.graphics.beginStroke("#000").beginFill("#BCE27F").drawRect(posX, posY, width, height);
      } else if (this.health === 2) {
        this.block.graphics.beginStroke("#000").beginFill("#C3C3C3").drawRect(posX, posY, width, height);
      } else if (this.health === 1) {
        this.block.graphics.beginStroke("#000").beginFill("#F6FF97").drawRect(posX, posY, width, height);
      }
      this.block.regX = 30;
      this.block.regY = 10;
      this.stage.addChild(this.block);
    }
  }, {
    key: "barrier",
    value: function barrier() {
      this.block.graphics.beginStroke("#000").beginFill("#F6FF97").drawRect(0, 565, 900, 1);
      this.stage.addChild(this.block);
      this.game.blocks.push(this);
    }
  }]);

  return Block;
}();

exports.default = Block;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bamboo = function () {
  function Bamboo(game) {
    _classCallCheck(this, Bamboo);

    this.game = game;
    this.stage = game.stage;
    this.bamboo = new createjs.Bitmap('./assets/images/bamboo.png');
    this.keys = {};
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
  }

  _createClass(Bamboo, [{
    key: 'initiate',
    value: function initiate() {
      this.bamboo.scaleX = 0.50;
      this.bamboo.scaleY = 0.75;
      this.bamboo.x = 351.5;
      this.bamboo.y = 550;
      this.stage.addChild(this.bamboo);
    }
  }, {
    key: 'keydown',
    value: function keydown(event) {
      this.keys[event.keyCode] = true;
    }
  }, {
    key: 'keyup',
    value: function keyup(event) {
      delete this.keys[event.keyCode];
    }
  }, {
    key: 'playerAction',
    value: function playerAction() {
      if (this.keys[37] && this.bamboo.x > 9) this.bamboo.x -= 9;
      if (this.keys[39] && this.bamboo.x < 740) this.bamboo.x += 9;
    }
  }]);

  return Bamboo;
}();

exports.default = Bamboo;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _blocks = __webpack_require__(0);

var _blocks2 = _interopRequireDefault(_blocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Panda = function () {
  function Panda(game) {
    _classCallCheck(this, Panda);

    this.game = game;
    this.stage = game.stage;
    this.panda = new createjs.Bitmap('./assets/images/panda2.png');
    this.dy = -7;
    this.dx = 0;
  }

  _createClass(Panda, [{
    key: 'initiate',
    value: function initiate() {
      this.panda.x = 422;
      this.panda.y = 535;
      this.panda.regX = 20;
      this.panda.regY = 20;
      this.stage.addChild(this.panda);
      this.game.pandas.push(this);
    }
  }, {
    key: 'powerInitiate',
    value: function powerInitiate(block, x) {
      this.panda.x = block.posX;
      this.panda.y = block.posY;
      this.dx += x;
      this.dy = -4.5;
      this.panda.regX = 20;
      this.panda.regY = 20;
      this.stage.addChild(this.panda);
      this.game.pandas.push(this);
    }
  }, {
    key: 'bounce',
    value: function bounce(bamboo) {
      this.panda.x += this.dx;
      this.panda.y += this.dy;
      // this.panda.rotation += 2;
      var disX = Math.abs(this.panda.x - bamboo.bamboo.x);
      var disY = Math.abs(this.panda.y - bamboo.bamboo.y);
      //bamboo logic
      if (this.panda.x + this.dx < 20 || this.panda.x + this.dx > 870) {
        this.dx = -this.dx;
      }
      if (this.panda.y + this.dy < 8) {
        this.dy = -this.dy;
      }
      if (this.panda.y + this.dy > 542) {
        if (this.panda.x > bamboo.bamboo.x && this.panda.x < bamboo.bamboo.x + 28 || disX < 25 && disY < 5) {
          this.dy = -this.dy;
          if (this.dx - 1 > -5) {
            this.dx -= 1;
          }
        } else if (this.panda.x > bamboo.bamboo.x + 28 && this.panda.x < bamboo.bamboo.x + 56) {
          this.dy = -this.dy;
          if (this.dx - 0.5 > -5) {
            this.dx -= 0.5;
          }
        } else if (this.panda.x > bamboo.bamboo.x + 56 && this.panda.x < bamboo.bamboo.x + 84) {
          this.dy = -this.dy;
        } else if (this.panda.x > bamboo.bamboo.x + 84 && this.panda.x < bamboo.bamboo.x + 112) {
          this.dy = -this.dy;
          if (this.dx + 0.5 < 5) {
            this.dx += 0.5;
          }
        } else if (this.panda.x > bamboo.bamboo.x + 112 && this.panda.x < bamboo.bamboo.x + 160)
          // (disX > 108 && disX < 164 && disY < 5))
          {
            this.dy = -this.dy;
            if (this.dx + 1 < 5) {
              this.dx += 1;
            }
          }
      }
    }
  }, {
    key: 'checkCollision',
    value: function checkCollision(block) {
      var _this = this;

      for (var i = 0; i < 12; i++) {
        var posX = void 0;
        var posY = void 0;
        this.calculate(block, i, function (block, dx, dy) {
          var x = Math.abs(_this.panda.x + dx - block.posX);
          var y = Math.abs(_this.panda.y + dy - block.posY);
          posX = x;
          posY = y;
        }.bind(this));
        if (posX < 25 && posY < 5) {
          return true;
        }
      }
    }
  }, {
    key: 'calculate',
    value: function calculate(block, i, cb) {
      var dx = 20 * Math.cos(720 * (Math.PI / 360) * (i / 12));
      var dy = 20 * Math.sin(720 * (Math.PI / 360) * (i / 12));
      cb(block, dx, dy);
    }
  }, {
    key: 'checkBarrier',
    value: function checkBarrier(block) {
      if (block.posX === 0) {
        if (this.panda.y + 20 > block.posY) {
          return true;
        }
      }
    }
  }, {
    key: 'blockBounce',
    value: function blockBounce(block) {
      if (this.checkCollision(block) || this.checkBarrier(block)) {
        block.health -= 1;
        this.dy = -this.dy;
        this.game.score += 10;
        document.getElementById("score").textContent = 'Score: ' + this.game.score;
        if (block.health < 5) {
          if (block.health <= 0) {
            this.stage.removeChild(block.block);
          } else if (block.health === 4) {
            block.block.graphics.beginStroke("#000").beginFill("#96B566").drawRect(block.posX, block.posY, 60, 20);
          } else if (block.health === 3) {
            block.block.graphics.beginStroke("#000").beginFill("#BCE27F").drawRect(block.posX, block.posY, 60, 20);
          } else if (block.health === 2) {
            block.block.graphics.beginStroke("#000").beginFill("#C3C3C3").drawRect(block.posX, block.posY, 60, 20);
          } else if (block.health === 1) {
            block.block.graphics.beginStroke("#000").beginFill("#F6FF97").drawRect(block.posX, block.posY, 60, 20);
          }
        }
      }
    }
  }]);

  return Panda;
}();

exports.default = Panda;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bamboo = __webpack_require__(1);

var _bamboo2 = _interopRequireDefault(_bamboo);

var _panda = __webpack_require__(2);

var _panda2 = _interopRequireDefault(_panda);

var _blocks = __webpack_require__(0);

var _blocks2 = _interopRequireDefault(_blocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pandakoid = function () {
  function Pandakoid() {
    _classCallCheck(this, Pandakoid);

    this.canvas = document.getElementById('canvas');
    this.stage = new createjs.Stage(this.canvas);
    this.bamboo = new _bamboo2.default(this);
    this.panda = new _panda2.default(this);
    this.blocks = [];
    this.ticker = createjs.Ticker;
    this.isOver = false;
    this.play = this.play.bind(this);
    this.createBlocks = this.createBlocks.bind(this);
    this.isPlaying = false;
    this.score = 0;
    this.pandas = [];
    this.start = this.start.bind(this);
    this.level = 1;
  }

  _createClass(Pandakoid, [{
    key: 'start',
    value: function start(e) {
      var _this = this;

      this.panda.initiate();
      this.bamboo.initiate();
      this.createBlocksLvl1(250, 100, 60, 20);
      setTimeout(function () {
        return _this.stage.update();
      }, 500);
      document.addEventListener("keydown", this.handleStart.bind(this), true);
    }
  }, {
    key: 'start2',
    value: function start2(e) {
      var _this2 = this;

      this.panda.initiate();
      this.bamboo.initiate();
      this.createBlocks(60, 100, 60, 20);
      setTimeout(function () {
        return _this2.stage.update();
      }, 500);
      document.addEventListener("keydown", this.handleStart.bind(this), true);
    }
  }, {
    key: 'handleStart',
    value: function handleStart(e) {
      this.play(e);
      document.removeEventListener("keydown", this.handleStart.bind(this));
    }
  }, {
    key: 'play',
    value: function play(e) {
      var _this3 = this;

      if (e.keyCode === 13 && !this.isPlaying) {
        this.isPlaying = true;
        document.getElementById("welcome").style.visibility = "hidden";
        document.getElementById("gameover").style.visibility = "hidden";
        document.getElementById("win").style.visibility = "hidden";
        document.getElementById("next-level").style.visibility = "hidden";
        document.getElementById("canvas").style.opacity = 1;
        document.getElementById("score").textContent = 'Score: ' + this.score;
        this.ticker.framerate = 120;
        this.ticker.addEventListener("tick", function () {
          _this3.bamboo.playerAction();
          _this3.blocks.forEach(function (block, idx) {
            _this3.pandas.forEach(function (panda) {
              panda.blockBounce(block);
            });
            if (block.health <= 0) {
              if (block.health <= 0 && block.powerUp === 1) {
                _this3.score += 100;
                var panda1 = new _panda2.default(_this3);
                var panda2 = new _panda2.default(_this3);
                setTimeout(panda1.powerInitiate(block, 0.2), 500);
                setTimeout(panda2.powerInitiate(block, -0.2), 1000);
              }
              if (block.health <= 0 && block.powerUp === 2) {
                _this3.score += 100;
                var barrier = new _blocks2.default(_this3, 1, 0, 565);
                barrier.barrier();
              }

              _this3.blocks.splice(idx, 1);
            }
          });
          _this3.pandas.forEach(function (panda, idx) {
            panda.bounce(_this3.bamboo);
          });
          _this3.stage.update();
          for (var i = 0; i < _this3.pandas.length; i++) {
            if (_this3.pandas[i].panda.y > 585) {
              _this3.stage.removeChild(_this3.pandas[i].panda);
              _this3.pandas.splice(i, 1);
            }
          }

          if (_this3.level === 1) {
            if (_this3.blocks.length === 0 || _this3.blocks.every(function (block) {
              return block.posY >= 500;
            })) {
              _this3.isPlaying = false;
              _this3.ticker.removeAllEventListeners();
              _this3.blocks = [];
              _this3.panda.dx = 0;
              _this3.pandas = [];
              document.getElementById("next-level").style.visibility = "visible";
              document.getElementById("canvas").style.opacity = 0.5;
              _this3.stage.removeAllChildren();
              _this3.start2();
            }
          } else {
            if (_this3.blocks.length === 0 || _this3.blocks.every(function (block) {
              return block.posY >= 500;
            })) {
              _this3.isPlaying = false;
              _this3.ticker.removeAllEventListeners();
              _this3.blocks = [];
              _this3.score = 0;
              _this3.panda.dx = 0;
              _this3.pandas = [];
              document.getElementById("win").style.visibility = "visible";
              document.getElementById("canvas").style.opacity = 0.5;
              _this3.stage.removeAllChildren();
              _this3.start();
            }
          }

          if (_this3.pandas.length === 0) {
            _this3.isPlaying = false;
            _this3.ticker.removeAllEventListeners();
            _this3.blocks = [];
            _this3.score = 0;
            _this3.panda.dx = 0;
            document.getElementById("gameover").style.visibility = "visible";
            document.getElementById("canvas").style.opacity = 0.5;
            _this3.stage.removeAllChildren();
            _this3.start();
          }
        });
      }
    }

    // handleRestart(e) {
    //   this.panda.initiate();
    //   this.bamboo.initiate();
    //   this.createBlocks(60, 100, 60, 20);
    //   setTimeout(() => this.stage.update(), 500);
    //   this.play(e);
    //   document.removeEventListener("keydown", this.handleRestart.bind(this), true)
    // }
    //
    // restart() {
    //   document.addEventListener("keydown", this.handleRestart.bind(this))
    // }

  }, {
    key: 'createBlocksLvl1',
    value: function createBlocksLvl1(posX, posY, width, height) {
      var health = 2;
      var x = posX;
      var count = 0;
      for (var col = 0; col < 2; col++) {
        for (var row = 0; row < 7; row++) {
          this.blocks[count] = new _blocks2.default(this, health, posX, posY, 0);
          posX += 60;
          count += 1;
        }
        posX = x;
        posY += 20;
        health -= 1;
      }

      var block1 = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      var block2 = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      var block3 = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      var block4 = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      block1.powerUp = 1;
      block1.health = 1;
      block2.powerUp = 1;
      block2.health = 1;
      block3.powerUp = 2;
      block3.health = 1;
      block4.powerUp = 2;
      block4.health = 1;
      this.blocks[10].powerUp = 2;
      this.blocks[10].health = 1;
      this.blocks[3].health = 1;
      this.blocks[3].powerUp = 1;

      this.blocks.forEach(function (block) {
        block.initiate(block.posX, block.posY, 60, 20, block.powerUp);
      });
    }
  }, {
    key: 'createBlocks',
    value: function createBlocks(posX, posY, width, height) {
      var health = 5;
      var x = posX;
      var count = 0;
      for (var col = 0; col < 5; col++) {
        for (var row = 0; row < 14; row++) {
          this.blocks[count] = new _blocks2.default(this, health, posX, posY, 0);
          posX += 60;
          count += 1;
        }
        posX = x;
        posY += 20;
        health -= 1;
      }

      var block1 = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      var block2 = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      var block3 = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      var block4 = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      block1.powerUp = 1;
      block1.health = 1;
      block2.powerUp = 1;
      block2.health = 1;
      block3.powerUp = 2;
      block3.health = 1;
      block4.powerUp = 2;
      block4.health = 1;
      this.blocks[62].powerUp = 2;
      this.blocks[62].health = 1;
      this.blocks[48].powerUp = 1;
      this.blocks[48].health = 1;

      this.blocks[44].health = 1;
      this.blocks[44].powerUp = 1;
      this.blocks[53].health = 1;
      this.blocks[53].powerUp = 1;
      this.blocks[15].health = 1;
      this.blocks[15].powerUp = 1;
      this.blocks[26].health = 1;
      this.blocks[26].powerUp = 1;
      this.blocks[56].health = 1;
      this.blocks[56].powerUp = 2;
      this.blocks[69].health = 1;
      this.blocks[69].powerUp = 2;
      this.blocks[32].health = 1;
      this.blocks[32].powerUp = 2;
      this.blocks[37].health = 1;
      this.blocks[37].powerUp = 2;

      this.blocks.forEach(function (block) {
        block.initiate(block.posX, block.posY, 60, 20, block.powerUp);
      });
    }
  }]);

  return Pandakoid;
}();

var pandakoid = new Pandakoid();
pandakoid.start();
window.pandakoid = pandakoid;
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map