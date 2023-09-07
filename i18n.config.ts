export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ru',
    messages: {
        ru: {
            support: 'Поддержать приют',
            dogs_number: '6000+ собак <br> <span>на содержании</span>',
            take_dog: 'Взять собаку!',
            take_pet: 'Забрать питомца из приюта',
            attached_number: '2500+ хвостиков <br> <span>пристроено</span> за 5 лет'
        },
        uz: {
            support: 'Boshpanani qo‘llab-quvvatlash',
            dogs_number: '6000 dan <br> <span>ortiq itlar</span>',
            take_dog: 'Kuchukni olish!',
            take_pet: 'Uy hayvonini boshpanadan olish',
            attached_number: '2500 dan ortiq quyruq <br> 5 yil ichida <span>biriktirilgan<span/>'
        },
        en: {
            support: 'Support the shelter',
            dogs_number: '6000+ dogs  <br> <span>on maintenance</span>',
            take_dog: 'Take a dog!',
            take_pet: 'Pick up a pet from a shelter',
            attached_number: '2500+ tails <br> <span>attached <span/>in 5 years'
        }
    }
}))