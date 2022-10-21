export function Contacts({ contacts, handleChangeInput, filter }) {
  return (
    <div>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleChangeInput} />
      </label>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
