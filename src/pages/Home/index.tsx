import React from 'react';
import { LogoutNavBar } from 'components/NavBar';
import { Stack } from '@fluentui/react';
import { PointPanel } from 'components/PointPanel';

export const Home = () => {
  return (
    <>
      <div className="container">
        <LogoutNavBar />
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
