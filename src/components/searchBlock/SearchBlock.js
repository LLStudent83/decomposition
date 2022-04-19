/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './searchBlock.css';
import NavigatorWrapper from '../navigatorWrapper/NavigatorWrapper';
import Link from '../link/Link';

const linksNavSearch = [
  {
    link: '#',
    active: 'unActive',
    text: 'Видео',
  },
  {
    link: '#',
    active: 'unActive',
    text: 'Картинки',
  },
  {
    link: '#',
    active: 'unActive',
    text: 'Новости',
  },
];

export default function SearchBlock() {
  return (
    <div className="SearchBlock_wrapper">
      <NavigatorWrapper>
        {linksNavSearch.map((link) => <Link {...link} />)}
      </NavigatorWrapper>
      <div className="StringSearch">
        <label htmlFor="searchString">ЯНДЕКС</label>
        <input type="text" id="searchString" />
      </div>
      <p>Найдется все. Например, <span>фаза луны сегодня</span></p>
    </div>
  );
}

/** Компонент предназначен для отображения блока поиска */
