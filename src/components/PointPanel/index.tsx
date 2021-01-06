import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { ControlPanel, MapPanel, MapPanelWrapper, Panel } from './styles';

export const PointPanel = () => {
  return (
    <Panel>
      <MapPanelWrapper>
        <MapPanel>
          {
            //mapa
          }
        </MapPanel>
        <ControlPanel>
          <span>Entrada $horario</span>
          <h4>{new Date().toISOString()}</h4>
        </ControlPanel>
      </MapPanelWrapper>
      <PrimaryButton
        text="Nova Inclusão"
        onClick={() => {}}
      />
    </Panel>
  );
};
