var firebaseConfig = {
apiKey: "AIzaSyBcMv33aS7X6G23aPyXxfrPsvnzCssS4Sw",
authDomain: "friendfinder-bb0a8.firebaseapp.com",
databaseURL: "https://friendfinder-bb0a8.firebaseio.com",
projectId: "friendfinder-bb0a8",
storageBucket: "",
messagingSenderId: "194439742108",
appId: "1:194439742108:web:2aa092df9f1683a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


function homePage(){
$(".home").on("click",function(){

location.href = "./";

});
}

function getInfo(){
 
 function ProfileObject(name,image,password,scores){
     this.name = name;
     this.image = image;
     this.password = password;
     this.scores = scores;
 }
    
 var scores = [$(".Q1").val(),$(".Q2").val(),$(".Q3").val(),$(".Q4").val(),$(".Q5").val(),$(".Q6").val(),$(".Q7").val(),$(".Q8").val(),$(".Q9").val(),$(".Q10").val()];

 var name = $(".name").val(); 
 var image = $(".url").val();
 var password = $(".password").val();
    
 
    
 var passwordRetype = $(".password-retype").val();
 var confirmed = password === passwordRetype;
 
 if(!confirmed || !name || !image || !password || !passwordRetype){
    console.log("true!");
    $(".error").text("Fill in all blanks. Password must match!")
    window.scrollTo(0, 100);
    
 
 }else{
    
    var profile = new ProfileObject(name,image,password,scores);  
     
    //console.log(profile);
    
    
     
    var databaseRef = database.ref(name);
    var nameTaken = false; 
     
    databaseRef.once("value",function(data){
    
    try{
    
    
    console.log(data.val().name);
    
    
    nameTaken = true;
        
    }catch(error){
    
    databaseRef.set(profile);
    $(".error").text("Profile Created!");
    window.scrollTo(0, 100);
        
    }
    
    if(nameTaken === false){
    databaseRef.set(profile); 
    }else{
    $(".error").text("That Name Is Taken!");
    window.scrollTo(0, 100);
    }
    
    },function(error){});
    
     

     

     
     

     
 }

     

}

function createProfileClicked(){
$(".create-profile").on("click",function(){

getInfo();

});   
}

function runApp(){
homePage(); 
createProfileClicked();

}

runApp();