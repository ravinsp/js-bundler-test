# Test project for javascript bundling

```
npm install
npm run bundle
```

Javascript bundle generated at `dist\bundle.js`. The bundle includes the Ripple lib and a wrapper lib which defines `myib.myfunc()`.

## Testing the bundle
Calling `mylib.myfunc()` should return the hex encoded string output from the Ripple lib. See `dist\index.html` for example.

## Updaing the bundle
Make any modifications to `src\app.js` and run `npm run bundle`. New bundle is generated at `dist\bundle.js`.