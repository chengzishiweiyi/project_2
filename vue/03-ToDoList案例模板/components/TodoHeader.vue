<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
  </div>
</template>

<script>
export default {
  name:'TodoHeader',
  props:['addTodo'],
  methods:{
    uuid(){
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },
    add(e){
      const todoObj = {id:this.uuid(),  title:e.target.value,  complete:false}
      this.addTodo(todoObj);
      e.target.value = '';
    }
  }
}
</script>

<style>

.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>

