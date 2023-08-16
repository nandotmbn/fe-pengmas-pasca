import Joi from 'joi';

function validateRegister(owner: any, isId: boolean) {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(1)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'First Name dibutuhkan!' : 'First Name is required!';
              break;
            case 'string.base':
              err.message = isId ? 'First Name haruslah sebuah string!' : 'First Name has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'First Name tidak boleh kosong!' : 'First Name must not be empty!';
              break;
            case 'string.min':
              err.message = isId
                ? `First Name setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `First Name length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `First Name tidak boleh melebihi ${err.local.limit} karakter!`
                : `First Name cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    lastName: Joi.string()
      .min(1)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Last Name dibutuhkan!' : 'Last Name is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Last Name haruslah sebuah string!' : 'Last Name has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Last Name tidak boleh kosong!' : 'Last Name must not be empty!';
              break;
            case 'string.min':
              err.message = isId
                ? `Last Name setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Last Name length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Last Name tidak boleh melebihi ${err.local.limit} karakter!`
                : `Last Name cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    username: Joi.string()
      .min(5)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Username dibutuhkan!' : 'Username is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Username haruslah sebuah string!' : 'Username has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Username tidak boleh kosong!' : 'Username must not be empty!';
              break;
            case 'string.min':
              err.message = isId
                ? `Username setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Username length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Username tidak boleh melebihi ${err.local.limit} karakter!`
                : `Username cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    email: Joi.string()
      .min(1)
      .max(255)
      .email({ tlds: { allow: false } })
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Email dibutuhkan!' : 'Email is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Email haruslah sebuah string!' : 'Email has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Email tidak boleh kosong!' : 'Email must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Email setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Email length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Email tidak boleh melebihi ${err.local.limit} karakter!`
                : `Email cannot be longer than ${err.local.limit} characters!`;
              break;
            case 'string.email':
              err.message = isId ? `Email tidak valid!` : `Email is not valid!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .min(8)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Password dibutuhkan!' : 'Password is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Password haruslah sebuah string!' : 'Password has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Password tidak boleh kosong!' : 'Password must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Password setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Password length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Password tidak boleh melebihi ${err.local.limit} karakter!`
                : `Password cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });
  return schema.validate(owner);
}

function validateLogin(owner: any, isId: boolean) {
  const schema = Joi.object({
    credential: Joi.string()
      .min(1)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Username atau email dibutuhkan!' : 'Username or email is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Username atau email haruslah sebuah string!' : 'Username or email has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Username atau email tidak boleh kosong!' : 'Username or email must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Username atau email setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Username or email length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Username atau email tidak boleh melebihi ${err.local.limit} karakter!`
                : `Username or email cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .min(8)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Password dibutuhkan!' : 'Password is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Password haruslah sebuah string!' : 'Password has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Password tidak boleh kosong!' : 'Password must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Password setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Password length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Password tidak boleh melebihi ${err.local.limit} karakter!`
                : `Password cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });
  return schema.validate(owner);
}

export { validateRegister, validateLogin };
