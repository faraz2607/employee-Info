import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDropdown(props) {
    const [status, setStatus] = React.useState('');
      
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

  return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={status}
          label={props.label}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>{props.option1}</MenuItem>
          <MenuItem value={20}>{props.option2}</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
