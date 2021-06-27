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
            <!-- <el-table-column
                    prop="categories"
                    label="所属分类"
                    align="center"
            >
            </el-table-column> -->
            <el-table-column
                    prop="insTitle"
                    label="标题"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    label="图片"
                    align="center"
            >
                <template slot-scope="scope">
                    <img :src="scope.row.img" alt="">
                </template>
            </el-table-column>
            <el-table-column
                    prop="insArticle"
                    label="详情"
                    align="center"
            >
                <template slot-scope="scope">{{scope.row.insArticle | formatLength}}</template>
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    align="center"
            >
                <template slot-scope="scope">
                    <el-button @click="$router.push(`/instance/edit/${scope.row._id}`)" type="text" size="small">编辑
                    </el-button>
                    <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "CategoryList",
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
                const items1 = await this.$http.get('rest/instances')
                console.log(items1.data, 345)
                this.items = items1.data;            
            },
            remove(row) {
                this.$confirm(`确定删除 [ ${row.insTitle} ] 吗？`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    await this.$http.delete(`rest/instances/${row._id}`)

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