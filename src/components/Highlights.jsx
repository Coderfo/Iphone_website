import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'


const Highlghts = () => {

  
    useGSAP(()=>{
      gsap.to('#title', {Opacity: 1, y: 0})
      gsap.to('.link', {opacity: 1, y: 0, duration: 1, stagger: .25})
    },[])
  


  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc' >
      <div className='mb-12 w-full md:flex items-end justify-between'>
        <h1 id='title' className='section-heading'>
          Get the highlights.
        </h1>
        <div className='flex flex-wrap items-end gap-5'>
          <p className='link '>Watch the film</p>
          <img src={watchImg} alt="watch" className='ml-2' />

          <p className='link '>Watch the event</p>
          <img src={rightImg} alt="right" className='ml-2' />

        </div>
      </div>

      <VideoCarousel/>

      
    </section>
  )
}

export default Highlghts