import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/funciones.js';

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