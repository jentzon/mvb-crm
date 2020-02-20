import React, { useState, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export interface SubmitForm {
    email: string;
    password: string;
    keepLoggedIn: boolean;
}

export type SubmitFunction = (formData: SubmitForm) => void;
type OnTextInputChangeFunction = (event: MouseEvent<HTMLButtonElement>) => string;
type OnButtonPressedFunction = (event: MouseEvent<HTMLButtonElement>) => void;

interface LoginFormProps {
    onFormSubmit: SubmitFunction;
}

export const LoginForm = (props: LoginFormProps) => {
    /*
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const onEmailTextChanged = (text: string): void => {
        setEmail(text);
    };
    const onPasswordTextChanged = (text: string): void => {
        setPassword(text);
    };
    const onKeepLoggedInChanged = (status: boolean): void => {
        setKeepLoggedIn(status);
    };
    */

    const onFormSubmitPress: OnButtonPressedFunction = event => {
        event.preventDefault();
        const formData = {
            email: 'test@test.se',
            password: 'password',
            keepLoggedIn: true,
        };
        props.onFormSubmit(formData);
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ange email" autoComplete="mvb-user" />
                <Form.Text className="text-muted">Ange din @mvbab.se mail adress</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Lösenord</Form.Label>
                <Form.Control type="password" placeholder="Ange lösenord" autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Håll mig inloggad" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onFormSubmitPress}>
                Submit
            </Button>
        </Form>
    );
};

LoginForm.propTypes = {
    onFormSubmit: PropTypes.func,
};
