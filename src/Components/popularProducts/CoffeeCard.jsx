import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, details, url, _id } = coffee;
  const handleEdit = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    const isOk = confirm("are you sure want to delete?");
    if (!isOk) {
      return true;
    }
    fetch(`http://localhost:3000/coffee/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          alert("Product is deleted");
          // const filteredCoffee = coffees.filter((cfe) => cfe._id !== _id);
          // console.log(coffees);
          // console.log(filteredCoffee);
          // setCoffees(filteredCoffee);
        }
      });
  };
  return (
    <div className="">
      <Card
        horizontal={true}
        imgSrc={url}
        className="bg-slate-100 items-center"
      >
        <div className="flex justify-between items-center w-80 m-0 ">
          <div className="">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {name}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {chef}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              details: {details}
            </p>
          </div>

          <Button.Group className="flex flex-col">
            <Button pill={true} color="success">
              view
            </Button>
            <Link to={`update_coffee/${_id}`}>
              <Button onClick={() => handleEdit(_id)} pill={true} color="gray">
                edit
              </Button>
            </Link>
            <Button
              onClick={() => handleDelete(_id)}
              pill={true}
              color="failure"
            >
              delete
            </Button>
          </Button.Group>
        </div>
      </Card>
    </div>
  );
};

export default CoffeeCard;
