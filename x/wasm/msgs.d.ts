import { Codec } from "@node-a-team/ts-amino";
import { Msg } from "../../core/tx";
import { AccAddress } from "../../common/address";
import { Coin } from "../../common/coin";
declare class RawMessage {
  raw: Uint8Array;
  constructor(raw: Uint8Array);
  marshalJSON(): string;
}
export declare class MsgExecuteContract extends Msg {
  sender: AccAddress;
  contract: AccAddress;
  msg: RawMessage;
  sentFunds: Coin[];
  constructor(
    sender: AccAddress,
    contract: AccAddress,
    msg: object,
    sentFunds: Coin[]
  );
  getSigners(): AccAddress[];
  validateBasic(): void;
  getSignBytes(codec: Codec): Uint8Array;
}
export {};
