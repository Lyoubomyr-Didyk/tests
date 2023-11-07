# Tests 

Selon-vous, qu’est-ce un test ?

Un moyenne pour savoir si une fonctionalité fonction;
Tester une aplication;

À quoi servent les tests ?

Teste differant methodes, fonction pour eviter tous les error;


Y a-t-il plusieurs types de tests ? Si oui, quelle est leur différence ?

Test unitaire;       (test cote server)
Test de performance; (light house);
Test fonctionnel;    (tester un bloc d'une fonctionalite)
Test end to end;     (test cote interface)

Intuitivement, à quelles bonnes pratiques de conception de tests, vous pouvez penser ?

Decouper son code;


----------------------------------------------------------------------------------------

run vitest  => npx vitest

детальний розгляд синтаксису тестування з використанням Jest, включаючи it та expect:

    it(description, testFunction): Функція it (або test, це синоніми) використовується для створення окремого тест-кейсу. Вона приймає два параметри:

        description: Це описовий рядок, який пояснює, що тест робить. Цей рядок відображається під час виконання тестів і допомагає зрозуміти, що саме перевіряється в тесті.

        testFunction: Це функція, яка містить логіку тесту. У цій функції ви визначаєте кроки тестування та викликаєте функцію expect для перевірки результату.

    expect(value): Функція expect приймає значення, яке ви хочете перевірити, і повертає об'єкт "expectation". Цей об'єкт містить методи для визначення очікуваного результату. Найпоширеніші методи включають:

        toBe(expected): Перевірка, чи значення рівне очікуваному значенню.

        toEqual(expected): Перевірка на глибоку рівність об'єктів.

        not.toBe(expected): Перевірка, що значення не рівне очікуваному значенню.

        toThrow(expected): Перевірка, що функція генерує виключення, яке співпадає з очікуваним.

        Ще є багато інших методів для різних типів перевірок.