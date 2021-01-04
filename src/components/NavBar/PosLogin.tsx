import React, { useContext, useEffect, useState } from 'react';
import { Layer, Persona, PersonaSize } from '@fluentui/react';
import { NavContainer } from './styles';
import { AzureAdContext } from 'utils/ad-context';
import { getPhoto } from 'utils/get-photo';
import { Link } from 'react-router-dom';

export const LogoutNavBar = (props: {logoutAction:()=>void}) => {
  const ctx = useContext(AzureAdContext);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    getPhoto(ctx.auth.accessToken)
      .then(setPhoto)
      .catch(console.error);
  }, []);

  return (
    <Layer hostId={''}>
      <NavContainer>
        <div>
          <Link to={'/'} className="logo">
            <img height="32" src={require('./../../assets/images/sharePrime-logo.png')} />
          </Link>
        </div>
        <div>
          <Persona
            text={ctx.auth.account?.name}
            size={PersonaSize.size32}
            imageUrl={photo}
          />
          <a href="#" onClick={props.logoutAction}>Sair</a>
        </div>
      </NavContainer>
    </Layer>
  );
};
