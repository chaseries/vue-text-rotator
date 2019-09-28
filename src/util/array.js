
export const circularNext = (idx, a) => {
  return (idx + 1) % a.length;
};

export const circularPrev = (idx, a) => {
  return ((idx - 1) + a.length) % a.length;
};


