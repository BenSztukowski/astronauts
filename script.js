window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
     response.json().then(function(json){
         const div = document.getElementById("container");
         div.innerHTML += `
         <h3>
            (${json.length} total astronauts)
         </h3>`;

         json.sort(function(a,b){
            return a.hoursInSpace - b.hoursInSpace;
         });

         for (let i = 0; i<json.length; i++){
            let green = `="color:black;"`;
            if (json[i].active === true){
                console.log("there's a green");
                green = `="color:green;"`;
                console.log(green);
            } else {
                green = `="color:black;"`;
                console.log("there's a black");
            } 

            div.innerHTML += `
             <div class = "astronaut">
                <div class = "bio">
                    <h3> ${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: <span style${green}>${json[i].active}</style></span></li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class = "avatar" src = ${json[i].picture}>
            </div> `;
         }
     })   
    }

    );
})