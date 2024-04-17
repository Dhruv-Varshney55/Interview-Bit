import { useState } from "react";
import image1 from "../../assets/Images/tshirt1.jpg";
import image2 from "../../assets/Images/tshirt2.jpg";
import image3 from "../../assets/Images/tshirt3.jpg";
import image4 from "../../assets/Images/tshirt4.jpg";
import image5 from "../../assets/Images/tshirt5.jpg";
import image6 from "../../assets/Images/mug-blue.jpg";
import image7 from "../../assets/Images/tshirt6.jpg";
import image8 from "../../assets/Images/mug-coffee.jpg";
import image9 from "../../assets/Images/mug-white.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  outline: "none",
  borderRadius: "14px",
  boxShadow: 24,
  p: 4,
};

const arr = [
  {
    image: image1,
    name: "Tshirt",
    price: 350,
    bigDesc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    rating: "Blue Printed Tshirt",
  },
  {
    image: image2,
    name: "Tshirt",
    bigDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    price: 400,
    rating: "Yellow Printed Tshirt",
  },
  {
    image: image3,
    name: "Tshirt",
    bigDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    price: 450,
    rating: "LightBlue Printed Tshirt",
  },
  {
    image: image4,
    name: "Tshirt",
    bigDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    price: 400,
    rating: "Green Printed Tshirt",
  },
  {
    image: image5,
    name: "Tshirt",
    bigDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    price: 480,
    rating: "Pink Printed Tshirt",
  },
  {
    image: image6,
    name: "Mug",
    bigDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    price: 150,
    rating: "Blue Printed Coffee Mug",
  },
  {
    image: image7,
    name: "Tshirt",
    bigDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    price: 380,
    rating: "Orange Printed Tshirt",
  },
  {
    image: image8,
    name: "Mug",
    bigDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    price: 120,
    rating: "Brown Printed Coffee Mug",
  },
  {
    image: image9,
    name: "Mug",
    bigDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus voluptas iusto sunt earum est veritatis fugit vel! Impedit non cupiditate provident eveniet placeat asperiores quia fuga in quos. Natus.",
    price: 180,
    rating: "White Printed Coffee Mug",
  },
];
const Shop = () => {
  const [data, setData] = useState(null);
  return (
    <div className="w-full p-[3rem] bg-gray-100">
      <Modal
        open={data !== null}
        onClose={() => setData(null)}
      >
        <Box sx={style}>
          {data && (
            <div className="w-full flex">
              <div className="w-[50%] rounded-md">
                <img src={data.image} alt="" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="w-[50%] px-8 flex flex-col gap-8">
                <div>
                  <h1 className="text-[3rem] text-gray-500">{data.name}</h1>

                  <div className="mt-4">
                    <span className="font-extrabold text-gray-600 text-[1.5rem]">
                      &#8377;{data.price}
                    </span>{" "}
                    <span>+Free Shipping</span>
                  </div>
                </div>
                <p className="text-[1.1rem] text-gray-800 text-justify">
                  {data.bigDesc}
                </p>

                <Button variant="contained" className="w-[50%] h-[3rem]">Buy</Button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <div className="w-full flex items-center justify-between px-8">
        <h1 className="text-[4rem] text-[#ff5151] px-6">Shop</h1>
        <FormControl className="w-[10rem]">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"a"}
            label="Age"
            onChange={(e) => console.log(e.target.value)}
          >
            <MenuItem value={"a"}>Ascending</MenuItem>
            <MenuItem value={"d"}>Descending</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="grid grid-cols-3 gap-[8rem] mt-8 w-full p-6">
        {arr.map((item, index) => (
          <Card data={item} key={index} setData={setData} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ data, setData }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 rounded-xl cursor-pointer "
      onClick={() => setData(data)}
    >
      <div className="w-full rounded-xl">
        <img src={data.image} alt="" className="w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="flex flex-col items-center justify-center w-full border-b-2 py-4 gap-2">
        <p className="text-gray-500 text-[90%]">{data.name}</p>
        <p className="font-bold">{data.rating}</p>
        <p className="font-bold text-[1.1rem]">&#8377;{data.price}</p>
      </div>
    </div>
  );
};

export default Shop;
