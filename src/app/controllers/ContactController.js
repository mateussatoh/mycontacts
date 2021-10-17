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

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    const hasEmailDuplicate = await ContactRepository.findByEmail(email);
    const hasPhoneDuplicate = await ContactRepository.findByPhone(phone);

    if (!name || !phone) {
      return response.status(400).json({ error: 'You need to provide a name and a phone number to create a new contact' });
    }

    if (hasEmailDuplicate) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    if (hasPhoneDuplicate) {
      return response.status(400).json({ error: 'This phone number is already in use' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    return response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const hasEmailDuplicate = await ContactRepository.findByEmail(email);
    const hasPhoneDuplicate = await ContactRepository.findByPhone(phone);
    const contactExists = await ContactRepository.findById(id);

    if (!name || !phone) {
      return response.status(400).json({ error: 'You need to provide a name and a phone number to modify an existing contact' });
    }

    if (!contactExists) {
      return response.status(404).json({ error: 'User does not exists' });
    }

    if (hasEmailDuplicate && contactExists.email !== email) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    if (hasPhoneDuplicate && contactExists.phone !== phone) {
      return response.status(400).json({ error: 'This phone number is already in use' });
    }

    const contact = await ContactRepository.update(id, {
      name, email, phone, category_id,
    });

    return response.json(contact);
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
