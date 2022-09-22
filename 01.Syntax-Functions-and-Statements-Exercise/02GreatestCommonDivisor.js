function gcd(a,b) {

    if (b > a) {let temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

console.log(gcd(2154, 458));
