import { createContext, useEffect, useState } from 'react';
import { BatchResponse, CalendarEvent, GraphResponse, Message } from '@data/MSGraph';
import { graphConfig } from 'config';
import { GraphAPI } from 'services/graph-api';
import { objectifyBatchResponse } from 'utils/objectifyBatchResponse';

type GraphRes = {responses: GraphResponse[]}

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
      GraphAPI.post<GraphRes>(url, body, {headers})
        .then(({data, status}) => {
          if(status === 200) {
            const response = objectifyBatchResponse<BatchResponse>(data.responses);
            setPhoto(response.photo);
            setMessages(response.messages);
            setEvents(response.events);
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
  events: [], 
  messages: []
} as BatchResponse);
