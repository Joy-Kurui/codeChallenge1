
function calcNetSalary() {
    const inputs =
    prompt("Please enter your basic salary and benefits separated by a space");
    const inputParts = inputs.split("");
    if (inputParts.length === 2){
    const basicSalary = parseFloat(inputs[0]);
    const benefits = parseFloat(inputs[1]);
    const grossSalary = benefits + basicSalary;
    function calculatePayee(){
        if(grossSalary <= 24000){
            return grossSalary * 0.1;
      }

        else if(grossSalary >= 24001 && grossSalary <= 32333){
            return grossSalary * 0.25;
        }
        else if(grossSalary >= 32334 && grossSalary <= 500000){
            return grossSalary * 0.25;
        }
        else if(grossSalary >= 500001 && grossSalary <= 800000){
            return grossSalary * 0.25;
        }
        else{
            return grossSalary * 0.35;
        }
}
function calculateNHIF(){
    if(grossSalary <= 5999){
        return 150;
    }
    else if(grossSalary >= 6000  && grossSalary <= 7999){
        return 300;
    }
    else if(grossSalary >= 8000 && grossSalary <= 11999){
        return 400;
    }
    else if(grossSalary >= 12000 && grossSalary <= 14999){
        return 500;
    }
    else if(grossSalary >= 15000  && grossSalary <= 19999){
        return 600;
    }
    else if(grossSalary >= 20000 && grossSalary <= 24999){
        return 750;
    }
    else if(grossSalary >= 25000 && grossSalary <= 29999){
        return 850;
    }
    else if(grossSalary >= 30000  && grossSalary <= 34999){
        return 900;
    }
    else if(grossSalary >= 35000 && grossSalary <= 39999){
        return 950;
    }
    else if(grossSalary >= 40000 && grossSalary <= 44999){
        return 1000;
    }
    else if(grossSalary >= 45000  && grossSalary <= 49999){
        return 1100;
    }
    else if(grossSalary >= 50000 && grossSalary <= 59999){
        return 1200;
    }
    else if(grossSalary >= 60000 && grossSalary <= 69999){
        return 1300;
    }
    else if(grossSalary >= 70000  && grossSalary <= 79999){
        return 1400;
    }
    else if(grossSalary >= 80000 && grossSalary <= 89999){
        return 1500;
    }
    else if(grossSalary >= 90000  && grossSalary <= 99999){
        return 1600;
    }
    else{
        return 1700;
    }
}
function calculateNSSF(){
    if (grossSalary <= 18000){
        return grossSalary*0.06;
    }
    else{
        return 1080;
    }}
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - payee - nhif - nssf;
  
    return { grossSalary, payee, nhif, nssf, netSalary,};
  } else {
    alert("Invalid input format. Please enter your basic salary and benefits separated by a space.");
}
}

 
  const salaryButton = document.querySelector("#salaryButton");
  salaryButton.addEventListener("click", function () {
    const result = calcNetSalary();
    if (result) {
        console.log(result);
    }
});