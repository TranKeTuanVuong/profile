import React, { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import "../styles/Profile.css";

const Profile = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="container">
      <div className="left-section">
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">
              <img
                src="https://res.cloudinary.com/echoappchat/image/upload/v1748531287/xta5bqgduqqpgp18o9lr.jpg"
                alt="Avatar"
                className="avatar-image"
              />
            </div>
            <h2 className="name">Trần Kế Tuấn Vương</h2>
          </div>
          <div className="profile-info">
            <p className="label">Ngày sinh</p>
            <p className="value">04/01/2003</p>

            <p className="label">Giới tính</p>
            <p className="value">Nam</p>

            <p className="label">Số điện thoại</p>
            <p className="value">0394686892</p>

            <p className="label">Email</p>
            <p className="value">tktvuong040103@gmail.com</p>

            <p className="label">Địa chỉ</p>
            <p className="value">Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="project-thamgia">
          <h2>Dự án đã tham gia</h2>

          {/* Project 1 */}
          <div className="project-header" onClick={() => setIsOpen1(!isOpen1)}>
            <h3>EchoApp</h3>
            {isOpen1 ? <FiArrowUp size={24} /> : <FiArrowDown size={24} />}
          </div>
          {isOpen1 && (
            <div className="project-details animate">
              <p className="project-description">
                EchoApp – một ứng dụng nhắn tin tương tự Zalo, cho phép người
                dùng trò chuyện 1-1 và theo nhóm, gửi hình ảnh, video, tài liệu,
                âm thanh và emoji. Ứng dụng sử dụng React Native (mobile), React
                (web), Node.js, Socket.IO và MongoDB.
              </p>
              <p className="project-role">Vai trò: Nhóm trưởng</p>
              <p className="see-project" onClick={() => setIsOpen2(!isOpen2)}>
                Xem dự án
              </p>
              {isOpen2 && (
                <div className="project-link">
                  <a
                    href="https://github.com/NhuY211203/ZaloWeb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web App
                  </a>
                  <a
                    href="https://github.com/HinhHiep/AppChat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mobi App
                  </a>
                  <a
                    href="https://github.com/TranKeTuanVuong/CNM-Service"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Server
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Project 2 */}
          <div className="project-header" onClick={() => setIsOpen3(!isOpen3)}>
            <h3>CoffeeShopApp</h3>
            {isOpen3 ? <FiArrowUp size={24} /> : <FiArrowDown size={24} />}
          </div>
          {isOpen3 && (
            <div className="project-details animate">
              <p className="project-description">
                CoffeeShopApp – ứng dụng đặt đồ uống thông minh, hỗ trợ đặt
                hàng, thanh toán qua nhiều hình thức, theo dõi đơn, đánh giá và
                chatbot AI.
              </p>
              <p className="project-role">Vai trò: Thành viên</p>
              <p className="see-project" onClick={() => setIsOpen4(!isOpen4)}>
                Xem dự án
              </p>
              {isOpen4 && (
                <div className="project-link">
                  <a
                    href="https://github.com/MinhQuang2612/NOW_CAFE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mobi App
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
