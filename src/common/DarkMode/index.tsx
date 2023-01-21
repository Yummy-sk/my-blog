import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { Sun, Moon } from '@/common/DarkMode/Icon';

export function ThemeModeToggler() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(Sun, Moon);

  return (
    <IconButton
      aria-label='Toggle dark mode'
      fontSize='2xl'
      variant='ghost'
      onClick={() => toggleColorMode()}
      icon={<SwitchIcon />}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      style={{ boxShadow: 'none' }}
    />
  );
}
