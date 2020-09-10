import {
  createConnection,
  getConnectionOptions,
  Connection,
  ConnectionOptions,
} from 'typeorm';

import User from '../entity/User';

const entities = [User];

const optionsSqlite: ConnectionOptions = {
  type: 'sqlite',
  logging: true,
  entities,
  database: './data/line.sqlite',
};


const options = optionsSqlite ;

export default async (): Promise<Connection> => {
  try {
    const defaultOptions = await getConnectionOptions();

    return createConnection(Object.assign(defaultOptions, options));
  } catch (error) {
    return error;
  }
};