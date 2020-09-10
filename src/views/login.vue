<template>
  <div id>
    <div class="box-box">
      <div class="box-head">
        <h2>UNI-ADMIN</h2>
      </div>
      <div class="box-box1">
        <el-form :model="rulfrom" :rules="rules" ref="rulfrom" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="rulfrom.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="rulfrom.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width:100%  " type="success" @click="resetForm('rulfrom')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../api/login";
export default {
  name: "",
  data() {
    return {
      rulfrom: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.resetForm();
  },
  methods: {
    resetForm(rulfrom) {
      //   console.log(this.$refs);

      this.$refs["rulfrom"].validate(valid => {
        if (valid) {
          Login.getlogin(this.rulfrom.username, this.rulfrom.password).then(
            res => {
              console.log(res);
              if (res.msg == "ok") {
                localStorage.setItem("jy_token", JSON.stringify(res.token));
                localStorage.setItem("jy_info", JSON.stringify(res.data));
                this.$router.push({path:"/home"});
              } else {
                this.$message({
                  message: "登录失败",
                  type: "warning"
                });
              }
            }
          );
        } else {
          this.$message({
            message: "登录失败",
            type: "warning"
          });
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */

.box-box {
  width: 443px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.box-head {
  width: 443px;
  height: 58px;
  border-bottom: 1xp solid rgba(0, 0, 0, 0.125);
}

.box-head > h2 {
  text-align: center;
  line-height: 50px;
}
.box-box1 {
  width: 443px;
  height: 226px;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  padding: 20px;
  box-sizing: border-box;
}
</style>