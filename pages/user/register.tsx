export default function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <a href="/user/login">Have an account?</a>
            </p>

            <form>
              <fieldset>
                <input
                  type="text"
                  placeholder="Username"
                />
                <input
                  type="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  placeholder="Password"
                />
                <button type="submit">
                  Sign up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
