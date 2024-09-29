import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/userSlice';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registered = useSelector((state) => state.user.registered);
    const dispatch = useDispatch();

    const handleRegister = () => {
        if (!email && !password && !confirmPassword) {
            alert("Все поля должны быть заполнены");
            return;
        }

        if (password !== confirmPassword) {
            alert("Пароли не совпадают");
            return;
        }

        dispatch(registerUser({ email, password }));
    };

    return (
        <div>
            <h2>Регистрация</h2>
            {registered && <p>Пользователь с таким email уже зарегистрирован</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
};

export default RegisterForm;