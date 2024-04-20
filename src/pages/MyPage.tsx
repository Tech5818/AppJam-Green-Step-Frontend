import { Mobile } from "../Responsive";
import { Profile } from "../components/myPage/profile/Profile";

export default function MyPage() {
  return (
    <>
      <Mobile>
        <Profile />
      </Mobile>
    </>
  );
}
