import RegisterController from "../../containers/Register/Register.controller";
import WelcomeController from "../../containers/Welcome/Welcome.controller";

const routes = [
  {
    name: "Welcome",
    component: WelcomeController,
  },
  {
    name: "Register",
    component: RegisterController,
  },
];

export default routes;
