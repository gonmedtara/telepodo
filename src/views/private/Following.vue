<template>
  <div class="following">
    <el-row>
      <el-col :span="18">
        <div class="chat-container">
          <div class="chat-messages-container">
            <div
              class="chat-message"
              v-for="(msg, index) in messages"
              :key="index"
            >
              <el-avatar :src="msg.picUrl" />
              <p>{{ msg.message }}</p>
            </div>
          </div>
          <div class="chat-bottom-container">
            <el-icon :size="30" class="chat-upload-buttons">
              <UploadFilled />
            </el-icon>
            <el-input
              v-model="message"
              placeholder="écrire ..."
              suffix-icon="search"
              class="search-input"
            />
            <el-icon :size="20" class="chat-send-buttons">
              <Promotion />
            </el-icon>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          class="chat-user-panel"
          v-for="(user, index) in users"
          :key="index"
        >
          <el-avatar :src="user.picUrl" />
          <label>{{ user.name }}</label>
          <p>{{ user.lastmesssage }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Promotion, UploadFilled } from "@element-plus/icons-vue";
export default defineComponent({
  name: "Following",
  components: {
    Promotion,
    UploadFilled,
  },
  data() {
    return {
      message: "",
      users: [
        {
          picUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "patient-1",
          lastmesssage: "hello doctor 1",
        },
        {
          picUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "patient-2",
          lastmesssage: "hello doctor 2",
        },
      ],
      messages: [
        {
          picUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "patient-1",
          message:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          picUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "patient-2",
          message: "hello doctor 2",
        },
      ],
    };
  },
});
</script>
