"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import type { SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";
import type { SandpackFiles } from "@/types";

const TEMPLATES = new Set<string>([
  "static",
  "angular",
  "react",
  "react-ts",
  "solid",
  "svelte",
  "vanilla",
  "vanilla-ts",
  "vue",
  "vue-ts",
  "node",
  "nextjs",
  "vite",
  "vite-react",
  "vite-react-ts",
]);

function resolveTemplate(template: string): SandpackPredefinedTemplate {
  if (TEMPLATES.has(template)) {
    return template as SandpackPredefinedTemplate;
  }
  return "react-ts";
}

export function Playground({
  files,
  template = "react-ts",
  dependencies,
}: {
  files: SandpackFiles;
  template?: string;
  dependencies?: Record<string, string>;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/8">
      <Sandpack
        template={resolveTemplate(template)}
        files={files}
        theme="dark"
        customSetup={dependencies ? { dependencies } : undefined}
        options={{
          showLineNumbers: true,
          editorHeight: 360,
          wrapContent: true,
        }}
      />
    </div>
  );
}
