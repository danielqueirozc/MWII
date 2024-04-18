import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
  import { russoOne, cardo } from '@/app/font/fonts';

interface NavigationMenuProps {
    label?: string;
}

export function NavigationMenuHeader({ label }: NavigationMenuProps) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger className={`${label === 'ESPORTS' ? cardo.className : russoOne.className} text-zinc-600 text-[18px]`} >
                    {label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink className='text-white'>
                        Link
                    </NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
    );
}