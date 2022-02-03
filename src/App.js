import './App.css';

import { Component } from 'react';
import shortid from 'shortid';

import ContactForm from './component/ContactForm/ContactForm';
import ContactFilter from './component/ContactFilter/ContactFilter';
import ContactList from './component/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filterValue: '',
  };
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  addContact = data => {
    const contactСomparison = this.state.contacts
      .map(contact => contact.name.toLocaleLowerCase())
      .includes(data.name.toLocaleLowerCase());

    if (contactСomparison) {
      alert(`${data.name} is already in contacts`);
    } else {
      const newContact = { ...data, id: shortid.generate() };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  сhangeFilter = e => {
    const { value } = e.target;
    this.setState({ filterValue: value });
  };

  filterContacts = () => {
    const { filterValue, contacts } = this.state;
    const normalizedFilter = filterValue.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  };

  render() {
    const { addContact, сhangeFilter, deleteContact } = this;
    const { filterValue } = this.state;
    const visibleFilter = this.filterContacts();
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <ContactFilter value={filterValue} onChange={сhangeFilter} />
        <ContactList
          contactsList={visibleFilter}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;