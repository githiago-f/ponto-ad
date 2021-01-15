import { GraphResponse } from '@data/MSGraph';

type Objectifyed = Record<string, any[] | string>

export const objectifyBatchResponse = (batch: GraphResponse[]) => {
  return batch.filter((response) => response.status === 200)
    .reduce((val, response) => {
      if(response.headers['Content-Type']?.match(/image\/*/gi)) {
        return Object.assign({}, val, {
          [response.id]: `data:${response.headers['Content-Type']};base64,${response.body}`
        });
      }
      return Object.assign({}, val, {
        [response.id]: response.body.value
      });
    }, {} as Objectifyed);
};
