import axios from 'axios';

export const GraphService = axios.create({
  baseURL: 'https://graph.microsoft.com/v1.0'
});
