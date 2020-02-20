import React from 'react';
import { LoginForm, SubmitFunction } from '@components/functional/login/loginForm';

const HomePage: React.FC = () => {
    const onFormSubmit: SubmitFunction = formData => {
        console.log(JSON.stringify(formData));
    };
    return (
        <div className="LoginForm">
            <LoginForm onFormSubmit={onFormSubmit} />
        </div>
    );
};

export default HomePage;
