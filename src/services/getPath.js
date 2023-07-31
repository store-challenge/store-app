export const getBreadcrumbsPaths = (item, currentPath = []) => {
  const newPath = [...currentPath, { label: item.name, to: item.to }];

  return item.children && item.children.length > 0 ? getBreadcrumbsPaths(item.children[0], newPath) : newPath;
};
