const { v4: uuidv4 } = require('uuid');
const db = require('../../database');

let contacts = [
  {
    id: uuidv4(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '123456789',
    category_id: uuidv4(),

  },
  {
    id: uuidv4(),
    name: 'Joao',
    email: 'joao@mail.com',
    phone: '123456789',
    category_id: uuidv4(),

  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  findByPhone(phone) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.phone === phone),
    ));
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));
      resolve(
        updatedContact,
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
