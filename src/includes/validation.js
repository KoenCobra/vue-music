import {
  configure,
  defineRule,
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm
} from 'vee-validate'
import {
  alpha_spaces as alphaSpaces,
  confirmed,
  email,
  max,
  max_value as maxVal,
  min,
  min_value as minVal,
  not_one_of as excluded,
  required
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('email', email)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('passwords_mismatch', confirmed)
    defineRule('not_one_of', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} is required.`,
          min: `The field ${context.field} is too short.`,
          max: `The field ${context.field} is too long.`,
          alpha_spaces: `The field ${context.field} may only contain alphabetical characters and spaces.`,
          email: `The field ${context.field} must be a valid email.`,
          min_value: `The field ${context.field} is too low.`,
          max_value: `The field ${context.field} is too high.`,
          not_one_of: `You are not allowed to use the value for the field ${context.field}.`,
          country_excluded: `We do not allow users from this location.`,
          passwords_mismatch: `The passwords do not match.`,
          tos: `You must accept the TOS.`
        }

        return messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid.`
      }
    })
  }
}
