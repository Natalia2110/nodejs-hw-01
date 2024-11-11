import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const oneContact = createFakeContact();
    const newArray = [...contacts, oneContact];
    // console.log("newArray", newArray);
    writeContacts(newArray);
  } catch (err) {
    console.error("Помилка додавання даних до файлу:", err);
  }
};

addOneContact();
