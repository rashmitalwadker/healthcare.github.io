import { useState, useEffect } from 'react'
import  {Navigation}  from './components/Navigation'
import  {Header}  from './components/Header'
import {Features}  from './components/Features'
import  {About}  from './components/About';
import  {Services}  from './components/Services'
import  {Gallery}  from './components/Gallery';
import  {Testimonials}  from './components/Testimonials'
import  {Footer}  from './components/Footer'
import JsonData from './data/data.json'
 import './App.css';
// import SmoothScroll from 'smooth-scroll'

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// })

 const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Footer />
    </div>
  )
}

export default App;