import Dexie from "dexie";
import { CodeType, OptionType } from "../store/types";
import throttle from "lodash/throttle";

interface DataType {
  id?: number;
  mid: string;
  code: CodeType;
  options: OptionType;
}

class DB extends Dexie {
  dbData!: Dexie.Table<DataType, number>;

  constructor() {
    super("dbData");

    this.version(1).stores({
      dbData: "++id,mid",
    });
  }
}

const db = new DB();

function dbAdd(dbData: DataType) {
  console.log("dbAdd", dbData);
  db.dbData.add(dbData);
}

async function dbPut(dbData: DataType) {
  console.log("dbPut", dbData);
  const result = (await dbFind(dbData.mid)) as any;
  console.log("result", result);
  db.dbData.put({ ...dbData, id: result.id });
}

function dbFind(mid: string) {
  console.log("dbFind", mid);
  return new Promise((resolve, reject) => {
    db.dbData
      .where("mid")
      .equals(mid)
      .toArray()
      .then((res) => {
        resolve(res[0]);
      });
  });
}

function dbDelete(mid: string) {
  console.log("dbDelete", mid);
  return db.dbData.where("mid").equals(mid).delete();
}

const dbSlowPut = throttle((dbData: DataType) => dbPut(dbData), 300);

export { dbAdd, dbPut, dbFind, dbDelete, dbSlowPut };
