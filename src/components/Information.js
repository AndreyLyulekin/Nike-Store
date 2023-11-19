import React from 'react';
import shoppingBag from '../images/ShoppingBag.png';
import CircleBtn from './CircleBtn';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function Information() {
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className='productInfo'>
      <h1 className='productInfo__header'>AIR JORDAN 1 RETRO HIGH OG</h1>
      <div className='productInfo__size-block'>
        <p className='productInfo__price'>$275</p>
        <div className='productInfo__size-right-block'>
          <Box sx={{ minWidth: 150, paddingTop: '15px' }}>
            <FormControl
              fullWidth
              variant='filled'>
              <InputLabel
                id='demo-simple-select-label'
                sx={{ color: 'whitesmoke', fontSize: '24px', fontFamily: 'Futura Bk BT' }}>
                Choose Size
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={size}
                label='Size'
                sx={{ color: 'whitesmoke', backgroundColor: 'black', fontSize: '24px' }}
                onChange={handleChange}>
                <MenuItem
                  value={40}
                  sx={{ color: 'whitesmoke', backgroundColor: 'black', fontSize: '24px' }}>
                  40
                </MenuItem>
                <MenuItem
                  value={41}
                  sx={{ color: 'whitesmoke', backgroundColor: 'black', fontSize: '24px' }}>
                  41
                </MenuItem>
                <MenuItem
                  value={42}
                  sx={{ color: 'whitesmoke', backgroundColor: 'black', fontSize: '24px' }}>
                  42
                </MenuItem>
              </Select>
              <FormHelperText sx={{ color: 'white', userSelect: 'none' }}>Кликни</FormHelperText>
            </FormControl>
          </Box>
          <img
            src={shoppingBag}
            alt='ShoppingBag-Icon'
            className='productInfo__card-btn'
          />
        </div>
      </div>
      <CircleBtn textBtn={'More details'} />
    </div>
  );
}
