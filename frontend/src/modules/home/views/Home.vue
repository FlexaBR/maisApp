<template>
  <v-content class="py-5">
    <Jumbotron />
    <GetApp />
    <Fabricas />
    <v-container
      id="testimonials"
      class="py-5"
      tag="section"
    >
      <heading>Testemunhal</heading>

      <v-row>
        <v-col
          v-for="(testimonial, i) in testimonials"
          :key="i"
          cols="12"
          md="6"
        >
          <testimonial :testimonial="testimonial" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>

import Fabricas from './../components/Fabricas'
import GetApp from './../components/GetApp'
import Heading from './../components/Heading'
import Jumbotron from './../components/Jumbotron'
import Testimonial from './../components/Testimonial'

export default {
  name: 'Home',
  components: {
    Fabricas,
    GetApp,
    Heading,
    Jumbotron,
    Testimonial
  },

  data: () => ({
    highlightedTestimonial: {
      blurb: 'The complexities and challenges AlphaConstruction successfully overcame on our behalf includes substantial permit obstacles, coordination and selection support of all design and finish materials, and the diffculty of integrating existing and new structures.',
      person: 'Joe Malonagi',
      title: 'General Manager, Springfield Tower'
    },
    features: [
      {
        title: 'Award-winning architecture',
        text: 'Every achievement begins with a vision. It is built on a foundation of creative concepts and dreams to become something bigger and better. At AlphaConstruction we build with those who follow a vision, not a path.',
        src: '/static/feature1.png'
      },
      {
        title: 'Relentless pursuit of your vision',
        text: 'Our commitment to excellence and continous improvement, to building lasting relationships with our clients, and to the team members who create your vision, are the guiding principles that assure successful outcomes on every project we build.',
        src: '/static/feature2.png'
      },
      {
        title: 'Your vision - Our mission',
        text: 'To build an everlasting environment of trust with our clients and team members that will foster customer loyalty by delivering superior service and quality projects.',
        src: '/static/feature3.png'
      }
    ],
    testimonials: [
      {
        blurb: 'Para atingirmos os melhores resultados, comprar certo é fundamental. Precisamos acertar na escolha dos produtos, cores, quantidades e preços. Sucesso em nosso departamento significa giro de vendas, produtos que não param nas prateleiras, e para isso, a assessoria da Mais Representações foi e é fundamental. Compramos sempre na medida certa para nossos melhores resultados.',
        person: 'Nancy Swanson',
        title: 'Diretora de Compras, Cia Zaffari S.A.'
      },
      {
        blurb: 'Desde que conhecemos a Mais Rep nosso departamento de lyngerie teve um crescimento de 200%! A definição do mix de produtos e preços com a parceria da Mais foi essencial para nosso crescimento de vendas.',
        person: 'Anré Schraiber',
        title: 'Gerente de Compras, Lojas Pompéia'
      }
    ]
  })
}
</script>
