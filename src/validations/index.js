export const validateEmail = value =>
  !value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
export const validateNotEmpty = value => value ? undefined : "the field must not be empty"
export const validateEqualPassword = (value1, value2) => (value1 && value2 && (value1 === value2) ? undefined : "passwords are not equal !")