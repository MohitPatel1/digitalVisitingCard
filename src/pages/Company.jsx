import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { data } from '../data/data';

export function isPageScrollable() {
  return (
    document.documentElement.scrollHeight >
      document.documentElement.clientHeight ||
    document.body.scrollHeight > document.body.clientHeight
  );
}

const Company = () => {
  const [scrollable, setScrollable] = useState(false);

  let { companyId } = useParams();
  let companyData = data.find((obj) => obj.url === companyId);
  const navigate = useNavigate();

  // to check for root directory
  if (Object.keys(useParams()).length === 0) {
    companyData = data.find((obj) => obj.url === '');
  }

  useEffect(() => {
    setScrollable(isPageScrollable());
    if (!companyData) {
      navigate('/');
    }
  }, []);

  if (!companyData) {
    return <></>;
  }

  return (
    <div className='min-h-screen text-gray-100'>
      {/* bg-image */}
      <div>
        <div className='overflow-hidden'>
          <img
            src={companyData.wallPicture}
            alt='background-image'
            className='w-screen'
          />
        </div>

        {/* image */}
        <div className='flex w-full flex-col relative justify-start min-h-28 -mt-1 bg-slate-800 shadow-2xl align-middle'>
          <img
            src={companyData.logo}
            alt='logo'
            className='w-[7rem] rounded-full absolute bottom-6 shadow-xl mx-4 p-1 bg-slate-600'
          />
          <div className='my-auto'>
            <p className='text-3xl font-bold text-white ml-[8.5rem]'>
              {companyData.name}
            </p>
            <p className='text-xl leading-4 mt-2 font-semibold ml-[8.5rem] text-gray-300'>
              {companyData.title}
            </p>
          </div>
        </div>
      </div>

      <div className='m-4'>
        <h1 className='text-3xl text-gray-200 font-semibold'>
          {companyData.name}
        </h1>
        {/* -- */}
        <p className='text-lg text-gray-400 my-2 leading-5'>
          {companyData.about}
        </p>
      </div>

      <div className='border-b border-gray-500 my-4'></div>

      <div className='text-2xl font-semibold text-gray-200 m-4'>
        Contact Details
      </div>
      {companyData.contactDetails.map((item) => (
        <div key={item.value}>
          <div className='flex text-lg text-gray-300 justify-start ml-4'>
            <div className='flex gap-3 mb-1 justify-start hover:text-white hover:underline'>
              <img src={item.icon} alt='icon' className='h-6 my-auto' />
              <a href={item.value} target='_blank' type={item.type}>
                {item.value}
              </a>
            </div>
          </div>
          <div className='border-b border-gray-700 my-2 mx-3'></div>
        </div>
      ))}

      <div className='text-lg text-gray-300 flex justify-start ml-4 gap-3 mx-4'>
        <img src='/icons/location.png' className='h-6 my-auto' />
        <a
          href={`https://www.google.com/maps/place/${encodeURIComponent(
            companyData.address
          )}`}
          className='text-lg hover:text-sky-500 line-clamp-2 leading-5 my-2 cursor-pointer hover:underline'
          target='_blank'
        >
          {companyData.address}
        </a>
      </div>

      <div className='border-b border-gray-700 my-2 mx-3'></div>

      <div className='text-lg text-gray-300 flex justify-start gap-3 mx-4'>
        <img src='/icons/website.png' className='h-6 my-auto' />
        <a
          href={
            companyData.website.startsWith('http')
              ? companyData.website
              : `https://${companyData.website}`
          }
          target='_blank'
          rel=''
          className='hover:underline hover:text-white'
        >
          {companyData.website}
        </a>
      </div>
      <div className='border-b border-gray-700 my-2 mx-3'></div>

      {/* users */}
      <div className='ml-4 my-4'>
        <h1 className='text-2xl font-semibold text-gray-200'>Users</h1>
        {companyData.users.map((user) => (
          <Link
            to={`${user.id}`}
            className='flex flex-col gap-4 my-3'
            key={user.id}
          >
            <div className='flex gap-2'>
              <img
                src={user.profileIcon}
                className='rounded-full h-10 my-auto mx-2'
                alt=''
              />
              <div className='flex flex-col'>
                <p className='text-lg my-auto font-medium min-w-36'>
                  {user.name}
                </p>
                <p className='text-lg my-auto leading-5 line-clamp-1 text-gray-300'>
                  ({user.role})
                </p>
              </div>
            </div>
            <div className='border-b mr-4 border-gray-600'></div>
          </Link>
        ))}
      </div>

      {/* footer-social links */}
      <footer
        className={`bg-gray-900 w-screen ${
          scrollable ? 'sticky bottom-0' : 'absolute bottom-0'
        } `}
      >
        <div className='flex justify-center gap-4'>
          {companyData.socials.map((item) => (
            <div className='my-4' key={item.icon}>
              <a
                href={
                  item.value.startsWith('http')
                    ? item.value
                    : `https://${item.value}`
                }
                target='_blank'
                rel=''
              >
                <img src={item.icon} className='h-10' alt='icon' />
              </a>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Company;
