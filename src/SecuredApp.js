import React from 'react';
import App from './App';
import {
  AuthProvider,
  AuthService,
  useAuth,
} from 'react-oauth2-pkce'

const authService = new AuthService({
    clientId: 'oidc-client',
    authorizeEndpoint: 'http://localhost:8080/auth/realms/oidcrealm/protocol/openid-connect/auth',
    tokenEndpoint: 'http://localhost:8080/auth/realms/oidcrealm/protocol/openid-connect/token',
    logoutEndpoint: 'http://localhost:8080/auth/realms/oidcrealm/protocol/openid-connect/logout',
    redirectUri: 'http://localhost:3000',
    scopes: ['openid'],
});
function SecuredApp() {
    const { authService } = useAuth();

    const login = async () => authService.authorize();
    const logout = async () => authService.logout(true);

    if (authService.isPending()) {
        return <div>
            Loading...
            <button onClick={() => { logout(); login(); }}>Reset</button>
        </div>
    }

    if (!authService.isAuthenticated()) {
        return (
            <div>
                <p>Not Logged in yet</p>
                <button onClick={login}>Login</button>
            </div>
        )
    }

    const token = authService.getAuthTokens();
    return (
        <div>
            <button onClick={logout}>Logout</button>
            <App />
        </div>
    );
}

function WrappedSecuredApp() {
    return (
        <AuthProvider authService={authService} >
            <SecuredApp />
        </AuthProvider>
    );
}

export default WrappedSecuredApp;
