/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './wrapper.css';

export default function Wrapper({ children, nameWrapper }) {
  return (
    <div className={`wrapper ${nameWrapper}`}>
      {children}
    </div>
  );
}

/** компонент применяется для оборачивания и группировки строчного контента */
