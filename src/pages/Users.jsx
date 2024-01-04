import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { data } from '../data/data';
import { isPageScrollable } from './Company';
import ShowContactInfo from '../components/ShowContactInfo';

const Users = () => {
  const [scrollable, setScrollable] = useState(false);

  let { companyId, userId } = useParams();
  let companyData = data.find((obj) => obj.url === companyId);
  let userData = companyData.users.find((obj) => obj.id === userId);
  const navigate = useNavigate();

  // to check for root directory
  if (Object.keys(useParams()).length === 0) {
    companyData = data.find((obj) => obj.url === '');
  }

  useEffect(() => {
    setScrollable(isPageScrollable());
    if (!companyData || !userData) {
      navigate('/');
    }
  }, []);

  if (!companyData || !userData) {
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
            src={userData.profileIcon}
            alt='profile-icon'
            className='w-[7rem] rounded-full absolute bottom-6 mx-4 p-1 bg-slate-600 shadow-xl'
          />
          <div className='my-auto'>
            <p className='text-3xl font-bold text-white ml-[8.5rem]'>
              {userData.name}
            </p>
            <p className='text-xl leading-4 mt-2 font-semibold ml-[8.5rem] text-gray-300'>
              {userData.role}
            </p>
          </div>
        </div>
      </div>

      <div className='m-4'>
        <h1 className='text-3xl text-gray-200 font-semibold'>
          {companyData.name}{' '}
          <span className='text-sm text-gray-300'>(Company)</span>
        </h1>
      </div>

      <div className='border-b border-gray-500 my-'></div>

      <div className='text-2xl font-semibold text-gray-200 m-4'>
        Contact Details
      </div>

      <ShowContactInfo
        content={userData.phone || companyData.contactDetails[0].value}
        url={userData.phone || companyData.contactDetails[0].value}
        iconUrl='/icons/phone.png'
      />
      <ShowContactInfo
        content={companyData.contactDetails[1].value}
        url={companyData.contactDetails[1].value}
        iconUrl='/icons/landline.png'
      />
      <ShowContactInfo
        content={userData.email || companyData.contactDetails[2].value}
        url={userData.email || companyData.contactDetails[2].value}
        iconUrl='/icons/gmail.png'
      />
      <ShowContactInfo
        content={companyData.address}
        url={companyData.address}
        iconUrl='/icons/location.png'
      />
      <ShowContactInfo
        content={companyData.website}
        url={
          companyData.website.startsWith('http')
            ? companyData.website
            : `https://${companyData.website}`
        }
        iconUrl='/icons/website.png'
      />

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

export default Users;
