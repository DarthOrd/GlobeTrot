
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '255397715164564',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });

    FB.AppEvents.logPageView();
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            getElementById('status').innerHTML = 'Connected.';
        }
        else if (response.status === 'not_authorized') {
            getElementById('status').innerHTML = 'Not logged in.';
        }
        else {
            getElementById('status').innerHTML = 'Not logged in.'
        }

    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

function login() {
    FB.login(function(response){
        if (response.status === 'connected') {
            getElementById('status').innerHTML = 'Connected.';
        }
        else if (response.status === 'not_authorized') {
            getElementById('status').innerHTML = 'Not logged in.';
        }
        else {
            getElementById('status').innerHTML = 'Not logged in.'
        }
    });
}


