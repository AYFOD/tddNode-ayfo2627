export function fibonacci(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new RangeError('solo números enteros ≥ 0');
    }

    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function esPinValido(pin) {
}