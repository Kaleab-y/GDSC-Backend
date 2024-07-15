function GCF(a, b) {
    if (b === 0) {
        return a;
    }
    return GCF(b, a % b);
}
let n1 = 64; 
let n2 = 8; 
console.log(`The GCF of ${n1} and ${n2} is ${GCF(n1, n2)}`);
