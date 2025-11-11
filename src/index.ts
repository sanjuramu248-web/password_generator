import { app } from "./app"
import dotenv from "dotenv";
import { connectDB } from "./db";

dotenv.config()

const mongoUri = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 8000;

connectDB(mongoUri!)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
});
