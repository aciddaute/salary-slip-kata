export class Euros {
  private constructor(private readonly amount: number) {}

  static createNew(amount: number) {
    return new Euros(Math.round(amount * 100) / 100)
  }

  static zero() {
    return new Euros(0)
  }

  getValue() {
    return this.amount
  }

  divide(divider: number) {
    return Euros.createNew(this.amount / divider)
  }

  isGreaterThan(euros: Euros) {
    return this.amount > euros.amount
  }

  minus(euros: Euros) {
    return Euros.createNew(this.amount - euros.amount)
  }

  format() {
    return this.amount + "€"
  }
}
