import Logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";
import iconActive from "@/assets/icon-active.png";
export default function navHeader() {
  const Logo = "";
  const logoWhite = "";
  const iconActive = ""
}
{/* <template>
  <div class="navbar" :class="useAPPkey !== 'platform' ? 'blackBack' : 'whiteBack'">
    <div class="header-menu">
      <div key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="useAPPkey == 'platform'" :src="logo" class="sidebar-logo" />
        <img v-else :src="logoWhite" class="sidebar-logo" />
        <span>{{ navTitle }}</span>
      </div>
      <div class="app-list" v-if="useAPPkey !== 'platform'">
        <div class="app-home" @click="handleSelect(headerApp[0].appId)">
          <i class="el-icon-arrow-left"></i>
          <span>返回系统管理</span>
        </div>
        <div v-for="(item, index) in headerApp" :key="index" class="app-box">
          <template v-if="index != 0">
            <div class="app-line"></div>
            <span
              @click="openNewApp(item, index)"
              :class="appId == item.appId ? 'app-btn-hover' : ''"
              class="app-btn"
            >
              <span>{{ item.name }}</span>
            </span>
          </template>
        </div>
      </div>
    </div>
    <div class="right-menu">
      <i
        v-if="useAPPkey === 'scrm'"
        :class="useAPPkey === 'scrm' ? 'font-white' : ''"
        class="iconfont iconicon_daohanglan_sousuo search-box"
        @click="openSearchBox(true)"
      ></i>
      <el-dropdown
        :class="useAPPkey !== 'platform' ? 'font-white' : 'font-balck'"
        class="avatar-container right-menu-item"
        trigger="hover"
      >
        <div class="avatar-wrapper">
          <el-avatar :src="circleUrl"></el-avatar>
          <span>{{ userInfo.name }}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="resetPassword">
            <span>修改密码</span>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout">
            <span>退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <resetPassword :dialog-visible="dialogVisible" @closeDialog="closeDialog" />
    <searchBox :dialog-visible="searchVisible" @closeDialog="openSearchBox(false)" />
  </div>
</template>

<script>
import Logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";
import request from "@/utils/request";
import resetPassword from "./resetPassword";
import searchBox from "./searchDIalog";
import iconActive from "@/assets/icon-active.png";
import { getProject } from "@/api/marketing/project";

export default {
  components: {
    resetPassword,
    searchBox
  },
  data() {
    return {
      logo: Logo,
      logoWhite: logoWhite,
      dialogVisible: false,
      searchDialogVisiable: false,
      circleUrl: iconActive,
      searchVisible: false
    };
  },
  computed: {
    ...mapGetters([
      "sidebar",
      "avatar",
      "device",
      "navLevel",
      "headerApp",
      "appId",
      "estateId",
      "indexRouter",
      "useAPPkey",
      "userInfo",
      "opId"
    ]),
    ...mapState({
      navTitle: state => state.settings.navTitle
    })
  },
  mounted() {
    this.getUserMessage();
    if (this.useAPPkey != "platform") {
      this.$store.dispatch("user/getMenusApp", { appId: this.appId, opId: this.opId });
    }
  },
  methods: {
    // 根据cookies获取用户信息
    getUserMessage() {
      this.$store.dispatch("user/getUserMessage");
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    logout() {
      request.get({ url: "/auth/logout" });
    },
    resetPassword() {
      this.dialogVisible = true;
    },
    handleSelect(key) {
      if (this.appId == key) {
        return;
      }
      this.$store.commit("user/SET_NOWUSE_KEY", "platform");
      this.$store.commit("user/SET_NOW_APPID", "0");
      localStorage.removeItem("basicOpId");
      localStorage.removeItem("estateId");
      this.$store
        .dispatch("user/changeManage", { appId: key, opId: "0", flag: true, permit: "platform" })
        .then(() => {
          this.$router.push({ path: this.indexRouter });
        });
    },
    // 关闭编辑弹窗
    closeDialog(key, value, rFlag) {
      this[key] = value;
      if (rFlag) {
        this.getTableList(this.search);
      }
    },
    // 打开全局搜索框
    openSearchBox(val) {
      this.searchVisible = val;
    },
    // 打开其他应用
    async openNewApp(item) {
      if (item.appPermit == "scrm") {
        return;
      }
      let projectData = await getProject({ appId: item.appId, opId: this.opId });
      if (!projectData || projectData.length == 0) {
        this.$message({
          message: "您没有此应用的权限,请为此应用配置项目",
          type: "error"
        });
        return;
      }
      if (localStorage.getItem("estateId")) {
        localStorage.removeItem("estateId");
      }
      if (
        window.location.host.indexOf("localhost") > -1 ||
        window.location.host.indexOf("127.0.0.1") > -1
      ) {
        window.location.href = `https://crm-manage.dev.wangxiaobao.com/${item.forwardPath}?opId=${this.opId}/#/`;
      } else {
        window.location.href = `//${window.location.host}/${item.forwardPath}?opId=${this.opId}/#/`;
      }
    }
  }
};
</script>

<style lang="scss">
.project-menu > .el-submenu > .el-submenu__title {
  color: #303133 !important;
  font-size: 16px;
  font-weight: 600;
}
.el-submenu__title > i {
  margin-right: 18px;
}
.el-menu-item > i {
  margin-right: 18px;
}
.project-menu > .el-submenu.is-active .el-submenu__title {
  border: 0px;
}
</style>
<style lang="scss" scoped>
.el-menu-demo >>> .is-active {
  border: 0px;
}
.right-menu > .el-menu.el-menu--horizontal {
  border: 0px;
}
.right-menu >>> .is-active {
  border: 0px;
}
@import "~@/styles/public.scss";
.el-menu-demo {
  border-bottom: 0px !important;
  li {
    font-size: 16px;
    font-weight: 600;
    margin-right: 24px;
  }
}
.header-menu {
  height: 100%;
  @extend %flex-center-row;
}
.blackBack {
  background: #374769;
  color: #fff;
}
.whiteBack {
  background: #fff;
  color: #3a74f2;
}
.navbar {
  height: 63px;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0px 33px 0px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  @extend %flex-center-row-wrap;
  justify-content: space-between;
  .sidebar-logo-link {
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 30px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
    }
  }
  .app-list {
    margin-left: 48px;
    height: 30px;
    @extend %flex-center;
    .app-home {
      cursor: pointer;
      i {
        font-size: 12px;
        color: #ffffff;
        margin-right: 4px;
      }
      span {
        font-size: 12px;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .app-box {
      @extend %flex-center;
      .app-line {
        margin: 0 16px;
        width: 1px;
        height: 12px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-sizing: border-box;
      }
      .app-btn-hover {
        width: 80px;
        height: 40px;
        background: rgba(174, 174, 174, 0.24);
        border-radius: 2px;
      }
      .app-btn {
        @extend %flex-center;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }
    .search-box {
      font-size: 25px;
      cursor: pointer;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      font-size: 18px;
      vertical-align: text-bottom;
      margin-left: 24px;
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
        span {
          margin-left: 8px;
          font-size: 14px;
        }
      }
    }
  }
}
</style> */}
