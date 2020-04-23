import { BaseAccount } from "../common/baseAccount";
import { AxiosInstance } from "axios";
export declare function queryAccount(
  rpcInstance: AxiosInstance,
  account: string | Uint8Array,
  bech32PrefixAccAddr?: string
): Promise<BaseAccount>;
