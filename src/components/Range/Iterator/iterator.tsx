export class RangeIterator implements Iterator<number> {
    private current: number;
    private end: number;
    private step: number;

    constructor(start: number, end: number, step: number) {
        this.current = start;
        this.end = end;
        this.step = step;
    }

    public next(): IteratorResult<number> {
        if ((this.step > 0 && this.current < this.end) || (this.step < 0 && this.current > this.end)) {
            const value = this.current;
            this.current += this.step;
            return { value, done: false };
        } else {
            return { value: null, done: true };
        }
    }

    [Symbol.iterator](): Iterator<number> {
        return this;
    }
}
