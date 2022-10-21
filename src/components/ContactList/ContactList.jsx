import css from './ContactList.module.css';

export function ContactList({ contacts, handleChangeInput, filter }) {
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
            <button className={css.button} id={contact.id} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
// onClick={deleteContact}