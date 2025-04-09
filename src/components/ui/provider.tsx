"use client";

import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import "../../app/globals.css";
import { useEffect, useState } from "react";
import LoadingIcon from "../loading";

export function Provider(props: ColorModeProviderProps) {
  const [loading, setLoading] = useState(true);
  const { children } = props;

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(delay);
  }, []);
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props}>
        <Box>
          {loading ? (
            
              <LoadingIcon />
          ) : (
            children
          )}
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
