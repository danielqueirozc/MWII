import Image from "next/image";

import bannerMWII from "@/app/assets/banners/bannerMWII.png";

export function MWII() {
    return (
        <section>
            <Image src={bannerMWII} alt='banner welcome to MWII' />
        </section>
    );
}