/* eslint-disable react/prop-types */
import React from 'react';
import './iconElementList.css';

export default function IconLink({ iconLink, nameIconLink, altText }) {
  return (
    <img src={iconLink} alt={altText} className={`IconLink ${nameIconLink}`} />
  );
}

/** компоент предназначен для отображения иконки перед элементом списка,
 *  если это требуется по дизайну */
