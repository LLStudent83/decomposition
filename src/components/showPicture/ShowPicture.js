/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './showPicture.css';

export default function ShowPicture({
  link, altText, classNameImg, classNameFigure,
}) {
  return (
    <figure className={`ShowPicture_wrap ${classNameFigure}`}>
      <img className={`ShowPicture ${classNameImg}`} src={link} alt={altText} />
    </figure>
  );
}

/** Компонент предназначен для отображения картинок на странице */
