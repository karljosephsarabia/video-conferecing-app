"use client";
import { useState, useEffect } from "react";

type dateTime = {
    date: string;
    time: string
}

function UpdateTimeDate() {
    const [dateTime, setDateTime] = useState<dateTime>({ date: '', time: '' });

    useEffect(() => {
        const updateDateTime = () => {
            const currentDate = new Date();
            const formattedDate = (new Intl.DateTimeFormat('en-PH', { dateStyle: 'full' })).format(currentDate);
            const formattedTime = currentDate.toLocaleString('en-PH', { timeStyle: 'short' });

            setDateTime({ date: formattedDate, time: formattedTime });
        };

        updateDateTime();

        const interval = setInterval(updateDateTime, 100);

        return () => clearInterval(interval);
    }, []);

    return dateTime;
}

export default UpdateTimeDate;