<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <div>
          <h3 style="font-weight: bold">Painel de Prazos</h3>
        </div>
      </template>
       <template #end>
        <div style="margin-right:45%">
          <Button label="Sair" @click="logout"/>
        </div>
      </template>
    </Menubar>
    <div class="conten">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: this.$route.params.usuario,
      tipo: null,
      items: [
        { label: "Produtividade", icon: "pi pi-fw pi-home", to: "/template" },
        {
          label: "Prazos",
          icon: "pi pi-fw pi-calendar",
          to: "/template/prazos"
        },
        {
          label: "Configurações",
          icon: "pi pi-fw pi-cog",
          to: "/template/config"
        }
      ]
    };
  },
  methods: {
    logout(){
      localStorage.removeItem("token");
       this.$store.state.token = null
       this.$router.push("/")

    }
  }
};
</script>

