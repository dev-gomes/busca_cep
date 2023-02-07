<template>
    <form>
        <input v-model="cep" placeholder="Qual o CEP para pesquisa de informações?" v-mask="'#####-###'" />
        <button v-on:click="handleGetApiData">
            <AppLoading v-if="isLoading" />
            <v-icon v-if="!isLoading" name="fa-search" fill="#ffffff" />
        </button>
    </form>
    <p v-if="errorMessage"><b>{{ errorMessage }}</b></p>
    <section v-if="address">
        <h1>Veja abaixo o endereço completo do CEP {{ address.cep }}</h1>
        <div>
            <v-icon name="bi-house-door-fill" fill="#24ACCA" />
            <p>
                {{ address.bairro != '' ? address.cidade + ',' : address.cidade }}
                {{ address.rua != '' ? address.bairro + ',' : address.bairro }}
                {{ address.complemento != '' ? address.rua + ',' : address.rua }}
                {{ address.complemento }}
            </p>
        </div>
    </section>
</template>


<script>
import api from '@/services/api.js';

import AppLoading from '@/components/AppLoading.vue';

export default {
    name: 'VueForm',
    components: {
        AppLoading
    },
    data() {
        return {
            cep: '',
            address: '',
            errorMessage: '',
            isLoading: false
        }
    },
    methods: {
        handleGetApiData: function (event) {
            event.preventDefault();

            this.cep = this.cep.replace('-', '')

            if ((this.cep + '').length === 8) {
                api.get(`/${this.cep}/json`).then(response => {
                    this.isLoading = true;
                    if (!response.data.erro) {
                        let formatApiResponse = { cep: response.data.cep, cidade: response.data.localidade, bairro: response.data.bairro, rua: response.data.logradouro, complemento: response.data.complemento }
                        
                        this.address = formatApiResponse;
                        this.errorMessage = ''
                    } else {
                        this.errorMessage = 'Puts, não conseguimos encontrar nenhum endereço pro CEP informado'
                        this.address = ''
                    }
                    this.isLoading = false;
                })
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    justify-content: center;

    margin-bottom: 20px;
}

input {
    width: 400px;
    height: 50px;

    border: 0;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);

    padding: 0 0 0 20px;
    margin-bottom: 10px;

    outline: none;
}

button {
    height: 50px;
    width: 50px;

    border: 0;

    background-color: #24ACCA;
}

button:hover {
    transition: .3s;
    cursor: pointer;
    filter: brightness(.9);
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    align-items: center;
    
}

section h1 {
    padding: 10px;
    
    color: #373D40;

    text-align: center;

    font-size: 16px;
}

section p {
    padding: 0px 10px;

    color: #555555;

    text-align: center;
}

section div {
    display: flex;
    gap: 6px;
}

@media (max-width: 600px) {
  input {
    width: 300px;
  }
}

</style>