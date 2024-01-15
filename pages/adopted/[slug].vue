<script setup>
    const bread = ref({
        title: 'Пристроенные собаки'
    })

    const wrapper = ref({
        img: '/dogs/poster.png',
        title: 'Пристроенные собаки',
        info: 'С 2018 года пристроено более 2500 собак'
    })

    const list = ref({
        title: 'У нас 6000+ прекрасных собак и 16 осликов, которые ждут своего нового дома. Может, одна из них ваша?',
        filter: [
            {
                title: '#приветиздома'
            },
            {
                title: 'Август 2023'
            },
        ]
    })
</script>

<template>
        <div class="adoptedSingle">
            <Breadcrumbs
                :bread="bread"
            />
            <Wrapper 
                :wrapper="wrapper"
            />
            <CardList 
                :list="list"
            />
        </div>
</template>

<style lang="scss" scoped>
.adoptedSingle{
    background-color: #F2F2F2;
    .wrapper{
        &__box{
            height: auto !important;
            &::after{
                display: none !important;
            }
        }
        &__img{
            display: none !important;
        }
        &__text{
            color: #000 !important;
        }
    }

    @media (max-width: 600px) {
        .breadcrumbs{
            display: none;
        }
        .wrapper{
            &__box{
                height: 400px !important;
                &::after{
                    display: block !important;
                }
            }
            &__img{
                display: flex !important;
            }
            &__text{
                color: #fff !important;
            }
        }
    }
}
</style>