export type Entity = 'options' | 'pages' | 'posts'

export type Endpoints = Record<Entity, string>;

export type Path = '/' | '/aloes-drzewiasty/' | '/biostymina/' | '/historia-marki/' | '/odpornosc/'

export type Slug = 'aloes-drzewiasty' | 'biostymina' | 'historia-marki' | 'odpornosc' | 'strona-glowna';

export type Paths = Record<Slug, Path>;
