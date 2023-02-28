import { useState } from 'react'
import './App.css'

function App() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [formControl, setFormControl] = useState({
        firstNameClass: `form-control`,
        lastNameClass: `form-control`,
        emailClass: `form-control`,
        passwordClass: `form-control`,
    })
    const [formError, setFormError] = useState({
        firstNameMsg: "",
        lastNameMsg: "",
        emailMsg: "",
        passwordMsg: ""
    })

    function onChangeForm(e) {
        const { name, value } = e.target;

        setForm((currForm) => {
            return {
                ...currForm,
                [name]: value
            }
        })
    }

    function onSubmitForm(e) {
        e.preventDefault()

        // do validation here

        // first name validation
        if (form.firstName) {
            setFormControl((currFC) => { return { ...currFC, firstNameClass: `form-control success` } })
        } else {
            setFormError((currErr) => { return { ...currErr, firstNameMsg: "Name Cannot be Empty" } });
            setFormControl((currFC) => { return { ...currFC, firstNameClass: `form-control error` } });
        }

        // last name validation
        if (form.lastName) {
            setFormControl((currFC) => { return { ...currFC, lastNameClass: `form-control success` } })
        } else {
            setFormError((currErr) => { return { ...currErr, lastNameMsg: "Name Cannot be Empty" } });
            setFormControl((currFC) => { return { ...currFC, lastNameClass: `form-control error` } })
        }

        // email validation
        if (emailValidation(form.email)) {
            setFormControl((currFC) => { return { ...currFC, emailClass: `form-control success` } })
        } else {
            setFormError((currErr) => { return { ...currErr, emailMsg: "Invalid Email." } });
            setFormControl((currFC) => { return { ...currFC, emailClass: `form-control error` } })
        }

        // password validation
        if (passwordValidation(form.password, form.confirmPassword)) {
            setFormControl((currFC) => { return { ...currFC, passwordClass: `form-control success` } })
        } else {
            setFormError((currErr) => { return { ...currErr, passwordMsg: "Passwords do not match" } });
            setFormControl((currFC) => { return { ...currFC, passwordClass: `form-control error` } })
        }

        console.table(form)
    }

    // ---
    /**
     * returns true or false if email is valid
     */
    function emailValidation(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    /**
     * returns true or false if password is valid
     */
    function passwordValidation(password, confirmPass) {
        return (password == confirmPass)
    }
    // ---

    return (
        <>
            <div className="container" onSubmit={onSubmitForm}>
                <form id="form" className="form" autocomplete="off">
                    <h2>Register</h2>
                    <div className={formControl.firstNameClass}>
                        <label for="firstName">First Name</label>
                        <input name="firstName" value={form.firstName} onChange={onChangeForm} type="text" id="firstName" placeholder="Enter first name" />
                        <small>{formError.firstNameMsg}</small>
                    </div>
                    <div className={formControl.lastNameClass}>
                        <label for="lastName">Last Name</label>
                        <input name="lastName" value={form.lastName} onChange={onChangeForm} type="text" id="lastName" placeholder="Enter last name" />
                        <small>{formError.lastNameMsg}</small>
                    </div>
                    <div className={formControl.emailClass}>
                        <label for="email">Email</label>
                        <input name="email" value={form.email} onChange={onChangeForm} type="text" id="email" placeholder="Enter email" />
                        <small>{formError.emailMsg}</small>
                    </div>
                    <div className={formControl.passwordClass}>
                        <label for="password">Password</label>
                        <input name="password" value={form.password} onChange={onChangeForm} type="password" id="password" placeholder="Enter password" />
                        <small>{formError.passwordMsg}</small>
                    </div>
                    <div className={formControl.passwordClass}>
                        <label for="confirmPassword">Confirm Password</label>
                        <input name="confirmPassword" value={form.confirmPassword} onChange={onChangeForm} type="password" id="confirmPassword" placeholder="Enter password again" />
                        <small>{formError.passwordMsg}</small>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default App
