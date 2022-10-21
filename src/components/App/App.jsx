import { ContactList } from 'components/ContactList';
import { Component } from 'react';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
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
  };

  handleChangeInput = event => {
    const { value } = event.target;
    console.log(value)
    this.setState({filter: value});
  }

  addContact = event => {
    
  }

  render() {
    return (
      <form className={css.allContent}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList filter={this.state.filter} contacts={this.state.contacts} handleChangeInput={this.handleChangeInput} />
      </form>
    );
  }
}
