import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuthProviderWrapper = ({ children }) => {
    return (
        <GoogleOAuthProvider clientId="665690023472-571g4sim0ie57jo8e9slo1dmlf0rnada.apps.googleusercontent.com">
            {children}
        </GoogleOAuthProvider>
    );
};

export default GoogleAuthProviderWrapper;
