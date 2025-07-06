'use client';

import {useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Checkout() {
    const router = useRouter();
    const [price, set_price] = useState(0);

    useEffect(() => {
        const storage = localStorage.getItem("fjweofjoiwefjiowjfio");
        if (storage) {
            set_price(JSON.parse(storage));
        }
    }, []);

    return (
        <div className="w-full min-h-screen flex items-center  bg-[#C6E2D3] flex-col relative">
            <div className='fixed top-[10px] left-[10px] z-[100] w-[150px] h-[50px] flex items-center justify-center bg-[#FAF6F0] rounded-[2px] shadow-md hover:scale-[0.95] transition-all duration-150 cursor-pointer text-[#d7c5df] text-[20px] font-light italic'
                onClick={() => {
                    router.push("/store");
                }}
            >
                Store
            </div>
            <div className='text-[#FAF6F0] text-[64px] font-extralight italic w-full text-center mt-[70px]'
                style={{
                    textShadow: '0px 0px 14px rgba(0, 0, 0, 0.1)',
                }}>
                Checkout
            </div>
            <div className='w-[120px] h-[120px] relative mt-[20px] flex items-center justify-center'>
                <Image
                    src="/butterfly.png"
                    alt="icon"
                    width={120}
                    height={120}
                    className='object-contain opacity-[0.5]'
                />
            </div>
            {/* <div className='w-[900px] bg-[#FAF6F0] mt-[60px] shadow-md flex flex-col items-center py-[20px] px-[40px] '>
                <div className='text-[#d36969] text-[32px] font-bold w-full text-center'>
                    Your Order
                </div>
                <div className='text-[#d36969] text-[24px] font-light w-full text-center mt-[20px]'>
                    Total Price: ${price}
                </div>
            </div> */}
            <div className='w-full text-center text-[#FAF6F0] text-[36px] font-extralight italic mt-[40px] leading-[40px]'
                style={{
                    textShadow: '0px 0px 14px rgba(0, 0, 0, 0.2)',
                }}
            >
                Billing information
            </div>
            <div className='w-full text-center text-[#FAF6F0] text-[16px] font-bold '
                style={{
                    textShadow: '0px 0px 14px rgba(0, 0, 0, 0.2)',
                }}>
                ${price.toFixed(2)}
            </div>
            <div className='flex flex-col items-center mt-[20px] gap-[5px]'>
                <div className='w-1 h-[10px]'></div>
                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px] font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>Card Number:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='Enter your card number'
                        maxLength={16}
                        pattern="\d{16}"
                        required
                    /> 
                </div>

                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px] font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>Expiry Date:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='MM/YY'
                        maxLength={5}
                        pattern="\d{2}/\d{2}"
                        required
                    />
                </div>
                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px] font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>CVV:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='Enter CVV'
                        maxLength={3}
                        pattern="\d{3}"
                        required
                    />
                </div>
                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px]
    font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>Cardholder Name:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='Enter cardholder name'
                        required
                    />
                </div>

                <div className='w-1 h-[10px]'></div>
                
                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px] font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>Billing Address:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='Enter billing address'
                        required
                    />
                </div>
                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px] font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>City:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='Enter city'
                        required
                    />
                </div>

                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px] font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>Province/Terr:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='Enter Province/Terr'
                        required
                    />
                </div>

                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px] font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>Postal Code:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='Enter postal code'
                        maxLength={6}
                        pattern="[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d"
                        required
                    />
                </div>
                <div className='flex justify-center gap-[10px] items-center h-[40px]'>
                    <label className='text-[#FAF6F0] text-[20px] font-light w-[200px] text-right h-full bg-[#b6d6c5] rounded-[2px] px-[10px] flex items-center justify-center shadow-sm'>
                        <div>Country:</div>
                    </label>
                    <input
                        type="text"
                        className='w-[300px] h-[40px] px-[10px] rounded-[2px] bg-[#FAF6F0] text-[#4e9971] text-[20px] font-light shadow-sm focus:outline-none focus:border-transparent'
                        placeholder='Enter country'
                        required
                    />
                </div>

                <div className='mt-[20px]'>
                    <button
                        className='w-[200px] h-[40px] bg-[#c4a9cf] text-[#FAF6F0] text-[16px] font-bold hover:bg-[#cdb1d8] hover:scale-[0.95] transition-all duration-150 shadow-sm'
                        onClick={() => {
                            router.push("/thankyou");
                        }}
                    >
                        Pay Now
                    </button>
                </div>
            </div>
            <div className='w-1 h-[50px]'>

            </div>
        </div>
    )

}