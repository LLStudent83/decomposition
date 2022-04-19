/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './link.css';

export default function Link(props) {
  const { link, active, text } = props;
  return (
    <a href={link} className={`Link ${active}`}>
      {text}
    </a>
  );
}
/** компонент применяется для описания ссылок */
