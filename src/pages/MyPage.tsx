import { Mobile } from "../Responsive";
import { MyTree } from "../components/myPage/MyTree";
import { Profile } from "../components/myPage/profile/Profile";

export default function MyPage() {
  return (
    <>
      <Mobile>
        <Profile />
        <MyTree />
      </Mobile>
    </>
  );
}
