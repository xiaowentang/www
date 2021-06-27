<template>
    <div>
        <h2>{{id ? '编辑':'新建'}}案例</h2>
        <el-form label-width="120px" style="width: 60%" @submit.native.prevent>
            <!-- <el-form-item label="所属分类">
                <el-select v-model="model.categories" multiple>
                    <el-option
                            v-for="item in categories"
                            v-if="item.name !== model.name"
                            :label="item.name"
                            :key="item._id"
                            :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="标题">
                <el-input v-model="model.insTitle"></el-input>
            </el-form-item>
            <el-form-item label="图片">
                <el-input v-model="model.img"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <vue-editor v-model="model.insArticle"
                            useCustomImageHandler
                            @image-added="handleImageAdded"></vue-editor>
            </el-form-item> 
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {VueEditor} from 'vue2-editor'

    export default {
        name: "Instance",
        props: {
            id: {}
        },
        components: {
            VueEditor
        },
        data() {
            return {
                model: {},
                categories: []
            }
        },
        created() {
            // console.log('enter', this.id)
            this.id && this.fetch()
            this.fetchCategories()
        },
        methods: {
            async save() {
                if (this.id) {
                    const res = await this.$http.put(`rest/instances/${this.id}`, this.model)

                    this.$message({
                        type: 'success',
                        message: '修改成功'
                    })

                    this.$router.push('/instance/list')
                } else {
                    const res = await this.$http.post('rest/instances', this.model)

                    this.$message({
                        type: 'success',
                        message: '添加成功'
                    })

                    this.$router.push('/instance/list')
                }
            },
            async fetch() {
                const model = await this.$http.get(`rest/instances/${this.id}`)
                this.model = model.data[0]
            },
            async fetchCategories() {
                const res = await this.$http.get('rest/categories')
                this.categories = res.data
            },
            async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
                alert()
                const formData = new FormData()
                formData.append("file", file)


                const res = await this.$http.post('upload', formData)
                Editor.insertEmbed(cursorLocation, "image", res.data.url)
                resetUploader()
            }
        }
    }
</script>

<style scoped>

</style>