import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Yup</h1>

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
                        <div className='inputform'>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="span"/>
                        </div>

                        <div className='inputform'>
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>
                        </div>

                        <div className='inputform'>
                            <label htmlFor="emailAddress">Email Address</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="span"/>
                        </div>

                        <div className='inputform'>
                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="qa">QA</option>
                            </Field>    
                            <ErrorMessage name="jobType" component="span"/>
                        </div>

                        <div className='inputform'>
                            <label>
                                <Field name="terms" type="checkbox"/> Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>
                        </div>
                        <button type='submit'>
                            Send
                        </button>
                    </Form>
                )
            }
            </Formik>
        </div>
    )
}
