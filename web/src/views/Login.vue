<template>
    <div>
        <el-card header="登录" class="login-card">
            <el-form @submit.native.prevent="login">
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="model.passwords"></el-input>
                </el-form-item>
                <el-form-item align="center">
                    <el-button type="primary" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                model: {}
            }
        },
        watch: {
            $route(to, from) {
                console.log(to)
            }
        },
        methods: {
            async login() {
                const res = await this.$http.post('login', this.model)
                if (res) {
                    localStorage.token = res.data.token
                    localStorage.username = res.data.username
                    this.$router.push('/home')
                }
            }
        }
    }
</script>

<style scoped>
    .login-card {
        width: 25rem;
        margin: 10rem auto;
    }
</style>