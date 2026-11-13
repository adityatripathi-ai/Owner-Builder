import React from 'react'
import { MotionConfig } from "framer-motion";
import Hero from '../components/sections/contact/Hero'
import ContactSection from '../components/sections/contact/ContactSection'
import NextSteps from '../components/sections/contact/NextSteps'
import CtaBand from '../components/sections/contact/CtaBand'
import { ScrollProgress } from "../components/common/Animations";

const ContactUs = () => {
  return (
    
    <MotionConfig reducedMotion='user'>

     <ScrollProgress/>
      <Hero/>
      <ContactSection/>
      <NextSteps/>
      <CtaBand/>
      </MotionConfig>
    
  )
}

export default ContactUs
