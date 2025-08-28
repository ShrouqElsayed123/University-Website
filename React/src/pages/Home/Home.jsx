import React, { useEffect, useState } from 'react'
import Hero from '../../components/HomeComponent/Hero/Hero'
import StatsSection from '../../components/HomeComponent/StatsSection/StatsSection'
import BrandSlider from '../../components/HomeComponent/BrandSlider/BrandSlider'

// import GallerySection from '../../components/ImageGallery/ImageGallery'

import LatestNews from '../../components/HomeComponent/LatestNews/LatestNews'
import ImageSlider from '../../components/HomeComponent/ImageSlider/ImageSlider'

// import Timeline1 from '../../components/Timeline/Timeline1'
// import Vision from '../../components/Vision/Vision'
import VideoSection from '../../components/HomeComponent/VideoSection/VideoSection'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import ContactUs from '../ContactUsPage/ContactUsPage'
import UniversityFaculties from '../../components/HomeComponent/UniversityFaculties/UniversityFaculties'
import OpenApply from '../../components/HomeComponent/OpenApply/OpenApply'
import ImageGallery from '../../components/HomeComponent/ImageGallery/ImageGallery'
import HomeAbout from '../../components/HomeComponent/HomeAbout/HomeAbout'
import HomeFaculties from '../../components/HomeComponent/HomeFaculties/HomeFaculties'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import UniversityProgram from '../../components/AboutComponent/AboutUniversity/UniversityProgram'
import ContactUsPage from '../ContactUsPage/ContactUsPage'
import HomeContact from '../../components/HomeComponent/HomeContact/HomeContact'
import Testimonials from '../../components/Testimonials/Testimonials'
import FAQSection from '../../components/HomeComponent/FAQSection/FAQSection'


export default function Home() {
  const [sections, setSections] = useState([])
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const option = {
          url: `http://localhost:1337/api/home-contents?locale=${i18n.language}`,
          method: "GET"
        }
        const res = await axios.request(option);
        const data = res.data.data.map(item => ({
          id: item.id,
          title: item.title,
          content: item.content
        }));
        setSections(data)
        // console.log(res.data.data);

      }
      catch (error) {
        console.log(error);

      }
    }

    fetchData()
  }, [i18n.language])
  return (
    <div className="overflow-hidden">

      <Hero />
      <UniversityProgram />

      {
        sections.map(section => {
          switch (section.title) {
            case "about":
              return <HomeAbout key={section.id} content={section.content} />
            case "stats":
              return <StatsSection key={section.id} content={section.content} />
            case "video":
              return <VideoSection key={section.id} content={section.content} />
          }
        })
      }
      <LatestNews />


      {/* <OpenApply /> */}
      <ImageSlider />
      <HomeFaculties />
      <FAQSection />
      <Testimonials />

      <HomeContact />

      <BrandSlider />
      {/* 
      <ImageGallery />
      <UniversityFaculties />
       */}










    </div>
  )
}
