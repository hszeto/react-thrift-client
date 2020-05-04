/* eslint-disable import/named */
import {
  DemoService,
  IUser
} from '../codegen/com/demo';

import { createHttpClient } from '@creditkarma/thrift-client';

const connectClient = (id: number) => {
  const clientConfig = {
    hostName: 'localhost',
    port: 8000,
    path: '/',
  };

  const demoClient: DemoService.Client = createHttpClient(DemoService.Client, clientConfig);

  return new Promise((resolve, reject) => {
    demoClient.getUserInfo(id).then((user: IUser) => {
      resolve(user);
    }, (err: unknown) => {
      reject(err);
    });
  });
};

export { connectClient };
