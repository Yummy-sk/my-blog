export function generateSlug(title: string) {
  const lowerCaseTitle = title.toLowerCase();
  // 한글 문자 및 알파벳, 숫자, 하이픈(-)만 유지하도록 정규 표현식을 조정합니다.
  const replacedSpaces = lowerCaseTitle.replace(/\s+/g, '-');
  const preservedChars = replacedSpaces.replace(/[^가-힣a-z0-9-]/g, '');
  const cleanedSlug = preservedChars.replace(/-{2,}/g, '');

  return cleanedSlug;
}
