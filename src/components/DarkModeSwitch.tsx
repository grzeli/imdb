'use client';
import React, { useEffect, useState } from 'react';
import { MdLightMode as LightModeIcon, MdDarkMode as DarkModeIcon } from 'react-icons/md';
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted &&
        (currentTheme === 'dark' ? (
          <LightModeIcon
            className='cursor-pointer text-xl hover:text-amber-500'
            onClick={() => setTheme('light')}
          />
        ) : (
          <DarkModeIcon
            className='cursor-pointer text-xl hover:text-amber-500'
            onClick={() => setTheme('dark')}
          />
        ))}
    </>
  );
};

export default DarkModeSwitch;
