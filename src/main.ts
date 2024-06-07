import { AnnualSalary } from "./AnnualSalary.js"
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
  generateFor({ id, name, ...employee }: Employee): SalarySlip {
    const annualSalary = new AnnualSalary(Euros.createNew(employee.annualSalary))
    const grossSalary = annualSalary.toMonthlySalary()
    const nationalInsuranceContributions = annualSalary.calculateTaxes()

    return {
      grossSalary: grossSalary.format(),
      employeeId: id,
      employeeName: name,
      nationalInsuranceContributions: nationalInsuranceContributions.format(),
    }
  }
}
