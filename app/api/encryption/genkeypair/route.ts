import { genKeyPair } from "./keypair";

export async function GET(req: Request) {
    return Response.json(genKeyPair());
}