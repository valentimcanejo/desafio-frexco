import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as RoutesA,
  Navigate,
} from "react-router-dom";

import PurchaseScreen from "./components/PurchaseScreen";

import Cards from "./components/Main/Cards";

const Routes = () => {
  const [arr, setArr] = useState<any[]>([]);

  //const [images, setImages] = useState<any[]>([arr[0].img]);

  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  return (
    <Router>
      <RoutesA>
        <Route element={<Cards />} path="/" />
        {arr.length !== 0 ? (
          <Route element={<PurchaseScreen />} path="/purchase" />
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </RoutesA>
    </Router>
  );
};

export default Routes;
