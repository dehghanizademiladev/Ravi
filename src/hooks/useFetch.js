import { useEffect, useState } from "react";

function useFetch(URL) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        setError(null);
        setData([]);

        const fetchData = async () => {
            try {
                const res = await fetch(URL, {
                    signal: controller.signal,
                });

                if (!res.ok) {
                    throw new Error("خطایی در دریافت اطلاعات وجود دارد");
                }

                const data = await res.json();
                setData(data);
            } 
            catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } 
            finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [URL]);

    return { data, loading, error };
}

export default useFetch;