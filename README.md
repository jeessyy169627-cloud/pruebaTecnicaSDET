# pruedaSDET
Prueba practica SDET

# 🧪 Sistema Modular de Pruebas
Sistema modular que permite a equipos de desarrollo probar funcionalidades de manera independiente. Incluye componentes de prueba y herramientas para exponerlos y ejecutarlos.

### Backend (Node.js/Express)
- ✅ **Módulo de Errores**: Simula códigos HTTP y tiempos de respuesta
- ✅ **Test Runner**: Ejecuta suites de pruebas completas

### Frontend (Vue.js)
- ✅ **Dashboard de Control**: Monitoreo en tiempo real
- ✅ **Visualización de Resultados**: Reportes detallados


## 📋 Requisitos Previos
- [Node.js](https://nodejs.org/) 18 o superior
- [Docker](https://www.docker.com/) y Docker Compose
- [Git](https://git-scm.com/)

## 📋 Requisitos
- Docker y Docker Compose
- Node.js 18+ (para desarrollo local)
- npm

## 🐳 Ejecución Rápida con Docker

```bash
# 1. Clonar el repositorio
git clone https://github.com/jeessyy169627-cloud/practicaSDET.git
cd pruebaSDET


# Iniciar todos los servicios
docker-compose up --build
npm install

#Ejecutar webpack
npm run webpack

#Ejecucion de Pruebas
npm run test

#Iniciar los servicios
npm run dev

# Acceder a:
# http://localhost:3000

## 📚 SECCIÓN "API ENDPOINTS"**
### Autenticación
- `GET /users` - Simula login
  ```json
  {
    "username": "usuario",
    "password": "password123"
}

- `GET /results` 

- `POST /login` - Simula login
  ```json
  {
    "username": "usuario",
    "password": "password123"
}
