const pool = require('../db');

const getAllContacts = async()=>{
  const result = await pool.query('SELECT * FROM contacts');
  return result;
}

const getContactsById = async(id)=>{
  const result = await pool.query('SELECT * FROM contacts WHERE id= $1',[id]);
  return result;
}

module.exports = {
  getAllContacts,
  getContactsById
}