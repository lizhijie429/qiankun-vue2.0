<template>
  <div ref="container" style="width: 100%; min-height: 300px"></div>
</template>

<script>
import * as monaco from "monaco-editor";
export default {
  name: "MonacoEditor",
  //引入组件
  props: {
    code: {
      type: String,
      default: "// code \n",
    },
    theme: {
      type: String,
      default: "vs-dark", // vs, hc-black
    },
    language: {
      type: String,
      default: "html",
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      monacoEditor: null,
      codeOptions: {
        value: this.code, //编辑器初始显示文字
        language: this.language, //语言支持自行查阅demo
        readOnly: true, //只读
        scrollBeyondLastLine: false, //底部代码不留白
        theme: this.theme, //官方自带三种主题vs, hc-black, or vs-dark
        roundedSelection: true,
        ...this.option,
      },
    };
  },
  mounted() {
    this.initEditor();
  },
  //监控data中的数据变化
  watch: {
    code: {
      handler(newName) {
        this.setValue(newName);
      },
    },
  },
  methods: {
    initEditor() {
      // 初始化编辑器，确保dom已经渲染
      this.monacoEditor = monaco.editor.create(this.$refs.container, this.codeOptions);
    },
    getValue() {
      this.editor.getValue(); //获取编辑器中的文本
    },
    setValue(val) {
      this.editor.setValue(val); //设置编辑器中的文本
    },
  },
  // 销毁编辑器
  destroyed() {
    this.monacoEditor.dispose();
  },
};
</script>
