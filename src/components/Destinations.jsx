import React from 'react';

import borabora1 from '../assets/borabora1.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives1 from '../assets/maldives1.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';

const Destinations = () => {
  return (
    <section className='container px-4 flex flex-col items-center my-16'>
      <h2 className='mb-4'>All-inclusive Resorts</h2>
      <p className='mb-8 font-bold'>On the Caribbean's Best Beaches</p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        <div className='col-span-2 md:col-span-3 md:row-span-2'>
          <img
            src={borabora1}
            alt='borabora1'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={borabora2}
            alt='borabora2'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={maldives1}
            alt='maldives1'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={maldives2}
            alt='maldives2'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={maldives3}
            alt='maldives1'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
