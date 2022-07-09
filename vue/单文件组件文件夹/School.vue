<template>
  <!-- 写html -->
  <div class="demo">
    <div>
      <h2>
        学校名称：{{ name }} <br />
        学校位置：{{ address }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
name:"School",
  data() {
    return {
      name: "唐山学院",
      address: "唐山市路北区",
    };
  },
};
</script>

<style>
/* 写css */
.demo {
  background: green;
}
</style>