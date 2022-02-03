import PropTypes from 'prop-types';
import s from './ContactList.module.css';
function ContactList({ contactsList, deleteContact }) {
  return (
    <ul className={s.list}>
      {contactsList.map(({ name, number, id }) => (
        <li key={id} className={s.listItem}>
          <p>
            {name} : {number}
          </p>

          <button type="submit" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactsList: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;