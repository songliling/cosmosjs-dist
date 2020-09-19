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
}
export declare class MsgInstantiateContract extends Msg {
  sender: AccAddress;
  admin: AccAddress | undefined;
  codeId: number;
  label: string;
  initMsg: RawMessage;
  initFunds: Coin[];
  constructor(
    sender: AccAddress,
    admin: AccAddress | undefined,
    codeId: number,
    label: string,
    initMsg: object,
    initFunds: Coin[]
  );
  getSigners(): AccAddress[];
  validateBasic(): void;
}
export {};
