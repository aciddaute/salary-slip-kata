import { Euros } from "./Euros.js"

export type Employee = {
  id: number
  name: string
  annualSalary: number
}
export type SalarySlip = {
  grossSalary: string
  employeeName: string
  employeeId: number
  nationalInsuranceContributions: string
}

export class SalarySlipGenerator {
  private static MINIMUM_TAXABLE_ANNUAL_SALARY_AMOUNT = 8060

  generateFor({ annualSalary, id, name }: Employee): SalarySlip {
    const grossSalary = this.calculateGrossSalary(annualSalary)
    const nationalInsuranceContributions = this.calculateNationalInsuranceContribution(annualSalary)

    return {
      grossSalary: grossSalary + "€",
      employeeId: id,
      employeeName: name,
      nationalInsuranceContributions: nationalInsuranceContributions + "€",
    }
  }

  private calculateGrossSalary(annualSalary: number) {
    return new Euros(Math.round((annualSalary * 100) / 12) / 100)
  }

  private calculateNationalInsuranceContribution(annualSalary: number) {
    if (annualSalary <= SalarySlipGenerator.MINIMUM_TAXABLE_ANNUAL_SALARY_AMOUNT) return 0

    return new Euros((annualSalary - SalarySlipGenerator.MINIMUM_TAXABLE_ANNUAL_SALARY_AMOUNT) * 0.01)
  }
}
