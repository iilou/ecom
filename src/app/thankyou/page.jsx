'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ThankYouPage() {
    const router = useRouter();

    const [surveryOpenned, setSurveyOpened] = useState(false);
    const [transferTime, setTransferTime] = useState(-1);

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#C6E2D3] flex-col">
            <div className="text-[#b59cc0] text-[64px] font-extralight italic leading-[70px] mt-[160px]">
                Thank You!
            </div>
            <div className="text-[#b59cc0] text-[32px] font-light w-[700px] text-center leading-[36px]">
                🎊 Your order has been placed successfully.  🎊
            </div>
            <div className="text-[#898989] text-[18px] font-light w-[700px] text-center leading-[22px] mt-[100px] italic">
                We appreciate your business and hope you enjoy your purchase! If you have the time, please fill out our quick 1 minute survey. We'd love to hear your thoughts 🪴.
            </div>
            <div className='mt-[30px] w-[700px] flex items-center justify-between'>
                <div className='w-[300px] h-[50px] flex items-center justify-center bg-[#b59cc0] rounded-[2px] shadow-md hover:scale-[0.95] transition-all duration-150 cursor-pointer text-[#FAF6F0] text-[20px] font-light italic'
                    onClick={() => {
                        setSurveyOpened(true);
                    }}
                >
                    Fill out our survey
                </div>
                <div className='w-[300px] h-[50px] flex items-center justify-center bg-[#b59cc0] rounded-[2px] shadow-md hover:scale-[0.95] transition-all duration-150 cursor-pointer text-[#FAF6F0] text-[20px] font-light italic'
                    onClick={() => {
                        router.push("/store");
                    }}
                >
                    Back to Store
                </div>
            </div>
            {
                surveryOpenned && (
                    <div className='fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center z-[100]'
                        style={{
                            backdropFilter: 'blur(5px)',
                        }}
                        onClick={() => {
                            setSurveyOpened(false);}}
                    >
                        <div className='w-[600px] h-[500px] bg-[#FAF6F0] rounded-[2px] shadow-md flex flex-col items-center justify-center'
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >   
                            <div className='text-[#b59cc0] text-[24px] font-bold mt-[20px]'>Survey Form</div>
                            <div className='text-[#89898999] italic text-[16px] font-light mb-[10px]'>Please fill out this quick survey to help us improve our service.</div>        
                            <input
                                className='w-[500px] h-[40px] bg-[#e8dded] rounded-[2px] px-[10px] text-[#717171] text-[16px] font-light mb-[5px]'
                                type="text"
                                placeholder="What would you rate us out of 5?"
                                pattern="[1-5]"
                                required
                            />
                            <input
                                className='w-[500px] h-[80px] bg-[#e8dded] rounded-[2px] px-[10px] text-[#717171] text-[16px] font-light mb-[5px]'
                                type="text"
                                placeholder="Did you find our website easy/intuitive to use? If not, please explain why :D"
                                required
                            />
                            <input
                                className='w-[500px] h-[120px] bg-[#e8dded] rounded-[2px] px-[10px] text-[#717171] text-[16px] font-light mb-[5px]'
                                type="text"
                                placeholder="What would you like to see improved? (optional)"
                            />

                            <div className='w-[500px] h-[40px] text-[#b59cc0] text-[14px] font-light mt-[5px] mb-[5px] text-center flex items-center justify-center'
                                style={{
                                    // opacity: transferTime === -1 ? 0 : 1,
                                    display: transferTime === -1 ? 'none' : 'flex',
                                }}
                            >
                                Thanks for filling this form :D. Moving you to the store in {transferTime} seconds...
                            </div>

                            <div className='w-[160px] h-[40px] bg-[#b59cc0] text-[#FAF6F0] text-[16px] font-bold hover:bg-[#cdb1d8] hover:scale-[0.95] transition-all duration-150 shadow-sm flex items-center justify-center cursor-pointer mb-[20px] mt-[5px]'
                                onClick={() => {
                                    if (transferTime !== -1) {
                                        return;
                                    }
                                    // setSurveyOpened(false);
                                    // router.push("/store");
                                    setTransferTime(5);
                                    const interval = setInterval(() => {
                                        setTransferTime((prev) => {
                                            if (prev <= 1) {
                                                clearInterval(interval);
                                                router.push("/store");
                                                return -1;
                                            }
                                            return prev - 1;
                                        });
                                    }, 1000);
                                }
                            }>
                                Submit
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}