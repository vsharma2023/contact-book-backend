const pool = require("../db");

const getAllContacts = async () => {
  const result = await pool.query("SELECT * FROM contacts");
  return result;
};

const getContactsById = async (id) => {
  const result = await pool.query("SELECT * FROM contacts WHERE id= $1", [id]);
  return result;
};

const addConatct = async (name, email, phone) => {
  const checkQuery = "SELECT * FROM contacts WHERE email = $1 AND phone = $2";
  const dupContact = await pool.query(checkQuery, [email, phone]);

  if (dupContact.rows.length > 0) {
    throw new Error("Contact with the provided phone number already exists");
  }

  const queryText = "INSERT INTO contacts(name,email,phone) VALUES($1,$2,$3)";
  const result = await pool.query(queryText, [name, email, phone]);
  return result;
};

const updateContact = async(name,email,phone,id) => {
  const queryText = 'UPDATE contacts SET name = $1, email = $2, phone = $3 WHERE id = $4 ';
  const contact = await pool.query(queryText,[name, email, phone, id]);
  return contact;

};

const deleteContact = async (id) =>{
  const contact = await pool.query('DELETE FROM contacts WHERE id = $1',[id]);
  return contact;
}

module.exports = {
  getAllContacts,
  getContactsById,
  addConatct,
  updateContact,
  deleteContact
};
