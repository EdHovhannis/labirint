import { useCallback } from "react";

export const useBlockenv = () => {
  const blockenvironment = useCallback((p1, p2) => {
    const to = [];
    const from = [];
    function definer(where, what) {
      const pick = [];
      for (let i = 0; i < where.length; i++) {
        const index = where[i].findIndex((item) => item === what);
        if (index >= 0) {
          pick.push(
            where[i]?.[index - 1],
            where[i]?.[index + 1],
            where[i - 1]?.[index],
            where[i + 1]?.[index]
          );
        }
      }
      const filtered = pick
        .filter((item) => item !== undefined)
        .filter((item) => item !== p2);

      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const arrow = filtered[getRndInteger(0, filtered.length - 1)];
      to.push(arrow);
      from.push(what);
      if (to.length > 9) {
        return { from, to };
      }
      return definer(where, arrow);
    }
    const steps = definer(p1, p2);
    const directions = [];
    for (let i = 0; i < steps.from.length; i++) {
      const rowsto = p1.findIndex((item) => item.includes(steps.to[i]));
      const rowsfrom = p1.findIndex((item) => item.includes(steps.from[i]));
      const difrows = rowsfrom - rowsto;
      const difcols = steps.from[i] - steps.to[i];

      if (difcols < 0 && difrows === 0) {
        directions.push("right");
      }
      if (difcols > 0 && difrows !== 0) {
        directions.push("up");
      }
      if (difcols < 0 && difrows !== 0) {
        directions.push("down");
      }
      if (difcols > 0 && difrows === 0) {
        directions.push("left");
      }
    }
    return { directions, lastpoint: steps.to[steps.to.length - 1] };
  }, []);

  return { blockenvironment };
};
