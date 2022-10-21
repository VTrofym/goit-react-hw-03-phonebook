import { Contacts } from 'components/Contacts';
import { Component } from 'react';
// import { nanoid } from 'nanoid';
import css from './App.module.css';
// import dataContacts from '../../data/contacts.json';

export class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'John Bold', number: '(067)-323-43-43' },
      { id: 2, name: 'Jane Gold', number: '(066)-123-24-43' },
      { id: 3, name: 'Jim Fold', number: '(097)-456-40-39' },
      { id: 4, name: 'Jack Daniels', number: '(050)-488-48-38' },
    ],
    filter: '', 
    name: '',
    number: '',
  };

  handleChangeInput = event => {
    const { value } = event.target;
    console.log(value)
    this.setState({filter: value});
  }

  render() {
    // const { name } = this.state;
    return (
      <form className={css.allContent}>
        <h1>Phonebook</h1>
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
            <button type="button" className={css.addContact}>Add contact</button>
          </div>
        </div>
        <Contacts filter={this.state.filter} contacts={this.state.contacts} handleChangeInput={this.handleChangeInput} />
      </form>
    );
  }
}
