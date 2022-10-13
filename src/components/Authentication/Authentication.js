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
    {
      id: "e3",
      name: "Admin",
      email: "Admin",
      password: "Admin",
    }
  ];

  return <LoginForm data={Users} />;
};

export default Authentication;
