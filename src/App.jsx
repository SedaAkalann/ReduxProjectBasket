import "./App.css";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Routeconfig from "./Routes/Routeconfig";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gettAllProducts } from "./Redux/basketSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettAllProducts());
  }, []);
  return (
    <div>
      <Container maxWidth="md">
        <Header />
        <Routeconfig />
      </Container>
    </div>
  );
}

export default App;
