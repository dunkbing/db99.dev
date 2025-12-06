import { define } from "../utils.ts";

export default define.page(function TikimPolicy() {
  return (
    <div class="px-4 py-8 mx-auto bg-white">
      ** Quản lý Chi Tiêu Policy **
      <br />
      - Thông tin số tiền, miêu tả thu chi được lưu ngay cả trên thiết bị đảm
      bảo sự riêng tư.<br />
      - Ứng dụng đảm bảo không lấy bất cứ thông tin khác hay cung cấp cho bên
      thứ ba.<br />
      - Quyền push notification để ứng dụng tự động nhắc nhở người dùng hằng
      ngày ghi lại thu chi.<br />
    </div>
  );
});
