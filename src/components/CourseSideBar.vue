<script setup lang="ts">
import { useSession } from "@/stores/session";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const session = useSession();
const navs = [
  {
    name: t("components.courseSideBar.ann"),
    path: "/announcements",
  },
  {
    name: t("components.courseSideBar.hw"),
    path: "/homeworks",
  },
  {
    name: t("components.courseSideBar.problems"),
    path: "/problems",
  },
  {
    name: t("components.courseSideBar.submissions"),
    path: "/submissions",
  },
  ...(session.isAdmin
    ? [
        {
          name: t("components.courseSideBar.members"),
          path: "/members",
        },
      ]
    : []),
];
</script>

<template>
  <ul class="menu menu-compact w-40 bg-base-100 p-2 lg:menu-normal">
    <li
      v-for="{ name, path } in navs"
      :class="[{ 'border-l-4 border-blue-500': $route.path === `/course/${$route.params.name}${path}` }]"
    >
      <router-link :to="`/course/${$route.params.name}${path}`">{{ name }}</router-link>
    </li>
  </ul>
</template>
