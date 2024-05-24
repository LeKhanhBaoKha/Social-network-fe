import GroupIntroduct from "./GroupIntroduction";
import GroupMember from "./GroupMember";
import GroupHeader from "./Header";

export default function Group() {
  return (
    <div>
      <GroupHeader></GroupHeader>
      <GroupIntroduct></GroupIntroduct>
      <GroupMember> </GroupMember>
    </div>
  );
}
