/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SolidIndexImport } from './routes/solid/index'
import { Route as SolidSrpImport } from './routes/solid/srp'
import { Route as SolidOcpImport } from './routes/solid/ocp'
import { Route as SolidLspImport } from './routes/solid/lsp'
import { Route as SolidIspImport } from './routes/solid/isp'
import { Route as SolidDipImport } from './routes/solid/dip'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SolidIndexRoute = SolidIndexImport.update({
  id: '/solid/',
  path: '/solid/',
  getParentRoute: () => rootRoute,
} as any)

const SolidSrpRoute = SolidSrpImport.update({
  id: '/solid/srp',
  path: '/solid/srp',
  getParentRoute: () => rootRoute,
} as any)

const SolidOcpRoute = SolidOcpImport.update({
  id: '/solid/ocp',
  path: '/solid/ocp',
  getParentRoute: () => rootRoute,
} as any)

const SolidLspRoute = SolidLspImport.update({
  id: '/solid/lsp',
  path: '/solid/lsp',
  getParentRoute: () => rootRoute,
} as any)

const SolidIspRoute = SolidIspImport.update({
  id: '/solid/isp',
  path: '/solid/isp',
  getParentRoute: () => rootRoute,
} as any)

const SolidDipRoute = SolidDipImport.update({
  id: '/solid/dip',
  path: '/solid/dip',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/solid/dip': {
      id: '/solid/dip'
      path: '/solid/dip'
      fullPath: '/solid/dip'
      preLoaderRoute: typeof SolidDipImport
      parentRoute: typeof rootRoute
    }
    '/solid/isp': {
      id: '/solid/isp'
      path: '/solid/isp'
      fullPath: '/solid/isp'
      preLoaderRoute: typeof SolidIspImport
      parentRoute: typeof rootRoute
    }
    '/solid/lsp': {
      id: '/solid/lsp'
      path: '/solid/lsp'
      fullPath: '/solid/lsp'
      preLoaderRoute: typeof SolidLspImport
      parentRoute: typeof rootRoute
    }
    '/solid/ocp': {
      id: '/solid/ocp'
      path: '/solid/ocp'
      fullPath: '/solid/ocp'
      preLoaderRoute: typeof SolidOcpImport
      parentRoute: typeof rootRoute
    }
    '/solid/srp': {
      id: '/solid/srp'
      path: '/solid/srp'
      fullPath: '/solid/srp'
      preLoaderRoute: typeof SolidSrpImport
      parentRoute: typeof rootRoute
    }
    '/solid/': {
      id: '/solid/'
      path: '/solid'
      fullPath: '/solid'
      preLoaderRoute: typeof SolidIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/solid/dip': typeof SolidDipRoute
  '/solid/isp': typeof SolidIspRoute
  '/solid/lsp': typeof SolidLspRoute
  '/solid/ocp': typeof SolidOcpRoute
  '/solid/srp': typeof SolidSrpRoute
  '/solid': typeof SolidIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/solid/dip': typeof SolidDipRoute
  '/solid/isp': typeof SolidIspRoute
  '/solid/lsp': typeof SolidLspRoute
  '/solid/ocp': typeof SolidOcpRoute
  '/solid/srp': typeof SolidSrpRoute
  '/solid': typeof SolidIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/solid/dip': typeof SolidDipRoute
  '/solid/isp': typeof SolidIspRoute
  '/solid/lsp': typeof SolidLspRoute
  '/solid/ocp': typeof SolidOcpRoute
  '/solid/srp': typeof SolidSrpRoute
  '/solid/': typeof SolidIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/solid/dip'
    | '/solid/isp'
    | '/solid/lsp'
    | '/solid/ocp'
    | '/solid/srp'
    | '/solid'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/solid/dip'
    | '/solid/isp'
    | '/solid/lsp'
    | '/solid/ocp'
    | '/solid/srp'
    | '/solid'
  id:
    | '__root__'
    | '/'
    | '/solid/dip'
    | '/solid/isp'
    | '/solid/lsp'
    | '/solid/ocp'
    | '/solid/srp'
    | '/solid/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SolidDipRoute: typeof SolidDipRoute
  SolidIspRoute: typeof SolidIspRoute
  SolidLspRoute: typeof SolidLspRoute
  SolidOcpRoute: typeof SolidOcpRoute
  SolidSrpRoute: typeof SolidSrpRoute
  SolidIndexRoute: typeof SolidIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SolidDipRoute: SolidDipRoute,
  SolidIspRoute: SolidIspRoute,
  SolidLspRoute: SolidLspRoute,
  SolidOcpRoute: SolidOcpRoute,
  SolidSrpRoute: SolidSrpRoute,
  SolidIndexRoute: SolidIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/solid/dip",
        "/solid/isp",
        "/solid/lsp",
        "/solid/ocp",
        "/solid/srp",
        "/solid/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/solid/dip": {
      "filePath": "solid/dip.tsx"
    },
    "/solid/isp": {
      "filePath": "solid/isp.tsx"
    },
    "/solid/lsp": {
      "filePath": "solid/lsp.tsx"
    },
    "/solid/ocp": {
      "filePath": "solid/ocp.tsx"
    },
    "/solid/srp": {
      "filePath": "solid/srp.tsx"
    },
    "/solid/": {
      "filePath": "solid/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
