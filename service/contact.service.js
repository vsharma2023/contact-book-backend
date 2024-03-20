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
const addConatct = async (name,email,phone) => {
  const contact = await contactModel.addConatct(name,email,phone);
  return contact;
}
const updateContact = async (name,email,phone,id) =>{
  const contact = await contactModel.updateContact(name,email,phone,id);
  return contact;
}
const deleteContact = async(id) =>{
  const conatct = await contactModel.deleteContact(id);
  return conatct;
}
module.exports = {
  getContactsById,
  getAllContacts,
  addConatct,
  updateContact,
  deleteContact
};
