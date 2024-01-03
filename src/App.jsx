// src/App.jsx
import React from 'react';
import './App.css';

function Image({src, size}){
	const height = (size == 'small') ? 24 : 74;
	return (
		<img className='flex justify-between mr-2' src={src} height={height} width={height} />
	)
}

function Link({link, type=''}){	
	let url = ''
	console.log(type);
	switch (type) {
		case 'mail':
			url = 'mailto:' + link;
			break;
		default:
			url = 'https://' + link;
			break;
	}	
	if(type == 'mail'){
		
	}else{
		
	}
	return <a className="value" href={`${url}`} target='_blank'>{link}</a>
		 
}

function ProfilePicture({ src }) {
  return <img className="profile-picture" src={src} alt="Profile" />;
}

function WallPicture({ src }) {
	return <img className="wall-picture" src={src}  alt="Wall-Image"/>;
  }

function ContactInfo({ icon, value, type }) {
	console.log(type)
  return (
    <div className="contact-info">		
      <Image src={icon} size='small' />
	  {console.log(value)}Link
      <Link className="value" link={value} type={type}>{value}</Link>
    </div>
  );
}

function Socials({socials}){
	console.log(socials)
	return(
		<div className='flex gap-1 space-between p-1'>
			{socials.map(({icon,value}) =>  ( 	
				<Image src={icon} href={value} key={icon} size='regular'/>
			))}
		</div>
	)
}

function Footer({ address, website }) {
  return (
    <div>
      <div className="flex space-around gap-1"> 
	  	<Image src='/icons/location.png' size='small'/>
		<span className="value text-center">{address}</span>
	  </div>
	  <div className="flex justify-center items-center gap-1"> 
	  	<Image src='/icons/website.png' size='small'/>
		{console.log(`${website}`)}
		<Link className="value" link={website} type=''>{website}</Link>
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
			<ContactInfo key={detail.icon} icon={detail.icon} type={detail.type} value={detail.value} />
		))}
		<Footer address={user.address} website={user.website} />
		<Socials socials={user.socials}/>	
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
      { type:'phone', icon: '/icons/phone.png', value: '+91 7575806994' },
	  { type:'landLine', icon: '/icons/landline.png', value: '079 26920886' },
      { type:'mail', icon: '/icons/gmail.png', value: 'hello@smartagent.one' },
    ],
	socials: [
	  { icon: '/icons/whatsapp.png', value: 'wa.me/7575806994' },
	  { icon: '/icons/twitter.png', value: 'https://x.com/krishnaa404' },
	  { icon: '/icons/linkedin.png', value: 'linkedin.com/in/krishna-teziapp' },
	  { icon: '/icons/instagram.png', value: 'wa.me/7575806994' },

	],
    address: '290M New Cloth Market, Sarangpur Ahmedabad, 380002',
    website: 'smartagent.one',
  };

  return (
    <div className="App">
      <Card user={userData} />
    </div>
  );
}

export default App;
