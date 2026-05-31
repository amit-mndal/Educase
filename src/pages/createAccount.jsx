import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateAccount() {
  const navigate = useNavigate();
const [form, setForm] = useState({
  fullName: "",
  phone: "",
  email: "",
  password: "",
  company: "",
  agency: ""
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};
  return (
    <div className="flex items-start justify-center">
    <div className=" relative w-[375px] h-[812px] bg-[#F7F8F9] px-[20px] pt-[40px] flex flex-col"> 

      <h1 className="text-[28px] font-medium mb-[20px]">
        Create your <br /> PopX account
      </h1>

      {/* Inputs (you can refine later) */}
      <label className="absolute top-[132px] left-[30px] bg-[#F7F8F9] px-[4px] text-[13px] text-[#6C25FF]">
        Full Name <span className="text-red-500">*</span>
     </label>
      <input name="fullName"value={form.fullName} onChange={handleChange} placeholder="Full Name" className="mb-[15px] h-[44px] px-[12px] border rounded-[6px] bg-inherit" />
      <label className="absolute top-[185px] left-[30px] bg-[#F7F8F9] px-[4px] text-[13px] text-[#6C25FF]">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" className="mb-[15px] h-[44px] px-[12px] border rounded-[6px] bg-inherit" />
      <label className="absolute top-[235px] left-[30px] bg-[#F7F8F9] px-[4px] text-[13px] text-[#6C25FF]">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="mb-[15px] h-[44px] px-[12px] border rounded-[6px] bg-inherit" />
      <label className="absolute top-[287px] left-[30px] bg-[#F7F8F9] px-[4px] text-[13px] text-[#6C25FF]">
        Password <span className="text-red-500">*</span>
      </label>
      <input name="password" value={form.password} onChange={handleChange} placeholder="Password" className="mb-[15px] h-[44px] px-[12px] border rounded-[6px] bg-inherit" />
      <label className="absolute top-[340px] left-[30px] bg-[#F7F8F9] px-[4px] text-[13px] text-[#6C25FF]">
        Company Name
      </label>
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" className="mb-[15px] h-[44px] px-[12px] border rounded-[6px] bg-inherit" />

      <div className="mt-[20px]">
  <p className="text-[13px] mb-[10px] mt-[8px]">
    Are you an Agency? <span className="text-red-500">*</span>
  </p>

  <div className="flex items-center gap-[18px]  ">

    {/* YES */}
    <label className="flex items-center gap-[8px] cursor-pointer">
      <input
        type="radio"
        name="agency"
        value="yes"
        className="accent-[#6C25FF] w-[18px] h-[18px]"
       
      />
      Yes
    </label>

    {/* NO */}
    <label className="flex items-center gap-[8px] cursor-pointer">
      <input
        type="radio"
        name="agency"
        value="no"       
        className="accent-[#6C25FF] w-[18px] h-[18px]"
        
      />
      No
    </label>

  </div>
</div>

      {/* Button */}
      <button className=" mt-[261px] mb-[30px] h-[46px] bg-[#6C25FF] text-white rounded-[6px] transition-transform duration-150 active:scale-95" onClick={() => navigate("/account", { state: form })}>
        Create Account
      </button>

    </div>
  </div>
  );
}