const SendMessage = (props) => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="textarea1">Add message</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
