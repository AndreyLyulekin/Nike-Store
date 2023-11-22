import React from 'react';
import shoppingBag from '../images/ShoppingBag.png';
import CircleBtn from './CircleBtn';

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
          <div className='select__wrapper'>
            <select
              onClick={handleChange}
              name='city1'
              className='select'>
              <option value=''>Size</option>
              <option
                value='petersburg'
                selected=''
                className='option'>
                Санкт-Петербург
              </option>
              <option value='moscow'>Москва</option>
              <option value='kazan'>Казань</option>
              <option
                value='samara'
                disabled=''>
                Самара
              </option>
              <option value='perm'>Пермь</option>
              <option value='novosibirsk'>Новосибирск</option>
            </select>
          </div>
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
