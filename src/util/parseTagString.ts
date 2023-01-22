export const parseTagString = ({ tag }: { tag: string }) =>
  tag.replace(/^[a-z]/, char => char.toUpperCase());
