import axios from "axios";
import { useState } from "react";

export default function useFetch<T>() {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T>();

    const fetch = (url: string) => {
        setLoading(true);
        axios.get<{ meals: T[] }>(url)
            .then(({ data }) => setData(data.meals[0]))
            .finally(() => setLoading(false));

    };

    return { loading, data, fetch };
}