<template>
  <template v-for="(item, index) in p" :key="index">
    <template v-if="item.childs == ''">
      <li class="nav-item">
        <router-link
          :to="'/' + item.slugs"
          class="nav-link"
          v-slot="{ href, navigate, isActive }"
        >
          <span :href="href" @click="navigate" :class="changeClass(isActive)">
            {{ item.name }}
          </span>
        </router-link>
      </li>
    </template>
    <template v-else>
      <li class="nav-item dropdown">
        <router-link
          :to="'/' + item.slugs"
          class="nav-link dropdown-toggle"
          v-slot="{ href, navigate, isActive }"
        >
          <span
            :href="href"
            @click="navigate"
            @mouseenter="showDropdown(item.slugs)"
            :class="changeClass(isActive)"
          >
            {{ item.name }}
          </span>
        </router-link>
        <div
          :class="'dropdown-menu ' + item.slugs"
          aria-labelledby="navbarDropdown"
        >
          <template v-for="(child, index) in item.childs" :key="index">
            <router-link
              :to="'/' + item.slugs + '/' + child.slugs"
              class="dropdown-item"
              v-slot="{ navigate, isActive }"
            >
              <span @click="navigate" :class="changeClass(isActive)">
                {{ child.name }}
              </span>
            </router-link>
          </template>
        </div>
      </li>
    </template>
  </template>
</template>

<script>
import Repository from "@/repositories/RepositoryFactory";
const Categories = Repository.get("categories");
export default {
  async setup() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(Categories.get());
      }, 2000);
    });
    const datas = await promise;
    const p = datas.data.data;
    return { p };
  },
  watch: {
    $route(to, from) {
      this.changeClass(to.params.slugs);
    },
  },
  methods: {
    toggleSearch: function () {
      if (this.loading === false) {
        const nav = document.getElementsByClassName("nav");
        const searchInput = document.getElementsByClassName("search-input");
        if (nav[0].getAttribute("class") == "nav no-search") {
          nav[0].classList.remove("no-search");
          nav[0].classList.add("search");
        } else {
          nav[0].classList.remove("search");
          nav[0].classList.add("no-search");
        }
        searchInput[0].classList.toggle("search-active");
      }
    },
    toggleMobile: function () {
      const nav = document.getElementsByClassName("collapse");
      nav[0].classList.toggle("show");
    },
    showDropdown: function (slugs) {
      const drop = document.getElementsByClassName(slugs);
      for (var item of drop) {
        item.classList.toggle("show");
      }
    },
    changeClass: function (active) {
      if (active) {
        return `active`;
      } else {
        return ``;
      }
    },
  },
};
</script>

<style>
.link-dark {
  transition: 0.5s;
}

.active {
  color: red;
}

.link-dark:hover {
  color: rgb(255, 70, 70);
}

.link-dark:hover > .no-color {
  color: black !important;
}

.nav-menu {
  font-weight: 600;
  cursor: pointer;
}
</style>
