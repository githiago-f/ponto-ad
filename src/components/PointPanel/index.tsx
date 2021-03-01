import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import {  MapPanel, MapPanelWrapper, Panel, TimerSubtitle, TimerTitle, ControlPanel } from './styles';
import { useCurrentTime } from 'utils/useCurrentTime';
import { usePointPanelHooks } from './hooks';

export const PointPanel = () => {
  const { currentTime } = useCurrentTime();
  const { addNote } = usePointPanelHooks();

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
        onClick={addNote}
        className="full-width"
      />
    </Panel>
  );
};
