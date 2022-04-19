/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './navigatorWrapper.css';

function NavigatorWrapper(props) {
  return (
    <nav className="NavigatorWrapper">
      {props.children}
    </nav>
  );
}

export default NavigatorWrapper;
/**
 * Компонент применяется для обертывания панелей навигации
 */
