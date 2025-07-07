import Banner from '@/components/Banner'
import OurProfessionalSection from '@/components/OurProfessionalSection'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner title='OUR TEAM' subtitle='OUR TEAM' image='https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg' />
        <OurProfessionalSection/>
        <Projects/>
    </div>
  )
}
export default page