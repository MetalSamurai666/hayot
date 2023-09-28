<script setup>
    const heading = ref({
        title: 'Поддержите приют Хаёт',
        info: 'Ваше пожертвование поможет нам продолжать спасать собак с улиц, содержать уже имеющихся в приюте, стерилизовать их, улучшать условия содержания в приюте, повышать осведомлённость людей, и растить зоозащитное сообщество. Ежемесячные траты приюта'
    })
</script>

<template>
    <NuxtLayout>
        <div class="donate">
            <Heading
                :heading="heading"
            />
            <DonateInfo />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">

</style>