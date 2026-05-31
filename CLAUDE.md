# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Node.js developer training course ("NodeJs工程师养成计划") containing multiple learning modules:

- `01.Node脚手架篇/` - Building custom CLI scaffolding tools
- `02.HTTP-Server/` - HTTP server fundamentals
- `03.Express/` - Express.js web framework
- `04.MongDB/` - MongoDB database integration

The root project `mycli` is a CLI tool that scaffolds Express projects using `express-scaffold.md` as its template blueprint.

## Running the Projects

```bash
# Express project development (nodemon auto-restart)
npm run dev

# Express project production
npm start

# Run the CLI scaffolding tool
npx mycli
```

## Express Project Architecture

The Express projects follow a layered MVC architecture:

```
├── bin/www              # Server entry point - listens on port
├── app.js               # Express app setup - middleware, routes
├── routes/              # URL routing - maps paths to controllers
├── controllers/         # Business logic - handles requests/responses
├── models/              # Data layer - database operations
├── views/               # Template files (ejs/pug)
└── config/             # Database connections, secrets
```

**Request flow:** `bin/www` → `app.js` (middleware) → `routes/` (dispatch) → `controllers/` (logic) → `models/` (data)

## Key Technologies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **cors** - Cross-origin resource sharing
- **morgan** - HTTP request logging (dev mode)
- **nodemon** - Development auto-restart

## Code Style

- ES6 modules with `require()` / `module.exports`
- Async/await for asynchronous operations
- Mongoose schemas for MongoDB document validation