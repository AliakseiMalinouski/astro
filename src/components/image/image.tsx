import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

type TProps = {
    src: string;
};

export const Image = ({
    src,
}: TProps) => {

    const [isVisible, setVisibility] = useState(false);

    const ref = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const interactionObserver = new IntersectionObserver((entries, observer) => {
            if(!entries[0]) return;
            if(entries[0].isIntersecting) {
                setVisibility(true);
                observer.disconnect();
            }
        }, {
            threshold: 0.1,
        });
        if(ref.current) {
            interactionObserver.observe(ref.current);
        }
        return () => {
            interactionObserver.disconnect();
        }
    }, []);

    const handleClick = useCallback((e: MouseEvent<HTMLImageElement>) => {
        console.log(e.target)
    }, []);

    return (
        <img
            ref={ref}
            width={40}
            height={40}
            onClick={handleClick}
            src={isVisible ? src : undefined}
        />
    );
};
