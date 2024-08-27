import React from 'react'
import Card from './Card.jsx'
import profileImg from '../assets/profileImg.jpeg'

const ProfileCard = ({handleProfile, handleFollow}) => {


  return (
    <section className=' bg-gradient-left dark:bg-gradient-left-dark border-t border-primary/10 dark:border-primary-dark/10'>
      <Card 
        image={profileImg}
        name={"ATHARVA"}
        surname={"Kulkarni"}
        subtitle={"Full Stack Developer"}
        description={"Java Full Stack, MERN Stack"}
        onProfile={handleProfile}
        onFollow={handleFollow}  
      />
    </section>
  )
}

export default ProfileCard