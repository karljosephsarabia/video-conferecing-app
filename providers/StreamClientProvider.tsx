"use client";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { tokenProvider } from "@/../actions/stream.actions";
import Loader from "@/components/loader";

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
//   const userId = "user-id";
//   const token = "authentication-token";
//   const user: User = { id: userId };

// const client = new StreamVideoClient({ apiKey, user, token });
// const call = client.call("default", "my-first-call");
// call.join({ create: true });

const StreamVideoProvider = ({ children }: { children: React.ReactNode; }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const { user, isLoaded } = useUser();

    useEffect(() => {

        if (!isLoaded || !user) return;
        if (!API_KEY) throw new Error('Stream API key missing');

        const client = new StreamVideoClient({
            apiKey: API_KEY,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider
        });

        setVideoClient(client);
    }, [user, isLoaded]);

    if (!videoClient) return <Loader />;

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};

export default StreamVideoProvider;