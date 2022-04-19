/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import NavigatorWrapper from '../navigatorWrapper/NavigatorWrapper';
import Link from '../link/Link';
import List from '../list/List';
import ElementList from '../elementList/ElementList';
import IconElementList from '../iconElementList/IconElementList';
import Wrapper from '../wrapper/Wrapper';
import SearchBlock from '../searchBlock/SearchBlock';
import ShowPicture from '../showPicture/ShowPicture';
import SectionInfo from '../sectionInfo/SectionInfo';

const linksNavNews = [
  {
    link: '#',
    active: 'unActive',
    text: 'Сейчас в сми',
  },
  {
    link: '#',
    active: 'unActive',
    text: 'В германии',
  },
  {
    link: '#',
    active: 'unActive',
    text: 'Рекомендуем',
  },
];

const news = [
  {
    news: 'Путин упростил получение автомобильных номеров',
    iconLink: '#',
  },
  {
    news: 'Суд закрыл дело демпартии США против России',
    iconLink: '#',
  },
];

/** далее данные для компонентов  SectionInfo */
const dataForWeather = {
  link: {
    link: '#',
    active: 'unActive',
    text: 'Погода',
  },
  info: [{
    news: 'Утром +17 вечером +5',
    // iconLink: '#',
  }],
};

const dataForVisited = {
  link: {
    link: '#',
    active: 'unActive',
    text: 'Посещаемое',
  },
  info: [
    {
      news: 'Недвижимость - о сталинках',
      // iconLink: '#',
    },
    {
      news: 'Маркет - люстры и светильники',
      // iconLink: '#',
    },
    {
      news: 'Авто.ру - привод 4х4 до 500 000',
      // iconLink: '#',
    },
  ],
};

const dataForTVbroadcast = {
  link: {
    link: '#',
    active: 'unActive',
    text: 'Эфир',
  },
  info: [
    {
      news: 'управление как искусство Успех',
      // iconLink: '#',
      IconElementList: <IconElementList iconLink="#" nameIconLink="name" altText="Иконка эфир" />,
    },
    {
      news: 'Ночь. Мир в это время earth TV',
      // iconLink: '#',
      IconElementList: <IconElementList iconLink="#" nameIconLink="name" altText="Иконка эфир" />,

    },
    {
      news: 'Андрей Возн... Совершенно секретно',
      iconLink: '#',
      IconElementList: <IconElementList iconLink="#" nameIconLink="name" altText="Иконка эфир" />,

    },
  ],
};

export default function StartPage() {
  return (
    <div style={{ width: '500px' }}>
      <div className="NewsBlock">
        <NavigatorWrapper>
          {linksNavNews.map((link) => <Link {...link} />)}
        </NavigatorWrapper>

        <List listName="News">
          {news.map((item) => (
            <ElementList
              nameElementList="elementNews"
              text={item.news}
              iconElementList={<IconElementList iconLink={item.iconLink} nameIconLink="name" altText="Иконка новости" />}
            />
          )) }
        </List>
      </div>

      <Wrapper nameWrapper="wrapperFinens">
        <p> USD MOEX 63.52</p>
        <p> EUR MOEX 70.86</p>
        <p> нефть 64,90</p>
      </Wrapper>
      <SearchBlock />
      <ShowPicture link="#" altText="Рекламма" classNameImg="recklam" classNameFigure="recklamWrap" />
      <footer>
        <SectionInfo link={dataForWeather.link} info={dataForWeather.info} className="sectionInfo__weather" />
        <SectionInfo link={dataForVisited.link} info={dataForVisited.info} className="sectionInfo__visited" />
        <SectionInfo link={dataForTVbroadcast.link} info={dataForTVbroadcast.info} className="sectionInfo__TVbroadcast" />
      </footer>
    </div>
  );
}
