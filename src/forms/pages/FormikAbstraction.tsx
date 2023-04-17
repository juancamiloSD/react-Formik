import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput, MySelect, MyCheckbox } from '../components'

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    jobType: '',
                    terms: false,
                }}
                onSubmit={ ( values ) => {
                    console.log( values )
                }}
                validationSchema={ 
                    Yup.object({
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
                                    .required('Requerido'),
                        jobType: Yup.string()
                                    .notOneOf(['qa'], 'Esta opcion no es permitida')
                                    .required('Requerido'), 
                        terms: Yup.boolean()
                                    .oneOf([true], 'Debe aceptar los terminos y condiciones')
                    })
                }
            >
            
            { (formik) => (
                    <Form>
                        
                        <MyTextInput label='First Name' name='firstName' placeholder='Primer nombre'/>

                        <MyTextInput label='Last Name' name='lastName' placeholder='Primer apellido'/>

                        <MyTextInput label='Email Address' name='email' placeholder='Correo electrónico' type="email"/>

                        <MySelect label='Job Type' name='jobType'>
                            <option value="">Pick something</option>
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="it-senior">It Senior</option>
                            <option value="qa">QA</option>
                        </MySelect>    

                        <MyCheckbox label="Terms and Conditions" name="terms"/>
      
                        <button type='submit'>Send</button>

                    </Form>
                )
            }
            </Formik>
        </div>
    )
}
