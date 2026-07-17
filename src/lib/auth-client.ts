import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { adminClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
    plugins: [
        inferAdditionalFields({
            user: { userRole: { type: "string" } },
        }),
        adminClient(),
    ],
});

export const { signIn, signUp, signOut, useSession } = authClient;