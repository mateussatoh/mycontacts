const { v4: uuidv4 } = require('uuid');

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

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
