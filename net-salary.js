// Gross Salary
function netSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    console.log(`Your gross salary is:`, grossSalary);

    // PAYE Calculation
    function payAsYouEarn(){
        let grossSalaryMinusPAYE;

        if (grossSalary <= 24000){
            grossSalaryMinusPAYE = grossSalary * 0.1;
        }else if (grossSalary <= 32333){
            grossSalaryMinusPAYE = grossSalary * 0.25;
        }else if (grossSalary <= 500000){
            grossSalaryMinusPAYE = grossSalary * 0.3;
        }else if (grossSalary <= 800000){
            grossSalaryMinusPAYE = grossSalary * 0.325;
        }else {
            grossSalaryMinusPAYE = grossSalary * 0.35;
        }

        console.log(`Your gross salary minus PAYE: `, grossSalaryMinusPAYE);

        // NHIF Deductions
        function nHIFDeductions (){
            let salaryMinusNHIF;

            if (grossSalary <= 5999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 150;
            }else if (grossSalary <= 7999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 300;
            }else if(grossSalary <= 11999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 400;
            }else if(grossSalary <= 14999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 500;
            }else if(grossSalary <= 19999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 600;
            }else if (grossSalary <= 24999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 750;
            }else if (grossSalary <= 29999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 850;
            }else if (grossSalary <= 34999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 900;
            }else if (grossSalary <= 39999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 950;
            }else if (grossSalary <= 44999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 1000;
            }else if (grossSalary <= 49999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 1100;
            }else if (grossSalary <= 59999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 1200;
            }else if (grossSalary <= 69999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 1300;
            }else if (grossSalary <= 79999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 1400;
            }else if (grossSalary <= 89999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 1500;
            }else if (grossSalary <= 99999){
                salaryMinusNHIF = grossSalaryMinusPAYE - 1600;
            }else if (grossSalary >= 100000){
                salaryMinusNHIF = grossSalaryMinusPAYE - 1700;
            }else {
                salaryMinusNHIF = "Invalid Value";
            }

            console.log (`Your gross salary minus NHIF: `,salaryMinusNHIF);

            // NSSF Deductions
            function nSSFDeduction (){
                const tier1Limit = 7000;
                const tier2Limit = 36000;
                const tier1Rate = 0.06;

                let tier1Contribution = (basicSalary * tier1Rate, tier1Limit);

                let tier2Contribution = 0;
                if (basicSalary > tier1Limit){
                    tier2Contribution = Math.min(basicSalary - tier1Limit * tier1Rate, tier2Limit);
                }

                // Total NSSF contribution
                let nSSFContribution = tier1Contribution + tier2Contribution;
                netSalary = salaryMinusNHIF - nSSFContribution;
                console.log( `Your net salary is: `, netSalary)
                return netSalary;
            }
            nSSFDeduction();
        }
        nHIFDeductions();
    }
    payAsYouEarn();
}
console.log (netSalary(150000, 20000));

