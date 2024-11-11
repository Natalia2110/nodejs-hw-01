import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
  try {
    const removeContacts = [];
    writeContacts(removeContacts);
  } catch (err) {
    console.log(err);
  }
};

removeAllContacts();
