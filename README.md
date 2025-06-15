# 🛍️ Nestora

![Vite](https://img.shields.io/badge/bundler-vite-646cff.svg)
![React](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![Languages](https://img.shields.io/badge/lang-RU%20%7C%20EN-blue)
![Deploy](https://img.shields.io/badge/deployed-yes-brightgreen)

**Nestora** — это многоязычный одностраничный сайт интернет-магазина товаров для дома.  
Проект реализован с нуля на React с акцентом на чистую вёрстку, адаптивность, локализацию и готовность к продакшену.

---

## 🌐 Демо

Сайт размещён по адресу:  
🔗 https://nestora.home.kg/

---

## ⚙️ Используемые технологии

- [React](https://react.dev/) — компонентный UI
- [Vite](https://vitejs.dev/) — быстрая сборка и дев-сервер
- [React Router](https://reactrouter.com/) — маршрутизация
- [i18next](https://www.i18next.com/) — поддержка мультиязычности
- CSS Flexbox и Grid — современная адаптивная вёрстка
- Google Fonts / локальные шрифты — кастомный Montserrat
- Let's Encrypt — бесплатный SSL-сертификат
- Nginx — продакшн-сервер
- Ubuntu 24.04 (на VDS) — хостинг-окружение

---

## 🛠 Установка и запуск в dev-режиме

```bash
git clone https://github.com/yourname/nestora.git
cd nestora
npm install
npm run dev
```

---

## 🏗 Сборка и деплой

Создание финальной сборки:
```bash
npm run build
```

Скопировать содержимое папки `dist/` на сервер:

```bash
scp -r dist/* user@your-server:/var/www/nestora/
```

---

## 🌐 Продакшн

Проект размещён на выделенном VDS (1 ГБ RAM / 10 ГБ SSD)  
Настроено:

- Домен через DNS
- SSL-сертификат от Let's Encrypt
- Редиректы и маршрутизация через **nginx**
- Автоматическое обновление сертификата (cron + certbot)

---

## 📁 Структура проекта

```
nestora/
├── public/              # favicon, баннеры, фоновые картинки
│   └── img/
├── src/
│   ├── components/      # Header, Aside, Section, Article, Footer
│   ├── locales/         # Файлы локализации ru.json, en.json
│   └── App.jsx          # Корневой компонент
├── App.css              # Глобальные стили
├── index.html           # Точка входа
└── README.md
```

---

## 👩‍💻 Авторы проекта

**Павлова Полина,**
**Кукса Виктория,**
**Слюнькова Камилла,**
**Второва Ника**

2025 © Все права соблюдены :)
