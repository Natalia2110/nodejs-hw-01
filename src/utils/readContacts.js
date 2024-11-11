import { PATH_DB } from "../constants/contacts.js";
// import path from "node:path";
import * as fs from "node:fs/promises";

export const readContacts = async () => {
  //   console.log(PATH_DB);
  try {
    const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(error);
  }

  //   const contacts = JSON.parse(data);
  //   console.log(contacts);
  //   return contacts;
  //   return data;
};

// readContacts().catch((error) => console.log(error));
