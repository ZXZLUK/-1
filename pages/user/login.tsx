export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <a href="/user/register">Need an account?</a>
            </p>

            <form>
              <fieldset>
                <input
                  type="text"
                  placeholder="Email"
                />
                <input
                  type="password"
                  placeholder="Password"
                />
                <button type="submit">
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
