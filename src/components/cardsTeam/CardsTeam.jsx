import React from 'react';
import './CardsTeam.scss';

import { team } from '../../utils/team';

export const CardsTeam = () => {
  return (
    <section className='about'>
      <h2 className='about--title'>About Us</h2>
      <div className='about__team'>
        {team.map((item) => (
          <div key={item.id} className='about__team__card'>
            <div className='about__team__card__circle'>
              <figure className='about__team__card__circle__container-img'>
                <img
                  src={item.img}
                  alt=''
                  className='about__team__card__circle__container-img--img'
                />
              </figure>
            </div>
            <div className='about__team__card--description'>
              <a href={item.twitter} target='_blank' rel='noreferrer'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href={item.linkedin} target='_blank' rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>

              <div className='about__team__card--description--name'>
                <h3>{item.name}</h3>
                <p>{item.rol}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
