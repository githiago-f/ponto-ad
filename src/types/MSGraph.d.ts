declare module '@data/MSGraph' {
  type GraphResponse = {
    '@odata.nextLink'?: string;
    id: string;
    headers: {
      'Content-Type'?: string;
    },
    body: {
      value: Array<any>
    },
    status: number;
  }

  type Message = {

  }

  type CalendarEvent = {
    
  }

  type BatchResponse = {
    photo: string;
    messages: Message[];
    events: CalendarEvent[];
  }
}
