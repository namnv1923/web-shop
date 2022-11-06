import { useNavigate } from 'react-router-dom';
// import { signInWithGoogle } from '~/services/auth';
import images from '~/assets/images';

function Register() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center mt-[180px]">
            <div className="w-[30%] p-[30px] border-[1px] border-solid border-[#ccc]">
                <h3 className="text-[24px] font-semibold text-center mb-[14px]">Register now!</h3>
                <input
                    className="w-full px-[14px] py-[8px] mb-[20px] border-[1px] border-solid border-[#ccc] text-[16px] font-medium"
                    placeholder="Enter email..."
                />
                <input
                    className="w-full px-[14px] py-[8px] border-[1px] border-solid border-[#ccc] text-[16px] font-medium"
                    placeholder="Enter password..."
                />
                <div className="cursor-pointer flex justify-center items-center text-[20px] font-medium w-full text-center h-[42px] mt-[22px] mb-[18px] border-[1px] border-solid border-[#16a3b7] hover:opacity-90">
                    Register
                </div>
                <div
                    onClick={() => navigate('/login')}
                    className="cursor-pointer flex justify-center items-center text-[20px] text-center font-medium w-full h-[42px] border-[1px] border-solid border-[#000] hover:opacity-90"
                >
                    Login
                </div>
                <div className="flex items-center justify-center mt-[20px]">
                    <div className="flex items-center ">
                        <span className="text-[16px] font-medium">Don't have an account</span>
                        <div className="block">
                            <img src={images.iconGoogle} alt="Google" className="ml-[8px] cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
