import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction, RegisterFormikPage, DynamicForm } from '../forms/pages'

export const Navigation = () => {
  return (
    <>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={ logo } alt="react logo" />
                    <ul>
                        <li>
                            <NavLink to="register" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik-basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik-Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik-Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="formik-abstraction" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik-Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to="formik-register" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik-Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic-Form</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="home" element={ <h1>Home Page</h1> }/>
                    <Route path="register" element={ <RegisterPage /> }/>
                    <Route path="formik-basic" element={ <FormikBasicPage /> }/>
                    <Route path="formik-yup" element={ <FormikYupPage /> }/>
                    <Route path="formik-components" element={ <FormikComponents /> }/>
                    <Route path="formik-abstraction" element={ <FormikAbstraction /> }/>
                    <Route path="formik-register" element={ <RegisterFormikPage /> }/>
                    <Route path="dynamic-form" element={ <DynamicForm /> }/>
                    <Route path="/*" element={ <Navigate to="home" replace/> }/>
                </Routes>

            </div>
        </BrowserRouter>
    </>
  )
}
