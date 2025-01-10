# Dubai Municipality Test

## Project Overview
This project is a React-based application designed to manage and display articles using modern JavaScript best practices. The application employs object-oriented principles, a well-structured UI architectural pattern, and state management using hooks. The project also includes robust unit and UI testing to ensure code reliability and maintainability.

---

## Folder Structure

```plaintext
src/
  api/
    constant.ts
    index.ts
  components/
    ArticleCard/
      ArticleCard.tsx
      ArticleCard.test.tsx
    ArticleDetails/
      ArticleDetails.tsx
      ArticleDetails.test.tsx
    ArticleList/
      ArticleList.tsx
      ArticleList.test.tsx
  Container/
    ArticleContainer/
      ArticleContainer.tsx
      ArticleContainer.test.tsx
  hooks/
    useFetchArticle.tsx
  models/
    ArticleResponse.ts
    Article.ts
  tests/
    mock/
      mockArticle.ts
```

---

## Features
- **Object-Oriented Principles**: Components are designed using ES6 classes or functional components with hooks to encapsulate logic and state.
- **Architectural Pattern**: Follows a clear separation of container and presentational components to manage logic and UI separately.
- **Testing**:
  - Unit tests using Jest and React Testing Library to achieve high code coverage.
  - UI tests using Cypress.
- **Reusable Code**: Implements reusable, modular, and clean code using modern JavaScript best practices.
- **Code Quality**: Linting and static code analysis are integrated for maintaining high code quality.

---

## Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v10 or higher) or **yarn**

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Emmanuelugbotor/article-app.git
   cd article-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   VITE_API_KEY=<your-api-key-here>
   ```
   Replace `<your-api-key-here>` with the actual API key sent via email or your api key.

4. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173/`.

5. Build the project:
   ```bash
   npm run build
   ```

---

## Scripts

### Development
- **Start the dev server**:
  ```bash
  npm run dev
  ```

### Build
- **Build the project**:
  ```bash
  npm run build
  ```

### Linting
- **Run ESLint**:
  ```bash
  npm run lint
  ```

### Unit Tests
- **Run all tests**:
  ```bash
  npm run test
  ```

- **Watch tests**:
  ```bash
  npm run test:watch
  ```

- **Generate coverage report**:
  ```bash
  npm run test:coverage
  ```

### UI Tests
- **Open Cypress**:
  ```bash
  npm run cypress:open
  ```

- **Run Cypress tests**:
  ```bash
  npm run cypress:run
  ```

---

## Testing Details

### Unit Testing
- **Tools**: Jest, React Testing Library
- **Coverage**:
  - **Statements**: 100%
  - **Functions**: 100%
  - **Lines**: 100%
  - **Branches**: ~82%

### UI Testing
- **Tools**: Cypress
- **Focus**: Verifies the correct rendering of components and interaction workflows.

---

## Architectural Patterns
- **Container/Presentational Components**:
  - Container components handle logic and state (e.g., `ArticleContainer`).
  - Presentational components handle UI (e.g., `ArticleCard`, `ArticleList`, `ArticleDetails`).
- **Hooks**:
  - Custom hooks like `useFetchArticle` are used to encapsulate reusable logic.

---

## Mock Data
Mock data is located in `src/tests/mock/mockArticle.ts` and is shared across multiple test files for consistent and reusable test cases.

---

## Coverage Reports
To generate coverage reports, run:
```bash
npm run test:coverage
```
The reports will be available in the `coverage/` directory.

---

## Environment Variables
The application requires the following environment variables:

- **`VITE_API_KEY`**: Your API key for accessing external services.

Create a `.env` file in the root of the project and add the following:

```plaintext
VITE_API_KEY=<your-api-key-here>
```

Replace `<your-api-key-here>` with the your API key or the api key I sent via email.

---

## Additional Notes
- **Modern JavaScript**: The project uses ES6+ features for better readability and maintainability.
- **TypeScript**: Strictly typed components and APIs for better developer experience and error handling.
- **Cypress vs Puppeteer**: Only Cypress is used for UI testing to meet the requirement.

---

## Contribution
To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.

---

## License
[MIT License](LICENSE)

