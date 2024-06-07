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
  })

  it("returns 100€ when employee has 1.200€ / year", () => {
    const employee = { name: "Pepe Benavente", id: 12346, annualSalary: 1200 }

    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.grossSalary).toEqual("100€")
  })

  it("doesnt calculate the national insurance contributions if minimum amount is not reached", () => {
    const employee = { name: "Poor Guy", id: 12347, annualSalary: 5000 }

    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.nationalInsuranceContributions).toBe("0€")
  })

  it("DOES calculate the national insurance contributions if minimum amount IS reached", () => {
    const employee = { name: "Rich Guy", id: 12347, annualSalary: 9060 }

    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.nationalInsuranceContributions).toBe("10€")
  })

  it("DOES calculate the national insurance contributions if minimum amount IS reached", () => {
    const employee = { name: "Very rich Guy", id: 12347, annualSalary: 20000 }

    const salarySlip = salarySlipGenerator.generateFor(employee)

    expect(salarySlip.nationalInsuranceContributions).toBe("119.4€")
  })
})
