function signInOut() {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: '837943993291-ekpnlh3hu05qj7gbc8i1vprs1j4qiofn.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/plus.login'
      });
  
      var auth2 = gapi.auth2.getAuthInstance();
      if (auth2.isSignedIn.get()) {
        auth2.signOut().then(function () {
          console.log('User signed out.');
          document.getElementById('signInOutButton').innerHTML = 'Sign In';
          document.getElementById('signInOutButton').onclick = signIn;
        });
      } else {
        auth2.signIn().then(function () {
          console.log('User signed in.');
          document.getElementById('signInOutButton').innerHTML = 'Sign Out';
          document.getElementById('signInOutButton').onclick = signOut;
        });
      }
    });
  }
  