import Image from "next/image"
import {memo} from "react";

const UsefullDetail = ({title,description,img}) => {
  return (
    <div data-aos="fade-down" className='usefull__box'>
    <div className="imageBox">
     <Image priority src={img} alt="img" width={30} />
    </div>
      <div className="box__title mezzardBold">{title}</div>
      <div className="box__description">{description}</div>
    </div>
  )
}

export default memo(UsefullDetail)
