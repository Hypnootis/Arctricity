FROM node:16


ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002


RUN mkdir -p /root/workspace /root/.vscode-server/extensions
COPY . ./app
WORKDIR /app/
RUN npm install -g npm@latest
RUN npm install -g expo-cli
RUN node --version && npm --version
RUN npm install
RUN npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
