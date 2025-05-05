import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './MenuSlider.css';

const MenuSlider = () => {
  const { i18n } = useTranslation();
  const firmNames = i18n.t('firmNames', { returnObjects: true });

  const scrollRef = useRef(null);

  const CARD_WIDTH = 271;
  const GAP = 137;
  const SCROLL_AMOUNT = CARD_WIDTH + GAP;

  const slideMenu = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * SCROLL_AMOUNT,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="slider-container">
      <Button
        icon={<LeftOutlined />}
        onClick={() => slideMenu(-1)}
        className="arrow-button"
      />
      <div className="menu-wrapper" ref={scrollRef}>
        {firmNames.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.img} alt={item.firm} className="firms" />
            <p className="firmName">{item.firm}</p>
            <span className="firmLabel">{item.label}</span>
          </div>
        ))}
      </div>
      <Button
        icon={<RightOutlined />}
        onClick={() => slideMenu(1)}
        className="arrow-button"
      />
    </div>
  );
};

export default MenuSlider;
