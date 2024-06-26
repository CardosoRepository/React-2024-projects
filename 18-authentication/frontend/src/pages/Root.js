import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "EXPIRED_TOKEN") {
            submit(null, { action: "/logout", method: "post" });
        }

        const tokenDuration = getTokenDuration();

        setTimeout(() => {
            submit(null, { action: "/logout", method: "post" }); // No value is passed and /logou form is submitted
        }, tokenDuration);
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
