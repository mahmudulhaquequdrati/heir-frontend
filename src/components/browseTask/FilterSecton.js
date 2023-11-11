import Image from 'next/image';
import React, { useState } from 'react';
import Checkbox from '../../assets/logo/checkbox 1.svg'
import Checked from '../../assets/logo/checked.svg'
const FilterSecton = () => {
    const [isChecked, setIsChecked] = useState([]);
    const [toBeDone, setToBeDone] = useState('all');
    const [category, setCategory] = useState('available');
    const [priceSorting, setPriceSorting] = useState('hightolow');
    const [datasorting, setDataSorting] = useState(['earliest', 'oldest']);
    const handleClickCheckbox = (index) => {
        if (isChecked.includes(index)) {
            setIsChecked(isChecked?.filter(fill => fill !== index))
        } else {
            setIsChecked([...isChecked, index])
        }
    };
    const handleDataSorting = (data) => {
        if (datasorting.includes(data)) {
            setDataSorting(datasorting?.filter(fill => fill !== data))
        } else {
            setDataSorting([...datasorting, data])
        }
    };
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='text-primary font-bold text-lg'>Filter</h2>
                <p className='text-secondery'>Clear all</p>
            </div>
            <hr className='my-5' />
            <div className='bg-[#F4F8FD] p-10 rounded-xl'>
                <h2>Category</h2>
                <div>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 focus:border-gray-300 rounded-lg bg-white" placeholder="Search here..." required />
                        <button type="submit" className="text-white absolute right-0 bottom-0 bg-secondery hover:bg-secondery font-medium rounded-lg text-sm px-5 py-[13px] ">Search</button>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 my-3'>
                    <div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(1) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(1)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(2) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(2)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(3) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(3)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(4) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(4)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(5) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(5)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(6) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(6)}
                            />
                            <p>Advisory</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(7) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(7)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(8) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(8)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(9) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(9)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(10) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(10)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(11) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(11)}
                            />
                            <p>Advisory</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                className='cursor-pointer mr-2'
                                width={18}
                                height={18}
                                alt='checkbox'
                                src={isChecked.includes(12) ? Checked : Checkbox}
                                onClick={() => handleClickCheckbox(12)}
                            />
                            <p>Advisory</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f8fd] rounded-xl mt-10'>
                <div className="flex flex-col items-start gap-[24px] p-[24px] relative bg-accent rounded-[24px] overflow-hidden">
                    <div className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-[20px] tracking-[0] leading-[normal]">
                            To Be Done
                        </div>
                    </div>
                    <div className="items-start gap-[16px] self-stretch w-full flex-[0_0_auto] flex relative cursor-pointer">
                        <div onClick={() => setToBeDone('all')} className={toBeDone === 'all' ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center px-[24px] py-[10px]'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${toBeDone === 'all' ? 'text-[#fdf3eb]' : 'text-primary'} text-[20px] tracking-[0.20px] leading-[normal]`}>
                                All
                            </div>
                        </div>
                        <div onClick={() => setToBeDone('in_person')} className={toBeDone === 'in_person' ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center px-[24px] py-[10px]'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${toBeDone === 'in_person' ? 'text-[#fdf3eb]' : 'text-primary'} text-[20px] tracking-[0.20px] leading-[normal]`}>
                                In person
                            </div>
                        </div>
                        <div onClick={() => setToBeDone('remotely')} className={toBeDone === 'remotely' ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center px-[24px] py-[10px]'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${toBeDone === 'remotely' ? 'text-[#fdf3eb]' : 'text-primary'} text-[20px] tracking-[0.20px] leading-[normal]`}>
                                Remotely
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f4f8fd] mt-10 flex flex-col items-start gap-[24px] p-[24px] relative bg-accent rounded-xl overflow-hidden">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-[20px] tracking-[0] leading-[normal]">
                        Sub hub
                    </div>
                    <div className="relative w-fit mt-[-1.00px] opacity-0 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-[20px] tracking-[0.20px] leading-[normal]">
                        Clear all
                    </div>
                </div>
                <div className="h-[60px] w-full rounded-[12px] overflow-hidden flex items-center relative self-stretch">
                    <div className="gap-[10px] pl-[16px] pr-[36px] py-[20px] flex-1 grow bg-white flex items-center relative self-stretch">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Regular',Helvetica] font-normal text-primary text-[16px] tracking-[0] leading-[normal]">
                            Dhaka, Bangladesh
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f8fd] rounded-xl mt-10 p-[24px]'>
                <div>
                    <p className='font-medium text-primary text-[20px]'>Distance</p>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between items-center'>
                        <p>5km</p>
                        <p>500km</p>
                    </div>
                    <div>
                        <input className='w-full bg-transparent accent-secondery range-slider' type="range" />
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f8fd] rounded-xl mt-10 p-[24px]'>
                <div>
                    <p className='font-medium text-primary text-[20px]'>Task Price</p>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between items-center'>
                        <p>5$</p>
                        <p>500$</p>
                    </div>
                    <div>
                        <input className='w-full bg-transparent accent-secondery range-slider' type="range" />
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f8fd] rounded-xl mt-10'>
                <div className="flex flex-col items-start gap-[24px] p-[24px] relative bg-accent rounded-[24px] overflow-hidden">
                    <div className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-[20px] tracking-[0] leading-[normal]">
                            Task catagory
                        </div>
                    </div>
                    <div className="items-start gap-[16px] self-stretch w-full flex-[0_0_auto] flex relative cursor-pointer">
                        <div onClick={() => setCategory('available')} className={category === 'available' ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${category === 'available' ? 'text-[#fdf3eb]' : 'text-primary'} text-[18px] tracking-[0.20px] leading-[normal]`}>
                                Available tasks
                            </div>
                        </div>
                        <div onClick={() => setCategory('unavailable')} className={category === 'unavailable' ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${category === 'unavailable' ? 'text-[#fdf3eb]' : 'text-primary'} text-[18px] tracking-[0.20px] leading-[normal]`}>
                                No offers tasks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f8fd] rounded-xl mt-10'>
                <div className="flex flex-col items-start gap-[24px] p-[24px] relative bg-accent rounded-[24px] overflow-hidden">
                    <div className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-[20px] tracking-[0] leading-[normal]">
                            Price Sorting
                        </div>
                    </div>
                    <div className="items-start gap-[16px] self-stretch w-full flex-[0_0_auto] flex relative cursor-pointer">
                        <div onClick={() => setPriceSorting('hightolow')} className={priceSorting === 'hightolow' ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center '}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${priceSorting === 'hightolow' ? 'text-[#fdf3eb]' : 'text-primary'} text-[18px] tracking-[0.20px] leading-[normal]`}>
                                Price high to low
                            </div>
                        </div>
                        <div onClick={() => setPriceSorting('lowtohigh')} className={priceSorting === 'lowtohigh' ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center '}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${priceSorting === 'lowtohigh' ? 'text-[#fdf3eb]' : 'text-primary'} text-[18px] tracking-[0.20px] leading-[normal]`}>
                                Price low to high
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f8fd] rounded-xl mt-10'>
                <div className="flex flex-col items-start gap-[24px] p-[24px] relative bg-accent rounded-[24px] overflow-hidden">
                    <div className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-[20px] tracking-[0] leading-[normal]">
                            Date Sorting
                        </div>
                    </div>
                    <div className="items-start gap-[16px] self-stretch w-full flex-[0_0_auto] flex relative cursor-pointer">
                        <div onClick={() => handleDataSorting('earliest')} className={datasorting.includes('earliest') ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center px-[24px] py-[10px]'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${datasorting.includes('earliest') ? 'text-[#fdf3eb]' : 'text-primary'} text-[20px] tracking-[0.20px] leading-[normal]`}>
                                Earliest
                            </div>
                        </div>
                        <div onClick={() => handleDataSorting('lowest')} className={datasorting.includes('lowest') ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center px-[24px] py-[10px]'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${datasorting.includes('lowest') ? 'text-[#fdf3eb]' : 'text-primary'} text-[20px] tracking-[0.20px] leading-[normal]`}>
                                Latest
                            </div>
                        </div>
                    </div>
                    <div className="items-start gap-[16px] self-stretch w-full flex-[0_0_auto] flex relative cursor-pointer">
                        <div onClick={() => handleDataSorting('oldest')} className={datasorting.includes('oldest') ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center px-[24px] py-[10px]'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${datasorting.includes('oldest') ? 'text-[#fdf3eb]' : 'text-primary'} text-[20px] tracking-[0.20px] leading-[normal]`}>
                                Oldest task
                            </div>
                        </div>
                        <div onClick={() => handleDataSorting('close')} className={datasorting.includes('close') ? 'h-[56px] items-center justify-center  px-[24px] py-[10px] flex-1 grow bg-primary rounded-[12px] overflow-hidden flex relative' : 'h-[56px] flex items-center px-[24px] py-[10px]'}>
                            <div className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${datasorting.includes('close') ? 'text-[#fdf3eb]' : 'text-primary'} text-[20px] tracking-[0.20px] leading-[normal]`}>
                                Close to me
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSecton;