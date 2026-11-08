import { describe, it, expect } from 'vitest';
import { fibonacci, esPinValido } from '../src/funciones.js';

describe('fibonacci', () => {
  it.each([
    [0, 0],   // n = 0
    [1, 1],   // n = 1
    [4, 3],   // un n >= 2
    [8, 21],  // otro n >= 2 mas grande
  ])('fibonacci(%i) devuelve %i', (n, esperado) => {
    expect(fibonacci(n)).toBe(esperado);
  });

  it('lanza RangeError si n es negativo', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-1)).toThrow('solo números enteros ≥ 0');
  });
});
describe('esPinValido', () => {
  it.each([
    [null, false],
    [undefined, false],
    ['', false],
    ['1234', true],
    ['123456', true],
    ['123', false],
    ['12345', false],
    ['12a4', false],
    ['1111', false],
    ['888888', false],
    
   ])('esPinValido(%s) devuelve %s', (pin, esperado) => {
    expect(esPinValido(pin)).toBe(esperado);
  });
});