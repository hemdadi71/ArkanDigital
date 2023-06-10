import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'

export default function SubCategorySelect({
  register,
  name,
  errorTxt,
  label,
  SubCategory,
}) {
  const [subCategory, SetSubCategory] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    SetSubCategory(event.target.value as string)
  }
  return (
    <div className="w-[60%] flex flex-col gap-2">
      <label>{label}</label>
      <FormControl fullWidth>
        <Select
          defaultValue={subCategory}
          sx={{
            '& .MuiSvgIcon-root': {
              right: 'unset',
              left: '7px',
              fill: 'gray',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #484850',
              borderRadius: '5px 5px 0 0',
            },
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
            '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
            '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                border: 0,
              },
          }}
          style={{
            border: '1px solid #EFF0F2',
            fontFamily: 'vazir',
            outlineColor: 'none',
            height: '35.5px',
            fontSize: '15px',
            position: 'absolute',
            right: '0px',
            width: '100%',
          }}
          name={name}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={subCategory}
          {...register}
          onChange={handleChange}>
          {SubCategory &&
            SubCategory.map(item => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>
      <span className="text-red-500 mt-8">{errorTxt}</span>
    </div>
  )
}
