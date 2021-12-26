import Dexie from "dexie";
import { CodeType, OptionType } from "../store/types";

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
  db.dbData.add(dbData);
}

function dbPut(dbData: DataType) {
  db.dbData.put(dbData);
}

function dbFind(mid: string) {
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
  return db.dbData.where("mid").equals(mid).delete();
}

export { dbAdd, dbPut, dbFind, dbDelete };
