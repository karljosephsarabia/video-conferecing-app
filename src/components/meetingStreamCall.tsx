'use client';
import MeetingSetup from '@/components/meetingSetup';
import MeetingRoom from '@/components/meetingRoom';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';
import { useGetCallById } from '@/hooks/useGetCallById';
import Loader from '@/components/loader';
import { useUser } from '@clerk/nextjs';

function MeetingStreamCall({ id }: { id: string | string[]; }) {
    const { user, isLoaded } = useUser();
    const [isSetupComplete, setIsSetupComplete] = useState(false);
    const { call, isCallLoading } = useGetCallById(id);

    if (!isLoaded || isCallLoading) return <Loader />;

    return (
        <main className='h-screen w-full'>
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ?
                        <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
                        :
                        <MeetingRoom />}
                </StreamTheme>
            </StreamCall>
        </main>
    );
}

export default MeetingStreamCall;