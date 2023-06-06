/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoClose } from 'react-icons/io5'
function ImagePreview({ imageSrc, setImageSrc }) {
  const handleRemoveImage = index => {
    setImageSrc(prevImageSrc => {
      const updatedImageSrc = [...prevImageSrc]
      updatedImageSrc.splice(index, 1)
      return updatedImageSrc
    })
  }
  
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {imageSrc.map((src, index) => (
          <div key={index} className="relative h-[57px]">
            <img width={100} className="rounded-md h-full" src={src} alt="" />
            <button
              className="absolute bg-white rounded-full top-1 right-1 text-red-500 bg-transparent border-none cursor-pointer"
              onClick={() => handleRemoveImage(index)}>
              <IoClose />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default ImagePreview
