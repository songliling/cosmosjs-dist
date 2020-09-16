"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var msgs_1 = require("./msgs");
function registerCodec(codec) {
  codec.registerConcrete(
    "wasm/MsgExecuteContract",
    msgs_1.MsgExecuteContract.prototype
  );
}
exports.registerCodec = registerCodec;
//# sourceMappingURL=codec.js.map
