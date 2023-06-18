

const FileInput = ({
  name,
  label,
  type,
  register,
  errorTxt,
  defaultValue,
  id,
}: any) => {
  
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          className="bg-purple text-white rounded-md px-4 py-1 cursor-pointer"
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
        <span className="text-red-500">{errorTxt}</span>
      </div>
    </>
  )
}

export default FileInput
