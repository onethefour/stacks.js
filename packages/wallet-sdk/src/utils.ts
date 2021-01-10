import { AssertionError } from 'assert';

export function assertIsTruthy<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new AssertionError({ expected: true, actual: val });
  }
}
