import type { TRoute, TUserPath } from "../types";

export const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], iteam) => {
    if (iteam.path && iteam.element) {
      acc.push({
        path: iteam.path,
        element: iteam.element,
      });
    }
    if (iteam.children) {
      iteam.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
