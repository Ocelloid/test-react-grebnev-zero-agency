# Постановка задачи

Простейшее приложение на базе next.js с использованием AppRouter и TypeScript

Список постов, при отркытии поста - показываем ещё список комментариев.
По userId подтягиваем логин пользователя.

API: https://jsonplaceholder.typicode.com/

## Требования

1. Внешний вид - любой бесплатный шаблон, хоть бутстрап. Важно показать работу со SCSS в формате CSS Modules.

- Оставил шаблон по-умолчанию в Next, модули:
  - /app/layout.module.scss
  - /app/posts/page.mpdule.scss
  - /app/posts/[pid]/page.module.scss
- миксины:
  - /app/\_styles/colors.scss
  - /app/\_styles/mixins.scss

2. Каждый пост на отдельном URL.

- см. types.ts, getPosts, getPostById, getComments в /api.ts, /app/posts/[pid]/page.tsx

3. Посты должны подтягиваться так, чтобы поисковые роботы видели уже отредеренные страницы(т.е. через SSR и с использованием next seo).

- см. url.ts, /app/robots.ts и /app/sitemap.ts

4. Изобразить фейковую пагинацию(в jsonplaceholder нет пагинации, но можно прикинуться, что через page=2 оно отдает что-то другое).

- см. getTotalPosts в /api.ts, /app/\_components/Pagination.tsx

5. Делаем фейковое API для авторизации по логину-паролю. Управление состоянием через [https://github.com/storeon/storeon](https://github.com/nanostores/nanostores).

- см signIn, signOut в /api.ts, /store/users.ts, /app/\_components/Header.tsx

6. Не должно быть лишних рендеров и лишних запросов к API.
7. Срок выполнения - не больше трёх дней. Мы высылаем тестовые задания пачками сразу десяткам людей, поэтому вас просто могут опередить другие кандидаты.
