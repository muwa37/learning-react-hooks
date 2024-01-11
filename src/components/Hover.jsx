import React, {useRef} from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
    const ref = useRef();
    const isHovering = useHover(ref);

    console.log(isHovering);

    return (
        <div
            ref={ref}
            style={{
                height: 250, 
                width: 250, 
                background:
                    isHovering ? 'teal' : 'orange'
            }}
        >
            check on hover
        </div>
    );
};

export default Hover;