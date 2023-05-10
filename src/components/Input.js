const Input = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit} className="panel p-4">
      <div className="field">
        <label className="label">Your code</label>
        <textarea onChange={handleChange} className="textarea"></textarea>
      </div>
      <button type="submit" className="button is-info">
        Run!
      </button>
    </form>
  );
};

export default Input;
