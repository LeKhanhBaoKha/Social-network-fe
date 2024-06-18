export function emptyArray(obj) {
    if (Array?.isArray(obj)) {
      if (obj?.length === 0) {
        return true;
      }
    }
    return false;
}