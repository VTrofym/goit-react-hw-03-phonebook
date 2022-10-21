export function ContactList({ contacts, handleChangeInput, filter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleChangeInput} />
      </label>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            {/* <button id={contact.id} onClick={deleteContact}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
