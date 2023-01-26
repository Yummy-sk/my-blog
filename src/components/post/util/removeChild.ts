export function removeChild({
  parent,
  child,
}: {
  parent: HTMLElement;
  child: ChildNode | null;
}) {
  if (parent && child) {
    parent.removeChild(child);
  }
}
