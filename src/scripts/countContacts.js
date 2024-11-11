import { readContacts } from "../utils/readContacts.js";
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const countContacts = contacts.length;
    return countContacts;
  } catch (err) {
    console.error("Помилка читання файлу:", err);
  }
};

console.log(await countContacts());
