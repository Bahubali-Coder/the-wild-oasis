import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      //checks wether click happened inside menu or not, if not closes it .. ref--> references the menu element
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler(); //closes menu if clicked outside of it
      }
      //adding listner to whole document
      document.addEventListener("click", handleClick, listenCapturing); //true as 3rd argument ensures that event captured in capturing phase instead of bubbling phase
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}

// true--> capturing phase
// false--> bubbling phase (default)
