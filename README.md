<p align="center">
<img src="https://img.shields.io/github/contributors/Vithrax/discord-autopost" alt="GitHub contributors" />
<img src="https://img.shields.io/github/discussions/Vithrax/discord-autopost" alt="GitHub discussions" />
<img src="https://img.shields.io/github/issues/Vithrax/discord-autopost" alt="GitHub issues" />
<img src="https://img.shields.io/github/issues-pr/Vithrax/discord-autopost" alt="GitHub pull request" />
</p>

<p></p>
<p></p>

## 🔍 Table of Contents

- [🔍 Table of Contents](#-table-of-contents)
- [💻 Stack](#-stack)
- [📝 Project Summary](#-project-summary)
- [⚙️ Setting Up](#️-setting-up)
    - [DATABASE\_URL](#database_url)
    - [NEXTAUTH\_SECRET](#nextauth_secret)
    - [GOOGLE\_CLIENT\_ID](#google_client_id)
    - [GOOGLE\_CLIENT\_SECRET](#google_client_secret)
    - [DISCORD\_WEBHOOK\_URL](#discord_webhook_url)
- [🚀 Run Locally](#-run-locally)
- [🙌 Contributors](#-contributors)
- [📄 License](#-license)

## 💻 Stack

- [next-auth/prisma-adapter](https://github.com/nextauthjs/prisma-adapter): Next.js authentication adapter for Prisma.
- [tanstack/react-query](https://github.com/tanstack/react-query): Data fetching and caching library for React.
- [trpc/client](https://github.com/trpc/trpc): TypeScript RPC (Remote Procedure Call) library for client-side communication.
- [trpc/next](https://github.com/trpc/trpc/tree/main/packages/next): Next.js integration for trpc.
- [trpc/react-query](https://github.com/trpc/trpc/tree/main/packages/react-query): React Query integration for trpc.
- [next](https://github.com/vercel/next.js): Framework for server-rendered React applications.
- [next-auth](https://github.com/nextauthjs/next-auth): Authentication library for Next.js applications.
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss): Utility-first CSS framework for rapid UI development.

## 📝 Project Summary

- [**src**](src): Main source directory containing all application code.
- [**src/app**](src/app): Application-specific code and components.
- [**src/app/api**](src/app/api): API-related functionality for authentication, sending data, and using TRPC.
- [**src/app/dashboard**](src/app/dashboard): Dashboard-related components and functionality.
- [**src/components**](src/components): Reusable components used throughout the application.
- [**src/components/schedule-post**](src/components/schedule-post): Component for scheduling posts.
- [**src/components/ui**](src/components/ui): UI-related components and utilities.
- [**src/config**](src/config): Configuration files for the project.
- [**src/lib**](src/lib): Library code and utilities.
- [**src/server**](src/server): Server-side code and APIs.

## ⚙️ Setting Up

#### DATABASE_URL

- Specify the path to the SQL database file.

#### NEXTAUTH_SECRET

- Generate a secret key using the command: `openssl rand -base64 32`

#### GOOGLE_CLIENT_ID

- Create a new project in the Google Developer Console.
- Enable the Google Sign-in API.
- Go to the Credentials page and create a new OAuth 2.0 client ID.
- Copy the generated client ID.

#### GOOGLE_CLIENT_SECRET

- Follow the same steps as above to create a Google OAuth 2.0 client ID.
- Copy the generated client secret.

#### DISCORD_WEBHOOK_URL

- Create a webhook in a Discord server.
- Copy the webhook URL.

## 🚀 Run Locally

1.Clone the t3-discord-autopost repository:

```sh
git clone https://github.com/Vithrax/t3-discord-autopost
```

2.Install the dependencies with one of the package managers listed below:

```bash
pnpm install
bun install
npm install
yarn install
```

3.Start the development mode:

```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

## 🙌 Contributors

<table style="border:1px solid #404040;text-align:center;width:100%">
<tr><td style="width:14.29%;border:1px solid #404040;">
        <a href="https://github.com/Vithrax" spellcheck="false">
          <img src="https://avatars.githubusercontent.com/u/69089182?v=4?s=100" width="100px;" alt="Vithrax"/>
          <br />
          <b>Vithrax</b>
        </a>
        <br />
        <a href="https://github.com/Vithrax/t3-discord-autopost/commits?author=Vithrax" title="Contributions" spellcheck="false">
          7 contributions
        </a>
      </td></table>

## 📄 License

MIT License

Copyright (c) 2023 Adrian Gajdulewicz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
