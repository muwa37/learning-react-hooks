import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef()

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '10px',
            treshhold: 0.5,
        }

        observer.current = new IntersectionObserver (([target]) =>{
            if (target.isIntersecting) {
                callback()
            }
        }, options);

        observer.current.observe(childRef.current);

        return function() {
            observer.current.unobserve(childRef.current);
        };
    }, [callback])
}