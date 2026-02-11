import express from "express";

const app = express();
const PORT = 3000;


app.use(express.json());


let counter = 0;


app.get("/counter", (req, res) => {
  res.json({ value: counter });
});


app.post("/counter", (req, res) => {
  const { value } = req.body;

  if (typeof value !== "number") {
    return res.status(400).json({ error: "Value must be a number" });
  }

  counter = value;

  res.json({
    message: "Counter updated",
    value: counter,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});