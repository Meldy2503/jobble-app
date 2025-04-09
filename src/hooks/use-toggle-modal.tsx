import { useState } from "react";

interface UseToggleReturn {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

const useToggleModal = (initialState: boolean = false): UseToggleReturn => {
  const [open, setOpen] = useState<boolean>(initialState);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const toggleModal = () => setOpen((prev) => !prev);

  return {
    open,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useToggleModal;
