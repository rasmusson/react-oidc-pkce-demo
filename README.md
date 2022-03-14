# Simple React app to demo OIDC PKCE
A simple app that for initiating and showing the result of OIDC PKCE integration.

It is a good option to showcase a simple OIDC integration in demos. I use it in [my blog post](https://blog.samlsecurity.com/post/saml-for-react-spa/?utm_source=github&utm_medium=link&utm_campaign=react-oidc-pkce-demo&utm_id=react-oidc-pkce-demo&utm_content=react-oidc-pkce-demo) on integrating a React SPA against a SAML IdP using keycloak for protocol brokering. 

# Configuration
The application is configured by editing src/SecuredApp.js and change client id, endpoints, scopes and redirectUri to match your environment
```
const authService = new AuthService({
    clientId: 'oidc-client',
    authorizeEndpoint: 'https://keycloak:8443/auth/realms/oidcrealm/protocol/openid-connect/auth',
    tokenEndpoint: 'https://keycloak:8443/auth/realms/oidcrealm/protocol/openid-connect/token',
    logoutEndpoint: 'https://keycloak:8443/auth/realms/oidcrealm/protocol/openid-connect/logout',
    redirectUri: 'http://react:3000',
    scopes: ['openid'],
});
```

# Starting
After configuration start the  application by running
```npm start```

# Using
The app shows a login button to initiate the authentication. 

The app starts on port localhost:3000. A login button is shown and clicking it starts authentication.
When login is successfull the content of the JWT token is displayd. Clicking the logout button will trigger a logout.
