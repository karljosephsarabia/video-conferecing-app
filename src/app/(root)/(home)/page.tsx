import HeroBanner from "@/components/heroBanner";
import MeetingTypeList from "@/components/meetingTypeList";

const Home = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <HeroBanner />
      <MeetingTypeList />
    </section>
  );
};

export default Home;