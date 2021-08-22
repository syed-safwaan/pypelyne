import Cookies from 'js-cookie';

let UserProfile = (function() {
    let session_token = null;

    let get_token = function () {
        if (session_token == null) {
            let jwt_cookie = Cookies.get('test');

            if (jwt_cookie == null) {
                return ""
            }
        } else {
            return session_token;
        }
    };

    let check_auth = function () {
        get_token();

        if (session_token != null) {
            // check auth code here
            return true;
        } else {
            return false;
        }
    }

    let authenticate = function (username, password) {
        console.log(username);
        console.log(password);

        return true
    }

    return {
        get_token: get_token,
        check_auth: check_auth,
        authenticate: authenticate
    }
})();

export default UserProfile;