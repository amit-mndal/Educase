import { useNavigate } from "react-router-dom";
export default function Login() {
         const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center bg-white">
    <div className="w-[375px] h-[812px] bg-[#F7F8F9] px-[20px] pt-[40px] justify-top ">

      {/* Title */}
      <h1 className="text-[28px] font-medium w-[188px] h-[69px] mb-[24px] ">
        Signin to your PopX account
      </h1>

      {/* Subtitle */}
      <p className="text-[18px] text-[#7B7B7B] w-[232px] h-[48px] mt-[14px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Email */}
      <div className="mb-[20px] relative">

  <label className="absolute top-[24px] left-[14px] bg-[#F7F8F9] px-[4px] text-[13px] text-[#6C25FF]">
    Email Address
  </label>

  <input
    type="email"
    placeholder="Enter email address"
    className="w-full h-[44px] px-[12px] rounded-[6px] border border-gray-300 text-[14px] outline-none mt-[33px] bg-inherit "
  />

</div>

      {/* Password */}
      <div className="mb-[20px] relative">
        <label className="absolute -top-[10px] left-[14px] bg-[#F7F8F9] px-[4px] text-[13px] text-[#6C25FF]">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full h-[44px] px-[12px] rounded-[6px] border border-gray-300 text-[14px] outline-none bg-inherit"
        />
      </div>

      {/* Button */}
      <button 
      // onClick={() => navigate("/account")}
      onClick={() => {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/account");
      }}



      className="w-full h-[46px] bg-gray-300 text-white rounded-[6px] text-[14px] font-medium hover:bg-[#6C25FF] ">
        Login
      </button>

    </div>
  </div>
  );
}