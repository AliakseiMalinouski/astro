import type { ImageMetadata } from "astro";
import Image from "astro/components/Image.astro";

type TProps = {
    images: {
        data: ImageMetadata;
        alt: string;
    }[];
};

export const Images = ({
    images,
}: TProps) => {
    return (
        images.map((image) => (
            <Image 
                src={image.data}
                alt={image.alt}
            />
        ))
    )    
};
