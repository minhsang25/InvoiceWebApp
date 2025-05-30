const getShortId = (id: unknown): string => {
  // Convert to string safely
  const strId = String(id ?? '');

  // If string is shorter than 6 characters, return as-is
  if (strId.length < 6) return strId;

  // Return the last 6 characters
  return strId.substring(strId.length - 6);
};

export default getShortId;
