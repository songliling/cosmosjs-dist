import { BaseAccount } from "../common/baseAccount";
import { Bech32Config } from "./bech32Config";
import { AxiosInstance } from "axios";
export declare function queryAccount(bech32Config: Bech32Config, rpcInstance: AxiosInstance, account: string | Uint8Array): Promise<BaseAccount>;
