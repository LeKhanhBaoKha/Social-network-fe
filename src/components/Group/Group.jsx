import GroupIntroduct from "./GroupIntroduction";
import GroupMember from "./GroupMember";
import GroupHeader from "./Header";

export default function Group() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <GroupHeader></GroupHeader>
      <GroupIntroduct></GroupIntroduct>
      <GroupMember> </GroupMember>
    </div>
  );
}
