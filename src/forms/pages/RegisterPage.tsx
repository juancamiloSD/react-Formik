import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

    const { 
        name, email, password1, password2, formData, 
        onChange, resetForm, isValidEmail
    } = useForm({
        name: "",
        email: "",
        password1: "",
        password2: "",
    })

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log( formData )
    }

    return (
        <div>
            <h1>RegisterPage</h1>

            <form onSubmit={ onSubmit } noValidate>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className={ `${ name.trim().length <= 0 && 'has-error' }` }
                />
                { name.trim().length <= 0 && (<span>Este campo es necesario</span>) }

                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ onChange }
                    className={ `${ !isValidEmail( email ) && 'has-error' }` }
                />
                { !isValidEmail( email ) && (<span>Email no es valido</span>) }

                <input 
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={ password1 }
                    onChange={ onChange }
                />
                { password1.trim().length <= 0 && (<span>Este campo es necesario</span>) }
                { password1.trim().length < 6 && password1.trim().length > 0 && (<span>La contraseña debe contener 6 caracteres</span>) }

                <input 
                    type="password"
                    placeholder="Repeat password"
                    name="password2"
                    value={ password2 }
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && (<span>Este campo es necesario</span>) }
                { password1.trim().length > 0 && password1 !== password2 && (<span>Las contraseñas deben ser iguales</span>) }
                { password2.trim().length < 6 && password2.trim().length > 0 && (<span>La contraseña debe contener 6 caracteres</span>) }

                <button type='submit'>Enviar</button>
                <button type='button' onClick={ resetForm }>Borrar</button>
            </form>
        </div>
    )
}
