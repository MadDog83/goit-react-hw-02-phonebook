
const Filter = ({ value, onChange }) => (
    <label>
      Find contacts by name:
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </label>
  );
  
  export default Filter;