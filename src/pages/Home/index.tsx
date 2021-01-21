import React from 'react';
import { LogoutNavBar, SideBar } from 'components/NavBar';
import { Pivot, PivotItem, Stack } from '@fluentui/react';
import { PointPanel } from 'components/PointPanel';
import { PointList } from 'components/PointList';

export const Home = () => {
  return (
    <>
      <div className="container">
        <LogoutNavBar />
        <div className="ms-Grid">
          <Stack horizontal className="ms-Grid-Row">
            <Stack className="ms-Grid-col ms-hiddenSm ms-hiddenMdDown ms-sm12 ms-md3 ms-lg-3">
              <SideBar />
            </Stack>
            <Stack className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
              <Pivot>
                <PivotItem headerText="Ponto Web" itemIcon="Recent">
                  <PointPanel/>
                </PivotItem>
                <PivotItem headerText="Cartão de ponto" itemIcon="Ringer">
                  <PointList/>
                </PivotItem>
              </Pivot>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
};
