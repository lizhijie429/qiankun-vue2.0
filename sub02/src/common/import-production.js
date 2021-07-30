module.exports = (file) => () => import("@/views" + file + "/index.vue");
