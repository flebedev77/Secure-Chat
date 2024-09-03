import { privateDecrypt } from "crypto";

function decrypt(privateKey: string, encryptedData: Buffer | Uint8Array): string {
    return privateDecrypt(privateKey, encryptedData).toString("utf-8");
}

export { decrypt };