import vue from "@vitejs/plugin-vue";

import { UserConfig, ConfigEnv, loadEnv, defineConfig } from "vite";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import path from "path";

import viteCompression from "vite-plugin-compression";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: true, // 运行是否自动打开浏览器
      proxy: {
        // 反向代理解决跨域
        [env.VITE_APP_BASE_API]: {
          target: "http://localhost:8989",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""), // 替换/dev-api为target接口地址
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        // 自动导入Vue相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "@vueuse/core"],
        eslintrc: {
          enabled: false,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true,
        },
        resolvers: [],
        vueTemplate: true,
        // 配置文件生成位置(false:关闭自动生成)
        dts: false,
        // dts: "src/types/auto-imports.d.ts",
      }),

      Components({
        resolvers: [],
        // 指定自定义组件位置(默认:src/components)
        dirs: ["src/components"],
        // 配置文件位置(false:关闭自动生成)
        dts: false,
        // dts: "src/types/components.d.ts",
      }),
      // 代码压缩
      viteCompression({
        verbose: true, // 默认即可
        disable: true, // 是否禁用压缩，默认禁用，true为禁用,false为开启，打开压缩需配置nginx支持
        deleteOriginFile: true, // 删除源文件
        threshold: 10240, // 压缩前最小文件大小
        algorithm: "gzip", // 压缩算法
        ext: ".gz", // 文件类型
      }),
    ],
    // 预加载项目必需的组件
    optimizeDeps: {
      include: [
        "vue",
        "vue-router",
        "pinia",
        "@vueuse/core",
        "path-to-regexp",
        "codemirror",
      ],
    },
  };
});
