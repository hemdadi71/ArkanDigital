/* eslint-disable @next/next/no-img-element */
import { ImagePreviewProps } from '@/Types/types'
import React from 'react'
import { IoClose } from 'react-icons/io5'

const ImagePreview = ({ imageSrc, setImageSrc }: ImagePreviewProps) => {
  const handleRemoveImage = (index: number) => {
    setImageSrc((prevImageSrc: any) => {
      const updatedImageSrc = [...prevImageSrc]
      updatedImageSrc.splice(index, 1)
      return updatedImageSrc
    })
  }

  return (
    <div className="flex flex-wrap gap-2">
      {imageSrc.map((src, index) => (
        <div key={index} className="relative h-[100px]">
          <img width={100} className="rounded-md h-full" src={src} alt="" />
          <button
            className="absolute bg-gray-300 z-30 rounded-full top-1 right-1 text-red-500 bg-transparent cursor-pointer"
            onClick={() => handleRemoveImage(index)}>
            <IoClose />
          </button>
        </div>
      ))}
    </div>
  )
}

export default ImagePreview
