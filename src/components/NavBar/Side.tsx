import { Nav } from '@fluentui/react';
import React from 'react';

export const SideBar = () => {
  return (
    <Nav
      groups={[
        {
          name: 'Paginas',
          links: [
            {
              name: 'Ponto',
              url: '#home',
              ariaCurrent: 'page'
            }
          ]
        }
      ]}
    />
  );
};
