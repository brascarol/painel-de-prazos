<template>
  <div style="margin:2%">
    <div
      class="p-col-12"
      style="background: #f8f9fa;
            color: #495057;
            border: 1px solid #e9ecef;
            border-width: 0 0 1px 0;
            padding: 1rem 1rem;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            font-weight: 600;"
    >
      <div style="text-align:center">Filtros</div>
    </div>
    <div class="p-fluid p-formgrid p-grid" style="background: #ffffff;padding: 1%">
      <div class="p-field p-col-4">
        <label style="width:100%">
          Ente
          <Dropdown
            style="width:100%"
            v-model="ente"
            :filter="true"
            :showClear="true"
            :options="entes"
            optionLabel="nome"
          />
        </label>
      </div>
      <div class="p-field p-col-4">
        <label style="width:100%">
          Período
          <Dropdown
            style="width:100%"
            :filter="true"
            :showClear="true"
            :options="periodos"
            optionLabel="descricao"
            v-model="periodo"
          />
        </label>
      </div>
      <div class="p-field p-col-1" style="padding-top:7px">
        <label style="width:100%">
          Exercício
          <InputNumber v-model="exercicio" />
        </label>
      </div>
    </div>

    <DataTable :value="prazos" style="margin-top:1%">
      <template #header>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-4">
            <Button
              style="width:auto"
              icon="pi pi-plus"
              class="p-button-success"
              label="Novo Prazo"
              @click="novoPrazo"
              :disabled="isSelected()"
            />
          </div>
          <div class="p-field p-col-4">
            <div style="text-align:center">Histórico de Acordos</div>
          </div>
        </div>
      </template>
    </DataTable>

    <Dialog
      :visible.sync="dialogVisible"
      header="Incluir Prazo"
      :modal="true"
      :style="{width: '50vw'}"
    >
      <div class="p-cardialog-content">
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-col-6">
            <label for="tipoAcao">Tipo da Ação</label>
          </div>
          <div class="p-col-6">
            <label>Quantidade</label>
          </div>
        </div>
      </div>
      <template #footer>
        <div style="text-align:center">
          <Button label="Salvar" class="p-button-success" @click="salvarAcao" />
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
      entes: [],
      ente: null,
      periodos: [],
      periodo: null,
      prazos: [],
      exercicio: null,
      dialogVisible: false
    };
  },
  mounted() {
    ApiService.getEntes().then((res) => (this.entes = res.data));
    ApiService.getPeriodos().then((res) => (this.periodos = res.data));
  },
  methods: {
    novoPrazo() {
        this.dialogVisible = true
    },
    isSelected() {
      if (this.ente != null && this.periodo != null && this.exercicio != null) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>