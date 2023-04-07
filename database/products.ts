interface SeedProduct {
    description: string;
    images: string;
    /* inStock: number;
    price: number; */
    /* sizes: ValidSizes[]; */
    /* slug: string; */
    /* tags: string[]; */
    title: string;
    summary: string;
    /* type: ValidTypes; */
    gender: 'computadoras' | 'celulares' | 'audio' | 'televisores'
}

interface SeedData {
    products: SeedProduct[]
}

export const initialData: SeedData = {
    products: [
        {
            images:"https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119927/EcoShop/Televisor/TV_XIAOMI_43_PULGADAS_UHD_LED_Plano_SmartTV_aoxq9g.jpg",
            title : "TV Xiaomi 43 Pulgadas",
            gender: "televisores",
            description: "Dimensiones: 110 cm P1 4K-UHD, Resolución 4KUHD descubre cada detalle, Tecnología MEMC para imágenes suaves y nitidas, Control remoto Bluetooth activado por voz fácil de usar, Compatible con TDT. No compatible con TV Análoga, Sistema operativo AndroidTV 10, una interfaz fàcil de usar",
            summary: "El TV XIAOMI 43 P1 ofrece resolución 4K para no perderte de ningún detalle que combinado con la compatibilidad Dolby Visión y acompañado de la tecnología MEMC, podrás disfrutar de imágenes con movimientos fluidos y más naturales, y así disfrutaras tu contenido sin perder detalle alguno. Así mismo, podrás simplificar tú experiencia de entretenimiento gracias a la cómoda interfaz de Android TV 10, además, con el uso del control remoto y su conectividad Bluetooth activado por voz junto con el Asistente de Google, te permitirá obtener experiencias únicas disfrutando tu contenido ¡Ven por el tuyo!"
    
        }
    ]
}