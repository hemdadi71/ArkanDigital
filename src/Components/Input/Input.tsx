const Input = ({
  name,
  label,
  type,
  register,
  errorTxt,
  defaultValue,
}: any) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label>{label}</label>
        <input
          multiple={true}
          defaultValue={defaultValue}
          name={name}
          className="outline-none rounded-md border px-2 py-1"
          type={type}
          {...register}
        />
        <span className="text-red-500">{errorTxt}</span>
      </div>
    </>
  )
}

export default Input
