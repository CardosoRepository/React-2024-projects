import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);
    const resData = await response.json();

    if (!response.ok) {
        throw new Error(
            resData.message || "Something went wrong, failed to send request."
        );
    }

    return resData;
}

export function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = useCallback(
        async function sendRequest(bodyData) {
            setIsLoading(true);
            try {
                const data = await sendHttpRequest(url, {
                    ...config,
                    body: bodyData,
                });
                setData(data);
            } catch (error) {
                setError(error?.message || "Failed to fetch data.");
            }
            setIsLoading(false);
        },
        [url, config]
    );

    useEffect(() => {
        if (
            (config && (config.method === "GET" || !config.method)) ||
            !config
        ) {
            sendRequest();
        }
    }, [sendRequest, config]);

    function clearData() {
        setData(initialData);
    }

    return { data, isLoading, error, sendRequest, clearData };
}
