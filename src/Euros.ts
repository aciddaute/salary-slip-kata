export class Euros {
  constructor(private readonly amount: number) {}

  format() {
    return this.amount + "€"
  }
}
