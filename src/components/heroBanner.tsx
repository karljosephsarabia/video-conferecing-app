"use client"
import UpdateTimeDate from "@/hooks/updateTimeDate";

function HeroBanner() {
    const dateTime = UpdateTimeDate();

  return (
    <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30 PM</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{dateTime.time}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{dateTime.date}</p>
          </div>
        </div>
      </div>
  )
}

export default HeroBanner