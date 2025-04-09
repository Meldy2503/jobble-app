'use client'

import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import Button from "../button";
import { useColorModeValue } from "./color-mode";

interface ModalProps {
  open: boolean;
  onOpenChange: () => void;
  title?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xs" | "cover" | "full";
  cta?: boolean;
}

const Modal = ({
  open,
  onOpenChange,
  title,
  children,
  size,
  cta,
}: ModalProps) => {
  const bgColor = useColorModeValue("#f9f9f9", "#283244");
  const textColor = useColorModeValue("#333", "#fff");
  return (
    <Dialog.Root
      lazyMount
      open={open}
      onOpenChange={onOpenChange}
      placement={"center"}
      size={size ?? "lg"}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            rounded={".5rem"}
            py="2rem"
            px={{ base: ".4rem", md: "1rem" }}
            m=".2rem"
            bg={bgColor}
            color={textColor}
          >
            <Dialog.Header>
              <Dialog.Title mb="1.5rem">{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{children}</Dialog.Body>
            {cta && (
              <Dialog.Footer mt="2rem">
                <Button
                  variant={"outline"}
                  border={"1px solid #007AFF"}
                  color="#007AFF"
                  bg="white"
                  onClick={onOpenChange}
                  fontSize={".9rem"}
                  hover="#f3f4f5"
                >
                  Cancel
                </Button>
                <Button onClick={onOpenChange} fontSize={".9rem"}>
                  Save
                </Button>
              </Dialog.Footer>
            )}
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
