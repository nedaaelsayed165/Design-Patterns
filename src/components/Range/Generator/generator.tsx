export function* range(start: number, end: number, step: number) {
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      yield i;
    }
  } else if (step < 0) {
    for (let i = start; i > end; i += step) {
      yield i;
    }
  }
}

  
  
  export function testRange() {
    console.log('Generator Function');
    for (const value of range(0, 10, 1)) {
      console.log(value);
    }
  
    console.log([...range(1, 10, 1)]);
  
    console.log(' iterator:');
    const iterator = range(1, 10, 1);


    console.log(iterator.next()); 
    // console.log(iterator.next());
    // console.log(iterator.next()); 
    // console.log(iterator.next()); 
    // console.log(iterator.next()); 
    // console.log(iterator.next()); 
    // console.log(iterator.next());
    // console.log(iterator.next()); 
    // console.log(iterator.next()); 
    // console.log(iterator.next());  
  }
  