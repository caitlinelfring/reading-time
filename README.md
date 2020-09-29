# Reading-time CLI

[![Docker Pulls](https://img.shields.io/docker/pulls/celfring/reading-time)](https://hub.docker.com/repository/docker/celfring/reading-time)
[![Docker Image Size (tag)](https://img.shields.io/docker/image-size/celfring/reading-time/latest)](https://hub.docker.com/repository/docker/celfring/reading-time)

CLI tool for "Medium-like reading time estimation" using <https://github.com/ngryman/reading-time> reading time library.

You can run this using either [Docker](https://www.docker.com/) or [Node.js](https://nodejs.org/).

## Docker

```bash
# Run from file with stdin
cat file.txt | docker run --rm -i celfring/reading-time --

# Run from file
docker run --rm -i -v $(pwd)/file.txt:/file.txt celfring/reading-time /file.txt

# Run from clipboard
pbpaste | docker run --rm -i celfring/reading-time --
```

## Node

(This assumes you are using a supported node version)

```bash
# Install node modules
npm install

# Run from file with stdin
cat file.txt | node reading-time.js --

# Run from file
node reading-time.js file.txt

# Run from clipboard
pbpaste | node reading-time.js --
```
