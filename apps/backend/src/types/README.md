Itt a directus.d.ts és directus.js fájlban az történik, hogy a @directus/extensions-sdk csomagból importáljuk a típusokat, de a tényleges működést adó JS-t nem, hanem azt mi megírjuk (ami amúgy semmit sem csinál). Tehát az sdk csomag nem lesz végül is futásidőben betöltve. Ez azért kellett, mert valahogy a Directus nem bírta betölteni az sdk-t, valami commonjs/esnext modul kompatibilitások miatt...