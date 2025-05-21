# Tech stack

Choices explained:

- **Bun** JS runtime and package manager - it is significantly faster than npm and it is always possible to switch to npm if any blockers are detected with bun due to it being less mature than npm
- **React+Typescript with Vite template** - went for a simple React app, not Next, as there doesn't seem to be a need for server side rendering in the specific app
- **Vite** - modern and very easy to initialize fresh projects
- **MUI components** - the designs are very close to MUI visual
- **Redux Toolkit and RTK Query** - certainly there is not much data or API calls, and the application could be written with just React state and `axios` calls, but as I mentioned in my motivation article, I decided to treat this app as an enterprise app that is just being started and there is a backlog of features to be built
- **Prettier** - standard for formatting, has plenty of plugins
- **Eslint** - standard for linting, I extended the default config with as many well-known plugins as possible to maximize automated code checking
- **Sonar Cloud** - configured my repo to integrate with sonar cloud and provide checks on every pull request, as Sonar gives even more insights than lint
- **Lefthook** - for pre-commit, to ensure that no unformatted or unchecked code gets commited
- **Conventional commits** - used conventional commits and pull requests to demonstrate a clean history of how the project was built
- **Storybook** - I use storybook on a regular basis to better see how my components behave in isolation, which usually leads to a better component design, in addition Storybook has capabilities of running component tests and serves as documentation
- **Cypress** - For thoroughness, the application required end-to-end tests, and I chose the tool I know best
