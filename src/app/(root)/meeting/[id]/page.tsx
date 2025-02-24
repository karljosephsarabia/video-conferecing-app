"use client"
import MeetingStreamCall from "@/components/meetingStreamCall";
import { useParams } from "next/navigation";

type IdType = {
  id: string;
};

const Meeting = () => {
  const { id }: IdType = useParams();

  return (
    <MeetingStreamCall id={id} />
  );
};

export default Meeting;