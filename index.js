new Vue({
    el: '#app',
    data () {
      return {
        articles: [],
        errors: [],
      }
    },
    mounted () {
      axios
        .get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=842c9f6a3c0140858c5eef2b0ad56d9d')
        .then(response =>  {
          for(var i=0;i<response.data.articles.length;++i)
          {
            this.articles.push(response.data.articles[i])
          }          
          console.log(response.data.articles[0].url)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  })
  