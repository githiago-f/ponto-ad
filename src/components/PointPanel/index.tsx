import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import {  MapPanel, MapPanelWrapper, Panel, TimerSubtitle, TimerTitle, ControlPanel } from './styles';
import { useCurrentTime } from 'utils/useCurrentTime';

export const PointPanel = () => {
  const { currentTime } = useCurrentTime();

  return (
    <Panel className="ms-depth-8">
      <MapPanelWrapper>
        <MapPanel>
          {
            //mapa
          }
        </MapPanel>
        <ControlPanel>
          <TimerSubtitle>Entrada $horario</TimerSubtitle>
          <TimerTitle>{currentTime}</TimerTitle>
        </ControlPanel>
      </MapPanelWrapper>
      <PrimaryButton
        text="Nova Inclusão"
        onClick={() => {}}
        className="full-width"
      />
    </Panel>
  );
};
