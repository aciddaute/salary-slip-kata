import { Euros } from "./Euros.js"

export class AnnualSalary {
  static MINIMUM_TAXABLE_ANNUAL_SALARY_AMOUNT = Euros.createNew(8060)

  constructor(private readonly amount: Euros) {}

  toMonthlySalary() {
    return this.amount.divide(12)
  }

  isTaxable() {
    return this.amount.isGreaterThan(AnnualSalary.MINIMUM_TAXABLE_ANNUAL_SALARY_AMOUNT)
  }

  calculateTaxes() {
    if (!this.isTaxable()) {
      return Euros.zero()
    }

    const taxableAmount = this.amount.minus(AnnualSalary.MINIMUM_TAXABLE_ANNUAL_SALARY_AMOUNT)

    return taxableAmount.divide(100)
  }
}
