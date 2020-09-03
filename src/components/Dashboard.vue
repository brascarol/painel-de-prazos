<template>
  <div style="margin:2%">
    <Accordion>
      <AccordionTab header="Filtros">
        <div class="p-fluid p-formgrid p-grid" style="background: #ffffff;">
          <div class="p-field p-col-4">
            <label style="width:100%">
              Coordenador
              <Dropdown style="width:100%" :filter="true" :showClear="true" />
            </label>
          </div>
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
          <div class="p-field p-col-3" style="padding-top:8px">
            <label style="width:100%">
              Período
              <Dropdown style="width:100%" :filter="true" :showClear="true"  :options="periodos"
                optionLabel="descricao" v-model="periodo"/>
            </label>
          </div>
          <div class="p-field p-col-1" style="padding-top:7px">
            <label style="width:100%">
              Exercício
              <InputNumber />
            </label>
          </div>
        </div>
      </AccordionTab>
    </Accordion>

    <div
      class="p-fluid p-formgrid p-grid"
      style="background: #ffffff; margin-top: 1%; padding-bottom:8%"
    >
      <div class="p-fluid p-formgrid p-grid" style="padding-top:3%" v-if="!ente">
        <div class="p-field p-col-4">
          <Chart type="doughnut" :data="chartData" />
        </div>
        <DataTable class="p-field p-col-4">
          <Column field="code" header="Ente"></Column>
          <Column header="Progresso">
            <ProgressBar></ProgressBar>
          </Column>
        </DataTable>
        <Card class="p-field p-col-3">
          <template slot="content">
            <h3>Próximos prazos a vencer:</h3>
          </template>
        </Card>
      </div>
      <div v-else>
        <Ente :ente="ente" />
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/api";
import Ente from "../components/Ente";

export default {
  data() {
    return {
      entes: [],
      ente: null,
      periodos: [],
      periodo: null,
      chartData: {
        labels: ["A", "B", "C"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
          },
        ],
      },
    };
  },
  mounted() {
    ApiService.getEntes().then((res) => (this.entes = res.data));
    ApiService.getPeriodos().then((res) => (this.periodos = res.data));
  },
  watch: {
    ente: function () {
      ApiService.getProgresso().then((res) => (this.entes = res.data));
    },
  },
  components: {
    Ente,
  },
};
</script>