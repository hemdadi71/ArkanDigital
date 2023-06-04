// import React, { useState } from 'react';
import axios from 'axios'
import { useState } from 'react'
import Input from '../Input/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productSchema } from '../../utils/Schema/ProuctSchema'
import { postProduct, uploadCloudinary } from '../api'
const ProductForm = () => {
  const [imageLink, setImageLink] = useState([])
  const [thumbnailLink, setThumbnailLink] = useState([])
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  })
  const formSubmit = async (data: any) => {
    console.log(data.images)
    try {
      const imageArr: any = []
      for (let image of data.images) {
        const Data = await uploadCloudinary(image)
        imageArr.push(Data.url)
      }
      setImageLink(imageArr)
      const thumbnailArr: any = []
      for (let thumbnail of data.thumbnail) {
        const Data = await uploadCloudinary(thumbnail)
        thumbnailArr.push(Data.url)
      }
      setThumbnailLink(thumbnailArr)
    } catch (error) {
      console.log(error)
    }
    data.images = imageLink
    data.thumbnail = thumbnailLink[0]
    console.log(data.images)
    console.log(data.thumbnail)
    console.log(data)
    if (imageLink.length && thumbnailLink.length) {
      postProduct(data).then(res => console.log(res))
    }
  }
  return (
    <form
      className="w-[50%] flex flex-wrap"
      onSubmit={handleSubmit(formSubmit)}>
      <Input
        name="name"
        register={{ ...register('name') }}
        type="text"
        label="Name"
        errorTxt={errors.name?.message}
      />
      <Input
        name="slugname"
        register={{ ...register('slugname') }}
        type="text"
        label="Slugname"
        errorTxt={errors.slugname?.message}
      />
      <Input
        name="brand"
        register={{ ...register('brand') }}
        type="text"
        label="Brand"
        errorTxt={errors.brand?.message}
      />
      <Input
        name="price"
        register={{ ...register('price') }}
        type="text"
        label="Price"
        errorTxt={errors.price?.message}
      />
      <Input
        name="quantity"
        register={{ ...register('quantity') }}
        type="text"
        label="Quantity"
        errorTxt={errors.quantity?.message}
      />
      <Input
        name="images"
        register={{ ...register('images') }}
        type="file"
        label="images"
        errorTxt={errors.images?.message}
      />
      <Input
        name="thumbnail"
        register={{ ...register('thumbnail') }}
        type="file"
        label="Thumbnail"
        errorTxt={errors.thumbnail?.message}
      />
      <Input
        name="category"
        register={{ ...register('category') }}
        type="text"
        label="Category"
        errorTxt={errors.category?.message}
      />
      <Input
        name="subcategory"
        register={{ ...register('subcategory') }}
        type="text"
        label="Subcategory"
        errorTxt={errors.subcategory?.message}
      />
      <Input
        name="description"
        register={{ ...register('description') }}
        type="text"
        label="description"
        errorTxt={errors.description?.message}
      />
      <button type="submit" className="bg-blue-500 rounded-md px-4 py-1">
        send
      </button>
    </form>
  )
}
export default ProductForm
