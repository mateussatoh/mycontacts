const CategoryRepository = require('../repositories/CategoryRepository');

class ContactController {
  async index(request, response) {
    const contacts = await CategoryRepository.findAll();
    response.json(contacts);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response
        .status(400)
        .json({
          error: 'You need to provide a name to create a new category',
        });
    }

    const contact = await CategoryRepository.create({
      name,
    });

    return response.json(contact);
  }
}
// Singleton
module.exports = new ContactController();
