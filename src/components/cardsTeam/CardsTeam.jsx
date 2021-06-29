import React from 'react';
import './CardsTeam.scss';
import imgLeo from '../../assets/img/leonardo.jpg';
export const CardsTeam = () => {
  return (
    <section className='about'>
      <h2 className='about--title'>About Us</h2>
      <div className='about__team'>
        <div className='about__team__card'>
          <div className='about__team__card__circle'>
            <figure className='about__team__card__circle__container-img'>
              <img
                src={imgLeo}
                alt=''
                className='about__team__card__circle__container-img--img'
              />
            </figure>
          </div>
          <div className='about__team__card--description'>
            <a href='https://twitter.com/LeoBotache7' target='_blank'>
              <i class='fab fa-twitter'></i>
            </a>
            <a href='https://www.linkedin.com/in/leo-rincon/' target='_blank'>
              <i class='fab fa-linkedin'></i>
            </a>

            <div className='about__team__card--description--name'>
              <h3>Leonardo Rincón Botache</h3>
              <p>Front-End Developer </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
