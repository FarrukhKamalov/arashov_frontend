import {memo} from 'react'
import Image from "next/image"

const SocialLink = ({link,img}) => {
  return (
    <>
      <a target="_blank" href={link}><Image src={img} alt="social" /></a>
    </>
  )
}

export default memo(SocialLink)
