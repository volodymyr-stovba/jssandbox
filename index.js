"use strict";

function Log(message) {
  console.log(message);
}

function ShowMessage(message) {
  alert(message);
}

function PrintTypes() {
  let types = new Set([undefined, 0, 10n, true, "foo", Math, null, alert, NaN]);
  let resolved_types = new Map();

  types.forEach((value, valueAgain, set) => {
    resolved_types.set(value, typeof value);
  });

  resolved_types.forEach((value, key, map) => {
    Log(`${key}: ${value}`);
  });

  Log("Symbol('id'): " + typeof Symbol("id"));
}

function PrintOperations() {
  Log("" + 1 + 0);
  Log("" - 1 + 0);
  Log(true + false);
  Log(6 / "3");
  Log("2" * "3");
  Log(4 + 5 + "px");
  Log("$" + 4 + 5);
  Log("4" - 2);
  Log("4px" - 2);
  Log(7 / 0);
  Log("  -9  " + 5);
  Log("  -9  " - 5);
  Log(null + 1);
  Log(undefined + 1);
  Log(" \t \n" - 2);
}

function main() {
  console.clear();
  PrintTypes();
  Log("!!!!!!!!!!!PrintOperations!!!!!!!!!!!!!!");
  PrintOperations();
}
