import server from "./server";
import "reflect-metadata"
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(res => {
    console.log('conection to database initialized');
    server.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
    })
})