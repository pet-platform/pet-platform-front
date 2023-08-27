# Pet Platform FrontEnd

본 프로젝트는 펫크인 FE 프로젝트.

## Environment

- visual studio code
- NodeJS ^16.14
- pnpm

### Setup Dev Environment

1. install nodejs(https://nodejs.org/ko/download)

2. install pnpm(https://pnpm.io/installation npm \*\* recommand Using npm)

3. install plugin `ESLint` and `Prettier` in Visutal studio code

4. set prettier option
   (File > Preferences > Settings > Set Prettier -Code formatters of `Default Formatter`)

## Running Locally

### Run Dev

1. Install dependencies:

```sh
pnpm install
```

2. Start the dev server:

```sh
pnpm dev
```

### Prod Deployment

1. build next server:

```sh
pnpm build
```

1. deploy build:

```sh
TODO
```

### ETC

if you have error like that

```
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in tsconfig.json.
```

use this command `git config --global core.autocrlf true`

## Documentation

https://nextjs.org/docs
