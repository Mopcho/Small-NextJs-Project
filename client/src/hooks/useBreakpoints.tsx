import { useState } from 'react';

interface Breakpoints {
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
  tv: number;
}

export const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    mobile: 320,
    tablet: 481,
    laptop: 769,
    desktop: 1025,
    tv: 1201,
  });
  return { breakpoints, setBreakpoints };
};
