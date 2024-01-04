import React from 'react';

const ShowContactInfo = ({ content, url, iconUrl }) => {
  return (
    <>
      <div className='flex gap-3 ml-4 text-lg text-gray-300 mb-1 justify-start hover:text-white hover:underline'>
        <img src={iconUrl} alt='icon' className='h-6 my-auto' />
        <a href={url} target='_blank'>
          {content}
        </a>
      </div>
      <div className='border-b border-gray-700 my-2 mx-3'></div>
    </>
  );
};

export default ShowContactInfo;
