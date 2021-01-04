import React, { useContext } from 'react';
import { Title } from 'components/Typography/Title';
import { AzureAdContext } from 'utils/ad-context';
import { LogoutNavBar } from 'components/NavBar';

export const Home = () => {
  const ctx = useContext(AzureAdContext);

  return (
    <>
      <div className="container">
        <LogoutNavBar logoutAction={() => ctx.msal.instance.logout()} />
        <Title>Bem vindo, {ctx.auth.account?.name}</Title>
        <button onClick={()=>ctx.msal.instance.logout()}>logout</button>
      </div>
    </>
  );
};
