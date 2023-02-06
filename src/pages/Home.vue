<template>
    <section>
        <AppLogo />
        <h1>Encontre endereços pela plataforma</h1>
        <p>Veja o <b>endereço completo</b> do CEP selecionado</p>
        <AppForm />
    </section>
</template>

<script>
import AppForm from '@/components/AppForm.vue';
import AppLogo from '@/components/AppLogo.vue';

export default {
    name: 'App',
    components: {
        AppForm,
        AppLogo
    }
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section h1 {
  color:#373D40;

  font-size: 22px;

  padding: 0px 10px;

  text-align: center;

  line-break: auto;
}

section p {
  margin: 16px 0px 32px 0;

  color: #555555;

  text-align: center;
}
</style>