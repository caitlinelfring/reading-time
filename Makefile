build:
	docker build -t reading-time .

run:
	cat file.txt | docker run --rm -i reading-time --

run-pbpaste:
	pbpaste | docker run --rm -i reading-time --

.PHONY: build run run-pbpaste
