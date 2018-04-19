<template>
    <div>
        <div>
            <el-upload
            class="avatar-uploader"
            action="http://localhost:9000/user/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <P>广告文案：<input type="text" ref='tt' placeholder="请设置广告名称" v-model='val1' @input='aaa(val1)'>{{num}}/18</p>
        <P>监控链接：<input type="text" placeholder="请设置广告名称" v-model='val2' @input="bbb(val2)"></p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imageUrl: '',
                val1:'',
                num:0,
                val2:""
            }
        },
        methods:{
            aaa(value){
                this.num = value.length
                this.$refs.tt.setAttribute("maxlength",18);
            },
            bbb(val){
                console.log(val)
                var reg = /^[u4e00-u9fa5]$/g;
                if (reg.test(val)){
                    console.log('china')
                } else {
                    console.log('english')                    
                }
            },
            handleAvatarSuccess(res, file) {
                console.log(file)
                this.imageUrl = "http://localhost:9000/"+res.data.value;
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
