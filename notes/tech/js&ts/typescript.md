---
id: typescript
aliases:
  - web
tags:
  - ts
area: web
project: web
---

# initialize a ts debug app

```bash
npx tsc --init
npm install ts-node # allows debugging
```

## Allow source maps in ts-config

```json
"compilerOptions": {
    "target": "es2016",
    "declarationMap": true,
    "module": "commonjs",
    "sourceMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
}
```
