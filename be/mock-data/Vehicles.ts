import {ObjectId} from 'mongodb'

const seedVehicles = [
  {
    make: "VW",
    modelYear: 2021,
    _id: new ObjectId("62c4baad63b8d8ccf92bdfcf"),
  },
  {
    make: "Dacia",
    modelYear: 2019,
    _id: new ObjectId("62c4baad63b8d8ccf92bdfd0"),
  },
  {
    make: "Renault",
    modelYear: 2022,
    _id: new ObjectId("62c4baad63b8d8ccf92bdfd1"),
  },
];

export default seedVehicles;