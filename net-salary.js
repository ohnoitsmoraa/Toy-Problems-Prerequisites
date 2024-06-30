//Function Net Salary
function netSalary (basicSalary, benefits){
    if (basicSalary >= 0 && benefits >= 0){
        console.log ("");
    }else (basicSalary <= 0 && benefits >= 0){
        console.log ("Input Value!")
    };

// Gross Salary Calculation
const grossSalary = basicSalary + benefits;
};

// PAYE
function payAsYouEarn(){
    if (monthlyTaxable <= 24000){
        return monthlyTaxable * 0.1;
    }else if (monthlyTaxable >= 24000 && monthlyTaxable <= 32333){
        return monthlyTaxable * 0.25;
    }else if (monthlyTaxable >= 32333 && monthlyTaxable <= 500000){
        return monthlyTaxable * 0.3;
    }else if (monthlyTaxable >= 500000 && monthlyTaxable <= 800000){
        return monthlyTaxable * 0.325;
    }else {
        return monthlyTaxable * 0.35;
    }
};

// NHIF Deductions
function nHIFDeductions (grossPay) {
    if (grossPay >= 0 && grossPay <= 5999){
        return 150;
    }else if (grossPay >= 6000 && grossPay <= 7999){
        return 300;
    }else if (grossPay >= 8000 && grossPay <= 11999){
        return 400;
    }else if (grossPay >= 12000 && grossPay <= 14999){
        return 500;
    }else if (grossPay >= 15000 && grossPay <= 19999){
        return 600;
    }else if (grossPay >= 20000 && grossPay <= 24999){
        return 750;
    }else if (grossPay >= 25000 && grossPay <= 29999){
        return 850;
    }else if (grossPay >= 30000 && grossPay <= 34999){
        return 900;
    }else if (grossPay >= 35000 && grossPay <= 39999){
        return 950;
    }else if (grossPay >= 40000 && grossPay <= 44999){
        return 1000;
    }else if (grossPay >= 45000 && grossPay <= 49999){
        return 1100;
    }else if (grossPay >= 50000 && grossPay <= 59999){
        return 1200;
    }else if (grossPay >= 60000 && grossPay <= 69999){
        return 1300;
    }else if (grossPay >= 70000 && grossPay <= 79999){
        return 1400;
    }else if (grossPay >= 80000 && grossPay <= 89999){
        return 1500;
    }else if (grossPay >= 90000 && grossPay <= 99999){
        return 1600;
    }else if (grossPay >= 100000){
        return 1700;
    }else {
        return "Invalid Value";
    }
};

// NSSF Deductions
function nSSF (basicSalary) {
    const tier1Limit = 7000;
    const tier2Limit = 36000;

    let tier1Contribution = Math.min(basicSalary, tier1Limit) * 0.06;
    let tier2Contribution = 0;

    if (basicSalary > tier1Limit){
        tier2Contribution = Math,min(basicSalary - tier1Limit, tier2Limit - tier1Limit) * 0.06;
    }

    // Total Contribution
    let employeeContribution = tier1Contribution + tier2Contribution;
    let employerContribution = tier1Contribution + tier2Contribution;

    return employeeContribution + employerContribution;
};

// Net Salary
function  netSalary (basicSalary, benefits){
const grossSalary = basicSalary + benefits;
const nSSFDeduction = nSSF(grossSalary);
const nHIFDeductions = nHIFDeductions(grossSalary);
const pAYE = payAsYouEarn(grossSalary);
const netSalary = grossSalary - nSSFDeduction - nHIFDeductions - pAYE;
return netSalary;
};