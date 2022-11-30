import MyStack from "./MyStack";
import AuthStack from "./Auth/AuthStack";
import { useAuthContext } from './../Hooks/Auth/useAuthContext';

export default function RootNavigation() {
  const { user } = useAuthContext();
  const show = false;

  return user ? <MyStack /> : <AuthStack />;
}
