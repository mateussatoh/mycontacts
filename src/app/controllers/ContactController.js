const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    return response.json(contact);
  }

  store() {
  }

  update() {
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactRepository.delete(id);
    return response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
