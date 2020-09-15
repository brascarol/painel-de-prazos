<template>
  <div style="margin:2%">
    <DataTable
      :value="usuarios"
      data-key="$_id"
      editMode="row"
      :editingRows.sync="editingRows"
      @row-edit-init="onRowEditInit"
      @row-edit-cancel="onRowEditCancel"
    >
      <template #header>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-4">
            <Button
              style="width:auto"
              icon="pi pi-plus"
              class="p-button-success"
              label="Novo Usuário"
              @click="novoUsuario"
            />
          </div>
          <div class="p-field p-col-4">
            <div style="text-align:center">Permissões</div>
          </div>
        </div>
      </template>
      <Column field="nome" header="Nome" :sortable="true" />
      <Column field="login" header="Login" />
       <Column field="login" header="Senha" />
       <Column field="login" header="Tipo" />
      <Column field="dataInicio" header="Data Inicial">
        <template #body="slotProps">
          <p>{{slotProps.data.dataInicio.toLocaleDateString("pt-BR")}}</p>
        </template>
      </Column>
      <Column field="dataFim" header="Data Final">
        <template #body="slotProps">
          <p>{{slotProps.data.dataFim.toLocaleDateString("pt-BR")}}</p>
        </template>
      </Column>
     
      <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"></Column>
    </DataTable>

    <Dialog
      :visible.sync="dialogVisible"
      header="Novo usuário"
      :modal="true"
      :style="{width: '50vw'}"
      :contentStyle="{overflow: 'visible'}"
    >
      <div class="p-cardialog-content">
        <div class="p-grid p-fluid">
          <div class="p-col-6">
            <label for="tipoAcao">
              Nome
              <InputText v-model="usuario.nome" />
            </label>
          </div>

           <div class="p-col-6">
            <label>
              Tipo de Permissão
              <Dropdown />
            </label>
          </div>

          <div class="p-col-6">
            <label for="Login">
              Login
              <InputText v-model="usuario.login" />
            </label>
          </div>

          <div class="p-col-6">
            <label>
              Senha
              <InputText type="password" v-model="usuario.senha" />
            </label>
          </div>

          <div class="p-col-6">
            <label>
              Data Inicial
              <div class="p-inputgroup" style="width:100%">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-calendar"></i>
                </span>

                <Calendar
                  :locale="pt"
                  dateFormat="dd/mm/yy"
                  style="width:100%"
                  v-model="usuario.dataInicio"
                />
              </div>
            </label>
          </div>

          <div class="p-col-6">
            <label>
              Data Fim
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-calendar"></i>
                </span>
                <Calendar
                  :locale="pt"
                  dateFormat="dd/mm/yy"
                  style="width:100%"
                  v-model="usuario.dataFim"
                />
              </div>
            </label>
          </div>

        </div>
      </div>
      <template #footer>
        <div style="text-align:center">
          <Button label="Salvar" class="p-button-success" @click="salvarUsuario" />
          <Button label="Cancelar" @click="cancelar" class="p-button-danger" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import ApiService from "../services/api";

export default {
  data() {
    return {
      dialogVisible: false,
      usuarios: [],
      editingRows: [],
      originalRows: null,
      usuario: {
        nome: "",
        login: "",
        senha: "",
        dataInicio: null,
        dataFim: null,
        tipo: null,
      },
      pt: {
        firstDayOfWeek: 0,
        dayNames: [
          "Domingo",
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado",
        ],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        monthNames: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        monthNamesShort: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dec",
        ],
        today: "Hoje",
        dateFormat: "dd/mm/yy",
        clear: "Limpar",
        weekHeader: "Sm",
      },
    };
  },
  mounted() {
    ApiService.getUsuarios().then((res) => (this.usuarios = res.data));
  },
  methods: {
    novoUsuario() {
      this.dialogVisible = true;
    },
    salvarUsuario() {
      let index = this.obterIndex(this.usuario);
      let usuarios = [...this.usuarios];
      if (index === -1) usuarios.push(this.usuario);
      else usuarios[index] = this.usuario;

      this.usuarios = usuarios;
      this.dialogVisible = false;
    },
    obterIndex(usuario) {
      let index = -1;
      for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].$_id === usuario.$_id) {
          index = i;
          break;
        }
      }
      return index;
    },
    cancelar() {
      this.dialogVisible = false;
    },
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.usuarios[event.index] };
    },
    onRowEditCancel(event) {
      this.$vue.set(this.usuarios, event.index, this.originalRows[event.index]);
    },
  },
};
</script>