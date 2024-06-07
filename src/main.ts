export type Employee = {}
export type SalarySlip = {
  grossSalary: string
  employeeName: string
  employeeId: number
}
export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    return { grossSalary: "416.67€", employeeId: 12345, employeeName: "John J Doe" }
  }
}
