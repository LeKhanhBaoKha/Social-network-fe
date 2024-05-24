import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GroupIntroduct() {
  const private_info = [
    {
      name: "Riêng tư",
      des: "Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ đăng.",
    },
    {
      name: "Công khai",
      des: "Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ đăng.",
    },
  ];
  return (
    <div className="w-[560px] lg:w-[360px] min-h-[350px] border rounded-xl bg-white p-2">
      <h1 className="font-medium">Giới thiệu</h1>
      <p>
        Nội quy group Kengan Ashura/Omega Fandom (update 13/04/2020) Anh em ở
        đây chắc cũng tham gia nhiều hội nhóm khác trên Facebook, nhưng mình vẫn
        lưu ý để group có một chế độ sinh hoạt lành mạnh nhé! - Đăng bài thoải
        mái, loại trừ những nội dung bị cấm bởi Facebook và pháp luật. Tuy nhiên
        sẽ không khuyến khích post không liên quan tới Kengan, những bài viết
        dạng này sẽ bị khoá comment/xoá không cần báo trước. - Spam/Share nội
        dung nhằm mục đích quảng cáo: + Nếu nội dung có chất lượng => Cho phép
        giữ lại. + Nội dung nhảm => Xoá bài + ban nick. + Nội dung có chất lượng
        nhưng spam => Ban. - Thảo luận, trao đổi lịch sự, tôn trọng quan điểm cá
        nhân tác giả và môi trường chung. Các bài viết, cmt có ngôn từ khích
        bác, gây war, châm chọc, nói tục... anh em cứ report cho mình để kịp
        thời xử lý. Cheer!
      </p>
      <div className="flex flex-col gap-[5px] my-2">
        <p>
          <FontAwesomeIcon icon={faLock} />
          &nbsp;{private_info[0].name}
        </p>
        <p className="text-gray-500">{private_info[0].des}</p>
      </div>
    </div>
  );
}
