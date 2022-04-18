import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

export function getPkgs(opts?: { base?: string }): string[] {
  const base = opts?.base || join(__dirname, '../packages');
  return readdirSync(base).filter((dir) => {
    return !dir.startsWith('.') && existsSync(join(base, dir, 'package.json'));
  });
}

export function eachPkg(
  pkgs: string[],
  fn: (opts: {
    name: string;
    dir: string;
    pkgPath: string;
    pkgJson: Record<string, any>;
  }) => void,
  opts?: { base?: string },
) {
  const base = opts?.base || join(__dirname, '../packages');
  pkgs.forEach((pkg) => {
    fn({
      name: pkg,
      dir: join(base, pkg),
      pkgPath: join(base, pkg, 'package.json'),
      pkgJson: require(join(base, pkg, 'package.json')),
    });
  });
}
