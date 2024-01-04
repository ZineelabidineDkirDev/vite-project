import React from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import profileData from './data'

const Gallery = () => {
    
  return (
    <div className='App'>
        <h1>Profils Gallery</h1>
        <h3 style={{border:'1px solid #333',padding:'2px 6px',width:'20%',margin:'50px 40%'}}>Team N° 01</h3>
        
       <div className='Apps'>
       {profileData.map((profile) => (
        <div className="row">
            
                <ProfileCard key={profile.id} {...profile} />
            
        </div>
        ))}
       </div>
       <code>Tp1: JSX - Mr. BOURKHA Hamza</code>
    </div>
  )
}

export default Gallery