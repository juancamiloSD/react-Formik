import '../styles/styles.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  
    
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password1: "",
                    password2: "",
                }}
                onSubmit={ (values) => {
                    console.log( values )
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .min(2, 'El nombre debe contener mas de 2 caracteres')
                                .min(15, 'El nombre de contenes menos de 15 caracteres')
                                .required('Requerido'),
                        email: Yup.string()
                                .email('Correo no valido')
                                .required('Requerido'),
                        password1: Yup.string()
                                      .min(6, 'Minimo requerido 6')
                                      .required('Requerido'),
                        password2: Yup.string()
                                      .oneOf([ Yup.ref('password1')], 'Las contraseñas no son iguales')
                                      .required('Requerido')
                    })
                }
            >
            
            { ({ handleReset }) => (
                <Form>
                    <MyTextInput 
                        label='Nombre' 
                        name='name' 
                        placeholder='Juan'
                    />
                    <MyTextInput 
                        label='Email' 
                        name='email' 
                        placeholder='Juan@gmail.com'
                    />
                    <MyTextInput 
                        label='Password' 
                        name='password1'
                        type="password"
                        placeholder='******'
                    />
                    <MyTextInput 
                        label='Repetir Password' 
                        name='password2'
                        type="password"
                        placeholder='******'
                    />
                    <button type='submit'>Enviar</button>
                    <button type='button' onClick={ handleReset }>Borrar</button>
                </Form>
            )}

            </Formik>

        </div>
    )
}
