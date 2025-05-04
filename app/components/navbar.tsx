import { Menu, Place, ShoppingCart } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mx-10 py-6">
      <div className="flex items-center gap-5">
        <Menu className="text-3xl" />

        <Image
          src={"/logo-circle-green.svg"}
          alt="logo"
          width={36}
          height={36}
        />

        <Button variant="text" sx={{ color: "#000000" }}>
          <Place className="text-3xl" />
          Set Location
        </Button>

        <TextField label="Search restruants" sx={{ height: "25px" }} />
      </div>

      <div className="flex items-center gap-5">
        <Button variant="text" sx={{ color: "#000000" }}>
          SIGN IN
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            borderRadius: "30px",
            // padding: "10px 20px",
          }}>
          <ShoppingCart /> CART
        </Button>
      </div>
    </div>
  );
}
