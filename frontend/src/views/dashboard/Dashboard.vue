<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="12">
        <base-material-card icon="mdi-earth" title="Global Sales by Top Locations">
          <v-row>
            <v-col cols="12" md="6" class="mt-10">
              <v-simple-table class="ml-2">
                <tbody>
                  <tr v-for="(sale, i) in sales" :key="i">
                    <td>
                      <v-img :src="sale.flag" width="18" />
                    </td>
                    <td v-text="sale.country" />
                    <td v-text="sale.salesInM" />
                    <td v-text="((sale.salesInM / totalSales) * 100).toFixed(2) + '%'" />
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>

            <v-col cols="12" md="6">
              <v-world-map :country-data="countryData" high-color="#838383" low-color="#BBBBBB" />
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>
      <UsuarioLogado />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  components: {
    UsuarioLogado: () => import("./comum/UsuarioLogado")
  },

  data() {
    return {
      countryData: {
        US: 2920,
        DE: 1390,
        AU: 760,
        GB: 690,
        RO: 600,
        BR: 550
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      sales: [
        {
          country: "USA",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png",
          salesInM: 2920
        },
        {
          country: "Germany",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png",
          salesInM: 1300
        },
        {
          country: "Australia",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png",
          salesInM: 760
        },
        {
          country: "United Kingdom",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png",
          salesInM: 690
        },
        {
          country: "Romania",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png",
          salesInM: 600
        },
        {
          country: "Brasil",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png",
          salesInM: 550
        }
      ]
    }
  },

  computed: {
    totalSales() {
      return this.sales.reduce((acc, val) => acc + val.salesInM, 0);
    }
  }
}
</script>
