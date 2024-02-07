// $$$$$$$$$$$$    CONVERSION INTO Nnumber   $$$$$$$$$$$$$$$$
let a = 333;
let b = "333";
let c = "3a";
let d = true;
let e = false;
let f = null;
let g; //undefined
let h = BigInt(7589445822478888);
let i = "-----------------";
//                                     Number
//                                    --------
let aa = Number(a); //333  -->          333
let bb = Number(b); //"333" -->          333
let cc = Number(c); //"3a"  -->          NaN
let dd = Number(d); //true  -->            1
let ee = Number(e); //false -->            0
let ff = Number(f); //null  -->            0
let gg = Number(g); //undefined-->       NaN
let hh = Number(h); //7589445822478888-->NaN

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
  i,//--------------
  g,
  typeof gg,
  gg,
  i,//--------------
  h,
  typeof hh,
  hh,
  i,//--------------
]);

//$$$$$$$$$$$$   CONVERSION TO BOOLEAN     $$$$$$$$$$$$

