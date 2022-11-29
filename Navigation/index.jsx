import MyStack from "./MyStack";
import { useAuthContext } from "./../Hooks/useAuthContext";
import AuthStack from "./Auth/AuthStack";

export default function RootNavigation() {
  const { user } = useAuthContext();
  const show = false;

  return user ? <MyStack /> : <AuthStack />;
}
