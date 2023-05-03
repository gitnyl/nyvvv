/**
 * 영문 소문자 + 숫자 조합 6 ~ 12자리
 */
const idRegExp = () => {
  // eslint-disable-next-line no-useless-escape, prettier/prettier
  const pattern = /^(?=.*\d)?(?=.*[a-z])[0-9a-z]{6,12}$/
  return new RegExp(pattern);
};

/**
 * 영문 + 숫자 + 특문 조합 8 ~ 20자리
 */
const passwordRegExp = () => {
  // eslint-disable-next-line no-useless-escape, prettier/prettier
  const pattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])[0-9a-zA-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,20}$/;
  return new RegExp(pattern);
};

/**
 * 일반 email 정규식
 */
const emailRegExp = () => {
  // eslint-disable-next-line no-useless-escape, prettier/prettier
  const pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  return new RegExp(pattern);
};

export { idRegExp, passwordRegExp, emailRegExp };
