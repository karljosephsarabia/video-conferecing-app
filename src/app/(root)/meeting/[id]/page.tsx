import MeetingStreamCall from "@/components/meetingStreamCall";


const Meeting = ({ params }: { params: { id: string; }; }) => {
  const { id } = params;

  return (
    <MeetingStreamCall id={id} />
  );
};

export default Meeting;