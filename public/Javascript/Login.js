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

var databaseRef = database.ref();

var name = "";
var password = "";
var returnStatement = null;

function homePage(){
$(".home").on("click",function(){

location.href = "./";

});
}

function compareScores(selectedProfile,loginProfile){
   
var score = 0;
    
for(var i = 0; i < selectedProfile.scores.length; i++){
    score += Math.abs(selectedProfile.scores[i] - loginProfile.scores[i]);
}

return score;    
    
}

function getBestFriend(all,login){
    
    var lowestScore = 100;
    var bestfriend = {};
    
    
    for(var i = 0; i < all.length;i++){
        if(compareScores(all[i],login) < lowestScore && all[i].name !== login.name){
         
        lowestScore = compareScores(all[i],login);
        bestfriend = all[i];
            
        }
    }
    
    return bestfriend;
    
}

function run(profile){
databaseRef.on("value",function(data){

var replacementImage = "https://cdn.shopify.com/s/files/1/0902/5322/files/LARGE_800_800_large.jpg?v=1518450568";
    
var allProfiles = Object.values(data.val());
    
var bestFriendFound = getBestFriend(allProfiles,profile);
    
$(".Profile-Name").text(profile.name);

$(".Best-Friend-Name").text(bestFriendFound.name);
    
$(".Profile-Image").show();

$(".Best-Friend-Image").show();
    
$(".Profile-Image").attr("src",profile.image)

$(".Best-Friend-Image").attr("src",bestFriendFound.image)

$(".Profile-Image").on("error", function(){
    $(".Profile-Image").attr("src",replacementImage)
});
    
$(".Best-Friend-Image").on("error", function(){
    
    $(".Best-Friend-Image").attr("src",replacementImage)
});

$("body").attr("style","height: 1900px;");
        
},function(){});

}


async function confirmPassword(givenPassword,givenName){
    
    
var getProfile = database.ref(givenName)

var profile = null;

await getProfile.once("value",function(data){

    
if(data.val() !== null){
    
    if(data.val().password === givenPassword){
       
    console.log("Yes!");
    profile = data.val();   
        
    }else{
    console.log("No!");
    profile = {}; 
    }
    
}else{

}
    
    
},function(){});
    
return profile;    


    
}


function login(){

$(".login").on("click",function(){
console.log("clicked!");
name = $(".name").val();
password = $(".password").val();  
confirmPassword(password,name).then(function(result){

if(result === null){
   
}else{
  
run(result);    
    
}


    
});

});
 
}

homePage();
login();
