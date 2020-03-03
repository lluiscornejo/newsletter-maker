# Optica-App Web

This is the third version of Optica-App web, realized in ReactJs.

## Development

```
npm run start
```

Go to the browser:

```
http://localhost:8080
```

## Production

To create a minified and optimized code:

That is the production way.

```
npm run build-pro
```

If you want to debug the code in production:

```
npm run build-dev
```

## Deployment

```
npm run build-pro
```

It will create a build folder, with all files inside.

Go to ftp and paste all files inside the `web/apps` folder in ftp.
The `web/apps` folder point to `www.opticaapp.com`. This is configured in cd-mon hosting as multi-domains web.

There is a `opticaapp.htaccess` pasted. We need to change the name to: `.htaccess` to work.
