"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var msgs_1 = require("./msgs");
function registerCodec(codec) {
  codec.registerConcrete(
    "ibc/transfer/MsgTransfer",
    msgs_1.MsgTransfer.prototype
  );
}
exports.registerCodec = registerCodec;
//# sourceMappingURL=codec.js.map
