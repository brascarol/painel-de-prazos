<template>
  <div style="heigth: 100%; width:100%; margin: 2%; background-color: #ffffff">
    <Carousel
      :value="entes"
      :numVisible="1"
      :numScroll="1"
      class="custom-carousel"
      :circular="true"
      :autoplayInterval="10000"
    >
      <template #header>
        <div style="margin:2%; text-align:center"></div>
      </template>
      <template #item="slotProps">
        <div>
          <div style="text-align:center">
            <h2>{{slotProps.data.nome}}</h2>
          </div>
          <div style=" padding-top: 2%">
            <ProgressBar />
          </div>
          <div style=" padding-top: 2%">
          <DataTable class="p-field p-col-12">
            <Column field="code" header="Descrição"></Column>
            <Column field="code" header="Referência"></Column>
            <Column field="code" header="Prazo"></Column>
            <Column header="Status">
            </Column>
          </DataTable>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import ApiService from "../services/api";

export default {
  data() {
    return {
      entes: [],
    };
  },
  mounted() {
    ApiService.getEntes().then((res) => (this.entes = res.data));
    ApiService.getPeriodos().then((res) => (this.periodos = res.data));
  },
};
</script>

<style lang="scss" scoped>
.customer-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;

  &.status-pendente {
    background-color: #ffcdd2;
    color: #c63737;
  }

  &.status-vigente {
    background-color: #a0ca86;
    color: #244610;
  }

  &.status-encerrado {
    background-color: #b3e5fc;
    color: #23547b;
  }
}
</style>