# My ToDo-App

description...

## Перетаскивание элементов списка задач

Реализован самописный drag n drop с анимацией и поддержкой touch-устройств. 

Drag n drop - работает непосредственно с DOM-узлами. При перетаскивании одной карточки на другую, та отпускается ниже или поднимается выше перетаскиваемой, в завсимости от ее направления.

При длинных списках дел, если подтащить элемент к границе списка, то начнется скроллинг вниз или вверх.

## Пагинация

Написана функция создающая пагинацию на странице с репозиториями:
- При количестве страниц не более чем 4шт отображается только 4 кнопки переключения между страницами.
- Если сгенерировано 5 и более страниц, лишние кнопки скрываются за тремя точками, что бы не занимать все пространство в блоке информации.
- Три точки добавляются в начало списка страниц или в его конец, в зависимости от текущей выбранной страницы.

У меня сейчас не так много репозиториев, что бы увидеть все кейсы отображения пагинации, так что вот тут демо-концепт её работы:
__[Pagination (Figma)](https://www.figma.com/file/eOBbimv2GvvpA1madBVZXG/pagination?node-id=0%3A1)__

Если страница открывается с мобильного устройства, то с api.hithub подгружается по 3 репозитория, если с компьютера, то по 6, что бы появилась полоса прокрутки.

## State manager

Redux - добавлен как возможность разобраться в технологии. Позже на него была сгружена логика редактирования списка дел по двойному клику.

В редьюссерах реализована логика формирования списков репозоториев и дел, а так же фильтрация, сортиовка, перемещение элемнтов списка и прочее.

## Оформление

Применена библиотека Material UI и нативный CSS

## Fetch my data

Для запроса данных с Github реализован механизм запроса данных с помощью fetch() с Basic http authorization.

## Больше лоадеров

Во время запроса данных, приложение рисует лоадеры:
 - При загрузке приложение (когда в кэше нет данных)
 - При запросе, отображается лоадер на месте компонента
 - При загрузки аватара пользователя, так как он прописан через тэг <img.. />
 - При переключении между страницами с репозиториями

## Обработка ошибок

Обрабатываются следующие типы ошибок при загрузке данных:
 - Не удалось установить соединение с api,github.com
 - Запрашиваемый пользователь не найден
 - Список репозоториев пользователя пуст
 
В случае, когда в разделе ToDo список задач пуст, поведение обрабатывается как ошибка, с соответствующими входными параметрами.

## Попытка повторной загрузки данных

По клику на ссылку "Загрузить данные повторно" подменяется значение пропса (true/false), на который ссылается useEffect()=>{...}[prop], что и запускает повторный запрос на сервер.

## SVG

Элементы в списке репозиториев - svg файлы, цвет который изменяется по css-свойству {fill: ...;}

## ScrollBar

Системный скролл бар спрятан за overflow границей родительского контейнера, на его месте расположен вручную нарисованный скроллбар.

JavaScript'ом определяем величину прокрутки контейнера с информацией, подставляем соответствующее значение в .style.transform() что бы эмулировать прокрутку скролла.

Скроллбар вынесен в ХОК, и может быть использован на других страницах, где нужена прокрутка длинного списка.

Сокрытие скроллбара, если внутри елемента мало контента


## Список дел

### Добавление дел в список

Можно добавлять дела как по клику на соответствующию иконку, так и по нажатии клавиши enter или numpad enter

Инпут умеет валидировать введенные значение по критериям:
- нельзя добавить пустую строку
- строка должна начинаться с текстового символа
- слово не может быть слишком длинным
- пробелы перед первым символом и после последнего обрезаются автоматически

### Редактирование списка дел

Можно редактровать дела по двойному клику

При сохранении дела во время редактирования оно не сохранится если будет пустым или состоять только из пробелов.

Если при редактировании дела в нем есть слишком длинные слова, то дело не сохранится.

Сохранить дело и выйти из режима редактирования можно нажав клавишу Enter, NunEnter, Tab или просто кликнув куда ни будь мышкой.

При нажатии клавиши Escape в режиме редактирования, произойдет выход, а изменения откатятся на состояние до начала редактирования дела.

### Фильтрация и сортировка списка дел

Можно фильтровать дела по:
- выполненные
- не выполненные
- все дела

Сортировать их по:
- алфавиту
- дате добавления в список
- инвертировать списки, вне зависимости какая сортировка выбрана в данный момент

Сортировка по алфавиту и дате добавления работает поверх фитрации по выполненности, то есть можно отобразить только выполненные дела и отфильтровать только их по алфавиту.

Функционал реверсирования сортирует список в обратном порядке.

Сброс фильтра вернет список в пользовательское состояние, которое записано в local storage.












---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
