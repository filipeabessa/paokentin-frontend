const darkenHexColor = (hexColor: string, percent: number) => {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexColor)) {
    throw new Error('Invalid hexColor format. Use #RRGGBB or #RGB.');
  }

  hexColor = hexColor.replace('#', '');

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  const darkenAmount = percent / 100;
  const newR = Math.round(r * (1 - darkenAmount));
  const newG = Math.round(g * (1 - darkenAmount));
  const newB = Math.round(b * (1 - darkenAmount));

  const newHexColor = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;

  return newHexColor;
};

export {
  darkenHexColor,
}