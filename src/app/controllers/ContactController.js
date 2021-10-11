const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  show() {
  }

  store() {
  }

  update() {
  }

  delete() {
  }
}

// Singleton
module.exports = new ContactController();
