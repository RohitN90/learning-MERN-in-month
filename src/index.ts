import express from "express";
import UserRouter from "./controllers/student";

const PORT = 3030;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Custom Middleware which provide the Method and url of the request
app.use((req, res, next) => {
  console.log(req.method, "-->", req.url);
  next();
});

//Routers
app.use("/students", UserRouter);

app.get("/", (req, res) => {
  res.json({
    message: "hello Man",
  });
});

//Server
app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running on port ", PORT);
});
