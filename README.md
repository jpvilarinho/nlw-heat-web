# NLW Heat – DoWhile (Web)

Aplicação web durante o evento **DoWhile 2021 (NLW Heat – Rocketseat)**: um mural em tempo real onde usuários autenticam com GitHub e enviam mensagens que aparecem ao vivo.

## Features

- Login com GitHub (OAuth)
- Envio de mensagem
- Listagem das últimas mensagens
- Atualização em tempo real via Socket.IO

## Tecnologias

- React + TypeScript
- Vite
- Sass (CSS Modules)
- Axios
- Socket.IO Client

## Requisitos

- Node.js (recomendado: LTS)
- Backend rodando em `http://localhost:4000` (API + Socket.IO)

> Este repositório contém apenas o **frontend web**.

## Como rodar

- Clone o projeto e entre na pasta:

```bash
git clone <https://github.com/jpvilarinho/nlw-heat-web.git>
cd nlw-heat-web
```

### Observação para usuários Windows (PowerShell)

Caso o PowerShell bloqueie o comando npm, execute o comando abaixo uma única vez:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

- Instale as dependências:

```bash
npm install
```

Rode em modo dev:

```bash
npm run dev
```

Acesse: `http://localhost:5173`

## Variáveis/Configuração

No momento, a API está fixada em:

- ```src/services/api.ts```: `http://localhost:4000`
- ```src/components/message-list/index.tsx```: Socket em `http://localhost:4000`

> Se quiser deixar configurável por .env, uma melhoria simples é usar:

Crie um arquivo `.env`:

```env
VITE_API_URL=http://localhost:4000
VITE_SOCKET_URL=http://localhost:4000
```

E use no código via:

```bash
import.meta.env.VITE_API_URL
```

## Estrutura

- ```src/components``` – componentes da UI
- ```src/contexts``` – contexto de autenticação
- ```src/services``` – client HTTP (axios)
- ```src/styles``` – estilos globais

## Licença

MIT — veja o arquivo LICENSE.
