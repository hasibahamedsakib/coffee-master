import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const PopularProducts = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  return (
    <div className="container py-10">
      <div className="text-center font-Pacifico">
        <p>sip and savor</p>
        <h2 className="text-3xl font mb-3 font-bold">Our Popular Products</h2>
        <div className="w-32 mx-auto">
          <Link to="/add_coffee">
            <Button gradientMonochrome="pink">Add Coffee</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 py-16">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            // setCoffees={setCoffees}
            // coffees={loadCoffee}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
