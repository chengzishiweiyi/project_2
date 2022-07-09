<template>
  <div class="todo-container">
    <div class="todo-wrap">

      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :delTodo="delTodo"/>
      <TodoFooter :checkedAll="checkedAll" :todosNum="todosNum" :todosCompleteNum="todosCompleteNum" :isAllChecked="isAllChecked" :delAllCompleteTodo="delAllCompleteTodo"/>

    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  data(){
    return{
      todos: [
        { id: '001',  title: '吃饭', complete: true },
        { id: '002', title: '睡觉', complete: false },
        { id: '003', title: '敲代码', complete: true }
      ]
    }
  },
  components:{TodoHeader,TodoList,TodoFooter},
  methods:{
    /*新增*/
    addTodo(todo){
      this.todos.unshift(todo);
    },
    /*删除*/
    delTodo(id){
      this.todos = this.todos.filter(function (value) {
        return value.id==id?false:true;
      });
    },
    /*删除*/
    updateTodo(id){
      this.todos.forEach(function(item){
        if(item.id==id){
          item.complete = !item.complete;
          return;
        }
      });
    },
    /*删除已完成*/
    delAllCompleteTodo(){
      this.todos = this.todos.filter(function (value) {
        return value.complete?false:true;
      });
    },
    /*判断是否全选*/
    isAllChecked(){
      return this.todos.length > 0 && this.todos.every(function (x) {
        return x.complete
      });
    },
    /*全选*/
    checkedAll(isShecked){
      this.todos.forEach(function(item){
        item.complete = isShecked;
      });
    },
    /*总数 */
    todosNum(){
      return this.todos.length;
    },
    /*完成数 */
    todosCompleteNum(){
      return this.todos.reduce(function(accumulator, currentValue){
        return accumulator+(currentValue.complete ? 1 : 0)
      },0);
    },
  }
}
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
