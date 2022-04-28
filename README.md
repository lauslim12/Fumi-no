# Fumi-no

Have you ever heard of Happiness Jar? This is the web version of it. Fully open source!

## Introduction

Happiness Jar (another name 'Positivity Jar', 'Memory Jar', 'Thank You Jar', and many more) is a concept pioneered by Elizabeth Gilbert, the author of the book 'Eat, Pray, Love'. A happiness jar is, like its name, a jar where you put in a daily note of 'good things' or gratitude that you have experienced throughout the day. Usually, you only put one note inside the jar every day.

When you are feeling down, you open the jar and read all of the things that you have put inside, so you realize that your life is something to be treasured. If (hopefully) you never feel down at any point throughout the year, then you open the jar at the end of the year, so you can be grateful of the good year that you have experienced.

These days, most of people are diagnosed with what they call 'Seasonal Affective Disorder', which is a form of mood-swings that occurs randomly throughout the year. According to National Institute of Health (USA), SAD is a seasonal depression that affects close to 10 million Americans. Another research by Medline Plus (USA), SAD occurs in 0.5 to 3 percent of individuals in the entire population!

Being happy is extremely detrimental to your mental health. One good thing a day keeps depression away.

## Disclaimer

The application's storage is mostly powered by your browser's local storage. I do not keep your data anywhere. In order to keep your data backed up, I recommend you to use the 'Manage Data' functionality. You can copy and paste the your data there and you can keep it in any kind of storage (let's say Google Drive). When you switch devices, just paste the data that you had copied and overwrite the defaults.

## Architecture

- TypeScript (strict).
- Next.js for the front-end.
- Chakra UI for the front-end framework.
- Vercel for serverless hosting.

## Features

- Simple, elegant, intuitive UI.
- Provides a way to keep track of your gratitude notes with `localStorage`.
- Customizable colorful interface to keep your eyes happy.
- Provides a way to back up your data, in case you switch devices.
- Built with performance in mind, almost no images used.
- Customizable configurations to personalize your web-powered happiness jar.
- Small microinteractions exist for good UX.
- Dark mode support, in case you love writing in the night.
- Full accessbility support (`a11y`).

## Requirements

- [Node.js 14+](https://nodejs.org/)
- [Yarn 1.22+](https://yarnpkg.com/)

## Installation

In order to run this application locally, do the following steps:

- Clone the repository first.

```bash
git clone https://github.com/lauslim12/Fumi-no.git
```

- Change directory to the cloned repository.

```bash
cd Fumi-no
```

- Then, install all the required dependencies.

```bash
yarn --frozen-lockfile
```

- Run the application in development mode.

```bash
yarn dev
```

- Run the application in production mode.

```bash
yarn build
yarn start
```

That's it. No settings required!

## Update

In order to update dependencies, you can run the following command.

```bash
yarn outdated
yarn upgrade-interactive --latest
```

Follow the instructions in the CLI so they can be updated!

## Deployment

I use Vercel for deployment, and it is connected to this GitHub repository. Learn how to do deployment with Vercel by [following the instructions](https://vercel.com/docs/platform/deployments).

## Containerization

In order to package and run this application as a Docker container, you just need to do the following steps.

```bash
docker build . -t my-fumino-application
docker run -p 3000:3000 my-fumino-application
```

Or, you can just pull the latest [Docker image from my Docker Hub](https://hub.docker.com/r/lauslim12/fumi-no), and run it in your local machine. It is **lowercase F, not uppercase F**. Sort it by the 'newest' to see the latest version of this application!

## Contribution

I accept all kinds of contributions. Don't forget to read the `CONTRIBUTING.md` file first. Feel free to submit a pull request or submit an issue if you encounter any issues!

## License

This application is licensed under MIT License. Please see the `LICENSE` file for more information.

## Credits

- [Elizabeth Gilbert](https://en.wikipedia.org/wiki/Elizabeth_Gilbert), the author of 'Eat, Pray, Love' for the idea.
- [Eucalyp](https://creativemarket.com/eucalyp) for the icon.
- [TheySaidSo](https://quotes.rest/) for the quotes API service.
