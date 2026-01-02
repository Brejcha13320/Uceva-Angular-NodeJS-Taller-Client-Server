# 🧪 Taller: Client-Server en Angular y NodeJS

- Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.

- El objetivo del taller es practicar la creación de 2 proyectos para representar la arquitectura
cliente servidor, con las Tecnologias de Angular y NodeJS.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code

Puedes verificar Angular CLI en consola con: ```ng version```

## ▶️ Iniciar el Server (Server-NodeJS) en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto de ServerNodejs (donde se encuentra el archivo package.json).

### 2️⃣ Instalar dependencias

```npm i```

### 3️⃣ Ejecutar el proyecto

Para ejecutar el proyecto debemos usar el siguiente comando

```npm run start```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:3000/`

### 🔁 Documentación de APIs con Swagger

Para acceder a la documentación de las APIs debemos acceder al siguiente enlace:

- `http://localhost:3000/api/docs`

Aqui encontraras toda la información necesaria respecto al consumo de cada API y ejemplos de sus respuestas

### 🔁 Funcionamiento de APIs

Debemos poder observar una respuesta mediante un navegador web o el promagrama Postman de las siguientes urls:

- `http://localhost:3000/api/users`
- `http://localhost:3000/api/products`

## ▶️ Iniciar el Client (Client-Angular) en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto de Client-Angular (donde se encuentra el archivo package.json).

### 2️⃣ Instalar dependencias

```npm i```

### 3️⃣ Ejecutar el proyecto

Para ejecutar el proyecto debemos usar el siguiente comando

```npm run start```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:4200/`

## 🧪 Pruebas Unitarias

El proyecto utiliza Jest para la ejecución de pruebas unitarias.

### ▶️ Ejecutar pruebas una sola vez

```npm run test```

### 🔁 Ejecutar pruebas en modo watch

Este modo vuelve a ejecutar las pruebas cada vez que se detecta un cambio en el código.

```npm run test:watch```

### 🔁 Ejecutar coverage de pruebas

Este modo permite ejecutar todas las pruebas unitarias del proyecto y generar un reporte de cobertura, el cual muestra qué porcentaje del código fuente está siendo validado por las pruebas.

```npm run test:coverage```

### 📘 Generar documentación con Compodoc

Este modo permite generar la documentación técnica del proyecto a partir de los comentarios JSDoc en el código fuente, facilitando la visualización de la API del Design System y sus componentes.

El comando genera un sitio estático con la documentación del proyecto, incluyendo componentes, interfaces, tipos, módulos y diagramas de dependencias.

```npm run compodoc```

## ⚙️ Generación de Archivos con Angular CLI

A continuación se presentan los comandos más utilizados para generar componentes standalone.

### 🧩 Generar un componente (con carpeta propia)

```ng g c [ruta]/[nombre-componente]```

#### Ejemplo:

```ng g c pages/users```

#### Archivos Generados

```
src/app/pages/users/
├── users.html
├── users.scss
├── users.spec.ts
└── users.ts
```

### 📄 Generar un componente sin carpeta (--flat)

```ng g c [ruta]/[nombre-componente] --flat```

#### Ejemplo:

```ng g c pages/products/products.component --flat```

#### Archivos Generados

```
src/app/pages/products/
├──products.component.html
├──products.component.scss
├──products.component.spec.ts
└──products.component.ts
```

### 📄 Generar un servicio

```ng g s [ruta]/[nombre-servicio] ```

#### Ejemplo:

```ng g c services/users/users.service```

#### Archivos Generados

```
src/app/services/users/
├──users.service.spec.ts
└──users.service.ts
```

### 🎓 Observaciones Importantes

- En este taller se utilizan componentes standalone
- Mantener una estructura clara favorece la escalabilidad y mantenibilidad
- Revisar cobertura de pruebas unitarias y documentación