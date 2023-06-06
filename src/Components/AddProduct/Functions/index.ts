export const handleChange = async (e, setter) => {
  // console.log(e.target)
  const imagesrc = []
  const files = e.target.files
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const reader = new FileReader()
    reader.onload = function (onLoadEvent) {
      imagesrc.push(onLoadEvent.target.result)
      if (imagesrc.length === files.length) {
        setter(imagesrc)
      }
    }
    reader.readAsDataURL(file)
  }
}

export const handleThumbnailChange = async (e, setter) => {
  const thumbnailsrc = []
  const files = e.target.files
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const reader = new FileReader()
    reader.onload = function (onLoadEvent) {
      thumbnailsrc.push(onLoadEvent.target.result)
      if (thumbnailsrc.length === files.length) {
        setter(thumbnailsrc)
      }
    }
    reader.readAsDataURL(file)
  }
}
