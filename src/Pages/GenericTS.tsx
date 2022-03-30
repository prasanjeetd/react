import React from "react";

function identity<T>(args: T): T {
  return args;
}

const myIdentity: <T>(args: T) => T = identity;
const myIdentity1: { <T>(args: T): T } = identity;

interface GenericFn {
  <T>(args: T): T;
}

interface GenericFn1<T> {
  (args: T): T;
}
const myIdentity2: GenericFn = identity;
const myIdentity3: GenericFn1<number> = identity;

interface LengthWise {
  length: number;
  prasanjeet: string;
}

function myIdentity4<T extends LengthWise>(a: T) {
  console.log(a.length);
}

// function myIdentity5<LengthWise>(a: LengthWise) {
//   console.log(a.prasanjeet);
// }

function getProperty<T, Key extends keyof T>(obj: T, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "m");

//Factory Method

function factoryCreate<T>(o: new () => T): T {
  return new o();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: { new (): A }): A {
  return new c();
}

console.log(createInstance(Bee).keeper.hasMask);
console.log(createInstance(Lion).keeper.nametag);

export const GenericTS = () => {
  /* return () => {
    return (
      <>
        <h1>Generic TS</h1>
      </>
    );
  }; */

  return (
    <>
      <h1>Generic TS</h1>
    </>
  );
};
