import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenicateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimenController } from "./controllers/CreateComplimentController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenicateUserController();
const createComplimentController = new CreateComplimenController();

router.post("/tags", ensureAdmin , createTagController.handle);
router.post("/users", createUserController.handle );
router.post("/Login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);


export{ router };