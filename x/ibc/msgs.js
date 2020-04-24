"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var ts_amino_1 = require("@node-a-team/ts-amino");
var Field = ts_amino_1.Amino.Field,
  DefineStruct = ts_amino_1.Amino.DefineStruct;
var tx_1 = require("../../core/tx");
var int_1 = require("../../common/int");
var big_integer_1 = __importDefault(require("big-integer"));
var utils_1 = require("./utils");
var MsgTransfer = /** @class */ (function(_super) {
  __extends(MsgTransfer, _super);
  function MsgTransfer(
    sourcePort,
    sourceChannel,
    destHeight,
    amount,
    sender,
    receiver
  ) {
    var _this = _super.call(this) || this;
    _this.sourcePort = sourcePort;
    _this.sourceChannel = sourceChannel;
    if (typeof destHeight === "string") {
      _this.destHeight = big_integer_1.default(destHeight);
    } else if (typeof destHeight === "number") {
      _this.destHeight = big_integer_1.default(destHeight);
    } else {
      _this.destHeight = big_integer_1.default(destHeight);
    }
    _this.amount = amount;
    _this.sender = sender;
    _this.receiver = receiver;
    return _this;
  }
  MsgTransfer.prototype.getSigners = function() {
    return [this.sender];
  };
  MsgTransfer.prototype.validateBasic = function() {
    if (this.destHeight.isNegative()) {
      throw new TypeError("Destination height should not be negative");
    }
    utils_1.validateIdentifier(this.sourcePort, 2, 20);
    utils_1.validateIdentifier(this.sourceChannel, 2, 20);
    for (var _i = 0, _a = this.amount; _i < _a.length; _i++) {
      var coin = _a[_i];
      if (coin.amount.lte(new int_1.Int(0))) {
        throw new Error("Send amount is invalid");
      }
    }
  };
  __decorate(
    [
      Field.String(0, {
        jsonName: "source_port"
      })
    ],
    MsgTransfer.prototype,
    "sourcePort",
    void 0
  );
  __decorate(
    [
      Field.String(1, {
        jsonName: "source_channel"
      })
    ],
    MsgTransfer.prototype,
    "sourceChannel",
    void 0
  );
  __decorate(
    [
      Field.Uint64(2, {
        jsonName: "dest_height"
      })
    ],
    MsgTransfer.prototype,
    "destHeight",
    void 0
  );
  __decorate(
    [
      Field.Slice(
        3,
        { type: ts_amino_1.Type.Defined },
        {
          jsonName: "amount"
        }
      )
    ],
    MsgTransfer.prototype,
    "amount",
    void 0
  );
  __decorate(
    [
      Field.Defined(4, {
        jsonName: "sender"
      })
    ],
    MsgTransfer.prototype,
    "sender",
    void 0
  );
  __decorate(
    [
      Field.String(5, {
        jsonName: "receiver"
      })
    ],
    MsgTransfer.prototype,
    "receiver",
    void 0
  );
  MsgTransfer = __decorate([DefineStruct()], MsgTransfer);
  return MsgTransfer;
})(tx_1.Msg);
exports.MsgTransfer = MsgTransfer;
//# sourceMappingURL=msgs.js.map
