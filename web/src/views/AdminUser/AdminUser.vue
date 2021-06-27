<template>
    <div>
        <h2>{{id ? '编辑':'新建'}}管理员</h2>
        <el-form label-width="120px" style="width: 60%" @submit.native.prevent>
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.passwords"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "AdminUser",
        props: {
            id: {}
        },
        data() {
            return {
                model: {},
                parents: []
            }
        },
        created() {
            this.id && this.fetch()
        },
        methods: {
            async save() {
                if (this.id) {
                    const res = await this.$http.put(`rest/admin_users/${this.id}`, this.model)

                    this.$message({
                        type: 'success',
                        message: '修改成功'
                    })

                    this.$router.push('/admin_users/list')
                } else {
                    const res = await this.$http.post('rest/admin_users', this.model)

                    this.$message({
                        type: 'success',
                        message: '添加成功'
                    })

                    this.$router.push('/admin_users/list')
                }
            },
            async fetch() {
                const model = await this.$http.get(`rest/admin_users/${this.id}`)
                this.model = model.data[0]
            }
        }
    }
</script>

<style scoped>

</style>