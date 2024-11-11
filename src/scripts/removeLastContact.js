import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length < 1) {
      console.log("Контакти відсутні!");
      return;
    }
    const newContacts = contacts.slice(0, -1);

    writeContacts(newContacts);
  } catch (err) {
    console.log(err);
  }
};

removeLastContact();
