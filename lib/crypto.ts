import CryptoJS from "crypto-js";
import { env } from "./env";

export function encrypt(plain: string): string {
  return CryptoJS.AES.encrypt(plain, env.secret).toString();
}

export function decrypt(cipher: string): string {
  return CryptoJS.AES.decrypt(cipher, env.secret).toString(CryptoJS.enc.Utf8);
}