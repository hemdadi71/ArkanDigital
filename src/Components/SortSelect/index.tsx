import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
const data = [
  {
    name: 'بیشترین قیمت',
    value: '-price',
  },
  {
    name: 'کمترین قیمت',
    value: 'price',
  },
]
export default function SortSelect({ label, sort, setSort }: any) {
  const handleChange = (e: any) => {
    setSort(e.target.value)
  }
  return (
    <div className="flex gap-2 items-center mb-8">
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
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          placeholder='مرتب سازی'
          onChange={handleChange}>
          {data &&
            data.map((item: any) => {
              return (
                <MenuItem value={item.value} key={item}>
                  {item.name}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>
    </div>
  )
}
