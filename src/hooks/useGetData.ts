import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetData<T>(url: string | undefined) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();
        const { signal } = controller;
        setLoading(true);

        if (!!url) {
            axios
                .get<{ meals: T[] }>(url, { signal })
                .then(({ data }) => { if (!ignore) setData(data.meals) })
                .finally(() => { if (!ignore) setLoading(false) });
        }

        return () => {
            ignore = true;
            controller.abort();
        };
    }, [url]);

    return { loading, data, setData, setLoading };
}

