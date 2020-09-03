<template>
  <div style="margin:2%">
    <DataTable>
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
    </DataTable>

    <Dialog
      :visible.sync="dialogVisible"
      header="Incluir Ação ao Plano de Trabalho"
      :modal="true"
      :style="{width: '50vw'}"
    >
      <div class="p-cardialog-content">
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-col-6">
            <label for="tipoAcao">
              Nome
              <InputText v-model="usuario.nome" />
            </label>
          </div>

          <div class="p-col-6">
            <label>
              Senha
              <InputText type="password" v-model="usuario.senha" />
            </label>
          </div>

          <div class="p-field p-col-6">
            <label>
              Data Inicial
              <div class="p-inputgroup">
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

          <div class="p-field p-col-6">
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
export default {
  data() {
    return {
      dialogVisible: false,
      usuario: {
        nome: null,
        senha: null,
        dataInicio: null,
        dataFim: null
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
  methods: {
    novoUsuario() {
        this.dialogVisible = true
    },
    salvarUsuario(){
        this.dialogVisible = false
    },
    cancelar() {
      this.dialogVisible = false
    },
  },
};
</script>