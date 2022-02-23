import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000, maxWidth: 1200 });
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 425, maxWidth: 768 });
  return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 300, maxWidth: 424 });
  return isMobile ? children : null;
};

export const Default = ({ children }) => {
  const isDefault = useMediaQuery({ minWidth: 1201 });
  return isDefault ? children : null;
};
