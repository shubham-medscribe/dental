import React from 'react'
import FAQ from '../components/faq/faq'
import BookAvailable from '../components/BookAvailable/BookAvailable'
import Footer from '../components/footer/Footer'
import EasyDental from '../components/EasyDental/EasyDental'
import DentalpriceDown from '../components/DentalpriceDown/DentalpriceDown'
import SaveOffer from '../components/SaveOffer/SaveOffer'
import LocationAndOfficeHour from '../components/LocationAndOfficeHour/LocationAndOfficeHour'
import Navbar from '../components/navbar/navbar'
import ReviewSlider from '../components/reviewSlider/reviewSlider'

export default function Home() {
  return (
   <div className='w-full'>
    <Navbar/>
    <LocationAndOfficeHour/>
    <SaveOffer/>
    <ReviewSlider/>
    <DentalpriceDown/>
    <EasyDental/>
    <FAQ />
    <BookAvailable />
    <Footer/>
   </div>
  )
}
