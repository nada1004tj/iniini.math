<<template>
  <div>
    <Print></Print>
    <button @click="showLog">연락처 1건 조회</button>
    <Axios v-on:show-log="fetchData"></Axios>
    {{ result }}
  </div>
</template>

<script>
import Vue from 'vue'
import Axios from '@/components/Axios'
import Print from '@/components/Print'


export default {
  name: 'SingleDigit',
  data() {
    return {
        result: "cc"
    }
  },
  components: {
    'Print': Print,
    'Axios': Axios
  },
  methods: {
    showLog:function(){
      this.$emit('show-log');
    }
  }
}
</script>
