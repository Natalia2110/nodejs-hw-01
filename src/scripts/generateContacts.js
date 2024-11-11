import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact(i);
      newContacts.push(contact);
    }
    const newArray = [...contacts, ...newContacts];
    writeContacts(newArray);
  } catch (err) {
    console.error("Помилка додавання даних до файлу:", err);
  }
};

generateContacts(5);
