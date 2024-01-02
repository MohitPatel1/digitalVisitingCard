// src/App.jsx
import React from 'react';
import './App.css';

function ProfilePicture({ src }) {
  return <img className="profile-picture" src={src} alt="Profile" />;
}

function WallPicture({ src }) {
	return <img className="wall-picture" src={src}  alt="Wall-Image"/>;
  }

function ContactInfo({ icon, value }) {
  return (
    <div className="contact-info">
      <img src={icon}/>
      <span className="value">{value}</span>
    </div>
  );
}

function Footer({ address, website }) {
  return (
    <div>
      <div className="flex justify-center items-center gap-1"> 
	  	<img src='/icons/location.svg'/>
		<span className="value text-center">{address}</span>
	  </div>
	  <div className="flex justify-center items-center gap-1"> 
	  	<img src='/icons/website.svg'/>
		<span className="value">{website}</span>
	  </div>
    </div>
  );
}

function Card({ user }) {
  return (
    <div className="h-screen bg-slate-300">
	  <div className="flex flex-col w-full h-full items-center gap-1">			
	  <div className='relative mb-10'>
	 	<WallPicture src={user.wallPicture}/>
		<ProfilePicture src={user.profilePicture} />
		</div>
		<h1>{user.name}</h1>
		<h4>{user.title}</h4>
		{user.contactDetails.map((detail) => (
			<ContactInfo key={detail.icon} icon={detail.icon} value={detail.value} />
		))}
		<Footer address={user.address} website={user.website} />
	  </div>
    </div>
  );
}

function App() {
  const userData = {
    name: 'Krishna Agarwaal',
    title: 'CEO @ Smart Agent',
	wallPicture:'/smartAgent512x512.png',
    profilePicture: '/krishna.jpg',
    contactDetails: [
      { icon: '/icons/phone.svg', value: '+91 7575806994' },
	  { icon: '/icons/telephone.svg', value: '079 26920886' },
      { icon: '/icons/website.svg', value: 'hello@smartagent.one' },
    ],
    address: '290M New Cloth Market, Sarangpur Ahmedabad, 380002',
    website: 'www.smartagent.one',
  };

  return (
    <div className="App">
      <Card user={userData} />
    </div>
  );
}

export default App;
