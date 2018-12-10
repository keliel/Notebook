# Notebook

Trial task for job application
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Thought process

### List

I felt like a notes list would be a nice way to display some information. No special navigation would be needed and it is one of the first things that come to mind, thinking about lists.

### Styling

For simplicity reasons I used bootstrap for some general layouting and responsiveness. Most sticky notes are yellow. Changing the bootstrap color variables made it easy, to get some coherent styling.

Instead of SCSS I used Less in this project. As I have used it before, this was not a huge issue. A Bootstrap 4 source code port from SCSS to Less was also available, making the Bootstrap footprint smaller.

### Special Feature

Maybe not **THAT** special. But as there was no mention of deleting entries in the initial project requirements, I decided to implement this. Another idea was manual sorting or some kind of **TODO** extension. But in terms of scope and timeboxing, simple deletion of notes seemed much more useful for an MVP.

## Setup

### Packages

Run `yarn` to get all updated packages.

### Development server

Run `yarn start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
