import { Contacts } from 'components/Contacts';
import { Component } from 'react';
// import { nanoid } from 'nanoid';
import css from './App.module.css';
// import dataContacts from '../../data/contacts.json';

export class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'John Bold', number: 123234343 },
      { id: 2, name: 'Jane Gold', number: 123245643 },
      { id: 3, name: 'Jim Fold', number: 123456439 },
    ],
    name: '',
    number: '',
  };

  // handleChange = event => {
  //   const { value } = event.target;
  //   this.setState({ [value]: value });
  // }

  render() {
    // const { name } = this.state;
    return (
      <form className={css.allContent}>
        <h2>Phonebook</h2>
        <div className={css.boxInput}>
          <label className={css.titleName}>
            Name
            <br />
            <input
              // value={name.value}
              // onChange={this.handleChange}
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Numbers
            <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <div>
            <button type="button">Add contact</button>
          </div>
        </div>
        <Contacts contacts={this.state.contacts} />
      </form>
    );
  }
}
