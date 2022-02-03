import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

function ContactFilter({ value, onChange }) {
  return (
    <label>
      <span className={s.label}>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default ContactFilter;