import { PATH_DB } from "../constants/contacts.js";
import * as fs from "node:fs/promises";

export const writeContacts = async (updatedContacts) => {
  try {
    const newContacts = await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, undefined, 2)
    );
    return newContacts;
  } catch (error) {
    console.log(error);
  }
};

// writeContacts().catch((error) => console.log(error));
