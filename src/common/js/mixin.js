// 通用组件接口 只定义方法 不定义具体操作

import { mapGetters } from 'vuex'

export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  // 钩子函数 组件到__触发的事件
  mounted () {
    this.handlePlaylist(this.playlist)
  },
  // click-alive组件触发的事件
  activated () {
    this.handlePlaylist(this.playlist)
  },
  // 处理方法
  methods: {
    handlePlaylist () {
      throw new Error('compnonent must implement handlePlaylist method')
    }
  },
  // 观察得到数据的变化
  watch: {
    playlist (newVal) {
      this.handlePlaylist(newVal)
    }
  }
}