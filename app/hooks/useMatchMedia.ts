/* eslint-disable */
import { useState, useLayoutEffect } from "react";

const queries = [
  "(max-width: 700px)",
  "(min-width: 980px) and (max-width: 999px)",
  "(min-width: 1000px)",
];

export const useMatchMedia = () => {
  if (typeof window === "undefined") return {};
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getValues = () => mediaQueryLists.map((list) => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener("change", handler)
      );
  }, []);

  return { isMobile: !values[0], isTablet: !values[1], isDesktop: !values[2] };
};
