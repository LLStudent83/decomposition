/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import './elementList.css';

export default function ElementList({ nameElementList, text, iconElementList }) {
  return (
    <li className={`ElementList ${nameElementList}`}>
      {iconElementList}
      <a href="#">{text}</a>
    </li>
  );
}

/** компонент предназначен для отображения элементов списков */
