import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import app from "./src/app.js";

dotenv.config({
    path: ".env"
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed !!!", error);
    })

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.DB_URL}`)
//         app.on("error", (error) => {
//             console.log("Error", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is runnig on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error", error)
//         throw error
//     }
// })()
