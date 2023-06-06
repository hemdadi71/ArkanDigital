/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoClose } from 'react-icons/io5'
function ThumbnailPreview({ thumbnailSrc, setThumbnailSrc }) {
  const removeThumbnail = setThumbnailSrc => {
    setThumbnailSrc('')
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {thumbnailSrc && (
          <div className="relative h-[57px]">
            <img width={100} className="rounded-md h-full" src={thumbnailSrc} alt="" />
            <button
              className="absolute bg-white rounded-full top-1 right-1 text-red-500 bg-transparent border-none cursor-pointer"
              onClick={() => removeThumbnail(setThumbnailSrc)}>
              <IoClose />
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default ThumbnailPreview
