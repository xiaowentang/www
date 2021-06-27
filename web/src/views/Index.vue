<template>
    <div>
        <el-header style="text-align: right; background-color:#008fbd">
            
            <span>{{getUsername()}}</span>
            <el-dropdown>
                <i class="el-icon-setting" style="margin-left: 15px">选项</i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-container style="height: 800px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: #273b41">
                <el-menu router :default-openeds="opens" background-color="#273b41" text-color="white" active-text-color="#4d4646">
                    <el-submenu v-for="(item, index) in $router.options.routes" :index="index.toString()" v-if="item.name">
                        <template slot="title"><i class="el-icon-s-unfold"></i>{{item.name}}</template>
                        <div v-for="item2 in item.children">
                            <el-menu-item v-if="!item2.disumerable && !item2.group"
                                          :index="item2.path"
                                          :class="$route.path === item2.path ? 'is-active':''">{{item2.name}}
                            </el-menu-item>
                            <el-menu-item-group v-else>
                                <template slot="title">{{item2.group}}</template>
                                <el-menu-item
                                        :index="item2.path"
                                        v-if="!item2.disumerable"
                                        :class="$route.path === item2.path ? 'is-active':''">{{item2.name}}
                                </el-menu-item>
                            </el-menu-item-group>
                        </div>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                opens: ['0']
            }
        },
        watch: {
            $route() {
                this.opens.length = 0
            }
        },
        methods: {
            logout() {
                localStorage.clear()
                this.$router.push('/login')
                this.$message({
                    type: 'success',
                    message: '再见！'
                })
            }
        }
    };
</script>