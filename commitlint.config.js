export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',    // Нова функціональність
        'fix',     // Виправлення помилок
        'docs',    // Зміни в документації
        'style',   // Зміни, які не впливають на сенс коду (форматування, відсутні крапки з комою тощо)
        'refactor',// Зміни коду без виправлення помилок або додавання нових функцій
        'test',    // Додавання або зміна тестів
        'perf',    // Зміни, які покращують продуктивність
        'build',   // Зміни, які впливають на систему збірки або зовнішні залежності
        'ci',      // Зміни в конфігурації CI
        'chore'    // Інші зміни, які не стосуються src або тестів
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72]
  }
}; 