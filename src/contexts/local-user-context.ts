import { createContext, useEffect, useState } from 'react';
import { CalendarEvent, Message } from '@data/MSGraph';
import { graphConfig } from 'config';
import { GraphService } from 'services/graph-service';
import { objectifyBatchResponse } from 'utils/objectifyBatchResponse';

export const useLocalUserData = (token: string | undefined) => {
  const [messages, setMessages] = useState([] as Message[]);
  const [photo, setPhoto] = useState('');
  const [events, setEvents] = useState([] as CalendarEvent[]);

  useEffect(() => {
    if(token) {
      const headers = {
        'Authorization': `Bearer ${token}`
      };
      const {url, body} = graphConfig.getUserInfos;
      GraphService.post(url, body, {headers})
        .then(({data, status}) => {
          if(status === 200) {
            const response = objectifyBatchResponse(data.responses);
            setPhoto(response.photo as string);
            setMessages(response.messages as Message[]);
            setEvents(response.events as CalendarEvent[]);
          }
        })
        .catch(console.error);
    }
  }, [token]);

  return {
    messages,
    photo,
    events
  };
};

export const LocalUserContext = createContext({
  photo: '', 
  events: [] as CalendarEvent[], 
  messages: [] as Message[]
});
