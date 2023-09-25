// Завдання 1
/**
 * Функція `replaceText` замінює всі входження певного слова у тексті на задану фразу.
 *
 *  word - Слово для заміни.
 *  replacement - Фраза, якою треба замінити слово.
 *  text - Текст, у якому треба здійснити заміну.
 */
function replaceText(word, replacement, text) {
  // Створення регулярного виразу для пошуку слова з флагом 'g' (глобальний пошук).
  const serachword = new RegExp(word, 'g');

  // Використання методу `replace` регулярного виразу для заміни слова на фразу у тексті.
    const replacedText  = text.replace(serachword, replacement);

  // Повернення заміненого тексту.
  return replacedText;
}

// Перевірка
console.log("Завдання 1 ==============================");
console.log(
  replaceText(
    "example",
    "sample text",
    "This is an example sentence. Another example is here."
  )
);
// Виведе This is an sample text sentence. Another sample text is here.

// Завдання 2

/**
 * Функція `checkWord` перевіряє, чи міститься певне слово у тексті.
 *
 *  word - Слово для перевірки.
 *  text - Текст, який треба перевірити.
 */
function checkWord(word, text) {
  // Створення регулярного виразу для пошуку слова з флагом 'i' (регістронезалежний пошук).
  const findWordInText  =new RegExp(text, 'i');

  // Використання методу `test` регулярного виразу для перевірки наявності слова у тексті.
  const presence = findWordInText.test(text);

  // Повернення результату перевірки.
  return presence;
}

// Перевірка
console.log("Завдання 2 ==============================");
console.log(checkWord("example", "This is an example sentence."));
// Виведе true

// Завдання 3

/**
 * Функція `extractTextInParentheses` вилучає текст, який знаходиться в круглих дужках, з рядка.
 *
 *  str - Рядок, з якого треба вилучити текст.
 */
function extractTextInParentheses(str) {
  // Створення регулярного виразу з використанням зворотніх посилань для пошуку тексту в круглих дужках /\((.*?)\)/g.
  const findText = /\((.*?)\)/g;

  // Використання методу `matchAll` для отримання всіх збігів регулярного виразу.
  const findResults = findText.matchAll;

  // Створення масиву зі знайденими текстами.
  let Arr = Array.from(str.matchAll(findText)).map(match => match[1]);

  // Повернення масиву вилучених текстів.
  return Arr;
}

// Перевірка
console.log("Завдання 3 ==============================");

console.log(extractTextInParentheses("I have some (text) in (parentheses)."));
// Виведе [ 'text', 'parentheses' ]

// Завдання 4

/**
 * Функція `countEmails` знаходить та підраховує кількість email-адрес у рядку.
 *
 *  str - Рядок, в якому потрібно знайти email-адреси.
 */
function countEmails(str) {
  // Створення регулярного виразу для пошуку email-адрес /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.
  const findEmail = /\b[A-za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

  // Використання методу `match` для отримання всіх збігів регулярного виразу.
    const findMatch = str.match(findEmail);
    // console.log(findMatch);

  // Підрахунок кількості email-адрес.
  const countEmail = findMatch ? findMatch.length : 0;

  // Повернення кількості email-адрес.
  return countEmail;
}

// Перевірка
console.log("Завдання 4 ==============================");

console.log(
  countEmails("Emails: john@example.com, kate@example.com, mike@example.com")
);
// Виведе  3

// Завдання 5
/**
 * Функція `findWordOccurrences` знаходить всі входження заданого слова у рядок з урахуванням ігнорування регістру.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 *  Повертає масив з індексами всіх входжень слова у рядок.
 */
function findWordOccurrences(str, word) {
  // Створення регулярного виразу для пошуку слова з флагами 'g та 'i',
  const searchFlag = new RegExp(word, 'gi');

  // Створюємо пустий масив matches, та змінну match без значення
  let matches = [];
  let match;

  // За допомогою циклу whild створюємо ітерацію поки рядок містить збіги з регулярним виразом, та змінній match присвоюємо збіги
  while ((match = searchFlag.exec(str)) !== null) {
  // Додавання індексу поточного входження слова у масив.
    matches.push(match.index);
      // Оновлення lastIndex,присвоєюмо йому значення  match.index + 1, щоб продовжити пошук з наступного символу
    searchFlag.lastIndex = match.index + 1;
  }

  // Повертаємо масив
  return matches;
}

// Перевірка

console.log("Завдання 5 ==============================");

console.log(
  findWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The Fox is quick.",
    "fox"
  )
);
// Виведе  [ 16, 49 ]

// Завдання 6

/**
 * Функція `checkRegexFlags` перевіряє регулярний вираз на наявність флагів 'g' та 'm'.
 *
 *  regex - Регулярний вираз, який потрібно перевірити.
 * Повертає  - true, якщо флаги 'g' та 'm' присутні, інакше - false.
 */
function checkRegexFlags(regex) {
  // Отримуємо всі флаги регулярного виразу.
  const flags = regex.flags;

  // Перевіряємо наявність флагів 'g' та 'm' за допомогою методу `includes`.
  if (flags.includes('g') && flags.includes('m')) {
    return true;
  } else {
    return false;
  }

  // Повертаємо  - true, якщо флаги 'g' та 'm' присутні, інакше - false
}

// Перевірка

console.log("Завдання 6 ==============================");

console.log(checkRegexFlags(/pattern/gm));
// Виведе true

// Завдання 7

/**
 * Функція `replaceWordOccurrences` замінює всі входження заданого слова у рядку на нове слово.
 *
 *  str - Рядок, в якому потрібно замінити входження слова.
 *  word - Слово, яке потрібно замінити.
 *  newWord - Нове слово, яким потрібно замінити.
 * Повертає  - Результат заміни входжень слова у рядку.
 */
function replaceWordOccurrences(str, word, newWord) {
  // Створюємо регулярний вираз зі словом, використовуючи флаг 'g' для глобального пошуку всіх входжень.
  const reg = new RegExp(`\\b${word}\\b`, 'g');

  // Заміняємо всі входження слова у рядку на нове слово.
  const result = str.replace(reg, newWord);

  // Повертаємо результат
  return result;
}

// Перевірка
console.log("Завдання 7 ==============================");

console.log(
  replaceWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "fox",
    "cat"
  )
);
// Виведе The quick brown cat jumps over the lazy dog. The cat is quick.

// Завдання 8

/**
 * Функція `checkFlags` перевіряє, які флаги використовуються в заданому регулярному виразі.
 *
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив флагів, які використовуються у регулярному виразі.
 */
function checkFlags(regex) {
  // Створюємо масив для зберігання використаних флагів.
  const flags = [];

  // Перевіряємо, чи використовується флаг 'i' (ignoreCase) у регулярному виразі.
  if (regex.ignoreCase) {
  // Додаємо флаг ignoreCase до масиву, якщо він використовується.
    flags.push('ignoreCase');
  };

  // Отримуємо вихідний код регулярного виразу за допомогою властивості `source`.
    const sourceCod = regex.source;

  // Додаємо вихідний код до масиву
  flags.push(sourceCod);

  // Повертаємо масив використаних флагів.
  return flags;
}

// Приклад використання:
console.log("Завдання 8 ==============================");

console.log(checkFlags(/pattern/gimsy));
// Виведе[ 'ignoreCase', 'pattern' ]

// Завдання 9

/**
 * Функція `checkRegexMethods` перевіряє, які методи використовуються в заданому регулярному виразі.
 *
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив методів, які використовуються у регулярному виразі.
 */
function checkRegexMethods(regex) {
  // Створюємо масив для зберігання використаних методів.
  const Arrmetod = [];

  // Перевіряємо, чи використовується метод `dotAll`.
  if(regex.flags.includes('s')) {
    Arrmetod.push('dotAll');
  }
  // Перевіряємо, чи використовується метод `multiline`.
  if (regex.flags.includes('m')) {
    Arrmetod.push('multiline')
  };

  // Перевіряємо, чи використовується метод `sticky`.
  if (regex.flags.includes('y')) {
    Arrmetod.push('sticky');
  }
  
  // Повертаємо масив використаних методів.
  return Arrmetod;
}

// Приклад використання:
console.log("Завдання 9 ==============================");

console.log(checkRegexMethods(/test/msy));
// Виведе [ 'dotAll', 'multiline', 'sticky' ]

// Завдання 10

/**
 * Функція `findWord` знаходить перше входження заданого слова у рядок за допомогою методу `search`.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 * Повертає  - Індекс першого входження слова у рядок або -1, якщо слово не знайдено.
 */
function findWord(str, word) {
  // Створення регулярного виразу для пошуку слова.
  const findWord = new RegExp(`\\b${word}\\b`, 'g');

  // Використання методу `search` для пошуку першого входження слова.
  return str.search(findWord);
}

// Приклад використання:
console.log("Завдання 10 ==============================");

console.log(
  findWord(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "quick"
  )
); // Виведе: 4
