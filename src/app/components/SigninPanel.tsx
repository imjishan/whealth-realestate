import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";

const SigninPanel = async () => {
  // get client server session
  const { isAuthenticated, getUser } = await getKindeServerSession();
  const user = await getUser();
  if (await isAuthenticated()) return <div>{user?.given_name}</div>;

  return (
    <div className="flex gap-8">
      <Button color="primary">
        <LoginLink>Sign In</LoginLink>
      </Button>
      <Button color="default">
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};
export default SigninPanel;
