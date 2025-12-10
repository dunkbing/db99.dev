import { define } from "../utils.ts";
import IconCoffee from "tabler_icons_tsx/coffee.tsx";
import IconHeart from "tabler_icons_tsx/heart.tsx";
import IconStar from "tabler_icons_tsx/star.tsx";

type Benefit = {
  name: string;
  value: string;
};

type PricingTier = {
  name: string;
  price: string;
  duration: string;
  benefits: Benefit[];
  popular?: boolean;
  icon: typeof IconCoffee;
  color: string;
  link: string;
};

function BenefitRow({ name, value }: Benefit) {
  return (
    <div class="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
      <span class="text-gray-600">{name}</span>
      <span class="font-medium text-emerald-600">{value}</span>
    </div>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  const Icon = tier.icon;
  return (
    <div
      class={`relative bg-white rounded-2xl shadow-lg p-6 flex flex-col ${
        tier.popular ? "ring-2 ring-emerald-500 scale-105" : ""
      }`}
    >
      {tier.popular && (
        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span class="bg-emerald-500 text-white text-sm font-medium px-4 py-1 rounded-full">
            Phổ biến nhất
          </span>
        </div>
      )}
      <div class="text-center mb-6">
        <div
          class={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${tier.color}`}
        >
          <Icon class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">{tier.name}</h3>
        <div class="flex items-baseline justify-center gap-1">
          <span class="text-3xl font-bold text-gray-900">{tier.price}</span>
          <span class="text-gray-500">/ {tier.duration}</span>
        </div>
      </div>
      <div class="flex-1 mb-6">
        {tier.benefits.map((benefit, idx) => (
          <BenefitRow key={idx} name={benefit.name} value={benefit.value} />
        ))}
      </div>
      <a
        href={tier.link}
        target="_blank"
        class={`w-full py-3 px-6 rounded-xl font-medium text-center transition-all duration-300 ${
          tier.popular
            ? "bg-emerald-500 text-white hover:bg-emerald-600"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
        rel="noreferrer"
      >
        Ủng hộ ngay
      </a>
    </div>
  );
}

export default define.page(function NuoiToi() {
  const tiers: PricingTier[] = [
    {
      name: "Gói Cơ Bản",
      price: "450.000đ",
      duration: "3 tháng",
      icon: IconCoffee,
      color: "bg-amber-500",
      link: "https://me.momo.vn/x3IbTQsluVU4sxUVTvultd/4zbqQnDBoPLrbpr",
      benefits: [
        { name: "Trà sữa", value: "45 ly" },
        { name: "Cơm văn phòng", value: "60 bữa" },
        { name: "Xăng xe", value: "Không" },
        { name: "Netflix", value: "Dùng chung" },
        { name: "Ảnh cập nhật", value: "Có thể có" },
      ],
    },
    {
      name: "Gói Tiêu Chuẩn",
      price: "1.450.000đ",
      duration: "năm",
      icon: IconHeart,
      color: "bg-rose-500",
      popular: true,
      link: "https://me.momo.vn/x3IbTQsluVU4sxUVTvultd/nXe087OZpzPvexr",
      benefits: [
        { name: "Trà sữa", value: "Không giới hạn" },
        { name: "Cơm văn phòng", value: "365 bữa" },
        { name: "Xăng xe", value: "5 triệu/năm" },
        { name: "Netflix Premium", value: "Có" },
        { name: "Ảnh cập nhật", value: "Mỗi tháng" },
      ],
    },
    {
      name: "Gói VIP",
      price: "5.000.000đ",
      duration: "năm",
      icon: IconStar,
      color: "bg-violet-500",
      link: "https://me.momo.vn/x3IbTQsluVU4sxUVTvultd/M7e5743ZxqWZb2v",
      benefits: [
        { name: "Tất cả gói Tiêu Chuẩn", value: "✓" },
        { name: "Cafe Starbucks", value: "Mỗi ngày" },
        { name: "Ăn nhà hàng", value: "2 lần/tháng" },
        { name: "Du lịch", value: "1 chuyến/năm" },
        { name: "Tên trên website", value: "Có thể" },
        { name: "Video call định kỳ", value: "Mỗi quý" },
      ],
    },
  ];

  return (
    <div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header class="bg-emerald-600 text-white py-4 px-6">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" class="flex items-center gap-2 text-xl font-bold">
            <span>☕</span>
            <span>Nuôi Tôi</span>
          </a>
          <a
            href="#pricing"
            class="bg-white text-emerald-600 px-4 py-2 rounded-full font-medium hover:bg-emerald-50 transition-colors"
          >
            Ủng hộ ngay
          </a>
        </div>
      </header>

      {/* Pricing */}
      <section id="pricing" class="py-12 px-6">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">
            Các gói ủng hộ
          </h2>
          <p class="text-center text-gray-600 mb-12">
            Chọn gói phù hợp với bạn để mình giàu
          </p>
          <div class="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => <PricingCard key={idx} tier={tier} />)}
          </div>
        </div>
      </section>

      {/* Expense Breakdown */}
      <section class="py-16 px-6 bg-white">
        <div class="max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-center text-emerald-600 mb-8">
            Sao kê
          </h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">🧋 Trà sữa (45.000đ x 180 ly)</span>
              <span class="font-semibold text-gray-900">810.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">
                🍚 Cơm văn phòng (25.000đ x 200 bữa)
              </span>
              <span class="font-semibold text-gray-900">500.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">📺 Pornhub Premium</span>
              <span class="font-semibold text-gray-900">260.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">☕ Cafe Highlands (mỗi sáng)</span>
              <span class="font-semibold text-gray-900">1.095.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">🎮 PlayStation Plus</span>
              <span class="font-semibold text-gray-900">550.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">💅 Chăm sóc cá nhân</span>
              <span class="font-semibold text-gray-900">850.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">🎁 Quà sinh nhật bản thân</span>
              <span class="font-semibold text-gray-900">2.000.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">📱 Data 4G không giới hạn</span>
              <span class="font-semibold text-gray-900">360.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">🎬 Rạp phim (2 lần/tháng)</span>
              <span class="font-semibold text-gray-900">600.000đ</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="text-gray-700">✨ Chi phí khác (bí mật)</span>
              <span class="font-semibold text-gray-900">3.425.000đ</span>
            </div>
            <div class="flex justify-between items-center py-4 mt-4 bg-emerald-50 rounded-xl px-4">
              <span class="font-bold text-emerald-700">💰 TỔNG CỘNG</span>
              <span class="font-bold text-emerald-700 text-xl">
                10.450.000đ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-16 px-6 bg-gray-50">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">
            Câu hỏi thường gặp
          </h2>
          <p class="text-center text-gray-600 mb-10">
            Giải đáp mọi thắc mắc của bạn về dự án
          </p>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="font-semibold text-gray-800 mb-3">
                Tại sao phải nuôi bạn?
              </h3>
              <p class="text-gray-600">
                Bởi vì tôi là một phần của cộng đồng, và cộng đồng cần chăm sóc
                mọi thành viên. Việc nuôi tôi không chỉ giúp tôi có cuộc sống
                tốt hơn, mà còn tạo ra một mô hình thiện nguyện mới, đột phá
                và... đầy cảm hứng.
              </p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="font-semibold text-gray-800 mb-3">
                Tiền của tôi đi đâu?
              </h3>
              <p class="text-gray-600">
                Tiền của bạn sẽ đi vào tài khoản cá nhân của tôi và được sử dụng
                cho các mục đích thiết yếu như trà sữa, Netflix, cơm văn phòng,
                và các chi phí sinh hoạt khác. Chúng tôi có thể công khai sao kê
                sau 15 ngày đóng băng tài khoản để kiểm tra.
              </p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="font-semibold text-gray-800 mb-3">
                Tôi có được xem ảnh cập nhật không?
              </h3>
              <p class="text-gray-600">
                Có! Tùy vào gói ủng hộ, bạn sẽ nhận được ảnh cập nhật định kỳ về
                cuộc sống của tôi. Từ bữa trà sữa buổi chiều, đến màn hình
                Netflix đang xem, và cả selfie khi đi du lịch (gói VIP). Mọi thứ
                đều minh bạch và đầy... cảm xúc.
              </p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="font-semibold text-gray-800 mb-3">
                Nếu tôi nghi ngờ có sai phạm thì làm sao?
              </h3>
              <p class="text-gray-600">
                Hãy chờ đợi kết luận chính thức từ cơ quan chức năng (hoặc bạn
                tôi). Trong thời gian chờ, tài khoản đã được đóng băng 15 ngày
                để kiểm tra. Nếu có sai phạm, chúng tôi cam kết xử lý nghiêm
                minh. Nếu không có, chúng tôi sẽ tiếp tục hoạt động và mong nhận
                được sự ủng hộ của bạn!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-8 px-6 text-center text-gray-500">
        <p>
          Made with ❤️ by{" "}
          <a href="/" class="text-emerald-600 hover:underline">
            Dunkbing
          </a>
        </p>
      </footer>
    </div>
  );
});
