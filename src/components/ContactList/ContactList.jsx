import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export function ContactList({ contacts, handleChangeInput, filter, onDeleteContact }) {
  return (
    <div>
      <label>
        Find contacts by name
        <br />
        <input type="text" value={filter} onChange={handleChangeInput} />
      </label>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button className={css.button} id={contact.id} onClick={() => onDeleteContact(contact.id)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })
  ),
  handleChangeInput: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};