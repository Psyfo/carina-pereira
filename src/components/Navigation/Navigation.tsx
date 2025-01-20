import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className='items-center absolute top-[3rem] right-[1.5rem] hidden md:block'>
      <ul className='flex gap-[35px] font-inter font-bold text-white text-[16px]'>
        <li>
          <a href='#home'>Courses</a>
        </li>
        <li>
          <a href='#about'>Services</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
