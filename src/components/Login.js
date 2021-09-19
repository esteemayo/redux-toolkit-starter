import { useDispatch } from 'react-redux';

import { login, logout } from 'features/user';

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(
                    login({
                        name: 'John Doe',
                        email: 'jdoe@example.com',
                        age: 30,
                    })
                )}
            >
                Login
            </button>
            &nbsp;
            <button onClick={() => dispatch(logout())}> Logout </button>
        </div>
    );
};

export default Login;
