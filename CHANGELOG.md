# Changelog

Changelog is used to keep track of version changes. The versioning scheme used is [SemVer](https://semver.org/). First integer is used for breaking change, second integer is used for major patches, and third integer is used for minor bug fixes. Named versions will probably change after a breaking or major change.

## Version 1.1.8 (12/05/2022)

- Fix all security vulnerabilities of `yarn audit` by using `npm_config_yes=true npx yarn-audit-fix`.

## Version 1.1.7 (05/05/2022)

- Add security headers which conform to [Helmet.js](https://github.com/helmetjs/helmet).
- Remove `.env` and version name in `Footer.tsx`, it's much easier to let it stay in the network headers via `next.config.js`.

## Version 1.1.6 (03/05/2022)

- Upgrade dependencies.
- Remove `75vh` in `Blessings.tsx` to prevent too much empty space.
- Change `Dreamer` to `User` as the default user's name.
- Rename 'Hidden date settings' to "Hide date in 'Add Data'" for clarity.

## Version 1.1.5 (28/04/2022)

- Fix security vulnerabilities.
- Update all dependencies.
- Simplify project structure (removal of `styles`, and merge Prettier/ESLint inside `package.json`).
- Use `fontsource` to replace Google Fonts.
- Simplify styles for `NProgress` and `::selection`, placed straight in `_app.tsx`.
- Simplify codebase yang removing not needed dependencies: `axios` and `sass`.

## Version 1.1.4 (01/10/2021)

- Fix security vulnerabilities.
- Change ESLint to be Next.js's recommended one.
- Update all dependencies.

## Version 1.1.3 (20/08/2021)

- Fix security vulnerabilities.
- Automated deployment with Vercel.
- Fix wording in documentation.

## Version 1.1.2 (20/08/2021)

- Update dependencies.
- Migrate CircleCI to GitHub Actions.
- Add auto deployment with Docker and GitHub Actions.

## Version 1.1.1 (05/06/2021)

- Update dependencies.

## Version 1.1.0 (11/05/2021)

- Change `npm` to `yarn`.
- Add docker for containerization.
- Replace `npm` scripts with `yarn` scripts.
- Update workflow to also use Docker.
- Update npm dependencies.
- Fix nested buttons bug.
- Fix backup modal and guide modal not appearing bug.

## Version 1.0.1 (09/05/2021)

- Change complicated ID for blessings to a simple one (UNIX time).
- Improve performance for loading fonts, as `next-google-fonts` has been deprecated.
- Activate `simple-import-sort` for ESLint.
- Update npm dependencies.
- Fix several typos.

## Version 1.0.0 (07/04/2021) - Alicia

- Official initial release of Fumi-no.
