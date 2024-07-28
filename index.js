import express from "express";
import { engine } from "express-handlebars";
import routes from "./routes/router.js";
const app = express();

const PORT = process.env.PORT || 3000;

app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

//Routes
app.use("/", routes);

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
