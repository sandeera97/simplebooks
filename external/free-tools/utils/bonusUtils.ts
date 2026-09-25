
export const calculateAPIT = (totalTaxableSalary: number): number => {
  try {
    let apitTotal = 0;

    if (totalTaxableSalary <= 150000) {
      apitTotal = 0; // Relief from tax
    } else if (totalTaxableSalary <= 233333) {
      apitTotal = totalTaxableSalary * 0.06 - 9000;
    } else if (totalTaxableSalary <= 275000) {
      apitTotal = totalTaxableSalary * 0.18 - 37000;
    } else if (totalTaxableSalary <= 316667) {
      apitTotal = totalTaxableSalary * 0.24 - 53500;
    } else if (totalTaxableSalary <= 358333) {
      apitTotal = totalTaxableSalary * 0.3 - 72500;
    } else {
      apitTotal = totalTaxableSalary * 0.36 - 94000;
    }

    return parseFloat(Math.max(0, apitTotal).toFixed(2));
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export const getMonthRange = (startMonth: number, numberOfMonths: number): string => {
  const months = [
    "April", "May", "June", "July", "August", "September",
    "October", "November", "December", "January", "February", "March"
  ];
  
  if (numberOfMonths === 1) {
    return months[startMonth - 1];
  }
  
  const endMonth = (startMonth + numberOfMonths - 2) % 12;
  return `${months[startMonth - 1]} to ${months[endMonth]}`;
};

export const getCurrentTaxYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
  
  if (currentMonth >= 4) {
    return `${currentYear}-${currentYear + 1}`;
  } else {
    return `${currentYear - 1}-${currentYear}`;
  }
};

export const calculateBonusTax = (
  alreadyPaidSalary: number,
  monthsAlreadyPaid: number,
  apitAlreadyPaid: number,
  toBePaidSalary: number,
  monthsToBePaid: number,
  apitToBePaid: number,
  bonusAmount: number,
  previouslyPaidBonusTax: number
) => {
  // A) Gross aggregate monthly remunerations already paid during the Y/A
  const grossAlreadyPaid = alreadyPaidSalary * monthsAlreadyPaid;
  
  // B) Gross aggregate monthly remunerations payable during the Y/A
  const grossToBePaid = toBePaidSalary * monthsToBePaid;
  
  // C) Gross aggregate Lump-sum payments
  const grossLumpSum = bonusAmount;
  
  // D) Estimated Gross Aggregate Remunerations EGAR
  const totalEGAR = grossAlreadyPaid + grossToBePaid + grossLumpSum;
  
  // Calculate aggregate monthly tax
  const aggregateAlreadyPaidTax = apitAlreadyPaid * monthsAlreadyPaid;
  const aggregateToBePaidTax = apitToBePaid * monthsToBePaid;
  const totalMonthlyTax = aggregateAlreadyPaidTax + aggregateToBePaidTax;
  
  let bonusTax = 0;
  let taxRate = 0;
  
  if (totalEGAR <= 1800000) {
    bonusTax = 0;
    taxRate = 0;
  } else if (totalEGAR >= 1800001 && totalEGAR <= 2800000) {
    taxRate = 6;
    bonusTax = (totalEGAR * 0.06) - (108000 + totalMonthlyTax + previouslyPaidBonusTax);
  } else if (totalEGAR >= 2800001 && totalEGAR < 3300000) {
    taxRate = 18;
    bonusTax = (totalEGAR * 0.18) - (444000 + totalMonthlyTax + previouslyPaidBonusTax);
  } else if (totalEGAR >= 3300001 && totalEGAR < 3800000) {
    taxRate = 24;
    bonusTax = (totalEGAR * 0.24) - (642000 + totalMonthlyTax + previouslyPaidBonusTax);
  } else if (totalEGAR >= 3800001 && totalEGAR < 4300000) {
    taxRate = 30;
    bonusTax = (totalEGAR * 0.30) - (870000 + totalMonthlyTax + previouslyPaidBonusTax);
  } else {
    taxRate = 36;
    bonusTax = (totalEGAR * 0.36) - (1128000 + totalMonthlyTax + previouslyPaidBonusTax);
  }
  
  return {
    grossAlreadyPaid,
    grossToBePaid,
    grossLumpSum,
    totalEGAR,
    aggregateAlreadyPaidTax,
    aggregateToBePaidTax,
    totalMonthlyTax,
    bonusTax: Math.max(0, parseFloat(bonusTax.toFixed(2))),
    taxRate,
    effectiveTaxRate: bonusAmount > 0 ? parseFloat(((Math.max(0, bonusTax) / bonusAmount) * 100).toFixed(2)) : 0
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 2,
  }).format(amount);
};
