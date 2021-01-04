import React from 'react';
import { Link, Layer } from '@fluentui/react';
import { NavContainer } from './styles';

export const LoginNavBar = (props: {loginAction:()=>void}) => {
  return (
    <Layer hostId={''}>
      <NavContainer>
        <div>
          <Link href={'/'} className="logo">Pontto</Link>
        </div>
        <div>
          <Link 
            href={'#'} 
            onClick={props.loginAction}
          >Entrar</Link>
        </div>
      </NavContainer>
    </Layer>
  );
};
