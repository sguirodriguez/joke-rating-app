import React from "react";
import ExampleScreen from "./screen";

const ExampleController: React.FC = () => {
  const handlers = {
    example: "example",
  };

  return <ExampleScreen handlers={handlers} />;
};

export default ExampleController;
