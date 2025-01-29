

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBOPE0fbFSOfhCH_75CMuyddRShBRPCl5U",
    authDomain: "dayatva-login-8edaa.firebaseapp.com",
    databaseURL: "https://dayatva-login-8edaa.firebaseio.com",
    projectId: "dayatva-login-8edaa",
    storageBucket: "dayatva-login-8edaa.appspot.com",
    messagingSenderId: "684154421340",
    appId: "1:684154421340:web:7e2ef2e4653a9623876699",
    measurementId: "G-1VLCSWE7C1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          // User is signed in.
      
          window.location.href = "login1.html";
          }
          if(user!=null){
            var user = firebase.auth().currentUser;
            var email_id = user.uid;
             
      
      firebase.database().ref("/Users/"+email_id).once('value').then(function(snap){
        var phone=snap.val().phn;
        document.getElementById("phn").innerHTML=phone;
        var op=snap.val().op;
        document.getElementById("op").innerHTML=op;
        var year=snap.val().year;
        document.getElementById("year").innerHTML=year;
        var pcp=snap.val().pcp;
        document.getElementById("pcp").innerHTML=pcp;
        var ws=snap.val().ws;
        document.getElementById("ws").innerHTML=ws;
        var name=snap.val().name;
        document.getElementById("name").innerHTML=name;
        var name=snap.val().name;
        document.getElementById("name1").innerHTML=name;
        var des=snap.val().des;
        document.getElementById("description").innerHTML=des;
        var department=snap.val().dep;
        document.getElementById("depart").innerHTML=department;
        var email=snap.val().email;
        document.getElementById("email").innerHTML=email;
        var designation=snap.val().desig;
        document.getElementById("designation").innerHTML=designation;
        var dob=snap.val().dob;
        document.getElementById("dob").innerHTML=dob;
        var dap=snap.val().dap;
        if(dap!=null){
        document.getElementById("dap1").style.display="block";
        document.getElementById("dap").innerHTML=dap;
        }
        
        
        var url=snap.val().imgSrc;
        var img = document.getElementById('myimg');
        img.src = url;
      })
      
          }
        } 
      );        

    function logout(){
    firebase.auth().signOut();  
    }
    
  function change(){
    
    var user=firebase.auth().currentUser;
    var emailq=user.email;
    var pass=document.getElementById("passwordold");
    var newpass=document.getElementById("paasswordnew");
    var confirmPassword=document.getElementById("confirmpass");
    
    const credential = firebase.auth.EmailAuthProvider.credential(email,pass);
    window.alert("second");
    user.reauthenticateWithCredential(credential).then(function(){
      if(newpass===confirmPassword){
        user.updatePassword(newpass).then(function() {
          // Update successful.
          window.alert("succesfull");
        }).catch(function(error) {
          // An error happened.
          window.alert(error)
        });
      }else{
        window.alert("password are not same")
      }

    }).catch(function(error) {
      // An error happened.
      window.alert(error)
    });
  }
  function profile1(parameter){
    firebase.database().ref("/local/"+parameter).once('value').then(function(snap){
        
        
        
        
        var ws=snap.val().ws;
        document.getElementById("ws").innerHTML=ws;
        
        var name=snap.val().name;
        document.getElementById("name1").innerHTML=name;
     
        var department=snap.val().dep;
        document.getElementById("depart").innerHTML=department;
        var email=snap.val().email;
        document.getElementById("email").innerHTML=email;
        var designation=snap.val().desig;
        document.getElementById("designation").innerHTML=designation;
        var dob=snap.val().dob;
        document.getElementById("dob").innerHTML=dob;
        var dap=snap.val().dap;
        if(dap!=null){
        document.getElementById("dap1").style.display="block";
        document.getElementById("dap").innerHTML=dap;
        }
        
        
        var url=snap.val().imgSrc;
        var img = document.getElementById('myimg');
        img.src = url;
      });
      
  }
