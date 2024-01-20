# NotPaid

This project it's not original, it is inspired by [kleampa]('https://github.com/kleampa') and his project [not-paid]('https://github.com/kleampa/not-paid/tree/master') that seeks to:

``"Add opacity to the body tag and decrease it every day until their site completely fades away. Set a due date and customize the number of days you offer them until the website is fully vanished."``

I found the project interesting and funny and through this project I decided to publish my contribution made with Angular!

## How to apply

There are many ways to make this project work with Angular, I decided to do it in the way that fewer files were changed. How I did it by changing the project's 'main' programmable file (`main.ts`).

```bash
not-paid/src/main.ts
```

#### - Customise

The `main.ts` file contains all the logic necessary for you to get paid (or not). The `setFade()` (at line 28) function contains all the logic to gradually hide the application's content. To customize the functionality, these are the important variables:

```typescript
const initialDate: Date = new Date('2024-01-16');
const daysDeadline: number = 60;
```

The `initialDate` variable defines the date of publication of the project, that is, from when the website will start to disappear. Just change `'2024-01-16'` to the website publishing date to make the logic work correctly.

```typescript
// Current
const initialDate: Date = new Date('2024-01-16');

// Ex 1
const initialDate: Date = new Date('2026-05-20');
// Ex 2
const initialDate: Date = new Date('2024-02-02');

// Ex 3
// Hours, minutes, and seconds do not influence the logic, so this example
const initialDate: Date = new Date('2024-09-20T00:00:00');
// is equivalent to this example
const initialDate: Date = new Date('2024-09-20');
```

The `daysDeadline` variable defines how long, from the initial date, the website will disappear completely. I recommend that you let your heart guide you in this variable

```typescript
// Current - 60 days
const daysDeadline: number = 60;

// Ex 1 - 30 days
const daysDeadline: number = 30;

// Ex 2 - 1 week
const daysDeadline: number = 7;
```

From this point on there is no need to change anything else, let it disappear or get paid!

## Requirements

These are the requirements for project development:

| Resource | version |
|----------|---------|
| Angular  | 15.2.10 |
| Node.js  | 18.17.0 |
| npm      | 9.6.7   |

## Development server

To execute the project as dev server:

```bash
ng serve
```
or
```bash
ng serve -o
```

Both of the above options will run the project and make it accessible on `http://localhost:4200/`, but the '-o' option opens the project in the main browser. The application will automatically reload if you change any of the source files.

## Build

```bash
ng build
```

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

```bash
ng test
```

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

```bash
ng e2e
```

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Author

**Original:** Ciprian (@kleampa), Romania
**Made by:** Cleiton Braga ([CleitonJB]('https://github.com/CleitonJB')), Brazil