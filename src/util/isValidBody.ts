export const isValidBody = <T>({
  body,
  fields,
}: {
  body: Record<string, T>;
  fields: string[];
}) => {
  // NOTE: 정의된 필드가 있는지 확인합니다.
  const isBodyValid = fields.every(field => Object.keys(body).includes(field));

  // NOTE: 만약, 없다면 false를 반환합니다.
  if (!isBodyValid) return false;

  return true;
};
