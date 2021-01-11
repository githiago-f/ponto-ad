import React, { useContext } from 'react';
import { Layer } from '@fluentui/react';
import { NavContainer } from './styles';
import { Link } from 'react-router-dom';
import { AzureContext } from 'services/azure-service';

export const LoginNavBar = () => {
  const {login} = useContext(AzureContext);
  
  return (
    <Layer hostId={''}>
      <NavContainer>
        <div>
          <Link to={'/'} className="logo">Pontto</Link>
        </div>
        <div>
          <Link 
            to={'#'} 
            onClick={login}
          >Entrar</Link>
        </div>
      </NavContainer>
    </Layer>
  );
};
