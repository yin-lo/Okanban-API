# CJS vs Module

## Par défaut 

### CJS

```js
// sum.js
const sum = (a, b) => a + b
module.exports = sum;
```

```js
const express = require('express');
const sum = require('./sum');
```

### Module

```js
// sum.js
const sum = (a, b) => a + b
export default sum;
```

```js
import express from 'express';
// Attention, ici impossible de faire de la destructuration
// Et on doit ajouter l'extension du fichier
import sum from './sum.js';
```

## Les exports nommées

### CJS

```js
// sum.js
const monModule = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b
}
module.exports = monModule;
```

```js
const { sum, sub } = require('./sum');
```

### Module

```js
// sum.js
export const sum = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

```js
import { sum, sub } from './sum.js';
```

## En résumé

```js
// monController.js
const monController = {
  getAll() {
    return 'getAll';
  }
}

// Avant
module.exports = monController;
// Après
export default monController;
```

```js
// Avant
const monController = require('./monController');
// Après
import monController from './monController.js';

monController.getAll();
```
