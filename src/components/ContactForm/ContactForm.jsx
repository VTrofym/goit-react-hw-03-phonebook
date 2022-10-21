import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({[name]: value})
  }

  

  render() {
    return(
    <div className={css.boxInput}>
          <label className={css.titleName}>
            Name
            <br />
            <input
              value={this.state.name}
              onChange={this.handleChange}
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
            onChange={this.handleChange}
            value={this.state.number}
            className={css.input}
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
  )
  }
  
};
