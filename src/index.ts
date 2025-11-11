import { app } from "./app"
import dotenv from "dotenv";
import { connectDB } from "./db";

dotenv.config()

const mongoUri = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 8000;

connectDB(mongoUri!)
.then(() => {
    app.listen(Number(PORT), '0.0.0.0', () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`Local: http://localhost:${PORT}`);
        console.log(`Network: http://192.168.1.34:${PORT}`);
        console.log(`Health check: http://192.168.1.34:${PORT}/health`);
    });
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
});
