<template>
  <div>
    <div class="parent_main_box">
      <div class="mainbox">
        <div v-if="isShowMenu == true">
          <div class="top_main_box">
            <v-btn rounded elevation="2" small disabled>BOOST</v-btn>
          </div>
          <div class="sub_main_box">
            <div class="section_left">LIKING</div>
            <div class="section_right font-weight-bold">100</div>
          </div>
        </div>
        <div v-else class="text-center">
          <v-btn small color="deep-purple lighten-4" class="ma-2 icon_create">
            CREATE BOOST
          </v-btn>

          <div class="strike">
            <span>
              <small>Date Period</small>
            </span>
          </div>

          <div class="mt-2">
            <small>Pick Date Range</small>
          </div>

          <div>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <div>
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="from"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </div>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <div>
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date2"
                        label="to"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date2"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <div
        class="back_section_box"
        :class="isShowMenu == true ? 'bg_icon_background' : ' '"
      >
        <v-icon
          class=""
          @click="isShowMenu = !isShowMenu"
          :class="isShowMenu == true ? 'icon_menu_box_active' : 'icon_menu_box'"
          >mdi-plus</v-icon
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceBox",
  data() {
    return {
      isShowMenu: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu1: false,
      menu2: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.parent_main_box {
  position: relative;
  width: 300px;
  height: 130px;
}
.mainbox {
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 10px;
  z-index: 99;
  border: 1px solid #ccc;
  min-height: 130px;
  transition: all 0.5s;
}

.top_main_box {
  height: 30%;
}
.sub_main_box {
  display: flex;
  height: 70%;
}
.section_left {
  width: 50%;
  text-align: left;
  margin-top: 25px;
  margin-left: 10px;
}
.section_right {
  width: 50%;
  text-align: right;
  margin-top: 25px;
  margin-right: 10px;
  font-size: 20px;
}
.back_section_box {
  position: absolute;
  top: -10px;
  background: white;
  width: 90%;
  border-radius: 10px;
  height: 100px;
  z-index: 9;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  padding: 10px;
}

.mainbox:hover ~ .back_section_box {
  top: -40px;
}
.back_section_box:hover {
  top: -40px;
}

.icon_menu_box {
  color: #922ebd;
}
.icon_menu_box_active {
  //   color: white;
  color: #922ebd;
}
.bg_icon_background {
  //   background: #922ebd;
  //   color: white;
  color: #922ebd;
}
.icon_create {
  background: #3a11f138;
  border-radius: 20px;
}
.strike {
  display: block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
}

.strike > span {
  position: relative;
  display: inline-block;
}

.strike > span:before,
.strike > span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 9999px;
  height: 5px; /* space between lines */
  margin-top: -2px; /* adjust vertical align */
  border-top: 1px dotted rgb(85, 85, 85);
}

.strike > span:before {
  right: 100%;
  margin-right: 15px;
}

.strike > span:after {
  left: 100%;
  margin-left: 15px;
}
</style>
