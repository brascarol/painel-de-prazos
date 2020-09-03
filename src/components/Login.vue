<template>
  <div class="login-container">
    <div class="content">
       <div class="title">
          <h2>Painel de Prazos</h2>
        </div>
      <div class="form">
        <div class="p-fluid" style="width: 85%; padding-top:7%">
          <label for="firstname">Login</label>
          <InputText id="firstname" type="text" v-model="username" />
        </div>
        <div class="p-fluid" style="width: 85%; padding-top:5%">
          <label for="lastname">Senha</label>
          <InputText
            type="password"
            v-model="password"
            @keyup.native.enter="redirect"
          />
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
      username: "",
      password: "",
      messages: []
    };
  },
  methods: {
    redirect() {
      this.$router.push({
         name: "principal"
      });
             
      // var usuario = new FormData();
      // usuario.append("username", this.username);
      // usuario.append("password", this.password);
      // usuario.append("grant_type", "password");

      // this.$store
      //   .dispatch("efetuarLogin", usuario)
      //   .then(response => {
      //     this.response = response;

      //     this.$router.push({
      //       name: "principal",
      //       params: {
      //         usuarioId: this.username
      //       }
      //     });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     this.$toast.add({
      //       severity: "error",
      //       summary: "Erro",
      //       detail: "Matrícula e/ou senha inválido",
      //       life: 3000
      //     });
      //     console.log(err.message);
      //   });
    }
  }
};
</script>

<style src="../assets/styles/login.css">
.p-toast.p-toast-topright {
  z-index: 1000;
  top: 70px;
}
</style>