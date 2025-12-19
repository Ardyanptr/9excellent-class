export default function generateCountValue(start: number, end: number, steps: number): number[] {
    const value: number[] = [];

    for(let i = 0; i <= steps; i++) {
        const val = Math.round(start + (end - start) * (i / steps));
        value.push(val);
    }

    return value;
}