import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function CategoriesSelect({
  data,
  register,
  name,
  errorTxt,
  label,
  handleChange,
  category,
}: any) {
  return (
    <div className="md:w-[30%] flex flex-col gap-2">
      <label>{label}</label>
      <FormControl fullWidth>
        <Select
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
          value={category}
          {...register}
          onChange={handleChange}>
          {data &&
            data.map((item: any) => {
              return (
                <MenuItem value={item.category} key={item._id}>
                  {item.category}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>
      <span className="text-red-500 mt-8">{errorTxt}</span>
    </div>
  )
}
