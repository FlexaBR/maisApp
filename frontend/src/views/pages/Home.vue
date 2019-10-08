<template>
  <div id="home" class="mb-12">
    <Jumbotron />
    <GetApp />
    <Fabricas />
    <v-container id="testimonials" class="py-5" tag="section" black--text>
      <heading>Testemunho</heading>
      <v-row>
        <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="12" md="6">
          <testimonial :testimonial="testimonial" />
        </v-col>
      </v-row>
    </v-container>
    <Contato />
    <div class="pt-6">
      <pages-core-footer />
    </div>
  </div>
</template>

<script>
import Contato from "./components/Contato"
import Fabricas from "./components/Fabricas"
import GetApp from "./components/GetApp"
import Heading from "./components/Heading"
import Jumbotron from "./components/Jumbotron"
import Testimonial from "./components/Testimonial"

export default {
  name: "PagesHome",
  components: {
    Contato,
    Fabricas,
    GetApp,
    Heading,
    Jumbotron,
    Testimonial,

    PagesCoreFooter: () => import("./components/core/Footer")
  },
  data: () => ({
    testimonials: [
      {
        blurb:
          "Para atingirmos os melhores resultados, comprar certo é fundamental. Precisamos acertar na escolha dos produtos, cores, quantidades e preços. Sucesso em nosso departamento significa giro de vendas, produtos que não param nas prateleiras, e para isso, a assessoria da Mais Representações foi e é fundamental. Compramos sempre na medida certa para nossos melhores resultados.",
        person: "Nancy Swanson",
        title: "Diretora de Compras, Cia Zaffari S.A."
      },
      {
        blurb:
          "Desde que conhecemos a Mais Rep nosso departamento de lyngerie teve um crescimento de 200%! A definição do mix de produtos e preços com a parceria da Mais foi essencial para nosso crescimento de vendas.",
        person: "André Schraiber",
        title: "Gerente de Compras, Lojas Pompéia"
      }
    ]
  })
}
</script>
