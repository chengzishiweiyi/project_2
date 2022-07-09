<template>
  <!-- 写html -->
  <div class="demo">
    <div>
      <h2>
        学生姓名：{{ studentName }} <br />
        学生年龄：{{ studentAge }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
name:"Student",
  data() {
    return {
      studentName: "张三",
      studentAge: "18",
    };
  },
};
</script>

<style>
/* 写css */
.demo {
  background: orange;
}
</style>