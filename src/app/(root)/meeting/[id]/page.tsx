import MeetingStreamCall from "@/components/meetingStreamCall";
import { FC } from "react";


interface MeetingProps {
  params: { id: string; };
}

const Meeting: FC<MeetingProps> = async ({ params }) => {
  const { id } = params;

  return (
    <MeetingStreamCall id={id} />
  );
};

export default Meeting;