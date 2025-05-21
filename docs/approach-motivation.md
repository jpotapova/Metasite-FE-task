# Selected approach motivation

The implementation consists only of a single screen and an API call.
This is a relatively small scope and does not require very complex or flexible solutions,
however, I approached the implementation
as if the app is small only temporarily and it is meant to be heavily extended.
I have chosen the tools that could be good candidates for a real enterprise project
to demonstrate the skills that could be applied in a realistic scenario.

## Tests

Pure functions are extensively tested with **unit tests**. `bun test`

Happy path user scenarios, such as submitting the form and viewing the filtered table, are implemented with the **e2e tests**

## Components library and styling

I have chosen to build the UI with MUI components because the design was very close to MUI visual.
Some aspects of MUI needed to be customized and slightly restyled. The approach that works easiest with MUI is css-in-js,
e.g. providing customizations via the `sx` prop and similar measures. I decided to use the same approach for the rest of the app for consistency. The required additional styling was very minimal, so I consideted it acceptable to just use `style` attributes for this
particular case.

## Automated checks

- Code is formatted with **Prettier**. `bun format`
- Code is written in **TypeScript**, which helps eliminate certain types of bugs and inconsistencies. `bun tsc -b`
- Code is linted with **ESLint**. The default configuration was extended with several well-known plugins. Additionally, an import sorting plugin was added to enforce a strict and predictable sort order. `bun lint`
- A **pre-commit hook** was configured to automatically run the aforementioned checks, ensuring the codebase remains clean.
- **SonarCloud** was configured to perform checks on every pull request.

## Project structure

### Components

All app components are split into `/pages`, `/components` and `/layouts`.

The components that have a potential to be reused across the entire app are placed in the global `/components` folder.

Screen level components are inside `/pages`.

Remaining components that are potentially only relevant for the specific screens are nested inside corresponding page components.

### Other

There is `/common` folder which has a configuration of MUI theme which is needed in many places,
but semantically did not fit in any other categories such as `/pages`, `/components` or `/layouts`.

Redux store and API queries are inside `/store`
