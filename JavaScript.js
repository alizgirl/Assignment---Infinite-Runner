const fairy = document.getElementById("fairy");
const plant = document.getElementById("plant");
const gem = document.getElementById("gem");
/*const gemscore = document.getElementById("gemscore");*/
const score = document.getElementById("updatescore");

    function jump() {
    if (fairy.classList != "jump") {

        fairy.classList.add("jump");

        setTimeout(function () {
            fairy.classList.remove("jump");
        }, 300);
    }
}
      

//collision
    let isAlive = setInterval(function () {
        let fairytop = parseInt(window.getComputedStyle(fairy).getPropertyValue("top"));
        let plantleft = parseInt(window.getComputedStyle(plant).getPropertyValue("left"));
        score.innerText++;
        let gemleft = parseInt(window.getComputedStyle(gem).getPropertyValue("left"));
        

            //hide object once out of game container
            if (plantleft < 0) plant.style.visibility = hidden;
            

            //gem collision
            if (gemleft < 50 && gemleft > 0 && fairytop <=250){
                document.getElementById('gemscore').style.visibility = "visible";
                }
             
         
            


            if (plantleft < 70 && plantleft > 0 && fairytop >= 210) {
                alert("Game Over!" + " "+ "Score: " + score.innerText)
                score.innerText = 0;
            }
            
            
        
        }, 10);

            


        
        
 

    document.addEventListener("keydown", function (event) {
        jump();
    }); 
    