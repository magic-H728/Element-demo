import {createApp} from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import 'uno.css'
import router from './router/index'
// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// app.use(ElementPlus);
// app.mount("#app");
app.use(router).mount('#app')