### Setup prisma

```js
npx prisma init --datasource-provider sqlserver
```

### Migrate prisma

```js
npx prisma migrate dev --name init
```

### Explore the data in Prisma Studio

```js
npx prisma studio
```

### Id auto increment

```js
id Int @id @default(autoincrement())
```

### Formatting schema settings vscode

```js
"[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
},
```
