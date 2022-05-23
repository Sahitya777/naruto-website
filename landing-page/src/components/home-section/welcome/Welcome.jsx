import Button from '../../button/Button'
import './welcome.scss'
import HomeSection from '../HomeSection'
import {
    bg1,
    champAshe,
    champAhri,
    champGaren,
    distortion
} from "../../../assets/images"
import hoverEffect from "hover-effect"
import { useEffect } from 'react'
const chamImgs=[champAshe,champAhri,champGaren]
const Welcome=props=> {

  useEffect(() => {
    const welcomeImgs = document.querySelectorAll('#welcome_img_slide > img')
    let animates = []
    welcomeImgs.forEach((item, index) => {
        let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
        let animation = new hoverEffect({
            parent: document.querySelector('#welcome_img_slide'),
            intensity: 0.4,
            image1: item.getAttribute('src'),
            image2: nextImg,
            displacementImage: distortion,
            hover: false
        })
        animates.push(animation)
    })
    welcomeImgs.forEach(e => e.remove())

    

    const autoImageSlide = () => {
        let currItem = 0
        let prevItem = currItem;
        currItem = (currItem + 1) % animates.length

        if (!document.hidden) {
            // animates[prevItem].next()
        }

        setTimeout(() => {
            let canvas = document.querySelectorAll('#welcome_img_slide > canvas')
            document.querySelector('#welcome_img_slide').appendChild(canvas[0])
            // animates[prevItem].previous()
        }, 3000);
    }

    setInterval(autoImageSlide, 3000);
}, [])


  
  return (
    <HomeSection className={`welcome ${props.isActive ? 'active':''}`}
        contentClassName="overlay welcome_content"
        bgImage={bg1}
    >
      <div className='welcome_info relative'>
        <div className='welcome_info_content'>
          <div className='title'>
            <span>Wake Up To</span>
            <h2 className='main-color'>Reality</h2>
          </div>
          <div className='description m-t-4'>
          Naruto (Japanese: NARUTOナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto's pre-teen years, and the second in his teens. 
          </div>
          <div className='btns m-t-4'>
            <Button className='btn-main'>PLAY NOW</Button>
            <Button className='btn-second'>GET STARTED</Button>
          </div>
        </div> 
      </div>
      <div className='welcome_img relative'>
        <div className='welcome_img_slide' id='welcome_img_slide'>
          {
            chamImgs.map((item,index)=>(
              <img src={item} key={index}/>
            ))
            
          }
        </div>
      </div>
    </HomeSection>
  )
}

export default Welcome;