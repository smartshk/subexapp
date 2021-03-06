import React, { useState } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="menu" style={{ width: '100%' }}>
      <div className="menu__logo">
        <a href="/">SubExApp</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <RightMenu mode="horizontal"/>
        </div>
        <Drawer
          title="Basic Drawer"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
            <LeftMenu mode="inline" />
        </Drawer>
      </div>
      <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <AlignRightOutlined />
        </Button>
    </nav>
  );
};

export default Navbar;
