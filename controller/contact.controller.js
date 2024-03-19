const contactService = require("../service/contact.service");

const getAllContacts = async (req, res) => {
  const result = await contactService.getAllContacts();
  res.send(result.rows) ;
};

const getContactsById = async (req, res) => {
  const id = req.params.id;
  const result = await contactService.getContactsById(id);
  res.send(result.rows) ;
};

module.exports = {
  getContactsById,
  getAllContacts,
};
