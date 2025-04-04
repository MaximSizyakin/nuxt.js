export const DB_DIALECT = 'sqlite';
export const DB_STORAGE = 'storage/db.sqlite';

// check required fields in pr.env

export const DB_SERVER = process.env.APP_DB_SERVER
export const DB_USER = process.env.APP_DB_USER
export const DB_PASS = process.env.APP_DB_PASS
export const DB_NAME = process.env.APP_DB_NAME
export const DB_PORT = process.env.APP_DB_PORT