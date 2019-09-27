<template>
  <v-container
    id="goals"
    class="py-5"
    tag="section"
    vinho--text
  >
    <heading>Nossas Campeãs</heading>

    <v-row>
      <v-col
        v-for="(feature, i) in features"
        :key="i"
        class="d-flex"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          outlined
          max-width="100%"
        >
          <v-img :src="feature.src" />
          <v-card-title
            class="align-start mb-n3"
            style="min-height: 88px;"
            v-text="feature.title"
          />
          <v-card-text
            class="pb-5 pt-3"
            v-text="feature.text"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Heading from './Heading'

export default {
  components: {
    Heading
  },
  data: () => ({
    features: [
      {
        title: 'Buddemeyer',
        text: 'Sempre com foco nas tendências mundiais de moda, qualidade e excelência na fabricação de novos produtos, a Buddemeyer conquistou a liderança nacional no segmento top do mercado de cama, mesa e banho, além de ser reconhecida como marca de qualidade nos países para onde exporta.',
        src: '/static/home/budd/Princess-2019-1270x758.jpg'
      },
      {
        title: 'DelRio',
        text: 'Há 50 anos no setor de lingerie, a empresa fez parte da história da evolução das roupas íntimas e hoje está entre as três maiores fabricantes de lingerie do Brasil. A DelRio acompanha as tendências da moda mundial e está sempre atenta ao seu público. Sua equipe de designers desenvolve estampas exclusivas seguindo um processo criativo contínuo, resultando em linhas de produtos modernas, atuais e de altíssima qualidade.',
        src: '/static/home/delrio/delrio_9715_posts_blog_noivas_v1_-_post_2_0.png'
      },
      {
        title: 'Boutique de Aromas',
        text: 'Para cada sentido uma sensação, para cada sensação um aroma e para cada aroma uma lembrança. Inspirar o bem viver e encantar a vida das pessoas através das essências é a missão da Boutique de Aromas.',
        src: '/static/home/boutique/banner1.jpg'
      }
    ]
  })
}
</script>
