class ContactController {
  index(request, response) {
    response.send('Send from Contact Controller');
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
