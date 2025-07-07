import React from "react"
import Banner from "@/components/Banner"
import AboutSection from "@/components/AboutSection"
import HowWeDoSection from "@/components/HowWeDoSection"
import FunctionalityFirstSection from "@/components/FunctionalityFirstSection"
import DesignProcessSection from "@/components/DesignProcessSection"
import WhyChooseUsSection from "@/components/WhyChooseUsSection"
import ConceptToFunctionSection from "@/components/ConceptToFunctionSection"
import TestimonialsAndPartners from "@/components/TestimonialsAndPartners"

const page = () => {
  return (
    <div>
        <Banner title="ABOUT US" subtitle="ABOUT US" image="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg"/>
        <AboutSection/>
        <HowWeDoSection/>
        <FunctionalityFirstSection/>
        <DesignProcessSection/>
        <WhyChooseUsSection/>
        <ConceptToFunctionSection/>
        <TestimonialsAndPartners/>
    </div>
  )
}
export default page