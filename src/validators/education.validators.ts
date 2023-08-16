import Joi from 'joi';

function validatePostEducation(education: any, isId: boolean) {
  const schema = Joi.object({
    campuss: Joi.string()
      .min(1)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Campuss dibutuhkan!' : 'Campuss is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Campuss haruslah sebuah string!' : 'Campuss has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Campuss tidak boleh kosong!' : 'Campuss must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Campuss setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Campuss length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Campuss tidak boleh melebihi ${err.local.limit} karakter!`
                : `Campuss cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    year: Joi.string()
      .min(4)
      .max(4)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId ? 'Year dibutuhkan!' : 'Year is required!';
              break;
            case 'string.base':
              err.message = isId ? 'Year haruslah sebuah string!' : 'Year has to be string!';
              break;
            case 'string.empty':
              err.message = isId ? 'Year tidak boleh kosong!' : 'Year must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Year setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Year length must be at least ${err.local.limit} character length!`;
              break;
            case 'string.max':
              err.message = isId
                ? `Year tidak boleh melebihi ${err.local.limit} karakter!`
                : `Year cannot be longer than ${err.local.limit} characters!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    major: Joi.string()
      .min(1)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId
                ? 'Major dibutuhkan!'
                : 'Major is required!';
              break;
            case 'string.base':
              err.message = isId
                ? 'Major haruslah sebuah string!'
                : 'Major has to be string!';
              break;
            case 'string.empty':
              err.message = isId
                ? 'Major tidak boleh kosong!'
                : 'Major must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Major setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Major length must be at least ${err.local.limit} character length!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    researchTopic: Joi.string()
      .min(1)
      .max(1024)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId
                ? 'Research Topic dibutuhkan!'
                : 'Research Topic is required!';
              break;
            case 'string.base':
              err.message = isId
                ? 'Research Topic haruslah sebuah string!'
                : 'Research Topic has to be string!';
              break;
            case 'string.empty':
              err.message = isId
                ? 'Research Topic tidak boleh kosong!'
                : 'Research Topic must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Research Topic setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Research Topic length must be at least ${err.local.limit} character length!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    linkResearchTopic: Joi.string()
      .min(1)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = isId
                ? 'Link Research dibutuhkan!'
                : 'Link Research is required!';
              break;
            case 'string.base':
              err.message = isId
                ? 'Link Research haruslah sebuah string!'
                : 'Link Research has to be string!';
              break;
            case 'string.empty':
              err.message = isId
                ? 'Link Research tidak boleh kosong!'
                : 'Link Research must not be empty';
              break;
            case 'string.min':
              err.message = isId
                ? `Link Research setidaknya memiliki panjang ${err.local.limit} karakter!`
                : `Link Research length must be at least ${err.local.limit} character length!`;
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });
  return schema.validate(education);
}

export { validatePostEducation };
