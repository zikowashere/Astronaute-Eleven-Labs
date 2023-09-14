import React, { useState } from "react";
import { useEffect } from "react";
import FormAstronaut from "../core/components/formAstronaut/FormAstronaut";
import Header from "../core/components/header/Header";
import ListAstonaut from "../core/components/listAstronaut/ListAstonaut";
import getAstonautService from "../core/services/astronaut/getAtronautService";

const Home = () => {
  const [listAstronaut, setListAstronaut] = useState([]);

  const getListAstronauts = async () => {
    const response = await getAstonautService();
    return response.data;
  };

  useEffect(() => {
    const fetchListAstronaut = async () => {
      const response = await getListAstronauts();
      setListAstronaut(response);
    };
    fetchListAstronaut();
  }, [listAstronaut]);

  return (
    <div>
      <Header />
      <FormAstronaut />
      <ListAstonaut astronauts={listAstronaut} />
    </div>
  );
};

export default Home;
