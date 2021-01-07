import React, { useContext, useEffect, useState } from 'react';
import { Layer, Persona, PersonaSize, Link as FluentLink } from '@fluentui/react';
import { NavContainer } from './styles';
import { AzureAdContext } from 'utils/AzureAdContext';
import { getPhoto } from 'utils/get-photo';
import { Link } from 'react-router-dom';

export const LogoutNavBar = (props: {logoutAction:()=>void}) => {
  const ctx = useContext(AzureAdContext);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if(photo.trim().length === 0) {
      getPhoto(ctx.auth.accessToken)
        .then(setPhoto)
        .catch(console.error);
    }
  }, [ctx.auth.accessToken, photo]);

  return (
    <Layer hostId="">
      <NavContainer>
        <div>
          <Link to="/" className="logo">
            <img height="32" alt="logo" src={require('./../../assets/images/sharePrime-logo.png')} />
          </Link>
        </div>
        <div>
          <Persona
            text={ctx.auth.account?.name}
            size={PersonaSize.size32}
            imageUrl={photo}
          />
          <FluentLink onClick={props.logoutAction}>
            Sair
          </FluentLink>
        </div>
      </NavContainer>
    </Layer>
  );
};
