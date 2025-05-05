import React from 'react';
import styles from './Basket.module.scss'
import { Avatar, Badge, Space } from 'antd';
const Basket = ({count,onClick,img}) => (
  <Space size="middle">
    <Badge count={count}>
      
      <img src={img} alt="" className={styles.basketImg}  onClick={onClick}/>
    </Badge>
  </Space>
);
export default Basket;