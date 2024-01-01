// src/App.jsx

import React from 'react';
import './App.css';

function ProfilePicture({ src }) {
  return <img className="profile-picture" src={src} alt="Profile" />;
}

function WallPicture({ src }) {
	return <img className="wall-picture" src={src}  alt="Wall-Image"/>;
  }

function ContactInfo({ label, value }) {
  return (
    <div className="contact-info">
      <span className="label">{label}:</span>
      <span className="value">{value}</span>
    </div>
  );
}

function Footer({ address, website }) {
  return (
    <div className="footer">
      <div>{address}</div>
      <div>{website}</div>
    </div>
  );
}

function Card({ user }) {
  return (
    <div className="h-screen bg-blue-300">
	  <div className="flex flex-col w-full h-full justify-center items-center gap-1 text-slate-100">			
	 	<WallPicture src={user.WallPicture}/>
		<ProfilePicture src={user.profilePicture} />
		<h1>{user.name}</h1>
		<p>{user.title}</p>
		{user.contactDetails.map((detail) => (
			<ContactInfo key={detail.label} label={detail.label} value={detail.value} />
		))}
		<Footer address={user.address} website={user.website} />
	  </div>
    </div>
  );
}

function App() {
  const userData = {
    name: 'Peter Michael',
    title: 'Professional Pastry Chef',
	wallPicture:'/smartAgent512x512.png',
    profilePicture: '/smartAgent512x512.png', // Replace with actual image path
    contactDetails: [
      { label: 'Mobile', value: '123-456-7890' },
      { label: 'Email', value: 'peter@grandissimocafe.com' },
    ],
    address: 'Grandissimo Cafe, San Francisco, CA',
    website: 'www.grandissimocafe.com',
  };

  return (
    <div className="App">
      <Card user={userData} />
    </div>
  );
}

export default App;
