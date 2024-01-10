import image from '../img/image1.png'
import logo from '../img/Frame.png'
import art from '../img/image2.png'
import artt from '../img/image3.png'
import arttt from '../img/image4.png'
function Header() {
    return (
        <>
            <div className='relative text-white'>
                <img src={image} alt="anhnen" />
                <div className='absolute top-6 left-20 text-white items-center flex '>
                    <div className=''>
                        <h1>HST Event</h1>
                        <p className='text-[10px] absolute left-8 '>EST 2018</p>
                    </div>
                    <img className='h-28' src={logo} alt="logo" />
                </div>
                <div className=''>
                    <nav className="flex gap-14 absolute top-12 right-1/3">
                        <a href="#" className="hover:text-gray-300">TRANG CHỦ</a>
                        <a href="#" className="hover:text-gray-300">DỊCH VỤ</a>
                        <a href="#" className="hover:text-gray-300">ĐỐI TÁC</a>
                    </nav>
                </div>
                <div className='absolute top-12 right-20 flex gap-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
                <div className='absolute top-1/4 left-10'>
                    <h1 className='font-bold text-[26px] w-32 '>TỔ CHỨC SỰ KIỆN TRỌN GÓI</h1>
                    <p className='absolute font-normal text-[10px] top-40'>ý tưởng của bạn , sứ mệnh của chúng tôi</p>
                </div>
                <div className=''>
                    <button className='absolute bottom-20 left-3 bg-yellow-500 text-black font-normal w-[200px] h-8'>
                        <a href="">Nhận Tư Vấn Ngay</a>
                    </button>
                </div>
                <div className=''>
                    <h1 className='absolute top-1/4 left-[46%] text-[40px] font-bold'>
                        Lễ Hội Tận Hưởng Mùa Hè
                        <br />ENJOY DANANG 2023
                        <p className='text-[20px] font-normal'>
                            HST Events phối hợp cùng Danang FantastiCity, đã tổ chức Lễ hội Tận hưởng mùa hè – ENJOY DANANG 2023  với đêm nhạc hội cùng dàn sao khủng đang được yêu thích nhất showbiz Việt........
                        </p>
                    </h1>
                </div>
                <div className='absolute flex flex-col-2 gap-5 bottom-4 justify-center right-1/3'>
                    <img className='w-40 h-46' src={art} alt="image2" />
                    <img className='w-40 h-46' src={artt} alt="image3" />
                    <img className='w-40 h-46' src={arttt} alt="image4" />
                </div>
            </div>

        </>
    )
}

export default Header