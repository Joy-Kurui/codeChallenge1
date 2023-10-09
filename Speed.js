function pointsCalculator(){
    let input =
    prompt("Please enter your speed");
    const speed = parseFloat(input);

    const speedLimit = 70;
    const kilometersPerPoint = 5;
    if(speed <= speedLimit){
        alert("OK");
    }
    else{
        const speedOverlimit = speed - speedLimit;
        const points = Math.round(speedOverlimit/kilometersPerPoint);
        if(points <= 12){
        alert(`Points: ${points}`);
        }
        else{
        alert("Licence Suspended")
        }
        }
    }

    let button = document.querySelector("#calculateButton");
    button.addEventListener("click", pointsCalculator); 
    
    