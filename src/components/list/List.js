/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './list.css';

export default function List({ children, listName }) {
  return (
    <ul className={`List ${listName}`}>
      {children}
    </ul>
  );
}
/** компонент предназначен для отображения на странице всевозможных списков */
