import { useLocation, useNavigate  } from "react-router-dom";
export default function Account() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!localStorage.getItem("isLoggedIn")) {
  navigate("/login");
  return null;
}

  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
  };
  return (
    <div className="h-screen flex justify-center bg-white">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9]">
        {/* Header */}
        <div className="w-full h-[68px] bg-white flex items-center px-[20px] border-b border-gray-200">
          <h1 className="text-[16px] font-medium">Account Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="px-[20px] pt-[30px] pb-[20px] flex items-start gap-[16px]">
          <div className="relative w-fit flex-shrink-0">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-[76px] h-[76px] rounded-full object-cover"
            />
            <img 
              className="absolute w-[21px] h-[23px] right-0 bottom-0" 
              src="Group 1585@2x.png" 
              alt="cam" 
            />
          </div>

          {/* User Info */}
          <div className="pt-[8px]">
            <h2 className="text-[15px] font-medium text-black">{data?.fullName || "Marry Doe"}</h2>
            <p className="text-[14px] font_regular text-black mt-[4px]">{data?.email || "Marry@gmail.com"}</p>
          </div>
        </div>

        {/* Description */}
        <div className="px-[20px] pb-[30px]">
          <p className="text-[14px] text-black leading-[20px]">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          </p>
          <div className="w-full border-t border-dashed border-gray-300 mt-[20px] "></div>
          <div className="w-full border-t border-dashed border-gray-300 mt-auto "></div>
        </div>

        <div className="px-[20px] mt-[20px]">
       <button
        onClick={handleLogout}
        className="w-full h-[46px] bg-red-500 text-white rounded-[6px]"
      >
        Logout
      </button>
        </div>
      </div>
    </div>
  );
}