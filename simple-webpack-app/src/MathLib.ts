export namespace MathLib {

  export function power(luku1: number, luku2: number): number {
    return new Array(luku2)
      .fill(luku1)
      .reduce((a: number, b: number) => a * b);
  }
}