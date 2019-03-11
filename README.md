# Fullstack app using react, express, mongodb and TS

## Overview

Simple application dashboard showing customers data overview with simple CRUD operatoins

## Getting started

### Prerequisites

required
- Mac OS
- Docker
- Node.js (8+)
- yarn
- `brew install mongodb` (install mongodb)

optional
- VSCode

### Install and run

run this commnads step by step

- `yarn` (install all dependencies)
- `yarn global add nodemon` (install nodemon globally)
- `yarn copy:env` (copy env.example to .env in yarn workspaces)
- `yarn start` (start the app)

last command will run mongodb, Hapi.js server and frontend app using webpack-dev-server

app will be running on `http://localhost:8080`

## Used Tools

- **Yarn workspaces**

- **Backend**
  - Docker
  - MongoDB
  - Express
  - Typescript

- **Frontend**
  - React (v16.8+ with Hooks API)
  - Webpack (4+)
  - Babel (7+)
  - Axios
  - Autoprefixer
  - Purecss (css framework)
