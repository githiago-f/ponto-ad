import React from 'react';
import { Layer } from '@fluentui/react';
import { NavContainer } from './styles';
import { Link } from 'react-router-dom';

export const LoginNavBar = (props: {loginAction:()=>void}) => {
  return (
    <Layer hostId={''}>
      <NavContainer>
        <div>
          <Link to={'/'} className="logo">Pontto</Link>
        </div>
        <div>
          <Link 
            to={'#'} 
            onClick={props.loginAction}
          >Entrar</Link>
        </div>
      </NavContainer>
    </Layer>
  );
};
