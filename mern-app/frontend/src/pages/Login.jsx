import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'




function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login and start setting goals</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>


                    <form>
                        <div className="form-group">
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={email}
                                placeholder='Enter your email'
                                onChange={onChange}
                                className="formcontrol"
                            />
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                            <input
                                type="password"
                                id='password'
                                name='password'
                                value={password}
                                placeholder='Enter your password'
                                onChange={onChange}
                                className="formcontrol"
                            />
                        </div>
                    </form>
                    <form>

                        <div className="form-group">
                            <button className='btn btn-block' type='submit'>Submit</button>
                        </div>
                    </form>
                </form>
            </section>

        </>
    )
}

export default Login
