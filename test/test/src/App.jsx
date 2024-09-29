import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import RegisterForm from './components/RegisterForm.jsx';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <RegisterForm />
            </div>
        </Provider>
    );
}

export default App;