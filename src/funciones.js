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
    if (pin === null || pin === undefined) {
        return false;
    }

    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }

    if (!/^\d+$/.test(pin)) {
        return false;
    }

    if (pin.split('').every(c => c === pin[0])) {
        return false;
    }

    return true;
} {
}