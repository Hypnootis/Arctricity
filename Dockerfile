FROM node:16

RUN mkdir -p /root/workspace /root/.vscode-server/extensions

RUN npm install -g npm@latest
RUN npm install -g expo-cli
RUN node --version && npm --version
RUN cd StickerSmash && npm install
RUN npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1


CMD /bin/sh -c "while sleep 86000; do :; done"