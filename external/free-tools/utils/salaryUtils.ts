
export interface EmployeeDetails {
  epfNumber: string;
  fullName: string;
  nicNumber: string;
  designation: string;
  companyName: string;
  month: string;
}

export interface SalaryDetails {
  basicSalary: number;
  isEPFETFEligible: boolean;
  isAPITEligible: boolean;
}

export interface AllowanceItem {
  type: string;
  amount: number;
  isEPFETFEligible: boolean;
  isAPITEligible: boolean;
}

export interface SalarySlipData {
  employeeDetails: EmployeeDetails;
  salaryDetails: SalaryDetails;
  allowances: AllowanceItem[];
  hasAllowances: boolean;
}

export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const allowanceTypes = [
  "Travel allowance",
  "Housing allowance",
  "Meal allowance",
  "Phone allowance",
  "Internet allowance",
  "Fuel allowance",
  "Overtime pay",
  "Performance bonus",
  "Commission",
  "Other"
];

export const calculateEPF = (amount: number): number => {
  return parseFloat((amount * 0.08).toFixed(2));
};

export const calculateETF = (amount: number): number => {
  return parseFloat((amount * 0.03).toFixed(2));
};

export const calculateAPITTax = async (
  apitEligibility: boolean,
  totalTaxableSalary: number
): Promise<number> => {
  try {
    let apitTotal = 0;

    if (apitEligibility === true) {
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
    }

    return parseFloat(apitTotal.toFixed(2));
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export const calculateTotalAllowances = (allowances: AllowanceItem[]): number => {
  return allowances.reduce((sum, item) => sum + item.amount, 0);
};

export const calculateTotalEPFableAmount = (
  basicSalary: number,
  isBasicEPFEligible: boolean,
  allowances: AllowanceItem[]
): number => {
  let total = isBasicEPFEligible ? basicSalary : 0;
  
  allowances.forEach(item => {
    if (item.isEPFETFEligible) {
      total += item.amount;
    }
  });
  
  return total;
};

export const calculateTotalAPITableAmount = (
  basicSalary: number,
  isBasicAPITEligible: boolean,
  allowances: AllowanceItem[]
): number => {
  let total = isBasicAPITEligible ? basicSalary : 0;
  
  allowances.forEach(item => {
    if (item.isAPITEligible) {
      total += item.amount;
    }
  });
  
  return total;
};
