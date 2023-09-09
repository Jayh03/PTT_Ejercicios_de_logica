function generatePrimes(n: number): number[] {
    const numsprimes: number[] = [];

    for (let num = 2; num <= n; num++) {

        if(isPrime(num)){
            numsprimes.push(num);
        }
    }

    return numsprimes;

}

function isPrime(num: number): boolean {
    for (let i = 2, rootnumber = Math.sqrt(num); i <= rootnumber; i++){
        if(num % i === 0){
            return false;
        }
    }

    return num > 1;
}

const primes = generatePrimes(20);
console.log(primes);