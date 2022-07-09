<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @change="handleChange" :checked = "localIsAllChecked"/>
      </label>
      <span>
          <span>已完成{{ localTodosCompleteNum }}</span> / 全部{{ localTodosNum }}
        </span>
        <button class="btn btn-danger" v-on:click="localDelAllCompleteTodo">清除已完成任务</button>
     </div>
</template>

<script>
export default {
  name:'TodoFooter',
  props:['checkedAll','todosNum','todosCompleteNum','isAllChecked','delAllCompleteTodo'],
  methods:{
    handleChange(e){
      this.checkedAll(e.target.checked);
    },
    localDelAllCompleteTodo(){
      this.delAllCompleteTodo();
    },
  },
  computed:{
    localTodosNum(){
      return this.todosNum();
    },
    localTodosCompleteNum(){
      return this.todosCompleteNum();
    },
    localIsAllChecked(){
      return this.isAllChecked();
    }
  }

}
</script>

<style>

.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>

