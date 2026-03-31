import { useLoaderData } from "react-router-dom";
import Homes from "../Homes/Homes";

const Home = () => {
  const data = useLoaderData();
  
  return <Homes apps={data} />;
};

export default Home;
