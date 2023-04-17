import { MySelect, MyTextInput } from '../components';
import data from '../data/custom-form.json'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const initialValues: { [key:string]: any } = {}
const requiredFields:  { [key:string]: any } = {}

for(const text of data) {
  initialValues[ text.name ] = text.value
  if( !text.validations ) continue

  let schema = Yup.string()

  for(const rule of text.validations){
    if( rule.type === 'required' ){
      schema = schema.required( rule.message )
    }
    if( rule.type === 'min' ){
      schema = schema.min( (rule as any).value, rule.message )
    }
    if( rule.type === 'max' ){
      schema = schema.max( (rule as any).value, rule.message )
    }
    if( rule.type === 'email' ){
      schema = schema.email( rule.message )
    }
  }
  requiredFields[text.name] = schema

};

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {

  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ (values) => {
          console.log( values )
        }}
      >
          { ({ handleReset }) => (
            <Form noValidate>
              {
                data.map( ({ type, name, placeholder, label, options }) => {

                  if( type === 'text' || type === 'password' || type === 'email'){
                    return  <MyTextInput 
                              key={ name }
                              type={ (type as any) } 
                              name={ name } 
                              label={ label } 
                              placeholder={ placeholder }
                            />
                  } else if( type === 'select' ){
                    return  <MySelect 
                              key={ name }
                              label={ label } 
                              name={ name }
                            >
                              <option value="">Seleccionar una opción</option>
                              {
                                options?.map( ({ id, label }) => (
                                  <option key={ id } value={ id }>{ label }</option>
                                ))
                              }
                            </MySelect>
                  }

                  throw new Error(`El type: ${ type }, no es soportado`)
                })
              }

              <button type='submit'>Sent</button>
              <button type='button' onClick={ handleReset }>Reset</button>
            </Form>
          )}
      </Formik>

    </div>
  )
}
