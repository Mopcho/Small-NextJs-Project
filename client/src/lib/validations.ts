const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const validateEmail = (value: string): string | undefined => {
  const isValid = emailRegex.test(value);

  if (!isValid) {
    return 'Email is not valid';
  }
};

export interface PasswordErrors {
  password?: string | null;
  repeatPassword?: string | null;
}

export const validatePassword = (password: string): string | undefined => {
  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }
};

export const validateName = (name: string): string | undefined => {
  if (name.length < 8) {
    return 'Name must be at least 8 characters long';
  }
};

export const validateRepeatPassword = (
  password?: string,
  repeatPassword?: string
): string | undefined => {
  if (password !== repeatPassword && repeatPassword && password) {
    return 'Password must match Repeat Password';
  }
};

export const validateBlogTitle = (title: string): string | undefined => {
  if (!title || title.length < 8) {
    return 'Title must be at least 8 characters long';
  }
};

export const validateBlogContent = (content: string): string | undefined => {
  if (!content || content.length < 100) {
    return 'Title must be at least 100 characters long';
  }
};
