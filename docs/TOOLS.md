# Fejlesztői eszközök és technikák

## Monorepo és [npm](https://npmjs.com)

A Monorepo lényege, hogy az alkalmazás különböző részei egy repóban vannak. Az npm [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) funkcióját kihasználjuk erre: egy fő csomagban tárolunk több csomagot, és pl. az npm install az összes csomag függőségét föltelepíti.

Két fő csomag van, a `backend` és a `frontend` az `apps` mappában. Minden kisebb csomag, amit készítünk, a `packages` mappában van.

## [Turborepo](https://turborepo.org)

Arra használjuk, hogy fejlesztői módban (`npm run dev`) párhuzamosan futtassa az összes csomag `dev` szkriptjét, így minden csomag le lesz fordítva.

## [Werf](https://werf.io)

A Kubernetes-be való deployolásra használjuk.
