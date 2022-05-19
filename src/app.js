// import { config } from "dotenv";
// config();
import { config } from "dotenv";
config();

import index from "../src/routes/index";


const PORT = process.env.PORT || 4000;
index.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
