// $$$$$$$$$$$$   CONVERSION TO STRING    $$$$$$$$$$$$$$$$$

let i = "----------------";

let a = 1;
let aa = String(a);

let b = 7.5;
let bb = String(b);

let c = true;
let cc = String(c);

let d = false;
let dd = String(d);

let e;//undefined
let ee = String(e);

let f = null;
let ff = String(f);
 
console.table([
    a,
    typeof aa,
    aa,
    i,//--------------
    b,
    typeof bb,
    bb,
    i,//--------------
    c,
    typeof cc,
    cc,
    i,//--------------
    d,
    typeof dd,
    dd,
    i,//--------------
    e,
    typeof ee,
    ee,
    i,//--------------
    f,
    typeof ff,
    ff,
    i//--------------
]);