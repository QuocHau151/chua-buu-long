/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { FiChevronsDown } from "react-icons/fi";
export default function Review() {
  const [hidden, setHidden] = useState(true);
  return (
    <section className="pt-20 container " id="review">
      <h1 className="text-white text-[30px] text-center px-14 pt-5 ">
        Giới thiệu về <br /> Chùa Bửu Long
      </h1>
      <div
        className={`"  space-y-4 text-white text-justify text-[13px] overflow-hidden  relative w-full" ${
          hidden ? "h-[350px]" : "h-auto"
        }`}
      >
        <div
          className={`" absolute bottom-0 right-[50%]  items-center justify-center translate-x-[50%] h-[150px] backdrop-blur-  w-full bg-gradient-to-t from-stone-900 rounded-b-2xl" ${
            !hidden ? "hidden" : "flex"
          }`}
        >
          <div
            className="font-semibold text-[20px] mt-20 text-[#E2D398] flex items-center justify-center gap-2"
            onClick={() => setHidden(false)}
          >
            Đọc thêm
            <FiChevronsDown />
          </div>
        </div>
        <p className="">
          Thiền Viện Tổ Đình Bửu Long nguyên là một Tịnh Thất có khuôn viên rộng
          hơn 11 ha, tọa lạc trên ngọn đồi phía Tây ngạn sông Đồng Nai, trong
          Công Viên Lịch Sử Văn Hóa Dân Tộc, tại Khu phố Thái Bình 1, Phường
          Long Bình, Quận 9, Thành phố Hồ Chí Minh, do cư sĩ Võ Hà Thuật thành
          lập năm 1942, sau khi đã quy y và thọ pháp với Thiền sư Hộ Tông. Mục
          đích của ông là lập đạo tràng này để thỉnh Ngài về truyền pháp cho
          nhóm bạn bè đồng đạo của mình cùng nhau sách tấn tu tập.
        </p>
        <p>
          Năm 1958, nhân Giáo Hội Tăng Già Nguyên Thủy Việt Nam ra đời, ông hoan
          hỷ dâng cúng tịnh viên này đến Thiền sư Hộ Tông, vị Tổ sáng lập và
          cũng là đức Tăng Thống đầu tiên của Phật Giáo Nguyên Thủy Việt Nam, để
          thành lập thiền viện và từ đó Thiền viện Bửu Long đã được Tổ chính
          thức xây dựng. Và cũng từ đó chư Tăng và Phật tử gần xa đến học thiền
          với Ngài rất đông, vì Tổ không những tinh thâm pháp thiền định tuệ mà
          còn biết rõ tâm của mỗi hành giả để hướng dẫn pháp hành chính xác và
          cụ thể cho từng trường hợp.
        </p>
        <p>
          Năm 1961 Ngài Narada Mahàthera, một vị Tăng Trưởng Phật giáo Tích Lan
          tặng thiền viện một cây Bồ-đề có nguồn gốc từ cây Đại Bồ-đề đức Phật
          thành đạo tại Bồ-đề Đạo Tràng, Ấn Độ. Tổ rất quý cây Bồ-đề này nên đã
          xây dựng thành một Bồ-đề Phật Cảnh để tưởng niệm nơi đức Phật Thành
          Đạo.
        </p>
        <p>
          Năm 1965 cư sĩ Võ Hà Thuật mới chính thức được Tổ truyền đại giới,
          pháp hiệu Lão Tâm, mặc dù đã hầu cận thầy trên 10 năm. Năm 1969 Đại
          đức Lão Tâm viên tịch hưởng thọ 68 tuổi. Để tỏ lòng tri ân Đại đức,
          Chư Tăng Phật tử đã xây tháp phụng thờ, trên ngọn đồi phía Đông Nam
          trong khuôn viên thiền viện.
        </p>
        <p>
          Năm 1981 Tổ Hộ Tông viên tịch, hưởng thọ 88 tuổi, Tháp Tổ được Giáo
          Hội Tăng Già Nguyên Thủy Việt Nam phụng lập ngay sau Bồ-đề Phật Cảnh,
          để đời đời tưởng niệm ân đức cao dày của vị Tổ sáng lập Phật Giáo
          Nguyên Thủy Việt Nam, vị Thiền Sư tinh thâm định tuệ và vị Tổ khai sơn
          Thiền viện Bửu Long.
        </p>
        <p>
          Dưới thời Tổ Hộ Tông làm Viện Chủ có 4 vị Trụ Trì thay phiên trợ lý:
          Đại Đức Lão Tâm (1965-1969), Đại Đức Ngự Tâm (1969-1976), Đại Đức Tăng
          Huệ (1976-1981). Năm 1982, theo di chúc của Tổ, Hòa thượng Viên Minh
          được Giáo Hội Tăng Già Nguyên Thủy Việt Nam bổ nhiệm về thừa kế chức
          vụ Viện Chủ Thiền Viện Bửu Long. Trong thời gian làm Viện Chủ, Hòa
          thượng Viên Minh đã cử Thượng tọa Bửu Đức làm Trụ Trì và đã liên tục
          trùng tu tôn tạo chùa Tổ thành một ngôi danh lam tiêu biểu cho văn hóa
          Phật giáo Nguyên Thủy Việt Nam trong Công Viên Lịch Sử Văn Hóa Dân
          Tộc.
        </p>
      </div>
    </section>
  );
}
