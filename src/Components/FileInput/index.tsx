import { useState } from 'react'

const FileInput = ({
  name,
  label,
  type,
  register,
  errorTxt,
  defaultValue,
  id,
}: any) => {
  function handleOnChange(e) {
    // setImageSrc(e.target.files[0])
    console.log(e.target)
    //   setUploadData(undefined)

    // reader.readAsDataURL(e.target.files[0])
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          className="bg-purple text-white rounded-md px-4 py-1"
          htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          multiple={true}
          defaultValue={defaultValue}
          name={name}
          className="hidden"
          type={type}
          {...register}
        />
        {/* <img src={imageSrc} alt="img" /> */}
        <span className="text-red-500">{errorTxt}</span>
      </div>
    </>
  )
}

export default FileInput
