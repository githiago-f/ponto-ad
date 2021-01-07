import React, { useContext } from 'react';
import { Title } from 'components/Typography/Title';
import { AzureAdContext } from 'utils/AzureAdContext';
import { LogoutNavBar } from 'components/NavBar';
import { Stack } from '@fluentui/react';
import { PointPanel } from 'components/PointPanel';

export const Home = () => {
  const ctx = useContext(AzureAdContext);

  return (
    <>
      <div className="container">
        <LogoutNavBar logoutAction={() => ctx.msal.instance.logout()} />
        <Title>Bem vindo, {ctx.auth.account?.name}</Title>
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
