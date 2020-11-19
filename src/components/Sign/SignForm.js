const SignForm = (props) => {
  return (
    <form>
      {props.isRegisterTap ? (
        <div className="input-field">
          <input id="name" type="text" />
          <label htmlFor="name">Name</label>
        </div>
      ) : undefined}
      <div className="input-field">
        <input id="email" type="email" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-field">
        <input id="password" type="text" />
        <label htmlFor="password">Password</label>
      </div>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Submit
      </button>
    </form>
  );
};

export default SignForm;
