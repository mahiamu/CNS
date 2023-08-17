  

   
    
    
 function RSA() {
    var gcd, p, q, no, n, t, e, i, x;
    gcd = function (a, b) { return (!b) ? a : gcd(b, a % b); };
    p = document.getElementById('p').value;
    q = document.getElementById('q').value;
    m = document.getElementById('msg').value;
    no = m.codePointAt(0);
    


    n = p * q;
    t = (p - 1) * (q - 1);
    for (e = 2; e < t; e++) {
    if (gcd(e, t) == 1) {
    break;
    }
    }
    for (i = 0; i < 10; i++) {
    x = 1 + i * t
    if (x % e == 0) {
    d = x / e;
    break;
    }
}
ctt = Math.pow(no, e).toFixed(0);
ct = ctt % n;
dtt = Math.pow(ct, d).toFixed(0);
dt = dtt % n;
document.getElementById('publickey(N)').innerHTML = n;
document.getElementById('exponent(e)').innerHTML = e;
document.getElementById('privatekey(d)').innerHTML = d;
document.getElementById('ciphertext(ct)').innerHTML = ct;
}