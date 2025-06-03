import React from "react";
import "./index.css";

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="global-footer">
      <div>© {currentYear} InterViewPrep Platform </div>
      <div>
        <a href="https://www.code-nav.cn" target="_blank">
          author：hyx
        </a>
      </div>
    </div>
  );
}
