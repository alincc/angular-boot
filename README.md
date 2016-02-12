Angular 2.x with TypeScript, including dependencies to have a minimal playground.

### Usage
1. Run
`npm install angular2-boot --save`

2. Update your index.html file to point to angular2-boot-min.js file
```html
<!DOCTYPE html>
<html>
<head>
    <title>Angular 2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/node_modules/angular2-boot/dist/angular2-boot-min.js"></script>
</head>

<body>
    <hello>Booting...</hello>
    <script>
        System.config({
            transpiler: 'typescript',
            typescriptOptions: { emitDecoratorMetadata: true },
            packages: {'app': {defaultExtension: 'ts'}}
        });
        System.import('app/bootstrap')
                .then(null, console.error.bind(console));
    </script>
</body>
</html>
```



### What it contains
- angular2 (2.0.0-beta.3)
- angular2-polyfill (0.0.2)
- es6-shim (^0.33.3)
- rxjs (5.0.0-beta.0)
- systemjs (0.19.6)
- typescript (^1.7.5)
- zone.js (0.5.11)

### Demo 

- [angular2-boot-sample](https://github.com/alincc/angular2-boot-sample)
- [plnkr](http://plnkr.co/edit/N7vJo0agNZYSYBpQTb0y)
