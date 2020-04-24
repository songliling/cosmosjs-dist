import { Msg } from "../../core/tx";
import { AccAddress } from "../../common/address";
import { Coin } from "../../common/coin";
import bigInteger from "big-integer";
export declare class MsgTransfer extends Msg {
  sourcePort: string;
  sourceChannel: string;
  destHeight: bigInteger.BigInteger;
  amount: Coin[];
  sender: AccAddress;
  receiver: string;
  constructor(
    sourcePort: string,
    sourceChannel: string,
    destHeight: bigInteger.BigNumber,
    amount: Coin[],
    sender: AccAddress,
    receiver: string
  );
  getSigners(): AccAddress[];
  validateBasic(): void;
}
