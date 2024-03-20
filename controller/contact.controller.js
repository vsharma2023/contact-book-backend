const contactService = require("../service/contact.service");

const getAllContacts = async (req, res) => {
  const result = await contactService.getAllContacts();
  res.send(result.rows);
};

const getContactsById = async (req, res) => {
  const id = req.params.id;
  const result = await contactService.getContactsById(id);
  res.send(result.rows);
};
const addConatct = async (req, res) => {
  const { name, email, phone } = req.body;
  const contact = await contactService.addConatct(name, email, phone);
  res.send("contact created successfully");
};

const updateContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const id = req.params.id;
  const contact = await contactService.updateContact(name, email, phone, id);
  res.send("contact updated");
};

const deleteContact = async(req,res)=>{
  const id = req.params.id;
  const contact = await contactService.deleteContact(id);
  console.log('contact deleted');
  res.send("contact deleted");
}
module.exports = {
  getContactsById,
  getAllContacts,
  addConatct,
  updateContact,
  deleteContact,
};
