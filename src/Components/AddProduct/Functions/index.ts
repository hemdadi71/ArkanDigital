import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export type Setter = Dispatch<SetStateAction<[string] | never[]>>

export const handleChange = async (
  e: ChangeEvent<HTMLInputElement>,
  setter: Setter
) => {
  const imagesrc: any = []
  const files = e.target.files
  console.log(files)
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()
      reader.onload = function (onLoadEvent) {
        const result = onLoadEvent.target?.result as string
        imagesrc.push(result)
        if (imagesrc.length === files.length) {
          setter(imagesrc)
        }
      }
      reader.readAsDataURL(file)
    }
  }
}

export const handleThumbnailChange = async (
  e: ChangeEvent<HTMLInputElement>,
  setter: Dispatch<SetStateAction<string>>
) => {
  const thumbnailsrc: any = []
  const files = e.target.files
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()
      reader.onload = function (onLoadEvent) {
        const result = onLoadEvent.target?.result as string
        thumbnailsrc.push(result)
        if (thumbnailsrc.length === files.length) {
          setter(thumbnailsrc)
        }
      }
      reader.readAsDataURL(file)
    }
  }
}
