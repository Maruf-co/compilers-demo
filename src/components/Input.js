const Input = ({ handleSubmit, handleChange, isDisabled }) => {
  return (
    <form onSubmit={handleSubmit} className="panel p-4 mx-2">
      <div className="field">
        <label className="label">Your code</label>
        <textarea onChange={handleChange} className="textarea" disabled={isDisabled}></textarea>
      </div>
      <button type="submit" className="button is-info">
        Run!
      </button>
    </form>
  );
};

export default Input;
