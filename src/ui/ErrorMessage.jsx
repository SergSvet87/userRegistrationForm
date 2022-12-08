export const ErrorMessage = ({ errorNumber }) => {
  switch (errorNumber) {
    case 500:
      return 'Спробуй ще раз!'
    case 501:
      return 'Запит не опрацьований! Спробуй ще раз!'
    case 400:
      return 'Дані не вірні! :( '
    case 401:
      return 'Ви не авторизувалися! :('
    case 404:
      return 'Ресурс не знайдено! :( '
    default:
      return 'Проблеми з сервером, ми працюємо над цим! :('
  }
}
