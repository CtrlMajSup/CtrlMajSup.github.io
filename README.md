## Context

The React application uses Vite as the bundler and `react-router-dom` for routing. The project shows a blank white screen with no visible errors when running in development mode.


## Best Practices

* Avoid unnecessary exclusions of packages from Vite’s optimization unless specifically required and documented.
* Clear Vite’s cache (`node_modules/.vite`) and reinstall dependencies after changing the config.

## Build and Deployment

* `npm run build` or `npx vite build` triggers the **production build process**:

  * Compiles, optimizes, and outputs static files in the `dist/` folder.
  * `npx vite build` runs the build directly without relying on an npm script, useful for quick testing or debugging.

* `npm run preview` serves the production build locally for testing.

* When deploying a Single Page Application (SPA) using `BrowserRouter`, configure your web server to **redirect all requests to `index.html`** to ensure proper client-side routing.

* Alternatively, use `HashRouter` to avoid server-side routing configuration.

## Command Summary

| Action                   | Command           | Notes                                        |
| ------------------------ | ----------------- | -------------------------------------------- |
| Start development server | `npm run dev`     | Runs dev server with hot module replacement  |
| Build production bundle  | `npm run build`   | Creates optimized static files in `dist/`    |
| Build without npm script | `npx vite build`  | Equivalent to `npm run build` without script |
| Preview production build | `npm run preview` | Locally serves the production build          |


