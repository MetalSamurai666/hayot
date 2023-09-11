import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainId', () => {
    const cats = ref([
        {
            id: 1,
            url: 'dogs',
            title: 'Возьми собаку'
        },
        {
            id: 2,
            url: '/',
            title: 'Стань волонтёром'
        },
        {
            id: 3,
            url: '/',
            title: 'Уроки доброты'
        },
        {
            id: 4,
            url: '/',
            title: 'Полезно знать'
        },
        {
            id: 5,
            url: '/',
            title: 'О приюте'
        },
    ])

        return { 
            cats,
            
        }
    }
)