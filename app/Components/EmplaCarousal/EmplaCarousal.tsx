import * as React from "react"
import "./styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import gym from "../../../public/Air Balloon 1.svg"
import handmade from "../../../public/Sample 8.svg"
import camera from "../../../public/Konica Cam.svg"
import music from "../../../public/Sample 25.svg"
import manPlaying from "../../../public/04 Man Playing Trumpet Musical Instrument.svg"




export default function KeenSlider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true ,
    mode: "free-snap", 
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  return (
    <div ref={ref} className="keen-slider my-3">
      <div className="keen-slider__slide number-slide1"> <Image className="category-img" src={manPlaying} alt="drawing" width={300}  /> <div className="position-absolute overlay"> <h2 className="text-center">Music</h2> <p className="text-center" style={{fontSize:12}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut vitae blanditiis rem explicabo est delectus similique sequi? Culpa repudiandae magni, quisquam est provident delectus laudantium tempora, quam ipsum, suscipit dicta?</p></div>  </div>
      <div className="keen-slider__slide number-slide2"><Image  className="category-img" src={gym} alt="drawing" width={300}  /> <div className="position-absolute overlay"> <h2 className="text-center">Workout</h2> <p className="text-center" style={{fontSize:12}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut vitae blanditiis rem explicabo est delectus similique sequi? Culpa repudiandae magni, quisquam est provident delectus laudantium tempora, quam ipsum, suscipit dicta?</p></div></div>
      <div className="keen-slider__slide number-slide3"><Image className="category-img" src={handmade} alt="drawing" width={500}  />
      <div className="position-absolute overlay"> <h2 className="text-center">Handmade</h2> <p className="text-center" style={{fontSize:12}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut vitae blanditiis rem explicabo est delectus similique sequi? Culpa repudiandae magni, quisquam est provident delectus laudantium tempora, quam ipsum, suscipit dicta?</p></div>
      </div>
      <div className="keen-slider__slide number-slide4"><Image className="category-img" src={camera} alt="drawing" width={580}  />
      
      <div className="position-absolute overlay text-dark"> <h2 className="text-center">Photography</h2> <p className="text-center" style={{fontSize:12}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut vitae blanditiis rem explicabo est delectus similique sequi? Culpa repudiandae magni, quisquam est provident delectus laudantium tempora, quam ipsum, suscipit dicta?</p></div>
      </div>
      <div className="keen-slider__slide number-slide5"><Image className="category-img" src={music} alt="drawing" width={500}  />
      
      <div className="position-absolute overlay text-dark"> <h2 className="text-center">Drawing</h2> <p className="text-center" style={{fontSize:12}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut vitae blanditiis rem explicabo est delectus similique sequi? Culpa repudiandae magni, quisquam est provident delectus laudantium tempora, quam ipsum, suscipit dicta?</p></div>

      </div>
    </div>
  )
}
