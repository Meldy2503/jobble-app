import { useState } from "react";

interface UseToggleReturn {
  isToggled: boolean;
  toggleOn: () => void;
  toggleOff: () => void;
  toggle: () => void;
}

const useToggle = (initialState: boolean = false): UseToggleReturn => {
  const [isToggled, setIsToggled] = useState<boolean>(initialState);

  const toggleOn = () => setIsToggled(true);
  const toggleOff = () => setIsToggled(false);
  const toggle = () => setIsToggled((prev) => !prev);

  return {
    isToggled,
    toggleOn,
    toggleOff,
    toggle,
  };
};

export default useToggle;
