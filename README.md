# WWW cистема «Галерея проектов» (подсистема администрирования)
## Описание
Организация занимается выполнением определённых проектов и хочет отображать результаты своей деятельности на корпоративном сайте в т.н. «Галерее проектов». Для каждого выполненного проекта имеется название, текстовое описание произвольной длины и не более одной фотографии. Так как новые проекты появляются постоянно, то организация хочет иметь административный web-интерфейс, который будет использоваться для добавления новых проектов на корпоративный web-сайт.
## Постановка задачи
Необходимо реализовать WWW систему, которая будет поддерживать административный интерфейс, пригодный для добавления, удаления и редактирования содержимого «Галереи проектов».

## Сценарии работы системы
### Редактирование списка проектов
#### Основная последовательность
**Администратор** открывает в броузере страницу *«Список проектов»*, система отображает список выполненных проектов. Каждая строка списка содержит название проекта и является ссылкой на страницу *«Редактирование информации»* с описанием и фотографией. 

Дополнительно **система** отображает:
- в каждой строке списка элемент управления «чекбокс», который необходим для удаления соответствующего проекта из списка;
- на странице «Список проектов» ссылки «Удалить» и «Создать».
Если **администратор** нажимает на ссылку, соответствующую некоторой строке списка проектов, или на ссылку *«Создать»*, то система открывает в том же окне броузера страницу *«Редактирование информации»* и переходит к выполнению варианта использования **«Редактирование информации о проекте, добавление нового проекта»** (см. ниже).

Если **администратор** отмечает несколько проектов (при помощи соответствующих элементов управления «чекбокс») и нажимает на ссылку *«Удалить»*, то система отображает предупреждение о том, что отмеченные проекты будут удалены, и, в случае подтверждения пользователем, производит удаление данных проектов и соответствующих им фотографий из *«Галереи проектов»*, а затем отображает пользователю обновлённую страницу *«Список проектов»*.

#### Альтернативные последовательности
1. **Администратор** отмечает несколько проектов для удаления и нажимает ссылку *«Создать»*. Система выполняет создание нового проекта аналогично основной последовательности и не производит удаления отмеченных проектов.
1. **Администратор** не отмечает ни одного проекта и нажимает на ссылку «Удалить», система ничего не делает и отображает в броузере прежнюю страницу.

### Редактирование информации о проекте, добавление нового проекта
#### Основная последовательность
**Система** отображает страницу *«Редактирование информации»*, которая содержит текущую фотографию проекта (если она есть), поле редактирования *«Название»*, поле редактирования *«Описание»*, элемент управления («чекбокс») *«Удалить фотографию»*, поле редактирования *«Новая фотография»* с возможностью просмотра и выбора фотографии среди файлов локальной машины пользователя. Дополнительно система отображает две ссылки *«Вернуться»* и *«Сохранить»*.

Если **администратор** выполняет редактирование существующего проекта, то в поле *«Название»* система выводит название, а в поле *«Описание»* - описание выбранного проекта. Кроме того, система отображает фотографию проекта (если она есть).
Если **администратор** создаёт новый проект, то поля *«Название»*, *«Описание»* пусты и система не отображает никакой фотографии.

**Администратор** редактирует поля *«Название»* и *«Описание»*, возможно отмечает элемент *«Удалить фотографию»*, возможно меняет содержимое поля редактирования *«Новая фотография»*. Далее, если **администратор** нажимает на ссылку *«Сохранить»*, то система запоминает изменения в названии и описании проекта (поля *«Название»* и *«Описание»*), возможно удаляет фотографию (если отмечен элемент *«Удалить фотографию»*), устанавливает новую фотографию для проекта (если **администратор** ввёл путь для новой фотографии). 

В случае, если у проекта уже существует фотография и **администратор** ввёл новую, то система автоматически удаляет старую и устанавливает новую фотографию для проекта. После этого система отображает страницу *«Список проектов»* в том же окне броузера и переходит к выполнению варианта использования «Редактирование списка проектов» (см. выше).

Если **администратор** нажимает на ссылку *«Вернуться»*, то система ничего не делает с информацией, относящейся к проекту, а сразу же отображает страницу *«Список проектов»* в том же окне броузера и переходит к выполнению варианта использования **«Редактирование списка проектов»** (см. выше).

#### Альтернативные последовательности
1. Администратор вводит путь до несуществующего файла в поле «Новая фотография» и нажимает на ссылку «Сохранить», система ничего не делает и отображает в броузере прежнюю страницу.


### Реализация
- [x] ~~Cистема отображает список выполненных проектов. Каждая строка списка содержит название проекта и является ссылкой на страницу «Редактирование информации» с описанием и фотографией.~~
- [ ] **Cистема** отображает в каждой строке списка элемент управления «чекбокс», который необходим для удаления соответствующего проекта из списка.
- [ ] **Cистема** отображает на странице «Список проектов» ссылки «Удалить» и «Создать».
- [ ] **Система** отображает страницу *«Редактирование информации»*, которая содержит текущую фотографию проекта (если она есть), поле редактирования *«Название»*, поле редактирования *«Описание»*, элемент управления («чекбокс») *«Удалить фотографию»*, поле редактирования *«Новая фотография»* с возможностью просмотра и выбора фотографии среди файлов локальной машины пользователя. Дополнительно система отображает две ссылки *«Вернуться»* и *«Сохранить»*.

### Известные проблемы:
- При просмотре информации о проекте, система отображает фотографию как значок.
- При добавлении возможности редактирования на странице *«Редактирование информации»* и ссылки *«Сохранить»*, при переходе по которой, система не сохраняет внесённые изменения.
- При добавлении чекбоксов на странице *«Список проектов»* и ссылки "Удалить", при переходе по которой, система не  удаляет записи из БД.

## Начало работы

1. **Клонирование репозитория:**

   ```bash
   git clone https://github.com/Luter0316/Project-gallery
   cd Project-gallery
   ```

2. **Backend (Django):**

   ```bash
   cd backend
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

   Теперь сервер Django должен быть запущен по адресу `http://localhost:8000`.

3. **Frontend (React):**

   ```bash
   cd frontend
   npm install
   npm start
   ```

   Теперь сервер разработки React должен быть запущен по адресу `http://localhost:3000`.