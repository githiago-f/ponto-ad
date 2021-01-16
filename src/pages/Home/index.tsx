import React from 'react';
import { LogoutNavBar } from 'components/NavBar';
import { Pivot, PivotItem, Stack } from '@fluentui/react';
import { PointPanel } from 'components/PointPanel';

export const Home = () => {
  return (
    <>
      <div className="container">
        <LogoutNavBar />
        <div className="ms-Grid">
          <Stack horizontal className="ms-Grid-Row">
            <Stack className="ms-Grid-col ms-hiddenSm ms-hiddenMdDown ms-sm12 ms-md3 ms-lg-3">
              
            </Stack>
            <Stack className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
              <Pivot>
                <PivotItem headerText="Ponto Web" itemIcon="Recent">
                  <PointPanel/>
                </PivotItem>
                <PivotItem headerText="Notificações" itemIcon="Ringer" itemCount={1}>
                  <PointPanel/>
                </PivotItem>
              </Pivot>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
};
