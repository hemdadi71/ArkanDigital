/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Input from '../Input/Input'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productSchema } from '../../utils/Schema/ProuctSchema'
import {
  editProduct,
  getCategories,
  postProduct,
  uploadCloudinary,
} from '../api'
import FileInput from '../FileInput'
import ImagePreview from './ImagePreview'
import { handleChange, handleThumbnailChange } from './Functions'
import ThumbnailPreview from './ThumbnailPreview'
import { useDispatch, useSelector } from 'react-redux'
import { hideProductModal } from '@/Redux/Slices/AddProductSlice'
import { LoadingState, categoryData, isEditnigState } from '@/Types/types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import CategoriesSelect from '../Select'
import SubCategorySelect from '../SubCategorySelect'
import { toast } from 'react-hot-toast'
import { SelectChangeEvent } from '@mui/material'
import { notEditing } from '@/Redux/Slices/IsEditingProductSlice'
import { hideLoading, showLoading } from '@/Redux/Slices/LoadingSlice'
import 'react-quill/dist/quill.snow.css'
import Spinner from '../Spinner'
import dynamic from 'next/dynamic'
import { modules } from '@/utils/ReactQuill/Modules'
// ..........................................................
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

const ProductForm = () => {
  const selectedEdit = useSelector((state: isEditnigState) => state.editingData)
  const { isEditing, rowData } = selectedEdit
  const { data } = useQuery('getCategories', getCategories)
  const [imageSrc, setImageSrc] = useState(isEditing ? rowData.images : [])
  const [thumbnailSrc, setThumbnailSrc] = useState(
    isEditing ? rowData.thumbnail : ''
  )
  const [category, SetCategory] = useState(rowData.category)
  const dispatch = useDispatch()
  const loading = useSelector((state: LoadingState) => state.loading.isLoading)
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  })
  const mutateFunction = isEditing ? editProduct : postProduct
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: mutateFunction,
    onSuccess: () => {
      queryClient.invalidateQueries('getProducts') -
        +dispatch(hideProductModal())
      toast(`محصول با موفقیت ${isEditing ? 'ویرایش' : 'اضافه'} گردید`, {
        style: {
          background: `${isEditing ? 'yellow' : 'green'}`,
          color: `${isEditing ? 'black' : 'white'}`,
        },
      })
      dispatch(notEditing({}))
      dispatch(hideLoading())
    },
  })
  const formSubmit = async (data: any) => {
    dispatch(showLoading())
    let imageArr = []
    let thumbnailArr = []
    try {
      if (data.images.length !== 0) {
        for (let image of data.images) {
          const imageData = await uploadCloudinary(image)
          imageArr.push(imageData.url)
        }
      } else {
        rowData.images.map(item => imageArr.push(item))
      }
      if (data.thumbnail.length !== 0) {
        for (let thumbnail of data.thumbnail) {
          const thumbnailData = await uploadCloudinary(thumbnail)
          thumbnailArr.push(thumbnailData.url)
        }
      } else {
        thumbnailArr.push(rowData.thumbnail)
      }
    } catch (error) {
      console.log(error)
    }
    data.images = imageArr
    data.thumbnail = thumbnailArr[0]
    if (data.images.length !== 0 && data.thumbnail) {
      isEditing ? mutate({ id: rowData._id, Data: data }) : mutate(data)
    }
  }
  const SubCategories =
    (data && data.find((item: categoryData) => item.category === category)) ||
    {}
  const handleChangeCategory = (event: SelectChangeEvent) => {
    SetCategory(event.target.value as string)
  }
  return (
    <form
      className="flex flex-col overflow-auto gap-y-1 px-3"
      onSubmit={handleSubmit(formSubmit)}>
      <div className="flex lg:flex-row flex-col gap-10">
        <Input
          defaultValue={rowData.name}
          name="name"
          register={{ ...register('name') }}
          type="text"
          label="نام محصول:"
          errorTxt={errors.name?.message}
        />
        <Input
          defaultValue={rowData.slugname}
          name="slugname"
          register={{ ...register('slugname') }}
          type="text"
          label="نام کوتاه محصول:"
          errorTxt={errors.slugname?.message}
        />
        <Input
          defaultValue={rowData.brand}
          name="brand"
          register={{ ...register('brand') }}
          type="text"
          label="برند محصول:"
          errorTxt={errors.brand?.message}
        />
        <Input
          defaultValue={rowData.price}
          name="price"
          register={{ ...register('price') }}
          type="text"
          label="قیمت محصول:"
          errorTxt={errors.price?.message}
        />
      </div>
      <div className="flex items-center md:flex-row flex-col gap-10">
        <Input
          defaultValue={rowData.quantity}
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
      </div>
      <div dir="ltr" className="w-full mt-3">
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <ReactQuill
                className="w-full h-[100px]"
                id="description"
                theme="snow"
                onChange={onChange}
                defaultValue={rowData.description ? rowData.description : value}
                modules={modules}
              />
            )
          }}
        />
        <p className="text-red-500 text-right mt-12">
          {errors.description?.message?.toString()}
        </p>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-10"></div>
      <div className="flex items-center justify-center py-5 text-white">
        <button
          type="submit"
          className="bg-blue-500 rounded-md px-5 py-1 flex items-center gap-2">
          <p>{isEditing ? 'ویرایش محصول' : 'افزودن محصول'}</p>
          {loading && <Spinner className="w-4 h-4" />}
        </button>
      </div>
    </form>
  )
}
export default ProductForm
