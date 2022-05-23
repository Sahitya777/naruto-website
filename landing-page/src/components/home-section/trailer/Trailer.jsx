import { useRef,useEffect } from "react"
import {bg3, trailerImg} from "../../../assets/images"
import HomeSection from "../HomeSection"
import './trailer.scss'
const Trailer=props=> {

    const iframeref=useRef(null)
    useEffect(() => {
        const height = iframeref.current.offsetWidth * 9 / 16 + 'px'
        iframeref.current.setAttribute('height', height)
    }, [])
  return (
    <HomeSection
    className={`trailer ${props.isActive ? 'active' : ''}`}
    contentClassName="overlay trailer_content"
    bgImage={bg3}
    >
        <div className="trailer_content_img">
            <img src={trailerImg} alt=""/>
        </div>
        <div className="trailer_content_info">
            <div className="title">
                <span>
                    Compete With
                </span>
                <h2 className="main-color">Friends</h2>
            </div>
            <div className="video">
                <iframe
                    ref={iframeref}
                    width="100%"
                    title="trailer"
                    src="https://www.youtube.com/embed/KePpQ8kAJnI"
                >

                </iframe>
            </div>
        </div>
    </HomeSection>
  )
}

export default Trailer