const contactModel = require("../repository/contact.model");

const getAllContacts = async () => {
  const results = await contactModel.getAllContacts();
  console.log(results);
  return results;
};
const getContactsById = async (id) => {
  const results = await contactModel.getContactsById(id);
  console.log(results);
  return results;
};

module.exports = {
  getContactsById,
  getAllContacts,
};
