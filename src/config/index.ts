type ApplicationConfig = {
  AzureAd: {
    clientId: string;
    authority: string;
  };
  scopes: string[];
}

type GraphConfig = {
  getUserInfos: {
    url: string;
    body: Record<string, any>[];
  }
}

export const config: ApplicationConfig = require('./application.json');

export const graphConfig: GraphConfig = require('./requests.graph.json');
