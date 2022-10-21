import { Component } from 'react';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          <h4>Name</h4>
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
        />
        <div>
          <button type='button'>Add contact</button>
          </div>
        </div>
          <h2>Contacts</h2>
          <ul>
            <li>Rosie Simpson</li>
          </ul>
    </div>
  );
  }
  
};
