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
    <div class="p-fluid p-formgrid p-grid" style="background: #ffffff; padding: 1%">
      <div class="p-field p-col-3">
        <label style="width:100%; margin-bottom:0%">Ente</label>
        <Dropdown v-model="filtro.ente" :options="entes" optionLabel="nome" />
      </div>
      <div class="p-field p-col-3">
        <label style="width:100%">
          Frequência
          <Dropdown
            style="width:100%"
            :filter="true"
            :showClear="true"
            :options="frequencias"
            optionLabel="descricao"
            v-model="filtro.frequencia"
          />
        </label>
      </div>
      <div class="p-field p-col-2">
        <label style="width:100%">
          Período
          <Dropdown
            style="width:100%"
            :filter="true"
            :showClear="true"
            :options="periodos"
            optionLabel="descricao"
            v-model="filtro.periodo"
          />
        </label>
      </div>
      <div class="p-field p-col-3">
        <label style="width:100%">
          Obrigação
          <Dropdown
            style="width:100%"
            :filter="true"
            :showClear="true"
            :options="obrigacoes"
            optionLabel="descricao"
            v-model="filtro.obrigacao"
          />
        </label>
      </div>
      <div class="p-field p-col-1">
        <label style="width:100%">
          Exercício
          <InputNumber v-model="filtro.exercicio" />
        </label>
      </div>
    </div>

    <DataTable :value="remessas" style="margin-top:1%">
      <template #header>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-4">
            <Button
              style="width:auto"
              icon="pi pi-plus"
              class="p-button-success"
              label="Novo Prazo"
              @click="novoPrazo"
            />
          </div>
          <div class="p-field p-col-4">
            <div style="text-align:center">Histórico de Prazos</div>
          </div>
        </div>
      </template>
    </DataTable>

    <Dialog
      :visible.sync="dialogVisible"
      header="Incluir Prazo"
      :modal="true"
      :style="{width: '60vw'}"
      :contentStyle="{overflow: 'visible'}"
      :closable="true"
    >
      <div class="p-cardialog-content">
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-col-4">
            <label>Ente</label>
            <MultiSelect v-model="remessa.ente" :options="entes" optionLabel="nome" />
          </div>
          <div class="p-col-4">
            <label style="width:100%">
              Frequência
              <Dropdown
                style="width:100%"
                :filter="true"
                :showClear="true"
                :options="frequencias"
                optionLabel="descricao"
                v-model="remessa.frequencia"
              />
            </label>
          </div>
          <div class="p-col-4">
            <label>Período</label>
            <Dropdown
              style="width:100%"
              :filter="true"
              :showClear="true"
              :options="periodos"
              optionLabel="descricao"
              v-model="remessa.periodo"
            />
          </div>
          <div class="p-col-6" style="margin-top:7px">
            <label>Obrigação</label>
            <Dropdown
              :editable="true"
              style="width:100%"
              :filter="true"
              :showClear="true"
              :options="obrigacoes"
              optionLabel="descricao"
              v-model="remessa.obrigacao"
            />
          </div>
          <div class="p-col-3" style="margin-top:7px">
            <label style="width:100%; margin-top:10px">
              Exercício
              <InputNumber v-model="remessa.exercicio" />
            </label>
          </div>
          <div class="p-col-3" style="margin-top:7px">
            <label>
              Prazo
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-calendar"></i>
                </span>
                <Calendar v-model="remessa.prazo" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <template #footer>
        <div style="text-align:center">
          <Button label="Salvar" class="p-button-success" @click="salvarRemessa" />
          <Button label="Cancelar" class="p-button-danger" @click="cancelar" />
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
      entes: null,
      periodos: [],
      frequencias: [],
      remessas: [],
      obrigacoes: [],
      selectedFrequencia: null,
      dialogVisible: false,
      filtro: {
        ente: null,
        frequencia: this.selectedFrequencia,
        periodo: null,
        obrigacao: null,
        exercicio: null,
        prazo: null,
      },
      remessa: {
        ente: null,
        periodo: null,
        obrigacao: null,
        exercicio: null,
        prazo: null,
      },
    };
  },
  mounted() {
    ApiService.getEntes().then((res) => (this.entes = res.data));
    ApiService.getFrequencia().then((res) => (this.frequencias = res.data));
    ApiService.getRemessas(this.filtro).then(
      (res) => (this.remessas = res.data)
    );
  },
  watch: {
    selectedFrequencia: function () {
      ApiService.getPeriodos(this.frequencia.frequenciaId).then(
        (res) => (this.periodos = res.data)
      );
    },
    filtro: function () {
      ApiService.getRemessas(this.filtro).then(
        (res) => (this.remessas = res.data)
      );
    },
  },
  methods: {
    novoPrazo() {
      this.dialogVisible = true;
    },
    cancelar() {
      this.dialogVisible = false;
    },
    isSelected() {
      if (this.ente != null && this.periodo != null && this.exercicio != null) {
        return false;
      } else {
        return true;
      }
    },
    salvarRemessa() {
      if (this.remessa.obrigacao.obrigacaoId == null) {
        ApiService.postObrigacao(this.remessa.obrigacao).then(
          (res) => (this.remessa.obrigacao = res.data)
        );
      }
      ApiService.postRemessa(this.remessa)
        .then(
          this.$toast.add({
            severity: "success",
            summary: "Prazo salvo com sucesso",
            life: 3000,
          })
        )
        .catch(
          this.$toast.add({
            severity: "error",
            summary: "Erro ao salvar",
            life: 3000,
          })
        );
    },
  },
};
</script>