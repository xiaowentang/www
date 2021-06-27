<template>
    <div>
        <h2>{{id ? '编辑':'新建'}}分类</h2>
        <el-form label-width="120px" style="width: 60%" @submit.native.prevent>
            <el-form-item label="上级分类">
                <el-select v-model="model.parent">
                    <el-option
                            v-for="item in parents"
                            v-if="item.name !== model.name"
                            :label="item.name"
                            :key="item._id"
                            :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Category",
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
            this.fetchParents()
        },
        methods: {
            async save() {
                if (this.id) {
                    const res = await this.$http.put(`rest/categories/${this.id}`, this.model)

                    this.$message({
                        type: 'success',
                        message: '修改成功'
                    })

                    this.$router.push('/categories/list')
                } else {
                    const res = await this.$http.post('rest/categories', this.model)

                    this.$message({
                        type: 'success',
                        message: '添加成功'
                    })

                    this.$router.push('/categories/list')
                }
            },
            async fetch() {
                const model = await this.$http.get(`rest/categories/${this.id}`)
                this.model = model.data
            },
            async fetchParents() {
                const parents = await this.$http.get('rest/categories')
                this.parents = parents.data
            }
        }
    }
</script>

<style scoped>

</style>