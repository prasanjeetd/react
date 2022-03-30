import React, { useCallback, useContext, useState } from "react";


export const Page1 = () => {
  //Higher Order FUnction
  const twice = (f: any, v: any) => f(f(v));

  const add3 = (v: number) => v + 3;
  console.log(twice(add3, 7));

  return (
    <>
      <span> Page 1</span>
      <ToBeWrappedByHOC/>
    </>
  );
};


const withClasses = (WrappedComponent: any, classes: any) => {
  return (props: any) => (
    <div className={classes}>
      <WrappedComponent {...props} />
    </div>
  );
};

const ToBeWrappedByHOC = () => {
  return (
    <div>
      <p>I'm wrapped by a higher order component</p>
    </div>
  );
};

withClasses(ToBeWrappedByHOC, "myClassName");
