import { Router } from "express";
import appointmentsRoute from "./appointmentsRouter";
import usersRoute from "./usersRouter";

const indexRouter: Router = Router();

indexRouter.use("/appointments", appointmentsRoute)
indexRouter.use("/users", usersRoute)

export default indexRouter