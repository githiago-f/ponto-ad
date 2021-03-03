import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import {  MapPanel, MapPanelWrapper, Panel, TimerSubtitle, TimerTitle, ControlPanel } from './styles';
import { useCurrentTime } from 'utils/useCurrentTime';
import { usePointPanelHooks } from './hooks';

export const PointPanel = () => {
  const { currentTime } = useCurrentTime();
  const { addNote, noteNum } = usePointPanelHooks();

  return (
    <Panel className="ms-depth-8">
      <MapPanelWrapper>
        <MapPanel>
        </MapPanel>
        <ControlPanel>
          <TimerSubtitle>Entrada {noteNum}</TimerSubtitle>
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
