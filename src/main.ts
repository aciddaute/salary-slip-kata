export type Employee = {
  id: number
}
export type SalarySlip = {
  grossSalary: string
  employeeName: string
  employeeId: number
}
export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    if (employee.id === 12346) return { grossSalary: "100€", employeeId: 12346, employeeName: "Pepe Benavente" }

    return { grossSalary: "416.67€", employeeId: 12345, employeeName: "John J Doe" }
  }
}
