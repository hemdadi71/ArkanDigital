/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'

interface ThumbnailPreviewProps {
  thumbnailSrc: string
  setThumbnailSrc: Dispatch<SetStateAction<string>>
}

const ThumbnailPreview: React.FC<ThumbnailPreviewProps> = ({
  thumbnailSrc,
  setThumbnailSrc,
}) => {
  const removeThumbnail = () => {
    setThumbnailSrc('')
  }

  return (
    <div className="flex flex-wrap gap-2">
      {thumbnailSrc && (
        <div className="relative h-[100px]">
          <img
            width={100}
            className="rounded-md h-full"
            src={thumbnailSrc}
            alt=""
          />
          <button
            className="absolute bg-gray-300 rounded-full top-1 right-1 text-red-500 bg-transparent border-none cursor-pointer"
            onClick={removeThumbnail}>
            <IoClose />
          </button>
        </div>
      )}
    </div>
  )
}

export default ThumbnailPreview
