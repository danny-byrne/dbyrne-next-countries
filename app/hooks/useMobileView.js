import { useMediaQuery } from "react-responsive";

export const useMobileView = () => {
  return useMediaQuery({
    query: "(max-width: 767px)",
  });
};
