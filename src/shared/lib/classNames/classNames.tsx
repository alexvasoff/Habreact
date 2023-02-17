type Mods = Record<string, boolean | string>;
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []) {
  const activeMods = Object.entries(mods).filter(([className, isActive]) => !!isActive).map(([className]) => className);
  return [
    cls,
    ...additional,
    ...activeMods,
  ].join(' ');
}
