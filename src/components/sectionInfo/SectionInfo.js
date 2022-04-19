/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import NavigatorWrapper from '../navigatorWrapper/NavigatorWrapper';
import Link from '../link/Link';
import List from '../list/List';
import ElementList from '../elementList/ElementList';

import './sectionInfo.css';

export default function SectionInfo(props) {
  const { link, info, className } = props;
  return (
    <section className={`SectionInfo ${className}`}>
      <NavigatorWrapper>
        <Link {...link} />
      </NavigatorWrapper>

      <List listName="News">
        {info.map((item) => (
          <ElementList
            nameElementList="elementNews"
            text={item.news}
            iconElementList={item.IconElementList}
          />
        )) }
      </List>

    </section>
  );
}

/** Компонент предназначен для отображения блоков с информацией */
