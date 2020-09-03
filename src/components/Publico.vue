<template>
  <div style="heigth: 100%; width:100%; margin: 2%; background-color: #ffffff">
    <Carousel
      :numVisible="3"
      :numScroll="1"
      class="custom-carousel"
      :circular="true"
      :autoplayInterval="6000"
    >
      <template #header>
        <div style="margin:2%; text-align:center">
        <h2>AMARANTE DO MA - CNPJ: 06.157.846/0001-16</h2>
        </div>
      </template>
      <template #item>
<div>
  <h2> aui</h2>

  <ProgressBar/>
  
</div>

      </template>
    </Carousel>
  </div>
</template>