export function assignRandomId(max = 10, min = 1) {
    return Math.floor(Math.random() * max) + min;
}

export function randomIndex(from = 0, to = 10) {
    return Math.floor(Math.random() * to) + from;
}
