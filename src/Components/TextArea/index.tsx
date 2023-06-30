const TextArea = ({
  name,
  label,
  type,
  register,
  errorTxt,
  defaultValue,
  className = '',
  cols,
  rows = 4,
}: any) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label>{label}</label>
        <textarea
          cols={cols}
          rows={rows}
          defaultValue={defaultValue}
          name={name}
          className={`outline-none rounded-md border px-2 py-1 ${className}`}
          type={type}
          {...register}
        />
        <span className="text-red-500 text-[14px]">{errorTxt}</span>
      </div>
    </>
  )
}

export default TextArea
