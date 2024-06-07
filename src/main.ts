export type Employee = {
  id: number
  name: string
  annualSalary: number
}
export type SalarySlip = {
  grossSalary: string
  employeeName: string
  employeeId: number
}
export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    const grossSalary = Math.round((employee.annualSalary * 100) / 12) / 100

    return {
      grossSalary: grossSalary + "€",
      employeeId: employee.id,
      employeeName: employee.name,
    }
  }
}
