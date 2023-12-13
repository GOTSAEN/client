import LocationLabel from '@/components/setting/location-label';

import SettingMenu from '@/components/setting/setting-menu';
import { Outlet } from 'react-router-dom';
export default function Setting() {
  return (
    <section className="w-full h-full flex relative max-sm:flex-col">
      <SettingMenu />

      <main className="py-4 w-full px-4">
        <LocationLabel />
        <Outlet />
      </main>
    </section>
  );
}
