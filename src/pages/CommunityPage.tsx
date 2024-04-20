import { Mobile } from "../Responsive";
import { FriendList } from "../components/communityPage/FriendList";
import { Search } from "../components/communityPage/Search";

export default function CommunityPage() {
  return (
    <>
      <Mobile>
        <Search />
        <FriendList />
      </Mobile>
    </>
  );
}
