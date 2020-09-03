<template>
  <div style="margin: 2%">
    <div>
      <h3>Progresso de {{ente.nome}}</h3>
      <ProgressBar></ProgressBar>
    </div>
    <TabView style="padding-top:2%">
      <TabPanel header="TCE">
        <div style="text-align:center;">
          <DataTable style="width:100%">
            <template #header>
              <div class="table-header">Checklist de Prazos</div>
            </template>
            <template #empty>Sem Resultados</template>
            <template #loading>Carregando ...</template>
            <Column header="Sigla">
              <template></template>
            </Column>
            <Column
              field="date"
              header="Data"
              :sortable="true"
              filterMatchMode="custom"
              :filterFunction="filterDate"
            >
              <template>
                <span class="p-column-title">Data</span>
                <span></span>
              </template>
            </Column>
            <Column header="Ações">
              <template #body>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="./upload.php"
                  accept="image/*"
                  :maxFileSize="10000000"
                  @upload="onUpload"
                  :auto="true"
                  chooseLabel="Upload"
                />
              </template>
            </Column>
          </DataTable>
        </div>
      </TabPanel>
      <TabPanel header="SICONF"></TabPanel>
      <TabPanel header="Processos"></TabPanel>
      <TabPanel header="Prestações de Contas"></TabPanel>
      <TabPanel header="Defesas"></TabPanel>
      <TabPanel header="SAE "></TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {
  props: {
    ente: null,
  },
  methods: {
		onUpload() {
			this.$toast.add({severity: 'info', summary: 'Success', detail: 'Arquivo Enviado', life: 3000});
		}
  }
};
</script>