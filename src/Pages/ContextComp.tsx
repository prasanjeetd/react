import React, { createContext, useContext, useState } from "react";

const data = {
  name: "Billa",
};
export const SampleContext = createContext<{ name: string } | null>(null);

export const ContextContainer = () => {
  const [name, setName] = useState(data);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName( {name: e.target.value});

  return (
    <>
      <h2> This is Context Container</h2>
      <input type="text" value={name.name} onChange={onNameChange}></input>
      <SampleContext.Provider value={name}>
        <ContextConsumer name="consumer"></ContextConsumer>
      </SampleContext.Provider>
    </>
  );
};

export const ContextConsumer = (props: any) => {
  const { name } = props;
  const contextValue = useContext(SampleContext);

  return (
    <div>
      This is context <span>{name} </span> <span>{contextValue?.name} </span>
      <InnerComponent></InnerComponent>
    </div>
  );
};

const InnerComponent = () => {
  const contextValue = useContext(SampleContext);
  return (
    <div>
      This is inner component context consumer
      <span> {contextValue?.name}</span>
    </div>
  );
};
