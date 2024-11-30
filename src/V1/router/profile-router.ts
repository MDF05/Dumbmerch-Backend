import { Router } from "express";
import profileController from "../controller/profile-controller";
import authentication from "../middleware/authentication";
import { upload } from "../middleware/upload";

const ProfileRouter = Router();

ProfileRouter.get("/profile", authentication, profileController.get);
ProfileRouter.get("/profile/:profileId", authentication, profileController.getProfileById);
ProfileRouter.put("/profile/:profileId", authentication, upload.single("image"), profileController.putProfileById);

export default ProfileRouter;
