"use client"

import Image from 'next/image';
import Link from 'next/link';

import { russoOne } from '@/app/font/fonts';

import logo from '@/app/assets/logo.svg';
import shieldIcon from '@/app/assets/shield-icon.svg';

import { NavigationMenuHeader } from './navigationMenu/NavigationMenu';

export function Header() {
    return (
        <header className='w-full max-w-[1920px] h-[72px] px-5 py-[10px] flex items-center justify-between'>
            <div className='flex gap-[18px]'>
                <Image src={logo} alt='logo' />

                <NavigationMenuHeader label='GAMES' />
                <NavigationMenuHeader label='NEWS' />
                <NavigationMenuHeader label='ESPORTS' />
                <NavigationMenuHeader label='SUPPORT' />
                <NavigationMenuHeader label='SHOP' />
            </div>

            <div className='w-[686px] h-[52px] flex gap-[18px] items-center justify-between '>
               <div className='w-[205px] h-6 flex items-center gap-[12px]'>
                <Link href='#' className={`${russoOne.className} text-zinc-600 text-[18px}`} >
                    LOGIN
                </Link>

                <div className='w-[2px] h-[14px] bg-zinc-600 rounded-full' />

                <Link href='#' className={`${russoOne.className} text-zinc-600 text-[18px}`} >
                    SIGN UP
                </Link>
               </div>

               <div className='w-[260px] h-[26px] flex items-center gap-[10px]'>
                <Image className='text-zinc-600' src={shieldIcon} alt='shield icon' />
                <span className={`${russoOne.className} text-zinc-600 text-[18px}`}>MY CALL OF DUTY</span>
               </div>

               <button className={`${russoOne.className} text-[15px] w-[185px] h-[52px] px-[26px] py-[14px] bg-green`}>
                PRE-ORDER
               </button>
            </div>
        </header>
    );
}