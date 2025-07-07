import React from 'react'
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeatureVideoSection from "@/components/FeatureVideoSection";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Cta from "@/components/cta";
import Categories from '@/components/Categories';
import TestimonialsAndPartners from '@/components/TestimonialsAndPartners';
import ContactSection from '@/components/ContactSection';

const Page = () => {
    return (
        <>
            <Hero/>
            <AboutSection/>
            <FeatureVideoSection/>
            <Stats/>
            <Services/>
            <Projects/>
            <Cta/>
            <Categories/>
            <TestimonialsAndPartners/>
            <ContactSection/>   
        </>
    )
}
export default Page
