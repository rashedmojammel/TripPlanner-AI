import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "../auth";

const getSession = cache(async () => {
    return auth.api.getSession({ headers: await headers() });
});

export const getUserSession = async () => {
    const session = await getSession();
    return session?.user ?? null;
};