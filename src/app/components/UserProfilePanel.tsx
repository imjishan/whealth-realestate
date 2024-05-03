import { User } from "@prisma/client";

interface Props {
  user: User;
}
const UserProfilePanel = ({ user }: Props) => {
  return <div>UserProfilePanel</div>;
};
export default UserProfilePanel;
