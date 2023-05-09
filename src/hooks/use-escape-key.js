//packages
import { useEffect } from "react";


const useEscapeKey = (key, callback) => {
    useEffect(() => {
        function handleKeyDown(event) {
          if (event.code === key) {
            callback()
          }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => {
          window.removeEventListener("keydown", handleKeyDown)
        }
      }, [key, callback])
};

export default useEscapeKey;