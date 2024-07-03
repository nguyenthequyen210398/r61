import { useGoogleAuth } from './GoogleAuth';

const LogoutButton = () => {
    const { signOut } = useGoogleAuth();

    return (
        <button onClick={signOut}>Logout</button>
    );
};

export default LogoutButton;