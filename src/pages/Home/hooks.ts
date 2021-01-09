import {useCallback, useContext} from 'react';
import { AzureAdContext } from 'utils/AzureAdContext';

export const useHomeHooks = () => {
  const { msal: { instance } } = useContext(AzureAdContext);

  const logout = useCallback(() => {
    instance.logout();
  }, [instance]);

  return {
    logout
  };
};
