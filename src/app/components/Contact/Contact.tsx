import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id='contact' className='px-[30px] md:px-[60px] py-[50px] md:flex'>
      <div className='md:w-[50%]'>
        <h1 className='font-tan-ashford font-bold text-[19px]'>get in touch</h1>
      </div>
      <form className='md:w-[50%]'>
        <div className='md:w-full md:flex gap-8'>
          <div className='form-group flex mt-8 md:mt-0 flex-col flex-grow'>
            <label className='font-inclusive text-[1rem]' htmlFor='firstName'>
              First Name:
            </label>
            <input
              className='border border-black rounded-full mt-4 px-4 py-2 bg-transparent'
              type='text'
              id='firstName'
              name='firstName'
              required
            />
          </div>
          <div className='form-group flex flex-col mt-8 md:mt-0 flex-grow'>
            <label className='font-inclusive text-[1rem]' htmlFor='lastName'>
              Last Name:
            </label>
            <input
              className='border border-black rounded-full mt-4 px-4 py-2 bg-transparent'
              type='text'
              id='lastName'
              name='lastName'
              required
            />
          </div>
        </div>
        <div className='form-group flex flex-col mt-8'>
          <label className='font-inclusive text-[1rem]' htmlFor='email'>
            Email:
          </label>
          <input
            className='border border-black rounded-full mt-4 px-4 py-2 bg-transparent'
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div className='form-group flex flex-col mt-8'>
          <label className='font-inclusive text-[1rem]' htmlFor='message'>
            Message:
          </label>
          <textarea
            className='h-[12rem] border border-black rounded-md mt-4 px-4 py-2 bg-transparent'
            id='message'
            name='message'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className=' bg-cpPink font-inclusive text-[16.5px] leading-[1.5] px-[35px] py-[8px] mb-[80px] border border-black rounded-full mt-12'
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
