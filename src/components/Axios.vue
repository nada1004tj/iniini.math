<template>
  <div>
  </div>
</template>
<script>


export default {
  methods: {
    fetchData: function() {
        this.$axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((response) => {
                console.log(response.data);
                this.result = response.data
            })
    }
  }
}
</script>
