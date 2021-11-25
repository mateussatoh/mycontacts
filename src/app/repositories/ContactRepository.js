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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async findByPhone(phone) {
    const [row] = await db.query('SELECT * FROM contacts WHERE phone = $1', [phone]);
    return row;
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
