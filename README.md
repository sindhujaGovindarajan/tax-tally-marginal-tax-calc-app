# TaxTally - A Marginal Tax Calculator App

A responsive and accessible React-based marginal tax calculator application supporting dynamic tax data retrieval, built with modern development practices.

Assessment reference: https://github.com/points/interview-test-server.

## Highlights & Features

- **Tax Calculation**:
  -   Fetch tax data based on the selected year from API, http://localhost:5001.
  -   Fetch the tax rates by year i.e. /tax-calculator/tax-year/[2019|2020|2021|2022] 
  -   Receive a yearly salary
  -   Calculate and display the total taxes owed for the salary
  -   Display the amount of taxes owed per band
  -   Display the effective rate accordingly
- App delivers clean coding techniques, adhering to standard files, folders and variables naming conventions.
- Scalable interface design, with reusable components, keeping in mind to scope the app in future.
- Used optimal componentization and modular approach.
- Developer friendly app structure.
- **Responsiveness**: The app is responsive, ensuring it looks good on all screen sizes.
- **Accessibility**: Focus indicators.
- **Environment Configuration**: Centralized API URL and constants using `.env` file.

## Design & Technologies Used

- Atomic Design Application Structure
- React
- TypeScript
- CSS
- React Hooks and Js Caching (for optimal performance)
- JEST (Unit Testing)

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sindhujaGovindarajan/tax-tally-marginal-tax-calc-app.git
   cd tax-tally-marginal-tax-calc-app
2. Install dependencies: 
   ```bash
   npm install
3. Run the development server:
   ```bash
   npm start
4. Visit http://localhost:6780 in your browser.

---

## How TaxTally looks?

1. You land here:
![image](https://github.com/user-attachments/assets/19ebfa2e-07a6-43df-ab8e-cfd562db6cba)

2. Successfull Data Retrieval and Tax Breakup:
![image](https://github.com/user-attachments/assets/b6010100-fe58-4dd2-acf9-96ab81927abd)

3. API Error:
![image](https://github.com/user-attachments/assets/e14553ef-53d5-47d4-ae61-6905c9dadfdc)



## Tests
![image](https://github.com/user-attachments/assets/d7f9e9a3-10e6-4dfe-9aed-f370c640f33a)

---

### Future Features & Fixes:

- One test fails - needs [Fix].
- Reset functionality - [Feat].
- **Localization**: React i18next (for multi-language support in the header as a dropdown)
- **Dark/Light Theme**: Toggle between dark and light themes, using React Context API for theme management.
- Advanced responsiveness.
- Custom Loader while API fetches.
- Custom specific error strings.
- Husky for pre-commit hooks.
- CSS Modules (BEM) - Might need a bit tweaking [Optional]
- Enable Favicon.


