# Docket

## Development environment

On terminal A, run:

    $ cp .env.example .env # Make sure to set POSTGRES_PASSWORD
    $ docker run --rm --env-file=.env -p 5432:5432 -it postgres:latest

On terminal B, run:

    $ npm run db:push
    $ npm run db:seed
    $ npm run dev
