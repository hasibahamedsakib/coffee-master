import { Button, Label, TextInput } from "flowbite-react";

const AddCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.coffeeName.value;
    const chef = event.target.chef.value;
    const supplier = event.target.supplier.value;
    const taste = event.target.taste.value;
    const category = event.target.category.value;
    const details = event.target.details.value;
    const url = event.target.url.value;

    const newCoffee = { name, chef, supplier, taste, category, details, url };

    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((coffee) => {
        if (coffee.acknowledged) {
          alert("Coffee Added");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 container bg-[#f4f3f0] my-14 p-10"
      >
        <div className=" text-center py-6 font-Pacifico">
          <h2 className="text-3xl ">Add New Coffee</h2>
          <p className="w-[800px] mx-auto my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            magni praesentium doloremque nesciunt harum, libero nostrum, optio
            sed rerum ad voluptate ducimus corrupti illo aliquid! Ipsam
            voluptates cum consequatur magni?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 space-y-2">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Coffee Name" />
            </div>
            <TextInput
              id="name"
              name="coffeeName"
              type="text"
              placeholder="Enter Coffee Name"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="chef" value="Coffee Chef " />
            </div>
            <TextInput
              id="chef"
              name="chef"
              type="text"
              placeholder="Enter Coffee chef"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="supplier" value="Coffee supplier" />
            </div>
            <TextInput
              id="supplier"
              name="supplier"
              type="text"
              placeholder="Enter Coffee supplier"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="taste" value="Coffee taste" />
            </div>
            <TextInput
              id="taste"
              name="taste"
              type="text"
              placeholder="Enter Coffee taste"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="category" value="Coffee category" />
            </div>
            <TextInput
              id="category"
              name="category"
              type="text"
              placeholder="Enter Coffee category"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="details" value="Coffee Details" />
            </div>
            <TextInput
              id="details"
              name="details"
              type="text"
              placeholder="Enter Coffee Details"
              required={true}
              shadow={true}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Image URL" />
          </div>
          <TextInput
            id="name"
            name="url"
            type="text"
            placeholder="Enter image url"
            required={true}
            shadow={true}
          />
        </div>
        <Button type="submit">Add Coffee</Button>
      </form>
    </div>
  );
};

export default AddCoffee;
