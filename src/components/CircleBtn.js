import React from 'react';
import arrow from '../images/BtnArrow.png';

export default function CircleBtn({ textBtn }) {
  return (
    <button className='usiversal__circle_btn'>
      {textBtn}
      <img
        src={arrow}
        alt='arrow'
        className='choose__arrow_right'
      />
    </button>
  );
}
