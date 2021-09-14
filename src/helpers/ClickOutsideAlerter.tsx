import React, { useEffect } from "react";

function clickOutsideAlerter(
    ref:React.RefObject<HTMLInputElement>,
    callback: () => void
) : void {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event:any) {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                callback()
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default clickOutsideAlerter;