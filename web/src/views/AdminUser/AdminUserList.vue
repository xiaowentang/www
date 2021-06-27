<template>
    <div>
        <el-table
                :data="items"
                border
                style="width: 80%;">
            <el-table-column
                    type="index"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="用户名"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    align="center"
            >
                <template slot-scope="scope">
                    <el-button @click="$router.push(`/admin_users/edit/${scope.row._id}`)" type="text" size="small">编辑
                    </el-button>
                    <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "AdminUserList",
        data() {
            return {
                items: []
            }
        },
        created() {
            this.fetch()
        },
        methods: {
            async fetch() {
                const items = await this.$http.get('rest/admin_users')
                this.items = items.data
            },
            remove(row) {
                this.$confirm(`确定删除 [ ${row.name} ] 吗？`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    await this.$http.delete(`rest/admin_users/${row._id}`)

                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })

                    this.fetch()
                })
            }
        }
    }
</script>

<style scoped>

</style>