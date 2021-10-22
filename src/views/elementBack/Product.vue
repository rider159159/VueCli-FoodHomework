<template>
  <div     v-loading="loading"
>
    <el-button  @click.prevent="initData">新增商品</el-button>
    <el-table
      :data="hexAPI.data"
      stripe
      style="width: 100%"
      empty-text="讀取中"
      :default-sort = "{prop: 'price', order: 'descending'}"
    >
      <el-table-column prop="category" label="產品分類" width="180" sortable>
      </el-table-column>
      <el-table-column prop="title" label="產品名稱" width="180" sortable>
      </el-table-column>
      <el-table-column prop="origin_price" label="原價">
        <template slot-scope="props">
          {{ props.row.origin_price | commaFormat }}
        </template>
      </el-table-column>
      <el-table-column prop="price" label="特價" sortable>
        <template slot-scope="props">
          {{ props.row.price | commaFormat }}
        </template>
      </el-table-column>
      <el-table-column prop="enabled" label="是否開放">
        <template slot-scope="props">
          <span class="text-Success" v-if="props.row.origin_price">已開放</span>
          <span class="text-Danger" v-else>未開放</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="copyData('edit', scope.row)"
            >編輯</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="openDeleteUi(scope.row)"
            >刪除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 彈跳視窗 -->
    <el-dialog :title="modalTitle" :visible.sync="dialogFormVisible">
      <!-- 左 圖片區塊 -->
      <el-form :model="temporary">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="lh-60">商品圖片(點輸入欄位預覽)</div>
            <el-row  class="lh-60" :gutter="20">
              <el-col :span="12">
                <el-button type="primary" @click.prevent="addCell(temporary.imageUrl)">增加圖片欄位</el-button>
              </el-col>
              <el-col :span="12" >
                <el-button type="primary" @click.prevent="removeCell(temporary.imageUrl)">移除圖片欄位</el-button>
              </el-col>
            </el-row>
          <blockquote v-for="(item, index) in temporary.imageUrl" :key="index">
            <el-input class="lh-60 d-block" v-model="temporary.imageUrl[index]" @focus="viewImage(item)" placeholder="請輸入圖片網址"></el-input>
          </blockquote>
          <img :src="viewImageSrc" alt="商品圖片" class="img-fluid">
          </el-col>
          <!-- 右 API  -->
          <el-col :span="12">
            <el-form-item label="商品名稱">
              <el-input v-model="temporary.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="商品分類">
                  <el-input
                    v-model="temporary.category"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="單位">
                  <el-input
                    v-model="temporary.unit"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="原價">
                  <el-input
                    v-model="temporary.origin_price"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="售價">
                  <el-input
                    v-model="temporary.price"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="商品描述">
              <el-input
                type="textarea"
                v-model="temporary.description"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="商品內容">
              <el-input
                type="textarea"
                v-model="temporary.content"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button @click="updateData" type="primary">確定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      product: {
        title: '月見牛丼',
        category: '主餐',
        content: 'test',
        description: 'test',
        imageUrl: ['https://i.imgur.com/StpPn75.jpg'],
        enabled: true,
        origin_price: '2000',
        price: '1000',
        unit: '個'
      },
      hexAPI: {
        data: []
      },
      pagination: {},
      temporary: {
        imageUrl: [],
        options: {
          colors: []
        }
      },
      modalTitle: '',
      viewImageSrc: '',
      loading: true,
      message: ''
    }
  },
  methods: {
    openDeleteUi (product) {
      const vm = this
      this.$confirm(`是否要刪除 ${product.title}`, '刪除商品', {
        confirmButtonText: '確認',
        cancelButtonText: '取消'
      })
        .then(() => {
          vm.deleteData(product.id)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    /* 取得遠端 API資料 */
    // 預設為 1
    getData (page = 1) {
      const vm = this
      vm.loading = true
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`
        )
        .then(res => {
          // 取得該頁資料
          vm.hexAPI.data = res.data.data
          // 取得分頁資訊
          vm.pagination = res.data.meta.pagination
          vm.loading = false
        })
    },
    /* 新增資料 */
    addData () {
      const vm = this
      vm.loading = true
      vm.axios
        .post(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`,
          vm.temporary
        )
        .then(() => {
          vm.loading = false
          vm.dialogFormVisible = false
          vm.$swal({
            icon: 'success',
            title: '新增成功',
            showConfirmButton: false,
            timer: 1500
          }).then(result => {
            if (!result.value) {
              vm.getData()
            }
          })
        })
        .catch(error => {
          vm.loading = false
          vm.$swal({
            icon: 'error',
            title: '新增失敗',
            text: `${error.message}`,
            confirmButtonText: '確定'
          }).then(result => {
            if (result.value) {
              vm.getData()
            }
          })
        })
    },
    /* 新建資料 */
    initData () {
      this.cleanData()
      this.modalTitle = '新增商品'
      this.temporary = JSON.parse(JSON.stringify(this.product))
      this.viewImage(this.temporary.imageUrl[0])
      this.dialogFormVisible = true
    },
    /* 複製資料 */
    copyData (action, item) {
      const vm = this
      vm.cleanData()
      vm.loading = true
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`
        )
        .then(res => {
          vm.temporary = JSON.parse(JSON.stringify(res.data.data))
          vm.modalTitle = vm.temporary.title
          vm.loading = false
          vm.viewImage(vm.temporary.imageUrl[0])
          vm.dialogFormVisible = true
        })
    },
    /* 修改資料 */
    updateData () {
      const vm = this
      vm.loading = true
      if (vm.temporary.id) {
        vm.axios
          .patch(
            `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${vm.temporary.id}`,
            vm.temporary
          )
          .then(() => {
            vm.loading = false
            vm.dialogFormVisible = false
            vm.$swal({
              icon: 'success',
              title: '修改成功',
              showConfirmButton: false,
              timer: 1500
            }).then(result => {
              if (!result.value) {
                vm.getData()
              }
            })
          })
          .catch(error => {
            vm.loading = false
            vm.$swal({
              icon: 'error',
              title: '修改失敗',
              text: `${error.message}`,
              confirmButtonText: '確定'
            }).then(result => {
              if (result.value) {
                vm.getData()
              }
            })
          })
      } else {
        vm.addData()
      }
      vm.cleanData()
    },
    /* 刪除資料 */
    deleteData (id) {
      const vm = this
      vm.loading = true
      vm.axios
        .delete(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
        )
        .then(() => {
          vm.loading = false
          vm.$message({
            type: 'success',
            message: '删除成功!'
          }).then(result => {
            if (!result.value) {
              vm.getData()
            }
          })
        })
        .catch(error => {
          vm.loading = false
          vm.$swal({
            icon: 'error',
            title: '刪除失敗',
            text: `${error.message}`,
            confirmButtonText: '確定'
          }).then(result => {
            if (result.value) {
              vm.getData()
            }
          })
        })
    },
    cleanData () {
      this.temporary = {
        imageUrl: [],
        options: {
          colors: []
        }
      }
    },
    addCell (input) {
      input.push('')
    },
    removeCell (input) {
      input.pop()
    },
    viewImage (src) {
      this.viewImageSrc = src
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style lang="scss">
.el-dialog {
  width: 65%;
}
.text-Success {
  color: #67c23a;
}
.text-Danger {
  color: #67c23a;
}
.lh-60{
  line-height: 60px;
}
.el-dialog__header{
  line-height: 60px;
}
</style>
