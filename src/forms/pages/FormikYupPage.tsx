import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikYupPage = () => {

    const { 
        handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log( values )
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                          .max(15, 'Debe contener 15 caracteres maximo')
                          .min(15, 'Debe contener 2 caracteres minimo')
                          .required('Requerido'),
            lastName: Yup.string()
                          .max(15, 'Debe contener 15 caracteres maximo')
                          .min(15, 'Debe contener 2 caracteres minimo')
                          .required('Requerido'),
            email: Yup.string()
                          .nullable().email('Email no es valido')
                          .required('Requerido')               
        })
    })

    return (
        <div>
            <h1>Formik Yup</h1>

            <form onSubmit={ handleSubmit } noValidate>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text"
                    { ...getFieldProps('firstName') }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    { ...getFieldProps('lastName') }

                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="emailAddress">Email Address</label>
                <input 
                    type="email"
                    { ...getFieldProps('email') }

                />
                { touched.email && errors.email && <span>{ errors.email }</span>}


                <button type='submit'>
                    Send
                </button>
            </form>
        </div>
    )
}
