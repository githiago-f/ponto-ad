import React, { useContext } from 'react';
import { LoginNavBar } from 'components/NavBar';
import { AzureAdContext } from 'utils/AzureAdContext';

export const Landing = () => {
  const ctx = useContext(AzureAdContext);
  return (
    <div>
      <LoginNavBar loginAction={ctx.login}/>
    </div>
  );
};
