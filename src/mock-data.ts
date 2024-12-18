import { ICard } from './components/Card/Card.tsx';

export const mockData: ICard[] = [
    {
        id: 'some_id_11',
        app_id: 10000,
        create_dt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        review_dt: new Date().toISOString(),
        system: 'СКУД',
        app_type: 'Неисправность',
        object_place: {
            name: '5 элем',
            street: 'ул. Вторая, 2',
            town: 'город Норм',
        },
        app_text:
            'После осуществления поиска, внизу под поисковыми полями отображаются результаты поиска в виде списка  виде списка После осуществления поиска, внизу под поисковыми полями отображаются результаты поиска в виде списка  виде спискаПосле осуществления поиска, внизу под поисковыми полями отображаются результаты поиска в виде списка  виде спискаПосле осуществления поиска, внизу под поисковыми полями',
        app_status: 'in_progress',
        is_tech: true,
        images: [],
    },
    {
        id: 'some_id_12',
        app_id: 10001,
        create_dt: new Date(Date.now() - 1000 * 60 * 60 * 124).toISOString(),
        review_dt: new Date().toISOString(),
        complete_dt: new Date().toISOString(),
        system: 'СКУД',
        app_type: 'Неисправность',
        object_place: {
            name: '5 элем',
            street: 'ул. Вторая, 2',
            town: 'город Известный',
        },
        is_tech: false,
        app_text: 'После осуществления поиска, внизу под поисковыми полями отображаются результаты поиска в виде списка виде',
        app_status: 'completed',
        images: [],
    },
    {
        id: 'some_id_13',
        app_id: 10002,
        create_dt: new Date(Date.now() - 1000 * 60 * 60 * 124).toISOString(),
        review_dt: new Date().toISOString(),
        complete_dt: new Date().toISOString(),
        system: 'СКУД',
        app_type: 'Неисправность',
        object_place: {
            name: '5 элем',
            street: 'ул. Вторая, 2',
            town: 'город Известный',
        },
        is_tech: false,
        app_text: 'После осуществления поиска, внизу под поисковыми полями отображаются результаты поиска в виде списка виде',
        app_status: 'has_feedback',
        images: [],
    },
];
