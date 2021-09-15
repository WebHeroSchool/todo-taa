# My ToDo-App

description...

## State manager

Redux - добавлен как возможность разобраться в технологии.
В редьюссерах реализована логика формирования списков репозоториев и дел, а так же фильтрация.

## Оформление

Применена библиотека Material UI и нативный CSS

## Fetch my data

Для запроса данных с Github реализован механизм запроса данных с помощью fetch() с Basic http authorization.

## Больше лоадеров

Во время запроса данных, приложение рисует лоадеры:
 - При загрузке приложение (когда в кэше нет данных)
 - При запросе, отображается лоадер на месте компонента
 - При загрузки аватара пользователя, так как он прописан через тэг <img.. />

## Обработка ошибок

Обрабатываются следующие типы ошибок при загрузке данных:
 - Не удалось установить соединение с api,github.com
 - Запрашиваемый пользователь не найден
 - Список репозоториев пользователя пуст
 
В случае, когда в разделе ToDo список задат пуст, поведение обрабатывается как ошибка, с соответствующими входными параметрами.

## Попытка повторной загрузки данных

По клику на ссылку "Загрузить данные повторно" подменяется значение пропса (true/false), на который ссылается useEffect()=>{...}[prop], что и запускает повторный запрос на сервер.

## SVG

Элементы в списке репозиториев - svg файлы, цвет который изменяется по css-свойству {fill: ...;}

## ScrollBar

Системный скролл бар спрятан за overflow границей родительского контейнера, на его месте расположен вручную нарисованный скроллбар.
JavaScript`ом определяем величину прокрутки контейнера с информацией, подставляем соответствующее значение в .style.transform() что бы эмулировать прокрутку скролла.
Скроллбар вынесен в ХОК, и может быть использован на других страницах, где нужена прокрутка длинного списка.

## Список дел

Можно добавлять дела как по клику на соответствующию иконку, так и по нажатии клавиши enter или numpad enter

Инпут умеет валидировать введенные значение по критериям:
- нельзя добавить пустую строку
- пробелы перед первым символом и после последнего обрезаются автоматически













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
