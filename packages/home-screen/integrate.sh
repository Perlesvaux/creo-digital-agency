#! /bin/bash
PROJECT_DIRECTORY="../../docs/assets/home-screen/"
COMPONENT_DIRECTORY="./dist/assets/"

cp "$COMPONENT_DIRECTORY"*.js "$PROJECT_DIRECTORY"index.js  && \
  cp "$COMPONENT_DIRECTORY"*.css "$PROJECT_DIRECTORY"index.css

echo "js and css from $COMPONENT_DIRECTORY were copied into $PROJECT_DIRECTORY"


