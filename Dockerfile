FROM node

RUN mkdir /code
ADD . /code/
WORKDIR /code

EXPOSE 3001
