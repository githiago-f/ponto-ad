import React, { useContext } from 'react';
import { Layer, Persona, PersonaSize, Link as FluentLink } from '@fluentui/react';
import { NavContainer } from './styles';
import { AzureContext } from 'services/azure-service';
import { Link } from 'react-router-dom';

export const LogoutNavBar = () => {
  const {auth, logout} = useContext(AzureContext);

  return (
    <Layer hostId="">
      <NavContainer>
        <div>
          <Link to="/" className="logo">
            <img 
              height="32"
              alt="logo"
              src={require('./../../assets/images/sharePrime-logo.png')}
              loading={'lazy'}
            />
          </Link>
        </div>
        <div>
          <Persona
            text={auth?.account?.name}
            size={PersonaSize.size32}
            imageUrl={''}
            imageAlt={auth?.account?.username}
          />
          <FluentLink onClick={logout}>
            Sair
          </FluentLink>
        </div>
      </NavContainer>
    </Layer>
  );
};
