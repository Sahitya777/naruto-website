
import './welcome.scss'
import HomeSection from '../HomeSection'
import {
    bg1
} from "../../../assets/images"
const Welcome=props=> {
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
          Team up with friends and test your skills in 5v5 MOBA combat. All the high-skill competition you crave, designed especially for mobile and console with revamped controls and streamlined matches.Explore the living universe of Runeterra through lore, comics, games, and more. Then dive into the community of gamers, cosplayers, musicians, and content creators who are waiting for you to join them.
          </div>
          <div className='btns m-t-4'>
            <button>PLAY NOW</button>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
      <div className='welcome_img relative'>

      </div>
    </HomeSection>
  )
}

export default Welcome