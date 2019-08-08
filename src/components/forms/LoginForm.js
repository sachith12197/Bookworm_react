import React from 'react';
import Validator from 'validator';
import { Form, Button} from "semantic-ui-react";
import InlineError from '../messges/InlineError';

class LoginForm extends React.Component{
    state = {
        data:{
            email:'',
            password:''
        },
        loading: false,
        errors:{}
    };

onChange = e =>
    this.state({
        data:{...this.state.data, [e.target.name]: e.target.value}
    });

onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
};

validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if(!data.password) errors.password = "Can't be blank";
    return errors;
};

    render(){
        const { data, errors } = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error = {!!errors.email}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" 
                           id="email" 
                           name="email" 
                           placeholder="example@example.com"
                           value={data.email}
                           onChange={this.onChange}/>
                 {errors.email && <InlineError text={errors.email} />}   
                 </Form.Field>
                
                 <Form.Field error = {!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                           id="password" 
                           name="password" 
                           placeholder="Make it secure"
                           value={data.password}
                           onChange={this.onChange}/>
                 {errors.password && <InlineError text={errors.password} />}
                 </Form.Field> 
                   
               <Button primary>Login</Button> 
            </Form>
        );
    }
}


export default LoginForm;