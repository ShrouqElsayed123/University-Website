import React from 'react';
import img1 from '../../../assets/images/slider-image-3.jfif';
// import img2 from '../../../assets/images/apply.jpg'
import Countdown from './Countdown';
export default function OpenApply() {
  return (
    <div
      className="w-full bg-cover bg-center relative h-[400px] flex items-center text-white justify-center my-home-section-margin p-home-section-padding"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Outer Border */}
      <div className="relative z-10 w-full md:w-1/2 p-2 md:p-4">
        <div className="border-2 border-white rounded-[40px] p-2 h-full">
          {/* Inner Border */}
          <div className=" border-2 border-white rounded-[35px] p-6 md:p-8 h-full">
            <div className="flex-1 p-4 md:p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Apply Open Now
              </h2>
              <p className="text-white mt-2">Please note that priority is given to the university based on the priority of submitting papers.</p>

              <Countdown />

              <div className='flex items-center justify-center w-full'>
                <a
                  href="https://mnulms.menofia.education/admission/student/register.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-transparent flex items-center justify-center gap-2 text-white px-6 py-2 border border-white rounded-full rounded-bl-none hover:bg-mainColor hover:border-transparent transition"
                >
                  <span>Apply Now</span>
                  <span>→</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
