<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="user"
      ref="formRef"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item prop="account" label="用户名">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        />
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          v-model="user.password"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="handleSubmit(formRef)"
          >确认</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormRules, FormInstance } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';

const user = reactive({
  account: 'admin',
  password: 'admin',
})
const formRef = ref<FormInstance>()
const loading = ref(false)
const router = useRouter()
const route = useRoute()

const rules = reactive<FormRules>({
  account: [
    { required: true }
  ],
  password: [
    { required: true }
  ]
})

const handleSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      let redirect = route.query.redirect
      if (typeof redirect !== 'string') redirect = '/'
      router.replace(redirect)
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bbbeca;
  .el-form {
    background-color: #fff;
    border-radius: 4px;
    width: 30%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
