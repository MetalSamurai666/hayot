import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainId', () => {
    const cats = ref([
        {
            id: 1,
            url: 'cat1',
            title: 'Возьми собаку'
        },
        {
            id: 2,
            url: 'cat2',
            title: 'Стань волонтёром'
        },
        {
            id: 3,
            url: 'cat3',
            title: 'Уроки доброты'
        },
        {
            id: 4,
            url: 'cat4',
            title: 'Полезно знать'
        },
        {
            id: 5,
            url: 'cat5',
            title: 'О приюте'
        },
    ])

        return { 
            cats,
            
        }
    }
)