<template>
  <div>

    <h3>What's Up {{ username }} </h3>
    <p class="todo--p1">Créer une liste de chose à faire</p>
    <p class="todo--p2">Qu'avez vous à faire ?</p>
    <input v-model="inputValue" class="input--text" type="text" placeholder="ex. faire une vidéo">
    <p class="todo--p3">Choisisez une catégorie</p>

    <div class="container">
      <div id="container" class="business" v-for="object in item" :key="object">
          <div v-if="object.itemName == 'Business' ">
            <div class="business-cercle">
              <input type="radio" @click="businessIsSelected()" name="radio">
            </div>
          </div>
          <div v-else>
            <div class="business-cercle">
              <input type="radio" @click="personalIsSelected()" name="radio">
            </div>
          </div>
          <p> {{ object.itemName }} </p>
      </div>
    </div>

    <button class="add--todo" type="button" @click="createATodo()">Add todo</button>

    <section class="div1" v-for="item in list" :key="item">
        <div class="to__do" v-if="item.status == 'Business'">
          <div class="div2" style="display: flex; gap: 10px; align-items: center;">
            <div class="businessCircle"></div>
            <p> {{ item.text }} </p>
          </div>
          <button id="delete" @click="deleteTodoElement(item._id)" class="deleteButton__btn">supprimer</button>
        </div>
        <div v-else class="to__do">
          <div class="div2" style="display: flex; gap: 10px; align-items: center;">
            <div class="personalCircle"></div>
            <p> {{ item.text }} </p>
          </div>
          <button id="delete" @click="deleteTodoElement(item._id)" class="deleteButton__btn">supprimer</button>
        </div>
    </section>

  </div>


</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      inputValue: '',
      selected: '',
      message: '',
      choose: '',
      list: [],
      API_BASE_URL: process.env.VUE_APP_API_URL
    }
  },

  computed: {
    ...mapState(
      ['username', 'item', 'todo__list']
    )
  },

  methods: {
    businessIsSelected() {
      this.selected = 'Business'
    },

    personalIsSelected() {
      this.selected = 'Personal'
    },

    deleteTodoElement(id) {
      const _url = this.API_BASE_URL + '/api/todo/delete/' + id;
      fetch(_url, { 
        method: 'DELETE',
      })
        .then((response) => response.json())
        .catch((error) => console.log(error))
        window.location.reload();
    },

    createATodo() {
      const _url = this.API_BASE_URL + '/api/todo/register';
      const _data = {
        text: this.inputValue,
        status: this.selected,
      };
      console.log(_data);
      fetch(_url, {method: 'POST', headers: {'Content-Type': 'application/json',}, body: JSON.stringify(_data)})
        .then((response) => response.json())
        .then((data) => {
          this.list.push(data)
        })
        .catch((error) => console.log(error))
        window.location.reload();
    },

    async getList() {
      const _url = this.API_BASE_URL + '/api/todo/add';
      const res = await fetch(_url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
      this.list = res.todos
      console.log(res.todos);
      console.log("j'ai récupéré les données" );
    }

  },

  mounted() {
    this.getList();  
    console.log(this.list);
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.to__do button
{
  background-color: crimson;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  font-family: 'poppins';
  justify-content: flex-start;
}
*{
  margin: 0;
}
.div1
{
  padding: 0;
}
.div2
{
  padding: 0;
}
h1 {
  margin: 0 0 0 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.todo--p1
{
  font-size: 14px;
  color: #8f8f8f;
}
.todo--p2
{
  margin-top: 30px;
  text-transform: uppercase;
}
.input--text
{
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-family: 'poppins';
  font-weight: 500;
  outline: none;
  color: #2c3e50;
}
.todo--p3
{
  margin-top: 30px;
}
.container
{
  padding: 20px 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
}
.business
{
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background-color: white;
  cursor: pointer;
  transition: .3s all ease-in;
}
.business-cercle
{
  -ms-transform: scale(1.8);
  -webkit-transform: scale(1.8);
  transform: scale(1.8);
}
.add--todo
{
  margin-top: 10px;
  font-weight: 500;
  width: 100%;
  padding: 13px;
  cursor: pointer;
  border: none;
  color: white;
  background-color: crimson;
  border-radius: 5px;
  font-family: 'poppins';
  font-size: 16px;
}
.to__do
{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
}
.to__do p
{
  max-width: 340px;
}
.businessCircle
{
  height: 20px;
  width: 20px;
  border-radius: 20px;
  border: solid #2c3e50 3px;
}
.personalCircle
{
  height: 20px;
  width: 20px;
  border-radius: 20px;
  border: solid crimson 3px;
}
</style>
