FROM arm64v8/node:lts
COPY package.json /life-helper-frontend/package.json
WORKDIR /life-helper-frontend
RUN npm install
COPY . /life-helper-frontend

CMD ["sh", "-c", "npm run dev"]
