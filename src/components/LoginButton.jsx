import React from 'react';

import GoogleLogin, { useGoogleLogin } from 'react-google-login';
import Login from '../pages/authentication/Login';

function LoginButton() {
    // const { signIn, loaded } = useGoogleLogin({
    //     onSuccess,
    //     onAutoLoadFinished,
    //     clientId,
    //     cookiePolicy,
    //     loginHint,
    //     hostedDomain,
    //     autoLoad,
    //     isSignedIn,
    //     fetchBasicProfile,
    //     redirectUri,
    //     discoveryDocs,
    //     onFailure,
    //     uxMode,
    //     scope,
    //     accessType,
    //     responseType,
    //     jsSrc,
    //     onRequest,
    //     prompt
    // })

    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <GoogleLogin
            clientId="239625550053-0o8fnn76gv5q7i3umfab3lslhpq7jdms.apps.googleusercontent.com"
            render={renderProps => (
                <button id="btn-login" type="button" className="btn text-light mt-4" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with google</button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    )

}
export default LoginButton;