# Reading-time CLI

CLI tool for "Medium-like reading time estimation" using <https://github.com/ngryman/reading-time> reading time library.

You can run this using either [Docker](https://www.docker.com/) or [Node.js](https://nodejs.org/).

## Docker

```bash
# Build docker image
docker build -t reading-time .

# Run from file with stdin
cat file.txt | docker run --rm -i reading-time --

# Run from file
docker run --rm -i -v $(pwd)/file.txt:/file.txt reading-time /file.txt

# Run from clipboard
pbpaste | docker run --rm -i reading-time --
```

## Node

```bash
# Build docker image
docker build -t reading-time .

# Run from file with stdin
cat file.txt | node reading-time.js --

# Run from file
node reading-time.js file.txt

# Run from clipboard
pbpaste | node reading-time.js --
```
