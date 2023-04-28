## Getting Started

Start Guide:

Install node version manager on your computer, then run 
```bash
nvm use
```
If desired node version is not installed, install it first.

Installation:
We will use yarn through out this project, so install it first and then run the following command to install packages ->
```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project architecture

This project uses new app folder design which comes with Next 13.

Everything is located inside ```src/``` folder.
```app/``` folder is entry point
Folders are considered as routes, except when it starts with '_'
```page.tsx``` is route page.
```template.tsx``` is template for page.
```layout.tsx``` is like a template but applies also for nested child pages.

All components/widgets etc related to particular logic should be placed inside ```_components/``` folder or ```_widgets/``` inside that route folder linked to this logic.

```src/utils``` is where Supabase Provider lies. Might be reconsidered later

All shared components/utilities/hooks/types without any business logic should be placed inside ```src/shared/[folder]``` folder

Typical component template is '[Component]' folder with index.tsx

## Commit



## Deploy

The frontend will be hosted on Vercel and the might be migrated later to cut costs if required

## Backend

We will be using Supabase hosted as a database and backend solution as it uses Postgres with PostgREST and has Realtime, also handles Authentication. It is open source project and might be migrated to self hosted later with ease, too.
