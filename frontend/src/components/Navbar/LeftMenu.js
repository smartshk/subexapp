import React from 'react';
import { Menu } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const LeftMenu = (props) => {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="home">
        <a href="/">홈</a>
      </Menu.Item>
      <Menu.Item key="seeking">
        <a href="/">내가 찾는 강의</a>
      </Menu.Item>
      <Menu.Item key="having">
        <a href="/">내가 갖고 있는 강의</a>
      </Menu.Item>
      <Menu.Item key="exchanging">
        <a href="/">1:1 교환을 원하는 강의</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu;
