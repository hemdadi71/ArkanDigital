/* eslint-disable @next/next/no-img-element */
// import React, { useState } from 'react';
import axios from 'axios'
import { useCallback, useState } from 'react'
import Input from '../Input/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productSchema } from '../../utils/Schema/ProuctSchema'
import { getCategories, postProduct, uploadCloudinary } from '../api'
import FileInput from '../FileInput'
import ImagePreview from './ImagePreview'
import { handleChange, handleThumbnailChange } from './Functions'
import ThumbnailPreview from './ThumbnailPreview'
import { useDispatch } from 'react-redux'
import { hideProductModal } from '@/Redux/Slices/AddProductSlice'
import { ProductProps } from '@/Types/types'
import CategoryForm from '../AddCategory'
import Select from '../CategorySelect/CategorySelect'
import { useQuery } from 'react-query'
import CategoriesSelect from '../Select'
import SubCategorySelect from '../SubCategorySelect'
import { toast } from 'react-hot-toast'
const ProductForm = () => {
  const { data } = useQuery('getCategories', getCategories)
  const [imageLink, setImageLink] = useState([])
  const [thumbnailLink, setThumbnailLink] = useState([])
  const [imageSrc, setImageSrc] = useState([])
  const [thumbnailSrc, setThumbnailSrc] = useState('')
  const [category, SetCategory] = useState('')
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(productSchema),
  })
  const formSubmit = async (data: any) => {
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
    if (imageLink.length && thumbnailLink.length) {
      postProduct(data).then(res => {
        console.log(res)
        toast('محصول با موفقیت اضافه شد')
        dispatch(hideProductModal())
      })
    }
  }

  const SubCategories =
    (data && data.find(item => item.category === category)) || {}
  const handleChangeCategory = (event: SelectChangeEvent) => {
    SetCategory(event.target.value as string)
  }
  return (
    <form
      className="flex flex-col overflow-auto gap-y-1"
      onSubmit={handleSubmit(formSubmit)}>
      <div className="flex lg:flex-row flex-col gap-10">
        <Input
          name="name"
          register={{ ...register('name') }}
          type="text"
          label="نام محصول:"
          errorTxt={errors.name?.message}
        />
        <Input
          name="slugname"
          register={{ ...register('slugname') }}
          type="text"
          label="نام کوتاه محصول:"
          errorTxt={errors.slugname?.message}
        />
        <Input
          name="brand"
          register={{ ...register('brand') }}
          type="text"
          label="برند محصول:"
          errorTxt={errors.brand?.message}
        />
        <Input
          name="price"
          register={{ ...register('price') }}
          type="text"
          label="قیمت محصول:"
          errorTxt={errors.price?.message}
        />
      </div>
      <div className="flex items-center md:flex-row flex-col gap-10">
        <Input
          name="quantity"
          register={{ ...register('quantity') }}
          type="text"
          label="موجودی:"
          errorTxt={errors.quantity?.message}
        />
        <div className="w-[25%]">
          <FileInput
            id="uploadImage"
            name="images"
            register={{
              ...register('images', {
                onChange: e => handleChange(e, setImageSrc),
              }),
            }}
            type="file"
            label="آپلود تصاویر محصول"
            errorTxt={errors.images?.message}
          />
          <div
            className={`overflow-y-auto ${
              imageSrc.length && 'h-[120px]'
            } flex`}>
            <ImagePreview imageSrc={imageSrc} setImageSrc={setImageSrc} />
          </div>
        </div>
        <div>
          <FileInput
            id="uploadThumbnail"
            name="thumbnail"
            register={{
              ...register('thumbnail', {
                onChange: e => handleThumbnailChange(e, setThumbnailSrc),
              }),
            }}
            type="file"
            label="آپلود تصویر کوچک محصول"
            errorTxt={errors.thumbnail?.message}
          />
          <div
            className={`overflow-y-auto ${
              imageSrc.length && 'h-[120px]'
            } flex`}>
            <ThumbnailPreview
              thumbnailSrc={thumbnailSrc}
              setThumbnailSrc={setThumbnailSrc}
            />
          </div>
        </div>
      </div>
      <div className="flex items-start md:flex-row flex-col gap-10 relative">
        <CategoriesSelect
          handleChange={handleChangeCategory}
          category={category}
          label="گروه:"
          errorTxt={errors.category?.message}
          name="category"
          register={{ ...register('category') }}
          data={data}
        />
        <SubCategorySelect
          name="subcategory"
          register={{ ...register('subcategory') }}
          label="زیرگروه:"
          errorTxt={errors.subcategory?.message}
          SubCategory={SubCategories.subCategory}
        />
        <div className="w-full">
          <Input
            name="description"
            register={{ ...register('description') }}
            type="text"
            label="توضیحات:"
            errorTxt={errors.description?.message}
          />
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-10"></div>
      <div className="flex items-center justify-center py-5 text-white">
        <button type="submit" className="bg-blue-500 rounded-md px-5 py-1">
          ثبت اطلاعات
        </button>
      </div>
    </form>
  )
}
export default ProductForm
