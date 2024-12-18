### Andrew's Contributioin to Team B's react code
Andew worked primarily on the backend code for the login and sign up pages. He also worked on the admin login page.
## Login Contributioin
# Login.jsx page
```js
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className={styles.Form}>
            <div className={styles.Brand}>
                <img className={styles.Logo} src="/MECAZON_logo.svg" alt="MECAZON LOGO" /> MECAZON
            </div>
            <h1 className={styles.Header}>Log in</h1>
            <form action="">
                <label className={styles.Label} htmlFor="email">Email Address:</label> <br />
                <input className={styles.Input} type="email" id="email" name="email" required /> <br /> <br />

                <label className={styles.Label} htmlFor="password">Password:</label> <br />
                <input className={styles.Input} type="password" id="password" name="password" pattern="" required /> <br /> <br />

                <button type="submit">Login</button>

                <p className={styles.RegisterText}>New to MECAZON?</p>
                <Link to="/register">Sign Up</Link>
            </form>
        </div>
    );
}
```
## Sign Up Contribution
# Signup.jsx page
## Admin Contribution
#