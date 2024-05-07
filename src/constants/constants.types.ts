export type Entity = 'cookies' | 'options' | 'pages' | 'posts'

export type Endpoints = Record<Entity, string>;

export type Path = '/' | '/404/' | '/aloes-drzewiasty/' | '/biostymina/' | '/historia-marki/' | '/odpornosc/'

export type Slug = 'aloes-drzewiasty' | 'biostymina' | 'historia-marki' | 'not-found' | 'odpornosc' | 'strona-glowna';

export type Paths = Record<Slug, Path>;
