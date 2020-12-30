import classes from './../components/common/FormControls/FormControls.module.css';
import React from 'react';
import {Field} from 'redux-form';
import {InputText} from '../components/common/FormControls/FormControls';
import {requiredField} from '../Utils/Validators/validstors';
// import './login.module.css'


const LoginForm = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.loginFormWrapper} >
                <form onSubmit={props.handleSubmit} >
                    <div >
                        <Field type="text"
                               validate={[requiredField]}
                               name={'login'}
                               component={InputText}
                               placeholder={'Login'} />
                    </div >
                    <div >
                        <Field type="password"
                               validate={[requiredField]}
                               name={'password'}
                               component={InputText}
                               placeholder={'Password'} />
                    </div >
                    <div >
                        <Field className='remember'
                               type="checkbox"
                               name={'rememberMe'}
                               component={InputText} />
                        <p className={classes.remember}>Remember me</p >
                    </div >
                    {props.error && <div className={classes.form_summary_error} >
                        {props.error}
                    </div >
                    }
                    <div >
                        <button className={classes.loginButton} >Login</button >
                    </div >
                </form >
            </div >
        </div >
    );
};
export default LoginForm;
