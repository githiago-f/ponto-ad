import axios from 'axios';

export const GraphAPI = axios.create({
  baseURL: 'https://graph.microsoft.com/v1.0'
});
