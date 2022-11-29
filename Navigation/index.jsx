// import AuthStack from "./AuthStack";
// import { useAuthentication } from "./../Hooks/useAuthentication";
import MyStack from "./MyStack";
import AuthStack from "./Auth/AuthStack";

export default function RootNavigation() {
  //   const { user } = useAuthentication();
  const show = false;

  return show ? <MyStack /> : <AuthStack />;
}
