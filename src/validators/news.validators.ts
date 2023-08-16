import Joi from 'joi';

function validatePostNews(owner: any, isId: boolean) {
  const schema = Joi.object({
    title: Joi.string()
      .min(1)
      .max(55)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Title dibutuhkan!' : 'Title is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Title haruslah sebuah string!' : 'Title has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Title tidak boleh kosong!' : 'Title must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Title setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Title length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Title tidak boleh melebihi ${err.local.limit} karakter!`
                : `Title cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    subtitle: Joi.string()
      .min(1)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Subtitle dibutuhkan!' : 'Subtitle is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Subtitle haruslah sebuah string!' : 'Subtitle has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Subtitle tidak boleh kosong!' : 'Subtitle must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Subtitle setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Subtitle length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Subtitle tidak boleh melebihi ${err.local.limit} karakter!`
                : `Subtitle cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    content: Joi.string()
      .min(1)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Content dibutuhkan!' : 'Content is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Content haruslah sebuah string!' : 'Content has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Content tidak boleh kosong!' : 'Content must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Content setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Content length must be at least ${err.local.limit} character length!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
  });
  return schema.validate(owner);
}

export { validatePostNews };
