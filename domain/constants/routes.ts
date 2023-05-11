type PathsType = {
  ROUTE: string,
  TITLE: string
}

interface Routes {
  route: string,
  title: string
}

export const PATHS: Record<string, PathsType> = {
  HOME: {
    ROUTE: '/',
    TITLE: 'Home'
  },
  PERSONAJES: {
    ROUTE: '/personajes',
    TITLE: 'Personajes'
  },
}

export const ROUTES: Routes[] = [
  {
    route: PATHS.HOME.ROUTE ,
    title: PATHS.HOME.TITLE
  },
  {
    route: PATHS.PERSONAJES.ROUTE ,
    title: PATHS.PERSONAJES.TITLE
  }
]
