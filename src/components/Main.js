import React from 'react';
import Information from './Information';
import Choose from './Choose';
import Labels from './Labels';
import Essense from './Essense';
import women from '../images/Women.png';
import kids from '../images/Kids.png';
import men from '../images/Men.png';
import product from '../images/2.png';
import CircleBtn from './CircleBtn';

export default function Main() {
  return (
    <div className='main'>
      <section className='product'>
        <div className='main__img'></div>
        <div className='main__background-text'>
          AIR JORDAN 1<br /> RETRO HIGH OG DUNK HIGH
        </div>
        <Information />
        <Choose />
      </section>
      <Labels />
      <Essense />
      <section className='sellers'>
        <h3 className='sellers__header usiversal__text_background'>BEST SELLERS</h3>
        <div className='sellers__elements'>
          <img
            src={women}
            alt='arrow'
            className='sellers__element shake'
          />
          <img
            src={kids}
            alt='arrow'
            className='sellers__element shake'
          />
          <img
            src={men}
            alt='arrow'
            className='sellers__element shake'
          />
        </div>
      </section>
      <section className='products'>
        <h3 className='products__header usiversal__text_background'>SPORTS TIME</h3>
        <div className='products__elements'>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
          <div className='products__element'>
            <img
              src={product}
              alt='arrow'
              className='products__element_img'
            />
            <p className='products__element_about'>Nike Air Max Plus 3</p>
          </div>
        </div>
        <CircleBtn textBtn={'Lets Discover More'} />
      </section>
    </div>
  );
}
