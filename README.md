# BITFLOW Landing Page

Landing page moderna y optimizada para SEO de BITFLOW, una plataforma de notificaciones instantáneas por mensajería.

## 🚀 Características

- ✅ Diseño moderno y responsive
- ✅ Optimizado para SEO
- ✅ Construido con Next.js 14 y React
- ✅ Estilos con Tailwind CSS
- ✅ Exportación estática para fácil despliegue
- ✅ Una sola página con todas las secciones

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🏗️ Construcción para Producción

Para generar la versión estática optimizada:

```bash
npm run build
```

Esto generará una carpeta `out/` con todos los archivos estáticos listos para desplegar.

## 📦 Despliegue en VPS

### Opción 1: Servidor Web Estático (Nginx/Apache)

1. Construye el proyecto:
```bash
npm run build
```

2. Copia la carpeta `out/` a tu servidor:
```bash
scp -r out/* usuario@tu-vps:/var/www/html/
```

3. Configura Nginx (ejemplo):
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Opción 2: Node.js con PM2

1. En tu VPS, instala PM2:
```bash
npm install -g pm2
```

2. Construye y ejecuta:
```bash
npm run build
pm2 start npm --name "bitflow-landing" -- start
pm2 save
pm2 startup
```

### Opción 3: Docker

Crea un `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Construye y ejecuta:
```bash
docker build -t bitflow-landing .
docker run -d -p 80:80 bitflow-landing
```

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para la versión estática básica.

### Personalización

- **Colores**: Edita `tailwind.config.js` para cambiar la paleta de colores
- **Contenido**: Modifica `app/page.tsx` para actualizar el contenido
- **SEO**: Ajusta los meta tags en `app/layout.tsx`

## 📱 Secciones de la Landing

1. **Hero**: Presentación principal con CTA
2. **Características**: 6 características principales del producto
3. **Beneficios**: Razones para elegir BITFLOW
4. **Precios**: 3 planes (Starter, Professional, Enterprise)
5. **CTA**: Llamada a la acción destacada
6. **Contacto**: Formulario de contacto
7. **Footer**: Enlaces y información legal

## 🎨 Tecnologías Utilizadas

- **Next.js 14**: Framework React con SSR/SSG
- **React 18**: Biblioteca UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de estilos utility-first
- **PostCSS**: Procesador de CSS

## 📄 Licencia

Este proyecto es privado y propiedad de BITFLOW.

## 🤝 Soporte

Para soporte, contacta a: contacto@bitflow.com


