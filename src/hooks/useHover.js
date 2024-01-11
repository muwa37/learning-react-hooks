import {useEffect, useState} from "react";

export default function useHover(ref) {
    const [isHovering, setHovering] = useState(false);

    const onHover = () => setHovering(true);
    const offHover = () => setHovering(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        const node = ref.current;

        node.addEventListener('mouseenter', onHover)
        node.addEventListener('mousemove', onHover)
        node.addEventListener('mouseleave', offHover)

        return function () {
            node.removeEventListener('mouseenter', onHover)
            node.removeEventListener('mousemove', onHover)
            node.removeEventListener('mouseleave', offHover)
        };
    }, [])

    return isHovering;
};