import loginImg from "../images/login.png"

const Login = (props) => {
    return (
        <div className="Login">
            <div className="login--images">
                <img src={loginImg} alt="Autumn Picnic"/>
            </div>
            <form className="login--form">
                <fieldset>
                    <legend>Sign Up</legend>
                    <p>Sign up to see photos and videos from your friends.</p>
                    <label for="username">@
                        <input id="username" placeholder="username" required/>
                    </label>
                    <button type="submit">Register</button>
                </fieldset>
                <fieldset>
                    <span>Already have an account?</span>
                    <button type="button">Log in</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Login;