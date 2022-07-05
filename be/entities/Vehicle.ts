import {ObjectId} from 'mongodb'

export type Vehicle = {
  _id: ObjectId;
  modelYear: number;
  make: string;
};
