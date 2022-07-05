import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(port, () => console.log(`listening at port : ${port}`));
