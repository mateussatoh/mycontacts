const { v4: uuidv4 } = require('uuid');

const contacts = [
  {
    id: uuidv4(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '123456789',
    category_id: uuidv4(),

  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
