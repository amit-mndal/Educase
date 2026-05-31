import { useNavigate } from "react-router-dom";



export default function App() { 
  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      
    
      {/* Mobile Card */}
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] flex flex-col px-[20px] pb-[41px] pt-[571px] justify-end">
        
        <div>
          <h1 className="font-rubik font-medium text-[28px] leading-[33px] mb-[10px]">
            Welcome to PopX
          </h1>

          <p className="font-rubik font-regular text-[18px] text-black/60 mb-[29px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

         <button onClick={() => navigate("/create-account")}
          className="w-full h-[46px] bg-[#6C25FF] text-white rounded-[6px] text-[14px] font-medium mb-[12px] transition-transform duration-150 active:scale-95">
            Create Account
         </button>

          <button onClick={() => navigate("/login")}
           className="w-full h-[46px] bg-[#6C25FF4B] text-black rounded-[6px] text-[14px] font-medium mb-[41px] transition-transform duration-150 active:scale-95">
            Already Registered? Login
          </button>
        </div>

      </div>
    </div>
  );
}