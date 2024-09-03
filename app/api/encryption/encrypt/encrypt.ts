import { publicEncrypt } from "crypto";

function encrypt(publicKey: string, data: string): string {
    return publicEncrypt(publicKey, Buffer.from(data)).toString("hex");
}

export { encrypt };