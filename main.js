function len(string1, string2) {
  return string1.value.length;
}
function chat(string1, string2) {
  return `znakiem o indeksie 4 jest: ${string1.value.charAt(4)}`;
}

function chatCo(string1, string2) {
  return `liczba  w unicode ${string1.value.charCodeAt()}`;
}
function upper(string1, string2) {
  return string1.value.toUpperCase();
}
function lower(string1, string2) {
  return string1.value.toLowerCase();
}
function inOf(string1, string2) {
  return `1 litera w 2 stringu występuje w 1 stringu w miejscu ${string1.value.indexOf(
    string2.value[0]
  )}`;
}
function inLOf(string1, string2) {
  return `1 litera w 2 stringu występuje w  (jako ostatni tego typu znak w tablicy) 1 stringu w miejscu ${string1.value.lastIndexOf(
    string2.value[0]
  )}`;
}

function subs(string1, string2) {
  return `wypisane pierwsze 5 liter pierwszego stringa: ${string1.value.substr(
    0,
    5
  )}`;
}
function substring(string1, string2) {
  return `wypisane pierwsze 3 litery pierwszego stringa: ${string1.value.substring(
    3,
    0
  )}`;
}

function slic(string1, string2) {
  return `3 litery wycięte od indexu 2 do indexu 5 z pierwszego stringa: ${string1.value.slice(
    2,
    5
  )}`;
}

function rep(string1, string2) {
  console.log(string1.value.replace("zdanie", "banan"));
  return `kazde słowo które zawierało wyraz banan zostało zamienione na  smiledog | ${string1.value.replace(
    "banan",
    "SMILEDOG"
  )}`;
}

let tabOfData = [];
export default tabOfData = [
  {
    text: "length",
    des: "nie jest to metoda tablicowa, ale służy do wyznaczania wielkości tablicy, czyli poinformowania ile elementów się w niej znajduje",
    func: len,
  },
  { text: "charAt", des: "dwa", func: chat },
  { text: "charCodeAt", des: "trzy", func: chatCo },
  { text: "toUpperCase", des: "cztery", func: upper },
  { text: "tolowerCase", des: "pięć", func: lower },
  { text: "IndexOf", des: "sześć", func: inOf },
  { text: "lastIndexOf", des: "siedem", func: inLOf },
  {
    text: "substr",
    des: "Zwraca określoną liczbę początkowych znaków w łańcuchu znaków w określonej lokalizacji.",
    func: subs,
  },
  { text: "substring", des: "Zwraca podciąg obiektu String.", func: substring },
  {
    text: "slice",
    des: "Wydobywa fragment tablicy i zwraca go jako NOWĄ tablicę.",
    func: slic,
  },
  {
    text: "replace",
    des: "metoda ta zwraca nam nowego stringa ze stringami zamienionymi na te jakie podaliśmy w parametrze",
    func: rep,
  },
];
