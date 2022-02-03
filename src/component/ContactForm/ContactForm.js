import { Component } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { nameInputId, phoneInputId, handleChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={nameInputId}>
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />

        <label className={s.label} htmlFor={phoneInputId}>
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          id={phoneInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;