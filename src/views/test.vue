<script src="https://cdn.jsdelivr.net/vue/latest/vue.js"></script>
<template>
  <div id="app">
    <h4>User</h4>
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Select All<input v-model="allSelected" type="checkbox" @click="selectAll" /></th>
        </tr>
        <tr v-for="user in users" :key="user">
          <td>{{ user.name }}</td>
          <td><input v-model="userIds" type="checkbox" :value="user.id" @click="select" /></td>
        </tr>
      </table>
    </div>

    <span>Selected Ids: {{ userIds }}</span>
  </div>
</template>

<script>
new Vue({
  el: '#app',
  data: {
    users: [
      { id: 'Shad', name: 'Shad' },
      { id: 'Duane', name: 'Duane' },
      { id: 'Myah', name: 'Myah' },
      { id: 'Kamron', name: 'Kamron' },
      { id: 'Brendon', name: 'Brendon' }
    ],
    selected: [],
    allSelected: false,
    userIds: []
  },
  methods: {
    selectAll: function () {
      this.userIds = []

      if (this.allSelected) {
        for (user in this.users) {
          this.userIds.push(this.users[user].id.toString())
        }
      }
    },
    select: function () {
      this.allSelected = false
    }
  }
})
</script>

<style></style>
