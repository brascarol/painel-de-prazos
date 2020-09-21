<template>
  <div class="login-container">
    <div class="content">
      <div class="title">
        <h2>Painel de Prazos</h2>
      </div>
      <div class="form">
        <div class="p-fluid" style="width: 85%; padding-top:7%">
          <label for="firstname">Login</label>
          <InputText id="firstname" type="text" v-model="usuario.login" />
        </div>
        <div class="p-fluid" style="width: 85%; padding-top:5%">
          <label for="lastname">Senha</label>
          <InputText type="password" v-model="usuario.senha" @keyup.native.enter="redirect" />
        </div>
      </div>
      <div class="btn">
        <Button class="p-button-success" label="Entrar" @click="redirect" />
      </div>
    </div>
    <div class="footer">
      <h4>
        © 2020 Meritus Assessoria Contábil
        Todos os Direitos Reservados
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        login: "",
        senha: "",
      },
      messages: []
    };
  },
  methods: {
    redirect() {

      this.$store
        .dispatch("efetuarLogin", this.usuario)
        .then((response) => {
          this.response = response;

          this.$router.push({
            name: "principal",
            params: {
              usuario: this.usuario
            },
          });
        })
        .catch((err) => {
          console.log(err);
          this.$toast.add({
            severity: "error",
            summary: "Erro",
            detail: "Matrícula e/ou senha inválido",
            life: 3000,
          });
          console.log(err.message);
        });
    },
  },
};
</script>

<style src="../assets/styles/login.css">
.p-toast.p-toast-topright {
  z-index: 1000;
  top: 70px;
}
</style>