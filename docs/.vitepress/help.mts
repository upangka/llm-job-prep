import fs from "node:fs";
import path from "node:path";
import type { SidebarItem } from "./types.mjs";

/**
 * 生成侧边栏
 * @param directory 相对于当前文件.cofig.mts的路径
 * @returns
 */
export function generateSidebarItems(directory: string): SidebarItem[] {
  const docsDir = path.join(__dirname, directory); // 文档目录路径
  const parentPath = normalizePath(directory); // 父路径
  const sidebarItems = fs
    .readdirSync(docsDir)
    .filter(
      (file) =>
        file.endsWith(".md") &&
        !file.startsWith("README") &&
        !file.startsWith("index")
    )
    .sort((a, b) => {
      // 提取数字前缀（如果不存在则返回 Infinity，确保无数字的文件排在后面）
      const numA = parseInt(a.match(/^\d+/)?.[0] || "Infinity");
      const numB = parseInt(b.match(/^\d+/)?.[0] || "Infinity");
      return numA - numB;
    })
    .map((file) => {
      const fileName = file.replace(".md", "");
      return { text: fileName, link: `${parentPath}${fileName}` };
    });
  return sidebarItems;
}

function normalizePath(inputPath: string): string {
  if (inputPath === "../") return "/";

  if (inputPath.startsWith("../")) {
    return inputPath.replace("../", "/") + "/";
  }

  throw new Error(`Unsupported path format: ${inputPath}`);
}
