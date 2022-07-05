import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.get("/getNfts", async (req, res) => {
  let data = await axios.get(
    "https://testnets-api.opensea.io/assets?asset_contract_address=0xE3320a32f3c5959845C6A39b3B0d29D869A8F968"
  );
  res.status(200).json(data.data.assets);
});

app.listen(port, () => console.log(`listening at port : ${port}`));
