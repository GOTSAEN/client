import React, { memo } from 'react';
import Menu from '@/components/setting/menu';
import MenuBar from '@/components/setting/menu-bar';
const SettingMenu = memo(() => {
  return (
    <>
      <div className="max-sm:hidden h-full relative">
        <Menu />
      </div>
      <MenuBar />
    </>
  );
});

export default SettingMenu;
