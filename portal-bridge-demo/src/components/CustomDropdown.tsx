import React, { FC, useEffect, useRef, useState } from 'react';

export const CustomDropDown: FC<{
    dropdownList: string[]
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>
}> = ({ dropdownList, selected, setSelected }) => {
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const onSelected = (val: string) => {
        setSelected(val);
        ref.current?.blur();
    };
    return (
        <div ref={ref} className='w-full relative' tabIndex={0} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            <div className='border p-1 h-9'>
                <span className='text-md capitalize'>{selected}</span>
            </div>
            {
                isFocused &&
                <div className='mt-2 bg-gray-100 absolute z-10 w-full border'>
                    <ul className=''>
                        {
                            dropdownList.length > 0 &&
                            dropdownList.map((option) => {
                                return (
                                    <li className='w-full capitalize p-1 cursor-pointer hover:bg-gray-200'
                                        key={option}
                                        onClick={() => onSelected(option)}>
                                        {option}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div >
    )
}