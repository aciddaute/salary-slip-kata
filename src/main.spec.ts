import { beforeAll, describe, expect, it } from "vitest"
import { SalarySlipGenerator } from "./main.js"

describe("Salary slip", () => {
  let salarySlipGenerator: SalarySlipGenerator

  beforeAll(() => {
    salarySlipGenerator = new SalarySlipGenerator()
  })

  it("returns 416.67€ when employee has 5.000€ / year", () => {
    const employee = { name: "John J Doe", id: 12345, annualSalary: 5000 }

    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.grossSalary).toEqual("416.67€")
    expect(salarySlip.employeeName).toEqual("John J Doe")
    expect(salarySlip.employeeId).toEqual(12345)
  })
})
