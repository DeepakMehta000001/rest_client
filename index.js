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
          //var articles = [];
          for(var i=0;i<response.data.articles.length;++i)
          {
            this.articles.push({"id": i+1, "title": response.data.articles[i].title})
          }          
          //this.articles = articles
          console.log(response.data.articles.length)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  })
  