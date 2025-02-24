import { Metadata } from 'next';
import StreamVideoProvider from '../../../providers/StreamClientProvider';
import React from 'react';

export const metadata: Metadata = {
    title: 'KAZOOM',
    description: 'Video calling app',
    icons: {
        icon: '/icons/logo.svg'
    }
};

const Rootlayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider >
        </main>
    );
};

export default Rootlayout;