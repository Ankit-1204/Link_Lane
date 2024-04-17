import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users");
                
                // Check if the response is not OK
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
                }

                const contentType = res.headers.get("content-type");
                
                // Check if the content type is JSON
                if (contentType && contentType.includes("application/json")) {
                    const data = await res.json();
                    setConversations(data);
                } else {
                    throw new Error("Response is not in JSON format");
                }
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
};

export default useGetConversations;
