# Постановка задачи

Простейшее приложение на базе next.js с использованием AppRouter и TypeScript

Список постов, при отркытии поста - показываем ещё список комментариев.
По userId подтягиваем логин пользователя.

API: https://jsonplaceholder.typicode.com/

## Требования

1. Внешний вид - любой бесплатный шаблон, хоть бутстрап. Важно показать работу со SCSS в формате CSS Modules.
2. Каждый пост на отдельном URL.
3. Посты должны подтягиваться так, чтобы поисковые роботы видели уже отредеренные страницы(т.е. через SSR и с использованием next seo).
4. Изобразить фейковую пагинацию(в jsonplaceholder нет пагинации, но можно прикинуться, что через page=2 оно отдает что-то другое).
5. Делаем фейковое API для авторизации по логину-паролю. Управление состоянием через [https://github.com/storeon/storeon](https://github.com/nanostores/nanostores).
6. Не должно быть лишних рендеров и лишних запросов к API.
7. Срок выполнения - не больше трёх дней. Мы высылаем тестовые задания пачками сразу десяткам людей, поэтому вас просто могут опередить другие кандидаты.

## План действий

- [x] Приложение на Next + TS + AppRouter
- [ ] Страница списка постов (данные из jsonplaceholder)
- [ ] Cтраница отдельного поста
- [ ] Модули с SCSS
- [ ] Пагинация
- [ ] Авторизация
- [ ] Стейт через nanostores
