const prompts = require('prompts');
const bcrypt = require('bcrypt');
const database = require('../core/database');
const { User } = require('../models/user.model');

const createUser = async () => {
  try {
    const answers = await prompts([
      {
        name: 'username',
        type: 'text',
        message: 'username'
      },
      {
        name: 'password',
        type: 'password',
        message: 'password'
      },
      {
        name: 'confirmation',
        type: 'password',
        message: 'confirmation'
      }
    ]);

    if (answers.password !== answers.confirmation) {
      console.error('passwords don\'t match.');
      return;
    }

    await database.sync();

    const password = await bcrypt.hash(answers.password, 10);
    await User.create({ username: answers.username, password, enabled: true });

    console.log('created successfully.');
    return;
  } catch (err) {
    console.error('an error occured.');
    return;
  }
}

createUser();
