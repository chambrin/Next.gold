# Next.js gold star-kit Ultimate SAAS starter kit

Project likely to evolve a lot.

**Under development 👨‍💻**

## Tech stack

- next.js
- Storybook
- Vitest
- Docker
- Eslint
- Prettier
- Husky
- Lint-staged
- Tailwind
- GrapgQL
- Prisma
- Apollo Client

## Feature

1. Full Stack Server Side Rendering (SSR): Utilize next.js to enable server side rendering for a seamless user experience.
2. End-to-End Database Security: Implement robust security measures using Prisma to ensure the safety of user data.
3. Responsive User Interface: Utilize Tailwind CSS to create a responsive and visually appealing user interface.
4. Unit and Integration Testing: Use Vitest to perform thorough unit and integration testing to ensure the reliability of the application.
5. Component Based Development: Employ Storybook to facilitate component-based development, allowing for reusability and efficiency.
6. Code Preparation and Validation: Utilize Eslint and Prettier to ensure code consistency and quality throughout the development process.
7. TypeScript for Strong Typing: Leverage TypeScript to enforce strong typing and enhance code readability and maintainability.
8. Robust RESTful API Service: Use GraphQL and Apollo Client to create a robust and efficient RESTful API service.
9. Easy and Reliable Deployment: Utilize Docker to simplify the deployment process and ensure reliability across different environments.
10. Continuous Integration and Delivery: Utilize Husky and Lint-staged to enforce code quality checks and automate the CI/CD process.

### Prerequisites

- Node.js
- Docker
- NPM

### Prerequisites

- Node.js
- Docker
- NPM

---

1. Clone the repo

---

2. Install NPM packages

```other
npm install
```

---

3. Run the app

To start the project in development, run the following command:

```other
npm run docker:dev
```

to stop

Stop the app

```other
npm run docker:down
```

---

4. Run the tests

```other
npm run test
```

---

### Storybook

To run the storybook

```other
npm run storybook
```

### Vitest

To run the vitest

```other
npm run test
```

### husky

To run the husky

```other
git commit -m "commit message"
```

### Prisma

Generate the Prisma client by running the following command:

```other
npx prisma generate
```

Migrate the database schema by running the following command:

```other
npx prisma migrate dev
```

Seed the database with initial data (optional) by creating a `seeds` directory and adding seed data to it. Then run the following command:

```other
npx prisma db seed
```

