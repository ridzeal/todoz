<template>
  <div class='ui centered card'>
    <md-card md-with-hover class="content" v-show="!isEditing">
      <md-card-header>
        <div class="md-title">{{ todo.title }}</div>
        <div class="md-subhead" v-show="!isEditing && todo.done">Completed</div>
        <div class="md-subhead" v-show="!isEditing && !todo.done">Pending</div>
      </md-card-header>

      <md-card-content>
        {{ todo.project }}
      </md-card-content>

      <md-card-actions>
        <md-button @click="showForm">Edit</md-button>
      </md-card-actions>
    </md-card>

    <md-card md-with-hover class="content" v-show="isEditing">
      <md-card-content>
        <md-field>
          <label>Title</label>
          <md-input v-model="todo.title"></md-input>
        </md-field>
        <md-field>
          <label>Project</label>
          <md-input v-model="todo.project"></md-input>
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button @click="hideForm">Save</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    data () {
      return {
        isEditing: false
      }
    },
    methods: {
      showForm () {
        this.isEditing = true
      },
      hideForm () {
        this.isEditing = false
      }
    }
  }
</script>

<style scoped>
.md-card {
  margin: 20px;
}
</style>
