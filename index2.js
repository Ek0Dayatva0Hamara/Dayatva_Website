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


firebase.database().ref("/local/"+localStorage.getItem("ad")).once('value').then(function(snap){

    nam=snap.val().name;
    document.getElementById("name22").innerHTML=nam;
    post=snap.val().post;
    document.getElementById("designation").innerHTML=post;
    des=snap.val().description;
    document.getElementById("description").innerHTML=des;
    dep=snap.val().dep;
    document.getElementById("depart1").innerHTML=dep;
    ws=snap.val().ws;
    document.getElementById("ws1").innerHTML=ws;
    op=snap.val().op;
    document.getElementById("op1").innerHTML=op;
    var url=snap.val().imgSrc;
        var img = document.getElementById('myimg1');
        img.src = url;
    if(ws=="November 2018"){
        document.getElementById("body").style.background="-webkit-linear-gradient(left,#868f96 , #596164)";
        document.getElementById("op1").style.color="#596164";
        document.getElementById("ws1").style.color="#596164";
        document.getElementById("depart1").style.color="#596164";

        
    }
    else if(ws==="November 2019"){
        
            document.getElementById("body").style.background="-webkit-linear-gradient(left,#fdfcfb , #e2d1c3)";
            document.getElementById("op1").style.color=" #e2d1c3";
            document.getElementById("ws1").style.color=" #e2d1c3";
            document.getElementById("depart1").style.color=" #e2d1c3";
    }
    var dap=snap.val().dap;
        if(dap!=null){
        document.getElementById("dap1").style.display="block";
        document.getElementById("dap2").innerHTML=dap;
        document.getElementById("dap2").style.color=" #e2d1c3";
        }
});
