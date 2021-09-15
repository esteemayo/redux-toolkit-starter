import { useSelector } from 'react-redux';

const Profile = () => {
    const { user } = useSelector((state) => state.user);
    const { color } = useSelector((state) => state.theme);

    return (
        <div style={{ color: color }}>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};

export default Profile;
