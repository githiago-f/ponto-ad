import React from 'react';
import { LogoutNavBar } from 'components/NavBar';
import { Stack } from '@fluentui/react';
import { PointPanel } from 'components/PointPanel';
import { useHomeHooks } from './hooks';

export const Home = () => {
  const { logout } = useHomeHooks();

  return (
    <>
      <div className="container">
        <LogoutNavBar logoutAction={logout} />
        <div className="ms-Grid">
          <Stack className="ms-Grid-Row">
            <Stack className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
              <PointPanel/>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
};
