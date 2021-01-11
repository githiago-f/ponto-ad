import { graphConfig } from 'config';
import { createContext, useEffect, useState } from 'react';
import { GraphService } from 'services/graph-service';

type Message = {};
type CalendarEvent = {};

export const useLocalUserData = (token: string | undefined) => {
  const [messages, setMessages] = useState([] as Message[]);
  const [photo, setPhoto] = useState('');
  const [events, setEvents] = useState([] as CalendarEvent);

  useEffect(() => {
    if(token) {
      const headers = {
        'Authorization': `Bearer ${token}`
      };
      const {url, body} = graphConfig.getUserInfos;
      GraphService.post(url, body, {headers})
        .then(({data, status}) => {
          if(status === 200) {
            console.log(data.responses);
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

export const LocalUserContext = createContext({});
