import React from "react";

import LoginForm from "./LoginForm";

const Authentication = () => {
  const Users = [
    {
      id: "e1",
      name: "Vivek Tiwari",
      email: "VivekTiwari@gmail.com",
      password: "VivekTiwari",
    },
    {
      id: "e2",
      name: "Bucky",
      email: "Bucky@gmail.com",
      password: "Bucky",
    },
  ];

  return <LoginForm data={Users} />;
};

export default Authentication;
